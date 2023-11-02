(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-text.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-text.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'moko-resources-resources-compose'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'moko-resources-resources-compose'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'moko-resources-resources-compose'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'moko-resources-resources-compose'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'moko-resources-resources-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'moko-resources-resources-compose'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'moko-resources-resources-compose'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'moko-resources-resources-compose'.");
    }
    root['moko-resources-resources-compose'] = factory(typeof this['moko-resources-resources-compose'] === 'undefined' ? {} : this['moko-resources-resources-compose'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var _FontStyle___init__impl__jcnduf = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v1;
  var FontFamily = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k2;
  var Font = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var KProperty0 = kotlin_kotlin.$_$.nf;
  var THROW_ISE = kotlin_kotlin.$_$.rj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var produceState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var protoOf = kotlin_kotlin.$_$.xd;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isInterface = kotlin_kotlin.$_$.id;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(produceByteArray$composable$slambda, 'produceByteArray$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  //endregion
  function fontFamilyResource$composable(fontResource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1701032623);
    sourceInformation($composer_0, 'C(fontFamilyResource$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1701032623, $changed, -1, 'dev.icerock.moko.resources.compose.fontFamilyResource$composable (FontResource.common.kt:14)');
    }
    var tmp0_safe_receiver = asFont$composable(fontResource, null, _FontStyle___init__impl__jcnduf(0), $composer_0, 14 & $changed, 3);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.icerock.moko.resources.compose.fontFamilyResource$composable.<anonymous>' call
      tmp = FontFamily([tmp0_safe_receiver]);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp0 = tmp1_elvis_lhs == null ? Companion_getInstance().s4s_1 : tmp1_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function asFont$composable(_this__u8e3s4, weight, style, $composer, $changed, $default) {
    var weight_0 = {_v: weight};
    var style_0 = {_v: new FontStyle(style)};
    var $composer_0 = $composer;
    $composer_0.m1r(-553261861);
    sourceInformation($composer_0, 'C(asFont$composable)P(1,0:c#ui.text.font.FontStyle)');
    if (!(($default & 1) === 0)) {
      weight_0._v = Companion_getInstance_0().f4s_1;
    }
    if (!(($default & 2) === 0)) {
      style_0._v = new FontStyle(Companion_getInstance_1().m4s_1);
    }
    if (isTraceInProgress()) {
      traceEventStart(-553261861, $changed, -1, 'dev.icerock.moko.resources.compose.asFont$composable (FontResource.js.kt:17)');
    }
    var bytes$delegate = produceByteArray$composable(_this__u8e3s4.ne6_1, $composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = _this__u8e3s4.ne6_1;
    var tmp0_safe_receiver = asFont$composable$lambda(bytes$delegate);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
    var tmp1_remember$composable = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(tmp0_remember$composable) | $composer_1.y1t(tmp1_remember$composable));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().y1s_1) {
      // Inline function 'dev.icerock.moko.resources.compose.asFont$composable.<anonymous>' call
      var tmp0_safe_receiver_0 = asFont$composable$lambda(bytes$delegate);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.icerock.moko.resources.compose.asFont$composable.<anonymous>.<anonymous>' call
        tmp_0 = Font(_this__u8e3s4.oe6_1, tmp0_safe_receiver_0, weight_0._v, style_0._v.n4q_1);
      }
      var value = tmp_0;
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_1 = tmp;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function asFont$composable$lambda($bytes$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bytes', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $bytes$delegate.s();
  }
  function produceByteArray$composable(url, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1705199672);
    if (isTraceInProgress()) {
      traceEventStart(1705199672, $changed, -1, 'dev.icerock.moko.resources.compose.internal.produceByteArray$composable (produceByteArray.kt:18)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(url);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().y1s_1) {
      // Inline function 'dev.icerock.moko.resources.compose.internal.produceByteArray$composable.<anonymous>' call
      var value = produceByteArray$composable$slambda_0(url, null);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var tmp0_0 = produceState$composable(null, url, tmp0, $composer_0, 6 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function produceByteArray$composable$slambda($url, resultContinuation) {
    this.xe6_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceByteArray$composable$slambda).ae7 = function ($this$produceState, $completion) {
    var tmp = this.be7($this$produceState, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(produceByteArray$composable$slambda).yl = function (p1, $completion) {
    return this.ae7((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceByteArray$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = await_0(window.fetch(this.xe6_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ze6_1 = suspendResult;
            if (!this.ze6_1.ok) {
              console.error("can't load data from " + this.xe6_1);
              return Unit_getInstance();
            }

            this.dl_1 = 2;
            suspendResult = await_0(this.ze6_1.arrayBuffer(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var buffer = suspendResult;
            var tmp0_unsafeCast = new Int8Array(buffer);
            this.ye6_1.f1d(tmp0_unsafeCast);
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
  protoOf(produceByteArray$composable$slambda).be7 = function ($this$produceState, completion) {
    var i = new produceByteArray$composable$slambda(this.xe6_1, completion);
    i.ye6_1 = $this$produceState;
    return i;
  };
  function produceByteArray$composable$slambda_0($url, resultContinuation) {
    var i = new produceByteArray$composable$slambda($url, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.ae7($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fontFamilyResource$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=moko-resources-resources-compose.js.map
