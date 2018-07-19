---
title: The Start of the Future
date: "2017-12-08"
section: blog
tags: [ 'announcements' ]
author: 'Ryo'
---

We're big fans of fast, responsive apps. There's nothing more discouraging than slugging around a website, waiting for each page to chug into place. Things should be reactive to our actions, and feel fairly seamless. The opposite of clunky.

Here at Kushy, we've done our best to develop a website full of all the features we need. The one thing we've struggled with, is the **user experience**. As good as our design is, we're inherently limited by our framework, which makes the site slower than we'd prefer. 

Now we're hoping to shed our relationship with Wordpress and migrate our tech stack to a more efficient architecture.

## Introducing new.kushy.net

This will be the home of our new developments with technology like React, Node, etc 👉 [new.kushy.net](http://new.kushy.net) 👈 Test away! Let us know what you think about the look, feel, and functionality.

### The New Tech Stack

The plan is to run a NodeJS/Express based API, which transmits our cannabis data to anyone. We'll have a React app on another NodeJS server that server side renders our app to ensure best SEO practices and improve UX. Businesses will have their own dashboard to connect to the API and manage their shops, inventory, etc -- this'll be created with PHP7 and jQuery for the highest level of compatibility and better safety than using heavy client-side scripts.

> Business Dashboard <-- (Node API) -> React

## Wordpress is slow

We're currently running Wordpress as our CMS, with a couple handfuls of plugins to transform Wordpress into a different beast. It can scale, but requires lots of tweaking and extra paid services (CDNs, cloud distribution, etc). And it *works*, but requires custom written plugins. Which is almost *insulting*, when the community touts the expansiveness of the plugin ecosystem, and most plugins are so poorly written they bog down your site (*or create immense security risks*).

Rather than rewriting the plugins, and dropping cash on CDNs, we opted to spend the development time engineering a new, custom codebase.

## Don't You Have An API?

We first used the Wordpress API as the primary cannabis API. Then we migrated to the Directus API, which made the process faster and easier. Now we've hit the wall with the current API, where we're requiring really custom endpoints that do specialized queries (lat/lng region mapping, complex JOINs, lots of good stuff). 

We could edit the Directus API to accomplish our goal, but we weren't a fan of codebase. And after minimal testing using Node and Express, it became clear it'd be faster to write it from scratch -- our way.

## Time to create the future

The future contains a lot of JavaScript.

### NodeJS

We use Node for our server because of how lightweight and fast it is. It's also incredibly easy to cluster Node server, as well as break up Node apps into microservices to spread across the cloud. 

> [We want to slay the monolith.](https://www.linux.com/news/event/nodejs/2017/3/slaying-monoliths-netflix-nodejs) 

It's time to end the era of a large application hosted on a single server. We've been slowly weaned off the monolith by cloud-based services such as CDN, but there's no reason our application can't be created in a modular nature to operate independently.

### ReactJS

You might be asking your why React?

* Many sites are making the switch and seeing the performance and UX benefits.
* React is now MIT licensed, allowing for greater growth and adoption
* Even Wordpress is switching to React, from it's [admin panel](https://github.com/Automattic/wp-calypso) to theme creators using it on the frontend with the WP API.

We can argue about [Angular vs React vs Vue](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176), but at the end of the day, the discussion is still surrounded around the adoption of Javascript based MVC frameworks. It's clear that React (or any technology we choose) may be an opinionated decision, but the competitive options are all within close enough margins that discounts any fear of refactoring.

That's why we have our eyes on React. Not because it's a magic solution to the myriad of technical issues that create slow site speeds. We're looking at React because of how powerful the tiny library is, and the potential to scale.

It's why companies like Airbnb and Netflix are using it, and giants like Yelp are migrating their complex codebase to it. React does an amazing job of managing the DOM in combination with state, making websites update minor details lightning fast without ever leaving the page.

## What's left?

With [New.Kushy](http://new.kushy.net), we created a rough test of React's potential. There's still a few key features missing from making full replacing our Wordpress site. User authentication, server side rendering, there's quite a few features we're looking forward to implement.

Many of the present limitations on our new tech stack are based on our antiquated hosting platform. We're currently residing on server with pre-baked software that makes our job easier and harder at the same time. Things like Apache have been great for decades, but we're looking to making the switch to platforms like NGINX. 

Keep your eyes peeled! And let us know what you think [on Twitter!](http://twitter.com/kushyapp)

Cheers!
Oscar

***

**Keep Reading**
* [The New Kushy](http://new.kushy.net)
* [Slaying the Monolith with Netflix](https://www.linux.com/news/event/nodejs/2017/3/slaying-monoliths-netflix-nodejs)
* [Yes, React is taking over front-end development. The question is why.](https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)