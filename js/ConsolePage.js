/**
 * @file
 * Represents a console page in the ConsoleComponents collection
 */

import {ConsoleSection} from './ConsoleSection.js';

export let ConsolePage = function(page) {
    this.title = page.title;
    this.route = page.route;
    this.order = page.order;

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
            let section = new ConsoleSection(option.section);
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

    this.minimumRole = function(user) {
        let roleLeast = null;
        let priorityLeast = 1000000;

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