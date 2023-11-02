(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['okio-parent-okio-js-ir'] = factory(typeof this['okio-parent-okio-js-ir'] === 'undefined' ? {} : this['okio-parent-okio-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=okio-parent-okio-js-ir.js.map
