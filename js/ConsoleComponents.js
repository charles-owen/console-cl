/**
 * @file Management of all console components
 */

import {ConsolePage} from './ConsolePage.js';

export let ConsoleComponents = function() {

    //
    // Start scripts are run when the console is started
    //
    let start = [];

    this.addStart = function(script) {
        start.push(script);
    }

    this.start = function(console) {
        start.forEach((startup) => {
            startup(console);
        })
    }

    //
    // Any components to add to the main page (every page)
    //
    this.main = [];

    this.addMainComponent = function(tag, component, order) {
        this.main.push({
            tag: tag,
            component: component,
            order: order
        });
    }

    //
    // Console options are menu options in the course console.
    // This is how the top-level menus, sections, and links
    // are defined.
    //

    let options = [];

    this.addOption = function(option) {
        options.push(option);
    }

    this.pages = [];

    /**
     * Sort the components into a structure
     * for creating the management pages.
     */
    this.sort = function() {
        options.forEach((option) => {
            let page = findPage(option.page.title);
            if(page !== null) {
                page.add(option);
            } else {
                let page = new ConsolePage(option.page);
                this.pages.push(page);
                page.add(option);
            }
        });

        // Sort the pages, sections, and options in order
        this.pages.sort(function(a, b) {
            return a.order - b.order;
        });

        this.pages.forEach((page) => {
            page.sort();
        })

        // Sort any main components
        this.main.sort(function(a, b) {
            return a.order - b.order;
        });
    }

    this.getPages = function() {
        return this.pages;
    }

    let routes = [];

    this.addRoute = function(route) {
        routes.push(route);
    }

    this.addRoutes = function(addroutes) {
        for(let route of addroutes) {
            routes.push(route)
        }
    }

    this.getRoutes = function() {
        return routes;
    }

    /**
     * Given a list of items of the form {title: 'title', order: 'order'},
     * find an item with a given title.
     * @param list
     * @param title
     */
    let findPage = (title) => {
        for(let i in this.pages) {
            if(this.pages[i].title === title) {
                return this.pages[i];
            }
        }

        return null;
    }

}


