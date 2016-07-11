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
                // Test: Feeds url not to be empty 
                expect(feed.url).not.toMatch(/''/);
            });

        });

        // Test for all Feeds has populated name.
        it('all Feeds has populated name', function () {

            // Test: Check if allFeeds array defined
            expect(allFeeds).toBeDefined();

            // Test: All Feeds to have lenght greater than 0
            expect(allFeeds.length).not.toBe(0);

            // Loop over all Feeds                
            allFeeds.forEach(function (feed) {
                // Test: All feeds name to be defined 
                expect(feed.name).toBeDefined();
            });

            // Loop over all Feeds 
            allFeeds.forEach(function (feed) {
                // Test: Feeds name not to be empty 
                expect(feed.name).not.toMatch(/''/);
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


    });



    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
} ());
