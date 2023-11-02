(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './xmlutil-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./xmlutil-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'xmlutil-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'xmlutil-serialization-js-ir'.");
    }
    if (typeof this['xmlutil-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'xmlutil-serialization-js-ir'. Its dependency 'xmlutil-core-js-ir' was not found. Please, check whether 'xmlutil-core-js-ir' is loaded prior to 'xmlutil-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'xmlutil-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'xmlutil-serialization-js-ir'.");
    }
    root['xmlutil-serialization-js-ir'] = factory(typeof this['xmlutil-serialization-js-ir'] === 'undefined' ? {} : this['xmlutil-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['xmlutil-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_github_pdvrieze_xmlutil_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var CompactFragment_init_$Create$ = kotlin_io_github_pdvrieze_xmlutil_core.$_$.j;
  var siblingsToFragment = kotlin_io_github_pdvrieze_xmlutil_core.$_$.v1;
  var isInterface = kotlin_kotlin.$_$.id;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var arrayOf = kotlin_kotlin.$_$.ek;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h3;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Companion_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.q;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.xd;
  var ICompactFragment = kotlin_io_github_pdvrieze_xmlutil_core.$_$.d1;
  var CompactFragment = kotlin_io_github_pdvrieze_xmlutil_core.$_$.c1;
  var toList = kotlin_kotlin.$_$.ua;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var single = kotlin_kotlin.$_$.ha;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var NodeConsts_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.p;
  var isObject = kotlin_kotlin.$_$.kd;
  var to = kotlin_kotlin.$_$.el;
  var mapOf = kotlin_kotlin.$_$.n9;
  var iterator = kotlin_io_github_pdvrieze_xmlutil_core.$_$.a1;
  var asSequence = kotlin_kotlin.$_$.sf;
  var toList_0 = kotlin_kotlin.$_$.jg;
  var createDocument = kotlin_io_github_pdvrieze_xmlutil_core.$_$.b1;
  var DomWriter = kotlin_io_github_pdvrieze_xmlutil_core.$_$.e1;
  var writeElement = kotlin_io_github_pdvrieze_xmlutil_core.$_$.d2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var iterator_0 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.z;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var QName_init_$Create$ = kotlin_io_github_pdvrieze_xmlutil_core.$_$.m;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var classMeta = kotlin_kotlin.$_$.kc;
  var smartStartTag = kotlin_io_github_pdvrieze_xmlutil_core.$_$.x1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var Enum = kotlin_kotlin.$_$.dj;
  var hashCode = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.oc;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var Map = kotlin_kotlin.$_$.k6;
  var asSequence_0 = kotlin_kotlin.$_$.y6;
  var filterNot = kotlin_kotlin.$_$.uf;
  var map = kotlin_kotlin.$_$.ag;
  var sortedWith = kotlin_kotlin.$_$.hg;
  var XMLConstants_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.s;
  var NamespaceImpl = kotlin_io_github_pdvrieze_xmlutil_core.$_$.k1;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var Comparator = kotlin_kotlin.$_$.aj;
  var contains = kotlin_kotlin.$_$.h7;
  var compareValues = kotlin_kotlin.$_$.db;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var StringWriter = kotlin_io_github_pdvrieze_xmlutil_core.$_$.v;
  var XmlStreaming_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.t;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var mapCapacity = kotlin_kotlin.$_$.m9;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var skipPreamble = kotlin_io_github_pdvrieze_xmlutil_core.$_$.w1;
  var isEquivalent = kotlin_io_github_pdvrieze_xmlutil_core.$_$.t1;
  var QName = kotlin_io_github_pdvrieze_xmlutil_core.$_$.h1;
  var QName_init_$Create$_0 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.n;
  var Collection = kotlin_kotlin.$_$.b6;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var getKClass = kotlin_kotlin.$_$.e;
  var QNameSerializer_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.r;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var toBoolean = kotlin_kotlin.$_$.yh;
  var toByte = kotlin_kotlin.$_$.zh;
  var toUByte = kotlin_kotlin.$_$.ji;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m3;
  var toShort = kotlin_kotlin.$_$.gi;
  var toUShort = kotlin_kotlin.$_$.oi;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p4;
  var toInt = kotlin_kotlin.$_$.di;
  var toUInt = kotlin_kotlin.$_$.ki;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var toLong = kotlin_kotlin.$_$.fi;
  var toULong = kotlin_kotlin.$_$.ni;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f4;
  var toDouble = kotlin_kotlin.$_$.bi;
  var single_0 = kotlin_kotlin.$_$.nh;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var EventType_END_DOCUMENT_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.c;
  var EventType_END_ELEMENT_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.d;
  var EventType_START_ELEMENT_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.f;
  var readSimpleElement = kotlin_io_github_pdvrieze_xmlutil_core.$_$.u1;
  var allConsecutiveTextContent = kotlin_io_github_pdvrieze_xmlutil_core.$_$.o1;
  var allText = kotlin_io_github_pdvrieze_xmlutil_core.$_$.p1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.k1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var LIST = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var MAP = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var booleanArray = kotlin_kotlin.$_$.dc;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var CompactFragment_init_$Create$_0 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.k;
  var AbstractCollectionSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var plus_0 = kotlin_kotlin.$_$.v9;
  var singleOrNull = kotlin_kotlin.$_$.ga;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var emptyList = kotlin_kotlin.$_$.z7;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var elementContentToFragment = kotlin_io_github_pdvrieze_xmlutil_core.$_$.q1;
  var EndElementEvent = kotlin_io_github_pdvrieze_xmlutil_core.$_$.j1;
  var split = kotlin_kotlin.$_$.qh;
  var until = kotlin_kotlin.$_$.jf;
  var elementToFragment = kotlin_io_github_pdvrieze_xmlutil_core.$_$.r1;
  var assert = kotlin_io_github_pdvrieze_xmlutil_core.$_$.w;
  var toString = kotlin_kotlin.$_$.ce;
  var assert_0 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.x;
  var joinToString = kotlin_kotlin.$_$.w8;
  var EventType_CDSECT_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.b;
  var EventType_IGNORABLE_WHITESPACE_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.e;
  var EventType_TEXT_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.g;
  var XmlBufferedReader = kotlin_io_github_pdvrieze_xmlutil_core.$_$.i1;
  var toCName = kotlin_io_github_pdvrieze_xmlutil_core.$_$.z1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var last = kotlin_kotlin.$_$.ih;
  var isWhitespace = kotlin_kotlin.$_$.eh;
  var first = kotlin_kotlin.$_$.ug;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.n3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.q4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.x3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.h4;
  var toString_0 = kotlin_kotlin.$_$.f3;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var smartStartTag_0 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.y1;
  var endTag = kotlin_io_github_pdvrieze_xmlutil_core.$_$.s1;
  var sortedWith_0 = kotlin_kotlin.$_$.la;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var Iterator = kotlin_kotlin.$_$.f6;
  var firstOrNull = kotlin_kotlin.$_$.wf;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var isDigit = kotlin_kotlin.$_$.zg;
  var numberRangeToNumber = kotlin_kotlin.$_$.qd;
  var asSequence_1 = kotlin_kotlin.$_$.z6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var writeAttribute = kotlin_io_github_pdvrieze_xmlutil_core.$_$.c2;
  var first_0 = kotlin_kotlin.$_$.k8;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var substringAfterLast = kotlin_kotlin.$_$.th;
  var toQname = kotlin_io_github_pdvrieze_xmlutil_core.$_$.b2;
  var startsWith = kotlin_kotlin.$_$.sh;
  var lastIndexOf = kotlin_kotlin.$_$.gh;
  var indexOf = kotlin_kotlin.$_$.xg;
  var startsWith_0 = kotlin_kotlin.$_$.rh;
  var XmlDeclMode_None_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.h;
  var XmlVersion_XML11_getInstance = kotlin_io_github_pdvrieze_xmlutil_core.$_$.a;
  var captureStack = kotlin_kotlin.$_$.ec;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var OPEN_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var plus_1 = kotlin_kotlin.$_$.eg;
  var filter = kotlin_kotlin.$_$.vf;
  var Sequence = kotlin_kotlin.$_$.rf;
  var flatMap = kotlin_kotlin.$_$.yf;
  var charArrayOf = kotlin_kotlin.$_$.fc;
  var split_0 = kotlin_kotlin.$_$.ph;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var Char = kotlin_kotlin.$_$.xi;
  var Long = kotlin_kotlin.$_$.jj;
  var listOfNotNull = kotlin_kotlin.$_$.j9;
  var getPrefixes = kotlin_io_github_pdvrieze_xmlutil_core.$_$.f1;
  var NamespaceContextImpl = kotlin_io_github_pdvrieze_xmlutil_core.$_$.g1;
  var startDocument$default = kotlin_io_github_pdvrieze_xmlutil_core.$_$.i;
  var namespaceAttr = kotlin_io_github_pdvrieze_xmlutil_core.$_$.l1;
  var processingInstruction = kotlin_io_github_pdvrieze_xmlutil_core.$_$.m1;
  var XmlWriter = kotlin_io_github_pdvrieze_xmlutil_core.$_$.n1;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trim = kotlin_kotlin.$_$.si;
  var lazy = kotlin_kotlin.$_$.rk;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var getPolymorphicDescriptors = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var get_capturedKClass = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toNamespace = kotlin_io_github_pdvrieze_xmlutil_core.$_$.a2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.n5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.q5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.o5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.p5;
  var serializer_4 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var requireNoNulls = kotlin_kotlin.$_$.ca;
  var toList_1 = kotlin_kotlin.$_$.va;
  var get_indices = kotlin_kotlin.$_$.u8;
  var CompactFragment_init_$Create$_1 = kotlin_io_github_pdvrieze_xmlutil_core.$_$.l;
  var substringBeforeLast = kotlin_kotlin.$_$.uh;
  var XmlException_init_$Create$ = kotlin_io_github_pdvrieze_xmlutil_core.$_$.o;
  var dropLast = kotlin_kotlin.$_$.pg;
  var endsWith = kotlin_kotlin.$_$.rg;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var Pair = kotlin_kotlin.$_$.nj;
  var toMutableList = kotlin_kotlin.$_$.xa;
  var compareTo = kotlin_kotlin.$_$.lc;
  var get_EmptySerializersModuleLegacyJs = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g3;
  var get_name = kotlin_io_github_pdvrieze_xmlutil_core.$_$.y;
  var replace = kotlin_kotlin.$_$.mh;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CompactFragmentSerializer, 'CompactFragmentSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(NodeSerializer, 'NodeSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ElementSerializer, 'ElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DocumentDecoder, 'DocumentDecoder', classMeta, VOID, [Decoder]);
  setMetadataFor(DocumentCompositeDecoder, 'DocumentCompositeDecoder', classMeta, VOID, [CompositeDecoder]);
  setMetadataFor(WrappedDeserializationStrategy, 'WrappedDeserializationStrategy', classMeta, VOID, [DeserializationStrategy]);
  setMetadataFor(InputKind, 'InputKind', classMeta, Enum);
  setMetadataFor(InputKind$Element, 'Element', classMeta, InputKind);
  setMetadataFor(InputKind$Attribute, 'Attribute', classMeta, InputKind);
  setMetadataFor(InputKind$Text, 'Text', classMeta, InputKind);
  setMetadataFor(OutputKind, 'OutputKind', classMeta, Enum);
  setMetadataFor(OutputKind$Attribute, 'Attribute', classMeta, OutputKind);
  setMetadataFor(OutputKind$Text, 'Text', classMeta, OutputKind);
  setMetadataFor(PolyBaseInfo, 'PolyBaseInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [StringFormat]);
  function ensureNamespace(qName) {
    return this.dhl(qName, false);
  }
  setMetadataFor(XmlOutput, 'XmlOutput', interfaceMeta);
  setMetadataFor(XmlInput, 'XmlInput', interfaceMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(XML, 'XML', classMeta, VOID, [StringFormat]);
  setMetadataFor(XmlCodec, 'XmlCodec', classMeta);
  setMetadataFor(DecodeCommons, 'DecodeCommons', classMeta, XmlCodec, [XmlCodec, XmlInput, Decoder]);
  setMetadataFor(XmlDecoder, 'XmlDecoder', classMeta, DecodeCommons, [DecodeCommons, Decoder, XmlInput]);
  setMetadataFor(StringDecoder, 'StringDecoder', classMeta, DecodeCommons, [Decoder, XmlInput, DecodeCommons]);
  setMetadataFor(SerialValueDecoder, 'SerialValueDecoder', classMeta, XmlDecoder);
  setMetadataFor(NullDecoder, 'NullDecoder', classMeta, XmlDecoder, [XmlDecoder, CompositeDecoder]);
  setMetadataFor(XmlTagCodec, 'XmlTagCodec', classMeta);
  setMetadataFor(TagDecoderBase, 'TagDecoderBase', classMeta, XmlTagCodec, [XmlTagCodec, CompositeDecoder, XmlInput]);
  setMetadataFor(TagDecoder, 'TagDecoder', classMeta, TagDecoderBase);
  setMetadataFor(AttributeMapDecoder, 'AttributeMapDecoder', classMeta, TagDecoderBase, [TagDecoderBase, Decoder]);
  setMetadataFor(AttributeListDecoder, 'AttributeListDecoder', classMeta, TagDecoderBase);
  setMetadataFor(AnonymousListDecoder, 'AnonymousListDecoder', classMeta, TagDecoderBase);
  setMetadataFor(NamedListDecoder, 'NamedListDecoder', classMeta, TagDecoderBase);
  setMetadataFor(MapDecoderBase, 'MapDecoderBase', classMeta, TagDecoderBase);
  setMetadataFor(AnonymousMapDecoder, 'AnonymousMapDecoder', classMeta, MapDecoderBase);
  setMetadataFor(NamedMapDecoder, 'NamedMapDecoder', classMeta, MapDecoderBase);
  setMetadataFor(PolymorphicDecoder, 'PolymorphicDecoder', classMeta, TagDecoderBase);
  setMetadataFor(XmlCodecBase, 'XmlCodecBase', classMeta);
  setMetadataFor(XmlDecoderBase, 'XmlDecoderBase', classMeta, XmlCodecBase);
  setMetadataFor(PolyInfo, 'PolyInfo', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(XmlEncoder, 'XmlEncoder', classMeta, XmlCodec, [XmlCodec, Encoder, XmlOutput]);
  setMetadataFor(NSAttrXmlEncoder, 'NSAttrXmlEncoder', classMeta, XmlEncoder);
  setMetadataFor(PrimitiveEncoder, 'PrimitiveEncoder', classMeta, VOID, [Encoder, XmlOutput]);
  setMetadataFor(InlineEncoder, 'InlineEncoder', classMeta, XmlEncoder);
  setMetadataFor(TagEncoder, 'TagEncoder', classMeta, XmlTagCodec, [XmlTagCodec, CompositeEncoder, XmlOutput]);
  setMetadataFor(InlineTagEncoder, 'InlineTagEncoder', classMeta, TagEncoder);
  setMetadataFor(PolymorphicEncoder, 'PolymorphicEncoder', classMeta, TagEncoder, [TagEncoder, XmlOutput]);
  setMetadataFor(AttributeMapEncoder, 'AttributeMapEncoder', classMeta, TagEncoder);
  setMetadataFor(AttributeListEncoder, 'AttributeListEncoder', classMeta, TagEncoder);
  setMetadataFor(ListEncoder, 'ListEncoder', classMeta, TagEncoder, [TagEncoder, XmlOutput]);
  setMetadataFor(MapEncoder, 'MapEncoder', classMeta, TagEncoder);
  setMetadataFor(XmlEncoderBase, 'XmlEncoderBase', classMeta, XmlCodecBase);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0, 'sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0', classMeta);
  setMetadataFor(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_0, 'sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0', classMeta);
  setMetadataFor(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_1, 'sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(XmlConfig, 'XmlConfig', classMeta);
  setMetadataFor(XmlSerialException, 'XmlSerialException', classMeta, SerializationException);
  setMetadataFor(UnknownXmlFieldException, 'UnknownXmlFieldException', classMeta, XmlSerialException);
  setMetadataFor(XmlParsingException, 'XmlParsingException', classMeta, XmlSerialException);
  setMetadataFor(DeclaredNameInfo, 'DeclaredNameInfo', classMeta);
  setMetadataFor(ActualNameInfo, 'ActualNameInfo', classMeta);
  setMetadataFor(XmlEncodeDefault, 'XmlEncodeDefault', classMeta, Enum);
  function get_defaultPrimitiveOutputKind() {
    return OutputKind_Attribute_getInstance();
  }
  function get_defaultObjectOutputKind() {
    return OutputKind_Element_getInstance();
  }
  function defaultOutputKind(serialKind) {
    var tmp0_subject = serialKind;
    var tmp;
    if (equals(tmp0_subject, ENUM_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) {
      tmp = this.ei5();
    } else {
      if (tmp0_subject instanceof PrimitiveKind) {
        tmp = this.di5();
      } else {
        if (equals(tmp0_subject, OPEN_getInstance())) {
          tmp = OutputKind_Element_getInstance();
        } else {
          tmp = OutputKind_Element_getInstance();
        }
      }
    }
    return tmp;
  }
  function invalidOutputKind(message) {
    return this.hi5(message);
  }
  function serialTypeNameToQName(typeNameInfo, parentNamespace) {
    return this.mi5(typeNameInfo.zi4_1, parentNamespace);
  }
  function serialUseNameToQName(useNameInfo, parentNamespace) {
    return this.mi5(useNameInfo.zi4_1, parentNamespace);
  }
  function effectiveOutputKind(serializerParent, tagParent, canBeAttribute) {
    var base = this.oi5(serializerParent, tagParent);
    if (!canBeAttribute ? base.equals(OutputKind_Attribute_getInstance()) : false) {
      return this.qi5(serializerParent, tagParent, base);
    }
    return base;
  }
  function overrideSerializerOrNull(serializerParent, tagParent) {
    return null;
  }
  function handleUnknownContentRecovering(input, inputKind, descriptor, name, candidates) {
    this.si5(input, inputKind, name, candidates);
    return emptyList();
  }
  function onElementRepeated(parentDescriptor, childIndex) {
  }
  function handleAttributeOrderConflict(serializerParent, tagParent, outputKind) {
    throw SerializationException_init_$Create$('Node ' + serializerParent.ti5().zi4_1 + ' wants to be an attribute but cannot due to ordering constraints');
  }
  function initialChildReorderMap(parentDescriptor) {
    return null;
  }
  function preserveSpace(serializerParent, tagParent) {
    return true;
  }
  function mapKeyName(serializerParent) {
    return new DeclaredNameInfo('key', null);
  }
  function mapValueName(serializerParent, isListEluded) {
    return new DeclaredNameInfo('value', null);
  }
  function mapEntryName(serializerParent, isListEluded) {
    return QName_init_$Create$_0(serializerParent.zi5().th8(), 'entry');
  }
  function isMapValueCollapsed(mapParent, valueDescriptor) {
    return false;
  }
  function elementNamespaceDecls(serializerParent) {
    return emptyList();
  }
  function attributeListDelimiters(serializerParent, tagParent) {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [' ', '\n', '\t', '\r'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  setMetadataFor(XmlSerializationPolicy, 'XmlSerializationPolicy', interfaceMeta);
  setMetadataFor(Builder_0, 'Builder', classMeta);
  setMetadataFor(DefaultXmlSerializationPolicy, 'DefaultXmlSerializationPolicy', classMeta, VOID, [XmlSerializationPolicy]);
  setMetadataFor(XmlSerialName, 'XmlSerialName', classMeta);
  setMetadataFor(XmlPolyChildren, 'XmlPolyChildren', classMeta);
  setMetadataFor(XmlElement, 'XmlElement', classMeta);
  setMetadataFor(XmlValue, 'XmlValue', classMeta);
  setMetadataFor(XmlChildrenName, 'XmlChildrenName', classMeta);
  setMetadataFor(XmlCData, 'XmlCData', classMeta);
  setMetadataFor(XmlDefault, 'XmlDefault', classMeta);
  setMetadataFor(XmlOtherAttributes, 'XmlOtherAttributes', classMeta);
  setMetadataFor(XmlBefore, 'XmlBefore', classMeta);
  setMetadataFor(XmlAfter, 'XmlAfter', classMeta);
  setMetadataFor(XmlIgnoreWhitespace, 'XmlIgnoreWhitespace', classMeta);
  setMetadataFor(XmlNamespaceDeclSpec, 'XmlNamespaceDeclSpec', classMeta);
  setMetadataFor(ChildCollector, 'ChildCollector', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(DummyDecoder, 'DummyDecoder', classMeta, VOID, [Decoder]);
  setMetadataFor(NamespaceCollectingXmlWriter$namespaceContext$1, VOID, classMeta, VOID, [NamespaceContextImpl]);
  setMetadataFor(NamespaceCollectingXmlWriter, 'NamespaceCollectingXmlWriter', classMeta, VOID, [XmlWriter]);
  setMetadataFor(PrefixWrappingPolicy, 'PrefixWrappingPolicy', classMeta, VOID, [XmlSerializationPolicy]);
  setMetadataFor(XmlQNameSerializer, 'XmlQNameSerializer', objectMeta, VOID, [KSerializer]);
  function get_isNullable() {
    return this.thn().lgp();
  }
  function get_kind() {
    return this.thn().tgp();
  }
  function get_isCData() {
    return false;
  }
  function isElementOptional(index) {
    return this.thn().ygp(index);
  }
  setMetadataFor(SafeXmlDescriptor, 'SafeXmlDescriptor', interfaceMeta);
  setMetadataFor(XmlDescriptor, 'XmlDescriptor', classMeta, VOID, [SafeXmlDescriptor]);
  setMetadataFor(XmlRootDescriptor, 'XmlRootDescriptor', classMeta, XmlDescriptor);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(XmlValueDescriptor, 'XmlValueDescriptor', classMeta, XmlDescriptor);
  setMetadataFor(XmlPolymorphicDescriptor, 'XmlPolymorphicDescriptor', classMeta, XmlValueDescriptor);
  function copy$default(useNameInfo, useOutputKind, overriddenSerializer, $super) {
    useNameInfo = useNameInfo === VOID ? this.ti5() : useNameInfo;
    useOutputKind = useOutputKind === VOID ? this.fi6() : useOutputKind;
    overriddenSerializer = overriddenSerializer === VOID ? this.ji7() : overriddenSerializer;
    return $super === VOID ? this.qi7(useNameInfo, useOutputKind, overriddenSerializer) : $super.qi7.call(this, useNameInfo, useOutputKind, overriddenSerializer);
  }
  setMetadataFor(SafeParentInfo, 'SafeParentInfo', interfaceMeta);
  setMetadataFor(DetachedParent, 'DetachedParent', classMeta, VOID, [SafeParentInfo]);
  setMetadataFor(XmlListLikeDescriptor, 'XmlListLikeDescriptor', classMeta, XmlDescriptor);
  setMetadataFor(XmlListDescriptor, 'XmlListDescriptor', classMeta, XmlListLikeDescriptor);
  setMetadataFor(XmlPrimitiveDescriptor, 'XmlPrimitiveDescriptor', classMeta, XmlValueDescriptor);
  setMetadataFor(XmlAttributeMapDescriptor, 'XmlAttributeMapDescriptor', classMeta, XmlValueDescriptor);
  setMetadataFor(XmlMapDescriptor, 'XmlMapDescriptor', classMeta, XmlListLikeDescriptor);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(XmlInlineDescriptor, 'XmlInlineDescriptor', classMeta, XmlValueDescriptor);
  setMetadataFor(XmlCompositeDescriptor, 'XmlCompositeDescriptor', classMeta, XmlValueDescriptor);
  setMetadataFor(UNSET, 'UNSET', objectMeta);
  setMetadataFor(PolymorphicMode, 'PolymorphicMode', classMeta);
  setMetadataFor(TRANSPARENT, 'TRANSPARENT', objectMeta, PolymorphicMode);
  setMetadataFor(TAG, 'TAG', objectMeta, PolymorphicMode);
  setMetadataFor(ATTR, 'ATTR', classMeta, PolymorphicMode);
  setMetadataFor(ParentInfo, 'ParentInfo', classMeta, VOID, [SafeParentInfo]);
  setMetadataFor(InjectedParentTag, 'InjectedParentTag', classMeta, VOID, [SafeParentInfo]);
  setMetadataFor(XmlOrderConstraint, 'XmlOrderConstraint', classMeta);
  setMetadataFor(XmlOrderNode, 'XmlOrderNode', classMeta);
  setMetadataFor(XmlTypeDescriptor, 'XmlTypeDescriptor', classMeta);
  //endregion
  function readCompactFragmentContent($this, input) {
    var tmp;
    if (isInterface(input, XmlInput)) {
      // Inline function 'kotlin.run' call
      var tmp0_run = input.h3t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.CompactFragmentSerializer.readCompactFragmentContent.<anonymous>' call
      tmp0_run.f();
      tmp = siblingsToFragment(tmp0_run);
    } else {
      // Inline function 'kotlin.collections.mutableListOf' call
      var namespaces = ArrayList_init_$Create$();
      var content = '';
      var index = input.ggs($this.thi_1);
      while (index >= 0) {
        var tmp0_subject = index;
        if (tmp0_subject === 0)
          namespaces = input.cgs($this.thi_1, index, $this.shi_1);
        else if (tmp0_subject === 1)
          content = input.zgr($this.thi_1, index);
        index = input.ggs($this.thi_1);
      }
      tmp = CompactFragment_init_$Create$(namespaces, content);
    }
    return tmp;
  }
  function CompactFragmentSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    $this$buildClassSerialDescriptor.vgo('namespaces', CompactFragmentSerializer_getInstance().shi_1.kgo());
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$2 = (isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE()).kgo();
    $this$buildClassSerialDescriptor.vgo('content', tmp$ret$2);
    return Unit_getInstance();
  }
  function CompactFragmentSerializer() {
    CompactFragmentSerializer_instance = this;
    this.shi_1 = ListSerializer(Companion_getInstance());
    var tmp = this;
    tmp.thi_1 = buildClassSerialDescriptor('compactFragment', [], CompactFragmentSerializer$descriptor$lambda);
  }
  protoOf(CompactFragmentSerializer).kgo = function () {
    return this.thi_1;
  };
  protoOf(CompactFragmentSerializer).mgo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.thi_1;
    var composite = decoder.pgr(tmp0_decodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.serialization.CompactFragmentSerializer.deserialize.<anonymous>' call
    var result = readCompactFragmentContent(CompactFragmentSerializer_getInstance(), composite);
    composite.qgr(tmp0_decodeStructure);
    return result;
  };
  protoOf(CompactFragmentSerializer).uhi = function (encoder, value) {
    this.vhi(encoder, isInterface(value, ICompactFragment) ? value : THROW_CCE());
  };
  protoOf(CompactFragmentSerializer).lgo = function (encoder, value) {
    return this.uhi(encoder, value instanceof CompactFragment ? value : THROW_CCE());
  };
  protoOf(CompactFragmentSerializer).vhi = function (output, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.thi_1;
    var composite = output.pgr(tmp0_encodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.serialization.CompactFragmentSerializer.serialize.<anonymous>' call
    CompactFragmentSerializer_getInstance().whi(composite, value);
    composite.qgr(tmp0_encodeStructure);
  };
  protoOf(CompactFragmentSerializer).whi = function (encoder, value) {
    var xmlOutput = isInterface(encoder, XmlOutput) ? encoder : null;
    if (!(xmlOutput == null)) {
      var writer = xmlOutput.lha();
      var tmp0_iterator = value.yhh().d();
      while (tmp0_iterator.e()) {
        var namespace = tmp0_iterator.f();
        if (writer.xha(namespace.th8()) == null) {
          writer.ahb(namespace);
        }
      }
      value.ahi(writer);
    } else {
      encoder.fgt(this.thi_1, 0, this.shi_1, toList(value.yhh()));
      encoder.dgt(this.thi_1, 1, value.zhh());
    }
  };
  var CompactFragmentSerializer_instance;
  function CompactFragmentSerializer_getInstance() {
    if (CompactFragmentSerializer_instance == null)
      new CompactFragmentSerializer();
    return CompactFragmentSerializer_instance;
  }
  function deserialize($this, decoder) {
    var result = {_v: null};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = $this.zhi_1;
    var composite = decoder.pgr(tmp0_decodeStructure);
    var type = null;
    var nextValue = composite.ggs(NodeSerializer_getInstance().zhi_1);
    $l$loop: while (true) {
      var tmp = nextValue;
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
      var tmp0_subject = nextValue;
      if (tmp0_subject === 0)
        type = composite.zgr(NodeSerializer_getInstance().zhi_1, 0);
      else if (tmp0_subject === 1) {
        switch (type) {
          case null:
            throw SerializationException_init_$Create$('Missing type');
          case 'element':
            result._v = composite.cgs(NodeSerializer_getInstance().zhi_1, 1, ElementSerializer_getInstance());
            break;
          case 'attr':
            var map = composite.cgs(NodeSerializer_getInstance().zhi_1, 1, NodeSerializer_getInstance().xhi_1);
            if (!(map.g() === 1))
              throw SerializationException_init_$Create$('Only a single attribute pair expected');
            // Inline function 'kotlin.apply' call

            var tmp0_apply = decoder.bhj_1.createAttribute(single(map.a3()));
            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'nl.adaptivity.xmlutil.serialization.NodeSerializer.deserialize.<anonymous>.<anonymous>' call

            tmp0_apply.value = single(map.b3());
            result._v = tmp0_apply;
            break;
          case 'text':
            result._v = decoder.bhj_1.createTextNode(composite.zgr(NodeSerializer_getInstance().zhi_1, 1));
            break;
          case 'comment':
            result._v = decoder.bhj_1.createComment(composite.zgr(NodeSerializer_getInstance().zhi_1, 1));
            break;
          default:
            throw SerializationException_init_$Create$('unsupported type: ' + type);
        }
      }
      nextValue = composite.ggs(NodeSerializer_getInstance().zhi_1);
    }
    var result_0 = Unit_getInstance();
    composite.qgr(tmp0_decodeStructure);
    var tmp0_elvis_lhs = result._v;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('Missing value');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function NodeSerializer$ed$lambda($this$buildSerialDescriptor) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$2 = (isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE()).kgo();
    $this$buildSerialDescriptor.vgo('text', tmp$ret$2);
    var tmp = CONTEXTUAL_getInstance();
    $this$buildSerialDescriptor.vgo('element', buildSerialDescriptor('element', tmp, [], NodeSerializer$ed$lambda$lambda));
    return Unit_getInstance();
  }
  function NodeSerializer$ed$lambda$lambda($this$buildSerialDescriptor) {
    return Unit_getInstance();
  }
  function NodeSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$2 = (isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE()).kgo();
    $this$buildSerialDescriptor.vgo('type', tmp$ret$2);
    $this$buildSerialDescriptor.vgo('value', NodeSerializer_getInstance().yhi_1);
    return Unit_getInstance();
  }
  function NodeSerializer() {
    NodeSerializer_instance = this;
    this.xhi_1 = MapSerializer(serializer_0(StringCompanionObject_getInstance()), serializer_0(StringCompanionObject_getInstance()));
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.yhi_1 = buildSerialDescriptor('org.w3c.dom.Node', tmp_0, [], NodeSerializer$ed$lambda);
    var tmp_1 = this;
    var tmp_2 = SEALED_getInstance();
    tmp_1.zhi_1 = buildSerialDescriptor('node', tmp_2, [], NodeSerializer$descriptor$lambda);
  }
  protoOf(NodeSerializer).kgo = function () {
    return this.zhi_1;
  };
  protoOf(NodeSerializer).mgo = function (decoder) {
    var tmp;
    if (decoder instanceof DocumentDecoder) {
      tmp = deserialize(this, decoder);
    } else {
      tmp = deserialize(this, DocumentDecoder_init_$Create$(decoder));
    }
    return tmp;
  };
  protoOf(NodeSerializer).chj = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.zhi_1;
    var composite = encoder.pgr(tmp0_encodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.serialization.NodeSerializer.serialize.<anonymous>' call
    var tmp0_subject = value.nodeType;
    var tmp;
    var tmp_0 = tmp0_subject;
    NodeConsts_getInstance();
    if (tmp_0 === 9) {
      tmp = true;
    } else {
      var tmp_1 = tmp0_subject;
      NodeConsts_getInstance();
      tmp = tmp_1 === 11;
    }
    if (tmp) {
      var tmp_2;
      var tmp_3 = value.nodeType;
      NodeConsts_getInstance();
      if (tmp_3 === 11) {
        tmp_2 = 'fragment';
      } else {
        tmp_2 = 'document';
      }
      var type = tmp_2;
      composite.dgt(NodeSerializer_getInstance().zhi_1, 0, type);
      var children = toList_0(asSequence(iterator(value.childNodes)));
      composite.fgt(NodeSerializer_getInstance().zhi_1, 1, ListSerializer(NodeSerializer_getInstance()), children);
    } else {
      var tmp_4 = tmp0_subject;
      NodeConsts_getInstance();
      if (tmp_4 === 1) {
        composite.dgt(NodeSerializer_getInstance().zhi_1, 0, 'element');
        var tmp_5 = NodeSerializer_getInstance().zhi_1;
        var tmp_6 = ElementSerializer_getInstance();
        composite.fgt(tmp_5, 1, tmp_6, isObject(value) ? value : THROW_CCE());
      } else {
        var tmp_7 = tmp0_subject;
        NodeConsts_getInstance();
        if (tmp_7 === 2) {
          composite.dgt(NodeSerializer_getInstance().zhi_1, 0, 'attr');
          var tmp_8 = NodeSerializer_getInstance().zhi_1;
          var tmp_9 = NodeSerializer_getInstance().xhi_1;
          composite.fgt(tmp_8, 1, tmp_9, mapOf(to((isObject(value) ? value : THROW_CCE()).name, value.value)));
        } else {
          var tmp_10;
          var tmp_11 = tmp0_subject;
          NodeConsts_getInstance();
          if (tmp_11 === 3) {
            tmp_10 = true;
          } else {
            var tmp_12 = tmp0_subject;
            NodeConsts_getInstance();
            tmp_10 = tmp_12 === 4;
          }
          if (tmp_10) {
            composite.dgt(NodeSerializer_getInstance().zhi_1, 0, 'text');
            var tmp_13 = NodeSerializer_getInstance().zhi_1;
            var tmp1_elvis_lhs = value.textContent;
            composite.dgt(tmp_13, 1, tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
          } else {
            var tmp_14 = tmp0_subject;
            NodeConsts_getInstance();
            if (tmp_14 === 8) {
              composite.dgt(NodeSerializer_getInstance().zhi_1, 0, 'comment');
              var tmp_15 = NodeSerializer_getInstance().zhi_1;
              var tmp2_elvis_lhs = value.textContent;
              composite.dgt(tmp_15, 1, tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
            } else {
              var tmp_16 = tmp0_subject;
              NodeConsts_getInstance();
              if (tmp_16 === 7)
                throw SerializationException_init_$Create$('Processing instructions can not be serialized');
              else {
                throw SerializationException_init_$Create$('Cannot serialize: ' + value);
              }
            }
          }
        }
      }
    }
    composite.qgr(tmp0_encodeStructure);
  };
  protoOf(NodeSerializer).lgo = function (encoder, value) {
    return this.chj(encoder, (!(value == null) ? isObject(value) : false) ? value : THROW_CCE());
  };
  var NodeSerializer_instance;
  function NodeSerializer_getInstance() {
    if (NodeSerializer_instance == null)
      new NodeSerializer();
    return NodeSerializer_instance;
  }
  function deserializeInput($this, decoder) {
    var document = createDocument(decoder.h3t().d66());
    var fragment = document.createDocumentFragment();
    var out = new DomWriter(fragment);
    writeElement(out, null, decoder.h3t());
    var e = fragment.firstChild;
    $l$loop: while (true) {
      var tmp;
      if (!(e == null)) {
        var tmp_0 = e.nodeType;
        NodeConsts_getInstance();
        tmp = !(tmp_0 === 1);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      e = e.nextSibling;
    }
    var tmp0_elvis_lhs = (e == null ? true : isObject(e)) ? e : THROW_CCE();
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('Expected element, but did not find it');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function deserialize_0($this, decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = $this.ehj_1;
    var composite = decoder.pgr(tmp0_decodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.serialization.ElementSerializer.deserialize.<anonymous>' call
    var contentSerializer = ListSerializer(NodeSerializer_getInstance());
    var idx = composite.ggs(ElementSerializer_getInstance().ehj_1);
    var nameSpace = null;
    var localName = null;
    var attributes = null;
    var content = null;
    $l$loop: while (true) {
      var tmp = idx;
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
      var tmp0_subject = idx;
      if (tmp0_subject === 0)
        nameSpace = composite.zgr(ElementSerializer_getInstance().ehj_1, 0);
      else {
        if (tmp0_subject === 1)
          localName = composite.zgr(ElementSerializer_getInstance().ehj_1, 1);
        else {
          if (tmp0_subject === 2)
            attributes = ElementSerializer_getInstance().dhj_1.mgo(decoder);
          else {
            if (tmp0_subject === 3)
              content = contentSerializer.mgo(decoder);
            else {
              Companion_getInstance_0();
              if (tmp0_subject === -3)
                throw SerializationException_init_$Create$('Found unexpected child at index: ' + idx);
              else {
                throw IllegalStateException_init_$Create$('Received an unexpected decoder value: ' + idx);
              }
            }
          }
        }
      }
      idx = composite.ggs(ElementSerializer_getInstance().ehj_1);
    }
    if (localName == null)
      throw SerializationException_init_$Create$('Missing localName');
    if (attributes == null)
      throw SerializationException_init_$Create$('Missing attributes');
    if (content == null)
      throw SerializationException_init_$Create$('Missing content');
    var doc = decoder.bhj_1;
    // Inline function 'kotlin.apply' call
    var tmp_0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = nameSpace;
    // Inline function 'kotlin.contracts.contract' call
    if (tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0) {
      tmp_0 = doc.createElement(localName);
    } else {
      tmp_0 = doc.createElementNS(nameSpace, localName);
    }
    var tmp1_apply = tmp_0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.ElementSerializer.deserialize.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attributes.q().d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      // Inline function 'kotlin.collections.component1' call
      var name = tmp1_loop_parameter.r();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.s();
      tmp1_apply.setAttribute(name, value);
    }
    var tmp2_iterator = content.d();
    while (tmp2_iterator.e()) {
      var node = tmp2_iterator.f();
      tmp1_apply.appendChild(doc.adoptNode(node));
    }
    var result = tmp1_apply;
    composite.qgr(tmp0_decodeStructure);
    return result;
  }
  function ElementSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$2 = (isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE()).kgo();
    $this$buildClassSerialDescriptor.vgo('namespace', tmp$ret$2, VOID, true);
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast_0 = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$5 = (isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE()).kgo();
    $this$buildClassSerialDescriptor.vgo('localname', tmp$ret$5);
    $this$buildClassSerialDescriptor.vgo('attributes', ElementSerializer_getInstance().dhj_1.kgo());
    $this$buildClassSerialDescriptor.vgo('content', ListSerializer(NodeSerializer_getInstance()).kgo());
    return Unit_getInstance();
  }
  function ElementSerializer() {
    ElementSerializer_instance = this;
    this.dhj_1 = MapSerializer(serializer_0(StringCompanionObject_getInstance()), serializer_0(StringCompanionObject_getInstance()));
    var tmp = this;
    tmp.ehj_1 = buildClassSerialDescriptor('element', [], ElementSerializer$descriptor$lambda);
  }
  protoOf(ElementSerializer).kgo = function () {
    return this.ehj_1;
  };
  protoOf(ElementSerializer).mgo = function (decoder) {
    var tmp;
    if (isInterface(decoder, XmlInput)) {
      tmp = deserializeInput(this, decoder);
    } else {
      if (decoder instanceof DocumentDecoder) {
        tmp = deserialize_0(this, decoder);
      } else {
        tmp = deserialize_0(this, DocumentDecoder_init_$Create$(decoder));
      }
    }
    return tmp;
  };
  protoOf(ElementSerializer).fhj = function (encoder, value) {
    if (isInterface(encoder, XmlOutput)) {
      serialize(encoder.lha(), value);
    } else {
      // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
      var tmp0_encodeStructure = this.ehj_1;
      var composite = encoder.pgr(tmp0_encodeStructure);
      // Inline function 'nl.adaptivity.xmlutil.serialization.ElementSerializer.serialize.<anonymous>' call
      var ln = value.localName;
      if (ln == null) {
        composite.dgt(ElementSerializer_getInstance().ehj_1, 1, value.tagName);
      } else {
        var namespaceURI = value.namespaceURI;
        // Inline function 'kotlin.text.isNullOrEmpty' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(namespaceURI == null ? true : charSequenceLength(namespaceURI) === 0)) {
          composite.dgt(ElementSerializer_getInstance().ehj_1, 0, namespaceURI);
        }
        composite.dgt(ElementSerializer_getInstance().ehj_1, 1, value.localName);
      }
      var attrIterator = iterator_0(value.attributes);
      // Inline function 'kotlin.sequences.associate' call
      var tmp0_associate = asSequence(attrIterator);
      // Inline function 'kotlin.sequences.associateTo' call
      var tmp0_associateTo = LinkedHashMap_init_$Create$();
      var tmp0_iterator = tmp0_associate.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'nl.adaptivity.xmlutil.serialization.ElementSerializer.serialize.<anonymous>.<anonymous>' call
        var tmp0_plusAssign = to(element.nodeName, element.value);
        tmp0_associateTo.a5(tmp0_plusAssign.w4_1, tmp0_plusAssign.x4_1);
      }
      var m = tmp0_associateTo;
      composite.fgt(ElementSerializer_getInstance().ehj_1, 2, ElementSerializer_getInstance().dhj_1, m);
      var n = toList_0(asSequence(iterator(value.childNodes)));
      composite.fgt(ElementSerializer_getInstance().ehj_1, 3, ListSerializer(NodeSerializer_getInstance()), n);
      composite.qgr(tmp0_encodeStructure);
    }
  };
  protoOf(ElementSerializer).lgo = function (encoder, value) {
    return this.fhj(encoder, (!(value == null) ? isObject(value) : false) ? value : THROW_CCE());
  };
  var ElementSerializer_instance;
  function ElementSerializer_getInstance() {
    if (ElementSerializer_instance == null)
      new ElementSerializer();
    return ElementSerializer_instance;
  }
  function DocumentDecoder_init_$Init$(delegate, $this) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = createDocument(QName_init_$Create$('dummy'));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.DocumentDecoder.<init>.<anonymous>' call
    var tmp0_safe_receiver = tmp0_apply.documentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_apply.removeChild(tmp0_safe_receiver);
    }
    DocumentDecoder.call($this, delegate, tmp0_apply);
    return $this;
  }
  function DocumentDecoder_init_$Create$(delegate) {
    return DocumentDecoder_init_$Init$(delegate, objectCreate(protoOf(DocumentDecoder)));
  }
  function DocumentDecoder(delegate, document) {
    this.ahj_1 = delegate;
    this.bhj_1 = document;
  }
  protoOf(DocumentDecoder).dgr = function () {
    return this.ahj_1.dgr();
  };
  protoOf(DocumentDecoder).egr = function () {
    return this.ahj_1.egr();
  };
  protoOf(DocumentDecoder).kgr = function () {
    return this.ahj_1.kgr();
  };
  protoOf(DocumentDecoder).jgr = function () {
    return this.ahj_1.jgr();
  };
  protoOf(DocumentDecoder).igr = function () {
    return this.ahj_1.igr();
  };
  protoOf(DocumentDecoder).mgr = function (descriptor) {
    return this.ahj_1.mgr(descriptor);
  };
  protoOf(DocumentDecoder).ggr = function () {
    return this.ahj_1.ggr();
  };
  protoOf(DocumentDecoder).hgr = function () {
    return this.ahj_1.hgr();
  };
  protoOf(DocumentDecoder).bgr = function () {
    return this.ahj_1.bgr();
  };
  protoOf(DocumentDecoder).cgr = function () {
    return this.ahj_1.cgr();
  };
  protoOf(DocumentDecoder).ogr = function (deserializer) {
    return this.ahj_1.ogr(deserializer);
  };
  protoOf(DocumentDecoder).fgr = function () {
    return this.ahj_1.fgr();
  };
  protoOf(DocumentDecoder).lgr = function () {
    return this.ahj_1.lgr();
  };
  protoOf(DocumentDecoder).pgr = function (descriptor) {
    return new DocumentCompositeDecoder(this.ahj_1.pgr(descriptor), this.bhj_1);
  };
  function serialize(encoder, value) {
    // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
    var tmp0_smartStartTag = value.namespaceURI;
    var tmp0_elvis_lhs = value.localName;
    var tmp1_smartStartTag = tmp0_elvis_lhs == null ? value.tagName : tmp0_elvis_lhs;
    var tmp2_smartStartTag = value.prefix;
    smartStartTag(encoder, tmp0_smartStartTag, tmp1_smartStartTag, tmp2_smartStartTag);
    // Inline function 'nl.adaptivity.xmlutil.serialization.serialize.<anonymous>' call
    var tmp0_iterator = iterator_0(value.attributes);
    while (tmp0_iterator.e()) {
      var n = tmp0_iterator.f();
      serialize_0(encoder, n);
    }
    var tmp1_iterator = iterator(value.childNodes);
    while (tmp1_iterator.e()) {
      var child = tmp1_iterator.f();
      serialize_1(encoder, child);
    }
    encoder.vha(tmp0_smartStartTag, tmp1_smartStartTag, tmp2_smartStartTag);
  }
  function DocumentCompositeDecoder(delegate, document) {
    this.ghj_1 = delegate;
    this.hhj_1 = document;
  }
  protoOf(DocumentCompositeDecoder).egs = function () {
    return this.ghj_1.egs();
  };
  protoOf(DocumentCompositeDecoder).rgr = function (descriptor, index) {
    return this.ghj_1.rgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).sgr = function (descriptor, index) {
    return this.ghj_1.sgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).ygr = function (descriptor, index) {
    return this.ghj_1.ygr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).hgs = function (descriptor) {
    return this.ghj_1.hgs(descriptor);
  };
  protoOf(DocumentCompositeDecoder).xgr = function (descriptor, index) {
    return this.ghj_1.xgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).ggs = function (descriptor) {
    return this.ghj_1.ggs(descriptor);
  };
  protoOf(DocumentCompositeDecoder).wgr = function (descriptor, index) {
    return this.ghj_1.wgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).ags = function (descriptor, index) {
    return this.ghj_1.ags(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).ugr = function (descriptor, index) {
    return this.ghj_1.ugr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).vgr = function (descriptor, index) {
    return this.ghj_1.vgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).fgs = function () {
    return this.ghj_1.fgs();
  };
  protoOf(DocumentCompositeDecoder).tgr = function (descriptor, index) {
    return this.ghj_1.tgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).zgr = function (descriptor, index) {
    return this.ghj_1.zgr(descriptor, index);
  };
  protoOf(DocumentCompositeDecoder).qgr = function (descriptor) {
    this.ghj_1.qgr(descriptor);
  };
  protoOf(DocumentCompositeDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    return this.ghj_1.bgs(descriptor, index, wrap(deserializer, this.hhj_1), previousValue);
  };
  protoOf(DocumentCompositeDecoder).dgs = function (descriptor, index, deserializer, previousValue) {
    return this.ghj_1.dgs(descriptor, index, wrap(deserializer, this.hhj_1), previousValue);
  };
  function serialize_0(encoder, value) {
    var tmp = value.namespaceURI;
    var tmp0_elvis_lhs = value.localName;
    encoder.rha(tmp, tmp0_elvis_lhs == null ? value.name : tmp0_elvis_lhs, value.prefix, value.value);
  }
  function serialize_1(encoder, value) {
    var tmp0_subject = value.nodeType;
    var tmp;
    var tmp_0 = tmp0_subject;
    NodeConsts_getInstance();
    if (tmp_0 === 1) {
      serialize(encoder, isObject(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      NodeConsts_getInstance();
      if (tmp_1 === 2) {
        serialize_0(encoder, isObject(value) ? value : THROW_CCE());
        tmp = Unit_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        NodeConsts_getInstance();
        if (tmp_2 === 4) {
          serialize_2(encoder, isObject(value) ? value : THROW_CCE());
          tmp = Unit_getInstance();
        } else {
          var tmp_3 = tmp0_subject;
          NodeConsts_getInstance();
          if (tmp_3 === 3) {
            serialize_3(encoder, isObject(value) ? value : THROW_CCE());
            tmp = Unit_getInstance();
          } else {
            var tmp_4 = tmp0_subject;
            NodeConsts_getInstance();
            if (tmp_4 === 8) {
              serialize_4(encoder, isObject(value) ? value : THROW_CCE());
              tmp = Unit_getInstance();
            } else {
              var tmp_5 = tmp0_subject;
              NodeConsts_getInstance();
              if (tmp_5 === 7) {
                serialize_5(encoder, isObject(value) ? value : THROW_CCE());
                tmp = Unit_getInstance();
              } else {
                throw IllegalArgumentException_init_$Create$('Can not serialize node: ' + value);
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function WrappedDeserializationStrategy(delegate, document) {
    this.ihj_1 = delegate;
    this.jhj_1 = document;
  }
  protoOf(WrappedDeserializationStrategy).kgo = function () {
    return this.ihj_1.kgo();
  };
  protoOf(WrappedDeserializationStrategy).mgo = function (decoder) {
    return this.ihj_1.mgo(new DocumentDecoder(decoder, this.jhj_1));
  };
  function wrap(_this__u8e3s4, document) {
    return new WrappedDeserializationStrategy(_this__u8e3s4, document);
  }
  function serialize_2(encoder, value) {
    encoder.pha(ensureNotNull(value.textContent));
  }
  function serialize_3(encoder, value) {
    encoder.oha(ensureNotNull(value.textContent));
  }
  function serialize_4(encoder, value) {
    encoder.hha(ensureNotNull(value.textContent));
  }
  function serialize_5(encoder, value) {
    // Inline function 'nl.adaptivity.xmlutil.dom.getTarget' call
    var tmp = value.target;
    var tmp0_elvis_lhs = value.textContent;
    encoder.iha(tmp + ' ' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs));
  }
  function InputKind$Element() {
    InputKind.call(this, 'Element', 0);
    InputKind_Element_instance = this;
  }
  protoOf(InputKind$Element).mhj = function (outputKind) {
    return outputKind.equals(OutputKind_Element_getInstance());
  };
  var InputKind_Element_instance;
  function InputKind$Attribute() {
    InputKind.call(this, 'Attribute', 1);
    InputKind_Attribute_instance = this;
  }
  protoOf(InputKind$Attribute).mhj = function (outputKind) {
    return outputKind.equals(OutputKind_Attribute_getInstance());
  };
  var InputKind_Attribute_instance;
  function InputKind$Text() {
    InputKind.call(this, 'Text', 2);
    InputKind_Text_instance = this;
  }
  protoOf(InputKind$Text).mhj = function (outputKind) {
    return outputKind.equals(OutputKind_Text_getInstance());
  };
  var InputKind_Text_instance;
  var InputKind_entriesInitialized;
  function InputKind_initEntries() {
    if (InputKind_entriesInitialized)
      return Unit_getInstance();
    InputKind_entriesInitialized = true;
    InputKind_Element_instance = new InputKind$Element();
    InputKind_Attribute_instance = new InputKind$Attribute();
    InputKind_Text_instance = new InputKind$Text();
  }
  function InputKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(InputKind).phj = function (xmlDescriptor) {
    return this.mhj(xmlDescriptor.uhj());
  };
  function InputKind_Element_getInstance() {
    InputKind_initEntries();
    return InputKind_Element_instance;
  }
  function InputKind_Attribute_getInstance() {
    InputKind_initEntries();
    return InputKind_Attribute_instance;
  }
  function InputKind_Text_getInstance() {
    InputKind_initEntries();
    return InputKind_Text_instance;
  }
  var OutputKind_Element_instance;
  function OutputKind$Attribute() {
    OutputKind.call(this, 'Attribute', 1);
    OutputKind_Attribute_instance = this;
  }
  protoOf(OutputKind$Attribute).xhj = function () {
    return true;
  };
  var OutputKind_Attribute_instance;
  function OutputKind$Text() {
    OutputKind.call(this, 'Text', 2);
    OutputKind_Text_instance = this;
  }
  protoOf(OutputKind$Text).xhj = function () {
    return true;
  };
  var OutputKind_Text_instance;
  var OutputKind_Mixed_instance;
  var OutputKind_Inline_instance;
  var OutputKind_entriesInitialized;
  function OutputKind_initEntries() {
    if (OutputKind_entriesInitialized)
      return Unit_getInstance();
    OutputKind_entriesInitialized = true;
    OutputKind_Element_instance = new OutputKind('Element', 0);
    OutputKind_Attribute_instance = new OutputKind$Attribute();
    OutputKind_Text_instance = new OutputKind$Text();
    OutputKind_Mixed_instance = new OutputKind('Mixed', 3);
    OutputKind_Inline_instance = new OutputKind('Inline', 4);
  }
  function OutputKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(OutputKind).xhj = function () {
    return false;
  };
  function OutputKind_Element_getInstance() {
    OutputKind_initEntries();
    return OutputKind_Element_instance;
  }
  function OutputKind_Attribute_getInstance() {
    OutputKind_initEntries();
    return OutputKind_Attribute_instance;
  }
  function OutputKind_Text_getInstance() {
    OutputKind_initEntries();
    return OutputKind_Text_instance;
  }
  function OutputKind_Mixed_getInstance() {
    OutputKind_initEntries();
    return OutputKind_Mixed_instance;
  }
  function OutputKind_Inline_getInstance() {
    OutputKind_initEntries();
    return OutputKind_Inline_instance;
  }
  function PolyBaseInfo(tagName, descriptor) {
    this.chk_1 = tagName;
    this.dhk_1 = descriptor;
  }
  protoOf(PolyBaseInfo).ehk = function () {
    return this.dhk_1.pgp();
  };
  protoOf(PolyBaseInfo).toString = function () {
    return 'PolyBaseInfo(tagName=' + this.chk_1 + ', descriptor=' + this.dhk_1 + ')';
  };
  protoOf(PolyBaseInfo).hashCode = function () {
    var result = this.chk_1.hashCode();
    result = imul(result, 31) + hashCode(this.dhk_1) | 0;
    return result;
  };
  protoOf(PolyBaseInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolyBaseInfo))
      return false;
    var tmp0_other_with_cast = other instanceof PolyBaseInfo ? other : THROW_CCE();
    if (!this.chk_1.equals(tmp0_other_with_cast.chk_1))
      return false;
    if (!equals(this.dhk_1, tmp0_other_with_cast.dhk_1))
      return false;
    return true;
  };
  function get_defaultXmlModule() {
    _init_properties_XML_kt__j4k93v();
    return defaultXmlModule;
  }
  var defaultXmlModule;
  function XML$Companion$defaultInstance$lambda($this$$receiver) {
    return Unit_getInstance();
  }
  function XML_init_$Init$(serializersModule, configure, $this) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    var tmp;
    if (configure === VOID) {
      tmp = XML$_init_$lambda_gk87g4;
    } else {
      tmp = configure;
    }
    configure = tmp;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    configure(tmp0_apply);
    XML_init_$Init$_0(tmp0_apply, serializersModule, $this);
    return $this;
  }
  function XML_init_$Create$(serializersModule, configure) {
    return XML_init_$Init$(serializersModule, configure, objectCreate(protoOf(XML)));
  }
  function collectNamespaces($this, xmlDescriptor, xmlEncoderBase, serializer, value) {
    var prefixToNamespaceMap = HashMap_init_$Create$();
    var namespaceToPrefixMap = HashMap_init_$Create$();
    var pendingNamespaces = HashSet_init_$Create$();
    var seenDescriptors = HashSet_init_$Create$();
    var hasSeenDynamicQname = {_v: false};
    var polyCollector = new ChildCollector(null);
    xmlEncoderBase.fhk_1.ph6(polyCollector);
    collectNamespaces$collect_0(hasSeenDynamicQname, seenDescriptors, namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, xmlDescriptor);
    var tmp0_iterator = polyCollector.ihk_1.d();
    while (tmp0_iterator.e()) {
      var childSerializer = tmp0_iterator.f();
      collectNamespaces$collect_0(hasSeenDynamicQname, seenDescriptors, namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, $this.lhk(childSerializer));
    }
    if (hasSeenDynamicQname._v) {
      var collector = new NamespaceCollectingXmlWriter(prefixToNamespaceMap, namespaceToPrefixMap, pendingNamespaces);
      var base = new XmlEncoderBase(xmlEncoderBase.fhk_1, xmlEncoderBase.ghk_1, collector);
      (new XmlEncoder(base, xmlDescriptor, -1)).ggt(serializer, value);
    }
    var nsIdx = 1;
    var tmp1_iterator = pendingNamespaces.d();
    while (tmp1_iterator.e()) {
      var namespaceUri = tmp1_iterator.f();
      $l$loop: while (true) {
        // Inline function 'kotlin.collections.contains' call
        var tmp0_contains = 'ns' + nsIdx;
        // Inline function 'kotlin.collections.containsKey' call
        if (!(isInterface(prefixToNamespaceMap, Map) ? prefixToNamespaceMap : THROW_CCE()).t2(tmp0_contains)) {
          break $l$loop;
        }
        nsIdx = nsIdx + 1 | 0;
      }
      var prefix = 'ns' + nsIdx;
      // Inline function 'kotlin.collections.set' call
      prefixToNamespaceMap.a5(prefix, namespaceUri);
      // Inline function 'kotlin.collections.set' call
      namespaceToPrefixMap.a5(namespaceUri, prefix);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.sequences.sortedBy' call
    var tmp = asSequence_0(prefixToNamespaceMap);
    var tmp_0 = filterNot(tmp, XML$collectNamespaces$lambda);
    var tmp1_sortedBy = map(tmp_0, XML$collectNamespaces$lambda_0);
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = XML$collectNamespaces$lambda_1;
    tmp$ret$2 = new sam$kotlin_Comparator$0(tmp_1);
    tmp$ret$3 = sortedWith(tmp1_sortedBy, tmp$ret$2);
    return toList_0(tmp$ret$3);
  }
  function xmlDescriptor($this, serialDescriptor, rootName) {
    var tmp;
    if (rootName == null) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
        var tmp0_iterator = serialDescriptor.qgp().d();
        while (tmp0_iterator.e()) {
          var e = tmp0_iterator.f();
          if (e instanceof XmlSerialName) {
            tmp$ret$0 = e;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      tmp = tmp0_safe_receiver == null ? null : toQName(tmp0_safe_receiver, serialDescriptor.pgp(), null);
    } else {
      tmp = rootName;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp_1 = new DeclaredNameInfo(serialDescriptor.pgp(), null);
      XMLConstants_getInstance();
      XMLConstants_getInstance();
      tmp_0 = $this.jhk_1.uhk_1.zhk(tmp_1, new NamespaceImpl('', ''));
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var serialName = tmp_0;
    return new XmlRootDescriptor($this.jhk_1, $this.khk_1, serialDescriptor, serialName);
  }
  function XML_init_$Init$_0(config, serializersModule, $this) {
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    XML.call($this, XmlConfig_init_$Create$(config), serializersModule);
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ahl_1 = [XmlQNameSerializer_getInstance(), NodeSerializer_getInstance(), ElementSerializer_getInstance(), CompactFragmentSerializer_getInstance()];
    var tmp_0 = this;
    tmp_0.bhl_1 = XML_init_$Create$(VOID, XML$Companion$defaultInstance$lambda);
  }
  protoOf(Companion).egs = function () {
    return this.bhl_1.khk_1;
  };
  protoOf(Companion).cgp = function (serializer, value) {
    return this.bhl_1.cgp(serializer, value);
  };
  protoOf(Companion).dgp = function (deserializer, string) {
    return this.bhl_1.dgp(deserializer, string);
  };
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function XmlOutput() {
  }
  function XmlInput() {
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.ehl_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.ehl_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function collectNamespaces$collect(namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, prefix, namespaceUri) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if (!(isInterface(namespaceToPrefixMap, Map) ? namespaceToPrefixMap : THROW_CCE()).t2(namespaceUri)) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(prefixToNamespaceMap, Map) ? prefixToNamespaceMap : THROW_CCE()).t2(prefix)) {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(namespaceUri) === 0) {
          var tmp0_safe_receiver = prefixToNamespaceMap.z2('');
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'nl.adaptivity.xmlutil.serialization.XML.collectNamespaces.collect.<anonymous>' call
            pendingNamespaces.a(tmp0_safe_receiver);
            namespaceToPrefixMap.ye(tmp0_safe_receiver);
          }
          // Inline function 'kotlin.collections.set' call
          prefixToNamespaceMap.a5('', '');
          // Inline function 'kotlin.collections.set' call
          namespaceToPrefixMap.a5('', '');
        } else {
          pendingNamespaces.a(namespaceUri);
        }
      } else {
        if (pendingNamespaces.n(namespaceUri)) {
          pendingNamespaces.y3(namespaceUri);
        }
        // Inline function 'kotlin.collections.set' call
        prefixToNamespaceMap.a5(prefix, namespaceUri);
        // Inline function 'kotlin.collections.set' call
        namespaceToPrefixMap.a5(namespaceUri, prefix);
      }
    }
  }
  function collectNamespaces$collect_0(hasSeenDynamicQname, seenDescriptors, namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, descriptor) {
    // Inline function 'nl.adaptivity.xmlutil.prefix' call
    var prefix = descriptor.lhl().thc();
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var namespaceUri = descriptor.lhl().rhc();
    var tmp;
    var tmp_0;
    if (!descriptor.mhl().equals(OutputKind_Attribute_getInstance())) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_0 = charSequenceLength(namespaceUri) > 0;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp = charSequenceLength(prefix) > 0;
    }
    if (tmp) {
      collectNamespaces$collect(namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, prefix, namespaceUri);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var childrenToCollect = ArrayList_init_$Create$();
    if (descriptor instanceof XmlPolymorphicDescriptor) {
      childrenToCollect.k(descriptor.yhl_1.b3());
    }
    var inductionVariable = 0;
    var last = descriptor.rgp();
    if (inductionVariable < last)
      do {
        var elementIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        childrenToCollect.a(descriptor.vgp(elementIndex));
      }
       while (inductionVariable < last);
    var tmp1_iterator = childrenToCollect.d();
    while (tmp1_iterator.e()) {
      var childDescriptor = tmp1_iterator.f();
      if (!hasSeenDynamicQname._v ? contains(Companion_getInstance_5().ahl_1, childDescriptor.ghl_1) : false) {
        hasSeenDynamicQname._v = true;
      }
      if (!seenDescriptors.n(childDescriptor)) {
        seenDescriptors.a(childDescriptor);
        collectNamespaces$collect_0(hasSeenDynamicQname, seenDescriptors, namespaceToPrefixMap, prefixToNamespaceMap, pendingNamespaces, childDescriptor);
      }
    }
  }
  function XML$_init_$lambda_gk87g4($this$null) {
    return Unit_getInstance();
  }
  function XML$collectNamespaces$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var prefix = _name_for_destructuring_parameter_0__wldtmu.r();
    // Inline function 'kotlin.collections.component2' call
    var ns = _name_for_destructuring_parameter_0__wldtmu.s();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(prefix) === 0) {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(ns) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function XML$collectNamespaces$lambda_0(it) {
    return new NamespaceImpl(it.r(), it.s());
  }
  function XML$collectNamespaces$lambda_1(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.XML.collectNamespaces.<anonymous>' call
    var tmp = a.bhg_1;
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.serialization.XML.collectNamespaces.<anonymous>' call
    tmp$ret$1 = b.bhg_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function XML(config, serializersModule) {
    Companion_getInstance_5();
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    this.jhk_1 = config;
    this.khk_1 = plus(serializersModule, get_defaultXmlModule());
  }
  protoOf(XML).egs = function () {
    return this.khk_1;
  };
  protoOf(XML).cgp = function (serializer, value) {
    return this.bhm(serializer, value, null);
  };
  protoOf(XML).bhm = function (serializer, value, prefix) {
    var stringWriter = new StringWriter();
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.core.impl.multiplatform.use' call
      var tmp0_use = XmlStreaming_getInstance().chi(stringWriter, this.jhk_1.rhk_1, this.jhk_1.shk_1);
      try {
        this.chm(tmp0_use, serializer, value, prefix);
        break $l$block;
      }finally {
        tmp0_use.o1y();
      }
    }
    return stringWriter.toString();
  };
  protoOf(XML).chm = function (target, serializer, value, prefix) {
    target.yha(this.jhk_1.thk_1);
    if (!(prefix == null)) {
      var root = new XmlRootDescriptor(this.jhk_1, this.khk_1, serializer.kgo(), null);
      var serialQName = copy(root.vgp(0).lhl(), prefix);
      this.dhm(target, serializer, value, serialQName);
    } else {
      this.dhm(target, serializer, value, null);
    }
  };
  protoOf(XML).dhm = function (target, serializer, value, rootName) {
    target.yha(this.jhk_1.thk_1);
    if (target.i3v() === 0) {
      switch (this.jhk_1.shk_1.h7_1) {
        case 1:
          target.tha(this.jhk_1.whk_1.thg_1);
          break;
        case 3:
          target.tha(this.jhk_1.whk_1.thg_1, 'UTF-8');
          break;
        case 0:
        case 2:
          break;
      }
    }
    var root = new XmlRootDescriptor(this.jhk_1, this.khk_1, serializer.kgo(), rootName);
    var xmlDescriptor = root.vgp(0);
    var xmlEncoderBase = new XmlEncoderBase(this.khk_1, this.jhk_1, target);
    var tmp;
    if (this.jhk_1.yhk_1) {
      var collectedNamespaces = collectNamespaces(this, xmlDescriptor, xmlEncoderBase, serializer, value);
      // Inline function 'kotlin.collections.associate' call
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(collectedNamespaces, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var tmp0_associateTo = LinkedHashMap_init_$Create$_0(capacity);
      var tmp0_iterator = collectedNamespaces.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'nl.adaptivity.xmlutil.serialization.XML.encodeToWriter.<anonymous>' call
        var tmp0_plusAssign = to(element.th8(), element.vh8());
        tmp0_associateTo.a5(tmp0_plusAssign.w4_1, tmp0_plusAssign.x4_1);
      }
      var prefixMap = tmp0_associateTo;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Builder_init_$Create$(this.jhk_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.XML.encodeToWriter.<anonymous>' call
      var tmp_0 = tmp0_apply;
      var tmp0_elvis_lhs = tmp0_apply.phm_1;
      tmp_0.phm_1 = new PrefixWrappingPolicy(tmp0_elvis_lhs == null ? tmp0_apply.whm().df() : tmp0_elvis_lhs, prefixMap);
      var newConfig = XmlConfig_init_$Create$(tmp0_apply);
      var remappedEncoderBase = new XmlEncoderBase(this.khk_1, newConfig, target);
      var newRootName = rootName == null ? null : remapPrefix_0(rootName, prefixMap);
      var newRoot = new XmlRootDescriptor(newConfig, this.khk_1, serializer.kgo(), newRootName);
      var newDescriptor = newRoot.vgp(0);
      tmp = new NSAttrXmlEncoder(remappedEncoderBase, newDescriptor, collectedNamespaces, -1);
    } else {
      tmp = new XmlEncoder(xmlEncoderBase, xmlDescriptor, -1);
    }
    var encoder = tmp;
    serializer.lgo(encoder, value);
  };
  protoOf(XML).dgp = function (deserializer, string) {
    return this.dhn(deserializer, XmlStreaming_getInstance().bhi(string));
  };
  protoOf(XML).ehn = function (deserializer, reader, rootName) {
    var tmp;
    if (rootName == null) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
        var tmp0_iterator = deserializer.kgo().qgp().d();
        while (tmp0_iterator.e()) {
          var e = tmp0_iterator.f();
          if (e instanceof XmlSerialName) {
            tmp$ret$0 = e;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      tmp = tmp0_safe_receiver == null ? null : toQName(tmp0_safe_receiver, deserializer.kgo().pgp(), null);
    } else {
      tmp = rootName;
    }
    var serialName = tmp;
    skipPreamble(reader);
    var xmlDecoderBase = new XmlDecoderBase(this.khk_1, this.jhk_1, reader);
    var rootDescriptor = new XmlRootDescriptor(this.jhk_1, this.khk_1, deserializer.kgo(), serialName);
    var elementDescriptor = rootDescriptor.vgp(0);
    var tmp2_safe_receiver = elementDescriptor instanceof XmlPolymorphicDescriptor ? elementDescriptor : null;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.XML.decodeFromReader.<anonymous>' call
      var tagName = serialName == null ? reader.d66() : serialName;
      var tmp$ret$2;
      $l$block_1: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var tmp0_iterator_0 = tmp2_safe_receiver.yhl_1.b3().d();
        while (tmp0_iterator_0.e()) {
          var element = tmp0_iterator_0.f();
          // Inline function 'nl.adaptivity.xmlutil.serialization.XML.decodeFromReader.<anonymous>.<anonymous>' call
          if (isEquivalent(tagName, element.lhl())) {
            if (found) {
              tmp$ret$2 = null;
              break $l$block_1;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$2 = null;
          break $l$block_1;
        }
        tmp$ret$2 = single;
      }
      var tmp1_safe_receiver = tmp$ret$2;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.serialization.XML.decodeFromReader.<anonymous>.<anonymous>' call
        tmp_1 = new PolyInfo(tagName, 0, tmp1_safe_receiver);
      }
      tmp_0 = tmp_1;
    }
    var polyInfo = tmp_0;
    var decoder = new XmlDecoder(xmlDecoderBase, elementDescriptor, polyInfo);
    return decoder.ogr(deserializer);
  };
  protoOf(XML).dhn = function (deserializer, reader, rootName, $super) {
    rootName = rootName === VOID ? null : rootName;
    return $super === VOID ? this.ehn(deserializer, reader, rootName) : $super.ehn.call(this, deserializer, reader, rootName);
  };
  protoOf(XML).mhn = function (deserializer, rootName) {
    return xmlDescriptor(this, deserializer.kgo(), rootName);
  };
  protoOf(XML).lhk = function (deserializer, rootName, $super) {
    rootName = rootName === VOID ? null : rootName;
    return $super === VOID ? this.mhn(deserializer, rootName) : $super.mhn.call(this, deserializer, rootName);
  };
  function copy(_this__u8e3s4, prefix) {
    var tmp;
    if (prefix === VOID) {
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      tmp = _this__u8e3s4.thc();
    } else {
      tmp = prefix;
    }
    prefix = tmp;
    _init_properties_XML_kt__j4k93v();
    var tmp_0;
    // Inline function 'nl.adaptivity.xmlutil.prefix' call
    if (prefix === _this__u8e3s4.thc()) {
      tmp_0 = _this__u8e3s4;
    } else {
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      var tmp_1 = _this__u8e3s4.rhc();
      var tmp$ret$3;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$3 = _this__u8e3s4.shc();
      tmp_0 = new QName(tmp_1, tmp$ret$3, prefix);
    }
    return tmp_0;
  }
  function toQName(_this__u8e3s4, serialName, parentNamespace) {
    _init_properties_XML_kt__j4k93v();
    var tmp;
    if (_this__u8e3s4.ohn_1 === get_UNSET_ANNOTATION_VALUE()) {
      var tmp_0;
      if (_this__u8e3s4.nhn_1 === get_UNSET_ANNOTATION_VALUE()) {
        var tmp_1;
        if (parentNamespace == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.serialization.toQName.<anonymous>' call
          tmp_1 = QName_init_$Create$_0(parentNamespace.th8(), serialName);
        }
        var tmp2_elvis_lhs = tmp_1;
        tmp_0 = tmp2_elvis_lhs == null ? QName_init_$Create$(serialName) : tmp2_elvis_lhs;
      } else {
        var tmp_2;
        if (parentNamespace == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.serialization.toQName.<anonymous>' call
          tmp_2 = QName_init_$Create$_0(parentNamespace.th8(), _this__u8e3s4.nhn_1);
        }
        var tmp4_elvis_lhs = tmp_2;
        tmp_0 = tmp4_elvis_lhs == null ? QName_init_$Create$(_this__u8e3s4.nhn_1) : tmp4_elvis_lhs;
      }
      tmp = tmp_0;
    } else if (_this__u8e3s4.nhn_1 === get_UNSET_ANNOTATION_VALUE()) {
      tmp = _this__u8e3s4.phn_1 === get_UNSET_ANNOTATION_VALUE() ? QName_init_$Create$_0(serialName, _this__u8e3s4.ohn_1) : new QName(serialName, _this__u8e3s4.ohn_1, _this__u8e3s4.phn_1);
    } else if (_this__u8e3s4.phn_1 === get_UNSET_ANNOTATION_VALUE()) {
      tmp = QName_init_$Create$_0(_this__u8e3s4.ohn_1, _this__u8e3s4.nhn_1);
    } else {
      tmp = new QName(_this__u8e3s4.ohn_1, _this__u8e3s4.nhn_1, _this__u8e3s4.phn_1);
    }
    return tmp;
  }
  function toQName_0(_this__u8e3s4) {
    _init_properties_XML_kt__j4k93v();
    return _this__u8e3s4.rhn_1 === get_UNSET_ANNOTATION_VALUE() ? QName_init_$Create$(_this__u8e3s4.qhn_1) : _this__u8e3s4.shn_1 === get_UNSET_ANNOTATION_VALUE() ? QName_init_$Create$_0(_this__u8e3s4.rhn_1, _this__u8e3s4.qhn_1) : new QName(_this__u8e3s4.rhn_1, _this__u8e3s4.qhn_1, _this__u8e3s4.shn_1);
  }
  function getValueChild(_this__u8e3s4) {
    _init_properties_XML_kt__j4k93v();
    var inductionVariable = 0;
    var last = _this__u8e3s4.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp0_any = _this__u8e3s4.thn().ugp(i);
          var tmp;
          if (isInterface(tmp0_any, Collection)) {
            tmp = tmp0_any.l();
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp0_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'nl.adaptivity.xmlutil.serialization.getValueChild.<anonymous>' call
            if (element instanceof XmlValue) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
          tmp$ret$0 = false;
        }
        if (tmp$ret$0)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  }
  function getAttrMap(_this__u8e3s4) {
    _init_properties_XML_kt__j4k93v();
    var inductionVariable = 0;
    var last = _this__u8e3s4.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = _this__u8e3s4.vgp(i);
        if (tmp instanceof XmlAttributeMapDescriptor)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  }
  function copy_0(_this__u8e3s4, namespaceURI, localPart, prefix) {
    var tmp;
    if (namespaceURI === VOID) {
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp = _this__u8e3s4.rhc();
    } else {
      tmp = namespaceURI;
    }
    namespaceURI = tmp;
    var tmp_0;
    if (localPart === VOID) {
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp_0 = _this__u8e3s4.shc();
    } else {
      tmp_0 = localPart;
    }
    localPart = tmp_0;
    var tmp_1;
    if (prefix === VOID) {
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      tmp_1 = _this__u8e3s4.thc();
    } else {
      tmp_1 = prefix;
    }
    prefix = tmp_1;
    _init_properties_XML_kt__j4k93v();
    return new QName(namespaceURI, localPart, prefix);
  }
  function getValueChild_0(_this__u8e3s4) {
    _init_properties_XML_kt__j4k93v();
    var inductionVariable = 0;
    var last = _this__u8e3s4.rgp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp0_any = _this__u8e3s4.ugp(i);
          var tmp;
          if (isInterface(tmp0_any, Collection)) {
            tmp = tmp0_any.l();
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp0_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'nl.adaptivity.xmlutil.serialization.getValueChild.<anonymous>' call
            if (element instanceof XmlValue) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
          tmp$ret$0 = false;
        }
        if (tmp$ret$0)
          return i;
      }
       while (inductionVariable < last);
    Companion_getInstance_0();
    return -3;
  }
  var properties_initialized_XML_kt_umqxeh;
  function _init_properties_XML_kt__j4k93v() {
    if (!properties_initialized_XML_kt_umqxeh) {
      properties_initialized_XML_kt_umqxeh = true;
      var tmp = getPlatformDefaultModule();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'nl.adaptivity.xmlutil.serialization.defaultXmlModule.<anonymous>' call
      builder.uh6(getKClass(CompactFragment), CompactFragmentSerializer_getInstance());
      builder.uh6(getKClass(QName), QNameSerializer_getInstance());
      tmp$ret$0 = builder.df();
      defaultXmlModule = plus(tmp, tmp$ret$0);
    }
  }
  function toNonTransparentChild(_this__u8e3s4, $this) {
    var result = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp;
      if (result instanceof XmlInlineDescriptor) {
        tmp = true;
      } else {
        var tmp_0;
        if (result instanceof XmlListDescriptor) {
          tmp_0 = result.bho();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (!tmp) {
        break $l$loop;
      }
      result = result.vgp(0);
    }
    var tmp_1;
    var tmp_2;
    if (result instanceof XmlMapDescriptor) {
      tmp_2 = result.bho();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = result.nho();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      return toNonTransparentChild(result.vgp(1), $this);
    }
    return result;
  }
  function nextNulledItemsIdx($this) {
    var inductionVariable = $this.yho_1 + 1 | 0;
    var last = $this.xho_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.xho_1[i] ? true : $this.fhp_1.ygp(i))) {
          var childDesc = $this.fhp_1.vgp(i);
          var tmp1_safe_receiver = childDesc instanceof XmlValueDescriptor ? childDesc : null;
          var default_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ohp_1;
          var tmp;
          if (!(default_0 == null)) {
            tmp = true;
          } else {
            var tmp_0;
            if (childDesc.lgp()) {
              tmp_0 = true;
            } else {
              var tmp2_subject = childDesc.tgp();
              tmp_0 = (equals(tmp2_subject, LIST_getInstance()) ? true : equals(tmp2_subject, MAP_getInstance())) ? true : false;
            }
            tmp = tmp_0;
          }
          var defaultOrList = tmp;
          if (defaultOrList) {
            $this.yho_1 = i;
            return Unit_getInstance();
          }
        }
      }
       while (inductionVariable < last);
    $this.yho_1 = $this.xho_1.length;
  }
  function indexOf$checkInputType(_this__u8e3s4, $inputType, this$0) {
    return $inputType.phj(this$0.fhp_1.vgp(_this__u8e3s4)) ? _this__u8e3s4 : null;
  }
  function indexOf$checkInputType_0(_this__u8e3s4, $inputType) {
    return $inputType.phj(_this__u8e3s4.shp_1) ? _this__u8e3s4 : null;
  }
  function _get_parentXmlDescriptor__yo818r($this) {
    var tmp = $this.fhp_1.fhl_1.kgo();
    return tmp instanceof XmlDescriptor ? tmp : THROW_CCE();
  }
  function XmlDecoderBase$AnonymousMapDecoder$decodeElementIndex$lambda(this$0) {
    return function () {
      return '' + this$0.fhp_1.thp() + ' != ' + this$0.h3t().d66();
    };
  }
  function DecodeCommons($outer, xmlDescriptor) {
    this.whp_1 = $outer;
    XmlCodec.call(this, $outer, xmlDescriptor);
  }
  protoOf(DecodeCommons).egs = function () {
    return this.whp_1.fhk_1;
  };
  protoOf(DecodeCommons).h3t = function () {
    return this.whp_1.zhp_1;
  };
  protoOf(DecodeCommons).cgr = function () {
    return null;
  };
  protoOf(DecodeCommons).dgr = function () {
    return toBoolean(this.ahq());
  };
  protoOf(DecodeCommons).egr = function () {
    var tmp;
    if (this.bhq_1.dhq()) {
      // Inline function 'kotlin.UByte.toByte' call
      var tmp0_toByte = toUByte(this.ahq());
      tmp = _UByte___get_data__impl__jof9qr(tmp0_toByte);
    } else {
      tmp = toByte(this.ahq());
    }
    return tmp;
  };
  protoOf(DecodeCommons).fgr = function () {
    var tmp;
    if (this.bhq_1.dhq()) {
      // Inline function 'kotlin.UShort.toShort' call
      var tmp0_toShort = toUShort(this.ahq());
      tmp = _UShort___get_data__impl__g0245(tmp0_toShort);
    } else {
      tmp = toShort(this.ahq());
    }
    return tmp;
  };
  protoOf(DecodeCommons).ggr = function () {
    var tmp;
    if (this.bhq_1.dhq()) {
      // Inline function 'kotlin.UInt.toInt' call
      var tmp0_toInt = toUInt(this.ahq());
      tmp = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
    } else {
      tmp = toInt(this.ahq());
    }
    return tmp;
  };
  protoOf(DecodeCommons).hgr = function () {
    var tmp;
    if (this.bhq_1.dhq()) {
      // Inline function 'kotlin.ULong.toLong' call
      var tmp0_toLong = toULong(this.ahq());
      tmp = _ULong___get_data__impl__fggpzb(tmp0_toLong);
    } else {
      tmp = toLong(this.ahq());
    }
    return tmp;
  };
  protoOf(DecodeCommons).igr = function () {
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = this.ahq();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  };
  protoOf(DecodeCommons).jgr = function () {
    return toDouble(this.ahq());
  };
  protoOf(DecodeCommons).kgr = function () {
    return single_0(this.ahq());
  };
  protoOf(DecodeCommons).ahq = function (defaultOverEmpty, $super) {
    defaultOverEmpty = defaultOverEmpty === VOID ? true : defaultOverEmpty;
    return $super === VOID ? this.ehq(defaultOverEmpty) : $super.ehq.call(this, defaultOverEmpty);
  };
  protoOf(DecodeCommons).lgr = function () {
    return this.ehq(false);
  };
  function XmlDecoder($outer, xmlDescriptor, polyInfo, attrIndex) {
    polyInfo = polyInfo === VOID ? null : polyInfo;
    attrIndex = attrIndex === VOID ? -1 : attrIndex;
    this.lhn_1 = $outer;
    DecodeCommons.call(this, $outer, xmlDescriptor);
    this.ihn_1 = polyInfo;
    this.jhn_1 = attrIndex;
    this.khn_1 = false;
  }
  protoOf(XmlDecoder).fhq = function () {
    return null;
  };
  protoOf(XmlDecoder).bgr = function () {
    if (this.lhn_1.ghq())
      return false;
    return !this.h3t().ah9().equals(EventType_END_DOCUMENT_getInstance());
  };
  protoOf(XmlDecoder).cgr = function () {
    if (this.lhn_1.ghq()) {
      this.h3t().ihe();
      var tmp = this.h3t();
      var tmp_0 = EventType_END_ELEMENT_getInstance();
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      var tmp_1 = this.pgp().rhc();
      var tmp$ret$1;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$1 = this.pgp().shc();
      tmp.lh9(tmp_0, tmp_1, tmp$ret$1);
      return null;
    }
    return protoOf(DecodeCommons).cgr.call(this);
  };
  protoOf(XmlDecoder).mgr = function (descriptor) {
    this.khn_1 = true;
    return this;
  };
  protoOf(XmlDecoder).ehq = function (defaultOverEmpty) {
    var tmp = this.bhq_1;
    var tmp0_safe_receiver = tmp instanceof XmlValueDescriptor ? tmp : null;
    var defaultString = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ohp_1;
    var descOutputKind = this.bhq_1.uhj();
    var tmp_0;
    if (this.jhn_1 >= 0) {
      tmp_0 = this.h3t().jh9(this.jhn_1);
    } else {
      var tmp_1;
      switch (descOutputKind.h7_1) {
        case 0:
          var tmp_2 = this.h3t();
          var tmp_3 = EventType_START_ELEMENT_getInstance();
          // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call

          var tmp_4 = this.pgp().rhc();
          var tmp$ret$1;
          // Inline function 'nl.adaptivity.xmlutil.localPart' call

          tmp$ret$1 = this.pgp().shc();
          tmp_2.lh9(tmp_3, tmp_4, tmp$ret$1);
          tmp_1 = readSimpleElement(this.h3t());
          break;
        case 1:
          throw SerializationException_init_$Create$('Attribute parsing without a concrete index is unsupported');
        case 4:
          throw SerializationException_init_$Create$('Inline classes can not be decoded directly');
        case 3:
          tmp_1 = allConsecutiveTextContent(this.h3t());
          break;
        case 2:
          var tmp_5;
          if (this.bhq_1.hhq()) {
            tmp_5 = allConsecutiveTextContent(this.h3t());
          } else {
            tmp_5 = allText(this.h3t());
          }

          tmp_1 = tmp_5;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp_0 = tmp_1;
    }
    var stringValue = tmp_0;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    if (defaultOverEmpty) {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_8 = charSequenceLength(stringValue) === 0;
    } else {
      tmp_8 = false;
    }
    if (tmp_8) {
      tmp_7 = !(defaultString == null);
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = defaultString;
    } else {
      tmp_6 = stringValue;
    }
    return tmp_6;
  };
  protoOf(XmlDecoder).pgr = function (descriptor) {
    throw AssertionError_init_$Create$('This should not happen as decodeSerializableValue should be called first');
  };
  protoOf(XmlDecoder).ogr = function (deserializer) {
    var deser = this.bhq_1.ihq(deserializer);
    var tmp;
    var tmp_0;
    if (this.khn_1) {
      var tmp_1 = this.bhq_1;
      tmp_0 = tmp_1 instanceof XmlInlineDescriptor;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.bhq_1.vgp(0);
    } else {
      tmp = this.bhq_1;
    }
    var desc = tmp;
    return deser.mgo(new SerialValueDecoder(this.lhn_1, desc, this.ihn_1, this.jhn_1, this.fhq()));
  };
  function StringDecoder($outer, xmlDescriptor, stringValue) {
    this.nhq_1 = $outer;
    DecodeCommons.call(this, $outer, xmlDescriptor);
    this.mhq_1 = stringValue;
  }
  protoOf(StringDecoder).pgr = function (descriptor) {
    throw UnsupportedOperationException_init_$Create$('Strings cannot be decoded to structures');
  };
  protoOf(StringDecoder).bgr = function () {
    return true;
  };
  protoOf(StringDecoder).mgr = function (descriptor) {
    return new StringDecoder(this.nhq_1, this.bhq_1.vgp(0), this.mhq_1);
  };
  protoOf(StringDecoder).ehq = function (defaultOverEmpty) {
    var tmp = this.bhq_1;
    var tmp0_safe_receiver = tmp instanceof XmlValueDescriptor ? tmp : null;
    var defaultString = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ohp_1;
    var tmp_0;
    if (defaultOverEmpty ? !(defaultString == null) : false) {
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this.mhq_1;
      tmp_0 = charSequenceLength(tmp0_isEmpty) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return defaultString;
    return this.mhq_1;
  };
  protoOf(StringDecoder).ogr = function (deserializer) {
    var deser = this.bhq_1.ihq(deserializer);
    return deser.mgo(this);
  };
  function SerialValueDecoder($outer, xmlDescriptor, polyInfo, attrIndex, typeDiscriminatorName) {
    this.xhq_1 = $outer;
    XmlDecoder.call(this, $outer, xmlDescriptor, polyInfo, attrIndex);
    this.vhq_1 = typeDiscriminatorName;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.whq_1 = ArrayList_init_$Create$();
  }
  protoOf(SerialValueDecoder).fhq = function () {
    return this.vhq_1;
  };
  protoOf(SerialValueDecoder).yhq = function (name) {
    this.whq_1.a(name);
  };
  protoOf(SerialValueDecoder).pgr = function (descriptor) {
    if (descriptor.lgp())
      return new TagDecoder(this.xhq_1, this.bhq_1, this.fhq());
    // Inline function 'kotlin.also' call
    var tmp;
    var tmp_0 = this.bhq_1.tgp();
    if (tmp_0 instanceof PrimitiveKind) {
      throw AssertionError_init_$Create$('A primitive is not a composite');
    } else {
      var tmp_1 = this.bhq_1;
      if (tmp_1 instanceof XmlPolymorphicDescriptor) {
        tmp = new PolymorphicDecoder(this.xhq_1, this.bhq_1, this.ihn_1);
      } else {
        var tmp_2 = this.bhq_1;
        if (tmp_2 instanceof XmlListDescriptor) {
          tmp = this.bhq_1.uhj().equals(OutputKind_Attribute_getInstance()) ? new AttributeListDecoder(this.xhq_1, this.bhq_1, this.jhn_1) : this.bhq_1.bho() ? new AnonymousListDecoder(this.xhq_1, this.bhq_1, this.ihn_1, this.fhq()) : new NamedListDecoder(this.xhq_1, this.bhq_1, this.fhq());
        } else {
          var tmp_3 = this.bhq_1;
          if (tmp_3 instanceof XmlMapDescriptor) {
            tmp = this.bhq_1.bho() ? new AnonymousMapDecoder(this.xhq_1, this.bhq_1, this.ihn_1, this.fhq()) : new NamedMapDecoder(this.xhq_1, this.bhq_1, this.ihn_1, this.fhq());
          } else {
            tmp = new TagDecoder(this.xhq_1, this.bhq_1, this.fhq());
          }
        }
      }
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.SerialValueDecoder.beginStructure.<anonymous>' call
    var tmp0_iterator = this.whq_1.d();
    while (tmp0_iterator.e()) {
      var attrName = tmp0_iterator.f();
      tmp0_also.yhq(attrName);
    }
    return tmp0_also;
  };
  function NullDecoder($outer, xmlDescriptor) {
    this.ghr_1 = $outer;
    XmlDecoder.call(this, $outer, xmlDescriptor);
  }
  protoOf(NullDecoder).bgr = function () {
    return false;
  };
  protoOf(NullDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.bhq_1;
    var tmp0_safe_receiver = tmp instanceof XmlValueDescriptor ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hhr(this.ghr_1, deserializer);
    var default_0 = tmp1_elvis_lhs == null ? previousValue : tmp1_elvis_lhs;
    return (default_0 == null ? true : isObject(default_0)) ? default_0 : THROW_CCE();
  };
  protoOf(NullDecoder).dgs = function (descriptor, index, deserializer, previousValue) {
    return null;
  };
  protoOf(NullDecoder).pgr = function (descriptor) {
    return this;
  };
  protoOf(NullDecoder).qgr = function (descriptor) {
  };
  protoOf(NullDecoder).ggs = function (descriptor) {
    var tmp0_subject = descriptor.tgp();
    var tmp;
    if (tmp0_subject instanceof MAP) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof LIST;
    }
    if (tmp) {
      Companion_getInstance_0();
      return -1;
    } else {
      throw AssertionError_init_$Create$('Null objects have no members');
    }
  };
  protoOf(NullDecoder).rgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).sgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).tgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).ugr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).hgs = function (descriptor) {
    return 0;
  };
  protoOf(NullDecoder).vgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).wgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).xgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).ygr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).zgr = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  protoOf(NullDecoder).ags = function (descriptor, index) {
    throw AssertionError_init_$Create$('Null objects have no members');
  };
  function TagDecoder($outer, xmlDescriptor, typeDiscriminatorName) {
    this.ahs_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, typeDiscriminatorName);
    this.zhr_1 = this.h3t().d66();
  }
  protoOf(TagDecoder).qgr = function (descriptor) {
    if (!this.dhp_1) {
      var index = this.ggs(descriptor);
      Companion_getInstance_0();
      if (!(index === -1))
        throw new XmlSerialException('Unexpected content in end structure');
    }
    this.h3t().lhe(EventType_END_ELEMENT_getInstance(), this.zhr_1);
  };
  function TagDecoderBase($outer, xmlDescriptor, typeDiscriminatorName) {
    this.ehp_1 = $outer;
    XmlTagCodec.call(this, $outer, xmlDescriptor);
    this.qho_1 = typeDiscriminatorName;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.rho_1 = ArrayList_init_$Create$();
    this.uho_1 = xmlDescriptor.hhq();
    this.vho_1 = this.h3t().ah9().equals(EventType_START_ELEMENT_getInstance()) ? this.h3t().zh8() : 0;
    this.who_1 = this.h3t().i3v();
    this.xho_1 = booleanArray(xmlDescriptor.rgp());
    this.yho_1 = -1;
    this.zho_1 = -1;
    this.ahp_1 = null;
    this.bhp_1 = getAttrMap(xmlDescriptor);
    this.chp_1 = ArrayDeque_init_$Create$();
    this.dhp_1 = false;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var polyMap = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var nameMap = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = xmlDescriptor.rgp();
    if (inductionVariable < last)
      do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = toNonTransparentChild(xmlDescriptor.vgp(idx), this);
        var tmp_0;
        if (child instanceof XmlPolymorphicDescriptor) {
          tmp_0 = child.hhs();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.collections.iterator' call
          var tmp1_iterator = child.yhl_1.q().d();
          while (tmp1_iterator.e()) {
            // Inline function 'kotlin.collections.component2' call
            var childDescriptor = tmp1_iterator.f().s();
            var tagName = this.ghs(childDescriptor.lhl());
            // Inline function 'kotlin.collections.set' call
            var tmp1_set = new PolyInfo(tagName, idx, childDescriptor);
            polyMap.a5(tagName, tmp1_set);
          }
        } else {
          // Inline function 'kotlin.collections.set' call
          var tmp2_set = this.ghs(child.lhl());
          nameMap.a5(tmp2_set, idx);
        }
      }
       while (inductionVariable < last);
    this.tho_1 = polyMap;
    this.sho_1 = nameMap;
  }
  protoOf(TagDecoderBase).h3t = function () {
    return this.ehp_1.zhp_1;
  };
  protoOf(TagDecoderBase).bhs = function (desc, index, deserializer) {
    var childXmlDescriptor = this.fhp_1.vgp(index);
    var effectiveDeserializer = childXmlDescriptor.ihq(deserializer);
    var tmp;
    if (this.yho_1 >= 0) {
      tmp = null;
    } else {
      var tmp_0 = effectiveDeserializer.kgo().tgp();
      if (tmp_0 instanceof PrimitiveKind) {
        tmp = new XmlDecoder(this.ehp_1, childXmlDescriptor, this.ahp_1, this.zho_1);
      } else {
        tmp = new SerialValueDecoder(this.ehp_1, childXmlDescriptor, this.ahp_1, this.zho_1, null);
      }
    }
    return tmp;
  };
  protoOf(TagDecoderBase).bgs = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.handleRecovery' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.chp_1.l()) {
      var d = this.chp_1.s3();
      if (!(d.ihs_1 === index)) {
        throw IllegalStateException_init_$Create$('Recovery state is inconsistent');
      }
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeSerializableElement.<anonymous>' call
      var tmp = d.jhs_1;
      var tmp0_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      return (tmp0_anonymous == null ? true : isObject(tmp0_anonymous)) ? tmp0_anonymous : THROW_CCE();
    }
    var childXmlDescriptor = this.fhp_1.vgp(index);
    var effectiveDeserializer = childXmlDescriptor.ihq(deserializer);
    var tmp_0;
    if (equals(isInterface(effectiveDeserializer, DeserializationStrategy) ? effectiveDeserializer : THROW_CCE(), CompactFragmentSerializer_getInstance())) {
      tmp_0 = getValueChild(this.fhp_1) === index;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.let' call
      var tmp1_let = siblingsToFragment(this.h3t());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeSerializableElement.<anonymous>' call
      this.h3t().yhd();
      var tmp0_elvis_lhs = tmp1_let instanceof CompactFragment ? tmp1_let : null;
      var tmp_1 = tmp0_elvis_lhs == null ? CompactFragment_init_$Create$_0(tmp1_let) : tmp0_elvis_lhs;
      return isObject(tmp_1) ? tmp_1 : THROW_CCE();
    }
    var tmp_2;
    var tmp_3;
    if (this.zho_1 >= 0) {
      tmp_3 = childXmlDescriptor instanceof XmlAttributeMapDescriptor;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = new AttributeMapDecoder(this.ehp_1, childXmlDescriptor, this.zho_1);
    } else {
      var tmp0_elvis_lhs_0 = this.bhs(descriptor, index, effectiveDeserializer);
      tmp_2 = tmp0_elvis_lhs_0 == null ? new NullDecoder(this.ehp_1, childXmlDescriptor) : tmp0_elvis_lhs_0;
    }
    var decoder = tmp_2;
    var tmp_4;
    if (effectiveDeserializer instanceof AbstractCollectionSerializer) {
      tmp_4 = effectiveDeserializer.ggv(decoder, previousValue);
    } else {
      tmp_4 = effectiveDeserializer.mgo(decoder);
    }
    var result = tmp_4;
    this.xho_1[index] = true;
    return result;
  };
  protoOf(TagDecoderBase).dgs = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.handleRecovery' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.chp_1.l()) {
      var d = this.chp_1.s3();
      if (!(d.ihs_1 === index)) {
        throw IllegalStateException_init_$Create$('Recovery state is inconsistent');
      }
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeNullableSerializableElement.<anonymous>' call
      var tmp = d.jhs_1;
      var tmp0_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      return isObject(tmp0_anonymous) ? tmp0_anonymous : THROW_CCE();
    }
    if (this.ehp_1.ghq()) {
      if (!this.h3t().ihe().equals(EventType_END_ELEMENT_getInstance()))
        throw SerializationException_init_$Create$('Elements with nil tags may not have content');
      return null;
    }
    var tmp0_elvis_lhs = this.bhs(descriptor, index, deserializer);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var decoder = tmp_0;
    var effectiveDeserializer = this.fhp_1.vgp(index).ihq(deserializer);
    var tmp_1;
    if (effectiveDeserializer instanceof AbstractCollectionSerializer) {
      tmp_1 = effectiveDeserializer.ggv(decoder, previousValue);
    } else {
      tmp_1 = effectiveDeserializer.mgo(decoder);
    }
    var result = tmp_1;
    this.xho_1[index] = true;
    return result;
  };
  protoOf(TagDecoderBase).ags = function (descriptor, index) {
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.handleRecovery' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.chp_1.l()) {
      var d = this.chp_1.s3();
      if (!(d.ihs_1 === index)) {
        throw IllegalStateException_init_$Create$('Recovery state is inconsistent');
      }
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeInlineElement.<anonymous>' call
      var tmp = d.jhs_1;
      var tmp0_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      return new DummyDecoder(tmp0_anonymous);
    }
    var childXmlDescriptor = this.fhp_1.vgp(index);
    var tmp_0;
    if (descriptor.tgp() instanceof PrimitiveKind) {
      tmp_0 = new XmlDecoder(this.ehp_1, childXmlDescriptor, this.ahp_1, this.zho_1);
    } else {
      tmp_0 = new SerialValueDecoder(this.ehp_1, childXmlDescriptor, this.ahp_1, this.zho_1, this.qho_1);
    }
    return tmp_0;
  };
  protoOf(TagDecoderBase).chs = function (name, inputType) {
    var isNameOfAttr = inputType.equals(InputKind_Attribute_getInstance());
    this.ahp_1 = null;
    var polyMap = this.tho_1;
    var nameMap = this.sho_1;
    var normalizedName = this.ghs(name);
    var tmp0_safe_receiver = nameMap.z2(normalizedName);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : indexOf$checkInputType(tmp0_safe_receiver, inputType, this);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return this.dhs(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = polyMap.z2(normalizedName);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : indexOf$checkInputType_0(tmp2_safe_receiver, inputType);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = this.dhs(tmp3_safe_receiver.rhp_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.indexOf.<anonymous>.<anonymous>' call
      this.ahp_1 = tmp3_safe_receiver;
      return tmp0_apply;
    }
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var containingNamespaceUri = this.pgp().rhc();
    if (isNameOfAttr) {
      // Inline function 'kotlin.text.isEmpty' call
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      var tmp1_isEmpty = name.rhc();
      if (charSequenceLength(tmp1_isEmpty) === 0) {
        var attrName = copy_0(normalizedName, containingNamespaceUri);
        var tmp4_safe_receiver = nameMap.z2(attrName);
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : indexOf$checkInputType(tmp4_safe_receiver, inputType, this);
        if (tmp5_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return this.dhs(tmp5_safe_receiver);
        }
        var tmp6_safe_receiver = polyMap.z2(attrName);
        var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : indexOf$checkInputType_0(tmp6_safe_receiver, inputType);
        if (tmp7_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.ahp_1 = tmp7_safe_receiver;
          return this.dhs(tmp7_safe_receiver.rhp_1);
        }
      }
      // Inline function 'kotlin.text.isEmpty' call
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      var tmp2_isEmpty = name.thc();
      if (charSequenceLength(tmp2_isEmpty) === 0) {
        var emptyNsPrefix = this.h3t().nh8('');
        if (!(emptyNsPrefix == null)) {
          var attrName_0 = copy_0(normalizedName, emptyNsPrefix);
          var tmp8_safe_receiver = nameMap.z2(attrName_0);
          var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : indexOf$checkInputType(tmp8_safe_receiver, inputType, this);
          if (tmp9_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            return this.dhs(tmp9_safe_receiver);
          }
          var tmp10_safe_receiver = polyMap.z2(attrName_0);
          var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : indexOf$checkInputType_0(tmp10_safe_receiver, inputType);
          if (tmp11_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            return this.dhs(tmp11_safe_receiver.rhp_1);
          }
        }
      }
    }
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(containingNamespaceUri) > 0) {
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp = containingNamespaceUri === name.rhc();
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp12_safe_receiver = nameMap.z2(QName_init_$Create$(name.shc()));
      var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : indexOf$checkInputType(tmp12_safe_receiver, inputType, this);
      if (tmp13_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return this.dhs(tmp13_safe_receiver);
      }
    }
    var tmp_0;
    if (inputType.equals(InputKind_Attribute_getInstance())) {
      var containsUpper = this.vho_1;
      var containsArg = this.zho_1;
      tmp_0 = 0 <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.takeIf' call
      var tmp3_takeIf = this.bhp_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.indexOf.<anonymous>' call
      if (tmp3_takeIf >= 0) {
        tmp_1 = tmp3_takeIf;
      } else {
        tmp_1 = null;
      }
      var tmp14_safe_receiver = tmp_1;
      if (tmp14_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp14_safe_receiver;
      }
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp4_takeIf = getValueChild(this.fhp_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.indexOf.<anonymous>' call
      if (tmp4_takeIf >= 0) {
        tmp_2 = tmp4_takeIf;
      } else {
        tmp_2 = null;
      }
      var tmp15_safe_receiver = tmp_2;
      if (tmp15_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var valChildDesc = this.fhp_1.vgp(tmp15_safe_receiver);
        $l$loop: while (true) {
          var tmp_3;
          var tmp_4;
          if (valChildDesc instanceof XmlListDescriptor) {
            tmp_4 = valChildDesc.bho();
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp_3 = true;
          } else {
            tmp_3 = valChildDesc instanceof XmlInlineDescriptor;
          }
          if (!tmp_3) {
            break $l$loop;
          }
          valChildDesc = valChildDesc.vgp(0);
        }
        var tmp_5;
        if (equals(valChildDesc.thn(), CompactFragmentSerializer_getInstance().thi_1)) {
          return this.dhs(tmp15_safe_receiver);
        }
      }
    }
    // Inline function 'kotlin.let' call
    var tmp_6 = this.qfd().uhk_1;
    var tmp_7 = this.h3t();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(nameMap.g());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = nameMap.q().d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$24;
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.indexOf.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = item.r();
      // Inline function 'kotlin.collections.component2' call
      var v = item.s();
      tmp$ret$24 = new PolyInfo(k, v, this.fhp_1.vgp(v));
      tmp0_mapTo.a(tmp$ret$24);
    }
    var tmp5_let = tmp_6.lhs(tmp_7, inputType, this.fhp_1, name, plus_0(tmp0_mapTo, polyMap.b3()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.indexOf.<anonymous>' call
    var singleParsed = singleOrNull(tmp5_let);
    if ((singleParsed == null ? null : singleParsed.khs_1) === true) {
      return singleParsed.ihs_1;
    }
    this.chp_1.k(tmp5_let);
    Companion_getInstance_0();
    return -3;
  };
  protoOf(TagDecoderBase).dhs = function (_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.checkRepeat.<anonymous>' call
    if (_this__u8e3s4 >= 0 ? this.xho_1[_this__u8e3s4] : false) {
      var desc = this.fhp_1.vgp(_this__u8e3s4);
      var tmp;
      if (!(desc instanceof XmlListLikeDescriptor)) {
        tmp = true;
      } else {
        tmp = !desc.bho();
      }
      if (tmp) {
        this.qfd().uhk_1.mhs(this.fhp_1, _this__u8e3s4);
        return _this__u8e3s4;
      }
    }
    return _this__u8e3s4;
  };
  protoOf(TagDecoderBase).ggs = function (descriptor) {
    if (!this.dhp_1 ? this.h3t().i3v() < this.who_1 : false) {
      Companion_getInstance_0();
      return -1;
    }
    this.dhp_1 = true;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.chp_1.l()) {
      return this.chp_1.m3().ihs_1;
    }
    if (this.yho_1 >= 0) {
      this.h3t().lhe(EventType_END_ELEMENT_getInstance(), this.fhp_1.lhl());
      if (this.yho_1 >= this.xho_1.length) {
        Companion_getInstance_0();
        return -1;
      }
      // Inline function 'kotlin.also' call
      var tmp1_also = this.yho_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
      nextNulledItemsIdx(this);
      return tmp1_also;
    }
    this.zho_1 = this.zho_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp;
      var containsUpper = this.vho_1;
      var containsArg = this.zho_1;
      if (0 <= containsArg ? containsArg < containsUpper : false) {
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp2_any = this.rho_1;
          var tmp_0;
          if (isInterface(tmp2_any, Collection)) {
            tmp_0 = tmp2_any.l();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp2_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
            if (isEquivalent(element, this.h3t().mhe(this.zho_1))) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }
        tmp = tmp$ret$2;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.zho_1 = this.zho_1 + 1 | 0;
    }
    var containsUpper_0 = this.vho_1;
    var containsArg_0 = this.zho_1;
    if (0 <= containsArg_0 ? containsArg_0 < containsUpper_0 : false) {
      var name = this.h3t().mhe(this.zho_1);
      var tmp_1;
      var tmp_2;
      var tmp_3;
      if (name.equals(this.qho_1)) {
        tmp_3 = true;
      } else {
        var tmp_4 = name.rhc();
        XMLConstants_getInstance();
        tmp_3 = tmp_4 === 'http://www.w3.org/2000/xmlns/';
      }
      if (tmp_3) {
        tmp_2 = true;
      } else {
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        var tmp_5 = name.thc();
        XMLConstants_getInstance();
        tmp_2 = tmp_5 === 'xmlns';
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        var tmp_6;
        // Inline function 'kotlin.text.isEmpty' call
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        var tmp3_isEmpty = name.thc();
        if (charSequenceLength(tmp3_isEmpty) === 0) {
          // Inline function 'nl.adaptivity.xmlutil.localPart' call
          var tmp_7 = name.shc();
          XMLConstants_getInstance();
          tmp_6 = tmp_7 === 'xmlns';
        } else {
          tmp_6 = false;
        }
        tmp_1 = tmp_6;
      }
      if (tmp_1) {
        return this.ggs(descriptor);
      } else {
        var tmp_8;
        var tmp_9 = name.rhc();
        XMLConstants_getInstance();
        if (tmp_9 === 'http://www.w3.org/XML/1998/namespace') {
          // Inline function 'nl.adaptivity.xmlutil.localPart' call
          tmp_8 = name.shc() === 'space';
        } else {
          tmp_8 = false;
        }
        if (tmp_8) {
          var tmp3_subject = this.h3t().jh9(this.zho_1);
          if (tmp3_subject === 'preserve')
            this.uho_1 = true;
          else if (tmp3_subject === 'default')
            this.uho_1 = this.fhp_1.hhq();
          var tmp4_safe_receiver = this.sho_1.z2(name);
          var tmp_10;
          if (tmp4_safe_receiver == null) {
            tmp_10 = null;
          } else {
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
            this.xho_1[tmp4_safe_receiver] = true;
            tmp_10 = tmp4_safe_receiver;
          }
          var tmp5_elvis_lhs = tmp_10;
          return tmp5_elvis_lhs == null ? this.ggs(descriptor) : tmp5_elvis_lhs;
        }
      }
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.markSeenOrHandleUnknown' call
      var tmp4_markSeenOrHandleUnknown = this.chs(name, InputKind_Attribute_getInstance());
      var tmp_11;
      Companion_getInstance_0();
      if (tmp4_markSeenOrHandleUnknown === -3) {
        // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
        tmp_11 = this.ggs(descriptor);
      } else {
        this.xho_1[tmp4_markSeenOrHandleUnknown] = true;
        tmp_11 = tmp4_markSeenOrHandleUnknown;
      }
      return tmp_11;
    }
    this.zho_1 = IntCompanionObject_getInstance().MIN_VALUE;
    // Inline function 'kotlin.collections.iterator' call
    var tmp6_iterator = this.h3t();
    while (tmp6_iterator.e()) {
      var eventType = tmp6_iterator.f();
      switch (eventType.h7_1) {
        case 2:
          return this.ehs(descriptor);
        case 0:
        case 3:
        case 6:
        case 11:
          break;
        case 8:
        case 5:
        case 9:
        case 4:
          var valueChild = getValueChild_0(descriptor);
          if (this.h3t().nhe()) {
            var tmp_12;
            Companion_getInstance_0();
            if (!(valueChild === -3)) {
              tmp_12 = this.uho_1;
            } else {
              tmp_12 = false;
            }
            if (tmp_12) {
              var valueKind = this.fhp_1.vgp(valueChild).tgp();
              if (equals(valueKind, LIST_getInstance()) ? true : equals(valueKind, STRING_getInstance())) {
                this.xho_1[valueChild] = true;
                return valueChild;
              }
            }
          } else if (!this.h3t().nhe()) {
            // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.markSeenOrHandleUnknown' call
            var tmp_13;
            Companion_getInstance_0();
            if (valueChild === -3) {
              // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
              // Inline function 'kotlin.let' call
              var tmp0_let = this.qfd().uhk_1.lhs(this.h3t(), InputKind_Text_getInstance(), this.fhp_1, QName_init_$Create$('<CDATA>'), emptyList());
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>.<anonymous>' call
              this.chp_1.k(tmp0_let);
              tmp_13 = this.ggs(descriptor);
            } else {
              this.xho_1[valueChild] = true;
              tmp_13 = valueChild;
            }
            return tmp_13;
          }

          break;
        case 10:
          // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.markSeenOrHandleUnknown' call

          var tmp6_markSeenOrHandleUnknown = this.chs(this.h3t().d66(), InputKind_Attribute_getInstance());
          var tmp_14;
          Companion_getInstance_0();
          if (tmp6_markSeenOrHandleUnknown === -3) {
            // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
            tmp_14 = this.ggs(descriptor);
          } else {
            this.xho_1[tmp6_markSeenOrHandleUnknown] = true;
            tmp_14 = tmp6_markSeenOrHandleUnknown;
          }

          return tmp_14;
        case 1:
          var i = this.chs(this.h3t().d66(), InputKind_Element_getInstance());
          Companion_getInstance_0();
          if (i === -3) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!this.chp_1.l()) {
              return this.chp_1.m3().ihs_1;
            }
            elementContentToFragment(this.h3t());
          } else {
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeElementIndex.<anonymous>' call
            this.xho_1[i] = true;
            return i;
          }

          break;
        case 7:
          throw new XmlSerialException('End document in unexpected location');
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  protoOf(TagDecoderBase).qgr = function (descriptor) {
    if (!this.dhp_1) {
      var index = this.ggs(descriptor);
      Companion_getInstance_0();
      if (!(index === -1))
        throw new XmlSerialException('Unexpected content in end structure');
    }
    if (this.qho_1 == null) {
      this.h3t().lhe(EventType_END_ELEMENT_getInstance(), this.pgp());
    } else {
      this.h3t().lhe(EventType_END_ELEMENT_getInstance(), null);
    }
  };
  protoOf(TagDecoderBase).ehs = function (desc) {
    nextNulledItemsIdx(this);
    var tmp;
    if (this.yho_1 < this.xho_1.length) {
      tmp = this.yho_1;
    } else {
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  };
  protoOf(TagDecoderBase).fhs = function (lastAttrIndex) {
    return this.h3t().jh9(this.zho_1);
  };
  protoOf(TagDecoderBase).zgr = function (descriptor, index) {
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.handleRecovery' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.chp_1.l()) {
      var d = this.chp_1.s3();
      if (!(d.ihs_1 === index)) {
        throw IllegalStateException_init_$Create$('Recovery state is inconsistent');
      }
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeStringElement.<anonymous>' call
      var tmp = d.jhs_1;
      return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    }
    var childDesc = this.fhp_1.vgp(index);
    this.xho_1[index] = true;
    var isAttribute = this.zho_1 >= 0;
    if (isAttribute) {
      return this.fhs(this.zho_1);
    } else if (this.yho_1 >= 0) {
      var tmp0_safe_receiver = childDesc instanceof XmlValueDescriptor ? childDesc : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ohp_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw new XmlSerialException('Missing child ' + descriptor.xgp(index) + ':' + index);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    }
    var tmp_1;
    switch (childDesc.uhj().h7_1) {
      case 4:
        throw new XmlSerialException('Inline elements can not be directly decoded');
      case 0:
        tmp_1 = readSimpleElement(this.h3t());
        break;
      case 3:
      case 2:
        // Inline function 'kotlin.also' call

        var tmp1_also = allConsecutiveTextContent(this.h3t());
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'nl.adaptivity.xmlutil.serialization.TagDecoderBase.decodeStringElement.<anonymous>' call

        var peek = this.h3t().u24();
        if (!(peek instanceof EndElementEvent)) {
          throw new XmlSerialException('Missing end tag after text only content (found: ' + peek + ')');
        } else {
          var tmp$ret$1;
          // Inline function 'nl.adaptivity.xmlutil.localPart' call
          tmp$ret$1 = this.pgp().shc();
          if (!(peek.jhf_1 === tmp$ret$1)) {
            var tmp$ret$2;
            // Inline function 'nl.adaptivity.xmlutil.localPart' call
            tmp$ret$2 = this.pgp().shc();
            throw new XmlSerialException('Expected end tag local name ' + tmp$ret$2 + ', found ' + peek.jhf_1);
          }
        }

        tmp_1 = tmp1_also;
        break;
      case 1:
        throw IllegalStateException_init_$Create$('Attributes should already be read now');
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_1;
  };
  protoOf(TagDecoderBase).ugr = function (descriptor, index) {
    return toInt(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).rgr = function (descriptor, index) {
    return toBoolean(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).sgr = function (descriptor, index) {
    return toByte(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).tgr = function (descriptor, index) {
    return toShort(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).vgr = function (descriptor, index) {
    return toLong(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).wgr = function (descriptor, index) {
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = this.zgr(descriptor, index);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(tmp0_toFloat);
  };
  protoOf(TagDecoderBase).xgr = function (descriptor, index) {
    return toDouble(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).ygr = function (descriptor, index) {
    return single_0(this.zgr(descriptor, index));
  };
  protoOf(TagDecoderBase).yhq = function (attrName) {
    this.rho_1.a(attrName);
  };
  function AttributeMapDecoder($outer, xmlDescriptor, attrIndex) {
    this.hht_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, null);
    this.eht_1 = attrIndex;
    this.fht_1 = -1;
    this.ght_1 = 0;
  }
  protoOf(AttributeMapDecoder).fgs = function () {
    return true;
  };
  protoOf(AttributeMapDecoder).hgs = function (descriptor) {
    return 1;
  };
  protoOf(AttributeMapDecoder).ggs = function (descriptor) {
    var tmp;
    switch (this.ght_1) {
      case 0:
      case 1:
        var tmp2 = this.ght_1;
        this.ght_1 = tmp2 + 1 | 0;
        tmp = tmp2;
        break;
      default:
        Companion_getInstance_0();
        tmp = -1;
        break;
    }
    return tmp;
  };
  protoOf(AttributeMapDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    if (this.fht_1 < 0)
      this.fht_1 = index;
    var fixedIndex = (index - this.fht_1 | 0) % 2 | 0;
    var effectiveDeserializer = this.fhp_1.vgp(fixedIndex).ihq(deserializer);
    if (fixedIndex === 0) {
      if (equals(effectiveDeserializer, XmlQNameSerializer_getInstance())) {
        var tmp = this.h3t().mhe(this.eht_1);
        return isObject(tmp) ? tmp : THROW_CCE();
      }
    }
    return effectiveDeserializer.mgo(new StringDecoder(this.hht_1, this.fhp_1.tht(), this.h3t().jh9(this.eht_1)));
  };
  protoOf(AttributeMapDecoder).zgr = function (descriptor, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var name = this.h3t().mhe(this.eht_1);
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      var tmp0_isEmpty = name.thc();
      if (charSequenceLength(tmp0_isEmpty) === 0) {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        var tmp1_isEmpty = name.rhc();
        tmp_1 = charSequenceLength(tmp1_isEmpty) === 0;
      }
      if (tmp_1) {
        // Inline function 'nl.adaptivity.xmlutil.localPart' call
        tmp_0 = name.shc();
      } else {
        throw new XmlSerialException('A QName in a namespace cannot be converted to a string');
      }
      tmp = tmp_0;
    } else {
      tmp = this.h3t().jh9(this.eht_1);
    }
    return tmp;
  };
  protoOf(AttributeMapDecoder).qgr = function (descriptor) {
  };
  protoOf(AttributeMapDecoder).pgr = function (descriptor) {
    return this;
  };
  protoOf(AttributeMapDecoder).dgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).egr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).kgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).jgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).igr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).mgr = function (descriptor) {
    return this;
  };
  protoOf(AttributeMapDecoder).ggr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).hgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).bgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).cgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).fgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  protoOf(AttributeMapDecoder).lgr = function () {
    throw UnsupportedOperationException_init_$Create$('Expect map structure');
  };
  function AttributeListDecoder($outer, xmlDescriptor, attrIndex) {
    this.nhu_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, null);
    this.lhu_1 = 0;
    this.mhu_1 = split(this.h3t().jh9(attrIndex), xmlDescriptor.whu_1.slice());
  }
  protoOf(AttributeListDecoder).fgs = function () {
    return true;
  };
  protoOf(AttributeListDecoder).hgs = function (descriptor) {
    return this.mhu_1.g();
  };
  protoOf(AttributeListDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.fhp_1.vgp(index);
    var tmp1 = this.lhu_1;
    this.lhu_1 = tmp1 + 1 | 0;
    var decoder = new StringDecoder(this.nhu_1, tmp, this.mhu_1.m(tmp1));
    return decoder.ogr(deserializer);
  };
  protoOf(AttributeListDecoder).zgr = function (descriptor, index) {
    var tmp1 = this.lhu_1;
    this.lhu_1 = tmp1 + 1 | 0;
    return this.mhu_1.m(tmp1);
  };
  protoOf(AttributeListDecoder).qgr = function (descriptor) {
  };
  function AnonymousListDecoder($outer, xmlDescriptor, polyInfo, typeDiscriminatorName) {
    this.shv_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, typeDiscriminatorName);
    this.phv_1 = polyInfo;
    var tmp = this;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = until(0, _get_parentXmlDescriptor__yo818r(this).rgp());
      var inductionVariable = tmp0_firstOrNull.y_1;
      var last = tmp0_firstOrNull.z_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'nl.adaptivity.xmlutil.serialization.AnonymousListDecoder.listChildIdx.<anonymous>' call
          var tmp$ret$0;
          $l$block: {
            // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
            var tmp0_iterator = _get_parentXmlDescriptor__yo818r(this).thn().ugp(element).d();
            while (tmp0_iterator.e()) {
              var e = tmp0_iterator.f();
              if (e instanceof XmlValue) {
                tmp$ret$0 = e;
                break $l$block;
              }
            }
            tmp$ret$0 = null;
          }
          var tmp0_safe_receiver = tmp$ret$0;
          if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.thv_1) === true) {
            tmp$ret$2 = element;
            break $l$block_0;
          }
        }
         while (!(element === last));
      tmp$ret$2 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$2;
    tmp.qhv_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.rhv_1 = false;
  }
  protoOf(AnonymousListDecoder).ggs = function (descriptor) {
    var tmp;
    if (this.rhv_1) {
      Companion_getInstance_0();
      tmp = -1;
    } else {
      this.rhv_1 = true;
      tmp = 0;
    }
    return tmp;
  };
  protoOf(AnonymousListDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var childXmlDescriptor = this.fhp_1.vgp(0);
    var effectiveDeserializer = childXmlDescriptor.ihq(deserializer);
    var tmp;
    if (equals(isInterface(effectiveDeserializer, DeserializationStrategy) ? effectiveDeserializer : THROW_CCE(), CompactFragmentSerializer_getInstance())) {
      tmp = getValueChild(_get_parentXmlDescriptor__yo818r(this)) === this.qhv_1;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.let' call
      var tmp0_let = elementToFragment(this.h3t());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.AnonymousListDecoder.decodeSerializableElement.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_let instanceof CompactFragment ? tmp0_let : null;
      var tmp_0 = tmp0_elvis_lhs == null ? CompactFragment_init_$Create$_0(tmp0_let) : tmp0_elvis_lhs;
      return isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var decoder = new SerialValueDecoder(this.shv_1, childXmlDescriptor, this.phv_1, IntCompanionObject_getInstance().MIN_VALUE, this.qho_1);
    return deserializer.mgo(decoder);
  };
  protoOf(AnonymousListDecoder).qgr = function (descriptor) {
  };
  protoOf(AnonymousListDecoder).hgs = function (descriptor) {
    return 1;
  };
  function NamedListDecoder($outer, xmlDescriptor, typeDiscriminatorName) {
    this.mhw_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, typeDiscriminatorName);
    this.lhw_1 = 0;
  }
  protoOf(NamedListDecoder).ggs = function (descriptor) {
    this.dhp_1 = true;
    var tmp;
    if (this.h3t().ihe().h7_1 === 2) {
      Companion_getInstance_0();
      tmp = -1;
    } else {
      var tmp2 = this.lhw_1;
      this.lhw_1 = tmp2 + 1 | 0;
      tmp = tmp2;
    }
    return tmp;
  };
  protoOf(NamedListDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var childXmlDescriptor = this.fhp_1.vgp(0);
    var decoder = new SerialValueDecoder(this.mhw_1, childXmlDescriptor, this.ahp_1, this.zho_1, null);
    var tmp;
    if (deserializer instanceof AbstractCollectionSerializer) {
      tmp = deserializer.ggv(decoder, previousValue);
    } else {
      tmp = deserializer.mgo(decoder);
    }
    return tmp;
  };
  function MapDecoderBase($outer, xmlDescriptor, polyInfo, typeDiscriminatorName) {
    this.ghx_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, typeDiscriminatorName);
    this.ehx_1 = polyInfo;
    this.fhx_1 = -1;
  }
  protoOf(MapDecoderBase).bgs = function (descriptor, index, deserializer, previousValue) {
    this.fhx_1 = index;
    var keyDescriptor = this.fhp_1.vgp(0);
    if ((index % 2 | 0) === 0) {
      if (keyDescriptor.mhl().equals(OutputKind_Attribute_getInstance())) {
        var tmp0_elvis_lhs = this.h3t().khe(keyDescriptor.lhl());
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new XmlSerialException('Missing key attribute (' + keyDescriptor.lhl() + ') on ' + this.h3t().d66() + '@' + this.h3t().bh9());
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var key = tmp;
        return deserializer.mgo(new StringDecoder(this.ghx_1, keyDescriptor, key));
      } else {
        assert(!this.fhp_1.nho());
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!isEquivalent(this.h3t().d66(), keyDescriptor.lhl())) {
          // Inline function 'nl.adaptivity.xmlutil.serialization.MapDecoderBase.decodeSerializableElement.<anonymous>' call
          var message = '' + this.h3t().d66() + ' != ' + this.fhp_1.thp();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        return protoOf(TagDecoderBase).bgs.call(this, descriptor, index % 2 | 0, deserializer, previousValue);
      }
    }
    var valueDescriptor = this.fhp_1.vgp(1);
    var decoder = new SerialValueDecoder(this.ghx_1, valueDescriptor, this.ehx_1, IntCompanionObject_getInstance().MIN_VALUE, this.qho_1);
    if (this.fhp_1.nho()) {
      decoder.yhq(keyDescriptor.lhl());
    }
    return deserializer.mgo(decoder);
  };
  function AnonymousMapDecoder($outer, xmlDescriptor, polyInfo, typeDiscriminatorName) {
    this.bhy_1 = $outer;
    MapDecoderBase.call(this, $outer, xmlDescriptor, polyInfo, typeDiscriminatorName);
  }
  protoOf(AnonymousMapDecoder).ggs = function (descriptor) {
    if (!this.fhp_1.nho()) {
      if (this.fhx_1 < 0) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!this.h3t().ah9().equals(EventType_START_ELEMENT_getInstance())) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!isEquivalent(this.fhp_1.thp(), this.h3t().d66()))
          throw new XmlSerialException('Map entry not found. Found ' + this.h3t().d66() + '@' + this.h3t().bh9() + ' instead');
      }
      if ((this.fhx_1 % 2 | 0) === 0) {
        var tmp = isEquivalent(this.fhp_1.thp(), this.h3t().d66());
        assert_0(tmp, XmlDecoderBase$AnonymousMapDecoder$decodeElementIndex$lambda(this));
      }
      var rawIndex = protoOf(MapDecoderBase).ggs.call(this, descriptor);
      if (rawIndex < 0)
        return rawIndex;
      this.fhx_1 = (this.fhx_1 - (this.fhx_1 % 2 | 0) | 0) + (rawIndex % 2 | 0) | 0;
      return this.fhx_1;
    } else {
      var tmp_0;
      if (this.fhx_1 >= 0 ? (this.fhx_1 % 2 | 0) === 1 : false) {
        Companion_getInstance_0();
        tmp_0 = -1;
      } else {
        this.fhx_1 = this.fhx_1 + 1 | 0;
        tmp_0 = this.fhx_1;
      }
      return tmp_0;
    }
  };
  protoOf(AnonymousMapDecoder).qgr = function (descriptor) {
    if (!this.fhp_1.nho()) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.h3t().ah9().equals(EventType_END_ELEMENT_getInstance())) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isEquivalent(this.h3t().d66(), this.fhp_1.thp())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(AnonymousMapDecoder).hgs = function (descriptor) {
    return 2;
  };
  function NamedMapDecoder($outer, xmlDescriptor, polyInfo, typeDiscriminatorName) {
    this.why_1 = $outer;
    MapDecoderBase.call(this, $outer, xmlDescriptor, polyInfo, typeDiscriminatorName);
  }
  protoOf(NamedMapDecoder).dhs = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(NamedMapDecoder).ggs = function (descriptor) {
    if (!this.fhp_1.nho()) {
      var tmp;
      // Inline function 'kotlin.mod' call
      var r = this.fhx_1 % 2 | 0;
      if ((r + (2 & ((r ^ 2) & (r | (-r | 0))) >> 31) | 0) === 1) {
        var tmp0_safe_receiver = this.h3t().u24();
        tmp = equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah9(), EventType_START_ELEMENT_getInstance());
      } else {
        tmp = false;
      }
      if (tmp) {
        this.h3t().ihe();
      }
      if (protoOf(MapDecoderBase).ggs.call(this, descriptor) < 0) {
        Companion_getInstance_0();
        return -1;
      }
    } else {
      var tmp_0;
      // Inline function 'kotlin.mod' call
      var r_0 = this.fhx_1 % 2 | 0;
      if ((r_0 + (2 & ((r_0 ^ 2) & (r_0 | (-r_0 | 0))) >> 31) | 0) === 1) {
        tmp_0 = protoOf(MapDecoderBase).ggs.call(this, descriptor) < 0;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        Companion_getInstance_0();
        return -1;
      }
    }
    this.fhx_1 = this.fhx_1 + 1 | 0;
    return this.fhx_1;
  };
  protoOf(NamedMapDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(MapDecoderBase).bgs.call(this, descriptor, index, deserializer, previousValue);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.NamedMapDecoder.decodeSerializableElement.<anonymous>' call
    if ((index % 2 | 0) === 1 ? !this.fhp_1.nho() : false) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.h3t().ihe().equals(EventType_END_ELEMENT_getInstance())) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      assert(isEquivalent(this.fhp_1.thp(), this.h3t().d66()));
    }
    return tmp0_also;
  };
  protoOf(NamedMapDecoder).qgr = function (descriptor) {
    assert(isEquivalent(this.fhp_1.lhl(), this.h3t().d66()));
    protoOf(MapDecoderBase).qgr.call(this, descriptor);
  };
  protoOf(NamedMapDecoder).hgs = function (descriptor) {
    return -1;
  };
  function PolymorphicDecoder($outer, xmlDescriptor, polyInfo) {
    this.shz_1 = $outer;
    TagDecoderBase.call(this, $outer, xmlDescriptor, null);
    this.ohz_1 = polyInfo;
    this.phz_1 = 0;
    this.qhz_1 = null;
    this.rhz_1 = null;
  }
  protoOf(PolymorphicDecoder).ggs = function (descriptor) {
    var polyMode = this.fhp_1.xhl_1;
    if (equals(polyMode, TRANSPARENT_getInstance())) {
      var tmp;
      switch (this.phz_1) {
        case 0:
        case 1:
          var tmp2 = this.phz_1;
          this.phz_1 = tmp2 + 1 | 0;
          tmp = tmp2;
          break;
        default:
          Companion_getInstance_0();
          tmp = -1;
          break;
      }
      return tmp;
    } else {
      if (!(this.qhz_1 == null)) {
        var tmp_0;
        if (this.phz_1 === 1) {
          tmp_0 = 1;
        } else {
          Companion_getInstance_0();
          tmp_0 = -1;
        }
        return tmp_0;
      }
      if (this.phz_1 === 0) {
        var inductionVariable = 0;
        var last = this.vho_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var attrName = this.h3t().mhe(i);
            var tmp_1;
            var tmp_2;
            // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
            var tmp_3 = attrName.rhc();
            XMLConstants_getInstance();
            if (tmp_3 === 'http://www.w3.org/2001/XMLSchema-instance') {
              // Inline function 'nl.adaptivity.xmlutil.localPart' call
              tmp_2 = attrName.shc() === 'type';
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp_1 = true;
            } else {
              var tmp5_safe_receiver = polyMode instanceof ATTR ? polyMode : null;
              tmp_1 = attrName.equals(tmp5_safe_receiver == null ? null : tmp5_safe_receiver.thz_1);
            }
            if (tmp_1) {
              var sdec = new StringDecoder(this.shz_1, this.fhp_1.vgp(0), this.h3t().jh9(i));
              var typeQName_0 = XmlQNameSerializer_getInstance().mgo(sdec);
              // Inline function 'kotlin.collections.map' call
              var tmp0_map = this.fhp_1.yhl_1;
              // Inline function 'kotlin.collections.mapTo' call
              var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.g());
              // Inline function 'kotlin.collections.iterator' call
              var tmp0_iterator = tmp0_map.q().d();
              while (tmp0_iterator.e()) {
                var item = tmp0_iterator.f();
                var tmp$ret$5;
                // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicDecoder.decodeElementIndex.<anonymous>' call
                // Inline function 'kotlin.collections.component1' call
                var childSerialName = item.r();
                // Inline function 'kotlin.collections.component2' call
                var childDesc = item.s();
                tmp$ret$5 = to(childSerialName, typeQName(this.qfd().uhk_1, childDesc));
                tmp0_mapTo.a(tmp$ret$5);
              }
              var childQnames = tmp0_mapTo;
              var tmp_4 = this;
              var tmp$ret$9;
              $l$block: {
                // Inline function 'kotlin.collections.firstOrNull' call
                var tmp0_iterator_0 = childQnames.d();
                while (tmp0_iterator_0.e()) {
                  var element = tmp0_iterator_0.f();
                  // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicDecoder.decodeElementIndex.<anonymous>' call
                  if (element.x4_1.equals(typeQName_0)) {
                    tmp$ret$9 = element;
                    break $l$block;
                  }
                }
                tmp$ret$9 = null;
              }
              var tmp6_safe_receiver = tmp$ret$9;
              var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.w4_1;
              var tmp_5;
              if (tmp7_elvis_lhs == null) {
                throw new XmlSerialException('Could not find child for type with qName: ' + typeQName_0 + '. Candidates are: ' + joinToString(childQnames));
              } else {
                tmp_5 = tmp7_elvis_lhs;
              }
              tmp_4.qhz_1 = tmp_5;
              this.rhz_1 = attrName;
              this.phz_1 = 1;
              return 0;
            }
          }
           while (inductionVariable < last);
      }
      // Inline function 'kotlin.also' call
      var tmp1_also = protoOf(TagDecoderBase).ggs.call(this, descriptor);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicDecoder.decodeElementIndex.<anonymous>' call
      this.phz_1 = tmp1_also + 1 | 0;
      return tmp1_also;
    }
  };
  protoOf(PolymorphicDecoder).zgr = function (descriptor, index) {
    var isMixed = this.fhp_1.whl_1.equals(OutputKind_Mixed_getInstance());
    var tmp;
    if (index === 0) {
      var tmp_0;
      if (!(this.qhz_1 == null)) {
        tmp_0 = ensureNotNull(this.qhz_1);
      } else if (!this.fhp_1.hhs()) {
        var typeTag = this.fhp_1.vgp(0).lhl();
        var tmp_1 = this.h3t();
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        var tmp_2 = typeTag.rhc();
        var tmp$ret$1;
        // Inline function 'nl.adaptivity.xmlutil.localPart' call
        tmp$ret$1 = typeTag.shc();
        var tmp1_safe_receiver = tmp_1.kh9(tmp_2, tmp$ret$1);
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : Companion_getInstance_6().vhz(tmp1_safe_receiver, this.fhp_1.zhl_1);
        var tmp_3;
        if (tmp2_elvis_lhs == null) {
          throw new XmlParsingException(this.h3t().bh9(), 'Missing type for polymorphic value');
        } else {
          tmp_3 = tmp2_elvis_lhs;
        }
        tmp_0 = tmp_3;
      } else if (isMixed ? (this.h3t().ah9().equals(EventType_TEXT_getInstance()) ? true : this.h3t().ah9().equals(EventType_IGNORABLE_WHITESPACE_getInstance())) ? true : this.h3t().ah9().equals(EventType_CDSECT_getInstance()) : false) {
        tmp_0 = 'kotlin.String';
      } else if (this.ohz_1 == null) {
        throw IllegalStateException_init_$Create$('PolyInfo is null for a transparent polymorphic decoder');
      } else {
        tmp_0 = this.ohz_1.ehk();
      }
      tmp = tmp_0;
    } else {
      var tmp_4;
      if (!this.fhp_1.hhs()) {
        throw new XmlSerialException('NonTransparent polymorphic values cannot have text content only');
      } else if (isMixed) {
        tmp_4 = allConsecutiveTextContent(this.h3t());
      } else {
        tmp_4 = protoOf(TagDecoderBase).zgr.call(this, descriptor, index);
      }
      tmp = tmp_4;
    }
    return tmp;
  };
  protoOf(PolymorphicDecoder).bhs = function (desc, index, deserializer) {
    var tmp0_safe_receiver = this.ohz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.shp_1;
    var childXmlDescriptor = tmp1_elvis_lhs == null ? this.fhp_1.whz(deserializer.kgo().pgp()) : tmp1_elvis_lhs;
    return new SerialValueDecoder(this.shz_1, childXmlDescriptor, this.ahp_1, this.zho_1, this.rhz_1);
  };
  protoOf(PolymorphicDecoder).bgs = function (descriptor, index, deserializer, previousValue) {
    var tmp0_safe_receiver = this.qhz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var childXmlDescriptor = this.fhp_1.whz(tmp0_safe_receiver);
      var decoder = new SerialValueDecoder(this.shz_1, childXmlDescriptor, this.ahp_1, this.zho_1, this.rhz_1);
      this.phz_1 = 2;
      return deserializer.mgo(decoder);
    }
    if (!this.fhp_1.hhs()) {
      this.h3t().lh9(EventType_START_ELEMENT_getInstance(), null, 'value');
      return protoOf(TagDecoderBase).bgs.call(this, descriptor, index, deserializer, previousValue);
    }
    var isMixed = this.fhp_1.whl_1.equals(OutputKind_Mixed_getInstance());
    var tmp;
    var tmp_0;
    if (isMixed) {
      var tmp_1 = deserializer.kgo().tgp();
      tmp_0 = tmp_1 instanceof PrimitiveKind;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var childXmlDescriptor_0 = this.fhp_1.whz(deserializer.kgo().pgp());
      tmp = deserializer.mgo(new XmlDecoder(this.shz_1, childXmlDescriptor_0));
    } else {
      tmp = protoOf(TagDecoderBase).bgs.call(this, descriptor, index, deserializer, previousValue);
    }
    return tmp;
  };
  protoOf(PolymorphicDecoder).qgr = function (descriptor) {
    if (!this.fhp_1.hhs()) {
      var tmp = this.h3t();
      var tmp_0 = EventType_END_ELEMENT_getInstance();
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      var tmp_1 = this.pgp().rhc();
      var tmp$ret$1;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$1 = this.pgp().shc();
      tmp.lh9(tmp_0, tmp_1, tmp$ret$1);
    } else {
      var isMixed = this.fhp_1.whl_1.equals(OutputKind_Mixed_getInstance());
      if (!isMixed ? true : !this.fhp_1.hhs()) {
        var tmp0_safe_receiver = this.ohz_1;
        var t = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qhp_1;
        if (!(t == null)) {
          var tmp_2 = this.h3t();
          var tmp_3 = EventType_END_ELEMENT_getInstance();
          // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
          var tmp_4 = t.rhc();
          var tmp$ret$3;
          // Inline function 'nl.adaptivity.xmlutil.localPart' call
          tmp$ret$3 = t.shc();
          tmp_2.lh9(tmp_3, tmp_4, tmp$ret$3);
        } else {
          protoOf(TagDecoderBase).qgr.call(this, descriptor);
        }
      }
    }
  };
  function XmlDecoderBase(context, config, input) {
    XmlCodecBase.call(this, context, config);
    this.zhp_1 = new XmlBufferedReader(input);
  }
  protoOf(XmlDecoderBase).ghq = function () {
    if (this.zhp_1.ah9().equals(EventType_START_ELEMENT_getInstance())) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = until(0, this.zhp_1.zh8());
        var tmp;
        if (isInterface(tmp0_any, Collection)) {
          tmp = tmp0_any.l();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var inductionVariable = tmp0_any.y_1;
        var last = tmp0_any.z_1;
        if (inductionVariable <= last)
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'nl.adaptivity.xmlutil.serialization.XmlDecoderBase.hasNullMark.<anonymous>' call
            var tmp_0;
            var tmp_1;
            var tmp_2;
            var tmp_3 = this.zhp_1.gh9(element);
            XMLConstants_getInstance();
            if (tmp_3 === 'http://www.w3.org/2001/XMLSchema-instance') {
              tmp_2 = this.zhp_1.ih9(element) === 'nil';
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp_1 = this.zhp_1.jh9(element) === 'true';
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = true;
            } else {
              var tmp_4;
              var tmp_5 = this.zhp_1.mhe(element);
              var tmp0_safe_receiver = this.ghk_1.vhk_1;
              if (tmp_5.equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w4_1)) {
                tmp_4 = this.zhp_1.jh9(element) === this.ghk_1.vhk_1.x4_1;
              } else {
                tmp_4 = false;
              }
              tmp_0 = tmp_4;
            }
            if (tmp_0) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
           while (!(element === last));
        tmp$ret$0 = false;
      }
      var hasNilAttr = tmp$ret$0;
      if (hasNilAttr)
        return true;
    }
    return false;
  };
  function PolyInfo(tagName, index, descriptor) {
    this.qhp_1 = tagName;
    this.rhp_1 = index;
    this.shp_1 = descriptor;
  }
  protoOf(PolyInfo).ehk = function () {
    return this.shp_1.thn().pgp();
  };
  protoOf(PolyInfo).toString = function () {
    return 'PolyInfo(tagName=' + this.qhp_1 + ', index=' + this.rhp_1 + ', descriptor=' + this.shp_1 + ')';
  };
  protoOf(PolyInfo).hashCode = function () {
    var result = this.qhp_1.hashCode();
    result = imul(result, 31) + this.rhp_1 | 0;
    result = imul(result, 31) + this.shp_1.hashCode() | 0;
    return result;
  };
  protoOf(PolyInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolyInfo))
      return false;
    var tmp0_other_with_cast = other instanceof PolyInfo ? other : THROW_CCE();
    if (!this.qhp_1.equals(tmp0_other_with_cast.qhp_1))
      return false;
    if (!(this.rhp_1 === tmp0_other_with_cast.rhp_1))
      return false;
    if (!this.shp_1.equals(tmp0_other_with_cast.shp_1))
      return false;
    return true;
  };
  function encodeQName($this, value) {
    var effectiveQName = $this.dhl(value, false);
    XmlQNameSerializer_getInstance().nhc($this, effectiveQName);
  }
  function writeDiscriminatorAttributeIfNeeded($this) {
    if (!($this.zhz_1 == null)) {
      var typeName = $this.dhl(typeQName($this.qfd().uhk_1, $this.fhp_1), true);
      smartWriteAttribute($this.di0_1, $this.zhz_1, toCName(typeName));
    }
  }
  function encodeQName_0($this, elementDescriptor, index, value) {
    var effectiveQName = $this.dhl(value, false);
    var encoder = new XmlEncoder($this.di0_1, elementDescriptor, index);
    $this.ei0(index, XmlEncoderBase$TagEncoder$encodeQName$lambda(encoder, effectiveQName));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.fi0_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).nj = function (a, b) {
    return this.fi0_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda($value) {
    return function ($this$defer) {
      var tmp = CompactFragmentSerializer_getInstance();
      tmp.whi($this$defer, (!($value == null) ? isInterface($value, ICompactFragment) : false) ? $value : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda_0($effectiveSerializer, $encoder, $value) {
    return function ($this$defer) {
      $effectiveSerializer.lgo($encoder, $value);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda_1($effectiveSerializer, $encoder, $value) {
    return function ($this$defer) {
      $effectiveSerializer.lgo($encoder, $value);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeNullableSerializableElement$lambda($serializer, $encoder) {
    return function ($this$defer) {
      (isInterface($serializer, SerializationStrategy) ? $serializer : THROW_CCE()).lgo($encoder, null);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeNullableSerializableElement$lambda_0(this$0, $elemDescriptor, this$1, $nilAttr) {
    return function ($this$defer) {
      var tmp0_smartStartTag = this$0.lha();
      var tmp1_smartStartTag = $elemDescriptor.lhl();
      var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
      var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
      var tmp2_smartStartTag = tmp1_smartStartTag.thc();
      smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagEncoder.encodeNullableSerializableElement.<anonymous>.<anonymous>' call
      smartWriteAttribute(this$1, $nilAttr.w4_1, $nilAttr.x4_1);
      tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeQName$lambda($encoder, $effectiveQName) {
    return function ($this$defer) {
      XmlQNameSerializer_getInstance().nhc($encoder, $effectiveQName);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeStringElement$lambda(this$0, $elementDescriptor, $value) {
    return function ($this$defer) {
      var tmp0_smartStartTag = this$0.lha();
      var tmp1_smartStartTag = $elementDescriptor.lhl();
      var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
      var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
      var tmp2_smartStartTag = tmp1_smartStartTag.thc();
      smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      // Inline function 'nl.adaptivity.xmlutil.serialization.TagEncoder.encodeStringElement.<anonymous>.<anonymous>' call
      if (!$elementDescriptor.hhq() ? isWhitespace(first($value)) ? true : isWhitespace(last($value)) : false) {
        var tmp = this$0.lha();
        XMLConstants_getInstance();
        tmp.rha('http://www.w3.org/XML/1998/namespace', 'space', 'xml', 'preserve');
      }
      if ($elementDescriptor.gi0()) {
        this$0.lha().pha($value);
      } else {
        this$0.lha().oha($value);
      }
      tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$encodeStringElement$lambda_0($elementDescriptor, this$0, $value) {
    return function ($this$defer) {
      var tmp;
      if ($elementDescriptor.gi0()) {
        this$0.lha().pha($value);
        tmp = Unit_getInstance();
      } else {
        this$0.lha().oha($value);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function XmlEncoderBase$TagEncoder$flushDeferred$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagEncoder.flushDeferred.<anonymous>' call
    var tmp = a.w4_1;
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.serialization.TagEncoder.flushDeferred.<anonymous>' call
    tmp$ret$1 = b.w4_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function XmlEncoderBase$TagEncoder$doWriteAttribute$lambda(this$0, $actualAttrName, $value) {
    return function ($this$null) {
      smartWriteAttribute(this$0, $actualAttrName, $value);
      return Unit_getInstance();
    };
  }
  function _get_entryKey__gkoau6($this) {
    var tmp = $this.oi0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('entryKey');
    }
  }
  function _get_parentXmlDescriptor__yo818r_0($this) {
    var tmp = $this.fhp_1.fhl_1.kgo();
    return tmp instanceof XmlDescriptor ? tmp : THROW_CCE();
  }
  function _get_mapDescriptor__1b9wli($this) {
    var tmp = $this.fhp_1;
    return tmp instanceof XmlMapDescriptor ? tmp : THROW_CCE();
  }
  function _get_keySerializer__nwm36o($this) {
    var tmp = $this.xi0_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('keySerializer');
    }
  }
  function XmlEncoderBase$MapEncoder$encodeSerializableElement$lambda(this$0, $valueDescriptor, this$1, $keyDescriptor, $effectiveSerializer, $value) {
    return function ($this$defer) {
      var tmp0_smartStartTag = this$0.lha();
      var tmp1_smartStartTag = $valueDescriptor.lhl();
      var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
      var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
      var tmp2_smartStartTag = tmp1_smartStartTag.thc();
      smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      // Inline function 'nl.adaptivity.xmlutil.serialization.MapEncoder.encodeSerializableElement.<anonymous>.<anonymous>' call
      var keyEncoder = new PrimitiveEncoder(this$1, $this$defer.egs(), $keyDescriptor);
      var tmp = _get_keySerializer__nwm36o(this$0);
      keyEncoder.ggt(isInterface(tmp, SerializationStrategy) ? tmp : THROW_CCE(), this$0.yi0_1);
      var serializedKey = keyEncoder.ci1_1.toString();
      smartWriteAttribute(this$1, $keyDescriptor.lhl(), serializedKey);
      $effectiveSerializer.lgo(new InlineEncoder(this$1, this$0, 1), $value);
      tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      return Unit_getInstance();
    };
  }
  function XmlEncoder($outer, xmlDescriptor, elementIndex, discriminatorName) {
    discriminatorName = discriminatorName === VOID ? null : discriminatorName;
    this.qhk_1 = $outer;
    XmlCodec.call(this, $outer, xmlDescriptor);
    this.ohk_1 = elementIndex;
    this.phk_1 = discriminatorName;
  }
  protoOf(XmlEncoder).lha = function () {
    return this.qhk_1.gi1_1;
  };
  protoOf(XmlEncoder).egs = function () {
    return this.qhk_1.fhk_1;
  };
  protoOf(XmlEncoder).qfd = function () {
    return this.qhk_1.ghk_1;
  };
  protoOf(XmlEncoder).dhl = function (qName, isAttr) {
    return ensureNamespace_1(this.qhk_1, qName, isAttr);
  };
  protoOf(XmlEncoder).lgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(XmlEncoder).mgs = function (value) {
    var tmp;
    if (this.bhq_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
      this.tgs(UByte__toString_impl_v72jg(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(XmlEncoder).ngs = function (value) {
    var tmp;
    if (this.bhq_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(value);
      this.tgs(UShort__toString_impl_edaoee(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(XmlEncoder).ogs = function (value) {
    var tmp;
    if (this.bhq_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
      this.tgs(UInt__toString_impl_dbgl21(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(XmlEncoder).pgs = function (value) {
    var tmp;
    if (this.bhq_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(value);
      this.tgs(ULong__toString_impl_f9au7k(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(XmlEncoder).qgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(XmlEncoder).rgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(XmlEncoder).sgs = function (value) {
    return this.tgs(toString_0(value));
  };
  protoOf(XmlEncoder).tgs = function (value) {
    var tmp = this.bhq_1;
    var defaultValue = (tmp instanceof XmlValueDescriptor ? tmp : THROW_CCE()).ohp_1;
    if (value === defaultValue)
      return Unit_getInstance();
    switch (this.bhq_1.uhj().h7_1) {
      case 4:
      case 0:
        // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call

        var tmp0_smartStartTag = this.lha();
        var tmp1_smartStartTag = this.pgp();
        // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call

        var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
        var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
        var tmp2_smartStartTag = tmp1_smartStartTag.thc();
        smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
        // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoder.encodeString.<anonymous>' call

        if (!(this.phk_1 == null)) {
          var typeRef = this.dhl(typeQName(this.qfd().uhk_1, this.bhq_1), false);
          smartWriteAttribute(this.qhk_1, this.phk_1, toCName(typeRef));
        }

        if (!this.bhq_1.hhq() ? isWhitespace(first(value)) ? true : isWhitespace(last(value)) : false) {
          var tmp_0 = this.lha();
          XMLConstants_getInstance();
          tmp_0.rha('http://www.w3.org/XML/1998/namespace', 'space', 'xml', 'preserve');
        }

        if (this.bhq_1.gi0()) {
          this.lha().pha(value);
        } else {
          this.lha().oha(value);
        }

        tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
        break;
      case 1:
        smartWriteAttribute(this.qhk_1, this.pgp(), value);
        break;
      case 3:
      case 2:
        if (this.bhq_1.gi0()) {
          this.lha().pha(value);
        } else {
          this.lha().oha(value);
        }

        break;
    }
  };
  protoOf(XmlEncoder).jgt = function () {
  };
  protoOf(XmlEncoder).kgs = function () {
    var nilAttr = this.qfd().vhk_1;
    if (this.bhq_1.uhj().equals(OutputKind_Element_getInstance()) ? !(nilAttr == null) : false) {
      // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
      var tmp0_smartStartTag = this.lha();
      var tmp1_smartStartTag = this.pgp();
      // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
      var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
      var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
      var tmp2_smartStartTag = tmp1_smartStartTag.thc();
      smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoder.encodeNull.<anonymous>' call
      if (!(this.phk_1 == null)) {
        var typeRef = this.dhl(typeQName(this.qfd().uhk_1, this.bhq_1), true);
        smartWriteAttribute(this.qhk_1, this.phk_1, toCName(typeRef));
      }
      smartWriteAttribute(this.qhk_1, nilAttr.w4_1, nilAttr.x4_1);
      tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
    }
  };
  protoOf(XmlEncoder).ggt = function (serializer, value) {
    var effectiveSerializer = this.bhq_1.ii1(serializer);
    if (equals(effectiveSerializer, XmlQNameSerializer_getInstance())) {
      encodeQName(this, value instanceof QName ? value : THROW_CCE());
    } else {
      effectiveSerializer.lgo(this, value);
    }
  };
  protoOf(XmlEncoder).ugs = function (descriptor) {
    return new XmlEncoder(this.qhk_1, this.bhq_1.vgp(0), this.ohk_1, this.phk_1);
  };
  protoOf(XmlEncoder).pgr = function (descriptor) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.qhk_1.ji1(this.bhq_1, this.ohk_1, this.phk_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoder.beginStructure.<anonymous>' call
    tmp0_apply.ki1();
    return tmp0_apply;
  };
  function NSAttrXmlEncoder($outer, xmlDescriptor, namespaces, elementIndex) {
    this.ri1_1 = $outer;
    XmlEncoder.call(this, $outer, xmlDescriptor, elementIndex);
    this.qi1_1 = toList(namespaces);
  }
  protoOf(NSAttrXmlEncoder).pgr = function (descriptor) {
    var compositeEncoder = protoOf(XmlEncoder).pgr.call(this, descriptor);
    var tmp0_iterator = this.qi1_1.d();
    while (tmp0_iterator.e()) {
      var namespace = tmp0_iterator.f();
      if (this.lha().wha(namespace.vh8()) == null) {
        this.lha().ahb(namespace);
      }
    }
    return compositeEncoder;
  };
  function PrimitiveEncoder($outer, serializersModule, xmlDescriptor) {
    this.di1_1 = $outer;
    this.ai1_1 = serializersModule;
    this.bi1_1 = xmlDescriptor;
    this.ci1_1 = StringBuilder_init_$Create$();
  }
  protoOf(PrimitiveEncoder).egs = function () {
    return this.ai1_1;
  };
  protoOf(PrimitiveEncoder).lha = function () {
    return this.di1_1.gi1_1;
  };
  protoOf(PrimitiveEncoder).dhl = function (qName, isAttr) {
    return ensureNamespace_1(this.di1_1, qName, isAttr);
  };
  protoOf(PrimitiveEncoder).pgr = function (descriptor) {
    throw IllegalArgumentException_init_$Create$('Primitives cannot be structs');
  };
  protoOf(PrimitiveEncoder).lgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(PrimitiveEncoder).mgs = function (value) {
    var tmp;
    if (this.bi1_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
      this.tgs(UByte__toString_impl_v72jg(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(PrimitiveEncoder).sgs = function (value) {
    return this.tgs(toString_0(value));
  };
  protoOf(PrimitiveEncoder).rgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(PrimitiveEncoder).qgs = function (value) {
    return this.tgs(value.toString());
  };
  protoOf(PrimitiveEncoder).ugs = function (descriptor) {
    return this;
  };
  protoOf(PrimitiveEncoder).ogs = function (value) {
    var tmp;
    if (this.bi1_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
      this.tgs(UInt__toString_impl_dbgl21(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(PrimitiveEncoder).pgs = function (value) {
    var tmp;
    if (this.bi1_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(value);
      this.tgs(ULong__toString_impl_f9au7k(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(PrimitiveEncoder).kgs = function () {
    return Unit_getInstance();
  };
  protoOf(PrimitiveEncoder).ngs = function (value) {
    var tmp;
    if (this.bi1_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(value);
      this.tgs(UShort__toString_impl_edaoee(tmp$ret$0));
      tmp = Unit_getInstance();
    } else {
      this.tgs(value.toString());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(PrimitiveEncoder).tgs = function (value) {
    this.ci1_1.ia(value);
  };
  protoOf(PrimitiveEncoder).ggt = function (serializer, value) {
    var tmp0_subject = this.bi1_1.ii1(serializer);
    if (equals(tmp0_subject, XmlQNameSerializer_getInstance())) {
      var tmp = XmlQNameSerializer_getInstance();
      tmp.nhc(this, this.chl(value instanceof QName ? value : THROW_CCE()));
    } else {
      encodeSerializableValue.call(this, serializer, value);
    }
  };
  function InlineEncoder($outer, parent, childIndex) {
    this.zi1_1 = $outer;
    XmlEncoder.call(this, $outer, parent.fhp_1.vgp(childIndex), childIndex, null);
    this.xi1_1 = parent;
    this.yi1_1 = childIndex;
  }
  protoOf(InlineEncoder).tgs = function (value) {
    var d = this.bhq_1.vgp(0);
    this.xi1_1.ai2(d, this.yi1_1, value);
  };
  protoOf(InlineEncoder).ggt = function (serializer, value) {
    var d = this.bhq_1.vgp(0);
    this.xi1_1.bi2(d, this.yi1_1, serializer, value);
  };
  protoOf(InlineEncoder).ugs = function (descriptor) {
    return this;
  };
  protoOf(InlineEncoder).pgr = function (descriptor) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new InlineTagEncoder(this.zi1_1, this.zi1_1.ji1(this.bhq_1, this.ohk_1, this.phk_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.InlineEncoder.beginStructure.<anonymous>' call
    tmp0_apply.ki1();
    return tmp0_apply;
  };
  function InlineTagEncoder($outer, delegate) {
    this.ki2_1 = $outer;
    TagEncoder.call(this, $outer, delegate.fhp_1, null);
    this.ji2_1 = delegate;
  }
  protoOf(InlineTagEncoder).ki1 = function () {
  };
  protoOf(InlineTagEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    this.ji2_1.bi2(elementDescriptor, index, serializer, value);
  };
  protoOf(InlineTagEncoder).egt = function (descriptor, index) {
    return this.ji2_1.egt(descriptor, index);
  };
  protoOf(InlineTagEncoder).lgt = function (descriptor, index) {
    return this.ji2_1.lgt(descriptor, index);
  };
  protoOf(InlineTagEncoder).hgt = function (descriptor, index, serializer, value) {
    this.ji2_1.hgt(descriptor, index, serializer, value);
  };
  protoOf(InlineTagEncoder).ai2 = function (elementDescriptor, index, value) {
    this.ji2_1.ai2(elementDescriptor, index, value);
  };
  protoOf(InlineTagEncoder).qgr = function (descriptor) {
    this.ji2_1.li2();
  };
  function TagEncoder($outer, xmlDescriptor, discriminatorName, deferring) {
    deferring = deferring === VOID ? true : deferring;
    this.di0_1 = $outer;
    XmlTagCodec.call(this, $outer, xmlDescriptor);
    this.zhz_1 = discriminatorName;
    this.ai0_1 = deferring;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.bi0_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    var tmp0_safe_receiver = xmlDescriptor instanceof XmlCompositeDescriptor ? xmlDescriptor : null;
    tmp_0.ci0_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bi3();
  }
  protoOf(TagEncoder).lha = function () {
    return this.di0_1.gi1_1;
  };
  protoOf(TagEncoder).dhl = function (qName, isAttr) {
    return ensureNamespace_1(this.di0_1, qName, isAttr);
  };
  protoOf(TagEncoder).ki1 = function () {
    smartStartTag_0(this.lha(), this.pgp());
    this.mi2();
    writeDiscriminatorAttributeIfNeeded(this);
  };
  protoOf(TagEncoder).mi2 = function () {
    var tmp0_iterator = this.fhp_1.jhl_1.d();
    while (tmp0_iterator.e()) {
      var namespace = tmp0_iterator.f();
      ensureNamespace_0(this.di0_1, namespace);
    }
  };
  protoOf(TagEncoder).ei0 = function (index, deferred) {
    if (this.fhp_1.vgp(index).ci3()) {
      deferred(this);
    } else if (!this.ai0_1) {
      deferred(this);
    } else if (!(this.ci0_1 == null)) {
      this.bi0_1.a(to(this.ci0_1[index], deferred));
    } else {
      var outputKind = this.fhp_1.vgp(index).uhj();
      if (outputKind.equals(OutputKind_Attribute_getInstance())) {
        deferred(this);
      } else {
        this.bi0_1.a(to(index, deferred));
      }
    }
  };
  protoOf(TagEncoder).fgt = function (descriptor, index, serializer, value) {
    this.bi2(this.fhp_1.vgp(index), index, serializer, value);
  };
  protoOf(TagEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    var encoder = elementDescriptor.ci3() ? new InlineEncoder(this.di0_1, this, index) : new XmlEncoder(this.di0_1, elementDescriptor, index);
    var effectiveSerializer = this.fhp_1.vgp(index).ii1(serializer);
    if (equals(effectiveSerializer, XmlQNameSerializer_getInstance())) {
      encodeQName_0(this, elementDescriptor, index, value instanceof QName ? value : THROW_CCE());
    } else if (equals(effectiveSerializer, CompactFragmentSerializer_getInstance()))
      if (getValueChild(this.fhp_1) === index) {
        this.ei0(index, XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda(value));
      } else {
        this.ei0(index, XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda_0(effectiveSerializer, encoder, value));
      }
     else {
      this.ei0(index, XmlEncoderBase$TagEncoder$encodeSerializableElement$lambda_1(effectiveSerializer, encoder, value));
    }
  };
  protoOf(TagEncoder).egt = function (descriptor, index) {
    return new InlineEncoder(this.di0_1, this, index);
  };
  protoOf(TagEncoder).lgt = function (descriptor, index) {
    var elementDescriptor = this.fhp_1.vgp(index);
    return this.qfd().uhk_1.di3(elementDescriptor);
  };
  protoOf(TagEncoder).vgs = function (descriptor, index, value) {
    this.dgt(descriptor, index, value.toString());
  };
  protoOf(TagEncoder).wgs = function (descriptor, index, value) {
    if (this.fhp_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUByte' call
      tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
      this.dgt(descriptor, index, UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      this.dgt(descriptor, index, value.toString());
    }
  };
  protoOf(TagEncoder).xgs = function (descriptor, index, value) {
    if (this.fhp_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUShort' call
      tmp$ret$0 = _UShort___init__impl__jigrne(value);
      this.dgt(descriptor, index, UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      this.dgt(descriptor, index, value.toString());
    }
  };
  protoOf(TagEncoder).ygs = function (descriptor, index, value) {
    if (this.fhp_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toUInt' call
      tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
      this.dgt(descriptor, index, UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      this.dgt(descriptor, index, value.toString());
    }
  };
  protoOf(TagEncoder).zgs = function (descriptor, index, value) {
    if (this.fhp_1.dhq() === true) {
      var tmp$ret$0;
      // Inline function 'kotlin.toULong' call
      tmp$ret$0 = _ULong___init__impl__c78o9k(value);
      this.dgt(descriptor, index, ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      this.dgt(descriptor, index, value.toString());
    }
  };
  protoOf(TagEncoder).agt = function (descriptor, index, value) {
    this.dgt(descriptor, index, value.toString());
  };
  protoOf(TagEncoder).bgt = function (descriptor, index, value) {
    this.dgt(descriptor, index, value.toString());
  };
  protoOf(TagEncoder).cgt = function (descriptor, index, value) {
    this.dgt(descriptor, index, toString_0(value));
  };
  protoOf(TagEncoder).hgt = function (descriptor, index, serializer, value) {
    var nilAttr = this.qfd().vhk_1;
    var elemDescriptor = this.fhp_1.vgp(index);
    if (!(value == null)) {
      this.fgt(descriptor, index, serializer, value);
    } else if (serializer.kgo().lgp()) {
      var encoder = elemDescriptor.ci3() ? new InlineEncoder(this.di0_1, this, index) : new XmlEncoder(this.di0_1, elemDescriptor, index);
      this.ei0(index, XmlEncoderBase$TagEncoder$encodeNullableSerializableElement$lambda(serializer, encoder));
    } else if (!(nilAttr == null) ? elemDescriptor.mhl().equals(OutputKind_Element_getInstance()) : false) {
      this.ei0(index, XmlEncoderBase$TagEncoder$encodeNullableSerializableElement$lambda_0(this, elemDescriptor, this.di0_1, nilAttr));
    }
  };
  protoOf(TagEncoder).dgt = function (descriptor, index, value) {
    var elementDescriptor = this.fhp_1.vgp(index);
    this.ai2(elementDescriptor, index, value);
  };
  protoOf(TagEncoder).ai2 = function (elementDescriptor, index, value) {
    var tmp0_safe_receiver = elementDescriptor instanceof XmlValueDescriptor ? elementDescriptor : null;
    var defaultValue = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ohp_1;
    if (value === defaultValue)
      return Unit_getInstance();
    switch (elementDescriptor.uhj().h7_1) {
      case 4:
      case 0:
        this.ei0(index, XmlEncoderBase$TagEncoder$encodeStringElement$lambda(this, elementDescriptor, value));
        break;
      case 1:
        this.ni2(index, elementDescriptor.lhl(), value);
        break;
      case 3:
      case 2:
        if (!elementDescriptor.hhq() ? isWhitespace(first(value)) ? true : isWhitespace(last(value)) : false) {
          var tmp = this.lha();
          XMLConstants_getInstance();
          tmp.rha('http://www.w3.org/XML/1998/namespace', 'space', 'xml', 'preserve');
        }

        this.ei0(index, XmlEncoderBase$TagEncoder$encodeStringElement$lambda_0(elementDescriptor, this, value));
        break;
    }
  };
  protoOf(TagEncoder).qgr = function (descriptor) {
    this.li2();
    endTag(this.lha(), this.pgp());
  };
  protoOf(TagEncoder).li2 = function () {
    this.ai0_1 = false;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp0_sortedBy = this.bi0_1;
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = XmlEncoderBase$TagEncoder$flushDeferred$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp);
    var actions = sortedWith_0(tmp0_sortedBy, tmp$ret$0);
    var tmp0_iterator = actions.d();
    while (tmp0_iterator.e()) {
      var deferred = tmp0_iterator.f().z4();
      deferred(this);
    }
  };
  protoOf(TagEncoder).ni2 = function (index, name, value) {
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = name.rhc();
    if (charSequenceLength(tmp0_isEmpty) === 0) {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (this.pgp().rhc() === name.rhc()) {
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        var tmp_2 = this.pgp().thc();
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        tmp_1 = tmp_2 === name.thc();
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      var tmp$ret$3;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$3 = name.shc();
      tmp = QName_init_$Create$(tmp$ret$3);
    } else {
      tmp = name;
    }
    var actualAttrName = tmp;
    if (!(this.ci0_1 == null)) {
      var deferred = XmlEncoderBase$TagEncoder$doWriteAttribute$lambda(this.di0_1, actualAttrName, value);
      this.bi0_1.a(to(this.ci0_1[index], deferred));
    } else {
      smartWriteAttribute(this.di0_1, actualAttrName, value);
    }
  };
  function nextAutoPrefix(_this__u8e3s4, $this) {
    var prefix;
    do {
      prefix = 'n' + $this.hi1_1;
    }
     while (!(_this__u8e3s4.nh8(prefix) == null));
    return prefix;
  }
  function ensureNamespace_0($this, namespace) {
    if (!($this.ch9().oh8(namespace.th8()) == null))
      return Unit_getInstance();
    var effectivePrefix = $this.ch9().nh8(namespace.vh8()) == null ? namespace.vh8() : nextAutoPrefix($this.ch9(), $this);
    $this.gi1_1.mha(effectivePrefix, namespace.th8());
  }
  function ensureNamespace_1($this, qName, isAttr) {
    if (isAttr) {
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      if (qName.rhc() === '')
        return copy(qName, '');
      else {
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        if (qName.thc() === '') {
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.sequences.firstOrNull' call
            var tmp$ret$3;
            // Inline function 'nl.adaptivity.xmlutil.prefixesFor' call
            var tmp0_prefixesFor = $this.gi1_1.ch9();
            // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
            var tmp1_prefixesFor = qName.rhc();
            var tmp = tmp0_prefixesFor.sh8(tmp1_prefixesFor);
            tmp$ret$3 = isInterface(tmp, Iterator) ? tmp : THROW_CCE();
            var tmp0_iterator = asSequence(tmp$ret$3).d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoderBase.ensureNamespace.<anonymous>' call
              // Inline function 'kotlin.text.isNotEmpty' call
              if (charSequenceLength(element) > 0) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$6;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var tmp3_also = nextAutoPrefix($this.ch9(), $this);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoderBase.ensureNamespace.<anonymous>' call
            var tmp$ret$7;
            // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
            tmp$ret$7 = qName.rhc();
            $this.gi1_1.mha(tmp3_also, tmp$ret$7);
            tmp_0 = tmp3_also;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var effectivePrefix = tmp_0;
          return copy(qName, effectivePrefix);
        }
      }
    }
    var registeredNamespace = $this.gi1_1.wha(qName.thc());
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    if (registeredNamespace === qName.rhc())
      return qName;
    var tmp$ret$11;
    // Inline function 'nl.adaptivity.xmlutil.prefixesFor' call
    var tmp4_prefixesFor = $this.gi1_1.ch9();
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var tmp5_prefixesFor = qName.rhc();
    var tmp_1 = tmp4_prefixesFor.sh8(tmp5_prefixesFor);
    tmp$ret$11 = isInterface(tmp_1, Iterator) ? tmp_1 : THROW_CCE();
    var tmp_2 = asSequence(tmp$ret$11);
    var registeredPrefix = firstOrNull(filterNot(tmp_2, XmlEncoderBase$ensureNamespace$lambda(isAttr)));
    var tmp_3;
    if (!(registeredPrefix == null)) {
      tmp_3 = copy(qName, registeredPrefix);
    } else if (!(registeredNamespace == null)) {
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      var prefix = qName.thc();
      var lastDigitIdx = prefix.length;
      while (lastDigitIdx > 0 ? isDigit(charSequenceGet(prefix, lastDigitIdx - 1 | 0)) : false) {
        lastDigitIdx = lastDigitIdx - 1 | 0;
      }
      var prefixBase;
      var prefixStart;
      if (lastDigitIdx === 0) {
        prefixBase = 'ns';
        prefixStart = 0;
      } else if (lastDigitIdx < prefix.length) {
        // Inline function 'kotlin.text.substring' call
        var tmp6_substring = lastDigitIdx;
        // Inline function 'kotlin.js.asDynamic' call
        prefixBase = prefix.substring(0, tmp6_substring);
        var tmp$ret$16;
        // Inline function 'kotlin.text.substring' call
        var tmp7_substring = lastDigitIdx;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$16 = prefix.substring(tmp7_substring);
        prefixStart = toInt(tmp$ret$16);
      } else {
        prefixBase = prefix;
        prefixStart = 0;
      }
      var tmp$ret$18;
      $l$block_0: {
        // Inline function 'kotlin.sequences.first' call
        var tmp_4 = asSequence_1(numberRangeToNumber(prefixStart, IntCompanionObject_getInstance().MAX_VALUE));
        var tmp0_iterator_0 = map(tmp_4, XmlEncoderBase$ensureNamespace$lambda_0(prefixBase)).d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'nl.adaptivity.xmlutil.serialization.XmlEncoderBase.ensureNamespace.<anonymous>' call
          if ($this.gi1_1.wha(element_0) == null) {
            tmp$ret$18 = element_0;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Sequence contains no element matching the predicate.');
      }
      var newPrefix = tmp$ret$18;
      var tmp$ret$19;
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp$ret$19 = qName.rhc();
      $this.gi1_1.mha(newPrefix, tmp$ret$19);
      tmp_3 = copy(qName, newPrefix);
    } else {
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      var tmp_5 = qName.thc();
      var tmp$ret$21;
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp$ret$21 = qName.rhc();
      $this.gi1_1.mha(tmp_5, tmp$ret$21);
      tmp_3 = qName;
    }
    return tmp_3;
  }
  function smartWriteAttribute($this, name, value) {
    var argPrefix = name.thc();
    var resolvedNamespace = $this.gi1_1.wha(argPrefix);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var tmp0_isEmpty = name.rhc();
    if (charSequenceLength(tmp0_isEmpty) === 0) {
      var tmp$ret$2;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$2 = name.shc();
      tmp = QName_init_$Create$(tmp$ret$2);
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(argPrefix) === 0) {
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        name.rhc();
        tmp = ensureNamespace_1($this, name, true);
      } else {
        if (!(resolvedNamespace == null)) {
          tmp = name;
        } else {
          tmp = ensureNamespace_1($this, name, true);
        }
      }
    }
    var effectiveQName = tmp;
    writeAttribute($this.gi1_1, effectiveQName, value);
  }
  function PolymorphicEncoder($outer, xmlDescriptor) {
    this.li3_1 = $outer;
    TagEncoder.call(this, $outer, xmlDescriptor, null, false);
  }
  protoOf(PolymorphicEncoder).ei0 = function (index, deferred) {
    deferred(this);
  };
  protoOf(PolymorphicEncoder).ki1 = function () {
    if (equals(this.fhp_1.xhl_1, TAG_getInstance())) {
      protoOf(TagEncoder).ki1.call(this);
    }
  };
  protoOf(PolymorphicEncoder).ai2 = function (elementDescriptor, index, value) {
    var isMixed = this.fhp_1.whl_1.equals(OutputKind_Mixed_getInstance());
    var polymorphicMode = this.fhp_1.xhl_1;
    if (index === 0) {
      if (equals(polymorphicMode, TAG_getInstance())) {
        var childDesc = this.fhp_1.vgp(0);
        switch (childDesc.uhj().h7_1) {
          case 1:
            this.ni2(0, childDesc.lhl(), Companion_getInstance_6().mi3(value, this.fhp_1.zhl_1));
            break;
          case 3:
          case 4:
          case 0:
            // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call

            var tmp0_smartStartTag = this.lha();
            var tmp1_smartStartTag = childDesc.lhl();
            // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call

            var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
            var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
            var tmp2_smartStartTag = tmp1_smartStartTag.thc();
            smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
            // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicEncoder.encodeStringElement.<anonymous>' call

            tmp0_smartStartTag.oha(value);
            tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
            break;
          case 2:
            throw new XmlSerialException('the type for a polymorphic child cannot be a text');
        }
      }
    } else {
      if (equals(polymorphicMode, TRANSPARENT_getInstance())) {
        if (isMixed) {
          this.lha().oha(value);
        } else {
          // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
          var tmp2_smartStartTag_0 = this.lha();
          var tmp3_smartStartTag = this.pgp();
          // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
          var tmp0_smartStartTag_1 = tmp3_smartStartTag.rhc();
          var tmp1_smartStartTag_1 = tmp3_smartStartTag.shc();
          var tmp2_smartStartTag_1 = tmp3_smartStartTag.thc();
          smartStartTag(tmp2_smartStartTag_0, tmp0_smartStartTag_1, tmp1_smartStartTag_1, tmp2_smartStartTag_1);
          // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicEncoder.encodeStringElement.<anonymous>' call
          tmp2_smartStartTag_0.oha(value);
          tmp2_smartStartTag_0.vha(tmp0_smartStartTag_1, tmp1_smartStartTag_1, tmp2_smartStartTag_1);
        }
      } else {
        if (polymorphicMode instanceof ATTR) {
          // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
          var tmp4_smartStartTag = this.lha();
          var tmp5_smartStartTag = this.pgp();
          // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
          var tmp0_smartStartTag_2 = tmp5_smartStartTag.rhc();
          var tmp1_smartStartTag_2 = tmp5_smartStartTag.shc();
          var tmp2_smartStartTag_2 = tmp5_smartStartTag.thc();
          smartStartTag(tmp4_smartStartTag, tmp0_smartStartTag_2, tmp1_smartStartTag_2, tmp2_smartStartTag_2);
          // Inline function 'nl.adaptivity.xmlutil.serialization.PolymorphicEncoder.encodeStringElement.<anonymous>' call
          var attrQName = this.dhl(typeQName(this.qfd().uhk_1, elementDescriptor), true);
          smartWriteAttribute(this.li3_1, polymorphicMode.thz_1, toCName(attrQName));
          tmp4_smartStartTag.oha(value);
          tmp4_smartStartTag.vha(tmp0_smartStartTag_2, tmp1_smartStartTag_2, tmp2_smartStartTag_2);
        } else {
          protoOf(TagEncoder).ai2.call(this, elementDescriptor, index, value);
        }
      }
    }
  };
  protoOf(PolymorphicEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    var childXmlDescriptor = this.fhp_1.whz(serializer.kgo().pgp());
    var tmp = this.fhp_1.xhl_1;
    var tmp0_safe_receiver = tmp instanceof ATTR ? tmp : null;
    var discriminatorName = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.thz_1;
    var encoder = new XmlEncoder(this.li3_1, childXmlDescriptor, index, discriminatorName);
    serializer.lgo(encoder, value);
  };
  protoOf(PolymorphicEncoder).qgr = function (descriptor) {
    if (equals(this.fhp_1.xhl_1, TAG_getInstance())) {
      protoOf(TagEncoder).qgr.call(this, descriptor);
    }
  };
  function AttributeMapEncoder($outer, xmlDescriptor) {
    this.pi0_1 = $outer;
    TagEncoder.call(this, $outer, xmlDescriptor, null);
  }
  protoOf(AttributeMapEncoder).ei0 = function (index, deferred) {
    deferred(this);
  };
  protoOf(AttributeMapEncoder).ai2 = function (elementDescriptor, index, value) {
    var tmp0_subject = index % 2 | 0;
    if (tmp0_subject === 0)
      this.oi0_1 = QName_init_$Create$(value);
    else if (tmp0_subject === 1) {
      smartWriteAttribute(this.pi0_1, _get_entryKey__gkoau6(this), value);
    }
  };
  protoOf(AttributeMapEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    if ((index % 2 | 0) === 0) {
      var effectiveSerializer = elementDescriptor.ii1(serializer);
      var tmp = this;
      var tmp_0;
      if (equals(effectiveSerializer, XmlQNameSerializer_getInstance())) {
        tmp_0 = value instanceof QName ? value : THROW_CCE();
      } else {
        // Inline function 'kotlin.apply' call
        var tmp0_apply = new PrimitiveEncoder(this.pi0_1, this.egs(), this.fhp_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.serialization.AttributeMapEncoder.encodeSerializableElement.<anonymous>' call
        tmp0_apply.ggt(effectiveSerializer, value);
        tmp_0 = QName_init_$Create$(tmp0_apply.ci1_1.toString());
      }
      tmp.oi0_1 = tmp_0;
    } else {
      var effectiveSerializer_0 = this.fhp_1.vgp(1).ii1(serializer);
      // Inline function 'kotlin.apply' call
      var tmp1_apply = new PrimitiveEncoder(this.pi0_1, this.egs(), this.fhp_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.AttributeMapEncoder.encodeSerializableElement.<anonymous>' call
      tmp1_apply.ggt(effectiveSerializer_0, value);
      var entryValue = tmp1_apply.ci1_1.toString();
      this.ni2(index, _get_entryKey__gkoau6(this), entryValue);
    }
  };
  protoOf(AttributeMapEncoder).ki1 = function () {
  };
  protoOf(AttributeMapEncoder).qgr = function (descriptor) {
  };
  function AttributeListEncoder($outer, xmlDescriptor, elementIndex) {
    this.xi3_1 = $outer;
    TagEncoder.call(this, $outer, xmlDescriptor, null);
    this.ui3_1 = elementIndex;
    this.vi3_1 = StringBuilder_init_$Create$();
    this.wi3_1 = first_0(xmlDescriptor.whu_1);
    var d = xmlDescriptor;
    var ok;
    do {
      d = d.vgp(0);
      ok = d.uhj();
    }
     while (ok.equals(OutputKind_Inline_getInstance()));
    if (!ok.equals(OutputKind_Attribute_getInstance()) ? !ok.equals(OutputKind_Text_getInstance()) : false) {
      throw IllegalArgumentException_init_$Create$('An xml list stored in an attribute must store atomics, not structs');
    }
  }
  protoOf(AttributeListEncoder).ei0 = function (index, deferred) {
    return deferred(this);
  };
  protoOf(AttributeListEncoder).ki1 = function () {
  };
  protoOf(AttributeListEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    var encoder = new PrimitiveEncoder(this.xi3_1, this.egs(), elementDescriptor);
    encoder.ggt(serializer, value);
    this.ai2(elementDescriptor, index, encoder.ci1_1.toString());
  };
  protoOf(AttributeListEncoder).ai2 = function (elementDescriptor, index, value) {
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = this.vi3_1;
    if (charSequenceLength(tmp0_isNotEmpty) > 0) {
      this.vi3_1.ia(this.wi3_1);
    }
    this.vi3_1.ia(value);
  };
  protoOf(AttributeListEncoder).qgr = function (descriptor) {
    this.ni2(this.ui3_1, this.fhp_1.lhl(), this.vi3_1.toString());
  };
  function ListEncoder($outer, xmlDescriptor, listChildIdx, discriminatorName) {
    this.gi4_1 = $outer;
    TagEncoder.call(this, $outer, xmlDescriptor, discriminatorName, false);
    this.fi4_1 = listChildIdx;
  }
  protoOf(ListEncoder).ei0 = function (index, deferred) {
    deferred(this);
  };
  protoOf(ListEncoder).ki1 = function () {
    if (!this.fhp_1.bho()) {
      var childName = this.fhp_1.vgp(0).lhl();
      protoOf(TagEncoder).ki1.call(this);
      var tagName = this.pgp();
      var tmp;
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      var tmp_0 = tagName.thc();
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      if (!(tmp_0 === childName.thc())) {
        var tmp_1 = this.lha();
        var tmp$ret$2;
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        tmp$ret$2 = childName.thc();
        var tmp_2 = tmp_1.wha(tmp$ret$2);
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        tmp = !(tmp_2 === childName.rhc());
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_3 = this.lha();
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        var tmp_4 = childName.thc();
        var tmp$ret$5;
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        tmp$ret$5 = childName.rhc();
        tmp_3.mha(tmp_4, tmp$ret$5);
      }
    }
  };
  protoOf(ListEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    var childDescriptor = this.fhp_1.vgp(0);
    var tmp0_subject = elementDescriptor.ii1(serializer);
    if (equals(tmp0_subject, CompactFragmentSerializer_getInstance()))
      if (getValueChild(_get_parentXmlDescriptor__yo818r_0(this)) === this.fi4_1) {
        var tmp = CompactFragmentSerializer_getInstance();
        tmp.whi(this, (!(value == null) ? isInterface(value, ICompactFragment) : false) ? value : THROW_CCE());
      } else {
        serializer.lgo(new XmlEncoder(this.gi4_1, childDescriptor, index), value);
      }
     else {
      serializer.lgo(new XmlEncoder(this.gi4_1, childDescriptor, index), value);
    }
  };
  protoOf(ListEncoder).ai2 = function (elementDescriptor, index, value) {
    if (index > 0) {
      (new XmlEncoder(this.gi4_1, elementDescriptor, index)).tgs(value);
    }
  };
  protoOf(ListEncoder).qgr = function (descriptor) {
    if (!this.fhp_1.bho()) {
      protoOf(TagEncoder).qgr.call(this, descriptor);
    }
  };
  function MapEncoder($outer, xmlDescriptor, discriminatorName) {
    discriminatorName = discriminatorName === VOID ? null : discriminatorName;
    this.zi0_1 = $outer;
    TagEncoder.call(this, $outer, xmlDescriptor, discriminatorName);
    this.yi0_1 = null;
  }
  protoOf(MapEncoder).ei0 = function (index, deferred) {
    deferred(this);
  };
  protoOf(MapEncoder).ai2 = function (elementDescriptor, index, value) {
    var tmp0_subject = index % 2 | 0;
    if (tmp0_subject === 0) {
      this.xi0_1 = serializer_0(StringCompanionObject_getInstance());
      this.yi0_1 = value;
    } else if (tmp0_subject === 1) {
      this.bi2(this.fhp_1, index, serializer_0(StringCompanionObject_getInstance()), value);
    }
  };
  protoOf(MapEncoder).bi2 = function (elementDescriptor, index, serializer, value) {
    if ((index % 2 | 0) === 0) {
      this.xi0_1 = elementDescriptor.ii1(serializer);
      this.yi0_1 = value;
    } else {
      var valueDescriptor = this.fhp_1.vgp(1);
      var effectiveSerializer = valueDescriptor.ii1(serializer);
      var keyDescriptor = this.fhp_1.vgp(0);
      if (_get_mapDescriptor__1b9wli(this).nho()) {
        this.ei0(index, XmlEncoderBase$MapEncoder$encodeSerializableElement$lambda(this, valueDescriptor, this.zi0_1, keyDescriptor, effectiveSerializer, value));
      } else {
        // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
        var tmp0_smartStartTag = this.lha();
        var tmp1_smartStartTag = _get_mapDescriptor__1b9wli(this).thp();
        // Inline function 'nl.adaptivity.xmlutil.smartStartTag' call
        var tmp0_smartStartTag_0 = tmp1_smartStartTag.rhc();
        var tmp1_smartStartTag_0 = tmp1_smartStartTag.shc();
        var tmp2_smartStartTag = tmp1_smartStartTag.thc();
        smartStartTag(tmp0_smartStartTag, tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
        // Inline function 'nl.adaptivity.xmlutil.serialization.MapEncoder.encodeSerializableElement.<anonymous>' call
        var keyEncoder = new XmlEncoder(this.zi0_1, keyDescriptor, index - 1 | 0);
        var tmp = _get_keySerializer__nwm36o(this);
        keyEncoder.ggt(isInterface(tmp, SerializationStrategy) ? tmp : THROW_CCE(), this.yi0_1);
        effectiveSerializer.lgo(new XmlEncoder(this.zi0_1, valueDescriptor, index), value);
        tmp0_smartStartTag.vha(tmp0_smartStartTag_0, tmp1_smartStartTag_0, tmp2_smartStartTag);
      }
    }
  };
  protoOf(MapEncoder).ki1 = function () {
    if (!_get_mapDescriptor__1b9wli(this).bho()) {
      protoOf(TagEncoder).ki1.call(this);
    }
  };
  protoOf(MapEncoder).qgr = function (descriptor) {
    if (!_get_mapDescriptor__1b9wli(this).bho()) {
      protoOf(TagEncoder).qgr.call(this, descriptor);
    }
  };
  function XmlEncoderBase$ensureNamespace$lambda($isAttr) {
    return function (it) {
      var tmp;
      if ($isAttr) {
        var tmp$ret$0;
        // Inline function 'kotlin.text.isEmpty' call
        tmp$ret$0 = charSequenceLength(it) === 0;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function XmlEncoderBase$ensureNamespace$lambda_0($prefixBase) {
    return function (it) {
      return $prefixBase + it;
    };
  }
  function XmlEncoderBase(context, config, target) {
    XmlCodecBase.call(this, context, config);
    this.gi1_1 = target;
    this.hi1_1 = 1;
  }
  protoOf(XmlEncoderBase).ch9 = function () {
    return this.gi1_1.ch9();
  };
  protoOf(XmlEncoderBase).ji1 = function (xmlDescriptor, elementIndex, discriminatorName) {
    var tmp0_subject = xmlDescriptor.hi4();
    var tmp;
    if (tmp0_subject instanceof PrimitiveKind) {
      throw AssertionError_init_$Create$('A primitive is not a composite');
    } else {
      if (equals(tmp0_subject, CONTEXTUAL_getInstance()) ? true : equals(tmp0_subject, MAP_getInstance())) {
        var tmp_0;
        if (xmlDescriptor.uhj().h7_1 === 1) {
          var valueType = xmlDescriptor.vgp(1);
          if (!valueType.mhl().xhj() ? !equals(valueType.ghl_1, XmlQNameSerializer_getInstance()) : false) {
            throw new XmlSerialException('Values of an attribute map must be textual or a qname');
          }
          var keyType = xmlDescriptor.vgp(0);
          if (!equals(keyType.ghl_1, XmlQNameSerializer_getInstance()) ? !keyType.mhl().xhj() : false) {
            throw new XmlSerialException('The keys of an attribute map must be string or qname');
          }
          tmp_0 = new AttributeMapEncoder(this, xmlDescriptor);
        } else {
          tmp_0 = new MapEncoder(this, xmlDescriptor instanceof XmlMapDescriptor ? xmlDescriptor : THROW_CCE(), discriminatorName);
        }
        tmp = tmp_0;
      } else {
        if ((equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) ? true : equals(tmp0_subject, ENUM_getInstance())) {
          tmp = new TagEncoder(this, xmlDescriptor, discriminatorName);
        } else {
          if (equals(tmp0_subject, LIST_getInstance())) {
            var tmp_1;
            if (xmlDescriptor.uhj().h7_1 === 1) {
              tmp_1 = new AttributeListEncoder(this, xmlDescriptor instanceof XmlListDescriptor ? xmlDescriptor : THROW_CCE(), elementIndex);
            } else {
              tmp_1 = new ListEncoder(this, xmlDescriptor instanceof XmlListDescriptor ? xmlDescriptor : THROW_CCE(), elementIndex, discriminatorName);
            }
            tmp = tmp_1;
          } else {
            if (tmp0_subject instanceof PolymorphicKind) {
              tmp = new PolymorphicEncoder(this, xmlDescriptor instanceof XmlPolymorphicDescriptor ? xmlDescriptor : THROW_CCE());
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).ii4 = function (_this__u8e3s4, parentNamespace) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.qgp().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlSerialName) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return toQName(tmp0_safe_receiver, _this__u8e3s4.pgp(), parentNamespace);
    }
    return toQname(substringAfterLast(_this__u8e3s4.pgp(), _Char___init__impl__6a9atx(46)), parentNamespace);
  };
  protoOf(Companion_0).vhz = function (_this__u8e3s4, parentType) {
    if (parentType == null ? true : !startsWith(_this__u8e3s4, _Char___init__impl__6a9atx(46)))
      return _this__u8e3s4;
    // Inline function 'kotlin.let' call
    var tmp0_let = lastIndexOf(parentType, _Char___init__impl__6a9atx(46));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.Companion.expandTypeNameIfNeeded.<anonymous>' call
    if (tmp0_let < 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.substring(1);
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var parentPkg = parentType.substring(0, tmp0_let);
    return parentPkg + _this__u8e3s4;
  };
  protoOf(Companion_0).mi3 = function (_this__u8e3s4, parentType) {
    if (parentType == null)
      return _this__u8e3s4;
    // Inline function 'kotlin.let' call
    var tmp0_let = lastIndexOf(parentType, _Char___init__impl__6a9atx(46));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.Companion.tryShortenTypeName.<anonymous>' call
    if (tmp0_let < 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var parentPkg = parentType.substring(0, tmp0_let);
    if (startsWith_0(_this__u8e3s4, parentPkg) ? indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(46), parentPkg.length + 1 | 0) < 0 : false) {
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = parentPkg.length;
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.substring(tmp1_substring);
    }
    return _this__u8e3s4;
  };
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function XmlCodec($outer, xmlDescriptor) {
    this.chq_1 = $outer;
    this.bhq_1 = xmlDescriptor;
  }
  protoOf(XmlCodec).pgp = function () {
    return this.bhq_1.lhl();
  };
  function XmlTagCodec($outer, xmlDescriptor) {
    this.ghp_1 = $outer;
    this.fhp_1 = xmlDescriptor;
  }
  protoOf(XmlTagCodec).qfd = function () {
    return this.ghp_1.ghk_1;
  };
  protoOf(XmlTagCodec).egs = function () {
    return this.ghp_1.fhk_1;
  };
  protoOf(XmlTagCodec).pgp = function () {
    return this.fhp_1.lhl();
  };
  protoOf(XmlTagCodec).ghs = function (_this__u8e3s4) {
    return copy(_this__u8e3s4, '');
  };
  function XmlCodecBase(serializersModule, config) {
    Companion_getInstance_6();
    this.fhk_1 = serializersModule;
    this.ghk_1 = config;
  }
  function Builder_init_$Init$(config, $this) {
    var tmp = config.uhk_1;
    var tmp0_safe_receiver = tmp instanceof DefaultXmlSerializationPolicy ? tmp : null;
    Builder.call($this, config.rhk_1, config.shk_1, config.thk_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ki4_1, null, config.uhk_1);
    $this.thm_1 = config.vhk_1;
    $this.shm_1 = config.xhk_1;
    $this.vhm_1 = config.yhk_1;
    $this.uhm_1 = config.whk_1;
    return $this;
  }
  function Builder_init_$Create$(config) {
    return Builder_init_$Init$(config, objectCreate(protoOf(Builder)));
  }
  function sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0(function_0) {
    this.pi4_1 = function_0;
  }
  protoOf(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0).qi4 = function (input, inputKind, descriptor, name, candidates) {
    return this.pi4_1(input, inputKind, descriptor, name, candidates);
  };
  function sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_0(function_0) {
    this.ri4_1 = function_0;
  }
  protoOf(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_0).qi4 = function (input, inputKind, descriptor, name, candidates) {
    return this.ri4_1(input, inputKind, descriptor, name, candidates);
  };
  function sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_1(function_0) {
    this.si4_1 = function_0;
  }
  protoOf(sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_1).qi4 = function (input, inputKind, descriptor, name, candidates) {
    return this.si4_1(input, inputKind, descriptor, name, candidates);
  };
  function XmlConfig$Companion$DEFAULT_UNKNOWN_CHILD_HANDLER$lambda(input, inputKind, descriptor, name, candidates) {
    var tmp;
    var tmp_0;
    if (inputKind.equals(InputKind_Attribute_getInstance())) {
      var tmp_1 = Companion_getInstance_7().ti4_1;
      var tmp_2;
      if (name == null) {
        tmp_2 = null;
      } else {
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        tmp_2 = name.rhc();
      }
      tmp_0 = contains(tmp_1, tmp_2);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = emptyList();
    } else {
      var tmp_3 = input.bh9();
      var tmp_4 = descriptor.thn().pgp();
      var tmp_5 = descriptor.lhl();
      throw new UnknownXmlFieldException(tmp_3, '(' + tmp_4 + ') ' + tmp_5 + '/' + toString(name == null ? '<CDATA>' : name) + ' (' + inputKind + ')', candidates);
    }
    return tmp;
  }
  function XmlConfig$Companion$IGNORING_UNKNOWN_CHILD_HANDLER$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi, _anonymous_parameter_3__qggqen, _anonymous_parameter_4__qggqds) {
    return emptyList();
  }
  function XmlConfig$Companion$IGNORING_UNKNOWN_NAMESPACE_HANDLER$lambda(input, inputKind, descriptor, name, candidates) {
    var inputNs = input.th8();
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var contextNs = descriptor.lhl().rhc();
    var tmp;
    var tmp_0;
    if (!(inputNs === contextNs)) {
      tmp_0 = true;
    } else {
      var tmp_1;
      if (inputKind.equals(InputKind_Attribute_getInstance())) {
        var tmp_2;
        if (name == null) {
          tmp_2 = null;
        } else {
          // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
          tmp_2 = name.rhc();
        }
        var tmp_3 = tmp_2;
        XMLConstants_getInstance();
        tmp_1 = tmp_3 === 'http://www.w3.org/2001/XMLSchema-instance';
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      tmp = emptyList();
    } else {
      var tmp_4 = input.bh9();
      var tmp_5 = descriptor.thn().pgp();
      var tmp_6 = descriptor.lhl();
      throw new UnknownXmlFieldException(tmp_4, '(' + tmp_5 + ') ' + tmp_6 + '/' + toString(name == null ? '<CDATA>' : name) + ' (' + inputKind + ')', candidates);
    }
    return tmp;
  }
  function XmlConfig$Companion$DEFAULT_NONRECOVERABLE_CHILD_HANDLER$lambda(input, inputKind, name, candidates) {
    var tmp = input.bh9();
    var tmp1_elvis_lhs = name == null ? null : name.toString();
    throw new UnknownXmlFieldException(tmp, tmp1_elvis_lhs == null ? '<CDATA>' : tmp1_elvis_lhs, candidates);
  }
  function XmlConfig_init_$Init$(builder, $this) {
    builder = builder === VOID ? new Builder() : builder;
    var tmp = builder.lhm_1;
    var tmp_0 = builder.mhm_1;
    var tmp_1 = builder.nhm_1;
    var tmp2_elvis_lhs = builder.phm_1;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      var tmp0_elvis_lhs = builder.yi4();
      var tmp_3 = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
      var tmp_4 = builder.rhm_1;
      var tmp1_elvis_lhs = builder.ohm_1;
      tmp_2 = new DefaultXmlSerializationPolicy(false, tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance_7().ui4_1 : tmp1_elvis_lhs);
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    XmlConfig.call($this, tmp, tmp_0, tmp_1, tmp_2, builder.thm_1, builder.uhm_1);
    $this.xhk_1 = builder.shm_1;
    $this.yhk_1 = builder.vhm_1;
    return $this;
  }
  function XmlConfig_init_$Create$(builder) {
    return XmlConfig_init_$Init$(builder, objectCreate(protoOf(XmlConfig)));
  }
  function Builder(repairNamespaces, xmlDeclMode, indentString, autoPolymorphic, unknownChildHandler, policy) {
    repairNamespaces = repairNamespaces === VOID ? true : repairNamespaces;
    xmlDeclMode = xmlDeclMode === VOID ? XmlDeclMode_None_getInstance() : xmlDeclMode;
    indentString = indentString === VOID ? '' : indentString;
    autoPolymorphic = autoPolymorphic === VOID ? null : autoPolymorphic;
    unknownChildHandler = unknownChildHandler === VOID ? Companion_getInstance_7().ui4_1 : unknownChildHandler;
    policy = policy === VOID ? null : policy;
    this.lhm_1 = repairNamespaces;
    this.mhm_1 = xmlDeclMode;
    this.nhm_1 = indentString;
    this.ohm_1 = unknownChildHandler;
    this.phm_1 = policy;
    this.qhm_1 = autoPolymorphic;
    this.rhm_1 = XmlEncodeDefault_ANNOTATED_getInstance();
    this.shm_1 = true;
    this.thm_1 = null;
    this.uhm_1 = XmlVersion_XML11_getInstance();
    this.vhm_1 = false;
  }
  protoOf(Builder).yi4 = function () {
    var tmp1_elvis_lhs = this.qhm_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.phm_1;
      var tmp0_safe_receiver = tmp_0 instanceof DefaultXmlSerializationPolicy ? tmp_0 : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ki4_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Builder).whm = function () {
    var p = this.phm_1;
    var tmp;
    if (p instanceof DefaultXmlSerializationPolicy) {
      tmp = Builder_init_$Create$_0(p);
    } else {
      tmp = new Builder_0();
    }
    return tmp;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    XMLConstants_getInstance();
    XMLConstants_getInstance();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ti4_1 = ['http://www.w3.org/2001/XMLSchema-instance', 'http://www.w3.org/XML/1998/namespace'];
    var tmp_0 = this;
    var tmp_1 = XmlConfig$Companion$DEFAULT_UNKNOWN_CHILD_HANDLER$lambda;
    tmp_0.ui4_1 = new sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0(tmp_1);
    var tmp_2 = this;
    var tmp_3 = XmlConfig$Companion$IGNORING_UNKNOWN_CHILD_HANDLER$lambda;
    tmp_2.vi4_1 = new sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_0(tmp_3);
    var tmp_4 = this;
    var tmp_5 = XmlConfig$Companion$IGNORING_UNKNOWN_NAMESPACE_HANDLER$lambda;
    tmp_4.wi4_1 = new sam$nl_adaptivity_xmlutil_serialization_UnknownChildHandler$0_1(tmp_5);
    var tmp_6 = this;
    tmp_6.xi4_1 = XmlConfig$Companion$DEFAULT_NONRECOVERABLE_CHILD_HANDLER$lambda;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function XmlConfig(repairNamespaces, xmlDeclMode, indentString, policy, nilAttribute, xmlVersion) {
    Companion_getInstance_7();
    repairNamespaces = repairNamespaces === VOID ? true : repairNamespaces;
    xmlDeclMode = xmlDeclMode === VOID ? XmlDeclMode_None_getInstance() : xmlDeclMode;
    indentString = indentString === VOID ? '' : indentString;
    nilAttribute = nilAttribute === VOID ? null : nilAttribute;
    xmlVersion = xmlVersion === VOID ? XmlVersion_XML11_getInstance() : xmlVersion;
    this.rhk_1 = repairNamespaces;
    this.shk_1 = xmlDeclMode;
    this.thk_1 = indentString;
    this.uhk_1 = policy;
    this.vhk_1 = nilAttribute;
    this.whk_1 = xmlVersion;
    this.xhk_1 = true;
    this.yhk_1 = false;
  }
  function UnknownXmlFieldException(locationInfo, xmlName, candidates) {
    candidates = candidates === VOID ? emptyList() : candidates;
    var tmp = candidateString(candidates);
    var tmp_0;
    if (locationInfo == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.UnknownXmlFieldException.<init>.<anonymous>' call
      tmp_0 = ' at position ' + locationInfo;
    }
    var tmp1_elvis_lhs = tmp_0;
    XmlSerialException.call(this, 'Could not find a field for name ' + xmlName + tmp + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs));
    captureStack(this, UnknownXmlFieldException);
  }
  function XmlSerialException(message, cause) {
    cause = cause === VOID ? null : cause;
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, XmlSerialException);
  }
  function XmlParsingException(locationInfo, message, cause) {
    cause = cause === VOID ? null : cause;
    XmlSerialException.call(this, 'Invalid XML value at position: ' + locationInfo + ': ' + message, cause);
    captureStack(this, XmlParsingException);
  }
  function candidateString(candidates) {
    var tmp;
    if (candidates.d().e() === true) {
      tmp = joinToString(candidates, VOID, '\n  candidates: ', VOID, VOID, VOID, candidateString$lambda);
    } else {
      tmp = '';
    }
    return tmp;
  }
  function candidateString$lambda(it) {
    var tmp;
    if (it instanceof PolyInfo) {
      tmp = '' + it.qhp_1 + ' (' + it.shp_1.uhj() + ')';
    } else {
      tmp = toString(it);
    }
    return tmp;
  }
  var XmlEncodeDefault_ALWAYS_instance;
  var XmlEncodeDefault_ANNOTATED_instance;
  var XmlEncodeDefault_NEVER_instance;
  var XmlEncodeDefault_entriesInitialized;
  function XmlEncodeDefault_initEntries() {
    if (XmlEncodeDefault_entriesInitialized)
      return Unit_getInstance();
    XmlEncodeDefault_entriesInitialized = true;
    XmlEncodeDefault_ALWAYS_instance = new XmlEncodeDefault('ALWAYS', 0);
    XmlEncodeDefault_ANNOTATED_instance = new XmlEncodeDefault('ANNOTATED', 1);
    XmlEncodeDefault_NEVER_instance = new XmlEncodeDefault('NEVER', 2);
  }
  function DeclaredNameInfo(serialName, annotatedName) {
    this.zi4_1 = serialName;
    this.ai5_1 = annotatedName;
  }
  protoOf(DeclaredNameInfo).toString = function () {
    return 'DeclaredNameInfo(serialName=' + this.zi4_1 + ', annotatedName=' + this.ai5_1 + ')';
  };
  protoOf(DeclaredNameInfo).hashCode = function () {
    var result = getStringHashCode(this.zi4_1);
    result = imul(result, 31) + (this.ai5_1 == null ? 0 : this.ai5_1.hashCode()) | 0;
    return result;
  };
  protoOf(DeclaredNameInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeclaredNameInfo))
      return false;
    var tmp0_other_with_cast = other instanceof DeclaredNameInfo ? other : THROW_CCE();
    if (!(this.zi4_1 === tmp0_other_with_cast.zi4_1))
      return false;
    if (!equals(this.ai5_1, tmp0_other_with_cast.ai5_1))
      return false;
    return true;
  };
  function ActualNameInfo(serialName, annotatedName) {
    this.bi5_1 = serialName;
    this.ci5_1 = annotatedName;
  }
  protoOf(ActualNameInfo).toString = function () {
    return 'ActualNameInfo(serialName=' + this.bi5_1 + ', annotatedName=' + this.ci5_1 + ')';
  };
  protoOf(ActualNameInfo).hashCode = function () {
    var result = getStringHashCode(this.bi5_1);
    result = imul(result, 31) + this.ci5_1.hashCode() | 0;
    return result;
  };
  protoOf(ActualNameInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActualNameInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ActualNameInfo ? other : THROW_CCE();
    if (!(this.bi5_1 === tmp0_other_with_cast.bi5_1))
      return false;
    if (!this.ci5_1.equals(tmp0_other_with_cast.ci5_1))
      return false;
    return true;
  };
  function XmlEncodeDefault(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function XmlEncodeDefault_ANNOTATED_getInstance() {
    XmlEncodeDefault_initEntries();
    return XmlEncodeDefault_ANNOTATED_instance;
  }
  function XmlSerializationPolicy() {
  }
  function Builder_init_$Init$_0(policy, $this) {
    Builder_0.call($this, policy.ji4_1, policy.ki4_1, policy.li4_1, policy.mi4_1, policy.ni4_1, policy.oi4_1);
    return $this;
  }
  function Builder_init_$Create$_0(policy) {
    return Builder_init_$Init$_0(policy, objectCreate(protoOf(Builder_0)));
  }
  function DefaultXmlSerializationPolicy_init_$Init$(builder, $this) {
    DefaultXmlSerializationPolicy.call($this, builder.xhm_1, builder.yhm_1, builder.zhm_1, builder.ahn_1, builder.bhn_1, builder.chn_1);
    return $this;
  }
  function DefaultXmlSerializationPolicy_init_$Create$(builder) {
    return DefaultXmlSerializationPolicy_init_$Init$(builder, objectCreate(protoOf(DefaultXmlSerializationPolicy)));
  }
  function Builder_0(pedantic, autoPolymorphic, encodeDefault, unknownChildHandler, typeDiscriminatorName, throwOnRepeatedElement) {
    pedantic = pedantic === VOID ? false : pedantic;
    autoPolymorphic = autoPolymorphic === VOID ? false : autoPolymorphic;
    encodeDefault = encodeDefault === VOID ? XmlEncodeDefault_ANNOTATED_getInstance() : encodeDefault;
    unknownChildHandler = unknownChildHandler === VOID ? Companion_getInstance_7().ui4_1 : unknownChildHandler;
    typeDiscriminatorName = typeDiscriminatorName === VOID ? null : typeDiscriminatorName;
    throwOnRepeatedElement = throwOnRepeatedElement === VOID ? false : throwOnRepeatedElement;
    this.xhm_1 = pedantic;
    this.yhm_1 = autoPolymorphic;
    this.zhm_1 = encodeDefault;
    this.ahn_1 = unknownChildHandler;
    this.bhn_1 = typeDiscriminatorName;
    this.chn_1 = throwOnRepeatedElement;
  }
  protoOf(Builder_0).df = function () {
    return DefaultXmlSerializationPolicy_init_$Create$(this);
  };
  function initialChildReorderMap$toChildIndex(_this__u8e3s4, nameToIdx, $parentDescriptor) {
    var tmp0_elvis_lhs = nameToIdx.z2(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new XmlSerialException('Could not find the attribute in ' + $parentDescriptor.pgp() + ' with the name: ' + _this__u8e3s4 + '\n  Candidates were: ' + joinToString(nameToIdx.a3()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function DefaultXmlSerializationPolicy$effectiveName$lambda() {
    return 'Type name info should match';
  }
  function DefaultXmlSerializationPolicy$elementNamespaceDecls$lambda(it) {
    return it instanceof XmlNamespaceDeclSpec;
  }
  function DefaultXmlSerializationPolicy$elementNamespaceDecls$lambda_0(decl) {
    return get_namespaces(decl);
  }
  function DefaultXmlSerializationPolicy(pedantic, autoPolymorphic, encodeDefault, unknownChildHandler, typeDiscriminatorName, throwOnRepeatedElement) {
    autoPolymorphic = autoPolymorphic === VOID ? false : autoPolymorphic;
    encodeDefault = encodeDefault === VOID ? XmlEncodeDefault_ANNOTATED_getInstance() : encodeDefault;
    unknownChildHandler = unknownChildHandler === VOID ? Companion_getInstance_7().ui4_1 : unknownChildHandler;
    typeDiscriminatorName = typeDiscriminatorName === VOID ? null : typeDiscriminatorName;
    throwOnRepeatedElement = throwOnRepeatedElement === VOID ? false : throwOnRepeatedElement;
    this.ji4_1 = pedantic;
    this.ki4_1 = autoPolymorphic;
    this.li4_1 = encodeDefault;
    this.mi4_1 = unknownChildHandler;
    this.ni4_1 = typeDiscriminatorName;
    this.oi4_1 = throwOnRepeatedElement;
  }
  protoOf(DefaultXmlSerializationPolicy).li5 = function (serializerParent, tagParent) {
    return this.ni4_1;
  };
  protoOf(DefaultXmlSerializationPolicy).ji5 = function (serializerParent, tagParent) {
    var useAnnotations = tagParent.di6();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = useAnnotations.d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlValue) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var isMixed = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.thv_1) === true;
    if (isMixed)
      return true;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator_0 = useAnnotations.d();
      while (tmp0_iterator_0.e()) {
        var e_0 = tmp0_iterator_0.f();
        if (e_0 instanceof XmlChildrenName) {
          tmp$ret$1 = e_0;
          break $l$block_0;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_safe_receiver = tmp$ret$1;
    var reqChildrenName = tmp1_safe_receiver == null ? null : toQName_0(tmp1_safe_receiver);
    return reqChildrenName == null;
  };
  protoOf(DefaultXmlSerializationPolicy).ki5 = function (serializerParent, tagParent) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = tagParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlPolyChildren) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var xmlPolyChildren = tmp$ret$0;
    return this.ki4_1 ? true : !(xmlPolyChildren == null);
  };
  protoOf(DefaultXmlSerializationPolicy).oi5 = function (serializerParent, tagParent) {
    return this.pi5(serializerParent, tagParent, true);
  };
  protoOf(DefaultXmlSerializationPolicy).pi5 = function (serializerParent, tagParent, canBeAttribute) {
    var tmp0_safe_receiver = this.ri5(serializerParent, tagParent);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kgo();
    var serialDescriptor = tmp1_elvis_lhs == null ? serializerParent.ei6() : tmp1_elvis_lhs;
    var overrideOutputKind = serializerParent.fi6();
    var tmp;
    switch (overrideOutputKind == null ? -1 : overrideOutputKind.h7_1) {
      case -1:
        var useAnnotations = tagParent.di6();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
          var tmp0_iterator = useAnnotations.d();
          while (tmp0_iterator.e()) {
            var e = tmp0_iterator.f();
            if (e instanceof XmlValue) {
              tmp$ret$0 = e;
              break $l$block;
            }
          }
          tmp$ret$0 = null;
        }

        var tmp2_safe_receiver = tmp$ret$0;
        var isValue = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.thv_1) === true;
        var parentChildDesc = tagParent.ei6();
        while (parentChildDesc.sgp()) {
          parentChildDesc = parentChildDesc.vgp(0);
        }

        var elementKind = parentChildDesc.tgp();
        var tmp_0;
        if (equals(elementKind, CLASS_getInstance())) {
          tmp_0 = OutputKind_Element_getInstance();
        } else if (isValue) {
          tmp_0 = OutputKind_Mixed_getInstance();
        } else if (!canBeAttribute ? equals(tagParent.fi6(), OutputKind_Attribute_getInstance()) : false) {
          tmp_0 = this.qi5(serializerParent, tagParent, OutputKind_Attribute_getInstance());
        } else if (!canBeAttribute) {
          tmp_0 = OutputKind_Element_getInstance();
        } else {
          var tmp3_elvis_lhs = tagParent.fi6();
          var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? declOutputKind(serialDescriptor) : tmp3_elvis_lhs;
          tmp_0 = tmp4_elvis_lhs == null ? this.fi5(serialDescriptor.tgp()) : tmp4_elvis_lhs;
        }

        tmp = tmp_0;
        break;
      case 3:
        var tmp_1;
        var tmp_2 = serializerParent.kgo();
        if (tmp_2 instanceof XmlListDescriptor) {
          var tmp_3;
          if (equals(tagParent.ei6().tgp(), CLASS_getInstance())) {
            tmp_3 = OutputKind_Element_getInstance();
          } else {
            tmp_3 = OutputKind_Mixed_getInstance();
          }
          tmp_1 = tmp_3;
        } else {
          var tmp5_elvis_lhs = tagParent.fi6();
          var tmp6_elvis_lhs = tmp5_elvis_lhs == null ? declOutputKind(serialDescriptor) : tmp5_elvis_lhs;
          var outputKind = tmp6_elvis_lhs == null ? this.fi5(serialDescriptor.tgp()) : tmp6_elvis_lhs;
          tmp_1 = outputKind.h7_1 === 1 ? OutputKind_Text_getInstance() : outputKind;
        }

        tmp = tmp_1;
        break;
      default:
        tmp = overrideOutputKind;
        break;
    }
    return tmp;
  };
  protoOf(DefaultXmlSerializationPolicy).mi5 = function (serialName, parentNamespace) {
    var tmp;
    switch (serialName) {
      case 'kotlin.Boolean':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'boolean', 'xsd');
        break;
      case 'kotlin.Byte':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'byte', 'xsd');
        break;
      case 'kotlin.UByte':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'unsignedByte', 'xsd');
        break;
      case 'kotlin.Short':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'short', 'xsd');
        break;
      case 'kotlin.UShort':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'unsignedShort', 'xsd');
        break;
      case 'kotlin.Int':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'int', 'xsd');
        break;
      case 'kotlin.UInt':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'unsignedInt', 'xsd');
        break;
      case 'kotlin.Long':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'long', 'xsd');
        break;
      case 'kotlin.ULong':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'unsignedLong', 'xsd');
        break;
      case 'kotlin.Float':
      case 'kotlin.Double':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'double', 'xsd');
        break;
      case 'kotlin.String':
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        tmp = new QName('http://www.w3.org/2001/XMLSchema', 'string', 'xsd');
        break;
      default:
        tmp = toQname(substringAfterLast(serialName, _Char___init__impl__6a9atx(46)), parentNamespace);
        break;
    }
    return tmp;
  };
  protoOf(DefaultXmlSerializationPolicy).ii5 = function (serializerParent, tagParent, outputKind, useName) {
    var typeDescriptor = serializerParent.gi6();
    var serialKind = typeDescriptor.hi6_1.tgp();
    var typeNameInfo = typeDescriptor.ii6_1;
    var parentNamespace = tagParent.zi5();
    var tmp = typeNameInfo.equals(typeDescriptor.ii6_1);
    assert_0(tmp, DefaultXmlSerializationPolicy$effectiveName$lambda);
    var tmp0_safe_receiver = tagParent.kgo();
    var parentSerialKind = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hi4();
    var tmp_0;
    if (!(useName.ai5_1 == null)) {
      tmp_0 = useName.ai5_1;
    } else {
      if (outputKind.equals(OutputKind_Attribute_getInstance())) {
        tmp_0 = QName_init_$Create$(useName.zi4_1);
      } else {
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp_5;
        if (serialKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(serialKind, MAP_getInstance());
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(serialKind, LIST_getInstance());
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(serialKind, OPEN_getInstance());
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          tmp_2 = typeNameInfo.zi4_1 === 'kotlin.Unit';
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = parentSerialKind instanceof PolymorphicKind;
        }
        if (tmp_1) {
          tmp_0 = this.ni5(useName, parentNamespace);
        } else {
          if (!(typeNameInfo.ai5_1 == null)) {
            tmp_0 = typeNameInfo.ai5_1;
          } else {
            tmp_0 = this.zhk(typeNameInfo, parentNamespace);
          }
        }
      }
    }
    return tmp_0;
  };
  protoOf(DefaultXmlSerializationPolicy).di3 = function (elementDescriptor) {
    var tmp;
    switch (this.li4_1.h7_1) {
      case 2:
        tmp = false;
        break;
      case 0:
        tmp = true;
        break;
      case 1:
        var tmp1_safe_receiver = elementDescriptor instanceof XmlValueDescriptor ? elementDescriptor : null;
        tmp = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ohp_1) == null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(DefaultXmlSerializationPolicy).lhs = function (input, inputKind, descriptor, name, candidates) {
    return this.mi4_1.qi4(input, inputKind, descriptor, name, candidates);
  };
  protoOf(DefaultXmlSerializationPolicy).si5 = function (input, inputKind, name, candidates) {
    throw UnsupportedOperationException_init_$Create$('this function should not be called');
  };
  protoOf(DefaultXmlSerializationPolicy).mhs = function (parentDescriptor, childIndex) {
    if (this.oi4_1) {
      throw new XmlSerialException('Duplicate child (' + parentDescriptor.vgp(childIndex) + ' found in ' + parentDescriptor + ' outside of eluded list context');
    }
  };
  protoOf(DefaultXmlSerializationPolicy).ri5 = function (serializerParent, tagParent) {
    switch (serializerParent.ei6().pgp()) {
      case 'javax.xml.namespace.QName?':
      case 'javax.xml.namespace.QName':
        return XmlQNameSerializer_getInstance();
      default:
        return null;
    }
  };
  protoOf(DefaultXmlSerializationPolicy).ui5 = function (parentDescriptor) {
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = until(0, parentDescriptor.rgp());
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$_0(capacity);
    var inductionVariable = tmp0_associateBy.y_1;
    var last = tmp0_associateBy.z_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
        tmp$ret$0 = parentDescriptor.xgp(element);
        tmp0_associateByTo.a5(tmp$ret$0, element);
      }
       while (!(element === last));
    var nameToIdx = tmp0_associateByTo;
    var orderConstraints = HashSet_init_$Create$();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var orderNodes = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = parentDescriptor.rgp();
    if (inductionVariable_0 < last_0)
      do {
        var elementIdx = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var xmlBefore = null;
        var xmlAfter = null;
        var tmp1_iterator = parentDescriptor.ugp(elementIdx).d();
        while (tmp1_iterator.e()) {
          var annotation = tmp1_iterator.f();
          var tmp;
          if (annotation instanceof XmlBefore) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            // Inline function 'kotlin.collections.isEmpty' call
            tmp = !(annotation.ki6_1.length === 0);
          } else {
            tmp = false;
          }
          if (tmp) {
            // Inline function 'kotlin.collections.mapTo' call
            var indexedObject = annotation.ki6_1;
            var inductionVariable_1 = 0;
            var last_1 = indexedObject.length;
            while (inductionVariable_1 < last_1) {
              var item = indexedObject[inductionVariable_1];
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp$ret$6;
              // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
              var successorIdx = initialChildReorderMap$toChildIndex(item, nameToIdx, parentDescriptor);
              tmp$ret$6 = new XmlOrderConstraint(elementIdx, successorIdx);
              orderConstraints.a(tmp$ret$6);
            }
            xmlBefore = annotation.ki6_1;
          } else {
            var tmp_0;
            if (annotation instanceof XmlAfter) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              // Inline function 'kotlin.collections.isEmpty' call
              tmp_0 = !(annotation.li6_1.length === 0);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              // Inline function 'kotlin.collections.mapTo' call
              var indexedObject_0 = annotation.li6_1;
              var inductionVariable_2 = 0;
              var last_2 = indexedObject_0.length;
              while (inductionVariable_2 < last_2) {
                var item_0 = indexedObject_0[inductionVariable_2];
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var tmp$ret$10;
                // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
                var predecessorIdx = initialChildReorderMap$toChildIndex(item_0, nameToIdx, parentDescriptor);
                tmp$ret$10 = new XmlOrderConstraint(predecessorIdx, elementIdx);
                orderConstraints.a(tmp$ret$10);
              }
              xmlAfter = annotation.li6_1;
            }
          }
          if (!(xmlBefore == null) ? true : !(xmlAfter == null)) {
            // Inline function 'kotlin.collections.getOrPut' call
            var tmp5_getOrPut = parentDescriptor.xgp(elementIdx);
            var value = orderNodes.z2(tmp5_getOrPut);
            var tmp_1;
            if (value == null) {
              // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
              var answer = new XmlOrderNode(elementIdx);
              orderNodes.a5(tmp5_getOrPut, answer);
              tmp_1 = answer;
            } else {
              tmp_1 = value;
            }
            var node = tmp_1;
            if (!(xmlBefore == null)) {
              var tmp_2 = 0;
              var tmp_3 = xmlBefore.length;
              // Inline function 'kotlin.arrayOfNulls' call
              var tmp_4 = fillArrayVal(Array(tmp_3), null);
              while (tmp_2 < tmp_3) {
                var tmp_5 = tmp_2;
                var name = xmlBefore[tmp_5];
                // Inline function 'kotlin.collections.getOrPut' call
                var value_0 = orderNodes.z2(name);
                var tmp_6;
                if (value_0 == null) {
                  // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
                  var answer_0 = new XmlOrderNode(initialChildReorderMap$toChildIndex(name, nameToIdx, parentDescriptor));
                  orderNodes.a5(name, answer_0);
                  tmp_6 = answer_0;
                } else {
                  tmp_6 = value_0;
                }
                tmp_4[tmp_5] = tmp_6;
                tmp_2 = tmp_2 + 1 | 0;
              }
              var befores = tmp_4;
              node.pi6(befores.slice());
            }
            if (!(xmlAfter == null)) {
              var tmp_7 = 0;
              var tmp_8 = xmlAfter.length;
              // Inline function 'kotlin.arrayOfNulls' call
              var tmp_9 = fillArrayVal(Array(tmp_8), null);
              while (tmp_7 < tmp_8) {
                var tmp_10 = tmp_7;
                var name_0 = xmlAfter[tmp_10];
                // Inline function 'kotlin.collections.getOrPut' call
                var value_1 = orderNodes.z2(name_0);
                var tmp_11;
                if (value_1 == null) {
                  // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.initialChildReorderMap.<anonymous>' call
                  var answer_1 = new XmlOrderNode(initialChildReorderMap$toChildIndex(name_0, nameToIdx, parentDescriptor));
                  orderNodes.a5(name_0, answer_1);
                  tmp_11 = answer_1;
                } else {
                  tmp_11 = value_1;
                }
                tmp_9[tmp_10] = tmp_11;
                tmp_7 = tmp_7 + 1 | 0;
              }
              var afters = tmp_9;
              node.qi6(afters.slice());
            }
          }
        }
      }
       while (inductionVariable_0 < last_0);
    if (orderNodes.l())
      return null;
    return orderConstraints.l() ? null : toList(orderConstraints);
  };
  protoOf(DefaultXmlSerializationPolicy).vi5 = function (serializerParent, tagParent) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = serializerParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlIgnoreWhitespace) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.preserveSpace.<anonymous>' call
      return !tmp0_safe_receiver.ri6_1;
    }
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator_0 = serializerParent.ei6().qgp().d();
      while (tmp0_iterator_0.e()) {
        var e_0 = tmp0_iterator_0.f();
        if (e_0 instanceof XmlIgnoreWhitespace) {
          tmp$ret$2 = e_0;
          break $l$block_0;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp1_safe_receiver = tmp$ret$2;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ri6_1;
    return !(tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs);
  };
  protoOf(DefaultXmlSerializationPolicy).wi5 = function (serializerParent) {
    return new DeclaredNameInfo('key', null);
  };
  protoOf(DefaultXmlSerializationPolicy).xi5 = function (serializerParent, isListEluded) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = serializerParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlChildrenName) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var childrenName = tmp0_safe_receiver == null ? null : toQName_0(tmp0_safe_receiver);
    return new DeclaredNameInfo('value', childrenName);
  };
  protoOf(DefaultXmlSerializationPolicy).yi5 = function (serializerParent, isListEluded) {
    if (isListEluded) {
      var tmp0_safe_receiver = serializerParent.ti5().ai5_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    return QName_init_$Create$_0(serializerParent.zi5().th8(), 'entry');
  };
  protoOf(DefaultXmlSerializationPolicy).ai6 = function (mapParent, valueDescriptor) {
    var keyDescriptor = mapParent.ei6().vgp(0);
    var keyUseName = this.wi5(mapParent);
    var pseudoKeyParent = new InjectedParentTag(0, new XmlTypeDescriptor(keyDescriptor, mapParent.zi5()), keyUseName, mapParent.zi5());
    var keyEffectiveOutputKind = this.pi5(pseudoKeyParent, pseudoKeyParent, true);
    if (!keyEffectiveOutputKind.xhj())
      return false;
    var keyName = this.ii5(pseudoKeyParent, pseudoKeyParent, keyEffectiveOutputKind, keyUseName);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = until(0, valueDescriptor.rgp());
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.y_1;
    var last = tmp0_map.z_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.isMapValueCollapsed.<anonymous>' call
        tmp$ret$0 = valueDescriptor.vgp(item);
        tmp0_mapTo.a(tmp$ret$0);
      }
       while (!(item === last));
    var tmp0_iterator = tmp0_mapTo.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'nl.adaptivity.xmlutil.serialization.DefaultXmlSerializationPolicy.isMapValueCollapsed.<anonymous>' call
      if (isEquivalent(element.lhl(), keyName))
        return false;
    }
    return true;
  };
  protoOf(DefaultXmlSerializationPolicy).bi6 = function (serializerParent) {
    var annotations = plus_1(asSequence_1(serializerParent.di6()), serializerParent.gi6().hi6_1.qgp());
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var tmp = filter(annotations, DefaultXmlSerializationPolicy$elementNamespaceDecls$lambda);
    var tmp_0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    return toList_0(flatMap(tmp_0, DefaultXmlSerializationPolicy$elementNamespaceDecls$lambda_0));
  };
  protoOf(DefaultXmlSerializationPolicy).hi5 = function (message) {
    if (this.ji4_1)
      throw new XmlSerialException(message);
  };
  function typeQName(_this__u8e3s4, xmlDescriptor) {
    var tmp0_elvis_lhs = xmlDescriptor.si6().ti6();
    return tmp0_elvis_lhs == null ? _this__u8e3s4.zhk(xmlDescriptor.si6().ii6_1, xmlDescriptor.fhl_1.zi5()) : tmp0_elvis_lhs;
  }
  function XmlSerialName() {
  }
  function get_UNSET_ANNOTATION_VALUE() {
    return UNSET_ANNOTATION_VALUE;
  }
  var UNSET_ANNOTATION_VALUE;
  function XmlPolyChildren() {
  }
  function XmlElement() {
  }
  function XmlValue() {
  }
  function XmlChildrenName() {
  }
  function XmlCData() {
  }
  function XmlDefault() {
  }
  function XmlOtherAttributes() {
  }
  function XmlBefore() {
  }
  function XmlAfter() {
  }
  function XmlIgnoreWhitespace() {
  }
  function XmlNamespaceDeclSpec() {
  }
  function get_namespaces(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = split_0(_this__u8e3s4.ui6_1, charArrayOf([_Char___init__impl__6a9atx(59)]));
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$4;
      // Inline function 'nl.adaptivity.xmlutil.serialization.<get-namespaces>.<anonymous>' call
      var eq = indexOf(item, _Char___init__impl__6a9atx(61));
      var tmp;
      if (eq === -1) {
        tmp = new NamespaceImpl('', item);
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = item.substring(0, eq);
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = eq + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = item.substring(tmp0_substring);
        tmp = new NamespaceImpl(tmp_0, tmp$ret$3);
      }
      tmp$ret$4 = tmp;
      tmp0_mapTo.a(tmp$ret$4);
    }
    return tmp0_mapTo;
  }
  function ChildCollector(wantedBaseClass) {
    wantedBaseClass = wantedBaseClass === VOID ? null : wantedBaseClass;
    this.hhk_1 = wantedBaseClass;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ihk_1 = ArrayList_init_$Create$();
  }
  protoOf(ChildCollector).xh6 = function (baseClass, defaultDeserializerProvider) {
  };
  protoOf(ChildCollector).wh6 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(ChildCollector).uh6 = function (kClass, serializer) {
  };
  protoOf(ChildCollector).sh6 = function (kClass, provider) {
  };
  protoOf(ChildCollector).vh6 = function (baseClass, actualClass, actualSerializer) {
    if (this.hhk_1 == null ? true : equals(this.hhk_1, baseClass)) {
      this.ihk_1.a(actualSerializer);
    }
  };
  function DummyDecoder(value) {
    this.vi6_1 = value;
  }
  protoOf(DummyDecoder).dgr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).egr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).kgr = function () {
    var tmp = this.vi6_1;
    return tmp instanceof Char ? tmp.n8_1 : THROW_CCE();
  };
  protoOf(DummyDecoder).jgr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).igr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).ggr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).hgr = function () {
    var tmp = this.vi6_1;
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).fgr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).lgr = function () {
    var tmp = this.vi6_1;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).ogr = function (deserializer) {
    var tmp = this.vi6_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DummyDecoder).mgr = function (inlineDescriptor) {
    return this;
  };
  protoOf(DummyDecoder).bgr = function () {
    return this.vi6_1 == null;
  };
  protoOf(DummyDecoder).cgr = function () {
    var tmp = this.vi6_1;
    var tmp_0;
    var tmp_1;
    if (tmp == null) {
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = tmp;
    } else {
      tmp_0 = THROW_CCE();
    }
    return tmp_0;
  };
  protoOf(DummyDecoder).pgr = function (descriptor) {
    throw UnsupportedOperationException_init_$Create$('Explicit decoding of elements of hardcoded values is not supported');
  };
  function recordNamespace($this, prefix, namespaceUri) {
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = $this.xi6_1;
    // Inline function 'kotlin.collections.containsKey' call
    if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).t2(namespaceUri)) {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(namespaceUri) === 0) {
        var existingDefaultNamespace = $this.wi6_1.z2('');
        if (!(existingDefaultNamespace == null)) {
          $this.xi6_1.ye(existingDefaultNamespace);
          $this.yi6_1.a(existingDefaultNamespace);
        }
        // Inline function 'kotlin.collections.set' call
        $this.xi6_1.a5('', '');
        // Inline function 'kotlin.collections.set' call
        $this.wi6_1.a5('', '');
      } else {
        // Inline function 'kotlin.collections.contains' call
        var tmp3_contains = $this.wi6_1;
        // Inline function 'kotlin.collections.containsKey' call
        if ((isInterface(tmp3_contains, Map) ? tmp3_contains : THROW_CCE()).t2(prefix)) {
          $this.yi6_1.a(namespaceUri);
        } else {
          if ($this.yi6_1.n(namespaceUri)) {
            $this.yi6_1.y3(namespaceUri);
          }
          // Inline function 'kotlin.collections.set' call
          $this.wi6_1.a5(prefix, namespaceUri);
          // Inline function 'kotlin.collections.set' call
          $this.xi6_1.a5(namespaceUri, prefix);
        }
      }
    }
  }
  function NamespaceCollectingXmlWriter$namespaceContext$1(this$0) {
    this.bi7_1 = this$0;
  }
  protoOf(NamespaceCollectingXmlWriter$namespaceContext$1).oh8 = function (namespaceURI) {
    return this.bi7_1.xha(namespaceURI);
  };
  protoOf(NamespaceCollectingXmlWriter$namespaceContext$1).nh8 = function (prefix) {
    return this.bi7_1.wha(prefix);
  };
  protoOf(NamespaceCollectingXmlWriter$namespaceContext$1).qh8 = function (namespaceURI) {
    return listOfNotNull(this.oh8(namespaceURI)).d();
  };
  function NamespaceCollectingXmlWriter(prefixToUriMap, uriToPrefixMap, pendingNamespaces) {
    this.wi6_1 = prefixToUriMap;
    this.xi6_1 = uriToPrefixMap;
    this.yi6_1 = pendingNamespaces;
    this.zi6_1 = 0;
    this.ai7_1 = '';
  }
  protoOf(NamespaceCollectingXmlWriter).i3v = function () {
    return this.zi6_1;
  };
  protoOf(NamespaceCollectingXmlWriter).yha = function (_set____db54di) {
    this.ai7_1 = _set____db54di;
  };
  protoOf(NamespaceCollectingXmlWriter).zha = function () {
    return this.ai7_1;
  };
  protoOf(NamespaceCollectingXmlWriter).mha = function (namespacePrefix, namespaceUri) {
    recordNamespace(this, namespacePrefix, namespaceUri);
  };
  protoOf(NamespaceCollectingXmlWriter).wha = function (prefix) {
    return this.wi6_1.z2(prefix);
  };
  protoOf(NamespaceCollectingXmlWriter).xha = function (namespaceUri) {
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.xi6_1;
    return (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).z2(namespaceUri);
  };
  protoOf(NamespaceCollectingXmlWriter).rha = function (namespace, name, prefix, value) {
    XMLConstants_getInstance();
    if (namespace === 'http://www.w3.org/2000/xmlns/') {
      XMLConstants_getInstance();
      if (prefix === 'xmlns') {
        this.mha(prefix, value);
      } else {
        if (prefix === '') {
          this.mha(name, value);
        }
      }
    }
  };
  protoOf(NamespaceCollectingXmlWriter).ch9 = function () {
    return new NamespaceCollectingXmlWriter$namespaceContext$1(this);
  };
  protoOf(NamespaceCollectingXmlWriter).nha = function (namespace, localName, prefix) {
    this.zi6_1 = this.zi6_1 + 1 | 0;
  };
  protoOf(NamespaceCollectingXmlWriter).vha = function (namespace, localName, prefix) {
    this.zi6_1 = this.zi6_1 - 1 | 0;
  };
  protoOf(NamespaceCollectingXmlWriter).o1y = function () {
  };
  protoOf(NamespaceCollectingXmlWriter).hha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).oha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).pha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).qha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).iha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).zh9 = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).kha = function (text) {
  };
  protoOf(NamespaceCollectingXmlWriter).sha = function (version, encoding, standalone) {
  };
  protoOf(NamespaceCollectingXmlWriter).uha = function () {
  };
  function remapPrefix(_this__u8e3s4, $this) {
    var prefixMap = $this.di7_1;
    return remapPrefix_0(_this__u8e3s4, prefixMap);
  }
  function PrefixWrappingPolicy(basePolicy, prefixMap) {
    this.ci7_1 = basePolicy;
    this.di7_1 = prefixMap;
  }
  protoOf(PrefixWrappingPolicy).ei5 = function () {
    return this.ci7_1.ei5();
  };
  protoOf(PrefixWrappingPolicy).di5 = function () {
    return this.ci7_1.di5();
  };
  protoOf(PrefixWrappingPolicy).ci6 = function (serializerParent, tagParent) {
    return this.ci7_1.ci6(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).oi5 = function (serializerParent, tagParent) {
    return this.ci7_1.oi5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).pi5 = function (serializerParent, tagParent, canBeAttribute) {
    return this.ci7_1.pi5(serializerParent, tagParent, canBeAttribute);
  };
  protoOf(PrefixWrappingPolicy).bi6 = function (serializerParent) {
    return this.ci7_1.bi6(serializerParent);
  };
  protoOf(PrefixWrappingPolicy).qi5 = function (serializerParent, tagParent, outputKind) {
    return this.ci7_1.qi5(serializerParent, tagParent, outputKind);
  };
  protoOf(PrefixWrappingPolicy).si5 = function (input, inputKind, name, candidates) {
    this.ci7_1.si5(input, inputKind, name, candidates);
  };
  protoOf(PrefixWrappingPolicy).lhs = function (input, inputKind, descriptor, name, candidates) {
    return this.ci7_1.lhs(input, inputKind, descriptor, name, candidates);
  };
  protoOf(PrefixWrappingPolicy).hi5 = function (message) {
    this.ci7_1.hi5(message);
  };
  protoOf(PrefixWrappingPolicy).ui5 = function (parentDescriptor) {
    return this.ci7_1.ui5(parentDescriptor);
  };
  protoOf(PrefixWrappingPolicy).gi5 = function (message) {
    this.ci7_1.gi5(message);
  };
  protoOf(PrefixWrappingPolicy).ji5 = function (serializerParent, tagParent) {
    return this.ci7_1.ji5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).ai6 = function (mapParent, valueDescriptor) {
    return this.ci7_1.ai6(mapParent, valueDescriptor);
  };
  protoOf(PrefixWrappingPolicy).ki5 = function (serializerParent, tagParent) {
    return this.ci7_1.ki5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).wi5 = function (serializerParent) {
    return this.ci7_1.wi5(serializerParent);
  };
  protoOf(PrefixWrappingPolicy).xi5 = function (serializerParent, isListEluded) {
    return this.ci7_1.xi5(serializerParent, isListEluded);
  };
  protoOf(PrefixWrappingPolicy).mhs = function (parentDescriptor, childIndex) {
    this.ci7_1.mhs(parentDescriptor, childIndex);
  };
  protoOf(PrefixWrappingPolicy).ri5 = function (serializerParent, tagParent) {
    return this.ci7_1.ri5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).li5 = function (serializerParent, tagParent) {
    return this.ci7_1.li5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).vi5 = function (serializerParent, tagParent) {
    return this.ci7_1.vi5(serializerParent, tagParent);
  };
  protoOf(PrefixWrappingPolicy).di3 = function (elementDescriptor) {
    return this.ci7_1.di3(elementDescriptor);
  };
  protoOf(PrefixWrappingPolicy).ii5 = function (serializerParent, tagParent, outputKind, useName) {
    return remapPrefix(this.ci7_1.ii5(serializerParent, tagParent, outputKind, useName), this);
  };
  protoOf(PrefixWrappingPolicy).zhk = function (typeNameInfo, parentNamespace) {
    return remapPrefix(this.ci7_1.zhk(typeNameInfo, parentNamespace), this);
  };
  protoOf(PrefixWrappingPolicy).mi5 = function (serialName, parentNamespace) {
    return remapPrefix(this.ci7_1.mi5(serialName, parentNamespace), this);
  };
  protoOf(PrefixWrappingPolicy).yi5 = function (serializerParent, isListEluded) {
    return remapPrefix(mapEntryName.call(this, serializerParent, isListEluded), this);
  };
  function remapPrefix_0(_this__u8e3s4, prefixMap) {
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var tmp = _this__u8e3s4.rhc();
    // Inline function 'nl.adaptivity.xmlutil.localPart' call
    var tmp_0 = _this__u8e3s4.shc();
    var tmp$ret$2;
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    tmp$ret$2 = _this__u8e3s4.rhc();
    var tmp0_elvis_lhs = prefixMap.z2(tmp$ret$2);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      tmp_1 = _this__u8e3s4.thc();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return new QName(tmp, tmp_0, tmp_1);
  }
  function XmlQNameSerializer() {
    XmlQNameSerializer_instance = this;
    this.uhz_1 = PrimitiveSerialDescriptor('javax.xml.namespace.QName', STRING_getInstance());
  }
  protoOf(XmlQNameSerializer).kgo = function () {
    return this.uhz_1;
  };
  protoOf(XmlQNameSerializer).mgo = function (decoder) {
    if (!isInterface(decoder, XmlInput))
      throw SerializationException_init_$Create$('QNameXmlSerializer only makes sense in an XML context');
    var namespaceContext = decoder.h3t().ch9().ph8();
    // Inline function 'kotlin.text.trim' call
    var tmp0_trim = decoder.lgr();
    var prefixedName = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    var cIndex = indexOf(prefixedName, _Char___init__impl__6a9atx(58));
    var prefix;
    var namespace;
    var localPart;
    if (cIndex < 0) {
      prefix = '';
      localPart = prefixedName;
      var tmp0_elvis_lhs = namespaceContext.nh8('');
      namespace = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      prefix = prefixedName.substring(0, cIndex);
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = cIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      localPart = prefixedName.substring(tmp1_substring);
      var tmp1_elvis_lhs = namespaceContext.nh8(prefix);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw SerializationException_init_$Create$('Missing namespace for prefix ' + prefix + ' in QName value');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      namespace = tmp;
    }
    return new QName(namespace, localPart, prefix);
  };
  protoOf(XmlQNameSerializer).nhc = function (encoder, value) {
    if (!isInterface(encoder, XmlOutput))
      throw SerializationException_init_$Create$('QNameXmlSerializer only makes sense in an XML context');
    // Inline function 'nl.adaptivity.xmlutil.prefix' call
    var tmp = value.thc();
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.localPart' call
    tmp$ret$1 = value.shc();
    encoder.tgs(tmp + ':' + tmp$ret$1);
  };
  protoOf(XmlQNameSerializer).lgo = function (encoder, value) {
    return this.nhc(encoder, value instanceof QName ? value : THROW_CCE());
  };
  var XmlQNameSerializer_instance;
  function XmlQNameSerializer_getInstance() {
    if (XmlQNameSerializer_instance == null)
      new XmlQNameSerializer();
    return XmlQNameSerializer_instance;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    element$factory();
    return $this.khm_1.s();
  }
  function XmlRootDescriptor$element$delegate$lambda($config, $serializersModule, this$0) {
    return function () {
      return Companion_getInstance_8().ei7($config, $serializersModule, this$0.fhl_1, VOID, false);
    };
  }
  function XmlRootDescriptor(config, serializersModule, descriptor, tagName) {
    XmlDescriptor.call(this, config.uhk_1, DetachedParent_init_$Create$(descriptor, tagName, true, null));
    var tmp = this;
    tmp.khm_1 = lazy(XmlRootDescriptor$element$delegate$lambda(config, serializersModule, this));
  }
  protoOf(XmlRootDescriptor).ci3 = function () {
    return true;
  };
  protoOf(XmlRootDescriptor).hhq = function () {
    return _get_element__z0t21h(this).hhq();
  };
  protoOf(XmlRootDescriptor).lhl = function () {
    var useNameInfo = this.hhl_1;
    return ensureNotNull(useNameInfo.ai5_1);
  };
  protoOf(XmlRootDescriptor).uhj = function () {
    return OutputKind_Mixed_getInstance();
  };
  protoOf(XmlRootDescriptor).vgp = function (index) {
    if (!(index === 0))
      throw IndexOutOfBoundsException_init_$Create$('There is exactly one child to a root tag');
    return _get_element__z0t21h(this);
  };
  protoOf(XmlRootDescriptor).rgp = function () {
    return 1;
  };
  protoOf(XmlRootDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlRootDescriptor.appendTo.<anonymous>' call
    builder.b('<root>(');
    this.vgp(0).fi7(builder, indent + 4 | 0, seen);
    builder.b(')');
  };
  protoOf(XmlRootDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlRootDescriptor))
      THROW_CCE();
    return _get_element__z0t21h(this).equals(_get_element__z0t21h(other));
  };
  protoOf(XmlRootDescriptor).hashCode = function () {
    var result = protoOf(XmlDescriptor).hashCode.call(this);
    result = imul(31, result) + _get_element__z0t21h(this).hashCode() | 0;
    return result;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).hi7 = function (config, serializersModule, serializerParent, tagParent, canBeAttribute) {
    var overridenSerializer = config.uhk_1.ri5(serializerParent, tagParent);
    var elementSerialDescriptor;
    var effectiveSerializerParent;
    var effectiveTagParent;
    if (overridenSerializer == null) {
      elementSerialDescriptor = serializerParent.ei6();
      effectiveSerializerParent = serializerParent;
      effectiveTagParent = tagParent;
    } else {
      elementSerialDescriptor = overridenSerializer.kgo();
      effectiveSerializerParent = serializerParent.ii7(VOID, VOID, overridenSerializer);
      effectiveTagParent = tagParent.ii7(VOID, VOID, overridenSerializer);
    }
    var preserveSpace = config.uhk_1.vi5(serializerParent, tagParent);
    var tmp1_subject = elementSerialDescriptor.tgp();
    var tmp;
    if (equals(tmp1_subject, ENUM_getInstance())) {
      tmp = true;
    } else {
      tmp = tmp1_subject instanceof PrimitiveKind;
    }
    if (tmp)
      return new XmlPrimitiveDescriptor(config.uhk_1, effectiveSerializerParent, effectiveTagParent, canBeAttribute, preserveSpace);
    else {
      if (equals(tmp1_subject, LIST_getInstance()))
        return new XmlListDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent);
      else {
        if (equals(tmp1_subject, MAP_getInstance())) {
          var tmp2_subject = serializerParent.fi6();
          return (tmp2_subject == null ? -1 : tmp2_subject.h7_1) === 1 ? new XmlAttributeMapDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent) : new XmlMapDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent);
        } else {
          if (tmp1_subject instanceof PolymorphicKind)
            return new XmlPolymorphicDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent);
        }
      }
    }
    return (config.xhk_1 ? elementSerialDescriptor.sgp() : false) ? new XmlInlineDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent, canBeAttribute) : new XmlCompositeDescriptor(config, serializersModule, effectiveSerializerParent, effectiveTagParent, preserveSpace);
  };
  protoOf(Companion_2).ei7 = function (config, serializersModule, serializerParent, tagParent, canBeAttribute, $super) {
    tagParent = tagParent === VOID ? serializerParent : tagParent;
    return $super === VOID ? this.hi7(config, serializersModule, serializerParent, tagParent, canBeAttribute) : $super.hi7.call(this, config, serializersModule, serializerParent, tagParent, canBeAttribute);
  };
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function XmlDescriptor$tagName$delegate$lambda($policy, $serializerParent, this$0) {
    return function () {
      return $policy.ii5($serializerParent, this$0.fhl_1, this$0.uhj(), this$0.hhl_1);
    };
  }
  function XmlDescriptor(policy, serializerParent, tagParent) {
    Companion_getInstance_8();
    tagParent = tagParent === VOID ? serializerParent : tagParent;
    this.fhl_1 = tagParent;
    this.ghl_1 = serializerParent.ji7();
    this.hhl_1 = serializerParent.ti5();
    this.ihl_1 = serializerParent.gi6();
    this.jhl_1 = policy.bi6(serializerParent);
    var tmp = this;
    tmp.khl_1 = lazy(XmlDescriptor$tagName$delegate$lambda(policy, serializerParent, this));
  }
  protoOf(XmlDescriptor).mhl = function () {
    return this.uhj().h7_1 === 4 ? this.vgp(0).mhl() : this.uhj();
  };
  protoOf(XmlDescriptor).si6 = function () {
    return this.ihl_1;
  };
  protoOf(XmlDescriptor).dhq = function () {
    return false;
  };
  protoOf(XmlDescriptor).lhl = function () {
    // Inline function 'kotlin.getValue' call
    tagName$factory();
    return this.khl_1.s();
  };
  protoOf(XmlDescriptor).ii1 = function (fallback) {
    var tmp0_elvis_lhs = this.ghl_1;
    var tmp = tmp0_elvis_lhs == null ? fallback : tmp0_elvis_lhs;
    return isInterface(tmp, SerializationStrategy) ? tmp : THROW_CCE();
  };
  protoOf(XmlDescriptor).ihq = function (fallback) {
    var tmp0_elvis_lhs = this.ghl_1;
    var tmp = tmp0_elvis_lhs == null ? fallback : tmp0_elvis_lhs;
    return isInterface(tmp, DeserializationStrategy) ? tmp : THROW_CCE();
  };
  protoOf(XmlDescriptor).thn = function () {
    return this.si6().hi6_1;
  };
  protoOf(XmlDescriptor).rgp = function () {
    return this.si6().hi6_1.rgp();
  };
  protoOf(XmlDescriptor).hi4 = function () {
    return this.si6().hi6_1.tgp();
  };
  protoOf(XmlDescriptor).vgp = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('There are no children');
  };
  protoOf(XmlDescriptor).gi7 = function (builder, indent, seen) {
    var tmp;
    if (this instanceof XmlListDescriptor) {
      tmp = true;
    } else {
      tmp = this instanceof XmlPrimitiveDescriptor;
    }
    if (tmp) {
      this.fi7(builder, indent, seen);
    } else {
      if (seen.n(this.thn().pgp())) {
        builder.b(this.lhl().toString()).b('<...> = ').b(this.uhj().g7_1);
      } else {
        seen.a(this.thn().pgp());
        this.fi7(builder, indent, seen);
      }
    }
    return builder;
  };
  protoOf(XmlDescriptor).toString = function () {
    var tmp = StringBuilder_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return this.gi7(tmp, 0, tmp$ret$0).toString();
  };
  protoOf(XmlDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof XmlDescriptor))
      THROW_CCE();
    if (!equals(this.ghl_1, other.ghl_1))
      return false;
    if (!this.hhl_1.equals(other.hhl_1))
      return false;
    return this.si6().equals(other.si6());
  };
  protoOf(XmlDescriptor).hashCode = function () {
    var result = this.hhl_1.hashCode();
    result = imul(31, result) + this.si6().hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.ghl_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function _get_children__my42wc($this) {
    // Inline function 'kotlin.getValue' call
    children$factory();
    return $this.ahm_1.s();
  }
  function XmlPolymorphicDescriptor$children$delegate$lambda(this$0, $config, $serializersModule) {
    return function () {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this$0.rgp();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$_0(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlPolymorphicDescriptor.children$delegate.<anonymous>.<anonymous>' call
          var canBeAttribute = index === 0;
          var overrideOutputKind = canBeAttribute ? OutputKind_Attribute_getInstance() : OutputKind_Element_getInstance();
          var parent = new ParentInfo(this$0, index, VOID, overrideOutputKind);
          tmp$ret$0 = Companion_getInstance_8().ei7($config, $serializersModule, parent, VOID, canBeAttribute);
          list.a(tmp$ret$0);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$1 = list;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    };
  }
  function XmlPolymorphicDescriptor(config, serializersModule, serializerParent, tagParent) {
    XmlValueDescriptor.call(this, config.uhk_1, serializerParent, tagParent);
    this.whl_1 = config.uhk_1.pi5(serializerParent, tagParent, false);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = tagParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlPolyChildren) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var xmlPolyChildren = tmp$ret$0;
    var polyAttrName = config.uhk_1.li5(serializerParent, tagParent);
    this.xhl_1 = config.uhk_1.ki5(serializerParent, tagParent) ? TRANSPARENT_getInstance() : polyAttrName == null ? TAG_getInstance() : new ATTR(polyAttrName);
    var tmp = this;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp1_also = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlPolymorphicDescriptor.<anonymous>' call
    var tmp0_subject = this.xhl_1;
    var tmp_0;
    if (equals(tmp0_subject, TRANSPARENT_getInstance())) {
      tmp_0 = null;
    } else {
      if (equals(tmp0_subject, TAG_getInstance())) {
        tmp_0 = Companion_getInstance_8().ei7(config, serializersModule, new ParentInfo(this, 1), VOID, false).lhl();
      } else {
        if (tmp0_subject instanceof ATTR) {
          tmp_0 = this.lhl();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var qName = tmp_0;
    if (!(xmlPolyChildren == null)) {
      var tmp1_safe_receiver = tagParent.kgo();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.thn();
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.pgp();
      var tmp_1 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
      var tmp4_safe_receiver = tagParent.kgo();
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.lhl();
      var baseName = new ActualNameInfo(tmp_1, tmp5_elvis_lhs == null ? QName_init_$Create$_0('', '') : tmp5_elvis_lhs);
      var tmp6_elvis_lhs = get_capturedKClass(this.thn());
      var baseClass = tmp6_elvis_lhs == null ? PrimitiveClasses_getInstance().bi() : tmp6_elvis_lhs;
      var indexedObject = xmlPolyChildren.ki7_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var polyChild = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var childInfo = polyTagName(baseName, polyChild, baseClass, serializersModule);
        var childSerializerParent = DetachedParent_init_$Create$(childInfo.dhk_1, childInfo.chk_1, false);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = childInfo.ehk();
        var tmp1_set = Companion_getInstance_8().hi7(config, serializersModule, childSerializerParent, tagParent, false);
        tmp1_also.a5(tmp0_set, tmp1_set);
      }
    } else if (equals(this.thn().tgp(), SEALED_getInstance())) {
      var d = this.thn().vgp(1);
      var inductionVariable_0 = 0;
      var last_0 = d.rgp();
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var childDesc = d.vgp(i);
          var childSerializerParent_0 = DetachedParent_init_$Create$(childDesc, qName, false);
          // Inline function 'kotlin.collections.set' call
          var tmp2_set = childDesc.pgp();
          var tmp3_set = Companion_getInstance_8().hi7(config, serializersModule, childSerializerParent_0, tagParent, false);
          tmp1_also.a5(tmp2_set, tmp3_set);
        }
         while (inductionVariable_0 < last_0);
    } else {
      var childDescriptors = getPolymorphicDescriptors(serializersModule, this.thn());
      var tmp9_iterator = childDescriptors.d();
      while (tmp9_iterator.e()) {
        var childDesc_0 = tmp9_iterator.f();
        var childSerializerParent_1 = DetachedParent_init_$Create$(childDesc_0, qName, false, this.whl_1);
        // Inline function 'kotlin.collections.set' call
        var tmp4_set = childDesc_0.pgp();
        var tmp5_set = Companion_getInstance_8().hi7(config, serializersModule, childSerializerParent_1, tagParent, false);
        tmp1_also.a5(tmp4_set, tmp5_set);
      }
    }
    tmp.yhl_1 = tmp1_also;
    var tmp_2 = this;
    var tmp0_safe_receiver = tagParent.kgo();
    var tmp1_safe_receiver_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.thn();
    var tmp3_elvis_lhs_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.pgp();
    var tmp_3;
    if (tmp3_elvis_lhs_0 == null) {
      var tmp2_safe_receiver_0 = get_capturedKClass(this.thn());
      tmp_3 = tmp2_safe_receiver_0 == null ? null : get_serialName(tmp2_safe_receiver_0);
    } else {
      tmp_3 = tmp3_elvis_lhs_0;
    }
    tmp_2.zhl_1 = tmp_3;
    var tmp_4 = this;
    tmp_4.ahm_1 = lazy(XmlPolymorphicDescriptor$children$delegate$lambda(this, config, serializersModule));
  }
  protoOf(XmlPolymorphicDescriptor).ci3 = function () {
    return false;
  };
  protoOf(XmlPolymorphicDescriptor).hhq = function () {
    return false;
  };
  protoOf(XmlPolymorphicDescriptor).uhj = function () {
    return this.whl_1;
  };
  protoOf(XmlPolymorphicDescriptor).hhs = function () {
    return equals(this.xhl_1, TRANSPARENT_getInstance());
  };
  protoOf(XmlPolymorphicDescriptor).vgp = function (index) {
    return _get_children__my42wc(this).m(index);
  };
  protoOf(XmlPolymorphicDescriptor).whz = function (typeName) {
    var tmp0_elvis_lhs = this.yhl_1.z2(typeName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new XmlSerialException('Missing polymorphic information for ' + typeName);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(XmlPolymorphicDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlPolymorphicDescriptor.appendTo.<anonymous>' call
    builder.b(this.lhl().toString());
    if (this.hhs()) {
      builder.b(' <~(');
      var tmp0_iterator = this.yhl_1.b3().d();
      while (tmp0_iterator.e()) {
        var polyVal = tmp0_iterator.f();
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        polyVal.gi7(builder, indent + 4 | 0, seen).i9(_Char___init__impl__6a9atx(44)).i9(_Char___init__impl__6a9atx(10));
      }
    } else {
      builder.b(' (');
      builder.b(' <poly> [');
      var tmp1_iterator = this.yhl_1.b3().d();
      while (tmp1_iterator.e()) {
        var polyVal_0 = tmp1_iterator.f();
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        polyVal_0.gi7(builder, indent + 4 | 0, seen).i9(_Char___init__impl__6a9atx(44)).i9(_Char___init__impl__6a9atx(10));
      }
      builder.i9(_Char___init__impl__6a9atx(93));
    }
  };
  protoOf(XmlPolymorphicDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlValueDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlPolymorphicDescriptor))
      THROW_CCE();
    if (!this.whl_1.equals(other.whl_1))
      return false;
    if (!equals(this.xhl_1, other.xhl_1))
      return false;
    if (!equals(this.yhl_1, other.yhl_1))
      return false;
    if (!(this.zhl_1 == other.zhl_1))
      return false;
    return true;
  };
  protoOf(XmlPolymorphicDescriptor).hashCode = function () {
    var result = protoOf(XmlValueDescriptor).hashCode.call(this);
    result = imul(31, result) + this.whl_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.xhl_1) | 0;
    result = imul(31, result) + hashCode(this.yhl_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.zhl_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DetachedParent_init_$Init$(serialDescriptor, useName, isDocumentRoot, outputKind, $this) {
    outputKind = outputKind === VOID ? null : outputKind;
    var tmp$ret$1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.DetachedParent.<init>.<anonymous>' call
    var tmp0_safe_receiver = get_capturedKClass(serialDescriptor);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_serialName(tmp0_safe_receiver);
    tmp$ret$1 = tmp1_elvis_lhs == null ? serialDescriptor.pgp() : tmp1_elvis_lhs;
    DetachedParent.call($this, serialDescriptor, new DeclaredNameInfo(tmp$ret$1, useName), isDocumentRoot, outputKind);
    return $this;
  }
  function DetachedParent_init_$Create$(serialDescriptor, useName, isDocumentRoot, outputKind) {
    return DetachedParent_init_$Init$(serialDescriptor, useName, isDocumentRoot, outputKind, objectCreate(protoOf(DetachedParent)));
  }
  function DetachedParent(serialDescriptor, elementUseNameInfo, isDocumentRoot, outputKind, overriddenSerializer) {
    outputKind = outputKind === VOID ? null : outputKind;
    overriddenSerializer = overriddenSerializer === VOID ? null : overriddenSerializer;
    this.li7_1 = serialDescriptor;
    this.mi7_1 = elementUseNameInfo;
    this.ni7_1 = isDocumentRoot;
    this.oi7_1 = overriddenSerializer;
    this.pi7_1 = outputKind;
  }
  protoOf(DetachedParent).ti5 = function () {
    return this.mi7_1;
  };
  protoOf(DetachedParent).ji7 = function () {
    return this.oi7_1;
  };
  protoOf(DetachedParent).qi7 = function (useNameInfo, useOutputKind, overriddenSerializer) {
    return new DetachedParent(this.li7_1, useNameInfo, this.ni7_1, useOutputKind, overriddenSerializer);
  };
  protoOf(DetachedParent).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof DetachedParent))
      THROW_CCE();
    if (!equals(this.li7_1, other.li7_1))
      return false;
    if (!this.mi7_1.equals(other.mi7_1))
      return false;
    if (!(this.ni7_1 === other.ni7_1))
      return false;
    if (!equals(this.oi7_1, other.oi7_1))
      return false;
    if (!equals(this.pi7_1, other.pi7_1))
      return false;
    return true;
  };
  protoOf(DetachedParent).hashCode = function () {
    var result = hashCode(this.li7_1);
    result = imul(31, result) + this.mi7_1.hashCode() | 0;
    result = imul(31, result) + (this.ni7_1 | 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.oi7_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.pi7_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(DetachedParent).kgo = function () {
    return null;
  };
  protoOf(DetachedParent).gi6 = function () {
    var tmp0_safe_receiver = this.oi7_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kgo();
    return new XmlTypeDescriptor(tmp1_elvis_lhs == null ? this.li7_1 : tmp1_elvis_lhs, this.zi5());
  };
  protoOf(DetachedParent).di6 = function () {
    return emptyList();
  };
  protoOf(DetachedParent).ei6 = function () {
    var tmp0_safe_receiver = this.oi7_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kgo();
    return tmp1_elvis_lhs == null ? this.li7_1 : tmp1_elvis_lhs;
  };
  protoOf(DetachedParent).fi6 = function () {
    return this.pi7_1;
  };
  protoOf(DetachedParent).zi5 = function () {
    var tmp0_safe_receiver = this.mi7_1.ai5_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toNamespace(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? new NamespaceImpl('', '') : tmp1_elvis_lhs;
  };
  function SafeParentInfo() {
  }
  function SafeXmlDescriptor() {
  }
  function _get_childDescriptor__xb3z96($this) {
    // Inline function 'kotlin.getValue' call
    childDescriptor$factory();
    return $this.xhu_1.s();
  }
  function XmlListDescriptor$childDescriptor$delegate$lambda($tagParent, this$0, $config, $serializersModule) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
        var tmp0_firstOrNull = $tagParent.di6();
        var tmp0_iterator = tmp0_firstOrNull.d();
        while (tmp0_iterator.e()) {
          var e = tmp0_iterator.f();
          if (e instanceof XmlChildrenName) {
            tmp$ret$0 = e;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var childrenName = tmp0_safe_receiver == null ? null : toQName_0(tmp0_safe_receiver);
      var tmp;
      if (!(childrenName == null)) {
        var tmp$ret$1;
        // Inline function 'nl.adaptivity.xmlutil.localPart' call
        tmp$ret$1 = childrenName.shc();
        tmp = new DeclaredNameInfo(tmp$ret$1, childrenName);
      } else if (!this$0.bho()) {
        tmp = null;
      } else {
        tmp = $tagParent.ti5();
      }
      var useNameInfo = tmp;
      return Companion_getInstance_8().hi7($config, $serializersModule, new ParentInfo(this$0, 0, useNameInfo, this$0.vhu_1), $tagParent, false);
    };
  }
  function XmlListDescriptor(config, serializersModule, serializerParent, tagParent) {
    tagParent = tagParent === VOID ? serializerParent : tagParent;
    XmlListLikeDescriptor.call(this, config, serializerParent, tagParent);
    var tmp = this;
    var tmp_0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = tagParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlElement) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ri7_1) === false) {
      tmp_0 = OutputKind_Attribute_getInstance();
    } else {
      if (!this.bho()) {
        tmp_0 = OutputKind_Element_getInstance();
      } else {
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
          var tmp0_iterator_0 = tagParent.di6().d();
          while (tmp0_iterator_0.e()) {
            var e_0 = tmp0_iterator_0.f();
            if (e_0 instanceof XmlValue) {
              tmp$ret$1 = e_0;
              break $l$block_0;
            }
          }
          tmp$ret$1 = null;
        }
        if (!(tmp$ret$1 == null)) {
          tmp_1 = config.uhk_1.ki5(DetachedParent_init_$Create$(this.thn().vgp(0), null, false), tagParent);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = OutputKind_Mixed_getInstance();
        } else {
          tmp_0 = OutputKind_Element_getInstance();
        }
      }
    }
    tmp.vhu_1 = tmp_0;
    var tmp_2 = this;
    var tmp_3;
    if (this.vhu_1.h7_1 === 1) {
      tmp_3 = config.uhk_1.ci6(new ParentInfo(this, 0, this.hhl_1, this.vhu_1), tagParent);
    } else {
      // Inline function 'kotlin.emptyArray' call
      tmp_3 = [];
    }
    tmp_2.whu_1 = tmp_3;
    var tmp_4 = this;
    tmp_4.xhu_1 = lazy(XmlListDescriptor$childDescriptor$delegate$lambda(tagParent, this, config, serializersModule));
  }
  protoOf(XmlListDescriptor).uhj = function () {
    return this.vhu_1;
  };
  protoOf(XmlListDescriptor).vgp = function (index) {
    return _get_childDescriptor__xb3z96(this);
  };
  protoOf(XmlListDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlListDescriptor.appendTo.<anonymous>' call
    builder.b(this.lhl().toString());
    if (this.bho()) {
      builder.b(': EludedList<');
      _get_childDescriptor__xb3z96(this).gi7(builder, indent, seen);
      builder.i9(_Char___init__impl__6a9atx(62));
    } else {
      builder.b(': ExplicitList<');
      _get_childDescriptor__xb3z96(this).gi7(builder, indent, seen);
      builder.i9(_Char___init__impl__6a9atx(62));
    }
  };
  protoOf(XmlListDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlListLikeDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlListDescriptor))
      THROW_CCE();
    if (!(this.bho() === other.bho()))
      return false;
    if (!this.vhu_1.equals(other.vhu_1))
      return false;
    return _get_childDescriptor__xb3z96(this).equals(_get_childDescriptor__xb3z96(other));
  };
  protoOf(XmlListDescriptor).hashCode = function () {
    var result = protoOf(XmlListLikeDescriptor).hashCode.call(this);
    result = imul(31, result) + (this.bho() | 0) | 0;
    result = imul(31, result) + this.vhu_1.hashCode() | 0;
    result = imul(31, result) + _get_childDescriptor__xb3z96(this).hashCode() | 0;
    return result;
  };
  function XmlPrimitiveDescriptor(policy, serializerParent, tagParent, canBeAttribute, preserveSpace) {
    XmlValueDescriptor.call(this, policy, serializerParent, tagParent);
    this.bi8_1 = preserveSpace;
    this.ci8_1 = policy.pi5(serializerParent, tagParent, canBeAttribute);
  }
  protoOf(XmlPrimitiveDescriptor).hhq = function () {
    return this.bi8_1;
  };
  protoOf(XmlPrimitiveDescriptor).ci3 = function () {
    return false;
  };
  protoOf(XmlPrimitiveDescriptor).uhj = function () {
    return this.ci8_1;
  };
  protoOf(XmlPrimitiveDescriptor).fi7 = function (builder, indent, seen) {
    builder.b(this.lhl().toString()).i9(_Char___init__impl__6a9atx(58)).b(this.tgp().toString()).b(' = ').b(this.ci8_1.toString());
  };
  protoOf(XmlPrimitiveDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlValueDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlPrimitiveDescriptor))
      THROW_CCE();
    return this.ci8_1.equals(other.ci8_1);
  };
  protoOf(XmlPrimitiveDescriptor).hashCode = function () {
    var result = protoOf(XmlValueDescriptor).hashCode.call(this);
    result = imul(31, result) + this.ci8_1.hashCode() | 0;
    return result;
  };
  function XmlAttributeMapDescriptor$keyDescriptor$delegate$lambda($config, $serializersModule, this$0, $tagParent) {
    return function () {
      return Companion_getInstance_8().hi7($config, $serializersModule, new ParentInfo(this$0, 0, VOID, OutputKind_Text_getInstance()), $tagParent, true);
    };
  }
  function XmlAttributeMapDescriptor$valueDescriptor$delegate$lambda($config, $serializersModule, this$0, $tagParent) {
    return function () {
      return Companion_getInstance_8().hi7($config, $serializersModule, new ParentInfo(this$0, 1, VOID, OutputKind_Text_getInstance()), $tagParent, true);
    };
  }
  function XmlAttributeMapDescriptor(config, serializersModule, serializerParent, tagParent) {
    XmlValueDescriptor.call(this, config.uhk_1, serializerParent, tagParent);
    var tmp = this;
    tmp.rht_1 = lazy(XmlAttributeMapDescriptor$keyDescriptor$delegate$lambda(config, serializersModule, this, tagParent));
    var tmp_0 = this;
    tmp_0.sht_1 = lazy(XmlAttributeMapDescriptor$valueDescriptor$delegate$lambda(config, serializersModule, this, tagParent));
  }
  protoOf(XmlAttributeMapDescriptor).ci3 = function () {
    return false;
  };
  protoOf(XmlAttributeMapDescriptor).hhq = function () {
    return true;
  };
  protoOf(XmlAttributeMapDescriptor).uhj = function () {
    return OutputKind_Attribute_getInstance();
  };
  protoOf(XmlAttributeMapDescriptor).di8 = function () {
    // Inline function 'kotlin.getValue' call
    keyDescriptor$factory();
    return this.rht_1.s();
  };
  protoOf(XmlAttributeMapDescriptor).tht = function () {
    // Inline function 'kotlin.getValue' call
    valueDescriptor$factory();
    return this.sht_1.s();
  };
  protoOf(XmlAttributeMapDescriptor).rgp = function () {
    return 2;
  };
  protoOf(XmlAttributeMapDescriptor).vgp = function (index) {
    return (index % 2 | 0) === 0 ? this.di8() : this.tht();
  };
  protoOf(XmlAttributeMapDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlAttributeMapDescriptor.appendTo.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    builder.b(this.lhl().toString()).b(' (').i9(_Char___init__impl__6a9atx(10));
    appendIndent(builder, indent);
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this.di8().gi7(builder, indent + 4 | 0, seen).b(',').i9(_Char___init__impl__6a9atx(10));
    appendIndent(builder, indent);
    this.tht().gi7(builder, indent + 4 | 0, seen).i9(_Char___init__impl__6a9atx(41));
  };
  function _get_keyDescriptor__hu7alf($this) {
    // Inline function 'kotlin.getValue' call
    keyDescriptor$factory_0();
    return $this.lho_1.s();
  }
  function _get_valueDescriptor__8ouq3z($this) {
    // Inline function 'kotlin.getValue' call
    valueDescriptor$factory_0();
    return $this.mho_1.s();
  }
  function XmlMapDescriptor$isValueCollapsed$delegate$lambda($config, $serializerParent, this$0) {
    return function () {
      return $config.uhk_1.ai6($serializerParent, _get_valueDescriptor__8ouq3z(this$0));
    };
  }
  function XmlMapDescriptor$entryName$delegate$lambda(this$0, $config, $serializerParent) {
    return function () {
      var tmp;
      if (this$0.nho()) {
        tmp = _get_valueDescriptor__8ouq3z(this$0).lhl();
      } else {
        tmp = $config.uhk_1.yi5($serializerParent, this$0.bho());
      }
      return tmp;
    };
  }
  function XmlMapDescriptor$keyDescriptor$delegate$lambda($config, $serializerParent, this$0, $tagParent, $serializersModule) {
    return function () {
      var keyNameInfo = $config.uhk_1.wi5($serializerParent);
      var parentInfo = new ParentInfo(this$0, 0, keyNameInfo);
      var keyTagParent = new InjectedParentTag(0, this$0.si6().m(0), keyNameInfo, $tagParent.zi5());
      return Companion_getInstance_8().hi7($config, $serializersModule, parentInfo, keyTagParent, true);
    };
  }
  function XmlMapDescriptor$valueDescriptor$delegate$lambda($config, $serializerParent, this$0, $tagParent, $serializersModule) {
    return function () {
      var valueNameInfo = $config.uhk_1.xi5($serializerParent, this$0.bho());
      var parentInfo = new ParentInfo(this$0, 1, valueNameInfo, OutputKind_Element_getInstance());
      var valueTagParent = new InjectedParentTag(0, this$0.si6().m(1), valueNameInfo, $tagParent.zi5());
      return Companion_getInstance_8().hi7($config, $serializersModule, parentInfo, valueTagParent, true);
    };
  }
  function XmlMapDescriptor(config, serializersModule, serializerParent, tagParent) {
    tagParent = tagParent === VOID ? serializerParent : tagParent;
    XmlListLikeDescriptor.call(this, config, serializerParent, tagParent);
    var tmp = this;
    tmp.jho_1 = lazy(XmlMapDescriptor$isValueCollapsed$delegate$lambda(config, serializerParent, this));
    var tmp_0 = this;
    tmp_0.kho_1 = lazy(XmlMapDescriptor$entryName$delegate$lambda(this, config, serializerParent));
    var tmp_1 = this;
    tmp_1.lho_1 = lazy(XmlMapDescriptor$keyDescriptor$delegate$lambda(config, serializerParent, this, tagParent, serializersModule));
    var tmp_2 = this;
    tmp_2.mho_1 = lazy(XmlMapDescriptor$valueDescriptor$delegate$lambda(config, serializerParent, this, tagParent, serializersModule));
  }
  protoOf(XmlMapDescriptor).uhj = function () {
    return OutputKind_Element_getInstance();
  };
  protoOf(XmlMapDescriptor).nho = function () {
    // Inline function 'kotlin.getValue' call
    isValueCollapsed$factory();
    return this.jho_1.s();
  };
  protoOf(XmlMapDescriptor).thp = function () {
    // Inline function 'kotlin.getValue' call
    entryName$factory();
    return this.kho_1.s();
  };
  protoOf(XmlMapDescriptor).vgp = function (index) {
    return (index % 2 | 0) === 0 ? _get_keyDescriptor__hu7alf(this) : _get_valueDescriptor__8ouq3z(this);
  };
  protoOf(XmlMapDescriptor).fi7 = function (builder, indent, seen) {
    builder.b(this.lhl().toString()).b(this.bho() ? ': TransparentMap<' : ': ExplicitMap<');
    this.vgp(0).fi7(builder, indent + 4 | 0, seen);
    builder.b(', ');
    this.vgp(1).fi7(builder, indent + 4 | 0, seen);
    builder.i9(_Char___init__impl__6a9atx(62));
  };
  function _get_child__j05w3v($this) {
    // Inline function 'kotlin.getValue' call
    child$factory();
    return $this.ni8_1.s();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pi8_1 = [serializer_1(Companion_getInstance_1()).kgo(), serializer_2(Companion_getInstance_2()).kgo(), serializer_3(Companion_getInstance_3()).kgo(), serializer_4(Companion_getInstance_4()).kgo()];
  }
  var Companion_instance_3;
  function Companion_getInstance_9() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function XmlInlineDescriptor$child$delegate$lambda(this$0, $tagParent, $config, $serializersModule, $canBeAttribute) {
    return function () {
      var tmp;
      if (!(this$0.hhl_1.ai5_1 == null)) {
        tmp = this$0.hhl_1;
      } else if (!(this$0.si6().ii6_1.ai5_1 == null)) {
        tmp = this$0.si6().ii6_1;
      } else {
        var serialName = this$0.si6().hi6_1.xgp(0);
        var tmp$ret$0;
        $l$block: {
          // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
          var tmp0_firstOrNull = this$0.si6().hi6_1.ugp(0);
          var tmp0_iterator = tmp0_firstOrNull.d();
          while (tmp0_iterator.e()) {
            var e = tmp0_iterator.f();
            if (e instanceof XmlSerialName) {
              tmp$ret$0 = e;
              break $l$block;
            }
          }
          tmp$ret$0 = null;
        }
        var tmp0_safe_receiver = tmp$ret$0;
        var qName = tmp0_safe_receiver == null ? null : toQName(tmp0_safe_receiver, serialName, $tagParent.zi5());
        var childUseNameInfo = new DeclaredNameInfo(serialName, qName);
        tmp = !(childUseNameInfo.ai5_1 == null) ? childUseNameInfo : this$0.hhl_1;
      }
      var effectiveUseNameInfo = tmp;
      var useParentInfo = new ParentInfo(this$0, 0, effectiveUseNameInfo);
      return Companion_getInstance_8().hi7($config, $serializersModule, useParentInfo, $tagParent, $canBeAttribute);
    };
  }
  function XmlInlineDescriptor$isUnsigned$delegate$lambda(this$0) {
    return function () {
      return contains(Companion_getInstance_9().pi8_1, this$0.thn()) ? true : _get_child__j05w3v(this$0).dhq();
    };
  }
  function XmlInlineDescriptor(config, serializersModule, serializerParent, tagParent, canBeAttribute) {
    Companion_getInstance_9();
    XmlValueDescriptor.call(this, config.uhk_1, serializerParent, tagParent);
    if (!serializerParent.ei6().sgp()) {
      throw AssertionError_init_$Create$('InlineDescriptors are only valid for inline classes');
    }
    var tmp = this;
    tmp.ni8_1 = lazy(XmlInlineDescriptor$child$delegate$lambda(this, tagParent, config, serializersModule, canBeAttribute));
    var tmp_0 = this;
    tmp_0.oi8_1 = lazy(XmlInlineDescriptor$isUnsigned$delegate$lambda(this));
  }
  protoOf(XmlInlineDescriptor).ci3 = function () {
    return true;
  };
  protoOf(XmlInlineDescriptor).hhq = function () {
    return _get_child__j05w3v(this).hhq();
  };
  protoOf(XmlInlineDescriptor).uhj = function () {
    return _get_child__j05w3v(this).uhj();
  };
  protoOf(XmlInlineDescriptor).lhl = function () {
    return _get_child__j05w3v(this).lhl();
  };
  protoOf(XmlInlineDescriptor).vgp = function (index) {
    if (!(index === 0))
      throw IllegalArgumentException_init_$Create$('Inline classes only have one child');
    return _get_child__j05w3v(this);
  };
  protoOf(XmlInlineDescriptor).dhq = function () {
    // Inline function 'kotlin.getValue' call
    isUnsigned$factory();
    return this.oi8_1.s();
  };
  protoOf(XmlInlineDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlInlineDescriptor.appendTo.<anonymous>' call
    builder.b(this.lhl().toString());
    builder.b(': Inline (');
    _get_child__j05w3v(this).gi7(builder, indent + 4 | 0, seen);
    builder.i9(_Char___init__impl__6a9atx(41));
  };
  protoOf(XmlInlineDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlValueDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlInlineDescriptor))
      THROW_CCE();
    return this.dhq() === other.dhq();
  };
  protoOf(XmlInlineDescriptor).hashCode = function () {
    var result = protoOf(XmlValueDescriptor).hashCode.call(this);
    result = imul(31, result) + (this.dhq() | 0) | 0;
    return result;
  };
  function _get_children__my42wc_0($this) {
    // Inline function 'kotlin.getValue' call
    children$factory_0();
    return $this.zi2_1.s();
  }
  function getElementDescriptors($this, config, serializersModule, initialChildReorderInfo) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = $this.rgp();
    var descriptors = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var tmp0_iterator = sequenceStarts(initialChildReorderInfo, $this.rgp()).d();
    while (tmp0_iterator.e()) {
      var orderedSequence = tmp0_iterator.f();
      var tmp1_iterator = flatten(orderedSequence).d();
      while (tmp1_iterator.e()) {
        var element = tmp1_iterator.f();
        getElementDescriptors$ensureDescriptor(element, descriptors, $this, config, serializersModule);
      }
    }
    return toList_1(requireNoNulls(descriptors));
  }
  function createElementDescriptor($this, config, serializersModule, index, canBeAttribute) {
    return Companion_getInstance_8().ei7(config, serializersModule, new ParentInfo($this, index), VOID, canBeAttribute);
  }
  function getElementDescriptors$ensureDescriptor(_this__u8e3s4, descriptors, this$0, $config, $serializersModule) {
    var tmp0_elvis_lhs = descriptors[_this__u8e3s4.mi6_1];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.getElementDescriptors.ensureDescriptor.<anonymous>' call
      var tmp_0;
      if (_this__u8e3s4.ni6_1.l()) {
        tmp_0 = true;
      } else {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp0_all = _this__u8e3s4.ni6_1;
          var tmp_1;
          if (isInterface(tmp0_all, Collection)) {
            tmp_1 = tmp0_all.l();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var tmp0_iterator = tmp0_all.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.getElementDescriptors.ensureDescriptor.<anonymous>.<anonymous>' call
            if (!getElementDescriptors$ensureDescriptor(element, descriptors, this$0, $config, $serializersModule).uhj().equals(OutputKind_Attribute_getInstance())) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
          tmp$ret$0 = true;
        }
        tmp_0 = tmp$ret$0;
      }
      var canBeAttribute = tmp_0;
      // Inline function 'kotlin.also' call
      var tmp1_also = createElementDescriptor(this$0, $config, $serializersModule, _this__u8e3s4.mi6_1, canBeAttribute);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.getElementDescriptors.ensureDescriptor.<anonymous>.<anonymous>' call
      descriptors[_this__u8e3s4.mi6_1] = tmp1_also;
      tmp = tmp1_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function XmlCompositeDescriptor$children$delegate$lambda(this$0, $config, $serializersModule) {
    return function () {
      var valueChildIndex = getValueChild(this$0);
      var tmp;
      if (!(this$0.yi2_1 == null)) {
        tmp = getElementDescriptors(this$0, $config, $serializersModule, this$0.yi2_1);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.List' call
        var tmp0_List = this$0.rgp();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.MutableList' call
        var list = ArrayList_init_$Create$_0(tmp0_List);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < tmp0_List)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            var tmp$ret$0;
            // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.children$delegate.<anonymous>.<anonymous>' call
            tmp$ret$0 = createElementDescriptor(this$0, $config, $serializersModule, index, true);
            list.a(tmp$ret$0);
          }
           while (inductionVariable < tmp0_List);
        tmp$ret$1 = list;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      var l = tmp;
      var tmp_0;
      if (valueChildIndex >= 0) {
        var valueChild = l.m(valueChildIndex);
        var tmp_1;
        if (!equals(valueChild.hi4(), LIST_getInstance()) ? true : !equals(valueChild.vgp(0).thn(), CompactFragmentSerializer_getInstance().thi_1)) {
          var tmp$ret$4;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp1_firstOrNull = get_indices(l);
            var inductionVariable_0 = tmp1_firstOrNull.y_1;
            var last = tmp1_firstOrNull.z_1;
            if (inductionVariable_0 <= last)
              do {
                var element = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var tmp$ret$3;
                // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.children$delegate.<anonymous>.<anonymous>' call
                tmp$ret$3 = !(element === valueChildIndex) ? l.m(element).uhj().equals(OutputKind_Element_getInstance()) : false;
                if (tmp$ret$3) {
                  tmp$ret$4 = element;
                  break $l$block;
                }
              }
               while (!(element === last));
            tmp$ret$4 = null;
          }
          var invalidIdx = tmp$ret$4;
          var tmp_2;
          if (!(invalidIdx == null)) {
            throw new XmlSerialException('Types with an @XmlValue member may not contain other child elements (' + this$0.thn().vgp(invalidIdx));
          }
          tmp_1 = tmp_2;
        }
        tmp_0 = tmp_1;
      }
      return l;
    };
  }
  function XmlCompositeDescriptor$childReorderMap$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.yi2_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.childReorderMap$delegate.<anonymous>.<anonymous>' call
        var newList = sequenceStarts(tmp0_safe_receiver, this$0.rgp());
        tmp$ret$0 = fullFlatten(newList, this$0.thn(), _get_children__my42wc_0(this$0));
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function XmlCompositeDescriptor(config, serializersModule, serializerParent, tagParent, preserveSpace) {
    XmlValueDescriptor.call(this, config.uhk_1, serializerParent, tagParent);
    this.xi2_1 = preserveSpace;
    var requestedOutputKind = config.uhk_1.pi5(serializerParent, tagParent, false);
    if (!requestedOutputKind.equals(OutputKind_Element_getInstance())) {
      config.uhk_1.gi5('Class SerialKinds/composites can only have Element output kinds, not ' + requestedOutputKind);
    }
    this.yi2_1 = config.uhk_1.ui5(this.thn());
    var tmp = this;
    tmp.zi2_1 = lazy(XmlCompositeDescriptor$children$delegate$lambda(this, config, serializersModule));
    var tmp_0 = this;
    tmp_0.ai3_1 = lazy(XmlCompositeDescriptor$childReorderMap$delegate$lambda(this));
  }
  protoOf(XmlCompositeDescriptor).hhq = function () {
    return this.xi2_1;
  };
  protoOf(XmlCompositeDescriptor).ci3 = function () {
    return false;
  };
  protoOf(XmlCompositeDescriptor).uhj = function () {
    return OutputKind_Element_getInstance();
  };
  protoOf(XmlCompositeDescriptor).vgp = function (index) {
    return _get_children__my42wc_0(this).m(index);
  };
  protoOf(XmlCompositeDescriptor).bi3 = function () {
    // Inline function 'kotlin.getValue' call
    childReorderMap$factory();
    return this.ai3_1.s();
  };
  protoOf(XmlCompositeDescriptor).fi7 = function (builder, indent, seen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlCompositeDescriptor.appendTo.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    builder.b(this.lhl().toString()).b(' (').i9(_Char___init__impl__6a9atx(10));
    var first = true;
    var tmp0_iterator = _get_children__my42wc_0(this).d();
    while (tmp0_iterator.e()) {
      var child = tmp0_iterator.f();
      if (first)
        first = false;
      else {
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.i9(_Char___init__impl__6a9atx(44)).i9(_Char___init__impl__6a9atx(10));
      }
      appendIndent(builder, indent);
      child.gi7(builder, indent + 4 | 0, seen);
    }
    var tmp$ret$4;
    // Inline function 'kotlin.text.appendLine' call
    tmp$ret$4 = builder.i9(_Char___init__impl__6a9atx(10));
    appendIndent(tmp$ret$4, indent - 4 | 0).i9(_Char___init__impl__6a9atx(41));
  };
  protoOf(XmlCompositeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlValueDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlCompositeDescriptor))
      THROW_CCE();
    if (!equals(this.yi2_1, other.yi2_1))
      return false;
    return true;
  };
  protoOf(XmlCompositeDescriptor).hashCode = function () {
    var result = protoOf(XmlValueDescriptor).hashCode.call(this);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.yi2_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function defaultValue($this, serializersModule, config, deserializer) {
    // Inline function 'kotlin.let' call
    var tmp0_let = $this.php_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!equals(tmp0_let, UNSET_getInstance())) {
      return (tmp0_let == null ? true : isObject(tmp0_let)) ? tmp0_let : THROW_CCE();
    }
    var tmp_0;
    if ($this.ohp_1 == null) {
      tmp_0 = null;
    } else {
      var defaultDecoder = new XmlDecoder(new XmlDecoderBase(serializersModule, config, CompactFragment_init_$Create$_1($this.ohp_1).nhi()), $this);
      tmp_0 = deserializer.mgo(defaultDecoder);
    }
    var d = tmp_0;
    $this.php_1 = d;
    return (d == null ? true : isObject(d)) ? d : THROW_CCE();
  }
  function UNSET() {
    UNSET_instance = this;
  }
  var UNSET_instance;
  function UNSET_getInstance() {
    if (UNSET_instance == null)
      new UNSET();
    return UNSET_instance;
  }
  function XmlValueDescriptor(policy, serializerParent, tagParent) {
    XmlDescriptor.call(this, policy, serializerParent, tagParent);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = serializerParent.di6().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlCData) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
        var tmp0_iterator_0 = tagParent.di6().d();
        while (tmp0_iterator_0.e()) {
          var e_0 = tmp0_iterator_0.f();
          if (e_0 instanceof XmlCData) {
            tmp$ret$1 = e_0;
            break $l$block_0;
          }
        }
        tmp$ret$1 = null;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$2;
      $l$block_1: {
        // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
        var tmp0_iterator_1 = serializerParent.ei6().qgp().d();
        while (tmp0_iterator_1.e()) {
          var e_1 = tmp0_iterator_1.f();
          if (e_1 instanceof XmlCData) {
            tmp$ret$2 = e_1;
            break $l$block_1;
          }
        }
        tmp$ret$2 = null;
      }
      tmp_1 = tmp$ret$2;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp2_safe_receiver = tmp_1;
    tmp.nhp_1 = (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.qi8_1) === true;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = get_declDefault(tagParent.di6());
    tmp_2.ohp_1 = tmp0_elvis_lhs_0 == null ? get_declDefault_0(serializerParent.ei6()) : tmp0_elvis_lhs_0;
    this.php_1 = UNSET_getInstance();
  }
  protoOf(XmlValueDescriptor).gi0 = function () {
    return this.nhp_1;
  };
  protoOf(XmlValueDescriptor).hhr = function (xmlCodecBase, deserializer) {
    return defaultValue(this, xmlCodecBase.fhk_1, xmlCodecBase.ghk_1, deserializer);
  };
  protoOf(XmlValueDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlValueDescriptor))
      THROW_CCE();
    if (!(this.nhp_1 === other.nhp_1))
      return false;
    if (!(this.ohp_1 == other.ohp_1))
      return false;
    return equals(this.php_1, other.php_1);
  };
  protoOf(XmlValueDescriptor).hashCode = function () {
    var result = protoOf(XmlDescriptor).hashCode.call(this);
    result = imul(31, result) + (this.nhp_1 | 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.ohp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.php_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function TRANSPARENT() {
    TRANSPARENT_instance = this;
    PolymorphicMode.call(this);
  }
  var TRANSPARENT_instance;
  function TRANSPARENT_getInstance() {
    if (TRANSPARENT_instance == null)
      new TRANSPARENT();
    return TRANSPARENT_instance;
  }
  function TAG() {
    TAG_instance = this;
    PolymorphicMode.call(this);
  }
  var TAG_instance;
  function TAG_getInstance() {
    if (TAG_instance == null)
      new TAG();
    return TAG_instance;
  }
  function ATTR(name) {
    PolymorphicMode.call(this);
    this.thz_1 = name;
  }
  function PolymorphicMode() {
  }
  function ParentInfo(descriptor, index, useNameInfo, useOutputKind, overriddenSerializer) {
    useNameInfo = useNameInfo === VOID ? null : useNameInfo;
    useOutputKind = useOutputKind === VOID ? null : useOutputKind;
    overriddenSerializer = overriddenSerializer === VOID ? null : overriddenSerializer;
    this.ri8_1 = descriptor;
    this.si8_1 = index;
    this.ti8_1 = overriddenSerializer;
    var tmp = this;
    var tmp_0;
    if (useNameInfo == null) {
      tmp_0 = this.si8_1 === -1 ? new DeclaredNameInfo(this.ri8_1.thn().pgp(), null) : getElementNameInfo(this.ri8_1.thn(), this.si8_1, toNamespace(this.ri8_1.lhl()));
    } else {
      tmp_0 = useNameInfo;
    }
    tmp.ui8_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (useOutputKind == null) {
      tmp_2 = this.si8_1 === -1 ? null : getRequestedOutputKind(this.ri8_1.thn().ugp(this.si8_1));
    } else {
      tmp_2 = useOutputKind;
    }
    tmp_1.vi8_1 = tmp_2;
  }
  protoOf(ParentInfo).kgo = function () {
    return this.ri8_1;
  };
  protoOf(ParentInfo).ji7 = function () {
    return this.ti8_1;
  };
  protoOf(ParentInfo).qi7 = function (useNameInfo, useOutputKind, overriddenSerializer) {
    return new ParentInfo(this.ri8_1, this.si8_1, useNameInfo, useOutputKind, overriddenSerializer);
  };
  protoOf(ParentInfo).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ParentInfo))
      THROW_CCE();
    if (!this.ri8_1.equals(other.ri8_1))
      return false;
    if (!(this.si8_1 === other.si8_1))
      return false;
    if (!equals(this.ti8_1, other.ti8_1))
      return false;
    if (!this.ui8_1.equals(other.ui8_1))
      return false;
    return equals(this.vi8_1, other.vi8_1);
  };
  protoOf(ParentInfo).hashCode = function () {
    var result = this.ri8_1.hashCode();
    result = imul(31, result) + this.si8_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.ti8_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + this.ui8_1.hashCode() | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.vi8_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParentInfo).zi5 = function () {
    return toNamespace(this.ri8_1.lhl());
  };
  protoOf(ParentInfo).gi6 = function () {
    return !(this.ti8_1 == null) ? new XmlTypeDescriptor(this.ti8_1.kgo(), toNamespace(this.ri8_1.lhl())) : this.si8_1 === -1 ? this.ri8_1.si6() : equals(this.ei6().tgp(), CONTEXTUAL_getInstance()) ? this.ri8_1.si6() : new XmlTypeDescriptor(this.ei6(), this.ri8_1.fhl_1.zi5());
  };
  protoOf(ParentInfo).ti5 = function () {
    return this.ui8_1;
  };
  protoOf(ParentInfo).di6 = function () {
    return this.si8_1 === -1 ? emptyList() : this.ri8_1.thn().ugp(this.si8_1);
  };
  protoOf(ParentInfo).ei6 = function () {
    return !(this.ti8_1 == null) ? this.ti8_1.kgo() : equals(this.ri8_1.hi4(), CONTEXTUAL_getInstance()) ? this.ri8_1.thn() : this.si8_1 === -1 ? this.ri8_1.thn() : this.ri8_1.thn().vgp(this.si8_1);
  };
  protoOf(ParentInfo).fi6 = function () {
    return this.vi8_1;
  };
  function polyTagName(parentName, polyChildSpecification, baseClass, serializersModule) {
    var currentPkg = substringBeforeLast(parentName.bi5_1, _Char___init__impl__6a9atx(46), '');
    var parentTag = parentName.ci5_1;
    var eqPos = indexOf(polyChildSpecification, _Char___init__impl__6a9atx(61));
    var pkgPos;
    var typeNameBase;
    var prefix;
    var localPart;
    if (eqPos < 0) {
      typeNameBase = polyChildSpecification;
      pkgPos = lastIndexOf(polyChildSpecification, _Char___init__impl__6a9atx(46));
      // Inline function 'nl.adaptivity.xmlutil.prefix' call
      prefix = parentTag.thc();
      var tmp;
      if (pkgPos < 0) {
        tmp = polyChildSpecification;
      } else {
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = pkgPos + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp = polyChildSpecification.substring(tmp0_substring);
      }
      localPart = tmp;
    } else {
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_trim = polyChildSpecification.substring(0, eqPos);
      typeNameBase = toString(trim(isCharSequence(tmp1_trim) ? tmp1_trim : THROW_CCE()));
      pkgPos = lastIndexOf(polyChildSpecification, _Char___init__impl__6a9atx(46), eqPos - 1 | 0);
      var prefPos = indexOf(polyChildSpecification, _Char___init__impl__6a9atx(58), eqPos + 1 | 0);
      if (prefPos < 0) {
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        prefix = parentTag.thc();
        // Inline function 'kotlin.text.trim' call
        // Inline function 'kotlin.text.substring' call
        var tmp2_substring = eqPos + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3_trim = polyChildSpecification.substring(tmp2_substring);
        localPart = toString(trim(isCharSequence(tmp3_trim) ? tmp3_trim : THROW_CCE()));
      } else {
        // Inline function 'kotlin.text.trim' call
        // Inline function 'kotlin.text.substring' call
        var tmp4_substring = eqPos + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp5_trim = polyChildSpecification.substring(tmp4_substring, prefPos);
        prefix = toString(trim(isCharSequence(tmp5_trim) ? tmp5_trim : THROW_CCE()));
        // Inline function 'kotlin.text.trim' call
        // Inline function 'kotlin.text.substring' call
        var tmp6_substring = prefPos + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp7_trim = polyChildSpecification.substring(tmp6_substring);
        localPart = toString(trim(isCharSequence(tmp7_trim) ? tmp7_trim : THROW_CCE()));
      }
    }
    var tmp_0;
    var tmp_1;
    if (!(pkgPos === 0)) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_1 = charSequenceLength(currentPkg) === 0;
    }
    if (tmp_1) {
      tmp_0 = typeNameBase;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = currentPkg + '.' + typeNameBase.substring(1);
    }
    var typename = tmp_0;
    var tmp0_safe_receiver = serializersModule.ogt(baseClass, typename);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kgo();
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      throw XmlException_init_$Create$('Missing descriptor for ' + typename + ' in the serial context');
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var descriptor = tmp_2;
    var tmp_3;
    if (eqPos < 0) {
      var tmp_4 = Companion_getInstance_6();
      var tmp$ret$19;
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp$ret$19 = parentTag.rhc();
      tmp_3 = tmp_4.ii4(descriptor, new NamespaceImpl(prefix, tmp$ret$19));
    } else {
      var tmp$ret$20;
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp$ret$20 = parentTag.rhc();
      tmp_3 = new QName(tmp$ret$20, localPart, prefix);
    }
    var name = tmp_3;
    return new PolyBaseInfo(name, descriptor);
  }
  function XmlListLikeDescriptor(config, serializerParent, tagParent) {
    tagParent = tagParent === VOID ? serializerParent : tagParent;
    XmlDescriptor.call(this, config.uhk_1, serializerParent, tagParent);
    var tmp = this;
    var tmp_0;
    var tmp_1;
    if (tagParent instanceof DetachedParent) {
      tmp_1 = tagParent.ni7_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = false;
    } else {
      tmp_0 = config.uhk_1.ji5(serializerParent, tagParent);
    }
    tmp.aho_1 = tmp_0;
  }
  protoOf(XmlListLikeDescriptor).bho = function () {
    return this.aho_1;
  };
  protoOf(XmlListLikeDescriptor).ci3 = function () {
    return false;
  };
  protoOf(XmlListLikeDescriptor).hhq = function () {
    return false;
  };
  protoOf(XmlListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(XmlDescriptor).equals.call(this, other))
      return false;
    if (!(other instanceof XmlListLikeDescriptor))
      THROW_CCE();
    if (!(this.bho() === other.bho()))
      return false;
    if (!(this.ci3() === other.ci3()))
      return false;
    return this.hhq() === other.hhq();
  };
  protoOf(XmlListLikeDescriptor).hashCode = function () {
    var result = protoOf(XmlDescriptor).hashCode.call(this);
    result = imul(31, result) + (this.bho() | 0) | 0;
    result = imul(31, result) + (this.ci3() | 0) | 0;
    result = imul(31, result) + (this.hhq() | 0) | 0;
    return result;
  };
  function appendIndent(_this__u8e3s4, count) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.appendIndent.<anonymous>' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.i9(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < count);
    return _this__u8e3s4;
  }
  function InjectedParentTag(index, elementTypeDescriptor, elementUseNameInfo, namespace, elementUseOutputKind, overriddenSerializer) {
    elementUseOutputKind = elementUseOutputKind === VOID ? null : elementUseOutputKind;
    overriddenSerializer = overriddenSerializer === VOID ? null : overriddenSerializer;
    this.wi8_1 = index;
    this.xi8_1 = elementTypeDescriptor;
    this.yi8_1 = elementUseNameInfo;
    this.zi8_1 = namespace;
    this.ai9_1 = elementUseOutputKind;
    this.bi9_1 = overriddenSerializer;
    this.ci9_1 = null;
  }
  protoOf(InjectedParentTag).gi6 = function () {
    return this.xi8_1;
  };
  protoOf(InjectedParentTag).ti5 = function () {
    return this.yi8_1;
  };
  protoOf(InjectedParentTag).zi5 = function () {
    return this.zi8_1;
  };
  protoOf(InjectedParentTag).fi6 = function () {
    return this.ai9_1;
  };
  protoOf(InjectedParentTag).ji7 = function () {
    return this.bi9_1;
  };
  protoOf(InjectedParentTag).kgo = function () {
    return this.ci9_1;
  };
  protoOf(InjectedParentTag).di6 = function () {
    return emptyList();
  };
  protoOf(InjectedParentTag).ei6 = function () {
    return this.xi8_1.hi6_1;
  };
  protoOf(InjectedParentTag).qi7 = function (useNameInfo, useOutputKind, overriddenSerializer) {
    return new InjectedParentTag(this.wi8_1, this.xi8_1, useNameInfo, this.zi8_1, useOutputKind, overriddenSerializer);
  };
  function get_declDefault(_this__u8e3s4) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlDefault) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.di9_1;
  }
  function get_declDefault_0(_this__u8e3s4) {
    return get_declDefault(_this__u8e3s4.qgp());
  }
  function getElementNameInfo(_this__u8e3s4, index, parentNamespace) {
    var serialName = _this__u8e3s4.xgp(index);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.ugp(index).d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlSerialName) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var qName = tmp0_safe_receiver == null ? null : toQName(tmp0_safe_receiver, serialName, parentNamespace);
    return new DeclaredNameInfo(serialName, qName);
  }
  function getRequestedOutputKind(_this__u8e3s4) {
    var xmlCData = null;
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      var tmp1_safe_receiver = annotation instanceof XmlValue ? annotation : null;
      if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.thv_1) === true)
        return OutputKind_Mixed_getInstance();
      else {
        if (annotation instanceof XmlOtherAttributes)
          return OutputKind_Attribute_getInstance();
        else {
          if (annotation instanceof XmlElement)
            return annotation.ri7_1 ? OutputKind_Element_getInstance() : OutputKind_Attribute_getInstance();
          else {
            var tmp;
            if (annotation instanceof XmlPolyChildren) {
              tmp = true;
            } else {
              tmp = annotation instanceof XmlChildrenName;
            }
            if (tmp)
              return OutputKind_Element_getInstance();
            else {
              if (annotation instanceof XmlCData)
                xmlCData = annotation;
            }
          }
        }
      }
    }
    var tmp2_safe_receiver = xmlCData;
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.qi8_1) === true)
      return OutputKind_Element_getInstance();
    return null;
  }
  function declOutputKind(_this__u8e3s4) {
    var tmp0_iterator = _this__u8e3s4.qgp().d();
    while (tmp0_iterator.e()) {
      var a = tmp0_iterator.f();
      var tmp;
      if (a instanceof XmlValue) {
        tmp = a.thv_1;
      } else {
        tmp = false;
      }
      if (tmp)
        return OutputKind_Text_getInstance();
      else {
        if (a instanceof XmlElement)
          return a.ri7_1 ? OutputKind_Element_getInstance() : OutputKind_Attribute_getInstance();
        else {
          var tmp_0;
          if (a instanceof XmlPolyChildren) {
            tmp_0 = true;
          } else {
            tmp_0 = a instanceof XmlChildrenName;
          }
          if (tmp_0)
            return OutputKind_Element_getInstance();
        }
      }
    }
    return null;
  }
  function getNameInfo(_this__u8e3s4, parentNamespace) {
    var tmp;
    if (_this__u8e3s4.lgp() ? endsWith(_this__u8e3s4.pgp(), _Char___init__impl__6a9atx(63)) : false) {
      tmp = dropLast(_this__u8e3s4.pgp(), 1);
    } else {
      var tmp0_safe_receiver = get_capturedKClass(_this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_serialName(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4.pgp() : tmp1_elvis_lhs;
    }
    var realSerialName = tmp;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'nl.adaptivity.xmlutil.serialization.firstOrNull' call
      var tmp0_iterator = _this__u8e3s4.qgp().d();
      while (tmp0_iterator.e()) {
        var e = tmp0_iterator.f();
        if (e instanceof XmlSerialName) {
          tmp$ret$0 = e;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp2_safe_receiver = tmp$ret$0;
    var qName = tmp2_safe_receiver == null ? null : toQName(tmp2_safe_receiver, realSerialName, parentNamespace);
    return new DeclaredNameInfo(realSerialName, qName);
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function tagName$factory() {
    return getPropertyCallableRef('tagName', 1, KProperty1, function (receiver) {
      return receiver.lhl();
    }, null);
  }
  function children$factory() {
    return getPropertyCallableRef('children', 1, KProperty1, function (receiver) {
      return _get_children__my42wc(receiver);
    }, null);
  }
  function childDescriptor$factory() {
    return getPropertyCallableRef('childDescriptor', 1, KProperty1, function (receiver) {
      return _get_childDescriptor__xb3z96(receiver);
    }, null);
  }
  function keyDescriptor$factory() {
    return getPropertyCallableRef('keyDescriptor', 1, KProperty1, function (receiver) {
      return receiver.di8();
    }, null);
  }
  function valueDescriptor$factory() {
    return getPropertyCallableRef('valueDescriptor', 1, KProperty1, function (receiver) {
      return receiver.tht();
    }, null);
  }
  function isValueCollapsed$factory() {
    return getPropertyCallableRef('isValueCollapsed', 1, KProperty1, function (receiver) {
      return receiver.nho();
    }, null);
  }
  function entryName$factory() {
    return getPropertyCallableRef('entryName', 1, KProperty1, function (receiver) {
      return receiver.thp();
    }, null);
  }
  function keyDescriptor$factory_0() {
    return getPropertyCallableRef('keyDescriptor', 1, KProperty1, function (receiver) {
      return _get_keyDescriptor__hu7alf(receiver);
    }, null);
  }
  function valueDescriptor$factory_0() {
    return getPropertyCallableRef('valueDescriptor', 1, KProperty1, function (receiver) {
      return _get_valueDescriptor__8ouq3z(receiver);
    }, null);
  }
  function child$factory() {
    return getPropertyCallableRef('child', 1, KProperty1, function (receiver) {
      return _get_child__j05w3v(receiver);
    }, null);
  }
  function isUnsigned$factory() {
    return getPropertyCallableRef('isUnsigned', 1, KProperty1, function (receiver) {
      return receiver.dhq();
    }, null);
  }
  function children$factory_0() {
    return getPropertyCallableRef('children', 1, KProperty1, function (receiver) {
      return _get_children__my42wc_0(receiver);
    }, null);
  }
  function childReorderMap$factory() {
    return getPropertyCallableRef('childReorderMap', 1, KProperty1, function (receiver) {
      return receiver.bi3();
    }, null);
  }
  function XmlOrderConstraint(before, after) {
    this.ei9_1 = before;
    this.fi9_1 = after;
  }
  protoOf(XmlOrderConstraint).toString = function () {
    return 'XmlOrderConstraint(before=' + this.ei9_1 + ', after=' + this.fi9_1 + ')';
  };
  protoOf(XmlOrderConstraint).hashCode = function () {
    var result = this.ei9_1;
    result = imul(result, 31) + this.fi9_1 | 0;
    return result;
  };
  protoOf(XmlOrderConstraint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof XmlOrderConstraint))
      return false;
    var tmp0_other_with_cast = other instanceof XmlOrderConstraint ? other : THROW_CCE();
    if (!(this.ei9_1 === tmp0_other_with_cast.ei9_1))
      return false;
    if (!(this.fi9_1 === tmp0_other_with_cast.fi9_1))
      return false;
    return true;
  };
  function XmlOrderNode$toString$lambda(it) {
    return it.mi6_1.toString();
  }
  function XmlOrderNode$toString$lambda_0(it) {
    return it.mi6_1.toString();
  }
  function XmlOrderNode(elementIdx) {
    this.mi6_1 = elementIdx;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ni6_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.oi6_1 = ArrayList_init_$Create$();
  }
  protoOf(XmlOrderNode).pi6 = function (nodes) {
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var node = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!this.oi6_1.n(node)) {
        this.oi6_1.a(node);
        node.qi6([this]);
      }
    }
  };
  protoOf(XmlOrderNode).qi6 = function (nodes) {
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var node = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!this.ni6_1.n(node)) {
        this.ni6_1.a(node);
        node.pi6([this]);
      }
    }
  };
  protoOf(XmlOrderNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof XmlOrderNode))
      return false;
    if (!(this.mi6_1 === other.mi6_1))
      return false;
    return true;
  };
  protoOf(XmlOrderNode).hashCode = function () {
    return this.mi6_1;
  };
  protoOf(XmlOrderNode).toString = function () {
    var tmp = joinToString(this.ni6_1, VOID, VOID, VOID, VOID, VOID, XmlOrderNode$toString$lambda);
    return '(' + this.mi6_1 + ', p=[' + tmp + '], s=[' + joinToString(this.oi6_1, VOID, VOID, VOID, VOID, VOID, XmlOrderNode$toString$lambda_0) + '])';
  };
  function sequenceStarts(_this__u8e3s4, childCount) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(childCount), null);
    while (tmp < childCount) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = new XmlOrderNode(tmp_1);
      tmp = tmp + 1 | 0;
    }
    var nodes = tmp_0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.sequenceStarts.<anonymous>' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.XmlOrderConstraint.map' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.sequenceStarts.<anonymous>.<anonymous>' call
      var tmp_2 = nodes[element.ei9_1];
      var tmp$ret$3;
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.sequenceStarts.<anonymous>.<anonymous>' call
      tmp$ret$3 = nodes[element.fi9_1];
      var tmp0_container = new Pair(tmp_2, tmp$ret$3);
      var before = tmp0_container.y4();
      var after = tmp0_container.z4();
      before.pi6([after]);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var element_0 = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.sequenceStarts.<anonymous>' call
      if (element_0.ni6_1.l()) {
        tmp0_filterTo.a(element_0);
      }
    }
    return tmp0_filterTo;
  }
  function flatten(_this__u8e3s4) {
    var seen = booleanArray(flatten$lastIndex(_this__u8e3s4) + 1 | 0);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_also = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.serialization.structure.flatten.<anonymous>' call
    tmp0_also.a(_this__u8e3s4);
    flatten$flattenSuccessorsTo(_this__u8e3s4, seen, tmp0_also);
    return tmp0_also;
  }
  function fullFlatten(_this__u8e3s4, serialDescriptor, children) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = serialDescriptor.rgp();
    var originalOrderNodes = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.mutableListOf' call
    var allNodes = ArrayList_init_$Create$();
    var tmp = asSequence_1(_this__u8e3s4);
    var tmp0_iterator = filter(tmp, fullFlatten$lambda).d();
    while (tmp0_iterator.e()) {
      var node = tmp0_iterator.f();
      fullFlatten$addTransitive(originalOrderNodes, node);
      allNodes.a(node);
    }
    var inductionVariable = 0;
    var last = originalOrderNodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (originalOrderNodes[i] == null) {
          var node_0 = new XmlOrderNode(i);
          originalOrderNodes[i] = node_0;
          allNodes.a(node_0);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.partition' call
    var first = ArrayList_init_$Create$();
    var second = ArrayList_init_$Create$();
    var tmp0_iterator_0 = allNodes.d();
    while (tmp0_iterator_0.e()) {
      var element = tmp0_iterator_0.f();
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.fullFlatten.<anonymous>' call
      if (children.m(element.mi6_1).uhj().equals(OutputKind_Attribute_getInstance())) {
        first.a(element);
      } else {
        second.a(element);
      }
    }
    var tmp2_container = new Pair(first, second);
    var attributes = tmp2_container.y4();
    var members = tmp2_container.z4();
    var tmp_0 = 0;
    var tmp_1 = serialDescriptor.rgp();
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = -1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    var finalToDeclMap = tmp_2;
    var tmp_3 = 0;
    var tmp_4 = serialDescriptor.rgp();
    var tmp_5 = new Int32Array(tmp_4);
    while (tmp_3 < tmp_4) {
      tmp_5[tmp_3] = -1;
      tmp_3 = tmp_3 + 1 | 0;
    }
    var declToOrderMap = tmp_5;
    var nextElemIdx = 0;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var indexedObject = [attributes, members];
    var inductionVariable_0 = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable_0 < last_0) {
      var base = indexedObject[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var queue = toMutableList(base);
      $l$loop: while (true) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!!queue.l()) {
          break $l$loop;
        }
        var tmp$ret$10;
        $l$block_0: {
          // Inline function 'nl.adaptivity.xmlutil.serialization.structure.indexOfMinBy' call
          if (queue.l()) {
            tmp$ret$10 = -1;
            break $l$block_0;
          }
          if (queue.g() === 1) {
            tmp$ret$10 = 0;
            break $l$block_0;
          }
          var idx = 1;
          var minIdx = 0;
          // Inline function 'nl.adaptivity.xmlutil.serialization.structure.fullFlatten.<anonymous>' call
          var tmp1_anonymous = queue.m(0);
          var tmp_6;
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = tmp1_anonymous.ni6_1;
            var tmp_7;
            if (isInterface(tmp0_any, Collection)) {
              tmp_7 = tmp0_any.l();
            } else {
              tmp_7 = false;
            }
            if (tmp_7) {
              tmp$ret$11 = false;
              break $l$block_2;
            }
            var tmp0_iterator_1 = tmp0_any.d();
            while (tmp0_iterator_1.e()) {
              var element_0 = tmp0_iterator_1.f();
              // Inline function 'nl.adaptivity.xmlutil.serialization.structure.fullFlatten.<anonymous>.<anonymous>' call
              if (declToOrderMap[element_0.mi6_1] < 0) {
                tmp$ret$11 = true;
                break $l$block_2;
              }
            }
            tmp$ret$11 = false;
          }
          if (tmp$ret$11) {
            tmp_6 = serialDescriptor.rgp();
          } else {
            tmp_6 = tmp1_anonymous.mi6_1;
          }
          var minValue = tmp_6;
          do {
            // Inline function 'nl.adaptivity.xmlutil.serialization.structure.fullFlatten.<anonymous>' call
            var tmp2_anonymous = queue.m(idx);
            var tmp_8;
            var tmp$ret$14;
            $l$block_4: {
              // Inline function 'kotlin.collections.any' call
              var tmp0_any_0 = tmp2_anonymous.ni6_1;
              var tmp_9;
              if (isInterface(tmp0_any_0, Collection)) {
                tmp_9 = tmp0_any_0.l();
              } else {
                tmp_9 = false;
              }
              if (tmp_9) {
                tmp$ret$14 = false;
                break $l$block_4;
              }
              var tmp0_iterator_2 = tmp0_any_0.d();
              while (tmp0_iterator_2.e()) {
                var element_1 = tmp0_iterator_2.f();
                // Inline function 'nl.adaptivity.xmlutil.serialization.structure.fullFlatten.<anonymous>.<anonymous>' call
                if (declToOrderMap[element_1.mi6_1] < 0) {
                  tmp$ret$14 = true;
                  break $l$block_4;
                }
              }
              tmp$ret$14 = false;
            }
            if (tmp$ret$14) {
              tmp_8 = serialDescriptor.rgp();
            } else {
              tmp_8 = tmp2_anonymous.mi6_1;
            }
            var v = tmp_8;
            if (compareTo(minValue, v) > 0) {
              minIdx = idx;
              minValue = v;
            }
            idx = idx + 1 | 0;
          }
           while (idx < queue.g());
          tmp$ret$10 = minIdx;
        }
        var nextIdx = tmp$ret$10;
        var next = queue.z3(nextIdx);
        finalToDeclMap[nextElemIdx] = next.mi6_1;
        declToOrderMap[next.mi6_1] = nextElemIdx;
        nextElemIdx = nextElemIdx + 1 | 0;
        var tmp5_iterator = next.oi6_1.d();
        while (tmp5_iterator.e()) {
          var successor = tmp5_iterator.f();
          if (!queue.n(successor)) {
            queue.a(successor);
          }
        }
      }
    }
    return declToOrderMap;
  }
  function flatten$lastIndex(_this__u8e3s4) {
    var lastIndex = _this__u8e3s4.mi6_1;
    var tmp0_iterator = _this__u8e3s4.oi6_1.d();
    while (tmp0_iterator.e()) {
      var successor = tmp0_iterator.f();
      var c = flatten$lastIndex(successor);
      if (c > lastIndex)
        lastIndex = c;
    }
    return lastIndex;
  }
  function flatten$flattenSuccessorsTo(_this__u8e3s4, seen, receiver) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = _this__u8e3s4.oi6_1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'nl.adaptivity.xmlutil.serialization.structure.flatten.flattenSuccessorsTo.<anonymous>' call
      if (!seen[element.mi6_1]) {
        tmp0_filterTo.a(element);
      }
    }
    var unseenSuccessors = tmp0_filterTo;
    var tmp0_iterator_0 = unseenSuccessors.d();
    while (tmp0_iterator_0.e()) {
      var successor = tmp0_iterator_0.f();
      receiver.a(successor);
      seen[successor.mi6_1] = true;
    }
    var tmp1_iterator = unseenSuccessors.d();
    while (tmp1_iterator.e()) {
      var successor_0 = tmp1_iterator.f();
      flatten$flattenSuccessorsTo(successor_0, seen, receiver);
    }
  }
  function fullFlatten$addTransitive(originalOrderNodes, node) {
    if (originalOrderNodes[node.mi6_1] == null) {
      originalOrderNodes[node.mi6_1] = node;
      var tmp0_iterator = node.oi6_1.d();
      while (tmp0_iterator.e()) {
        var next = tmp0_iterator.f();
        fullFlatten$addTransitive(originalOrderNodes, next);
      }
    }
  }
  function fullFlatten$lambda(it) {
    return it.ni6_1.l();
  }
  function _get_children__my42wc_1($this) {
    // Inline function 'kotlin.getValue' call
    children$factory_1();
    return $this.ji6_1.s();
  }
  function XmlTypeDescriptor$children$delegate$lambda(this$0, $parentNamespace) {
    return function () {
      var tmp = 0;
      var tmp_0 = this$0.hi6_1.rgp();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        var tmp_3 = this$0.hi6_1.vgp(tmp_2);
        var tmp0_safe_receiver = this$0.ti6();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toNamespace(tmp0_safe_receiver);
        tmp$ret$1 = new XmlTypeDescriptor(tmp_3, tmp1_elvis_lhs == null ? $parentNamespace : tmp1_elvis_lhs);
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function XmlTypeDescriptor(serialDescriptor, parentNamespace) {
    this.hi6_1 = serialDescriptor;
    this.ii6_1 = getNameInfo(this.hi6_1, parentNamespace);
    var tmp = this;
    tmp.ji6_1 = lazy(XmlTypeDescriptor$children$delegate$lambda(this, parentNamespace));
  }
  protoOf(XmlTypeDescriptor).ti6 = function () {
    return this.ii6_1.ai5_1;
  };
  protoOf(XmlTypeDescriptor).m = function (index) {
    return _get_children__my42wc_1(this)[index];
  };
  protoOf(XmlTypeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof XmlTypeDescriptor))
      THROW_CCE();
    if (!equals(this.hi6_1, other.hi6_1))
      return false;
    return this.ii6_1.equals(other.ii6_1);
  };
  protoOf(XmlTypeDescriptor).hashCode = function () {
    var result = hashCode(this.hi6_1);
    result = imul(31, result) + this.ii6_1.hashCode() | 0;
    return result;
  };
  function children$factory_1() {
    return getPropertyCallableRef('children', 1, KProperty1, function (receiver) {
      return _get_children__my42wc_1(receiver);
    }, null);
  }
  function getPlatformDefaultModule() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function get_serialName(_this__u8e3s4) {
    var tmp0_safe_receiver = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.serialization.impl.<get-serialName>.<anonymous>' call
      tmp = tmp0_safe_receiver.kgo().pgp();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? replace(get_name(_this__u8e3s4), _Char___init__impl__6a9atx(36), _Char___init__impl__6a9atx(46)) : tmp1_elvis_lhs;
  }
  //region block: post-declaration
  protoOf(DocumentCompositeDecoder).cgs = decodeSerializableElement$default;
  protoOf(DecodeCommons).ogr = decodeSerializableValue;
  protoOf(NullDecoder).cgs = decodeSerializableElement$default;
  protoOf(NullDecoder).fgs = decodeSequentially;
  protoOf(TagDecoderBase).cgs = decodeSerializableElement$default;
  protoOf(TagDecoderBase).fgs = decodeSequentially;
  protoOf(TagDecoderBase).hgs = decodeCollectionSize;
  protoOf(TagDecoder).cgs = decodeSerializableElement$default;
  protoOf(TagDecoder).fgs = decodeSequentially;
  protoOf(TagDecoder).hgs = decodeCollectionSize;
  protoOf(AttributeMapDecoder).cgs = decodeSerializableElement$default;
  protoOf(AttributeMapDecoder).ogr = decodeSerializableValue;
  protoOf(AttributeListDecoder).cgs = decodeSerializableElement$default;
  protoOf(AnonymousListDecoder).cgs = decodeSerializableElement$default;
  protoOf(AnonymousListDecoder).fgs = decodeSequentially;
  protoOf(NamedListDecoder).cgs = decodeSerializableElement$default;
  protoOf(NamedListDecoder).fgs = decodeSequentially;
  protoOf(NamedListDecoder).hgs = decodeCollectionSize;
  protoOf(MapDecoderBase).cgs = decodeSerializableElement$default;
  protoOf(MapDecoderBase).fgs = decodeSequentially;
  protoOf(MapDecoderBase).hgs = decodeCollectionSize;
  protoOf(AnonymousMapDecoder).cgs = decodeSerializableElement$default;
  protoOf(AnonymousMapDecoder).fgs = decodeSequentially;
  protoOf(NamedMapDecoder).cgs = decodeSerializableElement$default;
  protoOf(NamedMapDecoder).fgs = decodeSequentially;
  protoOf(PolymorphicDecoder).cgs = decodeSerializableElement$default;
  protoOf(PolymorphicDecoder).fgs = decodeSequentially;
  protoOf(PolymorphicDecoder).hgs = decodeCollectionSize;
  protoOf(XmlEncoder).kgt = beginCollection;
  protoOf(NSAttrXmlEncoder).kgt = beginCollection;
  protoOf(PrimitiveEncoder).jgt = encodeNotNullMark;
  protoOf(PrimitiveEncoder).kgt = beginCollection;
  protoOf(PrimitiveEncoder).chl = ensureNamespace;
  protoOf(InlineEncoder).kgt = beginCollection;
  protoOf(DefaultXmlSerializationPolicy).di5 = get_defaultPrimitiveOutputKind;
  protoOf(DefaultXmlSerializationPolicy).ei5 = get_defaultObjectOutputKind;
  protoOf(DefaultXmlSerializationPolicy).fi5 = defaultOutputKind;
  protoOf(DefaultXmlSerializationPolicy).gi5 = invalidOutputKind;
  protoOf(DefaultXmlSerializationPolicy).zhk = serialTypeNameToQName;
  protoOf(DefaultXmlSerializationPolicy).ni5 = serialUseNameToQName;
  protoOf(DefaultXmlSerializationPolicy).qi5 = handleAttributeOrderConflict;
  protoOf(DefaultXmlSerializationPolicy).ci6 = attributeListDelimiters;
  protoOf(NamespaceCollectingXmlWriter$namespaceContext$1).sh8 = getPrefixes;
  protoOf(NamespaceCollectingXmlWriter).tha = startDocument$default;
  protoOf(NamespaceCollectingXmlWriter).ahb = namespaceAttr;
  protoOf(NamespaceCollectingXmlWriter).jha = processingInstruction;
  protoOf(XmlDescriptor).lgp = get_isNullable;
  protoOf(XmlDescriptor).tgp = get_kind;
  protoOf(XmlDescriptor).gi0 = get_isCData;
  protoOf(XmlDescriptor).ygp = isElementOptional;
  protoOf(XmlRootDescriptor).lgp = get_isNullable;
  protoOf(XmlRootDescriptor).tgp = get_kind;
  protoOf(XmlRootDescriptor).gi0 = get_isCData;
  protoOf(XmlRootDescriptor).ygp = isElementOptional;
  protoOf(XmlValueDescriptor).lgp = get_isNullable;
  protoOf(XmlValueDescriptor).tgp = get_kind;
  protoOf(XmlValueDescriptor).ygp = isElementOptional;
  protoOf(XmlPolymorphicDescriptor).lgp = get_isNullable;
  protoOf(XmlPolymorphicDescriptor).tgp = get_kind;
  protoOf(XmlPolymorphicDescriptor).ygp = isElementOptional;
  protoOf(DetachedParent).ii7 = copy$default;
  protoOf(XmlListLikeDescriptor).lgp = get_isNullable;
  protoOf(XmlListLikeDescriptor).tgp = get_kind;
  protoOf(XmlListLikeDescriptor).gi0 = get_isCData;
  protoOf(XmlListLikeDescriptor).ygp = isElementOptional;
  protoOf(XmlListDescriptor).lgp = get_isNullable;
  protoOf(XmlListDescriptor).tgp = get_kind;
  protoOf(XmlListDescriptor).gi0 = get_isCData;
  protoOf(XmlListDescriptor).ygp = isElementOptional;
  protoOf(XmlPrimitiveDescriptor).lgp = get_isNullable;
  protoOf(XmlPrimitiveDescriptor).tgp = get_kind;
  protoOf(XmlPrimitiveDescriptor).ygp = isElementOptional;
  protoOf(XmlAttributeMapDescriptor).lgp = get_isNullable;
  protoOf(XmlAttributeMapDescriptor).tgp = get_kind;
  protoOf(XmlAttributeMapDescriptor).ygp = isElementOptional;
  protoOf(XmlMapDescriptor).lgp = get_isNullable;
  protoOf(XmlMapDescriptor).tgp = get_kind;
  protoOf(XmlMapDescriptor).gi0 = get_isCData;
  protoOf(XmlMapDescriptor).ygp = isElementOptional;
  protoOf(XmlInlineDescriptor).lgp = get_isNullable;
  protoOf(XmlInlineDescriptor).tgp = get_kind;
  protoOf(XmlInlineDescriptor).ygp = isElementOptional;
  protoOf(XmlCompositeDescriptor).lgp = get_isNullable;
  protoOf(XmlCompositeDescriptor).tgp = get_kind;
  protoOf(XmlCompositeDescriptor).ygp = isElementOptional;
  protoOf(ParentInfo).ii7 = copy$default;
  protoOf(InjectedParentTag).ii7 = copy$default;
  //endregion
  //region block: init
  UNSET_ANNOTATION_VALUE = 'ZXC\x01VBNBVCXZ';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ElementSerializer_getInstance;
  _.$_$.b = Companion_getInstance_5;
  //endregion
  return _;
}));

//# sourceMappingURL=xmlutil-serialization-js-ir.js.map
