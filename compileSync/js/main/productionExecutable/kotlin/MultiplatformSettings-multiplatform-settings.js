(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'MultiplatformSettings-multiplatform-settings'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'MultiplatformSettings-multiplatform-settings'.");
    }
    root['MultiplatformSettings-multiplatform-settings'] = factory(typeof this['MultiplatformSettings-multiplatform-settings'] === 'undefined' ? {} : this['MultiplatformSettings-multiplatform-settings'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.xd;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ObservableSettings, 'ObservableSettings', interfaceMeta);
  //endregion
  function ObservableSettings() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ObservableSettings;
  //endregion
  return _;
}));

//# sourceMappingURL=MultiplatformSettings-multiplatform-settings.js.map
