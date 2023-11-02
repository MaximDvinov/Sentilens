(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-foundation-layout.js', './Kamel-kamel-core.js', './compose-multiplatform-core-animation.js', './compose-multiplatform-core-foundation.js', './xmlutil-core-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-geometry.js', './skiko-kjs.js', './ktor-ktor-utils.js', './xmlutil-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./Kamel-kamel-core.js'), require('./compose-multiplatform-core-animation.js'), require('./compose-multiplatform-core-foundation.js'), require('./xmlutil-core-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./skiko-kjs.js'), require('./ktor-ktor-utils.js'), require('./xmlutil-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['Kamel-kamel-core'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'Kamel-kamel-core' was not found. Please, check whether 'Kamel-kamel-core' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-animation'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-animation' was not found. Please, check whether 'compose-multiplatform-core-animation' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['xmlutil-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'xmlutil-core-js-ir' was not found. Please, check whether 'xmlutil-core-js-ir' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'Kamel-kamel-image'.");
    }
    if (typeof this['xmlutil-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kamel-kamel-image'. Its dependency 'xmlutil-serialization-js-ir' was not found. Please, check whether 'xmlutil-serialization-js-ir' is loaded prior to 'Kamel-kamel-image'.");
    }
    root['Kamel-kamel-image'] = factory(typeof this['Kamel-kamel-image'] === 'undefined' ? {} : this['Kamel-kamel-image'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-foundation-layout'], this['Kamel-kamel-core'], this['compose-multiplatform-core-animation'], this['compose-multiplatform-core-foundation'], this['xmlutil-core-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-geometry'], this['skiko-kjs'], this['ktor-ktor-utils'], this['xmlutil-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_media_kamel_kamel_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_io_github_pdvrieze_xmlutil_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko, kotlin_io_ktor_ktor_utils, kotlin_io_github_pdvrieze_xmlutil_serialization) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Error_0 = kotlin_kotlin.$_$.ej;
  var Error_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.u8;
  var get_DefaultAlpha = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.v8;
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
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var Failure = kotlin_media_kamel_kamel_core.$_$.k;
  var Success = kotlin_media_kamel_kamel_core.$_$.m;
  var Loading = kotlin_media_kamel_kamel_core.$_$.l;
  var Crossfade$composable = kotlin_org_jetbrains_compose_animation_animation.$_$.d;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var Image$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var KamelConfigBuilder = kotlin_media_kamel_kamel_core.$_$.c;
  var get_DefaultCacheSize = kotlin_media_kamel_kamel_core.$_$.b;
  var stringMapper = kotlin_media_kamel_kamel_core.$_$.g;
  var urlMapper = kotlin_media_kamel_kamel_core.$_$.i;
  var uriMapper = kotlin_media_kamel_kamel_core.$_$.h;
  var fileFetcher = kotlin_media_kamel_kamel_core.$_$.e;
  var httpFetcher = kotlin_media_kamel_kamel_core.$_$.f;
  var Companion_getInstance_4 = kotlin_media_kamel_kamel_core.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var mapNotNull = kotlin_kotlin.$_$.zf;
  var asElement = kotlin_io_github_pdvrieze_xmlutil_core.$_$.u;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var removeSuffix = kotlin_kotlin.$_$.jh;
  var toDouble = kotlin_kotlin.$_$.bi;
  var endsWith = kotlin_kotlin.$_$.sg;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var startsWith = kotlin_kotlin.$_$.rh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toUInt = kotlin_kotlin.$_$.li;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var Enum = kotlin_kotlin.$_$.dj;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var isBlank = kotlin_kotlin.$_$.yg;
  var sequence = kotlin_kotlin.$_$.gg;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var get_DefaultRotation = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var get_DefaultPivotX = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var get_DefaultPivotY = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var get_DefaultScaleX = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_DefaultScaleY = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var get_DefaultTranslationX = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var get_DefaultTranslationY = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var removeLastOrNull = kotlin_kotlin.$_$.aa;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var filter = kotlin_kotlin.$_$.vf;
  var toList = kotlin_kotlin.$_$.jg;
  var checkIndexOverflow = kotlin_kotlin.$_$.e7;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var to = kotlin_kotlin.$_$.el;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var SequenceScope = kotlin_kotlin.$_$.qf;
  var iterator = kotlin_io_github_pdvrieze_xmlutil_core.$_$.a1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var ImageBitmap_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var getKClass = kotlin_kotlin.$_$.e;
  var Decoder = kotlin_media_kamel_kamel_core.$_$.j;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var decodeToString = kotlin_kotlin.$_$.og;
  var ImageVector = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var Companion_getInstance_14 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_16 = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var numberToInt = kotlin_kotlin.$_$.td;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Companion_getInstance_17 = kotlin_io_github_pdvrieze_xmlutil_serialization.$_$.b;
  var ElementSerializer_getInstance = kotlin_io_github_pdvrieze_xmlutil_serialization.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(PainterFailure, 'PainterFailure', classMeta, Error_0);
  setMetadataFor(DrawCache, 'DrawCache', classMeta);
  setMetadataFor(Group, 'Group', classMeta, Enum);
  setMetadataFor(BuildContext, 'BuildContext', classMeta);
  setMetadataFor(_get_childrenSequence_$slambda_9jpw3j, '<get-childrenSequence>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($decodeCOROUTINE$0, '$decodeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ImageBitmapDecoder, 'ImageBitmapDecoder', objectMeta, VOID, [Decoder], VOID, VOID, [2]);
  setMetadataFor($decodeCOROUTINE$1, '$decodeCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ImageVectorDecoder, 'ImageVectorDecoder', objectMeta, VOID, [Decoder], VOID, VOID, [2]);
  setMetadataFor($decodeCOROUTINE$2, '$decodeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(SvgDecoder, 'SvgDecoder', objectMeta, VOID, [Decoder], VOID, VOID, [2]);
  setMetadataFor(SVGPainter, 'SVGPainter', classMeta, Painter);
  //endregion
  function PainterFailure() {
    Error_init_$Init$('Failed to return a Painter', this);
    captureStack(this, PainterFailure);
    this.gi9_1 = 0;
  }
  function KamelImage$composable(resource, contentDescription, modifier, alignment, contentScale, alpha, colorFilter, onLoading, onFailure, contentAlignment, animationSpec, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var contentScale_0 = {_v: contentScale};
    var alpha_0 = {_v: alpha};
    var colorFilter_0 = {_v: colorFilter};
    var onLoading_0 = {_v: onLoading};
    var onFailure_0 = {_v: onFailure};
    var contentAlignment_0 = {_v: contentAlignment};
    var animationSpec_0 = {_v: animationSpec};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-1177169231);
    sourceInformation($composer_0, 'C(KamelImage$composable)P(10,5,7!1,6!1,3,9,8,4)');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(resource) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(alignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentScale_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.b1u(alpha_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1t(colorFilter_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.d1u(onLoading_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.d1u(onFailure_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentAlignment_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1t(animationSpec_0._v) ? 4 : 2);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 11) === 2)) ? true : !$composer_0.b1t()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 8) === 0)) {
        alignment_0._v = Companion_getInstance_0().s5e_1;
      }
      if (!(($default & 16) === 0)) {
        contentScale_0._v = Companion_getInstance_1().f5m_1;
      }
      if (!(($default & 32) === 0)) {
        alpha_0._v = get_DefaultAlpha();
      }
      if (!(($default & 64) === 0)) {
        colorFilter_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        onLoading_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        onFailure_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().s5e_1;
      }
      if (!(($default & 1024) === 0)) {
        animationSpec_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1177169231, $dirty, $dirty1, 'io.kamel.image.KamelImage$composable (KamelImage.kt:43)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.kamel.image.KamelImage$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 694309927, true, KamelImage$composable$lambda(contentDescription, alignment_0, contentScale_0, alpha_0, colorFilter_0, $dirty));
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
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().y1s_1) {
        // Inline function 'io.kamel.image.KamelImage$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      var onSuccess = tmp0;
      KamelImageBox$composable(resource, modifier_0._v, contentAlignment_0._v, animationSpec_0._v, onLoading_0._v, onFailure_0._v, onSuccess, $composer_0, 1572864 | 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 21 | 7168 & $dirty1 << 9 | 57344 & $dirty >> 9 | 458752 & $dirty >> 9, 0);
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
      tmp0_safe_receiver.z28(KamelImage$composable$lambda_0(resource, contentDescription, modifier_0, alignment_0, contentScale_0, alpha_0, colorFilter_0, onLoading_0, onFailure_0, contentAlignment_0, animationSpec_0, $changed, $changed1, $default));
    }
  }
  function KamelImageBox$composable(resource, modifier, contentAlignment, animationSpec, onLoading, onFailure, onSuccess, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var animationSpec_0 = {_v: animationSpec};
    var onLoading_0 = {_v: onLoading};
    var onFailure_0 = {_v: onFailure};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1768283407);
    sourceInformation($composer_0, 'C(KamelImageBox$composable)P(6,2,1!1,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(resource) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1t(contentAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1t(animationSpec_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.d1u(onLoading_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.d1u(onFailure_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.d1u(onSuccess) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.b1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().s5e_1;
      }
      if (!(($default & 8) === 0)) {
        animationSpec_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        onLoading_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        onFailure_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1768283407, $dirty, -1, 'io.kamel.image.KamelImageBox$composable (KamelImage.kt:87)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp4_Box$composable = 14 & $dirty >> 3 | 112 & $dirty >> 3;
      var modifier_1 = modifier_0._v;
      var contentAlignment_1 = contentAlignment_0._v;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.m1r(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment_1 = Companion_getInstance_0().o5e_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints, $composer_1, 14 & tmp4_Box$composable >> 3 | 112 & tmp4_Box$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_1;
      var tmp2_Layout$composable = 112 & tmp4_Box$composable << 3;
      var modifier_2 = tmp0_Layout$composable;
      var $composer_2 = $composer_1;
      $composer_2.m1r(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_3().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
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
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_3().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_3().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_3().a6t_1;
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
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'io.kamel.image.KamelImageBox$composable.<anonymous>' call
      var tmp5_anonymous = BoxScopeInstance_getInstance();
      var tmp7_anonymous = 6 | 112 & tmp4_Box$composable >> 6;
      var $composer_5 = $composer_4;
      if (!(animationSpec_0._v == null)) {
        $composer_5.m1r(1021796517);
        var tmp_1 = animationSpec_0._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'io.kamel.image.KamelImageBox$composable.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_5;
        var dispatchReceiver = composableLambda(tmp_2, -2144215356, true, KamelImageBox$composable$lambda(onLoading_0, tmp5_anonymous, tmp7_anonymous, $dirty, onSuccess, onFailure_0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_5;
        $composer_6.m1r(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_6.y1t(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let = $composer_6.w1t();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().y1s_1) {
          // Inline function 'io.kamel.image.KamelImageBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_6.x1t(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        $composer_6.o1r();
        Crossfade$composable(resource, null, tmp_1, null, tmp0, $composer_5, 24576 | 14 & $dirty | 896 & $dirty >> 3, 10);
        $composer_5.o1r();
      } else {
        $composer_5.m1r(1021796977);
        if (resource instanceof Loading) {
          $composer_5.m1r(1021797048);
          if (!(onLoading_0._v == null))
            onLoading_0._v(tmp5_anonymous, resource.ogc_1, $composer_5, 14 & tmp7_anonymous | 896 & $dirty >> 6);
          $composer_5.o1r();
        } else {
          if (resource instanceof Success) {
            $composer_5.m1r(1021797139);
            onSuccess(tmp5_anonymous, resource.kgc_1, $composer_5, 14 & tmp7_anonymous | 896 & $dirty >> 12);
            $composer_5.o1r();
          } else {
            if (resource instanceof Failure) {
              $composer_5.m1r(1021797204);
              if (!(onFailure_0._v == null))
                onFailure_0._v(tmp5_anonymous, resource.ggc_1, $composer_5, 14 & tmp7_anonymous | 896 & $dirty >> 9);
              $composer_5.o1r();
            } else {
              $composer_5.m1r(1021797270);
              $composer_5.o1r();
            }
          }
        }
        $composer_5.o1r();
      }
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
      tmp0_safe_receiver.z28(KamelImageBox$composable$lambda_0(resource, modifier_0, contentAlignment_0, animationSpec_0, onLoading_0, onFailure_0, onSuccess, $changed, $default));
    }
  }
  function KamelImage$composable$lambda($contentDescription, $alignment, $contentScale, $alpha, $colorFilter, $$dirty) {
    return function ($this$null, painter, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.y1t(painter) ? 32 : 16);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 721) === 144) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(694309927, $dirty, -1, 'io.kamel.image.KamelImage$composable.<anonymous> (KamelImage.kt:45)');
        }
        Image$composable(painter, $contentDescription, fillMaxSize(Companion_getInstance()), $alignment._v, $contentScale._v, $alpha._v, $colorFilter._v, $composer_0, 384 | 14 & $dirty >> 3 | 112 & $$dirty | 7168 & $$dirty | 57344 & $$dirty | 458752 & $$dirty | 3670016 & $$dirty, 0);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.a33(p0, p1, p2, p3);
    };
  }
  function KamelImage$composable$lambda_0($resource, $contentDescription, $modifier, $alignment, $contentScale, $alpha, $colorFilter, $onLoading, $onFailure, $contentAlignment, $animationSpec, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      KamelImage$composable($resource, $contentDescription, $modifier._v, $alignment._v, $contentScale._v, $alpha._v, $colorFilter._v, $onLoading._v, $onFailure._v, $contentAlignment._v, $animationSpec._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function KamelImageBox$composable$lambda($onLoading, $tmp5_anonymous, $tmp7_anonymous, $$dirty, $onSuccess, $onFailure) {
    return function (animatedResource, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1t(animatedResource) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(-2144215356, $dirty, -1, 'io.kamel.image.KamelImageBox$composable.<anonymous>.<anonymous> (KamelImage.kt:91)');
        }
        var tmp0_subject = animatedResource;
        if (tmp0_subject instanceof Loading) {
          $composer_0.m1r(-263237902);
          if (!($onLoading._v == null))
            $onLoading._v($tmp5_anonymous, animatedResource.ogc_1, $composer_0, 14 & $tmp7_anonymous | 896 & $$dirty >> 6);
          $composer_0.o1r();
        } else {
          if (tmp0_subject instanceof Success) {
            $composer_0.m1r(-263237799);
            $onSuccess($tmp5_anonymous, animatedResource.kgc_1, $composer_0, 14 & $tmp7_anonymous | 896 & $$dirty >> 12);
            $composer_0.o1r();
          } else {
            if (tmp0_subject instanceof Failure) {
              $composer_0.m1r(-263237722);
              if (!($onFailure._v == null))
                $onFailure._v($tmp5_anonymous, animatedResource.ggc_1, $composer_0, 14 & $tmp7_anonymous | 896 & $$dirty >> 9);
              $composer_0.o1r();
            } else {
              $composer_0.m1r(-263237644);
              $composer_0.o1r();
            }
          }
        }
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
    return function (p0, p1, p2) {
      return $boundThis.z32(p0, p1, p2);
    };
  }
  function KamelImageBox$composable$lambda_0($resource, $modifier, $contentAlignment, $animationSpec, $onLoading, $onFailure, $onSuccess, $$changed, $$default) {
    return function ($composer, $force) {
      KamelImageBox$composable($resource, $modifier._v, $contentAlignment._v, $animationSpec._v, $onLoading._v, $onFailure._v, $onSuccess, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_LocalKamelConfig() {
    _init_properties_KamelConfig_kt__q0bmjy();
    return LocalKamelConfig;
  }
  var LocalKamelConfig;
  function get_Default(_this__u8e3s4) {
    _init_properties_KamelConfig_kt__q0bmjy();
    // Inline function 'io.kamel.core.config.KamelConfig' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new KamelConfigBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.kamel.image.config.<get-Default>.<anonymous>' call
    tmp0_apply.sgk_1 = get_DefaultCacheSize();
    tmp0_apply.tgk_1 = get_DefaultCacheSize();
    tmp0_apply.ugk_1 = get_DefaultCacheSize();
    imageBitmapDecoder(tmp0_apply);
    imageVectorDecoder(tmp0_apply);
    svgDecoder(tmp0_apply);
    stringMapper(tmp0_apply);
    urlMapper(tmp0_apply);
    uriMapper(tmp0_apply);
    fileFetcher(tmp0_apply);
    httpFetcher(tmp0_apply);
    return tmp0_apply.df();
  }
  function imageBitmapDecoder(_this__u8e3s4) {
    _init_properties_KamelConfig_kt__q0bmjy();
    return _this__u8e3s4.zgk(ImageBitmapDecoder_getInstance());
  }
  function imageVectorDecoder(_this__u8e3s4) {
    _init_properties_KamelConfig_kt__q0bmjy();
    return _this__u8e3s4.zgk(ImageVectorDecoder_getInstance());
  }
  function svgDecoder(_this__u8e3s4) {
    _init_properties_KamelConfig_kt__q0bmjy();
    return _this__u8e3s4.zgk(SvgDecoder_getInstance());
  }
  function LocalKamelConfig$lambda() {
    _init_properties_KamelConfig_kt__q0bmjy();
    return get_Default(Companion_getInstance_4());
  }
  var properties_initialized_KamelConfig_kt_l57csw;
  function _init_properties_KamelConfig_kt__q0bmjy() {
    if (!properties_initialized_KamelConfig_kt_l57csw) {
      properties_initialized_KamelConfig_kt_l57csw = true;
      LocalKamelConfig = staticCompositionLocalOf(LocalKamelConfig$lambda);
    }
  }
  function filterIsElement(_this__u8e3s4) {
    return mapNotNull(_this__u8e3s4, filterIsElement$lambda);
  }
  function filterIsElement$lambda(it) {
    var tmp = asElement(it instanceof Node ? it : THROW_CCE());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function clear(_this__u8e3s4, $this) {
    _this__u8e3s4.k4b(Companion_getInstance_5().q3x_1, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_6().t3v_1);
  }
  function DrawCache() {
    this.hi9_1 = null;
    this.ii9_1 = null;
    this.ji9_1 = null;
    this.ki9_1 = LayoutDirection_Ltr_getInstance();
    this.li9_1 = Companion_getInstance_7().z36_1;
    this.mi9_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).f62 = function (size, density, layoutDirection, block) {
    this.ji9_1 = density;
    this.ki9_1 = layoutDirection;
    var targetImage = this.hi9_1;
    var targetCanvas = this.ii9_1;
    if (((targetImage == null ? true : targetCanvas == null) ? true : _IntSize___get_width__impl__d9yl4o(size) > targetImage.v33()) ? true : _IntSize___get_height__impl__prv63b(size) > targetImage.w33()) {
      targetImage = ImageBitmap(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
      targetCanvas = Canvas(targetImage);
      this.hi9_1 = targetImage;
      this.ii9_1 = targetCanvas;
    }
    this.li9_1 = size;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp0_draw = this.mi9_1;
    var tmp1_draw = targetCanvas;
    var tmp2_draw = toSize(size);
    var tmp0_container = tmp0_draw.y49_1;
    var prevDensity = tmp0_container.y4();
    var prevLayoutDirection = tmp0_container.z4();
    var prevCanvas = tmp0_container.db();
    var prevSize = tmp0_container.a4b();
    // Inline function 'kotlin.apply' call
    var tmp0_apply = tmp0_draw.y49_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.w4a_1 = density;
    tmp0_apply.x4a_1 = layoutDirection;
    tmp0_apply.y4a_1 = tmp1_draw;
    tmp0_apply.z4a_1 = tmp2_draw;
    tmp1_draw.f3z();
    // Inline function 'DrawCache.drawCachedImage.<anonymous>' call
    clear(tmp0_draw, this);
    block(tmp0_draw);
    tmp1_draw.g3z();
    // Inline function 'kotlin.apply' call
    var tmp1_apply = tmp0_draw.y49_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.w4a_1 = prevDensity;
    tmp1_apply.x4a_1 = prevLayoutDirection;
    tmp1_apply.y4a_1 = prevCanvas;
    tmp1_apply.z4a_1 = prevSize;
    targetImage.y43();
  };
  protoOf(DrawCache).g62 = function (target, alpha, colorFilter) {
    var targetImage = this.hi9_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(targetImage == null)) {
      // Inline function 'DrawCache.drawInto.<anonymous>' call
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.m4b(targetImage, VOID, this.li9_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  function parseDp(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (_this__u8e3s4 == null) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0.0);
    } else if (endsWith(_this__u8e3s4, 'dp')) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'kotlin.text.toFloat' call
      var tmp0_toFloat = removeSuffix(_this__u8e3s4, 'dp');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_get_dp_ujoszc = toDouble(tmp0_toFloat);
      tmp = _Dp___init__impl__ms3zkb(tmp1_get_dp_ujoszc);
    } else if (endsWith(_this__u8e3s4, 'px')) {
      var tmp$ret$7;
      // Inline function 'kotlin.text.toFloat' call
      var tmp2_toFloat = removeSuffix(_this__u8e3s4, 'px');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = toDouble(tmp2_toFloat);
      tmp = density.a36(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_8().z45_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_8().a46_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown fillType: ' + fillType);
    }
    return tmp;
  }
  function parseStrokeCap(strokeCap) {
    var tmp;
    switch (strokeCap) {
      case 'butt':
        tmp = Companion_getInstance_9().m46_1;
        break;
      case 'round':
        tmp = Companion_getInstance_9().n46_1;
        break;
      case 'square':
        tmp = Companion_getInstance_9().o46_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeCap: ' + strokeCap);
    }
    return tmp;
  }
  function parseStrokeJoin(strokeJoin) {
    var tmp;
    switch (strokeJoin) {
      case 'miter':
        tmp = Companion_getInstance_10().q46_1;
        break;
      case 'round':
        tmp = Companion_getInstance_10().r46_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_10().s46_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeJoin: ' + strokeJoin);
    }
    return tmp;
  }
  function parseColorValue(color) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith(color, '#')) {
      // Inline function 'parseColorValue.<anonymous>' call
      var message = 'Invalid color value ' + color;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (color.length) {
      case 7:
        // Inline function 'kotlin.UInt.toInt' call

        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$2 = color.substring(1);
        var tmp1_toInt = toUInt(tmp$ret$2, 16);
        tmp = _UInt___get_data__impl__f0vqqw(tmp1_toInt) | -16777216;
        break;
      case 9:
        // Inline function 'kotlin.UInt.toInt' call

        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$5 = color.substring(1);
        var tmp2_toInt = toUInt(tmp$ret$5, 16);
        tmp = _UInt___get_data__impl__f0vqqw(tmp2_toInt);
        break;
      case 4:
        // Inline function 'kotlin.UInt.toInt' call

        var tmp$ret$8;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$8 = color.substring(1);
        var tmp3_toInt = toUInt(tmp$ret$8, 16);
        var v = _UInt___get_data__impl__f0vqqw(tmp3_toInt);
        var k = imul(v >> 8 & 15, 1114112);
        k = k | imul(v >> 4 & 15, 4352);
        k = k | imul(v & 15, 17);
        tmp = k | -16777216;
        break;
      case 5:
        // Inline function 'kotlin.UInt.toInt' call

        var tmp$ret$11;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$11 = color.substring(1);
        var tmp4_toInt = toUInt(tmp$ret$11, 16);
        var v_0 = _UInt___get_data__impl__f0vqqw(tmp4_toInt);
        var k_0 = imul(v_0 >> 12 & 15, 285212672);
        k_0 = k_0 | imul(v_0 >> 8 & 15, 1114112);
        k_0 = k_0 | imul(v_0 >> 4 & 15, 4352);
        k_0 = k_0 | imul(v_0 & 15, 17);
        tmp = k_0 | -16777216;
        break;
      default:
        tmp = -16777216;
        break;
    }
    return tmp;
  }
  function parseTileMode(tileMode) {
    var tmp;
    switch (tileMode) {
      case 'clamp':
        tmp = Companion_getInstance_11().c3x_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_11().d3x_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_11().e3x_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function parseVectorRoot(_this__u8e3s4, density) {
    var context = new BuildContext();
    var tmp = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'width'), density);
    var tmp_0 = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'height'), density);
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportWidth');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportHeight');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var builder = new Builder(VOID, tmp, tmp_0, tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    parseVectorNodes(_this__u8e3s4, builder, context);
    return builder.df();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_getInstance();
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  function Group(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Group_Real_getInstance() {
    Group_initEntries();
    return Group_Real_instance;
  }
  function Group_Virtual_getInstance() {
    Group_initEntries();
    return Group_Virtual_instance;
  }
  function BuildContext() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ni9_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.getAttributeNS(namespace, name);
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_0;
      if (isBlank(value)) {
        // Inline function 'attributeOrNull.<anonymous>' call
        tmp_0 = null;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.forEach' call
    var tmp0_iterator = filterIsElement(get_childrenSequence(_this__u8e3s4)).d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'parseVectorNodes.<anonymous>' call
      parseVectorNode(element, builder, context);
    }
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.nodeName) {
      case 'path':
        parsePath(_this__u8e3s4, builder);
        break;
      case 'clip-path':
        parseClipPath(_this__u8e3s4, builder, context);
        break;
      case 'group':
        parseGroup(_this__u8e3s4, builder, context);
        break;
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parsePath(_this__u8e3s4, builder) {
    var tmp = addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData'));
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillType');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseFillType(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new PathFillType(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_8().z45_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_1;
    var tmp2_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_5 = parseStringBrush(tmp3_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp5_elvis_lhs == null) {
      var tmp4_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_7 = parseElementBrush(tmp4_safe_receiver);
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = tmp5_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillAlpha');
    var tmp_9;
    if (tmp6_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_9 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_9;
    var tmp_10 = tmp7_elvis_lhs == null ? 1.0 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
    var tmp_11;
    if (tmp8_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_11 = parseStringBrush(tmp8_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_11;
    var tmp_12;
    if (tmp10_elvis_lhs == null) {
      var tmp9_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
      var tmp_13;
      if (tmp9_safe_receiver == null) {
        tmp_13 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_13 = parseElementBrush(tmp9_safe_receiver);
      }
      tmp_12 = tmp_13;
    } else {
      tmp_12 = tmp10_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeAlpha');
    var tmp_15;
    if (tmp11_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_15 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_15;
    var tmp_16 = tmp12_elvis_lhs == null ? 1.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeWidth');
    var tmp_17;
    if (tmp13_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_17 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_17;
    var tmp_18 = tmp14_elvis_lhs == null ? 1.0 : tmp14_elvis_lhs;
    var tmp15_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineCap');
    var tmp_19;
    if (tmp15_safe_receiver == null) {
      tmp_19 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_19 = parseStrokeCap(tmp15_safe_receiver);
    }
    var tmp16_elvis_lhs = tmp_19;
    var tmp_20;
    var tmp_21 = tmp16_elvis_lhs;
    if ((tmp_21 == null ? null : new StrokeCap(tmp_21)) == null) {
      tmp_20 = Companion_getInstance_9().m46_1;
    } else {
      tmp_20 = tmp16_elvis_lhs;
    }
    var tmp_22 = tmp_20;
    var tmp17_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineJoin');
    var tmp_23;
    if (tmp17_safe_receiver == null) {
      tmp_23 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_23 = parseStrokeJoin(tmp17_safe_receiver);
    }
    var tmp18_elvis_lhs = tmp_23;
    var tmp_24;
    var tmp_25 = tmp18_elvis_lhs;
    if ((tmp_25 == null ? null : new StrokeJoin(tmp_25)) == null) {
      tmp_24 = Companion_getInstance_10().q46_1;
    } else {
      tmp_24 = tmp18_elvis_lhs;
    }
    var tmp_26 = tmp_24;
    var tmp19_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeMiterLimit');
    var tmp_27;
    if (tmp19_safe_receiver == null) {
      tmp_27 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_27 = toDouble(tmp19_safe_receiver);
    }
    var tmp20_elvis_lhs = tmp_27;
    var tmp_28 = tmp20_elvis_lhs == null ? 1.0 : tmp20_elvis_lhs;
    var tmp21_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathStart');
    var tmp_29;
    if (tmp21_safe_receiver == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_29 = toDouble(tmp21_safe_receiver);
    }
    var tmp22_elvis_lhs = tmp_29;
    var tmp_30 = tmp22_elvis_lhs == null ? 0.0 : tmp22_elvis_lhs;
    var tmp23_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathEnd');
    var tmp_31;
    if (tmp23_safe_receiver == null) {
      tmp_31 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_31 = toDouble(tmp23_safe_receiver);
    }
    var tmp24_elvis_lhs = tmp_31;
    var tmp_32 = tmp24_elvis_lhs == null ? 1.0 : tmp24_elvis_lhs;
    var tmp25_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathOffset');
    var tmp_33;
    if (tmp25_safe_receiver == null) {
      tmp_33 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_33 = toDouble(tmp25_safe_receiver);
    }
    var tmp26_elvis_lhs = tmp_33;
    builder.g63(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.e63(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.ni9_1.a(Group_Virtual_getInstance());
  }
  function parseGroup(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'rotation');
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = toDouble(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_1 = tmp2_elvis_lhs == null ? get_DefaultRotation() : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotX');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_2;
    var tmp_3 = tmp4_elvis_lhs == null ? get_DefaultPivotX() : tmp4_elvis_lhs;
    var tmp5_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotY');
    var tmp_4;
    if (tmp5_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp5_safe_receiver);
    }
    var tmp6_elvis_lhs = tmp_4;
    var tmp_5 = tmp6_elvis_lhs == null ? get_DefaultPivotY() : tmp6_elvis_lhs;
    var tmp7_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleX');
    var tmp_6;
    if (tmp7_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = toDouble(tmp7_safe_receiver);
    }
    var tmp8_elvis_lhs = tmp_6;
    var tmp_7 = tmp8_elvis_lhs == null ? get_DefaultScaleX() : tmp8_elvis_lhs;
    var tmp9_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleY');
    var tmp_8;
    if (tmp9_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = toDouble(tmp9_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_8;
    var tmp_9 = tmp10_elvis_lhs == null ? get_DefaultScaleY() : tmp10_elvis_lhs;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateX');
    var tmp_10;
    if (tmp11_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_10 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_10;
    var tmp_11 = tmp12_elvis_lhs == null ? get_DefaultTranslationX() : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateY');
    var tmp_12;
    if (tmp13_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_12 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_12;
    builder.d63(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? get_DefaultTranslationY() : tmp14_elvis_lhs, get_EmptyPath());
    context.ni9_1.a(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.ni9_1);
      builder.f63();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var tmp0_elvis_lhs = _this__u8e3s4.lookupPrefix(namespace);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var prefix = tmp;
    // Inline function 'kotlin.sequences.find' call
    var tmp0_find = filterIsElement(get_childrenSequence(_this__u8e3s4));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'apptAttr.<anonymous>' call
        if ((element.namespaceURI === 'http://schemas.android.com/aapt' ? element.localName === 'attr' : false) ? element.getAttribute('name') === prefix + ':' + name : false) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function parseElementBrush(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.find' call
    var tmp0_find = filterIsElement(get_childrenSequence(_this__u8e3s4));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'parseElementBrush.<anonymous>' call
        if (element.nodeName === 'gradient') {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function parseGradient(_this__u8e3s4) {
    switch (attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'type')) {
      case 'linear':
        return parseLinearGradient(_this__u8e3s4);
      case 'radial':
        return parseRadialGradient(_this__u8e3s4);
      case 'sweep':
        return parseSweepGradient(_this__u8e3s4);
      default:
        return null;
    }
  }
  function parseLinearGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_12();
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endX');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endY');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_7 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8 = Offset(tmp_6, tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs);
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_9;
    if (tmp8_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_9 = parseTileMode(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_9;
    var tmp_10;
    var tmp_11 = tmp9_elvis_lhs;
    if ((tmp_11 == null ? null : new TileMode(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_11().c3x_1;
    } else {
      tmp_10 = tmp9_elvis_lhs;
    }
    return tmp.x3w(tmp_0, tmp_4, tmp_8, tmp_10);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_12();
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'gradientRadius');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_7 = parseTileMode(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8;
    var tmp_9 = tmp7_elvis_lhs;
    if ((tmp_9 == null ? null : new TileMode(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_11().c3x_1;
    } else {
      tmp_8 = tmp7_elvis_lhs;
    }
    return tmp.i3x(tmp_0, tmp_4, tmp_6, tmp_8);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_12();
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    return tmp.j3x(tmp_0, Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs));
  }
  function parseColorStops(_this__u8e3s4) {
    var tmp = filterIsElement(get_childrenSequence(_this__u8e3s4));
    var items = toList(filter(tmp, parseColorStops$lambda));
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_mapIndexedNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = items.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0_anonymous = checkIndexOverflow(tmp1);
      // Inline function 'parseColorStops.<anonymous>' call
      var tmp0_safe_receiver = parseColorStop(item, tmp0_anonymous / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapIndexedNotNullTo.a(tmp0_safe_receiver);
      }
    }
    var colorStops = tmp0_mapIndexedNotNullTo;
    if (colorStops.l()) {
      var tmp0_safe_receiver_0 = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startColor');
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_0 = parseColorValue(tmp0_safe_receiver_0);
      }
      var startColor = tmp_0;
      var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerColor');
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_1 = parseColorValue(tmp1_safe_receiver);
      }
      var centerColor = tmp_1;
      var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endColor');
      var tmp_2;
      if (tmp2_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_2 = parseColorValue(tmp2_safe_receiver);
      }
      var endColor = tmp_2;
      if (!(startColor == null)) {
        colorStops.a(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.a(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.a(to(1.0, new Color_0(Color(endColor))));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(colorStops);
  }
  function parseColorStop(_this__u8e3s4, defaultOffset) {
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'offset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var offset = tmp1_elvis_lhs == null ? defaultOffset : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'color');
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseColorValue(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var color = tmp_1;
    return to(offset, new Color_0(Color(color)));
  }
  function _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation) {
    this.wi9_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).aia = function ($this$sequence, $completion) {
    var tmp = this.bia($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).yl = function (p1, $completion) {
    return this.aia(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            var tmp_0 = this;
            tmp_0.yi9_1 = iterator(this.wi9_1.childNodes);
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.yi9_1.e()) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.zi9_1 = this.yi9_1.f();
            this.dl_1 = 2;
            suspendResult = this.xi9_1.i5(this.zi9_1, this);
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).bia = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.wi9_1, completion);
    i.xi9_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.aia($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function parseColorStops$lambda(it) {
    return it.nodeName === 'item';
  }
  function $decodeCOROUTINE$0(_this__u8e3s4, channel, resourceConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kia_1 = _this__u8e3s4;
    this.lia_1 = channel;
    this.mia_1 = resourceConfig;
  }
  protoOf($decodeCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.nia_1 = Companion_getInstance_13();
            this.dl_1 = 1;
            suspendResult = toByteArray(this.lia_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.nia_1.t3f(ARGUMENT);
            return toComposeImageBitmap(ARGUMENT_0);
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
  function ImageBitmapDecoder() {
    ImageBitmapDecoder_instance = this;
    this.oia_1 = getKClass(ImageBitmap_0);
  }
  protoOf(ImageBitmapDecoder).hge = function () {
    return this.oia_1;
  };
  protoOf(ImageBitmapDecoder).pia = function (channel, resourceConfig, $completion) {
    var tmp = new $decodeCOROUTINE$0(this, channel, resourceConfig, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ImageBitmapDecoder).ngc = function (channel, resourceConfig, $completion) {
    return this.pia(channel, resourceConfig, $completion);
  };
  var ImageBitmapDecoder_instance;
  function ImageBitmapDecoder_getInstance() {
    if (ImageBitmapDecoder_instance == null)
      new ImageBitmapDecoder();
    return ImageBitmapDecoder_instance;
  }
  function $decodeCOROUTINE$1(_this__u8e3s4, channel, resourceConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yia_1 = _this__u8e3s4;
    this.zia_1 = channel;
    this.aib_1 = resourceConfig;
  }
  protoOf($decodeCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = toByteArray(this.zia_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var xml = decodeToString(ARGUMENT);
            return loadXmlImageVector(xml, this.aib_1.q35());
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
  function ImageVectorDecoder() {
    ImageVectorDecoder_instance = this;
    this.bib_1 = getKClass(ImageVector);
  }
  protoOf(ImageVectorDecoder).hge = function () {
    return this.bib_1;
  };
  protoOf(ImageVectorDecoder).cib = function (channel, resourceConfig, $completion) {
    var tmp = new $decodeCOROUTINE$1(this, channel, resourceConfig, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ImageVectorDecoder).ngc = function (channel, resourceConfig, $completion) {
    return this.cib(channel, resourceConfig, $completion);
  };
  var ImageVectorDecoder_instance;
  function ImageVectorDecoder_getInstance() {
    if (ImageVectorDecoder_instance == null)
      new ImageVectorDecoder();
    return ImageVectorDecoder_instance;
  }
  function $decodeCOROUTINE$2(_this__u8e3s4, channel, resourceConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lib_1 = _this__u8e3s4;
    this.mib_1 = channel;
    this.nib_1 = resourceConfig;
  }
  protoOf($decodeCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = toByteArray(this.mib_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return loadSvgPainter(ARGUMENT, this.nib_1.q35());
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
  function SvgDecoder() {
    SvgDecoder_instance = this;
    this.oib_1 = getKClass(Painter);
  }
  protoOf(SvgDecoder).hge = function () {
    return this.oib_1;
  };
  protoOf(SvgDecoder).pib = function (channel, resourceConfig, $completion) {
    var tmp = new $decodeCOROUTINE$2(this, channel, resourceConfig, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(SvgDecoder).ngc = function (channel, resourceConfig, $completion) {
    return this.pib(channel, resourceConfig, $completion);
  };
  var SvgDecoder_instance;
  function SvgDecoder_getInstance() {
    if (SvgDecoder_instance == null)
      new SvgDecoder();
    return SvgDecoder_instance;
  }
  function loadSvgPainter(bytes, density) {
    var data = Companion_getInstance_14().i3c(bytes);
    return new SVGPainter(SVGDOM_init_$Create$(data), density);
  }
  function drawSvg(_this__u8e3s4, $this, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var tmp0_anonymous = _this__u8e3s4.g4b().a3k();
    var tmp0_safe_receiver = $this.yib_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.x3q(new SVGLength(_Size___get_width__impl__58y75t(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.yib_1;
    if (tmp1_safe_receiver != null) {
      tmp1_safe_receiver.y3q(new SVGLength(_Size___get_height__impl__a04p02(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.yib_1;
    if (tmp2_safe_receiver != null) {
      tmp2_safe_receiver.z3q(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.wib_1.i3q(get_nativeCanvas(tmp0_anonymous));
  }
  function SVGPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg($this$drawCachedImage, this$0, $this$drawCachedImage.x33());
      return Unit_getInstance();
    };
  }
  function SVGPainter(dom, density) {
    Painter.call(this);
    this.wib_1 = dom;
    this.xib_1 = density;
    this.yib_1 = this.wib_1.h3q();
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.res.SVGPainter.defaultSizePx.<anonymous>' call
    var tmp0_safe_receiver = this.yib_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v33();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m3q(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.k3q_1;
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.yib_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.w33();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.m3q(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.k3q_1;
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 ? height === 0.0 : false) {
      tmp_0 = Companion_getInstance_15().r34_1;
    } else {
      tmp_0 = Size(width, height);
    }
    tmp.zib_1 = tmp_0;
    var tmp_1;
    var tmp0_safe_receiver_0 = this.yib_1;
    if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.b3r()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var tmp0_get_isSpecified_4wup3r = this.zib_1;
      tmp_1 = !_Size___get_packedValue__impl__7rlt1o(tmp0_get_isSpecified_4wup3r).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_15().r34_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp1_safe_receiver_0 = this.yib_1;
      if (tmp1_safe_receiver_0 != null) {
        tmp1_safe_receiver_0.a3r(Companion_getInstance_16().l3a(0.0, 0.0, _Size___get_width__impl__58y75t(this.zib_1), _Size___get_height__impl__a04p02(this.zib_1)));
      }
    }
    this.aic_1 = Companion_getInstance_15().r34_1;
    this.bic_1 = 1.0;
    this.cic_1 = null;
    this.dic_1 = new DrawCache();
  }
  protoOf(SVGPainter).s4c = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = this.zib_1;
    if (!_Size___get_packedValue__impl__7rlt1o(tmp0_get_isSpecified_4wup3r).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_15().r34_1))) {
      tmp = Size__times_impl_fnp4nc(this.zib_1, this.xib_1.q35());
    } else {
      tmp = Companion_getInstance_15().r34_1;
    }
    return tmp;
  };
  protoOf(SVGPainter).t4c = function (alpha) {
    this.bic_1 = alpha;
    return true;
  };
  protoOf(SVGPainter).u4c = function (colorFilter) {
    this.cic_1 = colorFilter;
    return true;
  };
  protoOf(SVGPainter).r4c = function (_this__u8e3s4) {
    if (!equals(this.aic_1, _this__u8e3s4.x33())) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.ceil' call
      var tmp0_ceil = _Size___get_width__impl__58y75t(_this__u8e3s4.x33());
      tmp$ret$0 = Math.ceil(tmp0_ceil);
      var tmp = numberToInt(tmp$ret$0);
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = _Size___get_height__impl__a04p02(_this__u8e3s4.x33());
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_0 = IntSize(tmp, numberToInt(tmp$ret$1));
      var tmp_1 = _this__u8e3s4.f4b();
      this.dic_1.f62(tmp_0, _this__u8e3s4, tmp_1, SVGPainter$onDraw$lambda(this));
    }
    this.dic_1.g62(_this__u8e3s4, this.bic_1, this.cic_1);
  };
  function loadXmlImageVector(xmlString, density) {
    var element = Companion_getInstance_17().dgp(ElementSerializer_getInstance(), xmlString);
    return parseVectorRoot(element, density);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalKamelConfig;
  _.$_$.b = KamelImage$composable;
  _.$_$.c = PainterFailure;
  //endregion
  return _;
}));

//# sourceMappingURL=Kamel-kamel-image.js.map
