(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-uuid-kotlinx-uuid-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-uuid-kotlinx-uuid-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-uuid-kotlinx-uuid-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-uuid-kotlinx-uuid-core'.");
    }
    root['kotlinx-uuid-kotlinx-uuid-core'] = factory(typeof this['kotlinx-uuid-kotlinx-uuid-core'] === 'undefined' ? {} : this['kotlinx-uuid-kotlinx-uuid-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Long = kotlin_kotlin.$_$.jj;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.c3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b3;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var Char = kotlin_kotlin.$_$.xi;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.a3;
  var toLong = kotlin_kotlin.$_$.ae;
  var VOID = kotlin_kotlin.$_$.il;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var classMeta = kotlin_kotlin.$_$.kc;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Comparable = kotlin_kotlin.$_$.zi;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var defineProp = kotlin_kotlin.$_$.mc;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.a5;
  var Random = kotlin_kotlin.$_$.ne;
  var isObject = kotlin_kotlin.$_$.kd;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Serializer, 'Serializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(Default, 'Default', objectMeta, Serializer);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(UUID, 'UUID', classMeta, VOID, [Comparable], VOID, {0: Default_getInstance});
  setMetadataFor(UUIDFormatException, 'UUIDFormatException', classMeta, Exception);
  setMetadataFor(SecureRandomNode, 'SecureRandomNode', objectMeta, Random);
  setMetadataFor(SecureRandomBrowser, 'SecureRandomBrowser', objectMeta, Random);
  //endregion
  function formatUUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw, includeBrackets) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(38);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.uuid.formatUUID.<anonymous>' call
    if (includeBrackets) {
      tmp0_apply.i9(_Char___init__impl__6a9atx(123));
    }
    dumpHex(timeStampAndVersionRaw.od(32), 4, tmp0_apply);
    tmp0_apply.i9(_Char___init__impl__6a9atx(45));
    dumpHex(timeStampAndVersionRaw.od(16).vb(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.i9(_Char___init__impl__6a9atx(45));
    dumpHex(timeStampAndVersionRaw.vb(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.i9(_Char___init__impl__6a9atx(45));
    dumpHex(clockSequenceVariantAndNodeRaw.z9(48).vb(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.i9(_Char___init__impl__6a9atx(45));
    dumpHex(clockSequenceVariantAndNodeRaw.vb(new Long(-1, 65535)), 6, tmp0_apply);
    if (includeBrackets) {
      tmp0_apply.i9(_Char___init__impl__6a9atx(125));
    }
    return tmp0_apply.toString();
  }
  function dumpHex(value, numberOfOctets, out) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < numberOfOctets)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.uuid.dumpHex.<anonymous>' call
        var octet = value.od(imul((numberOfOctets - index | 0) - 1 | 0, 8));
        dumpHalfByte(octet.f1() >> 4, out);
        dumpHalfByte(octet.f1(), out);
      }
       while (inductionVariable < numberOfOctets);
  }
  function dumpHalfByte(value, out) {
    var half = value & 15;
    out.i9(half <= 9 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), half) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), half), 10));
  }
  function parseUUID(text) {
    var textIndex = skipCharacters(text, 0, _Char___init__impl__6a9atx(123));
    var timeStampAndVersionRaw = parseOctetStride(text, textIndex, 4, 32);
    textIndex = skipCharacters(text, textIndex + 8 | 0, _Char___init__impl__6a9atx(45));
    timeStampAndVersionRaw = timeStampAndVersionRaw.sk(parseOctetStride(text, textIndex, 2, 16));
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    timeStampAndVersionRaw = timeStampAndVersionRaw.sk(parseOctetStride(text, textIndex, 2, 0));
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    var clockSequenceVariantAndNodeRaw = parseOctetStride(text, textIndex, 2, 48);
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    clockSequenceVariantAndNodeRaw = clockSequenceVariantAndNodeRaw.sk(parseOctetStride(text, textIndex, 6, 0));
    textIndex = skipCharacters(text, textIndex + 12 | 0, _Char___init__impl__6a9atx(125));
    if (textIndex < text.length) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = textIndex;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = text.substring(tmp0_substring);
      error('extra trailing characters ' + tmp$ret$1, text, textIndex);
    }
    return Companion_getInstance().yj7(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  }
  function skipCharacters(text, startIndex, a) {
    var inductionVariable = startIndex;
    var last = text.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var character = charSequenceGet(text, index);
        if ((character === a ? true : character === _Char___init__impl__6a9atx(32)) ? true : character === _Char___init__impl__6a9atx(9)) {
          continue $l$loop;
        }
        return index;
      }
       while (inductionVariable < last);
    return text.length;
  }
  function parseOctetStride(text, textIndex, numberOfOctets, shift) {
    if ((text.length - textIndex | 0) < imul(numberOfOctets, 2)) {
      errorTooShort(text);
    }
    var result = new Long(0, 0);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = imul(numberOfOctets, 2);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.uuid.parseOctetStride.<anonymous>' call
        var character = charSequenceGet(text, textIndex + index | 0);
        var tmp;
        if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(48));
        } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(97)) + 10 | 0;
        } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(65)) + 10 | 0;
        } else {
          error('Unexpected octet character ' + new Char(character), text, textIndex + index | 0);
        }
        var halfByte = tmp;
        result = result.q7(4).sk(toLong(halfByte));
      }
       while (inductionVariable < tmp0_repeat);
    return result.q7(shift);
  }
  function error(message, text, index) {
    throw new UUIDFormatException(index === -1 ? 'Failed to parse UUID ' + text + ': ' + message : 'Failed to parse UUID ' + text + ' at position ' + index + ': ' + message);
  }
  function errorTooShort(text) {
    error('UUID string is too short', text, -1);
  }
  function generateUUID(_this__u8e3s4, random) {
    random = random === VOID ? get_SecureRandom() : random;
    var timeStampAndVersionRaw = random.l7().vb(new Long(-61441, -1)).sk(new Long(16384, 0));
    var clockSequenceVariantAndNodeRaw = random.l7().vb(new Long(-1, 1073741823)).sk(new Long(0, -2147483648));
    return _this__u8e3s4.yj7(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  }
  function Default() {
    Default_instance = this;
    Serializer.call(this, false);
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Serializer(includeBrackets) {
    this.zj7_1 = includeBrackets;
    this.aj8_1 = PrimitiveSerialDescriptor('UUID', STRING_getInstance());
  }
  protoOf(Serializer).kgo = function () {
    return this.aj8_1;
  };
  protoOf(Serializer).mgo = function (decoder) {
    return UUID_init_$Create$(decoder.lgr());
  };
  protoOf(Serializer).bj8 = function (encoder, value) {
    encoder.tgs(value.ej8(this.zj7_1));
  };
  protoOf(Serializer).lgo = function (encoder, value) {
    return this.bj8(encoder, value instanceof UUID ? value : THROW_CCE());
  };
  function UUID_init_$Init$(helper, $this) {
    UUID.call($this, helper.cj8_1, helper.dj8_1);
    return $this;
  }
  function UUID_init_$Init$_0(uuid, $this) {
    UUID_init_$Init$(parseUUID(uuid), $this);
    return $this;
  }
  function UUID_init_$Create$(uuid) {
    return UUID_init_$Init$_0(uuid, objectCreate(protoOf(UUID)));
  }
  function Companion() {
    Companion_instance = this;
    this.xj7_1 = this.yj7(new Long(0, 0), new Long(0, 0));
  }
  protoOf(Companion).yj7 = function (timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw) {
    return new UUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function UUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw) {
    Companion_getInstance();
    this.cj8_1 = timeStampAndVersionRaw;
    this.dj8_1 = clockSequenceVariantAndNodeRaw;
  }
  protoOf(UUID).toString = function () {
    return this.ej8(false);
  };
  protoOf(UUID).ej8 = function (includeBrackets) {
    return formatUUID(this.cj8_1, this.dj8_1, includeBrackets);
  };
  protoOf(UUID).hashCode = function () {
    return this.cj8_1.hashCode() + this.dj8_1.hashCode() | 0;
  };
  protoOf(UUID).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof UUID) {
      tmp_0 = other.dj8_1.equals(this.dj8_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.cj8_1.equals(this.cj8_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UUID).fj8 = function (other) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.cj8_1.x(other.cj8_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(tmp0_let === 0)) {
      return tmp0_let;
    }
    return this.dj8_1.x(other.dj8_1);
  };
  protoOf(UUID).la = function (other) {
    return this.fj8(other instanceof UUID ? other : THROW_CCE());
  };
  function UUIDFormatException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, UUIDFormatException);
    this.gj8_1 = message;
  }
  protoOf(UUIDFormatException).m1 = function () {
    return this.gj8_1;
  };
  function toInt(_this__u8e3s4) {
    var result = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var byte = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = result | byte;
      ByteCompanionObject_getInstance();
      result = tmp << 8;
    }
    return result;
  }
  function get_isNode() {
    _init_properties_SecureRandom_kt__5mxe86();
    return isNode;
  }
  var isNode;
  function get_SecureRandom() {
    _init_properties_SecureRandom_kt__5mxe86();
    return SecureRandom;
  }
  var SecureRandom;
  function SecureRandomNode() {
    SecureRandomNode_instance = this;
    Random.call(this);
    var tmp = this;
    var tmp_0 = eval('require')('crypto');
    tmp.hj8_1 = (!(tmp_0 == null) ? isObject(tmp_0) : false) ? tmp_0 : THROW_CCE();
  }
  protoOf(SecureRandomNode).k7 = function (bitCount) {
    ByteCompanionObject_getInstance();
    var tmp = bitCount + 8 | 0;
    ByteCompanionObject_getInstance();
    var numberOfBytes = tmp / 8 | 0;
    var random = this.hj8_1.randomBytes(numberOfBytes);
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new Int8Array(random);
    return toInt(tmp$ret$1);
  };
  protoOf(SecureRandomNode).c5 = function () {
    return this.hj8_1.randomInt(IntCompanionObject_getInstance().MAX_VALUE);
  };
  var SecureRandomNode_instance;
  function SecureRandomNode_getInstance() {
    if (SecureRandomNode_instance == null)
      new SecureRandomNode();
    return SecureRandomNode_instance;
  }
  function takeUpperBits(_this__u8e3s4, $this, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function SecureRandomBrowser() {
    SecureRandomBrowser_instance = this;
    Random.call(this);
  }
  protoOf(SecureRandomBrowser).k7 = function (bitCount) {
    return takeUpperBits(this.c5(), this, bitCount);
  };
  protoOf(SecureRandomBrowser).l7 = function () {
    // Inline function 'kotlinx.uuid.SecureRandomBrowser.crypto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var randomInts = window.crypto.getRandomValues(new Uint32Array(2));
    // Inline function 'kotlin.ULong.toLong' call
    // Inline function 'kotlin.ULong.plus' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp1_toULong = randomInts[0];
    var tmp2_shl = _ULong___init__impl__c78o9k(toLong(tmp1_toULong));
    IntCompanionObject_getInstance();
    var tmp5_plus = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).q7(32));
    // Inline function 'kotlin.toULong' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp4_toULong = randomInts[1];
    var tmp6_plus = _ULong___init__impl__c78o9k(toLong(tmp4_toULong));
    var tmp7_toLong = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_plus).r7(_ULong___get_data__impl__fggpzb(tmp6_plus)));
    return _ULong___get_data__impl__fggpzb(tmp7_toLong);
  };
  protoOf(SecureRandomBrowser).c5 = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlinx.uuid.SecureRandomBrowser.crypto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return window.crypto.getRandomValues(new Uint32Array(1))[0];
  };
  var SecureRandomBrowser_instance;
  function SecureRandomBrowser_getInstance() {
    if (SecureRandomBrowser_instance == null)
      new SecureRandomBrowser();
    return SecureRandomBrowser_instance;
  }
  var properties_initialized_SecureRandom_kt_h6trfg;
  function _init_properties_SecureRandom_kt__5mxe86() {
    if (!properties_initialized_SecureRandom_kt_h6trfg) {
      properties_initialized_SecureRandom_kt_h6trfg = true;
      var tmp = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
      isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
      SecureRandom = get_isNode() ? SecureRandomNode_getInstance() : SecureRandomBrowser_getInstance();
    }
  }
  //region block: post-declaration
  defineProp(protoOf(UUIDFormatException), 'message', function () {
    return this.m1();
  }, VOID);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UUID_init_$Create$;
  _.$_$.b = Companion_getInstance;
  _.$_$.c = UUID;
  _.$_$.d = generateUUID;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-uuid-kotlinx-uuid-core.js.map
