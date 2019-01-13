/**
 * Keeps track of what table create/drop options are available on the site.
 * @constructor
 */
export let ConsoleTables = function() {

    this.tables = [{
        title: 'Site',
        order: 0,
        api: '/api/site/tables'
    }];

    this.add = function(table) {
        this.tables.push(table);
    }
}
