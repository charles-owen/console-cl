import {ConsoleSection} from './ConsoleSection';

/**
 * Represents a console page in the ConsoleComponents collection
 * @param {Site} site The site object
 * @param page Object representation of page as passed from the server
 * @constructor
 */
export let ConsolePage = function(site, page) {
    /** Page title */
    this.title = page.title;

    /** Router to get to this page */
    this.route = page.route;

    /** Order of page presentation in a component menu */
    this.order = page.order;

    /** The page component */
    this.component = page.component;

    /** Optional minimum user role to access the page */
    this.atLeast = page.atLeast !== undefined ? page.atLeast : null;

    /** Page sections */
    this.sections = [];

	/**
     * Add a section to the page.
	 * @param option
	 */
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

	/**
     * Sort page sections into order
	 */
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

	/**
     * Compute minimum role to be able to access this page.
     *
     * The minimum role is determined by what is specified for
     * this page plus any pages linked to by this page.
	 * @param user
	 * @returns {*}
	 */
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