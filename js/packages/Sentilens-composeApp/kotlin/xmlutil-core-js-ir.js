(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'xmlutil-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'xmlutil-core-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'xmlutil-core-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'xmlutil-core-js-ir'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'xmlutil-core-js-ir'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'xmlutil-core-js-ir'.");
    }
    root['xmlutil-core-js-ir'] = factory(typeof this['xmlutil-core-js-ir'] === 'undefined' ? {} : this['xmlutil-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var protoOf = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var SequenceScope = kotlin_kotlin.$_$.qf;
  var until = kotlin_kotlin.$_$.jf;
  var isObject = kotlin_kotlin.$_$.kd;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var sequence = kotlin_kotlin.$_$.gg;
  var listOfNotNull = kotlin_kotlin.$_$.j9;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var equals = kotlin_kotlin.$_$.oc;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var emptyList = kotlin_kotlin.$_$.z7;
  var MutableList = kotlin_kotlin.$_$.m6;
  var isInterface = kotlin_kotlin.$_$.id;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var toList = kotlin_kotlin.$_$.ua;
  var asSequence = kotlin_kotlin.$_$.sf;
  var checkCountOverflow = kotlin_kotlin.$_$.d7;
  var isBlank = kotlin_kotlin.$_$.yg;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var indexOf = kotlin_kotlin.$_$.xg;
  var to = kotlin_kotlin.$_$.el;
  var split = kotlin_kotlin.$_$.qh;
  var Enum = kotlin_kotlin.$_$.dj;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i5;
  var arrayOf = kotlin_kotlin.$_$.ek;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var getKClass = kotlin_kotlin.$_$.e;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var asSequence_0 = kotlin_kotlin.$_$.z6;
  var plus = kotlin_kotlin.$_$.dg;
  var toList_0 = kotlin_kotlin.$_$.jg;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Iterator = kotlin_kotlin.$_$.f6;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var flatMap = kotlin_kotlin.$_$.xf;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var Collection = kotlin_kotlin.$_$.b6;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var sequenceOf = kotlin_kotlin.$_$.fg;
  var reversed = kotlin_kotlin.$_$.hf;
  var firstOrNull = kotlin_kotlin.$_$.f8;
  var firstOrNull_0 = kotlin_kotlin.$_$.wf;
  var filter = kotlin_kotlin.$_$.vf;
  var map = kotlin_kotlin.$_$.ag;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.g2;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.ij;
  var contentEquals = kotlin_kotlin.$_$.i7;
  var contentHashCode = kotlin_kotlin.$_$.m7;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var joinToString = kotlin_kotlin.$_$.x8;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var captureStack = kotlin_kotlin.$_$.ec;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var RuntimeException = kotlin_kotlin.$_$.pj;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jc;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u3;
  var UIntRange = kotlin_kotlin.$_$.pe;
  var UInt__compareTo_impl_yacclj = kotlin_kotlin.$_$.v3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o4;
  var _Char___init__impl__6a9atx_0 = kotlin_kotlin.$_$.x2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.w3;
  var toShort = kotlin_kotlin.$_$.be;
  var uintCompare = kotlin_kotlin.$_$.fl;
  var Char = kotlin_kotlin.$_$.xi;
  var Pair = kotlin_kotlin.$_$.nj;
  var toString_0 = kotlin_kotlin.$_$.hi;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trimStart = kotlin_kotlin.$_$.ri;
  var UInt = kotlin_kotlin.$_$.wj;
  var isHighSurrogate = kotlin_kotlin.$_$.ah;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var copyOf = kotlin_kotlin.$_$.v7;
  var downTo = kotlin_kotlin.$_$.ef;
  var copyOf_0 = kotlin_kotlin.$_$.w7;
  var getProgressionLastElement = kotlin_kotlin.$_$.zb;
  var joinToString_0 = kotlin_kotlin.$_$.w8;
  var booleanArray = kotlin_kotlin.$_$.dc;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  var get_isElement = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.k1;
  var startsWith = kotlin_kotlin.$_$.rh;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var Exception = kotlin_kotlin.$_$.fj;
  var get_js = kotlin_kotlin.$_$.nd;
  var hashCode = kotlin_kotlin.$_$.xc;
  var joinTo = kotlin_kotlin.$_$.y8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9, 'DomReader$<get-namespaceContext>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  function getPrefixes(namespaceURI) {
    return this.qh8(namespaceURI);
  }
  setMetadataFor(NamespaceContextImpl, 'NamespaceContextImpl', interfaceMeta);
  function freeze() {
    return SimpleNamespaceContext_init_$Create$_1(this);
  }
  function plus_0(secondary) {
    return SimpleNamespaceContext_init_$Create$_0(toList_0(plus(asSequence_0(this), asSequence_0(secondary))));
  }
  setMetadataFor(IterableNamespaceContext, 'IterableNamespaceContext', interfaceMeta, VOID, [NamespaceContextImpl]);
  setMetadataFor(DomReader$namespaceContext$1, VOID, classMeta, VOID, [IterableNamespaceContext]);
  function get_name() {
    return qname(this.th8(), this.uh8(), this.vh8());
  }
  function require_0(type, namespace, name) {
    if (!this.ah9().equals(type))
      throw XmlException_init_$Create$('Type ' + this.ah9() + ' does not match expected type "' + type + '"');
    else if (!(namespace == null) ? !(this.th8() === namespace) : false)
      throw XmlException_init_$Create$('Namespace ' + this.th8() + ' does not match expected "' + namespace + '"');
    else if (!(name == null) ? !(this.uh8() === name) : false)
      throw XmlException_init_$Create$('local name ' + this.uh8() + ' does not match expected "' + name + '"');
  }
  function require_1(type, name) {
    var tmp0_safe_receiver = name;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      tmp$ret$0 = tmp0_safe_receiver.rhc();
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = name;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'nl.adaptivity.xmlutil.localPart' call
      tmp$ret$1 = tmp1_safe_receiver.shc();
      tmp_1 = tmp$ret$1;
    }
    return this.lh9(type, tmp_0, tmp_1);
  }
  function getAttributeName(index) {
    return qname(this.gh9(index), this.ih9(index), this.hh9(index));
  }
  function getAttributeValue(name) {
    var tmp$ret$0;
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    tmp$ret$0 = name.rhc();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.localPart' call
    tmp$ret$1 = name.shc();
    return this.kh9(tmp, tmp$ret$1);
  }
  function isWhitespace() {
    return this.ah9() === EventType_IGNORABLE_WHITESPACE_getInstance() ? true : this.ah9() === EventType_TEXT_getInstance() ? isXmlWhitespace(this.h53()) : false;
  }
  setMetadataFor(XmlReader, 'XmlReader', interfaceMeta, VOID, [Iterator]);
  setMetadataFor(DomReader, 'DomReader', classMeta, VOID, [XmlReader]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DomWriter$namespaceContext$1, VOID, classMeta, VOID, [NamespaceContextImpl]);
  function namespaceAttr(namespace) {
    this.mha(namespace.vh8(), namespace.th8());
  }
  function processingInstruction(target, data) {
    return this.iha(target + ' ' + data);
  }
  function startDocument$default(version, encoding, standalone, $super) {
    version = version === VOID ? null : version;
    encoding = encoding === VOID ? null : encoding;
    standalone = standalone === VOID ? null : standalone;
    var tmp;
    if ($super === VOID) {
      this.sha(version, encoding, standalone);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.sha.call(this, version, encoding, standalone);
    }
    return tmp;
  }
  setMetadataFor(XmlWriter, 'XmlWriter', interfaceMeta);
  setMetadataFor(PlatformXmlWriterBase, 'PlatformXmlWriterBase', classMeta, VOID, [XmlWriter]);
  setMetadataFor(DomWriter, 'DomWriter', classMeta, PlatformXmlWriterBase, [PlatformXmlWriterBase, XmlWriter]);
  setMetadataFor(EventType, 'EventType', classMeta, Enum);
  setMetadataFor(EventType$START_DOCUMENT, 'START_DOCUMENT', classMeta, EventType);
  setMetadataFor(EventType$START_ELEMENT, 'START_ELEMENT', classMeta, EventType);
  setMetadataFor(EventType$END_ELEMENT, 'END_ELEMENT', classMeta, EventType);
  setMetadataFor(EventType$COMMENT, 'COMMENT', classMeta, EventType);
  setMetadataFor(EventType$TEXT, 'TEXT', classMeta, EventType);
  setMetadataFor(EventType$CDSECT, 'CDSECT', classMeta, EventType);
  setMetadataFor(EventType$DOCDECL, 'DOCDECL', classMeta, EventType);
  setMetadataFor(EventType$END_DOCUMENT, 'END_DOCUMENT', classMeta, EventType);
  setMetadataFor(EventType$ENTITY_REF, 'ENTITY_REF', classMeta, EventType);
  setMetadataFor(EventType$IGNORABLE_WHITESPACE, 'IGNORABLE_WHITESPACE', classMeta, EventType);
  setMetadataFor(EventType$ATTRIBUTE, 'ATTRIBUTE', classMeta, EventType);
  setMetadataFor(EventType$PROCESSING_INSTRUCTION, 'PROCESSING_INSTRUCTION', classMeta, EventType);
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Namespace, 'Namespace', interfaceMeta);
  setMetadataFor(QNameSerializer, 'QNameSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SimpleIterator, 'SimpleIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(SimpleNamespace, 'SimpleNamespace', classMeta, VOID, [Namespace]);
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SimpleNamespaceContext, 'SimpleNamespaceContext', classMeta, VOID, [IterableNamespaceContext], VOID, {0: Companion_getInstance_2});
  setMetadataFor(XMLConstants, 'XMLConstants', objectMeta);
  setMetadataFor(XmlBufferedReaderBase, 'XmlBufferedReaderBase', classMeta, VOID, [XmlReader]);
  setMetadataFor(XmlBufferedReader, 'XmlBufferedReader', classMeta, XmlBufferedReaderBase);
  setMetadataFor(XmlDelegatingReader, 'XmlDelegatingReader', classMeta, VOID, [XmlReader]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(XmlEvent, 'XmlEvent', classMeta);
  setMetadataFor(TextEvent, 'TextEvent', classMeta, XmlEvent);
  setMetadataFor(ProcessingInstructionEvent, 'ProcessingInstructionEvent', classMeta, TextEvent);
  setMetadataFor(EntityRefEvent, 'EntityRefEvent', classMeta, TextEvent);
  setMetadataFor(EndDocumentEvent, 'EndDocumentEvent', classMeta, XmlEvent);
  setMetadataFor(NamedEvent, 'NamedEvent', classMeta, XmlEvent);
  setMetadataFor(EndElementEvent, 'EndElementEvent', classMeta, NamedEvent);
  setMetadataFor(StartDocumentEvent, 'StartDocumentEvent', classMeta, XmlEvent);
  setMetadataFor(StartElementEvent, 'StartElementEvent', classMeta, NamedEvent);
  setMetadataFor(Attribute, 'Attribute', classMeta, XmlEvent);
  setMetadataFor(NamespaceImpl, 'NamespaceImpl', classMeta, VOID, [Namespace]);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(XmlException, 'XmlException', classMeta, IOException);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(XmlDeclMode, 'XmlDeclMode', classMeta, Enum);
  setMetadataFor(EscapeMode, 'EscapeMode', classMeta, Enum);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(WriteState, 'WriteState', classMeta, Enum);
  setMetadataFor(KtXmlWriter, 'KtXmlWriter', classMeta, PlatformXmlWriterBase, [PlatformXmlWriterBase, XmlWriter]);
  setMetadataFor(asCodePoints$1$iterator$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(asCodePoints$1, VOID, classMeta);
  setMetadataFor(XmlVersion, 'XmlVersion', classMeta, Enum);
  setMetadataFor(NamespaceHolder$namespaceContext$1, VOID, classMeta, VOID, [IterableNamespaceContext]);
  setMetadataFor(NamespaceHolder$iterator$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(NamespaceHolder, 'NamespaceHolder', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(NamedNodeMapIterator, 'NamedNodeMapIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(NodeConsts, 'NodeConsts', objectMeta);
  setMetadataFor(NodeListIterator, 'NodeListIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(ICompactFragment, 'ICompactFragment', interfaceMeta);
  setMetadataFor(QName, 'QName', classMeta);
  setMetadataFor(XmlStreaming, 'XmlStreaming', objectMeta);
  setMetadataFor(WriterXmlWriter, 'WriterXmlWriter', classMeta, VOID, [XmlWriter]);
  setMetadataFor(Writer, 'Writer', classMeta);
  setMetadataFor(StringWriter, 'StringWriter', classMeta, Writer);
  setMetadataFor(Factory, 'Factory', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(CompactFragment, 'CompactFragment', classMeta, VOID, [ICompactFragment]);
  setMetadataFor(FragmentNamespaceContext, 'FragmentNamespaceContext', classMeta, SimpleNamespaceContext);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(XMLFragmentStreamReader, 'XMLFragmentStreamReader', classMeta, XmlDelegatingReader);
  //endregion
  function DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9(this$0, resultContinuation) {
    this.vh7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9).dh8 = function ($this$sequence, $completion) {
    var tmp = this.eh8($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9).yl = function (p1, $completion) {
    return this.dh8(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 8;
            this.xh7_1 = this.vh7_1.fh8_1;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.xh7_1 == null)) {
              this.dl_1 = 7;
              continue $sm;
            }

            var tmp_0 = this;
            tmp_0.yh7_1 = this.xh7_1.attributes;
            this.zh7_1 = this.yh7_1.length;
            this.ah8_1 = until(0, this.zh7_1).d();
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (!this.ah8_1.e()) {
              this.dl_1 = 6;
              continue $sm;
            }

            this.bh8_1 = this.ah8_1.f();
            var tmp_1 = this;
            var tmp_2 = this.yh7_1.item(this.bh8_1);
            tmp_1.ch8_1 = (!(tmp_2 == null) ? isObject(tmp_2) : false) ? tmp_2 : THROW_CCE();
            if (this.ch8_1.prefix === 'xmlns') {
              this.dl_1 = 4;
              var tmp0_elvis_lhs = this.ch8_1.localName;
              suspendResult = this.wh7_1.i5(new NamespaceImpl(tmp0_elvis_lhs == null ? this.ch8_1.name : tmp0_elvis_lhs, this.ch8_1.value), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3;
              var tmp0_isNullOrEmpty = this.ch8_1.prefix;
              if (tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0) {
                tmp_3 = this.ch8_1.localName === 'xmlns';
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                this.dl_1 = 3;
                suspendResult = this.wh7_1.i5(new NamespaceImpl('', this.ch8_1.value), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dl_1 = 5;
                continue $sm;
              }
            }

          case 3:
            this.dl_1 = 5;
            continue $sm;
          case 4:
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.dl_1 = 2;
            continue $sm;
          case 6:
            this.xh7_1 = this.xh7_1.parentElement;
            this.dl_1 = 1;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 8) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9).eh8 = function ($this$sequence, completion) {
    var i = new DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9(this.vh7_1, completion);
    i.wh7_1 = $this$sequence;
    return i;
  };
  function DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9_0(this$0, resultContinuation) {
    var i = new DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.dh8($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_namespaceAttrs__14mg2s($this) {
    var tmp0_elvis_lhs = $this.lh8_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'nl.adaptivity.xmlutil.util.filterTyped' call
      var tmp0_filterTyped = _get_requireCurrentElem__bg81k8($this).attributes;
      // Inline function 'kotlin.collections.mutableListOf' call
      var result = ArrayList_init_$Create$();
      // Inline function 'nl.adaptivity.xmlutil.util.forEachAttr' call
      var l = tmp0_filterTyped.length;
      var inductionVariable = 0;
      if (inductionVariable < l)
        do {
          var idx = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'nl.adaptivity.xmlutil.util.filterTyped.<anonymous>' call
          var tmp_0 = tmp0_filterTyped.item(idx);
          var tmp0_anonymous = (!(tmp_0 == null) ? isObject(tmp_0) : false) ? tmp_0 : THROW_CCE();
          // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-namespaceAttrs>.<anonymous>' call
          var tmp_1;
          var tmp_2;
          var tmp_3;
          if (tmp0_anonymous.namespaceURI == null) {
            tmp_3 = true;
          } else {
            var tmp_4 = tmp0_anonymous.namespaceURI;
            XMLConstants_getInstance();
            tmp_3 = tmp_4 === 'http://www.w3.org/2000/xmlns/';
          }
          if (tmp_3) {
            var tmp_5;
            if (tmp0_anonymous.prefix === 'xmlns') {
              tmp_5 = true;
            } else {
              var tmp_6;
              // Inline function 'kotlin.text.isNullOrEmpty' call
              var tmp0_isNullOrEmpty = tmp0_anonymous.prefix;
              // Inline function 'kotlin.contracts.contract' call
              if (tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0) {
                tmp_6 = tmp0_anonymous.localName === 'xmlns';
              } else {
                tmp_6 = false;
              }
              tmp_5 = tmp_6;
            }
            tmp_2 = tmp_5;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            var tmp_7 = tmp0_anonymous.value;
            XMLConstants_getInstance();
            tmp_1 = !(tmp_7 === 'http://www.w3.org/2000/xmlns/');
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            result.a(tmp0_anonymous);
          }
        }
         while (inductionVariable < l);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-namespaceAttrs>.<anonymous>' call
      $this.lh8_1 = result;
      tmp = result;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_requireCurrent__f4sn5j($this) {
    var tmp0_elvis_lhs = $this.hh8_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No current element');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_requireCurrentElem__bg81k8($this) {
    var tmp0_elvis_lhs = $this.mh8();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No current element');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_locationInfo_$helper_86tu52(node, result) {
    var tmp;
    var tmp_0;
    if (node == null) {
      tmp_0 = true;
    } else {
      var tmp_1 = node.nodeType;
      NodeConsts_getInstance();
      tmp_0 = tmp_1 === 9;
    }
    if (tmp_0) {
      tmp = result;
    } else {
      if (get_isElement_0(node)) {
        // Inline function 'kotlin.apply' call
        var tmp0_apply = _get_locationInfo_$helper_86tu52(node.parentNode, result);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-locationInfo>.helper.<anonymous>' call
        tmp0_apply.i9(_Char___init__impl__6a9atx(47)).b(node.nodeName);
        tmp = tmp0_apply;
      } else {
        if (get_isText(node)) {
          // Inline function 'kotlin.apply' call
          var tmp1_apply = _get_locationInfo_$helper_86tu52(node.parentNode, result);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-locationInfo>.helper.<anonymous>' call
          tmp1_apply.b('/text()');
          tmp = tmp1_apply;
        } else {
          // Inline function 'kotlin.apply' call
          var tmp2_apply = _get_locationInfo_$helper_86tu52(node.parentNode, result);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-locationInfo>.helper.<anonymous>' call
          tmp2_apply.b('/.');
          tmp = tmp2_apply;
        }
      }
    }
    return tmp;
  }
  function DomReader$namespaceContext$1(this$0) {
    var tmp = this;
    var tmp_0 = _get_requireCurrent__f4sn5j(this$0);
    var tmp0_elvis_lhs = isObject(tmp_0) ? tmp_0 : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = _get_requireCurrent__f4sn5j(this$0).parentNode;
      tmp_1 = (!(tmp_2 == null) ? isObject(tmp_2) : false) ? tmp_2 : null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.fh8_1 = tmp_1;
  }
  protoOf(DomReader$namespaceContext$1).nh8 = function (prefix) {
    var tmp0_safe_receiver = this.fh8_1;
    return tmp0_safe_receiver == null ? null : myLookupNamespaceURI(tmp0_safe_receiver, prefix);
  };
  protoOf(DomReader$namespaceContext$1).oh8 = function (namespaceURI) {
    var tmp0_safe_receiver = this.fh8_1;
    return tmp0_safe_receiver == null ? null : myLookupPrefix(tmp0_safe_receiver, namespaceURI);
  };
  protoOf(DomReader$namespaceContext$1).ph8 = function () {
    return this;
  };
  protoOf(DomReader$namespaceContext$1).d = function () {
    return sequence(DomReader$_get_namespaceContext_$o$iterator$slambda_vvguk9_0(this, null)).d();
  };
  protoOf(DomReader$namespaceContext$1).qh8 = function (namespaceURI) {
    return listOfNotNull(this.oh8(namespaceURI)).d();
  };
  function DomReader(delegate) {
    this.gh8_1 = delegate;
    this.hh8_1 = null;
    this.ih8_1 = false;
    this.jh8_1 = false;
    this.kh8_1 = 0;
    this.lh8_1 = null;
  }
  protoOf(DomReader).th8 = function () {
    var tmp0_safe_receiver = this.mh8();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-namespaceURI>.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver.namespaceURI;
      tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw XmlException_init_$Create$('Only elements have a namespace uri');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(DomReader).uh8 = function () {
    var tmp0_safe_receiver = this.mh8();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-localName>.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver.localName;
      tmp = tmp0_elvis_lhs == null ? tmp0_safe_receiver.tagName : tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw XmlException_init_$Create$('Only elements have a local name');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(DomReader).vh8 = function () {
    var tmp0_safe_receiver = this.mh8();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-prefix>.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver.prefix;
      tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw XmlException_init_$Create$('Only elements have a prefix');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(DomReader).wh8 = function () {
    return this.ih8_1;
  };
  protoOf(DomReader).i3v = function () {
    return this.kh8_1;
  };
  protoOf(DomReader).xh8 = function () {
    var c = _get_requireCurrent__f4sn5j(this);
    // Inline function 'kotlin.require' call
    var tmp = c.nodeType;
    NodeConsts_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === 7)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'nl.adaptivity.xmlutil.dom.getTarget' call
    return (isObject(c) ? c : THROW_CCE()).target;
  };
  protoOf(DomReader).yh8 = function () {
    var c = _get_requireCurrent__f4sn5j(this);
    // Inline function 'kotlin.require' call
    var tmp = c.nodeType;
    NodeConsts_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp === 7)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'nl.adaptivity.xmlutil.dom.getData' call
    return (isObject(c) ? c : THROW_CCE()).data;
  };
  protoOf(DomReader).h53 = function () {
    var tmp0_safe_receiver = this.hh8_1;
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nodeType;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3 = tmp1_subject == null ? null : tmp1_subject;
    NodeConsts_getInstance();
    if (tmp_3 === 5) {
      tmp_2 = true;
    } else {
      var tmp_4 = tmp1_subject == null ? null : tmp1_subject;
      NodeConsts_getInstance();
      tmp_2 = tmp_4 === 8;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var tmp_5 = tmp1_subject == null ? null : tmp1_subject;
      NodeConsts_getInstance();
      tmp_1 = tmp_5 === 3;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_6 = tmp1_subject == null ? null : tmp1_subject;
      NodeConsts_getInstance();
      tmp_0 = tmp_6 === 4;
    }
    if (tmp_0) {
      var tmp_7 = this.hh8_1;
      tmp = ((!(tmp_7 == null) ? isObject(tmp_7) : false) ? tmp_7 : THROW_CCE()).data;
    } else {
      var tmp_8 = tmp1_subject == null ? null : tmp1_subject;
      NodeConsts_getInstance();
      if (tmp_8 === 7) {
        // Inline function 'kotlin.let' call
        var tmp_9 = this.hh8_1;
        var tmp0_let = (!(tmp_9 == null) ? isObject(tmp_9) : false) ? tmp_9 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-text>.<anonymous>' call
        var tmp_10 = tmp0_let.nodeName;
        // Inline function 'nl.adaptivity.xmlutil.dom.getData' call
        tmp = tmp_10 + ' ' + tmp0_let.data;
      } else {
        throw XmlException_init_$Create$('Node is not a text node');
      }
    }
    return tmp;
  };
  protoOf(DomReader).zh8 = function () {
    var tmp = this.hh8_1;
    var tmp0_safe_receiver = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.attributes;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
    return tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
  };
  protoOf(DomReader).ah9 = function () {
    var c = this.hh8_1;
    return c == null ? EventType_END_DOCUMENT_getInstance() : toEventType(c, this.jh8_1);
  };
  protoOf(DomReader).bh9 = function () {
    return _get_locationInfo_$helper_86tu52(this.hh8_1, StringBuilder_init_$Create$()).toString();
  };
  protoOf(DomReader).mh8 = function () {
    var tmp0_safe_receiver = this.hh8_1;
    var tmp;
    var tmp2_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nodeType;
    var tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver;
    NodeConsts_getInstance();
    if (tmp_0 === 1) {
      var tmp_1 = this.hh8_1;
      tmp = (!(tmp_1 == null) ? isObject(tmp_1) : false) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(DomReader).ch9 = function () {
    return new DomReader$namespaceContext$1(this);
  };
  protoOf(DomReader).dh9 = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = _get_namespaceAttrs__14mg2s(this);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'nl.adaptivity.xmlutil.DomReader.<get-namespaceDecls>.<anonymous>' call
      tmp$ret$0 = item.prefix === 'xmlns' ? new NamespaceImpl(ensureNotNull(item.localName), item.value) : new NamespaceImpl('', item.value);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp0_mapTo;
  };
  protoOf(DomReader).eh9 = function () {
    var d = this.gh8_1;
    var tmp;
    var tmp_0 = d.nodeType;
    NodeConsts_getInstance();
    if (tmp_0 === 9) {
      tmp = (isObject(d) ? d : THROW_CCE()).inputEncoding;
    } else {
      tmp = ensureNotNull(d.ownerDocument).inputEncoding;
    }
    return tmp;
  };
  protoOf(DomReader).fh9 = function () {
    return null;
  };
  protoOf(DomReader).ufg = function () {
    return '1.0';
  };
  protoOf(DomReader).e = function () {
    var tmp;
    var tmp_0;
    if (this.jh8_1) {
      var tmp0_safe_receiver = this.hh8_1;
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.parentNode) == null;
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.hh8_1, this.gh8_1);
    }
    return tmp;
  };
  protoOf(DomReader).f = function () {
    this.lh8_1 = null;
    var c = this.hh8_1;
    if (c == null) {
      this.ih8_1 = true;
      this.hh8_1 = this.gh8_1;
      return EventType_START_DOCUMENT_getInstance();
    } else {
      if (this.jh8_1) {
        if (!(c.nextSibling == null)) {
          this.hh8_1 = c.nextSibling;
          this.jh8_1 = false;
        } else {
          this.hh8_1 = c.parentNode;
          var tmp0_safe_receiver = this.hh8_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toEventType(tmp0_safe_receiver, true);
          return tmp1_elvis_lhs == null ? EventType_END_DOCUMENT_getInstance() : tmp1_elvis_lhs;
        }
      } else if (!(c.firstChild == null)) {
        this.hh8_1 = c.firstChild;
      } else {
        this.jh8_1 = true;
        return EventType_END_ELEMENT_getInstance();
      }
      var c2 = _get_requireCurrent__f4sn5j(this);
      var nodeType = c2.nodeType;
      var tmp;
      var tmp_0 = nodeType;
      NodeConsts_getInstance();
      if (!(tmp_0 === 1)) {
        var tmp_1 = nodeType;
        NodeConsts_getInstance();
        tmp = !(tmp_1 === 9);
      } else {
        tmp = false;
      }
      if (tmp) {
        this.jh8_1 = true;
      }
      return toEventType(c2, this.jh8_1);
    }
  };
  protoOf(DomReader).gh9 = function (index) {
    var tmp0_elvis_lhs = get(_get_requireCurrentElem__bg81k8(this).attributes, index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var attr = tmp;
    var tmp1_elvis_lhs = attr.namespaceURI;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  };
  protoOf(DomReader).hh9 = function (index) {
    var tmp0_elvis_lhs = get(_get_requireCurrentElem__bg81k8(this).attributes, index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var attr = tmp;
    var tmp1_elvis_lhs = attr.prefix;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  };
  protoOf(DomReader).ih9 = function (index) {
    var tmp0_elvis_lhs = get(_get_requireCurrentElem__bg81k8(this).attributes, index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var attr = tmp;
    var tmp1_elvis_lhs = attr.localName;
    return tmp1_elvis_lhs == null ? attr.name : tmp1_elvis_lhs;
  };
  protoOf(DomReader).jh9 = function (index) {
    var tmp0_elvis_lhs = get(_get_requireCurrentElem__bg81k8(this).attributes, index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var attr = tmp;
    return attr.value;
  };
  protoOf(DomReader).kh9 = function (nsUri, localName) {
    return _get_requireCurrentElem__bg81k8(this).getAttributeNS(nsUri, localName);
  };
  protoOf(DomReader).o1y = function () {
    this.hh8_1 = null;
  };
  function toEventType(_this__u8e3s4, endOfElement) {
    var tmp0_subject = _this__u8e3s4.nodeType;
    var tmp;
    var tmp_0 = tmp0_subject;
    NodeConsts_getInstance();
    if (tmp_0 === 2) {
      tmp = EventType_ATTRIBUTE_getInstance();
    } else {
      var tmp_1 = tmp0_subject;
      NodeConsts_getInstance();
      if (tmp_1 === 4) {
        tmp = EventType_CDSECT_getInstance();
      } else {
        var tmp_2 = tmp0_subject;
        NodeConsts_getInstance();
        if (tmp_2 === 8) {
          tmp = EventType_COMMENT_getInstance();
        } else {
          var tmp_3 = tmp0_subject;
          NodeConsts_getInstance();
          if (tmp_3 === 10) {
            tmp = EventType_DOCDECL_getInstance();
          } else {
            var tmp_4 = tmp0_subject;
            NodeConsts_getInstance();
            if (tmp_4 === 5) {
              tmp = EventType_ENTITY_REF_getInstance();
            } else {
              var tmp_5;
              var tmp_6 = tmp0_subject;
              NodeConsts_getInstance();
              if (tmp_6 === 11) {
                tmp_5 = true;
              } else {
                var tmp_7 = tmp0_subject;
                NodeConsts_getInstance();
                tmp_5 = tmp_7 === 9;
              }
              if (tmp_5) {
                tmp = endOfElement ? EventType_END_DOCUMENT_getInstance() : EventType_START_DOCUMENT_getInstance();
              } else {
                var tmp_8 = tmp0_subject;
                NodeConsts_getInstance();
                if (tmp_8 === 7) {
                  tmp = EventType_PROCESSING_INSTRUCTION_getInstance();
                } else {
                  var tmp_9 = tmp0_subject;
                  NodeConsts_getInstance();
                  if (tmp_9 === 3) {
                    tmp = isXmlWhitespace_1(ensureNotNull(_this__u8e3s4.textContent)) ? EventType_IGNORABLE_WHITESPACE_getInstance() : EventType_TEXT_getInstance();
                  } else {
                    var tmp_10 = tmp0_subject;
                    NodeConsts_getInstance();
                    if (tmp_10 === 1) {
                      tmp = endOfElement ? EventType_END_ELEMENT_getInstance() : EventType_START_ELEMENT_getInstance();
                    } else {
                      throw XmlException_init_$Create$('Unsupported event type (' + _this__u8e3s4 + ')');
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
  function collectDeclaredPrefixes(_this__u8e3s4, $this, namespaceUri, result, redeclared) {
    // Inline function 'nl.adaptivity.xmlutil.util.forEachAttr' call
    var tmp0_forEachAttr = _this__u8e3s4.attributes;
    var l = tmp0_forEachAttr.length;
    var inductionVariable = 0;
    if (inductionVariable < l)
      do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'nl.adaptivity.xmlutil.<no name provided>.collectDeclaredPrefixes.<anonymous>' call
        var tmp = tmp0_forEachAttr.item(idx);
        var tmp1_anonymous = (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE();
        var tmp_0;
        if (tmp1_anonymous.prefix === 'xmlns') {
          tmp_0 = tmp1_anonymous.localName;
        } else {
          var tmp_1;
          // Inline function 'kotlin.text.isNullOrEmpty' call
          var tmp0_isNullOrEmpty = tmp1_anonymous.prefix;
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0) {
            tmp_1 = tmp1_anonymous.localName === 'xmlns';
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = '';
          } else {
            tmp_0 = null;
          }
        }
        var prefix = tmp_0;
        if (!(prefix == null)) {
          if (redeclared.n(prefix)) {
            if (tmp1_anonymous.value === namespaceUri) {
              result.a(prefix);
            }
            redeclared.a(prefix);
          }
        }
      }
       while (inductionVariable < l);
    var tmp0_safe_receiver = _this__u8e3s4.parentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      collectDeclaredPrefixes(tmp0_safe_receiver, $this, namespaceUri, result, redeclared);
    }
  }
  function DomWriter_init_$Init$(xmlDeclMode, $this) {
    xmlDeclMode = xmlDeclMode === VOID ? XmlDeclMode_None_getInstance() : xmlDeclMode;
    DomWriter.call($this, null, VOID, xmlDeclMode);
    return $this;
  }
  function DomWriter_init_$Create$(xmlDeclMode) {
    return DomWriter_init_$Init$(xmlDeclMode, objectCreate(protoOf(DomWriter)));
  }
  function writeIndent($this, newDepth) {
    var indentSeq = $this.mh9_1;
    var tmp;
    var tmp_0;
    if ($this.th9_1 >= 0) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !indentSeq.l();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !($this.th9_1 === $this.vh9_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.zh9('\n');
      try {
        $this.mh9_1 = emptyList();
        // Inline function 'kotlin.repeat' call
        var tmp0_repeat = $this.vh9_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'nl.adaptivity.xmlutil.DomWriter.writeIndent.<anonymous>' call
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = indentSeq.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              // Inline function 'nl.adaptivity.xmlutil.DomWriter.writeIndent.<anonymous>.<anonymous>' call
              element.dha($this);
            }
          }
           while (inductionVariable < tmp0_repeat);
      }finally {
        $this.mh9_1 = indentSeq;
      }
    }
    $this.th9_1 = newDepth;
  }
  function writeIndent$default($this, newDepth, $super) {
    newDepth = newDepth === VOID ? $this.vh9_1 : newDepth;
    return writeIndent($this, newDepth);
  }
  function addToPending($this, operation) {
    if ($this.qh9_1 == null) {
      var tmp = $this.sh9_1;
      (isInterface(tmp, MutableList) ? tmp : THROW_CCE()).a(operation);
    } else
      throw IllegalStateException_init_$Create$('Use of pending list when there is a document already');
  }
  function requireCurrent($this, error) {
    var tmp = $this.rh9_1;
    var tmp0_elvis_lhs = (!(tmp == null) ? isObject(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw XmlException_init_$Create$('The current node is not an element: ' + error);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function Companion() {
    Companion_instance = this;
    this.eha_1 = -1;
    this.fha_1 = 2147483647;
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function DomWriter$namespaceContext$1(this$0) {
    this.gha_1 = this$0;
  }
  protoOf(DomWriter$namespaceContext$1).nh8 = function (prefix) {
    var tmp0_safe_receiver = this.gha_1.rh9_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lookupNamespaceURI(prefix);
  };
  protoOf(DomWriter$namespaceContext$1).oh8 = function (namespaceURI) {
    var tmp0_safe_receiver = this.gha_1.rh9_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lookupPrefix(namespaceURI);
  };
  protoOf(DomWriter$namespaceContext$1).qh8 = function (namespaceURI) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.buildSet' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildSetInternal' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.<no name provided>.getPrefixesCompat.<anonymous>' call
    var tmp = this.gha_1.rh9_1;
    var tmp0_safe_receiver = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      collectDeclaredPrefixes(tmp0_safe_receiver, this, namespaceURI, tmp0_apply, tmp$ret$0);
    }
    tmp$ret$3 = tmp0_apply.df();
    return toList(tmp$ret$3).d();
  };
  function DomWriter$comment$lambda(this$0, $text) {
    return function (it) {
      this$0.hha($text);
      return Unit_getInstance();
    };
  }
  function DomWriter$text$lambda(this$0, $text) {
    return function (it) {
      this$0.zh9($text);
      return Unit_getInstance();
    };
  }
  function DomWriter$processingInstruction$lambda(this$0, $text) {
    return function (it) {
      this$0.iha($text);
      return Unit_getInstance();
    };
  }
  function DomWriter$processingInstruction$lambda_0(this$0, $target, $data) {
    return function (it) {
      this$0.jha($target, $data);
      return Unit_getInstance();
    };
  }
  function DomWriter$ignorableWhitespace$lambda(this$0, $text) {
    return function (it) {
      this$0.zh9($text);
      return Unit_getInstance();
    };
  }
  function DomWriter$docdecl$lambda(this$0, $text) {
    return function (it) {
      this$0.kha($text);
      return Unit_getInstance();
    };
  }
  function DomWriter$close$lambda(this$0) {
    return function () {
      return 'Closing a dom writer but not all elements were closed (depth:' + this$0.vh9_1 + ')';
    };
  }
  function DomWriter(current, isAppend, xmlDeclMode) {
    Companion_getInstance_0();
    isAppend = isAppend === VOID ? false : isAppend;
    xmlDeclMode = xmlDeclMode === VOID ? XmlDeclMode_None_getInstance() : xmlDeclMode;
    PlatformXmlWriterBase.call(this);
    this.oh9_1 = isAppend;
    this.ph9_1 = xmlDeclMode;
    var tmp = this;
    var tmp1_subject = current == null ? null : current.nodeType;
    var tmp_0;
    if (tmp1_subject == null) {
      tmp_0 = null;
    } else {
      var tmp_1 = tmp1_subject == null ? null : tmp1_subject;
      NodeConsts_getInstance();
      if (tmp_1 === 9) {
        tmp_0 = (!(current == null) ? isObject(current) : false) ? current : THROW_CCE();
      } else {
        tmp_0 = current.ownerDocument;
      }
    }
    tmp.qh9_1 = tmp_0;
    this.rh9_1 = current;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.sh9_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    Companion_getInstance_0();
    tmp_3.th9_1 = -1;
    var tmp_4 = this;
    tmp_4.uh9_1 = new DomWriter$namespaceContext$1(this);
    this.vh9_1 = 0;
    this.wh9_1 = null;
    this.xh9_1 = null;
    this.yh9_1 = null;
  }
  protoOf(DomWriter).lha = function () {
    var tmp0_elvis_lhs = this.qh9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw XmlException_init_$Create$('Document not created yet');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(DomWriter).ch9 = function () {
    return this.uh9_1;
  };
  protoOf(DomWriter).i3v = function () {
    return this.vh9_1;
  };
  protoOf(DomWriter).mha = function (namespacePrefix, namespaceUri) {
    var cur = requireCurrent(this, 'Namespace attribute');
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(namespacePrefix) === 0) {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(namespaceUri) === 0) {
        tmp = cur.lookupNamespaceURI('') === '';
      } else {
        tmp = false;
      }
      if (!tmp) {
        XMLConstants_getInstance();
        XMLConstants_getInstance();
        cur.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', namespaceUri);
      }
    } else {
      XMLConstants_getInstance();
      XMLConstants_getInstance();
      cur.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns' + ':' + namespacePrefix, namespaceUri);
    }
  };
  protoOf(DomWriter).nha = function (namespace, localName, prefix) {
    writeIndent$default(this);
    this.vh9_1 = this.vh9_1 + 1 | 0;
    if (this.rh9_1 == null ? this.qh9_1 == null : false) {
      var doc = createDocument(qname(namespace == null ? '' : namespace, localName, prefix));
      this.qh9_1 = doc;
      this.rh9_1 = this.qh9_1;
      var e = ensureNotNull(doc.documentElement);
      doc.removeChild(e);
      var tmp3_iterator = this.sh9_1.d();
      while (tmp3_iterator.e()) {
        var pending = tmp3_iterator.f();
        pending(doc);
      }
      doc.appendChild(e);
      var tmp = this.sh9_1;
      (isInterface(tmp, MutableList) ? tmp : THROW_CCE()).a4();
      this.th9_1 = 0;
      this.rh9_1 = doc.documentElement;
      return Unit_getInstance();
    } else if (this.rh9_1 == null ? !this.oh9_1 : false) {
      // Inline function 'kotlin.sequences.count' call
      var count = 0;
      var tmp0_iterator = asSequence(iterator_0(this.lha().childNodes)).d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'nl.adaptivity.xmlutil.DomWriter.startTag.<anonymous>' call
        var tmp_0 = element.nodeType;
        NodeConsts_getInstance();
        if (tmp_0 === 1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      if (count > 0) {
        removeElementChildren(this.lha());
      }
    }
    // Inline function 'kotlin.let' call
    var tmp1_let = createElement(this.lha(), qname(namespace, localName, prefix));
    // Inline function 'kotlin.contracts.contract' call
    ensureNotNull(this.rh9_1).appendChild(tmp1_let);
    this.rh9_1 = tmp1_let;
  };
  protoOf(DomWriter).hha = function (text) {
    writeIndent$default(this);
    var ce = this.rh9_1;
    if (ce == null) {
      addToPending(this, DomWriter$comment$lambda(this, text));
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.lha().createComment(text);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomWriter.comment.<anonymous>' call
      ce.appendChild(tmp0_let);
    }
  };
  protoOf(DomWriter).oha = function (text) {
    var tmp = this;
    Companion_getInstance_0();
    tmp.th9_1 = -1;
    var ce = this.rh9_1;
    if (ce == null) {
      if (isBlank(text)) {
        addToPending(this, DomWriter$text$lambda(this, text));
      } else
        throw XmlException_init_$Create$('Not in an element -- text');
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.lha().createTextNode(text);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomWriter.text.<anonymous>' call
      ce.appendChild(tmp0_let);
    }
  };
  protoOf(DomWriter).pha = function (text) {
    var tmp = this;
    Companion_getInstance_0();
    tmp.th9_1 = -1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.lha().createCDATASection(text);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.DomWriter.cdsect.<anonymous>' call
    var tmp0_safe_receiver = this.rh9_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.appendChild(tmp0_let);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw XmlException_init_$Create$('Not in an element -- cdsect');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
  };
  protoOf(DomWriter).qha = function (text) {
    var tmp = this;
    Companion_getInstance_0();
    tmp.th9_1 = -1;
    throw UnsupportedOperationException_init_$Create$('Creating entity references is not supported (or incorrect) in most browsers');
  };
  protoOf(DomWriter).iha = function (text) {
    Companion_getInstance_0();
    writeIndent(this, 2147483647);
    var tmp0_safe_receiver = this.rh9_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nodeType;
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    NodeConsts_getInstance();
    if (!(tmp === 1))
      throw XmlException_init_$Create$('Document already started');
    if (this.qh9_1 == null) {
      addToPending(this, DomWriter$processingInstruction$lambda(this, text));
    } else {
      var split = indexOf(text, _Char___init__impl__6a9atx(32));
      var tmp_0;
      if (split < 0) {
        tmp_0 = to(text, '');
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = text.substring(0, split);
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = split + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = text.substring(tmp0_substring);
        tmp_0 = to(tmp_1, tmp$ret$3);
      }
      var tmp2_container = tmp_0;
      var target = tmp2_container.y4();
      var data = tmp2_container.z4();
      // Inline function 'kotlin.let' call
      var tmp1_let = this.lha().createProcessingInstruction(target, data);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomWriter.processingInstruction.<anonymous>' call
      this.lha().appendChild(tmp1_let);
    }
  };
  protoOf(DomWriter).jha = function (target, data) {
    var ce = this.rh9_1;
    if (ce == null) {
      addToPending(this, DomWriter$processingInstruction$lambda_0(this, target, data));
    } else {
      var processInstr = this.lha().createProcessingInstruction(target, data);
      ce.appendChild(processInstr);
    }
    var tmp = this;
    Companion_getInstance_0();
    tmp.th9_1 = -1;
  };
  protoOf(DomWriter).zh9 = function (text) {
    var ce = this.rh9_1;
    if (ce == null) {
      addToPending(this, DomWriter$ignorableWhitespace$lambda(this, text));
    } else {
      var tmp = ce.nodeType;
      NodeConsts_getInstance();
      if (!(tmp === 9)) {
        // Inline function 'kotlin.let' call
        var tmp0_let = this.lha().createTextNode(text);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.DomWriter.ignorableWhitespace.<anonymous>' call
        ce.appendChild(tmp0_let);
      }
    }
    var tmp_0 = this;
    Companion_getInstance_0();
    tmp_0.th9_1 = -1;
  };
  protoOf(DomWriter).rha = function (namespace, name, prefix, value) {
    var cur = requireCurrent(this, 'attribute');
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (namespace == null ? true : charSequenceLength(namespace) === 0) {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = prefix == null ? true : charSequenceLength(prefix) === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      cur.setAttribute(name, value);
    } else {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (prefix == null ? true : charSequenceLength(prefix) === 0) {
        cur.setAttributeNS(namespace, name, value);
      } else {
        var tmp_0;
        if (namespace == null) {
          XMLConstants_getInstance();
          tmp_0 = '';
        } else {
          tmp_0 = namespace;
        }
        cur.setAttributeNS(tmp_0, '' + prefix + ':' + name, value);
      }
    }
  };
  protoOf(DomWriter).kha = function (text) {
    Companion_getInstance_0();
    writeIndent(this, 2147483647);
    var target = this.qh9_1;
    if (target == null) {
      addToPending(this, DomWriter$docdecl$lambda(this, text));
    } else {
      var textElems = split(text, [' '], VOID, 3);
      var qualifiedName = textElems.m(0);
      var publicId = textElems.g() > 1 ? textElems.m(1) : '';
      var systemId = textElems.g() > 2 ? textElems.m(2) : '';
      // Inline function 'kotlin.let' call
      var tmp0_let = target.implementation.createDocumentType(qualifiedName, publicId, systemId);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.DomWriter.docdecl.<anonymous>' call
      target.appendChild(tmp0_let);
    }
  };
  protoOf(DomWriter).sha = function (version, encoding, standalone) {
    Companion_getInstance_0();
    writeIndent(this, 2147483647);
    this.wh9_1 = version;
    this.xh9_1 = encoding;
    this.yh9_1 = standalone;
  };
  protoOf(DomWriter).uha = function () {
    this.rh9_1 = null;
  };
  protoOf(DomWriter).vha = function (namespace, localName, prefix) {
    this.vh9_1 = this.vh9_1 - 1 | 0;
    Companion_getInstance_0();
    writeIndent(this, 2147483647);
    this.rh9_1 = requireCurrent(this, 'No current element or no parent element').parentNode;
  };
  protoOf(DomWriter).wha = function (prefix) {
    var tmp0_safe_receiver = this.rh9_1;
    return tmp0_safe_receiver == null ? null : myLookupNamespaceURI(tmp0_safe_receiver, prefix);
  };
  protoOf(DomWriter).xha = function (namespaceUri) {
    var tmp1_safe_receiver = this.rh9_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = myLookupPrefix(tmp1_safe_receiver, namespaceUri == null ? '' : namespaceUri);
    }
    return tmp;
  };
  protoOf(DomWriter).o1y = function () {
    var tmp = this.vh9_1 === 0;
    assert(tmp, DomWriter$close$lambda(this));
    this.rh9_1 = null;
  };
  function EventType$START_DOCUMENT() {
    EventType.call(this, 'START_DOCUMENT', 0);
    EventType_START_DOCUMENT_instance = this;
  }
  protoOf(EventType$START_DOCUMENT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.START_DOCUMENT.createEvent.<anonymous>' call
    return new StartDocumentEvent(reader.bh9(), reader.ufg(), reader.eh9(), reader.fh9());
  };
  protoOf(EventType$START_DOCUMENT).ehb = function (writer, reader) {
    writer.sha(reader.ufg(), reader.eh9(), reader.fh9());
  };
  var EventType_START_DOCUMENT_instance;
  function EventType$START_ELEMENT() {
    EventType.call(this, 'START_ELEMENT', 1);
    EventType_START_ELEMENT_instance = this;
  }
  protoOf(EventType$START_ELEMENT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.START_ELEMENT.createEvent.<anonymous>' call
    return new StartElementEvent(reader.bh9(), reader.th8(), reader.uh8(), reader.vh8(), get_attributes(reader), reader.ch9().ph8(), reader.dh9());
  };
  protoOf(EventType$START_ELEMENT).ehb = function (writer, reader) {
    writer.nha(reader.th8(), reader.uh8(), reader.vh8());
    var tmp0_iterator = reader.dh9().d();
    while (tmp0_iterator.e()) {
      var attr = tmp0_iterator.f();
      writer.mha(attr.vh8(), attr.th8());
    }
    var inductionVariable = 0;
    var last = reader.zh8();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var attrNs = reader.gh9(i);
        XMLConstants_getInstance();
        if (!(attrNs === 'http://www.w3.org/2000/xmlns/')) {
          var attrPrefix = reader.hh9(i);
          var tmp;
          if (attrNs === '') {
            tmp = '';
          } else if (attrNs === writer.ch9().nh8(attrPrefix)) {
            tmp = attrPrefix;
          } else {
            var tmp3_elvis_lhs = writer.ch9().oh8(attrNs);
            tmp = tmp3_elvis_lhs == null ? attrPrefix : tmp3_elvis_lhs;
          }
          var prefix = tmp;
          writer.rha(attrNs, reader.ih9(i), prefix, reader.jh9(i));
        }
      }
       while (inductionVariable < last);
  };
  var EventType_START_ELEMENT_instance;
  function EventType$END_ELEMENT() {
    EventType.call(this, 'END_ELEMENT', 2);
    EventType_END_ELEMENT_instance = this;
  }
  protoOf(EventType$END_ELEMENT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.END_ELEMENT.createEvent.<anonymous>' call
    return new EndElementEvent(reader.bh9(), reader.th8(), reader.uh8(), reader.vh8(), reader.ch9());
  };
  protoOf(EventType$END_ELEMENT).ehb = function (writer, reader) {
    writer.vha(reader.th8(), reader.uh8(), reader.vh8());
  };
  var EventType_END_ELEMENT_instance;
  function EventType$COMMENT() {
    EventType.call(this, 'COMMENT', 3);
    EventType_COMMENT_instance = this;
  }
  protoOf(EventType$COMMENT).hhb = function () {
    return true;
  };
  protoOf(EventType$COMMENT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.COMMENT.createEvent.<anonymous>' call
    return new TextEvent(reader.bh9(), EventType_COMMENT_getInstance(), reader.h53());
  };
  protoOf(EventType$COMMENT).ihb = function (writer, textEvent) {
    writer.hha(textEvent.cha_1);
  };
  protoOf(EventType$COMMENT).ehb = function (writer, reader) {
    writer.hha(reader.h53());
  };
  var EventType_COMMENT_instance;
  function EventType$TEXT() {
    EventType.call(this, 'TEXT', 4);
    EventType_TEXT_instance = this;
  }
  protoOf(EventType$TEXT).hhb = function () {
    return true;
  };
  protoOf(EventType$TEXT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.TEXT.createEvent.<anonymous>' call
    return new TextEvent(reader.bh9(), EventType_TEXT_getInstance(), reader.h53());
  };
  protoOf(EventType$TEXT).ihb = function (writer, textEvent) {
    writer.oha(textEvent.cha_1);
  };
  protoOf(EventType$TEXT).ehb = function (writer, reader) {
    writer.oha(reader.h53());
  };
  var EventType_TEXT_instance;
  function EventType$CDSECT() {
    EventType.call(this, 'CDSECT', 5);
    EventType_CDSECT_instance = this;
  }
  protoOf(EventType$CDSECT).hhb = function () {
    return true;
  };
  protoOf(EventType$CDSECT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.CDSECT.createEvent.<anonymous>' call
    return new TextEvent(reader.bh9(), EventType_CDSECT_getInstance(), reader.h53());
  };
  protoOf(EventType$CDSECT).ihb = function (writer, textEvent) {
    writer.pha(textEvent.cha_1);
  };
  protoOf(EventType$CDSECT).ehb = function (writer, reader) {
    writer.pha(reader.h53());
  };
  var EventType_CDSECT_instance;
  function EventType$DOCDECL() {
    EventType.call(this, 'DOCDECL', 6);
    EventType_DOCDECL_instance = this;
  }
  protoOf(EventType$DOCDECL).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.DOCDECL.createEvent.<anonymous>' call
    return new TextEvent(reader.bh9(), EventType_DOCDECL_getInstance(), reader.h53());
  };
  protoOf(EventType$DOCDECL).ihb = function (writer, textEvent) {
    writer.kha(textEvent.cha_1);
  };
  protoOf(EventType$DOCDECL).ehb = function (writer, reader) {
    writer.kha(reader.h53());
  };
  var EventType_DOCDECL_instance;
  function EventType$END_DOCUMENT() {
    EventType.call(this, 'END_DOCUMENT', 7);
    EventType_END_DOCUMENT_instance = this;
  }
  protoOf(EventType$END_DOCUMENT).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.END_DOCUMENT.createEvent.<anonymous>' call
    return new EndDocumentEvent(reader.bh9());
  };
  protoOf(EventType$END_DOCUMENT).ehb = function (writer, reader) {
    writer.uha();
  };
  var EventType_END_DOCUMENT_instance;
  function EventType$ENTITY_REF() {
    EventType.call(this, 'ENTITY_REF', 8);
    EventType_ENTITY_REF_instance = this;
  }
  protoOf(EventType$ENTITY_REF).hhb = function () {
    return true;
  };
  protoOf(EventType$ENTITY_REF).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.ENTITY_REF.createEvent.<anonymous>' call
    return new EntityRefEvent(reader.bh9(), reader.uh8(), reader.h53());
  };
  protoOf(EventType$ENTITY_REF).ihb = function (writer, textEvent) {
    writer.oha(textEvent.cha_1);
  };
  protoOf(EventType$ENTITY_REF).ehb = function (writer, reader) {
    writer.oha(reader.h53());
  };
  var EventType_ENTITY_REF_instance;
  function EventType$IGNORABLE_WHITESPACE() {
    EventType.call(this, 'IGNORABLE_WHITESPACE', 9);
    EventType_IGNORABLE_WHITESPACE_instance = this;
  }
  protoOf(EventType$IGNORABLE_WHITESPACE).hhb = function () {
    return true;
  };
  protoOf(EventType$IGNORABLE_WHITESPACE).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.IGNORABLE_WHITESPACE.createEvent.<anonymous>' call
    return new TextEvent(reader.bh9(), EventType_IGNORABLE_WHITESPACE_getInstance(), reader.h53());
  };
  protoOf(EventType$IGNORABLE_WHITESPACE).ihb = function (writer, textEvent) {
    writer.zh9(textEvent.cha_1);
  };
  protoOf(EventType$IGNORABLE_WHITESPACE).ehb = function (writer, reader) {
    writer.zh9(reader.h53());
  };
  var EventType_IGNORABLE_WHITESPACE_instance;
  function EventType$ATTRIBUTE() {
    EventType.call(this, 'ATTRIBUTE', 10);
    EventType_ATTRIBUTE_instance = this;
  }
  protoOf(EventType$ATTRIBUTE).dhb = function (reader) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.ATTRIBUTE.createEvent.<anonymous>' call
    return new Attribute(reader.bh9(), reader.th8(), reader.uh8(), reader.vh8(), reader.h53());
  };
  protoOf(EventType$ATTRIBUTE).ehb = function (writer, reader) {
    writer.rha(reader.th8(), reader.uh8(), reader.vh8(), reader.h53());
  };
  var EventType_ATTRIBUTE_instance;
  function EventType$PROCESSING_INSTRUCTION() {
    EventType.call(this, 'PROCESSING_INSTRUCTION', 11);
    EventType_PROCESSING_INSTRUCTION_instance = this;
  }
  protoOf(EventType$PROCESSING_INSTRUCTION).hhb = function () {
    return true;
  };
  protoOf(EventType$PROCESSING_INSTRUCTION).dhb = function (reader) {
    return new ProcessingInstructionEvent(reader.bh9(), reader.xh8(), reader.yh8());
  };
  protoOf(EventType$PROCESSING_INSTRUCTION).ihb = function (writer, textEvent) {
    var tmp;
    if (textEvent instanceof ProcessingInstructionEvent) {
      writer.jha(textEvent.ihc_1, textEvent.jhc_1);
      tmp = Unit_getInstance();
    } else {
      writer.iha(textEvent.cha_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(EventType$PROCESSING_INSTRUCTION).ehb = function (writer, reader) {
    writer.jha(reader.xh8(), reader.yh8());
  };
  var EventType_PROCESSING_INSTRUCTION_instance;
  var EventType_entriesInitialized;
  function EventType_initEntries() {
    if (EventType_entriesInitialized)
      return Unit_getInstance();
    EventType_entriesInitialized = true;
    EventType_START_DOCUMENT_instance = new EventType$START_DOCUMENT();
    EventType_START_ELEMENT_instance = new EventType$START_ELEMENT();
    EventType_END_ELEMENT_instance = new EventType$END_ELEMENT();
    EventType_COMMENT_instance = new EventType$COMMENT();
    EventType_TEXT_instance = new EventType$TEXT();
    EventType_CDSECT_instance = new EventType$CDSECT();
    EventType_DOCDECL_instance = new EventType$DOCDECL();
    EventType_END_DOCUMENT_instance = new EventType$END_DOCUMENT();
    EventType_ENTITY_REF_instance = new EventType$ENTITY_REF();
    EventType_IGNORABLE_WHITESPACE_instance = new EventType$IGNORABLE_WHITESPACE();
    EventType_ATTRIBUTE_instance = new EventType$ATTRIBUTE();
    EventType_PROCESSING_INSTRUCTION_instance = new EventType$PROCESSING_INSTRUCTION();
  }
  function EventType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(EventType).hhb = function () {
    return false;
  };
  protoOf(EventType).ihb = function (writer, textEvent) {
    throw UnsupportedOperationException_init_$Create$('This is not generally supported, only by text types');
  };
  function EventType_START_DOCUMENT_getInstance() {
    EventType_initEntries();
    return EventType_START_DOCUMENT_instance;
  }
  function EventType_START_ELEMENT_getInstance() {
    EventType_initEntries();
    return EventType_START_ELEMENT_instance;
  }
  function EventType_END_ELEMENT_getInstance() {
    EventType_initEntries();
    return EventType_END_ELEMENT_instance;
  }
  function EventType_COMMENT_getInstance() {
    EventType_initEntries();
    return EventType_COMMENT_instance;
  }
  function EventType_TEXT_getInstance() {
    EventType_initEntries();
    return EventType_TEXT_instance;
  }
  function EventType_CDSECT_getInstance() {
    EventType_initEntries();
    return EventType_CDSECT_instance;
  }
  function EventType_DOCDECL_getInstance() {
    EventType_initEntries();
    return EventType_DOCDECL_instance;
  }
  function EventType_END_DOCUMENT_getInstance() {
    EventType_initEntries();
    return EventType_END_DOCUMENT_instance;
  }
  function EventType_ENTITY_REF_getInstance() {
    EventType_initEntries();
    return EventType_ENTITY_REF_instance;
  }
  function EventType_IGNORABLE_WHITESPACE_getInstance() {
    EventType_initEntries();
    return EventType_IGNORABLE_WHITESPACE_instance;
  }
  function EventType_ATTRIBUTE_getInstance() {
    EventType_initEntries();
    return EventType_ATTRIBUTE_instance;
  }
  function EventType_PROCESSING_INSTRUCTION_getInstance() {
    EventType_initEntries();
    return EventType_PROCESSING_INSTRUCTION_instance;
  }
  function Namespace$Companion$descriptor$lambda($this$buildClassSerialDescriptor) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$2 = (isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE()).kgo();
    $this$buildClassSerialDescriptor.vgo('prefix', tmp$ret$2);
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.descriptors.serialDescriptor' call
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp0_cast_0 = serializer(createKType(PrimitiveClasses_getInstance().li(), arrayOf([]), false));
    tmp$ret$5 = (isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE()).kgo();
    $this$buildClassSerialDescriptor.vgo('namespaceURI', tmp$ret$5);
    return Unit_getInstance();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = ensureNotNull(getKClass(Namespace).mh());
    tmp.khc_1 = buildClassSerialDescriptor(tmp_0, [], Namespace$Companion$descriptor$lambda);
  }
  protoOf(Companion_0).kgo = function () {
    return this.khc_1;
  };
  protoOf(Companion_0).mgo = function (decoder) {
    var prefix = {_v: null};
    var namespaceUri = {_v: null};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.khc_1;
    var composite = decoder.pgr(tmp0_decodeStructure);
    var index = composite.ggs(Companion_getInstance_1().khc_1);
    $l$loop: while (true) {
      var tmp = index;
      Companion_getInstance();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
      var tmp0_subject = index;
      if (tmp0_subject === 0) {
        prefix._v = composite.zgr(Companion_getInstance_1().khc_1, index);
      } else if (tmp0_subject === 1) {
        namespaceUri._v = composite.zgr(Companion_getInstance_1().khc_1, index);
      }
      index = composite.ggs(Companion_getInstance_1().khc_1);
    }
    var result = Unit_getInstance();
    composite.qgr(tmp0_decodeStructure);
    var tmp_0;
    if (prefix._v == null) {
      throwUninitializedPropertyAccessException('prefix');
    } else {
      tmp_0 = prefix._v;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (namespaceUri._v == null) {
      throwUninitializedPropertyAccessException('namespaceUri');
    } else {
      tmp_2 = namespaceUri._v;
    }
    return new NamespaceImpl(tmp_1, tmp_2);
  };
  protoOf(Companion_0).lhc = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.khc_1;
    var composite = encoder.pgr(tmp0_encodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.Companion.serialize.<anonymous>' call
    composite.dgt(Companion_getInstance_1().khc_1, 0, value.vh8());
    composite.dgt(Companion_getInstance_1().khc_1, 1, value.th8());
    composite.qgr(tmp0_encodeStructure);
  };
  protoOf(Companion_0).lgo = function (encoder, value) {
    return this.lhc(encoder, (!(value == null) ? isInterface(value, Namespace) : false) ? value : THROW_CCE());
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Namespace() {
  }
  function IterableNamespaceContext() {
  }
  function QNameSerializer$descriptor$lambda($this$buildClassSerialDescriptor) {
    var stringSerializer = serializer_0(StringCompanionObject_getInstance());
    $this$buildClassSerialDescriptor.vgo('namespace', stringSerializer.kgo(), VOID, true);
    $this$buildClassSerialDescriptor.vgo('localPart', stringSerializer.kgo());
    $this$buildClassSerialDescriptor.vgo('prefix', stringSerializer.kgo(), VOID, true);
    return Unit_getInstance();
  }
  function QNameSerializer() {
    QNameSerializer_instance = this;
    var tmp = this;
    tmp.mhc_1 = buildClassSerialDescriptor('javax.xml.namespace.QName', [], QNameSerializer$descriptor$lambda);
  }
  protoOf(QNameSerializer).kgo = function () {
    return this.mhc_1;
  };
  protoOf(QNameSerializer).mgo = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.mhc_1;
    var composite = decoder.pgr(tmp0_decodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.QNameSerializer.deserialize.<anonymous>' call
    var prefix = '';
    var namespace = '';
    var localPart = null;
    loop: while (true) {
      var tmp0_subject = composite.ggs(QNameSerializer_getInstance().mhc_1);
      Companion_getInstance();
      if (tmp0_subject === -1)
        break loop;
      else {
        if (tmp0_subject === 0)
          namespace = composite.zgr(QNameSerializer_getInstance().mhc_1, 0);
        else {
          if (tmp0_subject === 1)
            localPart = composite.zgr(QNameSerializer_getInstance().mhc_1, 1);
          else {
            if (tmp0_subject === 2)
              prefix = composite.zgr(QNameSerializer_getInstance().mhc_1, 2);
          }
        }
      }
    }
    var tmp = namespace;
    var tmp_0;
    if (localPart == null) {
      throwUninitializedPropertyAccessException('localPart');
    } else {
      tmp_0 = localPart;
    }
    var result = new QName(tmp, tmp_0, prefix);
    composite.qgr(tmp0_decodeStructure);
    return result;
  };
  protoOf(QNameSerializer).nhc = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.mhc_1;
    var composite = encoder.pgr(tmp0_encodeStructure);
    // Inline function 'nl.adaptivity.xmlutil.QNameSerializer.serialize.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    var tmp0_let = value.rhc();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_let) > 0) {
      tmp_0 = true;
    } else {
      tmp_0 = composite.lgt(QNameSerializer_getInstance().mhc_1, 0);
    }
    if (tmp_0) {
      composite.dgt(QNameSerializer_getInstance().mhc_1, 0, tmp0_let);
      tmp = Unit_getInstance();
    }
    var tmp_1 = QNameSerializer_getInstance().mhc_1;
    var tmp$ret$3;
    // Inline function 'nl.adaptivity.xmlutil.localPart' call
    tmp$ret$3 = value.shc();
    composite.dgt(tmp_1, 1, tmp$ret$3);
    // Inline function 'kotlin.let' call
    // Inline function 'nl.adaptivity.xmlutil.prefix' call
    var tmp1_let = value.thc();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    var tmp_3;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp1_let) > 0) {
      tmp_3 = true;
    } else {
      tmp_3 = composite.lgt(QNameSerializer_getInstance().mhc_1, 2);
    }
    if (tmp_3) {
      composite.dgt(QNameSerializer_getInstance().mhc_1, 2, tmp1_let);
      tmp_2 = Unit_getInstance();
    }
    composite.qgr(tmp0_encodeStructure);
  };
  protoOf(QNameSerializer).lgo = function (encoder, value) {
    return this.nhc(encoder, value instanceof QName ? value : THROW_CCE());
  };
  var QNameSerializer_instance;
  function QNameSerializer_getInstance() {
    if (QNameSerializer_instance == null)
      new QNameSerializer();
    return QNameSerializer_instance;
  }
  function isEquivalent(_this__u8e3s4, other) {
    return _this__u8e3s4.shc() === other.shc() ? _this__u8e3s4.rhc() === other.rhc() : false;
  }
  function toNamespace(_this__u8e3s4) {
    // Inline function 'nl.adaptivity.xmlutil.prefix' call
    var tmp = _this__u8e3s4.thc();
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
    tmp$ret$1 = _this__u8e3s4.rhc();
    return new NamespaceImpl(tmp, tmp$ret$1);
  }
  function SimpleIterator($outer) {
    this.vhc_1 = $outer;
    this.uhc_1 = 0;
  }
  protoOf(SimpleIterator).e = function () {
    return this.uhc_1 < this.vhc_1.g();
  };
  protoOf(SimpleIterator).f = function () {
    var tmp1 = this.uhc_1;
    this.uhc_1 = tmp1 + 1 | 0;
    return new SimpleNamespace(this.vhc_1, tmp1);
  };
  function SimpleNamespace($outer, pos) {
    this.yhc_1 = $outer;
    this.xhc_1 = pos;
  }
  protoOf(SimpleNamespace).vh8 = function () {
    return this.yhc_1.zhc(this.xhc_1);
  };
  protoOf(SimpleNamespace).th8 = function () {
    return this.yhc_1.ahd(this.xhc_1);
  };
  protoOf(SimpleNamespace).hashCode = function () {
    return imul(getStringHashCode(this.vh8()), 31) + getStringHashCode(this.th8()) | 0;
  };
  protoOf(SimpleNamespace).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, Namespace) : false))
      return false;
    return this.vh8() === other.vh8() ? this.th8() === other.th8() : false;
  };
  protoOf(SimpleNamespace).toString = function () {
    return '{' + this.vh8() + ':' + this.th8() + '}';
  };
  function SimpleNamespaceContext_init_$Init$(prefixMap, $this) {
    // Inline function 'nl.adaptivity.xmlutil.Companion.flatten' call
    Companion_getInstance_2();
    var tmp1_flatten = prefixMap.q();
    var tmp = asSequence_0(tmp1_flatten);
    var filler = flatMap(tmp, SimpleNamespaceContext$_init_$lambda_w7q6ud).d();
    var tmp_0 = 0;
    var tmp_1 = imul(tmp1_flatten.g(), 2);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = filler.f();
      tmp_0 = tmp_0 + 1 | 0;
    }
    SimpleNamespaceContext.call($this, tmp_2);
    return $this;
  }
  function SimpleNamespaceContext_init_$Create$(prefixMap) {
    return SimpleNamespaceContext_init_$Init$(prefixMap, objectCreate(protoOf(SimpleNamespaceContext)));
  }
  function SimpleNamespaceContext_init_$Init$_0(prefixes, namespaces, $this) {
    var tmp = 0;
    var tmp_0 = imul(prefixes.length, 2);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toString((tmp_2 % 2 | 0) === 0 ? prefixes[tmp_2 / 2 | 0] : namespaces[tmp_2 / 2 | 0]);
      tmp = tmp + 1 | 0;
    }
    SimpleNamespaceContext.call($this, tmp_1);
    return $this;
  }
  function SimpleNamespaceContext_init_$Init$_1(namespaces, $this) {
    // Inline function 'nl.adaptivity.xmlutil.Companion.flatten' call
    Companion_getInstance_2();
    var tmp = asSequence_0(namespaces);
    var filler = flatMap(tmp, SimpleNamespaceContext$_init_$lambda_w7q6ud_0).d();
    var tmp_0 = 0;
    var tmp_1 = imul(namespaces.g(), 2);
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = filler.f();
      tmp_0 = tmp_0 + 1 | 0;
    }
    SimpleNamespaceContext.call($this, tmp_2);
    return $this;
  }
  function SimpleNamespaceContext_init_$Create$_0(namespaces) {
    return SimpleNamespaceContext_init_$Init$_1(namespaces, objectCreate(protoOf(SimpleNamespaceContext)));
  }
  function SimpleNamespaceContext_init_$Init$_2(namespaces, $this) {
    var tmp0_elvis_lhs = isInterface(namespaces, Collection) ? namespaces : null;
    SimpleNamespaceContext_init_$Init$_1(tmp0_elvis_lhs == null ? toList(namespaces) : tmp0_elvis_lhs, $this);
    return $this;
  }
  function SimpleNamespaceContext_init_$Create$_1(namespaces) {
    return SimpleNamespaceContext_init_$Init$_2(namespaces, objectCreate(protoOf(SimpleNamespaceContext)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.bhd_1 = ListSerializer(Companion_getInstance_1());
    this.chd_1 = SerialDescriptor(get_name_0(getKClass(SimpleNamespaceContext)), this.bhd_1.kgo());
  }
  protoOf(Companion_1).kgo = function () {
    return this.chd_1;
  };
  protoOf(Companion_1).dhd = function (originalNSContext) {
    var tmp;
    if (originalNSContext instanceof SimpleNamespaceContext) {
      tmp = originalNSContext;
    } else {
      tmp = SimpleNamespaceContext_init_$Create$_1(originalNSContext);
    }
    return tmp;
  };
  protoOf(Companion_1).mgo = function (decoder) {
    return SimpleNamespaceContext_init_$Create$_0(this.bhd_1.mgo(decoder));
  };
  protoOf(Companion_1).ehd = function (encoder, value) {
    this.bhd_1.lgo(encoder, toList(value));
  };
  protoOf(Companion_1).lgo = function (encoder, value) {
    return this.ehd(encoder, value instanceof SimpleNamespaceContext ? value : THROW_CCE());
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SimpleNamespaceContext$_init_$lambda_w7q6ud(it) {
    // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.<init>.<anonymous>' call
    var tmp = toString(it.r());
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.<init>.<anonymous>' call
    tmp$ret$1 = toString(it.s());
    return sequenceOf([tmp, tmp$ret$1]);
  }
  function SimpleNamespaceContext$_init_$lambda_w7q6ud_0(it) {
    // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.<init>.<anonymous>' call
    var tmp = it.vh8();
    var tmp$ret$1;
    // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.<init>.<anonymous>' call
    tmp$ret$1 = it.th8();
    return sequenceOf([tmp, tmp$ret$1]);
  }
  function SimpleNamespaceContext$getPrefixSequence$lambda(this$0, $namespaceURI) {
    return function (it) {
      return this$0.ahd(it) === $namespaceURI;
    };
  }
  function SimpleNamespaceContext$getPrefixSequence$lambda_0(this$0) {
    return function (it) {
      return this$0.zhc(it);
    };
  }
  function SimpleNamespaceContext(buffer) {
    Companion_getInstance_2();
    this.whc_1 = buffer;
  }
  protoOf(SimpleNamespaceContext).fhd = function () {
    return until(0, this.g());
  };
  protoOf(SimpleNamespaceContext).g = function () {
    return this.whc_1.length / 2 | 0;
  };
  protoOf(SimpleNamespaceContext).ph8 = function () {
    return this;
  };
  protoOf(SimpleNamespaceContext).nh8 = function (prefix) {
    var tmp;
    XMLConstants_getInstance();
    if (prefix === 'xml') {
      XMLConstants_getInstance();
      tmp = 'http://www.w3.org/XML/1998/namespace';
    } else {
      XMLConstants_getInstance();
      if (prefix === 'xmlns') {
        XMLConstants_getInstance();
        tmp = 'http://www.w3.org/2000/xmlns/';
      } else {
        // Inline function 'kotlin.collections.filter' call
        var tmp0_filter = reversed(this.fhd());
        // Inline function 'kotlin.collections.filterTo' call
        var tmp0_filterTo = ArrayList_init_$Create$();
        var inductionVariable = tmp0_filter.y_1;
        var last = tmp0_filter.z_1;
        var step = tmp0_filter.a1_1;
        if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + step | 0;
            // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.getNamespaceURI.<anonymous>' call
            if (this.zhc(element) === prefix) {
              tmp0_filterTo.a(element);
            }
          }
           while (!(element === last));
        var tmp1_safe_receiver = firstOrNull(tmp0_filterTo);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.SimpleNamespaceContext.getNamespaceURI.<anonymous>' call
          tmp_0 = this.ahd(tmp1_safe_receiver);
        }
        tmp = tmp_0;
      }
    }
    return tmp;
  };
  protoOf(SimpleNamespaceContext).oh8 = function (namespaceURI) {
    return firstOrNull_0(this.ghd(namespaceURI));
  };
  protoOf(SimpleNamespaceContext).ghd = function (namespaceURI) {
    var tmp;
    XMLConstants_getInstance();
    if (namespaceURI === 'http://www.w3.org/XML/1998/namespace') {
      XMLConstants_getInstance();
      tmp = sequenceOf(['xml']);
    } else {
      XMLConstants_getInstance();
      if (namespaceURI === '') {
        XMLConstants_getInstance();
        tmp = sequenceOf(['']);
      } else {
        XMLConstants_getInstance();
        if (namespaceURI === 'http://www.w3.org/2000/xmlns/') {
          XMLConstants_getInstance();
          tmp = sequenceOf(['xmlns']);
        } else {
          var tmp_0 = asSequence_0(reversed(this.fhd()));
          var tmp_1 = filter(tmp_0, SimpleNamespaceContext$getPrefixSequence$lambda(this, namespaceURI));
          tmp = map(tmp_1, SimpleNamespaceContext$getPrefixSequence$lambda_0(this));
        }
      }
    }
    return tmp;
  };
  protoOf(SimpleNamespaceContext).qh8 = function (namespaceURI) {
    return this.ghd(namespaceURI).d();
  };
  protoOf(SimpleNamespaceContext).zhc = function (index) {
    try {
      return this.whc_1[imul(index, 2)];
    } catch ($p) {
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        throw IndexOutOfBoundsException_init_$Create$_0('Index out of range: ' + index);
      } else {
        throw $p;
      }
    }
  };
  protoOf(SimpleNamespaceContext).ahd = function (index) {
    try {
      return this.whc_1[imul(index, 2) + 1 | 0];
    } catch ($p) {
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        throw IndexOutOfBoundsException_init_$Create$_0('Index out of range: ' + index);
      } else {
        throw $p;
      }
    }
  };
  protoOf(SimpleNamespaceContext).d = function () {
    return new SimpleIterator(this);
  };
  protoOf(SimpleNamespaceContext).rh8 = function (secondary) {
    var tmp;
    var tmp_0;
    if (secondary instanceof SimpleNamespaceContext) {
      tmp_0 = secondary.g() === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this;
    } else {
      var tmp_1;
      if (secondary instanceof SimpleNamespaceContext) {
        tmp_1 = this.g() === 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = secondary;
      } else {
        tmp = plus_0.call(this, secondary);
      }
    }
    return tmp;
  };
  protoOf(SimpleNamespaceContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleNamespaceContext))
      return false;
    if (!contentEquals(this.whc_1, other.whc_1))
      return false;
    return true;
  };
  protoOf(SimpleNamespaceContext).hashCode = function () {
    return contentHashCode(this.whc_1);
  };
  function XMLConstants() {
    XMLConstants_instance = this;
    this.hhd_1 = '';
    this.ihd_1 = '';
    this.jhd_1 = 'http://www.w3.org/2000/xmlns/';
    this.khd_1 = 'xmlns';
    this.lhd_1 = 'xml';
    this.mhd_1 = 'http://www.w3.org/XML/1998/namespace';
    this.nhd_1 = 'xsi';
    this.ohd_1 = 'http://www.w3.org/2001/XMLSchema-instance';
    this.phd_1 = 'xsd';
    this.qhd_1 = 'http://www.w3.org/2001/XMLSchema';
  }
  var XMLConstants_instance;
  function XMLConstants_getInstance() {
    if (XMLConstants_instance == null)
      new XMLConstants();
    return XMLConstants_instance;
  }
  function XmlBufferedReader(delegate) {
    XmlBufferedReaderBase.call(this, delegate);
    this.uhd_1 = ArrayDeque_init_$Create$();
  }
  protoOf(XmlBufferedReader).vhd = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.uhd_1.l();
  };
  protoOf(XmlBufferedReader).whd = function () {
    return this.uhd_1.n3();
  };
  protoOf(XmlBufferedReader).xhd = function () {
    return this.uhd_1.s3();
  };
  protoOf(XmlBufferedReader).yhd = function () {
    var tmp0_elvis_lhs = this.bhe_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw XmlException_init_$Create$('Push back fails due to missing current element');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var c = tmp;
    switch (c.ah9().h7_1) {
      case 1:
        this.dhe();
        break;
      case 2:
        this.ehe();
        break;
      default:
        break;
    }
    this.uhd_1.q3(c);
  };
  protoOf(XmlBufferedReader).fhe = function (events) {
    this.uhd_1.k(events);
  };
  protoOf(XmlBufferedReader).o1y = function () {
    protoOf(XmlBufferedReaderBase).o1y.call(this);
    this.uhd_1.a4();
  };
  function _get_currentElement__mbt3qg($this) {
    var tmp = $this.bhe_1;
    var tmp0_elvis_lhs = tmp instanceof StartElementEvent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw XmlException_init_$Create$('Expected a start element, but did not find it.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function removeFirstToCurrent($this) {
    var event = $this.xhd();
    $this.bhe_1 = event;
    switch (event.ah9().h7_1) {
      case 1:
        $this.ahe_1.ehe();
        var start = event instanceof StartElementEvent ? event : THROW_CCE();
        var tmp1_iterator = start.dh9().d();
        while (tmp1_iterator.e()) {
          var ns = tmp1_iterator.f();
          $this.ahe_1.ahf(ns);
        }

        break;
      case 2:
        $this.ahe_1.dhe();
        break;
      default:
        break;
    }
    return event;
  }
  function XmlBufferedReaderBase(delegate) {
    this.zhd_1 = delegate;
    this.ahe_1 = new NamespaceHolder();
    if (this.zhd_1.wh8()) {
      var tmp0_iterator = this.zhd_1.ch9().d();
      while (tmp0_iterator.e()) {
        var ns = tmp0_iterator.f();
        this.ahe_1.ahf(ns);
      }
    }
    this.bhe_1 = this.zhd_1.wh8() ? Companion_getInstance_3().bhf(this.zhd_1) : null;
  }
  protoOf(XmlBufferedReaderBase).th8 = function () {
    var tmp0_safe_receiver = this.bhe_1;
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah9();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.h7_1) {
      case 10:
        var tmp_0 = this.bhe_1;
        tmp = (tmp_0 instanceof Attribute ? tmp_0 : THROW_CCE()).ghf_1;
        break;
      case 1:
        var tmp_1 = this.bhe_1;
        tmp = (tmp_1 instanceof StartElementEvent ? tmp_1 : THROW_CCE()).ihf_1;
        break;
      case 2:
        var tmp_2 = this.bhe_1;
        tmp = (tmp_2 instanceof EndElementEvent ? tmp_2 : THROW_CCE()).ihf_1;
        break;
      default:
        var tmp2_safe_receiver = this.bhe_1;
        throw XmlException_init_$Create$('Attribute not defined here: namespaceUri (current event: ' + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ah9()) + ')');
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).uh8 = function () {
    var tmp0_safe_receiver = this.bhe_1;
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah9();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.h7_1) {
      case 8:
        var tmp_0 = this.bhe_1;
        tmp = (tmp_0 instanceof EntityRefEvent ? tmp_0 : THROW_CCE()).ohf_1;
        break;
      case 10:
        var tmp_1 = this.bhe_1;
        tmp = (tmp_1 instanceof Attribute ? tmp_1 : THROW_CCE()).fhf_1;
        break;
      case 1:
        var tmp_2 = this.bhe_1;
        tmp = (tmp_2 instanceof StartElementEvent ? tmp_2 : THROW_CCE()).jhf_1;
        break;
      case 2:
        var tmp_3 = this.bhe_1;
        tmp = (tmp_3 instanceof EndElementEvent ? tmp_3 : THROW_CCE()).jhf_1;
        break;
      default:
        throw XmlException_init_$Create$('Attribute not defined here: localName');
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).vh8 = function () {
    var tmp0_safe_receiver = this.bhe_1;
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah9();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.h7_1) {
      case 10:
        var tmp_0 = this.bhe_1;
        tmp = (tmp_0 instanceof Attribute ? tmp_0 : THROW_CCE()).ehf_1;
        break;
      case 1:
        var tmp_1 = this.bhe_1;
        tmp = (tmp_1 instanceof StartElementEvent ? tmp_1 : THROW_CCE()).khf_1;
        break;
      case 2:
        var tmp_2 = this.bhe_1;
        tmp = (tmp_2 instanceof EndElementEvent ? tmp_2 : THROW_CCE()).khf_1;
        break;
      default:
        throw XmlException_init_$Create$('Attribute not defined here: prefix');
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).i3v = function () {
    return this.ahe_1.rhe_1;
  };
  protoOf(XmlBufferedReaderBase).ehe = function () {
    this.ahe_1.ehe();
  };
  protoOf(XmlBufferedReaderBase).dhe = function () {
    this.ahe_1.dhe();
  };
  protoOf(XmlBufferedReaderBase).xh8 = function () {
    var tmp = this.bhe_1;
    return (tmp instanceof ProcessingInstructionEvent ? tmp : THROW_CCE()).ihc_1;
  };
  protoOf(XmlBufferedReaderBase).yh8 = function () {
    var tmp = this.bhe_1;
    return (tmp instanceof ProcessingInstructionEvent ? tmp : THROW_CCE()).jhc_1;
  };
  protoOf(XmlBufferedReaderBase).h53 = function () {
    var tmp;
    if (ensureNotNull(this.bhe_1).ah9() === EventType_ATTRIBUTE_getInstance()) {
      var tmp_0 = this.bhe_1;
      tmp = (tmp_0 instanceof Attribute ? tmp_0 : THROW_CCE()).dhf_1;
    } else {
      var tmp_1 = this.bhe_1;
      tmp = (tmp_1 instanceof TextEvent ? tmp_1 : THROW_CCE()).cha_1;
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).zh8 = function () {
    return _get_currentElement__mbt3qg(this).xhe_1.length;
  };
  protoOf(XmlBufferedReaderBase).wh8 = function () {
    return !(this.bhe_1 == null);
  };
  protoOf(XmlBufferedReaderBase).ah9 = function () {
    var tmp0_safe_receiver = this.bhe_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah9();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (this.e()) {
        throw XmlException_init_$Create$('Attempting to get the event type before getting an event.');
      } else {
        throw XmlException_init_$Create$('Attempting to read beyond the end of the stream');
      }
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).bh9 = function () {
    var tmp0_safe_receiver = this.bhe_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.che_1;
    return tmp1_elvis_lhs == null ? this.zhd_1.bh9() : tmp1_elvis_lhs;
  };
  protoOf(XmlBufferedReaderBase).ch9 = function () {
    var c = this.bhe_1;
    var tmp;
    if (c instanceof StartElementEvent) {
      tmp = c.ch9();
    } else {
      if (c instanceof EndElementEvent) {
        tmp = c.thf_1;
      } else {
        tmp = this.ahe_1.she_1;
      }
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).dh9 = function () {
    var c = this.bhe_1;
    var tmp;
    if (c instanceof StartElementEvent) {
      tmp = toList(c.dh9());
    } else {
      tmp = this.ahe_1.uhf();
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).eh9 = function () {
    var tmp = this.bhe_1;
    return (tmp instanceof StartDocumentEvent ? tmp : THROW_CCE()).whf_1;
  };
  protoOf(XmlBufferedReaderBase).fh9 = function () {
    var tmp = this.bhe_1;
    return (tmp instanceof StartDocumentEvent ? tmp : THROW_CCE()).yhf_1;
  };
  protoOf(XmlBufferedReaderBase).ufg = function () {
    var tmp = this.bhe_1;
    return (tmp instanceof StartDocumentEvent ? tmp : THROW_CCE()).xhf_1;
  };
  protoOf(XmlBufferedReaderBase).ghe = function () {
    if (this.vhd()) {
      return removeFirstToCurrent(this);
    }
    if (!this.e()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.u24();
    return removeFirstToCurrent(this);
  };
  protoOf(XmlBufferedReaderBase).u24 = function () {
    if (!this.vhd()) {
      this.fhe(this.hhe());
    }
    return this.whd();
  };
  protoOf(XmlBufferedReaderBase).hhe = function () {
    if (this.zhd_1.e()) {
      this.zhd_1.f();
      var event = Companion_getInstance_3().bhf(this.zhd_1);
      var result = ArrayList_init_$Create$_0(1);
      result.a(event);
      return result;
    }
    return emptyList();
  };
  protoOf(XmlBufferedReaderBase).e = function () {
    if (this.vhd()) {
      return true;
    }
    return !(this.u24() == null);
  };
  protoOf(XmlBufferedReaderBase).o1y = function () {
    this.zhd_1.o1y();
  };
  protoOf(XmlBufferedReaderBase).ihe = function () {
    return this.jhe().ah9();
  };
  protoOf(XmlBufferedReaderBase).jhe = function () {
    var current = this.ghe();
    var tmp;
    switch (current.ah9().h7_1) {
      case 4:
        var tmp_0;
        if (isXmlWhitespace((current instanceof TextEvent ? current : THROW_CCE()).cha_1)) {
          tmp_0 = this.jhe();
        } else {
          throw XmlException_init_$Create$('Unexpected element found when looking for tags: ' + current);
        }

        tmp = tmp_0;
        break;
      case 0:
      case 3:
      case 9:
      case 11:
        tmp = this.jhe();
        break;
      case 1:
      case 2:
        tmp = current;
        break;
      default:
        throw XmlException_init_$Create$('Unexpected element found when looking for tags: ' + current);
    }
    return tmp;
  };
  protoOf(XmlBufferedReaderBase).f = function () {
    return this.ghe().ah9();
  };
  protoOf(XmlBufferedReaderBase).gh9 = function (index) {
    return _get_currentElement__mbt3qg(this).xhe_1[index].ghf_1;
  };
  protoOf(XmlBufferedReaderBase).hh9 = function (index) {
    return _get_currentElement__mbt3qg(this).xhe_1[index].ehf_1;
  };
  protoOf(XmlBufferedReaderBase).ih9 = function (index) {
    return _get_currentElement__mbt3qg(this).xhe_1[index].fhf_1;
  };
  protoOf(XmlBufferedReaderBase).jh9 = function (index) {
    return _get_currentElement__mbt3qg(this).xhe_1[index].dhf_1;
  };
  protoOf(XmlBufferedReaderBase).kh9 = function (nsUri, localName) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _get_currentElement__mbt3qg(this).xhe_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'nl.adaptivity.xmlutil.XmlBufferedReaderBase.getAttributeValue.<anonymous>' call
        if ((nsUri == null ? true : nsUri === element.ghf_1) ? localName === element.fhf_1 : false) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dhf_1;
  };
  protoOf(XmlBufferedReaderBase).nh8 = function (prefix) {
    return _get_currentElement__mbt3qg(this).nh8(prefix);
  };
  function XmlDelegatingReader(delegate) {
    this.zhf_1 = delegate;
  }
  protoOf(XmlDelegatingReader).ht = function () {
    return this.zhf_1;
  };
  protoOf(XmlDelegatingReader).zh8 = function () {
    return this.zhf_1.zh8();
  };
  protoOf(XmlDelegatingReader).i3v = function () {
    return this.zhf_1.i3v();
  };
  protoOf(XmlDelegatingReader).eh9 = function () {
    return this.zhf_1.eh9();
  };
  protoOf(XmlDelegatingReader).ah9 = function () {
    return this.zhf_1.ah9();
  };
  protoOf(XmlDelegatingReader).wh8 = function () {
    return this.zhf_1.wh8();
  };
  protoOf(XmlDelegatingReader).uh8 = function () {
    return this.zhf_1.uh8();
  };
  protoOf(XmlDelegatingReader).bh9 = function () {
    return this.zhf_1.bh9();
  };
  protoOf(XmlDelegatingReader).d66 = function () {
    return this.zhf_1.d66();
  };
  protoOf(XmlDelegatingReader).ch9 = function () {
    return this.zhf_1.ch9();
  };
  protoOf(XmlDelegatingReader).dh9 = function () {
    return this.zhf_1.dh9();
  };
  protoOf(XmlDelegatingReader).th8 = function () {
    return this.zhf_1.th8();
  };
  protoOf(XmlDelegatingReader).yh8 = function () {
    return this.zhf_1.yh8();
  };
  protoOf(XmlDelegatingReader).xh8 = function () {
    return this.zhf_1.xh8();
  };
  protoOf(XmlDelegatingReader).vh8 = function () {
    return this.zhf_1.vh8();
  };
  protoOf(XmlDelegatingReader).fh9 = function () {
    return this.zhf_1.fh9();
  };
  protoOf(XmlDelegatingReader).h53 = function () {
    return this.zhf_1.h53();
  };
  protoOf(XmlDelegatingReader).ufg = function () {
    return this.zhf_1.ufg();
  };
  protoOf(XmlDelegatingReader).o1y = function () {
    this.zhf_1.o1y();
  };
  protoOf(XmlDelegatingReader).ih9 = function (index) {
    return this.zhf_1.ih9(index);
  };
  protoOf(XmlDelegatingReader).gh9 = function (index) {
    return this.zhf_1.gh9(index);
  };
  protoOf(XmlDelegatingReader).hh9 = function (index) {
    return this.zhf_1.hh9(index);
  };
  protoOf(XmlDelegatingReader).jh9 = function (index) {
    return this.zhf_1.jh9(index);
  };
  protoOf(XmlDelegatingReader).kh9 = function (nsUri, localName) {
    return this.zhf_1.kh9(nsUri, localName);
  };
  protoOf(XmlDelegatingReader).e = function () {
    return this.zhf_1.e();
  };
  protoOf(XmlDelegatingReader).f = function () {
    return this.zhf_1.f();
  };
  protoOf(XmlDelegatingReader).lh9 = function (type, namespace, name) {
    this.zhf_1.lh9(type, namespace, name);
  };
  function XmlEvent$StartElementEvent$toString$lambda(it) {
    return it.fhf_1 + ' = ' + it.dhf_1 + ' ';
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).bhf = function (reader) {
    return reader.ah9().dhb(reader);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TextEvent(locationInfo, eventType, text) {
    XmlEvent.call(this, locationInfo);
    this.bha_1 = eventType;
    this.cha_1 = text;
  }
  protoOf(TextEvent).ah9 = function () {
    return this.bha_1;
  };
  protoOf(TextEvent).dha = function (writer) {
    return this.ah9().ihb(writer, this);
  };
  protoOf(TextEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    return '' + tmp + ' - "' + this.cha_1 + '" (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
  };
  function ProcessingInstructionEvent(locationInfo, target, data) {
    TextEvent.call(this, locationInfo, EventType_PROCESSING_INSTRUCTION_getInstance(), target + ' ' + data);
    this.ihc_1 = target;
    this.jhc_1 = data;
  }
  function EntityRefEvent(locationInfo, localName, text) {
    TextEvent.call(this, locationInfo, EventType_ENTITY_REF_getInstance(), text);
    this.ohf_1 = localName;
  }
  protoOf(EntityRefEvent).dha = function (writer) {
    return this.ah9().ihb(writer, this);
  };
  protoOf(EntityRefEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    return '' + tmp + ' - "' + this.cha_1 + '" (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
  };
  function EndDocumentEvent(locationInfo) {
    XmlEvent.call(this, locationInfo);
  }
  protoOf(EndDocumentEvent).ah9 = function () {
    return EventType_END_DOCUMENT_getInstance();
  };
  protoOf(EndDocumentEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    return '' + tmp + ' (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
  };
  function EndElementEvent(locationInfo, namespaceUri, localName, prefix, namespaceContext) {
    NamedEvent.call(this, locationInfo, namespaceUri, localName, prefix);
    this.thf_1 = namespaceContext.ph8();
  }
  protoOf(EndElementEvent).ah9 = function () {
    return EventType_END_ELEMENT_getInstance();
  };
  function StartDocumentEvent(locationInfo, encoding, version, standalone) {
    XmlEvent.call(this, locationInfo);
    this.whf_1 = encoding;
    this.xhf_1 = version;
    this.yhf_1 = standalone;
  }
  protoOf(StartDocumentEvent).ah9 = function () {
    return EventType_START_DOCUMENT_getInstance();
  };
  protoOf(StartDocumentEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    return '' + tmp + ' - encoding:' + this.whf_1 + ', version: ' + this.xhf_1 + ', standalone: ' + this.yhf_1 + ' (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
  };
  function NamedEvent(locationInfo, namespaceUri, localName, prefix) {
    XmlEvent.call(this, locationInfo);
    this.ihf_1 = namespaceUri;
    this.jhf_1 = localName;
    this.khf_1 = prefix;
  }
  protoOf(NamedEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    return '' + tmp + ' - {' + this.ihf_1 + '}' + this.khf_1 + ':' + this.jhf_1 + ' (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
  };
  function StartElementEvent(locationInfo, namespaceUri, localName, prefix, attributes, parentNamespaceContext, namespaceDecls) {
    NamedEvent.call(this, locationInfo, namespaceUri, localName, prefix);
    this.xhe_1 = attributes;
    this.yhe_1 = parentNamespaceContext;
    var tmp = this;
    // Inline function 'kotlin.collections.asIterable' call
    tmp.zhe_1 = SimpleNamespaceContext_init_$Create$_1(namespaceDecls);
  }
  protoOf(StartElementEvent).dh9 = function () {
    return this.zhe_1;
  };
  protoOf(StartElementEvent).ah9 = function () {
    return EventType_START_ELEMENT_getInstance();
  };
  protoOf(StartElementEvent).nh8 = function (prefix) {
    var decl = this.zhe_1.nh8(prefix);
    return decl == null ? this.yhe_1.nh8(prefix) : decl;
  };
  protoOf(StartElementEvent).ch9 = function () {
    return this.zhe_1.rh8(this.yhe_1);
  };
  protoOf(StartElementEvent).toString = function () {
    var tmp = this.ah9();
    var tmp0_elvis_lhs = this.che_1;
    var tmp_0 = '' + tmp + ' - {' + this.ihf_1 + '}' + this.khf_1 + ':' + this.jhf_1 + ' (' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ')';
    var tmp_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(this.xhe_1.length === 0)) {
      tmp_1 = '\n    ';
    } else {
      tmp_1 = '';
    }
    var tmp_2 = tmp_1;
    return tmp_0 + joinToString(this.xhe_1, '\n    ', tmp_2, VOID, VOID, VOID, XmlEvent$StartElementEvent$toString$lambda);
  };
  function Attribute(locationInfo, namespaceUri, localName, prefix, value) {
    XmlEvent.call(this, locationInfo);
    this.dhf_1 = toString(value);
    this.ehf_1 = toString(prefix);
    this.fhf_1 = toString(localName);
    this.ghf_1 = toString(namespaceUri);
  }
  protoOf(Attribute).ah9 = function () {
    return EventType_ATTRIBUTE_getInstance();
  };
  protoOf(Attribute).toString = function () {
    return isBlank(this.ghf_1) ? this.fhf_1 + '="' + this.dhf_1 + '"' : isBlank(this.ehf_1) ? '{' + this.ghf_1 + '}' + this.fhf_1 + '="' + this.dhf_1 + '"' : '{' + this.ghf_1 + '}' + this.ehf_1 + ':' + this.fhf_1 + '="' + this.dhf_1 + '"';
  };
  protoOf(Attribute).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Attribute))
      THROW_CCE();
    if (!(this.dhf_1 === other.dhf_1))
      return false;
    if (!(this.ehf_1 === other.ehf_1))
      return false;
    if (!(this.fhf_1 === other.fhf_1))
      return false;
    if (!(this.ghf_1 === other.ghf_1))
      return false;
    return true;
  };
  protoOf(Attribute).hashCode = function () {
    var result = getStringHashCode(this.dhf_1);
    result = imul(31, result) + getStringHashCode(this.ehf_1) | 0;
    result = imul(31, result) + getStringHashCode(this.fhf_1) | 0;
    result = imul(31, result) + getStringHashCode(this.ghf_1) | 0;
    return result;
  };
  function NamespaceImpl(namespacePrefix, namespaceUri) {
    this.bhg_1 = toString(namespacePrefix);
    this.chg_1 = toString(namespaceUri);
  }
  protoOf(NamespaceImpl).vh8 = function () {
    return this.bhg_1;
  };
  protoOf(NamespaceImpl).th8 = function () {
    return this.chg_1;
  };
  protoOf(NamespaceImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, Namespace) : false))
      return false;
    if (!(this.bhg_1 === other.vh8()))
      return false;
    if (!(this.chg_1 === other.th8()))
      return false;
    return true;
  };
  protoOf(NamespaceImpl).hashCode = function () {
    return imul(31, getStringHashCode(this.bhg_1)) + getStringHashCode(this.chg_1) | 0;
  };
  protoOf(NamespaceImpl).toString = function () {
    return '{' + this.bhg_1 + ':' + this.chg_1 + '}';
  };
  function XmlEvent(locationInfo) {
    Companion_getInstance_3();
    this.che_1 = locationInfo;
  }
  function XmlException_init_$Init$(message, $this) {
    IOException_init_$Init$(message, $this);
    XmlException.call($this);
    return $this;
  }
  function XmlException_init_$Create$(message) {
    var tmp = XmlException_init_$Init$(message, objectCreate(protoOf(XmlException)));
    captureStack(tmp, XmlException_init_$Create$);
    return tmp;
  }
  function XmlException_init_$Init$_0(message, cause, $this) {
    IOException_init_$Init$_0(message, cause, $this);
    XmlException.call($this);
    return $this;
  }
  function XmlException_init_$Create$_0(message, cause) {
    var tmp = XmlException_init_$Init$_0(message, cause, objectCreate(protoOf(XmlException)));
    captureStack(tmp, XmlException_init_$Create$_0);
    return tmp;
  }
  function XmlException() {
    captureStack(this, XmlException);
  }
  function XmlReader() {
  }
  function skipPreamble(_this__u8e3s4) {
    while ((!_this__u8e3s4.wh8() ? true : isIgnorable(_this__u8e3s4)) ? _this__u8e3s4.e() : false) {
      _this__u8e3s4.f();
    }
  }
  function readSimpleElement(_this__u8e3s4) {
    var t = _this__u8e3s4;
    t.lh9(EventType_START_ELEMENT_getInstance(), null, null);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.readSimpleElement.<anonymous>' call
    while (!(t.f() === EventType_END_ELEMENT_getInstance())) {
      switch (t.ah9().h7_1) {
        case 3:
        case 11:
          break;
        case 9:
        case 4:
        case 8:
        case 5:
          tmp0_apply.ia(t.h53());
          break;
        default:
          throw XmlException_init_$Create$('Expected text content or end tag, found: ' + t.ah9());
      }
    }
    return tmp0_apply.toString();
  }
  function allConsecutiveTextContent(_this__u8e3s4) {
    var t = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.allConsecutiveTextContent.<anonymous>' call
    if (_this__u8e3s4.ah9().hhb() ? true : _this__u8e3s4.ah9().equals(EventType_IGNORABLE_WHITESPACE_getInstance())) {
      tmp0_apply.ia(_this__u8e3s4.h53());
    }
    var event = null;
    loop: while (true) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = t.u24();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.allConsecutiveTextContent.<anonymous>.<anonymous>' call
      event = tmp0_apply_0;
      if (!!((tmp0_apply_0 == null ? null : tmp0_apply_0.ah9()) === EventType_END_ELEMENT_getInstance())) {
        break loop;
      }
      var tmp1_safe_receiver = event;
      var tmp2_subject = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ah9();
      switch (tmp2_subject == null ? -1 : tmp2_subject.h7_1) {
        case 11:
        case 3:
          t.f();
          break;
        case 9:
        case 4:
        case 8:
        case 5:
          t.f();
          tmp0_apply.ia(t.h53());
          break;
        case 1:
          break loop;
        default:
          throw XmlException_init_$Create$('Found unexpected child tag: ' + event);
      }
    }
    return tmp0_apply.toString();
  }
  function allText(_this__u8e3s4) {
    var t = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.allText.<anonymous>' call
    if (_this__u8e3s4.ah9().hhb()) {
      tmp0_apply.ia(_this__u8e3s4.h53());
    }
    var type;
    $l$loop: while (true) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = t.f();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.allText.<anonymous>.<anonymous>' call
      type = tmp0_apply_0;
      if (!!(tmp0_apply_0 === EventType_END_ELEMENT_getInstance())) {
        break $l$loop;
      }
      switch (type == null ? -1 : type.h7_1) {
        case 11:
        case 3:
          break;
        case 9:
          if (!(tmp0_apply.qd() === 0)) {
            tmp0_apply.ia(t.h53());
          }

          break;
        case 8:
        case 4:
        case 5:
          tmp0_apply.ia(t.h53());
          break;
        default:
          throw XmlException_init_$Create$('Found unexpected child tag with type: ' + type);
      }
    }
    return tmp0_apply.toString();
  }
  function isIgnorable(_this__u8e3s4) {
    switch (_this__u8e3s4.ah9().h7_1) {
      case 3:
      case 0:
      case 7:
      case 11:
      case 6:
      case 9:
        return true;
      case 4:
        return isXmlWhitespace(_this__u8e3s4.h53());
      default:
        return false;
    }
  }
  function get_attributes(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.zh8();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = new Attribute(_this__u8e3s4.bh9(), _this__u8e3s4.gh9(tmp_2), _this__u8e3s4.ih9(tmp_2), _this__u8e3s4.hh9(tmp_2), _this__u8e3s4.jh9(tmp_2));
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function writeCurrent(_this__u8e3s4, writer) {
    return _this__u8e3s4.ah9().ehb(writer, _this__u8e3s4);
  }
  function get_attributeIndices(_this__u8e3s4) {
    return until(0, _this__u8e3s4.zh8());
  }
  function isPrefixDeclaredInElement(_this__u8e3s4, prefix) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = _this__u8e3s4.dh9();
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
        // Inline function 'nl.adaptivity.xmlutil.isPrefixDeclaredInElement.<anonymous>' call
        if (element.vh8() === prefix) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function elementContentToFragment(_this__u8e3s4) {
    var r = _this__u8e3s4;
    skipPreamble(r);
    if (r.e()) {
      r.lh9(EventType_START_ELEMENT_getInstance(), null, null);
      r.f();
      return siblingsToFragment(r);
    }
    return CompactFragment_init_$Create$('');
  }
  function elementToFragment(_this__u8e3s4) {
    var output = StringBuilder_init_$Create$();
    if (!_this__u8e3s4.wh8()) {
      if (_this__u8e3s4.e()) {
        _this__u8e3s4.f();
      } else {
        return CompactFragment_init_$Create$('');
      }
    }
    var startLocation = _this__u8e3s4.bh9();
    try {
      // Inline function 'kotlin.collections.mutableMapOf' call
      var missingNamespaces = LinkedHashMap_init_$Create$();
      if (_this__u8e3s4.ah9().hhb() ? true : _this__u8e3s4.ah9().equals(EventType_IGNORABLE_WHITESPACE_getInstance()))
        return CompactFragment_init_$Create$(_this__u8e3s4.h53());
      _this__u8e3s4.lh9(EventType_START_ELEMENT_getInstance(), null, null);
      $l$block: {
        // Inline function 'nl.adaptivity.xmlutil.core.impl.multiplatform.use' call
        var tmp0_use = new KtXmlWriter(output, false, XmlDeclMode_None_getInstance());
        try {
          tmp0_use.yha('');
          while (_this__u8e3s4.ah9().equals(EventType_IGNORABLE_WHITESPACE_getInstance())) {
            tmp0_use.zh9(_this__u8e3s4.h53());
            _this__u8e3s4.f();
          }
          if (_this__u8e3s4.ah9().equals(EventType_END_ELEMENT_getInstance()) ? true : _this__u8e3s4.ah9().equals(EventType_END_DOCUMENT_getInstance())) {
            return CompactFragment_init_$Create$(output.toString());
          }
          _this__u8e3s4.lh9(EventType_START_ELEMENT_getInstance(), null, null);
          var namespaceForPrefix = tmp0_use.wha(_this__u8e3s4.vh8());
          writeCurrent(_this__u8e3s4, tmp0_use);
          if (!(namespaceForPrefix === _this__u8e3s4.th8())) {
            addUndeclaredNamespaces(tmp0_use, _this__u8e3s4, missingNamespaces);
          }
          writeElementContent(tmp0_use, missingNamespaces, _this__u8e3s4);
          break $l$block;
        }finally {
          tmp0_use.o1y();
        }
      }
      if (missingNamespaces.z2('') === '') {
        missingNamespaces.ye('');
      }
      return CompactFragment_init_$Create$_0(SimpleNamespaceContext_init_$Create$(missingNamespaces), output.toString());
    } catch ($p) {
      if ($p instanceof XmlException) {
        var e = $p;
        throw XmlException_init_$Create$_0('Failure to parse children into string at ' + startLocation, e);
      } else {
        if ($p instanceof RuntimeException) {
          var e_0 = $p;
          throw XmlException_init_$Create$_0('Failure to parse children into string at ' + startLocation, e_0);
        } else {
          throw $p;
        }
      }
    }
  }
  var XmlDeclMode_None_instance;
  var XmlDeclMode_Minimal_instance;
  var XmlDeclMode_Auto_instance;
  var XmlDeclMode_Charset_instance;
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    XmlDeclMode_initEntries();
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  var XmlDeclMode_entriesInitialized;
  function XmlDeclMode_initEntries() {
    if (XmlDeclMode_entriesInitialized)
      return Unit_getInstance();
    XmlDeclMode_entriesInitialized = true;
    XmlDeclMode_None_instance = new XmlDeclMode('None', 0);
    XmlDeclMode_Minimal_instance = new XmlDeclMode('Minimal', 1);
    XmlDeclMode_Auto_instance = new XmlDeclMode('Auto', 2);
    XmlDeclMode_Charset_instance = new XmlDeclMode('Charset', 3);
    Companion_getInstance_4();
  }
  function XmlDeclMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function XmlDeclMode_None_getInstance() {
    XmlDeclMode_initEntries();
    return XmlDeclMode_None_instance;
  }
  function XmlDeclMode_Minimal_getInstance() {
    XmlDeclMode_initEntries();
    return XmlDeclMode_Minimal_instance;
  }
  function toCName(_this__u8e3s4) {
    XMLConstants_getInstance();
    if ('' === _this__u8e3s4.thc())
      return _this__u8e3s4.shc();
    return _this__u8e3s4.thc() + ':' + _this__u8e3s4.shc();
  }
  function toQname(_this__u8e3s4, namespace) {
    var split = indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(125));
    var localname;
    var nsUri;
    if (split >= 0) {
      if (!(charSequenceGet(_this__u8e3s4, 0) === _Char___init__impl__6a9atx(123)))
        throw IllegalArgumentException_init_$Create$('Not a valid qname literal');
      // Inline function 'kotlin.text.substring' call
      nsUri = toString(charSequenceSubSequence(_this__u8e3s4, 1, split));
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = split + 1 | 0;
      var tmp1_substring = charSequenceLength(_this__u8e3s4);
      localname = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
    } else {
      nsUri = namespace.th8();
      localname = toString(_this__u8e3s4);
    }
    return QName_init_$Create$(nsUri, localname);
  }
  function isXmlWhitespace(data) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(data)) {
        var element = charSequenceGet(data, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'nl.adaptivity.xmlutil.isXmlWhitespace.<anonymous>' call
        if (!isXmlWhitespace_0(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function qname(namespaceUri, localname, prefix) {
    var tmp;
    if (prefix === VOID) {
      XMLConstants_getInstance();
      tmp = '';
    } else {
      tmp = prefix;
    }
    prefix = tmp;
    var tmp_0;
    if (namespaceUri == null) {
      XMLConstants_getInstance();
      tmp_0 = '';
    } else {
      tmp_0 = namespaceUri;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (prefix == null) {
      XMLConstants_getInstance();
      tmp_2 = '';
    } else {
      tmp_2 = prefix;
    }
    return new QName(tmp_1, localname, tmp_2);
  }
  function isXmlWhitespace_0(char) {
    return ((char === _Char___init__impl__6a9atx(10) ? true : char === _Char___init__impl__6a9atx(9)) ? true : char === _Char___init__impl__6a9atx(13)) ? true : char === _Char___init__impl__6a9atx(32);
  }
  function xmlEncode(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.xmlEncode.<anonymous>' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var c = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(60)) {
        tmp0_apply.ia('&lt;');
      } else if (c === _Char___init__impl__6a9atx(62)) {
        tmp0_apply.ia('&gt;');
      } else if (c === _Char___init__impl__6a9atx(38)) {
        tmp0_apply.ia('&amp;');
      } else {
        tmp0_apply.i9(c);
      }
    }
    return tmp0_apply.toString();
  }
  function XmlWriter() {
  }
  function smartStartTag(_this__u8e3s4, qName) {
    smartStartTag_0(_this__u8e3s4, qName.rhc(), qName.shc(), qName.thc());
  }
  function endTag(_this__u8e3s4, predelemname) {
    _this__u8e3s4.vha(predelemname.rhc(), predelemname.shc(), predelemname.thc());
  }
  function writeAttribute(_this__u8e3s4, name, value) {
    if (value == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
      var tmp0_isEmpty = name.rhc();
      if (charSequenceLength(tmp0_isEmpty) === 0) {
        // Inline function 'kotlin.text.isEmpty' call
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        var tmp1_isEmpty = name.thc();
        tmp_0 = charSequenceLength(tmp1_isEmpty) === 0;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp$ret$4;
        // Inline function 'nl.adaptivity.xmlutil.localPart' call
        tmp$ret$4 = name.shc();
        _this__u8e3s4.rha(null, tmp$ret$4, null, value);
        tmp = Unit_getInstance();
      } else {
        // Inline function 'nl.adaptivity.xmlutil.namespaceURI' call
        var tmp_1 = name.rhc();
        // Inline function 'nl.adaptivity.xmlutil.localPart' call
        var tmp_2 = name.shc();
        var tmp$ret$7;
        // Inline function 'nl.adaptivity.xmlutil.prefix' call
        tmp$ret$7 = name.thc();
        _this__u8e3s4.rha(tmp_1, tmp_2, tmp$ret$7, value);
        tmp = Unit_getInstance();
      }
    }
  }
  function writeElement(_this__u8e3s4, missingNamespaces, reader) {
    if (reader.ah9().equals(EventType_END_ELEMENT_getInstance()))
      throw IllegalArgumentException_init_$Create$('Cannot really validly write an end element here');
    writeCurrent(reader, _this__u8e3s4);
    if (reader.ah9().equals(EventType_START_ELEMENT_getInstance())) {
      writeElementContent(_this__u8e3s4, missingNamespaces, reader);
    }
  }
  function serialize(_this__u8e3s4, reader) {
    while (reader.e()) {
      switch (reader.f().h7_1) {
        case 0:
        case 11:
        case 6:
        case 7:
          if (_this__u8e3s4.i3v() <= 0) {
            writeCurrentEvent(_this__u8e3s4, reader);
          }

          break;
        case 9:
          // Inline function 'kotlin.text.isEmpty' call

          var tmp0_isEmpty = _this__u8e3s4.zha();
          if (charSequenceLength(tmp0_isEmpty) === 0) {
            writeCurrentEvent(_this__u8e3s4, reader);
          }

          break;
        default:
          writeCurrentEvent(_this__u8e3s4, reader);
          break;
      }
    }
  }
  function addUndeclaredNamespaces(_this__u8e3s4, reader, missingNamespaces) {
    undeclaredPrefixes(_this__u8e3s4, reader, missingNamespaces);
  }
  function writeElementContent(_this__u8e3s4, missingNamespaces, reader) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = reader;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'nl.adaptivity.xmlutil.writeElementContent.<anonymous>' call
      if (reader.ah9().equals(EventType_START_ELEMENT_getInstance()) ? !(missingNamespaces == null) : false) {
        addUndeclaredNamespaces(_this__u8e3s4, reader, missingNamespaces);
      }
      writeCurrent(reader, _this__u8e3s4);
      switch (element.h7_1) {
        case 1:
          writeElementContent(_this__u8e3s4, missingNamespaces, reader);
          break;
        case 2:
          return Unit_getInstance();
        default:
          break;
      }
    }
  }
  function smartStartTag_0(_this__u8e3s4, nsUri, localName, prefix) {
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    var tmp_0;
    if (nsUri == null) {
      tmp_0 = true;
    } else {
      XMLConstants_getInstance();
      tmp_0 = nsUri === 'http://www.w3.org/XML/1998/namespace';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      XMLConstants_getInstance();
      tmp = nsUri === 'http://www.w3.org/2000/xmlns/';
    }
    if (tmp) {
      var tmp_1 = _this__u8e3s4.ch9();
      var tmp_2;
      if (prefix == null) {
        XMLConstants_getInstance();
        tmp_2 = '';
      } else {
        tmp_2 = prefix;
      }
      var tmp1_elvis_lhs = tmp_1.nh8(tmp_2);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        XMLConstants_getInstance();
        tmp_3 = '';
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var namespace = tmp_3;
      _this__u8e3s4.nha(namespace, localName, prefix);
    } else {
      var writeNs = false;
      var tmp2_elvis_lhs = _this__u8e3s4.xha(nsUri);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'nl.adaptivity.xmlutil.smartStartTag.<anonymous>' call
        var tmp_5;
        if (prefix == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.smartStartTag.<anonymous>.<anonymous>' call
          tmp_5 = _this__u8e3s4.wha(prefix);
        }
        var tmp1_elvis_lhs_0 = tmp_5;
        var tmp_6;
        if (tmp1_elvis_lhs_0 == null) {
          XMLConstants_getInstance();
          tmp_6 = '';
        } else {
          tmp_6 = tmp1_elvis_lhs_0;
        }
        var currentNs = tmp_6;
        if (!(nsUri === currentNs)) {
          writeNs = true;
        }
        var tmp_7;
        if (prefix == null) {
          XMLConstants_getInstance();
          tmp_7 = '';
        } else {
          tmp_7 = prefix;
        }
        tmp_4 = tmp_7;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var usedPrefix = tmp_4;
      _this__u8e3s4.nha(nsUri, localName, usedPrefix);
      if (writeNs) {
        _this__u8e3s4.mha(usedPrefix, nsUri);
      }
    }
  }
  function writeCurrentEvent(_this__u8e3s4, reader) {
    switch (reader.ah9().h7_1) {
      case 0:
        _this__u8e3s4.sha(null, reader.eh9(), reader.fh9());
        break;
      case 1:
        _this__u8e3s4.nha(reader.th8(), reader.uh8(), reader.vh8());
        // Inline function 'kotlin.run' call

        // Inline function 'kotlin.contracts.contract' call

        var tmp0_iterator = reader.dh9().d();
        while (tmp0_iterator.e()) {
          var a = tmp0_iterator.f();
          _this__u8e3s4.mha(a.vh8(), a.th8());
        }

        // Inline function 'kotlin.run' call

        // Inline function 'kotlin.contracts.contract' call

        var progression = get_attributeIndices(reader);
        var inductionVariable = progression.y_1;
        var last = progression.z_1;
        var tmp;
        if (inductionVariable <= last) {
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var attrPrefix = reader.hh9(i);
            var namespace = attrPrefix === '' ? '' : reader.gh9(i);
            var tmp_0;
            if (namespace === '') {
              tmp_0 = '';
            } else if (namespace === _this__u8e3s4.ch9().nh8(attrPrefix)) {
              tmp_0 = attrPrefix;
            } else {
              var tmp2_elvis_lhs = _this__u8e3s4.ch9().oh8(namespace);
              tmp_0 = tmp2_elvis_lhs == null ? attrPrefix : tmp2_elvis_lhs;
            }
            var prefix = tmp_0;
            _this__u8e3s4.rha(namespace, reader.ih9(i), prefix, reader.jh9(i));
          }
           while (!(i === last));
          tmp = Unit_getInstance();
        }

        break;
      case 2:
        _this__u8e3s4.vha(reader.th8(), reader.uh8(), reader.vh8());
        break;
      case 3:
        _this__u8e3s4.hha(reader.h53());
        break;
      case 4:
        _this__u8e3s4.oha(reader.h53());
        break;
      case 10:
        _this__u8e3s4.rha(reader.th8(), reader.uh8(), reader.vh8(), reader.h53());
        break;
      case 5:
        _this__u8e3s4.pha(reader.h53());
        break;
      case 6:
        _this__u8e3s4.kha(reader.h53());
        break;
      case 7:
        _this__u8e3s4.uha();
        break;
      case 8:
        _this__u8e3s4.qha(reader.h53());
        break;
      case 9:
        _this__u8e3s4.zh9(reader.h53());
        break;
      case 11:
        _this__u8e3s4.jha(reader.xh8(), reader.yh8());
        break;
    }
  }
  function undeclaredPrefixes(_this__u8e3s4, reader, missingNamespaces) {
    assert_0(reader.ah9() === EventType_START_ELEMENT_getInstance());
    var prefix = reader.vh8();
    if (!missingNamespaces.t2(prefix)) {
      var uri = reader.th8();
      if (_this__u8e3s4.wha(prefix) === uri ? isPrefixDeclaredInElement(reader, prefix) : false) {
        return Unit_getInstance();
      } else {
        // Inline function 'kotlin.collections.set' call
        missingNamespaces.a5(prefix, uri);
      }
    }
  }
  var EscapeMode_MINIMAL_instance;
  var EscapeMode_ATTRCONTENTQUOT_instance;
  var EscapeMode_ATTRCONTENTAPOS_instance;
  var EscapeMode_TEXTCONTENT_instance;
  var EscapeMode_DTD_instance;
  var EscapeMode_entriesInitialized;
  function EscapeMode_initEntries() {
    if (EscapeMode_entriesInitialized)
      return Unit_getInstance();
    EscapeMode_entriesInitialized = true;
    EscapeMode_MINIMAL_instance = new EscapeMode('MINIMAL', 0);
    EscapeMode_ATTRCONTENTQUOT_instance = new EscapeMode('ATTRCONTENTQUOT', 1);
    EscapeMode_ATTRCONTENTAPOS_instance = new EscapeMode('ATTRCONTENTAPOS', 2);
    EscapeMode_TEXTCONTENT_instance = new EscapeMode('TEXTCONTENT', 3);
    EscapeMode_DTD_instance = new EscapeMode('DTD', 4);
  }
  var WriteState_BeforeDocument_instance;
  var WriteState_AfterXmlDecl_instance;
  var WriteState_AfterDocTypeDecl_instance;
  var WriteState_InTagContent_instance;
  var WriteState_Finished_instance;
  var WriteState_entriesInitialized;
  function WriteState_initEntries() {
    if (WriteState_entriesInitialized)
      return Unit_getInstance();
    WriteState_entriesInitialized = true;
    WriteState_BeforeDocument_instance = new WriteState('BeforeDocument', 0);
    WriteState_AfterXmlDecl_instance = new WriteState('AfterXmlDecl', 1);
    WriteState_AfterDocTypeDecl_instance = new WriteState('AfterDocTypeDecl', 2);
    WriteState_InTagContent_instance = new WriteState('InTagContent', 3);
    WriteState_Finished_instance = new WriteState('Finished', 4);
  }
  function namespaceAt($this, depth) {
    return ensureNotNull($this.khg_1[imul(depth, 3)]);
  }
  function setElementStack($this, depth, namespace, prefix, localName) {
    var esp = imul(depth, 3);
    if ($this.khg_1.length < (esp + 3 | 0)) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = $this.khg_1.length + 12 | 0;
      var hlp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = $this.khg_1;
      var tmp2_copyInto = esp;
      arrayCopy(tmp1_copyInto, hlp, 0, 0, tmp2_copyInto);
      $this.khg_1 = hlp;
    }
    var tmp = $this.khg_1;
    var tmp0 = esp;
    esp = tmp0 + 1 | 0;
    tmp[tmp0] = namespace;
    var tmp_0 = $this.khg_1;
    var tmp1 = esp;
    esp = tmp1 + 1 | 0;
    tmp_0[tmp1] = prefix;
    $this.khg_1[esp] = localName;
  }
  function prefixAt($this, depth) {
    return ensureNotNull($this.khg_1[imul(depth, 3) + 1 | 0]);
  }
  function localNameAt($this, depth) {
    return ensureNotNull($this.khg_1[imul(depth, 3) + 2 | 0]);
  }
  function finishPartialStartTag($this, close) {
    if (!$this.jhg_1) {
      return Unit_getInstance();
    }
    $this.jhg_1 = false;
    var endOfTag = !close ? '>' : $this.ihg_1 ? ' />' : '/>';
    $this.ehg_1.b(endOfTag);
  }
  function EscapeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function appendXmlCodepoint(_this__u8e3s4, $this, codepoint, mode) {
    var c = codepoint;
    var tmp;
    var tmp_0;
    var tmp_1;
    if ((codepoint === _UInt___init__impl__l7qpdl(9) ? true : codepoint === _UInt___init__impl__l7qpdl(10)) ? true : codepoint === _UInt___init__impl__l7qpdl(13)) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.UInt.rangeTo' call
      var progression = new UIntRange(_UInt___init__impl__l7qpdl(32), _UInt___init__impl__l7qpdl(55295));
      var containsLower = progression.ic_1;
      tmp_1 = UInt__compareTo_impl_yacclj(codepoint, progression.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(codepoint, containsLower) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.UInt.rangeTo' call
      var progression_0 = new UIntRange(_UInt___init__impl__l7qpdl(57344), _UInt___init__impl__l7qpdl(65533));
      var containsLower_0 = progression_0.ic_1;
      tmp_0 = UInt__compareTo_impl_yacclj(codepoint, progression_0.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(codepoint, containsLower_0) : false;
    }
    if (tmp_0) {
      var tmp$ret$3;
      // Inline function 'kotlin.UInt.toUShort' call
      // Inline function 'kotlin.toUShort' call
      var tmp0_toUShort = _UInt___get_data__impl__f0vqqw(codepoint);
      tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
      tmp = _Char___init__impl__6a9atx_0(tmp$ret$3);
    } else {
      tmp = _Char___init__impl__6a9atx_0(_UShort___init__impl__jigrne(0));
    }
    var ch = tmp;
    if (c === _UInt___init__impl__l7qpdl(0))
      throw IllegalArgumentException_init_$Create$('XML documents may not contain null strings directly or indirectly');
    else {
      if (ch === _Char___init__impl__6a9atx(38)) {
        _this__u8e3s4.b('&amp;');
      } else {
        if (ch === _Char___init__impl__6a9atx(60) ? !mode.equals(EscapeMode_MINIMAL_getInstance()) : false) {
          _this__u8e3s4.b('&lt;');
        } else {
          if (ch === _Char___init__impl__6a9atx(62) ? mode.equals(EscapeMode_TEXTCONTENT_getInstance()) : false) {
            _this__u8e3s4.b('&gt;');
          } else {
            if (ch === _Char___init__impl__6a9atx(34) ? mode.equals(EscapeMode_ATTRCONTENTQUOT_getInstance()) : false) {
              _this__u8e3s4.b('&quot;');
            } else {
              if (ch === _Char___init__impl__6a9atx(39) ? mode.equals(EscapeMode_ATTRCONTENTAPOS_getInstance()) : false) {
                _this__u8e3s4.b('&apos;');
              } else {
                var tmp_2;
                var tmp_3;
                var tmp_4;
                // Inline function 'kotlin.UInt.rangeTo' call
                var progression_1 = new UIntRange(_UInt___init__impl__l7qpdl(1), _UInt___init__impl__l7qpdl(8));
                var containsLower_1 = progression_1.ic_1;
                if (UInt__compareTo_impl_yacclj(c, progression_1.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(c, containsLower_1) : false) {
                  tmp_4 = true;
                } else {
                  tmp_4 = c === _UInt___init__impl__l7qpdl(11);
                }
                if (tmp_4) {
                  tmp_3 = true;
                } else {
                  tmp_3 = c === _UInt___init__impl__l7qpdl(12);
                }
                if (tmp_3) {
                  tmp_2 = true;
                } else {
                  // Inline function 'kotlin.UInt.rangeTo' call
                  var progression_2 = new UIntRange(_UInt___init__impl__l7qpdl(14), _UInt___init__impl__l7qpdl(31));
                  var containsLower_2 = progression_2.ic_1;
                  tmp_2 = UInt__compareTo_impl_yacclj(c, progression_2.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(c, containsLower_2) : false;
                }
                if (tmp_2) {
                  var tmp0 = $this.hhg_1.h7_1;
                  if (tmp0 === 0) {
                    appendXmlCodepoint$throwInvalid($this, c);
                  } else if (tmp0 === 1) {
                    appendXmlCodepoint$appendNumCharRef(_this__u8e3s4, c);
                  }
                } else {
                  var tmp_5;
                  // Inline function 'kotlin.UInt.rangeTo' call
                  var progression_3 = new UIntRange(_UInt___init__impl__l7qpdl(127), _UInt___init__impl__l7qpdl(132));
                  var containsLower_3 = progression_3.ic_1;
                  if (UInt__compareTo_impl_yacclj(c, progression_3.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(c, containsLower_3) : false) {
                    tmp_5 = true;
                  } else {
                    // Inline function 'kotlin.UInt.rangeTo' call
                    var progression_4 = new UIntRange(_UInt___init__impl__l7qpdl(134), _UInt___init__impl__l7qpdl(159));
                    var containsLower_4 = progression_4.ic_1;
                    tmp_5 = UInt__compareTo_impl_yacclj(c, progression_4.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(c, containsLower_4) : false;
                  }
                  if (tmp_5) {
                    var tmp0_0 = $this.hhg_1.h7_1;
                    if (tmp0_0 === 0) {
                      _this__u8e3s4.i9(ch);
                    } else if (tmp0_0 === 1) {
                      appendXmlCodepoint$appendNumCharRef(_this__u8e3s4, c);
                    }
                  } else {
                    var tmp_6;
                    var tmp_7;
                    // Inline function 'kotlin.UInt.rangeTo' call
                    var progression_5 = new UIntRange(_UInt___init__impl__l7qpdl(55296), _UInt___init__impl__l7qpdl(57343));
                    var containsLower_5 = progression_5.ic_1;
                    if (UInt__compareTo_impl_yacclj(c, progression_5.jc_1) <= 0 ? 0 <= UInt__compareTo_impl_yacclj(c, containsLower_5) : false) {
                      tmp_7 = true;
                    } else {
                      tmp_7 = c === _UInt___init__impl__l7qpdl(65534);
                    }
                    if (tmp_7) {
                      tmp_6 = true;
                    } else {
                      tmp_6 = c === _UInt___init__impl__l7qpdl(65535);
                    }
                    if (tmp_6) {
                      appendXmlCodepoint$throwInvalid($this, c);
                    } else {
                      // Inline function 'kotlin.UInt.compareTo' call
                      if (uintCompare(_UInt___get_data__impl__f0vqqw(c), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(65535))) > 0) {
                        // Inline function 'kotlin.UInt.minus' call
                        var down = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(c) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(65536)) | 0);
                        // Inline function 'kotlin.UInt.plus' call
                        // Inline function 'kotlin.UInt.shr' call
                        var tmp0_plus = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(down) >>> 10 | 0);
                        var highSurogate = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_plus) + _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(55296)) | 0);
                        // Inline function 'kotlin.UInt.plus' call
                        // Inline function 'kotlin.UInt.and' call
                        var tmp1_plus = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(down) & _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(1023)));
                        var lowSurogate = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_plus) + _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(56320)) | 0);
                        var tmp$ret$16;
                        // Inline function 'kotlin.UInt.toUShort' call
                        // Inline function 'kotlin.toUShort' call
                        var tmp0_toUShort_0 = _UInt___get_data__impl__f0vqqw(highSurogate);
                        tmp$ret$16 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort_0));
                        _this__u8e3s4.i9(_Char___init__impl__6a9atx_0(tmp$ret$16));
                        var tmp$ret$18;
                        // Inline function 'kotlin.UInt.toUShort' call
                        // Inline function 'kotlin.toUShort' call
                        var tmp0_toUShort_1 = _UInt___get_data__impl__f0vqqw(lowSurogate);
                        tmp$ret$18 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort_1));
                        _this__u8e3s4.i9(_Char___init__impl__6a9atx_0(tmp$ret$18));
                      } else {
                        _this__u8e3s4.i9(ch);
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
  }
  function writeEscapedText($this, s, mode) {
    var tmp0_iterator = asCodePoints(s).d();
    loop: while (tmp0_iterator.e()) {
      var c = tmp0_iterator.f().ub_1;
      appendXmlCodepoint($this.ehg_1, $this, c, mode);
    }
  }
  function triggerStartDocument($this) {
    if ($this.lhg_1.h7_1 === 0) {
      if (!$this.ghg_1.equals(XmlDeclMode_None_getInstance())) {
        $this.sha(null, null, null);
      }
      $this.lhg_1 = WriteState_AfterXmlDecl_getInstance();
    }
  }
  function writeIndent_0($this, newDepth) {
    var indentSeq = $this.mh9_1;
    var tmp;
    var tmp_0;
    if ($this.nhg_1 >= 0) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !indentSeq.l();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !($this.nhg_1 === $this.i3v());
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.zh9('\n');
      try {
        $this.mh9_1 = emptyList();
        var merged = joinRepeated(indentSeq, $this.i3v());
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = merged.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'nl.adaptivity.xmlutil.core.KtXmlWriter.writeIndent.<anonymous>' call
          element.dha($this);
        }
      }finally {
        $this.mh9_1 = indentSeq;
      }
    }
    $this.nhg_1 = newDepth;
  }
  function writeIndent$default_0($this, newDepth, $super) {
    newDepth = newDepth === VOID ? $this.i3v() : newDepth;
    return writeIndent_0($this, newDepth);
  }
  function ensureNamespaceIfRepairing($this, namespace, prefix) {
    var tmp;
    var tmp_0;
    if ($this.fhg_1 ? !(namespace == null) : false) {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_0 = charSequenceLength(namespace) > 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(prefix == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!($this.mhg_1.ohg(prefix) == namespace)) {
        $this.mha(prefix, namespace);
      }
    }
  }
  function rawWriteAttribute($this, prefix, localName, value) {
    $this.ehg_1.i9(_Char___init__impl__6a9atx(32));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(prefix) > 0) {
      $this.ehg_1.b(prefix).i9(_Char___init__impl__6a9atx(58));
    }
    $this.ehg_1.b(localName).i9(_Char___init__impl__6a9atx(61));
    var tmp1_container = indexOf(value, _Char___init__impl__6a9atx(34)) === -1 ? new Pair(new Char(_Char___init__impl__6a9atx(34)), EscapeMode_ATTRCONTENTQUOT_getInstance()) : new Pair(new Char(_Char___init__impl__6a9atx(39)), EscapeMode_ATTRCONTENTAPOS_getInstance());
    var q = tmp1_container.y4().n8_1;
    var mode = tmp1_container.z4();
    $this.ehg_1.i9(q);
    writeEscapedText($this, value, mode);
    $this.ehg_1.i9(q);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.phg_1 = -1;
    this.qhg_1 = 2147483647;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function WriteState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function appendXmlCodepoint$appendNumCharRef($this_appendXmlCodepoint, code) {
    $this_appendXmlCodepoint.b('&#x').b(toString_0(code, 16)).i9(_Char___init__impl__6a9atx(59));
  }
  function appendXmlCodepoint$throwInvalid(this$0, code) {
    throw IllegalArgumentException_init_$Create$('In xml ' + this$0.hhg_1.thg_1 + ' the character 0x' + toString_0(code, 16) + ' is not valid');
  }
  function EscapeMode_MINIMAL_getInstance() {
    EscapeMode_initEntries();
    return EscapeMode_MINIMAL_instance;
  }
  function EscapeMode_ATTRCONTENTQUOT_getInstance() {
    EscapeMode_initEntries();
    return EscapeMode_ATTRCONTENTQUOT_instance;
  }
  function EscapeMode_ATTRCONTENTAPOS_getInstance() {
    EscapeMode_initEntries();
    return EscapeMode_ATTRCONTENTAPOS_instance;
  }
  function EscapeMode_TEXTCONTENT_getInstance() {
    EscapeMode_initEntries();
    return EscapeMode_TEXTCONTENT_instance;
  }
  function WriteState_BeforeDocument_getInstance() {
    WriteState_initEntries();
    return WriteState_BeforeDocument_instance;
  }
  function WriteState_AfterXmlDecl_getInstance() {
    WriteState_initEntries();
    return WriteState_AfterXmlDecl_instance;
  }
  function WriteState_AfterDocTypeDecl_getInstance() {
    WriteState_initEntries();
    return WriteState_AfterDocTypeDecl_instance;
  }
  function WriteState_InTagContent_getInstance() {
    WriteState_initEntries();
    return WriteState_InTagContent_instance;
  }
  function WriteState_Finished_getInstance() {
    WriteState_initEntries();
    return WriteState_Finished_instance;
  }
  function KtXmlWriter(writer, isRepairNamespaces, xmlDeclMode, xmlVersion) {
    Companion_getInstance_5();
    isRepairNamespaces = isRepairNamespaces === VOID ? true : isRepairNamespaces;
    xmlDeclMode = xmlDeclMode === VOID ? XmlDeclMode_None_getInstance() : xmlDeclMode;
    xmlVersion = xmlVersion === VOID ? XmlVersion_XML11_getInstance() : xmlVersion;
    PlatformXmlWriterBase.call(this);
    this.ehg_1 = writer;
    this.fhg_1 = isRepairNamespaces;
    this.ghg_1 = xmlDeclMode;
    this.hhg_1 = xmlVersion;
    this.ihg_1 = true;
    this.jhg_1 = false;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.khg_1 = fillArrayVal(Array(12), null);
    this.lhg_1 = WriteState_BeforeDocument_getInstance();
    this.mhg_1 = new NamespaceHolder();
    var tmp_0 = this;
    Companion_getInstance_5();
    tmp_0.nhg_1 = -1;
  }
  protoOf(KtXmlWriter).ch9 = function () {
    return this.mhg_1.she_1;
  };
  protoOf(KtXmlWriter).i3v = function () {
    return this.mhg_1.rhe_1;
  };
  protoOf(KtXmlWriter).gh = function () {
    finishPartialStartTag(this, false);
  };
  protoOf(KtXmlWriter).sha = function (version, encoding, standalone) {
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    if (!this.lhg_1.equals(WriteState_BeforeDocument_getInstance())) {
      throw XmlException_init_$Create$('Attempting to write start document after document already started');
    }
    this.lhg_1 = WriteState_AfterXmlDecl_getInstance();
    var tmp;
    switch (version) {
      case null:
        tmp = this.hhg_1.thg_1;
        break;
      case '1':
      case '1.0':
        this.hhg_1 = XmlVersion_XML10_getInstance();
        tmp = version;
        break;
      default:
        this.hhg_1 = XmlVersion_XML11_getInstance();
        tmp = version;
        break;
    }
    var verString = tmp;
    this.ehg_1.b("<?xml version='" + verString + "'");
    var effectiveEncoding = encoding == null ? 'UTF-8' : encoding;
    if (!this.ghg_1.equals(XmlDeclMode_Minimal_getInstance()) ? true : !(encoding == null)) {
      this.ehg_1.b(" encoding='");
      writeEscapedText(this, effectiveEncoding, EscapeMode_ATTRCONTENTAPOS_getInstance());
      this.ehg_1.i9(_Char___init__impl__6a9atx(39));
      if (!(standalone == null)) {
        this.ehg_1.b(" standalone='");
        this.ehg_1.b(standalone ? 'yes' : 'no');
        this.ehg_1.i9(_Char___init__impl__6a9atx(39));
      }
    }
    if (this.ihg_1) {
      this.ehg_1.i9(_Char___init__impl__6a9atx(32));
    }
    this.ehg_1.b('?>');
  };
  protoOf(KtXmlWriter).kha = function (text) {
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    triggerStartDocument(this);
    if (!this.lhg_1.equals(WriteState_AfterXmlDecl_getInstance())) {
      throw XmlException_init_$Create$('Writing a DTD is only allowed once, in the prolog');
    }
    this.lhg_1 = WriteState_AfterDocTypeDecl_getInstance();
    var tmp = this.ehg_1.b('<!DOCTYPE ');
    var tmp$ret$0;
    // Inline function 'kotlin.text.trimStart' call
    tmp$ret$0 = toString(trimStart(isCharSequence(text) ? text : THROW_CCE()));
    tmp.b(tmp$ret$0).b('>');
  };
  protoOf(KtXmlWriter).iha = function (text) {
    finishPartialStartTag(this, false);
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    triggerStartDocument(this);
    this.ehg_1.b('<?');
    this.ehg_1.b(text);
    this.ehg_1.b('?>');
  };
  protoOf(KtXmlWriter).jha = function (target, data) {
    finishPartialStartTag(this, false);
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    triggerStartDocument(this);
    this.ehg_1.b('<?');
    this.ehg_1.b(target);
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(data) > 0) {
      this.ehg_1.i9(_Char___init__impl__6a9atx(32)).b(data);
    }
    this.ehg_1.b('?>');
  };
  protoOf(KtXmlWriter).nha = function (namespace, localName, prefix) {
    finishPartialStartTag(this, false);
    writeIndent$default_0(this);
    triggerStartDocument(this);
    if (this.lhg_1.equals(WriteState_Finished_getInstance())) {
      throw XmlException_init_$Create$('Attempting to write tag after the document finished');
    }
    this.lhg_1 = WriteState_InTagContent_getInstance();
    var tmp;
    if (namespace === '') {
      tmp = '';
    } else {
      var reg = this.xha(namespace);
      tmp = !(reg == null) ? reg : prefix == null ? this.mhg_1.uhg() : prefix;
    }
    var appliedPrefix = tmp;
    var tmp_0 = this.i3v();
    setElementStack(this, tmp_0, namespace == null ? '' : namespace, appliedPrefix, localName);
    this.ehg_1.i9(_Char___init__impl__6a9atx(60));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(appliedPrefix) > 0) {
      this.ehg_1.b(appliedPrefix);
      this.ehg_1.i9(_Char___init__impl__6a9atx(58));
    }
    this.ehg_1.b(localName);
    this.jhg_1 = true;
    this.mhg_1.ehe();
    ensureNamespaceIfRepairing(this, namespace, appliedPrefix);
  };
  protoOf(KtXmlWriter).vha = function (namespace, localName, prefix) {
    this.mhg_1.dhe();
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    var tmp;
    if (!((namespace == null ? '' : namespace) === namespaceAt(this, this.i3v()))) {
      tmp = true;
    } else {
      tmp = !(localNameAt(this, this.i3v()) === localName);
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('<\/{' + namespace + '}' + localName + '> does not match start');
    }
    if (this.jhg_1) {
      finishPartialStartTag(this, true);
    } else {
      this.ehg_1.b('<\/');
      var actualPrefix = prefixAt(this, this.i3v());
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(actualPrefix) > 0) {
        this.ehg_1.b(actualPrefix);
        this.ehg_1.i9(_Char___init__impl__6a9atx(58));
      }
      this.ehg_1.b(localName);
      this.ehg_1.i9(_Char___init__impl__6a9atx(62));
    }
  };
  protoOf(KtXmlWriter).hha = function (text) {
    finishPartialStartTag(this, false);
    Companion_getInstance_5();
    writeIndent_0(this, 2147483647);
    triggerStartDocument(this);
    var lastWasHyphen = false;
    this.ehg_1.b('<!--');
    var tmp0_iterator = asCodePoints(text).d();
    while (tmp0_iterator.e()) {
      var cp = tmp0_iterator.f().ub_1;
      var tmp = new UInt(cp);
      var tmp$ret$1;
      // Inline function 'kotlin.toUInt' call
      // Inline function 'kotlin.code' call
      tmp$ret$1 = _UInt___init__impl__l7qpdl(45);
      if (equals(tmp, new UInt(tmp$ret$1))) {
        if (lastWasHyphen) {
          lastWasHyphen = false;
          this.ehg_1.b('&#x2d;');
        } else {
          lastWasHyphen = true;
          this.ehg_1.i9(_Char___init__impl__6a9atx(45));
        }
      } else {
        appendXmlCodepoint(this.ehg_1, this, cp, EscapeMode_MINIMAL_getInstance());
      }
    }
    this.ehg_1.b('-->');
  };
  protoOf(KtXmlWriter).oha = function (text) {
    finishPartialStartTag(this, false);
    writeEscapedText(this, text, EscapeMode_TEXTCONTENT_getInstance());
    var tmp = this;
    Companion_getInstance_5();
    tmp.nhg_1 = -1;
  };
  protoOf(KtXmlWriter).pha = function (text) {
    finishPartialStartTag(this, false);
    var endPos = 0;
    this.ehg_1.b('<![CDATA[');
    var tmp0_iterator = asCodePoints(text).d();
    while (tmp0_iterator.e()) {
      var cp = tmp0_iterator.f().ub_1;
      var tmp;
      // Inline function 'kotlin.UInt.compareTo' call
      if (uintCompare(_UInt___get_data__impl__f0vqqw(cp), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(32223))) < 0) {
        var tmp$ret$2;
        // Inline function 'kotlin.UInt.toUShort' call
        // Inline function 'kotlin.toUShort' call
        var tmp0_toUShort = _UInt___get_data__impl__f0vqqw(cp);
        tmp$ret$2 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
        tmp = _Char___init__impl__6a9atx_0(tmp$ret$2);
      } else {
        tmp = _Char___init__impl__6a9atx_0(_UShort___init__impl__jigrne(0));
      }
      var ch = tmp;
      if (ch === _Char___init__impl__6a9atx(93) ? endPos === 0 ? true : endPos === 1 : false) {
        endPos = endPos + 1 | 0;
        this.ehg_1.i9(ch);
      } else if (ch === _Char___init__impl__6a9atx(62) ? endPos === 2 : false) {
        this.ehg_1.b('&gt;');
      } else if (ch === _Char___init__impl__6a9atx(93) ? endPos === 2 : false) {
        this.ehg_1.i9(ch);
      } else {
        endPos = 0;
        appendXmlCodepoint(this.ehg_1, this, cp, EscapeMode_MINIMAL_getInstance());
      }
    }
    this.ehg_1.b(']]>');
    var tmp_0 = this;
    Companion_getInstance_5();
    tmp_0.nhg_1 = -1;
  };
  protoOf(KtXmlWriter).qha = function (text) {
    finishPartialStartTag(this, false);
    this.ehg_1.i9(_Char___init__impl__6a9atx(38)).b(text).i9(_Char___init__impl__6a9atx(59));
    var tmp = this;
    Companion_getInstance_5();
    tmp.nhg_1 = -1;
  };
  protoOf(KtXmlWriter).zh9 = function (text) {
    finishPartialStartTag(this, false);
    triggerStartDocument(this);
    var inductionVariable = 0;
    var last = text.length;
    while (inductionVariable < last) {
      var c = charSequenceGet(text, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (!(((c === _Char___init__impl__6a9atx(10) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) ? true : c === _Char___init__impl__6a9atx(32))) {
        throw IllegalArgumentException_init_$Create$('"' + text + '" is not ignorable whitespace');
      }
    }
    this.ehg_1.b(text);
    var tmp = this;
    Companion_getInstance_5();
    tmp.nhg_1 = -1;
  };
  protoOf(KtXmlWriter).rha = function (namespace, name, prefix, value) {
    XMLConstants_getInstance();
    if (namespace === 'http://www.w3.org/2000/xmlns/') {
      this.mha(name, value);
      return Unit_getInstance();
    } else {
      var tmp;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (namespace == null ? true : charSequenceLength(namespace) === 0) {
        XMLConstants_getInstance();
        tmp = 'xmlns' === name;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.mha('', value);
        return Unit_getInstance();
      }
    }
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!(prefix == null)) {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_2 = charSequenceLength(prefix) > 0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = !(namespace == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp_0 = charSequenceLength(namespace) > 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.vhg(prefix, namespace);
      ensureNamespaceIfRepairing(this, namespace, prefix);
    }
    if (!this.jhg_1) {
      throw IllegalStateException_init_$Create$('illegal position for attribute');
    }
    var tmp_3;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(prefix == null ? true : charSequenceLength(prefix) === 0)) {
      var tmp_4;
      if (!(this.wha(prefix) == namespace)) {
        tmp_4 = this.xha(namespace);
      } else {
        tmp_4 = prefix;
      }
      tmp_3 = tmp_4;
    } else {
      tmp_3 = prefix;
    }
    var tmp0_elvis_lhs = tmp_3;
    var actualPrefix = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    rawWriteAttribute(this, actualPrefix, name, value);
  };
  protoOf(KtXmlWriter).mha = function (namespacePrefix, namespaceUri) {
    var existingNamespaceForPrefix = this.mhg_1.whg(namespacePrefix);
    if (!(existingNamespaceForPrefix == null)) {
      if (this.fhg_1)
        return Unit_getInstance();
      else if (!(existingNamespaceForPrefix === namespaceUri))
        throw IllegalStateException_init_$Create$('Attempting to set prefix to different values in the same tag');
      else
        throw IllegalStateException_init_$Create$('Namespace attribute duplicated');
    }
    this.mhg_1.xhg(namespacePrefix, namespaceUri);
    if (!this.jhg_1) {
      throw IllegalStateException_init_$Create$('illegal position for attribute');
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(namespacePrefix) > 0) {
      XMLConstants_getInstance();
      rawWriteAttribute(this, 'xmlns', namespacePrefix, namespaceUri);
    } else {
      XMLConstants_getInstance();
      rawWriteAttribute(this, '', 'xmlns', namespaceUri);
    }
  };
  protoOf(KtXmlWriter).uha = function () {
    assert_0(this.i3v() === 0);
    if (!this.lhg_1.equals(WriteState_InTagContent_getInstance())) {
      throw XmlException_init_$Create$('Attempting to end document when in invalid state: ' + this.lhg_1);
    }
    while (this.i3v() > 0) {
      this.vha(namespaceAt(this, this.i3v() - 1 | 0), prefixAt(this, this.i3v() - 1 | 0), localNameAt(this, this.i3v() - 1 | 0));
    }
    this.gh();
  };
  protoOf(KtXmlWriter).vhg = function (prefix, namespaceUri) {
    if (!(namespaceUri === this.wha(prefix))) {
      this.mhg_1.xhg(prefix, namespaceUri);
    }
  };
  protoOf(KtXmlWriter).wha = function (prefix) {
    return this.mhg_1.ohg(prefix);
  };
  protoOf(KtXmlWriter).xha = function (namespaceUri) {
    var tmp;
    if (namespaceUri == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.core.KtXmlWriter.getPrefix.<anonymous>' call
      tmp = this.mhg_1.yhg(namespaceUri);
    }
    return tmp;
  };
  protoOf(KtXmlWriter).o1y = function () {
    this.mhg_1.a4();
  };
  function asCodePoints(_this__u8e3s4) {
    return new asCodePoints$1(_this__u8e3s4);
  }
  function joinRepeated(_this__u8e3s4, repeats) {
    var it = _this__u8e3s4.d();
    if (!it.e())
      return emptyList();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var pending = null;
    var inductionVariable = 0;
    if (inductionVariable < repeats)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_iterator = _this__u8e3s4.d();
        while (tmp1_iterator.e()) {
          var ev = tmp1_iterator.f();
          if (pending == null) {
            pending = ev;
          } else if (pending.ah9().equals(EventType_COMMENT_getInstance()) ? true : !pending.ah9().equals(ev.ah9())) {
            result.a(pending);
            pending = ev;
          } else if (ev.ah9().equals(pending.ah9())) {
            pending = new TextEvent(null, pending.ah9(), pending.cha_1 + ev.cha_1);
          }
        }
      }
       while (inductionVariable < repeats);
    if (!(pending == null)) {
      result.a(pending);
    }
    return result;
  }
  function asCodePoints$1$iterator$1($this_asCodePoints) {
    this.ahh_1 = $this_asCodePoints;
    this.zhg_1 = 0;
  }
  protoOf(asCodePoints$1$iterator$1).e = function () {
    return this.zhg_1 < charSequenceLength(this.ahh_1);
  };
  protoOf(asCodePoints$1$iterator$1).zb = function () {
    var tmp;
    if (isHighSurrogate(charSequenceGet(this.ahh_1, this.zhg_1)) === true) {
      // Inline function 'kotlin.UInt.plus' call
      // Inline function 'kotlin.UInt.plus' call
      // Inline function 'kotlin.UInt.shl' call
      // Inline function 'kotlin.UInt.minus' call
      // Inline function 'kotlin.toUInt' call
      // Inline function 'kotlin.code' call
      var tmp0_get_code_gknlva = charSequenceGet(this.ahh_1, this.zhg_1);
      var tmp1_toUInt = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
      var tmp2_minus = _UInt___init__impl__l7qpdl(tmp1_toUInt);
      var tmp3_shl = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(55296)) | 0);
      var tmp4_plus = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp3_shl) << 10);
      var tmp8_plus = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(65536)) + _UInt___get_data__impl__f0vqqw(tmp4_plus) | 0);
      // Inline function 'kotlin.UInt.minus' call
      // Inline function 'kotlin.toUInt' call
      // Inline function 'kotlin.code' call
      var tmp5_get_code_wtnftn = charSequenceGet(this.ahh_1, this.zhg_1 + 1 | 0);
      var tmp6_toUInt = Char__toInt_impl_vasixd(tmp5_get_code_wtnftn);
      var tmp7_minus = _UInt___init__impl__l7qpdl(tmp6_toUInt);
      var tmp9_plus = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp7_minus) - _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(56320)) | 0);
      var codePoint = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp8_plus) + _UInt___get_data__impl__f0vqqw(tmp9_plus) | 0);
      this.zhg_1 = this.zhg_1 + 2 | 0;
      tmp = codePoint;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.toUInt' call
      // Inline function 'kotlin.code' call
      var tmp10_get_code_2rpm0d = charSequenceGet(this.ahh_1, this.zhg_1);
      var tmp11_toUInt = Char__toInt_impl_vasixd(tmp10_get_code_2rpm0d);
      var tmp12_also = _UInt___init__impl__l7qpdl(tmp11_toUInt);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.core.<no name provided>.next.<anonymous>' call
      this.zhg_1 = this.zhg_1 + 1 | 0;
      tmp = tmp12_also;
    }
    return tmp;
  };
  protoOf(asCodePoints$1$iterator$1).f = function () {
    return new UInt(this.zb());
  };
  function asCodePoints$1($this_asCodePoints) {
    this.bhh_1 = $this_asCodePoints;
  }
  protoOf(asCodePoints$1).d = function () {
    return new asCodePoints$1$iterator$1(this.bhh_1);
  };
  var XmlVersion_XML10_instance;
  var XmlVersion_XML11_instance;
  var XmlVersion_entriesInitialized;
  function XmlVersion_initEntries() {
    if (XmlVersion_entriesInitialized)
      return Unit_getInstance();
    XmlVersion_entriesInitialized = true;
    XmlVersion_XML10_instance = new XmlVersion('XML10', 0, '1.0');
    XmlVersion_XML11_instance = new XmlVersion('XML11', 1, '1.1');
  }
  function XmlVersion(name, ordinal, versionString) {
    Enum.call(this, name, ordinal);
    this.thg_1 = versionString;
  }
  function XmlVersion_XML10_getInstance() {
    XmlVersion_initEntries();
    return XmlVersion_XML10_instance;
  }
  function XmlVersion_XML11_getInstance() {
    XmlVersion_initEntries();
    return XmlVersion_XML11_instance;
  }
  function NamespaceHolder$namespaceContext$o$getPrefixesCompat$lambda(this$0, $namespaceURI) {
    return function (it) {
      return getNamespace(this$0, it) === $namespaceURI;
    };
  }
  function NamespaceHolder$namespaceContext$o$getPrefixesCompat$lambda_0(this$0) {
    return function (it) {
      return getPrefix(this$0, it);
    };
  }
  function namespaceIndicesAt($this, depth) {
    var startIdx = depth === 0 ? 0 : arrayUseAtDepth($this, depth - 1 | 0) / 2 | 0;
    var endIdx = arrayUseAtDepth($this, depth) / 2 | 0;
    return until(startIdx, endIdx);
  }
  function arrayUseAtDepth($this, depth) {
    return imul($this.qhe_1[depth], 2);
  }
  function prefixArrayPos($this, pairPos) {
    return imul(pairPos, 2);
  }
  function nsArrayPos($this, pairPos) {
    return imul(pairPos, 2) + 1 | 0;
  }
  function setPrefix($this, pos, value) {
    var tmp = $this.phe_1;
    var tmp_0 = prefixArrayPos($this, pos);
    var tmp1_elvis_lhs = value == null ? null : toString(value);
    tmp[tmp_0] = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function getPrefix($this, pos) {
    return ensureNotNull($this.phe_1[prefixArrayPos($this, pos)]);
  }
  function setNamespace($this, pos, value) {
    var tmp = $this.phe_1;
    var tmp_0 = nsArrayPos($this, pos);
    var tmp1_elvis_lhs = value == null ? null : toString(value);
    tmp[tmp_0] = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function getNamespace($this, pos) {
    return ensureNotNull($this.phe_1[nsArrayPos($this, pos)]);
  }
  function enlargeNamespaceBuffer($this) {
    $this.phe_1 = copyOf($this.phe_1, imul($this.phe_1.length, 2));
  }
  function NamespaceHolder$namespaceContext$1(this$0) {
    this.chh_1 = this$0;
  }
  protoOf(NamespaceHolder$namespaceContext$1).nh8 = function (prefix) {
    return this.chh_1.ohg(prefix);
  };
  protoOf(NamespaceHolder$namespaceContext$1).oh8 = function (namespaceURI) {
    return this.chh_1.yhg(namespaceURI);
  };
  protoOf(NamespaceHolder$namespaceContext$1).ph8 = function () {
    return SimpleNamespaceContext_init_$Create$_1(this.chh_1);
  };
  protoOf(NamespaceHolder$namespaceContext$1).d = function () {
    return this.chh_1.d();
  };
  protoOf(NamespaceHolder$namespaceContext$1).qh8 = function (namespaceURI) {
    var tmp = asSequence_0(downTo(this.chh_1.dhh() - 1 | 0, 0));
    var tmp_0 = filter(tmp, NamespaceHolder$namespaceContext$o$getPrefixesCompat$lambda(this.chh_1, namespaceURI));
    return map(tmp_0, NamespaceHolder$namespaceContext$o$getPrefixesCompat$lambda_0(this.chh_1)).d();
  };
  function NamespaceHolder$iterator$1(this$0) {
    this.fhh_1 = this$0;
    this.ehh_1 = 0;
  }
  protoOf(NamespaceHolder$iterator$1).e = function () {
    return this.ehh_1 < this.fhh_1.qhe_1[this.fhh_1.rhe_1];
  };
  protoOf(NamespaceHolder$iterator$1).f = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = new NamespaceImpl(getPrefix(this.fhh_1, this.ehh_1), getNamespace(this.fhh_1, this.ehh_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.core.impl.<no name provided>.next.<anonymous>' call
    this.ehh_1 = this.ehh_1 + 1 | 0;
    return tmp0_also;
  };
  function NamespaceHolder() {
    this.ohe_1 = 1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.phe_1 = fillArrayVal(Array(10), null);
    this.qhe_1 = new Int32Array(20);
    this.rhe_1 = 0;
    var tmp_0 = this;
    tmp_0.she_1 = new NamespaceHolder$namespaceContext$1(this);
  }
  protoOf(NamespaceHolder).uhf = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = namespaceIndicesAt(this, this.rhe_1);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.y_1;
    var last = tmp0_map.z_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.<get-namespacesAtCurrentDepth>.<anonymous>' call
        tmp$ret$0 = new NamespaceImpl(getPrefix(this, item), getNamespace(this, item));
        tmp0_mapTo.a(tmp$ret$0);
      }
       while (!(item === last));
    return tmp0_mapTo;
  };
  protoOf(NamespaceHolder).ehe = function () {
    this.rhe_1 = this.rhe_1 + 1 | 0;
    if (this.rhe_1 >= this.qhe_1.length) {
      this.qhe_1 = copyOf_0(this.qhe_1, imul(this.qhe_1.length, 2));
    }
    this.qhe_1[this.rhe_1] = this.rhe_1 === 0 ? 0 : this.qhe_1[this.rhe_1 - 1 | 0];
  };
  protoOf(NamespaceHolder).dhe = function () {
    var progression = namespaceIndicesAt(this, this.rhe_1);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.phe_1[prefixArrayPos(this, i)] = null;
        this.phe_1[nsArrayPos(this, i)] = null;
      }
       while (!(i === last));
    this.qhe_1[this.rhe_1] = 0;
    this.rhe_1 = this.rhe_1 - 1 | 0;
  };
  protoOf(NamespaceHolder).dhh = function () {
    return this.qhe_1[this.rhe_1];
  };
  protoOf(NamespaceHolder).a4 = function () {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.phe_1 = fillArrayVal(Array(10), null);
    this.qhe_1 = new Int32Array(20);
    this.rhe_1 = 0;
  };
  protoOf(NamespaceHolder).ahf = function (ns) {
    this.xhg(ns.vh8(), ns.th8());
  };
  protoOf(NamespaceHolder).xhg = function (prefix, namespaceUri) {
    var prevCounts = this.rhe_1 >= 1 ? this.qhe_1[this.rhe_1 - 1 | 0] : 0;
    var inductionVariable = prevCounts;
    var last = this.qhe_1[this.rhe_1];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(getPrefix(this, i), prefix) ? equals(getNamespace(this, i), namespaceUri) : false)
          return Unit_getInstance();
      }
       while (inductionVariable < last);
    var nextPair = this.qhe_1[this.rhe_1];
    if (nsArrayPos(this, nextPair) >= this.phe_1.length) {
      enlargeNamespaceBuffer(this);
    }
    setPrefix(this, nextPair, prefix);
    setNamespace(this, nextPair, namespaceUri);
    var tmp1_array = this.qhe_1;
    var tmp2_index0 = this.rhe_1;
    tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + 1 | 0;
  };
  protoOf(NamespaceHolder).ohg = function (prefix) {
    var prefixStr = toString(prefix);
    var tmp;
    XMLConstants_getInstance();
    if (prefixStr === 'xml') {
      XMLConstants_getInstance();
      return 'http://www.w3.org/XML/1998/namespace';
    } else {
      XMLConstants_getInstance();
      if (prefixStr === 'xmlns') {
        XMLConstants_getInstance();
        return 'http://www.w3.org/2000/xmlns/';
      } else {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_firstOrNull = downTo(this.dhh() - 1 | 0, 0);
          var inductionVariable = tmp0_firstOrNull.y_1;
          var last = tmp0_firstOrNull.z_1;
          var step = tmp0_firstOrNull.a1_1;
          if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
            do {
              var element = inductionVariable;
              inductionVariable = inductionVariable + step | 0;
              // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getNamespaceUri.<anonymous>' call
              if (getPrefix(this, element) === prefixStr) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
             while (!(element === last));
          tmp$ret$1 = null;
        }
        var tmp0_safe_receiver = tmp$ret$1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getNamespaceUri.<anonymous>' call
          tmp_0 = getNamespace(this, tmp0_safe_receiver);
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          var tmp_2;
          // Inline function 'kotlin.text.isEmpty' call
          if (charSequenceLength(prefixStr) === 0) {
            XMLConstants_getInstance();
            tmp_2 = '';
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
    }
    return tmp;
  };
  protoOf(NamespaceHolder).yhg = function (namespaceUri) {
    var namespaceUriStr = toString(namespaceUri);
    var tmp;
    XMLConstants_getInstance();
    if (namespaceUriStr === 'http://www.w3.org/XML/1998/namespace') {
      XMLConstants_getInstance();
      tmp = 'xml';
    } else {
      XMLConstants_getInstance();
      if (namespaceUriStr === 'http://www.w3.org/2000/xmlns/') {
        XMLConstants_getInstance();
        tmp = 'xmlns';
      } else {
        if (namespaceUriStr === '') {
          var tmp_0;
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.none' call
            var tmp0_none = until(0, this.dhh());
            var tmp_1;
            if (isInterface(tmp0_none, Collection)) {
              tmp_1 = tmp0_none.l();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var inductionVariable = tmp0_none.y_1;
            var last = tmp0_none.z_1;
            if (inductionVariable <= last)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getPrefix.<anonymous>' call
                // Inline function 'kotlin.text.isEmpty' call
                var tmp0_isEmpty = getPrefix(this, element);
                if (charSequenceLength(tmp0_isEmpty) === 0) {
                  tmp$ret$0 = false;
                  break $l$block_0;
                }
              }
               while (!(element === last));
            tmp$ret$0 = true;
          }
          if (tmp$ret$0) {
            XMLConstants_getInstance();
            tmp_0 = '';
          } else {
            tmp_0 = null;
          }
          tmp = tmp_0;
        } else {
          var tmp$ret$6;
          $l$block_3: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp1_firstOrNull = downTo(this.dhh() - 1 | 0, 0);
            var inductionVariable_0 = tmp1_firstOrNull.y_1;
            var last_0 = tmp1_firstOrNull.z_1;
            var step = tmp1_firstOrNull.a1_1;
            if ((step > 0 ? inductionVariable_0 <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable_0 : false)
              do {
                var element_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + step | 0;
                // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getPrefix.<anonymous>' call
                var tmp_2;
                if (getNamespace(this, element_0) === namespaceUriStr) {
                  var tmp$ret$3;
                  $l$block_2: {
                    // Inline function 'kotlin.collections.none' call
                    var tmp0_none_0 = until(element_0 + 1 | 0, this.dhh());
                    var tmp_3;
                    if (isInterface(tmp0_none_0, Collection)) {
                      tmp_3 = tmp0_none_0.l();
                    } else {
                      tmp_3 = false;
                    }
                    if (tmp_3) {
                      tmp$ret$3 = true;
                      break $l$block_2;
                    }
                    var inductionVariable_1 = tmp0_none_0.y_1;
                    var last_1 = tmp0_none_0.z_1;
                    if (inductionVariable_1 <= last_1)
                      do {
                        var element_1 = inductionVariable_1;
                        inductionVariable_1 = inductionVariable_1 + 1 | 0;
                        // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getPrefix.<anonymous>.<anonymous>' call
                        if (getPrefix(this, element_0) === getPrefix(this, element_1)) {
                          tmp$ret$3 = false;
                          break $l$block_2;
                        }
                      }
                       while (!(element_1 === last_1));
                    tmp$ret$3 = true;
                  }
                  tmp_2 = tmp$ret$3;
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$6 = element_0;
                  break $l$block_3;
                }
              }
               while (!(element_0 === last_0));
            tmp$ret$6 = null;
          }
          var tmp0_safe_receiver = tmp$ret$6;
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'nl.adaptivity.xmlutil.core.impl.NamespaceHolder.getPrefix.<anonymous>' call
            tmp_4 = getPrefix(this, tmp0_safe_receiver);
          }
          tmp = tmp_4;
        }
      }
    }
    return tmp;
  };
  protoOf(NamespaceHolder).d = function () {
    return new NamespaceHolder$iterator$1(this);
  };
  protoOf(NamespaceHolder).uhg = function () {
    var prefix;
    do {
      prefix = 'n' + this.ohe_1;
    }
     while (!(this.ohg(prefix) == null));
    return prefix;
  };
  protoOf(NamespaceHolder).whg = function (prefix) {
    var progression = namespaceIndicesAt(this, this.rhe_1);
    var nestedFirst = progression.y_1;
    var nestedLast = progression.z_1;
    var inductionVariable = nestedFirst;
    var last = getProgressionLastElement(nestedFirst, nestedLast, 2);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 2 | 0;
        if (this.phe_1[prefixArrayPos(this, i)] === prefix) {
          return this.phe_1[nsArrayPos(this, i)];
        }
      }
       while (!(i === last));
    return null;
  };
  function toIndentSequence$sbToTextEvent(sb, result) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(sb) > 0) {
      var text = sb.toString();
      if (!isXmlWhitespace_1(text)) {
        throw XmlException_init_$Create$('Indents can only be whitespace or comments: ' + text);
      }
      result.a(new TextEvent(null, EventType_IGNORABLE_WHITESPACE_getInstance(), text));
      sb.yi();
    }
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.ghh_1 = '<!---->';
  }
  protoOf(Companion_5).hhh = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var sb = StringBuilder_init_$Create$();
    var commentPos = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var ch = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (ch === _Char___init__impl__6a9atx(60)) {
        if (commentPos === 0) {
          commentPos = commentPos + 1 | 0;
        } else {
          sb.i9(ch);
        }
      } else if (ch === _Char___init__impl__6a9atx(33)) {
        if (commentPos === 1) {
          commentPos = commentPos + 1 | 0;
        } else {
          sb.i9(ch);
        }
      } else if (ch === _Char___init__impl__6a9atx(45)) {
        switch (commentPos) {
          case 2:
            commentPos = commentPos + 1 | 0;
            break;
          case 3:
            commentPos = commentPos + 1 | 0;
            toIndentSequence$sbToTextEvent(sb, result);
            break;
          case 4:
          case 5:
            commentPos = commentPos + 1 | 0;
            break;
          case 6:
            throw XmlException_init_$Create$('-- is not allowed to occur inside xml comment text');
          default:
            sb.i9(ch);
            break;
        }
      } else if (ch === _Char___init__impl__6a9atx(62)) {
        switch (commentPos) {
          case 6:
            commentPos = 0;
            result.a(new TextEvent(null, EventType_COMMENT_getInstance(), sb.toString()));
            sb.yi();
            break;
          case 5:
            commentPos = 4;
            sb.ia('->');
            break;
          default:
            sb.i9(ch);
            break;
        }
      } else {
        switch (commentPos) {
          case 1:
          case 2:
          case 3:
            sb.wi('<!---->', 0, commentPos);
            commentPos = 0;
            sb.i9(ch);
            break;
          case 0:
          case 4:
            sb.i9(ch);
            break;
          case 5:
            commentPos = 4;
            sb.i9(_Char___init__impl__6a9atx(45)).i9(ch);
            break;
          case 6:
            throw XmlException_init_$Create$('-- is not allowed to occur inside xml comment text');
        }
      }
    }
    if (commentPos > 0)
      throw XmlException_init_$Create$('Indent can not contain unclosed comment');
    toIndentSequence$sbToTextEvent(sb, result);
    return result;
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PlatformXmlWriterBase$_get_indentString_$lambda_yiqku9(ev) {
    return ev.ah9().h7_1 === 3 ? '<!--' + ev.cha_1 + '-->' : ev.cha_1;
  }
  function PlatformXmlWriterBase(indentSequence) {
    Companion_getInstance_6();
    indentSequence = indentSequence === VOID ? emptyList() : indentSequence;
    this.mh9_1 = toList(indentSequence);
  }
  protoOf(PlatformXmlWriterBase).yha = function (value) {
    this.mh9_1 = Companion_getInstance_6().hhh(value);
  };
  protoOf(PlatformXmlWriterBase).zha = function () {
    var tmp = this.mh9_1;
    return joinToString_0(tmp, VOID, VOID, VOID, VOID, VOID, PlatformXmlWriterBase$_get_indentString_$lambda_yiqku9);
  };
  function get_WHITESPACE() {
    _init_properties_chars_kt__oshz4b();
    return WHITESPACE;
  }
  var WHITESPACE;
  function isXmlWhitespace_1(_this__u8e3s4) {
    _init_properties_chars_kt__oshz4b();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
        var element = charSequenceGet(_this__u8e3s4, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'nl.adaptivity.xmlutil.core.impl.isXmlWhitespace.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(element);
        if (!isXmlWhitespace_2(tmp$ret$0)) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    return tmp$ret$2;
  }
  function isXmlWhitespace_2(_this__u8e3s4) {
    _init_properties_chars_kt__oshz4b();
    return _this__u8e3s4 >= get_WHITESPACE().length ? false : get_WHITESPACE()[_this__u8e3s4];
  }
  var properties_initialized_chars_kt_qk0z7x;
  function _init_properties_chars_kt__oshz4b() {
    if (!properties_initialized_chars_kt_qk0z7x) {
      properties_initialized_chars_kt_qk0z7x = true;
      // Inline function 'kotlin.also' call
      var tmp0_also = booleanArray(33);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'nl.adaptivity.xmlutil.core.impl.WHITESPACE.<anonymous>' call
      // Inline function 'kotlin.code' call
      tmp0_also[9] = true;
      // Inline function 'kotlin.code' call
      tmp0_also[10] = true;
      // Inline function 'kotlin.code' call
      tmp0_also[13] = true;
      // Inline function 'kotlin.code' call
      tmp0_also[32] = true;
      WHITESPACE = tmp0_also;
    }
  }
  function iterator(_this__u8e3s4) {
    return new NamedNodeMapIterator(_this__u8e3s4);
  }
  function NamedNodeMapIterator(map) {
    this.ihh_1 = map;
    this.jhh_1 = 0;
  }
  protoOf(NamedNodeMapIterator).e = function () {
    var tmp = this.jhh_1;
    // Inline function 'nl.adaptivity.xmlutil.dom.getLength' call
    return tmp < this.ihh_1.length;
  };
  protoOf(NamedNodeMapIterator).f = function () {
    var tmp1 = this.jhh_1;
    this.jhh_1 = tmp1 + 1 | 0;
    var tmp = get(this.ihh_1, tmp1);
    return (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE();
  };
  function get(_this__u8e3s4, index) {
    var tmp = _this__u8e3s4.item(index);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function NodeConsts() {
    NodeConsts_instance = this;
    this.khh_1 = 1;
    this.lhh_1 = 2;
    this.mhh_1 = 3;
    this.nhh_1 = 4;
    this.ohh_1 = 5;
    this.phh_1 = 6;
    this.qhh_1 = 7;
    this.rhh_1 = 8;
    this.shh_1 = 9;
    this.thh_1 = 10;
    this.uhh_1 = 11;
    this.vhh_1 = 12;
  }
  var NodeConsts_instance;
  function NodeConsts_getInstance() {
    if (NodeConsts_instance == null)
      new NodeConsts();
    return NodeConsts_instance;
  }
  function iterator_0(_this__u8e3s4) {
    return new NodeListIterator(_this__u8e3s4);
  }
  function NodeListIterator(nodeList) {
    this.whh_1 = nodeList;
    this.xhh_1 = 0;
  }
  protoOf(NodeListIterator).e = function () {
    var tmp = this.xhh_1;
    // Inline function 'nl.adaptivity.xmlutil.dom.getLength' call
    return tmp < this.whh_1.length;
  };
  protoOf(NodeListIterator).f = function () {
    var tmp1 = this.xhh_1;
    this.xhh_1 = tmp1 + 1 | 0;
    var tmp2_elvis_lhs = this.whh_1.item(tmp1);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$_0('No item found in the iterator');
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  function ICompactFragment() {
  }
  function removeElementChildren(_this__u8e3s4) {
    var top = _this__u8e3s4;
    var cur = top.firstChild;
    while (!(cur == null)) {
      var n = cur.nextSibling;
      if (get_isElement_0(cur)) {
        top.removeChild(cur);
      }
      cur = n;
    }
  }
  function createElement(_this__u8e3s4, name) {
    return _this__u8e3s4.createElementNS(name.rhc(), toCName(name));
  }
  function myLookupNamespaceURI(_this__u8e3s4, prefix) {
    var tmp;
    var tmp_0 = _this__u8e3s4.nodeType;
    NodeConsts_getInstance();
    if (!(tmp_0 === 1)) {
      tmp = null;
    } else {
      // Inline function 'nl.adaptivity.xmlutil.util.filterTyped' call
      var tmp0_filterTyped = (isObject(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE()).attributes;
      // Inline function 'kotlin.collections.mutableListOf' call
      var result = ArrayList_init_$Create$();
      // Inline function 'nl.adaptivity.xmlutil.util.forEachAttr' call
      var l = tmp0_filterTyped.length;
      var inductionVariable = 0;
      if (inductionVariable < l)
        do {
          var idx = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'nl.adaptivity.xmlutil.util.filterTyped.<anonymous>' call
          var tmp_1 = tmp0_filterTyped.item(idx);
          var tmp0_anonymous = (!(tmp_1 == null) ? isObject(tmp_1) : false) ? tmp_1 : THROW_CCE();
          // Inline function 'nl.adaptivity.xmlutil.util.myLookupNamespaceURI.<anonymous>' call
          if ((prefix === '' ? tmp0_anonymous.localName === 'xmlns' : false) ? true : tmp0_anonymous.prefix === 'xmlns' ? tmp0_anonymous.localName === prefix : false) {
            result.a(tmp0_anonymous);
          }
        }
         while (inductionVariable < l);
      var tmp0_safe_receiver = firstOrNull(result);
      var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        var tmp1_safe_receiver = _this__u8e3s4.parentNode;
        tmp_2 = tmp1_safe_receiver == null ? null : myLookupNamespaceURI(tmp1_safe_receiver, prefix);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function myLookupPrefix(_this__u8e3s4, namespaceUri) {
    var tmp = _this__u8e3s4.nodeType;
    NodeConsts_getInstance();
    if (!(tmp === 1))
      return null;
    var tmp_0 = isObject(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return myLookupPrefixImpl(tmp_0, namespaceUri, tmp$ret$0);
  }
  function get_isElement_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.nodeType;
    NodeConsts_getInstance();
    return tmp === 1;
  }
  function get_isText(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.nodeType;
    var tmp;
    var tmp_0;
    var tmp_1 = tmp0_subject;
    NodeConsts_getInstance();
    if (tmp_1 === 1) {
      tmp_0 = true;
    } else {
      var tmp_2 = tmp0_subject;
      NodeConsts_getInstance();
      tmp_0 = tmp_2 === 4;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function myLookupPrefixImpl(_this__u8e3s4, namespaceUri, seenPrefixes) {
    var tmp0_safe_receiver = _this__u8e3s4.attributes;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'nl.adaptivity.xmlutil.util.forEachAttr' call
      var l = tmp0_safe_receiver.length;
      var inductionVariable = 0;
      if (inductionVariable < l)
        do {
          var idx = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'nl.adaptivity.xmlutil.util.myLookupPrefixImpl.<anonymous>' call
          var tmp = tmp0_safe_receiver.item(idx);
          var tmp0_anonymous = (!(tmp == null) ? isObject(tmp) : false) ? tmp : THROW_CCE();
          var tmp_0 = tmp0_anonymous.prefix;
          XMLConstants_getInstance();
          if (tmp_0 === 'xmlns')
            if (tmp0_anonymous.value === namespaceUri ? !seenPrefixes.n(tmp0_anonymous.localName) : false) {
              return tmp0_anonymous.localName;
            } else {
              var tmp0_elvis_lhs = tmp0_anonymous.localName;
              seenPrefixes.a(tmp0_elvis_lhs == null ? tmp0_anonymous.name : tmp0_elvis_lhs);
            }
           else {
            var tmp_1;
            // Inline function 'kotlin.text.isNullOrBlank' call
            var tmp0_isNullOrBlank = tmp0_anonymous.prefix;
            // Inline function 'kotlin.contracts.contract' call
            if (tmp0_isNullOrBlank == null ? true : isBlank(tmp0_isNullOrBlank)) {
              var tmp_2 = tmp0_anonymous.localName;
              XMLConstants_getInstance();
              tmp_1 = tmp_2 === 'xmlns';
            } else {
              tmp_1 = false;
            }
            if (tmp_1)
              if (tmp0_anonymous.value === namespaceUri ? !seenPrefixes.n(tmp0_anonymous.localName) : false) {
                return '';
              } else {
                seenPrefixes.a('');
              }
          }
        }
         while (inductionVariable < l);
    }
    var tmp_3 = _this__u8e3s4.parentNode;
    var tmp1_safe_receiver = (!(tmp_3 == null) ? isObject(tmp_3) : false) ? tmp_3 : null;
    return tmp1_safe_receiver == null ? null : myLookupPrefixImpl(tmp1_safe_receiver, namespaceUri, seenPrefixes);
  }
  function asElement(_this__u8e3s4) {
    var tmp;
    if (get_isElement(_this__u8e3s4)) {
      tmp = _this__u8e3s4 instanceof Element ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function QName_init_$Init$(namespaceURI, localPart, $this) {
    XMLConstants_getInstance();
    QName.call($this, namespaceURI, localPart, '');
    return $this;
  }
  function QName_init_$Create$(namespaceURI, localPart) {
    return QName_init_$Init$(namespaceURI, localPart, objectCreate(protoOf(QName)));
  }
  function QName_init_$Init$_0(localPart, $this) {
    XMLConstants_getInstance();
    XMLConstants_getInstance();
    QName.call($this, '', localPart, '');
    return $this;
  }
  function QName_init_$Create$_0(localPart) {
    return QName_init_$Init$_0(localPart, objectCreate(protoOf(QName)));
  }
  function QName(namespaceURI, localPart, prefix) {
    this.ohc_1 = namespaceURI;
    this.phc_1 = localPart;
    this.qhc_1 = prefix;
  }
  protoOf(QName).thc = function () {
    return this.qhc_1;
  };
  protoOf(QName).shc = function () {
    return this.phc_1;
  };
  protoOf(QName).rhc = function () {
    return this.ohc_1;
  };
  protoOf(QName).toString = function () {
    XMLConstants_getInstance();
    if (this.ohc_1 === '')
      return this.phc_1;
    return '{' + this.ohc_1 + '}' + this.phc_1;
  };
  protoOf(QName).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(this.constructor, other.constructor))
      return false;
    if (!(other instanceof QName))
      THROW_CCE();
    if (!(this.ohc_1 === other.ohc_1))
      return false;
    if (!(this.phc_1 === other.phc_1))
      return false;
    return true;
  };
  protoOf(QName).hashCode = function () {
    var result = getStringHashCode(this.ohc_1);
    result = imul(31, result) + getStringHashCode(this.phc_1) | 0;
    return result;
  };
  function siblingsToFragment(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof DomReader ? _this__u8e3s4 : null;
    var d = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gh8_1;
    var tmp2_subject = d == null ? null : d.nodeType;
    var tmp;
    var tmp_0 = tmp2_subject == null ? null : tmp2_subject;
    NodeConsts_getInstance();
    if (tmp_0 === 9) {
      tmp = (!(d == null) ? isObject(d) : false) ? d : THROW_CCE();
    } else {
      if (tmp2_subject == null) {
        var tmp_1 = new Document();
        tmp = isObject(tmp_1) ? tmp_1 : THROW_CCE();
      } else {
        var tmp4_elvis_lhs = d.ownerDocument;
        var tmp_2;
        if (tmp4_elvis_lhs == null) {
          var tmp_3 = new Document();
          tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
        } else {
          tmp_2 = tmp4_elvis_lhs;
        }
        tmp = tmp_2;
      }
    }
    var doc = tmp;
    var frag = doc.createDocumentFragment();
    var wrapperElement = doc.createElementNS('http://wrapperns', 'SDFKLJDSF:afjlfxkls');
    frag.appendChild(wrapperElement);
    if (!_this__u8e3s4.wh8()) {
      if (_this__u8e3s4.e()) {
        _this__u8e3s4.f();
      } else {
        return CompactFragment_init_$Create$('');
      }
    }
    var startLocation = _this__u8e3s4.bh9();
    try {
      // Inline function 'kotlin.collections.mutableMapOf' call
      var missingNamespaces = LinkedHashMap_init_$Create$();
      var initialDepth = _this__u8e3s4.i3v() - (_this__u8e3s4.ah9() === EventType_START_ELEMENT_getInstance() ? 1 : 0) | 0;
      var type = _this__u8e3s4.ah9();
      while ((!(type === EventType_END_DOCUMENT_getInstance()) ? !(type === EventType_END_ELEMENT_getInstance()) : false) ? _this__u8e3s4.i3v() >= initialDepth : false) {
        var tmp5_subject = type;
        switch (tmp5_subject == null ? -1 : tmp5_subject.h7_1) {
          case 1:
            var out = new DomWriter(wrapperElement, true);
            addUndeclaredNamespaces(out, _this__u8e3s4, missingNamespaces);
            writeCurrent(_this__u8e3s4, out);
            writeElementContent(out, missingNamespaces, _this__u8e3s4);
            out.o1y();
            break;
          case 9:
          case 4:
            wrapperElement.appendChild(ensureNotNull(wrapperElement.ownerDocument).createTextNode(_this__u8e3s4.h53()));
            break;
          case 5:
            wrapperElement.appendChild(ensureNotNull(wrapperElement.ownerDocument).createCDATASection(_this__u8e3s4.h53()));
            break;
          case 3:
            wrapperElement.appendChild(ensureNotNull(wrapperElement.ownerDocument).createComment(_this__u8e3s4.h53()));
            break;
          case 8:
            throw XmlException_init_$Create$('Entity references are not expected here');
          case 10:
            throw AssertionError_init_$Create$('Attributes are not expected in the event stream');
          default:
            break;
        }
        type = _this__u8e3s4.e() ? _this__u8e3s4.f() : null;
      }
      if (missingNamespaces.z2('') === '') {
        missingNamespaces.ye('');
      }
      var tmp_4 = asSequence_0(missingNamespaces.q());
      var tmp_5 = filter(tmp_4, siblingsToFragment$lambda);
      var ns = toList_0(map(tmp_5, siblingsToFragment$lambda_0(wrapperElement)));
      var tmp_6 = new XMLSerializer();
      var wrappedString = tmp_6.serializeToString(wrapperElement instanceof Node ? wrapperElement : THROW_CCE());
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = indexOf(wrappedString, _Char___init__impl__6a9atx(62), 'SDFKLJDSF:afjlfxkls'.length) + 1 | 0;
      var tmp1_substring = (wrappedString.length - 'SDFKLJDSF:afjlfxkls'.length | 0) - 3 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var unwrappedString = wrappedString.substring(tmp0_substring, tmp1_substring);
      return CompactFragment_init_$Create$_0(ns, unwrappedString);
    } catch ($p) {
      if ($p instanceof XmlException) {
        var e = $p;
        throw XmlException_init_$Create$_0('Failure to parse children into string at ' + startLocation, e);
      } else {
        if ($p instanceof RuntimeException) {
          var e_0 = $p;
          throw XmlException_init_$Create$_0('Failure to parse children into string at ' + startLocation, e_0);
        } else {
          throw $p;
        }
      }
    }
  }
  function siblingsToFragment$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var prefix = _name_for_destructuring_parameter_0__wldtmu.r();
    // Inline function 'kotlin.collections.component2' call
    var uri = _name_for_destructuring_parameter_0__wldtmu.s();
    return !(prefix === '') ? true : !(uri === '');
  }
  function siblingsToFragment$lambda_0($wrapperElement) {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.r();
      var prefix = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.s();
      var uri = tmp$ret$1;
      XMLConstants_getInstance();
      $wrapperElement.setAttributeNS('http://www.w3.org/2000/xmlns/', prefix === '' ? 'xmlns' : 'xmlns:' + prefix, uri);
      return new NamespaceImpl(prefix, uri);
    };
  }
  function XmlStreaming() {
    XmlStreaming_instance = this;
  }
  protoOf(XmlStreaming).bhi = function (input) {
    var str = toString(charSequenceGet(input, 0) === _Char___init__impl__6a9atx(65279) ? charSequenceSubSequence(input, 1, charSequenceLength(input)) : input);
    var tmp = (new DOMParser()).parseFromString(str, 'text/xml');
    return new DomReader(isObject(tmp) ? tmp : THROW_CCE());
  };
  protoOf(XmlStreaming).chi = function (writer, repairNamespaces, xmlDeclMode) {
    return new WriterXmlWriter(writer, DomWriter_init_$Create$(xmlDeclMode));
  };
  var XmlStreaming_instance;
  function XmlStreaming_getInstance() {
    if (XmlStreaming_instance == null)
      new XmlStreaming();
    return XmlStreaming_instance;
  }
  function WriterXmlWriter(target, delegate) {
    this.dhi_1 = target;
    this.ehi_1 = delegate;
  }
  protoOf(WriterXmlWriter).i3v = function () {
    return this.ehi_1.vh9_1;
  };
  protoOf(WriterXmlWriter).yha = function (_set____db54di) {
    this.ehi_1.yha(_set____db54di);
  };
  protoOf(WriterXmlWriter).zha = function () {
    return this.ehi_1.zha();
  };
  protoOf(WriterXmlWriter).ch9 = function () {
    return this.ehi_1.uh9_1;
  };
  protoOf(WriterXmlWriter).rha = function (namespace, name, prefix, value) {
    this.ehi_1.rha(namespace, name, prefix, value);
  };
  protoOf(WriterXmlWriter).pha = function (text) {
    this.ehi_1.pha(text);
  };
  protoOf(WriterXmlWriter).hha = function (text) {
    this.ehi_1.hha(text);
  };
  protoOf(WriterXmlWriter).kha = function (text) {
    this.ehi_1.kha(text);
  };
  protoOf(WriterXmlWriter).uha = function () {
    this.ehi_1.uha();
  };
  protoOf(WriterXmlWriter).vha = function (namespace, localName, prefix) {
    this.ehi_1.vha(namespace, localName, prefix);
  };
  protoOf(WriterXmlWriter).qha = function (text) {
    this.ehi_1.qha(text);
  };
  protoOf(WriterXmlWriter).wha = function (prefix) {
    return this.ehi_1.wha(prefix);
  };
  protoOf(WriterXmlWriter).xha = function (namespaceUri) {
    return this.ehi_1.xha(namespaceUri);
  };
  protoOf(WriterXmlWriter).zh9 = function (text) {
    this.ehi_1.zh9(text);
  };
  protoOf(WriterXmlWriter).mha = function (namespacePrefix, namespaceUri) {
    this.ehi_1.mha(namespacePrefix, namespaceUri);
  };
  protoOf(WriterXmlWriter).ahb = function (namespace) {
    this.ehi_1.ahb(namespace);
  };
  protoOf(WriterXmlWriter).iha = function (text) {
    this.ehi_1.iha(text);
  };
  protoOf(WriterXmlWriter).jha = function (target, data) {
    this.ehi_1.jha(target, data);
  };
  protoOf(WriterXmlWriter).sha = function (version, encoding, standalone) {
    this.ehi_1.sha(version, encoding, standalone);
  };
  protoOf(WriterXmlWriter).nha = function (namespace, localName, prefix) {
    this.ehi_1.nha(namespace, localName, prefix);
  };
  protoOf(WriterXmlWriter).oha = function (text) {
    this.ehi_1.oha(text);
  };
  protoOf(WriterXmlWriter).o1y = function () {
    try {
      var xmls = new XMLSerializer();
      var tmp = this.ehi_1.lha();
      var domText = xmls.serializeToString(tmp instanceof Node ? tmp : THROW_CCE());
      var xmlDeclMode = this.ehi_1.ph9_1;
      if (!xmlDeclMode.equals(XmlDeclMode_None_getInstance())) {
        var tmp_0;
        if (xmlDeclMode.h7_1 === 3) {
          var tmp1_elvis_lhs = this.ehi_1.xh9_1;
          tmp_0 = tmp1_elvis_lhs == null ? 'UTF-8' : tmp1_elvis_lhs;
        } else {
          var tmp2_safe_receiver = this.ehi_1.xh9_1;
          var tmp_1;
          if (tmp2_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp_1 = tmp2_safe_receiver.toLowerCase();
          }
          var tmp3_safe_receiver = tmp_1;
          tmp_0 = (tmp3_safe_receiver == null ? null : startsWith(tmp3_safe_receiver, 'utf-')) === false ? this.ehi_1.xh9_1 : null;
        }
        var encoding = tmp_0;
        var tmp5_elvis_lhs = this.ehi_1.wh9_1;
        var xmlVersion = tmp5_elvis_lhs == null ? '1.0' : tmp5_elvis_lhs;
        this.dhi_1.fhi('<?xml version="');
        this.dhi_1.fhi(xmlVersion);
        this.dhi_1.fhi('"');
        if (!(encoding == null)) {
          this.dhi_1.fhi(' encoding="');
          this.dhi_1.fhi(encoding);
          this.dhi_1.fhi('"');
        }
        this.dhi_1.fhi('?>');
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.ehi_1.mh9_1.l()) {
          this.dhi_1.fhi('\n');
        }
      }
      this.dhi_1.fhi(domText);
    }finally {
      this.ehi_1.o1y();
    }
  };
  function NamespaceContextImpl() {
  }
  function IOException_init_$Init$(message, $this) {
    Exception_init_$Init$(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Init$_0(message, cause, $this) {
    Exception_init_$Init$_0(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function StringWriter() {
    Writer.call(this);
    this.ghi_1 = StringBuilder_init_$Create$();
  }
  protoOf(StringWriter).fhi = function (text) {
    this.ghi_1.ia(text);
  };
  protoOf(StringWriter).toString = function () {
    return this.ghi_1.toString();
  };
  protoOf(StringWriter).i9 = function (value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.core.impl.multiplatform.StringWriter.append.<anonymous>' call
    this.ghi_1.i9(value);
    return this;
  };
  protoOf(StringWriter).b = function (value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.core.impl.multiplatform.StringWriter.append.<anonymous>' call
    this.ghi_1.b(value);
    return this;
  };
  function assert(value, lazyMessage) {
    if (!value) {
      console.error('Assertion failed: ' + lazyMessage());
    }
  }
  function assert_0(value) {
    if (!value) {
      console.error('Assertion failed');
    }
  }
  function get_name_0(_this__u8e3s4) {
    return get_js(_this__u8e3s4).name;
  }
  function Writer() {
  }
  function Factory() {
  }
  function CompactFragment_init_$Init$(content, $this) {
    CompactFragment_init_$Init$_0(emptyList(), content, $this);
    return $this;
  }
  function CompactFragment_init_$Create$(content) {
    return CompactFragment_init_$Init$(content, objectCreate(protoOf(CompactFragment)));
  }
  function CompactFragment_init_$Init$_0(namespaces, content, $this) {
    CompactFragment.call($this);
    $this.hhi_1 = Companion_getInstance_2().dhd(namespaces);
    $this.ihi_1 = content;
    return $this;
  }
  function CompactFragment_init_$Create$_0(namespaces, content) {
    return CompactFragment_init_$Init$_0(namespaces, content, objectCreate(protoOf(CompactFragment)));
  }
  function CompactFragment_init_$Init$_1(orig, $this) {
    CompactFragment.call($this);
    $this.hhi_1 = Companion_getInstance_2().dhd(orig.yhh());
    $this.ihi_1 = orig.zhh();
    return $this;
  }
  function CompactFragment_init_$Create$_1(orig) {
    return CompactFragment_init_$Init$_1(orig, objectCreate(protoOf(CompactFragment)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.jhi_1 = new Factory();
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function CompactFragment$toString$lambda(it) {
    return '"' + it.vh8() + ' -> ' + it.th8() + '"';
  }
  protoOf(CompactFragment).yhh = function () {
    return this.hhi_1;
  };
  protoOf(CompactFragment).zhh = function () {
    return this.ihi_1;
  };
  protoOf(CompactFragment).ahi = function (out) {
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_8().mhi(this);
    // Inline function 'kotlin.contracts.contract' call
    serialize(out, tmp0_let);
  };
  protoOf(CompactFragment).nhi = function () {
    return Companion_getInstance_8().mhi(this);
  };
  protoOf(CompactFragment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : get_prototype(this) != get_prototype(other))
      return false;
    var that = (other == null ? true : isInterface(other, ICompactFragment)) ? other : THROW_CCE();
    if (!equals(this.hhi_1, ensureNotNull(that).yhh()))
      return false;
    return this.ihi_1 === that.zhh();
  };
  protoOf(CompactFragment).hashCode = function () {
    var result = hashCode(this.hhi_1);
    result = imul(31, result) + getStringHashCode(this.ihi_1) | 0;
    return result;
  };
  protoOf(CompactFragment).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.util.CompactFragment.toString.<anonymous>' call
    tmp0_apply.ia('{namespaces=[');
    joinTo(this.hhi_1, tmp0_apply, VOID, VOID, VOID, VOID, VOID, CompactFragment$toString$lambda);
    tmp0_apply.ia('], content=').ia(this.ihi_1).i9(_Char___init__impl__6a9atx(125));
    return tmp0_apply.toString();
  };
  function CompactFragment() {
    Companion_getInstance_7();
  }
  function get_prototype(_this__u8e3s4) {
    // Inline function 'nl.adaptivity.xmlutil.util.<get-prototype>.prototype' call
    return _this__u8e3s4.prototype;
  }
  function FragmentNamespaceContext_init_$Init$(parent, prefixes, namespaces, $this) {
    SimpleNamespaceContext_init_$Init$_0(prefixes, namespaces, $this);
    FragmentNamespaceContext.call($this);
    $this.phi_1 = parent;
    return $this;
  }
  function FragmentNamespaceContext_init_$Create$(parent, prefixes, namespaces) {
    return FragmentNamespaceContext_init_$Init$(parent, prefixes, namespaces, objectCreate(protoOf(FragmentNamespaceContext)));
  }
  function getLocalNamespaceUri($this, prefix) {
    var inductionVariable = $this.g() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (prefix === $this.zhc(i)) {
          return $this.ahd(i);
        }
      }
       while (0 <= inductionVariable);
    return null;
  }
  function getDelegate($this, text, wrapperNamespaceContext) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'nl.adaptivity.xmlutil.util.Companion.getDelegate.<anonymous>' call
    Companion_getInstance_8();
    Companion_getInstance_8();
    Companion_getInstance_8();
    tmp0_apply.ia('<' + 'SDFKLJDSF' + ':wrapper xmlns:' + 'SDFKLJDSF' + '="' + 'http://wrapperns' + '"');
    var tmp0_iterator = wrapperNamespaceContext.d();
    while (tmp0_iterator.e()) {
      var ns = tmp0_iterator.f();
      var prefix = ns.vh8();
      var uri = ns.th8();
      XMLConstants_getInstance();
      if ('' === prefix) {
        tmp0_apply.ia(' xmlns');
      } else {
        tmp0_apply.ia(' xmlns:').ia(prefix);
      }
      tmp0_apply.ia('="').ia(xmlEncode(uri)).i9(_Char___init__impl__6a9atx(34));
    }
    tmp0_apply.ia(' >');
    var wrapper = tmp0_apply.toString();
    var actualInput = wrapper + text + '<\/SDFKLJDSF:wrapper>';
    var parser = new DOMParser();
    var tmp = parser.parseFromString(actualInput, 'text/xml');
    return new DomReader(isObject(tmp) ? tmp : THROW_CCE());
  }
  protoOf(FragmentNamespaceContext).ph8 = function () {
    return this;
  };
  protoOf(FragmentNamespaceContext).nh8 = function (prefix) {
    var namespaceURI = protoOf(SimpleNamespaceContext).nh8.call(this, prefix);
    var tmp0_safe_receiver = this.phi_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver.nh8(prefix);
    }
    return namespaceURI;
  };
  protoOf(FragmentNamespaceContext).oh8 = function (namespaceURI) {
    var prefix = protoOf(SimpleNamespaceContext).oh8.call(this, namespaceURI);
    if (prefix == null ? !(this.phi_1 == null) : false) {
      return this.phi_1.oh8(namespaceURI);
    }
    return prefix;
  };
  protoOf(FragmentNamespaceContext).sh8 = function (namespaceURI) {
    if (this.phi_1 == null) {
      return protoOf(SimpleNamespaceContext).sh8.call(this, namespaceURI);
    }
    var prefixes = HashSet_init_$Create$();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var it = protoOf(SimpleNamespaceContext).sh8.call(this, namespaceURI);
    while (it.e()) {
      prefixes.a(it.f());
    }
    var it_0 = this.phi_1.sh8(namespaceURI);
    while (it_0.e()) {
      var prefix = it_0.f();
      var localNamespaceUri = getLocalNamespaceUri(this, prefix);
      if (localNamespaceUri == null) {
        prefixes.a(prefix);
      }
    }
    return prefixes.d();
  };
  function FragmentNamespaceContext() {
  }
  function extendNamespace($this) {
    var namespaceDecls = $this.ht().dh9();
    var nscount = namespaceDecls.g();
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(nscount), null);
    while (tmp < nscount) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = namespaceDecls.m(tmp_1).vh8();
      tmp = tmp + 1 | 0;
    }
    var prefixes = tmp_0;
    var tmp_2 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = fillArrayVal(Array(nscount), null);
    while (tmp_2 < nscount) {
      var tmp_4 = tmp_2;
      tmp_3[tmp_4] = namespaceDecls.m(tmp_4).th8();
      tmp_2 = tmp_2 + 1 | 0;
    }
    var namespaces = tmp_3;
    $this.rhi_1 = FragmentNamespaceContext_init_$Create$($this.rhi_1, prefixes, namespaces);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.khi_1 = 'SDFKLJDSF';
    this.lhi_1 = 'http://wrapperns';
  }
  protoOf(Companion_7).mhi = function (fragment) {
    return new XMLFragmentStreamReader(fragment.zhh(), fragment.yhh());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function XMLFragmentStreamReader(text, wrapperNamespaceContext) {
    Companion_getInstance_8();
    XmlDelegatingReader.call(this, getDelegate(Companion_getInstance_8(), text, wrapperNamespaceContext));
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp_0 = [];
    var tmp$ret$1;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$1 = [];
    tmp.rhi_1 = FragmentNamespaceContext_init_$Create$(null, tmp_0, tmp$ret$1);
    if (this.ht().ah9() === EventType_START_ELEMENT_getInstance()) {
      extendNamespace(this);
    }
  }
  protoOf(XMLFragmentStreamReader).f = function () {
    var result = this.ht().f();
    switch (result.h7_1) {
      case 7:
        return result;
      case 0:
      case 11:
      case 6:
        return this.f();
      case 1:
        Companion_getInstance_8();
        if ('http://wrapperns' === this.ht().th8())
          return this.f();
        extendNamespace(this);
        break;
      case 2:
        Companion_getInstance_8();
        if ('http://wrapperns' === this.ht().th8()) {
          return this.ht().f();
        }

        var tmp = this;
        var tmp1_elvis_lhs = this.rhi_1.phi_1;
        tmp.rhi_1 = tmp1_elvis_lhs == null ? this.rhi_1 : tmp1_elvis_lhs;
        break;
      default:
        break;
    }
    return result;
  };
  protoOf(XMLFragmentStreamReader).ch9 = function () {
    return this.rhi_1;
  };
  function createDocument(rootElementName) {
    var tmp = document.implementation;
    var tmp0_elvis_lhs = rootElementName.rhc();
    var tmp_0 = tmp.createDocument(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, toCName(rootElementName));
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  }
  //region block: post-declaration
  protoOf(DomReader$namespaceContext$1).rh8 = plus_0;
  protoOf(DomReader$namespaceContext$1).sh8 = getPrefixes;
  protoOf(DomReader).d66 = get_name;
  protoOf(DomReader).lh9 = require_0;
  protoOf(DomWriter$namespaceContext$1).sh8 = getPrefixes;
  protoOf(PlatformXmlWriterBase).ahb = namespaceAttr;
  protoOf(PlatformXmlWriterBase).jha = processingInstruction;
  protoOf(PlatformXmlWriterBase).tha = startDocument$default;
  protoOf(DomWriter).tha = startDocument$default;
  protoOf(DomWriter).ahb = namespaceAttr;
  protoOf(SimpleNamespaceContext).sh8 = getPrefixes;
  protoOf(XmlBufferedReaderBase).d66 = get_name;
  protoOf(XmlBufferedReaderBase).lh9 = require_0;
  protoOf(XmlBufferedReader).khe = getAttributeValue;
  protoOf(XmlBufferedReader).d66 = get_name;
  protoOf(XmlBufferedReader).lh9 = require_0;
  protoOf(XmlBufferedReader).lhe = require_1;
  protoOf(XmlBufferedReader).mhe = getAttributeName;
  protoOf(XmlBufferedReader).nhe = isWhitespace;
  protoOf(KtXmlWriter).tha = startDocument$default;
  protoOf(KtXmlWriter).ahb = namespaceAttr;
  protoOf(NamespaceHolder$namespaceContext$1).rh8 = plus_0;
  protoOf(NamespaceHolder$namespaceContext$1).sh8 = getPrefixes;
  protoOf(WriterXmlWriter).tha = startDocument$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = XmlVersion_XML11_getInstance;
  _.$_$.b = EventType_CDSECT_getInstance;
  _.$_$.c = EventType_END_DOCUMENT_getInstance;
  _.$_$.d = EventType_END_ELEMENT_getInstance;
  _.$_$.e = EventType_IGNORABLE_WHITESPACE_getInstance;
  _.$_$.f = EventType_START_ELEMENT_getInstance;
  _.$_$.g = EventType_TEXT_getInstance;
  _.$_$.h = XmlDeclMode_None_getInstance;
  _.$_$.i = startDocument$default;
  _.$_$.j = CompactFragment_init_$Create$_0;
  _.$_$.k = CompactFragment_init_$Create$_1;
  _.$_$.l = CompactFragment_init_$Create$;
  _.$_$.m = QName_init_$Create$_0;
  _.$_$.n = QName_init_$Create$;
  _.$_$.o = XmlException_init_$Create$;
  _.$_$.p = NodeConsts_getInstance;
  _.$_$.q = Companion_getInstance_1;
  _.$_$.r = QNameSerializer_getInstance;
  _.$_$.s = XMLConstants_getInstance;
  _.$_$.t = XmlStreaming_getInstance;
  _.$_$.u = asElement;
  _.$_$.v = StringWriter;
  _.$_$.w = assert_0;
  _.$_$.x = assert;
  _.$_$.y = get_name_0;
  _.$_$.z = iterator;
  _.$_$.a1 = iterator_0;
  _.$_$.b1 = createDocument;
  _.$_$.c1 = CompactFragment;
  _.$_$.d1 = ICompactFragment;
  _.$_$.e1 = DomWriter;
  _.$_$.f1 = getPrefixes;
  _.$_$.g1 = NamespaceContextImpl;
  _.$_$.h1 = QName;
  _.$_$.i1 = XmlBufferedReader;
  _.$_$.j1 = EndElementEvent;
  _.$_$.k1 = NamespaceImpl;
  _.$_$.l1 = namespaceAttr;
  _.$_$.m1 = processingInstruction;
  _.$_$.n1 = XmlWriter;
  _.$_$.o1 = allConsecutiveTextContent;
  _.$_$.p1 = allText;
  _.$_$.q1 = elementContentToFragment;
  _.$_$.r1 = elementToFragment;
  _.$_$.s1 = endTag;
  _.$_$.t1 = isEquivalent;
  _.$_$.u1 = readSimpleElement;
  _.$_$.v1 = siblingsToFragment;
  _.$_$.w1 = skipPreamble;
  _.$_$.x1 = smartStartTag_0;
  _.$_$.y1 = smartStartTag;
  _.$_$.z1 = toCName;
  _.$_$.a2 = toNamespace;
  _.$_$.b2 = toQname;
  _.$_$.c2 = writeAttribute;
  _.$_$.d2 = writeElement;
  //endregion
  return _;
}));

//# sourceMappingURL=xmlutil-core-js-ir.js.map
