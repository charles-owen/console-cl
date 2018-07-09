/**
 * @file
 * Keeps track of what table create/drop options are available on the site.
 */

export let ConsoleTables = function() {

    this.tables = [];

    this.add = function(table) {
        this.tables.push(table);
    }
}
