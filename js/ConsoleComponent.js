/**
 * @file
 * Components that represent a console page.
 */

export let ConsoleComponent = function(console, site, page) {
    this.template = `<div id="console-main"><div class="content">`;

    page.sections.forEach((section) => {
       this.template += `<h2>${section.title}</h2><ul>`;

       section.options.forEach((option) => {
            this.template += `<li><router-link to="${site.root}cl/console${option.route}">${option.title}</router-link></li>`;
       });

       this.template += '</ul>';
    });

    this.template += `</div></div>`;

    this.mounted = function() {
        if(page.title === 'Main') {
            this.$parent.setTitle(console.title);
        } else {
            this.$parent.setTitle(console.title + ': ' + page.title);
        }

    }
}