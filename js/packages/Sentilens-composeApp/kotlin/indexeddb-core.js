(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['indexeddb-core'] = factory(typeof this['indexeddb-core'] === 'undefined' ? {} : this['indexeddb-core']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=indexeddb-core.js.map
