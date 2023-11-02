(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-shared-ktor-serialization.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-shared-ktor-serialization.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-shared-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-shared-ktor-serialization' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    root['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] = factory(typeof this['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined' ? {} : this['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils'], this['ktor-ktor-client-ktor-client-core'], this['ktor-ktor-http'], this['ktor-ktor-shared-ktor-serialization'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.kd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.q;
  var contentType = kotlin_io_ktor_ktor_http.$_$.h1;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.f;
  var plus = kotlin_kotlin.$_$.s9;
  var toMutableSet = kotlin_kotlin.$_$.za;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.f;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var toString = kotlin_kotlin.$_$.ce;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.m;
  var Collection = kotlin_kotlin.$_$.b6;
  var isInterface = kotlin_kotlin.$_$.id;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.g1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Unit = kotlin_kotlin.$_$.bk;
  var charset = kotlin_io_ktor_ktor_http.$_$.e1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.oc;
  var joinToString = kotlin_kotlin.$_$.w8;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.fa;
  var endsWith = kotlin_kotlin.$_$.sg;
  var startsWith = kotlin_kotlin.$_$.rh;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, VOID, classMeta);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Configuration]);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($convertResponseCOROUTINE$1, '$convertResponseCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, VOID, VOID, VOID, VOID, [2, 5]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta);
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.jih_1 = converter;
    this.kih_1 = contentTypeToSend;
    this.lih_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.mih_1 = $pattern;
  }
  protoOf(ContentNegotiation$Config$defaultMatcher$1).nih = function (contentType) {
    return contentType.kex(this.mih_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.wih_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda).wfb = function ($this$intercept, it, $completion) {
    var tmp = this.xfb($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.wih_1.dii(this.xih_1.veu_1, this.xih_1.yet(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zih_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.zih_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.zih_1;
            }

            tmp_0.aii_1 = tmp_1;
            this.dl_1 = 2;
            suspendResult = this.xih_1.zet(this.aii_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda).xfb = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.wih_1, completion);
    i.xih_1 = $this$intercept;
    i.yih_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.wfb($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.mii_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda_1).qfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.rfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.pii_1 = this.oii_1.y4();
            this.qii_1 = this.oii_1.z4();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.nii_1.veu_1.dfc());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().pev('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.rii_1 = tmp_1;
            this.sii_1 = suitableCharset(this.nii_1.veu_1.mff().sf1());
            this.dl_1 = 1;
            suspendResult = this.mii_1.wii(this.nii_1.veu_1.mff().off(), this.pii_1, this.qii_1, this.rii_1, this.sii_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tii_1 = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            if (this.tii_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_3 = this.tii_1;
            }

            tmp_2.uii_1 = tmp_3;
            this.vii_1 = new HttpResponseContainer(this.pii_1, this.uii_1);
            this.dl_1 = 2;
            suspendResult = this.nii_1.zet(this.vii_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda_1).rfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.mii_1, completion);
    i.nii_1 = $this$intercept;
    i.oii_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.qfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.xii_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.yii_1 = ArrayList_init_$Create$();
  }
  protoOf(Config).nf8 = function (contentType, converter, configuration) {
    var matcher = contentType.equals(Application_getInstance().dew_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.zii(contentType, converter, matcher, configuration);
  };
  protoOf(Config).zii = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.yii_1.a(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.aij_1 = new AttributeKey('ContentNegotiation');
  }
  protoOf(Plugin).r = function () {
    return this.aij_1;
  };
  protoOf(Plugin).bij = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new ContentNegotiation(config.yii_1, config.xii_1);
  };
  protoOf(Plugin).hfe = function (block) {
    return this.bij(block);
  };
  protoOf(Plugin).cij = function (plugin, scope) {
    var tmp = Phases_getInstance().afk_1;
    scope.cfb_1.zeu(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().cfe_1;
    scope.dfb_1.zeu(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin).ife = function (plugin, scope) {
    return this.cij(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.jih_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lij_1 = _this__u8e3s4;
    this.mij_1 = request;
    this.nij_1 = body;
  }
  protoOf($convertRequestCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 7;
            var tmp0_iterator = this.lij_1.bii_1.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              get_LOGGER().pev('Adding Accept=' + element.kih_1.gex_1 + ' header for ' + this.mij_1.cfd_1);
              accept(this.mij_1, element.kih_1);
            }

            var tmp_0;
            var tmp_1 = this.nij_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp1_any = this.lij_1.cii_1;
                var tmp_2;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_2 = tmp1_any.l();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.d();
                while (tmp0_iterator_0.e()) {
                  var element_0 = tmp0_iterator_0.f();
                  if (element_0.nh(this.nij_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              get_LOGGER().pev('Body type ' + getKClassFromExpression(this.nij_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.mij_1.cfd_1 + '.'));
              return null;
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.mij_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().pev("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.mij_1.cfd_1 + '.');
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.oij_1 = tmp_4;
            var tmp_5 = this.nij_1;
            if (tmp_5 instanceof Unit) {
              get_LOGGER().pev('Sending empty body for ' + this.mij_1.cfd_1);
              this.mij_1.efd_1.les(HttpHeaders_getInstance().hey_1);
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var tmp2_filter = this.lij_1.bii_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.d();
            while (tmp0_iterator_1.e()) {
              var element_1 = tmp0_iterator_1.f();
              if (element_1.lih_1.nih(this.oij_1)) {
                tmp0_filterTo.a(element_1);
              }
            }

            var tmp_7;
            if (!tmp0_filterTo.l()) {
              tmp_7 = tmp0_filterTo;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              get_LOGGER().pev('None of the registered converters match request Content-Type=' + this.oij_1 + '. ' + ('Skipping ContentNegotiation for ' + this.mij_1.cfd_1 + '.'));
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.pij_1 = tmp_8;
            if (this.mij_1.pg1() == null) {
              get_LOGGER().pev('Request has unknown body type. Skipping ContentNegotiation for ' + this.mij_1.cfd_1 + '.');
              return null;
            }

            this.mij_1.efd_1.les(HttpHeaders_getInstance().hey_1);
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.rij_1 = this.pij_1.d();
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (!this.rij_1.e()) {
              this.dl_1 = 5;
              continue $sm;
            }

            this.sij_1 = this.rij_1.f();
            this.dl_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.oij_1);
            var tmp_9 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().gek_1 : tmp0_elvis_lhs_0;
            var tmp_10 = ensureNotNull(this.mij_1.pg1());
            var tmp_11;
            if (!equals(this.nij_1, NullBody_getInstance())) {
              tmp_11 = this.nij_1;
            } else {
              tmp_11 = null;
            }

            suspendResult = this.sij_1.jih_1.qf8(this.oij_1, tmp_9, tmp_10, tmp_11, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().pev('Converted request body using ' + this.sij_1.jih_1 + ' for ' + this.mij_1.cfd_1);
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.qij_1 = result_0;
              this.dl_1 = 6;
              continue $sm;
            } else {
              this.dl_1 = 4;
              continue $sm;
            }

          case 4:
            this.dl_1 = 2;
            continue $sm;
          case 5:
            this.qij_1 = null;
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.qij_1;
            var tmp_12;
            if (tmp2_elvis_lhs == null) {
              var tmp_13 = "Can't convert " + toString(this.nij_1) + ' with contentType ' + this.oij_1 + ' using converters ';
              throw new ContentConverterException(tmp_13 + joinToString(this.pij_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
            } else {
              tmp_12 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_12;
            return serializedContent;
          case 7:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 7) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function $convertResponseCOROUTINE$1(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bik_1 = _this__u8e3s4;
    this.cik_1 = requestUrl;
    this.dik_1 = info;
    this.eik_1 = body;
    this.fik_1 = responseContentType;
    this.gik_1 = charset;
  }
  protoOf($convertResponseCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp_0 = this.eik_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().pev('Response body is already transformed. Skipping ContentNegotiation for ' + this.cik_1 + '.');
              return null;
            }

            if (this.bik_1.cii_1.n(this.dik_1.lev_1)) {
              get_LOGGER().pev('Response body type ' + this.dik_1.lev_1 + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.cik_1 + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0_filter = this.bik_1.bii_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filter.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              if (element.lih_1.nih(this.fik_1)) {
                tmp0_filterTo.a(element);
              }
            }

            var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_filterTo, 10));
            var tmp0_iterator_0 = tmp0_filterTo.d();
            while (tmp0_iterator_0.e()) {
              var item = tmp0_iterator_0.f();
              tmp0_mapTo.a(item.jih_1);
            }

            var tmp_2;
            if (!tmp0_mapTo.l()) {
              tmp_2 = tmp0_mapTo;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              get_LOGGER().pev('None of the registered converters match response with Content-Type=' + this.fik_1 + '. ' + ('Skipping ContentNegotiation for ' + this.cik_1 + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.hik_1 = tmp_3;
            this.dl_1 = 1;
            suspendResult = deserialize(this.hik_1, this.eik_1, this.dik_1, this.gik_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().pev('Response body was converted to ' + getKClassFromExpression(result) + ' for ' + this.cik_1 + '.');
            }

            return result;
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
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.bii_1 = registrations;
    this.cii_1 = ignoredTypes;
  }
  protoOf(ContentNegotiation).dii = function (request, body, $completion) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ContentNegotiation).wii = function (requestUrl, info, body, responseContentType, charset, $completion) {
    var tmp = new $convertResponseCOROUTINE$1(this, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().pi(), PrimitiveClasses_getInstance().li(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  protoOf(JsonContentTypeMatcher).nih = function (contentType) {
    if (contentType.kex(Application_getInstance().dew_1)) {
      return true;
    }
    var value = contentType.jex().toString();
    return startsWith(value, 'application/') ? endsWith(value, '+json') : false;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(Config).of8 = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js.map
