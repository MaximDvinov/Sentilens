(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-unit'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-unit'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-unit'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-unit'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-unit'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-unit'.");
    }
    root['compose-multiplatform-core-ui-unit'] = factory(typeof this['compose-multiplatform-core-ui-unit'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var Long = kotlin_kotlin.$_$.jj;
  var toString = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.il;
  var protoOf = kotlin_kotlin.$_$.xd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var toLong = kotlin_kotlin.$_$.ae;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var coerceIn = kotlin_kotlin.$_$.af;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var isInfinite = kotlin_kotlin.$_$.nk;
  var equals = kotlin_kotlin.$_$.oc;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var floatFromBits = kotlin_kotlin.$_$.rc;
  var compareTo = kotlin_kotlin.$_$.lc;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var Comparable = kotlin_kotlin.$_$.zi;
  var toBits = kotlin_kotlin.$_$.al;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.dj;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Constraints, 'Constraints', classMeta);
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.q35();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.s35(_this__u8e3s4);
    var tmp;
    if (isInfinite(px)) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      tmp$ret$0 = roundToInt(px);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_8().w35_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Density.toPx.<anonymous>' call
      tmp$ret$0 = 'Only Sp can convert to Px';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.r35() * this.q35();
  }
  function roundToPx_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.u35(_this__u8e3s4);
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    return tmp$ret$0;
  }
  function toDp(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0_get_dp_bnsrxl = _this__u8e3s4 / this.q35();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0_get_dp_bnsrxl);
    return tmp$ret$0;
  }
  function toDp_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0_get_dp_bnsrxl = _this__u8e3s4 / this.q35();
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0_get_dp_bnsrxl);
    return tmp$ret$0;
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().d36_1));
    if (tmp$ret$0) {
      tmp = Size(this.s35(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.s35(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance().r34_1;
    }
    return tmp;
  }
  setMetadataFor(Density, 'Density', interfaceMeta);
  setMetadataFor(DensityImpl, 'DensityImpl', classMeta, VOID, [Density]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Dp, 'Dp', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DpOffset, 'DpOffset', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(IntOffset, 'IntOffset', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(IntRect, 'IntRect', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(IntSize, 'IntSize', classMeta);
  setMetadataFor(LayoutDirection, 'LayoutDirection', classMeta, Enum);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TextUnit, 'TextUnit', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(TextUnitType, 'TextUnitType', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Velocity, 'Velocity', classMeta);
  //endregion
  function bitsNeedForSize($this, size) {
    var tmp;
    if (size < 8191) {
      tmp = 13;
    } else if (size < 32767) {
      tmp = 15;
    } else if (size < 65535) {
      tmp = 16;
    } else if (size < 262143) {
      tmp = 18;
    } else {
      throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in ' + 'Constraints');
    }
    return tmp;
  }
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _get_focusIndex__7g9rf3($this) {
    var tmp = _Constraints___get_value__impl__3ah2ax($this);
    Companion_getInstance_0();
    return tmp.vb(new Long(3, 0)).f1();
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    var mask = Companion_getInstance_0().i35_1[_get_focusIndex__7g9rf3($this)];
    return _Constraints___get_value__impl__3ah2ax($this).z9(2).f1() & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    var mask = Companion_getInstance_0().i35_1[_get_focusIndex__7g9rf3($this)];
    var width = _Constraints___get_value__impl__3ah2ax($this).z9(33).f1() & mask;
    var tmp;
    if (width === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = width - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().j35_1[focus];
    var offset = Companion_getInstance_0().h35_1[focus];
    return _Constraints___get_value__impl__3ah2ax($this).z9(offset).f1() & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().j35_1[focus];
    var offset = Companion_getInstance_0().h35_1[focus] + 31 | 0;
    var height = _Constraints___get_value__impl__3ah2ax($this).z9(offset).f1() & mask;
    var tmp;
    if (height === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = height - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    var mask = Companion_getInstance_0().i35_1[_get_focusIndex__7g9rf3($this)];
    return !((_Constraints___get_value__impl__3ah2ax($this).z9(33).f1() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().j35_1[focus];
    var offset = Companion_getInstance_0().h35_1[focus] + 31 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).z9(offset).f1() & mask) === 0);
  }
  function _Constraints___get_hasFixedWidth__impl__4p17wc($this) {
    return _Constraints___get_maxWidth__impl__uuyqc($this) === _Constraints___get_minWidth__impl__hi9lfi($this);
  }
  function _Constraints___get_hasFixedHeight__impl__y56fxx($this) {
    return _Constraints___get_maxHeight__impl__dt3e8z($this) === _Constraints___get_minHeight__impl__ev4bgx($this);
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minHeight >= 0 ? minWidth >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp;
    if (maxWidth >= minWidth) {
      tmp = true;
    } else {
      Companion_getInstance_0();
      tmp = maxWidth === 2147483647;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message_0 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp_0;
    if (maxHeight >= minHeight) {
      tmp_0 = true;
    } else {
      Companion_getInstance_0();
      tmp_0 = maxHeight === 2147483647;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp_0) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message_1 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().k35(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = new Constraints($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Constraints(tmp_1)).m35.call(tmp_0, minWidth, maxWidth, minHeight, maxHeight).l35_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var tmp;
    Companion_getInstance_0();
    if (maxWidth === 2147483647) {
      tmp = 'Infinity';
    } else {
      tmp = maxWidth.toString();
    }
    var maxWidthStr = tmp;
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var tmp_0;
    Companion_getInstance_0();
    if (maxHeight === 2147483647) {
      tmp_0 = 'Infinity';
    } else {
      tmp_0 = maxHeight.toString();
    }
    var maxHeightStr = tmp_0;
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.t34_1 = 2147483647;
    this.u34_1 = new Long(0, 0);
    this.v34_1 = new Long(1, 0);
    this.w34_1 = new Long(2, 0);
    this.x34_1 = new Long(3, 0);
    this.y34_1 = new Long(3, 0);
    this.z34_1 = 16;
    this.a35_1 = 65535;
    this.b35_1 = 15;
    this.c35_1 = 32767;
    this.d35_1 = 18;
    this.e35_1 = 262143;
    this.f35_1 = 13;
    this.g35_1 = 8191;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.h35_1 = new Int32Array([18, 20, 17, 15]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.i35_1 = new Int32Array([65535, 262143, 32767, 8191]);
    var tmp_1 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_1.j35_1 = new Int32Array([32767, 8191, 65535, 262143]);
  }
  protoOf(Companion).n35 = function (width, height) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0 ? height >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Companion.fixed.<anonymous>' call
      var message = 'width(' + width + ') and height(' + height + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.k35(width, width, height, height);
  };
  protoOf(Companion).o35 = function (width) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0)) {
      // Inline function 'androidx.compose.ui.unit.Companion.fixedWidth.<anonymous>' call
      var message = 'width(' + width + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.k35(width, width, 0, 2147483647);
  };
  protoOf(Companion).p35 = function (height) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(height >= 0)) {
      // Inline function 'androidx.compose.ui.unit.Companion.fixedHeight.<anonymous>' call
      var message = 'height(' + height + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.k35(0, 2147483647, height, height);
  };
  protoOf(Companion).k35 = function (minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSize(this, heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSize(this, widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height ' + ('of ' + heightVal + ' in Constraints'));
    }
    var tmp;
    switch (widthBits) {
      case 15:
        tmp = new Long(2, 0);
        break;
      case 16:
        tmp = new Long(0, 0);
        break;
      case 13:
        tmp = new Long(3, 0);
        break;
      case 18:
        tmp = new Long(1, 0);
        break;
      default:
        throw IllegalStateException_init_$Create$('Should only have the provided constants.');
    }
    var focus = tmp;
    var maxWidthValue = maxWidth === 2147483647 ? 0 : maxWidth + 1 | 0;
    var maxHeightValue = maxHeight === 2147483647 ? 0 : maxHeight + 1 | 0;
    var minHeightOffset = this.h35_1[focus.f1()];
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = focus.sk(toLong(minWidth).q7(2)).sk(toLong(maxWidthValue).q7(33)).sk(toLong(minHeight).q7(minHeightOffset)).sk(toLong(maxHeightValue).q7(maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.l35_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.l35_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.l35_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.l35_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.l35_1, other);
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    var tmp;
    if (maxWidth === VOID) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = maxWidth;
    }
    maxWidth = tmp;
    minHeight = minHeight === VOID ? 0 : minHeight;
    var tmp_0;
    if (maxHeight === VOID) {
      Companion_getInstance_0();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = maxHeight;
    }
    maxHeight = tmp_0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxWidth >= minWidth)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxHeight >= minHeight)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message_0 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minWidth >= 0 ? minHeight >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message_1 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().k35(minWidth, maxWidth, minHeight, maxHeight);
  }
  function offset(_this__u8e3s4, horizontal, vertical) {
    horizontal = horizontal === VOID ? 0 : horizontal;
    vertical = vertical === VOID ? 0 : vertical;
    return Constraints_0(coerceAtLeast(_Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4) + horizontal | 0, 0), addMaxWithMinimum(_Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4), horizontal), coerceAtLeast(_Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4) + vertical | 0, 0), addMaxWithMinimum(_Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4), vertical));
  }
  function constrainWidth(_this__u8e3s4, width) {
    return coerceIn(width, _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4));
  }
  function constrainHeight(_this__u8e3s4, height) {
    return coerceIn(height, _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4));
  }
  function constrain(_this__u8e3s4, otherConstraints) {
    return Constraints_0(coerceIn(_Constraints___get_minWidth__impl__hi9lfi(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_maxWidth__impl__uuyqc(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_minHeight__impl__ev4bgx(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)), coerceIn(_Constraints___get_maxHeight__impl__dt3e8z(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function isSatisfiedBy(_this__u8e3s4, size) {
    var tmp;
    var containsLower = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    var containsUpper = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    var containsArg = _IntSize___get_width__impl__d9yl4o(size);
    if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
      var containsLower_0 = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
      var containsUpper_0 = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
      var containsArg_0 = _IntSize___get_height__impl__prv63b(size);
      tmp = containsLower_0 <= containsArg_0 ? containsArg_0 <= containsUpper_0 : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constrain_0(_this__u8e3s4, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__d9yl4o(size), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_IntSize___get_height__impl__prv63b(size), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    Companion_getInstance_0();
    if (max === 2147483647) {
      tmp = max;
    } else {
      tmp = coerceAtLeast(max + value | 0, 0);
    }
    return tmp;
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.e36_1 = density;
    this.f36_1 = fontScale;
  }
  protoOf(DensityImpl).q35 = function () {
    return this.e36_1;
  };
  protoOf(DensityImpl).r35 = function () {
    return this.f36_1;
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.e36_1 + ', fontScale=' + this.f36_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.e36_1);
    result = imul(result, 31) + getNumberHashCode(this.f36_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.e36_1, tmp0_other_with_cast.e36_1))
      return false;
    if (!equals(this.f36_1, tmp0_other_with_cast.f36_1))
      return false;
    return true;
  };
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().d36_1))) {
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-width>.<anonymous>' call
      var message = 'DpSize is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.z9(32).f1();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().d36_1))) {
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-height>.<anonymous>' call
      var message = 'DpSize is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.vb(new Long(-1, 0)).f1();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_0 = _Dp___init__impl__ms3zkb(0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.c36_1 = DpSize(tmp_0, tmp$ret$1);
    this.d36_1 = DpSize(Companion_getInstance_2().i36_1, Companion_getInstance_2().i36_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DpSize__hashCode_impl_jvpgaj($this) {
    return $this.hashCode();
  }
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    var tmp = $this.j36_1;
    return Dp__compareTo_impl_tlg3dl(tmp, other instanceof Dp ? other.j36_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb($this))) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.g36_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.h36_1 = _Dp___init__impl__ms3zkb(Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.i36_1 = _Dp___init__impl__ms3zkb(NaN);
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.j36_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.j36_1 = value;
  }
  protoOf(Dp).k36 = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.j36_1, other);
  };
  protoOf(Dp).la = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.j36_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.j36_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.j36_1, other);
  };
  function DpSize(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(width);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(height);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function _DpOffset___init__impl__yq36wy(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__7zqn8y($this) {
    return $this;
  }
  function _DpOffset___get_x__impl__uauqb5($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().m36_1))) {
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-x>.<anonymous>' call
      var message = 'DpOffset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.z9(32).f1();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().m36_1))) {
      // Inline function 'androidx.compose.ui.unit.DpOffset.<get-y>.<anonymous>' call
      var message = 'DpOffset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _DpOffset___get_packedValue__impl__7zqn8y($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.vb(new Long(-1, 0)).f1();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function DpOffset__toString_impl_qqhvsu($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!_DpOffset___get_packedValue__impl__7zqn8y($this).equals(_DpOffset___get_packedValue__impl__7zqn8y(Companion_getInstance_3().m36_1))) {
      tmp = '(' + new Dp(_DpOffset___get_x__impl__uauqb5($this)) + ', ' + new Dp(_DpOffset___get_y__impl__1h898y($this)) + ')';
    } else {
      tmp = 'DpOffset.Unspecified';
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_0 = _Dp___init__impl__ms3zkb(0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.l36_1 = DpOffset_0(tmp_0, tmp$ret$1);
    this.m36_1 = DpOffset_0(Companion_getInstance_2().i36_1, Companion_getInstance_2().i36_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DpOffset__hashCode_impl_mjg9df($this) {
    return $this.hashCode();
  }
  function DpOffset__equals_impl_7fc41d($this, other) {
    if (!(other instanceof DpOffset))
      return false;
    var tmp0_other_with_cast = other instanceof DpOffset ? other.n36_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_3();
    this.n36_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.n36_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.n36_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.n36_1, other);
  };
  function DpOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(x);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(y);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntOffset___get_packedValue__impl__982pbx($this).z9(32).f1();
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntOffset___get_packedValue__impl__982pbx($this).vb(new Long(-1, 0)).f1();
  }
  function IntOffset__copy_impl_pmdgk6($this, x, y) {
    return IntOffset_0(x, y);
  }
  function IntOffset__copy$default_impl_1y5pbb($this, x, y, $super) {
    x = x === VOID ? _IntOffset___get_x__impl__qiqr5o($this) : x;
    y = y === VOID ? _IntOffset___get_y__impl__2avpwj($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = IntOffset__copy_impl_pmdgk6($this, x, y);
    } else {
      var tmp_0 = new IntOffset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new IntOffset(tmp_1)).p36.call(tmp_0, x, y).o36_1;
    }
    return tmp;
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.q36_1 = IntOffset_0(0, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.o36_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_4();
    this.o36_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.o36_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.o36_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.o36_1, other);
  };
  function plus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) + _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) + _IntOffset___get_y__impl__2avpwj(offset));
  }
  function minus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) - _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - _IntOffset___get_y__impl__2avpwj(offset));
  }
  function IntOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(x).q7(32).sk(toLong(y).vb(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.r36_1 = new IntRect(0, 0, 0, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_5();
    this.s36_1 = left;
    this.t36_1 = top;
    this.u36_1 = right;
    this.v36_1 = bottom;
    this.w36_1 = 0;
  }
  protoOf(IntRect).v33 = function () {
    return this.u36_1 - this.s36_1 | 0;
  };
  protoOf(IntRect).w33 = function () {
    return this.v36_1 - this.t36_1 | 0;
  };
  protoOf(IntRect).x36 = function (translateX, translateY) {
    return new IntRect(this.s36_1 + translateX | 0, this.t36_1 + translateY | 0, this.u36_1 + translateX | 0, this.v36_1 + translateY | 0);
  };
  protoOf(IntRect).y36 = function (offset) {
    return ((_IntOffset___get_x__impl__qiqr5o(offset) >= this.s36_1 ? _IntOffset___get_x__impl__qiqr5o(offset) < this.u36_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) >= this.t36_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) < this.v36_1 : false;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.s36_1 + ', ') + ('' + this.t36_1 + ', ') + ('' + this.u36_1 + ', ') + ('' + this.v36_1 + ')');
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.s36_1;
    result = imul(result, 31) + this.t36_1 | 0;
    result = imul(result, 31) + this.u36_1 | 0;
    result = imul(result, 31) + this.v36_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.s36_1 === tmp0_other_with_cast.s36_1))
      return false;
    if (!(this.t36_1 === tmp0_other_with_cast.t36_1))
      return false;
    if (!(this.u36_1 === tmp0_other_with_cast.u36_1))
      return false;
    if (!(this.v36_1 === tmp0_other_with_cast.v36_1))
      return false;
    return true;
  };
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset), _IntOffset___get_x__impl__qiqr5o(offset) + _IntSize___get_width__impl__d9yl4o(size) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntSize___get_height__impl__prv63b(size) | 0);
  }
  function toSize_0(_this__u8e3s4) {
    return Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4), _IntSize___get_height__impl__prv63b(_this__u8e3s4));
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntSize___get_packedValue__impl__uho7jf($this).z9(32).f1();
  }
  function _IntSize___get_height__impl__prv63b($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntSize___get_packedValue__impl__uho7jf($this).vb(new Long(-1, 0)).f1();
  }
  function IntSize__toString_impl_54w9zl($this) {
    return '' + _IntSize___get_width__impl__d9yl4o($this) + ' x ' + _IntSize___get_height__impl__prv63b($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.z36_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.a37_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_6();
    this.a37_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.a37_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.a37_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.a37_1, other);
  };
  function IntSize_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(width).q7(32).sk(toLong(height).vb(new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_4().q36_1, _this__u8e3s4);
  }
  function get_center(_this__u8e3s4) {
    return IntOffset_0(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4) / 2 | 0, _IntSize___get_height__impl__prv63b(_this__u8e3s4) / 2 | 0);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function LayoutDirection_Rtl_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Rtl_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_8().v35_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_8().w35_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_8().x35_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b37_1 = [new TextUnitType(Companion_getInstance_8().v35_1), new TextUnitType(Companion_getInstance_8().w35_1), new TextUnitType(Companion_getInstance_8().x35_1)];
    var tmp_0 = this;
    var tmp_1 = new Long(0, 0);
    FloatCompanionObject_getInstance();
    tmp_0.c37_1 = pack(tmp_1, NaN);
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return _TextUnit___get_packedValue__impl__it60w4($this).vb(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_7().b37_1[_TextUnit___get_rawType__impl__tu8yq5($this).od(32).f1()].d37_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = _TextUnit___get_packedValue__impl__it60w4($this).vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.e37_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_7();
    this.e37_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.e37_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.e37_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.e37_1, other);
  };
  function get_isUnspecified(_this__u8e3s4) {
    return _TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function _TextUnitType___get_type__impl__sa627r($this) {
    return $this;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    return equals($this, Companion_getInstance_8().v35_1) ? 'Unspecified' : equals($this, Companion_getInstance_8().w35_1) ? 'Sp' : equals($this, Companion_getInstance_8().x35_1) ? 'Em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.v35_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.w35_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.x35_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.d37_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_8();
    this.d37_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.d37_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.d37_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.d37_1, other);
  };
  function TextUnit_0(value, type) {
    return pack(_TextUnitType___get_type__impl__sa627r(type), value);
  }
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function checkArithmetic(a) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!get_isUnspecified(a)) {
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      var message = 'Cannot perform operation for Unspecified type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(unitType.sk(toLong(toBits(v)).vb(new Long(-1, 0))));
  }
  function checkArithmetic_0(a, b) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!get_isUnspecified(a) ? !get_isUnspecified(b) : false)) {
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      var message = 'Cannot perform operation for Unspecified type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(a), _TextUnit___get_type__impl__uc2olt(b))) {
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      var message_0 = 'Cannot perform operation for ' + new TextUnitType(_TextUnit___get_type__impl__uc2olt(a)) + ' and ' + new TextUnitType(_TextUnit___get_type__impl__uc2olt(b));
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function lerp_0(start, stop, fraction) {
    checkArithmetic_0(start, stop);
    return pack(_TextUnit___get_rawType__impl__tu8yq5(start), lerp(_TextUnit___get_value__impl__hpbx0k(start), _TextUnit___get_value__impl__hpbx0k(stop), fraction));
  }
  function _Velocity___init__impl__tjpg0s(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _Velocity___get_x__impl__qqcikv($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.z9(32).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function _Velocity___get_y__impl__239yhc($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function Velocity__copy_impl_c7yiyt($this, x, y) {
    return Velocity_0(x, y);
  }
  function Velocity__copy$default_impl_eql69u($this, x, y, $super) {
    x = x === VOID ? _Velocity___get_x__impl__qqcikv($this) : x;
    y = y === VOID ? _Velocity___get_y__impl__239yhc($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Velocity__copy_impl_c7yiyt($this, x, y);
    } else {
      var tmp_0 = new Velocity($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Velocity(tmp_1)).g37.call(tmp_0, x, y).f37_1;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.h37_1 = Velocity_0(0.0, 0.0);
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Velocity__minus_impl_w0cg92($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) - _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) - _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__plus_impl_9g3s6u($this, other) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) + _Velocity___get_x__impl__qqcikv(other), _Velocity___get_y__impl__239yhc($this) + _Velocity___get_y__impl__239yhc(other));
  }
  function Velocity__times_impl_yav0ik($this, operand) {
    return Velocity_0(_Velocity___get_x__impl__qqcikv($this) * operand, _Velocity___get_y__impl__239yhc($this) * operand);
  }
  function Velocity__toString_impl_n5zo2k($this) {
    return '(' + _Velocity___get_x__impl__qqcikv($this) + ', ' + _Velocity___get_y__impl__239yhc($this) + ') px/sec';
  }
  function Velocity__hashCode_impl_q3yh3p($this) {
    return $this.hashCode();
  }
  function Velocity__equals_impl_327knj($this, other) {
    if (!(other instanceof Velocity))
      return false;
    var tmp0_other_with_cast = other instanceof Velocity ? other.f37_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_9();
    this.f37_1 = packedValue;
  }
  protoOf(Velocity).toString = function () {
    return Velocity__toString_impl_n5zo2k(this.f37_1);
  };
  protoOf(Velocity).hashCode = function () {
    return Velocity__hashCode_impl_q3yh3p(this.f37_1);
  };
  protoOf(Velocity).equals = function (other) {
    return Velocity__equals_impl_327knj(this.f37_1, other);
  };
  function Velocity_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$0);
  }
  //region block: post-declaration
  protoOf(DensityImpl).s35 = toPx;
  protoOf(DensityImpl).u35 = toPx_0;
  protoOf(DensityImpl).t35 = roundToPx;
  protoOf(DensityImpl).z35 = toDp;
  protoOf(DensityImpl).a36 = toDp_0;
  protoOf(DensityImpl).b36 = toSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = roundToPx_0;
  _.$_$.e = toDp_0;
  _.$_$.f = toDp;
  _.$_$.g = toPx;
  _.$_$.h = toPx_0;
  _.$_$.i = toSize;
  _.$_$.j = Density_0;
  _.$_$.k = Density;
  _.$_$.l = DpOffset_0;
  _.$_$.m = DpOffset;
  _.$_$.n = DpSize;
  _.$_$.o = Dp;
  _.$_$.p = IntOffset_0;
  _.$_$.q = IntOffset;
  _.$_$.r = IntRect_0;
  _.$_$.s = IntRect;
  _.$_$.t = IntSize_0;
  _.$_$.u = IntSize;
  _.$_$.v = TextUnitType;
  _.$_$.w = TextUnit_0;
  _.$_$.x = TextUnit;
  _.$_$.y = Velocity_0;
  _.$_$.z = Velocity;
  _.$_$.a1 = get_center;
  _.$_$.b1 = checkArithmetic;
  _.$_$.c1 = constrainHeight;
  _.$_$.d1 = constrainWidth;
  _.$_$.e1 = constrain;
  _.$_$.f1 = constrain_0;
  _.$_$.g1 = isSatisfiedBy;
  _.$_$.h1 = get_isUnspecified;
  _.$_$.i1 = lerp_0;
  _.$_$.j1 = minus;
  _.$_$.k1 = offset;
  _.$_$.l1 = pack;
  _.$_$.m1 = plus;
  _.$_$.n1 = get_sp_0;
  _.$_$.o1 = get_sp;
  _.$_$.p1 = toIntRect;
  _.$_$.q1 = toSize_0;
  _.$_$.r1 = LayoutDirection_Ltr_getInstance;
  _.$_$.s1 = LayoutDirection_Rtl_getInstance;
  _.$_$.t1 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.u1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.v1 = _Constraints___get_hasFixedHeight__impl__y56fxx;
  _.$_$.w1 = _Constraints___get_hasFixedWidth__impl__4p17wc;
  _.$_$.x1 = Constraints__hashCode_impl_ij7484;
  _.$_$.y1 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.z1 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.a2 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.b2 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.c2 = _Dp___init__impl__ms3zkb;
  _.$_$.d2 = Dp__compareTo_impl_tlg3dl;
  _.$_$.e2 = Dp__hashCode_impl_sxkrra;
  _.$_$.f2 = _Dp___get_value__impl__geb1vb;
  _.$_$.g2 = DpOffset__hashCode_impl_mjg9df;
  _.$_$.h2 = _DpOffset___get_packedValue__impl__7zqn8y;
  _.$_$.i2 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.j2 = _DpOffset___get_y__impl__1h898y;
  _.$_$.k2 = DpSize__hashCode_impl_jvpgaj;
  _.$_$.l2 = _DpSize___get_height__impl__5xueo2;
  _.$_$.m2 = _DpSize___get_width__impl__o3d5gt;
  _.$_$.n2 = IntOffset__hashCode_impl_w5rrxs;
  _.$_$.o2 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.p2 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.q2 = IntSize__hashCode_impl_gm9mta;
  _.$_$.r2 = _IntSize___get_height__impl__prv63b;
  _.$_$.s2 = _IntSize___get_width__impl__d9yl4o;
  _.$_$.t2 = _TextUnit___init__impl__r5fj1s;
  _.$_$.u2 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.v2 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.w2 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.x2 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.y2 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.z2 = _TextUnit___get_type__impl__uc2olt;
  _.$_$.a3 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.b3 = Velocity__minus_impl_w0cg92;
  _.$_$.c3 = Velocity__plus_impl_9g3s6u;
  _.$_$.d3 = Velocity__times_impl_yav0ik;
  _.$_$.e3 = _Velocity___get_x__impl__qqcikv;
  _.$_$.f3 = _Velocity___get_y__impl__239yhc;
  _.$_$.g3 = Constraints__copy$default_impl_f452rp;
  _.$_$.h3 = IntOffset__copy$default_impl_1y5pbb;
  _.$_$.i3 = Velocity__copy$default_impl_eql69u;
  _.$_$.j3 = Companion_getInstance_0;
  _.$_$.k3 = Companion_getInstance_2;
  _.$_$.l3 = Companion_getInstance_3;
  _.$_$.m3 = Companion_getInstance_1;
  _.$_$.n3 = Companion_getInstance_4;
  _.$_$.o3 = Companion_getInstance_5;
  _.$_$.p3 = Companion_getInstance_6;
  _.$_$.q3 = Companion_getInstance_7;
  _.$_$.r3 = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-unit.js.map
