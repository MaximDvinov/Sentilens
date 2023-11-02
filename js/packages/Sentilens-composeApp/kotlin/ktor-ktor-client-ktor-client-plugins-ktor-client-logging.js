(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-atomicfu.js', './ktor-ktor-http.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-io.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    root['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] = factory(typeof this['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined' ? {} : this['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-atomicfu'], this['ktor-ktor-http'], this['ktor-ktor-client-ktor-client-core'], this['ktor-ktor-io'], this['ktor-ktor-utils']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trim = kotlin_kotlin.$_$.si;
  var toString = kotlin_kotlin.$_$.ce;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Enum = kotlin_kotlin.$_$.dj;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.n;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var println = kotlin_kotlin.$_$.ac;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var Url = kotlin_io_ktor_ktor_http.$_$.z;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var charset = kotlin_io_ktor_ktor_http.$_$.e1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.f1;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Phases_getInstance_1 = kotlin_io_ktor_ktor_client_core.$_$.f;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ResponseObserver = kotlin_io_ktor_ktor_client_core.$_$.h;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var Collection = kotlin_kotlin.$_$.b6;
  var isInterface = kotlin_kotlin.$_$.id;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.kd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var readText = kotlin_io_ktor_ktor_io.$_$.z;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.r;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.q;
  var contentType = kotlin_io_ktor_ktor_http.$_$.h1;
  var emptyList = kotlin_kotlin.$_$.z7;
  var toList = kotlin_kotlin.$_$.ua;
  var sortedWith = kotlin_kotlin.$_$.la;
  var joinToString = kotlin_kotlin.$_$.w8;
  var Comparator = kotlin_kotlin.$_$.aj;
  var compareValues = kotlin_kotlin.$_$.db;
  var writer = kotlin_io_ktor_ktor_io.$_$.l1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.i1;
  var close = kotlin_io_ktor_ktor_io.$_$.k1;
  var copyToBoth = kotlin_io_ktor_ktor_utils.$_$.v;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor($logResponseExceptionCOROUTINE$0, '$logResponseExceptionCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($logResponseBodyCOROUTINE$1, '$logResponseBodyCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($closeResponseLogCOROUTINE$2, '$closeResponseLogCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(HttpClientCallLogger, 'HttpClientCallLogger', classMeta, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(LoggedContent, 'LoggedContent', classMeta, ReadChannelContent);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SimpleLogger, 'SimpleLogger', classMeta);
  setMetadataFor(Config, 'Config', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(Logging$setupRequestLogging$slambda, 'Logging$setupRequestLogging$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Logging$logRequestBody$slambda, 'Logging$logRequestBody$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Logging$setupResponseLogging$slambda, 'Logging$setupResponseLogging$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Logging$setupResponseLogging$slambda_1, 'Logging$setupResponseLogging$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Logging$setupResponseLogging$slambda_3, 'Logging$setupResponseLogging$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Logging, 'Logging', classMeta, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor($logResponseBodyCOROUTINE$4, '$logResponseBodyCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(toReadChannel$slambda, 'toReadChannel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($observeCOROUTINE$5, '$observeCOROUTINE$5', classMeta, CoroutineImpl);
  //endregion
  function $logResponseExceptionCOROUTINE$0(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qik_1 = _this__u8e3s4;
    this.rik_1 = message;
  }
  protoOf($logResponseExceptionCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.qik_1.vik_1.un(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this.rik_1;
            this.qik_1.sik_1.zik(toString(trim(isCharSequence(tmp_0) ? tmp_0 : THROW_CCE())));
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
  function $logResponseBodyCOROUTINE$1(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iil_1 = _this__u8e3s4;
    this.jil_1 = message;
  }
  protoOf($logResponseBodyCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.iil_1.wik_1.un(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.iil_1.uik_1.ia(this.jil_1);
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
  function $closeResponseLogCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sil_1 = _this__u8e3s4;
  }
  protoOf($closeResponseLogCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            if (!this.sil_1.yik_1.atomicfu$compareAndSet(false, true))
              return Unit_getInstance();
            this.dl_1 = 1;
            suspendResult = this.sil_1.vik_1.un(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var message = toString(trim(this.sil_1.uik_1));
            if (charSequenceLength(message) > 0) {
              this.sil_1.sik_1.zik(message);
            }

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
  function HttpClientCallLogger(logger) {
    this.sik_1 = logger;
    this.tik_1 = StringBuilder_init_$Create$();
    this.uik_1 = StringBuilder_init_$Create$();
    this.vik_1 = Job();
    this.wik_1 = Job();
    this.xik_1 = atomic$boolean$1(false);
    this.yik_1 = atomic$boolean$1(false);
  }
  protoOf(HttpClientCallLogger).til = function (message) {
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = this.tik_1;
    // Inline function 'kotlin.text.trim' call
    var tmp1_appendLine = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp0_appendLine.ia(tmp1_appendLine).i9(_Char___init__impl__6a9atx(10));
  };
  protoOf(HttpClientCallLogger).uil = function (message) {
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = this.uik_1;
    // Inline function 'kotlin.text.trim' call
    var tmp1_appendLine = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp0_appendLine.ia(tmp1_appendLine).i9(_Char___init__impl__6a9atx(10));
    this.wik_1.ku();
  };
  protoOf(HttpClientCallLogger).vil = function (message, $completion) {
    var tmp = new $logResponseExceptionCOROUTINE$0(this, message, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClientCallLogger).wil = function (message, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$1(this, message, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClientCallLogger).xil = function () {
    if (!this.xik_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    try {
      var message = toString(trim(this.tik_1));
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(message) > 0) {
        this.sik_1.zik(message);
      }
    }finally {
      this.vik_1.ku();
    }
  };
  protoOf(HttpClientCallLogger).yil = function ($completion) {
    var tmp = new $closeResponseLogCOROUTINE$2(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  var LogLevel_ALL_instance;
  var LogLevel_HEADERS_instance;
  var LogLevel_BODY_instance;
  var LogLevel_INFO_instance;
  var LogLevel_NONE_instance;
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel_HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel_BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel_INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel_NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this, name, ordinal);
    this.bim_1 = info;
    this.cim_1 = headers;
    this.dim_1 = body;
  }
  function LogLevel_HEADERS_getInstance() {
    LogLevel_initEntries();
    return LogLevel_HEADERS_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function LoggedContent(originalContent, channel) {
    ReadChannelContent.call(this);
    this.fim_1 = originalContent;
    this.gim_1 = channel;
    this.him_1 = this.fim_1.wf6();
    this.iim_1 = this.fim_1.xf6();
    this.jim_1 = this.fim_1.a8g();
    this.kim_1 = this.fim_1.sf1();
  }
  protoOf(LoggedContent).wf6 = function () {
    return this.him_1;
  };
  protoOf(LoggedContent).xf6 = function () {
    return this.iim_1;
  };
  protoOf(LoggedContent).a8g = function () {
    return this.jim_1;
  };
  protoOf(LoggedContent).sf1 = function () {
    return this.kim_1;
  };
  protoOf(LoggedContent).bf7 = function () {
    return this.gim_1;
  };
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_SIMPLE(_this__u8e3s4) {
    return new SimpleLogger();
  }
  function SimpleLogger() {
  }
  protoOf(SimpleLogger).zik = function (message) {
    println('HttpClient: ' + message);
  };
  function get_ClientCallLogger() {
    _init_properties_Logging_kt__66pui5();
    return ClientCallLogger;
  }
  var ClientCallLogger;
  function get_DisableLogging() {
    _init_properties_Logging_kt__66pui5();
    return DisableLogging;
  }
  var DisableLogging;
  function Config() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.lim_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.mim_1 = ArrayList_init_$Create$();
    this.nim_1 = null;
    this.oim_1 = LogLevel_HEADERS_getInstance();
  }
  protoOf(Config).pim = function () {
    var tmp0_elvis_lhs = this.nim_1;
    return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_getInstance()) : tmp0_elvis_lhs;
  };
  function setupRequestLogging($this, client) {
    var tmp = Phases_getInstance().ufd_1;
    client.efb_1.zeu(tmp, Logging$setupRequestLogging$slambda_0($this, null));
  }
  function logRequest($this, request, $completion) {
    var tmp = request.ffd_1;
    var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
    var logger = new HttpClientCallLogger($this.qim_1);
    request.hfd_1.ceo(get_ClientCallLogger(), logger);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.logging.Logging.logRequest.<anonymous>' call
    if ($this.rim_1.bim_1) {
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine = 'REQUEST: ' + Url(request.cfd_1);
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.ia(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var tmp1_appendLine = 'METHOD: ' + request.dfd_1;
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.ia(tmp1_appendLine).i9(_Char___init__impl__6a9atx(10));
    }
    if ($this.rim_1.cim_1) {
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.ia('COMMON HEADERS').i9(_Char___init__impl__6a9atx(10));
      logHeaders(tmp0_apply, request.efd_1.aes(), $this.tim_1);
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      tmp0_apply.ia('CONTENT HEADERS').i9(_Char___init__impl__6a9atx(10));
      var tmp$ret$9;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator = $this.tim_1.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'io.ktor.client.plugins.logging.Logging.logRequest.<anonymous>.<anonymous>' call
          if (element.vim_1(HttpHeaders_getInstance().eey_1)) {
            tmp$ret$9 = element;
            break $l$block;
          }
        }
        tmp$ret$9 = null;
      }
      var tmp0_safe_receiver = tmp$ret$9;
      var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uim_1;
      var tmp$ret$11;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = $this.tim_1.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'io.ktor.client.plugins.logging.Logging.logRequest.<anonymous>.<anonymous>' call
          if (element_0.vim_1(HttpHeaders_getInstance().hey_1)) {
            tmp$ret$11 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$11 = null;
      }
      var tmp1_safe_receiver = tmp$ret$11;
      var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.uim_1;
      var tmp2_safe_receiver = content.xf6();
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0 = HttpHeaders_getInstance().eey_1;
        logHeader(tmp0_apply, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
      }
      var tmp3_safe_receiver = content.wf6();
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1 = HttpHeaders_getInstance().hey_1;
        logHeader(tmp0_apply, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
      }
      logHeaders(tmp0_apply, content.sf1().aes(), $this.tim_1);
    }
    var message = tmp0_apply.toString();
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      logger.til(message);
    }
    var tmp_2;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(message) === 0) {
      tmp_2 = true;
    } else {
      tmp_2 = !$this.rim_1.dim_1;
    }
    if (tmp_2) {
      logger.xil();
      return null;
    }
    return logRequestBody($this, content, logger, $completion);
  }
  function logRequestBody($this, content, logger, $completion) {
    var requestLog = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = 'BODY Content-Type: ' + content.wf6();
    // Inline function 'kotlin.text.appendLine' call
    requestLog.ia(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
    var tmp0_safe_receiver = content.wf6();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
    var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().gek_1 : tmp1_elvis_lhs;
    var channel = ByteChannel();
    var tmp = GlobalScope_getInstance();
    var tmp_0 = Dispatchers_getInstance().xu_1;
    var tmp_1 = launch(tmp, tmp_0, VOID, Logging$logRequestBody$slambda_0(channel, charset_0, requestLog, null));
    tmp_1.rn(Logging$logRequestBody$lambda(logger, requestLog));
    return observe(content, channel, $completion);
  }
  function logRequestException($this, context, cause) {
    if ($this.rim_1.bim_1) {
      $this.qim_1.zik('REQUEST ' + Url(context.cfd_1) + ' failed with exception: ' + cause);
    }
  }
  function setupResponseLogging($this, client) {
    var tmp = Phases_getInstance_0().efk_1;
    client.ffb_1.zeu(tmp, Logging$setupResponseLogging$slambda_0($this, null));
    var tmp_0 = Phases_getInstance_1().afe_1;
    client.dfb_1.zeu(tmp_0, Logging$setupResponseLogging$slambda_2($this, null));
    if (!$this.rim_1.dim_1)
      return Unit_getInstance();
    var observer = Logging$setupResponseLogging$slambda_4($this, null);
    Plugin_getInstance().ig1(new ResponseObserver(observer), client);
  }
  function logResponseException($this, log, request, cause) {
    if (!$this.rim_1.bim_1)
      return Unit_getInstance();
    log.ia('RESPONSE ' + request.off() + ' failed with exception: ' + cause);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.wim_1 = new AttributeKey('ClientLogging');
  }
  protoOf(Companion_0).r = function () {
    return this.wim_1;
  };
  protoOf(Companion_0).xim = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new Logging(config.pim(), config.oim_1, config.lim_1, config.mim_1);
  };
  protoOf(Companion_0).hfe = function (block) {
    return this.xim(block);
  };
  protoOf(Companion_0).yim = function (plugin, scope) {
    setupRequestLogging(plugin, scope);
    setupResponseLogging(plugin, scope);
  };
  protoOf(Companion_0).ife = function (plugin, scope) {
    return this.yim(plugin instanceof Logging ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function shouldBeLogged($this, request) {
    var tmp;
    if ($this.sim_1.l()) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = $this.sim_1;
        var tmp_0;
        if (isInterface(tmp0_any, Collection)) {
          tmp_0 = tmp0_any.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_any.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'io.ktor.client.plugins.logging.Logging.shouldBeLogged.<anonymous>' call
          if (element(request)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function Logging$setupRequestLogging$slambda(this$0, resultContinuation) {
    this.hin_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$setupRequestLogging$slambda).wfb = function ($this$intercept, it, $completion) {
    var tmp = this.xfb($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Logging$setupRequestLogging$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$setupRequestLogging$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 8;
            if (!shouldBeLogged(this.hin_1, this.iin_1.veu_1)) {
              this.iin_1.veu_1.hfd_1.ceo(get_DisableLogging(), Unit_getInstance());
              return Unit_getInstance();
            }

            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = logRequest(this.hin_1, this.iin_1.veu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kin_1 = suspendResult;
            this.el_1 = 8;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.el_1 = 8;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              this.lin_1 = this.gl_1;
              var tmp_1 = this;
              tmp_1.kin_1 = null;
              this.dl_1 = 3;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            this.el_1 = 8;
            this.min_1 = this.kin_1;
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.el_1 = 7;
            this.el_1 = 6;
            this.dl_1 = 5;
            var tmp0_elvis_lhs = this.min_1;
            suspendResult = this.iin_1.zet(tmp0_elvis_lhs == null ? this.iin_1.yet() : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_2 = this;
            tmp_2.nin_1 = Unit_getInstance();
            this.el_1 = 8;
            this.dl_1 = 9;
            continue $sm;
          case 6:
            this.el_1 = 7;
            var tmp_3 = this.gl_1;
            if (tmp_3 instanceof Error) {
              var cause = this.gl_1;
              var tmp_4 = this;
              logRequestException(this.hin_1, this.iin_1.veu_1, cause);
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 7:
            this.el_1 = 8;
            var t = this.gl_1;
            throw t;
          case 8:
            throw this.gl_1;
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 8) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$setupRequestLogging$slambda).xfb = function ($this$intercept, it, completion) {
    var i = new Logging$setupRequestLogging$slambda(this.hin_1, completion);
    i.iin_1 = $this$intercept;
    i.jin_1 = it;
    return i;
  };
  function Logging$setupRequestLogging$slambda_0(this$0, resultContinuation) {
    var i = new Logging$setupRequestLogging$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.wfb($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation) {
    this.win_1 = $channel;
    this.xin_1 = $charset;
    this.yin_1 = $requestLog;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$logRequestBody$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Logging$logRequestBody$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$logRequestBody$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.win_1.uef(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.aio_1 = readText(ARGUMENT, this.xin_1);
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              var cause = this.gl_1;
              var tmp_1 = this;
              tmp_1.aio_1 = null;
              this.dl_1 = 4;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            var tmp0_elvis_lhs = this.aio_1;
            var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
            this.yin_1.ia('BODY START').i9(_Char___init__impl__6a9atx(10));
            this.yin_1.ia(text).i9(_Char___init__impl__6a9atx(10));
            this.yin_1.ia('BODY END');
            return Unit_getInstance();
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
  protoOf(Logging$logRequestBody$slambda).u1e = function ($this$launch, completion) {
    var i = new Logging$logRequestBody$slambda(this.win_1, this.xin_1, this.yin_1, completion);
    i.zin_1 = $this$launch;
    return i;
  };
  function Logging$logRequestBody$slambda_0($channel, $charset, $requestLog, resultContinuation) {
    var i = new Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$logRequestBody$lambda($logger, $requestLog) {
    return function (it) {
      $logger.til($requestLog.toString());
      $logger.xil();
      return Unit_getInstance();
    };
  }
  function Logging$setupResponseLogging$slambda(this$0, resultContinuation) {
    this.jio_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$setupResponseLogging$slambda).hfl = function ($this$intercept, response, $completion) {
    var tmp = this.ifl($this$intercept, response, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Logging$setupResponseLogging$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.hfl(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$setupResponseLogging$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            if (this.jio_1.rim_1.equals(LogLevel_NONE_getInstance()) ? true : this.lio_1.jfg().rfe().beo(get_DisableLogging()))
              return Unit_getInstance();
            this.mio_1 = this.lio_1.jfg().rfe().zen(get_ClientCallLogger());
            this.nio_1 = StringBuilder_init_$Create$();
            this.oio_1 = false;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.el_1 = 3;
            logResponseHeader(this.nio_1, this.lio_1.jfg().dfc(), this.jio_1.rim_1, this.jio_1.tim_1);
            this.dl_1 = 2;
            suspendResult = this.kio_1.zet(this.kio_1.yet(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.pio_1 = Unit_getInstance();
            this.el_1 = 10;
            this.dl_1 = 7;
            continue $sm;
          case 3:
            this.el_1 = 4;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              this.qio_1 = this.gl_1;
              var tmp_2 = this;
              logResponseException(this.jio_1, this.nio_1, this.lio_1.jfg().mff(), this.qio_1);
              this.oio_1 = true;
              throw this.qio_1;
            } else {
              throw this.gl_1;
            }

          case 4:
            this.el_1 = 10;
            this.rio_1 = this.gl_1;
            this.mio_1.uil(this.nio_1.toString());
            if (this.oio_1 ? true : !this.jio_1.rim_1.dim_1) {
              this.dl_1 = 5;
              suspendResult = this.mio_1.yil(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 6;
              continue $sm;
            }

          case 5:
            this.dl_1 = 6;
            continue $sm;
          case 6:
            throw this.rio_1;
          case 7:
            this.mio_1.uil(this.nio_1.toString());
            if (this.oio_1 ? true : !this.jio_1.rim_1.dim_1) {
              this.dl_1 = 8;
              suspendResult = this.mio_1.yil(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 9;
              continue $sm;
            }

          case 8:
            this.dl_1 = 9;
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 10) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$setupResponseLogging$slambda).ifl = function ($this$intercept, response, completion) {
    var i = new Logging$setupResponseLogging$slambda(this.jio_1, completion);
    i.kio_1 = $this$intercept;
    i.lio_1 = response;
    return i;
  };
  function Logging$setupResponseLogging$slambda_0(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.hfl($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$setupResponseLogging$slambda_1(this$0, resultContinuation) {
    this.aip_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$setupResponseLogging$slambda_1).qfc = function ($this$intercept, it, $completion) {
    var tmp = this.rfc($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Logging$setupResponseLogging$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$setupResponseLogging$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            if (this.aip_1.rim_1.equals(LogLevel_NONE_getInstance()) ? true : this.bip_1.veu_1.rfe().beo(get_DisableLogging())) {
              return Unit_getInstance();
            }

            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.bip_1.aeu(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 6;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 6;
            return Unit_getInstance();
          case 3:
            this.el_1 = 6;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              this.dip_1 = this.gl_1;
              this.eip_1 = StringBuilder_init_$Create$();
              this.fip_1 = this.bip_1.veu_1.rfe().zen(get_ClientCallLogger());
              logResponseException(this.aip_1, this.eip_1, this.bip_1.veu_1.mff(), this.dip_1);
              this.dl_1 = 4;
              suspendResult = this.fip_1.vil(this.eip_1.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 4:
            this.dl_1 = 5;
            suspendResult = this.fip_1.yil(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            throw this.dip_1;
          case 6:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 6) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$setupResponseLogging$slambda_1).rfc = function ($this$intercept, it, completion) {
    var i = new Logging$setupResponseLogging$slambda_1(this.aip_1, completion);
    i.bip_1 = $this$intercept;
    i.cip_1 = it;
    return i;
  };
  function Logging$setupResponseLogging$slambda_2(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.qfc($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$setupResponseLogging$slambda_3(this$0, resultContinuation) {
    this.oip_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$setupResponseLogging$slambda_3).zfm = function (it, $completion) {
    var tmp = this.afn(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Logging$setupResponseLogging$slambda_3).yl = function (p1, $completion) {
    return this.zfm(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$setupResponseLogging$slambda_3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            if (this.oip_1.rim_1.equals(LogLevel_NONE_getInstance()) ? true : this.pip_1.jfg().rfe().beo(get_DisableLogging())) {
              return Unit_getInstance();
            }

            this.qip_1 = this.pip_1.jfg().rfe().zen(get_ClientCallLogger());
            this.rip_1 = StringBuilder_init_$Create$();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.el_1 = 3;
            this.dl_1 = 2;
            suspendResult = logResponseBody(this.rip_1, contentType(this.pip_1), this.pip_1.lcd(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sip_1 = suspendResult;
            this.el_1 = 10;
            this.dl_1 = 7;
            continue $sm;
          case 3:
            this.el_1 = 4;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              this.tip_1 = this.gl_1;
              var tmp_1 = this;
              tmp_1.sip_1 = Unit_getInstance();
              this.el_1 = 10;
              this.dl_1 = 7;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 4:
            this.el_1 = 10;
            this.uip_1 = this.gl_1;
            this.dl_1 = 5;
            var tmp0_trim = this.rip_1.toString();
            suspendResult = this.qip_1.wil(toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.dl_1 = 6;
            suspendResult = this.qip_1.yil(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.uip_1;
          case 7:
            this.dl_1 = 8;
            var tmp0_trim_0 = this.rip_1.toString();
            suspendResult = this.qip_1.wil(toString(trim(isCharSequence(tmp0_trim_0) ? tmp0_trim_0 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.dl_1 = 9;
            suspendResult = this.qip_1.yil(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 10) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$setupResponseLogging$slambda_3).afn = function (it, completion) {
    var i = new Logging$setupResponseLogging$slambda_3(this.oip_1, completion);
    i.pip_1 = it;
    return i;
  };
  function Logging$setupResponseLogging$slambda_4(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda_3(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.zfm(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging(logger, level, filters, sanitizedHeaders) {
    Companion_getInstance_0();
    filters = filters === VOID ? emptyList() : filters;
    this.qim_1 = logger;
    this.rim_1 = level;
    this.sim_1 = filters;
    this.tim_1 = sanitizedHeaders;
  }
  var properties_initialized_Logging_kt_588vu7;
  function _init_properties_Logging_kt__66pui5() {
    if (!properties_initialized_Logging_kt_588vu7) {
      properties_initialized_Logging_kt_588vu7 = true;
      ClientCallLogger = new AttributeKey('CallLogger');
      DisableLogging = new AttributeKey('DisableLogging');
    }
  }
  function logHeaders(_this__u8e3s4, headers, sanitizedHeaders) {
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp0_sortedBy = toList(headers);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = logHeaders$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var sortedHeaders = sortedWith(tmp0_sortedBy, tmp$ret$0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedHeaders.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.r();
      // Inline function 'kotlin.collections.component2' call
      var values = element.s();
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = sanitizedHeaders.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>.<anonymous>' call
          if (element_0.vim_1(key)) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_safe_receiver = tmp$ret$5;
      var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uim_1;
      logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
    }
  }
  function logHeader(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = '-> ' + key + ': ' + value;
    // Inline function 'kotlin.text.appendLine' call
    _this__u8e3s4.b(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
  }
  function logResponseHeader(log, response, level, sanitizedHeaders) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    if (level.bim_1) {
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine = 'RESPONSE: ' + response.a8g();
      // Inline function 'kotlin.text.appendLine' call
      log.ia(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var tmp1_appendLine = 'METHOD: ' + response.jfg().mff().kfg();
      // Inline function 'kotlin.text.appendLine' call
      log.ia(tmp1_appendLine).i9(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = 'FROM: ' + response.jfg().mff().off();
      // Inline function 'kotlin.text.appendLine' call
      log.ia(tmp2_appendLine).i9(_Char___init__impl__6a9atx(10));
    }
    var tmp;
    if (level.cim_1) {
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      log.ia('COMMON HEADERS').i9(_Char___init__impl__6a9atx(10));
      logHeaders(log, response.sf1().aes(), sanitizedHeaders);
      tmp = Unit_getInstance();
    }
  }
  function logResponseBody(log, contentType, content, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$4(log, contentType, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.iiq_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.iiq_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function logHeaders$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
    var tmp = a.r();
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
    tmp$ret$1 = b.r();
    return compareValues(tmp, tmp$ret$1);
  }
  function $logResponseBodyCOROUTINE$4(log, contentType, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.diq_1 = log;
    this.eiq_1 = contentType;
    this.fiq_1 = content;
  }
  protoOf($logResponseBodyCOROUTINE$4).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            var tmp0_appendLine = 'BODY Content-Type: ' + this.eiq_1;
            this.diq_1.ia(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
            this.diq_1.ia('BODY START').i9(_Char___init__impl__6a9atx(10));
            var tmp_0 = this;
            var tmp0_safe_receiver = this.eiq_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
            tmp_0.giq_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().gek_1 : tmp1_elvis_lhs;
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.fiq_1.uef(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.hiq_1 = readText(ARGUMENT, this.giq_1);
            this.el_1 = 4;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.el_1 = 4;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gl_1;
              var tmp_2 = this;
              tmp_2.hiq_1 = null;
              this.dl_1 = 3;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            this.el_1 = 4;
            var tmp2_elvis_lhs = this.hiq_1;
            var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
            this.diq_1.ia(message).i9(_Char___init__impl__6a9atx(10));
            this.diq_1.ia('BODY END');
            return Unit_getInstance();
          case 4:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 4) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function observe(_this__u8e3s4, log, $completion) {
    var tmp = new $observeCOROUTINE$5(_this__u8e3s4, log, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function toReadChannel(_this__u8e3s4) {
    var tmp = GlobalScope_getInstance();
    var tmp_0 = Dispatchers_getInstance().wu_1;
    return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).s10();
  }
  function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
    this.dir_1 = $this_toReadChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toReadChannel$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(toReadChannel$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toReadChannel$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.dir_1.df7(this.eir_1.s10(), this);
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
  protoOf(toReadChannel$slambda).ifh = function ($this$writer, completion) {
    var i = new toReadChannel$slambda(this.dir_1, completion);
    i.eir_1 = $this$writer;
    return i;
  };
  function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
    var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $observeCOROUTINE$5(_this__u8e3s4, log, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.riq_1 = _this__u8e3s4;
    this.siq_1 = log;
  }
  protoOf($observeCOROUTINE$5).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.tiq_1 = this.riq_1;
            var tmp_0 = this.tiq_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.dl_1 = 1;
              suspendResult = writeFully(this.siq_1, this.riq_1.yf6(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.tiq_1;
              if (tmp_1 instanceof ReadChannelContent) {
                var tmp_2 = this;
                var responseChannel = ByteChannel();
                var content = this.riq_1.bf7();
                copyToBoth(content, this.siq_1, responseChannel);
                tmp_2.uiq_1 = new LoggedContent(this.riq_1, responseChannel);
                this.dl_1 = 2;
                continue $sm;
              } else {
                var tmp_3 = this.tiq_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  var tmp_4 = this;
                  var responseChannel_0 = ByteChannel();
                  var content_0 = toReadChannel(this.riq_1);
                  copyToBoth(content_0, this.siq_1, responseChannel_0);
                  tmp_4.uiq_1 = new LoggedContent(this.riq_1, responseChannel_0);
                  this.dl_1 = 2;
                  continue $sm;
                } else {
                  var tmp_5 = this;
                  close(this.siq_1);
                  tmp_5.uiq_1 = this.riq_1;
                  this.dl_1 = 2;
                  continue $sm;
                }
              }
            }

          case 1:
            close(this.siq_1);
            this.uiq_1 = this.riq_1;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            return this.uiq_1;
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
  function get_DEFAULT(_this__u8e3s4) {
    return get_SIMPLE(_this__u8e3s4);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js.map
