<script>
  const UserVueBase = Site.UserVueBase;

    /**
     * Base component for console pages.
     *
     * Provides:
     * nav2 menu support with automatic removal.
     * @alias ConsoleComponentBase
     * @constructor
     */
    export default {
      'extends': UserVueBase,
      methods: {
          /**
           * Add an option to the nav2 menu.
           * @param title Title of the option to add.
           * @param order Order in the menu.
           * @param closure Function to call when selected.
           * @memberof ConsoleComponentBase
           */
          addNav2(title, order, closure) {
              const item = this.$site.console.components.addNav2Link(this, title, order, closure);
              this.components1.push(item);
              return item;
          },

          /**
           * Add an option to the nav2 menu that is a router link
           * @param title Title of the option to add.
           * @param order Order in the menu.
           * @param link Link without Site.root
           * @memberof ConsoleComponentBase
           */
          addNav2Link(title, order, link) {
              this.addNav2(title, order, () => {
                  this.$router.push(Site.root + link);
              });
          },

	      /**
         * Remove a nav2 item.
         * @param item Item object as returned by addNav2
         * @memberof ConsoleComponentBase
         */
          removeNav2(item) {
              let i = this.components1.indexOf(item);
              if(i >= 0) {
                  this.components1.splice(i, 1);
              }

	          this.$site.console.components.removeNav2(this, item);
          }
      },
      created() {
      	this.components1 = [];
      },
      beforeDestroy() {
      	this.$site.console.components.removeNav2(this, this.components1);
      }
  }
</script>
