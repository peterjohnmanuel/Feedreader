/**
 * @file Feed Reader
 */
$(function () {

    /** Test Suite: RSS Feeds  */
    describe('RSS Feeds', function () {

        /**  Test: Check if all feeds are defined. */
        it('are defined', function () {
            /** Test Case: Check if allFeeds array defined */
            expect(allFeeds).toBeDefined();
            /** Test Case: All Feeds to have length greater than 0 */
            expect(allFeeds.length).not.toBe(0);
        });


        /** Test: has an url defined and is not empty */
        it('has an url defined and is not empty', function () {

            /** Test Case: Check if allFeeds array defined */
            expect(allFeeds).toBeDefined();

            allFeeds.forEach(testAllFeedsURL);

        });

        /** Test: has a name defined and is not empty */
        it('has a name defined and is not empty', function () {

            /** Test Case: Check if allFeeds array defined */
            expect(allFeeds).toBeDefined();

            allFeeds.forEach(testAllFeedsName);
        });

        /** 
         * @function testAllFeedsURL
         * @param feed
         */
        function testAllFeedsURL(feed) {

            /** Test Case: All feeds url to be defined  */
            expect(feed.url).toBeDefined();

            /** Test Case: Feeds url are not empty. */
            expect(feed.url).not.toBe('');            

            /** Test Case: Feeds url are valid urls. */
            expect(feed.url).toMatch(/http/);
        }

        /** 
         * @function testAllFeedsName
         * @param feed
         */
        function testAllFeedsName(feed) {

            /** Test Case: All feeds name to be defined */
            expect(feed.name).toBeDefined();

            /** Test Case: Feeds name not to be empty  */
            expect(feed.name).not.toBe('');
        }

    });

    /** Test Suite: Menu Test Suite  */
    describe('The Menu', function () {

        /** Test: menu visibility. */
        it('is not visible', function () {

            var body = $('body');

            /** Test Case: Check if the body element exists. */
            expect(body).toBeDefined();

            /** Test Case: Check if the body element has the menu-hidden class. */
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });


        /** Test: hide and show menu visibility after click event. */
        it('hides and shows it\'s visible state', function () {

            var body = $('body');

            /** Test Case: Check if the body element exists. */
            expect(body).toBeDefined();

            /** Test Case: Check if the body element has the menu-hidden class on startup. */
            expect(body.hasClass('menu-hidden')).toBeTruthy();

            var menuIconLink = $('.menu-icon-link');

            menuIconLink.click();

            /** Test Case: Check if the body element does not have the class menu-hidden. */
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            menuIconLink.click();

            /** Test Case: Check if the body element has the class menu-hidden. */
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        /** Test: side menu links. */
        it('side links exists', function () {

            var body = $('body');

            /** Test Case: Check if the body element exists. */
            expect(body).toBeDefined();

            var feedList = $('ul.feed-list');

            /** Test Case: Check if the feed class exists on element ul. */
            expect(feedList).toBeDefined();

            var feedListInnerElements = feedList.children();


            /** Test Case: Check if the feed class exists on element ul. */
            expect(feedListInnerElements).toBeDefined();

            $.each(feedListInnerElements, function (i, link) {
                /** Test Case: Check each li contains a element. */
                expect($(link).has('a').length).toBe(1);
            });
        });
    });

    /** Test Suite: Initial Entries */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /** Test: Load Feed function called  */
        it('calls the loadFeed function ', function () {

            var body = $('body');
            var feed = $('.feed .entry');

            /** Test Case: Check if the body element exists. */
            expect(body).toBeDefined();

            /** Test Case: Check if the feed class exists. */
            expect(feed).not.toBeUndefined();

            /** Test Case: Check if there is a entry link class. */
            expect(feed.has('a.entry-link')).toBeTruthy();

            var entryLinks = $('.feed a.entry-link');

            $.each(entryLinks, function (i, link) {

                /** Test Case: Check each entry-link has a article.entry element. */
                expect($(link).has('article.entry').length).toBe(1);
            });
        });
    });

    /** Test Suite: New Feed Selection */
    describe('New Feed Selection', function () {

        var allFeeds = []

        beforeEach(function (done) {
            loadFeed(0, function () {
                /**  Load all feeds from first function into allFeeds. */
                allFeeds.push($('.feed').html());
                loadFeed(1, function () {
                    /**  Load all feeds from second function into allFeeds. */
                    allFeeds.push($('.feed').html());
                    done();
                });
            });
        });

        /** Test: contect has changed */
        it('content has changed', function () {
            /** Test Case: Check that feed object are not the same. */
            expect(allFeeds[0]).not.toBe(allFeeds[1]);
        });

    });

    /** Test Suite: CSS Links check */
    describe('CSS Links', function () {

        var localeLanguage = navigator.language;

        var links = ['<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,700">',
            '<link rel="stylesheet" href="css/normalize.css">',
            '<link rel="stylesheet" href="css/icomoon.css">',
            '<link rel="stylesheet" href="css/style.css">',
            '<link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">',
            '<link href="https://www.google.com/uds/api/feeds/1.0/482f2817cdf8982edf2e5669f9e3a627/default+'+ localeLanguage +'.css" type="text/css" rel="stylesheet">'
        ];

        /** Test: CSS Links loaded onto page*/
        it('exists and are loaded onto page.', function () {

            var linkAfterLoadedAsStrings = [];

            var body = $('body');

            /** Test Case: Check if the body element exists. */
            expect(body).toBeDefined();

            var linksAfterLoaded = $('link').get();

            /** Test Case: Check the linksAfterLoaded variable is defined.  */
            expect(linksAfterLoaded).not.toBeUndefined();

            $.each(linksAfterLoaded, function (i, link) {
                linkAfterLoadedAsStrings.push(link.outerHTML);
            });

            var linksAfterLoadedJoined = linkAfterLoadedAsStrings.sort().join(',');
            var linksInitialoadedJoined = links.sort().join(',');

            /** Test Case: Check the linksAfterLoaded and links after loaded are the same. */
            expect(linksInitialoadedJoined).toBe(linksAfterLoadedJoined);
        });

    });

    /**  Test Suite: Javascript Links exists' */
    describe('Javascript Links', function () {

        /** 
         * @todo Implement javascript links loaded onto page test.
         * Test Case: Check the linksAfterLoaded and links after loaded are the same.
         */
        xit('exists and are loaded onto page', function () {
        });

    });



} ());
