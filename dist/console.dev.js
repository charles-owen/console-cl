/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UserVueBase = Site.UserVueBase;
/**
 * Base component for console pages.
 *
 * Provides:
 * nav2 menu support with automatic removal.
 *
 * @alias ConsoleComponentBase
 * @constructor
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': UserVueBase,
  methods: {
    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param closure Function to call when selected.
     * @memberof ConsoleComponentBase
     */
    addNav2: function addNav2(title, order, closure) {
      var item = this.$site.console.components.addNav2Link(this, title, order, closure);
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
    addNav2Link: function addNav2Link(title, order, link) {
      var _this = this;

      this.addNav2(title, order, function () {
        _this.$router.push(Site.root + link);
      });
    },

    /**
      * Remove a nav2 item.
      * @param item Item object as returned by addNav2
      * @memberof ConsoleComponentBase
      */
    removeNav2: function removeNav2(item) {
      var i = this.components1.indexOf(item);

      if (i >= 0) {
        this.components1.splice(i, 1);
      }

      this.$site.console.components.removeNav2(this, item);
    },
    timeRelativeUNIX: function timeRelativeUNIX(time, currentTime, format) {
      return this.$site.TimeFormatter.relativeUNIX(time, currentTime, format);
    }
  },
  created: function created() {
    this.components1 = [];
  },
  beforeDestroy: function beforeDestroy() {
    this.$site.console.components.removeNav2(this, this.components1);
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['console', 'user'],
  data: function data() {
    return {
      homeLink: ''
    };
  },
  mounted: function mounted() {
    this.homeLink = this.$site.root + '/';
  },
  methods: {
    pageLink: function pageLink(page) {
      return "".concat(this.$site.root, "/cl/console").concat(page.route);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

//
//
//
//
//
//
module.exports = {
  mounted: function mounted() {
    this.$parent.setTitle('Page does not exist...');
  }
};

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./.yarn/cache/dialog-cl-npm-1.0.6-03d4a3bcc2-f2ed6caec0.zip/node_modules/dialog-cl/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tables: this.$site.console.tables.tables,
      results: ''
    };
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Database Tables');
    this.$site.console.tables.tables.sort(function (a, b) {
      return a.order - b.order;
    });
  },
  methods: {
    create: function create(table, drop) {
      var _this = this;

      this.$site.api.post(table.api, {
        drop: drop ? 'yes' : 'no'
      }).then(function (response) {
        if (!response.hasError()) {
          if (drop) {
            _this.$site.toast(_this, table.title + ' tables dropped and recreated');
          } else {
            _this.$site.toast(_this, table.title + ' tables created');
          }
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    },
    dropCreate: function dropCreate(table) {
      var _this2 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__.default.MessageBox("Are you sure?", 'Are you sure you want to drop and recreate the ' + table.title + ' tables?', dialog_cl__WEBPACK_IMPORTED_MODULE_0__.default.MessageBox.OKCANCEL, function () {
        _this2.create(table, true);
      });
    },
    clean: function clean(table) {
      var _this3 = this;

      this.$site.api.post(table.api, {
        clean: 'yes'
      }).then(function (response) {
        if (!response.hasError()) {
          var result = response.getData('table-clean').attributes;
          _this3.results += table.title + " Tables\n\n" + result + "\n";
          console.log(result);
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    }
  }
});

/***/ }),

/***/ "./vendor/cl/console/index.js":
/*!************************************!*\
  !*** ./vendor/cl/console/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Console": () => (/* binding */ Console)
/* harmony export */ });
/* harmony import */ var _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ConsoleFactory */ "./vendor/cl/console/js/ConsoleFactory.js");
/* harmony import */ var _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");


Site.ConsoleComponentBase = _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__.default;
var Console = _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__.ConsoleFactory.create(Site);


/***/ }),

/***/ "./vendor/cl/console/js/Console.js":
/*!*****************************************!*\
  !*** ./vendor/cl/console/js/Console.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Console": () => (/* binding */ Console)
/* harmony export */ });
/* harmony import */ var _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponents */ "./vendor/cl/console/js/ConsoleComponents.js");
/* harmony import */ var _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleTables */ "./vendor/cl/console/js/ConsoleTables.js");
/* harmony import */ var _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleComponent */ "./vendor/cl/console/js/ConsoleComponent.js");
/* harmony import */ var _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavComponent.vue */ "./vendor/cl/console/js/NavComponent.vue");
/* harmony import */ var _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFoundComponent.vue */ "./vendor/cl/console/js/NotFoundComponent.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/**
 * Object that represents the site console.
 * @param {Site} site The site object
 * @constructor
 */

var Console = function Console(site) {
  /** This property makes it possible to change the console title
      * @memberOf Console */
  this.title = 'Site Console';
  /** The console components are installed components
   * like the users editor or table creation. */

  this.components = new _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__.ConsoleComponents(site);
  /** The console tables component keeps track of the
   * database tables we may need to create */

  this.tables = new _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__.ConsoleTables();
  /**
      * Start the console system.
   * @param element Element we put the console VUE into
   */

  this.start = function (element) {
    var _this = this;

    this.components.sort();
    this.components.start(this); // Get the installed user

    var user = site.store.state.user.user; //
    // Configure the template, setting up the top-level menus
    //

    var template = "<div class=\"cl-console\"><site-header :title=\"title\">\n<console-nav :console=\"console\" :user=\"user\"></console-nav>\n</site-header>";
    this.components.main.forEach(function (component) {
      template += "<".concat(component.tag, " />");
    });
    template += "\n<router-view></router-view>\n<site-footer></site-footer></div>"; //
    // Set up the routes
    //

    var routes = [];

    var _iterator = _createForOfIteratorHelper(this.components.getRoutes()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var route = _step.value;
        var robj = {
          path: site.root + '/cl/console' + route.route,
          component: route.component
        };

        if (route.props !== undefined) {
          robj.props = route.props;
        }

        if (route.name !== undefined) {
          robj.name = route.name;
        }

        routes.push(robj);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.components.pages.forEach(function (page) {
      if (user.atLeast(page.minimumRole(user))) {
        var component = page.component !== undefined ? page.component : new _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__.ConsoleComponent(_this, site, user, page);
        routes.push({
          path: site.root + '/cl/console' + page.route,
          component: component
        });
        page.sections.forEach(function (section) {
          section.options.forEach(function (option) {
            if (option.available(user)) {
              if (option.routes !== undefined) {
                option.routes.forEach(function (route) {
                  var robj = {
                    path: site.root + '/cl/console' + route.route,
                    component: route.component
                  };

                  if (route.props !== undefined) {
                    robj.props = route.props;
                  }

                  if (route.name !== undefined) {
                    robj.name = route.name;
                  }

                  routes.push(robj);
                });
              }
            }
          });
        });
      }
    });
    routes.push({
      path: '*',
      component: _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__.default
    });
    var Header = site.info.header.component();
    var Footer = site.info.footer.component();
    var router = new site.VueRouter({
      routes: routes,
      mode: 'history'
    });
    var components = {
      'site-header': Header,
      'site-footer': Footer,
      'console-nav': _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__.default
    };
    var store = site.store;
    var siteTitle = this.title;
    var Console = this;
    this.masterVue = new site.Vue({
      el: element,
      store: store,
      // Inject the store
      site: site,
      // Inject site, so $site is available for all children
      template: template,
      router: router,
      data: function data() {
        return {
          title: siteTitle,
          console: Console,
          user: user
        };
      },
      props: {},
      components: components,
      methods: {
        isAdmin: function isAdmin() {
          return admin;
        },

        /*
         * Set the site title. This can be used from
         * the child Vue's using this.$parent.setTitle('')
         * @param title Title to set
         */
        setTitle: function setTitle(title) {
          this.title = siteTitle + title;
          document.title = Site.info.siteName + ' ' + siteTitle + title;
        }
      },
      created: function created() {
        this.setTitle('');
      },
      mounted: function mounted() {
        new site.StickyNav('div.cl-console nav');
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponent.js":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleComponent": () => (/* binding */ ConsoleComponent)
/* harmony export */ });
/**
 * Components that represent a console page.
 * @constructor
 */
var ConsoleComponent = function ConsoleComponent(console, site, user, page) {
  var _this = this;

  this.template = "<div id=\"cl-console-main\"><div class=\"content\">";
  var components = {};
  var cnt = 1;
  page.sections.forEach(function (section) {
    if (!section.available(user)) {
      return;
    }

    _this.template += "<h2>".concat(section.title, "</h2>");
    var menu = ''; // Add the menu options

    section.options.forEach(function (option) {
      if (option.title !== undefined) {
        var atLeast = option.atLeast;

        if (atLeast === Object(atLeast)) {
          atLeast = site.permissions.atLeast(atLeast.tag, atLeast["default"]);
        }

        if (atLeast === undefined || user.atLeast(atLeast)) {
          menu += "<li><router-link to=\"".concat(site.root, "/cl/console").concat(option.route, "\">").concat(option.title, "</router-link></li>");
        }
      }
    });

    if (menu.length > 0) {
      _this.template += '<ul>' + menu + '</ul>';
    } // Add any custom components


    section.options.forEach(function (option) {
      if (option.component !== undefined) {
        _this.template += "<console-component-".concat(cnt, "></console-component-").concat(cnt, ">");
        components['console-component-' + cnt] = option.component;
        cnt++;
      }
    });
  });
  this.template += "</div></div>";
  this.components = components;

  this.mounted = function () {
    if (page.title === 'Main') {
      this.$parent.setTitle('');
    } else {
      this.$parent.setTitle(': ' + page.title);
    }
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponents.js":
/*!***************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponents.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleComponents": () => (/* binding */ ConsoleComponents)
/* harmony export */ });
/* harmony import */ var _ConsolePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsolePage */ "./vendor/cl/console/js/ConsolePage.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Management of all console components
 *
 * Components are:
 * start scripts run when the console is started (addStart)
 * main Components added to every page (addMainComponent)
 * options Adds top-level menu options and options on pages (addOption)
 * routes Adds routes to the console directory (addRoute, addRoutes) *
 * @param site
 * @constructor
 */

var ConsoleComponents = function ConsoleComponents(site) {
  var _this2 = this;

  //
  // Start scripts are run when the console is started
  //
  var start = [];

  this.addStart = function (script) {
    start.push(script);
  };

  this.start = function (console) {
    start.forEach(function (startup) {
      startup(console);
    });
  }; //
  // Any components to add to the main page (every page)
  //
  // The course subsystem uses this to add a bar the selects
  // the course section right below the menu bar.
  //


  this.main = [];

  this.addMainComponent = function (tag, component, order) {// this.main.push({
    //     tag: tag,
    //     component: component,
    //     order: order
    // });
  };

  this.nav2 = [];

  this.addNav2 = function (component, order) {
    this.nav2.push({
      component: component,
      order: order
    });
    this.nav2.sort(function (a, b) {
      return a.order - b.order;
    });
    return component;
  };

  this.removeNav2 = function (vue, component) {
    if (Array.isArray(component)) {
      var _iterator = _createForOfIteratorHelper(component),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          this.removeNav2(vue, c);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return;
    }

    for (var i = 0; i < this.nav2.length; i++) {
      if (this.nav2[i].component === component) {
        this.nav2.splice(i, 1);
        vue.$set(this, 'nav2', this.nav2);
        return;
      }
    }
  };

  this.addNav2Link = function (vue, name, order, _click) {
    var component = {
      template: "<a @click.prevent=\"click\">".concat(name, "</a>"),
      methods: {
        click: function click() {
          _click();
        }
      }
    };
    this.addNav2(component, order);
    this.nav2.sort(function (a, b) {
      return a.order - b.order;
    });
    vue.$set(this, 'nav2', this.nav2);
    return component;
  };

  this.nav2right = null;
  this.nav2left = null; //
  // Console options are menu options in the site console.
  // This is how the top-level menus, sections, and links
  // are defined.
  //

  var options = [];

  this.addOption = function (option) {
    options.push(option);
  };

  this.pages = [];
  /**
   * Sort the components into a structure
   * for creating the management pages.
   */

  this.sort = function () {
    var _this = this;

    options.forEach(function (option) {
      var page = findPage(option.page.title);

      if (page !== null) {
        page.add(option);
      } else {
        var _page = new _ConsolePage__WEBPACK_IMPORTED_MODULE_0__.ConsolePage(site, option.page);

        _this.pages.push(_page);

        _page.add(option);
      }
    }); // Sort the pages, sections, and options in order

    this.pages.sort(function (a, b) {
      return a.order - b.order;
    });
    this.pages.forEach(function (page) {
      page.sort();
    }); // Sort any main components

    this.main.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  this.getPages = function () {
    return this.pages;
  };

  var routes = [];

  this.addRoute = function (route) {
    routes.push(route);
  };

  this.addRoutes = function (addroutes) {
    var _iterator2 = _createForOfIteratorHelper(addroutes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var route = _step2.value;
        routes.push(route);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  this.getRoutes = function () {
    return routes;
  };
  /*
   * Given a list of items of the form {title: 'title', order: 'order'},
   * find an item with a given title.
   * @param list
   * @param title
   */


  var findPage = function findPage(title) {
    for (var i in _this2.pages) {
      if (_this2.pages[i].title === title) {
        return _this2.pages[i];
      }
    }

    return null;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleFactory.js":
/*!************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleFactory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleFactory": () => (/* binding */ ConsoleFactory)
/* harmony export */ });
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Console */ "./vendor/cl/console/js/Console.js");
/* harmony import */ var _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue */ "./vendor/cl/console/js/TablesComponent.vue");
/* harmony import */ var _ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");



/**
 * Factory to create the Console object
 * @constructor
 */

var ConsoleFactory = function ConsoleFactory() {};

ConsoleFactory.create = function (site) {
  var siteConsole = new _Console__WEBPACK_IMPORTED_MODULE_0__.Console(site); // Save as a site property

  site.console = siteConsole; // Add standard options

  siteConsole.components.addOption({
    atLeast: Site.User.STAFF,
    page: {
      title: 'Main',
      route: '',
      order: 1
    }
  });
  siteConsole.components.addOption({
    atLeast: Site.User.ADMIN,
    page: {
      title: 'Management',
      route: '/management',
      order: 10
    },
    section: {
      title: 'Site Management',
      order: 1
    },
    title: 'Tables',
    order: 10,
    route: '/management/tables',
    routes: [{
      route: '/management/tables',
      name: 'tables',
      component: _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default
    }]
  });
  site.start(function () {
    var element = document.querySelector('div.cl-console');

    if (element !== null) {
      siteConsole.start(element);
    }
  });
  site.ConsoleComponentBase = _ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_2__.default;
  return siteConsole;
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsolePage.js":
/*!*********************************************!*\
  !*** ./vendor/cl/console/js/ConsolePage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsolePage": () => (/* binding */ ConsolePage)
/* harmony export */ });
/* harmony import */ var _ConsoleSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSection */ "./vendor/cl/console/js/ConsoleSection.js");

/**
 * Represents a console page in the ConsoleComponents collection
 * @param {Site} site The site object
 * @param page Object representation of page as passed from the server
 * @constructor
 */

var ConsolePage = function ConsolePage(site, page) {
  var _this = this;

  /** Page title */
  this.title = page.title;
  /** Router to get to this page */

  this.route = page.route;
  /** Order of page presentation in a component menu */

  this.order = page.order;
  /** The page component */

  this.component = page.component;
  /** Optional minimum user role to access the page */

  this.atLeast = page.atLeast !== undefined ? page.atLeast : null;
  /** Page sections */

  this.sections = [];
  /**
      * Add a section to the page.
   * @param option
   */

  this.add = function (option) {
    // Does the item have a section?
    if (option.section === undefined) {
      return;
    }

    var section = findSection(option.section.title);

    if (section !== null) {
      section.add(option);
    } else {
      var _section = new _ConsoleSection__WEBPACK_IMPORTED_MODULE_0__.ConsoleSection(site, option.section);

      this.sections.push(_section);

      _section.add(option);
    }
  };
  /**
      * Sort page sections into order
   */


  this.sort = function () {
    this.sections.sort(function (a, b) {
      return a.order - b.order;
    });
    this.sections.forEach(function (section) {
      section.sort();
    });
  };

  var findSection = function findSection(title) {
    for (var i in _this.sections) {
      if (_this.sections[i].title === title) {
        return _this.sections[i];
      }
    }

    return null;
  };
  /**
      * Is this page available to this user?
   * @param user User to test
   */


  this.available = function (user) {
    return user.atLeast(this.minimumRole(user));
  };
  /**
      * Compute minimum role to be able to access this page.
      *
      * The minimum role is determined by what is specified for
      * this page plus any pages linked to by this page.
   * @param user
   * @returns {*}
   */


  this.minimumRole = function (user) {
    var roleLeast = this.atLeast;

    if (roleLeast === Object(roleLeast)) {
      roleLeast = site.permissions.atLeast(roleLeast.tag, roleLeast["default"]);
    }

    var priorityLeast = this.atLeast !== null ? user.getRolePriority(roleLeast) : 100000;
    this.sections.forEach(function (section) {
      var sectionLeast = section.minimumRole(user);
      var priority = user.getRolePriority(sectionLeast);

      if (priority !== 0 && priority < priorityLeast) {
        roleLeast = sectionLeast;
        priorityLeast = priority;
      }
    });

    if (roleLeast === null) {
      return 'A'; ///< Always ADMIN
    }

    return roleLeast;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleSection.js":
/*!************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleSection": () => (/* binding */ ConsoleSection)
/* harmony export */ });
/* harmony import */ var _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSectionOption */ "./vendor/cl/console/js/ConsoleSectionOption.js");

/**
 * Console section: These are the <h2> page sections
 * @constructor
 */

var ConsoleSection = function ConsoleSection(site, section) {
  this.title = section.title;
  this.order = section.order;
  this.options = [];

  this.add = function (option) {
    this.options.push(new _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__.ConsoleSectionOption(site, option));
  };

  this.sort = function () {
    this.options.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  this.available = function (user) {
    return user.atLeast(this.minimumRole(user));
  };
  /**
   * Determine the minimum role for all options
   * in this section so we know if we can show the section.
   * @param user A user, so we can know what the possible roles are
   * @returns {string} Role
   */


  this.minimumRole = function (user) {
    if (this.options.length === 0) {
      return 'A';
    }

    var roleLeast = null;
    var priorityLeast = 1000000;
    this.options.forEach(function (option) {
      var role = option.atLeast;

      if (role === Object(role)) {
        role = site.permissions.atLeast(role.tag, role["default"]);
      }

      var priority = user.getRolePriority(role);

      if (priority !== 0 && priority < priorityLeast) {
        roleLeast = role;
        priorityLeast = priority;
      }
    });

    if (roleLeast === null) {
      return 'A'; ///< Always ADMIN
    }

    return roleLeast;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleSectionOption.js":
/*!******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleSectionOption.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleSectionOption": () => (/* binding */ ConsoleSectionOption)
/* harmony export */ });
/**
 * Options in a console page section
 * @constructor
 */
var ConsoleSectionOption = function ConsoleSectionOption(site, option) {
  for (var member in option) {
    this[member] = option[member];
  }

  this.available = function (user) {
    var atLeast = this.atLeast;

    if (atLeast === Object(atLeast)) {
      atLeast = site.permissions.atLeast(atLeast.tag, atLeast["default"]);
    }

    return atLeast === undefined || user.atLeast(atLeast);
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleTables.js":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/ConsoleTables.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleTables": () => (/* binding */ ConsoleTables)
/* harmony export */ });
/**
 * Keeps track of what table create/drop options are available on the site.
 * @constructor
 */
var ConsoleTables = function ConsoleTables() {
  this.tables = [{
    title: 'Site',
    order: 0,
    api: '/api/site/tables'
  }];

  this.add = function (table) {
    this.tables.push(table);
  };
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table td[data-v-746ac1d7] {\n  padding: 0.25em;\n}\ntable button[data-v-746ac1d7] {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\nli span[data-v-746ac1d7] {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/console/js/TablesComponent.vue"],"names":[],"mappings":"AA4FA;EACE,eAAA;AA3FF;AA8FA;EACE,qBAAA;EACA,iBAAA;EACA,kBAAA;AA3FF;AA8FA;EACE,qBAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;AA3FF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntable td {\n  padding: 0.25em;\n}\n\ntable button {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\n\nli span {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFoundComponent.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TablesComponent.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");


/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");


/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");


/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.console.components.pages, function(page) {
            return page.available(_vm.user)
              ? _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: _vm.pageLink(page) } }, [
                      _vm._v(_vm._s(page.title))
                    ])
                  ],
                  1
                )
              : _vm._e()
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.console.components.nav2.length > 0
      ? _c("div", [
          _c("div", { staticClass: "nav2" }, [
            _c(
              "div",
              { staticClass: "left" },
              [
                _vm.console.components.nav2left
                  ? _c(_vm.console.components.nav2left, { tag: "component" })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "center" },
              _vm._l(_vm.console.components.nav2, function(c) {
                return _c(
                  "div",
                  [
                    _c(c.component, {
                      tag: "component",
                      attrs: { short: _vm.console.components.nav2.length > 2 }
                    })
                  ],
                  1
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "right" },
              [
                _vm.console.components.nav2right
                  ? _c(_vm.console.components.nav2right, { tag: "component" })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("p", [_vm._v("Page does not exist...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("h2", [_vm._v("Database Tables Management")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "The page provides an Administrator the ability to create and destroy database tables.\n  Only use during course startup! The create option will not drop an existing table\n  unless the drop and create option is selected. The clean option allows for cleaning\n  of orphaned records from tables."
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c(
        "table",
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.tables, function(table) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(table.title))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.create(table, false)
                      }
                    }
                  },
                  [_vm._v("create")]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.dropCreate(table)
                      }
                    }
                  },
                  [_vm._v("drop-and-create")]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.clean(table)
                      }
                    }
                  },
                  [_vm._v("clean")]
                )
              ])
            ])
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.results.length > 0
      ? _c("pre", { staticClass: "code" }, [_vm._v(_vm._s(_vm.results))])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "center red" }, [
      _c("em", [_vm._v("Use with caution!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Tables")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "3" } }, [_vm._v("Operations")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/console/js/ConsoleComponentBase.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/console/js/NavComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue":
/*!****************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
/* harmony import */ var _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/console/js/NotFoundComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
/* harmony import */ var _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "746ac1d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/console/js/TablesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Console": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common","vendor"], () => (__webpack_require__("./vendor/cl/console/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVGYWN0b3J5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVQYWdlLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uT3B0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVUYWJsZXMuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT8yM2YyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NzJjMSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/OWJlNyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlP2M0NWIiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2YzOTQiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT9hYzVjIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/ZDgyMiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/MWNkOSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlP2M2YTQiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlNpdGUiLCJDb25zb2xlQ29tcG9uZW50QmFzZSIsIkNvbnNvbGUiLCJDb25zb2xlRmFjdG9yeSIsInNpdGUiLCJ0aXRsZSIsImNvbXBvbmVudHMiLCJDb25zb2xlQ29tcG9uZW50cyIsInRhYmxlcyIsIkNvbnNvbGVUYWJsZXMiLCJzdGFydCIsImVsZW1lbnQiLCJzb3J0IiwidXNlciIsInN0b3JlIiwic3RhdGUiLCJ0ZW1wbGF0ZSIsIm1haW4iLCJmb3JFYWNoIiwiY29tcG9uZW50IiwidGFnIiwicm91dGVzIiwiZ2V0Um91dGVzIiwicm91dGUiLCJyb2JqIiwicGF0aCIsInJvb3QiLCJwcm9wcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJwdXNoIiwicGFnZXMiLCJwYWdlIiwiYXRMZWFzdCIsIm1pbmltdW1Sb2xlIiwiQ29uc29sZUNvbXBvbmVudCIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIlN0aWNreU5hdiIsImNudCIsIm1lbnUiLCJPYmplY3QiLCJwZXJtaXNzaW9ucyIsImxlbmd0aCIsIiRwYXJlbnQiLCJhZGRTdGFydCIsInNjcmlwdCIsInN0YXJ0dXAiLCJhZGRNYWluQ29tcG9uZW50Iiwib3JkZXIiLCJuYXYyIiwiYWRkTmF2MiIsImEiLCJiIiwicmVtb3ZlTmF2MiIsInZ1ZSIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJpIiwic3BsaWNlIiwiJHNldCIsImFkZE5hdjJMaW5rIiwiY2xpY2siLCJuYXYycmlnaHQiLCJuYXYybGVmdCIsImFkZE9wdGlvbiIsImZpbmRQYWdlIiwiYWRkIiwiQ29uc29sZVBhZ2UiLCJnZXRQYWdlcyIsImFkZFJvdXRlIiwiYWRkUm91dGVzIiwiYWRkcm91dGVzIiwiY3JlYXRlIiwic2l0ZUNvbnNvbGUiLCJVc2VyIiwiU1RBRkYiLCJBRE1JTiIsIlRhYmxlc0NvbXBvbmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kU2VjdGlvbiIsIkNvbnNvbGVTZWN0aW9uIiwicm9sZUxlYXN0IiwicHJpb3JpdHlMZWFzdCIsImdldFJvbGVQcmlvcml0eSIsInNlY3Rpb25MZWFzdCIsInByaW9yaXR5IiwiQ29uc29sZVNlY3Rpb25PcHRpb24iLCJyb2xlIiwibWVtYmVyIiwiYXBpIiwidGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsd0NBQXdDO1dBQ3RFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQztXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MxQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiY29uc29sZS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4gIGNvbnN0IFVzZXJWdWVCYXNlID0gU2l0ZS5Vc2VyVnVlQmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgY29tcG9uZW50IGZvciBjb25zb2xlIHBhZ2VzLlxyXG4gICAgICpcclxuICAgICAqIFByb3ZpZGVzOlxyXG4gICAgICogbmF2MiBtZW51IHN1cHBvcnQgd2l0aCBhdXRvbWF0aWMgcmVtb3ZhbC5cclxuICAgICAqXHJcbiAgICAgKiBAYWxpYXMgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGNsb3N1cmUgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIENvbnNvbGVDb21wb25lbnRCYXNlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGFkZE5hdjIodGl0bGUsIG9yZGVyLCBjbG9zdXJlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLmFkZE5hdjJMaW5rKHRoaXMsIHRpdGxlLCBvcmRlciwgY2xvc3VyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudSB0aGF0IGlzIGEgcm91dGVyIGxpbmtcclxuICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuICAgICAgICAgICAqIEBwYXJhbSBvcmRlciBPcmRlciBpbiB0aGUgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSBsaW5rIExpbmsgd2l0aG91dCBTaXRlLnJvb3RcclxuICAgICAgICAgICAqIEBtZW1iZXJvZiBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBhZGROYXYyTGluayh0aXRsZSwgb3JkZXIsIGxpbmspIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZE5hdjIodGl0bGUsIG9yZGVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFNpdGUucm9vdCArIGxpbmspO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuXHJcblx0ICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlIGEgbmF2MiBpdGVtLlxyXG4gICAgICAgICAqIEBwYXJhbSBpdGVtIEl0ZW0gb2JqZWN0IGFzIHJldHVybmVkIGJ5IGFkZE5hdjJcclxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICAgIHJlbW92ZU5hdjIoaXRlbSkge1xyXG4gICAgICAgICAgICAgIGxldCBpID0gdGhpcy5jb21wb25lbnRzMS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIGlmKGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICB0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cy5yZW1vdmVOYXYyKHRoaXMsIGl0ZW0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRpbWVSZWxhdGl2ZVVOSVgodGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHRpbWUsIGN1cnJlbnRUaW1lLCBmb3JtYXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVkKCkge1xyXG4gICAgICBcdHRoaXMuY29tcG9uZW50czEgPSBbXTtcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgXHR0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cy5yZW1vdmVOYXYyKHRoaXMsIHRoaXMuY29tcG9uZW50czEpO1xyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cInBhZ2UgaW4gY29uc29sZS5jb21wb25lbnRzLnBhZ2VzXCIgdi1pZj1cInBhZ2UuYXZhaWxhYmxlKHVzZXIpXCI+XHJcbiAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwicGFnZUxpbmsocGFnZSlcIj57e3BhZ2UudGl0bGV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2MlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiYyBpbiBjb25zb2xlLmNvbXBvbmVudHMubmF2MlwiPjxjb21wb25lbnQgOmlzPVwiYy5jb21wb25lbnRcIiA6c2hvcnQ9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyXCI+PC9jb21wb25lbnQ+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCIgOmlzPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydjb25zb2xlJywgJ3VzZXInXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhvbWVMaW5rOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdCAgdGhpcy5ob21lTGluayA9IHRoaXMuJHNpdGUucm9vdCArICcvJztcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgcGFnZUxpbmsocGFnZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2NvbnNvbGUke3BhZ2Uucm91dGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gIDxwPlBhZ2UgZG9lcyBub3QgZXhpc3QuLi48L3A+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnUGFnZSBkb2VzIG5vdCBleGlzdC4uLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gIDxoMj5EYXRhYmFzZSBUYWJsZXMgTWFuYWdlbWVudDwvaDI+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlciByZWRcIj48ZW0+VXNlIHdpdGggY2F1dGlvbiE8L2VtPjwvcD5cclxuICA8cD5UaGUgcGFnZSBwcm92aWRlcyBhbiBBZG1pbmlzdHJhdG9yIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSBkYXRhYmFzZSB0YWJsZXMuXHJcbiAgICBPbmx5IHVzZSBkdXJpbmcgY291cnNlIHN0YXJ0dXAhIFRoZSBjcmVhdGUgb3B0aW9uIHdpbGwgbm90IGRyb3AgYW4gZXhpc3RpbmcgdGFibGVcclxuICAgIHVubGVzcyB0aGUgZHJvcCBhbmQgY3JlYXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gVGhlIGNsZWFuIG9wdGlvbiBhbGxvd3MgZm9yIGNsZWFuaW5nXHJcbiAgICBvZiBvcnBoYW5lZCByZWNvcmRzIGZyb20gdGFibGVzLjwvcD5cclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPlRhYmxlczwvdGg+XHJcbiAgICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5PcGVyYXRpb25zPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciB2LWZvcj1cInRhYmxlIGluIHRhYmxlc1wiPlxyXG4gICAgICAgICAgPHRkPnt7dGFibGUudGl0bGV9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNyZWF0ZSh0YWJsZSwgZmFsc2UpXCI+Y3JlYXRlPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZHJvcENyZWF0ZSh0YWJsZSlcIj5kcm9wLWFuZC1jcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjbGVhbih0YWJsZSlcIj5jbGVhbjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxwcmUgdi1pZj1cInJlc3VsdHMubGVuZ3RoID4gMFwiIGNsYXNzPVwiY29kZVwiPnt7cmVzdWx0c319PC9wcmU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJsZXM6IHRoaXMuJHNpdGUuY29uc29sZS50YWJsZXMudGFibGVzLFxyXG4gICAgICAgICAgICByZXN1bHRzOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBEYXRhYmFzZSBUYWJsZXMnKTtcclxuXHQgICAgICB0aGlzLiRzaXRlLmNvbnNvbGUudGFibGVzLnRhYmxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBjcmVhdGU6IGZ1bmN0aW9uKHRhYmxlLCBkcm9wKSB7XHJcblx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCh0YWJsZS5hcGksIHtkcm9wOiBkcm9wID8gJ3llcycgOiAnbm8nfSlcclxuXHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdCAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGRyb3ApIHtcclxuXHRcdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgdGFibGUudGl0bGUgKyAnIHRhYmxlcyBkcm9wcGVkIGFuZCByZWNyZWF0ZWQnKTtcclxuXHRcdFx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCB0YWJsZS50aXRsZSArICcgdGFibGVzIGNyZWF0ZWQnKTtcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBkcm9wQ3JlYXRlOiBmdW5jdGlvbih0YWJsZSkge1xyXG5cdFx0ICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveChcIkFyZSB5b3Ugc3VyZT9cIixcclxuXHRcdFx0ICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZHJvcCBhbmQgcmVjcmVhdGUgdGhlICcgKyB0YWJsZS50aXRsZSArXHJcblx0XHRcdCAgICAnIHRhYmxlcz8nLCBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLmNyZWF0ZSh0YWJsZSwgdHJ1ZSk7XHJcblx0XHRcdCAgICB9KTtcclxuXHQgICAgfSxcclxuXHQgICAgY2xlYW46IGZ1bmN0aW9uKHRhYmxlKSB7XHJcblx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCh0YWJsZS5hcGksIHtjbGVhbjogJ3llcyd9KVxyXG5cdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0ICAgIFx0bGV0IHJlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3RhYmxlLWNsZWFuJykuYXR0cmlidXRlcztcclxuXHJcblx0XHRcdFx0ICAgIFx0dGhpcy5yZXN1bHRzICs9IHRhYmxlLnRpdGxlICsgXCIgVGFibGVzXFxuXFxuXCIgKyByZXN1bHQgKyBcIlxcblwiO1xyXG5cdFx0XHRcdCAgICBcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgbGkgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNmVtO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQge0NvbnNvbGVGYWN0b3J5fSBmcm9tICcuL2pzL0NvbnNvbGVGYWN0b3J5JztcclxuXHJcbmltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICcuL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcblNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2UgPSBDb25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbmNvbnN0IENvbnNvbGUgPSBDb25zb2xlRmFjdG9yeS5jcmVhdGUoU2l0ZSk7XHJcbmV4cG9ydCB7Q29uc29sZX07XHJcblxyXG4iLCJpbXBvcnQge0NvbnNvbGVDb21wb25lbnRzfSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnRzJztcclxuaW1wb3J0IHtDb25zb2xlVGFibGVzfSBmcm9tICcuL0NvbnNvbGVUYWJsZXMnXHJcbmltcG9ydCB7Q29uc29sZUNvbXBvbmVudH0gZnJvbSAnLi9Db25zb2xlQ29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL05hdkNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9Ob3RGb3VuZENvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHNpdGUgY29uc29sZS5cclxuICogQHBhcmFtIHtTaXRlfSBzaXRlIFRoZSBzaXRlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cdC8qKiBUaGlzIHByb3BlcnR5IG1ha2VzIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgY29uc29sZSB0aXRsZVxyXG4gICAgICogQG1lbWJlck9mIENvbnNvbGUgKi9cclxuXHR0aGlzLnRpdGxlID0gJ1NpdGUgQ29uc29sZSc7XHJcblxyXG5cclxuICAgIC8qKiBUaGUgY29uc29sZSBjb21wb25lbnRzIGFyZSBpbnN0YWxsZWQgY29tcG9uZW50c1xyXG4gICAgICogbGlrZSB0aGUgdXNlcnMgZWRpdG9yIG9yIHRhYmxlIGNyZWF0aW9uLiAqL1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbnNvbGVDb21wb25lbnRzKHNpdGUpO1xyXG5cclxuICAgIC8qKiBUaGUgY29uc29sZSB0YWJsZXMgY29tcG9uZW50IGtlZXBzIHRyYWNrIG9mIHRoZVxyXG4gICAgICogZGF0YWJhc2UgdGFibGVzIHdlIG1heSBuZWVkIHRvIGNyZWF0ZSAqL1xyXG4gICAgdGhpcy50YWJsZXMgPSBuZXcgQ29uc29sZVRhYmxlcygpO1xyXG5cclxuXHQvKipcclxuICAgICAqIFN0YXJ0IHRoZSBjb25zb2xlIHN5c3RlbS5cclxuXHQgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIHB1dCB0aGUgY29uc29sZSBWVUUgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNvcnQoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3RhcnQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgaW5zdGFsbGVkIHVzZXJcclxuICAgICAgICBsZXQgdXNlciA9IHNpdGUuc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENvbmZpZ3VyZSB0aGUgdGVtcGxhdGUsIHNldHRpbmcgdXAgdGhlIHRvcC1sZXZlbCBtZW51c1xyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiY2wtY29uc29sZVwiPjxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPlxyXG48Y29uc29sZS1uYXYgOmNvbnNvbGU9XCJjb25zb2xlXCIgOnVzZXI9XCJ1c2VyXCI+PC9jb25zb2xlLW5hdj5cclxuPC9zaXRlLWhlYWRlcj5gO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubWFpbi5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDwke2NvbXBvbmVudC50YWd9IC8+YDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0ZW1wbGF0ZSArPSBgXHJcbjxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG48c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj48L2Rpdj5gO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgcm91dGVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCByb3V0ZXMgPSBbXTtcclxuICAgICAgICBmb3IoY29uc3Qgcm91dGUgb2YgdGhpcy5jb21wb25lbnRzLmdldFJvdXRlcygpKSB7XHJcbiAgICAgICAgICAgIGxldCByb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlJyArIHJvdXRlLnJvdXRlLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocm91dGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByb2JqLm5hbWUgPSByb3V0ZS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlci5hdExlYXN0KHBhZ2UubWluaW11bVJvbGUodXNlcikpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gcGFnZS5jb21wb25lbnQgIT09IHVuZGVmaW5lZCA/IHBhZ2UuY29tcG9uZW50IDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29uc29sZUNvbXBvbmVudCh0aGlzLCBzaXRlLCB1c2VyLCBwYWdlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcGFnZS5yb3V0ZSwgY29tcG9uZW50OiBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbi5yb3V0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yb3V0ZXMuZm9yRWFjaCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcm91dGVzLnB1c2goeyBwYXRoOiAnKicsIGNvbXBvbmVudDogTm90Rm91bmRDb21wb25lbnQgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IEhlYWRlciA9IHNpdGUuaW5mby5oZWFkZXIuY29tcG9uZW50KCk7XHJcbiAgICAgICAgY29uc3QgRm9vdGVyID0gc2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gbmV3IHNpdGUuVnVlUm91dGVyKHtcclxuICAgICAgICAgICAgcm91dGVzOiByb3V0ZXMsXHJcbiAgICAgICAgICAgIG1vZGU6ICdoaXN0b3J5J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyLFxyXG4gICAgICAgICAgICAnY29uc29sZS1uYXYnOiBOYXZDb21wb25lbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XHJcbiAgICAgICAgbGV0IHNpdGVUaXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgbGV0IENvbnNvbGUgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3RlclZ1ZSA9IG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgICAgICBzdG9yZSwgICAgICAvLyBJbmplY3QgdGhlIHN0b3JlXHJcbiAgICAgICAgICAgIHNpdGUsICAgICAgIC8vIEluamVjdCBzaXRlLCBzbyAkc2l0ZSBpcyBhdmFpbGFibGUgZm9yIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzaXRlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZTogQ29uc29sZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBpc0FkbWluOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRtaW47XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHNpdGVUaXRsZSArIHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgICAgICAgbmV3IHNpdGUuU3RpY2t5TmF2KCdkaXYuY2wtY29uc29sZSBuYXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBDb21wb25lbnRzIHRoYXQgcmVwcmVzZW50IGEgY29uc29sZSBwYWdlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlQ29tcG9uZW50ID0gZnVuY3Rpb24oY29uc29sZSwgc2l0ZSwgdXNlciwgcGFnZSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGA8ZGl2IGlkPVwiY2wtY29uc29sZS1tYWluXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5gO1xyXG5cclxuICAgIGxldCBjb21wb25lbnRzID0ge307XHJcbiAgICBsZXQgY250ID0gMTtcclxuXHJcbiAgICBwYWdlLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZighc2VjdGlvbi5hdmFpbGFibGUodXNlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSBgPGgyPiR7c2VjdGlvbi50aXRsZX08L2gyPmA7XHJcblxyXG4gICAgICAgbGV0IG1lbnUgPSAnJztcclxuXHJcbiAgICAgICAvLyBBZGQgdGhlIG1lbnUgb3B0aW9uc1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgIGlmKG9wdGlvbi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBhdExlYXN0ID0gb3B0aW9uLmF0TGVhc3Q7XHJcbiAgICAgICAgICAgICAgIGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgYXRMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChhdExlYXN0LnRhZywgYXRMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSkge1xyXG5cdCAgICAgICAgICAgICAgIG1lbnUgKz0gYDxsaT48cm91dGVyLWxpbmsgdG89XCIke3NpdGUucm9vdH0vY2wvY29uc29sZSR7b3B0aW9uLnJvdXRlfVwiPiR7b3B0aW9uLnRpdGxlfTwvcm91dGVyLWxpbms+PC9saT5gO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgaWYobWVudS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSAnPHVsPicgKyBtZW51ICsgJzwvdWw+JztcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY29tcG9uZW50c1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihvcHRpb24uY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8Y29uc29sZS1jb21wb25lbnQtJHtjbnR9PjwvY29uc29sZS1jb21wb25lbnQtJHtjbnR9PmA7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzWydjb25zb2xlLWNvbXBvbmVudC0nICsgY250XSA9IG9wdGlvbi5jb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZSArPSBgPC9kaXY+PC9kaXY+YDtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcblxyXG4gICAgdGhpcy5tb3VudGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYocGFnZS50aXRsZSA9PT0gJ01haW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyBwYWdlLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25zb2xlUGFnZX0gZnJvbSAnLi9Db25zb2xlUGFnZSc7XHJcblxyXG4vKipcclxuICogTWFuYWdlbWVudCBvZiBhbGwgY29uc29sZSBjb21wb25lbnRzXHJcbiAqXHJcbiAqIENvbXBvbmVudHMgYXJlOlxyXG4gKiBzdGFydCBzY3JpcHRzIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWQgKGFkZFN0YXJ0KVxyXG4gKiBtYWluIENvbXBvbmVudHMgYWRkZWQgdG8gZXZlcnkgcGFnZSAoYWRkTWFpbkNvbXBvbmVudClcclxuICogb3B0aW9ucyBBZGRzIHRvcC1sZXZlbCBtZW51IG9wdGlvbnMgYW5kIG9wdGlvbnMgb24gcGFnZXMgKGFkZE9wdGlvbilcclxuICogcm91dGVzIEFkZHMgcm91dGVzIHRvIHRoZSBjb25zb2xlIGRpcmVjdG9yeSAoYWRkUm91dGUsIGFkZFJvdXRlcykgKlxyXG4gKiBAcGFyYW0gc2l0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ29uc29sZUNvbXBvbmVudHMgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFN0YXJ0IHNjcmlwdHMgYXJlIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWRcclxuICAgIC8vXHJcbiAgICBsZXQgc3RhcnQgPSBbXTtcclxuXHJcblxyXG4gICAgdGhpcy5hZGRTdGFydCA9IGZ1bmN0aW9uKHNjcmlwdCkge1xyXG4gICAgICAgIHN0YXJ0LnB1c2goc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oY29uc29sZSkge1xyXG4gICAgICAgIHN0YXJ0LmZvckVhY2goKHN0YXJ0dXApID0+IHtcclxuICAgICAgICAgICAgc3RhcnR1cChjb25zb2xlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBBbnkgY29tcG9uZW50cyB0byBhZGQgdG8gdGhlIG1haW4gcGFnZSAoZXZlcnkgcGFnZSlcclxuICAgIC8vXHJcbiAgICAvLyBUaGUgY291cnNlIHN1YnN5c3RlbSB1c2VzIHRoaXMgdG8gYWRkIGEgYmFyIHRoZSBzZWxlY3RzXHJcbiAgICAvLyB0aGUgY291cnNlIHNlY3Rpb24gcmlnaHQgYmVsb3cgdGhlIG1lbnUgYmFyLlxyXG4gICAgLy9cclxuICAgIHRoaXMubWFpbiA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkTWFpbkNvbXBvbmVudCA9IGZ1bmN0aW9uKHRhZywgY29tcG9uZW50LCBvcmRlcikge1xyXG4gICAgICAgIC8vIHRoaXMubWFpbi5wdXNoKHtcclxuICAgICAgICAvLyAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogb3JkZXJcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjIgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE5hdjIgPSBmdW5jdGlvbihjb21wb25lbnQsIG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5uYXYyLnB1c2goe1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlTmF2MiA9IGZ1bmN0aW9uKHZ1ZSwgY29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTmF2Mih2dWUsIGMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5hdjIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5uYXYyW2ldLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdjIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgdnVlLiRzZXQodGhpcywgJ25hdjInLCB0aGlzLm5hdjIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkTmF2MkxpbmsgPSBmdW5jdGlvbih2dWUsIG5hbWUsIG9yZGVyLCBjbGljaykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPGEgQGNsaWNrLnByZXZlbnQ9XCJjbGlja1wiPiR7bmFtZX08L2E+YCxcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGROYXYyKGNvbXBvbmVudCwgb3JkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdjIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2MnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMubmF2MmxlZnQgPSBudWxsO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb25zb2xlIG9wdGlvbnMgYXJlIG1lbnUgb3B0aW9ucyBpbiB0aGUgc2l0ZSBjb25zb2xlLlxyXG4gICAgLy8gVGhpcyBpcyBob3cgdGhlIHRvcC1sZXZlbCBtZW51cywgc2VjdGlvbnMsIGFuZCBsaW5rc1xyXG4gICAgLy8gYXJlIGRlZmluZWQuXHJcbiAgICAvL1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IHRoZSBjb21wb25lbnRzIGludG8gYSBzdHJ1Y3R1cmVcclxuICAgICAqIGZvciBjcmVhdGluZyB0aGUgbWFuYWdlbWVudCBwYWdlcy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhZ2UgPSBmaW5kUGFnZShvcHRpb24ucGFnZS50aXRsZSk7XHJcbiAgICAgICAgICAgIGlmKHBhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWRkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IG5ldyBDb25zb2xlUGFnZShzaXRlLCBvcHRpb24ucGFnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgdGhlIHBhZ2VzLCBzZWN0aW9ucywgYW5kIG9wdGlvbnMgaW4gb3JkZXJcclxuICAgICAgICB0aGlzLnBhZ2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlLnNvcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBTb3J0IGFueSBtYWluIGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLm1haW4uc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFBhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJvdXRlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkUm91dGUgPSBmdW5jdGlvbihyb3V0ZSkge1xyXG4gICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlcyA9IGZ1bmN0aW9uKGFkZHJvdXRlcykge1xyXG4gICAgICAgIGZvcihsZXQgcm91dGUgb2YgYWRkcm91dGVzKSB7XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFJvdXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb3V0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEdpdmVuIGEgbGlzdCBvZiBpdGVtcyBvZiB0aGUgZm9ybSB7dGl0bGU6ICd0aXRsZScsIG9yZGVyOiAnb3JkZXInfSxcclxuICAgICAqIGZpbmQgYW4gaXRlbSB3aXRoIGEgZ2l2ZW4gdGl0bGUuXHJcbiAgICAgKiBAcGFyYW0gbGlzdFxyXG4gICAgICogQHBhcmFtIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIGxldCBmaW5kUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZXNbaV0udGl0bGUgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuL0NvbnNvbGUnO1xyXG5pbXBvcnQgVGFibGVzQ29tcG9uZW50IGZyb20gJy4vVGFibGVzQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvbnNvbGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbkNvbnNvbGVGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBzaXRlQ29uc29sZSA9IG5ldyBDb25zb2xlKHNpdGUpO1xyXG5cclxuICAgIC8vIFNhdmUgYXMgYSBzaXRlIHByb3BlcnR5XHJcbiAgICBzaXRlLmNvbnNvbGUgPSBzaXRlQ29uc29sZTtcclxuXHJcbiAgICAvLyBBZGQgc3RhbmRhcmQgb3B0aW9uc1xyXG4gICAgc2l0ZUNvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IFNpdGUuVXNlci5TVEFGRixcclxuICAgICAgICBwYWdlOiB7dGl0bGU6ICdNYWluJywgcm91dGU6ICcnLCBvcmRlcjogMX0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogU2l0ZS5Vc2VyLkFETUlOLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01hbmFnZW1lbnQnLCByb3V0ZTogJy9tYW5hZ2VtZW50Jywgb3JkZXI6IDEwfSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdTaXRlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxyXG4gICAgICAgIG9yZGVyOiAxMCxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsIG5hbWU6ICd0YWJsZXMnLCBjb21wb25lbnQ6IFRhYmxlc0NvbXBvbmVudH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtY29uc29sZScpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2l0ZUNvbnNvbGUuc3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZSA9IENvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICAgIHJldHVybiBzaXRlQ29uc29sZTtcclxufSIsImltcG9ydCB7Q29uc29sZVNlY3Rpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb24nO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb25zb2xlIHBhZ2UgaW4gdGhlIENvbnNvbGVDb21wb25lbnRzIGNvbGxlY3Rpb25cclxuICogQHBhcmFtIHtTaXRlfSBzaXRlIFRoZSBzaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gcGFnZSBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgcGFnZSBhcyBwYXNzZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBDb25zb2xlUGFnZSA9IGZ1bmN0aW9uKHNpdGUsIHBhZ2UpIHtcclxuICAgIC8qKiBQYWdlIHRpdGxlICovXHJcbiAgICB0aGlzLnRpdGxlID0gcGFnZS50aXRsZTtcclxuXHJcbiAgICAvKiogUm91dGVyIHRvIGdldCB0byB0aGlzIHBhZ2UgKi9cclxuICAgIHRoaXMucm91dGUgPSBwYWdlLnJvdXRlO1xyXG5cclxuICAgIC8qKiBPcmRlciBvZiBwYWdlIHByZXNlbnRhdGlvbiBpbiBhIGNvbXBvbmVudCBtZW51ICovXHJcbiAgICB0aGlzLm9yZGVyID0gcGFnZS5vcmRlcjtcclxuXHJcbiAgICAvKiogVGhlIHBhZ2UgY29tcG9uZW50ICovXHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHBhZ2UuY29tcG9uZW50O1xyXG5cclxuICAgIC8qKiBPcHRpb25hbCBtaW5pbXVtIHVzZXIgcm9sZSB0byBhY2Nlc3MgdGhlIHBhZ2UgKi9cclxuICAgIHRoaXMuYXRMZWFzdCA9IHBhZ2UuYXRMZWFzdCAhPT0gdW5kZWZpbmVkID8gcGFnZS5hdExlYXN0IDogbnVsbDtcclxuXHJcbiAgICAvKiogUGFnZSBzZWN0aW9ucyAqL1xyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG5cclxuXHQvKipcclxuICAgICAqIEFkZCBhIHNlY3Rpb24gdG8gdGhlIHBhZ2UuXHJcblx0ICogQHBhcmFtIG9wdGlvblxyXG5cdCAqL1xyXG5cdHRoaXMuYWRkID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgLy8gRG9lcyB0aGUgaXRlbSBoYXZlIGEgc2VjdGlvbj9cclxuICAgICAgICBpZihvcHRpb24uc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZmluZFNlY3Rpb24ob3B0aW9uLnNlY3Rpb24udGl0bGUpO1xyXG4gICAgICAgIGlmKHNlY3Rpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IG5ldyBDb25zb2xlU2VjdGlvbihzaXRlLCBvcHRpb24uc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogU29ydCBwYWdlIHNlY3Rpb25zIGludG8gb3JkZXJcclxuXHQgKi9cclxuXHR0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNvcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmluZFNlY3Rpb24gPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbnNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIElzIHRoaXMgcGFnZSBhdmFpbGFibGUgdG8gdGhpcyB1c2VyP1xyXG5cdCAqIEBwYXJhbSB1c2VyIFVzZXIgdG8gdGVzdFxyXG5cdCAqL1xyXG5cdHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLmF0TGVhc3QodGhpcy5taW5pbXVtUm9sZSh1c2VyKSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ29tcHV0ZSBtaW5pbXVtIHJvbGUgdG8gYmUgYWJsZSB0byBhY2Nlc3MgdGhpcyBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtaW5pbXVtIHJvbGUgaXMgZGV0ZXJtaW5lZCBieSB3aGF0IGlzIHNwZWNpZmllZCBmb3JcclxuICAgICAqIHRoaXMgcGFnZSBwbHVzIGFueSBwYWdlcyBsaW5rZWQgdG8gYnkgdGhpcyBwYWdlLlxyXG5cdCAqIEBwYXJhbSB1c2VyXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5taW5pbXVtUm9sZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBsZXQgcm9sZUxlYXN0ID0gdGhpcy5hdExlYXN0O1xyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gT2JqZWN0KHJvbGVMZWFzdCkpIHtcclxuICAgICAgICAgICAgcm9sZUxlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KHJvbGVMZWFzdC50YWcsIHJvbGVMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmlvcml0eUxlYXN0ID0gdGhpcy5hdExlYXN0ICE9PSBudWxsID8gdXNlci5nZXRSb2xlUHJpb3JpdHkocm9sZUxlYXN0KSA6IDEwMDAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uTGVhc3QgPSBzZWN0aW9uLm1pbmltdW1Sb2xlKHVzZXIpO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShzZWN0aW9uTGVhc3QpO1xyXG4gICAgICAgICAgICBpZihwcmlvcml0eSAhPT0gMCAmJiBwcmlvcml0eSA8IHByaW9yaXR5TGVhc3QpIHtcclxuICAgICAgICAgICAgICAgIHJvbGVMZWFzdCA9IHNlY3Rpb25MZWFzdDtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGVhc3QgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJzsgLy8vPCBBbHdheXMgQURNSU5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb2xlTGVhc3Q7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7Q29uc29sZVNlY3Rpb25PcHRpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb25PcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIENvbnNvbGUgc2VjdGlvbjogVGhlc2UgYXJlIHRoZSA8aDI+IHBhZ2Ugc2VjdGlvbnNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVTZWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgc2VjdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHNlY3Rpb24udGl0bGU7XHJcbiAgICB0aGlzLm9yZGVyID0gc2VjdGlvbi5vcmRlcjtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG5ldyBDb25zb2xlU2VjdGlvbk9wdGlvbihzaXRlLCBvcHRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5hdExlYXN0KHRoaXMubWluaW11bVJvbGUodXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBtaW5pbXVtIHJvbGUgZm9yIGFsbCBvcHRpb25zXHJcbiAgICAgKiBpbiB0aGlzIHNlY3Rpb24gc28gd2Uga25vdyBpZiB3ZSBjYW4gc2hvdyB0aGUgc2VjdGlvbi5cclxuICAgICAqIEBwYXJhbSB1c2VyIEEgdXNlciwgc28gd2UgY2FuIGtub3cgd2hhdCB0aGUgcG9zc2libGUgcm9sZXMgYXJlXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSb2xlXHJcbiAgICAgKi9cclxuICAgIHRoaXMubWluaW11bVJvbGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvbGVMZWFzdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5TGVhc3QgPSAxMDAwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcblx0ICAgICAgICBsZXQgcm9sZSA9IG9wdGlvbi5hdExlYXN0O1xyXG5cdCAgICAgICAgaWYocm9sZSA9PT0gT2JqZWN0KHJvbGUpKSB7XHJcblx0XHQgICAgICAgIHJvbGUgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3Qocm9sZS50YWcsIHJvbGUuZGVmYXVsdCk7XHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShyb2xlKTtcclxuICAgICAgICAgICAgaWYocHJpb3JpdHkgIT09IDAgJiYgcHJpb3JpdHkgPCBwcmlvcml0eUxlYXN0KSB7XHJcbiAgICAgICAgICAgICAgICByb2xlTGVhc3QgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZWFzdCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnOyAvLy88IEFsd2F5cyBBRE1JTlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGVMZWFzdDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBPcHRpb25zIGluIGEgY29uc29sZSBwYWdlIHNlY3Rpb25cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc29sZVNlY3Rpb25PcHRpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb24pIHtcclxuXHRmb3IobGV0IG1lbWJlciBpbiBvcHRpb24pIHtcclxuXHRcdHRoaXNbbWVtYmVyXSA9IG9wdGlvblttZW1iZXJdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRsZXQgYXRMZWFzdCA9IHRoaXMuYXRMZWFzdDtcclxuXHRcdGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG5cdFx0XHRhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBLZWVwcyB0cmFjayBvZiB3aGF0IHRhYmxlIGNyZWF0ZS9kcm9wIG9wdGlvbnMgYXJlIGF2YWlsYWJsZSBvbiB0aGUgc2l0ZS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVUYWJsZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0aGlzLnRhYmxlcyA9IFt7XHJcbiAgICAgICAgdGl0bGU6ICdTaXRlJyxcclxuICAgICAgICBvcmRlcjogMCxcclxuICAgICAgICBhcGk6ICcvYXBpL3NpdGUvdGFibGVzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih0YWJsZSkge1xyXG4gICAgICAgIHRoaXMudGFibGVzLnB1c2godGFibGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJsZSB0ZFtkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxudGFibGUgYnV0dG9uW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmxpIHNwYW5bZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNmVtO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTRGQTtFQUNFLGVBQUE7QUEzRkY7QUE4RkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEzRkY7QUE4RkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBM0ZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbnRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuXFxudGFibGUgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5saSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2ZW07XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtODYyNjA2ZjM5My8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS0yMTQyNTI0NmE1LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtM2YwYzM4YmIyYy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZXNvbHZlLXVybC1sb2FkZXItdmlydHVhbC1lYzc1ZDJhMDllLzAvY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS00LjAuMC0yYTljMThkODZiLThlNWJjZjk3ODYuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC0zODU3ZjVlOWYxLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTY5YzY2ZWEzNDguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uY29uc29sZS5jb21wb25lbnRzLnBhZ2VzLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZS5hdmFpbGFibGUoX3ZtLnVzZXIpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogX3ZtLnBhZ2VMaW5rKHBhZ2UpIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFnZS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdjJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYyLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoYy5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hvcnQ6IF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFxuICAgICAgICAgICAgICAgICAgPyBfYyhfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUGFnZSBkb2VzIG5vdCBleGlzdC4uLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJEYXRhYmFzZSBUYWJsZXMgTWFuYWdlbWVudFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcGFnZSBwcm92aWRlcyBhbiBBZG1pbmlzdHJhdG9yIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSBkYXRhYmFzZSB0YWJsZXMuXFxuICBPbmx5IHVzZSBkdXJpbmcgY291cnNlIHN0YXJ0dXAhIFRoZSBjcmVhdGUgb3B0aW9uIHdpbGwgbm90IGRyb3AgYW4gZXhpc3RpbmcgdGFibGVcXG4gIHVubGVzcyB0aGUgZHJvcCBhbmQgY3JlYXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gVGhlIGNsZWFuIG9wdGlvbiBhbGxvd3MgZm9yIGNsZWFuaW5nXFxuICBvZiBvcnBoYW5lZCByZWNvcmRzIGZyb20gdGFibGVzLlwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJsZXMsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGFibGUudGl0bGUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY3JlYXRlKHRhYmxlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY3JlYXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kcm9wQ3JlYXRlKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJkcm9wLWFuZC1jcmVhdGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsZWFuKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGVhblwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5yZXN1bHRzLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdHMpKV0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgcmVkXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiVXNlIHdpdGggY2F1dGlvbiFcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGFibGVzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW192bS5fdihcIk9wZXJhdGlvbnNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OWUzNTVhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjc1YTZlZWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc1YTZlZWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTU5N2FiNjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNTk3YWI2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NDZhYzFkN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NDZhYzFkNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NDZhYzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NDZhYzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NDZhYzFkNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJDb25zb2xlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY29tbW9uXCIsXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==