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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserVueBase = Site.UserVueBase;
/**
 * Base component for console pages.
 *
 * Provides:
 * nav2 menu support with automatic removal.
 * @alias ConsoleComponentBase
 * @constructor
 */

/* harmony default export */ __webpack_exports__["default"] = ({
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
/* harmony import */ var _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");


Site.ConsoleComponentBase = _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
var Console = _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__["ConsoleFactory"].create(Site.site);


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

  this.components = new _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__["ConsoleComponents"](site);
  /** The console tables component keeps track of the
   * database tables we may need to create */

  this.tables = new _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__["ConsoleTables"]();
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
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
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

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
      api.createRecord('69e355a8', component.options)
    } else {
      api.reload('69e355a8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/console/js/ConsoleComponentBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
/* harmony import */ var _ConsolePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsolePage */ "./vendor/cl/console/js/ConsolePage.js");

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
        var _page = new _ConsolePage__WEBPACK_IMPORTED_MODULE_0__["ConsolePage"](site, option.page);

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
      var _section = new _ConsoleSection__WEBPACK_IMPORTED_MODULE_0__["ConsoleSection"](site, option.section);

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
 * Console section: These are the <h2> page sections
 * @constructor
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
 * Keeps track of what table create/drop options are available on the site.
 * @constructor
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



/***/ })

},[["./vendor/cl/console/index.js","runtime","common","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9Ob3RGb3VuZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT8wMWQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/NjYzOSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/ZmFkNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzVlYjEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT8xMGJiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlPzg4ZDEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVNlY3Rpb25PcHRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZVRhYmxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWU/ZTc2YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzZkMzQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iOTFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT9iNzE4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT82ZDdkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NWQxNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzhlN2EiXSwibmFtZXMiOlsiU2l0ZSIsIkNvbnNvbGVDb21wb25lbnRCYXNlIiwiQ29uc29sZSIsIkNvbnNvbGVGYWN0b3J5IiwiY3JlYXRlIiwic2l0ZSIsInRpdGxlIiwiY29tcG9uZW50cyIsIkNvbnNvbGVDb21wb25lbnRzIiwidGFibGVzIiwiQ29uc29sZVRhYmxlcyIsInN0YXJ0IiwiZWxlbWVudCIsInNvcnQiLCJ1c2VyIiwic3RvcmUiLCJzdGF0ZSIsInRlbXBsYXRlIiwibWFpbiIsImZvckVhY2giLCJjb21wb25lbnQiLCJ0YWciLCJyb3V0ZXMiLCJnZXRSb3V0ZXMiLCJyb3V0ZSIsInJvYmoiLCJwYXRoIiwicm9vdCIsInByb3BzIiwidW5kZWZpbmVkIiwibmFtZSIsInB1c2giLCJwYWdlcyIsInBhZ2UiLCJhdExlYXN0IiwibWluaW11bVJvbGUiLCJDb25zb2xlQ29tcG9uZW50Iiwic2VjdGlvbnMiLCJzZWN0aW9uIiwib3B0aW9ucyIsIm9wdGlvbiIsImF2YWlsYWJsZSIsIk5vdEZvdW5kQ29tcG9uZW50IiwiSGVhZGVyIiwiaW5mbyIsImhlYWRlciIsIkZvb3RlciIsImZvb3RlciIsInJvdXRlciIsIlZ1ZVJvdXRlciIsIm1vZGUiLCJOYXZDb21wb25lbnQiLCJzaXRlVGl0bGUiLCJtYXN0ZXJWdWUiLCJWdWUiLCJlbCIsImRhdGEiLCJjb25zb2xlIiwibWV0aG9kcyIsImlzQWRtaW4iLCJhZG1pbiIsInNldFRpdGxlIiwiZG9jdW1lbnQiLCJzaXRlTmFtZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwiU3RpY2t5TmF2IiwiY250IiwibWVudSIsIk9iamVjdCIsInBlcm1pc3Npb25zIiwiZGVmYXVsdCIsImxlbmd0aCIsIiRwYXJlbnQiLCJhZGRTdGFydCIsInNjcmlwdCIsInN0YXJ0dXAiLCJhZGRNYWluQ29tcG9uZW50Iiwib3JkZXIiLCJuYXYyIiwiYWRkTmF2MiIsImEiLCJiIiwicmVtb3ZlTmF2MiIsInZ1ZSIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJpIiwic3BsaWNlIiwiJHNldCIsImFkZE5hdjJMaW5rIiwiY2xpY2siLCJuYXYycmlnaHQiLCJuYXYybGVmdCIsImFkZE9wdGlvbiIsImZpbmRQYWdlIiwiYWRkIiwiQ29uc29sZVBhZ2UiLCJnZXRQYWdlcyIsImFkZFJvdXRlIiwiYWRkUm91dGVzIiwiYWRkcm91dGVzIiwic2l0ZUNvbnNvbGUiLCJVc2VycyIsIlVzZXIiLCJTVEFGRiIsIkFETUlOIiwiVGFibGVzQ29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsImZpbmRTZWN0aW9uIiwiQ29uc29sZVNlY3Rpb24iLCJyb2xlTGVhc3QiLCJwcmlvcml0eUxlYXN0IiwiZ2V0Um9sZVByaW9yaXR5Iiwic2VjdGlvbkxlYXN0IiwicHJpb3JpdHkiLCJDb25zb2xlU2VjdGlvbk9wdGlvbiIsInJvbGUiLCJtZW1iZXIiLCJ0YWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0Esd0JBREE7QUFFQTtBQUNBOzs7Ozs7O0FBT0EsV0FSQSxtQkFRQSxLQVJBLEVBUUEsS0FSQSxFQVFBLE9BUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7O0FBY0E7Ozs7Ozs7QUFPQSxlQXJCQSx1QkFxQkEsS0FyQkEsRUFxQkEsS0FyQkEsRUFxQkEsSUFyQkEsRUFxQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBekJBOztBQTJCQTs7Ozs7QUFLQSxjQWhDQSxzQkFnQ0EsSUFoQ0EsRUFnQ0E7QUFDQTs7QUFDQTtB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QUFNO0FBQ3RCLHlCQUF5QiwrR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtTSxDQUFnQix5UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TjtBQUFBO0FBQUE7QUFBQTtBQUE4YixDQUFnQixxY0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbnNvbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ29uc29sZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHNjcmlwdD5cclxuICBjb25zdCBVc2VyVnVlQmFzZSA9IFNpdGUuVXNlclZ1ZUJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGNvbXBvbmVudCBmb3IgY29uc29sZSBwYWdlcy5cclxuICAgICAqXHJcbiAgICAgKiBQcm92aWRlczpcclxuICAgICAqIG5hdjIgbWVudSBzdXBwb3J0IHdpdGggYXV0b21hdGljIHJlbW92YWwuXHJcbiAgICAgKiBAYWxpYXMgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGNsb3N1cmUgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIENvbnNvbGVDb21wb25lbnRCYXNlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGFkZE5hdjIodGl0bGUsIG9yZGVyLCBjbG9zdXJlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLmFkZE5hdjJMaW5rKHRoaXMsIHRpdGxlLCBvcmRlciwgY2xvc3VyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudSB0aGF0IGlzIGEgcm91dGVyIGxpbmtcclxuICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuICAgICAgICAgICAqIEBwYXJhbSBvcmRlciBPcmRlciBpbiB0aGUgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSBsaW5rIExpbmsgd2l0aG91dCBTaXRlLnJvb3RcclxuICAgICAgICAgICAqIEBtZW1iZXJvZiBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBhZGROYXYyTGluayh0aXRsZSwgb3JkZXIsIGxpbmspIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZE5hdjIodGl0bGUsIG9yZGVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFNpdGUucm9vdCArIGxpbmspO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuXHJcblx0ICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlIGEgbmF2MiBpdGVtLlxyXG4gICAgICAgICAqIEBwYXJhbSBpdGVtIEl0ZW0gb2JqZWN0IGFzIHJldHVybmVkIGJ5IGFkZE5hdjJcclxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICAgIHJlbW92ZU5hdjIoaXRlbSkge1xyXG4gICAgICAgICAgICAgIGxldCBpID0gdGhpcy5jb21wb25lbnRzMS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIGlmKGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICB0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cy5yZW1vdmVOYXYyKHRoaXMsIGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVkKCkge1xyXG4gICAgICBcdHRoaXMuY29tcG9uZW50czEgPSBbXTtcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgXHR0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cy5yZW1vdmVOYXYyKHRoaXMsIHRoaXMuY29tcG9uZW50czEpO1xyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cInBhZ2UgaW4gY29uc29sZS5jb21wb25lbnRzLnBhZ2VzXCIgdi1pZj1cInBhZ2UuYXZhaWxhYmxlKHVzZXIpXCI+XHJcbiAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwicGFnZUxpbmsocGFnZSlcIj57e3BhZ2UudGl0bGV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2MlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiYyBpbiBjb25zb2xlLmNvbXBvbmVudHMubmF2MlwiPjxjb21wb25lbnQgOmlzPVwiYy5jb21wb25lbnRcIiA6c2hvcnQ9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyXCI+PC9jb21wb25lbnQ+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCIgOmlzPVwiY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydjb25zb2xlJywgJ3VzZXInXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhvbWVMaW5rOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdCAgdGhpcy5ob21lTGluayA9IHRoaXMuJHNpdGUucm9vdCArICcvJztcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgcGFnZUxpbmsocGFnZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2NvbnNvbGUke3BhZ2Uucm91dGV9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gIDxwPlBhZ2UgZG9lcyBub3QgZXhpc3QuLi48L3A+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnUGFnZSBkb2VzIG5vdCBleGlzdC4uLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gIDxoMj5EYXRhYmFzZSBUYWJsZXMgTWFuYWdlbWVudDwvaDI+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlciByZWRcIj48ZW0+VXNlIHdpdGggY2F1dGlvbiE8L2VtPjwvcD5cclxuICA8cD5UaGUgcGFnZSBwcm92aWRlcyBhbiBBZG1pbmlzdHJhdG9yIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSBkYXRhYmFzZSB0YWJsZXMuXHJcbiAgICBPbmx5IHVzZSBkdXJpbmcgY291cnNlIHN0YXJ0dXAhIFRoZSBjcmVhdGUgb3B0aW9uIHdpbGwgbm90IGRyb3AgYW4gZXhpc3RpbmcgdGFibGVcclxuICAgIHVubGVzcyB0aGUgZHJvcCBhbmQgY3JlYXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gVGhlIGNsZWFuIG9wdGlvbiBhbGxvd3MgZm9yIGNsZWFuaW5nXHJcbiAgICBvZiBvcnBoYW5lZCByZWNvcmRzIGZyb20gdGFibGVzLjwvcD5cclxuICAgIDxkaXY+XHJcblxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPlRhYmxlczwvdGg+XHJcbiAgICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5PcGVyYXRpb25zPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciB2LWZvcj1cInRhYmxlIGluIHRhYmxlc1wiPlxyXG4gICAgICAgICAgPHRkPnt7dGFibGUudGl0bGV9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNyZWF0ZSh0YWJsZSwgZmFsc2UpXCI+Y3JlYXRlPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZHJvcENyZWF0ZSh0YWJsZSlcIj5kcm9wLWFuZC1jcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjbGVhbih0YWJsZSlcIj5jbGVhbjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxwcmUgdi1pZj1cInJlc3VsdHMubGVuZ3RoID4gMFwiIGNsYXNzPVwiY29kZVwiPnt7cmVzdWx0c319PC9wcmU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJsZXM6IHRoaXMuJHNpdGUuY29uc29sZS50YWJsZXMudGFibGVzLFxyXG4gICAgICAgICAgICByZXN1bHRzOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBEYXRhYmFzZSBUYWJsZXMnKTtcclxuXHQgICAgICB0aGlzLiRzaXRlLmNvbnNvbGUudGFibGVzLnRhYmxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cdCAgICBjcmVhdGU6IGZ1bmN0aW9uKHRhYmxlLCBkcm9wKSB7XHJcblx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCh0YWJsZS5hcGksIHtkcm9wOiBkcm9wID8gJ3llcycgOiAnbm8nfSlcclxuXHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdCAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGRyb3ApIHtcclxuXHRcdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgdGFibGUudGl0bGUgKyAnIHRhYmxlcyBkcm9wcGVkIGFuZCByZWNyZWF0ZWQnKTtcclxuXHRcdFx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCB0YWJsZS50aXRsZSArICcgdGFibGVzIGNyZWF0ZWQnKTtcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBkcm9wQ3JlYXRlOiBmdW5jdGlvbih0YWJsZSkge1xyXG5cdFx0ICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveChcIkFyZSB5b3Ugc3VyZT9cIixcclxuXHRcdFx0ICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZHJvcCBhbmQgcmVjcmVhdGUgdGhlICcgKyB0YWJsZS50aXRsZSArXHJcblx0XHRcdCAgICAnIHRhYmxlcz8nLCBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLmNyZWF0ZSh0YWJsZSwgdHJ1ZSk7XHJcblx0XHRcdCAgICB9KTtcclxuXHQgICAgfSxcclxuXHQgICAgY2xlYW46IGZ1bmN0aW9uKHRhYmxlKSB7XHJcblx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCh0YWJsZS5hcGksIHtjbGVhbjogJ3llcyd9KVxyXG5cdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0ICAgIFx0bGV0IHJlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3RhYmxlLWNsZWFuJykuYXR0cmlidXRlcztcclxuXHJcblx0XHRcdFx0ICAgIFx0dGhpcy5yZXN1bHRzICs9IHRhYmxlLnRpdGxlICsgXCIgVGFibGVzXFxuXFxuXCIgKyByZXN1bHQgKyBcIlxcblwiO1xyXG5cdFx0XHRcdCAgICBcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgbGkgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNmVtO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRhYmxlIHRkW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbn1cXG50YWJsZSBidXR0b25bZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxubGkgc3BhbltkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2ZW07XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1uYXZcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5ob21lTGluayB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaG9tZVwiIH0sIFtfdm0uX3YoXCJIb21lXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5wYWdlcywgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2UuYXZhaWxhYmxlKF92bS51c2VyKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5wYWdlTGluayhwYWdlKSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBhZ2UudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJsZWZ0XG4gICAgICAgICAgICAgICAgICA/IF9jKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MiwgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKGMuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNob3J0OiBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlBhZ2UgZG9lcyBub3QgZXhpc3QuLi5cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiRGF0YWJhc2UgVGFibGVzIE1hbmFnZW1lbnRcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhlIHBhZ2UgcHJvdmlkZXMgYW4gQWRtaW5pc3RyYXRvciB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW5kIGRlc3Ryb3kgZGF0YWJhc2UgdGFibGVzLlxcbiAgT25seSB1c2UgZHVyaW5nIGNvdXJzZSBzdGFydHVwISBUaGUgY3JlYXRlIG9wdGlvbiB3aWxsIG5vdCBkcm9wIGFuIGV4aXN0aW5nIHRhYmxlXFxuICB1bmxlc3MgdGhlIGRyb3AgYW5kIGNyZWF0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuIFRoZSBjbGVhbiBvcHRpb24gYWxsb3dzIGZvciBjbGVhbmluZ1xcbiAgb2Ygb3JwaGFuZWQgcmVjb3JkcyBmcm9tIHRhYmxlcy5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udGFibGVzLCBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3JlYXRlKHRhYmxlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY3JlYXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRyb3BDcmVhdGUodGFibGUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImRyb3AtYW5kLWNyZWF0ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGVhbih0YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY2xlYW5cIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucmVzdWx0cy5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29kZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZXN1bHRzKSldKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHJlZFwiIH0sIFtcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIlVzZSB3aXRoIGNhdXRpb24hXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRhYmxlc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtfdm0uX3YoXCJPcGVyYXRpb25zXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3OWUyZTk4MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7Q29uc29sZUZhY3Rvcnl9IGZyb20gJy4vanMvQ29uc29sZUZhY3RvcnknO1xyXG5cclxuaW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJy4vanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuXHJcblNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2UgPSBDb25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbmNvbnN0IENvbnNvbGUgPSBDb25zb2xlRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuZXhwb3J0IHtDb25zb2xlfTtcclxuXHJcbiIsImltcG9ydCB7Q29uc29sZUNvbXBvbmVudHN9IGZyb20gJy4vQ29uc29sZUNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NvbnNvbGVUYWJsZXN9IGZyb20gJy4vQ29uc29sZVRhYmxlcydcclxuaW1wb3J0IHtDb25zb2xlQ29tcG9uZW50fSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnQnO1xyXG5pbXBvcnQgTmF2Q29tcG9uZW50IGZyb20gJy4vTmF2Q29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBOb3RGb3VuZENvbXBvbmVudCBmcm9tICcuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4vKipcclxuICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgc2l0ZSBjb25zb2xlLlxyXG4gKiBAcGFyYW0ge1NpdGV9IHNpdGUgVGhlIHNpdGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdC8qKiBUaGlzIHByb3BlcnR5IG1ha2VzIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgY29uc29sZSB0aXRsZVxyXG4gICAgICogQG1lbWJlck9mIENvbnNvbGUgKi9cclxuXHR0aGlzLnRpdGxlID0gJ1NpdGUgQ29uc29sZSc7XHJcblxyXG4gICAgLyoqIFRoZSBjb25zb2xlIGNvbXBvbmVudHMgYXJlIGluc3RhbGxlZCBjb21wb25lbnRzXHJcbiAgICAgKiBsaWtlIHRoZSB1c2VycyBlZGl0b3Igb3IgdGFibGUgY3JlYXRpb24uICovXHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgQ29uc29sZUNvbXBvbmVudHMoc2l0ZSk7XHJcblxyXG4gICAgLyoqIFRoZSBjb25zb2xlIHRhYmxlcyBjb21wb25lbnQga2VlcHMgdHJhY2sgb2YgdGhlXHJcbiAgICAgKiBkYXRhYmFzZSB0YWJsZXMgd2UgbWF5IG5lZWQgdG8gY3JlYXRlICovXHJcbiAgICB0aGlzLnRhYmxlcyA9IG5ldyBDb25zb2xlVGFibGVzKCk7XHJcblxyXG5cdC8qKlxyXG4gICAgICogU3RhcnQgdGhlIGNvbnNvbGUgc3lzdGVtLlxyXG5cdCAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgd2UgcHV0IHRoZSBjb25zb2xlIFZVRSBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc29ydCgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zdGFydCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBpbnN0YWxsZWQgdXNlclxyXG4gICAgICAgIGxldCB1c2VyID0gc2l0ZS5zdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSB0ZW1wbGF0ZSwgc2V0dGluZyB1cCB0aGUgdG9wLWxldmVsIG1lbnVzXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJjbC1jb25zb2xlXCI+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+XHJcbjxjb25zb2xlLW5hdiA6Y29uc29sZT1cImNvbnNvbGVcIiA6dXNlcj1cInVzZXJcIj48L2NvbnNvbGUtbmF2PlxyXG48L3NpdGUtaGVhZGVyPmA7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5tYWluLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgPCR7Y29tcG9uZW50LnRhZ30gLz5gO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRlbXBsYXRlICs9IGBcclxuPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbjxzaXRlLWZvb3Rlcj48L3NpdGUtZm9vdGVyPjwvZGl2PmA7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSByb3V0ZXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCByb3V0ZSBvZiB0aGlzLmNvbXBvbmVudHMuZ2V0Um91dGVzKCkpIHtcclxuICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyLmF0TGVhc3QocGFnZS5taW5pbXVtUm9sZSh1c2VyKSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBwYWdlLmNvbXBvbmVudCAhPT0gdW5kZWZpbmVkID8gcGFnZS5jb21wb25lbnQgOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb25zb2xlQ29tcG9uZW50KHRoaXMsIHNpdGUsIHVzZXIsIHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyBwYWdlLnJvdXRlLCBjb21wb25lbnQ6IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb24uYXZhaWxhYmxlKHVzZXIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLnJvdXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyByb3V0ZS5yb3V0ZSwgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm91dGUucHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5wcm9wcyA9IHJvdXRlLnByb3BzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9iai5uYW1lID0gcm91dGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChyb2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByb3V0ZXMucHVzaCh7IHBhdGg6ICcqJywgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgICAgICBjb25zdCBGb290ZXIgPSBzaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBuZXcgc2l0ZS5WdWVSb3V0ZXIoe1xyXG4gICAgICAgICAgICByb3V0ZXM6IHJvdXRlcyxcclxuICAgICAgICAgICAgbW9kZTogJ2hpc3RvcnknXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgJ3NpdGUtaGVhZGVyJzogSGVhZGVyLFxyXG4gICAgICAgICAgICAnc2l0ZS1mb290ZXInOiBGb290ZXIsXHJcbiAgICAgICAgICAgICdjb25zb2xlLW5hdic6IE5hdkNvbXBvbmVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0b3JlID0gc2l0ZS5zdG9yZTtcclxuICAgICAgICBsZXQgc2l0ZVRpdGxlID0gdGhpcy50aXRsZTtcclxuICAgICAgICBsZXQgQ29uc29sZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMubWFzdGVyVnVlID0gbmV3IHNpdGUuVnVlKHtcclxuICAgICAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHN0b3JlLCAgICAgIC8vIEluamVjdCB0aGUgc3RvcmVcclxuICAgICAgICAgICAgc2l0ZSwgICAgICAgLy8gSW5qZWN0IHNpdGUsIHNvICRzaXRlIGlzIGF2YWlsYWJsZSBmb3IgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgcm91dGVyLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNpdGVUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlOiBDb25zb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGlzQWRtaW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZG1pbjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICogU2V0IHRoZSBzaXRlIHRpdGxlLiBUaGlzIGNhbiBiZSB1c2VkIGZyb21cclxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZCBWdWUncyB1c2luZyB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJycpXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgdG8gc2V0XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHNpdGVUaXRsZSArIHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gU2l0ZS5pbmZvLnNpdGVOYW1lICsgJyAnICsgc2l0ZVRpdGxlICsgdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpdGxlKCcnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgICAgICBuZXcgc2l0ZS5TdGlja3lOYXYoJ2Rpdi5jbC1jb25zb2xlIG5hdicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIENvbXBvbmVudHMgdGhhdCByZXByZXNlbnQgYSBjb25zb2xlIHBhZ2UuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVDb21wb25lbnQgPSBmdW5jdGlvbihjb25zb2xlLCBzaXRlLCB1c2VyLCBwYWdlKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gYDxkaXYgaWQ9XCJjbC1jb25zb2xlLW1haW5cIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPmA7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudHMgPSB7fTtcclxuICAgIGxldCBjbnQgPSAxO1xyXG5cclxuICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmKCFzZWN0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8aDI+JHtzZWN0aW9uLnRpdGxlfTwvaDI+YDtcclxuXHJcbiAgICAgICBsZXQgbWVudSA9ICcnO1xyXG5cclxuICAgICAgIC8vIEFkZCB0aGUgbWVudSBvcHRpb25zXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgaWYob3B0aW9uLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgbGV0IGF0TGVhc3QgPSBvcHRpb24uYXRMZWFzdDtcclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gT2JqZWN0KGF0TGVhc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZihhdExlYXN0ID09PSB1bmRlZmluZWQgfHwgdXNlci5hdExlYXN0KGF0TGVhc3QpKSB7XHJcblx0ICAgICAgICAgICAgICAgbWVudSArPSBgPGxpPjxyb3V0ZXItbGluayB0bz1cIiR7c2l0ZS5yb290fS9jbC9jb25zb2xlJHtvcHRpb24ucm91dGV9XCI+JHtvcHRpb24udGl0bGV9PC9yb3V0ZXItbGluaz48L2xpPmA7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgICBpZihtZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9ICc8dWw+JyArIG1lbnUgKyAnPC91bD4nO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW55IGN1c3RvbSBjb21wb25lbnRzXHJcbiAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbi5jb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgKz0gYDxjb25zb2xlLWNvbXBvbmVudC0ke2NudH0+PC9jb25zb2xlLWNvbXBvbmVudC0ke2NudH0+YDtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbJ2NvbnNvbGUtY29tcG9uZW50LScgKyBjbnRdID0gb3B0aW9uLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlICs9IGA8L2Rpdj48L2Rpdj5gO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcclxuXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihwYWdlLnRpdGxlID09PSAnTWFpbicpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHBhZ2UudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5ZTM1NWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5ZTM1NWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHtDb25zb2xlUGFnZX0gZnJvbSAnLi9Db25zb2xlUGFnZSc7XHJcblxyXG4vKipcclxuICogTWFuYWdlbWVudCBvZiBhbGwgY29uc29sZSBjb21wb25lbnRzXHJcbiAqXHJcbiAqIENvbXBvbmVudHMgYXJlOlxyXG4gKiBzdGFydCBzY3JpcHRzIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWQgKGFkZFN0YXJ0KVxyXG4gKiBtYWluIENvbXBvbmVudHMgYWRkZWQgdG8gZXZlcnkgcGFnZSAoYWRkTWFpbkNvbXBvbmVudClcclxuICogb3B0aW9ucyBBZGRzIHRvcC1sZXZlbCBtZW51IG9wdGlvbnMgYW5kIG9wdGlvbnMgb24gcGFnZXMgKGFkZE9wdGlvbilcclxuICogcm91dGVzIEFkZHMgcm91dGVzIHRvIHRoZSBjb25zb2xlIGRpcmVjdG9yeSAoYWRkUm91dGUsIGFkZFJvdXRlcykgKlxyXG4gKiBAcGFyYW0gc2l0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ29uc29sZUNvbXBvbmVudHMgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFN0YXJ0IHNjcmlwdHMgYXJlIHJ1biB3aGVuIHRoZSBjb25zb2xlIGlzIHN0YXJ0ZWRcclxuICAgIC8vXHJcbiAgICBsZXQgc3RhcnQgPSBbXTtcclxuXHJcblxyXG4gICAgdGhpcy5hZGRTdGFydCA9IGZ1bmN0aW9uKHNjcmlwdCkge1xyXG4gICAgICAgIHN0YXJ0LnB1c2goc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oY29uc29sZSkge1xyXG4gICAgICAgIHN0YXJ0LmZvckVhY2goKHN0YXJ0dXApID0+IHtcclxuICAgICAgICAgICAgc3RhcnR1cChjb25zb2xlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBBbnkgY29tcG9uZW50cyB0byBhZGQgdG8gdGhlIG1haW4gcGFnZSAoZXZlcnkgcGFnZSlcclxuICAgIC8vXHJcbiAgICAvLyBUaGUgY291cnNlIHN1YnN5c3RlbSB1c2VzIHRoaXMgdG8gYWRkIGEgYmFyIHRoZSBzZWxlY3RzXHJcbiAgICAvLyB0aGUgY291cnNlIHNlY3Rpb24gcmlnaHQgYmVsb3cgdGhlIG1lbnUgYmFyLlxyXG4gICAgLy9cclxuICAgIHRoaXMubWFpbiA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkTWFpbkNvbXBvbmVudCA9IGZ1bmN0aW9uKHRhZywgY29tcG9uZW50LCBvcmRlcikge1xyXG4gICAgICAgIC8vIHRoaXMubWFpbi5wdXNoKHtcclxuICAgICAgICAvLyAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgIC8vICAgICBvcmRlcjogb3JkZXJcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjIgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE5hdjIgPSBmdW5jdGlvbihjb21wb25lbnQsIG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5uYXYyLnB1c2goe1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlTmF2MiA9IGZ1bmN0aW9uKHZ1ZSwgY29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTmF2Mih2dWUsIGMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5hdjIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5uYXYyW2ldLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdjIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgdnVlLiRzZXQodGhpcywgJ25hdjInLCB0aGlzLm5hdjIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkTmF2MkxpbmsgPSBmdW5jdGlvbih2dWUsIG5hbWUsIG9yZGVyLCBjbGljaykge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPGEgQGNsaWNrLnByZXZlbnQ9XCJjbGlja1wiPiR7bmFtZX08L2E+YCxcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGROYXYyKGNvbXBvbmVudCwgb3JkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdjIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2MnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMubmF2MmxlZnQgPSBudWxsO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb25zb2xlIG9wdGlvbnMgYXJlIG1lbnUgb3B0aW9ucyBpbiB0aGUgc2l0ZSBjb25zb2xlLlxyXG4gICAgLy8gVGhpcyBpcyBob3cgdGhlIHRvcC1sZXZlbCBtZW51cywgc2VjdGlvbnMsIGFuZCBsaW5rc1xyXG4gICAgLy8gYXJlIGRlZmluZWQuXHJcbiAgICAvL1xyXG5cclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IHRoZSBjb21wb25lbnRzIGludG8gYSBzdHJ1Y3R1cmVcclxuICAgICAqIGZvciBjcmVhdGluZyB0aGUgbWFuYWdlbWVudCBwYWdlcy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhZ2UgPSBmaW5kUGFnZShvcHRpb24ucGFnZS50aXRsZSk7XHJcbiAgICAgICAgICAgIGlmKHBhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWRkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IG5ldyBDb25zb2xlUGFnZShzaXRlLCBvcHRpb24ucGFnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgdGhlIHBhZ2VzLCBzZWN0aW9ucywgYW5kIG9wdGlvbnMgaW4gb3JkZXJcclxuICAgICAgICB0aGlzLnBhZ2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlLnNvcnQoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBTb3J0IGFueSBtYWluIGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLm1haW4uc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFBhZ2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJvdXRlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkUm91dGUgPSBmdW5jdGlvbihyb3V0ZSkge1xyXG4gICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlcyA9IGZ1bmN0aW9uKGFkZHJvdXRlcykge1xyXG4gICAgICAgIGZvcihsZXQgcm91dGUgb2YgYWRkcm91dGVzKSB7XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFJvdXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb3V0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEdpdmVuIGEgbGlzdCBvZiBpdGVtcyBvZiB0aGUgZm9ybSB7dGl0bGU6ICd0aXRsZScsIG9yZGVyOiAnb3JkZXInfSxcclxuICAgICAqIGZpbmQgYW4gaXRlbSB3aXRoIGEgZ2l2ZW4gdGl0bGUuXHJcbiAgICAgKiBAcGFyYW0gbGlzdFxyXG4gICAgICogQHBhcmFtIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIGxldCBmaW5kUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFnZXNbaV0udGl0bGUgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuL0NvbnNvbGUnO1xyXG5pbXBvcnQgVGFibGVzQ29tcG9uZW50IGZyb20gJy4vVGFibGVzQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvbnNvbGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbkNvbnNvbGVGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBzaXRlQ29uc29sZSA9IG5ldyBDb25zb2xlKHNpdGUpO1xyXG5cclxuICAgIC8vIFNhdmUgYXMgYSBzaXRlIHByb3BlcnR5XHJcbiAgICBzaXRlLmNvbnNvbGUgPSBzaXRlQ29uc29sZTtcclxuXHJcbiAgICAvLyBBZGQgc3RhbmRhcmQgb3B0aW9uc1xyXG4gICAgc2l0ZUNvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IFVzZXJzLlVzZXIuU1RBRkYsXHJcbiAgICAgICAgcGFnZToge3RpdGxlOiAnTWFpbicsIHJvdXRlOiAnJywgb3JkZXI6IDF9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l0ZUNvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IFVzZXJzLlVzZXIuQURNSU4sXHJcbiAgICAgICAgcGFnZToge3RpdGxlOiAnTWFuYWdlbWVudCcsIHJvdXRlOiAnL21hbmFnZW1lbnQnLCBvcmRlcjogMTB9LFxyXG4gICAgICAgIHNlY3Rpb246IHt0aXRsZTogJ1NpdGUgTWFuYWdlbWVudCcsIG9yZGVyOiAxfSxcclxuICAgICAgICB0aXRsZTogJ1RhYmxlcycsXHJcbiAgICAgICAgb3JkZXI6IDEwLFxyXG4gICAgICAgIHJvdXRlOiAnL21hbmFnZW1lbnQvdGFibGVzJyxcclxuICAgICAgICByb3V0ZXM6IFtcclxuICAgICAgICAgICAge3JvdXRlOiAnL21hbmFnZW1lbnQvdGFibGVzJywgbmFtZTogJ3RhYmxlcycsIGNvbXBvbmVudDogVGFibGVzQ29tcG9uZW50fVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGUuc3RhcnQoICgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1jb25zb2xlJyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzaXRlQ29uc29sZS5zdGFydChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2l0ZUNvbnNvbGU7XHJcbn0iLCJpbXBvcnQge0NvbnNvbGVTZWN0aW9ufSBmcm9tICcuL0NvbnNvbGVTZWN0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29uc29sZSBwYWdlIGluIHRoZSBDb25zb2xlQ29tcG9uZW50cyBjb2xsZWN0aW9uXHJcbiAqIEBwYXJhbSB7U2l0ZX0gc2l0ZSBUaGUgc2l0ZSBvYmplY3RcclxuICogQHBhcmFtIHBhZ2UgT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHBhZ2UgYXMgcGFzc2VkIGZyb20gdGhlIHNlcnZlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ29uc29sZVBhZ2UgPSBmdW5jdGlvbihzaXRlLCBwYWdlKSB7XHJcbiAgICAvKiogUGFnZSB0aXRsZSAqL1xyXG4gICAgdGhpcy50aXRsZSA9IHBhZ2UudGl0bGU7XHJcblxyXG4gICAgLyoqIFJvdXRlciB0byBnZXQgdG8gdGhpcyBwYWdlICovXHJcbiAgICB0aGlzLnJvdXRlID0gcGFnZS5yb3V0ZTtcclxuXHJcbiAgICAvKiogT3JkZXIgb2YgcGFnZSBwcmVzZW50YXRpb24gaW4gYSBjb21wb25lbnQgbWVudSAqL1xyXG4gICAgdGhpcy5vcmRlciA9IHBhZ2Uub3JkZXI7XHJcblxyXG4gICAgLyoqIFRoZSBwYWdlIGNvbXBvbmVudCAqL1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSBwYWdlLmNvbXBvbmVudDtcclxuXHJcbiAgICAvKiogT3B0aW9uYWwgbWluaW11bSB1c2VyIHJvbGUgdG8gYWNjZXNzIHRoZSBwYWdlICovXHJcbiAgICB0aGlzLmF0TGVhc3QgPSBwYWdlLmF0TGVhc3QgIT09IHVuZGVmaW5lZCA/IHBhZ2UuYXRMZWFzdCA6IG51bGw7XHJcblxyXG4gICAgLyoqIFBhZ2Ugc2VjdGlvbnMgKi9cclxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBBZGQgYSBzZWN0aW9uIHRvIHRoZSBwYWdlLlxyXG5cdCAqIEBwYXJhbSBvcHRpb25cclxuXHQgKi9cclxuXHR0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIC8vIERvZXMgdGhlIGl0ZW0gaGF2ZSBhIHNlY3Rpb24/XHJcbiAgICAgICAgaWYob3B0aW9uLnNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGZpbmRTZWN0aW9uKG9wdGlvbi5zZWN0aW9uLnRpdGxlKTtcclxuICAgICAgICBpZihzZWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkKG9wdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBuZXcgQ29uc29sZVNlY3Rpb24oc2l0ZSwgb3B0aW9uLnNlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIFNvcnQgcGFnZSBzZWN0aW9ucyBpbnRvIG9yZGVyXHJcblx0ICovXHJcblx0dGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5zb3J0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbmRTZWN0aW9uID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuc2VjdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBJcyB0aGlzIHBhZ2UgYXZhaWxhYmxlIHRvIHRoaXMgdXNlcj9cclxuXHQgKiBAcGFyYW0gdXNlciBVc2VyIHRvIHRlc3RcclxuXHQgKi9cclxuXHR0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5hdExlYXN0KHRoaXMubWluaW11bVJvbGUodXNlcikpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIENvbXB1dGUgbWluaW11bSByb2xlIHRvIGJlIGFibGUgdG8gYWNjZXNzIHRoaXMgcGFnZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgbWluaW11bSByb2xlIGlzIGRldGVybWluZWQgYnkgd2hhdCBpcyBzcGVjaWZpZWQgZm9yXHJcbiAgICAgKiB0aGlzIHBhZ2UgcGx1cyBhbnkgcGFnZXMgbGlua2VkIHRvIGJ5IHRoaXMgcGFnZS5cclxuXHQgKiBAcGFyYW0gdXNlclxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHRoaXMubWluaW11bVJvbGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgbGV0IHJvbGVMZWFzdCA9IHRoaXMuYXRMZWFzdDtcclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IE9iamVjdChyb2xlTGVhc3QpKSB7XHJcbiAgICAgICAgICAgIHJvbGVMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChyb2xlTGVhc3QudGFnLCByb2xlTGVhc3QuZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJpb3JpdHlMZWFzdCA9IHRoaXMuYXRMZWFzdCAhPT0gbnVsbCA/IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHJvbGVMZWFzdCkgOiAxMDAwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbkxlYXN0ID0gc2VjdGlvbi5taW5pbXVtUm9sZSh1c2VyKTtcclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdXNlci5nZXRSb2xlUHJpb3JpdHkoc2VjdGlvbkxlYXN0KTtcclxuICAgICAgICAgICAgaWYocHJpb3JpdHkgIT09IDAgJiYgcHJpb3JpdHkgPCBwcmlvcml0eUxlYXN0KSB7XHJcbiAgICAgICAgICAgICAgICByb2xlTGVhc3QgPSBzZWN0aW9uTGVhc3Q7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxlYXN0ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7IC8vLzwgQWx3YXlzIEFETUlOXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9sZUxlYXN0O1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQge0NvbnNvbGVTZWN0aW9uT3B0aW9ufSBmcm9tICcuL0NvbnNvbGVTZWN0aW9uT3B0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBDb25zb2xlIHNlY3Rpb246IFRoZXNlIGFyZSB0aGUgPGgyPiBwYWdlIHNlY3Rpb25zXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBDb25zb2xlU2VjdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIHNlY3Rpb24pIHtcclxuICAgIHRoaXMudGl0bGUgPSBzZWN0aW9uLnRpdGxlO1xyXG4gICAgdGhpcy5vcmRlciA9IHNlY3Rpb24ub3JkZXI7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChuZXcgQ29uc29sZVNlY3Rpb25PcHRpb24oc2l0ZSwgb3B0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIuYXRMZWFzdCh0aGlzLm1pbmltdW1Sb2xlKHVzZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSB0aGUgbWluaW11bSByb2xlIGZvciBhbGwgb3B0aW9uc1xyXG4gICAgICogaW4gdGhpcyBzZWN0aW9uIHNvIHdlIGtub3cgaWYgd2UgY2FuIHNob3cgdGhlIHNlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdXNlciBBIHVzZXIsIHNvIHdlIGNhbiBrbm93IHdoYXQgdGhlIHBvc3NpYmxlIHJvbGVzIGFyZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUm9sZVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1pbmltdW1Sb2xlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByb2xlTGVhc3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBwcmlvcml0eUxlYXN0ID0gMTAwMDAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG5cdCAgICAgICAgbGV0IHJvbGUgPSBvcHRpb24uYXRMZWFzdDtcclxuXHQgICAgICAgIGlmKHJvbGUgPT09IE9iamVjdChyb2xlKSkge1xyXG5cdFx0ICAgICAgICByb2xlID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KHJvbGUudGFnLCByb2xlLmRlZmF1bHQpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdXNlci5nZXRSb2xlUHJpb3JpdHkocm9sZSk7XHJcbiAgICAgICAgICAgIGlmKHByaW9yaXR5ICE9PSAwICYmIHByaW9yaXR5IDwgcHJpb3JpdHlMZWFzdCkge1xyXG4gICAgICAgICAgICAgICAgcm9sZUxlYXN0ID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGVhc3QgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJzsgLy8vPCBBbHdheXMgQURNSU5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb2xlTGVhc3Q7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogT3B0aW9ucyBpbiBhIGNvbnNvbGUgcGFnZSBzZWN0aW9uXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnNvbGVTZWN0aW9uT3B0aW9uID0gZnVuY3Rpb24oc2l0ZSwgb3B0aW9uKSB7XHJcblx0Zm9yKGxldCBtZW1iZXIgaW4gb3B0aW9uKSB7XHJcblx0XHR0aGlzW21lbWJlcl0gPSBvcHRpb25bbWVtYmVyXTtcclxuXHR9XHJcblxyXG5cdHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG5cdFx0bGV0IGF0TGVhc3QgPSB0aGlzLmF0TGVhc3Q7XHJcblx0XHRpZihhdExlYXN0ID09PSBPYmplY3QoYXRMZWFzdCkpIHtcclxuXHRcdFx0YXRMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChhdExlYXN0LnRhZywgYXRMZWFzdC5kZWZhdWx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKGF0TGVhc3QgPT09IHVuZGVmaW5lZCB8fCB1c2VyLmF0TGVhc3QoYXRMZWFzdCkpO1xyXG5cdH1cclxufVxyXG4iLCIvKipcclxuICogS2VlcHMgdHJhY2sgb2Ygd2hhdCB0YWJsZSBjcmVhdGUvZHJvcCBvcHRpb25zIGFyZSBhdmFpbGFibGUgb24gdGhlIHNpdGUuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBDb25zb2xlVGFibGVzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy50YWJsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKHRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZXMucHVzaCh0YWJsZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3NWE2ZWViJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3NWE2ZWViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3NWE2ZWViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3NWE2ZWViJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3NWE2ZWViJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3NWE2ZWViJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTU5N2FiNjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E1OTdhYjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E1OTdhYjY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTU5N2FiNjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTU5N2FiNjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc0NmFjMWQ3XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzQ2YWMxZDcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=