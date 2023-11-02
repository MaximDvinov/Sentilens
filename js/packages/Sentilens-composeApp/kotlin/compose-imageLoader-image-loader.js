(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-imageLoader-image-loader'] = factory(typeof this['compose-imageLoader-image-loader'] === 'undefined' ? {} : this['compose-imageLoader-image-loader']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-imageLoader-image-loader.js.map
