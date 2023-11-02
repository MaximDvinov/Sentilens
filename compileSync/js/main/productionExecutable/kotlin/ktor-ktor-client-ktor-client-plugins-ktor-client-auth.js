(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['ktor-ktor-client-ktor-client-plugins-ktor-client-auth'] = factory(typeof this['ktor-ktor-client-ktor-client-plugins-ktor-client-auth'] === 'undefined' ? {} : this['ktor-ktor-client-ktor-client-plugins-ktor-client-auth']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-auth.js.map
