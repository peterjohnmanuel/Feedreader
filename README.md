# Project Overview

* This project demonstrates and incorporates jasmine testing during the Udacity Feed Reader (Unit Testing) Project.

# Running the code

* To run the code check out the repository or clone the repository from here [Feed Reader](https://github.com/peterjohnmanuel/Feedreader)
* Open the folder that you downloaded after clone or extraction.
* Click on the index.html file to start the application in a web browser.( eg Google Chrome)
* The unit test will be at the bottom of the page under the jasmine test.

# Unit Tests

## Testsuite: RSS Feeds

### Test: all Feeds has populated URL

* Check if allFeeds array defined.
* Check if allfeeds array to have a length greater than 0.             
* Check if allfeeds elements has url defined. 
* Check if allfeeds elements url is not empty. 
* Check if feed is a valid url


### Test: all Feeds has populated name

* Check if allFeeds array defined.
* Check if allfeeds array to have a length greater than 0.   
* Check if allfeeds elements has name defined. 
* Check if allfeeds elements name is not empty. 


## Testsuite: The Menu

### Test: menu visibility

* Check if the body element exists.
* Check if the body element has the menu-hidden class.

### Test: hide and show menu visibility

* Check if the body element exists.
* Check if the body element has the menu-hidden class.
* Check if the body element exists.
* Check if the body element has the menu-hidden class on startup.
* Check if the body element does not have the class menu-hidden.
* Check if the body element has the class menu-hidden.

### Test side menu links.

* Check if the body element exists.
* Check if the feed class exists on element ul.
* Check if the feed class exists on element ul.
* Check each li contains a element.

## Test suite: Initial Entries

### Test : Load Feed function called 

* Check if the body element exists.
* Check if the feed class exists.
* Check if there is a entry link class.
* Check each entry-link has a article.entry element.

## Test suite: New Feed Selection

### Test : Feed Content Changed.

* Check if the body element exists.
* Check if the feed class exists.
* Check if the initial feed object and the new feed object are the same.


## Test suite: CSS Links check

### Test CSS Links loaded onto page

* Check the body to be defined. 
* Check the linksAfterLoaded variable is defined. 
* Check the linksAfterLoaded and links after loaded are the same.


## Test suite: Javascript Links check (TODO)

* TODO : Write this test.


# URLs used during research and implementation of project.

* [Regular Exp Match elements of a url](http://www.regextester.com/20)
* [RegExLib.com](http://regexlib.com/Search.aspx?k=url&AspxAutoDetectCookieSupport=1)
* [JQuery event.stopPropagation](https://api.jquery.com/event.stoppropagation/)
* [Using Jasmine 2.0's New done() Function to Test Asynchronous Processes](http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)
* [Jasmine Github](http://jasmine.github.io/)
* [Testing Javascript Using the Jasmine Framework](http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html)
