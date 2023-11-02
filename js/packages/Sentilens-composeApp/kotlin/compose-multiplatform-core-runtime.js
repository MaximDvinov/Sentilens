(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var toString = kotlin_kotlin.$_$.ce;
  var classMeta = kotlin_kotlin.$_$.kc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var createFailure = kotlin_kotlin.$_$.ik;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var intercepted = kotlin_kotlin.$_$.kb;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var get = kotlin_kotlin.$_$.sb;
  var fold = kotlin_kotlin.$_$.rb;
  var minusKey = kotlin_kotlin.$_$.tb;
  var plus = kotlin_kotlin.$_$.vb;
  var isInterface = kotlin_kotlin.$_$.id;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var Enum = kotlin_kotlin.$_$.dj;
  var IllegalStateException = kotlin_kotlin.$_$.hj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var defineProp = kotlin_kotlin.$_$.mc;
  var equals = kotlin_kotlin.$_$.oc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var fill = kotlin_kotlin.$_$.c8;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var rotateLeft = kotlin_kotlin.$_$.vk;
  var hashCode = kotlin_kotlin.$_$.xc;
  var emptyList = kotlin_kotlin.$_$.z7;
  var toMutableList = kotlin_kotlin.$_$.xa;
  var MutableCollection = kotlin_kotlin.$_$.l6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var rotateRight = kotlin_kotlin.$_$.wk;
  var sortWith = kotlin_kotlin.$_$.ia;
  var Comparator = kotlin_kotlin.$_$.aj;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.el;
  var plus_0 = kotlin_kotlin.$_$.w9;
  var compareValues = kotlin_kotlin.$_$.db;
  var Long = kotlin_kotlin.$_$.jj;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var lazy = kotlin_kotlin.$_$.rk;
  var firstOrNull = kotlin_kotlin.$_$.g8;
  var compareTo = kotlin_kotlin.$_$.lc;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var isArray = kotlin_kotlin.$_$.ad;
  var Set = kotlin_kotlin.$_$.r6;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var plus_1 = kotlin_kotlin.$_$.r9;
  var Exception = kotlin_kotlin.$_$.fj;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var Map = kotlin_kotlin.$_$.k6;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var toString_0 = kotlin_kotlin.$_$.dl;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Element = kotlin_kotlin.$_$.ub;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var Collection = kotlin_kotlin.$_$.b6;
  var addAll = kotlin_kotlin.$_$.t6;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toList = kotlin_kotlin.$_$.ua;
  var flatten = kotlin_kotlin.$_$.l8;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var addSuppressed = kotlin_kotlin.$_$.dk;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var removeFirst = kotlin_kotlin.$_$.z9;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var fill_0 = kotlin_kotlin.$_$.d8;
  var Iterator = kotlin_kotlin.$_$.f6;
  var first = kotlin_kotlin.$_$.i8;
  var last = kotlin_kotlin.$_$.g9;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var toList_0 = kotlin_kotlin.$_$.va;
  var copyOf = kotlin_kotlin.$_$.w7;
  var joinToString = kotlin_kotlin.$_$.w8;
  var copyOf_0 = kotlin_kotlin.$_$.v7;
  var MutableList = kotlin_kotlin.$_$.m6;
  var checkIndexOverflow = kotlin_kotlin.$_$.e7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var sortWith_0 = kotlin_kotlin.$_$.ja;
  var RandomAccess = kotlin_kotlin.$_$.q6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var AbstractList = kotlin_kotlin.$_$.t5;
  var List = kotlin_kotlin.$_$.i6;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  var coerceAtMost = kotlin_kotlin.$_$.xe;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var AbstractMutableList = kotlin_kotlin.$_$.w5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  var indexOf = kotlin_kotlin.$_$.p8;
  var lastIndexOf = kotlin_kotlin.$_$.d9;
  var AbstractMap = kotlin_kotlin.$_$.u5;
  var AbstractMutableMap = kotlin_kotlin.$_$.x5;
  var MutableMap = kotlin_kotlin.$_$.o6;
  var MutableEntry = kotlin_kotlin.$_$.n6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var AbstractMutableSet = kotlin_kotlin.$_$.y5;
  var MutableSet = kotlin_kotlin.$_$.p6;
  var AbstractMutableCollection = kotlin_kotlin.$_$.v5;
  var Entry = kotlin_kotlin.$_$.j6;
  var AbstractSet = kotlin_kotlin.$_$.z5;
  var AbstractCollection = kotlin_kotlin.$_$.s5;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var until = kotlin_kotlin.$_$.jf;
  var step = kotlin_kotlin.$_$.if;
  var countOneBits = kotlin_kotlin.$_$.gk;
  var takeLowestOneBit = kotlin_kotlin.$_$.xk;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var longArray = kotlin_kotlin.$_$.pd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Char = kotlin_kotlin.$_$.xi;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var singleOrNull = kotlin_kotlin.$_$.ga;
  var contains = kotlin_kotlin.$_$.g7;
  var plus_2 = kotlin_kotlin.$_$.v9;
  var primitiveArrayConcat = kotlin_kotlin.$_$.f;
  var SequenceScope = kotlin_kotlin.$_$.qf;
  var intArrayIterator = kotlin_kotlin.$_$.yc;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l5;
  var toIntArray = kotlin_kotlin.$_$.sa;
  var sequence = kotlin_kotlin.$_$.gg;
  var anyToString = kotlin_kotlin.$_$.bc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var listOf = kotlin_kotlin.$_$.k9;
  var listOf_0 = kotlin_kotlin.$_$.l9;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.ui;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.u2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.g1;
  var println = kotlin_kotlin.$_$.ac;
  var printStackTrace = kotlin_kotlin.$_$.uk;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.z1t(value);
  }
  function changed_0(value) {
    return this.a1u(value);
  }
  function changed_1(value) {
    return this.b1u(value);
  }
  function changed_2(value) {
    return this.c1u(value);
  }
  function changedInstance(value) {
    return this.y1t(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionContextImpl, 'CompositionContextImpl', classMeta, CompositionContext);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(SkippableUpdater, 'SkippableUpdater', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(ResultRecord, 'ResultRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(DerivedSnapshotState, 'DerivedSnapshotState', classMeta, VOID, [StateObject, DerivedState]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [CoroutineScope_0], VOID, VOID, [1]);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope], VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda_1, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function set_value(value) {
    this.e2h(value);
  }
  function get_value() {
    return this.f2h();
  }
  setMetadataFor(MutableFloatState, 'MutableFloatState', interfaceMeta);
  setMetadataFor(FloatStateStateRecord, 'FloatStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableState, 'SnapshotMutableState', interfaceMeta);
  setMetadataFor(SnapshotMutableFloatStateImpl, 'SnapshotMutableFloatStateImpl', classMeta, VOID, [StateObject, MutableFloatState, SnapshotMutableState]);
  setMetadataFor(collectAsState$composable$slambda$slambda$slambda, 'collectAsState$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda$slambda, 'collectAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda$slambda_1, 'collectAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda, 'collectAsState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(snapshotFlow$slambda, 'snapshotFlow$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  function set_value_0(value) {
    this.b2k(value);
  }
  function get_value_0() {
    return this.c2k();
  }
  setMetadataFor(MutableIntState, 'MutableIntState', interfaceMeta);
  setMetadataFor(IntStateStateRecord, 'IntStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableIntStateImpl, 'SnapshotMutableIntStateImpl', classMeta, VOID, [StateObject, MutableIntState, SnapshotMutableState]);
  function set_value_1(value) {
    this.j2k(value);
  }
  function get_value_1() {
    return this.k2k();
  }
  setMetadataFor(MutableLongState, 'MutableLongState', interfaceMeta);
  setMetadataFor(LongStateStateRecord, 'LongStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableLongStateImpl, 'SnapshotMutableLongStateImpl', classMeta, VOID, [StateObject, MutableLongState, SnapshotMutableState]);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(ReferentialEqualityPolicy, 'ReferentialEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(NeverEqualPolicy, 'NeverEqualPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject, SnapshotMutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta);
  setMetadataFor(IntStack, 'IntStack', classMeta);
  setMetadataFor(Stack, 'Stack', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set]);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta);
  setMetadataFor(VectorListIterator, 'VectorListIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(MutableVectorList, 'MutableVectorList', classMeta, VOID, [MutableList]);
  setMetadataFor(SubList, 'SubList', classMeta, VOID, [MutableList]);
  setMetadataFor(MutableVector, 'MutableVector', classMeta, VOID, [RandomAccess]);
  function subList(fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  }
  setMetadataFor(ImmutableList, 'ImmutableList', interfaceMeta, VOID, [List, Collection]);
  setMetadataFor(SubList_0, 'SubList', classMeta, AbstractList, [ImmutableList, AbstractList]);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(SingleElementListIterator, 'SingleElementListIterator', classMeta, AbstractListIterator);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [Collection, ImmutableList, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [Collection, ImmutableList, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, MutableList, MutableCollection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator, [Iterator, AbstractListIterator]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [ImmutableList, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator, [Iterator, PersistentHashMapBaseIterator]);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableSet, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [MutableCollection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(TransparentObserverMutableSnapshot, 'TransparentObserverMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(ReadonlySnapshot, 'ReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedReadonlySnapshot, 'NestedReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(TransparentObserverSnapshot, 'TransparentObserverSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [MutableList, StateObject]);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(SubList$listIterator$1, VOID, classMeta, VOID, [Iterator]);
  setMetadataFor(SubList_1, 'SubList', classMeta, VOID, [MutableList]);
  setMetadataFor(StateMapStateRecord, 'StateMapStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateMap, 'SnapshotStateMap', classMeta, VOID, [MutableMap, StateObject]);
  setMetadataFor(SnapshotMapSet, 'SnapshotMapSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(SnapshotMapEntrySet, 'SnapshotMapEntrySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapKeySet, 'SnapshotMapKeySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapValueSet, 'SnapshotMapValueSet', classMeta, SnapshotMapSet);
  setMetadataFor(StateMapMutableEntriesIterator$next$1, VOID, classMeta, VOID, [MutableEntry]);
  setMetadataFor(StateMapMutableIterator, 'StateMapMutableIterator', classMeta);
  setMetadataFor(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', classMeta, StateMapMutableIterator, [StateMapMutableIterator, Iterator]);
  setMetadataFor(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', classMeta, StateMapMutableIterator, [StateMapMutableIterator, Iterator]);
  setMetadataFor(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', classMeta, StateMapMutableIterator, [StateMapMutableIterator, Iterator]);
  setMetadataFor(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(ObservedScopeMap, 'ObservedScopeMap', classMeta);
  setMetadataFor(SnapshotStateObserver, 'SnapshotStateObserver', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.n1q_1 = applier;
    this.o1q_1 = offset;
    this.p1q_1 = 0;
  }
  protoOf(OffsetApplier).e1q = function () {
    return this.n1q_1.e1q();
  };
  protoOf(OffsetApplier).h1q = function (node) {
    this.p1q_1 = this.p1q_1 + 1 | 0;
    this.n1q_1.h1q(node);
  };
  protoOf(OffsetApplier).i1q = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.p1q_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.p1q_1 = this.p1q_1 - 1 | 0;
    this.n1q_1.i1q();
  };
  protoOf(OffsetApplier).j1q = function (index, instance) {
    this.n1q_1.j1q(index + (this.p1q_1 === 0 ? this.o1q_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).k1q = function (index, instance) {
    this.n1q_1.k1q(index + (this.p1q_1 === 0 ? this.o1q_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).l1q = function (index, count) {
    this.n1q_1.l1q(index + (this.p1q_1 === 0 ? this.o1q_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).m1q = function (from, to, count) {
    var effectiveOffset = this.p1q_1 === 0 ? this.o1q_1 : 0;
    this.n1q_1.m1q(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  protoOf(OffsetApplier).a4 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
    var message = 'Clear is not valid on OffsetApplier';
    composeRuntimeError(toString(message));
  };
  function AbstractApplier(root) {
    this.q1q_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r1q_1 = ArrayList_init_$Create$();
    this.s1q_1 = this.q1q_1;
    this.t1q_1 = 8;
  }
  protoOf(AbstractApplier).u1q = function (_set____db54di) {
    this.s1q_1 = _set____db54di;
  };
  protoOf(AbstractApplier).e1q = function () {
    return this.s1q_1;
  };
  protoOf(AbstractApplier).v1q = function (node) {
    this.r1q_1.a(this.e1q());
    this.u1q(node);
  };
  protoOf(AbstractApplier).h1q = function (node) {
    return this.v1q((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).i1q = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.r1q_1.l()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.u1q(this.r1q_1.z3(this.r1q_1.g() - 1 | 0));
  };
  protoOf(AbstractApplier).a4 = function () {
    this.r1q_1.a4();
    this.u1q(this.q1q_1);
    this.w1q();
  };
  function FrameAwaiter(onFrame, continuation) {
    this.x1q_1 = onFrame;
    this.y1q_1 = continuation;
  }
  protoOf(FrameAwaiter).z1q = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var tmp1_success = this.x1q_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(tmp1_success);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.y1q_1.n5(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.b1r_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.c1r_1 == null))
      return Unit_getInstance();
    $this.c1r_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.d1r_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.m(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = item.y1q_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp0_resumeWithException.n5(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.d1r_1.a4();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.b1r_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.d1r_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.y3(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.a1r_1 = onNewAwaiters;
    this.b1r_1 = createSynchronizedObject();
    this.c1r_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d1r_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e1r_1 = ArrayList_init_$Create$();
    this.f1r_1 = 8;
  }
  protoOf(BroadcastFrameClock).g1r = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1r_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.d1r_1.l();
  };
  protoOf(BroadcastFrameClock).h1r = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.b1r_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.d1r_1;
    this.d1r_1 = this.e1r_1;
    this.e1r_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.g();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.m(i).z1q(timeNanos);
      }
       while (inductionVariable < last);
    toResume.a4();
  };
  protoOf(BroadcastFrameClock).i1r = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.b1r_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.c1r_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.n5(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.d1r_1.l();
      var tmp = this.d1r_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.kq(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.a1r_1 == null) : false) {
        try {
          this.a1r_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.lq();
  };
  function $get_currentRecomposeScope$$composable_f9ntk0($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -186676516, 'C($get-currentRecomposeScope$$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-186676516, $changed, -1, 'androidx.compose.runtime.$get-currentRecomposeScope$$composable (Composables.kt:192)');
    }
    var tmp0_elvis_lhs = $composer_0.j1r();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('no recompose scope found');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var scope = tmp;
    $composer_0.k1r(scope);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return scope;
  }
  function $get_currentCompositeKeyHash$$composable_u3vbzj($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1422486212, $changed, -1, 'androidx.compose.runtime.$get-currentCompositeKeyHash$$composable (Composables.kt:224)');
    }
    var tmp0 = $composer_0.l1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function rememberCompositionContext$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(1739317627);
    sourceInformation($composer_0, 'C(rememberCompositionContext$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1739317627, $changed, -1, 'androidx.compose.runtime.rememberCompositionContext$composable (Composables.kt:480)');
    }
    var tmp0 = $composer_0.n1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.n1s();
    while (tmp0_iterator.e()) {
      var slot = tmp0_iterator.f();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.o1s(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.p1s(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.su();
      }
    }
    _this__u8e3s4.x1s();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.y1s_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1t(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.l1t();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.k1u_1 = compositionLocal;
    this.l1u_1 = value;
    this.m1u_1 = canOverride;
    this.n1u_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j1t(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    return !(tmp0_let == null) ? tmp0_let.o1u() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1u(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1u();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.r1u_1 = content;
    this.s1u_1 = parameter;
    this.t1u_1 = composition;
    this.u1u_1 = slotTable;
    this.v1u_1 = anchor;
    this.w1u_1 = invalidations;
    this.x1u_1 = locals;
    this.y1u_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.z1u_1 = message;
  }
  protoOf(ComposeRuntimeError).m1 = function () {
    return this.z1u_1;
  };
  function _set_compositionLocalScope__ya1b9q($this, _set____db54di) {
    compositionLocalScope$factory();
    return $this.f1v_1.f1d(_set____db54di);
  }
  function _get_compositionLocalScope__ulge9q($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    compositionLocalScope$factory_0();
    return $this.f1v_1.s();
  }
  function startRoot($this) {
    $this.o1w_1 = $this.j1v_1.r1x();
    startGroup($this, 100);
    $this.i1v_1.t1x();
    $this.b1w_1 = $this.i1v_1.u1x();
    $this.e1w_1.x1x(asInt($this.d1w_1));
    $this.d1w_1 = $this.y1t($this.b1w_1);
    $this.s1w_1 = null;
    if (!$this.w1v_1) {
      $this.w1v_1 = $this.i1v_1.y1x();
    }
    var tmp0_safe_receiver = read($this.b1w_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.j1v_1);
      $this.i1v_1.z1x(tmp0_safe_receiver);
    }
    startGroup($this, $this.i1v_1.a1y());
  }
  function endRoot($this) {
    endGroup($this);
    $this.i1v_1.b1y();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.o1w_1.o1y();
    $this.x1v_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.o1v_1.a4();
    $this.r1v_1.a4();
    $this.t1v_1.a4();
    $this.a1w_1.a4();
    $this.e1w_1.a4();
    $this.c1w_1.a4();
    if (!$this.o1w_1.h1y_1) {
      $this.o1w_1.o1y();
    }
    if (!$this.q1w_1.l1s_1) {
      $this.q1w_1.o1y();
    }
    $this.v1w_1.a4();
    createFreshInsertTable($this);
    $this.x1w_1 = 0;
    $this.h1w_1 = 0;
    $this.y1v_1 = false;
    $this.w1w_1 = false;
    $this.f1w_1 = false;
    $this.m1w_1 = false;
    $this.x1v_1 = false;
    $this.g1w_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().r1y_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().r1y_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.s1v_1 = $this.s1v_1 + $this.o1w_1.u1y() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.s1w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.o1w_1.k1y_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.w1w_1 ? $this.r1w_1 : false) {
      var current = $this.q1w_1.k1s_1;
      while (current > 0) {
        if ($this.q1w_1.x1y(current) === 202 ? equals($this.q1w_1.w1y(current), get_compositionLocalMap()) : false) {
          var tmp = $this.q1w_1.v1y(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.s1w_1 = providers;
          return providers;
        }
        current = $this.q1w_1.y1y(current);
      }
    }
    if ($this.o1w_1.g() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.o1w_1.x1y(current_0) === 202 ? equals($this.o1w_1.w1y(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.c1w_1.m(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.o1w_1.v1y(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.s1w_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.o1w_1.y1y(current_0);
      }
    }
    $this.s1w_1 = $this.b1w_1;
    return $this.b1w_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.bf(currentProviders);
    var providerScope = tmp0_apply.df();
    startGroup_0($this, 204, get_providerMaps());
    $this.y1t(providerScope);
    $this.y1t(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.q1w_1.l1s_1) {
      $this.q1w_1 = $this.p1w_1.a1z();
      $this.q1w_1.m1t();
      $this.r1w_1 = false;
      $this.s1w_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.q1w_1.l1s_1);
    $this.p1w_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.p1w_1.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.o1y();
    tmp.q1w_1 = tmp0_also;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.o1w_1.o1t();
    } else {
      if (!(data == null) ? !($this.o1w_1.b1z() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.o1w_1.c1z();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().r1y_1));
    if ($this.w1w_1) {
      $this.o1w_1.d1z();
      var startIndex = $this.q1w_1.j1s_1;
      if (isNode) {
        $this.q1w_1.g1z(key, Companion_getInstance_1().y1s_1);
      } else if (!(data == null)) {
        var tmp = $this.q1w_1;
        tmp.f1z(key, objectKey == null ? Companion_getInstance_1().y1s_1 : objectKey, data);
      } else {
        var tmp_0 = $this.q1w_1;
        tmp_0.e1z(key, objectKey == null ? Companion_getInstance_1().y1s_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.p1v_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.n1z(insertKeyInfo, $this.q1v_1 - tmp2_safe_receiver.i1z_1 | 0);
        tmp2_safe_receiver.o1z(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().s1y_1))) {
      tmp_1 = $this.f1w_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.p1v_1 == null) {
      var slotKey = $this.o1w_1.p1z();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.o1w_1.r1z()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.p1v_1 = new Pending($this.o1w_1.q1z(), $this.q1v_1);
      }
    }
    var pending = $this.p1v_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.s1z(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.o1z(keyInfo);
        var location = keyInfo.x1z_1;
        $this.q1v_1 = pending.a20(keyInfo) + pending.i1z_1 | 0;
        var relativePosition = pending.b20(keyInfo);
        var currentRelativePosition = relativePosition - pending.j1z_1 | 0;
        pending.c20(relativePosition, pending.j1z_1);
        recordReaderMoving($this, location);
        $this.o1w_1.d20(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.o1w_1.d1z();
        $this.w1w_1 = true;
        $this.s1w_1 = null;
        ensureWriter($this);
        $this.q1w_1.t1z();
        var startIndex_0 = $this.q1w_1.j1s_1;
        if (isNode) {
          $this.q1w_1.g1z(key, Companion_getInstance_1().y1s_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.q1w_1;
          tmp_2.f1z(key, objectKey == null ? Companion_getInstance_1().y1s_1 : objectKey, data);
        } else {
          var tmp_3 = $this.q1w_1;
          tmp_3.e1z(key, objectKey == null ? Companion_getInstance_1().y1s_1 : objectKey);
        }
        $this.u1w_1 = $this.q1w_1.u1z(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.n1z(insertKeyInfo_0, $this.q1v_1 - pending.i1z_1 | 0);
        pending.o1z(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.q1v_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.o1v_1.e20($this.p1v_1);
    $this.p1v_1 = newPending;
    $this.r1v_1.x1x($this.q1v_1);
    if (isNode)
      $this.q1v_1 = 0;
    $this.t1v_1.x1x($this.s1v_1);
    $this.s1v_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.o1v_1.f20();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.j1z_1 = previousPending.j1z_1 + 1 | 0;
    }
    $this.p1v_1 = previousPending;
    $this.q1v_1 = $this.r1v_1.f20() + expectedNodeCount | 0;
    $this.s1v_1 = $this.t1v_1.f20() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.w1w_1) {
      var parent = $this.q1w_1.k1s_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.q1w_1.x1y(parent), $this.q1w_1.w1y(parent), $this.q1w_1.v1y(parent));
    } else {
      var parent_0 = $this.o1w_1.k1y_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.o1w_1.x1y(parent_0), $this.o1w_1.w1y(parent_0), $this.o1w_1.v1y(parent_0));
    }
    var expectedNodeCount = $this.s1v_1;
    var pending = $this.p1v_1;
    if (!(pending == null) ? pending.h1z_1.g() > 0 : false) {
      var previous = pending.h1z_1;
      var current = pending.g20();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.g();
      var previousIndex = 0;
      var previousEnd = previous.g();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.m(previousIndex);
        if (!usedKeys.n(previousInfo)) {
          var deleteOffset = pending.a20(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.i1z_1 | 0, previousInfo.y1z_1);
          pending.h20(previousInfo.x1z_1, 0);
          recordReaderMoving($this, previousInfo.x1z_1);
          $this.o1w_1.d20(previousInfo.x1z_1);
          recordDelete($this);
          $this.o1w_1.u1y();
          removeRange($this.z1v_1, previousInfo.x1z_1, previousInfo.x1z_1 + $this.o1w_1.i20(previousInfo.x1z_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.n(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.m(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.a20(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.j20(currentInfo);
              recordMoveNode($this, nodePosition + pending.i1z_1 | 0, nodeOffset + pending.i1z_1 | 0, updatedCount);
              pending.k20(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.j20(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.g() > 0) {
        recordReaderMoving($this, $this.o1w_1.l20());
        $this.o1w_1.m1t();
      }
    }
    var removeIndex = $this.q1v_1;
    while (!$this.o1w_1.m20()) {
      var startSlot = $this.o1w_1.i1y_1;
      recordDelete($this);
      var nodesToRemove = $this.o1w_1.u1y();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.z1v_1, startSlot, $this.o1w_1.i1y_1);
    }
    var inserting = $this.w1w_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.o1w_1.o20();
      var parentGroup = $this.q1w_1.k1s_1;
      $this.q1w_1.p20();
      if (!$this.o1w_1.s20()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.q1w_1.q20();
        $this.q1w_1.o1y();
        recordInsert($this, $this.u1w_1);
        $this.w1w_1 = false;
        if (!$this.j1v_1.r20()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.o1w_1.k1y_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.o1w_1.n20();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.m1w_1;
    $this.m1w_1 = true;
    var recomposed = false;
    var parent = $this.o1w_1.k1y_1;
    var end = parent + $this.o1w_1.i20(parent) | 0;
    var recomposeIndex = $this.q1v_1;
    var recomposeCompoundKey = $this.x1w_1;
    var oldGroupNodeCount = $this.s1v_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.z1v_1, $this.o1w_1.i1y_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.u20_1;
      removeLocation($this.z1v_1, location);
      if (firstInRange_0.z20()) {
        recomposed = true;
        $this.o1w_1.d20(location);
        var newGroup = $this.o1w_1.i1y_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.q1v_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.x1w_1 = compoundKeyOf($this, $this.o1w_1.y1y(newGroup), parent, recomposeCompoundKey);
        $this.s1w_1 = null;
        firstInRange_0.t20_1.x20($this);
        $this.s1w_1 = null;
        $this.o1w_1.y20(parent);
      } else {
        $this.l1w_1.e20(firstInRange_0.t20_1);
        firstInRange_0.t20_1.w20();
        $this.l1w_1.f20();
      }
      firstInRange_0 = firstInRange($this.z1v_1, $this.o1w_1.i1y_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.o1w_1.m1t();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.q1v_1 = recomposeIndex + parentGroupNodes | 0;
      $this.s1v_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.x1w_1 = recomposeCompoundKey;
    $this.m1w_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.o1v_1.g() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.o1v_1.a21(pendingIndex);
            if (!(pending == null) ? pending.h20(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.o1w_1.k1y_1;
        } else {
          if ($this.o1w_1.b21(current))
            break $l$loop_0;
          current = $this.o1w_1.y1y(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.o1w_1.y1y(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.o1w_1.b21(anchorGroup)) {
      anchorGroup = $this.o1w_1.y1y(anchorGroup);
    }
    var index = $this.o1w_1.b21(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.o1w_1.c21(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.o1w_1.i20(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.v1v_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.z2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.u1v_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.o1w_1.c21(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.v1v_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.v1v_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.a5(group, count);
      } else {
        var tmp1_elvis_lhs = $this.u1v_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.o1w_1.g());
          fill(newCounts_0, -1);
          $this.u1v_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.u1v_1 = null;
    $this.v1v_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.o1w_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.b21(current)) {
        recordUp($this);
      }
      current = reader.y1y(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.o1w_1.y1y(group), nearestCommonRoot);
      if ($this.o1w_1.b21(group)) {
        recordDown($this, nodeAt($this.o1w_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.o1w_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.o1w_1.y1y(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(tmp0_rol, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.d21(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.w1y(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.h7_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.x1y(group);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.v1y(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().y1s_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.s1v_1 = $this.o1w_1.e21();
    $this.o1w_1.m1t();
  }
  function addRecomposeScope($this) {
    if ($this.w1w_1) {
      var tmp = $this.n1v_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.l1w_1.e20(scope);
      $this.f21(scope);
      scope.h21($this.i1w_1);
    } else {
      var invalidation = removeLocation($this.z1v_1, $this.o1w_1.k1y_1);
      var slot = $this.o1w_1.f();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().y1s_1)) {
        var tmp_1 = $this.n1v_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.f21(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.g21(!(invalidation == null));
      $this.l1w_1.e20(scope_0);
      scope_0.h21($this.i1w_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.d1t(get_movableContentKey(), content);
    $this.y1t(parameter);
    var savedCompoundKeyHash = $this.x1w_1;
    try {
      $this.x1w_1 = get_movableContentKey();
      if ($this.w1w_1) {
        $this.q1w_1.i21();
      }
      var providersChanged = $this.w1w_1 ? false : !equals($this.o1w_1.b1z(), locals);
      if (providersChanged) {
        $this.c1w_1.j21($this.o1w_1.i1y_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().r1y_1, locals);
      if ($this.w1w_1 ? !force : false) {
        $this.r1w_1 = true;
        $this.s1w_1 = null;
        var anchor = $this.q1w_1.u1z($this.q1w_1.y1y($this.q1w_1.k1s_1));
        var reference = new MovableContentStateReference(content, parameter, $this.n1v_1, $this.p1w_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.i1v_1.k21(reference);
      } else {
        var savedProvidersInvalid = $this.d1w_1;
        $this.d1w_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.d1w_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.x1w_1 = savedCompoundKeyHash;
      $this.e1t();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.m1v_1;
      var savedChanges = $this.l1v_1;
      try {
        $this.l1v_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.m(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.y4();
            var from = item.z4();
            var anchor = to.v1u_1;
            var location = to.u1u_1.l21(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.u1u_1;
              if (equals(toSlotTable, $this.p1w_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let = to.u1u_1.r1x();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.d20(location);
                $this.a1x_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.l()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.o1y();
              }
            } else {
              var resolvedState = $this.i1v_1.m21(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.n21_1;
              var fromTable = tmp1_elvis_lhs == null ? from.u1u_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.n21_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.u1z(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.v1u_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.l()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.u1u_1, $this.j1v_1)) {
                  var group = $this.j1v_1.l21(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.g() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let_0 = fromTable.r1x();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.o1w_1;
                  var savedCountOverrides = $this.u1v_1;
                  $this.u1v_1 = null;
                  try {
                    $this.o1w_1 = tmp0_let_0;
                    var newLocation = fromTable.l21(fromAnchor);
                    tmp0_let_0.d20(newLocation);
                    $this.a1x_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.l1v_1;
                      try {
                        $this.l1v_1 = offsetChanges_0;
                        var tmp_2 = tmp0_let_0.i1y_1;
                        var tmp_3 = from.w1u_1;
                        recomposeMovableContent($this, from.t1u_1, to.t1u_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.l1v_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.l()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.o1w_1 = savedReader;
                    $this.u1v_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp0_let_0.o1y();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.a1x_1 = 0;
        break $l$block_1;
      }finally {
        $this.l1v_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.c1x_1;
    var savedIsComposing = $this.m1w_1;
    var savedNodeIndex = $this.q1v_1;
    try {
      $this.c1x_1 = false;
      $this.m1w_1 = true;
      $this.q1v_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.m(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.y4();
          var instances = item.z4();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.r21_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.q21_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
                $this.p21(scope, tmp0_anonymous);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.p21(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.s21(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.c1x_1 = savedImplicitRootStart;
      $this.m1w_1 = savedIsComposing;
      $this.q1v_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.t21(_this__u8e3s4.k1y_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.t21(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.y1v_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.y1v_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.y1v_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.l1v_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.y1w_1;
    if (count > 0) {
      $this.y1w_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.z1w_1.u21()) {
      realizeDowns($this, $this.z1w_1.c4());
      $this.z1w_1.a4();
    }
  }
  function recordDown($this, node) {
    $this.z1w_1.e20(node);
  }
  function recordUp($this) {
    if ($this.z1w_1.u21()) {
      $this.z1w_1.f20();
    } else {
      $this.y1w_1 = $this.y1w_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.o1w_1.k1y_1 : $this.o1w_1.i1y_1;
    var distance = location - $this.a1x_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.a1x_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.v1w_1.l()) {
      var insertTable = $this.p1w_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.v1w_1);
      $this.v1w_1.a4();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.p1w_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.v1w_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.e1x_1.e20(change);
  }
  function registerInsertUpFixup($this) {
    $this.v1w_1.a($this.e1x_1.f20());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.o1w_1.i1y_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.a1x_1 = $this.a1x_1 + $this.o1w_1.v21() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      tmp0_let.t1z();
      tmp0_let.e1z(get_movableContentKey(), reference.r1u_1);
      tmp0_let.i21();
      tmp0_let.w21(reference.s1u_1);
      var anchors = slots.x21(reference.v1u_1, 1, tmp0_let);
      tmp0_let.u1y();
      tmp0_let.p20();
      tmp0_let.q20();
      tmp = anchors;
    }finally {
      tmp0_let.o1y();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_getInstance_5().z21(slotTable, anchors_0)) {
      var composition = $this.n1v_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = slotTable.a1z();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp_0;
      try {
        Companion_getInstance_5().y21(tmp0_let_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_getInstance();
      }finally {
        tmp0_let_0.o1y();
      }
    }
    $this.i1v_1.a22(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.j1v_1.b22()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.t1w_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $this.j1v_1.r1x();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.o1w_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.l1v_1;
          try {
            $this.l1v_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.b1x_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.l1v_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.o1y();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.o1w_1.i1y_1 - $this.a1x_1 | 0;
    $this.a1x_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.o1w_1.g() > 0) {
      var reader = $this.o1w_1;
      var location = reader.k1y_1;
      if (!($this.d1x_1.c22(-2) === location)) {
        if (!$this.b1x_1 ? $this.c1x_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.b1x_1 = true;
        }
        if (location > 0) {
          var anchor = reader.u1z(location);
          $this.d1x_1.x1x(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.o1w_1.k1y_1;
    var currentStartedGroup = $this.d1x_1.c22(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.d1x_1.c22(-1) === location) {
      $this.d1x_1.f20();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.b1x_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.b1x_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.o1v_1.l()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.d1x_1.l()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.p1v_1 = null;
    $this.q1v_1 = 0;
    $this.s1v_1 = 0;
    $this.a1x_1 = 0;
    $this.x1w_1 = 0;
    $this.y1v_1 = false;
    $this.b1x_1 = false;
    $this.d1x_1.a4();
    $this.l1w_1.a4();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.f1x_1 === nodeIndex) {
        $this.i1x_1 = $this.i1x_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.f1x_1 = nodeIndex;
        $this.i1x_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.i1x_1 > 0 ? $this.g1x_1 === (from - $this.i1x_1 | 0) : false) ? $this.h1x_1 === (to - $this.i1x_1 | 0) : false) {
        $this.i1x_1 = $this.i1x_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.g1x_1 = from;
        $this.h1x_1 = to;
        $this.i1x_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.i1x_1;
    $this.i1x_1 = 0;
    if (count > 0) {
      if ($this.f1x_1 >= 0) {
        var removeIndex = $this.f1x_1;
        $this.f1x_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.g1x_1;
        $this.g1x_1 = -1;
        var to = $this.h1x_1;
        $this.h1x_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder(ref) {
    this.d22_1 = ref;
  }
  protoOf(CompositionContextHolder).e22 = function () {
  };
  protoOf(CompositionContextHolder).f22 = function () {
    this.d22_1.gp();
  };
  protoOf(CompositionContextHolder).g22 = function () {
    this.d22_1.gp();
  };
  function CompositionContextImpl($outer, compoundHashKey, collectingParameterInformation) {
    this.g1v_1 = $outer;
    CompositionContext.call(this);
    this.b1v_1 = compoundHashKey;
    this.c1v_1 = collectingParameterInformation;
    this.d1v_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.e1v_1 = LinkedHashSet_init_$Create$();
    this.f1v_1 = mutableStateOf(persistentCompositionLocalHashMapOf());
  }
  protoOf(CompositionContextImpl).a1y = function () {
    return this.b1v_1;
  };
  protoOf(CompositionContextImpl).y1x = function () {
    return this.c1v_1;
  };
  protoOf(CompositionContextImpl).gp = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.e1v_1.l()) {
      var tmp0_safe_receiver = this.d1v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_iterator = this.e1v_1.d();
        while (tmp0_iterator.e()) {
          var composer = tmp0_iterator.f();
          var tmp1_iterator = tmp0_safe_receiver.d();
          while (tmp1_iterator.e()) {
            var table = tmp1_iterator.f();
            table.y3(composer.j1v_1);
          }
        }
      }
      this.e1v_1.a4();
    }
  };
  protoOf(CompositionContextImpl).h22 = function (composer) {
    protoOf(CompositionContext).h22.call(this, composer instanceof ComposerImpl ? composer : THROW_CCE());
    this.e1v_1.a(composer);
  };
  protoOf(CompositionContextImpl).i22 = function (composer) {
    var tmp0_safe_receiver = this.d1v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.CompositionContextImpl.unregisterComposer.<anonymous>' call
        element.y3((composer instanceof ComposerImpl ? composer : THROW_CCE()).j1v_1);
      }
    }
    // Inline function 'kotlin.collections.remove' call
    var tmp0_remove = this.e1v_1;
    (isInterface(tmp0_remove, MutableCollection) ? tmp0_remove : THROW_CCE()).y3(composer);
  };
  protoOf(CompositionContextImpl).j22 = function (composition) {
    this.g1v_1.i1v_1.j22(composition);
  };
  protoOf(CompositionContextImpl).k22 = function () {
    return this.g1v_1.i1v_1.k22();
  };
  protoOf(CompositionContextImpl).l22 = function (composition) {
    this.g1v_1.i1v_1.l22(this.g1v_1.n1v_1);
    this.g1v_1.i1v_1.l22(composition);
  };
  protoOf(CompositionContextImpl).u1x = function () {
    return _get_compositionLocalScope__ulge9q(this);
  };
  protoOf(CompositionContextImpl).m22 = function (scope) {
    _set_compositionLocalScope__ya1b9q(this, scope);
  };
  protoOf(CompositionContextImpl).z1x = function (table) {
    var tmp0_elvis_lhs = this.d1v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionContextImpl.recordInspectionTable.<anonymous>' call
      this.d1v_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(table);
  };
  protoOf(CompositionContextImpl).t1x = function () {
    var tmp0_this = this.g1v_1;
    tmp0_this.h1w_1 = tmp0_this.h1w_1 + 1 | 0;
  };
  protoOf(CompositionContextImpl).b1y = function () {
    var tmp0_this = this.g1v_1;
    tmp0_this.h1w_1 = tmp0_this.h1w_1 - 1 | 0;
  };
  protoOf(CompositionContextImpl).k21 = function (reference) {
    this.g1v_1.i1v_1.k21(reference);
  };
  protoOf(CompositionContextImpl).n22 = function (reference) {
    this.g1v_1.i1v_1.n22(reference);
  };
  protoOf(CompositionContextImpl).m21 = function (reference) {
    return this.g1v_1.i1v_1.m21(reference);
  };
  protoOf(CompositionContextImpl).a22 = function (reference, data) {
    this.g1v_1.i1v_1.a22(reference, data);
  };
  protoOf(CompositionContextImpl).o22 = function (composition) {
    this.g1v_1.i1v_1.o22(composition);
  };
  protoOf(CompositionContextImpl).p22 = function (composition, content) {
    this.g1v_1.i1v_1.p22(composition, content);
  };
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().y1s_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.h7_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.x1w_1;
    tmp.x1w_1 = rotateLeft(tmp0_rol, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().y1s_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.h7_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.x1w_1 ^ groupKey;
    tmp.x1w_1 = rotateRight(tmp0_ror, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.m1w_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().q22('Compose:recompose');
      try {
        $this.i1w_1 = currentSnapshot().w22();
        $this.c1w_1.a4();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.z22_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.x22_1[index];
            var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.y22_1[index];
            var tmp1_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0_anonymous.s1s_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a23_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.z1v_1.a(new Invalidation(tmp0_anonymous, location, tmp1_anonymous));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.z1v_1;
        if (tmp2_sortBy.g() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.q1v_1 = 0;
        var complete = false;
        $this.m1w_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.b23();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.f21((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var tmp3_observeDerivedStateRecalculations = $this.k1w_1;
          var observers = derivedStateObservers_0();
          try {
            observers.g23(tmp3_observeDerivedStateRecalculations);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.x1v_1 ? true : $this.d1w_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_1().y1s_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.h23();
            }
          }finally {
            var tmp$ret$2;
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            tmp$ret$2 = observers.e23_1 - 1 | 0;
            observers.z3(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.m1w_1 = false;
          $this.z1v_1.a4();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_getInstance().i23(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.j23_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).nj = function (a, b) {
    return this.j23_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.nj(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.k23(index)) {
      slots.m1t();
      if (slots.b21(slots.k1s_1)) {
        applier.i1q();
      }
      slots.p20();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.j1s_1;
    var current = slots.k1s_1;
    while (current >= 0 ? !slots.b21(current) : false) {
      current = slots.y1y(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.l23(original, current)) {
        if (slots.b21(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.b21(current) ? 1 : slots.c21(current)) | 0;
        current = current + slots.i20(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.l21(anchor);
    runtimeCheck(slots.j1s_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.j1s_1 < destination) {
      if (slots.n23(destination)) {
        if (slots.m23()) {
          applier.h1q(slots.t21(slots.j1s_1));
          nodeIndex = 0;
        }
        slots.c1z();
      } else
        nodeIndex = nodeIndex + slots.u1y() | 0;
    }
    runtimeCheck(slots.j1s_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.o1w_1.q23(group)) {
      var key = this$0.o1w_1.x1y(group);
      var objectKey = this$0.o1w_1.w1y(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.o1w_1.p23(group, 0);
        var anchor = this$0.o1w_1.u1z(group);
        var end = group + this$0.o1w_1.i20(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.z1v_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.g());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var tmp0_plusAssign = to(item.t20_1, item.v20_1);
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.n1v_1, this$0.j1v_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.i1v_1.n22(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.o1w_1.b21(group) ? 1 : this$0.o1w_1.c21(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.o1w_1.c21(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.o1w_1.p23(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.d22_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.e1v_1.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
              this$0.i1v_1.o22(element.n1v_1);
            }
          }
          tmp_0 = this$0.o1w_1.c21(group);
        } else {
          tmp_0 = this$0.o1w_1.c21(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.o1w_1.o23(group)) {
      var size = this$0.o1w_1.i20(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.o1w_1.b21(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.o1w_1.t21(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.o1w_1.i20(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.o1w_1.c21(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.r23_1 = this$0;
  }
  protoOf(ComposerImpl$derivedStateObserver$1).s23 = function (derivedState) {
    var tmp0_this = this.r23_1;
    tmp0_this.h1w_1 = tmp0_this.h1w_1 + 1 | 0;
  };
  protoOf(ComposerImpl$derivedStateObserver$1).t23 = function (derivedState) {
    var tmp0_this = this.r23_1;
    tmp0_this.h1w_1 = tmp0_this.h1w_1 - 1 | 0;
  };
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.u23($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.j1q($insertIndex, node);
      applier.h1q(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.v23($groupAnchor);
      applier.i1q();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.k1q($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.e1q();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).p1r();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.e1q();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.w23($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.w23($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.x23($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.p1s(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.su();
          tmp_0 = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSideEffect$lambda($effect) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.y23($effect);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1r(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.o1r();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.z23($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.a24($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda($node) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.b24($node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda($data, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp0_runtimeCheck = equals($data, slots.c24(slots.j1s_1, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      rememberManager.p1s($data);
      slots.x23($index, Companion_getInstance_1().y1s_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda_0($data, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_runtimeCheck = equals($data, slots.c24(slots.j1s_1, $index));
      var tmp;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Slot table is out of sync';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      slots.x23($index, Companion_getInstance_1().y1s_1);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda_0(this$0, $group) {
    return function (index, data) {
      var tmp0_subject = data;
      var tmp;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, RememberObserver) : false) {
        this$0.o1w_1.d20($group);
        recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda(data, index));
        tmp = Unit_getInstance();
      } else {
        if (tmp0_subject instanceof RecomposeScopeImpl) {
          data.su();
          this$0.o1w_1.d20($group);
          recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda_0(data, index));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.n1v_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.e24_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1t();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.l1v_1;
        try {
          this$0.l1v_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.o1w_1;
            var savedCountOverrides = this$0.u1v_1;
            this$0.u1v_1 = null;
            try {
              this$0.o1w_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.r1u_1, $to.x1u_1, $to.s1u_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.o1w_1 = savedReader;
              this$0.u1v_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.l1v_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.m(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.m(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.k1q(base + index | 0, item);
          applier.j1q(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.i1v_1.m21($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.f24(1, state.n21_1, 2);
      var tmp_0 = Companion_getInstance_5();
      var tmp_1 = $to.t1u_1;
      tmp_0.y21(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.r1u_1, $to.x1u_1, $to.s1u_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.m(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.p20();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.i1q();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.h1q($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.g24($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.t1z();
      slots.i24($insertTable, $anchor.h24($insertTable), false);
      slots.q20();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.a1z();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.g() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.m(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.o1y();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.t1z();
      slots.i24($insertTable, $anchor.h24($insertTable), false);
      slots.q20();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.j24_1 = $composition;
    this.k24_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).l24 = function (scope, instance) {
    var tmp = this.j24_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l24(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.k24_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.w1u_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        tmp0_also.g23(tmp0_also);
        tmp_2 = tmp0_also;
      }
      tmp_0.w1u_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).m24 = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).n24 = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.o24($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.l1q($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.m1q($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.u20_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.u20_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.h1v_1 = applier;
    this.i1v_1 = parentContext;
    this.j1v_1 = slotTable;
    this.k1v_1 = abandonSet;
    this.l1v_1 = changes;
    this.m1v_1 = lateChanges;
    this.n1v_1 = composition;
    this.o1v_1 = new Stack();
    this.p1v_1 = null;
    this.q1v_1 = 0;
    this.r1v_1 = new IntStack();
    this.s1v_1 = 0;
    this.t1v_1 = new IntStack();
    this.u1v_1 = null;
    this.v1v_1 = null;
    this.w1v_1 = false;
    this.x1v_1 = false;
    this.y1v_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z1v_1 = ArrayList_init_$Create$();
    this.a1w_1 = new IntStack();
    this.b1w_1 = persistentCompositionLocalHashMapOf();
    this.c1w_1 = new IntMap();
    this.d1w_1 = false;
    this.e1w_1 = new IntStack();
    this.f1w_1 = false;
    this.g1w_1 = -1;
    this.h1w_1 = 0;
    this.i1w_1 = 0;
    this.j1w_1 = true;
    var tmp_0 = this;
    tmp_0.k1w_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.l1w_1 = new Stack();
    this.m1w_1 = false;
    this.n1w_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.j1v_1.r1x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.o1y();
    tmp_1.o1w_1 = tmp0_also;
    this.p1w_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.p1w_1.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.o1y();
    tmp_2.q1w_1 = tmp0_also_0;
    this.r1w_1 = false;
    this.s1w_1 = null;
    this.t1w_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = this.p1w_1.r1x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = tmp0_let.u1z(0);
    }finally {
      tmp0_let.o1y();
    }
    tmp_3.u1w_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.v1w_1 = ArrayList_init_$Create$();
    this.w1w_1 = false;
    this.x1w_1 = 0;
    this.y1w_1 = 0;
    this.z1w_1 = new Stack();
    this.a1x_1 = 0;
    this.b1x_1 = false;
    this.c1x_1 = true;
    this.d1x_1 = new IntStack();
    this.e1x_1 = new Stack();
    this.f1x_1 = -1;
    this.g1x_1 = -1;
    this.h1x_1 = -1;
    this.i1x_1 = 0;
  }
  protoOf(ComposerImpl).z1s = function () {
    return this.h1v_1;
  };
  protoOf(ComposerImpl).p24 = function () {
    return this.h1w_1 > 0;
  };
  protoOf(ComposerImpl).j1u = function () {
    return this.i1v_1.k22();
  };
  protoOf(ComposerImpl).m1r = function (key) {
    return start(this, key, null, Companion_getInstance_2().r1y_1, null);
  };
  protoOf(ComposerImpl).o1r = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).f1t = function () {
    return start(this, -127, null, Companion_getInstance_2().r1y_1, null);
  };
  protoOf(ComposerImpl).g1t = function () {
    endGroup(this);
    var scope = this.q24();
    if (!(scope == null) ? scope.g20() : false) {
      scope.r24(true);
    }
  };
  protoOf(ComposerImpl).c1t = function () {
    var tmp;
    if (this.d1w_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.q24();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1t()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d1t = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().r1y_1, null);
  };
  protoOf(ComposerImpl).e1t = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).s24 = function () {
    createFreshInsertTable(this);
    this.c1w_1.a4();
  };
  protoOf(ComposerImpl).a1t = function () {
    return this.w1w_1;
  };
  protoOf(ComposerImpl).b1t = function () {
    var tmp;
    var tmp_0;
    if ((!this.w1w_1 ? !this.f1w_1 : false) ? !this.d1w_1 : false) {
      var tmp0_safe_receiver = this.q24();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t24()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.x1v_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).l1r = function () {
    return this.x1w_1;
  };
  protoOf(ComposerImpl).gp = function () {
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().q22('Compose:Composer.dispose');
      try {
        this.i1v_1.i22(this);
        this.l1w_1.a4();
        this.z1v_1.a4();
        this.l1v_1.a4();
        this.c1w_1.a4();
        this.h1v_1.a4();
        this.n1w_1 = true;
        break $l$block;
      }finally {
        Trace_getInstance().i23(token);
      }
    }
  };
  protoOf(ComposerImpl).o1t = function () {
    start(this, 125, null, Companion_getInstance_2().s1y_1, null);
    this.y1v_1 = true;
  };
  protoOf(ComposerImpl).p1t = function () {
    start(this, 125, null, Companion_getInstance_2().t1y_1, null);
    this.y1v_1 = true;
  };
  protoOf(ComposerImpl).q1t = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.w1w_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.r1v_1.u24();
    var groupAnchor = this.q1w_1.u1z(this.q1w_1.k1s_1);
    this.s1v_1 = this.s1v_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).r1t = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w1w_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.o1w_1, this);
    recordDown(this, node);
    var tmp;
    if (this.f1w_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).s1t = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).t1t = function (key, dataKey) {
    if ((this.o1w_1.p1z() === key ? !equals(this.o1w_1.b1z(), dataKey) : false) ? this.g1w_1 < 0 : false) {
      this.g1w_1 = this.o1w_1.i1y_1;
      this.f1w_1 = true;
    }
    start(this, key, null, Companion_getInstance_2().r1y_1, dataKey);
  };
  protoOf(ComposerImpl).u1t = function () {
    if (this.f1w_1 ? this.o1w_1.k1y_1 === this.g1w_1 : false) {
      this.g1w_1 = -1;
      this.f1w_1 = false;
    }
    end(this, false);
  };
  protoOf(ComposerImpl).v1t = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.w1w_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).b23 = function () {
    var tmp;
    if (this.w1w_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().y1s_1;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.o1w_1.f();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp = this.f1w_1 ? Companion_getInstance_1().y1s_1 : tmp0_let;
    }
    return tmp;
  };
  protoOf(ComposerImpl).y1t = function (value) {
    var tmp;
    if (!equals(this.b23(), value)) {
      this.f21(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).d1u = function (value) {
    var tmp;
    if (!(this.b23() === value)) {
      this.f21(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).z1t = function (value) {
    var next = this.b23();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.f21(value);
    return true;
  };
  protoOf(ComposerImpl).b1u = function (value) {
    var next = this.b23();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.f21(value);
    return true;
  };
  protoOf(ComposerImpl).c1u = function (value) {
    var next = this.b23();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.f21(value);
    return true;
  };
  protoOf(ComposerImpl).a1u = function (value) {
    var next = this.b23();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.f21(value);
    return true;
  };
  protoOf(ComposerImpl).f21 = function (value) {
    if (this.w1w_1) {
      this.q1w_1.w21(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.k1v_1.a(value);
      }
    } else {
      var groupSlotIndex = this.o1w_1.v24() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.k1v_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).e1u = function (effect) {
    record(this, ComposerImpl$recordSideEffect$lambda(effect));
  };
  protoOf(ComposerImpl).f1u = function () {
    return currentCompositionLocalScope(this);
  };
  protoOf(ComposerImpl).h1u = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.w1w_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.r1w_1 = true;
    } else {
      var tmp = this.o1w_1.w24(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.o1w_1.w24(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.b1t() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.w1w_1 : false) {
      this.c1w_1.j21(this.o1w_1.i1y_1, providers);
    }
    this.e1w_1.x1x(asInt(this.d1w_1));
    this.d1w_1 = invalid;
    this.s1w_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().r1y_1, providers);
  };
  protoOf(ComposerImpl).i1u = function () {
    endGroup(this);
    endGroup(this);
    this.d1w_1 = asBool(this.e1w_1.f20());
    this.s1w_1 = null;
  };
  protoOf(ComposerImpl).g1u = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).n1r = function () {
    startGroup_0(this, 206, get_reference());
    if (this.w1w_1) {
      this.q1w_1.i21();
    }
    var tmp = this.b23();
    var holder = tmp instanceof CompositionContextHolder ? tmp : null;
    if (holder == null) {
      holder = new CompositionContextHolder(new CompositionContextImpl(this, this.x1w_1, this.w1v_1));
      this.f21(holder);
    }
    holder.d22_1.m22(currentCompositionLocalScope(this));
    endGroup(this);
    return holder.d22_1;
  };
  protoOf(ComposerImpl).q24 = function () {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.l1w_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    return (this.h1w_1 === 0 ? tmp0_let.u21() : false) ? tmp0_let.u24() : null;
  };
  protoOf(ComposerImpl).p21 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.s1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.o1w_1.c1y_1;
    var location = anchor.h24(slotTable);
    if (this.m1w_1 ? location >= this.o1w_1.i1y_1 : false) {
      insertIfMissing(this.z1v_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).h23 = function () {
    if (this.z1v_1.l()) {
      skipGroup(this);
    } else {
      var reader = this.o1w_1;
      var key = reader.p1z();
      var dataKey = reader.r1z();
      var aux = reader.b1z();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.m23(), null);
      recomposeToGroupEnd(this);
      reader.n20();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).m1t = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.s1v_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.q24();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x24();
    }
    if (this.z1v_1.l()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).n1t = function (changed) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.s1v_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>' call
      var message = 'No nodes can be emitted before calling dactivateToEndGroup';
      composeRuntimeError(toString(message));
    }
    if (!this.w1w_1) {
      if (!changed) {
        skipReaderToGroupEnd(this);
        return Unit_getInstance();
      }
      var start = this.o1w_1.i1y_1;
      var end = this.o1w_1.j1y_1;
      var inductionVariable = start;
      if (inductionVariable < end)
        do {
          var group = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (this.o1w_1.b21(group)) {
            var node = this.o1w_1.t21(group);
            if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
              record(this, ComposerImpl$deactivateToEndGroup$lambda(node));
            }
          }
          var tmp = this.o1w_1;
          tmp.y24(group, ComposerImpl$deactivateToEndGroup$lambda_0(this, group));
        }
         while (inductionVariable < end);
      removeRange(this.z1v_1, start, end);
      this.o1w_1.d20(start);
      this.o1w_1.m1t();
    }
  };
  protoOf(ComposerImpl).h1t = function (key) {
    start(this, key, null, Companion_getInstance_2().r1y_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).i1t = function () {
    var scope = this.l1w_1.u21() ? this.l1w_1.f20() : null;
    if (scope != null) {
      scope.g21(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.z24(this.i1w_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.b25() : false) ? scope.g20() ? true : this.w1v_1 : false) {
      if (scope.s1s_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.w1w_1) {
          tmp_1 = this.q1w_1.u1z(this.q1w_1.k1s_1);
        } else {
          tmp_1 = this.o1w_1.u1z(this.o1w_1.k1y_1);
        }
        tmp_0.s1s_1 = tmp_1;
      }
      scope.a25(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).c25 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).j1t = function (sourceInformation) {
    if (this.w1w_1 ? this.j1w_1 : false) {
      this.q1w_1.d25(sourceInformation);
    }
  };
  protoOf(ComposerImpl).k1t = function (key, sourceInformation) {
    if (this.j1w_1) {
      start(this, key, null, Companion_getInstance_2().r1y_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).l1t = function () {
    if (this.j1w_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).e25 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.m1w_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.m1w_1 = true;
    try {
      block();
    }finally {
      this.m1w_1 = false;
    }
  };
  protoOf(ComposerImpl).f25 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l1v_1.l()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.u21()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.z1v_1.l();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.x1v_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.l1v_1.l();
    }
    return false;
  };
  protoOf(ComposerImpl).j1r = function () {
    return this.q24();
  };
  protoOf(ComposerImpl).w1t = function () {
    return this.b23();
  };
  protoOf(ComposerImpl).x1t = function (value) {
    return this.f21(value);
  };
  protoOf(ComposerImpl).k1r = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.g25(true);
    }
  };
  protoOf(ComposerImpl).h25 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.l1v_1.l()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.n21_1 = slotTable;
    this.o21_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.h1z_1.g();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.h1z_1.m(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.h1z_1 = keyInfos;
    this.i1z_1 = startIndex;
    this.j1z_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i1z_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k1z_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.h1z_1.g();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.h1z_1.m(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.x1z_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.y1z_1);
        result.a5(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.y1z_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.l1z_1 = result;
    var tmp_1 = this;
    tmp_1.m1z_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).i25 = function () {
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return this.m1z_1.s();
  };
  protoOf(Pending).s1z = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.i25(), joinedKey);
  };
  protoOf(Pending).o1z = function (keyInfo) {
    return this.k1z_1.a(keyInfo);
  };
  protoOf(Pending).g20 = function () {
    return this.k1z_1;
  };
  protoOf(Pending).c20 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.l1z_1.b3().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.j25_1;
        if (position === from)
          element.j25_1 = to;
        else if (to <= position ? position < from : false)
          element.j25_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.l1z_1.b3().d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.j25_1;
        if (position_0 === from)
          element_0.j25_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.j25_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).k20 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.l1z_1.b3().d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.k25_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.k25_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.k25_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.l1z_1.b3().d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.k25_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.k25_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.k25_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).n1z = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.l1z_1;
    var tmp1_set = keyInfo.x1z_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.a5(tmp1_set, tmp2_set);
  };
  protoOf(Pending).h20 = function (group, newCount) {
    var groupInfo = this.l1z_1.z2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.k25_1;
      var difference = newCount - groupInfo.l25_1 | 0;
      groupInfo.l25_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.l1z_1.b3().d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.k25_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.k25_1 + difference | 0;
            if (newIndex >= 0)
              element.k25_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).b20 = function (keyInfo) {
    var tmp0_safe_receiver = this.l1z_1.z2(keyInfo.x1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j25_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).a20 = function (keyInfo) {
    var tmp0_safe_receiver = this.l1z_1.z2(keyInfo.x1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k25_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).j20 = function (keyInfo) {
    var tmp0_safe_receiver = this.l1z_1.z2(keyInfo.x1z_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l25_1;
    return tmp1_elvis_lhs == null ? keyInfo.y1z_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.t20_1 = scope;
    this.u20_1 = location;
    this.v20_1 = instances;
  }
  protoOf(Invalidation).z20 = function () {
    return this.t20_1.m25(this.v20_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.r1y_1 = _GroupKind___init__impl__iwqg06(0);
    this.s1y_1 = _GroupKind___init__impl__iwqg06(1);
    this.t1y_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.g()) {
      var validation = _this__u8e3s4.m(index);
      if (validation.u20_1 < end) {
        _this__u8e3s4.z3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.g()) {
      var firstInvalidation = _this__u8e3s4.m(index);
      if (firstInvalidation.u20_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.z3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.y1y(a) === b)
      return b;
    if (_this__u8e3s4.y1y(b) === a)
      return a;
    if (_this__u8e3s4.y1y(a) === _this__u8e3s4.y1y(b))
      return _this__u8e3s4.y1y(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.y1y(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.y1y(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.y1y(currentA);
      currentB = _this__u8e3s4.y1y(currentB);
    }
    return currentA;
  }
  function get_reuseKey() {
    return reuseKey;
  }
  var reuseKey;
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.g23(instance);
        tmp_0 = tmp0_also;
      }
      _this__u8e3s4.v3(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.m(index).v20_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.m(index).v20_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.g23(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.r1x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.l21(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.o1y();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.g()) {
      var invalidation = _this__u8e3s4.m(index);
      if (invalidation.u20_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.j25_1 = slotIndex;
    this.k25_1 = nodeIndex;
    this.l25_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.z2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.w1z_1 == null) ? new JoinedKey(_this__u8e3s4.v1z_1, _this__u8e3s4.w1z_1) : _this__u8e3s4.v1z_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.z2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    return tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.g() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.m(mid);
      var cmp = compareTo(midVal.u20_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.y1y(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.z2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.y3(value);
      var tmp_0;
      if (tmp0_safe_receiver.l()) {
        _this__u8e3s4.ye(key);
        tmp_0 = Unit_getInstance();
      }
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), value)) {
      tmp0_with.x1t(value);
      _Updater___get_composer__impl__9ty7av($this).v1t(value, block);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.n25_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.n25_1 = composer;
  }
  protoOf(SkippableUpdater).toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.n25_1);
  };
  protoOf(SkippableUpdater).hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.n25_1);
  };
  protoOf(SkippableUpdater).equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.n25_1, other);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.b21(group)) {
      result.a($reader.t21(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.i20(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.i20(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.m1t();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.p20();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.o25(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.p25();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function compositionLocalScope$factory() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function compositionLocalScope$factory_0() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.i25();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.g26_1.p24();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.s25_1.n26(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s25_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.s25_1.n26(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.s25_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.w25_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.r21_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (!$this.b26_1.u26(value, tmp1_anonymous) ? !tmp1_anonymous.p26(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp1_anonymous.o26() ? !forgetConditionalScopes : false) {
              $this.x25_1.a(tmp1_anonymous);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.a(tmp1_anonymous);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.r21_1;
      var inductionVariable = 0;
      var last = values.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp0_anonymous instanceof RecomposeScopeImpl) {
            tmp0_anonymous.p26(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp0_anonymous, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var tmp0_forEachScopeOf = $this.y25_1;
            var index = find_2(tmp0_forEachScopeOf, tmp0_anonymous);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = tmp0_fastForEach.r21_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp0_fastForEach.q21_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var tmp1_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.p26(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var tmp0_forEachScopeOf_0 = $this.y25_1;
          var index_0 = find_2(tmp0_forEachScopeOf_0, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_0 = scopeSetAt(tmp0_forEachScopeOf_0, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = tmp0_fastForEach_0.r21_1;
            var inductionVariable_1 = 0;
            var last_1 = tmp0_fastForEach_0.q21_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var tmp1_anonymous_0 = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.x25_1.l();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp2_removeValueIf = $this.w25_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var valueOrder = tmp2_removeValueIf.q26_1;
      var scopeSets = tmp2_removeValueIf.s26_1;
      var values_3 = tmp2_removeValueIf.r26_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = tmp2_removeValueIf.t26_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.r21_1;
          var size = set.q21_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.x25_1.n(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.n(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.q21_1 = destinationIndex_0;
          if (set.q21_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = tmp2_removeValueIf.t26_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      tmp2_removeValueIf.t26_1 = destinationIndex;
      $this.x25_1.a4();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.w25_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var valueOrder_0 = tmp0_removeValueIf.q26_1;
        var scopeSets_0 = tmp0_removeValueIf.s26_1;
        var values_5 = tmp0_removeValueIf.r26_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = tmp0_removeValueIf.t26_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.r21_1;
            var size_0 = set_0.q21_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = isObject(tmp_6) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.n(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.q21_1 = destinationIndex_2;
            if (set_0.q21_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = tmp0_removeValueIf.t26_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        tmp0_removeValueIf.t26_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.y25_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = tmp0_removeValueIf.q26_1;
    var scopeSets = tmp0_removeValueIf.s26_1;
    var values = tmp0_removeValueIf.r26_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.t26_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.r21_1;
        var size = set.q21_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.w25_1.v26(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.q21_1 = destinationIndex_0;
        if (set.q21_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = tmp0_removeValueIf.t26_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    tmp0_removeValueIf.t26_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.x25_1.l()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.x25_1.d();
      while (iter.e()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.f().o26()) {
          iter.b5();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.w25_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.r21_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp1_anonymous.p26(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.b26_1.w26(value, tmp1_anonymous);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.u25_1);
    try {
      if (changes.l())
        return Unit_getInstance();
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().q22('Compose:applyChanges');
        try {
          $this.r25_1.f1q();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $this.v25_1.a1z();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.r25_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.g() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.m(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.a4();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.o1y();
          }
          $this.r25_1.g1q();
          break $l$block;
        }finally {
          Trace_getInstance().i23(token);
        }
      }
      manager.d27();
      manager.e27();
      if ($this.d26_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().q22('Compose:unobserve');
          try {
            $this.d26_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.w25_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var valueOrder = tmp0_removeValueIf.q26_1;
            var scopeSets = tmp0_removeValueIf.s26_1;
            var values = tmp0_removeValueIf.r26_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.t26_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.r21_1;
                var size = set.q21_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.f27()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.q21_1 = destinationIndex_0;
                if (set.q21_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = tmp0_removeValueIf.t26_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            tmp0_removeValueIf.t26_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_getInstance().i23(token_0);
          }
        }
      }
    }finally {
      if ($this.a26_1.l()) {
        manager.g27();
      }
    }
  }
  function abandonChanges($this) {
    $this.s25_1.h27(null);
    $this.z25_1.a4();
    $this.a26_1.a4();
    $this.u25_1.a4();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.i27() ? $this.g26_1.p21(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.e26_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.v25_1.j27($this.f26_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.c26_1.k27(scope, null);
      } else {
        addValue($this.c26_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.q25_1.l22($this);
    return $this.i27() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.c26_1;
    $this.c26_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.x26_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y26_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z26_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.a27_1 = ArrayList_init_$Create$();
    this.b27_1 = null;
    this.c27_1 = null;
  }
  protoOf(RememberEventDispatcher).w23 = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.z26_1.j2(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.z26_1.z3(tmp0_let);
      tmp = this.x26_1.y3(instance);
    } else {
      tmp = this.y26_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).p1s = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.y26_1.j2(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.y26_1.z3(tmp0_let);
      tmp = this.x26_1.y3(instance);
    } else {
      tmp = this.z26_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).y23 = function (effect) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.a27_1.a(effect);
  };
  protoOf(RememberEventDispatcher).b24 = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.b27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var tmp0_also = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.deactivating.<anonymous>' call
      this.b27_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(instance);
  };
  protoOf(RememberEventDispatcher).o1s = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.c27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var tmp0_also = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.c27_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(instance);
  };
  protoOf(RememberEventDispatcher).d27 = function () {
    var deactivating = this.b27_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.l())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().q22('Compose:deactivations');
        try {
          var inductionVariable = deactivating.g() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.m(i);
              instance.q1r();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          break $l$block;
        }finally {
          Trace_getInstance().i23(token);
        }
      }
      deactivating.a4();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z26_1.l()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().q22('Compose:onForgotten');
        try {
          var inductionVariable_0 = this.z26_1.g() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.z26_1.m(i_0);
              if (!this.x26_1.n(instance_0)) {
                instance_0.g22();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          break $l$block_0;
        }finally {
          Trace_getInstance().i23(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y26_1.l()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_1 = Trace_getInstance().q22('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.y26_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = tmp0_fastForEach.g() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = tmp0_fastForEach.m(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.x26_1.y3(item);
              item.e22();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_getInstance();
          }
          break $l$block_1;
        }finally {
          Trace_getInstance().i23(token_1);
        }
      }
    }
    var releasing = this.c27_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.l())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_2 = Trace_getInstance().q22('Compose:releases');
        try {
          var inductionVariable_2 = releasing.g() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.m(i_1);
              instance_1.r1r();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_getInstance();
          }
          break $l$block_2;
        }finally {
          Trace_getInstance().i23(token_2);
        }
      }
      releasing.a4();
    }
  };
  protoOf(RememberEventDispatcher).e27 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a27_1.l()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().q22('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.a27_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.g() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.m(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.a27_1.a4();
          break $l$block;
        }finally {
          Trace_getInstance().i23(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).g27 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x26_1.l()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().q22('Compose:abandons');
        try {
          var iterator = this.x26_1.d();
          while (iterator.e()) {
            var instance = iterator.f();
            iterator.b5();
            instance.f22();
          }
          break $l$block;
        }finally {
          Trace_getInstance().i23(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.q25_1 = parent;
    this.r25_1 = applier;
    this.s25_1 = new AtomicReference(null);
    this.t25_1 = createSynchronizedObject();
    this.u25_1 = HashSet_init_$Create$();
    this.v25_1 = new SlotTable();
    this.w25_1 = new IdentityScopeMap();
    this.x25_1 = HashSet_init_$Create$();
    this.y25_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z25_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.a26_1 = ArrayList_init_$Create$();
    this.b26_1 = new IdentityScopeMap();
    this.c26_1 = new IdentityArrayMap();
    this.d26_1 = false;
    this.e26_1 = null;
    this.f26_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.r25_1, this.q25_1, this.v25_1, this.u25_1, this.z25_1, this.a26_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.q25_1.h22(tmp0_also);
    tmp_1.g26_1 = tmp0_also;
    this.h26_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.q25_1;
    tmp_2.i26_1 = tmp_3 instanceof Recomposer;
    this.j26_1 = false;
    this.k26_1 = ComposableSingletons$CompositionKt_getInstance().l27_1;
  }
  protoOf(CompositionImpl).i27 = function () {
    return this.g26_1.m1w_1;
  };
  protoOf(CompositionImpl).n27 = function () {
    return this.j26_1;
  };
  protoOf(CompositionImpl).gp = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (!this.j26_1) {
      this.j26_1 = true;
      this.o27(ComposableSingletons$CompositionKt_getInstance().m27_1);
      var deferredChanges = this.g26_1.t1w_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.v25_1.k1x_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !this.u25_1.l();
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.u25_1);
        if (nonEmptySlotTable) {
          this.r25_1.f1q();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var tmp0_let = this.v25_1.a1z();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp_1;
          try {
            removeCurrentGroup(tmp0_let, manager);
            tmp_1 = Unit_getInstance();
          }finally {
            tmp0_let.o1y();
          }
          this.r25_1.a4();
          this.r25_1.g1q();
          manager.d27();
        }
        manager.g27();
      }
      this.g26_1.gp();
      tmp = Unit_getInstance();
    }
    this.q25_1.j22(this);
  };
  protoOf(CompositionImpl).p27 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.<get-hasInvalidations>.<anonymous>' call
    return this.c26_1.z22_1 > 0;
  };
  protoOf(CompositionImpl).q27 = function (values) {
    $l$loop: while (true) {
      var old = this.s25_1.sv();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.s25_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.s25_1.r27(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.t25_1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).s27 = function (values) {
    var tmp0_iterator = values.d();
    while (tmp0_iterator.e()) {
      var value = tmp0_iterator.f();
      if (this.w25_1.v26(value) ? true : this.y25_1.v26(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).e25 = function (block) {
    return this.g26_1.e25(block);
  };
  protoOf(CompositionImpl).n24 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.g26_1.q24();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.g25(true);
        var alreadyRead = tmp0_safe_receiver.t27(value);
        var tmp;
        if (!alreadyRead) {
          this.w25_1.w26(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.y25_1.u27(value);
            var indexedObject = value.v27().w27();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.y25_1.w26(dependency, value);
            }
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).x27 = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp0_forEachScopeOf = this.y25_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.r21_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.q21_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp1_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, tmp1_anonymous);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).y27 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var tmp0_also = this.g26_1.f25(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = tmp0_also;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.c26_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.u25_1.l();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).z27 = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.w4_1.t1u_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.g26_1.c25(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u25_1.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).a28 = function (state) {
    var manager = new RememberEventDispatcher(this.u25_1);
    var slotTable = state.n21_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.o1y();
    }
    manager.d27();
  };
  protoOf(CompositionImpl).b28 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.z25_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.u25_1.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).c28 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.a26_1.l()) {
          applyChangesInLocked(this, this.a26_1);
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.u25_1.l();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s24 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.g26_1.s24();
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.u25_1.l()) {
          (new RememberEventDispatcher(this.u25_1)).g27();
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.u25_1.l();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).d28 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.t25_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var indexedObject = this.v25_1.l1x_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.e28();
      }
    }
  };
  protoOf(CompositionImpl).s21 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.e26_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.f26_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.e26_1 = null;
        this.f26_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).l24 = function (scope, instance) {
    if (scope.f28()) {
      scope.a25(true);
    }
    var anchor = scope.s1s_1;
    if (anchor == null ? true : !anchor.f27())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.v25_1.g28(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.t25_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.e26_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.h28())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).m24 = function (scope) {
    this.d26_1 = true;
  };
  protoOf(CompositionImpl).i28 = function (instance, scope) {
    this.w25_1.u26(instance, scope);
  };
  protoOf(CompositionImpl).j28 = function (state) {
    if (!this.w25_1.v26(state)) {
      this.y25_1.u27(state);
    }
  };
  protoOf(CompositionImpl).o27 = function (set__$_ezb9bk) {
    this.k26_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).k28 = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.j26_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.o27(content);
    this.q25_1.p22(this, this.k26_1);
  };
  protoOf(CompositionImpl).l28 = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.t25_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.g26_1.h25(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.c26_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.u25_1.l();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.u25_1)).g27();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.d24(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.l27_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.m27_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.n28(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.m28(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.g23(value);
    } else {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.g23(value);
      _this__u8e3s4.k27(key, tmp0_also);
    }
  }
  function Composition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.s1x_1 = 0;
  }
  protoOf(CompositionContext).z1x = function (table) {
  };
  protoOf(CompositionContext).h22 = function (composer) {
  };
  protoOf(CompositionContext).i22 = function (composer) {
  };
  protoOf(CompositionContext).u1x = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).t1x = function () {
  };
  protoOf(CompositionContext).b1y = function () {
  };
  protoOf(CompositionContext).m21 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.o28_1 = new LazyValueHolder(defaultFactory);
    this.p28_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.t28_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).u28 = function (value) {
    return new ProvidedValue(this, value, true);
  };
  protoOf(ProvidableCompositionLocal).v28 = function (value) {
    return new ProvidedValue(this, value, false);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).q28 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.h1u(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.i1u();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable_0(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-221175223);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)247@10707L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.d1u(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-221175223, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:246)');
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = context.a29_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.g());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp0_map.q().d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider$composable.<anonymous>' call
        var tmp = item.r();
        tmp$ret$1 = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).u28(item.s().s());
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$4 = copyToArray(tmp0_mapTo);
      CompositionLocalProvider$composable(tmp$ret$4.slice(), content, $composer_0, 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1t();
    }
    var tmp0_safe_receiver = $composer_0.i1t();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.z28(CompositionLocalProvider$composable$lambda_0(context, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.f29_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).q28 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.f29_1);
      $composer_1.x1t(value_0);
      tmp = value_0;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.f1d(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CompositionLocalProvider$composable$lambda_0($context, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable_0($context, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.g29_1 = persistentCompositionLocalHashMapOf();
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.o28_1.s();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.t2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.z2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.m1r(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.m1u_1 ? true : !contains_0(parentScope, provided.k1u_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.k1u_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.k1u_1.q28(provided.l1u_1, $composer_0, 0);
        tmp0_apply.a5(tmp0_set, tmp1_set);
      }
      $composer_0.o1r();
    }
    var tmp0 = tmp0_apply.df();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function get_calculationBlockNestedLevel() {
    _init_properties_DerivedState_kt__eqt0x8();
    return calculationBlockNestedLevel;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().sv();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      var tmp0_also = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().l29(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function derivedStateOf(calculation) {
    _init_properties_DerivedState_kt__eqt0x8();
    return new DerivedSnapshotState(calculation, null);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.m29_1 = new Object();
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ResultRecord() {
    Companion_getInstance_4();
    StateRecord.call(this);
    this.q29_1 = 0;
    this.r29_1 = 0;
    this.s29_1 = null;
    this.t29_1 = Companion_getInstance_4().m29_1;
    this.u29_1 = 0;
    this.v29_1 = 8;
  }
  protoOf(ResultRecord).w29 = function (value) {
    var other = value instanceof ResultRecord ? value : THROW_CCE();
    this.s29_1 = other.s29_1;
    this.t29_1 = other.t29_1;
    this.u29_1 = other.u29_1;
  };
  protoOf(ResultRecord).x29 = function () {
    return new ResultRecord();
  };
  protoOf(ResultRecord).y29 = function (derivedState, snapshot) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.ResultRecord.isValid.<anonymous>' call
    var snapshotChanged = !(this.q29_1 === snapshot.w22()) ? true : !(this.r29_1 === snapshot.z29());
    var isValid = !(this.t29_1 === Companion_getInstance_4().m29_1) ? !snapshotChanged ? true : this.u29_1 === this.a2a(derivedState, snapshot) : false;
    if (isValid ? snapshotChanged : false) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.q29_1 = snapshot.w22();
      this.r29_1 = snapshot.z29();
    }
    return isValid;
  };
  protoOf(ResultRecord).a2a = function (derivedState, snapshot) {
    var hash = 7;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>' call
    var dependencies = this.s29_1;
    if (!(dependencies == null)) {
      // Inline function 'androidx.compose.runtime.notifyObservers' call
      var observers = derivedStateObservers_0();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size = observers.e23_1;
      if (size > 0) {
        var i = 0;
        var tmp = observers.c23_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          content[i].s23(derivedState);
          i = i + 1 | 0;
        }
         while (i < size);
      }
      var tmp_0;
      try {
        var inductionVariable = 0;
        var last = dependencies.z22_1;
        var tmp_1;
        if (inductionVariable < last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            $l$block: {
              // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>.<anonymous>' call
              var tmp_2 = dependencies.x22_1[index];
              var tmp0_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp_3 = dependencies.y22_1[index];
              var tmp1_anonymous = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
              if (!equals(tmp1_anonymous, 1)) {
                break $l$block;
              }
              var tmp_4;
              if (tmp0_anonymous instanceof DerivedSnapshotState) {
                tmp_4 = tmp0_anonymous.f2a(snapshot);
              } else {
                tmp_4 = current_0(tmp0_anonymous.b2a(), snapshot);
              }
              var record = tmp_4;
              hash = imul(31, hash) + identityHashCode(record) | 0;
              hash = imul(31, hash) + record.g2a_1 | 0;
            }
          }
           while (inductionVariable < last);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }finally {
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = observers.e23_1;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_5 = observers.c23_1;
          var content_0 = isArray(tmp_5) ? tmp_5 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            content_0[i_0].t23(derivedState);
            i_0 = i_0 + 1 | 0;
          }
           while (i_0 < size_0);
        }
      }
    }
    return hash;
  };
  protoOf(ResultRecord).j2a = function () {
    var tmp = this.t29_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ResultRecord).w27 = function () {
    var tmp0_safe_receiver = this.s29_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x22_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  function currentRecord($this, readable, snapshot, forceDependencyReads, calculation) {
    if (readable.y29($this, snapshot)) {
      if (forceDependencyReads) {
        // Inline function 'androidx.compose.runtime.notifyObservers' call
        var observers = derivedStateObservers_0();
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size = observers.e23_1;
        if (size > 0) {
          var i = 0;
          var tmp = observers.c23_1;
          var content = isArray(tmp) ? tmp : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            content[i].s23($this);
            i = i + 1 | 0;
          }
           while (i < size);
        }
        var tmp_0;
        try {
          var dependencies = readable.s29_1;
          var tmp0_elvis_lhs = get_calculationBlockNestedLevel().sv();
          var invalidationNestedLevel = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
          if (dependencies == null)
            null;
          else {
            // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
            var inductionVariable = 0;
            var last = dependencies.z22_1;
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>.<anonymous>' call
                var tmp_1 = dependencies.x22_1[index];
                var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                var tmp_2 = dependencies.y22_1[index];
                var tmp1_anonymous = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
                get_calculationBlockNestedLevel().l29(tmp1_anonymous + invalidationNestedLevel | 0);
                var tmp0_safe_receiver = snapshot.k2a();
                if (tmp0_safe_receiver == null)
                  null;
                else
                  tmp0_safe_receiver(tmp0_anonymous);
              }
               while (inductionVariable < last);
          }
          get_calculationBlockNestedLevel().l29(invalidationNestedLevel);
          tmp_0 = Unit_getInstance();
        }finally {
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var size_0 = observers.e23_1;
          if (size_0 > 0) {
            var i_0 = 0;
            var tmp_3 = observers.c23_1;
            var content_0 = isArray(tmp_3) ? tmp_3 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
              content_0[i_0].t23($this);
              i_0 = i_0 + 1 | 0;
            }
             while (i_0 < size_0);
          }
        }
      }
      return readable;
    }
    var tmp0_elvis_lhs_0 = get_calculationBlockNestedLevel().sv();
    var nestedCalculationLevel = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    var newDependencies = new IdentityArrayMap();
    // Inline function 'androidx.compose.runtime.notifyObservers' call
    var observers_0 = derivedStateObservers_0();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var size_1 = observers_0.e23_1;
    if (size_1 > 0) {
      var i_1 = 0;
      var tmp_4 = observers_0.c23_1;
      var content_1 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
        content_1[i_1].s23($this);
        i_1 = i_1 + 1 | 0;
      }
       while (i_1 < size_1);
    }
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
      get_calculationBlockNestedLevel().l29(nestedCalculationLevel + 1 | 0);
      var tmp_6 = Companion_getInstance_13();
      var result = tmp_6.l2a(DerivedSnapshotState$currentRecord$lambda($this, newDependencies, nestedCalculationLevel), null, calculation);
      get_calculationBlockNestedLevel().l29(nestedCalculationLevel);
      tmp_5 = result;
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size_2 = observers_0.e23_1;
      if (size_2 > 0) {
        var i_2 = 0;
        var tmp_7 = observers_0.c23_1;
        var content_2 = isArray(tmp_7) ? tmp_7 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          content_2[i_2].t23($this);
          i_2 = i_2 + 1 | 0;
        }
         while (i_2 < size_2);
      }
    }
    var result_0 = tmp_5;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
    var currentSnapshot = Companion_getInstance_13().e1q();
    var tmp_8;
    var tmp_9;
    if (!(readable.t29_1 === Companion_getInstance_4().m29_1)) {
      var tmp0_safe_receiver_0 = $this.d2a_1;
      var tmp_10;
      if (tmp0_safe_receiver_0 == null) {
        tmp_10 = null;
      } else {
        var tmp_11 = readable.t29_1;
        tmp_10 = tmp0_safe_receiver_0.m2a(result_0, (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE());
      }
      tmp_9 = tmp_10 === true;
    } else {
      tmp_9 = false;
    }
    if (tmp_9) {
      readable.s29_1 = newDependencies;
      readable.u29_1 = readable.a2a($this, currentSnapshot);
      readable.q29_1 = snapshot.w22();
      readable.r29_1 = snapshot.z29();
      tmp_8 = readable;
    } else {
      var writable = newWritableRecord($this.e2a_1, $this, currentSnapshot);
      writable.s29_1 = newDependencies;
      writable.u29_1 = writable.a2a($this, currentSnapshot);
      writable.q29_1 = snapshot.w22();
      writable.r29_1 = snapshot.z29();
      writable.t29_1 = result_0;
      tmp_8 = writable;
    }
    var record = tmp_8;
    if (nestedCalculationLevel === 0) {
      Companion_getInstance_13().n2a();
    }
    return record;
  }
  function displayValue($this) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = $this.e2a_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    if (tmp1_anonymous.y29($this, Companion_getInstance_13().e1q())) {
      return toString_0(tmp1_anonymous.t29_1);
    }
    return '<Not calculated>';
  }
  function DerivedSnapshotState$currentRecord$lambda(this$0, $newDependencies, $nestedCalculationLevel) {
    return function (it) {
      var tmp;
      if (it === this$0) {
        throw IllegalStateException_init_$Create$('A derived state calculation cannot read itself');
      }
      var tmp_0;
      if (isInterface(it, StateObject)) {
        var readNestedLevel = ensureNotNull(get_calculationBlockNestedLevel().sv());
        var tmp$ret$0;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = readNestedLevel - $nestedCalculationLevel | 0;
        var tmp0_elvis_lhs = $newDependencies.m28(it);
        var tmp1_min = tmp0_elvis_lhs == null ? IntCompanionObject_getInstance().MAX_VALUE : tmp0_elvis_lhs;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
        $newDependencies.k27(it, tmp$ret$0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function DerivedSnapshotState(calculation, policy) {
    this.c2a_1 = calculation;
    this.d2a_1 = policy;
    this.e2a_1 = new ResultRecord();
  }
  protoOf(DerivedSnapshotState).i29 = function () {
    return this.d2a_1;
  };
  protoOf(DerivedSnapshotState).f2a = function (snapshot) {
    return currentRecord(this, current_0(this.e2a_1, snapshot), snapshot, false, this.c2a_1);
  };
  protoOf(DerivedSnapshotState).b2a = function () {
    return this.e2a_1;
  };
  protoOf(DerivedSnapshotState).o2a = function (value) {
    var tmp = this;
    tmp.e2a_1 = value instanceof ResultRecord ? value : THROW_CCE();
  };
  protoOf(DerivedSnapshotState).s = function () {
    var tmp0_safe_receiver = Companion_getInstance_13().e1q().k2a();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this);
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.e2a_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-value>.<anonymous>' call
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp = currentRecord(this, tmp1_anonymous, Companion_getInstance_13().e1q(), true, this.c2a_1).t29_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DerivedSnapshotState).v27 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.e2a_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-currentRecord>.<anonymous>' call
    var tmp1_anonymous = current(tmp0_withCurrent);
    return currentRecord(this, tmp1_anonymous, Companion_getInstance_13().e1q(), false, this.c2a_1);
  };
  protoOf(DerivedSnapshotState).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.e2a_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.toString.<anonymous>' call
    current(tmp0_withCurrent);
    return 'DerivedState(value=' + displayValue(this) + ')@' + hashCode(this);
  };
  function derivedStateOf_0(policy, calculation) {
    _init_properties_DerivedState_kt__eqt0x8();
    return new DerivedSnapshotState(calculation, policy);
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.q2a_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.m1r(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.j1u();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.r2a_1 = task;
    this.s2a_1 = CoroutineScope(parentCoroutineContext);
    this.t2a_1 = null;
  }
  protoOf(LaunchedEffectImpl).e22 = function () {
    var tmp0_safe_receiver = this.t2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.t2a_1 = launch(this.s2a_1, VOID, VOID, this.r2a_1);
  };
  protoOf(LaunchedEffectImpl).g22 = function () {
    var tmp0_safe_receiver = this.t2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xn(new LeftCompositionCancellationException());
    }
    this.t2a_1 = null;
  };
  protoOf(LaunchedEffectImpl).f22 = function () {
    var tmp0_safe_receiver = this.t2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xn(new LeftCompositionCancellationException());
    }
    this.t2a_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function LaunchedEffect$composable_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.m1r(-1365960137);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2)360@15249L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1365960137, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:354)');
    }
    var applyContext = $composer_0.j1u();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(key1) | $composer_1.y1t(key2));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.m1r(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.y1t(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function SideEffect$composable(effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.m1r(-706403066);
    sourceInformation($composer_0, 'C(SideEffect$composable):Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-706403066, $changed, -1, 'androidx.compose.runtime.SideEffect$composable (Effects.kt:44)');
    }
    $composer_0.e1u(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.u2a_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).e22 = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).g22 = function () {
    cancel_0(this.u2a_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).f22 = function () {
    cancel_0(this.u2a_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.u6(Key_getInstance()) == null)) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      tmp0_apply.ju(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(tmp0_apply);
    } else {
      var applyContext = composer.j1u();
      tmp = CoroutineScope(applyContext.b7(Job(applyContext.u6(Key_getInstance()))).b7(coroutineContext));
    }
    return tmp;
  }
  function DisposableEffectImpl(effect) {
    this.v2a_1 = effect;
    this.w2a_1 = null;
  }
  protoOf(DisposableEffectImpl).e22 = function () {
    this.w2a_1 = this.v2a_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).g22 = function () {
    var tmp0_safe_receiver = this.w2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gp();
    }
    this.w2a_1 = null;
  };
  protoOf(DisposableEffectImpl).f22 = function () {
  };
  function DisposableEffect$composable_0(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.m1r(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.y1t(key1) | $composer_1.y1t(key2));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.h7_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.x2a_1 = left;
    this.y2a_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.x2a_1), 31) + hashCodeOf(this, this.y2a_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.x2a_1) + ', right=' + toString_0(this.y2a_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.x2a_1, tmp0_other_with_cast.x2a_1))
      return false;
    if (!equals(this.y2a_1, tmp0_other_with_cast.y2a_1))
      return false;
    return true;
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u6(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withFrameNanos(onFrame, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.p5();
    return get_monotonicFrameClock(tmp$ret$0).i1r(onFrame, $completion);
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.z2a_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.z2a_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.z2a_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.z2a_1 === tmp0_other_with_cast.z2a_1))
      return false;
    return true;
  };
  function produceState$composable(initialValue, key1, key2, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-655265235);
    sourceInformation($composer_0, 'C(produceState$composable)147@5571L41,148@5617L101:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-655265235, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:141)');
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
    if (false ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var result = tmp0;
    LaunchedEffect$composable_0(key1, key2, produceState$composable$slambda_0(producer, result, null), $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return result;
  }
  function ProduceStateScope() {
  }
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.a2b_1 = coroutineContext;
    this.b2b_1 = state;
  }
  protoOf(ProduceStateScopeImpl).om = function () {
    return this.a2b_1;
  };
  protoOf(ProduceStateScopeImpl).f1d = function (_set____db54di) {
    this.b2b_1.f1d(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).s = function () {
    return this.b2b_1.s();
  };
  protoOf(ProduceStateScopeImpl).y4 = function () {
    return this.b2b_1.y4();
  };
  protoOf(ProduceStateScopeImpl).z4 = function () {
    return this.b2b_1.z4();
  };
  function produceState$composable_0(initialValue, key1, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(-847538551);
    sourceInformation($composer_0, 'C(produceState$composable)113@4223L41,114@4269L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-847538551, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:108)');
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
    if (false ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    var result = tmp0;
    LaunchedEffect$composable(key1, produceState$composable$slambda_2(producer, result, null), $composer_0, 14 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return result;
  }
  function produceState$composable$slambda($producer, $result, resultContinuation) {
    this.k2b_1 = $producer;
    this.l2b_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(produceState$composable$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.k2b_1(new ProduceStateScopeImpl(this.l2b_1, this.m2b_1.om()), this);
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
  protoOf(produceState$composable$slambda).u1e = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda(this.k2b_1, this.l2b_1, completion);
    i.m2b_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function produceState$composable$slambda_1($producer, $result, resultContinuation) {
    this.v2b_1 = $producer;
    this.w2b_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda_1).t1e = function ($this$LaunchedEffect, $completion) {
    var tmp = this.u1e($this$LaunchedEffect, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(produceState$composable$slambda_1).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.v2b_1(new ProduceStateScopeImpl(this.w2b_1, this.x2b_1.om()), this);
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
  protoOf(produceState$composable$slambda_1).u1e = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda_1(this.v2b_1, this.w2b_1, completion);
    i.x2b_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_2($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda_1($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.t1e($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.q1s_1 = $this.q1s_1 | 32;
    } else {
      $this.q1s_1 = $this.q1s_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.q1s_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.q1s_1 = $this.q1s_1 | 16;
    } else {
      $this.q1s_1 = $this.q1s_1 & -17;
    }
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).y21 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.l()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.m(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.y2b(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.z2b(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_3).z21 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.l()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.g28(item)) {
              var tmp_1 = slots.c24(slots.l21(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.u1s_1 === $token ? equals($tmp0_safe_receiver, this$0.v1s_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var keys = $tmp0_safe_receiver.b2c_1;
        var values = $tmp0_safe_receiver.c2c_1;
        var size = $tmp0_safe_receiver.a2c_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = values[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.i28(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.j28(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.w1s_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.d2c(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.z22_1 === 0) {
                    this$0.w1s_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        $tmp0_safe_receiver.a2c_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.a2c_1 === 0) {
          this$0.v1s_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(owner) {
    Companion_getInstance_5();
    this.q1s_1 = 0;
    this.r1s_1 = owner;
    this.s1s_1 = null;
    this.t1s_1 = null;
    this.u1s_1 = 0;
    this.v1s_1 = null;
    this.w1s_1 = null;
  }
  protoOf(RecomposeScopeImpl).f27 = function () {
    var tmp;
    if (!(this.r1s_1 == null)) {
      var tmp0_safe_receiver = this.s1s_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f27();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).h28 = function () {
    return !(this.t1s_1 == null);
  };
  protoOf(RecomposeScopeImpl).g25 = function (value) {
    if (value) {
      this.q1s_1 = this.q1s_1 | 1;
    } else {
      this.q1s_1 = this.q1s_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).g20 = function () {
    return !((this.q1s_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).r24 = function (value) {
    if (value) {
      this.q1s_1 = this.q1s_1 | 2;
    } else {
      this.q1s_1 = this.q1s_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).f28 = function () {
    return !((this.q1s_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).a25 = function (value) {
    if (value) {
      this.q1s_1 = this.q1s_1 | 4;
    } else {
      this.q1s_1 = this.q1s_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).c1t = function () {
    return !((this.q1s_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).g21 = function (value) {
    if (value) {
      this.q1s_1 = this.q1s_1 | 8;
    } else {
      this.q1s_1 = this.q1s_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).t24 = function () {
    return !((this.q1s_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).x20 = function (composer) {
    var tmp0_safe_receiver = this.t1s_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    }
  };
  protoOf(RecomposeScopeImpl).p26 = function (value) {
    var tmp0_safe_receiver = this.r1s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l24(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).su = function () {
    var tmp0_safe_receiver = this.r1s_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m24(this);
    }
    this.r1s_1 = null;
    this.v1s_1 = null;
    this.w1s_1 = null;
  };
  protoOf(RecomposeScopeImpl).z2b = function (owner) {
    this.r1s_1 = owner;
  };
  protoOf(RecomposeScopeImpl).e28 = function () {
    var tmp0_safe_receiver = this.r1s_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.l24(this, null);
  };
  protoOf(RecomposeScopeImpl).z28 = function (block) {
    this.t1s_1 = block;
  };
  protoOf(RecomposeScopeImpl).b25 = function () {
    return !((this.q1s_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).h21 = function (token) {
    this.u1s_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).x24 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).t27 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.v1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.v1s_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.e2c(instance, this.u1s_1);
    if (token === this.u1s_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.w1s_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.w1s_1 = tmp1_also;
        tmp_0 = tmp1_also;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.k27(instance, instance.v27().j2a());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).o26 = function () {
    return !(this.w1s_1 == null);
  };
  protoOf(RecomposeScopeImpl).m25 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.w1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.u21()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.i29();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.m2a(element.v27().j2a(), trackedDependencies.m28(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).w20 = function () {
    var tmp0_safe_receiver = this.r1s_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.v1s_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.b2c_1;
          var values = tmp0_safe_receiver_0.c2c_1;
          var size = tmp0_safe_receiver_0.a2c_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var tmp0_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.n24(tmp0_anonymous);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(RecomposeScopeImpl).z24 = function (token) {
    var tmp0_safe_receiver = this.v1s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.b25()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.b2c_1;
          var values = tmp0_safe_receiver.c2c_1;
          var size = tmp0_safe_receiver.a2c_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              isObject(tmp_2) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.f2c_1.s();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.f2c_1.g1d(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.f2c_1.s();
      var new_0 = old.y3(info);
      if (old === new_0 ? true : $this.f2c_1.g1d(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.a4();
    toInsert.a4();
    toApply.a4();
    toLateApply.a4();
    toComplete.a4();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.a4();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.r2c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.m(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.r2c_1.a4();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().q22('Recomposer:animation');
          try {
            this$0.j2c_1.h1r(frameTime);
            Companion_getInstance_13().g2d();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().i23(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().q22('Recomposer:recompose');
        try {
          recordComposerModifications(this$0);
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.k2c_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.p2c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.g() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.m(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.p2c_1.a4();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.l();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.l();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.g() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.m(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.g23(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.a4();
            }
            if (modifiedValues.u21()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.k2c_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.n2c_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.g() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.m(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.e1(item_1) ? item_1.s27(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.l()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.l();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.l();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.i2c_1;
            tmp0_this.i2c_1 = tmp1.pk();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.g() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.m(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.a(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = $toApply.g() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = $toApply.m(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.b28();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.a4();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.l();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.d();
              while (tmp0_iterator.e()) {
                var element = tmp0_iterator.f();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.c28();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.a4();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.l();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.d();
              while (tmp0_iterator_0.e()) {
                var element_0 = tmp0_iterator_0.f();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.s24();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.a4();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.k2c_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_13().n2a();
          this$0.v2c_1 = null;
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().i23(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.k2c_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.b2d_1.s().i7(State_Idle_getInstance()) >= 0) {
        this$0.o2c_1.h2d(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.n5(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.q2d_1 = $block;
    this.r2d_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).t1e = function ($this$coroutineScope, $completion) {
    var tmp = this.u1e($this$coroutineScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.q2d_1(this.s2d_1, this.r2d_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).u1e = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.q2d_1, this.r2d_1, completion);
    i.s2d_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.t1e($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.a2d_1 ? $this.j2c_1.g1r() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.b2d_1.s().i7(State_ShuttingDown_getInstance()) <= 0) {
      $this.n2c_1.a4();
      $this.o2c_1 = new IdentityArraySet();
      $this.p2c_1.a4();
      $this.q2c_1.a4();
      $this.r2c_1.a4();
      $this.u2c_1 = null;
      var tmp0_safe_receiver = $this.w2c_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.yr();
      $this.w2c_1 = null;
      $this.z2c_1 = null;
      return null;
    }
    var tmp;
    if (!($this.z2c_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.l2c_1 == null) {
        $this.o2c_1 = new IdentityArraySet();
        $this.p2c_1.a4();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.p2c_1.l()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.o2c_1.u21();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.q2c_1.l();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.r2c_1.l();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.x2c_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.b2d_1.f1d(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var tmp3_also = $this.w2c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.w2c_1 = null;
      tmp_5 = tmp3_also;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.y2c_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.c2d_1.lu().d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.pm()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.t2d_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.u2d_1 = recoverable;
    this.v2d_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.o2c_1.l())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.o2c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.o2c_1 = new IdentityArraySet();
    var changes = tmp0_also;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.n2c_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.g() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.m(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.q27(changes);
            if ($this.b2d_1.s().i7(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.o2c_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.k2c_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.o2c_1.h2d(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.m2c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.b2d_1.s().i7(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.l2c_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.l2c_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_6().g2c_1.sv()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.k2c_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.q2c_1.a4();
      $this.p2c_1.a4();
      $this.o2c_1 = new IdentityArraySet();
      $this.r2c_1.a4();
      $this.s2c_1.a4();
      $this.t2c_1.a4();
      $this.z2c_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.u2c_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var tmp0_also = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.u2c_1 = tmp0_also;
          tmp_0 = tmp0_also;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.n(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.n2c_1.y3(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.o2c_1.u21()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.p2c_1.l();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.p5();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.j2c_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.r2c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.t1u_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.l()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.i27() ? true : composition.n27()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.v2c_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_13().f2e(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.g2e();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.u21()) === true) {
              composition.e25(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.y27();
            break $l$block;
          }finally {
            snapshot.h2e(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.g());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.m(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.t1u_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.z2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.a5(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.a(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.q().d();
    while (tmp0_iterator.e()) {
      var tmp1_loop_parameter = tmp0_iterator.f();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.r();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.s();
      runtimeCheck(!composition.i27());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_13().f2e(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.g2e();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.k2c_1;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.g());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.g() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.m(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_plusAssign = to(item_0, removeLastMultiValue($this.s2c_1, item_0.r1u_1));
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.z27(pairs);
              break $l$block;
            }finally {
              snapshot.h2e(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.a3());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.s2c_1.l()) {
      var references = flatten($this.s2c_1.b3());
      $this.s2c_1.a4();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.g());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var tmp0_plusAssign = to(item, $this.t2c_1.z2(item));
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.t2c_1.a4();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.m(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.y4();
        var state = item_0.z4();
        if (!(state == null)) {
          reference.t1u_1.a28(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.x2e();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.gp();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.p2c_1.l()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.f2c_1 = MutableStateFlow(persistentSetOf());
    this.g2c_1 = new AtomicReference(false);
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.a4();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.r2c_1.d();
    while (iterator.e()) {
      var value = iterator.f();
      if (equals(value.t1u_1, $composition)) {
        toInsert.a(value);
        iterator.b5();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.k2c_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.b2d_1.s().i7(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.m2c_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.n5(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.k2c_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.m2c_1 = tmp_0;
      this$0.b2d_1.f1d(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.k2c_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.l2c_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.b2d_1.f1d(State_ShuttingDown_getInstance());
        if (!this$0.y2c_1) {
          runnerJob.xn(cancellation);
        } else if (!(this$0.w2c_1 == null)) {
          continuationToResume = this$0.w2c_1;
        }
        this$0.w2c_1 = null;
        tmp = runnerJob.rn(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.m2c_1 = cancellation;
        this$0.b2d_1.f1d(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.n5(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.g2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).o2f = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.p2f($this$recompositionRunner, parentFrameClock, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.o2f(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 6;
            var tmp_0 = this;
            tmp_0.j2f_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.k2f_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.l2f_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.m2f_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.n2f_1 = LinkedHashSet_init_$Create$();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.g2f_1)) {
              this.dl_1 = 5;
              continue $sm;
            }

            this.dl_1 = 2;
            suspendResult = awaitWorkAvailable(this.g2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.g2f_1)) {
              this.dl_1 = 1;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.dl_1 = 4;
            suspendResult = this.i2f_1.i1r(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.g2f_1, this.j2f_1, this.k2f_1, this.l2f_1, this.m2f_1, this.n2f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.g2f_1);
            this.dl_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 6) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).p2f = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.g2f_1, completion);
    i.h2f_1 = $this$recompositionRunner;
    i.i2f_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.o2f($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.y2f_1 = this$0;
    this.z2f_1 = $block;
    this.a2g_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).t1e = function ($this$withContext, $completion) {
    var tmp = this.u1e($this$withContext, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(Recomposer$recompositionRunner$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.c2g_1 = get_job(this.b2g_1.om());
            registerRunnerJob(this.y2f_1, this.c2g_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_13();
            tmp_0.d2g_1 = tmp_1.f2g(Recomposer$recompositionRunner$slambda$lambda(this.y2f_1));
            addRunning(Companion_getInstance_6(), this.y2f_1.e2d_1);
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.y2f_1.k2c_1;
            var tmp1_fastForEach = toMutableList(this.y2f_1.n2c_1);
            var inductionVariable = 0;
            var last = tmp1_fastForEach.g() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp1_fastForEach.m(index);
                item.d28();
              }
               while (inductionVariable <= last);
            this.dl_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.z2f_1, this.a2g_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e2g_1 = suspendResult;
            this.el_1 = 5;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.d2g_1.gp();
            this.y2f_1.k2c_1;
            if (this.y2f_1.l2c_1 === this.c2g_1) {
              this.y2f_1.l2c_1 = null;
            }

            deriveStateLocked(this.y2f_1);
            removeRunning(Companion_getInstance_6(), this.y2f_1.e2d_1);
            return Unit_getInstance();
          case 4:
            this.el_1 = 5;
            var t = this.gl_1;
            this.d2g_1.gp();
            this.y2f_1.k2c_1;
            if (this.y2f_1.l2c_1 === this.c2g_1) {
              this.y2f_1.l2c_1 = null;
            }

            deriveStateLocked(this.y2f_1);
            removeRunning(Companion_getInstance_6(), this.y2f_1.e2d_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).u1e = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.y2f_1, this.z2f_1, this.a2g_1, completion);
    i.b2g_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.t1e($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var values = $modifiedValues.r21_1;
      var inductionVariable = 0;
      var last = $modifiedValues.q21_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var tmp0_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
          $composition.x27(tmp0_anonymous);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.n24(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.x27(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.g23(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2e_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.e2e_1)) {
              this.dl_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.jq();
              this.e2e_1.k2c_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.e2e_1)) {
                tmp_0 = cancellable;
              } else {
                this.e2e_1.w2c_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                Companion_getInstance();
                tmp0_safe_receiver.n5(_Result___init__impl__xyqfz8(Unit_getInstance()));
              }
              suspendResult = returnIfSuspended(cancellable.lq(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 1:
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_6();
    CompositionContext.call(this);
    this.i2c_1 = new Long(0, 0);
    var tmp = this;
    tmp.j2c_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.k2c_1 = createSynchronizedObject();
    this.l2c_1 = null;
    this.m2c_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n2c_1 = ArrayList_init_$Create$();
    this.o2c_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.p2c_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.q2c_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.r2c_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.s2c_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.t2c_1 = LinkedHashMap_init_$Create$();
    this.u2c_1 = null;
    this.v2c_1 = null;
    this.w2c_1 = null;
    this.x2c_1 = 0;
    this.y2c_1 = false;
    this.z2c_1 = null;
    this.a2d_1 = false;
    this.b2d_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.u6(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.rn(Recomposer$effectJob$lambda(this));
    tmp_6.c2d_1 = tmp0_apply;
    this.d2d_1 = effectCoroutineContext.b7(this.j2c_1).b7(this.c2d_1);
    this.e2d_1 = new RecomposerInfoImpl(this);
    this.f2d_1 = 8;
  }
  protoOf(Recomposer).k22 = function () {
    return this.d2d_1;
  };
  protoOf(Recomposer).g2g = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).a1y = function () {
    return 1000;
  };
  protoOf(Recomposer).y1x = function () {
    return false;
  };
  protoOf(Recomposer).z1x = function (table) {
  };
  protoOf(Recomposer).j22 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'kotlin.collections.minusAssign' call
    this.n2c_1.y3(composition);
    // Inline function 'kotlin.collections.minusAssign' call
    this.p2c_1.y3(composition);
    this.q2c_1.y3(composition);
  };
  protoOf(Recomposer).l22 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.p2c_1.n(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.p2c_1.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.n5(tmp$ret$3);
    }
  };
  protoOf(Recomposer).k21 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.r2c_1.a(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.n5(tmp$ret$3);
    }
  };
  protoOf(Recomposer).n22 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.s2c_1, reference.r1u_1, reference);
  };
  protoOf(Recomposer).a22 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.t2c_1.a5(reference, data);
  };
  protoOf(Recomposer).o22 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.v2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var tmp0_also = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.v2c_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.a(composition);
  };
  protoOf(Recomposer).m21 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.t2c_1.ye(reference);
  };
  protoOf(Recomposer).p22 = function (composition, content) {
    var composerWasComposing = composition.i27();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_13().f2e(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.g2e();
            try {
              composition.l28(content);
              break $l$block;
            }finally {
              snapshot.h2e(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_13().n2a();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k2c_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.b2d_1.s().i7(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.n2c_1.n(composition)) {
        this.n2c_1.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.b28();
      composition.c28();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_13().n2a();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.z2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.l()) {
        _this__u8e3s4.ye(key);
      }
      tmp = tmp0_also;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.z2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.i20(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.j1s_1);
    if (fromWriter.w1r_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.b1s_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.t1r_1;
    var currentGroup = toWriter.j1s_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.t1r_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    var slots = toWriter.u1r_1;
    var currentSlot = toWriter.z1r_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.u1r_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.k1s_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.d1s_1;
    var slotsGapLen = toWriter.c1s_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.b1s_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.d1s_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.v1r_1, fromIndex, fromWriter.g());
    var endAnchors = locationOf(fromWriter.v1r_1, sourceGroupsEnd, fromWriter.g());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.v1r_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.m(anchorIndex);
          sourceAnchor.a23_1 = sourceAnchor.a23_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.v1r_1, toWriter.j1s_1, toWriter.g());
      toWriter.v1r_1.w3(insertLocation, anchors);
      sourceAnchors.v1(startAnchors, endAnchors).a4();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.y1y(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.c1z();
        fromWriter.g24(parentGroup - fromWriter.j1s_1 | 0);
        fromWriter.c1z();
      }
      fromWriter.g24(fromIndex - fromWriter.j1s_1 | 0);
      var anchorsRemoved = fromWriter.x1s();
      if (needsStartGroups) {
        fromWriter.m1t();
        fromWriter.p20();
        fromWriter.m1t();
        fromWriter.p20();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.f1s_1 = toWriter.f1s_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.j1s_1 = currentGroup + groupsToMove | 0;
      toWriter.z1r_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.e1s_1 > 0;
    $this.i1s_1.x1x($this.f1s_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.j1s_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().y1s_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().y1s_1) : false;
      initGroup($this.t1r_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.k1s_1, $this.z1r_1);
      $this.a1s_1 = $this.z1r_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.u1r_1;
        var currentSlot = $this.z1r_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.z1r_1 = currentSlot;
      }
      $this.f1s_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.k1s_1 = current;
      $this.j1s_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.k1s_1;
      $this.g1s_1.x1x(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.j1s_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().y1s_1)) {
        if (isNode) {
          $this.h2g(aux);
        } else {
          $this.z23(aux);
        }
      }
      $this.z1r_1 = slotIndex($this.t1r_1, $this, currentGroupAddress);
      $this.a1s_1 = dataIndex_0($this.t1r_1, $this, groupIndexToAddress($this, $this.j1s_1 + 1 | 0));
      $this.f1s_1 = nodeCount($this.t1r_1, currentGroupAddress);
      $this.k1s_1 = currentGroup;
      $this.j1s_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.t1r_1, currentGroupAddress) | 0;
    }
    tmp.y1r_1 = tmp_0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.t1r_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.t1r_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.m1s_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.u21()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.j2g(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.m1s_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.m1s_1 = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.k2g(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.t1r_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.t1r_1, groupAddress, containsAnyMarks);
      var parent = $this.y1y(group);
      if (parent >= 0) {
        set.k2g(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.i20(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.t1r_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.i20(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.h1s_1.x1x((_get_capacity__a9k9f3($this) - $this.x1r_1 | 0) - $this.y1r_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.x1r_1 | 0) - $this.h1s_1.f20() | 0;
    $this.y1r_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.w1r_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.t1r_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.t1r_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.x1r_1;
    var gapStart = $this.w1r_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.v1r_1.l()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.t1r_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.t1r_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.t1r_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.w1r_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.c1s_1;
    var gapStart = $this.b1s_1;
    var slotsGapOwner = $this.d1s_1;
    if (!(gapStart === index)) {
      var slots = $this.u1r_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
      }
    }
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.g();
    var newSlotsGapOwner = Math.min(tmp3_min, tmp4_min);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.u1r_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.w1r_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.t1r_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.t1r_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.x1r_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.t1r_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.t1r_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.w1r_1)
            updateAddress_0 = updateAddress_0 + $this.x1r_1 | 0;
        }
      }
      $this.d1s_1 = newSlotsGapOwner;
    }
    $this.b1s_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.b1s_1;
    var slotsGapEnd = slotsGapStart + $this.c1s_1 | 0;
    fill_0($this.u1r_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.j1s_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.w1r_1;
      var gapLen = $this.x1r_1;
      var oldCapacity = $this.t1r_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.t1r_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, tmp4_copyInto);
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        $this.t1r_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.y1r_1;
      if (currentEnd >= gapStart)
        $this.y1r_1 = currentEnd + size | 0;
      $this.w1r_1 = gapStart + size | 0;
      $this.x1r_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.d1s_1 < gapStart ? 0 : $this.b1s_1, $this.c1s_1, $this.u1r_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.t1r_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.d1s_1;
      if (slotsGapOwner >= gapStart) {
        $this.d1s_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.z1r_1, group);
      var gapStart = $this.b1s_1;
      var gapLen = $this.c1s_1;
      if (gapLen < size) {
        var slots = $this.u1r_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.u1r_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.a1s_1;
      if (currentDataEnd >= gapStart)
        $this.a1s_1 = currentDataEnd + size | 0;
      $this.b1s_1 = gapStart + size | 0;
      $this.c1s_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.v1r_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.l())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.w1r_1 = start;
      var previousGapLen = $this.x1r_1;
      var newGapLen = previousGapLen + len | 0;
      $this.x1r_1 = newGapLen;
      var slotsGapOwner = $this.d1s_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp_0.d1s_1 = Math.max(start, tmp0_max);
      }
      if ($this.y1r_1 >= $this.w1r_1) {
        $this.y1r_1 = $this.y1r_1 - len | 0;
      }
      if (containsGroupMark($this, $this.k1s_1)) {
        updateContainsMark($this, $this.k1s_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.c1s_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.b1s_1 = start;
      $this.c1s_1 = gapLen + len | 0;
      fill_0($this.u1r_1, null, start, start + len | 0);
      var currentDataEnd = $this.a1s_1;
      if (currentDataEnd >= start)
        $this.a1s_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.t1r_1.length ? isNode($this.t1r_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.u1r_1[dataIndexToDataAddress($this, nodeIndex($this.t1r_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.x1r_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.v1r_1, previousGapStart, size);
      $l$loop_0: while (index < $this.v1r_1.g()) {
        var anchor = $this.v1r_1.m(index);
        var location = anchor.a23_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.a23_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.v1r_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.v1r_1.g()) {
        var anchor_0 = $this.v1r_1.m(index_0);
        var location_0 = anchor_0.a23_1;
        if (location_0 >= 0) {
          anchor_0.a23_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.x1r_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.v1r_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var index = tmp0_let >= $this.v1r_1.g() ? tmp0_let - 1 | 0 : tmp0_let;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.v1r_1.m(index);
      var location = $this.l21(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.a23_1 = IntCompanionObject_getInstance().MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.v1r_1.v1(removeAnchorStart, removeAnchorEnd).a4();
    }
    return tmp1_also;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.g();
    var index = locationOf($this.v1r_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.v1r_1.g()) {
        var anchor = $this.v1r_1.m(index);
        var location = $this.l21(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.v1r_1.z3(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.m(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.l21(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.w1r_1) {
          item.a23_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.a23_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.v1r_1, newAnchorIndex, groupsSize);
        $this.v1r_1.v3(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.t1r_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.w1r_1 ? index : index + $this.x1r_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.b1s_1 ? dataIndex : dataIndex + $this.c1s_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.t1r_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.u1r_1.length - $this.c1s_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.c1s_1, $this.u1r_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.u1r_1.length - $this.c1s_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.c1s_1, $this.u1r_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.b1s_1, $this.c1s_1, $this.u1r_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.g() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.g() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.m2g_1 = $end;
    this.n2g_1 = this$0;
    this.l2g_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).e = function () {
    return this.l2g_1 < this.m2g_1;
  };
  protoOf(SlotWriter$groupSlots$1).f = function () {
    var tmp;
    if (this.e()) {
      var tmp_0 = this.n2g_1.u1r_1;
      var tmp1 = this.l2g_1;
      this.l2g_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.n2g_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_7();
    this.s1r_1 = table;
    this.t1r_1 = this.s1r_1.j1x_1;
    this.u1r_1 = this.s1r_1.l1x_1;
    this.v1r_1 = this.s1r_1.q1x_1;
    this.w1r_1 = this.s1r_1.k1x_1;
    this.x1r_1 = (this.t1r_1.length / 5 | 0) - this.s1r_1.k1x_1 | 0;
    this.y1r_1 = this.s1r_1.k1x_1;
    this.z1r_1 = 0;
    this.a1s_1 = 0;
    this.b1s_1 = this.s1r_1.m1x_1;
    this.c1s_1 = this.u1r_1.length - this.s1r_1.m1x_1 | 0;
    this.d1s_1 = this.s1r_1.k1x_1;
    this.e1s_1 = 0;
    this.f1s_1 = 0;
    this.g1s_1 = new IntStack();
    this.h1s_1 = new IntStack();
    this.i1s_1 = new IntStack();
    this.j1s_1 = 0;
    this.k1s_1 = -1;
    this.l1s_1 = false;
    this.m1s_1 = null;
  }
  protoOf(SlotWriter).m23 = function () {
    return this.j1s_1 < this.y1r_1 ? isNode(this.t1r_1, groupIndexToAddress(this, this.j1s_1)) : false;
  };
  protoOf(SlotWriter).b21 = function (index) {
    return isNode(this.t1r_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).c21 = function (index) {
    return nodeCount(this.t1r_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).x1y = function (index) {
    return key(this.t1r_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).w1y = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.t1r_1, address) ? this.u1r_1[objectKeyIndex(this.t1r_1, address)] : null;
  };
  protoOf(SlotWriter).i20 = function (index) {
    return groupSize(this.t1r_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).v1y = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.t1r_1, address) ? this.u1r_1[auxIndex(this.t1r_1, this, address)] : Companion_getInstance_1().y1s_1;
  };
  protoOf(SlotWriter).k23 = function (index) {
    return (index > this.k1s_1 ? index < this.y1r_1 : false) ? true : this.k1s_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).n23 = function (index) {
    return this.l23(index, this.j1s_1);
  };
  protoOf(SlotWriter).l23 = function (index, group) {
    var tmp;
    if (group === this.k1s_1) {
      tmp = this.y1r_1;
    } else if (group > this.g1s_1.c22(0)) {
      tmp = group + this.i20(group) | 0;
    } else {
      var openIndex = this.g1s_1.o2g(group);
      tmp = openIndex < 0 ? group + this.i20(group) | 0 : (_get_capacity__a9k9f3(this) - this.x1r_1 | 0) - this.h1s_1.a21(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).t21 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.t1r_1, address) ? this.u1r_1[dataIndexToDataAddress(this, nodeIndex(this.t1r_1, this, address))] : null;
  };
  protoOf(SlotWriter).v23 = function (anchor) {
    return this.t21(anchor.p2g(this));
  };
  protoOf(SlotWriter).y1y = function (index) {
    return parent(this.t1r_1, this, index);
  };
  protoOf(SlotWriter).o1y = function () {
    this.l1s_1 = true;
    if (this.g1s_1.l()) {
      moveGroupGapTo(this, this.g());
      moveSlotGapTo(this, this.u1r_1.length - this.c1s_1 | 0, this.w1r_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.s1r_1.q2g(this, this.t1r_1, this.w1r_1, this.u1r_1, this.b1s_1, this.v1r_1);
  };
  protoOf(SlotWriter).p25 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.j1s_1 = 0;
    this.y1r_1 = _get_capacity__a9k9f3(this) - this.x1r_1 | 0;
    this.z1r_1 = 0;
    this.a1s_1 = 0;
    this.f1s_1 = 0;
  };
  protoOf(SlotWriter).w21 = function (value) {
    var result = this.r2g();
    this.s2g(value);
    return result;
  };
  protoOf(SlotWriter).z23 = function (value) {
    var address = groupIndexToAddress(this, this.j1s_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.t1r_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.u1r_1[dataIndexToDataAddress(this, auxIndex(this.t1r_1, this, address))] = value;
  };
  protoOf(SlotWriter).d25 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.k1s_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.t1r_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.t1r_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.z1r_1 > auxIndex_0) {
      var slotsToMove = this.z1r_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.u1r_1[auxAddress + 2 | 0] = this.u1r_1[auxAddress + 1 | 0];
      }
      this.u1r_1[auxAddress + 1 | 0] = this.u1r_1[auxAddress];
    }
    addAux(this.t1r_1, parentGroupAddress);
    this.u1r_1[auxAddress] = value;
    this.z1r_1 = this.z1r_1 + 1 | 0;
  };
  protoOf(SlotWriter).h2g = function (value) {
    return updateNodeOfGroup(this, this.j1s_1, value);
  };
  protoOf(SlotWriter).u23 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.p2g(this), value);
  };
  protoOf(SlotWriter).s2g = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1r_1 <= this.a1s_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.u1r_1[dataIndexToDataAddress(this, this.z1r_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).x23 = function (index, value) {
    var address = groupIndexToAddress(this, this.j1s_1);
    var slotsStart = slotIndex(this.t1r_1, this, address);
    var slotsEnd = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, this.j1s_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.j1s_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.u1r_1[slotAddress];
    this.u1r_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).r2g = function () {
    if (this.e1s_1 > 0) {
      insertSlots(this, 1, this.k1s_1);
    }
    var tmp = this.u1r_1;
    var tmp1 = this.z1r_1;
    this.z1r_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).y2b = function (anchor, index) {
    return this.c24(this.l21(anchor), index);
  };
  protoOf(SlotWriter).c24 = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.t1r_1, this, address);
    var slotsEnd = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().y1s_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.u1r_1[slotAddress];
  };
  protoOf(SlotWriter).g24 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e1s_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.j1s_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.k1s_1 ? index <= this.y1r_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.k1s_1 + '-' + this.y1r_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.j1s_1 = index;
    var newSlot = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, index));
    this.z1r_1 = newSlot;
    this.a1s_1 = newSlot;
  };
  protoOf(SlotWriter).m1t = function () {
    var newGroup = this.y1r_1;
    this.j1s_1 = newGroup;
    this.z1r_1 = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).t1z = function () {
    var tmp1 = this.e1s_1;
    this.e1s_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).q20 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e1s_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.e1s_1 = this.e1s_1 - 1 | 0;
    if (this.e1s_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.i1s_1.g() === this.g1s_1.g())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).c1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().y1s_1, false, Companion_getInstance_1().y1s_1);
  };
  protoOf(SlotWriter).e1z = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().y1s_1);
  };
  protoOf(SlotWriter).g1z = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().y1s_1);
  };
  protoOf(SlotWriter).f1z = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).p20 = function () {
    var inserting = this.e1s_1 > 0;
    var currentGroup = this.j1s_1;
    var currentGroupEnd = this.y1r_1;
    var groupIndex = this.k1s_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.f1s_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.t1r_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.t1r_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.t1r_1, groupAddress, newNodes);
      this.f1s_1 = this.i1s_1.f20() + (isNode_0 ? 1 : newNodes) | 0;
      this.k1s_1 = parent(this.t1r_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.t1r_1, groupAddress);
      var oldNodes = nodeCount(this.t1r_1, groupAddress);
      updateGroupSize(this.t1r_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.t1r_1, groupAddress, newNodes);
      var newParent = this.g1s_1.f20();
      restoreCurrentGroupEnd(this);
      this.k1s_1 = newParent;
      var groupParent = parent(this.t1r_1, this, groupIndex);
      this.f1s_1 = this.i1s_1.f20();
      if (groupParent === newParent) {
        this.f1s_1 = this.f1s_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.t1r_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.t1r_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.t1r_1, currentAddress, nodeCount(this.t1r_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.t1r_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.t1r_1, this, current);
          }
        }
        this.f1s_1 = this.f1s_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).o25 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.k1s_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.y1r_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.j1s_1;
      var oldCurrentSlot = this.z1r_1;
      var oldCurrentSlotEnd = this.a1s_1;
      this.j1s_1 = index;
      this.c1z();
      this.j1s_1 = oldCurrent;
      this.z1r_1 = oldCurrentSlot;
      this.a1s_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).o24 = function (anchor) {
    return this.o25(anchor.p2g(this));
  };
  protoOf(SlotWriter).u1y = function () {
    var groupAddress = groupIndexToAddress(this, this.j1s_1);
    var newGroup = this.j1s_1 + groupSize(this.t1r_1, groupAddress) | 0;
    this.j1s_1 = newGroup;
    this.z1r_1 = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.t1r_1, groupAddress) ? 1 : nodeCount(this.t1r_1, groupAddress);
  };
  protoOf(SlotWriter).x1s = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.j1s_1;
    var oldSlot = this.z1r_1;
    var count = this.u1y();
    var tmp0_safe_receiver = this.m1s_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.u21() ? tmp0_safe_receiver.u24() >= oldGroup : false) {
        tmp0_safe_receiver.j2g();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.j1s_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.z1r_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.j1s_1 = oldGroup;
    this.z1r_1 = oldSlot;
    this.f1s_1 = this.f1s_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).n1s = function () {
    var start = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, this.j1s_1));
    var end = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, this.j1s_1 + this.i20(this.j1s_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).a24 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.e1s_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.j1s_1;
    var parent = this.k1s_1;
    var parentEnd = this.y1r_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.t1r_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.t1r_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.z1r_1;
    var dataStart = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.t1r_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.j1s_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.t1r_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    if (moveDataLen > 0) {
      var slots = this.u1r_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.b1s_1;
    var slotsGapLen = this.c1s_1;
    var slotsCapacity = this.u1r_1.length;
    var slotsGapOwner = this.d1s_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.y1r_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).x21 = function (anchor, offset, writer) {
    runtimeCheck(writer.e1s_1 > 0);
    runtimeCheck(this.e1s_1 === 0);
    runtimeCheck(anchor.f27());
    var location = this.l21(anchor) + offset | 0;
    var currentGroup = this.j1s_1;
    runtimeCheck(currentGroup <= location ? location < this.y1r_1 : false);
    var parent = this.y1y(location);
    var size = this.i20(location);
    var nodes = this.b21(location) ? 1 : this.c21(location);
    var result = moveGroup$default(Companion_getInstance_7(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.t1r_1, currentAddress, groupSize(this.t1r_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.t1r_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.t1r_1, currentAddress, nodeCount(this.t1r_1, currentAddress) - nodes | 0);
        }
      }
      current = this.y1y(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.f1s_1 >= nodes);
      this.f1s_1 = this.f1s_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).i24 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.e1s_1 > 0);
    if (((index === 0 ? this.j1s_1 === 0 : false) ? this.s1r_1.k1x_1 === 0 : false) ? groupSize(table.j1x_1, index) === table.k1x_1 : false) {
      var myGroups = this.t1r_1;
      var mySlots = this.u1r_1;
      var myAnchors = this.v1r_1;
      var groups = table.j1x_1;
      var groupsSize = table.k1x_1;
      var slots = table.l1x_1;
      var slotsSize = table.m1x_1;
      this.t1r_1 = groups;
      this.u1r_1 = slots;
      this.v1r_1 = table.q1x_1;
      this.w1r_1 = groupsSize;
      this.x1r_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.b1s_1 = slotsSize;
      this.c1s_1 = slots.length - slotsSize | 0;
      this.d1s_1 = groupsSize;
      table.t2g(myGroups, 0, mySlots, 0, myAnchors);
      return this.v1r_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_getInstance_7(), tmp0_let, index, this, true, true, removeSourceGroup);
    }finally {
      tmp0_let.o1y();
    }
    return tmp;
  };
  protoOf(SlotWriter).f24 = function (offset, table, index) {
    runtimeCheck(this.e1s_1 <= 0 ? this.i20(this.j1s_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.j1s_1;
    var previousCurrentSlot = this.z1r_1;
    var previousCurrentSlotEnd = this.a1s_1;
    this.g24(offset);
    this.c1z();
    this.t1z();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.a1z();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_getInstance_7(), tmp0_let, index, this, false, true);
    }finally {
      tmp0_let.o1y();
    }
    var anchors = tmp;
    this.q20();
    this.p20();
    this.j1s_1 = previousCurrentGroup;
    this.z1r_1 = previousCurrentSlot;
    this.a1s_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).u1z = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.v1r_1;
    var tmp1_getOrAdd = this.g();
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.w1r_1 ? index : -(this.g() - index | 0) | 0);
      tmp0_getOrAdd.v3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.m(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).u2g = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.t1r_1, groupAddress)) {
      updateMark(this.t1r_1, groupAddress, true);
      if (!containsMark(this.t1r_1, groupAddress)) {
        updateContainsMark(this, this.y1y(group));
      }
    }
  };
  protoOf(SlotWriter).i21 = function (group, $super) {
    group = group === VOID ? this.k1s_1 : group;
    var tmp;
    if ($super === VOID) {
      this.u2g(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.u2g.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).l21 = function (anchor) {
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.a23_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    return tmp0_let < 0 ? this.g() + tmp0_let | 0 : tmp0_let;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.j1s_1 + ' end=' + this.y1r_1 + ' size = ' + this.g() + ' ' + ('gap=' + this.w1r_1 + '-' + (this.w1r_1 + this.x1r_1 | 0) + ')');
  };
  protoOf(SlotWriter).g = function () {
    return _get_capacity__a9k9f3(this) - this.x1r_1 | 0;
  };
  function Anchor(loc) {
    this.a23_1 = loc;
  }
  protoOf(Anchor).f27 = function () {
    return !(this.a23_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).h24 = function (slots) {
    return slots.l21(this);
  };
  protoOf(Anchor).p2g = function (writer) {
    return writer.l21(this);
  };
  function SlotTable() {
    this.j1x_1 = new Int32Array(0);
    this.k1x_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.l1x_1 = tmp_1;
    this.m1x_1 = 0;
    this.n1x_1 = 0;
    this.o1x_1 = false;
    this.p1x_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.q1x_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).r20 = function () {
    return this.k1x_1 === 0;
  };
  protoOf(SlotTable).r1x = function () {
    if (this.o1x_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    this.n1x_1 = this.n1x_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).a1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o1x_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n1x_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.o1x_1 = true;
    this.p1x_1 = this.p1x_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).u1z = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o1x_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.k1x_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.q1x_1;
    var tmp3_getOrAdd = this.k1x_1;
    var location = search$accessor$mbvawc(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp2_getOrAdd.v3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.m(location);
    }
    return tmp;
  };
  protoOf(SlotTable).l21 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o1x_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.f27()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.a23_1;
  };
  protoOf(SlotTable).g28 = function (anchor) {
    var tmp;
    if (anchor.f27()) {
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$mbvawc(this.q1x_1, anchor.a23_1, this.k1x_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp = tmp0_let >= 0 ? equals(this.q1x_1.m(tmp0_let), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).j27 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.o1x_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.k1x_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.g28(anchor)) {
      var containsUpper = groupIndex + groupSize(this.j1x_1, groupIndex) | 0;
      var containsArg = anchor.a23_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).v2g = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.c1y_1 === this ? this.n1x_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.n1x_1 = this.n1x_1 - 1 | 0;
  };
  protoOf(SlotTable).q2g = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.s1r_1 === this ? this.o1x_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o1x_1 = false;
    this.t2g(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).t2g = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.j1x_1 = groups;
    this.k1x_1 = groupsSize;
    this.l1x_1 = slots;
    this.m1x_1 = slotsSize;
    this.q1x_1 = anchors;
  };
  protoOf(SlotTable).b22 = function () {
    return this.k1x_1 > 0 ? containsMark(this.j1x_1, 0) : false;
  };
  protoOf(SlotTable).c24 = function (group, slotIndex) {
    var start = slotAnchor(this.j1x_1, group);
    var end = (group + 1 | 0) < this.k1x_1 ? dataAnchor(this.j1x_1, group + 1 | 0) : this.l1x_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.l1x_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_1().y1s_1;
    }
    return tmp;
  };
  protoOf(SlotTable).d = function () {
    return new GroupIterator(this, 0, this.k1x_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.i2g_1 = list;
  }
  protoOf(PrioritySet).k2g = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.i2g_1.l()) {
      tmp = this.i2g_1.m(0) === value ? true : this.i2g_1.m(this.i2g_1.g() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.i2g_1.g();
    this.i2g_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.i2g_1.m(parent);
      if (value > parentValue) {
        this.i2g_1.x3(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.i2g_1.x3(index, value);
  };
  protoOf(PrioritySet).u21 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.i2g_1.l();
  };
  protoOf(PrioritySet).u24 = function () {
    return first(this.i2g_1);
  };
  protoOf(PrioritySet).j2g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.i2g_1.g() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.i2g_1.m(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.i2g_1.l()) {
        tmp = this.i2g_1.m(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.i2g_1.x3(0, last(this.i2g_1));
      this.i2g_1.z3(this.i2g_1.g() - 1 | 0);
      var index = 0;
      var size = this.i2g_1.g();
      var max = this.i2g_1.g() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.i2g_1.m(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.i2g_1.m(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.i2g_1.m(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.i2g_1.x3(index, rightValue);
              this.i2g_1.x3(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.i2g_1.x3(index, leftValue);
          this.i2g_1.x3(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    return tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.f1y_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().y1s_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.f1y_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().y1s_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.f1y_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.c1y_1 = table;
    this.d1y_1 = this.c1y_1.j1x_1;
    this.e1y_1 = this.c1y_1.k1x_1;
    this.f1y_1 = this.c1y_1.l1x_1;
    this.g1y_1 = this.c1y_1.m1x_1;
    this.h1y_1 = false;
    this.i1y_1 = 0;
    this.j1y_1 = this.e1y_1;
    this.k1y_1 = -1;
    this.l1y_1 = 0;
    this.m1y_1 = 0;
    this.n1y_1 = 0;
  }
  protoOf(SlotReader).g = function () {
    return this.e1y_1;
  };
  protoOf(SlotReader).y1y = function (index) {
    return parentAnchor(this.d1y_1, index);
  };
  protoOf(SlotReader).m23 = function () {
    return isNode(this.d1y_1, this.i1y_1);
  };
  protoOf(SlotReader).b21 = function (index) {
    return isNode(this.d1y_1, index);
  };
  protoOf(SlotReader).c21 = function (index) {
    return nodeCount(this.d1y_1, index);
  };
  protoOf(SlotReader).t21 = function (index) {
    return isNode(this.d1y_1, index) ? node(this.d1y_1, this, index) : null;
  };
  protoOf(SlotReader).m20 = function () {
    return this.s20() ? true : this.i1y_1 === this.j1y_1;
  };
  protoOf(SlotReader).s20 = function () {
    return this.l1y_1 > 0;
  };
  protoOf(SlotReader).v21 = function () {
    return groupSize(this.d1y_1, this.i1y_1);
  };
  protoOf(SlotReader).i20 = function (index) {
    return groupSize(this.d1y_1, index);
  };
  protoOf(SlotReader).l20 = function () {
    return this.j1y_1;
  };
  protoOf(SlotReader).p1z = function () {
    var tmp;
    if (this.i1y_1 < this.j1y_1) {
      tmp = key(this.d1y_1, this.i1y_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).x1y = function (index) {
    return key(this.d1y_1, index);
  };
  protoOf(SlotReader).v24 = function () {
    return this.m1y_1 - slotAnchor(this.d1y_1, this.k1y_1) | 0;
  };
  protoOf(SlotReader).d21 = function (index) {
    return hasObjectKey(this.d1y_1, index);
  };
  protoOf(SlotReader).r1z = function () {
    return this.i1y_1 < this.j1y_1 ? objectKey(this.d1y_1, this, this.i1y_1) : null;
  };
  protoOf(SlotReader).w1y = function (index) {
    return objectKey(this.d1y_1, this, index);
  };
  protoOf(SlotReader).b1z = function () {
    return this.i1y_1 < this.j1y_1 ? aux(this.d1y_1, this, this.i1y_1) : 0;
  };
  protoOf(SlotReader).v1y = function (index) {
    return aux(this.d1y_1, this, index);
  };
  protoOf(SlotReader).q23 = function (index) {
    return hasMark(this.d1y_1, index);
  };
  protoOf(SlotReader).o23 = function (index) {
    return containsMark(this.d1y_1, index);
  };
  protoOf(SlotReader).e21 = function () {
    return this.k1y_1 >= 0 ? nodeCount(this.d1y_1, this.k1y_1) : 0;
  };
  protoOf(SlotReader).w24 = function (index) {
    return this.p23(this.i1y_1, index);
  };
  protoOf(SlotReader).p23 = function (group, index) {
    var start = slotAnchor(this.d1y_1, group);
    var next = group + 1 | 0;
    var end = next < this.e1y_1 ? dataAnchor(this.d1y_1, next) : this.g1y_1;
    var address = start + index | 0;
    return address < end ? this.f1y_1[address] : Companion_getInstance_1().y1s_1;
  };
  protoOf(SlotReader).f = function () {
    if (this.l1y_1 > 0 ? true : this.m1y_1 >= this.n1y_1)
      return Companion_getInstance_1().y1s_1;
    var tmp1 = this.m1y_1;
    this.m1y_1 = tmp1 + 1 | 0;
    return this.f1y_1[tmp1];
  };
  protoOf(SlotReader).d1z = function () {
    this.l1y_1 = this.l1y_1 + 1 | 0;
  };
  protoOf(SlotReader).o20 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l1y_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l1y_1 = this.l1y_1 - 1 | 0;
  };
  protoOf(SlotReader).o1y = function () {
    this.h1y_1 = true;
    this.c1y_1.v2g(this);
  };
  protoOf(SlotReader).c1z = function () {
    if (this.l1y_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.d1y_1, this.i1y_1) === this.k1y_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.k1y_1 = this.i1y_1;
      this.j1y_1 = this.i1y_1 + groupSize(this.d1y_1, this.i1y_1) | 0;
      var tmp1 = this.i1y_1;
      this.i1y_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.m1y_1 = slotAnchor(this.d1y_1, current);
      this.n1y_1 = current >= (this.e1y_1 - 1 | 0) ? this.g1y_1 : dataAnchor(this.d1y_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).o1t = function () {
    if (this.l1y_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.d1y_1, this.i1y_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.c1z();
    }
  };
  protoOf(SlotReader).u1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l1y_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.d1y_1, this.i1y_1) ? 1 : nodeCount(this.d1y_1, this.i1y_1);
    this.i1y_1 = this.i1y_1 + groupSize(this.d1y_1, this.i1y_1) | 0;
    return count;
  };
  protoOf(SlotReader).m1t = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l1y_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.i1y_1 = this.j1y_1;
  };
  protoOf(SlotReader).d20 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.l1y_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.i1y_1 = index;
    var parent = index < this.e1y_1 ? parentAnchor(this.d1y_1, index) : -1;
    this.k1y_1 = parent;
    if (parent < 0)
      this.j1y_1 = this.e1y_1;
    else
      this.j1y_1 = parent + groupSize(this.d1y_1, parent) | 0;
    this.m1y_1 = 0;
    this.n1y_1 = 0;
  };
  protoOf(SlotReader).y20 = function (index) {
    var newCurrentEnd = index + groupSize(this.d1y_1, index) | 0;
    var current = this.i1y_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.k1y_1 = index;
    this.j1y_1 = newCurrentEnd;
    this.m1y_1 = 0;
    this.n1y_1 = 0;
  };
  protoOf(SlotReader).n20 = function () {
    if (this.l1y_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.i1y_1 === this.j1y_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.d1y_1, this.k1y_1);
      this.k1y_1 = parent;
      this.j1y_1 = parent < 0 ? this.e1y_1 : parent + groupSize(this.d1y_1, parent) | 0;
    }
  };
  protoOf(SlotReader).q1z = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.l1y_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.i1y_1;
    while (childIndex < this.j1y_1) {
      var tmp = key(this.d1y_1, childIndex);
      var tmp_0 = objectKey(this.d1y_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.d1y_1, childIndex) ? 1 : nodeCount(this.d1y_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.d1y_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).y24 = function (group, block) {
    var start = slotAnchor(this.d1y_1, group);
    var end = (group + 1 | 0) < this.c1y_1.k1x_1 ? dataAnchor(this.c1y_1.j1x_1, group + 1 | 0) : this.c1y_1.m1x_1;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(index - start | 0, this.f1y_1[index]);
      }
       while (inductionVariable < end);
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.i1y_1 + ', key=' + this.p1z() + ', ' + ('parent=' + this.k1y_1 + ', end=' + this.j1y_1 + ')');
  };
  protoOf(SlotReader).u1z = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.c1y_1.q1x_1;
    var tmp1_getOrAdd = this.e1y_1;
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0_getOrAdd.v3(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.m(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.g() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.m(mid).a23_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var midVal = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    return tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.w2g_1.p1x_1 === $this.z2g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.w2g_1 = table;
    this.x2g_1 = end;
    this.y2g_1 = start;
    this.z2g_1 = this.w2g_1.p1x_1;
    if (this.w2g_1.o1x_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).e = function () {
    return this.y2g_1 < this.x2g_1;
  };
  protoOf(GroupIterator).f = function () {
    validateRead(this);
    var group = this.y2g_1;
    this.y2g_1 = this.y2g_1 + groupSize(this.w2g_1.j1x_1, group) | 0;
    return new SlotTableGroup(this.w2g_1, group, this.z2g_1);
  };
  function validateRead_0($this) {
    if (!($this.a2h_1.p1x_1 === $this.c2h_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.p1x_1 : version;
    this.a2h_1 = table;
    this.b2h_1 = group;
    this.c2h_1 = version;
  }
  protoOf(SlotTableGroup).d = function () {
    validateRead_0(this);
    return new GroupIterator(this.a2h_1, this.b2h_1 + 1 | 0, this.b2h_1 + groupSize(this.a2h_1.j1x_1, this.b2h_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.v1z_1 = key;
    this.w1z_1 = objectKey;
    this.x1z_1 = location;
    this.y1z_1 = nodes;
    this.z1z_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function MutableFloatState() {
  }
  function mutableFloatStateOf(value) {
    return createSnapshotMutableFloatState(value);
  }
  function FloatStateStateRecord(value) {
    StateRecord.call(this);
    this.j2h_1 = value;
  }
  protoOf(FloatStateStateRecord).w29 = function (value) {
    var tmp = this;
    tmp.j2h_1 = (value instanceof FloatStateStateRecord ? value : THROW_CCE()).j2h_1;
  };
  protoOf(FloatStateStateRecord).x29 = function () {
    return new FloatStateStateRecord(this.j2h_1);
  };
  function SnapshotMutableFloatStateImpl$component2$lambda(this$0) {
    return function (it) {
      this$0.e2h(it);
      return Unit_getInstance();
    };
  }
  function SnapshotMutableFloatStateImpl(value) {
    this.k2h_1 = new FloatStateStateRecord(value);
  }
  protoOf(SnapshotMutableFloatStateImpl).b2a = function () {
    return this.k2h_1;
  };
  protoOf(SnapshotMutableFloatStateImpl).e2h = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.k2h_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!(tmp1_anonymous.j2h_1 === value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.k2h_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).j2h_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableFloatStateImpl).f2h = function () {
    return readable_0(this.k2h_1, this).j2h_1;
  };
  protoOf(SnapshotMutableFloatStateImpl).i29 = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableFloatStateImpl).y4 = function () {
    return this.f2h();
  };
  protoOf(SnapshotMutableFloatStateImpl).z4 = function () {
    return SnapshotMutableFloatStateImpl$component2$lambda(this);
  };
  protoOf(SnapshotMutableFloatStateImpl).o2a = function (value) {
    var tmp = this;
    tmp.k2h_1 = value instanceof FloatStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableFloatStateImpl).p2a = function (previous, current, applied) {
    var currentRecord = current instanceof FloatStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof FloatStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.j2h_1 === appliedRecord.j2h_1) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableFloatStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.k2h_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableFloatStateImpl.toString.<anonymous>' call
    return 'MutableFloatState(value=' + current(tmp0_withCurrent).j2h_1 + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableFloatStateImpl).f1d = function (_set____db54di) {
    return this.d2h((!(_set____db54di == null) ? typeof _set____db54di === 'number' : false) ? _set____db54di : THROW_CCE());
  };
  function collectAsState$composable(_this__u8e3s4, context, $composer, $changed, $default) {
    var context_0 = context;
    var $composer_0 = $composer;
    $composer_0.m1r(1233808880);
    sourceInformation($composer_0, 'C(collectAsState$composable)46@1741L30:SnapshotFlow.kt#9igjgp');
    if (!(($default & 1) === 0))
      context_0 = EmptyCoroutineContext_getInstance();
    if (isTraceInProgress()) {
      traceEventStart(1233808880, $changed, -1, 'androidx.compose.runtime.collectAsState$composable (SnapshotFlow.kt:44)');
    }
    var tmp0 = collectAsState$composable_0(_this__u8e3s4, _this__u8e3s4.s(), context_0, $composer_0, 14 & $changed | 896 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function collectAsState$composable_0(_this__u8e3s4, initial, context, $composer, $changed, $default) {
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    $composer_0.m1r(-2084371839);
    sourceInformation($composer_0, 'C(collectAsState$composable)P(1)61@2283L186:SnapshotFlow.kt#9igjgp');
    if (!(($default & 2) === 0)) {
      context_0._v = EmptyCoroutineContext_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventStart(-2084371839, $changed, -1, 'androidx.compose.runtime.collectAsState$composable (SnapshotFlow.kt:58)');
    }
    var tmp = context_0._v;
    var tmp0 = produceState$composable(initial, _this__u8e3s4, tmp, collectAsState$composable$slambda_0(context_0, _this__u8e3s4, null), $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed << 3 | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function snapshotFlow(block) {
    return flow(snapshotFlow$slambda_0(block, null));
  }
  function intersects(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.g() < other.g()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(_this__u8e3s4, Collection)) {
          tmp_0 = _this__u8e3s4.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = _this__u8e3s4.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          if (other.n(element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(other, Collection)) {
          tmp_1 = other.l();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = other.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          if (_this__u8e3s4.n(element_0)) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function collectAsState$composable$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.t2h_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda$slambda).g1f = function (it, $completion) {
    var tmp = this.h1f(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(collectAsState$composable$slambda$slambda$slambda).yl = function (p1, $completion) {
    return this.g1f((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          this.t2h_1.f1d(this.u2h_1);
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
  protoOf(collectAsState$composable$slambda$slambda$slambda).h1f = function (it, completion) {
    var i = new collectAsState$composable$slambda$slambda$slambda(this.t2h_1, completion);
    i.u2h_1 = it;
    return i;
  };
  function collectAsState$composable$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.g1f(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.v2h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.v2h_1(value, $completion);
  };
  function collectAsState$composable$slambda$slambda($this_produceState, resultContinuation) {
    this.e2i_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda).g1f = function (it, $completion) {
    var tmp = this.h1f(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(collectAsState$composable$slambda$slambda).yl = function (p1, $completion) {
    return this.g1f((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        if (tmp === 0) {
          this.el_1 = 1;
          this.e2i_1.f1d(this.f2i_1);
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
  protoOf(collectAsState$composable$slambda$slambda).h1f = function (it, completion) {
    var i = new collectAsState$composable$slambda$slambda(this.e2i_1, completion);
    i.f2i_1 = it;
    return i;
  };
  function collectAsState$composable$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.g1f(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$composable$slambda$slambda_1($this_collectAsState$composable, $this_produceState, resultContinuation) {
    this.o2i_1 = $this_collectAsState$composable;
    this.p2i_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda_1).t1e = function ($this$withContext, $completion) {
    var tmp = this.u1e($this$withContext, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(collectAsState$composable$slambda$slambda_1).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda_1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = collectAsState$composable$slambda$slambda$slambda_0(this.p2i_1, null);
            suspendResult = this.o2i_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(collectAsState$composable$slambda$slambda_1).u1e = function ($this$withContext, completion) {
    var i = new collectAsState$composable$slambda$slambda_1(this.o2i_1, this.p2i_1, completion);
    i.q2i_1 = $this$withContext;
    return i;
  };
  function collectAsState$composable$slambda$slambda_2($this_collectAsState$composable, $this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda_1($this_collectAsState$composable, $this_produceState, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.t1e($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$composable$slambda($context, $this_collectAsState$composable, resultContinuation) {
    this.z2i_1 = $context;
    this.a2j_1 = $this_collectAsState$composable;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda).c2j = function ($this$produceState, $completion) {
    var tmp = this.d2j($this$produceState, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(collectAsState$composable$slambda).yl = function (p1, $completion) {
    return this.c2j((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            if (equals(this.z2i_1._v, EmptyCoroutineContext_getInstance())) {
              this.dl_1 = 2;
              var tmp_0 = collectAsState$composable$slambda$slambda_0(this.b2j_1, null);
              suspendResult = this.a2j_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 1;
              var tmp_1 = this.z2i_1._v;
              suspendResult = withContext(tmp_1, collectAsState$composable$slambda$slambda_2(this.a2j_1, this.b2j_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.dl_1 = 3;
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
  protoOf(collectAsState$composable$slambda).d2j = function ($this$produceState, completion) {
    var i = new collectAsState$composable$slambda(this.z2i_1, this.a2j_1, completion);
    i.b2j_1 = $this$produceState;
    return i;
  };
  function collectAsState$composable$slambda_0($context, $this_collectAsState$composable, resultContinuation) {
    var i = new collectAsState$composable$slambda($context, $this_collectAsState$composable, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.c2j($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function snapshotFlow$slambda$lambda($readSet) {
    return function (it) {
      $readSet.a(it);
      return Unit_getInstance();
    };
  }
  function snapshotFlow$slambda$lambda_0($appliedChanges) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      $appliedChanges.g16(changed);
      return Unit_getInstance();
    };
  }
  function snapshotFlow$slambda($block, resultContinuation) {
    this.m2j_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(snapshotFlow$slambda).x2j = function ($this$flow, $completion) {
    var tmp = this.y2j($this$flow, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(snapshotFlow$slambda).yl = function (p1, $completion) {
    return this.x2j((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(snapshotFlow$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 11;
            var tmp_0 = this;
            tmp_0.o2j_1 = LinkedHashSet_init_$Create$();
            var tmp_1 = this;
            tmp_1.p2j_1 = snapshotFlow$slambda$lambda(this.o2j_1);
            var tmp_2 = this;
            Factory_getInstance();
            tmp_2.q2j_1 = Channel(2147483647);
            var tmp_3 = this;
            var tmp_4 = Companion_getInstance_13();
            tmp_3.r2j_1 = tmp_4.f2g(snapshotFlow$slambda$lambda_0(this.q2j_1));
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 10;
            var tmp_5 = this;
            var tmp0_run = Companion_getInstance_13().z2j(this.p2j_1);
            var tmp$ret$6;
            l$ret$7: do {
              var tmp_6;
              try {
                var tmp$ret$4;
                l$ret$5: do {
                  var previous = tmp0_run.g2e();
                  l$ret$3: do {
                    var tmp$ret$0;
                    l$ret$1: do {
                      var tmp_7;
                      try {
                        tmp$ret$0 = this.m2j_1();
                        break l$ret$1;
                      } catch ($p) {
                        var tmp_8;
                        var t = $p;
                        tmp0_run.h2e(previous);
                        throw t;
                      }
                    }
                     while (false);
                    var tmp_9 = tmp$ret$0;
                    tmp0_run.h2e(previous);
                    tmp$ret$4 = tmp_9;
                    break l$ret$5;
                  }
                   while (false);
                  tmp0_run.h2e(previous);
                }
                 while (false);
                tmp$ret$6 = tmp$ret$4;
                break l$ret$7;
              } catch ($p) {
                var tmp_10;
                var t_0 = $p;
                tmp0_run.gp();
                throw t_0;
              }
            }
             while (false);
            var tmp_11 = tmp$ret$6;
            tmp0_run.gp();
            tmp_5.t2j_1 = tmp_11;
            this.dl_1 = 2;
            suspendResult = this.n2j_1.z18(this.t2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.dl_1 = 8;
              continue $sm;
            }

            this.u2j_1 = false;
            this.dl_1 = 4;
            suspendResult = this.q2j_1.i16(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.v2j_1 = suspendResult;
            $l$loop: while (true) {
              this.u2j_1 = this.u2j_1 ? true : intersects(this.o2j_1, this.v2j_1);
              var tmp_12 = this;
              var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.q2j_1.k16());
              var tmp_13;
              if (tmp0_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_13 = tmp0_elvis_lhs;
              }
              tmp_12.v2j_1 = tmp_13;
            }

            if (this.u2j_1) {
              this.o2j_1.a4();
              var tmp_14 = this;
              var tmp1_run = Companion_getInstance_13().z2j(this.p2j_1);
              var tmp$ret$14;
              l$ret$15: do {
                var tmp_15;
                try {
                  var tmp$ret$12;
                  l$ret$13: do {
                    var previous_0 = tmp1_run.g2e();
                    l$ret$11: do {
                      var tmp$ret$8;
                      l$ret$9: do {
                        var tmp_16;
                        try {
                          tmp$ret$8 = this.m2j_1();
                          break l$ret$9;
                        } catch ($p) {
                          var tmp_17;
                          var t_1 = $p;
                          tmp1_run.h2e(previous_0);
                          throw t_1;
                        }
                      }
                       while (false);
                      var tmp_18 = tmp$ret$8;
                      tmp1_run.h2e(previous_0);
                      tmp$ret$12 = tmp_18;
                      break l$ret$13;
                    }
                     while (false);
                    tmp1_run.h2e(previous_0);
                  }
                   while (false);
                  tmp$ret$14 = tmp$ret$12;
                  break l$ret$15;
                } catch ($p) {
                  var tmp_19;
                  var t_2 = $p;
                  tmp1_run.gp();
                  throw t_2;
                }
              }
               while (false);
              var tmp_20 = tmp$ret$14;
              tmp1_run.gp();
              tmp_14.w2j_1 = tmp_20;
              if (!equals(this.w2j_1, this.t2j_1)) {
                this.t2j_1 = this.w2j_1;
                this.dl_1 = 5;
                suspendResult = this.n2j_1.z18(this.w2j_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dl_1 = 6;
                continue $sm;
              }
            } else {
              this.dl_1 = 7;
              continue $sm;
            }

          case 5:
            this.dl_1 = 6;
            continue $sm;
          case 6:
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.dl_1 = 3;
            continue $sm;
          case 8:
            this.s2j_1 = Unit_getInstance();
            this.el_1 = 11;
            this.dl_1 = 9;
            continue $sm;
          case 9:
            this.r2j_1.gp();
            return Unit_getInstance();
          case 10:
            this.el_1 = 11;
            var t_3 = this.gl_1;
            this.r2j_1.gp();
            throw t_3;
          case 11:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 11) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(snapshotFlow$slambda).y2j = function ($this$flow, completion) {
    var i = new snapshotFlow$slambda(this.m2j_1, completion);
    i.n2j_1 = $this$flow;
    return i;
  };
  function snapshotFlow$slambda_0($block, resultContinuation) {
    var i = new snapshotFlow$slambda($block, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.x2j($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableIntState() {
  }
  function mutableIntStateOf(value) {
    return createSnapshotMutableIntState(value);
  }
  function IntStateStateRecord(value) {
    StateRecord.call(this);
    this.g2k_1 = value;
  }
  protoOf(IntStateStateRecord).w29 = function (value) {
    var tmp = this;
    tmp.g2k_1 = (value instanceof IntStateStateRecord ? value : THROW_CCE()).g2k_1;
  };
  protoOf(IntStateStateRecord).x29 = function () {
    return new IntStateStateRecord(this.g2k_1);
  };
  function SnapshotMutableIntStateImpl$component2$lambda(this$0) {
    return function (it) {
      this$0.b2k(it);
      return Unit_getInstance();
    };
  }
  function SnapshotMutableIntStateImpl(value) {
    this.h2k_1 = new IntStateStateRecord(value);
  }
  protoOf(SnapshotMutableIntStateImpl).b2a = function () {
    return this.h2k_1;
  };
  protoOf(SnapshotMutableIntStateImpl).b2k = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.h2k_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!(tmp1_anonymous.g2k_1 === value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.h2k_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).g2k_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableIntStateImpl).c2k = function () {
    return readable_0(this.h2k_1, this).g2k_1;
  };
  protoOf(SnapshotMutableIntStateImpl).i29 = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableIntStateImpl).y4 = function () {
    return this.c2k();
  };
  protoOf(SnapshotMutableIntStateImpl).z4 = function () {
    return SnapshotMutableIntStateImpl$component2$lambda(this);
  };
  protoOf(SnapshotMutableIntStateImpl).o2a = function (value) {
    var tmp = this;
    tmp.h2k_1 = value instanceof IntStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableIntStateImpl).p2a = function (previous, current, applied) {
    var currentRecord = current instanceof IntStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof IntStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.g2k_1 === appliedRecord.g2k_1) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableIntStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.h2k_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableIntStateImpl.toString.<anonymous>' call
    return 'MutableIntState(value=' + current(tmp0_withCurrent).g2k_1 + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableIntStateImpl).f1d = function (_set____db54di) {
    return this.a2k((!(_set____db54di == null) ? typeof _set____db54di === 'number' : false) ? _set____db54di : THROW_CCE());
  };
  function MutableLongState() {
  }
  function mutableLongStateOf(value) {
    return createSnapshotMutableLongState(value);
  }
  function LongStateStateRecord(value) {
    StateRecord.call(this);
    this.o2k_1 = value;
  }
  protoOf(LongStateStateRecord).w29 = function (value) {
    var tmp = this;
    tmp.o2k_1 = (value instanceof LongStateStateRecord ? value : THROW_CCE()).o2k_1;
  };
  protoOf(LongStateStateRecord).x29 = function () {
    return new LongStateStateRecord(this.o2k_1);
  };
  function SnapshotMutableLongStateImpl$component2$lambda(this$0) {
    return function (it) {
      this$0.j2k(it);
      return Unit_getInstance();
    };
  }
  function SnapshotMutableLongStateImpl(value) {
    this.p2k_1 = new LongStateStateRecord(value);
  }
  protoOf(SnapshotMutableLongStateImpl).b2a = function () {
    return this.p2k_1;
  };
  protoOf(SnapshotMutableLongStateImpl).j2k = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.p2k_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!tmp1_anonymous.o2k_1.equals(value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.p2k_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).o2k_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableLongStateImpl).k2k = function () {
    return readable_0(this.p2k_1, this).o2k_1;
  };
  protoOf(SnapshotMutableLongStateImpl).i29 = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableLongStateImpl).y4 = function () {
    return this.k2k();
  };
  protoOf(SnapshotMutableLongStateImpl).z4 = function () {
    return SnapshotMutableLongStateImpl$component2$lambda(this);
  };
  protoOf(SnapshotMutableLongStateImpl).o2a = function (value) {
    var tmp = this;
    tmp.p2k_1 = value instanceof LongStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableLongStateImpl).p2a = function (previous, current, applied) {
    var currentRecord = current instanceof LongStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof LongStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.o2k_1.equals(appliedRecord.o2k_1)) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableLongStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.p2k_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableLongStateImpl.toString.<anonymous>' call
    var tmp1_anonymous = current(tmp0_withCurrent);
    return 'MutableLongState(value=' + toString(tmp1_anonymous.o2k_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableLongStateImpl).f1d = function (_set____db54di) {
    return this.i2k(_set____db54di instanceof Long ? _set____db54di : THROW_CCE());
  };
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  protoOf(StructuralEqualityPolicy).r2k = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).m2a = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.r2k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function ReferentialEqualityPolicy() {
    ReferentialEqualityPolicy_instance = this;
  }
  protoOf(ReferentialEqualityPolicy).r2k = function (a, b) {
    return a === b;
  };
  protoOf(ReferentialEqualityPolicy).m2a = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.r2k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(ReferentialEqualityPolicy).toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    if (ReferentialEqualityPolicy_instance == null)
      new ReferentialEqualityPolicy();
    return ReferentialEqualityPolicy_instance;
  }
  function NeverEqualPolicy() {
    NeverEqualPolicy_instance = this;
  }
  protoOf(NeverEqualPolicy).r2k = function (a, b) {
    return false;
  };
  protoOf(NeverEqualPolicy).m2a = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.r2k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(NeverEqualPolicy).toString = function () {
    return 'NeverEqualPolicy';
  };
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    if (NeverEqualPolicy_instance == null)
      new NeverEqualPolicy();
    return NeverEqualPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.v2k_1 = myValue;
  }
  protoOf(StateStateRecord).w29 = function (value) {
    var tmp = this;
    tmp.v2k_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).v2k_1;
  };
  protoOf(StateStateRecord).x29 = function () {
    return new StateStateRecord(this.v2k_1);
  };
  function SnapshotMutableStateImpl$component2$lambda(this$0) {
    return function (it) {
      this$0.f1d(it);
      return Unit_getInstance();
    };
  }
  function SnapshotMutableStateImpl(value, policy) {
    this.w2k_1 = policy;
    this.x2k_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).i29 = function () {
    return this.w2k_1;
  };
  protoOf(SnapshotMutableStateImpl).f1d = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.x2k_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!this.i29().m2a(tmp1_anonymous.v2k_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.x2k_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).v2k_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).s = function () {
    return readable_0(this.x2k_1, this).v2k_1;
  };
  protoOf(SnapshotMutableStateImpl).b2a = function () {
    return this.x2k_1;
  };
  protoOf(SnapshotMutableStateImpl).o2a = function (value) {
    var tmp = this;
    tmp.x2k_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).p2a = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.i29().m2a(currentRecord.v2k_1, appliedRecord.v2k_1)) {
      tmp = current;
    } else {
      var merged = this.i29().q2k(previousRecord.v2k_1, currentRecord.v2k_1, appliedRecord.v2k_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.x29();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).v2k_1 = merged;
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.x2k_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(tmp0_withCurrent).v2k_1 + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableStateImpl).y4 = function () {
    return this.s();
  };
  protoOf(SnapshotMutableStateImpl).z4 = function () {
    return SnapshotMutableStateImpl$component2$lambda(this);
  };
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function rememberUpdatedState$composable(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(735465400);
    sourceInformation($composer_0, 'C(rememberUpdatedState$composable)*303@10198L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(735465400, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState$composable (SnapshotState.kt:303)');
    }
    // Inline function 'kotlin.apply' call
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
    if (false ? true : tmp0_let === Companion_getInstance_1().y1s_1) {
      // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
      var value = mutableStateOf(newValue);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
    tmp0.f1d(newValue);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function mutableStateListOf(elements) {
    // Inline function 'kotlin.also' call
    var tmp0_also = new SnapshotStateList();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.mutableStateListOf.<anonymous>' call
    tmp0_also.a2l(toList_0(elements));
    return tmp0_also;
  }
  function mutableStateListOf_0() {
    return new SnapshotStateList();
  }
  function toMutableStateList(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var tmp0_also = new SnapshotStateList();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.toMutableStateList.<anonymous>' call
    tmp0_also.a2l(_this__u8e3s4);
    return tmp0_also;
  }
  function SnapshotThreadLocal() {
    this.j29_1 = new AtomicReference(get_emptyThreadMap());
    this.k29_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).sv = function () {
    var tmp = this.j29_1.sv().e2l(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).l29 = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.k29_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.j29_1.sv();
    if (current.f2l(key, value))
      return Unit_getInstance();
    this.j29_1.h27(current.g2l(key, value));
  };
  function IntStack() {
    this.v1x_1 = new Int32Array(10);
    this.w1x_1 = 0;
  }
  protoOf(IntStack).g = function () {
    return this.w1x_1;
  };
  protoOf(IntStack).x1x = function (value) {
    if (this.w1x_1 >= this.v1x_1.length) {
      this.v1x_1 = copyOf(this.v1x_1, imul(this.v1x_1.length, 2));
    }
    var tmp = this.v1x_1;
    var tmp1 = this.w1x_1;
    this.w1x_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).f20 = function () {
    var tmp = this.v1x_1;
    this.w1x_1 = this.w1x_1 - 1 | 0;
    return tmp[this.w1x_1];
  };
  protoOf(IntStack).c22 = function (default_0) {
    return this.w1x_1 > 0 ? this.u24() : default_0;
  };
  protoOf(IntStack).u24 = function () {
    return this.v1x_1[this.w1x_1 - 1 | 0];
  };
  protoOf(IntStack).a21 = function (index) {
    return this.v1x_1[index];
  };
  protoOf(IntStack).l = function () {
    return this.w1x_1 === 0;
  };
  protoOf(IntStack).a4 = function () {
    this.w1x_1 = 0;
  };
  protoOf(IntStack).o2g = function (value) {
    var inductionVariable = 0;
    var last = this.w1x_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.v1x_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.p1y_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).g = function () {
    return this.p1y_1.g();
  };
  protoOf(Stack).e20 = function (value) {
    return this.p1y_1.a(value);
  };
  protoOf(Stack).f20 = function () {
    return this.p1y_1.z3(this.g() - 1 | 0);
  };
  protoOf(Stack).u24 = function () {
    return this.p1y_1.m(this.g() - 1 | 0);
  };
  protoOf(Stack).a21 = function (index) {
    return this.p1y_1.m(index);
  };
  protoOf(Stack).l = function () {
    return this.p1y_1.l();
  };
  protoOf(Stack).u21 = function () {
    return !this.l();
  };
  protoOf(Stack).a4 = function () {
    return this.p1y_1.a4();
  };
  protoOf(Stack).c4 = function () {
    var tmp = 0;
    var tmp_0 = this.p1y_1.g();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.p1y_1.m(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    current$factory();
    return $this.h29_1.s();
  }
  function LazyValueHolder(valueProducer) {
    this.h29_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).s = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.h2l_1 = value;
  }
  protoOf(StaticValueHolder).s = function () {
    return this.h2l_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.h2l_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.h2l_1 == null ? 0 : hashCode(this.h2l_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.h2l_1, tmp0_other_with_cast.h2l_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.a2c_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.b2c_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.b2c_1;
    var size = $this.a2c_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.a2c_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b2c_1 = fillArrayVal(Array(4), null);
    this.c2c_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).e2c = function (key, value) {
    var values = this.c2c_1;
    var index;
    if (this.a2c_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.b2c_1;
    var size = this.a2c_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, tmp2_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.b2c_1 = newKeys;
      this.c2c_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, keys, tmp3_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, tmp4_copyInto, insertIndex, size);
    }
    this.b2c_1[insertIndex] = key;
    this.c2c_1[insertIndex] = value;
    this.a2c_1 = this.a2c_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.z22_1 - 1 | 0;
    var keys = $this.x22_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.x22_1;
    var size = $this.z22_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.x22_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.y22_1 = fillArrayVal(Array(capacity), null);
    this.z22_1 = 0;
  }
  protoOf(IdentityArrayMap).u21 = function () {
    return this.z22_1 > 0;
  };
  protoOf(IdentityArrayMap).n28 = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).m28 = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.y22_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).k27 = function (key, value) {
    var keys = this.x22_1;
    var values = this.y22_1;
    var size = this.z22_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(size, 2);
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, tmp1_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.x22_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp2_arrayOfNulls = imul(size, 2);
        tmp_0 = fillArrayVal(Array(tmp2_arrayOfNulls), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, destValues, tmp3_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.y22_1 = destValues;
      this.z22_1 = this.z22_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).d2c = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.y22_1[index];
      var size = this.z22_1;
      var keys = this.x22_1;
      var values = this.y22_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.z22_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  protoOf(IdentityArrayMap).a4 = function () {
    this.z22_1 = 0;
    fill_0(this.x22_1, null);
    fill_0(this.y22_1, null);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.q21_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.r21_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.r21_1;
    var size = $this.q21_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.j2l_1 = this$0;
    this.i2l_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).e = function () {
    return this.i2l_1 < this.j2l_1.q21_1;
  };
  protoOf(IdentityArraySet$iterator$1).f = function () {
    var tmp = this.j2l_1.r21_1;
    var tmp1 = this.i2l_1;
    this.i2l_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.q21_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.r21_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).g = function () {
    return this.q21_1;
  };
  protoOf(IdentityArraySet).e1 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).n = function (element) {
    if (!isObject(element))
      return false;
    return this.e1(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).g23 = function (value) {
    var index;
    var size = this.q21_1;
    var values = this.r21_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.r21_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, values, tmp2_copyInto, insertIndex, size);
    }
    this.r21_1[insertIndex] = value;
    this.q21_1 = this.q21_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).a4 = function () {
    fill_0(this.r21_1, null);
    this.q21_1 = 0;
  };
  protoOf(IdentityArraySet).h2d = function (collection) {
    if (collection.l())
      return Unit_getInstance();
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.d();
      while (tmp0_iterator.e()) {
        var value = tmp0_iterator.f();
        this.g23(value);
      }
    } else {
      var thisValues = this.r21_1;
      var otherValues = collection.r21_1;
      var thisSize = this.q21_1;
      var otherSize = collection.q21_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.r21_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.q21_1 = this.q21_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp0_arrayOfNulls = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, tmp1_copyInto, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.r21_1 = newArray;
        this.q21_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).l = function () {
    return this.q21_1 === 0;
  };
  protoOf(IdentityArraySet).u21 = function () {
    return this.q21_1 > 0;
  };
  protoOf(IdentityArraySet).k2l = function (value) {
    var index = find_1(this, value);
    var values = this.r21_1;
    var size = this.q21_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + 1 | 0;
        arrayCopy(values, values, index, tmp0_copyInto, size);
      }
      values[size - 1 | 0] = null;
      this.q21_1 = this.q21_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).m4 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.e1(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(IdentityArraySet).d = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.s26_1[$this.q26_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.t26_1;
    var valueOrder = $this.q26_1;
    var values = $this.r26_1;
    var scopeSets = $this.s26_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, tmp1_copyInto, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.t26_1 = $this.t26_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, tmp2_copyInto, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.s26_1 = newScopeSets;
    $this.r26_1 = newValues;
    $this.q26_1 = newKeyOrder;
    $this.t26_1 = $this.t26_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.t26_1 - 1 | 0;
    var values = $this.r26_1;
    var valueOrder = $this.q26_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.r26_1;
    var valueOrder = $this.q26_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.t26_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.t26_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q26_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.r26_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.s26_1 = fillArrayVal(Array(50), null);
    this.t26_1 = 0;
  }
  protoOf(IdentityScopeMap).w26 = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.g23(scope);
  };
  protoOf(IdentityScopeMap).v26 = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).a4 = function () {
    var scopeSets = this.s26_1;
    var valueOrder = this.q26_1;
    var values = this.r26_1;
    var inductionVariable = 0;
    var last = scopeSets.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = scopeSets[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.a4();
        }
        valueOrder[i] = i;
        values[i] = null;
      }
       while (inductionVariable <= last);
    this.t26_1 = 0;
  };
  protoOf(IdentityScopeMap).u26 = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.q26_1;
    var scopeSets = this.s26_1;
    var values = this.r26_1;
    var size = this.t26_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.k2l(scope);
      if (set.q21_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.t26_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).u27 = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.q26_1;
    var scopeSets = this.s26_1;
    var values = this.r26_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.t26_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.k2l(scope);
        if (set.q21_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.t26_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.t26_1 = destinationIndex;
  };
  function VectorListIterator(list, index) {
    this.l2l_1 = list;
    this.m2l_1 = index;
  }
  protoOf(VectorListIterator).e = function () {
    return this.m2l_1 < this.l2l_1.g();
  };
  protoOf(VectorListIterator).f = function () {
    var tmp1 = this.m2l_1;
    this.m2l_1 = tmp1 + 1 | 0;
    return this.l2l_1.m(tmp1);
  };
  protoOf(VectorListIterator).b5 = function () {
    this.m2l_1 = this.m2l_1 - 1 | 0;
    this.l2l_1.z3(this.m2l_1);
  };
  protoOf(VectorListIterator).c2 = function () {
    return this.m2l_1 > 0;
  };
  protoOf(VectorListIterator).d2 = function () {
    return this.m2l_1;
  };
  protoOf(VectorListIterator).e2 = function () {
    this.m2l_1 = this.m2l_1 - 1 | 0;
    return this.l2l_1.m(this.m2l_1);
  };
  protoOf(VectorListIterator).f2 = function () {
    return this.m2l_1 - 1 | 0;
  };
  function MutableVectorList(vector) {
    this.n2l_1 = vector;
  }
  protoOf(MutableVectorList).g = function () {
    return this.n2l_1.e23_1;
  };
  protoOf(MutableVectorList).e1 = function (element) {
    return this.n2l_1.e1(element);
  };
  protoOf(MutableVectorList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).m4 = function (elements) {
    return this.n2l_1.m4(elements);
  };
  protoOf(MutableVectorList).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(MutableVectorList).m = function (index) {
    checkIndex(this, index);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.n2l_1.c23_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVectorList).o2l = function (element) {
    return this.n2l_1.o2l(element);
  };
  protoOf(MutableVectorList).o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.o2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).l = function () {
    return this.n2l_1.l();
  };
  protoOf(MutableVectorList).d = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(MutableVectorList).p2l = function (element) {
    return this.n2l_1.p2l(element);
  };
  protoOf(MutableVectorList).j2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.p2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).g23 = function (element) {
    return this.n2l_1.g23(element);
  };
  protoOf(MutableVectorList).a = function (element) {
    return this.g23((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).q2l = function (index, element) {
    return this.n2l_1.q2l(index, element);
  };
  protoOf(MutableVectorList).v3 = function (index, element) {
    return this.q2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).r2l = function (index, elements) {
    return this.n2l_1.r2l(index, elements);
  };
  protoOf(MutableVectorList).w3 = function (index, elements) {
    return this.r2l(index, elements);
  };
  protoOf(MutableVectorList).a2l = function (elements) {
    return this.n2l_1.a2l(elements);
  };
  protoOf(MutableVectorList).k = function (elements) {
    return this.a2l(elements);
  };
  protoOf(MutableVectorList).a4 = function () {
    return this.n2l_1.a4();
  };
  protoOf(MutableVectorList).u1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(MutableVectorList).k2l = function (element) {
    return this.n2l_1.k2l(element);
  };
  protoOf(MutableVectorList).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).z3 = function (index) {
    checkIndex(this, index);
    return this.n2l_1.z3(index);
  };
  protoOf(MutableVectorList).s2l = function (index, element) {
    checkIndex(this, index);
    return this.n2l_1.s2l(index, element);
  };
  protoOf(MutableVectorList).x3 = function (index, element) {
    return this.s2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).v1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.t2l_1 = list;
    this.u2l_1 = start;
    this.v2l_1 = end;
  }
  protoOf(SubList).g = function () {
    return this.v2l_1 - this.u2l_1 | 0;
  };
  protoOf(SubList).e1 = function (element) {
    var inductionVariable = this.u2l_1;
    var last = this.v2l_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.t2l_1.m(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).m4 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.runtime.collection.SubList.containsAll.<anonymous>' call
      if (!this.e1(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SubList).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(SubList).m = function (index) {
    checkIndex(this, index);
    return this.t2l_1.m(index + this.u2l_1 | 0);
  };
  protoOf(SubList).o2l = function (element) {
    var inductionVariable = this.u2l_1;
    var last = this.v2l_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.t2l_1.m(i), element)) {
          return i - this.u2l_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.o2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).l = function () {
    return this.v2l_1 === this.u2l_1;
  };
  protoOf(SubList).d = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(SubList).p2l = function (element) {
    var inductionVariable = this.v2l_1 - 1 | 0;
    var last = this.u2l_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(this.t2l_1.m(i), element)) {
          return i - this.u2l_1 | 0;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(SubList).j2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.p2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).g23 = function (element) {
    var tmp1 = this.v2l_1;
    this.v2l_1 = tmp1 + 1 | 0;
    this.t2l_1.v3(tmp1, element);
    return true;
  };
  protoOf(SubList).a = function (element) {
    return this.g23((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).q2l = function (index, element) {
    this.t2l_1.v3(index + this.u2l_1 | 0, element);
    this.v2l_1 = this.v2l_1 + 1 | 0;
  };
  protoOf(SubList).v3 = function (index, element) {
    return this.q2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).r2l = function (index, elements) {
    this.t2l_1.w3(index + this.u2l_1 | 0, elements);
    this.v2l_1 = this.v2l_1 + elements.g() | 0;
    return elements.g() > 0;
  };
  protoOf(SubList).w3 = function (index, elements) {
    return this.r2l(index, elements);
  };
  protoOf(SubList).a2l = function (elements) {
    this.t2l_1.w3(this.v2l_1, elements);
    this.v2l_1 = this.v2l_1 + elements.g() | 0;
    return elements.g() > 0;
  };
  protoOf(SubList).k = function (elements) {
    return this.a2l(elements);
  };
  protoOf(SubList).a4 = function () {
    var inductionVariable = this.v2l_1 - 1 | 0;
    var last = this.u2l_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.t2l_1.z3(i);
      }
       while (!(i === last));
    this.v2l_1 = this.u2l_1;
  };
  protoOf(SubList).u1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(SubList).k2l = function (element) {
    var inductionVariable = this.u2l_1;
    var last = this.v2l_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.t2l_1.m(i), element)) {
          this.t2l_1.z3(i);
          this.v2l_1 = this.v2l_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).z3 = function (index) {
    checkIndex(this, index);
    var item = this.t2l_1.z3(index + this.u2l_1 | 0);
    this.v2l_1 = this.v2l_1 - 1 | 0;
    return item;
  };
  protoOf(SubList).s2l = function (index, element) {
    checkIndex(this, index);
    return this.t2l_1.x3(index + this.u2l_1 | 0, element);
  };
  protoOf(SubList).x3 = function (index, element) {
    return this.s2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).v1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableVector(content, size) {
    this.c23_1 = content;
    this.d23_1 = null;
    this.e23_1 = size;
    this.f23_1 = 8;
  }
  protoOf(MutableVector).g23 = function (element) {
    this.ef(this.e23_1 + 1 | 0);
    this.c23_1[this.e23_1] = element;
    this.e23_1 = this.e23_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).q2l = function (index, element) {
    this.ef(this.e23_1 + 1 | 0);
    var content = this.c23_1;
    if (!(index === this.e23_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.e23_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    content[index] = element;
    this.e23_1 = this.e23_1 + 1 | 0;
  };
  protoOf(MutableVector).w2l = function (index, elements) {
    if (elements.l())
      return false;
    this.ef(this.e23_1 + elements.e23_1 | 0);
    var content = this.c23_1;
    if (!(index === this.e23_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.e23_1 | 0;
      var tmp1_copyInto = this.e23_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = elements.c23_1;
    var tmp3_copyInto = elements.e23_1;
    arrayCopy(tmp2_copyInto, content, index, 0, tmp3_copyInto);
    this.e23_1 = this.e23_1 + elements.e23_1 | 0;
    return true;
  };
  protoOf(MutableVector).r2l = function (index, elements) {
    if (elements.l())
      return false;
    this.ef(this.e23_1 + elements.g() | 0);
    var content = this.c23_1;
    if (!(index === this.e23_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.g() | 0;
      var tmp1_copyInto = this.e23_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      content[index + checkIndexOverflow(tmp1) | 0] = item;
    }
    this.e23_1 = this.e23_1 + elements.g() | 0;
    return true;
  };
  protoOf(MutableVector).a2l = function (elements) {
    return this.r2l(this.e23_1, elements);
  };
  protoOf(MutableVector).x2l = function () {
    var tmp0_elvis_lhs = this.d23_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.d23_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MutableVector).a4 = function () {
    var content = this.c23_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.e23_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.e23_1 = 0;
  };
  protoOf(MutableVector).e1 = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.e23_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = this.c23_1[i];
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).m4 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.e1(element))
        return false;
    }
    return true;
  };
  protoOf(MutableVector).ef = function (capacity) {
    var oldContent = this.c23_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, tmp0_max);
      this.c23_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).m3 = function () {
    if (this.l()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.c23_1[0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVector).o2l = function (element) {
    var size = this.e23_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.c23_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  protoOf(MutableVector).l = function () {
    return this.e23_1 === 0;
  };
  protoOf(MutableVector).u21 = function () {
    return !(this.e23_1 === 0);
  };
  protoOf(MutableVector).o3 = function () {
    if (this.l()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var tmp0_get = this.e23_1 - 1 | 0;
    var tmp = this.c23_1[tmp0_get];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVector).p2l = function (element) {
    var size = this.e23_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.c23_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i - 1 | 0;
      }
       while (i >= 0);
    }
    return -1;
  };
  protoOf(MutableVector).k2l = function (element) {
    var index = this.o2l(element);
    if (index >= 0) {
      this.z3(index);
      return true;
    }
    return false;
  };
  protoOf(MutableVector).z3 = function (index) {
    var content = this.c23_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.e23_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.e23_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
    }
    this.e23_1 = this.e23_1 - 1 | 0;
    content[this.e23_1] = null;
    return item;
  };
  protoOf(MutableVector).e4 = function (start, end) {
    if (end > start) {
      if (end < this.e23_1) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.c23_1;
        var tmp1_copyInto = this.c23_1;
        var tmp2_copyInto = this.e23_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, start, end, tmp2_copyInto);
      }
      var newSize = this.e23_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var last = this.e23_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.c23_1[i] = null;
        }
         while (!(i === last));
      this.e23_1 = newSize;
    }
  };
  protoOf(MutableVector).s2l = function (index, element) {
    var content = this.c23_1;
    var tmp = content[index];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  protoOf(MutableVector).y2l = function (comparator) {
    var tmp = this.c23_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.e23_1);
  };
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.g();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    var size = _this__u8e3s4.g();
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('Indices are out of order. fromIndex (' + fromIndex + ') is ' + ('greater than toIndex (' + toIndex + ').'));
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  function SubList_0(source, fromIndex, toIndex) {
    AbstractList.call(this);
    this.z2l_1 = source;
    this.a2m_1 = fromIndex;
    this.b2m_1 = toIndex;
    this.c2m_1 = 0;
    ListImplementation_getInstance().s1(this.a2m_1, this.b2m_1, this.z2l_1.g());
    this.c2m_1 = this.b2m_1 - this.a2m_1 | 0;
  }
  protoOf(SubList_0).m = function (index) {
    ListImplementation_getInstance().t1(index, this.c2m_1);
    return this.z2l_1.m(this.a2m_1 + index | 0);
  };
  protoOf(SubList_0).g = function () {
    return this.c2m_1;
  };
  protoOf(SubList_0).v1 = function (fromIndex, toIndex) {
    ListImplementation_getInstance().s1(fromIndex, toIndex, this.c2m_1);
    return new SubList_0(this.z2l_1, this.a2m_1 + fromIndex | 0, this.a2m_1 + toIndex | 0);
  };
  function ImmutableList() {
  }
  function persistentSetOf() {
    return Companion_getInstance_11().e2m();
  }
  function persistentHashMapOf() {
    return Companion_getInstance_9().g2m();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.j2m_1 = element;
  }
  protoOf(SingleElementListIterator).f = function () {
    this.m2m();
    this.k2m_1 = this.k2m_1 + 1 | 0;
    return this.j2m_1;
  };
  protoOf(SingleElementListIterator).e2 = function () {
    this.n2m();
    this.k2m_1 = this.k2m_1 - 1 | 0;
    return this.j2m_1;
  };
  function AbstractListIterator(index, size) {
    this.k2m_1 = index;
    this.l2m_1 = size;
  }
  protoOf(AbstractListIterator).e = function () {
    return this.k2m_1 < this.l2m_1;
  };
  protoOf(AbstractListIterator).c2 = function () {
    return this.k2m_1 > 0;
  };
  protoOf(AbstractListIterator).d2 = function () {
    return this.k2m_1;
  };
  protoOf(AbstractListIterator).f2 = function () {
    return this.k2m_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).m2m = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).n2m = function () {
    if (!this.c2())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).v1 = function (fromIndex, toIndex) {
    return subList.call(this, fromIndex, toIndex);
  };
  protoOf(AbstractPersistentList).k = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    return tmp0_apply.df();
  };
  protoOf(AbstractPersistentList).y3 = function (element) {
    var index = this.o(element);
    if (!(index === -1)) {
      return this.z3(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).n = function (element) {
    return !(this.o(element) === -1);
  };
  protoOf(AbstractPersistentList).o1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.n(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).d = function () {
    return this.o2m();
  };
  protoOf(AbstractPersistentList).o2m = function () {
    return this.u1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.s2m_1 = buffer;
  }
  protoOf(BufferIterator).f = function () {
    if (!this.e()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.k2m_1;
    this.k2m_1 = tmp1 + 1 | 0;
    return this.s2m_1[tmp1];
  };
  protoOf(BufferIterator).e2 = function () {
    if (!this.c2()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.k2m_1 = this.k2m_1 - 1 | 0;
    return this.s2m_1[this.k2m_1];
  };
  function rootSize($this) {
    return rootSize_1($this.v2m_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.v2m_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.w2m_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.w2m_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.v2m_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.w2m_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.v2m_1 + 1 | 0, $this.w2m_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.v2m_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.v2m_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.u2m_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.u2m_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.v2m_1 + 1 | 0, $this.w2m_1);
    }
    var lastElement = $this.u2m_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.u2m_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      elementCarry.x2m_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.x2m_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.v2m_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.u2m_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.u2m_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.x2m_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.x2m_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.x2m_1;
      tailCarry.x2m_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.u2m_1;
    }
    var buffer = $this.t2m_1;
    var shift = $this.w2m_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.t2m_1 = root;
    this.u2m_1 = tail;
    this.v2m_1 = size;
    this.w2m_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v2m_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.v2m_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.v2m_1 - rootSize_1(this.v2m_1) | 0) <= coerceAtMost(this.u2m_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).g = function () {
    return this.v2m_1;
  };
  protoOf(PersistentVector).a = function (element) {
    var tailSize = this.v2m_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.u2m_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.t2m_1, newTail, this.v2m_1 + 1 | 0, this.w2m_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.t2m_1, this.u2m_1, newTail_0);
  };
  protoOf(PersistentVector).p2m = function (index, element) {
    ListImplementation_getInstance().b2(index, this.v2m_1);
    if (index === this.v2m_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.t2m_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.t2m_1, this.w2m_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.x2m_1);
  };
  protoOf(PersistentVector).z3 = function (index) {
    ListImplementation_getInstance().t1(index, this.v2m_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.t2m_1, rootSize_0, this.w2m_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.t2m_1, this.w2m_1, index, new ObjectRef(this.u2m_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.w2m_1, 0);
  };
  protoOf(PersistentVector).z1y = function () {
    return new PersistentVectorBuilder(this, this.t2m_1, this.u2m_1, this.w2m_1);
  };
  protoOf(PersistentVector).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.v2m_1);
    var tmp = this.u2m_1;
    return new PersistentVectorIterator(this.t2m_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.v2m_1, (this.w2m_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).m = function (index) {
    ListImplementation_getInstance().t1(index, this.v2m_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).x3 = function (index, element) {
    ListImplementation_getInstance().t1(index, this.v2m_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.u2m_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.t2m_1, newTail, this.v2m_1, this.w2m_1);
    }
    var newRoot = setInRoot(this, this.t2m_1, this.w2m_1, index, element);
    return new PersistentVector(newRoot, this.u2m_1, this.v2m_1, this.w2m_1);
  };
  function rootSize_0($this) {
    if ($this.g2n_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.g2n_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.g2n_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.d2n_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    return tmp0_copyInto;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, tmp0_copyInto);
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = mutableBuffer($this);
    var tmp2_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
    arrayCopy(buffer, tmp1_copyInto, distance, 0, tmp2_copyInto);
    return tmp1_copyInto;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.d2n_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.d2n_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.g2n_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.c2n_1) {
      $this.e2n_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.c2n_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.f2n_1 = newTail;
      $this.c2n_1 = $this.c2n_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.g2n_1 = $this.g2n_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.e2n_1 = filledTail;
      $this.f2n_1 = newTail;
      $this.g2n_1 = $this.g2n_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.e2n_1 = pushTail_0($this, root, filledTail, $this.c2n_1);
      $this.f2n_1 = newTail;
      $this.g2n_1 = $this.g2n_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.g2n_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.e() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.f();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.c2n_1 ? pushBuffers($this, root, rootSize, $this.c2n_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.e()) {
      $this.c2n_1 = $this.c2n_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.c2n_1, $this.c2n_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.e()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.f();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.e();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.f2n_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.f2n_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      mutableTail[index] = element;
      $this.e2n_1 = root;
      $this.f2n_1 = mutableTail;
      $this.g2n_1 = $this.g2n_1 + 1 | 0;
    } else {
      var lastElement = $this.f2n_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.f2n_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.x2m_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      var mutableRoot = tmp0_copyInto;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.x2m_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.e2n_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> get_LOG_MAX_BUFFER_SIZE();
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE()) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, get_MAX_BUFFER_SIZE(), buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.e2n_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.f2() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.e2();
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = buffer;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE() - rightShift | 0;
      var tmp3_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(currentBuffer, tmp1_copyInto, 0, tmp2_copyInto, tmp3_copyInto);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.e2();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var endBufferEndIndex = ((index + elements.g() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = newNextBuffer;
      var tmp2_copyInto = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp1_copyInto, tmp2_copyInto, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - get_MAX_BUFFER_SIZE() | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, tmp3_copyInto, startBufferSize);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = newNextBuffer;
      var tmp5_copyInto = endBufferEndIndex + 1 | 0;
      var tmp6_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp4_copyInto, tmp5_copyInto, startBufferStartIndex, tmp6_copyInto);
    }
    var elementsIterator = elements.d();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.f2n_1;
    }
    var buffer = ensureNotNull($this.e2n_1);
    var shift = $this.c2n_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.g2n_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.f2n_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.f2n_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.f2n_1;
      var tmp1_copyInto = makeMutable($this, $this.f2n_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      var mutableTail = tmp1_copyInto;
      mutableTail[tailSize - 1 | 0] = null;
      $this.e2n_1 = root;
      $this.f2n_1 = mutableTail;
      $this.g2n_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.c2n_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      var mutableRoot = tmp0_copyInto;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.x2m_1;
      tailCarry.x2m_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.e2n_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.f2n_1 = tmp_0;
      $this.g2n_1 = rootSize;
      $this.c2n_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.x2m_1;
    tmp_1.f2n_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.g2n_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.e2n_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.c2n_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.e2n_1 = newRoot;
      $this.c2n_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.x2m_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.d4_1 = $this.d4_1 + 1 | 0;
      }
      oldElementCarry.x2m_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.e2n_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    ListImplementation_getInstance().b2(index, leafCount);
    if ($this.c2n_1 === 0) {
      return new SingleElementListIterator(ensureNotNull($this.e2n_1), index);
    }
    var trieHeight = $this.c2n_1 / get_LOG_MAX_BUFFER_SIZE() | 0;
    return new TrieIterator(ensureNotNull($this.e2n_1), index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.z2m_1 = vector;
    this.a2n_1 = vectorRoot;
    this.b2n_1 = vectorTail;
    this.c2n_1 = rootShift;
    this.d2n_1 = new MutabilityOwnership();
    this.e2n_1 = this.a2n_1;
    this.f2n_1 = this.b2n_1;
    this.g2n_1 = this.z2m_1.g();
  }
  protoOf(PersistentVectorBuilder).g = function () {
    return this.g2n_1;
  };
  protoOf(PersistentVectorBuilder).h2n = function () {
    return this.d4_1;
  };
  protoOf(PersistentVectorBuilder).df = function () {
    var tmp = this;
    var tmp_0;
    if (this.e2n_1 === this.a2n_1 ? this.f2n_1 === this.b2n_1 : false) {
      tmp_0 = this.z2m_1;
    } else {
      this.d2n_1 = new MutabilityOwnership();
      this.a2n_1 = this.e2n_1;
      this.b2n_1 = this.f2n_1;
      var tmp_1;
      if (this.e2n_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.f2n_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.f2n_1, this.g2n_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.e2n_1), this.f2n_1, this.g2n_1, this.c2n_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.z2m_1 = tmp_0;
    return this.z2m_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    this.d4_1 = this.d4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.f2n_1);
      mutableTail[tailSize] = element;
      this.f2n_1 = mutableTail;
      this.g2n_1 = this.g2n_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.e2n_1, this.f2n_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).k = function (elements) {
    if (elements.l()) {
      return false;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.d();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.g()) {
      this.f2n_1 = copyToBuffer(this, makeMutable(this, this.f2n_1), tailSize, elementsIterator);
      this.g2n_1 = this.g2n_1 + elements.g() | 0;
    } else {
      var buffersSize = ((elements.g() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.f2n_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.e2n_1;
      var tmp_1 = rootSize_0(this);
      tmp.e2n_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.f2n_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.g2n_1 = this.g2n_1 + elements.g() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).v3 = function (index, element) {
    ListImplementation_getInstance().b2(index, this.g2n_1);
    if (index === this.g2n_1) {
      this.a(element);
      return Unit_getInstance();
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.e2n_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.e2n_1), this.c2n_1, index, element, elementCarry);
    var tmp = elementCarry.x2m_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).w3 = function (index, elements) {
    ListImplementation_getInstance().b2(index, this.g2n_1);
    if (index === this.g2n_1) {
      return this.k(elements);
    }
    if (elements.l()) {
      return false;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var unaffectedElementsCount = index >> get_LOG_MAX_BUFFER_SIZE() << get_LOG_MAX_BUFFER_SIZE();
    var buffersSize = (((this.g2n_1 - unaffectedElementsCount | 0) + elements.g() | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var endIndex = ((index + elements.g() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.f2n_1;
      var tmp1_copyInto = makeMutable(this, this.f2n_1);
      var tmp2_copyInto = endIndex + 1 | 0;
      var tmp3_copyInto = tailSize_0(this);
      arrayCopy(tmp0_copyInto, tmp1_copyInto, tmp2_copyInto, startIndex, tmp3_copyInto);
      var newTail = tmp1_copyInto;
      copyToBuffer(this, newTail, startIndex, elements.d());
      this.f2n_1 = newTail;
      this.g2n_1 = this.g2n_1 + elements.g() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.g2n_1 + elements.g() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.f2n_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.f2n_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.f2n_1;
      var tmp5_copyInto = mutableBuffer(this);
      var tmp6_copyInto = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, 0, tmp6_copyInto, tailSize_1);
      newTail_0 = tmp5_copyInto;
      var rightShift_0 = get_MAX_BUFFER_SIZE() - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.f2n_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.e2n_1;
    tmp.e2n_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.f2n_1 = newTail_0;
    this.g2n_1 = this.g2n_1 + elements.g() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).m = function (index) {
    ListImplementation_getInstance().t1(index, this.g2n_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z3 = function (index) {
    ListImplementation_getInstance().t1(index, this.g2n_1);
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.e2n_1, rootSize, this.c2n_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.f2n_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.e2n_1), this.c2n_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.c2n_1, 0);
    var tmp_0 = elementCarry.x2m_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).x3 = function (index, element) {
    ListImplementation_getInstance().t1(index, this.g2n_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.f2n_1);
      if (!(mutableTail === this.f2n_1)) {
        this.d4_1 = this.d4_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.f2n_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.e2n_1 = setInRoot_0(this, ensureNotNull(this.e2n_1), this.c2n_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.x2m_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).d = function () {
    return this.o2m();
  };
  protoOf(PersistentVectorBuilder).o2m = function () {
    return this.u1(0);
  };
  protoOf(PersistentVectorBuilder).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.g2n_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.k2n_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.l2n_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).f = function () {
    this.m2m();
    if (this.l2n_1.e()) {
      this.k2m_1 = this.k2m_1 + 1 | 0;
      return this.l2n_1.f();
    }
    var tmp3 = this.k2m_1;
    this.k2m_1 = tmp3 + 1 | 0;
    return this.k2n_1[tmp3 - this.l2n_1.l2m_1 | 0];
  };
  protoOf(PersistentVectorIterator).e2 = function () {
    this.n2m();
    if (this.k2m_1 > this.l2n_1.l2m_1) {
      this.k2m_1 = this.k2m_1 - 1 | 0;
      return this.k2n_1[this.k2m_1 - this.l2n_1.l2m_1 | 0];
    }
    this.k2m_1 = this.k2m_1 - 1 | 0;
    return this.l2n_1.e2();
  };
  function reset($this) {
    $this.l2m_1 = $this.t2n_1.g2n_1;
    $this.u2n_1 = $this.t2n_1.h2n();
    $this.w2n_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.t2n_1.e2n_1;
    if (root == null) {
      $this.v2n_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.t2n_1.g2n_1);
    var trieIndex = coerceAtMost($this.k2m_1, trieSize);
    var trieHeight = ($this.t2n_1.c2n_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.v2n_1 == null) {
      $this.v2n_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.v2n_1).x2n(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.u2n_1 === $this.t2n_1.h2n()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.w2n_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.g2n_1);
    this.t2n_1 = builder;
    this.u2n_1 = this.t2n_1.h2n();
    this.v2n_1 = null;
    this.w2n_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).e2 = function () {
    checkForComodification(this);
    this.n2m();
    this.w2n_1 = this.k2m_1 - 1 | 0;
    var tmp1_elvis_lhs = this.v2n_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.t2n_1.f2n_1;
      this.k2m_1 = this.k2m_1 - 1 | 0;
      var tmp_1 = tmp_0[this.k2m_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.k2m_1 > trieIterator.l2m_1) {
      var tmp_2 = this.t2n_1.f2n_1;
      this.k2m_1 = this.k2m_1 - 1 | 0;
      var tmp_3 = tmp_2[this.k2m_1 - trieIterator.l2m_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    this.k2m_1 = this.k2m_1 - 1 | 0;
    return trieIterator.e2();
  };
  protoOf(PersistentVectorMutableIterator).f = function () {
    checkForComodification(this);
    this.m2m();
    this.w2n_1 = this.k2m_1;
    var tmp2_elvis_lhs = this.v2n_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.t2n_1.f2n_1;
      var tmp1 = this.k2m_1;
      this.k2m_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.e()) {
      this.k2m_1 = this.k2m_1 + 1 | 0;
      return trieIterator.f();
    }
    var tmp_2 = this.t2n_1.f2n_1;
    var tmp6 = this.k2m_1;
    this.k2m_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.l2m_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).b5 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.t2n_1.z3(this.w2n_1);
    if (this.w2n_1 < this.k2m_1)
      this.k2m_1 = this.w2n_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.y2n_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_8();
    AbstractPersistentList.call(this);
    this.z2n_1 = buffer;
    assert(this.z2n_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).g = function () {
    return this.z2n_1.length;
  };
  protoOf(SmallPersistentVector).a = function (element) {
    if (this.g() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.z2n_1, this.g() + 1 | 0);
      newBuffer[this.g()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.z2n_1, tail, this.g() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).k = function (elements) {
    if ((this.g() + elements.g() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.z2n_1, this.g() + elements.g() | 0);
      var index = this.g();
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    return tmp0_apply.df();
  };
  protoOf(SmallPersistentVector).p2m = function (index, element) {
    ListImplementation_getInstance().b2(index, this.g());
    if (index === this.g()) {
      return this.a(element);
    }
    if (this.g() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.g() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.z2n_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.z2n_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.g();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.z2n_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.z2n_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.g() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    root[index] = element;
    var tail = presizedBufferWith(this.z2n_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.g() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).z3 = function (index) {
    ListImplementation_getInstance().t1(index, this.g());
    if (this.g() === 1) {
      return Companion_getInstance_8().y2n_1;
    }
    var newBuffer = copyOf_0(this.z2n_1, this.g() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.z2n_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.g();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).z1y = function () {
    return new PersistentVectorBuilder(this, null, this.z2n_1, 0);
  };
  protoOf(SmallPersistentVector).o = function (element) {
    return indexOf(this.z2n_1, element);
  };
  protoOf(SmallPersistentVector).j2 = function (element) {
    return lastIndexOf(this.z2n_1, element);
  };
  protoOf(SmallPersistentVector).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.g());
    var tmp = this.z2n_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.g());
  };
  protoOf(SmallPersistentVector).m = function (index) {
    ListImplementation_getInstance().t1(index, this.g());
    var tmp = this.z2n_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).x3 = function (index, element) {
    ListImplementation_getInstance().t1(index, this.g());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.z2n_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.o2n_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.o2n_1) {
      var tmp = $this.p2n_1;
      var tmp_0 = i;
      var tmp_1 = $this.p2n_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.k2m_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.o2n_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.k2m_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.k2m_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.p2n_1[$this.o2n_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.o2n_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.o2n_1;
    tmp.p2n_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.q2n_1 = index === size;
    this.p2n_1[0] = root;
    fillPath(this, index - (this.q2n_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).x2n = function (root, index, size, height) {
    this.k2m_1 = index;
    this.l2m_1 = size;
    this.o2n_1 = height;
    if (this.p2n_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.p2n_1 = fillArrayVal(Array(height), null);
    }
    this.p2n_1[0] = root;
    this.q2n_1 = index === size;
    fillPath(this, index - (this.q2n_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).f = function () {
    if (!this.e()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.k2m_1 = this.k2m_1 + 1 | 0;
    if (this.k2m_1 === this.l2m_1) {
      this.q2n_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).e2 = function () {
    if (!this.c2()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.k2m_1 = this.k2m_1 - 1 | 0;
    if (this.q2n_1) {
      this.q2n_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_8().y2n_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.x2m_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.f2m_1 = new PersistentHashMap(Companion_getInstance_10().a2o_1, 0);
  }
  protoOf(Companion_7).g2m = function () {
    var tmp = this.f2m_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_9();
    AbstractMap.call(this);
    this.d2o_1 = node;
    this.e2o_1 = size;
  }
  protoOf(PersistentHashMap).g = function () {
    return this.e2o_1;
  };
  protoOf(PersistentHashMap).a3 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).b3 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).q = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).t2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.d2o_1.j2o(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).z2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.d2o_1.k2o(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).a5 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.d2o_1.l2o(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.m2o_1, this.g() + newNodeResult.n2o_1 | 0);
  };
  protoOf(PersistentHashMap).ye = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.d2o_1.o2o(tmp$ret$0, key, 0);
    if (this.d2o_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_9().g2m();
    }
    return new PersistentHashMap(newNode, this.g() - 1 | 0);
  };
  protoOf(PersistentHashMap).z1y = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.t2o_1 = map;
    this.u2o_1 = new MutabilityOwnership();
    this.v2o_1 = this.t2o_1.d2o_1;
    this.w2o_1 = null;
    this.x2o_1 = 0;
    this.y2o_1 = this.t2o_1.g();
  }
  protoOf(PersistentHashMapBuilder).z2o = function (value) {
    this.y2o_1 = value;
    this.x2o_1 = this.x2o_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).g = function () {
    return this.y2o_1;
  };
  protoOf(PersistentHashMapBuilder).df = function () {
    var tmp = this;
    var tmp_0;
    if (this.v2o_1 === this.t2o_1.d2o_1) {
      tmp_0 = this.t2o_1;
    } else {
      this.u2o_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.v2o_1, this.g());
    }
    tmp.t2o_1 = tmp_0;
    return this.t2o_1;
  };
  protoOf(PersistentHashMapBuilder).q = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).a3 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).b3 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).t2 = function (key) {
    var tmp = this.v2o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.j2o(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).z2 = function (key) {
    var tmp = this.v2o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.k2o(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).a5 = function (key, value) {
    this.w2o_1 = null;
    var tmp = this;
    var tmp_0 = this.v2o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.v2o_1 = tmp_0.a2p(tmp$ret$0, key, value, 0, this);
    return this.w2o_1;
  };
  protoOf(PersistentHashMapBuilder).bf = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.df();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.g();
      var tmp_0 = this;
      var tmp_1 = this.v2o_1;
      var tmp_2 = map.d2o_1;
      tmp_0.v2o_1 = tmp_1.b2p(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.g() | 0) - intersectionCounter.c2p_1 | 0;
      if (!(oldSize === newSize)) {
        this.z2o(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).bf.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).ye = function (key) {
    this.w2o_1 = null;
    var tmp = this;
    var tmp_0 = this.v2o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.d2p(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_10().a2o_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.v2o_1 = tmp_1;
    return this.w2o_1;
  };
  protoOf(PersistentHashMapBuilder).e2p = function (key, value) {
    var oldSize = this.g();
    var tmp = this;
    var tmp_0 = this.v2o_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.f2p(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_10().a2o_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.v2o_1 = tmp_1;
    return !(oldSize === this.g());
  };
  protoOf(PersistentHashMapBuilder).a4 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_10().a2o_1;
    tmp.v2o_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.z2o(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g2p_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.g2p_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).f = function () {
    return this.g2p_1.f();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).b5 = function () {
    return this.g2p_1.b5();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).r2p = function (key, newValue) {
    return this.g2p_1.r2p(key, newValue);
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.h2p_1[pathIndex].w2p(node.i2o_1, node.i2o_1.length, 0);
      while (!equals($this.h2p_1[pathIndex].s2p(), key)) {
        $this.h2p_1[pathIndex].x2p();
      }
      $this.i2p_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.a2q(keyPositionMask)) {
      var keyIndex = node.y2p(keyPositionMask);
      $this.h2p_1[pathIndex].w2p(node.i2o_1, imul(get_ENTRY_SIZE(), node.z2p()), keyIndex);
      $this.i2p_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.b2q(keyPositionMask);
    var targetNode = node.c2q(nodeIndex);
    $this.h2p_1[pathIndex].w2p(node.i2o_1, imul(get_ENTRY_SIZE(), node.z2p()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.p2p_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.n2p_1.x2o_1 === $this.q2p_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.v2o_1, path);
    this.n2p_1 = builder;
    this.o2p_1 = null;
    this.p2p_1 = false;
    this.q2p_1 = this.n2p_1.x2o_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).f = function () {
    checkForComodification_0(this);
    this.o2p_1 = this.s2p();
    this.p2p_1 = true;
    return protoOf(PersistentHashMapBaseIterator).f.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).b5 = function () {
    checkNextWasInvoked(this);
    if (this.e()) {
      var currentKey = this.s2p();
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.n2p_1;
      var tmp1_remove = this.o2p_1;
      (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).ye(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.n2p_1.v2o_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.n2p_1;
      var tmp3_remove = this.o2p_1;
      (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).ye(tmp3_remove);
    }
    this.o2p_1 = null;
    this.p2p_1 = false;
    this.q2p_1 = this.n2p_1.x2o_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).r2p = function (key, newValue) {
    if (!this.n2p_1.t2(key))
      return Unit_getInstance();
    if (this.e()) {
      var currentKey = this.s2p();
      // Inline function 'kotlin.collections.set' call
      this.n2p_1.a5(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.n2p_1.v2o_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      this.n2p_1.a5(key, newValue);
    }
    this.q2p_1 = this.n2p_1.x2o_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.g2q_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).f = function () {
    assert(this.h2q());
    this.v2p_1 = this.v2p_1 + 2 | 0;
    var tmp = this.t2p_1[this.v2p_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.t2p_1[this.v2p_1 - 1 | 0];
    return new MutableMapEntry(this.g2q_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.o2q_1 = parentIterator;
    this.p2q_1 = value;
  }
  protoOf(MutableMapEntry).s = function () {
    return this.p2q_1;
  };
  protoOf(MutableMapEntry).pe = function (newValue) {
    var result = this.p2q_1;
    this.p2q_1 = newValue;
    this.o2q_1.r2p(this.r(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.s2q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).if = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.if((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).a4 = function () {
    this.s2q_1.a4();
  };
  protoOf(PersistentHashMapBuilderEntries).d = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.s2q_1);
  };
  protoOf(PersistentHashMapBuilderEntries).re = function (element) {
    return this.s2q_1.e2p(element.r(), element.s());
  };
  protoOf(PersistentHashMapBuilderEntries).g = function () {
    return this.s2q_1.g();
  };
  protoOf(PersistentHashMapBuilderEntries).qe = function (element) {
    var tmp0_safe_receiver = this.s2q_1.z2(element.r());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.s());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.s() == null ? this.s2q_1.t2(element.r()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.t2q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).te = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.te((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).a4 = function () {
    this.t2q_1.a4();
  };
  protoOf(PersistentHashMapBuilderKeys).d = function () {
    return new PersistentHashMapBuilderKeysIterator(this.t2q_1);
  };
  protoOf(PersistentHashMapBuilderKeys).ye = function (element) {
    if (this.t2q_1.t2(element)) {
      this.t2q_1.ye(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.ye((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).g = function () {
    return this.t2q_1.g();
  };
  protoOf(PersistentHashMapBuilderKeys).q2 = function (element) {
    return this.t2q_1.t2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.q2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.u2q_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).g = function () {
    return this.u2q_1.g();
  };
  protoOf(PersistentHashMapBuilderValues).w2 = function (element) {
    return this.u2q_1.x2(element);
  };
  protoOf(PersistentHashMapBuilderValues).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.w2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).af = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a = function (element) {
    return this.af((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).d = function () {
    return new PersistentHashMapBuilderValuesIterator(this.u2q_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).n = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.qe(element);
  };
  protoOf(AbstractMapBuilderEntries).y3 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.re(element);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.h2p_1[pathIndex].h2q()) {
      return pathIndex;
    }
    if ($this.h2p_1[pathIndex].j2q()) {
      var node = $this.h2p_1[pathIndex].k2q();
      if (pathIndex === 6) {
        $this.h2p_1[pathIndex + 1 | 0].i2q(node.i2o_1, node.i2o_1.length);
      } else {
        $this.h2p_1[pathIndex + 1 | 0].i2q(node.i2o_1, imul(get_ENTRY_SIZE(), node.z2p()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.h2p_1[$this.i2p_1].h2q()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.i2p_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.h2p_1[i].j2q() : false) {
          $this.h2p_1[i].l2q();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.i2p_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.h2p_1[i - 1 | 0].l2q();
        }
        $this.h2p_1[i].i2q(Companion_getInstance_10().a2o_1.i2o_1, 0);
      }
       while (0 <= inductionVariable);
    $this.j2p_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.e())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.h2p_1 = path;
    this.i2p_1 = 0;
    this.j2p_1 = true;
    this.h2p_1[0].i2q(node.i2o_1, imul(get_ENTRY_SIZE(), node.z2p()));
    this.i2p_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).s2p = function () {
    checkHasNext(this);
    return this.h2p_1[this.i2p_1].s2p();
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    return this.j2p_1;
  };
  protoOf(PersistentHashMapBaseIterator).f = function () {
    checkHasNext(this);
    var result = this.h2p_1[this.i2p_1].f();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.t2p_1 = Companion_getInstance_10().a2o_1.i2o_1;
    this.u2p_1 = 0;
    this.v2p_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).w2p = function (buffer, dataSize, index) {
    this.t2p_1 = buffer;
    this.u2p_1 = dataSize;
    this.v2p_1 = index;
  };
  protoOf(TrieNodeBaseIterator).i2q = function (buffer, dataSize) {
    this.w2p(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).h2q = function () {
    return this.v2p_1 < this.u2p_1;
  };
  protoOf(TrieNodeBaseIterator).s2p = function () {
    assert(this.h2q());
    var tmp = this.t2p_1[this.v2p_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).x2p = function () {
    assert(this.h2q());
    this.v2p_1 = this.v2p_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).j2q = function () {
    assert(this.v2p_1 >= this.u2p_1);
    return this.v2p_1 < this.t2p_1.length;
  };
  protoOf(TrieNodeBaseIterator).k2q = function () {
    assert(this.j2q());
    var tmp = this.t2p_1[this.v2p_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).l2q = function () {
    assert(this.j2q());
    this.v2p_1 = this.v2p_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).e = function () {
    return this.h2q();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).f = function () {
    assert(this.h2q());
    this.v2p_1 = this.v2p_1 + 2 | 0;
    var tmp = this.t2p_1[this.v2p_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).f = function () {
    assert(this.h2q());
    this.v2p_1 = this.v2p_1 + 2 | 0;
    var tmp = this.t2p_1[this.v2p_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).f = function () {
    assert(this.h2q());
    this.v2p_1 = this.v2p_1 + 2 | 0;
    var tmp = this.t2p_1[this.v2p_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.t2p_1[this.v2p_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.q2q_1 = key;
    this.r2q_1 = value;
  }
  protoOf(MapEntry).r = function () {
    return this.q2q_1;
  };
  protoOf(MapEntry).s = function () {
    return this.r2q_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.r();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.s();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.r(), this.r()) ? equals(tmp0_safe_receiver.s(), this.s()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.r()) + '=' + toString_0(this.s());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.e2r_1 = map;
  }
  protoOf(PersistentHashMapKeys).g = function () {
    return this.e2r_1.g();
  };
  protoOf(PersistentHashMapKeys).q2 = function (element) {
    return this.e2r_1.t2(element);
  };
  protoOf(PersistentHashMapKeys).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.q2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).d = function () {
    return new PersistentHashMapKeysIterator(this.e2r_1.d2o_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.f2r_1 = map;
  }
  protoOf(PersistentHashMapValues).g = function () {
    return this.f2r_1.g();
  };
  protoOf(PersistentHashMapValues).w2 = function (element) {
    return this.f2r_1.x2(element);
  };
  protoOf(PersistentHashMapValues).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.w2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).d = function () {
    return new PersistentHashMapValuesIterator(this.f2r_1.d2o_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.g2r_1 = map;
  }
  protoOf(PersistentHashMapEntries).g = function () {
    return this.g2r_1.g();
  };
  protoOf(PersistentHashMapEntries).h2r = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.g2r_1.z2(element.r());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.s());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.s() == null ? this.g2r_1.t2(element.r()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).n = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.h2r((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).d = function () {
    return new PersistentHashMapEntriesIterator(this.g2r_1.d2o_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.m2o_1 = node;
    this.n2o_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.g2o_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.i2o_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.i2o_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.y2p(positionMask);
    var newBuffer = insertEntryAtIndex($this.i2o_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.f2o_1 | positionMask, $this.g2o_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.y2p(positionMask);
    if ($this.h2o_1 === owner) {
      $this.i2o_1 = insertEntryAtIndex($this.i2o_1, keyIndex, key, value);
      $this.f2o_1 = $this.f2o_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.i2o_1, keyIndex, key, value);
    return new TrieNode($this.f2o_1 | positionMask, $this.g2o_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.i2o_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.f2o_1, $this.g2o_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.h2o_1 === mutator.u2o_1) {
      $this.i2o_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.x2o_1 = mutator.x2o_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.i2o_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.f2o_1, $this.g2o_1, newBuffer, mutator.u2o_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.i2o_1;
    if (newNodeBuffer.length === 2 ? newNode.g2o_1 === 0 : false) {
      if ($this.i2o_1.length === 1) {
        newNode.f2o_1 = $this.g2o_1;
        return newNode;
      }
      var keyIndex = $this.y2p(positionMask);
      var newBuffer = replaceNodeWithEntry($this.i2o_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.f2o_1 ^ positionMask, $this.g2o_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.i2o_1, $this.i2o_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.f2o_1, $this.g2o_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.i2o_1.length === 1 ? newNode.i2o_1.length === 2 : false) ? newNode.g2o_1 === 0 : false) {
      newNode.f2o_1 = $this.g2o_1;
      return newNode;
    }
    if ($this.h2o_1 === owner) {
      $this.i2o_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.i2o_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.f2o_1, $this.g2o_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.i2o_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.i2o_1, nodeIndex);
    return TrieNode_init_$Create$($this.f2o_1, $this.g2o_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.i2o_1.length === 1)
      return null;
    if ($this.h2o_1 === owner) {
      $this.i2o_1 = removeNodeAtIndex_0($this.i2o_1, nodeIndex);
      $this.g2o_1 = $this.g2o_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.i2o_1, nodeIndex);
    return new TrieNode($this.f2o_1, $this.g2o_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.b2q(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.i2o_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.f2o_1 ^ positionMask, $this.g2o_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.h2o_1 === owner) {
      $this.i2o_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.f2o_1 = $this.f2o_1 ^ positionMask;
      $this.g2o_1 = $this.g2o_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.f2o_1 ^ positionMask, $this.g2o_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.i2o_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.i2o_1, keyIndex);
    return TrieNode_init_$Create$($this.f2o_1 ^ positionMask, $this.g2o_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.g();
    mutator.z2o(tmp1 - 1 | 0);
    mutator.w2o_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.i2o_1.length === 2)
      return null;
    if ($this.h2o_1 === mutator.u2o_1) {
      $this.i2o_1 = removeEntryAtIndex_0($this.i2o_1, keyIndex);
      $this.f2o_1 = $this.f2o_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.i2o_1, keyIndex);
    return new TrieNode($this.f2o_1 ^ positionMask, $this.g2o_1, newBuffer, mutator.u2o_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.i2o_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.i2o_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.g();
    mutator.z2o(tmp1 - 1 | 0);
    mutator.w2o_1 = valueAtKeyIndex($this, i);
    if ($this.i2o_1.length === 2)
      return null;
    if ($this.h2o_1 === mutator.u2o_1) {
      $this.i2o_1 = removeEntryAtIndex_0($this.i2o_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.i2o_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.u2o_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.i2o_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.i2o_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.i2o_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.w2o_1 = valueAtKeyIndex($this, i);
          if ($this.h2o_1 === mutator.u2o_1) {
            $this.i2o_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.x2o_1 = mutator.x2o_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.i2o_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.u2o_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.g();
    mutator.z2o(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.i2o_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.u2o_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.g2o_1 === 0);
    assert($this.f2o_1 === 0);
    assert(otherNode.g2o_1 === 0);
    assert(otherNode.f2o_1 === 0);
    var tempBuffer = copyOf_0($this.i2o_1, $this.i2o_1.length + otherNode.i2o_1.length | 0);
    var i = $this.i2o_1.length;
    var progression = step(until(0, otherNode.i2o_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.i2o_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.i2o_1[j];
          tempBuffer[i + 1 | 0] = otherNode.i2o_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.c2p_1 = intersectionCounter.c2p_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.i2o_1.length ? $this : newSize === otherNode.i2o_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.c2q($this.b2q(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.c2q(otherNode.b2q(positionMask));
        tmp_0 = targetNode.b2p(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.a2q(positionMask)) {
        var keyIndex = otherNode.y2p(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.g();
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.a2p(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.g() === oldSize) {
          intersectionCounter.c2p_1 = intersectionCounter.c2p_1 + 1 | 0;
        }
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.c2q(otherNode.b2q(positionMask));
      var tmp_1;
      if ($this.a2q(positionMask)) {
        var keyIndex_0 = $this.y2p(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.j2o(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.c2p_1 = intersectionCounter.c2p_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.a2p(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.y2p(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.y2p(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.u2o_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.g2o_1 === 0)
      return $this.i2o_1.length / 2 | 0;
    var numValues = countOneBits($this.f2o_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.i2o_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.c2q(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.g2o_1 === otherNode.g2o_1))
      return false;
    if (!($this.f2o_1 === otherNode.f2o_1))
      return false;
    var inductionVariable = 0;
    var last = $this.i2o_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.i2o_1[i] === otherNode.i2o_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.h2o_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.a2o_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_10();
    this.f2o_1 = dataMap;
    this.g2o_1 = nodeMap;
    this.h2o_1 = ownedBy;
    this.i2o_1 = buffer;
  }
  protoOf(TrieNode).z2p = function () {
    return countOneBits(this.f2o_1);
  };
  protoOf(TrieNode).a2q = function (positionMask) {
    return !((this.f2o_1 & positionMask) === 0);
  };
  protoOf(TrieNode).y2p = function (positionMask) {
    return imul(2, countOneBits(this.f2o_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).b2q = function (positionMask) {
    return (this.i2o_1.length - 1 | 0) - countOneBits(this.g2o_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).c2q = function (nodeIndex) {
    var tmp = this.i2o_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).j2o = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.y2p(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.c2q(this.b2q(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.j2o(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).k2o = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.c2q(this.b2q(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.k2o(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).b2p = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.i2r(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.u2o_1);
    }
    var newNodeMap = this.g2o_1 | otherNode.g2o_1;
    var newDataMap = (this.f2o_1 ^ otherNode.f2o_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.f2o_1 & otherNode.f2o_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.y2p(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.y2p(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.h2o_1, mutator.u2o_1) ? this.f2o_1 === newDataMap : false) ? this.g2o_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5_anonymous = index_0;
      var newNodeIndex = (mutableNode.i2o_1.length - 1 | 0) - tmp5_anonymous | 0;
      mutableNode.i2o_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7_anonymous = index_1;
      var newKeyIndex = imul(tmp7_anonymous, 2);
      if (!otherNode.a2q(bit_1)) {
        var oldKeyIndex = this.y2p(bit_1);
        mutableNode.i2o_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.i2o_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.y2p(bit_1);
        mutableNode.i2o_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.i2o_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.a2q(bit_1)) {
          intersectionCounter.c2p_1 = intersectionCounter.c2p_1 + 1 | 0;
        }
      }
      index_1 = index_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).l2o = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.b2q(keyPositionMask);
      var targetNode = this.c2q(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.l2o(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0_anonymous = putResult.m2o_1;
      tmp_2.m2o_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0_anonymous);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).a2p = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.w2o_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.g();
      mutator.z2o(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.u2o_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.b2q(keyPositionMask);
      var targetNode = this.c2q(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.a2p(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.u2o_1);
    }
    var tmp3 = mutator.g();
    mutator.z2o(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.u2o_1);
  };
  protoOf(TrieNode).o2o = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.b2q(keyPositionMask);
      var targetNode = this.c2q(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.o2o(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).d2p = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.b2q(keyPositionMask);
      var targetNode = this.c2q(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.d2p(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.u2o_1);
    }
    return this;
  };
  protoOf(TrieNode).f2p = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.a2q(keyPositionMask)) {
      var keyIndex = this.y2p(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.b2q(keyPositionMask);
      var targetNode = this.c2q(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.f2p(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.u2o_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.d2m_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_9().g2m());
  }
  protoOf(Companion_9).e2m = function () {
    return this.d2m_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_11();
    AbstractSet.call(this);
    this.j2r_1 = firstElement;
    this.k2r_1 = lastElement;
    this.l2r_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).g = function () {
    return this.l2r_1.g();
  };
  protoOf(PersistentOrderedSet).n = function (element) {
    return this.l2r_1.t2(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.l2r_1.t2(element)) {
      return this;
    }
    if (this.l()) {
      var newMap = this.l2r_1.a5(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.k2r_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.l2r_1.z2(lastElement));
    var newMap_0 = this.l2r_1.a5(lastElement, lastLinks.o2r(element)).a5(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.j2r_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).y3 = function (element) {
    var tmp0_elvis_lhs = this.l2r_1.z2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.l2r_1.ye(element);
    if (links.p2r()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.m2r_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).z2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.m2r_1;
      newMap = tmp_0.a5((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.o2r(links.n2r_1));
    }
    if (links.r2r()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.n2r_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).z2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.n2r_1;
      newMap = tmp_2.a5((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.q2r(links.m2r_1));
    }
    var newFirstElement = !links.p2r() ? links.n2r_1 : this.j2r_1;
    var newLastElement = !links.r2r() ? links.m2r_1 : this.k2r_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).d = function () {
    return new PersistentOrderedSetIterator(this.j2r_1, this.l2r_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.m2r_1 = previous;
    this.n2r_1 = next;
  }
  protoOf(Links).o2r = function (newNext) {
    return new Links(this.m2r_1, newNext);
  };
  protoOf(Links).q2r = function (newPrevious) {
    return new Links(newPrevious, this.n2r_1);
  };
  protoOf(Links).r2r = function () {
    return !(this.n2r_1 === EndOfChain_getInstance());
  };
  protoOf(Links).p2r = function () {
    return !(this.m2r_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.e())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.s2r_1 = nextElement;
    this.t2r_1 = map;
    this.u2r_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).e = function () {
    return this.u2r_1 < this.t2r_1.g();
  };
  protoOf(PersistentOrderedSetIterator).f = function () {
    checkHasNext_0(this);
    var tmp = this.s2r_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    this.u2r_1 = this.u2r_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.t2r_1.z2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.s2r_1 = tmp_1.n2r_1;
    return result;
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  protoOf(ListImplementation).t1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).b2 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).s1 = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.c2p_1 = count;
  }
  protoOf(DeltaCounter).i2r = function (that) {
    this.c2p_1 = this.c2p_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.c2p_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.c2p_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.c2p_1 === tmp0_other_with_cast.c2p_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.a2s(block);
    return tmp0_apply;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.f27() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.s1s_1, other.s1s_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.m1r(key);
    var slot = composer.w1t();
    var tmp;
    if (slot === Companion_getInstance_1().y1s_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.x1t(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.a2s(block);
    composer.o1r();
    return result;
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.l2s_1 = map;
    this.m2s_1 = 8;
  }
  protoOf(Builder).df = function () {
    var tmp = this;
    var tmp_0;
    if (this.v2o_1 === this.l2s_1.d2o_1) {
      tmp_0 = this.l2s_1;
    } else {
      this.u2o_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.v2o_1, this.g());
    }
    tmp.l2s_1 = tmp_0;
    return this.l2s_1;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_10().a2o_1;
    tmp.n2s_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_10;
  function Companion_getInstance_12() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_12();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).q = function () {
    return protoOf(PersistentHashMap).q.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).s2s = function (key) {
    return read(this, key);
  };
  protoOf(PersistentCompositionLocalHashMap).z1y = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_12().n2s_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.b2l_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.c2l_1[0].equals(key) ? 0 : $this.c2l_1[0].x(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.c2l_1[mid];
      var comparison = midVal.m9(key);
      if (comparison.x(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.x(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.b2l_1 = size;
    this.c2l_1 = keys;
    this.d2l_1 = values;
  }
  protoOf(ThreadMap).e2l = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.d2l_1[index] : null;
  };
  protoOf(ThreadMap).f2l = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.d2l_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).g2l = function (key, value) {
    var size = this.b2l_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.d2l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.c2l_1[source];
        var oldValue = this.d2l_1[source];
        if (oldKey.x(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.c2l_1[source];
          var oldValue_0 = this.d2l_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.m(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.i9(element.n8_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.g());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    return tmp0_also;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.t2s_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).gp = function () {
    return this.t2s_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.u2s_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).gp = function () {
    return this.u2s_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().y3($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().y3($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).e1q = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).z2j = function (readObserver) {
    return currentSnapshot().v2s(readObserver);
  };
  protoOf(Companion_11).f2e = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2s(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).l2a = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().sv();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.v2s(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.g2e();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.h2e(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.gp();
      }
    } else
      return block();
  };
  protoOf(Companion_11).x2s = function () {
    return createTransparentSnapshotWithNoParentReadObserver(get_threadSnapshot().sv());
  };
  protoOf(Companion_11).f2g = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().a(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).y2s = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().a(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).n2a = function () {
    return currentSnapshot().n2a();
  };
  protoOf(Companion_11).g2d = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().sv().z2s();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u21()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_13();
    this.r22_1 = invalid;
    this.s22_1 = id;
    this.t22_1 = false;
    this.u22_1 = !(id === 0) ? trackPinning(id, this.a2t()) : -1;
    this.v22_1 = 8;
  }
  protoOf(Snapshot).b2t = function (_set____db54di) {
    this.r22_1 = _set____db54di;
  };
  protoOf(Snapshot).a2t = function () {
    return this.r22_1;
  };
  protoOf(Snapshot).c2t = function (_set____db54di) {
    this.s22_1 = _set____db54di;
  };
  protoOf(Snapshot).w22 = function () {
    return this.s22_1;
  };
  protoOf(Snapshot).d2t = function (value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Updating write count is not supported for this snapshot');
  };
  protoOf(Snapshot).z29 = function () {
    return 0;
  };
  protoOf(Snapshot).gp = function () {
    this.t22_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f2t();
  };
  protoOf(Snapshot).g2e = function () {
    var previous = get_threadSnapshot().sv();
    get_threadSnapshot().l29(this);
    return previous;
  };
  protoOf(Snapshot).h2e = function (snapshot) {
    get_threadSnapshot().l29(snapshot);
  };
  protoOf(Snapshot).k2t = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.l2t();
    this.m2t();
  };
  protoOf(Snapshot).l2t = function () {
    set_openSnapshots(get_openSnapshots().r2t(this.w22()));
  };
  protoOf(Snapshot).m2t = function () {
    this.f2t();
  };
  protoOf(Snapshot).s2t = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.t22_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).f2t = function () {
    if (this.u22_1 >= 0) {
      releasePinningLocked(this.u22_1);
      this.u22_1 = -1;
    }
  };
  protoOf(Snapshot).t2t = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.u22_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.u22_1 = -1;
    return tmp0_also;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.g() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new ReadonlySnapshot(tmp$ret$3, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().l()) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).v2s = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  protoOf(GlobalSnapshot).w2s = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).n2a = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).j2u = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).i2t = function (snapshot) {
    return this.j2u(snapshot);
  };
  protoOf(GlobalSnapshot).k2u = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).h2t = function (snapshot) {
    return this.k2u(snapshot);
  };
  protoOf(GlobalSnapshot).x2e = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).gp = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f2t();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.s2u(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().y2u(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().z2u(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().sv();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().sv() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.v2e_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.v2e_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.u22_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.z2s();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.r2u(null);
      var id = $this.w22();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.r21_1;
      var inductionVariable = 0;
      var last = modified.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (isObject(tmp) ? tmp : THROW_CCE()).b2a();
          while (!(current == null)) {
            if (current.g2a_1 === id ? true : contains($this.s2e_1, current.g2a_1)) {
              current.g2a_1 = 0;
            }
            current = current.h2a_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.k2t();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.t2e_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.t2e_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.a2v_1 = new Int32Array(0);
  }
  var Companion_instance_12;
  function Companion_getInstance_14() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_14();
    Snapshot.call(this, id, invalid);
    this.n2e_1 = readObserver;
    this.o2e_1 = writeObserver;
    this.p2e_1 = 0;
    this.q2e_1 = null;
    this.r2e_1 = null;
    this.s2e_1 = Companion_getInstance_15().b2v_1;
    this.t2e_1 = Companion_getInstance_14().a2v_1;
    this.u2e_1 = 1;
    this.v2e_1 = false;
    this.w2e_1 = 8;
  }
  protoOf(MutableSnapshot).k2a = function () {
    return this.n2e_1;
  };
  protoOf(MutableSnapshot).g2t = function () {
    return this.o2e_1;
  };
  protoOf(MutableSnapshot).w2s = function (readObserver, writeObserver) {
    this.s2t();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.n2u(this.w22());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().c2v(newId));
    var currentInvalid = this.a2t();
    this.b2t(currentInvalid.c2v(newId));
    var tmp0_also = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.w22() + 1 | 0, newId), mergedReadObserver(readObserver, this.k2a()), mergedWriteObserver(writeObserver, this.g2t()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.v2e_1 ? !this.t22_1 : false) {
      var previousId = this.w22();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.c2t(tmp0_0);
      set_openSnapshots(get_openSnapshots().c2v(this.w22()));
      this.b2t(addRange(this.a2t(), previousId + 1 | 0, this.w22()));
    }
    return tmp0_also;
  };
  protoOf(MutableSnapshot).x2e = function () {
    var modified = this.z2s();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().sv(), this, get_openSnapshots().r2t(get_currentGlobalSnapshot().sv().w22())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.q21_1 === 0) {
      this.l2t();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().sv();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.z2s();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.l())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().sv();
      var result = this.l2u(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().r2t(previousGlobalSnapshot_0.w22()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.l2t();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.z2s();
      this.r2u(null);
      previousGlobalSnapshot_0.r2u(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_getInstance();
    }
    this.v2e_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_isNullOrEmpty == null ? true : tmp0_isNullOrEmpty.l())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp1_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_fastForEach.g() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_fastForEach.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.l())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp2_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp2_fastForEach.g() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp2_fastForEach.m(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m2t();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.r21_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.q21_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.r21_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.q21_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var tmp1_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(tmp1_anonymous);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.r2e_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.g() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.m(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.r2e_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).e2t = function () {
    return false;
  };
  protoOf(MutableSnapshot).gp = function () {
    if (!this.t22_1) {
      protoOf(Snapshot).gp.call(this);
      this.i2t(this);
    }
  };
  protoOf(MutableSnapshot).v2s = function (readObserver) {
    this.s2t();
    validateNotAppliedOrPinned(this);
    var previousId = this.w22();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.n2u(this.w22());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().c2v(readonlyId));
    var tmp0_also = new NestedReadonlySnapshot(readonlyId, addRange(this.a2t(), previousId + 1 | 0, readonlyId), readObserver, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.v2e_1 ? !this.t22_1 : false) {
      var previousId_0 = this.w22();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.c2t(tmp0_0);
      set_openSnapshots(get_openSnapshots().c2v(this.w22()));
      this.b2t(addRange(this.a2t(), previousId_0 + 1 | 0, this.w22()));
    }
    return tmp0_also;
  };
  protoOf(MutableSnapshot).h2t = function (snapshot) {
    this.u2e_1 = this.u2e_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).i2t = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u2e_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.u2e_1 = this.u2e_1 - 1 | 0;
    if (this.u2e_1 === 0) {
      if (!this.v2e_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).n2a = function () {
    if (this.v2e_1 ? true : this.t22_1)
      return Unit_getInstance();
    this.m2u();
  };
  protoOf(MutableSnapshot).l2t = function () {
    set_openSnapshots(get_openSnapshots().r2t(this.w22()).d2v(this.s2e_1));
  };
  protoOf(MutableSnapshot).m2t = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).m2t.call(this);
  };
  protoOf(MutableSnapshot).l2u = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.a2t().c2v(this.w22()).e2v(this.s2e_1);
    var modified = ensureNotNull(this.z2s());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.r21_1;
    var inductionVariable = 0;
    var last = modified.q21_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.b2a();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.w22(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.w22(), this.a2t());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.z2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = tmp0_anonymous.p2a(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp0_also;
                  tmp_4 = tmp0_also;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.a(to(tmp0_anonymous, current.x29()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp1_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = tmp1_also;
                  tmp_5 = tmp1_also;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.a(tmp0_anonymous);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp2_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp2_also;
                  tmp_6 = tmp2_also;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.a(!equals(merged, previous) ? to(tmp0_anonymous, merged) : to(tmp0_anonymous, previous.x29()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.m2u();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.g() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.y4();
          var stateRecord = item.z4();
          stateRecord.g2a_1 = this.w22();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.h2a_1 = state.b2a();
          state.o2a(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_getInstance();
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.g() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.m(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.k2l(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.r2e_1;
      this.r2e_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).m2u = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.n2u(this.w22());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.v2e_1 ? !this.t22_1 : false) {
      var previousId = this.w22();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.c2t(tmp0);
      set_openSnapshots(get_openSnapshots().c2v(this.w22()));
      this.b2t(addRange(this.a2t(), previousId + 1 | 0, this.w22()));
    }
    return Unit_getInstance();
  };
  protoOf(MutableSnapshot).n2u = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s2e_1 = this.s2e_1.c2v(id);
  };
  protoOf(MutableSnapshot).o2u = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp0_plus = this.t2e_1;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.intArrayOf' call
      var tmp0_plus_0 = new Int32Array([id]);
      tmp.t2e_1 = primitiveArrayConcat([tmp0_plus, tmp0_plus_0]);
    }
  };
  protoOf(MutableSnapshot).p2u = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_getInstance();
    var pinned = this.t2e_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.t2e_1 = tmp_0;
  };
  protoOf(MutableSnapshot).q2u = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s2e_1 = this.s2e_1.e2v(snapshots);
  };
  protoOf(MutableSnapshot).j2t = function (state) {
    var tmp0_elvis_lhs = this.z2s();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.r2u(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.g23(state);
  };
  protoOf(MutableSnapshot).d2t = function (_set____db54di) {
    this.p2e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).z29 = function () {
    return this.p2e_1;
  };
  protoOf(MutableSnapshot).r2u = function (_set____db54di) {
    this.q2e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).z2s = function () {
    return this.q2e_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.g2v_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.i2v_1 = snapshot;
    this.j2v_1 = 8;
  }
  function SnapshotApplyResult() {
    this.k2v_1 = 0;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.a2w_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().sv() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(parentSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsParentSnapshot) {
    var tmp = Companion_getInstance_15().b2v_1;
    var tmp1_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.k2a();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().sv().k2a() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp3_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.g2t();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().sv().g2t() : tmp3_elvis_lhs));
    this.a2w_1 = parentSnapshot;
    this.b2w_1 = mergeParentObservers;
    this.c2w_1 = ownsParentSnapshot;
  }
  protoOf(TransparentObserverMutableSnapshot).gp = function () {
    this.t22_1 = true;
    if (this.c2w_1) {
      var tmp0_safe_receiver = this.a2w_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.gp();
      }
    }
  };
  protoOf(TransparentObserverMutableSnapshot).c2t = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).w22 = function () {
    return _get_currentSnapshot__9vker0(this).w22();
  };
  protoOf(TransparentObserverMutableSnapshot).b2t = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).a2t = function () {
    return _get_currentSnapshot__9vker0(this).a2t();
  };
  protoOf(TransparentObserverMutableSnapshot).r2u = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).z2s = function () {
    return _get_currentSnapshot__9vker0(this).z2s();
  };
  protoOf(TransparentObserverMutableSnapshot).d2t = function (value) {
    _get_currentSnapshot__9vker0(this).d2t(value);
  };
  protoOf(TransparentObserverMutableSnapshot).z29 = function () {
    return _get_currentSnapshot__9vker0(this).z29();
  };
  protoOf(TransparentObserverMutableSnapshot).e2t = function () {
    return _get_currentSnapshot__9vker0(this).e2t();
  };
  protoOf(TransparentObserverMutableSnapshot).x2e = function () {
    return _get_currentSnapshot__9vker0(this).x2e();
  };
  protoOf(TransparentObserverMutableSnapshot).j2t = function (state) {
    return _get_currentSnapshot__9vker0(this).j2t(state);
  };
  protoOf(TransparentObserverMutableSnapshot).v2s = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.k2a());
    var tmp;
    if (!this.b2w_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).v2s(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).v2s(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).w2s = function (readObserver, writeObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.k2a());
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.g2t());
    var tmp;
    if (!this.b2w_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).w2s(null, mergedWriteObserver_0);
      tmp = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver_0, mergedWriteObserver_0, false, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).w2s(mergedReadObserver_0, mergedWriteObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).n2a = function () {
    return _get_currentSnapshot__9vker0(this).n2a();
  };
  protoOf(TransparentObserverMutableSnapshot).k2u = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).h2t = function (snapshot) {
    return this.k2u(snapshot);
  };
  protoOf(TransparentObserverMutableSnapshot).j2u = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).i2t = function (snapshot) {
    return this.j2u(snapshot);
  };
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    readObserver = readObserver === VOID ? null : readObserver;
    ownsPreviousSnapshot = ownsPreviousSnapshot === VOID ? false : ownsPreviousSnapshot;
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().sv();
    modified = previousGlobalSnapshot.z2s();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().y2u(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.g() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.m(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().y2u(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.r21_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.q21_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var tmp0_anonymous = isObject(tmp_3) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_getInstance();
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.g2a_1 = currentSnapshot().w22();
    this.h2a_1 = null;
    this.i2a_1 = 8;
  }
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.j2w_1 = readObserver;
    this.k2w_1 = 1;
  }
  protoOf(ReadonlySnapshot).k2a = function () {
    return this.j2w_1;
  };
  protoOf(ReadonlySnapshot).e2t = function () {
    return true;
  };
  protoOf(ReadonlySnapshot).g2t = function () {
    return null;
  };
  protoOf(ReadonlySnapshot).v2s = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.w22(), this.a2t(), readObserver, this);
  };
  protoOf(ReadonlySnapshot).n2a = function () {
  };
  protoOf(ReadonlySnapshot).gp = function () {
    if (!this.t22_1) {
      this.i2t(this);
      protoOf(Snapshot).gp.call(this);
    }
  };
  protoOf(ReadonlySnapshot).h2t = function (snapshot) {
    this.k2w_1 = this.k2w_1 + 1 | 0;
  };
  protoOf(ReadonlySnapshot).i2t = function (snapshot) {
    this.k2w_1 = this.k2w_1 - 1 | 0;
    if (this.k2w_1 === 0) {
      this.k2t();
    }
  };
  protoOf(ReadonlySnapshot).j2t = function (state) {
    reportReadonlySnapshotWrite();
  };
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.b2x_1) {
      $this.b2x_1 = true;
      $this.a2x_1.i2t($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.a2x_1 = parent;
    this.b2x_1 = false;
    this.a2x_1.h2t(this);
  }
  protoOf(NestedMutableSnapshot).gp = function () {
    if (!this.t22_1) {
      protoOf(MutableSnapshot).gp.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).x2e = function () {
    if (this.a2x_1.v2e_1 ? true : this.a2x_1.t22_1)
      return new Failure(this);
    var modified = this.z2s();
    var id = this.w22();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.a2x_1, this, this.a2x_1.a2t()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.q21_1 === 0) {
      this.k2t();
    } else {
      var result = this.l2u(this.a2x_1.w22(), optimisticMerges_0, this.a2x_1.a2t());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.a2x_1.z2s();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.h2d(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.a2x_1.r2u(modified);
        this.r2u(null);
      }
    }
    if (this.a2x_1.w22() < id) {
      this.a2x_1.m2u();
    }
    this.a2x_1.b2t(this.a2x_1.a2t().r2t(id).d2v(this.s2e_1));
    this.a2x_1.n2u(id);
    this.a2x_1.o2u(this.t2t());
    this.a2x_1.q2u(this.s2e_1);
    this.a2x_1.p2u(this.t2e_1);
    this.v2e_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.c2v(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.z2s();
    var id = currentSnapshot.w22();
    if (modified == null)
      return null;
    var start = applyingSnapshot.a2t().c2v(applyingSnapshot.w22()).e2v(applyingSnapshot.s2e_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.r21_1;
    var inductionVariable = 0;
    var last = modified.q21_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.b2a();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.w22(), applyingSnapshot.a2t());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = tmp0_anonymous.p2a(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var tmp0_also = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = tmp0_also;
                tmp_3 = tmp0_also;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.a5(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().m(snapshot.w22())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().r2t(previousGlobalSnapshot.w22()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().r2t(previousGlobalSnapshot.w22()));
    get_currentGlobalSnapshot().h27(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.gp();
    set_openSnapshots(get_openSnapshots().c2v(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var tmp0_removeIf = get_extraStateObjects();
    var size = tmp0_removeIf.c2x_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = tmp0_removeIf.e2x_1[i];
        var value = entry == null ? null : entry.sv();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            tmp0_removeIf.e2x_1[currentUsed] = entry;
            tmp0_removeIf.d2x_1[currentUsed] = tmp0_removeIf.d2x_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_removeIf.e2x_1[i_0] = null;
        tmp0_removeIf.d2x_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      tmp0_removeIf.c2x_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().g23(state);
    }
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $tmp0_safe_receiver) {
    return function (state) {
      $readObserver(state);
      $tmp0_safe_receiver(state);
      return Unit_getInstance();
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.l2x_1 = parent;
    this.l2x_1.h2t(this);
    var tmp = this;
    var tmp_0;
    if (readObserver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver = this.l2x_1.k2a();
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp_1 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp_0 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.m2x_1 = tmp1_elvis_lhs_0 == null ? this.l2x_1.k2a() : tmp1_elvis_lhs_0;
  }
  protoOf(NestedReadonlySnapshot).e2t = function () {
    return true;
  };
  protoOf(NestedReadonlySnapshot).v2s = function (readObserver) {
    return new NestedReadonlySnapshot(this.w22(), this.a2t(), readObserver, this.l2x_1);
  };
  protoOf(NestedReadonlySnapshot).n2a = function () {
  };
  protoOf(NestedReadonlySnapshot).k2a = function () {
    return this.m2x_1;
  };
  protoOf(NestedReadonlySnapshot).gp = function () {
    if (!this.t22_1) {
      if (!(this.w22() === this.l2x_1.w22())) {
        this.k2t();
      }
      this.l2x_1.i2t(this);
      protoOf(Snapshot).gp.call(this);
    }
  };
  protoOf(NestedReadonlySnapshot).g2t = function () {
    return null;
  };
  protoOf(NestedReadonlySnapshot).n2x = function (state) {
    reportReadonlySnapshotWrite();
  };
  protoOf(NestedReadonlySnapshot).j2t = function (state) {
    return this.n2x(state);
  };
  protoOf(NestedReadonlySnapshot).j2u = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).i2t = function (snapshot) {
    return this.j2u(snapshot);
  };
  protoOf(NestedReadonlySnapshot).k2u = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).h2t = function (snapshot) {
    return this.k2u(snapshot);
  };
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.g2a_1 < current.g2a_1 ? current : candidate;
      }
      current = current.h2a_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.t2x_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().sv() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_15().b2v_1);
    this.t2x_1 = previousSnapshot;
    this.u2x_1 = mergeParentObservers;
    this.v2x_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.t2x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2a();
    tmp.w2x_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().sv().k2a() : tmp1_elvis_lhs, this.u2x_1);
    this.x2x_1 = null;
    this.y2x_1 = this;
  }
  protoOf(TransparentObserverSnapshot).k2a = function () {
    return this.w2x_1;
  };
  protoOf(TransparentObserverSnapshot).g2t = function () {
    return this.x2x_1;
  };
  protoOf(TransparentObserverSnapshot).gp = function () {
    this.t22_1 = true;
    if (this.v2x_1) {
      var tmp0_safe_receiver = this.t2x_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.gp();
      }
    }
  };
  protoOf(TransparentObserverSnapshot).w22 = function () {
    return _get_currentSnapshot__9vker0_0(this).w22();
  };
  protoOf(TransparentObserverSnapshot).a2t = function () {
    return _get_currentSnapshot__9vker0_0(this).a2t();
  };
  protoOf(TransparentObserverSnapshot).e2t = function () {
    return _get_currentSnapshot__9vker0_0(this).e2t();
  };
  protoOf(TransparentObserverSnapshot).j2t = function (state) {
    return _get_currentSnapshot__9vker0_0(this).j2t(state);
  };
  protoOf(TransparentObserverSnapshot).v2s = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.w2x_1);
    var tmp;
    if (!this.u2x_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).v2s(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).v2s(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverSnapshot).n2a = function () {
    return _get_currentSnapshot__9vker0_0(this).n2a();
  };
  protoOf(TransparentObserverSnapshot).k2u = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).h2t = function (snapshot) {
    return this.k2u(snapshot);
  };
  protoOf(TransparentObserverSnapshot).j2u = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).i2t = function (snapshot) {
    return this.j2u(snapshot);
  };
  function reportReadonlySnapshotWrite() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Cannot modify a state object in a read-only snapshot');
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.b2a();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().z2x(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.g2a_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.g2a_1 < validRecord.g2a_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var tmp0_findYoungestOr = state.b2a();
                var current_0 = tmp0_findYoungestOr;
                var youngest = tmp0_findYoungestOr;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.g2a_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.g2a_1 < current_0.g2a_1)
                    youngest = current_0;
                  current_0 = current_0.h2a_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.g2a_1 = 0;
            recordToOverwrite.w29(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.h2a_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.g2a_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.m(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_13().e1q();
    var tmp0_safe_receiver = snapshot.k2a();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.w22(), snapshot.a2t());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_13().e1q();
      var tmp_0 = state.b2a();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.w22(), syncSnapshot.a2t());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_13().e1q();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.w22(), tmp0_let.a2t());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_13().e1q();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp = readable(r, tmp0_let_0.w22(), tmp0_let_0.a2t());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.d2t(snapshot.z29() + 1 | 0);
    var tmp1_safe_receiver = snapshot.g2t();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.e2t()) {
      snapshot.j2t(state);
    }
    var id = snapshot.w22();
    if (candidate.g2a_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.g2a_1 = id;
    snapshot.j2t(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.g2a_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.x29();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.g2a_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.h2a_1 = state.b2a();
      state.o2a(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      var tmp_2 = tmp0_apply;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.b2a();
    var validRecord = null;
    var reuseLimit = get_pinningTable().z2x(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_15().b2v_1;
    while (!(current == null)) {
      var currentId = current.g2a_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.g2a_1 < validRecord.g2a_1 ? current : validRecord;
        }
      }
      current = current.h2a_1;
    }
    return null;
  }
  function current_0(r, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = readable(r, snapshot.w22(), snapshot.a2t());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.w29(_this__u8e3s4);
    newData.g2a_1 = snapshot.w22();
    return newData;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.e2t()) {
      snapshot.j2t(state);
    }
    var id = snapshot.w22();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.a2t());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.g2a_1 === snapshot.w22())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.j2t(state);
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().c2v(result.w22()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_15().b2v_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_15().b2v_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().c2v(tmp0_also.w22()));
      currentGlobalSnapshot = new AtomicReference(tmp0_also);
      snapshotInitializer = get_currentGlobalSnapshot().sv();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.u2u_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.u2u_1;
    var half = $this.t2u_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.t2u_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.u2u_1;
    var index = $this.v2u_1;
    var handles = $this.w2u_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.u2u_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.u2u_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, tmp1_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.v2u_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, tmp3_copyInto);
    $this.u2u_1 = newValues;
    $this.v2u_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.w2u_1.length;
    if ($this.x2u_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.w2u_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, tmp1_copyInto);
      $this.w2u_1 = newHandles;
    }
    var handle = $this.x2u_1;
    $this.x2u_1 = $this.w2u_1[$this.x2u_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.w2u_1[handle] = $this.x2u_1;
    $this.x2u_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.t2u_1 = 0;
    this.u2u_1 = new Int32Array(16);
    this.v2u_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w2u_1 = tmp_1;
    this.x2u_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).z2x = function (default_0) {
    return this.t2u_1 > 0 ? this.u2u_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).y2u = function (value) {
    ensure(this, this.t2u_1 + 1 | 0);
    var tmp1 = this.t2u_1;
    this.t2u_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.u2u_1[i] = value;
    this.v2u_1[i] = handle;
    this.w2u_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).z2u = function (handle) {
    var i = this.w2u_1[handle];
    swap(this, i, this.t2u_1 - 1 | 0);
    this.t2u_1 = this.t2u_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_13 = this;
    this.b2v_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_13;
  function Companion_getInstance_15() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.i2y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).r2y = function ($this$sequence, $completion) {
    var tmp = this.s2y($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(SnapshotIdSet$iterator$slambda).yl = function (p1, $completion) {
    return this.r2y(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 15;
            this.k2y_1 = this.i2y_1.q2t_1;
            if (!(this.k2y_1 == null)) {
              this.l2y_1 = intArrayIterator(this.k2y_1);
              this.dl_1 = 1;
              continue $sm;
            } else {
              this.dl_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.l2y_1.e()) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.m2y_1 = this.l2y_1.f();
            this.dl_1 = 2;
            suspendResult = this.j2y_1.i5(this.m2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.dl_1 = 1;
            continue $sm;
          case 3:
            this.dl_1 = 4;
            continue $sm;
          case 4:
            if (!this.i2y_1.o2t_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.n2y_1 = until(0, 64).d();
              this.dl_1 = 5;
              continue $sm;
            } else {
              this.dl_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.n2y_1.e()) {
              this.dl_1 = 8;
              continue $sm;
            }

            this.o2y_1 = this.n2y_1.f();
            if (!this.i2y_1.o2t_1.vb((new Long(1, 0)).q7(this.o2y_1)).equals(new Long(0, 0))) {
              this.dl_1 = 6;
              suspendResult = this.j2y_1.i5(this.o2y_1 + this.i2y_1.p2t_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 7;
              continue $sm;
            }

          case 6:
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.dl_1 = 5;
            continue $sm;
          case 8:
            this.dl_1 = 9;
            continue $sm;
          case 9:
            if (!this.i2y_1.n2t_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.p2y_1 = until(0, 64).d();
              this.dl_1 = 10;
              continue $sm;
            } else {
              this.dl_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.p2y_1.e()) {
              this.dl_1 = 13;
              continue $sm;
            }

            this.q2y_1 = this.p2y_1.f();
            if (!this.i2y_1.n2t_1.vb((new Long(1, 0)).q7(this.q2y_1)).equals(new Long(0, 0))) {
              this.dl_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.j2y_1.i5((this.q2y_1 + 64 | 0) + this.i2y_1.p2t_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 12;
              continue $sm;
            }

          case 11:
            this.dl_1 = 12;
            continue $sm;
          case 12:
            this.dl_1 = 10;
            continue $sm;
          case 13:
            this.dl_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 15) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).s2y = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.i2y_1, completion);
    i.j2y_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r2y($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_15();
    this.n2t_1 = upperSet;
    this.o2t_1 = lowerSet;
    this.p2t_1 = lowerBound;
    this.q2t_1 = belowBound;
  }
  protoOf(SnapshotIdSet).m = function (bit) {
    var offset = bit - this.p2t_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).q7(offset).vb(this.o2t_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.q7(offset - 64 | 0).vb(this.n2t_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.q2t_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).c2v = function (bit) {
    var offset = bit - this.p2t_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).q7(offset);
      if (this.o2t_1.vb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.n2t_1, this.o2t_1.sk(mask), this.p2t_1, this.q2t_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.q7(offset - 64 | 0);
        if (this.n2t_1.vb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.n2t_1.sk(mask_0), this.o2t_1, this.p2t_1, this.q2t_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.m(bit)) {
            var newUpperSet = this.n2t_1;
            var newLowerSet = this.o2t_1;
            var newLowerBound = this.p2t_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_apply = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.q2t_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                  }
                  newBelowBound = tmp0_apply;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.vb((new Long(1, 0)).q7(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.q2t_1 : tmp1_elvis_lhs)).c2v(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.q2t_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.n2t_1, this.o2t_1, this.p2t_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, tmp2_copyInto, insertLocation, tmp3_copyInto);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.n2t_1, this.o2t_1, this.p2t_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).r2t = function (bit) {
    var offset = bit - this.p2t_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).q7(offset);
      if (!this.o2t_1.vb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.n2t_1, this.o2t_1.vb(mask.rk()), this.p2t_1, this.q2t_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.q7(offset - 64 | 0);
        if (!this.n2t_1.vb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.n2t_1.vb(mask_0.rk()), this.o2t_1, this.p2t_1, this.q2t_1);
        }
      } else {
        if (offset < 0) {
          var array = this.q2t_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.n2t_1, this.o2t_1, this.p2t_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, tmp0_copyInto, tmp1_copyInto);
              }
              return new SnapshotIdSet(this.n2t_1, this.o2t_1, this.p2t_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).d2v = function (bits) {
    if (bits === Companion_getInstance_15().b2v_1)
      return this;
    if (this === Companion_getInstance_15().b2v_1)
      return Companion_getInstance_15().b2v_1;
    var tmp;
    if (bits.p2t_1 === this.p2t_1 ? bits.q2t_1 === this.q2t_1 : false) {
      tmp = new SnapshotIdSet(this.n2t_1.vb(bits.n2t_1.rk()), this.o2t_1.vb(bits.o2t_1.rk()), this.p2t_1, this.q2t_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.r2t(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).e2v = function (bits) {
    if (bits === Companion_getInstance_15().b2v_1)
      return this;
    if (this === Companion_getInstance_15().b2v_1)
      return bits;
    var tmp;
    if (bits.p2t_1 === this.p2t_1 ? bits.q2t_1 === this.q2t_1 : false) {
      tmp = new SnapshotIdSet(this.n2t_1.sk(bits.n2t_1), this.o2t_1.sk(bits.o2t_1), this.p2t_1, this.q2t_1);
    } else {
      var tmp_0;
      if (this.q2t_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.c2v(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.c2v(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).d = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).d();
  };
  protoOf(SnapshotIdSet).s2u = function (default_0) {
    var belowBound = this.q2t_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.o2t_1.equals(new Long(0, 0)))
      return this.p2t_1 + lowestBitOf(this.o2t_1) | 0;
    if (!this.n2t_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.p2t_1 + 64 | 0) + lowestBitOf(this.n2t_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(tmp0_mapTo) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.vb(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.z9(32);
    }
    if (b.vb(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.z9(16);
    }
    if (b.vb(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.z9(8);
    }
    if (b.vb(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.z9(4);
    }
    if (!b.vb(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.vb(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.vb(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.vb(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.w2y_1 = list;
    this.x2y_1 = 0;
  }
  protoOf(StateListStateRecord).w29 = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.w2y_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).w2y_1;
    this.x2y_1 = value.x2y_1;
  };
  protoOf(StateListStateRecord).x29 = function () {
    return new StateListStateRecord(this.w2y_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = $this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      var builder = ensureNotNull(oldList).z1y();
      result = block(builder);
      var newList = builder.df();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = $this.y2k_1;
        var tmp0_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_13().e1q();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$mgqpbl_8m20to();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.x2y_1 === currentModification) {
          tmp1_anonymous.w2y_1 = newList;
          tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.w3($index, $elements);
    };
  }
  function SnapshotStateList() {
    this.y2k_1 = new StateListStateRecord(persistentListOf());
    this.z2k_1 = 0;
  }
  protoOf(SnapshotStateList).b2a = function () {
    return this.y2k_1;
  };
  protoOf(SnapshotStateList).o2a = function (value) {
    value.h2a_1 = this.y2k_1;
    var tmp = this;
    tmp.y2k_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).y2y = function () {
    return this.z2y().w2y_1;
  };
  protoOf(SnapshotStateList).a2z = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.y2k_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    return current(tmp0_withCurrent).x2y_1;
  };
  protoOf(SnapshotStateList).z2y = function () {
    var tmp = this.y2k_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).g = function () {
    return this.z2y().w2y_1.g();
  };
  protoOf(SnapshotStateList).e1 = function (element) {
    return this.z2y().w2y_1.n(element);
  };
  protoOf(SnapshotStateList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).m4 = function (elements) {
    return this.z2y().w2y_1.o1(elements);
  };
  protoOf(SnapshotStateList).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(SnapshotStateList).m = function (index) {
    return this.z2y().w2y_1.m(index);
  };
  protoOf(SnapshotStateList).o2l = function (element) {
    return this.z2y().w2y_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.o2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).l = function () {
    return this.z2y().w2y_1.l();
  };
  protoOf(SnapshotStateList).d = function () {
    return this.o2m();
  };
  protoOf(SnapshotStateList).p2l = function (element) {
    return this.z2y().w2y_1.j2(element);
  };
  protoOf(SnapshotStateList).j2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.p2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o2m = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).u1 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).v1 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.g() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SubList_1(this, fromIndex, toIndex);
  };
  protoOf(SnapshotStateList).g23 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).a(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).a = function (element) {
    return this.g23((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q2l = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).p2m(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_getInstance();
  };
  protoOf(SnapshotStateList).v3 = function (index, element) {
    return this.q2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).r2l = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).w3 = function (index, elements) {
    return this.r2l(index, elements);
  };
  protoOf(SnapshotStateList).a2l = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).k(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).k = function (elements) {
    return this.a2l(elements);
  };
  protoOf(SnapshotStateList).a4 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.y2k_1;
    var tmp0_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_13().e1q();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp0_anonymous = writableRecord(tmp0_writable, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    tmp0_anonymous.w2y_1 = persistentListOf();
    tmp0_anonymous.x2y_1 = tmp0_anonymous.x2y_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).k2l = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).y3(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).z3 = function (index) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.m(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).z3(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also_0 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also_0) {
        result = true;
        break $l$loop_0;
      }
    }
    return tmp0_also;
  };
  protoOf(SnapshotStateList).s2l = function (index, element) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.m(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).x3(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y2k_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if (tmp1_anonymous.x2y_1 === currentModification) {
        tmp1_anonymous.w2y_1 = newList;
        tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var tmp0_also_0 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (tmp0_also_0) {
        result = true;
        break $l$loop_0;
      }
    }
    return tmp0_also;
  };
  protoOf(SnapshotStateList).x3 = function (index, element) {
    return this.s2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).e4 = function (fromIndex, toIndex) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y2k_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      currentModification = current_0.x2y_1;
      oldList = current_0.w2y_1;
      var builder = ensureNotNull(oldList).z1y();
      builder.v1(fromIndex, toIndex).a4();
      result = Unit_getInstance();
      var newList = builder.df();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.y2k_1;
        var tmp0_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_13().e1q();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$mgqpbl_8m20to();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.x2y_1 === currentModification) {
          tmp1_anonymous.w2y_1 = newList;
          tmp1_anonymous.x2y_1 = tmp1_anonymous.x2y_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
  };
  function validateModification($this) {
    if (!($this.b2z_1.a2z() === $this.d2z_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.b2z_1 = list;
    this.c2z_1 = offset - 1 | 0;
    this.d2z_1 = this.b2z_1.a2z();
  }
  protoOf(StateListIterator).c2 = function () {
    return this.c2z_1 >= 0;
  };
  protoOf(StateListIterator).d2 = function () {
    return this.c2z_1 + 1 | 0;
  };
  protoOf(StateListIterator).e2 = function () {
    validateModification(this);
    validateRange(this.c2z_1, this.b2z_1.g());
    // Inline function 'kotlin.also' call
    var tmp0_also = this.b2z_1.m(this.c2z_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.c2z_1 = this.c2z_1 - 1 | 0;
    return tmp0_also;
  };
  protoOf(StateListIterator).f2 = function () {
    return this.c2z_1;
  };
  protoOf(StateListIterator).e = function () {
    return this.c2z_1 < (this.b2z_1.g() - 1 | 0);
  };
  protoOf(StateListIterator).f = function () {
    validateModification(this);
    var newIndex = this.c2z_1 + 1 | 0;
    validateRange(newIndex, this.b2z_1.g());
    // Inline function 'kotlin.also' call
    var tmp0_also = this.b2z_1.m(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.c2z_1 = newIndex;
    return tmp0_also;
  };
  protoOf(StateListIterator).b5 = function () {
    validateModification(this);
    this.b2z_1.z3(this.c2z_1);
    this.c2z_1 = this.c2z_1 - 1 | 0;
    this.d2z_1 = this.b2z_1.a2z();
  };
  function validateModification_0($this) {
    if (!($this.e2z_1.a2z() === $this.g2z_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SubList$listIterator$1($current, this$0) {
    this.i2z_1 = $current;
    this.j2z_1 = this$0;
  }
  protoOf(SubList$listIterator$1).c2 = function () {
    return this.i2z_1._v >= 0;
  };
  protoOf(SubList$listIterator$1).d2 = function () {
    return this.i2z_1._v + 1 | 0;
  };
  protoOf(SubList$listIterator$1).e2 = function () {
    var oldCurrent = this.i2z_1._v;
    validateRange(oldCurrent, this.j2z_1.h2z_1);
    this.i2z_1._v = oldCurrent - 1 | 0;
    return this.j2z_1.m(oldCurrent);
  };
  protoOf(SubList$listIterator$1).f2 = function () {
    return this.i2z_1._v;
  };
  protoOf(SubList$listIterator$1).e = function () {
    return this.i2z_1._v < (this.j2z_1.h2z_1 - 1 | 0);
  };
  protoOf(SubList$listIterator$1).f = function () {
    var newCurrent = this.i2z_1._v + 1 | 0;
    validateRange(newCurrent, this.j2z_1.h2z_1);
    this.i2z_1._v = newCurrent;
    return this.j2z_1.m(newCurrent);
  };
  protoOf(SubList$listIterator$1).zp = function () {
    modificationError();
  };
  protoOf(SubList$listIterator$1).b5 = function () {
    return this.zp();
  };
  function SubList_1(parentList, fromIndex, toIndex) {
    this.e2z_1 = parentList;
    this.f2z_1 = fromIndex;
    this.g2z_1 = this.e2z_1.a2z();
    this.h2z_1 = toIndex - fromIndex | 0;
  }
  protoOf(SubList_1).g = function () {
    return this.h2z_1;
  };
  protoOf(SubList_1).e1 = function (element) {
    return this.o2l(element) >= 0;
  };
  protoOf(SubList_1).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).m4 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SubList.containsAll.<anonymous>' call
        if (!this.e1(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SubList_1).o1 = function (elements) {
    return this.m4(elements);
  };
  protoOf(SubList_1).m = function (index) {
    validateModification_0(this);
    validateRange(index, this.h2z_1);
    return this.e2z_1.m(this.f2z_1 + index | 0);
  };
  protoOf(SubList_1).o2l = function (element) {
    validateModification_0(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(this.f2z_1, this.f2z_1 + this.h2z_1 | 0);
    var inductionVariable = tmp0_forEach.y_1;
    var last = tmp0_forEach.z_1;
    if (inductionVariable <= last)
      do {
        var element_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.SubList.indexOf.<anonymous>' call
        if (equals(element, this.e2z_1.m(element_0)))
          return element_0 - this.f2z_1 | 0;
      }
       while (!(element_0 === last));
    return -1;
  };
  protoOf(SubList_1).o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.o2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).l = function () {
    return this.h2z_1 === 0;
  };
  protoOf(SubList_1).d = function () {
    return this.o2m();
  };
  protoOf(SubList_1).p2l = function (element) {
    validateModification_0(this);
    var index = (this.f2z_1 + this.h2z_1 | 0) - 1 | 0;
    while (index >= this.f2z_1) {
      if (equals(element, this.e2z_1.m(index)))
        return index - this.f2z_1 | 0;
      index = index - 1 | 0;
    }
    return -1;
  };
  protoOf(SubList_1).j2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.p2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).g23 = function (element) {
    validateModification_0(this);
    this.e2z_1.q2l(this.f2z_1 + this.h2z_1 | 0, element);
    this.h2z_1 = this.h2z_1 + 1 | 0;
    this.g2z_1 = this.e2z_1.a2z();
    return true;
  };
  protoOf(SubList_1).a = function (element) {
    return this.g23((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).q2l = function (index, element) {
    validateModification_0(this);
    this.e2z_1.q2l(this.f2z_1 + index | 0, element);
    this.h2z_1 = this.h2z_1 + 1 | 0;
    this.g2z_1 = this.e2z_1.a2z();
  };
  protoOf(SubList_1).v3 = function (index, element) {
    return this.q2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).r2l = function (index, elements) {
    validateModification_0(this);
    var result = this.e2z_1.r2l(index + this.f2z_1 | 0, elements);
    if (result) {
      this.h2z_1 = this.h2z_1 + elements.g() | 0;
      this.g2z_1 = this.e2z_1.a2z();
    }
    return result;
  };
  protoOf(SubList_1).w3 = function (index, elements) {
    return this.r2l(index, elements);
  };
  protoOf(SubList_1).a2l = function (elements) {
    return this.r2l(this.h2z_1, elements);
  };
  protoOf(SubList_1).k = function (elements) {
    return this.a2l(elements);
  };
  protoOf(SubList_1).a4 = function () {
    if (this.h2z_1 > 0) {
      validateModification_0(this);
      this.e2z_1.e4(this.f2z_1, this.f2z_1 + this.h2z_1 | 0);
      this.h2z_1 = 0;
      this.g2z_1 = this.e2z_1.a2z();
    }
  };
  protoOf(SubList_1).o2m = function () {
    return this.u1(0);
  };
  protoOf(SubList_1).u1 = function (index) {
    validateModification_0(this);
    var current = {_v: index - 1 | 0};
    return new SubList$listIterator$1(current, this);
  };
  protoOf(SubList_1).k2l = function (element) {
    var index = this.o2l(element);
    var tmp;
    if (index >= 0) {
      this.z3(index);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SubList_1).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.k2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).z3 = function (index) {
    validateModification_0(this);
    // Inline function 'kotlin.also' call
    var tmp0_also = this.e2z_1.z3(this.f2z_1 + index | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SubList.removeAt.<anonymous>' call
    this.h2z_1 = this.h2z_1 - 1 | 0;
    this.g2z_1 = this.e2z_1.a2z();
    return tmp0_also;
  };
  protoOf(SubList_1).s2l = function (index, element) {
    validateRange(index, this.h2z_1);
    validateModification_0(this);
    var result = this.e2z_1.s2l(index + this.f2z_1 | 0, element);
    this.g2z_1 = this.e2z_1.a2z();
    return result;
  };
  protoOf(SubList_1).x3 = function (index, element) {
    return this.s2l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).v1 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.h2z_1 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    validateModification_0(this);
    return new SubList_1(this.e2z_1, fromIndex + this.f2z_1 | 0, toIndex + this.f2z_1 | 0);
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function modificationError() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    throw IllegalStateException_init_$Create$('Cannot modify a state list through an iterator');
  }
  function _get_sync_$accessor$mgqpbl_8m20to() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  function get_sync_0() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync_0;
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.n2z_1 = map;
    this.o2z_1 = 0;
  }
  protoOf(StateMapStateRecord).w29 = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$1hruseb_q3n4dp();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n2z_1 = other.n2z_1;
    this.o2z_1 = other.o2z_1;
  };
  protoOf(StateMapStateRecord).x29 = function () {
    return new StateMapStateRecord(this.n2z_1);
  };
  function SnapshotStateMap() {
    this.p2z_1 = new StateMapStateRecord(persistentHashMapOf());
    this.q2z_1 = new SnapshotMapEntrySet(this);
    this.r2z_1 = new SnapshotMapKeySet(this);
    this.s2z_1 = new SnapshotMapValueSet(this);
    this.t2z_1 = 0;
  }
  protoOf(SnapshotStateMap).b2a = function () {
    return this.p2z_1;
  };
  protoOf(SnapshotStateMap).o2a = function (value) {
    var tmp = this;
    tmp.p2z_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).g = function () {
    return this.z2y().n2z_1.g();
  };
  protoOf(SnapshotStateMap).t2 = function (key) {
    return this.z2y().n2z_1.t2(key);
  };
  protoOf(SnapshotStateMap).x2 = function (value) {
    return this.z2y().n2z_1.x2(value);
  };
  protoOf(SnapshotStateMap).z2 = function (key) {
    return this.z2y().n2z_1.z2(key);
  };
  protoOf(SnapshotStateMap).l = function () {
    return this.z2y().n2z_1.l();
  };
  protoOf(SnapshotStateMap).q = function () {
    return this.q2z_1;
  };
  protoOf(SnapshotStateMap).a3 = function () {
    return this.r2z_1;
  };
  protoOf(SnapshotStateMap).b3 = function () {
    return this.s2z_1;
  };
  protoOf(SnapshotStateMap).a4 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.p2z_1;
    var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var tmp0_anonymous = current(tmp0_withCurrent);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    tmp0_anonymous.n2z_1;
    var newMap = persistentHashMapOf();
    var tmp_0;
    if (!(newMap === tmp0_anonymous.n2z_1)) {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.p2z_1;
      var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_13().e1q();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var tmp0_anonymous_0 = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_anonymous_0.n2z_1 = newMap;
      tmp0_anonymous_0.o2z_1 = tmp0_anonymous_0.o2z_1 + 1 | 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  };
  protoOf(SnapshotStateMap).a5 = function (key, value) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.p2z_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.n2z_1;
      currentModification = current_0.o2z_1;
      var builder = ensureNotNull(oldMap).z1y();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      result = builder.a5(key, value);
      var newMap = builder.df();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.p2z_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_13().e1q();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.o2z_1 === currentModification) {
          tmp1_anonymous.n2z_1 = newMap;
          tmp1_anonymous.o2z_1 = tmp1_anonymous.o2z_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).bf = function (from) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.p2z_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.n2z_1;
      currentModification = current_0.o2z_1;
      var builder = ensureNotNull(oldMap).z1y();
      builder.bf(from);
      result = Unit_getInstance();
      var newMap = builder.df();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.p2z_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_13().e1q();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.o2z_1 === currentModification) {
          tmp1_anonymous.n2z_1 = newMap;
          tmp1_anonymous.o2z_1 = tmp1_anonymous.o2z_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).ye = function (key) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.p2z_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.n2z_1;
      currentModification = current_0.o2z_1;
      var builder = ensureNotNull(oldMap).z1y();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      result = builder.ye(key);
      var newMap = builder.df();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.p2z_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_13().e1q();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.o2z_1 === currentModification) {
          tmp1_anonymous.n2z_1 = newMap;
          tmp1_anonymous.o2z_1 = tmp1_anonymous.o2z_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).a2z = function () {
    return this.z2y().o2z_1;
  };
  protoOf(SnapshotStateMap).u2z = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.q2z_1.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        if (equals(element.s(), value)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.ye(tmp0_safe_receiver.r());
      tmp = true;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).z2y = function () {
    var tmp = this.p2z_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).if = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).a = function (element) {
    return this.if((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).w2z = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).k = function (elements) {
    return this.w2z(elements);
  };
  protoOf(SnapshotMapEntrySet).d = function () {
    return new StateMapMutableEntriesIterator(this.x2z_1, this.x2z_1.z2y().n2z_1.q().d());
  };
  protoOf(SnapshotMapEntrySet).y2z = function (element) {
    return !(this.x2z_1.ye(element.r()) == null);
  };
  protoOf(SnapshotMapEntrySet).y3 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.y2z((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).z2z = function (element) {
    return equals(this.x2z_1.z2(element.r()), element.s());
  };
  protoOf(SnapshotMapEntrySet).n = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.z2z((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).a30 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        if (!this.z2z(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).o1 = function (elements) {
    return this.a30(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).te = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).a = function (element) {
    return this.te((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).c30 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).k = function (elements) {
    return this.c30(elements);
  };
  protoOf(SnapshotMapKeySet).d = function () {
    return new StateMapMutableKeysIterator(this.x2z_1, this.x2z_1.z2y().n2z_1.q().d());
  };
  protoOf(SnapshotMapKeySet).ye = function (element) {
    return !(this.x2z_1.ye(element) == null);
  };
  protoOf(SnapshotMapKeySet).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.ye((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).q2 = function (element) {
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.x2z_1;
    // Inline function 'kotlin.collections.containsKey' call
    return (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).t2(element);
  };
  protoOf(SnapshotMapKeySet).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.q2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).d30 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        // Inline function 'kotlin.collections.contains' call
        var tmp0_contains = this.x2z_1;
        // Inline function 'kotlin.collections.containsKey' call
        if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).t2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).o1 = function (elements) {
    return this.d30(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).af = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).a = function (element) {
    return this.af((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).f30 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).k = function (elements) {
    return this.f30(elements);
  };
  protoOf(SnapshotMapValueSet).d = function () {
    return new StateMapMutableValuesIterator(this.x2z_1, this.x2z_1.z2y().n2z_1.q().d());
  };
  protoOf(SnapshotMapValueSet).g30 = function (element) {
    return this.x2z_1.u2z(element);
  };
  protoOf(SnapshotMapValueSet).y3 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.g30((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).w2 = function (element) {
    return this.x2z_1.x2(element);
  };
  protoOf(SnapshotMapValueSet).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.w2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).h30 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        if (!this.x2z_1.x2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).o1 = function (elements) {
    return this.h30(elements);
  };
  function SnapshotMapSet(map) {
    this.x2z_1 = map;
  }
  protoOf(SnapshotMapSet).g = function () {
    return this.x2z_1.g();
  };
  protoOf(SnapshotMapSet).a4 = function () {
    return this.x2z_1.a4();
  };
  protoOf(SnapshotMapSet).l = function () {
    return this.x2z_1.l();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.k30_1 = this$0;
    this.i30_1 = ensureNotNull(this$0.o30_1).r();
    this.j30_1 = ensureNotNull(this$0.o30_1).s();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).r = function () {
    return this.i30_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).s = function () {
    return this.j30_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).pe = function (newValue) {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.k30_1.l30_1.a2z() === this.k30_1.n30_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    var result = this.j30_1;
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.k30_1.l30_1;
    var tmp1_set = this.i30_1;
    tmp0_set.a5(tmp1_set, newValue);
    this.j30_1 = newValue;
    return result;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).f = function () {
    this.m2u();
    if (!(this.o30_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).f = function () {
    var tmp0_elvis_lhs = this.p30_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.m2u();
    return result.r();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).f = function () {
    var tmp0_elvis_lhs = this.p30_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.m2u();
    return result.s();
  };
  function StateMapMutableIterator(map, iterator) {
    this.l30_1 = map;
    this.m30_1 = iterator;
    this.n30_1 = this.l30_1.a2z();
    this.o30_1 = null;
    this.p30_1 = null;
    this.m2u();
  }
  protoOf(StateMapMutableIterator).b5 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.l30_1.a2z() === this.n30_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    var value = this.o30_1;
    var tmp;
    if (!(value == null)) {
      this.l30_1.ye(value.r());
      this.o30_1 = null;
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.n30_1 = this.l30_1.a2z();
    return tmp0_also;
  };
  protoOf(StateMapMutableIterator).e = function () {
    return !(this.p30_1 == null);
  };
  protoOf(StateMapMutableIterator).m2u = function () {
    this.o30_1 = this.p30_1;
    this.p30_1 = this.m30_1.e() ? this.m30_1.f() : null;
  };
  function _get_sync_$accessor$1hruseb_q3n4dp() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return get_sync_0();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function recordRead($this, value, currentToken, currentScope, recordedValues) {
    if ($this.o31_1 > 0) {
      return Unit_getInstance();
    }
    var previousToken = recordedValues.e2c(value, currentToken);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !(previousToken === currentToken);
    } else {
      tmp = false;
    }
    if (tmp) {
      var record = value.v27();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.q31_1;
      var tmp2_set = record.j2a();
      tmp0_set.a5(value, tmp2_set);
      var dependencies = record.w27();
      var dependencyToDerivedStates = $this.p31_1;
      dependencyToDerivedStates.u27(value);
      var inductionVariable = 0;
      var last = dependencies.length;
      $l$loop: while (inductionVariable < last) {
        var dependency = dependencies[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (dependency == null)
          break $l$loop;
        dependencyToDerivedStates.w26(dependency, value);
      }
    }
    if (previousToken === -1) {
      $this.j31_1.w26(value, currentScope);
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var currentToken = $this.i31_1;
    var tmp0_safe_receiver = $this.h31_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
      var keys = tmp0_safe_receiver.b2c_1;
      var values = tmp0_safe_receiver.c2c_1;
      var size = tmp0_safe_receiver.a2c_1;
      var destinationIndex = 0;
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = keys[i];
          var key = isObject(tmp) ? tmp : THROW_CCE();
          var value = values[i];
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
          // Inline function 'kotlin.also' call
          var tmp0_also = !(value === currentToken);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
          if (tmp0_also) {
            removeObservation($this, scope, key);
          }
          if (!tmp0_also) {
            if (!(destinationIndex === i)) {
              keys[destinationIndex] = key;
              values[destinationIndex] = value;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable < size);
      var inductionVariable_0 = destinationIndex;
      if (inductionVariable_0 < size)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          keys[i_0] = null;
        }
         while (inductionVariable_0 < size);
      tmp0_safe_receiver.a2c_1 = destinationIndex;
    }
  }
  function removeObservation($this, scope, value) {
    $this.j31_1.u26(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.j31_1.v26(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.p31_1.u27(value);
      $this.q31_1.ye(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this$0) {
    this.r31_1 = this$0;
  }
  protoOf(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1).s23 = function (derivedState) {
    var tmp0_this = this.r31_1;
    tmp0_this.o31_1 = tmp0_this.o31_1 + 1 | 0;
  };
  protoOf(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1).t23 = function (derivedState) {
    var tmp0_this = this.r31_1;
    tmp0_this.o31_1 = tmp0_this.o31_1 - 1 | 0;
  };
  function drainChanges($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.y31_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
    if ($this.u31_1)
      return false;
    var hasValues = false;
    while (true) {
      var tmp0_elvis_lhs = removeChanges($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return hasValues;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var notifications = tmp;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.y31_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_forEach = $this.x31_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEach.e23_1;
      var tmp_0;
      if (size > 0) {
        var i = 0;
        var tmp_1 = tmp0_forEach.c23_1;
        var content = isArray(tmp_1) ? tmp_1 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
          hasValues = content[i].d32(notifications) ? true : hasValues;
          i = i + 1 | 0;
        }
         while (i < size);
        tmp_0 = Unit_getInstance();
      }
    }
  }
  function sendNotifications($this) {
    $this.s31_1(SnapshotStateObserver$sendNotifications$lambda($this));
  }
  function addChanges($this, set) {
    $l$loop: while (true) {
      var old = $this.t31_1.sv();
      var tmp;
      if (old == null) {
        tmp = set;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          tmp = listOf_0([old, set]);
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            tmp = plus_2(old, listOf(set));
          } else {
            report($this);
          }
        }
      }
      var new_0 = tmp;
      if ($this.t31_1.r27(old, new_0))
        break $l$loop;
    }
  }
  function removeChanges($this) {
    while (true) {
      var old = $this.t31_1.sv();
      var result;
      var new_0;
      if (old == null)
        return null;
      else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          result = (old == null ? true : isInterface(old, Set)) ? old : THROW_CCE();
          new_0 = null;
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            var tmp = old.m(0);
            result = (tmp == null ? true : isInterface(tmp, Set)) ? tmp : THROW_CCE();
            new_0 = old.g() === 2 ? old.m(1) : old.g() > 2 ? old.v1(1, old.g()) : null;
          } else {
            report($this);
          }
        }
      }
      if ($this.t31_1.r27(old, new_0)) {
        return result;
      }
    }
  }
  function report($this) {
    composeRuntimeError('Unexpected notification');
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var tmp0_firstOrNull = $this.x31_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_firstOrNull.e23_1;
      if (size > 0) {
        var i = 0;
        var tmp = tmp0_firstOrNull.c23_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          if (item.f31_1 === onChanged) {
            tmp$ret$1 = item;
            break $l$block;
          }
          i = i + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      $this.x31_1.g23(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.f31_1 = onChanged;
    this.g31_1 = null;
    this.h31_1 = null;
    this.i31_1 = -1;
    this.j31_1 = new IdentityScopeMap();
    this.k31_1 = new IdentityArrayMap();
    this.l31_1 = new IdentityArraySet();
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.m31_1 = new MutableVector(tmp$ret$0, 0);
    var tmp_0 = this;
    tmp_0.n31_1 = new SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this);
    this.o31_1 = 0;
    this.p31_1 = new IdentityScopeMap();
    this.q31_1 = HashMap_init_$Create$();
  }
  protoOf(ObservedScopeMap).e32 = function (value) {
    var scope = ensureNotNull(this.g31_1);
    var tmp = this.i31_1;
    var tmp0_elvis_lhs = this.h31_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.h31_1 = tmp0_also;
      this.k31_1.k27(scope, tmp0_also);
      tmp_0 = tmp0_also;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    recordRead(this, value, tmp, scope, tmp_0);
  };
  protoOf(ObservedScopeMap).f32 = function (scope, readObserver, block) {
    var previousScope = this.g31_1;
    var previousReads = this.h31_1;
    var previousToken = this.i31_1;
    this.g31_1 = scope;
    this.h31_1 = this.k31_1.m28(scope);
    if (this.i31_1 === -1) {
      this.i31_1 = currentSnapshot().w22();
    }
    // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
    var tmp0_observeDerivedStateRecalculations = this.n31_1;
    var observers = derivedStateObservers_0();
    try {
      observers.g23(tmp0_observeDerivedStateRecalculations);
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe.<anonymous>' call
      Companion_getInstance_13().l2a(readObserver, null, block);
    }finally {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$0 = observers.e23_1 - 1 | 0;
      observers.z3(tmp$ret$0);
    }
    clearObsoleteStateReads(this, ensureNotNull(this.g31_1));
    this.g31_1 = previousScope;
    this.h31_1 = previousReads;
    this.i31_1 = previousToken;
  };
  protoOf(ObservedScopeMap).g32 = function (scope) {
    var tmp0_elvis_lhs = this.k31_1.d2c(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
    var keys = recordedValues.b2c_1;
    var values = recordedValues.c2c_1;
    var size = recordedValues.a2c_1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
        var tmp_0 = keys[i];
        var tmp0_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        values[i];
        removeObservation(this, scope, tmp0_anonymous);
      }
       while (inductionVariable < size);
  };
  protoOf(ObservedScopeMap).h32 = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.removeIf' call
    var tmp0_removeIf = this.k31_1;
    var current = 0;
    var inductionVariable = 0;
    var last = tmp0_removeIf.z22_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = tmp0_removeIf.x22_1[index];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_0 = tmp0_removeIf.y22_1[index];
        var value = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = predicate(key);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
        if (tmp0_also) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
          var keys = value.b2c_1;
          var values = value.c2c_1;
          var size = value.a2c_1;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < size)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_1 = keys[i];
              var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
              values[i];
              removeObservation(this, key, tmp0_anonymous);
            }
             while (inductionVariable_0 < size);
        }
        if (!tmp0_also) {
          if (!(current === index)) {
            tmp0_removeIf.x22_1[current] = key;
            tmp0_removeIf.y22_1[current] = tmp0_removeIf.y22_1[index];
          }
          current = current + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (tmp0_removeIf.z22_1 > current) {
      var inductionVariable_1 = current;
      var last_0 = tmp0_removeIf.z22_1;
      if (inductionVariable_1 < last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          tmp0_removeIf.x22_1[index_0] = null;
          tmp0_removeIf.y22_1[index_0] = null;
        }
         while (inductionVariable_1 < last_0);
      tmp0_removeIf.z22_1 = current;
    }
  };
  protoOf(ObservedScopeMap).a4 = function () {
    this.j31_1.a4();
    this.k31_1.a4();
    this.p31_1.a4();
    this.q31_1.a4();
  };
  protoOf(ObservedScopeMap).d32 = function (changes) {
    var hasValues = false;
    var dependencyToDerivedStates = this.p31_1;
    var recordedDerivedStateValues = this.q31_1;
    var valueToScopes = this.j31_1;
    var invalidated = this.l31_1;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (changes instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = changes.r21_1;
      var inductionVariable = 0;
      var last = changes.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (dependencyToDerivedStates.v26(tmp0_anonymous)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var index = find_2(dependencyToDerivedStates, tmp0_anonymous);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var tmp0_fastForEach = scopeSetAt(dependencyToDerivedStates, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_0 = tmp0_fastForEach.r21_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp0_fastForEach.q21_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                  var tmp_0 = values_0[i_0];
                  var tmp0_anonymous_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                  if (!isInterface(tmp0_anonymous_0, DerivedState))
                    THROW_CCE();
                  var previousValue = recordedDerivedStateValues.z2(tmp0_anonymous_0);
                  var tmp0_elvis_lhs = tmp0_anonymous_0.i29();
                  var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
                  if (!policy.m2a(tmp0_anonymous_0.v27().j2a(), previousValue)) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                    var index_0 = find_2(valueToScopes, tmp0_anonymous_0);
                    if (index_0 >= 0) {
                      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                      var tmp0_fastForEach_0 = scopeSetAt(valueToScopes, index_0);
                      // Inline function 'kotlin.contracts.contract' call
                      var values_1 = tmp0_fastForEach_0.r21_1;
                      var inductionVariable_1 = 0;
                      var last_1 = tmp0_fastForEach_0.q21_1;
                      if (inductionVariable_1 < last_1)
                        do {
                          var i_1 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = values_1[i_1];
                          var tmp0_anonymous_1 = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                          invalidated.g23(tmp0_anonymous_1);
                          hasValues = true;
                        }
                         while (inductionVariable_1 < last_1);
                    }
                  } else {
                    this.m31_1.g23(tmp0_anonymous_0);
                  }
                }
                 while (inductionVariable_0 < last_0);
            }
          }
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_1 = find_2(valueToScopes, tmp0_anonymous);
          if (index_1 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_1 = scopeSetAt(valueToScopes, index_1);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = tmp0_fastForEach_1.r21_1;
            var inductionVariable_2 = 0;
            var last_2 = tmp0_fastForEach_1.q21_1;
            if (inductionVariable_2 < last_2)
              do {
                var i_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_2 = values_2[i_2];
                var tmp1_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
                invalidated.g23(tmp1_anonymous);
                hasValues = true;
              }
               while (inductionVariable_2 < last_2);
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = changes.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
        if (dependencyToDerivedStates.v26(element)) {
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_2 = find_2(dependencyToDerivedStates, element);
          if (index_2 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_2 = scopeSetAt(dependencyToDerivedStates, index_2);
            // Inline function 'kotlin.contracts.contract' call
            var values_3 = tmp0_fastForEach_2.r21_1;
            var inductionVariable_3 = 0;
            var last_3 = tmp0_fastForEach_2.q21_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_3 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_3 = values_3[i_3];
                var tmp0_anonymous_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                if (!isInterface(tmp0_anonymous_2, DerivedState))
                  THROW_CCE();
                var previousValue_0 = recordedDerivedStateValues.z2(tmp0_anonymous_2);
                var tmp0_elvis_lhs_0 = tmp0_anonymous_2.i29();
                var policy_0 = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
                if (!policy_0.m2a(tmp0_anonymous_2.v27().j2a(), previousValue_0)) {
                  // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                  var index_3 = find_2(valueToScopes, tmp0_anonymous_2);
                  if (index_3 >= 0) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                    var tmp0_fastForEach_3 = scopeSetAt(valueToScopes, index_3);
                    // Inline function 'kotlin.contracts.contract' call
                    var values_4 = tmp0_fastForEach_3.r21_1;
                    var inductionVariable_4 = 0;
                    var last_4 = tmp0_fastForEach_3.q21_1;
                    if (inductionVariable_4 < last_4)
                      do {
                        var i_4 = inductionVariable_4;
                        inductionVariable_4 = inductionVariable_4 + 1 | 0;
                        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_4 = values_4[i_4];
                        var tmp0_anonymous_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
                        invalidated.g23(tmp0_anonymous_3);
                        hasValues = true;
                      }
                       while (inductionVariable_4 < last_4);
                  }
                } else {
                  this.m31_1.g23(tmp0_anonymous_2);
                }
              }
               while (inductionVariable_3 < last_3);
          }
        }
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var index_4 = find_2(valueToScopes, element);
        if (index_4 >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach_4 = scopeSetAt(valueToScopes, index_4);
          // Inline function 'kotlin.contracts.contract' call
          var values_5 = tmp0_fastForEach_4.r21_1;
          var inductionVariable_5 = 0;
          var last_5 = tmp0_fastForEach_4.q21_1;
          if (inductionVariable_5 < last_5)
            do {
              var i_5 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
              var tmp_5 = values_5[i_5];
              var tmp1_anonymous_0 = isObject(tmp_5) ? tmp_5 : THROW_CCE();
              invalidated.g23(tmp1_anonymous_0);
              hasValues = true;
            }
             while (inductionVariable_5 < last_5);
        }
      }
    }
    if (this.m31_1.u21()) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      var tmp1_forEach = this.m31_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp1_forEach.e23_1;
      if (size > 0) {
        var i_6 = 0;
        var tmp_6 = tmp1_forEach.c23_1;
        var content = isArray(tmp_6) ? tmp_6 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp2_anonymous = content[i_6];
          this.i32(tmp2_anonymous);
          i_6 = i_6 + 1 | 0;
        }
         while (i_6 < size);
      }
      this.m31_1.a4();
    }
    return hasValues;
  };
  protoOf(ObservedScopeMap).i32 = function (derivedState) {
    var scopeToValues = this.k31_1;
    var token = currentSnapshot().w22();
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = this.j31_1;
    var index = find_2(tmp0_forEachScopeOf, derivedState);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.r21_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.q21_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var tmp0_elvis_lhs = scopeToValues.m28(tmp1_anonymous);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var tmp0_also = new IdentityArrayIntMap();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>.<anonymous>' call
            scopeToValues.k27(tmp1_anonymous, tmp0_also);
            tmp_0 = tmp0_also;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          recordRead(this, derivedState, token, tmp1_anonymous, tmp_0);
        }
         while (inductionVariable < last);
    }
  };
  protoOf(ObservedScopeMap).j32 = function () {
    var invalidated = this.l31_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    var tmp0_fastForEach = this.f31_1;
    // Inline function 'kotlin.contracts.contract' call
    var values = invalidated.r21_1;
    var inductionVariable = 0;
    var last = invalidated.q21_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = values[i];
        tmp0_fastForEach(isObject(tmp) ? tmp : THROW_CCE());
      }
       while (inductionVariable < last);
    invalidated.a4();
  };
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      addChanges(this$0, applied);
      var tmp;
      if (drainChanges(this$0)) {
        sendNotifications(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$sendNotifications$lambda(this$0) {
    return function () {
      $l$loop: while (true) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.y31_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp;
        if (!this$0.u31_1) {
          this$0.u31_1 = true;
          var tmp_0;
          try {
            var tmp0_forEach = this$0.x31_1;
            // Inline function 'kotlin.contracts.contract' call
            var size = tmp0_forEach.e23_1;
            var tmp_1;
            if (size > 0) {
              var i = 0;
              var tmp_2 = tmp0_forEach.c23_1;
              var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              do {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.sendNotifications.<anonymous>.<anonymous>.<anonymous>' call
                var tmp1_anonymous = content[i];
                tmp1_anonymous.j32();
                var tmp0 = i;
                i = tmp0 + 1 | 0;
              }
               while (i < size);
              tmp_1 = Unit_getInstance();
            }
            tmp_0 = tmp_1;
          }finally {
            this$0.u31_1 = false;
          }
          tmp = tmp_0;
        }
        tmp$ret$0 = tmp;
        tmp$ret$1 = tmp$ret$0;
        if (!drainChanges(this$0))
          break $l$loop;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.a32_1) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.y31_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        ensureNotNull(this$0.b32_1).e32(state);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.s31_1 = onChangedExecutor;
    this.t31_1 = new AtomicReference(null);
    this.u31_1 = false;
    var tmp = this;
    tmp.v31_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.w31_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp_1.x31_1 = new MutableVector(tmp$ret$0, 0);
    this.y31_1 = createSynchronizedObject();
    this.z31_1 = null;
    this.a32_1 = false;
    this.b32_1 = null;
    this.c32_1 = 8;
  }
  protoOf(SnapshotStateObserver).k32 = function (scope, onValueChangedForScope, block) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y31_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    var scopeMap = ensureMap(this, onValueChangedForScope);
    var oldPaused = this.a32_1;
    var oldMap = this.b32_1;
    try {
      this.a32_1 = false;
      this.b32_1 = scopeMap;
      scopeMap.f32(scope, this.w31_1, block);
    }finally {
      this.b32_1 = oldMap;
      this.a32_1 = oldPaused;
    }
  };
  protoOf(SnapshotStateObserver).l32 = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y31_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.x31_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.e23_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.c23_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].g32(scope);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SnapshotStateObserver).m32 = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y31_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.x31_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.e23_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.c23_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        content[i].h32(predicate);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SnapshotStateObserver).n32 = function () {
    this.z31_1 = Companion_getInstance_13().f2g(this.v31_1);
  };
  protoOf(SnapshotStateObserver).o32 = function () {
    var tmp0_safe_receiver = this.z31_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gp();
    }
  };
  protoOf(SnapshotStateObserver).a4 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.y31_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.x31_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.e23_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.c23_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].a4();
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.c2x_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.d2x_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.e2x_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sv();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.d2x_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.e2x_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sv();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.c2x_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.d2x_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.e2x_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.sv();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.c2x_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.c2x_1 = 0;
    this.d2x_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e2x_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).g23 = function (value) {
    var index;
    var size = this.c2x_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.e2x_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.e2x_1;
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newValues, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = this.e2x_1;
      arrayCopy(tmp2_copyInto, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = this.d2x_1;
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp3_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, tmp4_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.d2x_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.e2x_1 = newValues;
      this.d2x_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.e2x_1;
      var tmp7_copyInto = this.e2x_1;
      var tmp8_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp6_copyInto, tmp7_copyInto, tmp8_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.d2x_1;
      var tmp10_copyInto = this.d2x_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp9_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp10_copyInto, tmp11_copyInto, insertIndex, size);
    }
    this.e2x_1[insertIndex] = new WeakReference(value);
    this.d2x_1[insertIndex] = hash;
    this.c2x_1 = this.c2x_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.l26_1 = value;
    this.m26_1 = 8;
  }
  protoOf(AtomicReference).sv = function () {
    return this.l26_1;
  };
  protoOf(AtomicReference).h27 = function (value) {
    this.l26_1 = value;
  };
  protoOf(AtomicReference).n26 = function (value) {
    var oldValue = this.l26_1;
    this.l26_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).r27 = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.l26_1)) {
      this.l26_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.d2w_1 = value;
  }
  protoOf(AtomicInt).y2u = function (amount) {
    this.d2w_1 = this.d2w_1 + amount | 0;
    return this.d2w_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.n5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x32_1 = _this__u8e3s4;
    this.y32_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.y32_1, safe));
            suspendResult = returnIfSuspended(safe.jh(), this);
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).i1r = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  protoOf(Trace).q22 = function (name) {
    return null;
  };
  protoOf(Trace).i23 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.w2r_1) {
      var scope = $this.y2r_1;
      if (!(scope == null)) {
        scope.e28();
        $this.y2r_1 = null;
      }
      var scopes = $this.z2r_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.g();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.m(index);
            item.e28();
          }
           while (inductionVariable < last);
        scopes.a4();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.w2r_1) {
      var scope = composer.j1r();
      if (!(scope == null)) {
        composer.k1r(scope);
        var lastScope = $this.y2r_1;
        if (replacableWith(lastScope, scope)) {
          $this.y2r_1 = scope;
        } else {
          var lastScopes = $this.z2r_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.z2r_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.g();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.m(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.x3(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.d24(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.z32($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.a33($p1, $p2, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_1(this$0, $p1, $p2, $p3, $p4, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.b33($p1, $p2, $p3, $p4, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.v2r_1 = key;
    this.w2r_1 = tracked;
    this.x2r_1 = null;
    this.y2r_1 = null;
    this.z2r_1 = null;
  }
  protoOf(ComposableLambdaImpl).a2s = function (block) {
    if (!equals(this.x2r_1, block)) {
      var oldBlockNull = this.x2r_1 == null;
      this.x2r_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).d24 = function (c, changed) {
    var c_0 = c.h1t(this.v2r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.y1t(this) ? differentBits(0) : sameBits(0));
    var tmp = this.x2r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.i1t();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z28(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).z32 = function (p1, c, changed) {
    var c_0 = c.h1t(this.v2r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.y1t(this) ? differentBits(1) : sameBits(1));
    var tmp = this.x2r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.i1t();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z28(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).a33 = function (p1, p2, c, changed) {
    var c_0 = c.h1t(this.v2r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.y1t(this) ? differentBits(2) : sameBits(2));
    var tmp = this.x2r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.i1t();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z28(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).b33 = function (p1, p2, p3, p4, c, changed) {
    var c_0 = c.h1t(this.v2r_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.y1t(this) ? differentBits(4) : sameBits(4));
    var tmp = this.x2r_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, p3, p4, c_0, dirty);
    var tmp0_safe_receiver = c_0.i1t();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z28(ComposableLambdaImpl$invoke$lambda_1(this, p1, p2, p3, p4, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function createSnapshotMutableFloatState(value) {
    return new SnapshotMutableFloatStateImpl(value);
  }
  function createSnapshotMutableIntState(value) {
    return new SnapshotMutableIntStateImpl(value);
  }
  function createSnapshotMutableLongState(value) {
    return new SnapshotMutableLongStateImpl(value);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q1y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).m = function (key) {
    return this.q1y_1.z2(key);
  };
  protoOf(IntMap).j21 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.q1y_1.a5(key, value);
  };
  protoOf(IntMap).a4 = function () {
    this.q1y_1.a4();
  };
  function WeakReference(reference) {
    this.f2x_1 = reference;
  }
  protoOf(WeakReference).sv = function () {
    return this.f2x_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).f1q = onBeginChanges;
  protoOf(OffsetApplier).g1q = onEndChanges;
  protoOf(AbstractApplier).f1q = onBeginChanges;
  protoOf(AbstractApplier).g1q = onEndChanges;
  protoOf(BroadcastFrameClock).r = get_key;
  protoOf(BroadcastFrameClock).u6 = get;
  protoOf(BroadcastFrameClock).a7 = fold;
  protoOf(BroadcastFrameClock).z6 = minusKey;
  protoOf(BroadcastFrameClock).b7 = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.m1();
  }, VOID);
  protoOf(DerivedSnapshotState).p2a = mergeRecords;
  protoOf(SnapshotMutableFloatStateImpl).d2h = set_value;
  protoOf(SnapshotMutableFloatStateImpl).s = get_value;
  protoOf(SnapshotMutableIntStateImpl).a2k = set_value_0;
  protoOf(SnapshotMutableIntStateImpl).s = get_value_0;
  protoOf(SnapshotMutableLongStateImpl).i2k = set_value_1;
  protoOf(SnapshotMutableLongStateImpl).s = get_value_1;
  protoOf(StructuralEqualityPolicy).q2k = merge;
  protoOf(ReferentialEqualityPolicy).q2k = merge;
  protoOf(NeverEqualPolicy).q2k = merge;
  protoOf(SnapshotStateList).p2a = mergeRecords;
  protoOf(SnapshotStateMap).p2a = mergeRecords;
  protoOf(MonotonicClockImpl).r = get_key;
  protoOf(MonotonicClockImpl).u6 = get;
  protoOf(MonotonicClockImpl).a7 = fold;
  protoOf(MonotonicClockImpl).z6 = minusKey;
  protoOf(MonotonicClockImpl).b7 = plus;
  //endregion
  //region block: init
  reuseKey = 207;
  movableContentKey = 126665345;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateList;
  _.$_$.f = SnapshotStateObserver;
  _.$_$.g = $get_currentCompositeKeyHash$$composable_u3vbzj;
  _.$_$.h = $get_currentRecomposeScope$$composable_f9ntk0;
  _.$_$.i = AbstractApplier;
  _.$_$.j = onBeginChanges;
  _.$_$.k = onEndChanges;
  _.$_$.l = Applier;
  _.$_$.m = AtomicReference;
  _.$_$.n = BroadcastFrameClock;
  _.$_$.o = ComposeNodeLifecycleCallback;
  _.$_$.p = CompositionLocalProvider$composable;
  _.$_$.q = CompositionLocalProvider$composable_0;
  _.$_$.r = CompositionScopedCoroutineScopeCanceller;
  _.$_$.s = Composition;
  _.$_$.t = DisposableEffect$composable_0;
  _.$_$.u = DisposableEffect$composable;
  _.$_$.v = DisposableEffectScope;
  _.$_$.w = LaunchedEffect$composable;
  _.$_$.x = LaunchedEffect$composable_0;
  _.$_$.y = ProduceStateScope;
  _.$_$.z = Recomposer;
  _.$_$.a1 = RememberObserver;
  _.$_$.b1 = SideEffect$composable;
  _.$_$.c1 = SkippableUpdater;
  _.$_$.d1 = collectAsState$composable_0;
  _.$_$.e1 = collectAsState$composable;
  _.$_$.f1 = compositionLocalOf;
  _.$_$.g1 = createCompositionCoroutineScope;
  _.$_$.h1 = derivedStateOf_0;
  _.$_$.i1 = derivedStateOf;
  _.$_$.j1 = identityHashCode;
  _.$_$.k1 = invalidApplier;
  _.$_$.l1 = isTraceInProgress;
  _.$_$.m1 = mutableFloatStateOf;
  _.$_$.n1 = mutableIntStateOf;
  _.$_$.o1 = mutableLongStateOf;
  _.$_$.p1 = mutableStateListOf;
  _.$_$.q1 = mutableStateListOf_0;
  _.$_$.r1 = mutableStateMapOf;
  _.$_$.s1 = mutableStateOf;
  _.$_$.t1 = neverEqualPolicy;
  _.$_$.u1 = produceState$composable_0;
  _.$_$.v1 = referentialEqualityPolicy;
  _.$_$.w1 = rememberCompositionContext$composable;
  _.$_$.x1 = rememberUpdatedState$composable;
  _.$_$.y1 = get_reuseKey;
  _.$_$.z1 = snapshotFlow;
  _.$_$.a2 = sourceInformationMarkerEnd;
  _.$_$.b2 = sourceInformationMarkerStart;
  _.$_$.c2 = sourceInformation;
  _.$_$.d2 = staticCompositionLocalOf;
  _.$_$.e2 = structuralEqualityPolicy;
  _.$_$.f2 = toMutableStateList;
  _.$_$.g2 = traceEventEnd;
  _.$_$.h2 = traceEventStart;
  _.$_$.i2 = updateChangedFlags;
  _.$_$.j2 = withFrameNanos;
  _.$_$.k2 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.l2 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.m2 = _Updater___init__impl__rbfxm8;
  _.$_$.n2 = _Updater___get_composer__impl__9ty7av;
  _.$_$.o2 = Updater__set_impl_v7kwss;
  _.$_$.p2 = Companion_getInstance_13;
  _.$_$.q2 = Companion_getInstance_1;
  _.$_$.r2 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
