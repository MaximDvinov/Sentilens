(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    root['compose-multiplatform-core-animation-core'] = factory(typeof this['compose-multiplatform-core-animation-core'] === 'undefined' ? {} : this['compose-multiplatform-core-animation-core'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var equals = kotlin_kotlin.$_$.oc;
  var VOID = kotlin_kotlin.$_$.il;
  var coerceIn = kotlin_kotlin.$_$.ze;
  var Long = kotlin_kotlin.$_$.jj;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var protoOf = kotlin_kotlin.$_$.xd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c5;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var KProperty0 = kotlin_kotlin.$_$.nf;
  var THROW_ISE = kotlin_kotlin.$_$.rj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var isInterface = kotlin_kotlin.$_$.id;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var isNaN_0 = kotlin_kotlin.$_$.ok;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var Enum = kotlin_kotlin.$_$.dj;
  var hashCode = kotlin_kotlin.$_$.xc;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var to = kotlin_kotlin.$_$.el;
  var mapCapacity = kotlin_kotlin.$_$.m9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var toLong = kotlin_kotlin.$_$.ae;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var coerceIn_0 = kotlin_kotlin.$_$.bf;
  var numberToLong = kotlin_kotlin.$_$.ud;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Key_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.w8;
  var isArray = kotlin_kotlin.$_$.ad;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var first = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var captureStack = kotlin_kotlin.$_$.ec;
  var isFinite = kotlin_kotlin.$_$.lk;
  var isNaN_1 = kotlin_kotlin.$_$.pk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.b5;
  var floatFromBits = kotlin_kotlin.$_$.rc;
  var toBits = kotlin_kotlin.$_$.al;
  var Key_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.b9;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var numberToInt = kotlin_kotlin.$_$.td;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var until = kotlin_kotlin.$_$.jf;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.l5;
  var getValue = kotlin_kotlin.$_$.o8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var mapOf = kotlin_kotlin.$_$.o9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Animatable$runAnimation$slambda, 'Animatable$runAnimation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable$snapTo$slambda, 'Animatable$snapTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable, 'Animatable', classMeta, VOID, VOID, VOID, VOID, [4, 3, 1, 0]);
  setMetadataFor(AnimationResult, 'AnimationResult', classMeta);
  setMetadataFor(animateValueAsState$composable$slambda$slambda, 'animateValueAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(animateValueAsState$composable$slambda, 'animateValueAsState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.x(this.f8o()) >= 0;
  }
  setMetadataFor(Animation, 'Animation', interfaceMeta);
  setMetadataFor(TargetBasedAnimation, 'TargetBasedAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(DecayAnimation, 'DecayAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(AnimationEndReason, 'AnimationEndReason', classMeta, Enum);
  setMetadataFor(SpringSpec, 'SpringSpec', classMeta);
  setMetadataFor(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec', classMeta);
  setMetadataFor(KeyframesSpecConfig, 'KeyframesSpecConfig', classMeta);
  setMetadataFor(KeyframeEntity, 'KeyframeEntity', classMeta);
  setMetadataFor(KeyframesSpec, 'KeyframesSpec', classMeta);
  setMetadataFor(TweenSpec, 'TweenSpec', classMeta);
  setMetadataFor(RepeatMode, 'RepeatMode', classMeta, Enum);
  setMetadataFor(AnimationConstants, 'AnimationConstants', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AnimationState, 'AnimationState', classMeta);
  setMetadataFor(AnimationScope, 'AnimationScope', classMeta);
  setMetadataFor(AnimationVector, 'AnimationVector', classMeta);
  setMetadataFor(AnimationVector1D, 'AnimationVector1D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector2D, 'AnimationVector2D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector4D, 'AnimationVector4D', classMeta, AnimationVector);
  setMetadataFor(ComplexDouble, 'ComplexDouble', classMeta);
  setMetadataFor(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl', classMeta);
  setMetadataFor(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec', classMeta);
  setMetadataFor(CubicBezierEasing, 'CubicBezierEasing', classMeta);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', classMeta);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.k8r(this.m8r(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  setMetadataFor(FloatAnimationSpec, 'FloatAnimationSpec', interfaceMeta);
  setMetadataFor(FloatSpringSpec, 'FloatSpringSpec', classMeta, VOID, [FloatAnimationSpec]);
  setMetadataFor(FloatTweenSpec, 'FloatTweenSpec', classMeta, VOID, [FloatAnimationSpec]);
  setMetadataFor(withInfiniteAnimationFrameNanos$slambda, 'withInfiniteAnimationFrameNanos$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor($withInfiniteAnimationFrameNanosCOROUTINE$0, '$withInfiniteAnimationFrameNanosCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(InfiniteTransition$run$composable$slambda$slambda, 'InfiniteTransition$run$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(TransitionAnimationState, 'TransitionAnimationState', classMeta);
  setMetadataFor(InfiniteTransition$run$composable$slambda, 'InfiniteTransition$run$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(InfiniteTransition, 'InfiniteTransition', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(Mutator, 'Mutator', classMeta);
  setMetadataFor(MutatorMutex$mutate$slambda, 'MutatorMutex$mutate$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex, 'MutatorMutex', classMeta, VOID, VOID, VOID, VOID, [2, 3]);
  setMetadataFor(MutatePriority, 'MutatePriority', classMeta, Enum);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(MutationInterruptedException, 'MutationInterruptedException', classMeta, PlatformOptimizedCancellationException);
  setMetadataFor(SpringSimulation, 'SpringSimulation', classMeta);
  setMetadataFor($animateCOROUTINE$1, '$animateCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($callWithFrameNanosCOROUTINE$2, '$callWithFrameNanosCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DeferredAnimationData, 'DeferredAnimationData', classMeta);
  setMetadataFor(TransitionAnimationState_0, 'TransitionAnimationState', classMeta);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.s8x()) ? equals(targetState, this.q8x()) : false;
  }
  setMetadataFor(Segment, 'Segment', interfaceMeta);
  setMetadataFor(SegmentImpl, 'SegmentImpl', classMeta, VOID, [Segment]);
  setMetadataFor(DeferredAnimation, 'DeferredAnimation', classMeta);
  setMetadataFor(Transition$animateTo$composable$slambda, 'Transition$animateTo$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(MutableTransitionState, 'MutableTransitionState', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta);
  setMetadataFor(TwoWayConverterImpl, 'TwoWayConverterImpl', classMeta);
  setMetadataFor(Spring, 'Spring', objectMeta);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.h8o(this.y8n(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  setMetadataFor(VectorizedAnimationSpec, 'VectorizedAnimationSpec', interfaceMeta);
  function get_isInfinite() {
    return false;
  }
  setMetadataFor(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', interfaceMeta, VOID, [VectorizedAnimationSpec]);
  setMetadataFor(VectorizedSpringSpec, 'VectorizedSpringSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedFloatAnimationSpec$1, VOID, classMeta);
  setMetadataFor(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', classMeta, VOID, [VectorizedAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.t91() + this.u91() | 0).l9(get_MillisToNanos());
  }
  setMetadataFor(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', interfaceMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(VectorizedTweenSpec, 'VectorizedTweenSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(createSpringAnimations$1, VOID, classMeta);
  setMetadataFor(createSpringAnimations$2, VOID, classMeta);
  //endregion
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.k8j_1);
      var clamped = clampToBounds(this$0, $this$animate.s());
      var tmp;
      if (!equals(clamped, $this$animate.s())) {
        this$0.k8j_1.f1d(clamped);
        $endState.f1d(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.n8k();
        $clampingNeeded._v = true;
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    isRunning$factory();
    return $this.l8j_1.f1d(_set____db54di);
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    targetValue$factory();
    return $this.m8j_1.f1d(_set____db54di);
  }
  function createVector(_this__u8e3s4, $this, value) {
    var newVector = $this.h8j_1.o8k()(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.q8k(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.k8j_1.j8k_1;
    return $this.p8j_1.t8k(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.t8j_1, $this.r8j_1) ? equals($this.u8j_1, $this.s8j_1) : false) {
      return value;
    }
    var valueVector = $this.h8j_1.o8k()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.m(i) < $this.t8j_1.m(i) ? true : valueVector.m(i) > $this.u8j_1.m(i)) {
          clamped = true;
          valueVector.q8k(i, coerceIn(valueVector.m(i), $this.t8j_1.m(i), $this.u8j_1.m(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.h8j_1.u8k()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = $this.k8j_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    tmp0_apply.i8k_1.p25();
    var tmp = tmp0_apply;
    AnimationConstants_getInstance();
    tmp.j8k_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.d8l_1 = this$0;
    this.e8l_1 = $initialVelocity;
    this.f8l_1 = $animation;
    this.g8l_1 = $startTime;
    this.h8l_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).l8l = function ($completion) {
    var tmp = this.v50($completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Animatable$runAnimation$slambda).w50 = function ($completion) {
    return this.l8l($completion);
  };
  protoOf(Animatable$runAnimation$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.el_1 = 2;
            this.d8l_1.k8j_1.i8k_1 = this.d8l_1.h8j_1.o8k()(this.e8l_1);
            _set_targetValue__aqsk0r(this.d8l_1, this.f8l_1.m8l());
            _set_isRunning__kpbg34(this.d8l_1, true);
            var tmp_0 = this;
            AnimationConstants_getInstance();
            tmp_0.j8l_1 = copy(this.d8l_1.k8j_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.k8l_1 = {_v: false};
            this.dl_1 = 1;
            suspendResult = animate(this.j8l_1, this.f8l_1, this.g8l_1, Animatable$runAnimation$slambda$lambda(this.d8l_1, this.j8l_1, this.h8l_1, this.k8l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.k8l_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.d8l_1);
            this.i8l_1 = new AnimationResult(this.j8l_1, endReason);
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof CancellationException) {
              var e = this.gl_1;
              var tmp_2 = this;
              endAnimation(this.d8l_1);
              throw e;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            return this.i8l_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.el_1 === 3) {
          throw e_0;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).v50 = function (completion) {
    return new Animatable$runAnimation$slambda(this.d8l_1, this.e8l_1, this.f8l_1, this.g8l_1, this.h8l_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.l8l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.v8l_1 = this$0;
    this.w8l_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).x8l = function ($completion) {
    var tmp = this.v50($completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Animatable$snapTo$slambda).w50 = function ($completion) {
    return this.x8l($completion);
  };
  protoOf(Animatable$snapTo$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          endAnimation(this.v8l_1);
          var clampedValue = clampToBounds(this.v8l_1, this.w8l_1);
          this.v8l_1.k8j_1.f1d(clampedValue);
          _set_targetValue__aqsk0r(this.v8l_1, clampedValue);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$snapTo$slambda).v50 = function (completion) {
    return new Animatable$snapTo$slambda(this.v8l_1, this.w8l_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.x8l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.h8j_1 = typeConverter;
    this.i8j_1 = visibilityThreshold;
    this.j8j_1 = label;
    this.k8j_1 = new AnimationState(this.h8j_1, initialValue);
    this.l8j_1 = mutableStateOf(false);
    this.m8j_1 = mutableStateOf(initialValue);
    this.n8j_1 = null;
    this.o8j_1 = null;
    this.p8j_1 = new MutatorMutex();
    this.q8j_1 = new SpringSpec(VOID, VOID, this.i8j_1);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.r8j_1 = createVector(initialValue, this, -Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.s8j_1 = createVector(initialValue, this, Infinity);
    this.t8j_1 = this.r8j_1;
    this.u8j_1 = this.s8j_1;
    this.v8j_1 = 8;
  }
  protoOf(Animatable).s = function () {
    return this.k8j_1.s();
  };
  protoOf(Animatable).y8l = function () {
    return this.k8j_1.i8k_1;
  };
  protoOf(Animatable).z8l = function () {
    return this.h8j_1.u8k()(this.y8l());
  };
  protoOf(Animatable).a8m = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_0();
    return this.l8j_1.s();
  };
  protoOf(Animatable).m8l = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_0();
    return this.m8j_1.s();
  };
  protoOf(Animatable).b8m = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.s();
    var tmp1_typeConverter = this.h8j_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).c8m = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.q8j_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.z8l() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.b8m(targetValue, animationSpec, initialVelocity, block, $completion) : $super.b8m.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).d8m = function (targetValue, $completion) {
    return this.p8j_1.t8k(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).e8m = function () {
    return this.k8j_1;
  };
  function AnimationResult(endState, endReason) {
    this.f8m_1 = endState;
    this.g8m_1 = endReason;
    this.h8m_1 = 0;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.g8m_1 + ', endState=' + this.f8m_1 + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      Spring_getInstance();
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    return new Animatable(initialValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.m8l();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.m8l();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateFloatAsState$composable(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.m1r(-298361457);
    sourceInformation($composer_0, 'C(animateFloatAsState$composable)P(3!1,4,2)75@3368L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0)) {
      visibilityThreshold_0._v = 0.01;
    }
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-298361457, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState$composable (AnimateAsState.kt:62)');
    }
    $composer_0.m1r(-143091539);
    sourceInformation($composer_0, '71@3220L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = visibilityThreshold_0._v;
      var $composer_1 = $composer_0;
      $composer_1.m1r(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.y1t(tmp0_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
        // Inline function 'androidx.compose.animation.core.animateFloatAsState$composable.<anonymous>' call
        var value = spring(VOID, VOID, visibilityThreshold_0._v);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      tmp = tmp0;
    } else {
      tmp = animationSpec_0;
    }
    var tmp1_group = tmp;
    $composer_0.o1r();
    var resolvedAnimSpec = tmp1_group;
    var tmp0_0 = animateValueAsState$composable(targetValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), resolvedAnimSpec, visibilityThreshold_0._v, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function animateDpAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.m1r(-686158507);
    sourceInformation($composer_0, 'C(animateDpAsState$composable)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-686158507, $changed, -1, 'androidx.compose.animation.core.animateDpAsState$composable (AnimateAsState.kt:108)');
    }
    var tmp = new Dp(targetValue);
    var tmp_0 = get_VectorConverter_6(Companion_getInstance_0());
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState$composable(tmp, tmp_0, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function animateValueAsState$composable(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = {_v: label};
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.m1r(-1860487620);
    sourceInformation($composer_0, 'C(animateValueAsState$composable)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18861L55,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
        var value = spring();
        $composer_1.x1t(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.o1r();
      animationSpec_0 = tmp0;
    }
    if (!(($default & 8) === 0)) {
      visibilityThreshold_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      label_0._v = 'ValueAnimation';
    }
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1860487620, $changed, -1, 'androidx.compose.animation.core.animateValueAsState$composable (AnimateAsState.kt:390)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(547886695);
    sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (false ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    var toolingOverride = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.m1r(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let_1 = $composer_3.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_3;
    if (false ? true : tmp0_let_1 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0._v, label_0._v);
      $composer_3.x1t(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = tmp0_let_1;
    }
    var tmp_4 = tmp_3;
    var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
    $composer_3.o1r();
    var animatable = tmp0_1;
    var listener$delegate = rememberUpdatedState$composable(finishedListener_0, $composer_0, 14 & $changed >> 15);
    var tmp$ret$16;
    // Inline function 'kotlin.run' call
    var tmp3_run = animationSpec_0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0._v == null)) {
      tmp_7 = tmp3_run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals(tmp3_run.k8m_1, visibilityThreshold_0._v);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring(tmp3_run.i8m_1, tmp3_run.j8m_1, visibilityThreshold_0._v);
    } else {
      tmp_5 = tmp3_run;
    }
    tmp$ret$16 = tmp_5;
    var animSpec$delegate = rememberUpdatedState$composable(tmp$ret$16, $composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_4 = $composer_0;
    $composer_4.m1r(547886695);
    sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let_2 = $composer_4.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_8;
    if (false ? true : tmp0_let_2 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      Factory_getInstance();
      var value_2 = Channel(-1);
      $composer_4.x1t(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = tmp0_let_2;
    }
    var tmp_9 = tmp_8;
    var tmp0_2 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
    $composer_4.o1r();
    var channel = tmp0_2;
    SideEffect$composable(animateValueAsState$composable$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect$composable(channel, animateValueAsState$composable$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.s();
    var tmp0_3 = tmp0_elvis_lhs == null ? animatable.e8m() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_3;
  }
  function animateValueAsState$composable$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.s();
  }
  function animateValueAsState$composable$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.s();
  }
  function animateValueAsState$composable$lambda_1($channel, $targetValue) {
    return function () {
      $channel.g16($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.u8m_1 = $newTarget;
    this.v8m_1 = $animatable;
    this.w8m_1 = $animSpec$delegate;
    this.x8m_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(animateValueAsState$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (!equals(this.u8m_1, this.v8m_1.m8l())) {
              this.dl_1 = 1;
              suspendResult = this.v8m_1.c8m(this.u8m_1, animateValueAsState$composable$lambda_0(this.w8m_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$composable$lambda(this.x8m_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.v8m_1.s());
            this.dl_1 = 2;
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
  protoOf(animateValueAsState$composable$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new animateValueAsState$composable$slambda$slambda(this.u8m_1, this.v8m_1, this.w8m_1, this.x8m_1, completion);
    i.y8m_1 = $this$launch;
    return i;
  };
  function animateValueAsState$composable$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.h8n_1 = $channel;
    this.i8n_1 = $animatable;
    this.j8n_1 = $animSpec$delegate;
    this.k8n_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(animateValueAsState$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.m8n_1 = this.h8n_1.d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            suspendResult = this.m8n_1.s13(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.dl_1 = 3;
              continue $sm;
            }

            var target = this.m8n_1.f();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.h8n_1.k16());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.l8n_1, VOID, VOID, animateValueAsState$composable$slambda$slambda_0(newTarget, this.i8n_1, this.j8n_1, this.k8n_1, null));
            this.dl_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 4) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$composable$slambda(this.h8n_1, this.i8n_1, this.j8n_1, this.k8n_1, completion);
    i.l8n_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$composable$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance_0())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_getInstance()));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.n8n(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.o8n_1 = animationSpec;
    this.p8n_1 = typeConverter;
    this.q8n_1 = initialValue;
    this.r8n_1 = targetValue;
    this.s8n_1 = this.p8n_1.o8k()(this.q8n_1);
    this.t8n_1 = this.p8n_1.o8k()(this.r8n_1);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.u8n_1 = tmp1_elvis_lhs == null ? newInstance(this.p8n_1.o8k()(this.q8n_1)) : tmp1_elvis_lhs;
    this.v8n_1 = this.o8n_1.y8n(this.s8n_1, this.t8n_1, this.u8n_1);
    this.w8n_1 = this.o8n_1.z8n(this.s8n_1, this.t8n_1, this.u8n_1);
    this.x8n_1 = 0;
  }
  protoOf(TargetBasedAnimation).a8o = function () {
    return this.p8n_1;
  };
  protoOf(TargetBasedAnimation).m8l = function () {
    return this.r8n_1;
  };
  protoOf(TargetBasedAnimation).b8o = function () {
    return this.o8n_1.b8o();
  };
  protoOf(TargetBasedAnimation).c8o = function (playTimeNanos) {
    var tmp;
    if (!this.e8o(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.o8n_1.d8o(playTimeNanos, this.s8n_1, this.t8n_1, this.u8n_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var inductionVariable = 0;
      var last = tmp0_let.g();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(tmp0_let.m(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var message = 'AnimationVector cannot contain a NaN. ' + tmp0_let + '. Animation: ' + this + ',' + (' playTimeNanos: ' + toString(playTimeNanos));
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
         while (inductionVariable < last);
      tmp = this.p8n_1.u8k()(tmp0_let);
    } else {
      tmp = this.r8n_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).f8o = function () {
    return this.v8n_1;
  };
  protoOf(TargetBasedAnimation).g8o = function (playTimeNanos) {
    var tmp;
    if (!this.e8o(playTimeNanos)) {
      tmp = this.o8n_1.h8o(playTimeNanos, this.s8n_1, this.t8n_1, this.u8n_1);
    } else {
      tmp = this.w8n_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + this.q8n_1 + ' -> ' + this.r8n_1 + ',' + ('initial velocity: ' + this.u8n_1 + ', duration: ' + toString(get_durationMillis(this)) + ' ms,') + ('animationSpec: ' + this.o8n_1);
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.o8k()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.n8n(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.i8o_1 = animationSpec;
    this.j8o_1 = typeConverter;
    this.k8o_1 = initialValue;
    this.l8o_1 = this.j8o_1.o8k()(this.k8o_1);
    this.m8o_1 = copy_1(initialVelocityVector);
    this.o8o_1 = this.j8o_1.u8k()(this.i8o_1.s8o(this.l8o_1, initialVelocityVector));
    this.q8o_1 = false;
    this.p8o_1 = this.i8o_1.t8o(this.l8o_1, initialVelocityVector);
    this.n8o_1 = copy_1(this.i8o_1.u8o(this.p8o_1, this.l8o_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.n8o_1.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.n8o_1.q8k(i, coerceIn(this.n8o_1.m(i), -this.i8o_1.v8o(), this.i8o_1.v8o()));
      }
       while (inductionVariable < last);
    this.r8o_1 = 0;
  }
  protoOf(DecayAnimation).a8o = function () {
    return this.j8o_1;
  };
  protoOf(DecayAnimation).m8l = function () {
    return this.o8o_1;
  };
  protoOf(DecayAnimation).f8o = function () {
    return this.p8o_1;
  };
  protoOf(DecayAnimation).b8o = function () {
    return this.q8o_1;
  };
  protoOf(DecayAnimation).c8o = function (playTimeNanos) {
    if (!this.e8o(playTimeNanos)) {
      return this.j8o_1.u8k()(this.i8o_1.w8o(playTimeNanos, this.l8o_1, this.m8o_1));
    } else {
      return this.o8o_1;
    }
  };
  protoOf(DecayAnimation).g8o = function (playTimeNanos) {
    if (!this.e8o(playTimeNanos)) {
      return this.i8o_1.u8o(playTimeNanos, this.l8o_1, this.m8o_1);
    } else {
      return this.n8o_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.f8o().k9(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.i8m_1 = dampingRatio;
    this.j8m_1 = stiffness;
    this.k8m_1 = visibilityThreshold;
    this.l8m_1 = 0;
  }
  protoOf(SpringSpec).n8n = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.i8m_1, this.j8m_1, convert(converter, this.k8m_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.i8m_1 === this.i8m_1 ? other.j8m_1 === this.j8m_1 : false) ? equals(other.k8m_1, this.k8m_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k8m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.i8m_1) | 0, 31) + getNumberHashCode(this.j8m_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.o8k()(data);
    }
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.x8o_1 = animation;
    this.y8o_1 = repeatMode;
    this.z8o_1 = initialStartOffset;
    this.a8p_1 = 8;
  }
  protoOf(InfiniteRepeatableSpec).n8n = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.x8o_1.n8n(converter), this.y8o_1, this.z8o_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.x8o_1, this.x8o_1) ? other.y8o_1.equals(this.y8o_1) : false) ? equals(other.z8o_1, this.z8o_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.x8o_1), 31) + this.y8o_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.z8o_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function KeyframesSpecConfig() {
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.b8p_1 = 300;
    this.c8p_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.d8p_1 = LinkedHashMap_init_$Create$();
    this.e8p_1 = 8;
  }
  protoOf(KeyframesSpecConfig).f8p = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = new KeyframeEntity(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.d8p_1.a5(timeStamp, tmp0_also);
    return tmp0_also;
  };
  protoOf(KeyframesSpecConfig).g8p = function (_this__u8e3s4, easing) {
    _this__u8e3s4.i8p_1 = easing;
  };
  protoOf(KeyframesSpecConfig).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KeyframesSpecConfig) {
      tmp_1 = this.c8p_1 === other.c8p_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.b8p_1 === other.b8p_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.d8p_1, other.d8p_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframesSpecConfig).hashCode = function () {
    return imul(imul(this.b8p_1, 31) + this.c8p_1 | 0, 31) + hashCode(this.d8p_1) | 0;
  };
  function KeyframeEntity(value, easing) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    this.h8p_1 = value;
    this.i8p_1 = easing;
    this.j8p_1 = 8;
  }
  protoOf(KeyframeEntity).k8p = function (convertToVector) {
    return to(convertToVector(this.h8p_1), this.i8p_1);
  };
  protoOf(KeyframeEntity).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof KeyframeEntity) {
      tmp_0 = equals(other.h8p_1, this.h8p_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.i8p_1, this.i8p_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframeEntity).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.h8p_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(tmp$ret$0, 31) + hashCode(this.i8p_1) | 0;
  };
  function KeyframesSpec(config) {
    this.l8p_1 = config;
    this.m8p_1 = 0;
  }
  protoOf(KeyframesSpec).equals = function (other) {
    var tmp;
    if (other instanceof KeyframesSpec) {
      tmp = this.l8p_1.equals(other.l8p_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframesSpec).hashCode = function () {
    return this.l8p_1.hashCode();
  };
  protoOf(KeyframesSpec).n8n = function (converter) {
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = this.l8p_1.d8p_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp0_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_mapValues.g()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = tmp0_mapValues.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.r();
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
      tmp$ret$1 = element.s().k8p(converter.o8k());
      tmp0_mapValuesTo.a5(tmp, tmp$ret$1);
    }
    return new VectorizedKeyframesSpec(tmp0_mapValuesTo, this.l8p_1.b8p_1, this.l8p_1.c8p_1);
  };
  function keyframes(init) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new KeyframesSpecConfig();
    // Inline function 'kotlin.contracts.contract' call
    init(tmp0_apply);
    return new KeyframesSpec(tmp0_apply);
  }
  function TweenSpec(durationMillis, delay, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.n8p_1 = durationMillis;
    this.o8p_1 = delay;
    this.p8p_1 = easing;
    this.q8p_1 = 0;
  }
  protoOf(TweenSpec).n8n = function (converter) {
    return new VectorizedTweenSpec(this.n8p_1, this.o8p_1, this.p8p_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.n8p_1 === this.n8p_1 ? other.o8p_1 === this.o8p_1 : false) ? equals(other.p8p_1, this.p8p_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.n8p_1, 31) + hashCode(this.p8p_1) | 0, 31) + this.o8p_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_getInstance();
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_8().r8p_1 : offsetType;
    return _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.t8p_1 = 300;
    this.u8p_1 = new Long(0, -2147483648);
    this.v8p_1 = 0;
  }
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.r8p_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.s8p_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    this.g8k_1 = typeConverter;
    this.h8k_1 = mutableStateOf(initialValue);
    var tmp_1 = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp_1.i8k_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.g8k_1, initialValue) : tmp1_elvis_lhs;
    this.j8k_1 = lastFrameTimeNanos;
    this.k8k_1 = finishedTimeNanos;
    this.l8k_1 = isRunning;
    this.m8k_1 = 0;
  }
  protoOf(AnimationState).f1d = function (_set____db54di) {
    value$factory();
    return this.h8k_1.f1d(_set____db54di);
  };
  protoOf(AnimationState).s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return this.h8k_1.s();
  };
  protoOf(AnimationState).z8l = function () {
    return this.g8k_1.u8k()(this.i8k_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + this.s() + ', ') + ('velocity=' + this.z8l() + ', ') + ('isRunning=' + this.l8k_1 + ', ') + ('lastFrameTimeNanos=' + toString(this.j8k_1) + ', ') + ('finishedTimeNanos=' + toString(this.k8k_1)) + ')';
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.s() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.i8k_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.j8k_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.k8k_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.l8k_1 : isRunning;
    return new AnimationState(_this__u8e3s4.g8k_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.w8j_1 = typeConverter;
    this.x8j_1 = targetValue;
    this.y8j_1 = startTimeNanos;
    this.z8j_1 = onCancel;
    this.a8k_1 = mutableStateOf(initialValue);
    this.b8k_1 = copy_1(initialVelocityVector);
    this.c8k_1 = lastFrameTimeNanos;
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.d8k_1 = new Long(0, -2147483648);
    this.e8k_1 = mutableStateOf(isRunning);
    this.f8k_1 = 8;
  }
  protoOf(AnimationScope).f1d = function (_set____db54di) {
    value$factory_1();
    return this.a8k_1.f1d(_set____db54di);
  };
  protoOf(AnimationScope).s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_2();
    return this.a8k_1.s();
  };
  protoOf(AnimationScope).w8p = function (_set____db54di) {
    isRunning$factory_1();
    return this.e8k_1.f1d(_set____db54di);
  };
  protoOf(AnimationScope).a8m = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_2();
    return this.e8k_1.s();
  };
  protoOf(AnimationScope).z8l = function () {
    return this.w8j_1.u8k()(this.b8k_1);
  };
  protoOf(AnimationScope).n8k = function () {
    this.w8p(false);
    this.z8j_1();
  };
  function createZeroVectorFrom(_this__u8e3s4, value) {
    return newInstance(_this__u8e3s4.o8k()(value));
  }
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter_2(FloatCompanionObject_getInstance()), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy_0(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.s() : value;
    velocity = velocity === VOID ? _this__u8e3s4.i8k_1.y8p_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.j8k_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.k8k_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.l8k_1 : isRunning;
    return new AnimationState(_this__u8e3s4.g8k_1, value, AnimationVector_0(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return receiver.w8p(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return receiver.w8p(value);
    });
  }
  function AnimationVector() {
    this.p8k_1 = 0;
  }
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.y8p_1 = initVal;
    this.z8p_1 = 1;
    this.a8q_1 = 8;
  }
  protoOf(AnimationVector1D).p25 = function () {
    this.y8p_1 = 0.0;
  };
  protoOf(AnimationVector1D).b8q = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).m = function (index) {
    if (index === 0) {
      return this.y8p_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).q8k = function (index, value) {
    if (index === 0) {
      this.y8p_1 = value;
    }
  };
  protoOf(AnimationVector1D).g = function () {
    return this.z8p_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.y8p_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.y8p_1 === this.y8p_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.y8p_1);
  };
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.d8q_1 = v1;
    this.e8q_1 = v2;
    this.f8q_1 = 2;
    this.g8q_1 = 8;
  }
  protoOf(AnimationVector2D).p25 = function () {
    this.d8q_1 = 0.0;
    this.e8q_1 = 0.0;
  };
  protoOf(AnimationVector2D).b8q = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).m = function (index) {
    switch (index) {
      case 0:
        return this.d8q_1;
      case 1:
        return this.e8q_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).q8k = function (index, value) {
    if (index === 0)
      this.d8q_1 = value;
    else if (index === 1)
      this.e8q_1 = value;
  };
  protoOf(AnimationVector2D).g = function () {
    return this.f8q_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.d8q_1 + ', v2 = ' + this.e8q_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.d8q_1 === this.d8q_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.e8q_1 === this.e8q_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.d8q_1), 31) + getNumberHashCode(this.e8q_1) | 0;
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.i8q_1 = v1;
    this.j8q_1 = v2;
    this.k8q_1 = v3;
    this.l8q_1 = v4;
    this.m8q_1 = 4;
    this.n8q_1 = 8;
  }
  protoOf(AnimationVector4D).p25 = function () {
    this.i8q_1 = 0.0;
    this.j8q_1 = 0.0;
    this.k8q_1 = 0.0;
    this.l8q_1 = 0.0;
  };
  protoOf(AnimationVector4D).b8q = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).m = function (index) {
    switch (index) {
      case 0:
        return this.i8q_1;
      case 1:
        return this.j8q_1;
      case 2:
        return this.k8q_1;
      case 3:
        return this.l8q_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).q8k = function (index, value) {
    switch (index) {
      case 0:
        this.i8q_1 = value;
        break;
      case 1:
        this.j8q_1 = value;
        break;
      case 2:
        this.k8q_1 = value;
        break;
      case 3:
        this.l8q_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).g = function () {
    return this.m8q_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.i8q_1 + ', v2 = ' + this.j8q_1 + ', v3 = ' + this.k8q_1 + ', v4 = ' + this.l8q_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.i8q_1 === this.i8q_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.j8q_1 === this.j8q_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.k8q_1 === this.k8q_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.l8q_1 === this.l8q_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.i8q_1), 31) + getNumberHashCode(this.j8q_1) | 0, 31) + getNumberHashCode(this.k8q_1) | 0, 31) + getNumberHashCode(this.l8q_1) | 0;
  };
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.b8q();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.q8k(i, _this__u8e3s4.m(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.q8k(i, source.m(i));
      }
       while (inductionVariable < last);
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function ComplexDouble(_real, _imaginary) {
    this.o8q_1 = _real;
    this.p8q_1 = _imaginary;
  }
  protoOf(ComplexDouble).q8q = function () {
    return this.o8q_1;
  };
  protoOf(ComplexDouble).r8q = function () {
    return this.p8q_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.o8q_1 + ', _imaginary=' + this.p8q_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.o8q_1);
    result = imul(result, 31) + getNumberHashCode(this.p8q_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.o8q_1, tmp0_other_with_cast.o8q_1))
      return false;
    if (!equals(this.p8q_1, tmp0_other_with_cast.p8q_1))
      return false;
    return true;
  };
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.abs' call
      var tmp0_sqrt = Math.abs(num);
      tmp$ret$1 = Math.sqrt(tmp0_sqrt);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.s8q_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).n8n = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.s8q_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.u8q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.v8q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.w8q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.t8q_1 = floatDecaySpec;
    this.x8q_1 = this.t8q_1.v8o();
  }
  protoOf(VectorizedFloatDecaySpec).v8o = function () {
    return this.x8q_1;
  };
  protoOf(VectorizedFloatDecaySpec).w8o = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.u8q_1 == null)) {
      this.u8q_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).q8k(i, this.t8q_1.y8q(playTimeNanos, initialValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).t8o = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.v8q_1 == null)) {
      this.v8q_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.t8q_1.z8q(initialValue.m(i), initialVelocity.m(i));
        maxDuration = tmp0_maxOf.x(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).u8o = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.v8q_1 == null)) {
      this.v8q_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).q8k(i, this.t8q_1.a8r(playTimeNanos, initialValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).s8o = function (initialValue, initialVelocity) {
    if (!!(this.w8q_1 == null)) {
      this.w8q_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).q8k(i, this.t8q_1.b8r(initialValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.c8r_1 = a;
    this.d8r_1 = b;
    this.e8r_1 = c;
    this.f8r_1 = d;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((!isNaN_0(this.c8r_1) ? !isNaN_0(this.d8r_1) : false) ? !isNaN_0(this.e8r_1) : false) ? !isNaN_0(this.f8r_1) : false)) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var message = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.c8r_1 + ', ' + this.d8r_1 + ', ' + this.e8r_1 + ', ' + this.f8r_1 + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.g8r_1 = 0;
  }
  protoOf(CubicBezierEasing).h8r = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.c8r_1, this.e8r_1, midpoint);
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp0_get_absoluteValue_aog79f = fraction - estimate;
        if (Math.abs(tmp0_get_absoluteValue_aog79f) < 0.001)
          return evaluateCubic(this, this.d8r_1, this.f8r_1, midpoint);
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.c8r_1 === other.c8r_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.d8r_1 === other.d8r_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.e8r_1 === other.e8r_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f8r_1 === other.f8r_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.c8r_1), 31) + getNumberHashCode(this.d8r_1) | 0, 31) + getNumberHashCode(this.e8r_1) | 0, 31) + getNumberHashCode(this.f8r_1) | 0;
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.i8r_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).h8r = function (fraction) {
    return this.i8r_1(fraction);
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      Spring_getInstance();
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.o8r_1 = dampingRatio;
    this.p8r_1 = stiffness;
    this.q8r_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    tmp0_also.a8s(this.o8r_1);
    tmp0_also.b8s(this.p8r_1);
    tmp_2.r8r_1 = tmp0_also;
    this.s8r_1 = 8;
  }
  protoOf(FloatSpringSpec).j8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    this.r8r_1.t8r_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.r8r_1.c8s(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).k8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    this.r8r_1.t8r_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.r8r_1.c8s(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).l8r = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).m8r = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.r8r_1.d8s();
    var tmp1_dampingRatio = this.r8r_1.z8r_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.q8r_1;
    var tmp3_initialVelocity = initialVelocity / this.q8r_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).l9(get_MillisToNanos());
  };
  protoOf(FloatSpringSpec).n8n = function (converter) {
    return this.n8r(converter);
  };
  function clampPlayTime($this, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = $this.f8s_1;
    tmp$ret$0 = playTime.m9(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.e8s_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    var tmp;
    if (duration === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = duration;
    }
    duration = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.e8s_1 = duration;
    this.f8s_1 = delay;
    this.g8s_1 = easing;
    this.h8s_1 = 0;
  }
  protoOf(FloatTweenSpec).j8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.e8s_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.e8s_1;
      tmp = clampedPlayTime.vk() / tmp0_div;
    }
    var rawFraction = tmp;
    var fraction = this.g8s_1.h8r(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).m8r = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.f8s_1 + this.e8s_1 | 0).l9(get_MillisToNanos());
  };
  protoOf(FloatTweenSpec).k8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.x(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.m9(new Long(1, 0));
    var startNum = this.j8r(tmp$ret$0.l9(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.j8r(clampedPlayTime.l9(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).n8n = function (converter) {
    return this.n8r(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.b8t_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).w50 = function ($completion) {
    var tmp = this.v50($completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = withFrameNanos(this.b8t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).v50 = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.b8t_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.w50($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q8s_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            var tmp_0 = this;
            tmp_0.r8s_1 = this.p5().u6(Key_getInstance());
            if (this.r8s_1 == null) {
              this.dl_1 = 2;
              suspendResult = withFrameNanos(this.q8s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = this.r8s_1.c8t(withInfiniteAnimationFrameNanos$slambda_0(this.q8s_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s8s_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.s8s_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            return this.s8s_1;
          case 4:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 4) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function InfiniteTransition$run$composable$slambda$lambda($toolingOverride, this$0, $durationScale, $this_LaunchedEffect) {
    return function (it) {
      var tmp0_safe_receiver = $toolingOverride.s();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s();
      var currentTimeNanos = tmp1_elvis_lhs == null ? it : tmp1_elvis_lhs;
      var tmp;
      var tmp_0;
      var tmp_1 = this$0.g8t_1;
      AnimationConstants_getInstance();
      if (tmp_1.equals(new Long(0, -2147483648))) {
        tmp_0 = true;
      } else {
        tmp_0 = !($durationScale._v === get_durationScale($this_LaunchedEffect.om()));
      }
      if (tmp_0) {
        this$0.g8t_1 = it;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        var tmp0_forEach = this$0.e8t_1;
        // Inline function 'kotlin.contracts.contract' call
        var size = tmp0_forEach.e23_1;
        if (size > 0) {
          var i = 0;
          var tmp_2 = tmp0_forEach.c23_1;
          var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run$composable.<anonymous>.<anonymous>.<anonymous>' call
            var tmp1_anonymous = content[i];
            tmp1_anonymous.p25();
            var tmp0 = i;
            i = tmp0 + 1 | 0;
          }
           while (i < size);
        }
        $durationScale._v = get_durationScale($this_LaunchedEffect.om());
        tmp = Unit_getInstance();
      }
      var tmp_3;
      if ($durationScale._v === 0.0) {
        var tmp2_forEach = this$0.e8t_1;
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = tmp2_forEach.e23_1;
        var tmp_4;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_5 = tmp2_forEach.c23_1;
          var content_0 = isArray(tmp_5) ? tmp_5 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.animation.core.InfiniteTransition.run$composable.<anonymous>.<anonymous>.<anonymous>' call
            var tmp3_anonymous = content_0[i_0];
            tmp3_anonymous.u8t();
            var tmp0_0 = i_0;
            i_0 = tmp0_0 + 1 | 0;
          }
           while (i_0 < size_0);
          tmp_4 = Unit_getInstance();
        }
        tmp_3 = tmp_4;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.div' call
        var tmp4_div = currentTimeNanos.m9(this$0.g8t_1);
        var tmp5_div = $durationScale._v;
        tmp$ret$0 = tmp4_div.vk() / tmp5_div;
        var playTimeNanos = numberToLong(tmp$ret$0);
        onFrame(this$0, playTimeNanos);
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function InfiniteTransition$run$composable$slambda$lambda_0($this_LaunchedEffect) {
    return function () {
      return get_durationScale($this_LaunchedEffect.om());
    };
  }
  function InfiniteTransition$run$composable$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$composable$slambda$slambda).e8u = function (it, $completion) {
    var tmp = this.f8u(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(InfiniteTransition$run$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.e8u((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          return this.d8u_1 > 0.0;
        } else if (tmp === 1) {
          throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(InfiniteTransition$run$composable$slambda$slambda).f8u = function (it, completion) {
    var i = new InfiniteTransition$run$composable$slambda$slambda(completion);
    i.d8u_1 = it;
    return i;
  };
  function InfiniteTransition$run$composable$slambda$slambda_0(resultContinuation) {
    var i = new InfiniteTransition$run$composable$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.e8u(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TransitionAnimationState($outer, initialValue, targetValue, typeConverter, animationSpec, label) {
    this.t8t_1 = $outer;
    this.j8t_1 = initialValue;
    this.k8t_1 = targetValue;
    this.l8t_1 = typeConverter;
    this.m8t_1 = label;
    this.n8t_1 = mutableStateOf(this.j8t_1);
    this.o8t_1 = animationSpec;
    this.p8t_1 = TargetBasedAnimation_init_$Create$(this.o8t_1, this.l8t_1, this.j8t_1, this.k8t_1);
    this.q8t_1 = false;
    this.r8t_1 = false;
    this.s8t_1 = new Long(0, 0);
  }
  protoOf(TransitionAnimationState).f1d = function (_set____db54di) {
    value$factory_3();
    return this.n8t_1.f1d(_set____db54di);
  };
  protoOf(TransitionAnimationState).s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_4();
    return this.n8t_1.s();
  };
  protoOf(TransitionAnimationState).g8u = function (initialValue, targetValue, animationSpec) {
    this.j8t_1 = initialValue;
    this.k8t_1 = targetValue;
    this.o8t_1 = animationSpec;
    this.p8t_1 = TargetBasedAnimation_init_$Create$(animationSpec, this.l8t_1, initialValue, targetValue);
    _set_refreshChildNeeded__4sbmm9(this.t8t_1, true);
    this.q8t_1 = false;
    this.r8t_1 = true;
  };
  protoOf(TransitionAnimationState).h8u = function (playTimeNanos) {
    _set_refreshChildNeeded__4sbmm9(this.t8t_1, false);
    if (this.r8t_1) {
      this.r8t_1 = false;
      this.s8t_1 = playTimeNanos;
    }
    var playTime = playTimeNanos.m9(this.s8t_1);
    this.f1d(this.p8t_1.c8o(playTime));
    this.q8t_1 = this.p8t_1.e8o(playTime);
  };
  protoOf(TransitionAnimationState).u8t = function () {
    this.f1d(this.p8t_1.r8n_1);
    this.r8t_1 = true;
  };
  protoOf(TransitionAnimationState).p25 = function () {
    this.r8t_1 = true;
  };
  function _set_refreshChildNeeded__4sbmm9($this, _set____db54di) {
    refreshChildNeeded$factory();
    return $this.f8t_1.f1d(_set____db54di);
  }
  function _get_refreshChildNeeded__t5joi3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    refreshChildNeeded$factory_0();
    return $this.f8t_1.s();
  }
  function _set_isRunning__kpbg34_0($this, _set____db54di) {
    isRunning$factory_3();
    return $this.h8t_1.f1d(_set____db54di);
  }
  function _get_isRunning__l0y5hg($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_4();
    return $this.h8t_1.s();
  }
  function onFrame($this, playTimeNanos) {
    var allFinished = true;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var tmp0_forEach = $this.e8t_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.e23_1;
    if (size > 0) {
      var i = 0;
      var tmp = tmp0_forEach.c23_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        // Inline function 'androidx.compose.animation.core.InfiniteTransition.onFrame.<anonymous>' call
        var tmp1_anonymous = content[i];
        if (!tmp1_anonymous.q8t_1) {
          tmp1_anonymous.h8u(playTimeNanos);
        }
        if (!tmp1_anonymous.q8t_1) {
          allFinished = false;
        }
        i = i + 1 | 0;
      }
       while (i < size);
    }
    _set_isRunning__kpbg34_0($this, !allFinished);
  }
  function InfiniteTransition$run$composable$slambda($toolingOverride, this$0, resultContinuation) {
    this.q8u_1 = $toolingOverride;
    this.r8u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InfiniteTransition$run$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(InfiniteTransition$run$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InfiniteTransition$run$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.t8u_1 = {_v: 1.0};
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dl_1 = 6;
              continue $sm;
            }

            this.dl_1 = 2;
            suspendResult = withInfiniteAnimationFrameNanos(InfiniteTransition$run$composable$slambda$lambda(this.q8u_1, this.r8u_1, this.t8u_1, this.s8u_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (this.t8u_1._v === 0.0) {
              this.dl_1 = 3;
              var tmp_0 = snapshotFlow(InfiniteTransition$run$composable$slambda$lambda_0(this.s8u_1));
              suspendResult = first(tmp_0, InfiniteTransition$run$composable$slambda$slambda_0(null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 4;
              continue $sm;
            }

          case 3:
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.dl_1 = 1;
            continue $sm;
          case 5:
            throw this.gl_1;
          case 6:
            return Unit_getInstance();
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
  protoOf(InfiniteTransition$run$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new InfiniteTransition$run$composable$slambda(this.q8u_1, this.r8u_1, completion);
    i.s8u_1 = $this$LaunchedEffect;
    return i;
  };
  function InfiniteTransition$run$composable$slambda_0($toolingOverride, this$0, resultContinuation) {
    var i = new InfiniteTransition$run$composable$slambda($toolingOverride, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InfiniteTransition$run$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.u8u($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function InfiniteTransition(label) {
    this.d8t_1 = label;
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.e8t_1 = new MutableVector(tmp$ret$0, 0);
    this.f8t_1 = mutableStateOf(false);
    var tmp_0 = this;
    AnimationConstants_getInstance();
    tmp_0.g8t_1 = new Long(0, -2147483648);
    this.h8t_1 = mutableStateOf(true);
    this.i8t_1 = 8;
  }
  protoOf(InfiniteTransition).v8u = function (animation) {
    this.e8t_1.g23(animation);
    _set_refreshChildNeeded__4sbmm9(this, true);
  };
  protoOf(InfiniteTransition).w8u = function (animation) {
    this.e8t_1.k2l(animation);
  };
  protoOf(InfiniteTransition).u8u = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1838922378);
    sourceInformation($composer_0, 'C(run$composable)172@7001L67,176@7128L1558:InfiniteTransition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1838922378, $changed, -1, 'androidx.compose.animation.core.InfiniteTransition.run$composable (InfiniteTransition.kt:171)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.InfiniteTransition.run$composable.<anonymous>' call
      var value = mutableStateOf(null);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var toolingOverride = tmp0;
    if (_get_isRunning__l0y5hg(this) ? true : _get_refreshChildNeeded__t5joi3(this)) {
      LaunchedEffect$composable(this, InfiniteTransition$run$composable$slambda_0(toolingOverride, this, null), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(InfiniteTransition$run$composable$lambda(this, $changed));
    }
  };
  function rememberInfiniteTransition$composable(label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.m1r(-725029285);
    sourceInformation($composer_0, 'C(rememberInfiniteTransition$composable)45@1981L38,46@2043L5:InfiniteTransition.kt#pdpnli');
    if (!(($default & 1) === 0)) {
      label_0._v = 'InfiniteTransition';
    }
    if (isTraceInProgress()) {
      traceEventStart(-725029285, $changed, -1, 'androidx.compose.animation.core.rememberInfiniteTransition$composable (InfiniteTransition.kt:44)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.rememberInfiniteTransition$composable.<anonymous>' call
      var value = new InfiniteTransition(label_0._v);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var infiniteTransition = tmp0;
    infiniteTransition.u8u($composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return infiniteTransition;
  }
  function animateValue$composable(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.m1r(-1438202900);
    sourceInformation($composer_0, 'C(animateValue$composable)P(1,3,4)262@10743L151,268@10900L357,280@11263L166:InfiniteTransition.kt#pdpnli');
    if (!(($default & 16) === 0)) {
      label_0._v = 'ValueAnimation';
    }
    if (isTraceInProgress()) {
      traceEventStart(-1438202900, $changed, -1, 'androidx.compose.animation.core.animateValue$composable (InfiniteTransition.kt:254)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.animateValue$composable.<anonymous>' call
      var value = new TransitionAnimationState(_this__u8e3s4, initialValue, targetValue, typeConverter, animationSpec, label_0._v);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var transitionAnimation = tmp0;
    SideEffect$composable(animateValue$composable$lambda(initialValue, transitionAnimation, targetValue, animationSpec), $composer_0, 0);
    DisposableEffect$composable(transitionAnimation, animateValue$composable$lambda_0(_this__u8e3s4, transitionAnimation), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return transitionAnimation;
  }
  function animateFloat$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.m1r(-2113753375);
    sourceInformation($composer_0, 'C(animateFloat$composable)P(1,3)316@12588L84:InfiniteTransition.kt#pdpnli');
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-2113753375, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable (InfiniteTransition.kt:310)');
    }
    var tmp0 = animateValue$composable(_this__u8e3s4, initialValue, targetValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), animationSpec, label_0, $composer_0, 8 | 112 & $changed | 896 & $changed | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function animateValue$composable$lambda($initialValue, $transitionAnimation, $targetValue, $animationSpec) {
    return function () {
      var tmp;
      if (!equals($initialValue, $transitionAnimation.j8t_1) ? true : !equals($targetValue, $transitionAnimation.k8t_1)) {
        $transitionAnimation.g8u($initialValue, $targetValue, $animationSpec);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($this_animateValue$composable, $transitionAnimation) {
    this.x8u_1 = $this_animateValue$composable;
    this.y8u_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv).gp = function () {
    // Inline function 'androidx.compose.animation.core.animateValue$composable.<anonymous>.<anonymous>' call
    this.x8u_1.w8u(this.y8u_1);
  };
  function animateValue$composable$lambda_0($this_animateValue$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_animateValue$composable.v8u($transitionAnimation);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($this_animateValue$composable, $transitionAnimation);
      return tmp$ret$0;
    };
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function refreshChildNeeded$factory() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function refreshChildNeeded$factory_0() {
    return getPropertyCallableRef('refreshChildNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_refreshChildNeeded__t5joi3(receiver);
    }, function (receiver, value) {
      return _set_refreshChildNeeded__4sbmm9(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return _get_isRunning__l0y5hg(receiver);
    }, function (receiver, value) {
      return _set_isRunning__kpbg34_0(receiver, value);
    });
  }
  function Mutator(priority, job) {
    this.z8u_1 = priority;
    this.a8v_1 = job;
  }
  protoOf(Mutator).b8v = function (other) {
    return this.z8u_1.i7(other.z8u_1) >= 0;
  };
  protoOf(Mutator).c8v = function () {
    return this.a8v_1.xn(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.r8k_1.sv();
      if (oldMutator == null ? true : mutator.b8v(oldMutator)) {
        if ($this.r8k_1.r27(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.c8v();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.l8v_1 = $priority;
    this.m8v_1 = this$0;
    this.n8v_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).u8v = function ($this$coroutineScope, $completion) {
    var tmp = this.u1e($this$coroutineScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(MutatorMutex$mutate$slambda).yl = function (p1, $completion) {
    return this.u8v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 13;
            this.p8v_1 = new Mutator(this.l8v_1, ensureNotNull(this.o8v_1.om().u6(Key_getInstance_0())));
            tryMutateOrCancel(this.m8v_1, this.p8v_1);
            this.dl_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.r8v_1 = this.m8v_1.s8k_1;
            this.dl_1 = 2;
            suspendResult = this.r8v_1.u1m(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.el_1 = 12;
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.el_1 = 11;
            this.dl_1 = 6;
            suspendResult = this.n8v_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.t8v_1 = suspendResult;
            this.dl_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.t8v_1;
            this.m8v_1.r8k_1.r27(this.p8v_1, null);
            this.s8v_1 = tmp_1;
            this.el_1 = 13;
            this.dl_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.s8v_1;
            this.r8v_1.w1m(null);
            this.q8v_1 = tmp_3;
            this.dl_1 = 10;
            continue $sm;
          case 9:
            this.r8v_1.w1m(null);
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 10;
            continue $sm;
          case 10:
            return this.q8v_1;
          case 11:
            this.el_1 = 12;
            var t = this.gl_1;
            this.m8v_1.r8k_1.r27(this.p8v_1, null);
            throw t;
          case 12:
            this.el_1 = 13;
            var t_0 = this.gl_1;
            this.r8v_1.w1m(null);
            throw t_0;
          case 13:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 13) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).u1e = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.l8v_1, this.m8v_1, this.n8v_1, completion);
    i.o8v_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.u8v($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.r8k_1 = new AtomicReference(null);
    this.s8k_1 = Mutex();
  }
  protoOf(MutatorMutex).v8v = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).t8k = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.v8v(priority, block, $completion) : $super.v8v.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp0_plus = -dampingCoefficient;
    var tmp1_plus = complexSqrt(partialRoot);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    tmp1_plus.o8q_1 = tmp1_plus.o8q_1 + tmp0_plus;
    tmp1_plus.o8q_1 = tmp1_plus.o8q_1 * 0.5;
    tmp1_plus.p8q_1 = tmp1_plus.p8q_1 * 0.5;
    var firstRoot = tmp1_plus;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.minus' call
    var tmp3_minus = -dampingCoefficient;
    var tmp4_minus = complexSqrt(partialRoot);
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    tmp4_minus.o8q_1 = tmp4_minus.o8q_1 * -1;
    tmp4_minus.p8q_1 = tmp4_minus.p8q_1 * -1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    tmp4_minus.o8q_1 = tmp4_minus.o8q_1 + tmp3_minus;
    tmp4_minus.o8q_1 = tmp4_minus.o8q_1 * 0.5;
    tmp4_minus.p8q_1 = tmp4_minus.p8q_1 * 0.5;
    var secondRoot = tmp4_minus;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.q8q();
    var r2 = secondRoot.q8q();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    var tmp1_ln = Math.abs(tmp0_abs);
    var t1 = Math.log(tmp1_ln) / r1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = delta / c2;
    var tmp3_ln = Math.abs(tmp2_abs);
    var t2 = Math.log(tmp3_ln) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var tmp4_ln = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(tmp4_ln) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var tmp5_ln = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(tmp5_ln) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    // Inline function 'kotlin.math.abs' call
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var tmp6_exp = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(tmp6_exp);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var tmp7_exp = r2 * tCurr;
    var tmp8_abs = tmp_2 + tmp_3 * Math.exp(tmp7_exp);
    if (Math.abs(tmp8_abs) < 1.0E-4) {
      return tCurr;
    }
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp9_iterateNewtonsMethod = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = r1 * tmp9_iterateNewtonsMethod;
      var tmp_4 = c1 * Math.exp(tmp0_exp);
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = r2 * tmp9_iterateNewtonsMethod;
      var tmp_5 = tmp_4 + c2 * Math.exp(tmp1_exp) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp_0 = r1 * tmp9_iterateNewtonsMethod;
      var tmp_7 = tmp_6 * Math.exp(tmp0_exp_0);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp_0 = r2 * tmp9_iterateNewtonsMethod;
      tCurr = tmp9_iterateNewtonsMethod - tmp_5 / (tmp_7 + tmp_8 * Math.exp(tmp1_exp_0));
      // Inline function 'kotlin.math.abs' call
      var tmp10_abs = tLast - tCurr;
      tDelta = Math.abs(tmp10_abs);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.q8q();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.r8q();
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = c1 * c1 + c2 * c2;
    var c = Math.sqrt(tmp0_sqrt);
    // Inline function 'kotlin.math.ln' call
    var tmp1_ln = delta / c;
    return Math.log(tmp1_ln) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.q8q();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    var tmp1_ln = Math.abs(tmp0_abs);
    var t1 = Math.log(tmp1_ln) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs_0 = delta / c2;
    var tmp1_ln_0 = Math.abs(tmp0_abs_0);
    var guess = Math.log(tmp1_ln_0);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ln' call
        // Inline function 'kotlin.math.abs' call
        var tmp2_abs = t / r;
        var tmp3_ln = Math.abs(tmp2_abs);
        t = guess - Math.log(tmp3_ln);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var tmp2_exp = r * tInflection;
    var tmp_0 = c1 * Math.exp(tmp2_exp);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var tmp3_exp = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(tmp3_exp);
    var tmp_2;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 ? -xInflection < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp4_iterateNewtonsMethod = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * tmp4_iterateNewtonsMethod;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = r * tmp4_iterateNewtonsMethod;
      var tmp_4 = tmp_3 * Math.exp(tmp0_exp) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * tmp4_iterateNewtonsMethod + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp_0 = r * tmp4_iterateNewtonsMethod;
      tCurr = tmp4_iterateNewtonsMethod - tmp_4 / (tmp_5 * Math.exp(tmp0_exp_0));
      // Inline function 'kotlin.math.abs' call
      var tmp5_abs = tLast - tCurr;
      tDelta = Math.abs(tmp5_abs);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = r1 * tInflection;
    var tmp = c1 * Math.exp(tmp0_exp);
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = r2 * tInflection;
    return tmp + c2 * Math.exp(tmp1_exp);
  }
  var UNSET;
  function init($this) {
    if ($this.v8r_1) {
      return Unit_getInstance();
    }
    if ($this.t8r_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.z8r_1 * $this.z8r_1;
    if ($this.z8r_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.z8r_1 * $this.u8r_1;
      var tmp_1 = $this.u8r_1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp0_sqrt = dampingRatioSquared - 1;
      tmp.w8r_1 = tmp_0 + tmp_1 * Math.sqrt(tmp0_sqrt);
      var tmp_2 = $this;
      var tmp_3 = -$this.z8r_1 * $this.u8r_1;
      var tmp_4 = $this.u8r_1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp1_sqrt = dampingRatioSquared - 1;
      tmp_2.x8r_1 = tmp_3 - tmp_4 * Math.sqrt(tmp1_sqrt);
    } else if ($this.z8r_1 >= 0 ? $this.z8r_1 < 1 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.u8r_1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp2_sqrt = 1 - dampingRatioSquared;
      tmp_5.y8r_1 = tmp_6 * Math.sqrt(tmp2_sqrt);
    }
    $this.v8r_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.t8r_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    Spring_getInstance();
    tmp.u8r_1 = Math.sqrt(50.0);
    this.v8r_1 = false;
    this.w8r_1 = 0.0;
    this.x8r_1 = 0.0;
    this.y8r_1 = 0.0;
    var tmp_0 = this;
    Spring_getInstance();
    tmp_0.z8r_1 = 1.0;
  }
  protoOf(SpringSimulation).b8s = function (value) {
    if (this.d8s() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.u8r_1 = Math.sqrt(value);
    this.v8r_1 = false;
  };
  protoOf(SpringSimulation).d8s = function () {
    return this.u8r_1 * this.u8r_1;
  };
  protoOf(SpringSimulation).a8s = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.z8r_1 = value;
    this.v8r_1 = false;
  };
  protoOf(SpringSimulation).c8s = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.t8r_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.pd() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.z8r_1 > 1) {
      var coeffA = adjustedDisplacement - (this.x8r_1 * adjustedDisplacement - lastVelocity) / (this.x8r_1 - this.w8r_1);
      var coeffB = (this.x8r_1 * adjustedDisplacement - lastVelocity) / (this.x8r_1 - this.w8r_1);
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = this.x8r_1 * deltaT;
      var tmp = coeffA * Math.exp(tmp0_exp);
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = this.w8r_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(tmp1_exp);
      var tmp_0 = coeffA * this.x8r_1;
      // Inline function 'kotlin.math.exp' call
      var tmp2_exp = this.x8r_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(tmp2_exp);
      var tmp_2 = coeffB * this.w8r_1;
      // Inline function 'kotlin.math.exp' call
      var tmp3_exp = this.w8r_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(tmp3_exp);
    } else if (this.z8r_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.u8r_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp4_exp = -this.u8r_1 * deltaT;
      displacement = tmp_3 * Math.exp(tmp4_exp);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp5_exp = -this.u8r_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(tmp5_exp) * -this.u8r_1;
      // Inline function 'kotlin.math.exp' call
      var tmp6_exp = -this.u8r_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(tmp6_exp);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.y8r_1 * (this.z8r_1 * this.u8r_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var tmp7_exp = -this.z8r_1 * this.u8r_1 * deltaT;
      var tmp_6 = Math.exp(tmp7_exp);
      // Inline function 'kotlin.math.cos' call
      var tmp8_cos = this.y8r_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(tmp8_cos);
      // Inline function 'kotlin.math.sin' call
      var tmp9_sin = this.y8r_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(tmp9_sin));
      var tmp_8 = displacement * -this.u8r_1 * this.z8r_1;
      // Inline function 'kotlin.math.exp' call
      var tmp10_exp = -this.z8r_1 * this.u8r_1 * deltaT;
      var tmp_9 = Math.exp(tmp10_exp);
      var tmp_10 = -this.y8r_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var tmp11_sin = this.y8r_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(tmp11_sin);
      var tmp_12 = this.y8r_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var tmp12_cos = this.y8r_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(tmp12_cos));
    }
    var newValue = displacement + this.t8r_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.z9(32).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.vb(new Long(-1, 0)).f1();
    return floatFromBits(tmp1_fromBits);
  }
  function Motion(value, velocity) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(value));
    var v2 = toLong(toBits(velocity));
    tmp$ret$0 = v1.q7(32).sk(v2.vb(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    var tmp;
    if (startTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = startTimeNanos;
    }
    startTimeNanos = tmp;
    var tmp_0;
    if (block === VOID) {
      tmp_0 = animate$lambda;
    } else {
      tmp_0 = block;
    }
    block = tmp_0;
    var tmp_1 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_1.fl_1 = Unit_getInstance();
    tmp_1.gl_1 = null;
    return tmp_1.ml();
  }
  function updateState(_this__u8e3s4, state) {
    state.f1d(_this__u8e3s4.s());
    copyFrom(state.i8k_1, _this__u8e3s4.b8k_1);
    state.k8k_1 = _this__u8e3s4.d8k_1;
    state.j8k_1 = _this__u8e3s4.c8k_1;
    state.l8k_1 = _this__u8e3s4.a8m();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u6(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y5g();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.f8o();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      tmp$ret$0 = frameTimeNanos.m9(_this__u8e3s4.y8j_1).vk() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.c8k_1 = frameTimeNanos;
    _this__u8e3s4.f1d(anim.c8o(playTimeNanos));
    _this__u8e3s4.b8k_1 = anim.g8o(playTimeNanos);
    var isLastFrame = anim.e8o(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.d8k_1 = _this__u8e3s4.c8k_1;
      _this__u8e3s4.w8p(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter_2(FloatCompanionObject_getInstance()), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.s();
    var tmp1_typeConverter = _this__u8e3s4.g8k_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.i8k_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.j8k_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    return animate(_this__u8e3s4, anim, tmp_0, block, $completion);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.s();
    var tmp1_initialVelocityVector = _this__u8e3s4.i8k_1;
    var tmp2_typeConverter = _this__u8e3s4.g8k_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.j8k_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    return animate(_this__u8e3s4, anim, tmp_0, block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.o8k()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.o8k()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animate$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.l8k_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp = $animation.a8o();
      var tmp_0 = $animation.m8l();
      var tmp0_apply = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(tmp0_apply, it, $durationScale, $animation, $this_animate, $block);
      tmp$ret$0 = tmp0_apply;
      $lateInitScope._v = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.l8k_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_AnimationDebugDurationScale();
      tmp$ret$0 = it.k9(toLong(tmp0_div));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function animateDecay$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.s(), $typeConverter.u8k()($this$animate.b8k_1));
      return Unit_getInstance();
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e8w_1 = _this__u8e3s4;
    this.f8w_1 = animation;
    this.g8w_1 = startTimeNanos;
    this.h8w_1 = block;
  }
  protoOf($animateCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 7;
            this.i8w_1 = this.f8w_1.c8o(new Long(0, 0));
            this.j8w_1 = this.f8w_1.g8o(new Long(0, 0));
            this.k8w_1 = {_v: null};
            this.el_1 = 6;
            AnimationConstants_getInstance();
            if (this.g8w_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.l8w_1 = get_durationScale(this.p5());
              this.dl_1 = 1;
              suspendResult = callWithFrameNanos(this.f8w_1, animate$lambda_0(this.k8w_1, this.i8w_1, this.f8w_1, this.j8w_1, this.l8w_1, this.e8w_1, this.h8w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.f8w_1.a8o();
              var tmp_2 = this.f8w_1.m8l();
              var tmp0_apply = new AnimationScope(this.i8w_1, tmp_1, this.j8w_1, this.g8w_1, tmp_2, this.g8w_1, true, animate$lambda_1(this.e8w_1));
              doAnimationFrameWithScale(tmp0_apply, this.g8w_1, get_durationScale(this.p5()), this.f8w_1, this.e8w_1, this.h8w_1);
              this.k8w_1._v = tmp0_apply;
              this.dl_1 = 2;
              continue $sm;
            }

          case 1:
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.k8w_1._v).a8m()) {
              this.dl_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.m8w_1 = get_durationScale(this.p5());
            this.dl_1 = 4;
            suspendResult = callWithFrameNanos(this.f8w_1, animate$lambda_2(this.k8w_1, this.m8w_1, this.f8w_1, this.e8w_1, this.h8w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.dl_1 = 3;
            continue $sm;
          case 5:
            this.el_1 = 7;
            this.dl_1 = 8;
            continue $sm;
          case 6:
            this.el_1 = 7;
            var tmp_4 = this.gl_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.gl_1;
              var tmp0_safe_receiver = this.k8w_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.w8p(false);
              }
              var tmp1_safe_receiver = this.k8w_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c8k_1, this.e8w_1.j8k_1)) {
                this.e8w_1.l8k_1 = false;
              }
              throw e;
            } else {
              throw this.gl_1;
            }

          case 7:
            throw this.gl_1;
          case 8:
            this.el_1 = 7;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.el_1 === 7) {
          throw e_0;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v8w_1 = _this__u8e3s4;
    this.w8w_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            if (this.v8w_1.b8o()) {
              this.dl_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.w8w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.w8w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.x8w_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.x8w_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            return this.x8w_1;
          case 4:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 4) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    targetValue$factory_1();
    return $this.a8x_1.f1d(_set____db54di);
  }
  function _get_targetValue__jjlmb5($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_2();
    return $this.a8x_1.s();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    animationSpec$factory();
    return $this.b8x_1.f1d(_set____db54di);
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    animation$factory();
    return $this.c8x_1.f1d(_set____db54di);
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    offsetTimeNanos$factory();
    return $this.e8x_1.j2k(_set____db54di);
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    offsetTimeNanos$factory_0();
    return $this.e8x_1.k2k();
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    needsReset$factory();
    return $this.f8x_1.f1d(_set____db54di);
  }
  function _get_needsReset__mzz76h($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    needsReset$factory_0();
    return $this.f8x_1.s();
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.k8x();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.k8x();
      } else {
        tmp_0 = $this.i8x_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.k8x();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.y8w_1, initialValue, _get_targetValue__jjlmb5($this), $this.h8x_1));
    onChildAnimationUpdated($this.j8x_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.s() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.o8x_1 = $outer;
    this.l8x_1 = animation;
    this.m8x_1 = transitionSpec;
    this.n8x_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).p8x = function (segment) {
    var targetValue = this.n8x_1(segment.q8x());
    if (this.o8x_1.x8x_1.l8y()) {
      var initialValue = this.n8x_1(segment.s8x());
      this.l8x_1.t8x(initialValue, targetValue, this.m8x_1(segment));
    } else {
      this.l8x_1.r8x(targetValue, this.m8x_1(segment));
    }
  };
  protoOf(DeferredAnimationData).s = function () {
    this.p8x(this.o8x_1.x8x_1.m8y());
    return this.l8x_1.s();
  };
  function Transition$animateTo$composable$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.l8y()) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = 1;
        tmp$ret$0 = it.k9(toLong(tmp0_div));
        this$0.n8y(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    segment$factory();
    return $this.b8y_1.f1d(_set____db54di);
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    startTimeNanos$factory();
    return $this.d8y_1.j2k(_set____db54di);
  }
  function _get_startTimeNanos__r31kgr($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    startTimeNanos$factory_0();
    return $this.d8y_1.k2k();
  }
  function onChildAnimationUpdated($this) {
    $this.o8y(true);
    if ($this.l8y()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $this.f8y_1.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.f8o();
        maxDurationNanos = tmp0_max.x(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        element.p8y($this.i8y_1);
      }
      $this.o8y(false);
    }
  }
  function TransitionAnimationState_0($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.j8x_1 = $outer;
    this.y8w_1 = typeConverter;
    this.z8w_1 = label;
    this.a8x_1 = mutableStateOf(initialValue);
    this.b8x_1 = mutableStateOf(spring());
    this.c8x_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.k8x(), this.y8w_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.d8x_1 = mutableStateOf(true);
    this.e8x_1 = mutableLongStateOf(new Long(0, 0));
    this.f8x_1 = mutableStateOf(false);
    this.g8x_1 = mutableStateOf(initialValue);
    this.h8x_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().z2(this.y8w_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.y8w_1.o8k()(initialValue);
      var inductionVariable = 0;
      var last = vector.g();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.q8k(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.y8w_1.u8k()(vector);
    }
    var visibilityThreshold = tmp;
    this.i8x_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState_0).k8x = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    animationSpec$factory_0();
    return this.b8x_1.s();
  };
  protoOf(TransitionAnimationState_0).q8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    animation$factory_0();
    return this.c8x_1.s();
  };
  protoOf(TransitionAnimationState_0).r8y = function (_set____db54di) {
    isFinished$factory();
    return this.d8x_1.f1d(_set____db54di);
  };
  protoOf(TransitionAnimationState_0).s8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isFinished$factory_0();
    return this.d8x_1.s();
  };
  protoOf(TransitionAnimationState_0).f1d = function (_set____db54di) {
    value$factory_5();
    return this.g8x_1.f1d(_set____db54di);
  };
  protoOf(TransitionAnimationState_0).s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_6();
    return this.g8x_1.s();
  };
  protoOf(TransitionAnimationState_0).f8o = function () {
    return this.q8y().v8n_1;
  };
  protoOf(TransitionAnimationState_0).t8y = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      // Inline function 'kotlin.Long.div' call
      var scaledTime = playTimeNanos.m9(_get_offsetTimeNanos__sdn5qq(this)).vk() / durationScale;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isNaN_0(scaledTime)) {
        // Inline function 'androidx.compose.animation.core.TransitionAnimationState.onPlayTimeChanged.<anonymous>' call
        var message = 'Duration scale adjusted time is NaN. Duration scale: ' + durationScale + ',' + ('playTimeNanos: ' + toString(playTimeNanos) + ', offsetTimeNanos: ' + toString(_get_offsetTimeNanos__sdn5qq(this)));
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = numberToLong(scaledTime);
    } else {
      tmp = this.q8y().v8n_1;
    }
    var playTime = tmp;
    this.f1d(this.q8y().c8o(playTime));
    this.h8x_1 = this.q8y().g8o(playTime);
    if (this.q8y().e8o(playTime)) {
      this.r8y(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  protoOf(TransitionAnimationState_0).p8y = function (playTimeNanos) {
    this.f1d(this.q8y().c8o(playTimeNanos));
    this.h8x_1 = this.q8y().g8o(playTimeNanos);
  };
  protoOf(TransitionAnimationState_0).u8y = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  protoOf(TransitionAnimationState_0).r8x = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, VOID, !this.s8y());
      this.r8y(false);
      _set_offsetTimeNanos__i9wy86(this, this.j8x_1.v8y());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  protoOf(TransitionAnimationState_0).t8x = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.q8y().q8n_1, initialValue) ? equals(this.q8y().r8n_1, targetValue) : false) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.w8y_1 = initialState;
    this.x8y_1 = targetState;
  }
  protoOf(SegmentImpl).s8x = function () {
    return this.w8y_1;
  };
  protoOf(SegmentImpl).q8x = function () {
    return this.x8y_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.w8y_1, other.s8x());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.x8y_1, other.q8x());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.w8y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.x8y_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.x8x_1 = $outer;
    this.u8x_1 = typeConverter;
    this.v8x_1 = label;
    this.w8x_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).z8y = function (_set____db54di) {
    data$factory();
    return this.w8x_1.f1d(_set____db54di);
  };
  protoOf(DeferredAnimation).a8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    data$factory_0();
    return this.w8x_1.s();
  };
  protoOf(DeferredAnimation).b8z = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.a8z();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new DeferredAnimationData(this, new TransitionAnimationState_0(this.x8x_1, targetValueByState(this.x8x_1.c8z()), createZeroVectorFrom(this.u8x_1, targetValueByState(this.x8x_1.c8z())), this.u8x_1, this.v8x_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.z8y(tmp0_apply);
      this.x8x_1.d8z(tmp0_apply.l8x_1);
      tmp = tmp0_apply;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.n8x_1 = targetValueByState;
    animData.m8x_1 = transitionSpec;
    animData.p8x(this.x8x_1.m8y());
    return animData;
  };
  protoOf(DeferredAnimation).e8z = function () {
    var tmp0_safe_receiver = this.a8z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.l8x_1.t8x(tmp0_safe_receiver.n8x_1(this.x8x_1.m8y().s8x()), tmp0_safe_receiver.n8x_1(this.x8x_1.m8y().q8x()), tmp0_safe_receiver.m8x_1(this.x8x_1.m8y()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var tmp0_forEach = this$0.f8y_1;
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.f8o();
        tmp$ret$0 = tmp0_max.x(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
      }
      var tmp1_forEach = this$0.g8y_1;
      var tmp0_iterator_0 = tmp1_forEach.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max_0 = maxDurationNanos;
        var tmp1_max_0 = element_0.f8z();
        tmp$ret$1 = tmp0_max_0.x(tmp1_max_0) >= 0 ? tmp0_max_0 : tmp1_max_0;
        maxDurationNanos = tmp$ret$1;
      }
      return maxDurationNanos;
    };
  }
  function Transition$updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.g8z($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition$animateTo$composable$slambda(this$0, resultContinuation) {
    this.p8z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Transition$animateTo$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.r8z_1 = get_durationScale(this.q8z_1.om());
            this.dl_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$composable$slambda$lambda(this.p8z_1, this.r8z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 1;
            continue $sm;
          case 3:
            throw this.gl_1;
          case 4:
            return Unit_getInstance();
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
  protoOf(Transition$animateTo$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$composable$slambda(this.p8z_1, completion);
    i.q8z_1 = $this$LaunchedEffect;
    return i;
  };
  function Transition$animateTo$composable$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$composable$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.s8z($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, label) {
    label = label === VOID ? null : label;
    this.y8x_1 = transitionState;
    this.z8x_1 = label;
    this.a8y_1 = mutableStateOf(this.c8z());
    this.b8y_1 = mutableStateOf(new SegmentImpl(this.c8z(), this.c8z()));
    this.c8y_1 = mutableLongStateOf(new Long(0, 0));
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.d8y_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.e8y_1 = mutableStateOf(true);
    this.f8y_1 = mutableStateListOf();
    this.g8y_1 = mutableStateListOf();
    this.h8y_1 = mutableStateOf(false);
    this.i8y_1 = new Long(0, 0);
    var tmp_0 = this;
    tmp_0.j8y_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.k8y_1 = 0;
  }
  protoOf(Transition).t8z = function (value) {
    this.y8x_1.t8z(value);
  };
  protoOf(Transition).c8z = function () {
    return this.y8x_1.c8z();
  };
  protoOf(Transition).y8z = function (_set____db54di) {
    targetState$factory();
    return this.a8y_1.f1d(_set____db54di);
  };
  protoOf(Transition).q8x = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_0();
    return this.a8y_1.s();
  };
  protoOf(Transition).m8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    segment$factory_0();
    return this.b8y_1.s();
  };
  protoOf(Transition).a8m = function () {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  };
  protoOf(Transition).z8z = function (_set____db54di) {
    playTimeNanos$factory();
    return this.c8y_1.j2k(_set____db54di);
  };
  protoOf(Transition).v8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    playTimeNanos$factory_0();
    return this.c8y_1.k2k();
  };
  protoOf(Transition).o8y = function (_set____db54di) {
    updateChildrenNeeded$factory();
    return this.e8y_1.f1d(_set____db54di);
  };
  protoOf(Transition).a90 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    updateChildrenNeeded$factory_0();
    return this.e8y_1.s();
  };
  protoOf(Transition).b90 = function (_set____db54di) {
    isSeeking$factory();
    return this.h8y_1.f1d(_set____db54di);
  };
  protoOf(Transition).l8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isSeeking$factory_0();
    return this.h8y_1.s();
  };
  protoOf(Transition).f8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    totalDurationNanos$factory();
    return this.j8y_1.s();
  };
  protoOf(Transition).n8y = function (frameTimeNanos, durationScale) {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    if (tmp.equals(new Long(0, -2147483648))) {
      this.c90(frameTimeNanos);
    }
    this.o8y(false);
    this.z8z(frameTimeNanos.m9(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.f8y_1.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!element.s8y()) {
        element.t8y(this.v8y(), durationScale);
      }
      if (!element.s8y()) {
        allFinished = false;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.g8y_1.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!equals(element_0.q8x(), element_0.c8z())) {
        element_0.n8y(this.v8y(), durationScale);
      }
      if (!equals(element_0.q8x(), element_0.c8z())) {
        allFinished = false;
      }
    }
    if (allFinished) {
      this.d90();
    }
  };
  protoOf(Transition).c90 = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.y8x_1.w8p(true);
  };
  protoOf(Transition).d90 = function () {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.t8z(this.q8x());
    this.z8z(new Long(0, 0));
    this.y8x_1.w8p(false);
  };
  protoOf(Transition).e90 = function (initialState, targetState, playTimeNanos) {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.y8x_1.w8p(false);
    if ((!this.l8y() ? true : !equals(this.c8z(), initialState)) ? true : !equals(this.q8x(), targetState)) {
      this.t8z(initialState);
      this.y8z(targetState);
      this.b90(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g8y_1.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      // Inline function 'kotlin.let' call
      var tmp0_let = element instanceof Transition ? element : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_let.l8y()) {
        tmp0_let.e90(tmp0_let.c8z(), tmp0_let.q8x(), playTimeNanos);
        tmp = Unit_getInstance();
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.f8y_1.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      element_0.p8y(playTimeNanos);
    }
    this.i8y_1 = playTimeNanos;
  };
  protoOf(Transition).f90 = function (transition) {
    return this.g8y_1.g23(transition);
  };
  protoOf(Transition).g90 = function (transition) {
    return this.g8y_1.k2l(transition);
  };
  protoOf(Transition).d8z = function (animation) {
    return this.f8y_1.g23(animation);
  };
  protoOf(Transition).h90 = function (animation) {
    this.f8y_1.k2l(animation);
  };
  protoOf(Transition).i90 = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.a8z();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l8x_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h90(tmp1_safe_receiver);
    }
  };
  protoOf(Transition).g8z = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(1657853547);
    sourceInformation($composer_0, 'C(updateTarget$composable):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1657853547, $changed, -1, 'androidx.compose.animation.core.Transition.updateTarget$composable (Transition.kt:400)');
      }
      if (!this.l8y()) {
        if (!equals(this.q8x(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.q8x(), targetState));
          this.t8z(this.q8x());
          this.y8z(targetState);
          if (!this.a8m()) {
            this.o8y(true);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = this.f8y_1.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            // Inline function 'androidx.compose.animation.core.Transition.updateTarget$composable.<anonymous>' call
            element.u8y();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(Transition$updateTarget$composable$lambda(this, targetState, $changed));
    }
  };
  protoOf(Transition).s8z = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(254343587);
    sourceInformation($composer_0, 'C(animateTo$composable)427@16681L25,431@16951L655,431@16930L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1t(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(254343587, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo$composable (Transition.kt:425)');
      }
      if (!this.l8y()) {
        this.g8z(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.c8z()) ? true : this.a8m()) ? true : this.a90()) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.m1r(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1.y1t(this);
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.w1t();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo$composable.<anonymous>' call
            var value = Transition$animateTo$composable$slambda_0(this, null);
            $composer_1.x1t(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.o1r();
          LaunchedEffect$composable(this, tmp0, $composer_0, 14 & $dirty >> 3);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp1_safe_receiver = $composer_0.i1t();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.z28(Transition$animateTo$composable$lambda(this, targetState, $changed));
    }
  };
  function updateTransition$composable(targetState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.m1r(-1999981197);
    sourceInformation($composer_0, 'C(updateTransition$composable)P(1)71@2945L51,72@3012L22,73@3068L195,73@3039L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1999981197, $changed, -1, 'androidx.compose.animation.core.updateTransition$composable (Transition.kt:67)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value = Transition_init_$Create$(targetState, label_0._v);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var transition = tmp0;
    transition.s8z(targetState, $composer_0, 8 & $changed | 14 & $changed);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2.y1t(transition);
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value_0 = updateTransition$composable$lambda(transition);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    DisposableEffect$composable(transition, tmp0_0, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return transition;
  }
  function createDeferredAnimation$composable(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.m1r(446615029);
    sourceInformation($composer_0, 'C(createDeferredAnimation$composable)P(1)753@29670L58,754@29733L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = 'DeferredAnimation';
    }
    if (isTraceInProgress()) {
      traceEventStart(446615029, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation$composable (Transition.kt:749)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation$composable.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0._v);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var lazyAnim = tmp0;
    DisposableEffect$composable(lazyAnim, createDeferredAnimation$composable$lambda(_this__u8e3s4, lazyAnim), $composer_0, 0);
    if (_this__u8e3s4.l8y()) {
      lazyAnim.e8z();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return lazyAnim;
  }
  function MutableTransitionState(initialState) {
    this.u8z_1 = mutableStateOf(initialState);
    this.v8z_1 = mutableStateOf(initialState);
    this.w8z_1 = mutableStateOf(false);
    this.x8z_1 = 0;
  }
  protoOf(MutableTransitionState).t8z = function (_set____db54di) {
    currentState$factory();
    return this.u8z_1.f1d(_set____db54di);
  };
  protoOf(MutableTransitionState).c8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_0();
    return this.u8z_1.s();
  };
  protoOf(MutableTransitionState).y8z = function (_set____db54di) {
    targetState$factory_1();
    return this.v8z_1.f1d(_set____db54di);
  };
  protoOf(MutableTransitionState).q8x = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_2();
    return this.v8z_1.s();
  };
  protoOf(MutableTransitionState).w8p = function (_set____db54di) {
    isRunning$factory_5();
    return this.w8z_1.f1d(_set____db54di);
  };
  protoOf(MutableTransitionState).a8m = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_6();
    return this.w8z_1.s();
  };
  function updateTransition$composable_0(transitionState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.m1r(-506312018);
    sourceInformation($composer_0, 'C(updateTransition$composable)P(1)154@6617L94,157@6727L38,158@6799L195,158@6770L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-506312018, $changed, -1, 'androidx.compose.animation.core.updateTransition$composable (Transition.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(transitionState);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value = new Transition(transitionState, label_0._v);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var transition = tmp0;
    transition.s8z(transitionState.q8x(), $composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2.y1t(transition);
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value_0 = updateTransition$composable$lambda_0(transition);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    DisposableEffect$composable(transition, tmp0_0, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return transition;
  }
  function createChildTransitionInternal$composable(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1296656186);
    sourceInformation($composer_0, 'C(createChildTransitionInternal$composable)P(1,2)799@31645L110,803@31790L112,803@31761L141,817@32124L25:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-1296656186, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal$composable (Transition.kt:794)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), '' + _this__u8e3s4.z8x_1 + ' > ' + childLabel);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var transition = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = !!($composer_2.y1t(_this__u8e3s4) | $composer_2.y1t(transition));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>' call
      var value_0 = createChildTransitionInternal$composable$lambda(_this__u8e3s4, transition);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    DisposableEffect$composable(transition, tmp0_0, $composer_0, 0);
    if (_this__u8e3s4.l8y()) {
      transition.e90(initialState, targetState, _this__u8e3s4.i8y_1);
    } else {
      transition.g8z(targetState, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 6);
      transition.b90(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return transition;
  }
  function createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1918946450);
    sourceInformation($composer_0, 'C(createTransitionAnimation$composable)P(1,3!1,4)873@34678L499,896@35561L128,896@35523L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1918946450, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation$composable (Transition.kt:866)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      var value = new TransitionAnimationState_0(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var transitionAnimation = tmp0;
    if (_this__u8e3s4.l8y()) {
      transitionAnimation.t8x(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.r8x(targetValue, animationSpec);
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.m1r(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = !!($composer_2.y1t(_this__u8e3s4) | $composer_2.y1t(transitionAnimation));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance().y1s_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      var value_0 = createTransitionAnimation$composable$lambda(_this__u8e3s4, transitionAnimation);
      $composer_2.x1t(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.o1r();
    DisposableEffect$composable(transitionAnimation, tmp0_0, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return transitionAnimation;
  }
  function _no_name_provided__qut3iv_0($transition) {
    this.j90_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_0).gp = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.j90_1.d90();
  };
  function updateTransition$composable$lambda($transition) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($transition);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_1($this_createDeferredAnimation$composable, $lazyAnim) {
    this.k90_1 = $this_createDeferredAnimation$composable;
    this.l90_1 = $lazyAnim;
  }
  protoOf(_no_name_provided__qut3iv_1).gp = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation$composable.<anonymous>.<anonymous>' call
    this.k90_1.i90(this.l90_1);
  };
  function createDeferredAnimation$composable$lambda($this_createDeferredAnimation$composable, $lazyAnim) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1($this_createDeferredAnimation$composable, $lazyAnim);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_2($transition) {
    this.m90_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_2).gp = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.m90_1.d90();
  };
  function updateTransition$composable$lambda_0($transition) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($transition);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_3($this_createChildTransitionInternal$composable, $transition) {
    this.n90_1 = $this_createChildTransitionInternal$composable;
    this.o90_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_3).gp = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.n90_1.g90(this.o90_1);
  };
  function createChildTransitionInternal$composable$lambda($this_createChildTransitionInternal$composable, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal$composable.f90($transition);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_3($this_createChildTransitionInternal$composable, $transition);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_4($this_createTransitionAnimation$composable, $transitionAnimation) {
    this.p90_1 = $this_createTransitionAnimation$composable;
    this.q90_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_4).gp = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.p90_1.h90(this.q90_1);
  };
  function createTransitionAnimation$composable$lambda($this_createTransitionAnimation$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation$composable.d8z($transitionAnimation);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_4($this_createTransitionAnimation$composable, $transitionAnimation);
      return tmp$ret$0;
    };
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.q8x();
    }, function (receiver, value) {
      return receiver.y8z(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.q8x();
    }, function (receiver, value) {
      return receiver.y8z(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.m8y();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.m8y();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.v8y();
    }, function (receiver, value) {
      return receiver.z8z(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.v8y();
    }, function (receiver, value) {
      return receiver.z8z(value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.a90();
    }, function (receiver, value) {
      return receiver.o8y(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.a90();
    }, function (receiver, value) {
      return receiver.o8y(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.l8y();
    }, function (receiver, value) {
      return receiver.b90(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.l8y();
    }, function (receiver, value) {
      return receiver.b90(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.f8z();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.k8x();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.k8x();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.q8y();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.q8y();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.s8y();
    }, function (receiver, value) {
      return receiver.r8y(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.s8y();
    }, function (receiver, value) {
      return receiver.r8y(value);
    });
  }
  function offsetTimeNanos$factory() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function offsetTimeNanos$factory_0() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function needsReset$factory() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function needsReset$factory_0() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function value$factory_5() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function value$factory_6() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.s();
    }, function (receiver, value) {
      return receiver.f1d(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.a8z();
    }, function (receiver, value) {
      return receiver.z8y(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.a8z();
    }, function (receiver, value) {
      return receiver.z8y(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.c8z();
    }, function (receiver, value) {
      return receiver.t8z(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.c8z();
    }, function (receiver, value) {
      return receiver.t8z(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.q8x();
    }, function (receiver, value) {
      return receiver.y8z(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.q8x();
    }, function (receiver, value) {
      return receiver.y8z(value);
    });
  }
  function isRunning$factory_5() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return receiver.w8p(value);
    });
  }
  function isRunning$factory_6() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8m();
    }, function (receiver, value) {
      return receiver.w8p(value);
    });
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.r90_1 = convertToVector;
    this.s90_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).o8k = function () {
    return this.r90_1;
  };
  protoOf(TwoWayConverterImpl).u8k = function () {
    return this.s90_1;
  };
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.y8p_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.y8p_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.j36_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.y8p_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.n36_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.n36_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0_get_dp_bnsrxl = it.d8q_1;
    var tmp = _Dp___init__impl__ms3zkb(tmp0_get_dp_bnsrxl);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1_get_dp_ujoszc = it.e8q_1;
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1_get_dp_ujoszc);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.s34_1), _Size___get_height__impl__a04p02(it.s34_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.d8q_1, it.e8q_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.n33_1), _Offset___get_y__impl__8bzhra(it.n33_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.d8q_1, it.e8q_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.o36_1), _IntOffset___get_y__impl__2avpwj(it.o36_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.d8q_1;
    var tmp = roundToInt(tmp0_roundToInt);
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.e8q_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.a37_1), _IntSize___get_height__impl__prv63b(it.a37_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.d8q_1;
    var tmp = roundToInt(tmp0_roundToInt);
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.e8q_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.q33_1, it.r33_1, it.s33_1, it.t33_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.i8q_1, it.j8q_1, it.k8q_1, it.l8q_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    Spring_instance = this;
    this.t90_1 = 10000.0;
    this.u90_1 = 1500.0;
    this.v90_1 = 400.0;
    this.w90_1 = 200.0;
    this.x90_1 = 50.0;
    this.y90_1 = 0.2;
    this.z90_1 = 0.5;
    this.a91_1 = 0.75;
    this.b91_1 = 1.0;
    this.c91_1 = 0.01;
    this.d91_1 = 0;
  }
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      Spring_getInstance();
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      Spring_getInstance();
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.e91_1 = dampingRatio;
    this.f91_1 = stiffness;
    this.g91_1 = new VectorizedFloatAnimationSpec(anims);
    this.h91_1 = 8;
  }
  protoOf(VectorizedSpringSpec).b8o = function () {
    return this.g91_1.b8o();
  };
  protoOf(VectorizedSpringSpec).y8n = function (initialValue, targetValue, initialVelocity) {
    return this.g91_1.y8n(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).z8n = function (initialValue, targetValue, initialVelocity) {
    return this.g91_1.z8n(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).d8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.g91_1.d8o(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).h8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.g91_1.h8o(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.j91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.k91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.l91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.n91_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).m = function (index) {
    return this.n91_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.i91_1 = anims;
    this.m91_1 = 8;
  }
  protoOf(VectorizedFloatAnimationSpec).d8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.j91_1 == null)) {
      this.j91_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).q8k(i, this.i91_1.m(i).j8r(playTimeNanos, initialValue.m(i), targetValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).h8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.k91_1 == null)) {
      this.k91_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).q8k(i, this.i91_1.m(i).k8r(playTimeNanos, initialValue.m(i), targetValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).z8n = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.l91_1 == null)) {
      this.l91_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).q8k(i, this.i91_1.m(i).l8r(initialValue.m(i), targetValue.m(i), initialVelocity.m(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).y8n = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(0, initialValue.g());
    var inductionVariable = tmp0_forEach.y_1;
    var last = tmp0_forEach.z_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.i91_1.m(element).m8r(initialValue.m(element), targetValue.m(element), initialVelocity.m(element));
        maxDuration = tmp0_maxOf.x(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.r7($this.r91_1).x(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.r7($this.r91_1);
      var repeatsCount = postOffsetPlayTimeNanos.k9($this.q91_1);
      var tmp;
      if ($this.p91_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        tmp = repeatsCount.ga(new Long(2, 0)).equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.m9(repeatsCount.l9($this.q91_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        return repeatsCount.r7(new Long(1, 0)).l9($this.q91_1).m9(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.r7($this.r91_1).x($this.q91_1) > 0) {
      tmp = $this.h8o($this.q91_1.m9($this.r91_1), start, startVelocity, end);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.o91_1 = animation;
    this.p91_1 = repeatMode;
    this.q91_1 = numberToLong(this.o91_1.t91() + this.o91_1.u91() | 0).l9(get_MillisToNanos());
    this.r91_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).l9(get_MillisToNanos());
    this.s91_1 = 8;
  }
  protoOf(VectorizedInfiniteRepeatableSpec).b8o = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).d8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.o91_1.d8o(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).h8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.o91_1.h8o(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).y8n = function (initialValue, targetValue, initialVelocity) {
    Companion_getInstance_6();
    return new Long(-1, 2147483647);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_valueVector__r10idf_1($this) {
    var tmp = $this.y91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.z91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function init_0($this, value) {
    if (!!($this.y91_1 == null)) {
      $this.y91_1 = newInstance(value);
      $this.z91_1 = newInstance(value);
    }
  }
  function VectorizedKeyframesSpec(keyframes, durationMillis, delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.v91_1 = keyframes;
    this.w91_1 = durationMillis;
    this.x91_1 = delayMillis;
    this.a92_1 = 8;
  }
  protoOf(VectorizedKeyframesSpec).u91 = function () {
    return this.w91_1;
  };
  protoOf(VectorizedKeyframesSpec).t91 = function () {
    return this.x91_1;
  };
  protoOf(VectorizedKeyframesSpec).d8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis).f1();
    if (this.v91_1.t2(clampedPlayTime)) {
      return getValue(this.v91_1, clampedPlayTime).w4_1;
    }
    if (clampedPlayTime >= this.w91_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    var startTime = 0;
    var startVal = initialValue;
    var endVal = targetValue;
    var endTime = this.w91_1;
    var easing = get_LinearEasing();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.v91_1.q().d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      // Inline function 'kotlin.collections.component1' call
      var timestamp = tmp1_loop_parameter.r();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.s();
      if (clampedPlayTime > timestamp ? timestamp >= startTime : false) {
        startTime = timestamp;
        startVal = value.w4_1;
        easing = value.x4_1;
      } else if (clampedPlayTime < timestamp ? timestamp <= endTime : false) {
        endTime = timestamp;
        endVal = value.w4_1;
      }
    }
    var fraction = easing.h8r((clampedPlayTime - startTime | 0) / (endTime - startTime | 0));
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startVal.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_1(this).q8k(i, lerp(startVal.m(i), endVal.m(i), fraction));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_1(this);
  };
  protoOf(VectorizedKeyframesSpec).h8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.k9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis);
    if (clampedPlayTime.x(new Long(0, 0)) <= 0) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.m9(new Long(1, 0));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startNum.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).q8k(i, (startNum.m(i) - endNum.m(i)) * 1000.0);
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.b92_1 = durationMillis;
    this.c92_1 = delayMillis;
    this.d92_1 = easing;
    this.e92_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.b92_1, this.c92_1, this.d92_1));
    this.f92_1 = 8;
  }
  protoOf(VectorizedTweenSpec).u91 = function () {
    return this.b92_1;
  };
  protoOf(VectorizedTweenSpec).t91 = function () {
    return this.c92_1;
  };
  protoOf(VectorizedTweenSpec).d8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e92_1.d8o(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).h8o = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e92_1.h8o(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function clampPlayTime_0(_this__u8e3s4, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = _this__u8e3s4.t91();
    tmp$ret$0 = playTime.m9(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.u91()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.d8o(playTimeMillis.l9(get_MillisToNanos()), start, end, startVelocity);
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = until(0, $visibilityThreshold.g());
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.y_1;
    var last = tmp0_map.z_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.m(item));
        tmp0_mapTo.a(tmp$ret$0);
      }
       while (!(item === last));
    tmp.g92_1 = tmp0_mapTo;
  }
  protoOf(createSpringAnimations$1).m = function (index) {
    return this.g92_1.m(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.h92_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).m = function (index) {
    return this.h92_1;
  };
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_7()), 0.1)]);
    }
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).e8o = isFinishedFromNanos;
  protoOf(DecayAnimation).e8o = isFinishedFromNanos;
  protoOf(FloatSpringSpec).n8r = vectorize;
  protoOf(FloatTweenSpec).l8r = getEndVelocity;
  protoOf(FloatTweenSpec).n8r = vectorize;
  protoOf(SegmentImpl).y8y = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).b8o = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).z8n = getEndVelocity_0;
  protoOf(VectorizedKeyframesSpec).y8n = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).b8o = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).z8n = getEndVelocity_0;
  protoOf(VectorizedTweenSpec).y8n = getDurationNanos;
  protoOf(VectorizedTweenSpec).b8o = get_isInfinite;
  protoOf(VectorizedTweenSpec).z8n = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_0;
  _.$_$.d = AnimationVector1D;
  _.$_$.e = AnimationVector2D;
  _.$_$.f = AnimationVector4D;
  _.$_$.g = CubicBezierEasing;
  _.$_$.h = get_FastOutSlowInEasing;
  _.$_$.i = get_LinearEasing;
  _.$_$.j = get_LinearOutSlowInEasing;
  _.$_$.k = MutableTransitionState;
  _.$_$.l = SpringSpec;
  _.$_$.m = isTransitioningTo;
  _.$_$.n = Segment;
  _.$_$.o = TweenSpec;
  _.$_$.p = TwoWayConverter;
  _.$_$.q = get_VectorConverter_1;
  _.$_$.r = get_VectorConverter_6;
  _.$_$.s = get_VectorConverter;
  _.$_$.t = get_VectorConverter_0;
  _.$_$.u = get_VectorConverter_2;
  _.$_$.v = get_VisibilityThreshold_4;
  _.$_$.w = get_VisibilityThreshold_5;
  _.$_$.x = animateDpAsState$composable;
  _.$_$.y = animateFloat$composable;
  _.$_$.z = animateFloatAsState$composable;
  _.$_$.a1 = animateValue$composable;
  _.$_$.b1 = animateValueAsState$composable;
  _.$_$.c1 = copy_0;
  _.$_$.d1 = createChildTransitionInternal$composable;
  _.$_$.e1 = createDeferredAnimation$composable;
  _.$_$.f1 = createTransitionAnimation$composable;
  _.$_$.g1 = generateDecayAnimationSpec;
  _.$_$.h1 = infiniteRepeatable;
  _.$_$.i1 = keyframes;
  _.$_$.j1 = rememberInfiniteTransition$composable;
  _.$_$.k1 = spring;
  _.$_$.l1 = tween;
  _.$_$.m1 = updateTransition$composable_0;
  _.$_$.n1 = updateTransition$composable;
  _.$_$.o1 = animateDecay;
  _.$_$.p1 = animateTo;
  _.$_$.q1 = animate_0;
  _.$_$.r1 = AnimationConstants_getInstance;
  _.$_$.s1 = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation-core.js.map
