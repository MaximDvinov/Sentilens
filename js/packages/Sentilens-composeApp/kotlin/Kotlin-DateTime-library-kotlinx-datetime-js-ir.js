(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var captureStack = kotlin_kotlin.$_$.ec;
  var IllegalArgumentException = kotlin_kotlin.$_$.gj;
  var classMeta = kotlin_kotlin.$_$.kc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var RuntimeException = kotlin_kotlin.$_$.pj;
  var Long = kotlin_kotlin.$_$.jj;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var asList = kotlin_kotlin.$_$.w6;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var indexOf = kotlin_kotlin.$_$.xg;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var numberToInt = kotlin_kotlin.$_$.td;
  var equals = kotlin_kotlin.$_$.oc;
  var Comparable = kotlin_kotlin.$_$.zi;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.dj;
  //endregion
  //region block: pre-declaration
  setMetadataFor(System, 'System', objectMeta);
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException);
  setMetadataFor(DateTimeArithmeticException, 'DateTimeArithmeticException', classMeta, RuntimeException);
  setMetadataFor(IllegalTimeZoneException, 'IllegalTimeZoneException', classMeta, IllegalArgumentException);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(TimeZoneSerializer, 'TimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UtcOffsetSerializer, 'UtcOffsetSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable], VOID, {0: InstantIso8601Serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, [Comparable], VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  setMetadataFor(Month_0, 'Month', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TimeZone, 'TimeZone', classMeta, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(UtcOffset, 'UtcOffset', classMeta, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
    System_instance = this;
  }
  protoOf(System).zic = function () {
    return Companion_getInstance().zic();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function DateTimeFormatException_init_$Init$(cause, $this) {
    IllegalArgumentException_init_$Init$(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$(cause) {
    var tmp = DateTimeFormatException_init_$Init$(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$(cause, $this) {
    RuntimeException_init_$Init$(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$(cause, $this) {
    IllegalArgumentException_init_$Init$(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function get_allMonths() {
    _init_properties_Month_kt__aau5fy();
    return allMonths;
  }
  var allMonths;
  function Month(number) {
    _init_properties_Month_kt__aau5fy();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= number ? number <= 12 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_allMonths().m(number - 1 | 0);
  }
  var properties_initialized_Month_kt_gieo9c;
  function _init_properties_Month_kt__aau5fy() {
    if (!properties_initialized_Month_kt_gieo9c) {
      properties_initialized_Month_kt_gieo9c = true;
      allMonths = asList(values());
    }
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.eid_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).kgo = function () {
    return this.eid_1;
  };
  protoOf(InstantIso8601Serializer).mgo = function (decoder) {
    return Companion_getInstance().wev(decoder.lgr());
  };
  protoOf(InstantIso8601Serializer).fid = function (encoder, value) {
    encoder.tgs(value.toString());
  };
  protoOf(InstantIso8601Serializer).lgo = function (encoder, value) {
    return this.fid(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.gid_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).kgo = function () {
    return this.gid_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).mgo = function (decoder) {
    return Companion_getInstance_0().wev(decoder.lgr());
  };
  protoOf(LocalDateTimeIso8601Serializer).jid = function (encoder, value) {
    encoder.tgs(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).lgo = function (encoder, value) {
    return this.jid(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.kid_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).kgo = function () {
    return this.kid_1;
  };
  protoOf(TimeZoneSerializer).mgo = function (decoder) {
    return Companion_getInstance_1().mid(decoder.lgr());
  };
  protoOf(TimeZoneSerializer).nid = function (encoder, value) {
    encoder.tgs(value.w22());
  };
  protoOf(TimeZoneSerializer).lgo = function (encoder, value) {
    return this.nid(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.pid_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).kgo = function () {
    return this.pid_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).mgo = function (decoder) {
    var zone = Companion_getInstance_1().mid(decoder.lgr());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).qid = function (encoder, value) {
    encoder.tgs(value.w22());
  };
  protoOf(FixedOffsetTimeZoneSerializer).lgo = function (encoder, value) {
    return this.qid(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.rid_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).kgo = function () {
    return this.rid_1;
  };
  protoOf(UtcOffsetSerializer).mgo = function (decoder) {
    return Companion_getInstance_3().wev(decoder.lgr());
  };
  protoOf(UtcOffsetSerializer).tid = function (encoder, value) {
    encoder.tgs(value.toString());
  };
  protoOf(UtcOffsetSerializer).lgo = function (encoder, value) {
    return this.tid(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var time = indexOf(isoString, _Char___init__impl__6a9atx(84), VOID, true);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var tmp0_anonymous = charSequenceGet(isoString, index);
          if (tmp0_anonymous === _Char___init__impl__6a9atx(43) ? true : tmp0_anonymous === _Char___init__impl__6a9atx(45)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, _Char___init__impl__6a9atx(58), offset);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion() {
    Companion_instance = this;
    this.aid_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.bid_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.cid_1 = new Instant_0(Instant.MIN);
    this.did_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).zic = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion).wev = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.uid_1 = value;
  }
  protoOf(Instant_0).vid = function (other) {
    return numberToInt(this.uid_1.compareTo(other.uid_1));
  };
  protoOf(Instant_0).la = function (other) {
    return this.vid(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.uid_1, other.uid_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return numberToInt(this.uid_1.hashCode());
  };
  protoOf(Instant_0).toString = function () {
    return this.uid_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeParseException';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.hid_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.iid_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_0).wev = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(tmp0_let);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_0();
    this.wid_1 = value;
  }
  protoOf(LocalDateTime_0).xid = function () {
    return numberToInt(this.wid_1.year());
  };
  protoOf(LocalDateTime_0).yid = function () {
    return toMonth(this.wid_1.month());
  };
  protoOf(LocalDateTime_0).zid = function () {
    return numberToInt(this.wid_1.dayOfMonth());
  };
  protoOf(LocalDateTime_0).aie = function () {
    return numberToInt(this.wid_1.hour());
  };
  protoOf(LocalDateTime_0).bie = function () {
    return numberToInt(this.wid_1.minute());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.wid_1, other.wid_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return numberToInt(this.wid_1.hashCode());
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.wid_1.toString();
  };
  protoOf(LocalDateTime_0).cie = function (other) {
    return numberToInt(this.wid_1.compareTo(other.wid_1));
  };
  protoOf(LocalDateTime_0).la = function (other) {
    return this.cie(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(numberToInt(_this__u8e3s4.value()));
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var tmp0_let = LocalDateTime.ofInstant(_this__u8e3s4.uid_1, timeZone.oid_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(tmp0_let);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.lid_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_1).die = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_1).mid = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_1();
    this.oid_1 = zoneId;
  }
  protoOf(TimeZone).w22 = function () {
    return this.oid_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.oid_1, other.oid_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return numberToInt(this.oid_1.hashCode());
  };
  protoOf(TimeZone).toString = function () {
    return this.oid_1.toString();
  };
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.wid_1.atZone(timeZone.oid_1).toInstant();
    // Inline function 'kotlin.contracts.contract' call
    return new Instant_0(tmp0_let);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.eie_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    Companion_getInstance_2();
    TimeZone.call(this, zoneId);
    this.gie_1 = offset;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.sid_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_3).wev = function (offsetString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var tmp0_let = ZoneOffset.of(offsetString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new UtcOffset(tmp0_let);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_3();
    this.eie_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return numberToInt(this.eie_1.hashCode());
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.eie_1, other.eie_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.eie_1.toString();
  };
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = System_getInstance;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = LocalDateTime_0;
  _.$_$.e = toInstant;
  _.$_$.f = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
