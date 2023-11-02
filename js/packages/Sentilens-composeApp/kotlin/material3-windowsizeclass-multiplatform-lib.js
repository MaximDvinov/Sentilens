(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    root['material3-windowsizeclass-multiplatform-lib'] = factory(typeof this['material3-windowsizeclass-multiplatform-lib'] === 'undefined' ? {} : this['material3-windowsizeclass-multiplatform-lib'], this['compose-multiplatform-core-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var setOf = kotlin_kotlin.$_$.fa;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var sortedDescending = kotlin_kotlin.$_$.ka;
  var last = kotlin_kotlin.$_$.g9;
  var Comparable = kotlin_kotlin.$_$.zi;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var isObject = kotlin_kotlin.$_$.kd;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var KMutableProperty0 = kotlin_kotlin.$_$.lf;
  var THROW_ISE = kotlin_kotlin.$_$.rj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(WindowSizeClass, 'WindowSizeClass', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WindowWidthSizeClass, 'WindowWidthSizeClass', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WindowHeightSizeClass, 'WindowHeightSizeClass', classMeta, VOID, [Comparable]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  //endregion
  function get_defaultDensity() {
    _init_properties_WindowSizeClass_kt__hs41th();
    return defaultDensity;
  }
  var defaultDensity;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).eic = function (size) {
    var windowWidthSizeClass = Companion_getInstance_1().jic(_DpSize___get_width__impl__o3d5gt(size));
    var windowHeightSizeClass = Companion_getInstance_2().oic(_DpSize___get_height__impl__5xueo2(size));
    return new WindowSizeClass(windowWidthSizeClass, windowHeightSizeClass);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function WindowSizeClass(widthSizeClass, heightSizeClass) {
    Companion_getInstance_0();
    this.pic_1 = widthSizeClass;
    this.qic_1 = heightSizeClass;
    this.ric_1 = 0;
  }
  protoOf(WindowSizeClass).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WindowSizeClass))
      THROW_CCE();
    if (!(this.pic_1 === other.pic_1))
      return false;
    if (!(this.qic_1 === other.qic_1))
      return false;
    return true;
  };
  protoOf(WindowSizeClass).hashCode = function () {
    var result = WindowWidthSizeClass__hashCode_impl_pfvlw1(this.pic_1);
    result = imul(31, result) + WindowHeightSizeClass__hashCode_impl_eivxke(this.qic_1) | 0;
    return result;
  };
  protoOf(WindowSizeClass).toString = function () {
    return 'WindowSizeClass(' + new WindowWidthSizeClass(this.pic_1) + ', ' + new WindowHeightSizeClass(this.qic_1) + ')';
  };
  function breakpoint(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 === $this.hic_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(840);
    } else if (_this__u8e3s4 === $this.gic_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(600);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    }
    return tmp;
  }
  function _WindowWidthSizeClass___init__impl__bavl40(value) {
    return value;
  }
  function WindowWidthSizeClass__compareTo_impl_7m3wk2($this, other) {
    return Dp__compareTo_impl_tlg3dl(breakpoint($this, Companion_getInstance_1()), breakpoint(other, Companion_getInstance_1()));
  }
  function WindowWidthSizeClass__compareTo_impl_7m3wk2_0($this, other) {
    var tmp = $this.sic_1;
    return WindowWidthSizeClass__compareTo_impl_7m3wk2(tmp, other instanceof WindowWidthSizeClass ? other.sic_1 : THROW_CCE());
  }
  function WindowWidthSizeClass__toString_impl_nu2ja8($this) {
    return 'WindowWidthSizeClass.' + ($this === Companion_getInstance_1().fic_1 ? 'Compact' : $this === Companion_getInstance_1().gic_1 ? 'Medium' : $this === Companion_getInstance_1().hic_1 ? 'Expanded' : '');
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.fic_1 = _WindowWidthSizeClass___init__impl__bavl40(0);
    this.gic_1 = _WindowWidthSizeClass___init__impl__bavl40(1);
    this.hic_1 = _WindowWidthSizeClass___init__impl__bavl40(2);
    this.iic_1 = setOf([new WindowWidthSizeClass(this.fic_1), new WindowWidthSizeClass(this.gic_1), new WindowWidthSizeClass(this.hic_1)]);
  }
  protoOf(Companion_0).jic = function (width) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
    tmp$ret$1 = get_defaultDensity().s35(width);
    return this.tic(tmp$ret$1, get_defaultDensity(), this.iic_1);
  };
  protoOf(Companion_0).tic = function (width, density, supportedSizeClasses) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0)) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      var message = 'Width must not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!supportedSizeClasses.l()) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      var message_0 = 'Must support at least one size class';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sortedSizeClasses = sortedDescending(supportedSizeClasses);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedSizeClasses.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f().sic_1;
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>.<anonymous>' call
      if (width >= density.s35(breakpoint(element, Companion_getInstance_1()))) {
        return element;
      }
    }
    return last(sortedSizeClasses).sic_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WindowWidthSizeClass__hashCode_impl_pfvlw1($this) {
    return $this;
  }
  function WindowWidthSizeClass__equals_impl_cb88x9($this, other) {
    if (!(other instanceof WindowWidthSizeClass))
      return false;
    if (!($this === (other instanceof WindowWidthSizeClass ? other.sic_1 : THROW_CCE())))
      return false;
    return true;
  }
  function WindowWidthSizeClass(value) {
    Companion_getInstance_1();
    this.sic_1 = value;
  }
  protoOf(WindowWidthSizeClass).uic = function (other) {
    return WindowWidthSizeClass__compareTo_impl_7m3wk2(this.sic_1, other);
  };
  protoOf(WindowWidthSizeClass).la = function (other) {
    return WindowWidthSizeClass__compareTo_impl_7m3wk2_0(this, other);
  };
  protoOf(WindowWidthSizeClass).toString = function () {
    return WindowWidthSizeClass__toString_impl_nu2ja8(this.sic_1);
  };
  protoOf(WindowWidthSizeClass).hashCode = function () {
    return WindowWidthSizeClass__hashCode_impl_pfvlw1(this.sic_1);
  };
  protoOf(WindowWidthSizeClass).equals = function (other) {
    return WindowWidthSizeClass__equals_impl_cb88x9(this.sic_1, other);
  };
  function breakpoint_0(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 === $this.mic_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(900);
    } else if (_this__u8e3s4 === $this.lic_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(480);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    }
    return tmp;
  }
  function _WindowHeightSizeClass___init__impl__yocqd5(value) {
    return value;
  }
  function WindowHeightSizeClass__compareTo_impl_w07bv1($this, other) {
    return Dp__compareTo_impl_tlg3dl(breakpoint_0($this, Companion_getInstance_2()), breakpoint_0(other, Companion_getInstance_2()));
  }
  function WindowHeightSizeClass__compareTo_impl_w07bv1_0($this, other) {
    var tmp = $this.vic_1;
    return WindowHeightSizeClass__compareTo_impl_w07bv1(tmp, other instanceof WindowHeightSizeClass ? other.vic_1 : THROW_CCE());
  }
  function WindowHeightSizeClass__toString_impl_789z8h($this) {
    return 'WindowHeightSizeClass.' + ($this === Companion_getInstance_2().kic_1 ? 'Compact' : $this === Companion_getInstance_2().lic_1 ? 'Medium' : $this === Companion_getInstance_2().mic_1 ? 'Expanded' : '');
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.kic_1 = _WindowHeightSizeClass___init__impl__yocqd5(0);
    this.lic_1 = _WindowHeightSizeClass___init__impl__yocqd5(1);
    this.mic_1 = _WindowHeightSizeClass___init__impl__yocqd5(2);
    this.nic_1 = setOf([new WindowHeightSizeClass(this.kic_1), new WindowHeightSizeClass(this.lic_1), new WindowHeightSizeClass(this.mic_1)]);
  }
  protoOf(Companion_1).oic = function (height) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
    tmp$ret$1 = get_defaultDensity().s35(height);
    return this.wic(tmp$ret$1, get_defaultDensity(), this.nic_1);
  };
  protoOf(Companion_1).wic = function (height, density, supportedSizeClasses) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(height >= 0)) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      var message = 'Width must not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!supportedSizeClasses.l()) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      var message_0 = 'Must support at least one size class';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sortedSizeClasses = sortedDescending(supportedSizeClasses);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedSizeClasses.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f().vic_1;
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>.<anonymous>' call
      if (height >= density.s35(breakpoint_0(element, Companion_getInstance_2()))) {
        return element;
      }
    }
    return last(sortedSizeClasses).vic_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WindowHeightSizeClass__hashCode_impl_eivxke($this) {
    return $this;
  }
  function WindowHeightSizeClass__equals_impl_6ni5v2($this, other) {
    if (!(other instanceof WindowHeightSizeClass))
      return false;
    if (!($this === (other instanceof WindowHeightSizeClass ? other.vic_1 : THROW_CCE())))
      return false;
    return true;
  }
  function WindowHeightSizeClass(value) {
    Companion_getInstance_2();
    this.vic_1 = value;
  }
  protoOf(WindowHeightSizeClass).xic = function (other) {
    return WindowHeightSizeClass__compareTo_impl_w07bv1(this.vic_1, other);
  };
  protoOf(WindowHeightSizeClass).la = function (other) {
    return WindowHeightSizeClass__compareTo_impl_w07bv1_0(this, other);
  };
  protoOf(WindowHeightSizeClass).toString = function () {
    return WindowHeightSizeClass__toString_impl_789z8h(this.vic_1);
  };
  protoOf(WindowHeightSizeClass).hashCode = function () {
    return WindowHeightSizeClass__hashCode_impl_eivxke(this.vic_1);
  };
  protoOf(WindowHeightSizeClass).equals = function (other) {
    return WindowHeightSizeClass__equals_impl_6ni5v2(this.vic_1, other);
  };
  var properties_initialized_WindowSizeClass_kt_m3p4fr;
  function _init_properties_WindowSizeClass_kt__hs41th() {
    if (!properties_initialized_WindowSizeClass_kt_m3p4fr) {
      properties_initialized_WindowSizeClass_kt_m3p4fr = true;
      defaultDensity = Density(1.0, 1.0);
    }
  }
  function calculateWindowSizeClass$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(513519169);
    sourceInformation($composer_0, 'C(calculateWindowSizeClass$composable)');
    if (isTraceInProgress()) {
      traceEventStart(513519169, $changed, -1, 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable (WindowSizeClass.js.kt:20)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(547886695);
    sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>' call
      var value = mutableStateOf(Companion_getInstance_0().eic(getDpSize(window, density)));
      $composer_2.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_2.o1r();
    var windowSizeClass$delegate = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.m1r(-1124426577);
    sourceInformation($composer_3, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_3.y1t(windowSizeClass$delegate) | $composer_3.y1t(density));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_3.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>' call
      var value_0 = calculateWindowSizeClass$composable$lambda_1(density, windowSizeClass$delegate);
      $composer_3.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_3.o1r();
    DisposableEffect$composable(density, tmp0_1, $composer_0, 0);
    var tmp0_2 = calculateWindowSizeClass$composable$lambda(windowSizeClass$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_2;
  }
  function getDpSize(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.windowsizeclass.getDpSize.<anonymous>' call
    return DpSize(density.z35(_this__u8e3s4.innerWidth), density.z35(_this__u8e3s4.innerHeight));
  }
  function calculateWindowSizeClass$composable$lambda($windowSizeClass$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('windowSizeClass', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $windowSizeClass$delegate.s();
  }
  function calculateWindowSizeClass$composable$lambda_0($windowSizeClass$delegate, value) {
    getLocalDelegateReference('windowSizeClass', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $windowSizeClass$delegate.f1d(value);
  }
  function calculateWindowSizeClass$composable$lambda$lambda($density, $windowSizeClass$delegate) {
    return function (it) {
      calculateWindowSizeClass$composable$lambda_0($windowSizeClass$delegate, Companion_getInstance_0().eic(getDpSize(window, $density)));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($callback) {
    this.yic_1 = $callback;
  }
  protoOf(_no_name_provided__qut3iv).gp = function () {
    // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('resize', this.yic_1);
  };
  function calculateWindowSizeClass$composable$lambda_1($density, $windowSizeClass$delegate) {
    return function ($this$DisposableEffect) {
      var callback = calculateWindowSizeClass$composable$lambda$lambda($density, $windowSizeClass$delegate);
      window.addEventListener('resize', callback);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(callback);
      return tmp$ret$0;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calculateWindowSizeClass$composable;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=material3-windowsizeclass-multiplatform-lib.js.map
