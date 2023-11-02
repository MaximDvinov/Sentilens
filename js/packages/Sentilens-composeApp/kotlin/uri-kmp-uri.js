(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['uri-kmp-uri'] = factory(typeof this['uri-kmp-uri'] === 'undefined' ? {} : this['uri-kmp-uri']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=uri-kmp-uri.js.map
