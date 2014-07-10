WARNING: This is version 0.0.0
=========================

please don't use this until version 0.0.1 - thank-you
-----------------------------------------------------

bootstrap-dynamic - dr.mq
=========================

Dynamic Responsive Media Queries
--------------------------------

bootstrap-dynamic provides a framework for adding dynamic responsive media queries to your content. Based on the bootstrap stack, Dynamic uses a plugin architecture to provide adapters for common complex content, such as interactive timelines, bootstrap carousels, and other javascript components that do not respond to traditional css media queries.

dr.mq tracks the platform, device, view-port and orientation of the device, and uses a combination of javascript, ejs templating, and dynamic css to deliver content for that device and orientation. This enables you to deliver complex content tailored to a huge array of devices and scenarios.


Dependencies
------------

* jQuery, jQuery Custom UI, jQuery UI Touch, jQuery Mobile Custom
* Bootstrap - latest versions of 2 and 3 supported
* Underscore - of course
* EJS - javascript templating system used to delivery dynamic content
* Enquire - javascript media event listening system
* Dynamic - well, you knew that...


Components
------------
* app_components - for development
    - these are not included in the bower.json file - provided for your convenience
* ejs
    - note: "bower install ejs" installs the node version - use this http://embeddedjs.com/getting_started.html
* bower_components - for development
    - cd your-project-directory/
    - if a bower_components exists already, then transfer the dependencies to your bower.json file
    - if there is no bower_components directory
        - if there is no bower.json file - copy bootstrap-dynamic/bower.json to your project root directory
        - if there is a bower.json file (and no bower_components directory), then you have not run "bower install" yet
            - you should know if you needed to run "bower install". Open it up and see what dependencies are listed, if any.
            - add them to the bootstrap-dynamic bower file or vice versa.
    - after moving the bower.json file or dependencies into your bower.json file
    - run "bower install" from your project directory
    - this will install the full versions of all the components available thru bower.
* css
* img
* js
* plugins
* tools
* vendors

Plugins
-------

* timeline - dmq for jquery.timeline.js
* carousel - dmq for bootstrap carousel - slide & still (bootstrap 2 - 3 soon)
* pretty - dmq for prettyPhoto pop=up window width - adjusted for view-ports


Why
---

* Bootstrap is awesome, but it only goes so far when you're dealing with complex content.
