(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    root['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] = factory(typeof this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined' ? {} : this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http'], this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization_kotlinx, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.il;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var serialization = kotlin_io_ktor_ktor_serialization_kotlinx.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    _init_properties_JsonSupport_kt__yf438r();
    return DefaultJson;
  }
  var DefaultJson;
  function json(_this__u8e3s4, json, contentType) {
    json = json === VOID ? get_DefaultJson() : json;
    contentType = contentType === VOID ? Application_getInstance().dew_1 : contentType;
    _init_properties_JsonSupport_kt__yf438r();
    serialization(_this__u8e3s4, contentType, json);
  }
  function DefaultJson$lambda($this$Json) {
    _init_properties_JsonSupport_kt__yf438r();
    $this$Json.jiw_1 = true;
    $this$Json.miw_1 = true;
    $this$Json.tiw_1 = true;
    $this$Json.niw_1 = true;
    $this$Json.oiw_1 = false;
    $this$Json.riw_1 = false;
    return Unit_getInstance();
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function _init_properties_JsonSupport_kt__yf438r() {
    if (!properties_initialized_JsonSupport_kt_9cgd93) {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json(VOID, DefaultJson$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = json;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js.map
