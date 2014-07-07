Dynamic
=======

Dynamic Responsive Media Queries - DRMQ
---------------------------------------

Dynamic provides a framework for adding dynamic responsive media queries to your content. Based on the bootstrap stack, Dynamic uses a plugin architecture to provide adapters for common complex content, such as interactive timelines, bootstrap carousels, and other javascript components that do not respond to traditional css media queries. 

Dynamic tracks the platform, device, viewport and orientation of the device, and uses a combination of javascript, ejs templating, and dynamic css to deliver content for that device and orientation. This enables you to deliver complex content tailored to a huge array of devices and scenarios.


Dependencies
------------

* jQuery, jQuery Custom UI, jQuery UI Touch, jQuery Mobile Custom
* Bootstrap - latest versions of 2 and 3 supported
* Underscore - of course
* EJS - javascript templating system used to delivery dynamic content
* Enquire - javascript media event listening system
* Dynamic - well, you knew that...

Architecture
------------

Plugins
-------

* timeline - dmq for jquery.timeline.js
* carousel - dmq for bootstrap carousel (currently only bootstrap version 2)
* * slide & still
* pretty - dmq for 


Why
---

* Bootstrap is awesome, but it only goes so far when you're dealing with complex content.
