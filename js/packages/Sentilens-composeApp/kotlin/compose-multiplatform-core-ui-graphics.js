(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-util.js', './compose-multiplatform-core-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-util.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    root['compose-multiplatform-core-ui-graphics'] = factory(typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-util'], this['compose-multiplatform-core-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var equals = kotlin_kotlin.$_$.oc;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var hashCode = kotlin_kotlin.$_$.xc;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var isFinite = kotlin_kotlin.$_$.mk;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  var Long = kotlin_kotlin.$_$.jj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var ulongToDouble = kotlin_kotlin.$_$.hl;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var numberToInt = kotlin_kotlin.$_$.td;
  var toLong = kotlin_kotlin.$_$.ae;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var toRawBits = kotlin_kotlin.$_$.cl;
  var toShort = kotlin_kotlin.$_$.be;
  var floatFromBits = kotlin_kotlin.$_$.rc;
  var trimIndent = kotlin_kotlin.$_$.pi;
  var get_PI = kotlin_kotlin.$_$.de;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var toBits = kotlin_kotlin.$_$.al;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var withSign = kotlin_kotlin.$_$.me;
  var compareTo = kotlin_kotlin.$_$.lc;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var coerceIn = kotlin_kotlin.$_$.ze;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var coerceIn_0 = kotlin_kotlin.$_$.ye;
  var contentEquals = kotlin_kotlin.$_$.j7;
  var contentHashCode = kotlin_kotlin.$_$.n7;
  var isNaN_0 = kotlin_kotlin.$_$.pk;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var longArrayOf = kotlin_kotlin.$_$.od;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.j4;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a3;
  var numberToChar = kotlin_kotlin.$_$.sd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var ulongCompare = kotlin_kotlin.$_$.gl;
  var toDouble = kotlin_kotlin.$_$.bi;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.k4;
  var countLeadingZeroBits = kotlin_kotlin.$_$.fk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.b5;
  var doubleFromBits = kotlin_kotlin.$_$.nc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var Char = kotlin_kotlin.$_$.xi;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.y2;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.v8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.w8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.s8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.r8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.t2;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.q8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.u8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var toFloatArray = kotlin_kotlin.$_$.qa;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.t8;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, ShaderBrush);
  setMetadataFor(RadialGradient, 'RadialGradient', classMeta, ShaderBrush);
  setMetadataFor(SweepGradient, 'SweepGradient', classMeta, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.m3z(rect.q33_1, rect.r33_1, rect.s33_1, rect.t33_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().p3z_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.l3z(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().p3z_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.q3z(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.q3z.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.u3z(rect.q33_1, rect.r33_1, rect.s33_1, rect.t33_1, paint);
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FilterQuality, 'FilterQuality', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ImageBitmap, 'ImageBitmap', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().k33_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.t45(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.t45.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  function rewind() {
    this.p25();
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PathFillType, 'PathFillType', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TileMode, 'TileMode', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta);
  function get_center_0() {
    return get_center(this.g4b().x33());
  }
  function get_size() {
    return this.g4b().x33();
  }
  function drawLine$default(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    var tmp;
    if (strokeWidth === VOID) {
      Companion_getInstance_38();
      tmp = 0.0;
    } else {
      tmp = strokeWidth;
    }
    strokeWidth = tmp;
    cap = cap === VOID ? Companion_getInstance_38().c4c_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.h4b(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.h4b.call(this, new Color(color), new Offset_0(start), new Offset_0(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().k33_1 : topLeft;
    size = size === VOID ? offsetSize(this.x33(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f45(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.f45.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().k33_1 : topLeft;
    size = size === VOID ? offsetSize(this.x33(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c45(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.c45.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.m4b(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().q36_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.v33(), image.w33()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().q36_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_37().y44_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.l4b(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().k33_1 : topLeft;
    size = size === VOID ? offsetSize(this.x33(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().c33_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e45(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e45.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.x33()) / 2.0 : radius;
    center = center === VOID ? this.u4b() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.o4b(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.o4b.call(this, new Color(color), radius, new Offset_0(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().k33_1 : topLeft;
    size = size === VOID ? offsetSize(this.x33(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.q4b(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.q4b.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a45(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a45.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d45(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.d45.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().p3z_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.q3z(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.q3z.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  setMetadataFor(DrawTransform, 'DrawTransform', interfaceMeta);
  setMetadataFor(asDrawTransform$1, VOID, classMeta, VOID, [DrawTransform]);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(Painter, 'Painter', classMeta);
  setMetadataFor(BitmapPainter, 'BitmapPainter', classMeta, Painter);
  setMetadataFor(FloatResult, 'FloatResult', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(PathBuilder, 'PathBuilder', classMeta);
  setMetadataFor(PathNode, 'PathNode', classMeta);
  setMetadataFor(Close, 'Close', objectMeta, PathNode);
  setMetadataFor(RelativeMoveTo, 'RelativeMoveTo', classMeta, PathNode);
  setMetadataFor(MoveTo, 'MoveTo', classMeta, PathNode);
  setMetadataFor(RelativeLineTo, 'RelativeLineTo', classMeta, PathNode);
  setMetadataFor(LineTo, 'LineTo', classMeta, PathNode);
  setMetadataFor(RelativeHorizontalTo, 'RelativeHorizontalTo', classMeta, PathNode);
  setMetadataFor(HorizontalTo, 'HorizontalTo', classMeta, PathNode);
  setMetadataFor(RelativeVerticalTo, 'RelativeVerticalTo', classMeta, PathNode);
  setMetadataFor(VerticalTo, 'VerticalTo', classMeta, PathNode);
  setMetadataFor(RelativeCurveTo, 'RelativeCurveTo', classMeta, PathNode);
  setMetadataFor(CurveTo, 'CurveTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(ReflectiveCurveTo, 'ReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(RelativeQuadTo, 'RelativeQuadTo', classMeta, PathNode);
  setMetadataFor(QuadTo, 'QuadTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(ReflectiveQuadTo, 'ReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(RelativeArcTo, 'RelativeArcTo', classMeta, PathNode);
  setMetadataFor(ArcTo, 'ArcTo', classMeta, PathNode);
  setMetadataFor(PathParser, 'PathParser', classMeta);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path]);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta);
  setMetadataFor(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', classMeta);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta, VOID, [ImageBitmap]);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.t3v_1 = _BlendMode___init__impl__q6jalh(0);
    this.u3v_1 = _BlendMode___init__impl__q6jalh(1);
    this.v3v_1 = _BlendMode___init__impl__q6jalh(2);
    this.w3v_1 = _BlendMode___init__impl__q6jalh(3);
    this.x3v_1 = _BlendMode___init__impl__q6jalh(4);
    this.y3v_1 = _BlendMode___init__impl__q6jalh(5);
    this.z3v_1 = _BlendMode___init__impl__q6jalh(6);
    this.a3w_1 = _BlendMode___init__impl__q6jalh(7);
    this.b3w_1 = _BlendMode___init__impl__q6jalh(8);
    this.c3w_1 = _BlendMode___init__impl__q6jalh(9);
    this.d3w_1 = _BlendMode___init__impl__q6jalh(10);
    this.e3w_1 = _BlendMode___init__impl__q6jalh(11);
    this.f3w_1 = _BlendMode___init__impl__q6jalh(12);
    this.g3w_1 = _BlendMode___init__impl__q6jalh(13);
    this.h3w_1 = _BlendMode___init__impl__q6jalh(14);
    this.i3w_1 = _BlendMode___init__impl__q6jalh(15);
    this.j3w_1 = _BlendMode___init__impl__q6jalh(16);
    this.k3w_1 = _BlendMode___init__impl__q6jalh(17);
    this.l3w_1 = _BlendMode___init__impl__q6jalh(18);
    this.m3w_1 = _BlendMode___init__impl__q6jalh(19);
    this.n3w_1 = _BlendMode___init__impl__q6jalh(20);
    this.o3w_1 = _BlendMode___init__impl__q6jalh(21);
    this.p3w_1 = _BlendMode___init__impl__q6jalh(22);
    this.q3w_1 = _BlendMode___init__impl__q6jalh(23);
    this.r3w_1 = _BlendMode___init__impl__q6jalh(24);
    this.s3w_1 = _BlendMode___init__impl__q6jalh(25);
    this.t3w_1 = _BlendMode___init__impl__q6jalh(26);
    this.u3w_1 = _BlendMode___init__impl__q6jalh(27);
    this.v3w_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance;
  function Companion_getInstance_13() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_13().t3v_1 ? 'Clear' : $this === Companion_getInstance_13().u3v_1 ? 'Src' : $this === Companion_getInstance_13().v3v_1 ? 'Dst' : $this === Companion_getInstance_13().w3v_1 ? 'SrcOver' : $this === Companion_getInstance_13().x3v_1 ? 'DstOver' : $this === Companion_getInstance_13().y3v_1 ? 'SrcIn' : $this === Companion_getInstance_13().z3v_1 ? 'DstIn' : $this === Companion_getInstance_13().a3w_1 ? 'SrcOut' : $this === Companion_getInstance_13().b3w_1 ? 'DstOut' : $this === Companion_getInstance_13().c3w_1 ? 'SrcAtop' : $this === Companion_getInstance_13().d3w_1 ? 'DstAtop' : $this === Companion_getInstance_13().e3w_1 ? 'Xor' : $this === Companion_getInstance_13().f3w_1 ? 'Plus' : $this === Companion_getInstance_13().g3w_1 ? 'Modulate' : $this === Companion_getInstance_13().h3w_1 ? 'Screen' : $this === Companion_getInstance_13().i3w_1 ? 'Overlay' : $this === Companion_getInstance_13().j3w_1 ? 'Darken' : $this === Companion_getInstance_13().k3w_1 ? 'Lighten' : $this === Companion_getInstance_13().l3w_1 ? 'ColorDodge' : $this === Companion_getInstance_13().m3w_1 ? 'ColorBurn' : $this === Companion_getInstance_13().n3w_1 ? 'HardLight' : $this === Companion_getInstance_13().o3w_1 ? 'Softlight' : $this === Companion_getInstance_13().p3w_1 ? 'Difference' : $this === Companion_getInstance_13().q3w_1 ? 'Exclusion' : $this === Companion_getInstance_13().r3w_1 ? 'Multiply' : $this === Companion_getInstance_13().s3w_1 ? 'Hue' : $this === Companion_getInstance_13().t3w_1 ? 'Saturation' : $this === Companion_getInstance_13().u3w_1 ? 'Color' : $this === Companion_getInstance_13().v3w_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.w3w_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_13();
    this.w3w_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.w3w_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.w3w_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.w3w_1, other);
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).x3w = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].x4_1.y3w_1;
        list.a(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].w4_1;
        list_0.a(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).z3w = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).a3x = function (colors, startX, endX, tileMode) {
    return this.z3w(colors, Offset(startX, 0.0), Offset(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).b3x = function (colors, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    var tmp;
    if (endX === VOID) {
      FloatCompanionObject_getInstance();
      tmp = Infinity;
    } else {
      tmp = endX;
    }
    endX = tmp;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    return $super === VOID ? this.a3x(colors, startX, endX, tileMode) : $super.a3x.call(this, colors, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).g3x = function (colors, startY, endY, tileMode) {
    return this.z3w(colors, Offset(0.0, startY), Offset(0.0, endY), tileMode);
  };
  protoOf(Companion_0).h3x = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    var tmp;
    if (endY === VOID) {
      FloatCompanionObject_getInstance();
      tmp = Infinity;
    } else {
      tmp = endY;
    }
    endY = tmp;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    return $super === VOID ? this.g3x(colors, startY, endY, tileMode) : $super.g3x.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).i3x = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].x4_1.y3w_1;
        list.a(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].w4_1;
        list_0.a(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).j3x = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    var tmp0_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(tmp0_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_List)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$0 = colorStops[index].x4_1.y3w_1;
        list.a(new Color(tmp$ret$0));
      }
       while (inductionVariable < tmp0_List);
    // Inline function 'kotlin.collections.List' call
    var tmp1_List = colorStops.length;
    // Inline function 'kotlin.collections.MutableList' call
    var list_0 = ArrayList_init_$Create$(tmp1_List);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_List)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        tmp$ret$3 = colorStops[index_0].w4_1;
        list_0.a(tmp$ret$3);
      }
       while (inductionVariable_0 < tmp1_List);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_0;
  function Companion_getInstance_14() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_14();
    this.k3x_1 = Companion_getInstance().r34_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.n3x_1 = null;
    this.o3x_1 = Companion_getInstance().r34_1;
  }
  protoOf(ShaderBrush).l3x = function (size, p, alpha) {
    var shader = this.n3x_1;
    if (shader == null ? true : !equals(this.o3x_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        shader = null;
        this.n3x_1 = null;
        this.o3x_1 = Companion_getInstance().r34_1;
      } else {
        // Inline function 'kotlin.also' call
        var tmp0_also = this.p3x(size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
        this.n3x_1 = tmp0_also;
        shader = tmp0_also;
        this.o3x_1 = size;
      }
    }
    if (!equals(p.e3y(), Companion_getInstance_16().q3x_1)) {
      p.d3y(Companion_getInstance_16().q3x_1);
    }
    if (!equals(p.f3y(), shader)) {
      p.w3g(shader);
    }
    if (!(p.h3v() === alpha)) {
      p.g3y(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.i3y_1 = value;
  }
  protoOf(SolidColor).l3x = function (size, p, alpha) {
    p.g3y(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.i3y_1, _Color___get_alpha__impl__wcfyv1(this.i3y_1) * alpha);
    } else {
      tmp = this.i3y_1;
    }
    p.d3y(tmp);
    if (!(p.f3y() == null)) {
      p.w3g(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.i3y_1, other.i3y_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.i3y_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + new Color(this.i3y_1) + ')';
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    ShaderBrush.call(this);
    this.m3y_1 = colors;
    this.n3y_1 = stops;
    this.o3y_1 = start;
    this.p3y_1 = end;
    this.q3y_1 = tileMode;
  }
  protoOf(LinearGradient).p3x = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.o3y_1);
    FloatCompanionObject_getInstance();
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.o3y_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.o3y_1);
    FloatCompanionObject_getInstance();
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.o3y_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.p3y_1);
    FloatCompanionObject_getInstance();
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.p3y_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.p3y_1);
    FloatCompanionObject_getInstance();
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.p3y_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.m3y_1;
    var tmp1_colorStops = this.n3y_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.q3y_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.m3y_1, other.m3y_1))
      return false;
    if (!equals(this.n3y_1, other.n3y_1))
      return false;
    if (!equals(this.o3y_1, other.o3y_1))
      return false;
    if (!equals(this.p3y_1, other.p3y_1))
      return false;
    if (!(this.q3y_1 === other.q3y_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.m3y_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n3y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.o3y_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.p3y_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.q3y_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.o3y_1) ? 'start=' + new Offset_0(this.o3y_1) + ', ' : '';
    var endValue = get_isFinite(this.p3y_1) ? 'end=' + new Offset_0(this.p3y_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.m3y_1 + ', ' + ('stops=' + this.n3y_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.q3y_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    ShaderBrush.call(this);
    this.u3y_1 = colors;
    this.v3y_1 = stops;
    this.w3y_1 = center;
    this.x3y_1 = radius;
    this.y3y_1 = tileMode;
  }
  protoOf(RadialGradient).p3x = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.w3y_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      var tmp;
      var tmp_0 = _Offset___get_x__impl__xvi35n(this.w3y_1);
      FloatCompanionObject_getInstance();
      if (tmp_0 === Infinity) {
        tmp = _Size___get_width__impl__58y75t(size);
      } else {
        tmp = _Offset___get_x__impl__xvi35n(this.w3y_1);
      }
      centerX = tmp;
      var tmp_1;
      var tmp_2 = _Offset___get_y__impl__8bzhra(this.w3y_1);
      FloatCompanionObject_getInstance();
      if (tmp_2 === Infinity) {
        tmp_1 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_1 = _Offset___get_y__impl__8bzhra(this.w3y_1);
      }
      centerY = tmp_1;
    }
    var tmp0_colors = this.u3y_1;
    var tmp1_colorStops = this.v3y_1;
    var tmp2_center = Offset(centerX, centerY);
    var tmp_3;
    FloatCompanionObject_getInstance();
    if (this.x3y_1 === Infinity) {
      tmp_3 = _Size___get_minDimension__impl__4iso0r(size) / 2;
    } else {
      tmp_3 = this.x3y_1;
    }
    var tmp3_radius = tmp_3;
    var tmp4_tileMode = this.y3y_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.u3y_1, other.u3y_1))
      return false;
    if (!equals(this.v3y_1, other.v3y_1))
      return false;
    if (!equals(this.w3y_1, other.w3y_1))
      return false;
    if (!(this.x3y_1 === other.x3y_1))
      return false;
    if (!(this.y3y_1 === other.y3y_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.u3y_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v3y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.w3y_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.x3y_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.y3y_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.w3y_1) ? 'center=' + new Offset_0(this.w3y_1) + ', ' : '';
    var radiusValue = isFinite(this.x3y_1) ? 'radius=' + this.x3y_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.u3y_1 + ', ') + ('stops=' + this.v3y_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.y3y_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.c3z_1 = center;
    this.d3z_1 = colors;
    this.e3z_1 = stops;
  }
  protoOf(SweepGradient).p3x = function (size) {
    var tmp;
    if (get_isUnspecified(this.c3z_1)) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      var tmp_1 = _Offset___get_x__impl__xvi35n(this.c3z_1);
      FloatCompanionObject_getInstance();
      if (tmp_1 === Infinity) {
        tmp_0 = _Size___get_width__impl__58y75t(size);
      } else {
        tmp_0 = _Offset___get_x__impl__xvi35n(this.c3z_1);
      }
      var tmp_2 = tmp_0;
      var tmp_3;
      var tmp_4 = _Offset___get_y__impl__8bzhra(this.c3z_1);
      FloatCompanionObject_getInstance();
      if (tmp_4 === Infinity) {
        tmp_3 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(this.c3z_1);
      }
      tmp = Offset(tmp_2, tmp_3);
    }
    return SweepGradientShader(tmp, this.d3z_1, this.e3z_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.c3z_1, other.c3z_1))
      return false;
    if (!equals(this.d3z_1, other.d3z_1))
      return false;
    if (!equals(this.e3z_1, other.e3z_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.c3z_1);
    result = imul(31, result) + hashCode(this.d3z_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.e3z_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.c3z_1) ? 'center=' + new Offset_0(this.c3z_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.d3z_1 + ', stops=' + this.e3z_1 + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.o3z_1 = _ClipOp___init__impl__pqwwy8(0);
    this.p3z_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_1;
  function Companion_getInstance_15() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_15().o3z_1 ? 'Difference' : $this === Companion_getInstance_15().p3z_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.a40_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_15();
    this.a40_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.a40_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.a40_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.a40_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var tmp2_getColorSpace = ColorSpaces_getInstance();
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    var tmp1_toInt = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp3_getColorSpace = _ULong___get_data__impl__fggpzb(tmp1_toInt).f1();
    return tmp2_getColorSpace.x40_1[tmp3_getColorSpace];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.e41(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).od(48));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).od(48));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).uk();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).od(40));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).od(32));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).uk();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).od(32));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).od(16));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).uk();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).od(56));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).od(6));
      var tmp6_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat)) / 1023.0;
    }
    return tmp;
  }
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = new Color($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Color(tmp_1)).f41.call(tmp_0, alpha, red, green, blue).y3w_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).g41_1 + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.q3x_1 = Color_1(new Long(-16777216, 0));
    this.r3x_1 = Color_1(new Long(-12303292, 0));
    this.s3x_1 = Color_1(new Long(-7829368, 0));
    this.t3x_1 = Color_1(new Long(-3355444, 0));
    this.u3x_1 = Color_1(new Long(-1, 0));
    this.v3x_1 = Color_1(new Long(-65536, 0));
    this.w3x_1 = Color_1(new Long(-16711936, 0));
    this.x3x_1 = Color_1(new Long(-16776961, 0));
    this.y3x_1 = Color_1(new Long(-256, 0));
    this.z3x_1 = Color_1(new Long(-16711681, 0));
    this.a3y_1 = Color_1(new Long(-65281, 0));
    this.b3y_1 = Color_2(0);
    this.c3y_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().v40_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_16() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.y3w_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_16();
    this.y3w_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.y3w_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.y3w_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.y3w_1, other);
  };
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().f40_1));
    var tmp1_toInt = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).od(32));
    return _ULong___get_data__impl__fggpzb(tmp1_toInt).f1();
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().f40_1 : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.j41(0);
    if (red <= colorSpace.k41(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.j41(1);
      tmp_1 = green <= colorSpace.k41(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.j41(2);
      tmp_0 = blue <= colorSpace.k41(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.l41()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.toULong' call
      var tmp1_and = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp2_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).q7(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.m41() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_0 = 'Color only works with ColorSpaces with 3 components';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.i41_1;
    // Inline function 'kotlin.require' call
    Companion_getInstance_31();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_1 = 'Unknown color space, please use a color space in ColorSpaces';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var tmp5_max = Math.min(alpha, 1.0);
    tmp$ret$7 = Math.max(0.0, tmp5_max);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp6_toULong = _Float16___get_halfValue__impl__89tmwx(r);
    var tmp7_and = _ULong___init__impl__c78o9k(toLong(tmp6_toULong));
    var tmp8_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp12_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).q7(48));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp9_toULong = _Float16___get_halfValue__impl__89tmwx(g);
    var tmp10_and = _ULong___init__impl__c78o9k(toLong(tmp9_toULong));
    var tmp11_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp13_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).q7(32));
    var tmp17_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).sk(_ULong___get_data__impl__fggpzb(tmp13_or)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp14_toULong = _Float16___get_halfValue__impl__89tmwx(b);
    var tmp15_and = _ULong___init__impl__c78o9k(toLong(tmp14_toULong));
    var tmp16_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp18_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).q7(16));
    var tmp21_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).sk(_ULong___get_data__impl__fggpzb(tmp18_or)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp19_and = _ULong___init__impl__c78o9k(toLong(a));
    var tmp20_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp22_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).q7(6));
    var tmp24_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).sk(_ULong___get_data__impl__fggpzb(tmp22_or)));
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp23_and = _ULong___init__impl__c78o9k(toLong(id));
    var tmp25_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).sk(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp0_and = _ULong___init__impl__c78o9k(color);
    var tmp1_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).vb(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).q7(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.h41_1, Companion_getInstance_30().n41_1)) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var message = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.h41_1));
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).g42_1;
    var r = eotf.j42(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.j42(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.j42(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp0_compositeComponent = _Color___get_red__impl__cwrsk6(fg);
    var tmp1_compositeComponent = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0_compositeComponent * fgA + tmp1_compositeComponent * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp2_compositeComponent = _Color___get_green__impl__bta9rs(fg);
    var tmp3_compositeComponent = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp2_compositeComponent * fgA + tmp3_compositeComponent * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp4_compositeComponent = _Color___get_blue__impl__xwez13(fg);
    var tmp5_compositeComponent = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp4_compositeComponent * fgA + tmp5_compositeComponent * bgA * (1.0 - fgA)) / a;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(color) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var tmp0_shl = _ULong___init__impl__c78o9k(toLong(color));
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).q7(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().w40_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    var tmp0_alpha = lerp(startAlpha, endAlpha, fraction);
    var tmp1_red = lerp(startL, endL, fraction);
    var tmp2_green = lerp(startA, endA, fraction);
    var tmp3_blue = lerp(startB, endB, fraction);
    var interpolated = Color_0(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).k42 = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  protoOf(Companion_3).l42 = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_13().y3v_1 : blendMode;
    return $super === VOID ? this.k42(color, blendMode) : $super.k42.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_3;
  function Companion_getInstance_17() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_17();
    this.m42_1 = nativeColorFilter;
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.n42_1 = _FilterQuality___init__impl__nv51aq(0);
    this.o42_1 = _FilterQuality___init__impl__nv51aq(1);
    this.p42_1 = _FilterQuality___init__impl__nv51aq(2);
    this.q42_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_4;
  function Companion_getInstance_18() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_18().n42_1 ? 'None' : $this === Companion_getInstance_18().o42_1 ? 'Low' : $this === Companion_getInstance_18().p42_1 ? 'Medium' : $this === Companion_getInstance_18().q42_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    if (!($this === (other instanceof FilterQuality ? other.r42_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_18();
    this.r42_1 = value;
  }
  protoOf(FilterQuality).toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.r42_1);
  };
  protoOf(FilterQuality).hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.r42_1);
  };
  protoOf(FilterQuality).equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.r42_1, other);
  };
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e >= -10) {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          out = out + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    return _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_19(), value));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_19();
    var s = bits & 32768;
    Companion_getInstance_19();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_19();
    var e = tmp & 31;
    Companion_getInstance_19();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        Companion_getInstance_19();
        var tmp1_fromBits = 1056964608 + m | 0;
        var o = floatFromBits(tmp1_fromBits);
        o = o - Companion_getInstance_19().w43_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_19();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_19();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_19();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_19();
    var out = tmp_2 | tmp_3 << 23 | outM;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(out);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.s42_1 = 16;
    this.t42_1 = _Float16___init__impl__fckrew(5120);
    this.u42_1 = 15;
    this.v42_1 = -14;
    this.w42_1 = _Float16___init__impl__fckrew(-1025);
    this.x42_1 = _Float16___init__impl__fckrew(31743);
    this.y42_1 = _Float16___init__impl__fckrew(1024);
    this.z42_1 = _Float16___init__impl__fckrew(1);
    this.a43_1 = _Float16___init__impl__fckrew(32256);
    this.b43_1 = _Float16___init__impl__fckrew(-1024);
    this.c43_1 = _Float16___init__impl__fckrew(-32768);
    this.d43_1 = _Float16___init__impl__fckrew(31744);
    this.e43_1 = _Float16___init__impl__fckrew(0);
    this.f43_1 = _Float16___init__impl__fckrew_0(1.0);
    this.g43_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.h43_1 = 15;
    this.i43_1 = 32768;
    this.j43_1 = 10;
    this.k43_1 = 31;
    this.l43_1 = 1023;
    this.m43_1 = 15;
    this.n43_1 = 32767;
    this.o43_1 = 31744;
    this.p43_1 = 31;
    this.q43_1 = 23;
    this.r43_1 = 255;
    this.s43_1 = 8388607;
    this.t43_1 = 127;
    this.u43_1 = 4194304;
    this.v43_1 = 1056964608;
    var tmp = this;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp.w43_1 = floatFromBits(tmp1_fromBits);
  }
  var Companion_instance_5;
  function Companion_getInstance_19() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ImageBitmap() {
  }
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_20().z43_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().f40_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.z43_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.a44_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.b44_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.c44_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.d44_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_6;
  function Companion_getInstance_20() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_20().z43_1 ? 'Argb8888' : $this === Companion_getInstance_20().a44_1 ? 'Alpha8' : $this === Companion_getInstance_20().b44_1 ? 'Rgb565' : $this === Companion_getInstance_20().c44_1 ? 'F16' : $this === Companion_getInstance_20().d44_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.e44_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_20();
    this.e44_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.e44_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.e44_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.e44_1, other);
  };
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[3] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[7] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[15];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[4] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[12]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[1] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[5] * y;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.e33_1, rect.f33_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.e33_1, rect.h33_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.g33_1, rect.f33_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.g33_1, rect.h33_1));
    var tmp = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    var tmp4_min = Math.min(tmp0_min, tmp1_min);
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    var tmp5_min = Math.min(tmp2_min, tmp3_min);
    tmp.e33_1 = Math.min(tmp4_min, tmp5_min);
    var tmp_0 = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    var tmp10_min = Math.min(tmp6_min, tmp7_min);
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    var tmp11_min = Math.min(tmp8_min, tmp9_min);
    tmp_0.f33_1 = Math.min(tmp10_min, tmp11_min);
    var tmp_1 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    var tmp16_max = Math.max(tmp12_max, tmp13_max);
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    var tmp17_max = Math.max(tmp14_max, tmp15_max);
    tmp_1.g33_1 = Math.max(tmp16_max, tmp17_max);
    var tmp_2 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    var tmp22_max = Math.max(tmp18_max, tmp19_max);
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    var tmp23_max = Math.max(tmp20_max, tmp21_max);
    tmp_2.h33_1 = Math.max(tmp22_max, tmp23_max);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[11] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[6];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[7];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[10];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[11];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[14];
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var tmp0_set = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = tmp0_set;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[10];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[14];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[10];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[14];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[4];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[5];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[7];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp0_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp1_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp2_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = tmp2_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp3_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = tmp3_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp4_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = tmp4_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp5_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = tmp5_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp6_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = tmp6_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp7_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = tmp7_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp8_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = tmp8_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp9_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = tmp9_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp10_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = tmp10_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp11_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = tmp11_set;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).g44.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[4] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[8] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[1] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[5] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[9] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[2] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[6] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[10] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[14];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[3] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[7] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[11] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[15];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).h44.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.i44_1 = 0;
    this.j44_1 = 1;
    this.k44_1 = 3;
    this.l44_1 = 4;
    this.m44_1 = 5;
    this.n44_1 = 7;
    this.o44_1 = 10;
    this.p44_1 = 12;
    this.q44_1 = 13;
    this.r44_1 = 14;
    this.s44_1 = 15;
  }
  var Companion_instance_7;
  function Companion_getInstance_21() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.f44_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_21();
    this.f44_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.f44_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.f44_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.f44_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[0 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[4 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[8 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[12 + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.t44_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.t44_1.equals(other.t44_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.t44_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.u44_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.u44_1)) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.w44(this.u44_1);
      tmp_0 = tmp0_apply;
    } else {
      tmp_0 = null;
    }
    tmp.v44_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.u44_1.equals(other.u44_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.u44_1.hashCode();
  };
  function Generic() {
  }
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m34_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m34_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l34_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k34_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var tmp0_anonymous = outline.t44_1;
      _this__u8e3s4.c45(color, topLeft(tmp0_anonymous), size(tmp0_anonymous), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.v44_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.a45(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_anonymous = outline.u44_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1_anonymous.n34_1);
          var tmp0_topLeft = topLeft_0(tmp1_anonymous);
          var tmp1_size = size_0(tmp1_anonymous);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.b45(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var tmp2_anonymous = outline.z44_1;
          _this__u8e3s4.a45(tmp2_anonymous, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_37().x44_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var tmp0_anonymous = outline.t44_1;
      _this__u8e3s4.f45(brush, topLeft(tmp0_anonymous), size(tmp0_anonymous), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.v44_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.d45(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_anonymous = outline.u44_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1_anonymous.n34_1);
          _this__u8e3s4.e45(brush, topLeft_0(tmp1_anonymous), size_0(tmp1_anonymous), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var tmp2_anonymous = outline.z44_1;
          _this__u8e3s4.d45(tmp2_anonymous, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.q33_1, _this__u8e3s4.r33_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.v33(), _this__u8e3s4.w33());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.g34_1, _this__u8e3s4.h34_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.v33(), _this__u8e3s4.w33());
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.g45_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.h45_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_22() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.z45_1 = _PathFillType___init__impl__d59lzz(0);
    this.a46_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_23() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_23().z45_1 ? 'NonZero' : $this === Companion_getInstance_23().a46_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.b46_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_23();
    this.b46_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.b46_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.b46_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.b46_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.c46_1 = _PathOperation___init__impl__8ddeif(0);
    this.d46_1 = _PathOperation___init__impl__8ddeif(1);
    this.e46_1 = _PathOperation___init__impl__8ddeif(2);
    this.f46_1 = _PathOperation___init__impl__8ddeif(3);
    this.g46_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_10;
  function Companion_getInstance_24() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).h46 = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_28().c3x_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.i46_1 = new Shadow();
  }
  var Companion_instance_11;
  function Companion_getInstance_25() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_25();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().k33_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.j46_1 = color;
    this.k46_1 = offset;
    this.l46_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.j46_1, other.j46_1))
      return false;
    if (!equals(this.k46_1, other.k46_1))
      return false;
    if (!(this.l46_1 === other.l46_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.j46_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.k46_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.l46_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.j46_1) + ', offset=' + new Offset_0(this.k46_1) + ', blurRadius=' + this.l46_1 + ')';
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.j46_1, stop.j46_1, fraction), lerp_0(start.k46_1, stop.k46_1, fraction), lerp(start.l46_1, stop.l46_1, fraction));
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.m46_1 = _StrokeCap___init__impl__kfgr27(0);
    this.n46_1 = _StrokeCap___init__impl__kfgr27(1);
    this.o46_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_26() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_26().m46_1 ? 'Butt' : $this === Companion_getInstance_26().n46_1 ? 'Round' : $this === Companion_getInstance_26().o46_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.p46_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_26();
    this.p46_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.p46_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.p46_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.p46_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.q46_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.r46_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.s46_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_27() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_27().q46_1 ? 'Miter' : $this === Companion_getInstance_27().r46_1 ? 'Round' : $this === Companion_getInstance_27().s46_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.t46_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_27();
    this.t46_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.t46_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.t46_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.t46_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.c3x_1 = _TileMode___init__impl__syhjao(0);
    this.d3x_1 = _TileMode___init__impl__syhjao(1);
    this.e3x_1 = _TileMode___init__impl__syhjao(2);
    this.f3x_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_14;
  function Companion_getInstance_28() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_28().c3x_1 ? 'Clamp' : $this === Companion_getInstance_28().d3x_1 ? 'Repeated' : $this === Companion_getInstance_28().e3x_1 ? 'Mirror' : $this === Companion_getInstance_28().f3x_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.u46_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_28();
    this.u46_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.u46_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.u46_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.u46_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    tmp.v46_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.w46_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.x46_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_15;
  function Companion_getInstance_29() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Adaptation(transform) {
    Companion_getInstance_29();
    this.y46_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).z9(32).f1();
  }
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.n41_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.o41_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.p41_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.q41_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_16;
  function Companion_getInstance_30() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_30().n41_1) ? 'Rgb' : equals($this, Companion_getInstance_30().o41_1) ? 'Xyz' : equals($this, Companion_getInstance_30().p41_1) ? 'Lab' : equals($this, Companion_getInstance_30().q41_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.z46_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_30();
    this.z46_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.z46_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.z46_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.z46_1, other);
  };
  function Companion_17() {
    Companion_instance_17 = this;
    this.a47_1 = -1;
    this.b47_1 = 63;
  }
  var Companion_instance_17;
  function Companion_getInstance_31() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_31();
    this.g41_1 = name;
    this.h41_1 = model;
    this.i41_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.g41_1;
    if (charSequenceLength(tmp0_isEmpty) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_31();
    if (this.i41_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_31();
      tmp = this.i41_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_31();
      Companion_getInstance_31();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  protoOf(ColorSpace).m41 = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.h41_1);
  };
  protoOf(ColorSpace).l41 = function () {
    return false;
  };
  protoOf(ColorSpace).c47 = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.d47(tmp$ret$0);
  };
  protoOf(ColorSpace).e47 = function (v0, v1, v2) {
    var xyz = this.c47(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = xyz[0];
    var tmp1_packFloats = xyz[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.q7(32).sk(v2_0.vb(new Long(-1, 0)));
  };
  protoOf(ColorSpace).f47 = function (v0, v1, v2) {
    var xyz = this.c47(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).g47 = function (x, y, z, a, colorSpace) {
    var colors = this.h47(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).h47 = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.h41_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.i47(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.g41_1 + ' (id=' + this.i41_1 + ', model=' + new ColorModel(this.h41_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.i41_1 === that.i41_1))
      return false;
    return !(this.g41_1 === that.g41_1) ? false : equals(this.h41_1, that.h41_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.g41_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.h41_1) | 0;
    result = imul(31, result) + this.i41_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().f40_1 : destination;
    intent = intent === VOID ? Companion_getInstance_35().j47_1 : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().f40_1) {
      if (destination === ColorSpaces_getInstance().f40_1) {
        return Companion_getInstance_32().n47_1;
      }
      if (destination === ColorSpaces_getInstance().w40_1 ? intent === Companion_getInstance_35().j47_1 : false) {
        return Companion_getInstance_32().o47_1;
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().w40_1 ? destination === ColorSpaces_getInstance().f40_1 : false) ? intent === Companion_getInstance_35().j47_1 : false) {
      return Companion_getInstance_32().p47_1;
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_32().q47(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.h41_1, Companion_getInstance_30().n41_1) ? equals(destination.h41_1, Companion_getInstance_30().n41_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_29().v46_1 : adaptation;
    if (equals(_this__u8e3s4.h41_1, Companion_getInstance_30().n41_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.u41_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.t47();
      var adaptationTransform = chromaticAdaptation(adaptation.y46_1, rgb.u41_1.t47(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.z41_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = a[i] - b[i];
          tmp = Math.abs(tmp0_abs) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.r47_1 - b.r47_1;
    if (Math.abs(tmp0_abs) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.s47_1 - b.s47_1;
      tmp = Math.abs(tmp1_abs) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / g;
      tmp = (Math.pow(x, tmp0_pow) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x - e;
      var tmp1_pow = 1.0 / g;
      tmp = (Math.pow(tmp0_pow, tmp1_pow) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp = Math.pow(tmp0_pow, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp = Math.pow(tmp0_pow, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.u47_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).j42 = function (double) {
    return this.u47_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.b40_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.c40_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.d40_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.e40_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.f40_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.b40_1, Illuminant_getInstance().b48_1, this.d40_1, 0);
    this.g40_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.b40_1, Illuminant_getInstance().b48_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().b48_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.h40_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.b40_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.d40_1, 2);
    this.i40_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.b40_1, Illuminant_getInstance().b48_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.j40_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().b48_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.k40_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().b48_1, new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.l40_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.m40_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().b48_1, this.d40_1, 7);
    this.n40_1 = Rgb_init_$Create$('NTSC (1953)', this.c40_1, Illuminant_getInstance().x47_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.o40_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().b48_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.p40_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().b48_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.q40_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().y47_1, new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.r40_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().a48_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.s40_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().a48_1, 1.0, -65504.0, 65504.0, 13);
    this.t40_1 = new Xyz('Generic XYZ', 14);
    this.u40_1 = new Lab('Generic L*a*b*', 15);
    this.v40_1 = Rgb_init_$Create$('None', this.b40_1, Illuminant_getInstance().b48_1, this.e40_1, 16);
    this.w40_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.x40_1 = [this.f40_1, this.g40_1, this.h40_1, this.i40_1, this.j40_1, this.k40_1, this.l40_1, this.m40_1, this.n40_1, this.o40_1, this.p40_1, this.q40_1, this.r40_1, this.s40_1, this.t40_1, this.u40_1, this.v40_1, this.w40_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.u41_1, destination.u41_1)) {
      return mul3x3(destination.a42_1, source.z41_1);
    } else {
      var transform = source.z41_1;
      var inverseTransform = destination.a42_1;
      var srcXYZ = source.u41_1.t47();
      var dstXYZ = destination.u41_1.t47();
      if (!compare_0(source.u41_1, Illuminant_getInstance().y47_1)) {
        var tmp = Companion_getInstance_29().v46_1.y46_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = Illuminant_getInstance().e48_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.z41_1);
      }
      if (!compare_0(destination.u41_1, Illuminant_getInstance().y47_1)) {
        var tmp_0 = Companion_getInstance_29().v46_1.y46_1;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = Illuminant_getInstance().e48_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.z41_1));
      }
      if (intent === Companion_getInstance_35().m47_1) {
        var tmp$ret$4;
        // Inline function 'kotlin.floatArrayOf' call
        tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_35().m47_1))
      return null;
    var srcRGB = equals(source.h41_1, Companion_getInstance_30().n41_1);
    var dstRGB = equals(destination.h41_1, Companion_getInstance_30().n41_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.u41_1.t47() : Illuminant_getInstance().e48_1;
      var dstXYZ = dstRGB ? rgb.u41_1.t47() : Illuminant_getInstance().e48_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_35().k47_1, this);
  }
  protoOf(Connector$Companion$identity$1).e41 = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.z40_1);
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.h41_1, Companion_getInstance_30().n41_1) ? adapt(source, Illuminant_getInstance().y47_1) : source;
    var tmp_0;
    if (equals(destination.h41_1, Companion_getInstance_30().n41_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().y47_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_32(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.r48_1 = mSource;
    this.s48_1 = mDestination;
    this.t48_1 = computeTransform(this, this.r48_1, this.s48_1, intent);
  }
  protoOf(RgbConnector).e41 = function (r, g, b, a) {
    var v0 = this.r48_1.g42_1.j42(r);
    var v1 = this.r48_1.g42_1.j42(g);
    var v2 = this.r48_1.g42_1.j42(b);
    var v01 = mul3x3Float3_0(this.t48_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.t48_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.t48_1, v0, v1, v2);
    var v02 = this.s48_1.d42_1.j42(v01);
    var v12 = this.s48_1.d42_1.j42(v11);
    var v22 = this.s48_1.d42_1.j42(v21);
    return Color_0(v02, v12, v22, a, this.s48_1);
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.n47_1 = this.q47(ColorSpaces_getInstance().f40_1);
    this.o47_1 = Connector_init_$Create$(ColorSpaces_getInstance().f40_1, ColorSpaces_getInstance().w40_1, Companion_getInstance_35().j47_1);
    this.p47_1 = Connector_init_$Create$(ColorSpaces_getInstance().w40_1, ColorSpaces_getInstance().f40_1, Companion_getInstance_35().j47_1);
  }
  protoOf(Companion_18).q47 = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_18;
  function Companion_getInstance_32() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_32();
    this.y40_1 = source;
    this.z40_1 = destination;
    this.a41_1 = transformSource;
    this.b41_1 = transformDestination;
    this.c41_1 = renderIntent;
    this.d41_1 = transform;
  }
  protoOf(Connector).e41 = function (r, g, b, a) {
    var packed = this.a41_1.e47(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = packed.z9(32).f1();
    var x = floatFromBits(tmp1_fromBits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits_0 = packed.vb(new Long(-1, 0)).f1();
    var y = floatFromBits(tmp1_fromBits_0);
    var z = this.a41_1.f47(r, g, b);
    if (!(this.d41_1 == null)) {
      x = x * this.d41_1[0];
      y = y * this.d41_1[1];
      z = z * this.d41_1[2];
    }
    return this.b41_1.g47(x, y, z, a, this.z40_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.v47_1 = new WhitePoint(0.44757, 0.40745);
    this.w47_1 = new WhitePoint(0.34842, 0.35161);
    this.x47_1 = new WhitePoint(0.31006, 0.31616);
    this.y47_1 = new WhitePoint(0.34567, 0.3585);
    this.z47_1 = new WhitePoint(0.33242, 0.34743);
    this.a48_1 = new WhitePoint(0.32168, 0.33767);
    this.b48_1 = new WhitePoint(0.31271, 0.32902);
    this.c48_1 = new WhitePoint(0.29902, 0.31485);
    this.d48_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.e48_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.u48_1 = 0.008856452;
    this.v48_1 = 7.787037;
    this.w48_1 = 0.13793103;
    this.x48_1 = 0.20689656;
  }
  var Companion_instance_19;
  function Companion_getInstance_33() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Lab(name, id) {
    Companion_getInstance_33();
    ColorSpace.call(this, name, Companion_getInstance_30().p41_1, id);
  }
  protoOf(Lab).j41 = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).k41 = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).d47 = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_33();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_33();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_33();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_33();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_33();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_33();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().e48_1[0];
    v[1] = y * Illuminant_getInstance().e48_1[1];
    v[2] = z * Illuminant_getInstance().e48_1[2];
    return v;
  };
  protoOf(Lab).e47 = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v0, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    Companion_getInstance_33();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_33();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_33();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_33();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = x * Illuminant_getInstance().e48_1[0];
    var tmp1_packFloats = y * Illuminant_getInstance().e48_1[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.q7(32).sk(v2_0.vb(new Long(-1, 0)));
  };
  protoOf(Lab).f47 = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    Companion_getInstance_33();
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      Companion_getInstance_33();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_33();
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().e48_1[2];
  };
  protoOf(Lab).g47 = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().e48_1[0];
    var y1 = y / Illuminant_getInstance().e48_1[1];
    var z1 = z / Illuminant_getInstance().e48_1[2];
    var tmp;
    Companion_getInstance_33();
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp = Math.pow(x1, tmp0_pow);
    } else {
      Companion_getInstance_33();
      var tmp_0 = 7.787037 * x1;
      Companion_getInstance_33();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_33();
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp_1 = Math.pow(y1, tmp1_pow);
    } else {
      Companion_getInstance_33();
      var tmp_2 = 7.787037 * y1;
      Companion_getInstance_33();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_33();
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp_3 = Math.pow(z1, tmp2_pow);
    } else {
      Companion_getInstance_33();
      var tmp_4 = 7.787037 * z1;
      Companion_getInstance_33();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).i47 = function (v) {
    var x = v[0] / Illuminant_getInstance().e48_1[0];
    var y = v[1] / Illuminant_getInstance().e48_1[1];
    var z = v[2] / Illuminant_getInstance().e48_1[2];
    var tmp;
    Companion_getInstance_33();
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp = Math.pow(x, tmp0_pow);
    } else {
      Companion_getInstance_33();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_33();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_33();
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp_1 = Math.pow(y, tmp1_pow);
    } else {
      Companion_getInstance_33();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_33();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_33();
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp_3 = Math.pow(z, tmp2_pow);
    } else {
      Companion_getInstance_33();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_33();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.b49_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_29().v46_1.y46_1, Illuminant_getInstance().y47_1.t47(), Illuminant_getInstance().b48_1.t47()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.c49_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.d49_1 = inverse3x3(this.b49_1);
    this.e49_1 = inverse3x3(this.c49_1);
  }
  var Companion_instance_20;
  function Companion_getInstance_34() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Oklab(name, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_30().p41_1, id);
  }
  protoOf(Oklab).j41 = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).k41 = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).d47 = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_34().e49_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_34().d49_1, v);
    return v;
  };
  protoOf(Oklab).e47 = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_34().d49_1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_34().d49_1, v02, v12, v22);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(v03));
    var v2_0 = toLong(toBits(v13));
    return v1_0.q7(32).sk(v2_0.vb(new Long(-1, 0)));
  };
  protoOf(Oklab).f47 = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_34().e49_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_34().d49_1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).g47 = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_34().b49_1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_34().b49_1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_34().b49_1, x, y, z);
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v0;
    var tmp = sign(tmp0_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v0;
    var tmp2_pow = Math.abs(tmp1_abs);
    var tmp3_pow = 1.0 / 3.0;
    v0 = tmp * Math.pow(tmp2_pow, tmp3_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v1;
    var tmp_0 = sign(tmp4_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v1;
    var tmp6_pow = Math.abs(tmp5_abs);
    var tmp7_pow = 1.0 / 3.0;
    v1 = tmp_0 * Math.pow(tmp6_pow, tmp7_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v2;
    var tmp_1 = sign(tmp8_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v2;
    var tmp10_pow = Math.abs(tmp9_abs);
    var tmp11_pow = 1.0 / 3.0;
    v2 = tmp_1 * Math.pow(tmp10_pow, tmp11_pow);
    var v01 = mul3x3Float3_0(Companion_getInstance_34().c49_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_34().c49_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_34().c49_1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).i47 = function (v) {
    mul3x3Float3(Companion_getInstance_34().b49_1, v);
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v[0];
    var tmp = sign(tmp0_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v[0];
    var tmp2_pow = Math.abs(tmp1_abs);
    var tmp3_pow = 1.0 / 3.0;
    v[0] = tmp * Math.pow(tmp2_pow, tmp3_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v[1];
    var tmp_0 = sign(tmp4_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v[1];
    var tmp6_pow = Math.abs(tmp5_abs);
    var tmp7_pow = 1.0 / 3.0;
    v[1] = tmp_0 * Math.pow(tmp6_pow, tmp7_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v[2];
    var tmp_1 = sign(tmp8_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v[2];
    var tmp10_pow = Math.abs(tmp9_abs);
    var tmp11_pow = 1.0 / 3.0;
    v[2] = tmp_1 * Math.pow(tmp10_pow, tmp11_pow);
    mul3x3Float3(Companion_getInstance_34().c49_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.j47_1 = _RenderIntent___init__impl__jceahd(0);
    this.k47_1 = _RenderIntent___init__impl__jceahd(1);
    this.l47_1 = _RenderIntent___init__impl__jceahd(2);
    this.m47_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_21;
  function Companion_getInstance_35() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().b40_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().b48_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().f40_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.b42_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.e42_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.j42(point);
    var rB = b.j42(point);
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    return Math.abs(tmp0_abs) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().c40_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().b40_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.r47_1;
    var wy = whitePoint.s47_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.i49_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).j42 = function (double) {
    return this.i49_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.o49_1 === 0.0 ? function_0.p49_1 === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.o49_1 === 0.0 ? function_0.p49_1 === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_36().q49_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_36().q49_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Companion_getInstance_31();
    Rgb.call($this, colorSpace.g41_1, colorSpace.y41_1, whitePoint, transform, colorSpace.b42_1, colorSpace.e42_1, colorSpace.v41_1, colorSpace.w41_1, colorSpace.x41_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.q49_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_22;
  function Companion_getInstance_36() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.r49_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).j42 = function (double) {
    return this.r49_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.s49_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).j42 = function (double) {
    return this.s49_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.t49_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).j42 = function (double) {
    return this.t49_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.u49_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).j42 = function (double) {
    return this.u49_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.b42_1.j42(x), this$0.v41_1, this$0.w41_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.b42_1.j42(x), this$0.v41_1, this$0.w41_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.e42_1.j42(coerceIn_0(x, this$0.v41_1, this$0.w41_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.e42_1.j42(coerceIn_0(x, this$0.v41_1, this$0.w41_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.k49_1, $function.l49_1, $function.m49_1, $function.n49_1, $function.j49_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.k49_1, $function.l49_1, $function.m49_1, $function.n49_1, $function.o49_1, $function.p49_1, $function.j49_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.k49_1, $function.l49_1, $function.m49_1, $function.n49_1, $function.j49_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.k49_1, $function.l49_1, $function.m49_1, $function.n49_1, $function.o49_1, $function.p49_1, $function.j49_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      var tmp1_pow = 1.0 / $gamma;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      tmp$ret$0 = Math.pow(tmp0_pow, $gamma);
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_36();
    ColorSpace.call(this, name, Companion_getInstance_30().n41_1, id);
    this.u41_1 = whitePoint;
    this.v41_1 = min;
    this.w41_1 = max;
    this.x41_1 = transferParameters;
    this.b42_1 = oetf;
    var tmp = this;
    tmp.c42_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.d42_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.e42_1 = eotf;
    var tmp_2 = this;
    tmp_2.f42_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.g42_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.v41_1 >= this.w41_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.v41_1 + ', max=' + this.w41_1 + '; min must ' + 'be strictly < max');
    }
    this.y41_1 = xyPrimaries(Companion_getInstance_36(), primaries);
    if (transform == null) {
      this.z41_1 = computeXYZMatrix(Companion_getInstance_36(), this.y41_1, this.u41_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.z41_1 = transform;
    }
    this.a42_1 = inverse3x3(this.z41_1);
    this.h42_1 = isWideGamut(Companion_getInstance_36(), this.y41_1, this.v41_1, this.w41_1);
    this.i42_1 = isSrgb(Companion_getInstance_36(), this.y41_1, this.u41_1, oetf, eotf, this.v41_1, this.w41_1, id);
  }
  protoOf(Rgb).l41 = function () {
    return this.i42_1;
  };
  protoOf(Rgb).j41 = function (component) {
    return this.v41_1;
  };
  protoOf(Rgb).k41 = function (component) {
    return this.w41_1;
  };
  protoOf(Rgb).d47 = function (v) {
    v[0] = this.g42_1.j42(v[0]);
    v[1] = this.g42_1.j42(v[1]);
    v[2] = this.g42_1.j42(v[2]);
    return mul3x3Float3(this.z41_1, v);
  };
  protoOf(Rgb).e47 = function (v0, v1, v2) {
    var v00 = this.g42_1.j42(v0);
    var v10 = this.g42_1.j42(v1);
    var v20 = this.g42_1.j42(v2);
    var x = mul3x3Float3_0(this.z41_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.z41_1, v00, v10, v20);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(x));
    var v2_0 = toLong(toBits(y));
    return v1_0.q7(32).sk(v2_0.vb(new Long(-1, 0)));
  };
  protoOf(Rgb).f47 = function (v0, v1, v2) {
    var v00 = this.g42_1.j42(v0);
    var v10 = this.g42_1.j42(v1);
    var v20 = this.g42_1.j42(v2);
    var z = mul3x3Float3_2(this.z41_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).g47 = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.a42_1, x, y, z);
    var v1 = mul3x3Float3_1(this.a42_1, x, y, z);
    var v2 = mul3x3Float3_2(this.a42_1, x, y, z);
    v0 = this.d42_1.j42(v0);
    v1 = this.d42_1.j42(v1);
    v2 = this.d42_1.j42(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).i47 = function (v) {
    mul3x3Float3(this.a42_1, v);
    v[0] = this.d42_1.j42(v[0]);
    v[1] = this.d42_1.j42(v[1]);
    v[2] = this.d42_1.j42(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.v41_1, this.v41_1) === 0))
      return false;
    if (!(compareTo(rgb.w41_1, this.w41_1) === 0))
      return false;
    if (!this.u41_1.equals(rgb.u41_1))
      return false;
    if (!contentEquals(this.y41_1, rgb.y41_1))
      return false;
    if (!(this.x41_1 == null)) {
      return equals(this.x41_1, rgb.x41_1);
    } else if (rgb.x41_1 == null) {
      return true;
    }
    return !equals(this.b42_1, rgb.b42_1) ? false : equals(this.e42_1, rgb.e42_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.u41_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.y41_1) | 0;
    result = imul(31, result) + (!(this.v41_1 === 0.0) ? toBits(this.v41_1) : 0) | 0;
    result = imul(31, result) + (!(this.w41_1 === 0.0) ? toBits(this.w41_1) : 0) | 0;
    result = imul(31, result) + (!(this.x41_1 == null) ? this.x41_1.hashCode() : 0) | 0;
    if (this.x41_1 == null) {
      result = imul(31, result) + hashCode(this.b42_1) | 0;
      result = imul(31, result) + hashCode(this.e42_1) | 0;
    }
    return result;
  };
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.j49_1 = gamma;
    this.k49_1 = a;
    this.l49_1 = b;
    this.m49_1 = c;
    this.n49_1 = d;
    this.o49_1 = e;
    this.p49_1 = f;
    if ((((((isNaN_0(this.k49_1) ? true : isNaN_0(this.l49_1)) ? true : isNaN_0(this.m49_1)) ? true : isNaN_0(this.n49_1)) ? true : isNaN_0(this.o49_1)) ? true : isNaN_0(this.p49_1)) ? true : isNaN_0(this.j49_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.n49_1 >= 0.0 ? this.n49_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.n49_1));
    }
    if (this.n49_1 === 0.0 ? this.k49_1 === 0.0 ? true : this.j49_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.n49_1 >= 1.0 ? this.m49_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.k49_1 === 0.0 ? true : this.j49_1 === 0.0) ? this.m49_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.m49_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.k49_1 < 0.0 ? true : this.j49_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.j49_1 + ', a=' + this.k49_1 + ', b=' + this.l49_1 + ', c=' + this.m49_1 + ', d=' + this.n49_1 + ', e=' + this.o49_1 + ', f=' + this.p49_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.j49_1);
    result = imul(result, 31) + getNumberHashCode(this.k49_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l49_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m49_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n49_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o49_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p49_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.j49_1, tmp0_other_with_cast.j49_1))
      return false;
    if (!equals(this.k49_1, tmp0_other_with_cast.k49_1))
      return false;
    if (!equals(this.l49_1, tmp0_other_with_cast.l49_1))
      return false;
    if (!equals(this.m49_1, tmp0_other_with_cast.m49_1))
      return false;
    if (!equals(this.n49_1, tmp0_other_with_cast.n49_1))
      return false;
    if (!equals(this.o49_1, tmp0_other_with_cast.o49_1))
      return false;
    if (!equals(this.p49_1, tmp0_other_with_cast.p49_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.r47_1 = x;
    this.s47_1 = y;
  }
  protoOf(WhitePoint).t47 = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.r47_1 / this.s47_1, 1.0, (1.0 - this.r47_1 - this.s47_1) / this.s47_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.r47_1 + ', y=' + this.s47_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.r47_1);
    result = imul(result, 31) + getNumberHashCode(this.s47_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.r47_1, tmp0_other_with_cast.r47_1))
      return false;
    if (!equals(this.s47_1, tmp0_other_with_cast.s47_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_30().o41_1, id);
  }
  protoOf(Xyz).j41 = function (component) {
    return -2.0;
  };
  protoOf(Xyz).k41 = function (component) {
    return 2.0;
  };
  protoOf(Xyz).d47 = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).e47 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = clamp(this, v0);
    var tmp1_packFloats = clamp(this, v1);
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.q7(32).sk(v2_0.vb(new Long(-1, 0)));
  };
  protoOf(Xyz).f47 = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).g47 = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).i47 = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function get_DefaultDensity() {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return DefaultDensity;
  }
  var DefaultDensity;
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.a4a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.c4a(Companion_getInstance_22().g45_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.a4a_1 = tmp0_apply;
      tmp = tmp0_apply;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.b4a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.c4a(Companion_getInstance_22().h45_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.b4a_1 = tmp0_apply;
      tmp = tmp0_apply;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var tmp0_apply = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(tmp0_apply.s3g() === drawStyle.d4a_1)) {
          tmp0_apply.r3g(drawStyle.d4a_1);
        }
        if (!(tmp0_apply.j4a() === drawStyle.f4a_1)) {
          tmp0_apply.i4a(drawStyle.f4a_1);
        }
        if (!(tmp0_apply.l4a() === drawStyle.e4a_1)) {
          tmp0_apply.k4a(drawStyle.e4a_1);
        }
        if (!(tmp0_apply.n4a() === drawStyle.g4a_1)) {
          tmp0_apply.m4a(drawStyle.g4a_1);
        }
        if (!equals(tmp0_apply.p4a(), drawStyle.h4a_1)) {
          tmp0_apply.o4a(drawStyle.h4a_1);
        }
        tmp = tmp0_apply;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.l3x($this.x33(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.h3v() === alpha)) {
      tmp0_apply.g3y(alpha);
    }
    if (!equals(tmp0_apply.r4a(), colorFilter)) {
      tmp0_apply.q4a(colorFilter);
    }
    if (!(tmp0_apply.t4a() === blendMode)) {
      tmp0_apply.s4a(blendMode);
    }
    if (!(tmp0_apply.v4a() === filterQuality)) {
      tmp0_apply.u4a(filterQuality);
    }
    return tmp0_apply;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_37().y44_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.e3y(), targetColor)) {
      tmp0_apply.d3y(targetColor);
    }
    if (!(tmp0_apply.f3y() == null)) {
      tmp0_apply.w3g(null);
    }
    if (!equals(tmp0_apply.r4a(), colorFilter)) {
      tmp0_apply.q4a(colorFilter);
    }
    if (!(tmp0_apply.t4a() === blendMode)) {
      tmp0_apply.s4a(blendMode);
    }
    if (!(tmp0_apply.v4a() === filterQuality)) {
      tmp0_apply.u4a(filterQuality);
    }
    return tmp0_apply;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_37().y44_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.e3y(), targetColor)) {
      tmp0_apply.d3y(targetColor);
    }
    if (!(tmp0_apply.f3y() == null)) {
      tmp0_apply.w3g(null);
    }
    if (!equals(tmp0_apply.r4a(), colorFilter)) {
      tmp0_apply.q4a(colorFilter);
    }
    if (!(tmp0_apply.t4a() === blendMode)) {
      tmp0_apply.s4a(blendMode);
    }
    if (!(tmp0_apply.s3g() === strokeWidth)) {
      tmp0_apply.r3g(strokeWidth);
    }
    if (!(tmp0_apply.l4a() === miter)) {
      tmp0_apply.k4a(miter);
    }
    if (!(tmp0_apply.j4a() === cap)) {
      tmp0_apply.i4a(cap);
    }
    if (!(tmp0_apply.n4a() === join)) {
      tmp0_apply.m4a(join);
    }
    if (!equals(tmp0_apply.p4a(), pathEffect)) {
      tmp0_apply.o4a(pathEffect);
    }
    if (!(tmp0_apply.v4a() === filterQuality)) {
      tmp0_apply.u4a(filterQuality);
    }
    return tmp0_apply;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_37().y44_1 : filterQuality;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance().q34_1 : size;
    this.w4a_1 = density;
    this.x4a_1 = layoutDirection;
    this.y4a_1 = canvas;
    this.z4a_1 = size;
  }
  protoOf(DrawParams).y4 = function () {
    return this.w4a_1;
  };
  protoOf(DrawParams).z4 = function () {
    return this.x4a_1;
  };
  protoOf(DrawParams).db = function () {
    return this.y4a_1;
  };
  protoOf(DrawParams).a4b = function () {
    return this.z4a_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.w4a_1 + ', layoutDirection=' + this.x4a_1 + ', canvas=' + this.y4a_1 + ', size=' + new Size_0(this.z4a_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.w4a_1);
    result = imul(result, 31) + this.x4a_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.y4a_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.z4a_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.w4a_1, tmp0_other_with_cast.w4a_1))
      return false;
    if (!this.x4a_1.equals(tmp0_other_with_cast.x4a_1))
      return false;
    if (!equals(this.y4a_1, tmp0_other_with_cast.y4a_1))
      return false;
    if (!equals(this.z4a_1, tmp0_other_with_cast.z4a_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.c4b_1 = this$0;
    this.b4b_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).a3k = function () {
    return this.c4b_1.y49_1.y4a_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).d4b = function (value) {
    this.c4b_1.y49_1.z4a_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).x33 = function () {
    return this.c4b_1.y49_1.z4a_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).e4b = function () {
    return this.b4b_1;
  };
  function CanvasDrawScope() {
    this.y49_1 = new DrawParams();
    var tmp = this;
    tmp.z49_1 = new CanvasDrawScope$drawContext$1(this);
    this.a4a_1 = null;
    this.b4a_1 = null;
  }
  protoOf(CanvasDrawScope).f4b = function () {
    return this.y49_1.x4a_1;
  };
  protoOf(CanvasDrawScope).q35 = function () {
    return this.y49_1.w4a_1.q35();
  };
  protoOf(CanvasDrawScope).r35 = function () {
    return this.y49_1.w4a_1.r35();
  };
  protoOf(CanvasDrawScope).g4b = function () {
    return this.z49_1;
  };
  protoOf(CanvasDrawScope).h4b = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.y49_1.y4a_1;
    Companion_getInstance_38();
    return tmp.s3z(start, end, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, Companion_getInstance_27().q46_1, pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).f45 = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.u3z(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).c45 = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.u3z(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).l4b = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.y49_1.y4a_1.z3z(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).e45 = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.v3z(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).b45 = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.y49_1.y4a_1.v3z(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).o4b = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.w3z(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).q4b = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.x3z(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a45 = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.y3z(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).d45 = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.y49_1.y4a_1.y3z(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.v4b_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).x33 = function () {
    return this.v4b_1.x33();
  };
  protoOf(asDrawTransform$1).w4b = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.v4b_1.a3k();
    // Inline function 'kotlin.contracts.contract' call
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.x33()) - (left + right), _Size___get_height__impl__a04p02(this.x33()) - (top + bottom));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Size___get_width__impl__58y75t(updatedSize) >= 0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0 : false)) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      var message = 'Width and height must be greater than or equal to zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v4b_1.d4b(updatedSize);
    tmp0_let.i3z(left, top);
  };
  protoOf(asDrawTransform$1).m3z = function (left, top, right, bottom, clipOp) {
    this.v4b_1.a3k().m3z(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).q3z = function (path, clipOp) {
    this.v4b_1.a3k().q3z(path, clipOp);
  };
  protoOf(asDrawTransform$1).i3z = function (left, top) {
    this.v4b_1.a3k().i3z(left, top);
  };
  protoOf(asDrawTransform$1).y4b = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.v4b_1.a3k();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.i3z(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.j3z(scaleX, scaleY);
    tmp0_apply.i3z(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).z4b = function (matrix) {
    this.v4b_1.a3k().k3z(matrix);
  };
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function _init_properties_CanvasDrawScope_kt__90zepm() {
    if (!properties_initialized_CanvasDrawScope_kt_93ztlk) {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.x44_1 = Companion_getInstance_13().w3v_1;
    this.y44_1 = Companion_getInstance_18().o42_1;
  }
  var Companion_instance_23;
  function Companion_getInstance_37() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.a4c_1 = 0.0;
    this.b4c_1 = 4.0;
    this.c4c_1 = Companion_getInstance_26().m46_1;
    this.d4c_1 = Companion_getInstance_27().q46_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_38() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_38();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_38();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_38().c4c_1 : cap;
    join = join === VOID ? Companion_getInstance_38().d4c_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.d4a_1 = width;
    this.e4a_1 = miter;
    this.f4a_1 = cap;
    this.g4a_1 = join;
    this.h4a_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.d4a_1 === other.d4a_1))
      return false;
    if (!(this.e4a_1 === other.e4a_1))
      return false;
    if (!(this.f4a_1 === other.f4a_1))
      return false;
    if (!(this.g4a_1 === other.g4a_1))
      return false;
    if (!equals(this.h4a_1, other.h4a_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.d4a_1);
    result = imul(31, result) + getNumberHashCode(this.e4a_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.f4a_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.g4a_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.h4a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.d4a_1 + ', miter=' + this.e4a_1 + ', cap=' + new StrokeCap(this.f4a_1) + ', join=' + new StrokeJoin(this.g4a_1) + ', pathEffect=' + this.h4a_1 + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).f3z = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g3z = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h3z = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).i3z = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j3z = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).k3z = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).m3z = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q3z = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s3z = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u3z = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v3z = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).w3z = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).x3z = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y3z = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).z3z = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function validateSize($this, srcOffset, srcSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((((_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 ? _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0 : false) ? _IntSize___get_width__impl__d9yl4o(srcSize) >= 0 : false) ? _IntSize___get_height__impl__prv63b(srcSize) >= 0 : false) ? _IntSize___get_width__impl__d9yl4o(srcSize) <= $this.k4c_1.v33() : false) ? _IntSize___get_height__impl__prv63b(srcSize) <= $this.k4c_1.w33() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().q36_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.v33(), image.w33()) : srcSize;
    Painter.call(this);
    this.k4c_1 = image;
    this.l4c_1 = srcOffset;
    this.m4c_1 = srcSize;
    this.n4c_1 = Companion_getInstance_18().o42_1;
    this.o4c_1 = validateSize(this, this.l4c_1, this.m4c_1);
    this.p4c_1 = 1.0;
    this.q4c_1 = null;
  }
  protoOf(BitmapPainter).r4c = function (_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = _Size___get_width__impl__58y75t(_this__u8e3s4.x33());
    var tmp = roundToInt(tmp0_roundToInt);
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = _Size___get_height__impl__a04p02(_this__u8e3s4.x33());
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    _this__u8e3s4.m4b(this.k4c_1, this.l4c_1, this.m4c_1, VOID, IntSize(tmp, tmp$ret$1), this.p4c_1, VOID, this.q4c_1, VOID, this.n4c_1);
  };
  protoOf(BitmapPainter).s4c = function () {
    return toSize_0(this.o4c_1);
  };
  protoOf(BitmapPainter).t4c = function (alpha) {
    this.p4c_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).u4c = function (colorFilter) {
    this.q4c_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.k4c_1, other.k4c_1))
      return false;
    if (!equals(this.l4c_1, other.l4c_1))
      return false;
    if (!equals(this.m4c_1, other.m4c_1))
      return false;
    if (!(this.n4c_1 === other.n4c_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.k4c_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.l4c_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.m4c_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.n4c_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + this.k4c_1 + ', srcOffset=' + new IntOffset(this.l4c_1) + ', srcSize=' + new IntSize_0(this.m4c_1) + ', ' + ('filterQuality=' + new FilterQuality(this.n4c_1) + ')');
  };
  function BitmapPainter_0(image, srcOffset, srcSize, filterQuality) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().q36_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.v33(), image.w33()) : srcSize;
    filterQuality = filterQuality === VOID ? Companion_getInstance_18().o42_1 : filterQuality;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new BitmapPainter(image, srcOffset, srcSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.painter.BitmapPainter.<anonymous>' call
    tmp0_apply.n4c_1 = filterQuality;
    return tmp0_apply;
  }
  function obtainPaint($this) {
    var target = $this.v4c_1;
    if (target == null) {
      target = Paint();
      $this.v4c_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.x4c_1, colorFilter)) {
      var consumedColorFilter = $this.u4c(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.v4c_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.q4a(null);
          }
          $this.w4c_1 = false;
        } else {
          obtainPaint($this).q4a(colorFilter);
          $this.w4c_1 = true;
        }
      }
      $this.x4c_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.y4c_1 === alpha)) {
      var consumed = $this.t4c(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.v4c_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.g3y(alpha);
          }
          $this.w4c_1 = false;
        } else {
          obtainPaint($this).g3y(alpha);
          $this.w4c_1 = true;
        }
      }
      $this.y4c_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.z4c_1.equals(rtl)) {
      $this.b4d(rtl);
      $this.z4c_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.r4c($this$null);
      return Unit_getInstance();
    };
  }
  function Painter() {
    this.v4c_1 = null;
    this.w4c_1 = false;
    this.x4c_1 = null;
    this.y4c_1 = get_DefaultAlpha();
    this.z4c_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.a4d_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).t4c = function (alpha) {
    return false;
  };
  protoOf(Painter).u4c = function (colorFilter) {
    return false;
  };
  protoOf(Painter).b4d = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).c4d = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.f4b());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var tmp0_inset = _Size___get_width__impl__58y75t(_this__u8e3s4.x33()) - _Size___get_width__impl__58y75t(size);
    var tmp1_inset = _Size___get_height__impl__a04p02(_this__u8e3s4.x33()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.g4b().e4b().w4b(0.0, 0.0, tmp0_inset, tmp1_inset);
    // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
    if ((alpha > 0.0 ? _Size___get_width__impl__58y75t(size) > 0 : false) ? _Size___get_height__impl__a04p02(size) > 0 : false) {
      if (this.w4c_1) {
        var layerRect = Rect(Companion_getInstance_0().k33_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0_anonymous = _this__u8e3s4.g4b().a3k();
        var tmp0_withSaveLayer = obtainPaint(this);
        var tmp;
        try {
          tmp0_anonymous.h3z(layerRect, tmp0_withSaveLayer);
          this.r4c(_this__u8e3s4);
          tmp = Unit_getInstance();
        }finally {
          tmp0_anonymous.g3z();
        }
      } else {
        this.r4c(_this__u8e3s4);
      }
    }
    _this__u8e3s4.g4b().e4b().w4b(-0.0, -0.0, -tmp0_inset, -tmp1_inset);
  };
  function FloatResult(value, isValid) {
    var tmp;
    if (value === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = value;
    }
    value = tmp;
    isValid = isValid === VOID ? false : isValid;
    this.d4d_1 = value;
    this.e4d_1 = isValid;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.f4d_1 = -10;
    this.g4d_1 = 10;
    this.h4d_1 = -325;
    this.i4d_1 = 1024;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.j4d_1 = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
    var tmp_0 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_0.k4d_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
  }
  protoOf(Companion_25).l4d = function (s, start, end, result) {
    var tmp = result;
    FloatCompanionObject_getInstance();
    tmp.d4d_1 = NaN;
    result.e4d_1 = false;
    if (start === end)
      return start;
    var index = start;
    var c = charSequenceGet(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end)
        return index;
      c = charSequenceGet(s, index);
      var tmp_0;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var tmp0_get_isDigit_522t0m = c;
      // Inline function 'kotlin.code' call
      var tmp0_get_code_gknlva = numberToChar(Char__minus_impl_a2frrh(tmp0_get_isDigit_522t0m, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(tmp0_get_code_gknlva) < 10)) {
        tmp_0 = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp_0 = false;
      }
      if (tmp_0)
        return index;
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    $l$loop: while (true) {
      var tmp_1;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var tmp1_get_isDigit_7e5t3 = c;
        // Inline function 'kotlin.code' call
        var tmp0_get_code_gknlva_0 = numberToChar(Char__minus_impl_a2frrh(tmp1_get_isDigit_7e5t3, _Char___init__impl__6a9atx(48)));
        tmp_1 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva_0) < 10;
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = (new Long(10, 0)).l9(significand);
      // Inline function 'kotlin.code' call
      var tmp2_get_code_n2njg8 = c;
      var tmp_3 = Char__toInt_impl_vasixd(tmp2_get_code_n2njg8);
      // Inline function 'kotlin.code' call
      significand = tmp_2.r7(toLong(tmp_3 - 48 | 0));
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      index = index + 1 | 0;
      var tmp3_charAt = index;
      var tmp_4;
      if (tmp3_charAt < charSequenceLength(s)) {
        tmp_4 = charSequenceGet(s, tmp3_charAt);
      } else {
        tmp_4 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_4;
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) ? c === _Char___init__impl__6a9atx(46) : false) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var tmp4_parseFourDigits = index;
        var tmp$ret$7;
        // Inline function 'kotlin.code' call
        var tmp0_get_code_gknlva_1 = charSequenceGet(s, tmp4_parseFourDigits);
        tmp$ret$7 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva_1);
        var tmp_5 = toLong(tmp$ret$7);
        var tmp$ret$8;
        // Inline function 'kotlin.code' call
        var tmp1_get_code_jtnknr = charSequenceGet(s, tmp4_parseFourDigits + 1 | 0);
        tmp$ret$8 = Char__toInt_impl_vasixd(tmp1_get_code_jtnknr);
        var tmp_6 = tmp_5.sk(toLong(tmp$ret$8).q7(16));
        var tmp$ret$9;
        // Inline function 'kotlin.code' call
        var tmp2_get_code_n2njg8_0 = charSequenceGet(s, tmp4_parseFourDigits + 2 | 0);
        tmp$ret$9 = Char__toInt_impl_vasixd(tmp2_get_code_n2njg8_0);
        var tmp_7 = tmp_6.sk(toLong(tmp$ret$9).q7(32));
        var tmp$ret$10;
        // Inline function 'kotlin.code' call
        var tmp3_get_code_qbni8p = charSequenceGet(s, tmp4_parseFourDigits + 3 | 0);
        tmp$ret$10 = Char__toInt_impl_vasixd(tmp3_get_code_qbni8p);
        var v = tmp_7.sk(toLong(tmp$ret$10).q7(48));
        var base = v.m9(new Long(3145776, 3145776));
        var predicate = v.r7(new Long(4587590, 4587590)).sk(base);
        var tmp_8;
        var tmp$ret$11;
        // Inline function 'kotlin.ULong.toLong' call
        tmp$ret$11 = _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-8323200, -8323200)));
        if (!predicate.vb(tmp$ret$11).equals(new Long(0, 0))) {
          tmp_8 = -1;
        } else {
          tmp_8 = base.l9(new Long(655361, 65536100)).od(48).f1();
        }
        var digits = tmp_8;
        if (digits < 0)
          break $l$loop_0;
        significand = (new Long(10000, 0)).l9(significand).r7(toLong(digits));
        index = index + 4 | 0;
      }
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      var tmp5_charAt = index;
      var tmp_9;
      if (tmp5_charAt < charSequenceLength(s)) {
        tmp_9 = charSequenceGet(s, tmp5_charAt);
      } else {
        tmp_9 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_9;
      $l$loop_1: while (true) {
        var tmp_10;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var tmp6_get_isDigit_o2128k = c;
          // Inline function 'kotlin.code' call
          var tmp0_get_code_gknlva_2 = numberToChar(Char__minus_impl_a2frrh(tmp6_get_isDigit_o2128k, _Char___init__impl__6a9atx(48)));
          tmp_10 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva_2) < 10;
        } else {
          tmp_10 = false;
        }
        if (!tmp_10) {
          break $l$loop_1;
        }
        var tmp_11 = (new Long(10, 0)).l9(significand);
        // Inline function 'kotlin.code' call
        var tmp7_get_code_vpgokj = c;
        var tmp_12 = Char__toInt_impl_vasixd(tmp7_get_code_vpgokj);
        // Inline function 'kotlin.code' call
        significand = tmp_11.r7(toLong(tmp_12 - 48 | 0));
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        index = index + 1 | 0;
        var tmp8_charAt = index;
        var tmp_13;
        if (tmp8_charAt < charSequenceLength(s)) {
          tmp_13 = charSequenceGet(s, tmp8_charAt);
        } else {
          tmp_13 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_13;
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0)
      return index;
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var tmp9_get_code_p7gqzl = c;
    var tmp_14 = Char__toInt_impl_vasixd(tmp9_get_code_p7gqzl) | 32;
    // Inline function 'kotlin.code' call
    if (tmp_14 === 101) {
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      index = index + 1 | 0;
      var tmp10_charAt = index;
      var tmp_15;
      if (tmp10_charAt < charSequenceLength(s)) {
        tmp_15 = charSequenceGet(s, tmp10_charAt);
      } else {
        tmp_15 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_15;
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative ? true : c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charSequenceGet(s, index);
      $l$loop_2: while (true) {
        var tmp_16;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var tmp11_get_isDigit_acg0t8 = c;
          // Inline function 'kotlin.code' call
          var tmp0_get_code_gknlva_3 = numberToChar(Char__minus_impl_a2frrh(tmp11_get_isDigit_acg0t8, _Char___init__impl__6a9atx(48)));
          tmp_16 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva_3) < 10;
        } else {
          tmp_16 = false;
        }
        if (!tmp_16) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_17 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var tmp12_get_code_3qabkl = c;
          var tmp_18 = Char__toInt_impl_vasixd(tmp12_get_code_3qabkl);
          // Inline function 'kotlin.code' call
          exponentNumber = tmp_17 + (tmp_18 - 48 | 0) | 0;
        }
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        index = index + 1 | 0;
        var tmp13_charAt = index;
        var tmp_19;
        if (tmp13_charAt < charSequenceLength(s)) {
          tmp_19 = charSequenceGet(s, tmp13_charAt);
        } else {
          tmp_19 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_19;
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charSequenceGet(s, retryIndex);
      while (!(index === end) ? c === _Char___init__impl__6a9atx(48) ? true : c === _Char___init__impl__6a9atx(46) : false) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        retryIndex = retryIndex + 1 | 0;
        var tmp14_charAt = retryIndex;
        var tmp_20;
        if (tmp14_charAt < charSequenceLength(s)) {
          tmp_20 = charSequenceGet(s, tmp14_charAt);
        } else {
          tmp_20 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_20;
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charSequenceGet(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_21;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.ULong.compareTo' call
            // Inline function 'kotlin.toULong' call
            var tmp15_toULong = significand;
            var tmp16_compareTo = _ULong___init__impl__c78o9k(tmp15_toULong);
            tmp_21 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp16_compareTo), _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1486618624, 232830643)))) < 0;
          } else {
            tmp_21 = false;
          }
          if (!tmp_21) {
            break $l$loop_3;
          }
          var tmp_22 = (new Long(10, 0)).l9(significand);
          // Inline function 'kotlin.code' call
          var tmp17_get_code_jza5iy = c;
          var tmp_23 = Char__toInt_impl_vasixd(tmp17_get_code_jza5iy);
          // Inline function 'kotlin.code' call
          significand = tmp_22.r7(toLong(tmp_23 - 48 | 0));
          // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
          retryIndex = retryIndex + 1 | 0;
          var tmp18_charAt = retryIndex;
          var tmp_24;
          if (tmp18_charAt < charSequenceLength(s)) {
            tmp_24 = charSequenceGet(s, tmp18_charAt);
          } else {
            tmp_24 = _Char___init__impl__6a9atx(0);
          }
          c = tmp_24;
        }
        // Inline function 'kotlin.ULong.compareTo' call
        // Inline function 'kotlin.toULong' call
        var tmp19_toULong = significand;
        var tmp20_compareTo = _ULong___init__impl__c78o9k(tmp19_toULong);
        if (ulongCompare(_ULong___get_data__impl__fggpzb(tmp20_compareTo), _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1486618624, 232830643)))) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charSequenceGet(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_25;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.ULong.compareTo' call
              // Inline function 'kotlin.toULong' call
              var tmp21_toULong = significand;
              var tmp22_compareTo = _ULong___init__impl__c78o9k(tmp21_toULong);
              tmp_25 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp22_compareTo), _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1486618624, 232830643)))) < 0;
            } else {
              tmp_25 = false;
            }
            if (!tmp_25) {
              break $l$loop_4;
            }
            var tmp_26 = (new Long(10, 0)).l9(significand);
            // Inline function 'kotlin.code' call
            var tmp23_get_code_ybyv2j = c;
            var tmp_27 = Char__toInt_impl_vasixd(tmp23_get_code_ybyv2j);
            // Inline function 'kotlin.code' call
            significand = tmp_26.r7(toLong(tmp_27 - 48 | 0));
            // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
            retryIndex = retryIndex + 1 | 0;
            var tmp24_charAt = retryIndex;
            var tmp_28;
            if (tmp24_charAt < charSequenceLength(s)) {
              tmp_28 = charSequenceGet(s, tmp24_charAt);
            } else {
              tmp_28 = _Char___init__impl__6a9atx(0);
            }
            c = tmp_28;
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_29;
    var tmp_30;
    if (exponent <= 10 ? -10 <= exponent : false) {
      tmp_30 = !tooManyDigits;
    } else {
      tmp_30 = false;
    }
    if (tmp_30) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.toULong' call
      var tmp25_toULong = significand;
      var tmp26_compareTo = _ULong___init__impl__c78o9k(tmp25_toULong);
      // Inline function 'kotlin.ULong.shl' call
      var tmp27_compareTo = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1, 0))).q7(24));
      tmp_29 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp26_compareTo), _ULong___get_data__impl__fggpzb(tmp27_compareTo)) <= 0;
    } else {
      tmp_29 = false;
    }
    if (tmp_29) {
      var f = significand.vk();
      if (exponent < 0) {
        f = f / this.j4d_1[-exponent | 0];
      } else {
        f = f * this.j4d_1[exponent];
      }
      result.e4d_1 = true;
      result.d4d_1 = isNegative ? -f : f;
      return index;
    }
    if (significand.equals(new Long(0, 0))) {
      result.e4d_1 = true;
      result.d4d_1 = isNegative ? -0.0 : 0.0;
      return index;
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      try {
        var tmp_31 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var tmp28_substring = index;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp29_toFloat = s.substring(start, tmp28_substring);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_31.d4d_1 = toDouble(tmp29_toFloat);
      }finally {
        result.e4d_1 = true;
      }
      return index;
    }
    // Inline function 'kotlin.ULong.toLong' call
    var tmp30_toLong = ULongArray__get_impl_pr71q9(this.k4d_1, exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(tmp30_toLong);
    var lz = countLeadingZeroBits(significand);
    significand = significand.q7(lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var tmp31_fullMultiplicationHighBits = significand;
    var xLo = tmp31_fullMultiplicationHighBits.vb(new Long(-1, 0));
    var xHi = tmp31_fullMultiplicationHighBits.od(32);
    var yLo = significandFactor.vb(new Long(-1, 0));
    var yHi = significandFactor.od(32);
    var xTimesYHi = xHi.l9(yHi);
    var xTimesYMid = xLo.l9(yHi);
    var yTimesXMid = xHi.l9(yLo);
    var xTimesYLo = xLo.l9(yLo);
    var carry = yTimesXMid.r7(xTimesYLo.od(32)).r7(xTimesYMid.vb(new Long(-1, 0)));
    var upper = xTimesYHi.r7(carry.od(32)).r7(xTimesYMid.od(32));
    var upperBit = upper.od(63).f1();
    var mantissa = upper.od(upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (upper.vb(new Long(511, 0)).equals(new Long(511, 0)) ? true : upper.vb(new Long(511, 0)).equals(new Long(0, 0)) ? mantissa.vb(new Long(3, 0)).equals(new Long(1, 0)) : false) {
      try {
        var tmp_32 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var tmp32_substring = index;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp33_toFloat = s.substring(start, tmp32_substring);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_32.d4d_1 = toDouble(tmp33_toFloat);
      }finally {
        result.e4d_1 = true;
      }
      return index;
    }
    // Inline function 'kotlin.Long.plus' call
    mantissa = mantissa.r7(new Long(1, 0));
    mantissa = mantissa.od(1);
    if (mantissa.x(new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = mantissa.vb(new Long(-1, -1048577));
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var tmp35_times = new Long(217706, 0);
    var tmp36_times = exponent;
    var adjustedExponent = tmp35_times.l9(toLong(tmp36_times)).z9(16).r7(new Long(1024, 0)).r7(new Long(63, 0));
    // Inline function 'kotlin.Long.minus' call
    var tmp39_minus = lz;
    var realExponent = adjustedExponent.m9(toLong(tmp39_minus));
    if (realExponent.x(new Long(1, 0)) < 0 ? true : realExponent.x(new Long(2046, 0)) > 0) {
      try {
        var tmp_33 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var tmp40_substring = index;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp41_toFloat = s.substring(start, tmp40_substring);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_33.d4d_1 = toDouble(tmp41_toFloat);
      }finally {
        result.e4d_1 = true;
      }
      return index;
    }
    mantissa = mantissa.sk(realExponent.q7(52));
    mantissa = mantissa.sk(isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    result.e4d_1 = true;
    var tmp_34 = result;
    // Inline function 'kotlin.fromBits' call
    DoubleCompanionObject_getInstance();
    var tmp43_fromBits = mantissa;
    tmp_34.d4d_1 = doubleFromBits(tmp43_fromBits);
    return index;
  };
  var Companion_instance_25;
  function Companion_getInstance_39() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function addNode($this, node) {
    $this.m4d_1.a(node);
    return $this;
  }
  function PathBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m4d_1 = ArrayList_init_$Create$_0();
  }
  protoOf(PathBuilder).n4d = function () {
    return this.m4d_1;
  };
  protoOf(PathBuilder).o4d = function () {
    return addNode(this, Close_getInstance());
  };
  protoOf(PathBuilder).n3h = function (x, y) {
    return addNode(this, new MoveTo(x, y));
  };
  protoOf(PathBuilder).p4d = function (dx, dy) {
    return addNode(this, new RelativeMoveTo(dx, dy));
  };
  protoOf(PathBuilder).p3h = function (x, y) {
    return addNode(this, new LineTo(x, y));
  };
  protoOf(PathBuilder).q4d = function (dx, dy) {
    return addNode(this, new RelativeLineTo(dx, dy));
  };
  protoOf(PathBuilder).r4d = function (x) {
    return addNode(this, new HorizontalTo(x));
  };
  protoOf(PathBuilder).s4d = function (dx) {
    return addNode(this, new RelativeHorizontalTo(dx));
  };
  protoOf(PathBuilder).t4d = function (y) {
    return addNode(this, new VerticalTo(y));
  };
  protoOf(PathBuilder).u4d = function (dy) {
    return addNode(this, new RelativeVerticalTo(dy));
  };
  protoOf(PathBuilder).v4d = function (x1, y1, x2, y2, x3, y3) {
    return addNode(this, new CurveTo(x1, y1, x2, y2, x3, y3));
  };
  protoOf(PathBuilder).w4d = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return addNode(this, new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
  };
  protoOf(PathBuilder).x4d = function (x1, y1, x2, y2) {
    return addNode(this, new ReflectiveCurveTo(x1, y1, x2, y2));
  };
  protoOf(PathBuilder).y4d = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
  };
  protoOf(PathBuilder).z4d = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1) {
    return addNode(this, new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1));
  };
  protoOf(PathBuilder).a4e = function (a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1) {
    return addNode(this, new RelativeArcTo(a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1));
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.d4e_1 = dx;
    this.e4e_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.d4e_1 + ', dy=' + this.e4e_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.d4e_1);
    result = imul(result, 31) + getNumberHashCode(this.e4e_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.d4e_1, tmp0_other_with_cast.d4e_1))
      return false;
    if (!equals(this.e4e_1, tmp0_other_with_cast.e4e_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.h4e_1 = x;
    this.i4e_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.h4e_1 + ', y=' + this.i4e_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.h4e_1);
    result = imul(result, 31) + getNumberHashCode(this.i4e_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.h4e_1, tmp0_other_with_cast.h4e_1))
      return false;
    if (!equals(this.i4e_1, tmp0_other_with_cast.i4e_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.l4e_1 = dx;
    this.m4e_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.l4e_1 + ', dy=' + this.m4e_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.l4e_1);
    result = imul(result, 31) + getNumberHashCode(this.m4e_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.l4e_1, tmp0_other_with_cast.l4e_1))
      return false;
    if (!equals(this.m4e_1, tmp0_other_with_cast.m4e_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.p4e_1 = x;
    this.q4e_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.p4e_1 + ', y=' + this.q4e_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.p4e_1);
    result = imul(result, 31) + getNumberHashCode(this.q4e_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.p4e_1, tmp0_other_with_cast.p4e_1))
      return false;
    if (!equals(this.q4e_1, tmp0_other_with_cast.q4e_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.t4e_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.t4e_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.t4e_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.t4e_1, tmp0_other_with_cast.t4e_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.w4e_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.w4e_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.w4e_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.w4e_1, tmp0_other_with_cast.w4e_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.z4e_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.z4e_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.z4e_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.z4e_1, tmp0_other_with_cast.z4e_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.c4f_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.c4f_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.c4f_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.c4f_1, tmp0_other_with_cast.c4f_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.f4f_1 = dx1;
    this.g4f_1 = dy1;
    this.h4f_1 = dx2;
    this.i4f_1 = dy2;
    this.j4f_1 = dx3;
    this.k4f_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.f4f_1 + ', dy1=' + this.g4f_1 + ', dx2=' + this.h4f_1 + ', dy2=' + this.i4f_1 + ', dx3=' + this.j4f_1 + ', dy3=' + this.k4f_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.f4f_1);
    result = imul(result, 31) + getNumberHashCode(this.g4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4f_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.f4f_1, tmp0_other_with_cast.f4f_1))
      return false;
    if (!equals(this.g4f_1, tmp0_other_with_cast.g4f_1))
      return false;
    if (!equals(this.h4f_1, tmp0_other_with_cast.h4f_1))
      return false;
    if (!equals(this.i4f_1, tmp0_other_with_cast.i4f_1))
      return false;
    if (!equals(this.j4f_1, tmp0_other_with_cast.j4f_1))
      return false;
    if (!equals(this.k4f_1, tmp0_other_with_cast.k4f_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.n4f_1 = x1;
    this.o4f_1 = y1;
    this.p4f_1 = x2;
    this.q4f_1 = y2;
    this.r4f_1 = x3;
    this.s4f_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.n4f_1 + ', y1=' + this.o4f_1 + ', x2=' + this.p4f_1 + ', y2=' + this.q4f_1 + ', x3=' + this.r4f_1 + ', y3=' + this.s4f_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.n4f_1);
    result = imul(result, 31) + getNumberHashCode(this.o4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4f_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.n4f_1, tmp0_other_with_cast.n4f_1))
      return false;
    if (!equals(this.o4f_1, tmp0_other_with_cast.o4f_1))
      return false;
    if (!equals(this.p4f_1, tmp0_other_with_cast.p4f_1))
      return false;
    if (!equals(this.q4f_1, tmp0_other_with_cast.q4f_1))
      return false;
    if (!equals(this.r4f_1, tmp0_other_with_cast.r4f_1))
      return false;
    if (!equals(this.s4f_1, tmp0_other_with_cast.s4f_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.v4f_1 = dx1;
    this.w4f_1 = dy1;
    this.x4f_1 = dx2;
    this.y4f_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.v4f_1 + ', dy1=' + this.w4f_1 + ', dx2=' + this.x4f_1 + ', dy2=' + this.y4f_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.v4f_1);
    result = imul(result, 31) + getNumberHashCode(this.w4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x4f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y4f_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.v4f_1, tmp0_other_with_cast.v4f_1))
      return false;
    if (!equals(this.w4f_1, tmp0_other_with_cast.w4f_1))
      return false;
    if (!equals(this.x4f_1, tmp0_other_with_cast.x4f_1))
      return false;
    if (!equals(this.y4f_1, tmp0_other_with_cast.y4f_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.b4g_1 = x1;
    this.c4g_1 = y1;
    this.d4g_1 = x2;
    this.e4g_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.b4g_1 + ', y1=' + this.c4g_1 + ', x2=' + this.d4g_1 + ', y2=' + this.e4g_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.b4g_1);
    result = imul(result, 31) + getNumberHashCode(this.c4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e4g_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.b4g_1, tmp0_other_with_cast.b4g_1))
      return false;
    if (!equals(this.c4g_1, tmp0_other_with_cast.c4g_1))
      return false;
    if (!equals(this.d4g_1, tmp0_other_with_cast.d4g_1))
      return false;
    if (!equals(this.e4g_1, tmp0_other_with_cast.e4g_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.h4g_1 = dx1;
    this.i4g_1 = dy1;
    this.j4g_1 = dx2;
    this.k4g_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.h4g_1 + ', dy1=' + this.i4g_1 + ', dx2=' + this.j4g_1 + ', dy2=' + this.k4g_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.h4g_1);
    result = imul(result, 31) + getNumberHashCode(this.i4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4g_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.h4g_1, tmp0_other_with_cast.h4g_1))
      return false;
    if (!equals(this.i4g_1, tmp0_other_with_cast.i4g_1))
      return false;
    if (!equals(this.j4g_1, tmp0_other_with_cast.j4g_1))
      return false;
    if (!equals(this.k4g_1, tmp0_other_with_cast.k4g_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.n4g_1 = x1;
    this.o4g_1 = y1;
    this.p4g_1 = x2;
    this.q4g_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.n4g_1 + ', y1=' + this.o4g_1 + ', x2=' + this.p4g_1 + ', y2=' + this.q4g_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.n4g_1);
    result = imul(result, 31) + getNumberHashCode(this.o4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q4g_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.n4g_1, tmp0_other_with_cast.n4g_1))
      return false;
    if (!equals(this.o4g_1, tmp0_other_with_cast.o4g_1))
      return false;
    if (!equals(this.p4g_1, tmp0_other_with_cast.p4g_1))
      return false;
    if (!equals(this.q4g_1, tmp0_other_with_cast.q4g_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.t4g_1 = dx;
    this.u4g_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.t4g_1 + ', dy=' + this.u4g_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.t4g_1);
    result = imul(result, 31) + getNumberHashCode(this.u4g_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.t4g_1, tmp0_other_with_cast.t4g_1))
      return false;
    if (!equals(this.u4g_1, tmp0_other_with_cast.u4g_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.x4g_1 = x;
    this.y4g_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x4g_1 + ', y=' + this.y4g_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x4g_1);
    result = imul(result, 31) + getNumberHashCode(this.y4g_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x4g_1, tmp0_other_with_cast.x4g_1))
      return false;
    if (!equals(this.y4g_1, tmp0_other_with_cast.y4g_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.b4h_1 = horizontalEllipseRadius;
    this.c4h_1 = verticalEllipseRadius;
    this.d4h_1 = theta;
    this.e4h_1 = isMoreThanHalf;
    this.f4h_1 = isPositiveArc;
    this.g4h_1 = arcStartDx;
    this.h4h_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.b4h_1 + ', verticalEllipseRadius=' + this.c4h_1 + ', theta=' + this.d4h_1 + ', isMoreThanHalf=' + this.e4h_1 + ', isPositiveArc=' + this.f4h_1 + ', arcStartDx=' + this.g4h_1 + ', arcStartDy=' + this.h4h_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.b4h_1);
    result = imul(result, 31) + getNumberHashCode(this.c4h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d4h_1) | 0;
    result = imul(result, 31) + (this.e4h_1 | 0) | 0;
    result = imul(result, 31) + (this.f4h_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g4h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h4h_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.b4h_1, tmp0_other_with_cast.b4h_1))
      return false;
    if (!equals(this.c4h_1, tmp0_other_with_cast.c4h_1))
      return false;
    if (!equals(this.d4h_1, tmp0_other_with_cast.d4h_1))
      return false;
    if (!(this.e4h_1 === tmp0_other_with_cast.e4h_1))
      return false;
    if (!(this.f4h_1 === tmp0_other_with_cast.f4h_1))
      return false;
    if (!equals(this.g4h_1, tmp0_other_with_cast.g4h_1))
      return false;
    if (!equals(this.h4h_1, tmp0_other_with_cast.h4h_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.k4h_1 = horizontalEllipseRadius;
    this.l4h_1 = verticalEllipseRadius;
    this.m4h_1 = theta;
    this.n4h_1 = isMoreThanHalf;
    this.o4h_1 = isPositiveArc;
    this.p4h_1 = arcStartX;
    this.q4h_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.k4h_1 + ', verticalEllipseRadius=' + this.l4h_1 + ', theta=' + this.m4h_1 + ', isMoreThanHalf=' + this.n4h_1 + ', isPositiveArc=' + this.o4h_1 + ', arcStartX=' + this.p4h_1 + ', arcStartY=' + this.q4h_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.k4h_1);
    result = imul(result, 31) + getNumberHashCode(this.l4h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4h_1) | 0;
    result = imul(result, 31) + (this.n4h_1 | 0) | 0;
    result = imul(result, 31) + (this.o4h_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q4h_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.k4h_1, tmp0_other_with_cast.k4h_1))
      return false;
    if (!equals(this.l4h_1, tmp0_other_with_cast.l4h_1))
      return false;
    if (!equals(this.m4h_1, tmp0_other_with_cast.m4h_1))
      return false;
    if (!(this.n4h_1 === tmp0_other_with_cast.n4h_1))
      return false;
    if (!(this.o4h_1 === tmp0_other_with_cast.o4h_1))
      return false;
    if (!equals(this.p4h_1, tmp0_other_with_cast.p4h_1))
      return false;
    if (!equals(this.q4h_1, tmp0_other_with_cast.q4h_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.r4h_1 = isCurve;
    this.s4h_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(90)) {
      nodes.a(Close_getInstance());
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp1_anonymous = index;
        var node = new RelativeMoveTo(args[tmp1_anonymous], args[tmp1_anonymous + 1 | 0]);
        var tmp;
        var tmp_0;
        if (node instanceof MoveTo) {
          tmp_0 = index > 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = new LineTo(args[index], args[index + 1 | 0]);
        } else {
          var tmp_1;
          if (node instanceof RelativeMoveTo) {
            tmp_1 = index > 0;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp = new RelativeLineTo(args[index], args[index + 1 | 0]);
          } else {
            tmp = node;
          }
        }
        nodes.a(tmp);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp3_anonymous = index_0;
        var node_0 = new MoveTo(args[tmp3_anonymous], args[tmp3_anonymous + 1 | 0]);
        var tmp_2;
        var tmp_3;
        if (node_0 instanceof MoveTo) {
          tmp_3 = index_0 > 0;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp_2 = new LineTo(args[index_0], args[index_0 + 1 | 0]);
        } else {
          var tmp_4;
          if (node_0 instanceof RelativeMoveTo) {
            tmp_4 = index_0 > 0;
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp_2 = new RelativeLineTo(args[index_0], args[index_0 + 1 | 0]);
          } else {
            tmp_2 = node_0;
          }
        }
        nodes.a(tmp_2);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 2 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp5_anonymous = index_1;
        var node_1 = new RelativeLineTo(args[tmp5_anonymous], args[tmp5_anonymous + 1 | 0]);
        var tmp_5;
        var tmp_6;
        if (node_1 instanceof MoveTo) {
          tmp_6 = index_1 > 0;
        } else {
          tmp_6 = false;
        }
        if (tmp_6) {
          tmp_5 = new LineTo(args[index_1], args[index_1 + 1 | 0]);
        } else {
          var tmp_7;
          if (node_1 instanceof RelativeMoveTo) {
            tmp_7 = index_1 > 0;
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp_5 = new RelativeLineTo(args[index_1], args[index_1 + 1 | 0]);
          } else {
            tmp_5 = node_1;
          }
        }
        nodes.a(tmp_5);
        index_1 = index_1 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 2 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp7_anonymous = index_2;
        var node_2 = new LineTo(args[tmp7_anonymous], args[tmp7_anonymous + 1 | 0]);
        var tmp_8;
        var tmp_9;
        if (node_2 instanceof MoveTo) {
          tmp_9 = index_2 > 0;
        } else {
          tmp_9 = false;
        }
        if (tmp_9) {
          tmp_8 = new LineTo(args[index_2], args[index_2 + 1 | 0]);
        } else {
          var tmp_10;
          if (node_2 instanceof RelativeMoveTo) {
            tmp_10 = index_2 > 0;
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp_8 = new RelativeLineTo(args[index_2], args[index_2 + 1 | 0]);
          } else {
            tmp_8 = node_2;
          }
        }
        nodes.a(tmp_8);
        index_2 = index_2 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp9_anonymous = index_3;
        var node_3 = new RelativeHorizontalTo(args[tmp9_anonymous]);
        var tmp_11;
        var tmp_12;
        if (node_3 instanceof MoveTo) {
          tmp_12 = index_3 > 0;
        } else {
          tmp_12 = false;
        }
        if (tmp_12) {
          tmp_11 = new LineTo(args[index_3], args[index_3 + 1 | 0]);
        } else {
          var tmp_13;
          if (node_3 instanceof RelativeMoveTo) {
            tmp_13 = index_3 > 0;
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp_11 = new RelativeLineTo(args[index_3], args[index_3 + 1 | 0]);
          } else {
            tmp_11 = node_3;
          }
        }
        nodes.a(tmp_11);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp11_anonymous = index_4;
        var node_4 = new HorizontalTo(args[tmp11_anonymous]);
        var tmp_14;
        var tmp_15;
        if (node_4 instanceof MoveTo) {
          tmp_15 = index_4 > 0;
        } else {
          tmp_15 = false;
        }
        if (tmp_15) {
          tmp_14 = new LineTo(args[index_4], args[index_4 + 1 | 0]);
        } else {
          var tmp_16;
          if (node_4 instanceof RelativeMoveTo) {
            tmp_16 = index_4 > 0;
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp_14 = new RelativeLineTo(args[index_4], args[index_4 + 1 | 0]);
          } else {
            tmp_14 = node_4;
          }
        }
        nodes.a(tmp_14);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 1 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp13_anonymous = index_5;
        var node_5 = new RelativeVerticalTo(args[tmp13_anonymous]);
        var tmp_17;
        var tmp_18;
        if (node_5 instanceof MoveTo) {
          tmp_18 = index_5 > 0;
        } else {
          tmp_18 = false;
        }
        if (tmp_18) {
          tmp_17 = new LineTo(args[index_5], args[index_5 + 1 | 0]);
        } else {
          var tmp_19;
          if (node_5 instanceof RelativeMoveTo) {
            tmp_19 = index_5 > 0;
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp_17 = new RelativeLineTo(args[index_5], args[index_5 + 1 | 0]);
          } else {
            tmp_17 = node_5;
          }
        }
        nodes.a(tmp_17);
        index_5 = index_5 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 1 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp15_anonymous = index_6;
        var node_6 = new VerticalTo(args[tmp15_anonymous]);
        var tmp_20;
        var tmp_21;
        if (node_6 instanceof MoveTo) {
          tmp_21 = index_6 > 0;
        } else {
          tmp_21 = false;
        }
        if (tmp_21) {
          tmp_20 = new LineTo(args[index_6], args[index_6 + 1 | 0]);
        } else {
          var tmp_22;
          if (node_6 instanceof RelativeMoveTo) {
            tmp_22 = index_6 > 0;
          } else {
            tmp_22 = false;
          }
          if (tmp_22) {
            tmp_20 = new RelativeLineTo(args[index_6], args[index_6 + 1 | 0]);
          } else {
            tmp_20 = node_6;
          }
        }
        nodes.a(tmp_20);
        index_6 = index_6 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 6 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp17_anonymous = index_7;
        var node_7 = new RelativeCurveTo(args[tmp17_anonymous], args[tmp17_anonymous + 1 | 0], args[tmp17_anonymous + 2 | 0], args[tmp17_anonymous + 3 | 0], args[tmp17_anonymous + 4 | 0], args[tmp17_anonymous + 5 | 0]);
        var tmp_23;
        var tmp_24;
        if (node_7 instanceof MoveTo) {
          tmp_24 = index_7 > 0;
        } else {
          tmp_24 = false;
        }
        if (tmp_24) {
          tmp_23 = new LineTo(args[index_7], args[index_7 + 1 | 0]);
        } else {
          var tmp_25;
          if (node_7 instanceof RelativeMoveTo) {
            tmp_25 = index_7 > 0;
          } else {
            tmp_25 = false;
          }
          if (tmp_25) {
            tmp_23 = new RelativeLineTo(args[index_7], args[index_7 + 1 | 0]);
          } else {
            tmp_23 = node_7;
          }
        }
        nodes.a(tmp_23);
        index_7 = index_7 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 6 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp19_anonymous = index_8;
        var node_8 = new CurveTo(args[tmp19_anonymous], args[tmp19_anonymous + 1 | 0], args[tmp19_anonymous + 2 | 0], args[tmp19_anonymous + 3 | 0], args[tmp19_anonymous + 4 | 0], args[tmp19_anonymous + 5 | 0]);
        var tmp_26;
        var tmp_27;
        if (node_8 instanceof MoveTo) {
          tmp_27 = index_8 > 0;
        } else {
          tmp_27 = false;
        }
        if (tmp_27) {
          tmp_26 = new LineTo(args[index_8], args[index_8 + 1 | 0]);
        } else {
          var tmp_28;
          if (node_8 instanceof RelativeMoveTo) {
            tmp_28 = index_8 > 0;
          } else {
            tmp_28 = false;
          }
          if (tmp_28) {
            tmp_26 = new RelativeLineTo(args[index_8], args[index_8 + 1 | 0]);
          } else {
            tmp_26 = node_8;
          }
        }
        nodes.a(tmp_26);
        index_8 = index_8 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp21_anonymous = index_9;
        var node_9 = new RelativeReflectiveCurveTo(args[tmp21_anonymous], args[tmp21_anonymous + 1 | 0], args[tmp21_anonymous + 2 | 0], args[tmp21_anonymous + 3 | 0]);
        var tmp_29;
        var tmp_30;
        if (node_9 instanceof MoveTo) {
          tmp_30 = index_9 > 0;
        } else {
          tmp_30 = false;
        }
        if (tmp_30) {
          tmp_29 = new LineTo(args[index_9], args[index_9 + 1 | 0]);
        } else {
          var tmp_31;
          if (node_9 instanceof RelativeMoveTo) {
            tmp_31 = index_9 > 0;
          } else {
            tmp_31 = false;
          }
          if (tmp_31) {
            tmp_29 = new RelativeLineTo(args[index_9], args[index_9 + 1 | 0]);
          } else {
            tmp_29 = node_9;
          }
        }
        nodes.a(tmp_29);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp23_anonymous = index_10;
        var node_10 = new ReflectiveCurveTo(args[tmp23_anonymous], args[tmp23_anonymous + 1 | 0], args[tmp23_anonymous + 2 | 0], args[tmp23_anonymous + 3 | 0]);
        var tmp_32;
        var tmp_33;
        if (node_10 instanceof MoveTo) {
          tmp_33 = index_10 > 0;
        } else {
          tmp_33 = false;
        }
        if (tmp_33) {
          tmp_32 = new LineTo(args[index_10], args[index_10 + 1 | 0]);
        } else {
          var tmp_34;
          if (node_10 instanceof RelativeMoveTo) {
            tmp_34 = index_10 > 0;
          } else {
            tmp_34 = false;
          }
          if (tmp_34) {
            tmp_32 = new RelativeLineTo(args[index_10], args[index_10 + 1 | 0]);
          } else {
            tmp_32 = node_10;
          }
        }
        nodes.a(tmp_32);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 4 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp25_anonymous = index_11;
        var node_11 = new RelativeQuadTo(args[tmp25_anonymous], args[tmp25_anonymous + 1 | 0], args[tmp25_anonymous + 2 | 0], args[tmp25_anonymous + 3 | 0]);
        var tmp_35;
        var tmp_36;
        if (node_11 instanceof MoveTo) {
          tmp_36 = index_11 > 0;
        } else {
          tmp_36 = false;
        }
        if (tmp_36) {
          tmp_35 = new LineTo(args[index_11], args[index_11 + 1 | 0]);
        } else {
          var tmp_37;
          if (node_11 instanceof RelativeMoveTo) {
            tmp_37 = index_11 > 0;
          } else {
            tmp_37 = false;
          }
          if (tmp_37) {
            tmp_35 = new RelativeLineTo(args[index_11], args[index_11 + 1 | 0]);
          } else {
            tmp_35 = node_11;
          }
        }
        nodes.a(tmp_35);
        index_11 = index_11 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 4 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp27_anonymous = index_12;
        var node_12 = new QuadTo(args[tmp27_anonymous], args[tmp27_anonymous + 1 | 0], args[tmp27_anonymous + 2 | 0], args[tmp27_anonymous + 3 | 0]);
        var tmp_38;
        var tmp_39;
        if (node_12 instanceof MoveTo) {
          tmp_39 = index_12 > 0;
        } else {
          tmp_39 = false;
        }
        if (tmp_39) {
          tmp_38 = new LineTo(args[index_12], args[index_12 + 1 | 0]);
        } else {
          var tmp_40;
          if (node_12 instanceof RelativeMoveTo) {
            tmp_40 = index_12 > 0;
          } else {
            tmp_40 = false;
          }
          if (tmp_40) {
            tmp_38 = new RelativeLineTo(args[index_12], args[index_12 + 1 | 0]);
          } else {
            tmp_38 = node_12;
          }
        }
        nodes.a(tmp_38);
        index_12 = index_12 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 2 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp29_anonymous = index_13;
        var node_13 = new RelativeReflectiveQuadTo(args[tmp29_anonymous], args[tmp29_anonymous + 1 | 0]);
        var tmp_41;
        var tmp_42;
        if (node_13 instanceof MoveTo) {
          tmp_42 = index_13 > 0;
        } else {
          tmp_42 = false;
        }
        if (tmp_42) {
          tmp_41 = new LineTo(args[index_13], args[index_13 + 1 | 0]);
        } else {
          var tmp_43;
          if (node_13 instanceof RelativeMoveTo) {
            tmp_43 = index_13 > 0;
          } else {
            tmp_43 = false;
          }
          if (tmp_43) {
            tmp_41 = new RelativeLineTo(args[index_13], args[index_13 + 1 | 0]);
          } else {
            tmp_41 = node_13;
          }
        }
        nodes.a(tmp_41);
        index_13 = index_13 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 2 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp31_anonymous = index_14;
        var node_14 = new ReflectiveQuadTo(args[tmp31_anonymous], args[tmp31_anonymous + 1 | 0]);
        var tmp_44;
        var tmp_45;
        if (node_14 instanceof MoveTo) {
          tmp_45 = index_14 > 0;
        } else {
          tmp_45 = false;
        }
        if (tmp_45) {
          tmp_44 = new LineTo(args[index_14], args[index_14 + 1 | 0]);
        } else {
          var tmp_46;
          if (node_14 instanceof RelativeMoveTo) {
            tmp_46 = index_14 > 0;
          } else {
            tmp_46 = false;
          }
          if (tmp_46) {
            tmp_44 = new RelativeLineTo(args[index_14], args[index_14 + 1 | 0]);
          } else {
            tmp_44 = node_14;
          }
        }
        nodes.a(tmp_44);
        index_14 = index_14 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_15 = count - 7 | 0;
      var index_15 = 0;
      while (index_15 <= end_15) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp33_anonymous = index_15;
        var node_15 = new RelativeArcTo(args[tmp33_anonymous], args[tmp33_anonymous + 1 | 0], args[tmp33_anonymous + 2 | 0], !(compareTo(args[tmp33_anonymous + 3 | 0], 0.0) === 0), !(compareTo(args[tmp33_anonymous + 4 | 0], 0.0) === 0), args[tmp33_anonymous + 5 | 0], args[tmp33_anonymous + 6 | 0]);
        var tmp_47;
        var tmp_48;
        if (node_15 instanceof MoveTo) {
          tmp_48 = index_15 > 0;
        } else {
          tmp_48 = false;
        }
        if (tmp_48) {
          tmp_47 = new LineTo(args[index_15], args[index_15 + 1 | 0]);
        } else {
          var tmp_49;
          if (node_15 instanceof RelativeMoveTo) {
            tmp_49 = index_15 > 0;
          } else {
            tmp_49 = false;
          }
          if (tmp_49) {
            tmp_47 = new RelativeLineTo(args[index_15], args[index_15 + 1 | 0]);
          } else {
            tmp_47 = node_15;
          }
        }
        nodes.a(tmp_47);
        index_15 = index_15 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_16 = count - 7 | 0;
      var index_16 = 0;
      while (index_16 <= end_16) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var tmp35_anonymous = index_16;
        var node_16 = new ArcTo(args[tmp35_anonymous], args[tmp35_anonymous + 1 | 0], args[tmp35_anonymous + 2 | 0], !(compareTo(args[tmp35_anonymous + 3 | 0], 0.0) === 0), !(compareTo(args[tmp35_anonymous + 4 | 0], 0.0) === 0), args[tmp35_anonymous + 5 | 0], args[tmp35_anonymous + 6 | 0]);
        var tmp_50;
        var tmp_51;
        if (node_16 instanceof MoveTo) {
          tmp_51 = index_16 > 0;
        } else {
          tmp_51 = false;
        }
        if (tmp_51) {
          tmp_50 = new LineTo(args[index_16], args[index_16 + 1 | 0]);
        } else {
          var tmp_52;
          if (node_16 instanceof RelativeMoveTo) {
            tmp_52 = index_16 > 0;
          } else {
            tmp_52 = false;
          }
          if (tmp_52) {
            tmp_50 = new RelativeLineTo(args[index_16], args[index_16 + 1 | 0]);
          } else {
            tmp_50 = node_16;
          }
        }
        nodes.a(tmp_50);
        index_16 = index_16 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + new Char(_this__u8e3s4));
  }
  var EmptyArray;
  function PathParser() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t4h_1 = ArrayList_init_$Create$_0();
    this.u4h_1 = new FloatResult();
    this.v4h_1 = new Float32Array(64);
  }
  protoOf(PathParser).w4h = function (pathData) {
    this.t4h_1.a4();
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, start), _Char___init__impl__6a9atx(32)) <= 0 : false) {
      start = start + 1 | 0;
    }
    while (end > start ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0 : false) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var tmp2 = index;
        index = tmp2 + 1 | 0;
        c = charSequenceGet(pathData, tmp2);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var tmp_0 = lowerChar - 97 | 0;
        // Inline function 'kotlin.code' call
        if (imul(tmp_0, lowerChar - 122 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          tmp = !(lowerChar === 101);
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var tmp1_get_code_jtnknr = command;
        var tmp_1 = Char__toInt_impl_vasixd(tmp1_get_code_jtnknr) | 32;
        // Inline function 'kotlin.code' call
        if (!(tmp_1 === 122)) {
          dataCount = 0;
          do {
            while (index < end ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, index), _Char___init__impl__6a9atx(32)) <= 0 : false) {
              index = index + 1 | 0;
            }
            index = Companion_getInstance_39().l4d(pathData, index, end, this.u4h_1);
            if (this.u4h_1.e4d_1) {
              var tmp_2 = this.v4h_1;
              var tmp4 = dataCount;
              dataCount = tmp4 + 1 | 0;
              tmp_2[tmp4] = this.u4h_1.d4d_1;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var tmp2_resizeNodeData = dataCount;
              if (tmp2_resizeNodeData >= this.v4h_1.length) {
                var src = this.v4h_1;
                this.v4h_1 = new Float32Array(imul(tmp2_resizeNodeData, 2));
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = this.v4h_1;
                var tmp1_copyInto = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, tmp0_copyInto, 0, 0, tmp1_copyInto);
              }
            }
            while (index < end ? charSequenceGet(pathData, index) === _Char___init__impl__6a9atx(44) : false) {
              index = index + 1 | 0;
            }
          }
           while (index < end ? this.u4h_1.e4d_1 : false);
        }
        // Inline function 'androidx.compose.ui.graphics.vector.PathParser.addNodes' call
        var tmp3_addNodes = command;
        var tmp4_addNodes = this.v4h_1;
        var tmp5_addNodes = dataCount;
        addPathNodes(tmp3_addNodes, this.t4h_1, tmp4_addNodes, tmp5_addNodes);
      }
    }
    return this;
  };
  protoOf(PathParser).x4h = function () {
    return this.t4h_1;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.j45();
    target.v45();
    target.i45(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.l() ? Close_getInstance() : _this__u8e3s4.m(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        // Inline function 'androidx.compose.ui.graphics.vector.toPath.<anonymous>' call
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.o1y();
          target.k45(currentX, currentY);
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.d4e_1;
            currentY = currentY + item.e4e_1;
            target.l45(item.d4e_1, item.e4e_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.h4e_1;
              currentY = item.i4e_1;
              target.k45(item.h4e_1, item.i4e_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.n45(item.l4e_1, item.m4e_1);
                currentX = currentX + item.l4e_1;
                currentY = currentY + item.m4e_1;
              } else {
                if (item instanceof LineTo) {
                  target.m45(item.p4e_1, item.q4e_1);
                  currentX = item.p4e_1;
                  currentY = item.q4e_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.n45(item.t4e_1, 0.0);
                    currentX = currentX + item.t4e_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.m45(item.w4e_1, currentY);
                      currentX = item.w4e_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.n45(0.0, item.z4e_1);
                        currentY = currentY + item.z4e_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.m45(currentX, item.c4f_1);
                          currentY = item.c4f_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.r45(item.f4f_1, item.g4f_1, item.h4f_1, item.i4f_1, item.j4f_1, item.k4f_1);
                            ctrlX = currentX + item.h4f_1;
                            ctrlY = currentY + item.i4f_1;
                            currentX = currentX + item.j4f_1;
                            currentY = currentY + item.k4f_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.q45(item.n4f_1, item.o4f_1, item.p4f_1, item.q4f_1, item.r4f_1, item.s4f_1);
                              ctrlX = item.p4f_1;
                              ctrlY = item.q4f_1;
                              currentX = item.r4f_1;
                              currentY = item.s4f_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.r4h_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.r45(reflectiveCtrlX, reflectiveCtrlY, item.v4f_1, item.w4f_1, item.x4f_1, item.y4f_1);
                                ctrlX = currentX + item.v4f_1;
                                ctrlY = currentY + item.w4f_1;
                                currentX = currentX + item.x4f_1;
                                currentY = currentY + item.y4f_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.r4h_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.q45(reflectiveCtrlX, reflectiveCtrlY, item.b4g_1, item.c4g_1, item.d4g_1, item.e4g_1);
                                  ctrlX = item.b4g_1;
                                  ctrlY = item.c4g_1;
                                  currentX = item.d4g_1;
                                  currentY = item.e4g_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.p45(item.h4g_1, item.i4g_1, item.j4g_1, item.k4g_1);
                                    ctrlX = currentX + item.h4g_1;
                                    ctrlY = currentY + item.i4g_1;
                                    currentX = currentX + item.j4g_1;
                                    currentY = currentY + item.k4g_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.o45(item.n4g_1, item.o4g_1, item.p4g_1, item.q4g_1);
                                      ctrlX = item.n4g_1;
                                      ctrlY = item.o4g_1;
                                      currentX = item.p4g_1;
                                      currentY = item.q4g_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.s4h_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.p45(reflectiveCtrlX, reflectiveCtrlY, item.t4g_1, item.u4g_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.t4g_1;
                                        currentY = currentY + item.u4g_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.s4h_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.o45(reflectiveCtrlX, reflectiveCtrlY, item.x4g_1, item.y4g_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.x4g_1;
                                          currentY = item.y4g_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.g4h_1 + currentX;
                                            var arcStartY = item.h4h_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.b4h_1, item.c4h_1, item.d4h_1, item.e4h_1, item.f4h_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.p4h_1, item.q4h_1, item.k4h_1, item.l4h_1, item.m4h_1, item.n4h_1, item.o4h_1);
                                              currentX = item.p4h_1;
                                              currentY = item.q4h_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * get_PI();
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_getInstance();
    }
    var disc = 1.0 / dsq - 0.25;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    // Inline function 'kotlin.math.atan2' call
    var tmp0_atan2 = y0p - cy;
    var tmp1_atan2 = x0p - cx;
    var eta0 = Math.atan2(tmp0_atan2, tmp1_atan2);
    // Inline function 'kotlin.math.atan2' call
    var tmp2_atan2 = y1p - cy;
    var tmp3_atan2 = x1p - cx;
    var eta1 = Math.atan2(tmp2_atan2, tmp3_atan2);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0.0)) {
      if (sweep > 0.0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = sweep * 4 / get_PI();
    var tmp1_ceil = Math.abs(tmp0_abs);
    tmp$ret$1 = Math.ceil(tmp1_ceil);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var tmp2_cos = eta1;
    var cosEta1 = Math.cos(tmp2_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp3_sin = eta1;
    var sinEta1 = Math.sin(tmp3_sin);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var tmp4_tan = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(tmp4_tan);
        // Inline function 'kotlin.math.sin' call
        var tmp5_sin = eta2 - eta1;
        var tmp = Math.sin(tmp5_sin);
        // Inline function 'kotlin.math.sqrt' call
        var tmp6_sqrt = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(tmp6_sqrt) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.q45(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_13().t3v_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().u3v_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_13().v3v_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_13().w3v_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().x3v_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().y3v_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().z3v_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().a3w_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().b3w_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().c3w_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().d3w_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().e3w_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().f3w_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_13().g3w_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().h3w_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().i3w_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().j3w_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().k3w_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().l3w_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().m3w_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().n3w_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().o3w_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().p3w_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().q3w_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().r3w_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().s3w_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().t3w_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().u3w_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().v3w_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().k3j(_this__u8e3s4.q33_1, _this__u8e3s4.r33_1, _this__u8e3s4.s33_1, _this__u8e3s4.t33_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k34_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l34_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l34_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m34_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m34_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n34_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n34_1);
    return Companion_getInstance_4().j3j(_this__u8e3s4.g34_1, _this__u8e3s4.h34_1, _this__u8e3s4.i34_1, _this__u8e3s4.j34_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.w39_1, _this__u8e3s4.x39_1, _this__u8e3s4.y39_1, _this__u8e3s4.z39_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).y4h_1;
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).z4h_1 = value;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!skiaBitmap.x37()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    tmp0_apply.l4i($this.z4h_1);
    return tmp0_apply.a4i_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().s3f(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.y4h_1.q3a(tmp0_use, Companion_getInstance_3().l3a(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().l3a(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.v4a(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      tmp0_use.o1y();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_15().o3z_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_15().p3z_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[6];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[10];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[14];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[7];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[11];
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[15];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_18().o42_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().p42_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().q42_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.y4h_1 = skia;
    this.z4h_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).f3z = function () {
    this.y4h_1.c3b();
  };
  protoOf(SkiaBackedCanvas).g3z = function () {
    this.y4h_1.e3b();
  };
  protoOf(SkiaBackedCanvas).h3z = function (bounds, paint) {
    this.y4h_1.d3b(bounds.q33_1, bounds.r33_1, bounds.s33_1, bounds.t33_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).i3z = function (dx, dy) {
    this.y4h_1.z33(dx, dy);
  };
  protoOf(SkiaBackedCanvas).j3z = function (sx, sy) {
    this.y4h_1.z3a(sx, sy);
  };
  protoOf(SkiaBackedCanvas).k3z = function (matrix) {
    if (!isIdentity(matrix)) {
      this.y4h_1.a3b(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).m3z = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.y4h_1.w3a(Companion_getInstance_3().k3j(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).q3z = function (path, clipOp) {
    var antiAlias = true;
    this.y4h_1.y3a(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).s3z = function (p1, p2, paint) {
    this.y4h_1.t39(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).u3z = function (left, top, right, bottom, paint) {
    this.y4h_1.v39(Companion_getInstance_3().k3j(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).v3z = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.y4h_1.b3a(Companion_getInstance_4().i3j(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).w3z = function (center, radius, paint) {
    this.y4h_1.a3a(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).x3z = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.y4h_1.u39(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).y3z = function (path, paint) {
    this.y4h_1.i3a(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).z3z = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.a4i_1.p3g(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.a4i_1.q3g()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.h3v() : alpha;
    multiplier = multiplier === VOID ? $this.b4i_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_22().g45_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_22().h45_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_26().m46_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_26().n46_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_26().o46_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_27().q46_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_27().r46_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_27().s46_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.a4i_1 = skia;
    this.b4i_1 = 1.0;
    this.c4i_1 = Companion_getInstance_13().w3v_1;
    this.d4i_1 = Companion_getInstance_22().g45_1;
    this.e4i_1 = Companion_getInstance_26().m46_1;
    this.f4i_1 = Companion_getInstance_27().r46_1;
    this.g4i_1 = 0.0;
    this.h4i_1 = Companion_getInstance_18().p42_1;
    this.i4i_1 = null;
    this.j4i_1 = null;
    this.k4i_1 = null;
  }
  protoOf(SkiaBackedPaint).m4i = function () {
    return this.a4i_1;
  };
  protoOf(SkiaBackedPaint).l4i = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.b4i_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).g3y = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).h3v = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.a4i_1.q3g()));
  };
  protoOf(SkiaBackedPaint).n3g = function (value) {
    this.a4i_1.n3g(value);
  };
  protoOf(SkiaBackedPaint).d3y = function (color) {
    this.a4i_1.p3g(toArgb(color));
  };
  protoOf(SkiaBackedPaint).e3y = function () {
    return Color_2(this.a4i_1.q3g());
  };
  protoOf(SkiaBackedPaint).s4a = function (value) {
    this.a4i_1.y3g(toSkia(value));
    this.c4i_1 = value;
  };
  protoOf(SkiaBackedPaint).t4a = function () {
    return this.c4i_1;
  };
  protoOf(SkiaBackedPaint).c4a = function (value) {
    this.a4i_1.o3g(toSkia_3(value, this));
    this.d4i_1 = value;
  };
  protoOf(SkiaBackedPaint).n4i = function () {
    return this.d4i_1;
  };
  protoOf(SkiaBackedPaint).r3g = function (value) {
    this.a4i_1.r3g(value);
  };
  protoOf(SkiaBackedPaint).s3g = function () {
    return this.a4i_1.s3g();
  };
  protoOf(SkiaBackedPaint).i4a = function (value) {
    this.a4i_1.u3g(toSkia_4(value, this));
    this.e4i_1 = value;
  };
  protoOf(SkiaBackedPaint).j4a = function () {
    return this.e4i_1;
  };
  protoOf(SkiaBackedPaint).m4a = function (value) {
    this.a4i_1.v3g(toSkia_5(value, this));
    this.f4i_1 = value;
  };
  protoOf(SkiaBackedPaint).n4a = function () {
    return this.f4i_1;
  };
  protoOf(SkiaBackedPaint).k4a = function (value) {
    this.a4i_1.t3g(value);
    this.g4i_1 = value;
  };
  protoOf(SkiaBackedPaint).l4a = function () {
    return this.g4i_1;
  };
  protoOf(SkiaBackedPaint).u4a = function (_set____db54di) {
    this.h4i_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).v4a = function () {
    return this.h4i_1;
  };
  protoOf(SkiaBackedPaint).w3g = function (value) {
    this.a4i_1.w3g(value);
    this.i4i_1 = value;
  };
  protoOf(SkiaBackedPaint).f3y = function () {
    return this.i4i_1;
  };
  protoOf(SkiaBackedPaint).q4a = function (value) {
    this.a4i_1.x3g(value == null ? null : asSkiaColorFilter(value));
    this.j4i_1 = value;
  };
  protoOf(SkiaBackedPaint).r4a = function () {
    return this.j4i_1;
  };
  protoOf(SkiaBackedPaint).o4a = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.a4i_1.b3h(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.k4i_1 = value;
  };
  protoOf(SkiaBackedPaint).p4a = function () {
    return this.k4i_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_24().c46_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_24().d46_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_24().e46_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_24().f46_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_24().g46_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.o4i_1 = internalPath;
  }
  protoOf(SkiaBackedPath).i45 = function (value) {
    var tmp = this.o4i_1;
    var tmp_0;
    if (value === Companion_getInstance_23().a46_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.h3h(tmp_0);
  };
  protoOf(SkiaBackedPath).j45 = function () {
    if (this.o4i_1.i3h().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_23().a46_1;
    } else {
      return Companion_getInstance_23().z45_1;
    }
  };
  protoOf(SkiaBackedPath).k45 = function (x, y) {
    this.o4i_1.n3h(x, y);
  };
  protoOf(SkiaBackedPath).l45 = function (dx, dy) {
    this.o4i_1.o3h(dx, dy);
  };
  protoOf(SkiaBackedPath).m45 = function (x, y) {
    this.o4i_1.p3h(x, y);
  };
  protoOf(SkiaBackedPath).n45 = function (dx, dy) {
    this.o4i_1.q3h(dx, dy);
  };
  protoOf(SkiaBackedPath).o45 = function (x1, y1, x2, y2) {
    this.o4i_1.r3h(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).p45 = function (dx1, dy1, dx2, dy2) {
    this.o4i_1.s3h(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).q45 = function (x1, y1, x2, y2, x3, y3) {
    this.o4i_1.t3h(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).r45 = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.o4i_1.u3h(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).s45 = function (rect) {
    this.o4i_1.x3h(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).w44 = function (roundRect) {
    this.o4i_1.z3h(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).t45 = function (path, offset) {
    this.o4i_1.b3i(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).o1y = function () {
    this.o4i_1.v3h();
  };
  protoOf(SkiaBackedPath).p25 = function () {
    var fillType = this.j45();
    this.o4i_1.j3h();
    this.i45(fillType);
  };
  protoOf(SkiaBackedPath).v45 = function () {
    this.o4i_1.k3h();
  };
  protoOf(SkiaBackedPath).w45 = function (offset) {
    this.o4i_1.d3i(Companion_getInstance_6().i3g(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).x45 = function () {
    var bounds = this.o4i_1.l3h();
    return new Rect_0(bounds.w39_1, bounds.x39_1, bounds.y39_1, bounds.z39_1);
  };
  protoOf(SkiaBackedPath).y45 = function (path1, path2, operation) {
    var path = Companion_getInstance_7().d3h(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.o4i_1 = path == null ? this.o4i_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).r20 = function () {
    return this.o4i_1.r20();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.o4i_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).p4i_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.q4i_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).r4i = function (path, forceClosed) {
    this.q4i_1.j3i(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).s4i = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.q4i_1.k3i(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).qd = function () {
    return this.q4i_1.qd();
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.m42_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_8().q3b(toArgb(color), toSkia(blendMode)));
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.g38(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.t4i_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.t4i_1 = bitmap;
    this.u4i_1 = toComposeColorSpace(this.t4i_1.j38());
    this.v4i_1 = toComposeConfig(this.t4i_1.i38());
    this.w4i_1 = !this.t4i_1.k38();
  }
  protoOf(SkiaBackedImageBitmap).x43 = function () {
    return this.v4i_1;
  };
  protoOf(SkiaBackedImageBitmap).w33 = function () {
    return this.t4i_1.w33();
  };
  protoOf(SkiaBackedImageBitmap).v33 = function () {
    return this.t4i_1.v33();
  };
  protoOf(SkiaBackedImageBitmap).y43 = function () {
    return Unit_getInstance();
  };
  function toBitmap(_this__u8e3s4) {
    var bitmap = Bitmap_init_$Create$();
    bitmap.g38(Companion_getInstance_9().x3f(_this__u8e3s4.v33(), _this__u8e3s4.w33(), ColorAlphaType_PREMUL_getInstance()));
    var canvas = Canvas_init_$Create$(bitmap);
    canvas.j3a(_this__u8e3s4, 0.0, 0.0);
    bitmap.y37();
    return bitmap;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_20().z43_1 ? Companion_getInstance_10().d3c_1 : _this__u8e3s4 === Companion_getInstance_20().a44_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_20().b44_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_20().c44_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_10().d3c_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().f40_1) ? Companion_getInstance_11().z3b_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().g40_1) ? Companion_getInstance_11().a3c_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().m40_1) ? Companion_getInstance_11().b3c_1 : Companion_getInstance_11().z3b_1;
  }
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_11().z3b_1) ? ColorSpaces_getInstance().f40_1 : equals(_this__u8e3s4, Companion_getInstance_11().a3c_1) ? ColorSpaces_getInstance().g40_1 : equals(_this__u8e3s4, Companion_getInstance_11().b3c_1) ? ColorSpaces_getInstance().m40_1 : ColorSpaces_getInstance().f40_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_10().d3c_1) ? Companion_getInstance_20().z43_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_20().a44_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_20().b44_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_20().c44_1 : Companion_getInstance_20().z43_1;
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    return tmp.m3j(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.n3j(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.o3j(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.g() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.g() === colorStops.g())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.g();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.m(tmp_2).y3w_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_28().c3x_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_28().d3x_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_28().e3x_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_28().f3x_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).i4b = drawLine$default;
  protoOf(CanvasDrawScope).j4b = drawRect$default;
  protoOf(CanvasDrawScope).k4b = drawRect$default_0;
  protoOf(CanvasDrawScope).m4b = drawImage$default;
  protoOf(CanvasDrawScope).n4b = drawRoundRect$default;
  protoOf(CanvasDrawScope).p4b = drawCircle$default;
  protoOf(CanvasDrawScope).r4b = drawArc$default;
  protoOf(CanvasDrawScope).s4b = drawPath$default;
  protoOf(CanvasDrawScope).t4b = drawPath$default_0;
  protoOf(CanvasDrawScope).u4b = get_center_0;
  protoOf(CanvasDrawScope).x33 = get_size;
  protoOf(CanvasDrawScope).s35 = toPx;
  protoOf(CanvasDrawScope).u35 = toPx_0;
  protoOf(CanvasDrawScope).t35 = roundToPx;
  protoOf(CanvasDrawScope).z35 = toDp;
  protoOf(CanvasDrawScope).a36 = toDp_0;
  protoOf(CanvasDrawScope).b36 = toSize;
  protoOf(asDrawTransform$1).x4b = clipPath$default_0;
  protoOf(EmptyCanvas).r3z = clipPath$default;
  protoOf(EmptyCanvas).l3z = clipRect;
  protoOf(EmptyCanvas).n3z = clipRect$default;
  protoOf(EmptyCanvas).t3z = drawRect;
  protoOf(SkiaBackedCanvas).r3z = clipPath$default;
  protoOf(SkiaBackedCanvas).l3z = clipRect;
  protoOf(SkiaBackedCanvas).n3z = clipRect$default;
  protoOf(SkiaBackedCanvas).t3z = drawRect;
  protoOf(SkiaBackedPath).u45 = addPath$default;
  //endregion
  //region block: init
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = BitmapPainter_0;
  _.$_$.e = Painter;
  _.$_$.f = PathBuilder;
  _.$_$.g = PathParser;
  _.$_$.h = toPath;
  _.$_$.i = BlendMode;
  _.$_$.j = Canvas_0;
  _.$_$.k = Color_2;
  _.$_$.l = Color_0;
  _.$_$.m = Color_1;
  _.$_$.n = Color;
  _.$_$.o = get_DefaultAlpha;
  _.$_$.p = FilterQuality;
  _.$_$.q = ImageBitmapConfig;
  _.$_$.r = ImageBitmap_0;
  _.$_$.s = ImageBitmap;
  _.$_$.t = Matrix;
  _.$_$.u = Generic;
  _.$_$.v = Rectangle;
  _.$_$.w = Rounded;
  _.$_$.x = Paint;
  _.$_$.y = PathFillType;
  _.$_$.z = PathMeasure;
  _.$_$.a1 = Path_0;
  _.$_$.b1 = get_RectangleShape;
  _.$_$.c1 = ShaderBrush;
  _.$_$.d1 = Shadow;
  _.$_$.e1 = SolidColor;
  _.$_$.f1 = StrokeCap;
  _.$_$.g1 = StrokeJoin;
  _.$_$.h1 = TileMode;
  _.$_$.i1 = set_alphaMultiplier;
  _.$_$.j1 = asComposeCanvas;
  _.$_$.k1 = asComposePaint;
  _.$_$.l1 = asSkiaPath;
  _.$_$.m1 = compositeOver;
  _.$_$.n1 = drawOutline;
  _.$_$.o1 = drawOutline_0;
  _.$_$.p1 = lerp_2;
  _.$_$.q1 = lerp_1;
  _.$_$.r1 = luminance;
  _.$_$.s1 = get_nativeCanvas;
  _.$_$.t1 = toArgb;
  _.$_$.u1 = toComposeImageBitmap;
  _.$_$.v1 = toComposeRect;
  _.$_$.w1 = toSkiaRRect;
  _.$_$.x1 = toSkiaRect;
  _.$_$.y1 = drawArc$default;
  _.$_$.z1 = drawCircle$default;
  _.$_$.a2 = drawImage$default;
  _.$_$.b2 = drawLine$default;
  _.$_$.c2 = drawPath$default_0;
  _.$_$.d2 = drawPath$default;
  _.$_$.e2 = drawRect$default;
  _.$_$.f2 = drawRect$default_0;
  _.$_$.g2 = drawRoundRect$default;
  _.$_$.h2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.i2 = _Color___init__impl__r6cqi2;
  _.$_$.j2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.k2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.l2 = Color__component1_impl_lz80qe;
  _.$_$.m2 = Color__component2_impl_mg9n4l;
  _.$_$.n2 = Color__component3_impl_mxb9is;
  _.$_$.o2 = Color__component4_impl_necvwz;
  _.$_$.p2 = Color__convert_impl_so5m8t;
  _.$_$.q2 = Color__hashCode_impl_vjyivj;
  _.$_$.r2 = _Color___get_value__impl__1pls5m;
  _.$_$.s2 = _FilterQuality___init__impl__nv51aq;
  _.$_$.t2 = _Matrix___init__impl__q3kp4w;
  _.$_$.u2 = Matrix__map_impl_7meu7m;
  _.$_$.v2 = Matrix__map_impl_7meu7m_0;
  _.$_$.w2 = Matrix__reset_impl_4l49i7;
  _.$_$.x2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.y2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.z2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.a3 = Matrix__scale_impl_6w89a4;
  _.$_$.b3 = Matrix__timesAssign_impl_oas521;
  _.$_$.c3 = _Matrix___get_values__impl__fblr7b;
  _.$_$.d3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.e3 = _StrokeCap___init__impl__kfgr27;
  _.$_$.f3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.g3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.h3 = Color__copy$default_impl_ectz3s;
  _.$_$.i3 = Matrix__scale$default_impl_snaws9;
  _.$_$.j3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.k3 = ColorSpaces_getInstance;
  _.$_$.l3 = Companion_getInstance_37;
  _.$_$.m3 = Fill_getInstance;
  _.$_$.n3 = Companion_getInstance_13;
  _.$_$.o3 = Companion_getInstance_14;
  _.$_$.p3 = Companion_getInstance_15;
  _.$_$.q3 = Companion_getInstance_16;
  _.$_$.r3 = Companion_getInstance_17;
  _.$_$.s3 = Companion_getInstance_20;
  _.$_$.t3 = Companion_getInstance_22;
  _.$_$.u3 = Companion_getInstance_23;
  _.$_$.v3 = Companion_getInstance_24;
  _.$_$.w3 = Companion_getInstance_25;
  _.$_$.x3 = Companion_getInstance_26;
  _.$_$.y3 = Companion_getInstance_27;
  _.$_$.z3 = Companion_getInstance_28;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-graphics.js.map
