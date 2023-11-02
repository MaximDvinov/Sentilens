(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-atomicfu.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io'.");
    }
    root['ktor-ktor-io'] = factory(typeof this['ktor-ktor-io'] === 'undefined' ? {} : this['ktor-ktor-io'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-atomicfu'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toLong = kotlin_kotlin.$_$.ae;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var CoroutineImpl = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Long = kotlin_kotlin.$_$.jj;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var KMutableProperty1 = kotlin_kotlin.$_$.mf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.id;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var equals = kotlin_kotlin.$_$.oc;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var charSequenceLength = kotlin_kotlin.$_$.ic;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.sd;
  var coerceAtLeast = kotlin_kotlin.$_$.se;
  var coerceAtMost = kotlin_kotlin.$_$.xe;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e3;
  var toByte = kotlin_kotlin.$_$.zd;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var toShort = kotlin_kotlin.$_$.be;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q5;
  var charSequenceGet = kotlin_kotlin.$_$.hc;
  var isLowSurrogate = kotlin_kotlin.$_$.bh;
  var isHighSurrogate = kotlin_kotlin.$_$.ah;
  var Job_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.we;
  var hashCode = kotlin_kotlin.$_$.xc;
  var lazy = kotlin_kotlin.$_$.rk;
  var KProperty1 = kotlin_kotlin.$_$.of;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var replace = kotlin_kotlin.$_$.mh;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var extendThrowable = kotlin_kotlin.$_$.pc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jc;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.f2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var isCharSequence = kotlin_kotlin.$_$.ed;
  var trim = kotlin_kotlin.$_$.si;
  var decodeToString = kotlin_kotlin.$_$.og;
  var setOf = kotlin_kotlin.$_$.fa;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var isObject = kotlin_kotlin.$_$.kd;
  //endregion
  //region block: pre-declaration
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($writePacketCOROUTINE$8, '$writePacketCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl);
  setMetadataFor($discardCOROUTINE$40, '$discardCOROUTINE$40', classMeta, CoroutineImpl);
  setMetadataFor($discardSuspendCOROUTINE$41, '$discardSuspendCOROUTINE$41', classMeta, CoroutineImpl);
  function readRemaining$default(limit, $completion, $super) {
    var tmp;
    if (limit === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = limit;
    }
    limit = tmp;
    return $super === VOID ? this.tef(limit, $completion) : $super.tef.call(this, limit, $completion);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, VOID, VOID, VOID, VOID, [3, 1, 2, 0, 5]);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, VOID, [ByteReadChannel_1], VOID, VOID, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException);
  setMetadataFor(CloseElement, 'CloseElement', classMeta);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, VOID, [CoroutineScope, WriterScope]);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Buffer, 'Buffer', classMeta);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception);
  setMetadataFor(Closeable, 'Closeable', interfaceMeta);
  function close() {
    this.gp();
  }
  setMetadataFor(ObjectPool, 'ObjectPool', interfaceMeta, VOID, [Closeable]);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta, VOID, [ObjectPool]);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool);
  setMetadataFor(Output, 'Output', classMeta, VOID, [Closeable]);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Input, 'Input', classMeta, VOID, [Closeable]);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer$Companion$Pool$1, VOID, classMeta, VOID, [ObjectPool]);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, VOID, classMeta, VOID, [ObjectPool]);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta, VOID, [ObjectPool]);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, VOID, classMeta, NoPoolImpl);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception);
  setMetadataFor($sleepCOROUTINE$52, '$sleepCOROUTINE$52', classMeta, CoroutineImpl);
  setMetadataFor($trySuspendCOROUTINE$53, '$trySuspendCOROUTINE$53', classMeta, CoroutineImpl);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$54, '$copyToSequentialImplCOROUTINE$54', classMeta, CoroutineImpl);
  setMetadataFor($copyToTailCOROUTINE$55, '$copyToTailCOROUTINE$55', classMeta, CoroutineImpl);
  setMetadataFor(ByteArrayPool$1, VOID, classMeta, DefaultPool);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, VOID, VOID, VOID, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Memory, 'Memory', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Charset, 'Charset', classMeta);
  setMetadataFor(Charsets, 'Charsets', objectMeta);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta);
  setMetadataFor(IOException, 'IOException', classMeta, Exception);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException);
  setMetadataFor(toKtor$1, VOID, classMeta);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.ie7_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qe7_1) == null);
  }
  function _set_lastReadAvailable__98ukjs($this, _set____db54di) {
    lastReadAvailable$factory();
    $this.le7_1.kotlinx$atomicfu$value = _set____db54di;
    return Unit_getInstance();
  }
  function _get_lastReadAvailable__cgybqk($this) {
    // Inline function 'kotlinx.atomicfu.AtomicInt.getValue' call
    lastReadAvailable$factory_0();
    return $this.le7_1.kotlinx$atomicfu$value;
  }
  function _set_lastReadView__2y3peu($this, _set____db54di) {
    lastReadView$factory();
    $this.me7_1.kotlinx$atomicfu$value = _set____db54di;
    return Unit_getInstance();
  }
  function _get_lastReadView__ihufyy($this) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    lastReadView$factory_0();
    return $this.me7_1.kotlinx$atomicfu$value;
  }
  function flushImpl($this) {
    if ($this.je7_1.r20()) {
      $this.ne7_1.se7();
      return false;
    }
    flushWrittenBytes($this);
    $this.ne7_1.se7();
    return true;
  }
  function flushWrittenBytes($this) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.oe7_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.je7_1.g();
    var buffer = ensureNotNull($this.je7_1.je8());
    $this.pe7_1.ke8(buffer);
    $this.ge7_1.atomicfu$addAndGet(size);
  }
  function ensureNotClosed($this) {
    if ($this.me8()) {
      var tmp0_elvis_lhs = $this.le8();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.le8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.le8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.su();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $completion) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function completeReading($this) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp0_get_readRemaining_epkwe5 = _get_lastReadView__ihufyy($this);
    var remaining = tmp0_get_readRemaining_epkwe5.be9_1 - tmp0_get_readRemaining_epkwe5.ae9_1 | 0;
    var delta = _get_lastReadAvailable__cgybqk($this) - remaining | 0;
    if (!(_get_lastReadView__ihufyy($this) === Companion_getInstance_1().ge9())) {
      completeReadHead($this.ke7_1, _get_lastReadView__ihufyy($this));
    }
    if (delta > 0) {
      $this.he9(delta);
    }
    _set_lastReadAvailable__98ukjs($this, 0);
    _set_lastReadView__2y3peu($this, Companion_getInstance_4().ke9_1);
  }
  function discardSuspend($this, max, discarded0, $completion) {
    var tmp = new $discardSuspendCOROUTINE$41($this, max, discarded0, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message = "Can't read negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.he7_1.atomicfu$getAndAdd(-count | 0);
    $this.ee7_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    $this.ge7_1.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.he7_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.ze9() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.ze9() >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      var message_1 = 'Readable bytes count is negative: ' + $this.ze9() + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(count >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message = "Can't write negative amount of bytes: " + count;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    $this.he7_1.atomicfu$getAndAdd(count);
    $this.fe7_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.he7_1.kotlinx$atomicfu$value >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      var message_0 = 'Readable bytes count is negative: ' + $this.he7_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.aea() < $count ? !this$0.me8() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.ze9() < $count ? !this$0.bea() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kea_1 = _this__u8e3s4;
    this.lea_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!(this.kea_1.aea() < this.lea_1 ? !this.kea_1.me8() : false)) {
              this.dl_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.kea_1)) {
              this.dl_1 = 2;
              suspendResult = this.kea_1.ne7_1.mea(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.kea_1, this.lea_1), this);
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
            this.dl_1 = 1;
            continue $sm;
          case 4:
            throw this.gl_1;
          case 5:
            return Unit_getInstance();
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
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vea_1 = _this__u8e3s4;
    this.wea_1 = count;
  }
  protoOf($awaitAtLeastNBytesAvailableForReadCOROUTINE$1).ml = function () {
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
            if (!(this.vea_1.ze9() < this.wea_1 ? !this.vea_1.bea() : false)) {
              this.dl_1 = 4;
              continue $sm;
            }

            this.dl_1 = 2;
            suspendResult = this.vea_1.ne7_1.mea(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.vea_1, this.wea_1), this);
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
  function $writePacketCOROUTINE$8(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.feb_1 = _this__u8e3s4;
    this.geb_1 = packet;
  }
  protoOf($writePacketCOROUTINE$8).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.feb_1.heb(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var size = this.geb_1.peb().f1();
            this.feb_1.je7_1.qeb(this.geb_1);
            this.feb_1.reb(size);
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
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.aec_1 = _this__u8e3s4;
    this.bec_1 = src;
  }
  protoOf($writeFullyCOROUTINE$9).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.aec_1.heb(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.bec_1.be9_1 - this.bec_1.ae9_1 | 0;
            writeFully_2(this.aec_1.je7_1, this.bec_1);
            this.aec_1.reb(count);
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
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kec_1 = _this__u8e3s4;
    this.lec_1 = src;
    this.mec_1 = offset;
    this.nec_1 = length;
  }
  protoOf($writeFullyCOROUTINE$10).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 4;
            this.oec_1 = this.mec_1;
            this.pec_1 = this.mec_1 + this.nec_1 | 0;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!(this.oec_1 < this.pec_1)) {
              this.dl_1 = 3;
              continue $sm;
            }

            this.dl_1 = 2;
            suspendResult = this.kec_1.heb(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.kec_1.aea();
            var tmp1_min = this.pec_1 - this.oec_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.kec_1.je7_1, this.lec_1, this.oec_1, bytesCount);
            this.oec_1 = this.oec_1 + bytesCount | 0;
            this.kec_1.reb(bytesCount);
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
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yec_1 = _this__u8e3s4;
    this.zec_1 = limit;
  }
  protoOf($readRemainingCOROUTINE$26).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            ensureNotFailed(this.yec_1);
            this.aed_1 = new BytePacketBuilder();
            var tmp_0 = this;
            var tmp0_minOf = this.yec_1.ke7_1.peb();
            tmp_0.bed_1 = this.zec_1.x(tmp0_minOf) <= 0 ? this.zec_1 : tmp0_minOf;
            this.aed_1.eed(this.yec_1.ke7_1, this.bed_1);
            this.yec_1.he9(this.bed_1.f1());
            var tmp_1 = this;
            var tmp1_minus = this.aed_1.g();
            tmp_1.ced_1 = this.zec_1.m9(toLong(tmp1_minus));
            if (this.ced_1.equals(new Long(0, 0)) ? true : this.yec_1.bea()) {
              var tmp_2 = this;
              ensureNotFailed_0(this.yec_1, this.aed_1);
              tmp_2.ded_1 = this.aed_1.df();
              this.dl_1 = 2;
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = readRemainingSuspend(this.yec_1, this.aed_1, this.zec_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.ded_1 = suspendResult;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            return this.ded_1;
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
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ve8_1 = _this__u8e3s4;
    this.we8_1 = builder;
    this.xe8_1 = limit;
  }
  protoOf($readRemainingSuspendCOROUTINE$27).ml = function () {
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
            if (!(toLong(this.we8_1.g()).x(this.xe8_1) < 0)) {
              this.dl_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp0_minus = this.we8_1.g();
            var tmp1_minOf = this.xe8_1.m9(toLong(tmp0_minus));
            var tmp2_minOf = this.ve8_1.ke7_1.peb();
            tmp_0.ye8_1 = tmp1_minOf.x(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
            this.we8_1.eed(this.ve8_1.ke7_1, this.ye8_1);
            this.ve8_1.he9(this.ye8_1.f1());
            ensureNotFailed_0(this.ve8_1, this.we8_1);
            if (this.ve8_1.bea() ? true : this.we8_1.g() === this.xe8_1.f1()) {
              this.dl_1 = 4;
              continue $sm;
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 2:
            this.dl_1 = 3;
            suspendResult = this.ve8_1.fed(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.dl_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.ve8_1, this.we8_1);
            return this.we8_1.df();
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
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oed_1 = _this__u8e3s4;
    this.ped_1 = dst;
  }
  protoOf($readAvailableCOROUTINE$30).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp0_safe_receiver = this.oed_1.le8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.oed_1.me8() ? this.oed_1.ze9() === 0 : false)
              return -1;
            if ((this.ped_1.de9_1 - this.ped_1.be9_1 | 0) === 0)
              return 0;
            if (this.oed_1.ze9() === 0) {
              this.dl_1 = 1;
              suspendResult = this.oed_1.fed(1, this);
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
            if (!this.oed_1.ke7_1.red()) {
              this.oed_1.qed();
            }

            var tmp0_minOf = toLong(this.ped_1.de9_1 - this.ped_1.be9_1 | 0);
            var tmp1_minOf = this.oed_1.ke7_1.peb();
            var size = (tmp0_minOf.x(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).f1();
            readFully_2(this.oed_1.ke7_1, this.ped_1, size);
            this.oed_1.he9(size);
            return size;
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
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.aee_1 = _this__u8e3s4;
    this.bee_1 = dst;
    this.cee_1 = offset;
    this.dee_1 = length;
  }
  protoOf($readAvailableCOROUTINE$33).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            var tmp0_safe_receiver = this.aee_1.le8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            if (this.aee_1.me8() ? this.aee_1.ze9() === 0 : false)
              return -1;
            if (this.dee_1 === 0)
              return 0;
            if (this.aee_1.ze9() === 0) {
              this.dl_1 = 1;
              suspendResult = this.aee_1.fed(1, this);
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
            if (!this.aee_1.ke7_1.red()) {
              this.aee_1.qed();
            }

            var tmp0_minOf = toLong(this.dee_1);
            var tmp1_minOf = this.aee_1.ke7_1.peb();
            var size = (tmp0_minOf.x(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).f1();
            readFully_1(this.aee_1.ke7_1, this.bee_1, this.cee_1, size);
            this.aee_1.he9(size);
            return size;
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
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mee_1 = _this__u8e3s4;
  }
  protoOf($awaitInternalAtLeast1COROUTINE$38).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            if (!this.mee_1.ke7_1.oee()) {
              var tmp_0 = this;
              tmp_0.nee_1 = true;
              this.dl_1 = 3;
              continue $sm;
            } else {
              this.dl_1 = 1;
              suspendResult = this.mee_1.fed(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.nee_1 = suspendResult;
            this.dl_1 = 3;
            continue $sm;
          case 2:
            throw this.gl_1;
          case 3:
            return this.nee_1;
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
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xee_1 = _this__u8e3s4;
    this.yee_1 = atLeast;
  }
  protoOf($awaitSuspendCOROUTINE$39).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 2;
            if (!(this.yee_1 >= 0)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.dl_1 = 1;
            suspendResult = this.xee_1.zee(this.yee_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xee_1.qed();
            var tmp0_safe_receiver = this.xee_1.le8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return !this.xee_1.bea() ? this.xee_1.ze9() >= this.yee_1 : false;
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
  function $discardCOROUTINE$40(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ief_1 = _this__u8e3s4;
    this.jef_1 = max;
  }
  protoOf($discardCOROUTINE$40).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.kef_1 = this.ief_1.ke7_1.mef(this.jef_1);
            this.ief_1.he9(this.kef_1.f1());
            if (this.kef_1.equals(this.jef_1) ? true : this.ief_1.bea()) {
              var tmp_0 = this;
              ensureNotFailed(this.ief_1);
              return this.kef_1;
            } else {
              this.dl_1 = 1;
              suspendResult = discardSuspend(this.ief_1, this.jef_1, this.kef_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.lef_1 = suspendResult;
            this.dl_1 = 2;
            continue $sm;
          case 2:
            return this.lef_1;
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
  function $discardSuspendCOROUTINE$41(_this__u8e3s4, max, discarded0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ve9_1 = _this__u8e3s4;
    this.we9_1 = max;
    this.xe9_1 = discarded0;
  }
  protoOf($discardSuspendCOROUTINE$41).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 5;
            this.ye9_1 = this.xe9_1;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            suspendResult = this.ve9_1.nef(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              this.dl_1 = 4;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            var count = this.ve9_1.ke7_1.mef(this.we9_1.m9(this.ye9_1));
            this.ve9_1.he9(count.f1());
            this.ye9_1 = this.ye9_1.r7(count);
            if (this.ye9_1.x(this.we9_1) < 0 ? !this.ve9_1.bea() : false) {
              this.dl_1 = 1;
              continue $sm;
            }

            this.dl_1 = 4;
            continue $sm;
          case 4:
            ensureNotFailed(this.ve9_1);
            return this.ye9_1;
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
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    pool = pool === VOID ? Companion_getInstance_4().ie9_1 : pool;
    this.ce7_1 = autoFlush;
    this.de7_1 = atomic$ref$1(Companion_getInstance_4().ke9_1);
    this.ee7_1 = atomic$long$1(new Long(0, 0));
    this.fe7_1 = atomic$long$1(new Long(0, 0));
    this.ge7_1 = atomic$int$1(0);
    this.he7_1 = atomic$int$1(0);
    this.ie7_1 = atomic$ref$1(null);
    this.je7_1 = new BytePacketBuilder(pool);
    this.ke7_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.le7_1 = atomic$int$1(0);
    this.me7_1 = atomic$ref$1(Companion_getInstance_4().ke9_1);
    this.ne7_1 = new AwaitingSlot();
    this.oe7_1 = new Object();
    this.pe7_1 = new BytePacketBuilder();
    var count = remainingAll(initial).f1();
    this.reb(count);
    this.ge7_1.atomicfu$addAndGet(count);
  }
  protoOf(ByteChannelSequentialBase).oef = function () {
    return this.ce7_1;
  };
  protoOf(ByteChannelSequentialBase).me8 = function () {
    return !(this.ie7_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannelSequentialBase).ze9 = function () {
    return this.ge7_1.kotlinx$atomicfu$value;
  };
  protoOf(ByteChannelSequentialBase).aea = function () {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.he7_1.kotlinx$atomicfu$value | 0;
    return Math.max(0, tmp0_maxOf);
  };
  protoOf(ByteChannelSequentialBase).bea = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.me8() ? this.he7_1.kotlinx$atomicfu$value === 0 : false;
  };
  protoOf(ByteChannelSequentialBase).pef = function () {
    return this.me8();
  };
  protoOf(ByteChannelSequentialBase).le8 = function () {
    var tmp0_safe_receiver = this.ie7_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qe7_1;
  };
  protoOf(ByteChannelSequentialBase).heb = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).zee = function (count, $completion) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).gh = function () {
    flushImpl(this);
  };
  protoOf(ByteChannelSequentialBase).qed = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.oe7_1;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    unsafeAppend(this.ke7_1, this.pe7_1);
  };
  protoOf(ByteChannelSequentialBase).qef = function (packet, $completion) {
    var tmp = new $writePacketCOROUTINE$8(this, packet, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).ref = function (src, $completion) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).sef = function (src, offset, length, $completion) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).he9 = function (count) {
    addBytesRead(this, count);
    this.ne7_1.se7();
  };
  protoOf(ByteChannelSequentialBase).tef = function (limit, $completion) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).vef = function (dst, $completion) {
    return this.wef(dst instanceof Buffer ? dst : THROW_CCE(), $completion);
  };
  protoOf(ByteChannelSequentialBase).wef = function (dst, $completion) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).xef = function (dst, offset, length, $completion) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).nef = function (atLeast, $completion) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(atLeast >= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.await.<anonymous>' call
      var message = "atLeast parameter shouldn't be negative: " + atLeast;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(toLong(atLeast).x(new Long(4088, 0)) <= 0)) {
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.await.<anonymous>' call
      var message_0 = "atLeast parameter shouldn't be larger than max buffer size of 4088: " + atLeast;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    completeReading(this);
    if (atLeast === 0)
      return !this.bea();
    if (this.ke7_1.peb().x(toLong(atLeast)) >= 0)
      return true;
    return this.fed(atLeast, $completion);
  };
  protoOf(ByteChannelSequentialBase).yef = function ($completion) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).fed = function (atLeast, $completion) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).zef = function (max, $completion) {
    var tmp = new $discardCOROUTINE$40(this, max, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(ByteChannelSequentialBase).xr = function (cause) {
    if (!(this.le8() == null) ? true : this.me8()) {
      return false;
    }
    return this.m16(cause == null ? CancellationException_init_$Create$('Channel cancelled') : cause);
  };
  protoOf(ByteChannelSequentialBase).m16 = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.ie7_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.ke7_1.su();
      this.je7_1.su();
      this.pe7_1.su();
    } else {
      this.gh();
    }
    this.ne7_1.n6o(cause);
    return true;
  };
  protoOf(ByteChannelSequentialBase).aeg = function (dst, limit) {
    var size = this.ke7_1.peb();
    var tmp;
    if (size.x(limit) <= 0) {
      dst.je7_1.qeb(this.ke7_1);
      dst.reb(size.f1());
      this.he9(size.f1());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  protoOf(ByteChannelSequentialBase).reb = function (count) {
    addBytesWritten(this, count);
    if (this.me8()) {
      this.je7_1.su();
      ensureNotClosed(this);
    }
    if (this.oef() ? true : this.aea() === 0) {
      this.gh();
    }
  };
  function lastReadAvailable$factory() {
    return getPropertyCallableRef('lastReadAvailable', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadAvailable__cgybqk(receiver);
    }, function (receiver, value) {
      return _set_lastReadAvailable__98ukjs(receiver, value);
    });
  }
  function lastReadAvailable$factory_0() {
    return getPropertyCallableRef('lastReadAvailable', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadAvailable__cgybqk(receiver);
    }, function (receiver, value) {
      return _set_lastReadAvailable__98ukjs(receiver, value);
    });
  }
  function lastReadView$factory() {
    return getPropertyCallableRef('lastReadView', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadView__ihufyy(receiver);
    }, function (receiver, value) {
      return _set_lastReadView__2y3peu(receiver, value);
    });
  }
  function lastReadView$factory_0() {
    return getPropertyCallableRef('lastReadView', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadView__ihufyy(receiver);
    }, function (receiver, value) {
      return _set_lastReadView__2y3peu(receiver, value);
    });
  }
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.xr(null);
  }
  function readAvailable(_this__u8e3s4, dst, $completion) {
    return _this__u8e3s4.xef(dst, 0, dst.length, $completion);
  }
  function discard(_this__u8e3s4, $completion) {
    Companion_getInstance();
    return _this__u8e3s4.zef(new Long(-1, 2147483647), $completion);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.m16(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $completion) {
    return _this__u8e3s4.sef(src, 0, src.length, $completion);
  }
  function get_CLOSED_SUCCESS() {
    _init_properties_CloseElement_kt__5e72ik();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.qe7_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function _init_properties_CloseElement_kt__5e72ik() {
    if (!properties_initialized_CloseElement_kt_clkism) {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.ceg_1 = delegate;
    this.deg_1 = channel;
  }
  protoOf(ChannelJob).s10 = function () {
    return this.deg_1;
  };
  protoOf(ChannelJob).pm = function () {
    return this.ceg_1.pm();
  };
  protoOf(ChannelJob).ln = function () {
    return this.ceg_1.ln();
  };
  protoOf(ChannelJob).r = function () {
    return this.ceg_1.r();
  };
  protoOf(ChannelJob).in = function () {
    return this.ceg_1.in();
  };
  protoOf(ChannelJob).eo = function (child) {
    return this.ceg_1.eo(child);
  };
  protoOf(ChannelJob).xn = function (cause) {
    this.ceg_1.xn(cause);
  };
  protoOf(ChannelJob).a7 = function (initial, operation) {
    return this.ceg_1.a7(initial, operation);
  };
  protoOf(ChannelJob).u6 = function (key) {
    return this.ceg_1.u6(key);
  };
  protoOf(ChannelJob).on = function () {
    return this.ceg_1.on();
  };
  protoOf(ChannelJob).sn = function (onCancelling, invokeImmediately, handler) {
    return this.ceg_1.sn(onCancelling, invokeImmediately, handler);
  };
  protoOf(ChannelJob).rn = function (handler) {
    return this.ceg_1.rn(handler);
  };
  protoOf(ChannelJob).un = function ($completion) {
    return this.ceg_1.un($completion);
  };
  protoOf(ChannelJob).z6 = function (key) {
    return this.ceg_1.z6(key);
  };
  protoOf(ChannelJob).b7 = function (context) {
    return this.ceg_1.b7(context);
  };
  protoOf(ChannelJob).mn = function () {
    return this.ceg_1.mn();
  };
  protoOf(ChannelJob).toString = function () {
    return 'ChannelJob[' + this.ceg_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.om().u6(Key_getInstance());
    var job = launch(_this__u8e3s4, context, VOID, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null));
    job.rn(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.eeg_1 = channel;
    this.feg_1 = delegate;
  }
  protoOf(ChannelScope).s10 = function () {
    return this.eeg_1;
  };
  protoOf(ChannelScope).om = function () {
    return this.feg_1.om();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.oeg_1 = $attachJob;
    this.peg_1 = $channel;
    this.qeg_1 = $block;
    this.reg_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchChannel$slambda).t1e = function ($this$launch, $completion) {
    var tmp = this.u1e($this$launch, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(launchChannel$slambda).yl = function (p1, $completion) {
    return this.t1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchChannel$slambda).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            if (this.oeg_1) {
              this.peg_1.beg(ensureNotNull(this.seg_1.om().u6(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.seg_1, this.peg_1);
            tmp_0.teg_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.el_1 = 2;
            this.dl_1 = 1;
            suspendResult = this.qeg_1(this.teg_1, this);
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
            var tmp_2 = this.gl_1;
            if (tmp_2 instanceof Error) {
              var cause = this.gl_1;
              if (!equals(this.reg_1, Dispatchers_getInstance().xu_1) ? !(this.reg_1 == null) : false) {
                throw cause;
              }
              this.peg_1.xr(cause);
              this.dl_1 = 4;
              continue $sm;
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
  protoOf(launchChannel$slambda).u1e = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.oeg_1, this.peg_1, this.qeg_1, this.reg_1, completion);
    i.seg_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.t1e($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.m16(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    var tmp2_buildString = (tmp0_minOf.x(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).f1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp0_apply, max);
    return tmp0_apply.toString();
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0_anonymous = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0_anonymous);
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(rc >= 0)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0) | 0) | 0;
        size = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.ueg();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.peb();
    } else {
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.peb();
      tmp = tmp0_maxOf.x(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
    }
    return tmp;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0_anonymous = tail;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var before = tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0;
        if (encodeComplete(_this__u8e3s4, tmp0_anonymous)) {
          size = 0;
        } else {
          size = size + 1 | 0;
        }
        var tmp = bytesWritten;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        bytesWritten = tmp + (before - (tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0) | 0) | 0;
        if (!(size > 0))
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.ueg();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.df();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.su();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function Companion() {
    Companion_instance = this;
    this.fe9_1 = 8;
  }
  protoOf(Companion).ge9 = function () {
    return Companion_getInstance_4().ke9_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.ze8_1 = memory;
    this.ae9_1 = 0;
    this.be9_1 = 0;
    this.ce9_1 = 0;
    var tmp = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp.de9_1 = this.ze8_1.veg_1.byteLength;
    var tmp_0 = this;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    tmp_0.ee9_1 = this.ze8_1.veg_1.byteLength;
  }
  protoOf(Buffer).weg = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.ae9_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.be9_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.be9_1 - this.ae9_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.ae9_1 = newReadPosition;
  };
  protoOf(Buffer).xeg = function (count) {
    var newWritePosition = this.be9_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.de9_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.de9_1 - this.be9_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.be9_1 = newWritePosition;
  };
  protoOf(Buffer).yeg = function (position) {
    var limit = this.de9_1;
    if (position < this.be9_1) {
      var tmp = position - this.be9_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.de9_1 - this.be9_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.be9_1 = position;
        return false;
      }
      var tmp_0 = position - this.be9_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.de9_1 - this.be9_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.be9_1 = position;
    return true;
  };
  protoOf(Buffer).zeg = function (position) {
    if (position < 0 ? true : position > this.be9_1) {
      var tmp = position - this.ae9_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.be9_1 - this.ae9_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.ae9_1 === position)) {
      this.ae9_1 = position;
    }
  };
  protoOf(Buffer).aeh = function (count) {
    var newReadPosition = this.ae9_1 - count | 0;
    if (newReadPosition < this.ce9_1) {
      rewindFailed(count, this.ae9_1 - this.ce9_1 | 0);
    }
    this.ae9_1 = newReadPosition;
  };
  protoOf(Buffer).beh = function (startGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      var message = "startGap shouldn't be negative: " + startGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.ae9_1 >= startGap) {
      this.ce9_1 = startGap;
      return Unit_getInstance();
    }
    if (this.ae9_1 === this.be9_1) {
      if (startGap > this.de9_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.be9_1 = startGap;
      this.ae9_1 = startGap;
      this.ce9_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  protoOf(Buffer).ceh = function (endGap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(endGap >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      var message = "endGap shouldn't be negative: " + endGap;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.ee9_1 - endGap | 0;
    if (newLimit >= this.be9_1) {
      this.de9_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.ce9_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.ae9_1 === this.be9_1) {
      this.de9_1 = newLimit;
      this.ae9_1 = newLimit;
      this.be9_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  protoOf(Buffer).deh = function () {
    this.ce9_1 = 0;
    this.ae9_1 = 0;
    var capacity = this.ee9_1;
    this.be9_1 = capacity;
  };
  protoOf(Buffer).eeh = function () {
    this.feh(this.ee9_1 - this.ce9_1 | 0);
  };
  protoOf(Buffer).feh = function (limit) {
    var startGap = this.ce9_1;
    this.ae9_1 = startGap;
    this.be9_1 = startGap;
    this.de9_1 = limit;
  };
  protoOf(Buffer).geh = function () {
    this.heh(0);
    this.ieh();
  };
  protoOf(Buffer).ieh = function () {
    this.de9_1 = this.ee9_1;
  };
  protoOf(Buffer).heh = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message = "newReadPosition shouldn't be negative: " + newReadPosition;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newReadPosition <= this.ae9_1)) {
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      var message_0 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.ae9_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.ae9_1 = newReadPosition;
    if (this.ce9_1 > newReadPosition) {
      this.ce9_1 = newReadPosition;
    }
  };
  protoOf(Buffer).jeh = function (copy) {
    copy.de9_1 = this.de9_1;
    copy.ce9_1 = this.ce9_1;
    copy.ae9_1 = this.ae9_1;
    copy.be9_1 = this.be9_1;
  };
  protoOf(Buffer).keh = function () {
    var readPosition = this.ae9_1;
    if (readPosition === this.be9_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.ae9_1 = readPosition + 1 | 0;
    // Inline function 'io.ktor.utils.io.bits.get' call
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    return this.ze8_1.veg_1.getInt8(readPosition);
  };
  protoOf(Buffer).leh = function (value) {
    var writePosition = this.be9_1;
    if (writePosition === this.de9_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    // Inline function 'io.ktor.utils.io.bits.set' call
    this.ze8_1.veg_1.setInt8(writePosition, value);
    this.be9_1 = writePosition + 1 | 0;
  };
  protoOf(Buffer).p25 = function () {
    this.geh();
    this.eeh();
  };
  protoOf(Buffer).toString = function () {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp = this.be9_1 - this.ae9_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp_0 = this.de9_1 - this.be9_1 | 0;
    var tmp_1 = this.ce9_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + (this.ee9_1 - this.de9_1 | 0) | 0) + ' reserved of ' + this.ee9_1 + ')';
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.ee9_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.ee9_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.ee9_1 - _this__u8e3s4.de9_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.be9_1 - _this__u8e3s4.ae9_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.ae9_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.ee9_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.ce9_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.be9_1 - _this__u8e3s4.ae9_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.ae9_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, objectCreate(protoOf(InsufficientSpaceException)));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    message = message === VOID ? 'Not enough free space' : message;
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.heh(_this__u8e3s4.ae9_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp0_minOf = other.be9_1 - other.ae9_1 | 0;
    var size = Math.min(tmp0_minOf, maxSize);
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    if ((_this__u8e3s4.de9_1 - _this__u8e3s4.be9_1 | 0) <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1_anonymous = _this__u8e3s4.ze8_1;
    var tmp2_anonymous = _this__u8e3s4.be9_1;
    _this__u8e3s4.de9_1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0_anonymous = other.ze8_1;
    var tmp1_anonymous_0 = other.ae9_1;
    other.be9_1;
    tmp0_anonymous.meh(tmp1_anonymous, tmp1_anonymous_0, size, tmp2_anonymous);
    var rc = size;
    other.weg(rc);
    var rc_0 = rc;
    _this__u8e3s4.xeg(rc_0);
    return rc_0;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var tmp = _this__u8e3s4.de9_1 - _this__u8e3s4.be9_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    if ((tmp + (_this__u8e3s4.ee9_1 - _this__u8e3s4.de9_1 | 0) | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.be9_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.de9_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.ieh();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = other.be9_1 - other.ae9_1 | 0;
    var readPosition = _this__u8e3s4.ae9_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.ze8_1.meh(_this__u8e3s4.ze8_1, other.ae9_1, size, newReadPosition);
    other.weg(size);
    _this__u8e3s4.heh(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    _init_properties_BufferFactory_kt__uj6b48();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    bufferSize = bufferSize === VOID ? 4096 : bufferSize;
    capacity = capacity === VOID ? 1000 : capacity;
    allocator = allocator === VOID ? DefaultAllocator_getInstance() : allocator;
    DefaultPool.call(this, capacity);
    this.qeh_1 = bufferSize;
    this.reh_1 = allocator;
  }
  protoOf(DefaultBufferPool).seh = function () {
    return new ChunkBuffer(this.reh_1.teh(this.qeh_1), null, this);
  };
  protoOf(DefaultBufferPool).ueh = function (instance) {
    this.reh_1.veh(instance.ze8_1);
    protoOf(DefaultPool).zeh.call(this, instance);
    instance.kei();
  };
  protoOf(DefaultBufferPool).zeh = function (instance) {
    return this.ueh(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).lei = function (instance) {
    protoOf(DefaultPool).mei.call(this, instance);
    // Inline function 'kotlin.check' call
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0_get_size_gkdi02 = instance.ze8_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!toLong(tmp0_get_size_gkdi02.veg_1.byteLength).equals(toLong(this.qeh_1))) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0_get_size_gkdi02_0 = instance.ze8_1;
      tmp$ret$1 = toLong(tmp0_get_size_gkdi02_0.veg_1.byteLength);
      var message = 'Buffer size mismatch. Expected: ' + this.qeh_1 + ', actual: ' + toString(tmp$ret$1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_getInstance_4().ke9_1)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_0 = "ChunkBuffer.Empty couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(instance === Companion_getInstance_1().ge9())) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_1 = "Empty instance couldn't be recycled";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.nei() === 0)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_2 = 'Unable to clear buffer: it is still in use.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.w11() == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_3 = "Recycled instance shouldn't be a part of a chain.";
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance.jei_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var message_4 = "Recycled instance shouldn't be a view or another buffer.";
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  protoOf(DefaultBufferPool).mei = function (instance) {
    return this.lei(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(DefaultBufferPool).oei = function (instance) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = protoOf(DefaultPool).pei.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.qei();
    tmp0_apply.p25();
    return tmp0_apply;
  };
  protoOf(DefaultBufferPool).pei = function (instance) {
    return this.oei(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function _init_properties_BufferFactory_kt__uj6b48() {
    if (!properties_initialized_BufferFactory_kt_q9tgbq) {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = new DefaultBufferPool();
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? source.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.be9_1;
    var writeRemaining = _this__u8e3s4.de9_1 - tmp1_anonymous | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    of(Companion_getInstance_6(), source, offset, length).meh(tmp0_anonymous, 0, length, tmp1_anonymous);
    var rc = length;
    _this__u8e3s4.xeg(rc);
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var message = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (src.be9_1 - src.ae9_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var message_0 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + (src.be9_1 - src.ae9_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (_this__u8e3s4.de9_1 - _this__u8e3s4.be9_1 | 0))) {
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var message_1 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + (_this__u8e3s4.de9_1 - _this__u8e3s4.be9_1 | 0);
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.be9_1;
    var writeRemaining = _this__u8e3s4.de9_1 - tmp1_anonymous | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.ze8_1.meh(tmp0_anonymous, src.ae9_1, length, tmp1_anonymous);
    src.weg(length);
    var rc = length;
    _this__u8e3s4.xeg(rc);
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? destination.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.ae9_1;
    if ((_this__u8e3s4.be9_1 - tmp1_anonymous | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_1(tmp0_anonymous, destination, tmp1_anonymous, length, offset);
    value = Unit_getInstance();
    var rc = length;
    _this__u8e3s4.weg(rc);
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.de9_1 - dst.be9_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length <= (dst.de9_1 - dst.be9_1 | 0))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.ae9_1;
    if ((_this__u8e3s4.be9_1 - tmp1_anonymous | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp0_anonymous.meh(dst.ze8_1, tmp1_anonymous, length, dst.be9_1);
    dst.xeg(length);
    value = Unit_getInstance();
    var rc = length;
    _this__u8e3s4.weg(rc);
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.be9_1;
    var writeRemaining = _this__u8e3s4.de9_1 - tmp1_anonymous | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0_anonymous.veg_1.setInt16(tmp1_anonymous, value, false);
    var rc = 2;
    _this__u8e3s4.xeg(rc);
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.ae9_1;
    if ((_this__u8e3s4.be9_1 - tmp1_anonymous | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    value = tmp0_anonymous.veg_1.getInt16(tmp1_anonymous, false);
    var rc = 2;
    _this__u8e3s4.weg(rc);
    return value;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function copyAll(_this__u8e3s4) {
    var copied = _this__u8e3s4.tei();
    var tmp0_elvis_lhs = _this__u8e3s4.w11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return copied;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    return copyAll_0(next, copied, copied);
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.w11();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.uei();
      current.vei(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.be9_1 - $this.ae9_1 | 0;
        var rem = toLong(tmp$ret$0).r7(n_0);
        var tmp0_elvis_lhs = $this.w11();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        n_0 = rem;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function copyAll_0(_this__u8e3s4, head, prev) {
    var $this = _this__u8e3s4;
    var head_0 = head;
    var prev_0 = prev;
    $l$1: do {
      $l$0: do {
        var copied = $this.tei();
        prev_0.wei(copied);
        var tmp0_elvis_lhs = $this.w11();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return head_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        $this = next;
        head_0 = head_0;
        prev_0 = copied;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder(pool) {
    pool = pool === VOID ? Companion_getInstance_4().ie9_1 : pool;
    Output.call(this, pool);
  }
  protoOf(BytePacketBuilder).g = function () {
    return this.xei();
  };
  protoOf(BytePacketBuilder).r20 = function () {
    return this.xei() === 0;
  };
  protoOf(BytePacketBuilder).yei = function () {
  };
  protoOf(BytePacketBuilder).zei = function (source, offset, length) {
  };
  protoOf(BytePacketBuilder).i9 = function (value) {
    var tmp = protoOf(Output).i9.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).b = function (value) {
    var tmp = protoOf(Output).b.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).wi = function (value, startIndex, endIndex) {
    var tmp = protoOf(Output).wi.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  protoOf(BytePacketBuilder).df = function () {
    var size = this.g();
    var head = this.je8();
    return head == null ? Companion_getInstance_2().aej_1 : new ByteReadPacket(head, toLong(size), this.be8_1);
  };
  protoOf(BytePacketBuilder).toString = function () {
    return 'BytePacketBuilder(' + this.g() + ' bytes written)';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, objectCreate(protoOf(ByteReadPacket)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.aej_1 = new ByteReadPacket(Companion_getInstance_4().ke9_1, new Long(0, 0), Companion_getInstance_4().je9_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.gej();
  }
  protoOf(ByteReadPacket).oej = function () {
    return new ByteReadPacket(copyAll(this.bej()), this.peb(), this.ieb_1);
  };
  protoOf(ByteReadPacket).pej = function () {
    return null;
  };
  protoOf(ByteReadPacket).qej = function (destination, offset, length) {
    return 0;
  };
  protoOf(ByteReadPacket).rej = function () {
  };
  protoOf(ByteReadPacket).toString = function () {
    return 'ByteReadPacket(' + toString(this.peb()) + ' bytes remaining)';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.jeb_1 = newHead;
    $this.keb_1 = newHead.ze8_1;
    $this.leb_1 = newHead.ae9_1;
    $this.meb_1 = newHead.be9_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.oee())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0_anonymous = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0_anonymous_0 = tmp0_anonymous.ze8_1;
            var tmp1_anonymous = tmp0_anonymous.ae9_1;
            var tmp2_anonymous = tmp0_anonymous.be9_1;
            var inductionVariable = tmp1_anonymous;
            if (inductionVariable < tmp2_anonymous)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'io.ktor.utils.io.bits.get' call
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                var codepoint = tmp0_anonymous_0.veg_1.getInt8(index) & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp0_anonymous_1 = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.i9(tmp0_anonymous_1);
                    copied = copied + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp_0 = !tmp_1;
                }
                if (tmp_0) {
                  tmp0_anonymous.weg(index - tmp1_anonymous | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2_anonymous);
            var rc = tmp2_anonymous - tmp1_anonymous | 0;
            tmp0_anonymous.weg(rc);
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0_get_readRemaining_epkwe5 = current;
          var before = tmp0_get_readRemaining_epkwe5.be9_1 - tmp0_get_readRemaining_epkwe5.ae9_1 | 0;
          var after;
          if (before >= size) {
            try {
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp0_anonymous = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0_anonymous_0 = tmp0_anonymous.ze8_1;
                var tmp1_anonymous = tmp0_anonymous.ae9_1;
                var tmp2_anonymous = tmp0_anonymous.be9_1;
                var inductionVariable = tmp1_anonymous;
                if (inductionVariable < tmp2_anonymous)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    var v = tmp0_anonymous_0.veg_1.getInt8(index) & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp0_anonymous_1 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.i9(tmp0_anonymous_1);
                        copied = copied + 1 | 0;
                        tmp_0 = true;
                      }
                      if (!tmp_0) {
                        tmp0_anonymous.weg(index - tmp1_anonymous | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            byteCount = byteCount + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      byteCount = byteCount - 1 | 0;
                      if (lastByteCount > (tmp2_anonymous - index | 0)) {
                        tmp0_anonymous.weg(index - tmp1_anonymous | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      byteCount = byteCount - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp1_anonymous_0 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.i9(tmp1_anonymous_0);
                            copied = copied + 1 | 0;
                            tmp_1 = true;
                          }
                          if (!tmp_1) {
                            tmp0_anonymous.weg(((index - tmp1_anonymous | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp2_anonymous_0 = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.i9(tmp2_anonymous_0);
                            copied = copied + 1 | 0;
                            tmp_3 = true;
                          }
                          if (!tmp_3) {
                            tmp_2 = true;
                          } else {
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp3_anonymous = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.i9(tmp3_anonymous);
                              copied = copied + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp_2 = !tmp_4;
                          }
                          if (tmp_2) {
                            tmp0_anonymous.weg(((index - tmp1_anonymous | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2_anonymous);
                var rc = tmp2_anonymous - tmp1_anonymous | 0;
                tmp0_anonymous.weg(rc);
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              size = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1_get_readRemaining_socv24 = current;
              after = tmp1_get_readRemaining_socv24.be9_1 - tmp1_get_readRemaining_socv24.ae9_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2_get_endGap_b9q7e2 = current;
              var tmp_7 = tmp2_get_endGap_b9q7e2.ee9_1 - tmp2_get_endGap_b9q7e2.de9_1 | 0;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.dek(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = current.be9_1 - current.ae9_1 | 0;
        var tmp0_minOf = toLong(tmp$ret$0);
        var size = (tmp0_minOf.x(n_0) <= 0 ? tmp0_minOf : n_0).f1();
        current.weg(size);
        var tmp1_this = $this_0;
        tmp1_this.leb_1 = tmp1_this.leb_1 + size | 0;
        afterRead($this_0, current);
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        $this_0 = $this_0;
        n_0 = n_0.m9(toLong(size));
        skipped_0 = skipped_0.r7(toLong(size));
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.dek(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      // Inline function 'kotlin.comparisons.minOf' call
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp0_minOf = current.be9_1 - current.ae9_1 | 0;
      var tmp1_minOf = currentCount;
      var size = Math.min(tmp0_minOf, tmp1_minOf);
      current.weg(size);
      $this.leb_1 = $this.leb_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.oeb_1 ? current.w11() == null : false) {
      $this.leb_1 = current.ae9_1;
      $this.meb_1 = current.be9_1;
      $this.sej(new Long(0, 0));
      return Unit_getInstance();
    }
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = current.be9_1 - current.ae9_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var tmp0_minOf = 8 - (current.ee9_1 - current.de9_1 | 0) | 0;
    var overrun = Math.min(size, tmp0_minOf);
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.ieb_1.rei();
      Companion_getInstance_1();
      new_0.ceh(8);
      new_0.wei(current.uei());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.vei($this.ieb_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.ieb_1.rei();
    var chunk2 = $this.ieb_1.rei();
    Companion_getInstance_1();
    chunk1.ceh(8);
    Companion_getInstance_1();
    chunk2.ceh(8);
    chunk1.wei(chunk2);
    chunk2.wei(current.uei());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.sej(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.uei();
        current_0.vei($this_0.ieb_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.sej(new Long(0, 0));
          $this_0 = $this_0;
          current_0 = empty_0;
          empty_0 = empty_0;
          continue $l$0;
        } else {
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (next.be9_1 > next.ae9_1) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.neb_1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp1_minus = next.be9_1 - next.ae9_1 | 0;
            tmp$ret$2 = tmp0_minus.m9(toLong(tmp1_minus));
            tmp0_this.sej(tmp$ret$2);
            tmp = next;
          } else {
            $this_0 = $this_0;
            current_0 = next;
            empty_0 = empty_0;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.oeb_1)
      return null;
    var chunk = $this.pej();
    if (chunk == null) {
      $this.oeb_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.jeb_1);
    if (tail === Companion_getInstance_4().ke9_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.neb_1.equals(new Long(0, 0))) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.w11();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.sej(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.wei(chunk);
      $this.sej($this.neb_1.r7(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        var headSize = $this_0.meb_1 - $this_0.leb_1 | 0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.w11();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().ke9_1)) {
            $this_0.eek(head_0);
          }
          $this_0 = $this_0;
          minSize_0 = minSize_0;
          head_0 = next;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.meb_1 = head_0.be9_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          tmp$ret$1 = tmp2_this.neb_1.m9(toLong(copied));
          tmp2_this.sej(tmp$ret$1);
          // Inline function 'io.ktor.utils.io.core.canRead' call
          if (!(next.be9_1 > next.ae9_1)) {
            head_0.wei(null);
            head_0.wei(next.uei());
            next.vei($this_0.ieb_1);
          } else {
            next.beh(copied);
          }
        }
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        if ((head_0.be9_1 - head_0.ae9_1 | 0) >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        $this_0 = $this_0;
        minSize_0 = minSize_0;
        head_0 = head_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    if ((head.be9_1 - head.ae9_1 | 0) === 0) {
      $this.eek(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    head = head === VOID ? Companion_getInstance_4().ke9_1 : head;
    remaining = remaining === VOID ? remainingAll(head) : remaining;
    pool = pool === VOID ? Companion_getInstance_4().ie9_1 : pool;
    this.ieb_1 = pool;
    this.jeb_1 = head;
    this.keb_1 = head.ze8_1;
    this.leb_1 = head.ae9_1;
    this.meb_1 = head.be9_1;
    var tmp = this;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.meb_1 - this.leb_1 | 0;
    tmp.neb_1 = remaining.m9(toLong(tmp0_minus));
    this.oeb_1 = false;
  }
  protoOf(Input).oee = function () {
    var tmp;
    var tmp_0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((this.meb_1 - this.leb_1 | 0) === 0) {
      tmp_0 = this.neb_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.oeb_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Input).bej = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.jeb_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.zeg(this.leb_1);
    return tmp0_also;
  };
  protoOf(Input).sej = function (newValue) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newValue.x(new Long(0, 0)) >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      var message = "tailRemaining shouldn't be negative: " + toString(newValue);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.neb_1 = newValue;
  };
  protoOf(Input).peb = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.meb_1 - this.leb_1 | 0;
    return toLong(tmp$ret$0).r7(this.neb_1);
  };
  protoOf(Input).red = function () {
    return !(this.leb_1 === this.meb_1) ? true : !this.neb_1.equals(new Long(0, 0));
  };
  protoOf(Input).su = function () {
    var head = this.bej();
    var empty = Companion_getInstance_4().ke9_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.sej(new Long(0, 0));
      releaseAll(head, this.ieb_1);
    }
  };
  protoOf(Input).o1y = function () {
    this.su();
    if (!this.oeb_1) {
      this.oeb_1 = true;
    }
    this.rej();
  };
  protoOf(Input).je8 = function () {
    var head = this.bej();
    var empty = Companion_getInstance_4().ke9_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.sej(new Long(0, 0));
    return head;
  };
  protoOf(Input).tej = function () {
    var head = this.bej();
    var next = head.w11();
    var empty = Companion_getInstance_4().ke9_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.sej(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = this.neb_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp1_minus = next.be9_1 - next.ae9_1 | 0;
      tmp$ret$1 = tmp0_minus.m9(toLong(tmp1_minus));
      this.sej(tmp$ret$1);
    }
    head.wei(null);
    return head;
  };
  protoOf(Input).uej = function (chain) {
    if (chain === Companion_getInstance_4().ke9_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.jeb_1 === Companion_getInstance_4().ke9_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      var tmp0_minus = this.meb_1 - this.leb_1 | 0;
      tmp$ret$1 = size.m9(toLong(tmp0_minus));
      this.sej(tmp$ret$1);
    } else {
      findTail(this.jeb_1).wei(chain);
      this.sej(this.neb_1.r7(size));
    }
  };
  protoOf(Input).vej = function (chain) {
    var tail = findTail(this.bej());
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var size = chain.be9_1 - chain.ae9_1 | 0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = (tail.de9_1 - tail.be9_1 | 0) < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.bej() === tail) {
      this.meb_1 = tail.be9_1;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$2 = this.neb_1.r7(toLong(size));
      this.sej(tmp$ret$2);
    }
    return true;
  };
  protoOf(Input).wej = function (n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      var message = 'Negative discard is not allowed: ' + n;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  protoOf(Input).weg = function (n) {
    if (!(this.wej(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  protoOf(Input).mef = function (n) {
    if (n.x(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  protoOf(Input).xej = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.oee() : false)
      return '';
    var remaining = this.peb();
    if (remaining.x(new Long(0, 0)) > 0 ? toLong(max).x(remaining) >= 0 : false)
      return readTextExactBytes(this, remaining.f1());
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    return tmp0_apply.toString();
  };
  protoOf(Input).yej = function (min, max, $super) {
    min = min === VOID ? 0 : min;
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    return $super === VOID ? this.xej(min, max) : $super.xej.call(this, min, max);
  };
  protoOf(Input).zej = function (minSize) {
    return prepareReadLoop(this, minSize, this.bej());
  };
  protoOf(Input).aek = function (current) {
    return this.bek(current);
  };
  protoOf(Input).bek = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().ke9_1);
  };
  protoOf(Input).cek = function (current) {
    var tmp0_elvis_lhs = current.w11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var remaining = current.be9_1 - current.ae9_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    var tmp0_minOf = 8 - (current.ee9_1 - current.de9_1 | 0) | 0;
    var overrunSize = Math.min(remaining, tmp0_minOf);
    if (next.ce9_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.ieh();
      this.meb_1 = current.be9_1;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$3 = this.neb_1.r7(toLong(overrunSize));
      this.sej(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = this.neb_1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      var tmp3_minus = (next.be9_1 - next.ae9_1 | 0) - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.m9(toLong(tmp3_minus));
      this.sej(tmp$ret$5);
      current.uei();
      current.vei(this.ieb_1);
    }
  };
  protoOf(Input).pej = function () {
    var buffer = this.ieb_1.rei();
    try {
      Companion_getInstance_1();
      buffer.ceh(8);
      var tmp = buffer.be9_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.de9_1 - buffer.be9_1 | 0;
      var copied = this.qej(buffer.ze8_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.oeb_1 = true;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        if (!(buffer.be9_1 > buffer.ae9_1)) {
          buffer.vei(this.ieb_1);
          return null;
        }
      }
      buffer.xeg(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        buffer.vei(this.ieb_1);
        throw t;
      } else {
        throw $p;
      }
    }
  };
  protoOf(Input).gej = function () {
    if (!this.oeb_1) {
      this.oeb_1 = true;
    }
  };
  protoOf(Input).dek = function (minSize) {
    var head = this.bej();
    if ((this.meb_1 - this.leb_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  protoOf(Input).eek = function (head) {
    var tmp0_elvis_lhs = head.uei();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().ke9_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.neb_1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp1_minus = next.be9_1 - next.ae9_1 | 0;
    tmp$ret$1 = tmp0_minus.m9(toLong(tmp1_minus));
    this.sej(tmp$ret$1);
    head.vei(this.ieb_1);
    return next;
  };
  function discard_0(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.mef(new Long(-1, 2147483647));
  }
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? dst.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
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
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0_anonymous = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp1_minOf = tmp0_anonymous.be9_1 - tmp0_anonymous.ae9_1 | 0;
          var count = Math.min(tmp0_minOf, tmp1_minOf);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp0_anonymous_0 = dstOffset;
          readFully(tmp0_anonymous, dst, tmp0_anonymous_0, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
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
    var tmp1_requireNoRemaining = remaining;
    if (tmp1_requireNoRemaining > 0) {
      prematureEndOfStream(tmp1_requireNoRemaining);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp = dst.de9_1 - dst.be9_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var current = tmp_0;
      try {
        $l$loop_0: do {
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0_anonymous = current;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp1_minOf = tmp0_anonymous.be9_1 - tmp0_anonymous.ae9_1 | 0;
          var count = Math.min(tmp0_minOf, tmp1_minOf);
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          readFully_0(tmp0_anonymous, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          if (!(remaining > 0)) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var next = tmp_1;
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
    var tmp1_requireNoRemaining = remaining;
    if (tmp1_requireNoRemaining > 0) {
      prematureEndOfStream(tmp1_requireNoRemaining);
    }
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      if ((_this__u8e3s4.meb_1 - _this__u8e3s4.leb_1 | 0) > 2) {
        var index = _this__u8e3s4.leb_1;
        _this__u8e3s4.leb_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$3 = _this__u8e3s4.keb_1.veg_1.getInt16(index, false);
        break $l$block;
      }
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$3 = readShortFallback(_this__u8e3s4);
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    var value = readShort(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.je8();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0_anonymous = current;
        var tmp_0 = tmp0_anonymous.ae9_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0_anonymous.be9_1 - tmp0_anonymous.ae9_1 | 0;
        $this.zei(tmp0_anonymous.ze8_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.w11();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.be8_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.be8_1.rei();
    Companion_getInstance_1();
    new_0.ceh(8);
    $this.cej(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.de8_1;
    if (_tail == null) {
      $this.ce8_1 = head;
      $this.ie8_1 = 0;
    } else {
      _tail.wei(head);
      var tailPosition = $this.fe8_1;
      _tail.yeg(tailPosition);
      $this.ie8_1 = $this.ie8_1 + (tailPosition - $this.he8_1 | 0) | 0;
    }
    $this.de8_1 = newTail;
    $this.ie8_1 = $this.ie8_1 + chainedSizeDelta | 0;
    $this.ee8_1 = newTail.ze8_1;
    $this.fe8_1 = newTail.be9_1;
    $this.he8_1 = newTail.ae9_1;
    $this.ge8_1 = newTail.de9_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).leh(v);
    $this.fe8_1 = $this.fe8_1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.eej(3);
      try {
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp0_putUtf8Char = buffer.ze8_1;
        var tmp1_putUtf8Char = buffer.be9_1;
        // Inline function 'kotlin.code' call
        var tmp2_putUtf8Char = Char__toInt_impl_vasixd(c);
        var tmp;
        if (0 <= tmp2_putUtf8Char ? tmp2_putUtf8Char <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp2_putUtf8Char);
          tmp0_putUtf8Char.veg_1.setInt8(tmp1_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp2_putUtf8Char ? tmp2_putUtf8Char <= 2047 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp2_putUtf8Char >> 6 & 31);
          tmp0_putUtf8Char.veg_1.setInt8(tmp1_putUtf8Char, tmp1_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp1_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp2_putUtf8Char & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp2_set, tmp3_set);
          tmp = 2;
        } else if (2048 <= tmp2_putUtf8Char ? tmp2_putUtf8Char <= 65535 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp2_putUtf8Char >> 12 & 15);
          tmp0_putUtf8Char.veg_1.setInt8(tmp1_putUtf8Char, tmp4_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp1_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp2_putUtf8Char >> 6 & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp5_set, tmp6_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp1_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp2_putUtf8Char & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp7_set, tmp8_set);
          tmp = 3;
        } else if (65536 <= tmp2_putUtf8Char ? tmp2_putUtf8Char <= 1114111 : false) {
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp2_putUtf8Char >> 18 & 7);
          tmp0_putUtf8Char.veg_1.setInt8(tmp1_putUtf8Char, tmp9_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp1_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp2_putUtf8Char >> 12 & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp10_set, tmp11_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp1_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp2_putUtf8Char >> 6 & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp12_set, tmp13_set);
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp1_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp2_putUtf8Char & 63);
          tmp0_putUtf8Char.veg_1.setInt8(tmp14_set, tmp15_set);
          tmp = 4;
        } else {
          malformedCodePoint(tmp2_putUtf8Char);
        }
        var size = tmp;
        buffer.xeg(size);
        var result = size;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(result >= 0)) {
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          var message = "The returned value shouldn't be negative";
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$block;
      }finally {
        $this.ueg();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.yeg($this.fe8_1);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var lastSize = tail.be9_1 - tail.ae9_1 | 0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var nextSize = foreignStolen.be9_1 - foreignStolen.ae9_1 | 0;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      var tmp_1 = tail.ee9_1 - tail.de9_1 | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp_0 = nextSize <= (tmp_1 + (tail.de9_1 - tail.be9_1 | 0) | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.ce9_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.dej(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp_3 = tail.de9_1 - tail.be9_1 | 0;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.ee9_1 - tail.de9_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.ueg();
      var tmp0_safe_receiver = foreignStolen.uei();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.dej(tmp0_safe_receiver);
      }
      foreignStolen.vei(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.ce8_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.ce8_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.w11());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.wei(foreignStolen);
    }
    tail.vei($this.be8_1);
    $this.de8_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.be8_1 = pool;
    this.ce8_1 = null;
    this.de8_1 = null;
    this.ee8_1 = Companion_getInstance_6().fek_1;
    this.fe8_1 = 0;
    this.ge8_1 = 0;
    this.he8_1 = 0;
    this.ie8_1 = 0;
  }
  protoOf(Output).xei = function () {
    return this.ie8_1 + (this.fe8_1 - this.he8_1 | 0) | 0;
  };
  protoOf(Output).bej = function () {
    var tmp0_elvis_lhs = this.ce8_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().ke9_1 : tmp0_elvis_lhs;
  };
  protoOf(Output).gh = function () {
    flushChain(this);
  };
  protoOf(Output).je8 = function () {
    var tmp0_elvis_lhs = this.ce8_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.de8_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.yeg(this.fe8_1);
    this.ce8_1 = null;
    this.de8_1 = null;
    this.fe8_1 = 0;
    this.ge8_1 = 0;
    this.he8_1 = 0;
    this.ie8_1 = 0;
    this.ee8_1 = Companion_getInstance_6().fek_1;
    return head;
  };
  protoOf(Output).cej = function (buffer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(buffer.w11() == null)) {
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      var message = 'It should be a single buffer chunk.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  protoOf(Output).dej = function (head) {
    var tail = findTail(head);
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp1_minus = tail.be9_1 - tail.ae9_1 | 0;
    var tmp2_toIntOrFail = tmp0_minus.m9(toLong(tmp1_minus));
    if (tmp2_toIntOrFail.x(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    var chainedSizeDelta = tmp2_toIntOrFail.f1();
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  protoOf(Output).leh = function (v) {
    var index = this.fe8_1;
    if (index < this.ge8_1) {
      this.fe8_1 = index + 1 | 0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      this.ee8_1.veg_1.setInt8(index, v);
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  protoOf(Output).o1y = function () {
    try {
      this.gh();
    }finally {
      this.yei();
    }
  };
  protoOf(Output).i9 = function (value) {
    var tailPosition = this.fe8_1;
    if ((this.ge8_1 - tailPosition | 0) >= 3) {
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = this.ee8_1;
      // Inline function 'kotlin.code' call
      var tmp1_putUtf8Char = Char__toInt_impl_vasixd(value);
      var tmp;
      if (0 <= tmp1_putUtf8Char ? tmp1_putUtf8Char <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp1_putUtf8Char);
        tmp0_putUtf8Char.veg_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp1_putUtf8Char ? tmp1_putUtf8Char <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp1_putUtf8Char >> 6 & 31);
        tmp0_putUtf8Char.veg_1.setInt8(tailPosition, tmp1_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp1_putUtf8Char & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp2_set, tmp3_set);
        tmp = 2;
      } else if (2048 <= tmp1_putUtf8Char ? tmp1_putUtf8Char <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp1_putUtf8Char >> 12 & 15);
        tmp0_putUtf8Char.veg_1.setInt8(tailPosition, tmp4_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp1_putUtf8Char >> 6 & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp5_set, tmp6_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp1_putUtf8Char & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp7_set, tmp8_set);
        tmp = 3;
      } else if (65536 <= tmp1_putUtf8Char ? tmp1_putUtf8Char <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp1_putUtf8Char >> 18 & 7);
        tmp0_putUtf8Char.veg_1.setInt8(tailPosition, tmp9_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp1_putUtf8Char >> 12 & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp10_set, tmp11_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp1_putUtf8Char >> 6 & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp12_set, tmp13_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp1_putUtf8Char & 63);
        tmp0_putUtf8Char.veg_1.setInt8(tmp14_set, tmp15_set);
        tmp = 4;
      } else {
        malformedCodePoint(tmp1_putUtf8Char);
      }
      var size = tmp;
      this.fe8_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  protoOf(Output).b = function (value) {
    if (value == null) {
      this.wi('null', 0, 4);
    } else {
      this.wi(value, 0, charSequenceLength(value));
    }
    return this;
  };
  protoOf(Output).wi = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.wi('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().gek_1);
    return this;
  };
  protoOf(Output).qeb = function (packet) {
    var foreignStolen = packet.je8();
    if (foreignStolen == null) {
      packet.su();
      return Unit_getInstance();
    }
    var tail = this.de8_1;
    if (tail == null) {
      this.dej(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.ieb_1);
  };
  protoOf(Output).ke8 = function (chunkBuffer) {
    var _tail = this.de8_1;
    if (_tail == null) {
      this.dej(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.be8_1);
  };
  protoOf(Output).eed = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.x(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.meb_1 - p.leb_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.x(remaining) <= 0) {
        remaining = remaining.m9(headRemaining);
        var tmp0_elvis_lhs = p.tej();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.cej(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.dek(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.ae9_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.f1());
        }finally {
          var positionAfter = buffer.ae9_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.be9_1) {
            p.bek(buffer);
          } else {
            p.leb_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  protoOf(Output).su = function () {
    this.o1y();
  };
  protoOf(Output).eej = function (n) {
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    if ((this.ge8_1 - this.fe8_1 | 0) >= n) {
      var tmp0_safe_receiver = this.de8_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.yeg(this.fe8_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  protoOf(Output).ueg = function () {
    var tmp0_safe_receiver = this.de8_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fe8_1 = tmp0_safe_receiver.be9_1;
    }
  };
  protoOf(Output).fej = function () {
    var head = this.bej();
    if (!(head === Companion_getInstance_4().ke9_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(head.w11() == null)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.eeh();
      Companion_getInstance_1();
      head.ceh(8);
      this.fe8_1 = head.be9_1;
      this.he8_1 = this.fe8_1;
      this.ge8_1 = head.de9_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    var tmp;
    if (length === VOID) {
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp = src.be9_1 - src.ae9_1 | 0;
    } else {
      tmp = length;
    }
    length = tmp;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0_anonymous = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var tmp1_minOf = tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0;
        var size = Math.min(tmp0_minOf, tmp1_minOf);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        writeFully_1(tmp0_anonymous, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.ueg();
    }
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.length - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0_anonymous = tail;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        var tmp1_minOf = tmp0_anonymous.de9_1 - tmp0_anonymous.be9_1 | 0;
        var size = Math.min(tmp0_minOf, tmp1_minOf);
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp0_anonymous_0 = currentOffset;
        writeFully_0(tmp0_anonymous, src, tmp0_anonymous_0, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        if (!(remaining > 0))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.ueg();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.fe8_1;
      if ((_this__u8e3s4.ge8_1 - index | 0) > 2) {
        _this__u8e3s4.fe8_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        _this__u8e3s4.ee8_1.veg_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.eej(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.ueg();
    if (!true) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.leh(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.leh(tmp$ret$2);
    }
  }
  function readText(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    max = max === VOID ? IntCompanionObject_getInstance().MAX_VALUE : max;
    return decode(charset.jek(), _this__u8e3s4, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (n === VOID) {
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.peb();
      if (tmp0_coerceAtMostMaxIntOrFail.x(toLong(IntCompanionObject_getInstance().MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp = tmp0_coerceAtMostMaxIntOrFail.f1();
    } else {
      tmp = n;
    }
    n = tmp;
    var tmp_0;
    if (!(n === 0)) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, tmp0_also, 0, n);
      tmp_0 = tmp0_also;
    } else {
      tmp_0 = get_EmptyByteArray();
    }
    return tmp_0;
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    return decodeExactBytes(charset.jek(), _this__u8e3s4, bytesCount);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    if (charset === Charsets_getInstance().gek_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.kek(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0_anonymous = tail;
        var memory = tmp0_anonymous.ze8_1;
        var dstOffset = tmp0_anonymous.be9_1;
        var dstLimit = tmp0_anonymous.de9_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        // Inline function 'kotlin.UShort.toInt' call
        index = tmp + (_UShort___get_data__impl__g0245(characters) & 65535) | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0_anonymous.xeg(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        // Inline function 'kotlin.UShort.toInt' call
        if ((_UShort___get_data__impl__g0245(characters) & 65535) === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        size = tmp_0;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.ueg();
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  protoOf(ChunkBuffer$Companion$Pool$1).rei = function () {
    return get_DefaultChunkedBufferPool().rei();
  };
  protoOf(ChunkBuffer$Companion$Pool$1).lek = function (instance) {
    get_DefaultChunkedBufferPool().sei(instance);
  };
  protoOf(ChunkBuffer$Companion$Pool$1).sei = function (instance) {
    return this.lek(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(ChunkBuffer$Companion$Pool$1).gp = function () {
    get_DefaultChunkedBufferPool().gp();
  };
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  protoOf(ChunkBuffer$Companion$EmptyPool$1).rei = function () {
    return Companion_getInstance_4().ke9_1;
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).lek = function (instance) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(instance === Companion_getInstance_4().ke9_1)) {
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      var message = 'Only ChunkBuffer.Empty instance could be recycled.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).sei = function (instance) {
    return this.lek(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  protoOf(ChunkBuffer$Companion$EmptyPool$1).gp = function () {
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPool$1).rei = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().teh(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).lek = function (instance) {
    DefaultAllocator_getInstance().veh(instance.ze8_1);
  };
  protoOf(ChunkBuffer$Companion$NoPool$1).sei = function (instance) {
    return this.lek(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).rei = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).lek = function (instance) {
  };
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).sei = function (instance) {
    return this.lek(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.hei_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.ie9_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.je9_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.ke9_1 = new ChunkBuffer(Companion_getInstance_6().fek_1, null, this.je9_1);
    var tmp_1 = this;
    tmp_1.le9_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.me9_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.gei_1 = parentPool;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(origin === this)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      var message = "A chunk couldn't be a view of itself.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.hei_1 = atomic$ref$1(null);
    this.iei_1 = atomic$int$1(1);
    this.jei_1 = origin;
  }
  protoOf(ChunkBuffer).wei = function (newValue) {
    if (newValue == null) {
      this.uei();
    } else {
      appendNext(this, newValue);
    }
  };
  protoOf(ChunkBuffer).w11 = function () {
    return this.hei_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).nei = function () {
    return this.iei_1.kotlinx$atomicfu$value;
  };
  protoOf(ChunkBuffer).uei = function () {
    return this.hei_1.atomicfu$getAndSet(null);
  };
  protoOf(ChunkBuffer).tei = function () {
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.jei_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.mek();
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.ze8_1, tmp0_let, this.gei_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.jeh(tmp0_also);
    return tmp0_also;
  };
  protoOf(ChunkBuffer).vei = function (pool) {
    if (this.nek()) {
      var origin = this.jei_1;
      if (!(origin == null)) {
        this.kei();
        origin.vei(pool);
      } else {
        var tmp0_elvis_lhs = this.gei_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.sei(this);
      }
    }
  };
  protoOf(ChunkBuffer).kei = function () {
    if (!this.iei_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.uei();
    this.jei_1 = null;
  };
  protoOf(ChunkBuffer).mek = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.iei_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        var upd = cur + 1 | 0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).qei = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.iei_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        var upd = 1;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(ChunkBuffer).nek = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.iei_1;
      while (true) {
        var cur = tmp0_updateAndGet.kotlinx$atomicfu$value;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        var upd = cur - 1 | 0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  protoOf(ChunkBuffer).p25 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.jei_1 == null)) {
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      var message = 'Unable to reset buffer with origin';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    protoOf(Buffer).p25.call(this);
    this.hei_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.nei() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp = (_UShort___get_data__impl__g0245(characters) & 65535) << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    return _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0_get_highShort_uhoxp = _EncodeResult___get_value__impl__h0r466($this);
    var tmp1_toUShort = toShort(tmp0_get_highShort_uhoxp >>> 16 | 0);
    return _UShort___init__impl__jigrne(tmp1_toUShort);
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    // Inline function 'kotlin.toUShort' call
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0_get_lowShort_4qevkr = _EncodeResult___get_value__impl__h0r466($this);
    var tmp1_toUShort = toShort(tmp0_get_lowShort_4qevkr & 65535);
    return _UShort___init__impl__jigrne(tmp1_toUShort);
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    var tmp1_minOf = from + (_UShort___get_data__impl__g0245(tmp0_toInt) & 65535) | 0;
    var lastCharIndex = Math.min(to, tmp1_minOf);
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        var tmp = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5_get_code_wtnftn = charSequenceGet(text, tmp0);
      var character = Char__toInt_impl_vasixd(tmp5_get_code_wtnftn) & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.veg_1.setInt8(tmp1, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    index = index - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp_1;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp2_set, tmp3_set);
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp5_set, tmp6_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp7_set, tmp8_set);
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp10_set, tmp11_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp12_set, tmp13_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp14_set, tmp15_set);
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_1;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    var tmp_2 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    // Inline function 'kotlin.code' call
    var highValue = Char__toInt_impl_vasixd(high) - 55232 | 0;
    // Inline function 'kotlin.code' call
    var lowValue = Char__toInt_impl_vasixd(low) - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(character);
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp_1;
      if (1 <= codepoint ? codepoint <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      if (tmp_1 > freeSpace) {
        index = index - 1 | 0;
        break $l$loop_0;
      }
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp_2;
      if (0 <= codepoint ? codepoint <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= codepoint ? codepoint <= 2047 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp2_set, tmp3_set);
        tmp_2 = 2;
      } else if (2048 <= codepoint ? codepoint <= 65535 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp5_set, tmp6_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp7_set, tmp8_set);
        tmp_2 = 3;
      } else if (65536 <= codepoint ? codepoint <= 1114111 : false) {
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.veg_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp10_set, tmp11_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.veg_1.setInt8(tmp12_set, tmp13_set);
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.veg_1.setInt8(tmp14_set, tmp15_set);
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      var size = tmp_2;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    var tmp_3 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    _init_properties_Unsafe_kt__orlvcq();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      // Inline function 'io.ktor.utils.io.core.canRead' call
      if (!(current.be9_1 > current.ae9_1)) {
        _this__u8e3s4.bek(current);
      } else {
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        var tmp = current.ee9_1 - current.de9_1 | 0;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.cek(current);
        } else {
          _this__u8e3s4.leb_1 = current.ae9_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    _init_properties_Unsafe_kt__orlvcq();
    return _this__u8e3s4.zej(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.red() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.aek(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    _init_properties_Unsafe_kt__orlvcq();
    var builderSize = builder.g();
    var tmp0_elvis_lhs = builder.je8();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.w11() == null : false) ? _this__u8e3s4.vej(builderHead) : false) {
      builder.fej();
      return builderSize;
    }
    _this__u8e3s4.uej(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    _init_properties_Unsafe_kt__orlvcq();
    if (!(current == null)) {
      _this__u8e3s4.ueg();
    }
    return _this__u8e3s4.eej(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function _init_properties_Unsafe_kt__orlvcq() {
    if (!properties_initialized_Unsafe_kt_o5mw48) {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $completion) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iel_1 = _this__u8e3s4;
    this.jel_1 = sleepCondition;
  }
  protoOf($sleepCOROUTINE$52).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.dl_1 = 1;
            suspendResult = trySuspend(this.iel_1, this.jel_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.dl_1 = 2;
              continue $sm;
            }

          case 2:
            this.iel_1.se7();
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
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wek_1 = _this__u8e3s4;
    this.xek_1 = sleepCondition;
  }
  protoOf($trySuspendCOROUTINE$53).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 3;
            this.yek_1 = false;
            this.zek_1 = Job_0();
            if (this.wek_1.re7_1.atomicfu$compareAndSet(null, this.zek_1) ? this.xek_1() : false) {
              this.yek_1 = true;
              this.dl_1 = 1;
              suspendResult = this.zek_1.un(this);
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
            return this.yek_1;
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
  function AwaitingSlot() {
    this.re7_1 = atomic$ref$1(null);
  }
  protoOf(AwaitingSlot).mea = function (sleepCondition, $completion) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  };
  protoOf(AwaitingSlot).se7 = function () {
    var tmp0_safe_receiver = this.re7_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.ku();
  };
  protoOf(AwaitingSlot).n6o = function (cause) {
    var tmp0_elvis_lhs = this.re7_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.ju(cause);
    } else {
      continuation.ku();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $completion) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $completion);
    tmp.fl_1 = Unit_getInstance();
    tmp.gl_1 = null;
    return tmp.ml();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sel_1 = _this__u8e3s4;
    this.tel_1 = dst;
    this.uel_1 = limit;
  }
  protoOf($copyToSequentialImplCOROUTINE$54).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 10;
            if (!!(this.sel_1 === this.tel_1)) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.sel_1.le8() == null)) {
              this.tel_1.m16(this.sel_1.le8());
              return new Long(0, 0);
            }

            this.vel_1 = this.uel_1;
            this.dl_1 = 1;
            continue $sm;
          case 1:
            if (!(this.vel_1.x(new Long(0, 0)) > 0)) {
              this.dl_1 = 9;
              continue $sm;
            }

            this.dl_1 = 2;
            suspendResult = this.sel_1.yef(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wel_1 = suspendResult;
            if (!this.wel_1) {
              this.dl_1 = 9;
              continue $sm;
            } else {
              this.dl_1 = 3;
              continue $sm;
            }

          case 3:
            this.xel_1 = this.sel_1.aeg(this.tel_1, this.vel_1);
            if (this.xel_1.equals(new Long(0, 0))) {
              this.dl_1 = 6;
              suspendResult = copyToTail(this.sel_1, this.tel_1, this.vel_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tel_1.aea() === 0) {
                this.dl_1 = 4;
                suspendResult = this.tel_1.heb(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.dl_1 = 5;
                continue $sm;
              }
            }

          case 4:
            this.dl_1 = 5;
            continue $sm;
          case 5:
            this.yel_1 = this.xel_1;
            this.dl_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.dl_1 = 9;
              continue $sm;
            } else {
              this.dl_1 = 7;
              continue $sm;
            }

          case 7:
            this.yel_1 = tail;
            this.dl_1 = 8;
            continue $sm;
          case 8:
            var copied = this.yel_1;
            this.vel_1 = this.vel_1.m9(copied);
            if (copied.x(new Long(0, 0)) > 0) {
              this.tel_1.gh();
            }

            this.dl_1 = 1;
            continue $sm;
          case 9:
            return this.uel_1.m9(this.vel_1);
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
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hem_1 = _this__u8e3s4;
    this.iem_1 = dst;
    this.jem_1 = limit;
  }
  protoOf($copyToTailCOROUTINE$55).ml = function () {
    var suspendResult = this.fl_1;
    $sm: do
      try {
        var tmp = this.dl_1;
        switch (tmp) {
          case 0:
            this.el_1 = 9;
            this.kem_1 = Companion_getInstance_4().ie9_1.rei();
            this.dl_1 = 1;
            continue $sm;
          case 1:
            this.dl_1 = 2;
            continue $sm;
          case 2:
            this.el_1 = 8;
            this.kem_1.feh(coerceAtMost_0(this.jem_1, toLong(this.kem_1.ee9_1)).f1());
            this.dl_1 = 3;
            suspendResult = this.hem_1.vef(this.kem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.mem_1 = suspendResult;
            if (this.mem_1 === -1) {
              this.kem_1.vei(Companion_getInstance_4().ie9_1);
              this.lem_1 = new Long(0, 0);
              this.el_1 = 9;
              this.dl_1 = 6;
              continue $sm;
            } else {
              this.dl_1 = 4;
              continue $sm;
            }

          case 4:
            this.dl_1 = 5;
            suspendResult = this.iem_1.ref(this.kem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.lem_1 = toLong(this.mem_1);
            this.el_1 = 9;
            this.dl_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.lem_1;
            this.kem_1.vei(Companion_getInstance_4().ie9_1);
            return tmp_1;
          case 7:
            this.kem_1.vei(Companion_getInstance_4().ie9_1);
            return Unit_getInstance();
          case 8:
            this.el_1 = 9;
            var t = this.gl_1;
            this.kem_1.vei(Companion_getInstance_4().ie9_1);
            throw t;
          case 9:
            throw this.gl_1;
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
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).seh = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).sei = function (instance) {
  };
  protoOf(NoPoolImpl).gp = function () {
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    return new ByteChannelJS(Companion_getInstance_4().ke9_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $completion) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $completion);
  }
  function ByteReadChannel_0(content, offset, length) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (content.length === 0)
      return Companion_getInstance_5().ge9();
    var head = Companion_getInstance_4().ie9_1.rei();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.ceh(8);
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0_get_writeRemaining_370c0c = tail;
      var tmp2_minOf = tmp0_get_writeRemaining_370c0c.de9_1 - tmp0_get_writeRemaining_370c0c.be9_1 | 0;
      var size = Math.min(tmp1_minOf, tmp2_minOf);
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().ie9_1.rei();
      current.wei(tail);
    }
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    return tmp3_apply;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.fen_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.xr(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase.call(this, initial, autoFlush);
    this.fen_1 = null;
  }
  protoOf(ByteChannelJS).beg = function (job) {
    var tmp0_safe_receiver = this.fen_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.yn();
    }
    this.fen_1 = job;
    job.tn(true, VOID, ByteChannelJS$attachJob$lambda(this));
  };
  protoOf(ByteChannelJS).toString = function () {
    return 'ByteChannel[' + this.fen_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().ke9_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.m16(null);
    return tmp0_apply;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.qem_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  protoOf(Companion_3).ge9 = function () {
    // Inline function 'kotlin.getValue' call
    Empty$factory();
    return this.qem_1.s();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.ge9();
    }, null);
  }
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  protoOf(DefaultAllocator).teh = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  protoOf(DefaultAllocator).veh = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length - offset | 0 : length;
    // Inline function 'kotlin.js.asDynamic' call
    var typedArray = array;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? view.byteLength : length;
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.byteLength - offset | 0 : length;
    return new Memory(new DataView(buffer, offset, length));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.fek_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.veg_1 = view;
  }
  protoOf(Memory).gen = function (offset, length) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message = "offset shouldn't be negative: " + offset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      var message_0 = "length shouldn't be negative: " + length;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.veg_1.byteLength);
    if (tmp.x(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.veg_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.veg_1.buffer, this.veg_1.byteOffset + offset | 0, length));
  };
  protoOf(Memory).meh = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.veg_1.buffer, this.veg_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.veg_1.buffer, destination.veg_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    // Inline function 'kotlin.js.asDynamic' call
    var to = destination;
    var from = new Int8Array(_this__u8e3s4.veg_1.buffer, _this__u8e3s4.veg_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.veg_1.buffer, destination.veg_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).hen = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().gek_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var tmp0_let = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call

        var tmp_2;
        if (tmp0_let === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_2 = tmp0_let.toLowerCase() === 'iso-8859-1';
        }

        tmp_1 = tmp_2;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().hek_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_5).ien = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            var tmp0_let = replace(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call

            var tmp_2;
            if (tmp0_let === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = tmp0_let.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.iek_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(this.constructor, other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    if (!(this.iek_1 === other.iek_1))
      return false;
    return true;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.iek_1);
  };
  protoOf(Charset).toString = function () {
    return this.iek_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.iek_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.gek_1 = new CharsetImpl('UTF-8');
    this.hek_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.jen_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.ken_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.men_1 = name;
  }
  protoOf(CharsetImpl).kek = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).jek = function () {
    return new CharsetDecoderImpl(this);
  };
  protoOf(CharsetImpl).toString = function () {
    return 'CharsetImpl(name=' + this.men_1 + ')';
  };
  protoOf(CharsetImpl).hashCode = function () {
    return getStringHashCode(this.men_1);
  };
  protoOf(CharsetImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.men_1 === tmp0_other_with_cast.men_1))
      return false;
    return true;
  };
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().ie9_1.rei();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.be9_1 - single.ae9_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = new BytePacketBuilder();
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.cej(single.tei());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.df();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            builder.su();
            throw t;
          } else {
            throw $p;
          }
        }
      }
      return readBytes(tmp$ret$1);
    }finally {
      single.vei(Companion_getInstance_4().ie9_1);
    }
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.oen_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.oen_1 + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.oen_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.oen_1.equals(tmp0_other_with_cast.oen_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.qen_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.qen_1 + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.qen_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.qen_1.equals(tmp0_other_with_cast.qen_1))
      return false;
    return true;
  };
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().hek_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().gek_1)) {
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    var dstRemaining = dst.de9_1 - dst.be9_1 | 0;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully_4(dst, array1);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.ken_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var charactersCopied = 0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0_get_readRemaining_epkwe5 = current;
          var before = tmp0_get_readRemaining_epkwe5.be9_1 - tmp0_get_readRemaining_epkwe5.ae9_1 | 0;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp0_anonymous = current;
                var rem = max - charactersCopied | 0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var bufferSize = tmp0_anonymous.be9_1 - tmp0_anonymous.ae9_1 | 0;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0_anonymous_0 = tmp0_anonymous.ze8_1;
                var tmp1_anonymous = tmp0_anonymous.ae9_1;
                var tmp2_anonymous = tmp0_anonymous.be9_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp0_anonymous_1 = new Int8Array(tmp0_anonymous_0.veg_1.buffer, tmp0_anonymous_0.veg_1.byteOffset + tmp1_anonymous | 0, tmp2_anonymous - tmp1_anonymous | 0);
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.ren(tmp0_anonymous_1, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t_0 = $p;
                      var tmp0_elvis_lhs_1 = t_0.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$4;
                dst.b(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                var rc = tmp0_anonymous_1.byteLength;
                tmp0_anonymous.weg(rc);
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.sen();
                  } catch ($p) {
                    var tmp_2;
                    var _ = $p;
                    tmp_2 = '';
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  if (charSequenceLength(tail) > 0) {
                    tmp0_anonymous.aeh(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1_get_readRemaining_socv24 = current;
              after = tmp1_get_readRemaining_socv24.be9_1 - tmp1_get_readRemaining_socv24.ae9_1 | 0;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2_get_endGap_b9q7e2 = current;
              var tmp_5 = tmp2_get_endGap_b9q7e2.ee9_1 - tmp2_get_endGap_b9q7e2.de9_1 | 0;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp0_get_readRemaining_epkwe5_0 = current_0;
            var before_0 = tmp0_get_readRemaining_epkwe5_0.be9_1 - tmp0_get_readRemaining_epkwe5_0.ae9_1 | 0;
            var after_0;
            if (before_0 >= size_1) {
              try {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp1_anonymous_0 = current_0;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0_anonymous_2 = tmp1_anonymous_0.ze8_1;
                var tmp1_anonymous_1 = tmp1_anonymous_0.ae9_1;
                var tmp2_anonymous_0 = tmp1_anonymous_0.be9_1;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp0_anonymous_3 = new Int8Array(tmp0_anonymous_2.veg_1.buffer, tmp0_anonymous_2.veg_1.byteOffset + tmp1_anonymous_1 | 0, tmp2_anonymous_0 - tmp1_anonymous_1 | 0);
                var result = decodeBufferImpl(tmp0_anonymous_3, decoder, max - charactersCopied | 0);
                dst.b(result.ten_1);
                charactersCopied = charactersCopied + result.ten_1.length | 0;
                var rc_0 = result.uen_1;
                tmp1_anonymous_0.weg(rc_0);
                var rc_1 = rc_0;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  size_0 = size_0 + 1 | 0;
                }
                size_1 = size_0;
              }finally {
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp1_get_readRemaining_socv24_0 = current_0;
                after_0 = tmp1_get_readRemaining_socv24_0.be9_1 - tmp1_get_readRemaining_socv24_0.ae9_1 | 0;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp2_get_endGap_b9q7e2_0 = current_0;
                var tmp_10 = tmp2_get_endGap_b9q7e2_0.ee9_1 - tmp2_get_endGap_b9q7e2_0.de9_1 | 0;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    if ((input.meb_1 - input.leb_1 | 0) >= inputLength) {
      var decoder = Decoder(get_charset_0(_this__u8e3s4).iek_1, true);
      var head = input.bej();
      var view = input.keb_1.veg_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.ae9_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.ae9_1 | 0, inputLength);
          tmp$ret$2 = decoder.ven(subView);
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            var tmp0_elvis_lhs = t.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.weg(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.jen_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0_get_readRemaining_epkwe5 = current;
              var before = tmp0_get_readRemaining_epkwe5.be9_1 - tmp0_get_readRemaining_epkwe5.ae9_1 | 0;
              var after;
              if (before >= size) {
                try {
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp0_anonymous = current;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var chunkSize = tmp0_anonymous.be9_1 - tmp0_anonymous.ae9_1 | 0;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  var size_0 = Math.min(chunkSize, tmp0_minOf);
                  var tmp_0;
                  if (tmp0_anonymous.ae9_1 === 0 ? tmp0_anonymous.ze8_1.veg_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp0_anonymous.ze8_1.veg_1;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.ren(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t = $p;
                          var tmp0_elvis_lhs_0 = t.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp0_anonymous.ze8_1.veg_1.buffer, tmp0_anonymous.ze8_1.veg_1.byteOffset + tmp0_anonymous.ae9_1 | 0, size_0);
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.ren(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var t_0 = $p;
                          var tmp0_elvis_lhs_1 = t_0.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.ia(text);
                  tmp0_anonymous.weg(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  size = inputRemaining > 0 ? 6 : 0;
                }finally {
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1_get_readRemaining_socv24 = current;
                  after = tmp1_get_readRemaining_socv24.be9_1 - tmp1_get_readRemaining_socv24.ae9_1 | 0;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2_get_endGap_b9q7e2 = current;
                  var tmp_3 = tmp2_get_endGap_b9q7e2.ee9_1 - tmp2_get_endGap_b9q7e2.de9_1 | 0;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp1_anonymous = current_0;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var chunkSize_0 = tmp1_anonymous.be9_1 - tmp1_anonymous.ae9_1 | 0;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                var size_1 = Math.min(chunkSize_0, tmp0_minOf_0);
                var tmp_6;
                if (tmp1_anonymous.ae9_1 === 0 ? tmp1_anonymous.ze8_1.veg_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.ven(tmp1_anonymous.ze8_1.veg_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp1_anonymous.ze8_1.veg_1.buffer, tmp1_anonymous.ze8_1.veg_1.byteOffset + tmp1_anonymous.ae9_1 | 0, size_1);
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.ren(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var t_1 = $p;
                        var tmp0_elvis_lhs_3 = t_1.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.ia(text_0);
                tmp1_anonymous.weg(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                if (!true) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        sb.ia(decoder.sen());
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var t_2 = $p;
          var tmp0_elvis_lhs_4 = t_2.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.ten_1 = charactersDecoded;
    this.uen_1 = bytesConsumed;
  }
  protoOf(DecodeBufferResult).toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.ten_1 + ', bytesConsumed=' + this.uen_1 + ')';
  };
  protoOf(DecodeBufferResult).hashCode = function () {
    var result = getStringHashCode(this.ten_1);
    result = imul(result, 31) + this.uen_1 | 0;
    return result;
  };
  protoOf(DecodeBufferResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.ten_1 === tmp0_other_with_cast.ten_1))
      return false;
    if (!(this.uen_1 === tmp0_other_with_cast.uen_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.ven(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
      var _ = $p;
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.ven(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
        var _ = $p;
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.ven(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
        var __0 = $p;
      }
      sizeInBytes = sizeInBytes - 1 | 0;
    }
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        nativeDecoder.ven(_this__u8e3s4);
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          var tmp0_elvis_lhs = t.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0_anonymous = dst.ze8_1;
    var tmp1_anonymous = dst.be9_1;
    var tmp2_anonymous = dst.de9_1;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp0_anonymous_0 = tmp0_anonymous.gen(tmp1_anonymous, tmp2_anonymous - tmp1_anonymous | 0).veg_1;
    var i8 = new Int8Array(tmp0_anonymous_0.buffer, tmp0_anonymous_0.byteOffset, tmp0_anonymous_0.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var tmp0_get_code_gknlva = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        i8[tmp1] = toByte(character);
      }
       while (inductionVariable < toIndex);
    var rc = writeIndex;
    dst.xeg(rc);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? src.byteLength - offset | 0 : length;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0_anonymous = _this__u8e3s4.ze8_1;
    var tmp1_anonymous = _this__u8e3s4.be9_1;
    if ((_this__u8e3s4.de9_1 - tmp1_anonymous | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_0(src, tmp0_anonymous, offset, length, tmp1_anonymous);
    var rc = length;
    _this__u8e3s4.xeg(rc);
  }
  function Closeable() {
  }
  function addSuppressedInternal(_this__u8e3s4, other) {
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    charset = charset === VOID ? Charsets_getInstance().gek_1 : charset;
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    // Inline function 'kotlin.js.asDynamic' call
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new ChunkBuffer(of_1(Companion_getInstance_6(), buffer), null, Companion_getInstance_4().le9_1);
    view.deh();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().me9_1);
    return decode(charset.jek(), packet, IntCompanionObject_getInstance().MAX_VALUE);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(length >= 0)) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((offset + length | 0) <= bytes.length)) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    tmp0_apply.stream = stream;
    return tmp0_apply;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    tmp0_apply.fatal = fatal;
    return tmp0_apply;
  }
  function toKtor$1($this_toKtor) {
    this.wen_1 = $this_toKtor;
  }
  protoOf(toKtor$1).sen = function () {
    return this.wen_1.decode();
  };
  protoOf(toKtor$1).ven = function (buffer) {
    return this.wen_1.decode(buffer);
  };
  protoOf(toKtor$1).ren = function (buffer, options) {
    return this.wen_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.xen_1 = fatal;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ENCODING_ALIASES().n(requestedEncoding)) {
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(TextDecoderFallback).sen = function () {
    return '';
  };
  protoOf(TextDecoderFallback).ven = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = new BytePacketBuilder();
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var byte = bytes[index];
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!!this.xen_1) {
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                var message = 'Invalid character: ' + point;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              writeFully_3(builder, get_REPLACEMENT());
              continue $l$loop;
            }
            if (point > 255) {
              builder.leh(toByte(point >> 8));
            }
            builder.leh(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.df();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          builder.su();
          throw t;
        } else {
          throw $p;
        }
      }
    }
    return decodeToString(readBytes(tmp$ret$3));
  };
  protoOf(TextDecoderFallback).ren = function (buffer, options) {
    return this.ven(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_kt__nrrftl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function _init_properties_TextDecoderFallback_kt__nrrftl() {
    if (!properties_initialized_TextDecoderFallback_kt_7y92ax) {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.weh_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.weh_1;
    tmp.xeh_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.yeh_1 = 0;
  }
  protoOf(DefaultPool).zeh = function (instance) {
  };
  protoOf(DefaultPool).pei = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).mei = function (instance) {
  };
  protoOf(DefaultPool).rei = function () {
    if (this.yeh_1 === 0)
      return this.seh();
    this.yeh_1 = this.yeh_1 - 1 | 0;
    var idx = this.yeh_1;
    var tmp = this.xeh_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.xeh_1[idx] = null;
    return this.pei(instance);
  };
  protoOf(DefaultPool).sei = function (instance) {
    this.mei(instance);
    if (this.yeh_1 === this.weh_1) {
      this.zeh(instance);
    } else {
      var tmp1 = this.yeh_1;
      this.yeh_1 = tmp1 + 1 | 0;
      this.xeh_1[tmp1] = instance;
    }
  };
  protoOf(DefaultPool).gp = function () {
    var inductionVariable = 0;
    var last = this.yeh_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.xeh_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.xeh_1[i] = null;
        this.zeh(instance);
      }
       while (inductionVariable < last);
    this.yeh_1 = 0;
  };
  //region block: post-declaration
  protoOf(ByteChannelSequentialBase).uef = readRemaining$default;
  protoOf(ChannelJob).yn = cancel$default;
  protoOf(ChannelJob).tn = invokeOnCompletion$default;
  protoOf(DefaultPool).o1y = close;
  protoOf(DefaultBufferPool).o1y = close;
  protoOf(ChunkBuffer$Companion$Pool$1).o1y = close;
  protoOf(ChunkBuffer$Companion$EmptyPool$1).o1y = close;
  protoOf(NoPoolImpl).o1y = close;
  protoOf(ChunkBuffer$Companion$NoPool$1).o1y = close;
  protoOf(ChunkBuffer$Companion$NoPoolManuallyManaged$1).o1y = close;
  protoOf(ByteArrayPool$1).o1y = close;
  protoOf(ByteChannelJS).uef = readRemaining$default;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = discard;
  _.$_$.c = readAvailable;
  _.$_$.d = writeFully;
  _.$_$.e = IOException_init_$Init$;
  _.$_$.f = Companion_getInstance_7;
  _.$_$.g = Charsets_getInstance;
  _.$_$.h = Companion_getInstance_5;
  _.$_$.i = MalformedInputException;
  _.$_$.j = decode;
  _.$_$.k = encodeToByteArray;
  _.$_$.l = encode;
  _.$_$.m = get_name;
  _.$_$.n = completeReadHead;
  _.$_$.o = prepareReadFirstHead;
  _.$_$.p = prepareReadNextHead;
  _.$_$.q = BytePacketBuilder;
  _.$_$.r = ByteReadPacket;
  _.$_$.s = Closeable;
  _.$_$.t = Input;
  _.$_$.u = String_0;
  _.$_$.v = addSuppressedInternal;
  _.$_$.w = discard_0;
  _.$_$.x = readBytes;
  _.$_$.y = readShort_0;
  _.$_$.z = readText;
  _.$_$.a1 = writeFully_3;
  _.$_$.b1 = writeShort_0;
  _.$_$.c1 = writeText;
  _.$_$.d1 = IOException;
  _.$_$.e1 = get_ByteArrayPool;
  _.$_$.f1 = ByteChannel;
  _.$_$.g1 = ByteReadChannel;
  _.$_$.h1 = ByteReadChannel_1;
  _.$_$.i1 = WriterScope;
  _.$_$.j1 = cancel;
  _.$_$.k1 = close_0;
  _.$_$.l1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
