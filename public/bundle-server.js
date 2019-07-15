/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-addons-css-transition-group'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n//note: very little touch up was done on the front end by me, just accomodating changes to perform SSR\n\n\n\n\n\nvar Calendar =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Calendar, _React$Component);\n\n  function Calendar(props) {\n    var _this;\n\n    _classCallCheck(this, Calendar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));\n    console.log('gettgin static props', _this.props);\n    _this.state = {\n      beginning_date: null,\n      end_date: null,\n      beginning_time: null,\n      end_time: null,\n      unavailable_time: null,\n      curDateTime: Date.now()\n    };\n    return _this;\n  }\n\n  _createClass(Calendar, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('ComponentDidMount...\\nEvent handler hooks not working because of passing down props prior to SSR'); //   //Get state props if not present\n      //   if(this.state.photos.length==0){ \n      //   //Get listing Id from address bar and escape it\n      //   let listingNumber = JSON.stringify(window.location.pathname.slice('/').split('/')[1]);\n      //   //Make API request with listing ID as params\n      //   fetch(`/carousel/photos/${listingNumber}`)\n      //     .then(data => data.json())\n      //     .then(data => {\n      //       console.log(data);\n      //       let photos = [];\n      //       for(let i in data){\n      //         photos.push(data[i])\n      //       }\n      //       //Update state with photos\n      //       this.setState({photos},()=>console.log(state updated));\n      //     });\n      //   }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"Calendar\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Select start date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarHeader, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarBody, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"button\"\n      }));\n    }\n  }]);\n\n  return Calendar;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //for SSR Carousel component has to be exported, however Babel's JS transpiler \n//will not see a window global property because it resides on the browser only\n//\n\n\nif (typeof window !== 'undefined') {\n  //hydrate places the event handler hooks onto the page, however it doesn't work because it doesn't expect state to contain props\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Calendar, null), document.getElementById('app-root'), console.log('hydration triggered A:', JSON.stringify(document.getElementById('carousel-container'))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9ub3RlOiB2ZXJ5IGxpdHRsZSB0b3VjaCB1cCB3YXMgZG9uZSBvbiB0aGUgZnJvbnQgZW5kIGJ5IG1lLCBqdXN0IGFjY29tb2RhdGluZyBjaGFuZ2VzIHRvIHBlcmZvcm0gU1NSXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc29sZS5sb2coJ2dldHRnaW4gc3RhdGljIHByb3BzJywgdGhpcy5wcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgYmVnaW5uaW5nX2RhdGU6bnVsbCxcclxuICAgICAgICBlbmRfZGF0ZTpudWxsLFxyXG4gICAgICAgIGJlZ2lubmluZ190aW1lOm51bGwsXHJcbiAgICAgICAgZW5kX3RpbWU6bnVsbCxcclxuICAgICAgICB1bmF2YWlsYWJsZV90aW1lOiBudWxsLFxyXG4gICAgICAgIGN1ckRhdGVUaW1lOiBEYXRlLm5vdygpXHJcbiAgICB9O1xyXG5cclxuICAgXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnREaWRNb3VudC4uLlxcbkV2ZW50IGhhbmRsZXIgaG9va3Mgbm90IHdvcmtpbmcgYmVjYXVzZSBvZiBwYXNzaW5nIGRvd24gcHJvcHMgcHJpb3IgdG8gU1NSJylcclxuXHJcbiAgLy8gICAvL0dldCBzdGF0ZSBwcm9wcyBpZiBub3QgcHJlc2VudFxyXG4gIC8vICAgaWYodGhpcy5zdGF0ZS5waG90b3MubGVuZ3RoPT0wKXsgXHJcblxyXG4gIC8vICAgLy9HZXQgbGlzdGluZyBJZCBmcm9tIGFkZHJlc3MgYmFyIGFuZCBlc2NhcGUgaXRcclxuICAvLyAgIGxldCBsaXN0aW5nTnVtYmVyID0gSlNPTi5zdHJpbmdpZnkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKCcvJykuc3BsaXQoJy8nKVsxXSk7XHJcblxyXG4gIC8vICAgLy9NYWtlIEFQSSByZXF1ZXN0IHdpdGggbGlzdGluZyBJRCBhcyBwYXJhbXNcclxuICAvLyAgIGZldGNoKGAvY2Fyb3VzZWwvcGhvdG9zLyR7bGlzdGluZ051bWJlcn1gKVxyXG4gIC8vICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihkYXRhID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyAgICAgICBsZXQgcGhvdG9zID0gW107XHJcbiAgLy8gICAgICAgZm9yKGxldCBpIGluIGRhdGEpe1xyXG4gIC8vICAgICAgICAgcGhvdG9zLnB1c2goZGF0YVtpXSlcclxuICAvLyAgICAgICB9XHJcblxyXG4gIC8vICAgICAgIC8vVXBkYXRlIHN0YXRlIHdpdGggcGhvdG9zXHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7cGhvdG9zfSwoKT0+Y29uc29sZS5sb2coc3RhdGUgdXBkYXRlZCkpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICBcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIENhbGVuZGFyXHJcbiAgICAgICAgICAgIDxsYWJlbD5TZWxlY3Qgc3RhcnQgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJIZWFkZXIvPlxyXG4gICAgICAgICAgPENhbGVuZGFyQm9keS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIj48L2lucHV0PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbi8vZm9yIFNTUiBDYXJvdXNlbCBjb21wb25lbnQgaGFzIHRvIGJlIGV4cG9ydGVkLCBob3dldmVyIEJhYmVsJ3MgSlMgdHJhbnNwaWxlciBcclxuLy93aWxsIG5vdCBzZWUgYSB3aW5kb3cgZ2xvYmFsIHByb3BlcnR5IGJlY2F1c2UgaXQgcmVzaWRlcyBvbiB0aGUgYnJvd3NlciBvbmx5XHJcbi8vXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIC8vaHlkcmF0ZSBwbGFjZXMgdGhlIGV2ZW50IGhhbmRsZXIgaG9va3Mgb250byB0aGUgcGFnZSwgaG93ZXZlciBpdCBkb2Vzbid0IHdvcmsgYmVjYXVzZSBpdCBkb2Vzbid0IGV4cGVjdCBzdGF0ZSB0byBjb250YWluIHByb3BzXHJcbiAgUmVhY3RET00uaHlkcmF0ZSg8Q2FsZW5kYXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtcm9vdCcpLCBjb25zb2xlLmxvZygnaHlkcmF0aW9uIHRyaWdnZXJlZCBBOicsIEpTT04uc3RyaW5naWZ5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbC1jb250YWluZXInKSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBSUE7QUFNQTtBQUFBO0FBR0E7Ozs7QUF2REE7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ }),

/***/ "./database/index.js":
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//////+++Database Transactions+++//////\n//Import dependencies\n//\nvar _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'mongodb'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n    MongoClient = _require.MongoClient; // const URLsFile = require('../database/sample-data/sampleData.json');\n\n\nvar _require$DATABASE = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).DATABASE,\n    connectionStr = _require$DATABASE.connectionStr,\n    dbName = _require$DATABASE.dbName,\n    colName = _require$DATABASE.colName;\n\nvar db = client.db(dbName);\nvar collection = db.collection(colName); //all listing photos are bundled into 1000 batches, first batch has an id of 1\n\nvar batchId = Math.floor(listingId / 1000) + 1;\nvar batchListing = listingId % 1000;\nconsole.log('Batch: #' + batchId + '; Batch index ' + batchListing); //quering the database using the batch id as filter argument\n\nvar time = Date.now();\ncollection.findOne({\n  'batchId': batchId\n}, function (err, data) {\n  if (err) callback(err);else {\n    console.log('reading OP time: ', Date.now() - time); //on success de-concatenate bundled listing records and resolve target listing\n\n    var targetDoc = data.bundle.split('~')[batchListing]; //read from File containing all URLs and assign key-value pairs to URLs object\n\n    callback(null, URLs);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2luZGV4LmpzPzdhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vKysrRGF0YWJhc2UgVHJhbnNhY3Rpb25zKysrLy8vLy8vXHJcblxyXG4vL0ltcG9ydCBkZXBlbmRlbmNpZXNcclxuLy9cclxuY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xyXG5cclxuLy8gY29uc3QgVVJMc0ZpbGUgPSByZXF1aXJlKCcuLi9kYXRhYmFzZS9zYW1wbGUtZGF0YS9zYW1wbGVEYXRhLmpzb24nKTtcclxuY29uc3QgeyBjb25uZWN0aW9uU3RyLCBkYk5hbWUsIGNvbE5hbWUgfSA9IHJlcXVpcmUoJy4vY29uZmlnJykuREFUQUJBU0U7XHJcblxyXG5jb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpO1xyXG5jb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihjb2xOYW1lKTtcclxuXHJcbi8vYWxsIGxpc3RpbmcgcGhvdG9zIGFyZSBidW5kbGVkIGludG8gMTAwMCBiYXRjaGVzLCBmaXJzdCBiYXRjaCBoYXMgYW4gaWQgb2YgMVxyXG5sZXQgYmF0Y2hJZCA9IE1hdGguZmxvb3IobGlzdGluZ0lkIC8gMTAwMCkgKyAxO1xyXG5sZXQgYmF0Y2hMaXN0aW5nID0gbGlzdGluZ0lkICUgMTAwMDtcclxuY29uc29sZS5sb2coJ0JhdGNoOiAjJyArIGJhdGNoSWQgKyAnOyBCYXRjaCBpbmRleCAnICsgYmF0Y2hMaXN0aW5nKTtcclxuXHJcbi8vcXVlcmluZyB0aGUgZGF0YWJhc2UgdXNpbmcgdGhlIGJhdGNoIGlkIGFzIGZpbHRlciBhcmd1bWVudFxyXG5sZXQgdGltZSA9IERhdGUubm93KClcclxuY29sbGVjdGlvbi5maW5kT25lKHsgJ2JhdGNoSWQnOiBiYXRjaElkIH0sIChlcnIsIGRhdGEpID0+IHtcclxuICAgIGlmIChlcnIpIGNhbGxiYWNrKGVycilcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkaW5nIE9QIHRpbWU6ICcsIERhdGUubm93KCkgLSB0aW1lKVxyXG4gICAgICAgIC8vb24gc3VjY2VzcyBkZS1jb25jYXRlbmF0ZSBidW5kbGVkIGxpc3RpbmcgcmVjb3JkcyBhbmQgcmVzb2x2ZSB0YXJnZXQgbGlzdGluZ1xyXG4gICAgICAgIGxldCB0YXJnZXREb2MgPSBkYXRhLmJ1bmRsZS5zcGxpdCgnficpW2JhdGNoTGlzdGluZ107XHJcblxyXG5cclxuICAgICAgICAvL3JlYWQgZnJvbSBGaWxlIGNvbnRhaW5pbmcgYWxsIFVSTHMgYW5kIGFzc2lnbiBrZXktdmFsdWUgcGFpcnMgdG8gVVJMcyBvYmplY3RcclxuICAgICAgICBjYWxsYmFjayhudWxsLCBVUkxzKTtcclxuICAgIH1cclxufSlcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/index.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("///////+++Express Server+++////////\n//[DEV ONLY] import new relic module for reporting\n//require('newrelic');\n//environment configs\nvar PORT = process.env.PORT || 3010; //Import dependencies\n//\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar morgan = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'morgan'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar compression = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'compression'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); //server-side-rendering dependencies\n\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar _require = __webpack_require__(/*! react-dom/server */ \"react-dom/server\"),\n    renderToNodeStream = _require.renderToNodeStream; //components & database driver\n\n\nvar Calendar = __webpack_require__(/*! ../client/app.jsx */ \"./client/app.jsx\")[\"default\"];\n\nvar db = __webpack_require__(/*! ../database/index.js */ \"./database/index.js\"); //instantiate server & apply middleware\n//\n\n\nvar app = express();\napp.use(morgan('dev'));\napp.use(bodyParser.json());\napp.use(compression()); //  Serve Routes\n//\n//set default directory to server static files\n\napp.use('/calendar/api/static/', express[\"static\"](path.resolve(__dirname, '../public'))); //[NOT FOR PROXY] serve html on SSR\n\napp.get('/', function (req, res) {\n  res.sendStatus(200); // //send async response in multiple blocks using a stream\n  // res.write(getInitialHtml());\n  // //get react components\n  // getComponentWithProps(listingId, (err, stream) => {\n  //   if (err) console.log('error getting Carousel component: ', err);\n  //   else {\n  //     stream.pipe(res, { end: 'false' })\n  //     stream.on('end', () => res.end(getFinalHtml()))       \n  //     }\n  // });\n}); // //[NOT USED IN SSR] serve the photos \n// app.get('/carousel/photos/:id', (req, res) => {\n//   const listingId = req.params.id;\n//   if (listingId < 1 || listingId > 10000000) {\n//     res.sendStatus(405)\n//   }\n//   db.getCarouselImages(listingId, (err, URLs) => {\n//     // If nothing is found, respond with 404\n//     if (err) res.sendStatus(404);\n//     else res.json(Object.values(URLs));\n//   })\n// });\n//{PROXY REQUESTS] send the Carousel component to the proxy\n\napp.get('/:id(\\\\d+)/', function (req, res) {\n  console.log('ID:::', req.params);\n  var listingId = req.params.id; //validation now done on the proxy\n  // if (listingId < 1 || listingId > 10000000) {\n  //   res.sendStatus(407)\n  // }    \n  //get react components\n\n  getComponentWithProps(listingId, function (err, stream) {\n    if (err) console.log('error getting Carousel component: ', err);\n    stream.pipe(res);\n    stream.on('end', res.end('done'));\n  });\n}); //  Export server for testing\n// export default app;\n//get the body html markup\n\nvar getComponentWithProps = function getComponentWithProps(listingId, callback) {\n  //get prop data from database\n  db.getCarouselImages(listingId, function (err, URLs) {\n    if (err) callback(err);else {\n      //interpolate component with data into HTML body and return it\n      callback(null, renderToNodeStream(React.createElement(Calendar, null)));\n    }\n  });\n}; //HTML before the component are attached on SSR\n//\n\n\nvar getInitialHtml = function getInitialHtml() {\n  return \"\\n    <!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <title>Image Carousel Component</title>    \\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n    <link defer rel=\\\"stylesheet\\\" type=\\\"text/css\\\" media=\\\"screen\\\" href=\\\"/carousel/static/reset.css\\\" />\\n    <link defer rel=\\\"stylesheet\\\" type=\\\"text/css\\\" media=\\\"screen\\\" href=\\\"/carousel/static/carousel-style.css\\\" />    \\n    </head>\\n    <body>\\n    <div id=\\\"carousel-container\\\">\";\n}; //HTML after the components are attached on SSR\n//\n\n\nvar getFinalHtml = function getFinalHtml() {\n  return \" \\n    </div>   \\n    </body>\\n    <script defer src='/carousel/static/bundle.js><script>\\n  </html>\";\n}; //Initiate request event handler  \n\n\napp.listen(PORT, function (err, data) {\n  if (err) return console.log('Error starting server:', err);\n  console.log(\"Successfully started server on http://localhost:\".concat(PORT));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vLy8vLy8rKytFeHByZXNzIFNlcnZlcisrKy8vLy8vLy8vXHJcblxyXG4vL1tERVYgT05MWV0gaW1wb3J0IG5ldyByZWxpYyBtb2R1bGUgZm9yIHJlcG9ydGluZ1xyXG4vL3JlcXVpcmUoJ25ld3JlbGljJyk7XHJcblxyXG4vL2Vudmlyb25tZW50IGNvbmZpZ3NcclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAxMDtcclxuXHJcblxyXG5cclxuLy9JbXBvcnQgZGVwZW5kZW5jaWVzXHJcbi8vXHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO1xyXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgY29tcHJlc3Npb24gPSByZXF1aXJlKCdjb21wcmVzc2lvbicpO1xyXG5cclxuLy9zZXJ2ZXItc2lkZS1yZW5kZXJpbmcgZGVwZW5kZW5jaWVzXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuY29uc3Qge3JlbmRlclRvTm9kZVN0cmVhbSB9ID0gcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpO1xyXG5cclxuLy9jb21wb25lbnRzICYgZGF0YWJhc2UgZHJpdmVyXHJcbmNvbnN0IENhbGVuZGFyID0gcmVxdWlyZSgnLi4vY2xpZW50L2FwcC5qc3gnKS5kZWZhdWx0O1xyXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlL2luZGV4LmpzJyk7XHJcblxyXG4vL2luc3RhbnRpYXRlIHNlcnZlciAmIGFwcGx5IG1pZGRsZXdhcmVcclxuLy9cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuXHJcblxyXG4vLyAgU2VydmUgUm91dGVzXHJcbi8vXHJcblxyXG4vL3NldCBkZWZhdWx0IGRpcmVjdG9yeSB0byBzZXJ2ZXIgc3RhdGljIGZpbGVzXHJcbmFwcC51c2UoJy9jYWxlbmRhci9hcGkvc3RhdGljLycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpO1xyXG5cclxuLy9bTk9UIEZPUiBQUk9YWV0gc2VydmUgaHRtbCBvbiBTU1JcclxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gXHJcbnJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbiBcclxuICAvLyAvL3NlbmQgYXN5bmMgcmVzcG9uc2UgaW4gbXVsdGlwbGUgYmxvY2tzIHVzaW5nIGEgc3RyZWFtXHJcbiAgLy8gcmVzLndyaXRlKGdldEluaXRpYWxIdG1sKCkpO1xyXG5cclxuICAvLyAvL2dldCByZWFjdCBjb21wb25lbnRzXHJcbiAgLy8gZ2V0Q29tcG9uZW50V2l0aFByb3BzKGxpc3RpbmdJZCwgKGVyciwgc3RyZWFtKSA9PiB7XHJcbiAgLy8gICBpZiAoZXJyKSBjb25zb2xlLmxvZygnZXJyb3IgZ2V0dGluZyBDYXJvdXNlbCBjb21wb25lbnQ6ICcsIGVycik7XHJcbiAgLy8gICBlbHNlIHtcclxuICAvLyAgICAgc3RyZWFtLnBpcGUocmVzLCB7IGVuZDogJ2ZhbHNlJyB9KVxyXG4gIC8vICAgICBzdHJlYW0ub24oJ2VuZCcsICgpID0+IHJlcy5lbmQoZ2V0RmluYWxIdG1sKCkpKSAgICAgICBcclxuICAvLyAgICAgfVxyXG4gIC8vIH0pO1xyXG59KTtcclxuXHJcbi8vIC8vW05PVCBVU0VEIElOIFNTUl0gc2VydmUgdGhlIHBob3RvcyBcclxuLy8gYXBwLmdldCgnL2Nhcm91c2VsL3Bob3Rvcy86aWQnLCAocmVxLCByZXMpID0+IHtcclxuLy8gICBjb25zdCBsaXN0aW5nSWQgPSByZXEucGFyYW1zLmlkO1xyXG4vLyAgIGlmIChsaXN0aW5nSWQgPCAxIHx8IGxpc3RpbmdJZCA+IDEwMDAwMDAwKSB7XHJcbi8vICAgICByZXMuc2VuZFN0YXR1cyg0MDUpXHJcbi8vICAgfVxyXG4vLyAgIGRiLmdldENhcm91c2VsSW1hZ2VzKGxpc3RpbmdJZCwgKGVyciwgVVJMcykgPT4ge1xyXG4vLyAgICAgLy8gSWYgbm90aGluZyBpcyBmb3VuZCwgcmVzcG9uZCB3aXRoIDQwNFxyXG4vLyAgICAgaWYgKGVycikgcmVzLnNlbmRTdGF0dXMoNDA0KTtcclxuLy8gICAgIGVsc2UgcmVzLmpzb24oT2JqZWN0LnZhbHVlcyhVUkxzKSk7XHJcbi8vICAgfSlcclxuLy8gfSk7XHJcblxyXG5cclxuICAvL3tQUk9YWSBSRVFVRVNUU10gc2VuZCB0aGUgQ2Fyb3VzZWwgY29tcG9uZW50IHRvIHRoZSBwcm94eVxyXG4gIGFwcC5nZXQoJy86aWQoXFxcXGQrKS8nLCAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdJRDo6OicsIHJlcS5wYXJhbXMpXHJcbiAgICBsZXQgbGlzdGluZ0lkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICAvL3ZhbGlkYXRpb24gbm93IGRvbmUgb24gdGhlIHByb3h5XHJcbiAgICAvLyBpZiAobGlzdGluZ0lkIDwgMSB8fCBsaXN0aW5nSWQgPiAxMDAwMDAwMCkge1xyXG4gICAgLy8gICByZXMuc2VuZFN0YXR1cyg0MDcpXHJcbiAgICAvLyB9ICAgIFxyXG4gICAgXHJcbiAgICAvL2dldCByZWFjdCBjb21wb25lbnRzXHJcbiAgICBnZXRDb21wb25lbnRXaXRoUHJvcHMobGlzdGluZ0lkLCAoZXJyLCBzdHJlYW0pID0+IHtcclxuICAgICAgaWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yIGdldHRpbmcgQ2Fyb3VzZWwgY29tcG9uZW50OiAnLCBlcnIpOyAgICAgXHJcbiAgICAgIHN0cmVhbS5waXBlKHJlcylcclxuICAgICAgc3RyZWFtLm9uKCdlbmQnLHJlcy5lbmQoJ2RvbmUnKSkgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7IFxyXG5cclxuXHJcbi8vICBFeHBvcnQgc2VydmVyIGZvciB0ZXN0aW5nXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFwcDtcclxuXHJcbi8vZ2V0IHRoZSBib2R5IGh0bWwgbWFya3VwXHJcbnZhciBnZXRDb21wb25lbnRXaXRoUHJvcHMgPSBmdW5jdGlvbiAobGlzdGluZ0lkLCBjYWxsYmFjaykge1xyXG5cclxuICAvL2dldCBwcm9wIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gIGRiLmdldENhcm91c2VsSW1hZ2VzKGxpc3RpbmdJZCwgKGVyciwgVVJMcykgPT4ge1xyXG4gICAgaWYgKGVycikgY2FsbGJhY2soZXJyKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAvL2ludGVycG9sYXRlIGNvbXBvbmVudCB3aXRoIGRhdGEgaW50byBIVE1MIGJvZHkgYW5kIHJldHVybiBpdFxyXG4gICAgICBjYWxsYmFjayhudWxsLHJlbmRlclRvTm9kZVN0cmVhbSg8Q2FsZW5kYXIgLz4pKTtcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuICAgXHJcbiAvL0hUTUwgYmVmb3JlIHRoZSBjb21wb25lbnQgYXJlIGF0dGFjaGVkIG9uIFNTUlxyXG4gLy9cclxudmFyIGdldEluaXRpYWxIdG1sID0gZnVuY3Rpb24oKXsgICAgICAgXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG4gIDxoZWFkPlxyXG4gICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgIDx0aXRsZT5JbWFnZSBDYXJvdXNlbCBDb21wb25lbnQ8L3RpdGxlPiAgICBcclxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICA8bGluayBkZWZlciByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJzY3JlZW5cIiBocmVmPVwiL2Nhcm91c2VsL3N0YXRpYy9yZXNldC5jc3NcIiAvPlxyXG4gICAgPGxpbmsgZGVmZXIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwic2NyZWVuXCIgaHJlZj1cIi9jYXJvdXNlbC9zdGF0aWMvY2Fyb3VzZWwtc3R5bGUuY3NzXCIgLz4gICAgXHJcbiAgICA8L2hlYWQ+XHJcbiAgICA8Ym9keT5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbC1jb250YWluZXJcIj5gXHJcbiAgfVxyXG4gICAgICBcclxuICAvL0hUTUwgYWZ0ZXIgdGhlIGNvbXBvbmVudHMgYXJlIGF0dGFjaGVkIG9uIFNTUlxyXG4gIC8vXHJcbiAgdmFyIGdldEZpbmFsSHRtbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gYCBcclxuICAgIDwvZGl2PiAgIFxyXG4gICAgPC9ib2R5PlxyXG4gICAgPHNjcmlwdCBkZWZlciBzcmM9Jy9jYXJvdXNlbC9zdGF0aWMvYnVuZGxlLmpzPjxzY3JpcHQ+XHJcbiAgPC9odG1sPmBcclxufVxyXG5cclxuICBcclxuICAvL0luaXRpYXRlIHJlcXVlc3QgZXZlbnQgaGFuZGxlciAgXHJcbiAgYXBwLmxpc3RlbihQT1JULCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coJ0Vycm9yIHN0YXJ0aW5nIHNlcnZlcjonLCBlcnIpO1xyXG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBzdGFydGVkIHNlcnZlciBvbiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcclxuICB9KTsiXSwibWFwcGluZ3MiOiJBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFZQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCI/NWU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ })

/******/ });