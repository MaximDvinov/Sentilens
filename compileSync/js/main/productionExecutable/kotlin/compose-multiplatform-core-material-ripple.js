(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-graphics.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    root['compose-multiplatform-core-material-ripple'] = factory(typeof this['compose-multiplatform-core-material-ripple'] === 'undefined' ? {} : this['compose-multiplatform-core-material-ripple'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-graphics'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var isInterface = kotlin_kotlin.$_$.id;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var equals = kotlin_kotlin.$_$.oc;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var hashCode = kotlin_kotlin.$_$.xc;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.e9;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Ripple, 'Ripple', classMeta);
  setMetadataFor(CommonRipple, 'CommonRipple', classMeta, Ripple);
  setMetadataFor(CommonRippleIndicationInstance$addRipple$slambda, 'CommonRippleIndicationInstance$addRipple$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleIndicationInstance, 'RippleIndicationInstance', classMeta);
  setMetadataFor(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', classMeta, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda_1, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer, 'StateLayer', classMeta);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_1, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_3, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda$slambda, 'RippleAnimation$fadeOut$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda, 'RippleAnimation$fadeIn$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda, 'RippleAnimation$fadeOut$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($animateCOROUTINE$0, '$animateCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($fadeInCOROUTINE$1, '$fadeInCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fadeOutCOROUTINE$2, '$fadeOutCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(RippleAnimation, 'RippleAnimation', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DebugRippleTheme, 'DebugRippleTheme', objectMeta);
  setMetadataFor(RippleAlpha, 'RippleAlpha', classMeta);
  //endregion
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).hdn = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1340080932);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance$composable)P(2!1,3:c#ui.unit.Dp)53@1880L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1340080932, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable (CommonRipple.kt:46)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(interactionSource) | $composer_1.y1t(this));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
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
  };
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.qdn_1.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.s();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.pdn_1.s().udn_1;
      var tmp;
      if (!(alpha === 0.0)) {
        ripple.ido(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
        tmp = Unit_getInstance();
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.rdo_1 = $rippleAnimation;
    this.sdo_1 = this$0;
    this.tdo_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).ml = function () {
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
            this.dl_1 = 2;
            suspendResult = this.rdo_1.wdo(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.vdo_1 = suspendResult;
            this.el_1 = 5;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.sdo_1.qdn_1.ye(this.tdo_1);
            return Unit_getInstance();
          case 4:
            this.el_1 = 5;
            var t = this.gl_1;
            this.sdo_1.qdn_1.ye(this.tdo_1);
            throw t;
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
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).u1e = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.rdo_1, this.sdo_1, this.tdo_1, completion);
    i.udo_1 = $this$launch;
    return i;
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.mdn_1 = bounded;
    this.ndn_1 = radius;
    this.odn_1 = color;
    this.pdn_1 = rippleAlpha;
    this.qdn_1 = mutableStateMapOf();
  }
  protoOf(CommonRippleIndicationInstance).pa8 = function (_this__u8e3s4) {
    var color = this.odn_1.s().y3w_1;
    _this__u8e3s4.d5m();
    this.ydo(_this__u8e3s4, this.ndn_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).zdo = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.qdn_1.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.s();
      ripple.adp();
    }
    var origin = this.mdn_1 ? interaction.zbp_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.ndn_1, this.mdn_1);
    // Inline function 'kotlin.collections.set' call
    this.qdn_1.a5(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).bdp = function (interaction) {
    var tmp0_safe_receiver = this.qdn_1.z2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.adp();
    }
  };
  protoOf(CommonRippleIndicationInstance).e22 = function () {
  };
  protoOf(CommonRippleIndicationInstance).g22 = function () {
    this.qdn_1.a4();
  };
  protoOf(CommonRippleIndicationInstance).f22 = function () {
    this.qdn_1.a4();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function rememberRipple$composable(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = {_v: bounded};
    var radius_0 = {_v: new Dp(radius)};
    var color_0 = color;
    var $composer_0 = $composer;
    $composer_0.m1r(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance_0().i36_1);
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_1().c3y_1;
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = bounded_0._v;
    var tmp1_remember$composable = radius_0._v.j36_1;
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(tmp0_remember$composable) | $composer_1.y1t(new Dp(tmp1_remember$composable)));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      var value = new CommonRipple(bounded_0._v, radius_0._v.j36_1, colorState);
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
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.ldp_1 = $instance;
    this.mdp_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).ha9 = function (interaction, $completion) {
    var tmp = this.ia9(interaction, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.ha9((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          var tmp0_subject = this.ndp_1;
          if (tmp0_subject instanceof Press) {
            this.ldp_1.zdo(this.ndp_1, this.mdp_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.ldp_1.bdp(this.ndp_1.bbq_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.ldp_1.bdp(this.ndp_1.dbq_1);
              } else {
                this.ldp_1.cdp(this.ndp_1, this.mdp_1);
              }
            }
          }
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
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).ia9 = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda(this.ldp_1, this.mdp_1, completion);
    i.ndp_1 = interaction;
    return i;
  };
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.ha9(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.odp_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.odp_1(value, $completion);
  };
  function Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation) {
    this.xdp_1 = $interactionSource;
    this.ydp_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = this.xdp_1.sa8();
            var tmp_1 = Ripple$rememberUpdatedInstance$composable$slambda$slambda_0(this.ydp_1, this.zdp_1, null);
            suspendResult = tmp_0.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda(this.xdp_1, this.ydp_1, completion);
    i.zdp_1 = $this$LaunchedEffect;
    return i;
  };
  function Ripple$rememberUpdatedInstance$composable$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.idn_1 = bounded;
    this.jdn_1 = radius;
    this.kdn_1 = color;
  }
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.idn_1 === other.idn_1))
      return false;
    if (!equals(this.jdn_1, other.jdn_1))
      return false;
    if (!equals(this.kdn_1, other.kdn_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = this.idn_1 | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.jdn_1) | 0;
    result = imul(31, result) + hashCode(this.kdn_1) | 0;
    return result;
  };
  protoOf(Ripple).qa8 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1363498422);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)116@5361L7,117@5389L174,124@5617L13,124@5590L41,126@5656L155,134@5821L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1363498422, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance$composable (Ripple.kt:113)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.m1r(2051856795);
    sourceInformation($composer_0, '121@5525L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp2_get_isSpecified_v6ii6t = this.kdn_1.s().y3w_1;
    if (!equals(_Color___get_value__impl__1pls5m(tmp2_get_isSpecified_v6ii6t), _Color___get_value__impl__1pls5m(Companion_getInstance_1().c3y_1))) {
      tmp = this.kdn_1.s().y3w_1;
    } else {
      tmp = theme.adq($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.o1r();
    var color = rememberUpdatedState$composable(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState$composable(theme.bdq($composer_0, 0), $composer_0, 0);
    var instance = this.hdn(interactionSource, this.idn_1, this.jdn_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    LaunchedEffect$composable(instance, interactionSource, Ripple$rememberUpdatedInstance$composable$slambda_0(interactionSource, instance, null), $composer_0, 8 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return instance;
  };
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.xdo_1 = new StateLayer(bounded, rippleAlpha);
  }
  protoOf(RippleIndicationInstance).cdp = function (interaction, scope) {
    this.xdo_1.hdq(interaction, scope);
  };
  protoOf(RippleIndicationInstance).ydo = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.xdo_1.ydo(_this__u8e3s4, radius, color);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.qdq_1 = this$0;
    this.rdq_1 = $targetAlpha;
    this.sdq_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(StateLayer$handleInteraction$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.qdq_1.edq_1.c8m(this.rdq_1, this.sdq_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).u1e = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.qdq_1, this.rdq_1, this.sdq_1, completion);
    i.tdq_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.cdr_1 = this$0;
    this.ddr_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.cdr_1.edq_1.c8m(0.0, this.ddr_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).u1e = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.cdr_1, this.ddr_1, completion);
    i.edr_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.cdq_1 = bounded;
    this.ddq_1 = rippleAlpha;
    this.edq_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.fdq_1 = ArrayList_init_$Create$();
    this.gdq_1 = null;
  }
  protoOf(StateLayer).hdq = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.fdq_1.a(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.fdq_1.y3(interaction.ybo_1);
      } else {
        if (interaction instanceof Focus) {
          this.fdq_1.a(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.fdq_1.y3(interaction.xbn_1);
          } else {
            if (interaction instanceof Start) {
              this.fdq_1.a(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.fdq_1.y3(interaction.sbn_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.fdq_1.y3(interaction.ubn_1);
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.fdq_1);
    if (!equals(this.gdq_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var tmp;
        if (interaction instanceof Enter) {
          tmp = this.ddq_1.s().tdn_1;
        } else {
          if (interaction instanceof Focus) {
            tmp = this.ddq_1.s().sdn_1;
          } else {
            if (interaction instanceof Start) {
              tmp = this.ddq_1.s().rdn_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.gdq_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.gdq_1 = newInteraction;
    }
  };
  protoOf(StateLayer).ydo = function (_this__u8e3s4, radius, color) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.cdq_1, _this__u8e3s4.x33());
    } else {
      tmp = _this__u8e3s4.s35(radius);
    }
    var targetRadius = tmp;
    var alpha = this.edq_1.s();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.cdq_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.x33());
        var tmp1_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.x33());
        var tmp2_clipRect = Companion_getInstance_2().p3z_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var tmp0_with = _this__u8e3s4.g4b();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.x33();
        tmp0_with.a3k().f3z();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        tmp0_with.e4b().m3z(0.0, 0.0, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
        _this__u8e3s4.p4b(modulatedColor, targetRadius);
        tmp0_with.a3k().g3z();
        tmp0_with.d4b(previousSize);
      } else {
        _this__u8e3s4.p4b(modulatedColor, targetRadius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.ndr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.ndr_1.cdo_1.c8m(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.ndr_1, completion);
    i.odr_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.xdr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.xdr_1.ddo_1.c8m(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).u1e = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.xdr_1, completion);
    i.ydr_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.hds_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.hds_1.edo_1.c8m(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).u1e = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.hds_1, completion);
    i.ids_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.rds_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.rds_1.cdo_1.c8m(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.rds_1, completion);
    i.sds_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    finishedFadingIn$factory();
    return $this.gdo_1.f1d(_set____db54di);
  }
  function _get_finishedFadingIn__pzmnej($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    finishedFadingIn$factory_0();
    return $this.gdo_1.s();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    finishRequested$factory();
    return $this.hdo_1.f1d(_set____db54di);
  }
  function _get_finishRequested__usb5ii($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    finishRequested$factory_0();
    return $this.hdo_1.s();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.tdt_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).jcj = function ($this$coroutineScope, $completion) {
    var tmp = this.u1e($this$coroutineScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeIn$slambda).yl = function (p1, $completion) {
    return this.jcj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          launch(this.udt_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.tdt_1, null));
          launch(this.udt_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.tdt_1, null));
          return launch(this.udt_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.tdt_1, null));
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).u1e = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.tdt_1, completion);
    i.udt_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.jcj($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.ddu_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).jcj = function ($this$coroutineScope, $completion) {
    var tmp = this.u1e($this$coroutineScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation$fadeOut$slambda).yl = function (p1, $completion) {
    return this.jcj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return launch(this.edu_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.ddu_1, null));
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).u1e = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.ddu_1, completion);
    i.edu_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.jcj($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ndu_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            suspendResult = fadeIn(this.ndu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.ndu_1, true);
            this.dl_1 = 2;
            suspendResult = this.ndu_1.fdo_1.rr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 3;
            suspendResult = fadeOut(this.ndu_1, this);
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
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bdt_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.bdt_1, null), this);
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
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kdt_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.kdt_1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.wdn_1 = origin;
    this.xdn_1 = radius;
    this.ydn_1 = bounded;
    this.zdn_1 = null;
    this.ado_1 = null;
    this.bdo_1 = null;
    this.cdo_1 = Animatable(0.0);
    this.ddo_1 = Animatable(0.0);
    this.edo_1 = Animatable(0.0);
    this.fdo_1 = CompletableDeferred(null);
    this.gdo_1 = mutableStateOf(false);
    this.hdo_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).wdo = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(RippleAnimation).adp = function () {
    _set_finishRequested__u52oy2(this, true);
    this.fdo_1.hu(Unit_getInstance());
  };
  protoOf(RippleAnimation).ido = function (_this__u8e3s4, color) {
    if (this.zdn_1 == null) {
      this.zdn_1 = getRippleStartRadius(_this__u8e3s4.x33());
    }
    if (this.ado_1 == null) {
      var tmp = this;
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var tmp0_get_isUnspecified_nagfjk = this.xdn_1;
      if (isNaN_0(_Dp___get_value__impl__geb1vb(tmp0_get_isUnspecified_nagfjk))) {
        tmp_0 = getRippleEndRadius(_this__u8e3s4, this.ydn_1, _this__u8e3s4.x33());
      } else {
        tmp_0 = _this__u8e3s4.s35(this.xdn_1);
      }
      tmp.ado_1 = tmp_0;
    }
    var tmp_1 = this.wdn_1;
    if ((tmp_1 == null ? null : new Offset(tmp_1)) == null) {
      this.wdn_1 = _this__u8e3s4.u4b();
    }
    var tmp_2 = this.bdo_1;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      this.bdo_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.x33()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.x33()) / 2.0);
    }
    var tmp_3;
    if (_get_finishRequested__usb5ii(this) ? !_get_finishedFadingIn__pzmnej(this) : false) {
      tmp_3 = 1.0;
    } else {
      tmp_3 = this.cdo_1.s();
    }
    var alpha = tmp_3;
    var radius = lerp(ensureNotNull(this.zdn_1), ensureNotNull(this.ado_1), this.ddo_1.s());
    var tmp_4 = this.wdn_1;
    var tmp_5 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).n33_1);
    var tmp_6 = this.bdo_1;
    var tmp_7 = lerp(tmp_5, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).n33_1), this.edo_1.s());
    var tmp_8 = this.wdn_1;
    var tmp_9 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).n33_1);
    var tmp_10 = this.bdo_1;
    var centerOffset = Offset_0(tmp_7, lerp(tmp_9, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_10 == null ? null : new Offset(tmp_10)).n33_1), this.edo_1.s()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.ydn_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp1_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.x33());
      var tmp2_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.x33());
      var tmp3_clipRect = Companion_getInstance_2().p3z_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var tmp0_with = _this__u8e3s4.g4b();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.x33();
      tmp0_with.a3k().f3z();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      tmp0_with.e4b().m3z(0.0, 0.0, tmp1_clipRect, tmp2_clipRect, tmp3_clipRect);
      // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
      _this__u8e3s4.p4b(modulatedColor, radius, centerOffset);
      tmp0_with.a3k().g3z();
      tmp0_with.d4b(previousSize);
    } else {
      _this__u8e3s4.p4b(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.s35(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _Size___get_width__impl__58y75t(size);
    var tmp1_max = _Size___get_height__impl__a04p02(size);
    return Math.max(tmp0_max, tmp1_max) * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).odu = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance_1().u3x_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).pdu = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  protoOf(DebugRippleTheme).adq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1423573606, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor$composable (RippleTheme.kt:214)');
    }
    var tmp0 = Companion_getInstance_3().odu(Companion_getInstance_1().q3x_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DebugRippleTheme).bdq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2071239027, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha$composable (RippleTheme.kt:217)');
    }
    var tmp0 = Companion_getInstance_3().pdu(Companion_getInstance_1().q3x_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.rdn_1 = draggedAlpha;
    this.sdn_1 = focusedAlpha;
    this.tdn_1 = hoveredAlpha;
    this.udn_1 = pressedAlpha;
    this.vdn_1 = 0;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.rdn_1 === other.rdn_1))
      return false;
    if (!(this.sdn_1 === other.sdn_1))
      return false;
    if (!(this.tdn_1 === other.tdn_1))
      return false;
    if (!(this.udn_1 === other.udn_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.rdn_1);
    result = imul(31, result) + getNumberHashCode(this.sdn_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.tdn_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.udn_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.rdn_1 + ', focusedAlpha=' + this.sdn_1 + ', ' + ('hoveredAlpha=' + this.tdn_1 + ', pressedAlpha=' + this.udn_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = rememberRipple$composable;
  _.$_$.c = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material-ripple.js.map
