---
title: Integrating Crowd Sourced Cannabis from Tumblr
date: "2017-12-10"
section: blog
tags: [ 'spotlight', 'developers' ]
author: 'Ryo'
---

How do you get pictures of over 9,000 cannabis strains? You could start a very long and expensive journey of buying and documenting thousands of products. Or you can get the community pitch in their pot (pics).

When it came time to fill up the Kushy database with a myriad of dank images, we looked to WeedPornDaily, an online cannabis publication and community. Users of WPD can [submit photos to the website](http://weedporndaily.com/contribute) through a Tumblr submission form, or are curated by the staff from known stoney sources. With over 7 years of pot photos stockpiled and [organized neatly by tag](http://weedporndaily.tumblr.com/tagged/blue-dream), we were able to effortlessly search through the archive and fill our database.

## The Code

This was a pretty simple task. We take our database of over 9,000 cannabis strains and run it against the public Tumblr XML. Each strain name would be [checked as a Tumblr tag](http://weedporndaily.tumblr.com/tagged/blue-dream/xml), and if we got photos, we'd input it into an image database. The images would be associated with an `item_id` and `item_type`, where **type** would be *strains* and **ID** would be the *Strain ID*. And we'd store the image caption, would contains additional credit for the image source.

With PHP, this is accomplished fairly crudely using a combination of cURL and non-PDO SQL interactions:

```php
<?php
//mySQL
// connect to mysql
$servername = "localhost";
$username = "user";
$password = "super_secret";
$dbname = "kushy_api";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}
// Select all strains
$sql = "SELECT * from strains";
$result = $conn->query($sql);
// Open log file
$my_file = 'error-strains.txt';
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
// If we got some strains
if($result->num_rows > 0) {
  // loop through each sql result row
	while($row = $result->fetch_assoc()) {
	     // reset error handling
        $error = false;
        $strain_id = $row['id'];
        $name = $row['name'];// pull API
        $url = "http://weedporndaily.tumblr.com/tagged/$name/xml";
        echo $url;
        $json_new = get_data($url);
        
        // checks if Tumblr spit back a 400 Bad Request, or a real XML object
        try {
            $object = new SimpleXmlElement($json_new);
        } catch (Exception $e) {
        // Do something with the exception, or ignore it.
            $error = true;
            // log strains that don't have images
            $data = "\n".$name;
            fwrite($handle, $data);
        }
        
        // if no error
        if($error == false) {
        // make sure we have a post
        if(isset($object->posts->post)) {
            // loop through each post
            foreach($object->posts->post as $entry) {
                // only proceed if we actually have a photo URL
                if(isset($entry->{'photo-url'})) {
                    $photo = $entry->{'photo-url'};
                    $caption =  $entry->{'photo-caption'};
                    echo "<li><a href='$photo'><img src='$photo' width='100' /></a></li>";
                        // Insert into DB
                    $sql = "INSERT INTO images ( item_id, item_type, image_url, caption )
                    VALUES ('$strain_id', 'strains', '$photo', '$caption')";
                    //check for errors - print in JS console
                    if ($conn->query($sql) === TRUE) {
                        ?>
                        <script>
                        console.log('Success');
                        </script>
                        <?php
                    } else {
                        ?>
                        <script>
                        console.log(`Error <?php echo mysqli_error($conn); ?>`);
                        </script>
                        <?php
                    }
                }
            }
        }
        }
        
    }
}
fclose($handle);
```

We also create a log (`error-strains.txt`) of every strain that isn't represented on Tumblr, so we can double check and have a better understanding of where the holes are in the data.


## The Result

After about 30 minutes of processing, we pulled over 3,000 photos for our 9,000+ strains. 

And that's only pulling the *first page* of images for each strain that was picked up. Many strains have hundreds of pages of images, like [O.G. Kush](http://weedporndaily.tumblr.com/tagged/og-kush), which would give us easily over 10k images alone. We'll save that scrape for another day.

Thank you again to WeedPornDaily and it's community for providing the immense wealth of well sorted cannabis for us to parse and import into the [Kushy API](http://api.kushy.net)

Oscar

***

**Keep Reading:**
* [WeedPornDaily](http://weedporndaily.com)
* [Tumblr API v1](https://www.tumblr.com/docs/en/api/v1)
* [Kushy Github](http://github.com/kushyapp)