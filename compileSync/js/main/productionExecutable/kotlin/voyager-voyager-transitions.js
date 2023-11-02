(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['voyager-voyager-transitions'] = factory(typeof this['voyager-voyager-transitions'] === 'undefined' ? {} : this['voyager-voyager-transitions']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-transitions.js.map
