(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var classMeta = kotlin_kotlin.$_$.kc;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var equals = kotlin_kotlin.$_$.oc;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var hashCode = kotlin_kotlin.$_$.xc;
  var joinToString = kotlin_kotlin.$_$.w8;
  var Map = kotlin_kotlin.$_$.k6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.qk;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var List = kotlin_kotlin.$_$.i6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var numberRangeToNumber = kotlin_kotlin.$_$.qd;
  var ClosedRange = kotlin_kotlin.$_$.oe;
  var isInterface = kotlin_kotlin.$_$.id;
  var contains = kotlin_kotlin.$_$.df;
  var toDouble = kotlin_kotlin.$_$.bi;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.ei;
  var toULongOrNull = kotlin_kotlin.$_$.mi;
  var Companion_getInstance = kotlin_kotlin.$_$.p5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  var ULong = kotlin_kotlin.$_$.yj;
  var toDoubleOrNull = kotlin_kotlin.$_$.ai;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.xh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var lazy_0 = kotlin_kotlin.$_$.rk;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var toLong = kotlin_kotlin.$_$.ae;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.x3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.h4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.n3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.q4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var captureStack = kotlin_kotlin.$_$.ec;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jc;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var coerceAtMost = kotlin_kotlin.$_$.xe;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var singleOrNull = kotlin_kotlin.$_$.ga;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var emptyMap = kotlin_kotlin.$_$.a8;
  var getValue = kotlin_kotlin.$_$.o8;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var copyOf = kotlin_kotlin.$_$.v7;
  var copyOf_0 = kotlin_kotlin.$_$.w7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.bj;
  var invoke = kotlin_kotlin.$_$.kk;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var DeepRecursiveScope = kotlin_kotlin.$_$.cj;
  var Unit = kotlin_kotlin.$_$.bk;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var isObject = kotlin_kotlin.$_$.kd;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var contains_0 = kotlin_kotlin.$_$.mg;
  var plus = kotlin_kotlin.$_$.tk;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var IllegalArgumentException = kotlin_kotlin.$_$.gj;
  var isFinite = kotlin_kotlin.$_$.mk;
  var isFinite_0 = kotlin_kotlin.$_$.lk;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var toUInt = kotlin_kotlin.$_$.ki;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var toULong = kotlin_kotlin.$_$.ni;
  var toUByte = kotlin_kotlin.$_$.ji;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m3;
  var toUShort = kotlin_kotlin.$_$.oi;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p4;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e3;
  var toString_0 = kotlin_kotlin.$_$.f3;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.fa;
  var numberToChar = kotlin_kotlin.$_$.sd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var equals_0 = kotlin_kotlin.$_$.tg;
  var Char = kotlin_kotlin.$_$.xi;
  var toByte = kotlin_kotlin.$_$.zd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.a5;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var toShort = kotlin_kotlin.$_$.be;
  var single = kotlin_kotlin.$_$.nh;
  var emptySet = kotlin_kotlin.$_$.b8;
  var plus_0 = kotlin_kotlin.$_$.s9;
  var toInt = kotlin_kotlin.$_$.di;
  var toList = kotlin_kotlin.$_$.ua;
  var Enum = kotlin_kotlin.$_$.dj;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var last = kotlin_kotlin.$_$.g9;
  var removeLast = kotlin_kotlin.$_$.ba;
  var lastIndexOf = kotlin_kotlin.$_$.hh;
  var Long = kotlin_kotlin.$_$.jj;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a3;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.l5;
  var numberToLong = kotlin_kotlin.$_$.ud;
  var charArray = kotlin_kotlin.$_$.gc;
  var indexOf = kotlin_kotlin.$_$.xg;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, VOID, [StringFormat]);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.siv_1 = configuration;
    this.tiv_1 = serializersModule;
    this.uiv_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).egs = function () {
    return this.tiv_1;
  };
  protoOf(Json).cgp = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.su();
    }
  };
  protoOf(Json).dgp = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.kgo(), null);
    var result = input.ogr(deserializer);
    lexer.iiw();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.df();
    return new JsonImpl(conf, builder.xiw_1);
  }
  function JsonBuilder(json) {
    this.jiw_1 = json.siv_1.yiw_1;
    this.kiw_1 = json.siv_1.dix_1;
    this.liw_1 = json.siv_1.ziw_1;
    this.miw_1 = json.siv_1.aix_1;
    this.niw_1 = json.siv_1.bix_1;
    this.oiw_1 = json.siv_1.cix_1;
    this.piw_1 = json.siv_1.eix_1;
    this.qiw_1 = json.siv_1.fix_1;
    this.riw_1 = json.siv_1.gix_1;
    this.siw_1 = json.siv_1.hix_1;
    this.tiw_1 = json.siv_1.iix_1;
    this.uiw_1 = json.siv_1.jix_1;
    this.viw_1 = json.siv_1.kix_1;
    this.wiw_1 = json.siv_1.lix_1;
    this.xiw_1 = json.egs();
  }
  protoOf(JsonBuilder).df = function () {
    if (this.riw_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.siw_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.oiw_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.piw_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.piw_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.piw_1;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.piw_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.jiw_1, this.liw_1, this.miw_1, this.niw_1, this.oiw_1, this.kiw_1, this.piw_1, this.qiw_1, this.riw_1, this.siw_1, this.tiw_1, this.uiw_1, this.viw_1, this.wiw_1);
  };
  function validateConfiguration($this) {
    if (equals($this.egs(), EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.siv_1.gix_1, $this.siv_1.hix_1);
    $this.egs().ph6(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    this.yiw_1 = encodeDefaults;
    this.ziw_1 = ignoreUnknownKeys;
    this.aix_1 = isLenient;
    this.bix_1 = allowStructuredMapKeys;
    this.cix_1 = prettyPrint;
    this.dix_1 = explicitNulls;
    this.eix_1 = prettyPrintIndent;
    this.fix_1 = coerceInputValues;
    this.gix_1 = useArrayPolymorphism;
    this.hix_1 = classDiscriminator;
    this.iix_1 = allowSpecialFloatingPointValues;
    this.jix_1 = useAlternativeNames;
    this.kix_1 = namingStrategy;
    this.lix_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.yiw_1 + ', ignoreUnknownKeys=' + this.ziw_1 + ', isLenient=' + this.aix_1 + ', ' + ('allowStructuredMapKeys=' + this.bix_1 + ', prettyPrint=' + this.cix_1 + ', explicitNulls=' + this.dix_1 + ', ') + ("prettyPrintIndent='" + this.eix_1 + "', coerceInputValues=" + this.fix_1 + ', useArrayPolymorphism=' + this.gix_1 + ', ') + ("classDiscriminator='" + this.hix_1 + "', allowSpecialFloatingPointValues=" + this.iix_1 + ', useAlternativeNames=' + this.jix_1 + ', ') + ('namingStrategy=' + this.kix_1 + ', decodeEnumsCaseInsensitive=' + this.lix_1 + ')');
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.r();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.s();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.i9(_Char___init__impl__6a9atx(58));
    tmp0_apply.ha(v);
    return tmp0_apply.toString();
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.oix_1 = content;
  }
  protoOf(JsonObject).q = function () {
    return this.oix_1.q();
  };
  protoOf(JsonObject).a3 = function () {
    return this.oix_1.a3();
  };
  protoOf(JsonObject).g = function () {
    return this.oix_1.g();
  };
  protoOf(JsonObject).b3 = function () {
    return this.oix_1.b3();
  };
  protoOf(JsonObject).veq = function (key) {
    return this.oix_1.t2(key);
  };
  protoOf(JsonObject).t2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.veq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).weq = function (key) {
    return this.oix_1.z2(key);
  };
  protoOf(JsonObject).z2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.weq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).l = function () {
    return this.oix_1.l();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.oix_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.oix_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.oix_1.q();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.qix_1.s();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.pix_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qix_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).lcd = function () {
    return this.pix_1;
  };
  protoOf(JsonNull).rix = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).ygy = function (typeParamsSerializers) {
    return this.rix();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    Companion_getInstance_7();
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.lcd();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.six_1 = isString;
    this.tix_1 = coerceToInlineType;
    this.uix_1 = toString(body);
    if (!(this.tix_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.tix_1.sgp()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).lcd = function () {
    return this.uix_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.six_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.uix_1);
      tmp = tmp0_apply.toString();
    } else {
      tmp = this.uix_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.six_1 === other.six_1))
      return false;
    if (!(this.uix_1 === other.uix_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = this.six_1 | 0;
    result = imul(31, result) + getStringHashCode(this.uix_1) | 0;
    return result;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.vix_1 = content;
  }
  protoOf(JsonArray).g = function () {
    return this.vix_1.g();
  };
  protoOf(JsonArray).wix = function (element) {
    return this.vix_1.n(element);
  };
  protoOf(JsonArray).n = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.wix(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).xix = function (elements) {
    return this.vix_1.o1(elements);
  };
  protoOf(JsonArray).o1 = function (elements) {
    return this.xix(elements);
  };
  protoOf(JsonArray).m = function (index) {
    return this.vix_1.m(index);
  };
  protoOf(JsonArray).yix = function (element) {
    return this.vix_1.o(element);
  };
  protoOf(JsonArray).o = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.yix(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).l = function () {
    return this.vix_1.l();
  };
  protoOf(JsonArray).d = function () {
    return this.vix_1.d();
  };
  protoOf(JsonArray).u1 = function (index) {
    return this.vix_1.u1(index);
  };
  protoOf(JsonArray).v1 = function (fromIndex, toIndex) {
    return this.vix_1.v1(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.vix_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.vix_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.vix_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.lcd());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.lcd())).zix();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var tmp0_contains = numberRangeToNumber(IntCompanionObject_getInstance().MIN_VALUE, IntCompanionObject_getInstance().MAX_VALUE);
    if (!contains(isInterface(tmp0_contains, ClosedRange) ? tmp0_contains : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.lcd() + ' is not an Int');
    return result.f1();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.lcd())).zix();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.lcd();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.lcd());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.lcd();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_getInstance()));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.vgo('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.vgo('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.vgo('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.vgo('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.vgo('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().aiy_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().biy_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().ciy_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().diy_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().eiy_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.fiy_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).kgo = function () {
    return this.fiy_1;
  };
  protoOf(JsonElementSerializer).giy = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.ggt(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.ggt(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.ggt(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).lgo = function (encoder, value) {
    return this.giy(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).mgo = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.nix();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.hiy_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).kgo();
    this.iiy_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).qgp = function () {
    return this.hiy_1.qgp();
  };
  protoOf(JsonObjectDescriptor).rgp = function () {
    return this.hiy_1.rgp();
  };
  protoOf(JsonObjectDescriptor).sgp = function () {
    return this.hiy_1.sgp();
  };
  protoOf(JsonObjectDescriptor).lgp = function () {
    return this.hiy_1.lgp();
  };
  protoOf(JsonObjectDescriptor).tgp = function () {
    return this.hiy_1.tgp();
  };
  protoOf(JsonObjectDescriptor).ugp = function (index) {
    return this.hiy_1.ugp(index);
  };
  protoOf(JsonObjectDescriptor).vgp = function (index) {
    return this.hiy_1.vgp(index);
  };
  protoOf(JsonObjectDescriptor).wgp = function (name) {
    return this.hiy_1.wgp(name);
  };
  protoOf(JsonObjectDescriptor).xgp = function (index) {
    return this.hiy_1.xgp(index);
  };
  protoOf(JsonObjectDescriptor).ygp = function (index) {
    return this.hiy_1.ygp(index);
  };
  protoOf(JsonObjectDescriptor).pgp = function () {
    return this.iiy_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.diy_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).kgo = function () {
    return this.diy_1;
  };
  protoOf(JsonObjectSerializer).jiy = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).lgo(encoder, value);
  };
  protoOf(JsonObjectSerializer).lgo = function (encoder, value) {
    return this.jiy(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).mgo = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).mgo(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.kiy_1 = ListSerializer(JsonElementSerializer_getInstance()).kgo();
    this.liy_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).qgp = function () {
    return this.kiy_1.qgp();
  };
  protoOf(JsonArrayDescriptor).rgp = function () {
    return this.kiy_1.rgp();
  };
  protoOf(JsonArrayDescriptor).sgp = function () {
    return this.kiy_1.sgp();
  };
  protoOf(JsonArrayDescriptor).lgp = function () {
    return this.kiy_1.lgp();
  };
  protoOf(JsonArrayDescriptor).tgp = function () {
    return this.kiy_1.tgp();
  };
  protoOf(JsonArrayDescriptor).ugp = function (index) {
    return this.kiy_1.ugp(index);
  };
  protoOf(JsonArrayDescriptor).vgp = function (index) {
    return this.kiy_1.vgp(index);
  };
  protoOf(JsonArrayDescriptor).wgp = function (name) {
    return this.kiy_1.wgp(name);
  };
  protoOf(JsonArrayDescriptor).xgp = function (index) {
    return this.kiy_1.xgp(index);
  };
  protoOf(JsonArrayDescriptor).ygp = function (index) {
    return this.kiy_1.ygp(index);
  };
  protoOf(JsonArrayDescriptor).pgp = function () {
    return this.liy_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.eiy_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).kgo = function () {
    return this.eiy_1;
  };
  protoOf(JsonArraySerializer).miy = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).lgo(encoder, value);
  };
  protoOf(JsonArraySerializer).lgo = function (encoder, value) {
    return this.miy(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).mgo = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).mgo(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.aiy_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).kgo = function () {
    return this.aiy_1;
  };
  protoOf(JsonPrimitiveSerializer).niy = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.ggt(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.ggt(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).lgo = function (encoder, value) {
    return this.niy(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).mgo = function (decoder) {
    var result = asJsonDecoder(decoder).nix();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.biy_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).kgo = function () {
    return this.biy_1;
  };
  protoOf(JsonNullSerializer).oiy = function (encoder, value) {
    verify(encoder);
    encoder.kgs();
  };
  protoOf(JsonNullSerializer).lgo = function (encoder, value) {
    return this.oiy(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).mgo = function (decoder) {
    verify_0(decoder);
    if (decoder.bgr()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.cgr();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.ciy_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).kgo = function () {
    return this.ciy_1;
  };
  protoOf(JsonLiteralSerializer).piy = function (encoder, value) {
    verify(encoder);
    if (value.six_1) {
      return encoder.tgs(value.uix_1);
    }
    if (!(value.tix_1 == null)) {
      return encoder.ugs(value.tix_1).tgs(value.uix_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.uix_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.pgs(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.uix_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.ugs(serializer_0(Companion_getInstance()).kgo());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.pgs(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.uix_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.rgs(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.uix_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.lgs(tmp3_safe_receiver);
    }
    encoder.tgs(value.uix_1);
  };
  protoOf(JsonLiteralSerializer).lgo = function (encoder, value) {
    return this.piy(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).mgo = function (decoder) {
    var result = asJsonDecoder(decoder).nix();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    original$factory();
    return $this.qiy_1.s();
  }
  function defer$1($deferred) {
    this.qiy_1 = lazy_0($deferred);
  }
  protoOf(defer$1).pgp = function () {
    return _get_original__l7ku1m(this).pgp();
  };
  protoOf(defer$1).tgp = function () {
    return _get_original__l7ku1m(this).tgp();
  };
  protoOf(defer$1).rgp = function () {
    return _get_original__l7ku1m(this).rgp();
  };
  protoOf(defer$1).xgp = function (index) {
    return _get_original__l7ku1m(this).xgp(index);
  };
  protoOf(defer$1).wgp = function (name) {
    return _get_original__l7ku1m(this).wgp(name);
  };
  protoOf(defer$1).ugp = function (index) {
    return _get_original__l7ku1m(this).ugp(index);
  };
  protoOf(defer$1).vgp = function (index) {
    return _get_original__l7ku1m(this).vgp(index);
  };
  protoOf(defer$1).ygp = function (index) {
    return _get_original__l7ku1m(this).ygp(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.riy_1 = writer;
    this.siy_1 = true;
  }
  protoOf(Composer).tiy = function () {
    this.siy_1 = true;
  };
  protoOf(Composer).uiy = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).viy = function () {
    this.siy_1 = false;
  };
  protoOf(Composer).wiy = function () {
    return Unit_getInstance();
  };
  protoOf(Composer).xiy = function (v) {
    return this.riy_1.yiy(v);
  };
  protoOf(Composer).ziy = function (v) {
    return this.riy_1.fhi(v);
  };
  protoOf(Composer).aiz = function (v) {
    return this.riy_1.fhi(v.toString());
  };
  protoOf(Composer).biz = function (v) {
    return this.riy_1.fhi(v.toString());
  };
  protoOf(Composer).ciz = function (v) {
    return this.riy_1.diz(toLong(v));
  };
  protoOf(Composer).eiz = function (v) {
    return this.riy_1.diz(toLong(v));
  };
  protoOf(Composer).fiz = function (v) {
    return this.riy_1.diz(toLong(v));
  };
  protoOf(Composer).giz = function (v) {
    return this.riy_1.diz(v);
  };
  protoOf(Composer).hiz = function (v) {
    return this.riy_1.fhi(v.toString());
  };
  protoOf(Composer).iiz = function (value) {
    return this.riy_1.jiz(value);
  };
  function Composer_0(sb, json) {
    return json.siv_1.cix_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.miz_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).fiz = function (v) {
    if (this.miz_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.iiz(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.ziy(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).giz = function (v) {
    if (this.miz_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.iiz(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toULong' call
      tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.ziy(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).ciz = function (v) {
    if (this.miz_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.iiz(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.ziy(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).eiz = function (v) {
    if (this.miz_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.iiz(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.ziy(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.piz_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).iiz = function (value) {
    if (this.piz_1) {
      protoOf(Composer).iiz.call(this, value);
    } else {
      protoOf(Composer).ziy.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.siz_1 = json;
    this.tiz_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).tiy = function () {
    this.siy_1 = true;
    this.tiz_1 = this.tiz_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).uiy = function () {
    this.tiz_1 = this.tiz_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).viy = function () {
    this.siy_1 = false;
    this.ziy('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.tiz_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.ziy(this.siz_1.siv_1.eix_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  protoOf(ComposerWithPrettyPrint).wiy = function () {
    this.xiy(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.viz_1 = !descriptor.ygp(index) ? descriptor.vgp(index).lgp() : false;
    return $this.viz_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.uiz_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.viz_1 = false;
  }
  protoOf(JsonElementMarker).jgx = function (index) {
    this.uiz_1.jgx(index);
  };
  protoOf(JsonElementMarker).kgx = function () {
    return this.uiz_1.kgx();
  };
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.wiz('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.pgp() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.tgp() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.wgp(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.siv_1.jix_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.xgp(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.tgp(), CLASS_getInstance()) ? json.siv_1.kix_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.yiz(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.siv_1.lix_1 ? equals(descriptor.tgp(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).z2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.yiz(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.ugp(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(tmp0_filterIsInstanceTo);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ziz_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.xgp(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.aj0(_this__u8e3s4, i, _this__u8e3s4.xgp(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.l()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.tgp(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).t2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.xgp(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.xgp(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.a5(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.rgp();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        var baseName = $this_serializationNamesIndices.xgp(tmp_2);
        tmp$ret$1 = $strategy.aj0($this_serializationNamesIndices, tmp_2, baseName);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.dj0_1, 2);
    $this.bj0_1 = copyOf($this.bj0_1, newSize);
    $this.cj0_1 = copyOf_0($this.cj0_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.bj0_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.cj0_1 = tmp_2;
    this.dj0_1 = -1;
  }
  protoOf(JsonPath).ej0 = function (sd) {
    this.dj0_1 = this.dj0_1 + 1 | 0;
    var depth = this.dj0_1;
    if (depth === this.bj0_1.length) {
      resize(this);
    }
    this.bj0_1[depth] = sd;
  };
  protoOf(JsonPath).fj0 = function (index) {
    this.cj0_1[this.dj0_1] = index;
  };
  protoOf(JsonPath).gj0 = function (key) {
    var tmp;
    if (!(this.cj0_1[this.dj0_1] === -2)) {
      this.dj0_1 = this.dj0_1 + 1 | 0;
      tmp = this.dj0_1 === this.bj0_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.bj0_1[this.dj0_1] = key;
    this.cj0_1[this.dj0_1] = -2;
  };
  protoOf(JsonPath).hj0 = function () {
    if (this.cj0_1[this.dj0_1] === -2) {
      this.bj0_1[this.dj0_1] = Tombstone_getInstance();
    }
  };
  protoOf(JsonPath).ij0 = function () {
    var depth = this.dj0_1;
    if (this.cj0_1[depth] === -2) {
      this.cj0_1[depth] = -1;
      this.dj0_1 = this.dj0_1 - 1 | 0;
    }
    if (!(this.dj0_1 === -1)) {
      this.dj0_1 = this.dj0_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).jj0 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.ia('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.dj0_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.bj0_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.tgp(), LIST_getInstance())) {
            if (!(this.cj0_1[index] === -1)) {
              tmp0_apply.ia('[');
              tmp0_apply.ha(this.cj0_1[index]);
              tmp0_apply.ia(']');
            }
          } else {
            var idx = this.cj0_1[index];
            if (idx >= 0) {
              tmp0_apply.ia('.');
              tmp0_apply.ia(element.xgp(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.ia('[');
            tmp0_apply.ia("'");
            tmp0_apply.ha(element);
            tmp0_apply.ia("'");
            tmp0_apply.ia(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    return tmp0_apply.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.jj0();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = values().length;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.ggt(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.sj0_1.vj0(get_TC_BEGIN_OBJ());
    if ($this.sj0_1.wj0() === get_TC_COMMA()) {
      $this.sj0_1.wiz('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.sj0_1.xj0()) {
      var key = $this.tj0_1 ? $this.sj0_1.zj0() : $this.sj0_1.yj0();
      $this.sj0_1.vj0(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.aj1();
      // Inline function 'kotlin.collections.set' call
      result.a5(key, element);
      lastToken = $this.sj0_1.bj1();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.sj0_1.wiz('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.sj0_1.vj0(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.sj0_1.wiz('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function readArray($this) {
    var lastToken = $this.sj0_1.bj1();
    if ($this.sj0_1.wj0() === get_TC_COMMA()) {
      $this.sj0_1.wiz('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.sj0_1.xj0()) {
      var element = $this.aj1();
      result.a(element);
      lastToken = $this.sj0_1.bj1();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.sj0_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.eiw_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.wiz(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.sj0_1.vj0(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.sj0_1.wiz('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.tj0_1 ? true : !isString) {
      tmp = $this.sj0_1.zj0();
    } else {
      tmp = $this.sj0_1.yj0();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.xj1_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).cj2 = function ($this$$receiver, it, $completion) {
    var tmp = this.dj2($this$$receiver, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.cj2(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.aj2_1 = this.xj1_1.sj0_1.wj0();
            if (this.aj2_1 === get_TC_STRING()) {
              this.bj2_1 = readValue(this.xj1_1, true);
              this.dl_1 = 2;
              continue $sm;
            } else {
              if (this.aj2_1 === get_TC_OTHER()) {
                this.bj2_1 = readValue(this.xj1_1, false);
                this.dl_1 = 2;
                continue $sm;
              } else {
                if (this.aj2_1 === get_TC_BEGIN_OBJ()) {
                  this.dl_1 = 1;
                  suspendResult = readObject_0(this.yj1_1, this.xj1_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.aj2_1 === get_TC_BEGIN_LIST()) {
                    this.bj2_1 = readArray(this.xj1_1);
                    this.dl_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.xj1_1.sj0_1.wiz("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.bj2_1 = suspendResult;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            return this.bj2_1;
          case 3:
            throw this.gl_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).dj2 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.xj1_1, completion);
    i.yj1_1 = $this$$receiver;
    i.zj1_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.cj2($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kj1_1 = _this__u8e3s4;
    this.lj1_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.mj1_1 = this.kj1_1.sj0_1.vj0(get_TC_BEGIN_OBJ());
            if (this.kj1_1.sj0_1.wj0() === get_TC_COMMA()) {
              this.kj1_1.sj0_1.wiz('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.nj1_1 = LinkedHashMap_init_$Create$();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.kj1_1.sj0_1.xj0()) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.oj1_1 = this.kj1_1.tj0_1 ? this.kj1_1.sj0_1.zj0() : this.kj1_1.sj0_1.yj0();
            this.kj1_1.sj0_1.vj0(get_TC_COLON());
            this.dl_1 = 2;
            suspendResult = this.lj1_1.ma(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.nj1_1.a5(this.oj1_1, element);
            this.mj1_1 = this.kj1_1.sj0_1.bj1();
            var tmp0_subject = this.mj1_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.dl_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.dl_1 = 4;
                continue $sm;
              } else {
                this.kj1_1.sj0_1.wiz('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.dl_1 = 1;
            continue $sm;
          case 4:
            if (this.mj1_1 === get_TC_BEGIN_OBJ()) {
              this.kj1_1.sj0_1.vj0(get_TC_END_OBJ());
            } else if (this.mj1_1 === get_TC_COMMA()) {
              this.kj1_1.sj0_1.wiz('Unexpected trailing comma');
            }

            return new JsonObject(this.nj1_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.sj0_1 = lexer;
    this.tj0_1 = configuration.aix_1;
    this.uj0_1 = 0;
  }
  protoOf(JsonTreeReader).aj1 = function () {
    var token = this.sj0_1.wj0();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.uj0_1 = this.uj0_1 + 1 | 0;
      if (this.uj0_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.uj0_1 = this.uj0_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.sj0_1.wiz('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.qgp().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.ej2_1;
    }
    return json.siv_1.hix_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.mix().siv_1.gix_1;
    }
    if (tmp) {
      return deserializer.mgo(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.kgo(), _this__u8e3s4.mix());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.nix();
    var tmp1_cast = deserializer.kgo();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.pgp() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    var jsonTree = tmp0_cast;
    var tmp0_safe_receiver = jsonTree.weq(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lcd();
    var tmp2_elvis_lhs = deserializer.agp(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.mix();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.kgo()).n(classDiscriminator)) {
      var baseName = serializer.kgo().pgp();
      var actualName = actualSerializer.kgo().pgp();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.tgp();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.mh() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.fj2_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.mh() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.xgp(i);
        if (name === $this.gj2_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.fj2_1 = useArrayPolymorphism;
    this.gj2_1 = discriminator;
  }
  protoOf(PolymorphismValidator).sh6 = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).vh6 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.kgo();
    checkKind_0(this, descriptor, actualClass);
    if (!this.fj2_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).wh6 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).xh6 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.xiz_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).hj2 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.xiz_1;
    var value_0 = tmp0_getOrPut.z2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      tmp0_getOrPut.a5(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp1_set = tmp;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.a5(tmp2_set, tmp3_set);
  };
  protoOf(DescriptorSchemaCache).yiz = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.ij2(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.hj2(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).ij2 = function (descriptor, key) {
    var tmp0_safe_receiver = this.xiz_1.z2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.z2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.jj2_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.jj2_1 === unknownKey) {
      _this__u8e3s4.jj2_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.ggs(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.yiv_1.wj0() === get_TC_COMMA()) {
      $this.yiv_1.wiz('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.aiw_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.aiw_1 === -1)) {
        hasComma = $this.yiv_1.lj2();
      }
    } else {
      $this.yiv_1.kj2(get_COLON());
    }
    var tmp;
    if ($this.yiv_1.xj0()) {
      if (decodingKey) {
        if ($this.aiw_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.yiv_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.eiw_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.wiz(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.yiv_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.eiw_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.wiz(tmp$ret$1, tmp5_require);
          }
        }
      }
      $this.aiw_1 = $this.aiw_1 + 1 | 0;
      tmp = $this.aiw_1;
    } else {
      if (hasComma) {
        $this.yiv_1.wiz("Expected '}', but had ',' instead");
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.wiv_1;
      var tmp1_tryCoerceValue = descriptor.vgp(index);
      var tmp;
      if (!tmp1_tryCoerceValue.lgp()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.yiv_1.mj2(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.tgp(), ENUM_getInstance())) {
        var tmp_0;
        if (tmp1_tryCoerceValue.lgp()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.yiv_1.mj2(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.yiv_1.nj2($this.ciw_1.aix_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.yiv_1.yj0();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.yiv_1.lj2();
    while ($this.yiv_1.xj0()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.yiv_1.kj2(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.wiv_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.ciw_1.fix_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.yiv_1.lj2();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.diw_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.jgx(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.yiv_1.wiz('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.diw_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kgx();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.ciw_1.ziw_1 ? true : trySkip($this.biw_1, $this, key)) {
      $this.yiv_1.pj2($this.ciw_1.aix_1);
    } else {
      $this.yiv_1.oj2(key);
    }
    return $this.yiv_1.lj2();
  }
  function decodeListIndex($this) {
    var hasComma = $this.yiv_1.lj2();
    var tmp;
    if ($this.yiv_1.xj0()) {
      if (!($this.aiw_1 === -1) ? !hasComma : false) {
        $this.yiv_1.wiz('Expected end of the array or comma');
      }
      $this.aiw_1 = $this.aiw_1 + 1 | 0;
      tmp = $this.aiw_1;
    } else {
      if (hasComma) {
        $this.yiv_1.wiz('Unexpected trailing comma');
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.ciw_1.aix_1) {
      tmp = $this.yiv_1.rj2();
    } else {
      tmp = $this.yiv_1.qj2();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.wiv_1 = json;
    this.xiv_1 = mode;
    this.yiv_1 = lexer;
    this.ziv_1 = this.wiv_1.egs();
    this.aiw_1 = -1;
    this.biw_1 = discriminatorHolder;
    this.ciw_1 = this.wiv_1.siv_1;
    this.diw_1 = this.ciw_1.dix_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).mix = function () {
    return this.wiv_1;
  };
  protoOf(StreamingJsonDecoder).egs = function () {
    return this.ziv_1;
  };
  protoOf(StreamingJsonDecoder).nix = function () {
    return (new JsonTreeReader(this.wiv_1.siv_1, this.yiv_1)).aj1();
  };
  protoOf(StreamingJsonDecoder).ogr = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.wiv_1.siv_1.gix_1;
      }
      if (tmp) {
        return deserializer.mgo(this);
      }
      var discriminator = classDiscriminator(deserializer.kgo(), this.wiv_1);
      var type = this.yiv_1.sj2(discriminator, this.ciw_1.aix_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.agp(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.biw_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.mgo(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.ggp_1, plus(e.message, ' at path: ') + this.yiv_1.fiw_1.jj0(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).pgr = function (descriptor) {
    var newMode = switchMode(this.wiv_1, descriptor);
    this.yiv_1.fiw_1.ej0(descriptor);
    this.yiv_1.kj2(newMode.vj2_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.h7_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.wiv_1, newMode, this.yiv_1, descriptor, this.biw_1);
        break;
      default:
        var tmp_0;
        if (this.xiv_1.equals(newMode) ? this.wiv_1.siv_1.dix_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.wiv_1, newMode, this.yiv_1, descriptor, this.biw_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).qgr = function (descriptor) {
    if (this.wiv_1.siv_1.ziw_1 ? descriptor.rgp() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.yiv_1.kj2(this.xiv_1.wj2_1);
    this.yiv_1.fiw_1.ij0();
  };
  protoOf(StreamingJsonDecoder).bgr = function () {
    var tmp;
    var tmp0_safe_receiver = this.diw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.viz_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.yiv_1.xj2();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).cgr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.xiv_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.yiv_1.fiw_1.hj0();
    }
    var value = protoOf(AbstractDecoder).bgs.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.yiv_1.fiw_1.gj0(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).ggs = function (descriptor) {
    var index;
    switch (this.xiv_1.h7_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.xiv_1.equals(WriteMode_MAP_getInstance())) {
      this.yiv_1.fiw_1.fj0(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).dgr = function () {
    var tmp;
    if (this.ciw_1.aix_1) {
      tmp = this.yiv_1.zj2();
    } else {
      tmp = this.yiv_1.yj2();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).egr = function () {
    var value = this.yiv_1.zix();
    if (!value.equals(toLong(value.tk()))) {
      this.yiv_1.wiz("Failed to parse byte for input '" + toString(value) + "'");
    }
    return value.tk();
  };
  protoOf(StreamingJsonDecoder).fgr = function () {
    var value = this.yiv_1.zix();
    if (!value.equals(toLong(value.uk()))) {
      this.yiv_1.wiz("Failed to parse short for input '" + toString(value) + "'");
    }
    return value.uk();
  };
  protoOf(StreamingJsonDecoder).ggr = function () {
    var value = this.yiv_1.zix();
    if (!value.equals(toLong(value.f1()))) {
      this.yiv_1.wiz("Failed to parse int for input '" + toString(value) + "'");
    }
    return value.f1();
  };
  protoOf(StreamingJsonDecoder).hgr = function () {
    return this.yiv_1.zix();
  };
  protoOf(StreamingJsonDecoder).igr = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.yiv_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'float' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.wiv_1.siv_1.iix_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.yiv_1, result);
  };
  protoOf(StreamingJsonDecoder).jgr = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.yiv_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'double' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.wiv_1.siv_1.iix_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.yiv_1, result);
  };
  protoOf(StreamingJsonDecoder).kgr = function () {
    var string = this.yiv_1.zj0();
    if (!(string.length === 1)) {
      this.yiv_1.wiz("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).lgr = function () {
    var tmp;
    if (this.ciw_1.aix_1) {
      tmp = this.yiv_1.rj2();
    } else {
      tmp = this.yiv_1.yj0();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mgr = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.yiv_1, this.wiv_1) : protoOf(AbstractDecoder).mgr.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.aj3_1 = lexer;
    this.bj3_1 = json.egs();
  }
  protoOf(JsonDecoderForUnsignedTypes).egs = function () {
    return this.bj3_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).ggs = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(JsonDecoderForUnsignedTypes).ggr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.aj3_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'UInt' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).hgr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.aj3_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'ULong' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).egr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.aj3_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'UByte' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).fgr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.aj3_1;
      var input = tmp0_parseString.zj0();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(tmp0_toShort);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0_parseString.wiz("Failed to parse type 'UShort' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.kj0_1.viy();
    $this.tgs(ensureNotNull($this.rj0_1));
    $this.kj0_1.xiy(get_COLON());
    $this.kj0_1.wiy();
    $this.tgs(descriptor.pgp());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.kj0_1 = composer;
    this.lj0_1 = json;
    this.mj0_1 = mode;
    this.nj0_1 = modeReuseCache;
    this.oj0_1 = this.lj0_1.egs();
    this.pj0_1 = this.lj0_1.siv_1;
    this.qj0_1 = false;
    this.rj0_1 = null;
    var i = this.mj0_1.h7_1;
    if (!(this.nj0_1 == null)) {
      if (!(this.nj0_1[i] === null) ? true : !(this.nj0_1[i] === this)) {
        this.nj0_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).mix = function () {
    return this.lj0_1;
  };
  protoOf(StreamingJsonEncoder).egs = function () {
    return this.oj0_1;
  };
  protoOf(StreamingJsonEncoder).lgt = function (descriptor, index) {
    return this.pj0_1.yiw_1;
  };
  protoOf(StreamingJsonEncoder).ggt = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.mix().siv_1.gix_1;
      }
      if (tmp) {
        serializer.lgo(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.kgo(), this.mix());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.kgo().tgp());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.rj0_1 = baseClassDiscriminator;
      actualSerializer.lgo(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).pgr = function (descriptor) {
    var newMode = switchMode(this.lj0_1, descriptor);
    if (!(newMode.vj2_1 === get_INVALID())) {
      this.kj0_1.xiy(newMode.vj2_1);
      this.kj0_1.tiy();
    }
    if (!(this.rj0_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.rj0_1 = null;
    }
    if (this.mj0_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.nj0_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.h7_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.kj0_1, this.lj0_1, newMode, this.nj0_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).qgr = function (descriptor) {
    if (!(this.mj0_1.wj2_1 === get_INVALID())) {
      this.kj0_1.uiy();
      this.kj0_1.viy();
      this.kj0_1.xiy(this.mj0_1.wj2_1);
    }
  };
  protoOf(StreamingJsonEncoder).igs = function (descriptor, index) {
    switch (this.mj0_1.h7_1) {
      case 1:
        if (!this.kj0_1.siy_1) {
          this.kj0_1.xiy(get_COMMA());
        }

        this.kj0_1.viy();
        break;
      case 2:
        if (!this.kj0_1.siy_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.kj0_1.xiy(get_COMMA());
            this.kj0_1.viy();
            tmp_0 = true;
          } else {
            this.kj0_1.xiy(get_COLON());
            this.kj0_1.wiy();
            tmp_0 = false;
          }
          tmp.qj0_1 = tmp_0;
        } else {
          this.qj0_1 = true;
          this.kj0_1.viy();
        }

        break;
      case 3:
        if (index === 0)
          this.qj0_1 = true;
        if (index === 1) {
          this.kj0_1.xiy(get_COMMA());
          this.kj0_1.wiy();
          this.qj0_1 = false;
        }

        break;
      default:
        if (!this.kj0_1.siy_1) {
          this.kj0_1.xiy(get_COMMA());
        }

        this.kj0_1.viy();
        this.tgs(getJsonElementName(descriptor, this.lj0_1, index));
        this.kj0_1.xiy(get_COLON());
        this.kj0_1.wiy();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).hgt = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.pj0_1.dix_1) {
      protoOf(AbstractEncoder).hgt.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).ugs = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.kj0_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.kj0_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.kj0_1.riy_1, this.qj0_1);
      }
      tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.lj0_1, this.mj0_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.kj0_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.kj0_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.kj0_1.riy_1, this.qj0_1);
      }
      tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.lj0_1, this.mj0_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).ugs.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).kgs = function () {
    this.kj0_1.ziy(get_NULL());
  };
  protoOf(StreamingJsonEncoder).lgs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.hiz(value);
    }
  };
  protoOf(StreamingJsonEncoder).mgs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.ciz(value);
    }
  };
  protoOf(StreamingJsonEncoder).ngs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.eiz(value);
    }
  };
  protoOf(StreamingJsonEncoder).ogs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.fiz(value);
    }
  };
  protoOf(StreamingJsonEncoder).pgs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.giz(value);
    }
  };
  protoOf(StreamingJsonEncoder).qgs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.aiz(value);
    }
    if (!this.pj0_1.iix_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.kj0_1.riy_1));
    }
  };
  protoOf(StreamingJsonEncoder).rgs = function (value) {
    if (this.qj0_1) {
      this.tgs(value.toString());
    } else {
      this.kj0_1.biz(value);
    }
    if (!this.pj0_1.iix_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.kj0_1.riy_1));
    }
  };
  protoOf(StreamingJsonEncoder).sgs = function (value) {
    this.tgs(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).tgs = function (value) {
    return this.kj0_1.iiz(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.sgp() ? get_unsignedNumberDescriptors().n(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.sgp() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).kgo(), serializer_0(Companion_getInstance()).kgo(), serializer_2(Companion_getInstance_2()).kgo(), serializer_3(Companion_getInstance_3()).kgo()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      tmp = numberToChar(d + 48 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      tmp = numberToChar(tmp_0 + 97 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.i9(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var tmp0_get_code_gknlva = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.wi(value, lastPos, i);
          _this__u8e3s4.ia(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.wi(value, lastPos, value.length);
    } else {
      _this__u8e3s4.ia(value);
    }
    _this__u8e3s4.i9(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_apply = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      tmp0_apply[34] = '\\"';
      // Inline function 'kotlin.code' call
      tmp0_apply[92] = '\\\\';
      // Inline function 'kotlin.code' call
      tmp0_apply[9] = '\\t';
      // Inline function 'kotlin.code' call
      tmp0_apply[8] = '\\b';
      // Inline function 'kotlin.code' call
      tmp0_apply[10] = '\\n';
      // Inline function 'kotlin.code' call
      tmp0_apply[13] = '\\r';
      tmp0_apply[12] = '\\f';
      ESCAPE_STRINGS = tmp0_apply;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var tmp = 34;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp] = toByte(34);
      // Inline function 'kotlin.code' call
      var tmp_0 = 92;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_0] = toByte(92);
      // Inline function 'kotlin.code' call
      var tmp_1 = 9;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_1] = toByte(116);
      // Inline function 'kotlin.code' call
      var tmp_2 = 8;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_2] = toByte(98);
      // Inline function 'kotlin.code' call
      var tmp_3 = 10;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_3] = toByte(110);
      // Inline function 'kotlin.code' call
      var tmp_4 = 13;
      // Inline function 'kotlin.code' call
      tmp0_apply_0[tmp_4] = toByte(114);
      // Inline function 'kotlin.code' call
      tmp0_apply_0[12] = toByte(102);
      ESCAPE_MARKERS = tmp0_apply_0;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.hj3()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.ej3_1 = json;
    this.fj3_1 = value;
    this.gj3_1 = this.mix().siv_1;
  }
  protoOf(AbstractJsonTreeDecoder).mix = function () {
    return this.ej3_1;
  };
  protoOf(AbstractJsonTreeDecoder).s = function () {
    return this.fj3_1;
  };
  protoOf(AbstractJsonTreeDecoder).egs = function () {
    return this.mix().egs();
  };
  protoOf(AbstractJsonTreeDecoder).hj3 = function () {
    var tmp0_safe_receiver = this.qh4();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.ij3(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.s() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).nix = function () {
    return this.hj3();
  };
  protoOf(AbstractJsonTreeDecoder).ogr = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).rh4 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).pgr = function (descriptor) {
    var currentObject = this.hj3();
    var tmp0_subject = descriptor.tgp();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.mix();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.pgp() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.mix();
        var keyDescriptor = carrierDescriptor(descriptor.vgp(0), tmp0_selectMapMode.egs());
        var keyKind = keyDescriptor.tgp();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.mix();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.pgp() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (tmp0_selectMapMode.siv_1.bix_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.mix();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.pgp() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.mix();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.pgp() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).qgr = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).bgr = function () {
    var tmp = this.hj3();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).jj3 = function (tag) {
    var currentElement = this.ij3(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.hj3()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).kj3 = function (tag) {
    return !(this.ij3(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).th4 = function (tag) {
    return this.kj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).lj3 = function (tag) {
    var value = this.jj3(tag);
    if (!this.mix().siv_1.aix_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.six_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.hj3()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).uh4 = function (tag) {
    return this.lj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).mj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).vh4 = function (tag) {
    return this.mj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).nj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).wh4 = function (tag) {
    return this.nj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).oj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).xh4 = function (tag) {
    return this.oj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).pj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).yh4 = function (tag) {
    return this.pj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).qj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.mix().siv_1.iix_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.hj3()));
  };
  protoOf(AbstractJsonTreeDecoder).zh4 = function (tag) {
    return this.qj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).rj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(tmp0_primitive);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.mix().siv_1.iix_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.hj3()));
  };
  protoOf(AbstractJsonTreeDecoder).ah5 = function (tag) {
    return this.rj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).sj3 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.jj3(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(tmp0_primitive.lcd());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).bh5 = function (tag) {
    return this.sj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).tj3 = function (tag) {
    var value = this.jj3(tag);
    if (!this.mix().siv_1.aix_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.six_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.hj3()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.hj3()));
    return value.lcd();
  };
  protoOf(AbstractJsonTreeDecoder).ch5 = function (tag) {
    return this.tj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).uj3 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.jj3(tag).lcd()), this.mix()) : protoOf(NamedValueDecoder).dh5.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).dh5 = function (tag, inlineDescriptor) {
    return this.uj3((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).mgr = function (descriptor) {
    return !(this.qh4() == null) ? protoOf(NamedValueDecoder).mgr.call(this, descriptor) : (new JsonPrimitiveDecoder(this.mix(), this.s())).mgr(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.mix();
      var tmp1_tryCoerceValue = descriptor.vgp(index);
      var tmp;
      if (!tmp1_tryCoerceValue.lgp()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.ij3(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(tmp1_tryCoerceValue.tgp(), ENUM_getInstance())) {
        var tmp_1;
        if (tmp1_tryCoerceValue.lgp()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.ij3(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.ij3(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.ej4_1 = (!$this.mix().siv_1.dix_1 ? !descriptor.ygp(index) : false) ? descriptor.vgp(index).lgp() : false;
    return $this.ej4_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.aj4_1 = value;
    this.bj4_1 = polyDiscriminator;
    this.cj4_1 = polyDescriptor;
    this.dj4_1 = 0;
    this.ej4_1 = false;
  }
  protoOf(JsonTreeDecoder).s = function () {
    return this.aj4_1;
  };
  protoOf(JsonTreeDecoder).ggs = function (descriptor) {
    while (this.dj4_1 < descriptor.rgp()) {
      var tmp1 = this.dj4_1;
      this.dj4_1 = tmp1 + 1 | 0;
      var name = this.lh4(descriptor, tmp1);
      var index = this.dj4_1 - 1 | 0;
      this.ej4_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.s();
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).t2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.gj3_1.fix_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeDecoder).bgr = function () {
    return !this.ej4_1 ? protoOf(AbstractJsonTreeDecoder).bgr.call(this) : false;
  };
  protoOf(JsonTreeDecoder).mh4 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.mix());
    var baseName = descriptor.xgp(index);
    if (strategy == null) {
      if (!this.gj3_1.jix_1)
        return baseName;
      if (this.s().a3().n(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.mix(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.s().a3();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.z2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.aj0(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).ij3 = function (tag) {
    return getValue(this.s(), tag);
  };
  protoOf(JsonTreeDecoder).pgr = function (descriptor) {
    if (descriptor === this.cj4_1) {
      var tmp = this.mix();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var tmp0_cast = this.hj3();
      var tmp1_cast = this.cj4_1;
      if (!(tmp0_cast instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.pgp() + ', but had ' + getKClassFromExpression(tmp0_cast));
      }
      return new JsonTreeDecoder(tmp, tmp0_cast, this.bj4_1, this.cj4_1);
    }
    return protoOf(AbstractJsonTreeDecoder).pgr.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).qgr = function (descriptor) {
    var tmp;
    if (this.gj3_1.ziw_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.tgp();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var strategy = namingStrategy(descriptor, this.mix());
    var tmp_1;
    if (strategy == null ? !this.gj3_1.jix_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.mix(), descriptor).a3();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.mix()).ij2(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3();
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.s().a3().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.n(key) ? !(key === this.bj4_1) : false) {
        throw UnknownKeyException(key, this.s().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.kj4_1 = value;
    this.lj4_1 = this.kj4_1.g();
    this.mj4_1 = -1;
  }
  protoOf(JsonTreeListDecoder).s = function () {
    return this.kj4_1;
  };
  protoOf(JsonTreeListDecoder).mh4 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).ij3 = function (tag) {
    return this.kj4_1.m(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).ggs = function (descriptor) {
    while (this.mj4_1 < (this.lj4_1 - 1 | 0)) {
      this.mj4_1 = this.mj4_1 + 1 | 0;
      return this.mj4_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.sj4_1 = value;
    this.eh5(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).s = function () {
    return this.sj4_1;
  };
  protoOf(JsonPrimitiveDecoder).ggs = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).ij3 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.sj4_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.dj5_1 = value;
    this.ej5_1 = toList(this.dj5_1.a3());
    this.fj5_1 = imul(this.ej5_1.g(), 2);
    this.gj5_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).s = function () {
    return this.dj5_1;
  };
  protoOf(JsonTreeMapDecoder).mh4 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.ej5_1.m(i);
  };
  protoOf(JsonTreeMapDecoder).ggs = function (descriptor) {
    while (this.gj5_1 < (this.fj5_1 - 1 | 0)) {
      this.gj5_1 = this.gj5_1 + 1 | 0;
      return this.gj5_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(JsonTreeMapDecoder).ij3 = function (tag) {
    return (this.gj5_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.dj5_1, tag);
  };
  protoOf(JsonTreeMapDecoder).qgr = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.kgo())).ogr(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.vj2_1 = begin;
    this.wj2_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.tgp();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.vgp(0), _this__u8e3s4.egs());
          var keyKind = keyDescriptor.tgp();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.siv_1.bix_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.tgp(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.sgp()) {
      tmp = carrierDescriptor(_this__u8e3s4.vgp(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.hj5(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.hj5(lastPosition, currentPosition);
    var result = $this.hiw_1.toString();
    $this.hiw_1.xi(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.giw_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.giw_1 = null;
    return tmp0_also;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.jgc(), $this.eiw_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.ij5(currentPosition);
    if (currentPosition === -1) {
      $this.wiz('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.jgc();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.jgc(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.wiz("Invalid escaped char '" + new Char(currentChar) + "'");
    }
    $this.hiw_1.i9(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.eiw_1 = startPos;
      $this.jj5();
      if (($this.eiw_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.wiz('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.eiw_1);
    }
    $this.hiw_1.i9(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = tmp_0 - 48 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = (tmp_1 - 97 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      tmp = (tmp_2 - 65 | 0) + 10 | 0;
    } else {
      $this.wiz("Invalid toHexChar char '" + new Char(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.ij5(start);
    if (current >= charSequenceLength($this.jgc()) ? true : current === -1) {
      $this.wiz('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.jgc();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0_get_code_gknlva = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(tmp0_get_code_gknlva) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    if (tmp1_subject === 116) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      if (tmp1_subject === 102) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.wiz("Expected valid boolean literal prefix, but had '" + $this.zj0() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.jgc()) - current | 0) < literalSuffix.length) {
      $this.wiz('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.jgc(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.wiz("Expected valid boolean literal prefix, but had '" + $this.zj0() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.eiw_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var tmp0_pow = -exponentAccumulator.pd();
        tmp = Math.pow(10.0, tmp0_pow);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var tmp1_pow = exponentAccumulator.pd();
        tmp = Math.pow(10.0, tmp1_pow);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.eiw_1 = 0;
    this.fiw_1 = new JsonPath();
    this.giw_1 = null;
    this.hiw_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).jj5 = function () {
  };
  protoOf(AbstractJsonLexer).kj5 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).iiw = function () {
    var nextToken = this.bj1();
    if (!(nextToken === 10)) {
      this.wiz('Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.jgc(), this.eiw_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).vj0 = function (expected) {
    var token = this.bj1();
    if (!(token === expected)) {
      this.lj5(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).kj2 = function (expected) {
    this.jj5();
    var source = this.jgc();
    var cpos = this.eiw_1;
    $l$loop_0: while (true) {
      cpos = this.ij5(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.eiw_1 = cpos;
      if (c === expected)
        return Unit_getInstance();
      this.mj5(expected);
    }
    this.eiw_1 = cpos;
    this.mj5(expected);
  };
  protoOf(AbstractJsonLexer).mj5 = function (expected) {
    if (this.eiw_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.eiw_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.eiw_1 = this.eiw_1 - 1 | 0;
          tmp$ret$1 = this.zj0();
          break $l$block;
        }finally {
          this.eiw_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.nj5("Expected string literal but 'null' literal was found", this.eiw_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.lj5(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).oj5 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.eiw_1 - 1 | 0 : this.eiw_1;
    var s = (this.eiw_1 === charSequenceLength(this.jgc()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.jgc(), position));
    this.wiz('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).lj5 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.oj5(expectedToken, wasConsumed) : $super.oj5.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).wj0 = function () {
    var source = this.jgc();
    var cpos = this.eiw_1;
    $l$loop_0: while (true) {
      cpos = this.ij5(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.eiw_1 = cpos;
      return charToTokenClass(ch);
    }
    this.eiw_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).mj2 = function (doConsume) {
    var current = this.pj5();
    current = this.ij5(current);
    var len = charSequenceLength(this.jgc()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.jgc(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.jgc(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.eiw_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).xj2 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.mj2(doConsume) : $super.mj2.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).pj5 = function () {
    var current = this.eiw_1;
    $l$loop_0: while (true) {
      current = this.ij5(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.jgc(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.eiw_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).nj2 = function (isLenient) {
    var token = this.wj0();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.zj0();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.yj0();
    }
    var string = tmp;
    this.giw_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).qj5 = function () {
    this.giw_1 = null;
  };
  protoOf(AbstractJsonLexer).rj5 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.jgc();
    return toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).yj0 = function () {
    if (!(this.giw_1 == null)) {
      return takePeeked(this);
    }
    return this.qj2();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.ij5(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.wiz('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.hj5(lastPosition, currentPosition);
          currentPosition = this.ij5(currentPosition);
          if (currentPosition === -1) {
            this.wiz('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.rj5(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.eiw_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).rj2 = function () {
    var result = this.zj0();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.wiz("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).zj0 = function () {
    if (!(this.giw_1 == null)) {
      return takePeeked(this);
    }
    var current = this.pj5();
    if (current >= charSequenceLength(this.jgc()) ? true : current === -1) {
      this.wiz('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.jgc(), current));
    if (token === 1) {
      return this.yj0();
    }
    if (!(token === 0)) {
      this.wiz('Expected beginning of the string, but got ' + new Char(charSequenceGet(this.jgc(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.jgc(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.jgc())) {
        usedAppend = true;
        this.hj5(this.eiw_1, current);
        var eof = this.ij5(current);
        if (eof === -1) {
          this.eiw_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.rj5(this.eiw_1, current);
    } else {
      tmp = decodedString(this, this.eiw_1, current);
    }
    var result = tmp;
    this.eiw_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).hj5 = function (fromIndex, toIndex) {
    this.hiw_1.wi(this.jgc(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).pj2 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.wj0();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.zj0();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.wj0();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.zj0();
        } else {
          this.qj2();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.eiw_1, 'found ] instead of } at path: ' + this.fiw_1, this.jgc());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.eiw_1, 'found } instead of ] at path: ' + this.fiw_1, this.jgc());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.wiz('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.bj1();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.jgc() + "', currentPosition=" + this.eiw_1 + ')';
  };
  protoOf(AbstractJsonLexer).oj2 = function (key) {
    var processed = this.rj5(0, this.eiw_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.nj5("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).nj5 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.fiw_1.jj0() + hintMessage, this.jgc());
  };
  protoOf(AbstractJsonLexer).wiz = function (message, position, hint, $super) {
    position = position === VOID ? this.eiw_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.nj5(message, position, hint) : $super.nj5.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).zix = function () {
    var current = this.pj5();
    current = this.ij5(current);
    if (current >= charSequenceLength(this.jgc()) ? true : current === -1) {
      this.wiz('EOF');
    }
    var tmp;
    if (charSequenceGet(this.jgc(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.jgc())) {
        this.wiz('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.jgc()))) {
      var ch = charSequenceGet(this.jgc(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.wiz('Unexpected symbol ' + new Char(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.wiz("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.wiz("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.wiz("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.wiz("Unexpected symbol '" + new Char(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.l9(new Long(10, 0)).r7(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.l9(new Long(10, 0)).m9(toLong(digit));
      if (accumulator.x(new Long(0, 0)) > 0) {
        this.wiz('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.wiz('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.wiz('EOF');
      }
      if (!(charSequenceGet(this.jgc(), current) === _Char___init__impl__6a9atx(34))) {
        this.wiz('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.eiw_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.pd() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_4();
      if (doubleAccumulator > (new Long(-1, 2147483647)).pd()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_4();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).pd();
      }
      if (tmp_0) {
        this.wiz('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.wiz("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.j9();
      } else {
        this.wiz('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).yj2 = function () {
    return consumeBoolean(this, this.pj5());
  };
  protoOf(AbstractJsonLexer).zj2 = function () {
    var current = this.pj5();
    if (current === charSequenceLength(this.jgc())) {
      this.wiz('EOF');
    }
    var tmp;
    if (charSequenceGet(this.jgc(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.eiw_1 === charSequenceLength(this.jgc())) {
        this.wiz('EOF');
      }
      if (!(charSequenceGet(this.jgc(), this.eiw_1) === _Char___init__impl__6a9atx(34))) {
        this.wiz('Expected closing quotation mark');
      }
      this.eiw_1 = this.eiw_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().tj5_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().sj5_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.sj5_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.tj5_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.sj5_1 = charArray(117);
    this.tj5_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.yj5_1 = source;
  }
  protoOf(StringJsonLexer).jgc = function () {
    return this.yj5_1;
  };
  protoOf(StringJsonLexer).ij5 = function (position) {
    return position < this.yj5_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).bj1 = function () {
    var source = this.yj5_1;
    $l$loop: while (!(this.eiw_1 === -1) ? this.eiw_1 < source.length : false) {
      var tmp1 = this.eiw_1;
      this.eiw_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).lj2 = function () {
    var current = this.pj5();
    if (current === this.yj5_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.yj5_1, current) === _Char___init__impl__6a9atx(44)) {
      this.eiw_1 = this.eiw_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).xj0 = function () {
    var current = this.eiw_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.yj5_1.length) {
      var c = charSequenceGet(this.yj5_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.eiw_1 = current;
      return this.kj5(c);
    }
    this.eiw_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).pj5 = function () {
    var current = this.eiw_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.yj5_1.length) {
      var c = charSequenceGet(this.yj5_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.eiw_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).kj2 = function (expected) {
    if (this.eiw_1 === -1) {
      this.mj5(expected);
    }
    var source = this.yj5_1;
    $l$loop: while (this.eiw_1 < source.length) {
      var tmp1 = this.eiw_1;
      this.eiw_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_getInstance();
      this.mj5(expected);
    }
    this.eiw_1 = -1;
    this.mj5(expected);
  };
  protoOf(StringJsonLexer).qj2 = function () {
    this.kj2(get_STRING());
    var current = this.eiw_1;
    var closingQuote = indexOf(this.yj5_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.zj0();
      this.oj5(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.yj5_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.yj5_1, this.eiw_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.eiw_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.yj5_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).sj2 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.eiw_1;
    try {
      if (!(this.bj1() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.nj2(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.qj5();
      if (!(this.bj1() === get_TC_COLON()))
        return null;
      return this.nj2(isLenient);
    }finally {
      this.eiw_1 = positionSnapshot;
      this.qj5();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.uiv_1;
  }
  function JsonToStringWriter() {
    this.viv_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).diz = function (value) {
    this.viv_1.ha(value);
  };
  protoOf(JsonToStringWriter).yiy = function (char) {
    this.viv_1.i9(char);
  };
  protoOf(JsonToStringWriter).fhi = function (text) {
    this.viv_1.ia(text);
  };
  protoOf(JsonToStringWriter).jiz = function (text) {
    printQuoted(this.viv_1, text);
  };
  protoOf(JsonToStringWriter).su = function () {
    this.viv_1.yi();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.viv_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).lgp = get_isNullable;
  protoOf(defer$1).sgp = get_isInline;
  protoOf(defer$1).qgp = get_annotations;
  protoOf(PolymorphismValidator).uh6 = contextual;
  protoOf(StreamingJsonDecoder).cgs = decodeSerializableElement$default;
  protoOf(StreamingJsonDecoder).fgs = decodeSequentially;
  protoOf(StreamingJsonDecoder).hgs = decodeCollectionSize;
  protoOf(JsonDecoderForUnsignedTypes).ogr = decodeSerializableValue;
  protoOf(JsonDecoderForUnsignedTypes).cgs = decodeSerializableElement$default;
  protoOf(JsonDecoderForUnsignedTypes).fgs = decodeSequentially;
  protoOf(JsonDecoderForUnsignedTypes).hgs = decodeCollectionSize;
  protoOf(StreamingJsonEncoder).jgt = encodeNotNullMark;
  protoOf(StreamingJsonEncoder).kgt = beginCollection;
  protoOf(StreamingJsonEncoder).igt = encodeNullableSerializableValue;
  protoOf(AbstractJsonTreeDecoder).cgs = decodeSerializableElement$default;
  protoOf(AbstractJsonTreeDecoder).fgs = decodeSequentially;
  protoOf(AbstractJsonTreeDecoder).hgs = decodeCollectionSize;
  protoOf(JsonTreeDecoder).cgs = decodeSerializableElement$default;
  protoOf(JsonTreeDecoder).fgs = decodeSequentially;
  protoOf(JsonTreeDecoder).hgs = decodeCollectionSize;
  protoOf(JsonTreeListDecoder).cgs = decodeSerializableElement$default;
  protoOf(JsonTreeListDecoder).fgs = decodeSequentially;
  protoOf(JsonTreeListDecoder).hgs = decodeCollectionSize;
  protoOf(JsonPrimitiveDecoder).cgs = decodeSerializableElement$default;
  protoOf(JsonPrimitiveDecoder).fgs = decodeSequentially;
  protoOf(JsonPrimitiveDecoder).hgs = decodeCollectionSize;
  protoOf(JsonTreeMapDecoder).cgs = decodeSerializableElement$default;
  protoOf(JsonTreeMapDecoder).fgs = decodeSequentially;
  protoOf(JsonTreeMapDecoder).hgs = decodeCollectionSize;
  //endregion
  //region block: init
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
