(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './voyager-voyager-core.js', './compose-multiplatform-core-runtime-saveable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./voyager-voyager-core.js'), require('./compose-multiplatform-core-runtime-saveable.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['voyager-voyager-core'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'voyager-voyager-core' was not found. Please, check whether 'voyager-voyager-core' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'voyager-voyager-navigator'.");
    }
    root['voyager-voyager-navigator'] = factory(typeof this['voyager-voyager-navigator'] === 'undefined' ? {} : this['voyager-voyager-navigator'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['voyager-voyager-core'], this['compose-multiplatform-core-runtime-saveable']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_voyager_voyager_core, kotlin_org_jetbrains_compose_runtime_runtime_saveable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var startsWith = kotlin_kotlin.$_$.rh;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var VOID = kotlin_kotlin.$_$.il;
  var toMutableStateStack = kotlin_voyager_voyager_core.$_$.k;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var ThreadSafeSet_init_$Create$ = kotlin_voyager_voyager_core.$_$.o;
  var ThreadSafeMap_init_$Create$ = kotlin_voyager_voyager_core.$_$.n;
  var protoOf = kotlin_kotlin.$_$.xd;
  var ScreenModelStore_getInstance = kotlin_voyager_voyager_core.$_$.q;
  var ScreenLifecycleStore_getInstance = kotlin_voyager_voyager_core.$_$.p;
  var asSequence = kotlin_kotlin.$_$.z6;
  var filter = kotlin_kotlin.$_$.vf;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var rememberScreenLifecycleOwner$composable = kotlin_voyager_voyager_core.$_$.d;
  var getNavigatorScreenLifecycleProvider$composable = kotlin_voyager_voyager_core.$_$.c;
  var listOf = kotlin_kotlin.$_$.k9;
  var plus = kotlin_kotlin.$_$.v9;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var MultipleProvideBeforeScreenContent$composable = kotlin_voyager_voyager_core.$_$.b;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toString = kotlin_kotlin.$_$.ii;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var toString_0 = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var listSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var DisposableEffectIgnoringConfiguration$composable = kotlin_voyager_voyager_core.$_$.a;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var StackEvent_Pop_getInstance = kotlin_voyager_voyager_core.$_$.l;
  var StackEvent_Replace_getInstance = kotlin_voyager_voyager_core.$_$.m;
  var setOf = kotlin_kotlin.$_$.fa;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.e;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Navigator, 'Navigator', classMeta);
  setMetadataFor(NavigatorDisposeBehavior, 'NavigatorDisposeBehavior', classMeta);
  setMetadataFor(ComposableSingletons$NavigatorKt, 'ComposableSingletons$NavigatorKt', objectMeta);
  setMetadataFor(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0, 'sam$cafe_adriel_voyager_navigator_NavigatorSaver$0', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(NavigatorLifecycleStore, 'NavigatorLifecycleStore', objectMeta);
  //endregion
  function get_LocalNavigator() {
    _init_properties_Navigator_kt__ww6let();
    return LocalNavigator;
  }
  var LocalNavigator;
  function get_MaxSupportedRadix() {
    _init_properties_Navigator_kt__ww6let();
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function saveableState$composable$provideSaveableState(stateKey, this$0, suffixKey, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(645671963);
    if (isTraceInProgress()) {
      traceEventStart(645671963, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.provideSaveableState (Navigator.kt:142)');
    }
    var providedStateKey = stateKey + ':' + suffixKey;
    // Inline function 'kotlin.collections.plusAssign' call
    this$0.kig_1.a(providedStateKey);
    this$0.eig_1.s4j(providedStateKey, content, $composer_0, 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function Navigator$lastItem$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.sif();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Navigator has no screen');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    };
  }
  function Navigator$last$delegate$lambda(this$0) {
    return function () {
      return this$0.oig();
    };
  }
  function Navigator$dispose$lambda($screen) {
    return function (it) {
      return startsWith(it, $screen.r());
    };
  }
  function Navigator$saveableState$composable$lambda($stateKey, this$0) {
    return function (suffix, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t(suffix) ? 4 : 2);
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
          traceEventStart(-1585690675, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:156)');
        }
        saveableState$composable$provideSaveableState($stateKey, this$0, suffix, content, $composer_0, 14 & $dirty | 112 & $dirty);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.a33(p0, p1, p2, p3);
    };
  }
  function Navigator$saveableState$composable$lambda_0(this$0, $stateKey, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-720851089, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:158)');
        }
        this$0.eig_1.s4j($stateKey, $content, $composer_0, 112 & $$dirty >> 3);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Navigator$saveableState$composable$lambda_1($tmp0_rcvr, $key, $screen, $content, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.pig($key, $screen._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Navigator(screens, key, stateHolder, disposeBehavior, parent) {
    parent = parent === VOID ? null : parent;
    this.dig_1 = key;
    this.eig_1 = stateHolder;
    this.fig_1 = disposeBehavior;
    this.gig_1 = parent;
    this.hig_1 = toMutableStateStack(screens, 1);
    var tmp = this;
    var tmp0_safe_receiver = this.gig_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iig_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + 1 | 0;
    tmp.iig_1 = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var tmp_0 = this;
    tmp_0.jig_1 = derivedStateOf(Navigator$lastItem$delegate$lambda(this));
    this.kig_1 = ThreadSafeSet_init_$Create$();
    this.lig_1 = ThreadSafeMap_init_$Create$();
    var tmp_1 = this;
    tmp_1.mig_1 = derivedStateOf(Navigator$last$delegate$lambda(this));
    this.nig_1 = 8;
  }
  protoOf(Navigator).vif = function () {
    return this.hig_1.vif();
  };
  protoOf(Navigator).uif = function () {
    return this.hig_1.uif();
  };
  protoOf(Navigator).tif = function () {
    return this.hig_1.tif();
  };
  protoOf(Navigator).sif = function () {
    return this.hig_1.sif();
  };
  protoOf(Navigator).yif = function () {
    this.hig_1.yif();
  };
  protoOf(Navigator).f20 = function () {
    return this.hig_1.f20();
  };
  protoOf(Navigator).qig = function (item) {
    this.hig_1.wif(item);
  };
  protoOf(Navigator).rig = function (item) {
    this.hig_1.xif(item);
  };
  protoOf(Navigator).oig = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    lastItem$factory();
    return this.jig_1.s();
  };
  protoOf(Navigator).sig = function (screen) {
    ScreenModelStore_getInstance().wie(screen);
    ScreenLifecycleStore_getInstance().wie(screen);
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence(this.kig_1);
    var tmp0_iterator = filter(tmp, Navigator$dispose$lambda(screen)).d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.dispose.<anonymous>' call
      this.eig_1.t4j(element);
      // Inline function 'kotlin.collections.minusAssign' call
      this.kig_1.y3(element);
    }
  };
  protoOf(Navigator).pig = function (key, screen, content, $composer, $changed, $default) {
    var screen_0 = {_v: screen};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(742290439);
    sourceInformation($composer_0, 'C(saveableState$composable)P(1,2)');
    var $dirty = $changed;
    if (!(($default & 2) === 0)) {
      screen_0._v = this.oig();
      $dirty = $dirty & -113;
    }
    if (isTraceInProgress()) {
      traceEventStart(742290439, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable (Navigator.kt:137)');
    }
    var stateKey = screen_0._v.r() + ':' + key;
    // Inline function 'kotlin.collections.plusAssign' call
    this.kig_1.a(stateKey);
    var lifecycleOwner = rememberScreenLifecycleOwner$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    var navigatorScreenLifecycleOwners = getNavigatorScreenLifecycleProvider$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(lifecycleOwner) | $composer_1.y1t(navigatorScreenLifecycleOwners));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
      var value = plus(listOf(lifecycleOwner), navigatorScreenLifecycleOwners);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var composed = tmp0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -1585690675, true, Navigator$saveableState$composable$lambda(stateKey, this));
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
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
      $composer_2.x1t(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = tmp0_let_0;
    }
    var tmp_3 = tmp_2;
    var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    $composer_2.o1r();
    var tmp_4 = tmp0_0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_5 = $composer_0;
    var dispatchReceiver_0 = composableLambda(tmp_5, -720851089, true, Navigator$saveableState$composable$lambda_0(this, stateKey, content, $dirty));
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
    var tmp_6;
    if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
      $composer_3.x1t(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = tmp0_let_1;
    }
    var tmp_7 = tmp_6;
    var tmp0_1 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
    $composer_3.o1r();
    MultipleProvideBeforeScreenContent$composable(composed, tmp_4, tmp0_1, $composer_0, 432);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(Navigator$saveableState$composable$lambda_1(this, key, screen_0, content, $changed, $default));
    }
  };
  function NavigatorDisposeBehavior(disposeNestedNavigators, disposeSteps) {
    disposeNestedNavigators = disposeNestedNavigators === VOID ? true : disposeNestedNavigators;
    disposeSteps = disposeSteps === VOID ? true : disposeSteps;
    this.tig_1 = disposeNestedNavigators;
    this.uig_1 = disposeSteps;
    this.vig_1 = 0;
  }
  protoOf(NavigatorDisposeBehavior).toString = function () {
    return 'NavigatorDisposeBehavior(disposeNestedNavigators=' + this.tig_1 + ', disposeSteps=' + this.uig_1 + ')';
  };
  protoOf(NavigatorDisposeBehavior).hashCode = function () {
    var result = this.tig_1 | 0;
    result = imul(result, 31) + (this.uig_1 | 0) | 0;
    return result;
  };
  protoOf(NavigatorDisposeBehavior).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigatorDisposeBehavior))
      return false;
    var tmp0_other_with_cast = other instanceof NavigatorDisposeBehavior ? other : THROW_CCE();
    if (!(this.tig_1 === tmp0_other_with_cast.tig_1))
      return false;
    if (!(this.uig_1 === tmp0_other_with_cast.uig_1))
      return false;
    return true;
  };
  function Navigator$composable(screen, disposeBehavior, onBackPressed, key, content, $composer, $changed, $default) {
    _init_properties_Navigator_kt__ww6let();
    var disposeBehavior_0 = {_v: disposeBehavior};
    var onBackPressed_0 = {_v: onBackPressed};
    var key_0 = {_v: key};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-774785591);
    sourceInformation($composer_0, 'C(Navigator$composable)P(4,1,3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(screen) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.y1t(disposeBehavior_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.d1u(onBackPressed_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(key_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          disposeBehavior_0._v = new NavigatorDisposeBehavior();
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
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
            // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
            var value = Navigator$composable$lambda;
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          onBackPressed_0._v = tmp0;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          key_0._v = compositionUniqueId$composable($composer_0, 0);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$NavigatorKt_getInstance().wig_1;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-774785591, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator$composable (Navigator.kt:59)');
      }
      Navigator$composable_0(listOf(screen), disposeBehavior_0._v, onBackPressed_0._v, key_0._v, content_0._v, $composer_0, 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty, 0);
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
      tmp0_safe_receiver.z28(Navigator$composable$lambda_0(screen, disposeBehavior_0, onBackPressed_0, key_0, content_0, $changed, $default));
    }
  }
  function $get_currentOrThrow$$composable_rbkviq(_this__u8e3s4, $composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0.m1r(1230333919);
    sourceInformation($composer_0, 'C($get-currentOrThrow$$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1230333919, $changed, -1, 'cafe.adriel.voyager.navigator.$get-currentOrThrow$$composable (Navigator.kt:40)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      throw IllegalStateException_init_$Create$('CompositionLocal is null');
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function compositionUniqueId$composable($composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0.m1r(1925977400);
    sourceInformation($composer_0, 'C(compositionUniqueId$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1925977400, $changed, -1, 'cafe.adriel.voyager.navigator.compositionUniqueId$composable (Navigator.kt:198)');
    }
    var tmp0 = toString($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), get_MaxSupportedRadix());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavigatorKt$lambda_1$lambda_w32gh9(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2123251383, $changed, -1, 'cafe.adriel.voyager.navigator.ComposableSingletons$NavigatorKt.lambda-1.<anonymous> (Navigator.kt:58)');
    }
    CurrentScreen$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavigatorKt$lambda_2$lambda_a4f4fo(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1321178729, $changed, -1, 'cafe.adriel.voyager.navigator.ComposableSingletons$NavigatorKt.lambda-2.<anonymous> (Navigator.kt:75)');
    }
    CurrentScreen$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavigatorKt() {
    ComposableSingletons$NavigatorKt_instance = this;
    var tmp = this;
    tmp.wig_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-2123251383, false, ComposableSingletons$NavigatorKt$lambda_1$lambda_w32gh9));
    var tmp_0 = this;
    tmp_0.xig_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1321178729, false, ComposableSingletons$NavigatorKt$lambda_2$lambda_a4f4fo));
  }
  var ComposableSingletons$NavigatorKt_instance;
  function ComposableSingletons$NavigatorKt_getInstance() {
    if (ComposableSingletons$NavigatorKt_instance == null)
      new ComposableSingletons$NavigatorKt();
    return ComposableSingletons$NavigatorKt_instance;
  }
  function Navigator$composable_0(screens, disposeBehavior, onBackPressed, key, content, $composer, $changed, $default) {
    _init_properties_Navigator_kt__ww6let();
    var disposeBehavior_0 = {_v: disposeBehavior};
    var onBackPressed_0 = {_v: onBackPressed};
    var key_0 = {_v: key};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-725301904);
    sourceInformation($composer_0, 'C(Navigator$composable)P(4,1,3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(screens) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.y1t(disposeBehavior_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.d1u(onBackPressed_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(key_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          disposeBehavior_0._v = new NavigatorDisposeBehavior();
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
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
            // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
            var value = Navigator$composable$lambda_1;
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          onBackPressed_0._v = tmp0;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          key_0._v = compositionUniqueId$composable($composer_0, 0);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$NavigatorKt_getInstance().xig_1;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-725301904, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator$composable (Navigator.kt:76)');
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!screens.l()) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
        var message = 'Navigator must have at least one screen';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp2_isNotEmpty = key_0._v;
      // Inline function 'kotlin.contracts.contract' call
      if (!(charSequenceLength(tmp2_isNotEmpty) > 0)) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
        var message_0 = "Navigator key can't be empty";
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
      var tmp_1 = [get_LocalNavigatorStateHolder().v28(rememberSaveableStateHolder$composable($composer_0, 0))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1982643221, true, Navigator$composable$lambda_2(screens, key_0, disposeBehavior_0, $dirty, onBackPressed_0, content_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_2.x1t(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_2.o1r();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.z28(Navigator$composable$lambda_3(screens, disposeBehavior_0, onBackPressed_0, key_0, content_0, $changed, $default));
    }
  }
  function CurrentScreen$composable($composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-368870729);
    sourceInformation($composer_0, 'C(CurrentScreen$composable)');
    if (!($changed === 0) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-368870729, $changed, -1, 'cafe.adriel.voyager.navigator.CurrentScreen$composable (Navigator.kt:43)');
      }
      var navigator = $get_currentOrThrow$$composable_rbkviq(get_LocalNavigator(), $composer_0, 6);
      var currentScreen = navigator.oig();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 279379675, true, CurrentScreen$composable$lambda(currentScreen));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
        // Inline function 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      navigator.pig('currentScreen', null, tmp0, $composer_0, 4486, 2);
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
      tmp0_safe_receiver.z28(CurrentScreen$composable$lambda_0($changed));
    }
  }
  function LocalNavigator$lambda() {
    _init_properties_Navigator_kt__ww6let();
    return null;
  }
  function Navigator$composable$lambda(it) {
    _init_properties_Navigator_kt__ww6let();
    return true;
  }
  function Navigator$composable$lambda_0($screen, $disposeBehavior, $onBackPressed, $key, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Navigator$composable($screen, $disposeBehavior._v, $onBackPressed._v, $key._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Navigator$composable$lambda_1(it) {
    _init_properties_Navigator_kt__ww6let();
    return true;
  }
  function Navigator$composable$lambda$lambda($disposeBehavior, $navigator, $onBackPressed, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-184665941, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous> (Navigator.kt:92)');
        }
        $composer_0.m1r(1081875457);
        if ($disposeBehavior._v.uig_1) {
          StepDisposableEffect$composable($navigator, $composer_0, 8);
        }
        $composer_0.o1r();
        NavigatorBackHandler$composable($navigator, $onBackPressed._v, $composer_0, 8 | 112 & $$dirty >> 3);
        $content._v($navigator, $composer_0, 8 | 112 & $$dirty >> 9);
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
  function Navigator$composable$lambda_2($screens, $key, $disposeBehavior, $$dirty, $onBackPressed, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1982643221, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous> (Navigator.kt:83)');
        }
        var tmp_0 = $key._v;
        var tmp_1 = $disposeBehavior._v;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalNavigator();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var navigator = rememberNavigator$composable($screens, tmp_0, tmp_1, tmp$ret$0, $composer_0, 4096 | 14 & $$dirty | 112 & $$dirty >> 6 | 896 & $$dirty << 3);
        $composer_0.m1r(-1587599);
        var tmp0_safe_receiver = navigator.gig_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fig_1;
        if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.tig_1) === false)) {
          NavigatorDisposableEffect$composable(navigator, $composer_0, 8);
        }
        $composer_0.o1r();
        var tmp_2 = [get_LocalNavigator().u28(navigator)];
        var tmp$ret$7;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -184665941, true, Navigator$composable$lambda$lambda($disposeBehavior, navigator, $onBackPressed, $$dirty, $content));
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_2 = tmp0_remember$composable;
        $composer_2.m1r(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_2;
        var tmp1_cache = $composer_2.y1t(dispatchReceiver);
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
          var tmp$ret$1;
          // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          var value = tmp$ret$1;
          tmp0_cache.x1t(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;
        var tmp_5 = tmp$ret$3;
        tmp$ret$4 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$4;
        $composer_2.o1r();
        tmp$ret$5 = tmp0_0;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        CompositionLocalProvider$composable(tmp_2, tmp$ret$7, $composer_0, 48);
        ChildrenNavigationDisposableEffect$composable(navigator, $composer_0, 8);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Navigator$composable$lambda_3($screens, $disposeBehavior, $onBackPressed, $key, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Navigator$composable_0($screens, $disposeBehavior._v, $onBackPressed._v, $key._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CurrentScreen$composable$lambda($currentScreen) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(279379675, $changed, -1, 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous> (Navigator.kt:48)');
        }
        $currentScreen.cig($composer_0, 0);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function CurrentScreen$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      CurrentScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function lastItem$factory() {
    return getPropertyCallableRef('lastItem', 1, KProperty1, function (receiver) {
      return receiver.oig();
    }, null);
  }
  var properties_initialized_Navigator_kt_hi8lg9;
  function _init_properties_Navigator_kt__ww6let() {
    if (!properties_initialized_Navigator_kt_hi8lg9) {
      properties_initialized_Navigator_kt_hi8lg9 = true;
      LocalNavigator = staticCompositionLocalOf(LocalNavigator$lambda);
      MaxSupportedRadix = 36;
    }
  }
  function get_LocalNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return LocalNavigatorSaver;
  }
  var LocalNavigatorSaver;
  function defaultNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda;
    return new sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(tmp);
  }
  function sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(function_0) {
    this.yig_1 = function_0;
  }
  protoOf(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0).zig = function (initialScreens, key, stateHolder, disposeBehavior, parent) {
    return this.yig_1(initialScreens, key, stateHolder, disposeBehavior, parent);
  };
  function LocalNavigatorSaver$lambda() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return defaultNavigatorSaver();
  }
  function defaultNavigatorSaver$lambda(_anonymous_parameter_0__qggqh8, key, stateHolder, disposeBehavior, parent) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda$lambda;
    return listSaver(tmp, defaultNavigatorSaver$lambda$lambda_0(key, stateHolder, disposeBehavior, parent));
  }
  function defaultNavigatorSaver$lambda$lambda($this$listSaver, navigator) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return navigator.uif();
  }
  function defaultNavigatorSaver$lambda$lambda_0($key, $stateHolder, $disposeBehavior, $parent) {
    return function (items) {
      return new Navigator(items, $key, $stateHolder, $disposeBehavior, $parent);
    };
  }
  var properties_initialized_NavigatorSaver_kt_fldups;
  function _init_properties_NavigatorSaver_kt__tlqrj2() {
    if (!properties_initialized_NavigatorSaver_kt_fldups) {
      properties_initialized_NavigatorSaver_kt_fldups = true;
      LocalNavigatorSaver = staticCompositionLocalOf(LocalNavigatorSaver$lambda);
    }
  }
  function NavigatorBackHandler$composable(navigator, onBackPressed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1175033175);
    if (isTraceInProgress()) {
      traceEventStart(-1175033175, $changed, -1, 'cafe.adriel.voyager.navigator.internal.NavigatorBackHandler$composable (NavigatorBackHandler.kt:13)');
    }
    if (!(onBackPressed == null)) {
      var tmp;
      if (navigator.vif()) {
        tmp = true;
      } else {
        var tmp0_safe_receiver = navigator.gig_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vif();
        tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      }
      var tmp_0 = tmp;
      BackHandler$composable(tmp_0, NavigatorBackHandler$composable$lambda(onBackPressed, navigator), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver_0 = $composer_0.i1t();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.z28(NavigatorBackHandler$composable$lambda_0(navigator, onBackPressed, $changed));
    }
  }
  function NavigatorBackHandler$composable$lambda($onBackPressed, $navigator) {
    return function () {
      var tmp;
      if ($onBackPressed($navigator.oig())) {
        var tmp_0;
        if (!$navigator.f20()) {
          var tmp0_safe_receiver = $navigator.gig_1;
          if (tmp0_safe_receiver == null)
            null;
          else
            tmp0_safe_receiver.f20();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function NavigatorBackHandler$composable$lambda_0($navigator, $onBackPressed, $$changed) {
    return function ($composer, $force) {
      NavigatorBackHandler$composable($navigator, $onBackPressed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_disposableEvents() {
    _init_properties_NavigatorDisposable_kt__vh123p();
    return disposableEvents;
  }
  var disposableEvents;
  function NavigatorDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(467747341);
    if (isTraceInProgress()) {
      traceEventStart(467747341, $changed, -1, 'cafe.adriel.voyager.navigator.internal.NavigatorDisposableEffect$composable (NavigatorDisposable.kt:15)');
    }
    DisposableEffectIgnoringConfiguration$composable(navigator, NavigatorDisposableEffect$composable$lambda(navigator), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(NavigatorDisposableEffect$composable$lambda_0(navigator, $changed));
    }
  }
  function StepDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(657971410);
    if (isTraceInProgress()) {
      traceEventStart(657971410, $changed, -1, 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable (NavigatorDisposable.kt:26)');
    }
    var currentScreens = navigator.uif();
    DisposableEffect$composable(currentScreens, StepDisposableEffect$composable$lambda(navigator, currentScreens), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(StepDisposableEffect$composable$lambda_0(navigator, $changed));
    }
  }
  function ChildrenNavigationDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1113565941);
    if (isTraceInProgress()) {
      traceEventStart(-1113565941, $changed, -1, 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable (NavigatorDisposable.kt:45)');
    }
    DisposableEffectIgnoringConfiguration$composable(navigator, ChildrenNavigationDisposableEffect$composable$lambda(navigator), $composer_0, 8);
    DisposableEffectIgnoringConfiguration$composable(navigator, ChildrenNavigationDisposableEffect$composable$lambda_0(navigator), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(ChildrenNavigationDisposableEffect$composable$lambda_1(navigator, $changed));
    }
  }
  function disposeNavigator(navigator) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var tmp0_iterator = navigator.uif().d();
    while (tmp0_iterator.e()) {
      var screen = tmp0_iterator.f();
      navigator.sig(screen);
    }
    NavigatorLifecycleStore_getInstance().cih(navigator);
    navigator.yif();
  }
  function _no_name_provided__qut3iv($navigator) {
    this.dih_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv).gp = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.NavigatorDisposableEffect$composable.<anonymous>.<anonymous>' call
    disposeNavigator(this.dih_1);
  };
  function NavigatorDisposableEffect$composable$lambda($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($navigator);
      return tmp$ret$0;
    };
  }
  function NavigatorDisposableEffect$composable$lambda_0($navigator, $$changed) {
    return function ($composer, $force) {
      NavigatorDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($navigator, $currentScreens) {
    this.eih_1 = $navigator;
    this.fih_1 = $currentScreens;
  }
  protoOf(_no_name_provided__qut3iv_0).gp = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.eih_1.uif();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = item.r();
      tmp0_mapTo.a(tmp$ret$0);
    }
    var newScreenKeys = tmp0_mapTo;
    if (get_disposableEvents().n(this.eih_1.tif())) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var tmp0_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this.fih_1.d();
      while (tmp0_iterator_0.e()) {
        var element = tmp0_iterator_0.f();
        // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        if (!newScreenKeys.n(element.r())) {
          tmp0_filterTo.a(element);
        }
      }
      var tmp0_iterator_1 = tmp0_filterTo.d();
      while (tmp0_iterator_1.e()) {
        var element_0 = tmp0_iterator_1.f();
        // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        this.eih_1.sig(element_0);
      }
      this.eih_1.yif();
    }
  };
  function StepDisposableEffect$composable$lambda($navigator, $currentScreens) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($navigator, $currentScreens);
      return tmp$ret$0;
    };
  }
  function StepDisposableEffect$composable$lambda_0($navigator, $$changed) {
    return function ($composer, $force) {
      StepDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function invoke$_anonymous_$disposeChildren_7jkhk5(navigator) {
    disposeNavigator(navigator);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = navigator.lig_1.b3().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable$lambda.invoke.<anonymous>$disposeChildren.<anonymous>' call
      invoke$_anonymous_$disposeChildren_7jkhk5(element);
    }
    navigator.lig_1.a4();
  }
  function _no_name_provided__qut3iv_1($navigator) {
    this.gih_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv_1).gp = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>' call
    if (this.gih_1.gig_1 == null ? true : this.gih_1.fig_1.tig_1) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.gih_1.lig_1.b3().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        invoke$_anonymous_$disposeChildren_7jkhk5(element);
      }
    }
  };
  function ChildrenNavigationDisposableEffect$composable$lambda($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1($navigator);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_2($navigator) {
    this.hih_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv_2).gp = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.hih_1.gig_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fig_1;
    if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.tig_1) === false)) {
      var tmp2_safe_receiver = this.hih_1.gig_1;
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.lig_1;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver.ye(this.hih_1.dig_1);
    }
  };
  function ChildrenNavigationDisposableEffect$composable$lambda_0($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      var tmp0_safe_receiver = $navigator.gig_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lig_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.a5($navigator.dig_1, $navigator);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($navigator);
      return tmp$ret$0;
    };
  }
  function ChildrenNavigationDisposableEffect$composable$lambda_1($navigator, $$changed) {
    return function ($composer, $force) {
      ChildrenNavigationDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_NavigatorDisposable_kt_m7icmf;
  function _init_properties_NavigatorDisposable_kt__vh123p() {
    if (!properties_initialized_NavigatorDisposable_kt_m7icmf) {
      properties_initialized_NavigatorDisposable_kt_m7icmf = true;
      disposableEvents = setOf([StackEvent_Pop_getInstance(), StackEvent_Replace_getInstance()]);
    }
  }
  function get_LocalNavigatorStateHolder() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    return LocalNavigatorStateHolder;
  }
  var LocalNavigatorStateHolder;
  function rememberNavigator$composable(screens, key, disposeBehavior, parent, $composer, $changed) {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    var $composer_0 = $composer;
    $composer_0.m1r(-1890251691);
    if (isTraceInProgress()) {
      traceEventStart(-1890251691, $changed, -1, 'cafe.adriel.voyager.navigator.internal.rememberNavigator$composable (NavigatorSaverInternal.kt:22)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalNavigatorStateHolder();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var stateHolder = tmp0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp2_$get_current$$composable_g4n2vl = get_LocalNavigatorSaver();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
    sourceInformationMarkerEnd($composer_2);
    var navigatorSaver = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.m1r(-1603429786);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = [navigatorSaver, stateHolder, parent, disposeBehavior];
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key_0 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_3.y1t(key_0));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = invalid;
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_3.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'cafe.adriel.voyager.navigator.internal.rememberNavigator$composable.<anonymous>' call
      var value = navigatorSaver.zig(screens, key, stateHolder, disposeBehavior, parent);
      $composer_3.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0_1 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_3.o1r();
    var saver = tmp0_1;
    var tmp0_2 = rememberSaveable$composable([], saver, key, rememberNavigator$composable$lambda(screens, key, stateHolder, disposeBehavior, parent), $composer_0, 8 | 896 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_2;
  }
  function LocalNavigatorStateHolder$lambda() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    throw IllegalStateException_init_$Create$('LocalNavigatorStateHolder not initialized');
  }
  function rememberNavigator$composable$lambda($screens, $key, $stateHolder, $disposeBehavior, $parent) {
    return function () {
      return new Navigator($screens, $key, $stateHolder, $disposeBehavior, $parent);
    };
  }
  var properties_initialized_NavigatorSaverInternal_kt_5u8j7n;
  function _init_properties_NavigatorSaverInternal_kt__hwzrut() {
    if (!properties_initialized_NavigatorSaverInternal_kt_5u8j7n) {
      properties_initialized_NavigatorSaverInternal_kt_5u8j7n = true;
      LocalNavigatorStateHolder = staticCompositionLocalOf(LocalNavigatorStateHolder$lambda);
    }
  }
  function NavigatorLifecycleStore() {
    NavigatorLifecycleStore_instance = this;
    this.aih_1 = ThreadSafeMap_init_$Create$();
    this.bih_1 = 0;
  }
  protoOf(NavigatorLifecycleStore).cih = function (navigator) {
    var tmp0_safe_receiver = this.aih_1.ye(navigator.dig_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp0_safe_receiver.q().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'cafe.adriel.voyager.navigator.lifecycle.NavigatorLifecycleStore.remove.<anonymous>' call
        element.s().iih(navigator);
      }
    }
  };
  var NavigatorLifecycleStore_instance;
  function NavigatorLifecycleStore_getInstance() {
    if (NavigatorLifecycleStore_instance == null)
      new NavigatorLifecycleStore();
    return NavigatorLifecycleStore_instance;
  }
  function BackHandler$composable(enabled, onBack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1772181261);
    if (!(($changed & 1) === 0) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1772181261, $changed, -1, 'cafe.adriel.voyager.navigator.internal.BackHandler$composable (Actuals.js.kt:5)');
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
      tmp0_safe_receiver.z28(BackHandler$composable$lambda(enabled, onBack, $changed));
    }
  }
  function BackHandler$composable$lambda($enabled, $onBack, $$changed) {
    return function ($composer, $force) {
      BackHandler$composable($enabled, $onBack, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = $get_currentOrThrow$$composable_rbkviq;
  _.$_$.b = get_LocalNavigator;
  _.$_$.c = Navigator$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-navigator.js.map
