/**
 * @file
 * Console section: These are the <h2> page sections
 */

export let ConsoleSection = function(section) {
    this.title = section.title;
    this.order = section.order;

    this.options = [];

    this.add = function(option) {
        this.options.push(option);
    }

    this.sort = function() {
        this.options.sort(function(a, b) {
            return a.order - b.order;
        });
    }

    /**
     * Determine the minimum role for all options
     * in this section.
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
            let priority = user.getRolePriority(option.atLeast);
            if(priority !== 0 && priority < priorityLeast) {
                roleLeast = option.atLeast;
                priorityLeast = priority;
            }
        });

        if(roleLeast === null) {
            return 'A'; ///< Always ADMIN
        }

        return roleLeast;
    }
}