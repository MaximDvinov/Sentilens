(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var emptyList = kotlin_kotlin.$_$.z7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.qk;
  var classMeta = kotlin_kotlin.$_$.kc;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var captureStack = kotlin_kotlin.$_$.ec;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var IllegalArgumentException = kotlin_kotlin.$_$.gj;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var KClass = kotlin_kotlin.$_$.kf;
  var isInterface = kotlin_kotlin.$_$.id;
  var Triple = kotlin_kotlin.$_$.sj;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.nj;
  var Entry = kotlin_kotlin.$_$.j6;
  var LinkedHashMap = kotlin_kotlin.$_$.g6;
  var MutableMap = kotlin_kotlin.$_$.o6;
  var Map = kotlin_kotlin.$_$.k6;
  var HashMap = kotlin_kotlin.$_$.c6;
  var LinkedHashSet = kotlin_kotlin.$_$.h6;
  var MutableSet = kotlin_kotlin.$_$.p6;
  var Set = kotlin_kotlin.$_$.r6;
  var HashSet = kotlin_kotlin.$_$.d6;
  var ArrayList = kotlin_kotlin.$_$.a6;
  var MutableList = kotlin_kotlin.$_$.m6;
  var List = kotlin_kotlin.$_$.i6;
  var Collection = kotlin_kotlin.$_$.b6;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k3;
  var isObject = kotlin_kotlin.$_$.kd;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.i3;
  var Result = kotlin_kotlin.$_$.oj;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var equals = kotlin_kotlin.$_$.oc;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var Iterator = kotlin_kotlin.$_$.f6;
  var isBlank = kotlin_kotlin.$_$.yg;
  var toList = kotlin_kotlin.$_$.va;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var toHashSet = kotlin_kotlin.$_$.ra;
  var toBooleanArray = kotlin_kotlin.$_$.pa;
  var withIndex = kotlin_kotlin.$_$.cb;
  var to = kotlin_kotlin.$_$.el;
  var toMap = kotlin_kotlin.$_$.wa;
  var lazy_0 = kotlin_kotlin.$_$.rk;
  var contentEquals = kotlin_kotlin.$_$.i7;
  var until = kotlin_kotlin.$_$.jf;
  var joinToString = kotlin_kotlin.$_$.w8;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var Long = kotlin_kotlin.$_$.jj;
  var Char = kotlin_kotlin.$_$.xi;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.v2;
  var Duration = kotlin_kotlin.$_$.ti;
  var Companion_getInstance = kotlin_kotlin.$_$.j5;
  var toIntOrNull = kotlin_kotlin.$_$.ci;
  var hashCode = kotlin_kotlin.$_$.xc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var isArray = kotlin_kotlin.$_$.ad;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var asList = kotlin_kotlin.$_$.w6;
  var step = kotlin_kotlin.$_$.if;
  var getValue = kotlin_kotlin.$_$.o8;
  var longArray = kotlin_kotlin.$_$.pd;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l5;
  var get_lastIndex = kotlin_kotlin.$_$.a9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.hk;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.s;
  var KTypeParameter = kotlin_kotlin.$_$.pf;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var booleanArray = kotlin_kotlin.$_$.dc;
  var emptyMap = kotlin_kotlin.$_$.a8;
  var contentHashCode = kotlin_kotlin.$_$.m7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k5;
  var isCharArray = kotlin_kotlin.$_$.dd;
  var charArray = kotlin_kotlin.$_$.gc;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.b5;
  var isDoubleArray = kotlin_kotlin.$_$.fd;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var isFloatArray = kotlin_kotlin.$_$.gd;
  var isLongArray = kotlin_kotlin.$_$.jd;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.m4;
  var ULongArray = kotlin_kotlin.$_$.xj;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.i4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.k4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var isIntArray = kotlin_kotlin.$_$.hd;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.o5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.c4;
  var UIntArray = kotlin_kotlin.$_$.vj;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.y3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.a4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var isShortArray = kotlin_kotlin.$_$.ld;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.q5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.v4;
  var UShortArray = kotlin_kotlin.$_$.zj;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.r4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.t4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p4;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.a5;
  var isByteArray = kotlin_kotlin.$_$.cd;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.n5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.s3;
  var UByteArray = kotlin_kotlin.$_$.tj;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.p3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.q3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m3;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.z4;
  var isBooleanArray = kotlin_kotlin.$_$.bd;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var copyOf = kotlin_kotlin.$_$.r7;
  var copyOf_0 = kotlin_kotlin.$_$.t7;
  var copyOf_1 = kotlin_kotlin.$_$.u7;
  var copyOf_2 = kotlin_kotlin.$_$.p7;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.n4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.j4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.l4;
  var copyOf_3 = kotlin_kotlin.$_$.w7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.d4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.z3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.b4;
  var copyOf_4 = kotlin_kotlin.$_$.o7;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.w4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.s4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.u4;
  var copyOf_5 = kotlin_kotlin.$_$.s7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.t3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.o3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.r3;
  var copyOf_6 = kotlin_kotlin.$_$.q7;
  var Unit = kotlin_kotlin.$_$.bk;
  var trimIndent = kotlin_kotlin.$_$.pi;
  var equals_0 = kotlin_kotlin.$_$.tg;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var toString_0 = kotlin_kotlin.$_$.f3;
  var titlecase = kotlin_kotlin.$_$.wh;
  var isLowerCase = kotlin_kotlin.$_$.ch;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var ULong = kotlin_kotlin.$_$.yj;
  var UInt = kotlin_kotlin.$_$.wj;
  var UShort = kotlin_kotlin.$_$.ak;
  var UByte = kotlin_kotlin.$_$.uj;
  var mapOf = kotlin_kotlin.$_$.o9;
  var lastOrNull = kotlin_kotlin.$_$.e9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.b9;
  var asSequence = kotlin_kotlin.$_$.y6;
  var get_js = kotlin_kotlin.$_$.nd;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.t8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var get_indices_0 = kotlin_kotlin.$_$.r8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.m5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var createFailure = kotlin_kotlin.$_$.ik;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(WrappedSerialDescriptor, 'WrappedSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.mgo(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.bgs(descriptor, index, deserializer, previousValue) : $super.bgs.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.pgr(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.lgo(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.kgo().lgp();
    if (isNullabilitySupported) {
      return this.ggt(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.kgs();
    } else {
      this.jgt();
      this.ggt(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.sh6(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializersModuleBuilder, 'SerializersModuleBuilder', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', classMeta, IllegalArgumentException);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vgo('type', serializer_2(StringCompanionObject_getInstance()).kgo());
      $this$buildSerialDescriptor.vgo('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.wgo_1.mh() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.pgo_1 = this$0.xgo_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.wgo_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.wgo_1 = baseClass;
    this.xgo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ygo_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).zgo = function () {
    return this.wgo_1;
  };
  protoOf(PolymorphicSerializer).kgo = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return this.ygo_1.s();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.wgo_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.bgp(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.zgo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.agp(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.zgo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.kgo();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.g() === 1 ? "Field '" + missingFields.m(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
    this.ggp_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        tmp$ret$0 = serializer(_this__u8e3s4, item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp = tmp0_mapTo;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f();
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$3 = tmp_0;
        tmp0_mapTo_0.a(tmp$ret$3);
      }
      tmp = tmp0_mapTo_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.m(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.m(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.m(0), serializers.m(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.m(0), serializers.m(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.m(0), serializers.m(1), serializers.m(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.m(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.ai();
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.zh();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.h9_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    var typeArguments = tmp0_mapTo;
    var tmp;
    if (typeArguments.l()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var tmp1_getOrNull = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(tmp1_getOrNull)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(tmp1_getOrNull);
        tmp_0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.l()) {
      tmp_2 = _this__u8e3s4.igp(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.hgp(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = (!(contextualSerializer == null) ? isInterface(contextualSerializer, KSerializer) : false) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializer_1(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.m(0).yh();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().jgp(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = (!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, KSerializer) : false) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().jgp(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().kgp(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().kgp(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.m(0).yh();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.m(0).yh();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.kgo().lgp()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.mgp_1 = original;
    this.ngp_1 = kClass;
    this.ogp_1 = this.mgp_1.pgp() + '<' + this.ngp_1.mh() + '>';
  }
  protoOf(ContextDescriptor).qgp = function () {
    return this.mgp_1.qgp();
  };
  protoOf(ContextDescriptor).rgp = function () {
    return this.mgp_1.rgp();
  };
  protoOf(ContextDescriptor).sgp = function () {
    return this.mgp_1.sgp();
  };
  protoOf(ContextDescriptor).lgp = function () {
    return this.mgp_1.lgp();
  };
  protoOf(ContextDescriptor).tgp = function () {
    return this.mgp_1.tgp();
  };
  protoOf(ContextDescriptor).ugp = function (index) {
    return this.mgp_1.ugp(index);
  };
  protoOf(ContextDescriptor).vgp = function (index) {
    return this.mgp_1.vgp(index);
  };
  protoOf(ContextDescriptor).wgp = function (name) {
    return this.mgp_1.wgp(name);
  };
  protoOf(ContextDescriptor).xgp = function (index) {
    return this.mgp_1.xgp(index);
  };
  protoOf(ContextDescriptor).ygp = function (index) {
    return this.mgp_1.ygp(index);
  };
  protoOf(ContextDescriptor).pgp = function () {
    return this.ogp_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.mgp_1, another.mgp_1) ? another.ngp_1.equals(this.ngp_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ngp_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.ogp_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.ngp_1 + ', original: ' + this.mgp_1 + ')';
  };
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ngp_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.zgp_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function getPolymorphicDescriptors(_this__u8e3s4, descriptor) {
    var tmp0_elvis_lhs = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var kClass = tmp;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp1_safe_receiver = (_this__u8e3s4 instanceof SerialModuleImpl ? _this__u8e3s4 : THROW_CCE()).dgq_1.z2(kClass);
    var tmp0_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b3();
    var tmp1_map = tmp0_elvis_lhs_0 == null ? emptyList() : tmp0_elvis_lhs_0;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.getPolymorphicDescriptors.<anonymous>' call
      tmp$ret$1 = item.kgo();
      tmp0_mapTo.a(tmp$ret$1);
    }
    return tmp0_mapTo;
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.igp(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.kgo();
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.igq_1 = $this_elementDescriptors;
    this.hgq_1 = $this_elementDescriptors.rgp();
  }
  protoOf(elementDescriptors$1$1).e = function () {
    return this.hgq_1 > 0;
  };
  protoOf(elementDescriptors$1$1).f = function () {
    var tmp = this.igq_1.rgp();
    var tmp1 = this.hgq_1;
    this.hgq_1 = tmp1 - 1 | 0;
    return this.igq_1.vgp(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.jgq_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).d = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.jgq_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.qgo_1.g(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ngo_1 = serialName;
    this.ogo_1 = false;
    this.pgo_1 = emptyList();
    this.qgo_1 = ArrayList_init_$Create$_0();
    this.rgo_1 = HashSet_init_$Create$();
    this.sgo_1 = ArrayList_init_$Create$_0();
    this.tgo_1 = ArrayList_init_$Create$_0();
    this.ugo_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).kgq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.rgo_1.a(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.ngo_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.qgo_1.a(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.sgo_1.a(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.tgo_1.a(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ugo_1.a(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).vgo = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.kgq(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.kgq.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.qgo_1.g(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return $this.wgq_1.s();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.vgq_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.xgp(it) + ': ' + this$0.vgp(it).pgp();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.lgq_1 = serialName;
    this.mgq_1 = kind;
    this.ngq_1 = elementsCount;
    this.ogq_1 = builder.pgo_1;
    this.pgq_1 = toHashSet(builder.qgo_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.qgo_1;
    tmp.qgq_1 = copyToArray(tmp0_toTypedArray);
    this.rgq_1 = compactArray(builder.sgo_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.tgo_1;
    tmp_0.sgq_1 = copyToArray(tmp0_toTypedArray_0);
    this.tgq_1 = toBooleanArray(builder.ugo_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.qgq_1);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.o4_1, item.n4_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp_1.ugq_1 = toMap(tmp0_mapTo);
    this.vgq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.wgq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).pgp = function () {
    return this.lgq_1;
  };
  protoOf(SerialDescriptorImpl).tgp = function () {
    return this.mgq_1;
  };
  protoOf(SerialDescriptorImpl).rgp = function () {
    return this.ngq_1;
  };
  protoOf(SerialDescriptorImpl).qgp = function () {
    return this.ogq_1;
  };
  protoOf(SerialDescriptorImpl).xgq = function () {
    return this.pgq_1;
  };
  protoOf(SerialDescriptorImpl).xgp = function (index) {
    return getChecked(this.qgq_1, index);
  };
  protoOf(SerialDescriptorImpl).wgp = function (name) {
    var tmp0_elvis_lhs = this.ugq_1.z2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).ugp = function (index) {
    return getChecked(this.sgq_1, index);
  };
  protoOf(SerialDescriptorImpl).vgp = function (index) {
    return getChecked(this.rgq_1, index);
  };
  protoOf(SerialDescriptorImpl).ygp = function (index) {
    return getChecked_0(this.tgq_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pgp() === other.pgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.vgq_1, other.vgq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rgp() === other.rgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rgp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vgp(index).pgp() === other.vgp(index).pgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vgp(index).tgp(), other.vgp(index).tgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.ngq_1);
    var tmp_0 = this.lgq_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function SerialDescriptor_0(serialName, original) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp = original.tgp();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(tmp instanceof PrimitiveKind)) {
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptor.<anonymous>' call
      var message_0 = "For primitive descriptors please use 'PrimitiveSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(serialName === original.pgp())) {
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptor.<anonymous>' call
      var message_1 = 'The name of the wrapped descriptor (' + serialName + ') cannot be the same as the name of the original descriptor (' + original.pgp() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new WrappedSerialDescriptor(serialName, original);
  }
  function WrappedSerialDescriptor(serialName, original) {
    this.ygq_1 = serialName;
    this.zgq_1 = original;
  }
  protoOf(WrappedSerialDescriptor).pgp = function () {
    return this.ygq_1;
  };
  protoOf(WrappedSerialDescriptor).qgp = function () {
    return this.zgq_1.qgp();
  };
  protoOf(WrappedSerialDescriptor).rgp = function () {
    return this.zgq_1.rgp();
  };
  protoOf(WrappedSerialDescriptor).sgp = function () {
    return this.zgq_1.sgp();
  };
  protoOf(WrappedSerialDescriptor).lgp = function () {
    return this.zgq_1.lgp();
  };
  protoOf(WrappedSerialDescriptor).tgp = function () {
    return this.zgq_1.tgp();
  };
  protoOf(WrappedSerialDescriptor).ugp = function (index) {
    return this.zgq_1.ugp(index);
  };
  protoOf(WrappedSerialDescriptor).vgp = function (index) {
    return this.zgq_1.vgp(index);
  };
  protoOf(WrappedSerialDescriptor).wgp = function (name) {
    return this.zgq_1.wgp(name);
  };
  protoOf(WrappedSerialDescriptor).xgp = function (index) {
    return this.zgq_1.xgp(index);
  };
  protoOf(WrappedSerialDescriptor).ygp = function (index) {
    return this.zgq_1.ygp(index);
  };
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).mh());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).agr = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).bgr = function () {
    return true;
  };
  protoOf(AbstractDecoder).cgr = function () {
    return null;
  };
  protoOf(AbstractDecoder).dgr = function () {
    var tmp = this.agr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).egr = function () {
    var tmp = this.agr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fgr = function () {
    var tmp = this.agr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ggr = function () {
    var tmp = this.agr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hgr = function () {
    var tmp = this.agr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).igr = function () {
    var tmp = this.agr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jgr = function () {
    var tmp = this.agr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).kgr = function () {
    var tmp = this.agr();
    return tmp instanceof Char ? tmp.n8_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).lgr = function () {
    var tmp = this.agr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mgr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ngr = function (deserializer, previousValue) {
    return this.ogr(deserializer);
  };
  protoOf(AbstractDecoder).pgr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).qgr = function (descriptor) {
  };
  protoOf(AbstractDecoder).rgr = function (descriptor, index) {
    return this.dgr();
  };
  protoOf(AbstractDecoder).sgr = function (descriptor, index) {
    return this.egr();
  };
  protoOf(AbstractDecoder).tgr = function (descriptor, index) {
    return this.fgr();
  };
  protoOf(AbstractDecoder).ugr = function (descriptor, index) {
    return this.ggr();
  };
  protoOf(AbstractDecoder).vgr = function (descriptor, index) {
    return this.hgr();
  };
  protoOf(AbstractDecoder).wgr = function (descriptor, index) {
    return this.igr();
  };
  protoOf(AbstractDecoder).xgr = function (descriptor, index) {
    return this.jgr();
  };
  protoOf(AbstractDecoder).ygr = function (descriptor, index) {
    return this.kgr();
  };
  protoOf(AbstractDecoder).zgr = function (descriptor, index) {
    return this.lgr();
  };
  protoOf(AbstractDecoder).ags = function (descriptor, index) {
    return this.mgr(descriptor.vgp(index));
  };
  protoOf(AbstractDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    return this.ngr(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).dgs = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.kgo().lgp();
    return (isNullabilitySupported ? true : this.bgr()) ? this.ngr(deserializer, previousValue) : this.cgr();
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).pgr = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).qgr = function (descriptor) {
  };
  protoOf(AbstractEncoder).igs = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).jgs = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).kgs = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).lgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).mgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).ngs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).ogs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).pgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).qgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).rgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).sgs = function (value) {
    return this.jgs(new Char(value));
  };
  protoOf(AbstractEncoder).tgs = function (value) {
    return this.jgs(value);
  };
  protoOf(AbstractEncoder).ugs = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).vgs = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.lgs(value);
    }
  };
  protoOf(AbstractEncoder).wgs = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.mgs(value);
    }
  };
  protoOf(AbstractEncoder).xgs = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.ngs(value);
    }
  };
  protoOf(AbstractEncoder).ygs = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.ogs(value);
    }
  };
  protoOf(AbstractEncoder).zgs = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.pgs(value);
    }
  };
  protoOf(AbstractEncoder).agt = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.qgs(value);
    }
  };
  protoOf(AbstractEncoder).bgt = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.rgs(value);
    }
  };
  protoOf(AbstractEncoder).cgt = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.sgs(value);
    }
  };
  protoOf(AbstractEncoder).dgt = function (descriptor, index, value) {
    if (this.igs(descriptor, index)) {
      this.tgs(value);
    }
  };
  protoOf(AbstractEncoder).egt = function (descriptor, index) {
    return this.igs(descriptor, index) ? this.ugs(descriptor.vgp(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).fgt = function (descriptor, index, serializer, value) {
    if (this.igs(descriptor, index)) {
      this.ggt(serializer, value);
    }
  };
  protoOf(AbstractEncoder).hgt = function (descriptor, index, serializer, value) {
    if (this.igs(descriptor, index)) {
      this.igt(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.mgt_1 = -1;
    this.ngt_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.zgr($this.kgo(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.cgs($this.kgo(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).lgo = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.kgo();
    var composite = encoder.pgr(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.dgt(this.kgo(), 0, actualSerializer.kgo().pgp());
    var tmp = this.kgo();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.fgt(tmp, 1, tmp$ret$0, value);
    composite.qgr(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).mgo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.kgo();
    var composite = decoder.pgr(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.fgs()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.ggs(this.kgo());
        Companion_getInstance_7();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.zgr(this.kgo(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.cgs(this.kgo(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = isObject(tmp) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.qgr(tmp0_decodeStructure);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).agp = function (decoder, klassName) {
    return decoder.egs().ogt(this.zgo(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).bgp = function (encoder, value) {
    return encoder.egs().pgt(this.zgo(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.mh();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.mh() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.mh() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.qgt_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).kgo = function () {
    return this.qgt_1;
  };
  protoOf(NothingSerializer_0).rgt = function (encoder, value) {
    throw SerializationException_init_$Create$("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).lgo = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.rgt(encoder, tmp);
  };
  protoOf(NothingSerializer_0).mgo = function (decoder) {
    throw SerializationException_init_$Create$("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.sgt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).kgo = function () {
    return this.sgt_1;
  };
  protoOf(DurationSerializer).tgt = function (encoder, value) {
    encoder.tgs(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).lgo = function (encoder, value) {
    return this.tgt(encoder, value instanceof Duration ? value.fa_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ugt = function (decoder) {
    return Companion_getInstance().da(decoder.lgr());
  };
  protoOf(DurationSerializer).mgo = function (decoder) {
    return new Duration(this.ugt(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).pgp = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).pgp = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).pgp = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).pgp = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.xgt_1 = elementDescriptor;
    this.ygt_1 = 1;
  }
  protoOf(ListLikeDescriptor).tgp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).rgp = function () {
    return this.ygt_1;
  };
  protoOf(ListLikeDescriptor).xgp = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).wgp = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).ygp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).ugp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).vgp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.xgt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.xgt_1, other.xgt_1) ? this.pgp() === other.pgp() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.xgt_1), 31) + getStringHashCode(this.pgp()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.pgp() + '(' + this.xgt_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.dgu_1 = serialName;
    this.egu_1 = keyDescriptor;
    this.fgu_1 = valueDescriptor;
    this.ggu_1 = 2;
  }
  protoOf(MapLikeDescriptor).pgp = function () {
    return this.dgu_1;
  };
  protoOf(MapLikeDescriptor).tgp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).rgp = function () {
    return this.ggu_1;
  };
  protoOf(MapLikeDescriptor).xgp = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).wgp = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).ygp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).ugp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).vgp = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.pgp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.egu_1;
        break;
      case 1:
        tmp = this.fgu_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.pgp() === other.pgp()))
      return false;
    if (!equals(this.egu_1, other.egu_1))
      return false;
    if (!equals(this.fgu_1, other.fgu_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.pgp());
    result = imul(31, result) + hashCode(this.egu_1) | 0;
    result = imul(31, result) + hashCode(this.fgu_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.pgp() + '(' + this.egu_1 + ', ' + this.fgu_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.lgu_1 = primitive.pgp() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).pgp = function () {
    return this.lgu_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ngu_1 = new ArrayListClassDesc(element.kgo());
  }
  protoOf(ArrayListSerializer).kgo = function () {
    return this.ngu_1;
  };
  protoOf(ArrayListSerializer).z1y = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).ogu = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(ArrayListSerializer).pgu = function (_this__u8e3s4) {
    return this.ogu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).qgu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).rgu = function (_this__u8e3s4) {
    return this.qgu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).sgu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).tgu = function (_this__u8e3s4) {
    return this.sgu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ugu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ef(size);
  };
  protoOf(ArrayListSerializer).vgu = function (_this__u8e3s4, size) {
    return this.ugu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).wgu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v3(index, element);
  };
  protoOf(ArrayListSerializer).xgu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.wgu(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.igv_1 = new HashSetClassDesc(eSerializer.kgo());
  }
  protoOf(HashSetSerializer).kgo = function () {
    return this.igv_1;
  };
  protoOf(HashSetSerializer).z1y = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).jgv = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(HashSetSerializer).pgu = function (_this__u8e3s4) {
    return this.jgv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).kgv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).rgu = function (_this__u8e3s4) {
    return this.kgv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).lgv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).tgu = function (_this__u8e3s4) {
    return this.lgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).mgv = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).vgu = function (_this__u8e3s4, size) {
    return this.mgv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).ngv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(HashSetSerializer).xgu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.ngv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.pgv_1 = new LinkedHashSetClassDesc(eSerializer.kgo());
  }
  protoOf(LinkedHashSetSerializer).kgo = function () {
    return this.pgv_1;
  };
  protoOf(LinkedHashSetSerializer).z1y = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).qgv = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(LinkedHashSetSerializer).pgu = function (_this__u8e3s4) {
    return this.qgv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).rgv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).rgu = function (_this__u8e3s4) {
    return this.rgv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).lgv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).tgu = function (_this__u8e3s4) {
    return this.lgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).sgv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).vgu = function (_this__u8e3s4, size) {
    return this.sgv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).tgv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  protoOf(LinkedHashSetSerializer).xgu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.tgv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.wgv_1 = new HashMapClassDesc(kSerializer.kgo(), vSerializer.kgo());
  }
  protoOf(HashMapSerializer).kgo = function () {
    return this.wgv_1;
  };
  protoOf(HashMapSerializer).xgv = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(HashMapSerializer).ygv = function (_this__u8e3s4) {
    return this.xgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).zgv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.q().d();
  };
  protoOf(HashMapSerializer).agw = function (_this__u8e3s4) {
    return this.zgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).z1y = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).bgw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  protoOf(HashMapSerializer).pgu = function (_this__u8e3s4) {
    return this.bgw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).cgw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).rgu = function (_this__u8e3s4) {
    return this.cgw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).dgw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).tgu = function (_this__u8e3s4) {
    return this.dgw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).egw = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).vgu = function (_this__u8e3s4, size) {
    return this.egw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.jgw_1 = new LinkedHashMapClassDesc(kSerializer.kgo(), vSerializer.kgo());
  }
  protoOf(LinkedHashMapSerializer).kgo = function () {
    return this.jgw_1;
  };
  protoOf(LinkedHashMapSerializer).xgv = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(LinkedHashMapSerializer).ygv = function (_this__u8e3s4) {
    return this.xgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zgv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.q().d();
  };
  protoOf(LinkedHashMapSerializer).agw = function (_this__u8e3s4) {
    return this.zgv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).z1y = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).kgw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  protoOf(LinkedHashMapSerializer).pgu = function (_this__u8e3s4) {
    return this.kgw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).lgw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).rgu = function (_this__u8e3s4) {
    return this.lgw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).dgw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).tgu = function (_this__u8e3s4) {
    return this.dgw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mgw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).vgu = function (_this__u8e3s4, size) {
    return this.mgw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ogw_1 = kClass;
    this.pgw_1 = new ArrayClassDesc(eSerializer.kgo());
  }
  protoOf(ReferenceArraySerializer).kgo = function () {
    return this.pgw_1;
  };
  protoOf(ReferenceArraySerializer).qgw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).ygv = function (_this__u8e3s4) {
    return this.qgw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).rgw = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).agw = function (_this__u8e3s4) {
    return this.rgw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).z1y = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).sgw = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(ReferenceArraySerializer).pgu = function (_this__u8e3s4) {
    return this.sgw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tgw = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ogw_1);
  };
  protoOf(ReferenceArraySerializer).rgu = function (_this__u8e3s4) {
    return this.tgw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ugw = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).tgu = function (_this__u8e3s4) {
    return this.ugw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vgw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ef(size);
  };
  protoOf(ReferenceArraySerializer).vgu = function (_this__u8e3s4, size) {
    return this.vgw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).wgw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v3(index, element);
  };
  protoOf(ReferenceArraySerializer).xgu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.wgw(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).zgu = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).ygv = function (_this__u8e3s4) {
    return this.zgu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).agv = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  protoOf(CollectionSerializer).agw = function (_this__u8e3s4) {
    return this.agv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.fgw_1 = keySerializer;
    this.ggw_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).dgv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.egv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).egv = function (decoder, index, builder, checkIndex) {
    var key = decoder.cgs(this.kgo(), index, this.fgw_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.ggs(this.kgo());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp0_also === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = tmp0_also;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.t2(key)) {
      var tmp_2 = this.ggw_1.kgo().tgp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.bgs(this.kgo(), vIndex, this.ggw_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.cgs(this.kgo(), vIndex, this.ggw_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.a5(key, value);
  };
  protoOf(MapLikeSerializer).cgv = function (encoder, value) {
    var size = this.ygv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.kgo();
    var composite = encoder.kgt(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.agw(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.r();
      // Inline function 'kotlin.collections.component2' call
      var v = element.s();
      var tmp = this.kgo();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.fgt(tmp, tmp0, this.fgw_1, k);
      var tmp_0 = this.kgo();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.fgt(tmp_0, tmp1, this.ggw_1, v);
    }
    composite.qgr(tmp0_encodeCollection);
  };
  protoOf(MapLikeSerializer).lgo = function (encoder, value) {
    return this.cgv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.bgv_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).cgv = function (encoder, value) {
    var size = this.ygv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.kgo();
    var composite = encoder.kgt(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.agw(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.fgt(this.kgo(), index, this.bgv_1, iterator.f());
      }
       while (inductionVariable < size);
    composite.qgr(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).lgo = function (encoder, value) {
    return this.cgv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).dgv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.egv(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).egv = function (decoder, index, builder, checkIndex) {
    this.xgu(builder, index, decoder.cgs(this.kgo(), index, this.bgv_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.hgs($this.kgo());
    $this.vgu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).ggv = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.tgu(previous);
    var builder = tmp1_elvis_lhs == null ? this.z1y() : tmp1_elvis_lhs;
    var startIndex = this.pgu(builder);
    var compositeDecoder = decoder.pgr(this.kgo());
    if (compositeDecoder.fgs()) {
      this.dgv(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ggs(this.kgo());
        Companion_getInstance_7();
        if (index === -1)
          break $l$loop;
        this.fgv(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.qgr(this.kgo());
    return this.rgu(builder);
  };
  protoOf(AbstractCollectionSerializer).mgo = function (decoder) {
    return this.ggv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).fgv = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.egv(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.egv.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ygw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.kgo());
  }
  protoOf(PrimitiveArraySerializer).kgo = function () {
    return this.ygw_1;
  };
  protoOf(PrimitiveArraySerializer).pgu = function (_this__u8e3s4) {
    return _this__u8e3s4.s5d();
  };
  protoOf(PrimitiveArraySerializer).rgu = function (_this__u8e3s4) {
    return _this__u8e3s4.df();
  };
  protoOf(PrimitiveArraySerializer).vgu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ef(size);
  };
  protoOf(PrimitiveArraySerializer).zgw = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).agw = function (_this__u8e3s4) {
    return this.zgw((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xgu = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  protoOf(PrimitiveArraySerializer).z1y = function () {
    return this.tgu(this.agx());
  };
  protoOf(PrimitiveArraySerializer).cgx = function (encoder, value) {
    var size = this.ygv(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.ygw_1;
    var composite = encoder.kgt(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.bgx(composite, value, size);
    composite.qgr(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).lgo = function (encoder, value) {
    return this.cgx(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).cgv = function (encoder, value) {
    return this.cgx(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).mgo = function (decoder) {
    return this.ggv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).dgx = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.s5d() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ef(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ef.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.egx_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).q7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.igx_1[slot] = $this.igx_1[slot].sk((new Long(1, 0)).q7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.igx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.igx_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.rk());
          slotMarks = slotMarks.sk((new Long(1, 0)).q7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.ggx_1($this.fgx_1, index)) {
            $this.igx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.igx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_7();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.fgx_1 = descriptor;
    this.ggx_1 = readIfAbsent;
    var elementsCount = this.fgx_1.rgp();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).q7(elementsCount);
      }
      tmp.hgx_1 = tmp_0;
      this.igx_1 = Companion_getInstance_8().egx_1;
    } else {
      this.hgx_1 = new Long(0, 0);
      this.igx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).jgx = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.hgx_1 = this.hgx_1.sk((new Long(1, 0)).q7(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).kgx = function () {
    var elementsCount = this.fgx_1.rgp();
    while (!this.hgx_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.hgx_1.rk());
      this.hgx_1 = this.hgx_1.sk((new Long(1, 0)).q7(index));
      if (this.ggx_1(this.fgx_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_7();
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.xgx_1 = true;
  }
  protoOf(InlineClassDescriptor).sgp = function () {
    return this.xgx_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pgp() === other.pgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.xgx_1 ? contentEquals(this.kgy(), other.kgy()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rgp() === other.rgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rgp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vgp(index).pgp() === other.vgp(index).pgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vgp(index).tgp(), other.vgp(index).tgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.mgy_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ngy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.mgy_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).kgo = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).lgo = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  protoOf(InlinePrimitiveDescriptor$1).mgo = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.pgy_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).egs = function () {
    return this.pgy_1;
  };
  protoOf(NoOpEncoder).jgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).kgs = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).lgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).mgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).ngs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).ogs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).pgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).qgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).rgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).sgs = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).tgs = function (value) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.qgy_1 = OBJECT_getInstance();
    this.rgy_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).tgp = function () {
    return this.qgy_1;
  };
  protoOf(NothingSerialDescriptor).pgp = function () {
    return this.rgy_1;
  };
  protoOf(NothingSerialDescriptor).rgp = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).xgp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wgp = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ygp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vgp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ugp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.rgy_1) + imul(31, this.qgy_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.sgy_1 = serializer;
    this.tgy_1 = new SerialDescriptorForNullable(this.sgy_1.kgo());
  }
  protoOf(NullableSerializer).kgo = function () {
    return this.tgy_1;
  };
  protoOf(NullableSerializer).ugy = function (encoder, value) {
    if (!(value == null)) {
      encoder.jgt();
      encoder.ggt(this.sgy_1, value);
    } else {
      encoder.kgs();
    }
  };
  protoOf(NullableSerializer).lgo = function (encoder, value) {
    return this.ugy(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).mgo = function (decoder) {
    return decoder.bgr() ? decoder.ogr(this.sgy_1) : decoder.cgr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.sgy_1, other.sgy_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.sgy_1);
  };
  function SerialDescriptorForNullable(original) {
    this.zgp_1 = original;
    this.agq_1 = this.zgp_1.pgp() + '?';
    this.bgq_1 = cachedSerialNames(this.zgp_1);
  }
  protoOf(SerialDescriptorForNullable).qgp = function () {
    return this.zgp_1.qgp();
  };
  protoOf(SerialDescriptorForNullable).rgp = function () {
    return this.zgp_1.rgp();
  };
  protoOf(SerialDescriptorForNullable).sgp = function () {
    return this.zgp_1.sgp();
  };
  protoOf(SerialDescriptorForNullable).tgp = function () {
    return this.zgp_1.tgp();
  };
  protoOf(SerialDescriptorForNullable).ugp = function (index) {
    return this.zgp_1.ugp(index);
  };
  protoOf(SerialDescriptorForNullable).vgp = function (index) {
    return this.zgp_1.vgp(index);
  };
  protoOf(SerialDescriptorForNullable).wgp = function (name) {
    return this.zgp_1.wgp(name);
  };
  protoOf(SerialDescriptorForNullable).xgp = function (index) {
    return this.zgp_1.xgp(index);
  };
  protoOf(SerialDescriptorForNullable).ygp = function (index) {
    return this.zgp_1.ygp(index);
  };
  protoOf(SerialDescriptorForNullable).pgp = function () {
    return this.agq_1;
  };
  protoOf(SerialDescriptorForNullable).xgq = function () {
    return this.bgq_1;
  };
  protoOf(SerialDescriptorForNullable).lgp = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.zgp_1, other.zgp_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.zgp_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.zgp_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.pgo_1 = this$0.wgy_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.vgy_1 = objectInstance;
    this.wgy_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.xgy_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).kgo = function () {
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return this.xgy_1.s();
  };
  protoOf(ObjectSerializer).lgo = function (encoder, value) {
    encoder.pgr(this.kgo()).qgr(this.kgo());
  };
  protoOf(ObjectSerializer).mgo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.kgo();
    var composite = decoder.pgr(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.fgs()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      var index = composite.ggs(this.kgo());
      Companion_getInstance_7();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.qgr(tmp0_decodeStructure);
    return this.vgy_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.kgo();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.xgq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.rgp());
    var inductionVariable = 0;
    var last = _this__u8e3s4.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.xgp(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.yh();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.mh();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.l())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.xgp(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.pgp());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return $this.hgy_1.s();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return $this.jgy_1.s();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.cgy_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.cgy_1[i];
        indices.a5(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zgx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ngy();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zgx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ogy();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.kgo();
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.kgy());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.xgp(i) + ': ' + this$0.vgp(i).pgp();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ygx_1 = serialName;
    this.zgx_1 = generatedSerializer;
    this.agy_1 = elementsCount;
    this.bgy_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.agy_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.cgy_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.agy_1;
    tmp_3.dgy_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.egy_1 = null;
    this.fgy_1 = booleanArray(this.agy_1);
    this.ggy_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.hgy_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.igy_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.jgy_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).pgp = function () {
    return this.ygx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).rgp = function () {
    return this.agy_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).tgp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).qgp = function () {
    var tmp0_elvis_lhs = this.egy_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).xgq = function () {
    return this.ggy_1.a3();
  };
  protoOf(PluginGeneratedSerialDescriptor).kgy = function () {
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return this.igy_1.s();
  };
  protoOf(PluginGeneratedSerialDescriptor).lgy = function (name, isOptional) {
    this.bgy_1 = this.bgy_1 + 1 | 0;
    this.cgy_1[this.bgy_1] = name;
    this.fgy_1[this.bgy_1] = isOptional;
    this.dgy_1[this.bgy_1] = null;
    if (this.bgy_1 === (this.agy_1 - 1 | 0)) {
      this.ggy_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).vgp = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).kgo();
  };
  protoOf(PluginGeneratedSerialDescriptor).ygp = function (index) {
    return getChecked_0(this.fgy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ugp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.dgy_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).xgp = function (index) {
    return getChecked(this.cgy_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).wgp = function (name) {
    var tmp0_elvis_lhs = this.ggy_1.z2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_7();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pgp() === other.pgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.kgy(), other.kgy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.rgp() === other.rgp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.rgp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.vgp(index).pgp() === other.vgp(index).pgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.vgp(index).tgp(), other.vgp(index).tgp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.agy_1);
    var tmp_0 = this.pgp() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.pgp());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous = accumulator;
      var tmp = imul(31, tmp0_anonymous);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.pgp();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0_anonymous_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0_anonymous_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.tgp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.kgy();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).bgz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.bgz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).cgz = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.cgz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).agx = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).dgz = function (decoder, index, builder, checkIndex) {
    builder.ggz(decoder.ygr(this.ygw_1, index));
  };
  protoOf(CharArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.dgz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).hgz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.cgt(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).bgx = function (encoder, content, size) {
    return this.hgz(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_getInstance()));
  }
  protoOf(DoubleArraySerializer_0).kgz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.kgz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).lgz = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.lgz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).agx = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).mgz = function (decoder, index, builder, checkIndex) {
    builder.pgz(decoder.xgr(this.ygw_1, index));
  };
  protoOf(DoubleArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.mgz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).qgz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bgt(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).bgx = function (encoder, content, size) {
    return this.qgz(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_getInstance()));
  }
  protoOf(FloatArraySerializer_0).tgz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.tgz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).ugz = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.ugz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).agx = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).vgz = function (decoder, index, builder, checkIndex) {
    builder.ygz(decoder.wgr(this.ygw_1, index));
  };
  protoOf(FloatArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.vgz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).zgz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.agt(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).bgx = function (encoder, content, size) {
    return this.zgz(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).ch0 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.ch0((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).dh0 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.dh0((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).agx = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).eh0 = function (decoder, index, builder, checkIndex) {
    builder.hh0(decoder.vgr(this.ygw_1, index));
  };
  protoOf(LongArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.eh0(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ih0 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zgs(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).bgx = function (encoder, content, size) {
    return this.ih0(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).lh0 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.lh0(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.zc_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).mh0 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.mh0(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.zc_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).nh0 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).agx = function () {
    return new ULongArray(this.nh0());
  };
  protoOf(ULongArraySerializer_0).oh0 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.ags(this.ygw_1, index).hgr();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    builder.rh0(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.oh0(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).sh0 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.egt(this.ygw_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = ULongArray__get_impl_pr71q9(content, i);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp.pgs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).bgx = function (encoder, content, size) {
    return this.sh0(encoder, content instanceof ULongArray ? content.zc_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_getInstance()));
  }
  protoOf(IntArraySerializer_0).vh0 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.vh0((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).wh0 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.wh0((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).agx = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).xh0 = function (decoder, index, builder, checkIndex) {
    builder.ah1(decoder.ugr(this.ygw_1, index));
  };
  protoOf(IntArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.xh0(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).bh1 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ygs(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).bgx = function (encoder, content, size) {
    return this.bh1(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).eh1 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.eh1(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ac_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).fh1 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.fh1(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ac_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).gh1 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).agx = function () {
    return new UIntArray(this.gh1());
  };
  protoOf(UIntArraySerializer_0).hh1 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.ags(this.ygw_1, index).ggr();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    builder.kh1(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.hh1(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).lh1 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.egt(this.ygw_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = UIntArray__get_impl_gp5kza(content, i);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp.ogs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).bgx = function (encoder, content, size) {
    return this.lh1(encoder, content instanceof UIntArray ? content.ac_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(ShortArraySerializer_0).oh1 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.oh1((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).ph1 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.ph1((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).agx = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).qh1 = function (decoder, index, builder, checkIndex) {
    builder.th1(decoder.tgr(this.ygw_1, index));
  };
  protoOf(ShortArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.qh1(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).uh1 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xgs(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).bgx = function (encoder, content, size) {
    return this.uh1(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).xh1 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.xh1(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ld_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).yh1 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.yh1(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ld_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).zh1 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).agx = function () {
    return new UShortArray(this.zh1());
  };
  protoOf(UShortArraySerializer_0).ah2 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.ags(this.ygw_1, index).fgr();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    builder.dh2(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.ah2(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).eh2 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.egt(this.ygw_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = UShortArray__get_impl_fnbhmx(content, i);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp.ngs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).bgx = function (encoder, content, size) {
    return this.eh2(encoder, content instanceof UShortArray ? content.ld_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(ByteArraySerializer_0).hh2 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.hh2((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).ih2 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.ih2((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).agx = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).jh2 = function (decoder, index, builder, checkIndex) {
    builder.mh2(decoder.sgr(this.ygw_1, index));
  };
  protoOf(ByteArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.jh2(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).nh2 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wgs(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).bgx = function (encoder, content, size) {
    return this.nh2(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).qh2 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.qh2(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.nb_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).rh2 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.rh2(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.nb_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).sh2 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).agx = function () {
    return new UByteArray(this.sh2());
  };
  protoOf(UByteArraySerializer_0).th2 = function (decoder, index, builder, checkIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.ags(this.ygw_1, index).egr();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    builder.wh2(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.th2(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).xh2 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.egt(this.ygw_1, i);
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = UByteArray__get_impl_t5f3hv(content, i);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp.mgs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).bgx = function (encoder, content, size) {
    return this.xh2(encoder, content instanceof UByteArray ? content.nb_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_getInstance()));
  }
  protoOf(BooleanArraySerializer_0).ah3 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).ygv = function (_this__u8e3s4) {
    return this.ah3((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).bh3 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).tgu = function (_this__u8e3s4) {
    return this.bh3((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).agx = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).ch3 = function (decoder, index, builder, checkIndex) {
    builder.fh3(decoder.rgr(this.ygw_1, index));
  };
  protoOf(BooleanArraySerializer_0).egv = function (decoder, index, builder, checkIndex) {
    return this.ch3(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).gh3 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vgs(this.ygw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).bgx = function (encoder, content, size) {
    return this.gh3(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.egz_1 = bufferWithData;
    this.fgz_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(CharArrayBuilder).s5d = function () {
    return this.fgz_1;
  };
  protoOf(CharArrayBuilder).ef = function (requiredCapacity) {
    if (this.egz_1.length < requiredCapacity)
      this.egz_1 = copyOf(this.egz_1, coerceAtLeast(requiredCapacity, imul(this.egz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).ggz = function (c) {
    this.dgx();
    var tmp = this.egz_1;
    var tmp1 = this.fgz_1;
    this.fgz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).df = function () {
    return copyOf(this.egz_1, this.fgz_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ngz_1 = bufferWithData;
    this.ogz_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(DoubleArrayBuilder).s5d = function () {
    return this.ogz_1;
  };
  protoOf(DoubleArrayBuilder).ef = function (requiredCapacity) {
    if (this.ngz_1.length < requiredCapacity)
      this.ngz_1 = copyOf_0(this.ngz_1, coerceAtLeast(requiredCapacity, imul(this.ngz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).pgz = function (c) {
    this.dgx();
    var tmp = this.ngz_1;
    var tmp1 = this.ogz_1;
    this.ogz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).df = function () {
    return copyOf_0(this.ngz_1, this.ogz_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wgz_1 = bufferWithData;
    this.xgz_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(FloatArrayBuilder).s5d = function () {
    return this.xgz_1;
  };
  protoOf(FloatArrayBuilder).ef = function (requiredCapacity) {
    if (this.wgz_1.length < requiredCapacity)
      this.wgz_1 = copyOf_1(this.wgz_1, coerceAtLeast(requiredCapacity, imul(this.wgz_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).ygz = function (c) {
    this.dgx();
    var tmp = this.wgz_1;
    var tmp1 = this.xgz_1;
    this.xgz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).df = function () {
    return copyOf_1(this.wgz_1, this.xgz_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.fh0_1 = bufferWithData;
    this.gh0_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(LongArrayBuilder).s5d = function () {
    return this.gh0_1;
  };
  protoOf(LongArrayBuilder).ef = function (requiredCapacity) {
    if (this.fh0_1.length < requiredCapacity)
      this.fh0_1 = copyOf_2(this.fh0_1, coerceAtLeast(requiredCapacity, imul(this.fh0_1.length, 2)));
  };
  protoOf(LongArrayBuilder).hh0 = function (c) {
    this.dgx();
    var tmp = this.fh0_1;
    var tmp1 = this.gh0_1;
    this.gh0_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).df = function () {
    return copyOf_2(this.fh0_1, this.gh0_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ph0_1 = bufferWithData;
    this.qh0_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ef(10);
  }
  protoOf(ULongArrayBuilder).s5d = function () {
    return this.qh0_1;
  };
  protoOf(ULongArrayBuilder).ef = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.ph0_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.ph0_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.ph0_1), 2));
      tmp.ph0_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(ULongArrayBuilder).rh0 = function (c) {
    this.dgx();
    var tmp = this.ph0_1;
    var tmp1 = this.qh0_1;
    this.qh0_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).hh3 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.ph0_1;
    var tmp1_copyOf = this.qh0_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(ULongArrayBuilder).df = function () {
    return new ULongArray(this.hh3());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yh0_1 = bufferWithData;
    this.zh0_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(IntArrayBuilder).s5d = function () {
    return this.zh0_1;
  };
  protoOf(IntArrayBuilder).ef = function (requiredCapacity) {
    if (this.yh0_1.length < requiredCapacity)
      this.yh0_1 = copyOf_3(this.yh0_1, coerceAtLeast(requiredCapacity, imul(this.yh0_1.length, 2)));
  };
  protoOf(IntArrayBuilder).ah1 = function (c) {
    this.dgx();
    var tmp = this.yh0_1;
    var tmp1 = this.zh0_1;
    this.zh0_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).df = function () {
    return copyOf_3(this.yh0_1, this.zh0_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ih1_1 = bufferWithData;
    this.jh1_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ef(10);
  }
  protoOf(UIntArrayBuilder).s5d = function () {
    return this.jh1_1;
  };
  protoOf(UIntArrayBuilder).ef = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.ih1_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.ih1_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.ih1_1), 2));
      tmp.ih1_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UIntArrayBuilder).kh1 = function (c) {
    this.dgx();
    var tmp = this.ih1_1;
    var tmp1 = this.jh1_1;
    this.jh1_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).ih3 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.ih1_1;
    var tmp1_copyOf = this.jh1_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UIntArrayBuilder).df = function () {
    return new UIntArray(this.ih3());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rh1_1 = bufferWithData;
    this.sh1_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(ShortArrayBuilder).s5d = function () {
    return this.sh1_1;
  };
  protoOf(ShortArrayBuilder).ef = function (requiredCapacity) {
    if (this.rh1_1.length < requiredCapacity)
      this.rh1_1 = copyOf_4(this.rh1_1, coerceAtLeast(requiredCapacity, imul(this.rh1_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).th1 = function (c) {
    this.dgx();
    var tmp = this.rh1_1;
    var tmp1 = this.sh1_1;
    this.sh1_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).df = function () {
    return copyOf_4(this.rh1_1, this.sh1_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.bh2_1 = bufferWithData;
    this.ch2_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ef(10);
  }
  protoOf(UShortArrayBuilder).s5d = function () {
    return this.ch2_1;
  };
  protoOf(UShortArrayBuilder).ef = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.bh2_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.bh2_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.bh2_1), 2));
      tmp.bh2_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UShortArrayBuilder).dh2 = function (c) {
    this.dgx();
    var tmp = this.bh2_1;
    var tmp1 = this.ch2_1;
    this.ch2_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).jh3 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.bh2_1;
    var tmp1_copyOf = this.ch2_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UShortArrayBuilder).df = function () {
    return new UShortArray(this.jh3());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kh2_1 = bufferWithData;
    this.lh2_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(ByteArrayBuilder).s5d = function () {
    return this.lh2_1;
  };
  protoOf(ByteArrayBuilder).ef = function (requiredCapacity) {
    if (this.kh2_1.length < requiredCapacity)
      this.kh2_1 = copyOf_5(this.kh2_1, coerceAtLeast(requiredCapacity, imul(this.kh2_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).mh2 = function (c) {
    this.dgx();
    var tmp = this.kh2_1;
    var tmp1 = this.lh2_1;
    this.lh2_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).df = function () {
    return copyOf_5(this.kh2_1, this.lh2_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.uh2_1 = bufferWithData;
    this.vh2_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ef(10);
  }
  protoOf(UByteArrayBuilder).s5d = function () {
    return this.vh2_1;
  };
  protoOf(UByteArrayBuilder).ef = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.uh2_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.uh2_1;
      var tmp1_copyOf = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.uh2_1), 2));
      tmp.uh2_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
    }
  };
  protoOf(UByteArrayBuilder).wh2 = function (c) {
    this.dgx();
    var tmp = this.uh2_1;
    var tmp1 = this.vh2_1;
    this.vh2_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).kh3 = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.uh2_1;
    var tmp1_copyOf = this.vh2_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0_copyOf), tmp1_copyOf));
  };
  protoOf(UByteArrayBuilder).df = function () {
    return new UByteArray(this.kh3());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.dh3_1 = bufferWithData;
    this.eh3_1 = bufferWithData.length;
    this.ef(10);
  }
  protoOf(BooleanArrayBuilder).s5d = function () {
    return this.eh3_1;
  };
  protoOf(BooleanArrayBuilder).ef = function (requiredCapacity) {
    if (this.dh3_1.length < requiredCapacity)
      this.dh3_1 = copyOf_6(this.dh3_1, coerceAtLeast(requiredCapacity, imul(this.dh3_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).fh3 = function (c) {
    this.dgx();
    var tmp = this.dh3_1;
    var tmp1 = this.eh3_1;
    this.eh3_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).df = function () {
    return copyOf_6(this.dh3_1, this.eh3_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().z2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.lh3_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).kgo = function () {
    return this.lh3_1;
  };
  protoOf(StringSerializer).mh3 = function (encoder, value) {
    return encoder.tgs(value);
  };
  protoOf(StringSerializer).lgo = function (encoder, value) {
    return this.mh3(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).mgo = function (decoder) {
    return decoder.lgr();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.nh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).kgo = function () {
    return this.nh3_1;
  };
  protoOf(CharSerializer).oh3 = function (encoder, value) {
    return encoder.sgs(value);
  };
  protoOf(CharSerializer).lgo = function (encoder, value) {
    return this.oh3(encoder, value instanceof Char ? value.n8_1 : THROW_CCE());
  };
  protoOf(CharSerializer).ph3 = function (decoder) {
    return decoder.kgr();
  };
  protoOf(CharSerializer).mgo = function (decoder) {
    return new Char(this.ph3(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.qh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).kgo = function () {
    return this.qh3_1;
  };
  protoOf(DoubleSerializer).rh3 = function (encoder, value) {
    return encoder.rgs(value);
  };
  protoOf(DoubleSerializer).lgo = function (encoder, value) {
    return this.rh3(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).mgo = function (decoder) {
    return decoder.jgr();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.sh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).kgo = function () {
    return this.sh3_1;
  };
  protoOf(FloatSerializer).th3 = function (encoder, value) {
    return encoder.qgs(value);
  };
  protoOf(FloatSerializer).lgo = function (encoder, value) {
    return this.th3(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).mgo = function (decoder) {
    return decoder.igr();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.uh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).kgo = function () {
    return this.uh3_1;
  };
  protoOf(LongSerializer).vh3 = function (encoder, value) {
    return encoder.pgs(value);
  };
  protoOf(LongSerializer).lgo = function (encoder, value) {
    return this.vh3(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).mgo = function (decoder) {
    return decoder.hgr();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.wh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).kgo = function () {
    return this.wh3_1;
  };
  protoOf(IntSerializer).xh3 = function (encoder, value) {
    return encoder.ogs(value);
  };
  protoOf(IntSerializer).lgo = function (encoder, value) {
    return this.xh3(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).mgo = function (decoder) {
    return decoder.ggr();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.yh3_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).kgo = function () {
    return this.yh3_1;
  };
  protoOf(ShortSerializer).zh3 = function (encoder, value) {
    return encoder.ngs(value);
  };
  protoOf(ShortSerializer).lgo = function (encoder, value) {
    return this.zh3(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).mgo = function (decoder) {
    return decoder.fgr();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.ah4_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).kgo = function () {
    return this.ah4_1;
  };
  protoOf(ByteSerializer).bh4 = function (encoder, value) {
    return encoder.mgs(value);
  };
  protoOf(ByteSerializer).lgo = function (encoder, value) {
    return this.bh4(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).mgo = function (decoder) {
    return decoder.egr();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.ch4_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).kgo = function () {
    return this.ch4_1;
  };
  protoOf(BooleanSerializer).dh4 = function (encoder, value) {
    return encoder.lgs(value);
  };
  protoOf(BooleanSerializer).lgo = function (encoder, value) {
    return this.dh4(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).mgo = function (decoder) {
    return decoder.dgr();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.eh4_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).kgo = function () {
    return this.eh4_1.kgo();
  };
  protoOf(UnitSerializer).fh4 = function (decoder) {
    this.eh4_1.mgo(decoder);
  };
  protoOf(UnitSerializer).mgo = function (decoder) {
    this.fh4(decoder);
    return Unit_getInstance();
  };
  protoOf(UnitSerializer).gh4 = function (encoder, value) {
    this.eh4_1.lgo(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).lgo = function (encoder, value) {
    return this.gh4(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.hh4_1 = serialName;
    this.ih4_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).pgp = function () {
    return this.hh4_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).tgp = function () {
    return this.ih4_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).rgp = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).xgp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wgp = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ygp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vgp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ugp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.hh4_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.hh4_1 === other.hh4_1 ? equals(this.ih4_1, other.ih4_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.hh4_1) + imul(31, this.ih4_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().a3();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.mh()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0_anonymous = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0_anonymous) ? titlecase(tmp0_anonymous) : toString_0(tmp0_anonymous);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().li(), serializer_2(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().oi(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ji(), serializer_4(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ui(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ii(), serializer_5(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ti(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().si(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().hi(), serializer_8(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ri(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().gi(), serializer_10(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().qi(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().fi(), serializer_12(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().pi(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ei(), serializer_14(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ni(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_getInstance())), to(PrimitiveClasses_getInstance().di(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).lh4 = function (_this__u8e3s4, index) {
    return this.nh4(this.mh4(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).nh4 = function (nestedName) {
    var tmp0_elvis_lhs = this.qh4();
    return this.rh4(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).mh4 = function (descriptor, index) {
    return descriptor.xgp(index);
  };
  protoOf(NamedValueDecoder).rh4 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.eh5(tag);
    var r = block();
    if (!$this.ph4_1) {
      $this.fh5();
    }
    $this.ph4_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ngr($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.bgr() ? this$0.ngr($deserializer, $previousValue) : this$0.cgr();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.oh4_1 = ArrayList_init_$Create$_0();
    this.ph4_1 = false;
  }
  protoOf(TaggedDecoder).egs = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).sh4 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).th4 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).uh4 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).vh4 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).wh4 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).xh4 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).yh4 = function (tag) {
    var tmp = this.sh4(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zh4 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ah5 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).bh5 = function (tag) {
    var tmp = this.sh4(tag);
    return tmp instanceof Char ? tmp.n8_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).ch5 = function (tag) {
    var tmp = this.sh4(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).dh5 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.eh5(tag);
    return this;
  };
  protoOf(TaggedDecoder).ngr = function (deserializer, previousValue) {
    return this.ogr(deserializer);
  };
  protoOf(TaggedDecoder).mgr = function (descriptor) {
    return this.dh5(this.fh5(), descriptor);
  };
  protoOf(TaggedDecoder).bgr = function () {
    var tmp0_elvis_lhs = this.qh4();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.th4(currentTag);
  };
  protoOf(TaggedDecoder).cgr = function () {
    return null;
  };
  protoOf(TaggedDecoder).dgr = function () {
    return this.uh4(this.fh5());
  };
  protoOf(TaggedDecoder).egr = function () {
    return this.vh4(this.fh5());
  };
  protoOf(TaggedDecoder).fgr = function () {
    return this.wh4(this.fh5());
  };
  protoOf(TaggedDecoder).ggr = function () {
    return this.xh4(this.fh5());
  };
  protoOf(TaggedDecoder).hgr = function () {
    return this.yh4(this.fh5());
  };
  protoOf(TaggedDecoder).igr = function () {
    return this.zh4(this.fh5());
  };
  protoOf(TaggedDecoder).jgr = function () {
    return this.ah5(this.fh5());
  };
  protoOf(TaggedDecoder).kgr = function () {
    return this.bh5(this.fh5());
  };
  protoOf(TaggedDecoder).lgr = function () {
    return this.ch5(this.fh5());
  };
  protoOf(TaggedDecoder).pgr = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).qgr = function (descriptor) {
  };
  protoOf(TaggedDecoder).rgr = function (descriptor, index) {
    return this.uh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).sgr = function (descriptor, index) {
    return this.vh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).tgr = function (descriptor, index) {
    return this.wh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).ugr = function (descriptor, index) {
    return this.xh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).vgr = function (descriptor, index) {
    return this.yh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).wgr = function (descriptor, index) {
    return this.zh4(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).xgr = function (descriptor, index) {
    return this.ah5(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).ygr = function (descriptor, index) {
    return this.bh5(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).zgr = function (descriptor, index) {
    return this.ch5(this.lh4(descriptor, index));
  };
  protoOf(TaggedDecoder).ags = function (descriptor, index) {
    return this.dh5(this.lh4(descriptor, index), descriptor.vgp(index));
  };
  protoOf(TaggedDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.lh4(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).dgs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.lh4(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).qh4 = function () {
    return lastOrNull(this.oh4_1);
  };
  protoOf(TaggedDecoder).eh5 = function (name) {
    this.oh4_1.a(name);
  };
  protoOf(TaggedDecoder).fh5 = function () {
    var r = this.oh4_1.z3(get_lastIndex_0(this.oh4_1));
    this.ph4_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.gh5_1 = key;
    this.hh5_1 = value;
  }
  protoOf(MapEntry).r = function () {
    return this.gh5_1;
  };
  protoOf(MapEntry).s = function () {
    return this.hh5_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.gh5_1 + ', value=' + this.hh5_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.gh5_1 == null ? 0 : hashCode(this.gh5_1);
    result = imul(result, 31) + (this.hh5_1 == null ? 0 : hashCode(this.hh5_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.gh5_1, tmp0_other_with_cast.gh5_1))
      return false;
    if (!equals(this.hh5_1, tmp0_other_with_cast.hh5_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vgo('key', $keySerializer.kgo());
      $this$buildSerialDescriptor.vgo('value', $valueSerializer.kgo());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.kh5_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).kgo = function () {
    return this.kh5_1;
  };
  protoOf(MapEntrySerializer_0).lh5 = function (_this__u8e3s4) {
    return _this__u8e3s4.r();
  };
  protoOf(MapEntrySerializer_0).mh5 = function (_this__u8e3s4) {
    return this.lh5((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).nh5 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(MapEntrySerializer_0).oh5 = function (_this__u8e3s4) {
    return this.nh5((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).ph5 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vgo('first', $keySerializer.kgo());
      $this$buildClassSerialDescriptor.vgo('second', $valueSerializer.kgo());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.vh5_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).kgo = function () {
    return this.vh5_1;
  };
  protoOf(PairSerializer_0).wh5 = function (_this__u8e3s4) {
    return _this__u8e3s4.w4_1;
  };
  protoOf(PairSerializer_0).mh5 = function (_this__u8e3s4) {
    return this.wh5(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).xh5 = function (_this__u8e3s4) {
    return _this__u8e3s4.x4_1;
  };
  protoOf(PairSerializer_0).oh5 = function (_this__u8e3s4) {
    return this.xh5(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).ph5 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.cgs($this.bh6_1, 0, $this.yh5_1);
    var b = composite.cgs($this.bh6_1, 1, $this.zh5_1);
    var c = composite.cgs($this.bh6_1, 2, $this.ah6_1);
    composite.qgr($this.bh6_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ggs($this.bh6_1);
      Companion_getInstance_7();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.cgs($this.bh6_1, 0, $this.yh5_1);
        } else {
          if (index === 1) {
            b = composite.cgs($this.bh6_1, 1, $this.zh5_1);
          } else {
            if (index === 2) {
              c = composite.cgs($this.bh6_1, 2, $this.ah6_1);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.qgr($this.bh6_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vgo('first', this$0.yh5_1.kgo());
      $this$buildClassSerialDescriptor.vgo('second', this$0.zh5_1.kgo());
      $this$buildClassSerialDescriptor.vgo('third', this$0.ah6_1.kgo());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.yh5_1 = aSerializer;
    this.zh5_1 = bSerializer;
    this.ah6_1 = cSerializer;
    var tmp = this;
    tmp.bh6_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).kgo = function () {
    return this.bh6_1;
  };
  protoOf(TripleSerializer_0).ch6 = function (encoder, value) {
    var structuredEncoder = encoder.pgr(this.bh6_1);
    structuredEncoder.fgt(this.bh6_1, 0, this.yh5_1, value.ab_1);
    structuredEncoder.fgt(this.bh6_1, 1, this.zh5_1, value.bb_1);
    structuredEncoder.fgt(this.bh6_1, 2, this.ah6_1, value.cb_1);
    structuredEncoder.qgr(this.bh6_1);
  };
  protoOf(TripleSerializer_0).lgo = function (encoder, value) {
    return this.ch6(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).mgo = function (decoder) {
    var composite = decoder.pgr(this.bh6_1);
    if (composite.fgs()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.qh5_1 = keySerializer;
    this.rh5_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).sh5 = function (encoder, value) {
    var structuredEncoder = encoder.pgr(this.kgo());
    structuredEncoder.fgt(this.kgo(), 0, this.qh5_1, this.mh5(value));
    structuredEncoder.fgt(this.kgo(), 1, this.rh5_1, this.oh5(value));
    structuredEncoder.qgr(this.kgo());
  };
  protoOf(KeyValueSerializer).lgo = function (encoder, value) {
    return this.sh5(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).mgo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.kgo();
    var composite = decoder.pgr(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.fgs()) {
        var key = composite.cgs(this.kgo(), 0, this.qh5_1);
        var value = composite.cgs(this.kgo(), 1, this.rh5_1);
        tmp$ret$0 = this.ph5(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.ggs(this.kgo());
        Companion_getInstance_7();
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.cgs(this.kgo(), 0, this.qh5_1);
          } else {
            if (idx === 1) {
              value_0 = composite.cgs(this.kgo(), 1, this.rh5_1);
            } else {
              throw SerializationException_init_$Create$('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$("Element 'value' is missing");
      var tmp = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.ph5(tmp, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.qgr(tmp0_decodeStructure);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.dh6_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).kgo = function () {
    return this.dh6_1;
  };
  protoOf(ULongSerializer).eh6 = function (encoder, value) {
    var tmp = encoder.ugs(this.dh6_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.pgs(tmp$ret$0);
  };
  protoOf(ULongSerializer).lgo = function (encoder, value) {
    return this.eh6(encoder, value instanceof ULong ? value.uc_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).fh6 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.mgr(this.dh6_1).hgr();
    return _ULong___init__impl__c78o9k(tmp0_toULong);
  };
  protoOf(ULongSerializer).mgo = function (decoder) {
    return new ULong(this.fh6(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.gh6_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).kgo = function () {
    return this.gh6_1;
  };
  protoOf(UIntSerializer).hh6 = function (encoder, value) {
    var tmp = encoder.ugs(this.gh6_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.ogs(tmp$ret$0);
  };
  protoOf(UIntSerializer).lgo = function (encoder, value) {
    return this.hh6(encoder, value instanceof UInt ? value.ub_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).ih6 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.mgr(this.gh6_1).ggr();
    return _UInt___init__impl__l7qpdl(tmp0_toUInt);
  };
  protoOf(UIntSerializer).mgo = function (decoder) {
    return new UInt(this.ih6(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.jh6_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).kgo = function () {
    return this.jh6_1;
  };
  protoOf(UShortSerializer).kh6 = function (encoder, value) {
    var tmp = encoder.ugs(this.jh6_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ngs(tmp$ret$0);
  };
  protoOf(UShortSerializer).lgo = function (encoder, value) {
    return this.kh6(encoder, value instanceof UShort ? value.gd_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).lh6 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.mgr(this.jh6_1).fgr();
    return _UShort___init__impl__jigrne(tmp0_toUShort);
  };
  protoOf(UShortSerializer).mgo = function (decoder) {
    return new UShort(this.lh6(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.mh6_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).kgo = function () {
    return this.mh6_1;
  };
  protoOf(UByteSerializer).nh6 = function (encoder, value) {
    var tmp = encoder.ugs(this.mh6_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.mgs(tmp$ret$0);
  };
  protoOf(UByteSerializer).lgo = function (encoder, value) {
    return this.nh6(encoder, value instanceof UByte ? value.ib_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).oh6 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.mgr(this.mh6_1).egr();
    return _UByte___init__impl__g9hnc4(tmp0_toUByte);
  };
  protoOf(UByteSerializer).mgo = function (decoder) {
    return new UByte(this.oh6(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).igp = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.hgp(kClass, typeArgumentsSerializers) : $super.hgp.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.cgq_1 = class2ContextualFactory;
    this.dgq_1 = polyBase2Serializers;
    this.egq_1 = polyBase2DefaultSerializerProvider;
    this.fgq_1 = polyBase2NamedSerializers;
    this.ggq_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).pgt = function (baseClass, value) {
    if (!baseClass.nh(value))
      return null;
    var tmp0_safe_receiver = this.dgq_1.z2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.egq_1.z2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ogt = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.fgq_1.z2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).z2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.ggq_1.z2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).hgp = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.cgq_1.z2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qh6(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).ph6 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.cgq_1.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.r();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.s();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.th6_1;
        collector.uh6(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.sh6(kclass, serial.rh6_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.dgq_1.q().d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.r();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.s();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.q().d();
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.r();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.s();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.vh6(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.egq_1.q().d();
    while (tmp0_iterator_2.e()) {
      var element_2 = tmp0_iterator_2.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.r();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.s();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.wh6(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.ggq_1.q().d();
    while (tmp0_iterator_3.e()) {
      var element_3 = tmp0_iterator_3.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.r();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.s();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.xh6(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.th6_1 = serializer;
  }
  protoOf(Argless).qh6 = function (typeArgumentsSerializers) {
    return this.th6_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.th6_1, this.th6_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.th6_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.rh6_1 = provider;
  }
  protoOf(WithTypeArguments).qh6 = function (typeArgumentsSerializers) {
    return this.rh6_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  function plus(_this__u8e3s4, other) {
    _init_properties_SerializersModule_kt__u78ha3();
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'kotlinx.serialization.modules.plus.<anonymous>' call
    builder.dh7(_this__u8e3s4);
    builder.dh7(other);
    return builder.df();
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.yh6_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.zh6_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.ah7_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.bh7_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.ch7_1 = HashMap_init_$Create$();
  }
  protoOf(SerializersModuleBuilder).uh6 = function (kClass, serializer) {
    return this.eh7(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).sh6 = function (kClass, provider) {
    return this.eh7(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).vh6 = function (baseClass, actualClass, actualSerializer) {
    this.fh7(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).wh6 = function (baseClass, defaultSerializerProvider) {
    this.gh7(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).xh6 = function (baseClass, defaultDeserializerProvider) {
    this.hh7(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).dh7 = function (module_0) {
    module_0.ph6(this);
  };
  protoOf(SerializersModuleBuilder).ih7 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.yh6_1.z2(forClass);
      if (!(previous == null) ? !equals(previous, provider) : false) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.yh6_1.a5(forClass, provider);
  };
  protoOf(SerializersModuleBuilder).eh7 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.ih7(forClass, provider, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ih7.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).gh7 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.ah7_1.z2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultSerializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.ah7_1.a5(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).hh7 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.ch7_1.z2(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultDeserializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    this.ch7_1.a5(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).jh7 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.kgo().pgp();
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.zh6_1;
    var value = tmp0_getOrPut.z2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      tmp0_getOrPut.a5(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    var previousSerializer = baseClassSerializers.z2(concreteClass);
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.bh7_1;
    var value_0 = tmp1_getOrPut.z2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      tmp1_getOrPut.a5(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.ye(previousSerializer.kgo().pgp());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.a5(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.a5(name, concreteSerializer);
      return Unit_getInstance();
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.ye(previousSerializer.kgo().pgp());
      }
    }
    var previousByName = names.z2(name);
    if (!(previousByName == null)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp2_find = asSequence(ensureNotNull(this.zh6_1.z2(baseClass)));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = tmp2_find.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'kotlinx.serialization.modules.SerializersModuleBuilder.registerPolymorphicSerializer.<anonymous>' call
          if (element.s() === previousByName) {
            tmp$ret$5 = element;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var conflictingClass = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + conflictingClass + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.a5(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.a5(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).fh7 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.jh7(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.jh7.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).df = function () {
    return new SerialModuleImpl(this.yh6_1, this.zh6_1, this.ah7_1, this.bh7_1, this.ch7_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.kh7_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.kh7_1.equals(tmp0_other_with_cast.kh7_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.kh7_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.kh7_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().di()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ki());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.ygy(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.lh7_1 = $factory;
  }
  protoOf(createCache$1).jgp = function (key) {
    return this.lh7_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.mh7_1 = $factory;
  }
  protoOf(createParametrizedCache$1).kgp = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_6();
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var tmp1_success = this.mh7_1(key, types);
      tmp = _Result___init__impl__xyqfz8(tmp1_success);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_6();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).lgp = get_isNullable;
  protoOf(SerialDescriptorImpl).sgp = get_isInline;
  protoOf(AbstractDecoder).cgs = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ogr = decodeSerializableValue;
  protoOf(AbstractDecoder).fgs = decodeSequentially;
  protoOf(AbstractDecoder).hgs = decodeCollectionSize;
  protoOf(AbstractEncoder).jgt = encodeNotNullMark;
  protoOf(AbstractEncoder).kgt = beginCollection;
  protoOf(AbstractEncoder).ggt = encodeSerializableValue;
  protoOf(AbstractEncoder).igt = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).lgt = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).lgp = get_isNullable;
  protoOf(ListLikeDescriptor).sgp = get_isInline;
  protoOf(ListLikeDescriptor).qgp = get_annotations;
  protoOf(ArrayListClassDesc).lgp = get_isNullable;
  protoOf(ArrayListClassDesc).sgp = get_isInline;
  protoOf(ArrayListClassDesc).qgp = get_annotations;
  protoOf(HashSetClassDesc).lgp = get_isNullable;
  protoOf(HashSetClassDesc).sgp = get_isInline;
  protoOf(HashSetClassDesc).qgp = get_annotations;
  protoOf(LinkedHashSetClassDesc).lgp = get_isNullable;
  protoOf(LinkedHashSetClassDesc).sgp = get_isInline;
  protoOf(LinkedHashSetClassDesc).qgp = get_annotations;
  protoOf(MapLikeDescriptor).lgp = get_isNullable;
  protoOf(MapLikeDescriptor).sgp = get_isInline;
  protoOf(MapLikeDescriptor).qgp = get_annotations;
  protoOf(HashMapClassDesc).lgp = get_isNullable;
  protoOf(HashMapClassDesc).sgp = get_isInline;
  protoOf(HashMapClassDesc).qgp = get_annotations;
  protoOf(LinkedHashMapClassDesc).lgp = get_isNullable;
  protoOf(LinkedHashMapClassDesc).sgp = get_isInline;
  protoOf(LinkedHashMapClassDesc).qgp = get_annotations;
  protoOf(ArrayClassDesc).lgp = get_isNullable;
  protoOf(ArrayClassDesc).sgp = get_isInline;
  protoOf(ArrayClassDesc).qgp = get_annotations;
  protoOf(PrimitiveArrayDescriptor).lgp = get_isNullable;
  protoOf(PrimitiveArrayDescriptor).sgp = get_isInline;
  protoOf(PrimitiveArrayDescriptor).qgp = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).lgp = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).sgp = get_isInline;
  protoOf(InlineClassDescriptor).lgp = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).ogy = typeParametersSerializers;
  protoOf(NoOpEncoder).jgt = encodeNotNullMark;
  protoOf(NoOpEncoder).kgt = beginCollection;
  protoOf(NoOpEncoder).ggt = encodeSerializableValue;
  protoOf(NoOpEncoder).igt = encodeNullableSerializableValue;
  protoOf(NoOpEncoder).lgt = shouldEncodeElementDefault;
  protoOf(NothingSerialDescriptor).lgp = get_isNullable;
  protoOf(NothingSerialDescriptor).sgp = get_isInline;
  protoOf(NothingSerialDescriptor).qgp = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).lgp = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).sgp = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).qgp = get_annotations;
  protoOf(TaggedDecoder).cgs = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ogr = decodeSerializableValue;
  protoOf(TaggedDecoder).fgs = decodeSequentially;
  protoOf(TaggedDecoder).hgs = decodeCollectionSize;
  protoOf(NamedValueDecoder).ogr = decodeSerializableValue;
  protoOf(NamedValueDecoder).cgs = decodeSerializableElement$default;
  protoOf(NamedValueDecoder).fgs = decodeSequentially;
  protoOf(NamedValueDecoder).hgs = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = decodeSerializableElement$default;
  _.$_$.b = SerializationException_init_$Init$;
  _.$_$.c = SerializationException_init_$Create$;
  _.$_$.d = SerializationException_init_$Init$_0;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = OPEN_getInstance;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = CLASS_getInstance;
  _.$_$.l = LIST_getInstance;
  _.$_$.m = MAP_getInstance;
  _.$_$.n = OBJECT_getInstance;
  _.$_$.o = Companion_getInstance_7;
  _.$_$.p = BooleanSerializer_getInstance;
  _.$_$.q = IntSerializer_getInstance;
  _.$_$.r = StringSerializer_getInstance;
  _.$_$.s = ListSerializer;
  _.$_$.t = MapSerializer;
  _.$_$.u = SetSerializer;
  _.$_$.v = get_nullable;
  _.$_$.w = serializer_2;
  _.$_$.x = serializer_11;
  _.$_$.y = serializer_9;
  _.$_$.z = serializer_13;
  _.$_$.a1 = serializer_7;
  _.$_$.b1 = PolymorphicKind;
  _.$_$.c1 = PrimitiveKind;
  _.$_$.d1 = PrimitiveSerialDescriptor;
  _.$_$.e1 = get_annotations;
  _.$_$.f1 = get_isInline;
  _.$_$.g1 = get_isNullable;
  _.$_$.h1 = SerialDescriptor_0;
  _.$_$.i1 = SerialDescriptor;
  _.$_$.j1 = ENUM;
  _.$_$.k1 = LIST;
  _.$_$.l1 = MAP;
  _.$_$.m1 = buildClassSerialDescriptor;
  _.$_$.n1 = buildSerialDescriptor;
  _.$_$.o1 = get_capturedKClass;
  _.$_$.p1 = getContextualDescriptor;
  _.$_$.q1 = getPolymorphicDescriptors;
  _.$_$.r1 = AbstractDecoder;
  _.$_$.s1 = AbstractEncoder;
  _.$_$.t1 = decodeCollectionSize;
  _.$_$.u1 = decodeSequentially;
  _.$_$.v1 = CompositeDecoder;
  _.$_$.w1 = CompositeEncoder;
  _.$_$.x1 = decodeSerializableValue;
  _.$_$.y1 = Decoder;
  _.$_$.z1 = beginCollection;
  _.$_$.a2 = encodeNotNullMark;
  _.$_$.b2 = encodeNullableSerializableValue;
  _.$_$.c2 = encodeSerializableValue;
  _.$_$.d2 = Encoder;
  _.$_$.e2 = AbstractCollectionSerializer;
  _.$_$.f2 = AbstractPolymorphicSerializer;
  _.$_$.g2 = ArrayListSerializer;
  _.$_$.h2 = ElementMarker;
  _.$_$.i2 = typeParametersSerializers;
  _.$_$.j2 = GeneratedSerializer;
  _.$_$.k2 = InlinePrimitiveDescriptor;
  _.$_$.l2 = NamedValueDecoder;
  _.$_$.m2 = PluginGeneratedSerialDescriptor;
  _.$_$.n2 = SerializerFactory;
  _.$_$.o2 = jsonCachedSerialNames;
  _.$_$.p2 = throwMissingFieldException;
  _.$_$.q2 = get_EmptySerializersModuleLegacyJs;
  _.$_$.r2 = EmptySerializersModule_0;
  _.$_$.s2 = SerializersModuleBuilder;
  _.$_$.t2 = contextual;
  _.$_$.u2 = SerializersModuleCollector;
  _.$_$.v2 = plus;
  _.$_$.w2 = BinaryFormat;
  _.$_$.x2 = DeserializationStrategy;
  _.$_$.y2 = KSerializer;
  _.$_$.z2 = MissingFieldException;
  _.$_$.a3 = SealedClassSerializer;
  _.$_$.b3 = SerializationException;
  _.$_$.c3 = SerializationStrategy;
  _.$_$.d3 = StringFormat;
  _.$_$.e3 = findPolymorphicSerializer;
  _.$_$.f3 = serializerOrNull_0;
  _.$_$.g3 = serializerOrNull;
  _.$_$.h3 = serializer_0;
  _.$_$.i3 = serializer_1;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
