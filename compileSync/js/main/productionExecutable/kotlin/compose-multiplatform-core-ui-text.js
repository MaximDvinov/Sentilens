(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-runtime-saveable.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-util.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    root['compose-multiplatform-core-ui-text'] = factory(typeof this['compose-multiplatform-core-ui-text'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-runtime-saveable'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-util'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var VOID = kotlin_kotlin.$_$.il;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var hashCode = kotlin_kotlin.$_$.xc;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var equals = kotlin_kotlin.$_$.oc;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var emptyList = kotlin_kotlin.$_$.z7;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Comparator = kotlin_kotlin.$_$.aj;
  var compareValues = kotlin_kotlin.$_$.db;
  var sortedWith = kotlin_kotlin.$_$.la;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var CharSequence = kotlin_kotlin.$_$.wi;
  var coerceIn = kotlin_kotlin.$_$.af;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var addAll = kotlin_kotlin.$_$.t6;
  var plus = kotlin_kotlin.$_$.v9;
  var last = kotlin_kotlin.$_$.g9;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var compareTo = kotlin_kotlin.$_$.lc;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.qk;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var numberToInt = kotlin_kotlin.$_$.td;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var Enum = kotlin_kotlin.$_$.dj;
  var arrayListOf = kotlin_kotlin.$_$.v6;
  var List = kotlin_kotlin.$_$.i6;
  var isInterface = kotlin_kotlin.$_$.id;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var ULong = kotlin_kotlin.$_$.yj;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.j1;
  var toString_0 = kotlin_kotlin.$_$.dl;
  var Char = kotlin_kotlin.$_$.xi;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Long = kotlin_kotlin.$_$.jj;
  var toLong = kotlin_kotlin.$_$.ae;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var first = kotlin_kotlin.$_$.j8;
  var Map = kotlin_kotlin.$_$.k6;
  var MutableMap = kotlin_kotlin.$_$.o6;
  var MutableCollection = kotlin_kotlin.$_$.l6;
  var isObject = kotlin_kotlin.$_$.kd;
  var println = kotlin_kotlin.$_$.ac;
  var copyOf = kotlin_kotlin.$_$.w7;
  var copyOf_0 = kotlin_kotlin.$_$.v7;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var ClassCastException = kotlin_kotlin.$_$.yi;
  var NullPointerException = kotlin_kotlin.$_$.mj;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var asList = kotlin_kotlin.$_$.w6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var Exception = kotlin_kotlin.$_$.fj;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var get_indices = kotlin_kotlin.$_$.u8;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lb;
  var get = kotlin_kotlin.$_$.sb;
  var fold = kotlin_kotlin.$_$.rb;
  var minusKey = kotlin_kotlin.$_$.tb;
  var plus_0 = kotlin_kotlin.$_$.vb;
  var Element = kotlin_kotlin.$_$.ub;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var to = kotlin_kotlin.$_$.el;
  var mutableListOf = kotlin_kotlin.$_$.q9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.m5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var createFailure = kotlin_kotlin.$_$.ik;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.i3;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var listOf = kotlin_kotlin.$_$.l9;
  var Comparable = kotlin_kotlin.$_$.zi;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var joinTo = kotlin_kotlin.$_$.y8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var charArray = kotlin_kotlin.$_$.gc;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var toString_1 = kotlin_kotlin.$_$.f3;
  var repeat = kotlin_kotlin.$_$.kh;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.z2;
  var Collection = kotlin_kotlin.$_$.b6;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var toList = kotlin_kotlin.$_$.va;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var until = kotlin_kotlin.$_$.jf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var setOf = kotlin_kotlin.$_$.fa;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.f9;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.d9;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.k5;
  var isLowSurrogate = kotlin_kotlin.$_$.bh;
  var isHighSurrogate = kotlin_kotlin.$_$.ah;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var sequence = kotlin_kotlin.$_$.gg;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a3;
  var SequenceScope = kotlin_kotlin.$_$.qf;
  var numberRangeToNumber = kotlin_kotlin.$_$.qd;
  var getObjectHashCode = kotlin_kotlin.$_$.uc;
  var last_0 = kotlin_kotlin.$_$.i9;
  var isArray = kotlin_kotlin.$_$.ad;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.h8;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var first_0 = kotlin_kotlin.$_$.k8;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.fh;
  var lastOrNull = kotlin_kotlin.$_$.f9;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var coerceAtMost = kotlin_kotlin.$_$.ue;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var getOrNull = kotlin_kotlin.$_$.m8;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var isWhitespace = kotlin_kotlin.$_$.eh;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var listOf_0 = kotlin_kotlin.$_$.k9;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a7;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.o8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var mapOf = kotlin_kotlin.$_$.o9;
  var KProperty0 = kotlin_kotlin.$_$.nf;
  var lazy_0 = kotlin_kotlin.$_$.rk;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c7;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.s2;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var sortWith = kotlin_kotlin.$_$.ia;
  var asReversed = kotlin_kotlin.$_$.x6;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b7;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.h7;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jc;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var firstOrNull_0 = kotlin_kotlin.$_$.g8;
  var coerceIn_0 = kotlin_kotlin.$_$.ze;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableRange, 'MutableRange', classMeta);
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
  setMetadataFor(MultiParagraph, 'MultiParagraph', classMeta);
  setMetadataFor(ParagraphInfo, 'ParagraphInfo', classMeta);
  function get_hasStaleResolvedFonts() {
    return false;
  }
  setMetadataFor(ParagraphIntrinsics, 'ParagraphIntrinsics', interfaceMeta);
  setMetadataFor(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo', classMeta);
  setMetadataFor(ParagraphStyle_0, 'ParagraphStyle', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AnnotationType, 'AnnotationType', classMeta, Enum);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(TextPainter, 'TextPainter', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextRange, 'TextRange', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(TtsAnnotation, 'TtsAnnotation', classMeta);
  setMetadataFor(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', classMeta, TtsAnnotation);
  setMetadataFor(UrlAnnotation, 'UrlAnnotation', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_21().y4w_1;
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(Immutable, 'Immutable', classMeta);
  setMetadataFor(Async, 'Async', classMeta);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  setMetadataFor(PlatformResolveInterceptor, 'PlatformResolveInterceptor', interfaceMeta);
  setMetadataFor(PlatformResolveInterceptor$Companion$Default$1, VOID, classMeta, VOID, [PlatformResolveInterceptor]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, VOID, VOID, [4]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(CommitTextCommand, 'CommitTextCommand', classMeta);
  setMetadataFor(DeleteAllCommand, 'DeleteAllCommand', classMeta);
  setMetadataFor(FinishComposingTextCommand, 'FinishComposingTextCommand', classMeta);
  setMetadataFor(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand', classMeta);
  setMetadataFor(SetSelectionCommand, 'SetSelectionCommand', classMeta);
  setMetadataFor(SetComposingTextCommand, 'SetComposingTextCommand', classMeta);
  setMetadataFor(SetComposingRegionCommand, 'SetComposingRegionCommand', classMeta);
  setMetadataFor(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand', classMeta);
  setMetadataFor(BackspaceCommand, 'BackspaceCommand', classMeta);
  setMetadataFor(MoveCursorCommand, 'MoveCursorCommand', classMeta);
  setMetadataFor(EditProcessor, 'EditProcessor', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(EditingBuffer, 'EditingBuffer', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(PartialGapBuffer, 'PartialGapBuffer', classMeta);
  setMetadataFor(GapBuffer, 'GapBuffer', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ImeAction, 'ImeAction', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ImeOptions, 'ImeOptions', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(KeyboardCapitalization, 'KeyboardCapitalization', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(KeyboardType, 'KeyboardType', classMeta);
  setMetadataFor(OffsetMapping$Companion$Identity$1, VOID, classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(PlatformTextInputPluginRegistryImpl, 'PlatformTextInputPluginRegistryImpl', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextFieldValue, 'TextFieldValue', classMeta);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  function notifyFocusedRect(rect) {
  }
  setMetadataFor(PlatformTextInputService, 'PlatformTextInputService', interfaceMeta);
  setMetadataFor(TextInputSession, 'TextInputSession', classMeta);
  setMetadataFor(sam$androidx_compose_ui_text_input_VisualTransformation$0, 'sam$androidx_compose_ui_text_input_VisualTransformation$0', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(PasswordVisualTransformation, 'PasswordVisualTransformation', classMeta);
  setMetadataFor(TransformedText, 'TransformedText', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(TextDirection, 'TextDirection', classMeta);
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.h3v();
      tmp = new BrushStyle(other.h58_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.s4r(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(NoCache, 'NoCache', classMeta);
  setMetadataFor(JsLocale, 'JsLocale', classMeta);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(ExpireAfterAccessCache, 'ExpireAfterAccessCache', classMeta);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, '<get-codePointsOutsideDirectionalIsolate>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(_get_codePoints_$slambda_43x8dt, '<get-codePoints>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(PlatformParagraphStyle, 'PlatformParagraphStyle', classMeta);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(PlatformSpanStyle, 'PlatformSpanStyle', classMeta);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().c3y_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a4n(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a4n.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.c4n(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.c4n.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  setMetadataFor(Paragraph_1, 'Paragraph', interfaceMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta, VOID, [Paragraph_1]);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(FontLoader, 'FontLoader', classMeta);
  setMetadataFor(FontCache, 'FontCache', classMeta);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta);
  setMetadataFor(LoadedFont, 'LoadedFont', classMeta, PlatformFont);
  setMetadataFor(ComputedStyle, 'ComputedStyle', classMeta);
  setMetadataFor(Op, 'Op', classMeta);
  setMetadataFor(StyleAdd, 'StyleAdd', classMeta, Op);
  setMetadataFor(PutPlaceholder, 'PutPlaceholder', classMeta, Op);
  setMetadataFor(EndPlaceholder, 'EndPlaceholder', classMeta, Op);
  setMetadataFor(Cut, 'Cut', classMeta);
  setMetadataFor(StyleAdd_0, 'StyleAdd', classMeta, Cut);
  setMetadataFor(StyleRemove, 'StyleRemove', classMeta, Cut);
  setMetadataFor(PutPlaceholder_0, 'PutPlaceholder', classMeta, Cut);
  setMetadataFor(EndPlaceholder_0, 'EndPlaceholder', classMeta, Cut);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(TextMotion, 'TextMotion', classMeta);
  //endregion
  function get_EmptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function MutableRange(item, start, end, tag) {
    end = end === VOID ? IntCompanionObject_getInstance().MIN_VALUE : end;
    tag = tag === VOID ? '' : tag;
    this.c4k_1 = item;
    this.d4k_1 = start;
    this.e4k_1 = end;
    this.f4k_1 = tag;
  }
  protoOf(MutableRange).g4k = function (defaultEnd) {
    var end = this.e4k_1 === IntCompanionObject_getInstance().MIN_VALUE ? defaultEnd : this.e4k_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(end === IntCompanionObject_getInstance().MIN_VALUE)) {
      // Inline function 'androidx.compose.ui.text.MutableRange.toRange.<anonymous>' call
      var message = 'Item.end should be set first';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Range(this.c4k_1, this.d4k_1, end, this.f4k_1);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + this.c4k_1 + ', start=' + this.d4k_1 + ', end=' + this.e4k_1 + ', tag=' + this.f4k_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.c4k_1 == null ? 0 : hashCode(this.c4k_1);
    result = imul(result, 31) + this.d4k_1 | 0;
    result = imul(result, 31) + this.e4k_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.f4k_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.c4k_1, tmp0_other_with_cast.c4k_1))
      return false;
    if (!(this.d4k_1 === tmp0_other_with_cast.d4k_1))
      return false;
    if (!(this.e4k_1 === tmp0_other_with_cast.e4k_1))
      return false;
    if (!(this.f4k_1 === tmp0_other_with_cast.f4k_1))
      return false;
    return true;
  };
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.n4k(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.l()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.l()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.o4k_1 = item;
    this.p4k_1 = start;
    this.q4k_1 = end;
    this.r4k_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p4k_1 <= this.q4k_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.s4k_1 = 0;
  }
  protoOf(Range).y4 = function () {
    return this.o4k_1;
  };
  protoOf(Range).z4 = function () {
    return this.p4k_1;
  };
  protoOf(Range).db = function () {
    return this.q4k_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.o4k_1 + ', start=' + this.p4k_1 + ', end=' + this.q4k_1 + ', tag=' + this.r4k_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.o4k_1 == null ? 0 : hashCode(this.o4k_1);
    result = imul(result, 31) + this.p4k_1 | 0;
    result = imul(result, 31) + this.q4k_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.r4k_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.o4k_1, tmp0_other_with_cast.o4k_1))
      return false;
    if (!(this.p4k_1 === tmp0_other_with_cast.p4k_1))
      return false;
    if (!(this.q4k_1 === tmp0_other_with_cast.q4k_1))
      return false;
    if (!(this.r4k_1 === tmp0_other_with_cast.r4k_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.h4k_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i4k_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.j4k_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.k4k_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.l4k_1 = ArrayList_init_$Create$();
    this.m4k_1 = 0;
  }
  protoOf(Builder).b = function (text) {
    if (text instanceof AnnotatedString) {
      this.n4k(text);
    } else {
      this.h4k_1.b(text);
    }
    return this;
  };
  protoOf(Builder).i9 = function (char) {
    this.h4k_1.i9(char);
    return this;
  };
  protoOf(Builder).n4k = function (text) {
    var start = this.h4k_1.qd();
    this.h4k_1.ia(text.t4k_1);
    var tmp0_safe_receiver = text.u4k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.y4k(item.o4k_1, start + item.p4k_1 | 0, start + item.q4k_1 | 0);
        }
         while (inductionVariable <= last);
    }
    var tmp1_safe_receiver = text.v4k_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_safe_receiver.g() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_safe_receiver.m(index_0);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.z4k(item_0.o4k_1, start + item_0.p4k_1 | 0, start + item_0.q4k_1 | 0);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp2_safe_receiver = text.w4k_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp2_safe_receiver.g() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = tmp2_safe_receiver.m(index_1);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.k4k_1.a(new MutableRange(item_1.o4k_1, start + item_1.p4k_1 | 0, start + item_1.q4k_1 | 0, item_1.r4k_1));
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  protoOf(Builder).y4k = function (style, start, end) {
    this.i4k_1.a(new MutableRange(style, start, end));
  };
  protoOf(Builder).z4k = function (style, start, end) {
    this.j4k_1.a(new MutableRange(style, start, end));
  };
  protoOf(Builder).a4l = function () {
    var tmp = this.h4k_1.toString();
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = this.i4k_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var tmp0_plusAssign = item.g4k(this.h4k_1.qd());
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    var tmp_0;
    if (target.l()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_0 = null;
    } else {
      tmp_0 = target;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp2_fastMap = this.j4k_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(tmp2_fastMap.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = tmp2_fastMap.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = tmp2_fastMap.m(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var tmp0_plusAssign_0 = item_0.g4k(this.h4k_1.qd());
        target_0.a(tmp0_plusAssign_0);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_2;
    if (target_0.l()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_2 = null;
    } else {
      tmp_2 = target_0;
    }
    var tmp_3 = tmp_2;
    var tmp$ret$11;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp4_fastMap = this.k4k_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_1 = ArrayList_init_$Create$_0(tmp4_fastMap.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = tmp4_fastMap.g() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = tmp4_fastMap.m(index_1);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var tmp0_plusAssign_1 = item_1.g4k(this.h4k_1.qd());
        target_1.a(tmp0_plusAssign_1);
      }
       while (inductionVariable_1 <= last_1);
    var tmp_4;
    if (target_1.l()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_4 = null;
    } else {
      tmp_4 = target_1;
    }
    tmp$ret$11 = tmp_4;
    return new AnnotatedString(tmp, tmp_1, tmp_3, tmp$ret$11);
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.b4l_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.b4l_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.p4k_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$1 = b.p4k_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.t4k_1 = text;
    this.u4k_1 = spanStylesOrNull;
    this.v4k_1 = paragraphStylesOrNull;
    this.w4k_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.v4k_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.m(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.p4k_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.q4k_1 <= this.t4k_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.p4k_1 + ', ' + item.q4k_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.q4k_1;
        }
         while (inductionVariable <= last);
    }
    this.x4k_1 = 0;
  }
  protoOf(AnnotatedString).c4l = function () {
    var tmp0_elvis_lhs = this.u4k_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).d4l = function () {
    var tmp0_elvis_lhs = this.v4k_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).qd = function () {
    return this.t4k_1.length;
  };
  protoOf(AnnotatedString).rd = function (index) {
    return charSequenceGet(this.t4k_1, index);
  };
  protoOf(AnnotatedString).sd = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.t4k_1.length : false)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.t4k_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.u4k_1, startIndex, endIndex), filterRanges(this.v4k_1, startIndex, endIndex), filterRanges(this.w4k_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).e4l = function (range) {
    return this.sd(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).f4l = function (other) {
    // Inline function 'kotlin.with' call
    var tmp0_with = Builder_init_$Create$(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.plus.<anonymous>' call
    tmp0_with.n4k(other);
    return tmp0_with.a4l();
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.t4k_1 === other.t4k_1))
      return false;
    if (!equals(this.u4k_1, other.u4k_1))
      return false;
    if (!equals(this.v4k_1, other.v4k_1))
      return false;
    if (!equals(this.w4k_1, other.w4k_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.t4k_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.u4k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.v4k_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.w4k_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.t4k_1;
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(nonNullRange.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.m(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.p4k_1, item.q4k_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.m(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = item_0.p4k_1;
        var tmp_0 = Math.max(start, tmp0_maxOf) - start | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = item_0.q4k_1;
        tmp$ret$4 = Math.min(end, tmp1_minOf);
        var tmp0_plusAssign = new Range(item_0.o4k_1, tmp_0, tmp$ret$4 - start | 0, item_0.r4k_1);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_1;
    if (target_0.l()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.u4k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.t4k_1.length : false) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(spanStyles.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.m(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.p4k_1, item.q4k_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.m(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var tmp0_plusAssign = Range_init_$Create$(item_0.o4k_1, coerceIn(item_0.p4k_1, start, end) - start | 0, coerceIn(item_0.q4k_1, start, end) - start | 0);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.t4k_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.t4k_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.v4k_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.m(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.y4();
        var start = item.z4();
        var end = item.db();
        if (!(start === lastOffset)) {
          result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.a(Range_init_$Create$(defaultParagraphStyle.t4l(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.l()) {
      result.a(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function emptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return get_EmptyAnnotatedString();
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.a4m_1.u4l_1;
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).t4k_1) - 1 | 0) : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRange.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).qd() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).t4k_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).qd() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.f4m_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.f4m_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.a4m_1 = intrinsics;
    this.b4m_1 = maxLines;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.a4m_1.y4l_1;
    var inductionVariable = 0;
    var last = infoList.g() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.m(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.j4m_1, Constraints(VOID, tmp, VOID, tmp_0), this.b4m_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.w33();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.m4m() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.a(new ParagraphInfo(paragraph, paragraphInfo.k4m_1, paragraphInfo.l4m_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.n4m() ? true : endLineIndex === this.b4m_1 ? !(index === get_lastIndex(this.a4m_1.y4l_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.e4m_1 = currentHeight;
    this.f4m_1 = currentLineCount;
    this.c4m_1 = didExceedMaxLines;
    this.h4m_1 = paragraphInfoList;
    this.d4m_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.m(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var tmp0_fastMap = item.o4m_1.v4m();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$_0(tmp0_fastMap.g());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastMap.g() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = tmp0_fastMap.m(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_plusAssign = item_0 == null ? null : item.w4m(item_0);
            target_0.a(tmp0_plusAssign);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.g() < this.a4m_1.v4l_1.g()) {
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this.a4m_1.v4l_1.g() - target.g() | 0;
      // Inline function 'kotlin.collections.MutableList' call
      var list_0 = ArrayList_init_$Create$_0(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < tmp0_List)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.a(null);
        }
         while (inductionVariable_2 < tmp0_List);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.g4m_1 = tmp_2;
    this.i4m_1 = 0;
  }
  protoOf(MultiParagraph).x4m = function () {
    var tmp;
    if (this.h4m_1.l()) {
      tmp = 0.0;
    } else {
      tmp = this.h4m_1.m(0).o4m_1.x4m();
    }
    return tmp;
  };
  protoOf(MultiParagraph).y4m = function () {
    var tmp;
    if (this.h4m_1.l()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var tmp0_with = last(this.h4m_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_with.z4m(tmp0_with.o4m_1.y4m());
    }
    return tmp;
  };
  protoOf(MultiParagraph).a4n = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.f3z();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.h4m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.m(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.o4m_1.a4n(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.i3z(0.0, item.o4m_1.w33());
      }
       while (inductionVariable <= last);
    canvas.g3z();
  };
  protoOf(MultiParagraph).b4n = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().c3y_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a4n(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a4n.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).c4n = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).d4n = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.c4n(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.c4n.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).e4n = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).t4k_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).t4k_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.h4m_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.h4m_1.g();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.h4m_1.m(i);
        if (p.p4m_1 >= end)
          break $l$loop_0;
        if (p.p4m_1 === p.q4m_1)
          continue $l$loop_0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        path.u45(p.g4n(p.o4m_1.e4n(p.f4n(start), p.f4n(end))));
      }
       while (inductionVariable < last);
    return path;
  };
  protoOf(MultiParagraph).h4n = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.e4m_1 ? get_lastIndex(this.h4m_1) : findParagraphByY(this.h4m_1, vertical);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.qd() === 0) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.p4m_1 - 1 | 0;
      tmp = Math.max(0, tmp0_max);
    } else {
      tmp = tmp0_with.j4n(tmp0_with.o4m_1.h4n(tmp0_with.i4n(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).k4n = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.e4m_1 ? get_lastIndex(this.h4m_1) : findParagraphByY(this.h4m_1, _Offset___get_y__impl__8bzhra(position));
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.qd() === 0) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.p4m_1 - 1 | 0;
      tmp = Math.max(0, tmp0_max);
    } else {
      tmp = tmp0_with.m4n(tmp0_with.o4m_1.k4n(tmp0_with.l4n(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).n4n = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.h4m_1, offset);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBoundingBox.<anonymous>' call
    return tmp0_with.w4m(tmp0_with.o4m_1.n4n(tmp0_with.f4n(offset)));
  };
  protoOf(MultiParagraph).o4n = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getHorizontalPosition.<anonymous>' call
    return tmp0_with.o4m_1.o4n(tmp0_with.f4n(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).p4n = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    return tmp0_with.o4m_1.p4n(tmp0_with.f4n(offset));
  };
  protoOf(MultiParagraph).q4n = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    return tmp0_with.o4m_1.q4n(tmp0_with.f4n(offset));
  };
  protoOf(MultiParagraph).r4n = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    return tmp0_with.s4n(tmp0_with.o4m_1.r4n(tmp0_with.f4n(offset)));
  };
  protoOf(MultiParagraph).t4n = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getCursorRect.<anonymous>' call
    return tmp0_with.w4m(tmp0_with.o4m_1.t4n(tmp0_with.f4n(offset)));
  };
  protoOf(MultiParagraph).u4n = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).qd()) {
      tmp = get_lastIndex(this.h4m_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.h4m_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    return tmp0_with.j4n(tmp0_with.o4m_1.u4n(tmp0_with.f4n(offset)));
  };
  protoOf(MultiParagraph).v4n = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineLeft.<anonymous>' call
    return tmp0_with.o4m_1.v4n(tmp0_with.w4n(lineIndex));
  };
  protoOf(MultiParagraph).x4n = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineRight.<anonymous>' call
    return tmp0_with.o4m_1.x4n(tmp0_with.w4n(lineIndex));
  };
  protoOf(MultiParagraph).y4n = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    return tmp0_with.z4m(tmp0_with.o4m_1.y4n(tmp0_with.w4n(lineIndex)));
  };
  protoOf(MultiParagraph).z4n = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineBottom.<anonymous>' call
    return tmp0_with.z4m(tmp0_with.o4m_1.z4n(tmp0_with.w4n(lineIndex)));
  };
  protoOf(MultiParagraph).a4o = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineHeight.<anonymous>' call
    return tmp0_with.o4m_1.a4o(tmp0_with.w4n(lineIndex));
  };
  protoOf(MultiParagraph).b4o = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    return tmp0_with.m4n(tmp0_with.o4m_1.b4o(tmp0_with.w4n(lineIndex)));
  };
  protoOf(MultiParagraph).c4o = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4m_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.h4m_1.m(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    return tmp0_with.m4n(tmp0_with.o4m_1.c4o(tmp0_with.w4n(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.o4m_1 = paragraph;
    this.p4m_1 = startIndex;
    this.q4m_1 = endIndex;
    this.r4m_1 = startLineIndex;
    this.s4m_1 = endLineIndex;
    this.t4m_1 = top;
    this.u4m_1 = bottom;
  }
  protoOf(ParagraphInfo).qd = function () {
    return this.q4m_1 - this.p4m_1 | 0;
  };
  protoOf(ParagraphInfo).f4n = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.p4m_1, this.q4m_1) - this.p4m_1 | 0;
  };
  protoOf(ParagraphInfo).m4n = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.p4m_1 | 0;
  };
  protoOf(ParagraphInfo).w4n = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.r4m_1 | 0;
  };
  protoOf(ParagraphInfo).j4n = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.r4m_1 | 0;
  };
  protoOf(ParagraphInfo).z4m = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.t4m_1;
  };
  protoOf(ParagraphInfo).i4n = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.t4m_1;
  };
  protoOf(ParagraphInfo).l4n = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.t4m_1);
  };
  protoOf(ParagraphInfo).w4m = function (_this__u8e3s4) {
    return _this__u8e3s4.y33(Offset(0.0, this.t4m_1));
  };
  protoOf(ParagraphInfo).g4n = function (_this__u8e3s4) {
    _this__u8e3s4.w45(Offset(0.0, this.t4m_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).s4n = function (_this__u8e3s4) {
    return TextRange_0(this.m4n(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.m4n(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.o4m_1 + ', startIndex=' + this.p4m_1 + ', endIndex=' + this.q4m_1 + ', startLineIndex=' + this.r4m_1 + ', endLineIndex=' + this.s4m_1 + ', top=' + this.t4m_1 + ', bottom=' + this.u4m_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.o4m_1);
    result = imul(result, 31) + this.p4m_1 | 0;
    result = imul(result, 31) + this.q4m_1 | 0;
    result = imul(result, 31) + this.r4m_1 | 0;
    result = imul(result, 31) + this.s4m_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u4m_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.o4m_1, tmp0_other_with_cast.o4m_1))
      return false;
    if (!(this.p4m_1 === tmp0_other_with_cast.p4m_1))
      return false;
    if (!(this.q4m_1 === tmp0_other_with_cast.q4m_1))
      return false;
    if (!(this.r4m_1 === tmp0_other_with_cast.r4m_1))
      return false;
    if (!(this.s4m_1 === tmp0_other_with_cast.s4m_1))
      return false;
    if (!equals(this.t4m_1, tmp0_other_with_cast.t4m_1))
      return false;
    if (!equals(this.u4m_1, tmp0_other_with_cast.u4m_1))
      return false;
    return true;
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.g() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.p4m_1 > index ? 1 : midVal.q4m_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.g() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.t4m_1 > y ? 1 : midVal.u4m_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.g() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.r4m_1 > lineIndex ? 1 : midVal.s4m_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp;
    var tmp_0 = style.h4l_1;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      tmp = style;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? style.d4o(VOID, defaultStyle.h4l_1) : tmp1_elvis_lhs;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.y4l_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.l()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.m(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1_anonymous = maxElem;
        tmp$ret$1 = tmp1_anonymous.j4m_1.u3m();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.m(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.j4m_1.u3m();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4m_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u3m();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.y4l_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.l()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.m(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1_anonymous = maxElem;
        tmp$ret$1 = tmp1_anonymous.j4m_1.v3m();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.m(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.j4m_1.v3m();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4m_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v3m();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.u4l_1 = annotatedString;
    this.v4l_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.w4l_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.x4l_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.i4o();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var tmp0_mapEachParagraphStyle = this.u4l_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(tmp0_mapEachParagraphStyle, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(tmp0_mapEachParagraphStyle, item.p4k_1, item.q4k_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.o4k_1, paragraphStyle);
        var tmp0_plusAssign = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.t4k_1, style.j4o(currentParagraphStyle), annotatedString_0.c4l(), getLocalPlaceholders(this.v4l_1, item.p4k_1, item.q4k_1), density, fontFamilyResolver), item.p4k_1, item.q4k_1);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp_3.y4l_1 = target;
    this.z4l_1 = 0;
  }
  protoOf(MultiParagraphIntrinsics).u3m = function () {
    // Inline function 'kotlin.getValue' call
    minIntrinsicWidth$factory();
    return this.w4l_1.s();
  };
  protoOf(MultiParagraphIntrinsics).v3m = function () {
    // Inline function 'kotlin.getValue' call
    maxIntrinsicWidth$factory();
    return this.x4l_1.s();
  };
  protoOf(MultiParagraphIntrinsics).k4o = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = this.y4l_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.m(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.j4m_1.k4o()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.j4m_1 = intrinsics;
    this.k4m_1 = startIndex;
    this.l4m_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.j4m_1 + ', startIndex=' + this.k4m_1 + ', endIndex=' + this.l4m_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.j4m_1);
    result = imul(result, 31) + this.k4m_1 | 0;
    result = imul(result, 31) + this.l4m_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.j4m_1, tmp0_other_with_cast.j4m_1))
      return false;
    if (!(this.k4m_1 === tmp0_other_with_cast.k4m_1))
      return false;
    if (!(this.l4m_1 === tmp0_other_with_cast.l4m_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.p4k_1, item.q4k_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.m(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.p4k_1 ? item_0.q4k_1 <= end : false)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var tmp0_plusAssign = Range_init_$Create$(item_0.o4k_1, item_0.p4k_1 - start | 0, item_0.q4k_1 - start | 0);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.u3m();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.v3m();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().c37_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.g4l_1 = textAlign;
    this.h4l_1 = textDirection;
    this.i4l_1 = lineHeight;
    this.j4l_1 = textIndent;
    this.k4l_1 = platformStyle;
    this.l4l_1 = lineHeightStyle;
    this.m4l_1 = lineBreak;
    this.n4l_1 = hyphens;
    this.o4l_1 = textMotion;
    var tmp = this;
    var tmp0_elvis_lhs = this.g4l_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_38().p4o_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.p4l_1 = tmp_0;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = this.m4l_1;
    var tmp_3;
    var tmp_4 = tmp0_elvis_lhs_0;
    if ((tmp_4 == null ? null : new LineBreak(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_48().r4o_1;
    } else {
      tmp_3 = tmp0_elvis_lhs_0;
    }
    tmp_2.q4l_1 = tmp_3;
    var tmp_5 = this;
    var tmp0_elvis_lhs_1 = this.n4l_1;
    var tmp_6;
    var tmp_7 = tmp0_elvis_lhs_1;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_37().u4o_1;
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    tmp_5.r4l_1 = tmp_6;
    if (!equals(this.i4l_1, Companion_getInstance_1().c37_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.i4l_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.i4l_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    this.s4l_1 = 0;
  }
  protoOf(ParagraphStyle_0).t4l = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.g4l_1, other.h4l_1, other.i4l_1, other.j4l_1, other.k4l_1, other.l4l_1, other.m4l_1, other.n4l_1, other.o4l_1);
  };
  protoOf(ParagraphStyle_0).w4o = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).d4o = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.g4l_1 : textAlign;
    textDirection = textDirection === VOID ? this.h4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.i4l_1 : lineHeight;
    textIndent = textIndent === VOID ? this.j4l_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.k4l_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.l4l_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.m4l_1 : lineBreak;
    hyphens = hyphens === VOID ? this.n4l_1 : hyphens;
    textMotion = textMotion === VOID ? this.o4l_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.w4o(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.w4o;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = new TextUnit(lineHeight);
      var tmp_6 = lineBreak;
      var tmp_7 = tmp_6 == null ? null : new LineBreak(tmp_6);
      var tmp_8 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, tmp_5, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8 == null ? null : new Hyphens(tmp_8), textMotion);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.g4l_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.g4l_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.h4l_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.h4l_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.i4l_1, other.i4l_1))
      return false;
    if (!equals(this.j4l_1, other.j4l_1))
      return false;
    if (!equals(this.k4l_1, other.k4l_1))
      return false;
    if (!equals(this.l4l_1, other.l4l_1))
      return false;
    var tmp_5 = this.m4l_1;
    var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
    var tmp_7 = other.m4l_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new LineBreak(tmp_7)))
      return false;
    var tmp_8 = this.n4l_1;
    var tmp_9 = tmp_8 == null ? null : new Hyphens(tmp_8);
    var tmp_10 = other.n4l_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Hyphens(tmp_10)))
      return false;
    if (!equals(this.o4l_1, other.o4l_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var tmp0_safe_receiver = this.g4l_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = TextAlign__hashCode_impl_s8g35y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.h4l_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.i4l_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.j4l_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.k4l_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.l4l_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.m4l_1;
    var tmp_8;
    var tmp_9 = tmp10_safe_receiver;
    if ((tmp_9 == null ? null : new LineBreak(tmp_9)) == null) {
      tmp_8 = null;
    } else {
      tmp_8 = LineBreak__hashCode_impl_ybksn(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_8;
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_10 = imul(31, result);
    var tmp12_safe_receiver = this.n4l_1;
    var tmp_11;
    var tmp_12 = tmp12_safe_receiver;
    if ((tmp_12 == null ? null : new Hyphens(tmp_12)) == null) {
      tmp_11 = null;
    } else {
      tmp_11 = Hyphens__hashCode_impl_yb7t8v(tmp12_safe_receiver);
    }
    var tmp13_elvis_lhs = tmp_11;
    result = tmp_10 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.o4l_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : hashCode(tmp14_safe_receiver);
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    var tmp = this.g4l_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.h4l_1;
    var tmp_2 = tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.i4l_1) + ', ') + ('textIndent=' + this.j4l_1 + ', ') + ('platformStyle=' + this.k4l_1 + ', ') + ('lineHeightStyle=' + this.l4l_1 + ', ');
    var tmp_3 = this.m4l_1;
    var tmp_4 = tmp_2 + ('lineBreak=' + (tmp_3 == null ? null : new LineBreak(tmp_3)) + ', ');
    var tmp_5 = this.n4l_1;
    return tmp_4 + ('hyphens=' + (tmp_5 == null ? null : new Hyphens(tmp_5)) + ', ') + ('textMotion=' + this.o4l_1) + ')';
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8 = textAlign;
    if (!((tmp_8 == null ? null : new TextAlign(tmp_8)) == null)) {
      var tmp_9 = textAlign;
      var tmp_10 = tmp_9 == null ? null : new TextAlign(tmp_9);
      var tmp_11 = _this__u8e3s4.g4l_1;
      tmp_7 = !equals(tmp_10, tmp_11 == null ? null : new TextAlign(tmp_11));
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      var tmp_12;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_12 = !equals(lineHeight, _this__u8e3s4.i4l_1);
      } else {
        tmp_12 = false;
      }
      tmp_6 = tmp_12;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = !(textIndent == null) ? !equals(textIndent, _this__u8e3s4.j4l_1) : false;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      var tmp_13;
      var tmp_14 = textDirection;
      if (!((tmp_14 == null ? null : new TextDirection(tmp_14)) == null)) {
        var tmp_15 = textDirection;
        var tmp_16 = tmp_15 == null ? null : new TextDirection(tmp_15);
        var tmp_17 = _this__u8e3s4.h4l_1;
        tmp_13 = !equals(tmp_16, tmp_17 == null ? null : new TextDirection(tmp_17));
      } else {
        tmp_13 = false;
      }
      tmp_4 = tmp_13;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.k4l_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(lineHeightStyle == null) ? !equals(lineHeightStyle, _this__u8e3s4.l4l_1) : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var tmp_18;
      var tmp_19 = lineBreak;
      if (!((tmp_19 == null ? null : new LineBreak(tmp_19)) == null)) {
        var tmp_20 = lineBreak;
        var tmp_21 = tmp_20 == null ? null : new LineBreak(tmp_20);
        var tmp_22 = _this__u8e3s4.m4l_1;
        tmp_18 = !equals(tmp_21, tmp_22 == null ? null : new LineBreak(tmp_22));
      } else {
        tmp_18 = false;
      }
      tmp_1 = tmp_18;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_23;
      var tmp_24 = hyphens;
      if (!((tmp_24 == null ? null : new Hyphens(tmp_24)) == null)) {
        var tmp_25 = hyphens;
        var tmp_26 = tmp_25 == null ? null : new Hyphens(tmp_25);
        var tmp_27 = _this__u8e3s4.n4l_1;
        tmp_23 = !equals(tmp_26, tmp_27 == null ? null : new Hyphens(tmp_27));
      } else {
        tmp_23 = false;
      }
      tmp_0 = tmp_23;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(textMotion == null) ? !equals(textMotion, _this__u8e3s4.o4l_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_28;
    if (get_isUnspecified(lineHeight)) {
      tmp_28 = _this__u8e3s4.i4l_1;
    } else {
      tmp_28 = lineHeight;
    }
    var tmp7_lineHeight = tmp_28;
    var tmp8_textIndent = textIndent == null ? _this__u8e3s4.j4l_1 : textIndent;
    var tmp_29;
    var tmp_30 = textAlign;
    if ((tmp_30 == null ? null : new TextAlign(tmp_30)) == null) {
      tmp_29 = _this__u8e3s4.g4l_1;
    } else {
      tmp_29 = textAlign;
    }
    var tmp9_textAlign = tmp_29;
    var tmp_31;
    var tmp_32 = textDirection;
    if ((tmp_32 == null ? null : new TextDirection(tmp_32)) == null) {
      tmp_31 = _this__u8e3s4.h4l_1;
    } else {
      tmp_31 = textDirection;
    }
    var tmp10_textDirection = tmp_31;
    var tmp11_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp12_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.l4l_1 : lineHeightStyle;
    var tmp_33;
    var tmp_34 = lineBreak;
    if ((tmp_34 == null ? null : new LineBreak(tmp_34)) == null) {
      tmp_33 = _this__u8e3s4.m4l_1;
    } else {
      tmp_33 = lineBreak;
    }
    var tmp13_lineBreak = tmp_33;
    var tmp_35;
    var tmp_36 = hyphens;
    if ((tmp_36 == null ? null : new Hyphens(tmp_36)) == null) {
      tmp_35 = _this__u8e3s4.n4l_1;
    } else {
      tmp_35 = hyphens;
    }
    var tmp14_hyphens = tmp_35;
    var tmp15_textMotion = textMotion == null ? _this__u8e3s4.o4l_1 : textMotion;
    return new ParagraphStyle_0(tmp9_textAlign, tmp10_textDirection, tmp7_lineHeight, tmp8_textIndent, tmp11_platformStyle, tmp12_lineHeightStyle, tmp13_lineBreak, tmp14_hyphens, tmp15_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.k4l_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.k4l_1;
    return _this__u8e3s4.k4l_1.y4o(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = resolveTextDirection_0(direction, style.h4l_1);
    var tmp_0 = get_isUnspecified(style.i4l_1) ? get_DefaultLineHeight() : style.i4l_1;
    var tmp0_elvis_lhs = style.j4l_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_43().z4o_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.o4l_1;
    return new ParagraphStyle_0(style.p4l_1, tmp, tmp_0, tmp_1, style.k4l_1, style.l4l_1, style.q4l_1, style.r4l_1, tmp1_elvis_lhs == null ? Companion_getInstance_49().a4p_1 : tmp1_elvis_lhs);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = start.g4l_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = stop.g4l_1;
    var tmp_2 = lerpDiscrete(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1), fraction);
    var tmp_3 = tmp_2 == null ? null : tmp_2.c4p_1;
    var tmp_4 = start.h4l_1;
    var tmp_5 = tmp_4 == null ? null : new TextDirection(tmp_4);
    var tmp_6 = stop.h4l_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new TextDirection(tmp_6), fraction);
    var tmp_8 = tmp_7 == null ? null : tmp_7.d4p_1;
    var tmp_9 = lerpTextUnitInheritable(start.i4l_1, stop.i4l_1, fraction);
    var tmp0_elvis_lhs = start.j4l_1;
    var tmp_10 = tmp0_elvis_lhs == null ? Companion_getInstance_43().z4o_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.j4l_1;
    var tmp_11 = lerp_11(tmp_10, tmp1_elvis_lhs == null ? Companion_getInstance_43().z4o_1 : tmp1_elvis_lhs, fraction);
    var tmp_12 = lerpPlatformStyle(start.k4l_1, stop.k4l_1, fraction);
    var tmp_13 = lerpDiscrete(start.l4l_1, stop.l4l_1, fraction);
    var tmp_14 = start.m4l_1;
    var tmp_15 = tmp_14 == null ? null : new LineBreak(tmp_14);
    var tmp_16 = stop.m4l_1;
    var tmp_17 = lerpDiscrete(tmp_15, tmp_16 == null ? null : new LineBreak(tmp_16), fraction);
    var tmp_18 = tmp_17 == null ? null : tmp_17.e4p_1;
    var tmp_19 = start.n4l_1;
    var tmp_20 = tmp_19 == null ? null : new Hyphens(tmp_19);
    var tmp_21 = stop.n4l_1;
    var tmp_22 = lerpDiscrete(tmp_20, tmp_21 == null ? null : new Hyphens(tmp_21), fraction);
    return new ParagraphStyle_0(tmp_3, tmp_8, tmp_9, tmp_11, tmp_12, tmp_13, tmp_18, tmp_22 == null ? null : tmp_22.f4p_1, lerpDiscrete(start.o4l_1, stop.o4l_1, fraction));
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_46().g4p_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_46().g4p_1 : stop;
    return lerp_13(startNonNull, stopNonNull, fraction);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().c37_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.h4p_1, other.h4p_1))
      return false;
    if (!equals(this.i4p_1, other.i4p_1))
      return false;
    if (!(this.j4p_1 === other.j4p_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.h4p_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.i4p_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.j4p_1) | 0;
    return result;
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.k4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.l4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.m4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.n4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.o4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.p4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.q4p_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance;
  function Companion_getInstance_14() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function get_TextRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>.<anonymous>' call
      tmp = saver.b4j(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_getInstance();
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_String_instance = new AnnotationType('String', 4);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextRangeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.t4k_1), save_0(it.c4l(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.d4l(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.w4k_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.m(1);
      var tmp1_restore = get_AnnotationRangeListSaver();
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (tmp0_restore == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.z4i(tmp0_restore);
        tmp = (tmp_0 == null ? true : isInterface(tmp_0, List)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(2);
      var tmp3_restore = get_AnnotationRangeListSaver();
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_1;
      if (tmp2_restore == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = tmp3_restore.z4i(tmp2_restore);
        tmp_1 = (tmp_2 == null ? true : isInterface(tmp_2, List)) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$5 = tmp_1;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp_3;
    if (tmp0_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_3 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'string') ? tmp0_safe_receiver : THROW_CCE();
    }
    tmp$ret$12 = tmp_3;
    var tmp_4 = ensureNotNull(tmp$ret$12);
    var tmp_5;
    if (spanStylesOrNull == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_6;
      if (spanStylesOrNull.l()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_6 = null;
      } else {
        tmp_6 = spanStylesOrNull;
      }
      tmp_5 = tmp_6;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    if (paragraphStylesOrNull == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_9;
      if (paragraphStylesOrNull.l()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_9 = null;
      } else {
        tmp_9 = paragraphStylesOrNull;
      }
      tmp_8 = tmp_9;
    }
    var tmp_10 = tmp_8;
    var tmp$ret$17;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp5_restore = list.m(3);
      var tmp6_restore = get_AnnotationRangeListSaver();
      if (equals(tmp5_restore, false)) {
        tmp$ret$17 = null;
        break $l$block_1;
      }
      var tmp_11;
      if (tmp5_restore == null) {
        tmp_11 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_12 = tmp6_restore.z4i(tmp5_restore);
        tmp_11 = (tmp_12 == null ? true : isInterface(tmp_12, List)) ? tmp_12 : THROW_CCE();
      }
      tmp$ret$17 = tmp_11;
    }
    return new AnnotatedString(tmp_4, tmp_7, tmp_10, tmp$ret$17);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(it.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp0_plusAssign = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp0_restore = get_AnnotationRangeSaver();
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp;
          if (item == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_0 = tmp0_restore.z4i(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Range) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var range = ensureNotNull(tmp$ret$0);
        target.a(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.o4k_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            tmp = AnnotationType_String_getInstance();
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.h7_1) {
      case 0:
        var tmp_1 = it.o4k_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.o4k_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.o4k_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.o4k_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        tmp_0 = save(it.o4k_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.p4k_1), save(it.q4k_1), save(it.r4k_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = (tmp0_safe_receiver == null ? true : tmp0_safe_receiver instanceof AnnotationType) ? tmp0_safe_receiver : THROW_CCE();
    }
    tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_0 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'number') ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    var tmp$ret$11;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.m(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_2 = (tmp0_safe_receiver_2 == null ? true : typeof tmp0_safe_receiver_2 === 'string') ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp_3;
    switch (marker.h7_1) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp4_restore = list.m(1);
          var tmp5_restore = get_ParagraphStyleSaver();
          if (equals(tmp4_restore, false)) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_4;
          if (tmp4_restore == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_5 = tmp5_restore.z4i(tmp4_restore);
            tmp_4 = (tmp_5 == null ? true : tmp_5 instanceof ParagraphStyle_0) ? tmp_5 : THROW_CCE();
          }
          tmp$ret$12 = tmp_4;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp6_restore = list.m(1);
          var tmp7_restore = get_SpanStyleSaver();
          if (equals(tmp6_restore, false)) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_6;
          if (tmp6_restore == null) {
            tmp_6 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_7 = tmp7_restore.z4i(tmp6_restore);
            tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
          }
          tmp$ret$17 = tmp_6;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp8_restore = list.m(1);
          var tmp9_restore = get_VerbatimTtsAnnotationSaver();
          if (equals(tmp8_restore, false)) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_8;
          if (tmp8_restore == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_9 = tmp9_restore.z4i(tmp8_restore);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof VerbatimTtsAnnotation) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$22 = tmp_8;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp10_restore = list.m(1);
          var tmp11_restore = get_UrlAnnotationSaver();
          if (equals(tmp10_restore, false)) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_10;
          if (tmp10_restore == null) {
            tmp_10 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_11 = tmp11_restore.z4i(tmp10_restore);
            tmp_10 = (tmp_11 == null ? true : tmp_11 instanceof UrlAnnotation) ? tmp_11 : THROW_CCE();
          }
          tmp$ret$27 = tmp_10;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp$ret$34;
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.m(1);
        var tmp_12;
        if (tmp0_safe_receiver_3 == null) {
          tmp_12 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
          tmp_12 = (tmp0_safe_receiver_3 == null ? true : typeof tmp0_safe_receiver_3 === 'string') ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        tmp$ret$34 = tmp_12;
        var item_3 = ensureNotNull(tmp$ret$34);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.s4p_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = (it == null ? true : typeof it === 'string') ? it : THROW_CCE();
    }
    tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.u4p_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = (it == null ? true : typeof it === 'string') ? it : THROW_CCE();
    }
    tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = it.g4l_1;
    var tmp_0 = save(tmp == null ? null : new TextAlign(tmp));
    var tmp_1 = it.h4l_1;
    return arrayListOf([tmp_0, save(tmp_1 == null ? null : new TextDirection(tmp_1)), save_0(new TextUnit(it.i4l_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.j4l_1, get_Saver_0(Companion_getInstance_43()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver == null ? true : tmp0_safe_receiver instanceof TextAlign) {
        var tmp_1 = tmp0_safe_receiver;
        tmp_0 = tmp_1 == null ? null : tmp_1.c4p_1;
      } else {
        tmp_0 = THROW_CCE();
      }
      tmp = tmp_0;
    }
    var tmp_2 = tmp;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_3;
    if (tmp0_safe_receiver_0 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_4;
      if (tmp0_safe_receiver_0 == null ? true : tmp0_safe_receiver_0 instanceof TextDirection) {
        var tmp_5 = tmp0_safe_receiver_0;
        tmp_4 = tmp_5 == null ? null : tmp_5.d4p_1;
      } else {
        tmp_4 = THROW_CCE();
      }
      tmp_3 = tmp_4;
    }
    var tmp_6 = tmp_3;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(2);
      var tmp3_restore = get_Saver(Companion_getInstance_1());
      if (equals(tmp2_restore, false)) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp_7;
      if (tmp2_restore == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_8 = tmp3_restore.z4i(tmp2_restore);
        var tmp_9 = tmp_8 == null ? null : tmp_8.e37_1;
        var tmp_10;
        var tmp_11;
        var tmp_12 = tmp_9;
        if ((tmp_12 == null ? null : new TextUnit(tmp_12)) == null) {
          tmp_11 = true;
        } else {
          var tmp_13 = tmp_9;
          tmp_11 = (tmp_13 == null ? null : new TextUnit(tmp_13))instanceof TextUnit;
        }
        if (tmp_11) {
          tmp_10 = tmp_9;
        } else {
          tmp_10 = THROW_CCE();
        }
        tmp_7 = tmp_10;
      }
      tmp$ret$6 = tmp_7;
    }
    var tmp_14 = tmp$ret$6;
    var tmp_15 = ensureNotNull(tmp_14 == null ? null : new TextUnit(tmp_14)).e37_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp4_restore = list.m(3);
      var tmp5_restore = get_Saver_0(Companion_getInstance_43());
      if (equals(tmp4_restore, false)) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp_16;
      if (tmp4_restore == null) {
        tmp_16 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_17 = tmp5_restore.z4i(tmp4_restore);
        tmp_16 = (tmp_17 == null ? true : tmp_17 instanceof TextIndent_0) ? tmp_17 : THROW_CCE();
      }
      tmp$ret$11 = tmp_16;
    }
    return new ParagraphStyle_0(tmp_2, tmp_6, tmp_15, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.e3y()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.x4p_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.y4p_1, get_Saver_2(Companion_getInstance_24()), $this$Saver);
    var tmp_2 = it.z4p_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.a4q_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.c4q_1);
    var tmp_8 = save_0(new TextUnit(it.d4q_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.e4q_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_36()), $this$Saver), save_0(it.f4q_1, get_Saver_4(Companion_getInstance_42()), $this$Saver), save_0(it.g4q_1, get_Saver_5(Companion_getInstance_35()), $this$Saver), save_0(new Color(it.h4q_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.i4q_1, get_Saver_6(Companion_getInstance_39()), $this$Saver), save_0(it.j4q_1, get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.m(0);
      var tmp1_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (tmp0_restore == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.z4i(tmp0_restore);
        var tmp_1 = tmp_0 == null ? null : tmp_0.y3w_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).y3w_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(1);
      var tmp3_restore = get_Saver(Companion_getInstance_1());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (tmp2_restore == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.z4i(tmp2_restore);
        var tmp_10 = tmp_9 == null ? null : tmp_9.e37_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).e37_1;
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp4_restore = list.m(2);
      var tmp5_restore = get_Saver_2(Companion_getInstance_24());
      if (equals(tmp4_restore, false)) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_17;
      if (tmp4_restore == null) {
        tmp_17 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_18 = tmp5_restore.z4i(tmp4_restore);
        tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof FontWeight) ? tmp_18 : THROW_CCE();
      }
      tmp$ret$10 = tmp_17;
    }
    var tmp_19 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(3);
    var tmp_20;
    if (tmp0_safe_receiver == null) {
      tmp_20 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_21;
      if (tmp0_safe_receiver == null ? true : tmp0_safe_receiver instanceof FontStyle) {
        var tmp_22 = tmp0_safe_receiver;
        tmp_21 = tmp_22 == null ? null : tmp_22.n4q_1;
      } else {
        tmp_21 = THROW_CCE();
      }
      tmp_20 = tmp_21;
    }
    var tmp_23 = tmp_20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(4);
    var tmp_24;
    if (tmp0_safe_receiver_0 == null) {
      tmp_24 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_25;
      if (tmp0_safe_receiver_0 == null ? true : tmp0_safe_receiver_0 instanceof FontSynthesis) {
        var tmp_26 = tmp0_safe_receiver_0;
        tmp_25 = tmp_26 == null ? null : tmp_26.o4q_1;
      } else {
        tmp_25 = THROW_CCE();
      }
      tmp_24 = tmp_25;
    }
    var tmp_27 = tmp_24;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(6);
    var tmp_28;
    if (tmp0_safe_receiver_1 == null) {
      tmp_28 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_28 = (tmp0_safe_receiver_1 == null ? true : typeof tmp0_safe_receiver_1 === 'string') ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_29 = tmp_28;
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp9_restore = list.m(7);
      var tmp10_restore = get_Saver(Companion_getInstance_1());
      if (equals(tmp9_restore, false)) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp_30;
      if (tmp9_restore == null) {
        tmp_30 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_31 = tmp10_restore.z4i(tmp9_restore);
        var tmp_32 = tmp_31 == null ? null : tmp_31.e37_1;
        var tmp_33;
        var tmp_34;
        var tmp_35 = tmp_32;
        if ((tmp_35 == null ? null : new TextUnit(tmp_35)) == null) {
          tmp_34 = true;
        } else {
          var tmp_36 = tmp_32;
          tmp_34 = (tmp_36 == null ? null : new TextUnit(tmp_36))instanceof TextUnit;
        }
        if (tmp_34) {
          tmp_33 = tmp_32;
        } else {
          tmp_33 = THROW_CCE();
        }
        tmp_30 = tmp_33;
      }
      tmp$ret$24 = tmp_30;
    }
    var tmp_37 = tmp$ret$24;
    var tmp_38 = ensureNotNull(tmp_37 == null ? null : new TextUnit(tmp_37)).e37_1;
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp11_restore = list.m(8);
      var tmp12_restore = get_Saver_3(Companion_getInstance_36());
      if (equals(tmp11_restore, false)) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp_39;
      if (tmp11_restore == null) {
        tmp_39 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_40 = tmp12_restore.z4i(tmp11_restore);
        var tmp_41 = tmp_40 == null ? null : tmp_40.p4q_1;
        var tmp_42;
        var tmp_43;
        var tmp_44 = tmp_41;
        if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
          tmp_43 = true;
        } else {
          var tmp_45 = tmp_41;
          tmp_43 = (tmp_45 == null ? null : new BaselineShift(tmp_45))instanceof BaselineShift;
        }
        if (tmp_43) {
          tmp_42 = tmp_41;
        } else {
          tmp_42 = THROW_CCE();
        }
        tmp_39 = tmp_42;
      }
      tmp$ret$29 = tmp_39;
    }
    var tmp_46 = tmp$ret$29;
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp13_restore = list.m(9);
      var tmp14_restore = get_Saver_4(Companion_getInstance_42());
      if (equals(tmp13_restore, false)) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_47;
      if (tmp13_restore == null) {
        tmp_47 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_48 = tmp14_restore.z4i(tmp13_restore);
        tmp_47 = (tmp_48 == null ? true : tmp_48 instanceof TextGeometricTransform) ? tmp_48 : THROW_CCE();
      }
      tmp$ret$34 = tmp_47;
    }
    var tmp_49 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp15_restore = list.m(10);
      var tmp16_restore = get_Saver_5(Companion_getInstance_35());
      if (equals(tmp15_restore, false)) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp_50;
      if (tmp15_restore == null) {
        tmp_50 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_51 = tmp16_restore.z4i(tmp15_restore);
        tmp_50 = (tmp_51 == null ? true : tmp_51 instanceof LocaleList) ? tmp_51 : THROW_CCE();
      }
      tmp$ret$39 = tmp_50;
    }
    var tmp_52 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp17_restore = list.m(11);
      var tmp18_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp17_restore, false)) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp_53;
      if (tmp17_restore == null) {
        tmp_53 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_54 = tmp18_restore.z4i(tmp17_restore);
        var tmp_55 = tmp_54 == null ? null : tmp_54.y3w_1;
        var tmp_56;
        var tmp_57;
        var tmp_58 = tmp_55;
        if ((tmp_58 == null ? null : new Color(tmp_58)) == null) {
          tmp_57 = true;
        } else {
          var tmp_59 = tmp_55;
          tmp_57 = (tmp_59 == null ? null : new Color(tmp_59))instanceof Color;
        }
        if (tmp_57) {
          tmp_56 = tmp_55;
        } else {
          tmp_56 = THROW_CCE();
        }
        tmp_53 = tmp_56;
      }
      tmp$ret$44 = tmp_53;
    }
    var tmp_60 = tmp$ret$44;
    var tmp_61 = ensureNotNull(tmp_60 == null ? null : new Color(tmp_60)).y3w_1;
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp19_restore = list.m(12);
      var tmp20_restore = get_Saver_6(Companion_getInstance_39());
      if (equals(tmp19_restore, false)) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp_62;
      if (tmp19_restore == null) {
        tmp_62 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_63 = tmp20_restore.z4i(tmp19_restore);
        tmp_62 = (tmp_63 == null ? true : tmp_63 instanceof TextDecoration) ? tmp_63 : THROW_CCE();
      }
      tmp$ret$49 = tmp_62;
    }
    var tmp_64 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp21_restore = list.m(13);
      var tmp22_restore = get_Saver_7(Companion_getInstance_2());
      if (equals(tmp21_restore, false)) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp_65;
      if (tmp21_restore == null) {
        tmp_65 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_66 = tmp22_restore.z4i(tmp21_restore);
        tmp_65 = (tmp_66 == null ? true : tmp_66 instanceof Shadow) ? tmp_66 : THROW_CCE();
      }
      tmp$ret$54 = tmp_65;
    }
    return SpanStyle_init_$Create$(tmp_7, tmp_16, tmp_19, tmp_23, tmp_27, VOID, tmp_29, tmp_38, tmp_46, tmp_49, tmp_52, tmp_61, tmp_64, tmp$ret$54);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.q4q_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.s4q_1, it.t4q_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    return new TextGeometricTransform(list.m(0), list.m(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.v4q_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.w4q_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.m(0);
      var tmp1_restore = get_Saver(Companion_getInstance_1());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (tmp0_restore == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.z4i(tmp0_restore);
        var tmp_1 = tmp_0 == null ? null : tmp_0.e37_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new TextUnit(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new TextUnit(tmp_5))instanceof TextUnit;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6)).e37_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(1);
      var tmp3_restore = get_Saver(Companion_getInstance_1());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (tmp2_restore == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.z4i(tmp2_restore);
        var tmp_10 = tmp_9 == null ? null : tmp_9.e37_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).e37_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.y4q_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.p4q_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.a4r_1)), save(_TextRange___get_end__impl__gcdxpp(it.a4r_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
    }
    tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.j46_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.k46_1), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.l46_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.m(0);
      var tmp1_restore = get_Saver_1(Companion_getInstance());
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (tmp0_restore == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.z4i(tmp0_restore);
        var tmp_1 = tmp_0 == null ? null : tmp_0.y3w_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6)).y3w_1;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(1);
      var tmp3_restore = get_Saver_8(Companion_getInstance_3());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (tmp2_restore == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = tmp3_restore.z4i(tmp2_restore);
        var tmp_10 = tmp_9 == null ? null : tmp_9.n33_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new Offset_0(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new Offset_0(tmp_14))instanceof Offset_0;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15)).n33_1;
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_17 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
    }
    tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7, tmp_16, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return new ULong(_Color___get_value__impl__1pls5m(it.y3w_1));
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Color(_Color___init__impl__r6cqi2(it instanceof ULong ? it.uc_1 : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.e37_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.e37_1)))]);
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
    }
    tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_2;
      if (tmp0_safe_receiver_0 == null ? true : tmp0_safe_receiver_0 instanceof TextUnitType) {
        var tmp_3 = tmp0_safe_receiver_0;
        tmp_2 = tmp_3 == null ? null : tmp_3.d37_1;
      } else {
        tmp_2 = THROW_CCE();
      }
      tmp_1 = tmp_2;
    }
    var tmp_4 = tmp_1;
    return new TextUnit(TextUnit_0(tmp_0, ensureNotNull(tmp_4 == null ? null : new TextUnitType(tmp_4)).d37_1));
  }
  function OffsetSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().m33_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.n33_1)), save(_Offset___get_y__impl__8bzhra(it.n33_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().m33_1;
    } else {
      var list = isInterface(it, List) ? it : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'number') ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.m(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_2 = (tmp0_safe_receiver_0 == null ? true : typeof tmp0_safe_receiver_0 === 'number') ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      tmp$ret$5 = tmp_2;
      tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
    }
    var tmp_3 = tmp;
    return tmp_3 == null ? null : new Offset_0(tmp_3);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = it.b4r_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(tmp0_fastMap.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp0_plusAssign = save_0(item, get_Saver_9(Companion_getInstance_34()), $this$Saver);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp0_restore = get_Saver_9(Companion_getInstance_34());
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp;
          if (item == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_0 = tmp0_restore.z4i(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Locale) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_plusAssign = ensureNotNull(tmp$ret$0);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.g4r();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver(tmp_4, ParagraphStyleSaver$lambda_0);
      var tmp_5 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver(tmp_5, SpanStyleSaver$lambda_0);
      var tmp_6 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver(tmp_6, TextDecorationSaver$lambda_0);
      var tmp_7 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver(tmp_7, TextGeometricTransformSaver$lambda_0);
      var tmp_8 = TextIndentSaver$lambda;
      TextIndentSaver = Saver(tmp_8, TextIndentSaver$lambda_0);
      var tmp_9 = FontWeightSaver$lambda;
      FontWeightSaver = Saver(tmp_9, FontWeightSaver$lambda_0);
      var tmp_10 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver(tmp_10, BaselineShiftSaver$lambda_0);
      var tmp_11 = TextRangeSaver$lambda;
      TextRangeSaver = Saver(tmp_11, TextRangeSaver$lambda_0);
      var tmp_12 = ShadowSaver$lambda;
      ShadowSaver = Saver(tmp_12, ShadowSaver$lambda_0);
      var tmp_13 = ColorSaver$lambda;
      ColorSaver = Saver(tmp_13, ColorSaver$lambda_0);
      var tmp_14 = TextUnitSaver$lambda;
      TextUnitSaver = Saver(tmp_14, TextUnitSaver$lambda_0);
      var tmp_15 = OffsetSaver$lambda;
      OffsetSaver = Saver(tmp_15, OffsetSaver$lambda_0);
      var tmp_16 = LocaleListSaver$lambda;
      LocaleListSaver = Saver(tmp_16, LocaleListSaver$lambda_0);
      var tmp_17 = LocaleSaver$lambda;
      LocaleSaver = Saver(tmp_17, LocaleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().c3y_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().c37_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().c37_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_41().h4r(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().c37_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().c37_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_41().i4r(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().c37_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().c37_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.w4p_1 = textForegroundStyle;
    this.x4p_1 = fontSize;
    this.y4p_1 = fontWeight;
    this.z4p_1 = fontStyle;
    this.a4q_1 = fontSynthesis;
    this.b4q_1 = fontFamily;
    this.c4q_1 = fontFeatureSettings;
    this.d4q_1 = letterSpacing;
    this.e4q_1 = baselineShift;
    this.f4q_1 = textGeometricTransform;
    this.g4q_1 = localeList;
    this.h4q_1 = background;
    this.i4q_1 = textDecoration;
    this.j4q_1 = shadow;
    this.k4q_1 = platformStyle;
    this.l4q_1 = drawStyle;
    this.m4q_1 = 0;
  }
  protoOf(SpanStyle).e3y = function () {
    return this.w4p_1.e3y();
  };
  protoOf(SpanStyle).j4r = function () {
    return this.w4p_1.j4r();
  };
  protoOf(SpanStyle).h3v = function () {
    return this.w4p_1.h3v();
  };
  protoOf(SpanStyle).k4r = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.w4p_1.e3y(), other.w4p_1.j4r(), other.w4p_1.h3v(), other.x4p_1, other.y4p_1, other.z4p_1, other.a4q_1, other.b4q_1, other.c4q_1, other.d4q_1, other.e4q_1, other.f4q_1, other.g4q_1, other.h4q_1, other.i4q_1, other.j4q_1, other.k4q_1, other.l4q_1);
  };
  protoOf(SpanStyle).l4r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.e3y())) {
      tmp = this.w4p_1;
    } else {
      tmp = Companion_getInstance_41().h4r(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).m4r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.e3y() : color;
    fontSize = fontSize === VOID ? this.x4p_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.y4p_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.z4p_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.a4q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.b4q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.c4q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.d4q_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.e4q_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.f4q_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.g4q_1 : localeList;
    background = background === VOID ? this.h4q_1 : background;
    textDecoration = textDecoration === VOID ? this.i4q_1 : textDecoration;
    shadow = shadow === VOID ? this.j4q_1 : shadow;
    platformStyle = platformStyle === VOID ? this.k4q_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.l4q_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.l4r(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.l4r;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_8 == null ? null : new BaselineShift(tmp_8), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.o4r(other) ? this.n4r(other) : false;
  };
  protoOf(SpanStyle).o4r = function (other) {
    if (this === other)
      return true;
    if (!equals(this.x4p_1, other.x4p_1))
      return false;
    if (!equals(this.y4p_1, other.y4p_1))
      return false;
    var tmp = this.z4p_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.z4p_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.a4q_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.a4q_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.b4q_1, other.b4q_1))
      return false;
    if (!(this.c4q_1 == other.c4q_1))
      return false;
    if (!equals(this.d4q_1, other.d4q_1))
      return false;
    var tmp_5 = this.e4q_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.e4q_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.f4q_1, other.f4q_1))
      return false;
    if (!equals(this.g4q_1, other.g4q_1))
      return false;
    if (!equals(this.h4q_1, other.h4q_1))
      return false;
    if (!equals(this.k4q_1, other.k4q_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).n4r = function (other) {
    if (!equals(this.w4p_1, other.w4p_1))
      return false;
    if (!equals(this.i4q_1, other.i4q_1))
      return false;
    if (!equals(this.j4q_1, other.j4q_1))
      return false;
    if (!equals(this.l4q_1, other.l4q_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.e3y());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.j4r();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.h3v()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.x4p_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.y4p_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.z4p_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.a4q_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.b4q_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.c4q_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.d4q_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.e4q_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.f4q_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.g4q_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.h4q_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.i4q_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.j4q_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.k4q_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.l4q_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.e3y()) + ', ') + ('brush=' + this.j4r() + ', ') + ('alpha=' + this.h3v() + ', ') + ('fontSize=' + new TextUnit(this.x4p_1) + ', ') + ('fontWeight=' + this.y4p_1 + ', ');
    var tmp_0 = this.z4p_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.a4q_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.b4q_1 + ', ') + ('fontFeatureSettings=' + this.c4q_1 + ', ') + ('letterSpacing=' + new TextUnit(this.d4q_1) + ', ');
    var tmp_4 = this.e4q_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.f4q_1 + ', ') + ('localeList=' + this.g4q_1 + ', ') + ('background=' + new Color(this.h4q_1) + ', ') + ('textDecoration=' + this.i4q_1 + ', ') + ('shadow=' + this.j4q_1 + ', ') + ('platformStyle=' + this.k4q_1 + ', ') + ('drawStyle=' + this.l4q_1) + ')';
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.x4p_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.w4p_1.e3y());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.z4p_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !(fontWeight == null) ? !equals(fontWeight, _this__u8e3s4.y4p_1) : false;
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = !(fontFamily == null) ? !(fontFamily === _this__u8e3s4.b4q_1) : false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.d4q_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = !(textDecoration == null) ? !equals(textDecoration, _this__u8e3s4.i4q_1) : false;
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.w4p_1.j4r());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = !(brush == null) ? !(alpha === _this__u8e3s4.w4p_1.h3v()) : false;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.a4q_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = !(fontFeatureSettings == null) ? !(fontFeatureSettings == _this__u8e3s4.c4q_1) : false;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.e4q_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textGeometricTransform == null) ? !equals(textGeometricTransform, _this__u8e3s4.f4q_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(localeList == null) ? !equals(localeList, _this__u8e3s4.g4q_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
        tmp_35 = !equals(background, _this__u8e3s4.h4q_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(shadow == null) ? !equals(shadow, _this__u8e3s4.j4q_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.k4q_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(drawStyle == null) ? !equals(drawStyle, _this__u8e3s4.l4q_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_getInstance_41().i4r(brush, alpha);
    } else {
      tmp_36 = Companion_getInstance_41().h4r(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.w4p_1.p4r(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.b4q_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.x4p_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.y4p_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.z4p_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.a4q_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.c4q_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.d4q_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.e4q_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.f4q_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.g4q_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.h4q_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.i4q_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.j4q_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.l4q_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.k4q_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.k4q_1;
    return _this__u8e3s4.k4q_1.r4r(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.w4p_1.s4r(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.x4p_1) ? get_DefaultFontSize() : style.x4p_1;
    var tmp0_elvis_lhs = style.y4p_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_24().f4s_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.z4p_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_22().m4s_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.a4q_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_23().p4s_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.b4q_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_18().s4s_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.c4q_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.d4q_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.d4q_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.e4q_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_36().z4s_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.f4q_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_42().a4t_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.g4q_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_35().e1q() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = style.h4q_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      tmp_17 = tmp0_takeOrElse;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.i4q_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_39().b4t_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.j4q_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().i46_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.l4q_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.k4q_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.w4p_1, stop.w4p_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.b4q_1, stop.b4q_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.x4p_1, stop.x4p_1, fraction);
    var tmp0_elvis_lhs = start.y4p_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_24().f4s_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.y4p_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_24().f4s_1 : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.z4p_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.z4p_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.n4q_1;
    var tmp_4 = start.a4q_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.a4q_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.o4q_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.c4q_1, stop.c4q_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.d4q_1, stop.d4q_1, fraction);
    var tmp2_elvis_lhs = start.e4q_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.e4q_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.f4q_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_42().a4t_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.f4q_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_42().a4t_1 : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.g4q_1, stop.g4q_1, fraction);
    var tmp19_background = lerp(start.h4q_1, stop.h4q_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.i4q_1, stop.i4q_1, fraction);
    var tmp6_elvis_lhs = start.j4q_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.j4q_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.k4q_1, stop.k4q_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.l4q_1, stop.l4q_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function lerpDiscrete(a, b, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    return fraction < 0.5 ? a : b;
  }
  function lerpTextUnitInheritable(a, b, t) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (get_isUnspecified(a) ? true : get_isUnspecified(b))
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).e37_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_47().e4t_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_47().e4t_1 : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_getInstance_41().h4r(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().b3y_1;
      DefaultColor = Companion_getInstance().q3x_1;
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.m(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.i9(element.n8_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.f4t_1 = layoutInput;
    this.g4t_1 = multiParagraph;
    this.h4t_1 = size;
    this.i4t_1 = this.g4t_1.x4m();
    this.j4t_1 = this.g4t_1.y4m();
    this.k4t_1 = this.g4t_1.g4m_1;
    this.l4t_1 = 8;
  }
  protoOf(TextLayoutResult).m4t = function () {
    return this.g4t_1.c4m_1 ? true : _IntSize___get_height__impl__prv63b(this.h4t_1) < this.g4t_1.e4m_1;
  };
  protoOf(TextLayoutResult).n4t = function () {
    return _IntSize___get_width__impl__d9yl4o(this.h4t_1) < this.g4t_1.d4m_1;
  };
  protoOf(TextLayoutResult).o4t = function () {
    return this.n4t() ? true : this.m4t();
  };
  protoOf(TextLayoutResult).m4m = function () {
    return this.g4t_1.f4m_1;
  };
  protoOf(TextLayoutResult).b4o = function (lineIndex) {
    return this.g4t_1.b4o(lineIndex);
  };
  protoOf(TextLayoutResult).c4o = function (lineIndex, visibleEnd) {
    return this.g4t_1.c4o(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).p4t = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.c4o(lineIndex, visibleEnd) : $super.c4o.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).y4n = function (lineIndex) {
    return this.g4t_1.y4n(lineIndex);
  };
  protoOf(TextLayoutResult).z4n = function (lineIndex) {
    return this.g4t_1.z4n(lineIndex);
  };
  protoOf(TextLayoutResult).v4n = function (lineIndex) {
    return this.g4t_1.v4n(lineIndex);
  };
  protoOf(TextLayoutResult).x4n = function (lineIndex) {
    return this.g4t_1.x4n(lineIndex);
  };
  protoOf(TextLayoutResult).u4n = function (offset) {
    return this.g4t_1.u4n(offset);
  };
  protoOf(TextLayoutResult).h4n = function (vertical) {
    return this.g4t_1.h4n(vertical);
  };
  protoOf(TextLayoutResult).o4n = function (offset, usePrimaryDirection) {
    return this.g4t_1.o4n(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).p4n = function (offset) {
    return this.g4t_1.p4n(offset);
  };
  protoOf(TextLayoutResult).q4n = function (offset) {
    return this.g4t_1.q4n(offset);
  };
  protoOf(TextLayoutResult).k4n = function (position) {
    return this.g4t_1.k4n(position);
  };
  protoOf(TextLayoutResult).n4n = function (offset) {
    return this.g4t_1.n4n(offset);
  };
  protoOf(TextLayoutResult).r4n = function (offset) {
    return this.g4t_1.r4n(offset);
  };
  protoOf(TextLayoutResult).t4n = function (offset) {
    return this.g4t_1.t4n(offset);
  };
  protoOf(TextLayoutResult).e4n = function (start, end) {
    return this.g4t_1.e4n(start, end);
  };
  protoOf(TextLayoutResult).q4t = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.g4t_1, size);
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.f4t_1.equals(other.f4t_1))
      return false;
    if (!equals(this.g4t_1, other.g4t_1))
      return false;
    if (!equals(this.h4t_1, other.h4t_1))
      return false;
    if (!(this.i4t_1 === other.i4t_1))
      return false;
    if (!(this.j4t_1 === other.j4t_1))
      return false;
    if (!equals(this.k4t_1, other.k4t_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.f4t_1.hashCode();
    result = imul(31, result) + hashCode(this.g4t_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.h4t_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.i4t_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.j4t_1) | 0;
    result = imul(31, result) + hashCode(this.k4t_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.f4t_1 + ', ') + ('multiParagraph=' + this.g4t_1 + ', ') + ('size=' + new IntSize(this.h4t_1) + ', ') + ('firstBaseline=' + this.i4t_1 + ', ') + ('lastBaseline=' + this.j4t_1 + ', ') + ('placeholderRects=' + this.k4t_1) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.r4t_1 = text;
    this.s4t_1 = style;
    this.t4t_1 = placeholders;
    this.u4t_1 = maxLines;
    this.v4t_1 = softWrap;
    this.w4t_1 = overflow;
    this.x4t_1 = density;
    this.y4t_1 = layoutDirection;
    this.z4t_1 = fontFamilyResolver;
    this.a4u_1 = constraints;
    this.b4u_1 = resourceLoader;
    this.c4u_1 = 8;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.r4t_1.equals(other.r4t_1))
      return false;
    if (!this.s4t_1.equals(other.s4t_1))
      return false;
    if (!equals(this.t4t_1, other.t4t_1))
      return false;
    if (!(this.u4t_1 === other.u4t_1))
      return false;
    if (!(this.v4t_1 === other.v4t_1))
      return false;
    if (!(this.w4t_1 === other.w4t_1))
      return false;
    if (!equals(this.x4t_1, other.x4t_1))
      return false;
    if (!this.y4t_1.equals(other.y4t_1))
      return false;
    if (!equals(this.z4t_1, other.z4t_1))
      return false;
    if (!equals(this.a4u_1, other.a4u_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.r4t_1.hashCode();
    result = imul(31, result) + this.s4t_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.t4t_1) | 0;
    result = imul(31, result) + this.u4t_1 | 0;
    result = imul(31, result) + (this.v4t_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.w4t_1) | 0;
    result = imul(31, result) + hashCode(this.x4t_1) | 0;
    result = imul(31, result) + this.y4t_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.z4t_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.a4u_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.r4t_1 + ', ') + ('style=' + this.s4t_1 + ', ') + ('placeholders=' + this.t4t_1 + ', ') + ('maxLines=' + this.u4t_1 + ', ') + ('softWrap=' + this.v4t_1 + ', ') + ('overflow=' + new TextOverflow(this.w4t_1) + ', ') + ('density=' + this.x4t_1 + ', ') + ('layoutDirection=' + this.y4t_1 + ', ') + ('fontFamilyResolver=' + this.z4t_1 + ', ') + ('constraints=' + new Constraints_0(this.a4u_1)) + ')';
  };
  var DefaultCacheSize;
  function TextPainter() {
    TextPainter_instance = this;
    this.d4u_1 = 0;
  }
  protoOf(TextPainter).e4u = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.o4t() ? !(textLayoutResult.f4t_1.w4t_1 === Companion_getInstance_44().h4u_1) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.h4t_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.h4t_1);
      var bounds = Rect(Companion_getInstance_3().k33_1, Size(width, height));
      canvas.f3z();
      canvas.n3z(bounds);
    }
    var style = textLayoutResult.f4t_1.s4t_1.e4o_1;
    var tmp0_elvis_lhs = style.i4q_1;
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_39().b4t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.j4q_1;
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().i46_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.l4q_1;
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.j4r();
      if (!(brush == null)) {
        var tmp;
        if (!(style.w4p_1 === Unspecified_getInstance())) {
          tmp = style.w4p_1.h3v();
        } else {
          tmp = 1.0;
        }
        var alpha = tmp;
        textLayoutResult.g4t_1.d4n(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_0;
        if (!(style.w4p_1 === Unspecified_getInstance())) {
          tmp_0 = style.w4p_1.e3y();
        } else {
          tmp_0 = Companion_getInstance().q3x_1;
        }
        var color = tmp_0;
        textLayoutResult.g4t_1.b4n(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.g3z();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).z9(32).f1();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).vb(new Long(-1, 0)).f1();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_collapsed__impl__cilesp($this) {
    return _TextRange___get_start__impl__ww4t90($this) === _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_reversed__impl__emhnbm($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_length__impl__7qes3a($this) {
    return _TextRange___get_max__impl__owm8m($this) - _TextRange___get_min__impl__uu95c4($this) | 0;
  }
  function TextRange__intersects_impl_mhtn49($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) < _TextRange___get_max__impl__owm8m(other) ? _TextRange___get_min__impl__uu95c4(other) < _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) <= _TextRange___get_min__impl__uu95c4(other) ? _TextRange___get_max__impl__owm8m(other) <= _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2_0($this, offset) {
    var containsLower = _TextRange___get_min__impl__uu95c4($this);
    return offset < _TextRange___get_max__impl__owm8m($this) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.i4u_1 = TextRange_1(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_15() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.a4r_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_15();
    this.a4r_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.a4r_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.a4r_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.a4r_1, other);
  };
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(end >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message_0 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return toLong(start).q7(32).sk(toLong(end).vb(new Long(-1, 0)));
  }
  function coerceIn_1(_this__u8e3s4, minimumValue, maximumValue) {
    var newStart = coerceIn(_TextRange___get_start__impl__ww4t90(_this__u8e3s4), minimumValue, maximumValue);
    var newEnd = coerceIn(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4), minimumValue, maximumValue);
    if (!(newStart === _TextRange___get_start__impl__ww4t90(_this__u8e3s4)) ? true : !(newEnd === _TextRange___get_end__impl__gcdxpp(_this__u8e3s4))) {
      return TextRange_0(newStart, newEnd);
    }
    return _this__u8e3s4;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.k4q_1, paragraphStyle.k4l_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().c3y_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().c37_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().c37_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().c37_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.j4u_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.k4u_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.m4u_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_1;
  function Companion_getInstance_16() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_16();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.e4o_1 = spanStyle;
    this.f4o_1 = paragraphStyle;
    this.g4o_1 = platformStyle;
    this.h4o_1 = 0;
  }
  protoOf(TextStyle).n4u = function () {
    return this.e4o_1;
  };
  protoOf(TextStyle).i4o = function () {
    return this.f4o_1;
  };
  protoOf(TextStyle).o4u = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_16().m4u_1))
      return this;
    return TextStyle_init_$Create$_0(this.n4u().k4r(other.n4u()), this.i4o().t4l(other.i4o()));
  };
  protoOf(TextStyle).p4u = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    FloatCompanionObject_getInstance();
    var mergedSpanStyle = fastMerge_0(this.e4o_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.j4u_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.f4o_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.k4u_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.e4o_1 === mergedSpanStyle ? this.f4o_1 === mergedParagraphStyle : false)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).q4u = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().c3y_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().c37_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().c37_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().c37_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.p4u(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.p4u;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      var tmp_9 = tmp_8 == null ? null : new BaselineShift(tmp_8);
      var tmp_10 = new Color(background);
      var tmp_11 = textAlign;
      var tmp_12 = tmp_11 == null ? null : new TextAlign(tmp_11);
      var tmp_13 = textDirection;
      var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
      var tmp_15 = new TextUnit(lineHeight);
      var tmp_16 = lineBreak;
      var tmp_17 = tmp_16 == null ? null : new LineBreak(tmp_16);
      var tmp_18 = hyphens;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_9, textGeometricTransform, localeList, tmp_10, textDecoration, shadow, drawStyle, tmp_12, tmp_14, tmp_15, textIndent, lineHeightStyle, tmp_17, tmp_18 == null ? null : new Hyphens(tmp_18), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).j4o = function (other) {
    return TextStyle_init_$Create$_0(this.n4u(), this.i4o().t4l(other));
  };
  protoOf(TextStyle).r4u = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.e4o_1.e3y())) {
      tmp = this.e4o_1.w4p_1;
    } else {
      tmp = Companion_getInstance_41().h4r(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.j4u_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.k4u_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).s4u = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.e4o_1.e3y() : color;
    fontSize = fontSize === VOID ? this.e4o_1.x4p_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.e4o_1.y4p_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.e4o_1.z4p_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.e4o_1.a4q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.e4o_1.b4q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.e4o_1.c4q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.e4o_1.d4q_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.e4o_1.e4q_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.e4o_1.f4q_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.e4o_1.g4q_1 : localeList;
    background = background === VOID ? this.e4o_1.h4q_1 : background;
    textDecoration = textDecoration === VOID ? this.e4o_1.i4q_1 : textDecoration;
    shadow = shadow === VOID ? this.e4o_1.j4q_1 : shadow;
    drawStyle = drawStyle === VOID ? this.e4o_1.l4q_1 : drawStyle;
    textAlign = textAlign === VOID ? this.f4o_1.g4l_1 : textAlign;
    textDirection = textDirection === VOID ? this.f4o_1.h4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.f4o_1.i4l_1 : lineHeight;
    textIndent = textIndent === VOID ? this.f4o_1.j4l_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.g4o_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.f4o_1.l4l_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.f4o_1.m4l_1 : lineBreak;
    hyphens = hyphens === VOID ? this.f4o_1.n4l_1 : hyphens;
    textMotion = textMotion === VOID ? this.f4o_1.o4l_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.r4u(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.r4u;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      var tmp_9 = tmp_8 == null ? null : new BaselineShift(tmp_8);
      var tmp_10 = new Color(background);
      var tmp_11 = textAlign;
      var tmp_12 = tmp_11 == null ? null : new TextAlign(tmp_11);
      var tmp_13 = textDirection;
      var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
      var tmp_15 = new TextUnit(lineHeight);
      var tmp_16 = lineBreak;
      var tmp_17 = tmp_16 == null ? null : new LineBreak(tmp_16);
      var tmp_18 = hyphens;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_9, textGeometricTransform, localeList, tmp_10, textDecoration, shadow, drawStyle, tmp_12, tmp_14, tmp_15, textIndent, platformStyle, lineHeightStyle, tmp_17, tmp_18 == null ? null : new Hyphens(tmp_18), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).t4u = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.j4u_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.k4u_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).u4u = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.e4o_1.h3v() : alpha;
    fontSize = fontSize === VOID ? this.e4o_1.x4p_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.e4o_1.y4p_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.e4o_1.z4p_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.e4o_1.a4q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.e4o_1.b4q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.e4o_1.c4q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.e4o_1.d4q_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.e4o_1.e4q_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.e4o_1.f4q_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.e4o_1.g4q_1 : localeList;
    background = background === VOID ? this.e4o_1.h4q_1 : background;
    textDecoration = textDecoration === VOID ? this.e4o_1.i4q_1 : textDecoration;
    shadow = shadow === VOID ? this.e4o_1.j4q_1 : shadow;
    drawStyle = drawStyle === VOID ? this.e4o_1.l4q_1 : drawStyle;
    textAlign = textAlign === VOID ? this.f4o_1.g4l_1 : textAlign;
    textDirection = textDirection === VOID ? this.f4o_1.h4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.f4o_1.i4l_1 : lineHeight;
    textIndent = textIndent === VOID ? this.f4o_1.j4l_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.g4o_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.f4o_1.l4l_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.f4o_1.m4l_1 : lineBreak;
    hyphens = hyphens === VOID ? this.f4o_1.n4l_1 : hyphens;
    textMotion = textMotion === VOID ? this.f4o_1.o4l_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.t4u(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.t4u;
      var tmp_1 = new TextUnit(fontSize);
      var tmp_2 = fontStyle;
      var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
      var tmp_4 = fontSynthesis;
      var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
      var tmp_6 = new TextUnit(letterSpacing);
      var tmp_7 = baselineShift;
      var tmp_8 = tmp_7 == null ? null : new BaselineShift(tmp_7);
      var tmp_9 = new Color(background);
      var tmp_10 = textAlign;
      var tmp_11 = tmp_10 == null ? null : new TextAlign(tmp_10);
      var tmp_12 = textDirection;
      var tmp_13 = tmp_12 == null ? null : new TextDirection(tmp_12);
      var tmp_14 = new TextUnit(lineHeight);
      var tmp_15 = lineBreak;
      var tmp_16 = tmp_15 == null ? null : new LineBreak(tmp_15);
      var tmp_17 = hyphens;
      tmp = tmp_0.call(this, brush, alpha, tmp_1, fontWeight, tmp_3, tmp_5, fontFamily, fontFeatureSettings, tmp_6, tmp_8, textGeometricTransform, localeList, tmp_9, textDecoration, shadow, drawStyle, tmp_11, tmp_13, tmp_14, textIndent, platformStyle, lineHeightStyle, tmp_16, tmp_17 == null ? null : new Hyphens(tmp_17), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).j4r = function () {
    return this.e4o_1.j4r();
  };
  protoOf(TextStyle).e3y = function () {
    return this.e4o_1.e3y();
  };
  protoOf(TextStyle).h3v = function () {
    return this.e4o_1.h3v();
  };
  protoOf(TextStyle).v4u = function () {
    return this.e4o_1.x4p_1;
  };
  protoOf(TextStyle).w4u = function () {
    return this.e4o_1.y4p_1;
  };
  protoOf(TextStyle).x4u = function () {
    return this.e4o_1.z4p_1;
  };
  protoOf(TextStyle).y4u = function () {
    return this.e4o_1.a4q_1;
  };
  protoOf(TextStyle).z4u = function () {
    return this.e4o_1.b4q_1;
  };
  protoOf(TextStyle).a4v = function () {
    return this.e4o_1.c4q_1;
  };
  protoOf(TextStyle).b4v = function () {
    return this.e4o_1.d4q_1;
  };
  protoOf(TextStyle).c4v = function () {
    return this.e4o_1.e4q_1;
  };
  protoOf(TextStyle).d4v = function () {
    return this.e4o_1.f4q_1;
  };
  protoOf(TextStyle).e4v = function () {
    return this.e4o_1.g4q_1;
  };
  protoOf(TextStyle).f4v = function () {
    return this.e4o_1.h4q_1;
  };
  protoOf(TextStyle).g4v = function () {
    return this.e4o_1.i4q_1;
  };
  protoOf(TextStyle).h4v = function () {
    return this.e4o_1.j4q_1;
  };
  protoOf(TextStyle).i4v = function () {
    return this.e4o_1.l4q_1;
  };
  protoOf(TextStyle).j4v = function () {
    return this.f4o_1.g4l_1;
  };
  protoOf(TextStyle).k4v = function () {
    return this.f4o_1.h4l_1;
  };
  protoOf(TextStyle).l4v = function () {
    return this.f4o_1.i4l_1;
  };
  protoOf(TextStyle).m4v = function () {
    return this.f4o_1.j4l_1;
  };
  protoOf(TextStyle).n4v = function () {
    return this.f4o_1.l4l_1;
  };
  protoOf(TextStyle).o4v = function () {
    return this.f4o_1.n4l_1;
  };
  protoOf(TextStyle).p4v = function () {
    return this.f4o_1.m4l_1;
  };
  protoOf(TextStyle).q4v = function () {
    return this.f4o_1.o4l_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.e4o_1.equals(other.e4o_1))
      return false;
    if (!this.f4o_1.equals(other.f4o_1))
      return false;
    if (!equals(this.g4o_1, other.g4o_1))
      return false;
    return true;
  };
  protoOf(TextStyle).r4v = function (other) {
    return this === other ? true : this.f4o_1.equals(other.f4o_1) ? this.e4o_1.o4r(other.e4o_1) : false;
  };
  protoOf(TextStyle).s4v = function (other) {
    return this === other ? true : this.e4o_1.n4r(other.e4o_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.e4o_1.hashCode();
    result = imul(31, result) + this.f4o_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.g4o_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.e3y()) + ', ') + ('brush=' + this.j4r() + ', ') + ('alpha=' + this.h3v() + ', ') + ('fontSize=' + new TextUnit(this.v4u()) + ', ') + ('fontWeight=' + this.w4u() + ', ');
    var tmp_0 = this.x4u();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.y4u();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.z4u() + ', ') + ('fontFeatureSettings=' + this.a4v() + ', ') + ('letterSpacing=' + new TextUnit(this.b4v()) + ', ');
    var tmp_4 = this.c4v();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.d4v() + ', ') + ('localeList=' + this.e4v() + ', ') + ('background=' + new Color(this.f4v()) + ', ') + ('textDecoration=' + this.g4v() + ', ') + ('shadow=' + this.h4v() + ', ') + ('drawStyle=' + this.i4v() + ', ');
    var tmp_6 = this.j4v();
    var tmp_7 = tmp_5 + ('textAlign=' + (tmp_6 == null ? null : new TextAlign(tmp_6)) + ', ');
    var tmp_8 = this.k4v();
    var tmp_9 = tmp_7 + ('textDirection=' + (tmp_8 == null ? null : new TextDirection(tmp_8)) + ', ') + ('lineHeight=' + new TextUnit(this.l4v()) + ', ') + ('textIndent=' + this.m4v() + ', ') + ('platformStyle=' + this.g4o_1 + ', ') + ('lineHeightStyle=' + this.n4v() + ', ');
    var tmp_10 = this.p4v();
    var tmp_11 = tmp_9 + ('lineBreak=' + (tmp_10 == null ? null : new LineBreak(tmp_10)) + ', ');
    var tmp_12 = this.o4v();
    return tmp_11 + ('hyphens=' + (tmp_12 == null ? null : new Hyphens(tmp_12)) + ', ') + ('textMotion=' + this.q4v()) + ')';
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.e4o_1), resolveParagraphStyleDefaults(style.f4o_1, direction), style.g4o_1);
  }
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.n4u(), stop.n4u(), fraction), lerp_4(start.i4o(), stop.i4o(), fraction));
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    var tmp_0 = textDirection;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_40().v4v_1))) {
      var tmp_1;
      switch (layoutDirection.h7_1) {
        case 0:
          tmp_1 = Companion_getInstance_40().w4v_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_40().x4v_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = textDirection;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp_3;
        switch (layoutDirection.h7_1) {
          case 0:
            tmp_3 = Companion_getInstance_40().t4v_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_40().u4v_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        tmp = textDirection;
      }
    }
    return tmp;
  }
  function TtsAnnotation() {
    this.y4v_1 = 0;
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.s4p_1 = verbatim;
    this.t4p_1 = 0;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.s4p_1 === other.s4p_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.s4p_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.s4p_1 + ')';
  };
  function UrlAnnotation(url) {
    this.u4p_1 = url;
    this.v4p_1 = 0;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.u4p_1 === other.u4p_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.u4p_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.u4p_1 + ')';
  };
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.d4w_1 = maxSize;
    $this.a4w_1 = HashMap_init_$Create$(0, 0.75);
    $this.b4w_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.j4w(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).g = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return this.c4w_1;
  };
  protoOf(LruCache).z2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.a4w_1.z2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.b4w_1.y3(key);
      this.b4w_1.a(key);
      this.h4w_1 = this.h4w_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.i4w_1;
      this.i4w_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.k4w(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f4w_1 = this.f4w_1 + 1 | 0;
    var previousValue = this.a4w_1.a5(key, createdValue);
    this.b4w_1.y3(key);
    this.b4w_1.a(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.a4w_1.a5(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      this.c4w_1 = this.g() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    if (!(mapValue == null)) {
      this.m4w(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.l4w(this.d4w_1);
      return createdValue;
    }
  };
  protoOf(LruCache).a5 = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.e4w_1 = this.e4w_1 + 1 | 0;
    this.c4w_1 = this.g() + safeSizeOf(this, key, value) | 0;
    previous = this.a4w_1.a5(key, value);
    if (!(previous == null)) {
      this.c4w_1 = this.g() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.b4w_1.n(key)) {
      this.b4w_1.y3(key);
    }
    this.b4w_1.a(key);
    if (!(previous == null)) {
      this.m4w(false, key, ensureNotNull(previous), value);
    }
    this.l4w(this.d4w_1);
    return previous;
  };
  protoOf(LruCache).l4w = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      this.z4v_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      if ((this.g() < 0 ? true : this.a4w_1.l() ? !(this.g() === 0) : false) ? true : !(this.a4w_1.l() === this.b4w_1.l())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.g() > maxSize ? !this.a4w_1.l() : false) {
        key = first(this.b4w_1);
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = this.a4w_1;
        var tmp1_get = key;
        var tmp0_elvis_lhs = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).z2(tmp1_get);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        // Inline function 'kotlin.collections.remove' call
        var tmp2_remove = this.a4w_1;
        var tmp3_remove = key;
        (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).ye(tmp3_remove);
        // Inline function 'kotlin.collections.remove' call
        var tmp4_remove = this.b4w_1;
        var tmp5_remove = key;
        (isInterface(tmp4_remove, MutableCollection) ? tmp4_remove : THROW_CCE()).y3(tmp5_remove);
        this.c4w_1 = this.g() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.g4w_1 = this.g4w_1 + 1 | 0;
        tmp = Unit_getInstance();
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.m4w(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).ye = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    previous = this.a4w_1.ye(key);
    this.b4w_1.y3(key);
    var tmp;
    if (!(previous == null)) {
      this.c4w_1 = this.g() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    if (!(previous == null)) {
      this.m4w(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).m4w = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).k4w = function (key) {
    return null;
  };
  protoOf(LruCache).j4w = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.z4v_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var accesses = this.h4w_1 + this.i4w_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.h4w_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.d4w_1 + ',hits=' + this.h4w_1 + ',misses=' + this.i4w_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.z4v_1 = createSynchronizedObject();
    this.c4w_1 = 0;
    this.d4w_1 = 0;
    this.e4w_1 = 0;
    this.f4w_1 = 0;
    this.g4w_1 = 0;
    this.h4w_1 = 0;
    this.i4w_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.n4w_1 = get_EMPTY_INTS();
      $this.o4w_1 = get_EMPTY_OBJECTS();
    } else {
      $this.n4w_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = capacity << 1;
      tmp.o4w_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    $this.p4w_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).q4w = function (key, hash) {
    var N = this.p4w_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.n4w_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.o4w_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.n4w_1[end] === hash : false) {
      if (equals(key, this.o4w_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.n4w_1[i] === hash : false) {
      if (equals(key, this.o4w_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).r4w = function () {
    var N = this.p4w_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.n4w_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.o4w_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.n4w_1[end] === 0 : false) {
      if (null == this.o4w_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.n4w_1[i] === 0 : false) {
      if (null == this.o4w_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).t2 = function (key) {
    return this.s4w(key) >= 0;
  };
  protoOf(SimpleArrayMap).s4w = function (key) {
    return key == null ? this.r4w() : this.q4w(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).z2 = function (key) {
    var index = this.s4w(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.o4w_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).t4w = function (index) {
    var tmp = this.o4w_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).u4w = function (index) {
    var tmp = this.o4w_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).l = function () {
    return this.p4w_1 <= 0;
  };
  protoOf(SimpleArrayMap).a5 = function (key, value) {
    var osize = this.p4w_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.r4w();
    } else {
      hash = hashCode(key);
      index = this.q4w(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.o4w_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.o4w_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.n4w_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.n4w_1.length + ' to ' + n);
      }
      this.n4w_1 = copyOf(this.n4w_1, n);
      this.o4w_1 = copyOf_0(this.o4w_1, n << 1);
      if (!(osize === this.p4w_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.n4w_1;
      var tmp1_copyInto = this.n4w_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.o4w_1;
      var tmp5_copyInto = this.o4w_1;
      var tmp6_copyInto = (index + 1 | 0) << 1;
      var tmp7_copyInto = index << 1;
      var tmp8_copyInto = this.p4w_1 << 1;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, tmp8_copyInto);
    }
    if (!(osize === this.p4w_1) ? true : index >= this.n4w_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.n4w_1[index] = hash;
    this.o4w_1[index << 1] = key;
    this.o4w_1[(index << 1) + 1 | 0] = value;
    this.p4w_1 = this.p4w_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.p4w_1 === map.p4w_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.p4w_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.t4w(i);
            var mine = this.u4w(i);
            var theirs = map.z2(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.t2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this.p4w_1 === map_0.g())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.p4w_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.t4w(i_0);
              var mine_0 = this.u4w(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, Map) ? map_0 : THROW_CCE()).z2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, Map) ? map_0 : THROW_CCE()).t2(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.n4w_1;
    var array = this.o4w_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.p4w_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this.p4w_1, 28));
    buffer.i9(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.p4w_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.ia(', ');
        }
        var key = this.t4w(i);
        if (!(key === this)) {
          buffer.ha(key);
        } else {
          buffer.ia('(this Map)');
        }
        buffer.i9(_Char___init__impl__6a9atx(61));
        var value = this.u4w(i);
        if (!(value === this)) {
          buffer.ha(value);
        } else {
          buffer.ia('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.i9(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.p4w_1 = 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.v4w_1 = new Long(15000, 0);
  }
  var Companion_instance_2;
  function Companion_getInstance_17() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.s4s_1 = new DefaultFontFamily();
    this.t4s_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.u4s_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.v4s_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.w4s_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_3;
  function Companion_getInstance_18() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_18();
    this.b4x_1 = canLoadSynchronously;
    this.c4x_1 = 0;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.f4x_1 = 0;
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.j4x_1 = name;
    this.k4x_1 = fontFamilyName;
    this.l4x_1 = 0;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.k4x_1;
  };
  function FontListFontFamily(fonts) {
    FileBasedFontFamily.call(this);
    this.p4x_1 = fonts;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!fonts.l()) {
      // Inline function 'androidx.compose.ui.text.font.FontListFontFamily.<anonymous>' call
      var message = 'At least one font should be passed to FontFamily';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.q4x_1 = ArrayList_init_$Create$_1(fonts);
    this.r4x_1 = 0;
  }
  protoOf(FontListFontFamily).g = function () {
    return this.p4x_1.g();
  };
  protoOf(FontListFontFamily).s4x = function (element) {
    return this.p4x_1.n(element);
  };
  protoOf(FontListFontFamily).n = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return false;
    return this.s4x((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).t4x = function (elements) {
    return this.p4x_1.o1(elements);
  };
  protoOf(FontListFontFamily).o1 = function (elements) {
    return this.t4x(elements);
  };
  protoOf(FontListFontFamily).m = function (index) {
    return this.p4x_1.m(index);
  };
  protoOf(FontListFontFamily).u4x = function (element) {
    return this.p4x_1.o(element);
  };
  protoOf(FontListFontFamily).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.u4x((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).l = function () {
    return this.p4x_1.l();
  };
  protoOf(FontListFontFamily).d = function () {
    return this.p4x_1.d();
  };
  protoOf(FontListFontFamily).u1 = function (index) {
    return this.p4x_1.u1(index);
  };
  protoOf(FontListFontFamily).v1 = function (fromIndex, toIndex) {
    return this.p4x_1.v1(fromIndex, toIndex);
  };
  protoOf(FontListFontFamily).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontListFontFamily))
      return false;
    if (!equals(this.q4x_1, other.q4x_1))
      return false;
    return true;
  };
  protoOf(FontListFontFamily).hashCode = function () {
    return hashCode(this.q4x_1);
  };
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + this.q4x_1 + ')';
  };
  function LoadedFontFamily() {
  }
  function FontFamily_0(fonts) {
    return new FontListFontFamily(asList(fonts));
  }
  function FileBasedFontFamily() {
    FontFamily.call(this, false);
    this.x4x_1 = 0;
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this$0.y4x_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp;
      if (finalResult.a4y()) {
        this$0.z4x_1.a5($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.z4x_1.ye($typefaceRequest);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.y4x_1 = createSynchronizedObject();
    this.z4x_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).b4y = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.y4x_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.z4x_1.z2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.a4y()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.z4x_1.ye(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$_0('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.y4x_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp_3;
    if (this.z4x_1.z2(typefaceRequest) == null ? currentTypefaceResult.a4y() : false) {
      this.z4x_1.a5(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.c4y_1 = fontFamily;
    this.d4y_1 = fontWeight;
    this.e4y_1 = fontStyle;
    this.f4y_1 = fontSynthesis;
    this.g4y_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).h4y = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).i4y = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.c4y_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.d4y_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.e4y_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.f4y_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.g4y_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.h4y(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.h4y.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.c4y_1 + ', fontWeight=' + this.d4y_1 + ', fontStyle=' + new FontStyle(this.e4y_1) + ', fontSynthesis=' + new FontSynthesis(this.f4y_1) + ', resourceLoaderCacheKey=' + toString_0(this.g4y_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.c4y_1 == null ? 0 : hashCode(this.c4y_1);
    result = imul(result, 31) + this.d4y_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.e4y_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.f4y_1) | 0;
    result = imul(result, 31) + (this.g4y_1 == null ? 0 : hashCode(this.g4y_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.c4y_1, tmp0_other_with_cast.c4y_1))
      return false;
    if (!this.d4y_1.equals(tmp0_other_with_cast.d4y_1))
      return false;
    if (!(this.e4y_1 === tmp0_other_with_cast.e4y_1))
      return false;
    if (!(this.f4y_1 === tmp0_other_with_cast.f4y_1))
      return false;
    if (!equals(this.g4y_1, tmp0_other_with_cast.g4y_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.j4y_1 = value;
    this.k4y_1 = cacheable;
    this.l4y_1 = 0;
  }
  protoOf(Immutable).s = function () {
    return this.j4y_1;
  };
  protoOf(Immutable).a4y = function () {
    return this.k4y_1;
  };
  function Async(current) {
    this.m4y_1 = current;
    this.n4y_1 = 0;
  }
  protoOf(Async).s = function () {
    return this.m4y_1.s();
  };
  protoOf(Async).a4y = function () {
    return this.m4y_1.u4y_1;
  };
  function resolve($this, typefaceRequest) {
    var result = $this.x4y_1.b4y(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.i4y(null)).s();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.y4y_1.d4z($typefaceRequest, this$0.v4y_1, onAsyncCompletion, this$0.a4z_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.z4y_1.d4z($typefaceRequest, this$0.v4y_1, onAsyncCompletion, this$0.a4z_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_19().e4z_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.v4y_1 = platformFontLoader;
    this.w4y_1 = platformResolveInterceptor;
    this.x4y_1 = typefaceRequestCache;
    this.y4y_1 = fontListFontFamilyTypefaceAdapter;
    this.z4y_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.a4z_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).f4z = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.w4y_1.g4z(fontFamily), this.w4y_1.h4z(fontWeight), this.w4y_1.i4z(fontStyle), this.w4y_1.j4z(fontSynthesis), this.v4y_1.k4z()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    tmp.e4z_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.l4z_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.l4z_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.l4z_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.l4z_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.l4z_1, other);
  };
  function Key(font, loaderKey) {
    this.m4z_1 = font;
    this.n4z_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.m4z_1 + ', loaderKey=' + toString_0(this.n4z_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.m4z_1);
    result = imul(result, 31) + (this.n4z_1 == null ? 0 : hashCode(this.n4z_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.m4z_1, tmp0_other_with_cast.m4z_1))
      return false;
    if (!equals(this.n4z_1, tmp0_other_with_cast.n4z_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w4z_1 = _this__u8e3s4;
    this.x4z_1 = font;
    this.y4z_1 = platformFontLoader;
    this.z4z_1 = forever;
    this.a50_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.b50_1 = new Key(this.x4z_1, this.y4z_1.k4z());
            this.w4z_1.f50_1;
            var tmp0_elvis_lhs = this.w4z_1.d50_1.z2(this.b50_1);
            var priorResult = tmp0_elvis_lhs == null ? this.w4z_1.e50_1.z2(this.b50_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.l4z_1);
            }

            this.dl_1 = 1;
            suspendResult = this.a50_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also = suspendResult;
            this.w4z_1.f50_1;
            if (tmp1_also == null) {
              this.w4z_1.e50_1.a5(this.b50_1, new AsyncTypefaceResult(this.w4z_1.c50_1));
            } else if (this.z4z_1) {
              this.w4z_1.e50_1.a5(this.b50_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            } else {
              this.w4z_1.d50_1.a5(this.b50_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            }

            return tmp1_also;
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
  function AsyncTypefaceCache() {
    this.c50_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.d50_1 = LruCache_init_$Create$(16);
    this.e50_1 = SimpleArrayMap_init_$Create$();
    this.f50_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).g50 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.k4z());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.f50_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.e50_1.a5(key, new AsyncTypefaceResult(this.c50_1));
    } else if (forever) {
      tmp = this.e50_1.a5(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.d50_1.a5(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).h50 = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.g50(font, platformFontLoader, result, forever);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.g50.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).i50 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.k4z());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.f50_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.d50_1.z2(key);
    return tmp0_elvis_lhs == null ? this.e50_1.z2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).j50 = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    value$factory();
    return $this.t4y_1.f1d(_set____db54di);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation) {
    this.s50_1 = this$0;
    this.t50_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).u50 = function ($completion) {
    var tmp = this.v50($completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AsyncFontListLoader$load$slambda).w50 = function ($completion) {
    return this.u50($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.s50_1.x50(this.t50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(AsyncFontListLoader$load$slambda).v50 = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.s50_1, this.t50_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $item, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation);
    var l = function ($completion) {
      return i.u50($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.g51_1 = this$0;
    this.h51_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).j51 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.u1e($this$withTimeoutOrNull, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).yl = function (p1, $completion) {
    return this.j51((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.g51_1.s4y_1.k51(this.h51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).u1e = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.g51_1, this.h51_1, completion);
    i.i51_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.j51($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t51_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 12;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 11;
            var tmp_0 = this;
            tmp_0.w51_1 = this.t51_1.o4y_1;
            this.x51_1 = get_indices(this.w51_1).d();
            this.dl_1 = 3;
            continue $sm;
          case 3:
            if (!this.x51_1.e()) {
              this.dl_1 = 9;
              continue $sm;
            }

            this.y51_1 = this.x51_1.f();
            this.z51_1 = this.w51_1.m(this.y51_1);
            if (this.z51_1.x4w() === Companion_getInstance_21().a4x_1) {
              this.dl_1 = 4;
              suspendResult = this.t51_1.q4y_1.j50(this.z51_1, this.t51_1.s4y_1, false, AsyncFontListLoader$load$slambda_0(this.t51_1, this.z51_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 7;
              continue $sm;
            }

          case 4:
            this.a52_1 = suspendResult;
            if (!(this.a52_1 == null)) {
              _set_value__lx0xdg(this.t51_1, synthesizeTypeface(this.t51_1.p4y_1.f4y_1, this.a52_1, this.z51_1, this.t51_1.p4y_1.d4y_1, this.t51_1.p4y_1.e4y_1));
              this.v51_1 = Unit_getInstance();
              this.el_1 = 12;
              this.dl_1 = 8;
              continue $sm;
            } else {
              this.dl_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.dl_1 = 6;
            continue $sm;
          case 6:
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.dl_1 = 3;
            continue $sm;
          case 8:
            var shouldCache = get_isActive(this.p5());
            this.t51_1.u4y_1 = false;
            this.t51_1.r4y_1(new Immutable(this.t51_1.s(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.u51_1 = Unit_getInstance();
            this.el_1 = 12;
            this.dl_1 = 10;
            continue $sm;
          case 10:
            var shouldCache_0 = get_isActive(this.p5());
            this.t51_1.u4y_1 = false;
            this.t51_1.r4y_1(new Immutable(this.t51_1.s(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.el_1 = 12;
            var t = this.gl_1;
            var shouldCache_1 = get_isActive(this.p5());
            this.t51_1.u4y_1 = false;
            this.t51_1.r4y_1(new Immutable(this.t51_1.s(), shouldCache_1));
            throw t;
          case 12:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 12) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j52_1 = _this__u8e3s4;
    this.k52_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.el_1 = 2;
            this.dl_1 = 1;
            Companion_getInstance_17();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.j52_1, this.k52_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l52_1 = suspendResult;
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.gl_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.p5())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.l52_1 = tmp_3;
              this.dl_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.gl_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.gl_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.p5().u6(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.tu(this.p5(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.k52_1, uncaughtFontLoadException));
                }
                tmp_5.l52_1 = null;
                this.dl_1 = 4;
                continue $sm;
              } else {
                throw this.gl_1;
              }
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            return this.l52_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 3) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.o4y_1 = fontList;
    this.p4y_1 = typefaceRequest;
    this.q4y_1 = asyncTypefaceCache;
    this.r4y_1 = onCompletion;
    this.s4y_1 = platformFontLoader;
    this.t4y_1 = mutableStateOf(initialType);
    this.u4y_1 = true;
  }
  protoOf(AsyncFontListLoader).s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return this.t4y_1.s();
  };
  protoOf(AsyncFontListLoader).m52 = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AsyncFontListLoader).x50 = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).tu = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_getInstance();
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.o52_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.p52_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_5;
  function Companion_getInstance_20() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.y52_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.y52_1.m52(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).u1e = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.y52_1, completion);
    i.z52_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_20();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.b4z_1 = asyncTypefaceCache;
    this.c4z_1 = CoroutineScope_0(Companion_getInstance_20().p52_1.b7(injectedContext).b7(SupervisorJob(injectedContext.u6(Key_getInstance_0()))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).d4z = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.c4y_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_20().o52_1.a53(typefaceRequest.c4y_1.q4x_1, typefaceRequest.d4y_1, typefaceRequest.e4y_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.b4z_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.y4();
    var synthesizedTypeface = tmp0_container.z4();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.b4z_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.c4z_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.m(idx);
        var tmp1_subject = font.x4w();
        if (tmp1_subject === Companion_getInstance_21().y4w_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            asyncTypefaceCache.f50_1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key = new Key(font, platformFontLoader.k4z());
            var tmp0_elvis_lhs = asyncTypefaceCache.d50_1.z2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.e50_1.z2(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.l4z_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.b53(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.h50(font, platformFontLoader, tmp_0);
            tmp$ret$0 = tmp_0;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.f4y_1, result, font, typefaceRequest.d4y_1, typefaceRequest.e4y_1));
        } else if (tmp1_subject === Companion_getInstance_21().z4w_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            asyncTypefaceCache.f50_1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key_0 = new Key(font, platformFontLoader.k4z());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.d50_1.z2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.e50_1.z2(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.l4z_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance_4();
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var tmp1_success = platformFontLoader.b53(font);
              tmp_4 = _Result___init__impl__xyqfz8(tmp1_success);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance_4();
                tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            var tmp0_getOrNull = tmp_4;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
              tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
            }
            var tmp1_also = tmp_6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.h50(font, platformFontLoader, tmp1_also);
            tmp$ret$5 = tmp1_also;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.f4y_1, result_0, font, typefaceRequest.d4y_1, typefaceRequest.e4y_1));
          }
        } else if (tmp1_subject === Companion_getInstance_21().a4x_1) {
          var cacheResult = asyncTypefaceCache.i50(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.a(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.l4z_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.l4z_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.f4y_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.l4z_1), font, typefaceRequest.d4y_1, typefaceRequest.e4y_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_21().y4w_1 ? 'Blocking' : $this === Companion_getInstance_21().z4w_1 ? 'Optional' : $this === Companion_getInstance_21().a4x_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.y4w_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.z4w_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.a4x_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_6;
  function Companion_getInstance_21() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.c53_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_21();
    this.c53_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.c53_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.c53_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.c53_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).a53 = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(fontList.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.m(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.m3e().equals(fontWeight) ? item.w4w() === fontStyle : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.l()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(fontList.g());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.m(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.w4w() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.a(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (target_0.l()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp_0 = fontList;
    } else {
      tmp_0 = target_0;
    }
    var fontsToSearch = tmp_0;
    var tmp_1;
    if (fontWeight.d53(Companion_getInstance_24().w4r_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.m(index_1);
          var possibleWeight = font.m3e();
          if (!(null == null) ? possibleWeight.d53(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.d53(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.d53(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.d53(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.d53(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.d53(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      var tmp1_elvis_lhs = bestWeightBelow;
      tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      var bestWeight = tmp_2;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.g());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.m(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.m3e().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.a(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_1 = target_1;
    } else if (fontWeight.d53(Companion_getInstance_24().x4r_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.m(index_3);
          var possibleWeight_0 = font_0.m3e();
          if (!(null == null) ? possibleWeight_0.d53(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.d53(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.d53(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.d53(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.d53(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.d53(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs == null ? bestWeightBelow_0 : tmp2_elvis_lhs;
      }
      var bestWeight_0 = tmp_3;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.g());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.m(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.m3e().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.a(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_1 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var tmp2_filterByClosestWeight = Companion_getInstance_24().x4r_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.m(index_5);
          var possibleWeight_1 = font_1.m3e();
          if (!(null == null) ? possibleWeight_1.d53(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(tmp2_filterByClosestWeight == null) ? possibleWeight_1.d53(tmp2_filterByClosestWeight) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.d53(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.d53(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.d53(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.d53(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_0;
      }
      var bestWeight_1 = tmp_4;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.g());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.g() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.m(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.m3e().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.a(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      var tmp_5;
      if (target_3.l()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var tmp0_filterByClosestWeight = Companion_getInstance_24().x4r_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.g() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.m(index_7);
            var possibleWeight_2 = font_2.m3e();
            if (!(tmp0_filterByClosestWeight == null) ? possibleWeight_2.d53(tmp0_filterByClosestWeight) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.d53(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.d53(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.d53(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.d53(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.d53(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_1 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_1;
        }
        var bestWeight_2 = tmp_6;
        // Inline function 'androidx.compose.ui.text.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.g());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.g() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.m(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.m3e().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.a(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_5 = target_4;
      } else {
        tmp_5 = target_3;
      }
      tmp_1 = tmp_5;
    }
    var result = tmp_1;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_22().m4s_1 ? 'Normal' : $this === Companion_getInstance_22().n4s_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.m4s_1 = _FontStyle___init__impl__jcnduf(0);
    this.n4s_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_7;
  function Companion_getInstance_22() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.n4q_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_22();
    this.n4q_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.n4q_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.n4q_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.n4q_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_23().o4s_1 ? 'None' : $this === Companion_getInstance_23().p4s_1 ? 'All' : $this === Companion_getInstance_23().q4s_1 ? 'Weight' : $this === Companion_getInstance_23().r4s_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.o4s_1 = _FontSynthesis___init__impl__n397bg(0);
    this.p4s_1 = _FontSynthesis___init__impl__n397bg(1);
    this.q4s_1 = _FontSynthesis___init__impl__n397bg(2);
    this.r4s_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_8;
  function Companion_getInstance_23() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.o4q_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_23();
    this.o4q_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.o4q_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.o4q_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.o4q_1, other);
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.t4r_1 = new FontWeight(100);
    this.u4r_1 = new FontWeight(200);
    this.v4r_1 = new FontWeight(300);
    this.w4r_1 = new FontWeight(400);
    this.x4r_1 = new FontWeight(500);
    this.y4r_1 = new FontWeight(600);
    this.z4r_1 = new FontWeight(700);
    this.a4s_1 = new FontWeight(800);
    this.b4s_1 = new FontWeight(900);
    this.c4s_1 = this.t4r_1;
    this.d4s_1 = this.u4r_1;
    this.e4s_1 = this.v4r_1;
    this.f4s_1 = this.w4r_1;
    this.g4s_1 = this.x4r_1;
    this.h4s_1 = this.y4r_1;
    this.i4s_1 = this.z4r_1;
    this.j4s_1 = this.a4s_1;
    this.k4s_1 = this.b4s_1;
    this.l4s_1 = listOf([this.t4r_1, this.u4r_1, this.v4r_1, this.w4r_1, this.x4r_1, this.y4r_1, this.z4r_1, this.a4s_1, this.b4s_1]);
  }
  var Companion_instance_9;
  function Companion_getInstance_24() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function FontWeight(weight) {
    Companion_getInstance_24();
    this.y4q_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.y4q_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.y4q_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.z4q_1 = 0;
  }
  protoOf(FontWeight).d53 = function (other) {
    return compareTo(this.y4q_1, other.y4q_1);
  };
  protoOf(FontWeight).la = function (other) {
    return this.d53(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.y4q_1 === other.y4q_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.y4q_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.y4q_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.y4q_1, stop.y4q_1, fraction), 1, 1000);
    return new FontWeight(weight);
  }
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.e53_1 = annotatedString;
    this.f53_1 = newCursorPosition;
    this.g53_1 = 0;
  }
  protoOf(CommitTextCommand).h53 = function () {
    return this.e53_1.t4k_1;
  };
  protoOf(CommitTextCommand).i53 = function (buffer) {
    if (buffer.q53()) {
      buffer.p53(buffer.m53_1, buffer.n53_1, this.h53());
    } else {
      buffer.p53(buffer.k53_1, buffer.l53_1, this.h53());
    }
    var newCursor = buffer.r53();
    var tmp;
    if (this.f53_1 > 0) {
      tmp = (newCursor + this.f53_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.f53_1 | 0) - this.h53().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.s53(coerceIn(newCursorInBuffer, 0, buffer.qd()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.h53() === other.h53()))
      return false;
    if (!(this.f53_1 === other.f53_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.h53());
    result = imul(31, result) + this.f53_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.h53() + "', newCursorPosition=" + this.f53_1 + ')';
  };
  function DeleteAllCommand() {
    this.t53_1 = 0;
  }
  protoOf(DeleteAllCommand).i53 = function (buffer) {
    buffer.p53(0, buffer.qd(), '');
  };
  protoOf(DeleteAllCommand).equals = function (other) {
    return other instanceof DeleteAllCommand;
  };
  protoOf(DeleteAllCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(DeleteAllCommand).toString = function () {
    return 'DeleteAllCommand()';
  };
  function FinishComposingTextCommand() {
    this.u53_1 = 0;
  }
  protoOf(FinishComposingTextCommand).i53 = function (buffer) {
    buffer.v53();
  };
  protoOf(FinishComposingTextCommand).equals = function (other) {
    return other instanceof FinishComposingTextCommand;
  };
  protoOf(FinishComposingTextCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(FinishComposingTextCommand).toString = function () {
    return 'FinishComposingTextCommand()';
  };
  function DeleteSurroundingTextCommand$applyTo$lambda() {
    return 0;
  }
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.w53_1 = lengthBeforeCursor;
    this.x53_1 = lengthAfterCursor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w53_1 >= 0 ? this.x53_1 >= 0 : false)) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.<anonymous>' call
      var message = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.w53_1 + ' and ' + this.x53_1 + ' respectively.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y53_1 = 0;
  }
  protoOf(DeleteSurroundingTextCommand).i53 = function (buffer) {
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var tmp0_addExactOrElse = buffer.l53_1;
    var tmp1_addExactOrElse = this.x53_1;
    var result = tmp0_addExactOrElse + tmp1_addExactOrElse | 0;
    var tmp;
    if (((tmp0_addExactOrElse ^ result) & (tmp1_addExactOrElse ^ result)) < 0) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.applyTo.<anonymous>' call
      tmp = buffer.qd();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.l53_1;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp2_minOf = buffer.qd();
    tmp$ret$2 = Math.min(end, tmp2_minOf);
    buffer.z53(tmp_0, tmp$ret$2);
    var tmp_1 = buffer.k53_1;
    var start = subtractExactOrElse(tmp_1, this.w53_1, DeleteSurroundingTextCommand$applyTo$lambda);
    var tmp$ret$3;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp$ret$3 = Math.max(0, start);
    buffer.z53(tmp$ret$3, buffer.k53_1);
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.w53_1 === other.w53_1))
      return false;
    if (!(this.x53_1 === other.x53_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.w53_1;
    result = imul(31, result) + this.x53_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.w53_1 + ', ' + ('lengthAfterCursor=' + this.x53_1 + ')');
  };
  function SetSelectionCommand(start, end) {
    this.a54_1 = start;
    this.b54_1 = end;
    this.c54_1 = 0;
  }
  protoOf(SetSelectionCommand).i53 = function (buffer) {
    var clampedStart = coerceIn(this.a54_1, 0, buffer.qd());
    var clampedEnd = coerceIn(this.b54_1, 0, buffer.qd());
    if (clampedStart < clampedEnd) {
      buffer.d54(clampedStart, clampedEnd);
    } else {
      buffer.d54(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.a54_1 === other.a54_1))
      return false;
    if (!(this.b54_1 === other.b54_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.a54_1;
    result = imul(31, result) + this.b54_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.a54_1 + ', end=' + this.b54_1 + ')';
  };
  function SetComposingTextCommand() {
  }
  protoOf(SetComposingTextCommand).h53 = function () {
    return this.e54_1.t4k_1;
  };
  function SetComposingRegionCommand() {
  }
  function DeleteSurroundingTextInCodePointsCommand() {
  }
  function BackspaceCommand() {
  }
  function MoveCursorCommand() {
  }
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.generateBatchErrorMessage.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var tmp = 'Error while applying EditCommand batch to buffer (' + ('length=' + $this.h54_1.qd() + ', ');
    var tmp_0 = $this.h54_1.j54();
    var tmp0_appendLine = tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + new TextRange($this.h54_1.k54()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    tmp0_apply.ia(tmp0_appendLine).i9(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, tmp0_apply, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return tmp0_apply.toString();
  }
  function toStringForLog(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.h53().length + ', newCursorPosition=' + _this__u8e3s4.f53_1 + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.h53().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.f54_1 + ')');
      } else {
        if (_this__u8e3s4 instanceof SetComposingRegionCommand) {
          tmp = toString(_this__u8e3s4);
        } else {
          if (_this__u8e3s4 instanceof DeleteSurroundingTextCommand) {
            tmp = toString(_this__u8e3s4);
          } else {
            if (_this__u8e3s4 instanceof DeleteSurroundingTextInCodePointsCommand) {
              tmp = toString(_this__u8e3s4);
            } else {
              if (_this__u8e3s4 instanceof SetSelectionCommand) {
                tmp = toString(_this__u8e3s4);
              } else {
                if (_this__u8e3s4 instanceof FinishComposingTextCommand) {
                  tmp = toString(_this__u8e3s4);
                } else {
                  if (_this__u8e3s4 instanceof BackspaceCommand) {
                    tmp = toString(_this__u8e3s4);
                  } else {
                    if (_this__u8e3s4 instanceof MoveCursorCommand) {
                      tmp = toString(_this__u8e3s4);
                    } else {
                      if (_this__u8e3s4 instanceof DeleteAllCommand) {
                        tmp = toString(_this__u8e3s4);
                      } else {
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).mh();
                        tmp = 'Unknown EditCommand: ' + (tmp1_elvis_lhs == null ? '{anonymous EditCommand}' : tmp1_elvis_lhs);
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
    return tmp;
  }
  function EditProcessor$generateBatchErrorMessage$lambda($failedCommand, this$0) {
    return function (it) {
      var prefix = $failedCommand === it ? ' > ' : '   ';
      return prefix + toStringForLog(it, this$0);
    };
  }
  function EditProcessor() {
    this.g54_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_15().i4u_1, null);
    this.h54_1 = new EditingBuffer(this.g54_1.l54_1, this.g54_1.m54_1);
    this.i54_1 = 8;
  }
  protoOf(EditProcessor).p54 = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.n54_1;
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.h54_1.j54();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!this.g54_1.l54_1.equals(value.l54_1)) {
      this.h54_1 = new EditingBuffer(value.l54_1, value.m54_1);
      textChanged = true;
    } else if (!equals(this.g54_1.m54_1, value.m54_1)) {
      this.h54_1.d54(_TextRange___get_min__impl__uu95c4(value.m54_1), _TextRange___get_max__impl__owm8m(value.m54_1));
      selectionChanged = true;
    }
    var tmp_2 = value.n54_1;
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.h54_1.v53();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.n54_1)) {
        this.h54_1.q54(_TextRange___get_min__impl__uu95c4(value.n54_1), _TextRange___get_max__impl__owm8m(value.n54_1));
      }
    }
    var tmp_3;
    if (textChanged ? true : !selectionChanged ? compositionChanged : false) {
      this.h54_1.v53();
      tmp_3 = value.r54(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.g54_1;
    this.g54_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.v54(oldValue, newValue);
  };
  protoOf(EditProcessor).w54 = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = editCommands.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.m(index);
          // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>' call
          lastCommand = item;
          item.i53(this.h54_1);
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(generateBatchErrorMessage(this, editCommands, lastCommand), e);
      } else {
        throw $p;
      }
    }
    var newState = new TextFieldValue(this.h54_1.a4l(), this.h54_1.k54(), this.h54_1.j54());
    this.g54_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).x54 = function () {
    return this.g54_1;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.y54_1 = -1;
  }
  var Companion_instance_10;
  function Companion_getInstance_25() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionStart>.<anonymous>' call
      var message = 'Cannot set selectionStart to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.k53_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionEnd>.<anonymous>' call
      var message = 'Cannot set selectionEnd to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.l53_1 = value;
  }
  function EditingBuffer(text, selection) {
    Companion_getInstance_25();
    this.j53_1 = new PartialGapBuffer(text.t4k_1);
    this.k53_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.l53_1 = _TextRange___get_max__impl__owm8m(selection);
    var tmp = this;
    Companion_getInstance_25();
    tmp.m53_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_25();
    tmp_0.n53_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 ? true : start > text.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.qd());
    }
    if (end < 0 ? true : end > text.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.qd());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.o53_1 = 8;
  }
  protoOf(EditingBuffer).q53 = function () {
    var tmp = this.m53_1;
    Companion_getInstance_25();
    return !(tmp === -1);
  };
  protoOf(EditingBuffer).j54 = function () {
    var tmp;
    if (this.q53()) {
      tmp = TextRange_0(this.m53_1, this.n53_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).k54 = function () {
    return TextRange_0(this.k53_1, this.l53_1);
  };
  protoOf(EditingBuffer).s53 = function (cursor) {
    return this.d54(cursor, cursor);
  };
  protoOf(EditingBuffer).r53 = function () {
    return this.k53_1 === this.l53_1 ? this.l53_1 : -1;
  };
  protoOf(EditingBuffer).qd = function () {
    return this.j53_1.qd();
  };
  protoOf(EditingBuffer).p53 = function (start, end, text) {
    if (start < 0 ? true : start > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (end < 0 ? true : end > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.j53_1.p53(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    var tmp = this;
    Companion_getInstance_25();
    tmp.m53_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_25();
    tmp_0.n53_1 = -1;
  };
  protoOf(EditingBuffer).z53 = function (start, end) {
    var deleteRange = TextRange_0(start, end);
    this.j53_1.p53(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.k53_1, this.l53_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.q53()) {
      var compositionRange = TextRange_0(this.m53_1, this.n53_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.v53();
      } else {
        this.m53_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.n53_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).d54 = function (start, end) {
    if (start < 0 ? true : start > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (end < 0 ? true : end > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).q54 = function (start, end) {
    if (start < 0 ? true : start > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (end < 0 ? true : end > this.j53_1.qd()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j53_1.qd());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.m53_1 = start;
    this.n53_1 = end;
  };
  protoOf(EditingBuffer).v53 = function () {
    var tmp = this;
    Companion_getInstance_25();
    tmp.m53_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_25();
    tmp_0.n53_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.j53_1.toString();
  };
  protoOf(EditingBuffer).a4l = function () {
    return AnnotatedString_init_$Create$(this.toString());
  };
  function updateRangeAfterDelete(target, deleted) {
    var targetMin = _TextRange___get_min__impl__uu95c4(target);
    var targetMax = _TextRange___get_max__impl__owm8m(target);
    if (TextRange__intersects_impl_mhtn49(deleted, target)) {
      if (TextRange__contains_impl_ws45z2(deleted, target)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_ws45z2(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else if (TextRange__contains_impl_ws45z2_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__uu95c4(deleted);
      }
    } else {
      if (targetMax > _TextRange___get_min__impl__uu95c4(deleted)) {
        targetMin = targetMin - _TextRange___get_length__impl__7qes3a(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      }
    }
    return TextRange_0(targetMin, targetMax);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.e55_1 = 255;
    this.f55_1 = 64;
    this.g55_1 = -1;
  }
  var Companion_instance_11;
  function Companion_getInstance_26() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PartialGapBuffer(text) {
    Companion_getInstance_26();
    this.z54_1 = text;
    this.a55_1 = null;
    var tmp = this;
    Companion_getInstance_26();
    tmp.b55_1 = -1;
    var tmp_0 = this;
    Companion_getInstance_26();
    tmp_0.c55_1 = -1;
    this.d55_1 = 8;
  }
  protoOf(PartialGapBuffer).qd = function () {
    var tmp0_elvis_lhs = this.a55_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.z54_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.z54_1.length - (this.c55_1 - this.b55_1 | 0) | 0) + buffer.l55() | 0;
  };
  protoOf(PartialGapBuffer).p53 = function (start, end, text) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message = 'start index must be less than or equal to end index: ' + start + ' > ' + end;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message_0 = 'start must be non-negative, but was ' + start;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var buffer = this.a55_1;
    if (buffer == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.maxOf' call
      Companion_getInstance_26();
      var tmp = text.length;
      Companion_getInstance_26();
      var tmp3_maxOf = tmp + imul(2, 64) | 0;
      tmp$ret$2 = Math.max(255, tmp3_maxOf);
      var charArray_0 = charArray(tmp$ret$2);
      // Inline function 'kotlin.comparisons.minOf' call
      Companion_getInstance_26();
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp5_minOf = this.z54_1.length - end | 0;
      Companion_getInstance_26();
      var rightCopyCount = Math.min(tmp5_minOf, 64);
      toCharArray_0(this.z54_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.z54_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.a55_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.b55_1 = start - leftCopyCount | 0;
      this.c55_1 = end + rightCopyCount | 0;
      return Unit_getInstance();
    }
    var bufferStart = start - this.b55_1 | 0;
    var bufferEnd = end - this.b55_1 | 0;
    if (bufferStart < 0 ? true : bufferEnd > buffer.l55()) {
      this.z54_1 = this.toString();
      this.a55_1 = null;
      var tmp_0 = this;
      Companion_getInstance_26();
      tmp_0.b55_1 = -1;
      var tmp_1 = this;
      Companion_getInstance_26();
      tmp_1.c55_1 = -1;
      return this.p53(start, end, text);
    }
    buffer.p53(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.a55_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.z54_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.wi(this.z54_1, 0, this.b55_1);
    b.m55(sb);
    sb.wi(this.z54_1, this.c55_1, this.z54_1.length);
    return sb.toString();
  };
  function gapLength($this) {
    return $this.k55_1 - $this.j55_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_getInstance();
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.h55_1, 2);
    while ((newCapacity - $this.h55_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.i55_1;
    var tmp1_copyInto = $this.j55_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, tmp1_copyInto);
    var tailLength = $this.h55_1 - $this.k55_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.i55_1;
    var tmp3_copyInto = $this.k55_1;
    var tmp4_copyInto = $this.k55_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, tmp3_copyInto, tmp4_copyInto);
    $this.i55_1 = newBuffer;
    $this.h55_1 = newCapacity;
    $this.k55_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.j55_1 ? end <= $this.j55_1 : false) {
      var copyLen = $this.j55_1 - end | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.i55_1;
      var tmp1_copyInto = $this.i55_1;
      var tmp2_copyInto = $this.k55_1 - copyLen | 0;
      var tmp3_copyInto = $this.j55_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp1_copyInto, tmp2_copyInto, end, tmp3_copyInto);
      $this.j55_1 = start;
      $this.k55_1 = $this.k55_1 - copyLen | 0;
    } else if (start < $this.j55_1 ? end >= $this.j55_1 : false) {
      $this.k55_1 = end + gapLength($this) | 0;
      $this.j55_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.k55_1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = $this.i55_1;
      var tmp5_copyInto = $this.i55_1;
      var tmp6_copyInto = $this.j55_1;
      var tmp7_copyInto = $this.k55_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp4_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, startInBuffer);
      $this.j55_1 = $this.j55_1 + copyLen_0 | 0;
      $this.k55_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.h55_1 = initBuffer.length;
    this.i55_1 = initBuffer;
    this.j55_1 = initGapStart;
    this.k55_1 = initGapEnd;
  }
  protoOf(GapBuffer).p53 = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.i55_1, this.j55_1);
    this.j55_1 = this.j55_1 + text.length | 0;
  };
  protoOf(GapBuffer).m55 = function (builder) {
    appendPartOfCharArray(builder, this.i55_1, 0, this.j55_1);
    appendPartOfCharArray(builder, this.i55_1, this.k55_1, this.h55_1 - this.k55_1 | 0);
  };
  protoOf(GapBuffer).l55 = function () {
    return this.h55_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.GapBuffer.toString.<anonymous>' call
    tmp0_apply.b(tmp0_apply);
    return tmp0_apply.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_27().o55_1 ? 'None' : $this === Companion_getInstance_27().n55_1 ? 'Default' : $this === Companion_getInstance_27().p55_1 ? 'Go' : $this === Companion_getInstance_27().q55_1 ? 'Search' : $this === Companion_getInstance_27().r55_1 ? 'Send' : $this === Companion_getInstance_27().s55_1 ? 'Previous' : $this === Companion_getInstance_27().t55_1 ? 'Next' : $this === Companion_getInstance_27().u55_1 ? 'Done' : 'Invalid';
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.n55_1 = _ImeAction___init__impl__ucgwde(1);
    this.o55_1 = _ImeAction___init__impl__ucgwde(0);
    this.p55_1 = _ImeAction___init__impl__ucgwde(2);
    this.q55_1 = _ImeAction___init__impl__ucgwde(3);
    this.r55_1 = _ImeAction___init__impl__ucgwde(4);
    this.s55_1 = _ImeAction___init__impl__ucgwde(5);
    this.t55_1 = _ImeAction___init__impl__ucgwde(6);
    this.u55_1 = _ImeAction___init__impl__ucgwde(7);
  }
  var Companion_instance_12;
  function Companion_getInstance_27() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.v55_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_27();
    this.v55_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.v55_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.v55_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.v55_1, other);
  };
  function Companion_13() {
    Companion_instance_13 = this;
    this.w55_1 = new ImeOptions();
  }
  var Companion_instance_13;
  function Companion_getInstance_28() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    Companion_getInstance_28();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_29().x55_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_30().b56_1 : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_27().n55_1 : imeAction;
    this.k56_1 = singleLine;
    this.l56_1 = capitalization;
    this.m56_1 = autoCorrect;
    this.n56_1 = keyboardType;
    this.o56_1 = imeAction;
    this.p56_1 = 0;
  }
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.k56_1 === other.k56_1))
      return false;
    if (!(this.l56_1 === other.l56_1))
      return false;
    if (!(this.m56_1 === other.m56_1))
      return false;
    if (!(this.n56_1 === other.n56_1))
      return false;
    if (!(this.o56_1 === other.o56_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = this.k56_1 | 0;
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.l56_1) | 0;
    result = imul(31, result) + (this.m56_1 | 0) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.n56_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.o56_1) | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.k56_1 + ', capitalization=' + new KeyboardCapitalization(this.l56_1) + ', ' + ('autoCorrect=' + this.m56_1 + ', keyboardType=' + new KeyboardType(this.n56_1) + ', imeAction=' + new ImeAction(this.o56_1) + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_29().x55_1 ? 'None' : $this === Companion_getInstance_29().y55_1 ? 'Characters' : $this === Companion_getInstance_29().z55_1 ? 'Words' : $this === Companion_getInstance_29().a56_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.x55_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.y55_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.z55_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.a56_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  var Companion_instance_14;
  function Companion_getInstance_29() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.q56_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_29();
    this.q56_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.q56_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.q56_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.q56_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_30().b56_1 ? 'Text' : $this === Companion_getInstance_30().c56_1 ? 'Ascii' : $this === Companion_getInstance_30().d56_1 ? 'Number' : $this === Companion_getInstance_30().e56_1 ? 'Phone' : $this === Companion_getInstance_30().f56_1 ? 'Uri' : $this === Companion_getInstance_30().g56_1 ? 'Email' : $this === Companion_getInstance_30().h56_1 ? 'Password' : $this === Companion_getInstance_30().i56_1 ? 'NumberPassword' : $this === Companion_getInstance_30().j56_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.b56_1 = _KeyboardType___init__impl__csir7k(1);
    this.c56_1 = _KeyboardType___init__impl__csir7k(2);
    this.d56_1 = _KeyboardType___init__impl__csir7k(3);
    this.e56_1 = _KeyboardType___init__impl__csir7k(4);
    this.f56_1 = _KeyboardType___init__impl__csir7k(5);
    this.g56_1 = _KeyboardType___init__impl__csir7k(6);
    this.h56_1 = _KeyboardType___init__impl__csir7k(7);
    this.i56_1 = _KeyboardType___init__impl__csir7k(8);
    this.j56_1 = _KeyboardType___init__impl__csir7k(9);
  }
  var Companion_instance_15;
  function Companion_getInstance_30() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.r56_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_30();
    this.r56_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.r56_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.r56_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.r56_1, other);
  };
  function subtractExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 - right | 0;
    return ((_this__u8e3s4 ^ right) & (_this__u8e3s4 ^ result)) < 0 ? defaultValue() : result;
  }
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).s56 = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).t56 = function (offset) {
    return offset;
  };
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.u56_1 = new OffsetMapping$Companion$Identity$1();
  }
  var Companion_instance_16;
  function Companion_getInstance_31() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function PlatformTextInputPluginRegistryImpl(factory) {
    this.v56_1 = factory;
    this.w56_1 = mutableStateMapOf();
    this.x56_1 = false;
    this.y56_1 = null;
    this.z56_1 = 0;
  }
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.l54_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.m54_1), get_Saver_10(Companion_getInstance_15()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_restore = list.m(0);
      var tmp1_restore = get_AnnotatedStringSaver();
      if (equals(tmp0_restore, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (tmp0_restore == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = tmp1_restore.z4i(tmp0_restore);
        tmp = (tmp_0 == null ? true : tmp_0 instanceof AnnotatedString) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var tmp_1 = ensureNotNull(tmp$ret$0);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp2_restore = list.m(1);
      var tmp3_restore = get_Saver_10(Companion_getInstance_15());
      if (equals(tmp2_restore, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_2;
      if (tmp2_restore == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_3 = tmp3_restore.z4i(tmp2_restore);
        var tmp_4 = tmp_3 == null ? null : tmp_3.a4r_1;
        var tmp_5;
        var tmp_6;
        var tmp_7 = tmp_4;
        if ((tmp_7 == null ? null : new TextRange(tmp_7)) == null) {
          tmp_6 = true;
        } else {
          var tmp_8 = tmp_4;
          tmp_6 = (tmp_8 == null ? null : new TextRange(tmp_8))instanceof TextRange;
        }
        if (tmp_6) {
          tmp_5 = tmp_4;
        } else {
          tmp_5 = THROW_CCE();
        }
        tmp_2 = tmp_5;
      }
      tmp$ret$5 = tmp_2;
    }
    var tmp_9 = tmp$ret$5;
    return new TextFieldValue(tmp_1, ensureNotNull(tmp_9 == null ? null : new TextRange(tmp_9)).a4r_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_15().i4u_1 : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.a57_1 = Saver(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  var Companion_instance_17;
  function Companion_getInstance_32() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_32();
    selection = selection === VOID ? Companion_getInstance_15().i4u_1 : selection;
    composition = composition === VOID ? null : composition;
    this.l54_1 = annotatedString;
    this.m54_1 = coerceIn_1(selection, 0, this.h53().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.h53().length);
    }
    tmp.n54_1 = tmp_0;
    this.o54_1 = 0;
  }
  protoOf(TextFieldValue).h53 = function () {
    return this.l54_1.t4k_1;
  };
  protoOf(TextFieldValue).b57 = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).r54 = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.l54_1 : annotatedString;
    selection = selection === VOID ? this.m54_1 : selection;
    composition = composition === VOID ? this.n54_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.b57(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.b57;
      var tmp_1 = new TextRange(selection);
      var tmp_2 = composition;
      tmp = tmp_0.call(this, annotatedString, tmp_1, tmp_2 == null ? null : new TextRange(tmp_2));
    }
    return tmp;
  };
  protoOf(TextFieldValue).c57 = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$(text), selection, composition);
  };
  protoOf(TextFieldValue).d57 = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.m54_1 : selection;
    composition = composition === VOID ? this.n54_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.c57(text, selection, composition);
    } else {
      var tmp_0 = $super.c57;
      var tmp_1 = new TextRange(selection);
      var tmp_2 = composition;
      tmp = tmp_0.call(this, text, tmp_1, tmp_2 == null ? null : new TextRange(tmp_2));
    }
    return tmp;
  };
  protoOf(TextFieldValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    var tmp;
    var tmp_0;
    if (equals(this.m54_1, other.m54_1)) {
      var tmp_1 = this.n54_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.n54_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.l54_1.equals(other.l54_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.l54_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.m54_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n54_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = TextRange__hashCode_impl_3zpp6q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextFieldValue).toString = function () {
    var tmp = 'TextFieldValue(' + ("text='" + this.l54_1 + "', ") + ('selection=' + new TextRange(this.m54_1) + ', ');
    var tmp_0 = this.n54_1;
    return tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.l54_1.e4l(_this__u8e3s4.m54_1);
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.m54_1);
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _TextRange___get_max__impl__owm8m(_this__u8e3s4.m54_1) + maxChars | 0;
    var tmp1_min = _this__u8e3s4.h53().length;
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    return _this__u8e3s4.l54_1.sd(tmp, tmp$ret$0);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.m54_1) - maxChars | 0;
    tmp$ret$0 = Math.max(0, tmp0_max);
    return _this__u8e3s4.l54_1.sd(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.m54_1));
  }
  function TextInputService(platformTextInputService) {
    this.e57_1 = platformTextInputService;
    this.f57_1 = new AtomicReference(null);
    this.g57_1 = 8;
  }
  protoOf(TextInputService).h57 = function () {
    return this.f57_1.sv();
  };
  protoOf(TextInputService).i57 = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.e57_1.j57(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.e57_1);
    this.f57_1.h27(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).k57 = function (session) {
    if (this.f57_1.r27(session, null)) {
      this.e57_1.l57();
    }
  };
  function PlatformTextInputService() {
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.s54_1 = textInputService;
    this.t54_1 = platformTextInputService;
    this.u54_1 = 0;
  }
  protoOf(TextInputSession).q57 = function () {
    return equals(this.s54_1.h57(), this);
  };
  protoOf(TextInputSession).gp = function () {
    this.s54_1.k57(this);
  };
  protoOf(TextInputSession).r57 = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var tmp0_also = this.q57();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.notifyFocusedRect.<anonymous>' call
      this.t54_1.p57(rect);
    }
    return tmp0_also;
  };
  protoOf(TextInputSession).v54 = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var tmp0_also = this.q57();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateState.<anonymous>' call
      this.t54_1.o57(oldValue, newValue);
    }
    return tmp0_also;
  };
  protoOf(TextInputSession).s57 = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var tmp0_also = this.q57();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.showSoftwareKeyboard.<anonymous>' call
      this.t54_1.m57();
    }
    return tmp0_also;
  };
  protoOf(TextInputSession).t57 = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var tmp0_also = this.q57();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.hideSoftwareKeyboard.<anonymous>' call
      this.t54_1.n57();
    }
    return tmp0_also;
  };
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.u57_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).v57 = function (text) {
    return this.u57_1(text);
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_31().u56_1);
  }
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.w57_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  var Companion_instance_18;
  function Companion_getInstance_33() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function PasswordVisualTransformation(mask) {
    mask = mask === VOID ? _Char___init__impl__6a9atx(8226) : mask;
    this.x57_1 = mask;
    this.y57_1 = 0;
  }
  protoOf(PasswordVisualTransformation).v57 = function (text) {
    return new TransformedText(AnnotatedString_init_$Create$(repeat(toString_1(this.x57_1), text.t4k_1.length)), Companion_getInstance_31().u56_1);
  };
  protoOf(PasswordVisualTransformation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PasswordVisualTransformation))
      return false;
    if (!(this.x57_1 === other.x57_1))
      return false;
    return true;
  };
  protoOf(PasswordVisualTransformation).hashCode = function () {
    return Char__hashCode_impl_otmys(this.x57_1);
  };
  function TransformedText(text, offsetMapping) {
    this.z57_1 = text;
    this.a58_1 = offsetMapping;
    this.b58_1 = 8;
  }
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.z57_1.equals(other.z57_1))
      return false;
    if (!equals(this.a58_1, other.a58_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.z57_1.hashCode();
    result = imul(31, result) + hashCode(this.a58_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.z57_1 + ', offsetMapping=' + this.a58_1 + ')';
  };
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).e1q = function () {
    return get_platformLocaleDelegate().e1q().m(0);
  };
  var Companion_instance_19;
  function Companion_getInstance_34() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().c58(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    Companion_getInstance_34();
    this.e4r_1 = platformLocale;
    this.f4r_1 = 0;
  }
  protoOf(Locale).g4r = function () {
    return this.e4r_1.g4r();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.g4r() === other.g4r();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.g4r());
  };
  protoOf(Locale).toString = function () {
    return this.g4r();
  };
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).e1q = function () {
    return get_platformLocaleDelegate().e1q();
  };
  var Companion_instance_20;
  function Companion_getInstance_35() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function LocaleList(localeList) {
    Companion_getInstance_35();
    this.b4r_1 = localeList;
    this.c4r_1 = this.b4r_1.g();
    this.d4r_1 = 0;
  }
  protoOf(LocaleList).m = function (i) {
    return this.b4r_1.m(i);
  };
  protoOf(LocaleList).g = function () {
    return this.c4r_1;
  };
  protoOf(LocaleList).d58 = function (element) {
    return this.b4r_1.n(element);
  };
  protoOf(LocaleList).n = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.d58(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).e58 = function (elements) {
    return this.b4r_1.o1(elements);
  };
  protoOf(LocaleList).o1 = function (elements) {
    return this.e58(elements);
  };
  protoOf(LocaleList).l = function () {
    return this.b4r_1.l();
  };
  protoOf(LocaleList).d = function () {
    return this.b4r_1.d();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.b4r_1, other.b4r_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.b4r_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.b4r_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.x4s_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.y4s_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.z4s_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_21;
  function Companion_getInstance_36() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.p4q_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_36();
    this.p4q_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.p4q_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.p4q_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.p4q_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.u4o_1 = _Hyphens___init__impl__m2cvg8(1);
    this.v4o_1 = _Hyphens___init__impl__m2cvg8(2);
  }
  var Companion_instance_22;
  function Companion_getInstance_37() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_37().u4o_1 ? 'Hyphens.None' : $this === Companion_getInstance_37().v4o_1 ? 'Hyphens.Auto' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.f4p_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_37();
    this.f4p_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.f4p_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.f4p_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.f4p_1, other);
  };
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_38().l4o_1 ? 'Left' : $this === Companion_getInstance_38().m4o_1 ? 'Right' : $this === Companion_getInstance_38().n4o_1 ? 'Center' : $this === Companion_getInstance_38().o4o_1 ? 'Justify' : $this === Companion_getInstance_38().p4o_1 ? 'Start' : $this === Companion_getInstance_38().q4o_1 ? 'End' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.l4o_1 = _TextAlign___init__impl__99wz4v(1);
    this.m4o_1 = _TextAlign___init__impl__99wz4v(2);
    this.n4o_1 = _TextAlign___init__impl__99wz4v(3);
    this.o4o_1 = _TextAlign___init__impl__99wz4v(4);
    this.p4o_1 = _TextAlign___init__impl__99wz4v(5);
    this.q4o_1 = _TextAlign___init__impl__99wz4v(6);
  }
  var Companion_instance_23;
  function Companion_getInstance_38() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.c4p_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_38();
    this.c4p_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.c4p_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.c4p_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.c4p_1, other);
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.b4t_1 = new TextDecoration(0);
    this.c4t_1 = new TextDecoration(1);
    this.d4t_1 = new TextDecoration(2);
  }
  var Companion_instance_24;
  function Companion_getInstance_39() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function TextDecoration(mask) {
    Companion_getInstance_39();
    this.q4q_1 = mask;
    this.r4q_1 = 0;
  }
  protoOf(TextDecoration).f58 = function (other) {
    return (this.q4q_1 | other.q4q_1) === this.q4q_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.q4q_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.q4q_1 & Companion_getInstance_39().c4t_1.q4q_1) === 0)) {
      values.a('Underline');
    }
    if (!((this.q4q_1 & Companion_getInstance_39().d4t_1.q4q_1) === 0)) {
      values.a('LineThrough');
    }
    if (values.g() === 1) {
      return 'TextDecoration.' + values.m(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.q4q_1 === other.q4q_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.q4q_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_40().t4v_1 ? 'Ltr' : $this === Companion_getInstance_40().u4v_1 ? 'Rtl' : $this === Companion_getInstance_40().v4v_1 ? 'Content' : $this === Companion_getInstance_40().w4v_1 ? 'ContentOrLtr' : $this === Companion_getInstance_40().x4v_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.t4v_1 = _TextDirection___init__impl__lh8lzt(1);
    this.u4v_1 = _TextDirection___init__impl__lh8lzt(2);
    this.v4v_1 = _TextDirection___init__impl__lh8lzt(3);
    this.w4v_1 = _TextDirection___init__impl__lh8lzt(4);
    this.x4v_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  var Companion_instance_25;
  function Companion_getInstance_40() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.d4p_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_40();
    this.d4p_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.d4p_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.d4p_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.d4p_1, other);
  };
  function Unspecified() {
    Unspecified_instance = this;
    this.g58_1 = 0;
  }
  protoOf(Unspecified).e3y = function () {
    return Companion_getInstance().c3y_1;
  };
  protoOf(Unspecified).j4r = function () {
    return null;
  };
  protoOf(Unspecified).h3v = function () {
    FloatCompanionObject_getInstance();
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).h4r = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  protoOf(Companion_26).i4r = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.h4r(modulate(brush.i3y_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_26;
  function Companion_getInstance_41() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.h3v();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.h58_1 = value;
    this.i58_1 = alpha;
  }
  protoOf(BrushStyle).h3v = function () {
    return this.i58_1;
  };
  protoOf(BrushStyle).e3y = function () {
    return Companion_getInstance().c3y_1;
  };
  protoOf(BrushStyle).j4r = function () {
    return this.h58_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.h58_1 + ', alpha=' + this.i58_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.h58_1);
    result = imul(result, 31) + getNumberHashCode(this.i58_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.h58_1, tmp0_other_with_cast.h58_1))
      return false;
    if (!equals(this.i58_1, tmp0_other_with_cast.i58_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.j58_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = this.j58_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).e3y = function () {
    return this.j58_1;
  };
  protoOf(ColorStyle).j4r = function () {
    return null;
  };
  protoOf(ColorStyle).h3v = function () {
    return _Color___get_alpha__impl__wcfyv1(this.e3y());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.j58_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.j58_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.j58_1, tmp0_other_with_cast.j58_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return (isNaN_0(alpha) ? true : alpha >= 1.0) ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function lerp_9(start, stop, fraction) {
    var tmp;
    var tmp_0;
    if (!(start instanceof BrushStyle)) {
      tmp_0 = !(stop instanceof BrushStyle);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_getInstance_41().h4r(lerp(start.e3y(), stop.e3y(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_getInstance_41().i4r(lerpDiscrete(start.j4r(), stop.j4r(), fraction), lerp_3(start.h3v(), stop.h3v(), fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.a4t_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_27;
  function Companion_getInstance_42() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_42();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.s4q_1 = scaleX;
    this.t4q_1 = skewX;
    this.u4q_1 = 0;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.s4q_1 === other.s4q_1))
      return false;
    if (!(this.t4q_1 === other.t4q_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.s4q_1);
    result = imul(31, result) + getNumberHashCode(this.t4q_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.s4q_1 + ', skewX=' + this.t4q_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.s4q_1, stop.s4q_1, fraction), lerp_3(start.t4q_1, stop.t4q_1, fraction));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.z4o_1 = new TextIndent_0();
  }
  var Companion_instance_28;
  function Companion_getInstance_43() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_43();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.v4q_1 = firstLine;
    this.w4q_1 = restLine;
    this.x4q_1 = 0;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.v4q_1, other.v4q_1))
      return false;
    if (!equals(this.w4q_1, other.w4q_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.v4q_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.w4q_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.v4q_1) + ', restLine=' + new TextUnit(this.w4q_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.v4q_1, stop.v4q_1, fraction), lerpTextUnitInheritable(start.w4q_1, stop.w4q_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_44().f4u_1 ? 'Clip' : $this === Companion_getInstance_44().g4u_1 ? 'Ellipsis' : $this === Companion_getInstance_44().h4u_1 ? 'Visible' : 'Invalid';
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.f4u_1 = _TextOverflow___init__impl__obguoe(1);
    this.g4u_1 = _TextOverflow___init__impl__obguoe(2);
    this.h4u_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_29;
  function Companion_getInstance_44() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.k58_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_44();
    this.k58_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.k58_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.k58_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.k58_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function isNeutralDirection(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().h3l(_this__u8e3s4);
    var tmp;
    var tmp_0;
    var tmp_1;
    CharDirection_getInstance();
    if (tmp0_subject === 10) {
      tmp_1 = true;
    } else {
      CharDirection_getInstance();
      tmp_1 = tmp0_subject === 9;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      CharDirection_getInstance();
      tmp_0 = tmp0_subject === 18;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function strongDirectionType(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().h3l(_this__u8e3s4);
    var tmp;
    CharDirection_getInstance();
    if (tmp0_subject === 0) {
      tmp = Companion_getInstance_45().m58_1;
    } else {
      var tmp_0;
      CharDirection_getInstance();
      if (tmp0_subject === 1) {
        tmp_0 = true;
      } else {
        CharDirection_getInstance();
        tmp_0 = tmp0_subject === 13;
      }
      if (tmp_0) {
        tmp = Companion_getInstance_45().n58_1;
      } else {
        tmp = Companion_getInstance_45().l58_1;
      }
    }
    return tmp;
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(startIndex, endIndex);
    var inductionVariable = tmp0_forEach.y_1;
    var last = tmp0_forEach.z_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.input.toCharArray.<anonymous>' call
        destination[(destinationOffset + element | 0) - startIndex | 0] = charSequenceGet(_this__u8e3s4, element);
      }
       while (!(element === last));
  }
  function NoCache() {
  }
  protoOf(NoCache).o58 = function (key, loader) {
    return loader(key);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function appendPartOfCharArray(_this__u8e3s4, charArray, offset, len) {
    var inductionVariable = offset;
    var last = offset + len | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.i9(charArray[i]);
      }
       while (inductionVariable < last);
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale_init_$Init$(languageTag, $this) {
    JsLocale.call($this, toIntlLocale(languageTag));
    return $this;
  }
  function JsLocale_init_$Create$(languageTag) {
    return JsLocale_init_$Init$(languageTag, objectCreate(protoOf(JsLocale)));
  }
  function JsLocale(locale) {
    this.p58_1 = locale;
  }
  protoOf(JsLocale).q58 = function () {
    return this.p58_1.language;
  };
  protoOf(JsLocale).g4r = function () {
    return this.p58_1.baseName;
  };
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return get_rtlLanguagesSet().n(_this__u8e3s4.q58());
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).e1q = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      tmp$ret$0 = new Locale(JsLocale_init_$Create$(item));
      tmp0_mapTo.a(tmp$ret$0);
    }
    return new LocaleList(tmp0_mapTo);
  };
  protoOf(createPlatformLocaleDelegate$1).c58 = function (languageTag) {
    return JsLocale_init_$Create$(languageTag);
  };
  var properties_initialized_JsPlatformLocale_js_kt_nild9t;
  function _init_properties_JsPlatformLocale_js_kt__92ki1d() {
    if (!properties_initialized_JsPlatformLocale_js_kt_nild9t) {
      properties_initialized_JsPlatformLocale_js_kt_nild9t = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().h7_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp;
    if (font instanceof LoadedFont) {
      tmp = Companion_getInstance_5().d3k(Companion_getInstance_6().i3c(font.t58_1));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function PlatformFont() {
    this.y58_1 = 0;
  }
  protoOf(PlatformFont).k4z = function () {
    return '' + getKClassFromExpression(this).mh() + '|' + this.z58();
  };
  function checkEvicted($this, now) {
    var expireTime = now.m9($this.a59_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var tmp0_takeWhile = $this.d59_1.a3();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_takeWhile.d();
    $l$loop: while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.d59_1.z2(item)).x(expireTime) < 0))
        break $l$loop;
      list.a(item);
    }
    var tmp0_iterator_0 = list.d();
    while (tmp0_iterator_0.e()) {
      var element = tmp0_iterator_0.f();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.c59_1.ye(element);
      $this.d59_1.ye(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.a59_1 = expireAfterNanos;
    this.b59_1 = currentNanos;
    this.c59_1 = HashMap_init_$Create$_0();
    this.d59_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).o58 = function (key, loader) {
    this.d59_1.ye(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.c59_1;
    var value = tmp0_getOrPut.z2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      tmp0_getOrPut.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.b59_1();
    // Inline function 'kotlin.collections.set' call
    this.d59_1.a5(key, now);
    checkEvicted(this, now);
    return tmp1_also;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.l58_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.m58_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.n58_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_30;
  function Companion_getInstance_45() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).d();
    $l$loop: while (tmp0_iterator.e()) {
      var codePoint = tmp0_iterator.f();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_45().l58_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_45().l58_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) ? (index + 1 | 0) < _this__u8e3s4.length : false) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_7(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.m59_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).r2y = function ($this$sequence, $completion) {
    var tmp = this.s2y($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).yl = function (p1, $completion) {
    return this.r2y(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.o59_1 = 0;
            this.p59_1 = get_codePoints(this.m59_1).d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.p59_1.e()) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.q59_1 = this.p59_1.f();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.y_1;
            var containsUpper = progression.z_1;
            var containsArg = this.q59_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.o59_1 = this.o59_1 + 1 | 0;
              this.dl_1 = 3;
              continue $sm;
            } else {
              if (this.q59_1 === 8297) {
                if (this.o59_1 > 0) {
                  this.o59_1 = this.o59_1 - 1 | 0;
                }
                this.dl_1 = 3;
                continue $sm;
              } else {
                if (this.o59_1 === 0) {
                  this.dl_1 = 2;
                  suspendResult = this.n59_1.i5(this.q59_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.dl_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.dl_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).s2y = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.m59_1, completion);
    i.n59_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r2y($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.z59_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).r2y = function ($this$sequence, $completion) {
    var tmp = this.s2y($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).yl = function (p1, $completion) {
    return this.r2y(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.b5a_1 = 0;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!(this.b5a_1 < this.z59_1.length)) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.c5a_1 = codePointAt(this.z59_1, this.b5a_1);
            this.dl_1 = 2;
            suspendResult = this.a5a_1.i5(this.c5a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b5a_1 = this.b5a_1 + charCount(this.c5a_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).s2y = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.z59_1, completion);
    i.a5a_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r2y($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.g4p_1 = new PlatformParagraphStyle();
  }
  var Companion_instance_31;
  function Companion_getInstance_46() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function PlatformParagraphStyle() {
    Companion_getInstance_46();
    this.x4o_1 = 0;
  }
  protoOf(PlatformParagraphStyle).y4o = function (other) {
    return this;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function Companion_32() {
    Companion_instance_32 = this;
    this.e4t_1 = new PlatformSpanStyle();
  }
  var Companion_instance_32;
  function Companion_getInstance_47() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function PlatformSpanStyle() {
    Companion_getInstance_47();
    this.q4r_1 = 0;
  }
  protoOf(PlatformSpanStyle).r4r = function (other) {
    return this;
  };
  protoOf(PlatformSpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    return true;
  };
  protoOf(PlatformSpanStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.j4u_1 = spanStyle;
    $this.k4u_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.k4u_1, other.k4u_1))
      return false;
    if (!equals(this.j4u_1, other.j4u_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.l4u_1 = 0;
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function lerp_12(start, stop, fraction) {
    return start;
  }
  function lerp_13(start, stop, fraction) {
    return start;
  }
  function Paragraph_1() {
  }
  function _get_text__de5ose($this) {
    return $this.t5a_1.f5a_1;
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var metrics = _get_lineMetrics__5iiuki($this);
    var inductionVariable = 0;
    var last = metrics.length;
    while (inductionVariable < last) {
      var line = metrics[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (offset < line.f3m_1) {
        return line;
      }
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (metrics.length === 0) {
      return null;
    }
    return last_0(metrics);
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _get_lineMetrics__5iiuki($this);
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
        if (vertical < element.n3m_1 + element.i3m_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp;
    if (_get_text__de5ose($this) === '') {
      var metrics = $this.u5a_1.a5b().w3c();
      var ascent = -metrics.q3d_1;
      var descent = metrics.r3d_1;
      var baseline = $this.v5a_1.w3m();
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.u5a_1.b5b().y3n();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var tmp_0;
      if (((tmp0_with.y3o() ? !tmp0_with.z3o() : false) ? tmp0_with.c3p() : false) ? tmp0_with.t3o() > 0.0 : false) {
        tmp_0 = tmp0_with.w33() * tmp0_with.t3o();
      } else {
        tmp_0 = ascent + descent;
      }
      var height = tmp_0;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
    } else {
      var tmp_1 = $this.v5a_1.e3n();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.v5a_1.a3n(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var from = offset - 1 | 0;
    var isRtl = $this.t5a_1.l5a_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.v5a_1.a3n(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charSequenceGet(_get_text__de5ose($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.d3p_1.z39_1 + box.d3p_1.z39_1 - box.d3p_1.x39_1;
          var rect = new Rect_0(0.0, box.d3p_1.z39_1, 0.0, bottom);
          return new TextBox(rect, box.f3p());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose($this))) {
            var bottom_0 = box.d3p_1.z39_1 + box.d3p_1.z39_1 - box.d3p_1.x39_1;
            var rect_0 = new Rect_0($this.v33(), box.d3p_1.z39_1, $this.v33(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.f3p());
          } else {
            var nextBox = first_0($this.v5a_1.a3n(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.d3p_1.w39_1, nextBox.d3p_1.x39_1, nextBox.d3p_1.w39_1, nextBox.d3p_1.z39_1);
            tmp_0 = new TextBox(rect_1, nextBox.f3p());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.p5a_1 = maxLines;
    this.q5a_1 = ellipsis;
    this.r5a_1 = constraints;
    this.s5a_1 = this.q5a_1 ? '\u2026' : '';
    var tmp = this;
    tmp.t5a_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.t5a_1.c5b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    tmp0_apply.d5b(this.p5a_1, this.s5a_1);
    tmp_0.u5a_1 = tmp0_apply;
    this.v5a_1 = this.u5a_1.e5b(this.v33());
    this.v5a_1.y3m(this.v33());
  }
  protoOf(SkiaParagraph).v33 = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.r5a_1);
  };
  protoOf(SkiaParagraph).w33 = function () {
    return this.v5a_1.w33();
  };
  protoOf(SkiaParagraph).u3m = function () {
    return this.t5a_1.n5a_1;
  };
  protoOf(SkiaParagraph).x4m = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.n3m_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).y4m = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.n3m_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).n4m = function () {
    return this.v5a_1.x3m();
  };
  protoOf(SkiaParagraph).m4m = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' ? true : this.v5a_1.f3n() < 1) {
      tmp = 1;
    } else {
      tmp = this.v5a_1.f3n();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).v4m = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.v5a_1.b3n();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.length);
    var inductionVariable = 0;
    var last = tmp0_map.length;
    while (inductionVariable < last) {
      var item = tmp0_map[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      tmp$ret$0 = toComposeRect(item.d3p_1);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp0_mapTo;
  };
  protoOf(SkiaParagraph).e4n = function (start, end) {
    var boxes = this.v5a_1.a3n(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).x3h(b.d3p_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).t4n = function (offset) {
    var horizontal = this.o4n(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.c3m_1 ? offset === _get_text__de5ose(this).length : false;
    var metrics = this.u5a_1.a5b().w3c();
    // Inline function 'kotlin.let' call
    var tmp0_let = line.h3m_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.q3d_1;
      tmp = coerceAtMost(tmp0_let, ascent);
    } else {
      tmp = tmp0_let;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    var tmp1_let = line.i3m_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.r3d_1;
      tmp_0 = coerceAtMost(tmp1_let, descent);
    } else {
      tmp_0 = tmp1_let;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.n3m_1 - asc, horizontal, line.n3m_1 + desc);
  };
  protoOf(SkiaParagraph).v4n = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m3m_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).x4n = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p3m();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).y4n = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.n3m_1 - tmp0_safe_receiver.h3m_1;
      tmp = Math.floor(tmp0_floor);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).z4n = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineBottom.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.n3m_1 + tmp0_safe_receiver.i3m_1;
      tmp = Math.floor(tmp0_floor);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).a4o = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3m_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).b4o = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c3m_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).c4o = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 ? metrics.c3m_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].d3m_1 : false) {
        tmp_1 = metrics.d3m_1;
      } else if (metrics.c3m_1 < _get_text__de5ose(this).length ? charSequenceGet(_get_text__de5ose(this), metrics.c3m_1) === _Char___init__impl__6a9atx(10) : false) {
        tmp_1 = metrics.c3m_1;
      } else {
        tmp_1 = metrics.e3m_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.d3m_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).u4n = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o3m_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).h4n = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o3m_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).o4n = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.t5a_1.l5a_1.equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return (prevBox == null ? nextBox == null : false) ? isRtl ? this.v33() : 0.0 : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.f3p().equals(prevBox.f3p()) ? cursorHorizontalPosition(nextBox, true) : (isLtr ? prevBox.f3p().equals(Direction_LTR_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : (isRtl ? prevBox.f3p().equals(Direction_RTL_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).p4n = function (offset) {
    return this.t5a_1.l5a_1;
  };
  protoOf(SkiaParagraph).q4n = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f3p();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.h7_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).k4n = function (position) {
    var glyphPosition = this.v5a_1.c3n(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).h3o_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.c3m_1 < expectedLine.d3m_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.m3m_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.p3m() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.v5a_1.a3n(expectedLine.c3m_1, expectedLine.g3m_1 ? expectedLine.d3m_1 : expectedLine.d3m_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.d3p_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.w39_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.m3m_1 : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.d3p_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.y39_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.p3m() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.v5a_1.c3n(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).h3o_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.v5a_1.c3n(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).h3o_1;
      var tmp_1;
      if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false) {
        tmp_1 = isNeutralDirection(codePointAt(_get_text__de5ose(this), correctedGlyphPosition));
      } else {
        tmp_1 = false;
      }
      var isNeutralChar = tmp_1;
      var tmp_2;
      if (!isNeutralChar) {
        var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_2 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.f3p(), Direction_RTL_getInstance());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).n4n = function (offset) {
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.d3p_1);
  };
  protoOf(SkiaParagraph).r4n = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if ((offset < _get_text__de5ose(this).length ? isWhitespace(charSequenceGet(_get_text__de5ose(this), offset)) : false) ? true : offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 ? !isWhitespace(charSequenceGet(_get_text__de5ose(this), offset - 1 | 0)) : false) {
        tmp = toTextRange(this.v5a_1.d3n(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.v5a_1.d3n(offset));
  };
  protoOf(SkiaParagraph).a4n = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.u5a_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.f5b(color, shadow, textDecoration);
    tmp0_with.g5b(drawStyle);
    tmp0_with.h5b(blendMode);
    tmp.v5a_1 = tmp0_with.e5b(this.v33());
    this.v5a_1.z3m(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).c4n = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.u5a_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.i5b(brush, Size(this.v33(), this.w33()), alpha, shadow, textDecoration);
    tmp0_with.g5b(drawStyle);
    tmp0_with.h5b(blendMode);
    tmp.v5a_1 = tmp0_with.e5b(this.v33());
    this.v5a_1.z3m(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.p3f_1, _this__u8e3s4.q3f_1);
  }
  function createFontFamilyResolver() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function createFontFamilyResolver_0(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).d4z = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.c4y_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.c4y_1;
    var result = skiaFontLoader.l5b(tmp0_elvis_lhs == null ? Companion_getInstance_18().s4s_1 : tmp0_elvis_lhs, typefaceRequest.d4y_1, typefaceRequest.e4y_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.j5b_1 = fontCache;
    this.k5b_1 = this.j5b_1;
  }
  protoOf(SkiaFontLoader).m5b = function () {
    return this.j5b_1.n5b_1;
  };
  protoOf(SkiaFontLoader).b53 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.x4w() === Companion_getInstance_21().z4w_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.x4w();
    var tmp;
    if (tmp0_subject === Companion_getInstance_21().y4w_1) {
      tmp = this.j5b_1.r5b(font);
    } else if (tmp0_subject === Companion_getInstance_21().z4w_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_4();
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var tmp1_success = this.j5b_1.r5b(font);
        tmp_0 = _Result___init__impl__xyqfz8(tmp1_success);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_4();
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp0_getOrNull = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
        tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_21().a4x_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.x4w()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).l5b = function (fontFamily, fontWeight, fontStyle) {
    return this.j5b_1.l5b(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).s5b = function (font, $completion) {
    return this.b53(font);
  };
  protoOf(SkiaFontLoader).k51 = function (font, $completion) {
    return this.s5b(font, $completion);
  };
  protoOf(SkiaFontLoader).k4z = function () {
    return this.k5b_1;
  };
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.w5a_1 = text;
    this.x5a_1 = new ParagraphBuilder_0(fontFamilyResolver, this.w5a_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.y5a_1 = null;
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.z5a_1 = NaN;
  }
  protoOf(ParagraphLayouter).a5b = function () {
    return this.x5a_1.a5b();
  };
  protoOf(ParagraphLayouter).b5b = function () {
    return this.x5a_1.b5b();
  };
  protoOf(ParagraphLayouter).d5b = function (maxLines, ellipsis) {
    if (!(this.x5a_1.y5b_1 === maxLines) ? true : !(this.x5a_1.x5b_1 === ellipsis)) {
      this.x5a_1.y5b_1 = maxLines;
      this.x5a_1.x5b_1 = ellipsis;
      this.y5a_1 = null;
    }
  };
  protoOf(ParagraphLayouter).f5b = function (color, shadow, textDecoration) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp = this.x5a_1.v5b_1.e3y();
    }
    var actualColor = tmp;
    if ((!equals(this.x5a_1.v5b_1.e3y(), actualColor) ? true : !equals(this.x5a_1.v5b_1.h4v(), shadow)) ? true : !equals(this.x5a_1.v5b_1.g4v(), textDecoration)) {
      this.x5a_1.v5b_1 = this.x5a_1.v5b_1.s4u(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.y5a_1 = null;
    }
  };
  protoOf(ParagraphLayouter).i5b = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.x5a_1.w5b_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.x5a_1.v5b_1.j4r(), brush)) {
      tmp_4 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_4 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_8().r34_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(this.x5a_1.v5b_1.h3v(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.x5a_1.v5b_1.h4v(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.x5a_1.v5b_1.g4v(), textDecoration);
    }
    if (tmp) {
      this.x5a_1.v5b_1 = this.x5a_1.v5b_1.u4u(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.x5a_1.w5b_1 = brushSize;
      this.y5a_1 = null;
    }
  };
  protoOf(ParagraphLayouter).g5b = function (drawStyle) {
    if (!equals(this.x5a_1.d5c_1, drawStyle)) {
      this.x5a_1.d5c_1 = drawStyle;
      this.y5a_1 = null;
    }
  };
  protoOf(ParagraphLayouter).h5b = function (blendMode) {
    if (!(this.x5a_1.e5c_1 === blendMode)) {
      this.x5a_1.e5c_1 = blendMode;
      this.y5a_1 = null;
    }
  };
  protoOf(ParagraphLayouter).e5b = function (width) {
    var paragraph = this.y5a_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.z5a_1, width)) {
        this.z5a_1 = width;
        paragraph.y3m(width);
      }
      tmp = paragraph;
    } else {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = this.x5a_1.df();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.y5a_1 = tmp0_apply;
      tmp0_apply.y3m(width);
      tmp = tmp0_apply;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = _this__u8e3s4 - other;
    return Math.abs(tmp0_abs) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'kotlin.getValue' call
    GenericFontFamiliesMapping$factory();
    return GenericFontFamiliesMapping$delegate.s();
  }
  var GenericFontFamiliesMapping$delegate;
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontLoadResult(typeface, aliases) {
    this.l5c_1 = typeface;
    this.m5c_1 = aliases;
    this.n5c_1 = 8;
  }
  function FontLoader() {
    this.o5c_1 = new FontCache();
    this.p5c_1 = createFontFamilyResolver_0(this.o5c_1);
    this.q5c_1 = 0;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().z2(generic.j4x_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Unknown generic font family ' + generic.j4x_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.p5b_1.n(key)) {
      $this.o5b_1.e3q(typeface, key);
      $this.p5b_1.a(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.t5c_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.u5c_1;
        var alias = tmp1_elvis_lhs == null ? typeface.v5c_1.i3k() : tmp1_elvis_lhs;
        ensureRegistered($this, typeface.v5c_1, alias);
        tmp = listOf_0(alias);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(fontFamily, Companion_getInstance_18().s4s_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_18().t4s_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.n5b_1 = FontCollection_init_$Create$();
    this.o5b_1 = new TypefaceFontProvider();
    this.p5b_1 = HashSet_init_$Create$();
    this.q5b_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.n5b_1.u3l(Companion_getInstance_9().g3e_1);
    this.n5b_1.t3l(this.o5b_1);
  }
  protoOf(FontCache).r5b = function (font) {
    var tmp = font.k4z();
    var typeface = this.q5b_1.o58(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.k4z());
    return new FontLoadResult(typeface, listOf_0(font.k4z()));
  };
  protoOf(FontCache).l5b = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).n3e(fontWeight.y4q_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.n5b_1.w3l(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function LoadedFont(identity, data, weight, style) {
    PlatformFont.call(this);
    this.s58_1 = identity;
    this.t58_1 = data;
    this.u58_1 = weight;
    this.v58_1 = style;
    this.w58_1 = Companion_getInstance_21().y4w_1;
    this.x58_1 = 0;
  }
  protoOf(LoadedFont).z58 = function () {
    return this.s58_1;
  };
  protoOf(LoadedFont).m3e = function () {
    return this.u58_1;
  };
  protoOf(LoadedFont).w4w = function () {
    return this.v58_1;
  };
  protoOf(LoadedFont).x4w = function () {
    return this.w58_1;
  };
  protoOf(LoadedFont).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFont))
      return false;
    if (!(this.s58_1 === other.s58_1))
      return false;
    if (!this.u58_1.equals(other.u58_1))
      return false;
    return this.v58_1 === other.v58_1;
  };
  protoOf(LoadedFont).hashCode = function () {
    var result = getStringHashCode(this.s58_1);
    result = imul(31, result) + this.u58_1.hashCode() | 0;
    result = imul(31, result) + FontStyle__hashCode_impl_7qhg4w(this.v58_1) | 0;
    return result;
  };
  protoOf(LoadedFont).toString = function () {
    return "LoadedFont(identity='" + this.s58_1 + "', weight=" + this.u58_1 + ', style=' + new FontStyle(this.v58_1) + ')';
  };
  function Font_0(identity, data, weight, style) {
    weight = weight === VOID ? Companion_getInstance_24().f4s_1 : weight;
    style = style === VOID ? Companion_getInstance_22().m4s_1 : style;
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    return new LoadedFont(identity, data, weight, style);
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().h7_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_18().t4s_1.j4x_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_18().u4s_1.j4x_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_18().v4s_1.j4x_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_18().w4s_1.j4x_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_18().t4s_1.j4x_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_18().u4s_1.j4x_1, listOf_0('Times New Roman')), to(Companion_getInstance_18().v4s_1.j4x_1, listOf_0('Consolas')), to(Companion_getInstance_18().w4s_1.j4x_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_18().t4s_1.j4x_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_18().u4s_1.j4x_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_18().v4s_1.j4x_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_18().w4s_1.j4x_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_18().t4s_1.j4x_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_18().u4s_1.j4x_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_18().v4s_1.j4x_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_18().w4s_1.j4x_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_18().t4s_1.j4x_1, listOf_0('Arial')), to(Companion_getInstance_18().u4s_1.j4x_1, listOf_0('Times New Roman')), to(Companion_getInstance_18().v4s_1.j4x_1, listOf_0('Consolas')), to(Companion_getInstance_18().w4s_1.j4x_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_10().w3v_1 : blendMode;
    canvas.f3z();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = _this__u8e3s4.h4m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.m(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.o4m_1.c4n(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.i3z(0.0, item.o4m_1.w33());
      }
       while (inductionVariable <= last);
    canvas.g3z();
  }
  function get_DefaultFontSize_0() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_8().r34_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    var tmp = density.u35(spanStyle.x4p_1);
    var tmp_0;
    if (get_isUnspecified(spanStyle.d4q_1)) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp_0 = density.u35(spanStyle.d4q_1);
    }
    ComputedStyle.call($this, spanStyle.w4p_1, brushSize, tmp, spanStyle.y4p_1, spanStyle.z4p_1, spanStyle.a4q_1, spanStyle.b4q_1, spanStyle.c4q_1, tmp_0, spanStyle.e4q_1, spanStyle.f4q_1, spanStyle.g4q_1, spanStyle.h4q_1, spanStyle.i4q_1, spanStyle.j4q_1, spanStyle.l4q_1, blendMode);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, objectCreate(protoOf(ComputedStyle)));
  }
  function toTextPaint($this) {
    // Inline function 'kotlin.let' call
    var tmp0_let = Paint_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>' call
      // Inline function 'kotlin.with' call
      var tmp0_with = asComposePaint(tmp0_let);
      // Inline function 'kotlin.contracts.contract' call
      tmp0_with.d3y($this.w5c_1.e3y());
      applyBrush(tmp0_with, $this.w5c_1.j4r(), $this.x5c_1, $this.w5c_1.h3v());
      applyDrawStyle(tmp0_with, $this.l5d_1);
      tmp0_with.s4a($this.m5d_1);
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      if ((!(tmp0_with.f3y() == null) ? true : !(tmp0_with.n4i() === Companion_getInstance_11().g45_1)) ? true : !tmp0_let.a3h()) {
        tmp = tmp0_let;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
      break $l$block;
    }
    return tmp$ret$2;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode) {
    background = background === VOID ? Companion_getInstance().c3y_1 : background;
    this.w5c_1 = textForegroundStyle;
    this.x5c_1 = brushSize;
    this.y5c_1 = fontSize;
    this.z5c_1 = fontWeight;
    this.a5d_1 = fontStyle;
    this.b5d_1 = fontSynthesis;
    this.c5d_1 = fontFamily;
    this.d5d_1 = fontFeatureSettings;
    this.e5d_1 = letterSpacing;
    this.f5d_1 = baselineShift;
    this.g5d_1 = textGeometricTransform;
    this.h5d_1 = localeList;
    this.i5d_1 = background;
    this.j5d_1 = textDecoration;
    this.k5d_1 = shadow;
    this.l5d_1 = drawStyle;
    this.m5d_1 = blendMode;
  }
  protoOf(ComputedStyle).n5d = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = this.w5c_1.e3y();
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      res.p3g(toArgb(this.w5c_1.e3y()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.k3p(foreground);
    }
    var tmp0_safe_receiver = this.a5d_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.q3p(toSkFontStyle(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.j5d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.o3p(toSkDecorationStyle(tmp1_safe_receiver, this.w5c_1.e3y()));
    }
    if (!equals(this.i5d_1, Companion_getInstance().c3y_1)) {
      // Inline function 'kotlin.also' call
      var tmp1_also = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp1_also.p3g(toArgb(this.i5d_1));
      res.m3p(tmp1_also);
    }
    var tmp2_safe_receiver = this.z5c_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.q3p(res.g3k().n3e(tmp2_safe_receiver.y4q_1));
    }
    var tmp3_safe_receiver = this.k5d_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.s3p(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.e5d_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.x3p(tmp4_safe_receiver);
    }
    var tmp_0 = Companion_getInstance_12();
    var tmp$ret$8;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.d5d_1;
    tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.u3p(tmp_0.i3d(tmp$ret$8));
    res.r3o(this.y5c_1);
    var tmp5_safe_receiver = this.c5d_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.z5c_1;
      var tmp_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_24().f4s_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.a5d_1;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_22().m4s_1;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_2;
      var tmp2_elvis_lhs = this.b5d_1;
      var tmp_5;
      var tmp_6 = tmp2_elvis_lhs;
      if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_23().o4s_1;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var tmp_7 = fontFamilyResolver.f4z(tmp5_safe_receiver, tmp_1, tmp_4, tmp_5).s();
      var resolved = tmp_7 instanceof FontLoadResult ? tmp_7 : THROW_CCE();
      var tmp$ret$9;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = resolved.m5c_1;
      tmp$ret$9 = copyToArray(tmp0_toTypedArray);
      res.v3p(tmp$ret$9);
    }
    var tmp6_safe_receiver = this.f5d_1;
    var tmp_8 = tmp6_safe_receiver;
    if ((tmp_8 == null ? null : new BaselineShift(tmp_8)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var fontMetrics = res.b3q();
      res.z3p(_BaselineShift___get_multiplier__impl__qhmjek(tmp6_safe_receiver) * fontMetrics.q3d_1);
    }
    return res;
  };
  protoOf(ComputedStyle).o5d = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.y5c_1, other.x4p_1);
    this.w5c_1 = this.w5c_1.p4r(other.w4p_1);
    var tmp0_safe_receiver = other.b4q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c5d_1 = tmp0_safe_receiver;
    }
    this.y5c_1 = fontSize;
    var tmp1_safe_receiver = other.y4p_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z5c_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.z4p_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.a5d_1 = tmp2_safe_receiver;
    }
    var tmp3_safe_receiver = other.a4q_1;
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.b5d_1 = tmp3_safe_receiver;
    }
    var tmp4_safe_receiver = other.c4q_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.d5d_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.d4q_1)) {
      var tmp_1 = this;
      // Inline function 'kotlin.with' call
      var tmp0_with = other.d4q_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp_2;
      if (_TextUnit___get_isEm__impl__esrmtl(tmp0_with)) {
        tmp_2 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp0_with);
      } else if (_TextUnit___get_isSp__impl__8c3r6q(tmp0_with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        tmp_2 = density.u35(tmp0_with);
      } else {
        throw UnsupportedOperationException_init_$Create$_0();
      }
      tmp_1.e5d_1 = tmp_2;
    }
    var tmp5_safe_receiver = other.e4q_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.f5d_1 = tmp5_safe_receiver;
    }
    var tmp6_safe_receiver = other.f4q_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.g5d_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.g4q_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h5d_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp1_get_isSpecified_hgvfca = other.h4q_1;
    if (!equals(_Color___get_value__impl__1pls5m(tmp1_get_isSpecified_hgvfca), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1))) {
      this.i5d_1 = other.h4q_1;
    }
    var tmp8_safe_receiver = other.i4q_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.j5d_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.j4q_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.k5d_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.l4q_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.l5d_1 = tmp10_safe_receiver;
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.w5c_1;
    var tmp_0 = new Size_0(this.x5c_1);
    var tmp_1 = this.y5c_1;
    var tmp_2 = this.z5c_1;
    var tmp_3 = this.a5d_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.b5d_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.c5d_1;
    var tmp_8 = this.d5d_1;
    var tmp_9 = this.e5d_1;
    var tmp_10 = this.f5d_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + (tmp_10 == null ? null : new BaselineShift(tmp_10)) + ', textGeometricTransform=' + this.g5d_1 + ', localeList=' + this.h5d_1 + ', background=' + new Color(this.i5d_1) + ', textDecoration=' + this.j5d_1 + ', shadow=' + this.k5d_1 + ', drawStyle=' + this.l5d_1 + ', blendMode=' + new BlendMode(this.m5d_1) + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.w5c_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.x5c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y5c_1) | 0;
    result = imul(result, 31) + (this.z5c_1 == null ? 0 : this.z5c_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.a5d_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.a5d_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.b5d_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.b5d_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.c5d_1 == null ? 0 : hashCode(this.c5d_1)) | 0;
    result = imul(result, 31) + (this.d5d_1 == null ? 0 : getStringHashCode(this.d5d_1)) | 0;
    result = imul(result, 31) + (this.e5d_1 == null ? 0 : getNumberHashCode(this.e5d_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.f5d_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.f5d_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.g5d_1 == null ? 0 : this.g5d_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h5d_1 == null ? 0 : this.h5d_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.i5d_1) | 0;
    result = imul(result, 31) + (this.j5d_1 == null ? 0 : this.j5d_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k5d_1 == null ? 0 : this.k5d_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l5d_1 == null ? 0 : hashCode(this.l5d_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.m5d_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.w5c_1, tmp0_other_with_cast.w5c_1))
      return false;
    if (!equals(this.x5c_1, tmp0_other_with_cast.x5c_1))
      return false;
    if (!equals(this.y5c_1, tmp0_other_with_cast.y5c_1))
      return false;
    if (!equals(this.z5c_1, tmp0_other_with_cast.z5c_1))
      return false;
    var tmp = this.a5d_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.a5d_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.b5d_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.b5d_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.c5d_1, tmp0_other_with_cast.c5d_1))
      return false;
    if (!(this.d5d_1 == tmp0_other_with_cast.d5d_1))
      return false;
    if (!equals(this.e5d_1, tmp0_other_with_cast.e5d_1))
      return false;
    var tmp_5 = this.f5d_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.f5d_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.g5d_1, tmp0_other_with_cast.g5d_1))
      return false;
    if (!equals(this.h5d_1, tmp0_other_with_cast.h5d_1))
      return false;
    if (!equals(this.i5d_1, tmp0_other_with_cast.i5d_1))
      return false;
    if (!equals(this.j5d_1, tmp0_other_with_cast.j5d_1))
      return false;
    if (!equals(this.k5d_1, tmp0_other_with_cast.k5d_1))
      return false;
    if (!equals(this.l5d_1, tmp0_other_with_cast.l5d_1))
      return false;
    if (!(this.m5d_1 === tmp0_other_with_cast.m5d_1))
      return false;
    return true;
  };
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_22().n4s_1 ? Companion_getInstance_13().k3e_1 : Companion_getInstance_13().i3e_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.f58(Companion_getInstance_39().c4t_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.f58(Companion_getInstance_39().d4t_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow_0(toArgb(_this__u8e3s4.j46_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.k46_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.k46_1), _this__u8e3s4.l46_1);
  }
  function fontSizeInHierarchy(density, base, other) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      tmp = base * _TextUnit___get_value__impl__hpbx0k(other);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(other)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.fontSizeInHierarchy.<anonymous>' call
      tmp = density.u35(other);
    } else {
      throw IllegalStateException_init_$Create$('Unexpected size in fontSizeInHierarchy');
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    opposite = opposite === VOID ? false : opposite;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.f3p().h7_1) {
      case 1:
        tmp = opposite ? _this__u8e3s4.d3p_1.w39_1 : _this__u8e3s4.d3p_1.y39_1;
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.d3p_1.y39_1 : _this__u8e3s4.d3p_1.w39_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.p5d_1 = position;
    this.q5d_1 = style;
    this.r5d_1 = 8;
  }
  protoOf(StyleAdd).s5d = function () {
    return this.p5d_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.p5d_1 + ', style=' + this.q5d_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.p5d_1;
    result = imul(result, 31) + this.q5d_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.p5d_1 === tmp0_other_with_cast.p5d_1))
      return false;
    if (!this.q5d_1.equals(tmp0_other_with_cast.q5d_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.t5d_1 = cut;
    this.u5d_1 = width;
    this.v5d_1 = height;
    this.w5d_1 = position$factory(this.t5d_1);
    this.x5d_1 = 8;
  }
  protoOf(PutPlaceholder).s5d = function () {
    // Inline function 'kotlin.getValue' call
    position$factory_0();
    return this.w5d_1.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.t5d_1 + ', width=' + this.u5d_1 + ', height=' + this.v5d_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.t5d_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.u5d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v5d_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.t5d_1.equals(tmp0_other_with_cast.t5d_1))
      return false;
    if (!equals(this.u5d_1, tmp0_other_with_cast.u5d_1))
      return false;
    if (!equals(this.v5d_1, tmp0_other_with_cast.v5d_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.y5d_1 = cut;
    this.z5d_1 = position$factory_1(this.y5d_1);
    this.a5e_1 = 8;
  }
  protoOf(EndPlaceholder).s5d = function () {
    // Inline function 'kotlin.getValue' call
    position$factory_2();
    return this.z5d_1.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.y5d_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.y5d_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.y5d_1.equals(tmp0_other_with_cast.y5d_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.b5e_1 = position;
    this.c5e_1 = style;
    this.d5e_1 = 0;
  }
  protoOf(StyleAdd_0).s5d = function () {
    return this.b5e_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.b5e_1 + ', style=' + this.c5e_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.b5e_1;
    result = imul(result, 31) + this.c5e_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.b5e_1 === tmp0_other_with_cast.b5e_1))
      return false;
    if (!this.c5e_1.equals(tmp0_other_with_cast.c5e_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.e5e_1 = position;
    this.f5e_1 = style;
    this.g5e_1 = 0;
  }
  protoOf(StyleRemove).s5d = function () {
    return this.e5e_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.e5e_1 + ', style=' + this.f5e_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.e5e_1;
    result = imul(result, 31) + this.f5e_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.e5e_1 === tmp0_other_with_cast.e5e_1))
      return false;
    if (!this.f5e_1.equals(tmp0_other_with_cast.f5e_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.h5e_1 = position;
    this.i5e_1 = placeholder;
    this.j5e_1 = 0;
  }
  protoOf(PutPlaceholder_0).s5d = function () {
    return this.h5e_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.h5e_1 + ', placeholder=' + this.i5e_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.h5e_1;
    result = imul(result, 31) + this.i5e_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.h5e_1 === tmp0_other_with_cast.h5e_1))
      return false;
    if (!this.i5e_1.equals(tmp0_other_with_cast.i5e_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.k5e_1 = position;
    this.l5e_1 = 0;
  }
  protoOf(EndPlaceholder_0).s5d = function () {
    return this.k5e_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.k5e_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.k5e_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.k5e_1 === tmp0_other_with_cast.k5e_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.f5c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.g5c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.i5c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var tmp0_iterator = spans.d();
    while (tmp0_iterator.e()) {
      var span = tmp0_iterator.f();
      cuts.a(new StyleAdd_0(span.p4k_1, span.o4k_1));
      cuts.a(new StyleRemove(span.q4k_1, span.o4k_1));
    }
    var tmp1_iterator = placeholders.d();
    while (tmp1_iterator.e()) {
      var placeholder = tmp1_iterator.f();
      cuts.a(new PutPlaceholder_0(placeholder.p4k_1, placeholder.o4k_1));
      cuts.a(new EndPlaceholder_0(placeholder.q4k_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.g() > 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.d();
    while (tmp2_iterator.e()) {
      var cut = tmp2_iterator.f();
      if (cut instanceof StyleAdd_0) {
        activeStyles.a(cut.c5e_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.s5d(), ops);
        if (prev == null) {
          var tmp_0 = cut.s5d();
          // Inline function 'kotlin.also' call
          var tmp0_also = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          tmp0_also.o5d($this.b5c_1, cut.c5e_1);
          ops.a(new StyleAdd(tmp_0, tmp0_also));
        } else {
          prev.q5d_1.o5d($this.b5c_1, cut.c5e_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.y3(cut.f5e_1);
          ops.a(new StyleAdd(cut.s5d(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.b5c_1, currentStyle.y5c_1, cut.i5e_1.h4p_1), fontSizeInHierarchy($this.b5c_1, currentStyle.y5c_1, cut.i5e_1.i4p_1));
            ops.a(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.a(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.b5c_1, activeStyles.m(0), $this.w5b_1, $this.e5c_1);
    var inductionVariable = 1;
    var last = activeStyles.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.o5d($this.b5c_1, activeStyles.m(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).d();
    while (tmp0_iterator.e()) {
      var prevOp = tmp0_iterator.f();
      if (prevOp.s5d() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.z3n(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.j4v();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      pStyle.b3o(toSkAlignment(tmp0_safe_receiver));
    }
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = style.l4v();
    if (!get_isUnspecified(tmp0_get_isSpecified_4wup3r)) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.w3o(true);
      strutStyle.a3p(true);
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var fontSize = $this.b5c_1.u35(orDefaultFontSize(style.v4u()));
      // Inline function 'kotlin.with' call
      var tmp2_with = style.l4v();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var tmp_0;
      if (_TextUnit___get_isSp__impl__8c3r6q(tmp2_with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
        tmp_0 = $this.b5c_1.u35(tmp2_with);
      } else if (_TextUnit___get_isEm__impl__esrmtl(tmp2_with)) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp2_with);
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      var lineHeight = tmp_0;
      strutStyle.u3o(lineHeight / fontSize);
      strutStyle.r3o(fontSize);
      pStyle.x3n(strutStyle);
    }
    pStyle.a3o(toSkDirection($this.c5c_1));
    var tmp1_safe_receiver = $this.v5b_1.m4v();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.b5c_1;
      // Inline function 'kotlin.contracts.contract' call
      pStyle.e3o(new TextIndent(tmp0_with.u35(tmp1_safe_receiver.v4q_1), tmp0_with.u35(tmp1_safe_receiver.w4q_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.o58(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.m5e_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).nj = function (a, b) {
    return this.m5e_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.s5d();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$1 = b.s5d();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.n5d(this$0.t5b_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.v5b_1.z4u();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.v5b_1.w4u();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_24().f4s_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.v5b_1.x4u();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_22().m4s_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.v5b_1.y4u();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_23().p4s_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.t5b_1.f4z(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).s();
        tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l5c_1, _get_defaultStyle__bt02u3(this$0).y5c_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.a5b().w3c().w33();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_8().r34_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().x44_1 : blendMode;
    this.t5b_1 = fontFamilyResolver;
    this.u5b_1 = text;
    this.v5b_1 = textStyle;
    this.w5b_1 = brushSize;
    this.x5b_1 = ellipsis;
    this.y5b_1 = maxLines;
    this.z5b_1 = spanStyles;
    this.a5c_1 = placeholders;
    this.b5c_1 = density;
    this.c5c_1 = textDirection;
    this.d5c_1 = drawStyle;
    this.e5c_1 = blendMode;
    var tmp = this;
    tmp.j5c_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.k5c_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).b5b = function () {
    var tmp = this.h5c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  protoOf(ParagraphBuilder_0).df = function () {
    this.f5c_1 = copyWithDefaultFontSize(this.v5b_1.n4u(), this.d5c_1);
    this.g5c_1 = ComputedStyle_init_$Create$(this.b5c_1, _get_initialStyle__6to25e(this), this.w5b_1, this.e5c_1);
    this.i5c_1 = makeOps(this, this.z5b_1, this.a5c_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.v5b_1, _get_defaultStyle__bt02u3(this));
    this.h5c_1 = ps;
    if (!(this.y5b_1 === IntCompanionObject_getInstance().MAX_VALUE)) {
      ps.c3o(this.y5b_1);
      ps.d3o(this.x5b_1);
    }
    var tmp = this.t5b_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).v4y_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.m5b();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).d();
    while (tmp1_iterator.e()) {
      var op = tmp1_iterator.f();
      if (addText ? pos < op.s5d() : false) {
        pb.l3n(toString(charSequenceSubSequence(this.u5b_1, pos, op.s5d())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.q5d_1.c5d_1;
        var tmp3_elvis_lhs = op.q5d_1.z5c_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_24().f4s_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.q5d_1.a5d_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_22().m4s_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.q5d_1.b5d_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_23().p4s_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.t5b_1.f4z(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.k3n(makeSkTextStyle(this, op.q5d_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.u5d_1, op.v5d_1, toSkPlaceholderAlignment(op.t5d_1.i5e_1.j4p_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.m3n(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.s5d();
    }
    if (addText ? pos < this.u5b_1.length : false) {
      pb.l3n(toString(charSequenceSubSequence(this.u5b_1, pos, this.u5b_1.length)));
    }
    return pb.df();
  };
  protoOf(ParagraphBuilder_0).a5b = function () {
    // Inline function 'kotlin.getValue' call
    defaultFont$factory();
    return this.j5c_1.s();
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.x4p_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.d4q_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.d4q_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * tmp0_times);
    } else {
      tmp = _this__u8e3s4.d4q_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.m4r(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_14().k4p_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().o4p_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().p4p_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().q4p_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().l4p_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().m4p_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().n4p_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid PlaceholderVerticalAlign.');
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_38().l4o_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_38().m4o_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_38().n4o_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_38().o4o_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_38().p4o_1) {
      tmp = Alignment_START_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_38().q4o_1) {
      tmp = Alignment_END_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextAlign');
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = get_DefaultFontSize_0();
      var tmp1_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(tmp0_times);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_times), _TextUnit___get_value__impl__hpbx0k(tmp0_times) * tmp1_times);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.h7_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.h5e_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.s5d();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.k5e_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.s5d();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.a5b();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function _init_properties_SkiaParagraph_skiko_kt__cbqn0t() {
    if (!properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.f5a_1, $this.l5a_1, $this.g5a_1, $this.h5a_1, $this.i5a_1, $this.j5a_1, $this.k5a_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.f5a_1 = text;
    this.g5a_1 = style;
    this.h5a_1 = spanStyles;
    this.i5a_1 = placeholders;
    this.j5a_1 = density;
    this.k5a_1 = fontFamilyResolver;
    this.l5a_1 = resolveTextDirection_1(this.f5a_1, this.g5a_1.k4v(), this.g5a_1.e4v());
    this.m5a_1 = newLayouter(this);
    this.n5a_1 = 0.0;
    this.o5a_1 = 0.0;
    var tmp = ensureNotNull(this.m5a_1);
    FloatCompanionObject_getInstance();
    var para = tmp.e5b(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = para.u3m();
    tmp_0.n5a_1 = Math.ceil(tmp0_ceil);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var tmp1_ceil = para.v3m();
    tmp_1.o5a_1 = Math.ceil(tmp1_ceil);
  }
  protoOf(SkiaParagraphIntrinsics).c5b = function () {
    var tmp0_elvis_lhs = this.m5a_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.m5a_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).u3m = function () {
    return this.n5a_1;
  };
  protoOf(SkiaParagraphIntrinsics).v3m = function () {
    return this.o5a_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_40().v4v_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_40().t4v_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_40().u4v_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_40().v4v_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_40().w4v_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_40().x4v_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextDirection.');
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_45().m58_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_45().n58_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_getInstance_34().e1q() : locale).e4r_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function applyBrush(_this__u8e3s4, brush, size, alpha) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    var tmp_0;
    var tmp_1;
    if (brush instanceof SolidColor) {
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var tmp0_get_isSpecified_4wup3r = brush.i3y_1;
      tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().c3y_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_2;
      if (brush instanceof ShaderBrush) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_2 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_8().r34_1));
      } else {
        tmp_2 = false;
      }
      tmp_0 = tmp_2;
    }
    if (tmp_0) {
      brush.l3x(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.w3g(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      _this__u8e3s4.c4a(Companion_getInstance_11().g45_1);
    } else {
      if (drawStyle instanceof Stroke) {
        _this__u8e3s4.c4a(Companion_getInstance_11().h45_1);
        _this__u8e3s4.r3g(drawStyle.d4a_1);
        _this__u8e3s4.k4a(drawStyle.e4a_1);
        _this__u8e3s4.m4a(drawStyle.g4a_1);
        _this__u8e3s4.i4a(drawStyle.f4a_1);
        _this__u8e3s4.o4a(drawStyle.h4a_1);
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.r4o_1 = _LineBreak___init__impl__o5i11q(1);
    this.s4o_1 = _LineBreak___init__impl__o5i11q(2);
    this.t4o_1 = _LineBreak___init__impl__o5i11q(3);
  }
  var Companion_instance_33;
  function Companion_getInstance_48() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.e4p_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_48();
    this.e4p_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.e4p_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.e4p_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.e4p_1, other);
  };
  function Companion_34() {
    Companion_instance_34 = this;
    this.a4p_1 = new TextMotion();
    this.b4p_1 = new TextMotion();
  }
  var Companion_instance_34;
  function Companion_getInstance_49() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function TextMotion() {
    Companion_getInstance_49();
    this.n5e_1 = 0;
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).g4z = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).h4z = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).i4z = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).j4z = interceptFontSynthesis;
  protoOf(_no_name_provided__qut3iv).u6 = get;
  protoOf(_no_name_provided__qut3iv).a7 = fold;
  protoOf(_no_name_provided__qut3iv).z6 = minusKey;
  protoOf(_no_name_provided__qut3iv).b7 = plus_0;
  protoOf(Unspecified).p4r = merge;
  protoOf(Unspecified).s4r = takeOrElse;
  protoOf(BrushStyle).p4r = merge;
  protoOf(BrushStyle).s4r = takeOrElse;
  protoOf(ColorStyle).p4r = merge;
  protoOf(ColorStyle).s4r = takeOrElse;
  protoOf(PlatformFont).x4w = get_loadingStrategy;
  protoOf(SkiaParagraph).d5a = paint$default;
  protoOf(SkiaParagraph).e5a = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).k4o = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontFamily_0;
  _.$_$.b = FontStyle;
  _.$_$.c = FontSynthesis;
  _.$_$.d = createFontFamilyResolver;
  _.$_$.e = CommitTextCommand;
  _.$_$.f = DeleteAllCommand;
  _.$_$.g = DeleteSurroundingTextCommand;
  _.$_$.h = EditProcessor;
  _.$_$.i = FinishComposingTextCommand;
  _.$_$.j = ImeAction;
  _.$_$.k = ImeOptions;
  _.$_$.l = KeyboardCapitalization;
  _.$_$.m = KeyboardType;
  _.$_$.n = PasswordVisualTransformation;
  _.$_$.o = PlatformTextInputPluginRegistryImpl;
  _.$_$.p = notifyFocusedRect;
  _.$_$.q = PlatformTextInputService;
  _.$_$.r = SetSelectionCommand;
  _.$_$.s = TextFieldValue;
  _.$_$.t = TextInputService;
  _.$_$.u = TransformedText;
  _.$_$.v = getSelectedText;
  _.$_$.w = getTextAfterSelection;
  _.$_$.x = getTextBeforeSelection;
  _.$_$.y = FontLoader;
  _.$_$.z = Font_0;
  _.$_$.a1 = TextAlign;
  _.$_$.b1 = TextOverflow;
  _.$_$.c1 = MultiParagraphIntrinsics;
  _.$_$.d1 = MultiParagraph;
  _.$_$.e1 = ParagraphIntrinsics_0;
  _.$_$.f1 = Paragraph;
  _.$_$.g1 = Paragraph_0;
  _.$_$.h1 = TextLayoutResult;
  _.$_$.i1 = TextRange_1;
  _.$_$.j1 = TextRange_0;
  _.$_$.k1 = TextRange;
  _.$_$.l1 = lerp_6;
  _.$_$.m1 = resolveDefaults;
  _.$_$.n1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.o1 = CommitTextCommand_init_$Create$;
  _.$_$.p1 = TextFieldValue_init_$Create$;
  _.$_$.q1 = AnnotatedString_init_$Create$;
  _.$_$.r1 = Builder_init_$Create$;
  _.$_$.s1 = SpanStyle_init_$Create$;
  _.$_$.t1 = TextLayoutInput_init_$Create$;
  _.$_$.u1 = TextStyle_init_$Create$_1;
  _.$_$.v1 = _FontStyle___init__impl__jcnduf;
  _.$_$.w1 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.x1 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.y1 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.z1 = _TextOverflow___init__impl__obguoe;
  _.$_$.a2 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.b2 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.c2 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.d2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.e2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.f2 = _TextRange___get_max__impl__owm8m;
  _.$_$.g2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.h2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.i2 = _TextRange___get_start__impl__ww4t90;
  _.$_$.j2 = Companion_getInstance_18;
  _.$_$.k2 = Companion_getInstance_22;
  _.$_$.l2 = Companion_getInstance_23;
  _.$_$.m2 = Companion_getInstance_24;
  _.$_$.n2 = Companion_getInstance_27;
  _.$_$.o2 = Companion_getInstance_28;
  _.$_$.p2 = Companion_getInstance_29;
  _.$_$.q2 = Companion_getInstance_30;
  _.$_$.r2 = Companion_getInstance_31;
  _.$_$.s2 = Companion_getInstance_33;
  _.$_$.t2 = Companion_getInstance_38;
  _.$_$.u2 = Companion_getInstance_39;
  _.$_$.v2 = Companion_getInstance_44;
  _.$_$.w2 = TextPainter_getInstance;
  _.$_$.x2 = Companion_getInstance_15;
  _.$_$.y2 = Companion_getInstance_16;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-text.js.map
