(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'moko-resources-resources'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'moko-resources-resources'.");
    }
    root['moko-resources-resources'] = factory(typeof this['moko-resources-resources'] === 'undefined' ? {} : this['moko-resources-resources'], this['kotlin-kotlin-stdlib-js-ir']);
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
  setMetadataFor(FontResource, 'FontResource', classMeta);
  //endregion
  function FontResource(fileUrl, fontFamily) {
    this.ne6_1 = fileUrl;
    this.oe6_1 = fontFamily;
  }
  var cachedLocale;
  //region block: init
  cachedLocale = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontResource;
  //endregion
  return _;
}));

//# sourceMappingURL=moko-resources-resources.js.map
