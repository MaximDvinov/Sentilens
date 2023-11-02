(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    root['compose-multiplatform-core-ui-geometry'] = factory(typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-geometry'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var floatFromBits = kotlin_kotlin.$_$.rc;
  var Long = kotlin_kotlin.$_$.jj;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var toBits = kotlin_kotlin.$_$.al;
  var toLong = kotlin_kotlin.$_$.ae;
  var numberToInt = kotlin_kotlin.$_$.td;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var isFinite = kotlin_kotlin.$_$.mk;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var equals = kotlin_kotlin.$_$.oc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CornerRadius, 'CornerRadius', classMeta);
  setMetadataFor(MutableRect, 'MutableRect', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Offset, 'Offset', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoundRect, 'RoundRect', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.z9(32).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function Companion() {
    Companion_instance = this;
    this.c33_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.d33_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.d33_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.d33_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.d33_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.d33_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.e33_1 = left;
    this.f33_1 = top;
    this.g33_1 = right;
    this.h33_1 = bottom;
    this.i33_1 = 8;
  }
  protoOf(MutableRect).r20 = function () {
    return this.e33_1 >= this.g33_1 ? true : this.f33_1 >= this.h33_1;
  };
  protoOf(MutableRect).j33 = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.e33_1;
    tmp.e33_1 = Math.max(left, tmp0_max);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = this.f33_1;
    tmp_0.f33_1 = Math.max(top, tmp1_max);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = this.g33_1;
    tmp_1.g33_1 = Math.min(right, tmp2_min);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = this.h33_1;
    tmp_2.h33_1 = Math.min(bottom, tmp3_min);
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.e33_1, 1) + ', ') + (toStringAsFixed(this.f33_1, 1) + ', ') + (toStringAsFixed(this.g33_1, 1) + ', ') + (toStringAsFixed(this.h33_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.e33_1, _this__u8e3s4.f33_1, _this__u8e3s4.g33_1, _this__u8e3s4.h33_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().m33_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.z9(32).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().m33_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    return Offset_0(x, y);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    x = x === VOID ? _Offset___get_x__impl__xvi35n($this) : x;
    y = y === VOID ? _Offset___get_y__impl__8bzhra($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_0 = new Offset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Offset(tmp_1)).o33.call(tmp_0, x, y).n33_1;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.k33_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.l33_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp_0.m33_1 = Offset_0(NaN, NaN);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    return Math.sqrt(tmp0_sqrt);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return Offset_0(-_Offset___get_x__impl__xvi35n($this), -_Offset___get_y__impl__8bzhra($this));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__times_impl_jz1mli($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) * operand, _Offset___get_y__impl__8bzhra($this) * operand);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) / operand, _Offset___get_y__impl__8bzhra($this) / operand);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.n33_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.n33_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.n33_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.n33_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.n33_1, other);
  };
  function Offset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().m33_1));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().m33_1));
  }
  function lerp_0(start, stop, fraction) {
    return Offset_0(lerp(_Offset___get_x__impl__xvi35n(start), _Offset___get_x__impl__xvi35n(stop), fraction), lerp(_Offset___get_y__impl__8bzhra(start), _Offset___get_y__impl__8bzhra(stop), fraction));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.p33_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.q33_1 = left;
    this.r33_1 = top;
    this.s33_1 = right;
    this.t33_1 = bottom;
    this.u33_1 = 0;
  }
  protoOf(Rect).v33 = function () {
    return this.s33_1 - this.q33_1;
  };
  protoOf(Rect).w33 = function () {
    return this.t33_1 - this.r33_1;
  };
  protoOf(Rect).x33 = function () {
    return Size_0(this.v33(), this.w33());
  };
  protoOf(Rect).y33 = function (offset) {
    return new Rect(this.q33_1 + _Offset___get_x__impl__xvi35n(offset), this.r33_1 + _Offset___get_y__impl__8bzhra(offset), this.s33_1 + _Offset___get_x__impl__xvi35n(offset), this.t33_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).z33 = function (translateX, translateY) {
    return new Rect(this.q33_1 + translateX, this.r33_1 + translateY, this.s33_1 + translateX, this.t33_1 + translateY);
  };
  protoOf(Rect).a34 = function (other) {
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.q33_1;
    var tmp1_max = other.q33_1;
    var tmp = Math.max(tmp0_max, tmp1_max);
    // Inline function 'kotlin.math.max' call
    var tmp2_max = this.r33_1;
    var tmp3_max = other.r33_1;
    var tmp_0 = Math.max(tmp2_max, tmp3_max);
    // Inline function 'kotlin.math.min' call
    var tmp4_min = this.s33_1;
    var tmp5_min = other.s33_1;
    var tmp_1 = Math.min(tmp4_min, tmp5_min);
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = this.t33_1;
    var tmp7_min = other.t33_1;
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).b34 = function () {
    return Offset_0(this.q33_1, this.r33_1);
  };
  protoOf(Rect).c34 = function () {
    return Offset_0(this.s33_1, this.t33_1);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.q33_1, 1) + ', ') + (toStringAsFixed(this.r33_1, 1) + ', ') + (toStringAsFixed(this.s33_1, 1) + ', ') + (toStringAsFixed(this.t33_1, 1) + ')');
  };
  protoOf(Rect).d34 = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).e34 = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.q33_1 : left;
    top = top === VOID ? this.r33_1 : top;
    right = right === VOID ? this.s33_1 : right;
    bottom = bottom === VOID ? this.t33_1 : bottom;
    return $super === VOID ? this.d34(left, top, right, bottom) : $super.d34.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.q33_1);
    result = imul(result, 31) + getNumberHashCode(this.r33_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s33_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t33_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.q33_1, tmp0_other_with_cast.q33_1))
      return false;
    if (!equals(this.r33_1, tmp0_other_with_cast.r33_1))
      return false;
    if (!equals(this.s33_1, tmp0_other_with_cast.s33_1))
      return false;
    if (!equals(this.t33_1, tmp0_other_with_cast.t33_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Rect_1(topLeft, bottomRight) {
    return new Rect(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(bottomRight), _Offset___get_y__impl__8bzhra(bottomRight));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.f34_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().c33_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().c33_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().c33_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().c33_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().c33_1 : bottomLeftCornerRadius;
    this.g34_1 = left;
    this.h34_1 = top;
    this.i34_1 = right;
    this.j34_1 = bottom;
    this.k34_1 = topLeftCornerRadius;
    this.l34_1 = topRightCornerRadius;
    this.m34_1 = bottomRightCornerRadius;
    this.n34_1 = bottomLeftCornerRadius;
    this.o34_1 = null;
    this.p34_1 = 0;
  }
  protoOf(RoundRect).v33 = function () {
    return this.i34_1 - this.g34_1;
  };
  protoOf(RoundRect).w33 = function () {
    return this.j34_1 - this.h34_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.k34_1;
    var trRadius = this.l34_1;
    var brRadius = this.m34_1;
    var blRadius = this.n34_1;
    var rect = toStringAsFixed(this.g34_1, 1) + ', ' + (toStringAsFixed(this.h34_1, 1) + ', ') + (toStringAsFixed(this.i34_1, 1) + ', ') + toStringAsFixed(this.j34_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.g34_1);
    result = imul(result, 31) + getNumberHashCode(this.h34_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i34_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j34_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.k34_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.l34_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.m34_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.n34_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.g34_1, tmp0_other_with_cast.g34_1))
      return false;
    if (!equals(this.h34_1, tmp0_other_with_cast.h34_1))
      return false;
    if (!equals(this.i34_1, tmp0_other_with_cast.i34_1))
      return false;
    if (!equals(this.j34_1, tmp0_other_with_cast.j34_1))
      return false;
    if (!equals(this.k34_1, tmp0_other_with_cast.k34_1))
      return false;
    if (!equals(this.l34_1, tmp0_other_with_cast.l34_1))
      return false;
    if (!equals(this.m34_1, tmp0_other_with_cast.m34_1))
      return false;
    if (!equals(this.n34_1, tmp0_other_with_cast.n34_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().c33_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().c33_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().c33_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().c33_1 : bottomLeft;
    return new RoundRect(rect.q33_1, rect.r33_1, rect.s33_1, rect.t33_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k34_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.l34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.l34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.m34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.m34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n34_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k34_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n34_1) : false;
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().r34_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.z9(32).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().r34_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.q34_1 = Size_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.r34_1 = Size_0(NaN, NaN);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    return _Size___get_width__impl__58y75t($this) <= 0.0 ? true : _Size___get_height__impl__a04p02($this) <= 0.0;
  }
  function Size__times_impl_fnp4nc($this, operand) {
    return Size_0(_Size___get_width__impl__58y75t($this) * operand, _Size___get_height__impl__a04p02($this) * operand);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = _Size___get_width__impl__58y75t($this);
    var tmp2_min = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = _Size___get_height__impl__a04p02($this);
    var tmp3_min = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.min(tmp2_min, tmp3_min);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().r34_1))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.s34_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.s34_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.s34_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.s34_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.s34_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().k33_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_1;
  _.$_$.g = Rect_0;
  _.$_$.h = Rect;
  _.$_$.i = RoundRect_0;
  _.$_$.j = RoundRect;
  _.$_$.k = Size_0;
  _.$_$.l = Size;
  _.$_$.m = get_center;
  _.$_$.n = get_isFinite;
  _.$_$.o = get_isSimple;
  _.$_$.p = get_isSpecified;
  _.$_$.q = get_isUnspecified;
  _.$_$.r = lerp_0;
  _.$_$.s = toRect;
  _.$_$.t = toRect_0;
  _.$_$.u = _CornerRadius___get_x__impl__1594cn;
  _.$_$.v = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.w = Offset__div_impl_eaxtg1;
  _.$_$.x = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.y = Offset__getDistance_impl_pclvxn;
  _.$_$.z = Offset__hashCode_impl_hbql41;
  _.$_$.a1 = Offset__minus_impl_hoj2c0;
  _.$_$.b1 = Offset__plus_impl_c78cg0;
  _.$_$.c1 = Offset__times_impl_jz1mli;
  _.$_$.d1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.e1 = _Offset___get_x__impl__xvi35n;
  _.$_$.f1 = _Offset___get_y__impl__8bzhra;
  _.$_$.g1 = Size__hashCode_impl_2h1qpd;
  _.$_$.h1 = _Size___get_height__impl__a04p02;
  _.$_$.i1 = Size__isEmpty_impl_o9ye97;
  _.$_$.j1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.k1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.l1 = Size__times_impl_fnp4nc;
  _.$_$.m1 = _Size___get_width__impl__58y75t;
  _.$_$.n1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.o1 = Companion_getInstance;
  _.$_$.p1 = Companion_getInstance_0;
  _.$_$.q1 = Companion_getInstance_1;
  _.$_$.r1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-geometry.js.map
