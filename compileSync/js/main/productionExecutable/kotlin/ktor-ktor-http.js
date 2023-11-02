(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-http'.");
    }
    root['ktor-ktor-http'] = factory(typeof this['ktor-ktor-http'] === 'undefined' ? {} : this['ktor-ktor-http'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io'], this['ktor-ktor-utils']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.il;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var encode = kotlin_io_ktor_ktor_io.$_$.l;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.p;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.n;
  var charArray = kotlin_kotlin.$_$.gc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var concatToString = kotlin_kotlin.$_$.lg;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var toString = kotlin_kotlin.$_$.ce;
  var Char = kotlin_kotlin.$_$.xi;
  var isSurrogate = kotlin_kotlin.$_$.dh;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.c3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jc;
  var toByte = kotlin_kotlin.$_$.zd;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.u;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.a3;
  var numberToChar = kotlin_kotlin.$_$.sd;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.d3;
  var plus = kotlin_kotlin.$_$.u9;
  var plus_0 = kotlin_kotlin.$_$.v9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var toSet = kotlin_kotlin.$_$.ab;
  var setOf = kotlin_kotlin.$_$.fa;
  var plus_1 = kotlin_kotlin.$_$.s9;
  var listOf = kotlin_kotlin.$_$.l9;
  var emptyList = kotlin_kotlin.$_$.z7;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var equals = kotlin_kotlin.$_$.tg;
  var Collection = kotlin_kotlin.$_$.b6;
  var isInterface = kotlin_kotlin.$_$.id;
  var isBlank = kotlin_kotlin.$_$.yg;
  var last = kotlin_kotlin.$_$.g9;
  var indexOf = kotlin_kotlin.$_$.xg;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trim = kotlin_kotlin.$_$.si;
  var contains = kotlin_kotlin.$_$.ng;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var plus_2 = kotlin_kotlin.$_$.w9;
  var equals_0 = kotlin_kotlin.$_$.oc;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var IllegalArgumentException = kotlin_kotlin.$_$.gj;
  var get_name = kotlin_io_ktor_ktor_io.$_$.m;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var last_0 = kotlin_kotlin.$_$.ih;
  var first = kotlin_kotlin.$_$.ug;
  var get_lastIndex_0 = kotlin_kotlin.$_$.fh;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.q;
  var emptySet = kotlin_kotlin.$_$.b8;
  var get = kotlin_io_ktor_ktor_utils.$_$.p;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.o;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var emptyMap = kotlin_kotlin.$_$.a8;
  var toDoubleOrNull = kotlin_kotlin.$_$.ai;
  var rangeTo = kotlin_kotlin.$_$.gf;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.qk;
  var to = kotlin_kotlin.$_$.el;
  var sortedWith = kotlin_kotlin.$_$.la;
  var Comparator = kotlin_kotlin.$_$.aj;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var compareValues = kotlin_kotlin.$_$.db;
  var asList = kotlin_kotlin.$_$.w6;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.y2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var toLong = kotlin_kotlin.$_$.fi;
  var mapCapacity = kotlin_kotlin.$_$.m9;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Comparable = kotlin_kotlin.$_$.zi;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var isWhitespace = kotlin_kotlin.$_$.eh;
  var startsWith = kotlin_kotlin.$_$.sh;
  var charArrayOf = kotlin_kotlin.$_$.fc;
  var split = kotlin_kotlin.$_$.ph;
  var toMutableList = kotlin_kotlin.$_$.xa;
  var first_0 = kotlin_kotlin.$_$.i8;
  var joinToString = kotlin_kotlin.$_$.w8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.a1;
  var indexOfAny = kotlin_kotlin.$_$.vg;
  var dropLast = kotlin_kotlin.$_$.y7;
  var IllegalStateException = kotlin_kotlin.$_$.hj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d2;
  var indexOf_0 = kotlin_kotlin.$_$.wg;
  var toInt = kotlin_kotlin.$_$.di;
  var listOf_0 = kotlin_kotlin.$_$.k9;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.b1;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.w;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith_0 = kotlin_kotlin.$_$.rh;
  var addAll = kotlin_kotlin.$_$.t6;
  var joinTo = kotlin_kotlin.$_$.y8;
  var toString_0 = kotlin_kotlin.$_$.dl;
  var lazy_0 = kotlin_kotlin.$_$.rk;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var toLong_0 = kotlin_kotlin.$_$.ae;
  var encodeToByteArray = kotlin_kotlin.$_$.qg;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.k;
  var take = kotlin_kotlin.$_$.vh;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.c;
  var get_platform = kotlin_io_ktor_ktor_utils.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(URLDecodeException, 'URLDecodeException', classMeta, Exception);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Application, 'Application', objectMeta);
  setMetadataFor(Text, 'Text', objectMeta);
  setMetadataFor(HeaderValueWithParameters, 'HeaderValueWithParameters', classMeta);
  setMetadataFor(ContentType, 'ContentType', classMeta, HeaderValueWithParameters);
  setMetadataFor(BadContentTypeFormatException, 'BadContentTypeFormatException', classMeta, Exception);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(HeadersBuilder, 'HeadersBuilder', classMeta, StringValuesBuilderImpl);
  setMetadataFor(EmptyHeaders, 'EmptyHeaders', objectMeta, VOID, [StringValues]);
  setMetadataFor(HeadersImpl, 'HeadersImpl', classMeta, StringValuesImpl, [StringValues, StringValuesImpl]);
  setMetadataFor(HeaderValueParam, 'HeaderValueParam', classMeta);
  setMetadataFor(HeaderValue, 'HeaderValue', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(HttpHeaders, 'HttpHeaders', objectMeta);
  setMetadataFor(IllegalHeaderNameException, 'IllegalHeaderNameException', classMeta, IllegalArgumentException);
  setMetadataFor(IllegalHeaderValueException, 'IllegalHeaderValueException', classMeta, IllegalArgumentException);
  setMetadataFor(UnsafeHeaderException, 'UnsafeHeaderException', classMeta, IllegalArgumentException);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(HttpProtocolVersion, 'HttpProtocolVersion', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(HttpStatusCode, 'HttpStatusCode', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Parameters, 'Parameters', interfaceMeta, VOID, [StringValues]);
  setMetadataFor(EmptyParameters, 'EmptyParameters', objectMeta, VOID, [Parameters]);
  setMetadataFor(ParametersBuilderImpl, 'ParametersBuilderImpl', classMeta, StringValuesBuilderImpl);
  setMetadataFor(ParametersImpl, 'ParametersImpl', classMeta, StringValuesImpl, [Parameters, StringValuesImpl]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(URLBuilder, 'URLBuilder', classMeta);
  setMetadataFor(URLParserException, 'URLParserException', classMeta, IllegalStateException);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(URLProtocol, 'URLProtocol', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Url_1, 'Url', classMeta);
  setMetadataFor(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder', classMeta);
  setMetadataFor(OutgoingContent, 'OutgoingContent', classMeta);
  setMetadataFor(ByteArrayContent_0, 'ByteArrayContent', classMeta, OutgoingContent);
  setMetadataFor(ByteArrayContent, 'ByteArrayContent', classMeta, ByteArrayContent_0);
  setMetadataFor(NoContent, 'NoContent', classMeta, OutgoingContent);
  setMetadataFor(ReadChannelContent, 'ReadChannelContent', classMeta, OutgoingContent);
  setMetadataFor(WriteChannelContent, 'WriteChannelContent', classMeta, OutgoingContent, VOID, VOID, VOID, [1]);
  setMetadataFor(ProtocolUpgrade, 'ProtocolUpgrade', classMeta, OutgoingContent, VOID, VOID, VOID, [4]);
  setMetadataFor(NullBody, 'NullBody', objectMeta);
  setMetadataFor(TextContent, 'TextContent', classMeta, ByteArrayContent_0);
  //endregion
  function get_URL_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_SPECIAL_SYMBOLS() {
    _init_properties_Codecs_kt__fudxxf();
    return SPECIAL_SYMBOLS;
  }
  var SPECIAL_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLParameter.<anonymous>' call
    var content = encode(Charsets_getInstance().gek_1.kek(), _this__u8e3s4);
    forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
    return tmp0_apply.toString();
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var content = encode(charset.kek(), _this__u8e3s4);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
    return tmp0_apply.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    _init_properties_Codecs_kt__fudxxf();
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_1: do {
          // Inline function 'io.ktor.http.forEach.<anonymous>' call
          var tmp0_anonymous = current;
          $l$loop: while (true) {
            // Inline function 'io.ktor.utils.io.core.canRead' call
            if (!(tmp0_anonymous.be9_1 > tmp0_anonymous.ae9_1)) {
              break $l$loop;
            }
            block(tmp0_anonymous.keh());
          }
          if (!true) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
  }
  function percentEncode(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (ch === _Char___init__impl__6a9atx(37) ? true : plusIsSpace ? ch === _Char___init__impl__6a9atx(43) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.substring(start, end);
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash) {
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLPath.<anonymous>' call
    var charset = Charsets_getInstance().gek_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if (((!encodeSlash ? current === _Char___init__impl__6a9atx(47) : false) ? true : get_URL_ALPHABET_CHARS().n(new Char(current))) ? true : get_VALID_PATH_PART().n(new Char(current))) {
        tmp0_apply.i9(current);
        index = index + 1 | 0;
        continue $l$loop_0;
      }
      if (((current === _Char___init__impl__6a9atx(37) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().n(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().n(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
        tmp0_apply.i9(current);
        tmp0_apply.i9(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        tmp0_apply.i9(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.kek(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
      index = index + symbolSize | 0;
    }
    return tmp0_apply.toString();
  }
  function hexDigitToChar(digit) {
    _init_properties_Codecs_kt__fudxxf();
    return (0 <= digit ? digit <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.wi(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? c === _Char___init__impl__6a9atx(43) : false) {
        sb.i9(_Char___init__impl__6a9atx(32));
        index = index + 1 | 0;
      } else if (c === _Char___init__impl__6a9atx(37)) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(37) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index;
            var tmp1_substring = charSequenceLength(_this__u8e3s4);
            tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.ia(String_0(bytes, 0, count, charset));
      } else {
        sb.i9(c);
        index = index + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    _init_properties_Codecs_kt__fudxxf();
    return (_Char___init__impl__6a9atx(48) <= c2 ? c2 <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= c2 ? c2 <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= c2 ? c2 <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().n(it) ? true : get_SPECIAL_SYMBOLS().n(it)) {
        $tmp0_apply.i9(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          tmp$ret$0 = 32;
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.i9(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.ia(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 32;
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.i9(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.ia('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().n(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().n(it) : false) {
          $tmp0_apply.i9(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.ia(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.ia(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function _init_properties_Codecs_kt__fudxxf() {
    if (!properties_initialized_Codecs_kt_hkj9s1) {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f().n8_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(item);
        tmp$ret$1 = toByte(tmp$ret$0);
        tmp0_mapTo.a(tmp$ret$1);
      }
      URL_ALPHABET = toSet(tmp0_mapTo);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_0 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
      var tmp0_iterator_0 = tmp0_map_0.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f().n8_1;
        var tmp$ret$1_0;
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        var tmp$ret$0_0;
        // Inline function 'kotlin.code' call
        tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
        tmp$ret$1_0 = toByte(tmp$ret$0_0);
        tmp0_mapTo_0.a(tmp$ret$1_0);
      }
      URL_PROTOCOL_PART = tmp0_mapTo_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
      var tmp0_iterator_1 = tmp0_map_1.d();
      while (tmp0_iterator_1.e()) {
        var item_1 = tmp0_iterator_1.f().n8_1;
        var tmp$ret$1_1;
        // Inline function 'io.ktor.http.SPECIAL_SYMBOLS.<anonymous>' call
        var tmp$ret$0_1;
        // Inline function 'kotlin.code' call
        tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
        tmp$ret$1_1 = toByte(tmp$ret$0_1);
        tmp0_mapTo_1.a(tmp$ret$1_1);
      }
      SPECIAL_SYMBOLS = tmp0_mapTo_1;
    }
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    parameters = parameters === VOID ? emptyList() : parameters;
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, objectCreate(protoOf(ContentType)));
  }
  function hasParameter($this, name, value) {
    var tmp;
    switch ($this.rev_1.g()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        var tmp0_let = $this.rev_1.m(0);
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call

        tmp = equals(tmp0_let.sev_1, name, true) ? equals(tmp0_let.tev_1, value, true) : false;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp1_any = $this.rev_1;
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.l();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            if (equals(element.sev_1, name, true) ? equals(element.tev_1, value, true) : false) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.vev_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion).wev = function (value) {
    if (isBlank(value))
      return this.vev_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    Companion_getInstance_1();
    var headerValue = last(parseHeaderValue(value));
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var tmp1_anonymous = headerValue.xev_1;
    var tmp2_anonymous = headerValue.yev_1;
    var slash = indexOf(tmp1_anonymous, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString(trim(isCharSequence(tmp1_anonymous) ? tmp1_anonymous : THROW_CCE())) === '*')
        return Companion_getInstance_0().vev_1;
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_trim = tmp1_anonymous.substring(0, slash);
    var type = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(type) === 0) {
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = slash + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_trim = tmp1_anonymous.substring(tmp1_substring);
    var subtype = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
    if (contains(type, _Char___init__impl__6a9atx(32)) ? true : contains(subtype, _Char___init__impl__6a9atx(32))) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(subtype) === 0) {
      tmp = true;
    } else {
      tmp = contains(subtype, _Char___init__impl__6a9atx(47));
    }
    if (tmp) {
      throw new BadContentTypeFormatException(value);
    }
    return ContentType_init_$Create$(type, subtype, tmp2_anonymous);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    this.aew_1 = ContentType_init_$Create$('application', '*');
    this.bew_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.cew_1 = ContentType_init_$Create$('application', 'cbor');
    this.dew_1 = ContentType_init_$Create$('application', 'json');
    this.eew_1 = ContentType_init_$Create$('application', 'hal+json');
    this.few_1 = ContentType_init_$Create$('application', 'javascript');
    this.gew_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.hew_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.iew_1 = ContentType_init_$Create$('application', 'xml');
    this.jew_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.kew_1 = ContentType_init_$Create$('application', 'zip');
    this.lew_1 = ContentType_init_$Create$('application', 'gzip');
    this.mew_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.new_1 = ContentType_init_$Create$('application', 'pdf');
    this.oew_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.pew_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.qew_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.rew_1 = ContentType_init_$Create$('application', 'protobuf');
    this.sew_1 = ContentType_init_$Create$('application', 'wasm');
    this.tew_1 = ContentType_init_$Create$('application', 'problem+json');
    this.uew_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    this.vew_1 = ContentType_init_$Create$('text', '*');
    this.wew_1 = ContentType_init_$Create$('text', 'plain');
    this.xew_1 = ContentType_init_$Create$('text', 'css');
    this.yew_1 = ContentType_init_$Create$('text', 'csv');
    this.zew_1 = ContentType_init_$Create$('text', 'html');
    this.aex_1 = ContentType_init_$Create$('text', 'javascript');
    this.bex_1 = ContentType_init_$Create$('text', 'vcard');
    this.cex_1 = ContentType_init_$Create$('text', 'xml');
    this.dex_1 = ContentType_init_$Create$('text', 'event-stream');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.gex_1 = contentType;
    this.hex_1 = contentSubtype;
  }
  protoOf(ContentType).iex = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.gex_1, this.hex_1, this.qev_1, plus_2(this.rev_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).jex = function () {
    return this.rev_1.l() ? this : ContentType_init_$Create$(this.gex_1, this.hex_1);
  };
  protoOf(ContentType).kex = function (pattern) {
    if (!(pattern.gex_1 === '*') ? !equals(pattern.gex_1, this.gex_1, true) : false) {
      return false;
    }
    if (!(pattern.hex_1 === '*') ? !equals(pattern.hex_1, this.hex_1, true) : false) {
      return false;
    }
    var tmp0_iterator = pattern.rev_1.d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      var patternName = tmp1_loop_parameter.y4();
      var patternValue = tmp1_loop_parameter.z4();
      var tmp;
      if (patternName === '*') {
        var tmp_0;
        if (patternValue === '*') {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = this.rev_1;
            var tmp_1;
            if (isInterface(tmp0_any, Collection)) {
              tmp_1 = tmp0_any.l();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator_0 = tmp0_any.d();
            while (tmp0_iterator_0.e()) {
              var element = tmp0_iterator_0.f();
              // Inline function 'io.ktor.http.ContentType.match.<anonymous>' call
              if (equals(element.tev_1, patternValue, true)) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.lex(patternName);
        tmp = patternValue === '*' ? !(value == null) : equals(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  protoOf(ContentType).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals(this.gex_1, other.gex_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.hex_1, other.hex_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(this.rev_1, other.rev_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = this.gex_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = this.hex_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.rev_1)) | 0;
    return result;
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.lex('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.charset.<anonymous>' call
      var tmp_0;
      try {
        tmp_0 = Companion_getInstance().hen(tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          var exception = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.iex('charset', get_name(charset));
  }
  function withCharsetIfNeeded(_this__u8e3s4, charset) {
    var tmp;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    if (!(_this__u8e3s4.gex_1.toLowerCase() === 'text')) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.iex('charset', get_name(charset));
    }
    return tmp;
  }
  function get_HeaderFieldValueSeparators() {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    parameters = parameters === VOID ? emptyList() : parameters;
    this.qev_1 = content;
    this.rev_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).lex = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.rev_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.rev_1.m(index);
        if (equals(parameter.sev_1, name, true)) {
          return parameter.tev_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.rev_1.l()) {
      tmp = this.qev_1;
    } else {
      var tmp_0 = this.qev_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator = this.rev_1.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp_1 = sum;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        sum = tmp_1 + ((element.sev_1.length + element.tev_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      tmp1_apply.ia(this.qev_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.rev_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.rev_1.m(index);
          tmp1_apply.ia('; ');
          tmp1_apply.ia(element_0.sev_1);
          tmp1_apply.ia('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var tmp0_escapeIfNeededTo = element_0.tev_1;
          if (needQuotes$accessor$vynnj(tmp0_escapeIfNeededTo)) {
            tmp1_apply.ia(quote(tmp0_escapeIfNeededTo));
          } else {
            tmp1_apply.ia(tmp0_escapeIfNeededTo);
          }
        }
         while (!(index === last));
      tmp = tmp1_apply.toString();
    }
    return tmp;
  };
  function needQuotes(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().n(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.quote.<anonymous>' call
    quoteTo(_this__u8e3s4, tmp0_apply);
    return tmp0_apply.toString();
  }
  function isQuoted(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!(first(_this__u8e3s4) === _Char___init__impl__6a9atx(34)) ? true : !(last_0(_this__u8e3s4) === _Char___init__impl__6a9atx(34))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var index = indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(34), startIndex);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (charSequenceGet(_this__u8e3s4, slashIndex) === _Char___init__impl__6a9atx(92)) {
        slashesCount = slashesCount + 1 | 0;
        slashIndex = slashIndex - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    out.ia('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (ch === _Char___init__impl__6a9atx(92)) {
          out.ia('\\\\');
        } else if (ch === _Char___init__impl__6a9atx(10)) {
          out.ia('\\n');
        } else if (ch === _Char___init__impl__6a9atx(13)) {
          out.ia('\\r');
        } else if (ch === _Char___init__impl__6a9atx(9)) {
          out.ia('\\t');
        } else if (ch === _Char___init__impl__6a9atx(34)) {
          out.ia('\\"');
        } else {
          out.i9(ch);
        }
      }
       while (inductionVariable < last);
    out.ia('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function _init_properties_HeaderValueWithParameters_kt__z6luvy() {
    if (!properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.mex_1 = EmptyHeaders_getInstance();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function HeadersBuilder(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(HeadersBuilder).df = function () {
    return new HeadersImpl(this.des_1);
  };
  protoOf(HeadersBuilder).ees = function (name) {
    protoOf(StringValuesBuilderImpl).ees.call(this, name);
    HttpHeaders_getInstance().lf1(name);
  };
  protoOf(HeadersBuilder).ies = function (value) {
    protoOf(StringValuesBuilderImpl).ies.call(this, value);
    HttpHeaders_getInstance().mf1(value);
  };
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  protoOf(EmptyHeaders).xer = function () {
    return true;
  };
  protoOf(EmptyHeaders).yer = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).zer = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).aes = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + this.aes();
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(HeadersImpl).toString = function () {
    return 'Headers ' + this.aes();
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.sev_1 = name;
    this.tev_1 = value;
    this.uev_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals(other.sev_1, this.sev_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.tev_1, this.tev_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = this.sev_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = this.tev_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).y4 = function () {
    return this.sev_1;
  };
  protoOf(HeaderValueParam).z4 = function () {
    return this.tev_1;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.sev_1 + ', value=' + this.tev_1 + ', escapeValue=' + this.uev_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.xev_1 = value;
    this.yev_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.yev_1.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        if (element.sev_1 === 'q') {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tev_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
      if (rangeTo(0.0, 1.0).e1(tmp2_safe_receiver)) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.zev_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).y4 = function () {
    return this.xev_1;
  };
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.xev_1 + ', params=' + this.yev_1 + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.xev_1);
    result = imul(result, 31) + hashCode(this.yev_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.xev_1 === tmp0_other_with_cast.xev_1))
      return false;
    if (!equals_0(this.yev_1, tmp0_other_with_cast.yev_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(44)) {
        var tmp_0 = items.s();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.a(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59)) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.s();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.a(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.xa() ? _this__u8e3s4.s() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_trim = _this__u8e3s4.substring(start, end);
    return toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.y4();
        var paramValue = tmp1_container.z4();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59) ? true : tmp0_subject === _Char___init__impl__6a9atx(44)) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        position = position + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (charSequenceGet(value, start) === _Char___init__impl__6a9atx(34)) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(59) ? true : tmp0_subject === _Char___init__impl__6a9atx(44))
        return to(position, subtrim(value, start, position));
      else {
        position = position + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (currentChar === _Char___init__impl__6a9atx(34) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (currentChar === _Char___init__impl__6a9atx(92) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.i9(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.i9(currentChar);
      position = position + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    // Inline function 'kotlin.text.plus' call
    tmp$ret$0 = '"' + builder.toString();
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? charSequenceGet(_this__u8e3s4, position) === _Char___init__impl__6a9atx(32) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : charSequenceGet(_this__u8e3s4, position) === _Char___init__impl__6a9atx(59);
  }
  function parseAndSortHeader(header) {
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = parseHeaderValue(header);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = parseAndSortHeader$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    return sortedWith(tmp0_sortedByDescending, tmp$ret$0);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.nf1_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.nf1_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0) {
      return Unit_getInstance();
    }
    $parameters.s().a(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseHeaderValueItem$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseAndSortHeader$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    var tmp = b.zev_1;
    var tmp$ret$1;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$1 = a.zev_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.pex_1 = 'Accept';
    this.qex_1 = 'Accept-Charset';
    this.rex_1 = 'Accept-Encoding';
    this.sex_1 = 'Accept-Language';
    this.tex_1 = 'Accept-Ranges';
    this.uex_1 = 'Age';
    this.vex_1 = 'Allow';
    this.wex_1 = 'ALPN';
    this.xex_1 = 'Authentication-Info';
    this.yex_1 = 'Authorization';
    this.zex_1 = 'Cache-Control';
    this.aey_1 = 'Connection';
    this.bey_1 = 'Content-Disposition';
    this.cey_1 = 'Content-Encoding';
    this.dey_1 = 'Content-Language';
    this.eey_1 = 'Content-Length';
    this.fey_1 = 'Content-Location';
    this.gey_1 = 'Content-Range';
    this.hey_1 = 'Content-Type';
    this.iey_1 = 'Cookie';
    this.jey_1 = 'DASL';
    this.key_1 = 'Date';
    this.ley_1 = 'DAV';
    this.mey_1 = 'Depth';
    this.ney_1 = 'Destination';
    this.oey_1 = 'ETag';
    this.pey_1 = 'Expect';
    this.qey_1 = 'Expires';
    this.rey_1 = 'From';
    this.sey_1 = 'Forwarded';
    this.tey_1 = 'Host';
    this.uey_1 = 'HTTP2-Settings';
    this.vey_1 = 'If';
    this.wey_1 = 'If-Match';
    this.xey_1 = 'If-Modified-Since';
    this.yey_1 = 'If-None-Match';
    this.zey_1 = 'If-Range';
    this.aez_1 = 'If-Schedule-Tag-Match';
    this.bez_1 = 'If-Unmodified-Since';
    this.cez_1 = 'Last-Modified';
    this.dez_1 = 'Location';
    this.eez_1 = 'Lock-Token';
    this.fez_1 = 'Link';
    this.gez_1 = 'Max-Forwards';
    this.hez_1 = 'MIME-Version';
    this.iez_1 = 'Ordering-Type';
    this.jez_1 = 'Origin';
    this.kez_1 = 'Overwrite';
    this.lez_1 = 'Position';
    this.mez_1 = 'Pragma';
    this.nez_1 = 'Prefer';
    this.oez_1 = 'Preference-Applied';
    this.pez_1 = 'Proxy-Authenticate';
    this.qez_1 = 'Proxy-Authentication-Info';
    this.rez_1 = 'Proxy-Authorization';
    this.sez_1 = 'Public-Key-Pins';
    this.tez_1 = 'Public-Key-Pins-Report-Only';
    this.uez_1 = 'Range';
    this.vez_1 = 'Referer';
    this.wez_1 = 'Retry-After';
    this.xez_1 = 'Schedule-Reply';
    this.yez_1 = 'Schedule-Tag';
    this.zez_1 = 'Sec-WebSocket-Accept';
    this.af0_1 = 'Sec-WebSocket-Extensions';
    this.bf0_1 = 'Sec-WebSocket-Key';
    this.cf0_1 = 'Sec-WebSocket-Protocol';
    this.df0_1 = 'Sec-WebSocket-Version';
    this.ef0_1 = 'Server';
    this.ff0_1 = 'Set-Cookie';
    this.gf0_1 = 'SLUG';
    this.hf0_1 = 'Strict-Transport-Security';
    this.if0_1 = 'TE';
    this.jf0_1 = 'Timeout';
    this.kf0_1 = 'Trailer';
    this.lf0_1 = 'Transfer-Encoding';
    this.mf0_1 = 'Upgrade';
    this.nf0_1 = 'User-Agent';
    this.of0_1 = 'Vary';
    this.pf0_1 = 'Via';
    this.qf0_1 = 'Warning';
    this.rf0_1 = 'WWW-Authenticate';
    this.sf0_1 = 'Access-Control-Allow-Origin';
    this.tf0_1 = 'Access-Control-Allow-Methods';
    this.uf0_1 = 'Access-Control-Allow-Credentials';
    this.vf0_1 = 'Access-Control-Allow-Headers';
    this.wf0_1 = 'Access-Control-Request-Method';
    this.xf0_1 = 'Access-Control-Request-Headers';
    this.yf0_1 = 'Access-Control-Expose-Headers';
    this.zf0_1 = 'Access-Control-Max-Age';
    this.af1_1 = 'X-Http-Method-Override';
    this.bf1_1 = 'X-Forwarded-Host';
    this.cf1_1 = 'X-Forwarded-Server';
    this.df1_1 = 'X-Forwarded-Proto';
    this.ef1_1 = 'X-Forwarded-For';
    this.ff1_1 = 'X-Forwarded-Port';
    this.gf1_1 = 'X-Request-ID';
    this.hf1_1 = 'X-Correlation-ID';
    this.if1_1 = 'X-Total-Count';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jf1_1 = [this.lf0_1, this.mf0_1];
    this.kf1_1 = asList(this.jf1_1);
  }
  protoOf(HttpHeaders).lf1 = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    var last = name.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(name, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderName.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, tmp1);
      }
    }
  };
  protoOf(HttpHeaders).mf1 = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    var last = value.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderValue.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0 ? !(item === _Char___init__impl__6a9atx(9)) : false) {
        throw new IllegalHeaderValueException(value, tmp1);
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains('"(),/:;<=>?@[\\]{}', ch);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0_get_code_gknlva = charSequenceGet(headerName, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderNameException);
    this.of1_1 = headerName;
    this.pf1_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0_get_code_gknlva = charSequenceGet(headerValue, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.qf1_1 = headerValue;
    this.rf1_1 = position;
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.sf1().weq(HttpHeaders_getInstance().hey_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance_0().wev(tmp0_safe_receiver);
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.sf1().weq(HttpHeaders_getInstance().eey_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_0(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.sf1().weq(HttpHeaders_getInstance().hey_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance_0().wev(tmp0_safe_receiver);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.tf1_1 = new HttpMethod('GET');
    this.uf1_1 = new HttpMethod('POST');
    this.vf1_1 = new HttpMethod('PUT');
    this.wf1_1 = new HttpMethod('PATCH');
    this.xf1_1 = new HttpMethod('DELETE');
    this.yf1_1 = new HttpMethod('HEAD');
    this.zf1_1 = new HttpMethod('OPTIONS');
    this.af2_1 = listOf([this.tf1_1, this.uf1_1, this.vf1_1, this.wf1_1, this.xf1_1, this.yf1_1, this.zf1_1]);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.bf2_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return 'HttpMethod(value=' + this.bf2_1 + ')';
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.bf2_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.bf2_1 === tmp0_other_with_cast.bf2_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.cf2_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.df2_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.ef2_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.ff2_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.gf2_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.hf2_1 = name;
    this.if2_1 = major;
    this.jf2_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.hf2_1 + '/' + this.if2_1 + '.' + this.jf2_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.hf2_1);
    result = imul(result, 31) + this.if2_1 | 0;
    result = imul(result, 31) + this.jf2_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.hf2_1 === tmp0_other_with_cast.hf2_1))
      return false;
    if (!(this.if2_1 === tmp0_other_with_cast.if2_1))
      return false;
    if (!(this.jf2_1 === tmp0_other_with_cast.jf2_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.kf2_1 = new HttpStatusCode(100, 'Continue');
    this.lf2_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.mf2_1 = new HttpStatusCode(102, 'Processing');
    this.nf2_1 = new HttpStatusCode(200, 'OK');
    this.of2_1 = new HttpStatusCode(201, 'Created');
    this.pf2_1 = new HttpStatusCode(202, 'Accepted');
    this.qf2_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.rf2_1 = new HttpStatusCode(204, 'No Content');
    this.sf2_1 = new HttpStatusCode(205, 'Reset Content');
    this.tf2_1 = new HttpStatusCode(206, 'Partial Content');
    this.uf2_1 = new HttpStatusCode(207, 'Multi-Status');
    this.vf2_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.wf2_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.xf2_1 = new HttpStatusCode(302, 'Found');
    this.yf2_1 = new HttpStatusCode(303, 'See Other');
    this.zf2_1 = new HttpStatusCode(304, 'Not Modified');
    this.af3_1 = new HttpStatusCode(305, 'Use Proxy');
    this.bf3_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.cf3_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.df3_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.ef3_1 = new HttpStatusCode(400, 'Bad Request');
    this.ff3_1 = new HttpStatusCode(401, 'Unauthorized');
    this.gf3_1 = new HttpStatusCode(402, 'Payment Required');
    this.hf3_1 = new HttpStatusCode(403, 'Forbidden');
    this.if3_1 = new HttpStatusCode(404, 'Not Found');
    this.jf3_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.kf3_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.lf3_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.mf3_1 = new HttpStatusCode(408, 'Request Timeout');
    this.nf3_1 = new HttpStatusCode(409, 'Conflict');
    this.of3_1 = new HttpStatusCode(410, 'Gone');
    this.pf3_1 = new HttpStatusCode(411, 'Length Required');
    this.qf3_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.rf3_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.sf3_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.tf3_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.uf3_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.vf3_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.wf3_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.xf3_1 = new HttpStatusCode(423, 'Locked');
    this.yf3_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.zf3_1 = new HttpStatusCode(425, 'Too Early');
    this.af4_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.bf4_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.cf4_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.df4_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.ef4_1 = new HttpStatusCode(501, 'Not Implemented');
    this.ff4_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.gf4_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.hf4_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.if4_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.jf4_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.kf4_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.lf4_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = this.lf4_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      tmp$ret$0 = element.nf4_1;
      tmp0_associateByTo.a5(tmp$ret$0, element);
    }
    tmp.mf4_1 = tmp0_associateByTo;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.nf4_1 = value;
    this.of4_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.nf4_1 + ' ' + this.of4_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.nf4_1 === this.nf4_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.nf4_1;
  };
  protoOf(HttpStatusCode).pf4 = function (other) {
    return this.nf4_1 - other.nf4_1 | 0;
  };
  protoOf(HttpStatusCode).la = function (other) {
    return this.pf4(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().kf2_1, Companion_getInstance_5().lf2_1, Companion_getInstance_5().mf2_1, Companion_getInstance_5().nf2_1, Companion_getInstance_5().of2_1, Companion_getInstance_5().pf2_1, Companion_getInstance_5().qf2_1, Companion_getInstance_5().rf2_1, Companion_getInstance_5().sf2_1, Companion_getInstance_5().tf2_1, Companion_getInstance_5().uf2_1, Companion_getInstance_5().vf2_1, Companion_getInstance_5().wf2_1, Companion_getInstance_5().xf2_1, Companion_getInstance_5().yf2_1, Companion_getInstance_5().zf2_1, Companion_getInstance_5().af3_1, Companion_getInstance_5().bf3_1, Companion_getInstance_5().cf3_1, Companion_getInstance_5().df3_1, Companion_getInstance_5().ef3_1, Companion_getInstance_5().ff3_1, Companion_getInstance_5().gf3_1, Companion_getInstance_5().hf3_1, Companion_getInstance_5().if3_1, Companion_getInstance_5().jf3_1, Companion_getInstance_5().kf3_1, Companion_getInstance_5().lf3_1, Companion_getInstance_5().mf3_1, Companion_getInstance_5().nf3_1, Companion_getInstance_5().of3_1, Companion_getInstance_5().pf3_1, Companion_getInstance_5().qf3_1, Companion_getInstance_5().rf3_1, Companion_getInstance_5().sf3_1, Companion_getInstance_5().tf3_1, Companion_getInstance_5().uf3_1, Companion_getInstance_5().vf3_1, Companion_getInstance_5().wf3_1, Companion_getInstance_5().xf3_1, Companion_getInstance_5().yf3_1, Companion_getInstance_5().zf3_1, Companion_getInstance_5().af4_1, Companion_getInstance_5().bf4_1, Companion_getInstance_5().cf4_1, Companion_getInstance_5().df4_1, Companion_getInstance_5().ef4_1, Companion_getInstance_5().ff4_1, Companion_getInstance_5().gf4_1, Companion_getInstance_5().hf4_1, Companion_getInstance_5().if4_1, Companion_getInstance_5().jf4_1, Companion_getInstance_5().kf4_1]);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.qf4_1 = EmptyParameters_getInstance();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  function ParametersBuilder(size) {
    size = size === VOID ? 8 : size;
    return new ParametersBuilderImpl(size);
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  protoOf(EmptyParameters).xer = function () {
    return true;
  };
  protoOf(EmptyParameters).yer = function (name) {
    return null;
  };
  protoOf(EmptyParameters).zer = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).aes = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).l = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + this.aes();
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilderImpl(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(ParametersBuilderImpl).df = function () {
    return new ParametersImpl(this.des_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + this.aes();
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().qf4_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_6();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ParametersBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(tmp0_apply, query, startIndex, limit, decode);
      tmp = tmp0_apply.df();
    }
    return tmp;
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (tmp1_subject === _Char___init__impl__6a9atx(38)) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          count = count + 1 | 0;
        } else if (tmp1_subject === _Char___init__impl__6a9atx(61)) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent(query, spaceNameIndex, spaceEndIndex);
        } else {
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = query.substring(spaceNameIndex, spaceEndIndex);
        }
        var name = tmp;
        _this__u8e3s4.fes(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent(query, spaceNameIndex_0, spaceEqualIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = query.substring(spaceNameIndex_0, spaceEqualIndex);
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent(query, spaceValueIndex, spaceEndIndex_0, true);
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = query.substring(spaceValueIndex, spaceEndIndex_0);
      }
      var value = tmp_1;
      _this__u8e3s4.jes(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      spaceIndex = spaceIndex + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      spaceIndex = spaceIndex - 1 | 0;
    }
    return spaceIndex;
  }
  function applyOrigin($this) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = $this.uf4_1;
    if (charSequenceLength(tmp0_isNotEmpty) > 0) {
      tmp = true;
    } else {
      tmp = $this.tf4_1.df5_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.uf4_1 = Companion_getInstance_7().vf5_1.gf5_1;
    if ($this.tf4_1.equals(Companion_getInstance_8().wf5_1))
      $this.tf4_1 = Companion_getInstance_7().vf5_1.ff5_1;
    if ($this.vf4_1 === 0)
      $this.vf4_1 = Companion_getInstance_7().vf5_1.hf5_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.vf5_1 = Url(get_origin(this));
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    protocol = protocol === VOID ? Companion_getInstance_8().wf5_1 : protocol;
    host = host === VOID ? '' : host;
    port = port === VOID ? 0 : port;
    user = user === VOID ? null : user;
    password = password === VOID ? null : password;
    pathSegments = pathSegments === VOID ? emptyList() : pathSegments;
    parameters = parameters === VOID ? Companion_getInstance_6().qf4_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.tf4_1 = protocol;
    this.uf4_1 = host;
    this.vf4_1 = port;
    this.wf4_1 = trailingQuery;
    var tmp = this;
    tmp.xf4_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.yf4_1 = password == null ? null : encodeURLParameter(password);
    this.zf4_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      tmp$ret$0 = encodeURLPathPart(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp_1.af5_1 = tmp0_mapTo;
    this.bf5_1 = encodeParameters(parameters);
    this.cf5_1 = new UrlDecodedParametersBuilder(this.bf5_1);
  }
  protoOf(URLBuilder).cf6 = function (value) {
    var tmp = this;
    tmp.xf4_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).df6 = function () {
    var tmp0_safe_receiver = this.xf4_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).ef6 = function () {
    var tmp0_safe_receiver = this.yf4_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).ff6 = function () {
    return decodeURLQueryComponent(this.zf4_1);
  };
  protoOf(URLBuilder).gf6 = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.af5_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      tmp$ret$0 = decodeURLPart(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp0_mapTo;
  };
  protoOf(URLBuilder).hf6 = function (value) {
    this.bf5_1 = value;
    this.cf5_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).if6 = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).df = function () {
    applyOrigin(this);
    return new Url_1(this.tf4_1, this.uf4_1, this.vf4_1, this.gf6(), this.cf5_1.df(), this.ff6(), this.df6(), this.ef6(), this.wf4_1, this.if6());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.ia(get_encodedUserAndPassword(_this__u8e3s4));
    tmp0_apply.ia(_this__u8e3s4.uf4_1);
    if (!(_this__u8e3s4.vf4_1 === 0) ? !(_this__u8e3s4.vf4_1 === _this__u8e3s4.tf4_1.ef5_1) : false) {
      tmp0_apply.ia(':');
      tmp0_apply.ia(_this__u8e3s4.vf4_1.toString());
    }
    return tmp0_apply.toString();
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.b(_this__u8e3s4.tf4_1.df5_1);
    var tmp0_subject = _this__u8e3s4.tf4_1.df5_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.uf4_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.uf4_1);
      return out;
    }
    out.b('://');
    out.b(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.bf5_1, _this__u8e3s4.wf4_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.zf4_1;
    if (charSequenceLength(tmp0_isNotEmpty) > 0) {
      out.i9(_Char___init__impl__6a9atx(35));
      out.b(_this__u8e3s4.zf4_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.xf4_1, _this__u8e3s4.yf4_1);
    return tmp0_apply.toString();
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.b('://');
    _this__u8e3s4.b(host);
    if (!startsWith(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.i9(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.af5_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.af5_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.b(':');
    _this__u8e3s4.b(encodedUser);
    _this__u8e3s4.b(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.l())
      return '';
    if (_this__u8e3s4.g() === 1) {
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = first_0(_this__u8e3s4);
      if (charSequenceLength(tmp0_isEmpty) === 0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString(_this__u8e3s4, '/');
  }
  function get_ROOT_PATH() {
    _init_properties_URLParser_kt__sf11to();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        throw new URLParserException(urlString, cause);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp0_anonymous = charSequenceGet(urlString, index);
          if (!isWhitespace(tmp0_anonymous)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp1_anonymous = charSequenceGet(urlString, index_0);
          if (!isWhitespace(tmp1_anonymous)) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = startIndex;
      var tmp3_substring = startIndex + schemeLength | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var scheme = urlString.substring(tmp2_substring, tmp3_substring);
      _this__u8e3s4.tf4_1 = Companion_getInstance_8().jf6(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.tf4_1.df5_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.tf4_1.df5_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slashCount === 0)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        // Inline function 'kotlin.takeIf' call
        var tmp5_takeIf = indexOfAny(urlString, toCharArray('@/\\?#'), startIndex);
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
        if (tmp5_takeIf > 0) {
          tmp = tmp5_takeIf;
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? charSequenceGet(urlString, delimiter) === _Char___init__impl__6a9atx(64) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_0 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var tmp6_substring = startIndex;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_0.xf4_1 = urlString.substring(tmp6_substring, passwordIndex);
            var tmp_1 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var tmp7_substring = passwordIndex + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_1.yf4_1 = urlString.substring(tmp7_substring, delimiter);
          } else {
            var tmp_2 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var tmp8_substring = startIndex;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_2.xf4_1 = urlString.substring(tmp8_substring, delimiter);
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.af5_1 = charSequenceGet(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_3 = _this__u8e3s4;
    var tmp_4;
    if (slashCount === 0) {
      tmp_4 = dropLast(_this__u8e3s4.af5_1, 1);
    } else {
      tmp_4 = emptyList();
    }
    tmp_3.af5_1 = tmp_4;
    // Inline function 'kotlin.takeIf' call
    var tmp9_takeIf = indexOfAny(urlString, toCharArray('?#'), startIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
    if (tmp9_takeIf > 0) {
      tmp_5 = tmp9_takeIf;
    } else {
      tmp_5 = null;
    }
    var tmp1_elvis_lhs = tmp_5;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      // Inline function 'kotlin.text.substring' call
      var tmp10_substring = startIndex;
      // Inline function 'kotlin.js.asDynamic' call
      var rawPath = urlString.substring(tmp10_substring, pathEnd);
      var tmp_6;
      var tmp_7;
      if (_this__u8e3s4.af5_1.g() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var tmp11_isEmpty = first_0(_this__u8e3s4.af5_1);
        tmp_7 = charSequenceLength(tmp11_isEmpty) === 0;
      } else {
        tmp_7 = false;
      }
      if (tmp_7) {
        tmp_6 = emptyList();
      } else {
        tmp_6 = _this__u8e3s4.af5_1;
      }
      var basePath = tmp_6;
      var rawChunks = rawPath === '/' ? get_ROOT_PATH() : split(rawPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.af5_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? charSequenceGet(urlString, startIndex) === _Char___init__impl__6a9atx(63) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (char === _Char___init__impl__6a9atx(58)) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((char === _Char___init__impl__6a9atx(47) ? true : char === _Char___init__impl__6a9atx(63)) ? true : char === _Char___init__impl__6a9atx(35))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !(char === _Char___init__impl__6a9atx(46)) : false) ? !(char === _Char___init__impl__6a9atx(43)) : false) ? !(char === _Char___init__impl__6a9atx(45)) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    _init_properties_URLParser_kt__sf11to();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex && charSequenceGet(urlString, startIndex + result | 0) === char) {
      result = result + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    _init_properties_URLParser_kt__sf11to();
    switch (slashCount) {
      case 2:
        var nextSlash = indexOf(urlString, _Char___init__impl__6a9atx(47), startIndex);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp = _this__u8e3s4;
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp.uf4_1 = urlString.substring(startIndex, endIndex);
          return Unit_getInstance();
        }

        var tmp_0 = _this__u8e3s4;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp_0.uf4_1 = urlString.substring(startIndex, nextSlash);
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$5 = urlString.substring(nextSlash, endIndex);
        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        break;
      case 3:
        _this__u8e3s4.uf4_1 = '';
        var tmp$ret$7;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp$ret$7 = urlString.substring(startIndex, endIndex);
        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var delimiter = indexOf_0(urlString, '@', startIndex);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = urlString.substring(startIndex, delimiter);
    _this__u8e3s4.cf6(decodeURLPart(tmp$ret$1));
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = delimiter + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.uf4_1 = urlString.substring(tmp0_substring, endIndex);
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (tmp1_subject === _Char___init__impl__6a9atx(91))
          skip = true;
        else if (tmp1_subject === _Char___init__impl__6a9atx(93))
          skip = false;
        else if (tmp1_subject === _Char___init__impl__6a9atx(58))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.fillHost.<anonymous>' call
    if (tmp0_takeIf > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.uf4_1 = urlString.substring(startIndex, colonIndex);
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = colonIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = urlString.substring(tmp1_substring, endIndex);
      tmp_1.vf4_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.vf4_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.wf4_1 = true;
      return endIndex;
    }
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = indexOf(urlString, _Char___init__impl__6a9atx(35), startIndex + 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.parseQuery.<anonymous>' call
    if (tmp0_takeIf > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = startIndex + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = urlString.substring(tmp1_substring, fragmentStart);
    var rawParameters = parseQueryString(tmp$ret$3, VOID, VOID, false);
    rawParameters.bes(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex ? charSequenceGet(urlString, startIndex) === _Char___init__impl__6a9atx(35) : false) {
      var tmp = _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = startIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp.zf4_1 = urlString.substring(tmp0_substring, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.bf5_1.fes(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function _init_properties_URLParser_kt__sf11to() {
    if (!properties_initialized_URLParser_kt_hd1g6a) {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.df5_1 === 'ws' ? true : _this__u8e3s4.df5_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.wf5_1 = new URLProtocol('http', 80);
    this.xf5_1 = new URLProtocol('https', 443);
    this.yf5_1 = new URLProtocol('ws', 80);
    this.zf5_1 = new URLProtocol('wss', 443);
    this.af6_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = listOf([this.wf5_1, this.xf5_1, this.yf5_1, this.zf5_1, this.af6_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      tmp$ret$0 = element.df5_1;
      tmp0_associateByTo.a5(tmp$ret$0, element);
    }
    tmp.bf6_1 = tmp0_associateByTo;
  }
  protoOf(Companion_7).jf6 = function (name) {
    // Inline function 'kotlin.let' call
    var tmp0_let = toLowerCasePreservingASCIIRules(name);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var tmp0_elvis_lhs = Companion_getInstance_8().bf6_1.z2(tmp0_let);
    return tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.df5_1 = name;
    this.ef5_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var indexedObject = this.df5_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
        if (!isLowerCase(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$1) {
      // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
      var message = 'All characters should be lower case';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(URLProtocol).toString = function () {
    return 'URLProtocol(name=' + this.df5_1 + ', defaultPort=' + this.ef5_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.df5_1);
    result = imul(result, 31) + this.ef5_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.df5_1 === tmp0_other_with_cast.df5_1))
      return false;
    if (!(this.ef5_1 === tmp0_other_with_cast.ef5_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.df5_1 === 'https' ? true : _this__u8e3s4.df5_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.tf4_1 = url.tf4_1;
    _this__u8e3s4.uf4_1 = url.uf4_1;
    _this__u8e3s4.vf4_1 = url.vf4_1;
    _this__u8e3s4.af5_1 = url.af5_1;
    _this__u8e3s4.xf4_1 = url.xf4_1;
    _this__u8e3s4.yf4_1 = url.yf4_1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    appendAll(tmp0_apply, url.bf5_1);
    _this__u8e3s4.hf6(tmp0_apply);
    _this__u8e3s4.zf4_1 = url.zf4_1;
    _this__u8e3s4.wf4_1 = url.wf4_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).df();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(encodedPath)) {
      tmp = !startsWith_0(encodedPath, '/');
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.i9(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
    if (!encodedQueryParameters.l() ? true : trailingQuery) {
      _this__u8e3s4.b('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = encodedQueryParameters.aes();
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.r();
      // Inline function 'kotlin.collections.component2' call
      var value = element.s();
      var tmp_0;
      if (value.l()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.d();
        while (tmp0_iterator_0.e()) {
          var item = tmp0_iterator_0.f();
          var tmp$ret$3;
          // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>.<anonymous>' call
          tmp$ret$3 = to(key, item);
          tmp0_mapTo.a(tmp$ret$3);
        }
        tmp_0 = tmp0_mapTo;
      }
      var list = tmp_0;
      addAll(tmp0_flatMapTo, list);
    }
    var tmp_1 = tmp0_flatMapTo;
    joinTo(tmp_1, _this__u8e3s4, '&', VOID, VOID, VOID, VOID, appendUrlFullPath$lambda);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.ia(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.i9(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.ia(encodedPassword);
    }
    _this__u8e3s4.ia('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.gf5_1 + ':' + _this__u8e3s4.kf6();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(new URLBuilder(), urlString);
  }
  function takeFrom_1(_this__u8e3s4, url) {
    _this__u8e3s4.tf4_1 = url.ff5_1;
    _this__u8e3s4.uf4_1 = url.gf5_1;
    _this__u8e3s4.vf4_1 = url.kf6();
    set_encodedPath(_this__u8e3s4, url.lf6());
    _this__u8e3s4.xf4_1 = url.mf6();
    _this__u8e3s4.yf4_1 = url.nf6();
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    tmp0_apply.kes(parseQueryString(url.of6(), VOID, VOID, false));
    _this__u8e3s4.hf6(tmp0_apply);
    _this__u8e3s4.zf4_1 = url.pf6();
    _this__u8e3s4.wf4_1 = url.nf5_1;
    return _this__u8e3s4;
  }
  function URLBuilder_1(url) {
    return takeFrom_1(new URLBuilder(), url);
  }
  function Url_0(builder) {
    return takeFrom_0(new URLBuilder(), builder).df();
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.w4_1;
    var tmp;
    if (it.x4_1 == null) {
      tmp = key;
    } else {
      var value = toString_0(it.x4_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.if5_1.l()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(47), this$0.ff5_1.df5_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.of5_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.of5_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_substring;
        tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        return tmp$ret$2;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.of5_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_substring;
      tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.of5_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(queryStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.of5_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(47), this$0.ff5_1.df5_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.of5_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(pathStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.of5_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.lf5_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.lf5_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.ff5_1.df5_1.length + 3 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.of5_1, tmp$ret$1, usernameStart);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.of5_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.mf5_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.mf5_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var passwordStart = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(58), this$0.ff5_1.df5_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(64));
      var tmp$ret$2;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.of5_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_substring;
      tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.of5_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this$0.of5_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      return tmp$ret$1;
    };
  }
  function Url_1(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.ff5_1 = protocol;
    this.gf5_1 = host;
    this.hf5_1 = specifiedPort;
    this.if5_1 = pathSegments;
    this.jf5_1 = parameters;
    this.kf5_1 = fragment;
    this.lf5_1 = user;
    this.mf5_1 = password;
    this.nf5_1 = trailingQuery;
    this.of5_1 = urlString;
    // Inline function 'kotlin.require' call
    var tmp;
    var containsArg = this.hf5_1;
    if (0 <= containsArg ? containsArg <= 65535 : false) {
      tmp = true;
    } else {
      tmp = this.hf5_1 === get_DEFAULT_PORT();
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      var message = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_0 = this;
    tmp_0.pf5_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.qf5_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.rf5_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.sf5_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.tf5_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.uf5_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_1).kf6 = function () {
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.hf5_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    if (!(tmp0_takeUnless === get_DEFAULT_PORT())) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.ff5_1.ef5_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_1).lf6 = function () {
    // Inline function 'kotlin.getValue' call
    encodedPath$factory();
    return this.pf5_1.s();
  };
  protoOf(Url_1).of6 = function () {
    // Inline function 'kotlin.getValue' call
    encodedQuery$factory();
    return this.qf5_1.s();
  };
  protoOf(Url_1).mf6 = function () {
    // Inline function 'kotlin.getValue' call
    encodedUser$factory();
    return this.sf5_1.s();
  };
  protoOf(Url_1).nf6 = function () {
    // Inline function 'kotlin.getValue' call
    encodedPassword$factory();
    return this.tf5_1.s();
  };
  protoOf(Url_1).pf6 = function () {
    // Inline function 'kotlin.getValue' call
    encodedFragment$factory();
    return this.uf5_1.s();
  };
  protoOf(Url_1).toString = function () {
    return this.of5_1;
  };
  protoOf(Url_1).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_1))
      THROW_CCE();
    if (!(this.of5_1 === other.of5_1))
      return false;
    return true;
  };
  protoOf(Url_1).hashCode = function () {
    return getStringHashCode(this.of5_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.ia(get_encodedUserAndPassword_0(_this__u8e3s4));
    if (_this__u8e3s4.hf5_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.hf5_1 === _this__u8e3s4.ff5_1.ef5_1) {
      tmp0_apply.ia(_this__u8e3s4.gf5_1);
    } else {
      tmp0_apply.ia(get_hostWithPort(_this__u8e3s4));
    }
    return tmp0_apply.toString();
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.mf6(), _this__u8e3s4.nf6());
    return tmp0_apply.toString();
  }
  function encodedPath$factory() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.lf6();
    }, null);
  }
  function encodedQuery$factory() {
    return getPropertyCallableRef('encodedQuery', 1, KProperty1, function (receiver) {
      return receiver.of6();
    }, null);
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.mf6();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.nf6();
    }, null);
  }
  function encodedFragment$factory() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.pf6();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.qf6_1 = encodedParametersBuilder;
    this.rf6_1 = this.qf6_1.xer();
  }
  protoOf(UrlDecodedParametersBuilder).df = function () {
    return decodeParameters(this.qf6_1);
  };
  protoOf(UrlDecodedParametersBuilder).xer = function () {
    return this.rf6_1;
  };
  protoOf(UrlDecodedParametersBuilder).yer = function (name) {
    var tmp0_safe_receiver = this.qf6_1.yer(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp = tmp0_mapTo;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).ges = function (name) {
    return this.qf6_1.ges(encodeURLParameter(name));
  };
  protoOf(UrlDecodedParametersBuilder).zer = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.qf6_1.zer();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      tmp$ret$0 = decodeURLQueryComponent(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return toSet(tmp0_mapTo);
  };
  protoOf(UrlDecodedParametersBuilder).l = function () {
    return this.qf6_1.l();
  };
  protoOf(UrlDecodedParametersBuilder).aes = function () {
    return decodeParameters(this.qf6_1).aes();
  };
  protoOf(UrlDecodedParametersBuilder).jes = function (name, value) {
    return this.qf6_1.jes(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).kes = function (stringValues) {
    return appendAllEncoded(this.qf6_1, stringValues);
  };
  protoOf(UrlDecodedParametersBuilder).fes = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      tmp$ret$0 = encodeURLParameterValue(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return this.qf6_1.fes(tmp, tmp0_mapTo);
  };
  protoOf(UrlDecodedParametersBuilder).a4 = function () {
    return this.qf6_1.a4();
  };
  function encodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeParameters.<anonymous>' call
    appendAllEncoded(tmp0_apply, parameters);
    return tmp0_apply;
  }
  function decodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.decodeParameters.<anonymous>' call
    appendAllDecoded(tmp0_apply, parameters);
    return tmp0_apply.df();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.zer().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.yer(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.d();
      while (tmp0_iterator_0.e()) {
        var item = tmp0_iterator_0.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = encodeURLParameterValue(item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      _this__u8e3s4.fes(tmp, tmp0_mapTo);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.zer().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.yer(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.d();
      while (tmp0_iterator_0.e()) {
        var item = tmp0_iterator_0.f();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        tmp0_mapTo.a(tmp$ret$0);
      }
      _this__u8e3s4.fes(tmp, tmp0_mapTo);
    }
  }
  function ByteArrayContent(bytes, contentType, status) {
    contentType = contentType === VOID ? null : contentType;
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.tf6_1 = bytes;
    this.uf6_1 = contentType;
    this.vf6_1 = status;
  }
  protoOf(ByteArrayContent).wf6 = function () {
    return this.uf6_1;
  };
  protoOf(ByteArrayContent).a8g = function () {
    return this.vf6_1;
  };
  protoOf(ByteArrayContent).xf6 = function () {
    return toLong_0(this.tf6_1.length);
  };
  protoOf(ByteArrayContent).yf6 = function () {
    return this.tf6_1;
  };
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
  }
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function OutgoingContent() {
    this.zf6_1 = null;
  }
  protoOf(OutgoingContent).wf6 = function () {
    return null;
  };
  protoOf(OutgoingContent).xf6 = function () {
    return null;
  };
  protoOf(OutgoingContent).a8g = function () {
    return null;
  };
  protoOf(OutgoingContent).sf1 = function () {
    return Companion_getInstance_2().mex_1;
  };
  function NullBody() {
    NullBody_instance = this;
  }
  var NullBody_instance;
  function NullBody_getInstance() {
    if (NullBody_instance == null)
      new NullBody();
    return NullBody_instance;
  }
  function TextContent(text, contentType, status) {
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.gf7_1 = text;
    this.hf7_1 = contentType;
    this.if7_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = this.gf7_1;
      var tmp0_elvis_lhs = charset(this.hf7_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().gek_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().gek_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.kek(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.jf7_1 = tmp$ret$0;
  }
  protoOf(TextContent).wf6 = function () {
    return this.hf7_1;
  };
  protoOf(TextContent).a8g = function () {
    return this.if7_1;
  };
  protoOf(TextContent).xf6 = function () {
    return toLong_0(this.jf7_1.length);
  };
  protoOf(TextContent).yf6 = function () {
    return this.jf7_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.hf7_1 + '] "' + take(this.gf7_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (get_platform(PlatformUtils_getInstance()).h7_1 === 2) {
      var tmp_0 = function () {
        var origin = '';
        if (typeof window !== 'undefined') {
          origin = window.location.origin;
        } else {
          origin = self.location.origin;
        }
        return origin && origin != 'null' ? origin : 'http://localhost';
      }();
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(EmptyHeaders).weq = get;
  protoOf(EmptyHeaders).bes = forEach;
  protoOf(EmptyParameters).bes = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NullBody_getInstance;
  _.$_$.b = Application_getInstance;
  _.$_$.c = Text_getInstance;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = HttpHeaders_getInstance;
  _.$_$.f = Companion_getInstance_3;
  _.$_$.g = Companion_getInstance_4;
  _.$_$.h = Companion_getInstance_5;
  _.$_$.i = Companion_getInstance_8;
  _.$_$.j = ByteArrayContent;
  _.$_$.k = ByteArrayContent_0;
  _.$_$.l = NoContent;
  _.$_$.m = ProtocolUpgrade;
  _.$_$.n = ReadChannelContent;
  _.$_$.o = WriteChannelContent;
  _.$_$.p = OutgoingContent;
  _.$_$.q = TextContent;
  _.$_$.r = get_DEFAULT_PORT;
  _.$_$.s = HeadersBuilder;
  _.$_$.t = HttpStatusCode;
  _.$_$.u = ParametersBuilder;
  _.$_$.v = URLBuilder_1;
  _.$_$.w = URLBuilder;
  _.$_$.x = UnsafeHeaderException;
  _.$_$.y = Url;
  _.$_$.z = Url_0;
  _.$_$.a1 = Url_1;
  _.$_$.b1 = get_authority;
  _.$_$.c1 = get_authority_0;
  _.$_$.d1 = charset_0;
  _.$_$.e1 = charset;
  _.$_$.f1 = contentLength;
  _.$_$.g1 = contentType;
  _.$_$.h1 = contentType_0;
  _.$_$.i1 = isSecure;
  _.$_$.j1 = isWebsocket;
  _.$_$.k1 = parseAndSortHeader;
  _.$_$.l1 = takeFrom_1;
  _.$_$.m1 = takeFrom_0;
  _.$_$.n1 = takeFrom;
  _.$_$.o1 = withCharsetIfNeeded;
  _.$_$.p1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http.js.map
