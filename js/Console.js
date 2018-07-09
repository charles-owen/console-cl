/**
 * @file
 * Main object for the Console
 */

import NotFoundComponent from './NotFoundComponent.vue';
import {ConsoleComponents} from './ConsoleComponents';
import {ConsoleComponent} from './ConsoleComponent';
import {ConsoleTables} from './ConsoleTables'
import TablesComponent from './TablesComponent.vue';

let Console = function() {

}

// This makes it possible to change the console titles
Console.title = 'Site Console';

// The console components are the installed components
// like the users editor or table creation.
Console.components = new ConsoleComponents();

// The console tables component keeps track of the
// tables we may need to create
Console.tables = new ConsoleTables();

// Add standard options
Console.components.addOption({
    atLeast: Users.User.STAFF,
    page: {title: 'Main', route: '', order: 1},
});

Console.components.addOption({
    atLeast: Users.User.ADMIN,
    page: {title: 'Management', route: '/management', order: 10},
    section: {title: 'Site Management', order: 1},
    title: 'Tables',
    order: 10,
    route: '/management/tables',
    routes: [
        {route: '/management/tables', name: 'tables', component: TablesComponent}
    ]
});



Console.start = function(site) {
    if(site === undefined) {
        site = Site;
    }

    this.components.sort();
    this.components.start(this);

    // Get the installed user
    let user = site.store.state.users.user;

    //
    // Configure the template, setting up the top-level menus
    //

    let template = `<div id="console"><site-header :title="title">
<nav><ul>
<li><a href="${site.root}"><span class="home">Home</span></a></li>`;

    this.components.pages.forEach((page) => {
        if(user.atLeast(page.minimumRole(user))) {
            template += `<li><router-link to="${site.root}cl/console${page.route}">${page.title}</router-link></li>`;
        }
    });

    template += `</ul></nav>
</site-header>`;

    this.components.main.forEach((component) => {
        template += `<${component.tag} />`;
    })

    template += `
<router-view></router-view>
<site-footer></site-footer></div>`;

    //
    // Set up the routes
    //
    const routes = [];
    this.components.pages.forEach((page) => {
        if(user.atLeast(page.minimumRole(user))) {
            let component = new ConsoleComponent(this, site, page);
            routes.push({
                path: site.root + 'cl/console' + page.route, component: component
            })


            page.sections.forEach((section) => {
                section.options.forEach((option) => {
                    if(user.atLeast(option.atLeast)) {
                        option.routes.forEach((route) => {
                            let robj = {
                                path: site.root + 'cl/console' + route.route, component: route.component
                            };
                            if(route.props !== undefined) {
                                robj.props = route.props;
                            }
                            if(route.name !== undefined) {
                                robj.name = route.name;
                            }
                            routes.push(robj)
                        })

                    }
                })
            })
        }

    });

    routes.push({ path: '*', component: NotFoundComponent });

    const Header = Site.header.component();
    const Footer = Site.footer.component();

    const router = new Site.VueRouter({
        routes: routes,
        mode: 'history'
    })

    const components = {
        'site-header': Header,
        'site-footer': Footer
    }

    this.components.main.forEach((component) => {
        components[component.tag] = component.component;
    })

    let store = Site.store;

    this.masterVue = new Site.Vue({
        el: '#console',
        store,
        template: template,
        router,
        data: function() {
            return {
                title: this.title
            }
        },
        props: {

        },
        components: components,
        methods: {
            isAdmin: function() {
                return admin;
            },
            setTitle: function(title) {
                this.title = title;
                document.title = title;
            }
        },
        created() {
            this.setTitle(this.title);
        }
    })

}



export default Console;

