(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-foundation-layout.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-foundation-layout.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    root['compose-multiplatform-core-animation'] = factory(typeof this['compose-multiplatform-core-animation'] === 'undefined' ? {} : this['compose-multiplatform-core-animation'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-foundation-layout']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_kotlin, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation_layout) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.z8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var updateTransition$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var VOID = kotlin_kotlin.$_$.il;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.oc;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.v8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var isInterface = kotlin_kotlin.$_$.id;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.h7;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var KMutableProperty0 = kotlin_kotlin.$_$.lf;
  var THROW_ISE = kotlin_kotlin.$_$.rj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var createDeferredAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var isTransitioningTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var Segment = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var compareTo = kotlin_kotlin.$_$.lc;
  var asSequence = kotlin_kotlin.$_$.z6;
  var map = kotlin_kotlin.$_$.ag;
  var maxOrNull = kotlin_kotlin.$_$.bg;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var Enum = kotlin_kotlin.$_$.dj;
  var createChildTransitionInternal$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var get_lastIndex_0 = kotlin_kotlin.$_$.b9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Color__component1_impl_lz80qe = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var Color__component2_impl_mg9n4l = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var Color__component3_impl_mxb9is = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Color__component4_impl_necvwz = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var coerceIn = kotlin_kotlin.$_$.ze;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var mutableStateListOf_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var removeAll = kotlin_kotlin.$_$.x9;
  var Map = kotlin_kotlin.$_$.k6;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var KProperty0 = kotlin_kotlin.$_$.nf;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.j8;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.b8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.n7;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.c8;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.d8;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var Long = kotlin_kotlin.$_$.jj;
  var toString = kotlin_kotlin.$_$.ce;
  var numberToLong = kotlin_kotlin.$_$.ud;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var animateValueAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var numberToInt = kotlin_kotlin.$_$.td;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentTransform, 'ContentTransform', classMeta);
  setMetadataFor(ChildData, 'ChildData', classMeta, VOID, [ParentDataModifier]);
  setMetadataFor(LayoutModifierWithPassThroughIntrinsics, 'LayoutModifierWithPassThroughIntrinsics', classMeta, VOID, [LayoutModifier]);
  setMetadataFor(SizeModifier, 'SizeModifier', classMeta, LayoutModifierWithPassThroughIntrinsics);
  setMetadataFor(AnimatedContentTransitionScopeImpl, 'AnimatedContentTransitionScopeImpl', classMeta, VOID, [Segment]);
  setMetadataFor(AnimatedContentScopeImpl, 'AnimatedContentScopeImpl', classMeta);
  setMetadataFor(AnimatedContentMeasurePolicy, 'AnimatedContentMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(SizeTransformImpl, 'SizeTransformImpl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl', classMeta);
  setMetadataFor(EnterExitState, 'EnterExitState', classMeta, Enum);
  setMetadataFor(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(AnimatedEnterExitImpl$composable$slambda$slambda, 'AnimatedEnterExitImpl$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(AnimatedEnterExitImpl$composable$slambda, 'AnimatedEnterExitImpl$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  setMetadataFor(ExpandShrinkModifier, 'ExpandShrinkModifier', classMeta, LayoutModifierWithPassThroughIntrinsics);
  setMetadataFor(SlideModifier, 'SlideModifier', classMeta, LayoutModifierWithPassThroughIntrinsics);
  setMetadataFor(FlingInfo, 'FlingInfo', classMeta);
  setMetadataFor(FlingCalculator, 'FlingCalculator', classMeta);
  setMetadataFor(FlingResult, 'FlingResult', classMeta);
  setMetadataFor(AndroidFlingSpline, 'AndroidFlingSpline', objectMeta);
  setMetadataFor(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', classMeta);
  //endregion
  function AnimatedContent$composable(targetState, modifier, transitionSpec, contentAlignment, label, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var transitionSpec_0 = {_v: transitionSpec};
    var contentAlignment_0 = {_v: contentAlignment};
    var label_0 = {_v: label};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1305668975);
    sourceInformation($composer_0, 'C(AnimatedContent$composable)P(5,4,6,1,3,2)130@6947L222,137@7307L6,140@7413L58,141@7487L136:AnimatedContent.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(targetState) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.d1u(transitionSpec_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(label_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.d1u(contentKey_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
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
          if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            var value = AnimatedContent$composable$lambda;
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          transitionSpec_0._v = tmp0;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = Companion_getInstance_1().o5e_1;
        }
        if (!(($default & 16) === 0)) {
          label_0._v = 'AnimatedContent';
        }
        if (!(($default & 32) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.m1r(547886695);
          sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = $composer_2.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            var value_0 = AnimatedContent$composable$lambda_0;
            $composer_2.x1t(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = tmp0_let_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          $composer_2.o1r();
          contentKey_0._v = tmp0_0;
          $dirty = $dirty & -458753;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1305668975, $dirty, -1, 'androidx.compose.animation.AnimatedContent$composable (AnimatedContent.kt:127)');
      }
      var transition = updateTransition$composable(targetState, label_0._v, $composer_0, 8 & $dirty | 14 & $dirty | 112 & $dirty >> 9, 0);
      AnimatedContent$composable_0(transition, modifier_0._v, transitionSpec_0._v, contentAlignment_0._v, contentKey_0._v, content, $composer_0, 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.z28(AnimatedContent$composable$lambda_1(targetState, modifier_0, transitionSpec_0, contentAlignment_0, label_0, contentKey_0, content, $changed, $default));
    }
  }
  function ContentTransform(targetContentEnter, initialContentExit, targetContentZIndex, sizeTransform) {
    targetContentZIndex = targetContentZIndex === VOID ? 0.0 : targetContentZIndex;
    sizeTransform = sizeTransform === VOID ? SizeTransform() : sizeTransform;
    this.m9g_1 = targetContentEnter;
    this.n9g_1 = initialContentExit;
    this.o9g_1 = mutableFloatStateOf(targetContentZIndex);
    this.p9g_1 = sizeTransform;
    this.q9g_1 = 8;
  }
  protoOf(ContentTransform).r9g = function (_set____db54di) {
    targetContentZIndex$factory();
    return this.o9g_1.e2h(_set____db54di);
  };
  protoOf(ContentTransform).s9g = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    targetContentZIndex$factory_0();
    return this.o9g_1.f2h();
  };
  function togetherWith(_this__u8e3s4, exit) {
    return new ContentTransform(_this__u8e3s4, exit);
  }
  function AnimatedContent$composable_0(_this__u8e3s4, modifier, transitionSpec, contentAlignment, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var transitionSpec_0 = {_v: transitionSpec};
    var contentAlignment_0 = {_v: contentAlignment};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1759325067);
    sourceInformation($composer_0, 'C(AnimatedContent$composable)P(3,4,1,2)683@32542L222,689@32863L6,692@32995L7,693@33023L106,698@33218L51,699@33291L62,786@37539L58,787@37631L45,797@37946L52,788@37681L323:AnimatedContent.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.d1u(transitionSpec_0._v) : false) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentAlignment_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.d1u(contentKey_0._v) : false) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            var value = AnimatedContent$composable$lambda_2;
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          transitionSpec_0._v = tmp0;
          $dirty = $dirty & -897;
        }
        if (!(($default & 4) === 0)) {
          contentAlignment_0._v = Companion_getInstance_1().o5e_1;
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.m1r(547886695);
          sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = $composer_2.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            var value_0 = AnimatedContent$composable$lambda_3;
            $composer_2.x1t(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = tmp0_let_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          $composer_2.o1r();
          contentKey_0._v = tmp0_0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1759325067, $dirty, -1, 'androidx.compose.animation.AnimatedContent$composable (AnimatedContent.kt:681)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.g1u(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_3);
      var layoutDirection = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.m1r(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.y1t(_this__u8e3s4);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
        var value_1 = new AnimatedContentTransitionScopeImpl(_this__u8e3s4, contentAlignment_0._v, layoutDirection);
        $composer_4.x1t(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_2 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_4.o1r();
      var rootScope = tmp0_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.m1r(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_5.y1t(_this__u8e3s4);
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_5.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
        var value_2 = mutableStateListOf([_this__u8e3s4.c8z()]);
        $composer_5.x1t(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_3 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_5.o1r();
      var currentlyVisible = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_0;
      $composer_6.m1r(-838505973);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_6.y1t(_this__u8e3s4);
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_6.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
        // Inline function 'kotlin.collections.mutableMapOf' call
        var value_3 = LinkedHashMap_init_$Create$();
        $composer_6.x1t(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp0_let_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_4 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_6.o1r();
      var contentMap = tmp0_4;
      if (!currentlyVisible.e1(_this__u8e3s4.c8z())) {
        currentlyVisible.a4();
        currentlyVisible.g23(_this__u8e3s4.c8z());
      }
      if (equals(_this__u8e3s4.c8z(), _this__u8e3s4.q8x())) {
        if (!(currentlyVisible.g() === 1) ? true : !equals(currentlyVisible.m(0), _this__u8e3s4.c8z())) {
          currentlyVisible.a4();
          currentlyVisible.g23(_this__u8e3s4.c8z());
        }
        if (!(contentMap.g() === 1) ? true : contentMap.t2(_this__u8e3s4.c8z())) {
          contentMap.a4();
        }
        rootScope.u9g_1 = contentAlignment_0._v;
        rootScope.v9g_1 = layoutDirection;
      }
      if (!equals(_this__u8e3s4.c8z(), _this__u8e3s4.q8x()) ? !currentlyVisible.e1(_this__u8e3s4.q8x()) : false) {
        var tmp$ret$28;
        $l$block: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var tmp0_iterator = currentlyVisible.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            if (equals(contentKey_0._v(item), contentKey_0._v(_this__u8e3s4.q8x()))) {
              tmp$ret$28 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$28 = -1;
        }
        var id = tmp$ret$28;
        if (id === -1) {
          currentlyVisible.g23(_this__u8e3s4.q8x());
        } else {
          currentlyVisible.s2l(id, _this__u8e3s4.q8x());
        }
      }
      if (!contentMap.t2(_this__u8e3s4.q8x()) ? true : !contentMap.t2(_this__u8e3s4.c8z())) {
        contentMap.a4();
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = currentlyVisible.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_0 = currentlyVisible.m(index_0);
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>' call
            var tmp_9 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_9, 885640742, true, AnimatedContent$composable$lambda_4(transitionSpec_0, rootScope, _this__u8e3s4, item_0, $dirty, content, currentlyVisible));
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var $composer_7 = $composer_0;
            $composer_7.m1r(-838505973);
            sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_2 = $composer_7.y1t(dispatchReceiver);
            // Inline function 'kotlin.let' call
            var tmp0_let_4 = $composer_7.w1t();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_10;
            if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_0().y1s_1) {
              // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>' call
              var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
              $composer_7.x1t(value_4);
              tmp_10 = value_4;
            } else {
              tmp_10 = tmp0_let_4;
            }
            var tmp_11 = tmp_10;
            var tmp0_5 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
            $composer_7.o1r();
            contentMap.a5(item_0, tmp0_5);
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp10_remember$composable = _this__u8e3s4.m8y();
      var $composer_8 = $composer_0;
      $composer_8.m1r(-1124426577);
      sourceInformation($composer_8, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = !!($composer_8.y1t(rootScope) | $composer_8.y1t(tmp10_remember$composable));
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = $composer_8.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp1_cache_3 ? true : tmp0_let_5 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
        var value_5 = transitionSpec_0._v(rootScope);
        $composer_8.x1t(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = tmp0_let_5;
      }
      var tmp_13 = tmp_12;
      var tmp0_6 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      $composer_8.o1r();
      var contentTransform = tmp0_6;
      var sizeModifier = rootScope.z9g(contentTransform, $composer_0, 72);
      var tmp0_modifier = modifier_0._v.n5f(sizeModifier);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_9 = $composer_0;
      $composer_9.m1r(547886695);
      sourceInformation($composer_9, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_6 = $composer_9.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_14;
      if (false ? true : tmp0_let_6 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
        var value_6 = new AnimatedContentMeasurePolicy(rootScope);
        $composer_9.x1t(value_6);
        tmp_14 = value_6;
      } else {
        tmp_14 = tmp0_let_6;
      }
      var tmp_15 = tmp_14;
      var tmp0_7 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
      $composer_9.o1r();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = tmp0_modifier;
      var $composer_10 = $composer_0;
      $composer_10.m1r(1725976829);
      sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_10, 0);
      var localMap = $composer_10.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_2().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
      var $composer_11 = $composer_10;
      var tmp_16 = $composer_11.z1s();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_11.p1t();
      if ($composer_11.a1t()) {
        $composer_11.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_11.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp0_7, Companion_getInstance_2().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_2().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_2().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_17;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_17 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_11)), $composer_11, 112 & 6 >> 3);
      $composer_11.m1r(2058660585);
      // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>' call
      var $composer_12 = $composer_11;
      sourceInformationMarkerStart($composer_12, -372995900, 'C:AnimatedContent.kt#xbi5r1');
      $composer_12.m1r(-618799692);
      sourceInformation($composer_12, '');
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = currentlyVisible.d();
      while (tmp0_iterator_0.e()) {
        var element = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>' call
        $composer_12.d1t(1940294288, contentKey_0._v(element));
        sourceInformation($composer_12, '793@37870L8');
        var tmp0_safe_receiver = contentMap.z2(element);
        tmp0_safe_receiver == null || tmp0_safe_receiver($composer_12, 0);
        $composer_12.e1t();
      }
      $composer_12.o1r();
      sourceInformationMarkerEnd($composer_12);
      $composer_11.o1r();
      $composer_11.s1t();
      $composer_10.o1r();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_safe_receiver_0 = $composer_0.i1t();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.z28(AnimatedContent$composable$lambda_5(_this__u8e3s4, modifier_0, transitionSpec_0, contentAlignment_0, contentKey_0, content, $changed, $default));
    }
  }
  function SizeTransform(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    var tmp;
    if (sizeAnimationSpec === VOID) {
      tmp = SizeTransform$lambda;
    } else {
      tmp = sizeAnimationSpec;
    }
    sizeAnimationSpec = tmp;
    return new SizeTransformImpl(clip, sizeAnimationSpec);
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this$0, this$1) {
    return function ($this$animate) {
      var tmp0_safe_receiver = this$0.x9g_1.z2($this$animate.s8x());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.s();
        tmp = tmp_0 == null ? null : tmp_0.a37_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_3().z36_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var initial = tmp_1;
      var tmp2_safe_receiver = this$0.x9g_1.z2($this$animate.q8x());
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = tmp2_safe_receiver.s();
        tmp_3 = tmp_4 == null ? null : tmp_4.a37_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_3().z36_1;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var target = tmp_5;
      var tmp4_safe_receiver = this$1.b9h_1.s();
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.d9h(initial, target);
      return tmp5_elvis_lhs == null ? spring() : tmp5_elvis_lhs;
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.x9g_1.z2(it);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.s();
        tmp = tmp_0 == null ? null : tmp_0.a37_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_3().z36_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      return new IntSize(tmp_1);
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1($placeable, $offset) {
    return function ($this$layout) {
      $this$layout.g6y($placeable, $offset);
      return Unit_getInstance();
    };
  }
  function ChildData(isTarget) {
    this.e9h_1 = isTarget;
  }
  protoOf(ChildData).b6u = function (_this__u8e3s4, parentData) {
    return this;
  };
  protoOf(ChildData).toString = function () {
    return 'ChildData(isTarget=' + this.e9h_1 + ')';
  };
  protoOf(ChildData).hashCode = function () {
    return this.e9h_1 | 0;
  };
  protoOf(ChildData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildData))
      return false;
    var tmp0_other_with_cast = other instanceof ChildData ? other : THROW_CCE();
    if (!(this.e9h_1 === tmp0_other_with_cast.e9h_1))
      return false;
    return true;
  };
  function SizeModifier($outer, sizeAnimation, sizeTransform) {
    this.c9h_1 = $outer;
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.a9h_1 = sizeAnimation;
    this.b9h_1 = sizeTransform;
  }
  protoOf(SizeModifier).v5h = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.w5h(constraints);
    var tmp = AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this.c9h_1, this);
    var size = this.a9h_1.b8z(tmp, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this.c9h_1));
    this.c9h_1.y9g_1 = size;
    var offset = this.c9h_1.u9g_1.m5f(IntSize_0(placeable.x5h_1, placeable.y5h_1), size.s().a37_1, LayoutDirection_Ltr_getInstance());
    var tmp_0 = _IntSize___get_width__impl__d9yl4o(size.s().a37_1);
    var tmp_1 = _IntSize___get_height__impl__prv63b(size.s().a37_1);
    return _this__u8e3s4.d5i(tmp_0, tmp_1, VOID, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(placeable, offset));
  };
  function createSizeAnimationModifier$composable$lambda($shouldAnimateSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateSize$delegate.s();
  }
  function createSizeAnimationModifier$composable$lambda_0($shouldAnimateSize$delegate, value) {
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateSize$delegate.f1d(value);
  }
  function AnimatedContentTransitionScopeImpl(transition, contentAlignment, layoutDirection) {
    this.t9g_1 = transition;
    this.u9g_1 = contentAlignment;
    this.v9g_1 = layoutDirection;
    this.w9g_1 = mutableStateOf(new IntSize(Companion_getInstance_3().z36_1));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x9g_1 = LinkedHashMap_init_$Create$();
    this.y9g_1 = null;
  }
  protoOf(AnimatedContentTransitionScopeImpl).s8x = function () {
    return this.t9g_1.m8y().s8x();
  };
  protoOf(AnimatedContentTransitionScopeImpl).q8x = function () {
    return this.t9g_1.m8y().q8x();
  };
  protoOf(AnimatedContentTransitionScopeImpl).n6r = function (_set____db54di) {
    measuredSize$factory();
    return this.w9g_1.f1d(new IntSize(_set____db54di));
  };
  protoOf(AnimatedContentTransitionScopeImpl).f9h = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    measuredSize$factory_0();
    return this.w9g_1.s().a37_1;
  };
  protoOf(AnimatedContentTransitionScopeImpl).z9g = function (contentTransform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-929285694);
    sourceInformation($composer_0, 'C(createSizeAnimationModifier$composable)557@26192L40,558@26261L52,568@26730L48,569@26791L205:AnimatedContent.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-929285694, $changed, -1, 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier$composable (AnimatedContent.kt:554)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(this);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier$composable.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var shouldAnimateSize$delegate = tmp0;
    var sizeTransform = rememberUpdatedState$composable(contentTransform.p9g_1, $composer_0, 0);
    if (equals(this.t9g_1.c8z(), this.t9g_1.q8x())) {
      createSizeAnimationModifier$composable$lambda_0(shouldAnimateSize$delegate, false);
    } else {
      if (!(sizeTransform.s() == null)) {
        createSizeAnimationModifier$composable$lambda_0(shouldAnimateSize$delegate, true);
      }
    }
    var tmp_1;
    if (createSizeAnimationModifier$composable$lambda(shouldAnimateSize$delegate)) {
      var tmp_2 = get_VectorConverter(Companion_getInstance_3());
      var sizeAnimation = createDeferredAnimation$composable(this.t9g_1, tmp_2, null, $composer_0, 0, 2);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.y1t(sizeAnimation);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier$composable.<anonymous>' call
        var tmp_4;
        var tmp0_safe_receiver = sizeTransform.s();
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g9h()) === false) {
          tmp_4 = Companion_getInstance();
        } else {
          tmp_4 = clipToBounds(Companion_getInstance());
        }
        var value_0 = tmp_4.n5f(new SizeModifier(this, sizeAnimation, sizeTransform));
        $composer_2.x1t(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_5 = tmp_3;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.o1r();
      tmp_1 = tmp0_0;
    } else {
      this.y9g_1 = null;
      tmp_1 = Companion_getInstance();
    }
    var tmp0_1 = tmp_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_1;
  };
  function AnimatedContentScopeImpl(animatedVisibilityScope) {
    this.h9h_1 = animatedVisibilityScope;
  }
  function AnimatedContentMeasurePolicy$measure$lambda($placeables, this$0, $maxWidth, $maxHeight) {
    return function ($this$layout) {
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = element;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var offset = this$0.i9h_1.u9g_1.m5f(IntSize_0(tmp0_safe_receiver.x5h_1, tmp0_safe_receiver.y5h_1), IntSize_0($maxWidth, $maxHeight), LayoutDirection_Ltr_getInstance());
          $this$layout.f6y(tmp0_safe_receiver, _IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset));
          tmp$ret$0 = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function AnimatedContentMeasurePolicy$minIntrinsicWidth$lambda($height) {
    return function (it) {
      return it.q5n($height);
    };
  }
  function AnimatedContentMeasurePolicy$minIntrinsicHeight$lambda($width) {
    return function (it) {
      return it.s5n($width);
    };
  }
  function AnimatedContentMeasurePolicy$maxIntrinsicWidth$lambda($height) {
    return function (it) {
      return it.r5n($height);
    };
  }
  function AnimatedContentMeasurePolicy$maxIntrinsicHeight$lambda($width) {
    return function (it) {
      return it.t5n($width);
    };
  }
  function AnimatedContentMeasurePolicy(rootScope) {
    this.i9h_1 = rootScope;
  }
  protoOf(AnimatedContentMeasurePolicy).e6w = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.g();
    var placeables = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.m(index);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp = item.r6r();
        var tmp0_safe_receiver = tmp instanceof ChildData ? tmp : null;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e9h_1) === true) {
          placeables[index] = item.w5h(constraints);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = measurables.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = measurables.m(index_0);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        if (placeables[index_0] == null) {
          placeables[index_0] = item_0.w5h(constraints);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (placeables.length === 0) {
        tmp$ret$2 = null;
        break $l$block_0;
      }
      var maxElem = placeables[0];
      var lastIndex = get_lastIndex(placeables);
      if (lastIndex === 0) {
        tmp$ret$2 = maxElem;
        break $l$block_0;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
      var tmp0_safe_receiver_0 = maxElem;
      var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x5h_1;
      var maxValue = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable_1 = 1;
      if (inductionVariable_1 <= lastIndex)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var e = placeables[i];
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
          var tmp1_elvis_lhs_0 = e == null ? null : e.x5h_1;
          var v = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$2 = maxElem;
    }
    var tmp0_safe_receiver_1 = tmp$ret$2;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.x5h_1;
    var maxWidth = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp$ret$6;
    $l$block_2: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (placeables.length === 0) {
        tmp$ret$6 = null;
        break $l$block_2;
      }
      var maxElem_0 = placeables[0];
      var lastIndex_0 = get_lastIndex(placeables);
      if (lastIndex_0 === 0) {
        tmp$ret$6 = maxElem_0;
        break $l$block_2;
      }
      // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
      var tmp0_safe_receiver_2 = maxElem_0;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.y5h_1;
      var maxValue_0 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var inductionVariable_2 = 1;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var e_0 = placeables[i_0];
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
          var tmp1_elvis_lhs_3 = e_0 == null ? null : e_0.y5h_1;
          var v_0 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === lastIndex_0));
      tmp$ret$6 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$6;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y5h_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    this.i9h_1.n6r(IntSize_0(maxWidth, maxHeight));
    return _this__u8e3s4.d5i(maxWidth, maxHeight, VOID, AnimatedContentMeasurePolicy$measure$lambda(placeables, this, maxWidth, maxHeight));
  };
  protoOf(AnimatedContentMeasurePolicy).f6w = function (_this__u8e3s4, measurables, height) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedContentMeasurePolicy$minIntrinsicWidth$lambda(height)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).g6w = function (_this__u8e3s4, measurables, width) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedContentMeasurePolicy$minIntrinsicHeight$lambda(width)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).h6w = function (_this__u8e3s4, measurables, height) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedContentMeasurePolicy$maxIntrinsicWidth$lambda(height)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedContentMeasurePolicy).i6w = function (_this__u8e3s4, measurables, width) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedContentMeasurePolicy$maxIntrinsicHeight$lambda(width)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function SizeTransformImpl(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    this.j9h_1 = clip;
    this.k9h_1 = sizeAnimationSpec;
  }
  protoOf(SizeTransformImpl).g9h = function () {
    return this.j9h_1;
  };
  protoOf(SizeTransformImpl).d9h = function (initialSize, targetSize) {
    return this.k9h_1(new IntSize(initialSize), new IntSize(targetSize));
  };
  function AnimatedContent$composable$lambda($this$null) {
    var tmp = fadeIn(tween(220, 90));
    var tmp0_animationSpec = tween(220, 90);
    return togetherWith(tmp.m9h(scaleIn(tmp0_animationSpec, 0.92)), fadeOut(tween(90)));
  }
  function AnimatedContent$composable$lambda_0(it) {
    return it;
  }
  function AnimatedContent$composable$lambda_1($targetState, $modifier, $transitionSpec, $contentAlignment, $label, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedContent$composable($targetState, $modifier._v, $transitionSpec._v, $contentAlignment._v, $label._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedContent$composable$lambda_2($this$null) {
    var tmp = fadeIn(tween(220, 90));
    var tmp0_animationSpec = tween(220, 90);
    return togetherWith(tmp.m9h(scaleIn(tmp0_animationSpec, 0.92)), fadeOut(tween(90)));
  }
  function AnimatedContent$composable$lambda_3(it) {
    return it;
  }
  function AnimatedContent$composable$lambda$lambda$lambda($placeable, $specOnEnter) {
    return function ($this$layout) {
      $this$layout.u5h($placeable, 0, 0, $specOnEnter.s9g());
      return Unit_getInstance();
    };
  }
  function AnimatedContent$composable$lambda$lambda($specOnEnter) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.w5h(constraints.l35_1);
      var tmp = placeable.x5h_1;
      var tmp_0 = placeable.y5h_1;
      return $this$layout.d5i(tmp, tmp_0, VOID, AnimatedContent$composable$lambda$lambda$lambda(placeable, $specOnEnter));
    };
  }
  function AnimatedContent$composable$lambda$lambda_0($item) {
    return function (it) {
      return equals(it, $item);
    };
  }
  function _no_name_provided__qut3iv($currentlyVisible, $item, $rootScope) {
    this.n9h_1 = $currentlyVisible;
    this.o9h_1 = $item;
    this.p9h_1 = $rootScope;
  }
  protoOf(_no_name_provided__qut3iv).gp = function () {
    // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.n9h_1.k2l(this.o9h_1);
    this.p9h_1.x9g_1.ye(this.o9h_1);
  };
  function AnimatedContent$composable$lambda$lambda$lambda_0($currentlyVisible, $item, $rootScope) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($currentlyVisible, $item, $rootScope);
      return tmp$ret$0;
    };
  }
  function AnimatedContent$composable$lambda$lambda_1($rootScope, $item, $content, $$dirty, $currentlyVisible) {
    return function ($this$AnimatedVisibility, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C770@36930L253,*778@37345L43,779@37416L24:AnimatedContent.kt#xbi5r1');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t($this$AnimatedVisibility) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1894897681, $dirty, -1, 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous> (AnimatedContent.kt:768)');
        }
        DisposableEffect$composable($this$AnimatedVisibility, AnimatedContent$composable$lambda$lambda$lambda_0($currentlyVisible, $item, $rootScope), $composer_0, 14 & $dirty);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $rootScope.x9g_1;
        var tmp1_set = ($this$AnimatedVisibility instanceof AnimatedVisibilityScopeImpl ? $this$AnimatedVisibility : THROW_CCE()).r9h_1;
        tmp0_set.a5($item, tmp1_set);
        var tmp$ret$5;
        // Inline function 'kotlin.with' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_1 = tmp2_remember$composable;
        $composer_1.m1r(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = new AnimatedContentScopeImpl($this$AnimatedVisibility);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        var tmp3_with = tmp$ret$4;
        // Inline function 'kotlin.contracts.contract' call
        tmp$ret$5 = $content(tmp3_with, $item, $composer_0, 896 & $$dirty >> 9);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.m1t();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function AnimatedContent$composable$lambda_4($transitionSpec, $rootScope, $this_AnimatedContent$composable, $item, $$dirty, $content, $currentlyVisible) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C740@35270L38,744@35484L323,751@35840L125,756@36148L1332:AnimatedContent.kt#xbi5r1');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(885640742, $changed, -1, 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous> (AnimatedContent.kt:739)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = $transitionSpec._v($rootScope);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        var specOnEnter = tmp$ret$4;
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = equals($this_AnimatedContent$composable.m8y().q8x(), $item);
        var tmp2_remember$composable = $composer_0;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.m1r(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache = $composer_2.y1t(tmp1_remember$composable);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3;
          if (equals($this_AnimatedContent$composable.m8y().q8x(), $item)) {
            tmp_3 = Companion_getInstance_7().s9h_1;
          } else {
            tmp_3 = $transitionSpec._v($rootScope).n9g_1;
          }
          tmp$ret$5 = tmp_3;
          var value_0 = tmp$ret$5;
          tmp0_cache_0.x1t(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_4 = tmp$ret$7;
        tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.o1r();
        tmp$ret$9 = tmp0_0;
        var exit = tmp$ret$9;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_3 = tmp3_remember$composable;
        $composer_3.m1r(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$10;
          // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = new ChildData(equals($item, $this_AnimatedContent$composable.q8x()));
          var value_1 = tmp$ret$10;
          tmp0_cache_1.x1t(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_5;
        tmp$ret$12 = tmp$ret$11;
        var tmp_6 = tmp$ret$12;
        tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.o1r();
        tmp$ret$14 = tmp0_1;
        var childData = tmp$ret$14;
        var tmp0_enter = specOnEnter.m9g_1;
        var tmp_7 = Companion_getInstance();
        var tmp_8 = layout(tmp_7, AnimatedContent$composable$lambda$lambda(specOnEnter));
        var tmp$ret$15;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        childData.e9h_1 = equals($item, $this_AnimatedContent$composable.q8x());
        tmp$ret$15 = childData;
        var tmp1_modifier = tmp_8.n5f(tmp$ret$15);
        var tmp_9 = AnimatedContent$composable$lambda$lambda_0($item);
        var tmp$ret$22;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$21;
        // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_10 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_10, -1894897681, true, AnimatedContent$composable$lambda$lambda_1($rootScope, $item, $content, $$dirty, $currentlyVisible));
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_4 = tmp0_remember$composable_0;
        $composer_4.m1r(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_0 = $composer_4.y1t(dispatchReceiver);
        var tmp$ret$18;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$16;
          // Inline function 'androidx.compose.animation.AnimatedContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$16 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value_2 = tmp$ret$16;
          tmp0_cache_2.x1t(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = tmp0_let_2;
        }
        tmp$ret$17 = tmp_11;
        tmp$ret$18 = tmp$ret$17;
        var tmp_12 = tmp$ret$18;
        tmp$ret$19 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_2 = tmp$ret$19;
        $composer_4.o1r();
        tmp$ret$20 = tmp0_2;
        tmp$ret$21 = tmp$ret$20;
        tmp$ret$22 = tmp$ret$21;
        AnimatedVisibility$composable_1($this_AnimatedContent$composable, tmp_9, tmp1_modifier, tmp0_enter, exit, tmp$ret$22, $composer_0, 196608 | 14 & $$dirty, 0);
        var tmp_13;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_13 = Unit_getInstance();
        }
        tmp = tmp_13;
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
  function AnimatedContent$composable$lambda_5($this_AnimatedContent$composable, $modifier, $transitionSpec, $contentAlignment, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedContent$composable_0($this_AnimatedContent$composable, $modifier._v, $transitionSpec._v, $contentAlignment._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SizeTransform$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    Spring_getInstance();
    return spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
  }
  function targetContentZIndex$factory() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.s9g();
    }, function (receiver, value) {
      return receiver.r9g(value);
    });
  }
  function targetContentZIndex$factory_0() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.s9g();
    }, function (receiver, value) {
      return receiver.r9g(value);
    });
  }
  function measuredSize$factory() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.f9h());
    }, function (receiver, value) {
      return receiver.n6r(value.a37_1);
    });
  }
  function measuredSize$factory_0() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.f9h());
    }, function (receiver, value) {
      return receiver.n6r(value.a37_1);
    });
  }
  function AnimatedVisibility$composable(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1794947452);
    sourceInformation($composer_0, 'C(AnimatedVisibility$composable)P(5,4,1,2,3)275@15293L32,276@15364L6,276@15330L73:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1t(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1t(label_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 1048576 : 524288);
    if (!(($dirty & 2995921) === 599184) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().m9h(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().u9h(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(1794947452, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility$composable (AnimatedVisibility.kt:267)');
      }
      var transition = updateTransition$composable(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility$composable.<anonymous>' call
        var value = AnimatedVisibility$composable$lambda;
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      AnimatedEnterExitImpl$composable(transition, tmp0, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
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
      tmp0_safe_receiver.z28(AnimatedVisibility$composable$lambda_0(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibility$composable_0(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1442697018);
    sourceInformation($composer_0, 'C(AnimatedVisibility$composable)P(5,4,1,2,3)202@11021L32,203@11092L6,203@11058L73:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1t(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1t(label_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 1048576 : 524288);
    if (!(($dirty & 2995921) === 599184) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().m9h(expandHorizontally());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().u9h(shrinkHorizontally());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      if (isTraceInProgress()) {
        traceEventStart(-1442697018, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility$composable (AnimatedVisibility.kt:194)');
      }
      var transition = updateTransition$composable(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedVisibility$composable.<anonymous>' call
        var value = AnimatedVisibility$composable$lambda_1;
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      AnimatedEnterExitImpl$composable(transition, tmp0, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
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
      tmp0_safe_receiver.z28(AnimatedVisibility$composable$lambda_2(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibility$composable_1(_this__u8e3s4, visible, modifier, enter, exit, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(943628693);
    sourceInformation($composer_0, 'C(AnimatedVisibility$composable)P(4,3,1,2)606@33860L68:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().m9h(expandIn());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = shrinkOut().u9h(fadeOut());
      }
      if (isTraceInProgress()) {
        traceEventStart(943628693, $dirty, -1, 'androidx.compose.animation.AnimatedVisibility$composable (AnimatedVisibility.kt:600)');
      }
      AnimatedEnterExitImpl$composable(_this__u8e3s4, visible, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty);
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
      tmp0_safe_receiver.z28(AnimatedVisibility$composable$lambda_3(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.q9h_1 = transition;
    this.r9h_1 = mutableStateOf(new IntSize(Companion_getInstance_3().z36_1));
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_getInstance();
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedEnterExitImpl$composable(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(704138694);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl$composable)P(4,5,3,1,2)734@39380L85,739@39603L116,743@39761L270,743@39729L302,752@40041L165:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(transition) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(visible) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(enter) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(exit) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(704138694, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable (AnimatedVisibility.kt:726)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.y1t(transition);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        var value = mutableStateOf(visible(transition.c8z()));
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var isAnimationVisible = tmp0;
      if ((visible(transition.q8x()) ? true : isAnimationVisible.s()) ? true : transition.l8y()) {
        // Inline function 'androidx.compose.animation.core.createChildTransition$composable' call
        var tmp3_createChildTransition$composable = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_2 = $composer_0;
        $composer_2.m1r(-1355654750);
        sourceInformation($composer_2, 'CC(createChildTransition$composable)786@31174L36,787@31234L74,788@31331L39,789@31382L63:Transition.kt#pdpnli');
        if (!(0 === 0))
          label = 'ChildTransition';
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_2;
        $composer_3.m1r(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_3.y1t(transition);
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_3.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.animation.core.createChildTransition$composable.<anonymous>' call
          var value_0 = transition.c8z();
          $composer_3.x1t(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = tmp0_let_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        $composer_3.o1r();
        var initialParentState = tmp0_0;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        var tmp4_anonymous = transition.l8y() ? transition.c8z() : initialParentState;
        var tmp6_anonymous = 112 & tmp3_createChildTransition$composable >> 3;
        var $composer_4 = $composer_2;
        $composer_4.m1r(-1220581778);
        sourceInformation($composer_4, 'C740@39681L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-1220581778, tmp6_anonymous, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous> (AnimatedVisibility.kt:739)');
        }
        var tmp0_1 = targetEnterExit$composable(transition, visible, tmp4_anonymous, $composer_4, 14 & $dirty | 112 & $dirty | 896 & tmp6_anonymous << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_4.o1r();
        var initialState = tmp0_1;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
        var tmp7_anonymous = transition.q8x();
        var tmp9_anonymous = 112 & tmp3_createChildTransition$composable >> 3;
        var $composer_5 = $composer_2;
        $composer_5.m1r(-1220581778);
        sourceInformation($composer_5, 'C740@39681L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-1220581778, tmp9_anonymous, -1, 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous> (AnimatedVisibility.kt:739)');
        }
        var tmp0_2 = targetEnterExit$composable(transition, visible, tmp7_anonymous, $composer_5, 14 & $dirty | 112 & $dirty | 896 & tmp9_anonymous << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_5.o1r();
        var targetState = tmp0_2;
        var tmp0_3 = createChildTransitionInternal$composable(transition, initialState, targetState, label, $composer_2, 14 & tmp3_createChildTransition$composable | 7168 & tmp3_createChildTransition$composable << 6);
        $composer_2.o1r();
        var childTransition = tmp0_3;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_0;
        $composer_6.m1r(-1124426577);
        sourceInformation($composer_6, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = !!($composer_6.y1t(childTransition) | $composer_6.y1t(isAnimationVisible));
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = $composer_6.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
          var value_1 = AnimatedEnterExitImpl$composable$slambda_0(childTransition, isAnimationVisible, null);
          $composer_6.x1t(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = tmp0_let_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_4 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        $composer_6.o1r();
        LaunchedEffect$composable(childTransition, tmp0_4, $composer_0, 0);
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable' call
        var tmp12_AnimatedEnterExitImpl$composable = 112 & $dirty >> 3 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3;
        var $composer_7 = $composer_0;
        $composer_7.m1r(2042374348);
        sourceInformation($composer_7, 'CC(AnimatedEnterExitImpl$composable)P(4,3,1,2)777@40847L64,780@41019L39,781@41089L50,778@40920L229:AnimatedVisibility.kt#xbi5r1');
        if (childTransition.c8z().equals(EnterExitState_Visible_getInstance()) ? true : childTransition.q8x().equals(EnterExitState_Visible_getInstance())) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_8 = $composer_7;
          $composer_8.m1r(-838505973);
          sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_2 = $composer_8.y1t(childTransition);
          // Inline function 'kotlin.let' call
          var tmp0_let_2 = $composer_8.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_5;
          if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
            var value_2 = new AnimatedVisibilityScopeImpl(childTransition);
            $composer_8.x1t(value_2);
            tmp_5 = value_2;
          } else {
            tmp_5 = tmp0_let_2;
          }
          var tmp_6 = tmp_5;
          var tmp0_5 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
          $composer_8.o1r();
          var scope = tmp0_5;
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var tmp3_Layout$composable = modifier.n5f(createModifier$composable(childTransition, enter, exit, 'Built-in', $composer_7, 3072 | 14 & tmp12_AnimatedEnterExitImpl$composable | 112 & tmp12_AnimatedEnterExitImpl$composable >> 3 | 896 & tmp12_AnimatedEnterExitImpl$composable >> 3));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_9 = $composer_7;
          $composer_9.m1r(547886695);
          sourceInformation($composer_9, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let_3 = $composer_9.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_7;
          if (false ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            $composer_9.x1t(value_3);
            tmp_7 = value_3;
          } else {
            tmp_7 = tmp0_let_3;
          }
          var tmp_8 = tmp_7;
          var tmp0_6 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
          $composer_9.o1r();
          var modifier_0 = tmp3_Layout$composable;
          var $composer_10 = $composer_7;
          $composer_10.m1r(1725976829);
          sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
          if (!(0 === 0))
            modifier_0 = Companion_getInstance();
          var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_10, 0);
          var localMap = $composer_10.f1u();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var tmp0_ReusableComposeNode$composable = Companion_getInstance_2().s6s_1;
          var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
          var $composer_11 = $composer_10;
          var tmp_9 = $composer_11.z1s();
          if (!isInterface(tmp_9, Applier)) {
            invalidApplier();
          }
          $composer_11.p1t();
          if ($composer_11.a1t()) {
            $composer_11.q1t(tmp0_ReusableComposeNode$composable);
          } else {
            $composer_11.r1t();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_11);
          Updater__set_impl_v7kwss(tmp4_anonymous_0, tmp0_6, Companion_getInstance_2().x6s_1);
          Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap, Companion_getInstance_2().w6s_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var tmp0_set = Companion_getInstance_2().a6t_1;
          // Inline function 'kotlin.with' call
          var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
          // Inline function 'kotlin.contracts.contract' call
          var tmp_10;
          if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
            tmp0_with.x1t(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash, tmp0_set);
            tmp_10 = Unit_getInstance();
          }
          tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_11)), $composer_11, 112 & 6 >> 3);
          $composer_11.m1r(2058660585);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl$composable.<anonymous>' call
          var $composer_12 = $composer_11;
          sourceInformationMarkerStart($composer_12, 699977616, 'C779@40958L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_12, 8 | 112 & tmp12_AnimatedEnterExitImpl$composable >> 9);
          sourceInformationMarkerEnd($composer_12);
          $composer_11.o1r();
          $composer_11.s1t();
          $composer_10.o1r();
        }
        $composer_7.o1r();
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
      tmp0_safe_receiver.z28(AnimatedEnterExitImpl$composable$lambda(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  function targetEnterExit$composable(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(409529084);
    sourceInformation($composer_0, 'C(targetEnterExit$composable)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(409529084, $changed, -1, 'androidx.compose.animation.targetEnterExit$composable (AnimatedVisibility.kt:830)');
    }
    $composer_0.d1t(1486622691, _this__u8e3s4);
    sourceInformation($composer_0, '846@43297L34');
    var tmp;
    if (_this__u8e3s4.l8y()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.c8z())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.targetEnterExit$composable.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_1.x1t(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_1.o1r();
      var hasBeenVisible = tmp0;
      if (visible(_this__u8e3s4.c8z())) {
        hasBeenVisible.f1d(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.s()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp1 = tmp;
    $composer_0.e1t();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp1;
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $placeables.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $placeables.m(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.f6y(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitMeasurePolicy$minIntrinsicWidth$lambda($height) {
    return function (it) {
      return it.q5n($height);
    };
  }
  function AnimatedEnterExitMeasurePolicy$minIntrinsicHeight$lambda($width) {
    return function (it) {
      return it.s5n($width);
    };
  }
  function AnimatedEnterExitMeasurePolicy$maxIntrinsicWidth$lambda($height) {
    return function (it) {
      return it.r5n($height);
    };
  }
  function AnimatedEnterExitMeasurePolicy$maxIntrinsicHeight$lambda($width) {
    return function (it) {
      return it.t5n($width);
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.v9h_1 = scope;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).e6w = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(measurables, 10));
    var tmp0_iterator = measurables.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      tmp$ret$0 = item.w5h(constraints);
      tmp0_mapTo.a(tmp$ret$0);
    }
    var placeables = tmp0_mapTo;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.l()) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var maxElem = placeables.m(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue = maxElem.x5h_1;
      var inductionVariable = 1;
      var last = get_lastIndex_0(placeables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = placeables.m(i);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v = e.x5h_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last));
      tmp$ret$3 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x5h_1;
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.l()) {
        tmp$ret$6 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.m(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue_0 = maxElem_0.y5h_1;
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex_0(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e_0 = placeables.m(i_0);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v_0 = e_0.y5h_1;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_0));
      tmp$ret$6 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$6;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y5h_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    this.v9h_1.r9h_1.f1d(new IntSize(IntSize_0(maxWidth, maxHeight)));
    return _this__u8e3s4.d5i(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).f6w = function (_this__u8e3s4, measurables, height) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedEnterExitMeasurePolicy$minIntrinsicWidth$lambda(height)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).g6w = function (_this__u8e3s4, measurables, width) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedEnterExitMeasurePolicy$minIntrinsicHeight$lambda(width)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).h6w = function (_this__u8e3s4, measurables, height) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedEnterExitMeasurePolicy$maxIntrinsicWidth$lambda(height)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).i6w = function (_this__u8e3s4, measurables, width) {
    var tmp = asSequence(measurables);
    var tmp0_elvis_lhs = maxOrNull(map(tmp, AnimatedEnterExitMeasurePolicy$maxIntrinsicHeight$lambda(width)));
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  function AnimatedVisibility$composable$lambda(it) {
    return it;
  }
  function AnimatedVisibility$composable$lambda_0($this_AnimatedVisibility$composable, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility$composable($this_AnimatedVisibility$composable, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibility$composable$lambda_1(it) {
    return it;
  }
  function AnimatedVisibility$composable$lambda_2($this_AnimatedVisibility$composable, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility$composable_0($this_AnimatedVisibility$composable, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibility$composable$lambda_3($this_AnimatedVisibility$composable, $visible, $modifier, $enter, $exit, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility$composable_1($this_AnimatedVisibility$composable, $visible, $modifier._v, $enter._v, $exit._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.w9h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.w9h_1(value, $completion);
  };
  function AnimatedEnterExitImpl$composable$slambda$lambda($childTransition) {
    return function () {
      return $childTransition.c8z().equals(EnterExitState_Visible_getInstance()) ? true : $childTransition.q8x().equals(EnterExitState_Visible_getInstance());
    };
  }
  function AnimatedEnterExitImpl$composable$slambda$slambda($isAnimationVisible, resultContinuation) {
    this.f9i_1 = $isAnimationVisible;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).h9i = function (it, $completion) {
    var tmp = this.i9i(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.h9i((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          this.f9i_1.f1d(this.g9i_1);
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
  protoOf(AnimatedEnterExitImpl$composable$slambda$slambda).i9i = function (it, completion) {
    var i = new AnimatedEnterExitImpl$composable$slambda$slambda(this.f9i_1, completion);
    i.g9i_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$composable$slambda$slambda_0($isAnimationVisible, resultContinuation) {
    var i = new AnimatedEnterExitImpl$composable$slambda$slambda($isAnimationVisible, resultContinuation);
    var l = function (it, $completion) {
      return i.h9i(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$composable$slambda($childTransition, $isAnimationVisible, resultContinuation) {
    this.r9i_1 = $childTransition;
    this.s9i_1 = $isAnimationVisible;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$composable$slambda$lambda(this.r9i_1));
            var tmp_1 = AnimatedEnterExitImpl$composable$slambda$slambda_0(this.s9i_1, null);
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
  protoOf(AnimatedEnterExitImpl$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new AnimatedEnterExitImpl$composable$slambda(this.r9i_1, this.s9i_1, completion);
    i.t9i_1 = $this$LaunchedEffect;
    return i;
  };
  function AnimatedEnterExitImpl$composable$slambda_0($childTransition, $isAnimationVisible, resultContinuation) {
    var i = new AnimatedEnterExitImpl$composable$slambda($childTransition, $isAnimationVisible, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$composable$lambda($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl$composable($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function LayoutModifierWithPassThroughIntrinsics() {
  }
  protoOf(LayoutModifierWithPassThroughIntrinsics).e5i = function (_this__u8e3s4, measurable, height) {
    return measurable.q5n(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).f5i = function (_this__u8e3s4, measurable, width) {
    return measurable.s5n(width);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).g5i = function (_this__u8e3s4, measurable, height) {
    return measurable.r5n(height);
  };
  protoOf(LayoutModifierWithPassThroughIntrinsics).h5i = function (_this__u8e3s4, measurable, width) {
    return measurable.t5n(width);
  };
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.y3w_1, ColorSpaces_getInstance().w40_1);
    var l = Color__component1_impl_lz80qe(tmp0_container);
    var a = Color__component2_impl_mg9n4l(tmp0_container);
    var b = Color__component3_impl_mxb9is(tmp0_container);
    var alpha = Color__component4_impl_necvwz(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      return new Color_0(Color__convert_impl_so5m8t(Color(coerceIn(vector.j8q_1, 0.0, 1.0), coerceIn(vector.k8q_1, -0.5, 0.5), coerceIn(vector.l8q_1, -0.5, 0.5), coerceIn(vector.i8q_1, 0.0, 1.0), ColorSpaces_getInstance().w40_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function Crossfade$composable(targetState, modifier, animationSpec, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var animationSpec_0 = {_v: animationSpec};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(502592471);
    sourceInformation($composer_0, 'C(Crossfade$composable)P(4,3!1,2)55@2280L36,56@2332L53:Crossfade.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(targetState) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(animationSpec_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(label_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        animationSpec_0._v = tween();
      }
      if (!(($default & 8) === 0)) {
        label_0._v = 'Crossfade';
      }
      if (isTraceInProgress()) {
        traceEventStart(502592471, $dirty, -1, 'androidx.compose.animation.Crossfade$composable (Crossfade.kt:48)');
      }
      var transition = updateTransition$composable(targetState, label_0._v, $composer_0, 8 & $dirty | 14 & $dirty | 112 & $dirty >> 6, 0);
      var tmp = modifier_0._v;
      var tmp_0 = animationSpec_0._v;
      Crossfade$composable_0(transition, tmp, tmp_0, null, content, $composer_0, 112 & $dirty | 896 & $dirty | 57344 & $dirty, 4);
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
      tmp0_safe_receiver.z28(Crossfade$composable$lambda(targetState, modifier_0, animationSpec_0, label_0, content, $changed, $default));
    }
  }
  function Crossfade$composable_0(_this__u8e3s4, modifier, animationSpec, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var animationSpec_0 = {_v: animationSpec};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1112437527);
    sourceInformation($composer_0, 'C(Crossfade$composable)P(3!1,2)100@4286L6,103@4375L64,104@4461L66,138@5750L159:Crossfade.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(animationSpec_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.d1u(contentKey_0._v) : false) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          animationSpec_0._v = tween();
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
          if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
            var value = Crossfade$composable$lambda_0;
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          contentKey_0._v = tmp0;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1112437527, $dirty, -1, 'androidx.compose.animation.Crossfade$composable (Crossfade.kt:97)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var tmp0_apply = mutableStateListOf_0();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>' call
        tmp0_apply.g23(_this__u8e3s4.c8z());
        var value_0 = tmp0_apply;
        $composer_2.x1t(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.o1r();
      var currentlyVisible = tmp0_0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
        // Inline function 'kotlin.collections.mutableMapOf' call
        var value_1 = LinkedHashMap_init_$Create$();
        $composer_3.x1t(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.o1r();
      var contentMap = tmp0_1;
      $composer_0.m1r(441741300);
      sourceInformation($composer_0, '111@4841L21');
      if (equals(_this__u8e3s4.c8z(), _this__u8e3s4.q8x())) {
        if (!(currentlyVisible.g() === 1) ? true : !equals(currentlyVisible.m(0), _this__u8e3s4.q8x())) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_4 = $composer_0;
          $composer_4.m1r(-838505973);
          sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_4.y1t(_this__u8e3s4);
          // Inline function 'kotlin.let' call
          var tmp0_let_2 = $composer_4.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_5;
          if (tmp1_cache ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
            var value_2 = Crossfade$composable$lambda_1(_this__u8e3s4);
            $composer_4.x1t(value_2);
            tmp_5 = value_2;
          } else {
            tmp_5 = tmp0_let_2;
          }
          var tmp_6 = tmp_5;
          var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
          $composer_4.o1r();
          removeAll(currentlyVisible, tmp0_2);
          contentMap.a4();
        }
      }
      $composer_0.o1r();
      // Inline function 'kotlin.collections.contains' call
      var tmp5_contains = _this__u8e3s4.q8x();
      // Inline function 'kotlin.collections.containsKey' call
      if (!(isInterface(contentMap, Map) ? contentMap : THROW_CCE()).t2(tmp5_contains)) {
        var tmp$ret$25;
        $l$block: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var tmp0_iterator = currentlyVisible.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
            if (equals(contentKey_0._v(item), contentKey_0._v(_this__u8e3s4.q8x()))) {
              tmp$ret$25 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$25 = -1;
        }
        var replacementId = tmp$ret$25;
        if (replacementId === -1) {
          currentlyVisible.g23(_this__u8e3s4.q8x());
        } else {
          currentlyVisible.s2l(replacementId, _this__u8e3s4.q8x());
        }
        contentMap.a4();
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = currentlyVisible.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_0 = currentlyVisible.m(index_0);
            // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>' call
            var tmp_7 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_7, -1426421288, true, Crossfade$composable$lambda_2($dirty, _this__u8e3s4, item_0, content, animationSpec_0));
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var $composer_5 = $composer_0;
            $composer_5.m1r(-838505973);
            sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache_0 = $composer_5.y1t(dispatchReceiver);
            // Inline function 'kotlin.let' call
            var tmp0_let_3 = $composer_5.w1t();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_8;
            if (tmp1_cache_0 ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
              // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous>' call
              var value_3 = ComposableLambda$invoke$ref_1(dispatchReceiver);
              $composer_5.x1t(value_3);
              tmp_8 = value_3;
            } else {
              tmp_8 = tmp0_let_3;
            }
            var tmp_9 = tmp_8;
            var tmp0_3 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
            $composer_5.o1r();
            contentMap.a5(item_0, tmp0_3);
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp10_Box$composable = 14 & $dirty >> 3;
      var modifier_1 = modifier_0._v;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_0;
      $composer_6.m1r(1330882304);
      sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_1().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 14 & tmp10_Box$composable >> 3 | 112 & tmp10_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_1;
      var tmp2_Layout$composable = 112 & tmp10_Box$composable << 3;
      var modifier_2 = tmp0_Layout$composable;
      var $composer_7 = $composer_6;
      $composer_7.m1r(1725976829);
      sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
      var localMap = $composer_7.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_2().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_8 = $composer_7;
      var tmp_10 = $composer_8.z1s();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_8.p1t();
      if ($composer_8.a1t()) {
        $composer_8.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_8.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_2().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_2().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_2().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_11;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_11 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_8.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1301276945, 'C:Crossfade.kt#xbi5r1');
      $composer_10.m1r(441742559);
      sourceInformation($composer_10, '');
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = currentlyVisible.g() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_1 = currentlyVisible.m(index_1);
          // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>' call
          $composer_10.d1t(-1559457861, contentKey_0._v(item_1));
          sourceInformation($composer_10, '141@5871L8');
          var tmp0_safe_receiver = contentMap.z2(item_1);
          tmp0_safe_receiver == null || tmp0_safe_receiver($composer_10, 0);
          $composer_10.e1t();
        }
         while (inductionVariable_0 <= last_0);
      $composer_10.o1r();
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.o1r();
      $composer_8.s1t();
      $composer_7.o1r();
      $composer_6.o1r();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_safe_receiver_0 = $composer_0.i1t();
    if (tmp0_safe_receiver_0 === null)
      null;
    else {
      tmp0_safe_receiver_0.z28(Crossfade$composable$lambda_3(_this__u8e3s4, modifier_0, animationSpec_0, contentKey_0, content, $changed, $default));
    }
  }
  function Crossfade$composable$_anonymous_$_anonymous_$_anonymous_$lambda$0_l7pshz($alpha$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $alpha$delegate.s();
  }
  function Crossfade$composable$lambda($targetState, $modifier, $animationSpec, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Crossfade$composable($targetState, $modifier._v, $animationSpec._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Crossfade$composable$lambda_0(it) {
    return it;
  }
  function Crossfade$composable$lambda_1($this_Crossfade$composable) {
    return function (it) {
      return !equals(it, $this_Crossfade$composable.q8x());
    };
  }
  function Crossfade$composable$lambda$lambda($animationSpec) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(438406499);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(438406499, $changed, -1, 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous> (Crossfade.kt:129)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $animationSpec._v;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0;
    };
  }
  function Crossfade$composable$lambda$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function Crossfade$composable$lambda$lambda_1($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function Crossfade$composable$lambda$lambda_2($alpha$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.g3y(Crossfade$composable$_anonymous_$_anonymous_$_anonymous_$lambda$0_l7pshz($alpha$delegate));
      return Unit_getInstance();
    };
  }
  function Crossfade$composable$lambda_2($$dirty, $this_Crossfade$composable, $item, $content, $animationSpec) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C128@5454L128,131@5626L22,131@5599L115:Crossfade.kt#xbi5r1');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1426421288, $changed, -1, 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous> (Crossfade.kt:127)');
        }
        var tmp$ret$3;
        // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
        var tmp0_animateFloat$composable = Crossfade$composable$lambda$lambda($animationSpec);
        var tmp1_animateFloat$composable = null;
        var tmp2_animateFloat$composable = $composer_0;
        var tmp3_animateFloat$composable = 14 & $$dirty;
        var transitionSpec = tmp0_animateFloat$composable;
        var label = tmp1_animateFloat$composable;
        var $composer_1 = tmp2_animateFloat$composable;
        $composer_1.m1r(1610198356);
        sourceInformation($composer_1, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
        if (!(0 === 0)) {
          transitionSpec = Crossfade$composable$lambda$lambda_0;
        }
        if (!(2 === 0))
          label = 'FloatAnimation';
        var tmp$ret$2;
        // Inline function 'androidx.compose.animation.core.animateValue$composable' call
        var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
        var tmp1_animateValue$composable = transitionSpec;
        var tmp2_animateValue$composable = label;
        var tmp3_animateValue$composable = $composer_1;
        var tmp4_animateValue$composable = 14 & tmp3_animateFloat$composable | 896 & tmp3_animateFloat$composable << 3 | 7168 & tmp3_animateFloat$composable << 3 | 57344 & tmp3_animateFloat$composable << 3;
        var transitionSpec_0 = tmp1_animateValue$composable;
        var label_0 = tmp2_animateValue$composable;
        var $composer_2 = tmp3_animateValue$composable;
        $composer_2.m1r(-1940744337);
        sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
        if (!(0 === 0)) {
          transitionSpec_0 = Crossfade$composable$lambda$lambda_1;
        }
        if (!(0 === 0))
          label_0 = 'ValueAnimation';
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous = $this_Crossfade$composable.c8z();
        var tmp5_anonymous = $composer_2;
        var tmp6_anonymous = 112 & tmp4_animateValue$composable >> 9;
        var $composer_3 = tmp5_anonymous;
        $composer_3.m1r(-438678252);
        sourceInformation($composer_3, 'C:Crossfade.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-438678252, tmp6_anonymous, -1, 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous> (Crossfade.kt:130)');
        }
        var tmp0 = equals(tmp4_anonymous, $item) ? 1.0 : 0.0;
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.o1r();
        tmp$ret$0 = tmp0;
        var initialValue = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp7_anonymous = $this_Crossfade$composable.q8x();
        var tmp8_anonymous = $composer_2;
        var tmp9_anonymous = 112 & tmp4_animateValue$composable >> 9;
        var $composer_4 = tmp8_anonymous;
        $composer_4.m1r(-438678252);
        sourceInformation($composer_4, 'C:Crossfade.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-438678252, tmp9_anonymous, -1, 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous> (Crossfade.kt:130)');
        }
        var tmp0_0 = equals(tmp7_anonymous, $item) ? 1.0 : 0.0;
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_4.o1r();
        tmp$ret$1 = tmp0_0;
        var targetValue = tmp$ret$1;
        var animationSpec = transitionSpec_0($this_Crossfade$composable.m8y(), $composer_2, 112 & tmp4_animateValue$composable >> 3);
        var tmp0_1 = createTransitionAnimation$composable($this_Crossfade$composable, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_0, $composer_2, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
        $composer_2.o1r();
        tmp$ret$2 = tmp0_1;
        var tmp0_2 = tmp$ret$2;
        $composer_1.o1r();
        tmp$ret$3 = tmp0_2;
        var alpha$delegate = tmp$ret$3;
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = Companion_getInstance();
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp10_remember$composable = $composer_0;
        var $composer_5 = tmp10_remember$composable;
        $composer_5.m1r(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_5;
        var tmp1_cache = $composer_5.y1t(alpha$delegate);
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$4 = Crossfade$composable$lambda$lambda_2(alpha$delegate);
          var value = tmp$ret$4;
          tmp0_cache.x1t(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$5 = tmp_1;
        tmp$ret$6 = tmp$ret$5;
        var tmp_2 = tmp$ret$6;
        tmp$ret$7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0_3 = tmp$ret$7;
        $composer_5.o1r();
        tmp$ret$8 = tmp0_3;
        var tmp11_Box$composable = graphicsLayer(tmp_0, tmp$ret$8);
        var tmp12_Box$composable = null;
        var tmp13_Box$composable = false;
        var tmp14_Box$composable = $composer_0;
        var modifier = tmp11_Box$composable;
        var contentAlignment = tmp12_Box$composable;
        var propagateMinConstraints = tmp13_Box$composable;
        var $composer_6 = tmp14_Box$composable;
        $composer_6.m1r(1330882304);
        sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_1().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_6;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_7 = tmp1_Layout$composable;
        $composer_7.m1r(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap = $composer_7.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_2().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_7;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_8 = tmp2_ReusableComposeNode$composable;
        var tmp_3 = $composer_8.z1s();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.p1t();
        if ($composer_8.a1t()) {
          $composer_8.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_8.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy, Companion_getInstance_2().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap, Companion_getInstance_2().w6s_1);
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_2().a6t_1;
        var tmp$ret$9;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_4;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash, tmp0_set);
          tmp_4 = Unit_getInstance();
        }
        tmp$ret$9 = tmp_4;
        tmp$ret$10 = tmp$ret$9;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_8.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_8;
        var tmp4_anonymous_1 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_9 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.animation.Crossfade$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp15_anonymous = BoxScopeInstance_getInstance();
        var tmp16_anonymous = $composer_9;
        var tmp17_anonymous = 6;
        var $composer_10 = tmp16_anonymous;
        sourceInformationMarkerStart($composer_10, -182706613, 'C132@5672L24:Crossfade.kt#xbi5r1');
        $content($item, $composer_10, 112 & $$dirty >> 9);
        sourceInformationMarkerEnd($composer_10);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.o1r();
        $composer_8.s1t();
        $composer_7.o1r();
        $composer_6.o1r();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
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
  function Crossfade$composable$lambda_3($this_Crossfade$composable, $modifier, $animationSpec, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Crossfade$composable_0($this_Crossfade$composable, $modifier._v, $animationSpec._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlpha() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function Companion() {
    Companion_instance = this;
    this.s9h_1 = new ExitTransitionImpl(new TransitionData());
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ExitTransition() {
    Companion_getInstance_7();
    this.t9h_1 = 0;
  }
  protoOf(ExitTransition).u9h = function (exit) {
    var tmp0_elvis_lhs = this.a8z().u9i_1;
    var tmp = tmp0_elvis_lhs == null ? exit.a8z().u9i_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.a8z().v9i_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.a8z().v9i_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.a8z().w9i_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.a8z().w9i_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.a8z().x9i_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.a8z().x9i_1 : tmp3_elvis_lhs));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.a8z().equals(this.a8z());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_7().s9h_1)) {
      tmp = 'ExitTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var tmp0_run = this.a8z();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.u9i_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.v9i_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.w9i_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.x9i_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.a8z().hashCode();
  };
  function fadeOut(animationSpec, targetAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.y9i_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_8();
    this.l9h_1 = 0;
  }
  protoOf(EnterTransition).m9h = function (enter) {
    var tmp0_elvis_lhs = this.a8z().u9i_1;
    var tmp = tmp0_elvis_lhs == null ? enter.a8z().u9i_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.a8z().v9i_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.a8z().v9i_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.a8z().w9i_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.a8z().w9i_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.a8z().x9i_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.a8z().x9i_1 : tmp3_elvis_lhs));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_8().y9i_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var tmp0_run = this.a8z();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.u9i_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.v9i_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.w9i_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.x9i_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.a8z().equals(this.a8z());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.a8z().hashCode();
  };
  function scaleIn(animationSpec, initialScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialScale = initialScale === VOID ? 0.0 : initialScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_4().n5x_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(initialScale, transformOrigin, animationSpec)));
  }
  function fadeIn(animationSpec, initialAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function TransitionData(fade, slide, changeSize, scale) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    this.u9i_1 = fade;
    this.v9i_1 = slide;
    this.w9i_1 = changeSize;
    this.x9i_1 = scale;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.u9i_1 + ', slide=' + this.v9i_1 + ', changeSize=' + this.w9i_1 + ', scale=' + this.x9i_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.u9i_1 == null ? 0 : this.u9i_1.hashCode();
    result = imul(result, 31) + (this.v9i_1 == null ? 0 : this.v9i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.w9i_1 == null ? 0 : this.w9i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x9i_1 == null ? 0 : this.x9i_1.hashCode()) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.u9i_1, tmp0_other_with_cast.u9i_1))
      return false;
    if (!equals(this.v9i_1, tmp0_other_with_cast.v9i_1))
      return false;
    if (!equals(this.w9i_1, tmp0_other_with_cast.w9i_1))
      return false;
    if (!equals(this.x9i_1, tmp0_other_with_cast.x9i_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.a9j_1 = data;
  }
  protoOf(ExitTransitionImpl).a8z = function () {
    return this.a9j_1;
  };
  function Fade(alpha, animationSpec) {
    this.b9j_1 = alpha;
    this.c9j_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.b9j_1 + ', animationSpec=' + this.c9j_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.b9j_1);
    result = imul(result, 31) + hashCode(this.c9j_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.b9j_1, tmp0_other_with_cast.b9j_1))
      return false;
    if (!equals(this.c9j_1, tmp0_other_with_cast.c9j_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.d9j_1 = alignment;
    this.e9j_1 = size;
    this.f9j_1 = animationSpec;
    this.g9j_1 = clip;
  }
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.d9j_1 + ', size=' + this.e9j_1 + ', animationSpec=' + this.f9j_1 + ', clip=' + this.g9j_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.d9j_1);
    result = imul(result, 31) + hashCode(this.e9j_1) | 0;
    result = imul(result, 31) + hashCode(this.f9j_1) | 0;
    result = imul(result, 31) + (this.g9j_1 | 0) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.d9j_1, tmp0_other_with_cast.d9j_1))
      return false;
    if (!equals(this.e9j_1, tmp0_other_with_cast.e9j_1))
      return false;
    if (!equals(this.f9j_1, tmp0_other_with_cast.f9j_1))
      return false;
    if (!(this.g9j_1 === tmp0_other_with_cast.g9j_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.h9j_1 = scale;
    this.i9j_1 = transformOrigin;
    this.j9j_1 = animationSpec;
  }
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.h9j_1 + ', transformOrigin=' + new TransformOrigin(this.i9j_1) + ', animationSpec=' + this.j9j_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.h9j_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.i9j_1) | 0;
    result = imul(result, 31) + hashCode(this.j9j_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.h9j_1, tmp0_other_with_cast.h9j_1))
      return false;
    if (!equals(this.i9j_1, tmp0_other_with_cast.i9j_1))
      return false;
    if (!equals(this.j9j_1, tmp0_other_with_cast.j9j_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.l9j_1 = data;
  }
  protoOf(EnterTransitionImpl).a8z = function () {
    return this.l9j_1;
  };
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_1().z5e_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialHeight === VOID) {
      tmp_0 = expandVertically$lambda;
    } else {
      tmp_0 = initialHeight;
    }
    initialHeight = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_1, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_1().z5e_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetHeight === VOID) {
      tmp_0 = shrinkVertically$lambda;
    } else {
      tmp_0 = targetHeight;
    }
    targetHeight = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_1, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_1().w5e_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialSize === VOID) {
      tmp_0 = expandIn$lambda;
    } else {
      tmp_0 = initialSize;
    }
    initialSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_1().w5e_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetSize === VOID) {
      tmp_0 = shrinkOut$lambda;
    } else {
      tmp_0 = targetSize;
    }
    targetSize = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function createModifier$composable(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(814792410);
    sourceInformation($composer_0, 'C(createModifier$composable)831@36300L38,832@36348L37,836@36443L43,837@36496L42,844@36867L40,845@36938L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(814792410, $changed, -1, 'androidx.compose.animation.createModifier$composable (EnterExitTransition.kt:819)');
    }
    var modifier = Companion_getInstance();
    modifier = shrinkExpand(slideInOut(modifier, _this__u8e3s4, rememberUpdatedState$composable(enter.a8z().v9i_1, $composer_0, 0), rememberUpdatedState$composable(exit.a8z().v9i_1, $composer_0, 0), label), _this__u8e3s4, rememberUpdatedState$composable(enter.a8z().w9i_1, $composer_0, 0), rememberUpdatedState$composable(exit.a8z().w9i_1, $composer_0, 0), label);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var shouldAnimateAlpha$delegate = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2.y1t(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var value_0 = mutableStateOf(false);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    var shouldAnimateScale$delegate = tmp0_0;
    if (_this__u8e3s4.c8z().equals(_this__u8e3s4.q8x()) ? !_this__u8e3s4.l8y() : false) {
      createModifier$composable$lambda_0(shouldAnimateAlpha$delegate, false);
      createModifier$composable$lambda_2(shouldAnimateScale$delegate, false);
    } else {
      if (!(enter.a8z().u9i_1 == null) ? true : !(exit.a8z().u9i_1 == null)) {
        createModifier$composable$lambda_0(shouldAnimateAlpha$delegate, true);
      }
      if (!(enter.a8z().x9i_1 == null) ? true : !(exit.a8z().x9i_1 == null)) {
        createModifier$composable$lambda_2(shouldAnimateScale$delegate, true);
      }
    }
    $composer_0.m1r(1760095428);
    sourceInformation($composer_0, '869@37922L27,859@37401L796');
    var tmp_3;
    if (createModifier$composable$lambda(shouldAnimateAlpha$delegate)) {
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp5_animateFloat$composable = createModifier$composable$lambda_6(enter, exit);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        var value_1 = label + ' alpha';
        $composer_3.x1t(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      var tmp_5 = tmp_4;
      var tmp0_1 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_3.o1r();
      var tmp8_animateFloat$composable = 14 & $changed;
      var transitionSpec = tmp5_animateFloat$composable;
      var label_0 = tmp0_1;
      var $composer_4 = $composer_0;
      $composer_4.m1r(1610198356);
      sourceInformation($composer_4, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = createModifier$composable$lambda_7;
      }
      if (!(0 === 0))
        label_0 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var tmp4_animateValue$composable = 14 & tmp8_animateFloat$composable | 896 & tmp8_animateFloat$composable << 3 | 7168 & tmp8_animateFloat$composable << 3 | 57344 & tmp8_animateFloat$composable << 3;
      var transitionSpec_0 = transitionSpec;
      var label_1 = label_0;
      var $composer_5 = $composer_4;
      $composer_5.m1r(-1940744337);
      sourceInformation($composer_5, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = createModifier$composable$lambda_8;
      }
      if (!(0 === 0))
        label_1 = 'ValueAnimation';
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp9_anonymous = _this__u8e3s4.c8z();
      var tmp11_anonymous = 112 & tmp4_animateValue$composable >> 9;
      var $composer_6 = $composer_5;
      $composer_6.m1r(755689166);
      sourceInformation($composer_6, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(755689166, tmp11_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:870)');
      }
      var tmp_6;
      switch (tmp9_anonymous.h7_1) {
        case 1:
          tmp_6 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = enter.a8z().u9i_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b9j_1;
          tmp_6 = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = exit.a8z().u9i_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.b9j_1;
          tmp_6 = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_2 = tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_6.o1r();
      var initialValue = tmp0_2;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp12_anonymous = _this__u8e3s4.q8x();
      var tmp14_anonymous = 112 & tmp4_animateValue$composable >> 9;
      var $composer_7 = $composer_5;
      $composer_7.m1r(755689166);
      sourceInformation($composer_7, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(755689166, tmp14_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:870)');
      }
      var tmp_7;
      switch (tmp12_anonymous.h7_1) {
        case 1:
          tmp_7 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_0 = enter.a8z().u9i_1;
          var tmp2_elvis_lhs_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.b9j_1;
          tmp_7 = tmp2_elvis_lhs_0 == null ? 1.0 : tmp2_elvis_lhs_0;
          break;
        case 2:
          var tmp3_safe_receiver_0 = exit.a8z().u9i_1;
          var tmp4_elvis_lhs_0 = tmp3_safe_receiver_0 == null ? null : tmp3_safe_receiver_0.b9j_1;
          tmp_7 = tmp4_elvis_lhs_0 == null ? 1.0 : tmp4_elvis_lhs_0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_3 = tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.o1r();
      var targetValue = tmp0_3;
      var animationSpec = transitionSpec_0(_this__u8e3s4.m8y(), $composer_5, 112 & tmp4_animateValue$composable >> 3);
      var tmp0_4 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_1, $composer_5, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
      $composer_5.o1r();
      $composer_4.o1r();
      tmp_3 = tmp0_4;
    } else {
      tmp_3 = get_DefaultAlpha();
    }
    var tmp1_group = tmp_3;
    $composer_0.o1r();
    var alpha$delegate = tmp1_group;
    if (createModifier$composable$lambda_1(shouldAnimateScale$delegate)) {
      $composer_0.m1r(1760096328);
      sourceInformation($composer_0, '892@38813L27,882@38290L800,908@39583L536,921@40163L157');
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var tmp16_animateFloat$composable = createModifier$composable$lambda_9(enter, exit);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.m1r(547886695);
      sourceInformation($composer_8, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_8.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        var value_2 = label + ' scale';
        $composer_8.x1t(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_5 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_8.o1r();
      var tmp19_animateFloat$composable = 14 & $changed;
      var transitionSpec_1 = tmp16_animateFloat$composable;
      var label_2 = tmp0_5;
      var $composer_9 = $composer_0;
      $composer_9.m1r(1610198356);
      sourceInformation($composer_9, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_1 = createModifier$composable$lambda_10;
      }
      if (!(0 === 0))
        label_2 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable_0 = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var tmp4_animateValue$composable_0 = 14 & tmp19_animateFloat$composable | 896 & tmp19_animateFloat$composable << 3 | 7168 & tmp19_animateFloat$composable << 3 | 57344 & tmp19_animateFloat$composable << 3;
      var transitionSpec_2 = transitionSpec_1;
      var label_3 = label_2;
      var $composer_10 = $composer_9;
      $composer_10.m1r(-1940744337);
      sourceInformation($composer_10, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_2 = createModifier$composable$lambda_11;
      }
      if (!(0 === 0))
        label_3 = 'ValueAnimation';
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp20_anonymous = _this__u8e3s4.c8z();
      var tmp22_anonymous = 112 & tmp4_animateValue$composable_0 >> 9;
      var $composer_11 = $composer_10;
      $composer_11.m1r(-596129937);
      sourceInformation($composer_11, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-596129937, tmp22_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:893)');
      }
      var tmp_10;
      switch (tmp20_anonymous.h7_1) {
        case 1:
          tmp_10 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_1 = enter.a8z().x9i_1;
          var tmp2_elvis_lhs_1 = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.h9j_1;
          tmp_10 = tmp2_elvis_lhs_1 == null ? 1.0 : tmp2_elvis_lhs_1;
          break;
        case 2:
          var tmp3_safe_receiver_1 = exit.a8z().x9i_1;
          var tmp4_elvis_lhs_1 = tmp3_safe_receiver_1 == null ? null : tmp3_safe_receiver_1.h9j_1;
          tmp_10 = tmp4_elvis_lhs_1 == null ? 1.0 : tmp4_elvis_lhs_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_6 = tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_11.o1r();
      var initialValue_0 = tmp0_6;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp23_anonymous = _this__u8e3s4.q8x();
      var tmp25_anonymous = 112 & tmp4_animateValue$composable_0 >> 9;
      var $composer_12 = $composer_10;
      $composer_12.m1r(-596129937);
      sourceInformation($composer_12, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-596129937, tmp25_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:893)');
      }
      var tmp_11;
      switch (tmp23_anonymous.h7_1) {
        case 1:
          tmp_11 = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver_2 = enter.a8z().x9i_1;
          var tmp2_elvis_lhs_2 = tmp1_safe_receiver_2 == null ? null : tmp1_safe_receiver_2.h9j_1;
          tmp_11 = tmp2_elvis_lhs_2 == null ? 1.0 : tmp2_elvis_lhs_2;
          break;
        case 2:
          var tmp3_safe_receiver_2 = exit.a8z().x9i_1;
          var tmp4_elvis_lhs_2 = tmp3_safe_receiver_2 == null ? null : tmp3_safe_receiver_2.h9j_1;
          tmp_11 = tmp4_elvis_lhs_2 == null ? 1.0 : tmp4_elvis_lhs_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_7 = tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_12.o1r();
      var targetValue_0 = tmp0_7;
      var animationSpec_0 = transitionSpec_2(_this__u8e3s4.m8y(), $composer_10, 112 & tmp4_animateValue$composable_0 >> 3);
      var tmp0_8 = createTransitionAnimation$composable(_this__u8e3s4, initialValue_0, targetValue_0, animationSpec_0, tmp0_animateValue$composable_0, label_3, $composer_10, 14 & tmp4_animateValue$composable_0 | 57344 & tmp4_animateValue$composable_0 << 9 | 458752 & tmp4_animateValue$composable_0 << 6);
      $composer_10.o1r();
      $composer_9.o1r();
      var scale$delegate = tmp0_8;
      var tmp_12;
      if (_this__u8e3s4.c8z().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp0_safe_receiver = enter.a8z().x9i_1;
        var tmp2_elvis_lhs_3 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i9j_1;
        var tmp_13;
        var tmp_14 = tmp2_elvis_lhs_3;
        if ((tmp_14 == null ? null : new TransformOrigin(tmp_14)) == null) {
          var tmp1_safe_receiver_3 = exit.a8z().x9i_1;
          tmp_13 = tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3.i9j_1;
        } else {
          tmp_13 = tmp2_elvis_lhs_3;
        }
        tmp_12 = tmp_13;
      } else {
        var tmp3_safe_receiver_3 = exit.a8z().x9i_1;
        var tmp5_elvis_lhs = tmp3_safe_receiver_3 == null ? null : tmp3_safe_receiver_3.i9j_1;
        var tmp_15;
        var tmp_16 = tmp5_elvis_lhs;
        if ((tmp_16 == null ? null : new TransformOrigin(tmp_16)) == null) {
          var tmp4_safe_receiver = enter.a8z().x9i_1;
          tmp_15 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i9j_1;
        } else {
          tmp_15 = tmp5_elvis_lhs;
        }
        tmp_12 = tmp_15;
      }
      var transformOriginWhenVisible = tmp_12;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp26_animateValue$composable = get_TransformOriginVectorConverter();
      var tmp29_animateValue$composable = 3072 | 14 & $changed;
      var transitionSpec_3 = null;
      var label_4 = 'TransformOriginInterruptionHandling';
      var $composer_13 = $composer_0;
      $composer_13.m1r(-1940744337);
      sourceInformation($composer_13, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(2 === 0)) {
        transitionSpec_3 = createModifier$composable$lambda_12;
      }
      if (!(0 === 0))
        label_4 = 'ValueAnimation';
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp30_anonymous = _this__u8e3s4.c8z();
      var tmp32_anonymous = 112 & tmp29_animateValue$composable >> 9;
      var $composer_14 = $composer_13;
      $composer_14.m1r(-288165413);
      sourceInformation($composer_14, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-288165413, tmp32_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:911)');
      }
      var tmp_17;
      switch (tmp30_anonymous.h7_1) {
        case 1:
          tmp_17 = transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver_4 = enter.a8z().x9i_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver_4 == null ? null : tmp1_safe_receiver_4.i9j_1;
          var tmp_18;
          var tmp_19 = tmp3_elvis_lhs;
          if ((tmp_19 == null ? null : new TransformOrigin(tmp_19)) == null) {
            var tmp2_safe_receiver = exit.a8z().x9i_1;
            tmp_18 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i9j_1;
          } else {
            tmp_18 = tmp3_elvis_lhs;
          }

          tmp_17 = tmp_18;
          break;
        case 2:
          var tmp4_safe_receiver_0 = exit.a8z().x9i_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver_0 == null ? null : tmp4_safe_receiver_0.i9j_1;
          var tmp_20;
          var tmp_21 = tmp6_elvis_lhs;
          if ((tmp_21 == null ? null : new TransformOrigin(tmp_21)) == null) {
            var tmp5_safe_receiver = enter.a8z().x9i_1;
            tmp_20 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.i9j_1;
          } else {
            tmp_20 = tmp6_elvis_lhs;
          }

          tmp_17 = tmp_20;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp_17;
      var tmp_22;
      var tmp_23 = tmp7_elvis_lhs;
      if ((tmp_23 == null ? null : new TransformOrigin(tmp_23)) == null) {
        tmp_22 = Companion_getInstance_4().n5x_1;
      } else {
        tmp_22 = tmp7_elvis_lhs;
      }
      var tmp0_9 = tmp_22;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_14.o1r();
      var initialValue_1 = tmp0_9;
      // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
      var tmp33_anonymous = _this__u8e3s4.q8x();
      var tmp35_anonymous = 112 & tmp29_animateValue$composable >> 9;
      var $composer_15 = $composer_13;
      $composer_15.m1r(-288165413);
      sourceInformation($composer_15, 'C:EnterExitTransition.kt#xbi5r1');
      if (isTraceInProgress()) {
        traceEventStart(-288165413, tmp35_anonymous, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:911)');
      }
      var tmp_24;
      switch (tmp33_anonymous.h7_1) {
        case 1:
          tmp_24 = transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver_5 = enter.a8z().x9i_1;
          var tmp3_elvis_lhs_0 = tmp1_safe_receiver_5 == null ? null : tmp1_safe_receiver_5.i9j_1;
          var tmp_25;
          var tmp_26 = tmp3_elvis_lhs_0;
          if ((tmp_26 == null ? null : new TransformOrigin(tmp_26)) == null) {
            var tmp2_safe_receiver_0 = exit.a8z().x9i_1;
            tmp_25 = tmp2_safe_receiver_0 == null ? null : tmp2_safe_receiver_0.i9j_1;
          } else {
            tmp_25 = tmp3_elvis_lhs_0;
          }

          tmp_24 = tmp_25;
          break;
        case 2:
          var tmp4_safe_receiver_1 = exit.a8z().x9i_1;
          var tmp6_elvis_lhs_0 = tmp4_safe_receiver_1 == null ? null : tmp4_safe_receiver_1.i9j_1;
          var tmp_27;
          var tmp_28 = tmp6_elvis_lhs_0;
          if ((tmp_28 == null ? null : new TransformOrigin(tmp_28)) == null) {
            var tmp5_safe_receiver_0 = enter.a8z().x9i_1;
            tmp_27 = tmp5_safe_receiver_0 == null ? null : tmp5_safe_receiver_0.i9j_1;
          } else {
            tmp_27 = tmp6_elvis_lhs_0;
          }

          tmp_24 = tmp_27;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs_0 = tmp_24;
      var tmp_29;
      var tmp_30 = tmp7_elvis_lhs_0;
      if ((tmp_30 == null ? null : new TransformOrigin(tmp_30)) == null) {
        tmp_29 = Companion_getInstance_4().n5x_1;
      } else {
        tmp_29 = tmp7_elvis_lhs_0;
      }
      var tmp0_10 = tmp_29;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_15.o1r();
      var targetValue_1 = tmp0_10;
      var animationSpec_1 = transitionSpec_3(_this__u8e3s4.m8y(), $composer_13, 112 & tmp29_animateValue$composable >> 3);
      var tmp0_11 = createTransitionAnimation$composable(_this__u8e3s4, new TransformOrigin(initialValue_1), new TransformOrigin(targetValue_1), animationSpec_1, tmp26_animateValue$composable, label_4, $composer_13, 14 & tmp29_animateValue$composable | 57344 & tmp29_animateValue$composable << 9 | 458752 & tmp29_animateValue$composable << 6);
      $composer_13.o1r();
      var transformOrigin$delegate = tmp0_11;
      var tmp_31 = modifier;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_16 = $composer_0;
      $composer_16.m1r(-1058148781);
      sourceInformation($composer_16, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = !!(!!($composer_16.y1t(alpha$delegate) | $composer_16.y1t(scale$delegate)) | $composer_16.y1t(transformOrigin$delegate));
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_16.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_32;
      if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        var value_3 = createModifier$composable$lambda_13(alpha$delegate, scale$delegate, transformOrigin$delegate);
        $composer_16.x1t(value_3);
        tmp_32 = value_3;
      } else {
        tmp_32 = tmp0_let_3;
      }
      var tmp_33 = tmp_32;
      var tmp0_12 = (tmp_33 == null ? true : isObject(tmp_33)) ? tmp_33 : THROW_CCE();
      $composer_16.o1r();
      modifier = graphicsLayer(tmp_31, tmp0_12);
      $composer_0.o1r();
    } else if (createModifier$composable$lambda(shouldAnimateAlpha$delegate)) {
      $composer_0.m1r(1760098417);
      sourceInformation($composer_0, '928@40400L42');
      var tmp_34 = modifier;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_17 = $composer_0;
      $composer_17.m1r(-838505973);
      sourceInformation($composer_17, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_17.y1t(alpha$delegate);
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = $composer_17.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_35;
      if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.createModifier$composable.<anonymous>' call
        var value_4 = createModifier$composable$lambda_14(alpha$delegate);
        $composer_17.x1t(value_4);
        tmp_35 = value_4;
      } else {
        tmp_35 = tmp0_let_4;
      }
      var tmp_36 = tmp_35;
      var tmp0_13 = (tmp_36 == null ? true : isObject(tmp_36)) ? tmp_36 : THROW_CCE();
      $composer_17.o1r();
      modifier = graphicsLayer(tmp_34, tmp0_13);
      $composer_0.o1r();
    } else {
      $composer_0.m1r(1760098509);
      $composer_0.o1r();
    }
    var tmp0_14 = modifier;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_14;
  }
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    expandFrom = expandFrom === VOID ? Companion_getInstance_1().c5f_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (initialWidth === VOID) {
      tmp_0 = expandHorizontally$lambda;
    } else {
      tmp_0 = initialWidth;
    }
    initialWidth = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_1, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    var tmp;
    if (animationSpec === VOID) {
      Spring_getInstance();
      tmp = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_1().c5f_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp_0;
    if (targetWidth === VOID) {
      tmp_0 = shrinkHorizontally$lambda;
    } else {
      tmp_0 = targetWidth;
    }
    targetWidth = tmp_0;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_1 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_1, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_1().x5e_1) ? Companion_getInstance_1().p5e_1 : equals(_this__u8e3s4, Companion_getInstance_1().z5e_1) ? Companion_getInstance_1().v5e_1 : Companion_getInstance_1().s5e_1;
  }
  function shrinkExpand(_this__u8e3s4, transition, expand, shrink, labelPrefix) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return composed$composable(_this__u8e3s4, VOID, shrinkExpand$lambda(transition, expand, shrink, labelPrefix));
  }
  function slideInOut(_this__u8e3s4, transition, slideIn, slideOut, labelPrefix) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return composed$composable(_this__u8e3s4, VOID, slideInOut$lambda(transition, slideIn, slideOut, labelPrefix));
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_1().a5f_1) ? Companion_getInstance_1().r5e_1 : equals(_this__u8e3s4, Companion_getInstance_1().c5f_1) ? Companion_getInstance_1().t5e_1 : Companion_getInstance_1().s5e_1;
  }
  function ExpandShrinkModifier$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.y8y(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.o9j_1.s();
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f9j_1;
      } else if ($this$null.y8y(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.p9j_1.s();
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f9j_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function ExpandShrinkModifier$measure$lambda(this$0, $measuredSize) {
    return function (it) {
      return new IntSize(this$0.t9j(it, $measuredSize));
    };
  }
  function ExpandShrinkModifier$measure$lambda_0($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function ExpandShrinkModifier$measure$lambda_1(this$0, $measuredSize) {
    return function (it) {
      return new IntOffset(this$0.u9j(it, $measuredSize));
    };
  }
  function ExpandShrinkModifier$measure$lambda_2($placeable, $offset, $offsetDelta) {
    return function ($this$layout) {
      $this$layout.f6y($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0);
      return Unit_getInstance();
    };
  }
  function ExpandShrinkModifier(sizeAnimation, offsetAnimation, expand, shrink, alignment) {
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.m9j_1 = sizeAnimation;
    this.n9j_1 = offsetAnimation;
    this.o9j_1 = expand;
    this.p9j_1 = shrink;
    this.q9j_1 = alignment;
    this.r9j_1 = null;
    var tmp = this;
    tmp.s9j_1 = ExpandShrinkModifier$sizeTransitionSpec$lambda(this);
  }
  protoOf(ExpandShrinkModifier).t9j = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.o9j_1.s();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExpandShrinkModifier.sizeByState.<anonymous>' call
      tmp = tmp0_safe_receiver.e9j_1(new IntSize(fullSize)).a37_1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new IntSize(tmp_1)) == null) {
      tmp_0 = fullSize;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var preEnterSize = tmp_0;
    var tmp2_safe_receiver = this.p9j_1.s();
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExpandShrinkModifier.sizeByState.<anonymous>' call
      tmp_2 = tmp2_safe_receiver.e9j_1(new IntSize(fullSize)).a37_1;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp_3;
    var tmp_4 = tmp3_elvis_lhs;
    if ((tmp_4 == null ? null : new IntSize(tmp_4)) == null) {
      tmp_3 = fullSize;
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var postExitSize = tmp_3;
    var tmp_5;
    switch (targetState.h7_1) {
      case 1:
        tmp_5 = fullSize;
        break;
      case 0:
        tmp_5 = preEnterSize;
        break;
      case 2:
        tmp_5 = postExitSize;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_5;
  };
  protoOf(ExpandShrinkModifier).u9j = function (targetState, fullSize) {
    var tmp;
    if (this.r9j_1 == null) {
      tmp = Companion_getInstance_5().q36_1;
    } else if (this.q9j_1.s() == null) {
      tmp = Companion_getInstance_5().q36_1;
    } else if (equals(this.r9j_1, this.q9j_1.s())) {
      tmp = Companion_getInstance_5().q36_1;
    } else {
      var tmp_0;
      switch (targetState.h7_1) {
        case 1:
          tmp_0 = Companion_getInstance_5().q36_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_5().q36_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.p9j_1.s();
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.animation.ExpandShrinkModifier.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.e9j_1(new IntSize(fullSize)).a37_1;
            var targetOffset = ensureNotNull(this.q9j_1.s()).m5f(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.r9j_1).m5f(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
            tmp_1 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetOffset) - _IntOffset___get_x__impl__qiqr5o(currentOffset) | 0, _IntOffset___get_y__impl__2avpwj(targetOffset) - _IntOffset___get_y__impl__2avpwj(currentOffset) | 0);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_5().q36_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ExpandShrinkModifier).v5h = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.w5h(constraints);
    var measuredSize = IntSize_0(placeable.x5h_1, placeable.y5h_1);
    var currentSize = this.m9j_1.b8z(this.s9j_1, ExpandShrinkModifier$measure$lambda(this, measuredSize)).s().a37_1;
    var tmp = ExpandShrinkModifier$measure$lambda_0;
    var offsetDelta = this.n9j_1.b8z(tmp, ExpandShrinkModifier$measure$lambda_1(this, measuredSize)).s().o36_1;
    var tmp0_safe_receiver = this.r9j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m5f(measuredSize, currentSize, LayoutDirection_Ltr_getInstance());
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new IntOffset(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_5().q36_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var offset = tmp_0;
    var tmp_2 = _IntSize___get_width__impl__d9yl4o(currentSize);
    var tmp_3 = _IntSize___get_height__impl__prv63b(currentSize);
    return _this__u8e3s4.d5i(tmp_2, tmp_3, VOID, ExpandShrinkModifier$measure$lambda_2(placeable, offset, offsetDelta));
  };
  function SlideModifier$transitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.y8y(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.w9j_1.s();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a9k_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.y8y(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.x9j_1.s();
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.a9k_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function SlideModifier$measure$lambda$lambda(this$0, $measuredSize) {
    return function (it) {
      return new IntOffset(this$0.b9k(it, $measuredSize));
    };
  }
  function SlideModifier$measure$lambda(this$0, $placeable, $measuredSize) {
    return function ($this$layout) {
      var slideOffset = this$0.v9j_1.b8z(this$0.y9j_1, SlideModifier$measure$lambda$lambda(this$0, $measuredSize));
      $this$layout.m6y($placeable, slideOffset.s().o36_1);
      return Unit_getInstance();
    };
  }
  function SlideModifier(lazyAnimation, slideIn, slideOut) {
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.v9j_1 = lazyAnimation;
    this.w9j_1 = slideIn;
    this.x9j_1 = slideOut;
    var tmp = this;
    tmp.y9j_1 = SlideModifier$transitionSpec$lambda(this);
  }
  protoOf(SlideModifier).b9k = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.w9j_1.s();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z9j_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.o36_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_5().q36_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.x9j_1.s();
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.z9j_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.o36_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_5().q36_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.h7_1) {
      case 1:
        tmp_7 = Companion_getInstance_5().q36_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  protoOf(SlideModifier).v5h = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.w5h(constraints);
    var measuredSize = IntSize_0(placeable.x5h_1, placeable.y5h_1);
    var tmp = placeable.x5h_1;
    var tmp_0 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp, tmp_0, VOID, SlideModifier$measure$lambda(this, placeable, measuredSize));
  };
  function createModifier$composable$lambda($shouldAnimateAlpha$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateAlpha', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateAlpha$delegate.s();
  }
  function createModifier$composable$lambda_0($shouldAnimateAlpha$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('shouldAnimateAlpha', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateAlpha$delegate.f1d(value);
  }
  function createModifier$composable$lambda_1($shouldAnimateScale$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateScale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateScale$delegate.s();
  }
  function createModifier$composable$lambda_2($shouldAnimateScale$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('shouldAnimateScale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateScale$delegate.f1d(value);
  }
  function createModifier$composable$lambda_3($alpha$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $alpha$delegate.s();
  }
  function createModifier$composable$lambda_4($scale$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scale', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $scale$delegate.s();
  }
  function createModifier$composable$lambda_5($transformOrigin$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transformOrigin', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $transformOrigin$delegate.s().y61_1;
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.y61_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.y61_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.d8q_1, it.e8q_1));
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.a37_1), $initialHeight(_IntSize___get_height__impl__prv63b(it.a37_1))));
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.a37_1), $targetHeight(_IntSize___get_height__impl__prv63b(it.a37_1))));
    };
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function createModifier$composable$lambda_6($enter, $exit) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(-57153604);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-57153604, $changed, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:860)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($this$animateFloat.y8y(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.a8z().u9i_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c9j_1;
        tmp_0 = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animateFloat.y8y(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.a8z().u9i_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.c9j_1;
        tmp_0 = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp_0 = get_DefaultAlphaAndScaleSpring();
      }
      var tmp0 = tmp_0;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0;
    };
  }
  function createModifier$composable$lambda_7($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function createModifier$composable$lambda_8($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function createModifier$composable$lambda_9($enter, $exit) {
    return function ($this$animateFloat, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(-53984035);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-53984035, $changed, -1, 'androidx.compose.animation.createModifier$composable.<anonymous> (EnterExitTransition.kt:883)');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($this$animateFloat.y8y(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.a8z().x9i_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j9j_1;
        tmp_0 = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animateFloat.y8y(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.a8z().x9i_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j9j_1;
        tmp_0 = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp_0 = get_DefaultAlphaAndScaleSpring();
      }
      var tmp0 = tmp_0;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0;
    };
  }
  function createModifier$composable$lambda_10($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function createModifier$composable$lambda_11($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function createModifier$composable$lambda_12($this$null, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0.m1r(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function createModifier$composable$lambda_13($alpha$delegate, $scale$delegate, $transformOrigin$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.g3y(createModifier$composable$lambda_3($alpha$delegate));
      $this$graphicsLayer.k60(createModifier$composable$lambda_4($scale$delegate));
      $this$graphicsLayer.l60(createModifier$composable$lambda_4($scale$delegate));
      $this$graphicsLayer.s60(createModifier$composable$lambda_5($transformOrigin$delegate));
      return Unit_getInstance();
    };
  }
  function createModifier$composable$lambda_14($alpha$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.g3y(createModifier$composable$lambda_3($alpha$delegate));
      return Unit_getInstance();
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize(IntSize_0($initialWidth(_IntSize___get_width__impl__d9yl4o(it.a37_1)), _IntSize___get_height__impl__prv63b(it.a37_1)));
    };
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize(IntSize_0($targetWidth(_IntSize___get_width__impl__d9yl4o(it.a37_1)), _IntSize___get_height__impl__prv63b(it.a37_1)));
    };
  }
  function invoke$lambda($shouldAnimate$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.s();
  }
  function invoke$lambda_0($shouldAnimate$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.f1d(value);
  }
  function shrinkExpand$lambda($transition, $expand, $shrink, $labelPrefix) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(-140634085);
      sourceInformation($composer_0, 'C1034@44322L46,1044@44676L396,1057@45186L41,1055@45112L125,1066@45547L218:EnterExitTransition.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-140634085, $changed, -1, 'androidx.compose.animation.shrinkExpand.<anonymous> (EnterExitTransition.kt:1030)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.m1r(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp0_cache = $composer_1;
      var tmp1_cache = $composer_1.y1t($transition);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp0_cache.w1t();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf(false);
        var value = tmp$ret$0;
        tmp0_cache.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.o1r();
      tmp$ret$4 = tmp0;
      var shouldAnimate$delegate = tmp$ret$4;
      var tmp_2;
      if ($transition.c8z().equals($transition.q8x()) ? !$transition.l8y() : false) {
        invoke$lambda_0(shouldAnimate$delegate, false);
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if (!($expand.s() == null) ? true : !($shrink.s() == null)) {
          invoke$lambda_0(shouldAnimate$delegate, true);
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      var tmp_4;
      if (invoke$lambda(shouldAnimate$delegate)) {
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp$ret$6;
        // Inline function 'kotlin.with' call
        var tmp1_with = $transition.m8y();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        var tmp0_return = tmp1_with.y8y(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance());
        tmp$ret$5 = tmp0_return;
        tmp$ret$6 = tmp$ret$5;
        var tmp2_let = tmp$ret$6;
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
        var tmp_5;
        if (tmp2_let) {
          var tmp0_safe_receiver = $expand.s();
          var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d9j_1;
          var tmp_6;
          if (tmp2_elvis_lhs == null) {
            var tmp1_safe_receiver = $shrink.s();
            tmp_6 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d9j_1;
          } else {
            tmp_6 = tmp2_elvis_lhs;
          }
          tmp_5 = tmp_6;
        } else {
          var tmp3_safe_receiver = $shrink.s();
          var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.d9j_1;
          var tmp_7;
          if (tmp5_elvis_lhs == null) {
            var tmp4_safe_receiver = $expand.s();
            tmp_7 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.d9j_1;
          } else {
            tmp_7 = tmp5_elvis_lhs;
          }
          tmp_5 = tmp_7;
        }
        var tmp0_return_0 = tmp_5;
        tmp$ret$7 = tmp0_return_0;
        tmp$ret$8 = tmp$ret$7;
        var alignment = rememberUpdatedState$composable(tmp$ret$8, $composer_0, 0);
        var tmp_8 = get_VectorConverter(Companion_getInstance_3());
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_2 = tmp3_remember$composable;
        $composer_2.m1r(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$9;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$9 = $labelPrefix + ' shrink/expand';
          var value_0 = tmp$ret$9;
          tmp0_cache_0.x1t(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_9;
        tmp$ret$11 = tmp$ret$10;
        var tmp_10 = tmp$ret$11;
        tmp$ret$12 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_2.o1r();
        tmp$ret$13 = tmp0_0;
        var sizeAnimation = createDeferredAnimation$composable($transition, tmp_8, tmp$ret$13, $composer_0, 0, 0);
        $composer_0.d1t(-1553213689, $transition.c8z().equals($transition.q8x()));
        sourceInformation($composer_0, '1062@45432L54,1060@45348L152');
        var tmp_11 = get_VectorConverter_1(Companion_getInstance_5());
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_3 = tmp4_remember$composable;
        $composer_3.m1r(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$14;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$14 = $labelPrefix + ' InterruptionHandlingOffset';
          var value_1 = tmp$ret$14;
          tmp0_cache_1.x1t(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = tmp0_let_1;
        }
        tmp$ret$15 = tmp_12;
        tmp$ret$16 = tmp$ret$15;
        var tmp_13 = tmp$ret$16;
        tmp$ret$17 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_3.o1r();
        tmp$ret$18 = tmp0_1;
        var tmp1 = createDeferredAnimation$composable($transition, tmp_11, tmp$ret$18, $composer_0, 0, 0);
        $composer_0.e1t();
        var offsetAnimation = tmp1;
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_4 = tmp5_remember$composable;
        $composer_4.m1r(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$22;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_0 = $composer_4.y1t($transition);
        var tmp$ret$21;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$19;
          // Inline function 'androidx.compose.animation.shrinkExpand.<anonymous>.<anonymous>' call
          tmp$ret$19 = new ExpandShrinkModifier(sizeAnimation, offsetAnimation, $expand, $shrink, alignment);
          var value_2 = tmp$ret$19;
          tmp0_cache_2.x1t(value_2);
          tmp_14 = value_2;
        } else {
          tmp_14 = tmp0_let_2;
        }
        tmp$ret$20 = tmp_14;
        tmp$ret$21 = tmp$ret$20;
        var tmp_15 = tmp$ret$21;
        tmp$ret$22 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_2 = tmp$ret$22;
        $composer_4.o1r();
        tmp$ret$23 = tmp0_2;
        var expandShrinkModifier = tmp$ret$23;
        if ($transition.c8z().equals($transition.q8x())) {
          expandShrinkModifier.r9j_1 = null;
        } else if (expandShrinkModifier.r9j_1 == null) {
          var tmp_16 = expandShrinkModifier;
          var tmp0_elvis_lhs = alignment.s();
          tmp_16.r9j_1 = tmp0_elvis_lhs == null ? Companion_getInstance_1().o5e_1 : tmp0_elvis_lhs;
        }
        var tmp_17;
        var tmp1_safe_receiver_0 = $expand.s();
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.g9j_1) === false) {
          tmp_17 = true;
        } else {
          var tmp2_safe_receiver = $shrink.s();
          tmp_17 = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.g9j_1) === false;
        }
        var disableClip = tmp_17;
        tmp_4 = $this$composed.n5f(disableClip ? Companion_getInstance() : clipToBounds(Companion_getInstance())).n5f(expandShrinkModifier);
      } else {
        tmp_4 = $this$composed;
      }
      var tmp2_group = tmp_4;
      var tmp0_3 = tmp2_group;
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0_3;
    };
  }
  function invoke$lambda_1($shouldAnimate$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.s();
  }
  function invoke$lambda_2($shouldAnimate$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('shouldAnimate', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimate$delegate.f1d(value);
  }
  function slideInOut$lambda($transition, $slideIn, $slideOut, $labelPrefix) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(158379472);
      sourceInformation($composer_0, 'C952@41279L46,964@41704L33,962@41628L119,966@41771L88:EnterExitTransition.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(158379472, $changed, -1, 'androidx.compose.animation.slideInOut.<anonymous> (EnterExitTransition.kt:949)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.m1r(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp0_cache = $composer_1;
      var tmp1_cache = $composer_1.y1t($transition);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp0_cache.w1t();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf(false);
        var value = tmp$ret$0;
        tmp0_cache.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.o1r();
      tmp$ret$4 = tmp0;
      var shouldAnimate$delegate = tmp$ret$4;
      var tmp_2;
      if ($transition.c8z().equals($transition.q8x()) ? !$transition.l8y() : false) {
        invoke$lambda_2(shouldAnimate$delegate, false);
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if (!($slideIn.s() == null) ? true : !($slideOut.s() == null)) {
          invoke$lambda_2(shouldAnimate$delegate, true);
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      var tmp_4;
      if (invoke$lambda_1(shouldAnimate$delegate)) {
        var tmp_5 = get_VectorConverter_1(Companion_getInstance_5());
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.m1r(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
          tmp$ret$5 = $labelPrefix + ' slide';
          var value_0 = tmp$ret$5;
          tmp0_cache_0.x1t(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_6;
        tmp$ret$7 = tmp$ret$6;
        var tmp_7 = tmp$ret$7;
        tmp$ret$8 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.o1r();
        tmp$ret$9 = tmp0_0;
        var animation = createDeferredAnimation$composable($transition, tmp_5, tmp$ret$9, $composer_0, 0, 0);
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.m1r(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_0 = $composer_3.y1t($transition);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$10;
          // Inline function 'androidx.compose.animation.slideInOut.<anonymous>.<anonymous>' call
          tmp$ret$10 = new SlideModifier(animation, $slideIn, $slideOut);
          var value_1 = tmp$ret$10;
          tmp0_cache_1.x1t(value_1);
          tmp_8 = value_1;
        } else {
          tmp_8 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_8;
        tmp$ret$12 = tmp$ret$11;
        var tmp_9 = tmp$ret$12;
        tmp$ret$13 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.o1r();
        tmp$ret$14 = tmp0_1;
        var modifier = tmp$ret$14;
        tmp_4 = $this$composed.n5f(modifier);
      } else {
        tmp_4 = $this$composed;
      }
      var tmp1_group = tmp_4;
      var tmp0_2 = tmp1_group;
      var tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_10 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0_2;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlpha = mutableFloatStateOf(1.0);
      Spring_getInstance();
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      Spring_getInstance();
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_5())));
      Spring_getInstance();
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_3())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.q35());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().i9k(velocity, $this.c9k_1 * $this.e9k_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.j9k_1 = initialVelocity;
    this.k9k_1 = distance;
    this.l9k_1 = duration;
    this.m9k_1 = 0;
  }
  protoOf(FlingInfo).n9k = function (time) {
    var tmp;
    if (this.l9k_1.x(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.l9k_1.vk();
      tmp = time.vk() / tmp0_div;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.j9k_1;
    tmp$ret$1 = sign(tmp1_sign);
    return this.k9k_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().r9k(splinePos).o9k_1;
  };
  protoOf(FlingInfo).s9k = function (time) {
    var tmp;
    if (this.l9k_1.x(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.l9k_1.vk();
      tmp = time.vk() / tmp0_div;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().r9k(splinePos).p9k_1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.j9k_1;
    return tmp_0 * sign(tmp1_sign) * this.k9k_1 / this.l9k_1.vk() * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.j9k_1 + ', distance=' + this.k9k_1 + ', duration=' + toString(this.l9k_1) + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.j9k_1);
    result = imul(result, 31) + getNumberHashCode(this.k9k_1) | 0;
    result = imul(result, 31) + this.l9k_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.j9k_1, tmp0_other_with_cast.j9k_1))
      return false;
    if (!equals(this.k9k_1, tmp0_other_with_cast.k9k_1))
      return false;
    if (!this.l9k_1.equals(tmp0_other_with_cast.l9k_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.c9k_1 = friction;
    this.d9k_1 = density;
    this.e9k_1 = computeDeceleration(this, this.d9k_1);
  }
  protoOf(FlingCalculator).t9k = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = l / decelMinusOne;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).u9k = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.c9k_1 * this.e9k_1;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(tmp0_exp);
  };
  protoOf(FlingCalculator).v9k = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.c9k_1 * this.e9k_1;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(tmp0_exp);
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = l / decelMinusOne;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.m1r(-836854195);
    sourceInformation($composer_0, 'C(animateColorAsState$composable)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-836854195, $changed, -1, 'androidx.compose.animation.animateColorAsState$composable (SingleValueAnimation.kt:56)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = _Color___get_colorSpace__impl__jqqozk(targetValue);
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
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.animation.animateColorAsState$composable.<anonymous>' call
      var value = get_VectorConverter_2(Companion_getInstance_6())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var converter = tmp0;
    var tmp_1 = new Color_0(targetValue);
    var tmp_2 = animationSpec_0;
    var tmp0_0 = animateValueAsState$composable(tmp_1, converter, tmp_2, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.o9k_1 = distanceCoefficient;
    this.p9k_1 = velocityCoefficient;
    this.q9k_1 = 0;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.o9k_1 + ', velocityCoefficient=' + this.p9k_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.o9k_1);
    result = imul(result, 31) + getNumberHashCode(this.p9k_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.o9k_1, tmp0_other_with_cast.o9k_1))
      return false;
    if (!equals(this.p9k_1, tmp0_other_with_cast.p9k_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.f9k_1 = 100;
    this.g9k_1 = new Float32Array(101);
    this.h9k_1 = new Float32Array(101);
    computeSplineInfo(this.g9k_1, this.h9k_1, 100);
  }
  protoOf(AndroidFlingSpline).r9k = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.g9k_1[index];
      var dSup = this.g9k_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).i9k = function (velocity, friction) {
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_ln = 0.35 * Math.abs(velocity) / friction;
    return Math.log(tmp0_ln);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = tx - alpha;
          if (Math.abs(tmp0_abs) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var tmp1_abs = dy - alpha;
          if (Math.abs(tmp1_abs) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.w9k_1.u9k(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.w9k_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
    this.x9k_1 = 0;
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).v8o = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).b8r = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).y8q = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(new Long(1000000, 0));
    return initialValue + this.w9k_1.v9k(initialVelocity).n9k(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).z8q = function (initialValue, initialVelocity) {
    return this.w9k_1.t9k(initialVelocity).l9(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).a8r = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(new Long(1000000, 0));
    return this.w9k_1.v9k(initialVelocity).s9k(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(802798862, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay$composable (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = density.q35();
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
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay$composable.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
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
  //region block: post-declaration
  protoOf(ChildData).s5f = foldIn;
  protoOf(ChildData).t5f = all;
  protoOf(ChildData).n5f = then;
  protoOf(LayoutModifierWithPassThroughIntrinsics).s5f = foldIn;
  protoOf(LayoutModifierWithPassThroughIntrinsics).t5f = all;
  protoOf(LayoutModifierWithPassThroughIntrinsics).n5f = then;
  protoOf(SizeModifier).s5f = foldIn;
  protoOf(SizeModifier).t5f = all;
  protoOf(SizeModifier).n5f = then;
  protoOf(AnimatedContentTransitionScopeImpl).y8y = isTransitioningTo;
  protoOf(ExpandShrinkModifier).s5f = foldIn;
  protoOf(ExpandShrinkModifier).t5f = all;
  protoOf(ExpandShrinkModifier).n5f = then;
  protoOf(SlideModifier).s5f = foldIn;
  protoOf(SlideModifier).t5f = all;
  protoOf(SlideModifier).n5f = then;
  //endregion
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedContent$composable;
  _.$_$.b = AnimatedVisibility$composable;
  _.$_$.c = AnimatedVisibility$composable_0;
  _.$_$.d = Crossfade$composable;
  _.$_$.e = get_VectorConverter_2;
  _.$_$.f = animateColorAsState$composable;
  _.$_$.g = rememberSplineBasedDecay$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation.js.map
