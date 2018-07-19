---
title: Kushy Blog is Alive!
date: "2017-12-06"
section: blog
tags: [ 'blog', 'kirby', 'cms', 'announcements' ]
author: 'Ryo'
---

After much deliberation over picking a cloud-based service like Medium or Tumblr, or even a Git-powered JAM-stack with [Jekyll](https://jekyllrb.com/) or [GatsbyJS](gatsbyjs.org), we finally settled on a blog framework for Kushy: [KirbyCMS](https://getkirby.com/). 

Don't get me wrong. We'll still post on [Medium](https://medium.com/kushyapp) and [Tumblr](https://kushyapp.tumblr.com/). But we'll do the thing that brands like *Google Design* does, and cross-post our content for maximum visibility.

## Kirby the Pink Guy?

<div style='position:relative;padding-bottom:54%'><iframe src='https://gfycat.com/ifr/OblongBruisedKronosaurus' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0' allowfullscreen></iframe></div>

Not *that* Kirby. Kirby allows us to serve static content like a [Hugo](https://gohugo.io/), but gives our writers the power of an admin panel to easily create content without activating *builds* or *deploys*. It's super fast, and very flexible. We can quickly create an API to serve content to our other apps. And when it comes time to migrate content, all of it is stored locally in a combination of YAML structuring (or *blueprints*) and Markdown. 

## The Design

I whipped this up in Sketch over a night. Something simple, yet exemplifying the fundamental elements of our brand guide. It was easily adapted to Kirby thanks to their MVC style app structure. I created a couple core templates and a number of *'snippets'* or components to include around the site (header, footer, navigation, etc).

## The Structure

The goal of the blog was to have a home for Kushy's news and announcements, as well as a place for our development team to blog about their advancements. 

Rather than creating two separate blogs, or even sorting things out with categories (which gets confusing for both teams), we took advantage of Kirby's custom post types. Similar to Wordpress and [Advanced Custom Fields](https://www.advancedcustomfields.com), you can create new types of posts with different meta data. So we'd have a blog post type, and a dev post type -- each with differing fields, like their own set of categories.

This allowed us to separate the content physically in different folders, as opposed to mixing posts in one giant blog folder. And it allowed users in the backend to easily find and author posts in either side of the site. Dev's have their blog, everyone else has theirs. Peace is hashed out in the blogroll.

### The Team

Any of the cool cats working on Kushy are free to have an account on the blog. After an admin creates the initial user account, the user can login and fill out their author bio with their social media links. These are easily integrated with Kirby's blueprint system, allowing us to pull this data up on any post:

(gist: https://gist.github.com/kushyapp/1b0ff056a8f1e6f630740c83424f8219)

## The Future

You never know. We could toss out this structure tomorrow in favor of a JAM stack. Ideally however, this is the best option for Kushy in terms of it's current growth trajectory. The blog is setup to horizontally scale on it's own separate distribution for a while.

But **things happen** and if we explode (*in terms of traffic*), we'll need to integrate things like a CDN to store our images or a database to query for searches (ironic how static swings back to a database eventually at scale). And Kirby's admin panel is great, but it lacks some minor touches that would refine the UX (like autosaving posts occasionally so I don't get logged out and lose all my writing).

We're also looking to integrate the Kushy API. Widgets for displaying strain profiles, or shop listings, or even an embeddable menu. We'd like to make the connection between the blog and Kushy as seamless as possible thanks to the power of the API.

Lots of cool stuff to look forward to!

Oscar

***

**Further Reading:**
* [KirbyCMS](http://getkirby.com)
* [Kushy API](http://api.kushy.net)
* [Kushy Medium](https://medium.com/kushyapp)
* [Kushy Tumblr](https://kushyapp.tumblr.com/)