(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var Enum = kotlin_kotlin.$_$.dj;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var toShort = kotlin_kotlin.$_$.be;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var equals = kotlin_kotlin.$_$.oc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var toBits = kotlin_kotlin.$_$.al;
  var compareTo = kotlin_kotlin.$_$.lc;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trim = kotlin_kotlin.$_$.si;
  var toString = kotlin_kotlin.$_$.ce;
  var split = kotlin_kotlin.$_$.qh;
  var getOrNull = kotlin_kotlin.$_$.n8;
  var toIntOrNull = kotlin_kotlin.$_$.ci;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u3;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var splitToSequence = kotlin_kotlin.$_$.oh;
  var mapNotNull = kotlin_kotlin.$_$.zf;
  var toList = kotlin_kotlin.$_$.jg;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var uintCompare = kotlin_kotlin.$_$.fl;
  var Companion_getInstance = kotlin_kotlin.$_$.o5;
  var UInt = kotlin_kotlin.$_$.wj;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var numberToChar = kotlin_kotlin.$_$.sd;
  var charArrayOf = kotlin_kotlin.$_$.fc;
  var concatToString = kotlin_kotlin.$_$.lg;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var decodeToString = kotlin_kotlin.$_$.og;
  var contentEquals = kotlin_kotlin.$_$.j7;
  var contentHashCode = kotlin_kotlin.$_$.n7;
  var contentHashCode_0 = kotlin_kotlin.$_$.m7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var NotImplementedError = kotlin_kotlin.$_$.lj;
  var Iterator = kotlin_kotlin.$_$.f6;
  var last = kotlin_kotlin.$_$.h9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var floatFromBits = kotlin_kotlin.$_$.rc;
  var joinToString = kotlin_kotlin.$_$.v8;
  var Error_init_$Create$ = kotlin_kotlin.$_$.o1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var until = kotlin_kotlin.$_$.jf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var toBits_0 = kotlin_kotlin.$_$.bl;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var Long = kotlin_kotlin.$_$.jj;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var listOf = kotlin_kotlin.$_$.k9;
  var RuntimeException = kotlin_kotlin.$_$.pj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var captureStack = kotlin_kotlin.$_$.ec;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var lazy = kotlin_kotlin.$_$.rk;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var toIntArray = kotlin_kotlin.$_$.sa;
  var plus = kotlin_kotlin.$_$.tk;
  var toString_0 = kotlin_kotlin.$_$.ii;
  var numberToLong = kotlin_kotlin.$_$.ud;
  var numberToInt = kotlin_kotlin.$_$.td;
  var setOf = kotlin_kotlin.$_$.fa;
  var contains = kotlin_kotlin.$_$.mg;
  var defineProp = kotlin_kotlin.$_$.mc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder, '_FinalizerHolder', objectMeta);
  setMetadataFor(Native, 'Native', classMeta);
  setMetadataFor(Managed, 'Managed', classMeta, Native);
  setMetadataFor(BackendRenderTarget, 'BackendRenderTarget', classMeta, Managed);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_0, '_FinalizerHolder', objectMeta);
  function get_width() {
    return this.u37().b38_1;
  }
  function get_height() {
    return this.u37().c38_1;
  }
  function get_colorType() {
    return this.u37().a38_1.d38_1;
  }
  function get_colorSpace() {
    return this.u37().a38_1.f38_1;
  }
  function get_isOpaque() {
    return this.u37().a38_1.k38();
  }
  setMetadataFor(IHasImageInfo, 'IHasImageInfo', interfaceMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta, Managed, [Managed, IHasImageInfo]);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_1, '_FinalizerHolder', objectMeta);
  setMetadataFor(BreakIterator, 'BreakIterator', classMeta, Managed);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_2, '_FinalizerHolder', objectMeta);
  setMetadataFor(Canvas, 'Canvas', classMeta, Managed);
  setMetadataFor(ClipMode, 'ClipMode', classMeta, Enum);
  setMetadataFor(Color, 'Color', objectMeta);
  setMetadataFor(ColorAlphaType, 'ColorAlphaType', classMeta, Enum);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RefCnt, 'RefCnt', classMeta, Managed);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta, RefCnt);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ColorInfo, 'ColorInfo', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_3, '_FinalizerHolder', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta, Managed);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ColorType, 'ColorType', classMeta, Enum);
  setMetadataFor(CubicResampler, 'CubicResampler', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_4, '_FinalizerHolder', objectMeta);
  setMetadataFor(Data, 'Data', classMeta, Managed);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(DirectContext, 'DirectContext', classMeta, RefCnt);
  setMetadataFor(FilterMipmap, 'FilterMipmap', classMeta);
  setMetadataFor(FilterMode, 'FilterMode', classMeta, Enum);
  setMetadataFor(FilterTileMode, 'FilterTileMode', classMeta, Enum);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_5, '_FinalizerHolder', objectMeta);
  setMetadataFor(Font, 'Font', classMeta, Managed);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontFeature, 'FontFeature', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FontMgr, 'FontMgr', classMeta, RefCnt);
  setMetadataFor(FontSlant, 'FontSlant', classMeta, Enum);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(GradientStyle, 'GradientStyle', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(IRange, 'IRange', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Image, 'Image', classMeta, RefCnt, [RefCnt, IHasImageInfo]);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(ImageInfo, 'ImageInfo', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_6, '_FinalizerHolder', objectMeta);
  setMetadataFor(ManagedString, 'ManagedString', classMeta, Managed);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Matrix33, 'Matrix33', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Matrix44, 'Matrix44', classMeta);
  setMetadataFor(MipmapMode, 'MipmapMode', classMeta, Enum);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_7, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paint, 'Paint', classMeta, Managed);
  setMetadataFor(PaintMode, 'PaintMode', classMeta, Enum);
  setMetadataFor(PaintStrokeCap, 'PaintStrokeCap', classMeta, Enum);
  setMetadataFor(PaintStrokeJoin, 'PaintStrokeJoin', classMeta, Enum);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_8, '_FinalizerHolder', objectMeta);
  setMetadataFor(Path, 'Path', classMeta, Managed);
  setMetadataFor(PathDirection, 'PathDirection', classMeta, Enum);
  setMetadataFor(PathFillMode, 'PathFillMode', classMeta, Enum);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_9, '_FinalizerHolder', objectMeta);
  setMetadataFor(PathMeasure, 'PathMeasure', classMeta, Managed);
  setMetadataFor(PathOp, 'PathOp', classMeta, Enum);
  setMetadataFor(PathSegment, 'PathSegment', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(PathSegmentIterator, 'PathSegmentIterator', classMeta, Managed, [Managed, Iterator]);
  setMetadataFor(PathVerb, 'PathVerb', classMeta, Enum);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(Picture, 'Picture', classMeta, RefCnt);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_10, '_FinalizerHolder', objectMeta);
  setMetadataFor(PictureRecorder, 'PictureRecorder', classMeta, Managed);
  setMetadataFor(PixelGeometry, 'PixelGeometry', classMeta, Enum);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Point3, 'Point3', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(RRect, 'RRect', classMeta, Rect);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(Shader, 'Shader', classMeta, RefCnt);
  setMetadataFor(ShadowUtils, 'ShadowUtils', objectMeta);
  setMetadataFor(ArrayDecoder, 'ArrayDecoder', classMeta);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(Surface, 'Surface', classMeta, RefCnt);
  setMetadataFor(SurfaceColorFormat, 'SurfaceColorFormat', classMeta, Enum);
  setMetadataFor(SurfaceOrigin, 'SurfaceOrigin', classMeta, Enum);
  setMetadataFor(SurfaceProps, 'SurfaceProps', classMeta);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(Typeface, 'Typeface', classMeta, RefCnt);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_11, '_FinalizerHolder', objectMeta);
  setMetadataFor(U16String, 'U16String', classMeta, Managed);
  setMetadataFor(CharDirection, 'CharDirection', objectMeta);
  setMetadataFor(Affinity, 'Affinity', classMeta, Enum);
  setMetadataFor(Alignment, 'Alignment', classMeta, Enum);
  setMetadataFor(BaselineMode, 'BaselineMode', classMeta, Enum);
  setMetadataFor(DecorationLineStyle, 'DecorationLineStyle', classMeta, Enum);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(DecorationStyle, 'DecorationStyle', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(FontCollection, 'FontCollection', classMeta, RefCnt);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(LineMetrics, 'LineMetrics', classMeta);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_12, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paragraph, 'Paragraph', classMeta, Managed);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_13, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphBuilder, 'ParagraphBuilder', classMeta, Managed);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_14, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphStyle, 'ParagraphStyle', classMeta, Managed);
  setMetadataFor(PlaceholderAlignment, 'PlaceholderAlignment', classMeta, Enum);
  setMetadataFor(PlaceholderStyle, 'PlaceholderStyle', classMeta);
  setMetadataFor(PositionWithAffinity, 'PositionWithAffinity', classMeta);
  setMetadataFor(RectHeightMode, 'RectHeightMode', classMeta, Enum);
  setMetadataFor(RectWidthMode, 'RectWidthMode', classMeta, Enum);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_15, '_FinalizerHolder', objectMeta);
  setMetadataFor(StrutStyle, 'StrutStyle', classMeta, Managed);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(TextBox, 'TextBox', classMeta);
  setMetadataFor(TextIndent, 'TextIndent', classMeta);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_16, '_FinalizerHolder', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta, Managed);
  setMetadataFor(Companion_48, 'Companion', objectMeta);
  setMetadataFor(TypefaceFontProvider, 'TypefaceFontProvider', classMeta, FontMgr);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(SVGNode, 'SVGNode', classMeta, RefCnt);
  setMetadataFor(SVGTransformableNode, 'SVGTransformableNode', classMeta, SVGNode);
  setMetadataFor(SVGContainer, 'SVGContainer', classMeta, SVGTransformableNode);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor(SVGDOM, 'SVGDOM', classMeta, RefCnt);
  setMetadataFor(Companion_51, 'Companion', objectMeta);
  setMetadataFor(SVGLength, 'SVGLength', classMeta);
  setMetadataFor(SVGLengthUnit, 'SVGLengthUnit', classMeta, Enum);
  setMetadataFor(Companion_52, 'Companion', objectMeta);
  setMetadataFor(Companion_53, 'Companion', objectMeta);
  setMetadataFor(SVGPreserveAspectRatio, 'SVGPreserveAspectRatio', classMeta);
  setMetadataFor(Companion_54, 'Companion', objectMeta);
  setMetadataFor(SVGPreserveAspectRatioAlign, 'SVGPreserveAspectRatioAlign', classMeta, Enum);
  setMetadataFor(SVGPreserveAspectRatioScale, 'SVGPreserveAspectRatioScale', classMeta, Enum);
  setMetadataFor(Companion_55, 'Companion', objectMeta);
  setMetadataFor(SVGSVG, 'SVGSVG', classMeta, SVGContainer);
  setMetadataFor(Companion_56, 'Companion', objectMeta);
  setMetadataFor(SkikoKeyboardEvent, 'SkikoKeyboardEvent', classMeta);
  setMetadataFor(Companion_57, 'Companion', objectMeta);
  setMetadataFor(SkikoInputModifiers, 'SkikoInputModifiers', classMeta);
  setMetadataFor(SkikoKeyboardEventKind, 'SkikoKeyboardEventKind', classMeta, Enum);
  setMetadataFor(SkikoInputEvent, 'SkikoInputEvent', classMeta);
  setMetadataFor(SkikoPointerEvent, 'SkikoPointerEvent', classMeta);
  setMetadataFor(SkikoPointerEventKind, 'SkikoPointerEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointer, 'SkikoPointer', classMeta);
  setMetadataFor(SkikoPointerDevice, 'SkikoPointerDevice', classMeta, Enum);
  setMetadataFor(Companion_58, 'Companion', objectMeta);
  setMetadataFor(SkikoMouseButtons, 'SkikoMouseButtons', classMeta);
  setMetadataFor(GraphicsApi, 'GraphicsApi', classMeta, Enum);
  setMetadataFor(OS, 'OS', classMeta, Enum);
  setMetadataFor(Arch, 'Arch', classMeta, Enum);
  setMetadataFor(ClipboardManager, 'ClipboardManager', classMeta);
  setMetadataFor(URIManager, 'URIManager', classMeta);
  setMetadataFor(RenderException, 'RenderException', classMeta, RuntimeException);
  function onKeyboardEvent(event) {
    return Unit_getInstance();
  }
  function onPointerEvent(event) {
    return Unit_getInstance();
  }
  function get_input() {
    return Empty_getInstance();
  }
  setMetadataFor(SkikoView, 'SkikoView', interfaceMeta);
  setMetadataFor(SystemTheme, 'SystemTheme', classMeta, Enum);
  setMetadataFor(Pattern, 'Pattern', classMeta);
  setMetadataFor(Companion_59, 'Companion', objectMeta);
  setMetadataFor(FinalizationThunk, 'FinalizationThunk', classMeta);
  setMetadataFor(InteropScope, 'InteropScope', classMeta);
  setMetadataFor(Companion_60, 'Companion', objectMeta);
  setMetadataFor(NativePointerArray, 'NativePointerArray', classMeta);
  setMetadataFor(Companion_61, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_17, '_FinalizerHolder', objectMeta);
  setMetadataFor(Stats, 'Stats', objectMeta);
  setMetadataFor(CanvasRenderer, 'CanvasRenderer', classMeta);
  setMetadataFor(SkiaLayer$attachTo$1, VOID, classMeta, CanvasRenderer);
  setMetadataFor(SkiaLayer, 'SkiaLayer', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Companion_62, 'Companion', objectMeta);
  setMetadataFor(SkikoKey, 'SkikoKey', classMeta, Enum);
  setMetadataFor(createWebGLContext$contextAttributes$1, VOID, classMeta);
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion).j37 = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_getInstance().k37();
    return new BackendRenderTarget(org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.l37_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance().l37_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.q37_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().q37_1);
    this.t37_1 = null;
  }
  protoOf(Bitmap).u37 = function () {
    var tmp;
    try {
      if (this.t37_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_21();
        var tmp_2 = this.o37_1;
        tmp_0.t37_1 = tmp_1.w37(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.t37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).x37 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).y37 = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Bitmap__1nSetImmutable(this.o37_1);
    return this;
  };
  protoOf(Bitmap).z37 = function (info, rowBytes) {
    var tmp;
    try {
      this.t37_1 = null;
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.o37_1, info.b38_1, info.c38_1, info.a38_1.d38_1.h7_1, info.a38_1.e38_1.h7_1, getPtr(info.a38_1.f38_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.a38_1.f38_1);
    }
    return tmp;
  };
  protoOf(Bitmap).g38 = function (imageInfo) {
    return this.z37(imageInfo, imageInfo.h38());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_getInstance();
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.n38($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.o38_1 = -1;
    this.p38_1 = 0;
    this.q38_1 = 100;
    this.r38_1 = 100;
    this.s38_1 = 200;
    this.t38_1 = 200;
    this.u38_1 = 300;
    this.v38_1 = 300;
    this.w38_1 = 400;
    this.x38_1 = 400;
    this.y38_1 = 500;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_1).z38 = function (locale) {
    Stats_getInstance().k37();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).a39 = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.z38(locale) : $super.z38.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.b39_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.o37_1;
      var tmp0_safe_receiver = $text;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          var tmp$ret$1;
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          var tmp0_get_code_gknlva = charSequenceGet($text, tmp_4);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
          tmp$ret$1 = toShort(tmp$ret$0);
          tmp_3[tmp_4] = tmp$ret$1;
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp$ret$2 = tmp_3;
        tmp$ret$3 = tmp$ret$2;
        tmp_0 = tmp$ret$3;
      }
      var tmp_5 = $this$withErrorGuard.c39(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().b39_1);
    this.f39_1 = null;
  }
  protoOf(BreakIterator).o1y = function () {
    protoOf(Managed).o1y.call(this);
    var tmp0_safe_receiver = this.f39_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o1y();
    }
  };
  protoOf(BreakIterator).g39 = function (offset) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.o37_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).h39 = function (offset) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.o37_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).i39 = function (text) {
    try {
      Stats_getInstance().k37();
      var tmp0_safe_receiver = this.f39_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.o1y();
      }
      var tmp = this;
      tmp.f39_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.f39_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.j39(errorCode);
        var res = block(tmp0_anonymous, handle);
        tmp0_anonymous.k39(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + errorCode);
        }
        if (res === Companion_getInstance_62().l39()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.o37_1, surfaceProps.o39(), surfaceProps.n39_1.h7_1), true, bitmap);
    Stats_getInstance().k37();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.p39_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_3();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().p39_1, managed);
    this.s39_1 = _owner;
  }
  protoOf(Canvas).t39 = function (x0, y0, x1, y1, paint) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawLine(this.o37_1, x0, y0, x1, y1, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).u39 = function (left, top, right, bottom, startAngle, sweepAngle, includeCenter, paint) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawArc(this.o37_1, left, top, right, bottom, startAngle, sweepAngle, includeCenter, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).v39 = function (r, paint) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.o37_1, r.w39_1, r.x39_1, r.y39_1, r.z39_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).a3a = function (x, y, radius, paint) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.o37_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).b3a = function (r, paint) {
    Stats_getInstance().k37();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.o37_1, r.w39_1, r.x39_1, r.y39_1, r.z39_1, tmp0_anonymous.h3a(r.g3a_1), r.g3a_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).i3a = function (path, paint) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.o37_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).j3a = function (image, left, top) {
    return this.q3a(image, Companion_getInstance_33().k3a(image.v33(), image.w33()), Companion_getInstance_33().l3a(left, top, image.v33(), image.w33()), Companion_getInstance_34().m3a_1, null, true);
  };
  protoOf(Canvas).q3a = function (image, src, dst, samplingMode, paint, strict) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.o37_1, getPtr(image), src.w39_1, src.x39_1, src.y39_1, src.z39_1, dst.w39_1, dst.x39_1, dst.y39_1, dst.z39_1, samplingMode.r3a(), samplingMode.s3a(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).t3a = function (picture, matrix, paint) {
    Stats_getInstance().k37();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp = this.o37_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, tmp0_anonymous.h3a(matrix == null ? null : matrix.u3a_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).r2t = function (color) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.o37_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).v3a = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.o37_1);
    return this;
  };
  protoOf(Canvas).w3a = function (r, mode, antiAlias) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Canvas__1nClipRect(this.o37_1, r.w39_1, r.x39_1, r.y39_1, r.z39_1, mode.h7_1, antiAlias);
    return this;
  };
  protoOf(Canvas).x3a = function (r, mode, antiAlias) {
    Stats_getInstance().k37();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nClipRRect(this.o37_1, r.w39_1, r.x39_1, r.y39_1, r.z39_1, tmp0_anonymous.h3a(r.g3a_1), r.g3a_1.length, mode.h7_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).y3a = function (p, mode, antiAlias) {
    Stats_getInstance().k37();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.o37_1, getPtr(p), mode.h7_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).z33 = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().k37();
        org_jetbrains_skia_Canvas__1nTranslate(this.o37_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).z3a = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().k37();
        org_jetbrains_skia_Canvas__1nScale(this.o37_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).a3b = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().k37();
        org_jetbrains_skia_Canvas__1nConcat44(this.o37_1, tmp0_anonymous.h3a(matrix.b3b_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).c3b = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).d3b = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.o37_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).e3b = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Canvas__1nRestore(this.o37_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_getInstance();
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color() {
    Color_instance = this;
    this.f3b_1 = 0;
    this.g3b_1 = -16777216;
    this.h3b_1 = -1;
    this.i3b_1 = -65536;
    this.j3b_1 = -16711936;
    this.k3b_1 = -16776961;
    this.l3b_1 = -256;
    this.m3b_1 = -16711681;
    this.n3b_1 = -65281;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_getInstance();
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_getInstance_60().i37();
    this.o3b_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.p3b_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_3).q3b = function (color, mode) {
    Stats_getInstance().k37();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.h7_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_4();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.u3b_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_5();
    this.d38_1 = colorType;
    this.e38_1 = alphaType;
    this.f38_1 = colorSpace;
  }
  protoOf(ColorInfo).k38 = function () {
    return this.e38_1.equals(ColorAlphaType_OPAQUE_getInstance()) ? true : this.d38_1.x3b();
  };
  protoOf(ColorInfo).y3b = function () {
    return this.d38_1.y3b();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.d38_1.equals(other.d38_1))
      return false;
    if (!this.e38_1.equals(other.e38_1))
      return false;
    return equals(this.f38_1, other.f38_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.d38_1.hashCode() | 0;
    result = imul(result, prime) + this.e38_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.f38_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.d38_1 + ', _alphaType=' + this.e38_1 + ', _colorSpace=' + this.f38_1 + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_getInstance_60().i37();
    this.z3b_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.a3c_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.b3c_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_3().c3c_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_3().c3c_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.c3c_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function ColorSpace() {
    Companion_getInstance_6();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_6() {
    Companion_instance_6 = this;
    this.d3c_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    ColorType_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_getInstance();
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 11);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 12);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 13);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 14);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 15);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 16);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 17);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 18);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 19);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 20);
    Companion_getInstance_7();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).y3b = function () {
    var tmp;
    switch (this.h7_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 1;
        break;
      case 12:
        tmp = 8;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 16;
        break;
      case 15:
        tmp = 2;
        break;
      case 18:
        tmp = 2;
        break;
      case 19:
        tmp = 4;
        break;
      case 16:
        tmp = 2;
        break;
      case 17:
        tmp = 4;
        break;
      case 20:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).x3b = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.h7_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.e3c_1 = b;
    this.f3c_1 = c;
  }
  protoOf(CubicResampler).r3a = function () {
    return toBits(this.e3c_1) | -2147483648;
  };
  protoOf(CubicResampler).s3a = function () {
    return toBits(this.f3c_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.e3c_1, other.e3c_1) === 0))
      return false;
    return compareTo(this.f3c_1, other.f3c_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.e3c_1) | 0;
    result = imul(result, PRIME) + toBits(this.f3c_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.e3c_1 + ', _C=' + this.f3c_1 + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_7).g3c = function (bytes, offset, length) {
    Stats_getInstance().k37();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes(tmp0_anonymous.h3c(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_7).i3c = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.g3c(bytes, offset, length) : $super.g3c.call(this, bytes, offset, length);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.j3c_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Data(ptr) {
    Companion_getInstance_8();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_4().j3c_1);
    this.m3c_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.p37(otherData);
  };
  protoOf(Data).p37 = function (other) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Data__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_8).n3c = function () {
    Stats_getInstance().k37();
    return new DirectContext(org_jetbrains_skia_DirectContext__1nMakeGL());
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DirectContext(ptr) {
    Companion_getInstance_9();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).q3c = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_DirectContext__1nFlush(this.o37_1);
    return this;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.r3c_1 = filterMode;
    this.s3c_1 = mipmapMode;
  }
  protoOf(FilterMipmap).r3a = function () {
    return this.r3c_1.h7_1;
  };
  protoOf(FilterMipmap).s3a = function () {
    return this.s3c_1.h7_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.r3c_1.equals(other.r3c_1))
      return false;
    return this.s3c_1.equals(other.s3c_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.r3c_1.hashCode() | 0;
    result = imul(result, PRIME) + this.s3c_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.r3c_1 + ', _mipmapMode=' + this.s3c_1 + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_getInstance();
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_getInstance();
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_5().t3c_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_getInstance().k37();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$(typeface, size) {
    return Font_init_$Init$_0(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.t3c_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.o37_1, it);
      return Unit_getInstance();
    };
  }
  protoOf(Font).p37 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).w3c = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_12();
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_10();
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.m(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    var tmp = Companion_getInstance_17().x3c(feature);
    Companion_getInstance_11();
    var tmp_0 = _UInt___init__impl__l7qpdl(0);
    Companion_getInstance_11();
    FontFeature.call($this, tmp, value, tmp_0, _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.y3c_1 = _UInt___init__impl__l7qpdl(0);
    this.z3c_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a3d_1 = fillArrayVal(Array(0), null);
    this.b3d_1 = compilePattern('\\s+');
    this.c3d_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.d3d_1 = 1;
    this.e3d_1 = 2;
    this.f3d_1 = 3;
    this.g3d_1 = 4;
    this.h3d_1 = 5;
  }
  protoOf(Companion_10).i3d = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var tmp0_toTypedArray = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(tmp0_toTypedArray);
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_11();
    this.j3d_1 = _tag;
    this.k3d_1 = value;
    this.l3d_1 = start;
    this.m3d_1 = end;
  }
  protoOf(FontFeature).n3d = function () {
    return Companion_getInstance_17().o3d(this.j3d_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var tmp0_compareTo = this.l3d_1;
    if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0))) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp1_compareTo = this.m3d_1;
      Companion_getInstance();
      var tmp2_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(tmp1_compareTo), _UInt___get_data__impl__f0vqqw(tmp2_compareTo)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp3_compareTo = this.l3d_1;
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp3_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0))) > 0) {
        tmp_0 = new UInt(this.l3d_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp4_compareTo = this.m3d_1;
      Companion_getInstance();
      var tmp5_compareTo = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp4_compareTo), _UInt___get_data__impl__f0vqqw(tmp5_compareTo)) < 0) {
        tmp_2 = new UInt(this.m3d_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.k3d_1 === 0)
      valuePrefix = '-';
    else if (this.k3d_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.k3d_1;
    return 'FontFeature(' + valuePrefix + this.j3d_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.n3d() === other.n3d()))
      return false;
    if (!(this.k3d_1 === other.k3d_1))
      return false;
    if (!(this.l3d_1 === other.l3d_1))
      return false;
    return this.m3d_1 === other.m3d_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.j3d_1 | 0;
    result = imul(result, PRIME) + this.k3d_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = this.l3d_1;
    var tmp1_xor = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> 16 | 0);
    var tmp2_xor = this.l3d_1;
    var tmp3_toInt = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_xor) ^ _UInt___get_data__impl__f0vqqw(tmp2_xor));
    result = tmp + _UInt___get_data__impl__f0vqqw(tmp3_toInt) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var tmp4_shr = this.m3d_1;
    var tmp5_xor = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> 16 | 0);
    var tmp6_xor = this.m3d_1;
    var tmp7_toInt = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_xor) ^ _UInt___get_data__impl__f0vqqw(tmp6_xor));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(tmp7_toInt) | 0;
    return result;
  };
  function Companion_11() {
    Companion_instance_11 = this;
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    Companion_getInstance_12();
    this.p3d_1 = top;
    this.q3d_1 = ascent;
    this.r3d_1 = descent;
    this.s3d_1 = bottom;
    this.t3d_1 = leading;
    this.u3d_1 = avgCharWidth;
    this.v3d_1 = maxCharWidth;
    this.w3d_1 = xMin;
    this.x3d_1 = xMax;
    this.y3d_1 = xHeight;
    this.z3d_1 = capHeight;
    this.a3e_1 = underlineThickness;
    this.b3e_1 = underlinePosition;
    this.c3e_1 = strikeoutThickness;
    this.d3e_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).w33 = function () {
    return this.r3d_1 - this.q3d_1;
  };
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.p3d_1, other.p3d_1) === 0))
      return false;
    if (!(compareTo(this.q3d_1, other.q3d_1) === 0))
      return false;
    if (!(compareTo(this.r3d_1, other.r3d_1) === 0))
      return false;
    if (!(compareTo(this.s3d_1, other.s3d_1) === 0))
      return false;
    if (!(compareTo(this.t3d_1, other.t3d_1) === 0))
      return false;
    if (!(compareTo(this.u3d_1, other.u3d_1) === 0))
      return false;
    if (!(compareTo(this.v3d_1, other.v3d_1) === 0))
      return false;
    if (!(compareTo(this.w3d_1, other.w3d_1) === 0))
      return false;
    if (!(compareTo(this.x3d_1, other.x3d_1) === 0))
      return false;
    if (!(compareTo(this.y3d_1, other.y3d_1) === 0))
      return false;
    if (!(compareTo(this.z3d_1, other.z3d_1) === 0))
      return false;
    if (this.a3e_1 == null ? !(other.a3e_1 == null) : !(this.a3e_1 == other.a3e_1))
      return false;
    if (this.b3e_1 == null ? !(other.b3e_1 == null) : !(this.b3e_1 == other.b3e_1))
      return false;
    if (this.c3e_1 == null ? !(other.c3e_1 == null) : !(this.c3e_1 == other.c3e_1))
      return false;
    return !(this.d3e_1 == null ? !(other.d3e_1 == null) : !(this.d3e_1 == other.d3e_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.p3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.q3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.r3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.s3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.v3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.w3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.x3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.y3d_1) | 0;
    result = imul(result, PRIME) + toBits(this.z3d_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.a3e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.b3e_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.c3e_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.d3e_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.p3d_1 + ', _ascent=' + this.q3d_1 + ', _descent=' + this.r3d_1 + ', _bottom=' + this.s3d_1 + ', _leading=' + this.t3d_1 + ', _avgCharWidth=' + this.u3d_1 + ', _maxCharWidth=' + this.v3d_1 + ', _xMin=' + this.w3d_1 + ', _xMax=' + this.x3d_1 + ', _xHeight=' + this.y3d_1 + ', _capHeight=' + this.z3d_1 + ', _underlineThickness=' + this.a3e_1 + ', _underlinePosition=' + this.b3e_1 + ', _strikeoutThickness=' + this.c3e_1 + ', _strikeoutPosition=' + this.d3e_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.e3e(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.f3e(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return fromRawData(_this__u8e3s4, tmp0_withResult);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp0_asNumberOrNull = rawData[11];
    var tmp_10 = isNaN_0(tmp0_asNumberOrNull) ? null : tmp0_asNumberOrNull;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp1_asNumberOrNull = rawData[12];
    var tmp_11 = isNaN_0(tmp1_asNumberOrNull) ? null : tmp1_asNumberOrNull;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp2_asNumberOrNull = rawData[13];
    var tmp_12 = isNaN_0(tmp2_asNumberOrNull) ? null : tmp2_asNumberOrNull;
    var tmp$ret$3;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp3_asNumberOrNull = rawData[14];
    tmp$ret$3 = isNaN_0(tmp3_asNumberOrNull) ? null : tmp3_asNumberOrNull;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    Companion_getInstance_60().i37();
    this.g3e_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  function FontMgr() {
    Companion_getInstance_13();
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_getInstance();
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.h3e_1 = weight & 65535 | (width & 255) << 16 | slant.h7_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.h3e_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp = this;
    Companion_getInstance_15();
    Companion_getInstance_16();
    tmp.i3e_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    Companion_getInstance_15();
    Companion_getInstance_16();
    tmp_0.j3e_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    Companion_getInstance_15();
    Companion_getInstance_16();
    tmp_1.k3e_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    Companion_getInstance_15();
    Companion_getInstance_16();
    tmp_2.l3e_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  protoOf(FontStyle).m3e = function () {
    return this.h3e_1 & 65535;
  };
  protoOf(FontStyle).n3e = function (weight) {
    return FontStyle_init_$Create$(weight, this.v33(), this.o3e());
  };
  protoOf(FontStyle).v33 = function () {
    return this.h3e_1 >> 16 & 255;
  };
  protoOf(FontStyle).o3e = function () {
    return values_2()[this.h3e_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.m3e() + ', width=' + this.v33() + ', slant=' + this.o3e() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.h3e_1 === other.h3e_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.h3e_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_14();
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.p3e_1 = 0;
    this.q3e_1 = 100;
    this.r3e_1 = 200;
    this.s3e_1 = 300;
    this.t3e_1 = 400;
    this.u3e_1 = 500;
    this.v3e_1 = 600;
    this.w3e_1 = 700;
    this.x3e_1 = 800;
    this.y3e_1 = 900;
    this.z3e_1 = 1000;
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.a3f_1 = 1;
    this.b3f_1 = 2;
    this.c3f_1 = 3;
    this.d3f_1 = 4;
    this.e3f_1 = 5;
    this.f3f_1 = 6;
    this.g3f_1 = 7;
    this.h3f_1 = 8;
    this.i3f_1 = 9;
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).x3c = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var tmp1_get_code_jtnknr = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(tmp1_get_code_jtnknr) & 255) << 24;
    // Inline function 'kotlin.code' call
    var tmp2_get_code_n2njg8 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(tmp2_get_code_n2njg8) & 255) << 16;
    // Inline function 'kotlin.code' call
    var tmp3_get_code_qbni8p = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(tmp3_get_code_qbni8p) & 255) << 8;
    // Inline function 'kotlin.code' call
    var tmp4_get_code_tknh16 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(tmp4_get_code_tknh16) & 255;
  };
  protoOf(Companion_16).o3d = function (tag) {
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.j3f_1 = 1;
    this.k3f_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_18();
    this.l3f_1 = tileMode;
    this.m3f_1 = isPremul;
    this.n3f_1 = localMatrix;
  }
  protoOf(GradientStyle).o39 = function () {
    return 0 | (this.m3f_1 ? Companion_getInstance_18().j3f_1 : 0);
  };
  protoOf(GradientStyle).o3f = function () {
    var tmp0_safe_receiver = this.n3f_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3a_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.m3f_1 === other.m3f_1))
      return false;
    if (!this.l3f_1.equals(other.l3f_1))
      return false;
    return !(this.n3f_1 == null ? !(other.n3f_1 == null) : !equals(this.n3f_1, other.n3f_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.m3f_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.l3f_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.n3f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.l3f_1 + ', _premul=' + this.m3f_1 + ', _localMatrix=' + this.n3f_1 + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function IRange(start, end) {
    Companion_getInstance_19();
    this.p3f_1 = start;
    this.q3f_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.p3f_1 === other.p3f_1))
      return false;
    return this.q3f_1 === other.q3f_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.p3f_1 | 0;
    result = imul(result, PRIME) + this.q3f_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.p3f_1 + ', _end=' + this.q3f_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.r3f(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.k39(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    var result = tmp0_withResult;
    return new IRange(result[0], result[1]);
  }
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_19).s3f = function (bitmap) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_getInstance_62().l39())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap);
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Companion_19).t3f = function (bytes) {
    Stats_getInstance().k37();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Image__1nMakeFromEncoded(tmp0_anonymous.h3c(bytes), bytes.length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    var ptr = tmp$ret$1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(ptr === Companion_getInstance_62().l39())) {
      // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
      var message = 'Failed to Image::makeFromEncoded';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Image(ptr);
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.w3f_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_21();
        var tmp_2 = this$0.o37_1;
        tmp_0.w3f_1 = tmp_1.w37(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image(ptr) {
    Companion_getInstance_20();
    RefCnt_init_$Init$(ptr, this);
    this.w3f_1 = null;
  }
  protoOf(Image).u37 = function () {
    var tmp;
    try {
      if (this.w3f_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.w3f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_getInstance_62().l39() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.v37_1 = new ImageInfo(Companion_getInstance_5().u3b_1, 0, 0);
  }
  protoOf(Companion_20).x3f = function (width, height, alphaType) {
    return new ImageInfo(new ColorInfo(Companion_getInstance_7().d3c_1, alphaType, null), width, height);
  };
  protoOf(Companion_20).w37 = function (_ptr, _nGetImageInfo) {
    Stats_getInstance().k37();
    var colorSpacePtr = null;
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.r3f(tmp0_withResult);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var tmp0_withResult_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var tmp0_anonymous_0 = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var handle_0 = tmp0_anonymous_0.y3f(tmp0_withResult_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            tmp0_anonymous_0.z3f(handle_0, tmp0_withResult_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
            }
          }
        }
        colorSpacePtr = tmp0_withResult_0.m(0);
        tmp0_anonymous.k39(handle, tmp0_withResult);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(tmp0_withResult[0], tmp0_withResult[1], tmp0_withResult[2], tmp0_withResult[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_21();
    this.a38_1 = colorInfo;
    this.b38_1 = width;
    this.c38_1 = height;
  }
  protoOf(ImageInfo).h38 = function () {
    return imul(this.b38_1, this.y3b());
  };
  protoOf(ImageInfo).y3b = function () {
    return this.a38_1.y3b();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.b38_1 === other.b38_1))
      return false;
    if (!(this.c38_1 === other.c38_1))
      return false;
    return this.a38_1.equals(other.a38_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.b38_1 | 0;
    result = imul(result, PRIME) + this.c38_1 | 0;
    result = imul(result, PRIME) + this.a38_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.a38_1 + ', _width=' + this.b38_1 + ', _height=' + this.c38_1 + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake(tmp0_anonymous.n38(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_getInstance().k37();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.b3g_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_22();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_6().b3g_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.o37_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var tmp0_withResult = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var handle = tmp0_anonymous.c3g(tmp0_withResult);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.o37_1, handle, size);
          tmp0_anonymous.d3g(handle, tmp0_withResult);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = decodeToString(tmp0_withResult);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).g3g = function (s) {
    Stats_getInstance().k37();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_ManagedString__1nAppend(this.o37_1, tmp0_anonymous.n38(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.h3g_1 = this.i3g(0.0, 0.0);
  }
  protoOf(Companion_22).i3g = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Matrix33(mat) {
    Companion_getInstance_23();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.u3a_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.u3a_1, other.u3a_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.u3a_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + this.u3a_1 + ')';
  };
  function Companion_23() {
    Companion_instance_23 = this;
    this.j3g_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Matrix44(mat) {
    Companion_getInstance_24();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.b3b_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.b3b_1, other.b3b_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.b3b_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + this.b3b_1 + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_getInstance();
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.k3g_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_7().k3g_1);
    Paint.call($this);
    Stats_getInstance().k37();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).p37 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).n3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.o37_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).o3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetMode(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).p3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetColor(this.o37_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).q3g = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.o37_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s3g = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.o37_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).w3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetShader(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).x3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).y3g = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).z3g = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.o37_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).a3h = function () {
    return this.z3g().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).b3h = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).c3h = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_25();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_getInstance();
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_25).d3h = function (one, two, op) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.h7_1);
      tmp = ptr === Companion_getInstance_62().l39() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.e3h_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.o37_1, it);
      return Unit_getInstance();
    };
  }
  function Path(ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_8().e3h_1);
  }
  protoOf(Path).p37 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).h3h = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Path__1nSetFillMode(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).i3h = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = values_3()[org_jetbrains_skia_Path__1nGetFillMode(this.o37_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).j3h = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nReset(this.o37_1);
    return this;
  };
  protoOf(Path).k3h = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nRewind(this.o37_1);
    return this;
  };
  protoOf(Path).r20 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).l3h = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_33();
      tmp = tmp_0.m3h(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).n3h = function (x, y) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nMoveTo(this.o37_1, x, y);
    return this;
  };
  protoOf(Path).o3h = function (dx, dy) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nRMoveTo(this.o37_1, dx, dy);
    return this;
  };
  protoOf(Path).p3h = function (x, y) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nLineTo(this.o37_1, x, y);
    return this;
  };
  protoOf(Path).q3h = function (dx, dy) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nRLineTo(this.o37_1, dx, dy);
    return this;
  };
  protoOf(Path).r3h = function (x1, y1, x2, y2) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nQuadTo(this.o37_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).s3h = function (dx1, dy1, dx2, dy2) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nRQuadTo(this.o37_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).t3h = function (x1, y1, x2, y2, x3, y3) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nCubicTo(this.o37_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).u3h = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nRCubicTo(this.o37_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).v3h = function () {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nClosePath(this.o37_1);
    return this;
  };
  protoOf(Path).w3h = function (rect, dir, start) {
    Stats_getInstance().k37();
    org_jetbrains_skia_Path__1nAddRect(this.o37_1, rect.w39_1, rect.x39_1, rect.y39_1, rect.z39_1, dir.h7_1, start);
    return this;
  };
  protoOf(Path).x3h = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.w3h(rect, dir, start) : $super.w3h.call(this, rect, dir, start);
  };
  protoOf(Path).y3h = function (rrect, dir, start) {
    Stats_getInstance().k37();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Path__1nAddRRect(this.o37_1, rrect.w39_1, rrect.x39_1, rrect.y39_1, rrect.z39_1, tmp0_anonymous.h3a(rrect.g3a_1), rrect.g3a_1.length, dir.h7_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(Path).z3h = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.y3h(rrect, dir, start) : $super.y3h.call(this, rrect, dir, start);
  };
  protoOf(Path).a3i = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Path__1nAddPathOffset(this.o37_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).b3i = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.a3i(src, dx, dy, extend) : $super.a3i.call(this, src, dx, dy, extend);
  };
  protoOf(Path).c3i = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Path__1nTransform(this.o37_1, tmp0_anonymous.h3a(matrix.u3a_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).d3i = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.c3i(matrix, dst, applyPerspectiveClip) : $super.c3i.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).d = function () {
    return this.e3i(false);
  };
  protoOf(Path).e3i = function (forceClose) {
    return Companion_getInstance_28().f3i(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_getInstance();
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_3() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_getInstance();
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.g3i_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().g3i_1);
  }
  protoOf(PathMeasure).j3i = function (path, forceClosed) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.o37_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).qd = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).k3i = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.o37_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_getInstance();
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_4()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().h7_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().h7_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_4()[verbOrdinal];
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.l3i_1 = verb;
    this.m3i_1 = p0;
    this.n3i_1 = p1;
    this.o3i_1 = p2;
    this.p3i_1 = p3;
    this.q3i_1 = conicWeight;
    this.r3i_1 = isCloseLine;
    this.s3i_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.l3i_1 + (!this.l3i_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.m3i_1 : '') + ((((this.l3i_1.equals(PathVerb_LINE_getInstance()) ? true : this.l3i_1.equals(PathVerb_QUAD_getInstance())) ? true : this.l3i_1.equals(PathVerb_CONIC_getInstance())) ? true : this.l3i_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.n3i_1 : '') + (((this.l3i_1.equals(PathVerb_QUAD_getInstance()) ? true : this.l3i_1.equals(PathVerb_CONIC_getInstance())) ? true : this.l3i_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.o3i_1 : '') + (this.l3i_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.p3i_1 : '') + (this.l3i_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.q3i_1 : '') + (this.l3i_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.r3i_1 : '') + (!this.l3i_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.s3i_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.l3i_1.equals(other.l3i_1) ? !this.l3i_1.equals(PathVerb_DONE_getInstance()) ? equals(this.m3i_1, other.m3i_1) : true : false) ? (((this.l3i_1.equals(PathVerb_LINE_getInstance()) ? true : this.l3i_1.equals(PathVerb_QUAD_getInstance())) ? true : this.l3i_1.equals(PathVerb_CONIC_getInstance())) ? true : this.l3i_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.n3i_1, other.n3i_1) : true : false) ? ((this.l3i_1.equals(PathVerb_QUAD_getInstance()) ? true : this.l3i_1.equals(PathVerb_CONIC_getInstance())) ? true : this.l3i_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.o3i_1, other.o3i_1) : true : false) ? this.l3i_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.p3i_1, other.p3i_1) : true : false) ? this.l3i_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.q3i_1, this.q3i_1) === 0 : true : false) ? this.l3i_1.equals(PathVerb_LINE_getInstance()) ? this.r3i_1 === other.r3i_1 : true : false) ? !this.l3i_1.equals(PathVerb_DONE_getInstance()) ? this.s3i_1 === other.s3i_1 : true : false;
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.l3i_1.h7_1) {
      case 6:
        tmp = objectHashes([this.l3i_1]);
        break;
      case 0:
        tmp = objectHashes([this.l3i_1, this.m3i_1, this.s3i_1]);
        break;
      case 1:
        tmp = objectHashes([this.l3i_1, this.m3i_1, this.n3i_1, this.r3i_1, this.s3i_1]);
        break;
      case 2:
        tmp = objectHashes([this.l3i_1, this.m3i_1, this.n3i_1, this.o3i_1, this.s3i_1]);
        break;
      case 3:
        tmp = objectHashes([this.l3i_1, this.m3i_1, this.n3i_1, this.o3i_1, this.q3i_1, this.s3i_1]);
        break;
      case 4:
        tmp = objectHashes([this.l3i_1, this.m3i_1, this.n3i_1, this.o3i_1, this.p3i_1, this.s3i_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_27).f3i = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.w3i_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.r3f(tmp0_withResult);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.o37_1, handle);
        tmp0_anonymous.k39(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return pathSegmentFromIntArray(tmp0_withResult);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.v3i_1 = _path;
    this.w3i_1 = null;
    Stats_getInstance().k37();
  }
  protoOf(PathSegmentIterator).f = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.w3i_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l3i_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.w3i_1;
      this.w3i_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).e = function () {
    var tmp0_safe_receiver = this.w3i_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l3i_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).b5 = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_4()[verb].h7_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp1_fromBits = points[0];
        var tmp_0 = floatFromBits(tmp1_fromBits);
        var tmp$ret$1;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp3_fromBits = points[1];
        tmp$ret$1 = floatFromBits(tmp3_fromBits);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp5_fromBits = points[0];
        var tmp_1 = floatFromBits(tmp5_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp7_fromBits = points[1];
        var tmp_2 = floatFromBits(tmp7_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp9_fromBits = points[2];
        var tmp_3 = floatFromBits(tmp9_fromBits);
        var tmp$ret$5;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp11_fromBits = points[3];
        tmp$ret$5 = floatFromBits(tmp11_fromBits);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp13_fromBits = points[0];
        var tmp_4 = floatFromBits(tmp13_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp15_fromBits = points[1];
        var tmp_5 = floatFromBits(tmp15_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp17_fromBits = points[2];
        var tmp_6 = floatFromBits(tmp17_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp19_fromBits = points[3];
        var tmp_7 = floatFromBits(tmp19_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp21_fromBits = points[4];
        var tmp_8 = floatFromBits(tmp21_fromBits);
        var tmp$ret$11;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp23_fromBits = points[5];
        tmp$ret$11 = floatFromBits(tmp23_fromBits);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp25_fromBits = points[0];
        var tmp_9 = floatFromBits(tmp25_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp27_fromBits = points[1];
        var tmp_10 = floatFromBits(tmp27_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp29_fromBits = points[2];
        var tmp_11 = floatFromBits(tmp29_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp31_fromBits = points[3];
        var tmp_12 = floatFromBits(tmp31_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp33_fromBits = points[4];
        var tmp_13 = floatFromBits(tmp33_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp35_fromBits = points[5];
        var tmp_14 = floatFromBits(tmp35_fromBits);
        var tmp$ret$18;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp37_fromBits = points[8];
        tmp$ret$18 = floatFromBits(tmp37_fromBits);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp39_fromBits = points[0];
        var tmp_15 = floatFromBits(tmp39_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp41_fromBits = points[1];
        var tmp_16 = floatFromBits(tmp41_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp43_fromBits = points[2];
        var tmp_17 = floatFromBits(tmp43_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp45_fromBits = points[3];
        var tmp_18 = floatFromBits(tmp45_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp47_fromBits = points[4];
        var tmp_19 = floatFromBits(tmp47_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp49_fromBits = points[5];
        var tmp_20 = floatFromBits(tmp49_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp51_fromBits = points[6];
        var tmp_21 = floatFromBits(tmp51_fromBits);
        var tmp$ret$26;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp53_fromBits = points[7];
        tmp$ret$26 = floatFromBits(tmp53_fromBits);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_4() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_getInstance();
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Picture(ptr) {
    Companion_getInstance_29();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.x3i_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_30();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().x3i_1);
  }
  protoOf(PictureRecorder).a3j = function (bounds) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.o37_1, bounds.w39_1, bounds.x39_1, bounds.y39_1, bounds.z39_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).b3j = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.o37_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_getInstance();
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.c3j_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Point(x, y) {
    Companion_getInstance_31();
    this.d3j_1 = x;
    this.e3j_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.d3j_1, other.d3j_1) === 0))
      return false;
    return compareTo(this.e3j_1, other.e3j_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.d3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.e3j_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.d3j_1 + ', _y=' + this.e3j_1 + ')';
  };
  function Point3(x, y, z) {
    this.f3j_1 = x;
    this.g3j_1 = y;
    this.h3j_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.f3j_1, other.f3j_1) === 0))
      return false;
    if (!(compareTo(this.g3j_1, other.g3j_1) === 0))
      return false;
    return compareTo(this.h3j_1, other.h3j_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.f3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.g3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.h3j_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.f3j_1 + ', _y=' + this.g3j_1 + ', _z=' + this.h3j_1 + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
  }
  protoOf(Companion_31).i3j = function (l, t, r, b, xRad, yRad) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_31).j3j = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function RRect(l, t, r, b, radii) {
    Companion_getInstance_32();
    Rect.call(this, l, t, r, b);
    this.g3a_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.w39_1 + ', _top=' + this.x39_1 + ', _right=' + this.y39_1 + ', _bottom=' + this.z39_1 + ', _radii=' + joinToString(this.g3a_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.g3a_1.length === other.g3a_1.length) {
      tmp = contentEquals(this.g3a_1, other.g3a_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.g3a_1), normalizeRadii(other.g3a_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.g3a_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Rect$Companion$fromInteropPointerNullable$lambda($result, $block) {
    return function ($this$fromInteropPointer, it) {
      $result._v = $block(it);
      return Unit_getInstance();
    };
  }
  function Companion_32() {
    Companion_instance_32 = this;
  }
  protoOf(Companion_32).k3j = function (l, t, r, b) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(l <= r)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message = 'Rect::makeLTRB expected l <= r, got ' + l + ' > ' + r;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(t <= b)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message_0 = 'Rect::makeLTRB expected t <= b, got ' + t + ' > ' + b;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_32).k3a = function (w, h) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(w >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeWH.<anonymous>' call
      var message = 'Rect::makeWH expected w >= 0, got: ' + w;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(h >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeWH.<anonymous>' call
      var message_0 = 'Rect::makeWH expected h >= 0, got: ' + h;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(0.0, 0.0, w, h);
  };
  protoOf(Companion_32).l3a = function (l, t, w, h) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(w >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message = 'Rect::makeXYWH expected w >= 0, got: ' + w;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(h >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message_0 = 'Rect::makeXYWH expected h >= 0, got: ' + h;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_32).m3h = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.e3e(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.f3e(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    var result = tmp0_withResult;
    return new Rect(result[0], result[1], result[2], result[3]);
  };
  protoOf(Companion_32).l3j = function (block) {
    var result = {_v: true};
    var rect = this.m3h(Rect$Companion$fromInteropPointerNullable$lambda(result, block));
    var tmp;
    if (result._v) {
      tmp = rect;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_33();
    this.w39_1 = left;
    this.x39_1 = top;
    this.y39_1 = right;
    this.z39_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.w39_1, other.w39_1) === 0))
      return false;
    if (!(compareTo(this.x39_1, other.x39_1) === 0))
      return false;
    if (!(compareTo(this.y39_1, other.y39_1) === 0))
      return false;
    return compareTo(this.z39_1, other.z39_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.w39_1) | 0;
    result = imul(result, PRIME) + toBits(this.x39_1) | 0;
    result = imul(result, PRIME) + toBits(this.y39_1) | 0;
    result = imul(result, PRIME) + toBits(this.z39_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.w39_1 + ', _top=' + this.x39_1 + ', _right=' + this.y39_1 + ', _bottom=' + this.z39_1 + ')';
  };
  function Companion_33() {
    Companion_instance_33 = this;
    this.m3a_1 = new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
    this.n3a_1 = new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance());
    this.o3a_1 = new CubicResampler(0.33333334, 0.33333334);
    this.p3a_1 = new CubicResampler(0.0, 0.5);
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_34).m3j = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_getInstance().k37();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
        var tmp1_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, tmp1_anonymous.j39(colors), tmp1_anonymous.h3a(positions), colors.length, style.l3f_1.h7_1, style.o39(), tmp1_anonymous.h3a(style.o3f()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).n3j = function (x, y, r, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_getInstance().k37();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
        var tmp1_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeRadialGradient(x, y, r, tmp1_anonymous.j39(colors), tmp1_anonymous.h3a(positions), colors.length, style.l3f_1.h7_1, style.o39(), tmp1_anonymous.h3a(style.o3f()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).o3j = function (x, y, colors, positions) {
    return this.p3j(x, y, 0.0, 360.0, colors, positions, Companion_getInstance_18().k3f_1);
  };
  protoOf(Companion_34).p3j = function (x, y, startAngle, endAngle, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_getInstance().k37();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
        var tmp1_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeSweepGradient(x, y, startAngle, endAngle, tmp1_anonymous.j39(colors), tmp1_anonymous.h3a(positions), colors.length, style.l3f_1.h7_1, style.o39(), tmp1_anonymous.h3a(style.o3f()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function Shader(ptr) {
    Companion_getInstance_35();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_getInstance_60().i37();
  }
  protoOf(ShadowUtils).q3j = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_getInstance().k37();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.f3j_1, zPlaneParams.g3j_1, zPlaneParams.h3j_1, lightPos.f3j_1, lightPos.g3j_1, lightPos.h3j_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.r3j_1 = ptr;
    this.s3j_1 = disposePtr;
  }
  protoOf(ArrayDecoder).gp = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.r3j_1, this.s3j_1);
  };
  protoOf(ArrayDecoder).t3j = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.r3j_1, index);
  };
  protoOf(ArrayDecoder).g = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.r3j_1);
  };
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_35).u3j = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.h7_1, colorFormat.h7_1, tmp_2, tmp0_anonymous.j39(surfaceProps == null ? null : surfaceProps.v3j()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_getInstance_62().l39() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.y3j_1 = context;
    $this.z3j_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).a3k = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.o37_1);
      var tmp_0;
      if (ptr === Companion_getInstance_62().l39()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).b3k = function () {
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.o37_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_36();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_getInstance();
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_getInstance();
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.n39_1.h7_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.m39_1 = isDeviceIndependentFonts;
    this.n39_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).o39 = function () {
    return 0 | (this.m39_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.m39_1 === other.m39_1))
      return false;
    return this.n39_1.equals(other.n39_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.m39_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.n39_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.m39_1 + ', _pixelGeometry=' + this.n39_1 + ')';
  };
  protoOf(SurfaceProps).v3j = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.o39(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_getInstance_60().i37();
  }
  protoOf(Companion_36).c3k = function (data, index) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === Companion_getInstance_62().l39())) {
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        var message = 'Failed to create Typeface from data ' + data;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(Companion_36).d3k = function (data, index, $super) {
    index = index === VOID ? 0 : index;
    return $super === VOID ? this.c3k(data, index) : $super.c3k.call(this, data, index);
  };
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function Typeface(ptr) {
    Companion_getInstance_37();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).g3k = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.o37_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).h3k = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).p37 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).i3k = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.o37_1);
      var tmp0_use = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = tmp0_use.toString();
      }finally {
        tmp0_use.o1y();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.i3k() + "', fontStyle=" + this.g3k() + ', uniqueId=' + this.h3k() + ')';
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.j3k_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function U16String(ptr) {
    Companion_getInstance_38();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().j3k_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_getInstance_60().i37();
    this.k3k_1 = 0;
    this.l3k_1 = 1;
    this.m3k_1 = 2;
    this.n3k_1 = 3;
    this.o3k_1 = 4;
    this.p3k_1 = 5;
    this.q3k_1 = 6;
    this.r3k_1 = 7;
    this.s3k_1 = 8;
    this.t3k_1 = 9;
    this.u3k_1 = 10;
    this.v3k_1 = 11;
    this.w3k_1 = 12;
    this.x3k_1 = 13;
    this.y3k_1 = 14;
    this.z3k_1 = 15;
    this.a3l_1 = 16;
    this.b3l_1 = 17;
    this.c3l_1 = 18;
    this.d3l_1 = 19;
    this.e3l_1 = 20;
    this.f3l_1 = 21;
    this.g3l_1 = 22;
  }
  protoOf(CharDirection).h3l = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.o37_1;
    return tmp1_elvis_lhs == null ? Companion_getInstance_62().l39() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_getInstance();
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_getInstance();
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_getInstance();
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_getInstance();
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function Companion_38() {
    Companion_instance_38 = this;
    this.i3l_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_39();
    this.j3l_1 = _underline;
    this.k3l_1 = _overline;
    this.l3l_1 = _lineThrough;
    this.m3l_1 = _gaps;
    this.n3l_1 = color;
    this.o3l_1 = lineStyle;
    this.p3l_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).q3l = function () {
    return this.o3l_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.j3l_1 === other.j3l_1))
      return false;
    if (!(this.k3l_1 === other.k3l_1))
      return false;
    if (!(this.l3l_1 === other.l3l_1))
      return false;
    if (!(this.m3l_1 === other.m3l_1))
      return false;
    if (!(this.n3l_1 === other.n3l_1))
      return false;
    if (!(compareTo(this.p3l_1, other.p3l_1) === 0))
      return false;
    return this.q3l().equals(other.q3l());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.j3l_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.k3l_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.l3l_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.m3l_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.n3l_1 | 0;
    result = imul(result, PRIME) + toBits(this.p3l_1) | 0;
    result = imul(result, PRIME) + this.q3l().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.j3l_1 + ', _overline=' + this.k3l_1 + ', _lineThrough=' + this.l3l_1 + ', _gaps=' + this.m3l_1 + ', _color=' + this.n3l_1 + ', _lineStyle=' + this.q3l() + ', _thicknessMultiplier=' + this.p3l_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_5() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_40();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).t3l = function (fontMgr) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.o37_1, getPtr(fontMgr), Companion_getInstance_62().l39());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).u3l = function (fontMgr) {
    return this.v3l(fontMgr, null);
  };
  protoOf(FontCollection).v3l = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.o37_1, getPtr(fontMgr), tmp0_anonymous.n38(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).w3l = function (familyNames, style) {
    var tmp;
    try {
      Stats_getInstance().k37();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp_1 = this.o37_1;
            var tmp_2 = tmp0_anonymous.x3l(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.h3e_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp0_anonymous_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var tmp0_map = until(0, tmp0_anonymous_0.g());
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var inductionVariable = tmp0_map.y_1;
        var last = tmp0_map.z_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$3;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            tmp$ret$3 = new Typeface(tmp0_anonymous_0.t3j(item));
            tmp0_mapTo.a(tmp$ret$3);
          }
           while (!(item === last));
        tmp_0 = copyToArray(tmp0_mapTo);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.gp();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_40() {
    Companion_instance_40 = this;
  }
  protoOf(Companion_40).y3l = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_40).z3l = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_40).a3m = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, tmp0_anonymous.j39(intArray), tmp0_anonymous.b3m(doubleArray));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_40;
  function Companion_getInstance_41() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    Companion_getInstance_41();
    this.c3m_1 = startIndex;
    this.d3m_1 = endIndex;
    this.e3m_1 = endExcludingWhitespaces;
    this.f3m_1 = endIncludingNewline;
    this.g3m_1 = isHardBreak;
    this.h3m_1 = ascent;
    this.i3m_1 = descent;
    this.j3m_1 = unscaledAscent;
    this.k3m_1 = height;
    this.l3m_1 = width;
    this.m3m_1 = left;
    this.n3m_1 = baseline;
    this.o3m_1 = lineNumber;
  }
  protoOf(LineMetrics).p3m = function () {
    return this.m3m_1 + this.l3m_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.c3m_1 === other.c3m_1))
      return false;
    if (!(this.d3m_1 === other.d3m_1))
      return false;
    if (!(this.e3m_1 === other.e3m_1))
      return false;
    if (!(this.f3m_1 === other.f3m_1))
      return false;
    if (!(this.g3m_1 === other.g3m_1))
      return false;
    if (!(compareTo(this.h3m_1, other.h3m_1) === 0))
      return false;
    if (!(compareTo(this.i3m_1, other.i3m_1) === 0))
      return false;
    if (!(compareTo(this.j3m_1, other.j3m_1) === 0))
      return false;
    if (!(compareTo(this.k3m_1, other.k3m_1) === 0))
      return false;
    if (!(compareTo(this.l3m_1, other.l3m_1) === 0))
      return false;
    if (!(compareTo(this.m3m_1, other.m3m_1) === 0))
      return false;
    if (!(compareTo(this.n3m_1, other.n3m_1) === 0))
      return false;
    return this.o3m_1 === other.o3m_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.c3m_1 | 0;
    result = imul(result, PRIME) + this.d3m_1 | 0;
    result = imul(result, PRIME) + this.e3m_1 | 0;
    result = imul(result, PRIME) + this.f3m_1 | 0;
    result = imul(result, PRIME) + (this.g3m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.h3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.i3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.j3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.k3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.l3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.m3m_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.n3m_1).f1() | 0;
    result = imul(result, PRIME) + this.o3m_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.c3m_1 + ', _endIndex=' + this.d3m_1 + ', _endExcludingWhitespaces=' + this.e3m_1 + ', _endIncludingNewline=' + this.f3m_1 + ', _hardBreak=' + this.g3m_1 + ', _ascent=' + this.h3m_1 + ', _descent=' + this.i3m_1 + ', _unscaledAscent=' + this.j3m_1 + ', _height=' + this.k3m_1 + ', _width=' + this.l3m_1 + ', _left=' + this.m3m_1 + ', _baseline=' + this.n3m_1 + ', _lineNumber=' + this.o3m_1 + ')';
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_41;
  function Companion_getInstance_42() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.q3m_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.o37_1, $offset, it);
      return Unit_getInstance();
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_42();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().q3m_1);
    Stats_getInstance().k37();
    this.t3m_1 = text;
  }
  protoOf(Paragraph).o1y = function () {
    if (!(this.t3m_1 == null)) {
      ensureNotNull(this.t3m_1).o1y();
      this.t3m_1 = null;
    }
    protoOf(Managed).o1y.call(this);
  };
  protoOf(Paragraph).w33 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).u3m = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).v3m = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).w3m = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).x3m = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).y3m = function (width) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.o37_1, width);
    return this;
  };
  protoOf(Paragraph).z3m = function (canvas, x, y) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.o37_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).a3n = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.o37_1, start, end, rectHeightMode.h7_1, rectWidthMode.h7_1);
          var tmp1_fromInterop = Companion_getInstance_47();
          var size = tmp1_fromInterop.y3l(tmp0_fromInterop);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = tmp1_fromInterop.a3m(tmp0_fromInterop, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          tmp1_fromInterop.z3l(tmp0_fromInterop);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).b3n = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.o37_1);
          var tmp1_fromInterop = Companion_getInstance_47();
          var size = tmp1_fromInterop.y3l(tmp0_fromInterop);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = tmp1_fromInterop.a3m(tmp0_fromInterop, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          tmp1_fromInterop.z3l(tmp0_fromInterop);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).c3n = function (dx, dy) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.o37_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).d3n = function (offset) {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_19();
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).e3n = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.t3m_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_getInstance().k37();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.o37_1, getPtr(this.t3m_1));
            var tmp1_fromInterop = Companion_getInstance_41();
            var size = tmp1_fromInterop.y3l(tmp0_fromInterop);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = tmp1_fromInterop.a3m(tmp0_fromInterop, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            tmp1_fromInterop.z3l(tmp0_fromInterop);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.t3m_1);
    }
    return tmp;
  };
  protoOf(Paragraph).f3n = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_42;
  function Companion_getInstance_43() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.g3n_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_43();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_13().g3n_1);
    this.j3n_1 = null;
  }
  protoOf(ParagraphBuilder).k3n = function (style) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.o37_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).l3n = function (text) {
    Stats_getInstance().k37();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.o37_1, tmp0_anonymous.n38(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.j3n_1 == null)
      this.j3n_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.j3n_1).g3g(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).m3n = function (style) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.o37_1, style.n3n_1, style.o3n_1, style.s3n().h7_1, style.t3n().h7_1, style.r3n_1);
    return this;
  };
  protoOf(ParagraphBuilder).df = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.o37_1), this.j3n_1);
      this.j3n_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_getInstance().k37();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_43;
  function Companion_getInstance_44() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.u3n_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphStyle() {
    Companion_getInstance_44();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_14().u3n_1);
    Stats_getInstance().k37();
  }
  protoOf(ParagraphStyle).p37 = function (other) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).x3n = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).y3n = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = new StrutStyle(org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle(this.o37_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).z3n = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.o37_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).a3o = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).b3o = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.o37_1, value.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).c3o = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.o37_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).d3o = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.o37_1, tmp0_anonymous.n38(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).e3o = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.o37_1, value.f3o_1, value.g3o_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_getInstance();
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.n3n_1 = width;
    this.o3n_1 = height;
    this.p3n_1 = alignment;
    this.q3n_1 = baselineMode;
    this.r3n_1 = baseline;
  }
  protoOf(PlaceholderStyle).s3n = function () {
    return this.p3n_1;
  };
  protoOf(PlaceholderStyle).t3n = function () {
    return this.q3n_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.n3n_1, other.n3n_1) === 0))
      return false;
    if (!(compareTo(this.o3n_1, other.o3n_1) === 0))
      return false;
    if (!(compareTo(this.r3n_1, other.r3n_1) === 0))
      return false;
    if (!this.s3n().equals(other.s3n()))
      return false;
    return this.t3n().equals(other.t3n());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.n3n_1) | 0;
    result = imul(result, PRIME) + toBits(this.o3n_1) | 0;
    result = imul(result, PRIME) + toBits(this.r3n_1) | 0;
    result = imul(result, PRIME) + this.s3n().hashCode() | 0;
    result = imul(result, PRIME) + this.t3n().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.n3n_1 + ', _height=' + this.o3n_1 + ', _alignment=' + this.s3n() + ', _baselineMode=' + this.t3n() + ', _baseline=' + this.r3n_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.h3o_1 = position;
    this.i3o_1 = affinity;
  }
  protoOf(PositionWithAffinity).j3o = function () {
    return this.i3o_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.h3o_1 === other.h3o_1))
      return false;
    return this.j3o().equals(other.j3o());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.h3o_1 | 0;
    result = imul(result, PRIME) + this.j3o().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.h3o_1 + ', _affinity=' + this.j3o() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_getInstance();
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_getInstance();
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_44() {
    Companion_instance_44 = this;
  }
  var Companion_instance_44;
  function Companion_getInstance_45() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    Companion_getInstance_45();
    this.k3o_1 = color;
    this.l3o_1 = offsetX;
    this.m3o_1 = offsetY;
    this.n3o_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.k3o_1 === other.k3o_1))
      return false;
    if (!(compareTo(this.l3o_1, other.l3o_1) === 0))
      return false;
    if (!(compareTo(this.m3o_1, other.m3o_1) === 0))
      return false;
    return compareTo(this.n3o_1, other.n3o_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.k3o_1 | 0;
    result = imul(result, PRIME) + toBits(this.l3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.m3o_1) | 0;
    var blurSigma = toBits_0(this.n3o_1);
    result = imul(result, PRIME) + blurSigma.od(32).ea(blurSigma).f1() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.k3o_1 + ', _offsetX=' + this.l3o_1 + ', _offsetY=' + this.m3o_1 + ', _blurSigma=' + this.n3o_1 + ')';
  };
  function Companion_45() {
    Companion_instance_45 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_45;
  function Companion_getInstance_46() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function StrutStyle_init_$Init$($this) {
    StrutStyle.call($this, org_jetbrains_skia_paragraph_StrutStyle__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function StrutStyle_init_$Create$() {
    return StrutStyle_init_$Init$(objectCreate(protoOf(StrutStyle)));
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.o3o_1 = org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function StrutStyle(ptr) {
    Companion_getInstance_46();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_15().o3o_1);
  }
  protoOf(StrutStyle).p37 = function (other) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(StrutStyle).r3o = function (value) {
    this.s3o(value);
  };
  protoOf(StrutStyle).t3o = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).s3o = function (value) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize(this.o37_1, value);
    return this;
  };
  protoOf(StrutStyle).u3o = function (value) {
    this.v3o(value);
  };
  protoOf(StrutStyle).w33 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).v3o = function (value) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight(this.o37_1, value);
    return this;
  };
  protoOf(StrutStyle).w3o = function (value) {
    this.x3o(value);
  };
  protoOf(StrutStyle).y3o = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).x3o = function (value) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled(this.o37_1, value);
    return this;
  };
  protoOf(StrutStyle).z3o = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).a3p = function (value) {
    this.b3p(value);
  };
  protoOf(StrutStyle).c3p = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden(this.o37_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).b3p = function (value) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden(this.o37_1, value);
    return this;
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_getInstance_33().k3j(l, t, r, b), values_5()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_46() {
    Companion_instance_46 = this;
  }
  protoOf(Companion_46).a3m = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var rectPtr = tmp0_anonymous.h3a(rect);
        var directionPtr = tmp0_anonymous.j39(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        tmp0_anonymous.f3e(rectPtr, rect);
        tmp0_anonymous.k39(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_46).y3l = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_46).z3l = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_46;
  function Companion_getInstance_47() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function TextBox(rect, direction) {
    Companion_getInstance_47();
    this.d3p_1 = rect;
    this.e3p_1 = direction;
  }
  protoOf(TextBox).f3p = function () {
    return this.e3p_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.d3p_1.equals(other.d3p_1))
      return false;
    return this.f3p().equals(other.f3p());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.d3p_1.hashCode() | 0;
    result = imul(result, PRIME) + this.f3p().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.d3p_1 + ', _direction=' + this.f3p() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.f3o_1 = firstLine;
    this.g3o_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.f3o_1 + ', restLine=' + this.g3o_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.f3o_1);
    result = imul(result, 31) + getNumberHashCode(this.g3o_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.f3o_1, tmp0_other_with_cast.f3o_1))
      return false;
    if (!equals(this.g3o_1, tmp0_other_with_cast.g3o_1))
      return false;
    return true;
  };
  function Companion_47() {
    Companion_instance_47 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_47;
  function Companion_getInstance_48() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_getInstance().k37();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.g3p_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.o37_1, it);
      return Unit_getInstance();
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_48();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_16().g3p_1);
  }
  protoOf(TextStyle).p37 = function (other) {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.o37_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).p3g = function (value) {
    this.j3p(value);
  };
  protoOf(TextStyle).j3p = function (color) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.o37_1, color);
    return this;
  };
  protoOf(TextStyle).k3p = function (value) {
    this.l3p(value);
  };
  protoOf(TextStyle).l3p = function (paint) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.o37_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).m3p = function (value) {
    this.n3p(value);
  };
  protoOf(TextStyle).n3p = function (paint) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.o37_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).o3p = function (value) {
    this.p3p(value);
  };
  protoOf(TextStyle).p3p = function (d) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.o37_1, d.j3l_1, d.k3l_1, d.l3l_1, d.m3l_1, d.n3l_1, d.o3l_1.h7_1, d.p3l_1);
    return this;
  };
  protoOf(TextStyle).q3p = function (value) {
    this.r3p(value);
  };
  protoOf(TextStyle).g3k = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.o37_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).r3p = function (s) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.o37_1, s.h3e_1);
    return this;
  };
  protoOf(TextStyle).s3p = function (s) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.o37_1, s.k3o_1, s.l3o_1, s.m3o_1, s.n3o_1);
    return this;
  };
  protoOf(TextStyle).t3p = function (f) {
    Stats_getInstance().k37();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.o37_1, tmp0_anonymous.n38(f.n3d()), f.k3d_1);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).u3p = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.t3p(s);
    }
    return this;
  };
  protoOf(TextStyle).r3o = function (value) {
    this.s3o(value);
  };
  protoOf(TextStyle).s3o = function (size) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.o37_1, size);
    return this;
  };
  protoOf(TextStyle).v3p = function (value) {
    this.w3p(value);
  };
  protoOf(TextStyle).w3p = function (families) {
    Stats_getInstance().k37();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.o37_1;
        var tmp_0 = tmp0_anonymous.x3l(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).x3p = function (value) {
    this.y3p(value);
  };
  protoOf(TextStyle).y3p = function (letterSpacing) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.o37_1, letterSpacing);
    return this;
  };
  protoOf(TextStyle).z3p = function (value) {
    this.a3q(value);
  };
  protoOf(TextStyle).a3q = function (baselineShift) {
    Stats_getInstance().k37();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.o37_1, baselineShift);
    return this;
  };
  protoOf(TextStyle).b3q = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_12();
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_48() {
    Companion_instance_48 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_48;
  function Companion_getInstance_49() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_49();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_getInstance().k37();
  }
  protoOf(TypefaceFontProvider).e3q = function (typeface, alias) {
    var tmp;
    try {
      Stats_getInstance().k37();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.o37_1, getPtr(typeface), tmp0_anonymous.n38(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function Companion_49() {
    Companion_instance_49 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_49;
  function Companion_getInstance_50() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function SVGContainer(ptr) {
    Companion_getInstance_50();
    SVGTransformableNode.call(this, ptr);
  }
  function Companion_50() {
    Companion_instance_50 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_50;
  function Companion_getInstance_51() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function SVGDOM_init_$Init$(data, $this) {
    SVGDOM.call($this, makeSVGDOM(data));
    return $this;
  }
  function SVGDOM_init_$Create$(data) {
    return SVGDOM_init_$Init$(data, objectCreate(protoOf(SVGDOM)));
  }
  function SVGDOM(ptr) {
    Companion_getInstance_51();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(SVGDOM).h3q = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var ptr = org_jetbrains_skia_svg_SVGDOM__1nGetRoot(this.o37_1);
      tmp = ptr === Companion_getInstance_62().l39() ? null : new SVGSVG(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGDOM).i3q = function (canvas) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_svg_SVGDOM__1nRender(this.o37_1, getPtr(canvas));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  function makeSVGDOM(data) {
    Stats_getInstance().k37();
    var tmp;
    try {
      tmp = org_jetbrains_skia_svg_SVGDOM__1nMakeFromData(getPtr(data));
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  }
  function Companion_51() {
    Companion_instance_51 = this;
  }
  protoOf(Companion_51).j3q = function (block) {
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.r3f(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.k39(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().su();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.svg.Companion.fromInterop.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_withResult[0];
    tmp$ret$3 = floatFromBits(tmp1_fromBits);
    return SVGLength_init_$Create$(tmp$ret$3, tmp0_withResult[1]);
  };
  var Companion_instance_51;
  function Companion_getInstance_52() {
    if (Companion_instance_51 == null)
      new Companion_51();
    return Companion_instance_51;
  }
  function SVGLength_init_$Init$(value, unit, $this) {
    SVGLength.call($this, value, values_6()[unit]);
    return $this;
  }
  function SVGLength_init_$Create$(value, unit) {
    return SVGLength_init_$Init$(value, unit, objectCreate(protoOf(SVGLength)));
  }
  function SVGLength(value, unit) {
    Companion_getInstance_52();
    this.k3q_1 = value;
    this.l3q_1 = unit;
  }
  protoOf(SVGLength).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGLength))
      return false;
    if (!(compareTo(this.k3q_1, other.k3q_1) === 0))
      return false;
    return this.l3q_1.equals(other.l3q_1);
  };
  protoOf(SVGLength).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.k3q_1) | 0;
    result = imul(result, PRIME) + this.l3q_1.hashCode() | 0;
    return result;
  };
  protoOf(SVGLength).toString = function () {
    return 'SVGLength(_value=' + this.k3q_1 + ', _unit=' + this.l3q_1 + ')';
  };
  protoOf(SVGLength).m3q = function (_unit) {
    return this.l3q_1 === _unit ? this : new SVGLength(this.k3q_1, _unit);
  };
  var SVGLengthUnit_UNKNOWN_instance;
  var SVGLengthUnit_NUMBER_instance;
  var SVGLengthUnit_PERCENTAGE_instance;
  var SVGLengthUnit_EMS_instance;
  var SVGLengthUnit_EXS_instance;
  var SVGLengthUnit_PX_instance;
  var SVGLengthUnit_CM_instance;
  var SVGLengthUnit_MM_instance;
  var SVGLengthUnit_IN_instance;
  var SVGLengthUnit_PT_instance;
  var SVGLengthUnit_PC_instance;
  function values_6() {
    return [SVGLengthUnit_UNKNOWN_getInstance(), SVGLengthUnit_NUMBER_getInstance(), SVGLengthUnit_PERCENTAGE_getInstance(), SVGLengthUnit_EMS_getInstance(), SVGLengthUnit_EXS_getInstance(), SVGLengthUnit_PX_getInstance(), SVGLengthUnit_CM_getInstance(), SVGLengthUnit_MM_getInstance(), SVGLengthUnit_IN_getInstance(), SVGLengthUnit_PT_getInstance(), SVGLengthUnit_PC_getInstance()];
  }
  var SVGLengthUnit_entriesInitialized;
  function SVGLengthUnit_initEntries() {
    if (SVGLengthUnit_entriesInitialized)
      return Unit_getInstance();
    SVGLengthUnit_entriesInitialized = true;
    SVGLengthUnit_UNKNOWN_instance = new SVGLengthUnit('UNKNOWN', 0);
    SVGLengthUnit_NUMBER_instance = new SVGLengthUnit('NUMBER', 1);
    SVGLengthUnit_PERCENTAGE_instance = new SVGLengthUnit('PERCENTAGE', 2);
    SVGLengthUnit_EMS_instance = new SVGLengthUnit('EMS', 3);
    SVGLengthUnit_EXS_instance = new SVGLengthUnit('EXS', 4);
    SVGLengthUnit_PX_instance = new SVGLengthUnit('PX', 5);
    SVGLengthUnit_CM_instance = new SVGLengthUnit('CM', 6);
    SVGLengthUnit_MM_instance = new SVGLengthUnit('MM', 7);
    SVGLengthUnit_IN_instance = new SVGLengthUnit('IN', 8);
    SVGLengthUnit_PT_instance = new SVGLengthUnit('PT', 9);
    SVGLengthUnit_PC_instance = new SVGLengthUnit('PC', 10);
  }
  function SVGLengthUnit(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGLengthUnit_UNKNOWN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_UNKNOWN_instance;
  }
  function SVGLengthUnit_NUMBER_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_NUMBER_instance;
  }
  function SVGLengthUnit_PERCENTAGE_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PERCENTAGE_instance;
  }
  function SVGLengthUnit_EMS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EMS_instance;
  }
  function SVGLengthUnit_EXS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EXS_instance;
  }
  function SVGLengthUnit_PX_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PX_instance;
  }
  function SVGLengthUnit_CM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_CM_instance;
  }
  function SVGLengthUnit_MM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_MM_instance;
  }
  function SVGLengthUnit_IN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_IN_instance;
  }
  function SVGLengthUnit_PT_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PT_instance;
  }
  function SVGLengthUnit_PC_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PC_instance;
  }
  function Companion_52() {
    Companion_instance_52 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_52;
  function Companion_getInstance_53() {
    if (Companion_instance_52 == null)
      new Companion_52();
    return Companion_instance_52;
  }
  function SVGNode(ptr) {
    Companion_getInstance_53();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_53() {
    Companion_instance_53 = this;
  }
  var Companion_instance_53;
  function Companion_getInstance_54() {
    if (Companion_instance_53 == null)
      new Companion_53();
    return Companion_instance_53;
  }
  function SVGPreserveAspectRatio_init_$Init$(align, $this) {
    SVGPreserveAspectRatio.call($this, align, SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$(align) {
    return SVGPreserveAspectRatio_init_$Init$(align, objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio(align, scale) {
    Companion_getInstance_54();
    this.n3q_1 = align;
    this.o3q_1 = scale;
  }
  protoOf(SVGPreserveAspectRatio).p3q = function () {
    return this.n3q_1;
  };
  protoOf(SVGPreserveAspectRatio).q3q = function () {
    return this.o3q_1;
  };
  protoOf(SVGPreserveAspectRatio).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGPreserveAspectRatio))
      return false;
    if (!this.p3q().equals(other.p3q()))
      return false;
    return this.q3q().equals(other.q3q());
  };
  protoOf(SVGPreserveAspectRatio).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.p3q().hashCode() | 0;
    result = imul(result, PRIME) + this.q3q().hashCode() | 0;
    return result;
  };
  protoOf(SVGPreserveAspectRatio).toString = function () {
    return 'SVGPreserveAspectRatio(_align=' + this.p3q() + ', _scale=' + this.q3q() + ')';
  };
  var SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  var SVGPreserveAspectRatioAlign_NONE_instance;
  function Companion_54() {
    Companion_instance_54 = this;
  }
  protoOf(Companion_54).r3q = function (value) {
    var tmp;
    switch (value) {
      case 0:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance();
        break;
      case 1:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance();
        break;
      case 2:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance();
        break;
      case 4:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance();
        break;
      case 5:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMID_getInstance();
        break;
      case 6:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance();
        break;
      case 8:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance();
        break;
      case 9:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance();
        break;
      case 10:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance();
        break;
      case 16:
        tmp = SVGPreserveAspectRatioAlign_NONE_getInstance();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unknown SVGPreserveAspectRatioAlign value: ' + value);
    }
    return tmp;
  };
  var Companion_instance_54;
  function Companion_getInstance_55() {
    SVGPreserveAspectRatioAlign_initEntries();
    if (Companion_instance_54 == null)
      new Companion_54();
    return Companion_instance_54;
  }
  var SVGPreserveAspectRatioAlign_entriesInitialized;
  function SVGPreserveAspectRatioAlign_initEntries() {
    if (SVGPreserveAspectRatioAlign_entriesInitialized)
      return Unit_getInstance();
    SVGPreserveAspectRatioAlign_entriesInitialized = true;
    SVGPreserveAspectRatioAlign_XMIN_YMIN_instance = new SVGPreserveAspectRatioAlign('XMIN_YMIN', 0, 0);
    SVGPreserveAspectRatioAlign_XMID_YMIN_instance = new SVGPreserveAspectRatioAlign('XMID_YMIN', 1, 1);
    SVGPreserveAspectRatioAlign_XMAX_YMIN_instance = new SVGPreserveAspectRatioAlign('XMAX_YMIN', 2, 2);
    SVGPreserveAspectRatioAlign_XMIN_YMID_instance = new SVGPreserveAspectRatioAlign('XMIN_YMID', 3, 4);
    SVGPreserveAspectRatioAlign_XMID_YMID_instance = new SVGPreserveAspectRatioAlign('XMID_YMID', 4, 5);
    SVGPreserveAspectRatioAlign_XMAX_YMID_instance = new SVGPreserveAspectRatioAlign('XMAX_YMID', 5, 6);
    SVGPreserveAspectRatioAlign_XMIN_YMAX_instance = new SVGPreserveAspectRatioAlign('XMIN_YMAX', 6, 8);
    SVGPreserveAspectRatioAlign_XMID_YMAX_instance = new SVGPreserveAspectRatioAlign('XMID_YMAX', 7, 9);
    SVGPreserveAspectRatioAlign_XMAX_YMAX_instance = new SVGPreserveAspectRatioAlign('XMAX_YMAX', 8, 10);
    SVGPreserveAspectRatioAlign_NONE_instance = new SVGPreserveAspectRatioAlign('NONE', 9, 16);
    Companion_getInstance_55();
  }
  function SVGPreserveAspectRatioAlign(name, ordinal, _value) {
    Enum.call(this, name, ordinal);
    this.u3q_1 = _value;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_NONE_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_NONE_instance;
  }
  var SVGPreserveAspectRatioScale_MEET_instance;
  var SVGPreserveAspectRatioScale_SLICE_instance;
  var SVGPreserveAspectRatioScale_entriesInitialized;
  function SVGPreserveAspectRatioScale_initEntries() {
    if (SVGPreserveAspectRatioScale_entriesInitialized)
      return Unit_getInstance();
    SVGPreserveAspectRatioScale_entriesInitialized = true;
    SVGPreserveAspectRatioScale_MEET_instance = new SVGPreserveAspectRatioScale('MEET', 0);
    SVGPreserveAspectRatioScale_SLICE_instance = new SVGPreserveAspectRatioScale('SLICE', 1);
  }
  function SVGPreserveAspectRatioScale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGPreserveAspectRatioScale_MEET_getInstance() {
    SVGPreserveAspectRatioScale_initEntries();
    return SVGPreserveAspectRatioScale_MEET_instance;
  }
  function Companion_55() {
    Companion_instance_55 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_55;
  function Companion_getInstance_56() {
    if (Companion_instance_55 == null)
      new Companion_55();
    return Companion_instance_55;
  }
  function SVGSVG$_get_width_$lambda_z81obo(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetWidth(this$0.o37_1, it);
      return Unit_getInstance();
    };
  }
  function SVGSVG$_get_height_$lambda_1cq2rn(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetHeight(this$0.o37_1, it);
      return Unit_getInstance();
    };
  }
  function SVGSVG$_get_viewBox_$lambda_hsbx38(this$0) {
    return function (it) {
      return org_jetbrains_skia_svg_SVGSVG__1nGetViewBox(this$0.o37_1, it);
    };
  }
  function SVGSVG(ptr) {
    Companion_getInstance_56();
    SVGContainer.call(this, ptr);
  }
  protoOf(SVGSVG).x3q = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_svg_SVGSVG__1nSetWidth(this.o37_1, value.k3q_1, value.l3q_1.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).v33 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_52();
      tmp = tmp_0.j3q(SVGSVG$_get_width_$lambda_z81obo(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).y3q = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_svg_SVGSVG__1nSetHeight(this.o37_1, value.k3q_1, value.l3q_1.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).w33 = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_52();
      tmp = tmp_0.j3q(SVGSVG$_get_height_$lambda_1cq2rn(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).z3q = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio(this.o37_1, value.n3q_1.u3q_1, value.o3q_1.h7_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).a3r = function (value) {
    var tmp;
    try {
      Stats_getInstance().k37();
      org_jetbrains_skia_svg_SVGSVG__1nSetViewBox(this.o37_1, ensureNotNull(value).w39_1, value.x39_1, value.y39_1, value.z39_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).b3r = function () {
    var tmp;
    try {
      Stats_getInstance().k37();
      var tmp_0 = Companion_getInstance_33();
      tmp = tmp_0.l3j(SVGSVG$_get_viewBox_$lambda_hsbx38(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_56() {
    Companion_instance_56 = this;
    Companion_getInstance_60().i37();
  }
  var Companion_instance_56;
  function Companion_getInstance_57() {
    if (Companion_instance_56 == null)
      new Companion_56();
    return Companion_instance_56;
  }
  function SVGTransformableNode(ptr) {
    Companion_getInstance_57();
    SVGNode.call(this, ptr);
  }
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_58().c3r_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    this.h3r_1 = key;
    this.i3r_1 = modifiers;
    this.j3r_1 = kind;
    this.k3r_1 = timestamp;
    this.l3r_1 = platform;
  }
  protoOf(SkikoKeyboardEvent).toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.h3r_1 + ', modifiers=' + new SkikoInputModifiers(this.i3r_1) + ', kind=' + this.j3r_1 + ', timestamp=' + toString(this.k3r_1) + ', platform=' + this.l3r_1 + ')';
  };
  protoOf(SkikoKeyboardEvent).hashCode = function () {
    var result = this.h3r_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.i3r_1) | 0;
    result = imul(result, 31) + this.j3r_1.hashCode() | 0;
    result = imul(result, 31) + this.k3r_1.hashCode() | 0;
    result = imul(result, 31) + (this.l3r_1 == null ? 0 : hashCode(this.l3r_1)) | 0;
    return result;
  };
  protoOf(SkikoKeyboardEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.h3r_1.equals(tmp0_other_with_cast.h3r_1))
      return false;
    if (!(this.i3r_1 === tmp0_other_with_cast.i3r_1))
      return false;
    if (!this.j3r_1.equals(tmp0_other_with_cast.j3r_1))
      return false;
    if (!this.k3r_1.equals(tmp0_other_with_cast.k3r_1))
      return false;
    if (!equals(this.l3r_1, tmp0_other_with_cast.l3r_1))
      return false;
    return true;
  };
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_57() {
    Companion_instance_57 = this;
    this.c3r_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.d3r_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.e3r_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.f3r_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.g3r_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  var Companion_instance_57;
  function Companion_getInstance_58() {
    if (Companion_instance_57 == null)
      new Companion_57();
    return Companion_instance_57;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_apply = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_58().d3r_1)) {
      tmp0_apply.a('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_58().e3r_1)) {
      tmp0_apply.a('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_58().f3r_1)) {
      tmp0_apply.a('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_58().g3r_1)) {
      tmp0_apply.a('SHIFT');
    }
    var result = tmp0_apply;
    return !result.l() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    if (!($this === (other instanceof SkikoInputModifiers ? other.m3r_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_58();
    this.m3r_1 = value;
  }
  protoOf(SkikoInputModifiers).toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.m3r_1);
  };
  protoOf(SkikoInputModifiers).hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.m3r_1);
  };
  protoOf(SkikoInputModifiers).equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.m3r_1, other);
  };
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 0);
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 1);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 2);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoInputEvent(input, key, modifiers, kind, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_58().c3r_1 : modifiers;
    this.n3r_1 = input;
    this.o3r_1 = key;
    this.p3r_1 = modifiers;
    this.q3r_1 = kind;
    this.r3r_1 = platform;
  }
  protoOf(SkikoInputEvent).toString = function () {
    return 'SkikoInputEvent(input=' + this.n3r_1 + ', key=' + this.o3r_1 + ', modifiers=' + new SkikoInputModifiers(this.p3r_1) + ', kind=' + this.q3r_1 + ', platform=' + this.r3r_1 + ')';
  };
  protoOf(SkikoInputEvent).hashCode = function () {
    var result = getStringHashCode(this.n3r_1);
    result = imul(result, 31) + this.o3r_1.hashCode() | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.p3r_1) | 0;
    result = imul(result, 31) + this.q3r_1.hashCode() | 0;
    result = imul(result, 31) + (this.r3r_1 == null ? 0 : hashCode(this.r3r_1)) | 0;
    return result;
  };
  protoOf(SkikoInputEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoInputEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputEvent ? other : THROW_CCE();
    if (!(this.n3r_1 === tmp0_other_with_cast.n3r_1))
      return false;
    if (!this.o3r_1.equals(tmp0_other_with_cast.o3r_1))
      return false;
    if (!(this.p3r_1 === tmp0_other_with_cast.p3r_1))
      return false;
    if (!this.q3r_1.equals(tmp0_other_with_cast.q3r_1))
      return false;
    if (!equals(this.r3r_1, tmp0_other_with_cast.r3r_1))
      return false;
    return true;
  };
  function SkikoPointerEvent(x, y, kind, deltaX, deltaY, pressedButtons, button, modifiers, timestamp, pointers, platform) {
    deltaX = deltaX === VOID ? 0.0 : deltaX;
    deltaY = deltaY === VOID ? 0.0 : deltaY;
    pressedButtons = pressedButtons === VOID ? Companion_getInstance_59().s3r_1 : pressedButtons;
    button = button === VOID ? Companion_getInstance_59().s3r_1 : button;
    modifiers = modifiers === VOID ? Companion_getInstance_58().c3r_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    pointers = pointers === VOID ? listOf(new SkikoPointer(new Long(0, 0), x, y, SkikoMouseButtons__has_impl_481exw(pressedButtons, Companion_getInstance_59().t3r_1))) : pointers;
    platform = platform === VOID ? null : platform;
    this.e3s_1 = x;
    this.f3s_1 = y;
    this.g3s_1 = kind;
    this.h3s_1 = deltaX;
    this.i3s_1 = deltaY;
    this.j3s_1 = pressedButtons;
    this.k3s_1 = button;
    this.l3s_1 = modifiers;
    this.m3s_1 = timestamp;
    this.n3s_1 = pointers;
    this.o3s_1 = platform;
  }
  protoOf(SkikoPointerEvent).toString = function () {
    return 'SkikoPointerEvent(x=' + this.e3s_1 + ', y=' + this.f3s_1 + ', kind=' + this.g3s_1 + ', deltaX=' + this.h3s_1 + ', deltaY=' + this.i3s_1 + ', pressedButtons=' + new SkikoMouseButtons(this.j3s_1) + ', button=' + new SkikoMouseButtons(this.k3s_1) + ', modifiers=' + new SkikoInputModifiers(this.l3s_1) + ', timestamp=' + toString(this.m3s_1) + ', pointers=' + this.n3s_1 + ', platform=' + this.o3s_1 + ')';
  };
  protoOf(SkikoPointerEvent).hashCode = function () {
    var result = getNumberHashCode(this.e3s_1);
    result = imul(result, 31) + getNumberHashCode(this.f3s_1) | 0;
    result = imul(result, 31) + this.g3s_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.h3s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i3s_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.j3s_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.k3s_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.l3s_1) | 0;
    result = imul(result, 31) + this.m3s_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.n3s_1) | 0;
    result = imul(result, 31) + (this.o3s_1 == null ? 0 : hashCode(this.o3s_1)) | 0;
    return result;
  };
  protoOf(SkikoPointerEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.e3s_1, tmp0_other_with_cast.e3s_1))
      return false;
    if (!equals(this.f3s_1, tmp0_other_with_cast.f3s_1))
      return false;
    if (!this.g3s_1.equals(tmp0_other_with_cast.g3s_1))
      return false;
    if (!equals(this.h3s_1, tmp0_other_with_cast.h3s_1))
      return false;
    if (!equals(this.i3s_1, tmp0_other_with_cast.i3s_1))
      return false;
    if (!(this.j3s_1 === tmp0_other_with_cast.j3s_1))
      return false;
    if (!(this.k3s_1 === tmp0_other_with_cast.k3s_1))
      return false;
    if (!(this.l3s_1 === tmp0_other_with_cast.l3s_1))
      return false;
    if (!this.m3s_1.equals(tmp0_other_with_cast.m3s_1))
      return false;
    if (!equals(this.n3s_1, tmp0_other_with_cast.n3s_1))
      return false;
    if (!equals(this.o3s_1, tmp0_other_with_cast.o3s_1))
      return false;
    return true;
  };
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 0);
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 1);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 2);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 3);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 4);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 5);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 6);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointer(id, x, y, pressed, device, pressure) {
    device = device === VOID ? SkikoPointerDevice_MOUSE_getInstance() : device;
    pressure = pressure === VOID ? 1.0 : pressure;
    this.p3s_1 = id;
    this.q3s_1 = x;
    this.r3s_1 = y;
    this.s3s_1 = pressed;
    this.t3s_1 = device;
    this.u3s_1 = pressure;
  }
  protoOf(SkikoPointer).toString = function () {
    return 'SkikoPointer(id=' + toString(this.p3s_1) + ', x=' + this.q3s_1 + ', y=' + this.r3s_1 + ', pressed=' + this.s3s_1 + ', device=' + this.t3s_1 + ', pressure=' + this.u3s_1 + ')';
  };
  protoOf(SkikoPointer).hashCode = function () {
    var result = this.p3s_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.q3s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r3s_1) | 0;
    result = imul(result, 31) + (this.s3s_1 | 0) | 0;
    result = imul(result, 31) + this.t3s_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3s_1) | 0;
    return result;
  };
  protoOf(SkikoPointer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointer))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointer ? other : THROW_CCE();
    if (!this.p3s_1.equals(tmp0_other_with_cast.p3s_1))
      return false;
    if (!equals(this.q3s_1, tmp0_other_with_cast.q3s_1))
      return false;
    if (!equals(this.r3s_1, tmp0_other_with_cast.r3s_1))
      return false;
    if (!(this.s3s_1 === tmp0_other_with_cast.s3s_1))
      return false;
    if (!this.t3s_1.equals(tmp0_other_with_cast.t3s_1))
      return false;
    if (!equals(this.u3s_1, tmp0_other_with_cast.u3s_1))
      return false;
    return true;
  };
  var SkikoPointerDevice_UNKNOWN_instance;
  var SkikoPointerDevice_MOUSE_instance;
  var SkikoPointerDevice_TOUCH_instance;
  var SkikoPointerDevice_entriesInitialized;
  function SkikoPointerDevice_initEntries() {
    if (SkikoPointerDevice_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerDevice_entriesInitialized = true;
    SkikoPointerDevice_UNKNOWN_instance = new SkikoPointerDevice('UNKNOWN', 0);
    SkikoPointerDevice_MOUSE_instance = new SkikoPointerDevice('MOUSE', 1);
    SkikoPointerDevice_TOUCH_instance = new SkikoPointerDevice('TOUCH', 2);
  }
  function SkikoPointerDevice(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_58() {
    Companion_instance_58 = this;
    this.s3r_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.t3r_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.u3r_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.v3r_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.w3r_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.x3r_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.y3r_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.z3r_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.a3s_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.b3s_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.c3s_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.d3s_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  var Companion_instance_58;
  function Companion_getInstance_59() {
    if (Companion_instance_58 == null)
      new Companion_58();
    return Companion_instance_58;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_apply = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().t3r_1)) {
      tmp0_apply.a('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().u3r_1)) {
      tmp0_apply.a('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().v3r_1)) {
      tmp0_apply.a('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().z3r_1)) {
      tmp0_apply.a('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().a3s_1)) {
      tmp0_apply.a('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().b3s_1)) {
      tmp0_apply.a('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().c3s_1)) {
      tmp0_apply.a('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_59().d3s_1)) {
      tmp0_apply.a('BUTTON_8');
    }
    var result = tmp0_apply;
    return !result.l() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    if (!($this === (other instanceof SkikoMouseButtons ? other.v3s_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_59();
    this.v3s_1 = value;
  }
  protoOf(SkikoMouseButtons).toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.v3s_1);
  };
  protoOf(SkikoMouseButtons).hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.v3s_1);
  };
  protoOf(SkikoMouseButtons).equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.v3s_1, other);
  };
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoKeyboardEventKind_TYPE_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_TYPE_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  function SkikoPointerDevice_MOUSE_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_MOUSE_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_getInstance();
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_getInstance();
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_JS_instance = new OS('JS', 5, 'js');
    OS_Unknown_instance = new OS('Unknown', 6, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.y3s_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_getInstance();
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.b3t_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  protoOf(ClipboardManager).c3t = function (text) {
    return ClipboardManager_setText(text);
  };
  protoOf(ClipboardManager).d3t = function () {
    return ClipboardManager_getText();
  };
  protoOf(ClipboardManager).e3t = function () {
    return ClipboardManager_hasText();
  };
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoView() {
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_getInstance();
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.j3t_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_59() {
    Companion_instance_59 = this;
  }
  protoOf(Companion_59).i37 = function () {
  };
  var Companion_instance_59;
  function Companion_getInstance_60() {
    if (Companion_instance_59 == null)
      new Companion_59();
    return Companion_instance_59;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function FinalizationThunk(finalizer, obj) {
    this.k3t_1 = finalizer;
    this.l3t_1 = obj;
  }
  protoOf(FinalizationThunk).m3t = function () {
    if (!(this.l3t_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.k3t_1, this.l3t_1);
    }
    this.l3t_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.n37_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.n37_1 = thunk;
    }
  }
  protoOf(Managed).o1y = function () {
    if (Companion_getInstance_62().l39() === this.o37_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).mh() + ', _ptr=' + this.o37_1);
    else if (null == this.n37_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).mh() + ', _ptr=' + this.o37_1);
    else {
      unregister(this);
      ensureNotNull(this.n37_1).m3t();
      this.n37_1 = null;
      this.o37_1 = 0;
    }
  };
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.m3t();
    return Unit_getInstance();
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) ? array.g() > 0 : false) {
      var data = _malloc(imul(array.g(), 4));
      $this.l38_1.a(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.a3g_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l38_1 = ArrayList_init_$Create$_0();
    this.m38_1 = false;
  }
  protoOf(InteropScope).n38 = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.l38_1.a(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).h3c = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).c3g = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).c39 = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).k39 = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).j39 = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).r3f = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).f3e = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).h3a = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).e3e = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).b3m = function (array) {
    return toInterop_3(this, array, true);
  };
  protoOf(InteropScope).d3g = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).y3f = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).z3f = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.a3g_1);
  };
  protoOf(InteropScope).x3l = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(stringArray.length);
      var tmp0_iterator = arrayIterator(stringArray);
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        tmp$ret$2 = this.n38(item);
        tmp0_mapTo.a(tmp$ret$2);
      }
      var ptrs = toIntArray(tmp0_mapTo);
      tmp = this.j39(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).su = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.l38_1.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.l38_1.a4();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.m38_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.m38_1 = false;
    }
  };
  function toWasm(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function toWasm_3(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_js_kt__80argu();
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function Companion_60() {
    Companion_instance_60 = this;
  }
  var Companion_instance_60;
  function Companion_getInstance_61() {
    if (Companion_instance_60 == null)
      new Companion_60();
    return Companion_instance_60;
  }
  function NativePointerArray(size) {
    Companion_getInstance_61();
    this.a3g_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).m = function (index) {
    return this.a3g_1[index];
  };
  protoOf(NativePointerArray).g = function () {
    return this.a3g_1.length;
  };
  function Companion_61() {
    Companion_instance_61 = this;
  }
  protoOf(Companion_61).l39 = function () {
    return 0;
  };
  var Companion_instance_61;
  function Companion_getInstance_62() {
    if (Companion_instance_61 == null)
      new Companion_61();
    return Companion_instance_61;
  }
  function Native(ptr) {
    Companion_getInstance_62();
    if (ptr === Companion_getInstance_62().l39())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.o37_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.o37_1 === other.o37_1 ? true : this.p37(other);
  };
  protoOf(Native).hashCode = function () {
    return this.o37_1;
  };
  protoOf(Native).p37 = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).mh(), '(_ptr=0x') + toString_0(this.o37_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _releaseLocalCallbackScope();
  }
  function _set_interopScopeCounter_$accessor$wmqves_ygusxq(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$wmqves_umgosu() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$wmqves_peku9r() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().n3t_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().n3t_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).t3b = function () {
    Stats_getInstance().k37();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.o37_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, tmp0_substring) + ', refCount=' + this.t3b() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.n3t_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function Stats() {
    Stats_instance = this;
  }
  protoOf(Stats).k37 = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    if (Stats_instance == null)
      new Stats();
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function ClipboardManager_setText(text) {
    window.navigator.clipboard.writeText(text);
  }
  function ClipboardManager_getText() {
    return null;
  }
  function ClipboardManager_hasText() {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = ClipboardManager_getText();
    // Inline function 'kotlin.contracts.contract' call
    return !(tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.r3t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o1y();
    }
    $this.r3t_1 = null;
    var tmp1_safe_receiver = $this.s3t_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.o1y();
    }
    $this.s3t_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.u3t_1 = false;
      GL.makeContextCurrent(this$0.p3t_1);
      var tmp0_safe_receiver = this$0.t3t_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        Color_getInstance();
        tmp0_safe_receiver.r2t(-1);
      }
      var tmp1_safe_receiver = this$0.t3t_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.v3a();
      this$0.v3t(timestamp);
      var tmp2_safe_receiver = this$0.r3t_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.b3k();
      }
      this$0.q3t_1.q3c();
      return Unit_getInstance();
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.o3t_1 = htmlCanvas;
    this.p3t_1 = createWebGLContext(this.o3t_1);
    this.r3t_1 = null;
    this.s3t_1 = null;
    this.t3t_1 = null;
    GL.makeContextCurrent(this.p3t_1);
    this.q3t_1 = Companion_getInstance_9().n3c();
    this.u3t_1 = false;
  }
  protoOf(CanvasRenderer).v33 = function () {
    return this.o3t_1.width;
  };
  protoOf(CanvasRenderer).w33 = function () {
    return this.o3t_1.height;
  };
  protoOf(CanvasRenderer).w3t = function (desiredWidth, desiredHeight, scale, pixelGeometry) {
    disposeCanvas(this);
    this.o3t_1.width = numberToInt(desiredWidth * scale);
    this.o3t_1.height = numberToInt(desiredHeight * scale);
    this.s3t_1 = Companion_getInstance_0().j37(this.v33(), this.w33(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_36().u3j(this.q3t_1, ensureNotNull(this.s3t_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_6().z3b_1, new SurfaceProps(VOID, pixelGeometry));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.r3t_1 = tmp_0;
    this.t3t_1 = ensureNotNull(this.r3t_1).a3k();
  };
  protoOf(CanvasRenderer).x3t = function () {
    if (this.u3t_1) {
      return Unit_getInstance();
    }
    this.u3t_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_SPECIAL_KEYS() {
    _init_properties_Convertors_js_kt__upzh8o();
    return SPECIAL_KEYS;
  }
  var SPECIAL_KEYS;
  function set_buttonsFlags(_set____db54di) {
    _init_properties_Convertors_js_kt__upzh8o();
    buttonsFlags = _set____db54di;
  }
  function get_buttonsFlags() {
    _init_properties_Convertors_js_kt__upzh8o();
    return buttonsFlags;
  }
  var buttonsFlags;
  function toSkikoEvent(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = toSkikoPressedMouseButtons(event, kind);
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp5_timestamp, VOID, event);
  }
  function toSkikoDragEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_kind = SkikoPointerEventKind_DRAG_getInstance();
    var tmp6_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp5_kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp6_timestamp, VOID, event);
  }
  function toSkikoScrollEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_deltaX = event.deltaX;
    var tmp3_deltaY = event.deltaY;
    var tmp4_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp5_button = Companion_getInstance_59().s3r_1;
    var tmp6_modifiers = toSkikoModifiers(event);
    var tmp7_kind = SkikoPointerEventKind_SCROLL_getInstance();
    var tmp8_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp7_kind, tmp2_deltaX, tmp3_deltaY, tmp4_pressedButtons, tmp5_button, tmp6_modifiers, tmp8_timestamp, VOID, event);
  }
  function toSkikoEvent_0(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    return new SkikoKeyboardEvent(Companion_getInstance_63().r3q(toSkikoKey(event)), toSkikoModifiers_0(event), kind, numberToLong(event.timeStamp), event);
  }
  function toSkikoTypeEvent(character, event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp;
    if (get_SPECIAL_KEYS().n(character)) {
      tmp = null;
    } else {
      var input;
      switch (character) {
        case 'Enter':
          input = '\n';
          break;
        case 'Tab':
          input = '\t';
          break;
        default:
          input = character;
          break;
      }
      var key = !(event == null) ? Companion_getInstance_63().r3q(event.keyCode) : SkikoKey_KEY_UNKNOWN_getInstance();
      var modifiers = !(event == null) ? toSkikoModifiers_0(event) : Companion_getInstance_58().c3r_1;
      tmp = new SkikoInputEvent(input, key, modifiers, SkikoKeyboardEventKind_TYPE_getInstance(), event);
    }
    return tmp;
  }
  function toSkikoPressedMouseButtons(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var button = event.button;
    if (kind.equals(SkikoPointerEventKind_DOWN_getInstance())) {
      set_buttonsFlags(get_buttonsFlags() | getSkikoButtonValue(button));
      return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    }
    set_buttonsFlags(get_buttonsFlags() ^ getSkikoButtonValue(button));
    return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
  }
  function toSkikoMouseButton(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    return _SkikoMouseButtons___init__impl__kylsco(getSkikoButtonValue(event.button));
  }
  function toSkikoModifiers(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().f3r_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().g3r_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().e3r_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().d3r_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function toSkikoKey(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var key = event.keyCode;
    var side = event.location;
    if (side === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      if ((key === SkikoKey_KEY_LEFT_CONTROL_getInstance().a3u_1 ? true : key === SkikoKey_KEY_LEFT_SHIFT_getInstance().a3u_1) ? true : key === SkikoKey_KEY_LEFT_META_getInstance().a3u_1)
        key = key | -2147483648;
    }
    return key;
  }
  function toSkikoModifiers_0(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().f3r_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().g3r_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().e3r_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_58().d3r_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function getSkikoButtonValue(button) {
    _init_properties_Convertors_js_kt__upzh8o();
    switch (button) {
      case 0:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_59().t3r_1);
      case 1:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_59().v3r_1);
      case 2:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_59().u3r_1);
      case 3:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_59().z3r_1);
      case 4:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_59().a3s_1);
      default:
        return 0;
    }
  }
  var properties_initialized_Convertors_js_kt_vbq0oa;
  function _init_properties_Convertors_js_kt__upzh8o() {
    if (!properties_initialized_Convertors_js_kt_vbq0oa) {
      properties_initialized_Convertors_js_kt_vbq0oa = true;
      SPECIAL_KEYS = setOf(['Unidentified', 'Alt', 'AltGraph', 'Backspace', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Help', 'Home', 'Delete', 'End', 'PageUp', 'PageDown', 'Escape', 'Clear', 'Clear']);
      buttonsFlags = 0;
    }
  }
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_takeIf) > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function getNavigatorInfo() {
    _init_properties_OsArch_js_kt__jkqwph();
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().y3s_1 + '-' + get_hostArch().b3t_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  var onContentScaleChanged;
  function setOnChangeScaleNotifier($this) {
    var tmp0_safe_receiver = $this.b3u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w3t($this.f3u_1, $this.g3u_1, $this.i3u(), $this.j3u());
    }
    var tmp = window.matchMedia('(resolution: ' + $this.i3u() + 'dppx)');
    tmp.addEventListener('change', SkiaLayer$setOnChangeScaleNotifier$lambda($this), true);
    var tmp1_safe_receiver = onContentScaleChanged;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver($this.i3u());
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.r3u_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  protoOf(SkiaLayer$attachTo$1).v3t = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.r3u_1.d3u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i3t(ensureNotNull(this.t3t_1), this.v33(), this.w33(), numberToLong(currentNanos));
    }
  };
  function SkiaLayer$attachTo$lambda(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.e3u_1 = true;
      var tmp0_safe_receiver = this$0.d3u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.g3t(toSkikoEvent(event, SkikoPointerEventKind_DOWN_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_0(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.e3u_1 = false;
      var tmp0_safe_receiver = this$0.d3u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.g3t(toSkikoEvent(event, SkikoPointerEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_1(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      var tmp;
      if (this$0.e3u_1) {
        var tmp0_safe_receiver = this$0.d3u_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.g3t(toSkikoDragEvent(event));
        }
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = this$0.d3u_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.g3t(toSkikoEvent(event, SkikoPointerEventKind_MOVE_getInstance()));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_2(this$0) {
    return function (event) {
      if (event instanceof WheelEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.d3u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.g3t(toSkikoScrollEvent(event));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_3(event) {
    event.preventDefault();
    return Unit_getInstance();
  }
  function SkiaLayer$attachTo$lambda_4(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.d3u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.f3t(toSkikoEvent_0(event, SkikoKeyboardEventKind_DOWN_getInstance()));
      }
      var tmp1_safe_receiver = toSkikoTypeEvent(event.key, event);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_safe_receiver_0 = this$0.d3u_1;
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.h3t();
        if (tmp1_safe_receiver_0 == null)
          null;
        else {
          tmp1_safe_receiver_0.s3u(tmp1_safe_receiver);
        }
        tmp$ret$0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_5(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.d3u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.f3t(toSkikoEvent_0(event, SkikoKeyboardEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$setOnChangeScaleNotifier$lambda(this$0) {
    return function (it) {
      setOnChangeScaleNotifier(this$0);
      return Unit_getInstance();
    };
  }
  function SkiaLayer() {
    this.b3u_1 = null;
    this.c3u_1 = GraphicsApi_WEBGL_getInstance();
    this.d3u_1 = null;
    this.e3u_1 = false;
    this.f3u_1 = 0;
    this.g3u_1 = 0;
    this.h3u_1 = null;
  }
  protoOf(SkiaLayer).i3u = function () {
    return window.devicePixelRatio;
  };
  protoOf(SkiaLayer).x3t = function () {
    var tmp0_safe_receiver = this.b3u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x3t();
    }
  };
  protoOf(SkiaLayer).t3u = function (htmlCanvas, autoDetach) {
    this.h3u_1 = htmlCanvas;
    this.f3u_1 = htmlCanvas.width;
    this.g3u_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + this.f3u_1 + 'px';
    htmlCanvas.style.height = '' + this.g3u_1 + 'px';
    setOnChangeScaleNotifier(this);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new SkiaLayer$attachTo$1(htmlCanvas, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    tmp0_apply.w3t(this.f3u_1, this.g3u_1, this.i3u(), this.j3u());
    tmp.b3u_1 = tmp0_apply;
    htmlCanvas.addEventListener('mousedown', SkiaLayer$attachTo$lambda(this));
    htmlCanvas.addEventListener('mouseup', SkiaLayer$attachTo$lambda_0(this));
    htmlCanvas.addEventListener('mousemove', SkiaLayer$attachTo$lambda_1(this));
    htmlCanvas.addEventListener('wheel', SkiaLayer$attachTo$lambda_2(this));
    htmlCanvas.addEventListener('contextmenu', SkiaLayer$attachTo$lambda_3);
    htmlCanvas.addEventListener('keydown', SkiaLayer$attachTo$lambda_4(this));
    htmlCanvas.addEventListener('keyup', SkiaLayer$attachTo$lambda_5(this));
  };
  protoOf(SkiaLayer).u3u = function (htmlCanvas, autoDetach, $super) {
    autoDetach = autoDetach === VOID ? true : autoDetach;
    var tmp;
    if ($super === VOID) {
      this.t3u(htmlCanvas, autoDetach);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.t3u.call(this, htmlCanvas, autoDetach);
    }
    return tmp;
  };
  protoOf(SkiaLayer).j3u = function () {
    return PixelGeometry_UNKNOWN_getInstance();
  };
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).s3u = function (event) {
    return Unit_getInstance();
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_62() {
    Companion_instance_62 = this;
  }
  protoOf(Companion_62).r3q = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = values_7();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        if (element.a3u_1 === platformKeyCode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_62;
  function Companion_getInstance_63() {
    SkikoKey_initEntries();
    if (Companion_instance_62 == null)
      new Companion_62();
    return Companion_instance_62;
  }
  function values_7() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_getInstance();
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
    Companion_getInstance_63();
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.a3u_1 = platformKeyCode;
  }
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.v3u_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.w3u_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.x3u_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.y3u_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.z3u_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.a3v_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.b3v_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.c3v_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.d3v_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.e3v_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.f3v_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.g3v_1 = tmp1_elvis_lhs_10 == null ? 1 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).h3v = function () {
    return this.v3u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i3v = function () {
    return this.w3u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j3v = function () {
    return this.x3u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).k3v = function () {
    return this.y3u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).l3v = function () {
    return this.z3u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).m3v = function () {
    return this.a3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).n3v = function () {
    return this.b3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).o3v = function () {
    return this.c3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).p3v = function () {
    return this.d3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).q3v = function () {
    return this.e3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).r3v = function () {
    return this.f3v_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).s3v = function () {
    return this.g3v_1;
  };
  //region block: post-declaration
  protoOf(Bitmap).v33 = get_width;
  protoOf(Bitmap).w33 = get_height;
  protoOf(Bitmap).i38 = get_colorType;
  protoOf(Bitmap).j38 = get_colorSpace;
  protoOf(Bitmap).k38 = get_isOpaque;
  protoOf(Image).v33 = get_width;
  protoOf(Image).w33 = get_height;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.h3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.i3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.j3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.k3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.l3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.m3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.n3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.o3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.p3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.q3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.r3v();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.s3v();
  }, VOID);
  //endregion
  //region block: init
  onContentScaleChanged = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_SOLID_getInstance;
  _.$_$.i = Direction_LTR_getInstance;
  _.$_$.j = Direction_RTL_getInstance;
  _.$_$.k = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o = RectHeightMode_MAX_getInstance;
  _.$_$.p = RectHeightMode_STRUT_getInstance;
  _.$_$.q = RectWidthMode_TIGHT_getInstance;
  _.$_$.r = SVGLengthUnit_PX_getInstance;
  _.$_$.s = SVGPreserveAspectRatioAlign_NONE_getInstance;
  _.$_$.t = BlendMode_CLEAR_getInstance;
  _.$_$.u = BlendMode_COLOR_BURN_getInstance;
  _.$_$.v = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.w = BlendMode_COLOR_getInstance;
  _.$_$.x = BlendMode_DARKEN_getInstance;
  _.$_$.y = BlendMode_DIFFERENCE_getInstance;
  _.$_$.z = BlendMode_DST_ATOP_getInstance;
  _.$_$.a1 = BlendMode_DST_IN_getInstance;
  _.$_$.b1 = BlendMode_DST_OUT_getInstance;
  _.$_$.c1 = BlendMode_DST_OVER_getInstance;
  _.$_$.d1 = BlendMode_DST_getInstance;
  _.$_$.e1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.f1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.g1 = BlendMode_HUE_getInstance;
  _.$_$.h1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.i1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.j1 = BlendMode_MODULATE_getInstance;
  _.$_$.k1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.l1 = BlendMode_OVERLAY_getInstance;
  _.$_$.m1 = BlendMode_PLUS_getInstance;
  _.$_$.n1 = BlendMode_SATURATION_getInstance;
  _.$_$.o1 = BlendMode_SCREEN_getInstance;
  _.$_$.p1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.q1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.r1 = BlendMode_SRC_IN_getInstance;
  _.$_$.s1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.t1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.u1 = BlendMode_SRC_getInstance;
  _.$_$.v1 = BlendMode_XOR_getInstance;
  _.$_$.w1 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.x1 = ClipMode_INTERSECT_getInstance;
  _.$_$.y1 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.z1 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.a2 = ColorType_ALPHA_8_getInstance;
  _.$_$.b2 = ColorType_RGBA_F16_getInstance;
  _.$_$.c2 = ColorType_RGB_565_getInstance;
  _.$_$.d2 = FilterMode_LINEAR_getInstance;
  _.$_$.e2 = FilterMode_NEAREST_getInstance;
  _.$_$.f2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.g2 = FilterTileMode_DECAL_getInstance;
  _.$_$.h2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.i2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.j2 = MipmapMode_NEAREST_getInstance;
  _.$_$.k2 = MipmapMode_NONE_getInstance;
  _.$_$.l2 = PaintMode_FILL_getInstance;
  _.$_$.m2 = PaintMode_STROKE_getInstance;
  _.$_$.n2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.o2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.p2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.q2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.r2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.s2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.t2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.u2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.v2 = PathFillMode_WINDING_getInstance;
  _.$_$.w2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.x2 = PathOp_INTERSECT_getInstance;
  _.$_$.y2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.z2 = PathOp_UNION_getInstance;
  _.$_$.a3 = PathOp_XOR_getInstance;
  _.$_$.b3 = SkikoKey_KEY_0_getInstance;
  _.$_$.c3 = SkikoKey_KEY_1_getInstance;
  _.$_$.d3 = SkikoKey_KEY_2_getInstance;
  _.$_$.e3 = SkikoKey_KEY_3_getInstance;
  _.$_$.f3 = SkikoKey_KEY_4_getInstance;
  _.$_$.g3 = SkikoKey_KEY_5_getInstance;
  _.$_$.h3 = SkikoKey_KEY_6_getInstance;
  _.$_$.i3 = SkikoKey_KEY_7_getInstance;
  _.$_$.j3 = SkikoKey_KEY_8_getInstance;
  _.$_$.k3 = SkikoKey_KEY_9_getInstance;
  _.$_$.l3 = SkikoKey_KEY_A_getInstance;
  _.$_$.m3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.n3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.o3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.p3 = SkikoKey_KEY_B_getInstance;
  _.$_$.q3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.r3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.s3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.t3 = SkikoKey_KEY_C_getInstance;
  _.$_$.u3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.v3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.w3 = SkikoKey_KEY_D_getInstance;
  _.$_$.x3 = SkikoKey_KEY_END_getInstance;
  _.$_$.y3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.z3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.a4 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.b4 = SkikoKey_KEY_E_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F10_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F11_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F12_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F1_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.j4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.k4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.l4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.m4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.n4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.o4 = SkikoKey_KEY_F_getInstance;
  _.$_$.p4 = SkikoKey_KEY_G_getInstance;
  _.$_$.q4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.r4 = SkikoKey_KEY_H_getInstance;
  _.$_$.s4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.t4 = SkikoKey_KEY_I_getInstance;
  _.$_$.u4 = SkikoKey_KEY_J_getInstance;
  _.$_$.v4 = SkikoKey_KEY_K_getInstance;
  _.$_$.w4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.x4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.y4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.z4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.a5 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.b5 = SkikoKey_KEY_L_getInstance;
  _.$_$.c5 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.d5 = SkikoKey_KEY_M_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.o5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.p5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.q5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.r5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.s5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.t5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.u5 = SkikoKey_KEY_N_getInstance;
  _.$_$.v5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.w5 = SkikoKey_KEY_O_getInstance;
  _.$_$.x5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.y5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.z5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.a6 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.b6 = SkikoKey_KEY_P_getInstance;
  _.$_$.c6 = SkikoKey_KEY_Q_getInstance;
  _.$_$.d6 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.e6 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.f6 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.g6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.h6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.i6 = SkikoKey_KEY_R_getInstance;
  _.$_$.j6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.k6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.l6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.m6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.n6 = SkikoKey_KEY_S_getInstance;
  _.$_$.o6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.p6 = SkikoKey_KEY_T_getInstance;
  _.$_$.q6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.r6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.s6 = SkikoKey_KEY_U_getInstance;
  _.$_$.t6 = SkikoKey_KEY_V_getInstance;
  _.$_$.u6 = SkikoKey_KEY_W_getInstance;
  _.$_$.v6 = SkikoKey_KEY_X_getInstance;
  _.$_$.w6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.x6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.y6 = SkikoKeyboardEventKind_DOWN_getInstance;
  _.$_$.z6 = SkikoPointerEventKind_SCROLL_getInstance;
  _.$_$.a7 = FontCollection_init_$Create$;
  _.$_$.b7 = StrutStyle_init_$Create$;
  _.$_$.c7 = TextStyle_init_$Create$;
  _.$_$.d7 = SVGDOM_init_$Create$;
  _.$_$.e7 = SVGPreserveAspectRatio_init_$Create$;
  _.$_$.f7 = Bitmap_init_$Create$;
  _.$_$.g7 = Canvas_init_$Create$;
  _.$_$.h7 = Font_init_$Create$;
  _.$_$.i7 = Paint_init_$Create$;
  _.$_$.j7 = Path_init_$Create$;
  _.$_$.k7 = PathMeasure_init_$Create$;
  _.$_$.l7 = PictureRecorder_init_$Create$;
  _.$_$.m7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.n7 = CharDirection_getInstance;
  _.$_$.o7 = Companion_getInstance_2;
  _.$_$.p7 = Companion_getInstance_4;
  _.$_$.q7 = Companion_getInstance_6;
  _.$_$.r7 = Companion_getInstance_7;
  _.$_$.s7 = Companion_getInstance_8;
  _.$_$.t7 = Companion_getInstance_11;
  _.$_$.u7 = Companion_getInstance_13;
  _.$_$.v7 = Companion_getInstance_14;
  _.$_$.w7 = Companion_getInstance_20;
  _.$_$.x7 = Companion_getInstance_21;
  _.$_$.y7 = Companion_getInstance_23;
  _.$_$.z7 = Companion_getInstance_26;
  _.$_$.a8 = Companion_getInstance_32;
  _.$_$.b8 = Companion_getInstance_33;
  _.$_$.c8 = Companion_getInstance_35;
  _.$_$.d8 = ShadowUtils_getInstance;
  _.$_$.e8 = Companion_getInstance_37;
  _.$_$.f8 = Companion_getInstance_58;
  _.$_$.g8 = DecorationStyle;
  _.$_$.h8 = LineMetrics;
  _.$_$.i8 = ParagraphBuilder;
  _.$_$.j8 = ParagraphStyle;
  _.$_$.k8 = PlaceholderStyle;
  _.$_$.l8 = Shadow;
  _.$_$.m8 = TextBox;
  _.$_$.n8 = TextIndent;
  _.$_$.o8 = TypefaceFontProvider;
  _.$_$.p8 = SVGLength;
  _.$_$.q8 = ColorInfo;
  _.$_$.r8 = CubicResampler;
  _.$_$.s8 = FilterMipmap;
  _.$_$.t8 = GradientStyle;
  _.$_$.u8 = ImageInfo;
  _.$_$.v8 = Matrix33;
  _.$_$.w8 = Matrix44;
  _.$_$.x8 = Point3;
  _.$_$.y8 = Rect;
  _.$_$.z8 = ClipboardManager;
  _.$_$.a9 = SkiaLayer;
  _.$_$.b9 = SkikoView;
  _.$_$.c9 = URIManager;
  _.$_$.d9 = currentNanoTime;
  _.$_$.e9 = get_currentSystemTheme;
  _.$_$.f9 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
