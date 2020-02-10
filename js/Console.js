import {ConsoleComponents} from './ConsoleComponents';
import {ConsoleTables} from './ConsoleTables'
import {ConsoleComponent} from './ConsoleComponent';
import NavComponent from './NavComponent.vue';
import NotFoundComponent from './NotFoundComponent.vue';

/**
 * Object that represents the site console.
 * @param {Site} site The site object
 * @constructor
 */
export const Console = function(site) {
	/** This property makes it possible to change the console title
     * @memberOf Console */
	this.title = 'Site Console';


    /** The console components are installed components
     * like the users editor or table creation. */
    this.components = new ConsoleComponents(site);

    /** The console tables component keeps track of the
     * database tables we may need to create */
    this.tables = new ConsoleTables();

	/**
     * Start the console system.
	 * @param element Element we put the console VUE into
	 */
	this.start = function(element) {
        this.components.sort();
        this.components.start(this);

        // Get the installed user
        let user = site.store.state.user.user;

        //
        // Configure the template, setting up the top-level menus
        //

        let template = `<div class="cl-console"><site-header :title="title">
<console-nav :console="console" :user="user"></console-nav>
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
        for(const route of this.components.getRoutes()) {
            let robj = {
                path: site.root + '/cl/console' + route.route,
                component: route.component
            };

            if(route.props !== undefined) {
                robj.props = route.props;
            }

            if(route.name !== undefined) {
                robj.name = route.name;
            }
            routes.push(robj);
        }

        this.components.pages.forEach((page) => {
            if(user.atLeast(page.minimumRole(user))) {
                let component = page.component !== undefined ? page.component :
                    new ConsoleComponent(this, site, user, page);
                routes.push({
                    path: site.root + '/cl/console' + page.route, component: component
                })


                page.sections.forEach((section) => {
                    section.options.forEach((option) => {
                        if(option.available(user)) {

                            if(option.routes !== undefined) {
                                option.routes.forEach((route) => {
                                    let robj = {
                                        path: site.root + '/cl/console' + route.route, component: route.component
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


                        }
                    })
                })
            }

        });

        routes.push({ path: '*', component: NotFoundComponent });

        const Header = site.info.header.component();
        const Footer = site.info.footer.component();

        const router = new site.VueRouter({
            routes: routes,
            mode: 'history'
        })

        const components = {
            'site-header': Header,
            'site-footer': Footer,
            'console-nav': NavComponent
        }

        let store = site.store;
        let siteTitle = this.title;
        let Console = this;

        this.masterVue = new site.Vue({
            el: element,
            store,      // Inject the store
            site,       // Inject site, so $site is available for all children
            template: template,
            router,
            data: function() {
                return {
                    title: siteTitle,
                    console: Console,
                    user: user
                }
            },
            props: {

            },
            components: components,
            methods: {
                isAdmin: function() {
                    return admin;
                },
                /*
                 * Set the site title. This can be used from
                 * the child Vue's using this.$parent.setTitle('')
                 * @param title Title to set
                 */
                setTitle(title) {
                    this.title = siteTitle + title;
                    document.title = Site.info.siteName + ' ' + siteTitle + title;
                }
            },
            created() {
                this.setTitle('');
            },
            mounted() {
	            new site.StickyNav('div.cl-console nav');
            }
        })
    }
}

