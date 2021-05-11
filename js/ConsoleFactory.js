import {Console} from './Console';
import TablesComponent from './TablesComponent.vue';
import ConsoleComponentBase from './ConsoleComponentBase.vue';

/**
 * Factory to create the Console object
 * @constructor
 */
export const ConsoleFactory = function() {
}

ConsoleFactory.create = function(site) {
    let siteConsole = new Console(site);

    // Save as a site property
    site.console = siteConsole;

    // Add standard options
    siteConsole.components.addOption({
        atLeast: Site.User.STAFF,
        page: {title: 'Main', route: '', order: 1},
    });

    siteConsole.components.addOption({
        atLeast: Site.User.ADMIN,
        page: {title: 'Management', route: '/management', order: 10},
        section: {title: 'Site Management', order: 1},
        title: 'Tables',
        order: 10,
        route: '/management/tables',
        routes: [
            {route: '/management/tables', name: 'tables', component: TablesComponent}
        ]
    });

    site.start( () => {
        let element = document.querySelector('div.cl-console');
        if(element !== null) {
            siteConsole.start(element);
        }
    });

    site.ConsoleComponentBase = ConsoleComponentBase;

    return siteConsole;
}