(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'uuid'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'uuid'.");
    }
    root.uuid = factory(typeof uuid === 'undefined' ? {} : uuid, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var until = kotlin_kotlin.$_$.jf;
  var listOf = kotlin_kotlin.$_$.l9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.d3;
  var plus = kotlin_kotlin.$_$.u9;
  var Default_getInstance = kotlin_kotlin.$_$.g5;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var charArray = kotlin_kotlin.$_$.gc;
  var concatToString = kotlin_kotlin.$_$.lg;
  var contentEquals = kotlin_kotlin.$_$.k7;
  var contentHashCode = kotlin_kotlin.$_$.l7;
  var compareTo = kotlin_kotlin.$_$.lc;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var Comparable = kotlin_kotlin.$_$.zi;
  var classMeta = kotlin_kotlin.$_$.kc;
  var toByte = kotlin_kotlin.$_$.zd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Uuid, 'Uuid', classMeta, VOID, [Comparable]);
  //endregion
  var UUID_CHAR_RANGES;
  var UUID_HYPHEN_INDICES;
  function get_UUID_CHARS() {
    _init_properties_uuid_kt__7swked();
    return UUID_CHARS;
  }
  var UUID_CHARS;
  function get_UUID_BYTES() {
    return UUID_BYTES;
  }
  var UUID_BYTES;
  function get_UUID_STRING_LENGTH() {
    return UUID_STRING_LENGTH;
  }
  var UUID_STRING_LENGTH;
  var properties_initialized_uuid_kt_pyvynx;
  function _init_properties_uuid_kt__7swked() {
    if (!properties_initialized_uuid_kt_pyvynx) {
      properties_initialized_uuid_kt_pyvynx = true;
      UUID_CHAR_RANGES = listOf([until(0, 8), until(9, 13), until(14, 18), until(19, 23), until(24, 36)]);
      UUID_HYPHEN_INDICES = listOf([8, 13, 18, 23]);
      UUID_CHARS = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)));
    }
  }
  function freeze(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function getRandomUuidBytes() {
    return Default_getInstance().o7(get_UUID_BYTES());
  }
  function Companion() {
    Companion_instance = this;
    this.hie_1 = listOf([until(0, 4), until(4, 6), until(6, 8), until(8, 10), until(10, 16)]);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Uuid(uuidBytes) {
    Companion_getInstance();
    this.iie_1 = uuidBytes;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.iie_1.length === get_UUID_BYTES())) {
      // Inline function 'com.benasher44.uuid.Uuid.<anonymous>' call
      var tmp = get_UUID_BYTES();
      // Inline function 'kotlin.collections.count' call
      var message = 'Invalid UUID bytes. Expected ' + tmp + ' bytes; found ' + this.iie_1.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    freeze(this);
  }
  protoOf(Uuid).toString = function () {
    var characters = charArray(get_UUID_STRING_LENGTH());
    var charIndex = 0;
    var tmp0_iterator = Companion_getInstance().hie_1.d();
    while (tmp0_iterator.e()) {
      var range = tmp0_iterator.f();
      var inductionVariable = range.y_1;
      var last = range.z_1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var octetPair = this.iie_1[i];
          var left = octetPair >> 4 & 15;
          var right = octetPair & 15;
          var tmp2 = charIndex;
          charIndex = tmp2 + 1 | 0;
          characters[tmp2] = get_UUID_CHARS().m(left).n8_1;
          var tmp3 = charIndex;
          charIndex = tmp3 + 1 | 0;
          characters[tmp3] = get_UUID_CHARS().m(right).n8_1;
        }
         while (!(i === last));
      if (charIndex < get_UUID_STRING_LENGTH()) {
        var tmp4 = charIndex;
        charIndex = tmp4 + 1 | 0;
        characters[tmp4] = _Char___init__impl__6a9atx(45);
      }
    }
    return concatToString(characters);
  };
  protoOf(Uuid).equals = function (other) {
    var tmp;
    if (other instanceof Uuid) {
      tmp = contentEquals(this.iie_1, other.iie_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Uuid).hashCode = function () {
    return contentHashCode(this.iie_1);
  };
  protoOf(Uuid).jie = function (other) {
    var inductionVariable = 0;
    var last = get_UUID_BYTES();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var compareResult = compareTo(this.iie_1[i], other.iie_1[i]);
        if (!(compareResult === 0))
          return compareResult;
      }
       while (inductionVariable < last);
    return 0;
  };
  protoOf(Uuid).la = function (other) {
    return this.jie(other instanceof Uuid ? other : THROW_CCE());
  };
  function uuid4() {
    // Inline function 'com.benasher44.uuid.setVersion' call
    var tmp0_setVersion = getRandomUuidBytes();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.setVersion.<anonymous>' call
    tmp0_setVersion[6] = toByte(tmp0_setVersion[6] & 15 | 64);
    tmp0_setVersion[8] = toByte(tmp0_setVersion[8] & 63 | 128);
    return new Uuid(tmp0_setVersion);
  }
  //region block: init
  UUID_BYTES = 16;
  UUID_STRING_LENGTH = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = uuid4;
  //endregion
  return _;
}));

//# sourceMappingURL=uuid.js.map
