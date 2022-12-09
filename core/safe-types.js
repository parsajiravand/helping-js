"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.File = exports.SVGElement = exports.HTMLElement = exports.Element = undefined;

var _supoort = require("./supoort");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* istanbul ignore next */
var Element = exports.Element = _supoort.HAS_WINDOW_SUPPORT ? _supoort.WINDOW.Element : function (_Object) {
  _inherits(Element, _Object);

  function Element() {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).apply(this, arguments));
  }

  return Element;
}(Object);

/* istanbul ignore next */
var HTMLElement = exports.HTMLElement = _supoort.HAS_WINDOW_SUPPORT ? _supoort.WINDOW.HTMLElement : function (_Element) {
  _inherits(HTMLElement, _Element);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).apply(this, arguments));
  }

  return HTMLElement;
}(Element);

/* istanbul ignore next */
var SVGElement = exports.SVGElement = _supoort.HAS_WINDOW_SUPPORT ? _supoort.WINDOW.SVGElement : function (_Element2) {
  _inherits(SVGElement, _Element2);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _possibleConstructorReturn(this, (SVGElement.__proto__ || Object.getPrototypeOf(SVGElement)).apply(this, arguments));
  }

  return SVGElement;
}(Element);

/* istanbul ignore next */
var File = exports.File = _supoort.HAS_WINDOW_SUPPORT ? _supoort.WINDOW.File : function (_Object2) {
  _inherits(File, _Object2);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).apply(this, arguments));
  }

  return File;
}(Object);