(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-atomicfu']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isObject = kotlin_kotlin.$_$.kd;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var plus = kotlin_kotlin.$_$.vb;
  var get = kotlin_kotlin.$_$.sb;
  var fold = kotlin_kotlin.$_$.rb;
  var minusKey = kotlin_kotlin.$_$.tb;
  var Continuation = kotlin_kotlin.$_$.qb;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zk;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g3;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.kb;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var copyToArray = kotlin_kotlin.$_$.x7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var emptyList = kotlin_kotlin.$_$.z7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var Key_getInstance = kotlin_kotlin.$_$.x4;
  var equals = kotlin_kotlin.$_$.oc;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.jb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var isInterface = kotlin_kotlin.$_$.id;
  var toString = kotlin_kotlin.$_$.ce;
  var toString_0 = kotlin_kotlin.$_$.dl;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var hashCode = kotlin_kotlin.$_$.xc;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.h3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k3;
  var createFailure = kotlin_kotlin.$_$.ik;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.mb;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lb;
  var get_0 = kotlin_kotlin.$_$.nb;
  var minusKey_0 = kotlin_kotlin.$_$.ob;
  var ContinuationInterceptor = kotlin_kotlin.$_$.pb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var Enum = kotlin_kotlin.$_$.dj;
  var startCoroutine = kotlin_kotlin.$_$.yb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var Long = kotlin_kotlin.$_$.jj;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l5;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var RuntimeException = kotlin_kotlin.$_$.pj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var captureStack = kotlin_kotlin.$_$.ec;
  var Error_0 = kotlin_kotlin.$_$.ej;
  var Error_init_$Init$ = kotlin_kotlin.$_$.p1;
  var Element = kotlin_kotlin.$_$.ub;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j1;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var ArrayList = kotlin_kotlin.$_$.a6;
  var SequenceScope = kotlin_kotlin.$_$.qf;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var sequence = kotlin_kotlin.$_$.gg;
  var anyToString = kotlin_kotlin.$_$.bc;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ck;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.j5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.vi;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var toLong = kotlin_kotlin.$_$.ae;
  var addSuppressed = kotlin_kotlin.$_$.dk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.l9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var compareTo = kotlin_kotlin.$_$.lc;
  var last = kotlin_kotlin.$_$.ih;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var IllegalStateException = kotlin_kotlin.$_$.hj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var NoSuchElementException = kotlin_kotlin.$_$.kj;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var getKClass = kotlin_kotlin.$_$.e;
  var Unit = kotlin_kotlin.$_$.bk;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var copyOf = kotlin_kotlin.$_$.v7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var joinToString = kotlin_kotlin.$_$.w8;
  var IndexedValue = kotlin_kotlin.$_$.e6;
  var fill = kotlin_kotlin.$_$.d8;
  var numberToByte = kotlin_kotlin.$_$.rd;
  var isArray = kotlin_kotlin.$_$.ad;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.yk;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  var Exception = kotlin_kotlin.$_$.fj;
  var toLongOrNull = kotlin_kotlin.$_$.ei;
  var plus_0 = kotlin_kotlin.$_$.w9;
  var List = kotlin_kotlin.$_$.i6;
  var listOf_0 = kotlin_kotlin.$_$.k9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.e1;
  var removeFirstOrNull = kotlin_kotlin.$_$.y9;
  var MutableList = kotlin_kotlin.$_$.m6;
  var coerceIn = kotlin_kotlin.$_$.bf;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.n2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.s2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.xn(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.xn.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.sn(onCancelling, invokeImmediately, handler) : $super.sn.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeHandlersOnCancel, 'DisposeHandlersOnCancel', classMeta, CancelHandler);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(AwaitAllNode, 'AwaitAllNode', classMeta, JobNode);
  setMetadataFor(AwaitAll, 'AwaitAll', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitAllCOROUTINE$1, '$awaitAllCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$2, '$awaitCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.xr(cause) : $super.xr.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(Waiter, 'Waiter', interfaceMeta);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor($awaitCOROUTINE$3, '$awaitCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, VOID, [CoroutineScope]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().cv(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', interfaceMeta, VOID, [Delay], VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, [ScopeCoroutine, Runnable], VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$4, '$withTimeoutOrNullCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_3, 'Key', objectMeta);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode', classMeta);
  setMetadataFor(Segment, 'Segment', classMeta, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  setMetadataFor(ChannelSegment, 'ChannelSegment', classMeta, Segment);
  setMetadataFor($hasNextCOROUTINE$8, '$hasNextCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(SendBroadcast, 'SendBroadcast', classMeta, VOID, [Waiter]);
  setMetadataFor(BufferedChannelIterator, 'BufferedChannelIterator', classMeta, VOID, [Waiter], VOID, VOID, [0, 3]);
  setMetadataFor($sendCOROUTINE$5, '$sendCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($receiveCOROUTINE$6, '$receiveCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor($receiveCatchingCOROUTINE$7, '$receiveCatchingCOROUTINE$7', classMeta, CoroutineImpl);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.xn(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.xn.call(this, cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.m16(cause) : $super.m16.call(this, cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BufferedChannel, 'BufferedChannel', classMeta, VOID, [ReceiveChannel, SendChannel], VOID, VOID, [1, 4, 0, 3]);
  setMetadataFor(WaiterEB, 'WaiterEB', classMeta);
  setMetadataFor(ReceiveCatching, 'ReceiveCatching', classMeta, VOID, [Waiter]);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, ReceiveChannel, SendChannel], VOID, VOID, [0, 1]);
  setMetadataFor(ConflatedBufferedChannel, 'ConflatedBufferedChannel', classMeta, BufferedChannel, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, [0, 1]);
  setMetadataFor(EmptyFlow, 'EmptyFlow', objectMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowBuilder, 'ChannelFlowBuilder', classMeta, ChannelFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$12, '$collectCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitAllImplCOROUTINE$13, '$emitAllImplCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta);
  setMetadataFor($collectCOROUTINE$15, '$collectCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot);
  setMetadataFor($collectCOROUTINE$16, '$collectCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, VOID, VOID, [0]);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda$slambda$slambda, 'combineInternal$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda$slambda, 'combineInternal$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda, 'combineInternal$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(FlowCoroutine, 'FlowCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$20, '$collectCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(catchImpl$slambda, 'catchImpl$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($catchImplCOROUTINE$19, '$catchImplCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor($onSubscriptionCOROUTINE$25, '$onSubscriptionCOROUTINE$25', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1, 0]);
  setMetadataFor($collectCOROUTINE$26, '$collectCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor(ReadonlyStateFlow, 'ReadonlyStateFlow', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$o$collect$slambda, 'combine$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$29, '$collectCOROUTINE$29', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$32, '$emitCOROUTINE$32', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$33, '$emitCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($firstCOROUTINE$30, '$firstCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($firstOrNullCOROUTINE$31, '$firstOrNullCOROUTINE$31', classMeta, CoroutineImpl);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', objectMeta, Exception);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(ClauseData, 'ClauseData', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SelectImplementation, 'SelectImplementation', classMeta, CancelHandler, [CancelHandler, SelectInstance, Waiter], VOID, VOID, [0, 2]);
  setMetadataFor(TrySelectDetailedResult, 'TrySelectDetailedResult', classMeta, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.u1m(owner, $completion) : $super.u1m.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.w1m(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.w1m.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', classMeta, VOID, [CancellableContinuation, Waiter]);
  setMetadataFor(SemaphoreImpl, 'SemaphoreImpl', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, SemaphoreImpl, [SemaphoreImpl, Mutex], VOID, VOID, [1, 0]);
  setMetadataFor(SemaphoreSegment, 'SemaphoreSegment', classMeta, Segment);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, VOID, [MutableList]);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowClearTimeout, 'WindowClearTimeout', classMeta, ClearTimeout);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(ChildCancelledException, 'ChildCancelledException', classMeta, CancellationException);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', classMeta, RuntimeException);
  setMetadataFor(LocalAtomicInt, 'LocalAtomicInt', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.km(parentContext.u6(Key_getInstance_3()));
    }
    this.nm_1 = parentContext.b7(this);
  }
  protoOf(AbstractCoroutine).p5 = function () {
    return this.nm_1;
  };
  protoOf(AbstractCoroutine).om = function () {
    return this.nm_1;
  };
  protoOf(AbstractCoroutine).pm = function () {
    return protoOf(JobSupport).pm.call(this);
  };
  protoOf(AbstractCoroutine).qm = function (value) {
  };
  protoOf(AbstractCoroutine).rm = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).sm = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).tm = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.rm(state.um_1, state.wm());
    } else {
      this.qm((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).n5 = function (result) {
    var state = this.xm(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.ym(state);
  };
  protoOf(AbstractCoroutine).ym = function (state) {
    return this.zm(state);
  };
  protoOf(AbstractCoroutine).an = function (exception) {
    handleCoroutineException(this.nm_1, exception);
  };
  protoOf(AbstractCoroutine).bn = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.nm_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).bn.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).bn.call(this);
  };
  protoOf(AbstractCoroutine).cn = function (start, receiver, block) {
    start.fn(block, receiver, this);
  };
  function awaitAll(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function DisposeHandlersOnCancel($outer, nodes) {
    this.vo_1 = $outer;
    CancelHandler.call(this);
    this.uo_1 = nodes;
  }
  protoOf(DisposeHandlersOnCancel).wo = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.uo_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.coroutines.DisposeHandlersOnCancel.disposeAll.<anonymous>' call
      element.fp().gp();
    }
  };
  protoOf(DisposeHandlersOnCancel).hp = function (cause) {
    this.wo();
  };
  protoOf(DisposeHandlersOnCancel).invoke = function (cause) {
    return this.hp(cause);
  };
  protoOf(DisposeHandlersOnCancel).toString = function () {
    return 'DisposeHandlersOnCancel[' + this.uo_1 + ']';
  };
  function AwaitAllNode($outer, continuation) {
    this.ep_1 = $outer;
    JobNode.call(this);
    this.bp_1 = continuation;
    this.dp_1 = atomic$ref$1(null);
  }
  protoOf(AwaitAllNode).fp = function () {
    var tmp = this.cp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('handle');
    }
  };
  protoOf(AwaitAllNode).ip = function (value) {
    this.dp_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AwaitAllNode).jp = function () {
    return this.dp_1.kotlinx$atomicfu$value;
  };
  protoOf(AwaitAllNode).hp = function (cause) {
    if (!(cause == null)) {
      var token = this.bp_1.np(cause);
      if (!(token == null)) {
        this.bp_1.op(token);
        var tmp0_safe_receiver = this.jp();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wo();
        }
      }
    } else if (this.ep_1.lp_1.atomicfu$decrementAndGet() === 0) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = this.bp_1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = this.ep_1.kp_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
      var inductionVariable = 0;
      var last = tmp0_map.length;
      while (inductionVariable < last) {
        var item = tmp0_map[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.AwaitAllNode.invoke.<anonymous>' call
        tmp$ret$0 = item.mp();
        tmp0_mapTo.a(tmp$ret$0);
      }
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_mapTo);
      tmp1_resume.n5(tmp$ret$3);
    }
  };
  protoOf(AwaitAllNode).invoke = function (cause) {
    return this.hp(cause);
  };
  function AwaitAll(deferreds) {
    this.kp_1 = deferreds;
    this.lp_1 = atomic$int$1(this.kp_1.length);
  }
  protoOf(AwaitAll).cq = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>' call
    var tmp = 0;
    var tmp_0 = this.kp_1.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var deferred = this.kp_1[tmp_2];
      deferred.mn();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new AwaitAllNode(this, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>.<anonymous>' call
      var tmp_3 = tmp0_apply;
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3.cp_1 = deferred.rn(tmp0_apply);
      tmp_1[tmp_2] = tmp0_apply;
      tmp = tmp + 1 | 0;
    }
    var nodes = tmp_1;
    var disposer = new DisposeHandlersOnCancel(this, nodes);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var element = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>.<anonymous>' call
      element.ip(disposer);
    }
    if (cancellable.kn()) {
      disposer.wo();
    } else {
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      cancellable.kq(disposer);
    }
    return cancellable.lq();
  };
  function $awaitAllCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so_1 = _this__u8e3s4;
  }
  protoOf($awaitAllCOROUTINE$1).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (this.so_1.l()) {
              this.to_1 = emptyList();
              this.dl_1 = 2;
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = (new AwaitAll(copyToArray(this.so_1))).cq(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.to_1 = suspendResult;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            return this.to_1;
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.mq() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.cn(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.p5();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.u6(Key_getInstance()), oldContext.u6(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.nm_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.lq();
    }
    return tmp$ret$0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.mq() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.cn(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).io = function (exception) {
    handleCoroutineException(this.nm_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.yq_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).nn = function () {
    startCoroutineCancellable_0(this.yq_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.rq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.rq_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.rq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.rq_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.rq_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).zm = function (state) {
    this.ym(state);
  };
  protoOf(DispatchedCoroutine).ym = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.cr_1), recoverResult(state, this.cr_1));
  };
  protoOf(DispatchedCoroutine).lq = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.jn());
    if (state instanceof CompletedExceptionally)
      throw state.um_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lr_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.lr_1.mr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).mp = function () {
    var tmp = this.qr();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DeferredCoroutine).rr = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.vr_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).nn = function () {
    startCoroutineCancellable_0(this.vr_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.kq(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.bs_1 = handle;
  }
  protoOf(DisposeOnCancel).hp = function (cause) {
    return this.bs_1.gp();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.hp(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.bs_1 + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.is();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.js()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.iq_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.jn();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ls_1)) {
      var tmp_0 = $this.eq_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ks();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.eq_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.ms(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.gq_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.rs(index, cause, $this.p5());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.p5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.gq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (tmp1_anonymous >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          var tmp$ret$2;
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp1_decisionAndIndex = tmp1_anonymous & 536870911;
          tmp$ret$2 = (1 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;
          if ($this.gq_1.atomicfu$compareAndSet(tmp1_anonymous, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.gq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (tmp1_anonymous >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          var tmp$ret$2;
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp1_decisionAndIndex = tmp1_anonymous & 536870911;
          tmp$ret$2 = (2 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + tmp1_decisionAndIndex | 0;
          if ($this.gq_1.atomicfu$compareAndSet(tmp1_anonymous, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.p5().u6(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.tn(true, VOID, tmp$ret$1);
    $this.iq_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous instanceof Active) {
        if ($this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, handler))
          return Unit_getInstance();
      } else {
        var tmp;
        if (tmp1_anonymous instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp1_anonymous instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, tmp1_anonymous);
        } else {
          if (tmp1_anonymous instanceof CompletedExceptionally) {
            if (!tmp1_anonymous.at()) {
              multipleHandlersError($this, handler, tmp1_anonymous);
            }
            if (tmp1_anonymous instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1_anonymous instanceof CompletedExceptionally ? tmp1_anonymous : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.um_1;
              if (handler instanceof CancelHandler) {
                $this.xs(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_getInstance();
          } else {
            if (tmp1_anonymous instanceof CompletedContinuation) {
              if (!(tmp1_anonymous.ts_1 == null)) {
                multipleHandlersError($this, handler, tmp1_anonymous);
              }
              if (handler instanceof Segment)
                return Unit_getInstance();
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              if (tmp1_anonymous.ys()) {
                $this.xs(handler, tmp1_anonymous.ws_1);
                return Unit_getInstance();
              }
              var update = tmp1_anonymous.zs(VOID, handler);
              if ($this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update))
                return Unit_getInstance();
            } else {
              if (handler instanceof Segment)
                return Unit_getInstance();
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(tmp1_anonymous, handler);
              if ($this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = state instanceof CancelHandler;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hq_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp1_anonymous instanceof CancelledContinuation) {
            if (tmp1_anonymous.ft()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.bt(onCancellation, tmp1_anonymous.um_1);
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.hq_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, $this.ls_1, onCancellation, idempotent);
          if (!$this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1_anonymous.vs_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.gt();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.eq_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.fq_1 = this.eq_1.p5();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp$ret$0 = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    tmp.gq_1 = atomic$int$1(tmp$ret$0);
    this.hq_1 = atomic$ref$1(Active_getInstance());
    this.iq_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).ht = function () {
    return this.eq_1;
  };
  protoOf(CancellableContinuationImpl).p5 = function () {
    return this.fq_1;
  };
  protoOf(CancellableContinuationImpl).jn = function () {
    return this.hq_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).kn = function () {
    var tmp = this.jn();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).ln = function () {
    var tmp = this.jn();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).jq = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.kn()) {
      handle.gp();
      this.iq_1.kotlinx$atomicfu$value = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).js = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.hq_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.vs_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.gt();
      return false;
    }
    var tmp_0 = this.gq_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    this.hq_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  protoOf(CancellableContinuationImpl).it = function () {
    return this.jn();
  };
  protoOf(CancellableContinuationImpl).jt = function (takenState, cause) {
    var tmp0_loop = this.hq_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp1_anonymous instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!tmp1_anonymous.ys()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var update = tmp1_anonymous.zs(VOID, VOID, VOID, VOID, cause);
            if (this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
              tmp1_anonymous.kt(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, new CompletedContinuation(tmp1_anonymous, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).xr = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hq_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false))
          return false;
        var tmp;
        if (tmp1_anonymous instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp1_anonymous instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.hq_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
          break $l$block;
        }
        if (tmp1_anonymous instanceof CancelHandler) {
          this.xs(tmp1_anonymous, cause);
        } else {
          if (tmp1_anonymous instanceof Segment) {
            callSegmentOnCancellation(this, tmp1_anonymous, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.ls_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).lt = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.xr(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).xs = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.p5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).bt = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.p5(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).mt = function (parent) {
    return parent.on();
  };
  protoOf(CancellableContinuationImpl).lq = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.nt();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.nt();
    }
    var state = this.jn();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.um_1, this);
    if (get_isCancellableMode(this.ls_1)) {
      var job = this.p5().u6(Key_getInstance_3());
      if (!(job == null) ? !job.pm() : false) {
        var cause = job.on();
        this.jt(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ot(state);
  };
  protoOf(CancellableContinuationImpl).nt = function () {
    var tmp = this.eq_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pt(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.gt();
    this.xr(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).n5 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.ls_1);
  };
  protoOf(CancellableContinuationImpl).as = function (value, onCancellation) {
    return resumeImpl(this, value, this.ls_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).qt = function (segment, index) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.gq_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.contracts.contract' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        // Inline function 'kotlinx.coroutines.decision' call
        var upd = (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).kq = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).gt = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.gp();
    this.iq_1.kotlinx$atomicfu$value = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).wr = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).np = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).op = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ls_1);
  };
  protoOf(CancellableContinuationImpl).zr = function (_this__u8e3s4, value) {
    var tmp = this.eq_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.ds_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.ls_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).ot = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.ss_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).rt = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).rt.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.eq_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.bn() + '(' + toDebugString(this.eq_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).bn = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.ss_1 = result;
    this.ts_1 = cancelHandler;
    this.us_1 = onCancellation;
    this.vs_1 = idempotentResume;
    this.ws_1 = cancelCause;
  }
  protoOf(CompletedContinuation).ys = function () {
    return !(this.ws_1 == null);
  };
  protoOf(CompletedContinuation).kt = function (cont, cause) {
    var tmp0_safe_receiver = this.ts_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.xs(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.us_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.bt(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).ut = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).zs = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.ss_1 : result;
    cancelHandler = cancelHandler === VOID ? this.ts_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.us_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.vs_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.ws_1 : cancelCause;
    return $super === VOID ? this.ut(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.ut.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.ss_1) + ', cancelHandler=' + this.ts_1 + ', onCancellation=' + this.us_1 + ', idempotentResume=' + toString_0(this.vs_1) + ', cancelCause=' + this.ws_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.ss_1 == null ? 0 : hashCode(this.ss_1);
    result = imul(result, 31) + (this.ts_1 == null ? 0 : hashCode(this.ts_1)) | 0;
    result = imul(result, 31) + (this.us_1 == null ? 0 : hashCode(this.us_1)) | 0;
    result = imul(result, 31) + (this.vs_1 == null ? 0 : hashCode(this.vs_1)) | 0;
    result = imul(result, 31) + (this.ws_1 == null ? 0 : hashCode(this.ws_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.ss_1, tmp0_other_with_cast.ss_1))
      return false;
    if (!equals(this.ts_1, tmp0_other_with_cast.ts_1))
      return false;
    if (!equals(this.us_1, tmp0_other_with_cast.us_1))
      return false;
    if (!equals(this.vs_1, tmp0_other_with_cast.vs_1))
      return false;
    if (!equals(this.ws_1, tmp0_other_with_cast.ws_1))
      return false;
    return true;
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.vt_1 = handler;
  }
  protoOf(InvokeOnCancel).hp = function (cause) {
    this.vt_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.hp(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.vt_1) + '@' + get_hexAddress(this) + ']';
  };
  function _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return 29;
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eu_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$3).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.eu_1.mr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.km(parent);
  }
  protoOf(CompletableDeferredImpl).wn = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).mp = function () {
    var tmp = this.qr();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).rr = function ($completion) {
    var tmp = new $awaitCOROUTINE$3(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(CompletableDeferredImpl).hu = function (value) {
    return this.iu(value);
  };
  protoOf(CompletableDeferredImpl).ju = function (exception) {
    return this.iu(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.um_1 = cause;
    this.vm_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).wm = function () {
    return this.vm_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).at = function () {
    return this.vm_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.um_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.et_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).ft = function () {
    return this.et_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0_anonymous, onCancellation) : tmp0_anonymous;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.mu_1 = result;
    this.nu_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.mu_1) + ', onCancellation=' + this.nu_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.mu_1 == null ? 0 : hashCode(this.mu_1);
    result = imul(result, 31) + hashCode(this.nu_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.mu_1, tmp0_other_with_cast.mu_1))
      return false;
    if (!equals(this.nu_1, tmp0_other_with_cast.nu_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.um_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(tmp3_success);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).pu = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).ru = function (context, block) {
    return this.qu(context, block);
  };
  protoOf(CoroutineDispatcher).s6 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).t6 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.su();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.u6(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.tu(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.vu_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.vu_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.vu_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.vu_1 === tmp0_other_with_cast.vu_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.u6(Key_getInstance_3()) == null) ? context : context.b7(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.p5(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.om().u6(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.xn(cause);
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().b7(Dispatchers_getInstance().av()));
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  protoOf(GlobalScope).om = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.om().u6(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pm();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function plus_1(_this__u8e3s4, context) {
    return new ContextScope(_this__u8e3s4.om().b7(context));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).fn = function (block, receiver, completion) {
    var tmp;
    switch (this.h7_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).mq = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.u6(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.x(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.x(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.p5()).bv(timeMillis, cancellable);
    }
    return cancellable.lq();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.fv_1 = new Long(0, 0);
    this.gv_1 = false;
    this.hv_1 = null;
  }
  protoOf(EventLoop).iv = function () {
    var tmp0_elvis_lhs = this.hv_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.t3();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.st();
    return true;
  };
  protoOf(EventLoop).jv = function (task) {
    var tmp0_elvis_lhs = this.hv_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.hv_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.r3(task);
  };
  protoOf(EventLoop).kv = function () {
    return this.fv_1.x(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).lv = function () {
    var tmp0_safe_receiver = this.hv_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).mv = function (unconfined) {
    this.fv_1 = this.fv_1.r7(delta(this, unconfined));
    if (!unconfined)
      this.gv_1 = true;
  };
  protoOf(EventLoop).nv = function (unconfined) {
    this.fv_1 = this.fv_1.m9(delta(this, unconfined));
    if (this.fv_1.x(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.gv_1) {
      this.ov();
    }
  };
  protoOf(EventLoop).ov = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.pv_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).qv = function () {
    var tmp0_elvis_lhs = this.pv_1.sv();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().pv_1.tv(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).in = function () {
    return null;
  };
  protoOf(NonDisposableHandle).gp = function () {
  };
  protoOf(NonDisposableHandle).bo = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u6(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.pm())
      throw _this__u8e3s4.on();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u6(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.yn();
    return _this__u8e3s4.un($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u6(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pm();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.xn(CancellationException_init_$Create$_0(message, cause));
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.rn(tmp$ret$1);
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.u6(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xn(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.uv_1 = isActive;
  }
  protoOf(Empty).pm = function () {
    return this.uv_1;
  };
  protoOf(Empty).up = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.uv_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).pm = function () {
    return true;
  };
  protoOf(NodeList).up = function () {
    return this;
  };
  protoOf(NodeList).yv = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.ia('List{');
    tmp0_apply.ia(state);
    tmp0_apply.ia('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.vp_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0_anonymous = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.ia(', ');
        }
        tmp0_apply.ha(tmp0_anonymous);
      }
      cur = cur.vp_1;
    }
    tmp0_apply.ia(']');
    return tmp0_apply.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.yv('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).tp = function () {
    var tmp = this.sp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).pm = function () {
    return true;
  };
  protoOf(JobNode).up = function () {
    return null;
  };
  protoOf(JobNode).gp = function () {
    return this.tp().vn(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.tp()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.fw_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.fw_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.um_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.gw();
    var exceptions = state.hw(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.io(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).at();
      }
    }
    if (!wasCancelling) {
      $this.fo(finalException);
    }
    $this.tm(finalState);
    var casSuccess = $this.im_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.l()) {
      if (state.gw()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.sm() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.m(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.g() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.g());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.d();
    while (tmp0_iterator.e()) {
      var exception = tmp0_iterator.f();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.im_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.fo(null);
    $this.tm(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.hn();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.gp();
      $this.gn(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.um_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.an(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.up();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.fo(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.vp_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.vp_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.an(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.go())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.hn();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.bo(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.vp_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.vp_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.an(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.uv_1)
        return 0;
      if (!$this.im_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.nn();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.im_1.atomicfu$compareAndSet(state, state.iw_1))
          return -1;
        $this.nn();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.sp_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.jn() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.yp(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.uv_1 ? list : new InactiveNodeList(list);
    $this.im_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.bq(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.vp_1;
    $this.im_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0_anonymous = $this.jn();
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0_anonymous) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.rn(tmp$ret$1));
    return cancellable.lq();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0_anonymous = $this.jn();
      var tmp;
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0_anonymous instanceof Finishing) {
          tmp_0 = tmp0_anonymous.jw();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0_anonymous, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.sm() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).do();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0_anonymous = $this.jn();
        if (tmp0_anonymous instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0_anonymous.kw())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0_anonymous.gw();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp = tmp0_also;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0_anonymous.lw(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0_anonymous.mw();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0_anonymous.cw_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp_1 = tmp0_also_0;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0_anonymous.pm()) {
              if (tryMakeCancelling($this, tmp0_anonymous, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0_anonymous, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString_0(tmp0_anonymous);
                throw IllegalStateException_init_$Create$(toString(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.up();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.im_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.jw())
      return get_COMPLETING_ALREADY();
    finishing.nw(true);
    if (!(finishing === state)) {
      if (!$this.im_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.gw();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.lw(tmp0_safe_receiver.um_1);
    }
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.mw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.um_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.up();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.sw_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.tn(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.zm(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.xp_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.wp_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.vp_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.xp_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.gw() ? 'Cancelling' : state.jw() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.pm() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.cw_1 = list;
    this.dw_1 = atomic$boolean$1(isCompleting);
    this.ew_1 = atomic$ref$1(rootCause);
    this.fw_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).up = function () {
    return this.cw_1;
  };
  protoOf(Finishing).nw = function (value) {
    this.dw_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).jw = function () {
    return this.dw_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).tw = function (value) {
    this.ew_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).mw = function () {
    return this.ew_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).kw = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).gw = function () {
    return !(this.mw() == null);
  };
  protoOf(Finishing).pm = function () {
    return this.mw() == null;
  };
  protoOf(Finishing).hw = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp = tmp0_also;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.mw();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.v3(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).lw = function (exception) {
    var rootCause = this.mw();
    if (rootCause == null) {
      this.tw(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        _set_exceptionsHolder__tqm22h(this, tmp0_apply);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.gw() + ', completing=' + this.jw() + ', rootCause=' + this.mw() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.cw_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.yw_1 = parent;
    this.zw_1 = state;
    this.ax_1 = child;
    this.bx_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).hp = function (cause) {
    continueCompleting(this.yw_1, this.zw_1, this.ax_1, this.bx_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.hp(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.ix_1 = job;
  }
  protoOf(AwaitContinuation).mt = function (parent) {
    var state = this.ix_1.jn();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.mw();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.um_1;
    return parent.on();
  };
  protoOf(AwaitContinuation).bn = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.jq();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.rn(tmp$ret$1));
    return cont.lq();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.rx_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).yx = function ($this$sequence, $completion) {
    var tmp = this.zx($this$sequence, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).yl = function (p1, $completion) {
    return this.yx(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 8;
            this.tx_1 = this.rx_1.jn();
            var tmp_0 = this.tx_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.dl_1 = 6;
              suspendResult = this.sx_1.i5(this.tx_1.sw_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.tx_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.ux_1 = this.tx_1.up();
                if (this.ux_1 == null) {
                  this.vx_1 = null;
                  this.dl_1 = 5;
                  continue $sm;
                } else {
                  this.wx_1 = this.ux_1.vp_1;
                  this.dl_1 = 1;
                  continue $sm;
                }
              } else {
                this.dl_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.wx_1, this.ux_1)) {
              this.dl_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.wx_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.xx_1 = this.wx_1;
              this.dl_1 = 2;
              suspendResult = this.sx_1.i5(this.xx_1.sw_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.wx_1 = this.wx_1.vp_1;
            this.dl_1 = 1;
            continue $sm;
          case 4:
            this.vx_1 = Unit_getInstance();
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.dl_1 = 7;
            continue $sm;
          case 6:
            this.dl_1 = 7;
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
  protoOf(JobSupport$_get_children_$slambda_k839f8).zx = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.rx_1, completion);
    i.sx_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.yx($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.im_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.jm_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).r = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).gn = function (value) {
    this.jm_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).hn = function () {
    return this.jm_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).in = function () {
    var tmp0_safe_receiver = this.hn();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.in();
  };
  protoOf(JobSupport).km = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.gn(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.mn();
    var handle = parent.eo(this);
    this.gn(handle);
    if (this.kn()) {
      handle.gp();
      this.gn(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).jn = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.im_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous instanceof OpDescriptor))
        return tmp1_anonymous;
      tmp1_anonymous.ay(this);
    }
  };
  protoOf(JobSupport).pm = function () {
    var state = this.jn();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.pm();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).kn = function () {
    var tmp = this.jn();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ln = function () {
    var state = this.jn();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.gw();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).mn = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0_anonymous = this.jn();
      var tmp0_subject = startInternal(this, tmp0_anonymous);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).nn = function () {
  };
  protoOf(JobSupport).on = function () {
    var state = this.jn();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.mw();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.pn(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.qn(state.um_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).pn = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.sm() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).qn = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.pn(_this__u8e3s4, message) : $super.pn.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).rn = function (handler) {
    return this.sn(false, true, handler);
  };
  protoOf(JobSupport).sn = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0_anonymous = this.jn();
        if (tmp0_anonymous instanceof Empty) {
          if (tmp0_anonymous.uv_1) {
            if (this.im_1.atomicfu$compareAndSet(tmp0_anonymous, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0_anonymous);
          }
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var list = tmp0_anonymous.up();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0_anonymous instanceof JobNode ? tmp0_anonymous : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0_anonymous instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp0_anonymous.mw();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0_anonymous.jw();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0_anonymous, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0_anonymous, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0_anonymous instanceof CompletedExceptionally ? tmp0_anonymous : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.um_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).un = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.p5();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).vn = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0_anonymous = this.jn();
      if (tmp0_anonymous instanceof JobNode) {
        if (!(tmp0_anonymous === node))
          return Unit_getInstance();
        if (this.im_1.atomicfu$compareAndSet(tmp0_anonymous, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
          if (!(tmp0_anonymous.up() == null)) {
            node.zp();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).wn = function () {
    return false;
  };
  protoOf(JobSupport).xn = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.sm() : null, null, this);
    } else {
      tmp = cause;
    }
    this.zn(tmp);
  };
  protoOf(JobSupport).sm = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).zn = function (cause) {
    this.co(cause);
  };
  protoOf(JobSupport).ao = function (parentJob) {
    this.co(parentJob);
  };
  protoOf(JobSupport).bo = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.co(cause) ? this.ho() : false;
  };
  protoOf(JobSupport).by = function (cause) {
    return this.co(cause);
  };
  protoOf(JobSupport).co = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.wn()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.zm(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).do = function () {
    var state = this.jn();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.mw();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.um_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).iu = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0_anonymous = this.jn();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.zm(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).xm = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0_anonymous = this.jn();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).lu = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).eo = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.tn(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).an = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).fo = function (cause) {
  };
  protoOf(JobSupport).go = function () {
    return false;
  };
  protoOf(JobSupport).ho = function () {
    return true;
  };
  protoOf(JobSupport).io = function (exception) {
    return false;
  };
  protoOf(JobSupport).tm = function (state) {
  };
  protoOf(JobSupport).zm = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.jo() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).jo = function () {
    return this.bn() + '{' + stateString(this, this.jn()) + '}';
  };
  protoOf(JobSupport).bn = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).qr = function () {
    var state = this.jn();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.um_1;
    return unboxState(state);
  };
  protoOf(JobSupport).mr = function ($completion) {
    $l$loop: while (true) {
      var state = this.jn();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.um_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.iw_1 = list;
  }
  protoOf(InactiveNodeList).up = function () {
    return this.iw_1;
  };
  protoOf(InactiveNodeList).pm = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.iw_1.yv('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.sw_1 = childJob;
  }
  protoOf(ChildHandleNode).in = function () {
    return this.tp();
  };
  protoOf(ChildHandleNode).hp = function (cause) {
    return this.sw_1.ao(this.tp());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.hp(cause);
  };
  protoOf(ChildHandleNode).bo = function (cause) {
    return this.tp().bo(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.gy_1 = handler;
    this.hy_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).hp = function (cause) {
    if (this.hy_1.atomicfu$compareAndSet(0, 1))
      this.gy_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.hp(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.my_1 = handler;
  }
  protoOf(InvokeOnCompletion).hp = function (cause) {
    return this.my_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.hp(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.ry_1 = continuation;
  }
  protoOf(ResumeOnCompletion).hp = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.ry_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.n5(tmp$ret$0);
    return Unit_getInstance();
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.hp(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sy_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.xy_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).hp = function (cause) {
    var state = this.tp().jn();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.xy_1;
      var tmp1_resumeWithException = state.um_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.n5(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.xy_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.n5(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.hp(cause);
  };
  function IncompleteStateBox(state) {
    this.sy_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.cz_1 = child;
  }
  protoOf(ChildContinuation).hp = function (cause) {
    this.cz_1.lt(this.cz_1.mt(this.tp()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.hp(cause);
  };
  function handlesException($this) {
    var tmp = $this.hn();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tp();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.ho())
        return true;
      var tmp_1 = parentJob.hn();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.tp();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.km(parent);
    this.fz_1 = handlesException(this);
  }
  protoOf(JobImpl).wn = function () {
    return true;
  };
  protoOf(JobImpl).ho = function () {
    return this.fz_1;
  };
  protoOf(JobImpl).ku = function () {
    return this.iu(Unit_getInstance());
  };
  protoOf(JobImpl).ju = function (exception) {
    return this.iu(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.kz_1 = handle;
  }
  protoOf(DisposeOnCompletion).hp = function (cause) {
    return this.kz_1.gp();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.hp(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.nz();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).nz = function () {
    var main = Dispatchers_getInstance().av();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.mz();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).bo = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.rz_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$4(timeMillis, block, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.p5(), uCont);
    this.h10_1 = time;
  }
  protoOf(TimeoutCoroutine).st = function () {
    this.by(TimeoutCancellationException_0(this.h10_1, get_delay(this.nm_1), this));
  };
  protoOf(TimeoutCoroutine).bn = function () {
    return protoOf(ScopeCoroutine).bn.call(this) + '(timeMillis=' + toString(this.h10_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.cr_1;
    var context = cont.p5();
    disposeOnCompletion(coroutine, get_delay(context).cv(coroutine.h10_1, coroutine, coroutine.nm_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance_1();
      tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.dv(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + toString(time) + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$4(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a10_1 = timeMillis;
    this.b10_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$4).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (this.a10_1.x(new Long(0, 0)) <= 0)
              return null;
            this.c10_1 = {_v: null};
            this.el_1 = 2;
            this.dl_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.a10_1, this);
            this.c10_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.b10_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.el_1 = 3;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.gl_1;
              if (e.rz_1 === this.c10_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            return Unit_getInstance();
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
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).pu = function (context) {
    return false;
  };
  protoOf(Unconfined).qu = function (context, block) {
    var yieldContext = context.u6(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.k10_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.k10_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.p5();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.ds_1.pu(context)) {
        cont.l10(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.l10(context.b7(yieldContext), Unit_getInstance());
        if (yieldContext.k10_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.r10_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.q10_1 = channel;
    this.r10_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).s10 = function () {
    return ensureNotNull(this.q10_1);
  };
  protoOf(ChannelSegment).t10 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).u10 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).v10 = function (index) {
    var tmp = this.r10_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).w10 = function (index) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.v10(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.x10(index);
    return tmp0_also;
  };
  protoOf(ChannelSegment).x10 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).y10 = function (index) {
    return this.r10_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).z10 = function (index, value) {
    this.r10_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).a11 = function (index, from, to) {
    return this.r10_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).b11 = function (index, update) {
    return this.r10_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).rs = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.v10(index_0);
    $l$loop: while (true) {
      var cur = this.y10(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.a11(index_0, cur, update)) {
          this.x10(index_0);
          this.o11(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.s10().d11_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_getInstance();
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() ? true : cur === get_INTERRUPTED_RCV()) {
          this.x10(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.s10().d11_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_getInstance();
        } else {
          if (cur === get_RESUMING_BY_EB() ? true : cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() ? true : cur === get_BUFFERED())
              return Unit_getInstance();
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_getInstance();
              else {
                var tmp0_error = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).o11 = function (index, receiver) {
    if (receiver) {
      var tmp = this.s10();
      var tmp$ret$1;
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = this.ps_1;
      var tmp1_times = get_SEGMENT_SIZE();
      tmp$ret$1 = tmp0_times.l9(toLong(tmp1_times)).r7(toLong(index));
      tmp.p11(tmp$ret$1);
    }
    this.q11();
  };
  function onClosedHasNext($this) {
    $this.c12_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.e12_1.f12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.d12_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this.e12_1, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension($this, $this.e12_1, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.x($this.e12_1.g12()) < 0) {
          segment.a12();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.e12_1.j11_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.e12_1.h12()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = $this.e12_1.f11_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            var id = r_0.k9(toLong(tmp0_div));
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            var i = r_0.ga(toLong(tmp1_rem)).f1();
            if (!segment_0.ps_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this.e12_1, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this.e12_1, segment_0, i, r_0, $this);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = isInterface($this, Waiter) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this.e12_1, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_getInstance();
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.x($this.e12_1.g12()) < 0) {
                segment_0.a12();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              segment_0.a12();
              var tmp0_anonymous = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              $this.c12_1 = tmp0_anonymous;
              $this.d12_1 = null;
              var tmp0_safe_receiver = $this.e12_1.d11_1;
              cancellable.as(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp0_anonymous, cancellable.p5()));
              tmp_0 = Unit_getInstance();
            }
            break $l$block_0;
          }
        }
      } else {
        segment.a12();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp1_anonymous = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        $this.c12_1 = tmp1_anonymous;
        $this.d12_1 = null;
        var tmp0_safe_receiver_0 = $this.e12_1.d11_1;
        cancellable.as(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp1_anonymous, cancellable.p5()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.nt();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.lq();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.d12_1);
    $this.d12_1 = null;
    $this.c12_1 = get_CHANNEL_CLOSED();
    var cause = $this.e12_1.f12();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.n5(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = recoverStackTrace(cause, cont);
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
      cont.n5(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q12_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$8).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 8;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.s12_1 = this.q12_1.e12_1.j11_1.kotlinx$atomicfu$value;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dl_1 = 9;
              continue $sm;
            }

            if (this.q12_1.e12_1.h12()) {
              var tmp_0 = this;
              tmp_0.r12_1 = onClosedHasNext(this.q12_1);
              this.dl_1 = 10;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.t12_1 = this.q12_1.e12_1.f11_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.u12_1 = this.t12_1.k9(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.v12_1 = this.t12_1.ga(toLong(tmp1_rem)).f1();
            if (!this.s12_1.ps_1.equals(this.u12_1)) {
              this.w12_1 = findSegmentReceive(this.q12_1.e12_1, this.u12_1, this.s12_1);
              if (this.w12_1 == null) {
                this.dl_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.x12_1 = this.w12_1;
                this.dl_1 = 4;
                continue $sm;
              }
            } else {
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.s12_1 = this.x12_1;
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.y12_1 = updateCellReceive(this.q12_1.e12_1, this.s12_1, this.v12_1, this.t12_1, null);
            if (this.y12_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.q12_1.e12_1, this.s12_1, this.v12_1);
              }
              this.s12_1;
              throw IllegalStateException_init_$Create$('unreachable');
            } else {
              if (this.y12_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.t12_1.x(this.q12_1.e12_1.g12()) < 0) {
                  this.s12_1.a12();
                }
                this.dl_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.y12_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.a13_1 = this.s12_1;
                  this.dl_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.q12_1, this.a13_1, this.v12_1, this.t12_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.s12_1.a12();
                  var tmp_8 = this.y12_1;
                  var tmp2_anonymous = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                  this.q12_1.c12_1 = tmp2_anonymous;
                  tmp_7.z12_1 = true;
                  this.dl_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_9 = this;
            return suspendResult;
          case 7:
            this.r12_1 = this.z12_1;
            this.dl_1 = 10;
            continue $sm;
          case 8:
            throw this.gl_1;
          case 9:
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 10;
            continue $sm;
          case 10:
            return this.r12_1;
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
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.g11_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_bufferEndCounter__2d4hee($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    return tmp0_let.equals(new Long(0, 0)) ? true : tmp0_let.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.d11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, $this.b13());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp1_failure = recoverStackTrace(tmp1_safe_receiver, cancellable);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        cancellable.n5(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var tmp0_resumeWithStackTrace = $this.b13();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp1_failure_0 = recoverStackTrace(tmp0_resumeWithStackTrace, cancellable);
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure_0));
      cancellable.n5(tmp$ret$3);
    }
    return cancellable.lq();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      var tmp0_subject = updateCellSend($this, segment, index, element, s, cancellable, false);
      if (tmp0_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
        segment.a12();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.n5(tmp$ret$0);
      } else if (tmp0_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.n5(tmp$ret$2);
      } else if (tmp0_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
        prepareSenderForSuspension(cancellable, $this, segment, index);
      } else if (tmp0_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
        if (s.x($this.c13()) < 0) {
          segment.a12();
        }
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        onClosedSendOnNoWaiterSuspend($this, element, cancellable);
      } else if (tmp0_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
        segment.a12();
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
          var segment_0 = $this.i11_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            var sendersAndCloseStatusCur = $this.e11_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            var s_0 = sendersAndCloseStatusCur.vb(new Long(-1, 268435455));
            var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            var id = s_0.k9(toLong(tmp0_div));
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            var i = s_0.ga(toLong(tmp1_rem)).f1();
            if (!segment_0.ps_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp_0;
                if (closed) {
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                } else {
                  continue $l$loop_0;
                }
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var tmp1_subject = updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
            if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              segment_0.a12();
              // Inline function 'kotlin.coroutines.resume' call
              var tmp$ret$8;
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance();
              tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_getInstance());
              cancellable.n5(tmp$ret$8);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
              // Inline function 'kotlin.coroutines.resume' call
              var tmp$ret$10;
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance();
              tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_getInstance());
              cancellable.n5(tmp$ret$10);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
              if (closed) {
                segment_0.q11();
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                break $l$block_5;
              }
              var tmp2_safe_receiver = isInterface(cancellable, Waiter) ? cancellable : null;
              if (tmp2_safe_receiver == null)
                null;
              else {
                prepareSenderForSuspension(tmp2_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
              if (s_0.x($this.c13()) < 0) {
                segment_0.a12();
              }
              onClosedSendOnNoWaiterSuspend($this, element, cancellable);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
              segment_0.a12();
              continue $l$loop_0;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
              throw IllegalStateException_init_$Create$('unexpected');
            }
          }
        }
      } else {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('unexpected');
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.nt();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.lq();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.qt(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.d11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.p5());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = recoverStackTrace($this.b13(), cont);
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
    cont.n5(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.u10(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.y10(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.a11(index, null, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else {
        if (waiter == null) {
          return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
        } else {
          if (segment.a11(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.x10(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.z10(index, get_DONE_RCV());
          $this.d13();
          tmp = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.b11(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.o11(index, true);
          }
          tmp = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.y10(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) ? !closed : false) {
          if (segment.a11(index, null, get_BUFFERED())) {
            return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
          }
        } else {
          if (closed) {
            if (segment.a11(index, null, get_INTERRUPTED_SEND())) {
              segment.o11(index, false);
              return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
            }
          } else if (waiter == null)
            return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
          else if (segment.a11(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.a11(index, state, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.x10(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_POISONED()) {
        segment.x10(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.x10(index);
        completeCloseOrCancel($this);
        return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.x10(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.e13_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.z10(index, get_DONE_RCV());
          $this.d13();
          tmp_0 = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.b11(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.o11(index, true);
          }
          tmp_0 = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    tmp$ret$0 = curSendersAndCloseStatus.vb(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.x(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = $this.c13();
      var tmp1_plus = $this.c11_1;
      tmp$ret$0 = tmp0_plus.r7(toLong(tmp1_plus));
      tmp = curSenders.x(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.j13($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = new ChannelResult(Companion_getInstance_2().h13(element));
        var tmp1_safe_receiver = $this.d11_1;
        tmp = tryResume0(_this__u8e3s4.i13_1, tmp_0, tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.i13_1.p5()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.f13(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.d11_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.p5()));
          } else {
            var tmp0_error = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(tmp0_error));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.x($this.g12()) < 0) {
          segment.a12();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.j11_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.h12()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.f11_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            var id = r_0.k9(toLong(tmp0_div));
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            var i = r_0.ga(toLong(tmp1_rem)).f1();
            if (!segment_0.ps_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = isInterface(cancellable, Waiter) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_getInstance();
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.x($this.g12()) < 0) {
                segment_0.a12();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              segment_0.a12();
              var tmp0_anonymous = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.d11_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp0_anonymous, cancellable.p5());
              cancellable.as(tmp0_anonymous, onCancellation);
              tmp_0 = Unit_getInstance();
            }
            break $l$block_0;
          }
        }
      } else {
        segment.a12();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp1_anonymous = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.d11_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp1_anonymous, cancellable.p5());
        cancellable.as(tmp1_anonymous, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.nt();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.lq();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.k13();
    _this__u8e3s4.qt(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = _get_receiveException__foorc1($this);
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
    cont.n5(tmp$ret$0);
  }
  function receiveCatchingOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>' call
      var waiter = new ReceiveCatching(cancellable instanceof CancellableContinuationImpl ? cancellable : THROW_CCE());
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, waiter);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension(waiter, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.x($this.g12()) < 0) {
          segment.a12();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.j11_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.h12()) {
              onClosedReceiveCatchingOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.f11_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var tmp0_div = get_SEGMENT_SIZE();
            var id = r_0.k9(toLong(tmp0_div));
            // Inline function 'kotlin.Long.rem' call
            var tmp1_rem = get_SEGMENT_SIZE();
            var i = r_0.ga(toLong(tmp1_rem)).f1();
            if (!segment_0.ps_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = isInterface(waiter, Waiter) ? waiter : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_getInstance();
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.x($this.g12()) < 0) {
                segment_0.a12();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              segment_0.a12();
              var tmp0_anonymous = (updCellResult_0 == null ? true : isObject(updCellResult_0)) ? updCellResult_0 : THROW_CCE();
              var tmp_1 = new ChannelResult(Companion_getInstance_2().h13(tmp0_anonymous));
              var tmp0_safe_receiver = $this.d11_1;
              cancellable.as(tmp_1, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, tmp0_anonymous, cancellable.p5()));
              tmp_0 = Unit_getInstance();
            }
            break $l$block_0;
          }
        }
      } else {
        segment.a12();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var tmp1_anonymous = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
        var tmp_2 = new ChannelResult(Companion_getInstance_2().h13(tmp1_anonymous));
        var tmp0_safe_receiver_0 = $this.d11_1;
        cancellable.as(tmp_2, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, tmp1_anonymous, cancellable.p5()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.nt();
        throw e;
      } else {
        throw $p;
      }
    }
    var tmp_3 = cancellable.lq();
    if (tmp_3 === get_COROUTINE_SUSPENDED())
      return tmp_3;
    return new ChannelResult(tmp_3.l13_1);
  }
  function onClosedReceiveCatchingOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = Companion_getInstance_2().m13($this.f12());
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(new ChannelResult(tmp0_resume));
    cont.n5(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.y10(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.e11_1.kotlinx$atomicfu$value.vb(new Long(-1, 268435455));
      if (r.x(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.a11(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.a11(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.w10(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.y10(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.e11_1.kotlinx$atomicfu$value.vb(new Long(-1, 268435455));
        if (r.x(senders) < 0) {
          if (segment.a11(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.a11(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.a11(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.w10(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_POISONED())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.a11(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.e13_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.z10(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.w10(index);
          } else {
            segment.z10(index, get_INTERRUPTED_SEND());
            segment.o11(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = _get_FAILED_$accessor$yt74tm_h47uk8();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_getInstance());
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.r13($this, Unit_getInstance());
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.x10(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.n13_1, true);
        } else {
          var tmp0_error = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_getInstance();
    var segment = $this.k11_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.g11_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      var id = b.k9(toLong(tmp0_div));
      var s = $this.g12();
      if (s.x(b) <= 0) {
        if (segment.ps_1.x(id) < 0 ? !(segment.w11() == null) : false) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      }
      if (!segment.ps_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      var i = b.ga(toLong(tmp1_rem)).f1();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_getInstance();
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.y10(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.x($this.f11_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.a11(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.z10(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.z10(index, get_INTERRUPTED_SEND());
            segment.o11(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.y10(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.x($this.f11_1.kotlinx$atomicfu$value) < 0) {
          if (segment.a11(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.a11(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.z10(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.z10(index, get_INTERRUPTED_SEND());
              segment.o11(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.a11(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if ((state === get_POISONED() ? true : state === get_DONE_RCV()) ? true : state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    var tmp0_error = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.h11_1.atomicfu$addAndGet$long(nAttempts).vb(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.h11_1.kotlinx$atomicfu$value.vb(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.e12_1 = $outer;
    this.c12_1 = get_NO_RECEIVE_RESULT();
    this.d12_1 = null;
  }
  protoOf(BufferedChannelIterator).s13 = function ($completion) {
    var tmp = new $hasNextCOROUTINE$8(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(BufferedChannelIterator).qt = function (segment, index) {
    var tmp0_safe_receiver = this.d12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qt(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).f = function () {
    var result = this.c12_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c12_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.e12_1));
    return (result == null ? true : isObject(result)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).f13 = function (element) {
    var cont = ensureNotNull(this.d12_1);
    this.d12_1 = null;
    this.c12_1 = element;
    var tmp0_safe_receiver = this.e12_1.d11_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.p5()));
  };
  protoOf(BufferedChannelIterator).t13 = function () {
    var cont = ensureNotNull(this.d12_1);
    this.d12_1 = null;
    this.c12_1 = get_CHANNEL_CLOSED();
    var cause = this.e12_1.f12();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.n5(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = recoverStackTrace(cause, cont);
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
      cont.n5(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.f12();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var tmp0_getAndUpdate = $this.n11_1;
      while (true) {
        var cur = tmp0_getAndUpdate.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0_getAndUpdate.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.f12());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.e11_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.z9(60).f1()) {
          case 0:
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            tmp$ret$1 = cur.vb(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            var tmp$ret$2;
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            tmp$ret$2 = cur.vb(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_getInstance();
        }
        var upd = tmp;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.e11_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        tmp$ret$0 = cur.vb(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = $this.e11_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.z9(60).f1() === 0) {
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          tmp$ret$1 = cur.vb(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_getInstance();
        }
        var upd = tmp;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.u13();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.w13()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.v13(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.k11_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var tmp0_let = $this.i11_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_let.ps_1.x(lastSegment.ps_1) > 0) {
      lastSegment = tmp0_let;
      tmp = Unit_getInstance();
    }
    // Inline function 'kotlin.let' call
    var tmp1_let = $this.j11_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp1_let.ps_1.x(lastSegment.ps_1) > 0) {
      lastSegment = tmp1_let;
      tmp_0 = Unit_getInstance();
    }
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.ps_1;
          var tmp1_times = get_SEGMENT_SIZE();
          var globalIndex = tmp0_times.l9(toLong(tmp1_times)).r7(toLong(index));
          if (globalIndex.x($this.c13()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.y10(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                segment.q11();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.z11();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.d11_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.ps_1;
          var tmp1_times = get_SEGMENT_SIZE();
          var globalIndex = tmp0_times.l9(toLong(tmp1_times)).r7(toLong(index));
          update_cell: while (true) {
            var state = segment.y10(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.x($this.c13()) < 0)
                  break process_segments;
                if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.v10(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.x10(index);
                  segment.q11();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() ? true : state === null) {
                  if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                    segment.q11();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.x($this.c13()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.e13_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.v10(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.x10(index);
                      segment.q11();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() ? true : state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.z11();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp3_forEachReversed = suspendedSenders;
      var tmp0_subject = _get_holder__f6h5pd(tmp3_forEachReversed);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var tmp_2 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var tmp4_anonymous = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(tmp4_anonymous, $this);
        } else {
          var tmp_3 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.g() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var tmp5_anonymous = list.m(i);
              resumeSenderOnCancelledChannel(tmp5_anonymous, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.ps_1;
          var tmp1_times = get_SEGMENT_SIZE();
          if (tmp0_times.l9(toLong(tmp1_times)).r7(toLong(index)).x(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.y10(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                segment.q11();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.e13_1);
                  segment.o11(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.a11(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.o11(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.z11();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp3_forEachReversed = suspendedReceivers;
      var tmp0_subject = _get_holder__f6h5pd(tmp3_forEachReversed);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var tmp = _get_holder__f6h5pd(tmp3_forEachReversed);
          var tmp4_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(tmp4_anonymous, $this);
        } else {
          var tmp_0 = _get_holder__f6h5pd(tmp3_forEachReversed);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.g() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var tmp5_anonymous = list.m(i);
              resumeReceiverOnClosedChannel(tmp5_anonymous, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = _this__u8e3s4.n13_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      tmp0_resume.n5(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp2_resumeWithException = receiver ? _get_receiveException__foorc1($this) : $this.b13();
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp2_resumeWithException));
        _this__u8e3s4.n5(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp3_resume = _this__u8e3s4.i13_1;
          var tmp4_resume = Companion_getInstance_2().m13($this.f12());
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(new ChannelResult(tmp4_resume));
          tmp3_resume.n5(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.t13();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.j13($this, get_CHANNEL_CLOSED());
            } else {
              var tmp5_error = 'Unexpected waiter: ' + _this__u8e3s4;
              throw IllegalStateException_init_$Create$(toString(tmp5_error));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.z9(60).f1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        tmp$ret$1 = sendersAndCloseStatusCur.vb(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.x13() : true;
        break;
      case 3:
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        tmp$ret$2 = sendersAndCloseStatusCur.vb(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var tmp0_error = 'unexpected close status: ' + sendersAndCloseStatusCur.z9(60).f1();
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.y10(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        if (segment.a11(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.c13());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp0_findSegmentAndMoveForward = $this.i11_1;
      var tmp1_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp1_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp0_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0_anonymous = tmp0_findSegmentAndMoveForward.kotlinx$atomicfu$value;
              if (tmp0_anonymous.ps_1.x(tmp0_moveForward.ps_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp0_moveForward.s11()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp0_moveForward)) {
                if (tmp0_anonymous.t11()) {
                  tmp0_anonymous.b5();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp0_moveForward.t11()) {
                tmp0_moveForward.b5();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp2_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp2_let)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = startFrom.ps_1;
      var tmp1_times = get_SEGMENT_SIZE();
      if (tmp0_times.l9(toLong(tmp1_times)).x($this.c13()) < 0) {
        startFrom.a12();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp2_let);
      var tmp_1;
      if (segment.ps_1.x(id) > 0) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.times' call
        var tmp2_times = segment.ps_1;
        var tmp3_times = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp2_times.l9(toLong(tmp3_times));
        updateSendersCounterIfLower($this, tmp$ret$3);
        // Inline function 'kotlin.Long.times' call
        var tmp4_times = segment.ps_1;
        var tmp5_times = get_SEGMENT_SIZE();
        if (tmp4_times.l9(toLong(tmp5_times)).x($this.c13()) < 0) {
          segment.a12();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp0_findSegmentAndMoveForward = $this.j11_1;
      var tmp1_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp1_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp0_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0_anonymous = tmp0_findSegmentAndMoveForward.kotlinx$atomicfu$value;
              if (tmp0_anonymous.ps_1.x(tmp0_moveForward.ps_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp0_moveForward.s11()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp0_moveForward)) {
                if (tmp0_anonymous.t11()) {
                  tmp0_anonymous.b5();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp0_moveForward.t11()) {
                tmp0_moveForward.b5();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp2_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp2_let)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = startFrom.ps_1;
      var tmp1_times = get_SEGMENT_SIZE();
      if (tmp0_times.l9(toLong(tmp1_times)).x($this.g12()) < 0) {
        startFrom.a12();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp2_let);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp$ret$3;
        // Inline function 'kotlin.Long.div' call
        var tmp2_div = _get_bufferEndCounter__2d4hee($this);
        var tmp3_div = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp2_div.k9(toLong(tmp3_div));
        tmp_1 = id.x(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var tmp4_moveForward = $this.k11_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var tmp0_anonymous_0 = tmp4_moveForward.kotlinx$atomicfu$value;
            if (tmp0_anonymous_0.ps_1.x(segment.ps_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.s11()) {
              break $l$block_5;
            }
            if (tmp4_moveForward.atomicfu$compareAndSet(tmp0_anonymous_0, segment)) {
              if (tmp0_anonymous_0.t11()) {
                tmp0_anonymous_0.b5();
              }
              break $l$block_5;
            }
            if (segment.t11()) {
              segment.b5();
            }
          }
        }
      }
      var tmp_2;
      if (segment.ps_1.x(id) > 0) {
        var tmp$ret$5;
        // Inline function 'kotlin.Long.times' call
        var tmp5_times = segment.ps_1;
        var tmp6_times = get_SEGMENT_SIZE();
        tmp$ret$5 = tmp5_times.l9(toLong(tmp6_times));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        // Inline function 'kotlin.Long.times' call
        var tmp7_times = segment.ps_1;
        var tmp8_times = get_SEGMENT_SIZE();
        if (tmp7_times.l9(toLong(tmp8_times)).x($this.g12()) < 0) {
          segment.a12();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp0_findSegmentAndMoveForward = $this.k11_1;
      var tmp1_findSegmentAndMoveForward = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp1_findSegmentAndMoveForward);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp0_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0_anonymous = tmp0_findSegmentAndMoveForward.kotlinx$atomicfu$value;
              if (tmp0_anonymous.ps_1.x(tmp0_moveForward.ps_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp0_moveForward.s11()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp0_moveForward)) {
                if (tmp0_anonymous.t11()) {
                  tmp0_anonymous.b5();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp0_moveForward.t11()) {
                tmp0_moveForward.b5();
              }
            }
            tmp$ret$0 = Unit_getInstance();
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var tmp2_let = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(tmp2_let)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp2_let);
      var tmp_1;
      if (segment.ps_1.x(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.r7(new Long(1, 0));
        var tmp$ret$3;
        // Inline function 'kotlin.Long.times' call
        var tmp0_times = segment.ps_1;
        var tmp1_times = get_SEGMENT_SIZE();
        tmp$ret$3 = tmp0_times.l9(toLong(tmp1_times));
        if ($this.g11_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          var tmp$ret$4;
          // Inline function 'kotlin.Long.times' call
          var tmp2_times = segment.ps_1;
          var tmp3_times = get_SEGMENT_SIZE();
          tmp$ret$4 = tmp2_times.l9(toLong(tmp3_times));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.m9(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.ps_1.x(id) < 0) {
      var tmp0_elvis_lhs = segment.w11();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.r11()) {
        var tmp1_elvis_lhs = segment.w11();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp0_moveForward = $this.k11_1;
        var tmp1_moveForward = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var tmp0_anonymous = tmp0_moveForward.kotlinx$atomicfu$value;
          if (tmp0_anonymous.ps_1.x(tmp1_moveForward.ps_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp1_moveForward.s11()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0_moveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp1_moveForward)) {
            if (tmp0_anonymous.t11()) {
              tmp0_anonymous.b5();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp1_moveForward.t11()) {
            tmp1_moveForward.b5();
          }
        }
        tmp$ret$0 = Unit_getInstance();
      }
      if (tmp$ret$0)
        return Unit_getInstance();
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp0_loop = $this.e11_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = tmp1_anonymous.vb(new Long(-1, 268435455));
      if (curCounter.x(value) >= 0)
        return Unit_getInstance();
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      tmp$ret$1 = tmp1_anonymous.z9(60).f1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.e11_1.atomicfu$compareAndSet(tmp1_anonymous, update))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp0_loop = $this.f11_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous.x(value) >= 0)
        return Unit_getInstance();
      if ($this.f11_1.atomicfu$compareAndSet(tmp1_anonymous, value))
        return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.d11_1, ($element == null ? true : isObject($element)) ? $element : THROW_CCE(), $select.p5());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$5(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g14_1 = _this__u8e3s4;
    this.h14_1 = element;
  }
  protoOf($sendCOROUTINE$5).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 11;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.j14_1 = this.g14_1.i11_1.kotlinx$atomicfu$value;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dl_1 = 12;
              continue $sm;
            }

            this.k14_1 = this.g14_1.e11_1.atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.l14_1 = this.k14_1.vb(new Long(-1, 268435455));
            this.m14_1 = _get_isClosedForSend0__kxgf9m(this.k14_1, this.g14_1);
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.n14_1 = this.l14_1.k9(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.o14_1 = this.l14_1.ga(toLong(tmp1_rem)).f1();
            if (!this.j14_1.ps_1.equals(this.n14_1)) {
              this.p14_1 = findSegmentSend(this.g14_1, this.n14_1, this.j14_1);
              if (this.p14_1 == null) {
                if (this.m14_1) {
                  this.dl_1 = 10;
                  suspendResult = onClosedSend(this.g14_1, this.h14_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.dl_1 = 2;
                  continue $sm;
                }
              } else {
                this.q14_1 = this.p14_1;
                this.dl_1 = 3;
                continue $sm;
              }
            } else {
              this.dl_1 = 4;
              continue $sm;
            }

          case 3:
            this.j14_1 = this.q14_1;
            this.dl_1 = 4;
            continue $sm;
          case 4:
            this.r14_1 = updateCellSend(this.g14_1, this.j14_1, this.o14_1, this.h14_1, this.l14_1, null, this.m14_1);
            if (this.r14_1 === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              this.j14_1.a12();
              var tmp_3 = this;
              tmp_3.i14_1 = Unit_getInstance();
              this.dl_1 = 13;
              continue $sm;
            } else {
              if (this.r14_1 === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
                var tmp_4 = this;
                tmp_4.i14_1 = Unit_getInstance();
                this.dl_1 = 13;
                continue $sm;
              } else {
                if (this.r14_1 === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
                  if (this.m14_1) {
                    this.j14_1.q11();
                    this.dl_1 = 9;
                    suspendResult = onClosedSend(this.g14_1, this.h14_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.dl_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.r14_1 === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
                    if (this.l14_1.x(this.g14_1.c13()) < 0) {
                      this.j14_1.a12();
                    }
                    this.dl_1 = 7;
                    suspendResult = onClosedSend(this.g14_1, this.h14_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.r14_1 === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
                      this.j14_1.a12();
                      this.dl_1 = 2;
                      continue $sm;
                    } else {
                      if (this.r14_1 === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
                        var tmp_5 = this;
                        tmp_5.s14_1 = this.j14_1;
                        this.dl_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.g14_1, this.s14_1, this.o14_1, this.h14_1, this.l14_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.dl_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.dl_1 = 2;
            continue $sm;
          case 6:
            this.i14_1 = suspendResult;
            this.dl_1 = 13;
            continue $sm;
          case 7:
            this.i14_1 = suspendResult;
            this.dl_1 = 13;
            continue $sm;
          case 8:
            var tmp2_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp2_safe_receiver, this.g14_1, this.j14_1, this.o14_1);
            }

            var tmp_6 = this;
            this.j14_1;
            tmp_6.i14_1 = Unit_getInstance();
            this.dl_1 = 13;
            continue $sm;
          case 9:
            this.i14_1 = suspendResult;
            this.dl_1 = 13;
            continue $sm;
          case 10:
            this.i14_1 = suspendResult;
            this.dl_1 = 13;
            continue $sm;
          case 11:
            throw this.gl_1;
          case 12:
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
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
  function $receiveCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b15_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$6).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 8;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.d15_1 = this.b15_1.j11_1.kotlinx$atomicfu$value;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dl_1 = 9;
              continue $sm;
            }

            if (this.b15_1.h12()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.b15_1));
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.e15_1 = this.b15_1.f11_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.f15_1 = this.e15_1.k9(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.g15_1 = this.e15_1.ga(toLong(tmp1_rem)).f1();
            if (!this.d15_1.ps_1.equals(this.f15_1)) {
              this.h15_1 = findSegmentReceive(this.b15_1, this.f15_1, this.d15_1);
              if (this.h15_1 == null) {
                this.dl_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.i15_1 = this.h15_1;
                this.dl_1 = 4;
                continue $sm;
              }
            } else {
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.d15_1 = this.i15_1;
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.j15_1 = updateCellReceive(this.b15_1, this.d15_1, this.g15_1, this.e15_1, null);
            if (this.j15_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.b15_1, this.d15_1, this.g15_1);
              }
              this.d15_1;
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              if (this.j15_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.e15_1.x(this.b15_1.g12()) < 0) {
                  this.d15_1.a12();
                }
                this.dl_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.j15_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.l15_1 = this.d15_1;
                  this.dl_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.b15_1, this.l15_1, this.g15_1, this.e15_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.d15_1.a12();
                  var tmp_8 = this.j15_1;
                  return (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                }
              }
            }

          case 6:
            this.k15_1 = suspendResult;
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.c15_1 = this.k15_1;
            this.dl_1 = 10;
            continue $sm;
          case 8:
            throw this.gl_1;
          case 9:
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 10;
            continue $sm;
          case 10:
            return this.c15_1;
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
  function $receiveCatchingCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u15_1 = _this__u8e3s4;
  }
  protoOf($receiveCatchingCOROUTINE$7).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 9;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.w15_1 = this.u15_1.j11_1.kotlinx$atomicfu$value;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.dl_1 = 10;
              continue $sm;
            }

            if (this.u15_1.h12()) {
              var tmp_0 = this;
              tmp_0.v15_1 = Companion_getInstance_2().m13(this.u15_1.f12());
              this.dl_1 = 11;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.x15_1 = this.u15_1.f11_1.atomicfu$getAndIncrement$long();
            var tmp_1 = this;
            var tmp0_div = get_SEGMENT_SIZE();
            tmp_1.y15_1 = this.x15_1.k9(toLong(tmp0_div));
            var tmp_2 = this;
            var tmp1_rem = get_SEGMENT_SIZE();
            tmp_2.z15_1 = this.x15_1.ga(toLong(tmp1_rem)).f1();
            if (!this.w15_1.ps_1.equals(this.y15_1)) {
              this.a16_1 = findSegmentReceive(this.u15_1, this.y15_1, this.w15_1);
              if (this.a16_1 == null) {
                this.dl_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.b16_1 = this.a16_1;
                this.dl_1 = 4;
                continue $sm;
              }
            } else {
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.w15_1 = this.b16_1;
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.c16_1 = updateCellReceive(this.u15_1, this.w15_1, this.z15_1, this.x15_1, null);
            if (this.c16_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_4 = this;
              var tmp1_safe_receiver = (!(null == null) ? isInterface(null, Waiter) : false) ? null : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.u15_1, this.w15_1, this.z15_1);
              }
              this.w15_1;
              throw IllegalStateException_init_$Create$('unexpected');
            } else {
              if (this.c16_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.x15_1.x(this.u15_1.g12()) < 0) {
                  this.w15_1.a12();
                }
                this.dl_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (this.c16_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_6 = this;
                  tmp_6.e16_1 = this.w15_1;
                  this.dl_1 = 6;
                  suspendResult = receiveCatchingOnNoWaiterSuspend(this.u15_1, this.e16_1, this.z15_1, this.x15_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.dl_1 = 7;
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.w15_1.a12();
                  var tmp_8 = this.c16_1;
                  var tmp2_anonymous = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
                  tmp_7.d16_1 = Companion_getInstance_2().h13(tmp2_anonymous);
                  this.dl_1 = 8;
                  continue $sm;
                }
              }
            }

          case 6:
            var unboxed = suspendResult.l13_1;
            suspendResult = new ChannelResult(unboxed);
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.d16_1 = suspendResult.l13_1;
            this.dl_1 = 8;
            continue $sm;
          case 8:
            this.v15_1 = this.d16_1;
            this.dl_1 = 11;
            continue $sm;
          case 9:
            throw this.gl_1;
          case 10:
            if (false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 11;
            continue $sm;
          case 11:
            return new ChannelResult(this.v15_1);
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 9) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.c11_1 = capacity;
    this.d11_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.c11_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.c11_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.e11_1 = atomic$long$1(new Long(0, 0));
    this.f11_1 = atomic$long$1(new Long(0, 0));
    this.g11_1 = atomic$long$1(initialBufferEnd(this.c11_1));
    this.h11_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.i11_1 = atomic$ref$1(firstSegment);
    this.j11_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.k11_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.d11_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.l11_1 = tmp_3;
    this.m11_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.n11_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).g12 = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.e11_1.kotlinx$atomicfu$value.vb(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).c13 = function () {
    return this.f11_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).f16 = function (element, $completion) {
    var tmp = new $sendCOROUTINE$5(this, element, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(BufferedChannel).g16 = function (element) {
    if (shouldSendSuspend(this, this.e11_1.kotlinx$atomicfu$value))
      return Companion_getInstance_2().h16();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp0_sendImpl = get_INTERRUPTED_SEND();
      var segment = this.i11_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.e11_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.vb(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        var id = s.k9(toLong(tmp0_div));
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        var i = s.ga(toLong(tmp1_rem)).f1();
        if (!segment.ps_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_2().m13(this.b13());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, element, s, tmp0_sendImpl, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.a12();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_2().h13(Unit_getInstance());
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_2().h13(Unit_getInstance());
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.q11();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$4 = Companion_getInstance_2().m13(this.b13());
            break $l$block_5;
          }
          var tmp2_safe_receiver = isInterface(tmp0_sendImpl, Waiter) ? tmp0_sendImpl : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          segment.q11();
          tmp$ret$4 = Companion_getInstance_2().h16();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.x(this.c13()) < 0) {
            segment.a12();
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_2().m13(this.b13());
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.a12();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          throw IllegalStateException_init_$Create$('unexpected');
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).k13 = function () {
  };
  protoOf(BufferedChannel).d13 = function () {
  };
  protoOf(BufferedChannel).i16 = function ($completion) {
    var tmp = new $receiveCOROUTINE$6(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(BufferedChannel).j16 = function ($completion) {
    var tmp = new $receiveCatchingCOROUTINE$7(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    var tmp_0 = tmp.ml();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return new ChannelResult(tmp_0.l13_1);
  };
  protoOf(BufferedChannel).k16 = function () {
    var r = this.f11_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.e11_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_2().m13(this.f12());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.vb(new Long(-1, 268435455));
    if (r.x(s) >= 0)
      return Companion_getInstance_2().h16();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var tmp0_receiveImpl = get_INTERRUPTED_RCV();
      var segment = this.j11_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.h12()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_2().m13(this.f12());
          break $l$block_0;
        }
        var r_0 = this.f11_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        var id = r_0.k9(toLong(tmp0_div));
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        var i = r_0.ga(toLong(tmp1_rem)).f1();
        if (!segment.ps_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp0_receiveImpl);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
          var tmp1_safe_receiver = isInterface(tmp0_receiveImpl, Waiter) ? tmp0_receiveImpl : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var tmp1_anonymous = segment;
          this.p11(r_0);
          tmp1_anonymous.q11();
          tmp_0 = Companion_getInstance_2().h16();
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
          if (r_0.x(this.g12()) < 0) {
            segment.a12();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          throw IllegalStateException_init_$Create$('unexpected');
        } else {
          segment.a12();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var tmp3_anonymous = (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE();
          tmp_0 = Companion_getInstance_2().h13(tmp3_anonymous);
        }
        tmp$ret$2 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).v13 = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.j11_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.f11_1.kotlinx$atomicfu$value;
      var tmp$ret$1;
      // Inline function 'kotlin.math.max' call
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = this.c11_1;
      var tmp1_max = r.r7(toLong(tmp0_plus));
      var tmp2_max = _get_bufferEndCounter__2d4hee(this);
      tmp$ret$1 = tmp1_max.x(tmp2_max) >= 0 ? tmp1_max : tmp2_max;
      if (globalCellIndex.x(tmp$ret$1) < 0)
        return Unit_getInstance();
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$2 = r.r7(new Long(1, 0));
      if (!this.f11_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var tmp3_div = get_SEGMENT_SIZE();
      var id = r.k9(toLong(tmp3_div));
      // Inline function 'kotlin.Long.rem' call
      var tmp4_rem = get_SEGMENT_SIZE();
      var i = r.ga(toLong(tmp4_rem)).f1();
      if (!segment.ps_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.x(this.g12()) < 0) {
          segment.a12();
        }
      } else {
        segment.a12();
        var tmp1_safe_receiver = this.d11_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : isObject(updCellResult)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).p11 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_getInstance();
    while (_get_bufferEndCounter__2d4hee(this).x(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.h11_1.kotlinx$atomicfu$value.vb(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) ? b.equals(_get_bufferEndCounter__2d4hee(this)) : false)
          return Unit_getInstance();
      }
       while (inductionVariable < tmp0_repeat);
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp1_update = this.h11_1;
      while (true) {
        var cur = tmp1_update.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        tmp$ret$1 = cur.vb(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (tmp1_update.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.h11_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.vb(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.vb(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) ? b_0.equals(_get_bufferEndCounter__2d4hee(this)) : false) {
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var tmp2_update = this.h11_1;
          while (true) {
            var cur_0 = tmp2_update.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            var tmp$ret$6;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            tmp$ret$6 = cur_0.vb(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (tmp2_update.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_getInstance();
      }
      if (!pauseExpandBuffers) {
        this.h11_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).d = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).f12 = function () {
    var tmp = this.m11_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).b13 = function () {
    var tmp0_elvis_lhs = this.f12();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).l16 = function () {
  };
  protoOf(BufferedChannel).m16 = function (cause) {
    return this.n16(cause, false);
  };
  protoOf(BufferedChannel).xn = function (cause) {
    this.p16(cause);
  };
  protoOf(BufferedChannel).p16 = function (cause) {
    return this.n16(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).n16 = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.m11_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.l16();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).w13 = function () {
    return false;
  };
  protoOf(BufferedChannel).u13 = function () {
    return _get_isClosedForSend0__kxgf9m(this.e11_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).h12 = function () {
    return _get_isClosedForReceive0__f7qknl(this.e11_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).x13 = function () {
    $l$loop: while (true) {
      var segment = this.j11_1.kotlinx$atomicfu$value;
      var r = this.c13();
      var s = this.g12();
      if (s.x(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE();
      var id = r.k9(toLong(tmp0_div));
      if (!segment.ps_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.j11_1.kotlinx$atomicfu$value.ps_1.x(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.a12();
      // Inline function 'kotlin.Long.rem' call
      var tmp1_rem = get_SEGMENT_SIZE();
      var i = r.ga(toLong(tmp1_rem)).f1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$2 = r.r7(new Long(1, 0));
      this.f11_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.e11_1.kotlinx$atomicfu$value.z9(60).f1();
    if (tmp0_subject === 2) {
      sb.ia('closed,');
    } else if (tmp0_subject === 3) {
      sb.ia('cancelled,');
    }
    sb.ia('capacity=' + this.c11_1 + ',');
    sb.ia('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      // Inline function 'kotlin.collections.filter' call
      var tmp1_filter = listOf([this.j11_1.kotlinx$atomicfu$value, this.i11_1.kotlinx$atomicfu$value, this.k11_1.kotlinx$atomicfu$value]);
      // Inline function 'kotlin.collections.filterTo' call
      var tmp0_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator = tmp1_filter.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        if (!(element === get_NULL_SEGMENT())) {
          tmp0_filterTo.a(element);
        }
      }
      var iterator = tmp0_filterTo.d();
      if (!iterator.e())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.f();
      if (!iterator.e()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.ps_1;
      do {
        var e = iterator.f();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.ps_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.e());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.c13();
    var s = this.g12();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var tmp4_times = segment.ps_1;
          var tmp5_times = get_SEGMENT_SIZE();
          var globalCellIndex = tmp4_times.l9(toLong(tmp5_times)).r7(toLong(i));
          if (globalCellIndex.x(s) >= 0 ? globalCellIndex.x(r) >= 0 : false)
            break append_elements;
          var cellState = segment.y10(i);
          var element_0 = segment.v10(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (globalCellIndex.x(r) < 0 ? globalCellIndex.x(s) >= 0 : false) ? 'receive' : (globalCellIndex.x(s) < 0 ? globalCellIndex.x(r) >= 0 : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (globalCellIndex.x(r) < 0 ? globalCellIndex.x(s) >= 0 : false) ? 'onReceive' : (globalCellIndex.x(s) < 0 ? globalCellIndex.x(r) >= 0 : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.ia('(' + cellStateString + ',' + element_0 + '),');
          } else {
            sb.ia(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.w11();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.zi(sb.qd() - 1 | 0);
    }
    sb.ia(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.e13_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + this.e13_1 + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    var tmp;
    Factory_getInstance();
    if (capacity === 0) {
      tmp = new Long(0, 0);
    } else {
      Factory_getInstance();
      if (capacity === 2147483647) {
        tmp = new Long(-1, 2147483647);
      } else {
        tmp = toLong(capacity);
      }
    }
    return tmp;
  }
  function ReceiveCatching(cont) {
    this.i13_1 = cont;
  }
  protoOf(ReceiveCatching).qt = function (segment, index) {
    this.i13_1.qt(segment, index);
  };
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.wr(value, null, onCancellation);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var tmp;
    if (!(tmp0_let == null)) {
      _this__u8e3s4.op(tmp0_let);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).r7(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).q7(60).r7(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function get_SENDERS_COUNTER_MASK() {
    return SENDERS_COUNTER_MASK;
  }
  var SENDERS_COUNTER_MASK;
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.s10(), 0);
  }
  function _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 3;
  }
  function _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 0;
  }
  function _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 1;
  }
  function _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 2;
  }
  function _get_RESULT_CLOSED_$accessor$yt74tm_10v48j() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 4;
  }
  function _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 5;
  }
  function _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND_NO_WAITER();
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.r16_1 = 2147483647;
    this.s16_1 = 0;
    this.t16_1 = -1;
    this.u16_1 = -2;
    this.v16_1 = -3;
    this.w16_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.x16_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y16_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.y16_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.y16_1, other.y16_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.y16_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + this.y16_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.g13_1 = new Failed();
  }
  protoOf(Companion).h13 = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).h16 = function () {
    return _ChannelResult___init__impl__siwsuf(this.g13_1);
  };
  protoOf(Companion).m13 = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.l13_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_2();
    this.l13_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.l13_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.l13_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.l13_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      var tmp_1;
      if (onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
        Factory_getInstance();
        tmp_1 = new BufferedChannel(0, onUndeliveredElement);
      } else {
        tmp_1 = new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
      }
      tmp_0 = tmp_1;
    } else {
      Factory_getInstance();
      if (capacity === -1) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp_0 = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (capacity === 2147483647) {
          Factory_getInstance();
          tmp_0 = new BufferedChannel(2147483647, onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (capacity === -2) {
            tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().x16_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.c17_1 = _channel;
  }
  protoOf(ChannelCoroutine).m16 = function (cause) {
    return this.c17_1.m16(cause);
  };
  protoOf(ChannelCoroutine).d = function () {
    return this.c17_1.d();
  };
  protoOf(ChannelCoroutine).i16 = function ($completion) {
    return this.c17_1.i16($completion);
  };
  protoOf(ChannelCoroutine).j16 = function ($completion) {
    var tmp = this.c17_1.j16($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.l13_1);
  };
  protoOf(ChannelCoroutine).f16 = function (element, $completion) {
    return this.c17_1.f16(element, $completion);
  };
  protoOf(ChannelCoroutine).k16 = function () {
    return this.c17_1.k16();
  };
  protoOf(ChannelCoroutine).g16 = function (element) {
    return this.c17_1.g16(element);
  };
  protoOf(ChannelCoroutine).xn = function (cause) {
    if (this.ln())
      return Unit_getInstance();
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.sm() : null, null, this);
    } else {
      tmp = cause;
    }
    this.zn(tmp);
  };
  protoOf(ChannelCoroutine).q16 = function (cause, $super) {
    return this.yn(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).zn = function (cause) {
    var exception = this.qn(cause);
    this.c17_1.xn(exception);
    this.by(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.xn(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.q17_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).g16.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) ? true : _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.d11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_2().h13(Unit_getInstance());
  }
  function trySendDropOldest($this, element) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var tmp0_sendImpl = get_BUFFERED();
      var segment = $this.i11_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = $this.e11_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.vb(get_SENDERS_COUNTER_MASK());
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = get_SEGMENT_SIZE();
        var id = s.k9(toLong(tmp0_div));
        // Inline function 'kotlin.Long.rem' call
        var tmp1_rem = get_SEGMENT_SIZE();
        var i = s.ga(toLong(tmp1_rem)).f1();
        if (!segment.ps_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_2().m13($this.b13());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend($this, segment, i, element, s, tmp0_sendImpl, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.a12();
          return Companion_getInstance_2().h13(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          return Companion_getInstance_2().h13(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.q11();
            return Companion_getInstance_2().m13($this.b13());
          }
          var tmp2_safe_receiver = isInterface(tmp0_sendImpl, Waiter) ? tmp0_sendImpl : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, $this, segment, i);
          }
          var tmp$ret$5;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var tmp0_times = segment.ps_1;
          var tmp1_times = get_SEGMENT_SIZE();
          tmp$ret$5 = tmp0_times.l9(toLong(tmp1_times)).r7(toLong(i));
          $this.v13(tmp$ret$5);
          return Companion_getInstance_2().h13(Unit_getInstance());
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.x($this.c13()) < 0) {
            segment.a12();
          }
          return Companion_getInstance_2().m13($this.b13());
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.a12();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          throw IllegalStateException_init_$Create$('unexpected');
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.p17_1 = capacity;
    this.q17_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.q17_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).mh() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.p17_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.p17_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).w13 = function () {
    return this.q17_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).f16 = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var tmp0_onClosed = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(tmp0_onClosed);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(tmp0_onClosed);
      var tmp0_safe_receiver = this.d11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, this.b13());
        throw tmp1_safe_receiver;
      }
      throw this.b13();
    }
    return Unit_getInstance();
  };
  protoOf(ConflatedBufferedChannel).g16 = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.rn(onCompletion);
    }
    coroutine.cn(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).pm = function () {
    return protoOf(ChannelCoroutine).pm.call(this);
  };
  protoOf(ProducerCoroutine).v17 = function (value) {
    this.c17_1.o16();
  };
  protoOf(ProducerCoroutine).qm = function (value) {
    return this.v17(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).rm = function (cause, handled) {
    var processed = this.c17_1.m16(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.nm_1, cause);
    }
  };
  protoOf(ProducerCoroutine).q16 = function (cause, $super) {
    return this.yn(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function emptyFlow() {
    return EmptyFlow_getInstance();
  }
  function EmptyFlow() {
    EmptyFlow_instance = this;
  }
  protoOf(EmptyFlow).w17 = function (collector, $completion) {
    return Unit_getInstance();
  };
  protoOf(EmptyFlow).x17 = function (collector, $completion) {
    return this.w17(collector, $completion);
  };
  var EmptyFlow_instance;
  function EmptyFlow_getInstance() {
    if (EmptyFlow_instance == null)
      new EmptyFlow();
    return EmptyFlow_instance;
  }
  function channelFlow(block) {
    return new ChannelFlowBuilder(block);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.b18_1 = block;
  }
  protoOf(ChannelFlowBuilder).c18 = function (scope, $completion) {
    return this.b18_1(scope, $completion);
  };
  protoOf(ChannelFlowBuilder).toString = function () {
    return 'block[' + this.b18_1 + '] -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.k18_1 = block;
  }
  protoOf(SafeFlow).l18 = function (collector, $completion) {
    return this.k18_1(collector, $completion);
  };
  function asFlow(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u18_1 = _this__u8e3s4;
    this.v18_1 = collector;
  }
  protoOf($collectCOROUTINE$12).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.w18_1 = this.u18_1.y18_1.d();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!this.w18_1.e()) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.x18_1 = this.w18_1.f();
            this.dl_1 = 2;
            suspendResult = this.v18_1.z18(this.x18_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function _no_name_provided__qut3iv($this_asFlow) {
    this.y18_1 = $this_asFlow;
  }
  protoOf(_no_name_provided__qut3iv).x17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$12(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$13(_this__u8e3s4, channel, consume, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function $emitAllImplCOROUTINE$13(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i19_1 = _this__u8e3s4;
    this.j19_1 = channel;
    this.k19_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$13).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 9;
            ensureActive_1(this.i19_1);
            this.l19_1 = null;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 7;
            this.el_1 = 6;
            this.n19_1 = this.j19_1.d();
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.dl_1 = 3;
            suspendResult = this.n19_1.s13(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.dl_1 = 5;
              continue $sm;
            }

            this.o19_1 = this.n19_1.f();
            this.dl_1 = 4;
            suspendResult = this.i19_1.z18(this.o19_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.dl_1 = 2;
            continue $sm;
          case 5:
            this.m19_1 = Unit_getInstance();
            this.el_1 = 9;
            this.dl_1 = 8;
            continue $sm;
          case 6:
            this.el_1 = 7;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              var e = this.gl_1;
              var tmp_1 = this;
              this.l19_1 = e;
              throw e;
            } else {
              throw this.gl_1;
            }

          case 7:
            this.el_1 = 9;
            var t = this.gl_1;
            if (this.k19_1) {
              cancelConsumed(this.j19_1, this.l19_1);
            }

            throw t;
          case 8:
            if (this.k19_1) {
              cancelConsumed(this.j19_1, this.l19_1);
            }

            return Unit_getInstance();
          case 9:
            throw this.gl_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.el_1 === 9) {
          throw e_0;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x19_1 = _this__u8e3s4;
    this.y19_1 = collector;
  }
  protoOf($collectCOROUTINE$14).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            var tmp_0 = this;
            tmp_0.z19_1 = new SafeCollector(this.y19_1, this.p5());
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.dl_1 = 2;
            suspendResult = this.x19_1.l18(this.z19_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a1a_1 = suspendResult;
            this.el_1 = 5;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.z19_1.f1a();
            return Unit_getInstance();
          case 4:
            this.el_1 = 5;
            var t = this.gl_1;
            this.z19_1.f1a();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).x17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function _get_head__d7jo8b($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.p1a_1;
    var tmp1_minOf = $this.o1a_1;
    return tmp0_minOf.x(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.q1a_1;
    return tmp0_plus.r7(toLong(tmp1_plus)).m9($this.o1a_1).f1();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.q1a_1 + $this.r1a_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.q1a_1;
    return tmp0_plus.r7(toLong(tmp1_plus));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.q1a_1;
    var tmp2_plus = tmp0_plus.r7(toLong(tmp1_plus));
    var tmp3_plus = $this.r1a_1;
    return tmp2_plus.r7(toLong(tmp3_plus));
  }
  function tryEmitLocked($this, value) {
    if ($this.t1a_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.q1a_1 >= $this.l1a_1 ? $this.p1a_1.x($this.o1a_1) <= 0 : false) {
      switch ($this.m1a_1.h7_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.q1a_1 = $this.q1a_1 + 1 | 0;
    if ($this.q1a_1 > $this.l1a_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.k1a_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = $this.o1a_1.r7(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.p1a_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.k1a_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.q1a_1 = $this.q1a_1 + 1 | 0;
    if ($this.q1a_1 > $this.k1a_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b($this);
    var tmp1_plus = $this.q1a_1;
    tmp.p1a_1 = tmp0_plus.r7(toLong(tmp1_plus));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.n1a_1), _get_head__d7jo8b($this), null);
    $this.q1a_1 = $this.q1a_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).r7(new Long(1, 0));
    if ($this.o1a_1.x(newHead) < 0)
      $this.o1a_1 = newHead;
    if ($this.p1a_1.x(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.t1a_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.s1a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.w1a_1.x(new Long(0, 0)) >= 0 ? element.w1a_1.x(newHead) < 0 : false) {
              element.w1a_1 = newHead;
            }
          }
        }
      }
    }
    $this.p1a_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.n1a_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$0 = _get_head__d7jo8b($this).r7(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp1_also = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.n1a_1 = tmp1_also;
    var newBuffer = tmp1_also;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.r7(toLong(i));
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.r7(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.n5(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = _get_head__d7jo8b($this);
      var tmp1_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp0_plus.r7(toLong(tmp1_plus));
      var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp2_also);
      $this.r1a_1 = $this.r1a_1 + 1 | 0;
      if ($this.l1a_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = tmp2_also;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$8;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_getInstance());
        r.n5(tmp$ret$8);
      }
    }
    return cancellable.lq();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.z1a_1.x(_get_head__d7jo8b($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.n1a_1);
    if (!(getBufferAt(buffer, emitter.z1a_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.z1a_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_getInstance();
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.x(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.x(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.r7(new Long(1, 0));
        setBufferAt(ensureNotNull($this.n1a_1), index, null);
      }
       while (inductionVariable.x(newHead) < 0);
    $this.o1a_1 = newReplayIndex;
    $this.p1a_1 = newMinCollectorIndex;
    $this.q1a_1 = newBufferEndIndex.m9(newHead).f1();
    $this.r1a_1 = newQueueEndIndex.m9(newBufferEndIndex).f1();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.l1a_1 === 0 ? $this.r1a_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.n1a_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.r1a_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$1 = tmp0_plus.r7(toLong(tmp1_plus)).m9(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.r1a_1 = $this.r1a_1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.r7(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.x(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.w1a_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.w1a_1 = index.r7(new Long(1, 0));
      resumes = $this.c1b(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        resume.n5(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.w1a_1;
    if (index.x(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.l1a_1 > 0)
      return new Long(-1, -1);
    if (index.x(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.r1a_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.n1a_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.a1b_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.x(new Long(0, 0)) < 0) {
        slot.x1a_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.n5(tmp$ret$0);
        break $l$block;
      }
      slot.x1a_1 = cancellable;
    }
    return cancellable.lq();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.t1a_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.s1a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.x1a_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).x(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.x1a_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.y1a_1 = flow;
    this.z1a_1 = index;
    this.a1b_1 = value;
    this.b1b_1 = cont;
  }
  protoOf(Emitter).gp = function () {
    return cancelEmitter(this.y1a_1, this);
  };
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1b_1 = _this__u8e3s4;
    this.m1b_1 = collector;
  }
  protoOf($collectCOROUTINE$15).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 13;
            this.n1b_1 = this.l1b_1.r1b();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 12;
            var tmp_0 = this.m1b_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.dl_1 = 2;
              suspendResult = this.m1b_1.u1b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.p1b_1 = this.p5().u6(Key_getInstance_3());
            this.dl_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.dl_1 = 10;
              continue $sm;
            }

            this.dl_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.dl_1 = 8;
              continue $sm;
            }

            this.q1b_1 = tryTakeValue(this.l1b_1, this.n1b_1);
            if (!(this.q1b_1 === get_NO_VALUE())) {
              this.dl_1 = 8;
              continue $sm;
            } else {
              this.dl_1 = 6;
              continue $sm;
            }

          case 6:
            this.dl_1 = 7;
            suspendResult = awaitValue(this.l1b_1, this.n1b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.dl_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.p1b_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.dl_1 = 9;
            var tmp_2 = this.q1b_1;
            suspendResult = this.m1b_1.z18((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.dl_1 = 4;
            continue $sm;
          case 10:
            this.o1b_1 = Unit_getInstance();
            this.el_1 = 13;
            this.dl_1 = 11;
            continue $sm;
          case 11:
            this.l1b_1.v1b(this.n1b_1);
            return Unit_getInstance();
          case 12:
            this.el_1 = 13;
            var t = this.gl_1;
            this.l1b_1.v1b(this.n1b_1);
            throw t;
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
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.k1a_1 = replay;
    this.l1a_1 = bufferCapacity;
    this.m1a_1 = onBufferOverflow;
    this.n1a_1 = null;
    this.o1a_1 = new Long(0, 0);
    this.p1a_1 = new Long(0, 0);
    this.q1a_1 = 0;
    this.r1a_1 = 0;
  }
  protoOf(SharedFlowImpl).w1b = function () {
    var tmp = ensureNotNull(this.n1a_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.o1a_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$1 = tmp0_plus.r7(toLong(tmp1_plus)).m9(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).x1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(SharedFlowImpl).x17 = function (collector, $completion) {
    return this.x1b(collector, $completion);
  };
  protoOf(SharedFlowImpl).y1b = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.n5(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).z18 = function (value, $completion) {
    if (this.y1b(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).z1b = function () {
    var index = this.o1a_1;
    if (index.x(this.p1a_1) < 0)
      this.p1a_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).c1b = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.x(this.p1a_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.q1a_1;
    var newMinCollectorIndex = head.r7(toLong(tmp0_plus));
    if (this.l1a_1 === 0 ? this.r1a_1 > 0 : false) {
      newMinCollectorIndex = newMinCollectorIndex.pk();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.t1a_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.s1a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.w1a_1.x(new Long(0, 0)) >= 0 ? element.w1a_1.x(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.w1a_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.x(this.p1a_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.t1a_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.m9(newMinCollectorIndex).f1();
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.r1a_1;
      var tmp2_minOf = this.l1a_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp1_minOf, tmp2_minOf);
    } else {
      tmp = this.r1a_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.r1a_1;
    var newQueueEndIndex = tmp3_plus.r7(toLong(tmp4_plus));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.n1a_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.x(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.r7(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.b1b_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.a1b_1);
            newBufferEndIndex = newBufferEndIndex.pk();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.x(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.m9(head).f1();
    if (this.t1a_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.o1a_1;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.k1a_1;
    var tmp7_minus = Math.min(tmp5_minOf, newBufferSize1);
    var tmp9_maxOf = tmp6_minus.m9(toLong(tmp7_minus));
    var newReplayIndex = tmp8_maxOf.x(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    if ((this.l1a_1 === 0 ? newReplayIndex.x(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.n1a_1), newReplayIndex), get_NO_VALUE()) : false) {
      newBufferEndIndex = newBufferEndIndex.pk();
      newReplayIndex = newReplayIndex.pk();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).a1c = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).b1c = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.w1a_1 = new Long(-1, -1);
    this.x1a_1 = null;
  }
  protoOf(SharedFlowSlot).c1c = function (flow) {
    if (this.w1a_1.x(new Long(0, 0)) >= 0)
      return false;
    this.w1a_1 = flow.z1b();
    return true;
  };
  protoOf(SharedFlowSlot).d1c = function (flow) {
    return this.c1c(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).e1c = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.w1a_1;
    this.w1a_1 = new Long(-1, -1);
    this.x1a_1 = null;
    return flow.c1b(oldIndex);
  };
  protoOf(SharedFlowSlot).f1c = function (flow) {
    return this.e1c(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().MAX_VALUE : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.k1c_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.k1c_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.l1c_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.l1c_1 = curSequence;
    } else {
      $this.l1c_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.s1a_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.n1c();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.l1c_1 === curSequence) {
        $this.l1c_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.l1c_1;
      curSlots = $this.s1a_1;
    }
  }
  function $collectCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1c_1 = _this__u8e3s4;
    this.x1c_1 = collector;
  }
  protoOf($collectCOROUTINE$16).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 12;
            this.y1c_1 = this.w1c_1.r1b();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 11;
            var tmp_0 = this.x1c_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.dl_1 = 2;
              suspendResult = this.x1c_1.u1b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 2:
            this.dl_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.a1d_1 = this.p5().u6(Key_getInstance_3());
            this.b1d_1 = null;
            this.dl_1 = 4;
            continue $sm;
          case 4:
            if (false) {
              this.dl_1 = 9;
              continue $sm;
            }

            this.c1d_1 = this.w1c_1.k1c_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.a1d_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.b1d_1 == null ? true : !equals(this.b1d_1, this.c1d_1)) {
              this.dl_1 = 5;
              var tmp0_unbox = get_NULL();
              var tmp_2;
              if (this.c1d_1 === tmp0_unbox) {
                tmp_2 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_3 = this.c1d_1;
                tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              }
              suspendResult = this.x1c_1.z18(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 6;
              continue $sm;
            }

          case 5:
            this.b1d_1 = this.c1d_1;
            this.dl_1 = 6;
            continue $sm;
          case 6:
            if (!this.y1c_1.e1d()) {
              this.dl_1 = 7;
              suspendResult = this.y1c_1.d1d(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 8;
              continue $sm;
            }

          case 7:
            this.dl_1 = 8;
            continue $sm;
          case 8:
            this.dl_1 = 4;
            continue $sm;
          case 9:
            this.z1c_1 = Unit_getInstance();
            this.el_1 = 12;
            this.dl_1 = 10;
            continue $sm;
          case 10:
            this.w1c_1.v1b(this.y1c_1);
            return Unit_getInstance();
          case 11:
            this.el_1 = 12;
            var t = this.gl_1;
            this.w1c_1.v1b(this.y1c_1);
            throw t;
          case 12:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 12) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.k1c_1 = atomic$ref$1(initialState);
    this.l1c_1 = 0;
  }
  protoOf(StateFlowImpl).f1d = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).s = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.k1c_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).g1d = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).y1b = function (value) {
    this.f1d(value);
    return true;
  };
  protoOf(StateFlowImpl).z18 = function (value, $completion) {
    this.f1d(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).x1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$16(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(StateFlowImpl).x17 = function (collector, $completion) {
    return this.x1b(collector, $completion);
  };
  protoOf(StateFlowImpl).a1c = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).b1c = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.m1c_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).h1d = function (flow) {
    if (!(this.m1c_1.kotlinx$atomicfu$value == null))
      return false;
    this.m1c_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  protoOf(StateFlowSlot).d1c = function (flow) {
    return this.h1d(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).i1d = function (flow) {
    this.m1c_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).f1c = function (flow) {
    return this.i1d(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).n1c = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.m1c_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous == null)
        return Unit_getInstance();
      else if (tmp1_anonymous === get_PENDING())
        return Unit_getInstance();
      else if (tmp1_anonymous === get_NONE()) {
        if (this.m1c_1.atomicfu$compareAndSet(tmp1_anonymous, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this.m1c_1.atomicfu$compareAndSet(tmp1_anonymous, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = tmp1_anonymous instanceof CancellableContinuationImpl ? tmp1_anonymous : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp0_resume.n5(tmp$ret$0);
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).e1d = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.m1c_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).d1d = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.m1c_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.n5(tmp$ret$1);
    }
    return cancellable.lq();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.s1a_1 = null;
    this.t1a_1 = 0;
    this.u1a_1 = 0;
    this.v1a_1 = null;
  }
  protoOf(AbstractSharedFlow).r1b = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.s1a_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = this.b1c(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.s1a_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      var tmp_0;
      if (this.t1a_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.s1a_1 = tmp1_also;
        tmp_0 = tmp1_also;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.u1a_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp2_also = this.a1c();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp_1 = tmp2_also;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).d1c(this))
        break $l$loop;
    }
    this.u1a_1 = index;
    this.t1a_1 = this.t1a_1 + 1 | 0;
    subscriptionCount = this.v1a_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.v1d(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).v1b = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.t1a_1 = this.t1a_1 - 1 | 0;
    subscriptionCount = this.v1a_1;
    if (this.t1a_1 === 0)
      this.u1a_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).f1c(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.n5(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.v1d(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.e1e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).g1e = function (it, $completion) {
    var tmp = this.h1e(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).yl = function (p1, $completion) {
    return this.g1e((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.e1e_1.c18(this.f1e_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).h1e = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.e1e_1, completion);
    i.f1e_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.g1e(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.q1e_1 = $collector;
    this.r1e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).t1e = function ($this$coroutineScope, $completion) {
    var tmp = this.u1e($this$coroutineScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ChannelFlow$collect$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = emitAll(this.q1e_1, this.r1e_1.i18(this.s1e_1), this);
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
  protoOf(ChannelFlow$collect$slambda).u1e = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.q1e_1, this.r1e_1, completion);
    i.s1e_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.t1e($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.d18_1 = context;
    this.e18_1 = capacity;
    this.f18_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).g18 = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).h18 = function () {
    var tmp;
    Factory_getInstance();
    if (this.e18_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.e18_1;
    }
    return tmp;
  };
  protoOf(ChannelFlow).i18 = function (scope) {
    return produce(scope, this.d18_1, this.h18(), this.f18_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.g18());
  };
  protoOf(ChannelFlow).x17 = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).j18 = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.j18();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.a(tmp0_safe_receiver);
    }
    if (!(this.d18_1 === EmptyCoroutineContext_getInstance())) {
      props.a('context=' + this.d18_1);
    }
    Factory_getInstance();
    if (!(this.e18_1 === -3)) {
      props.a('capacity=' + this.e18_1);
    }
    if (!this.f18_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.a('onBufferOverflow=' + this.f18_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function combineInternal(_this__u8e3s4, flows, arrayFactory, transform, $completion) {
    return flowScope(combineInternal$slambda_0(flows, arrayFactory, transform, _this__u8e3s4, null), $completion);
  }
  function combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation) {
    this.d1f_1 = $resultChannel;
    this.e1f_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda$slambda).g1f = function (value, $completion) {
    var tmp = this.h1f(value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(combineInternal$slambda$slambda$slambda).yl = function (p1, $completion) {
    return this.g1f((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = this.d1f_1.f16(new IndexedValue(this.e1f_1, this.f1f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dl_1 = 2;
            suspendResult = yield_0(this);
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
  protoOf(combineInternal$slambda$slambda$slambda).h1f = function (value, completion) {
    var i = new combineInternal$slambda$slambda$slambda(this.d1f_1, this.e1f_1, completion);
    i.f1f_1 = value;
    return i;
  };
  function combineInternal$slambda$slambda$slambda_0($resultChannel, $i, resultContinuation) {
    var i = new combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation);
    var l = function (value, $completion) {
      return i.g1f(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.i1f_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z18 = function (value, $completion) {
    return this.i1f_1(value, $completion);
  };
  function combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    this.r1f_1 = $flows;
    this.s1f_1 = $i;
    this.t1f_1 = $nonClosed;
    this.u1f_1 = $resultChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(combineInternal$slambda$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 4;
            this.dl_1 = 2;
            var tmp_0 = this.r1f_1[this.s1f_1];
            var tmp_1 = combineInternal$slambda$slambda$slambda_0(this.u1f_1, this.s1f_1, null);
            suspendResult = tmp_0.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1f_1 = suspendResult;
            this.el_1 = 5;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            if (this.t1f_1.y1f() === 0) {
              this.u1f_1.o16();
            }

            return Unit_getInstance();
          case 4:
            this.el_1 = 5;
            var t = this.gl_1;
            if (this.t1f_1.y1f() === 0) {
              this.u1f_1.o16();
            }

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
  protoOf(combineInternal$slambda$slambda).u1e = function ($this$launch, completion) {
    var i = new combineInternal$slambda$slambda(this.r1f_1, this.s1f_1, this.t1f_1, this.u1f_1, completion);
    i.v1f_1 = $this$launch;
    return i;
  };
  function combineInternal$slambda$slambda_0($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    var i = new combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    this.h1g_1 = $flows;
    this.i1g_1 = $arrayFactory;
    this.j1g_1 = $transform;
    this.k1g_1 = $this_combineInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda).t1e = function ($this$flowScope, $completion) {
    var tmp = this.u1e($this$flowScope, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(combineInternal$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            this.m1g_1 = this.h1g_1.length;
            if (this.m1g_1 === 0)
              return Unit_getInstance();
            var tmp_0 = this;
            tmp_0.n1g_1 = fillArrayVal(Array(this.m1g_1), null);
            fill(this.n1g_1, get_UNINITIALIZED());
            this.o1g_1 = Channel(this.m1g_1);
            this.p1g_1 = new LocalAtomicInt(this.m1g_1);
            this.q1g_1 = this.m1g_1;
            var inductionVariable = 0;
            var last = this.m1g_1;
            if (inductionVariable < last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                launch(this.l1g_1, VOID, VOID, combineInternal$slambda$slambda_0(this.h1g_1, i, this.p1g_1, this.o1g_1, null));
              }
               while (inductionVariable < last);
            this.r1g_1 = new Int8Array(this.m1g_1);
            this.s1g_1 = 0;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.dl_1 = 9;
              continue $sm;
            }

            this.s1g_1 = numberToByte(this.s1g_1 + 1);
            this.dl_1 = 2;
            suspendResult = this.o1g_1.j16(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.t1g_1 = suspendResult.l13_1;
            suspendResult = new ChannelResult(this.t1g_1);
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.u1g_1 = suspendResult.l13_1;
            this.v1g_1 = ChannelResult__getOrNull_impl_f5e07h(this.u1g_1);
            if (this.v1g_1 == null) {
              this.dl_1 = 9;
              var tmp_1 = this;
              continue $sm;
            } else {
              this.w1g_1 = this.v1g_1;
              this.dl_1 = 4;
              continue $sm;
            }

          case 4:
            this.x1g_1 = this.w1g_1;
            $l$loop_0: while (true) {
              var index = this.x1g_1.n4_1;
              var previous = this.n1g_1[index];
              this.n1g_1[index] = this.x1g_1.o4_1;
              if (previous === get_UNINITIALIZED()) {
                this.q1g_1 = this.q1g_1 - 1 | 0;
              }
              if (this.r1g_1[index] === this.s1g_1)
                break $l$loop_0;
              this.r1g_1[index] = this.s1g_1;
              var tmp_2 = this;
              var tmp2_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.o1g_1.k16());
              var tmp_3;
              if (tmp2_elvis_lhs == null) {
                break $l$loop_0;
              } else {
                tmp_3 = tmp2_elvis_lhs;
              }
              tmp_2.x1g_1 = tmp_3;
            }

            if (this.q1g_1 === 0) {
              this.y1g_1 = this.i1g_1();
              if (this.y1g_1 == null) {
                this.dl_1 = 6;
                var tmp_4 = this.n1g_1;
                suspendResult = this.j1g_1(this.k1g_1, isArray(tmp_4) ? tmp_4 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_5 = this.n1g_1;
                var tmp0_copyInto = isArray(tmp_5) ? tmp_5 : THROW_CCE();
                var tmp1_copyInto = tmp0_copyInto.length;
                arrayCopy(tmp0_copyInto, this.y1g_1, 0, 0, tmp1_copyInto);
                this.dl_1 = 5;
                var tmp_6 = this.y1g_1;
                suspendResult = this.j1g_1(this.k1g_1, (!(tmp_6 == null) ? isArray(tmp_6) : false) ? tmp_6 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.dl_1 = 8;
              continue $sm;
            }

          case 5:
            this.dl_1 = 7;
            continue $sm;
          case 6:
            this.dl_1 = 7;
            continue $sm;
          case 7:
            this.dl_1 = 8;
            continue $sm;
          case 8:
            this.dl_1 = 1;
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 10) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  protoOf(combineInternal$slambda).u1e = function ($this$flowScope, completion) {
    var i = new combineInternal$slambda(this.h1g_1, this.i1g_1, this.j1g_1, this.k1g_1, completion);
    i.l1g_1 = $this$flowScope;
    return i;
  };
  function combineInternal$slambda_0($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    var i = new combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.t1e($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function flowScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.flow.internal.flowScope.<anonymous>' call
    var coroutine = new FlowCoroutine($completion.p5(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).bo = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.co(cause);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.d1h_1 === owner))
      throw _this__u8e3s4;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.a7(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.d1a_1)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.c1a_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.in();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.r();
      var collectElement = $this_checkContext.c1a_1.u6(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.e1h_1;
  }
  function ThrowingCollector() {
  }
  function catch_0(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4, action);
  }
  function catchImpl(_this__u8e3s4, collector, $completion) {
    var tmp = new $catchImplCOROUTINE$19(_this__u8e3s4, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function isSameExceptionAs(_this__u8e3s4, other) {
    return !(other == null) ? equals(unwrap(other), unwrap(_this__u8e3s4)) : false;
  }
  function isCancellationCause(_this__u8e3s4, coroutineContext) {
    var job = coroutineContext.u6(Key_getInstance_3());
    if (job == null ? true : !job.ln())
      return false;
    return isSameExceptionAs(_this__u8e3s4, job.on());
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.q1h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).z18 = function (value, $completion) {
    return this.q1h_1(value, $completion);
  };
  function $collectCOROUTINE$20(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1h_1 = _this__u8e3s4;
    this.a1i_1 = collector;
  }
  protoOf($collectCOROUTINE$20).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            suspendResult = catchImpl(this.z1h_1.c1i_1, this.a1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b1i_1 = suspendResult;
            if (!(this.b1i_1 == null)) {
              this.dl_1 = 2;
              suspendResult = this.z1h_1.d1i_1(this.a1i_1, this.b1i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_0($this_catch, $action) {
    this.c1i_1 = $this_catch;
    this.d1i_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_0).x17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$20(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function catchImpl$slambda($collector, $fromDownstream, resultContinuation) {
    this.m1i_1 = $collector;
    this.n1i_1 = $fromDownstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(catchImpl$slambda).g1f = function (it, $completion) {
    var tmp = this.h1f(it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(catchImpl$slambda).yl = function (p1, $completion) {
    return this.g1f((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(catchImpl$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.m1i_1.z18(this.o1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_0 = this.gl_1;
            if (tmp_0 instanceof Error) {
              var e = this.gl_1;
              this.n1i_1._v = e;
              throw e;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            return Unit_getInstance();
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
  protoOf(catchImpl$slambda).h1f = function (it, completion) {
    var i = new catchImpl$slambda(this.m1i_1, this.n1i_1, completion);
    i.o1i_1 = it;
    return i;
  };
  function catchImpl$slambda_0($collector, $fromDownstream, resultContinuation) {
    var i = new catchImpl$slambda($collector, $fromDownstream, resultContinuation);
    var l = function (it, $completion) {
      return i.g1f(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $catchImplCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1h_1 = _this__u8e3s4;
    this.o1h_1 = collector;
  }
  protoOf($catchImplCOROUTINE$19).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.p1h_1 = {_v: null};
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = catchImpl$slambda_0(this.o1h_1, this.p1h_1, null);
            suspendResult = this.n1h_1.x17(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof Error) {
              var e = this.gl_1;
              var fromDownstream = this.p1h_1._v;
              var tmp_2;
              if (isSameExceptionAs(e, fromDownstream)) {
                tmp_2 = true;
              } else {
                tmp_2 = isCancellationCause(e, this.p5());
              }
              if (tmp_2) {
                throw e;
              } else {
                if (fromDownstream == null) {
                  return e;
                }
                if (e instanceof CancellationException) {
                  addSuppressed(fromDownstream, e);
                  throw fromDownstream;
                } else {
                  addSuppressed(e, fromDownstream);
                  throw e;
                }
              }
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            return null;
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
  function $onSubscriptionCOROUTINE$25(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1i_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$25).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 7;
            var tmp_0 = this;
            tmp_0.y1i_1 = new SafeCollector(this.x1i_1.s1b_1, this.p5());
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.el_1 = 6;
            this.dl_1 = 2;
            suspendResult = this.x1i_1.t1b_1(this.y1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z1i_1 = suspendResult;
            this.el_1 = 7;
            this.dl_1 = 3;
            continue $sm;
          case 3:
            this.y1i_1.f1a();
            var tmp_1 = this.x1i_1.s1b_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.dl_1 = 4;
              suspendResult = this.x1i_1.s1b_1.u1b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.dl_1 = 5;
              continue $sm;
            }

          case 4:
            this.dl_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.el_1 = 7;
            var t = this.gl_1;
            this.y1i_1.f1a();
            throw t;
          case 7:
            throw this.gl_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.el_1 === 7) {
          throw e;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).u1b = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$25(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function $collectCOROUTINE$26(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1j_1 = _this__u8e3s4;
    this.j1j_1 = collector;
  }
  protoOf($collectCOROUTINE$26).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.i1j_1.l1j_1.x1b(this.j1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.k1j_1 = job;
    this.l1j_1 = flow;
  }
  protoOf(ReadonlyStateFlow).s = function () {
    return this.l1j_1.s();
  };
  protoOf(ReadonlyStateFlow).x1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$26(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ReadonlyStateFlow).x17 = function (collector, $completion) {
    return this.x1b(collector, $completion);
  };
  function combine(_this__u8e3s4, flow, transform) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4, flow, transform);
  }
  function nullArrayFactory() {
    return nullArrayFactory$lambda;
  }
  function combine$o$collect$slambda($transform, resultContinuation) {
    this.u1j_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$collect$slambda).y1j = function ($this$combineInternal, it, $completion) {
    var tmp = this.z1j($this$combineInternal, it, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(combine$o$collect$slambda).ua = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.y1j(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$collect$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            var tmp_0 = this.w1j_1[0];
            var tmp_1 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp_2 = this.w1j_1[1];
            suspendResult = this.u1j_1(tmp_1, (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x1j_1 = suspendResult;
            this.dl_1 = 2;
            suspendResult = this.v1j_1.z18(this.x1j_1, this);
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
  protoOf(combine$o$collect$slambda).z1j = function ($this$combineInternal, it, completion) {
    var i = new combine$o$collect$slambda(this.u1j_1, completion);
    i.v1j_1 = $this$combineInternal;
    i.w1j_1 = it;
    return i;
  };
  function combine$o$collect$slambda_0($transform, resultContinuation) {
    var i = new combine$o$collect$slambda($transform, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.y1j($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$29(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1k_1 = _this__u8e3s4;
    this.j1k_1 = collector;
  }
  protoOf($collectCOROUTINE$29).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            var tmp_0 = nullArrayFactory();
            suspendResult = combineInternal(this.j1k_1, [this.i1k_1.k1k_1, this.i1k_1.l1k_1], tmp_0, combine$o$collect$slambda_0(this.i1k_1.m1k_1, null), this);
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
  function _no_name_provided__qut3iv_1($this_combine, $flow, $transform) {
    this.k1k_1 = $this_combine;
    this.l1k_1 = $flow;
    this.m1k_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_1).n1k = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$29(this, collector, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(_no_name_provided__qut3iv_1).x17 = function (collector, $completion) {
    return this.n1k(collector, $completion);
  };
  function nullArrayFactory$lambda() {
    return null;
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.x17(_this__u8e3s4, $completion);
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$30(_this__u8e3s4, predicate, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function firstOrNull(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstOrNullCOROUTINE$31(_this__u8e3s4, predicate, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function $emitCOROUTINE$32(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1l_1 = _this__u8e3s4;
    this.v1l_1 = value;
  }
  protoOf($emitCOROUTINE$32).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            suspendResult = this.u1l_1.x1l_1(this.v1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.u1l_1.y1l_1._v = this.v1l_1;
              tmp_0.w1l_1 = false;
              this.dl_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.w1l_1 = true;
              this.dl_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.w1l_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.u1l_1);
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_2($predicate, $result) {
    this.x1l_1 = $predicate;
    this.y1l_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_2).z18 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$32(this, value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function $emitCOROUTINE$33(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1m_1 = _this__u8e3s4;
    this.i1m_1 = value;
  }
  protoOf($emitCOROUTINE$33).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            suspendResult = this.h1m_1.k1m_1(this.i1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.h1m_1.l1m_1._v = this.i1m_1;
              tmp_0.j1m_1 = false;
              this.dl_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.j1m_1 = true;
              this.dl_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.j1m_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.h1m_1);
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_3($predicate, $result) {
    this.k1m_1 = $predicate;
    this.l1m_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_3).z18 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$33(this, value, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  function $firstCOROUTINE$30(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1k_1 = _this__u8e3s4;
    this.x1k_1 = predicate;
  }
  protoOf($firstCOROUTINE$30).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.y1k_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.z1k_1 = new _no_name_provided__qut3iv_2(this.x1k_1, this.y1k_1);
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.w1k_1.x17(this.z1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 3;
            this.dl_1 = 4;
            continue $sm;
          case 2:
            this.el_1 = 3;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.gl_1;
              checkOwnership(e, this.z1k_1);
              this.dl_1 = 4;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            throw this.gl_1;
          case 4:
            this.el_1 = 3;
            if (this.y1k_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + this.x1k_1);
            var tmp_2 = this.y1k_1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
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
  function $firstOrNullCOROUTINE$31(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1l_1 = _this__u8e3s4;
    this.j1l_1 = predicate;
  }
  protoOf($firstOrNullCOROUTINE$31).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.k1l_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.l1l_1 = new _no_name_provided__qut3iv_3(this.j1l_1, this.k1l_1);
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.i1l_1.x17(this.l1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.el_1 = 4;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            this.el_1 = 4;
            var tmp_1 = this.gl_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.gl_1;
              checkOwnership(e, this.l1l_1);
              this.dl_1 = 3;
              continue $sm;
            } else {
              throw this.gl_1;
            }

          case 3:
            this.el_1 = 4;
            return this.k1l_1._v;
          case 4:
            throw this.gl_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.el_1 === 4) {
          throw e_0;
        } else {
          this.dl_1 = this.el_1;
          this.gl_1 = e_0;
        }
      }
     while (true);
  };
  function OpDescriptor() {
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.ps_1 = id;
    this.qs_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).r11 = function () {
    return this.qs_1.kotlinx$atomicfu$value === this.t10() ? !this.y11() : false;
  };
  protoOf(Segment).s11 = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var tmp0_addConditionally = this.qs_1;
      while (true) {
        var cur = tmp0_addConditionally.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.t10()) ? true : this.y11())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0_addConditionally.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).t11 = function () {
    return this.qs_1.atomicfu$addAndGet(-65536) === this.t10() ? !this.y11() : false;
  };
  protoOf(Segment).q11 = function () {
    if (this.qs_1.atomicfu$incrementAndGet() === this.t10()) {
      this.b5();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var tmp0_nextOrIfClosed = cur;
      // Inline function 'kotlin.let' call
      var tmp0_let = _get_nextOrClosed__w0gmuv(tmp0_nextOrIfClosed);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var tmp;
      if (tmp0_let === get_CLOSED()) {
        return cur;
      } else {
        tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.b12())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      throw IllegalStateException_init_$Create$('Does not contain segment');
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.u11_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.z11();
    while (!(cur === null) ? cur.r11() : false)
      cur = cur.v11_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.w11());
    while (cur.r11()) {
      var tmp0_elvis_lhs = cur.w11();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this.u11_1 = atomic$ref$1(null);
    this.v11_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).w11 = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_nextOrClosed__w0gmuv(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var tmp;
    if (tmp0_let === get_CLOSED()) {
      return null;
    } else {
      tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).x11 = function (value) {
    return this.u11_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).y11 = function () {
    return this.w11() == null;
  };
  protoOf(ConcurrentLinkedListNode).z11 = function () {
    return this.v11_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).a12 = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.v11_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).b12 = function () {
    return this.u11_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).b5 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.y11())
      return Unit_getInstance();
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var tmp0_update = next.v11_1;
        while (true) {
          var cur = tmp0_update.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.u11_1.kotlinx$atomicfu$value = next;
      if (next.r11() ? !next.y11() : false)
        continue $l$loop_0;
      if (!(prev === null) ? prev.r11() : false)
        continue $l$loop_0;
      return Unit_getInstance();
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.ps_1.x(id) < 0 ? true : cur.r11()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var tmp0_nextOrIfClosed = cur;
      // Inline function 'kotlin.let' call
      var tmp0_let = _get_nextOrClosed__w0gmuv(tmp0_nextOrIfClosed);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var tmp;
      if (tmp0_let === get_CLOSED()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (tmp0_let == null ? true : tmp0_let instanceof ConcurrentLinkedListNode) ? tmp0_let : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.ps_1.r7(new Long(1, 0)), cur);
      if (cur.x11(newTail)) {
        if (cur.r11()) {
          cur.b5();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().d();
    while (tmp0_iterator.e()) {
      var handler = tmp0_iterator.f();
      try {
        handler.tu(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_getInstance();
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.hs_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.ds_1 = dispatcher;
    this.es_1 = continuation;
    this.fs_1 = get_UNDEFINED();
    this.gs_1 = threadContextElements(this.p5());
    this.hs_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).p5 = function () {
    return this.es_1.p5();
  };
  protoOf(DispatchedContinuation).ks = function () {
    return !(this.hs_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).m1m = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hs_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(tmp0_loop.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).su = function () {
    this.m1m();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gt();
    }
  };
  protoOf(DispatchedContinuation).is = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hs_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous === null) {
        this.hs_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1_anonymous instanceof CancellableContinuationImpl) {
          if (this.hs_1.atomicfu$compareAndSet(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
            return tmp1_anonymous instanceof CancellableContinuationImpl ? tmp1_anonymous : THROW_CCE();
          }
        } else {
          if (tmp1_anonymous !== get_REUSABLE_CLAIMED()) {
            if (!(tmp1_anonymous instanceof Error)) {
              var tmp0_error = 'Inconsistent state ' + toString_0(tmp1_anonymous);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).pt = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hs_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous === get_REUSABLE_CLAIMED()) {
        if (this.hs_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1_anonymous instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.hs_1.atomicfu$compareAndSet(tmp1_anonymous, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return tmp1_anonymous;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString_0(tmp1_anonymous);
          throw IllegalStateException_init_$Create$(toString(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).ms = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.hs_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (equals(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
        if (this.hs_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp1_anonymous instanceof Error)
          return true;
        else {
          if (this.hs_1.atomicfu$compareAndSet(tmp1_anonymous, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).it = function () {
    var state = this.fs_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.fs_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).ht = function () {
    return this;
  };
  protoOf(DispatchedContinuation).n5 = function (result) {
    var context = this.es_1.p5();
    var state = toState_0(result);
    if (this.ds_1.pu(context)) {
      this.fs_1 = state;
      this.ls_1 = get_MODE_ATOMIC();
      this.ds_1.qu(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().qv();
        if (false ? eventLoop.lv() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.kv()) {
          this.fs_1 = state;
          this.ls_1 = tmp0_executeUnconfined;
          eventLoop.jv(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.mv(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.p5();
            this.gs_1;
            this.es_1.n5(result);
            $l$loop: while (eventLoop.iv()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.tt(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.nv(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).jt = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.nu_1(cause);
    }
  };
  protoOf(DispatchedContinuation).l10 = function (context, value) {
    this.fs_1 = value;
    this.ls_1 = get_MODE_CANCELLABLE();
    this.ds_1.ru(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.ds_1 + ', ' + toDebugString(this.es_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.ds_1.pu(_this__u8e3s4.p5())) {
        _this__u8e3s4.fs_1 = state;
        _this__u8e3s4.ls_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.ds_1.qu(_this__u8e3s4.p5(), _this__u8e3s4);
        tmp_0 = Unit_getInstance();
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().qv();
          if (false ? eventLoop.lv() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.kv()) {
            _this__u8e3s4.fs_1 = state;
            _this__u8e3s4.ls_1 = tmp0_executeUnconfined;
            eventLoop.jv(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.mv(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.p5().u6(Key_getInstance_3());
                if (!(job == null) ? !job.pm() : false) {
                  var cause = job.on();
                  _this__u8e3s4.jt(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.n5(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.es_1;
                _this__u8e3s4.gs_1;
                _this__u8e3s4.es_1.n5(result);
              }
              $l$loop: while (eventLoop.iv()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.tt(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.nv(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.n5(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().qv();
      if (eventLoop.lv()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.kv()) {
        _this__u8e3s4.fs_1 = Unit_getInstance();
        _this__u8e3s4.ls_1 = tmp0_executeUnconfined;
        eventLoop.jv(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.mv(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.st();
          $l$loop: while (eventLoop.iv()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.tt(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.nv(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ls_1 = resumeMode;
  }
  protoOf(DispatchedTask).jt = function (takenState, cause) {
  };
  protoOf(DispatchedTask).ot = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).rt = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.um_1;
  };
  protoOf(DispatchedTask).st = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.ht();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.es_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.gs_1;
      var context = continuation.p5();
      var state = this.it();
      var exception = this.rt(state);
      var job = (exception == null ? get_isCancellableMode(this.ls_1) : false) ? context.u6(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.pm() : false) {
        var cause = job.on();
        this.jt(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.n5(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.n5(tmp$ret$1);
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = this.ot(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
          continuation.n5(tmp$ret$3);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp_2 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.tt(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).tt = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.ht().p5(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.ht();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ls_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.ds_1;
      var context = delegate.p5();
      if (dispatcher.pu(context)) {
        dispatcher.qu(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().qv();
    if (eventLoop.kv()) {
      eventLoop.jv(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.mv(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.ht(), true);
        $l$loop: while (eventLoop.iv()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.tt(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.nv(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.it();
    var exception = _this__u8e3s4.rt(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp2_success = _this__u8e3s4.ot(state);
      tmp = _Result___init__impl__xyqfz8(tmp2_success);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      tmp3_resumeUndispatchedWith.es_1;
      tmp3_resumeUndispatchedWith.gs_1;
      tmp3_resumeUndispatchedWith.es_1.n5(result);
    } else {
      delegate.n5(result);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.n1m_1 = context;
  }
  protoOf(ContextScope).om = function () {
    return this.n1m_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.n1m_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.cr_1 = uCont;
  }
  protoOf(ScopeCoroutine).go = function () {
    return true;
  };
  protoOf(ScopeCoroutine).zm = function (state) {
    resumeCancellableWith(intercepted(this.cr_1), recoverResult(state, this.cr_1));
  };
  protoOf(ScopeCoroutine).ym = function (state) {
    this.cr_1.n5(recoverResult(state, this.cr_1));
  };
  function Symbol(symbol) {
    this.o1m_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.o1m_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).f1();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance_0();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.x(parsed) <= 0 ? parsed.x(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString(minValue) + '..' + toString(maxValue) + ", but is '" + toString(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.n5(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.yl(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.xm(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.um_1;
        if (true) {
          throw recoverStackTrace(state.um_1, _this__u8e3s4.cr_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.um_1, _this__u8e3s4.cr_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.yl(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.xm(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0_anonymous = state.um_1;
        var tmp_3;
        if (tmp0_anonymous instanceof TimeoutCancellationException) {
          tmp_3 = tmp0_anonymous.rz_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.um_1, _this__u8e3s4.cr_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.um_1, _this__u8e3s4.cr_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.p5();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.yl(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.n5(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.n5(tmp$ret$9);
      }
    }
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.o13_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.t1m($this, internalResult);
        if ($this.o13_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.q13_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.q13_1 = null;
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.o13_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, List)) {
                if ($this.o13_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                var tmp0_error = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.p13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = clauses.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.q1m_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).t1m = function (select, internalResult) {
    var tmp0_safe_receiver = this.s1m_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.r1m_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).r13 = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_getInstance();
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var tmp0_error = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.wr(Unit_getInstance(), null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.op(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      this$0.f1n_1.kotlinx$atomicfu$value = this$1.i1n_1;
      this$0.w1m(this$1.i1n_1);
      return Unit_getInstance();
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.w1m(this$1.i1n_1);
      return Unit_getInstance();
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.k1n())
        return 0;
      var curOwner = $this.f1n_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.nt();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.lq();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.s1n()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.f1n_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.j1n_1 = $outer;
    this.h1n_1 = cont;
    this.i1n_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).p5 = function () {
    return this.h1n_1.p5();
  };
  protoOf(CancellableContinuationWithOwner).ln = function () {
    return this.h1n_1.ln();
  };
  protoOf(CancellableContinuationWithOwner).kn = function () {
    return this.h1n_1.kn();
  };
  protoOf(CancellableContinuationWithOwner).xr = function (cause) {
    return this.h1n_1.xr(cause);
  };
  protoOf(CancellableContinuationWithOwner).op = function (token) {
    this.h1n_1.op(token);
  };
  protoOf(CancellableContinuationWithOwner).kq = function (handler) {
    this.h1n_1.kq(handler);
  };
  protoOf(CancellableContinuationWithOwner).o5 = function (result) {
    this.h1n_1.n5(result);
  };
  protoOf(CancellableContinuationWithOwner).n5 = function (result) {
    return this.o5(result);
  };
  protoOf(CancellableContinuationWithOwner).np = function (exception) {
    return this.h1n_1.np(exception);
  };
  protoOf(CancellableContinuationWithOwner).t1n = function (_this__u8e3s4, value) {
    this.h1n_1.zr(_this__u8e3s4, Unit_getInstance());
  };
  protoOf(CancellableContinuationWithOwner).zr = function (_this__u8e3s4, value) {
    return this.t1n(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).qt = function (segment, index) {
    this.h1n_1.qt(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).u1n = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.h1n_1.wr(Unit_getInstance(), idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.j1n_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.j1n_1.f1n_1.kotlinx$atomicfu$value = this.i1n_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).wr = function (value, idempotent, onCancellation) {
    return this.u1n(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).v1n = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.j1n_1.f1n_1.kotlinx$atomicfu$value = this.i1n_1;
    this.h1n_1.as(Unit_getInstance(), MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.j1n_1, this));
  };
  protoOf(CancellableContinuationWithOwner).as = function (value, onCancellation) {
    return this.v1n(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.w1m($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.f1n_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.g1n_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).k1n = function () {
    return this.w1n() === 0;
  };
  protoOf(MutexImpl).u1m = function (owner, $completion) {
    if (this.x1n(owner))
      return Unit_getInstance();
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).x1n = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var tmp0_error = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      default:
        throw IllegalStateException_init_$Create$('unexpected');
    }
    return tmp;
  };
  protoOf(MutexImpl).w1m = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.k1n()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.f1n_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(curOwner === owner ? true : owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.f1n_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.su();
      return Unit_getInstance();
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.k1n() + ',owner=' + toString_0(this.f1n_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.q1n_1.atomicfu$getAndDecrement();
      if (p > $this.l1n_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.q1n_1.kotlinx$atomicfu$value;
      if (cur <= $this.l1n_1)
        break $l$loop_0;
      if ($this.q1n_1.atomicfu$compareAndSet(cur, $this.l1n_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.o1n_1.kotlinx$atomicfu$value;
    var enqIdx = $this.p1n_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp1_findSegmentAndMoveForward = $this.o1n_1;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_SEGMENT_SIZE_0();
      var tmp2_findSegmentAndMoveForward = enqIdx.k9(toLong(tmp0_div));
      while (true) {
        var s = findSegmentInternal(curTail, tmp2_findSegmentAndMoveForward, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp0_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0_anonymous = tmp1_findSegmentAndMoveForward.kotlinx$atomicfu$value;
              if (tmp0_anonymous.ps_1.x(tmp0_moveForward.ps_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp0_moveForward.s11()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp1_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp0_moveForward)) {
                if (tmp0_anonymous.t11()) {
                  tmp0_anonymous.b5();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp0_moveForward.t11()) {
                tmp0_moveForward.b5();
              }
            }
            tmp$ret$1 = Unit_getInstance();
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    // Inline function 'kotlin.Long.rem' call
    var tmp3_rem = get_SEGMENT_SIZE_0();
    var i = enqIdx.ga(toLong(tmp3_rem)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.c1o_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.qt(segment, i);
      return true;
    }
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var tmp4_cas = get_PERMIT();
    var tmp5_cas = get_TAKEN();
    if (segment.c1o_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4_cas, tmp5_cas)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.as(Unit_getInstance(), $this.r1n_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.p1m(Unit_getInstance());
        } else {
          var tmp6_error = 'unexpected: ' + waiter;
          throw IllegalStateException_init_$Create$(toString(tmp6_error));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.m1n_1.kotlinx$atomicfu$value;
    var deqIdx = $this.n1n_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = get_SEGMENT_SIZE_0();
    var id = deqIdx.k9(toLong(tmp0_div));
    var createNewSegment = createSegment$ref_1();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var tmp1_findSegmentAndMoveForward = $this.m1n_1;
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp0_moveForward = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var tmp0_anonymous = tmp1_findSegmentAndMoveForward.kotlinx$atomicfu$value;
              if (tmp0_anonymous.ps_1.x(tmp0_moveForward.ps_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp0_moveForward.s11()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp1_findSegmentAndMoveForward.atomicfu$compareAndSet(tmp0_anonymous, tmp0_moveForward)) {
                if (tmp0_anonymous.t11()) {
                  tmp0_anonymous.b5();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp0_moveForward.t11()) {
                tmp0_moveForward.b5();
              }
            }
            tmp$ret$1 = Unit_getInstance();
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.a12();
    if (segment.ps_1.x(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var tmp2_rem = get_SEGMENT_SIZE_0();
    var i = deqIdx.ga(toLong(tmp2_rem)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var tmp3_getAndSet = get_PERMIT();
    var cellState = segment.c1o_1.atomicfu$get(i).atomicfu$getAndSet(tmp3_getAndSet);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var tmp4_repeat = get_MAX_SPIN_CYCLES();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp4_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.tryResumeNextFromQueue.<anonymous>' call
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.c1o_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < tmp4_repeat);
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var tmp5_cas = get_PERMIT();
      var tmp6_cas = get_BROKEN();
      return !segment.c1o_1.atomicfu$get(i).atomicfu$compareAndSet(tmp5_cas, tmp6_cas);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.wr(Unit_getInstance(), null, $this.r1n_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.op(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.j13($this, Unit_getInstance());
      } else {
        var tmp0_error = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.su();
      return Unit_getInstance();
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.l1n_1 = permits;
    this.n1n_1 = atomic$long$1(new Long(0, 0));
    this.p1n_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.l1n_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.l1n_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.l1n_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.l1n_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.m1n_1 = atomic$ref$1(s);
    this.o1n_1 = atomic$ref$1(s);
    this.q1n_1 = atomic$int$1(this.l1n_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.r1n_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).w1n = function () {
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.q1n_1.kotlinx$atomicfu$value;
    return Math.max(tmp0_max, 0);
  };
  protoOf(SemaphoreImpl).s1n = function () {
    $l$loop: while (true) {
      var p = this.q1n_1.kotlinx$atomicfu$value;
      if (p > this.l1n_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.q1n_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
          waiter.as(Unit_getInstance(), this.r1n_1);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).su = function () {
    while (true) {
      var p = this.q1n_1.atomicfu$getAndIncrement();
      if (p >= this.l1n_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var tmp0_error = 'The number of released permits cannot be greater than ' + this.l1n_1;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      if (p >= 0)
        return Unit_getInstance();
      if (tryResumeNextFromQueue(this))
        return Unit_getInstance();
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.c1o_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).t10 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).rs = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var tmp0_set = get_CANCELLED();
    this.c1o_1.atomicfu$get(index).kotlinx$atomicfu$value = tmp0_set;
    this.q11();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + toString(this.ps_1) + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().wu_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.om().b7(context);
    return (!(combined === Dispatchers_getInstance().wu_1) ? combined.u6(Key_getInstance()) == null : false) ? combined.b7(Dispatchers_getInstance().wu_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.b7(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).ym = function (state) {
    return this.cr_1.n5(recoverResult(state, this.cr_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).mh();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.wu_1 = createDefaultDispatcher();
    this.xu_1 = Unconfined_getInstance();
    this.yu_1 = new JsMainDispatcher(this.wu_1, false);
    this.zu_1 = null;
  }
  protoOf(Dispatchers).av = function () {
    var tmp0_elvis_lhs = this.zu_1;
    return tmp0_elvis_lhs == null ? this.yu_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.i1o_1 = delegate;
    this.j1o_1 = invokeImmediately;
    this.k1o_1 = this.j1o_1 ? this : new JsMainDispatcher(this.i1o_1, true);
  }
  protoOf(JsMainDispatcher).mz = function () {
    return this.k1o_1;
  };
  protoOf(JsMainDispatcher).pu = function (context) {
    return !this.j1o_1;
  };
  protoOf(JsMainDispatcher).qu = function (context, block) {
    return this.i1o_1.qu(context, block);
  };
  protoOf(JsMainDispatcher).ru = function (context, block) {
    return this.i1o_1.ru(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.nz();
    return tmp0_elvis_lhs == null ? this.i1o_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).qu = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.p1o_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.p1o_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.p1o_1, this.p1o_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.p1o_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).s1o = function () {
    process.nextTick(this.z1o_1.w1o_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).s1o = function () {
    setTimeout(this.z1o_1.w1o_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.f1p();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.x1o_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.w1o_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).g1p = function () {
    this.x1o_1.s1o();
  };
  protoOf(ScheduledMessageQueue).h1p = function () {
    setTimeout(this.w1o_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.st();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.zr(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.z1o_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).qu = function (context, block) {
    this.z1o_1.s1p(block);
  };
  protoOf(SetTimeoutBasedDispatcher).cv = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).bv = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ClearTimeout(handle);
    continuation.kq(tmp$ret$1);
  };
  function MessageQueue() {
    this.c1p_1 = ArrayDeque_init_$Create$();
    this.d1p_1 = 16;
    this.e1p_1 = false;
  }
  protoOf(MessageQueue).g = function () {
    return this.c1p_1.h3_1;
  };
  protoOf(MessageQueue).i1p = function (index, element) {
    this.c1p_1.v3(index, element);
  };
  protoOf(MessageQueue).v3 = function (index, element) {
    return this.i1p(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).j1p = function (element) {
    return this.c1p_1.a(element);
  };
  protoOf(MessageQueue).a = function (element) {
    return this.j1p((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).k1p = function (index, elements) {
    return this.c1p_1.w3(index, elements);
  };
  protoOf(MessageQueue).w3 = function (index, elements) {
    return this.k1p(index, elements);
  };
  protoOf(MessageQueue).l1p = function (elements) {
    return this.c1p_1.k(elements);
  };
  protoOf(MessageQueue).k = function (elements) {
    return this.l1p(elements);
  };
  protoOf(MessageQueue).a4 = function () {
    this.c1p_1.a4();
  };
  protoOf(MessageQueue).m1p = function (element) {
    return this.c1p_1.n(element);
  };
  protoOf(MessageQueue).n = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.m1p((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n1p = function (elements) {
    return this.c1p_1.o1(elements);
  };
  protoOf(MessageQueue).o1 = function (elements) {
    return this.n1p(elements);
  };
  protoOf(MessageQueue).m = function (index) {
    return this.c1p_1.m(index);
  };
  protoOf(MessageQueue).o1p = function (element) {
    return this.c1p_1.o(element);
  };
  protoOf(MessageQueue).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.o1p((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).l = function () {
    return this.c1p_1.l();
  };
  protoOf(MessageQueue).d = function () {
    return this.c1p_1.d();
  };
  protoOf(MessageQueue).p1p = function (element) {
    return this.c1p_1.j2(element);
  };
  protoOf(MessageQueue).j2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.p1p((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).u1 = function (index) {
    return this.c1p_1.u1(index);
  };
  protoOf(MessageQueue).q1p = function (element) {
    return this.c1p_1.y3(element);
  };
  protoOf(MessageQueue).y3 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.q1p((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).z3 = function (index) {
    return this.c1p_1.z3(index);
  };
  protoOf(MessageQueue).r1p = function (index, element) {
    return this.c1p_1.x3(index, element);
  };
  protoOf(MessageQueue).x3 = function (index, element) {
    return this.r1p(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).v1 = function (fromIndex, toIndex) {
    return this.c1p_1.v1(fromIndex, toIndex);
  };
  protoOf(MessageQueue).s1p = function (element) {
    this.j1p(element);
    if (!this.e1p_1) {
      this.e1p_1 = true;
      this.g1p();
    }
  };
  protoOf(MessageQueue).f1p = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.d1p_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.st();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.l()) {
        this.e1p_1 = false;
      } else {
        this.h1p();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).f1();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.t1p_1 = handle;
  }
  protoOf(ClearTimeout).gp = function () {
    clearTimeout(this.t1p_1);
  };
  protoOf(ClearTimeout).hp = function (cause) {
    this.gp();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.hp(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.t1p_1 + ']';
  };
  function WindowClearTimeout($outer, handle) {
    this.v1p_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).gp = function () {
    this.v1p_1.x1p_1.clearTimeout(this.t1p_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.zr(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.st();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.x1p_1 = window_0;
    this.y1p_1 = new WindowMessageQueue(this.x1p_1);
  }
  protoOf(WindowDispatcher).qu = function (context, block) {
    return this.y1p_1.s1p(block);
  };
  protoOf(WindowDispatcher).bv = function (timeMillis, continuation) {
    var handle = this.x1p_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new WindowClearTimeout(this, handle);
    continuation.kq(tmp$ret$1);
  };
  protoOf(WindowDispatcher).cv = function (timeMillis, block, context) {
    var handle = this.x1p_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.c1q_1 ? event.data == this$0.d1q_1 : false) {
        event.stopPropagation();
        this$0.f1p();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.f1p();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.c1q_1 = window_0;
    this.d1q_1 = 'dispatchCoroutine';
    this.c1q_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).g1p = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).h1p = function () {
    this.c1q_1.postMessage(this.d1q_1, '*');
  };
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jq();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.lq();
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.n5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      $cancellable.n5(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.d1h_1 = owner;
  }
  function ChildCancelledException() {
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.b1a_1 = collector;
    this.c1a_1 = collectContext;
    var tmp = this;
    tmp.d1a_1 = this.c1a_1.a7(0, SafeCollector$collectContextSize$lambda);
    this.e1a_1 = null;
  }
  protoOf(SafeCollector).z18 = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.p5();
    ensureActive(currentContext);
    if (!(this.e1a_1 === currentContext)) {
      checkContext(this, currentContext);
      this.e1a_1 = currentContext;
    }
    return this.b1a_1.z18(value, $completion);
  };
  protoOf(SafeCollector).f1a = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function propagateExceptionFinalResort(exception) {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    console.error(exception);
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).zp = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.vp_1 = this;
    this.wp_1 = this;
    this.xp_1 = false;
  }
  protoOf(LinkedListNode).yp = function (node) {
    var prev = this.wp_1;
    node.vp_1 = this;
    node.wp_1 = prev;
    prev.vp_1 = node;
    this.wp_1 = node;
  };
  protoOf(LinkedListNode).zp = function () {
    return this.aq();
  };
  protoOf(LinkedListNode).gp = function () {
    this.zp();
  };
  protoOf(LinkedListNode).aq = function () {
    if (this.xp_1)
      return false;
    var prev = this.wp_1;
    var next = this.vp_1;
    prev.vp_1 = next;
    next.wp_1 = prev;
    this.xp_1 = true;
    return true;
  };
  protoOf(LinkedListNode).bq = function (node) {
    if (!(this.vp_1 === this))
      return false;
    this.yp(node);
    return true;
  };
  function LocalAtomicInt(value) {
    this.x1f_1 = value;
  }
  protoOf(LocalAtomicInt).y1f = function () {
    this.x1f_1 = this.x1f_1 - 1 | 0;
    return this.x1f_1;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.rv_1 = null;
  }
  protoOf(CommonThreadLocal).sv = function () {
    var tmp = this.rv_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).tv = function (value) {
    this.rv_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).tn = invokeOnCompletion$default;
  protoOf(JobSupport).yn = cancel$default;
  protoOf(JobSupport).b7 = plus;
  protoOf(JobSupport).u6 = get;
  protoOf(JobSupport).a7 = fold;
  protoOf(JobSupport).z6 = minusKey;
  protoOf(AbstractCoroutine).tn = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).yn = cancel$default;
  protoOf(AbstractCoroutine).b7 = plus;
  protoOf(AbstractCoroutine).u6 = get;
  protoOf(AbstractCoroutine).a7 = fold;
  protoOf(AbstractCoroutine).z6 = minusKey;
  protoOf(StandaloneCoroutine).tn = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).yn = cancel$default;
  protoOf(StandaloneCoroutine).b7 = plus;
  protoOf(StandaloneCoroutine).u6 = get;
  protoOf(StandaloneCoroutine).a7 = fold;
  protoOf(StandaloneCoroutine).z6 = minusKey;
  protoOf(LazyStandaloneCoroutine).tn = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).yn = cancel$default;
  protoOf(LazyStandaloneCoroutine).b7 = plus;
  protoOf(LazyStandaloneCoroutine).u6 = get;
  protoOf(LazyStandaloneCoroutine).a7 = fold;
  protoOf(LazyStandaloneCoroutine).z6 = minusKey;
  protoOf(ScopeCoroutine).tn = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).yn = cancel$default;
  protoOf(ScopeCoroutine).b7 = plus;
  protoOf(ScopeCoroutine).u6 = get;
  protoOf(ScopeCoroutine).a7 = fold;
  protoOf(ScopeCoroutine).z6 = minusKey;
  protoOf(DispatchedCoroutine).tn = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).yn = cancel$default;
  protoOf(DispatchedCoroutine).b7 = plus;
  protoOf(DispatchedCoroutine).u6 = get;
  protoOf(DispatchedCoroutine).a7 = fold;
  protoOf(DispatchedCoroutine).z6 = minusKey;
  protoOf(DeferredCoroutine).tn = invokeOnCompletion$default;
  protoOf(DeferredCoroutine).yn = cancel$default;
  protoOf(DeferredCoroutine).b7 = plus;
  protoOf(DeferredCoroutine).u6 = get;
  protoOf(DeferredCoroutine).a7 = fold;
  protoOf(DeferredCoroutine).z6 = minusKey;
  protoOf(LazyDeferredCoroutine).tn = invokeOnCompletion$default;
  protoOf(LazyDeferredCoroutine).yn = cancel$default;
  protoOf(LazyDeferredCoroutine).b7 = plus;
  protoOf(LazyDeferredCoroutine).u6 = get;
  protoOf(LazyDeferredCoroutine).a7 = fold;
  protoOf(LazyDeferredCoroutine).z6 = minusKey;
  protoOf(CancellableContinuationImpl).yr = cancel$default_0;
  protoOf(CompletableDeferredImpl).tn = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).yn = cancel$default;
  protoOf(CompletableDeferredImpl).b7 = plus;
  protoOf(CompletableDeferredImpl).u6 = get;
  protoOf(CompletableDeferredImpl).a7 = fold;
  protoOf(CompletableDeferredImpl).z6 = minusKey;
  protoOf(CoroutineDispatcher).u6 = get_0;
  protoOf(CoroutineDispatcher).a7 = fold;
  protoOf(CoroutineDispatcher).z6 = minusKey_0;
  protoOf(CoroutineDispatcher).b7 = plus;
  protoOf(CoroutineName).u6 = get;
  protoOf(CoroutineName).a7 = fold;
  protoOf(CoroutineName).z6 = minusKey;
  protoOf(CoroutineName).b7 = plus;
  protoOf(EventLoop).b7 = plus;
  protoOf(EventLoop).u6 = get_0;
  protoOf(EventLoop).a7 = fold;
  protoOf(EventLoop).z6 = minusKey_0;
  protoOf(AwaitContinuation).yr = cancel$default_0;
  protoOf(JobImpl).tn = invokeOnCompletion$default;
  protoOf(JobImpl).yn = cancel$default;
  protoOf(JobImpl).b7 = plus;
  protoOf(JobImpl).u6 = get;
  protoOf(JobImpl).a7 = fold;
  protoOf(JobImpl).z6 = minusKey;
  protoOf(MainCoroutineDispatcher).b7 = plus;
  protoOf(MainCoroutineDispatcher).u6 = get_0;
  protoOf(MainCoroutineDispatcher).a7 = fold;
  protoOf(MainCoroutineDispatcher).z6 = minusKey_0;
  protoOf(SupervisorJobImpl).tn = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).yn = cancel$default;
  protoOf(SupervisorJobImpl).b7 = plus;
  protoOf(SupervisorJobImpl).u6 = get;
  protoOf(SupervisorJobImpl).a7 = fold;
  protoOf(SupervisorJobImpl).z6 = minusKey;
  protoOf(TimeoutCoroutine).tn = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).yn = cancel$default;
  protoOf(TimeoutCoroutine).b7 = plus;
  protoOf(TimeoutCoroutine).u6 = get;
  protoOf(TimeoutCoroutine).a7 = fold;
  protoOf(TimeoutCoroutine).z6 = minusKey;
  protoOf(Unconfined).b7 = plus;
  protoOf(Unconfined).u6 = get_0;
  protoOf(Unconfined).a7 = fold;
  protoOf(Unconfined).z6 = minusKey_0;
  protoOf(YieldContext).u6 = get;
  protoOf(YieldContext).a7 = fold;
  protoOf(YieldContext).z6 = minusKey;
  protoOf(YieldContext).b7 = plus;
  protoOf(BufferedChannel).o16 = close$default;
  protoOf(BufferedChannel).q16 = cancel$default_1;
  protoOf(ChannelCoroutine).o16 = close$default;
  protoOf(ChannelCoroutine).yn = cancel$default;
  protoOf(ChannelCoroutine).tn = invokeOnCompletion$default;
  protoOf(ChannelCoroutine).b7 = plus;
  protoOf(ChannelCoroutine).u6 = get;
  protoOf(ChannelCoroutine).a7 = fold;
  protoOf(ChannelCoroutine).z6 = minusKey;
  protoOf(ConflatedBufferedChannel).o16 = close$default;
  protoOf(ConflatedBufferedChannel).q16 = cancel$default_1;
  protoOf(ProducerCoroutine).o16 = close$default;
  protoOf(ProducerCoroutine).yn = cancel$default;
  protoOf(ProducerCoroutine).tn = invokeOnCompletion$default;
  protoOf(ProducerCoroutine).b7 = plus;
  protoOf(ProducerCoroutine).u6 = get;
  protoOf(ProducerCoroutine).a7 = fold;
  protoOf(ProducerCoroutine).z6 = minusKey;
  protoOf(FlowCoroutine).tn = invokeOnCompletion$default;
  protoOf(FlowCoroutine).yn = cancel$default;
  protoOf(FlowCoroutine).b7 = plus;
  protoOf(FlowCoroutine).u6 = get;
  protoOf(FlowCoroutine).a7 = fold;
  protoOf(FlowCoroutine).z6 = minusKey;
  protoOf(CancellableContinuationWithOwner).yr = cancel$default_0;
  protoOf(MutexImpl).v1m = lock$default;
  protoOf(MutexImpl).x1m = unlock$default;
  protoOf(UndispatchedCoroutine).tn = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).yn = cancel$default;
  protoOf(UndispatchedCoroutine).b7 = plus;
  protoOf(UndispatchedCoroutine).u6 = get;
  protoOf(UndispatchedCoroutine).a7 = fold;
  protoOf(UndispatchedCoroutine).z6 = minusKey;
  protoOf(JsMainDispatcher).b7 = plus;
  protoOf(JsMainDispatcher).u6 = get_0;
  protoOf(JsMainDispatcher).a7 = fold;
  protoOf(JsMainDispatcher).z6 = minusKey_0;
  protoOf(UnconfinedEventLoop).b7 = plus;
  protoOf(UnconfinedEventLoop).u6 = get_0;
  protoOf(UnconfinedEventLoop).a7 = fold;
  protoOf(UnconfinedEventLoop).z6 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).b7 = plus;
  protoOf(SetTimeoutBasedDispatcher).u6 = get_0;
  protoOf(SetTimeoutBasedDispatcher).a7 = fold;
  protoOf(SetTimeoutBasedDispatcher).z6 = minusKey_0;
  protoOf(NodeDispatcher).b7 = plus;
  protoOf(NodeDispatcher).u6 = get_0;
  protoOf(NodeDispatcher).a7 = fold;
  protoOf(NodeDispatcher).z6 = minusKey_0;
  protoOf(SetTimeoutDispatcher).b7 = plus;
  protoOf(SetTimeoutDispatcher).u6 = get_0;
  protoOf(SetTimeoutDispatcher).a7 = fold;
  protoOf(SetTimeoutDispatcher).z6 = minusKey_0;
  protoOf(WindowDispatcher).b7 = plus;
  protoOf(WindowDispatcher).u6 = get_0;
  protoOf(WindowDispatcher).a7 = fold;
  protoOf(WindowDispatcher).z6 = minusKey_0;
  //endregion
  //region block: init
  SENDERS_COUNTER_MASK = new Long(-1, 268435455);
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = emitAll_0;
  _.$_$.d = firstOrNull;
  _.$_$.e = first;
  _.$_$.f = awaitAll;
  _.$_$.g = await_0;
  _.$_$.h = cancelAndJoin;
  _.$_$.i = coroutineScope;
  _.$_$.j = delay;
  _.$_$.k = withContext;
  _.$_$.l = withTimeoutOrNull;
  _.$_$.m = yield_0;
  _.$_$.n = cancel$default;
  _.$_$.o = invokeOnCompletion$default;
  _.$_$.p = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.q = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.r = Factory_getInstance;
  _.$_$.s = Key_getInstance_0;
  _.$_$.t = Key_getInstance_1;
  _.$_$.u = Key_getInstance_2;
  _.$_$.v = Dispatchers_getInstance;
  _.$_$.w = GlobalScope_getInstance;
  _.$_$.x = Key_getInstance_3;
  _.$_$.y = Channel;
  _.$_$.z = ProducerScope;
  _.$_$.a1 = cancelConsumed;
  _.$_$.b1 = FlowCollector;
  _.$_$.c1 = MutableSharedFlow;
  _.$_$.d1 = MutableStateFlow;
  _.$_$.e1 = asFlow;
  _.$_$.f1 = asStateFlow;
  _.$_$.g1 = catch_0;
  _.$_$.h1 = channelFlow;
  _.$_$.i1 = combine;
  _.$_$.j1 = emptyFlow;
  _.$_$.k1 = flow;
  _.$_$.l1 = LinkedListNode;
  _.$_$.m1 = recoverStackTrace;
  _.$_$.n1 = Mutex_0;
  _.$_$.o1 = CancellableContinuationImpl;
  _.$_$.p1 = CompletableDeferred;
  _.$_$.q1 = CompletableJob;
  _.$_$.r1 = CoroutineDispatcher;
  _.$_$.s1 = CoroutineName;
  _.$_$.t1 = CoroutineScope_0;
  _.$_$.u1 = CoroutineScope;
  _.$_$.v1 = invokeOnTimeout;
  _.$_$.w1 = Delay;
  _.$_$.x1 = Job_0;
  _.$_$.y1 = Job;
  _.$_$.z1 = get_MODE_CANCELLABLE;
  _.$_$.a2 = MainScope;
  _.$_$.b2 = Runnable;
  _.$_$.c2 = SupervisorJob;
  _.$_$.d2 = async;
  _.$_$.e2 = cancel;
  _.$_$.f2 = cancel_2;
  _.$_$.g2 = cancel_0;
  _.$_$.h2 = cancel_1;
  _.$_$.i2 = get_isActive_0;
  _.$_$.j2 = get_isActive;
  _.$_$.k2 = get_job;
  _.$_$.l2 = launch;
  _.$_$.m2 = plus_1;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
