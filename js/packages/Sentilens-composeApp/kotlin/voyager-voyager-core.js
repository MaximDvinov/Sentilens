(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './uuid.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./uuid.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof uuid === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'uuid' was not found. Please, check whether 'uuid' is loaded prior to 'voyager-voyager-core'.");
    }
    root['voyager-voyager-core'] = factory(typeof this['voyager-voyager-core'] === 'undefined' ? {} : this['voyager-voyager-core'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], uuid);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_benasher44_uuid) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.xd;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var DisposableEffectScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.id;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var toMutableList = kotlin_kotlin.$_$.xa;
  var removeFirst = kotlin_kotlin.$_$.z9;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var removeFirstOrNull = kotlin_kotlin.$_$.y9;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var to = kotlin_kotlin.$_$.el;
  var Pair = kotlin_kotlin.$_$.nj;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var asSequence = kotlin_kotlin.$_$.y6;
  var filter = kotlin_kotlin.$_$.vf;
  var map = kotlin_kotlin.$_$.ag;
  var startsWith = kotlin_kotlin.$_$.rh;
  var equals = kotlin_kotlin.$_$.oc;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var lastOrNull = kotlin_kotlin.$_$.e9;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toMutableStateList = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var removeLast = kotlin_kotlin.$_$.ba;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var Enum = kotlin_kotlin.$_$.dj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var MutableMap = kotlin_kotlin.$_$.o6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var MutableSet = kotlin_kotlin.$_$.p6;
  var emptyList = kotlin_kotlin.$_$.z7;
  var uuid4 = kotlin_com_benasher44_uuid.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DisposableEffectIgnoringConfigurationImpl, 'DisposableEffectIgnoringConfigurationImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(ScreenLifecycleProvider, 'ScreenLifecycleProvider', interfaceMeta);
  function ProvideBeforeScreenContent$composable(provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1882549595);
    sourceInformation($composer_0, 'C(ProvideBeforeScreenContent$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1882549595, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleContentProvider.ProvideBeforeScreenContent$composable (ScreenLifecycleOwner.kt:18)');
      }
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(ScreenLifecycleContentProvider$ProvideBeforeScreenContent$composable$lambda(tmp0_rcvr, provideSaveableState, content, $changed));
    }
  }
  setMetadataFor(ScreenLifecycleContentProvider, 'ScreenLifecycleContentProvider', interfaceMeta);
  function onDispose(screen) {
  }
  setMetadataFor(ScreenDisposable, 'ScreenDisposable', interfaceMeta);
  setMetadataFor(DefaultScreenLifecycleOwner, 'DefaultScreenLifecycleOwner', objectMeta, VOID, [ScreenDisposable, ScreenLifecycleContentProvider]);
  setMetadataFor(ScreenLifecycleStore, 'ScreenLifecycleStore', objectMeta);
  function onDispose_0() {
  }
  setMetadataFor(ScreenModel, 'ScreenModel', interfaceMeta);
  setMetadataFor(StateScreenModel, 'StateScreenModel', classMeta, VOID, [ScreenModel]);
  setMetadataFor(ScreenModelStore, 'ScreenModelStore', objectMeta);
  setMetadataFor(SnapshotStateStack, 'SnapshotStateStack', classMeta);
  setMetadataFor(StackEvent, 'StackEvent', classMeta, Enum);
  setMetadataFor(ThreadSafeMap, 'ThreadSafeMap', classMeta, VOID, [MutableMap]);
  setMetadataFor(ThreadSafeSet, 'ThreadSafeSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(ConfigurationChecker, 'ConfigurationChecker', classMeta);
  setMetadataFor(DefaultNavigatorScreenLifecycleProvider, 'DefaultNavigatorScreenLifecycleProvider', classMeta);
  function get_key() {
    return commonKeyGeneration(this);
  }
  setMetadataFor(Screen, 'Screen', interfaceMeta);
  //endregion
  function get_InternalDisposableEffectScope() {
    _init_properties_DisposableEffect_kt__naxsgf();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectIgnoringConfiguration$composable(key1, effect, $composer, $changed) {
    _init_properties_DisposableEffect_kt__naxsgf();
    var $composer_0 = $composer;
    $composer_0.m1r(-724497028);
    sourceInformation($composer_0, 'C(DisposableEffectIgnoringConfiguration$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(-724497028, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfiguration$composable (DisposableEffect.kt:14)');
    }
    var configurationChecker = getConfigurationChecker$composable($composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(configurationChecker) | $composer_1.y1t(key1));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfiguration$composable.<anonymous>' call
      var value = new DisposableEffectIgnoringConfigurationImpl(configurationChecker, effect);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function DisposableEffectIgnoringConfigurationImpl(configurationChecker, effect) {
    this.kie_1 = configurationChecker;
    this.lie_1 = effect;
    this.mie_1 = null;
  }
  protoOf(DisposableEffectIgnoringConfigurationImpl).e22 = function () {
    this.mie_1 = this.lie_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectIgnoringConfigurationImpl).g22 = function () {
    var tmp0_safe_receiver = this.mie_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfigurationImpl.onForgotten.<anonymous>' call
      if (!this.kie_1.nie()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.gp();
    }
    this.mie_1 = null;
  };
  protoOf(DisposableEffectIgnoringConfigurationImpl).f22 = function () {
  };
  var properties_initialized_DisposableEffect_kt_4atvkd;
  function _init_properties_DisposableEffect_kt__naxsgf() {
    if (!properties_initialized_DisposableEffect_kt_4atvkd) {
      properties_initialized_DisposableEffect_kt_4atvkd = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function get_LocalNavigatorScreenLifecycleProvider() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return LocalNavigatorScreenLifecycleProvider;
  }
  var LocalNavigatorScreenLifecycleProvider;
  function LocalNavigatorScreenLifecycleProvider$lambda() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return new DefaultNavigatorScreenLifecycleProvider();
  }
  var properties_initialized_NavigatorScreenLifecycle_kt_uc7c89;
  function _init_properties_NavigatorScreenLifecycle_kt__3cieg7() {
    if (!properties_initialized_NavigatorScreenLifecycle_kt_uc7c89) {
      properties_initialized_NavigatorScreenLifecycle_kt_uc7c89 = true;
      LocalNavigatorScreenLifecycleProvider = staticCompositionLocalOf(LocalNavigatorScreenLifecycleProvider$lambda);
    }
  }
  function rememberScreenLifecycleOwner$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1573571947);
    sourceInformation($composer_0, 'C(rememberScreenLifecycleOwner$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1573571947, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable (ScreenLifecycle.kt:24)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = screen.r();
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(tmp0_remember$composable);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable.<anonymous>' call
      var tmp_0;
      if (isInterface(screen, ScreenLifecycleProvider)) {
        tmp_0 = screen.oie();
      } else {
        tmp_0 = DefaultScreenLifecycleOwner_getInstance();
      }
      var value = tmp_0;
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_1 = tmp;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function getNavigatorScreenLifecycleProvider$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-545509411);
    sourceInformation($composer_0, 'C(getNavigatorScreenLifecycleProvider$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-545509411, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleProvider$composable (ScreenLifecycle.kt:34)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalNavigatorScreenLifecycleProvider();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var navigatorScreenLifecycleProvider = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = screen.r();
    var $composer_2 = $composer_0;
    $composer_2.m1r(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2.y1t(tmp2_remember$composable);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleProvider$composable.<anonymous>' call
      var value = navigatorScreenLifecycleProvider.pie(screen);
      $composer_2.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_2.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function ScreenLifecycleProvider() {
  }
  function ScreenLifecycleContentProvider$ProvideBeforeScreenContent$composable$lambda($tmp0_rcvr, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.qie($provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScreenLifecycleContentProvider() {
  }
  function ScreenDisposable() {
  }
  function DefaultScreenLifecycleOwner() {
    DefaultScreenLifecycleOwner_instance = this;
    this.sie_1 = 0;
  }
  var DefaultScreenLifecycleOwner_instance;
  function DefaultScreenLifecycleOwner_getInstance() {
    if (DefaultScreenLifecycleOwner_instance == null)
      new DefaultScreenLifecycleOwner();
    return DefaultScreenLifecycleOwner_instance;
  }
  function ScreenLifecycleStore() {
    ScreenLifecycleStore_instance = this;
    this.tie_1 = ThreadSafeMap_init_$Create$();
    this.uie_1 = ThreadSafeMap_init_$Create$();
    this.vie_1 = 0;
  }
  protoOf(ScreenLifecycleStore).wie = function (screen) {
    var tmp0_safe_receiver = this.tie_1.ye(screen.r());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rie(screen);
    }
    var tmp1_safe_receiver = this.uie_1.ye(screen.r());
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp1_safe_receiver.q().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.remove.<anonymous>' call
        element.s().rie(screen);
      }
    }
  };
  var ScreenLifecycleStore_instance;
  function ScreenLifecycleStore_getInstance() {
    if (ScreenLifecycleStore_instance == null)
      new ScreenLifecycleStore();
    return ScreenLifecycleStore_instance;
  }
  function MultipleProvideBeforeScreenContent$composable(screenLifecycleContentProviders, provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1501901490);
    sourceInformation($composer_0, 'C(MultipleProvideBeforeScreenContent$composable)P(2,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(screenLifecycleContentProviders) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1501901490, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.MultipleProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:14)');
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!screenLifecycleContentProviders.l()) {
        $composer_0.m1r(1797447229);
        var copy = toMutableList(screenLifecycleContentProviders);
        var tmp = removeFirst(copy);
        RecursiveProvideBeforeScreenContent$composable(tmp, provideSaveableState, content, MultipleProvideBeforeScreenContent$composable$lambda(copy), $composer_0, 112 & $dirty | 896 & $dirty);
        $composer_0.o1r();
      } else {
        $composer_0.m1r(1797447571);
        content($composer_0, 14 & $dirty >> 6);
        $composer_0.o1r();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(MultipleProvideBeforeScreenContent$composable$lambda_0(screenLifecycleContentProviders, provideSaveableState, content, $changed));
    }
  }
  function RecursiveProvideBeforeScreenContent$composable(screenLifecycleContentProvider, provideSaveableState, content, nextOrNull, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(31642780);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(screenLifecycleContentProvider) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(nextOrNull) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(31642780, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:34)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [screenLifecycleContentProvider, provideSaveableState, content, nextOrNull];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.y1t(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var value = nextOrNull();
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var next = tmp0;
      if (!(next == null)) {
        $composer_0.m1r(1622838504);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -201295924, true, RecursiveProvideBeforeScreenContent$composable$lambda(next, provideSaveableState, content, nextOrNull, $dirty));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.m1r(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2.y1t(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_2.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_2.x1t(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        $composer_2.o1r();
        var recursiveContent = tmp0_0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_4, 1050024488, true, RecursiveProvideBeforeScreenContent$composable$lambda_0(provideSaveableState, recursiveContent, $dirty));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.m1r(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3.y1t(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = $composer_3.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance().y1s_1) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
          $composer_3.x1t(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_1 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        $composer_3.o1r();
        var tmp_7 = tmp0_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_8, -666683194, true, RecursiveProvideBeforeScreenContent$composable$lambda_1(recursiveContent));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.m1r(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4.y1t(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = $composer_4.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance().y1s_1) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_1(dispatchReceiver_1);
          $composer_4.x1t(value_2);
          tmp_9 = value_2;
        } else {
          tmp_9 = tmp0_let_2;
        }
        var tmp_10 = tmp_9;
        var tmp0_2 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        $composer_4.o1r();
        screenLifecycleContentProvider.qie(tmp_7, tmp0_2, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.o1r();
      } else {
        $composer_0.m1r(1622839079);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_2 = composableLambda(tmp_11, 260867377, true, RecursiveProvideBeforeScreenContent$composable$lambda_2(provideSaveableState, $dirty));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.m1r(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_3 = $composer_5.y1t(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = $composer_5.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp1_cache_3 ? true : tmp0_let_3 === Companion_getInstance().y1s_1) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_2(dispatchReceiver_2);
          $composer_5.x1t(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = tmp0_let_3;
        }
        var tmp_13 = tmp_12;
        var tmp0_3 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        $composer_5.o1r();
        var tmp_14 = tmp0_3;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_15 = $composer_0;
        var dispatchReceiver_3 = composableLambda(tmp_15, -393432241, true, RecursiveProvideBeforeScreenContent$composable$lambda_3(content, $dirty));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_0;
        $composer_6.m1r(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_4 = $composer_6.y1t(dispatchReceiver_3);
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = $composer_6.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_16;
        if (tmp1_cache_4 ? true : tmp0_let_4 === Companion_getInstance().y1s_1) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_4 = ComposableLambda$invoke$ref_3(dispatchReceiver_3);
          $composer_6.x1t(value_4);
          tmp_16 = value_4;
        } else {
          tmp_16 = tmp0_let_4;
        }
        var tmp_17 = tmp_16;
        var tmp0_4 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
        $composer_6.o1r();
        screenLifecycleContentProvider.qie(tmp_14, tmp0_4, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.o1r();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(RecursiveProvideBeforeScreenContent$composable$lambda_4(screenLifecycleContentProvider, provideSaveableState, content, nextOrNull, $changed));
    }
  }
  function MultipleProvideBeforeScreenContent$composable$lambda($copy) {
    return function () {
      return removeFirstOrNull($copy);
    };
  }
  function MultipleProvideBeforeScreenContent$composable$lambda_0($screenLifecycleContentProviders, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      MultipleProvideBeforeScreenContent$composable($screenLifecycleContentProviders, $provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda($next, $provideSaveableState, $content, $nextOrNull, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-201295924, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:38)');
        }
        RecursiveProvideBeforeScreenContent$composable($next, $provideSaveableState, $content, $nextOrNull, $composer_0, 112 & $$dirty | 896 & $$dirty | 7168 & $$dirty);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_0($provideSaveableState, $recursiveContent, $$dirty) {
    return function (suffixKey, $anonymous$parameter$1$, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t(suffixKey) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 651) === 130) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1050024488, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:47)');
        }
        $provideSaveableState(suffixKey, $recursiveContent, $composer_0, 48 | 14 & $dirty | 896 & $$dirty << 3);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.m1t();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.a33(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_1($recursiveContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-666683194, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:50)');
        }
        $recursiveContent($composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_2($provideSaveableState, $$dirty) {
    return function (suffixKey, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t(suffixKey) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.d1u(content) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(260867377, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:55)');
        }
        $provideSaveableState(suffixKey, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $$dirty << 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        $composer_0.m1t();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.a33(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_3($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-393432241, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:58)');
        }
        $content($composer_0, 14 & $$dirty >> 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_4($screenLifecycleContentProvider, $provideSaveableState, $content, $nextOrNull, $$changed) {
    return function ($composer, $force) {
      RecursiveProvideBeforeScreenContent$composable($screenLifecycleContentProvider, $provideSaveableState, $content, $nextOrNull, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function StateScreenModel(initialState) {
    this.aif_1 = MutableStateFlow(initialState);
    this.bif_1 = asStateFlow(this.aif_1);
    this.cif_1 = 0;
  }
  function get_coroutineScope(_this__u8e3s4) {
    // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getOrPutDependency' call
    var tmp0_getOrPutDependency = ScreenModelStore_getInstance();
    var tmp1_getOrPutDependency = _get_coroutineScope_$lambda_u51pno;
    var tmp2_getOrPutDependency = _get_coroutineScope_$lambda_u51pno_0;
    var key = tmp0_getOrPutDependency.iif(_this__u8e3s4, 'ScreenModelCoroutineScope');
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = tmp0_getOrPutDependency.fif_1;
    var value = tmp0_getOrPut.z2(key);
    var tmp;
    if (value == null) {
      // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getOrPutDependency.<anonymous>' call
      var tmp_0 = to(tmp2_getOrPutDependency(key), tmp1_getOrPutDependency);
      var answer = tmp_0 instanceof Pair ? tmp_0 : THROW_CCE();
      tmp0_getOrPut.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp_1 = tmp.w4_1;
    return isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
  }
  function ScreenModel() {
  }
  function _get_coroutineScope_$lambda_u51pno(scope) {
    cancel(scope);
    return Unit_getInstance();
  }
  function _get_coroutineScope_$lambda_u51pno_0(key) {
    return plus(MainScope(), new CoroutineName(key));
  }
  function onEach(_this__u8e3s4, $this, screen, block) {
    var tmp = asSequence(_this__u8e3s4);
    var tmp_0 = filter(tmp, ScreenModelStore$onEach$lambda(screen));
    var tmp0_iterator = map(tmp_0, ScreenModelStore$onEach$lambda_0).d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      block(element);
    }
    return Unit_getInstance();
  }
  function ScreenModelStore$remove$lambda(key) {
    var tmp0_safe_receiver = ScreenModelStore_getInstance().eif_1.z2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dif();
    }
    // Inline function 'kotlin.collections.minusAssign' call
    ScreenModelStore_getInstance().eif_1.ye(key);
    return Unit_getInstance();
  }
  function ScreenModelStore$remove$lambda_0(key) {
    var tmp0_safe_receiver = ScreenModelStore_getInstance().fif_1.z2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var instance = tmp0_safe_receiver.y4();
      var onDispose = tmp0_safe_receiver.z4();
      onDispose(instance);
    }
    // Inline function 'kotlin.collections.minusAssign' call
    ScreenModelStore_getInstance().fif_1.ye(key);
    return Unit_getInstance();
  }
  function ScreenModelStore$onEach$lambda($screen) {
    return function (it) {
      return startsWith(it.r(), $screen.r());
    };
  }
  function ScreenModelStore$onEach$lambda_0(it) {
    return it.r();
  }
  function ScreenModelStore() {
    ScreenModelStore_instance = this;
    this.eif_1 = ThreadSafeMap_init_$Create$();
    this.fif_1 = ThreadSafeMap_init_$Create$();
    this.gif_1 = MutableStateFlow(null);
    this.hif_1 = 0;
  }
  protoOf(ScreenModelStore).iif = function (screenModel, name) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this.eif_1.q().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getDependencyKey.<anonymous>' call
        var tmp;
        if (equals(element.s(), screenModel)) {
          tmp = element.r();
        } else {
          tmp = null;
        }
        var result = tmp;
        if (!(result == null)) {
          tmp$ret$2 = result;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$2;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.gif_1.s();
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.model.ScreenModelStore.getDependencyKey.<anonymous>' call
        tmp_1 = '' + tmp0_safe_receiver + ':' + name;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    return tmp2_elvis_lhs == null ? 'standalone:' + name : tmp2_elvis_lhs;
  };
  protoOf(ScreenModelStore).wie = function (screen) {
    onEach(this.eif_1, this, screen, ScreenModelStore$remove$lambda);
    onEach(this.fif_1, this, screen, ScreenModelStore$remove$lambda_0);
  };
  var ScreenModelStore_instance;
  function ScreenModelStore_getInstance() {
    if (ScreenModelStore_instance == null)
      new ScreenModelStore();
    return ScreenModelStore_instance;
  }
  function commonKeyGeneration(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_multiplatformName(getKClassFromExpression(_this__u8e3s4));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Default ScreenKey not found, please provide your own key');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_uniqueScreenKey(_this__u8e3s4) {
    return 'Screen#' + randomUuid();
  }
  function _set_lastEvent__pgcjtr($this, _set____db54di) {
    lastEvent$factory();
    return $this.kif_1.f1d(_set____db54di);
  }
  function SnapshotStateStack$items$delegate$lambda(this$0) {
    return function () {
      return this$0.jif_1.y2y();
    };
  }
  function SnapshotStateStack$lastItemOrNull$delegate$lambda(this$0) {
    return function () {
      return lastOrNull(this$0.jif_1);
    };
  }
  function SnapshotStateStack$lastOrNull$delegate$lambda(this$0) {
    return function () {
      return this$0.sif();
    };
  }
  function SnapshotStateStack$size$delegate$lambda(this$0) {
    return function () {
      return this$0.jif_1.g();
    };
  }
  function SnapshotStateStack$isEmpty$delegate$lambda(this$0) {
    return function () {
      return this$0.jif_1.l();
    };
  }
  function SnapshotStateStack$canPop$delegate$lambda(this$0, $minSize) {
    return function () {
      return this$0.jif_1.g() > $minSize;
    };
  }
  function SnapshotStateStack(items, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minSize >= 0)) {
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      var message = 'Min size ' + minSize + ' is less than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(items.g() >= minSize)) {
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      var message_0 = 'Stack size ' + items.g() + ' is less than the min size ' + minSize;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.jif_1 = toMutableStateList(items);
    this.kif_1 = mutableStateOf(StackEvent_Idle_getInstance(), neverEqualPolicy());
    var tmp = this;
    tmp.lif_1 = derivedStateOf(SnapshotStateStack$items$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.mif_1 = derivedStateOf(SnapshotStateStack$lastItemOrNull$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.nif_1 = derivedStateOf(SnapshotStateStack$lastOrNull$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.oif_1 = derivedStateOf(SnapshotStateStack$size$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.pif_1 = derivedStateOf(SnapshotStateStack$isEmpty$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.qif_1 = derivedStateOf(SnapshotStateStack$canPop$delegate$lambda(this, minSize));
    this.rif_1 = 0;
  }
  protoOf(SnapshotStateStack).tif = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    lastEvent$factory_0();
    return this.kif_1.s();
  };
  protoOf(SnapshotStateStack).uif = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    items$factory();
    return this.lif_1.s();
  };
  protoOf(SnapshotStateStack).sif = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    lastItemOrNull$factory();
    return this.mif_1.s();
  };
  protoOf(SnapshotStateStack).vif = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    canPop$factory();
    return this.qif_1.s();
  };
  protoOf(SnapshotStateStack).wif = function (item) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.jif_1.a(item);
    _set_lastEvent__pgcjtr(this, StackEvent_Push_getInstance());
  };
  protoOf(SnapshotStateStack).xif = function (item) {
    if (this.jif_1.l()) {
      this.wif(item);
    } else {
      this.jif_1.s2l(get_lastIndex(this.jif_1), item);
    }
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).f20 = function () {
    var tmp;
    if (this.vif()) {
      removeLast(this.jif_1);
      _set_lastEvent__pgcjtr(this, StackEvent_Pop_getInstance());
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapshotStateStack).yif = function () {
    _set_lastEvent__pgcjtr(this, StackEvent_Idle_getInstance());
  };
  function toMutableStateStack(_this__u8e3s4, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    return new SnapshotStateStack(_this__u8e3s4, minSize);
  }
  function lastEvent$factory() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.tif();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function lastEvent$factory_0() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.tif();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function items$factory() {
    return getPropertyCallableRef('items', 1, KProperty1, function (receiver) {
      return receiver.uif();
    }, null);
  }
  function lastItemOrNull$factory() {
    return getPropertyCallableRef('lastItemOrNull', 1, KProperty1, function (receiver) {
      return receiver.sif();
    }, null);
  }
  function canPop$factory() {
    return getPropertyCallableRef('canPop', 1, KProperty1, function (receiver) {
      return receiver.vif();
    }, null);
  }
  var StackEvent_Push_instance;
  var StackEvent_Replace_instance;
  var StackEvent_Pop_instance;
  var StackEvent_Idle_instance;
  var StackEvent_entriesInitialized;
  function StackEvent_initEntries() {
    if (StackEvent_entriesInitialized)
      return Unit_getInstance();
    StackEvent_entriesInitialized = true;
    StackEvent_Push_instance = new StackEvent('Push', 0);
    StackEvent_Replace_instance = new StackEvent('Replace', 1);
    StackEvent_Pop_instance = new StackEvent('Pop', 2);
    StackEvent_Idle_instance = new StackEvent('Idle', 3);
  }
  function StackEvent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StackEvent_Push_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Push_instance;
  }
  function StackEvent_Replace_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Replace_instance;
  }
  function StackEvent_Pop_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Pop_instance;
  }
  function StackEvent_Idle_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Idle_instance;
  }
  function ThreadSafeMap_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    ThreadSafeMap.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeMap_init_$Create$() {
    return ThreadSafeMap_init_$Init$(objectCreate(protoOf(ThreadSafeMap)));
  }
  function ThreadSafeMap(delegate) {
    this.xie_1 = delegate;
    this.yie_1 = new Object();
    this.zie_1 = 8;
  }
  protoOf(ThreadSafeMap).g = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.<get-size>.<anonymous>' call
    return this.xie_1.g();
  };
  protoOf(ThreadSafeMap).t2 = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.containsKey.<anonymous>' call
    return this.xie_1.t2(key);
  };
  protoOf(ThreadSafeMap).z2 = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.get.<anonymous>' call
    return this.xie_1.z2(key);
  };
  protoOf(ThreadSafeMap).l = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.isEmpty.<anonymous>' call
    return this.xie_1.l();
  };
  protoOf(ThreadSafeMap).q = function () {
    return this.xie_1.q();
  };
  protoOf(ThreadSafeMap).a3 = function () {
    return this.xie_1.a3();
  };
  protoOf(ThreadSafeMap).b3 = function () {
    return this.xie_1.b3();
  };
  protoOf(ThreadSafeMap).a4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    this.xie_1.a4();
  };
  protoOf(ThreadSafeMap).a5 = function (key, value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.put.<anonymous>' call
    return this.xie_1.a5(key, value);
  };
  protoOf(ThreadSafeMap).bf = function (from) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    this.xie_1.bf(from);
  };
  protoOf(ThreadSafeMap).ye = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yie_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.remove.<anonymous>' call
    return this.xie_1.ye(key);
  };
  function ThreadSafeSet_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    ThreadSafeSet.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeSet_init_$Create$() {
    return ThreadSafeSet_init_$Init$(objectCreate(protoOf(ThreadSafeSet)));
  }
  function ThreadSafeSet(delegate) {
    this.zif_1 = delegate;
    this.aig_1 = new Object();
    this.big_1 = 8;
  }
  protoOf(ThreadSafeSet).g = function () {
    return this.zif_1.g();
  };
  protoOf(ThreadSafeSet).e1 = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.contains.<anonymous>' call
    return this.zif_1.n(element);
  };
  protoOf(ThreadSafeSet).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).m4 = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.containsAll.<anonymous>' call
    return this.zif_1.o1(elements);
  };
  protoOf(ThreadSafeSet).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(ThreadSafeSet).l = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.isEmpty.<anonymous>' call
    return this.zif_1.l();
  };
  protoOf(ThreadSafeSet).d = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.iterator.<anonymous>' call
    return this.zif_1.d();
  };
  protoOf(ThreadSafeSet).g23 = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.add.<anonymous>' call
    return this.zif_1.a(element);
  };
  protoOf(ThreadSafeSet).a = function (element) {
    return this.g23((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).a2l = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.addAll.<anonymous>' call
    return this.zif_1.k(elements);
  };
  protoOf(ThreadSafeSet).k = function (elements) {
    return this.a2l(elements);
  };
  protoOf(ThreadSafeSet).a4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    this.zif_1.a4();
    return Unit_getInstance();
  };
  protoOf(ThreadSafeSet).k2l = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.aig_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.remove.<anonymous>' call
    return this.zif_1.y3(element);
  };
  protoOf(ThreadSafeSet).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function get_configurationChecker() {
    _init_properties_ConfigurationChecker_kt__y5hypr();
    return configurationChecker;
  }
  var configurationChecker;
  function ConfigurationChecker() {
  }
  protoOf(ConfigurationChecker).nie = function () {
    return false;
  };
  function getConfigurationChecker$composable($composer, $changed) {
    _init_properties_ConfigurationChecker_kt__y5hypr();
    var $composer_0 = $composer;
    $composer_0.m1r(1614282158);
    if (isTraceInProgress()) {
      traceEventStart(1614282158, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.getConfigurationChecker$composable (ConfigurationChecker.kt:9)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.getConfigurationChecker$composable.<anonymous>' call
      var value = get_configurationChecker();
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  var properties_initialized_ConfigurationChecker_kt_7ida0v;
  function _init_properties_ConfigurationChecker_kt__y5hypr() {
    if (!properties_initialized_ConfigurationChecker_kt_7ida0v) {
      properties_initialized_ConfigurationChecker_kt_7ida0v = true;
      configurationChecker = new ConfigurationChecker();
    }
  }
  function DefaultNavigatorScreenLifecycleProvider() {
  }
  protoOf(DefaultNavigatorScreenLifecycleProvider).pie = function (screen) {
    return emptyList();
  };
  function get_multiplatformName(_this__u8e3s4) {
    return _this__u8e3s4.mh();
  }
  function Screen() {
  }
  function randomUuid() {
    return uuid4().toString();
  }
  //region block: post-declaration
  protoOf(DefaultScreenLifecycleOwner).qie = ProvideBeforeScreenContent$composable;
  protoOf(DefaultScreenLifecycleOwner).rie = onDispose;
  protoOf(StateScreenModel).dif = onDispose_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DisposableEffectIgnoringConfiguration$composable;
  _.$_$.b = MultipleProvideBeforeScreenContent$composable;
  _.$_$.c = getNavigatorScreenLifecycleProvider$composable;
  _.$_$.d = rememberScreenLifecycleOwner$composable;
  _.$_$.e = onDispose_0;
  _.$_$.f = StateScreenModel;
  _.$_$.g = get_coroutineScope;
  _.$_$.h = get_multiplatformName;
  _.$_$.i = Screen;
  _.$_$.j = get_uniqueScreenKey;
  _.$_$.k = toMutableStateStack;
  _.$_$.l = StackEvent_Pop_getInstance;
  _.$_$.m = StackEvent_Replace_getInstance;
  _.$_$.n = ThreadSafeMap_init_$Create$;
  _.$_$.o = ThreadSafeSet_init_$Create$;
  _.$_$.p = ScreenLifecycleStore_getInstance;
  _.$_$.q = ScreenModelStore_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-core.js.map
