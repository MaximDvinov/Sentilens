(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    root['ktor-ktor-shared-ktor-serialization'] = factory(typeof this['ktor-ktor-shared-ktor-serialization'] === 'undefined' ? {} : this['ktor-ktor-shared-ktor-serialization'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io'], this['ktor-ktor-http'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.fj;
  var VOID = kotlin_kotlin.$_$.il;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.k1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isInterface = kotlin_kotlin.$_$.id;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var isObject = kotlin_kotlin.$_$.kd;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentConvertException, 'ContentConvertException', classMeta, Exception);
  setMetadataFor(JsonConvertException, 'JsonConvertException', classMeta, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.nf8(contentType, converter, configuration);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.nf8.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.qf8(contentType, charset, typeInfo, value, $completion);
    return tmp0;
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    var tmp0 = this.pf8(contentType, charset, typeInfo, ensureNotNull(value), $completion);
    return tmp0;
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().gek_1 : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().gek_1 : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.weq(HttpHeaders_getInstance().qex_1)).d();
    while (tmp0_iterator.e()) {
      var charset = tmp0_iterator.f().y4();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().ien(charset))
        return Companion_getInstance().hen(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ef9_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.ef9_1(value, $completion);
  };
  function deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation) {
    this.nf9_1 = $collector;
    this.of9_1 = $charset;
    this.pf9_1 = $typeInfo;
    this.qf9_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).tf9 = function (value, $completion) {
    var tmp = this.uf9(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(deserialize$o$collect$slambda).yl = function (p1, $completion) {
    return this.tf9((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.rf9_1.rf8(this.of9_1, this.pf9_1, this.qf9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.sf9_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = this.nf9_1.z18(this.sf9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 3) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(deserialize$o$collect$slambda).uf9 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.nf9_1, this.of9_1, this.pf9_1, this.qf9_1, completion);
    i.rf9_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($collector, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.tf9(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dfa_1 = _this__u8e3s4;
    this.efa_1 = collector;
  }
  protoOf($collectCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0(this.efa_1, this.dfa_1.gfa_1, this.dfa_1.hfa_1, this.dfa_1.ifa_1, null);
            suspendResult = this.dfa_1.ffa_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 2) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv($tmp0_map, $charset, $typeInfo, $body) {
    this.ffa_1 = $tmp0_map;
    this.gfa_1 = $charset;
    this.hfa_1 = $typeInfo;
    this.ifa_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).jfa = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv).x17 = function (collector, $completion) {
    return this.jfa(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.sfa_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).ufa = function (it, $completion) {
    var tmp = this.vfa(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(deserialize$slambda).yl = function (p1, $completion) {
    return this.ufa((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return !(this.tfa_1 == null) ? true : this.sfa_1.bea();
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).vfa = function (it, completion) {
    var i = new deserialize$slambda(this.sfa_1, completion);
    i.tfa_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.ufa(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.af9_1 = _this__u8e3s4;
    this.bf9_1 = body;
    this.cf9_1 = typeInfo;
    this.df9_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp0_map = asFlow(this.af9_1);
            var tmp_0 = new _no_name_provided__qut3iv(tmp0_map, this.df9_1, this.cf9_1, this.bf9_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.bf9_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.bf9_1.bea()) {
                tmp_1 = this.bf9_1;
              } else {
                var tmp0_safe_receiver = this.cf9_1.nev_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ai()) === true) {
                  tmp_1 = NullBody_getInstance();
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.cf9_1);
                }
              }
            }

            return tmp_1;
          case 2:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 2) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = ContentConverter;
  _.$_$.e = JsonConvertException;
  _.$_$.f = suitableCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.js.map
