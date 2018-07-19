---
title: Kushy METRC PHP SDK
date: "2018-07-19"
section: blog
cover_image: './KBlog-Metrc-PHP-SDK.jpg'
tags: [ 'tools', 'announcements', 'developers' ]
author: 'Ryo'
---

Keeping track of legal cannabis is one hell of a job. That's why many states that legalize medicinal and recreational cannabis license a 3rd party seed to sale tracking solution to handle the sticky task. These solutions provide businesses a place to input their activity (plant growth, transfers, sales) so the state can monitor and ensure compliance with all regulations and restrictions. [**METRC**](http://metrc.com) is one of these seed to sale tracking solutions currently licensed by 13 states. [Kushy](http://kushy.net) is certified with METRC to access their API, so that we can update seed to sale information on behalf of businesses. 

In order to make accessing the API easier for our developer, we put together an SDK for PHP programmers looking to quickly query METRC API endpoints. Our goal was to create a simple to use interface for the METRC API, without requiring the user manually input endpoints and whatnot. The result is a simple to use API for an API:

```php
require_once '../../../vendor/autoload.php';
use Kushy\Metrc\Routes\Harvests;
$harvests = new Harvests('ca', $vendorApiKey, $userApiKey);
$harvests = $metrc->getActive($licenseNumber, $startDate, $endDate);
```

## The Construction

The SDK is a simple class that uses the Guzzle library to create HTTP requests on behalf of the user. Each endpoint 'route' is a separate class that extends the base Guzzle class.

## How to use it


1. Install the METRC package with Composer: `composer require 'kushy/metrc-php-sdk'`
2. Require whichever route class you need in your application - in this case we want to access the `/harvests/` endpoint (*assuming you're using PSR-4*):

```php
require_once '../../../vendor/autoload.php';

use Kushy\Metrc\Routes\Harvests;
```

3. Create a new instance of the route class (`Harvests`) and pass through your state's abbreviated name (in this case `ca` for California) and Vendor + User API keys:

```php
$harvests = new Harvests('ca', $vendorApiKey, $userApiKey);
```

4. Use one of the class methods to query the API - this example grabs the active harvests:

```php
$harvests = $metrc->getActive($licenseNumber, $startDate, $endDate);
```

> You can find the package on [Packagist here](https://packagist.org/packages/kushy/metrc-php-sdk), as well as a README with more details (instructions, tips and tricks, etc).

## Making cannabis (development) simpler

Here at Kushy we're always innovating and contributing back to the cannabis community to ensure that life gets easier for everyone in the cannabis chain of command -- from consumers to businesses to developers. If we can make it easier to integrate with METRC, it increases the potential for more excellent apps that keep businesses compliant and safe from losing their license.

If you're interested in contributing and improving the SDK, [fork us over on Github and send a PR our way!](https://github.com/kushyapp/kushy-metrc-php-sdk)

Stay kushy,
Oscar

***

**Keep Reading**

* [kushy/metrc-php-sdk](https://packagist.org/packages/kushy/metrc-php-sdk)
* [METRC](http://metrc.com)
* [METRC API Docs for California](https://api-ca.metrc.com/Documentation/)