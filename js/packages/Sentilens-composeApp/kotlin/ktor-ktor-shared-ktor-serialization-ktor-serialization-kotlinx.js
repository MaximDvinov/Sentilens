(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-http.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-io.js', './ktor-ktor-shared-ktor-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-shared-ktor-serialization.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-shared-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-shared-ktor-serialization' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    root['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] = factory(typeof this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] === 'undefined' ? {} : this['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-http'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-io'], this['ktor-ktor-shared-ktor-serialization']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.xd;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isInterface = kotlin_kotlin.$_$.id;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var classMeta = kotlin_kotlin.$_$.kc;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.j;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.o1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.q;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var isObject = kotlin_kotlin.$_$.kd;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var discard = kotlin_io_ktor_ktor_io.$_$.w;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.x;
  var readText = kotlin_io_ktor_ktor_io.$_$.z;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i3;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Map = kotlin_kotlin.$_$.k6;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Set = kotlin_kotlin.$_$.r6;
  var firstOrNull_0 = kotlin_kotlin.$_$.h8;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var isArray = kotlin_kotlin.$_$.ad;
  var List = kotlin_kotlin.$_$.i6;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var filterNotNull = kotlin_kotlin.$_$.e8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var singleOrNull = kotlin_kotlin.$_$.ga;
  var Collection = kotlin_kotlin.$_$.b6;
  var emptyList = kotlin_kotlin.$_$.z7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KotlinxSerializationExtension, 'KotlinxSerializationExtension', interfaceMeta, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$o$collect$slambda, 'KotlinxSerializationConverter$serializeNullable$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter$deserialize$o$collect$slambda, 'KotlinxSerializationConverter$deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$slambda, 'KotlinxSerializationConverter$serializeNullable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$deserialize$slambda, 'KotlinxSerializationConverter$deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($serializeNullableCOROUTINE$0, '$serializeNullableCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, VOID, [ContentConverter], VOID, VOID, [4, 3]);
  //endregion
  function KotlinxSerializationExtension() {
  }
  function extensions(format) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_mapNotNull = get_providers();
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = tmp0_mapNotNull.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.ktor.serialization.kotlinx.extensions.<anonymous>' call
      var tmp0_safe_receiver = element.gir(format);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.a(tmp0_safe_receiver);
      }
    }
    return tmp0_mapNotNullTo;
  }
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.of8(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda($collector, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.pir_1 = $collector;
    this.qir_1 = $contentType;
    this.rir_1 = $charset;
    this.sir_1 = $typeInfo;
    this.tir_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).wir = function (value, $completion) {
    var tmp = this.xir(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).yl = function (p1, $completion) {
    return this.wir((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.uir_1.fir(this.qir_1, this.rir_1, this.sir_1, this.tir_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vir_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = this.pir_1.z18(this.vir_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).xir = function (value, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda(this.pir_1, this.qir_1, this.rir_1, this.sir_1, this.tir_1, completion);
    i.uir_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0($collector, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda($collector, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.wir(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gis_1 = _this__u8e3s4;
    this.his_1 = collector;
  }
  protoOf($collectCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0(this.his_1, this.gis_1.jis_1, this.gis_1.kis_1, this.gis_1.lis_1, this.gis_1.mis_1, null);
            suspendResult = this.gis_1.iis_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 2) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($collector, $charset, $typeInfo, $content, resultContinuation) {
    this.vis_1 = $collector;
    this.wis_1 = $charset;
    this.xis_1 = $typeInfo;
    this.yis_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).wir = function (value, $completion) {
    var tmp = this.xir(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).yl = function (p1, $completion) {
    return this.wir((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.zis_1.rf8(this.wis_1, this.xis_1, this.yis_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ait_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = this.vis_1.z18(this.ait_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
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
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).xir = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.vis_1, this.wis_1, this.xis_1, this.yis_1, completion);
    i.zis_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($collector, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($collector, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.wir(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jit_1 = _this__u8e3s4;
    this.kit_1 = collector;
  }
  protoOf($collectCOROUTINE$3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.kit_1, this.jit_1.mit_1, this.jit_1.nit_1, this.jit_1.oit_1, null);
            suspendResult = this.jit_1.lit_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 2) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.cgp(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.egp(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.pit_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.pit_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.qit_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).z18 = function (value, $completion) {
    return this.qit_1(value, $completion);
  };
  function _no_name_provided__qut3iv($tmp0_map, $contentType, $charset, $typeInfo, $value) {
    this.iis_1 = $tmp0_map;
    this.jis_1 = $contentType;
    this.kis_1 = $charset;
    this.lis_1 = $typeInfo;
    this.mis_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv).rit = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv).x17 = function (collector, $completion) {
    return this.rit(collector, $completion);
  };
  function KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).biu = function (it, $completion) {
    var tmp = this.ciu(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).yl = function (p1, $completion) {
    return this.biu((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return !(this.aiu_1 == null);
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).ciu = function (it, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(completion);
    i.aiu_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serializeNullable$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.biu(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($tmp0_map, $charset, $typeInfo, $content) {
    this.lit_1 = $tmp0_map;
    this.mit_1 = $charset;
    this.nit_1 = $typeInfo;
    this.oit_1 = $content;
  }
  protoOf(_no_name_provided__qut3iv_0).jfa = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv_0).x17 = function (collector, $completion) {
    return this.jfa(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.liu_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ufa = function (it, $completion) {
    var tmp = this.vfa(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).yl = function (p1, $completion) {
    return this.ufa((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return !(this.miu_1 == null) ? true : this.liu_1.bea();
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).vfa = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.liu_1, completion);
    i.miu_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.ufa(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeNullableCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.viu_1 = _this__u8e3s4;
    this.wiu_1 = contentType;
    this.xiu_1 = charset;
    this.yiu_1 = typeInfo;
    this.ziu_1 = value;
  }
  protoOf($serializeNullableCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp0_map = asFlow(this.viu_1.biv_1);
            var tmp_0 = new _no_name_provided__qut3iv(tmp0_map, this.wiu_1, this.xiu_1, this.yiu_1, this.ziu_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$serializeNullable$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var fromExtension = suspendResult;
            if (!(fromExtension == null))
              return fromExtension;
            var tmp_1;
            try {
              tmp_1 = serializerForTypeInfo(this.viu_1.aiv_1.egs(), this.yiu_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.ziu_1, this.viu_1.aiv_1.egs());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.viu_1, serializer, this.viu_1.aiv_1, this.ziu_1, this.wiu_1, this.xiu_1);
          case 2:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 2) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kiv_1 = _this__u8e3s4;
    this.liv_1 = charset;
    this.miv_1 = typeInfo;
    this.niv_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.dl_1 = 1;
            var tmp0_map = asFlow(this.kiv_1.biv_1);
            var tmp_0 = new _no_name_provided__qut3iv_0(tmp0_map, this.liv_1, this.miv_1, this.niv_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.niv_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.oiv_1 = suspendResult;
            var tmp_1;
            if (!this.kiv_1.biv_1.l()) {
              tmp_1 = !(this.oiv_1 == null) ? true : this.niv_1.bea();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.oiv_1;
            this.piv_1 = serializerForTypeInfo(this.kiv_1.aiv_1.egs(), this.miv_1);
            this.dl_1 = 2;
            suspendResult = this.niv_1.uef(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.el_1 = 3;
            var tmp0_subject = this.kiv_1.aiv_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this.kiv_1.aiv_1.dgp(this.piv_1, readText(contentPacket, this.liv_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this.kiv_1.aiv_1.fgp(this.piv_1, readBytes(contentPacket));
              } else {
                discard(contentPacket);
                var tmp2_error = 'Unsupported format ' + this.kiv_1.aiv_1;
                throw IllegalStateException_init_$Create$(toString(tmp2_error));
              }
            }

            return tmp_2;
          case 3:
            this.el_1 = 5;
            var tmp_3 = this.gl_1;
            if (tmp_3 instanceof Error) {
              var cause = this.gl_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.gl_1;
            }

          case 4:
            this.el_1 = 5;
            return Unit_getInstance();
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
  function KotlinxSerializationConverter(format) {
    this.aiv_1 = format;
    this.biv_1 = extensions(this.aiv_1);
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.aiv_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.aiv_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      var message = 'Only binary and string formats are supported, ' + this.aiv_1 + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).qiv = function (contentType, charset, typeInfo, value, $completion) {
    return this.riv(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).pf8 = function (contentType, charset, typeInfo, value, $completion) {
    return this.qiv(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).riv = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeNullableCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(KotlinxSerializationConverter).qf8 = function (contentType, charset, typeInfo, value, $completion) {
    return this.riv(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).rf8 = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.nev_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.serialization.kotlinx.serializerForTypeInfo.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.zh().l()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.igp(typeInfo.lev_1);
      tmp_1 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.lev_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp;
    if (value == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(value == null) ? isInterface(value, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(value == null) ? isArray(value) : false) {
          var tmp1_safe_receiver = firstOrNull_0(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(value == null) ? isInterface(value, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(value == null) ? isInterface(value, Map) : false) {
              var keySerializer = elementSerializer(value.a3(), module_0);
              var valueSerializer = elementSerializer(value.b3(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.igp(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.nev_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ai()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    // Inline function 'kotlin.collections.distinctBy' call
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = filterNotNull(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.a(tmp$ret$0);
    }
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator_0 = tmp0_mapTo.d();
    while (tmp0_iterator_0.e()) {
      var e = tmp0_iterator_0.f();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var key = e.kgo().pgp();
      if (set.a(key)) {
        list.a(e);
      }
    }
    var serializers = list;
    if (serializers.g() > 1) {
      // Inline function 'kotlin.error' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.d();
      while (tmp0_iterator_1.e()) {
        var item_0 = tmp0_iterator_1.f();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.kgo().pgp();
        tmp0_mapTo_0.a(tmp$ret$5);
      }
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp0_mapTo_0);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.kgo().lgp()) {
      return selected;
    }
    if (!isInterface(selected, KSerializer))
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.d();
      while (tmp0_iterator_2.e()) {
        var element = tmp0_iterator_2.f();
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        if (element == null) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_providers() {
    return emptyList();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js.map
