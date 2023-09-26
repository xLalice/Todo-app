/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 30% 70%;\n  grid-template-rows: 100px 1fr;\n}\n\nnav {\n  background-color: #121212;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  grid-column: 1/-1;\n}\nnav > img {\n  width: 30%;\n  margin-left: 50px;\n}\n\n.sidebar {\n  background-color: #181818;\n  color: white;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n.sidebar__item {\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.todoDisplay {\n  background-color: #404040;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.addButton {\n  height: 50px;\n  font-size: 2rem;\n  font-weight: 800;\n  border: none;\n  background-color: #00ADB5;\n}\n\n.todo-card {\n  background-color: #b3b3b3;\n  padding: 20px;\n  cursor: pointer;\n}\n.todo-card > label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.todo-card > label > button {\n  color: white;\n  border: none;\n  padding: 5px;\n}\n.todo-card > label > h1 {\n  font-size: 1.5rem;\n  margin-right: auto;\n}\n\n.note-card {\n  background-color: #b3b3b3;\n  padding: 25px;\n}\n\n.details__modal {\n  min-width: 100px;\n  min-height: 100px;\n  position: relative;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.details__close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.done {\n  opacity: 0.5;\n}\n\n.delete-button {\n  background-color: transparent;\n}\n.delete-button > img {\n  height: 18px;\n  background-color: red;\n}\n\n.details-button {\n  background-color: #00ADB5;\n}\n\n.high {\n  border-left: 5px solid red; /* Change to the desired color */\n}\n\n.medium {\n  border-left: 5px solid yellow; /* Change to the desired color */\n}\n\n.low {\n  border-left: 5px solid green; /* Change to the desired color */\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: () => (/* binding */ addNote),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo),\n/* harmony export */   toggleTodoStatus: () => (/* binding */ toggleTodoStatus)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\n\n\n\nfunction addTodo(title,description,dueDate,priority, projectId = 1){\n    const todo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(title, description, dueDate, priority)\n\n    _data__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\n        if (project.id === projectId){\n            project[\"todos\"].push(todo)\n        }\n    })\n}\n\nfunction removeTodo(todoId, projectId){\n    _data__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\n        if (project.id === projectId){\n            project[\"todos\"].forEach((todo, index) => {\n                if (todoId === todo.id){\n                    project[\"todos\"].splice(index, 1)\n                }\n            })\n        }\n        \n    })\n    \n}\n\nfunction toggleTodoStatus(projectId, todoId) {\n    const project = _data__WEBPACK_IMPORTED_MODULE_1__.projects.find(project => project.id === projectId);\n\n    if (project) {\n        const todo = project.todos.find(todo => todo.id === todoId);\n\n        if (todo) {\n            todo.completed = !todo.completed;\n            (0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.updateTodoUI)(todoId); \n            \n        }\n    }\n}\n\nfunction addProject(name){\n    _data__WEBPACK_IMPORTED_MODULE_1__.projects.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.ProjectFactory)(name))\n}\n\nfunction addNote(title, details){\n    const note = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.NoteFactory)(title, details)\n    _data__WEBPACK_IMPORTED_MODULE_1__.notes.push(note)\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/crud.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notes: () => (/* binding */ notes),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/factories.js\");\n\n\nconst projects = [\n    {\n        id: 1,\n        name: \"Default\",\n        todos: [\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Workout\", \"Chest and arms\", \"2023-09-25\", \"High\", 1),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Cardio\", \"30 minutes on the treadmill\", \"2023-09-26\", \"Medium\", 1),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Stretching\", \"10 minutes of stretching\", \"2023-09-27\", \"Low\", 1)\n        ]\n    },\n    {\n        id: 2,\n        name: \"Home Improvement\",\n        todos: [\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Paint the living room\", \"Buy paint and brushes\", \"2023-10-05\", \"High\", 2),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Fix the leaky faucet\", \"Turn off the water supply\", \"2023-10-10\", \"Medium\", 2),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Clean the gutters\", \"Use a ladder and gloves\", \"2023-10-15\", \"Low\", 2)\n        ]\n    },\n    {\n        id: 3,\n        name: \"Work Projects\",\n        todos: [\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Client Presentation\", \"Prepare slides and data\", \"2023-09-30\", \"High\", 3),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Code Review\", \"Check for bugs and performance\", \"2023-10-03\", \"Medium\"),\n            (0,_factories__WEBPACK_IMPORTED_MODULE_0__.TodoFactory)(\"Team Meeting\", \"Discuss project progress\", \"2023-10-06\", \"Low\", 3)\n        ]\n    }\n];\n\nconst notes = [\n    {\n        title: \"Note 1\",\n        details: \"This is the first dummy note. It has some details.\"\n    },\n    {\n        title: \"Note 2\",\n        details: \"The second dummy note has different details than the first one.\"\n    },\n    {\n        title: \"Note 3\",\n        details: \"This is another note with some additional details.\"\n    }\n]\n\n\n\n//# sourceURL=webpack://todo-app/./src/data.js?");

/***/ }),

/***/ "./src/displayTodo.js":
/*!****************************!*\
  !*** ./src/displayTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayNotes: () => (/* binding */ displayNotes),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   displayTodos: () => (/* binding */ displayTodos),\n/* harmony export */   toggleProjectDisplay: () => (/* binding */ toggleProjectDisplay),\n/* harmony export */   updateTodoUI: () => (/* binding */ updateTodoUI)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud */ \"./src/crud.js\");\n\n\n\n\n\nlet projectsDisplayed = false;\n\nfunction detailsModal(details){\n    const content = document.querySelector(\"#content\")\n\n    const modal = document.createElement(\"dialog\")\n    modal.classList.add(\"details__modal\")\n\n    const text = document.createElement(\"p\")\n    text.textContent = details\n    modal.appendChild(text)\n\n    const closeButton = document.createElement(\"button\")\n    closeButton.textContent = \"X\"\n    closeButton.classList.add(\"details__close-button\")\n    closeButton.addEventListener(\"click\", _forms__WEBPACK_IMPORTED_MODULE_2__.closeModal)\n\n\n    modal.appendChild(closeButton)\n    content.appendChild(modal)\n    ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.openModal)(modal)\n}\n\nfunction displayTodos(projectName) {\n    const todoDisplay = document.querySelector(\".todoDisplay\");\n    emptyDiv(todoDisplay);\n\n    _data__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\n        if (project.name === projectName) {\n            project.todos.forEach(item => {\n                const card = document.createElement(\"div\");\n                card.classList.add(\"todo-card\");\n                card.classList.add(item.priority.toLowerCase())\n                card.id = `todo-${item.id}`;\n                card.setAttribute('data-priority', item.priority.toLowerCase());\n\n                // Create a label element to wrap the content and checkbox\n                const label = document.createElement(\"label\");\n\n                const content = `\n                    <h1>${item.title}</h1>\n                    <p>${item.dueDate}</p>\n                `;\n\n                const detailsButton = document.createElement(\"button\");\n                detailsButton.textContent = \"Details\";\n                detailsButton.classList.add(\"details-button\")\n                detailsButton.addEventListener(\"click\", () => detailsModal(item.description));\n\n                const completeCheckbox = document.createElement(\"input\");\n                completeCheckbox.type = \"checkbox\";\n                completeCheckbox.classList.add(\"todo-checkbox\");\n                completeCheckbox.id = `checkbox-${item.id}`;\n                \n                label.htmlFor = `checkbox-${item.id}`;\n                label.addEventListener(\"click\", (event) => {\n                    completeCheckbox.checked = !completeCheckbox.checked;\n                    (0,_crud__WEBPACK_IMPORTED_MODULE_3__.toggleTodoStatus)(project.id, item.id);\n                });\n\n                const deleteButton = document.createElement(\"button\")\n                deleteButton.classList.add(\"delete-button\");\n                const deleteIcon = new Image()\n                deleteIcon.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_0__\n\n                deleteButton.addEventListener(\"click\", (event) => {\n                    event.stopPropagation();\n                    (0,_crud__WEBPACK_IMPORTED_MODULE_3__.removeTodo)(item.id, project.id);\n                    card.remove();\n                });\n\n                deleteButton.appendChild(deleteIcon);\n\n\n                label.appendChild(completeCheckbox);\n                label.innerHTML += content;\n                label.appendChild(detailsButton);\n                label.appendChild(deleteButton)\n\n                card.appendChild(label);\n\n                todoDisplay.appendChild(card);\n            });\n        }\n    });\n}\n\n\nfunction toggleProjectDisplay(){\n    projectsDisplayed = !projectsDisplayed\n    if (projectsDisplayed){\n        displayProjects()\n    } else {\n        emptyDiv(document.querySelector(\".projectsDiv\"))\n    }\n}\n\nfunction displayProjects(){\n    const projectsDiv = document.querySelector(\".projectsDiv\")\n    emptyDiv(projectsDiv)\n    _data__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {\n        if (project.id === 1){\n            return;\n        }\n        const projectName = document.createElement(\"div\")\n        projectName.textContent = project.name\n        projectsDiv.appendChild(projectName)\n        projectName.addEventListener(\"click\", () => displayTodos(project.name))\n    })\n}\n\nfunction displayNotes(){\n    const todoDisplay = document.querySelector(\".todoDisplay\")\n    emptyDiv(todoDisplay)\n\n    _data__WEBPACK_IMPORTED_MODULE_1__.notes.forEach(note => {\n        const noteCard = document.createElement(\"div\")\n        noteCard.classList.add(\"note-card\")\n        \n        const content = `\n            <h1>${note.title}</h1>\n            <p>${note.details}</p>\n        `\n\n        noteCard.innerHTML = content\n\n        todoDisplay.appendChild(noteCard)\n    })\n}\n\nfunction emptyDiv(node){\n    node.innerHTML = \"\"\n}\n\nfunction updateTodoUI(todoId) {\n    const todoElement = document.getElementById(`todo-${todoId}`);\n  \n    if (todoElement) {\n      let todoItem = null;\n  \n      const project = _data__WEBPACK_IMPORTED_MODULE_1__.projects.find(project => project.todos.some(todo => todo.id === todoId));\n        console.log(project)\n      if (project) {\n        todoItem = project.todos.find(todo => todo.id === todoId);\n      }\n  \n      if (todoItem) {\n        if (todoItem.completed) {\n          todoElement.classList.add('done');\n        } else {\n          todoElement.classList.remove('done');\n        }\n        }\n    }\n    else {\n        console.log(\"Not Found\")\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/displayTodo.js?");

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoteFactory: () => (/* binding */ NoteFactory),\n/* harmony export */   ProjectFactory: () => (/* binding */ ProjectFactory),\n/* harmony export */   TodoFactory: () => (/* binding */ TodoFactory)\n/* harmony export */ });\nfunction TodoFactory(title, description, dueDate, priority, projectId){\n    const uniqueId = generateUniqueId()\n    return {\n        id: uniqueId,\n        title,\n        description,\n        dueDate,\n        priority,\n        projectId,\n        completed: false\n    }\n}\n\nfunction ProjectFactory(name){\n    return {\n        id: generateUniqueId(),\n        name,\n        todos: []\n    }\n}\n\nfunction NoteFactory(title, details){\n    return {\n        id: generateUniqueId(),\n        title,\n        details\n    }\n}\n\nfunction generateUniqueId() {\n    const randomPart = Math.random().toString(36).substr(2, 9);\n  \n    const timestampPart = new Date().getTime().toString(36);\n  \n    const uniqueId = timestampPart + randomPart;\n  \n    return uniqueId;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/factories.js?");

/***/ }),

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   firstLoad: () => (/* binding */ firstLoad)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\")\n\nfunction setNav(){\n    const nav = document.createElement(\"nav\")\n    const myLogo = new Image()\n    myLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n    nav.appendChild(myLogo)\n    content.appendChild(nav)\n}\n\nfunction setSidebar(){\n    const sidebar = document.createElement(\"div\")\n    sidebar.classList.add(\"sidebar\")\n    \n    const home = document.createElement(\"div\")\n    home.classList.add(\"sidebar__item\")\n    home.textContent = \"Home\"\n    home.addEventListener(\"click\", () => (0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodos)(\"Default\"))\n    const projects = document.createElement(\"div\")\n    projects.classList.add(\"sidebar__item\")\n    projects.textContent = \"Projects\"\n    projects.addEventListener(\"click\", _displayTodo__WEBPACK_IMPORTED_MODULE_2__.toggleProjectDisplay)\n    const projectsDiv = document.createElement(\"div\")\n    projectsDiv.classList.add(\"projectsDiv\")\n\n\n    const notes = document.createElement(\"div\")\n    notes.classList.add(\"sidebar__item\")\n    notes.textContent = \"Notes\"\n    notes.addEventListener(\"click\", _displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayNotes)\n\n\n    const addButton = document.createElement(\"button\")\n    addButton.classList.add(\"addButton\")\n    addButton.textContent = \"+\"\n    addButton.addEventListener(\"click\", _forms__WEBPACK_IMPORTED_MODULE_1__.modal)\n\n    sidebar.appendChild(home)\n    sidebar.appendChild(projects)\n    sidebar.appendChild(projectsDiv)\n    sidebar.appendChild(notes)\n    sidebar.appendChild(addButton)\n    \n\n    content.appendChild(sidebar)\n}\n\nfunction setTodoDisplay(){\n    const todoDisplay = document.createElement(\"div\")\n    todoDisplay.classList.add(\"todoDisplay\")\n\n    content.appendChild(todoDisplay)\n}\n\n\n\nfunction firstLoad(){\n    setNav()\n    setSidebar()\n    setTodoDisplay()\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodos)(\"Default\")\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayProjects)()\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/firstLoad.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ \"./src/crud.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n\nfunction modal(){\n    const modal = document.createElement(\"dialog\")\n\n    const todoBtn = document.createElement(\"button\")\n    todoBtn.textContent = \"To Do\"\n    const projectBtn = document.createElement(\"button\")\n    projectBtn.textContent = \"Project\"\n    const noteBtn = document.createElement(\"button\")\n    noteBtn.textContent = \"Note\"\n\n    const formDiv = document.createElement(\"div\")\n    todoBtn.addEventListener(\"click\", () => {\n        emptyDiv(formDiv)\n        formDiv.appendChild(createTodoForm())\n    })\n    projectBtn.addEventListener(\"click\", () => {\n        emptyDiv(formDiv)\n        formDiv.appendChild(createProjectForm())\n    })\n    noteBtn.addEventListener(\"click\", () => {\n        emptyDiv(formDiv)\n        formDiv.appendChild(createNoteForm())\n    })\n\n    modal.appendChild(todoBtn)\n    modal.appendChild(projectBtn)\n    modal.appendChild(noteBtn)\n    modal.appendChild(formDiv)\n    content.appendChild(modal)\n\n    openModal(modal)\n}\n\nfunction openModal(node){\n    \n    node.showModal()\n}\n\nfunction closeModal(){\n    const modal = document.querySelector(\"dialog\")\n    modal.remove()\n}\n\nfunction emptyDiv(node) {\n    if (node) {\n      node.innerHTML = '';\n    }\n}\n\nfunction getProjectNames(){\n  return _data__WEBPACK_IMPORTED_MODULE_2__.projects.map(project => project.name)\n}\n\n\nfunction createTodoForm() {\n    const todoForm = document.createElement('form');\n    todoForm.method = \"dialog\"\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Title:';\n    const titleInput = document.createElement('input');\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('name', 'todoTitle');\n  \n    const descriptionLabel = document.createElement('label');\n    descriptionLabel.textContent = 'Description:';\n    const descriptionInput = document.createElement('input');\n    descriptionInput.setAttribute('type', 'text');\n    descriptionInput.setAttribute('name', 'todoDescription');\n  \n    const dueDateLabel = document.createElement('label');\n    dueDateLabel.textContent = 'Due Date:';\n    const dueDateInput = document.createElement('input');\n    dueDateInput.setAttribute('type', 'date');\n    dueDateInput.setAttribute('name', 'todoDueDate');\n  \n    const priorityLabel = document.createElement('label');\n    priorityLabel.textContent = 'Priority:';\n    const priorityInput = document.createElement('select');\n    priorityInput.setAttribute('name', 'todoPriority');\n    const priorityOptions = ['High', 'Medium', 'Low'];\n  \n    for (const option of priorityOptions) {\n      const optionElement = document.createElement('option');\n      optionElement.textContent = option;\n      priorityInput.appendChild(optionElement);\n    }\n  \n    const projectLabel = document.createElement('label');\n    projectLabel.textContent = 'Project:';\n    const projectInput = document.createElement('select');\n    const projectOptions = getProjectNames()\n\n    for (const option of projectOptions) {\n      const optionElement = document.createElement('option');\n      optionElement.textContent = option;\n      projectInput.appendChild(optionElement);\n    }\n\n    projectInput.setAttribute('name', 'todoProject');\n  \n    // Create a submit button\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.textContent = 'Add Todo';\n  \n    // Append input fields and button to the form\n    todoForm.appendChild(titleLabel);\n    todoForm.appendChild(titleInput);\n    todoForm.appendChild(descriptionLabel);\n    todoForm.appendChild(descriptionInput);\n    todoForm.appendChild(dueDateLabel);\n    todoForm.appendChild(dueDateInput);\n    todoForm.appendChild(priorityLabel);\n    todoForm.appendChild(priorityInput);\n    todoForm.appendChild(projectLabel);\n    todoForm.appendChild(projectInput);\n    todoForm.appendChild(submitButton);\n\n    todoForm.addEventListener(\"submit\", todoFormHandler)\n  \n    return todoForm;\n}\n  \nfunction createProjectForm() {\n    const projectForm = document.createElement('form');\n\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Project Title:';\n    const titleInput = document.createElement('input');\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('name', 'projectTitle');\n\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.textContent = 'Create Project';\n\n    projectForm.appendChild(titleLabel);\n    projectForm.appendChild(titleInput);\n    projectForm.appendChild(submitButton);\n\n    projectForm.addEventListener(\"submit\", projectFormHandler)\n\n    return projectForm;\n}\n\nfunction createNoteForm() {\n    const noteForm = document.createElement('form');\n\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Note Title:';\n    const titleInput = document.createElement('input');\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('name', 'noteTitle');\n\n    const detailsLabel = document.createElement('label');\n    detailsLabel.textContent = 'Note Details:';\n    const detailsTextarea = document.createElement('textarea');\n    detailsTextarea.setAttribute('name', 'noteDetails');\n    detailsTextarea.setAttribute('rows', '4'); // Adjust rows as needed\n\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.textContent = 'Add Note';\n\n    noteForm.appendChild(titleLabel);\n    noteForm.appendChild(titleInput);\n    noteForm.appendChild(detailsLabel);\n    noteForm.appendChild(detailsTextarea);\n    noteForm.appendChild(submitButton);\n\n    noteForm.addEventListener(\"submit\", noteFormHandler)\n\n    return noteForm;\n}\n    \nfunction todoFormHandler(event){\n    event.preventDefault()\n    const title = event.target.todoTitle.value;\n    const description = event.target.todoDescription.value;\n    const dueDate = event.target.todoDueDate.value;\n    const priority = event.target.todoPriority.value;\n    const projectName = event.target.todoProject.value;\n\n    (0,_crud__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, description, dueDate,priority, projectName)\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodos)(projectName)\n\n    event.target.reset();\n    closeModal()\n}\n\nfunction projectFormHandler(event){\n  event.preventDefault()\n  const title = event.target.projectTitle.value;\n  (0,_crud__WEBPACK_IMPORTED_MODULE_0__.addProject)(title)\n  ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()\n  event.target.reset();\n  closeModal()\n}\n\nfunction noteFormHandler(event){\n  event.preventDefault()\n  const title = event.target.noteTitle.value;\n  const details = event.target.noteDetail.value;\n  (0,_crud__WEBPACK_IMPORTED_MODULE_0__.addNote)(title, details)\n  event.target.reset();\n  closeModal()\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstLoad */ \"./src/firstLoad.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bde3412e0875d7cf1fc9.png\";\n\n//# sourceURL=webpack://todo-app/./src/assets/delete.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c401c2c162c542036c1b.png\";\n\n//# sourceURL=webpack://todo-app/./src/assets/logo.png?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;