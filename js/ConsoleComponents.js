/**
 * @file Management of all console components
 *
 * Components are:
 * start scripts run when the console is started (addStart)
 * main Components added to every page (addMainComponent)
 * options Adds top-level menu options and options on pages (addOption)
 * routes Adds routes to the console directory (addRoute, addRoutes)
 */

import {ConsolePage} from './ConsolePage.js';

export let ConsoleComponents = function(site) {

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
    // The course subsystem uses this to add a bar the selects
    // the course section right below the menu bar.
    //
    this.main = [];

    this.addMainComponent = function(tag, component, order) {
        // this.main.push({
        //     tag: tag,
        //     component: component,
        //     order: order
        // });
    }

    this.nav2 = [];

    this.addNav2 = function(component, order) {
        this.nav2.push({
            component: component,
            order: order
        })

        this.nav2.sort((a, b) => {
            return a.order - b.order;
        });

        return component;
    }

    this.removeNav2 = function(vue, component) {
        if(Array.isArray(component)) {
            for(let c of component) {
                this.removeNav2(vue, c);
            }

            return;
        }

        for(let i=0; i<this.nav2.length; i++) {
            if(this.nav2[i].component === component) {
                this.nav2.splice(i, 1);
                vue.$set(this, 'nav2', this.nav2);
                return;
            }
        }
    }

    this.addNav2Link = function(vue, name, order, click) {
        let component = {
            template: `<a @click.prevent="click">${name}</a>`,
            methods: {
                click() {
                    click();
                }
            }
        };
        this.addNav2(component, order);

        this.nav2.sort((a, b) => {
            return a.order - b.order;
        });

        vue.$set(this, 'nav2', this.nav2);
        return component;
    }

    this.nav2right = null;
    this.nav2left = null;

    //
    // Console options are menu options in the site console.
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
                let page = new ConsolePage(site, option.page);
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


