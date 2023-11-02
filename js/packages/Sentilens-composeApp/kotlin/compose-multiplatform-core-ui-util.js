(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-util'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-util'.");
    }
    root['compose-multiplatform-core-ui-util'] = factory(typeof this['compose-multiplatform-core-ui-util'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-util'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var roundToInt = kotlin_kotlin.$_$.ie;
  //endregion
  //region block: pre-declaration
  //endregion
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    return start + roundToInt((stop - start | 0) * fraction) | 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = lerp;
  _.$_$.b = lerp_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-util.js.map
