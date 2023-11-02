(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['indexeddb-external'] = factory(typeof this['indexeddb-external'] === 'undefined' ? {} : this['indexeddb-external']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=indexeddb-external.js.map
