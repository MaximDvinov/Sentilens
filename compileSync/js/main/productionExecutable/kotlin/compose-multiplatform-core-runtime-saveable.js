(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-runtime-saveable'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime-saveable'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-runtime-saveable'.");
    }
    root['compose-multiplatform-core-runtime-saveable'] = factory(typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime-saveable'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toString_0 = kotlin_kotlin.$_$.ii;
  var isInterface = kotlin_kotlin.$_$.id;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var isObject = kotlin_kotlin.$_$.kd;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var toString_1 = kotlin_kotlin.$_$.dl;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var toMutableMap = kotlin_kotlin.$_$.ya;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var Map = kotlin_kotlin.$_$.k6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var get_reuseKey = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var isBlank = kotlin_kotlin.$_$.yg;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.l;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var arrayListOf = kotlin_kotlin.$_$.v6;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RegistryHolder, 'RegistryHolder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(SaveableStateHolderImpl, 'SaveableStateHolderImpl', classMeta);
  setMetadataFor(SaveableStateRegistryImpl$registerProvider$3, VOID, classMeta);
  setMetadataFor(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', classMeta);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.m(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            var tmp0_require = $this$Saver.x4i(item);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_require) {
              var tmp$ret$0;
              // Inline function 'kotlin.require.<anonymous>' call
              tmp$ret$0 = 'Failed requirement.';
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$1 = !list.l();
      if (tmp$ret$1) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.m1r(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.m1r(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = key_0;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0)) {
      tmp = key_0;
    } else {
      tmp = toString_0($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.o1r();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = inputs.slice();
    var $composer_2 = $composer_0;
    $composer_2.m1r(-1603429786);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = tmp3_remember$composable.length;
    while (inductionVariable < last) {
      var key_1 = tmp3_remember$composable[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.y1t(key_1));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = invalid;
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp1_safe_receiver = registry == null ? null : registry.y4i(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp_2 = saver_0._v.z4i(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var value = restored == null ? init() : restored;
      $composer_2.x1t(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    var tmp_3 = tmp_1;
    var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    $composer_2.o1r();
    var value_0 = tmp0_0;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return value_0;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.x4i(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.i29() === neverEqualPolicy()) ? !(value.i29() === structuralEqualityPolicy()) : false) ? !(value.i29() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.s()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.a4j_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).x4i = function (value) {
    return this.a4j_1(value);
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.x4i(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $saverState.s();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      tmp$ret$0 = tmp0_with.b4j(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.s());
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.c4j_1 = $entry;
  }
  protoOf(_no_name_provided__qut3iv).gp = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.c4j_1.d4j();
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.e4j($finalKey, valueProvider);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(entry);
      return tmp$ret$0;
    };
  }
  function rememberSaveableStateHolder$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1658217662);
    sourceInformation($composer_0, 'C(rememberSaveableStateHolder$composable)*61@2439L41,59@2369L111,64@2554L7:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(-1658217662, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable (SaveableStateHolder.kt:58)');
    }
    // Inline function 'kotlin.apply' call
    var tmp = Companion_getInstance_0().f4j_1;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
      var value = rememberSaveableStateHolder$composable$lambda;
      $composer_1.x1t(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_1.o1r();
    var tmp1_apply = rememberSaveable$composable([], tmp, null, tmp0, $composer_0, 8, 4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
    var tmp_2 = tmp1_apply;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalSaveableStateRegistry();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_2);
    tmp_2.i4j_1 = tmp0_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp1_apply;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.i4j_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4i(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = toMutableMap($this.g4j_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.h4j_1.b3().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.n4j(map);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.l()) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp = null;
    } else {
      tmp = map;
    }
    return tmp;
  }
  function RegistryHolder($outer, key) {
    this.m4j_1 = $outer;
    this.j4j_1 = key;
    this.k4j_1 = true;
    var tmp = this;
    var tmp_0 = this.m4j_1.g4j_1.z2(this.j4j_1);
    tmp.l4j_1 = SaveableStateRegistry(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.m4j_1));
  }
  protoOf(RegistryHolder).n4j = function (map) {
    if (this.k4j_1) {
      var savedData = this.l4j_1.o4j();
      if (savedData.l()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp0_minusAssign = this.j4j_1;
        map.ye(tmp0_minusAssign);
      } else {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = this.j4j_1;
        map.a5(tmp1_set, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.f4j_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _no_name_provided__qut3iv_0($registryHolder, this$0, $key) {
    this.p4j_1 = $registryHolder;
    this.q4j_1 = this$0;
    this.r4j_1 = $key;
  }
  protoOf(_no_name_provided__qut3iv_0).gp = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.p4j_1.n4j(this.q4j_1.g4j_1);
    // Inline function 'kotlin.collections.minusAssign' call
    this.q4j_1.h4j_1.ye(this.r4j_1);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this$0.h4j_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).t2($key);
      tmp$ret$1 = tmp$ret$0;
      var tmp1_require = !tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp1_require) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$2 = 'Key ' + toString($key) + ' was used multiple times ';
        var message = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_this = this$0;
      var tmp2_minusAssign = tmp0_this.g4j_1;
      tmp2_minusAssign.ye($key);
      var tmp3_set = this$0.h4j_1;
      tmp3_set.a5($key, $registryHolder);
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$3 = new _no_name_provided__qut3iv_0($registryHolder, this$0, $key);
      return tmp$ret$3;
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.s4j($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.g4j_1 = savedStates;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.h4j_1 = LinkedHashMap_init_$Create$();
    this.i4j_1 = null;
  }
  protoOf(SaveableStateHolderImpl).t4j = function (key) {
    var registryHolder = this.h4j_1.z2(key);
    if (!(registryHolder == null)) {
      registryHolder.k4j_1 = false;
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.g4j_1.ye(key);
    }
  };
  protoOf(SaveableStateHolderImpl).s4j = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1898146948);
    sourceInformation($composer_0, 'C(SaveableStateProvider$composable)P(1)75@2967L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(1898146948, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable (SaveableStateHolder.kt:74)');
    }
    // Inline function 'androidx.compose.runtime.ReusableContent$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(1346827672);
    sourceInformation($composer_1, 'CC(ReusableContent$composable)P(1)145@5313L9:Composables.kt#9igjgp');
    $composer_1.t1t(get_reuseKey(), key);
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>' call
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -65727059, 'C76@3023L321,83@3357L150,87@3520L360:SaveableStateHolder.kt#r2ddri');
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_2;
    $composer_3.m1r(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_3.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_safe_receiver = this.i4j_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4i(key);
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs)) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var value = new RegistryHolder(this, key);
      $composer_3.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_3.o1r();
    var registryHolder = tmp0;
    CompositionLocalProvider$composable([get_LocalSaveableStateRegistry().u28(registryHolder.l4j_1)], content, $composer_2, 112 & $dirty);
    DisposableEffect$composable_0(Unit_getInstance(), SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this, key, registryHolder), $composer_2, 6);
    sourceInformationMarkerEnd($composer_2);
    $composer_1.u1t();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0(this, key, content, $changed));
    }
  };
  function rememberSaveableStateHolder$composable$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$3(this$0, $key, $valueProvider) {
    this.u4j_1 = this$0;
    this.v4j_1 = $key;
    this.w4j_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$3).d4j = function () {
    var list = this.u4j_1.z4j_1.ye(this.v4j_1);
    if (list == null)
      null;
    else
      list.y3(this.w4j_1);
    var tmp;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !list.l();
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.set' call
      this.u4j_1.z4j_1.a5(this.v4j_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.x4j_1 = canBeSaved;
    var tmp = this;
    var tmp1_elvis_lhs = restored == null ? null : toMutableMap(restored);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_0 = LinkedHashMap_init_$Create$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.y4j_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.z4j_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SaveableStateRegistryImpl).x4i = function (value) {
    return this.x4j_1(value);
  };
  protoOf(SaveableStateRegistryImpl).y4i = function (key) {
    var list = this.y4j_1.ye(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !list.l();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.g() > 1) {
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = this.y4j_1;
        var tmp1_set = list.v1(1, list.g());
        tmp0_set.a5(key, tmp1_set);
      }
      tmp = list.m(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).e4j = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(key)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.z4j_1;
    var value = tmp1_getOrPut.z2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      tmp1_getOrPut.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.a(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$3(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).o4j = function () {
    var map = toMutableMap(this.y4j_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.z4j_1.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.r();
      // Inline function 'kotlin.collections.component2' call
      var list = element.s();
      if (list.g() === 1) {
        var value = list.m(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.x4i(value)) {
            // Inline function 'kotlin.check.<anonymous>' call
            var message = 'Check failed.';
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var tmp1_set = arrayListOf([value]);
          map.a5(key, tmp1_set);
        }
      } else {
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.List' call
        var tmp2_List = list.g();
        // Inline function 'kotlin.collections.MutableList' call
        var list_0 = ArrayList_init_$Create$_1(tmp2_List);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < tmp2_List)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_0 = list.m(index)();
            if (!(value_0 == null)) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!this.x4i(value_0)) {
                // Inline function 'kotlin.check.<anonymous>' call
                var message_0 = 'Check failed.';
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            list_0.a(value_0);
          }
           while (inductionVariable < tmp2_List);
        map.a5(key, list_0);
      }
    }
    return map;
  };
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.a4k_1 = $save;
    this.b4k_1 = $restore;
  }
  protoOf(Saver$1).b4j = function (_this__u8e3s4, value) {
    return this.a4k_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).z4i = function (value) {
    return this.b4k_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry;
  _.$_$.c = Saver_0;
  _.$_$.d = listSaver;
  _.$_$.e = rememberSaveable$composable;
  _.$_$.f = rememberSaveableStateHolder$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime-saveable.js.map
