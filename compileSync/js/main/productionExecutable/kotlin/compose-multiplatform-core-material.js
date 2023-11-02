(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-foundation.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-material-ripple.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-ui-util.js', './compose-multiplatform-core-animation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-foundation.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-material-ripple.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-ui-util.js'), require('./compose-multiplatform-core-animation.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-material-ripple' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-animation' was not found. Please, check whether 'compose-multiplatform-core-animation' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    root['compose-multiplatform-core-material'] = factory(typeof this['compose-multiplatform-core-material'] === 'undefined' ? {} : this['compose-multiplatform-core-material'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-foundation'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-material-ripple'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-ui-util'], this['compose-multiplatform-core-animation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_animation_animation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.v8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var isInterface = kotlin_kotlin.$_$.id;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var equals = kotlin_kotlin.$_$.oc;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.z8;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var protoOf = kotlin_kotlin.$_$.xd;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Long = kotlin_kotlin.$_$.jj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var lastOrNull = kotlin_kotlin.$_$.e9;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var KProperty0 = kotlin_kotlin.$_$.nf;
  var THROW_ISE = kotlin_kotlin.$_$.rj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui.$_$.y8;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var toolingGraphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.u8;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var isInfinite = kotlin_kotlin.$_$.nk;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.z5;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var rememberRipple$composable = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o1;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.n7;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var DpSize__hashCode_impl_jvpgaj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.h7;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var sequenceOf = kotlin_kotlin.$_$.fg;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var IntRect = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var DpOffset__hashCode_impl_mjg9df = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var hashCode = kotlin_kotlin.$_$.xc;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var updateTransition$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var PaddingValues_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var sizeIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var get_LinearOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var IntrinsicSize_Max_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var verticalScroll = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s2;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b2;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u1;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var BasicTextField$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var drawWithContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var calculateEndPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var coerceAtLeast = kotlin_kotlin.$_$.te;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s1;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var rememberInfiniteTransition$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var animateValue$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var animateFloat$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var keyframes = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var progressSemantics = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t1;
  var Canvas$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var size_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var get_PI = kotlin_kotlin.$_$.de;
  var rangeTo = kotlin_kotlin.$_$.ff;
  var coerceIn = kotlin_kotlin.$_$.cf;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var paddingFromBaseline = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var first = kotlin_kotlin.$_$.i8;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.se;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n1;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.l6;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b2;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v2;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var collectIsFocusedAsState$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var animateDpAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var BorderStroke = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var animateColorAsState$composable = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var Enum = kotlin_kotlin.$_$.dj;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var updateTransition$composable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var get_VectorConverter_2 = kotlin_org_jetbrains_compose_animation_animation.$_$.e;
  var LayoutIdParentData = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var error = kotlin_org_jetbrains_compose_ui_ui.$_$.e6;
  var Companion_getInstance_21 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j2;
  var Companion_getInstance_22 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m2;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Companion_getInstance_23 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y2;
  var inspectableWrapper = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  var nestedScroll = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var _Velocity___get_y__impl__239yhc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var Velocity_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Companion_getInstance_24 = kotlin_org_jetbrains_compose_ui_ui.$_$.n8;
  var onPostFling = kotlin_org_jetbrains_compose_ui_ui.$_$.w7;
  var NestedScrollConnection = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var animate = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var coerceIn_0 = kotlin_kotlin.$_$.ze;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var MutatorMutex = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var get_LocalScrollbarStyle = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var defaultScrollbarStyle = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r1;
  var DialogProperties_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.z7;
  var Dialog$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.d7;
  var _DpOffset___get_packedValue__impl__7zqn8y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var rememberScrollState$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u1;
  var PopupProperties_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var Companion_getInstance_25 = kotlin_org_jetbrains_compose_ui_ui.$_$.j8;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var Popup$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.e7;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Companion_getInstance_26 = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var Companion_getInstance_27 = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var Companion_getInstance_28 = kotlin_org_jetbrains_compose_ui_ui.$_$.l8;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var Companion_getInstance_29 = kotlin_org_jetbrains_compose_ui_ui.$_$.m8;
  var KMutableProperty0 = kotlin_kotlin.$_$.lf;
  var get_LocalFocusManager = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var get_LocalInputModeManager = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(ButtonDefaults, 'ButtonDefaults', objectMeta);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda$slambda, 'DefaultButtonElevation$elevation$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda_1, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation$elevation$composable$slambda_3, 'DefaultButtonElevation$elevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultButtonElevation, 'DefaultButtonElevation', classMeta);
  setMetadataFor(DefaultButtonColors, 'DefaultButtonColors', classMeta);
  setMetadataFor(Colors, 'Colors', classMeta);
  setMetadataFor(ContentAlpha, 'ContentAlpha', objectMeta);
  setMetadataFor(HighContrastContentAlpha, 'HighContrastContentAlpha', objectMeta);
  setMetadataFor(LowContrastContentAlpha, 'LowContrastContentAlpha', objectMeta);
  setMetadataFor(ElevationDefaults, 'ElevationDefaults', objectMeta);
  setMetadataFor($animateElevationCOROUTINE$0, '$animateElevationCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(DefaultElevationOverlay, 'DefaultElevationOverlay', objectMeta);
  setMetadataFor(MinimumInteractiveComponentSizeModifier, 'MinimumInteractiveComponentSizeModifier', classMeta, VOID, [LayoutModifier]);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(MaterialRippleTheme, 'MaterialRippleTheme', objectMeta);
  setMetadataFor(DropdownMenuPositionProvider, 'DropdownMenuPositionProvider', classMeta);
  setMetadataFor(MenuDefaults, 'MenuDefaults', objectMeta);
  setMetadataFor(OutlinedTextFieldMeasurePolicy, 'OutlinedTextFieldMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(ProgressIndicatorDefaults, 'ProgressIndicatorDefaults', objectMeta);
  setMetadataFor(Shapes, 'Shapes', classMeta);
  setMetadataFor(SnackbarDefaults, 'SnackbarDefaults', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_1, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Surface$composable$lambda$slambda, 'Surface$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', classMeta);
  setMetadataFor(TextFieldMeasurePolicy, 'TextFieldMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(TextFieldDefaults, 'TextFieldDefaults', objectMeta);
  setMetadataFor(DefaultTextFieldColors, 'DefaultTextFieldColors', classMeta);
  function leadingIconColor$composable(enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1115921985);
    sourceInformation($composer_0, 'C(leadingIconColor$composable)P(!1,2)160@5992L34:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1115921985, $changed, -1, 'androidx.compose.material.TextFieldColorsWithIcons.leadingIconColor$composable (TextFieldDefaults.kt:155)');
    }
    var tmp0 = this.be4(enabled, isError, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function trailingIconColor$composable(enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1110463511);
    sourceInformation($composer_0, 'C(trailingIconColor$composable)P(!1,2)177@6577L35:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1110463511, $changed, -1, 'androidx.compose.material.TextFieldColorsWithIcons.trailingIconColor$composable (TextFieldDefaults.kt:172)');
    }
    var tmp0 = this.ce4(enabled, isError, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  setMetadataFor(TextFieldColorsWithIcons, 'TextFieldColorsWithIcons', interfaceMeta);
  setMetadataFor(TextFieldType, 'TextFieldType', classMeta, Enum);
  setMetadataFor(InputPhase, 'InputPhase', classMeta, Enum);
  setMetadataFor(TextFieldTransitionScope, 'TextFieldTransitionScope', objectMeta);
  setMetadataFor(Typography, 'Typography', classMeta);
  setMetadataFor($onPreFlingCOROUTINE$1, '$onPreFlingCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PullRefreshNestedScrollConnection, 'PullRefreshNestedScrollConnection', classMeta, VOID, [NestedScrollConnection], VOID, VOID, [1, 2]);
  setMetadataFor(pullRefresh$_anonymous_$onRelease$ref_am08ha, 'pullRefresh$<anonymous>$onRelease$ref', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PullRefreshState$animateIndicatorTo$slambda$slambda, 'PullRefreshState$animateIndicatorTo$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(PullRefreshState$animateIndicatorTo$slambda, 'PullRefreshState$animateIndicatorTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(PullRefreshState, 'PullRefreshState', classMeta);
  setMetadataFor(PullRefreshDefaults, 'PullRefreshDefaults', objectMeta);
  //endregion
  function get_TitlePadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TitlePadding;
  }
  var TitlePadding;
  function get_TextPadding() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextPadding;
  }
  var TextPadding;
  function get_TitleBaselineDistanceFromTop() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TitleBaselineDistanceFromTop;
  }
  var TitleBaselineDistanceFromTop;
  function get_TextBaselineDistanceFromTitle() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextBaselineDistanceFromTitle;
  }
  var TextBaselineDistanceFromTitle;
  function get_TextBaselineDistanceFromTop() {
    _init_properties_AlertDialog_kt__pwewa6();
    return TextBaselineDistanceFromTop;
  }
  var TextBaselineDistanceFromTop;
  function AlertDialogContent$composable(buttons, modifier, title, text, shape, backgroundColor, contentColor, $composer, $changed, $default) {
    _init_properties_AlertDialog_kt__pwewa6();
    var modifier_0 = {_v: modifier};
    var title_0 = {_v: title};
    var text_0 = {_v: text};
    var shape_0 = {_v: shape};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1084775935);
    sourceInformation($composer_0, 'C(AlertDialogContent$composable)P(1,3,6,5,4,0:c#ui.graphics.Color,2:c#ui.graphics.Color)134@6447L6,135@6505L6,136@6547L32,138@6589L1047:AlertDialog.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(buttons) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(title_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(text_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.y3w_1))) : false) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3w_1))) : false) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          title_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          text_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          shape_0._v = MaterialTheme_getInstance().ydu($composer_0, 6).udu_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          backgroundColor_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).odv());
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(backgroundColor_0._v.y3w_1, $composer_0, 14 & $dirty >> 15));
          $dirty = $dirty & -3670017;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1084775935, $dirty, -1, 'androidx.compose.material.AlertDialogContent$composable (AlertDialog.kt:129)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = shape_0._v;
      var tmp_1 = backgroundColor_0._v.y3w_1;
      var tmp_2 = contentColor_0._v.y3w_1;
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 629950291, true, AlertDialogContent$composable$lambda(title_0, text_0, buttons, $dirty));
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
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_5 = value;
      } else {
        tmp_5 = tmp0_let;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_1.o1r();
      Surface$composable(tmp, tmp_0, tmp_1, tmp_2, null, tmp_3, tmp0, $composer_0, 1572864 | 14 & $dirty >> 3 | 112 & $dirty >> 9 | 896 & $dirty >> 9 | 7168 & $dirty >> 9, 48);
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
      tmp0_safe_receiver.z28(AlertDialogContent$composable$lambda_0(buttons, modifier_0, title_0, text_0, shape_0, backgroundColor_0, contentColor_0, $changed, $default));
    }
  }
  function AlertDialogBaselineLayout$composable(_this__u8e3s4, title, text, $composer, $changed) {
    _init_properties_AlertDialog_kt__pwewa6();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1797841388);
    sourceInformation($composer_0, 'C(AlertDialogBaselineLayout$composable)P(1)196@8519L3072,182@8112L3479:AlertDialog.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(title) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(text) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1797841388, $changed, -1, 'androidx.compose.material.AlertDialogBaselineLayout$composable (AlertDialog.kt:178)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp1_Layout$composable = _this__u8e3s4.d96(Companion_getInstance(), 1.0, false);
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
        // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>' call
        var value = AlertDialogBaselineLayout$composable$lambda;
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var tmp2_Layout$composable = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp0);
      var modifier = tmp1_Layout$composable;
      var $composer_2 = $composer_0;
      $composer_2.m1r(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier);
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.p1t();
      if ($composer_3.a1t()) {
        $composer_3.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp2_Layout$composable, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & 6 >> 3);
      $composer_3.m1r(2058660585);
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 188125675, 'C:AlertDialog.kt#jmzs0o');
      $composer_4.m1r(188125682);
      sourceInformation($composer_4, '*185@8180L106');
      var tmp_3;
      if (title == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var modifier_0 = _this__u8e3s4.f96(layoutId(get_TitlePadding(), 'title'), Companion_getInstance_2().a5f_1);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_5 = $composer_4;
        $composer_5.m1r(1330882304);
        sourceInformation($composer_5, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_1 = modifier_0;
        var $composer_6 = $composer_5;
        $composer_6.m1r(1725976829);
        sourceInformation($composer_6, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
        var localMap_0 = $composer_6.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_1);
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
        var $composer_7 = $composer_6;
        var tmp_4 = $composer_7.z1s();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_7.p1t();
        if ($composer_7.a1t()) {
          $composer_7.q1t(tmp0_ReusableComposeNode$composable_0);
        } else {
          $composer_7.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_7);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap_0, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_0 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_5;
        if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
          tmp0_with_0.x1t(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash_0, tmp0_set_0);
          tmp_5 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_7.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_8 = $composer_7;
        sourceInformationMarkerStart($composer_8, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, 1096295972, 'C186@8261L7:AlertDialog.kt#jmzs0o');
        title($composer_9, 0);
        sourceInformationMarkerEnd($composer_9);
        sourceInformationMarkerEnd($composer_8);
        $composer_7.o1r();
        $composer_7.s1t();
        $composer_6.o1r();
        $composer_5.o1r();
        tmp_3 = Unit_getInstance();
      }
      $composer_4.o1r();
      $composer_4.m1r(-909464965);
      sourceInformation($composer_4, '*190@8349L103');
      var tmp_6;
      if (text == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var modifier_2 = _this__u8e3s4.f96(layoutId(get_TextPadding(), 'text'), Companion_getInstance_2().a5f_1);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_10 = $composer_4;
        $composer_10.m1r(1330882304);
        sourceInformation($composer_10, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment_0 = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_10, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_3 = modifier_2;
        var $composer_11 = $composer_10;
        $composer_11.m1r(1725976829);
        sourceInformation($composer_11, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance();
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_11, 0);
        var localMap_1 = $composer_11.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_1 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_1 = materializerOf(modifier_3);
        var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & 0 << 9;
        var $composer_12 = $composer_11;
        var tmp_7 = $composer_12.z1s();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_12.p1t();
        if ($composer_12.a1t()) {
          $composer_12.q1t(tmp0_ReusableComposeNode$composable_1);
        } else {
          $composer_12.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_1 = _Updater___init__impl__rbfxm8($composer_12);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, measurePolicy_0, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, localMap_1, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_1 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_1 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_8;
        if (tmp0_with_1.a1t() ? true : !equals(tmp0_with_1.w1t(), compositeKeyHash_1)) {
          tmp0_with_1.x1t(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1).v1t(compositeKeyHash_1, tmp0_set_1);
          tmp_8 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
        $composer_12.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, 1096296139, 'C191@8428L6:AlertDialog.kt#jmzs0o');
        text($composer_14, 0);
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        $composer_12.o1r();
        $composer_12.s1t();
        $composer_11.o1r();
        $composer_10.o1r();
        tmp_6 = Unit_getInstance();
      }
      $composer_4.o1r();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.o1r();
      $composer_3.s1t();
      $composer_2.o1r();
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
      tmp0_safe_receiver.z28(AlertDialogBaselineLayout$composable$lambda_0(_this__u8e3s4, title, text, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.pdv_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).e6w = function (_this__u8e3s4, measurables, constraints) {
    return this.pdv_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function AlertDialogContent$composable$lambda$lambda$lambda($title, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C149@7009L10,150@7058L34:AlertDialog.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(770166432, $changed, -1, 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.kt:148)');
        }
        var textStyle = MaterialTheme_getInstance().edw($composer_0, 6).wdv_1;
        ProvideTextStyle$composable(textStyle, $title._v, $composer_0, 112 & $$dirty >> 3);
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
  function AlertDialogContent$composable$lambda$lambda($title, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C148@6943L4,148@6878L240:AlertDialog.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(620104160, $changed, -1, 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.kt:147)');
        }
        var tmp_0 = [get_LocalContentAlpha().u28(ContentAlpha_getInstance().gdw($composer_0, 6))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 770166432, true, AlertDialogContent$composable$lambda$lambda$lambda($title, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
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
  function AlertDialogContent$composable$lambda$lambda$lambda_0($text, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C159@7440L10,160@7485L33:AlertDialog.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(2115920639, $changed, -1, 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.kt:158)');
        }
        var textStyle = MaterialTheme_getInstance().edw($composer_0, 6).zdv_1;
        ProvideTextStyle$composable(textStyle, $text._v, $composer_0, 112 & $$dirty >> 6);
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
  function AlertDialogContent$composable$lambda$lambda_0($text, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C157@7347L6,156@7253L291:AlertDialog.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1965858367, $changed, -1, 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (AlertDialog.kt:155)');
        }
        var tmp_0 = [get_LocalContentAlpha().u28(ContentAlpha_getInstance().hdw($composer_0, 6))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 2115920639, true, AlertDialogContent$composable$lambda$lambda$lambda_0($text, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function AlertDialogContent$composable$lambda($title, $text, $buttons, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C144@6735L895:AlertDialog.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(629950291, $changed, -1, 'androidx.compose.material.AlertDialogContent$composable.<anonymous> (AlertDialog.kt:143)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = null;
        var tmp1_Column$composable = null;
        var tmp2_Column$composable = null;
        var tmp3_Column$composable = $composer_0;
        var modifier = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.m1r(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(1 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          verticalArrangement = Arrangement_getInstance().p93_1;
        if (!(4 === 0))
          horizontalAlignment = Companion_getInstance_2().a5f_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.m1r(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.z1s();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.p1t();
        if ($composer_3.a1t()) {
          $composer_3.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        sourceInformationMarkerStart($composer_5, -1557649136, 'C145@6756L842,165@7611L9:AlertDialog.kt#jmzs0o');
        var tmp0_safe_receiver = $title._v;
        var tmp_2;
        if (tmp0_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$8;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$7;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3 = $composer_5;
          var dispatchReceiver = composableLambda(tmp_3, 620104160, true, AlertDialogContent$composable$lambda$lambda($title, $$dirty));
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_5;
          var $composer_6 = tmp0_remember$composable;
          $composer_6.m1r(-838505973);
          sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$5;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_6;
          var tmp1_cache = $composer_6.y1t(dispatchReceiver);
          var tmp$ret$4;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_4;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            var tmp$ret$2;
            // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$2 = ComposableLambda$invoke$ref_0(dispatchReceiver);
            var value = tmp$ret$2;
            tmp0_cache.x1t(value);
            tmp_4 = value;
          } else {
            tmp_4 = tmp0_let;
          }
          tmp$ret$3 = tmp_4;
          tmp$ret$4 = tmp$ret$3;
          var tmp_5 = tmp$ret$4;
          tmp$ret$5 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
          var tmp0 = tmp$ret$5;
          $composer_6.o1r();
          tmp$ret$6 = tmp0;
          tmp$ret$7 = tmp$ret$6;
          tmp$ret$8 = tmp$ret$7;
          var tmp0_return = tmp$ret$8;
          tmp$ret$9 = tmp0_return;
          tmp$ret$10 = tmp$ret$9;
          tmp_2 = tmp$ret$10;
        }
        var tmp_6 = tmp_2;
        var tmp1_safe_receiver = $text._v;
        var tmp_7;
        if (tmp1_safe_receiver == null) {
          tmp_7 = null;
        } else {
          var tmp$ret$19;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$18;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$17;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$16;
          // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_8 = $composer_5;
          var dispatchReceiver_0 = composableLambda(tmp_8, 1965858367, true, AlertDialogContent$composable$lambda$lambda_0($text, $$dirty));
          var tmp$ret$15;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_0 = $composer_5;
          var $composer_7 = tmp0_remember$composable_0;
          $composer_7.m1r(-838505973);
          sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_7;
          var tmp1_cache_0 = $composer_7.y1t(dispatchReceiver_0);
          var tmp$ret$13;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_9;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
            var tmp$ret$11;
            // Inline function 'androidx.compose.material.AlertDialogContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$11 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
            var value_0 = tmp$ret$11;
            tmp0_cache_0.x1t(value_0);
            tmp_9 = value_0;
          } else {
            tmp_9 = tmp0_let_0;
          }
          tmp$ret$12 = tmp_9;
          tmp$ret$13 = tmp$ret$12;
          var tmp_10 = tmp$ret$13;
          tmp$ret$14 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
          var tmp0_0 = tmp$ret$14;
          $composer_7.o1r();
          tmp$ret$15 = tmp0_0;
          tmp$ret$16 = tmp$ret$15;
          tmp$ret$17 = tmp$ret$16;
          var tmp0_return_0 = tmp$ret$17;
          tmp$ret$18 = tmp0_return_0;
          tmp$ret$19 = tmp$ret$18;
          tmp_7 = tmp$ret$19;
        }
        AlertDialogBaselineLayout$composable(tmp4_anonymous_1, tmp_6, tmp_7, $composer_5, 14 & tmp6_anonymous);
        $buttons($composer_5, 14 & $$dirty);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.o1r();
        $composer_3.s1t();
        $composer_2.o1r();
        $composer_1.o1r();
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
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
  function AlertDialogContent$composable$lambda_0($buttons, $modifier, $title, $text, $shape, $backgroundColor, $contentColor, $$changed, $$default) {
    return function ($composer, $force) {
      AlertDialogContent$composable($buttons, $modifier._v, $title._v, $text._v, $shape._v, $backgroundColor._v.y3w_1, $contentColor._v.y3w_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AlertDialogBaselineLayout$composable$lambda($this$Layout, measurables, constraints) {
    _init_properties_AlertDialog_kt__pwewa6();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        if (equals(get_layoutId(element), 'title')) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var titlePlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5h(Constraints__copy$default_impl_f452rp(constraints.l35_1, VOID, VOID, 0));
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        if (equals(get_layoutId(element_0), 'text')) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp1_safe_receiver = tmp$ret$3;
    var textPlaceable = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w5h(Constraints__copy$default_impl_f452rp(constraints.l35_1, VOID, VOID, 0));
    // Inline function 'kotlin.math.max' call
    var tmp3_elvis_lhs = titlePlaceable == null ? null : titlePlaceable.x5h_1;
    var tmp0_max = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp5_elvis_lhs = textPlaceable == null ? null : textPlaceable.x5h_1;
    var tmp1_max = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    var layoutWidth = Math.max(tmp0_max, tmp1_max);
    var tmp7_safe_receiver = titlePlaceable == null ? null : titlePlaceable.s6r(get_FirstBaseline());
    var tmp;
    if (tmp7_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_0;
      Companion_getInstance_3();
      if (tmp7_safe_receiver === -2147483648) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp7_safe_receiver;
      }
      tmp = tmp_0;
    }
    var tmp8_elvis_lhs = tmp;
    var firstTitleBaseline = tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs;
    var tmp10_safe_receiver = titlePlaceable == null ? null : titlePlaceable.s6r(get_LastBaseline());
    var tmp_1;
    if (tmp10_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_2;
      Companion_getInstance_3();
      if (tmp10_safe_receiver === -2147483648) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp10_safe_receiver;
      }
      tmp_1 = tmp_2;
    }
    var tmp11_elvis_lhs = tmp_1;
    var lastTitleBaseline = tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs;
    var titleOffset = $this$Layout.y35(get_TitleBaselineDistanceFromTop());
    var titlePositionY = titleOffset - firstTitleBaseline | 0;
    var tmp13_safe_receiver = textPlaceable == null ? null : textPlaceable.s6r(get_FirstBaseline());
    var tmp_3;
    if (tmp13_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_4;
      Companion_getInstance_3();
      if (tmp13_safe_receiver === -2147483648) {
        tmp_4 = null;
      } else {
        tmp_4 = tmp13_safe_receiver;
      }
      tmp_3 = tmp_4;
    }
    var tmp14_elvis_lhs = tmp_3;
    var firstTextBaseline = tmp14_elvis_lhs == null ? 0 : tmp14_elvis_lhs;
    var tmp_5;
    if (titlePlaceable == null) {
      tmp_5 = $this$Layout.y35(get_TextBaselineDistanceFromTop());
    } else {
      tmp_5 = $this$Layout.y35(get_TextBaselineDistanceFromTitle());
    }
    var textOffset = tmp_5;
    var tmp_6;
    if (titlePlaceable == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
      tmp_6 = titlePlaceable.y5h_1 + titlePositionY | 0;
    }
    var tmp16_elvis_lhs = tmp_6;
    var titleHeightWithSpacing = tmp16_elvis_lhs == null ? 0 : tmp16_elvis_lhs;
    var tmp_7;
    if (titlePlaceable == null) {
      tmp_7 = textOffset - firstTextBaseline | 0;
    } else {
      var tmp_8;
      if (lastTitleBaseline === 0) {
        tmp_8 = (titleHeightWithSpacing - firstTextBaseline | 0) + textOffset | 0;
      } else {
        tmp_8 = ((titlePositionY + lastTitleBaseline | 0) - firstTextBaseline | 0) + textOffset | 0;
      }
      tmp_7 = tmp_8;
    }
    var textPositionY = tmp_7;
    var tmp_9;
    if (textPlaceable == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialogBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_10;
      if (lastTitleBaseline === 0) {
        tmp_10 = (textPlaceable.y5h_1 + textOffset | 0) - firstTextBaseline | 0;
      } else {
        var tmp_11 = (textPlaceable.y5h_1 + textOffset | 0) - firstTextBaseline | 0;
        var tmp1_elvis_lhs = titlePlaceable == null ? null : titlePlaceable.y5h_1;
        tmp_10 = tmp_11 - ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) - lastTitleBaseline | 0) | 0;
      }
      tmp_9 = tmp_10;
    }
    var tmp18_elvis_lhs = tmp_9;
    var textHeightWithSpacing = tmp18_elvis_lhs == null ? 0 : tmp18_elvis_lhs;
    var layoutHeight = titleHeightWithSpacing + textHeightWithSpacing | 0;
    return $this$Layout.d5i(layoutWidth, layoutHeight, VOID, AlertDialogBaselineLayout$composable$lambda$lambda(titlePlaceable, titlePositionY, textPlaceable, textPositionY));
  }
  function AlertDialogBaselineLayout$composable$lambda$lambda($titlePlaceable, $titlePositionY, $textPlaceable, $textPositionY) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $titlePlaceable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        $this$layout.f6y(tmp0_safe_receiver, 0, $titlePositionY);
      }
      var tmp1_safe_receiver = $textPlaceable;
      if (tmp1_safe_receiver == null)
        null;
      else {
        $this$layout.f6y(tmp1_safe_receiver, 0, $textPositionY);
      }
      return Unit_getInstance();
    };
  }
  function AlertDialogBaselineLayout$composable$lambda_0($this_AlertDialogBaselineLayout$composable, $title, $text, $$changed) {
    return function ($composer, $force) {
      AlertDialogBaselineLayout$composable($this_AlertDialogBaselineLayout$composable, $title, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_AlertDialog_kt_toy5h0;
  function _init_properties_AlertDialog_kt__pwewa6() {
    if (!properties_initialized_AlertDialog_kt_toy5h0) {
      properties_initialized_AlertDialog_kt_toy5h0 = true;
      var tmp = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(24);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      TitlePadding = padding(tmp, tmp_0, VOID, tmp$ret$1);
      var tmp_1 = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(24);
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(28);
      TextPadding = padding(tmp_1, tmp_2, VOID, tmp_3, tmp$ret$2);
      TitleBaselineDistanceFromTop = get_sp(40);
      TextBaselineDistanceFromTitle = get_sp(36);
      TextBaselineDistanceFromTop = get_sp(38);
    }
  }
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.idw_1 = _Dp___init__impl__ms3zkb(16);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.jdw_1 = _Dp___init__impl__ms3zkb(8);
    this.kdw_1 = PaddingValues(this.idw_1, this.jdw_1, this.idw_1, this.jdw_1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.ldw_1 = _Dp___init__impl__ms3zkb(64);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.mdw_1 = _Dp___init__impl__ms3zkb(36);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ndw_1 = _Dp___init__impl__ms3zkb(18);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.odw_1 = _Dp___init__impl__ms3zkb(8);
    this.pdw_1 = 0.12;
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.qdw_1 = _Dp___init__impl__ms3zkb(1);
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.rdw_1 = _Dp___init__impl__ms3zkb(8);
    this.sdw_1 = PaddingValues(this.rdw_1, this.kdw_1.e99(), this.rdw_1, this.kdw_1.g99());
    this.tdw_1 = 0;
  }
  protoOf(ButtonDefaults).udw = function (defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation, $composer, $changed, $default) {
    var defaultElevation_0 = {_v: new Dp(defaultElevation)};
    var pressedElevation_0 = {_v: new Dp(pressedElevation)};
    var disabledElevation_0 = {_v: new Dp(disabledElevation)};
    var hoveredElevation_0 = {_v: new Dp(hoveredElevation)};
    var focusedElevation_0 = {_v: new Dp(focusedElevation)};
    var $composer_0 = $composer;
    $composer_0.m1r(-292886193);
    sourceInformation($composer_0, 'C(elevation$composable)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,1:c#ui.unit.Dp,3:c#ui.unit.Dp,2:c#ui.unit.Dp)378@15799L497:Button.kt#jmzs0o');
    if (!(($default & 1) === 0)) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      defaultElevation_0._v = new Dp(tmp$ret$0);
    }
    if (!(($default & 2) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      pressedElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 4) === 0)) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      disabledElevation_0._v = new Dp(tmp$ret$2);
    }
    if (!(($default & 8) === 0)) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
      hoveredElevation_0._v = new Dp(tmp$ret$3);
    }
    if (!(($default & 16) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$4 = _Dp___init__impl__ms3zkb(4);
      focusedElevation_0._v = new Dp(tmp$ret$4);
    }
    if (isTraceInProgress()) {
      traceEventStart(-292886193, $changed, -1, 'androidx.compose.material.ButtonDefaults.elevation$composable (Button.kt:371)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = [defaultElevation_0._v, pressedElevation_0._v, disabledElevation_0._v, hoveredElevation_0._v, focusedElevation_0._v];
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = tmp0_remember$composable.length;
    while (inductionVariable < last) {
      var key = tmp0_remember$composable[inductionVariable];
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
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.ButtonDefaults.elevation$composable.<anonymous>' call
      var value = new DefaultButtonElevation(defaultElevation_0._v.j36_1, pressedElevation_0._v.j36_1, disabledElevation_0._v.j36_1, hoveredElevation_0._v.j36_1, focusedElevation_0._v.j36_1);
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
  protoOf(ButtonDefaults).vdw = function (backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor, $composer, $changed, $default) {
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var disabledBackgroundColor_0 = disabledBackgroundColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.m1r(688397153);
    sourceInformation($composer_0, 'C(buttonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)406@16865L6,407@16911L32,408@17000L6,409@17078L6,410@17147L6,411@17203L8:Button.kt#jmzs0o');
    if (!(($default & 1) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).wdw();
    if (!(($default & 2) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed);
    if (!(($default & 4) === 0))
      disabledBackgroundColor_0 = compositeOver(Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.12), MaterialTheme_getInstance().zdu($composer_0, 6).odv());
    if (!(($default & 8) === 0))
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), ContentAlpha_getInstance().ydw($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventStart(688397153, $changed, -1, 'androidx.compose.material.ButtonDefaults.buttonColors$composable (Button.kt:405)');
    }
    var tmp0 = new DefaultButtonColors(backgroundColor_0, contentColor_0, disabledBackgroundColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function Button$composable(onClick, modifier, enabled, interactionSource, elevation, shape, border, colors, contentPadding, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var elevation_0 = {_v: elevation};
    var shape_0 = {_v: shape};
    var border_0 = {_v: border};
    var colors_0 = {_v: colors};
    var contentPadding_0 = {_v: contentPadding};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1097700753);
    sourceInformation($composer_0, 'C(Button$composable)P(8,7,5,6,4,9!2,3)97@4664L39,98@4754L11,99@4800L6,101@4890L14,105@5053L21,108@5153L22,111@5250L24,106@5079L1119:Button.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(elevation_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1t(border_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.y1t(colors_0._v) : false) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentPadding_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
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
            // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp_1 = ButtonDefaults_getInstance();
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_1.udw(tmp_2, tmp_3, tmp_4, tmp_5, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = MaterialTheme_getInstance().ydu($composer_0, 6).tdu_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp_6 = ButtonDefaults_getInstance();
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_6.vdw(tmp_7, tmp_8, tmp_9, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().kdw_1;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1097700753, $dirty, -1, 'androidx.compose.material.Button$composable (Button.kt:93)');
      }
      var contentColor$delegate = colors_0._v.zdw(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18);
      var tmp_10 = modifier_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
        var value_0 = Button$composable$lambda_0;
        $composer_2.x1t(value_0);
        tmp_11 = value_0;
      } else {
        tmp_11 = tmp0_let_0;
      }
      var tmp_12 = tmp_11;
      var tmp0_0 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      $composer_2.o1r();
      var tmp_13 = semantics(tmp_10, VOID, tmp0_0);
      var tmp_14 = enabled_0._v;
      var tmp_15 = shape_0._v;
      var tmp_16 = colors_0._v.adx(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 18).s().y3w_1;
      var tmp_17 = Color__copy$default_impl_ectz3s(Button$composable$lambda(contentColor$delegate), 1.0);
      var tmp_18 = border_0._v;
      var tmp0_safe_receiver = elevation_0._v;
      $composer_0.m1r(1967139223);
      sourceInformation($composer_0, '114@5392L37');
      var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bdx(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 6 | 896 & $dirty >> 6);
      $composer_0.o1r();
      var tmp_19;
      if (tmp0_group == null) {
        tmp_19 = null;
      } else {
        var tmp_20 = tmp0_group.s();
        tmp_19 = tmp_20 == null ? null : tmp_20.j36_1;
      }
      var tmp2_elvis_lhs = tmp_19;
      var tmp_21;
      var tmp_22 = tmp2_elvis_lhs;
      if ((tmp_22 == null ? null : new Dp(tmp_22)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_21 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_21 = tmp2_elvis_lhs;
      }
      var tmp_23 = tmp_21;
      var tmp_24 = interactionSource_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.Button$composable.<anonymous>' call
      var tmp_25 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_25, 7524271, true, Button$composable$lambda_1(contentColor$delegate, contentPadding_0, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_3.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_26;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_3.x1t(value_1);
        tmp_26 = value_1;
      } else {
        tmp_26 = tmp0_let_1;
      }
      var tmp_27 = tmp_26;
      var tmp0_1 = (tmp_27 == null ? true : isObject(tmp_27)) ? tmp_27 : THROW_CCE();
      $composer_3.o1r();
      Surface$composable_0(onClick, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_23, tmp_24, tmp0_1, $composer_0, 805306368 | 14 & $dirty | 896 & $dirty | 7168 & $dirty >> 6 | 3670016 & $dirty | 234881024 & $dirty << 15, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(Button$composable$lambda_2(onClick, modifier_0, enabled_0, interactionSource_0, elevation_0, shape_0, border_0, colors_0, contentPadding_0, content, $changed, $default));
    }
  }
  function DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.kdx_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).ha9 = function (interaction, $completion) {
    var tmp = this.ia9(interaction, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.ha9((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          var tmp0_subject = this.ldx_1;
          if (tmp0_subject instanceof Enter) {
            this.kdx_1.g23(this.ldx_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.kdx_1.k2l(this.ldx_1.ybo_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.kdx_1.g23(this.ldx_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.kdx_1.k2l(this.ldx_1.xbn_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.kdx_1.g23(this.ldx_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.kdx_1.k2l(this.ldx_1.bbq_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.kdx_1.k2l(this.ldx_1.dbq_1);
                      }
                    }
                  }
                }
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda$slambda).ia9 = function (interaction, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda(this.kdx_1, completion);
    i.ldx_1 = interaction;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.ha9(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.mdx_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.mdx_1(value, $completion);
  };
  function DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.vdx_1 = $interactionSource;
    this.wdx_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = this.vdx_1.sa8();
            var tmp_1 = DefaultButtonElevation$elevation$composable$slambda$slambda_0(this.wdx_1, null);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda(this.vdx_1, this.wdx_1, completion);
    i.xdx_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation) {
    this.gdy_1 = $animatable;
    this.hdy_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.gdy_1.d8m(new Dp(this.hdy_1), this);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda_1).u1e = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1(this.gdy_1, this.hdy_1, completion);
    i.idy_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_2($animatable, $target, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_1($animatable, $target, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation) {
    this.rdy_1 = $animatable;
    this.sdy_1 = this$0;
    this.tdy_1 = $target;
    this.udy_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            var tmp_0 = this;
            var tmp0_subject = this.rdy_1.m8l().j36_1;
            tmp_0.wdy_1 = equals(tmp0_subject, this.sdy_1.ydy_1) ? new Press(Companion_getInstance_4().k33_1) : equals(tmp0_subject, this.sdy_1.adz_1) ? new Enter() : equals(tmp0_subject, this.sdy_1.bdz_1) ? new Focus() : null;
            this.dl_1 = 1;
            suspendResult = animateElevation(this.rdy_1, this.tdy_1, this.wdy_1, this.udy_1, this);
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
  protoOf(DefaultButtonElevation$elevation$composable$slambda_3).u1e = function ($this$LaunchedEffect, completion) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3(this.rdy_1, this.sdy_1, this.tdy_1, this.udy_1, completion);
    i.vdy_1 = $this$LaunchedEffect;
    return i;
  };
  function DefaultButtonElevation$elevation$composable$slambda_4($animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new DefaultButtonElevation$elevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultButtonElevation(defaultElevation, pressedElevation, disabledElevation, hoveredElevation, focusedElevation) {
    this.xdy_1 = defaultElevation;
    this.ydy_1 = pressedElevation;
    this.zdy_1 = disabledElevation;
    this.adz_1 = hoveredElevation;
    this.bdz_1 = focusedElevation;
  }
  protoOf(DefaultButtonElevation).bdx = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1494019001);
    sourceInformation($composer_0, 'C(elevation$composable)506@20624L46,507@20713L1077,507@20679L1111,548@22239L51:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1494019001, $changed, -1, 'androidx.compose.material.DefaultButtonElevation.elevation$composable (Button.kt:505)');
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
    if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      var value = mutableStateListOf();
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var interactions = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_2.y1t(interactionSource) | $composer_2.y1t(interactions));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      var value_0 = DefaultButtonElevation$elevation$composable$slambda_0(interactionSource, interactions, null);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    LaunchedEffect$composable(interactionSource, tmp0_0, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = this.zdy_1;
    } else {
      var tmp_4;
      if (interaction instanceof Press) {
        tmp_4 = this.ydy_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_4 = this.adz_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_4 = this.bdz_1;
          } else {
            tmp_4 = this.xdy_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.m1r(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let_1 = $composer_3.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_5;
    if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_5()));
      $composer_3.x1t(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = tmp0_let_1;
    }
    var tmp_6 = tmp_5;
    var tmp0_1 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
    $composer_3.o1r();
    var animatable = tmp0_1;
    if (!enabled) {
      $composer_0.m1r(-1895906632);
      sourceInformation($composer_0, '552@22412L57,552@22389L80');
      var tmp_7 = new Dp(target);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.m1r(-1124426577);
      sourceInformation($composer_4, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = !!($composer_4.y1t(animatable) | $composer_4.y1t(new Dp(target)));
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.DefaultButtonElevation.elevation$composable.<anonymous>' call
        var value_2 = DefaultButtonElevation$elevation$composable$slambda_2(animatable, target, null);
        $composer_4.x1t(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_2 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_4.o1r();
      LaunchedEffect$composable(tmp_7, tmp0_2, $composer_0, 0);
      $composer_0.o1r();
    } else {
      $composer_0.m1r(-1895906461);
      sourceInformation($composer_0, '556@22499L546');
      var tmp_10 = new Dp(target);
      LaunchedEffect$composable(tmp_10, DefaultButtonElevation$elevation$composable$slambda_4(animatable, this, target, interaction, null), $composer_0, 0);
      $composer_0.o1r();
    }
    var tmp0_3 = animatable.e8m();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_3;
  };
  function DefaultButtonColors(backgroundColor, contentColor, disabledBackgroundColor, disabledContentColor) {
    this.cdz_1 = backgroundColor;
    this.ddz_1 = contentColor;
    this.edz_1 = disabledBackgroundColor;
    this.fdz_1 = disabledContentColor;
  }
  protoOf(DefaultButtonColors).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof DefaultButtonColors))
      THROW_CCE();
    if (!equals(this.cdz_1, other.cdz_1))
      return false;
    if (!equals(this.ddz_1, other.ddz_1))
      return false;
    if (!equals(this.edz_1, other.edz_1))
      return false;
    if (!equals(this.fdz_1, other.fdz_1))
      return false;
    return true;
  };
  protoOf(DefaultButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.cdz_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ddz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.edz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.fdz_1) | 0;
    return result;
  };
  protoOf(DefaultButtonColors).adx = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(717515014);
    sourceInformation($composer_0, 'C(backgroundColor$composable)587@23484L79:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(717515014, $changed, -1, 'androidx.compose.material.DefaultButtonColors.backgroundColor$composable (Button.kt:586)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.cdz_1 : this.edz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultButtonColors).zdw = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1065735709);
    sourceInformation($composer_0, 'C(contentColor$composable)592@23666L73:Button.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1065735709, $changed, -1, 'androidx.compose.material.DefaultButtonColors.contentColor$composable (Button.kt:591)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.ddz_1 : this.fdz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  function Button$composable$lambda($contentColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('contentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $contentColor$delegate.s().y3w_1;
  }
  function Button$composable$lambda_0($this$semantics) {
    set_role($this$semantics, Companion_getInstance_6().h7t_1);
    return Unit_getInstance();
  }
  function Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C121@5701L467:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-630330208, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous> (Button.kt:120)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp0_Row$composable = padding_0(defaultMinSize(Companion_getInstance(), ButtonDefaults_getInstance().ldw_1, ButtonDefaults_getInstance().mdw_1), $contentPadding._v);
        var tmp1_Row$composable = Arrangement_getInstance().r93_1;
        var tmp2_Row$composable = Companion_getInstance_2().y5e_1;
        var tmp3_Row$composable = $composer_0;
        var tmp4_Row$composable = 432 | 7168 & $$dirty >> 18;
        var modifier = tmp0_Row$composable;
        var horizontalArrangement = tmp1_Row$composable;
        var verticalAlignment = tmp2_Row$composable;
        var $composer_1 = tmp3_Row$composable;
        $composer_1.m1r(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          horizontalArrangement = Arrangement_getInstance().n93_1;
        if (!(0 === 0))
          verticalAlignment = Companion_getInstance_2().x5e_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & tmp4_Row$composable >> 3 | 112 & tmp4_Row$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 112 & tmp4_Row$composable << 3;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.m1r(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.z1s();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.p1t();
        if ($composer_3.a1t()) {
          $composer_3.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_getInstance(), $composer_4, 6 | 112 & tmp4_Row$composable >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.o1r();
        $composer_3.s1t();
        $composer_2.o1r();
        $composer_1.o1r();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
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
  function Button$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C119@5651L10,118@5595L587:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1699085201, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous>.<anonymous> (Button.kt:117)');
        }
        var tmp_0 = MaterialTheme_getInstance().edw($composer_0, 6).adw_1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -630330208, true, Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
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
  function Button$composable$lambda_1($contentColor$delegate, $contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C117@5509L683:Button.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(7524271, $changed, -1, 'androidx.compose.material.Button$composable.<anonymous> (Button.kt:116)');
        }
        var tmp_0 = [get_LocalContentAlpha().u28(_Color___get_alpha__impl__wcfyv1(Button$composable$lambda($contentColor$delegate)))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1699085201, true, Button$composable$lambda$lambda($contentPadding, $$dirty, $content));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Button$composable$lambda_2($onClick, $modifier, $enabled, $interactionSource, $elevation, $shape, $border, $colors, $contentPadding, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $elevation._v, $shape._v, $border._v, $colors._v, $contentPadding._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Card$composable(modifier, shape, backgroundColor, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = modifier;
    var shape_0 = shape;
    var backgroundColor_0 = backgroundColor;
    var contentColor_0 = contentColor;
    var border_0 = border;
    var elevation_0 = elevation;
    var $composer_0 = $composer;
    $composer_0.m1r(-796265464);
    sourceInformation($composer_0, 'C(Card$composable)P(5,6,0:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)60@2616L6,61@2674L6,62@2716L32,67@2854L218:Card.kt#jmzs0o');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 2) === 0))
      shape_0 = MaterialTheme_getInstance().ydu($composer_0, 6).udu_1;
    if (!(($default & 4) === 0))
      backgroundColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).odv();
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor$composable(backgroundColor_0, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0))
      border_0 = null;
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      elevation_0 = _Dp___init__impl__ms3zkb(1);
    }
    if (isTraceInProgress()) {
      traceEventStart(-796265464, $changed, -1, 'androidx.compose.material.Card$composable (Card.kt:58)');
    }
    Surface$composable(modifier_0, shape_0, backgroundColor_0, contentColor_0, border_0, elevation_0, content, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed | 458752 & $changed | 3670016 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function get_LocalColors() {
    _init_properties_Colors_kt__dgoqts();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.adv_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.bdv_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.cdv_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.ddv_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.edv_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.fdv_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.gdv_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.hdv_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.idv_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.jdv_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.kdv_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.ldv_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.mdv_1 = mutableStateOf(isLight, structuralEqualityPolicy());
    this.ndv_1 = 0;
  }
  protoOf(Colors).gdz = function (_set____db54di) {
    primary$factory();
    return this.adv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).wdw = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    primary$factory_0();
    return this.adv_1.s().y3w_1;
  };
  protoOf(Colors).hdz = function (_set____db54di) {
    primaryVariant$factory();
    return this.bdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).idz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    primaryVariant$factory_0();
    return this.bdv_1.s().y3w_1;
  };
  protoOf(Colors).jdz = function (_set____db54di) {
    secondary$factory();
    return this.cdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).kdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    secondary$factory_0();
    return this.cdv_1.s().y3w_1;
  };
  protoOf(Colors).ldz = function (_set____db54di) {
    secondaryVariant$factory();
    return this.ddv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).mdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    secondaryVariant$factory_0();
    return this.ddv_1.s().y3w_1;
  };
  protoOf(Colors).ndz = function (_set____db54di) {
    background$factory();
    return this.edv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).f4v = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    background$factory_0();
    return this.edv_1.s().y3w_1;
  };
  protoOf(Colors).odz = function (_set____db54di) {
    surface$factory();
    return this.fdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).odv = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    surface$factory_0();
    return this.fdv_1.s().y3w_1;
  };
  protoOf(Colors).pdz = function (_set____db54di) {
    error$factory();
    return this.gdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).qdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    error$factory_0();
    return this.gdv_1.s().y3w_1;
  };
  protoOf(Colors).rdz = function (_set____db54di) {
    onPrimary$factory();
    return this.hdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).sdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onPrimary$factory_0();
    return this.hdv_1.s().y3w_1;
  };
  protoOf(Colors).tdz = function (_set____db54di) {
    onSecondary$factory();
    return this.idv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).udz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSecondary$factory_0();
    return this.idv_1.s().y3w_1;
  };
  protoOf(Colors).vdz = function (_set____db54di) {
    onBackground$factory();
    return this.jdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).wdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onBackground$factory_0();
    return this.jdv_1.s().y3w_1;
  };
  protoOf(Colors).xdz = function (_set____db54di) {
    onSurface$factory();
    return this.kdv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).xdw = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSurface$factory_0();
    return this.kdv_1.s().y3w_1;
  };
  protoOf(Colors).ydz = function (_set____db54di) {
    onError$factory();
    return this.ldv_1.f1d(new Color(_set____db54di));
  };
  protoOf(Colors).zdz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onError$factory_0();
    return this.ldv_1.s().y3w_1;
  };
  protoOf(Colors).ae0 = function (_set____db54di) {
    isLight$factory();
    return this.mdv_1.f1d(_set____db54di);
  };
  protoOf(Colors).be0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isLight$factory_0();
    return this.mdv_1.s();
  };
  protoOf(Colors).ce0 = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight);
  };
  protoOf(Colors).de0 = function (primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight, $super) {
    primary = primary === VOID ? this.wdw() : primary;
    primaryVariant = primaryVariant === VOID ? this.idz() : primaryVariant;
    secondary = secondary === VOID ? this.kdz() : secondary;
    secondaryVariant = secondaryVariant === VOID ? this.mdz() : secondaryVariant;
    background = background === VOID ? this.f4v() : background;
    surface = surface === VOID ? this.odv() : surface;
    error = error === VOID ? this.qdz() : error;
    onPrimary = onPrimary === VOID ? this.sdz() : onPrimary;
    onSecondary = onSecondary === VOID ? this.udz() : onSecondary;
    onBackground = onBackground === VOID ? this.wdz() : onBackground;
    onSurface = onSurface === VOID ? this.xdw() : onSurface;
    onError = onError === VOID ? this.zdz() : onError;
    isLight = isLight === VOID ? this.be0() : isLight;
    return $super === VOID ? this.ce0(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) : $super.ce0.call(this, new Color(primary), new Color(primaryVariant), new Color(secondary), new Color(secondaryVariant), new Color(background), new Color(surface), new Color(error), new Color(onPrimary), new Color(onSecondary), new Color(onBackground), new Color(onSurface), new Color(onError), isLight);
  };
  protoOf(Colors).toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.wdw()) + ', ') + ('primaryVariant=' + new Color(this.idz()) + ', ') + ('secondary=' + new Color(this.kdz()) + ', ') + ('secondaryVariant=' + new Color(this.mdz()) + ', ') + ('background=' + new Color(this.f4v()) + ', ') + ('surface=' + new Color(this.odv()) + ', ') + ('error=' + new Color(this.qdz()) + ', ') + ('onPrimary=' + new Color(this.sdz()) + ', ') + ('onSecondary=' + new Color(this.udz()) + ', ') + ('onBackground=' + new Color(this.wdz()) + ', ') + ('onSurface=' + new Color(this.xdw()) + ', ') + ('onError=' + new Color(this.zdz()) + ', ') + ('isLight=' + this.be0()) + ')';
  };
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    primary = primary === VOID ? Color_0(new Long(-10354450, 0)) : primary;
    primaryVariant = primaryVariant === VOID ? Color_0(new Long(-13172557, 0)) : primaryVariant;
    secondary = secondary === VOID ? Color_0(new Long(-16524602, 0)) : secondary;
    secondaryVariant = secondaryVariant === VOID ? Color_0(new Long(-16676986, 0)) : secondaryVariant;
    background = background === VOID ? Companion_getInstance_7().u3x_1 : background;
    surface = surface === VOID ? Companion_getInstance_7().u3x_1 : surface;
    error = error === VOID ? Color_0(new Long(-5242848, 0)) : error;
    onPrimary = onPrimary === VOID ? Companion_getInstance_7().u3x_1 : onPrimary;
    onSecondary = onSecondary === VOID ? Companion_getInstance_7().q3x_1 : onSecondary;
    onBackground = onBackground === VOID ? Companion_getInstance_7().q3x_1 : onBackground;
    onSurface = onSurface === VOID ? Companion_getInstance_7().q3x_1 : onSurface;
    onError = onError === VOID ? Companion_getInstance_7().u3x_1 : onError;
    _init_properties_Colors_kt__dgoqts();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_Colors_kt__dgoqts();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -62582793, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*296@11462L6,296@11533L7:Colors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-62582793, $changed, -1, 'androidx.compose.material.contentColorFor$composable (Colors.kt:295)');
    }
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().zdu($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
      tmp = tmp0_takeOrElse;
    } else {
      // Inline function 'androidx.compose.material.contentColorFor$composable.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.y3w_1;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_Colors_kt__dgoqts();
    return equals(backgroundColor, _this__u8e3s4.wdw()) ? _this__u8e3s4.sdz() : equals(backgroundColor, _this__u8e3s4.idz()) ? _this__u8e3s4.sdz() : equals(backgroundColor, _this__u8e3s4.kdz()) ? _this__u8e3s4.udz() : equals(backgroundColor, _this__u8e3s4.mdz()) ? _this__u8e3s4.udz() : equals(backgroundColor, _this__u8e3s4.f4v()) ? _this__u8e3s4.wdz() : equals(backgroundColor, _this__u8e3s4.odv()) ? _this__u8e3s4.xdw() : equals(backgroundColor, _this__u8e3s4.qdz()) ? _this__u8e3s4.zdz() : Companion_getInstance_7().c3y_1;
  }
  function darkColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    primary = primary === VOID ? Color_0(new Long(-4487428, 0)) : primary;
    primaryVariant = primaryVariant === VOID ? Color_0(new Long(-13172557, 0)) : primaryVariant;
    secondary = secondary === VOID ? Color_0(new Long(-16524602, 0)) : secondary;
    secondaryVariant = secondaryVariant === VOID ? secondary : secondaryVariant;
    background = background === VOID ? Color_0(new Long(-15592942, 0)) : background;
    surface = surface === VOID ? Color_0(new Long(-15592942, 0)) : surface;
    error = error === VOID ? Color_0(new Long(-3185031, 0)) : error;
    onPrimary = onPrimary === VOID ? Companion_getInstance_7().q3x_1 : onPrimary;
    onSecondary = onSecondary === VOID ? Companion_getInstance_7().q3x_1 : onSecondary;
    onBackground = onBackground === VOID ? Companion_getInstance_7().u3x_1 : onBackground;
    onSurface = onSurface === VOID ? Companion_getInstance_7().u3x_1 : onSurface;
    onError = onError === VOID ? Companion_getInstance_7().q3x_1 : onError;
    _init_properties_Colors_kt__dgoqts();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, false);
  }
  function updateColorsFrom(_this__u8e3s4, other) {
    _init_properties_Colors_kt__dgoqts();
    _this__u8e3s4.gdz(other.wdw());
    _this__u8e3s4.hdz(other.idz());
    _this__u8e3s4.jdz(other.kdz());
    _this__u8e3s4.ldz(other.mdz());
    _this__u8e3s4.ndz(other.f4v());
    _this__u8e3s4.odz(other.odv());
    _this__u8e3s4.pdz(other.qdz());
    _this__u8e3s4.rdz(other.sdz());
    _this__u8e3s4.tdz(other.udz());
    _this__u8e3s4.vdz(other.wdz());
    _this__u8e3s4.xdz(other.xdw());
    _this__u8e3s4.ydz(other.zdz());
    _this__u8e3s4.ae0(other.be0());
  }
  function LocalColors$lambda() {
    _init_properties_Colors_kt__dgoqts();
    return lightColors();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wdw());
    }, function (receiver, value) {
      return receiver.gdz(value.y3w_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wdw());
    }, function (receiver, value) {
      return receiver.gdz(value.y3w_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.idz());
    }, function (receiver, value) {
      return receiver.hdz(value.y3w_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.idz());
    }, function (receiver, value) {
      return receiver.hdz(value.y3w_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kdz());
    }, function (receiver, value) {
      return receiver.jdz(value.y3w_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kdz());
    }, function (receiver, value) {
      return receiver.jdz(value.y3w_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mdz());
    }, function (receiver, value) {
      return receiver.ldz(value.y3w_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mdz());
    }, function (receiver, value) {
      return receiver.ldz(value.y3w_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.f4v());
    }, function (receiver, value) {
      return receiver.ndz(value.y3w_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.f4v());
    }, function (receiver, value) {
      return receiver.ndz(value.y3w_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.odv());
    }, function (receiver, value) {
      return receiver.odz(value.y3w_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.odv());
    }, function (receiver, value) {
      return receiver.odz(value.y3w_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.qdz());
    }, function (receiver, value) {
      return receiver.pdz(value.y3w_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.qdz());
    }, function (receiver, value) {
      return receiver.pdz(value.y3w_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.sdz());
    }, function (receiver, value) {
      return receiver.rdz(value.y3w_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.sdz());
    }, function (receiver, value) {
      return receiver.rdz(value.y3w_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.udz());
    }, function (receiver, value) {
      return receiver.tdz(value.y3w_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.udz());
    }, function (receiver, value) {
      return receiver.tdz(value.y3w_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wdz());
    }, function (receiver, value) {
      return receiver.vdz(value.y3w_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wdz());
    }, function (receiver, value) {
      return receiver.vdz(value.y3w_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.xdw());
    }, function (receiver, value) {
      return receiver.xdz(value.y3w_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.xdw());
    }, function (receiver, value) {
      return receiver.xdz(value.y3w_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.zdz());
    }, function (receiver, value) {
      return receiver.ydz(value.y3w_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.zdz());
    }, function (receiver, value) {
      return receiver.ydz(value.y3w_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.be0();
    }, function (receiver, value) {
      return receiver.ae0(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.be0();
    }, function (receiver, value) {
      return receiver.ae0(value);
    });
  }
  var properties_initialized_Colors_kt_23tfjm;
  function _init_properties_Colors_kt__dgoqts() {
    if (!properties_initialized_Colors_kt_23tfjm) {
      properties_initialized_Colors_kt_23tfjm = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda);
    }
  }
  function get_LocalContentAlpha() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function contentAlpha$composable($this, highContrastAlpha, lowContrastAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-198048456);
    sourceInformation($composer_0, 'C(contentAlpha$composable)76@2623L7,77@2670L6:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-198048456, $changed, -1, 'androidx.compose.material.ContentAlpha.contentAlpha$composable (ContentAlpha.kt:70)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var contentColor = tmp0.y3w_1;
    var lightTheme = MaterialTheme_getInstance().zdu($composer_0, 6).be0();
    var tmp;
    if (lightTheme) {
      tmp = luminance(contentColor) > 0.5 ? highContrastAlpha : lowContrastAlpha;
    } else {
      tmp = luminance(contentColor) < 0.5 ? highContrastAlpha : lowContrastAlpha;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function ContentAlpha() {
    ContentAlpha_instance = this;
    this.fdw_1 = 0;
  }
  protoOf(ContentAlpha).gdw = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1959843334);
    sourceInformation($composer_0, 'C($get-high$$composable)34@1107L146:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1959843334, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-high$$composable (ContentAlpha.kt:34)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 1.0, 0.87, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(ContentAlpha).hdw = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-277492921);
    sourceInformation($composer_0, 'C($get-medium$$composable)45@1458L150:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-277492921, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-medium$$composable (ContentAlpha.kt:45)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.74, 0.6, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(ContentAlpha).ydw = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(856927968);
    sourceInformation($composer_0, 'C($get-disabled$$composable)56@1805L154:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(856927968, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-disabled$$composable (ContentAlpha.kt:56)');
    }
    HighContrastContentAlpha_getInstance();
    LowContrastContentAlpha_getInstance();
    var tmp0 = contentAlpha$composable(this, 0.38, 0.38, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  var ContentAlpha_instance;
  function ContentAlpha_getInstance() {
    if (ContentAlpha_instance == null)
      new ContentAlpha();
    return ContentAlpha_instance;
  }
  function HighContrastContentAlpha() {
    HighContrastContentAlpha_instance = this;
    this.ee0_1 = 1.0;
    this.fe0_1 = 0.74;
    this.ge0_1 = 0.38;
  }
  var HighContrastContentAlpha_instance;
  function HighContrastContentAlpha_getInstance() {
    if (HighContrastContentAlpha_instance == null)
      new HighContrastContentAlpha();
    return HighContrastContentAlpha_instance;
  }
  function LowContrastContentAlpha() {
    LowContrastContentAlpha_instance = this;
    this.he0_1 = 0.87;
    this.ie0_1 = 0.6;
    this.je0_1 = 0.38;
  }
  var LowContrastContentAlpha_instance;
  function LowContrastContentAlpha_getInstance() {
    if (LowContrastContentAlpha_instance == null)
      new LowContrastContentAlpha();
    return LowContrastContentAlpha_instance;
  }
  function LocalContentAlpha$lambda() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return 1.0;
  }
  var properties_initialized_ContentAlpha_kt_tnmwxz;
  function _init_properties_ContentAlpha_kt__y2n6o5() {
    if (!properties_initialized_ContentAlpha_kt_tnmwxz) {
      properties_initialized_ContentAlpha_kt_tnmwxz = true;
      LocalContentAlpha = compositionLocalOf(VOID, LocalContentAlpha$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_7().q3x_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function ElevationDefaults() {
    ElevationDefaults_instance = this;
  }
  protoOf(ElevationDefaults).xe0 = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).ye0 = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    if (ElevationDefaults_instance == null)
      new ElevationDefaults();
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.se0_1 = _this__u8e3s4;
    this.te0_1 = target;
    this.ue0_1 = from;
    this.ve0_1 = to;
  }
  protoOf($animateElevationCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.we0_1 = !(this.ve0_1 == null) ? ElevationDefaults_getInstance().xe0(this.ve0_1) : !(this.ue0_1 == null) ? ElevationDefaults_getInstance().ye0(this.ue0_1) : null;
            if (!(this.we0_1 == null)) {
              this.dl_1 = 2;
              suspendResult = this.se0_1.c8m(new Dp(this.te0_1), this.we0_1, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = this.se0_1.d8m(new Dp(this.te0_1), this);
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
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (!properties_initialized_Elevation_kt_70s6ab) {
      properties_initialized_Elevation_kt_70s6ab = true;
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
      HoveredOutgoingSpec = new TweenSpec(120, VOID, new CubicBezierEasing(0.4, 0.0, 0.6, 1.0));
    }
  }
  function get_LocalElevationOverlay() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalElevationOverlay;
  }
  var LocalElevationOverlay;
  function get_LocalAbsoluteElevation() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return LocalAbsoluteElevation;
  }
  var LocalAbsoluteElevation;
  function DefaultElevationOverlay() {
    DefaultElevationOverlay_instance = this;
  }
  protoOf(DefaultElevationOverlay).ze0 = function (color, elevation, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1758936578, 'C(apply$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)69@2742L6,71@2841L42:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1758936578, $changed, -1, 'androidx.compose.material.DefaultElevationOverlay.apply$composable (ElevationOverlay.kt:68)');
    }
    var colors = MaterialTheme_getInstance().zdu($composer_0, 6);
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(elevation, tmp$ret$0) > 0) {
      tmp_0 = !colors.be0();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var foregroundColor = calculateForegroundColor$composable(color, elevation, $composer_0, 14 & $changed | 112 & $changed);
      tmp = compositeOver(foregroundColor, color);
    } else {
      tmp = color;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var DefaultElevationOverlay_instance;
  function DefaultElevationOverlay_getInstance() {
    if (DefaultElevationOverlay_instance == null)
      new DefaultElevationOverlay();
    return DefaultElevationOverlay_instance;
  }
  function calculateForegroundColor$composable(backgroundColor, elevation, $composer, $changed) {
    _init_properties_ElevationOverlay_kt__499xhv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1391092752, 'C(calculateForegroundColor$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)88@3446L32:ElevationOverlay.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1391092752, $changed, -1, 'androidx.compose.material.calculateForegroundColor$composable (ElevationOverlay.kt:86)');
    }
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(tmp0_ln) + 2.0) / 100.0;
    var baseForegroundColor = contentColorFor$composable(backgroundColor, $composer_0, 14 & $changed);
    var tmp0 = Color__copy$default_impl_ectz3s(baseForegroundColor, alpha);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalElevationOverlay$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    return DefaultElevationOverlay_getInstance();
  }
  function LocalAbsoluteElevation$lambda() {
    _init_properties_ElevationOverlay_kt__499xhv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_ElevationOverlay_kt_xrg85x;
  function _init_properties_ElevationOverlay_kt__499xhv() {
    if (!properties_initialized_ElevationOverlay_kt_xrg85x) {
      properties_initialized_ElevationOverlay_kt_xrg85x = true;
      LocalElevationOverlay = staticCompositionLocalOf(LocalElevationOverlay$lambda);
      LocalAbsoluteElevation = compositionLocalOf(VOID, LocalAbsoluteElevation$lambda);
    }
  }
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon$composable(imageVector, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = modifier;
    var tint_0 = tint;
    var $composer_0 = $composer;
    $composer_0.m1r(-1798234707);
    sourceInformation($composer_0, 'C(Icon$composable)P(1!,3:c#ui.graphics.Color)65@3149L7,65@3188L7,68@3229L34,67@3205L163:Icon.kt#jmzs0o');
    if (!(($default & 4) === 0))
      modifier_0 = Companion_getInstance();
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var tmp = tmp0.y3w_1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tint_0 = Color__copy$default_impl_ectz3s(tmp, tmp0_0);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1798234707, $changed, -1, 'androidx.compose.material.Icon$composable (Icon.kt:61)');
    }
    Icon$composable_0(rememberVectorPainter$composable(imageVector, $composer_0, 14 & $changed), contentDescription, modifier_0, tint_0, $composer_0, 112 & $changed | 896 & $changed | 7168 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function Icon$composable_0(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1405370588);
    sourceInformation($composer_0, 'C(Icon$composable)P(2!,3:c#ui.graphics.Color)133@6456L7,133@6495L7,145@6878L253:Icon.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(painter) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.y3w_1))) : false) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_1);
          var tmp = tmp0.y3w_1;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
          sourceInformationMarkerEnd($composer_2);
          tint_0._v = new Color(Color__copy$default_impl_ectz3s(tmp, tmp0_0));
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1405370588, $dirty, -1, 'androidx.compose.material.Icon$composable (Icon.kt:129)');
      }
      var colorFilter = tint_0._v.equals(new Color(Companion_getInstance_7().c3y_1)) ? null : Companion_getInstance_8().l42(tint_0._v.y3w_1);
      $composer_0.m1r(1651962591);
      sourceInformation($composer_0, '138@6734L103');
      var tmp_0;
      if (!(contentDescription == null)) {
        var tmp_1 = Companion_getInstance();
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.m1r(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_3.y1t(contentDescription);
        // Inline function 'kotlin.let' call
        var tmp0_let = $composer_3.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.Icon$composable.<anonymous>' call
          var value = Icon$composable$lambda(contentDescription);
          $composer_3.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        var tmp_3 = tmp_2;
        var tmp0_1 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        $composer_3.o1r();
        tmp_0 = semantics(tmp_1, VOID, tmp0_1);
      } else {
        tmp_0 = Companion_getInstance();
      }
      var tmp0_group = tmp_0;
      $composer_0.o1r();
      var semantics_0 = tmp0_group;
      var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
      var tmp1_contentScale = Companion_getInstance_9().f5m_1;
      Box$composable(paint(tmp0_$receiver, painter, VOID, VOID, tmp1_contentScale, VOID, colorFilter).n5f(semantics_0), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(Icon$composable$lambda_0(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    if (equals(painter.s4c(), Companion_getInstance_10().r34_1) ? true : isInfinite_0(painter.s4c())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_getInstance();
    }
    return _this__u8e3s4.n5f(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    _init_properties_Icon_kt__pgqcnt();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) ? isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4)) : false;
  }
  function Icon$composable$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_6().m7t_1);
      return Unit_getInstance();
    };
  }
  function Icon$composable$lambda_0($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon$composable_0($painter, $contentDescription, $modifier._v, $tint._v.y3w_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (!properties_initialized_Icon_kt_u3g1lx) {
      properties_initialized_Icon_kt_u3g1lx = true;
      var tmp = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function get_RippleRadius() {
    _init_properties_IconButton_kt__dm2lqt();
    return RippleRadius;
  }
  var RippleRadius;
  function IconButton$composable(onClick, modifier, enabled, interactionSource, content, $composer, $changed, $default) {
    _init_properties_IconButton_kt__dm2lqt();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1115064840);
    sourceInformation($composer_0, 'C(IconButton$composable)P(4,3,1,2)62@2761L39,73@3140L54,65@2846L607:IconButton.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
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
            // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1115064840, $dirty, -1, 'androidx.compose.material.IconButton$composable (IconButton.kt:58)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp0_$receiver = minimumInteractiveComponentSize_0(modifier_0._v);
      var tmp1_role = Companion_getInstance_6().h7t_1;
      var tmp_1 = get_RippleRadius();
      var tmp2_indication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 54, 4);
      var modifier_1 = clickable(tmp0_$receiver, interactionSource_0._v, tmp2_indication, enabled_0._v, VOID, tmp1_role, onClick);
      var contentAlignment = Companion_getInstance_2().s5e_1;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      $composer_2.m1r(1330882304);
      sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $composer_3 = $composer_2;
      $composer_3.m1r(1725976829);
      sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
      var localMap = $composer_3.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_4 = $composer_3;
      var tmp_2 = $composer_4.z1s();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_4.p1t();
      if ($composer_4.a1t()) {
        $composer_4.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_4.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_3;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_3 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_4.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.IconButton$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -1248994105, 'C78@3363L84:IconButton.kt#jmzs0o');
      var tmp_4;
      if (enabled_0._v) {
        $composer_6.m1r(-1248994055);
        sourceInformation($composer_6, '77@3320L7');
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentAlpha();
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_7.g1u(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.o1r();
        tmp_4 = tmp0_0;
      } else {
        $composer_6.m1r(-1248994029);
        sourceInformation($composer_6, '77@3346L8');
        var tmp1_group = ContentAlpha_getInstance().ydw($composer_6, 6);
        $composer_6.o1r();
        tmp_4 = tmp1_group;
      }
      var contentAlpha = tmp_4;
      CompositionLocalProvider$composable([get_LocalContentAlpha().u28(contentAlpha)], content, $composer_6, 112 & $dirty >> 9);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.o1r();
      $composer_4.s1t();
      $composer_3.o1r();
      $composer_2.o1r();
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
      tmp0_safe_receiver.z28(IconButton$composable$lambda(onClick, modifier_0, enabled_0, interactionSource_0, content, $changed, $default));
    }
  }
  function IconButton$composable$lambda($onClick, $modifier, $enabled, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton$composable($onClick, $modifier._v, $enabled._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_IconButton_kt_ws0bv7;
  function _init_properties_IconButton_kt__dm2lqt() {
    if (!properties_initialized_IconButton_kt_ws0bv7) {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      RippleRadius = _Dp___init__impl__ms3zkb(24);
    }
  }
  function get_LocalMinimumInteractiveComponentEnforcement() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentEnforcement;
  }
  var LocalMinimumInteractiveComponentEnforcement;
  var LocalMinimumTouchTargetEnforcement;
  function get_minimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return minimumInteractiveComponentSize;
  }
  var minimumInteractiveComponentSize;
  function minimumInteractiveComponentSize_0(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = minimumInteractiveComponentSize$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed$composable(_this__u8e3s4, tmp_0, minimumInteractiveComponentSize$lambda_0);
  }
  function MinimumInteractiveComponentSizeModifier$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = ($width - $placeable.x5h_1 | 0) / 2.0;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var centerX = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = ($height - $placeable.y5h_1 | 0) / 2.0;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var centerY = tmp$ret$1;
      $this$layout.f6y($placeable, centerX, centerY);
      return Unit_getInstance();
    };
  }
  function MinimumInteractiveComponentSizeModifier(size) {
    this.ae1_1 = size;
  }
  protoOf(MinimumInteractiveComponentSizeModifier).v5h = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.w5h(constraints);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = placeable.x5h_1;
    var tmp1_maxOf = _this__u8e3s4.t35(_DpSize___get_width__impl__o3d5gt(this.ae1_1));
    var width = Math.max(tmp0_maxOf, tmp1_maxOf);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = placeable.y5h_1;
    var tmp3_maxOf = _this__u8e3s4.t35(_DpSize___get_height__impl__5xueo2(this.ae1_1));
    var height = Math.max(tmp2_maxOf, tmp3_maxOf);
    return _this__u8e3s4.d5i(width, height, VOID, MinimumInteractiveComponentSizeModifier$measure$lambda(width, placeable, height));
  };
  protoOf(MinimumInteractiveComponentSizeModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof MinimumInteractiveComponentSizeModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.ae1_1, otherModifier.ae1_1);
  };
  protoOf(MinimumInteractiveComponentSizeModifier).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.ae1_1);
  };
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function minimumInteractiveComponentSize$lambda($this$null) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.material.minimumInteractiveComponentSize.<anonymous>' call
    $this$null.u5n_1 = 'minimumInteractiveComponentSize';
    $this$null.w5n_1.a5o('README', 'Reserves at least 48.dp in size to disambiguate touch interactions if the element would measure smaller');
    return Unit_getInstance();
  }
  function minimumInteractiveComponentSize$lambda_0($this$composed, $composer, $changed) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    var $composer_0 = $composer;
    $composer_0.m1r(1964721376);
    sourceInformation($composer_0, 'C55@2521L7:InteractiveComponentSize.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1964721376, $changed, -1, 'androidx.compose.material.minimumInteractiveComponentSize.<anonymous> (InteractiveComponentSize.kt:54)');
    }
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalMinimumInteractiveComponentEnforcement();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      tmp = new MinimumInteractiveComponentSizeModifier(get_minimumInteractiveComponentSize());
    } else {
      tmp = Companion_getInstance();
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumTouchTargetEnforcement = get_LocalMinimumInteractiveComponentEnforcement();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp = _Dp___init__impl__ms3zkb(48);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      minimumInteractiveComponentSize = DpSize(tmp, tmp$ret$1);
    }
  }
  function rememberTextSelectionColors$composable(colors, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(757108492);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)45@1902L6,47@1930L384:MaterialTextSelectionColors.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(757108492, $changed, -1, 'androidx.compose.material.rememberTextSelectionColors$composable (MaterialTextSelectionColors.kt:35)');
    }
    var primaryColor = colors.wdw();
    var backgroundColor = colors.f4v();
    $composer_0.m1r(-1548518187);
    sourceInformation($composer_0, '*43@1845L7');
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(colors, backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
      tmp = tmp0_takeOrElse;
    } else {
      // Inline function 'androidx.compose.material.rememberTextSelectionColors$composable.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.y3w_1;
    }
    var tmp1_group = tmp;
    $composer_0.o1r();
    var textColorWithLowestAlpha = Color__copy$default_impl_ectz3s(tmp1_group, ContentAlpha_getInstance().hdw($composer_0, 6));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-1058148781);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!(!!($composer_2.y1t(new Color(primaryColor)) | $composer_2.y1t(new Color(backgroundColor))) | $composer_2.y1t(new Color(textColorWithLowestAlpha)));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.rememberTextSelectionColors$composable.<anonymous>' call
      var value = new TextSelectionColors(colors.wdw(), calculateSelectionBackgroundColor(primaryColor, textColorWithLowestAlpha, backgroundColor));
      $composer_2.x1t(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_2.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function calculateSelectionBackgroundColor(selectionColor, textColor, backgroundColor) {
    var maximumContrastRatio = calculateContrastRatio(selectionColor, 0.4, textColor, backgroundColor);
    var minimumContrastRatio = calculateContrastRatio(selectionColor, 0.2, textColor, backgroundColor);
    var alpha = maximumContrastRatio >= 4.5 ? 0.4 : minimumContrastRatio < 4.5 ? 0.2 : binarySearchForAccessibleSelectionColorAlpha(selectionColor, textColor, backgroundColor);
    return Color__copy$default_impl_ectz3s(selectionColor, alpha);
  }
  function calculateContrastRatio(selectionColor, selectionColorAlpha, textColor, backgroundColor) {
    var compositeBackground = compositeOver(Color__copy$default_impl_ectz3s(selectionColor, selectionColorAlpha), backgroundColor);
    var compositeTextColor = compositeOver(textColor, compositeBackground);
    return calculateContrastRatio_0(compositeTextColor, compositeBackground);
  }
  function binarySearchForAccessibleSelectionColorAlpha(selectionColor, textColor, backgroundColor) {
    var attempts = 0;
    var maxAttempts = 7;
    var lowAlpha = 0.2;
    var alpha = 0.4;
    var highAlpha = 0.4;
    $l$loop: while (attempts < maxAttempts) {
      var contrastRatio = calculateContrastRatio(selectionColor, alpha, textColor, backgroundColor);
      var percentageError = contrastRatio / 4.5 - 1.0;
      if (0.0 <= percentageError ? percentageError <= 0.01 : false)
        break $l$loop;
      else if (percentageError < 0.0)
        highAlpha = alpha;
      else
        lowAlpha = alpha;
      alpha = (highAlpha + lowAlpha) / 2.0;
      attempts = attempts + 1 | 0;
    }
    return alpha;
  }
  function calculateContrastRatio_0(foreground, background) {
    var foregroundLuminance = luminance(foreground) + 0.05;
    var backgroundLuminance = luminance(background) + 0.05;
    // Inline function 'kotlin.math.max' call
    var tmp = Math.max(foregroundLuminance, backgroundLuminance);
    // Inline function 'kotlin.math.min' call
    return tmp / Math.min(foregroundLuminance, backgroundLuminance);
  }
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.xdu_1 = 0;
  }
  protoOf(MaterialTheme).zdu = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 273761861, 'C($get-colors$$composable)102@4462L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(273761861, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-colors$$composable (MaterialTheme.kt:102)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColors();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).edw = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1858445221, 'C($get-typography$$composable)112@4763L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1858445221, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:112)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).ydu = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 493638021, 'C($get-shapes$$composable)120@4971L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(493638021, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:120)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function MaterialTheme$composable(colors, typography, shapes, content, $composer, $changed, $default) {
    var colors_0 = {_v: colors};
    var typography_0 = {_v: typography};
    var shapes_0 = {_v: shapes};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1109019765);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,3,2)59@2947L6,60@2998L10,61@3045L6,*64@3120L184,69@3367L16,70@3410L45,73@3581L4,71@3460L492:MaterialTheme.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.y1t(colors_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.y1t(typography_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.y1t(shapes_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          colors_0._v = MaterialTheme_getInstance().zdu($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          typography_0._v = MaterialTheme_getInstance().edw($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          shapes_0._v = MaterialTheme_getInstance().ydu($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1109019765, $dirty, -1, 'androidx.compose.material.MaterialTheme$composable (MaterialTheme.kt:58)');
      }
      // Inline function 'kotlin.apply' call
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
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
        var value = colors_0._v.de0();
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
      updateColorsFrom(tmp0, colors_0._v);
      var rememberedColors = tmp0;
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors$composable(rememberedColors, $composer_0, 0);
      var tmp_2 = [get_LocalColors().u28(rememberedColors), get_LocalContentAlpha().u28(ContentAlpha_getInstance().gdw($composer_0, 6)), get_LocalIndication().u28(rippleIndication), get_LocalRippleTheme().u28(MaterialRippleTheme_getInstance()), get_LocalShapes().u28(shapes_0._v), get_LocalTextSelectionColors().u28(selectionColors), get_LocalTypography().u28(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1740102967, true, MaterialTheme$composable$lambda(typography_0, content, $dirty));
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
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_2.x1t(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.o1r();
      CompositionLocalProvider$composable(tmp_2, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.z28(MaterialTheme$composable$lambda_0(colors_0, typography_0, shapes_0, content, $changed, $default));
    }
  }
  function MaterialRippleTheme() {
    MaterialRippleTheme_instance = this;
  }
  protoOf(MaterialRippleTheme).adq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1211684040);
    sourceInformation($composer_0, 'C(defaultColor$composable)128@5172L7,129@5220L6:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1211684040, $changed, -1, 'androidx.compose.material.MaterialRippleTheme.defaultColor$composable (MaterialTheme.kt:127)');
    }
    var tmp = Companion_getInstance_11();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.y3w_1;
    var tmp0_0 = tmp.odu(tmp$ret$0, MaterialTheme_getInstance().zdu($composer_0, 6).be0());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  };
  protoOf(MaterialRippleTheme).bdq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-450539707);
    sourceInformation($composer_0, 'C(rippleAlpha$composable)134@5368L7,135@5412L6:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-450539707, $changed, -1, 'androidx.compose.material.MaterialRippleTheme.rippleAlpha$composable (MaterialTheme.kt:133)');
    }
    var tmp = Companion_getInstance_11();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0.y3w_1;
    var tmp0_0 = tmp.pdu(tmp$ret$0, MaterialTheme_getInstance().zdu($composer_0, 6).be0());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  };
  var MaterialRippleTheme_instance;
  function MaterialRippleTheme_getInstance() {
    if (MaterialRippleTheme_instance == null)
      new MaterialRippleTheme();
    return MaterialRippleTheme_instance;
  }
  function MaterialTheme$composable$lambda$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C81@3906L30:MaterialTheme.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(181426554, $changed, -1, 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous> (MaterialTheme.kt:80)');
        }
        PlatformMaterialTheme$composable($content, $composer_0, 14 & $$dirty >> 9);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3849L97:MaterialTheme.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1740102967, $changed, -1, 'androidx.compose.material.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        var tmp_0 = $typography._v.ydv_1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 181426554, true, MaterialTheme$composable$lambda$lambda($content, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.MaterialTheme$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda_0($colors, $typography, $shapes, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme$composable($colors._v, $typography._v, $shapes._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_MenuElevation() {
    _init_properties_Menu_kt__roln5r();
    return MenuElevation;
  }
  var MenuElevation;
  function get_MenuVerticalMargin() {
    _init_properties_Menu_kt__roln5r();
    return MenuVerticalMargin;
  }
  var MenuVerticalMargin;
  function get_DropdownMenuItemHorizontalPadding() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemHorizontalPadding;
  }
  var DropdownMenuItemHorizontalPadding;
  function get_DropdownMenuVerticalPadding() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuVerticalPadding;
  }
  var DropdownMenuVerticalPadding;
  function get_DropdownMenuItemDefaultMinWidth() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMinWidth;
  }
  var DropdownMenuItemDefaultMinWidth;
  function get_DropdownMenuItemDefaultMaxWidth() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMaxWidth;
  }
  var DropdownMenuItemDefaultMaxWidth;
  function get_DropdownMenuItemDefaultMinHeight() {
    _init_properties_Menu_kt__roln5r();
    return DropdownMenuItemDefaultMinHeight;
  }
  var DropdownMenuItemDefaultMinHeight;
  function DropdownMenuPositionProvider$_init_$lambda_j5q1y9(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Unit_getInstance();
  }
  function DropdownMenuPositionProvider(contentOffset, density, onPositionCalculated) {
    var tmp;
    if (onPositionCalculated === VOID) {
      tmp = DropdownMenuPositionProvider$_init_$lambda_j5q1y9;
    } else {
      tmp = onPositionCalculated;
    }
    onPositionCalculated = tmp;
    this.be1_1 = contentOffset;
    this.ce1_1 = density;
    this.de1_1 = onPositionCalculated;
  }
  protoOf(DropdownMenuPositionProvider).b8j = function (anchorBounds, windowSize, layoutDirection, popupContentSize) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material.DropdownMenuPositionProvider.calculatePosition.<anonymous>' call
    var verticalMargin = this.ce1_1.t35(get_MenuVerticalMargin());
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material.DropdownMenuPositionProvider.calculatePosition.<anonymous>' call
    var contentOffsetX = this.ce1_1.t35(_DpOffset___get_x__impl__uauqb5(this.be1_1));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material.DropdownMenuPositionProvider.calculatePosition.<anonymous>' call
    var contentOffsetY = this.ce1_1.t35(_DpOffset___get_y__impl__1h898y(this.be1_1));
    var toRight = anchorBounds.s36_1 + contentOffsetX | 0;
    var toLeft = (anchorBounds.u36_1 - contentOffsetX | 0) - _IntSize___get_width__impl__d9yl4o(popupContentSize) | 0;
    var toDisplayRight = _IntSize___get_width__impl__d9yl4o(windowSize) - _IntSize___get_width__impl__d9yl4o(popupContentSize) | 0;
    var toDisplayLeft = 0;
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp;
      if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
        tmp = sequenceOf([toRight, toLeft, anchorBounds.s36_1 >= 0 ? toDisplayRight : toDisplayLeft]);
      } else {
        tmp = sequenceOf([toLeft, toRight, anchorBounds.u36_1 <= _IntSize___get_width__impl__d9yl4o(windowSize) ? toDisplayLeft : toDisplayRight]);
      }
      var tmp0_iterator = tmp.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.DropdownMenuPositionProvider.calculatePosition.<anonymous>' call
        if (element >= 0 ? (element + _IntSize___get_width__impl__d9yl4o(popupContentSize) | 0) <= _IntSize___get_width__impl__d9yl4o(windowSize) : false) {
          tmp$ret$7 = element;
          break $l$block;
        }
      }
      tmp$ret$7 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$7;
    var x = tmp0_elvis_lhs == null ? toLeft : tmp0_elvis_lhs;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp4_maxOf = anchorBounds.v36_1 + contentOffsetY | 0;
    var toBottom = Math.max(tmp4_maxOf, verticalMargin);
    var toTop = (anchorBounds.t36_1 - contentOffsetY | 0) - _IntSize___get_height__impl__prv63b(popupContentSize) | 0;
    var toCenter = anchorBounds.t36_1 - (_IntSize___get_height__impl__prv63b(popupContentSize) / 2 | 0) | 0;
    var toDisplayBottom = (_IntSize___get_height__impl__prv63b(windowSize) - _IntSize___get_height__impl__prv63b(popupContentSize) | 0) - verticalMargin | 0;
    var tmp$ret$10;
    $l$block_0: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator_0 = sequenceOf([toBottom, toTop, toCenter, toDisplayBottom]).d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.DropdownMenuPositionProvider.calculatePosition.<anonymous>' call
        if (element_0 >= verticalMargin ? (element_0 + _IntSize___get_height__impl__prv63b(popupContentSize) | 0) <= (_IntSize___get_height__impl__prv63b(windowSize) - verticalMargin | 0) : false) {
          tmp$ret$10 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$10 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$10;
    var y = tmp1_elvis_lhs == null ? toTop : tmp1_elvis_lhs;
    this.de1_1(anchorBounds, new IntRect(x, y, x + _IntSize___get_width__impl__d9yl4o(popupContentSize) | 0, y + _IntSize___get_height__impl__prv63b(popupContentSize) | 0));
    return IntOffset(x, y);
  };
  protoOf(DropdownMenuPositionProvider).toString = function () {
    return 'DropdownMenuPositionProvider(contentOffset=' + new DpOffset(this.be1_1) + ', density=' + this.ce1_1 + ', onPositionCalculated=' + this.de1_1 + ')';
  };
  protoOf(DropdownMenuPositionProvider).hashCode = function () {
    var result = DpOffset__hashCode_impl_mjg9df(this.be1_1);
    result = imul(result, 31) + hashCode(this.ce1_1) | 0;
    result = imul(result, 31) + hashCode(this.de1_1) | 0;
    return result;
  };
  protoOf(DropdownMenuPositionProvider).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DropdownMenuPositionProvider))
      return false;
    var tmp0_other_with_cast = other instanceof DropdownMenuPositionProvider ? other : THROW_CCE();
    if (!equals(this.be1_1, tmp0_other_with_cast.be1_1))
      return false;
    if (!equals(this.ce1_1, tmp0_other_with_cast.ce1_1))
      return false;
    if (!equals(this.de1_1, tmp0_other_with_cast.de1_1))
      return false;
    return true;
  };
  function calculateTransformOrigin(parentBounds, menuBounds) {
    _init_properties_Menu_kt__roln5r();
    var tmp;
    if (menuBounds.s36_1 >= parentBounds.u36_1) {
      tmp = 0.0;
    } else if (menuBounds.u36_1 <= parentBounds.s36_1) {
      tmp = 1.0;
    } else if (menuBounds.v33() === 0) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = parentBounds.s36_1;
      var tmp1_max = menuBounds.s36_1;
      var tmp_0 = Math.max(tmp0_max, tmp1_max);
      // Inline function 'kotlin.math.min' call
      var tmp2_min = parentBounds.u36_1;
      var tmp3_min = menuBounds.u36_1;
      var intersectionCenter = (tmp_0 + Math.min(tmp2_min, tmp3_min) | 0) / 2 | 0;
      tmp = (intersectionCenter - menuBounds.s36_1 | 0) / menuBounds.v33();
    }
    var pivotX = tmp;
    var tmp_1;
    if (menuBounds.t36_1 >= parentBounds.v36_1) {
      tmp_1 = 0.0;
    } else if (menuBounds.v36_1 <= parentBounds.t36_1) {
      tmp_1 = 1.0;
    } else if (menuBounds.w33() === 0) {
      tmp_1 = 0.0;
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp4_max = parentBounds.t36_1;
      var tmp5_max = menuBounds.t36_1;
      var tmp_2 = Math.max(tmp4_max, tmp5_max);
      // Inline function 'kotlin.math.min' call
      var tmp6_min = parentBounds.v36_1;
      var tmp7_min = menuBounds.v36_1;
      var intersectionCenter_0 = (tmp_2 + Math.min(tmp6_min, tmp7_min) | 0) / 2 | 0;
      tmp_1 = (intersectionCenter_0 - menuBounds.t36_1 | 0) / menuBounds.w33();
    }
    var pivotY = tmp_1;
    return TransformOrigin(pivotX, pivotY);
  }
  function DropdownMenuContent$composable(expandedStates, transformOriginState, scrollState, modifier, content, $composer, $changed, $default) {
    _init_properties_Menu_kt__roln5r();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1963508107);
    sourceInformation($composer_0, 'C(DropdownMenuContent$composable)P(1,4,3,2)155@7508L48,157@7586L666,183@8282L477,203@8812L153,202@8764L491:Menu.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(expandedStates) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(transformOriginState) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(scrollState) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      if (!(($default & 8) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(1963508107, $dirty, -1, 'androidx.compose.material.DropdownMenuContent$composable (Menu.kt:147)');
      }
      var transition = updateTransition$composable(expandedStates, 'DropDownMenu', $composer_0, 48 | 14 & $dirty, 0);
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec = DropdownMenuContent$composable$lambda_1;
      var label = null;
      var $composer_1 = $composer_0;
      $composer_1.m1r(1610198356);
      sourceInformation($composer_1, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = DropdownMenuContent$composable$lambda_2;
      }
      if (!(2 === 0))
        label = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var transitionSpec_0 = transitionSpec;
      var label_0 = label;
      var $composer_2 = $composer_1;
      $composer_2.m1r(-1940744337);
      sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = DropdownMenuContent$composable$lambda_3;
      }
      if (!(0 === 0))
        label_0 = 'ValueAnimation';
      // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
      var tmp3_anonymous = transition.c8z();
      var tmp5_anonymous = 112 & 0 >> 9;
      var $composer_3 = $composer_2;
      $composer_3.m1r(1652594929);
      sourceInformation($composer_3, 'C:Menu.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(1652594929, tmp5_anonymous, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:173)');
      }
      var tmp;
      if (tmp3_anonymous) {
        tmp = 1.0;
      } else {
        tmp = 0.8;
      }
      var tmp0 = tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_3.o1r();
      var initialValue = tmp0;
      // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
      var tmp6_anonymous = transition.q8x();
      var tmp8_anonymous = 112 & 0 >> 9;
      var $composer_4 = $composer_2;
      $composer_4.m1r(1652594929);
      sourceInformation($composer_4, 'C:Menu.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(1652594929, tmp8_anonymous, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:173)');
      }
      var tmp_0;
      if (tmp6_anonymous) {
        tmp_0 = 1.0;
      } else {
        tmp_0 = 0.8;
      }
      var tmp0_0 = tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_4.o1r();
      var targetValue = tmp0_0;
      var animationSpec = transitionSpec_0(transition.m8y(), $composer_2, 112 & 0 >> 3);
      var tmp0_1 = createTransitionAnimation$composable(transition, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_0, $composer_2, 14 & 0 | 57344 & 0 << 9 | 458752 & 0 << 6);
      $composer_2.o1r();
      $composer_1.o1r();
      var scale$delegate = tmp0_1;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec_1 = DropdownMenuContent$composable$lambda_4;
      var label_1 = null;
      var $composer_5 = $composer_0;
      $composer_5.m1r(1610198356);
      sourceInformation($composer_5, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_1 = DropdownMenuContent$composable$lambda_5;
      }
      if (!(2 === 0))
        label_1 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable_0 = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var transitionSpec_2 = transitionSpec_1;
      var label_2 = label_1;
      var $composer_6 = $composer_5;
      $composer_6.m1r(-1940744337);
      sourceInformation($composer_6, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_2 = DropdownMenuContent$composable$lambda_6;
      }
      if (!(0 === 0))
        label_2 = 'ValueAnimation';
      // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
      var tmp12_anonymous = transition.c8z();
      var tmp14_anonymous = 112 & 0 >> 9;
      var $composer_7 = $composer_6;
      $composer_7.m1r(388050693);
      sourceInformation($composer_7, 'C:Menu.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(388050693, tmp14_anonymous, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:193)');
      }
      var tmp_1;
      if (tmp12_anonymous) {
        tmp_1 = 1.0;
      } else {
        tmp_1 = 0.0;
      }
      var tmp0_2 = tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.o1r();
      var initialValue_0 = tmp0_2;
      // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
      var tmp15_anonymous = transition.q8x();
      var tmp17_anonymous = 112 & 0 >> 9;
      var $composer_8 = $composer_6;
      $composer_8.m1r(388050693);
      sourceInformation($composer_8, 'C:Menu.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(388050693, tmp17_anonymous, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:193)');
      }
      var tmp_2;
      if (tmp15_anonymous) {
        tmp_2 = 1.0;
      } else {
        tmp_2 = 0.0;
      }
      var tmp0_3 = tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_8.o1r();
      var targetValue_0 = tmp0_3;
      var animationSpec_0 = transitionSpec_2(transition.m8y(), $composer_6, 112 & 0 >> 3);
      var tmp0_4 = createTransitionAnimation$composable(transition, initialValue_0, targetValue_0, animationSpec_0, tmp0_animateValue$composable_0, label_2, $composer_6, 14 & 0 | 57344 & 0 << 9 | 458752 & 0 << 6);
      $composer_6.o1r();
      $composer_5.o1r();
      var alpha$delegate = tmp0_4;
      var tmp_3 = Companion_getInstance();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_9 = $composer_0;
      $composer_9.m1r(-1058148781);
      sourceInformation($composer_9, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_9.y1t(scale$delegate) | $composer_9.y1t(alpha$delegate)) | $composer_9.y1t(transformOriginState));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_9.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
        var value = DropdownMenuContent$composable$lambda_7(transformOriginState, scale$delegate, alpha$delegate);
        $composer_9.x1t(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      var tmp_5 = tmp_4;
      var tmp0_5 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_9.o1r();
      var tmp_6 = graphicsLayer(tmp_3, tmp0_5);
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_9 = get_MenuElevation();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, 895555282, true, DropdownMenuContent$composable$lambda_8(modifier_0, scrollState, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_10 = $composer_0;
      $composer_10.m1r(-838505973);
      sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_10.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_10.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.DropdownMenuContent$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_10.x1t(value_0);
        tmp_11 = value_0;
      } else {
        tmp_11 = tmp0_let_0;
      }
      var tmp_12 = tmp_11;
      var tmp0_6 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      $composer_10.o1r();
      Card$composable(tmp_6, null, tmp_7, tmp_8, null, tmp_9, tmp0_6, $composer_0, 1769472, 30);
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
      tmp0_safe_receiver.z28(DropdownMenuContent$composable$lambda_9(expandedStates, transformOriginState, scrollState, modifier_0, content, $changed, $default));
    }
  }
  function MenuDefaults() {
    MenuDefaults_instance = this;
    var tmp = this;
    var tmp_0 = get_DropdownMenuItemHorizontalPadding();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.ee1_1 = PaddingValues_0(tmp_0, tmp$ret$0);
    this.fe1_1 = 0;
  }
  var MenuDefaults_instance;
  function MenuDefaults_getInstance() {
    if (MenuDefaults_instance == null)
      new MenuDefaults();
    return MenuDefaults_instance;
  }
  function DropdownMenuItemContent$composable(onClick, modifier, enabled, contentPadding, interactionSource, content, $composer, $changed, $default) {
    _init_properties_Menu_kt__roln5r();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1765950128);
    sourceInformation($composer_0, 'C(DropdownMenuItemContent$composable)P(5,4,2,1,3)227@9529L39,237@9912L20,231@9701L996:Menu.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentPadding_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          contentPadding_0._v = MenuDefaults_getInstance().ee1_1;
        }
        if (!(($default & 16) === 0)) {
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
            // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1765950128, $dirty, -1, 'androidx.compose.material.DropdownMenuItemContent$composable (Menu.kt:222)');
      }
      // Inline function 'androidx.compose.foundation.layout.Row$composable' call
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp0_indication = rememberRipple$composable(true, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 6, 6);
      var tmp1_$receiver = fillMaxWidth(clickable(modifier_0._v, interactionSource_0._v, tmp0_indication, enabled_0._v, VOID, VOID, onClick));
      var tmp2_minWidth = get_DropdownMenuItemDefaultMinWidth();
      var tmp3_maxWidth = get_DropdownMenuItemDefaultMaxWidth();
      var tmp4_minHeight = get_DropdownMenuItemDefaultMinHeight();
      var modifier_1 = padding_0(sizeIn(tmp1_$receiver, tmp2_minWidth, tmp4_minHeight, tmp3_maxWidth), contentPadding_0._v);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_2().y5e_1;
      var $composer_2 = $composer_0;
      $composer_2.m1r(-636825856);
      sourceInformation($composer_2, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(2 === 0))
        horizontalArrangement = Arrangement_getInstance().n93_1;
      if (!(0 === 0))
        verticalAlignment = Companion_getInstance_2().x5e_1;
      var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_2, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $composer_3 = $composer_2;
      $composer_3.m1r(1725976829);
      sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
      var localMap = $composer_3.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_4 = $composer_3;
      var tmp_2 = $composer_4.z1s();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_4.p1t();
      if ($composer_4.a1t()) {
        $composer_4.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_4.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_3;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_3 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_4.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
      // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>' call
      var tmp5_anonymous = RowScopeInstance_getInstance();
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 451612206, 'C249@10413L10,250@10432L259:Menu.kt#jmzs0o');
      var typography = MaterialTheme_getInstance().edw($composer_6, 6);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous>' call
      var tmp_4 = $composer_6;
      var dispatchReceiver = composableLambda(tmp_4, 1190489496, true, DropdownMenuItemContent$composable$lambda(enabled_0, content, tmp5_anonymous, 6, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_6;
      $composer_7.m1r(-838505973);
      sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_7.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_7.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_7.x1t(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_7.o1r();
      ProvideTextStyle$composable(typography.wdv_1, tmp0_0, $composer_6, 48);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.o1r();
      $composer_4.s1t();
      $composer_3.o1r();
      $composer_2.o1r();
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
      tmp0_safe_receiver.z28(DropdownMenuItemContent$composable$lambda_0(onClick, modifier_0, enabled_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function DropdownMenuContent$composable$lambda($scale$delegate) {
    _init_properties_Menu_kt__roln5r();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scale', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $scale$delegate.s();
  }
  function DropdownMenuContent$composable$lambda_0($alpha$delegate) {
    _init_properties_Menu_kt__roln5r();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('alpha', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $alpha$delegate.s();
  }
  function DropdownMenuContent$composable$lambda_1($this$animateFloat, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
    var $composer_0 = $composer;
    $composer_0.m1r(-800950068);
    if (isTraceInProgress()) {
      traceEventStart(-800950068, $changed, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:158)');
    }
    var tmp;
    if ($this$animateFloat.y8y(false, true)) {
      tmp = tween(120, VOID, get_LinearOutSlowInEasing());
    } else {
      tmp = tween(1, 74);
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function DropdownMenuContent$composable$lambda_2($this$null, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
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
  function DropdownMenuContent$composable$lambda_3($this$null, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
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
  function DropdownMenuContent$composable$lambda_4($this$animateFloat, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
    var $composer_0 = $composer;
    $composer_0.m1r(-2065494304);
    if (isTraceInProgress()) {
      traceEventStart(-2065494304, $changed, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:184)');
    }
    var tmp;
    if ($this$animateFloat.y8y(false, true)) {
      tmp = tween(30);
    } else {
      tmp = tween(75);
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function DropdownMenuContent$composable$lambda_5($this$null, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
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
  function DropdownMenuContent$composable$lambda_6($this$null, $composer, $changed) {
    _init_properties_Menu_kt__roln5r();
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
  function DropdownMenuContent$composable$lambda_7($transformOriginState, $scale$delegate, $alpha$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.k60(DropdownMenuContent$composable$lambda($scale$delegate));
      $this$graphicsLayer.l60(DropdownMenuContent$composable$lambda($scale$delegate));
      $this$graphicsLayer.g3y(DropdownMenuContent$composable$lambda_0($alpha$delegate));
      $this$graphicsLayer.s60($transformOriginState.s().y61_1);
      return Unit_getInstance();
    };
  }
  function DropdownMenuContent$composable$lambda_8($modifier, $scrollState, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C211@9017L232:Menu.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(895555282, $changed, -1, 'androidx.compose.material.DropdownMenuContent$composable.<anonymous> (Menu.kt:210)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = verticalScroll(width(padding_1($modifier._v, VOID, get_DropdownMenuVerticalPadding()), IntrinsicSize_Max_getInstance()), $scrollState);
        var tmp1_Column$composable = null;
        var tmp2_Column$composable = null;
        var tmp3_Column$composable = $composer_0;
        var tmp4_Column$composable = 7168 & $$dirty >> 3;
        var modifier = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.m1r(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          verticalArrangement = Arrangement_getInstance().p93_1;
        if (!(4 === 0))
          horizontalAlignment = Companion_getInstance_2().a5f_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & tmp4_Column$composable >> 3 | 112 & tmp4_Column$composable >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 112 & tmp4_Column$composable << 3;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.m1r(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.z1s();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.p1t();
        if ($composer_3.a1t()) {
          $composer_3.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        $content(ColumnScopeInstance_getInstance(), $composer_4, 6 | 112 & tmp4_Column$composable >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.o1r();
        $composer_3.s1t();
        $composer_2.o1r();
        $composer_1.o1r();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function DropdownMenuContent$composable$lambda_9($expandedStates, $transformOriginState, $scrollState, $modifier, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DropdownMenuContent$composable($expandedStates, $transformOriginState, $scrollState, $modifier._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DropdownMenuItemContent$composable$lambda$lambda($content, $tmp5_anonymous, $tmp7_anonymous, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C253@10658L9:Menu.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1705995688, $changed, -1, 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous>.<anonymous> (Menu.kt:252)');
        }
        $content($tmp5_anonymous, $composer_0, 14 & $tmp7_anonymous | 112 & $$dirty >> 12);
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
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function DropdownMenuItemContent$composable$lambda($enabled, $content, $tmp5_anonymous, $tmp7_anonymous, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C252@10574L107:Menu.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1190489496, $changed, -1, 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous> (Menu.kt:250)');
        }
        var tmp_0;
        if ($enabled._v) {
          $composer_0.m1r(194420963);
          sourceInformation($composer_0, '251@10530L4');
          var tmp0_group = ContentAlpha_getInstance().gdw($composer_0, 6);
          $composer_0.o1r();
          tmp_0 = tmp0_group;
        } else {
          $composer_0.m1r(194420986);
          sourceInformation($composer_0, '251@10553L8');
          var tmp1_group = ContentAlpha_getInstance().ydw($composer_0, 6);
          $composer_0.o1r();
          tmp_0 = tmp1_group;
        }
        var contentAlpha = tmp_0;
        var tmp_1 = [get_LocalContentAlpha().u28(contentAlpha)];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1705995688, true, DropdownMenuItemContent$composable$lambda$lambda($content, $tmp5_anonymous, $tmp7_anonymous, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.DropdownMenuItemContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_1, tmp$ret$6, $composer_0, 48);
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
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function DropdownMenuItemContent$composable$lambda_0($onClick, $modifier, $enabled, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DropdownMenuItemContent$composable($onClick, $modifier._v, $enabled._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Menu_kt_ipl1mn;
  function _init_properties_Menu_kt__roln5r() {
    if (!properties_initialized_Menu_kt_ipl1mn) {
      properties_initialized_Menu_kt_ipl1mn = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      MenuElevation = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MenuVerticalMargin = _Dp___init__impl__ms3zkb(48);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DropdownMenuItemHorizontalPadding = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DropdownMenuVerticalPadding = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DropdownMenuItemDefaultMinWidth = _Dp___init__impl__ms3zkb(112);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DropdownMenuItemDefaultMaxWidth = _Dp___init__impl__ms3zkb(280);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DropdownMenuItemDefaultMinHeight = _Dp___init__impl__ms3zkb(48);
    }
  }
  function get_OutlinedTextFieldInnerPadding() {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return OutlinedTextFieldInnerPadding;
  }
  var OutlinedTextFieldInnerPadding;
  function get_OutlinedTextFieldTopPadding() {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return OutlinedTextFieldTopPadding;
  }
  var OutlinedTextFieldTopPadding;
  function OutlinedTextField$composable(value, onValueChange, modifier, enabled, readOnly, textStyle, label, placeholder, leadingIcon, trailingIcon, isError, visualTransformation, keyboardOptions, keyboardActions, singleLine, maxLines, minLines, interactionSource, shape, colors, $composer, $changed, $changed1, $default) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var readOnly_0 = {_v: readOnly};
    var textStyle_0 = {_v: textStyle};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var isError_0 = {_v: isError};
    var visualTransformation_0 = {_v: visualTransformation};
    var keyboardOptions_0 = {_v: keyboardOptions};
    var keyboardActions_0 = {_v: keyboardActions};
    var singleLine_0 = {_v: singleLine};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var interactionSource_0 = {_v: interactionSource};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1619327487);
    sourceInformation($composer_0, 'C(OutlinedTextField$composable)P(18,11,10,1,13,16,6,12,7,17,3,19,5,4,15,8,9,2,14)139@7767L7,151@8373L39,152@8447L6,153@8509L25,173@9280L24,182@9646L20,162@8837L2051:OutlinedTextField.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(onValueChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1t(readOnly_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.y1t(textStyle_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(label_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.d1u(placeholder_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.d1u(leadingIcon_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.d1u(trailingIcon_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.z1t(isError_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(visualTransformation_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(keyboardOptions_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(keyboardActions_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.z1t(singleLine_0._v) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.a1u(maxLines_0._v) : false) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.a1u(minLines_0._v) ? 1048576 : 524288);
    if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ((($default & 131072) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 8388608 : 4194304);
    if (($changed1 & 234881024) === 0)
      $dirty1 = $dirty1 | ((($default & 262144) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 67108864 : 33554432);
    if (($changed1 & 1879048192) === 0)
      $dirty1 = $dirty1 | ((($default & 524288) === 0 ? $composer_0.y1t(colors_0._v) : false) ? 536870912 : 268435456);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 1533916891) === 306783378)) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 16) === 0)) {
          readOnly_0._v = false;
        }
        if (!(($default & 32) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_1);
          textStyle_0._v = tmp0;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          leadingIcon_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          trailingIcon_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          isError_0._v = false;
        }
        if (!(($default & 2048) === 0)) {
          visualTransformation_0._v = Companion_getInstance_12().w57_1;
        }
        if (!(($default & 4096) === 0)) {
          keyboardOptions_0._v = Companion_getInstance_13().wck_1;
        }
        if (!(($default & 8192) === 0)) {
          keyboardActions_0._v = Companion_getInstance_14().xck_1;
        }
        if (!(($default & 16384) === 0)) {
          singleLine_0._v = false;
        }
        if (!(($default & 32768) === 0)) {
          maxLines_0._v = singleLine_0._v ? 1 : IntCompanionObject_getInstance().MAX_VALUE;
          $dirty1 = $dirty1 & -458753;
        }
        if (!(($default & 65536) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 131072) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>' call
            var value_0 = funMutableInteractionSource();
            $composer_2.x1t(value_0);
            tmp = value_0;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0_0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_2.o1r();
          interactionSource_0._v = tmp0_0;
          $dirty1 = $dirty1 & -29360129;
        }
        if (!(($default & 262144) === 0)) {
          shape_0._v = MaterialTheme_getInstance().ydu($composer_0, 6).tdu_1;
          $dirty1 = $dirty1 & -234881025;
        }
        if (!(($default & 524288) === 0)) {
          var tmp_1 = TextFieldDefaults_getInstance();
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_1.oe1(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 0, 48, 2097151);
          $dirty1 = $dirty1 & -1879048193;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
        if (!(($default & 131072) === 0))
          $dirty1 = $dirty1 & -29360129;
        if (!(($default & 262144) === 0))
          $dirty1 = $dirty1 & -234881025;
        if (!(($default & 524288) === 0))
          $dirty1 = $dirty1 & -1879048193;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1619327487, $dirty, $dirty1, 'androidx.compose.material.OutlinedTextField$composable (OutlinedTextField.kt:133)');
      }
      $composer_0.m1r(-1814493530);
      sourceInformation($composer_0, '*157@8686L18');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp3_takeOrElse = textStyle_0._v.e3y();
      var tmp_22;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(tmp3_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
        tmp_22 = tmp3_takeOrElse;
      } else {
        // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>' call
        tmp_22 = colors_0._v.pe1(enabled_0._v, $composer_0, 14 & $dirty >> 9 | 112 & $dirty1 >> 24).s().y3w_1;
      }
      var tmp0_group = tmp_22;
      $composer_0.o1r();
      var textColor = tmp0_group;
      var mergedTextStyle = textStyle_0._v.o4u(TextStyle_init_$Create$(textColor));
      $composer_0.m1r(-1814493293);
      sourceInformation($composer_0, '168@9138L2');
      var tmp_23;
      if (!(label_0._v == null)) {
        var tmp_24 = modifier_0._v;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.m1r(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_3.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_25;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>' call
          var value_1 = OutlinedTextField$composable$lambda;
          $composer_3.x1t(value_1);
          tmp_25 = value_1;
        } else {
          tmp_25 = tmp0_let_0;
        }
        var tmp_26 = tmp_25;
        var tmp0_1 = (tmp_26 == null ? true : isObject(tmp_26)) ? tmp_26 : THROW_CCE();
        $composer_3.o1r();
        tmp_23 = padding(semantics(tmp_24, true, tmp0_1), VOID, get_OutlinedTextFieldTopPadding());
      } else {
        tmp_23 = modifier_0._v;
      }
      var tmp1_group = tmp_23;
      $composer_0.o1r();
      var tmp0_modifier = defaultMinSize(background(tmp1_group, colors_0._v.adx(enabled_0._v, $composer_0, 14 & $dirty >> 9 | 112 & $dirty1 >> 24).s().y3w_1, shape_0._v), TextFieldDefaults_getInstance().he1_1, TextFieldDefaults_getInstance().ge1_1);
      var tmp1_cursorBrush = new SolidColor(colors_0._v.qe1(isError_0._v, $composer_0, 14 & $dirty1 | 112 & $dirty1 >> 24).s().y3w_1);
      var tmp_27 = enabled_0._v;
      var tmp_28 = readOnly_0._v;
      var tmp_29 = keyboardOptions_0._v;
      var tmp_30 = keyboardActions_0._v;
      var tmp_31 = singleLine_0._v;
      var tmp_32 = maxLines_0._v;
      var tmp_33 = minLines_0._v;
      var tmp_34 = visualTransformation_0._v;
      var tmp_35 = interactionSource_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>' call
      var tmp_36 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_36, 1710364390, true, OutlinedTextField$composable$lambda_0(value, enabled_0, singleLine_0, visualTransformation_0, interactionSource_0, isError_0, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, colors_0, $dirty, $dirty1, shape_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.m1r(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_37;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_4.x1t(value_2);
        tmp_37 = value_2;
      } else {
        tmp_37 = tmp0_let_1;
      }
      var tmp_38 = tmp_37;
      var tmp0_2 = (tmp_38 == null ? true : isObject(tmp_38)) ? tmp_38 : THROW_CCE();
      $composer_4.o1r();
      BasicTextField$composable(value, onValueChange, tmp0_modifier, tmp_27, tmp_28, mergedTextStyle, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, null, tmp_35, tmp1_cursorBrush, tmp0_2, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 3670016 & $dirty1 << 12 | 29360128 & $dirty1 << 12 | 234881024 & $dirty1 << 12 | 1879048192 & $dirty1 << 12, 196608 | 14 & $dirty1 >> 18 | 112 & $dirty1 | 7168 & $dirty1 >> 12, 4096);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp2_safe_receiver = $composer_0.i1t();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.z28(OutlinedTextField$composable$lambda_1(value, onValueChange, modifier_0, enabled_0, readOnly_0, textStyle_0, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, isError_0, visualTransformation_0, keyboardOptions_0, keyboardActions_0, singleLine_0, maxLines_0, minLines_0, interactionSource_0, shape_0, colors_0, $changed, $changed1, $default));
    }
  }
  function outlineCutout(_this__u8e3s4, labelSize, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return drawWithContent(_this__u8e3s4, outlineCutout$lambda(labelSize, paddingValues));
  }
  function get_BorderId() {
    return BorderId;
  }
  var BorderId;
  function OutlinedTextFieldLayout$composable(modifier, textField, placeholder, label, leading, trailing, singleLine, animationProgress, onLabelMeasured, border, paddingValues, $composer, $changed, $changed1) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1681684259);
    sourceInformation($composer_0, 'C(OutlinedTextFieldLayout$composable)P(4,9,7,2,3,10,8!1,5)489@22705L239,497@22992L7,498@23004L2308:OutlinedTextField.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(textField) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(placeholder) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(label) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(leading) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(trailing) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1t(singleLine) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.b1u(animationProgress) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.d1u(onLabelMeasured) ? 67108864 : 33554432);
    if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.d1u(border) ? 536870912 : 268435456);
    if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(paddingValues) ? 4 : 2);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 11) === 2)) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1681684259, $dirty, $dirty1, 'androidx.compose.material.OutlinedTextFieldLayout$composable (OutlinedTextField.kt:476)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [onLabelMeasured, singleLine, animationProgress, paddingValues];
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>' call
        var value = new OutlinedTextFieldMeasurePolicy(onLabelMeasured, singleLine, animationProgress, paddingValues);
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var measurePolicy = tmp0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp1_$get_current$$composable_gn3xww = get_LocalLayoutDirection();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp1_$get_current$$composable_gn3xww);
      sourceInformationMarkerEnd($composer_2);
      var layoutDirection = tmp0_0;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp3_Layout$composable = $composer_0;
      var tmp4_Layout$composable = 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_3 = tmp3_Layout$composable;
      $composer_3.m1r(1725976829);
      sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
      var localMap = $composer_3.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp4_Layout$composable << 9;
      var $composer_4 = $composer_3;
      var tmp_1 = $composer_4.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_4.p1t();
      if ($composer_4.a1t()) {
        $composer_4.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_4.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_4.m1r(2058660585);
      // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1732111955, 'C506@23508L8,545@24956L182:OutlinedTextField.kt#jmzs0o');
      border($composer_5, 14 & $dirty >> 27);
      $composer_5.m1r(1732111977);
      sourceInformation($composer_5, '509@23569L219');
      if (!(leading == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_1 = layoutId(Companion_getInstance(), get_LeadingId()).n5f(get_IconDefaultSizeModifier());
        var contentAlignment = Companion_getInstance_2().s5e_1;
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        $composer_6.m1r(1330882304);
        sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        if (!(0 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 6);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        $composer_7.m1r(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap_0 = $composer_7.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
        var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & 0 << 9;
        var $composer_8 = $composer_7;
        var tmp_3 = $composer_8.z1s();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.p1t();
        if ($composer_8.a1t()) {
          $composer_8.q1t(tmp0_ReusableComposeNode$composable_0);
        } else {
          $composer_8.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy_0, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap_0, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_0 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_4;
        if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
          tmp0_with_0.x1t(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash_0, tmp0_set_0);
          tmp_4 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
        $composer_8.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, 963259121, 'C513@23761L9:OutlinedTextField.kt#jmzs0o');
        leading($composer_10, 14 & $dirty >> 12);
        sourceInformationMarkerEnd($composer_10);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.o1r();
        $composer_8.s1t();
        $composer_7.o1r();
        $composer_6.o1r();
      }
      $composer_5.o1r();
      $composer_5.m1r(1732112262);
      sourceInformation($composer_5, '517@23855L221');
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_3 = layoutId(Companion_getInstance(), get_TrailingId()).n5f(get_IconDefaultSizeModifier());
        var contentAlignment_0 = Companion_getInstance_2().s5e_1;
        var propagateMinConstraints_0 = false;
        var $composer_11 = $composer_5;
        $composer_11.m1r(1330882304);
        sourceInformation($composer_11, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance();
        if (!(0 === 0))
          contentAlignment_0 = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_11, 6);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_4 = modifier_3;
        var $composer_12 = $composer_11;
        $composer_12.m1r(1725976829);
        sourceInformation($composer_12, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_4 = Companion_getInstance();
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_12, 0);
        var localMap_1 = $composer_12.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_1 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
        var tmp3_ReusableComposeNode$composable_1 = 6 | 7168 & 0 << 9;
        var $composer_13 = $composer_12;
        var tmp_5 = $composer_13.z1s();
        if (!isInterface(tmp_5, Applier)) {
          invalidApplier();
        }
        $composer_13.p1t();
        if ($composer_13.a1t()) {
          $composer_13.q1t(tmp0_ReusableComposeNode$composable_1);
        } else {
          $composer_13.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_1 = _Updater___init__impl__rbfxm8($composer_13);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, measurePolicy_1, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, localMap_1, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_1 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_1 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_6;
        if (tmp0_with_1.a1t() ? true : !equals(tmp0_with_1.w1t(), compositeKeyHash_1)) {
          tmp0_with_1.x1t(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1).v1t(compositeKeyHash_1, tmp0_set_1);
          tmp_6 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp3_ReusableComposeNode$composable_1 >> 3);
        $composer_13.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, 963259408, 'C521@24048L10:OutlinedTextField.kt#jmzs0o');
        trailing($composer_15, 14 & $dirty >> 15);
        sourceInformationMarkerEnd($composer_15);
        sourceInformationMarkerEnd($composer_14);
        $composer_13.o1r();
        $composer_13.s1t();
        $composer_12.o1r();
        $composer_11.o1r();
      }
      $composer_5.o1r();
      var startTextFieldPadding = calculateStartPadding(paddingValues, layoutDirection);
      var endTextFieldPadding = calculateEndPadding(paddingValues, layoutDirection);
      var tmp_7 = Companion_getInstance();
      var tmp_8;
      if (!(leading == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var tmp14_minus = get_HorizontalIconPadding();
        var tmp15_coerceAtLeast = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(startTextFieldPadding) - _Dp___get_value__impl__geb1vb(tmp14_minus));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp16_coerceAtLeast = _Dp___init__impl__ms3zkb(0);
        tmp_8 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp15_coerceAtLeast), _Dp___get_value__impl__geb1vb(tmp16_coerceAtLeast)));
      } else {
        tmp_8 = startTextFieldPadding;
      }
      var tmp_9 = tmp_8;
      var tmp_10;
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var tmp17_minus = get_HorizontalIconPadding();
        var tmp18_coerceAtLeast = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(endTextFieldPadding) - _Dp___get_value__impl__geb1vb(tmp17_minus));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp19_coerceAtLeast = _Dp___init__impl__ms3zkb(0);
        tmp_10 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp18_coerceAtLeast), _Dp___get_value__impl__geb1vb(tmp19_coerceAtLeast)));
      } else {
        tmp_10 = endTextFieldPadding;
      }
      var padding_0 = padding(tmp_7, tmp_9, VOID, tmp_10);
      $composer_5.m1r(1732113273);
      sourceInformation($composer_5, '542@24869L59');
      if (!(placeholder == null)) {
        placeholder(layoutId(Companion_getInstance(), get_PlaceholderId()).n5f(padding_0), $composer_5, 112 & $dirty >> 3);
      }
      $composer_5.o1r();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_5 = layoutId(Companion_getInstance(), get_TextFieldId()).n5f(padding_0);
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = true;
      var $composer_16 = $composer_5;
      $composer_16.m1r(1330882304);
      sourceInformation($composer_16, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_5 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment_1 = Companion_getInstance_2().o5e_1;
      if (!(0 === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_16, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      $composer_17.m1r(1725976829);
      sourceInformation($composer_17, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_6 = Companion_getInstance();
      var compositeKeyHash_2 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_17, 0);
      var localMap_2 = $composer_17.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_2 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_2 = materializerOf(modifier_6);
      var tmp3_ReusableComposeNode$composable_2 = 6 | 7168 & 0 << 9;
      var $composer_18 = $composer_17;
      var tmp_11 = $composer_18.z1s();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_18.p1t();
      if ($composer_18.a1t()) {
        $composer_18.q1t(tmp0_ReusableComposeNode$composable_2);
      } else {
        $composer_18.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss(tmp4_anonymous_2, measurePolicy_2, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_2, localMap_2, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_2 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_2 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_12;
      if (tmp0_with_2.a1t() ? true : !equals(tmp0_with_2.w1t(), compositeKeyHash_2)) {
        tmp0_with_2.x1t(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2).v1t(compositeKeyHash_2, tmp0_set_2);
        tmp_12 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & tmp3_ReusableComposeNode$composable_2 >> 3);
      $composer_18.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 963260473, 'C549@25113L11:OutlinedTextField.kt#jmzs0o');
      textField($composer_20, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_20);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.o1r();
      $composer_18.s1t();
      $composer_17.o1r();
      $composer_16.o1r();
      $composer_5.m1r(-834269282);
      sourceInformation($composer_5, '553@25189L54');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_7 = layoutId(Companion_getInstance(), get_LabelId());
        var contentAlignment_2 = null;
        var propagateMinConstraints_2 = false;
        var $composer_21 = $composer_5;
        $composer_21.m1r(1330882304);
        sourceInformation($composer_21, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_7 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment_2 = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints_2 = false;
        var measurePolicy_3 = rememberBoxMeasurePolicy$composable(contentAlignment_2, propagateMinConstraints_2, $composer_21, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_8 = modifier_7;
        var $composer_22 = $composer_21;
        $composer_22.m1r(1725976829);
        sourceInformation($composer_22, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_8 = Companion_getInstance();
        var compositeKeyHash_3 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_22, 0);
        var localMap_3 = $composer_22.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_3 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_3 = materializerOf(modifier_8);
        var tmp3_ReusableComposeNode$composable_3 = 6 | 7168 & 48 << 9;
        var $composer_23 = $composer_22;
        var tmp_13 = $composer_23.z1s();
        if (!isInterface(tmp_13, Applier)) {
          invalidApplier();
        }
        $composer_23.p1t();
        if ($composer_23.a1t()) {
          $composer_23.q1t(tmp0_ReusableComposeNode$composable_3);
        } else {
          $composer_23.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_3 = _Updater___init__impl__rbfxm8($composer_23);
        Updater__set_impl_v7kwss(tmp4_anonymous_3, measurePolicy_3, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_3, localMap_3, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_3 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_3 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_3);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_14;
        if (tmp0_with_3.a1t() ? true : !equals(tmp0_with_3.w1t(), compositeKeyHash_3)) {
          tmp0_with_3.x1t(compositeKeyHash_3);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_3).v1t(compositeKeyHash_3, tmp0_set_3);
          tmp_14 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_3(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_23)), $composer_23, 112 & tmp3_ReusableComposeNode$composable_3 >> 3);
        $composer_23.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_24 = $composer_23;
        sourceInformationMarkerStart($composer_24, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, 963260594, 'C553@25234L7:OutlinedTextField.kt#jmzs0o');
        label($composer_25, 14 & $dirty >> 9);
        sourceInformationMarkerEnd($composer_25);
        sourceInformationMarkerEnd($composer_24);
        $composer_23.o1r();
        $composer_23.s1t();
        $composer_22.o1r();
        $composer_21.o1r();
      }
      $composer_5.o1r();
      sourceInformationMarkerEnd($composer_5);
      $composer_4.o1r();
      $composer_4.s1t();
      $composer_3.o1r();
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
      tmp0_safe_receiver.z28(OutlinedTextFieldLayout$composable$lambda(modifier, textField, placeholder, label, leading, trailing, singleLine, animationProgress, onLabelMeasured, border, paddingValues, $changed, $changed1));
    }
  }
  function intrinsicWidth(_this__u8e3s4, $this, measurables, height, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldWidth = intrinsicMeasurer(tmp$ret$1, height);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, height);
    }
    var tmp1_elvis_lhs = tmp;
    var labelWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, height);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingWidth = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, height);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PlaceholderId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, height);
    }
    var tmp7_elvis_lhs = tmp_2;
    var placeholderWidth = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    return calculateWidth(leadingWidth, trailingWidth, textFieldWidth, labelWidth, placeholderWidth, $this.te1_1, get_ZeroConstraints(), _this__u8e3s4.q35(), $this.ue1_1);
  }
  function intrinsicHeight(_this__u8e3s4, $this, measurables, width, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldHeight = intrinsicMeasurer(tmp$ret$1, width);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, width);
    }
    var tmp1_elvis_lhs = tmp;
    var labelHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, width);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, width);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingHeight = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PlaceholderId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, width);
    }
    var tmp7_elvis_lhs = tmp_2;
    var placeholderHeight = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    return calculateHeight(leadingHeight, trailingHeight, textFieldHeight, labelHeight, placeholderHeight, $this.te1_1, get_ZeroConstraints(), _this__u8e3s4.q35(), $this.ue1_1);
  }
  function OutlinedTextFieldMeasurePolicy$measure$lambda($height, $width, $leadingPlaceable, $trailingPlaceable, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $borderPlaceable, this$0, $this_measure) {
    return function ($this$layout) {
      place($this$layout, $height, $width, $leadingPlaceable, $trailingPlaceable, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $borderPlaceable, this$0.te1_1, this$0.se1_1, $this_measure.q35(), $this_measure.f4b(), this$0.ue1_1);
      return Unit_getInstance();
    };
  }
  function OutlinedTextFieldMeasurePolicy$maxIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.t5n(w);
  }
  function OutlinedTextFieldMeasurePolicy$minIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.s5n(w);
  }
  function OutlinedTextFieldMeasurePolicy$maxIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.r5n(h);
  }
  function OutlinedTextFieldMeasurePolicy$minIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.q5n(h);
  }
  function OutlinedTextFieldMeasurePolicy(onLabelMeasured, singleLine, animationProgress, paddingValues) {
    this.re1_1 = onLabelMeasured;
    this.se1_1 = singleLine;
    this.te1_1 = animationProgress;
    this.ue1_1 = paddingValues;
  }
  protoOf(OutlinedTextFieldMeasurePolicy).e6w = function (_this__u8e3s4, measurables, constraints) {
    var occupiedSpaceHorizontally = 0;
    var bottomPadding = _this__u8e3s4.t35(this.ue1_1.g99());
    var relaxedConstraints = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element), get_LeadingId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var leadingPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5h(relaxedConstraints);
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(leadingPlaceable) | 0;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_0), get_TrailingId())) {
          tmp$ret$4 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$4 = null;
    }
    var tmp1_safe_receiver = tmp$ret$4;
    var trailingPlaceable = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w5h(offset(relaxedConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(trailingPlaceable) | 0;
    var labelHorizontalPaddingOffset = _this__u8e3s4.t35(this.ue1_1.d99(_this__u8e3s4.f4b())) + _this__u8e3s4.t35(this.ue1_1.f99(_this__u8e3s4.f4b())) | 0;
    var labelConstraints = offset(relaxedConstraints, lerp((-occupiedSpaceHorizontally | 0) - labelHorizontalPaddingOffset | 0, -labelHorizontalPaddingOffset | 0, this.te1_1), -bottomPadding | 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_1), get_LabelId())) {
          tmp$ret$7 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$7 = null;
    }
    var tmp2_safe_receiver = tmp$ret$7;
    var labelPlaceable = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.w5h(labelConstraints);
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.re1_1(new Size_0(Size(labelPlaceable.x5h_1, labelPlaceable.y5h_1)));
    }
    // Inline function 'kotlin.math.max' call
    var tmp0_max = heightOrZero(labelPlaceable) / 2 | 0;
    var tmp1_max = _this__u8e3s4.t35(this.ue1_1.e99());
    var topPadding = Math.max(tmp0_max, tmp1_max);
    var textConstraints = Constraints__copy$default_impl_f452rp(offset(constraints, -occupiedSpaceHorizontally | 0, (-bottomPadding | 0) - topPadding | 0), VOID, VOID, 0);
    var tmp$ret$12;
    $l$block_2: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_2), get_TextFieldId())) {
          tmp$ret$12 = element_2;
          break $l$block_2;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldPlaceable = tmp$ret$12.w5h(textConstraints);
    var placeholderConstraints = Constraints__copy$default_impl_f452rp(textConstraints, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$14;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_3), get_PlaceholderId())) {
          tmp$ret$14 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$14 = null;
    }
    var tmp4_safe_receiver = tmp$ret$14;
    var placeholderPlaceable = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.w5h(placeholderConstraints);
    var width = calculateWidth(widthOrZero(leadingPlaceable), widthOrZero(trailingPlaceable), textFieldPlaceable.x5h_1, widthOrZero(labelPlaceable), widthOrZero(placeholderPlaceable), this.te1_1, constraints, _this__u8e3s4.q35(), this.ue1_1);
    var height = calculateHeight(heightOrZero(leadingPlaceable), heightOrZero(trailingPlaceable), textFieldPlaceable.y5h_1, heightOrZero(labelPlaceable), heightOrZero(placeholderPlaceable), this.te1_1, constraints, _this__u8e3s4.q35(), this.ue1_1);
    var tmp$ret$17;
    $l$block_4: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_4 = measurables.d();
      while (tmp0_iterator_4.e()) {
        var element_4 = tmp0_iterator_4.f();
        // Inline function 'androidx.compose.material.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_4), 'border')) {
          tmp$ret$17 = element_4;
          break $l$block_4;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var tmp = tmp$ret$17;
    var tmp_0;
    Companion_getInstance_15();
    if (!(width === 2147483647)) {
      tmp_0 = width;
    } else {
      tmp_0 = 0;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    Companion_getInstance_15();
    if (!(height === 2147483647)) {
      tmp_2 = height;
    } else {
      tmp_2 = 0;
    }
    var borderPlaceable = tmp.w5h(Constraints_0(tmp_1, width, tmp_2, height));
    return _this__u8e3s4.d5i(width, height, VOID, OutlinedTextFieldMeasurePolicy$measure$lambda(height, width, leadingPlaceable, trailingPlaceable, textFieldPlaceable, labelPlaceable, placeholderPlaceable, borderPlaceable, this, _this__u8e3s4));
  };
  protoOf(OutlinedTextFieldMeasurePolicy).i6w = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight(_this__u8e3s4, this, measurables, width, OutlinedTextFieldMeasurePolicy$maxIntrinsicHeight$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).g6w = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight(_this__u8e3s4, this, measurables, width, OutlinedTextFieldMeasurePolicy$minIntrinsicHeight$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).h6w = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth(_this__u8e3s4, this, measurables, height, OutlinedTextFieldMeasurePolicy$maxIntrinsicWidth$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).f6w = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth(_this__u8e3s4, this, measurables, height, OutlinedTextFieldMeasurePolicy$minIntrinsicWidth$lambda);
  };
  function calculateWidth(leadingPlaceableWidth, trailingPlaceableWidth, textFieldPlaceableWidth, labelPlaceableWidth, placeholderPlaceableWidth, animationProgress, constraints, density, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = lerp(labelPlaceableWidth, 0, animationProgress);
    var middleSection = Math.max(textFieldPlaceableWidth, tmp0_maxOf, placeholderPlaceableWidth);
    var wrappedWidth = (leadingPlaceableWidth + middleSection | 0) + trailingPlaceableWidth | 0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var tmp1_plus = paddingValues.d99(LayoutDirection_Ltr_getInstance());
    var tmp2_plus = paddingValues.f99(LayoutDirection_Ltr_getInstance());
    tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp1_plus) + _Dp___get_value__impl__geb1vb(tmp2_plus));
    var labelHorizontalPadding = _Dp___get_value__impl__geb1vb(tmp$ret$1) * density;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp3_roundToInt = (labelPlaceableWidth + labelHorizontalPadding) * animationProgress;
    var focusedLabelWidth = roundToInt(tmp3_roundToInt);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp4_maxOf = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    return Math.max(wrappedWidth, focusedLabelWidth, tmp4_maxOf);
  }
  function calculateHeight(leadingPlaceableHeight, trailingPlaceableHeight, textFieldPlaceableHeight, labelPlaceableHeight, placeholderPlaceableHeight, animationProgress, constraints, density, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = lerp(labelPlaceableHeight, 0, animationProgress);
    var inputFieldHeight = Math.max(textFieldPlaceableHeight, placeholderPlaceableHeight, tmp0_maxOf);
    var topPadding = _Dp___get_value__impl__geb1vb(paddingValues.e99()) * density;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = labelPlaceableHeight / 2.0;
    tmp$ret$1 = Math.max(topPadding, tmp1_max);
    var actualTopPadding = lerp_0(topPadding, tmp$ret$1, animationProgress);
    var bottomPadding = _Dp___get_value__impl__geb1vb(paddingValues.g99()) * density;
    var middleSectionHeight = actualTopPadding + inputFieldHeight + bottomPadding;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_maxOf = roundToInt(middleSectionHeight);
    var tmp4_max = Math.max(leadingPlaceableHeight, trailingPlaceableHeight, tmp2_maxOf);
    return Math.max(tmp3_max, tmp4_max);
  }
  function place(_this__u8e3s4, height, width, leadingPlaceable, trailingPlaceable, textFieldPlaceable, labelPlaceable, placeholderPlaceable, borderPlaceable, animationProgress, singleLine, density, layoutDirection, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _Dp___get_value__impl__geb1vb(paddingValues.e99()) * density;
    var topPadding = roundToInt(tmp0_roundToInt);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = _Dp___get_value__impl__geb1vb(calculateStartPadding(paddingValues, layoutDirection)) * density;
    var startPadding = roundToInt(tmp1_roundToInt);
    var iconPadding = _Dp___get_value__impl__geb1vb(get_HorizontalIconPadding()) * density;
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(leadingPlaceable, 0, Companion_getInstance_2().y5e_1.i5f(leadingPlaceable.y5h_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(trailingPlaceable, width - trailingPlaceable.x5h_1 | 0, Companion_getInstance_2().y5e_1.i5f(trailingPlaceable.y5h_1, height));
    }
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (singleLine) {
        tmp = Companion_getInstance_2().y5e_1.i5f(labelPlaceable.y5h_1, height);
      } else {
        tmp = topPadding;
      }
      var startPositionY = tmp;
      var positionY = lerp(startPositionY, -(labelPlaceable.y5h_1 / 2 | 0) | 0, animationProgress);
      // Inline function 'kotlin.math.roundToInt' call
      var tmp_0;
      if (leadingPlaceable == null) {
        tmp_0 = 0.0;
      } else {
        tmp_0 = (widthOrZero(leadingPlaceable) - iconPadding) * (1 - animationProgress);
      }
      var tmp0_roundToInt_0 = tmp_0;
      var positionX = roundToInt(tmp0_roundToInt_0) + startPadding | 0;
      _this__u8e3s4.p5n(labelPlaceable, positionX, positionY);
    }
    // Inline function 'kotlin.math.max' call
    var tmp_1;
    if (singleLine) {
      tmp_1 = Companion_getInstance_2().y5e_1.i5f(textFieldPlaceable.y5h_1, height);
    } else {
      tmp_1 = topPadding;
    }
    var tmp2_max = tmp_1;
    var tmp3_max = heightOrZero(labelPlaceable) / 2 | 0;
    var textVerticalPosition = Math.max(tmp2_max, tmp3_max);
    _this__u8e3s4.p5n(textFieldPlaceable, widthOrZero(leadingPlaceable), textVerticalPosition);
    if (placeholderPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.math.max' call
      var tmp_2;
      if (singleLine) {
        tmp_2 = Companion_getInstance_2().y5e_1.i5f(placeholderPlaceable.y5h_1, height);
      } else {
        tmp_2 = topPadding;
      }
      var tmp0_max = tmp_2;
      var tmp1_max = heightOrZero(labelPlaceable) / 2 | 0;
      var placeholderVerticalPosition = Math.max(tmp0_max, tmp1_max);
      _this__u8e3s4.p5n(placeholderPlaceable, widthOrZero(leadingPlaceable), placeholderVerticalPosition);
    }
    _this__u8e3s4.g6y(borderPlaceable, Companion_getInstance_16().q36_1);
  }
  function OutlinedTextField$composable$lambda($this$semantics) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return Unit_getInstance();
  }
  function OutlinedTextField$composable$lambda$lambda($enabled, $isError, $interactionSource, $colors, $shape, $$dirty, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C205@10637L203:OutlinedTextField.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1823843281, $changed, -1, 'androidx.compose.material.OutlinedTextField$composable.<anonymous>.<anonymous> (OutlinedTextField.kt:204)');
        }
        var tmp_0 = TextFieldDefaults_getInstance();
        var tmp_1 = $enabled._v;
        var tmp_2 = $isError._v;
        var tmp_3 = $interactionSource._v;
        var tmp_4 = $colors._v;
        var tmp_5 = $shape._v;
        var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
        tmp_0.ve1(tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, _Dp___init__impl__ms3zkb(0.0), $composer_0, 12582912 | 14 & $$dirty >> 9 | 112 & $$dirty1 << 3 | 896 & $$dirty1 >> 15 | 7168 & $$dirty1 >> 18 | 57344 & $$dirty1 >> 12, 96);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function OutlinedTextField$composable$lambda_0($value, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError, $label, $placeholder, $leadingIcon, $trailingIcon, $colors, $$dirty, $$dirty1, $shape) {
    return function (innerTextField, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C191@10038L834:OutlinedTextField.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.d1u(innerTextField) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1710364390, $dirty, -1, 'androidx.compose.material.OutlinedTextField$composable.<anonymous> (OutlinedTextField.kt:190)');
        }
        var tmp_1 = TextFieldDefaults_getInstance();
        var tmp_2 = $enabled._v;
        var tmp_3 = $singleLine._v;
        var tmp_4 = $visualTransformation._v;
        var tmp_5 = $interactionSource._v;
        var tmp_6 = $isError._v;
        var tmp_7 = $label._v;
        var tmp_8 = $placeholder._v;
        var tmp_9 = $leadingIcon._v;
        var tmp_10 = $trailingIcon._v;
        var tmp_11 = $colors._v;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_12, -1823843281, true, OutlinedTextField$composable$lambda$lambda($enabled, $isError, $interactionSource, $colors, $shape, $$dirty, $$dirty1));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.OutlinedTextField$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_13 = value;
        } else {
          tmp_13 = tmp0_let;
        }
        tmp$ret$1 = tmp_13;
        tmp$ret$2 = tmp$ret$1;
        var tmp_14 = tmp$ret$2;
        tmp$ret$3 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp_1.we1($value, innerTextField, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, null, tmp$ret$6, $composer_0, 14 & $$dirty | 112 & $dirty << 3 | 896 & $$dirty >> 3 | 7168 & $$dirty1 >> 3 | 57344 & $$dirty1 << 9 | 458752 & $$dirty1 >> 6 | 3670016 & $$dirty1 << 18 | 29360128 & $$dirty << 3 | 234881024 & $$dirty << 3 | 1879048192 & $$dirty << 3, 27648 | 14 & $$dirty >> 27 | 112 & $$dirty1 >> 24, 4096);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp_0 = tmp_15;
      } else {
        $composer_0.m1t();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function OutlinedTextField$composable$lambda_1($value, $onValueChange, $modifier, $enabled, $readOnly, $textStyle, $label, $placeholder, $leadingIcon, $trailingIcon, $isError, $visualTransformation, $keyboardOptions, $keyboardActions, $singleLine, $maxLines, $minLines, $interactionSource, $shape, $colors, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      OutlinedTextField$composable($value, $onValueChange, $modifier._v, $enabled._v, $readOnly._v, $textStyle._v, $label._v, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $isError._v, $visualTransformation._v, $keyboardOptions._v, $keyboardActions._v, $singleLine._v, $maxLines._v, $minLines._v, $interactionSource._v, $shape._v, $colors._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function outlineCutout$lambda($labelSize, $paddingValues) {
    return function ($this$drawWithContent) {
      var labelWidth = _Size___get_width__impl__58y75t($labelSize);
      var tmp;
      if (labelWidth > 0.0) {
        var innerPadding = $this$drawWithContent.s35(get_OutlinedTextFieldInnerPadding());
        var leftLtr = $this$drawWithContent.s35($paddingValues.d99($this$drawWithContent.f4b())) - innerPadding;
        var rightLtr = leftLtr + labelWidth + 2 * innerPadding;
        var tmp0_subject = $this$drawWithContent.f4b();
        var tmp0 = tmp0_subject.h7_1;
        var left = tmp0 === 1 ? _Size___get_width__impl__58y75t($this$drawWithContent.x33()) - rightLtr : coerceAtLeast(leftLtr, 0.0);
        var tmp1_subject = $this$drawWithContent.f4b();
        var tmp0_0 = tmp1_subject.h7_1;
        var right = tmp0_0 === 1 ? _Size___get_width__impl__58y75t($this$drawWithContent.x33()) - coerceAtLeast(leftLtr, 0.0) : rightLtr;
        var labelHeight = _Size___get_height__impl__a04p02($labelSize);
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = -labelHeight / 2;
        var tmp1_clipRect = labelHeight / 2;
        var tmp2_clipRect = Companion_getInstance_17().o3z_1;
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$drawWithContent.g4b();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.x33();
        tmp0_with.a3k().f3z();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0_anonymous = tmp0_with.e4b();
        tmp0_anonymous.m3z(left, tmp0_clipRect, right, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.material.outlineCutout.<anonymous>.<anonymous>' call
        $this$drawWithContent.d5m();
        tmp0_with.a3k().g3z();
        tmp0_with.d4b(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        $this$drawWithContent.d5m();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OutlinedTextFieldLayout$composable$lambda($modifier, $textField, $placeholder, $label, $leading, $trailing, $singleLine, $animationProgress, $onLabelMeasured, $border, $paddingValues, $$changed, $$changed1) {
    return function ($composer, $force) {
      OutlinedTextFieldLayout$composable($modifier, $textField, $placeholder, $label, $leading, $trailing, $singleLine, $animationProgress, $onLabelMeasured, $border, $paddingValues, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_OutlinedTextField_kt_gr7zs5;
  function _init_properties_OutlinedTextField_kt__36w0dj() {
    if (!properties_initialized_OutlinedTextField_kt_gr7zs5) {
      properties_initialized_OutlinedTextField_kt_gr7zs5 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      OutlinedTextFieldInnerPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      OutlinedTextFieldTopPadding = _Dp___init__impl__ms3zkb(8);
    }
  }
  function get_LinearIndicatorHeight() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorHeight;
  }
  var LinearIndicatorHeight;
  function get_LinearIndicatorWidth() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return LinearIndicatorWidth;
  }
  var LinearIndicatorWidth;
  function get_CircularIndicatorDiameter() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return CircularIndicatorDiameter;
  }
  var CircularIndicatorDiameter;
  function get_FirstLineHeadEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return FirstLineHeadEasing;
  }
  var FirstLineHeadEasing;
  function get_FirstLineTailEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return FirstLineTailEasing;
  }
  var FirstLineTailEasing;
  function get_SecondLineHeadEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return SecondLineHeadEasing;
  }
  var SecondLineHeadEasing;
  function get_SecondLineTailEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return SecondLineTailEasing;
  }
  var SecondLineTailEasing;
  function get_CircularEasing() {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return CircularEasing;
  }
  var CircularEasing;
  function ProgressIndicatorDefaults() {
    ProgressIndicatorDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.xe1_1 = _Dp___init__impl__ms3zkb(4);
    this.ye1_1 = 0.24;
    var tmp_0 = this;
    Spring_getInstance();
    Spring_getInstance();
    tmp_0.ze1_1 = new SpringSpec(1.0, 50.0, 1 / 1000.0);
    this.ae2_1 = 0;
  }
  var ProgressIndicatorDefaults_instance;
  function ProgressIndicatorDefaults_getInstance() {
    if (ProgressIndicatorDefaults_instance == null)
      new ProgressIndicatorDefaults();
    return ProgressIndicatorDefaults_instance;
  }
  function CircularProgressIndicator$composable(modifier, color, strokeWidth, backgroundColor, strokeCap, $composer, $changed, $default) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var strokeWidth_0 = {_v: new Dp(strokeWidth)};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var strokeCap_0 = {_v: new StrokeCap(strokeCap)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-759091413);
    sourceInformation($composer_0, 'C(CircularProgressIndicator$composable)P(2,1:c#ui.graphics.Color,4:c#ui.unit.Dp,0:c#ui.graphics.Color,3:c#ui.graphics.StrokeCap)328@13340L6,*333@13549L7,337@13648L28,339@13806L278,351@14199L230,366@14662L214,362@14547L345,378@15042L223,374@14927L354,389@15395L538,385@15286L647:ProgressIndicator.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3w_1))) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.b1u(_Dp___get_value__impl__geb1vb(strokeWidth_0._v.j36_1)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.y3w_1))) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(strokeCap_0._v) : false) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).wdw());
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          strokeWidth_0._v = new Dp(ProgressIndicatorDefaults_getInstance().xe1_1);
        }
        if (!(($default & 8) === 0)) {
          backgroundColor_0._v = new Color(Companion_getInstance_7().b3y_1);
        }
        if (!(($default & 16) === 0)) {
          strokeCap_0._v = new StrokeCap(Companion_getInstance_18().o46_1);
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-759091413, $changed, -1, 'androidx.compose.material.CircularProgressIndicator$composable (ProgressIndicator.kt:326)');
      }
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
      var stroke = new Stroke(tmp0.s35(strokeWidth_0._v.j36_1), VOID, strokeCap_0._v.p46_1);
      var transition = rememberInfiniteTransition$composable(null, $composer_0, 0, 1);
      var tmp = get_VectorConverter_1(IntCompanionObject_getInstance());
      var tmp_0 = infiniteRepeatable(tween(6660, VOID, get_LinearEasing()));
      var currentRotation$delegate = animateValue$composable(transition, 0, 5, tmp, tmp_0, null, $composer_0, 432, 16);
      var tmp_1 = infiniteRepeatable(tween(1332, VOID, get_LinearEasing()));
      var baseRotation$delegate = animateFloat$composable(transition, 0.0, 286.0, tmp_1, null, $composer_0, 432, 8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
        var value = CircularProgressIndicator$composable$lambda_3;
        $composer_2.x1t(value);
        tmp_2 = value;
      } else {
        tmp_2 = tmp0_let;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_2.o1r();
      var tmp_4 = infiniteRepeatable(keyframes(tmp0_0));
      var endAngle$delegate = animateFloat$composable(transition, 0.0, 290.0, tmp_4, null, $composer_0, 432, 8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
        var value_0 = CircularProgressIndicator$composable$lambda_4;
        $composer_3.x1t(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_1 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_3.o1r();
      var tmp_7 = infiniteRepeatable(keyframes(tmp0_1));
      var startAngle$delegate = animateFloat$composable(transition, 0.0, 290.0, tmp_7, null, $composer_0, 432, 8);
      var tmp_8 = size(progressSemantics(modifier_0._v), get_CircularIndicatorDiameter());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = [backgroundColor_0._v, stroke, currentRotation$delegate, endAngle$delegate, startAngle$delegate, baseRotation$delegate, strokeWidth_0._v, color_0._v];
      var $composer_4 = $composer_0;
      $composer_4.m1r(-1603429786);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = tmp5_remember$composable.length;
      while (inductionVariable < last) {
        var key = tmp5_remember$composable[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_4.y1t(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.CircularProgressIndicator$composable.<anonymous>' call
        var value_1 = CircularProgressIndicator$composable$lambda_5(backgroundColor_0, stroke, strokeWidth_0, color_0, currentRotation$delegate, endAngle$delegate, startAngle$delegate, baseRotation$delegate);
        $composer_4.x1t(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = tmp0_let_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_2 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      $composer_4.o1r();
      Canvas$composable(tmp_8, tmp0_2, $composer_0, 0);
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
      tmp0_safe_receiver.z28(CircularProgressIndicator$composable$lambda_6(modifier_0, color_0, strokeWidth_0, backgroundColor_0, strokeCap_0, $changed, $default));
    }
  }
  function LinearProgressIndicator$composable(modifier, color, backgroundColor, strokeCap, $composer, $changed, $default) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var strokeCap_0 = {_v: new StrokeCap(strokeCap)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(851060671);
    sourceInformation($composer_0, 'C(LinearProgressIndicator$composable)P(2,1:c#ui.graphics.Color,0:c#ui.graphics.Color,3:c#ui.graphics.StrokeCap)108@5031L6,112@5200L28,120@5582L203,116@5482L319,131@5946L203,127@5846L319,142@6311L207,138@6211L323,153@6680L207,149@6580L323,164@7035L624,160@6908L751:ProgressIndicator.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3w_1))) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.y3w_1))) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(strokeCap_0._v) : false) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).wdw());
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          var tmp = color_0._v.y3w_1;
          ProgressIndicatorDefaults_getInstance();
          backgroundColor_0._v = new Color(Color__copy$default_impl_ectz3s(tmp, 0.24));
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          strokeCap_0._v = new StrokeCap(Companion_getInstance_18().m46_1);
          $dirty = $dirty & -7169;
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
        traceEventStart(851060671, $changed, -1, 'androidx.compose.material.LinearProgressIndicator$composable (ProgressIndicator.kt:106)');
      }
      var infiniteTransition = rememberInfiniteTransition$composable(null, $composer_0, 0, 1);
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
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.LinearProgressIndicator$composable.<anonymous>' call
        var value = LinearProgressIndicator$composable$lambda_3;
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      var tmp_2 = infiniteRepeatable(keyframes(tmp0));
      var firstLineHead$delegate = animateFloat$composable(infiniteTransition, 0.0, 1.0, tmp_2, null, $composer_0, 432, 8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.LinearProgressIndicator$composable.<anonymous>' call
        var value_0 = LinearProgressIndicator$composable$lambda_4;
        $composer_2.x1t(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_2.o1r();
      var tmp_5 = infiniteRepeatable(keyframes(tmp0_0));
      var firstLineTail$delegate = animateFloat$composable(infiniteTransition, 0.0, 1.0, tmp_5, null, $composer_0, 432, 8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.LinearProgressIndicator$composable.<anonymous>' call
        var value_1 = LinearProgressIndicator$composable$lambda_5;
        $composer_3.x1t(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = tmp0_let_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      $composer_3.o1r();
      var tmp_8 = infiniteRepeatable(keyframes(tmp0_1));
      var secondLineHead$delegate = animateFloat$composable(infiniteTransition, 0.0, 1.0, tmp_8, null, $composer_0, 432, 8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.m1r(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_9;
      if (false ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.LinearProgressIndicator$composable.<anonymous>' call
        var value_2 = LinearProgressIndicator$composable$lambda_6;
        $composer_4.x1t(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = tmp0_let_2;
      }
      var tmp_10 = tmp_9;
      var tmp0_2 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      $composer_4.o1r();
      var tmp_11 = infiniteRepeatable(keyframes(tmp0_2));
      var secondLineTail$delegate = animateFloat$composable(infiniteTransition, 0.0, 1.0, tmp_11, null, $composer_0, 432, 8);
      var tmp_12 = size_0(progressSemantics(modifier_0._v), get_LinearIndicatorWidth(), get_LinearIndicatorHeight());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = [backgroundColor_0._v, strokeCap_0._v, firstLineHead$delegate, firstLineTail$delegate, color_0._v, secondLineHead$delegate, secondLineTail$delegate];
      var $composer_5 = $composer_0;
      $composer_5.m1r(-1603429786);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = tmp4_remember$composable.length;
      while (inductionVariable < last) {
        var key = tmp4_remember$composable[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_5.y1t(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_5.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (tmp1_cache ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.LinearProgressIndicator$composable.<anonymous>' call
        var value_3 = LinearProgressIndicator$composable$lambda_7(backgroundColor_0, strokeCap_0, color_0, firstLineHead$delegate, firstLineTail$delegate, secondLineHead$delegate, secondLineTail$delegate);
        $composer_5.x1t(value_3);
        tmp_13 = value_3;
      } else {
        tmp_13 = tmp0_let_3;
      }
      var tmp_14 = tmp_13;
      var tmp0_3 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      $composer_5.o1r();
      Canvas$composable(tmp_12, tmp0_3, $composer_0, 0);
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
      tmp0_safe_receiver.z28(LinearProgressIndicator$composable$lambda_8(modifier_0, color_0, backgroundColor_0, strokeCap_0, $changed, $default));
    }
  }
  function drawCircularIndicatorBackground(_this__u8e3s4, color, stroke) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return drawCircularIndicator(_this__u8e3s4, 0.0, 360.0, color, stroke);
  }
  function drawIndeterminateCircularIndicator(_this__u8e3s4, startAngle, strokeWidth, sweep, color, stroke) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    var tmp;
    if (stroke.f4a_1 === Companion_getInstance_18().m46_1) {
      tmp = 0.0;
    } else {
      var tmp_0 = 180.0 / get_PI();
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_CircularIndicatorDiameter();
      var tmp1_div = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_div) / 2);
      tmp = tmp_0 * (_Dp___get_value__impl__geb1vb(strokeWidth) / _Dp___get_value__impl__geb1vb(tmp1_div)) / 2.0;
    }
    var strokeCapOffset = tmp;
    var adjustedStartAngle = startAngle + strokeCapOffset;
    // Inline function 'kotlin.math.max' call
    var adjustedSweep = Math.max(sweep, 0.1);
    drawCircularIndicator(_this__u8e3s4, adjustedStartAngle, adjustedSweep, color, stroke);
  }
  function drawLinearIndicatorBackground(_this__u8e3s4, color, strokeWidth, strokeCap) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    return drawLinearIndicator(_this__u8e3s4, 0.0, 1.0, color, strokeWidth, strokeCap);
  }
  function drawLinearIndicator(_this__u8e3s4, startFraction, endFraction, color, strokeWidth, strokeCap) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    var width = _Size___get_width__impl__58y75t(_this__u8e3s4.x33());
    var height = _Size___get_height__impl__a04p02(_this__u8e3s4.x33());
    var yOffset = height / 2;
    var isLtr = _this__u8e3s4.f4b().equals(LayoutDirection_Ltr_getInstance());
    var barStart = (isLtr ? startFraction : 1.0 - endFraction) * width;
    var barEnd = (isLtr ? endFraction : 1.0 - startFraction) * width;
    if (strokeCap === Companion_getInstance_18().m46_1 ? true : height > width) {
      _this__u8e3s4.i4b(color, Offset(barStart, yOffset), Offset(barEnd, yOffset), strokeWidth);
    } else {
      var strokeCapOffset = strokeWidth / 2;
      var coerceRange = rangeTo(strokeCapOffset, width - strokeCapOffset);
      var adjustedBarStart = coerceIn(barStart, coerceRange);
      var adjustedBarEnd = coerceIn(barEnd, coerceRange);
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = endFraction - startFraction;
      if (Math.abs(tmp0_abs) > 0) {
        _this__u8e3s4.i4b(color, Offset(adjustedBarStart, yOffset), Offset(adjustedBarEnd, yOffset), strokeWidth, strokeCap);
      }
    }
  }
  function drawCircularIndicator(_this__u8e3s4, startAngle, sweep, color, stroke) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    var diameterOffset = stroke.d4a_1 / 2;
    var arcDimen = _Size___get_width__impl__58y75t(_this__u8e3s4.x33()) - 2 * diameterOffset;
    _this__u8e3s4.r4b(color, startAngle, sweep, false, Offset(diameterOffset, diameterOffset), Size(arcDimen, arcDimen), VOID, stroke);
  }
  function CircularProgressIndicator$composable$lambda($currentRotation$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentRotation', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentRotation$delegate.s();
  }
  function CircularProgressIndicator$composable$lambda_0($baseRotation$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('baseRotation', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $baseRotation$delegate.s();
  }
  function CircularProgressIndicator$composable$lambda_1($endAngle$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('endAngle', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $endAngle$delegate.s();
  }
  function CircularProgressIndicator$composable$lambda_2($startAngle$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('startAngle', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $startAngle$delegate.s();
  }
  function LinearProgressIndicator$composable$lambda($firstLineHead$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('firstLineHead', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $firstLineHead$delegate.s();
  }
  function LinearProgressIndicator$composable$lambda_0($firstLineTail$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('firstLineTail', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $firstLineTail$delegate.s();
  }
  function LinearProgressIndicator$composable$lambda_1($secondLineHead$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('secondLineHead', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $secondLineHead$delegate.s();
  }
  function LinearProgressIndicator$composable$lambda_2($secondLineTail$delegate) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('secondLineTail', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $secondLineTail$delegate.s();
  }
  function CircularProgressIndicator$composable$lambda_3($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1332;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 0), get_CircularEasing());
    $this$keyframes.f8p(290.0, 666);
    return Unit_getInstance();
  }
  function CircularProgressIndicator$composable$lambda_4($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1332;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 666), get_CircularEasing());
    $this$keyframes.f8p(290.0, $this$keyframes.b8p_1);
    return Unit_getInstance();
  }
  function CircularProgressIndicator$composable$lambda_5($backgroundColor, $stroke, $strokeWidth, $color, $currentRotation$delegate, $endAngle$delegate, $startAngle$delegate, $baseRotation$delegate) {
    return function ($this$Canvas) {
      drawCircularIndicatorBackground($this$Canvas, $backgroundColor._v.y3w_1, $stroke);
      var currentRotationAngleOffset = CircularProgressIndicator$composable$lambda($currentRotation$delegate) * 216.0 % 360.0;
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = CircularProgressIndicator$composable$lambda_1($endAngle$delegate) - CircularProgressIndicator$composable$lambda_2($startAngle$delegate);
      tmp$ret$0 = Math.abs(tmp0_abs);
      var sweep = tmp$ret$0;
      var offset = -90.0 + currentRotationAngleOffset + CircularProgressIndicator$composable$lambda_0($baseRotation$delegate);
      drawIndeterminateCircularIndicator($this$Canvas, CircularProgressIndicator$composable$lambda_2($startAngle$delegate) + offset, $strokeWidth._v.j36_1, sweep, $color._v.y3w_1, $stroke);
      return Unit_getInstance();
    };
  }
  function CircularProgressIndicator$composable$lambda_6($modifier, $color, $strokeWidth, $backgroundColor, $strokeCap, $$changed, $$default) {
    return function ($composer, $force) {
      CircularProgressIndicator$composable($modifier._v, $color._v.y3w_1, $strokeWidth._v.j36_1, $backgroundColor._v.y3w_1, $strokeCap._v.p46_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LinearProgressIndicator$composable$lambda_3($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1800;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 0), get_FirstLineHeadEasing());
    $this$keyframes.f8p(1.0, 750);
    return Unit_getInstance();
  }
  function LinearProgressIndicator$composable$lambda_4($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1800;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 333), get_FirstLineTailEasing());
    $this$keyframes.f8p(1.0, 1183);
    return Unit_getInstance();
  }
  function LinearProgressIndicator$composable$lambda_5($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1800;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 1000), get_SecondLineHeadEasing());
    $this$keyframes.f8p(1.0, 1567);
    return Unit_getInstance();
  }
  function LinearProgressIndicator$composable$lambda_6($this$keyframes) {
    _init_properties_ProgressIndicator_kt__3rbzw0();
    $this$keyframes.b8p_1 = 1800;
    $this$keyframes.g8p($this$keyframes.f8p(0.0, 1267), get_SecondLineTailEasing());
    $this$keyframes.f8p(1.0, 1800);
    return Unit_getInstance();
  }
  function LinearProgressIndicator$composable$lambda_7($backgroundColor, $strokeCap, $color, $firstLineHead$delegate, $firstLineTail$delegate, $secondLineHead$delegate, $secondLineTail$delegate) {
    return function ($this$Canvas) {
      var strokeWidth = _Size___get_height__impl__a04p02($this$Canvas.x33());
      drawLinearIndicatorBackground($this$Canvas, $backgroundColor._v.y3w_1, strokeWidth, $strokeCap._v.p46_1);
      var tmp;
      if (LinearProgressIndicator$composable$lambda($firstLineHead$delegate) - LinearProgressIndicator$composable$lambda_0($firstLineTail$delegate) > 0) {
        drawLinearIndicator($this$Canvas, LinearProgressIndicator$composable$lambda($firstLineHead$delegate), LinearProgressIndicator$composable$lambda_0($firstLineTail$delegate), $color._v.y3w_1, strokeWidth, $strokeCap._v.p46_1);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (LinearProgressIndicator$composable$lambda_1($secondLineHead$delegate) - LinearProgressIndicator$composable$lambda_2($secondLineTail$delegate) > 0) {
        drawLinearIndicator($this$Canvas, LinearProgressIndicator$composable$lambda_1($secondLineHead$delegate), LinearProgressIndicator$composable$lambda_2($secondLineTail$delegate), $color._v.y3w_1, strokeWidth, $strokeCap._v.p46_1);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function LinearProgressIndicator$composable$lambda_8($modifier, $color, $backgroundColor, $strokeCap, $$changed, $$default) {
    return function ($composer, $force) {
      LinearProgressIndicator$composable($modifier._v, $color._v.y3w_1, $backgroundColor._v.y3w_1, $strokeCap._v.p46_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_ProgressIndicator_kt_5iutny;
  function _init_properties_ProgressIndicator_kt__3rbzw0() {
    if (!properties_initialized_ProgressIndicator_kt_5iutny) {
      properties_initialized_ProgressIndicator_kt_5iutny = true;
      LinearIndicatorHeight = ProgressIndicatorDefaults_getInstance().xe1_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      LinearIndicatorWidth = _Dp___init__impl__ms3zkb(240);
      // Inline function 'androidx.compose.ui.unit.dp' call
      CircularIndicatorDiameter = _Dp___init__impl__ms3zkb(40);
      FirstLineHeadEasing = new CubicBezierEasing(0.2, 0.0, 0.8, 1.0);
      FirstLineTailEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      SecondLineHeadEasing = new CubicBezierEasing(0.0, 0.0, 0.65, 1.0);
      SecondLineTailEasing = new CubicBezierEasing(0.1, 0.0, 0.45, 1.0);
      CircularEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes(small, medium, large) {
    var tmp;
    if (small === VOID) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      tmp = RoundedCornerShape(tmp$ret$0);
    } else {
      tmp = small;
    }
    small = tmp;
    var tmp_0;
    if (medium === VOID) {
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(4);
      tmp_0 = RoundedCornerShape(tmp$ret$0_0);
    } else {
      tmp_0 = medium;
    }
    medium = tmp_0;
    var tmp_1;
    if (large === VOID) {
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = RoundedCornerShape(tmp$ret$0_1);
    } else {
      tmp_1 = large;
    }
    large = tmp_1;
    this.tdu_1 = small;
    this.udu_1 = medium;
    this.vdu_1 = large;
    this.wdu_1 = 0;
  }
  protoOf(Shapes).be2 = function (small, medium, large) {
    return new Shapes(small, medium, large);
  };
  protoOf(Shapes).ce2 = function (small, medium, large, $super) {
    small = small === VOID ? this.tdu_1 : small;
    medium = medium === VOID ? this.udu_1 : medium;
    large = large === VOID ? this.vdu_1 : large;
    return $super === VOID ? this.be2(small, medium, large) : $super.be2.call(this, small, medium, large);
  };
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.tdu_1, other.tdu_1))
      return false;
    if (!equals(this.udu_1, other.udu_1))
      return false;
    if (!equals(this.vdu_1, other.vdu_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.tdu_1);
    result = imul(31, result) + hashCode(this.udu_1) | 0;
    result = imul(31, result) + hashCode(this.vdu_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(small=' + this.tdu_1 + ', medium=' + this.udu_1 + ', large=' + this.vdu_1 + ')';
  };
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_HeightToFirstLine() {
    _init_properties_Snackbar_kt__sxelwb();
    return HeightToFirstLine;
  }
  var HeightToFirstLine;
  function get_HorizontalSpacing() {
    _init_properties_Snackbar_kt__sxelwb();
    return HorizontalSpacing;
  }
  var HorizontalSpacing;
  function get_HorizontalSpacingButtonSide() {
    _init_properties_Snackbar_kt__sxelwb();
    return HorizontalSpacingButtonSide;
  }
  var HorizontalSpacingButtonSide;
  function get_SeparateButtonExtraY() {
    _init_properties_Snackbar_kt__sxelwb();
    return SeparateButtonExtraY;
  }
  var SeparateButtonExtraY;
  function get_SnackbarVerticalPadding() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarVerticalPadding;
  }
  var SnackbarVerticalPadding;
  function get_TextEndExtraSpacing() {
    _init_properties_Snackbar_kt__sxelwb();
    return TextEndExtraSpacing;
  }
  var TextEndExtraSpacing;
  function get_LongButtonVerticalOffset() {
    _init_properties_Snackbar_kt__sxelwb();
    return LongButtonVerticalOffset;
  }
  var LongButtonVerticalOffset;
  function get_SnackbarMinHeightOneLine() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarMinHeightOneLine;
  }
  var SnackbarMinHeightOneLine;
  function get_SnackbarMinHeightTwoLines() {
    _init_properties_Snackbar_kt__sxelwb();
    return SnackbarMinHeightTwoLines;
  }
  var SnackbarMinHeightTwoLines;
  function Snackbar$composable(modifier, action, actionOnNewLine, shape, backgroundColor, contentColor, elevation, content, $composer, $changed, $default) {
    _init_properties_Snackbar_kt__sxelwb();
    var modifier_0 = {_v: modifier};
    var action_0 = {_v: action};
    var actionOnNewLine_0 = {_v: actionOnNewLine};
    var shape_0 = {_v: shape};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1454011684);
    sourceInformation($composer_0, 'C(Snackbar$composable)P(6!2,7,2:c#ui.graphics.Color,4:c#ui.graphics.Color,5:c#ui.unit.Dp)84@3955L6,85@4015L15,86@4072L6,90@4158L631:Snackbar.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(action_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(actionOnNewLine_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.y3w_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3w_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.b1u(_Dp___get_value__impl__geb1vb(elevation_0._v.j36_1)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          action_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          actionOnNewLine_0._v = false;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = MaterialTheme_getInstance().ydu($composer_0, 6).tdu_1;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          backgroundColor_0._v = new Color(SnackbarDefaults_getInstance().fe2($composer_0, 6));
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).odv());
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(6);
          elevation_0._v = new Dp(tmp$ret$0);
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1454011684, $dirty, -1, 'androidx.compose.material.Snackbar$composable (Snackbar.kt:80)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = shape_0._v;
      var tmp_1 = backgroundColor_0._v.y3w_1;
      var tmp_2 = contentColor_0._v.y3w_1;
      var tmp_3 = elevation_0._v.j36_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -2084221700, true, Snackbar$composable$lambda(action_0, content, $dirty, actionOnNewLine_0));
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
      var tmp_5;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_5 = value;
      } else {
        tmp_5 = tmp0_let;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_1.o1r();
      Surface$composable(tmp, tmp_0, tmp_1, tmp_2, null, tmp_3, tmp0, $composer_0, 1572864 | 14 & $dirty | 112 & $dirty >> 6 | 896 & $dirty >> 6 | 7168 & $dirty >> 6 | 458752 & $dirty >> 3, 16);
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
      tmp0_safe_receiver.z28(Snackbar$composable$lambda_0(modifier_0, action_0, actionOnNewLine_0, shape_0, backgroundColor_0, contentColor_0, elevation_0, content, $changed, $default));
    }
  }
  function SnackbarDefaults() {
    SnackbarDefaults_instance = this;
    this.de2_1 = 0.8;
    this.ee2_1 = 0;
  }
  protoOf(SnackbarDefaults).fe2 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1893712211);
    sourceInformation($composer_0, 'C($get-backgroundColor$$composable)201@8484L6,203@8598L6:Snackbar.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1893712211, $changed, -1, 'androidx.compose.material.SnackbarDefaults.$get-backgroundColor$$composable (Snackbar.kt:200)');
    }
    var tmp0 = compositeOver(Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.8), MaterialTheme_getInstance().zdu($composer_0, 6).odv());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  var SnackbarDefaults_instance;
  function SnackbarDefaults_getInstance() {
    if (SnackbarDefaults_instance == null)
      new SnackbarDefaults();
    return SnackbarDefaults_instance;
  }
  function TextOnlySnackbar$composable(content, $composer, $changed) {
    _init_properties_Snackbar_kt__sxelwb();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1584596663);
    sourceInformation($composer_0, 'C(TextOnlySnackbar$composable)245@10154L980,236@9927L1207:Snackbar.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1584596663, $dirty, -1, 'androidx.compose.material.TextOnlySnackbar$composable (Snackbar.kt:235)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
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
        // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>' call
        var value = TextOnlySnackbar$composable$lambda;
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var tmp2_Layout$composable = new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp0);
      var modifier = null;
      var $composer_2 = $composer_0;
      $composer_2.m1r(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(2 === 0))
        modifier = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier);
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.p1t();
      if ($composer_3.a1t()) {
        $composer_3.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp2_Layout$composable, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & 6 >> 3);
      $composer_3.m1r(2058660585);
      // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1937258220, 'C237@9944L202:Snackbar.kt#jmzs0o');
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = padding_1(Companion_getInstance(), get_HorizontalSpacing(), get_SnackbarVerticalPadding());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_5 = $composer_4;
      $composer_5.m1r(1330882304);
      sourceInformation($composer_5, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $composer_6 = $composer_5;
      $composer_6.m1r(1725976829);
      sourceInformation($composer_6, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var localMap_0 = $composer_6.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_7 = $composer_6;
      var tmp_3 = $composer_7.z1s();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_7.p1t();
      if ($composer_7.a1t()) {
        $composer_7.q1t(tmp0_ReusableComposeNode$composable_0);
      } else {
        $composer_7.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap_0, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_0 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
        tmp0_with_0.x1t(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash_0, tmp0_set_0);
        tmp_4 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_7.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1961641020, 'C243@10127L9:Snackbar.kt#jmzs0o');
      content($composer_9, 14 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      $composer_7.o1r();
      $composer_7.s1t();
      $composer_6.o1r();
      $composer_5.o1r();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.o1r();
      $composer_3.s1t();
      $composer_2.o1r();
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
      tmp0_safe_receiver.z28(TextOnlySnackbar$composable$lambda_0(content, $changed));
    }
  }
  function NewLineButtonSnackbar$composable(text, action, $composer, $changed) {
    _init_properties_Snackbar_kt__sxelwb();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-2006732497);
    sourceInformation($composer_0, 'C(NewLineButtonSnackbar$composable)P(1)274@11262L476:Snackbar.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(action) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-2006732497, $dirty, -1, 'androidx.compose.material.NewLineButtonSnackbar$composable (Snackbar.kt:270)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier = padding(fillMaxWidth(Companion_getInstance()), get_HorizontalSpacing(), VOID, get_HorizontalSpacingButtonSide(), get_SeparateButtonExtraY());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.m1r(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().p93_1;
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_2().a5f_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      $composer_2.m1r(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.z1s();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.p1t();
      if ($composer_3.a1t()) {
        $composer_3.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'androidx.compose.material.NewLineButtonSnackbar$composable.<anonymous>' call
      var tmp4_anonymous_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -849056634, 'C282@11505L171,286@11685L47:Snackbar.kt#jmzs0o');
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_1 = padding(paddingFromBaseline(Companion_getInstance(), get_HeightToFirstLine(), get_LongButtonVerticalOffset()), VOID, VOID, get_HorizontalSpacingButtonSide());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      $composer_6.m1r(1330882304);
      sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      $composer_7.m1r(1725976829);
      sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
      var localMap_0 = $composer_7.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & 48 << 9;
      var $composer_8 = $composer_7;
      var tmp_1 = $composer_8.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_8.p1t();
      if ($composer_8.a1t()) {
        $composer_8.q1t(tmp0_ReusableComposeNode$composable_0);
      } else {
        $composer_8.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_1 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss(tmp4_anonymous_1, measurePolicy_0, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_1, localMap_0, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_0 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
        tmp0_with_0.x1t(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1).v1t(compositeKeyHash_0, tmp0_set_0);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
      $composer_8.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.NewLineButtonSnackbar$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1590183990, 'C285@11668L6:Snackbar.kt#jmzs0o');
      text($composer_10, 14 & $dirty);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.o1r();
      $composer_8.s1t();
      $composer_7.o1r();
      $composer_6.o1r();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_3 = tmp4_anonymous_0.f96(Companion_getInstance(), Companion_getInstance_2().c5f_1);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_11 = $composer_5;
      $composer_11.m1r(1330882304);
      sourceInformation($composer_11, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_3 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment_0 = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_11, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      $composer_12.m1r(1725976829);
      sourceInformation($composer_12, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_4 = Companion_getInstance();
      var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_12, 0);
      var localMap_1 = $composer_12.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_1 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
      var tmp3_ReusableComposeNode$composable_1 = 6 | 7168 & 0 << 9;
      var $composer_13 = $composer_12;
      var tmp_3 = $composer_13.z1s();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_13.p1t();
      if ($composer_13.a1t()) {
        $composer_13.q1t(tmp0_ReusableComposeNode$composable_1);
      } else {
        $composer_13.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_2 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss(tmp4_anonymous_2, measurePolicy_1, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_2, localMap_1, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_1 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_1 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      if (tmp0_with_1.a1t() ? true : !equals(tmp0_with_1.w1t(), compositeKeyHash_1)) {
        tmp0_with_1.x1t(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2).v1t(compositeKeyHash_1, tmp0_set_1);
        tmp_4 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp3_ReusableComposeNode$composable_1 >> 3);
      $composer_13.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.NewLineButtonSnackbar$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1590183936, 'C286@11722L8:Snackbar.kt#jmzs0o');
      action($composer_15, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_15);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.o1r();
      $composer_13.s1t();
      $composer_12.o1r();
      $composer_11.o1r();
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.o1r();
      $composer_3.s1t();
      $composer_2.o1r();
      $composer_1.o1r();
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
      tmp0_safe_receiver.z28(NewLineButtonSnackbar$composable$lambda(text, action, $changed));
    }
  }
  function OneRowSnackbar$composable(text, action, $composer, $changed) {
    _init_properties_Snackbar_kt__sxelwb();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-634523191);
    sourceInformation($composer_0, 'C(OneRowSnackbar$composable)P(1)306@12238L2218,297@11913L2543:Snackbar.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(action) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-634523191, $dirty, -1, 'androidx.compose.material.OneRowSnackbar$composable (Snackbar.kt:291)');
      }
      var textTag = 'text';
      var actionTag = 'action';
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp1_Layout$composable = padding(Companion_getInstance(), get_HorizontalSpacing(), VOID, get_HorizontalSpacingButtonSide());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.y1t(actionTag) | $composer_1.y1t(textTag));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>' call
        var value = OneRowSnackbar$composable$lambda(actionTag, textTag);
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var tmp2_Layout$composable = new sam$androidx_compose_ui_layout_MeasurePolicy$0_1(tmp0);
      var modifier = tmp1_Layout$composable;
      var $composer_2 = $composer_0;
      $composer_2.m1r(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier);
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.p1t();
      if ($composer_3.a1t()) {
        $composer_3.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp2_Layout$composable, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & 6 >> 3);
      $composer_3.m1r(2058660585);
      // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 92212054, 'C299@11943L86,300@12042L46:Snackbar.kt#jmzs0o');
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = padding_1(layoutId(Companion_getInstance(), textTag), VOID, get_SnackbarVerticalPadding());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_5 = $composer_4;
      $composer_5.m1r(1330882304);
      sourceInformation($composer_5, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $composer_6 = $composer_5;
      $composer_6.m1r(1725976829);
      sourceInformation($composer_6, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var localMap_0 = $composer_6.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_7 = $composer_6;
      var tmp_3 = $composer_7.z1s();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_7.p1t();
      if ($composer_7.a1t()) {
        $composer_7.q1t(tmp0_ReusableComposeNode$composable_0);
      } else {
        $composer_7.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap_0, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_0 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_4;
      if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
        tmp0_with_0.x1t(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash_0, tmp0_set_0);
        tmp_4 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_7.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 379420485, 'C299@12021L6:Snackbar.kt#jmzs0o');
      text($composer_9, 14 & $dirty);
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      $composer_7.o1r();
      $composer_7.s1t();
      $composer_6.o1r();
      $composer_5.o1r();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_2 = layoutId(Companion_getInstance(), actionTag);
      var contentAlignment_0 = null;
      var propagateMinConstraints_0 = false;
      var $composer_10 = $composer_4;
      $composer_10.m1r(1330882304);
      sourceInformation($composer_10, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment_0 = Companion_getInstance_2().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_10, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_3 = modifier_2;
      var $composer_11 = $composer_10;
      $composer_11.m1r(1725976829);
      sourceInformation($composer_11, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_3 = Companion_getInstance();
      var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_11, 0);
      var localMap_1 = $composer_11.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_1 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_1 = materializerOf(modifier_3);
      var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & 48 << 9;
      var $composer_12 = $composer_11;
      var tmp_5 = $composer_12.z1s();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_12.p1t();
      if ($composer_12.a1t()) {
        $composer_12.q1t(tmp0_ReusableComposeNode$composable_1);
      } else {
        $composer_12.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_1 = _Updater___init__impl__rbfxm8($composer_12);
      Updater__set_impl_v7kwss(tmp4_anonymous_1, measurePolicy_0, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_1, localMap_1, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_1 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_1 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_6;
      if (tmp0_with_1.a1t() ? true : !equals(tmp0_with_1.w1t(), compositeKeyHash_1)) {
        tmp0_with_1.x1t(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1).v1t(compositeKeyHash_1, tmp0_set_1);
        tmp_6 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
      $composer_12.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, 379420542, 'C300@12078L8:Snackbar.kt#jmzs0o');
      action($composer_14, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_14);
      sourceInformationMarkerEnd($composer_13);
      $composer_12.o1r();
      $composer_12.s1t();
      $composer_11.o1r();
      $composer_10.o1r();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.o1r();
      $composer_3.s1t();
      $composer_2.o1r();
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
      tmp0_safe_receiver.z28(OneRowSnackbar$composable$lambda_0(text, action, $changed));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.ge2_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).e6w = function (_this__u8e3s4, measurables, constraints) {
    return this.ge2_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_1(function_0) {
    this.he2_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_1).e6w = function (_this__u8e3s4, measurables, constraints) {
    return this.he2_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function Snackbar$composable$lambda$lambda$lambda($action, $content, $$dirty, $actionOnNewLine) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:Snackbar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(225114541, $changed, -1, 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>.<anonymous> (Snackbar.kt:99)');
        }
        if ($action._v == null) {
          $composer_0.m1r(1050601247);
          sourceInformation($composer_0, '101@4578L25');
          TextOnlySnackbar$composable($content, $composer_0, 14 & $$dirty >> 21);
          $composer_0.o1r();
        } else if ($actionOnNewLine._v) {
          $composer_0.m1r(1050601312);
          sourceInformation($composer_0, '102@4643L38');
          NewLineButtonSnackbar$composable($content, $action._v, $composer_0, 14 & $$dirty >> 21 | 112 & $$dirty);
          $composer_0.o1r();
        } else {
          $composer_0.m1r(1050601379);
          sourceInformation($composer_0, '103@4710L31');
          OneRowSnackbar$composable($content, $action._v, $composer_0, 14 & $$dirty >> 21 | 112 & $$dirty);
          $composer_0.o1r();
        }
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
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Snackbar$composable$lambda$lambda($action, $content, $$dirty, $actionOnNewLine) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C98@4450L10,99@4479L294:Snackbar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1939362236, $changed, -1, 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous> (Snackbar.kt:97)');
        }
        var textStyle = MaterialTheme_getInstance().edw($composer_0, 6).zdv_1;
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 225114541, true, Snackbar$composable$lambda$lambda$lambda($action, $content, $$dirty, $actionOnNewLine));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
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
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        ProvideTextStyle$composable(textStyle, tmp$ret$6, $composer_0, 48);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Snackbar$composable$lambda($action, $content, $$dirty, $actionOnNewLine) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C97@4400L4,97@4335L448:Snackbar.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-2084221700, $changed, -1, 'androidx.compose.material.Snackbar$composable.<anonymous> (Snackbar.kt:96)');
        }
        var tmp_0 = [get_LocalContentAlpha().u28(ContentAlpha_getInstance().gdw($composer_0, 6))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1939362236, true, Snackbar$composable$lambda$lambda($action, $content, $$dirty, $actionOnNewLine));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Snackbar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Snackbar$composable$lambda_0($modifier, $action, $actionOnNewLine, $shape, $backgroundColor, $contentColor, $elevation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Snackbar$composable($modifier._v, $action._v, $actionOnNewLine._v, $shape._v, $backgroundColor._v.y3w_1, $contentColor._v.y3w_1, $elevation._v.j36_1, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TextOnlySnackbar$composable$lambda($this$Layout, measurables, constraints) {
    _init_properties_Snackbar_kt__sxelwb();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(measurables.g() === 1)) {
      // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
      var message = 'text for Snackbar expected to have exactly only one child';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var textPlaceable = first(measurables).w5h(constraints.l35_1);
    var firstBaseline = textPlaceable.s6r(get_FirstBaseline());
    var lastBaseline = textPlaceable.s6r(get_LastBaseline());
    // Inline function 'kotlin.require' call
    Companion_getInstance_3();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(firstBaseline === -2147483648)) {
      // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
      var message_0 = 'No baselines for text';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    Companion_getInstance_3();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(lastBaseline === -2147483648)) {
      // Inline function 'androidx.compose.material.TextOnlySnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
      var message_1 = 'No baselines for text';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp;
    if (firstBaseline === lastBaseline) {
      tmp = get_SnackbarMinHeightOneLine();
    } else {
      tmp = get_SnackbarMinHeightTwoLines();
    }
    var minHeight = tmp;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = $this$Layout.t35(minHeight);
    var tmp4_max = textPlaceable.y5h_1;
    var containerHeight = Math.max(tmp3_max, tmp4_max);
    var tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints.l35_1);
    return $this$Layout.d5i(tmp_0, containerHeight, VOID, TextOnlySnackbar$composable$lambda$lambda(containerHeight, textPlaceable));
  }
  function TextOnlySnackbar$composable$lambda$lambda($containerHeight, $textPlaceable) {
    return function ($this$layout) {
      var textPlaceY = ($containerHeight - $textPlaceable.y5h_1 | 0) / 2 | 0;
      $this$layout.p5n($textPlaceable, 0, textPlaceY);
      return Unit_getInstance();
    };
  }
  function TextOnlySnackbar$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      TextOnlySnackbar$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NewLineButtonSnackbar$composable$lambda($text, $action, $$changed) {
    return function ($composer, $force) {
      NewLineButtonSnackbar$composable($text, $action, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OneRowSnackbar$composable$lambda$lambda($textPlaceable, $textPlaceY, $buttonPlaceable, $buttonPlaceX, $buttonPlaceY) {
    return function ($this$layout) {
      $this$layout.p5n($textPlaceable, 0, $textPlaceY);
      $this$layout.p5n($buttonPlaceable, $buttonPlaceX, $buttonPlaceY);
      return Unit_getInstance();
    };
  }
  function OneRowSnackbar$composable$lambda($actionTag, $textTag) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator = measurables.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(get_layoutId(element), $actionTag);
          if (tmp$ret$0) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var buttonPlaceable = tmp$ret$1.w5h(constraints.l35_1);
      var textMaxWidth = coerceAtLeast_0((_Constraints___get_maxWidth__impl__uuyqc(constraints.l35_1) - buttonPlaceable.x5h_1 | 0) - $this$Layout.t35(get_TextEndExtraSpacing()) | 0, _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1));
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_0 = measurables.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$2;
          // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(get_layoutId(element_0), $textTag);
          if (tmp$ret$2) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var textPlaceable = tmp$ret$3.w5h(Constraints__copy$default_impl_f452rp(constraints.l35_1, VOID, textMaxWidth, 0));
      var firstTextBaseline = textPlaceable.s6r(get_FirstBaseline());
      Companion_getInstance_3();
      var tmp0_require = !(firstTextBaseline === -2147483648);
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!tmp0_require) {
        var tmp$ret$4;
        // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$4 = 'No baselines for text';
        var message = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var lastTextBaseline = textPlaceable.s6r(get_LastBaseline());
      Companion_getInstance_3();
      var tmp1_require = !(lastTextBaseline === -2147483648);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (!tmp1_require) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$5 = 'No baselines for text';
        var message_0 = tmp$ret$5;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var isOneLine = firstTextBaseline === lastTextBaseline;
      var buttonPlaceX = _Constraints___get_maxWidth__impl__uuyqc(constraints.l35_1) - buttonPlaceable.x5h_1 | 0;
      var textPlaceY;
      var containerHeight;
      var buttonPlaceY;
      var tmp_1;
      if (isOneLine) {
        var minContainerHeight = $this$Layout.t35(get_SnackbarMinHeightOneLine());
        var contentHeight = buttonPlaceable.y5h_1;
        var tmp$ret$6;
        // Inline function 'kotlin.math.max' call
        tmp$ret$6 = Math.max(minContainerHeight, contentHeight);
        containerHeight = tmp$ret$6;
        textPlaceY = (containerHeight - textPlaceable.y5h_1 | 0) / 2 | 0;
        var buttonBaseline = buttonPlaceable.s6r(get_FirstBaseline());
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.material.OneRowSnackbar$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2;
        Companion_getInstance_3();
        if (!(buttonBaseline === -2147483648)) {
          tmp_2 = (textPlaceY + firstTextBaseline | 0) - buttonBaseline | 0;
        } else {
          tmp_2 = 0;
        }
        tmp$ret$7 = tmp_2;
        tmp$ret$8 = tmp$ret$7;
        buttonPlaceY = tmp$ret$8;
        tmp_1 = Unit_getInstance();
      } else {
        var baselineOffset = $this$Layout.t35(get_HeightToFirstLine());
        textPlaceY = baselineOffset - firstTextBaseline | 0;
        var minContainerHeight_0 = $this$Layout.t35(get_SnackbarMinHeightTwoLines());
        var contentHeight_0 = textPlaceY + textPlaceable.y5h_1 | 0;
        var tmp$ret$9;
        // Inline function 'kotlin.math.max' call
        tmp$ret$9 = Math.max(minContainerHeight_0, contentHeight_0);
        containerHeight = tmp$ret$9;
        buttonPlaceY = (containerHeight - buttonPlaceable.y5h_1 | 0) / 2 | 0;
        tmp_1 = Unit_getInstance();
      }
      var tmp_3 = _Constraints___get_maxWidth__impl__uuyqc(constraints.l35_1);
      return $this$Layout.d5i(tmp_3, containerHeight, VOID, OneRowSnackbar$composable$lambda$lambda(textPlaceable, textPlaceY, buttonPlaceable, buttonPlaceX, buttonPlaceY));
    };
  }
  function OneRowSnackbar$composable$lambda_0($text, $action, $$changed) {
    return function ($composer, $force) {
      OneRowSnackbar$composable($text, $action, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Snackbar_kt_4x36ah;
  function _init_properties_Snackbar_kt__sxelwb() {
    if (!properties_initialized_Snackbar_kt_4x36ah) {
      properties_initialized_Snackbar_kt_4x36ah = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      HeightToFirstLine = _Dp___init__impl__ms3zkb(30);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HorizontalSpacing = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HorizontalSpacingButtonSide = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      SeparateButtonExtraY = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      SnackbarVerticalPadding = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextEndExtraSpacing = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      LongButtonVerticalOffset = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      SnackbarMinHeightOneLine = _Dp___init__impl__ms3zkb(48);
      // Inline function 'androidx.compose.ui.unit.dp' call
      SnackbarMinHeightTwoLines = _Dp___init__impl__ms3zkb(68);
    }
  }
  function _Strings___init__impl__htkkc7(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.ie2_1 = _Strings___init__impl__htkkc7(0);
    this.je2_1 = _Strings___init__impl__htkkc7(1);
    this.ke2_1 = _Strings___init__impl__htkkc7(2);
    this.le2_1 = _Strings___init__impl__htkkc7(3);
    this.me2_1 = _Strings___init__impl__htkkc7(4);
    this.ne2_1 = _Strings___init__impl__htkkc7(5);
    this.oe2_1 = _Strings___init__impl__htkkc7(6);
  }
  var Companion_instance;
  function Companion_getInstance_30() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Surface$composable(modifier, shape, color, contentColor, border, elevation, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(353896921);
    sourceInformation($composer_0, 'C(Surface$composable)P(5,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp)107@5308L6,108@5350L22,*113@5525L7,114@5549L894:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(shape_0._v) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3w_1))) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3w_1))) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(border_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.b1u(_Dp___get_value__impl__geb1vb(elevation_0._v.j36_1)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).odv());
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.y3w_1, $composer_0, 14 & $dirty >> 6));
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(353896921, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:104)');
      }
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalAbsoluteElevation();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var tmp2_plus = tmp0.j36_1;
      var tmp3_plus = elevation_0._v.j36_1;
      var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
      var tmp = [get_LocalContentColor().u28(contentColor_0._v), get_LocalAbsoluteElevation().u28(new Dp(absoluteElevation))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1822160838, true, Surface$composable$lambda(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.m1r(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_2.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_2.x1t(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_2.o1r();
      CompositionLocalProvider$composable(tmp, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.z28(Surface$composable$lambda_0(modifier_0, shape_0, color_0, contentColor_0, border_0, elevation_0, content, $changed, $default));
    }
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, elevation) {
    return clip(background(shadow(_this__u8e3s4, elevation, shape, false).n5f(!(border_0 == null) ? border(Companion_getInstance(), border_0, shape) : Companion_getInstance()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevationOverlay, absoluteElevation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-112085913);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(1:c#ui.graphics.Color,2,0:c#ui.unit.Dp)635@31093L6,636@31164L31:Surface.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-112085913, $changed, -1, 'androidx.compose.material.surfaceColorAtElevation$composable (Surface.kt:630)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().zdu($composer_0, 6).odv()) ? !(elevationOverlay == null) : false) {
      tmp = elevationOverlay.ze0(color, absoluteElevation, $composer_0, 14 & $changed | 112 & $changed >> 3 | 896 & $changed << 3);
    } else {
      tmp = color;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function Surface$composable_0(onClick, modifier, enabled, shape, color, contentColor, border, elevation, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var border_0 = {_v: border};
    var elevation_0 = {_v: new Dp(elevation)};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1747901218);
    sourceInformation($composer_0, 'C(Surface$composable)P(8,7,5,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color!1,4:c#ui.unit.Dp,6)216@10794L6,217@10836L22,220@10970L39,*223@11102L7,224@11126L982:Surface.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(shape_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3w_1))) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3w_1))) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1t(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.b1u(_Dp___get_value__impl__geb1vb(elevation_0._v.j36_1)) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = get_RectangleShape();
        }
        if (!(($default & 16) === 0)) {
          color_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).odv());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(color_0._v.y3w_1, $composer_0, 14 & $dirty >> 12));
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
          elevation_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 256) === 0)) {
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
            // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1747901218, $dirty, -1, 'androidx.compose.material.Surface$composable (Surface.kt:211)');
      }
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp1_$get_current$$composable_gn3xww = get_LocalAbsoluteElevation();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp1_$get_current$$composable_gn3xww);
      sourceInformationMarkerEnd($composer_2);
      var tmp3_plus = tmp0_0.j36_1;
      var tmp4_plus = elevation_0._v.j36_1;
      var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp3_plus) + _Dp___get_value__impl__geb1vb(tmp4_plus));
      var tmp_1 = [get_LocalContentColor().u28(contentColor_0._v), get_LocalAbsoluteElevation().u28(new Dp(absoluteElevation))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.Surface$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2031491085, true, Surface$composable$lambda_1(modifier_0, shape_0, color_0, absoluteElevation, $dirty, border_0, elevation_0, interactionSource_0, enabled_0, onClick, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.m1r(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_3.y1t(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_3.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_3.x1t(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.o1r();
      CompositionLocalProvider$composable(tmp_1, tmp0_1, $composer_0, 48);
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
      tmp0_safe_receiver.z28(Surface$composable$lambda_2(onClick, modifier_0, enabled_0, shape_0, color_0, contentColor_0, border_0, elevation_0, interactionSource_0, content, $changed, $default));
    }
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    set_isContainer($this$semantics, true);
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$slambda).k6k = function ($this$pointerInput, $completion) {
    var tmp = this.l6k($this$pointerInput, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Surface$composable$lambda$slambda).yl = function (p1, $completion) {
    return this.k6k((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$slambda).ml = function () {
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
  protoOf(Surface$composable$lambda$slambda).l6k = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.xe2_1 = $this$pointerInput;
    return i;
  };
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.k6k($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C124@5963L7,122@5834L221,130@6207L103,134@6347L2,118@5698L739:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1822160838, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:117)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.y3w_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 6), $border._v, $elevation._v.j36_1);
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_2 = tmp2_remember$composable;
        $composer_2.m1r(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_2;
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = Surface$composable$lambda$lambda;
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
        var tmp_6 = semantics(tmp_3, false, tmp$ret$5);
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_3 = tmp3_remember$composable;
        $composer_3.m1r(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_3;
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$6;
          // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$6 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$6;
          tmp0_cache_0.x1t(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$7 = tmp_7;
        tmp$ret$8 = tmp$ret$7;
        var tmp_8 = tmp$ret$8;
        tmp$ret$9 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_1 = tmp$ret$9;
        $composer_3.o1r();
        tmp$ret$10 = tmp0_1;
        var tmp4_Box$composable = pointerInput(tmp_6, Unit_getInstance(), tmp$ret$10);
        var tmp5_Box$composable = null;
        var tmp6_Box$composable = $composer_0;
        var modifier = tmp4_Box$composable;
        var contentAlignment = tmp5_Box$composable;
        var propagateMinConstraints = true;
        var $composer_4 = tmp6_Box$composable;
        $composer_4.m1r(1330882304);
        sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_4;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_5 = tmp1_Layout$composable;
        $composer_5.m1r(1725976829);
        sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_5, 0);
        var localMap = $composer_5.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_5;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_6 = tmp2_ReusableComposeNode$composable;
        var tmp_9 = $composer_6.z1s();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_6.p1t();
        if ($composer_6.a1t()) {
          $composer_6.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_6.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_6);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$11;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_10;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_10 = Unit_getInstance();
        }
        tmp$ret$11 = tmp_10;
        tmp$ret$12 = tmp$ret$11;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_6.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_6;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_7 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_7, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp7_anonymous = BoxScopeInstance_getInstance();
        var tmp8_anonymous = $composer_7;
        var tmp9_anonymous = 6;
        var $composer_8 = tmp8_anonymous;
        sourceInformationMarkerStart($composer_8, 517749578, 'C137@6418L9:Surface.kt#jmzs0o');
        $content($composer_8, 14 & $$dirty >> 18);
        sourceInformationMarkerEnd($composer_8);
        sourceInformationMarkerEnd($composer_7);
        $composer_6.o1r();
        $composer_6.s1t();
        $composer_5.o1r();
        $composer_4.o1r();
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Surface$composable$lambda_0($modifier, $shape, $color, $contentColor, $border, $elevation, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $shape._v, $color._v.y3w_1, $contentColor._v.y3w_1, $border._v, $elevation._v.j36_1, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Surface$composable$lambda_1($modifier, $shape, $color, $absoluteElevation, $$dirty, $border, $elevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C235@11591L7,233@11462L221,243@11902L16,228@11275L827:Surface.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(2031491085, $changed, -1, 'androidx.compose.material.Surface$composable.<anonymous> (Surface.kt:227)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = minimumInteractiveComponentSize_0($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = $color._v.y3w_1;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalElevationOverlay();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var tmp_3 = surface(tmp_0, tmp_1, surfaceColorAtElevation$composable(tmp_2, tmp$ret$0, $absoluteElevation, $composer_0, 14 & $$dirty >> 12), $border._v, $elevation._v.j36_1);
        var tmp_4 = $interactionSource._v;
        var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
        var tmp2_Box$composable = clickable(tmp_3, tmp_4, rememberRipple$composable(false, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, VOID, $onClick);
        var tmp3_Box$composable = null;
        var tmp4_Box$composable = $composer_0;
        var modifier = tmp2_Box$composable;
        var contentAlignment = tmp3_Box$composable;
        var propagateMinConstraints = true;
        var $composer_2 = tmp4_Box$composable;
        $composer_2.m1r(1330882304);
        sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_2;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_3 = tmp1_Layout$composable;
        $composer_3.m1r(1725976829);
        sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
        var localMap = $composer_3.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_3;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_4 = tmp2_ReusableComposeNode$composable;
        var tmp_6 = $composer_4.z1s();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_4.p1t();
        if ($composer_4.a1t()) {
          $composer_4.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_4.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_7;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_7 = Unit_getInstance();
        }
        tmp$ret$1 = tmp_7;
        tmp$ret$2 = tmp$ret$1;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_4.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_4;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_5 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_5, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp5_anonymous = BoxScopeInstance_getInstance();
        var tmp6_anonymous = $composer_5;
        var tmp7_anonymous = 6;
        var $composer_6 = tmp6_anonymous;
        sourceInformationMarkerStart($composer_6, 517755243, 'C249@12083L9:Surface.kt#jmzs0o');
        $content($composer_6, 14 & $$dirty >> 27);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.o1r();
        $composer_4.s1t();
        $composer_3.o1r();
        $composer_2.o1r();
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Surface$composable$lambda_2($onClick, $modifier, $enabled, $shape, $color, $contentColor, $border, $elevation, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable_0($onClick, $modifier._v, $enabled._v, $shape._v, $color._v.y3w_1, $contentColor._v.y3w_1, $border._v, $elevation._v.j36_1, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(66730249);
    sourceInformation($composer_0, 'C(Text$composable)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)109@5711L7,128@6923L7,129@6977L7,156@7775L30,138@7204L607:Text.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.y3w_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c1u(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.e37_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1t(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1t(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.c1u(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.e37_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1t(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1t(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.c1u(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.e37_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.a1u(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.k58_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.z1t(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.a1u(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.a1u(minLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.d1u(onTextLayout_0._v) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.y1t(style_0._v) : false) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_7().c3y_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_19().c37_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_19().c37_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_19().c37_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_20().f4u_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(66730249, $dirty, $dirty1, 'androidx.compose.material.Text$composable (Text.kt:92)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentColor();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      var localContentColor = tmp0_0.y3w_1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalContentAlpha();
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.g1u(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_3);
      var localContentAlpha = tmp0_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var tmp6_get_isSpecified_coq2dt = color_0._v.y3w_1;
      if (!equals(_Color___get_value__impl__1pls5m(tmp6_get_isSpecified_coq2dt), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
        tmp_1 = color_0._v.y3w_1;
      } else {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var tmp7_get_isSpecified_9p0228 = style_0._v.e3y();
        if (!equals(_Color___get_value__impl__1pls5m(tmp7_get_isSpecified_9p0228), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
          tmp_1 = style_0._v.e3y();
        } else {
          tmp_1 = Color__copy$default_impl_ectz3s(localContentColor, localContentAlpha);
        }
      }
      var overrideColorOrUnspecified = tmp_1;
      var tmp_2 = modifier_0._v;
      var tmp_3 = style_0._v;
      var tmp_4 = fontSize_0._v.e37_1;
      var tmp_5 = fontWeight_0._v;
      var tmp_6 = fontStyle_0._v;
      var tmp_7 = tmp_6 == null ? null : tmp_6.n4q_1;
      var tmp_8 = fontFamily_0._v;
      var tmp_9 = letterSpacing_0._v.e37_1;
      var tmp_10 = textDecoration_0._v;
      var tmp_11 = textAlign_0._v;
      var tmp_12 = tmp_3.q4u(VOID, tmp_4, tmp_5, tmp_7, VOID, tmp_8, VOID, tmp_9, VOID, VOID, VOID, VOID, tmp_10, VOID, VOID, tmp_11 == null ? null : tmp_11.c4p_1, VOID, lineHeight_0._v.e37_1);
      var tmp_13 = onTextLayout_0._v;
      var tmp_14 = overflow_0._v.k58_1;
      var tmp_15 = softWrap_0._v;
      var tmp_16 = maxLines_0._v;
      var tmp_17 = minLines_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.m1r(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_4.y1t(new Color(overrideColorOrUnspecified));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_4.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_18;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
        var value = Text$composable$lambda(overrideColorOrUnspecified);
        $composer_4.x1t(value);
        tmp_18 = value;
      } else {
        tmp_18 = tmp0_let;
      }
      var tmp_19 = tmp_18;
      var tmp0_2 = (tmp_19 == null ? true : isObject(tmp_19)) ? tmp_19 : THROW_CCE();
      $composer_4.o1r();
      BasicText$composable(text, tmp_2, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp0_2), $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 0);
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
      tmp0_safe_receiver.z28(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1131319997);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)394@17586L7,395@17611L80:Text.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1131319997, $dirty, -1, 'androidx.compose.material.ProvideTextStyle$composable (Text.kt:393)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0.o4u(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().u28(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.z28(ProvideTextStyle$composable$lambda(value, content, $changed));
    }
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.ye2_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).rdb = function () {
    return this.ye2_1().y3w_1;
  };
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$composable$lambda($overrideColorOrUnspecified) {
    return function () {
      return new Color($overrideColorOrUnspecified);
    };
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v.y3w_1;
      var tmp_1 = $fontSize._v.e37_1;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.n4q_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v.e37_1;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.c4p_1, $lineHeight._v.e37_1, $overflow._v.k58_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle$composable($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  var FirstBaselineOffset;
  var TextFieldBottomPadding;
  function get_TextFieldTopPadding() {
    _init_properties_TextField_kt__b1se5h();
    return TextFieldTopPadding;
  }
  var TextFieldTopPadding;
  function TextFieldLayout$composable(modifier, textField, label, placeholder, leading, trailing, singleLine, animationProgress, paddingValues, $composer, $changed) {
    _init_properties_TextField_kt__b1se5h();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1481406723);
    sourceInformation($composer_0, 'C(TextFieldLayout$composable)P(3,7,1,5,2,8,6)483@22341L139,486@22528L7,487@22540L1853:TextField.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(textField) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(label) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(placeholder) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(leading) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(trailing) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1t(singleLine) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.b1u(animationProgress) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1t(paddingValues) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-1481406723, $dirty, -1, 'androidx.compose.material.TextFieldLayout$composable (TextField.kt:472)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!(!!($composer_1.y1t(singleLine) | $composer_1.y1t(animationProgress)) | $composer_1.y1t(paddingValues));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>' call
        var value = new TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues);
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var measurePolicy = tmp0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalLayoutDirection();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      var layoutDirection = tmp0_0;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp4_Layout$composable = $composer_0;
      var tmp5_Layout$composable = 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_3 = tmp4_Layout$composable;
      $composer_3.m1r(1725976829);
      sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
      var localMap = $composer_3.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp5_Layout$composable << 9;
      var $composer_4 = $composer_3;
      var tmp_1 = $composer_4.z1s();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_4.p1t();
      if ($composer_4.a1t()) {
        $composer_4.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_4.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_2 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_4.m1r(2058660585);
      // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1704302482, 'C529@24155L183:TextField.kt#jmzs0o');
      $composer_5.m1r(1704302482);
      sourceInformation($composer_5, '491@22648L219');
      if (!(leading == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_1 = layoutId(Companion_getInstance(), get_LeadingId()).n5f(get_IconDefaultSizeModifier());
        var contentAlignment = Companion_getInstance_2().s5e_1;
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        $composer_6.m1r(1330882304);
        sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        if (!(0 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 6);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_2 = modifier_1;
        var $composer_7 = $composer_6;
        $composer_7.m1r(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap_0 = $composer_7.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
        var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & 0 << 9;
        var $composer_8 = $composer_7;
        var tmp_3 = $composer_8.z1s();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.p1t();
        if ($composer_8.a1t()) {
          $composer_8.q1t(tmp0_ReusableComposeNode$composable_0);
        } else {
          $composer_8.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, measurePolicy_0, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_0, localMap_0, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_0 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_4;
        if (tmp0_with_0.a1t() ? true : !equals(tmp0_with_0.w1t(), compositeKeyHash_0)) {
          tmp0_with_0.x1t(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_0).v1t(compositeKeyHash_0, tmp0_set_0);
          tmp_4 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
        $composer_8.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, 887800090, 'C495@22840L9:TextField.kt#jmzs0o');
        leading($composer_10, 14 & $dirty >> 12);
        sourceInformationMarkerEnd($composer_10);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.o1r();
        $composer_8.s1t();
        $composer_7.o1r();
        $composer_6.o1r();
      }
      $composer_5.o1r();
      $composer_5.m1r(1704302767);
      sourceInformation($composer_5, '499@22934L221');
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_3 = layoutId(Companion_getInstance(), get_TrailingId()).n5f(get_IconDefaultSizeModifier());
        var contentAlignment_0 = Companion_getInstance_2().s5e_1;
        var propagateMinConstraints_0 = false;
        var $composer_11 = $composer_5;
        $composer_11.m1r(1330882304);
        sourceInformation($composer_11, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_3 = Companion_getInstance();
        if (!(0 === 0))
          contentAlignment_0 = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_11, 6);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_4 = modifier_3;
        var $composer_12 = $composer_11;
        $composer_12.m1r(1725976829);
        sourceInformation($composer_12, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_4 = Companion_getInstance();
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_12, 0);
        var localMap_1 = $composer_12.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_1 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_1 = materializerOf(modifier_4);
        var tmp3_ReusableComposeNode$composable_1 = 6 | 7168 & 0 << 9;
        var $composer_13 = $composer_12;
        var tmp_5 = $composer_13.z1s();
        if (!isInterface(tmp_5, Applier)) {
          invalidApplier();
        }
        $composer_13.p1t();
        if ($composer_13.a1t()) {
          $composer_13.q1t(tmp0_ReusableComposeNode$composable_1);
        } else {
          $composer_13.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_1 = _Updater___init__impl__rbfxm8($composer_13);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, measurePolicy_1, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_1, localMap_1, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_1 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_1 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_6;
        if (tmp0_with_1.a1t() ? true : !equals(tmp0_with_1.w1t(), compositeKeyHash_1)) {
          tmp0_with_1.x1t(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_1).v1t(compositeKeyHash_1, tmp0_set_1);
          tmp_6 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & tmp3_ReusableComposeNode$composable_1 >> 3);
        $composer_13.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, 887800377, 'C503@23127L10:TextField.kt#jmzs0o');
        trailing($composer_15, 14 & $dirty >> 15);
        sourceInformationMarkerEnd($composer_15);
        sourceInformationMarkerEnd($composer_14);
        $composer_13.o1r();
        $composer_13.s1t();
        $composer_12.o1r();
        $composer_11.o1r();
      }
      $composer_5.o1r();
      var startTextFieldPadding = calculateStartPadding(paddingValues, layoutDirection);
      var endTextFieldPadding = calculateEndPadding(paddingValues, layoutDirection);
      var tmp_7 = Companion_getInstance();
      var tmp_8;
      if (!(leading == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var tmp14_minus = get_HorizontalIconPadding();
        var tmp15_coerceAtLeast = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(startTextFieldPadding) - _Dp___get_value__impl__geb1vb(tmp14_minus));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp16_coerceAtLeast = _Dp___init__impl__ms3zkb(0);
        tmp_8 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp15_coerceAtLeast), _Dp___get_value__impl__geb1vb(tmp16_coerceAtLeast)));
      } else {
        tmp_8 = startTextFieldPadding;
      }
      var tmp_9 = tmp_8;
      var tmp_10;
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var tmp17_minus = get_HorizontalIconPadding();
        var tmp18_coerceAtLeast = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(endTextFieldPadding) - _Dp___get_value__impl__geb1vb(tmp17_minus));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp19_coerceAtLeast = _Dp___init__impl__ms3zkb(0);
        tmp_10 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp18_coerceAtLeast), _Dp___get_value__impl__geb1vb(tmp19_coerceAtLeast)));
      } else {
        tmp_10 = endTextFieldPadding;
      }
      var padding_0 = padding(tmp_7, tmp_9, VOID, tmp_10);
      $composer_5.m1r(1704303778);
      sourceInformation($composer_5, '524@23948L59');
      if (!(placeholder == null)) {
        placeholder(layoutId(Companion_getInstance(), get_PlaceholderId()).n5f(padding_0), $composer_5, 112 & $dirty >> 6);
      }
      $composer_5.o1r();
      $composer_5.m1r(1704303907);
      sourceInformation($composer_5, '527@24071L57');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_5 = layoutId(Companion_getInstance(), get_LabelId()).n5f(padding_0);
        var contentAlignment_1 = null;
        var propagateMinConstraints_1 = false;
        var $composer_16 = $composer_5;
        $composer_16.m1r(1330882304);
        sourceInformation($composer_16, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_5 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment_1 = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_16, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        $composer_17.m1r(1725976829);
        sourceInformation($composer_17, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_6 = Companion_getInstance();
        var compositeKeyHash_2 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_17, 0);
        var localMap_2 = $composer_17.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_2 = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable_2 = materializerOf(modifier_6);
        var tmp3_ReusableComposeNode$composable_2 = 6 | 7168 & 0 << 9;
        var $composer_18 = $composer_17;
        var tmp_11 = $composer_18.z1s();
        if (!isInterface(tmp_11, Applier)) {
          invalidApplier();
        }
        $composer_18.p1t();
        if ($composer_18.a1t()) {
          $composer_18.q1t(tmp0_ReusableComposeNode$composable_2);
        } else {
          $composer_18.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss(tmp4_anonymous_2, measurePolicy_2, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous_2, localMap_2, Companion_getInstance_1().w6s_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_2 = Companion_getInstance_1().a6t_1;
        // Inline function 'kotlin.with' call
        var tmp0_with_2 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_12;
        if (tmp0_with_2.a1t() ? true : !equals(tmp0_with_2.w1t(), compositeKeyHash_2)) {
          tmp0_with_2.x1t(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2).v1t(compositeKeyHash_2, tmp0_set_2);
          tmp_12 = Unit_getInstance();
        }
        tmp1_ReusableComposeNode$composable_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & tmp3_ReusableComposeNode$composable_2 >> 3);
        $composer_18.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_19 = $composer_18;
        sourceInformationMarkerStart($composer_19, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        BoxScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, 887801369, 'C527@24119L7:TextField.kt#jmzs0o');
        label($composer_20, 14 & $dirty >> 6);
        sourceInformationMarkerEnd($composer_20);
        sourceInformationMarkerEnd($composer_19);
        $composer_18.o1r();
        $composer_18.s1t();
        $composer_17.o1r();
        $composer_16.o1r();
      }
      $composer_5.o1r();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_7 = layoutId(Companion_getInstance(), get_TextFieldId()).n5f(padding_0);
      var contentAlignment_2 = null;
      var propagateMinConstraints_2 = true;
      var $composer_21 = $composer_5;
      $composer_21.m1r(1330882304);
      sourceInformation($composer_21, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_7 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment_2 = Companion_getInstance_2().o5e_1;
      if (!(0 === 0))
        propagateMinConstraints_2 = false;
      var measurePolicy_3 = rememberBoxMeasurePolicy$composable(contentAlignment_2, propagateMinConstraints_2, $composer_21, 48);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      $composer_22.m1r(1725976829);
      sourceInformation($composer_22, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_8 = Companion_getInstance();
      var compositeKeyHash_3 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_22, 0);
      var localMap_3 = $composer_22.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable_3 = Companion_getInstance_1().s6s_1;
      var tmp1_ReusableComposeNode$composable_3 = materializerOf(modifier_8);
      var tmp3_ReusableComposeNode$composable_3 = 6 | 7168 & 0 << 9;
      var $composer_23 = $composer_22;
      var tmp_13 = $composer_23.z1s();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_23.p1t();
      if ($composer_23.a1t()) {
        $composer_23.q1t(tmp0_ReusableComposeNode$composable_3);
      } else {
        $composer_23.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss(tmp4_anonymous_3, measurePolicy_3, Companion_getInstance_1().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous_3, localMap_3, Companion_getInstance_1().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set_3 = Companion_getInstance_1().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with_3 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_3);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_14;
      if (tmp0_with_3.a1t() ? true : !equals(tmp0_with_3.w1t(), compositeKeyHash_3)) {
        tmp0_with_3.x1t(compositeKeyHash_3);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous_3).v1t(compositeKeyHash_3, tmp0_set_3);
        tmp_14 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable_3(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_23)), $composer_23, 112 & tmp3_ReusableComposeNode$composable_3 >> 3);
      $composer_23.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_24 = $composer_23;
      sourceInformationMarkerStart($composer_24, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material.TextFieldLayout$composable.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 887801563, 'C533@24313L11:TextField.kt#jmzs0o');
      textField($composer_25, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_25);
      sourceInformationMarkerEnd($composer_24);
      $composer_23.o1r();
      $composer_23.s1t();
      $composer_22.o1r();
      $composer_21.o1r();
      sourceInformationMarkerEnd($composer_5);
      $composer_4.o1r();
      $composer_4.s1t();
      $composer_3.o1r();
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
      tmp0_safe_receiver.z28(TextFieldLayout$composable$lambda(modifier, textField, label, placeholder, leading, trailing, singleLine, animationProgress, paddingValues, $changed));
    }
  }
  function intrinsicWidth_0($this, measurables, height, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldWidth = intrinsicMeasurer(tmp$ret$1, height);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, height);
    }
    var tmp1_elvis_lhs = tmp;
    var labelWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, height);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingWidth = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, height);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PlaceholderId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, height);
    }
    var tmp7_elvis_lhs = tmp_2;
    var placeholderWidth = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    return calculateWidth_0(leadingWidth, trailingWidth, textFieldWidth, labelWidth, placeholderWidth, get_ZeroConstraints());
  }
  function intrinsicHeight_0(_this__u8e3s4, $this, measurables, width, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldHeight = intrinsicMeasurer(tmp$ret$1, width);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, width);
    }
    var tmp1_elvis_lhs = tmp;
    var labelHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, width);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, width);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingHeight = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PlaceholderId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, width);
    }
    var tmp7_elvis_lhs = tmp_2;
    var placeholderHeight = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    return calculateHeight_0(textFieldHeight, labelHeight > 0, labelHeight, leadingHeight, trailingHeight, placeholderHeight, get_ZeroConstraints(), _this__u8e3s4.q35(), $this.be3_1);
  }
  function TextFieldMeasurePolicy$measure$lambda($labelPlaceable, $topPaddingValue, $lastBaseline, $width, $height, $textFieldPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, this$0, $effectiveLabelBaseline, $topPadding, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (!($labelPlaceable == null)) {
        var labelEndPosition = coerceAtLeast_0($topPaddingValue - $lastBaseline | 0, 0);
        placeWithLabel($this$layout, $width, $height, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, this$0.ze2_1, labelEndPosition, $effectiveLabelBaseline + $topPadding | 0, this$0.ae3_1, $this_measure.q35());
        tmp = Unit_getInstance();
      } else {
        placeWithoutLabel($this$layout, $width, $height, $textFieldPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, this$0.ze2_1, $this_measure.q35(), this$0.be3_1);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextFieldMeasurePolicy$maxIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.t5n(w);
  }
  function TextFieldMeasurePolicy$minIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.s5n(w);
  }
  function TextFieldMeasurePolicy$maxIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.r5n(h);
  }
  function TextFieldMeasurePolicy$minIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.q5n(h);
  }
  function TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues) {
    this.ze2_1 = singleLine;
    this.ae3_1 = animationProgress;
    this.be3_1 = paddingValues;
  }
  protoOf(TextFieldMeasurePolicy).e6w = function (_this__u8e3s4, measurables, constraints) {
    var topPaddingValue = _this__u8e3s4.t35(this.be3_1.e99());
    var bottomPaddingValue = _this__u8e3s4.t35(this.be3_1.g99());
    var topPadding = _this__u8e3s4.t35(get_TextFieldTopPadding());
    var occupiedSpaceHorizontally = 0;
    var looseConstraints = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = measurables.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element), get_LeadingId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var leadingPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5h(looseConstraints);
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(leadingPlaceable) | 0;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_0), get_TrailingId())) {
          tmp$ret$4 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$4 = null;
    }
    var tmp1_safe_receiver = tmp$ret$4;
    var trailingPlaceable = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w5h(offset(looseConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(trailingPlaceable) | 0;
    var tmp2_vertical = -bottomPaddingValue | 0;
    var tmp3_horizontal = -occupiedSpaceHorizontally | 0;
    var labelConstraints = offset(looseConstraints, tmp3_horizontal, tmp2_vertical);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_1), get_LabelId())) {
          tmp$ret$7 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$7 = null;
    }
    var tmp4_safe_receiver = tmp$ret$7;
    var labelPlaceable = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.w5h(labelConstraints);
    var tmp6_safe_receiver = labelPlaceable == null ? null : labelPlaceable.s6r(get_LastBaseline());
    var tmp;
    if (tmp6_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
      var tmp_0;
      Companion_getInstance_3();
      if (!(tmp6_safe_receiver === -2147483648)) {
        tmp_0 = tmp6_safe_receiver;
      } else {
        tmp_0 = labelPlaceable.y5h_1;
      }
      tmp = tmp_0;
    }
    var tmp7_elvis_lhs = tmp;
    var lastBaseline = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    // Inline function 'kotlin.math.max' call
    var effectiveLabelBaseline = Math.max(lastBaseline, topPaddingValue);
    var tmp_1;
    if (!(labelPlaceable == null)) {
      tmp_1 = ((-bottomPaddingValue | 0) - topPadding | 0) - effectiveLabelBaseline | 0;
    } else {
      tmp_1 = (-topPaddingValue | 0) - bottomPaddingValue | 0;
    }
    var verticalConstraintOffset = tmp_1;
    var tmp8_$receiver = Constraints__copy$default_impl_f452rp(constraints, VOID, VOID, 0);
    var tmp9_horizontal = -occupiedSpaceHorizontally | 0;
    var textFieldConstraints = offset(tmp8_$receiver, tmp9_horizontal, verticalConstraintOffset);
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_2 = measurables.d();
      while (tmp0_iterator_2.e()) {
        var element_2 = tmp0_iterator_2.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_2), get_TextFieldId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldPlaceable = tmp$ret$13.w5h(textFieldConstraints);
    var placeholderConstraints = Constraints__copy$default_impl_f452rp(textFieldConstraints, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$15;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.d();
      while (tmp0_iterator_3.e()) {
        var element_3 = tmp0_iterator_3.f();
        // Inline function 'androidx.compose.material.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_3), get_PlaceholderId())) {
          tmp$ret$15 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$15 = null;
    }
    var tmp10_safe_receiver = tmp$ret$15;
    var placeholderPlaceable = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.w5h(placeholderConstraints);
    var width = calculateWidth_0(widthOrZero(leadingPlaceable), widthOrZero(trailingPlaceable), textFieldPlaceable.x5h_1, widthOrZero(labelPlaceable), widthOrZero(placeholderPlaceable), constraints);
    var height = calculateHeight_0(textFieldPlaceable.y5h_1, !(labelPlaceable == null), effectiveLabelBaseline, heightOrZero(leadingPlaceable), heightOrZero(trailingPlaceable), heightOrZero(placeholderPlaceable), constraints, _this__u8e3s4.q35(), this.be3_1);
    return _this__u8e3s4.d5i(width, height, VOID, TextFieldMeasurePolicy$measure$lambda(labelPlaceable, topPaddingValue, lastBaseline, width, height, textFieldPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, this, effectiveLabelBaseline, topPadding, _this__u8e3s4));
  };
  protoOf(TextFieldMeasurePolicy).i6w = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight_0(_this__u8e3s4, this, measurables, width, TextFieldMeasurePolicy$maxIntrinsicHeight$lambda);
  };
  protoOf(TextFieldMeasurePolicy).g6w = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight_0(_this__u8e3s4, this, measurables, width, TextFieldMeasurePolicy$minIntrinsicHeight$lambda);
  };
  protoOf(TextFieldMeasurePolicy).h6w = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth_0(this, measurables, height, TextFieldMeasurePolicy$maxIntrinsicWidth$lambda);
  };
  protoOf(TextFieldMeasurePolicy).f6w = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth_0(this, measurables, height, TextFieldMeasurePolicy$minIntrinsicWidth$lambda);
  };
  function calculateWidth_0(leadingWidth, trailingWidth, textFieldWidth, labelWidth, placeholderWidth, constraints) {
    _init_properties_TextField_kt__b1se5h();
    // Inline function 'kotlin.comparisons.maxOf' call
    var middleSection = Math.max(textFieldWidth, labelWidth, placeholderWidth);
    var wrappedWidth = (leadingWidth + middleSection | 0) + trailingWidth | 0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    return Math.max(wrappedWidth, tmp0_max);
  }
  function calculateHeight_0(textFieldHeight, hasLabel, labelBaseline, leadingHeight, trailingHeight, placeholderHeight, constraints, density, paddingValues) {
    _init_properties_TextField_kt__b1se5h();
    var paddingToLabel = _Dp___get_value__impl__geb1vb(get_TextFieldTopPadding()) * density;
    var topPaddingValue = _Dp___get_value__impl__geb1vb(paddingValues.e99()) * density;
    var bottomPaddingValue = _Dp___get_value__impl__geb1vb(paddingValues.g99()) * density;
    // Inline function 'kotlin.math.max' call
    var inputFieldHeight = Math.max(textFieldHeight, placeholderHeight);
    var tmp;
    if (hasLabel) {
      tmp = labelBaseline + paddingToLabel + inputFieldHeight + bottomPaddingValue;
    } else {
      tmp = topPaddingValue + inputFieldHeight + bottomPaddingValue;
    }
    var middleSectionHeight = tmp;
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_maxOf = roundToInt(middleSectionHeight);
    // Inline function 'kotlin.math.max' call
    var tmp1_maxOf = Math.max(leadingHeight, trailingHeight);
    var tmp2_maxOf = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    return Math.max(tmp0_maxOf, tmp1_maxOf, tmp2_maxOf);
  }
  function placeWithLabel(_this__u8e3s4, width, height, textfieldPlaceable, labelPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, singleLine, labelEndPosition, textPosition, animationProgress, density) {
    _init_properties_TextField_kt__b1se5h();
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(leadingPlaceable, 0, Companion_getInstance_2().y5e_1.i5f(leadingPlaceable.y5h_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(trailingPlaceable, width - trailingPlaceable.x5h_1 | 0, Companion_getInstance_2().y5e_1.i5f(trailingPlaceable.y5h_1, height));
    }
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (singleLine) {
        tmp = Companion_getInstance_2().y5e_1.i5f(labelPlaceable.y5h_1, height);
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = _Dp___get_value__impl__geb1vb(get_TextFieldPadding()) * density;
        tmp = roundToInt(tmp0_roundToInt);
      }
      var startPosition = tmp;
      var distance = startPosition - labelEndPosition | 0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = distance * animationProgress;
      var positionY = startPosition - roundToInt(tmp1_roundToInt) | 0;
      _this__u8e3s4.p5n(labelPlaceable, widthOrZero(leadingPlaceable), positionY);
    }
    _this__u8e3s4.p5n(textfieldPlaceable, widthOrZero(leadingPlaceable), textPosition);
    if (placeholderPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(placeholderPlaceable, widthOrZero(leadingPlaceable), textPosition);
    }
  }
  function placeWithoutLabel(_this__u8e3s4, width, height, textPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, singleLine, density, paddingValues) {
    _init_properties_TextField_kt__b1se5h();
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _Dp___get_value__impl__geb1vb(paddingValues.e99()) * density;
    var topPadding = roundToInt(tmp0_roundToInt);
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(leadingPlaceable, 0, Companion_getInstance_2().y5e_1.i5f(leadingPlaceable.y5h_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.p5n(trailingPlaceable, width - trailingPlaceable.x5h_1 | 0, Companion_getInstance_2().y5e_1.i5f(trailingPlaceable.y5h_1, height));
    }
    var tmp;
    if (singleLine) {
      tmp = Companion_getInstance_2().y5e_1.i5f(textPlaceable.y5h_1, height);
    } else {
      tmp = topPadding;
    }
    var textVerticalPosition = tmp;
    _this__u8e3s4.p5n(textPlaceable, widthOrZero(leadingPlaceable), textVerticalPosition);
    if (placeholderPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (singleLine) {
        tmp_0 = Companion_getInstance_2().y5e_1.i5f(placeholderPlaceable.y5h_1, height);
      } else {
        tmp_0 = topPadding;
      }
      var placeholderVerticalPosition = tmp_0;
      _this__u8e3s4.p5n(placeholderPlaceable, widthOrZero(leadingPlaceable), placeholderVerticalPosition);
    }
  }
  function TextFieldLayout$composable$lambda($modifier, $textField, $label, $placeholder, $leading, $trailing, $singleLine, $animationProgress, $paddingValues, $$changed) {
    return function ($composer, $force) {
      TextFieldLayout$composable($modifier, $textField, $label, $placeholder, $leading, $trailing, $singleLine, $animationProgress, $paddingValues, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_TextField_kt_dspx0j;
  function _init_properties_TextField_kt__b1se5h() {
    if (!properties_initialized_TextField_kt_dspx0j) {
      properties_initialized_TextField_kt_dspx0j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      FirstBaselineOffset = _Dp___init__impl__ms3zkb(20);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextFieldBottomPadding = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextFieldTopPadding = _Dp___init__impl__ms3zkb(4);
    }
  }
  function TextFieldDefaults$BorderBox$composable$lambda($tmp0_rcvr, $enabled, $isError, $interactionSource, $colors, $shape, $focusedBorderThickness, $unfocusedBorderThickness, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.ve1($enabled, $isError, $interactionSource, $colors, $shape._v, $focusedBorderThickness._v.j36_1, $unfocusedBorderThickness._v.j36_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TextFieldDefaults$OutlinedTextFieldDecorationBox$composable$lambda($enabled, $isError, $interactionSource, $colors, $$dirty, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C644@30316L54:TextFieldDefaults.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1261916269, $changed, -1, 'androidx.compose.material.TextFieldDefaults.OutlinedTextFieldDecorationBox$composable.<anonymous> (TextFieldDefaults.kt:643)');
        }
        var tmp_0 = TextFieldDefaults_getInstance();
        var tmp_1 = $isError._v;
        var tmp_2 = $colors._v;
        var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
        tmp_0.ve1($enabled, tmp_1, $interactionSource, tmp_2, null, tmp_3, _Dp___init__impl__ms3zkb(0.0), $composer_0, 12582912 | 14 & $$dirty >> 6 | 112 & $$dirty >> 15 | 896 & $$dirty >> 9 | 7168 & $$dirty1 << 6, 112);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function TextFieldDefaults$OutlinedTextFieldDecorationBox$composable$lambda_0($tmp0_rcvr, $value, $innerTextField, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError, $label, $placeholder, $leadingIcon, $trailingIcon, $colors, $contentPadding, $border, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.we1($value, $innerTextField, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError._v, $label._v, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $colors._v, $contentPadding._v, $border._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function TextFieldDefaults() {
    TextFieldDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ge1_1 = _Dp___init__impl__ms3zkb(56);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.he1_1 = _Dp___init__impl__ms3zkb(280);
    this.ie1_1 = 0.54;
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.je1_1 = _Dp___init__impl__ms3zkb(1);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.ke1_1 = _Dp___init__impl__ms3zkb(2);
    this.le1_1 = 0.12;
    this.me1_1 = 0.42;
    this.ne1_1 = 0;
  }
  protoOf(TextFieldDefaults).ce3 = function (start, top, end, bottom) {
    return PaddingValues(start, top, end, bottom);
  };
  protoOf(TextFieldDefaults).de3 = function (start, top, end, bottom, $super) {
    start = start === VOID ? get_TextFieldPadding() : start;
    top = top === VOID ? get_TextFieldPadding() : top;
    end = end === VOID ? get_TextFieldPadding() : end;
    bottom = bottom === VOID ? get_TextFieldPadding() : bottom;
    return $super === VOID ? this.ce3(start, top, end, bottom) : $super.ce3.call(this, new Dp(start), new Dp(top), new Dp(end), new Dp(bottom));
  };
  protoOf(TextFieldDefaults).ee3 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1009842312, 'C($get-OutlinedTextFieldShape$$composable)219@7832L6:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1009842312, $changed, -1, 'androidx.compose.material.TextFieldDefaults.$get-OutlinedTextFieldShape$$composable (TextFieldDefaults.kt:219)');
    }
    var tmp0 = MaterialTheme_getInstance().ydu($composer_0, 6).tdu_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(TextFieldDefaults).ve1 = function (enabled, isError, interactionSource, colors, shape, focusedBorderThickness, unfocusedBorderThickness, $composer, $changed, $default) {
    var shape_0 = {_v: shape};
    var focusedBorderThickness_0 = {_v: new Dp(focusedBorderThickness)};
    var unfocusedBorderThickness_0 = {_v: new Dp(unfocusedBorderThickness)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1024599168);
    sourceInformation($composer_0, 'C(BorderBox$composable)P(1,4,3!1,5,2:c#ui.unit.Dp,6:c#ui.unit.Dp)309@11588L22,313@11772L203,321@11984L47:TextFieldDefaults.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1t(isError) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(interactionSource) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(colors) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.b1u(_Dp___get_value__impl__geb1vb(focusedBorderThickness_0._v.j36_1)) : false) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.b1u(_Dp___get_value__impl__geb1vb(unfocusedBorderThickness_0._v.j36_1)) : false) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 16) === 0)) {
          shape_0._v = this.ee3($composer_0, 0);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          focusedBorderThickness_0._v = new Dp(this.ke1_1);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          unfocusedBorderThickness_0._v = new Dp(this.je1_1);
          $dirty = $dirty & -3670017;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-1024599168, $dirty, -1, 'androidx.compose.material.TextFieldDefaults.BorderBox$composable (TextFieldDefaults.kt:304)');
      }
      var borderStroke = animateBorderStrokeAsState$composable(enabled, isError, interactionSource, colors, focusedBorderThickness_0._v.j36_1, unfocusedBorderThickness_0._v.j36_1, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3);
      Box$composable(border(Companion_getInstance(), borderStroke.s(), shape_0._v), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(TextFieldDefaults$BorderBox$composable$lambda(this, enabled, isError, interactionSource, colors, shape_0, focusedBorderThickness_0, unfocusedBorderThickness_0, $changed, $default));
    }
  };
  protoOf(TextFieldDefaults).oe1 = function (textColor, disabledTextColor, backgroundColor, cursorColor, errorCursorColor, focusedBorderColor, unfocusedBorderColor, disabledBorderColor, errorBorderColor, leadingIconColor, disabledLeadingIconColor, errorLeadingIconColor, trailingIconColor, disabledTrailingIconColor, errorTrailingIconColor, focusedLabelColor, unfocusedLabelColor, disabledLabelColor, errorLabelColor, placeholderColor, disabledPlaceholderColor, $composer, $changed, $changed1, $changed2, $default) {
    var textColor_0 = textColor;
    var disabledTextColor_0 = disabledTextColor;
    var backgroundColor_0 = backgroundColor;
    var cursorColor_0 = cursorColor;
    var errorCursorColor_0 = errorCursorColor;
    var focusedBorderColor_0 = focusedBorderColor;
    var unfocusedBorderColor_0 = unfocusedBorderColor;
    var disabledBorderColor_0 = disabledBorderColor;
    var errorBorderColor_0 = errorBorderColor;
    var leadingIconColor_0 = leadingIconColor;
    var disabledLeadingIconColor_0 = disabledLeadingIconColor;
    var errorLeadingIconColor_0 = errorLeadingIconColor;
    var trailingIconColor_0 = trailingIconColor;
    var disabledTrailingIconColor_0 = disabledTrailingIconColor;
    var errorTrailingIconColor_0 = errorTrailingIconColor;
    var focusedLabelColor_0 = focusedLabelColor;
    var unfocusedLabelColor_0 = unfocusedLabelColor;
    var disabledLabelColor_0 = disabledLabelColor;
    var errorLabelColor_0 = errorLabelColor;
    var placeholderColor_0 = placeholderColor;
    var disabledPlaceholderColor_0 = disabledPlaceholderColor;
    var $composer_0 = $composer;
    $composer_0.m1r(927962662);
    sourceInformation($composer_0, 'C(outlinedTextFieldColors$composable)P(17:c#ui.graphics.Color,6:c#ui.graphics.Color,0:c#ui.graphics.Color,1:c#ui.graphics.Color,9:c#ui.graphics.Color,13:c#ui.graphics.Color,19:c#ui.graphics.Color,2:c#ui.graphics.Color,8:c#ui.graphics.Color,15:c#ui.graphics.Color,4:c#ui.graphics.Color,11:c#ui.graphics.Color,18:c#ui.graphics.Color,7:c#ui.graphics.Color,12:c#ui.graphics.Color,14:c#ui.graphics.Color,20:c#ui.graphics.Color,3:c#ui.graphics.Color,10:c#ui.graphics.Color,16:c#ui.graphics.Color,5:c#ui.graphics.Color)430@17224L7,430@17255L7,431@17328L8,433@17434L6,434@17498L6,436@17574L6,436@17615L4,438@17686L6,438@17729L8,439@17824L8,440@17883L6,442@17957L6,443@18086L8,446@18215L6,447@18346L8,448@18411L6,450@18486L6,450@18527L4,451@18585L6,451@18620L6,452@18703L8,453@18761L6,454@18823L6,454@18858L6,455@18944L8:TextFieldDefaults.kt#jmzs0o');
    if (!(($default & 1) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var tmp = tmp0.y3w_1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalContentAlpha();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      textColor_0 = Color__copy$default_impl_ectz3s(tmp, tmp0_0);
    }
    if (!(($default & 2) === 0))
      disabledTextColor_0 = Color__copy$default_impl_ectz3s(textColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 4) === 0))
      backgroundColor_0 = Companion_getInstance_7().b3y_1;
    if (!(($default & 8) === 0))
      cursorColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).wdw();
    if (!(($default & 16) === 0))
      errorCursorColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).qdz();
    if (!(($default & 32) === 0))
      focusedBorderColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).wdw(), ContentAlpha_getInstance().gdw($composer_0, 6));
    if (!(($default & 64) === 0))
      unfocusedBorderColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 128) === 0))
      disabledBorderColor_0 = Color__copy$default_impl_ectz3s(unfocusedBorderColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 256) === 0))
      errorBorderColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).qdz();
    if (!(($default & 512) === 0))
      leadingIconColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.54);
    if (!(($default & 1024) === 0))
      disabledLeadingIconColor_0 = Color__copy$default_impl_ectz3s(leadingIconColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 2048) === 0))
      errorLeadingIconColor_0 = leadingIconColor_0;
    if (!(($default & 4096) === 0))
      trailingIconColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.54);
    if (!(($default & 8192) === 0))
      disabledTrailingIconColor_0 = Color__copy$default_impl_ectz3s(trailingIconColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 16384) === 0))
      errorTrailingIconColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).qdz();
    if (!(($default & 32768) === 0))
      focusedLabelColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).wdw(), ContentAlpha_getInstance().gdw($composer_0, 6));
    if (!(($default & 65536) === 0))
      unfocusedLabelColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), ContentAlpha_getInstance().hdw($composer_0, 6));
    if (!(($default & 131072) === 0))
      disabledLabelColor_0 = Color__copy$default_impl_ectz3s(unfocusedLabelColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (!(($default & 262144) === 0))
      errorLabelColor_0 = MaterialTheme_getInstance().zdu($composer_0, 6).qdz();
    if (!(($default & 524288) === 0))
      placeholderColor_0 = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), ContentAlpha_getInstance().hdw($composer_0, 6));
    if (!(($default & 1048576) === 0))
      disabledPlaceholderColor_0 = Color__copy$default_impl_ectz3s(placeholderColor_0, ContentAlpha_getInstance().ydw($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventStart(927962662, $changed, $changed1, 'androidx.compose.material.TextFieldDefaults.outlinedTextFieldColors$composable (TextFieldDefaults.kt:429)');
    }
    var tmp0_1 = new DefaultTextFieldColors(textColor_0, disabledTextColor_0, cursorColor_0, errorCursorColor_0, focusedBorderColor_0, unfocusedBorderColor_0, errorBorderColor_0, disabledBorderColor_0, leadingIconColor_0, disabledLeadingIconColor_0, errorLeadingIconColor_0, trailingIconColor_0, disabledTrailingIconColor_0, errorTrailingIconColor_0, backgroundColor_0, focusedLabelColor_0, unfocusedLabelColor_0, disabledLabelColor_0, errorLabelColor_0, placeholderColor_0, disabledPlaceholderColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_1;
  };
  protoOf(TextFieldDefaults).we1 = function (value, innerTextField, enabled, singleLine, visualTransformation, interactionSource, isError, label, placeholder, leadingIcon, trailingIcon, colors, contentPadding, border, $composer, $changed, $changed1, $default) {
    var isError_0 = {_v: isError};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var colors_0 = {_v: colors};
    var contentPadding_0 = {_v: contentPadding};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1281236771);
    sourceInformation($composer_0, 'C(OutlinedTextFieldDecorationBox$composable)P(12,4,3,10,13,5,6,7,9,8,11,1,2)641@30166L25,647@30397L600:TextFieldDefaults.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(innerTextField) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.z1t(singleLine) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(visualTransformation) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1t(interactionSource) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.z1t(isError_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.d1u(label_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.d1u(placeholder_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.d1u(leadingIcon_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.d1u(trailingIcon_0._v) ? 4 : 2);
    if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ((($default & 2048) === 0 ? $composer_0.y1t(colors_0._v) : false) ? 32 : 16);
    if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ((($default & 4096) === 0 ? $composer_0.y1t(contentPadding_0._v) : false) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.d1u(border_0._v) ? 2048 : 1024);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 5851) === 1170)) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 64) === 0)) {
          isError_0._v = false;
        }
        if (!(($default & 128) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          leadingIcon_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          trailingIcon_0._v = null;
        }
        if (!(($default & 2048) === 0)) {
          var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = this.oe1(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 0, 0, 2097151);
          $dirty1 = $dirty1 & -113;
        }
        if (!(($default & 4096) === 0)) {
          contentPadding_0._v = this.de3();
          $dirty1 = $dirty1 & -897;
        }
        if (!(($default & 8192) === 0)) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material.TextFieldDefaults.OutlinedTextFieldDecorationBox$composable.<anonymous>' call
          var tmp_19 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_19, 1261916269, true, TextFieldDefaults$OutlinedTextFieldDecorationBox$composable$lambda(enabled, isError_0, interactionSource, colors_0, $dirty, $dirty1));
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
          var tmp_20;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            // Inline function 'androidx.compose.material.TextFieldDefaults.OutlinedTextFieldDecorationBox$composable.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_19(dispatchReceiver);
            $composer_1.x1t(value_0);
            tmp_20 = value_0;
          } else {
            tmp_20 = tmp0_let;
          }
          var tmp_21 = tmp_20;
          var tmp0 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
          $composer_1.o1r();
          border_0._v = tmp0;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 2048) === 0))
          $dirty1 = $dirty1 & -113;
        if (!(($default & 4096) === 0))
          $dirty1 = $dirty1 & -897;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(1281236771, $dirty, $dirty1, 'androidx.compose.material.TextFieldDefaults.OutlinedTextFieldDecorationBox$composable (TextFieldDefaults.kt:629)');
      }
      var tmp0_type = TextFieldType_Outlined_getInstance();
      CommonDecorationBox$composable(tmp0_type, value, innerTextField, visualTransformation, label_0._v, placeholder_0._v, leadingIcon_0._v, trailingIcon_0._v, singleLine, enabled, isError_0._v, interactionSource, contentPadding_0._v, colors_0._v, border_0._v, $composer_0, 6 | 112 & $dirty << 3 | 896 & $dirty << 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 9 | 458752 & $dirty >> 9 | 3670016 & $dirty >> 9 | 29360128 & $dirty1 << 21 | 234881024 & $dirty << 15 | 1879048192 & $dirty << 21, 14 & $dirty >> 18 | 112 & $dirty >> 12 | 896 & $dirty1 | 7168 & $dirty1 << 6 | 57344 & $dirty1 << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(TextFieldDefaults$OutlinedTextFieldDecorationBox$composable$lambda_0(this, value, innerTextField, enabled, singleLine, visualTransformation, interactionSource, isError_0, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, colors_0, contentPadding_0, border_0, $changed, $changed1, $default));
    }
  };
  var TextFieldDefaults_instance;
  function TextFieldDefaults_getInstance() {
    if (TextFieldDefaults_instance == null)
      new TextFieldDefaults();
    return TextFieldDefaults_instance;
  }
  function animateBorderStrokeAsState$composable(enabled, isError, interactionSource, colors, focusedBorderThickness, unfocusedBorderThickness, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-720560145);
    sourceInformation($composer_0, 'C(animateBorderStrokeAsState$composable)P(1,4,3!1,2:c#ui.unit.Dp,5:c#ui.unit.Dp)838@37892L25,839@37950L51,846@38307L107:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-720560145, $changed, -1, 'androidx.compose.material.animateBorderStrokeAsState$composable (TextFieldDefaults.kt:830)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var indicatorColor = colors.fe3(enabled, isError, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed);
    var targetThickness = animateBorderStrokeAsState$composable$lambda(focused$delegate) ? focusedBorderThickness : unfocusedBorderThickness;
    var tmp;
    if (enabled) {
      $composer_0.m1r(-2019801114);
      sourceInformation($composer_0, '842@38145L76');
      var tmp_0 = tween(get_AnimationDuration());
      var tmp1_group = animateDpAsState$composable(targetThickness, tmp_0, null, null, $composer_0, 48, 12);
      $composer_0.o1r();
      tmp = tmp1_group;
    } else {
      $composer_0.m1r(-2019801016);
      sourceInformation($composer_0, '844@38243L46');
      var tmp2_group = rememberUpdatedState$composable(new Dp(unfocusedBorderThickness), $composer_0, 14 & $changed >> 15);
      $composer_0.o1r();
      tmp = tmp2_group;
    }
    var animatedThickness = tmp;
    var tmp0 = rememberUpdatedState$composable(new BorderStroke(animatedThickness.s().j36_1, new SolidColor(indicatorColor.s().y3w_1)), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function indicatorColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.s();
  }
  function labelColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.s();
  }
  function DefaultTextFieldColors(textColor, disabledTextColor, cursorColor, errorCursorColor, focusedIndicatorColor, unfocusedIndicatorColor, errorIndicatorColor, disabledIndicatorColor, leadingIconColor, disabledLeadingIconColor, errorLeadingIconColor, trailingIconColor, disabledTrailingIconColor, errorTrailingIconColor, backgroundColor, focusedLabelColor, unfocusedLabelColor, disabledLabelColor, errorLabelColor, placeholderColor, disabledPlaceholderColor) {
    this.ge3_1 = textColor;
    this.he3_1 = disabledTextColor;
    this.ie3_1 = cursorColor;
    this.je3_1 = errorCursorColor;
    this.ke3_1 = focusedIndicatorColor;
    this.le3_1 = unfocusedIndicatorColor;
    this.me3_1 = errorIndicatorColor;
    this.ne3_1 = disabledIndicatorColor;
    this.oe3_1 = leadingIconColor;
    this.pe3_1 = disabledLeadingIconColor;
    this.qe3_1 = errorLeadingIconColor;
    this.re3_1 = trailingIconColor;
    this.se3_1 = disabledTrailingIconColor;
    this.te3_1 = errorTrailingIconColor;
    this.ue3_1 = backgroundColor;
    this.ve3_1 = focusedLabelColor;
    this.we3_1 = unfocusedLabelColor;
    this.xe3_1 = disabledLabelColor;
    this.ye3_1 = errorLabelColor;
    this.ze3_1 = placeholderColor;
    this.ae4_1 = disabledPlaceholderColor;
  }
  protoOf(DefaultTextFieldColors).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof DefaultTextFieldColors))
      THROW_CCE();
    if (!equals(this.ge3_1, other.ge3_1))
      return false;
    if (!equals(this.he3_1, other.he3_1))
      return false;
    if (!equals(this.ie3_1, other.ie3_1))
      return false;
    if (!equals(this.je3_1, other.je3_1))
      return false;
    if (!equals(this.ke3_1, other.ke3_1))
      return false;
    if (!equals(this.le3_1, other.le3_1))
      return false;
    if (!equals(this.me3_1, other.me3_1))
      return false;
    if (!equals(this.ne3_1, other.ne3_1))
      return false;
    if (!equals(this.oe3_1, other.oe3_1))
      return false;
    if (!equals(this.pe3_1, other.pe3_1))
      return false;
    if (!equals(this.qe3_1, other.qe3_1))
      return false;
    if (!equals(this.re3_1, other.re3_1))
      return false;
    if (!equals(this.se3_1, other.se3_1))
      return false;
    if (!equals(this.te3_1, other.te3_1))
      return false;
    if (!equals(this.ue3_1, other.ue3_1))
      return false;
    if (!equals(this.ve3_1, other.ve3_1))
      return false;
    if (!equals(this.we3_1, other.we3_1))
      return false;
    if (!equals(this.xe3_1, other.xe3_1))
      return false;
    if (!equals(this.ye3_1, other.ye3_1))
      return false;
    if (!equals(this.ze3_1, other.ze3_1))
      return false;
    if (!equals(this.ae4_1, other.ae4_1))
      return false;
    return true;
  };
  protoOf(DefaultTextFieldColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.ge3_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.he3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ie3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.je3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ke3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.le3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.me3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ne3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.oe3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.pe3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.qe3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.re3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.se3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.te3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ue3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ve3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.we3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.xe3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ye3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ze3_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ae4_1) | 0;
    return result;
  };
  protoOf(DefaultTextFieldColors).be4 = function (enabled, isError, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1169260354);
    sourceInformation($composer_0, 'C(leadingIconColor$composable)694@32107L207:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1169260354, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.leadingIconColor$composable (TextFieldDefaults.kt:693)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(!enabled ? this.pe3_1 : isError ? this.qe3_1 : this.oe3_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).ce4 = function (enabled, isError, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-568553940);
    sourceInformation($composer_0, 'C(trailingIconColor$composable)705@32440L210:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-568553940, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.trailingIconColor$composable (TextFieldDefaults.kt:704)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(!enabled ? this.se3_1 : isError ? this.te3_1 : this.re3_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).fe3 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1356741780);
    sourceInformation($composer_0, 'C(indicatorColor$composable)P(!1,2)720@32867L25:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1356741780, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.indicatorColor$composable (TextFieldDefaults.kt:715)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.ne3_1 : isError ? this.me3_1 : indicatorColor$composable$lambda(focused$delegate) ? this.ke3_1 : this.le3_1;
    var tmp;
    if (enabled) {
      $composer_0.m1r(59806439);
      sourceInformation($composer_0, '729@33158L75');
      var tmp_0 = tween(get_AnimationDuration());
      var tmp1_group = animateColorAsState$composable(targetValue, tmp_0, null, null, $composer_0, 48, 12);
      $composer_0.o1r();
      tmp = tmp1_group;
    } else {
      $composer_0.m1r(59806544);
      sourceInformation($composer_0, '731@33263L33');
      var tmp2_group = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
      $composer_0.o1r();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).adx = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1316647989);
    sourceInformation($composer_0, 'C(backgroundColor$composable)737@33412L37:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-1316647989, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.backgroundColor$composable (TextFieldDefaults.kt:736)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(this.ue3_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).de4 = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-90906306);
    sourceInformation($composer_0, 'C(placeholderColor$composable)742@33556L81:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-90906306, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.placeholderColor$composable (TextFieldDefaults.kt:741)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.ze3_1 : this.ae4_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).ee4 = function (enabled, error, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1134357607);
    sourceInformation($composer_0, 'C(labelColor$composable)751@33848L25,759@34094L33:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1134357607, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.labelColor$composable (TextFieldDefaults.kt:746)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.xe3_1 : error ? this.ye3_1 : labelColor$composable$lambda(focused$delegate) ? this.ve3_1 : this.we3_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).pe1 = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1464058860);
    sourceInformation($composer_0, 'C(textColor$composable)764@34227L67:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(1464058860, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.textColor$composable (TextFieldDefaults.kt:763)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.ge3_1 : this.he3_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  protoOf(DefaultTextFieldColors).qe1 = function (isError, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(381323939);
    sourceInformation($composer_0, 'C(cursorColor$composable)769@34396L68:TextFieldDefaults.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(381323939, $changed, -1, 'androidx.compose.material.DefaultTextFieldColors.cursorColor$composable (TextFieldDefaults.kt:768)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(isError ? this.je3_1 : this.ie3_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  function TextFieldColorsWithIcons() {
  }
  function animateBorderStrokeAsState$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.s();
  }
  function get_ZeroConstraints() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return ZeroConstraints;
  }
  var ZeroConstraints;
  function get_TextFieldPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return TextFieldPadding;
  }
  var TextFieldPadding;
  function get_HorizontalIconPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return HorizontalIconPadding;
  }
  var HorizontalIconPadding;
  function get_IconDefaultSizeModifier() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return IconDefaultSizeModifier;
  }
  var IconDefaultSizeModifier;
  var TextFieldType_Filled_instance;
  var TextFieldType_Outlined_instance;
  var TextFieldType_entriesInitialized;
  function TextFieldType_initEntries() {
    if (TextFieldType_entriesInitialized)
      return Unit_getInstance();
    TextFieldType_entriesInitialized = true;
    TextFieldType_Filled_instance = new TextFieldType('Filled', 0);
    TextFieldType_Outlined_instance = new TextFieldType('Outlined', 1);
  }
  function TextFieldType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CommonDecorationBox$composable(type, value, innerTextField, visualTransformation, label, placeholder, leadingIcon, trailingIcon, singleLine, enabled, isError, interactionSource, contentPadding, colors, border, $composer, $changed, $changed1, $default) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var singleLine_0 = {_v: singleLine};
    var enabled_0 = {_v: enabled};
    var isError_0 = {_v: isError};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(218788751);
    sourceInformation($composer_0, 'C(CommonDecorationBox$composable)P(12,13,4,14,7,9,8,11,10,3,6,5,2,1)80@3167L105,84@3322L25,101@3932L10,108@4267L5253:TextFieldImpl.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.d1u(innerTextField) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(visualTransformation) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(label) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(leadingIcon_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.d1u(trailingIcon_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.z1t(singleLine_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.z1t(isError_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(interactionSource) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(contentPadding) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(colors) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.d1u(border_0._v) ? 16384 : 8192);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 46811) === 9362)) ? true : !$composer_0.b1t()) {
      if (!(($default & 32) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        leadingIcon_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        trailingIcon_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        singleLine_0._v = false;
      }
      if (!(($default & 512) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 1024) === 0)) {
        isError_0._v = false;
      }
      if (!(($default & 16384) === 0)) {
        border_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(218788751, $dirty, $dirty1, 'androidx.compose.material.CommonDecorationBox$composable (TextFieldImpl.kt:63)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.y1t(value) | $composer_1.y1t(visualTransformation));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>' call
        var value_0 = visualTransformation.v57(AnnotatedString_init_$Create$(value));
        $composer_1.x1t(value_0);
        tmp = value_0;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      var transformedText = tmp0.z57_1.t4k_1;
      var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $dirty1 >> 3).s();
      var tmp_1;
      if (isFocused) {
        tmp_1 = InputPhase_Focused_getInstance();
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(transformedText) === 0) {
          tmp_1 = InputPhase_UnfocusedEmpty_getInstance();
        } else {
          tmp_1 = InputPhase_UnfocusedNotEmpty_getInstance();
        }
      }
      var inputState = tmp_1;
      var labelColor = CommonDecorationBox$composable$lambda(colors, enabled_0, isError_0, interactionSource, $dirty, $dirty1);
      var typography = MaterialTheme_getInstance().edw($composer_0, 6);
      var subtitle1 = typography.wdv_1;
      var caption = typography.bdw_1;
      var shouldOverrideTextStyleColor = (equals(subtitle1.e3y(), Companion_getInstance_7().c3y_1) ? !equals(caption.e3y(), Companion_getInstance_7().c3y_1) : false) ? true : !equals(subtitle1.e3y(), Companion_getInstance_7().c3y_1) ? equals(caption.e3y(), Companion_getInstance_7().c3y_1) : false;
      var tmp_2 = TextFieldTransitionScope_getInstance();
      $composer_0.m1r(2141070609);
      sourceInformation($composer_0, '*110@4363L10,111@4455L22');
      // Inline function 'kotlin.with' call
      var tmp2_with = MaterialTheme_getInstance().edw($composer_0, 6).bdw_1.e3y();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>' call
      var tmp_3;
      if (shouldOverrideTextStyleColor) {
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp_4;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(tmp2_with), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
          tmp_4 = tmp2_with;
        } else {
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
          tmp_4 = labelColor(inputState, $composer_0, 0).y3w_1;
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = tmp2_with;
      }
      var tmp0_group = tmp_3;
      $composer_0.o1r();
      $composer_0.m1r(2141070800);
      sourceInformation($composer_0, '*113@4554L10,114@4648L22');
      // Inline function 'kotlin.with' call
      var tmp3_with = MaterialTheme_getInstance().edw($composer_0, 6).wdv_1.e3y();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>' call
      var tmp_5;
      if (shouldOverrideTextStyleColor) {
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp_6;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(tmp3_with), _Color___get_value__impl__1pls5m(Companion_getInstance_7().c3y_1))) {
          tmp_6 = tmp3_with;
        } else {
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
          tmp_6 = labelColor(inputState, $composer_0, 0).y3w_1;
        }
        tmp_5 = tmp_6;
      } else {
        tmp_5 = tmp3_with;
      }
      var tmp1_group = tmp_5;
      $composer_0.o1r();
      var tmp_7 = !(label == null);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, 341865432, true, CommonDecorationBox$composable$lambda_0(label, placeholder_0, transformedText, isError_0, $dirty1, colors, enabled_0, interactionSource, $dirty, leadingIcon_0, trailingIcon_0, type, innerTextField, singleLine_0, contentPadding, shouldOverrideTextStyleColor, border_0));
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
      var tmp_9;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_2.x1t(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = tmp0_let_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      $composer_2.o1r();
      tmp_2.he4(inputState, tmp0_group, tmp1_group, labelColor, tmp_7, tmp0_0, $composer_0, 1769472);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp2_safe_receiver = $composer_0.i1t();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.z28(CommonDecorationBox$composable$lambda_1(type, value, innerTextField, visualTransformation, label, placeholder_0, leadingIcon_0, trailingIcon_0, singleLine_0, enabled_0, isError_0, interactionSource, contentPadding, colors, border_0, $changed, $changed1, $default));
    }
  }
  function get_AnimationDuration() {
    return AnimationDuration;
  }
  var AnimationDuration;
  var InputPhase_Focused_instance;
  var InputPhase_UnfocusedEmpty_instance;
  var InputPhase_UnfocusedNotEmpty_instance;
  var InputPhase_entriesInitialized;
  function InputPhase_initEntries() {
    if (InputPhase_entriesInitialized)
      return Unit_getInstance();
    InputPhase_entriesInitialized = true;
    InputPhase_Focused_instance = new InputPhase('Focused', 0);
    InputPhase_UnfocusedEmpty_instance = new InputPhase('UnfocusedEmpty', 1);
    InputPhase_UnfocusedNotEmpty_instance = new InputPhase('UnfocusedNotEmpty', 2);
  }
  function InputPhase(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Transition$composable$lambda($labelProgress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelProgress$delegate.s();
  }
  function Transition$composable$lambda_0($placeholderOpacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('placeholderOpacity', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $placeholderOpacity$delegate.s();
  }
  function Transition$composable$lambda_1($labelTextStyleColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelTextStyleColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelTextStyleColor$delegate.s().y3w_1;
  }
  function Transition$composable$lambda_2($labelContentColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelContentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelContentColor$delegate.s().y3w_1;
  }
  function TextFieldTransitionScope$Transition$composable$lambda($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-611722692);
    if (isTraceInProgress()) {
      traceEventStart(-611722692, $changed, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:282)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_0($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_1($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_2($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1079955085);
    if (isTraceInProgress()) {
      traceEventStart(-1079955085, $changed, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:293)');
    }
    var tmp;
    if ($this$animateFloat.y8y(InputPhase_Focused_getInstance(), InputPhase_UnfocusedEmpty_getInstance())) {
      tmp = tween(67, VOID, get_LinearEasing());
    } else if ($this$animateFloat.y8y(InputPhase_UnfocusedEmpty_getInstance(), InputPhase_Focused_getInstance()) ? true : $this$animateFloat.y8y(InputPhase_UnfocusedNotEmpty_getInstance(), InputPhase_UnfocusedEmpty_getInstance())) {
      tmp = tween(83, 67, get_LinearEasing());
    } else {
      tmp = spring();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_3($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_4($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_5($this$animateColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-130058045);
    if (isTraceInProgress()) {
      traceEventStart(-130058045, $changed, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:320)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_6($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_7($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_8($this$animateColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-32667848);
    if (isTraceInProgress()) {
      traceEventStart(-32667848, $changed, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:330)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_9($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_10($this$null, $composer, $changed) {
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
  function TextFieldTransitionScope$Transition$composable$lambda_11($tmp0_rcvr, $inputState, $focusedTextStyleColor, $unfocusedTextStyleColor, $contentColor, $showLabel, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.he4($inputState, $focusedTextStyleColor, $unfocusedTextStyleColor, $contentColor, $showLabel, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TextFieldTransitionScope() {
    TextFieldTransitionScope_instance = this;
  }
  protoOf(TextFieldTransitionScope).he4 = function (inputState, focusedTextStyleColor, unfocusedTextStyleColor, contentColor, showLabel, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-95964667);
    sourceInformation($composer_0, 'C(Transition$composable)P(3,2:c#ui.graphics.Color,5:c#ui.graphics.Color,1,4)278@11377L59,280@11478L325,291@11850L1101,319@12999L299,329@13344L186,335@13540L140:TextFieldImpl.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(inputState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(focusedTextStyleColor))) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(unfocusedTextStyleColor))) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(contentColor) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.z1t(showLabel) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-95964667, $dirty, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable (TextFieldImpl.kt:262)');
      }
      var transition = updateTransition$composable_0(inputState, 'TextFieldInputState', $composer_0, 48 | 14 & $dirty, 0);
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec = TextFieldTransitionScope$Transition$composable$lambda;
      var label = 'LabelProgress';
      var $composer_1 = $composer_0;
      $composer_1.m1r(1610198356);
      sourceInformation($composer_1, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec = TextFieldTransitionScope$Transition$composable$lambda_0;
      }
      if (!(0 === 0))
        label = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var transitionSpec_0 = transitionSpec;
      var label_0 = label;
      var $composer_2 = $composer_1;
      $composer_2.m1r(-1940744337);
      sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_0 = TextFieldTransitionScope$Transition$composable$lambda_1;
      }
      if (!(0 === 0))
        label_0 = 'ValueAnimation';
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp2_anonymous = transition.c8z();
      var tmp4_anonymous = 112 & 3072 >> 9;
      var $composer_3 = $composer_2;
      $composer_3.m1r(-1158004136);
      sourceInformation($composer_3, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1158004136, tmp4_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:283)');
      }
      var tmp;
      switch (tmp2_anonymous.h7_1) {
        case 0:
          tmp = 1.0;
          break;
        case 1:
          tmp = 0.0;
          break;
        case 2:
          tmp = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0 = tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_3.o1r();
      var initialValue = tmp0;
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp5_anonymous = transition.q8x();
      var tmp7_anonymous = 112 & 3072 >> 9;
      var $composer_4 = $composer_2;
      $composer_4.m1r(-1158004136);
      sourceInformation($composer_4, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1158004136, tmp7_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:283)');
      }
      var tmp_0;
      switch (tmp5_anonymous.h7_1) {
        case 0:
          tmp_0 = 1.0;
          break;
        case 1:
          tmp_0 = 0.0;
          break;
        case 2:
          tmp_0 = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_0 = tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_4.o1r();
      var targetValue = tmp0_0;
      var animationSpec = transitionSpec_0(transition.m8y(), $composer_2, 112 & 3072 >> 3);
      var tmp0_1 = createTransitionAnimation$composable(transition, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_0, $composer_2, 14 & 3072 | 57344 & 3072 << 9 | 458752 & 3072 << 6);
      $composer_2.o1r();
      $composer_1.o1r();
      var labelProgress$delegate = tmp0_1;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec_1 = TextFieldTransitionScope$Transition$composable$lambda_2;
      var label_1 = 'PlaceholderOpacity';
      var $composer_5 = $composer_0;
      $composer_5.m1r(1610198356);
      sourceInformation($composer_5, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_1 = TextFieldTransitionScope$Transition$composable$lambda_3;
      }
      if (!(0 === 0))
        label_1 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp0_animateValue$composable_0 = get_VectorConverter_0(FloatCompanionObject_getInstance());
      var transitionSpec_2 = transitionSpec_1;
      var label_2 = label_1;
      var $composer_6 = $composer_5;
      $composer_6.m1r(-1940744337);
      sourceInformation($composer_6, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_2 = TextFieldTransitionScope$Transition$composable$lambda_4;
      }
      if (!(0 === 0))
        label_2 = 'ValueAnimation';
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp10_anonymous = transition.c8z();
      var tmp12_anonymous = 112 & 3072 >> 9;
      var $composer_7 = $composer_6;
      $composer_7.m1r(-1376159017);
      sourceInformation($composer_7, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1376159017, tmp12_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:311)');
      }
      var tmp_1;
      switch (tmp10_anonymous.h7_1) {
        case 0:
          tmp_1 = 1.0;
          break;
        case 1:
          tmp_1 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_1 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_2 = tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.o1r();
      var initialValue_0 = tmp0_2;
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp13_anonymous = transition.q8x();
      var tmp15_anonymous = 112 & 3072 >> 9;
      var $composer_8 = $composer_6;
      $composer_8.m1r(-1376159017);
      sourceInformation($composer_8, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1376159017, tmp15_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:311)');
      }
      var tmp_2;
      switch (tmp13_anonymous.h7_1) {
        case 0:
          tmp_2 = 1.0;
          break;
        case 1:
          tmp_2 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_2 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_3 = tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_8.o1r();
      var targetValue_0 = tmp0_3;
      var animationSpec_0 = transitionSpec_2(transition.m8y(), $composer_6, 112 & 3072 >> 3);
      var tmp0_4 = createTransitionAnimation$composable(transition, initialValue_0, targetValue_0, animationSpec_0, tmp0_animateValue$composable_0, label_2, $composer_6, 14 & 3072 | 57344 & 3072 << 9 | 458752 & 3072 << 6);
      $composer_6.o1r();
      $composer_5.o1r();
      var placeholderOpacity$delegate = tmp0_4;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var transitionSpec_3 = TextFieldTransitionScope$Transition$composable$lambda_5;
      var label_3 = 'LabelTextStyleColor';
      var $composer_9 = $composer_0;
      $composer_9.m1r(-1488075038);
      sourceInformation($composer_9, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
      if (!(0 === 0)) {
        transitionSpec_3 = TextFieldTransitionScope$Transition$composable$lambda_6;
      }
      if (!(0 === 0))
        label_3 = 'ColorAnimation';
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp18_anonymous = transition.q8x();
      var $composer_10 = $composer_9;
      $composer_10.m1r(-1490209928);
      sourceInformation($composer_10, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1490209928, 0, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:322)');
      }
      var tmp0_5 = tmp18_anonymous.h7_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_10.o1r();
      var colorSpace = _Color___get_colorSpace__impl__jqqozk(tmp0_5);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_11 = $composer_9;
      $composer_11.m1r(-838505973);
      sourceInformation($composer_11, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_11.y1t(colorSpace);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_11.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        var value = get_VectorConverter_2(Companion_getInstance_7())(colorSpace);
        $composer_11.x1t(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0_6 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_11.o1r();
      var typeConverter = tmp0_6;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var transitionSpec_4 = transitionSpec_3;
      var label_4 = label_3;
      var $composer_12 = $composer_9;
      $composer_12.m1r(-1940744337);
      sourceInformation($composer_12, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_4 = TextFieldTransitionScope$Transition$composable$lambda_7;
      }
      if (!(0 === 0))
        label_4 = 'ValueAnimation';
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp21_anonymous = transition.c8z();
      var tmp23_anonymous = 112 & 3072 >> 9;
      var $composer_13 = $composer_12;
      $composer_13.m1r(-1490209928);
      sourceInformation($composer_13, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1490209928, tmp23_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:322)');
      }
      var tmp0_7 = tmp21_anonymous.h7_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_13.o1r();
      var initialValue_1 = tmp0_7;
      // Inline function 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var tmp24_anonymous = transition.q8x();
      var tmp26_anonymous = 112 & 3072 >> 9;
      var $composer_14 = $composer_12;
      $composer_14.m1r(-1490209928);
      sourceInformation($composer_14, 'C:TextFieldImpl.kt#jmzs0o');
      if (isTraceInProgress()) {
        traceEventStart(-1490209928, tmp26_anonymous, -1, 'androidx.compose.material.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:322)');
      }
      var tmp0_8 = tmp24_anonymous.h7_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_14.o1r();
      var targetValue_1 = tmp0_8;
      var animationSpec_1 = transitionSpec_4(transition.m8y(), $composer_12, 112 & 3072 >> 3);
      var tmp0_9 = createTransitionAnimation$composable(transition, new Color(initialValue_1), new Color(targetValue_1), animationSpec_1, typeConverter, label_4, $composer_12, 14 & 3072 | 57344 & 3072 << 9 | 458752 & 3072 << 6);
      $composer_12.o1r();
      $composer_9.o1r();
      var labelTextStyleColor$delegate = tmp0_9;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var tmp29_animateColor$composable = 384 | 7168 & $dirty;
      var transitionSpec_5 = TextFieldTransitionScope$Transition$composable$lambda_8;
      var label_5 = 'LabelContentColor';
      var $composer_15 = $composer_0;
      $composer_15.m1r(-1488075038);
      sourceInformation($composer_15, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
      if (!(0 === 0)) {
        transitionSpec_5 = TextFieldTransitionScope$Transition$composable$lambda_9;
      }
      if (!(0 === 0))
        label_5 = 'ColorAnimation';
      var colorSpace_0 = _Color___get_colorSpace__impl__jqqozk(contentColor(transition.q8x(), $composer_15, 112 & tmp29_animateColor$composable >> 6).y3w_1);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_16 = $composer_15;
      $composer_16.m1r(-838505973);
      sourceInformation($composer_16, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_16.y1t(colorSpace_0);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_16.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        var value_0 = get_VectorConverter_2(Companion_getInstance_7())(colorSpace_0);
        $composer_16.x1t(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = tmp0_let_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_10 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_16.o1r();
      var typeConverter_0 = tmp0_10;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var tmp4_animateValue$composable = 14 & tmp29_animateColor$composable | 896 & tmp29_animateColor$composable << 3 | 7168 & tmp29_animateColor$composable << 3 | 57344 & tmp29_animateColor$composable << 3;
      var transitionSpec_6 = transitionSpec_5;
      var label_6 = label_5;
      var $composer_17 = $composer_15;
      $composer_17.m1r(-1940744337);
      sourceInformation($composer_17, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!(0 === 0)) {
        transitionSpec_6 = TextFieldTransitionScope$Transition$composable$lambda_10;
      }
      if (!(0 === 0))
        label_6 = 'ValueAnimation';
      var initialValue_2 = contentColor(transition.c8z(), $composer_17, 112 & tmp4_animateValue$composable >> 9).y3w_1;
      var targetValue_2 = contentColor(transition.q8x(), $composer_17, 112 & tmp4_animateValue$composable >> 9).y3w_1;
      var animationSpec_2 = transitionSpec_6(transition.m8y(), $composer_17, 112 & tmp4_animateValue$composable >> 3);
      var tmp0_11 = createTransitionAnimation$composable(transition, new Color(initialValue_2), new Color(targetValue_2), animationSpec_2, typeConverter_0, label_6, $composer_17, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
      $composer_17.o1r();
      $composer_15.o1r();
      var labelContentColor$delegate = tmp0_11;
      content(Transition$composable$lambda(labelProgress$delegate), new Color(Transition$composable$lambda_1(labelTextStyleColor$delegate)), new Color(Transition$composable$lambda_2(labelContentColor$delegate)), Transition$composable$lambda_0(placeholderOpacity$delegate), $composer_0, 57344 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(TextFieldTransitionScope$Transition$composable$lambda_11(this, inputState, focusedTextStyleColor, unfocusedTextStyleColor, contentColor, showLabel, content, $changed));
    }
  };
  var TextFieldTransitionScope_instance;
  function TextFieldTransitionScope_getInstance() {
    if (TextFieldTransitionScope_instance == null)
      new TextFieldTransitionScope();
    return TextFieldTransitionScope_instance;
  }
  function Decoration$composable(contentColor, typography, contentAlpha, content, $composer, $changed, $default) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var typography_0 = {_v: typography};
    var contentAlpha_0 = {_v: contentAlpha};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(275554888);
    sourceInformation($composer_0, 'C(Decoration$composable)P(2:c#ui.graphics.Color,3,1):TextFieldImpl.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(typography_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentAlpha_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        typography_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        contentAlpha_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(275554888, $dirty, -1, 'androidx.compose.material.Decoration$composable (TextFieldImpl.kt:233)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.Decoration$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 494684590, true, Decoration$composable$lambda(contentColor, contentAlpha_0, content, $dirty));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.Decoration$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      var colorAndEmphasis = tmp0;
      if (!(typography_0._v == null)) {
        $composer_0.m1r(-649732420);
        sourceInformation($composer_0, '254@10423L46');
        ProvideTextStyle$composable(typography_0._v, colorAndEmphasis, $composer_0, 48 | 14 & $dirty >> 3);
        $composer_0.o1r();
      } else {
        $composer_0.m1r(-649732368);
        sourceInformation($composer_0, '254@10475L18');
        colorAndEmphasis($composer_0, 6);
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
      tmp0_safe_receiver.z28(Decoration$composable$lambda_0(contentColor, typography_0, contentAlpha_0, content, $changed, $default));
    }
  }
  function get_LeadingId() {
    return LeadingId;
  }
  var LeadingId;
  function get_TrailingId() {
    return TrailingId;
  }
  var TrailingId;
  function get_PlaceholderId() {
    return PlaceholderId;
  }
  var PlaceholderId;
  function get_LabelId() {
    return LabelId;
  }
  var LabelId;
  function get_TextFieldId() {
    return TextFieldId;
  }
  var TextFieldId;
  function widthOrZero(placeable) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp1_elvis_lhs = placeable == null ? null : placeable.x5h_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function heightOrZero(placeable) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp1_elvis_lhs = placeable == null ? null : placeable.y5h_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function get_layoutId_0(_this__u8e3s4) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp = _this__u8e3s4.r6r();
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, LayoutIdParentData) : false) ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h6t();
  }
  function CommonDecorationBox$composable$lambda($colors, $enabled, $isError, $interactionSource, $$dirty, $$dirty1) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(697243846);
      sourceInformation($composer_0, 'C92@3610L273:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(697243846, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous> (TextFieldImpl.kt:91)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $colors.ee4($enabled._v, it.equals(InputPhase_UnfocusedEmpty_getInstance()) ? false : $isError._v, $interactionSource, $composer_0, 14 & $$dirty >> 27 | 896 & $$dirty1 << 3 | 7168 & $$dirty1).s().y3w_1;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.o1r();
      return new Color(tmp0);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda($labelProgress, $shouldOverrideTextStyleColor, $labelTextStyleColor, $labelContentColor, $tmp0_safe_receiver, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*123@5027L10,124@5083L10,129@5294L55:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(362863774, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:121)');
        }
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = lerp_1(MaterialTheme_getInstance().edw($composer_0, 6).wdv_1, MaterialTheme_getInstance().edw($composer_0, 6).bdw_1, $labelProgress);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_return = $shouldOverrideTextStyleColor ? tmp0_let.s4u($labelTextStyleColor) : tmp0_let;
        tmp$ret$0 = tmp0_return;
        tmp$ret$1 = tmp$ret$0;
        var labelTextStyle = tmp$ret$1;
        Decoration$composable($labelContentColor, labelTextStyle, null, $tmp0_safe_receiver, $composer_0, 384 | 14 & $$dirty >> 6, 0);
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
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_0($placeholderAlphaProgress, $colors, $enabled, $$dirty, $$dirty1, $placeholder) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C138@5768L341:TextFieldImpl.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1120552650, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:137)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp0_Box$composable = alpha(modifier, $placeholderAlphaProgress);
        var tmp1_Box$composable = null;
        var tmp2_Box$composable = false;
        var tmp3_Box$composable = $composer_0;
        var modifier_0 = tmp0_Box$composable;
        var contentAlignment = tmp1_Box$composable;
        var propagateMinConstraints = tmp2_Box$composable;
        var $composer_1 = tmp3_Box$composable;
        $composer_1.m1r(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_0;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_1 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.m1r(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_1 = $composer_3.z1s();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.p1t();
        if ($composer_3.a1t()) {
          $composer_3.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_2;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_2 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_2;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = BoxScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        sourceInformationMarkerStart($composer_5, 2075237452, 'C140@5902L25,141@5990L10,139@5840L247:TextFieldImpl.kt#jmzs0o');
        var tmp_3 = $colors.de4($enabled._v, $composer_5, 14 & $$dirty >> 27 | 112 & $$dirty1 >> 6).s().y3w_1;
        var tmp_4 = MaterialTheme_getInstance().edw($composer_5, 6).wdv_1;
        Decoration$composable(tmp_3, tmp_4, null, $placeholder._v, $composer_5, 7168 & $$dirty >> 6, 4);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.o1r();
        $composer_3.s1t();
        $composer_2.o1r();
        $composer_1.o1r();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.m1t();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_1($isError, $defaultErrorMessage) {
    return function ($this$semantics) {
      var tmp;
      if ($isError._v) {
        error($this$semantics, $defaultErrorMessage);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_2($leadingIconColor, $tmp1_safe_receiver) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C161@6883L57:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(1505327088, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:160)');
        }
        Decoration$composable($leadingIconColor, null, null, $tmp1_safe_receiver, $composer_0, 0, 6);
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
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_3($trailingIconColor, $tmp2_safe_receiver) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C172@7329L58:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1894727196, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:171)');
        }
        Decoration$composable($trailingIconColor, null, null, $tmp2_safe_receiver, $composer_0, 0, 6);
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
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_4($labelSize, $contentPadding, $border, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C194@8214L246:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(139886979, $changed, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:193)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp0_Box$composable = outlineCutout(layoutId(Companion_getInstance(), get_BorderId()), $labelSize.s().s34_1, $contentPadding);
        var tmp1_Box$composable = null;
        var tmp2_Box$composable = $composer_0;
        var modifier = tmp0_Box$composable;
        var contentAlignment = tmp1_Box$composable;
        var propagateMinConstraints = true;
        var $composer_1 = tmp2_Box$composable;
        $composer_1.m1r(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().o5e_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.m1r(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.f1u();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().s6s_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.z1s();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.p1t();
        if ($composer_3.a1t()) {
          $composer_3.q1t(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.r1t();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().x6s_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().w6s_1);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().a6t_1;
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
          tmp0_with.x1t(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.m1r(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp3_anonymous_0 = BoxScopeInstance_getInstance();
        var tmp4_anonymous_1 = $composer_4;
        var tmp5_anonymous = 6;
        var $composer_5 = tmp4_anonymous_1;
        sourceInformationMarkerStart($composer_5, 2075240034, 'C:TextFieldImpl.kt#jmzs0o');
        var tmp0_safe_receiver = $border._v;
        $composer_5.m1r(817403081);
        sourceInformation($composer_5, '198@8430L8');
        var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver($composer_5, 14 & $$dirty1 >> 12);
        $composer_5.o1r();
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.o1r();
        $composer_3.s1t();
        $composer_2.o1r();
        $composer_1.o1r();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_5($labelProgress, $labelSize) {
    return function (it) {
      var labelWidth = _Size___get_width__impl__58y75t(it.s34_1) * $labelProgress;
      var labelHeight = _Size___get_height__impl__a04p02(it.s34_1) * $labelProgress;
      var tmp;
      if (!(_Size___get_width__impl__58y75t($labelSize.s().s34_1) === labelWidth) ? true : !(_Size___get_height__impl__a04p02($labelSize.s().s34_1) === labelHeight)) {
        $labelSize.f1d(new Size_0(Size(labelWidth, labelHeight)));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CommonDecorationBox$composable$lambda_0($label, $placeholder, $transformedText, $isError, $$dirty1, $colors, $enabled, $interactionSource, $$dirty, $leadingIcon, $trailingIcon, $type, $innerTextField, $singleLine, $contentPadding, $shouldOverrideTextStyleColor, $border) {
    return function (labelProgress, labelTextStyleColor, labelContentColor, placeholderAlphaProgress, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'CP(1,2:c#ui.graphics.Color,0:c#ui.graphics.Color)151@6394L30,152@6480L43:TextFieldImpl.kt#jmzs0o');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.b1u(labelProgress) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(labelTextStyleColor.y3w_1))) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (($changed & 896) === 0) {
        $dirty = $dirty | ($composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(labelContentColor.y3w_1))) ? 256 : 128);
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if (($changed & 7168) === 0) {
        $dirty = $dirty | ($composer_0.b1u(placeholderAlphaProgress) ? 2048 : 1024);
        tmp_2 = Unit_getInstance();
      }
      var tmp_3;
      if (!(($dirty & 46811) === 9362) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(341865432, $dirty, -1, 'androidx.compose.material.CommonDecorationBox$composable.<anonymous> (TextFieldImpl.kt:118)');
        }
        var tmp0_safe_receiver = $label;
        var tmp_4;
        if (tmp0_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp$ret$8;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$7;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$6;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$5;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_5 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_5, 362863774, true, CommonDecorationBox$composable$lambda$lambda(labelProgress, $shouldOverrideTextStyleColor, labelTextStyleColor.y3w_1, labelContentColor.y3w_1, tmp0_safe_receiver, $dirty));
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.m1r(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = $composer_1.y1t(dispatchReceiver);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_6;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = ComposableLambda$invoke$ref_20(dispatchReceiver);
            var value = tmp$ret$0;
            tmp0_cache.x1t(value);
            tmp_6 = value;
          } else {
            tmp_6 = tmp0_let;
          }
          tmp$ret$1 = tmp_6;
          tmp$ret$2 = tmp$ret$1;
          var tmp_7 = tmp$ret$2;
          tmp$ret$3 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.o1r();
          tmp$ret$4 = tmp0;
          tmp$ret$5 = tmp$ret$4;
          tmp$ret$6 = tmp$ret$5;
          var tmp0_return = tmp$ret$6;
          tmp$ret$7 = tmp0_return;
          tmp$ret$8 = tmp$ret$7;
          tmp_4 = tmp$ret$8;
        }
        var decoratedLabel = tmp_4;
        var tmp_8;
        var tmp_9;
        var tmp_10;
        if (!($placeholder._v == null)) {
          var tmp$ret$9;
          // Inline function 'kotlin.text.isEmpty' call
          tmp$ret$9 = charSequenceLength($transformedText) === 0;
          tmp_10 = tmp$ret$9;
        } else {
          tmp_10 = false;
        }
        if (tmp_10) {
          tmp_9 = placeholderAlphaProgress > 0.0;
        } else {
          tmp_9 = false;
        }
        if (tmp_9) {
          var tmp$ret$16;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$15;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_11 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_11, 1120552650, true, CommonDecorationBox$composable$lambda$lambda_0(placeholderAlphaProgress, $colors, $enabled, $$dirty, $$dirty1, $placeholder));
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_0 = $composer_0;
          var $composer_2 = tmp0_remember$composable_0;
          $composer_2.m1r(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$13;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_2;
          var tmp1_cache_0 = $composer_2.y1t(dispatchReceiver_0);
          var tmp$ret$12;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$11;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_12;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
            var tmp$ret$10;
            // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$10 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
            var value_0 = tmp$ret$10;
            tmp0_cache_0.x1t(value_0);
            tmp_12 = value_0;
          } else {
            tmp_12 = tmp0_let_0;
          }
          tmp$ret$11 = tmp_12;
          tmp$ret$12 = tmp$ret$11;
          var tmp_13 = tmp$ret$12;
          tmp$ret$13 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
          var tmp0_0 = tmp$ret$13;
          $composer_2.o1r();
          tmp$ret$14 = tmp0_0;
          tmp$ret$15 = tmp$ret$14;
          tmp$ret$16 = tmp$ret$15;
          tmp_8 = tmp$ret$16;
        } else {
          tmp_8 = null;
        }
        var decoratedPlaceholder = tmp_8;
        var defaultErrorMessage = getString$composable(Companion_getInstance_30().le2_1, $composer_0, 6);
        var tmp_14 = Companion_getInstance();
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $isError._v;
        var tmp1_remember$composable = $composer_0;
        var tmp2_remember$composable = 14 & $$dirty1;
        var $composer_3 = tmp1_remember$composable;
        $composer_3.m1r(-1124426577);
        sourceInformation($composer_3, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = !!($composer_3.y1t(tmp0_remember$composable_1) | $composer_3.y1t(defaultErrorMessage));
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_15;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          var tmp$ret$17;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = CommonDecorationBox$composable$lambda$lambda_1($isError, defaultErrorMessage);
          var value_1 = tmp$ret$17;
          tmp0_cache_1.x1t(value_1);
          tmp_15 = value_1;
        } else {
          tmp_15 = tmp0_let_1;
        }
        tmp$ret$18 = tmp_15;
        tmp$ret$19 = tmp$ret$18;
        var tmp_16 = tmp$ret$19;
        tmp$ret$20 = (tmp_16 == null ? true : isObject(tmp_16)) ? tmp_16 : THROW_CCE();
        var tmp0_1 = tmp$ret$20;
        $composer_3.o1r();
        tmp$ret$21 = tmp0_1;
        var decorationBoxModifier = semantics(tmp_14, VOID, tmp$ret$21);
        var tmp_17;
        if (isInterface($colors, TextFieldColorsWithIcons)) {
          $composer_0.m1r(1122161278);
          sourceInformation($composer_0, '155@6617L53');
          var tmp0_group = $colors.fe4($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty >> 27 | 112 & $$dirty1 << 3 | 896 & $$dirty1 << 3).s().y3w_1;
          $composer_0.o1r();
          tmp_17 = tmp0_group;
        } else {
          $composer_0.m1r(1122161374);
          sourceInformation($composer_0, '157@6713L34');
          var tmp1_group = $colors.be4($enabled._v, $isError._v, $composer_0, 14 & $$dirty >> 27 | 112 & $$dirty1 << 3 | 896 & $$dirty1 >> 3).s().y3w_1;
          $composer_0.o1r();
          tmp_17 = tmp1_group;
        }
        var leadingIconColor = tmp_17;
        var tmp1_safe_receiver = $leadingIcon._v;
        var tmp_18;
        if (tmp1_safe_receiver == null) {
          tmp_18 = null;
        } else {
          var tmp$ret$30;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$29;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$28;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$27;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_19 = $composer_0;
          var dispatchReceiver_1 = composableLambda(tmp_19, 1505327088, true, CommonDecorationBox$composable$lambda$lambda_2(leadingIconColor, tmp1_safe_receiver));
          var tmp$ret$26;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_2 = $composer_0;
          var $composer_4 = tmp0_remember$composable_2;
          $composer_4.m1r(-838505973);
          sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$25;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_2 = $composer_4;
          var tmp1_cache_2 = $composer_4.y1t(dispatchReceiver_1);
          var tmp$ret$24;
          // Inline function 'kotlin.let' call
          var tmp0_let_2 = tmp0_cache_2.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$23;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_20;
          if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
            var tmp$ret$22;
            // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$22 = ComposableLambda$invoke$ref_22(dispatchReceiver_1);
            var value_2 = tmp$ret$22;
            tmp0_cache_2.x1t(value_2);
            tmp_20 = value_2;
          } else {
            tmp_20 = tmp0_let_2;
          }
          tmp$ret$23 = tmp_20;
          tmp$ret$24 = tmp$ret$23;
          var tmp_21 = tmp$ret$24;
          tmp$ret$25 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
          var tmp0_2 = tmp$ret$25;
          $composer_4.o1r();
          tmp$ret$26 = tmp0_2;
          tmp$ret$27 = tmp$ret$26;
          tmp$ret$28 = tmp$ret$27;
          var tmp0_return_0 = tmp$ret$28;
          tmp$ret$29 = tmp0_return_0;
          tmp$ret$30 = tmp$ret$29;
          tmp_18 = tmp$ret$30;
        }
        var decoratedLeading = tmp_18;
        var tmp_22;
        if (isInterface($colors, TextFieldColorsWithIcons)) {
          $composer_0.m1r(1122161720);
          sourceInformation($composer_0, '166@7059L54');
          var tmp2_group = $colors.ge4($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty >> 27 | 112 & $$dirty1 << 3 | 896 & $$dirty1 << 3).s().y3w_1;
          $composer_0.o1r();
          tmp_22 = tmp2_group;
        } else {
          $composer_0.m1r(1122161817);
          sourceInformation($composer_0, '168@7156L35');
          var tmp3_group = $colors.ce4($enabled._v, $isError._v, $composer_0, 14 & $$dirty >> 27 | 112 & $$dirty1 << 3 | 896 & $$dirty1 >> 3).s().y3w_1;
          $composer_0.o1r();
          tmp_22 = tmp3_group;
        }
        var trailingIconColor = tmp_22;
        var tmp2_safe_receiver = $trailingIcon._v;
        var tmp_23;
        if (tmp2_safe_receiver == null) {
          tmp_23 = null;
        } else {
          var tmp$ret$39;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$38;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$37;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$36;
          // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_24 = $composer_0;
          var dispatchReceiver_2 = composableLambda(tmp_24, -1894727196, true, CommonDecorationBox$composable$lambda$lambda_3(trailingIconColor, tmp2_safe_receiver));
          var tmp$ret$35;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_3 = $composer_0;
          var $composer_5 = tmp0_remember$composable_3;
          $composer_5.m1r(-838505973);
          sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$34;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_3 = $composer_5;
          var tmp1_cache_3 = $composer_5.y1t(dispatchReceiver_2);
          var tmp$ret$33;
          // Inline function 'kotlin.let' call
          var tmp0_let_3 = tmp0_cache_3.w1t();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$32;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_25;
          if (tmp1_cache_3 ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
            var tmp$ret$31;
            // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$31 = ComposableLambda$invoke$ref_23(dispatchReceiver_2);
            var value_3 = tmp$ret$31;
            tmp0_cache_3.x1t(value_3);
            tmp_25 = value_3;
          } else {
            tmp_25 = tmp0_let_3;
          }
          tmp$ret$32 = tmp_25;
          tmp$ret$33 = tmp$ret$32;
          var tmp_26 = tmp$ret$33;
          tmp$ret$34 = (tmp_26 == null ? true : isObject(tmp_26)) ? tmp_26 : THROW_CCE();
          var tmp0_3 = tmp$ret$34;
          $composer_5.o1r();
          tmp$ret$35 = tmp0_3;
          tmp$ret$36 = tmp$ret$35;
          tmp$ret$37 = tmp$ret$36;
          var tmp0_return_1 = tmp$ret$37;
          tmp$ret$38 = tmp0_return_1;
          tmp$ret$39 = tmp$ret$38;
          tmp_23 = tmp$ret$39;
        }
        var decoratedTrailing = tmp_23;
        var tmp3_subject = $type;
        var tmp0_4 = tmp3_subject.h7_1;
        switch (tmp0_4) {
          case 0:
            $composer_0.m1r(1122162153);
            sourceInformation($composer_0, '178@7489L485');
            ;
            TextFieldLayout$composable(decorationBoxModifier, $innerTextField, decoratedLabel, decoratedPlaceholder, decoratedLeading, decoratedTrailing, $singleLine._v, labelProgress, $contentPadding, $composer_0, 112 & $$dirty >> 3 | 3670016 & $$dirty >> 6 | 29360128 & $dirty << 21 | 234881024 & $$dirty1 << 18);
            ;
            $composer_0.o1r();
            ;
            break;
          case 1:
            $composer_0.m1r(1122162709);
            sourceInformation($composer_0, '192@8096L38,210@8904L420,202@8496L994');
            ;
            var tmp$ret$44;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp3_remember$composable = $composer_0;
            var $composer_6 = tmp3_remember$composable;
            $composer_6.m1r(547886695);
            sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
            var tmp$ret$43;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp0_cache_4 = $composer_6;
            var tmp$ret$42;
            // Inline function 'kotlin.let' call
            var tmp0_let_4 = tmp0_cache_4.w1t();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$41;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_27;
            if (false ? true : tmp0_let_4 === Companion_getInstance_0().y1s_1) {
              var tmp$ret$40;
              // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$40 = mutableStateOf(new Size_0(Companion_getInstance_10().q34_1));
              var value_4 = tmp$ret$40;
              tmp0_cache_4.x1t(value_4);
              tmp_27 = value_4;
            } else {
              tmp_27 = tmp0_let_4;
            }
            tmp$ret$41 = tmp_27;
            tmp$ret$42 = tmp$ret$41;
            var tmp_28 = tmp$ret$42;
            tmp$ret$43 = (tmp_28 == null ? true : isObject(tmp_28)) ? tmp_28 : THROW_CCE();
            var tmp0_5 = tmp$ret$43;
            $composer_6.o1r();
            tmp$ret$44 = tmp0_5;

            var labelSize = tmp$ret$44;
            var tmp$ret$51;
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$50;
            // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_29 = $composer_0;
            var dispatchReceiver_3 = composableLambda(tmp_29, 139886979, true, CommonDecorationBox$composable$lambda$lambda_4(labelSize, $contentPadding, $border, $$dirty1));
            var tmp$ret$49;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable_4 = $composer_0;
            var $composer_7 = tmp0_remember$composable_4;
            $composer_7.m1r(-838505973);
            sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$48;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp0_cache_5 = $composer_7;
            var tmp1_cache_4 = $composer_7.y1t(dispatchReceiver_3);
            var tmp$ret$47;
            // Inline function 'kotlin.let' call
            var tmp0_let_5 = tmp0_cache_5.w1t();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$46;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_30;
            if (tmp1_cache_4 ? true : tmp0_let_5 === Companion_getInstance_0().y1s_1) {
              var tmp$ret$45;
              // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$45 = ComposableLambda$invoke$ref_24(dispatchReceiver_3);
              var value_5 = tmp$ret$45;
              tmp0_cache_5.x1t(value_5);
              tmp_30 = value_5;
            } else {
              tmp_30 = tmp0_let_5;
            }
            tmp$ret$46 = tmp_30;
            tmp$ret$47 = tmp$ret$46;
            var tmp_31 = tmp$ret$47;
            tmp$ret$48 = (tmp_31 == null ? true : isObject(tmp_31)) ? tmp_31 : THROW_CCE();
            var tmp0_6 = tmp$ret$48;
            $composer_7.o1r();
            tmp$ret$49 = tmp0_6;
            tmp$ret$50 = tmp$ret$49;
            tmp$ret$51 = tmp$ret$50;

            var drawBorder = tmp$ret$51;
            var tmp_32 = $singleLine._v;
            var tmp$ret$56;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp4_remember$composable = $composer_0;
            var tmp5_remember$composable = 14 & $dirty;
            var $composer_8 = tmp4_remember$composable;
            $composer_8.m1r(-1124426577);
            sourceInformation($composer_8, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
            var tmp$ret$55;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp0_cache_6 = $composer_8;
            var tmp1_cache_5 = !!($composer_8.y1t(labelProgress) | $composer_8.y1t(labelSize));
            var tmp$ret$54;
            // Inline function 'kotlin.let' call
            var tmp0_let_6 = tmp0_cache_6.w1t();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$53;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_33;
            if (tmp1_cache_5 ? true : tmp0_let_6 === Companion_getInstance_0().y1s_1) {
              var tmp$ret$52;
              // Inline function 'androidx.compose.material.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$52 = CommonDecorationBox$composable$lambda$lambda_5(labelProgress, labelSize);
              var value_6 = tmp$ret$52;
              tmp0_cache_6.x1t(value_6);
              tmp_33 = value_6;
            } else {
              tmp_33 = tmp0_let_6;
            }
            tmp$ret$53 = tmp_33;
            tmp$ret$54 = tmp$ret$53;
            var tmp_34 = tmp$ret$54;
            tmp$ret$55 = (tmp_34 == null ? true : isObject(tmp_34)) ? tmp_34 : THROW_CCE();
            var tmp0_7 = tmp$ret$55;
            $composer_8.o1r();
            tmp$ret$56 = tmp0_7;

            OutlinedTextFieldLayout$composable(decorationBoxModifier, $innerTextField, decoratedPlaceholder, decoratedLabel, decoratedLeading, decoratedTrailing, tmp_32, labelProgress, tmp$ret$56, drawBorder, $contentPadding, $composer_0, 805306368 | 112 & $$dirty >> 3 | 3670016 & $$dirty >> 6 | 29360128 & $dirty << 21, 14 & $$dirty1 >> 6);
            ;
            $composer_0.o1r();
            ;
            break;
          default:
            $composer_0.m1r(1122164196);
            $composer_0.o1r();
            break;
        }
        var tmp_35;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_35 = Unit_getInstance();
        }
        tmp_3 = tmp_35;
      } else {
        $composer_0.m1t();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2, p3, p4, p5) {
      return $boundThis.b33(p0, p1, p2, p3, p4, p5);
    };
  }
  function CommonDecorationBox$composable$lambda_1($type, $value, $innerTextField, $visualTransformation, $label, $placeholder, $leadingIcon, $trailingIcon, $singleLine, $enabled, $isError, $interactionSource, $contentPadding, $colors, $border, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      CommonDecorationBox$composable($type, $value, $innerTextField, $visualTransformation, $label, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $singleLine._v, $enabled._v, $isError._v, $interactionSource, $contentPadding, $colors, $border._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function Decoration$composable$lambda$lambda($contentAlpha, $content, $$dirty, $contentColor) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1132188434, $changed, -1, 'androidx.compose.material.Decoration$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:240)');
        }
        if (!($contentAlpha._v == null)) {
          $composer_0.m1r(39074025);
          sourceInformation($composer_0, '242@10036L142');
          CompositionLocalProvider$composable([get_LocalContentAlpha().u28($contentAlpha._v)], $content, $composer_0, 112 & $$dirty >> 6);
          $composer_0.o1r();
        } else {
          $composer_0.m1r(39074205);
          sourceInformation($composer_0, '247@10216L148');
          CompositionLocalProvider$composable([get_LocalContentAlpha().u28(_Color___get_alpha__impl__wcfyv1($contentColor))], $content, $composer_0, 112 & $$dirty >> 6);
          $composer_0.o1r();
        }
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
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Decoration$composable$lambda($contentColor, $contentAlpha, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C240@9912L476:TextFieldImpl.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(494684590, $changed, -1, 'androidx.compose.material.Decoration$composable.<anonymous> (TextFieldImpl.kt:239)');
        }
        var tmp_0 = [get_LocalContentColor().u28(new Color($contentColor))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.material.Decoration$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1132188434, true, Decoration$composable$lambda$lambda($contentAlpha, $content, $$dirty, $contentColor));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.m1r(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.y1t(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.w1t();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material.Decoration$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
          var value = tmp$ret$0;
          tmp0_cache.x1t(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.o1r();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function Decoration$composable$lambda_0($contentColor, $typography, $contentAlpha, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Decoration$composable($contentColor, $typography._v, $contentAlpha._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TextFieldType_Outlined_getInstance() {
    TextFieldType_initEntries();
    return TextFieldType_Outlined_instance;
  }
  function InputPhase_Focused_getInstance() {
    InputPhase_initEntries();
    return InputPhase_Focused_instance;
  }
  function InputPhase_UnfocusedEmpty_getInstance() {
    InputPhase_initEntries();
    return InputPhase_UnfocusedEmpty_instance;
  }
  function InputPhase_UnfocusedNotEmpty_getInstance() {
    InputPhase_initEntries();
    return InputPhase_UnfocusedNotEmpty_instance;
  }
  var properties_initialized_TextFieldImpl_kt_by5wbh;
  function _init_properties_TextFieldImpl_kt__7vp9id() {
    if (!properties_initialized_TextFieldImpl_kt_by5wbh) {
      properties_initialized_TextFieldImpl_kt_by5wbh = true;
      ZeroConstraints = Constraints_0(0, 0, 0, 0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextFieldPadding = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HorizontalIconPadding = _Dp___init__impl__ms3zkb(12);
      var tmp = Companion_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(48);
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function get_DefaultTextStyle() {
    _init_properties_Typography_kt__rm3fch();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    defaultFontFamily = defaultFontFamily === VOID ? Companion_getInstance_21().s4s_1 : defaultFontFamily;
    var tmp;
    if (h1 === VOID) {
      var tmp0_$this = get_DefaultTextStyle();
      var tmp1_fontWeight = Companion_getInstance_22().e4s_1;
      var tmp2_fontSize = get_sp(96);
      var tmp3_letterSpacing = get_sp_0(-1.5);
      tmp = tmp0_$this.s4u(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, tmp3_letterSpacing);
    } else {
      tmp = h1;
    }
    h1 = tmp;
    var tmp_0;
    if (h2 === VOID) {
      var tmp4_$this = get_DefaultTextStyle();
      var tmp5_fontWeight = Companion_getInstance_22().e4s_1;
      var tmp6_fontSize = get_sp(60);
      var tmp7_letterSpacing = get_sp_0(-0.5);
      tmp_0 = tmp4_$this.s4u(VOID, tmp6_fontSize, tmp5_fontWeight, VOID, VOID, VOID, VOID, tmp7_letterSpacing);
    } else {
      tmp_0 = h2;
    }
    h2 = tmp_0;
    var tmp_1;
    if (h3 === VOID) {
      var tmp8_$this = get_DefaultTextStyle();
      var tmp9_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp10_fontSize = get_sp(48);
      var tmp11_letterSpacing = get_sp(0);
      tmp_1 = tmp8_$this.s4u(VOID, tmp10_fontSize, tmp9_fontWeight, VOID, VOID, VOID, VOID, tmp11_letterSpacing);
    } else {
      tmp_1 = h3;
    }
    h3 = tmp_1;
    var tmp_2;
    if (h4 === VOID) {
      var tmp12_$this = get_DefaultTextStyle();
      var tmp13_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp14_fontSize = get_sp(34);
      var tmp15_letterSpacing = get_sp_0(0.25);
      tmp_2 = tmp12_$this.s4u(VOID, tmp14_fontSize, tmp13_fontWeight, VOID, VOID, VOID, VOID, tmp15_letterSpacing);
    } else {
      tmp_2 = h4;
    }
    h4 = tmp_2;
    var tmp_3;
    if (h5 === VOID) {
      var tmp16_$this = get_DefaultTextStyle();
      var tmp17_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp18_fontSize = get_sp(24);
      var tmp19_letterSpacing = get_sp(0);
      tmp_3 = tmp16_$this.s4u(VOID, tmp18_fontSize, tmp17_fontWeight, VOID, VOID, VOID, VOID, tmp19_letterSpacing);
    } else {
      tmp_3 = h5;
    }
    h5 = tmp_3;
    var tmp_4;
    if (h6 === VOID) {
      var tmp20_$this = get_DefaultTextStyle();
      var tmp21_fontWeight = Companion_getInstance_22().g4s_1;
      var tmp22_fontSize = get_sp(20);
      var tmp23_letterSpacing = get_sp_0(0.15);
      tmp_4 = tmp20_$this.s4u(VOID, tmp22_fontSize, tmp21_fontWeight, VOID, VOID, VOID, VOID, tmp23_letterSpacing);
    } else {
      tmp_4 = h6;
    }
    h6 = tmp_4;
    var tmp_5;
    if (subtitle1 === VOID) {
      var tmp24_$this = get_DefaultTextStyle();
      var tmp25_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp26_fontSize = get_sp(16);
      var tmp27_letterSpacing = get_sp_0(0.15);
      tmp_5 = tmp24_$this.s4u(VOID, tmp26_fontSize, tmp25_fontWeight, VOID, VOID, VOID, VOID, tmp27_letterSpacing);
    } else {
      tmp_5 = subtitle1;
    }
    subtitle1 = tmp_5;
    var tmp_6;
    if (subtitle2 === VOID) {
      var tmp28_$this = get_DefaultTextStyle();
      var tmp29_fontWeight = Companion_getInstance_22().g4s_1;
      var tmp30_fontSize = get_sp(14);
      var tmp31_letterSpacing = get_sp_0(0.1);
      tmp_6 = tmp28_$this.s4u(VOID, tmp30_fontSize, tmp29_fontWeight, VOID, VOID, VOID, VOID, tmp31_letterSpacing);
    } else {
      tmp_6 = subtitle2;
    }
    subtitle2 = tmp_6;
    var tmp_7;
    if (body1 === VOID) {
      var tmp32_$this = get_DefaultTextStyle();
      var tmp33_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp34_fontSize = get_sp(16);
      var tmp35_letterSpacing = get_sp_0(0.5);
      tmp_7 = tmp32_$this.s4u(VOID, tmp34_fontSize, tmp33_fontWeight, VOID, VOID, VOID, VOID, tmp35_letterSpacing);
    } else {
      tmp_7 = body1;
    }
    body1 = tmp_7;
    var tmp_8;
    if (body2 === VOID) {
      var tmp36_$this = get_DefaultTextStyle();
      var tmp37_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp38_fontSize = get_sp(14);
      var tmp39_letterSpacing = get_sp_0(0.25);
      tmp_8 = tmp36_$this.s4u(VOID, tmp38_fontSize, tmp37_fontWeight, VOID, VOID, VOID, VOID, tmp39_letterSpacing);
    } else {
      tmp_8 = body2;
    }
    body2 = tmp_8;
    var tmp_9;
    if (button === VOID) {
      var tmp40_$this = get_DefaultTextStyle();
      var tmp41_fontWeight = Companion_getInstance_22().g4s_1;
      var tmp42_fontSize = get_sp(14);
      var tmp43_letterSpacing = get_sp_0(1.25);
      tmp_9 = tmp40_$this.s4u(VOID, tmp42_fontSize, tmp41_fontWeight, VOID, VOID, VOID, VOID, tmp43_letterSpacing);
    } else {
      tmp_9 = button;
    }
    button = tmp_9;
    var tmp_10;
    if (caption === VOID) {
      var tmp44_$this = get_DefaultTextStyle();
      var tmp45_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp46_fontSize = get_sp(12);
      var tmp47_letterSpacing = get_sp_0(0.4);
      tmp_10 = tmp44_$this.s4u(VOID, tmp46_fontSize, tmp45_fontWeight, VOID, VOID, VOID, VOID, tmp47_letterSpacing);
    } else {
      tmp_10 = caption;
    }
    caption = tmp_10;
    var tmp_11;
    if (overline === VOID) {
      var tmp48_$this = get_DefaultTextStyle();
      var tmp49_fontWeight = Companion_getInstance_22().f4s_1;
      var tmp50_fontSize = get_sp(10);
      var tmp51_letterSpacing = get_sp_0(1.5);
      tmp_11 = tmp48_$this.s4u(VOID, tmp50_fontSize, tmp49_fontWeight, VOID, VOID, VOID, VOID, tmp51_letterSpacing);
    } else {
      tmp_11 = overline;
    }
    overline = tmp_11;
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, objectCreate(protoOf(Typography)));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.qdv_1 = h1;
    this.rdv_1 = h2;
    this.sdv_1 = h3;
    this.tdv_1 = h4;
    this.udv_1 = h5;
    this.vdv_1 = h6;
    this.wdv_1 = subtitle1;
    this.xdv_1 = subtitle2;
    this.ydv_1 = body1;
    this.zdv_1 = body2;
    this.adw_1 = button;
    this.bdw_1 = caption;
    this.cdw_1 = overline;
    this.ddw_1 = 0;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.qdv_1.equals(other.qdv_1))
      return false;
    if (!this.rdv_1.equals(other.rdv_1))
      return false;
    if (!this.sdv_1.equals(other.sdv_1))
      return false;
    if (!this.tdv_1.equals(other.tdv_1))
      return false;
    if (!this.udv_1.equals(other.udv_1))
      return false;
    if (!this.vdv_1.equals(other.vdv_1))
      return false;
    if (!this.wdv_1.equals(other.wdv_1))
      return false;
    if (!this.xdv_1.equals(other.xdv_1))
      return false;
    if (!this.ydv_1.equals(other.ydv_1))
      return false;
    if (!this.zdv_1.equals(other.zdv_1))
      return false;
    if (!this.adw_1.equals(other.adw_1))
      return false;
    if (!this.bdw_1.equals(other.bdw_1))
      return false;
    if (!this.cdw_1.equals(other.cdw_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.qdv_1.hashCode();
    result = imul(31, result) + this.rdv_1.hashCode() | 0;
    result = imul(31, result) + this.sdv_1.hashCode() | 0;
    result = imul(31, result) + this.tdv_1.hashCode() | 0;
    result = imul(31, result) + this.udv_1.hashCode() | 0;
    result = imul(31, result) + this.vdv_1.hashCode() | 0;
    result = imul(31, result) + this.wdv_1.hashCode() | 0;
    result = imul(31, result) + this.xdv_1.hashCode() | 0;
    result = imul(31, result) + this.ydv_1.hashCode() | 0;
    result = imul(31, result) + this.zdv_1.hashCode() | 0;
    result = imul(31, result) + this.adw_1.hashCode() | 0;
    result = imul(31, result) + this.bdw_1.hashCode() | 0;
    result = imul(31, result) + this.cdw_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(h1=' + this.qdv_1 + ', h2=' + this.rdv_1 + ', h3=' + this.sdv_1 + ', h4=' + this.tdv_1 + ', h5=' + this.udv_1 + ', h6=' + this.vdv_1 + ', ' + ('subtitle1=' + this.wdv_1 + ', subtitle2=' + this.xdv_1 + ', body1=' + this.ydv_1 + ', ') + ('body2=' + this.zdv_1 + ', button=' + this.adw_1 + ', caption=' + this.bdw_1 + ', overline=' + this.cdw_1 + ')');
  };
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    _init_properties_Typography_kt__rm3fch();
    return !(_this__u8e3s4.z4u() == null) ? _this__u8e3s4 : _this__u8e3s4.s4u(VOID, VOID, VOID, VOID, VOID, default_0);
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      DefaultTextStyle = Companion_getInstance_23().m4u_1.s4u(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle());
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function pullRefresh(_this__u8e3s4, state, enabled) {
    enabled = enabled === VOID ? true : enabled;
    // Inline function 'androidx.compose.ui.platform.inspectable' call
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = pullRefresh$lambda(state, enabled);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectable = tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.material.pullrefresh.pullRefresh.<anonymous>' call
    Companion_getInstance();
    var tmp_0 = Companion_getInstance();
    var tmp_1 = PullRefreshState$onPull$ref(state);
    tmp$ret$1 = pullRefresh_0(tmp_0, tmp_1, pullRefresh$_anonymous_$onRelease$ref_am08ha_0(state), enabled);
    return inspectableWrapper(_this__u8e3s4, tmp0_inspectable, tmp$ret$1);
  }
  function pullRefresh_0(_this__u8e3s4, onPull, onRelease, enabled) {
    enabled = enabled === VOID ? true : enabled;
    // Inline function 'androidx.compose.ui.platform.inspectable' call
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = pullRefresh$lambda_0(onPull, onRelease, enabled);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectable = tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.material.pullrefresh.pullRefresh.<anonymous>' call
    Companion_getInstance();
    tmp$ret$1 = nestedScroll(Companion_getInstance(), new PullRefreshNestedScrollConnection(onPull, onRelease, enabled));
    return inspectableWrapper(_this__u8e3s4, tmp0_inspectable, tmp$ret$1);
  }
  function $onPreFlingCOROUTINE$1(_this__u8e3s4, available, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qe4_1 = _this__u8e3s4;
    this.re4_1 = available;
  }
  protoOf($onPreFlingCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.qe4_1.te4_1(_Velocity___get_y__impl__239yhc(this.re4_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Velocity_0(Velocity(0.0, ARGUMENT));
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
  function PullRefreshNestedScrollConnection(onPull, onRelease, enabled) {
    this.se4_1 = onPull;
    this.te4_1 = onRelease;
    this.ue4_1 = enabled;
  }
  protoOf(PullRefreshNestedScrollConnection).r6b = function (available, source) {
    return !this.ue4_1 ? Companion_getInstance_4().k33_1 : (source === Companion_getInstance_24().c6d_1 ? _Offset___get_y__impl__8bzhra(available) < 0 : false) ? Offset(0.0, this.se4_1(_Offset___get_y__impl__8bzhra(available))) : Companion_getInstance_4().k33_1;
  };
  protoOf(PullRefreshNestedScrollConnection).s6b = function (consumed, available, source) {
    return !this.ue4_1 ? Companion_getInstance_4().k33_1 : (source === Companion_getInstance_24().c6d_1 ? _Offset___get_y__impl__8bzhra(available) > 0 : false) ? Offset(0.0, this.se4_1(_Offset___get_y__impl__8bzhra(available))) : Companion_getInstance_4().k33_1;
  };
  protoOf(PullRefreshNestedScrollConnection).t6b = function (available, $completion) {
    var tmp = new $onPreFlingCOROUTINE$1(this, available, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    var tmp_0 = tmp.ml();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return new Velocity_0(tmp_0.f37_1);
  };
  function pullRefresh$_anonymous_$onRelease_2wfivx(receiver, p0, $completion) {
    return receiver.fe5(p0);
  }
  function pullRefresh$lambda($state, $enabled) {
    return function ($this$null) {
      $this$null.u5n_1 = 'pullRefresh';
      $this$null.w5n_1.a5o('state', $state);
      $this$null.w5n_1.a5o('enabled', $enabled);
      return Unit_getInstance();
    };
  }
  function PullRefreshState$onPull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.ge5(p0);
    };
    l.callableName = 'onPull';
    return l;
  }
  function pullRefresh$_anonymous_$onRelease$ref_am08ha($boundThis) {
    this.he5_1 = $boundThis;
  }
  protoOf(pullRefresh$_anonymous_$onRelease$ref_am08ha).ie5 = function (p0, $completion) {
    return pullRefresh$_anonymous_$onRelease_2wfivx(this.he5_1, p0, $completion);
  };
  protoOf(pullRefresh$_anonymous_$onRelease$ref_am08ha).yl = function (p1, $completion) {
    return this.ie5((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  function pullRefresh$_anonymous_$onRelease$ref_am08ha_0($boundThis) {
    var i = new pullRefresh$_anonymous_$onRelease$ref_am08ha($boundThis);
    var l = function (p0, $completion) {
      return i.ie5(p0, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pullRefresh$lambda_0($onPull, $onRelease, $enabled) {
    return function ($this$null) {
      $this$null.u5n_1 = 'pullRefresh';
      $this$null.w5n_1.a5o('onPull', $onPull);
      $this$null.w5n_1.a5o('onRelease', $onRelease);
      $this$null.w5n_1.a5o('enabled', $enabled);
      return Unit_getInstance();
    };
  }
  function PullRefreshState$animateIndicatorTo$slambda$slambda$lambda(this$0) {
    return function (value, _anonymous_parameter_1__qggqgd) {
      _set__position__npkbi5(this$0, value);
      return Unit_getInstance();
    };
  }
  function PullRefreshState$animateIndicatorTo$slambda$slambda(this$0, $offset, resultContinuation) {
    this.re5_1 = this$0;
    this.se5_1 = $offset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PullRefreshState$animateIndicatorTo$slambda$slambda).x8l = function ($completion) {
    var tmp = this.v50($completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(PullRefreshState$animateIndicatorTo$slambda$slambda).w50 = function ($completion) {
    return this.x8l($completion);
  };
  protoOf(PullRefreshState$animateIndicatorTo$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = _get__position__i0pa2f(this.re5_1);
            suspendResult = animate(tmp_0, this.se5_1, VOID, VOID, PullRefreshState$animateIndicatorTo$slambda$slambda$lambda(this.re5_1), this);
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
  protoOf(PullRefreshState$animateIndicatorTo$slambda$slambda).v50 = function (completion) {
    return new PullRefreshState$animateIndicatorTo$slambda$slambda(this.re5_1, this.se5_1, completion);
  };
  function PullRefreshState$animateIndicatorTo$slambda$slambda_0(this$0, $offset, resultContinuation) {
    var i = new PullRefreshState$animateIndicatorTo$slambda$slambda(this$0, $offset, resultContinuation);
    var l = function ($completion) {
      return i.x8l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function _get_adjustedDistancePulled__i7ukv0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    adjustedDistancePulled$factory();
    return $this.xe4_1.s();
  }
  function _set__refreshing__yvmvi7($this, _set____db54di) {
    _refreshing$factory();
    return $this.ye4_1.f1d(_set____db54di);
  }
  function _get__refreshing__5v3051($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    _refreshing$factory_0();
    return $this.ye4_1.s();
  }
  function _set__position__npkbi5($this, _set____db54di) {
    _position$factory();
    return $this.ze4_1.e2h(_set____db54di);
  }
  function _get__position__i0pa2f($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    _position$factory_0();
    return $this.ze4_1.f2h();
  }
  function _set_distancePulled__b4adoi($this, _set____db54di) {
    distancePulled$factory();
    return $this.ae5_1.e2h(_set____db54di);
  }
  function _get_distancePulled__eet2cy($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    distancePulled$factory_0();
    return $this.ae5_1.f2h();
  }
  function _set__threshold__94vi6t($this, _set____db54di) {
    _threshold$factory();
    return $this.be5_1.e2h(_set____db54di);
  }
  function _get__threshold__o743c1($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    _threshold$factory_0();
    return $this.be5_1.f2h();
  }
  function _set__refreshingOffset__60pul0($this, _set____db54di) {
    _refreshingOffset$factory();
    return $this.ce5_1.e2h(_set____db54di);
  }
  function _get__refreshingOffset__rqiqvc($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    _refreshingOffset$factory_0();
    return $this.ce5_1.f2h();
  }
  function animateIndicatorTo($this, offset) {
    return launch($this.ve4_1, VOID, VOID, PullRefreshState$animateIndicatorTo$slambda_0($this, offset, null));
  }
  function calculateIndicatorPosition($this) {
    var tmp;
    if (_get_adjustedDistancePulled__i7ukv0($this) <= $this.ue5()) {
      tmp = _get_adjustedDistancePulled__i7ukv0($this);
    } else {
      // Inline function 'kotlin.math.abs' call
      var tmp0_abs = $this.te5();
      var overshootPercent = Math.abs(tmp0_abs) - 1.0;
      var linearTension = coerceIn_0(overshootPercent, 0.0, 2.0);
      // Inline function 'kotlin.math.pow' call
      var tensionPercent = linearTension - Math.pow(linearTension, 2.0) / 4;
      var extraOffset = $this.ue5() * tensionPercent;
      tmp = $this.ue5() + extraOffset;
    }
    return tmp;
  }
  function PullRefreshState$adjustedDistancePulled$delegate$lambda(this$0) {
    return function () {
      return _get_distancePulled__eet2cy(this$0) * 0.5;
    };
  }
  function PullRefreshState$animateIndicatorTo$slambda(this$0, $offset, resultContinuation) {
    this.de6_1 = this$0;
    this.ee6_1 = $offset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PullRefreshState$animateIndicatorTo$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(PullRefreshState$animateIndicatorTo$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PullRefreshState$animateIndicatorTo$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.de6_1.de5_1.mab(VOID, PullRefreshState$animateIndicatorTo$slambda$slambda_0(this.de6_1, this.ee6_1, null), this);
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
  protoOf(PullRefreshState$animateIndicatorTo$slambda).u1e = function ($this$launch, completion) {
    var i = new PullRefreshState$animateIndicatorTo$slambda(this.de6_1, this.ee6_1, completion);
    i.fe6_1 = $this$launch;
    return i;
  };
  function PullRefreshState$animateIndicatorTo$slambda_0(this$0, $offset, resultContinuation) {
    var i = new PullRefreshState$animateIndicatorTo$slambda(this$0, $offset, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PullRefreshState(animationScope, onRefreshState, refreshingOffset, threshold) {
    this.ve4_1 = animationScope;
    this.we4_1 = onRefreshState;
    var tmp = this;
    tmp.xe4_1 = derivedStateOf(PullRefreshState$adjustedDistancePulled$delegate$lambda(this));
    this.ye4_1 = mutableStateOf(false);
    this.ze4_1 = mutableFloatStateOf(0.0);
    this.ae5_1 = mutableFloatStateOf(0.0);
    this.be5_1 = mutableFloatStateOf(threshold);
    this.ce5_1 = mutableFloatStateOf(refreshingOffset);
    this.de5_1 = new MutatorMutex();
    this.ee5_1 = 8;
  }
  protoOf(PullRefreshState).te5 = function () {
    return _get_adjustedDistancePulled__i7ukv0(this) / this.ue5();
  };
  protoOf(PullRefreshState).ge6 = function () {
    return _get__refreshing__5v3051(this);
  };
  protoOf(PullRefreshState).ue5 = function () {
    return _get__threshold__o743c1(this);
  };
  protoOf(PullRefreshState).ge5 = function (pullDelta) {
    if (_get__refreshing__5v3051(this))
      return 0.0;
    var newOffset = coerceAtLeast(_get_distancePulled__eet2cy(this) + pullDelta, 0.0);
    var dragConsumed = newOffset - _get_distancePulled__eet2cy(this);
    _set_distancePulled__b4adoi(this, newOffset);
    _set__position__npkbi5(this, calculateIndicatorPosition(this));
    return dragConsumed;
  };
  protoOf(PullRefreshState).fe5 = function (velocity) {
    if (this.ge6())
      return 0.0;
    if (_get_adjustedDistancePulled__i7ukv0(this) > this.ue5()) {
      this.we4_1.s()();
    }
    animateIndicatorTo(this, 0.0);
    var consumed = _get_distancePulled__eet2cy(this) === 0.0 ? 0.0 : velocity < 0.0 ? 0.0 : velocity;
    _set_distancePulled__b4adoi(this, 0.0);
    return consumed;
  };
  protoOf(PullRefreshState).he6 = function (refreshing) {
    if (!(_get__refreshing__5v3051(this) === refreshing)) {
      _set__refreshing__yvmvi7(this, refreshing);
      _set_distancePulled__b4adoi(this, 0.0);
      animateIndicatorTo(this, refreshing ? _get__refreshingOffset__rqiqvc(this) : 0.0);
    }
  };
  protoOf(PullRefreshState).ie6 = function (threshold) {
    _set__threshold__94vi6t(this, threshold);
  };
  protoOf(PullRefreshState).je6 = function (refreshingOffset) {
    if (!(_get__refreshingOffset__rqiqvc(this) === refreshingOffset)) {
      _set__refreshingOffset__60pul0(this, refreshingOffset);
      if (this.ge6()) {
        animateIndicatorTo(this, refreshingOffset);
      }
    }
  };
  function rememberPullRefreshState$composable(refreshing, onRefresh, refreshThreshold, refreshingOffset, $composer, $changed, $default) {
    var refreshThreshold_0 = refreshThreshold;
    var refreshingOffset_0 = refreshingOffset;
    var $composer_0 = $composer;
    $composer_0.m1r(1781343126);
    sourceInformation($composer_0, 'C(rememberPullRefreshState$composable)P(2!1,1:c#ui.unit.Dp,3:c#ui.unit.Dp)64@2591L24,65@2641L31,*69@2757L7,74@2890L104,78@3000L152:PullRefreshState.kt#t44y28');
    if (!(($default & 4) === 0))
      refreshThreshold_0 = PullRefreshDefaults_getInstance().ke6_1;
    if (!(($default & 8) === 0))
      refreshingOffset_0 = PullRefreshDefaults_getInstance().le6_1;
    if (isTraceInProgress()) {
      traceEventStart(1781343126, $changed, -1, 'androidx.compose.material.pullrefresh.rememberPullRefreshState$composable (PullRefreshState.kt:56)');
    }
    // Inline function 'kotlin.require' call
    var tmp = refreshThreshold_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(Dp__compareTo_impl_tlg3dl(tmp, tmp$ret$0) > 0)) {
      // Inline function 'androidx.compose.material.pullrefresh.rememberPullRefreshState$composable.<anonymous>' call
      var message = 'The refresh trigger must be greater than zero!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
    var getContext = {_v: null};
    var $composer_1 = $composer_0;
    $composer_1.m1r(102870005);
    sourceInformation($composer_1, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
    if (!(1 === 0)) {
      getContext._v = rememberPullRefreshState$composable$lambda;
    }
    var composer = $composer_1;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_1;
    $composer_2.m1r(547886695);
    sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
      var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
      $composer_2.x1t(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_2.o1r();
    var wrapper = tmp0;
    var tmp0_0 = wrapper.u2a_1;
    $composer_1.o1r();
    var scope = tmp0_0;
    var onRefreshState = rememberUpdatedState$composable(onRefresh, $composer_0, 14 & $changed >> 3);
    var thresholdPx;
    var refreshingOffsetPx;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp3_$get_current$$composable_fm67ua = get_LocalDensity();
    var $composer_3 = $composer_0;
    sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_3.g1u(tmp3_$get_current$$composable_fm67ua);
    sourceInformationMarkerEnd($composer_3);
    // Inline function 'kotlin.contracts.contract' call
    thresholdPx = tmp0_1.s35(refreshThreshold_0);
    refreshingOffsetPx = tmp0_1.s35(refreshingOffset_0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_4 = $composer_0;
    $composer_4.m1r(-838505973);
    sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_4.y1t(scope);
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_4.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_2;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
      // Inline function 'androidx.compose.material.pullrefresh.rememberPullRefreshState$composable.<anonymous>' call
      var value_0 = new PullRefreshState(scope, onRefreshState, refreshingOffsetPx, thresholdPx);
      $composer_4.x1t(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = tmp0_let_0;
    }
    var tmp_3 = tmp_2;
    var tmp0_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    $composer_4.o1r();
    var state = tmp0_2;
    SideEffect$composable(rememberPullRefreshState$composable$lambda_0(state, refreshing, thresholdPx, refreshingOffsetPx), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return state;
  }
  function PullRefreshDefaults() {
    PullRefreshDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ke6_1 = _Dp___init__impl__ms3zkb(80);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.le6_1 = _Dp___init__impl__ms3zkb(56);
    this.me6_1 = 0;
  }
  var PullRefreshDefaults_instance;
  function PullRefreshDefaults_getInstance() {
    if (PullRefreshDefaults_instance == null)
      new PullRefreshDefaults();
    return PullRefreshDefaults_instance;
  }
  function rememberPullRefreshState$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberPullRefreshState$composable$lambda_0($state, $refreshing, $thresholdPx, $refreshingOffsetPx) {
    return function () {
      $state.he6($refreshing);
      $state.ie6($thresholdPx);
      $state.je6($refreshingOffsetPx);
      return Unit_getInstance();
    };
  }
  function adjustedDistancePulled$factory() {
    return getPropertyCallableRef('adjustedDistancePulled', 1, KProperty1, function (receiver) {
      return _get_adjustedDistancePulled__i7ukv0(receiver);
    }, null);
  }
  function _refreshing$factory() {
    return getPropertyCallableRef('_refreshing', 1, KMutableProperty1, function (receiver) {
      return _get__refreshing__5v3051(receiver);
    }, function (receiver, value) {
      return _set__refreshing__yvmvi7(receiver, value);
    });
  }
  function _refreshing$factory_0() {
    return getPropertyCallableRef('_refreshing', 1, KMutableProperty1, function (receiver) {
      return _get__refreshing__5v3051(receiver);
    }, function (receiver, value) {
      return _set__refreshing__yvmvi7(receiver, value);
    });
  }
  function _position$factory() {
    return getPropertyCallableRef('_position', 1, KMutableProperty1, function (receiver) {
      return _get__position__i0pa2f(receiver);
    }, function (receiver, value) {
      return _set__position__npkbi5(receiver, value);
    });
  }
  function _position$factory_0() {
    return getPropertyCallableRef('_position', 1, KMutableProperty1, function (receiver) {
      return _get__position__i0pa2f(receiver);
    }, function (receiver, value) {
      return _set__position__npkbi5(receiver, value);
    });
  }
  function distancePulled$factory() {
    return getPropertyCallableRef('distancePulled', 1, KMutableProperty1, function (receiver) {
      return _get_distancePulled__eet2cy(receiver);
    }, function (receiver, value) {
      return _set_distancePulled__b4adoi(receiver, value);
    });
  }
  function distancePulled$factory_0() {
    return getPropertyCallableRef('distancePulled', 1, KMutableProperty1, function (receiver) {
      return _get_distancePulled__eet2cy(receiver);
    }, function (receiver, value) {
      return _set_distancePulled__b4adoi(receiver, value);
    });
  }
  function _threshold$factory() {
    return getPropertyCallableRef('_threshold', 1, KMutableProperty1, function (receiver) {
      return _get__threshold__o743c1(receiver);
    }, function (receiver, value) {
      return _set__threshold__94vi6t(receiver, value);
    });
  }
  function _threshold$factory_0() {
    return getPropertyCallableRef('_threshold', 1, KMutableProperty1, function (receiver) {
      return _get__threshold__o743c1(receiver);
    }, function (receiver, value) {
      return _set__threshold__94vi6t(receiver, value);
    });
  }
  function _refreshingOffset$factory() {
    return getPropertyCallableRef('_refreshingOffset', 1, KMutableProperty1, function (receiver) {
      return _get__refreshingOffset__rqiqvc(receiver);
    }, function (receiver, value) {
      return _set__refreshingOffset__60pul0(receiver, value);
    });
  }
  function _refreshingOffset$factory_0() {
    return getPropertyCallableRef('_refreshingOffset', 1, KMutableProperty1, function (receiver) {
      return _get__refreshingOffset__rqiqvc(receiver);
    }, function (receiver, value) {
      return _set__refreshingOffset__60pul0(receiver, value);
    });
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  function DropdownMenuItem$composable(onClick, modifier, enabled, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-51727703);
    sourceInformation($composer_0, 'C(DropdownMenuItem$composable)P(5,4,2,1,3)61@7091L39,52@2139L227:Menu.jsNative.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1t(enabled_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentPadding_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(interactionSource_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          contentPadding_0._v = MenuDefaults_getInstance().ee1_1;
        }
        if (!(($default & 16) === 0)) {
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
            // Inline function 'androidx.compose.material.DropdownMenuItem$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-51727703, $dirty, -1, 'androidx.compose.material.DropdownMenuItem$composable (Menu.jsNative.kt:44)');
      }
      DropdownMenuItemContent$composable(onClick, modifier_0._v, enabled_0._v, contentPadding_0._v, interactionSource_0._v, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty, 0);
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
      tmp0_safe_receiver.z28(DropdownMenuItem$composable$lambda(onClick, modifier_0, enabled_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function DropdownMenuItem$composable$lambda($onClick, $modifier, $enabled, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DropdownMenuItem$composable($onClick, $modifier._v, $enabled._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function PlatformMaterialTheme$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1609905806);
    sourceInformation($composer_0, 'C(PlatformMaterialTheme$composable)27@1085L6,28@1140L6,29@1217L6,25@958L338:MaterialTheme.js.kt#jmzs0o');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1609905806, $dirty, -1, 'androidx.compose.material.PlatformMaterialTheme$composable (MaterialTheme.js.kt:24)');
      }
      CompositionLocalProvider$composable([get_LocalScrollbarStyle().u28(defaultScrollbarStyle().pdg(VOID, VOID, MaterialTheme_getInstance().ydu($composer_0, 6).tdu_1, VOID, Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.12), Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().zdu($composer_0, 6).xdw(), 0.5)))], content, $composer_0, 112 & $dirty << 3);
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
      tmp0_safe_receiver.z28(PlatformMaterialTheme$composable$lambda(content, $changed));
    }
  }
  function PlatformMaterialTheme$composable$lambda($content, $$changed) {
    return function ($composer, $force) {
      PlatformMaterialTheme$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function getString$composable(string, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-2069953370);
    sourceInformation($composer_0, 'C(getString$composable)P(0:c#material.Strings):Strings.js.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-2069953370, $changed, -1, 'androidx.compose.material.getString$composable (Strings.js.kt:21)');
    }
    var tmp0 = string === Companion_getInstance_30().ie2_1 ? 'Navigation menu' : string === Companion_getInstance_30().je2_1 ? 'Close navigation menu' : string === Companion_getInstance_30().ke2_1 ? 'Close sheet' : string === Companion_getInstance_30().le2_1 ? 'Invalid input' : '';
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function AlertDialog$composable(onDismissRequest, buttons, modifier, title, text, shape, backgroundColor, contentColor, properties, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var title_0 = {_v: title};
    var text_0 = {_v: text};
    var shape_0 = {_v: shape};
    var backgroundColor_0 = {_v: new Color(backgroundColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var properties_0 = {_v: properties};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(412352698);
    sourceInformation($composer_0, 'C(AlertDialog$composable)P(4,1,3,8,7,6,0:c#ui.graphics.Color,2:c#ui.graphics.Color)134@6017L6,137@6075L6,138@6117L32,136@6052L366:AlertDialog.skiko.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d1u(onDismissRequest) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(buttons) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.d1u(title_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(text_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.y1t(shape_0._v) : false) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundColor_0._v.y3w_1))) : false) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.c1u(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.y3w_1))) : false) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1t(properties_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          title_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          text_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = MaterialTheme_getInstance().ydu($composer_0, 6).udu_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          backgroundColor_0._v = new Color(MaterialTheme_getInstance().zdu($composer_0, 6).odv());
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(backgroundColor_0._v.y3w_1, $composer_0, 14 & $dirty >> 18));
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          properties_0._v = DialogProperties_init_$Create$();
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(412352698, $dirty, -1, 'androidx.compose.material.AlertDialog$composable (AlertDialog.skiko.kt:125)');
      }
      var tmp = properties_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.AlertDialog$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 434899425, true, AlertDialog$composable$lambda(buttons, modifier_0, title_0, text_0, shape_0, backgroundColor_0, contentColor_0, $dirty));
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
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.AlertDialog$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.o1r();
      Dialog$composable(onDismissRequest, tmp, tmp0, $composer_0, 384 | 14 & $dirty | 112 & $dirty >> 21, 0);
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
      tmp0_safe_receiver.z28(AlertDialog$composable$lambda_0(onDismissRequest, buttons, modifier_0, title_0, text_0, shape_0, backgroundColor_0, contentColor_0, properties_0, $changed, $default));
    }
  }
  function AlertDialog$composable$lambda($buttons, $modifier, $title, $text, $shape, $backgroundColor, $contentColor, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C140@6153L259:AlertDialog.skiko.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(434899425, $changed, -1, 'androidx.compose.material.AlertDialog$composable.<anonymous> (AlertDialog.skiko.kt:139)');
        }
        AlertDialogContent$composable($buttons, $modifier._v, $title._v, $text._v, $shape._v, $backgroundColor._v.y3w_1, $contentColor._v.y3w_1, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty >> 3 | 896 & $$dirty >> 3 | 7168 & $$dirty >> 3 | 57344 & $$dirty >> 3 | 458752 & $$dirty >> 3 | 3670016 & $$dirty >> 3, 0);
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
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function AlertDialog$composable$lambda_0($onDismissRequest, $buttons, $modifier, $title, $text, $shape, $backgroundColor, $contentColor, $properties, $$changed, $$default) {
    return function ($composer, $force) {
      AlertDialog$composable($onDismissRequest, $buttons, $modifier._v, $title._v, $text._v, $shape._v, $backgroundColor._v.y3w_1, $contentColor._v.y3w_1, $properties._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DropdownMenu$composable(expanded, onDismissRequest, modifier, offset, scrollState, properties, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var offset_0 = {_v: new DpOffset(offset)};
    var scrollState_0 = {_v: scrollState};
    var properties_0 = {_v: properties};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-426479239);
    sourceInformation($composer_0, 'C(DropdownMenu$composable)P(1,4,2,3:c#ui.unit.DpOffset,6,5)118@5768L21,105@5227L42,109@5417L51,110@5504L7,114@5628L131,124@6082L89,120@5905L674:Menu.skiko.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1t(expanded) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(onDismissRequest) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c1u(_DpOffset___get_packedValue__impl__7zqn8y(offset_0._v.n36_1)) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.y1t(scrollState_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1t(properties_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      $composer_0.f1t();
      if (($changed & 1) === 0 ? true : $composer_0.c1t()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp = _Dp___init__impl__ms3zkb(0);
          var tmp$ret$1;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
          offset_0._v = new DpOffset(DpOffset_0(tmp, tmp$ret$1));
        }
        if (!(($default & 16) === 0)) {
          scrollState_0._v = rememberScrollState$composable(0, $composer_0, 0, 1);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          properties_0._v = PopupProperties_init_$Create$(true);
        }
      } else {
        $composer_0.m1t();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.g1t();
      if (isTraceInProgress()) {
        traceEventStart(-426479239, $dirty, -1, 'androidx.compose.material.DropdownMenu$composable (Menu.skiko.kt:96)');
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_0().y1s_1) {
        // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>' call
        var value = new MutableTransitionState(false);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      var expandedStates = tmp0;
      expandedStates.y8z(expanded);
      if (expandedStates.c8z() ? true : expandedStates.q8x()) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.m1r(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_2.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>' call
          var value_0 = mutableStateOf(new TransformOrigin_0(Companion_getInstance_25().n5x_1));
          $composer_2.x1t(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        $composer_2.o1r();
        var transformOriginState = tmp0_0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalDensity();
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_3.g1u(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_3);
        var density = tmp0_1;
        var tmp_4 = offset_0._v.n36_1;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.m1r(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_4.y1t(transformOriginState);
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = $composer_4.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>' call
          var value_1 = DropdownMenu$composable$lambda_3(transformOriginState);
          $composer_4.x1t(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        $composer_4.o1r();
        var popupPositionProvider = new DropdownMenuPositionProvider(tmp_4, density, tmp0_2);
        var focusManager$delegate = mutableStateOf(null);
        var inputModeManager$delegate = mutableStateOf(null);
        var tmp_7 = properties_0._v;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.m1r(-1124426577);
        sourceInformation($composer_5, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = !!($composer_5.y1t(focusManager$delegate) | $composer_5.y1t(inputModeManager$delegate));
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = $composer_5.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>' call
          var value_2 = DropdownMenu$composable$lambda_4(focusManager$delegate, inputModeManager$delegate);
          $composer_5.x1t(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_3 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        $composer_5.o1r();
        var tmp_10 = tmp0_3;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_11, -1241068163, true, DropdownMenu$composable$lambda_5(expandedStates, transformOriginState, scrollState_0, modifier_0, content, $dirty, focusManager$delegate, inputModeManager$delegate));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_0;
        $composer_6.m1r(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_6.y1t(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = $composer_6.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_12;
        if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_0().y1s_1) {
          // Inline function 'androidx.compose.material.DropdownMenu$composable.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_29(dispatchReceiver);
          $composer_6.x1t(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = tmp0_let_3;
        }
        var tmp_13 = tmp_12;
        var tmp0_4 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
        $composer_6.o1r();
        Popup$composable(popupPositionProvider, onDismissRequest, tmp_7, null, tmp_10, tmp0_4, $composer_0, 196608 | 112 & $dirty | 896 & $dirty >> 9, 8);
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
      tmp0_safe_receiver.z28(DropdownMenu$composable$lambda_6(expanded, onDismissRequest, modifier_0, offset_0, scrollState_0, properties_0, content, $changed, $default));
    }
  }
  function handlePopupOnKeyEvent(keyEvent, focusManager, inputModeManager) {
    var tmp;
    if (get_type(keyEvent) === Companion_getInstance_29().v6a_1) {
      var tmp0_subject = get_key(keyEvent);
      var tmp_0;
      if (equals(tmp0_subject, Companion_getInstance_28().r7u_1)) {
        if (inputModeManager == null)
          null;
        else
          inputModeManager.r6a(Companion_getInstance_26().l6a_1);
        if (focusManager == null)
          null;
        else
          focusManager.n5t(Companion_getInstance_27().o5r_1);
        tmp_0 = true;
      } else if (equals(tmp0_subject, Companion_getInstance_28().q7u_1)) {
        if (inputModeManager == null)
          null;
        else
          inputModeManager.r6a(Companion_getInstance_26().l6a_1);
        if (focusManager == null)
          null;
        else
          focusManager.n5t(Companion_getInstance_27().p5r_1);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function DropdownMenu$composable$lambda($focusManager$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focusManager', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $focusManager$delegate.s();
  }
  function DropdownMenu$composable$lambda_0($focusManager$delegate, value) {
    getLocalDelegateReference('focusManager', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $focusManager$delegate.f1d(value);
  }
  function DropdownMenu$composable$lambda_1($inputModeManager$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('inputModeManager', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inputModeManager$delegate.s();
  }
  function DropdownMenu$composable$lambda_2($inputModeManager$delegate, value) {
    getLocalDelegateReference('inputModeManager', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $inputModeManager$delegate.f1d(value);
  }
  function DropdownMenu$composable$lambda_3($transformOriginState) {
    return function (parentBounds, menuBounds) {
      $transformOriginState.f1d(new TransformOrigin_0(calculateTransformOrigin(parentBounds, menuBounds)));
      return Unit_getInstance();
    };
  }
  function DropdownMenu$composable$lambda_4($focusManager$delegate, $inputModeManager$delegate) {
    return function (it) {
      return handlePopupOnKeyEvent(it.s6a_1, DropdownMenu$composable$lambda($focusManager$delegate), DropdownMenu$composable$lambda_1($inputModeManager$delegate));
    };
  }
  function DropdownMenu$composable$lambda_5($expandedStates, $transformOriginState, $scrollState, $modifier, $content, $$dirty, $focusManager$delegate, $inputModeManager$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C128@6230L7,129@6291L7,130@6311L258:Menu.skiko.kt#jmzs0o');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-1241068163, $changed, -1, 'androidx.compose.material.DropdownMenu$composable.<anonymous> (Menu.skiko.kt:127)');
        }
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalFocusManager();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.g1u(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        DropdownMenu$composable$lambda_0($focusManager$delegate, tmp$ret$0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalInputModeManager();
        var tmp3_$get_current$$composable_fm67ua = $composer_0;
        var $composer_2 = tmp3_$get_current$$composable_fm67ua;
        sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.g1u(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_2);
        tmp$ret$1 = tmp0_0;
        DropdownMenu$composable$lambda_2($inputModeManager$delegate, tmp$ret$1);
        DropdownMenuContent$composable($expandedStates, $transformOriginState, $scrollState._v, $modifier._v, $content, $composer_0, 896 & $$dirty >> 6 | 7168 & $$dirty << 3 | 57344 & $$dirty >> 6, 0);
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
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function DropdownMenu$composable$lambda_6($expanded, $onDismissRequest, $modifier, $offset, $scrollState, $properties, $content, $$changed, $$default) {
    return function ($composer, $force) {
      DropdownMenu$composable($expanded, $onDismissRequest, $modifier._v, $offset._v.n36_1, $scrollState._v, $properties._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).f6w = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g6w = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h6w = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i6w = maxIntrinsicHeight;
  protoOf(MinimumInteractiveComponentSizeModifier).e5i = minIntrinsicWidth_0;
  protoOf(MinimumInteractiveComponentSizeModifier).f5i = minIntrinsicHeight_0;
  protoOf(MinimumInteractiveComponentSizeModifier).g5i = maxIntrinsicWidth_0;
  protoOf(MinimumInteractiveComponentSizeModifier).h5i = maxIntrinsicHeight_0;
  protoOf(MinimumInteractiveComponentSizeModifier).s5f = foldIn;
  protoOf(MinimumInteractiveComponentSizeModifier).t5f = all;
  protoOf(MinimumInteractiveComponentSizeModifier).n5f = then;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).f6w = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).g6w = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).h6w = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).i6w = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_1).f6w = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_1).g6w = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_1).h6w = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_1).i6w = maxIntrinsicHeight;
  protoOf(PullRefreshNestedScrollConnection).u6b = onPostFling;
  //endregion
  //region block: init
  BorderId = 'border';
  AnimationDuration = 150;
  LeadingId = 'Leading';
  TrailingId = 'Trailing';
  PlaceholderId = 'Hint';
  LabelId = 'Label';
  TextFieldId = 'TextField';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = pullRefresh;
  _.$_$.b = rememberPullRefreshState$composable;
  _.$_$.c = AlertDialog$composable;
  _.$_$.d = Button$composable;
  _.$_$.e = CircularProgressIndicator$composable;
  _.$_$.f = DropdownMenu$composable;
  _.$_$.g = DropdownMenuItem$composable;
  _.$_$.h = Icon$composable;
  _.$_$.i = IconButton$composable;
  _.$_$.j = LinearProgressIndicator$composable;
  _.$_$.k = get_LocalContentAlpha;
  _.$_$.l = MaterialTheme$composable;
  _.$_$.m = OutlinedTextField$composable;
  _.$_$.n = Snackbar$composable;
  _.$_$.o = Surface$composable;
  _.$_$.p = Text$composable;
  _.$_$.q = darkColors;
  _.$_$.r = lightColors;
  _.$_$.s = minimumInteractiveComponentSize_0;
  _.$_$.t = Typography_init_$Create$;
  _.$_$.u = ButtonDefaults_getInstance;
  _.$_$.v = ContentAlpha_getInstance;
  _.$_$.w = MaterialTheme_getInstance;
  _.$_$.x = TextFieldDefaults_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material.js.map
