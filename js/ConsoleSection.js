
import {ConsoleSectionOption} from './ConsoleSectionOption';

/**
 * Console section: These are the <h2> page sections
 * @constructor
 */
export let ConsoleSection = function(site, section) {
    this.title = section.title;
    this.order = section.order;

    this.options = [];

    this.add = function(option) {
        this.options.push(new ConsoleSectionOption(site, option));
    }

    this.sort = function() {
        this.options.sort(function(a, b) {
            return a.order - b.order;
        });
    }

    this.available = function(user) {
        return user.atLeast(this.minimumRole(user));
    }

    /**
     * Determine the minimum role for all options
     * in this section so we know if we can show the section.
     * @param user A user, so we can know what the possible roles are
     * @returns {string} Role
     */
    this.minimumRole = function(user) {
        if(this.options.length === 0) {
            return 'A';
        }

        let roleLeast = null;
        let priorityLeast = 1000000;

        this.options.forEach((option) => {
	        let role = option.atLeast;
	        if(role === Object(role)) {
		        role = site.permissions.atLeast(role.tag, role.default);
	        }

            let priority = user.getRolePriority(role);
            if(priority !== 0 && priority < priorityLeast) {
                roleLeast = role;
                priorityLeast = priority;
            }
        });

        if(roleLeast === null) {
            return 'A'; ///< Always ADMIN
        }

        return roleLeast;
    }
}