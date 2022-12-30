/**
 * Component for the main console page
 * @constructor
 */
export const ConsoleComponent = function(consoleObj, site, user, page) {
    this.template = `<div id="cl-console-main"><div class="content">`;

    let components = {};
    let cnt = 1;

    page.sections.forEach((section) => {
        if(!section.available(user)) {
            return;
        }

        this.template += `<h2>${section.title}</h2>`;

       let menu = '';

       // Add the menu options
       section.options.forEach((option) => {
           if(option.title !== undefined) {
               let atLeast = option.atLeast;
               if(atLeast === Object(atLeast)) {
                   atLeast = site.permissions.atLeast(atLeast.tag, atLeast.default);
               }

               if(atLeast === undefined || user.atLeast(atLeast)) {
	               menu += `<li><router-link to="${site.root}/cl/console${option.route}">${option.title}</router-link></li>`;
               }
           }
       });

       if(menu.length > 0) {
           this.template += '<ul>' + menu + '</ul>';
       }

        // Add any custom components
       section.options.forEach((option) => {
            if(option.component !== undefined) {

                this.template += `<console-component-${cnt}></console-component-${cnt}>`;
                components['console-component-' + cnt] = option.component;
                cnt++;
            }
       });

    });

    this.template += `</div></div>`;
    this.components = components;

    this.mounted = function() {
        if(page.title === 'Main') {
            this.$root.setTitle('');
        } else {
            this.$root.setTitle(': ' + page.title);
        }

    }
}