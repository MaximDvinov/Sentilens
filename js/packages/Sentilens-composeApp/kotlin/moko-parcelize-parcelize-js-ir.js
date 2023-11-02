(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['moko-parcelize-parcelize-js-ir'] = factory(typeof this['moko-parcelize-parcelize-js-ir'] === 'undefined' ? {} : this['moko-parcelize-parcelize-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=moko-parcelize-parcelize-js-ir.js.map
