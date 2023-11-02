(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui.js', './ktor-ktor-client-ktor-client-core.js', './compose-multiplatform-core-ui-unit.js', './ktor-ktor-http.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'Kamel-kamel-core'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'Kamel-kamel-core'.");
    }
    root['Kamel-kamel-core'] = factory(typeof this['Kamel-kamel-core'] === 'undefined' ? {} : this['Kamel-kamel-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui'], this['ktor-ktor-client-ktor-client-core'], this['compose-multiplatform-core-ui-unit'], this['ktor-ktor-http'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.dj;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isInterface = kotlin_kotlin.$_$.id;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var getKClass = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var ImageVector = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var equals = kotlin_kotlin.$_$.oc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.t;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.l;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var Long = kotlin_kotlin.$_$.jj;
  var rangeTo = kotlin_kotlin.$_$.ff;
  var coerceIn = kotlin_kotlin.$_$.cf;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var onDownload = kotlin_io_ktor_ktor_client_core.$_$.k;
  var takeFrom = kotlin_io_ktor_ktor_client_core.$_$.n;
  var url = kotlin_io_ktor_ktor_client_core.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.s;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.a1;
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var Url_0 = kotlin_io_ktor_ktor_http.$_$.y;
  var intercepted = kotlin_kotlin.$_$.kb;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var Error_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var createFailure = kotlin_kotlin.$_$.ik;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var removeSuffix = kotlin_kotlin.$_$.jh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var MutableMap = kotlin_kotlin.$_$.o6;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DataSource, 'DataSource', classMeta, Enum);
  setMetadataFor(loadSvgResource$slambda$o$collect$slambda, 'loadSvgResource$slambda$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(loadSvgResource$slambda, 'loadSvgResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(loadSvgResource$slambda_1, 'loadSvgResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(loadImageVectorResource$slambda$o$collect$slambda, 'loadImageVectorResource$slambda$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(loadImageVectorResource$slambda, 'loadImageVectorResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(loadImageVectorResource$slambda_1, 'loadImageVectorResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(loadImageBitmapResource$slambda$o$collect$slambda, 'loadImageBitmapResource$slambda$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(loadImageBitmapResource$slambda, 'loadImageBitmapResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(loadImageBitmapResource$slambda_1, 'loadImageBitmapResource$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Resource, 'Resource', interfaceMeta);
  setMetadataFor(Loading, 'Loading', classMeta, VOID, [Resource]);
  setMetadataFor(Success, 'Success', classMeta, VOID, [Resource]);
  setMetadataFor(Failure, 'Failure', classMeta, VOID, [Resource]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KamelConfigBuilder$build$1, VOID, classMeta);
  setMetadataFor(KamelConfigBuilder, 'KamelConfigBuilder', classMeta);
  setMetadataFor(ResourceConfigBuilder$build$1, VOID, classMeta);
  setMetadataFor(ResourceConfigBuilder, 'ResourceConfigBuilder', classMeta);
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Fetcher, 'Fetcher', interfaceMeta);
  setMetadataFor(HttpFetcher$fetch$slambda$slambda, 'HttpFetcher$fetch$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpFetcher$fetch$slambda, 'HttpFetcher$fetch$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, [Fetcher]);
  setMetadataFor(Mapper, 'Mapper', interfaceMeta);
  setMetadataFor(StringMapper$1, VOID, classMeta, VOID, [Mapper]);
  setMetadataFor(FileFetcher$fetch$slambda, 'FileFetcher$fetch$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(FileFetcher, 'FileFetcher', objectMeta, VOID, [Fetcher], VOID, VOID, [1]);
  setMetadataFor(URLMapper$1, VOID, classMeta, VOID, [Mapper]);
  setMetadataFor(URIMapper$1, VOID, classMeta, VOID, [Mapper]);
  setMetadataFor(URI, 'URI', classMeta);
  setMetadataFor(File, 'File', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(LruCache_0, 'LruCache', classMeta);
  //endregion
  var DataSource_Memory_instance;
  var DataSource_Disk_instance;
  var DataSource_Network_instance;
  var DataSource_None_instance;
  var DataSource_entriesInitialized;
  function DataSource_initEntries() {
    if (DataSource_entriesInitialized)
      return Unit_getInstance();
    DataSource_entriesInitialized = true;
    DataSource_Memory_instance = new DataSource('Memory', 0);
    DataSource_Disk_instance = new DataSource('Disk', 1);
    DataSource_Network_instance = new DataSource('Network', 2);
    DataSource_None_instance = new DataSource('None', 3);
  }
  function DataSource(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataSource_Memory_getInstance() {
    DataSource_initEntries();
    return DataSource_Memory_instance;
  }
  function DataSource_Disk_getInstance() {
    DataSource_initEntries();
    return DataSource_Disk_instance;
  }
  function DataSource_Network_getInstance() {
    DataSource_initEntries();
    return DataSource_Network_instance;
  }
  function DataSource_None_getInstance() {
    DataSource_initEntries();
    return DataSource_None_instance;
  }
  function loadCachedResourceOrNull(_this__u8e3s4, data, cache, dataKClass) {
    dataKClass = dataKClass === VOID ? getKClassFromExpression(data) : dataKClass;
    var output = mapInput(_this__u8e3s4, data, dataKClass);
    var tmp0_safe_receiver = cache.z2(output);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.kamel.core.loadCachedResourceOrNull.<anonymous>' call
      tmp = new Success(tmp0_safe_receiver, DataSource_Memory_getInstance());
    }
    return tmp;
  }
  function loadSvgResource(_this__u8e3s4, data, resourceConfig, dataKClass) {
    dataKClass = dataKClass === VOID ? getKClassFromExpression(data) : dataKClass;
    // Inline function 'io.kamel.core.loadResource' call
    var tmp0_loadResource = _this__u8e3s4.hgb();
    var tmp = flow(loadSvgResource$slambda_0(_this__u8e3s4, data, dataKClass, tmp0_loadResource, resourceConfig, null));
    return catch_0(tmp, loadSvgResource$slambda_2(null));
  }
  function loadImageVectorResource(_this__u8e3s4, data, resourceConfig, dataKClass) {
    dataKClass = dataKClass === VOID ? getKClassFromExpression(data) : dataKClass;
    // Inline function 'io.kamel.core.loadResource' call
    var tmp0_loadResource = _this__u8e3s4.igb();
    var tmp = flow(loadImageVectorResource$slambda_0(_this__u8e3s4, data, dataKClass, tmp0_loadResource, resourceConfig, null));
    return catch_0(tmp, loadImageVectorResource$slambda_2(null));
  }
  function loadImageBitmapResource(_this__u8e3s4, data, resourceConfig, dataKClass) {
    dataKClass = dataKClass === VOID ? getKClassFromExpression(data) : dataKClass;
    // Inline function 'io.kamel.core.loadResource' call
    var tmp0_loadResource = _this__u8e3s4.jgb();
    var tmp = flow(loadImageBitmapResource$slambda_0(_this__u8e3s4, data, dataKClass, tmp0_loadResource, resourceConfig, null));
    return catch_0(tmp, loadImageBitmapResource$slambda_2(null));
  }
  function loadSvgResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    this.sgb_1 = $collector;
    this.tgb_1 = $decoder;
    this.ugb_1 = $resourceConfig;
    this.vgb_1 = $tmp0_loadResource;
    this.wgb_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadSvgResource$slambda$o$collect$slambda).egc = function (value, $completion) {
    var tmp = this.fgc(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadSvgResource$slambda$o$collect$slambda).yl = function (p1, $completion) {
    return this.egc((!(p1 == null) ? isInterface(p1, Resource) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadSvgResource$slambda$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.ygb_1 = this.xgb_1;
            var tmp_0 = this.ygb_1;
            if (tmp_0 instanceof Loading) {
              this.zgb_1 = new Loading(this.xgb_1.ogc_1, this.xgb_1.jgc());
              this.dl_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this.ygb_1;
              if (tmp_1 instanceof Success) {
                var tmp_2 = this;
                tmp_2.agc_1 = this.xgb_1.kgc_1;
                this.dl_1 = 1;
                suspendResult = this.tgb_1.ngc(this.agc_1, this.ugb_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.ygb_1;
                if (tmp_3 instanceof Failure) {
                  this.zgb_1 = new Failure(this.xgb_1.ggc_1, this.xgb_1.jgc());
                  this.dl_1 = 2;
                  continue $sm;
                } else {
                  var tmp_4 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 1:
            this.bgc_1 = suspendResult;
            this.vgb_1.rgc(this.wgb_1, this.bgc_1);
            this.cgc_1 = this.bgc_1;
            this.zgb_1 = new Success(this.cgc_1, this.xgb_1.jgc());
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.dgc_1 = this.zgb_1;
            this.dl_1 = 3;
            suspendResult = this.sgb_1.z18(this.dgc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
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
  protoOf(loadSvgResource$slambda$o$collect$slambda).fgc = function (value, completion) {
    var i = new loadSvgResource$slambda$o$collect$slambda(this.sgb_1, this.tgb_1, this.ugb_1, this.vgb_1, this.wgb_1, completion);
    i.xgb_1 = value;
    return i;
  };
  function loadSvgResource$slambda$o$collect$slambda_0($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    var i = new loadSvgResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.egc(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.agd_1 = _this__u8e3s4;
    this.bgd_1 = collector;
  }
  protoOf($collectCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = loadSvgResource$slambda$o$collect$slambda_0(this.bgd_1, this.agd_1.dgd_1, this.agd_1.egd_1, this.agd_1.fgd_1, this.agd_1.ggd_1, null);
            suspendResult = this.agd_1.cgd_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.hgd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.hgd_1(value, $completion);
  };
  function _no_name_provided__qut3iv($bytesFlow, $decoder, $resourceConfig, $tmp0_loadResource, $output) {
    this.cgd_1 = $bytesFlow;
    this.dgd_1 = $decoder;
    this.egd_1 = $resourceConfig;
    this.fgd_1 = $tmp0_loadResource;
    this.ggd_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv).igd = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv).x17 = function (collector, $completion) {
    return this.igd(collector, $completion);
  };
  function loadSvgResource$slambda($this_loadSvgResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    this.rgd_1 = $this_loadSvgResource;
    this.sgd_1 = $data;
    this.tgd_1 = $dataKClass;
    this.ugd_1 = $tmp0_loadResource;
    this.vgd_1 = $resourceConfig;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadSvgResource$slambda).ege = function ($this$flow, $completion) {
    var tmp = this.fge($this$flow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadSvgResource$slambda).yl = function (p1, $completion) {
    return this.ege((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadSvgResource$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.xgd_1 = mapInput(this.rgd_1, this.sgd_1, this.tgd_1);
            this.ygd_1 = this.ugd_1.z2(this.xgd_1);
            if (!(this.ygd_1 == null)) {
              this.zgd_1 = new Success(this.ygd_1, DataSource_Memory_getInstance());
              this.dl_1 = 2;
              suspendResult = this.wgd_1.z18(this.zgd_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.age_1 = findFetcherFor(this.rgd_1, this.xgd_1);
              var tmp_0 = this;
              var type = getKClass(Painter);
              var tmp0_findLast = this.rgd_1.gge();
              var tmp$ret$0;
              l$ret$1: do {
                var iterator = tmp0_findLast.u1(tmp0_findLast.g());
                while (iterator.c2()) {
                  var element = iterator.e2();
                  var decoderType = element.hge();
                  if (decoderType.equals(type)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              var decoder = tmp$ret$0;
              l$ret$3: do {
                if (decoder == null) {
                  var message = 'Unable to find a decoder for ' + type;
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  break l$ret$3;
                }
              }
               while (false);
              tmp_0.bge_1 = (!(decoder == null) ? isInterface(decoder, Decoder) : false) ? decoder : THROW_CCE();
              this.cge_1 = this.age_1.ige(this.xgd_1, this.vgd_1);
              var tmp_1 = this;
              tmp_1.dge_1 = new _no_name_provided__qut3iv(this.cge_1, this.bge_1, this.vgd_1, this.ugd_1, this.xgd_1);
              this.dl_1 = 1;
              suspendResult = emitAll(this.wgd_1, this.dge_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
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
  protoOf(loadSvgResource$slambda).fge = function ($this$flow, completion) {
    var i = new loadSvgResource$slambda(this.rgd_1, this.sgd_1, this.tgd_1, this.ugd_1, this.vgd_1, completion);
    i.wgd_1 = $this$flow;
    return i;
  };
  function loadSvgResource$slambda_0($this_loadSvgResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    var i = new loadSvgResource$slambda($this_loadSvgResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.ege($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadSvgResource$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadSvgResource$slambda_1).tge = function ($this$catch, it, $completion) {
    var tmp = this.uge($this$catch, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadSvgResource$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.tge(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(loadSvgResource$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.rge_1.z18(new Failure(this.sge_1), this);
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
  protoOf(loadSvgResource$slambda_1).uge = function ($this$catch, it, completion) {
    var i = new loadSvgResource$slambda_1(completion);
    i.rge_1 = $this$catch;
    i.sge_1 = it;
    return i;
  };
  function loadSvgResource$slambda_2(resultContinuation) {
    var i = new loadSvgResource$slambda_1(resultContinuation);
    var l = function ($this$catch, it, $completion) {
      return i.tge($this$catch, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function loadImageVectorResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    this.dgf_1 = $collector;
    this.egf_1 = $decoder;
    this.fgf_1 = $resourceConfig;
    this.ggf_1 = $tmp0_loadResource;
    this.hgf_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageVectorResource$slambda$o$collect$slambda).egc = function (value, $completion) {
    var tmp = this.fgc(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageVectorResource$slambda$o$collect$slambda).yl = function (p1, $completion) {
    return this.egc((!(p1 == null) ? isInterface(p1, Resource) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadImageVectorResource$slambda$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.jgf_1 = this.igf_1;
            var tmp_0 = this.jgf_1;
            if (tmp_0 instanceof Loading) {
              this.kgf_1 = new Loading(this.igf_1.ogc_1, this.igf_1.jgc());
              this.dl_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this.jgf_1;
              if (tmp_1 instanceof Success) {
                var tmp_2 = this;
                tmp_2.lgf_1 = this.igf_1.kgc_1;
                this.dl_1 = 1;
                suspendResult = this.egf_1.ngc(this.lgf_1, this.fgf_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.jgf_1;
                if (tmp_3 instanceof Failure) {
                  this.kgf_1 = new Failure(this.igf_1.ggc_1, this.igf_1.jgc());
                  this.dl_1 = 2;
                  continue $sm;
                } else {
                  var tmp_4 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 1:
            this.mgf_1 = suspendResult;
            this.ggf_1.rgc(this.hgf_1, this.mgf_1);
            this.ngf_1 = this.mgf_1;
            this.kgf_1 = new Success(this.ngf_1, this.igf_1.jgc());
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.ogf_1 = this.kgf_1;
            this.dl_1 = 3;
            suspendResult = this.dgf_1.z18(this.ogf_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
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
  protoOf(loadImageVectorResource$slambda$o$collect$slambda).fgc = function (value, completion) {
    var i = new loadImageVectorResource$slambda$o$collect$slambda(this.dgf_1, this.egf_1, this.fgf_1, this.ggf_1, this.hgf_1, completion);
    i.igf_1 = value;
    return i;
  };
  function loadImageVectorResource$slambda$o$collect$slambda_0($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    var i = new loadImageVectorResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.egc(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xgf_1 = _this__u8e3s4;
    this.ygf_1 = collector;
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
            var tmp_0 = loadImageVectorResource$slambda$o$collect$slambda_0(this.ygf_1, this.xgf_1.agg_1, this.xgf_1.bgg_1, this.xgf_1.cgg_1, this.xgf_1.dgg_1, null);
            suspendResult = this.xgf_1.zgf_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.egg_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).z18 = function (value, $completion) {
    return this.egg_1(value, $completion);
  };
  function _no_name_provided__qut3iv_0($bytesFlow, $decoder, $resourceConfig, $tmp0_loadResource, $output) {
    this.zgf_1 = $bytesFlow;
    this.agg_1 = $decoder;
    this.bgg_1 = $resourceConfig;
    this.cgg_1 = $tmp0_loadResource;
    this.dgg_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv_0).fgg = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv_0).x17 = function (collector, $completion) {
    return this.fgg(collector, $completion);
  };
  function loadImageVectorResource$slambda($this_loadImageVectorResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    this.ogg_1 = $this_loadImageVectorResource;
    this.pgg_1 = $data;
    this.qgg_1 = $dataKClass;
    this.rgg_1 = $tmp0_loadResource;
    this.sgg_1 = $resourceConfig;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageVectorResource$slambda).bgh = function ($this$flow, $completion) {
    var tmp = this.cgh($this$flow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageVectorResource$slambda).yl = function (p1, $completion) {
    return this.bgh((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadImageVectorResource$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.ugg_1 = mapInput(this.ogg_1, this.pgg_1, this.qgg_1);
            this.vgg_1 = this.rgg_1.z2(this.ugg_1);
            if (!(this.vgg_1 == null)) {
              this.wgg_1 = new Success(this.vgg_1, DataSource_Memory_getInstance());
              this.dl_1 = 2;
              suspendResult = this.tgg_1.z18(this.wgg_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xgg_1 = findFetcherFor(this.ogg_1, this.ugg_1);
              var tmp_0 = this;
              var type = getKClass(ImageVector);
              var tmp0_findLast = this.ogg_1.gge();
              var tmp$ret$0;
              l$ret$1: do {
                var iterator = tmp0_findLast.u1(tmp0_findLast.g());
                while (iterator.c2()) {
                  var element = iterator.e2();
                  var decoderType = element.hge();
                  if (decoderType.equals(type)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              var decoder = tmp$ret$0;
              l$ret$3: do {
                if (decoder == null) {
                  var message = 'Unable to find a decoder for ' + type;
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  break l$ret$3;
                }
              }
               while (false);
              tmp_0.ygg_1 = (!(decoder == null) ? isInterface(decoder, Decoder) : false) ? decoder : THROW_CCE();
              this.zgg_1 = this.xgg_1.ige(this.ugg_1, this.sgg_1);
              var tmp_1 = this;
              tmp_1.agh_1 = new _no_name_provided__qut3iv_0(this.zgg_1, this.ygg_1, this.sgg_1, this.rgg_1, this.ugg_1);
              this.dl_1 = 1;
              suspendResult = emitAll(this.tgg_1, this.agh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
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
  protoOf(loadImageVectorResource$slambda).cgh = function ($this$flow, completion) {
    var i = new loadImageVectorResource$slambda(this.ogg_1, this.pgg_1, this.qgg_1, this.rgg_1, this.sgg_1, completion);
    i.tgg_1 = $this$flow;
    return i;
  };
  function loadImageVectorResource$slambda_0($this_loadImageVectorResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    var i = new loadImageVectorResource$slambda($this_loadImageVectorResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.bgh($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImageVectorResource$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageVectorResource$slambda_1).ngh = function ($this$catch, it, $completion) {
    var tmp = this.ogh($this$catch, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageVectorResource$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.ngh(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(loadImageVectorResource$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.lgh_1.z18(new Failure(this.mgh_1), this);
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
  protoOf(loadImageVectorResource$slambda_1).ogh = function ($this$catch, it, completion) {
    var i = new loadImageVectorResource$slambda_1(completion);
    i.lgh_1 = $this$catch;
    i.mgh_1 = it;
    return i;
  };
  function loadImageVectorResource$slambda_2(resultContinuation) {
    var i = new loadImageVectorResource$slambda_1(resultContinuation);
    var l = function ($this$catch, it, $completion) {
      return i.ngh($this$catch, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function loadImageBitmapResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    this.xgh_1 = $collector;
    this.ygh_1 = $decoder;
    this.zgh_1 = $resourceConfig;
    this.agi_1 = $tmp0_loadResource;
    this.bgi_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageBitmapResource$slambda$o$collect$slambda).egc = function (value, $completion) {
    var tmp = this.fgc(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageBitmapResource$slambda$o$collect$slambda).yl = function (p1, $completion) {
    return this.egc((!(p1 == null) ? isInterface(p1, Resource) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadImageBitmapResource$slambda$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dgi_1 = this.cgi_1;
            var tmp_0 = this.dgi_1;
            if (tmp_0 instanceof Loading) {
              this.egi_1 = new Loading(this.cgi_1.ogc_1, this.cgi_1.jgc());
              this.dl_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this.dgi_1;
              if (tmp_1 instanceof Success) {
                var tmp_2 = this;
                tmp_2.fgi_1 = this.cgi_1.kgc_1;
                this.dl_1 = 1;
                suspendResult = this.ygh_1.ngc(this.fgi_1, this.zgh_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.dgi_1;
                if (tmp_3 instanceof Failure) {
                  this.egi_1 = new Failure(this.cgi_1.ggc_1, this.cgi_1.jgc());
                  this.dl_1 = 2;
                  continue $sm;
                } else {
                  var tmp_4 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 1:
            this.ggi_1 = suspendResult;
            this.agi_1.rgc(this.bgi_1, this.ggi_1);
            this.hgi_1 = this.ggi_1;
            this.egi_1 = new Success(this.hgi_1, this.cgi_1.jgc());
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.igi_1 = this.egi_1;
            this.dl_1 = 3;
            suspendResult = this.xgh_1.z18(this.igi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
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
  protoOf(loadImageBitmapResource$slambda$o$collect$slambda).fgc = function (value, completion) {
    var i = new loadImageBitmapResource$slambda$o$collect$slambda(this.xgh_1, this.ygh_1, this.zgh_1, this.agi_1, this.bgi_1, completion);
    i.cgi_1 = value;
    return i;
  };
  function loadImageBitmapResource$slambda$o$collect$slambda_0($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation) {
    var i = new loadImageBitmapResource$slambda$o$collect$slambda($collector, $decoder, $resourceConfig, $tmp0_loadResource, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.egc(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rgi_1 = _this__u8e3s4;
    this.sgi_1 = collector;
  }
  protoOf($collectCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = loadImageBitmapResource$slambda$o$collect$slambda_0(this.sgi_1, this.rgi_1.ugi_1, this.rgi_1.vgi_1, this.rgi_1.wgi_1, this.rgi_1.xgi_1, null);
            suspendResult = this.rgi_1.tgi_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.ygi_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).z18 = function (value, $completion) {
    return this.ygi_1(value, $completion);
  };
  function _no_name_provided__qut3iv_1($bytesFlow, $decoder, $resourceConfig, $tmp0_loadResource, $output) {
    this.tgi_1 = $bytesFlow;
    this.ugi_1 = $decoder;
    this.vgi_1 = $resourceConfig;
    this.wgi_1 = $tmp0_loadResource;
    this.xgi_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv_1).zgi = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv_1).x17 = function (collector, $completion) {
    return this.zgi(collector, $completion);
  };
  function loadImageBitmapResource$slambda($this_loadImageBitmapResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    this.igj_1 = $this_loadImageBitmapResource;
    this.jgj_1 = $data;
    this.kgj_1 = $dataKClass;
    this.lgj_1 = $tmp0_loadResource;
    this.mgj_1 = $resourceConfig;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageBitmapResource$slambda).vgj = function ($this$flow, $completion) {
    var tmp = this.wgj($this$flow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageBitmapResource$slambda).yl = function (p1, $completion) {
    return this.vgj((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(loadImageBitmapResource$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.ogj_1 = mapInput(this.igj_1, this.jgj_1, this.kgj_1);
            this.pgj_1 = this.lgj_1.z2(this.ogj_1);
            if (!(this.pgj_1 == null)) {
              this.qgj_1 = new Success(this.pgj_1, DataSource_Memory_getInstance());
              this.dl_1 = 2;
              suspendResult = this.ngj_1.z18(this.qgj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.rgj_1 = findFetcherFor(this.igj_1, this.ogj_1);
              var tmp_0 = this;
              var type = getKClass(ImageBitmap);
              var tmp0_findLast = this.igj_1.gge();
              var tmp$ret$0;
              l$ret$1: do {
                var iterator = tmp0_findLast.u1(tmp0_findLast.g());
                while (iterator.c2()) {
                  var element = iterator.e2();
                  var decoderType = element.hge();
                  if (decoderType.equals(type)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              var decoder = tmp$ret$0;
              l$ret$3: do {
                if (decoder == null) {
                  var message = 'Unable to find a decoder for ' + type;
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  break l$ret$3;
                }
              }
               while (false);
              tmp_0.sgj_1 = (!(decoder == null) ? isInterface(decoder, Decoder) : false) ? decoder : THROW_CCE();
              this.tgj_1 = this.rgj_1.ige(this.ogj_1, this.mgj_1);
              var tmp_1 = this;
              tmp_1.ugj_1 = new _no_name_provided__qut3iv_1(this.tgj_1, this.sgj_1, this.mgj_1, this.lgj_1, this.ogj_1);
              this.dl_1 = 1;
              suspendResult = emitAll(this.ngj_1, this.ugj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
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
  protoOf(loadImageBitmapResource$slambda).wgj = function ($this$flow, completion) {
    var i = new loadImageBitmapResource$slambda(this.igj_1, this.jgj_1, this.kgj_1, this.lgj_1, this.mgj_1, completion);
    i.ngj_1 = $this$flow;
    return i;
  };
  function loadImageBitmapResource$slambda_0($this_loadImageBitmapResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation) {
    var i = new loadImageBitmapResource$slambda($this_loadImageBitmapResource, $data, $dataKClass, $tmp0_loadResource, $resourceConfig, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.vgj($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImageBitmapResource$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImageBitmapResource$slambda_1).hgk = function ($this$catch, it, $completion) {
    var tmp = this.igk($this$catch, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(loadImageBitmapResource$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.hgk(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(loadImageBitmapResource$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.fgk_1.z18(new Failure(this.ggk_1), this);
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
  protoOf(loadImageBitmapResource$slambda_1).igk = function ($this$catch, it, completion) {
    var i = new loadImageBitmapResource$slambda_1(completion);
    i.fgk_1 = $this$catch;
    i.ggk_1 = it;
    return i;
  };
  function loadImageBitmapResource$slambda_2(resultContinuation) {
    var i = new loadImageBitmapResource$slambda_1(resultContinuation);
    var l = function ($this$catch, it, $completion) {
      return i.hgk($this$catch, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Loading(progress, source) {
    source = source === VOID ? DataSource_None_getInstance() : source;
    this.ogc_1 = progress;
    this.pgc_1 = source;
    this.qgc_1 = 0;
  }
  protoOf(Loading).jgc = function () {
    return this.pgc_1;
  };
  protoOf(Loading).toString = function () {
    return 'Loading(progress=' + this.ogc_1 + ', source=' + this.pgc_1 + ')';
  };
  protoOf(Loading).hashCode = function () {
    var result = getNumberHashCode(this.ogc_1);
    result = imul(result, 31) + this.pgc_1.hashCode() | 0;
    return result;
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    var tmp0_other_with_cast = other instanceof Loading ? other : THROW_CCE();
    if (!equals(this.ogc_1, tmp0_other_with_cast.ogc_1))
      return false;
    if (!this.pgc_1.equals(tmp0_other_with_cast.pgc_1))
      return false;
    return true;
  };
  function Success(value, source) {
    source = source === VOID ? DataSource_None_getInstance() : source;
    this.kgc_1 = value;
    this.lgc_1 = source;
    this.mgc_1 = 0;
  }
  protoOf(Success).jgc = function () {
    return this.lgc_1;
  };
  protoOf(Success).toString = function () {
    return 'Success(value=' + this.kgc_1 + ', source=' + this.lgc_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    var result = this.kgc_1 == null ? 0 : hashCode(this.kgc_1);
    result = imul(result, 31) + this.lgc_1.hashCode() | 0;
    return result;
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.kgc_1, tmp0_other_with_cast.kgc_1))
      return false;
    if (!this.lgc_1.equals(tmp0_other_with_cast.lgc_1))
      return false;
    return true;
  };
  function Failure(exception, source) {
    source = source === VOID ? DataSource_None_getInstance() : source;
    this.ggc_1 = exception;
    this.hgc_1 = source;
    this.igc_1 = 0;
  }
  protoOf(Failure).jgc = function () {
    return this.hgc_1;
  };
  protoOf(Failure).toString = function () {
    return 'Failure(exception=' + this.ggc_1 + ', source=' + this.hgc_1 + ')';
  };
  protoOf(Failure).hashCode = function () {
    var result = hashCode(this.ggc_1);
    result = imul(result, 31) + this.hgc_1.hashCode() | 0;
    return result;
  };
  protoOf(Failure).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Failure))
      return false;
    var tmp0_other_with_cast = other instanceof Failure ? other : THROW_CCE();
    if (!equals(this.ggc_1, tmp0_other_with_cast.ggc_1))
      return false;
    if (!this.hgc_1.equals(tmp0_other_with_cast.hgc_1))
      return false;
    return true;
  };
  function Resource() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_DefaultCacheSize() {
    return DefaultCacheSize;
  }
  var DefaultCacheSize;
  function KamelConfigBuilder$build$1(this$0) {
    this.jgk_1 = this$0.pgk_1;
    this.kgk_1 = this$0.qgk_1;
    this.lgk_1 = this$0.rgk_1;
    this.mgk_1 = new LruCache(this$0.sgk_1);
    this.ngk_1 = new LruCache(this$0.tgk_1);
    this.ogk_1 = new LruCache(this$0.ugk_1);
  }
  protoOf(KamelConfigBuilder$build$1).wgk = function () {
    return this.jgk_1;
  };
  protoOf(KamelConfigBuilder$build$1).gge = function () {
    return this.kgk_1;
  };
  protoOf(KamelConfigBuilder$build$1).xgk = function () {
    return this.lgk_1;
  };
  protoOf(KamelConfigBuilder$build$1).jgb = function () {
    return this.mgk_1;
  };
  protoOf(KamelConfigBuilder$build$1).igb = function () {
    return this.ngk_1;
  };
  protoOf(KamelConfigBuilder$build$1).hgb = function () {
    return this.ogk_1;
  };
  function KamelConfigBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pgk_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.qgk_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.rgk_1 = LinkedHashMap_init_$Create$();
    this.sgk_1 = 0;
    this.tgk_1 = 0;
    this.ugk_1 = 0;
    this.vgk_1 = 8;
  }
  protoOf(KamelConfigBuilder).ygk = function (fetcher) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.pgk_1;
    var tmp1_plusAssign = isInterface(fetcher, Fetcher) ? fetcher : THROW_CCE();
    tmp0_plusAssign.a(tmp1_plusAssign);
  };
  protoOf(KamelConfigBuilder).zgk = function (decoder) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.qgk_1;
    var tmp1_plusAssign = isInterface(decoder, Decoder) ? decoder : THROW_CCE();
    tmp0_plusAssign.a(tmp1_plusAssign);
  };
  protoOf(KamelConfigBuilder).agl = function (mapper) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.rgk_1;
    var tmp1_set = mapper.bgl();
    var tmp2_set = isInterface(mapper, Mapper) ? mapper : THROW_CCE();
    tmp0_set.a5(tmp1_set, tmp2_set);
  };
  protoOf(KamelConfigBuilder).df = function () {
    return new KamelConfigBuilder$build$1(this);
  };
  function stringMapper(_this__u8e3s4) {
    return _this__u8e3s4.agl(get_StringMapper());
  }
  function urlMapper(_this__u8e3s4) {
    return _this__u8e3s4.agl(get_URLMapper());
  }
  function uriMapper(_this__u8e3s4) {
    return _this__u8e3s4.agl(get_URIMapper());
  }
  function fileFetcher(_this__u8e3s4) {
    return _this__u8e3s4.ygk(FileFetcher_getInstance());
  }
  function httpFetcher(_this__u8e3s4, block) {
    var tmp;
    if (block === VOID) {
      tmp = httpFetcher$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    return _this__u8e3s4.ygk(new HttpFetcher(HttpClient(block)));
  }
  function httpFetcher$lambda($this$null) {
    return Unit_getInstance();
  }
  function ResourceConfigBuilder$build$1(this$0) {
    this.cgl_1 = this$0.fgl_1.df();
    this.dgl_1 = this$0.ggl_1;
    this.egl_1 = this$0.hgl_1;
  }
  protoOf(ResourceConfigBuilder$build$1).jgl = function () {
    return this.cgl_1;
  };
  protoOf(ResourceConfigBuilder$build$1).om = function () {
    return this.dgl_1;
  };
  protoOf(ResourceConfigBuilder$build$1).q35 = function () {
    return this.egl_1;
  };
  function ResourceConfigBuilder(parentScope) {
    this.fgl_1 = new HttpRequestBuilder();
    this.ggl_1 = parentScope.b7(get_Kamel(Dispatchers_getInstance()));
    this.hgl_1 = Density(1.0, 1.0);
    this.igl_1 = 8;
  }
  protoOf(ResourceConfigBuilder).df = function () {
    return new ResourceConfigBuilder$build$1(this);
  };
  function Decoder() {
  }
  function Fetcher() {
  }
  function HttpFetcher$fetch$slambda$slambda($this_channelFlow, this$0, resultContinuation) {
    this.ugl_1 = $this_channelFlow;
    this.vgl_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpFetcher$fetch$slambda$slambda).zgl = function (bytesSentTotal, contentLength, $completion) {
    var tmp = this.agm(bytesSentTotal, contentLength, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpFetcher$fetch$slambda$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof Long ? p1 : THROW_CCE();
    return this.zgl(tmp, p2 instanceof Long ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpFetcher$fetch$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp_0 = this;
            var tmp0_takeUnless = coerceIn(this.wgl_1.vk() / this.xgl_1.vk(), rangeTo(0.0, 1.0));
            var tmp_1;
            if (!isNaN_0(tmp0_takeUnless)) {
              tmp_1 = tmp0_takeUnless;
            } else {
              tmp_1 = null;
            }

            tmp_0.ygl_1 = tmp_1;
            if (!(this.ygl_1 == null)) {
              this.dl_1 = 1;
              suspendResult = this.ugl_1.f16(new Loading(this.ygl_1, this.vgl_1.dgm_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 1:
            this.dl_1 = 2;
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
  protoOf(HttpFetcher$fetch$slambda$slambda).agm = function (bytesSentTotal, contentLength, completion) {
    var i = new HttpFetcher$fetch$slambda$slambda(this.ugl_1, this.vgl_1, completion);
    i.wgl_1 = bytesSentTotal;
    i.xgl_1 = contentLength;
    return i;
  };
  function HttpFetcher$fetch$slambda$slambda_0($this_channelFlow, this$0, resultContinuation) {
    var i = new HttpFetcher$fetch$slambda$slambda($this_channelFlow, this$0, resultContinuation);
    var l = function (bytesSentTotal, contentLength, $completion) {
      return i.zgl(bytesSentTotal, contentLength, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpFetcher$fetch$slambda(this$0, $resourceConfig, $data, resultContinuation) {
    this.mgm_1 = this$0;
    this.ngm_1 = $resourceConfig;
    this.ogm_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpFetcher$fetch$slambda).ugm = function ($this$channelFlow, $completion) {
    var tmp = this.vgm($this$channelFlow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpFetcher$fetch$slambda).yl = function (p1, $completion) {
    return this.ugm((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpFetcher$fetch$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            var tmp_0 = this;
            tmp_0.qgm_1 = this.mgm_1.bgm_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            onDownload(tmp0_apply, HttpFetcher$fetch$slambda$slambda_0(this.pgm_1, this.mgm_1, null));
            takeFrom(tmp0_apply, this.ngm_1.jgl());
            url(tmp0_apply, this.ogm_1);
            tmp_1.rgm_1 = tmp0_apply;
            this.dl_1 = 1;
            suspendResult = (new HttpStatement(this.rgm_1, this.qgm_1)).bg6(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.sgm_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = bodyAsChannel(this.sgm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tgm_1 = suspendResult;
            this.dl_1 = 3;
            suspendResult = this.pgm_1.f16(new Success(this.tgm_1, this.mgm_1.dgm_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
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
  protoOf(HttpFetcher$fetch$slambda).vgm = function ($this$channelFlow, completion) {
    var i = new HttpFetcher$fetch$slambda(this.mgm_1, this.ngm_1, this.ogm_1, completion);
    i.pgm_1 = $this$channelFlow;
    return i;
  };
  function HttpFetcher$fetch$slambda_0(this$0, $resourceConfig, $data, resultContinuation) {
    var i = new HttpFetcher$fetch$slambda(this$0, $resourceConfig, $data, resultContinuation);
    var l = function ($this$channelFlow, $completion) {
      return i.ugm($this$channelFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpFetcher(client) {
    this.bgm_1 = client;
    this.cgm_1 = getKClass(Url);
    this.dgm_1 = DataSource_Network_getInstance();
  }
  protoOf(HttpFetcher).kgl = function () {
    return this.cgm_1;
  };
  protoOf(HttpFetcher).wgm = function (_this__u8e3s4) {
    return _this__u8e3s4.ff5_1.df5_1 === 'https' ? true : _this__u8e3s4.ff5_1.df5_1 === 'http';
  };
  protoOf(HttpFetcher).lgl = function (_this__u8e3s4) {
    return this.wgm(_this__u8e3s4 instanceof Url ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HttpFetcher).xgm = function (data, resourceConfig) {
    return channelFlow(HttpFetcher$fetch$slambda_0(this, resourceConfig, data, null));
  };
  protoOf(HttpFetcher).ige = function (data, resourceConfig) {
    return this.xgm(data instanceof Url ? data : THROW_CCE(), resourceConfig);
  };
  function Mapper() {
  }
  function get_StringMapper() {
    _init_properties_Mappers_kt__qqrh9c();
    return StringMapper;
  }
  var StringMapper;
  function StringMapper$1() {
  }
  protoOf(StringMapper$1).bgl = function () {
    return PrimitiveClasses_getInstance().li();
  };
  protoOf(StringMapper$1).zgm = function (input) {
    return Url_0(input);
  };
  protoOf(StringMapper$1).ygm = function (input) {
    return this.zgm(typeof input === 'string' ? input : THROW_CCE());
  };
  var properties_initialized_Mappers_kt_ici0vy;
  function _init_properties_Mappers_kt__qqrh9c() {
    if (!properties_initialized_Mappers_kt_ici0vy) {
      properties_initialized_Mappers_kt_ici0vy = true;
      StringMapper = new StringMapper$1();
    }
  }
  function mapInput(_this__u8e3s4, input, inputKClass) {
    var tmp0_safe_receiver = _this__u8e3s4.xgk().z2(inputKClass);
    var output = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ygm(input);
    return output == null ? input : output;
  }
  function getBase64($this, file, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'io.kamel.core.fetcher.FileFetcher.getBase64.<anonymous>' call
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = FileFetcher$getBase64$lambda(reader, cancellable);
    reader.onerror = FileFetcher$getBase64$lambda_0(cancellable);
    return cancellable.lq();
  }
  function FileFetcher$fetch$slambda($data, resultContinuation) {
    this.ign_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FileFetcher$fetch$slambda).mgn = function ($this$flow, $completion) {
    var tmp = this.ngn($this$flow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(FileFetcher$fetch$slambda).yl = function (p1, $completion) {
    return this.mgn((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FileFetcher$fetch$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = getBase64(FileFetcher_getInstance(), this.ign_1.ogn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kgn_1 = suspendResult;
            this.lgn_1 = ByteReadChannel(this.kgn_1);
            this.dl_1 = 2;
            suspendResult = this.jgn_1.z18(new Success(this.lgn_1, FileFetcher_getInstance().rgn_1), this);
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
  protoOf(FileFetcher$fetch$slambda).ngn = function ($this$flow, completion) {
    var i = new FileFetcher$fetch$slambda(this.ign_1, completion);
    i.jgn_1 = $this$flow;
    return i;
  };
  function FileFetcher$fetch$slambda_0($data, resultContinuation) {
    var i = new FileFetcher$fetch$slambda($data, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.mgn($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FileFetcher$getBase64$lambda($reader, $cancellable) {
    return function (it) {
      var tmp = $reader.result;
      var arrayBuffer = tmp instanceof ArrayBuffer ? tmp : THROW_CCE();
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new Int8Array(arrayBuffer);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      var bytes = tmp$ret$1;
      $cancellable.as(bytes, null);
      return Unit_getInstance();
    };
  }
  function FileFetcher$getBase64$lambda_0($cancellable) {
    return function (error) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = Error_init_$Create$((error instanceof ErrorEvent ? error : THROW_CCE()).message);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
      $cancellable.n5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function FileFetcher() {
    FileFetcher_instance = this;
    this.qgn_1 = getKClass(File);
    this.rgn_1 = DataSource_Disk_getInstance();
  }
  protoOf(FileFetcher).kgl = function () {
    return this.qgn_1;
  };
  protoOf(FileFetcher).sgn = function (_this__u8e3s4) {
    return true;
  };
  protoOf(FileFetcher).lgl = function (_this__u8e3s4) {
    return this.sgn(_this__u8e3s4 instanceof File ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FileFetcher).tgn = function (data, resourceConfig) {
    return flow(FileFetcher$fetch$slambda_0(data, null));
  };
  protoOf(FileFetcher).ige = function (data, resourceConfig) {
    return this.tgn(data instanceof File ? data : THROW_CCE(), resourceConfig);
  };
  var FileFetcher_instance;
  function FileFetcher_getInstance() {
    if (FileFetcher_instance == null)
      new FileFetcher();
    return FileFetcher_instance;
  }
  function get_URLMapper() {
    _init_properties_Mappers_kt__qqrh9c_0();
    return URLMapper;
  }
  var URLMapper;
  function get_URIMapper() {
    _init_properties_Mappers_kt__qqrh9c_0();
    return URIMapper;
  }
  var URIMapper;
  function URLMapper$1() {
  }
  protoOf(URLMapper$1).bgl = function () {
    return getKClass(URL);
  };
  protoOf(URLMapper$1).ugn = function (input) {
    return get_StringMapper().ygm(removeSuffix(toString(input), '/'));
  };
  protoOf(URLMapper$1).ygm = function (input) {
    return this.ugn(input instanceof URL ? input : THROW_CCE());
  };
  function URIMapper$1() {
  }
  protoOf(URIMapper$1).bgl = function () {
    return getKClass(URI);
  };
  protoOf(URIMapper$1).vgn = function (input) {
    return get_StringMapper().ygm(input.wgn_1);
  };
  protoOf(URIMapper$1).ygm = function (input) {
    return this.vgn(input instanceof URI ? input : THROW_CCE());
  };
  var properties_initialized_Mappers_kt_ici0vy_0;
  function _init_properties_Mappers_kt__qqrh9c_0() {
    if (!properties_initialized_Mappers_kt_ici0vy_0) {
      properties_initialized_Mappers_kt_ici0vy_0 = true;
      URLMapper = new URLMapper$1();
      URIMapper = new URIMapper$1();
    }
  }
  function URI(uri) {
    this.wgn_1 = uri;
    this.xgn_1 = 0;
  }
  function File(file) {
    this.ogn_1 = file;
    this.pgn_1 = 0;
  }
  protoOf(File).toString = function () {
    return this.ogn_1.name;
  };
  function get_Kamel(_this__u8e3s4) {
    return _this__u8e3s4.wu_1;
  }
  function LruCache(maxSize) {
    this.ygn_1 = maxSize;
    this.zgn_1 = new LruCache_0(this.ygn_1);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.ygn_1 >= 0)) {
      // Inline function 'io.kamel.core.cache.LruCache.<anonymous>' call
      var message = 'Cache max size must be positive number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(LruCache).z2 = function (key) {
    return this.zgn_1.m28(key);
  };
  protoOf(LruCache).rgc = function (key, value) {
    return this.zgn_1.k27(key, value);
  };
  function trim($this) {
    var nodeToRemove = $this.ego_1;
    while (!(nodeToRemove == null) ? $this.fgo_1 > $this.ago_1 : false) {
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = $this.cgo_1;
      var tmp1_remove = nodeToRemove.ggo_1;
      (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).ye(tmp1_remove);
      unlinkNode($this, nodeToRemove);
      nodeToRemove = $this.ego_1;
    }
  }
  function addNode($this, key, value) {
    var node = new Node(key, value, $this.dgo_1, null);
    $this.dgo_1 = node;
    if (node.igo_1 == null) {
      $this.ego_1 = $this.dgo_1;
    } else {
      var tmp0_safe_receiver = node.igo_1;
      if (tmp0_safe_receiver != null)
        tmp0_safe_receiver.jgo_1 = $this.dgo_1;
    }
    $this.fgo_1 = $this.fgo_1 + $this.bgo_1(key, value) | 0;
    return node;
  }
  function moveNodeToHead($this, node) {
    if (node.jgo_1 == null) {
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = node.jgo_1;
    if (tmp0_safe_receiver != null)
      tmp0_safe_receiver.igo_1 = node.igo_1;
    if (node.igo_1 == null) {
      $this.ego_1 = node.jgo_1;
    } else {
      var tmp1_safe_receiver = node.igo_1;
      if (tmp1_safe_receiver != null)
        tmp1_safe_receiver.jgo_1 = node.jgo_1;
    }
    node.igo_1 = $this.dgo_1;
    node.jgo_1 = null;
    var tmp2_safe_receiver = $this.dgo_1;
    if (tmp2_safe_receiver != null)
      tmp2_safe_receiver.jgo_1 = node;
    $this.dgo_1 = node;
  }
  function unlinkNode($this, node) {
    if (node.jgo_1 == null) {
      $this.dgo_1 = node.igo_1;
    } else {
      var tmp0_safe_receiver = node.jgo_1;
      if (tmp0_safe_receiver != null)
        tmp0_safe_receiver.igo_1 = node.igo_1;
    }
    if (node.igo_1 == null) {
      $this.ego_1 = node.jgo_1;
    } else {
      var tmp1_safe_receiver = node.igo_1;
      if (tmp1_safe_receiver != null)
        tmp1_safe_receiver.jgo_1 = node.jgo_1;
    }
    $this.fgo_1 = $this.fgo_1 - $this.bgo_1(ensureNotNull(node.ggo_1), node.hgo_1) | 0;
    node.ggo_1 = null;
    node.hgo_1 = null;
    node.igo_1 = null;
    node.jgo_1 = null;
  }
  function Node(key, value, next, prev) {
    this.ggo_1 = key;
    this.hgo_1 = value;
    this.igo_1 = next;
    this.jgo_1 = prev;
  }
  function LruCache$_init_$lambda_ydwwvs(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return 1;
  }
  function LruCache_0(maxSize, weigher) {
    var tmp;
    if (weigher === VOID) {
      tmp = LruCache$_init_$lambda_ydwwvs;
    } else {
      tmp = weigher;
    }
    weigher = tmp;
    this.ago_1 = maxSize;
    this.bgo_1 = weigher;
    this.cgo_1 = LinkedHashMap_init_$Create$_0(0, 0.75);
    this.dgo_1 = null;
    this.ego_1 = null;
    this.fgo_1 = 0;
  }
  protoOf(LruCache_0).m28 = function (key) {
    var node = this.cgo_1.z2(key);
    if (!(node == null)) {
      moveNodeToHead(this, node);
    }
    return node == null ? null : node.hgo_1;
  };
  protoOf(LruCache_0).k27 = function (key, value) {
    var node = this.cgo_1.z2(key);
    if (node == null) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.cgo_1;
      var tmp1_set = addNode(this, key, value);
      tmp0_set.a5(key, tmp1_set);
    } else {
      node.hgo_1 = value;
      moveNodeToHead(this, node);
    }
    trim(this);
  };
  function findFetcherFor(_this__u8e3s4, data) {
    var type = getKClassFromExpression(data);
    // Inline function 'kotlin.collections.findLast' call
    var tmp0_findLast = _this__u8e3s4.wgk();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0_findLast.u1(tmp0_findLast.g());
      while (iterator.c2()) {
        var element = iterator.e2();
        // Inline function 'io.kamel.core.utils.findFetcherFor.<anonymous>' call
        var fetcherType = element.kgl();
        var isSameType = fetcherType.equals(type);
        var tmp;
        if (isSameType) {
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.kamel.core.utils.findFetcherFor.<anonymous>.<anonymous>' call
          tmp = element.lgl(data);
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var fetcher = tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (fetcher == null) {
        // Inline function 'io.kamel.core.utils.findFetcherFor.<anonymous>' call
        var message = 'Unable to find a fetcher for ' + type;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block_0;
      }
    }
    return (!(fetcher == null) ? isInterface(fetcher, Fetcher) : false) ? fetcher : THROW_CCE();
  }
  //region block: init
  DefaultCacheSize = 100;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_0;
  _.$_$.b = get_DefaultCacheSize;
  _.$_$.c = KamelConfigBuilder;
  _.$_$.d = ResourceConfigBuilder;
  _.$_$.e = fileFetcher;
  _.$_$.f = httpFetcher;
  _.$_$.g = stringMapper;
  _.$_$.h = uriMapper;
  _.$_$.i = urlMapper;
  _.$_$.j = Decoder;
  _.$_$.k = Failure;
  _.$_$.l = Loading;
  _.$_$.m = Success;
  _.$_$.n = loadCachedResourceOrNull;
  _.$_$.o = loadImageBitmapResource;
  _.$_$.p = loadImageVectorResource;
  _.$_$.q = loadSvgResource;
  //endregion
  return _;
}));

//# sourceMappingURL=Kamel-kamel-core.js.map
