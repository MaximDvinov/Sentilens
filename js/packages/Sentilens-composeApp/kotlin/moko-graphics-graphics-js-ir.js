(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['moko-graphics-graphics-js-ir'] = factory(typeof this['moko-graphics-graphics-js-ir'] === 'undefined' ? {} : this['moko-graphics-graphics-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=moko-graphics-graphics-js-ir.js.map
