(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-websockets'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-shared-ktor-websockets'.");
    }
    root['ktor-ktor-shared-ktor-websockets'] = factory(typeof this['ktor-ktor-shared-ktor-websockets'] === 'undefined' ? {} : this['ktor-ktor-shared-ktor-websockets'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var mapCapacity = kotlin_kotlin.$_$.m9;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.dj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var toString = kotlin_kotlin.$_$.ce;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var compareTo = kotlin_kotlin.$_$.lc;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var encodeToByteArray = kotlin_kotlin.$_$.qg;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.k;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.q;
  var writeShort = kotlin_io_ktor_ktor_io.$_$.b1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.c1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Codes, 'Codes', classMeta, Enum);
  setMetadataFor(CloseReason, 'CloseReason', classMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(FrameType, 'FrameType', classMeta, Enum);
  setMetadataFor(Frame, 'Frame', classMeta);
  setMetadataFor(Binary, 'Binary', classMeta, Frame);
  setMetadataFor(Text, 'Text', classMeta, Frame);
  setMetadataFor(Close, 'Close', classMeta, Frame);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  //endregion
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = values();
    var capacity = coerceAtLeast(mapCapacity(tmp0_associateBy.length), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = tmp0_associateBy.length;
    while (inductionVariable < last) {
      var element = tmp0_associateBy[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.websocket.Companion.byCodeMap.<anonymous>' call
      tmp$ret$0 = element.sf7_1;
      tmp0_associateByTo.a5(tmp$ret$0, element);
    }
    tmp.tf7_1 = tmp0_associateByTo;
    this.uf7_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).vf7 = function (code) {
    return this.tf7_1.z2(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.sf7_1 = code;
  }
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.wf7_1 = code;
    this.xf7_1 = message;
  }
  protoOf(CloseReason).yf7 = function () {
    return Companion_getInstance().vf7(this.wf7_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.yf7();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.wf7_1 : tmp0_elvis_lhs) + ', message=' + this.xf7_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.wf7_1;
    result = imul(result, 31) + getStringHashCode(this.xf7_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
    if (!(this.wf7_1 === tmp0_other_with_cast.wf7_1))
      return false;
    if (!(this.xf7_1 === tmp0_other_with_cast.xf7_1))
      return false;
    return true;
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).gp = function () {
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var tmp0_maxByOrNull = values_0();
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp0_maxByOrNull.length === 0) {
        tmp$ret$1 = null;
        break $l$block_0;
      }
      var maxElem = tmp0_maxByOrNull[0];
      var lastIndex = get_lastIndex(tmp0_maxByOrNull);
      if (lastIndex === 0) {
        tmp$ret$1 = maxElem;
        break $l$block_0;
      }
      // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
      var maxValue = maxElem.cf8_1;
      var inductionVariable = 1;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var e = tmp0_maxByOrNull[i];
          // Inline function 'io.ktor.websocket.Companion.maxOpcode.<anonymous>' call
          var v = e.cf8_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === lastIndex));
      tmp$ret$1 = maxElem;
    }
    tmp.df8_1 = ensureNotNull(tmp$ret$1).cf8_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.df8_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = fillArrayVal(Array(tmp_2), null);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var indexedObject = values_0();
        var inductionVariable_0 = 0;
        var last = indexedObject.length;
        while (inductionVariable_0 < last) {
          var element = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'io.ktor.websocket.Companion.byOpcodeArray.<anonymous>' call
          if (element.cf8_1 === tmp_4) {
            if (found) {
              tmp$ret$6 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        tmp$ret$6 = single;
      }
      tmp_3[tmp_4] = tmp$ret$6;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.ef8_1 = tmp_3;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    FrameType_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_0();
  }
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.bf8_1 = controlFrame;
    this.cf8_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = Charsets_getInstance().gek_1;
      if (tmp0_toByteArray.equals(Charsets_getInstance().gek_1)) {
        tmp$ret$0 = encodeToByteArray(text);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp0_toByteArray.kek(), text, 0, text.length);
    }
    Text_init_$Init$(true, tmp$ret$0, $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.websocket.Close.<init>.<anonymous>' call
        writeShort(builder, reason.wf7_1);
        writeText(builder, reason.xf7_1);
        tmp$ret$0 = builder.df();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.su();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    Close_init_$Init$_0(tmp$ret$0, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readBytes(packet));
    return $this;
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.ff8_1 = new Int8Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_1();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.gf8_1 = fin;
    this.hf8_1 = frameType;
    this.if8_1 = data;
    this.jf8_1 = disposableHandle;
    this.kf8_1 = rsv1;
    this.lf8_1 = rsv2;
    this.mf8_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.hf8_1 + ' (fin=' + this.gf8_1 + ', buffer len = ' + this.if8_1.length + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = Binary_init_$Create$;
  _.$_$.d = Close_init_$Create$;
  _.$_$.e = Text_init_$Create$;
  _.$_$.f = Companion_getInstance;
  _.$_$.g = CloseReason;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-websockets.js.map
