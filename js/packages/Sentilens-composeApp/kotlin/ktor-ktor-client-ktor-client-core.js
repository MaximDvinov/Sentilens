(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-shared-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-shared-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-shared-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-shared-ktor-websockets.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-shared-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-shared-ktor-events' was not found. Please, check whether 'ktor-ktor-shared-ktor-events' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-shared-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-shared-ktor-websockets' was not found. Please, check whether 'ktor-ktor-shared-ktor-websockets' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    root['ktor-ktor-client-ktor-client-core'] = factory(typeof this['ktor-ktor-client-ktor-client-core'] === 'undefined' ? {} : this['ktor-ktor-client-ktor-client-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-utils'], this['kotlinx-atomicfu'], this['ktor-ktor-shared-ktor-events'], this['ktor-ktor-io'], this['ktor-ktor-http'], this['ktor-ktor-shared-ktor-websockets']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.kd;
  var toString = kotlin_kotlin.$_$.ce;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.m;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.s;
  var isInterface = kotlin_kotlin.$_$.id;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.c;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.oc;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var IllegalStateException = kotlin_kotlin.$_$.hj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var defineProp = kotlin_kotlin.$_$.mc;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ck;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var trimIndent = kotlin_kotlin.$_$.pi;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.x;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.b2;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.i1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var writer = kotlin_io_ktor_ktor_io.$_$.l1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.h;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.l;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.m;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.b;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var arrayOf = kotlin_kotlin.$_$.ek;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var emptySet = kotlin_kotlin.$_$.b8;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.x;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.n;
  var lazy = kotlin_kotlin.$_$.rk;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var setOf = kotlin_kotlin.$_$.ea;
  var get = kotlin_kotlin.$_$.sb;
  var fold = kotlin_kotlin.$_$.rb;
  var minusKey = kotlin_kotlin.$_$.tb;
  var plus = kotlin_kotlin.$_$.vb;
  var Element = kotlin_kotlin.$_$.ub;
  var joinToString = kotlin_kotlin.$_$.w8;
  var setOf_0 = kotlin_kotlin.$_$.fa;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.f1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.v;
  var get_DEFAULT_PORT = kotlin_io_ktor_ktor_http.$_$.r;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.u;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.m1;
  var first = kotlin_kotlin.$_$.i8;
  var checkBuilderCapacity = kotlin_kotlin.$_$.c7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.s;
  var URLBuilder_0 = kotlin_io_ktor_ktor_http.$_$.w;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.i;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ae;
  var toLong_0 = kotlin_kotlin.$_$.fi;
  var contentType = kotlin_io_ktor_ktor_http.$_$.g1;
  var isByteArray = kotlin_kotlin.$_$.cd;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.l5;
  var Long = kotlin_kotlin.$_$.jj;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.j1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.e;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.t;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.r;
  var Unit = kotlin_kotlin.$_$.bk;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.f;
  var toString_0 = kotlin_kotlin.$_$.dl;
  var toInt = kotlin_kotlin.$_$.di;
  var reversed = kotlin_kotlin.$_$.da;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var charset = kotlin_io_ktor_ktor_http.$_$.e1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.p1;
  var Comparator = kotlin_kotlin.$_$.aj;
  var compareValues = kotlin_kotlin.$_$.db;
  var get_name = kotlin_io_ktor_ktor_io.$_$.m;
  var toList = kotlin_kotlin.$_$.ta;
  var sortedWith = kotlin_kotlin.$_$.la;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var firstOrNull = kotlin_kotlin.$_$.f8;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.d1;
  var readText = kotlin_io_ktor_ktor_io.$_$.z;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.c1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.i1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.b1;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.h;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var trimMargin = kotlin_kotlin.$_$.qi;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var downTo = kotlin_kotlin.$_$.ef;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.j1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var IOException = kotlin_io_ktor_ktor_io.$_$.d1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.e;
  var discard = kotlin_io_ktor_ktor_io.$_$.b;
  var split = kotlin_io_ktor_ktor_utils.$_$.z;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.d2;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.y;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.e;
  var takeFrom_1 = kotlin_io_ktor_ktor_http.$_$.l1;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.i;
  var decode = kotlin_io_ktor_ktor_io.$_$.j;
  var hashCode = kotlin_kotlin.$_$.xc;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.e1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.c;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var get_platform = kotlin_io_ktor_ktor_utils.$_$.x;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.d;
  var intercepted = kotlin_kotlin.$_$.kb;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var extendThrowable = kotlin_kotlin.$_$.pc;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.m5;
  var createFailure = kotlin_kotlin.$_$.ik;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var toTypedArray = kotlin_kotlin.$_$.bb;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d;
  var Error_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.u;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.q;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.a1;
  var readShort = kotlin_io_ktor_ktor_io.$_$.y;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, VOID, [CoroutineScope, Closeable], VOID, VOID, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($bodyNullableCOROUTINE$1, '$bodyNullableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, VOID, [CoroutineScope], VOID, VOID, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, VOID, VOID, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.jfg().om();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse);
  setMetadataFor($saveCOROUTINE$3, '$saveCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$4, '$executeWithinCallContextCOROUTINE$4', classMeta, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().vfd_1;
    client.efb_1.zeu(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, VOID, [CoroutineScope, Closeable], VOID, VOID, [1]);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, VOID, [HttpClientEngine], VOID, VOID, [1]);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, VOID, [Element]);
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta);
  setMetadataFor(DefaultRequest$Plugin$install$slambda, 'DefaultRequest$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(DefaultRequestBuilder, 'DefaultRequestBuilder', classMeta);
  setMetadataFor(DefaultRequest, 'DefaultRequest', classMeta);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(defaultTransformers$1$content$1, VOID, classMeta, ByteArrayContent);
  setMetadataFor(defaultTransformers$1$content$2, VOID, classMeta, ReadChannelContent);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($validateResponseCOROUTINE$5, '$validateResponseCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($processExceptionCOROUTINE$6, '$processExceptionCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta);
  setMetadataFor(HttpRequest$1, VOID, classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Config_0, 'Config', classMeta);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($handleCallCOROUTINE$7, '$handleCallCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(Config_1, 'Config', classMeta);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, VOID, [HttpClientPlugin], VOID, VOID, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($executeCOROUTINE$8, '$executeCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(Config_2, 'Config', classMeta);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(Sender, 'Sender', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, VOID, [Sender], VOID, VOID, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, VOID, [Sender], VOID, VOID, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta);
  setMetadataFor(Plugin_5, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException);
  setMetadataFor(DelegatedCall, 'DelegatedCall', classMeta, HttpClientCall, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(DelegatedRequest, 'DelegatedRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse);
  setMetadataFor(ResponseObserver$Config$responseHandler$slambda, 'ResponseObserver$Config$responseHandler$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ResponseObserver$Plugin$install$slambda$slambda, 'ResponseObserver$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ResponseObserver$Plugin$install$slambda, 'ResponseObserver$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Config_3, 'Config', classMeta);
  setMetadataFor(Plugin_6, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(ResponseObserver, 'ResponseObserver', classMeta);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta);
  setMetadataFor(Phases, 'Phases', objectMeta);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, VOID, VOID, VOID, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, VOID, VOID, VOID, [2]);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse);
  setMetadataFor($bodyAsTextCOROUTINE$19, '$bodyAsTextCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor($bodyAsChannelCOROUTINE$20, '$bodyAsChannelCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(Phases_1, 'Phases', objectMeta);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, VOID, VOID, VOID, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($executeCOROUTINE$21, '$executeCOROUTINE$21', classMeta, CoroutineImpl);
  setMetadataFor($executeUnsafeCOROUTINE$22, '$executeUnsafeCOROUTINE$22', classMeta, CoroutineImpl);
  setMetadataFor($cleanupCOROUTINE$23, '$cleanupCOROUTINE$23', classMeta, CoroutineImpl);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent);
  setMetadataFor(Js, 'Js', objectMeta);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, VOID, classMeta);
  setMetadataFor($executeCOROUTINE$24, '$executeCOROUTINE$24', classMeta, CoroutineImpl);
  setMetadataFor($executeWebSocketRequestCOROUTINE$25, '$executeWebSocketRequestCOROUTINE$25', classMeta, CoroutineImpl);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($toRawCOROUTINE$26, '$toRawCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, VOID, [CoroutineScope], VOID, VOID, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.yfa_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel(this$0.wfa_1);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.sfb_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).wfb = function ($this$intercept, call, $completion) {
    var tmp = this.xfb($this$intercept, call, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClient$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp_0 = this.ufb_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.ufb_1) + '(' + getKClassFromExpression(this.ufb_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.dl_1 = 1;
            suspendResult = this.sfb_1.ffb_1.ueu(Unit_getInstance(), this.ufb_1.dfc(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vfb_1 = suspendResult;
            this.ufb_1.efc(this.vfb_1);
            this.dl_1 = 2;
            suspendResult = this.tfb_1.zet(this.ufb_1, this);
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
  protoOf(HttpClient$slambda).xfb = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.sfb_1, completion);
    i.tfb_1 = $this$intercept;
    i.ufb_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $completion) {
      return i.wfb($this$intercept, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.nfc_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).qfc = function ($this$intercept, it, $completion) {
    var tmp = this.rfc($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClient$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.ofc_1.aeu(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              var cause = this.gl_1;
              this.nfc_1.ifb_1.lf7(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.ofc_1.veu_1.dfc(), cause));
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
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
  protoOf(HttpClient$slambda_1).rfc = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.nfc_1, completion);
    i.ofc_1 = $this$intercept;
    i.pfc_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.qfc($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.afd_1 = _this__u8e3s4;
    this.bfd_1 = builder;
  }
  protoOf($executeCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.afd_1.ifb_1.lf7(get_HttpRequestCreated(), this.bfd_1);
            this.dl_1 = 1;
            suspendResult = this.afd_1.cfb_1.ueu(this.bfd_1, this.bfd_1.ffd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.wfa_1 = engine;
    this.xfa_1 = userConfig;
    this.yfa_1 = false;
    this.zfa_1 = atomic$boolean$1(false);
    this.afb_1 = Job(this.wfa_1.om().u6(Key_getInstance()));
    this.bfb_1 = this.wfa_1.om().b7(this.afb_1);
    this.cfb_1 = new HttpRequestPipeline(this.xfa_1.pfd_1);
    this.dfb_1 = new HttpResponsePipeline(this.xfa_1.pfd_1);
    this.efb_1 = new HttpSendPipeline(this.xfa_1.pfd_1);
    this.ffb_1 = new HttpReceivePipeline(this.xfa_1.pfd_1);
    this.gfb_1 = AttributesJsFn(true);
    this.hfb_1 = this.wfa_1.qfd();
    this.ifb_1 = new Events();
    this.jfb_1 = new HttpClientConfig();
    if (this.yfa_1) {
      this.afb_1.rn(HttpClient$lambda(this));
    }
    this.wfa_1.rfd(this);
    var tmp = Phases_getInstance_0().wfd_1;
    this.efb_1.zeu(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var tmp0_with = this.xfa_1;
    // Inline function 'kotlin.contracts.contract' call
    this.jfb_1.xfd(Plugin_getInstance_3());
    this.jfb_1.xfd(Plugin_getInstance());
    if (tmp0_with.nfd_1) {
      this.jfb_1.yfd('DefaultTransformers', HttpClient$lambda_0);
    }
    this.jfb_1.xfd(Plugin_getInstance_4());
    this.jfb_1.xfd(Companion_getInstance_10());
    if (tmp0_with.mfd_1) {
      this.jfb_1.xfd(Plugin_getInstance_2());
    }
    this.jfb_1.zfd(tmp0_with);
    if (tmp0_with.nfd_1) {
      this.jfb_1.xfd(Plugin_getInstance_1());
    }
    addDefaultResponseValidation(this.jfb_1);
    this.jfb_1.rfd(this);
    var tmp_0 = Phases_getInstance_1().afe_1;
    this.dfb_1.zeu(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).om = function () {
    return this.bfb_1;
  };
  protoOf(HttpClient).ffe = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$0(this, builder, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClient).o1y = function () {
    var success = this.zfa_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.gfb_1.zen(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = installedFeatures.feo().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.zen(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.o1y();
      }
    }
    this.afb_1.ku();
    if (this.yfa_1) {
      this.wfa_1.o1y();
    }
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + this.wfa_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    var engine = engineFactory.gfe(config.lfd_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp_0 = ensureNotNull(client.bfb_1.u6(Key_getInstance()));
    tmp_0.rn(HttpClient$lambda_2(engine));
    return client;
  }
  function HttpClient$lambda_1($this$null) {
    return Unit_getInstance();
  }
  function HttpClient$lambda_2($engine) {
    return function (it) {
      $engine.o1y();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.gfb_1.eeo(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.jfb_1.jfd_1.z2($plugin.r()));
      var pluginData = $plugin.hfe(config);
      $plugin.ife(pluginData, scope);
      attributes.ceo($plugin.r(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ifd_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.jfd_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.kfd_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.lfd_1 = HttpClientConfig$engineConfig$lambda;
    this.mfd_1 = true;
    this.nfd_1 = true;
    this.ofd_1 = false;
    this.pfd_1 = PlatformUtils_getInstance().ver_1;
  }
  protoOf(HttpClientConfig).jfe = function (plugin, configure) {
    var previousConfigBlock = this.jfd_1.z2(plugin.r());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.jfd_1;
    var tmp1_set = plugin.r();
    var tmp2_set = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0_set.a5(tmp1_set, tmp2_set);
    if (this.ifd_1.t2(plugin.r()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp3_set = this.ifd_1;
    var tmp4_set = plugin.r();
    var tmp5_set = HttpClientConfig$install$lambda_1(plugin);
    tmp3_set.a5(tmp4_set, tmp5_set);
  };
  protoOf(HttpClientConfig).xfd = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.jfe(plugin, configure);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.jfe.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).yfd = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.kfd_1.a5(key, block);
  };
  protoOf(HttpClientConfig).rfd = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.ifd_1.b3().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.kfd_1.b3().d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).zfd = function (other) {
    this.mfd_1 = other.mfd_1;
    this.nfd_1 = other.nfd_1;
    this.ofd_1 = other.ofd_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.ifd_1;
    var tmp1_plusAssign = other.ifd_1;
    tmp0_plusAssign.bf(tmp1_plusAssign);
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = this.jfd_1;
    var tmp3_plusAssign = other.jfd_1;
    tmp2_plusAssign.bf(tmp3_plusAssign);
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = this.kfd_1;
    var tmp5_plusAssign = other.kfd_1;
    tmp4_plusAssign.bf(tmp5_plusAssign);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.afc_1 = new DefaultHttpRequest($this, requestData);
    $this.bfc_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.ofe_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.rfe().ceo(Companion_getInstance_8().sfe_1, responseData.ofe_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance = this;
    this.sfe_1 = new AttributeKey('CustomResponse');
  }
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bff_1 = _this__u8e3s4;
    this.cff_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 9;
            this.el_1 = 8;
            if (instanceOf(this.bff_1.dfc(), this.cff_1.lev_1)) {
              this.dff_1 = this.bff_1.dfc();
              this.el_1 = 10;
              this.dl_1 = 7;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            if (!this.bff_1.iff() ? !this.bff_1.zfb_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.bff_1);
            }

            this.eff_1 = this.bff_1.rfe().aeo(Companion_getInstance_8().sfe_1);
            if (this.eff_1 == null) {
              this.dl_1 = 4;
              suspendResult = this.bff_1.jff(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.fff_1 = this.eff_1;
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.fff_1 = suspendResult;
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.gff_1 = this.fff_1;
            this.hff_1 = new HttpResponseContainer(this.cff_1, this.gff_1);
            this.dl_1 = 6;
            suspendResult = this.bff_1.yfb_1.dfb_1.ueu(this.bff_1, this.hff_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.lff_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.cff_1.lev_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.cff_1.lev_1;
              throw new NoTransformationFoundException(this.bff_1.dfc(), from, to);
            }

            this.dff_1 = result;
            this.el_1 = 10;
            this.dl_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.dff_1;
            complete(this.bff_1.dfc());
            return tmp_2;
          case 8:
            this.el_1 = 9;
            var tmp_3 = this.gl_1;
            if (tmp_3 instanceof Error) {
              var cause = this.gl_1;
              var tmp_4 = this;
              cancel_0(this.bff_1.dfc(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 9:
            this.el_1 = 10;
            var t = this.gl_1;
            complete(this.bff_1.dfc());
            throw t;
          case 10:
            throw this.gl_1;
          case 11:
            complete(this.bff_1.dfc());
            return Unit_getInstance();
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
  function HttpClientCall(client) {
    Companion_getInstance_8();
    this.yfb_1 = client;
    this.zfb_1 = atomic$boolean$1(false);
    this.cfc_1 = false;
  }
  protoOf(HttpClientCall).om = function () {
    return this.dfc().om();
  };
  protoOf(HttpClientCall).rfe = function () {
    return this.mff().rfe();
  };
  protoOf(HttpClientCall).mff = function () {
    var tmp = this.afc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).dfc = function () {
    var tmp = this.bfc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).iff = function () {
    return this.cfc_1;
  };
  protoOf(HttpClientCall).jff = function ($completion) {
    return this.dfc().lcd();
  };
  protoOf(HttpClientCall).nff = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.mff().off() + ', ' + this.dfc().a8g() + ']';
  };
  protoOf(HttpClientCall).efc = function (response) {
    this.bfc_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.pff_1 = 'Response already received: ' + call;
  }
  protoOf(DoubleReceiveException).m1 = function () {
    return this.pff_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.qff_1 = trimIndent("\n        Expected response body of the type '" + to + "' but was '" + from + "'\n        In response from `" + get_request(response).off() + '`\n        Response status `' + response.a8g() + '`\n        Response header `ContentType: ' + response.sf1().weq(HttpHeaders_getInstance().hey_1) + '` \n        Request header `Accept: ' + get_request(response).sf1().weq(HttpHeaders_getInstance().pex_1) + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
  }
  protoOf(NoTransformationFoundException).m1 = function () {
    return this.qff_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.ffg_1 = responseBody;
    this.afc_1 = new SavedHttpRequest(this, request);
    this.bfc_1 = new SavedHttpResponse(this, this.ffg_1, response);
    this.gfg_1 = true;
  }
  protoOf(SavedHttpCall).jff = function ($completion) {
    return ByteReadChannel_0(this.ffg_1);
  };
  protoOf(SavedHttpCall).iff = function () {
    return this.gfg_1;
  };
  function SavedHttpRequest(call, origin) {
    this.hfg_1 = call;
    this.ifg_1 = origin;
  }
  protoOf(SavedHttpRequest).jfg = function () {
    return this.hfg_1;
  };
  protoOf(SavedHttpRequest).rfe = function () {
    return this.ifg_1.rfe();
  };
  protoOf(SavedHttpRequest).om = function () {
    return this.ifg_1.om();
  };
  protoOf(SavedHttpRequest).sf1 = function () {
    return this.ifg_1.sf1();
  };
  protoOf(SavedHttpRequest).kfg = function () {
    return this.ifg_1.kfg();
  };
  protoOf(SavedHttpRequest).off = function () {
    return this.ifg_1.off();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.lfg_1 = call;
    this.mfg_1 = Job();
    this.nfg_1 = origin.a8g();
    this.ofg_1 = origin.ufg();
    this.pfg_1 = origin.vfg();
    this.qfg_1 = origin.wfg();
    this.rfg_1 = origin.sf1();
    this.sfg_1 = origin.om().b7(this.mfg_1);
    this.tfg_1 = ByteReadChannel_0(body);
  }
  protoOf(SavedHttpResponse).jfg = function () {
    return this.lfg_1;
  };
  protoOf(SavedHttpResponse).a8g = function () {
    return this.nfg_1;
  };
  protoOf(SavedHttpResponse).ufg = function () {
    return this.ofg_1;
  };
  protoOf(SavedHttpResponse).vfg = function () {
    return this.pfg_1;
  };
  protoOf(SavedHttpResponse).wfg = function () {
    return this.qfg_1;
  };
  protoOf(SavedHttpResponse).sf1 = function () {
    return this.rfg_1;
  };
  protoOf(SavedHttpResponse).om = function () {
    return this.sfg_1;
  };
  protoOf(SavedHttpResponse).lcd = function () {
    return this.tfg_1;
  };
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zff_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.zff_1.dfc().lcd().uef(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes(ARGUMENT);
            return new SavedHttpCall(this.zff_1.yfb_1, this.zff_1.mff(), this.zff_1.dfc(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.ffh_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$content$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ObservableContent$content$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$content$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.ffh_1.df7(this.gfh_1.s10(), this);
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
  protoOf(ObservableContent$content$slambda).ifh = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.ffh_1, completion);
    i.gfh_1 = $this$writer;
    return i;
  };
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.kfh_1 = callContext;
    this.lfh_1 = listener;
    var tmp = this;
    var tmp_0;
    if (delegate instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.yf6());
    } else {
      if (delegate instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (delegate instanceof NoContent) {
          tmp_0 = Companion_getInstance().ge9();
        } else {
          if (delegate instanceof ReadChannelContent) {
            tmp_0 = delegate.bf7();
          } else {
            if (delegate instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.kfh_1, true, ObservableContent$content$slambda_0(delegate, null)).s10();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.mfh_1 = tmp_0;
    this.nfh_1 = delegate;
  }
  protoOf(ObservableContent).wf6 = function () {
    return this.nfh_1.wf6();
  };
  protoOf(ObservableContent).xf6 = function () {
    return this.nfh_1.xf6();
  };
  protoOf(ObservableContent).a8g = function () {
    return this.nfh_1.a8g();
  };
  protoOf(ObservableContent).sf1 = function () {
    return this.nfh_1.sf1();
  };
  protoOf(ObservableContent).bf7 = function () {
    return observable(this.mfh_1, this.kfh_1, this.xf6(), this.lfh_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.ifb_1.lf7(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.om().u6(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pm();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.gfi_1.d();
    while (tmp0_iterator.e()) {
      var requestedExtension = tmp0_iterator.f();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.hfi().n(requestedExtension)) {
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        var message = "Engine doesn't support " + requestedExtension;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.qfi_1 = $client;
    this.rfi_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).wfb = function ($this$intercept, content, $completion) {
    var tmp = this.xfb($this$intercept, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClientEngine$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.zfi(this.sfi_1.veu_1);
            var tmp0_subject = this.tfi_1;
            if (tmp0_subject == null) {
              tmp0_apply.ffd_1 = NullBody_getInstance();
              var tmp_1 = JsType_getInstance();
              var tmp_2 = PrimitiveClasses_getInstance().bi();
              var tmp_3;
              try {
                tmp_3 = createKType(PrimitiveClasses_getInstance().bi(), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0_apply.afj(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.ffd_1 = this.tfi_1;
                tmp0_apply.afj(null);
              } else {
                tmp0_apply.ffd_1 = this.tfi_1;
                var tmp_5 = JsType_getInstance();
                var tmp_6 = PrimitiveClasses_getInstance().bi();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().bi(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0_apply.afj(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            tmp_0.ufi_1 = tmp0_apply;
            this.qfi_1.ifb_1.lf7(get_HttpRequestIsReadyForSending(), this.ufi_1);
            var tmp_9 = this;
            var tmp1_apply = this.ufi_1.df();
            tmp1_apply.ffi_1.ceo(get_CLIENT_CONFIG(), this.qfi_1.jfb_1);
            tmp_9.vfi_1 = tmp1_apply;
            validateHeaders(this.vfi_1);
            checkExtensions(this.rfi_1, this.vfi_1);
            this.dl_1 = 1;
            suspendResult = executeWithinCallContext(this.rfi_1, this.vfi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wfi_1 = suspendResult;
            this.xfi_1 = HttpClientCall_init_$Create$(this.qfi_1, this.vfi_1, this.wfi_1);
            this.yfi_1 = this.xfi_1.dfc();
            this.qfi_1.ifb_1.lf7(get_HttpResponseReceived(), this.yfi_1);
            var tmp_10 = get_job(this.yfi_1.om());
            tmp_10.rn(HttpClientEngine$install$slambda$lambda(this.qfi_1, this.yfi_1));
            this.dl_1 = 2;
            suspendResult = this.sfi_1.zet(this.xfi_1, this);
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
  protoOf(HttpClientEngine$install$slambda).xfb = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.qfi_1, this.rfi_1, completion);
    i.sfi_1 = $this$intercept;
    i.tfi_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.wfb($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.jfj_1 = this$0;
    this.kfj_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).mfj = function ($this$async, $completion) {
    var tmp = this.u1e($this$async, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).yl = function (p1, $completion) {
    return this.mfj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            if (_get_closed__iwkfs1(this.jfj_1)) {
              throw new ClientEngineClosedException();
            }

            this.dl_1 = 1;
            suspendResult = this.jfj_1.nfj(this.kfj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).u1e = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.jfj_1, this.kfj_1, completion);
    i.lfj_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.mfj($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wfh_1 = _this__u8e3s4;
    this.xfh_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$4).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = createCallContext(this.wfh_1, this.xfh_1.efi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yfh_1 = suspendResult;
            this.zfh_1 = this.yfh_1.b7(new KtorCallContextElement(this.yfh_1));
            this.dl_1 = 2;
            suspendResult = async(this.wfh_1, this.zfh_1, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.wfh_1, this.xfh_1, null)).rr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.cfi_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.zer();
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      if (HttpHeaders_getInstance().kf1_1.n(element)) {
        tmp0_filterTo.a(element);
      }
    }
    var unsafeRequestHeaders = tmp0_filterTo;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.l()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.om().b7(callJob).b7(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.p5().u6(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.tn(true, VOID, createCallContext$lambda(callJob));
      callJob.rn(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.xn(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.gp();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.ofj_1 = cause;
  }
  protoOf(ClientEngineClosedException).n1 = function () {
    return this.ofj_1;
  };
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().b7(this$0.tfj()).b7(new CoroutineName(this$0.pfj_1 + '-context'));
    };
  }
  function HttpClientEngineBase(engineName) {
    this.pfj_1 = engineName;
    this.qfj_1 = atomic$boolean$1(false);
    this.rfj_1 = ioDispatcher();
    var tmp = this;
    tmp.sfj_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).tfj = function () {
    return this.rfj_1;
  };
  protoOf(HttpClientEngineBase).om = function () {
    // Inline function 'kotlin.getValue' call
    coroutineContext$factory();
    return this.sfj_1.s();
  };
  protoOf(HttpClientEngineBase).o1y = function () {
    if (!this.qfj_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.om().u6(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.ku();
  };
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.om();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_5());
    }
  }
  function HttpClientEngineConfig() {
    this.ufj_1 = 4;
    this.vfj_1 = false;
    this.wfj_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_9();
    this.xfj_1 = callContext;
  }
  protoOf(KtorCallContextElement).r = function () {
    return Companion_getInstance_9();
  };
  function callContext($completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.p5();
    return ensureNotNull(tmp$ret$0.u6(Companion_getInstance_9())).xfj_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.bes(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.weq(HttpHeaders_getInstance().nf0_1) == null ? content.sf1().weq(HttpHeaders_getInstance().nf0_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().nf0_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.wf6();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.sf1().weq(HttpHeaders_getInstance().hey_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.weq(HttpHeaders_getInstance().hey_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.xf6();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.sf1().weq(HttpHeaders_getInstance().eey_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.weq(HttpHeaders_getInstance().eey_1) : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().hey_1, type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().eey_1, length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().rer_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.kes($requestHeaders);
      $this$buildHeaders.kes($content.sf1());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().eey_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().hey_1 === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().n(key)) {
        var tmp0_iterator = values.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_getInstance();
      } else {
        var separator = HttpHeaders_getInstance().iey_1 === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().key_1, HttpHeaders_getInstance().qey_1, HttpHeaders_getInstance().cez_1, HttpHeaders_getInstance().xey_1, HttpHeaders_getInstance().bez_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.cfb_1.weu(Phases_getInstance().bfk_1, observableContentPhase);
    scope.cfb_1.zeu(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().ffk_1;
    scope.ffb_1.zeu(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.gfk_1 = new AttributeKey('BodyProgress');
  }
  protoOf(Plugin).r = function () {
    return this.gfk_1;
  };
  protoOf(Plugin).hfk = function (block) {
    return new BodyProgress();
  };
  protoOf(Plugin).hfe = function (block) {
    return this.hfk(block);
  };
  protoOf(Plugin).ifk = function (plugin, scope) {
    handle(plugin, scope);
  };
  protoOf(Plugin).ife = function (plugin, scope) {
    return this.ifk(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$handle$slambda).wfb = function ($this$intercept, content, $completion) {
    var tmp = this.xfb($this$intercept, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(BodyProgress$handle$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$handle$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.rfk_1.veu_1.hfd_1.aeo(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.tfk_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.sfk_1;
            tmp_2.ufk_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.rfk_1.veu_1.gfd_1, this.tfk_1);
            this.dl_1 = 1;
            suspendResult = this.rfk_1.zet(this.ufk_1, this);
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
  protoOf(BodyProgress$handle$slambda).xfb = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.rfk_1 = $this$intercept;
    i.sfk_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.wfb($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$handle$slambda_1).hfl = function ($this$intercept, response, $completion) {
    var tmp = this.ifl($this$intercept, response, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(BodyProgress$handle$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.hfl(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$handle$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.efl_1.jfg().mff().rfe().aeo(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.ffl_1 = tmp_1;
            this.gfl_1 = withObservableDownload(this.efl_1, this.ffl_1);
            this.dl_1 = 1;
            suspendResult = this.dfl_1.zet(this.gfl_1, this);
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
  protoOf(BodyProgress$handle$slambda_1).ifl = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.dfl_1 = $this$intercept;
    i.efl_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.hfl($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var observableByteChannel = observable(_this__u8e3s4.lcd(), _this__u8e3s4.om(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4.jfg(), observableByteChannel).dfc();
  }
  function onDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    if (listener == null) {
      _this__u8e3s4.hfd_1.deo(get_DownloadProgressListenerAttributeKey());
    } else {
      _this__u8e3s4.hfd_1.ceo(get_DownloadProgressListenerAttributeKey(), listener);
    }
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_LOGGER() {
    _init_properties_DefaultRequest_kt__yzsodq();
    return LOGGER;
  }
  var LOGGER;
  function defaultRequest(_this__u8e3s4, block) {
    _init_properties_DefaultRequest_kt__yzsodq();
    var tmp = Plugin_getInstance_0();
    _this__u8e3s4.jfe(tmp, defaultRequest$lambda(block));
  }
  function mergeUrls($this, baseUrl, requestUrl) {
    if (requestUrl.tf4_1.equals(Companion_getInstance_0().wf5_1)) {
      requestUrl.tf4_1 = baseUrl.ff5_1;
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = requestUrl.uf4_1;
    if (charSequenceLength(tmp0_isNotEmpty) > 0)
      return Unit_getInstance();
    var resultUrl = URLBuilder(baseUrl);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>' call
    resultUrl.tf4_1 = requestUrl.tf4_1;
    if (!(requestUrl.vf4_1 === get_DEFAULT_PORT())) {
      resultUrl.vf4_1 = requestUrl.vf4_1;
    }
    resultUrl.af5_1 = concatenatePath(Plugin_getInstance_0(), resultUrl.af5_1, requestUrl.af5_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty_0 = requestUrl.zf4_1;
    if (charSequenceLength(tmp0_isNotEmpty_0) > 0) {
      resultUrl.zf4_1 = requestUrl.zf4_1;
    }
    // Inline function 'kotlin.apply' call
    var tmp1_apply = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>.<anonymous>' call
    appendAll(tmp1_apply, resultUrl.bf5_1);
    var defaultParameters = tmp1_apply;
    resultUrl.hf6(requestUrl.bf5_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = defaultParameters.aes().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.r();
      // Inline function 'kotlin.collections.component2' call
      var values = element.s();
      if (!resultUrl.bf5_1.ges(key)) {
        resultUrl.bf5_1.fes(key, values);
      }
    }
    takeFrom(requestUrl, resultUrl);
  }
  function concatenatePath($this, parent, child) {
    if (child.l())
      return parent;
    if (parent.l())
      return child;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = first(child);
    if (charSequenceLength(tmp0_isEmpty) === 0)
      return child;
    // Inline function 'kotlin.collections.buildList' call
    var tmp1_buildList = (parent.g() + child.g() | 0) - 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    checkBuilderCapacity(tmp1_buildList);
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$_0(tmp1_buildList);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.concatenatePath.<anonymous>' call
    var inductionVariable = 0;
    var last = parent.g() - 1 | 0;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp0_apply.a(parent.m(index));
      }
       while (inductionVariable < last);
    tmp0_apply.k(child);
    return tmp0_apply.df();
  }
  function DefaultRequest$Plugin$install$slambda($plugin, resultContinuation) {
    this.rfl_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultRequest$Plugin$install$slambda).wfb = function ($this$intercept, it, $completion) {
    var tmp = this.xfb($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DefaultRequest$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(DefaultRequest$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          var originalUrlString = this.sfl_1.veu_1.cfd_1.toString();
          var tmp0_apply = new DefaultRequestBuilder();
          appendAll(tmp0_apply.ufl_1, this.sfl_1.veu_1.efd_1);
          this.rfl_1.xfl_1(tmp0_apply);
          var defaultRequest = tmp0_apply;
          var defaultUrl = defaultRequest.vfl_1.df();
          mergeUrls(Plugin_getInstance_0(), defaultUrl, this.sfl_1.veu_1.cfd_1);
          var tmp0_iterator = defaultRequest.wfl_1.feo().d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            if (!this.sfl_1.veu_1.hfd_1.beo(element)) {
              this.sfl_1.veu_1.hfd_1.ceo(element instanceof AttributeKey ? element : THROW_CCE(), defaultRequest.wfl_1.zen(element));
            }
          }
          this.sfl_1.veu_1.efd_1.a4();
          this.sfl_1.veu_1.efd_1.kes(defaultRequest.ufl_1.df());
          get_LOGGER().pev('Applied DefaultRequest to ' + originalUrlString + '. New url: ' + this.sfl_1.veu_1.cfd_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultRequest$Plugin$install$slambda).xfb = function ($this$intercept, it, completion) {
    var i = new DefaultRequest$Plugin$install$slambda(this.rfl_1, completion);
    i.sfl_1 = $this$intercept;
    i.tfl_1 = it;
    return i;
  };
  function DefaultRequest$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new DefaultRequest$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.wfb($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.yfl_1 = new AttributeKey('DefaultRequest');
  }
  protoOf(Plugin_0).r = function () {
    return this.yfl_1;
  };
  protoOf(Plugin_0).zfl = function (block) {
    return new DefaultRequest(block);
  };
  protoOf(Plugin_0).hfe = function (block) {
    return this.zfl(block);
  };
  protoOf(Plugin_0).afm = function (plugin, scope) {
    var tmp = Phases_getInstance().yfj_1;
    scope.cfb_1.zeu(tmp, DefaultRequest$Plugin$install$slambda_0(plugin, null));
  };
  protoOf(Plugin_0).ife = function (plugin, scope) {
    return this.afm(plugin instanceof DefaultRequest ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function DefaultRequestBuilder() {
    this.ufl_1 = new HeadersBuilder();
    this.vfl_1 = new URLBuilder_0();
    this.wfl_1 = AttributesJsFn(true);
  }
  protoOf(DefaultRequestBuilder).sf1 = function () {
    return this.ufl_1;
  };
  protoOf(DefaultRequestBuilder).bfm = function (urlString) {
    takeFrom_0(this.vfl_1, urlString);
  };
  function DefaultRequest(block) {
    Plugin_getInstance_0();
    this.xfl_1 = block;
  }
  function defaultRequest$lambda($block) {
    return function ($this$install) {
      $block($this$install);
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultRequest_kt_au5efk;
  function _init_properties_DefaultRequest_kt__yzsodq() {
    if (!properties_initialized_DefaultRequest_kt_au5efk) {
      properties_initialized_DefaultRequest_kt_au5efk = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultRequest');
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER_0() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER_0;
  }
  var LOGGER_0;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.cfm_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.efm_1 = 'Unhandled redirect: ' + response.jfg().mff().kfg().bf2_1 + ' ' + response.jfg().mff().off() + '. ' + ('Status: ' + response.a8g() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(RedirectResponseException).m1 = function () {
    return this.efm_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.gfm_1 = 'Client request(' + response.jfg().mff().kfg().bf2_1 + ' ' + response.jfg().mff().off() + ') ' + ('invalid: ' + response.a8g() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ClientRequestException).m1 = function () {
    return this.gfm_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.ifm_1 = 'Server error(' + response.jfg().mff().kfg().bf2_1 + ' ' + response.jfg().mff().off() + ': ' + ('' + response.a8g() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ServerResponseException).m1 = function () {
    return this.ifm_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).zfm = function (response, $completion) {
    var tmp = this.afn(response, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).yl = function (p1, $completion) {
    return this.zfm(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.sfm_1 = this.rfm_1.jfg().rfe().zen(get_ExpectSuccessAttributeKey());
            if (!this.sfm_1) {
              get_LOGGER_0().pev('Skipping default response validation for ' + this.rfm_1.jfg().mff().off());
              return Unit_getInstance();
            }

            this.tfm_1 = this.rfm_1.a8g().nf4_1;
            this.ufm_1 = this.rfm_1.jfg();
            if (this.tfm_1 < 300 ? true : this.ufm_1.rfe().beo(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.dl_1 = 1;
            suspendResult = save(this.ufm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vfm_1 = suspendResult;
            this.vfm_1.rfe().ceo(get_ValidateMark(), Unit_getInstance());
            this.wfm_1 = this.vfm_1;
            this.xfm_1 = this.wfm_1.dfc();
            this.el_1 = 3;
            this.dl_1 = 2;
            suspendResult = bodyAsText(this.xfm_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.yfm_1 = suspendResult;
            this.el_1 = 5;
            this.dl_1 = 4;
            continue $sm;
          case 3:
            this.el_1 = 5;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.gl_1;
              var tmp_1 = this;
              tmp_1.yfm_1 = '<body failed decoding>';
              this.dl_1 = 4;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 4:
            this.el_1 = 5;
            var exceptionResponseText = this.yfm_1;
            var tmp0_subject = this.tfm_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.xfm_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.xfm_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.xfm_1, exceptionResponseText) : new ResponseException(this.xfm_1, exceptionResponseText);
            get_LOGGER_0().pev('Default response validation for ' + this.rfm_1.jfg().mff().off() + ' failed with ' + exception);
            throw exception;
          case 5:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 5) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).afn = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.rfm_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $completion) {
      return i.zfm(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.dfn_1 = $this_addDefaultResponseValidation.ofd_1;
      $this$HttpResponseValidator.efn(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_1() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_1;
  }
  var LOGGER_1;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().bfk_1;
    _this__u8e3s4.cfb_1.zeu(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().bfe_1;
    _this__u8e3s4.dfb_1.zeu(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.ifn_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.gfn_1 = $contentType == null ? Application_getInstance().gew_1 : $contentType;
    this.hfn_1 = toLong($body.length);
  }
  protoOf(defaultTransformers$1$content$1).wf6 = function () {
    return this.gfn_1;
  };
  protoOf(defaultTransformers$1$content$1).xf6 = function () {
    return this.hfn_1;
  };
  protoOf(defaultTransformers$1$content$1).yf6 = function () {
    return this.ifn_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.mfn_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.veu_1.efd_1.weq(HttpHeaders_getInstance().eey_1);
    tmp.kfn_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.lfn_1 = $contentType == null ? Application_getInstance().gew_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).xf6 = function () {
    return this.kfn_1;
  };
  protoOf(defaultTransformers$1$content$2).wf6 = function () {
    return this.lfn_1;
  };
  protoOf(defaultTransformers$1$content$2).bf7 = function () {
    return this.mfn_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).wfb = function ($this$intercept, body, $completion) {
    var tmp = this.xfb($this$intercept, body, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(defaultTransformers$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (this.vfn_1.veu_1.efd_1.weq(HttpHeaders_getInstance().pex_1) == null) {
              this.vfn_1.veu_1.efd_1.jes(HttpHeaders_getInstance().pex_1, '*/*');
            }

            this.xfn_1 = contentType(this.vfn_1.veu_1);
            var tmp_0 = this;
            var tmp0_subject = this.wfn_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.xfn_1;
              tmp_1 = new TextContent(this.wfn_1, tmp1_elvis_lhs == null ? Text_getInstance().wew_1 : tmp1_elvis_lhs);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.xfn_1, this.wfn_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.vfn_1, this.xfn_1, this.wfn_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.wfn_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.xfn_1, this.vfn_1.veu_1, this.wfn_1);
                  }
                }
              }
            }

            tmp_0.yfn_1 = tmp_1;
            var tmp2_safe_receiver = this.yfn_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.wf6()) == null)) {
              this.vfn_1.veu_1.efd_1.les(HttpHeaders_getInstance().hey_1);
              get_LOGGER_1().pev('Transformed with default transformers request body for ' + this.vfn_1.veu_1.cfd_1 + ' from ' + getKClassFromExpression(this.wfn_1));
              this.dl_1 = 1;
              suspendResult = this.vfn_1.zet(this.yfn_1, this);
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
  protoOf(defaultTransformers$slambda).xfb = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.vfn_1 = $this$intercept;
    i.wfn_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $completion) {
      return i.wfb($this$intercept, body, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.hfo_1 = $body;
    this.ifo_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(defaultTransformers$slambda$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.el_1 = 3;
            this.dl_1 = 2;
            var tmp_0 = this.jfo_1.s10();
            Companion_getInstance_1();
            suspendResult = copyTo(this.hfo_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.kfo_1 = Unit_getInstance();
            this.el_1 = 5;
            this.dl_1 = 6;
            continue $sm;
          case 3:
            this.el_1 = 4;
            var tmp_2 = this.gl_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.gl_1;
              var tmp_3 = this;
              cancel(this.ifo_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.gl_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.gl_1;
                var tmp_5 = this;
                cancel_0(this.ifo_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.gl_1;
              }
            }

          case 4:
            this.el_1 = 5;
            var t = this.gl_1;
            complete(this.ifo_1);
            throw t;
          case 5:
            throw this.gl_1;
          case 6:
            complete(this.ifo_1);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 5) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).ifh = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.hfo_1, this.ifo_1, completion);
    i.jfo_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.ku();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).qfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.rfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(defaultTransformers$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 11;
            this.vfo_1 = this.ufo_1.y4();
            this.wfo_1 = this.ufo_1.z4();
            var tmp_0 = this.wfo_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.xfo_1 = this.tfo_1.veu_1.dfc();
            this.yfo_1 = this.vfo_1.lev_1;
            if (this.yfo_1.equals(getKClass(Unit))) {
              cancel_1(this.wfo_1);
              this.dl_1 = 9;
              suspendResult = this.tfo_1.zet(new HttpResponseContainer(this.vfo_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.yfo_1.equals(PrimitiveClasses_getInstance().hi())) {
                this.dl_1 = 7;
                suspendResult = this.wfo_1.uef(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.yfo_1.equals(getKClass(ByteReadPacket)) ? true : this.yfo_1.equals(getKClass(Input))) {
                  this.dl_1 = 5;
                  suspendResult = this.wfo_1.uef(VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.yfo_1.equals(PrimitiveClasses_getInstance().pi())) {
                    this.dl_1 = 3;
                    suspendResult = toByteArray(this.wfo_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.yfo_1.equals(getKClass(ByteReadChannel))) {
                      this.afp_1 = Job(this.xfo_1.om().u6(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this.xfo_1.om();
                      var tmp1_also = writer(this.tfo_1, tmp_2, VOID, defaultTransformers$slambda$slambda_0(this.wfo_1, this.xfo_1, null));
                      tmp1_also.rn(defaultTransformers$slambda$lambda(this.afp_1));
                      tmp_1.bfp_1 = tmp1_also.s10();
                      this.dl_1 = 2;
                      suspendResult = this.tfo_1.zet(new HttpResponseContainer(this.vfo_1, this.bfp_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.yfo_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.wfo_1);
                        this.dl_1 = 1;
                        suspendResult = this.tfo_1.zet(new HttpResponseContainer(this.vfo_1, this.xfo_1.a8g()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.zfo_1 = null;
                        this.dl_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 2:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 3:
            this.cfp_1 = suspendResult;
            this.dfp_1 = contentLength(this.xfo_1);
            this.efp_1 = !PlatformUtils_getInstance().rer_1 ? this.xfo_1.sf1().weq(HttpHeaders_getInstance().cey_1) == null : false;
            this.ffp_1 = !this.tfo_1.veu_1.mff().kfg().equals(Companion_getInstance_2().yf1_1);
            if (((this.efp_1 ? this.ffp_1 : false) ? !(this.dfp_1 == null) : false) ? this.dfp_1.x(new Long(0, 0)) > 0 : false) {
              if (!(this.cfp_1.length === this.dfp_1.f1())) {
                var message = 'Expected ' + toString_0(this.dfp_1) + ', actual ' + this.cfp_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.dl_1 = 4;
            suspendResult = this.tfo_1.zet(new HttpResponseContainer(this.vfo_1, this.cfp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 5:
            this.gfp_1 = suspendResult;
            this.hfp_1 = new HttpResponseContainer(this.vfo_1, this.gfp_1);
            this.dl_1 = 6;
            suspendResult = this.tfo_1.zet(this.hfp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 7:
            this.ifp_1 = suspendResult;
            this.jfp_1 = this.ifp_1.yej();
            this.kfp_1 = toInt(this.jfp_1);
            this.lfp_1 = new HttpResponseContainer(this.vfo_1, this.kfp_1);
            this.dl_1 = 8;
            suspendResult = this.tfo_1.zet(this.lfp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 9:
            this.zfo_1 = suspendResult;
            this.dl_1 = 10;
            continue $sm;
          case 10:
            var result = this.zfo_1;
            if (!(result == null)) {
              get_LOGGER_1().pev('Transformed with default transformers response body ' + ('for ' + this.tfo_1.veu_1.mff().off() + ' to ' + this.vfo_1.lev_1));
            }

            return Unit_getInstance();
          case 11:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 11) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).rfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.tfo_1 = $this$intercept;
    i.ufo_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.qfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.ofp_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.xfp_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda).wfb = function ($this$intercept, it, $completion) {
    var tmp = this.xfb($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpCallValidator$Companion$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.el_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.yfp_1.veu_1.hfd_1.eeo(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.xfp_1));
            this.dl_1 = 1;
            suspendResult = this.yfp_1.zet(this.zfp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 5;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 5;
            return Unit_getInstance();
          case 3:
            this.el_1 = 5;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              this.afq_1 = this.gl_1;
              this.bfq_1 = unwrapCancellationException(this.afq_1);
              this.dl_1 = 4;
              suspendResult = processException(this.xfp_1, this.bfq_1, HttpRequest(this.yfp_1.veu_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 4:
            throw this.bfq_1;
          case 5:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 5) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$Companion$install$slambda).xfb = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.xfp_1, completion);
    i.yfp_1 = $this$intercept;
    i.zfp_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.wfb($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.kfq_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda_1).qfc = function ($this$intercept, container, $completion) {
    var tmp = this.rfc($this$intercept, container, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.lfq_1.zet(this.mfq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 5;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 5;
            return Unit_getInstance();
          case 3:
            this.el_1 = 5;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              this.nfq_1 = this.gl_1;
              this.ofq_1 = unwrapCancellationException(this.nfq_1);
              this.dl_1 = 4;
              suspendResult = processException(this.kfq_1, this.ofq_1, this.lfq_1.veu_1.mff(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 4:
            throw this.ofq_1;
          case 5:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 5) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).rfc = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.kfq_1, completion);
    i.lfq_1 = $this$intercept;
    i.mfq_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $completion) {
      return i.qfc($this$intercept, container, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.xfq_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda_3).bfr = function ($this$intercept, request, $completion) {
    var tmp = this.cfr($this$intercept, request, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpCallValidator$Companion$install$slambda_3).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.bfr(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.yfq_1.ffe(this.zfq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.afr_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = validateResponse(this.xfq_1, this.afr_1.dfc(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.afr_1;
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
  protoOf(HttpCallValidator$Companion$install$slambda_3).cfr = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.xfq_1, completion);
    i.yfq_1 = $this$intercept;
    i.zfq_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.bfr($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $completion) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function processException($this, cause, request, $completion) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function Config() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.bfn_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.cfn_1 = ArrayList_init_$Create$();
    this.dfn_1 = true;
  }
  protoOf(Config).efn = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.bfn_1.a(block);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.ffs_1 = new AttributeKey('HttpResponseValidator');
  }
  protoOf(Companion_1).r = function () {
    return this.ffs_1;
  };
  protoOf(Companion_1).gfs = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new HttpCallValidator(reversed(config.bfn_1), reversed(config.cfn_1), config.dfn_1);
  };
  protoOf(Companion_1).hfe = function (block) {
    return this.gfs(block);
  };
  protoOf(Companion_1).hfs = function (plugin_0, scope) {
    var tmp = Phases_getInstance().yfj_1;
    scope.cfb_1.zeu(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.dfb_1.yeu(Phases_getInstance_1().afe_1, BeforeReceive);
    scope.dfb_1.zeu(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_4());
    tmp_0.kfs(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  protoOf(Companion_1).ife = function (plugin, scope) {
    return this.hfs(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lfr_1 = _this__u8e3s4;
    this.mfr_1 = response;
  }
  protoOf($validateResponseCOROUTINE$5).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            get_LOGGER_2().pev('Validating response for request ' + this.mfr_1.jfg().mff().off());
            var tmp_0 = this;
            tmp_0.nfr_1 = this.lfr_1.mfp_1;
            this.ofr_1 = this.nfr_1.d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.ofr_1.e()) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.pfr_1 = this.ofr_1.f();
            this.dl_1 = 2;
            suspendResult = this.pfr_1(this.mfr_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 1;
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
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yfr_1 = _this__u8e3s4;
    this.zfr_1 = cause;
    this.afs_1 = request;
  }
  protoOf($processExceptionCOROUTINE$6).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            get_LOGGER_2().pev('Processing exception ' + this.zfr_1 + ' for request ' + this.afs_1.off());
            var tmp_0 = this;
            tmp_0.bfs_1 = this.yfr_1.nfp_1;
            this.cfs_1 = this.bfs_1.d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.cfs_1.e()) {
              this.dl_1 = 5;
              continue $sm;
            }

            this.dfs_1 = this.cfs_1.f();
            this.efs_1 = this.dfs_1;
            var tmp_1 = this.efs_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.dl_1 = 3;
              suspendResult = this.dfs_1.mfs_1(this.zfr_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.efs_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.dl_1 = 2;
                suspendResult = this.dfs_1.lfs_1(this.zfr_1, this.afs_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dl_1 = 4;
                continue $sm;
              }
            }

          case 2:
            this.dl_1 = 4;
            continue $sm;
          case 3:
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.dl_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_10();
    this.mfp_1 = responseValidators;
    this.nfp_1 = callExceptionHandlers;
    this.ofp_1 = expectSuccess;
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.jfe(Companion_getInstance_10(), block);
  }
  function HttpRequest$1($builder) {
    this.rfs_1 = $builder;
    this.nfs_1 = $builder.dfd_1;
    this.ofs_1 = $builder.cfd_1.df();
    this.pfs_1 = $builder.hfd_1;
    this.qfs_1 = $builder.efd_1.df();
  }
  protoOf(HttpRequest$1).jfg = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  protoOf(HttpRequest$1).kfg = function () {
    return this.nfs_1;
  };
  protoOf(HttpRequest$1).off = function () {
    return this.ofs_1;
  };
  protoOf(HttpRequest$1).rfe = function () {
    return this.pfs_1;
  };
  protoOf(HttpRequest$1).sf1 = function () {
    return this.qfs_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.r() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.gfb_1.aeo(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aeo(plugin.r());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function get_LOGGER_3() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_3;
  }
  var LOGGER_3;
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.aft_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$Plugin$install$slambda).wfb = function ($this$intercept, content, $completion) {
    var tmp = this.xfb($this$intercept, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpPlainText$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.aft_1.hft(this.bft_1.veu_1);
            var tmp_0 = this.cft_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.dft_1 = contentType(this.bft_1.veu_1);
            if (!(this.dft_1 == null) ? !(this.dft_1.gex_1 === Text_getInstance().wew_1.gex_1) : false) {
              return Unit_getInstance();
            }

            this.dl_1 = 1;
            suspendResult = this.bft_1.zet(wrapContent(this.aft_1, this.bft_1.veu_1, this.cft_1, this.dft_1), this);
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
  protoOf(HttpPlainText$Plugin$install$slambda).xfb = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.aft_1, completion);
    i.bft_1 = $this$intercept;
    i.cft_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.wfb($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.qft_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$Plugin$install$slambda_1).qfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.rfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpPlainText$Plugin$install$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.qfc(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$Plugin$install$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.tft_1 = this.sft_1.y4();
            this.uft_1 = this.sft_1.z4();
            var tmp_0;
            if (!this.tft_1.lev_1.equals(PrimitiveClasses_getInstance().li())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.uft_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.dl_1 = 1;
            suspendResult = this.uft_1.uef(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vft_1 = suspendResult;
            this.wft_1 = this.qft_1.xft(this.rft_1.veu_1, this.vft_1);
            this.dl_1 = 2;
            suspendResult = this.rft_1.zet(new HttpResponseContainer(this.tft_1, this.wft_1), this);
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
  protoOf(HttpPlainText$Plugin$install$slambda_1).rfc = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.qft_1, completion);
    i.rft_1 = $this$intercept;
    i.sft_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.qfc($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.yft_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.zft_1 = LinkedHashMap_init_$Create$();
    this.afu_1 = null;
    this.bfu_1 = Charsets_getInstance().gek_1;
  }
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.cfu_1 = new AttributeKey('HttpPlainText');
  }
  protoOf(Plugin_1).r = function () {
    return this.cfu_1;
  };
  protoOf(Plugin_1).gfs = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.yft_1, config.zft_1, config.afu_1, config.bfu_1);
  };
  protoOf(Plugin_1).hfe = function (block) {
    return this.gfs(block);
  };
  protoOf(Plugin_1).dfu = function (plugin, scope) {
    var tmp = Phases_getInstance().bfk_1;
    scope.cfb_1.zeu(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().cfe_1;
    scope.dfb_1.zeu(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin_1).ife = function (plugin, scope) {
    return this.dfu(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function wrapContent($this, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().wew_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? $this.fft_1 : tmp2_elvis_lhs;
    get_LOGGER_3().pev('Sending request body to ' + request.cfd_1 + ' as text/plain with charset ' + charset_0);
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.efu_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.efu_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp = b.x4_1;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.x4_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp = get_name(a);
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_1();
    this.eft_1 = responseCharsetFallback;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      if (!charsetQuality.t2(element)) {
        tmp0_filterTo.a(element);
      }
    }
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(tmp0_filterTo, tmp$ret$5);
    var tmp_1 = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp0_apply) > 0) {
        tmp0_apply.ia(',');
      }
      tmp0_apply.ia(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.d();
    while (tmp0_iterator_1.e()) {
      var element_1 = tmp0_iterator_1.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.y4();
      var quality = element_1.z4();
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp0_apply) > 0) {
        tmp0_apply.ia(',');
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0.0 <= quality ? quality <= 1.0 : false)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      var truncatedQuality = roundToInt(tmp1_roundToInt) / 100.0;
      tmp0_apply.ia(get_name(charset) + ';q=' + truncatedQuality);
    }
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(tmp0_apply) === 0) {
      tmp0_apply.ia(get_name(this.eft_1));
    }
    tmp_1.gft_1 = tmp0_apply.toString();
    var tmp_2 = this;
    var tmp2_elvis_lhs = sendCharset == null ? firstOrNull(withoutQuality) : sendCharset;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w4_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.fft_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().gek_1 : tmp3_elvis_lhs;
  }
  protoOf(HttpPlainText).xft = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.dfc());
    var actualCharset = tmp0_elvis_lhs == null ? this.eft_1 : tmp0_elvis_lhs;
    get_LOGGER_3().pev('Reading response body for ' + call.mff().off() + ' as String with charset ' + actualCharset);
    return readText(body, actualCharset);
  };
  protoOf(HttpPlainText).hft = function (context) {
    if (!(context.efd_1.weq(HttpHeaders_getInstance().qex_1) == null))
      return Unit_getInstance();
    get_LOGGER_3().pev('Adding Accept-Charset=' + this.gft_1 + ' to ' + context.cfd_1);
    context.efd_1.hes(HttpHeaders_getInstance().qex_1, this.gft_1);
  };
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_4() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_4;
  }
  var LOGGER_4;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.gfv_1 = $plugin;
    this.hfv_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$Plugin$install$slambda).bfr = function ($this$intercept, context, $completion) {
    var tmp = this.cfr($this$intercept, context, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpRedirect$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.bfr(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.ifv_1.ffe(this.jfv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kfv_1 = suspendResult;
            if (this.gfv_1.lfv_1 ? !get_ALLOWED_FOR_REDIRECT().n(this.kfv_1.mff().kfg()) : false) {
              return this.kfv_1;
            }

            this.dl_1 = 2;
            suspendResult = handleCall(this.ifv_1, Plugin_getInstance_2(), this.jfv_1, this.kfv_1, this.gfv_1.mfv_1, this.hfv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$Plugin$install$slambda).cfr = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.gfv_1, this.hfv_1, completion);
    i.ifv_1 = $this$intercept;
    i.jfv_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $completion) {
      return i.bfr($this$intercept, context, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nfu_1 = _this__u8e3s4;
    this.ofu_1 = _this__u8e3s4_0;
    this.pfu_1 = context;
    this.qfu_1 = origin;
    this.rfu_1 = allowHttpsDowngrade;
    this.sfu_1 = client;
  }
  protoOf($handleCallCOROUTINE$7).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (!isRedirect(this.qfu_1.dfc().a8g()))
              return this.qfu_1;
            this.tfu_1 = this.qfu_1;
            this.ufu_1 = this.pfu_1;
            this.vfu_1 = this.qfu_1.mff().off().ff5_1;
            this.wfu_1 = get_authority(this.qfu_1.mff().off());
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.sfu_1.ifb_1.lf7(this.nfu_1.ofv_1, this.tfu_1.dfc());
            this.xfu_1 = this.tfu_1.dfc().sf1().weq(HttpHeaders_getInstance().dez_1);
            get_LOGGER_4().pev('Received redirect response to ' + this.xfu_1 + ' for request ' + this.pfu_1.cfd_1);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.zfi(this.ufu_1);
            tmp0_apply.cfd_1.cf5_1.a4();
            var tmp0_safe_receiver = this.xfu_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom_0(tmp0_apply.cfd_1, tmp0_safe_receiver);
            }

            if ((!this.rfu_1 ? isSecure(this.vfu_1) : false) ? !isSecure(tmp0_apply.cfd_1.tf4_1) : false) {
              get_LOGGER_4().pev('Can not redirect ' + this.pfu_1.cfd_1 + ' because of security downgrade');
              return this.tfu_1;
            }

            if (!(this.wfu_1 === get_authority_0(tmp0_apply.cfd_1))) {
              tmp0_apply.efd_1.les(HttpHeaders_getInstance().yex_1);
              get_LOGGER_4().pev('Removing Authorization header from redirect for ' + this.pfu_1.cfd_1);
            }

            tmp_0.ufu_1 = tmp0_apply;
            this.dl_1 = 2;
            suspendResult = this.ofu_1.ffe(this.ufu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tfu_1 = suspendResult;
            if (!isRedirect(this.tfu_1.dfc().a8g()))
              return this.tfu_1;
            this.dl_1 = 1;
            continue $sm;
          case 3:
            throw this.gl_1;
          case 4:
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
  function Config_1() {
    this.pfv_1 = true;
    this.qfv_1 = false;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.nfv_1 = new AttributeKey('HttpRedirect');
    this.ofv_1 = new EventDefinition();
  }
  protoOf(Plugin_2).r = function () {
    return this.nfv_1;
  };
  protoOf(Plugin_2).gfs = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new HttpRedirect(config.pfv_1, config.qfv_1);
  };
  protoOf(Plugin_2).hfe = function (block) {
    return this.gfs(block);
  };
  protoOf(Plugin_2).rfv = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.kfs(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  protoOf(Plugin_2).ife = function (plugin, scope) {
    return this.rfv(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_2();
    this.lfv_1 = checkHttpMethod;
    this.mfv_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.nf4_1;
    return ((((tmp0_subject === Companion_getInstance_3().wf2_1.nf4_1 ? true : tmp0_subject === Companion_getInstance_3().xf2_1.nf4_1) ? true : tmp0_subject === Companion_getInstance_3().cf3_1.nf4_1) ? true : tmp0_subject === Companion_getInstance_3().df3_1.nf4_1) ? true : tmp0_subject === Companion_getInstance_3().yf2_1.nf4_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().tf1_1, Companion_getInstance_2().yf1_1]);
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_5;
  }
  var LOGGER_5;
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.afw_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).wfb = function ($this$intercept, it, $completion) {
    var tmp = this.xfb($this$intercept, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            this.dfw_1 = SupervisorJob(this.bfw_1.veu_1.gfd_1);
            attachToClientEngineJob(this.dfw_1, ensureNotNull(this.afw_1.bfb_1.u6(Key_getInstance())));
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.el_1 = 3;
            this.bfw_1.veu_1.gfd_1 = this.dfw_1;
            this.dl_1 = 2;
            suspendResult = this.bfw_1.aeu(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.efw_1 = Unit_getInstance();
            this.el_1 = 6;
            this.dl_1 = 5;
            continue $sm;
          case 3:
            this.el_1 = 4;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gl_1;
              var tmp_2 = this;
              this.dfw_1.ju(cause);
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 4:
            this.el_1 = 6;
            var t = this.gl_1;
            this.dfw_1.ku();
            throw t;
          case 5:
            this.dfw_1.ku();
            return Unit_getInstance();
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
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).xfb = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.afw_1, completion);
    i.bfw_1 = $this$intercept;
    i.cfw_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.wfb($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.ffw_1 = new AttributeKey('RequestLifecycle');
  }
  protoOf(Plugin_3).r = function () {
    return this.ffw_1;
  };
  protoOf(Plugin_3).hfk = function (block) {
    return new HttpRequestLifecycle();
  };
  protoOf(Plugin_3).hfe = function (block) {
    return this.hfk(block);
  };
  protoOf(Plugin_3).gfw = function (plugin, scope) {
    var tmp = Phases_getInstance().yfj_1;
    scope.cfb_1.zeu(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  protoOf(Plugin_3).ife = function (plugin, scope) {
    return this.gfw(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_3();
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.rn(attachToClientEngineJob$lambda(requestJob));
    requestJob.rn(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        get_LOGGER_5().pev('Cancelling request because engine Job failed with error: ' + cause);
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        get_LOGGER_5().pev('Cancelling request because engine Job completed');
        $requestJob.ku();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.gp();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.pfw_1 = $plugin;
    this.qfw_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).wfb = function ($this$intercept, content, $completion) {
    var tmp = this.xfb($this$intercept, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpSend$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.wfb(tmp, isObject(p2) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp_0 = this.sfw_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.sfw_1) + ', with Content-Type: ' + contentType(this.rfw_1.veu_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0_setBody = this.rfw_1.veu_1;
            var tmp1_setBody = this.sfw_1;
            if (tmp1_setBody == null) {
              tmp0_setBody.ffd_1 = NullBody_getInstance();
              var tmp_1 = JsType_getInstance();
              var tmp_2 = getKClass(OutgoingContent);
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0_setBody.afj(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (tmp1_setBody instanceof OutgoingContent) {
                tmp0_setBody.ffd_1 = tmp1_setBody;
                tmp0_setBody.afj(null);
              } else {
                tmp0_setBody.ffd_1 = tmp1_setBody;
                var tmp_5 = JsType_getInstance();
                var tmp_6 = getKClass(OutgoingContent);
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0_setBody.afj(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            this.tfw_1 = new DefaultSender(this.pfw_1.ifs_1, this.qfw_1);
            this.ufw_1 = this.tfw_1;
            var tmp2_forEach = downTo(get_lastIndex(this.pfw_1.jfs_1), 0);
            var inductionVariable = tmp2_forEach.y_1;
            var last = tmp2_forEach.z_1;
            var step = tmp2_forEach.a1_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.pfw_1.jfs_1.m(element);
                this.ufw_1 = new InterceptedSender(interceptor, this.ufw_1);
              }
               while (!(element === last));
            this.dl_1 = 1;
            suspendResult = this.ufw_1.ffe(this.rfw_1.veu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vfw_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = this.rfw_1.zet(this.vfw_1, this);
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
  protoOf(HttpSend$Plugin$install$slambda).xfb = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.pfw_1, this.qfw_1, completion);
    i.rfw_1 = $this$intercept;
    i.sfw_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.wfb($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.efx_1 = _this__u8e3s4;
    this.ffx_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$8).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp0_safe_receiver = this.efx_1.jfx_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.efx_1.ifx_1 >= this.efx_1.gfx_1) {
              throw new SendCountExceedException('Max send count ' + this.efx_1.gfx_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.efx_1;
            tmp1_this.ifx_1 = tmp1_this.ifx_1 + 1 | 0;
            this.dl_1 = 1;
            suspendResult = this.efx_1.hfx_1.efb_1.ueu(this.ffx_1, this.ffx_1.ffd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.efx_1.jfx_1 = call;
            return call;
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
  function Config_2() {
    this.kfx_1 = 20;
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.lfx_1 = new AttributeKey('HttpSend');
  }
  protoOf(Plugin_4).r = function () {
    return this.lfx_1;
  };
  protoOf(Plugin_4).gfs = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new HttpSend(config.kfx_1);
  };
  protoOf(Plugin_4).hfe = function (block) {
    return this.gfs(block);
  };
  protoOf(Plugin_4).mfx = function (plugin, scope) {
    var tmp = Phases_getInstance().cfk_1;
    scope.cfb_1.zeu(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin_4).ife = function (plugin, scope) {
    return this.mfx(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.nfx_1 = interceptor;
    this.ofx_1 = nextSender;
  }
  protoOf(InterceptedSender).ffe = function (requestBuilder, $completion) {
    return this.nfx_1(this.ofx_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.gfx_1 = maxSendCount;
    this.hfx_1 = client;
    this.ifx_1 = 0;
    this.jfx_1 = null;
  }
  protoOf(DefaultSender).ffe = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_4();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.ifs_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.jfs_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).kfs = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.jfs_1.a(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.sfx(requestTimeoutMillis);
    $this.tfx(connectTimeoutMillis);
    $this.ufx(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutCapabilityConfiguration)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value == null ? true : value.x(new Long(0, 0)) > 0)) {
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.vfx_1 = new AttributeKey('TimeoutConfiguration');
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.efy_1 = $requestTimeout;
    this.ffy_1 = $request;
    this.gfy_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = delay(this.efy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.ffy_1);
            get_LOGGER_6().pev('Request timeout: ' + this.ffy_1.cfd_1);
            cancel_2(this.gfy_1, ensureNotNull(cause.message), cause);
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
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.efy_1, this.ffy_1, this.gfy_1, completion);
    i.hfy_1 = $this$launch;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.yn();
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.qfy_1 = $plugin;
    this.rfy_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$Plugin$install$slambda).bfr = function ($this$intercept, request, $completion) {
    var tmp = this.cfr($this$intercept, request, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpTimeout$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.bfr(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.ufy_1 = isWebsocket(this.tfy_1.cfd_1.tf4_1);
            var tmp_0;
            if (this.ufy_1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.tfy_1.ffd_1;
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.dl_1 = 3;
              suspendResult = this.sfy_1.ffe(this.tfy_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 1;
              continue $sm;
            }

          case 1:
            this.vfy_1 = this.tfy_1.wfy(Plugin_getInstance_5());
            if (this.vfy_1 == null ? hasNotNullTimeouts(this.qfy_1) : false) {
              this.vfy_1 = HttpTimeoutCapabilityConfiguration_init_$Create$();
              this.tfy_1.xfy(Plugin_getInstance_5(), this.vfy_1);
            }

            var tmp0_safe_receiver = this.vfy_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.yfy();
                tmp0_safe_receiver.tfx(tmp0_elvis_lhs == null ? this.qfy_1.afz_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.cfz();
                tmp0_safe_receiver.ufx(tmp1_elvis_lhs == null ? this.qfy_1.bfz_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.dfz();
                tmp0_safe_receiver.sfx(tmp2_elvis_lhs == null ? this.qfy_1.zfy_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.dfz();
                var requestTimeout = tmp3_elvis_lhs == null ? this.qfy_1.zfy_1 : tmp3_elvis_lhs;
                var tmp_2;
                if (requestTimeout == null) {
                  tmp_2 = true;
                } else {
                  Plugin_getInstance_5();
                  tmp_2 = equals(requestTimeout, new Long(-1, 2147483647));
                }
                if (tmp_2) {
                  break l$ret$1;
                }
                var executionContext = this.tfy_1.gfd_1;
                var killer = launch(this.rfy_1, VOID, VOID, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.tfy_1, executionContext, null));
                var tmp_3 = this.tfy_1.gfd_1;
                tmp_3.rn(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            this.dl_1 = 2;
            suspendResult = this.sfy_1.ffe(this.tfy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
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
  protoOf(HttpTimeout$Plugin$install$slambda).cfr = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.qfy_1, this.rfy_1, completion);
    i.sfy_1 = $this$intercept;
    i.tfy_1 = request;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.bfr($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  protoOf(HttpTimeoutCapabilityConfiguration).sfx = function (value) {
    this.pfx_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).dfz = function () {
    return this.pfx_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).tfx = function (value) {
    this.qfx_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).yfy = function () {
    return this.qfx_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).ufx = function (value) {
    this.rfx_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).cfz = function () {
    return this.rfx_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).df = function () {
    return new HttpTimeout(this.dfz(), this.yfy(), this.cfz());
  };
  protoOf(HttpTimeoutCapabilityConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutCapabilityConfiguration))
      THROW_CCE();
    if (!equals(this.pfx_1, other.pfx_1))
      return false;
    if (!equals(this.qfx_1, other.qfx_1))
      return false;
    if (!equals(this.rfx_1, other.rfx_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).hashCode = function () {
    var tmp0_safe_receiver = this.pfx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.qfx_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.rfx_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_11();
    this.pfx_1 = new Long(0, 0);
    this.qfx_1 = new Long(0, 0);
    this.rfx_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.zfy_1 == null) ? true : !($this.afz_1 == null)) ? true : !($this.bfz_1 == null);
  }
  function Plugin_5() {
    Plugin_instance_5 = this;
    this.efz_1 = new AttributeKey('TimeoutPlugin');
    this.ffz_1 = new Long(-1, 2147483647);
  }
  protoOf(Plugin_5).r = function () {
    return this.efz_1;
  };
  protoOf(Plugin_5).gfz = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    return tmp0_apply.df();
  };
  protoOf(Plugin_5).hfe = function (block) {
    return this.gfz(block);
  };
  protoOf(Plugin_5).hfz = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.kfs(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  protoOf(Plugin_5).ife = function (plugin, scope) {
    return this.hfz(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_5;
  function Plugin_getInstance_5() {
    if (Plugin_instance_5 == null)
      new Plugin_5();
    return Plugin_instance_5;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_5();
    this.zfy_1 = requestTimeoutMillis;
    this.afz_1 = connectTimeoutMillis;
    this.bfz_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.cfd_1.if6();
    var tmp0_safe_receiver = request.wfy(Plugin_getInstance_5());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dfz());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
    }
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedCall(_this__u8e3s4.yfb_1, content, _this__u8e3s4);
  }
  function DelegatedCall(client, content, originCall) {
    HttpClientCall.call(this, client);
    this.afc_1 = new DelegatedRequest(this, originCall.mff());
    this.bfc_1 = new DelegatedResponse(this, content, originCall.dfc());
  }
  function DelegatedRequest(call, origin) {
    this.ifz_1 = call;
    this.jfz_1 = origin;
  }
  protoOf(DelegatedRequest).jfg = function () {
    return this.ifz_1;
  };
  protoOf(DelegatedRequest).rfe = function () {
    return this.jfz_1.rfe();
  };
  protoOf(DelegatedRequest).om = function () {
    return this.jfz_1.om();
  };
  protoOf(DelegatedRequest).sf1 = function () {
    return this.jfz_1.sf1();
  };
  protoOf(DelegatedRequest).kfg = function () {
    return this.jfz_1.kfg();
  };
  protoOf(DelegatedRequest).off = function () {
    return this.jfz_1.off();
  };
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.kfz_1 = call;
    this.lfz_1 = content;
    this.mfz_1 = origin;
    this.nfz_1 = this.mfz_1.om();
  }
  protoOf(DelegatedResponse).jfg = function () {
    return this.kfz_1;
  };
  protoOf(DelegatedResponse).lcd = function () {
    return this.lfz_1;
  };
  protoOf(DelegatedResponse).om = function () {
    return this.nfz_1;
  };
  protoOf(DelegatedResponse).a8g = function () {
    return this.mfz_1.a8g();
  };
  protoOf(DelegatedResponse).ufg = function () {
    return this.mfz_1.ufg();
  };
  protoOf(DelegatedResponse).vfg = function () {
    return this.mfz_1.vfg();
  };
  protoOf(DelegatedResponse).wfg = function () {
    return this.mfz_1.wfg();
  };
  protoOf(DelegatedResponse).sf1 = function () {
    return this.mfz_1.sf1();
  };
  function ResponseObserver$Config$responseHandler$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseObserver$Config$responseHandler$slambda).zfm = function (it, $completion) {
    var tmp = this.afn(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ResponseObserver$Config$responseHandler$slambda).yl = function (p1, $completion) {
    return this.zfm(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ResponseObserver$Config$responseHandler$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ResponseObserver$Config$responseHandler$slambda).afn = function (it, completion) {
    var i = new ResponseObserver$Config$responseHandler$slambda(completion);
    i.wfz_1 = it;
    return i;
  };
  function ResponseObserver$Config$responseHandler$slambda_0(resultContinuation) {
    var i = new ResponseObserver$Config$responseHandler$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.zfm(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ResponseObserver$Plugin$install$slambda$slambda($plugin, $sideResponse, resultContinuation) {
    this.fg0_1 = $plugin;
    this.gg0_1 = $sideResponse;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseObserver$Plugin$install$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ResponseObserver$Plugin$install$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ResponseObserver$Plugin$install$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.fg0_1.kg0_1(this.gg0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 6;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.el_1 = 6;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              this.ig0_1 = this.gl_1;
              this.dl_1 = 3;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            this.el_1 = 6;
            this.jg0_1 = this.gg0_1.lcd();
            if (!this.jg0_1.bea()) {
              this.dl_1 = 4;
              suspendResult = discard(this.jg0_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.dl_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  protoOf(ResponseObserver$Plugin$install$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new ResponseObserver$Plugin$install$slambda$slambda(this.fg0_1, this.gg0_1, completion);
    i.hg0_1 = $this$launch;
    return i;
  };
  function ResponseObserver$Plugin$install$slambda$slambda_0($plugin, $sideResponse, resultContinuation) {
    var i = new ResponseObserver$Plugin$install$slambda$slambda($plugin, $sideResponse, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ResponseObserver$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.ug0_1 = $plugin;
    this.vg0_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseObserver$Plugin$install$slambda).hfl = function ($this$intercept, response, $completion) {
    var tmp = this.ifl($this$intercept, response, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ResponseObserver$Plugin$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.hfl(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseObserver$Plugin$install$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp0_safe_receiver = this.ug0_1.lg0_1;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(this.xg0_1.jfg())) === false)
              return Unit_getInstance();
            this.yg0_1 = split(this.xg0_1.lcd(), this.xg0_1);
            this.zg0_1 = this.yg0_1.y4();
            this.ag1_1 = this.yg0_1.z4();
            this.bg1_1 = wrapWithContent(this.xg0_1.jfg(), this.ag1_1).dfc();
            this.cg1_1 = wrapWithContent(this.xg0_1.jfg(), this.zg0_1).dfc();
            this.dl_1 = 1;
            suspendResult = getResponseObserverContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dg1_1 = suspendResult;
            launch(this.vg0_1, this.dg1_1, VOID, ResponseObserver$Plugin$install$slambda$slambda_0(this.ug0_1, this.cg1_1, null));
            this.dl_1 = 2;
            suspendResult = this.wg0_1.zet(this.bg1_1, this);
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
  protoOf(ResponseObserver$Plugin$install$slambda).ifl = function ($this$intercept, response, completion) {
    var i = new ResponseObserver$Plugin$install$slambda(this.ug0_1, this.vg0_1, completion);
    i.wg0_1 = $this$intercept;
    i.xg0_1 = response;
    return i;
  };
  function ResponseObserver$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new ResponseObserver$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.hfl($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config_3() {
    var tmp = this;
    tmp.eg1_1 = ResponseObserver$Config$responseHandler$slambda_0(null);
    this.fg1_1 = null;
  }
  function Plugin_6() {
    Plugin_instance_6 = this;
    this.gg1_1 = new AttributeKey('BodyInterceptor');
  }
  protoOf(Plugin_6).r = function () {
    return this.gg1_1;
  };
  protoOf(Plugin_6).hg1 = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_3();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    var config = tmp0_apply;
    return new ResponseObserver(config.eg1_1, config.fg1_1);
  };
  protoOf(Plugin_6).hfe = function (block) {
    return this.hg1(block);
  };
  protoOf(Plugin_6).ig1 = function (plugin, scope) {
    var tmp = Phases_getInstance_2().ffk_1;
    scope.ffb_1.zeu(tmp, ResponseObserver$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin_6).ife = function (plugin, scope) {
    return this.ig1(plugin instanceof ResponseObserver ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_6;
  function Plugin_getInstance_6() {
    if (Plugin_instance_6 == null)
      new Plugin_6();
    return Plugin_instance_6;
  }
  function ResponseObserver(responseHandler, filter) {
    Plugin_getInstance_6();
    filter = filter === VOID ? null : filter;
    this.kg0_1 = responseHandler;
    this.lg0_1 = filter;
  }
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  function ClientUpgradeContent() {
  }
  function DefaultHttpRequest(call, data) {
    this.jg1_1 = call;
    this.kg1_1 = data.bfi_1;
    this.lg1_1 = data.afi_1;
    this.mg1_1 = data.dfi_1;
    this.ng1_1 = data.cfi_1;
    this.og1_1 = data.ffi_1;
  }
  protoOf(DefaultHttpRequest).jfg = function () {
    return this.jg1_1;
  };
  protoOf(DefaultHttpRequest).om = function () {
    return this.jfg().om();
  };
  protoOf(DefaultHttpRequest).kfg = function () {
    return this.kg1_1;
  };
  protoOf(DefaultHttpRequest).off = function () {
    return this.lg1_1;
  };
  protoOf(DefaultHttpRequest).sf1 = function () {
    return this.ng1_1;
  };
  protoOf(DefaultHttpRequest).rfe = function () {
    return this.og1_1;
  };
  function HttpRequest_0() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    Companion_getInstance_12();
    this.cfd_1 = new URLBuilder_0();
    this.dfd_1 = Companion_getInstance_2().tf1_1;
    this.efd_1 = new HeadersBuilder();
    this.ffd_1 = EmptyContent_getInstance();
    this.gfd_1 = SupervisorJob();
    this.hfd_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).sf1 = function () {
    return this.efd_1;
  };
  protoOf(HttpRequestBuilder).afj = function (value) {
    if (!(value == null)) {
      this.hfd_1.ceo(get_BodyTypeAttributeKey(), value);
    } else {
      this.hfd_1.deo(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).pg1 = function () {
    return this.hfd_1.aeo(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).df = function () {
    var tmp = this.cfd_1.df();
    var tmp_0 = this.dfd_1;
    var tmp_1 = this.efd_1.df();
    var tmp_2 = this.ffd_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.ffd_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.gfd_1, this.hfd_1);
  };
  protoOf(HttpRequestBuilder).zfi = function (builder) {
    this.gfd_1 = builder.gfd_1;
    return this.qg1(builder);
  };
  protoOf(HttpRequestBuilder).qg1 = function (builder) {
    this.dfd_1 = builder.dfd_1;
    this.ffd_1 = builder.ffd_1;
    this.afj(builder.pg1());
    takeFrom(this.cfd_1, builder.cfd_1);
    this.cfd_1.af5_1 = this.cfd_1.af5_1;
    appendAll(this.efd_1, builder.efd_1);
    putAll(this.hfd_1, builder.hfd_1);
    return this;
  };
  protoOf(HttpRequestBuilder).xfy = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.hfd_1.eeo(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.a5(key, capability);
  };
  protoOf(HttpRequestBuilder).wfy = function (key) {
    var tmp0_safe_receiver = this.hfd_1.aeo(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.afi_1 = url;
    this.bfi_1 = method;
    this.cfi_1 = headers;
    this.dfi_1 = body;
    this.efi_1 = executionContext;
    this.ffi_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.ffi_1.aeo(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3();
    tmp.gfi_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.afi_1 + ', method=' + this.bfi_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.kfe_1 = statusCode;
    this.lfe_1 = requestTime;
    this.mfe_1 = headers;
    this.nfe_1 = version;
    this.ofe_1 = body;
    this.pfe_1 = callContext;
    this.qfe_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.kfe_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom_0(_this__u8e3s4.cfd_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.dfi_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function takeFrom_2(_this__u8e3s4, request) {
    _this__u8e3s4.dfd_1 = request.bfi_1;
    _this__u8e3s4.ffd_1 = request.dfi_1;
    _this__u8e3s4.afj(_this__u8e3s4.hfd_1.aeo(get_BodyTypeAttributeKey()));
    takeFrom_1(_this__u8e3s4.cfd_1, request.afi_1);
    _this__u8e3s4.efd_1.kes(request.cfi_1);
    putAll(_this__u8e3s4.hfd_1, request.ffi_1);
    return _this__u8e3s4;
  }
  function Phases() {
    Phases_instance = this;
    this.yfj_1 = new PipelinePhase('Before');
    this.zfj_1 = new PipelinePhase('State');
    this.afk_1 = new PipelinePhase('Transform');
    this.bfk_1 = new PipelinePhase('Render');
    this.cfk_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance().yfj_1, Phases_getInstance().zfj_1, Phases_getInstance().afk_1, Phases_getInstance().bfk_1, Phases_getInstance().cfk_1]);
    this.yg1_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).teu = function () {
    return this.yg1_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.sfd_1 = new PipelinePhase('Before');
    this.tfd_1 = new PipelinePhase('State');
    this.ufd_1 = new PipelinePhase('Monitoring');
    this.vfd_1 = new PipelinePhase('Engine');
    this.wfd_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().sfd_1, Phases_getInstance_0().tfd_1, Phases_getInstance_0().ufd_1, Phases_getInstance_0().vfd_1, Phases_getInstance_0().wfd_1]);
    this.gg2_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).teu = function () {
    return this.gg2_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function url_0(_this__u8e3s4, url) {
    takeFrom_1(_this__u8e3s4.cfd_1, url);
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.sf1().jes(HttpHeaders_getInstance().pex_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.hg2_1 = call;
    this.ig2_1 = responseData.pfe_1;
    this.jg2_1 = responseData.kfe_1;
    this.kg2_1 = responseData.nfe_1;
    this.lg2_1 = responseData.lfe_1;
    this.mg2_1 = responseData.qfe_1;
    var tmp = this;
    var tmp_0 = responseData.ofe_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.ng2_1 = tmp0_elvis_lhs == null ? Companion_getInstance().ge9() : tmp0_elvis_lhs;
    this.og2_1 = responseData.mfe_1;
  }
  protoOf(DefaultHttpResponse).jfg = function () {
    return this.hg2_1;
  };
  protoOf(DefaultHttpResponse).om = function () {
    return this.ig2_1;
  };
  protoOf(DefaultHttpResponse).a8g = function () {
    return this.jg2_1;
  };
  protoOf(DefaultHttpResponse).ufg = function () {
    return this.kg2_1;
  };
  protoOf(DefaultHttpResponse).vfg = function () {
    return this.lg2_1;
  };
  protoOf(DefaultHttpResponse).wfg = function () {
    return this.mg2_1;
  };
  protoOf(DefaultHttpResponse).lcd = function () {
    return this.ng2_1;
  };
  protoOf(DefaultHttpResponse).sf1 = function () {
    return this.og2_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).off() + ', ' + this.a8g() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.jfg().mff();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.om().u6(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.ku();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().gek_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$19(_this__u8e3s4, fallbackCharset, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function bodyAsChannel(_this__u8e3s4, $completion) {
    var tmp = new $bodyAsChannelCOROUTINE$20(_this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function $bodyAsTextCOROUTINE$19(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xg2_1 = _this__u8e3s4;
    this.yg2_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$19).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.xg2_1);
            tmp_0.zg2_1 = tmp0_elvis_lhs == null ? this.yg2_1 : tmp0_elvis_lhs;
            this.ag3_1 = this.zg2_1.jek();
            this.dl_1 = 1;
            var tmp_1 = this.xg2_1.jfg();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(ByteReadPacket);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(ByteReadPacket), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.nff(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof ByteReadPacket ? suspendResult : THROW_CCE();
            return decode(this.ag3_1, input);
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
  function $bodyAsChannelCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jg3_1 = _this__u8e3s4;
  }
  protoOf($bodyAsChannelCOROUTINE$20).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = this.jg3_1.jfg();
            var tmp_1 = JsType_getInstance();
            var tmp_2 = getKClass(ByteReadChannel);
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(ByteReadChannel), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.nff(typeInfoImpl(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (!(suspendResult == null) ? isInterface(suspendResult, ByteReadChannel) : false) ? suspendResult : THROW_CCE();
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.afe_1 = new PipelinePhase('Receive');
    this.bfe_1 = new PipelinePhase('Parse');
    this.cfe_1 = new PipelinePhase('Transform');
    this.dfe_1 = new PipelinePhase('State');
    this.efe_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().afe_1, Phases_getInstance_1().bfe_1, Phases_getInstance_1().cfe_1, Phases_getInstance_1().dfe_1, Phases_getInstance_1().efe_1]);
    this.rg3_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).teu = function () {
    return this.rg3_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.dfk_1 = new PipelinePhase('Before');
    this.efk_1 = new PipelinePhase('State');
    this.ffk_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().dfk_1, Phases_getInstance_2().efk_1, Phases_getInstance_2().ffk_1]);
    this.zg3_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).teu = function () {
    return this.zg3_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.kff_1 = expectedType;
    this.lff_1 = response;
  }
  protoOf(HttpResponseContainer).y4 = function () {
    return this.kff_1;
  };
  protoOf(HttpResponseContainer).z4 = function () {
    return this.lff_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.kff_1 + ', response=' + toString(this.lff_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.kff_1.hashCode();
    result = imul(result, 31) + hashCode(this.lff_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.kff_1.equals(tmp0_other_with_cast.kff_1))
      return false;
    if (!equals(this.lff_1, tmp0_other_with_cast.lff_1))
      return false;
    return true;
  };
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.ag4_1.hfd_1.aeo(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.a(element);
        }
      }
      tmp = tmp0_filterIsInstanceTo;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (pluginOrNull($this.bg4_1, element_0) == null) {
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            var message = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpStatement$execute$slambda).lg4 = function (it, $completion) {
    var tmp = this.afn(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpStatement$execute$slambda).yl = function (p1, $completion) {
    return this.lg4(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpStatement$execute$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = save(this.kg4_1.jfg(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.dfc();
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
  protoOf(HttpStatement$execute$slambda).afn = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.kg4_1 = it;
    return i;
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.lg4(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$21(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ug4_1 = _this__u8e3s4;
    this.vg4_1 = block;
  }
  protoOf($executeCOROUTINE$21).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 13;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 12;
            this.dl_1 = 2;
            suspendResult = this.ug4_1.bg5(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xg4_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.el_1 = 10;
            this.dl_1 = 5;
            suspendResult = this.vg4_1(this.xg4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.yg4_1 = suspendResult;
            this.dl_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.zg4_1 = this.yg4_1;
            this.dl_1 = 7;
            suspendResult = this.ug4_1.cg5(this.xg4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.zg4_1;
          case 8:
            this.dl_1 = 9;
            suspendResult = this.ug4_1.cg5(this.xg4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.wg4_1 = Unit_getInstance();
            this.el_1 = 13;
            this.dl_1 = 15;
            continue $sm;
          case 10:
            this.el_1 = 12;
            this.ag5_1 = this.gl_1;
            this.dl_1 = 11;
            suspendResult = this.ug4_1.cg5(this.xg4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.ag5_1;
          case 12:
            this.el_1 = 13;
            var tmp_2 = this.gl_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.gl_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.gl_1;
            }

          case 13:
            throw this.gl_1;
          case 14:
            this.el_1 = 13;
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 15;
            continue $sm;
          case 15:
            return this.wg4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 13) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lg5_1 = _this__u8e3s4;
  }
  protoOf($executeUnsafeCOROUTINE$22).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 3;
            this.ng5_1 = (new HttpRequestBuilder()).zfi(this.lg5_1.ag4_1);
            this.dl_1 = 2;
            suspendResult = this.lg5_1.bg4_1.ffe(this.ng5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.dfc();
          case 3:
            this.el_1 = 4;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.gl_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.gl_1;
            }

          case 4:
            throw this.gl_1;
          case 5:
            this.el_1 = 4;
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 6;
            continue $sm;
          case 6:
            return this.mg5_1;
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
  function $cleanupCOROUTINE$23(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wg5_1 = _this__u8e3s4;
    this.xg5_1 = _this__u8e3s4_0;
  }
  protoOf($cleanupCOROUTINE$23).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.xg5_1.om().u6(Key_getInstance()));
            tmp_0.yg5_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.yg5_1.ku();
            this.el_1 = 1;
            cancel_1(this.xg5_1.lcd());
            this.el_1 = 4;
            this.dl_1 = 2;
            continue $sm;
          case 1:
            this.el_1 = 4;
            var tmp_2 = this.gl_1;
            if (tmp_2 instanceof Error) {
              this.zg5_1 = this.gl_1;
              this.dl_1 = 2;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 2:
            this.el_1 = 4;
            this.dl_1 = 3;
            suspendResult = this.yg5_1.un(this);
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
  function HttpStatement(builder, client) {
    this.ag4_1 = builder;
    this.bg4_1 = client;
    checkCapabilities(this);
  }
  protoOf(HttpStatement).ag6 = function (block, $completion) {
    var tmp = new $executeCOROUTINE$21(this, block, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpStatement).bg6 = function ($completion) {
    return this.ag6(HttpStatement$execute$slambda_0(null), $completion);
  };
  protoOf(HttpStatement).bg5 = function ($completion) {
    var tmp = new $executeUnsafeCOROUTINE$22(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpStatement).cg5 = function (_this__u8e3s4, $completion) {
    var tmp = new $cleanupCOROUTINE$23(this, _this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.ag4_1.cfd_1 + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).s10();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.kg6_1 = $contentLength;
    this.lg6_1 = $this_observable;
    this.mg6_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(observable$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 15;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.pg6_1 = get_ByteArrayPool();
            this.qg6_1 = this.pg6_1.rei();
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.el_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.kg6_1;
            tmp_1.sg6_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.tg6_1 = new Long(0, 0);
            this.dl_1 = 4;
            continue $sm;
          case 4:
            if (!!this.lg6_1.bea()) {
              this.dl_1 = 8;
              continue $sm;
            }

            this.dl_1 = 5;
            suspendResult = readAvailable(this.lg6_1, this.qg6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.ug6_1 = suspendResult;
            this.dl_1 = 6;
            suspendResult = this.ng6_1.s10().sef(this.qg6_1, 0, this.ug6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            tmp_2.tg6_1 = this.tg6_1.r7(toLong(this.ug6_1));
            this.dl_1 = 7;
            suspendResult = this.mg6_1(this.tg6_1, this.sg6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.dl_1 = 4;
            continue $sm;
          case 8:
            this.vg6_1 = this.lg6_1.le8();
            this.ng6_1.s10().m16(this.vg6_1);
            if (this.vg6_1 == null ? this.tg6_1.equals(new Long(0, 0)) : false) {
              this.dl_1 = 9;
              suspendResult = this.mg6_1(this.tg6_1, this.sg6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 10;
              continue $sm;
            }

          case 9:
            this.dl_1 = 10;
            continue $sm;
          case 10:
            this.rg6_1 = Unit_getInstance();
            this.el_1 = 15;
            this.dl_1 = 11;
            var tmp_3 = this;
            continue $sm;
          case 11:
            var tmp_4 = this;
            this.pg6_1.sei(this.qg6_1);
            tmp_4.og6_1 = Unit_getInstance();
            this.dl_1 = 13;
            continue $sm;
          case 12:
            this.pg6_1.sei(this.qg6_1);
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.el_1 = 15;
            var t = this.gl_1;
            this.pg6_1.sei(this.qg6_1);
            throw t;
          case 15:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 15) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).ifh = function ($this$writer, completion) {
    var i = new observable$slambda(this.kg6_1, this.lg6_1, this.mg6_1, completion);
    i.ng6_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.wg6_1 = response;
    this.xg6_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.zg6_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).xf6 = function () {
    return this.zg6_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HeadersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    return tmp0_apply.df();
  }
  function buildHeaders$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_3;
    } else {
      tmp = block;
    }
    block = tmp;
    return HttpClient_0(JsClient(), block);
  }
  function HttpClient$lambda_3($this$null) {
    return Unit_getInstance();
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().wu_1;
  }
  function Js() {
    Js_instance = this;
  }
  protoOf(Js).ag7 = function (block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    return new JsClientEngine(tmp0_apply);
  };
  protoOf(Js).gfe = function (block) {
    return this.ag7(block);
  };
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function JsClient() {
    return Js_getInstance();
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (get_platform(PlatformUtils_getInstance()).h7_1 === 2) {
      tmp = new WebSocket(urlString_capturingHack);
    } else {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.bes(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$25($this, request, callContext, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$24(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xg7_1 = _this__u8e3s4;
    this.yg7_1 = data;
  }
  protoOf($executeCOROUTINE$24).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            this.dl_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zg7_1 = suspendResult;
            this.ag8_1 = this.yg7_1.ffi_1.zen(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.yg7_1)) {
              this.dl_1 = 5;
              suspendResult = executeWebSocketRequest(this.xg7_1, this.yg7_1, this.zg7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 2:
            this.bg8_1 = GMTDate();
            this.dl_1 = 3;
            suspendResult = toRaw(this.yg7_1, this.ag8_1, this.zg7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.cg8_1 = suspendResult;
            this.dl_1 = 4;
            suspendResult = commonFetch(this.yg7_1.afi_1.toString(), this.cg8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_4().df2_1;
            var body = readBody(CoroutineScope_0(this.zg7_1), rawResponse);
            return new HttpResponseData(status, this.bg8_1, headers, version, body, this.zg7_1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$25(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jg7_1 = _this__u8e3s4;
    this.kg7_1 = request;
    this.lg7_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$25).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.mg7_1 = GMTDate();
            this.ng7_1 = this.kg7_1.afi_1.toString();
            this.og7_1 = createWebSocket(this.jg7_1, this.ng7_1, this.kg7_1.cfi_1);
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = awaitConnection(this.og7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 4;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.el_1 = 4;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              var cause = this.gl_1;
              cancel_3(this.lg7_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.ng7_1, cause));
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 3:
            this.el_1 = 4;
            var session = new JsWebSocketSession(this.lg7_1, this.og7_1);
            return new HttpResponseData(Companion_getInstance_3().nf2_1, this.mg7_1, Companion_getInstance_5().mex_1, Companion_getInstance_4().df2_1, session, this.lg7_1);
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
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.hg8_1 = config;
    this.ig8_1 = setOf_0([Plugin_getInstance_5(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.hg8_1.wfj_1 == null)) {
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).qfd = function () {
    return this.hg8_1;
  };
  protoOf(JsClientEngine).hfi = function () {
    return this.ig8_1;
  };
  protoOf(JsClientEngine).nfj = function (data, $completion) {
    var tmp = new $executeCOROUTINE$24(this, data, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.ln()) {
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.kq(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    return cancellable.lq();
  }
  function asString(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = ['message', 'target', 'type', 'isTrusted'];
    tmp0_apply.ia(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    return tmp0_apply.toString();
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].');
    captureStack(this, JsError);
    this.jg8_1 = origin;
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.jes(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_6();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.n5(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_6();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.n5(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$26(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    return tmp0_apply;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.gg9_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toRaw$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(toRaw$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toRaw$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.gg9_1.df7(this.hg9_1.s10(), this);
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
  protoOf(toRaw$slambda).ifh = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.gg9_1, completion);
    i.hg9_1 = $this$writer;
    return i;
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.bfi_1.bf2_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.mfd_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0_get_FOLLOW_upaq5u = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp1_get_MANUAL_pgscji = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$26(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sg8_1 = _this__u8e3s4;
    this.tg8_1 = clientConfig;
    this.ug8_1 = callContext;
  }
  protoOf($toRawCOROUTINE$26).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.vg8_1 = {};
            mergeHeaders(this.sg8_1.cfi_1, this.sg8_1.dfi_1, toRaw$lambda(this.vg8_1));
            this.wg8_1 = this.sg8_1.dfi_1;
            var tmp_0 = this.wg8_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.xg8_1 = this.wg8_1.yf6();
              this.dl_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.wg8_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.dl_1 = 2;
                suspendResult = this.wg8_1.bf7().uef(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.wg8_1;
                if (tmp_2 instanceof WriteChannelContent) {
                  this.dl_1 = 1;
                  var tmp_3 = GlobalScope_getInstance();
                  suspendResult = writer(tmp_3, this.ug8_1, VOID, toRaw$slambda_0(this.wg8_1, null)).s10().uef(VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.xg8_1 = null;
                  this.dl_1 = 3;
                  continue $sm;
                }
              }
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.xg8_1 = readBytes(ARGUMENT);
            this.dl_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            this.xg8_1 = readBytes(ARGUMENT_0);
            this.dl_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.xg8_1;
            return buildObject(toRaw$lambda_0(this.sg8_1, this.vg8_1, this.tg8_1, bodyBytes));
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
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().ge9();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).s10();
  }
  function readChunk(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    return cancellable.lq();
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.qg9_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(channelFromStream$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            this.sg9_1 = this.qg9_1.getReader();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dl_1 = 8;
              continue $sm;
            }

            this.el_1 = 5;
            this.dl_1 = 2;
            suspendResult = readChunk(this.sg9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tg9_1 = suspendResult;
            if (this.tg9_1 == null) {
              this.el_1 = 6;
              this.dl_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.ug9_1 = this.tg9_1;
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.vg9_1 = this.ug9_1;
            this.dl_1 = 4;
            suspendResult = writeFully(this.rg9_1.s10(), asByteArray(this.vg9_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.rg9_1.s10().gh();
            this.el_1 = 6;
            this.dl_1 = 7;
            continue $sm;
          case 5:
            this.el_1 = 6;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              var cause = this.gl_1;
              this.sg9_1.cancel(cause);
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 6:
            throw this.gl_1;
          case 7:
            this.el_1 = 6;
            this.dl_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  protoOf(channelFromStream$slambda).ifh = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.qg9_1, completion);
    i.rg9_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.n5(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.n5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.kq(commonFetch$lambda(controller));
    var promise = get_platform(PlatformUtils_getInstance()).h7_1 === 2 ? fetch(input, init) : jsRequireNodeFetch()(input, init);
    var tmp = commonFetch$lambda_0(cancellable);
    promise.then(tmp, commonFetch$lambda_1(cancellable));
    return cancellable.lq();
  }
  function readBody(_this__u8e3s4, response) {
    return get_platform(PlatformUtils_getInstance()).h7_1 === 3 ? readBodyNode(_this__u8e3s4, response) : readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    var tmp;
    if (get_platform(PlatformUtils_getInstance()).h7_1 === 2) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      var cause = $p;
      throw Error_init_$Create$("Error loading module 'node-fetch': " + cause);
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_6();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.n5(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_6();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.n5(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer(_this__u8e3s4, VOID, VOID, readBodyNode$slambda_0(response, null)).s10();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.g16(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.m16(cause);
      return $this_writer.s10().m16(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.o16();
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.ega_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(readBodyNode$slambda).hfh = function ($this$writer, $completion) {
    var tmp = this.ifh($this$writer, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(readBodyNode$slambda).yl = function (p1, $completion) {
    return this.hfh((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(readBodyNode$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.ega_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.gga_1 = tmp_1;
            this.hga_1 = Channel(1);
            this.gga_1.on('data', readBodyNode$slambda$lambda(this.hga_1, this.gga_1));
            this.gga_1.on('error', readBodyNode$slambda$lambda_0(this.hga_1, this.fga_1));
            this.gga_1.on('end', readBodyNode$slambda$lambda_1(this.hga_1));
            this.el_1 = 5;
            this.iga_1 = this.hga_1.d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            suspendResult = this.iga_1.s13(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.jga_1 = this.iga_1.f();
            this.dl_1 = 3;
            suspendResult = writeFully(this.fga_1.s10(), this.jga_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.fga_1.s10().gh();
            this.gga_1.resume();
            this.dl_1 = 1;
            continue $sm;
          case 4:
            this.el_1 = 6;
            this.dl_1 = 7;
            continue $sm;
          case 5:
            this.el_1 = 6;
            var tmp_2 = this.gl_1;
            if (tmp_2 instanceof Error) {
              var cause = this.gl_1;
              this.gga_1.destroy(cause);
              throw cause;
            } else {
              throw this.gl_1;
            }

          case 6:
            throw this.gl_1;
          case 7:
            this.el_1 = 6;
            return Unit_getInstance();
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
  protoOf(readBodyNode$slambda).ifh = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.ega_1, completion);
    i.fga_1 = $this$writer;
    return i;
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.hfh($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function getResponseObserverContext($completion) {
    return EmptyCoroutineContext_getInstance();
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_7().vf7(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    return tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.mga_1.ju(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.nga_1.g16(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = WebSocketException_init_$Create$('' + it);
      this$0.mga_1.ju(cause);
      this$0.nga_1.m16(cause);
      this$0.oga_1.q16();
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.mga_1.hu(reason);
      this$0.nga_1.g16(Close_init_$Create$(reason));
      this$0.nga_1.o16();
      this$0.oga_1.q16();
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.agb_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(JsWebSocketSession$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            var tmp_0 = this;
            tmp_0.cgb_1 = this.agb_1.oga_1;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.egb_1 = null;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.el_1 = 9;
            this.el_1 = 8;
            this.ggb_1 = this.cgb_1.d();
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.dl_1 = 5;
            suspendResult = this.ggb_1.s13(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.dl_1 = 6;
              continue $sm;
            }

            var e = this.ggb_1.f();
            switch (e.hf8_1.h7_1) {
              case 0:
                var text = e.if8_1;
                this.agb_1.lga_1.send(String_0(text));
                break;
              case 1:
                var tmp_1 = e.if8_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.agb_1.lga_1.send(frameData);
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = new BytePacketBuilder();
                  try {
                    writeFully_0(builder, e.if8_1);
                    tmp$ret$0 = builder.df();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t = $p;
                      builder.su();
                      throw t;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.yej();
                this.agb_1.mga_1.hu(new CloseReason(code, reason));
                if (isReservedStatusCode(code, this.agb_1)) {
                  this.agb_1.lga_1.close();
                } else {
                  this.agb_1.lga_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.dl_1 = 4;
            continue $sm;
          case 6:
            this.fgb_1 = Unit_getInstance();
            this.el_1 = 10;
            this.dl_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.cgb_1, this.egb_1);
            tmp_3.dgb_1 = Unit_getInstance();
            this.dl_1 = 12;
            continue $sm;
          case 8:
            this.el_1 = 9;
            var tmp_4 = this.gl_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.gl_1;
              var tmp_5 = this;
              this.egb_1 = e_0;
              throw e_0;
            } else {
              throw this.gl_1;
            }

          case 9:
            this.el_1 = 10;
            var t_0 = this.gl_1;
            cancelConsumed(this.cgb_1, this.egb_1);
            throw t_0;
          case 10:
            throw this.gl_1;
          case 11:
            cancelConsumed(this.cgb_1, this.egb_1);
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.el_1 === 10) {
          throw e_1;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).u1e = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.agb_1, completion);
    i.bgb_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.lga_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.lga_1.close(Codes_NORMAL_getInstance().sf7_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.kga_1 = coroutineContext;
    this.lga_1 = websocket;
    this.mga_1 = CompletableDeferred();
    var tmp = this;
    Factory_getInstance();
    tmp.nga_1 = Channel(2147483647);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.oga_1 = Channel(2147483647);
    this.pga_1 = this.nga_1;
    this.qga_1 = this.oga_1;
    this.rga_1 = this.mga_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    null;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'arraybuffer';
    this.lga_1.binaryType = tmp$ret$2;
    this.lga_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.lga_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.lga_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    var tmp0_safe_receiver = this.kga_1.u6(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rn(JsWebSocketSession$lambda_2(this));
    }
  }
  protoOf(JsWebSocketSession).om = function () {
    return this.kga_1;
  };
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.m1();
  }, VOID);
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.m1();
  }, VOID);
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.n1();
  }, VOID);
  protoOf(HttpClientEngineBase).hfi = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).rfd = install;
  protoOf(KtorCallContextElement).u6 = get;
  protoOf(KtorCallContextElement).a7 = fold;
  protoOf(KtorCallContextElement).z6 = minusKey;
  protoOf(KtorCallContextElement).b7 = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.m1();
  }, VOID);
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.m1();
  }, VOID);
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.m1();
  }, VOID);
  protoOf(HttpRequest$1).om = get_coroutineContext;
  protoOf(JsClientEngine).rfd = install;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = bodyAsChannel;
  _.$_$.b = Plugin_getInstance_6;
  _.$_$.c = Phases_getInstance;
  _.$_$.d = Phases_getInstance_0;
  _.$_$.e = Phases_getInstance_2;
  _.$_$.f = Phases_getInstance_1;
  _.$_$.g = EmptyContent_getInstance;
  _.$_$.h = ResponseObserver;
  _.$_$.i = HttpClientPlugin;
  _.$_$.j = defaultRequest;
  _.$_$.k = onDownload;
  _.$_$.l = HttpRequestBuilder;
  _.$_$.m = accept;
  _.$_$.n = takeFrom_2;
  _.$_$.o = url;
  _.$_$.p = url_0;
  _.$_$.q = HttpResponseContainer;
  _.$_$.r = HttpResponse;
  _.$_$.s = HttpStatement;
  _.$_$.t = HttpClient_1;
  _.$_$.u = HttpClient;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-core.js.map
