(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EventListenerHandler, 'EventListenerHandler', classMeta);
  //endregion
  function get_isElement(_this__u8e3s4) {
    return _this__u8e3s4.nodeType === Node.ELEMENT_NODE;
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.zl_1 = handler;
  }
  protoOf(EventListenerHandler).am = function (event) {
    this.zl_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.am(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + this.zl_1 + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_isElement;
  _.$_$.b = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
