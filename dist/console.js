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
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    },
    dropCreate: function dropCreate(table) {
      var _this2 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox("Are you sure?", 'Are you sure you want to drop and recreate the ' + table.title + ' tables?', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
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
      }).catch(function (error) {
        _this3.$site.toast(_this3, error);
      });
    }
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
exports.push([module.i, "table td[data-v-746ac1d7] {\n  padding: 0.25em;\n}\ntable button[data-v-746ac1d7] {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\nli span[data-v-746ac1d7] {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}\n\n", ""]);

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
                        _vm.create(table, false)
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
                        _vm.dropCreate(table)
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
                        _vm.clean(table)
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

var Console = _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__["ConsoleFactory"].create(Site.site);
 // We set it in the global Site object
//Site.Console = Console;
//const components = Console.components;
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
 * Factory to create the Console object
 * @constructor
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MDFkNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzY2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2ZhZDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT81ZWIxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MTBiYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb25PcHRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVRhYmxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/ZTc2YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzZkMzQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iOTFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iNzE4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT82ZDdkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NWQxNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzhlN2EiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVXRpbC9TdGlja3lOYXYuanMiXSwibmFtZXMiOlsiQ29uc29sZSIsIkNvbnNvbGVGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJ0aXRsZSIsImNvbXBvbmVudHMiLCJDb25zb2xlQ29tcG9uZW50cyIsInRhYmxlcyIsIkNvbnNvbGVUYWJsZXMiLCJzdGFydCIsImVsZW1lbnQiLCJzb3J0IiwidXNlciIsInN0b3JlIiwic3RhdGUiLCJ0ZW1wbGF0ZSIsIm1haW4iLCJmb3JFYWNoIiwiY29tcG9uZW50IiwidGFnIiwicm91dGVzIiwiZ2V0Um91dGVzIiwicm91dGUiLCJyb2JqIiwicGF0aCIsInJvb3QiLCJwcm9wcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJwdXNoIiwicGFnZXMiLCJwYWdlIiwiYXRMZWFzdCIsIm1pbmltdW1Sb2xlIiwiQ29uc29sZUNvbXBvbmVudCIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIlN0aWNreU5hdiIsImNudCIsIm1lbnUiLCJPYmplY3QiLCJwZXJtaXNzaW9ucyIsImRlZmF1bHQiLCJsZW5ndGgiLCIkcGFyZW50IiwiYWRkU3RhcnQiLCJzY3JpcHQiLCJzdGFydHVwIiwiYWRkTWFpbkNvbXBvbmVudCIsIm9yZGVyIiwibmF2MiIsImFkZE5hdjIiLCJhIiwiYiIsInJlbW92ZU5hdjIiLCJ2dWUiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiaSIsInNwbGljZSIsIiRzZXQiLCJhZGROYXYyTGluayIsImNsaWNrIiwibmF2MnJpZ2h0IiwibmF2MmxlZnQiLCJhZGRPcHRpb24iLCJmaW5kUGFnZSIsImFkZCIsIkNvbnNvbGVQYWdlIiwiZ2V0UGFnZXMiLCJhZGRSb3V0ZSIsImFkZFJvdXRlcyIsImFkZHJvdXRlcyIsInNpdGVDb25zb2xlIiwiVXNlcnMiLCJVc2VyIiwiU1RBRkYiLCJBRE1JTiIsIlRhYmxlc0NvbXBvbmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaW5kU2VjdGlvbiIsIkNvbnNvbGVTZWN0aW9uIiwicm9sZUxlYXN0IiwicHJpb3JpdHlMZWFzdCIsImdldFJvbGVQcmlvcml0eSIsInNlY3Rpb25MZWFzdCIsInByaW9yaXR5IiwiQ29uc29sZVNlY3Rpb25PcHRpb24iLCJyb2xlIiwibWVtYmVyIiwidGFibGUiLCJzZWwiLCJuYXZzIiwic3BhY2VyIiwiY3JlYXRlRWxlbWVudCIsImluc3RhbGxlZCIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXYiLCJzdGlja3kiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsZ0JBUEE7QUFVQSxTQVZBLHFCQVVBLENBRUEsQ0FaQTtBQWFBO0FBQ0EsWUFEQSxvQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBLFNBREEscUJBQ0E7QUFD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UUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDQyxLQUFELEVBQVc7QUFDekMsU0FBSSxJQUFJN0MsRUFBQyxHQUFDLENBQVYsRUFBYUEsRUFBQyxHQUFDa0MsSUFBSSxDQUFDbEQsTUFBcEIsRUFBNEJnQixFQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFVBQUl3QyxHQUFHLEdBQUdOLElBQUksQ0FBQ2xDLEVBQUQsQ0FBZDs7QUFDQSxVQUFJMkMsTUFBTSxDQUFDRyxXQUFQLElBQXNCTixHQUFHLENBQUNDLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUcsQ0FBQ0osU0FBSixFQUFlO0FBQ1hHLGFBQUcsQ0FBQ0EsR0FBSixDQUFRTyxTQUFSLENBQWtCdEMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQStCLGFBQUcsQ0FBQ0EsR0FBSixDQUFRUSxVQUFSLENBQW1CQyxXQUFuQixDQUErQmQsTUFBL0I7QUFDQUUsbUJBQVMsR0FBRyxJQUFaO0FBQ0g7O0FBQ0RGLGNBQU0sQ0FBQ2UsS0FBUCxDQUFhQyxNQUFiLEdBQXNCWCxHQUFHLENBQUNBLEdBQUosQ0FBUVksWUFBUixHQUF1QixJQUE3QztBQUNILE9BUEQsTUFPTztBQUNILFlBQUdmLFNBQUgsRUFBYztBQUNWRyxhQUFHLENBQUNBLEdBQUosQ0FBUU8sU0FBUixDQUFrQk0sTUFBbEIsQ0FBeUIsV0FBekI7QUFDQWxCLGdCQUFNLENBQUNhLFVBQVAsQ0FBa0JNLFdBQWxCLENBQThCbkIsTUFBOUI7QUFDQUUsbUJBQVMsR0FBRyxLQUFaO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FsQkQ7QUFvQkgsQ0FsQ00sQyIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ29uc29sZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwicGFnZSBpbiBjb25zb2xlLmNvbXBvbmVudHMucGFnZXNcIiB2LWlmPVwicGFnZS5hdmFpbGFibGUodXNlcilcIj5cclxuICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJwYWdlTGluayhwYWdlKVwiPnt7cGFnZS50aXRsZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiIDppcz1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNvbnNvbGUuY29tcG9uZW50cy5uYXYyXCI+PGNvbXBvbmVudCA6aXM9XCJjLmNvbXBvbmVudFwiIDpzaG9ydD1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDJcIj48L2NvbXBvbmVudD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2NvbnNvbGUnLCAndXNlciddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6IFNpdGUucm9vdCArICcvJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgcGFnZUxpbmsocGFnZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHtTaXRlLnJvb3R9L2NsL2NvbnNvbGUke3BhZ2Uucm91dGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICA8cD5QYWdlIGRvZXMgbm90IGV4aXN0Li4uPC9wPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJ1BhZ2UgZG9lcyBub3QgZXhpc3QuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICA8aDI+RGF0YWJhc2UgVGFibGVzIE1hbmFnZW1lbnQ8L2gyPlxyXG4gICAgPHAgY2xhc3M9XCJjZW50ZXIgcmVkXCI+PGVtPlVzZSB3aXRoIGNhdXRpb24hPC9lbT48L3A+XHJcbiAgPHA+VGhlIHBhZ2UgcHJvdmlkZXMgYW4gQWRtaW5pc3RyYXRvciB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW5kIGRlc3Ryb3kgZGF0YWJhc2UgdGFibGVzLlxyXG4gICAgT25seSB1c2UgZHVyaW5nIGNvdXJzZSBzdGFydHVwISBUaGUgY3JlYXRlIG9wdGlvbiB3aWxsIG5vdCBkcm9wIGFuIGV4aXN0aW5nIHRhYmxlXHJcbiAgICB1bmxlc3MgdGhlIGRyb3AgYW5kIGNyZWF0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuIFRoZSBjbGVhbiBvcHRpb24gYWxsb3dzIGZvciBjbGVhbmluZ1xyXG4gICAgb2Ygb3JwaGFuZWQgcmVjb3JkcyBmcm9tIHRhYmxlcy48L3A+XHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5UYWJsZXM8L3RoPlxyXG4gICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+T3BlcmF0aW9uczwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHIgdi1mb3I9XCJ0YWJsZSBpbiB0YWJsZXNcIj5cclxuICAgICAgICAgIDx0ZD57e3RhYmxlLnRpdGxlfX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjcmVhdGUodGFibGUsIGZhbHNlKVwiPmNyZWF0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImRyb3BDcmVhdGUodGFibGUpXCI+ZHJvcC1hbmQtY3JlYXRlPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY2xlYW4odGFibGUpXCI+Y2xlYW48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8cHJlIHYtaWY9XCJyZXN1bHRzLmxlbmd0aCA+IDBcIiBjbGFzcz1cImNvZGVcIj57e3Jlc3VsdHN9fTwvcHJlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFibGVzOiB0aGlzLiRzaXRlLmNvbnNvbGUudGFibGVzLnRhYmxlcyxcclxuICAgICAgICAgICAgcmVzdWx0czogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogRGF0YWJhc2UgVGFibGVzJyk7XHJcblx0ICAgICAgdGhpcy4kc2l0ZS5jb25zb2xlLnRhYmxlcy50YWJsZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHQgICAgY3JlYXRlOiBmdW5jdGlvbih0YWJsZSwgZHJvcCkge1xyXG5cdFx0ICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QodGFibGUuYXBpLCB7ZHJvcDogZHJvcCA/ICd5ZXMnIDogJ25vJ30pXHJcblx0XHRcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdCAgICBpZihkcm9wKSB7XHJcblx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgZHJvcHBlZCBhbmQgcmVjcmVhdGVkJyk7XHJcblx0XHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgdGFibGUudGl0bGUgKyAnIHRhYmxlcyBjcmVhdGVkJyk7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdCAgICB9KTtcclxuXHQgICAgfSxcclxuXHQgICAgZHJvcENyZWF0ZTogZnVuY3Rpb24odGFibGUpIHtcclxuXHRcdCAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goXCJBcmUgeW91IHN1cmU/XCIsXHJcblx0XHRcdCAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRyb3AgYW5kIHJlY3JlYXRlIHRoZSAnICsgdGFibGUudGl0bGUgK1xyXG5cdFx0XHQgICAgJyB0YWJsZXM/JywgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuXHRcdFx0XHQgICAgdGhpcy5jcmVhdGUodGFibGUsIHRydWUpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGNsZWFuOiBmdW5jdGlvbih0YWJsZSkge1xyXG5cdFx0ICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QodGFibGUuYXBpLCB7Y2xlYW46ICd5ZXMnfSlcclxuXHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdCAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdCAgICBcdGxldCByZXN1bHQgPSByZXNwb25zZS5nZXREYXRhKCd0YWJsZS1jbGVhbicpLmF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0XHRcdCAgICBcdHRoaXMucmVzdWx0cyArPSB0YWJsZS50aXRsZSArIFwiIFRhYmxlc1xcblxcblwiICsgcmVzdWx0ICsgXCJcXG5cIjtcclxuXHRcdFx0XHQgICAgXHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdFx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdCAgICB9KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuMjVlbTtcclxuICB9XHJcblxyXG4gIHRhYmxlIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIGxpIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDZlbTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJsZSB0ZFtkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxudGFibGUgYnV0dG9uW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmxpIHNwYW5bZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNmVtO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibmF2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtbmF2XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlcnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaG9tZUxpbmsgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbWVcIiB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5jb25zb2xlLmNvbXBvbmVudHMucGFnZXMsIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWdlLmF2YWlsYWJsZShfdm0udXNlcilcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBfdm0ucGFnZUxpbmsocGFnZSkgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwYWdlLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2MlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFxuICAgICAgICAgICAgICAgICAgPyBfYyhfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJsZWZ0LCB7IHRhZzogXCJjb21wb25lbnRcIiB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhjLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaG9ydDogX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XG4gICAgICAgICAgICAgICAgICA/IF9jKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0LCB7IHRhZzogXCJjb21wb25lbnRcIiB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJQYWdlIGRvZXMgbm90IGV4aXN0Li4uXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkRhdGFiYXNlIFRhYmxlcyBNYW5hZ2VtZW50XCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlRoZSBwYWdlIHByb3ZpZGVzIGFuIEFkbWluaXN0cmF0b3IgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBkZXN0cm95IGRhdGFiYXNlIHRhYmxlcy5cXG4gIE9ubHkgdXNlIGR1cmluZyBjb3Vyc2Ugc3RhcnR1cCEgVGhlIGNyZWF0ZSBvcHRpb24gd2lsbCBub3QgZHJvcCBhbiBleGlzdGluZyB0YWJsZVxcbiAgdW5sZXNzIHRoZSBkcm9wIGFuZCBjcmVhdGUgb3B0aW9uIGlzIHNlbGVjdGVkLiBUaGUgY2xlYW4gb3B0aW9uIGFsbG93cyBmb3IgY2xlYW5pbmdcXG4gIG9mIG9ycGhhbmVkIHJlY29yZHMgZnJvbSB0YWJsZXMuXCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlcywgZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS50aXRsZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNyZWF0ZSh0YWJsZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImNyZWF0ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kcm9wQ3JlYXRlKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJkcm9wLWFuZC1jcmVhdGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xlYW4odGFibGUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImNsZWFuXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnJlc3VsdHMubGVuZ3RoID4gMFxuICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmVzdWx0cykpXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlciByZWRcIiB9LCBbXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCJVc2Ugd2l0aCBjYXV0aW9uIVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUYWJsZXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbX3ZtLl92KFwiT3BlcmF0aW9uc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzllMmU5ODJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQge0NvbnNvbGVGYWN0b3J5fSBmcm9tICcuL2pzL0NvbnNvbGVGYWN0b3J5JztcclxuXHJcbmNvbnN0IENvbnNvbGUgPSBDb25zb2xlRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuZXhwb3J0IHtDb25zb2xlfTtcclxuXHJcbi8vIFdlIHNldCBpdCBpbiB0aGUgZ2xvYmFsIFNpdGUgb2JqZWN0XHJcbi8vU2l0ZS5Db25zb2xlID0gQ29uc29sZTtcclxuXHJcbi8vY29uc3QgY29tcG9uZW50cyA9IENvbnNvbGUuY29tcG9uZW50cztcclxuLy9leHBvcnQge2NvbXBvbmVudHN9O1xyXG5cclxuLy9jb25zdCB0YWJsZXMgPSBDb25zb2xlLnRhYmxlcztcclxuLy8gZXhwb3J0IHt0YWJsZXN9O1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogT2JqZWN0IHRoYXQgaXMgdGhlIG1haW4gY29uc29sZSBwYWdlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29uc29sZUNvbXBvbmVudHN9IGZyb20gJy4vQ29uc29sZUNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NvbnNvbGVUYWJsZXN9IGZyb20gJy4vQ29uc29sZVRhYmxlcydcclxuaW1wb3J0IHtDb25zb2xlQ29tcG9uZW50fSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnQnO1xyXG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gJy4vTmF2Q29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBOb3RGb3VuZENvbXBvbmVudCBmcm9tICcuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCB7U3RpY2t5TmF2fSBmcm9tICdzaXRlLWNsL2pzL1V0aWwvU3RpY2t5TmF2JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIC8vIFRoaXMgcHJvcGVydHkgbWFrZXMgaXQgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBjb25zb2xlIHRpdGxlc1xyXG4gICAgdGhpcy50aXRsZSA9ICdTaXRlIENvbnNvbGUnO1xyXG5cclxuICAgIC8vIFRoZSBjb25zb2xlIGNvbXBvbmVudHMgYXJlIHRoZSBpbnN0YWxsZWQgY29tcG9uZW50c1xyXG4gICAgLy8gbGlrZSB0aGUgdXNlcnMgZWRpdG9yIG9yIHRhYmxlIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbnNvbGVDb21wb25lbnRzKHNpdGUpO1xyXG5cclxuICAgIC8vIFRoZSBjb25zb2xlIHRhYmxlcyBjb21wb25lbnQga2VlcHMgdHJhY2sgb2YgdGhlXHJcbiAgICAvLyBkYXRhYmFzZSB0YWJsZXMgd2UgbWF5IG5lZWQgdG8gY3JlYXRlXHJcbiAgICB0aGlzLnRhYmxlcyA9IG5ldyBDb25zb2xlVGFibGVzKCk7XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc29ydCgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zdGFydCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBpbnN0YWxsZWQgdXNlclxyXG4gICAgICAgIGxldCB1c2VyID0gc2l0ZS5zdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSB0ZW1wbGF0ZSwgc2V0dGluZyB1cCB0aGUgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJjbC1jb25zb2xlXCI+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+XHJcbjxjb25zb2xlLW5hdiA6Y29uc29sZT1cImNvbnNvbGVcIiA6dXNlcj1cInVzZXJcIj48L2NvbnNvbGUtbmF2PlxyXG48L3NpdGUtaGVhZGVyPmA7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5tYWluLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPCR7Y29tcG9uZW50LnRhZ30gLz5gO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRlbXBsYXRlICs9IGBcclxuPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbjxzaXRlLWZvb3Rlcj48L3NpdGUtZm9vdGVyPjwvZGl2PmA7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSByb3V0ZXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCByb3V0ZSBvZiB0aGlzLmNvbXBvbmVudHMuZ2V0Um91dGVzKCkpIHtcclxuICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyLmF0TGVhc3QocGFnZS5taW5pbXVtUm9sZSh1c2VyKSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBwYWdlLmNvbXBvbmVudCAhPT0gdW5kZWZpbmVkID8gcGFnZS5jb21wb25lbnQgOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb25zb2xlQ29tcG9uZW50KHRoaXMsIHNpdGUsIHVzZXIsIHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyBwYWdlLnJvdXRlLCBjb21wb25lbnQ6IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb24uYXZhaWxhYmxlKHVzZXIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLnJvdXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyByb3V0ZS5yb3V0ZSwgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5uYW1lID0gcm91dGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChyb2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByb3V0ZXMucHVzaCh7IHBhdGg6ICcqJywgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgICAgICBjb25zdCBGb290ZXIgPSBzaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBuZXcgc2l0ZS5WdWVSb3V0ZXIoe1xyXG4gICAgICAgICAgICByb3V0ZXM6IHJvdXRlcyxcclxuICAgICAgICAgICAgbW9kZTogJ2hpc3RvcnknXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgJ3NpdGUtaGVhZGVyJzogSGVhZGVyLFxyXG4gICAgICAgICAgICAnc2l0ZS1mb290ZXInOiBGb290ZXIsXHJcbiAgICAgICAgICAgICdjb25zb2xlLW5hdic6IE5hdkNvbXBvbmVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0b3JlID0gc2l0ZS5zdG9yZTtcclxuICAgICAgICBsZXQgc2l0ZVRpdGxlID0gdGhpcy50aXRsZTtcclxuICAgICAgICBsZXQgQ29uc29sZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMubWFzdGVyVnVlID0gbmV3IFNpdGUuVnVlKHtcclxuICAgICAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHN0b3JlLCAgICAgIC8vIEluamVjdCB0aGUgc3RvcmVcclxuICAgICAgICAgICAgc2l0ZSwgICAgICAgLy8gSW5qZWN0IHNpdGUsIHNvICRzaXRlIGlzIGF2YWlsYWJsZSBmb3IgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgcm91dGVyLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNpdGVUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlOiBDb25zb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGlzQWRtaW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZG1pbjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHNpdGVUaXRsZSArIHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgICAgICAgbmV3IFN0aWNreU5hdignZGl2LmNsLWNvbnNvbGUgbmF2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29tcG9uZW50cyB0aGF0IHJlcHJlc2VudCBhIGNvbnNvbGUgcGFnZS5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVDb21wb25lbnQgPSBmdW5jdGlvbihjb25zb2xlLCBzaXRlLCB1c2VyLCBwYWdlKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gYDxkaXYgaWQ9XCJjbC1jb25zb2xlLW1haW5cIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPmA7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudHMgPSB7fTtcclxuICAgIGxldCBjbnQgPSAxO1xyXG5cclxuICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmKCFzZWN0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8aDI+JHtzZWN0aW9uLnRpdGxlfTwvaDI+YDtcclxuXHJcbiAgICAgICBsZXQgbWVudSA9ICcnO1xyXG5cclxuICAgICAgIC8vIEFkZCB0aGUgbWVudSBvcHRpb25zXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgaWYob3B0aW9uLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgbGV0IGF0TGVhc3QgPSBvcHRpb24uYXRMZWFzdDtcclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gT2JqZWN0KGF0TGVhc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZihhdExlYXN0ID09PSB1bmRlZmluZWQgfHwgdXNlci5hdExlYXN0KGF0TGVhc3QpKSB7XHJcblx0ICAgICAgICAgICAgICAgbWVudSArPSBgPGxpPjxyb3V0ZXItbGluayB0bz1cIiR7c2l0ZS5yb290fS9jbC9jb25zb2xlJHtvcHRpb24ucm91dGV9XCI+JHtvcHRpb24udGl0bGV9PC9yb3V0ZXItbGluaz48L2xpPmA7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgICBpZihtZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9ICc8dWw+JyArIG1lbnUgKyAnPC91bD4nO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW55IGN1c3RvbSBjb21wb25lbnRzXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbi5jb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgKz0gYDxjb25zb2xlLWNvbXBvbmVudC0ke2NudH0+PC9jb25zb2xlLWNvbXBvbmVudC0ke2NudH0+YDtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbJ2NvbnNvbGUtY29tcG9uZW50LScgKyBjbnRdID0gb3B0aW9uLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlICs9IGA8L2Rpdj48L2Rpdj5gO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcclxuXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihwYWdlLnRpdGxlID09PSAnTWFpbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHBhZ2UudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGZpbGUgTWFuYWdlbWVudCBvZiBhbGwgY29uc29sZSBjb21wb25lbnRzXHJcbiAqXHJcbiAqIENvbXBvbmVudHMgYXJlOlxyXG4gKiBzdGFydCBzY3JpcHRzIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWQgKGFkZFN0YXJ0KVxyXG4gKiBtYWluIENvbXBvbmVudHMgYWRkZWQgdG8gZXZlcnkgcGFnZSAoYWRkTWFpbkNvbXBvbmVudClcclxuICogb3B0aW9ucyBBZGRzIHRvcC1sZXZlbCBtZW51IG9wdGlvbnMgYW5kIG9wdGlvbnMgb24gcGFnZXMgKGFkZE9wdGlvbilcclxuICogcm91dGVzIEFkZHMgcm91dGVzIHRvIHRoZSBjb25zb2xlIGRpcmVjdG9yeSAoYWRkUm91dGUsIGFkZFJvdXRlcylcclxuICovXHJcblxyXG5pbXBvcnQge0NvbnNvbGVQYWdlfSBmcm9tICcuL0NvbnNvbGVQYWdlLmpzJztcclxuXHJcbmV4cG9ydCBsZXQgQ29uc29sZUNvbXBvbmVudHMgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFN0YXJ0IHNjcmlwdHMgYXJlIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWRcclxuICAgIC8vXHJcbiAgICBsZXQgc3RhcnQgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZFN0YXJ0ID0gZnVuY3Rpb24oc2NyaXB0KSB7XHJcbiAgICAgICAgc3RhcnQucHVzaChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbihjb25zb2xlKSB7XHJcbiAgICAgICAgc3RhcnQuZm9yRWFjaCgoc3RhcnR1cCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydHVwKGNvbnNvbGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEFueSBjb21wb25lbnRzIHRvIGFkZCB0byB0aGUgbWFpbiBwYWdlIChldmVyeSBwYWdlKVxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBjb3Vyc2Ugc3Vic3lzdGVtIHVzZXMgdGhpcyB0byBhZGQgYSBiYXIgdGhlIHNlbGVjdHNcclxuICAgIC8vIHRoZSBjb3Vyc2Ugc2VjdGlvbiByaWdodCBiZWxvdyB0aGUgbWVudSBiYXIuXHJcbiAgICAvL1xyXG4gICAgdGhpcy5tYWluID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRNYWluQ29tcG9uZW50ID0gZnVuY3Rpb24odGFnLCBjb21wb25lbnQsIG9yZGVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5tYWluLnB1c2goe1xyXG4gICAgICAgIC8vICAgICB0YWc6IHRhZyxcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgLy8gICAgIG9yZGVyOiBvcmRlclxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2MiA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkTmF2MiA9IGZ1bmN0aW9uKGNvbXBvbmVudCwgb3JkZXIpIHtcclxuICAgICAgICB0aGlzLm5hdjIucHVzaCh7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgICAgICBvcmRlcjogb3JkZXJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5hdjIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVOYXYyID0gZnVuY3Rpb24odnVlLCBjb21wb25lbnQpIHtcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBjIG9mIGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVOYXYyKHZ1ZSwgYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubmF2Mi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLm5hdjJbaV0uY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2Mi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB2dWUuJHNldCh0aGlzLCAnbmF2MicsIHRoaXMubmF2Mik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGROYXYyTGluayA9IGZ1bmN0aW9uKHZ1ZSwgbmFtZSwgb3JkZXIsIGNsaWNrKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8YSBAY2xpY2sucHJldmVudD1cImNsaWNrXCI+JHtuYW1lfTwvYT5gLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZE5hdjIoY29tcG9uZW50LCBvcmRlcik7XHJcblxyXG4gICAgICAgIHRoaXMubmF2Mi5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdnVlLiRzZXQodGhpcywgJ25hdjInLCB0aGlzLm5hdjIpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYXYycmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5uYXYybGVmdCA9IG51bGw7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvbnNvbGUgb3B0aW9ucyBhcmUgbWVudSBvcHRpb25zIGluIHRoZSBzaXRlIGNvbnNvbGUuXHJcbiAgICAvLyBUaGlzIGlzIGhvdyB0aGUgdG9wLWxldmVsIG1lbnVzLCBzZWN0aW9ucywgYW5kIGxpbmtzXHJcbiAgICAvLyBhcmUgZGVmaW5lZC5cclxuICAgIC8vXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZXMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnQgdGhlIGNvbXBvbmVudHMgaW50byBhIHN0cnVjdHVyZVxyXG4gICAgICogZm9yIGNyZWF0aW5nIHRoZSBtYW5hZ2VtZW50IHBhZ2VzLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFnZSA9IGZpbmRQYWdlKG9wdGlvbi5wYWdlLnRpdGxlKTtcclxuICAgICAgICAgICAgaWYocGFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGFnZS5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWdlID0gbmV3IENvbnNvbGVQYWdlKHNpdGUsIG9wdGlvbi5wYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZXMucHVzaChwYWdlKTtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWRkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCB0aGUgcGFnZXMsIHNlY3Rpb25zLCBhbmQgb3B0aW9ucyBpbiBvcmRlclxyXG4gICAgICAgIHRoaXMucGFnZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhZ2Uuc29ydCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFNvcnQgYW55IG1haW4gY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMubWFpbi5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0UGFnZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlcztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcm91dGVzID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRSb3V0ZSA9IGZ1bmN0aW9uKHJvdXRlKSB7XHJcbiAgICAgICAgcm91dGVzLnB1c2gocm91dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkUm91dGVzID0gZnVuY3Rpb24oYWRkcm91dGVzKSB7XHJcbiAgICAgICAgZm9yKGxldCByb3V0ZSBvZiBhZGRyb3V0ZXMpIHtcclxuICAgICAgICAgICAgcm91dGVzLnB1c2gocm91dGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0Um91dGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgbGlzdCBvZiBpdGVtcyBvZiB0aGUgZm9ybSB7dGl0bGU6ICd0aXRsZScsIG9yZGVyOiAnb3JkZXInfSxcclxuICAgICAqIGZpbmQgYW4gaXRlbSB3aXRoIGEgZ2l2ZW4gdGl0bGUuXHJcbiAgICAgKiBAcGFyYW0gbGlzdFxyXG4gICAgICogQHBhcmFtIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIGxldCBmaW5kUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZXNbaV0udGl0bGUgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuL0NvbnNvbGUnO1xyXG5pbXBvcnQgVGFibGVzQ29tcG9uZW50IGZyb20gJy4vVGFibGVzQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvbnNvbGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbkNvbnNvbGVGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBzaXRlQ29uc29sZSA9IG5ldyBDb25zb2xlKHNpdGUpO1xyXG5cclxuICAgIC8vIFNhdmUgYXMgYSBzaXRlIHByb3BlcnR5XHJcbiAgICBzaXRlLmNvbnNvbGUgPSBzaXRlQ29uc29sZTtcclxuXHJcbiAgICAvLyBBZGQgc3RhbmRhcmQgb3B0aW9uc1xyXG4gICAgc2l0ZUNvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IFVzZXJzLlVzZXIuU1RBRkYsXHJcbiAgICAgICAgcGFnZToge3RpdGxlOiAnTWFpbicsIHJvdXRlOiAnJywgb3JkZXI6IDF9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l0ZUNvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IFVzZXJzLlVzZXIuQURNSU4sXHJcbiAgICAgICAgcGFnZToge3RpdGxlOiAnTWFuYWdlbWVudCcsIHJvdXRlOiAnL21hbmFnZW1lbnQnLCBvcmRlcjogMTB9LFxyXG4gICAgICAgIHNlY3Rpb246IHt0aXRsZTogJ1NpdGUgTWFuYWdlbWVudCcsIG9yZGVyOiAxfSxcclxuICAgICAgICB0aXRsZTogJ1RhYmxlcycsXHJcbiAgICAgICAgb3JkZXI6IDEwLFxyXG4gICAgICAgIHJvdXRlOiAnL21hbmFnZW1lbnQvdGFibGVzJyxcclxuICAgICAgICByb3V0ZXM6IFtcclxuICAgICAgICAgICAge3JvdXRlOiAnL21hbmFnZW1lbnQvdGFibGVzJywgbmFtZTogJ3RhYmxlcycsIGNvbXBvbmVudDogVGFibGVzQ29tcG9uZW50fVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGUuc3RhcnQoICgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1jb25zb2xlJyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzaXRlQ29uc29sZS5zdGFydChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2l0ZUNvbnNvbGU7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50cyBhIGNvbnNvbGUgcGFnZSBpbiB0aGUgQ29uc29sZUNvbXBvbmVudHMgY29sbGVjdGlvblxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29uc29sZVNlY3Rpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb24uanMnO1xyXG5cclxuZXhwb3J0IGxldCBDb25zb2xlUGFnZSA9IGZ1bmN0aW9uKHNpdGUsIHBhZ2UpIHtcclxuICAgIHRoaXMudGl0bGUgPSBwYWdlLnRpdGxlO1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBhZ2Uucm91dGU7XHJcbiAgICB0aGlzLm9yZGVyID0gcGFnZS5vcmRlcjtcclxuICAgIHRoaXMuY29tcG9uZW50ID0gcGFnZS5jb21wb25lbnQ7XHJcbiAgICB0aGlzLmF0TGVhc3QgPSBwYWdlLmF0TGVhc3QgIT09IHVuZGVmaW5lZCA/IHBhZ2UuYXRMZWFzdCA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgLy8gRG9lcyB0aGUgaXRlbSBoYXZlIGEgc2VjdGlvbj9cclxuICAgICAgICBpZihvcHRpb24uc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZmluZFNlY3Rpb24ob3B0aW9uLnNlY3Rpb24udGl0bGUpO1xyXG4gICAgICAgIGlmKHNlY3Rpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IG5ldyBDb25zb2xlU2VjdGlvbihzaXRlLCBvcHRpb24uc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5zb3J0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbmRTZWN0aW9uID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuc2VjdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJcyB0aGlzIHBhZ2UgYXZhaWxhYmxlIHRvIHRoaXMgdXNlcj9cclxuXHQgKiBAcGFyYW0gdXNlciBVc2VyIHRvIHRlc3RcclxuXHQgKi9cclxuXHR0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5hdExlYXN0KHRoaXMubWluaW11bVJvbGUodXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWluaW11bVJvbGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgbGV0IHJvbGVMZWFzdCA9IHRoaXMuYXRMZWFzdDtcclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IE9iamVjdChyb2xlTGVhc3QpKSB7XHJcbiAgICAgICAgICAgIHJvbGVMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChyb2xlTGVhc3QudGFnLCByb2xlTGVhc3QuZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJpb3JpdHlMZWFzdCA9IHRoaXMuYXRMZWFzdCAhPT0gbnVsbCA/IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHJvbGVMZWFzdCkgOiAxMDAwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbkxlYXN0ID0gc2VjdGlvbi5taW5pbXVtUm9sZSh1c2VyKTtcclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdXNlci5nZXRSb2xlUHJpb3JpdHkoc2VjdGlvbkxlYXN0KTtcclxuICAgICAgICAgICAgaWYocHJpb3JpdHkgIT09IDAgJiYgcHJpb3JpdHkgPCBwcmlvcml0eUxlYXN0KSB7XHJcbiAgICAgICAgICAgICAgICByb2xlTGVhc3QgPSBzZWN0aW9uTGVhc3Q7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxlYXN0ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7IC8vLzwgQWx3YXlzIEFETUlOXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9sZUxlYXN0O1xyXG5cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBDb25zb2xlIHNlY3Rpb246IFRoZXNlIGFyZSB0aGUgPGgyPiBwYWdlIHNlY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb25zb2xlU2VjdGlvbk9wdGlvbn0gZnJvbSAnLi9Db25zb2xlU2VjdGlvbk9wdGlvbic7XHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVTZWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgc2VjdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHNlY3Rpb24udGl0bGU7XHJcbiAgICB0aGlzLm9yZGVyID0gc2VjdGlvbi5vcmRlcjtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG5ldyBDb25zb2xlU2VjdGlvbk9wdGlvbihzaXRlLCBvcHRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5hdExlYXN0KHRoaXMubWluaW11bVJvbGUodXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBtaW5pbXVtIHJvbGUgZm9yIGFsbCBvcHRpb25zXHJcbiAgICAgKiBpbiB0aGlzIHNlY3Rpb24gc28gd2Uga25vdyBpZiB3ZSBjYW4gc2hvdyB0aGUgc2VjdGlvbi5cclxuICAgICAqIEBwYXJhbSB1c2VyIEEgdXNlciwgc28gd2UgY2FuIGtub3cgd2hhdCB0aGUgcG9zc2libGUgcm9sZXMgYXJlXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSb2xlXHJcbiAgICAgKi9cclxuICAgIHRoaXMubWluaW11bVJvbGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvbGVMZWFzdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5TGVhc3QgPSAxMDAwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcblx0ICAgICAgICBsZXQgcm9sZSA9IG9wdGlvbi5hdExlYXN0O1xyXG5cdCAgICAgICAgaWYocm9sZSA9PT0gT2JqZWN0KHJvbGUpKSB7XHJcblx0XHQgICAgICAgIHJvbGUgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3Qocm9sZS50YWcsIHJvbGUuZGVmYXVsdCk7XHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShyb2xlKTtcclxuICAgICAgICAgICAgaWYocHJpb3JpdHkgIT09IDAgJiYgcHJpb3JpdHkgPCBwcmlvcml0eUxlYXN0KSB7XHJcbiAgICAgICAgICAgICAgICByb2xlTGVhc3QgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZWFzdCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnOyAvLy88IEFsd2F5cyBBRE1JTlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGVMZWFzdDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBPcHRpb25zIGluIGEgY29uc29sZSBwYWdlIHNlY3Rpb25cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgQ29uc29sZVNlY3Rpb25PcHRpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb24pIHtcclxuXHRmb3IobGV0IG1lbWJlciBpbiBvcHRpb24pIHtcclxuXHRcdHRoaXNbbWVtYmVyXSA9IG9wdGlvblttZW1iZXJdO1xyXG5cdH1cclxuXHQvLyB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcclxuXHJcblx0dGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRsZXQgYXRMZWFzdCA9IHRoaXMuYXRMZWFzdDtcclxuXHRcdGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG5cdFx0XHRhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBLZWVwcyB0cmFjayBvZiB3aGF0IHRhYmxlIGNyZWF0ZS9kcm9wIG9wdGlvbnMgYXJlIGF2YWlsYWJsZSBvbiB0aGUgc2l0ZS5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVUYWJsZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0aGlzLnRhYmxlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24odGFibGUpIHtcclxuICAgICAgICB0aGlzLnRhYmxlcy5wdXNoKHRhYmxlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc1YTZlZWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNTk3YWI2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzQ2YWMxZDdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NDZhYzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NDZhYzFkNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NDZhYzFkNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIE1ha2UgdGhlIG5hdiBiYXIgJ3N0aWNreScuIEl0IHN0aWNrcyB0byB0aGUgdG9wXHJcbiAqIG9mIHRoZSBwYWdlIGluc3RlYWQgb2Ygc2Nyb2xsaW5nIG9mZi5cclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciB0byBmaW5kIHRoZSBuYXYgYmFyLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgU3RpY2t5TmF2ID0gZnVuY3Rpb24oc2VsKSB7XHJcbiAgICBsZXQgbmF2cyA9IFtdO1xyXG4gICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGluc3RhbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgIG5hdnMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hdjogIGVsc1tpXSxcclxuICAgICAgICAgICAgc3RpY2t5OiBlbHNbaV0ub2Zmc2V0VG9wXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG5hdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IG5hdnNbaV07XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gbmF2LnN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIWluc3RhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5uYXYuY2xhc3NMaXN0LmFkZChcImNsLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IG5hdi5uYXYuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGluc3RhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdi5uYXYuY2xhc3NMaXN0LnJlbW92ZShcImNsLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGFjZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=