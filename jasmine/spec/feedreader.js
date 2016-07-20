/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Test for all Feeds has populated url.
        it('all Feeds has populated url', function () {

            // Test: Check if allFeeds array defined
            expect(allFeeds).toBeDefined();

            // Test: All Feeds to have lenght greater than 0
            expect(allFeeds.length).not.toBe(0);

            // Loop over all Feeds                
            allFeeds.forEach(function (feed) {
                // Test: All feeds url to be defined 
                expect(feed.url).toBeDefined();
            });

            // Loop over all Feeds 
            allFeeds.forEach(function (feed) {
                // Test: Feeds url are not empty and contain a valid url. 
                expect(feed.url).toMatch(/http/);
            });

        });

        // Test for all Feeds has populated name.
        it('all Feeds has populated name', function () {

            // Test: Check if allFeeds array defined
            expect(allFeeds).toBeDefined();

            // Test: All Feeds to have length greater than 0
            expect(allFeeds.length).not.toBe(0);

            // Loop over all Feeds                
            allFeeds.forEach(function (feed) {
                // Test: All feeds name to be defined 
                expect(feed.name).toBeDefined();
            });

            // Loop over all Feeds 
            allFeeds.forEach(function (feed) {
                // Test: Feeds name not to be empty 
                expect(feed.name).toMatch('');
            });

        });

    });

    // Menu Test Suite
    describe('The Menu', function () {

        // Test menu visibility.
        it('menu visibility', function () {

            // Load body element into variable.
            var body = $('body');

            // Test: Check if the body element exists.
            expect(body).toBeDefined();

            // Test: Check if the body element has the menu-hidden class.
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });


        // Test to hide and show menu visibility after click event.
        it('hide and show menu visibility', function () {
            // Load body element into variable.
            var body = $('body');

            // Test: Check if the body element exists.
            expect(body).toBeDefined();

            // Test: Check if the body element has the menu-hidden class on startup.
            expect(body.hasClass('menu-hidden')).toBeTruthy();

            // Store the menu icon link element in a cached variable.
            var menuIconLink = $('.menu-icon-link');

            // Toggle the click event.
            menuIconLink.click();

            // Test: Check if the body element does not have the class menu-hidden.
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            // Toggle the click event.
            menuIconLink.click();

            // Test: Check if the body element has the class menu-hidden.
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        // Test side menu links.
        it('Side menu links exists', function () {

            // Load body element into variable.
            var body = $('body');

            // Test: Check if the body element exists.
            expect(body).toBeDefined();

            var feedList = $('ul.feed-list');

            // Test: Check if the feed class exists on element ul.
            expect(feedList).toBeDefined();

            var feedListInnerElements = feedList.children();

            // Test: Check if the feed class exists on element ul.
            expect(feedListInnerElements).toBeDefined();

            $.each(feedListInnerElements, function (i, link) {
                // Test: Check each li contains a element.
                expect($(link).has('a').length).toBe(1);
            });
        });
    });

    // Test suite: Initial Entries
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done )
        });

        // Test Description : Load Feed function called 
        it('Load Feed function called ', function (done) {

            // Load body element into variable.
            var body = $('body');

            // Load feed element into variable.
            var feed = $('.feed');
            // Test: Check if the body element exists.
            expect(body).toBeDefined();

            // Test: Check if the feed class exists.
            expect(feed).not.toBeUndefined();

            // Get all children into a dom field.
            var feedDomElement = feed.children();

            // Test: Check if there is a entry link class.
            expect(feedDomElement.has('a.entry-link')).toBeTruthy();

            // Get all entry links.
            var entryLinks = $('.feed a.entry-link');

            // Loop over all entry links 
            $.each(entryLinks, function (i, link) {

                // Test: Check each entry-link has a article.entry element.
                expect($(link).has('article.entry').length).toBe(1);
            });

            done();
        });
    });

    // Test suite: New Feed Selection
    describe('New Feed Selection', function () {

        var feed;

        beforeEach(function (done) {
            loadFeed(0, function () {
                feed = $('.feed');
                done();
            })
        });

        it('Feed Content Changed.', function (done) {

            // Load body element into variable.
            var body = $('body');

            // Load feed element into variable.
            var feedAfterLoad = $('.feed');
            // Test: Check if the body element exists.
            expect(body).toBeDefined();

            // Test: Check if the feed class exists.
            expect(feedAfterLoad).not.toBeUndefined();

            // Test: Check if the initial feed object and the new feed object are the same.
            expect(feedAfterLoad).not.toBe(feed);

            done();
        });

    });

    // Test suite: CSS Links check
    describe('CSS Links exists', function () {

        var links = ['<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,700">',
            '<link rel="stylesheet" href="css/normalize.css">',
            '<link rel="stylesheet" href="css/icomoon.css">',
            '<link rel="stylesheet" href="css/style.css">',
            '<link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">',
            '<link href="https://www.google.com/uds/api/feeds/1.0/482f2817cdf8982edf2e5669f9e3a627/default+en.css" type="text/css" rel="stylesheet">'
        ];

        // Test : Check if the css links exists. 
        it('CSS Links loaded onto page', function () {

            var linkAfterLoadedAsStrings = [];
            
            var body = $('body');

            // Test: Check the body to be defined. 
            expect(body).toBeDefined();

            var linksAfterLoaded = $('link').get();

            // Test: Check the linksAfterLoaded variable is defined. 
            expect(linksAfterLoaded).toBeUndefined();

            $.each(linksAfterLoaded, function (i, link) {
                linkAfterLoadedAsStrings.push(link.outerHTML);
            });

            var linksAfterLoadedJoined = linkAfterLoadedAsStrings.sort().join(',');
            var linksInitialoadedJoined = links.sort().join(',');

            // Test: Check the linksAfterLoaded and links after loaded are the same.
            expect(linksInitialoadedJoined).toBe(linksAfterLoadedJoined);
        });

    });

    // Test suite: Javascript Link check
    describe('Javascript Links exists', function () {

        // TODO : Right test
        xit('Javascript Links loaded onto page', function () {

            

        });

    });



} ());
