(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Console"] = factory();
	else
		root["Console"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Console"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['console', 'user'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    pageLink: function pageLink(page) {
      return "".concat(Site.root, "/cl/console").concat(page.route);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tables: this.$site.console.tables.tables,
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
        }).catch(function (error) {
          _this.$site.toast(_this, error);
        });
      },
      dropCreate: function dropCreate(table) {
        var _this2 = this;

        new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox("Are you sure?", 'Are you sure you want to drop and recreate the ' + table.title + ' tables?', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
          _this2.create(table, true);
        });
      }
    };
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Database Tables');
    this.$site.console.tables.tables.sort(function (a, b) {
      return a.order - b.order;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli a[data-v-746ac1d7]:first-child {\n  display: inline-block;\n  width: 12em;\n}\nli a[data-v-746ac1d7]:nth-child(2) {\n  font-size: 0.85em;\n  font-style: italic;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
              })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
        "The page provides an Administrator the ability to create and destroy database tables.\n  Only use during course startup! The create option will not drop an existing table\n  unless the drop and create option is selected."
      )
    ]),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.tables, function(table) {
        return _c("li", [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.create(table, false)
                }
              }
            },
            [_vm._v(_vm._s(table.title))]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.dropCreate(table)
                }
              }
            },
            [_vm._v("drop-and-create")]
          )
        ])
      })
    )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("79e2e982", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/console/index.js":
/*!************************************!*\
  !*** ./vendor/cl/console/index.js ***!
  \************************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony import */ var _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ConsoleFactory */ "./vendor/cl/console/js/ConsoleFactory.js");

var Console = _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__["ConsoleFactory"].create(Site.Site);
 // We set it in the global Site object

Site.Console = Console; //const components = Console.components;
//export {components};
//const tables = Console.tables;
// export {tables};

/***/ }),

/***/ "./vendor/cl/console/js/Console.js":
/*!*****************************************!*\
  !*** ./vendor/cl/console/js/Console.js ***!
  \*****************************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony import */ var _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponents */ "./vendor/cl/console/js/ConsoleComponents.js");
/* harmony import */ var _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleTables */ "./vendor/cl/console/js/ConsoleTables.js");
/* harmony import */ var _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleComponent */ "./vendor/cl/console/js/ConsoleComponent.js");
/* harmony import */ var _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavComponent.vue */ "./vendor/cl/console/js/NavComponent.vue");
/* harmony import */ var _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFoundComponent.vue */ "./vendor/cl/console/js/NotFoundComponent.vue");
/* harmony import */ var site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-cl/js/Util/StickyNav */ "./vendor/cl/site/js/Util/StickyNav.js");
/**
 * @file
 * Object that is the main console page.
 */






var Console = function Console(site) {
  // This property makes it possible to change the console titles
  this.title = 'Site Console'; // The console components are the installed components
  // like the users editor or table creation.

  this.components = new _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__["ConsoleComponents"](site); // The console tables component keeps track of the
  // database tables we may need to create

  this.tables = new _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__["ConsoleTables"]();

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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.components.getRoutes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.components.pages.forEach(function (page) {
      if (user.atLeast(page.minimumRole(user))) {
        var component = page.component !== undefined ? page.component : new _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__["ConsoleComponent"](_this, site, user, page);
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
      component: _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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
      'console-nav': _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    var store = site.store;
    var siteTitle = this.title;
    var Console = this;
    this.masterVue = new Site.Vue({
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

        /**
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
        new site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_5__["StickyNav"]('div.cl-console nav');
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponent.js":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponent.js ***!
  \**************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/**
 * @file
 * Components that represent a console page.
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
          atLeast = site.permissions.atLeast(atLeast.tag, atLeast.default);
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
/*! exports provided: ConsoleComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponents", function() { return ConsoleComponents; });
/* harmony import */ var _ConsolePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsolePage.js */ "./vendor/cl/console/js/ConsolePage.js");
/**
 * @file Management of all console components
 *
 * Components are:
 * start scripts run when the console is started (addStart)
 * main Components added to every page (addMainComponent)
 * options Adds top-level menu options and options on pages (addOption)
 * routes Adds routes to the console directory (addRoute, addRoutes)
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = component[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;
          this.removeNav2(vue, c);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return;
    }

    for (var i = 0; i < this.nav2.length; i++) {
      if (this.nav2[i].component === component) {
        console.log('found it');
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
        var _page = new _ConsolePage_js__WEBPACK_IMPORTED_MODULE_0__["ConsolePage"](site, option.page);

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
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = addroutes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var route = _step2.value;
        routes.push(route);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  this.getRoutes = function () {
    return routes;
  };
  /**
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
/*! exports provided: ConsoleFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleFactory", function() { return ConsoleFactory; });
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Console */ "./vendor/cl/console/js/Console.js");
/* harmony import */ var _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue */ "./vendor/cl/console/js/TablesComponent.vue");
/**
 * @file
 * Factory class to create the Console object
 */


var ConsoleFactory = function ConsoleFactory() {};

ConsoleFactory.create = function (site) {
  var siteConsole = new _Console__WEBPACK_IMPORTED_MODULE_0__["Console"](site); // Save as a site property

  site.console = siteConsole; // Add standard options

  siteConsole.components.addOption({
    atLeast: Users.User.STAFF,
    page: {
      title: 'Main',
      route: '',
      order: 1
    }
  });
  siteConsole.components.addOption({
    atLeast: Users.User.ADMIN,
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
      component: _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }]
  });
  site.start(function () {
    var element = document.querySelector('div.cl-console');

    if (element !== null) {
      siteConsole.start(element);
    }
  });
  return siteConsole;
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsolePage.js":
/*!*********************************************!*\
  !*** ./vendor/cl/console/js/ConsolePage.js ***!
  \*********************************************/
/*! exports provided: ConsolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolePage", function() { return ConsolePage; });
/* harmony import */ var _ConsoleSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSection.js */ "./vendor/cl/console/js/ConsoleSection.js");
/**
 * @file
 * Represents a console page in the ConsoleComponents collection
 */

var ConsolePage = function ConsolePage(site, page) {
  var _this = this;

  this.title = page.title;
  this.route = page.route;
  this.order = page.order;
  this.component = page.component;
  this.atLeast = page.atLeast !== undefined ? page.atLeast : null;
  this.sections = [];

  this.add = function (option) {
    // Does the item have a section?
    if (option.section === undefined) {
      return;
    }

    var section = findSection(option.section.title);

    if (section !== null) {
      section.add(option);
    } else {
      var _section = new _ConsoleSection_js__WEBPACK_IMPORTED_MODULE_0__["ConsoleSection"](site, option.section);

      this.sections.push(_section);

      _section.add(option);
    }
  };

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

  this.minimumRole = function (user) {
    var roleLeast = this.atLeast;

    if (roleLeast === Object(roleLeast)) {
      roleLeast = site.permissions.atLeast(roleLeast.tag, roleLeast.default);
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
/*! exports provided: ConsoleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleSection", function() { return ConsoleSection; });
/* harmony import */ var _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSectionOption */ "./vendor/cl/console/js/ConsoleSectionOption.js");
/**
 * @file
 * Console section: These are the <h2> page sections
 */

var ConsoleSection = function ConsoleSection(site, section) {
  this.title = section.title;
  this.order = section.order;
  this.options = [];

  this.add = function (option) {
    this.options.push(new _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__["ConsoleSectionOption"](site, option));
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
        role = site.permissions.atLeast(role.tag, role.default);
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
/*! exports provided: ConsoleSectionOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleSectionOption", function() { return ConsoleSectionOption; });
/**
 * @file
 * Options in a console page section
 */
var ConsoleSectionOption = function ConsoleSectionOption(site, option) {
  for (var member in option) {
    this[member] = option[member];
  } // this.option = option;


  this.available = function (user) {
    var atLeast = this.atLeast;

    if (atLeast === Object(atLeast)) {
      atLeast = site.permissions.atLeast(atLeast.tag, atLeast.default);
    }

    return atLeast === undefined || user.atLeast(atLeast);
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleTables.js":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/ConsoleTables.js ***!
  \***********************************************/
/*! exports provided: ConsoleTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleTables", function() { return ConsoleTables; });
/**
 * @file
 * Keeps track of what table create/drop options are available on the site.
 */
var ConsoleTables = function ConsoleTables() {
  this.tables = [];

  this.add = function (table) {
    this.tables.push(table);
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('275a6eeb', component.options)
    } else {
      api.reload('275a6eeb', component.options)
    }
    module.hot.accept(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
(function () {
      api.rerender('275a6eeb', {
        render: _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/console/js/NavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue":
/*!****************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
/* harmony import */ var _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('a597ab66', component.options)
    } else {
      api.reload('a597ab66', component.options)
    }
    module.hot.accept(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
(function () {
      api.rerender('a597ab66', {
        render: _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/console/js/NotFoundComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFoundComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
/* harmony import */ var _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "746ac1d7",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('746ac1d7', component.options)
    } else {
      api.reload('746ac1d7', component.options)
    }
    module.hot.accept(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
(function () {
      api.rerender('746ac1d7', {
        render: _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/console/js/TablesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Util/StickyNav.js":
/*!*********************************************!*\
  !*** ./vendor/cl/site/js/Util/StickyNav.js ***!
  \*********************************************/
/*! exports provided: StickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNav", function() { return StickyNav; });
/**
 * Make the nav bar 'sticky'. It sticks to the top
 * of the page instead of scrolling off.
 * @param sel Selector to find the nav bar.
 * @constructor
 */
var StickyNav = function StickyNav(sel) {
  var navs = [];
  var spacer = document.createElement('div');
  var installed = false;
  var els = document.querySelectorAll(sel);

  for (var i = 0; i < els.length; i++) {
    navs.push({
      nav: els[i],
      sticky: els[i].offsetTop
    });
  }

  window.addEventListener('scroll', function (event) {
    for (var _i = 0; _i < navs.length; _i++) {
      var nav = navs[_i];

      if (window.pageYOffset >= nav.sticky) {
        if (!installed) {
          nav.nav.classList.add("cl-sticky");
          nav.nav.parentNode.appendChild(spacer);
          installed = true;
        }

        spacer.style.height = nav.nav.clientHeight + 'px';
      } else {
        if (installed) {
          nav.nav.classList.remove("cl-sticky");
          spacer.parentNode.removeChild(spacer);
          installed = false;
        }
      }
    }
  });
};

/***/ })

},[["./vendor/cl/console/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MDFkNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzY2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2ZhZDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT81ZWIxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MTBiYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb25PcHRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVRhYmxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/ZTc2YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzZkMzQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iOTFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iNzE4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT82ZDdkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NWQxNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzhlN2EiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVXRpbC9TdGlja3lOYXYuanMiXSwibmFtZXMiOlsiQ29uc29sZSIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwidGl0bGUiLCJjb21wb25lbnRzIiwidGFibGVzIiwic3RhcnQiLCJlbGVtZW50Iiwic29ydCIsInVzZXIiLCJzdG9yZSIsInN0YXRlIiwidGVtcGxhdGUiLCJtYWluIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInRhZyIsInJvdXRlcyIsImdldFJvdXRlcyIsInJvdXRlIiwicm9iaiIsInBhdGgiLCJyb290IiwicHJvcHMiLCJ1bmRlZmluZWQiLCJuYW1lIiwicHVzaCIsInBhZ2VzIiwicGFnZSIsImF0TGVhc3QiLCJtaW5pbXVtUm9sZSIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIkNvbnNvbGVDb21wb25lbnQiLCJjbnQiLCJtZW51IiwiT2JqZWN0IiwicGVybWlzc2lvbnMiLCJkZWZhdWx0IiwibGVuZ3RoIiwiJHBhcmVudCIsIkNvbnNvbGVDb21wb25lbnRzIiwiYWRkU3RhcnQiLCJzY3JpcHQiLCJzdGFydHVwIiwiYWRkTWFpbkNvbXBvbmVudCIsIm9yZGVyIiwibmF2MiIsImFkZE5hdjIiLCJhIiwiYiIsInJlbW92ZU5hdjIiLCJ2dWUiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiaSIsImxvZyIsInNwbGljZSIsIiRzZXQiLCJhZGROYXYyTGluayIsImNsaWNrIiwibmF2MnJpZ2h0IiwibmF2MmxlZnQiLCJhZGRPcHRpb24iLCJmaW5kUGFnZSIsImFkZCIsImdldFBhZ2VzIiwiYWRkUm91dGUiLCJhZGRSb3V0ZXMiLCJhZGRyb3V0ZXMiLCJDb25zb2xlRmFjdG9yeSIsInNpdGVDb25zb2xlIiwiVXNlcnMiLCJVc2VyIiwiU1RBRkYiLCJBRE1JTiIsIlRhYmxlc0NvbXBvbmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJDb25zb2xlUGFnZSIsImZpbmRTZWN0aW9uIiwicm9sZUxlYXN0IiwicHJpb3JpdHlMZWFzdCIsImdldFJvbGVQcmlvcml0eSIsInNlY3Rpb25MZWFzdCIsInByaW9yaXR5IiwiQ29uc29sZVNlY3Rpb24iLCJyb2xlIiwiQ29uc29sZVNlY3Rpb25PcHRpb24iLCJtZW1iZXIiLCJDb25zb2xlVGFibGVzIiwidGFibGUiLCJTdGlja3lOYXYiLCJzZWwiLCJuYXZzIiwic3BhY2VyIiwiY3JlYXRlRWxlbWVudCIsImluc3RhbGxlZCIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXYiLCJzdGlja3kiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsZ0JBUEE7QUFVQSxTQVZBLHFCQVVBLENBRUEsQ0FaQTtBQWFBO0FBQ0EsWUFEQSxvQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBLFNBREEscUJB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LGNBQU0sQ0FBQ2UsS0FBUCxDQUFhQyxNQUFiLEdBQXNCWCxHQUFHLENBQUNBLEdBQUosQ0FBUVksWUFBUixHQUF1QixJQUE3QztBQUNILE9BUEQsTUFPTztBQUNILFlBQUdmLFNBQUgsRUFBYztBQUNWRyxhQUFHLENBQUNBLEdBQUosQ0FBUU8sU0FBUixDQUFrQk0sTUFBbEIsQ0FBeUIsV0FBekI7QUFDQWxCLGdCQUFNLENBQUNhLFVBQVAsQ0FBa0JNLFdBQWxCLENBQThCbkIsTUFBOUI7QUFDQUUsbUJBQVMsR0FBRyxLQUFaO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FsQkQ7QUFvQkgsQ0FsQ00sQyIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ29uc29sZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwicGFnZSBpbiBjb25zb2xlLmNvbXBvbmVudHMucGFnZXNcIiB2LWlmPVwicGFnZS5hdmFpbGFibGUodXNlcilcIj5cclxuICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJwYWdlTGluayhwYWdlKVwiPnt7cGFnZS50aXRsZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiIDppcz1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNvbnNvbGUuY29tcG9uZW50cy5uYXYyXCI+PGNvbXBvbmVudCA6aXM9XCJjLmNvbXBvbmVudFwiIDpzaG9ydD1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDJcIj48L2NvbXBvbmVudD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2NvbnNvbGUnLCAndXNlciddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6IFNpdGUucm9vdCArICcvJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgcGFnZUxpbmsocGFnZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHtTaXRlLnJvb3R9L2NsL2NvbnNvbGUke3BhZ2Uucm91dGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICA8cD5QYWdlIGRvZXMgbm90IGV4aXN0Li4uPC9wPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJ1BhZ2UgZG9lcyBub3QgZXhpc3QuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICA8aDI+RGF0YWJhc2UgVGFibGVzIE1hbmFnZW1lbnQ8L2gyPlxyXG4gICAgPHAgY2xhc3M9XCJjZW50ZXIgcmVkXCI+PGVtPlVzZSB3aXRoIGNhdXRpb24hPC9lbT48L3A+XHJcbiAgPHA+VGhlIHBhZ2UgcHJvdmlkZXMgYW4gQWRtaW5pc3RyYXRvciB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW5kIGRlc3Ryb3kgZGF0YWJhc2UgdGFibGVzLlxyXG4gICAgT25seSB1c2UgZHVyaW5nIGNvdXJzZSBzdGFydHVwISBUaGUgY3JlYXRlIG9wdGlvbiB3aWxsIG5vdCBkcm9wIGFuIGV4aXN0aW5nIHRhYmxlXHJcbiAgICB1bmxlc3MgdGhlIGRyb3AgYW5kIGNyZWF0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuPC9wPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgdi1mb3I9XCJ0YWJsZSBpbiB0YWJsZXNcIj48YSBAY2xpY2sucHJldmVudD1cImNyZWF0ZSh0YWJsZSwgZmFsc2UpXCI+e3t0YWJsZS50aXRsZX19PC9hPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cImRyb3BDcmVhdGUodGFibGUpXCI+ZHJvcC1hbmQtY3JlYXRlPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFibGVzOiB0aGlzLiRzaXRlLmNvbnNvbGUudGFibGVzLnRhYmxlcyxcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbih0YWJsZSwgZHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCh0YWJsZS5hcGksIHtkcm9wOiBkcm9wID8gJ3llcycgOiAnbm8nfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRyb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgZHJvcHBlZCBhbmQgcmVjcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgY3JlYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3BDcmVhdGU6IGZ1bmN0aW9uKHRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZHJvcCBhbmQgcmVjcmVhdGUgdGhlICcgKyB0YWJsZS50aXRsZSArXHJcbiAgICAgICAgICAgICAgICAnIHRhYmxlcz8nLCBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlKHRhYmxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBEYXRhYmFzZSBUYWJsZXMnKTtcclxuXHQgICAgICB0aGlzLiRzaXRlLmNvbnNvbGUudGFibGVzLnRhYmxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgbGkgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICB9XHJcblxyXG4gIGxpIGE6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5saSBhW2RhdGEtdi03NDZhYzFkN106Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEyZW07XFxufVxcbmxpIGFbZGF0YS12LTc0NmFjMWQ3XTpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1uYXZcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5ob21lTGluayB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaG9tZVwiIH0sIFtfdm0uX3YoXCJIb21lXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5wYWdlcywgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2UuYXZhaWxhYmxlKF92bS51c2VyKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5wYWdlTGluayhwYWdlKSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBhZ2UudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJsZWZ0XG4gICAgICAgICAgICAgICAgICA/IF9jKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MiwgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKGMuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNob3J0OiBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlBhZ2UgZG9lcyBub3QgZXhpc3QuLi5cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiRGF0YWJhc2UgVGFibGVzIE1hbmFnZW1lbnRcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhlIHBhZ2UgcHJvdmlkZXMgYW4gQWRtaW5pc3RyYXRvciB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW5kIGRlc3Ryb3kgZGF0YWJhc2UgdGFibGVzLlxcbiAgT25seSB1c2UgZHVyaW5nIGNvdXJzZSBzdGFydHVwISBUaGUgY3JlYXRlIG9wdGlvbiB3aWxsIG5vdCBkcm9wIGFuIGV4aXN0aW5nIHRhYmxlXFxuICB1bmxlc3MgdGhlIGRyb3AgYW5kIGNyZWF0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuXCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAgX3ZtLl9sKF92bS50YWJsZXMsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0uY3JlYXRlKHRhYmxlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0YWJsZS50aXRsZSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0uZHJvcENyZWF0ZSh0YWJsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiZHJvcC1hbmQtY3JlYXRlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHJlZFwiIH0sIFtcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIlVzZSB3aXRoIGNhdXRpb24hXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3OWUyZTk4MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7Q29uc29sZUZhY3Rvcnl9IGZyb20gJy4vanMvQ29uc29sZUZhY3RvcnknO1xyXG5cclxuY29uc3QgQ29uc29sZSA9IENvbnNvbGVGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG5leHBvcnQge0NvbnNvbGV9O1xyXG5cclxuLy8gV2Ugc2V0IGl0IGluIHRoZSBnbG9iYWwgU2l0ZSBvYmplY3RcclxuU2l0ZS5Db25zb2xlID0gQ29uc29sZTtcclxuXHJcbi8vY29uc3QgY29tcG9uZW50cyA9IENvbnNvbGUuY29tcG9uZW50cztcclxuLy9leHBvcnQge2NvbXBvbmVudHN9O1xyXG5cclxuLy9jb25zdCB0YWJsZXMgPSBDb25zb2xlLnRhYmxlcztcclxuLy8gZXhwb3J0IHt0YWJsZXN9O1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogT2JqZWN0IHRoYXQgaXMgdGhlIG1haW4gY29uc29sZSBwYWdlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29uc29sZUNvbXBvbmVudHN9IGZyb20gJy4vQ29uc29sZUNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NvbnNvbGVUYWJsZXN9IGZyb20gJy4vQ29uc29sZVRhYmxlcydcclxuaW1wb3J0IHtDb25zb2xlQ29tcG9uZW50fSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnQnO1xyXG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gJy4vTmF2Q29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBOb3RGb3VuZENvbXBvbmVudCBmcm9tICcuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCB7U3RpY2t5TmF2fSBmcm9tICdzaXRlLWNsL2pzL1V0aWwvU3RpY2t5TmF2JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIC8vIFRoaXMgcHJvcGVydHkgbWFrZXMgaXQgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBjb25zb2xlIHRpdGxlc1xyXG4gICAgdGhpcy50aXRsZSA9ICdTaXRlIENvbnNvbGUnO1xyXG5cclxuICAgIC8vIFRoZSBjb25zb2xlIGNvbXBvbmVudHMgYXJlIHRoZSBpbnN0YWxsZWQgY29tcG9uZW50c1xyXG4gICAgLy8gbGlrZSB0aGUgdXNlcnMgZWRpdG9yIG9yIHRhYmxlIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbnNvbGVDb21wb25lbnRzKHNpdGUpO1xyXG5cclxuICAgIC8vIFRoZSBjb25zb2xlIHRhYmxlcyBjb21wb25lbnQga2VlcHMgdHJhY2sgb2YgdGhlXHJcbiAgICAvLyBkYXRhYmFzZSB0YWJsZXMgd2UgbWF5IG5lZWQgdG8gY3JlYXRlXHJcbiAgICB0aGlzLnRhYmxlcyA9IG5ldyBDb25zb2xlVGFibGVzKCk7XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc29ydCgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zdGFydCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBpbnN0YWxsZWQgdXNlclxyXG4gICAgICAgIGxldCB1c2VyID0gc2l0ZS5zdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSB0ZW1wbGF0ZSwgc2V0dGluZyB1cCB0aGUgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJjbC1jb25zb2xlXCI+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+XHJcbjxjb25zb2xlLW5hdiA6Y29uc29sZT1cImNvbnNvbGVcIiA6dXNlcj1cInVzZXJcIj48L2NvbnNvbGUtbmF2PlxyXG48L3NpdGUtaGVhZGVyPmA7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5tYWluLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPCR7Y29tcG9uZW50LnRhZ30gLz5gO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRlbXBsYXRlICs9IGBcclxuPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbjxzaXRlLWZvb3Rlcj48L3NpdGUtZm9vdGVyPjwvZGl2PmA7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSByb3V0ZXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCByb3V0ZSBvZiB0aGlzLmNvbXBvbmVudHMuZ2V0Um91dGVzKCkpIHtcclxuICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyLmF0TGVhc3QocGFnZS5taW5pbXVtUm9sZSh1c2VyKSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBwYWdlLmNvbXBvbmVudCAhPT0gdW5kZWZpbmVkID8gcGFnZS5jb21wb25lbnQgOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb25zb2xlQ29tcG9uZW50KHRoaXMsIHNpdGUsIHVzZXIsIHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyBwYWdlLnJvdXRlLCBjb21wb25lbnQ6IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb24uYXZhaWxhYmxlKHVzZXIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLnJvdXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyByb3V0ZS5yb3V0ZSwgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5uYW1lID0gcm91dGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChyb2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByb3V0ZXMucHVzaCh7IHBhdGg6ICcqJywgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgICAgICBjb25zdCBGb290ZXIgPSBzaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBuZXcgc2l0ZS5WdWVSb3V0ZXIoe1xyXG4gICAgICAgICAgICByb3V0ZXM6IHJvdXRlcyxcclxuICAgICAgICAgICAgbW9kZTogJ2hpc3RvcnknXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgJ3NpdGUtaGVhZGVyJzogSGVhZGVyLFxyXG4gICAgICAgICAgICAnc2l0ZS1mb290ZXInOiBGb290ZXIsXHJcbiAgICAgICAgICAgICdjb25zb2xlLW5hdic6IE5hdkNvbXBvbmVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0b3JlID0gc2l0ZS5zdG9yZTtcclxuICAgICAgICBsZXQgc2l0ZVRpdGxlID0gdGhpcy50aXRsZTtcclxuICAgICAgICBsZXQgQ29uc29sZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMubWFzdGVyVnVlID0gbmV3IFNpdGUuVnVlKHtcclxuICAgICAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHN0b3JlLCAgICAgIC8vIEluamVjdCB0aGUgc3RvcmVcclxuICAgICAgICAgICAgc2l0ZSwgICAgICAgLy8gSW5qZWN0IHNpdGUsIHNvICRzaXRlIGlzIGF2YWlsYWJsZSBmb3IgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgcm91dGVyLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNpdGVUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlOiBDb25zb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGlzQWRtaW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZG1pbjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHNpdGVUaXRsZSArIHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgICAgICAgbmV3IFN0aWNreU5hdignZGl2LmNsLWNvbnNvbGUgbmF2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29tcG9uZW50cyB0aGF0IHJlcHJlc2VudCBhIGNvbnNvbGUgcGFnZS5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVDb21wb25lbnQgPSBmdW5jdGlvbihjb25zb2xlLCBzaXRlLCB1c2VyLCBwYWdlKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gYDxkaXYgaWQ9XCJjbC1jb25zb2xlLW1haW5cIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPmA7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudHMgPSB7fTtcclxuICAgIGxldCBjbnQgPSAxO1xyXG5cclxuICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmKCFzZWN0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8aDI+JHtzZWN0aW9uLnRpdGxlfTwvaDI+YDtcclxuXHJcbiAgICAgICBsZXQgbWVudSA9ICcnO1xyXG5cclxuICAgICAgIC8vIEFkZCB0aGUgbWVudSBvcHRpb25zXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgaWYob3B0aW9uLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgbGV0IGF0TGVhc3QgPSBvcHRpb24uYXRMZWFzdDtcclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gT2JqZWN0KGF0TGVhc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZihhdExlYXN0ID09PSB1bmRlZmluZWQgfHwgdXNlci5hdExlYXN0KGF0TGVhc3QpKSB7XHJcblx0ICAgICAgICAgICAgICAgbWVudSArPSBgPGxpPjxyb3V0ZXItbGluayB0bz1cIiR7c2l0ZS5yb290fS9jbC9jb25zb2xlJHtvcHRpb24ucm91dGV9XCI+JHtvcHRpb24udGl0bGV9PC9yb3V0ZXItbGluaz48L2xpPmA7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgICBpZihtZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9ICc8dWw+JyArIG1lbnUgKyAnPC91bD4nO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW55IGN1c3RvbSBjb21wb25lbnRzXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbi5jb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgKz0gYDxjb25zb2xlLWNvbXBvbmVudC0ke2NudH0+PC9jb25zb2xlLWNvbXBvbmVudC0ke2NudH0+YDtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbJ2NvbnNvbGUtY29tcG9uZW50LScgKyBjbnRdID0gb3B0aW9uLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlICs9IGA8L2Rpdj48L2Rpdj5gO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcclxuXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihwYWdlLnRpdGxlID09PSAnTWFpbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHBhZ2UudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGZpbGUgTWFuYWdlbWVudCBvZiBhbGwgY29uc29sZSBjb21wb25lbnRzXHJcbiAqXHJcbiAqIENvbXBvbmVudHMgYXJlOlxyXG4gKiBzdGFydCBzY3JpcHRzIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWQgKGFkZFN0YXJ0KVxyXG4gKiBtYWluIENvbXBvbmVudHMgYWRkZWQgdG8gZXZlcnkgcGFnZSAoYWRkTWFpbkNvbXBvbmVudClcclxuICogb3B0aW9ucyBBZGRzIHRvcC1sZXZlbCBtZW51IG9wdGlvbnMgYW5kIG9wdGlvbnMgb24gcGFnZXMgKGFkZE9wdGlvbilcclxuICogcm91dGVzIEFkZHMgcm91dGVzIHRvIHRoZSBjb25zb2xlIGRpcmVjdG9yeSAoYWRkUm91dGUsIGFkZFJvdXRlcylcclxuICovXHJcblxyXG5pbXBvcnQge0NvbnNvbGVQYWdlfSBmcm9tICcuL0NvbnNvbGVQYWdlLmpzJztcclxuXHJcbmV4cG9ydCBsZXQgQ29uc29sZUNvbXBvbmVudHMgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFN0YXJ0IHNjcmlwdHMgYXJlIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWRcclxuICAgIC8vXHJcbiAgICBsZXQgc3RhcnQgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZFN0YXJ0ID0gZnVuY3Rpb24oc2NyaXB0KSB7XHJcbiAgICAgICAgc3RhcnQucHVzaChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbihjb25zb2xlKSB7XHJcbiAgICAgICAgc3RhcnQuZm9yRWFjaCgoc3RhcnR1cCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydHVwKGNvbnNvbGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEFueSBjb21wb25lbnRzIHRvIGFkZCB0byB0aGUgbWFpbiBwYWdlIChldmVyeSBwYWdlKVxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBjb3Vyc2Ugc3Vic3lzdGVtIHVzZXMgdGhpcyB0byBhZGQgYSBiYXIgdGhlIHNlbGVjdHNcclxuICAgIC8vIHRoZSBjb3Vyc2Ugc2VjdGlvbiByaWdodCBiZWxvdyB0aGUgbWVudSBiYXIuXHJcbiAgICAvL1xyXG4gICAgdGhpcy5tYWluID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRNYWluQ29tcG9uZW50ID0gZnVuY3Rpb24odGFnLCBjb21wb25lbnQsIG9yZGVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tYWluLnB1c2goe1xyXG4gICAgICAgIC8vICAgICB0YWc6IHRhZyxcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgLy8gICAgIG9yZGVyOiBvcmRlclxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2MiA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkTmF2MiA9IGZ1bmN0aW9uKGNvbXBvbmVudCwgb3JkZXIpIHtcclxuICAgICAgICB0aGlzLm5hdjIucHVzaCh7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgICAgICBvcmRlcjogb3JkZXJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5hdjIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVOYXYyID0gZnVuY3Rpb24odnVlLCBjb21wb25lbnQpIHtcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjIG9mIGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVOYXYyKHZ1ZSwgYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubmF2Mi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLm5hdjJbaV0uY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBpdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXYyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZE5hdjJMaW5rID0gZnVuY3Rpb24odnVlLCBuYW1lLCBvcmRlciwgY2xpY2spIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxhIEBjbGljay5wcmV2ZW50PVwiY2xpY2tcIj4ke25hbWV9PC9hPmAsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkTmF2Mihjb21wb25lbnQsIG9yZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2dWUuJHNldCh0aGlzLCAnbmF2MicsIHRoaXMubmF2Mik7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjJyaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLm5hdjJsZWZ0ID0gbnVsbDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29uc29sZSBvcHRpb25zIGFyZSBtZW51IG9wdGlvbnMgaW4gdGhlIHNpdGUgY29uc29sZS5cclxuICAgIC8vIFRoaXMgaXMgaG93IHRoZSB0b3AtbGV2ZWwgbWVudXMsIHNlY3Rpb25zLCBhbmQgbGlua3NcclxuICAgIC8vIGFyZSBkZWZpbmVkLlxyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkT3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29ydCB0aGUgY29tcG9uZW50cyBpbnRvIGEgc3RydWN0dXJlXHJcbiAgICAgKiBmb3IgY3JlYXRpbmcgdGhlIG1hbmFnZW1lbnQgcGFnZXMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gZmluZFBhZ2Uob3B0aW9uLnBhZ2UudGl0bGUpO1xyXG4gICAgICAgICAgICBpZihwYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSBuZXcgQ29uc29sZVBhZ2Uoc2l0ZSwgb3B0aW9uLnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZSBwYWdlcywgc2VjdGlvbnMsIGFuZCBvcHRpb25zIGluIG9yZGVyXHJcbiAgICAgICAgdGhpcy5wYWdlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgcGFnZS5zb3J0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gU29ydCBhbnkgbWFpbiBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy5tYWluLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRQYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByb3V0ZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlID0gZnVuY3Rpb24ocm91dGUpIHtcclxuICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRSb3V0ZXMgPSBmdW5jdGlvbihhZGRyb3V0ZXMpIHtcclxuICAgICAgICBmb3IobGV0IHJvdXRlIG9mIGFkZHJvdXRlcykge1xyXG4gICAgICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRSb3V0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm91dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBsaXN0IG9mIGl0ZW1zIG9mIHRoZSBmb3JtIHt0aXRsZTogJ3RpdGxlJywgb3JkZXI6ICdvcmRlcid9LFxyXG4gICAgICogZmluZCBhbiBpdGVtIHdpdGggYSBnaXZlbiB0aXRsZS5cclxuICAgICAqIEBwYXJhbSBsaXN0XHJcbiAgICAgKiBAcGFyYW0gdGl0bGVcclxuICAgICAqL1xyXG4gICAgbGV0IGZpbmRQYWdlID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMucGFnZXMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wYWdlc1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogRmFjdG9yeSBjbGFzcyB0byBjcmVhdGUgdGhlIENvbnNvbGUgb2JqZWN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuL0NvbnNvbGUnO1xyXG5pbXBvcnQgVGFibGVzQ29tcG9uZW50IGZyb20gJy4vVGFibGVzQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uc29sZUZhY3RvcnkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuQ29uc29sZUZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IHNpdGVDb25zb2xlID0gbmV3IENvbnNvbGUoc2l0ZSk7XHJcblxyXG4gICAgLy8gU2F2ZSBhcyBhIHNpdGUgcHJvcGVydHlcclxuICAgIHNpdGUuY29uc29sZSA9IHNpdGVDb25zb2xlO1xyXG5cclxuICAgIC8vIEFkZCBzdGFuZGFyZCBvcHRpb25zXHJcbiAgICBzaXRlQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogVXNlcnMuVXNlci5TVEFGRixcclxuICAgICAgICBwYWdlOiB7dGl0bGU6ICdNYWluJywgcm91dGU6ICcnLCBvcmRlcjogMX0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogVXNlcnMuVXNlci5BRE1JTixcclxuICAgICAgICBwYWdlOiB7dGl0bGU6ICdNYW5hZ2VtZW50Jywgcm91dGU6ICcvbWFuYWdlbWVudCcsIG9yZGVyOiAxMH0sXHJcbiAgICAgICAgc2VjdGlvbjoge3RpdGxlOiAnU2l0ZSBNYW5hZ2VtZW50Jywgb3JkZXI6IDF9LFxyXG4gICAgICAgIHRpdGxlOiAnVGFibGVzJyxcclxuICAgICAgICBvcmRlcjogMTAsXHJcbiAgICAgICAgcm91dGU6ICcvbWFuYWdlbWVudC90YWJsZXMnLFxyXG4gICAgICAgIHJvdXRlczogW1xyXG4gICAgICAgICAgICB7cm91dGU6ICcvbWFuYWdlbWVudC90YWJsZXMnLCBuYW1lOiAndGFibGVzJywgY29tcG9uZW50OiBUYWJsZXNDb21wb25lbnR9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l0ZS5zdGFydCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNsLWNvbnNvbGUnKTtcclxuICAgICAgICBpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNpdGVDb25zb2xlLnN0YXJ0KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzaXRlQ29uc29sZTtcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRzIGEgY29uc29sZSBwYWdlIGluIHRoZSBDb25zb2xlQ29tcG9uZW50cyBjb2xsZWN0aW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb25zb2xlU2VjdGlvbn0gZnJvbSAnLi9Db25zb2xlU2VjdGlvbi5qcyc7XHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVQYWdlID0gZnVuY3Rpb24oc2l0ZSwgcGFnZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHBhZ2UudGl0bGU7XHJcbiAgICB0aGlzLnJvdXRlID0gcGFnZS5yb3V0ZTtcclxuICAgIHRoaXMub3JkZXIgPSBwYWdlLm9yZGVyO1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSBwYWdlLmNvbXBvbmVudDtcclxuICAgIHRoaXMuYXRMZWFzdCA9IHBhZ2UuYXRMZWFzdCAhPT0gdW5kZWZpbmVkID8gcGFnZS5hdExlYXN0IDogbnVsbDtcclxuXHJcbiAgICB0aGlzLnNlY3Rpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICAvLyBEb2VzIHRoZSBpdGVtIGhhdmUgYSBzZWN0aW9uP1xyXG4gICAgICAgIGlmKG9wdGlvbi5zZWN0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBmaW5kU2VjdGlvbihvcHRpb24uc2VjdGlvbi50aXRsZSk7XHJcbiAgICAgICAgaWYoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFkZChvcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uID0gbmV3IENvbnNvbGVTZWN0aW9uKHNpdGUsIG9wdGlvbi5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFkZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNvcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmluZFNlY3Rpb24gPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbnNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIElzIHRoaXMgcGFnZSBhdmFpbGFibGUgdG8gdGhpcyB1c2VyP1xyXG5cdCAqIEBwYXJhbSB1c2VyIFVzZXIgdG8gdGVzdFxyXG5cdCAqL1xyXG5cdHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLmF0TGVhc3QodGhpcy5taW5pbXVtUm9sZSh1c2VyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taW5pbXVtUm9sZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBsZXQgcm9sZUxlYXN0ID0gdGhpcy5hdExlYXN0O1xyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gT2JqZWN0KHJvbGVMZWFzdCkpIHtcclxuICAgICAgICAgICAgcm9sZUxlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KHJvbGVMZWFzdC50YWcsIHJvbGVMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmlvcml0eUxlYXN0ID0gdGhpcy5hdExlYXN0ICE9PSBudWxsID8gdXNlci5nZXRSb2xlUHJpb3JpdHkocm9sZUxlYXN0KSA6IDEwMDAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uTGVhc3QgPSBzZWN0aW9uLm1pbmltdW1Sb2xlKHVzZXIpO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShzZWN0aW9uTGVhc3QpO1xyXG4gICAgICAgICAgICBpZihwcmlvcml0eSAhPT0gMCAmJiBwcmlvcml0eSA8IHByaW9yaXR5TGVhc3QpIHtcclxuICAgICAgICAgICAgICAgIHJvbGVMZWFzdCA9IHNlY3Rpb25MZWFzdDtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGVhc3QgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJzsgLy8vPCBBbHdheXMgQURNSU5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb2xlTGVhc3Q7XHJcblxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIENvbnNvbGUgc2VjdGlvbjogVGhlc2UgYXJlIHRoZSA8aDI+IHBhZ2Ugc2VjdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQge0NvbnNvbGVTZWN0aW9uT3B0aW9ufSBmcm9tICcuL0NvbnNvbGVTZWN0aW9uT3B0aW9uJztcclxuXHJcbmV4cG9ydCBsZXQgQ29uc29sZVNlY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBzZWN0aW9uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gc2VjdGlvbi50aXRsZTtcclxuICAgIHRoaXMub3JkZXIgPSBzZWN0aW9uLm9yZGVyO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gobmV3IENvbnNvbGVTZWN0aW9uT3B0aW9uKHNpdGUsIG9wdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLmF0TGVhc3QodGhpcy5taW5pbXVtUm9sZSh1c2VyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIG1pbmltdW0gcm9sZSBmb3IgYWxsIG9wdGlvbnNcclxuICAgICAqIGluIHRoaXMgc2VjdGlvbiBzbyB3ZSBrbm93IGlmIHdlIGNhbiBzaG93IHRoZSBzZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHVzZXIgQSB1c2VyLCBzbyB3ZSBjYW4ga25vdyB3aGF0IHRoZSBwb3NzaWJsZSByb2xlcyBhcmVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJvbGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5taW5pbXVtUm9sZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm9sZUxlYXN0ID0gbnVsbDtcclxuICAgICAgICBsZXQgcHJpb3JpdHlMZWFzdCA9IDEwMDAwMDA7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHQgICAgICAgIGxldCByb2xlID0gb3B0aW9uLmF0TGVhc3Q7XHJcblx0ICAgICAgICBpZihyb2xlID09PSBPYmplY3Qocm9sZSkpIHtcclxuXHRcdCAgICAgICAgcm9sZSA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChyb2xlLnRhZywgcm9sZS5kZWZhdWx0KTtcclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHJvbGUpO1xyXG4gICAgICAgICAgICBpZihwcmlvcml0eSAhPT0gMCAmJiBwcmlvcml0eSA8IHByaW9yaXR5TGVhc3QpIHtcclxuICAgICAgICAgICAgICAgIHJvbGVMZWFzdCA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxlYXN0ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7IC8vLzwgQWx3YXlzIEFETUlOXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9sZUxlYXN0O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIE9wdGlvbnMgaW4gYSBjb25zb2xlIHBhZ2Ugc2VjdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlU2VjdGlvbk9wdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbikge1xyXG5cdGZvcihsZXQgbWVtYmVyIGluIG9wdGlvbikge1xyXG5cdFx0dGhpc1ttZW1iZXJdID0gb3B0aW9uW21lbWJlcl07XHJcblx0fVxyXG5cdC8vIHRoaXMub3B0aW9uID0gb3B0aW9uO1xyXG5cclxuXHR0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuXHRcdGxldCBhdExlYXN0ID0gdGhpcy5hdExlYXN0O1xyXG5cdFx0aWYoYXRMZWFzdCA9PT0gT2JqZWN0KGF0TGVhc3QpKSB7XHJcblx0XHRcdGF0TGVhc3QgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3QoYXRMZWFzdC50YWcsIGF0TGVhc3QuZGVmYXVsdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChhdExlYXN0ID09PSB1bmRlZmluZWQgfHwgdXNlci5hdExlYXN0KGF0TGVhc3QpKTtcclxuXHR9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEtlZXBzIHRyYWNrIG9mIHdoYXQgdGFibGUgY3JlYXRlL2Ryb3Agb3B0aW9ucyBhcmUgYXZhaWxhYmxlIG9uIHRoZSBzaXRlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgQ29uc29sZVRhYmxlcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRoaXMudGFibGVzID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih0YWJsZSkge1xyXG4gICAgICAgIHRoaXMudGFibGVzLnB1c2godGFibGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc1YTZlZWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E1OTdhYjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E1OTdhYjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTU5N2FiNjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTU5N2FiNjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc0NmFjMWQ3XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc0NmFjMWQ3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc0NmFjMWQ3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc0NmFjMWQ3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCIiLCIvKipcclxuICogTWFrZSB0aGUgbmF2IGJhciAnc3RpY2t5Jy4gSXQgc3RpY2tzIHRvIHRoZSB0b3BcclxuICogb2YgdGhlIHBhZ2UgaW5zdGVhZCBvZiBzY3JvbGxpbmcgb2ZmLlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIHRvIGZpbmQgdGhlIG5hdiBiYXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBTdGlja3lOYXYgPSBmdW5jdGlvbihzZWwpIHtcclxuICAgIGxldCBuYXZzID0gW107XHJcbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaW5zdGFsbGVkID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxlbHMubGVuZ3RoOyAgaSsrKSB7XHJcbiAgICAgICAgbmF2cy5wdXNoKHtcclxuICAgICAgICAgICAgbmF2OiAgZWxzW2ldLFxyXG4gICAgICAgICAgICBzdGlja3k6IGVsc1tpXS5vZmZzZXRUb3BcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bmF2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmF2ID0gbmF2c1tpXTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBuYXYuc3RpY2t5KSB7XHJcbiAgICAgICAgICAgICAgICBpZighaW5zdGFsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Lm5hdi5jbGFzc0xpc3QuYWRkKFwiY2wtc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5uYXYucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gbmF2Lm5hdi5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5zdGFsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Lm5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2wtc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==