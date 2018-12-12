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
exports.push([module.i, "\ntable td[data-v-746ac1d7] {\n  padding: 0.25em;\n}\ntable button[data-v-746ac1d7] {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\nli span[data-v-746ac1d7] {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}\n\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MDFkNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzY2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2ZhZDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT81ZWIxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/MTBiYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb25PcHRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVRhYmxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/ZTc2YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzZkMzQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iOTFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iNzE4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT82ZDdkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NWQxNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzhlN2EiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVXRpbC9TdGlja3lOYXYuanMiXSwibmFtZXMiOlsiQ29uc29sZSIsImNyZWF0ZSIsIlNpdGUiLCJzaXRlIiwidGl0bGUiLCJjb21wb25lbnRzIiwidGFibGVzIiwic3RhcnQiLCJlbGVtZW50Iiwic29ydCIsInVzZXIiLCJzdG9yZSIsInN0YXRlIiwidGVtcGxhdGUiLCJtYWluIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInRhZyIsInJvdXRlcyIsImdldFJvdXRlcyIsInJvdXRlIiwicm9iaiIsInBhdGgiLCJyb290IiwicHJvcHMiLCJ1bmRlZmluZWQiLCJuYW1lIiwicHVzaCIsInBhZ2VzIiwicGFnZSIsImF0TGVhc3QiLCJtaW5pbXVtUm9sZSIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIkNvbnNvbGVDb21wb25lbnQiLCJjbnQiLCJtZW51IiwiT2JqZWN0IiwicGVybWlzc2lvbnMiLCJkZWZhdWx0IiwibGVuZ3RoIiwiJHBhcmVudCIsIkNvbnNvbGVDb21wb25lbnRzIiwiYWRkU3RhcnQiLCJzY3JpcHQiLCJzdGFydHVwIiwiYWRkTWFpbkNvbXBvbmVudCIsIm9yZGVyIiwibmF2MiIsImFkZE5hdjIiLCJhIiwiYiIsInJlbW92ZU5hdjIiLCJ2dWUiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiaSIsInNwbGljZSIsIiRzZXQiLCJhZGROYXYyTGluayIsImNsaWNrIiwibmF2MnJpZ2h0IiwibmF2MmxlZnQiLCJhZGRPcHRpb24iLCJmaW5kUGFnZSIsImFkZCIsImdldFBhZ2VzIiwiYWRkUm91dGUiLCJhZGRSb3V0ZXMiLCJhZGRyb3V0ZXMiLCJDb25zb2xlRmFjdG9yeSIsInNpdGVDb25zb2xlIiwiVXNlcnMiLCJVc2VyIiwiU1RBRkYiLCJBRE1JTiIsIlRhYmxlc0NvbXBvbmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJDb25zb2xlUGFnZSIsImZpbmRTZWN0aW9uIiwicm9sZUxlYXN0IiwicHJpb3JpdHlMZWFzdCIsImdldFJvbGVQcmlvcml0eSIsInNlY3Rpb25MZWFzdCIsInByaW9yaXR5IiwiQ29uc29sZVNlY3Rpb24iLCJyb2xlIiwiQ29uc29sZVNlY3Rpb25PcHRpb24iLCJtZW1iZXIiLCJDb25zb2xlVGFibGVzIiwidGFibGUiLCJTdGlja3lOYXYiLCJzZWwiLCJuYXZzIiwic3BhY2VyIiwiY3JlYXRlRWxlbWVudCIsImluc3RhbGxlZCIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXYiLCJzdGlja3kiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsZ0JBUEE7QUFVQSxTQVZBLHFCQVVBLENBRUEsQ0FaQTtBQWFBO0FBQ0EsWUFEQSxvQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBLFNBREEscUJBQ0E7QUFD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eEIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3pDLFNBQUksSUFBSWhELEVBQUMsR0FBQyxDQUFWLEVBQWFBLEVBQUMsR0FBQ3FDLElBQUksQ0FBQ3RELE1BQXBCLEVBQTRCaUIsRUFBQyxFQUE3QixFQUFpQztBQUM3QixVQUFJMkMsR0FBRyxHQUFHTixJQUFJLENBQUNyQyxFQUFELENBQWQ7O0FBQ0EsVUFBSThDLE1BQU0sQ0FBQ0csV0FBUCxJQUFzQk4sR0FBRyxDQUFDQyxNQUE5QixFQUFzQztBQUNsQyxZQUFHLENBQUNKLFNBQUosRUFBZTtBQUNYRyxhQUFHLENBQUNBLEdBQUosQ0FBUU8sU0FBUixDQUFrQnpDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0FrQyxhQUFHLENBQUNBLEdBQUosQ0FBUVEsVUFBUixDQUFtQkMsV0FBbkIsQ0FBK0JkLE1BQS9CO0FBQ0FFLG1CQUFTLEdBQUcsSUFBWjtBQUNIOztBQUNERixjQUFNLENBQUNlLEtBQVAsQ0FBYUMsTUFBYixHQUFzQlgsR0FBRyxDQUFDQSxHQUFKLENBQVFZLFlBQVIsR0FBdUIsSUFBN0M7QUFDSCxPQVBELE1BT087QUFDSCxZQUFHZixTQUFILEVBQWM7QUFDVkcsYUFBRyxDQUFDQSxHQUFKLENBQVFPLFNBQVIsQ0FBa0JNLE1BQWxCLENBQXlCLFdBQXpCO0FBQ0FsQixnQkFBTSxDQUFDYSxVQUFQLENBQWtCTSxXQUFsQixDQUE4Qm5CLE1BQTlCO0FBQ0FFLG1CQUFTLEdBQUcsS0FBWjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEdBbEJEO0FBb0JILENBbENNLEMiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbnNvbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ29uc29sZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cInBhZ2UgaW4gY29uc29sZS5jb21wb25lbnRzLnBhZ2VzXCIgdi1pZj1cInBhZ2UuYXZhaWxhYmxlKHVzZXIpXCI+XHJcbiAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwicGFnZUxpbmsocGFnZSlcIj57e3BhZ2UudGl0bGV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2MlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiYyBpbiBjb25zb2xlLmNvbXBvbmVudHMubmF2MlwiPjxjb21wb25lbnQgOmlzPVwiYy5jb21wb25lbnRcIiA6c2hvcnQ9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyXCI+PC9jb21wb25lbnQ+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCIgOmlzPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydjb25zb2xlJywgJ3VzZXInXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhvbWVMaW5rOiBTaXRlLnJvb3QgKyAnLydcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG5cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHBhZ2VMaW5rKHBhZ2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYCR7U2l0ZS5yb290fS9jbC9jb25zb2xlJHtwYWdlLnJvdXRlfWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPHA+UGFnZSBkb2VzIG5vdCBleGlzdC4uLjwvcD5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCdQYWdlIGRvZXMgbm90IGV4aXN0Li4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPGgyPkRhdGFiYXNlIFRhYmxlcyBNYW5hZ2VtZW50PC9oMj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyIHJlZFwiPjxlbT5Vc2Ugd2l0aCBjYXV0aW9uITwvZW0+PC9wPlxyXG4gIDxwPlRoZSBwYWdlIHByb3ZpZGVzIGFuIEFkbWluaXN0cmF0b3IgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBkZXN0cm95IGRhdGFiYXNlIHRhYmxlcy5cclxuICAgIE9ubHkgdXNlIGR1cmluZyBjb3Vyc2Ugc3RhcnR1cCEgVGhlIGNyZWF0ZSBvcHRpb24gd2lsbCBub3QgZHJvcCBhbiBleGlzdGluZyB0YWJsZVxyXG4gICAgdW5sZXNzIHRoZSBkcm9wIGFuZCBjcmVhdGUgb3B0aW9uIGlzIHNlbGVjdGVkLiBUaGUgY2xlYW4gb3B0aW9uIGFsbG93cyBmb3IgY2xlYW5pbmdcclxuICAgIG9mIG9ycGhhbmVkIHJlY29yZHMgZnJvbSB0YWJsZXMuPC9wPlxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+VGFibGVzPC90aD5cclxuICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPk9wZXJhdGlvbnM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidGFibGUgaW4gdGFibGVzXCI+XHJcbiAgICAgICAgICA8dGQ+e3t0YWJsZS50aXRsZX19PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKHRhYmxlLCBmYWxzZSlcIj5jcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJkcm9wQ3JlYXRlKHRhYmxlKVwiPmRyb3AtYW5kLWNyZWF0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsZWFuKHRhYmxlKVwiPmNsZWFuPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSB2LWlmPVwicmVzdWx0cy5sZW5ndGggPiAwXCIgY2xhc3M9XCJjb2RlXCI+e3tyZXN1bHRzfX08L3ByZT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmxlczogdGhpcy4kc2l0ZS5jb25zb2xlLnRhYmxlcy50YWJsZXMsXHJcbiAgICAgICAgICAgIHJlc3VsdHM6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IERhdGFiYXNlIFRhYmxlcycpO1xyXG5cdCAgICAgIHRoaXMuJHNpdGUuY29uc29sZS50YWJsZXMudGFibGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGNyZWF0ZTogZnVuY3Rpb24odGFibGUsIGRyb3ApIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2Ryb3A6IGRyb3AgPyAneWVzJyA6ICdubyd9KVxyXG5cdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHQgICAgaWYoZHJvcCkge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCB0YWJsZS50aXRsZSArICcgdGFibGVzIGRyb3BwZWQgYW5kIHJlY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGRyb3BDcmVhdGU6IGZ1bmN0aW9uKHRhYmxlKSB7XHJcblx0XHQgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KFwiQXJlIHlvdSBzdXJlP1wiLFxyXG5cdFx0XHQgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkcm9wIGFuZCByZWNyZWF0ZSB0aGUgJyArIHRhYmxlLnRpdGxlICtcclxuXHRcdFx0ICAgICcgdGFibGVzPycsIERpYWxvZy5NZXNzYWdlQm94Lk9LQ0FOQ0VMLCAoKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuY3JlYXRlKHRhYmxlLCB0cnVlKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBjbGVhbjogZnVuY3Rpb24odGFibGUpIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2NsZWFuOiAneWVzJ30pXHJcblx0XHRcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgXHRsZXQgcmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgndGFibGUtY2xlYW4nKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdFx0XHQgICAgXHR0aGlzLnJlc3VsdHMgKz0gdGFibGUudGl0bGUgKyBcIiBUYWJsZXNcXG5cXG5cIiArIHJlc3VsdCArIFwiXFxuXCI7XHJcblx0XHRcdFx0ICAgIFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgfVxyXG5cclxuICB0YWJsZSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICBsaSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGFibGUgdGRbZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcbnRhYmxlIGJ1dHRvbltkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5saSBzcGFuW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDZlbTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uY29uc29sZS5jb21wb25lbnRzLnBhZ2VzLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZS5hdmFpbGFibGUoX3ZtLnVzZXIpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogX3ZtLnBhZ2VMaW5rKHBhZ2UpIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFnZS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdjJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYyLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoYy5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hvcnQ6IF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFxuICAgICAgICAgICAgICAgICAgPyBfYyhfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUGFnZSBkb2VzIG5vdCBleGlzdC4uLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJEYXRhYmFzZSBUYWJsZXMgTWFuYWdlbWVudFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcGFnZSBwcm92aWRlcyBhbiBBZG1pbmlzdHJhdG9yIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSBkYXRhYmFzZSB0YWJsZXMuXFxuICBPbmx5IHVzZSBkdXJpbmcgY291cnNlIHN0YXJ0dXAhIFRoZSBjcmVhdGUgb3B0aW9uIHdpbGwgbm90IGRyb3AgYW4gZXhpc3RpbmcgdGFibGVcXG4gIHVubGVzcyB0aGUgZHJvcCBhbmQgY3JlYXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gVGhlIGNsZWFuIG9wdGlvbiBhbGxvd3MgZm9yIGNsZWFuaW5nXFxuICBvZiBvcnBoYW5lZCByZWNvcmRzIGZyb20gdGFibGVzLlwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJsZXMsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGFibGUudGl0bGUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGUodGFibGUsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjcmVhdGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZHJvcENyZWF0ZSh0YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZHJvcC1hbmQtY3JlYXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFuKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGVhblwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5yZXN1bHRzLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdHMpKV0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgcmVkXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiVXNlIHdpdGggY2F1dGlvbiFcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGFibGVzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW192bS5fdihcIk9wZXJhdGlvbnNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5ZTJlOTgyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHtDb25zb2xlRmFjdG9yeX0gZnJvbSAnLi9qcy9Db25zb2xlRmFjdG9yeSc7XHJcblxyXG5jb25zdCBDb25zb2xlID0gQ29uc29sZUZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XHJcbmV4cG9ydCB7Q29uc29sZX07XHJcblxyXG4vLyBXZSBzZXQgaXQgaW4gdGhlIGdsb2JhbCBTaXRlIG9iamVjdFxyXG4vL1NpdGUuQ29uc29sZSA9IENvbnNvbGU7XHJcblxyXG4vL2NvbnN0IGNvbXBvbmVudHMgPSBDb25zb2xlLmNvbXBvbmVudHM7XHJcbi8vZXhwb3J0IHtjb21wb25lbnRzfTtcclxuXHJcbi8vY29uc3QgdGFibGVzID0gQ29uc29sZS50YWJsZXM7XHJcbi8vIGV4cG9ydCB7dGFibGVzfTtcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIE9iamVjdCB0aGF0IGlzIHRoZSBtYWluIGNvbnNvbGUgcGFnZS5cclxuICovXHJcblxyXG5pbXBvcnQge0NvbnNvbGVDb21wb25lbnRzfSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnRzJztcclxuaW1wb3J0IHtDb25zb2xlVGFibGVzfSBmcm9tICcuL0NvbnNvbGVUYWJsZXMnXHJcbmltcG9ydCB7Q29uc29sZUNvbXBvbmVudH0gZnJvbSAnLi9Db25zb2xlQ29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL05hdkNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9Ob3RGb3VuZENvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQge1N0aWNreU5hdn0gZnJvbSAnc2l0ZS1jbC9qcy9VdGlsL1N0aWNreU5hdic7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uc29sZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICAvLyBUaGlzIHByb3BlcnR5IG1ha2VzIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgY29uc29sZSB0aXRsZXNcclxuICAgIHRoaXMudGl0bGUgPSAnU2l0ZSBDb25zb2xlJztcclxuXHJcbiAgICAvLyBUaGUgY29uc29sZSBjb21wb25lbnRzIGFyZSB0aGUgaW5zdGFsbGVkIGNvbXBvbmVudHNcclxuICAgIC8vIGxpa2UgdGhlIHVzZXJzIGVkaXRvciBvciB0YWJsZSBjcmVhdGlvbi5cclxuICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBDb25zb2xlQ29tcG9uZW50cyhzaXRlKTtcclxuXHJcbiAgICAvLyBUaGUgY29uc29sZSB0YWJsZXMgY29tcG9uZW50IGtlZXBzIHRyYWNrIG9mIHRoZVxyXG4gICAgLy8gZGF0YWJhc2UgdGFibGVzIHdlIG1heSBuZWVkIHRvIGNyZWF0ZVxyXG4gICAgdGhpcy50YWJsZXMgPSBuZXcgQ29uc29sZVRhYmxlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNvcnQoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3RhcnQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgaW5zdGFsbGVkIHVzZXJcclxuICAgICAgICBsZXQgdXNlciA9IHNpdGUuc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENvbmZpZ3VyZSB0aGUgdGVtcGxhdGUsIHNldHRpbmcgdXAgdGhlIHRvcC1sZXZlbCBtZW51c1xyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiY2wtY29uc29sZVwiPjxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPlxyXG48Y29uc29sZS1uYXYgOmNvbnNvbGU9XCJjb25zb2xlXCIgOnVzZXI9XCJ1c2VyXCI+PC9jb25zb2xlLW5hdj5cclxuPC9zaXRlLWhlYWRlcj5gO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubWFpbi5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDwke2NvbXBvbmVudC50YWd9IC8+YDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0ZW1wbGF0ZSArPSBgXHJcbjxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG48c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj48L2Rpdj5gO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgcm91dGVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCByb3V0ZXMgPSBbXTtcclxuICAgICAgICBmb3IoY29uc3Qgcm91dGUgb2YgdGhpcy5jb21wb25lbnRzLmdldFJvdXRlcygpKSB7XHJcbiAgICAgICAgICAgIGxldCByb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlJyArIHJvdXRlLnJvdXRlLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocm91dGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByb2JqLm5hbWUgPSByb3V0ZS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlci5hdExlYXN0KHBhZ2UubWluaW11bVJvbGUodXNlcikpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gcGFnZS5jb21wb25lbnQgIT09IHVuZGVmaW5lZCA/IHBhZ2UuY29tcG9uZW50IDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29uc29sZUNvbXBvbmVudCh0aGlzLCBzaXRlLCB1c2VyLCBwYWdlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcGFnZS5yb3V0ZSwgY29tcG9uZW50OiBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbi5yb3V0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yb3V0ZXMuZm9yRWFjaCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcm91dGVzLnB1c2goeyBwYXRoOiAnKicsIGNvbXBvbmVudDogTm90Rm91bmRDb21wb25lbnQgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IEhlYWRlciA9IHNpdGUuaW5mby5oZWFkZXIuY29tcG9uZW50KCk7XHJcbiAgICAgICAgY29uc3QgRm9vdGVyID0gc2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gbmV3IHNpdGUuVnVlUm91dGVyKHtcclxuICAgICAgICAgICAgcm91dGVzOiByb3V0ZXMsXHJcbiAgICAgICAgICAgIG1vZGU6ICdoaXN0b3J5J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyLFxyXG4gICAgICAgICAgICAnY29uc29sZS1uYXYnOiBOYXZDb21wb25lbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XHJcbiAgICAgICAgbGV0IHNpdGVUaXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgbGV0IENvbnNvbGUgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3RlclZ1ZSA9IG5ldyBTaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgICAgICBzdG9yZSwgICAgICAvLyBJbmplY3QgdGhlIHN0b3JlXHJcbiAgICAgICAgICAgIHNpdGUsICAgICAgIC8vIEluamVjdCBzaXRlLCBzbyAkc2l0ZSBpcyBhdmFpbGFibGUgZm9yIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzaXRlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZTogQ29uc29sZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBpc0FkbWluOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRtaW47XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkIFZ1ZSdzIHVzaW5nIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnJylcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSB0byBzZXRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gc2l0ZVRpdGxlICsgdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBTaXRlLmluZm8uc2l0ZU5hbWUgKyAnICcgKyBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGl0bGUoJycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgICAgICAgIG5ldyBTdGlja3lOYXYoJ2Rpdi5jbC1jb25zb2xlIG5hdicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIENvbXBvbmVudHMgdGhhdCByZXByZXNlbnQgYSBjb25zb2xlIHBhZ2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBDb25zb2xlQ29tcG9uZW50ID0gZnVuY3Rpb24oY29uc29sZSwgc2l0ZSwgdXNlciwgcGFnZSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGA8ZGl2IGlkPVwiY2wtY29uc29sZS1tYWluXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5gO1xyXG5cclxuICAgIGxldCBjb21wb25lbnRzID0ge307XHJcbiAgICBsZXQgY250ID0gMTtcclxuXHJcbiAgICBwYWdlLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZighc2VjdGlvbi5hdmFpbGFibGUodXNlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSBgPGgyPiR7c2VjdGlvbi50aXRsZX08L2gyPmA7XHJcblxyXG4gICAgICAgbGV0IG1lbnUgPSAnJztcclxuXHJcbiAgICAgICAvLyBBZGQgdGhlIG1lbnUgb3B0aW9uc1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgIGlmKG9wdGlvbi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBhdExlYXN0ID0gb3B0aW9uLmF0TGVhc3Q7XHJcbiAgICAgICAgICAgICAgIGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgYXRMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChhdExlYXN0LnRhZywgYXRMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSkge1xyXG5cdCAgICAgICAgICAgICAgIG1lbnUgKz0gYDxsaT48cm91dGVyLWxpbmsgdG89XCIke3NpdGUucm9vdH0vY2wvY29uc29sZSR7b3B0aW9uLnJvdXRlfVwiPiR7b3B0aW9uLnRpdGxlfTwvcm91dGVyLWxpbms+PC9saT5gO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgaWYobWVudS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSAnPHVsPicgKyBtZW51ICsgJzwvdWw+JztcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY29tcG9uZW50c1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihvcHRpb24uY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8Y29uc29sZS1jb21wb25lbnQtJHtjbnR9PjwvY29uc29sZS1jb21wb25lbnQtJHtjbnR9PmA7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzWydjb25zb2xlLWNvbXBvbmVudC0nICsgY250XSA9IG9wdGlvbi5jb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZSArPSBgPC9kaXY+PC9kaXY+YDtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcblxyXG4gICAgdGhpcy5tb3VudGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYocGFnZS50aXRsZSA9PT0gJ01haW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyBwYWdlLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlIE1hbmFnZW1lbnQgb2YgYWxsIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKlxyXG4gKiBDb21wb25lbnRzIGFyZTpcclxuICogc3RhcnQgc2NyaXB0cyBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkIChhZGRTdGFydClcclxuICogbWFpbiBDb21wb25lbnRzIGFkZGVkIHRvIGV2ZXJ5IHBhZ2UgKGFkZE1haW5Db21wb25lbnQpXHJcbiAqIG9wdGlvbnMgQWRkcyB0b3AtbGV2ZWwgbWVudSBvcHRpb25zIGFuZCBvcHRpb25zIG9uIHBhZ2VzIChhZGRPcHRpb24pXHJcbiAqIHJvdXRlcyBBZGRzIHJvdXRlcyB0byB0aGUgY29uc29sZSBkaXJlY3RvcnkgKGFkZFJvdXRlLCBhZGRSb3V0ZXMpXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb25zb2xlUGFnZX0gZnJvbSAnLi9Db25zb2xlUGFnZS5qcyc7XHJcblxyXG5leHBvcnQgbGV0IENvbnNvbGVDb21wb25lbnRzID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBTdGFydCBzY3JpcHRzIGFyZSBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkXHJcbiAgICAvL1xyXG4gICAgbGV0IHN0YXJ0ID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRTdGFydCA9IGZ1bmN0aW9uKHNjcmlwdCkge1xyXG4gICAgICAgIHN0YXJ0LnB1c2goc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oY29uc29sZSkge1xyXG4gICAgICAgIHN0YXJ0LmZvckVhY2goKHN0YXJ0dXApID0+IHtcclxuICAgICAgICAgICAgc3RhcnR1cChjb25zb2xlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBBbnkgY29tcG9uZW50cyB0byBhZGQgdG8gdGhlIG1haW4gcGFnZSAoZXZlcnkgcGFnZSlcclxuICAgIC8vXHJcbiAgICAvLyBUaGUgY291cnNlIHN1YnN5c3RlbSB1c2VzIHRoaXMgdG8gYWRkIGEgYmFyIHRoZSBzZWxlY3RzXHJcbiAgICAvLyB0aGUgY291cnNlIHNlY3Rpb24gcmlnaHQgYmVsb3cgdGhlIG1lbnUgYmFyLlxyXG4gICAgLy9cclxuICAgIHRoaXMubWFpbiA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkTWFpbkNvbXBvbmVudCA9IGZ1bmN0aW9uKHRhZywgY29tcG9uZW50LCBvcmRlcikge1xyXG4gICAgICAgIC8vIHRoaXMubWFpbi5wdXNoKHtcclxuICAgICAgICAvLyAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogb3JkZXJcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjIgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE5hdjIgPSBmdW5jdGlvbihjb21wb25lbnQsIG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5uYXYyLnB1c2goe1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlTmF2MiA9IGZ1bmN0aW9uKHZ1ZSwgY29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTmF2Mih2dWUsIGMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5hdjIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5uYXYyW2ldLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdjIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgdnVlLiRzZXQodGhpcywgJ25hdjInLCB0aGlzLm5hdjIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkTmF2MkxpbmsgPSBmdW5jdGlvbih2dWUsIG5hbWUsIG9yZGVyLCBjbGljaykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPGEgQGNsaWNrLnByZXZlbnQ9XCJjbGlja1wiPiR7bmFtZX08L2E+YCxcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGROYXYyKGNvbXBvbmVudCwgb3JkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdjIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2MnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMubmF2MmxlZnQgPSBudWxsO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb25zb2xlIG9wdGlvbnMgYXJlIG1lbnUgb3B0aW9ucyBpbiB0aGUgc2l0ZSBjb25zb2xlLlxyXG4gICAgLy8gVGhpcyBpcyBob3cgdGhlIHRvcC1sZXZlbCBtZW51cywgc2VjdGlvbnMsIGFuZCBsaW5rc1xyXG4gICAgLy8gYXJlIGRlZmluZWQuXHJcbiAgICAvL1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IHRoZSBjb21wb25lbnRzIGludG8gYSBzdHJ1Y3R1cmVcclxuICAgICAqIGZvciBjcmVhdGluZyB0aGUgbWFuYWdlbWVudCBwYWdlcy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhZ2UgPSBmaW5kUGFnZShvcHRpb24ucGFnZS50aXRsZSk7XHJcbiAgICAgICAgICAgIGlmKHBhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWRkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IG5ldyBDb25zb2xlUGFnZShzaXRlLCBvcHRpb24ucGFnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgdGhlIHBhZ2VzLCBzZWN0aW9ucywgYW5kIG9wdGlvbnMgaW4gb3JkZXJcclxuICAgICAgICB0aGlzLnBhZ2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlLnNvcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBTb3J0IGFueSBtYWluIGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLm1haW4uc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFBhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJvdXRlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkUm91dGUgPSBmdW5jdGlvbihyb3V0ZSkge1xyXG4gICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlcyA9IGZ1bmN0aW9uKGFkZHJvdXRlcykge1xyXG4gICAgICAgIGZvcihsZXQgcm91dGUgb2YgYWRkcm91dGVzKSB7XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFJvdXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb3V0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIGxpc3Qgb2YgaXRlbXMgb2YgdGhlIGZvcm0ge3RpdGxlOiAndGl0bGUnLCBvcmRlcjogJ29yZGVyJ30sXHJcbiAgICAgKiBmaW5kIGFuIGl0ZW0gd2l0aCBhIGdpdmVuIHRpdGxlLlxyXG4gICAgICogQHBhcmFtIGxpc3RcclxuICAgICAqIEBwYXJhbSB0aXRsZVxyXG4gICAgICovXHJcbiAgICBsZXQgZmluZFBhZ2UgPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5wYWdlcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VzW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi9Db25zb2xlJztcclxuaW1wb3J0IFRhYmxlc0NvbXBvbmVudCBmcm9tICcuL1RhYmxlc0NvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIHRoZSBDb25zb2xlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5Db25zb2xlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgc2l0ZUNvbnNvbGUgPSBuZXcgQ29uc29sZShzaXRlKTtcclxuXHJcbiAgICAvLyBTYXZlIGFzIGEgc2l0ZSBwcm9wZXJ0eVxyXG4gICAgc2l0ZS5jb25zb2xlID0gc2l0ZUNvbnNvbGU7XHJcblxyXG4gICAgLy8gQWRkIHN0YW5kYXJkIG9wdGlvbnNcclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLlNUQUZGLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLkFETUlOLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01hbmFnZW1lbnQnLCByb3V0ZTogJy9tYW5hZ2VtZW50Jywgb3JkZXI6IDEwfSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdTaXRlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxyXG4gICAgICAgIG9yZGVyOiAxMCxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsIG5hbWU6ICd0YWJsZXMnLCBjb21wb25lbnQ6IFRhYmxlc0NvbXBvbmVudH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtY29uc29sZScpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2l0ZUNvbnNvbGUuc3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNpdGVDb25zb2xlO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudHMgYSBjb25zb2xlIHBhZ2UgaW4gdGhlIENvbnNvbGVDb21wb25lbnRzIGNvbGxlY3Rpb25cclxuICovXHJcblxyXG5pbXBvcnQge0NvbnNvbGVTZWN0aW9ufSBmcm9tICcuL0NvbnNvbGVTZWN0aW9uLmpzJztcclxuXHJcbmV4cG9ydCBsZXQgQ29uc29sZVBhZ2UgPSBmdW5jdGlvbihzaXRlLCBwYWdlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gcGFnZS50aXRsZTtcclxuICAgIHRoaXMucm91dGUgPSBwYWdlLnJvdXRlO1xyXG4gICAgdGhpcy5vcmRlciA9IHBhZ2Uub3JkZXI7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHBhZ2UuY29tcG9uZW50O1xyXG4gICAgdGhpcy5hdExlYXN0ID0gcGFnZS5hdExlYXN0ICE9PSB1bmRlZmluZWQgPyBwYWdlLmF0TGVhc3QgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIC8vIERvZXMgdGhlIGl0ZW0gaGF2ZSBhIHNlY3Rpb24/XHJcbiAgICAgICAgaWYob3B0aW9uLnNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGZpbmRTZWN0aW9uKG9wdGlvbi5zZWN0aW9uLnRpdGxlKTtcclxuICAgICAgICBpZihzZWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkKG9wdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBuZXcgQ29uc29sZVNlY3Rpb24oc2l0ZSwgb3B0aW9uLnNlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uc29ydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaW5kU2VjdGlvbiA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbnNbaV0udGl0bGUgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogSXMgdGhpcyBwYWdlIGF2YWlsYWJsZSB0byB0aGlzIHVzZXI/XHJcblx0ICogQHBhcmFtIHVzZXIgVXNlciB0byB0ZXN0XHJcblx0ICovXHJcblx0dGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIuYXRMZWFzdCh0aGlzLm1pbmltdW1Sb2xlKHVzZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pbmltdW1Sb2xlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIGxldCByb2xlTGVhc3QgPSB0aGlzLmF0TGVhc3Q7XHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBPYmplY3Qocm9sZUxlYXN0KSkge1xyXG4gICAgICAgICAgICByb2xlTGVhc3QgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3Qocm9sZUxlYXN0LnRhZywgcm9sZUxlYXN0LmRlZmF1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByaW9yaXR5TGVhc3QgPSB0aGlzLmF0TGVhc3QgIT09IG51bGwgPyB1c2VyLmdldFJvbGVQcmlvcml0eShyb2xlTGVhc3QpIDogMTAwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb25MZWFzdCA9IHNlY3Rpb24ubWluaW11bVJvbGUodXNlcik7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHNlY3Rpb25MZWFzdCk7XHJcbiAgICAgICAgICAgIGlmKHByaW9yaXR5ICE9PSAwICYmIHByaW9yaXR5IDwgcHJpb3JpdHlMZWFzdCkge1xyXG4gICAgICAgICAgICAgICAgcm9sZUxlYXN0ID0gc2VjdGlvbkxlYXN0O1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZWFzdCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnOyAvLy88IEFsd2F5cyBBRE1JTlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGVMZWFzdDtcclxuXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogQ29uc29sZSBzZWN0aW9uOiBUaGVzZSBhcmUgdGhlIDxoMj4gcGFnZSBzZWN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29uc29sZVNlY3Rpb25PcHRpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb25PcHRpb24nO1xyXG5cclxuZXhwb3J0IGxldCBDb25zb2xlU2VjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIHNlY3Rpb24pIHtcclxuICAgIHRoaXMudGl0bGUgPSBzZWN0aW9uLnRpdGxlO1xyXG4gICAgdGhpcy5vcmRlciA9IHNlY3Rpb24ub3JkZXI7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChuZXcgQ29uc29sZVNlY3Rpb25PcHRpb24oc2l0ZSwgb3B0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIuYXRMZWFzdCh0aGlzLm1pbmltdW1Sb2xlKHVzZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSB0aGUgbWluaW11bSByb2xlIGZvciBhbGwgb3B0aW9uc1xyXG4gICAgICogaW4gdGhpcyBzZWN0aW9uIHNvIHdlIGtub3cgaWYgd2UgY2FuIHNob3cgdGhlIHNlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdXNlciBBIHVzZXIsIHNvIHdlIGNhbiBrbm93IHdoYXQgdGhlIHBvc3NpYmxlIHJvbGVzIGFyZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUm9sZVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1pbmltdW1Sb2xlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByb2xlTGVhc3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBwcmlvcml0eUxlYXN0ID0gMTAwMDAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG5cdCAgICAgICAgbGV0IHJvbGUgPSBvcHRpb24uYXRMZWFzdDtcclxuXHQgICAgICAgIGlmKHJvbGUgPT09IE9iamVjdChyb2xlKSkge1xyXG5cdFx0ICAgICAgICByb2xlID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KHJvbGUudGFnLCByb2xlLmRlZmF1bHQpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdXNlci5nZXRSb2xlUHJpb3JpdHkocm9sZSk7XHJcbiAgICAgICAgICAgIGlmKHByaW9yaXR5ICE9PSAwICYmIHByaW9yaXR5IDwgcHJpb3JpdHlMZWFzdCkge1xyXG4gICAgICAgICAgICAgICAgcm9sZUxlYXN0ID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGVhc3QgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJzsgLy8vPCBBbHdheXMgQURNSU5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb2xlTGVhc3Q7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogT3B0aW9ucyBpbiBhIGNvbnNvbGUgcGFnZSBzZWN0aW9uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVTZWN0aW9uT3B0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9uKSB7XHJcblx0Zm9yKGxldCBtZW1iZXIgaW4gb3B0aW9uKSB7XHJcblx0XHR0aGlzW21lbWJlcl0gPSBvcHRpb25bbWVtYmVyXTtcclxuXHR9XHJcblx0Ly8gdGhpcy5vcHRpb24gPSBvcHRpb247XHJcblxyXG5cdHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG5cdFx0bGV0IGF0TGVhc3QgPSB0aGlzLmF0TGVhc3Q7XHJcblx0XHRpZihhdExlYXN0ID09PSBPYmplY3QoYXRMZWFzdCkpIHtcclxuXHRcdFx0YXRMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChhdExlYXN0LnRhZywgYXRMZWFzdC5kZWZhdWx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKGF0TGVhc3QgPT09IHVuZGVmaW5lZCB8fCB1c2VyLmF0TGVhc3QoYXRMZWFzdCkpO1xyXG5cdH1cclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogS2VlcHMgdHJhY2sgb2Ygd2hhdCB0YWJsZSBjcmVhdGUvZHJvcCBvcHRpb25zIGFyZSBhdmFpbGFibGUgb24gdGhlIHNpdGUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBDb25zb2xlVGFibGVzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy50YWJsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKHRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZXMucHVzaCh0YWJsZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3NWE2ZWViJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNzVhNmVlYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNzVhNmVlYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNzVhNmVlYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTU5N2FiNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNTk3YWI2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzQ2YWMxZDdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzQ2YWMxZDcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIiIsIi8qKlxyXG4gKiBNYWtlIHRoZSBuYXYgYmFyICdzdGlja3knLiBJdCBzdGlja3MgdG8gdGhlIHRvcFxyXG4gKiBvZiB0aGUgcGFnZSBpbnN0ZWFkIG9mIHNjcm9sbGluZyBvZmYuXHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgdG8gZmluZCB0aGUgbmF2IGJhci5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFN0aWNreU5hdiA9IGZ1bmN0aW9uKHNlbCkge1xyXG4gICAgbGV0IG5hdnMgPSBbXTtcclxuICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBpbnN0YWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPGVscy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICBuYXZzLnB1c2goe1xyXG4gICAgICAgICAgICBuYXY6ICBlbHNbaV0sXHJcbiAgICAgICAgICAgIHN0aWNreTogZWxzW2ldLm9mZnNldFRvcFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxuYXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXYgPSBuYXZzW2ldO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IG5hdi5zdGlja3kpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFpbnN0YWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LmNsYXNzTGlzdC5hZGQoXCJjbC1zdGlja3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Lm5hdi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBuYXYubmF2LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbnN0YWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjbC1zdGlja3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9