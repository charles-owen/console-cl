/**
 * @file
 * Represents a console page in the ConsoleComponents collection
 */

import {ConsoleSection} from './ConsoleSection.js';

export let ConsolePage = function(site, page) {
    this.title = page.title;
    this.route = page.route;
    this.order = page.order;
    this.component = page.component;
    this.atLeast = page.atLeast !== undefined ? page.atLeast : null;

    this.sections = [];

    this.add = function(option) {
        // Does the item have a section?
        if(option.section === undefined) {
            return;
        }

        let section = findSection(option.section.title);
        if(section !== null) {
            section.add(option);
        } else {
            let section = new ConsoleSection(site, option.section);
            this.sections.push(section);
            section.add(option);
        }
    }

    this.sort = function() {
        this.sections.sort(function(a, b) {
            return a.order - b.order;
        });

        this.sections.forEach((section) => {
            section.sort();
        });
    }

    let findSection = (title) => {
        for(let i in this.sections) {
            if(this.sections[i].title === title) {
                return this.sections[i];
            }
        }

        return null;
    }

	/**
     * Is this page available to this user?
	 * @param user User to test
	 */
	this.available = function(user) {
        return user.atLeast(this.minimumRole(user));
    }

    this.minimumRole = function(user) {
        let roleLeast = this.atLeast;
        if(roleLeast === Object(roleLeast)) {
            roleLeast = site.permissions.atLeast(roleLeast.tag, roleLeast.default);
        }

        let priorityLeast = this.atLeast !== null ? user.getRolePriority(roleLeast) : 100000;

        this.sections.forEach((section) => {
            let sectionLeast = section.minimumRole(user);
            let priority = user.getRolePriority(sectionLeast);
            if(priority !== 0 && priority < priorityLeast) {
                roleLeast = sectionLeast;
                priorityLeast = priority;
            }
        });

        if(roleLeast === null) {
            return 'A'; ///< Always ADMIN
        }

        return roleLeast;

    }
}