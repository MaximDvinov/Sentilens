(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Immutable-Collections-kotlinx-collections-immutable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-Immutable-Collections-kotlinx-collections-immutable'.");
    }
    root['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] = factory(typeof this['Kotlin-Immutable-Collections-kotlinx-collections-immutable'] === 'undefined' ? {} : this['Kotlin-Immutable-Collections-kotlinx-collections-immutable'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var AbstractList = kotlin_kotlin.$_$.t5;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var List = kotlin_kotlin.$_$.i6;
  var Collection = kotlin_kotlin.$_$.b6;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var MutableList = kotlin_kotlin.$_$.m6;
  var MutableCollection = kotlin_kotlin.$_$.l6;
  var isInterface = kotlin_kotlin.$_$.id;
  var addAll = kotlin_kotlin.$_$.t6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var Iterator = kotlin_kotlin.$_$.f6;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var isArray = kotlin_kotlin.$_$.ad;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var coerceAtMost = kotlin_kotlin.$_$.xe;
  var isObject = kotlin_kotlin.$_$.kd;
  var arrayCopy = kotlin_kotlin.$_$.u6;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var arrayIterator = kotlin_kotlin.$_$.cc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var AbstractMutableList = kotlin_kotlin.$_$.w5;
  var copyOf = kotlin_kotlin.$_$.v7;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.a2;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var indexOf = kotlin_kotlin.$_$.p8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.k1;
  //endregion
  //region block: pre-declaration
  function subList(fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  }
  setMetadataFor(ImmutableList, 'ImmutableList', interfaceMeta, VOID, [List, Collection]);
  setMetadataFor(SubList, 'SubList', classMeta, AbstractList, [ImmutableList, AbstractList]);
  setMetadataFor(Builder, 'Builder', interfaceMeta, VOID, [MutableList, MutableCollection]);
  setMetadataFor(PersistentList, 'PersistentList', interfaceMeta, VOID, [ImmutableList, Collection]);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(SingleElementListIterator, 'SingleElementListIterator', classMeta, AbstractListIterator);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [PersistentList, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [PersistentList, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, Builder]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator, [Iterator, AbstractListIterator]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [ImmutableList, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  //endregion
  function SubList(source, fromIndex, toIndex) {
    AbstractList.call(this);
    this.gj6_1 = source;
    this.hj6_1 = fromIndex;
    this.ij6_1 = toIndex;
    this.jj6_1 = 0;
    ListImplementation_getInstance().s1(this.hj6_1, this.ij6_1, this.gj6_1.g());
    this.jj6_1 = this.ij6_1 - this.hj6_1 | 0;
  }
  protoOf(SubList).m = function (index) {
    ListImplementation_getInstance().t1(index, this.jj6_1);
    return this.gj6_1.m(this.hj6_1 + index | 0);
  };
  protoOf(SubList).g = function () {
    return this.jj6_1;
  };
  protoOf(SubList).v1 = function (fromIndex, toIndex) {
    ListImplementation_getInstance().s1(fromIndex, toIndex, this.jj6_1);
    return new SubList(this.gj6_1, this.hj6_1 + fromIndex | 0, this.hj6_1 + toIndex | 0);
  };
  function ImmutableList() {
  }
  function Builder() {
  }
  function PersistentList() {
  }
  function toImmutableList(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, ImmutableList) ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? toPersistentList(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function toPersistentList(_this__u8e3s4) {
    var tmp1_elvis_lhs = isInterface(_this__u8e3s4, PersistentList) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = isInterface(_this__u8e3s4, Builder) ? _this__u8e3s4 : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.df();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? plus(persistentListOf(), _this__u8e3s4) : tmp2_elvis_lhs;
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function plus(_this__u8e3s4, elements) {
    var tmp;
    if (isInterface(elements, Collection)) {
      tmp = _this__u8e3s4.k(elements);
    } else {
      // Inline function 'kotlinx.collections.immutable.mutate' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.z1y();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.collections.immutable.plus.<anonymous>' call
      addAll(tmp0_apply, elements);
      tmp = tmp0_apply.df();
    }
    return tmp;
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.mj6_1 = element;
  }
  protoOf(SingleElementListIterator).f = function () {
    this.m2m();
    this.nj6_1 = this.nj6_1 + 1 | 0;
    return this.mj6_1;
  };
  protoOf(SingleElementListIterator).e2 = function () {
    this.n2m();
    this.nj6_1 = this.nj6_1 - 1 | 0;
    return this.mj6_1;
  };
  function AbstractListIterator(index, size) {
    this.nj6_1 = index;
    this.oj6_1 = size;
  }
  protoOf(AbstractListIterator).e = function () {
    return this.nj6_1 < this.oj6_1;
  };
  protoOf(AbstractListIterator).c2 = function () {
    return this.nj6_1 > 0;
  };
  protoOf(AbstractListIterator).d2 = function () {
    return this.nj6_1;
  };
  protoOf(AbstractListIterator).f2 = function () {
    return this.nj6_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).m2m = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).n2m = function () {
    if (!this.c2())
      throw NoSuchElementException_init_$Create$();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).v1 = function (fromIndex, toIndex) {
    return subList.call(this, fromIndex, toIndex);
  };
  protoOf(AbstractPersistentList).k = function (elements) {
    // Inline function 'kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    return tmp0_apply.df();
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
        // Inline function 'kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
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
    this.rj6_1 = buffer;
  }
  protoOf(BufferIterator).f = function () {
    if (!this.e()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp1 = this.nj6_1;
    this.nj6_1 = tmp1 + 1 | 0;
    return this.rj6_1[tmp1];
  };
  protoOf(BufferIterator).e2 = function () {
    if (!this.c2()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.nj6_1 = this.nj6_1 - 1 | 0;
    return this.rj6_1[this.nj6_1];
  };
  function rootSize($this) {
    return rootSize_1($this.uj6_1);
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.tj6_1;
    }
    var buffer = $this.sj6_1;
    var shift = $this.vj6_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.sj6_1 = root;
    this.tj6_1 = tail;
    this.uj6_1 = size;
    this.vj6_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.uj6_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.uj6_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.uj6_1 - rootSize_1(this.uj6_1) | 0) <= coerceAtMost(this.tj6_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).g = function () {
    return this.uj6_1;
  };
  protoOf(PersistentVector).z1y = function () {
    return new PersistentVectorBuilder(this, this.sj6_1, this.tj6_1, this.vj6_1);
  };
  protoOf(PersistentVector).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.uj6_1);
    var tmp = this.tj6_1;
    return new PersistentVectorIterator(this.sj6_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.uj6_1, (this.vj6_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).m = function (index) {
    ListImplementation_getInstance().t1(index, this.uj6_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function rootSize_0($this) {
    if ($this.ej7_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.ej7_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.ej7_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.bj7_1 : false;
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
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.bj7_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.bj7_1;
    return buffer;
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    var tmp;
    if ($this.ej7_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.aj7_1) {
      $this.cj7_1 = pushTail($this, mutableBufferWith($this, root), filledTail, $this.aj7_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.dj7_1 = newTail;
      $this.aj7_1 = $this.aj7_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.ej7_1 = $this.ej7_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.cj7_1 = filledTail;
      $this.dj7_1 = newTail;
      $this.ej7_1 = $this.ej7_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.cj7_1 = pushTail($this, root, filledTail, $this.aj7_1);
      $this.dj7_1 = newTail;
      $this.ej7_1 = $this.ej7_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail($this, root, tail, shift) {
    var index = indexSegment($this.ej7_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
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
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.aj7_1 ? pushBuffers($this, root, rootSize, $this.aj7_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.e()) {
      $this.aj7_1 = $this.aj7_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.aj7_1, $this.aj7_1, buffersIterator);
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
  function insertIntoTail($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.dj7_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.dj7_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      mutableTail[index] = element;
      $this.cj7_1 = root;
      $this.dj7_1 = mutableTail;
      $this.ej7_1 = $this.ej7_1 + 1 | 0;
    } else {
      var lastElement = $this.dj7_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.dj7_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      mutableTail[index] = element;
      pushFilledTail($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.fj7_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
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
    mutableRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.fj7_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function insertIntoRoot_0($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.cj7_1;
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
    var tmp0_checkNotNull = $this.cj7_1;
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
      return $this.dj7_1;
    }
    var buffer = ensureNotNull($this.cj7_1);
    var shift = $this.aj7_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.ej7_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.dj7_1[0];
      pullLastBufferFromRoot($this, root, rootSize, shift);
    } else {
      removedElement = $this.dj7_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.dj7_1;
      var tmp1_copyInto = makeMutable($this, $this.dj7_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      var mutableTail = tmp1_copyInto;
      mutableTail[tailSize - 1 | 0] = null;
      $this.cj7_1 = root;
      $this.dj7_1 = mutableTail;
      $this.ej7_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.aj7_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      var mutableRoot = tmp0_copyInto;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.fj7_1;
      tailCarry.fj7_1 = removedElement;
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
        mutableRoot_0[i] = removeFromRootAt($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.cj7_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.dj7_1 = tmp_0;
      $this.ej7_1 = rootSize;
      $this.aj7_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.fj7_1;
    tmp_1.dj7_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.ej7_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.cj7_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.aj7_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.cj7_1 = newRoot;
      $this.aj7_1 = shift;
    }
  }
  function pullLastBuffer($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.fj7_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.d4_1 = $this.d4_1 + 1 | 0;
      }
      oldElementCarry.fj7_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.cj7_1;
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
    if ($this.aj7_1 === 0) {
      return new SingleElementListIterator(ensureNotNull($this.cj7_1), index);
    }
    var trieHeight = $this.aj7_1 / get_LOG_MAX_BUFFER_SIZE() | 0;
    return new TrieIterator(ensureNotNull($this.cj7_1), index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.xj6_1 = vector;
    this.yj6_1 = vectorRoot;
    this.zj6_1 = vectorTail;
    this.aj7_1 = rootShift;
    this.bj7_1 = new MutabilityOwnership();
    this.cj7_1 = this.yj6_1;
    this.dj7_1 = this.zj6_1;
    this.ej7_1 = this.xj6_1.g();
  }
  protoOf(PersistentVectorBuilder).g = function () {
    return this.ej7_1;
  };
  protoOf(PersistentVectorBuilder).h2n = function () {
    return this.d4_1;
  };
  protoOf(PersistentVectorBuilder).df = function () {
    var tmp = this;
    var tmp_0;
    if (this.cj7_1 === this.yj6_1 ? this.dj7_1 === this.zj6_1 : false) {
      tmp_0 = this.xj6_1;
    } else {
      this.bj7_1 = new MutabilityOwnership();
      this.yj6_1 = this.cj7_1;
      this.zj6_1 = this.dj7_1;
      var tmp_1;
      if (this.cj7_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.dj7_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf(this.dj7_1, this.ej7_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.cj7_1), this.dj7_1, this.ej7_1, this.aj7_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.xj6_1 = tmp_0;
    return this.xj6_1;
  };
  protoOf(PersistentVectorBuilder).a = function (element) {
    this.d4_1 = this.d4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.dj7_1);
      mutableTail[tailSize] = element;
      this.dj7_1 = mutableTail;
      this.ej7_1 = this.ej7_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail(this, this.cj7_1, this.dj7_1, newTail);
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
      this.dj7_1 = copyToBuffer(this, makeMutable(this, this.dj7_1), tailSize, elementsIterator);
      this.ej7_1 = this.ej7_1 + elements.g() | 0;
    } else {
      var buffersSize = ((elements.g() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.dj7_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.cj7_1;
      var tmp_1 = rootSize_0(this);
      tmp.cj7_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.dj7_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.ej7_1 = this.ej7_1 + elements.g() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).v3 = function (index, element) {
    ListImplementation_getInstance().b2(index, this.ej7_1);
    if (index === this.ej7_1) {
      this.a(element);
      return Unit_getInstance();
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail(this, this.cj7_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot(this, ensureNotNull(this.cj7_1), this.aj7_1, index, element, elementCarry);
    var tmp = elementCarry.fj7_1;
    insertIntoTail(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).w3 = function (index, elements) {
    ListImplementation_getInstance().b2(index, this.ej7_1);
    if (index === this.ej7_1) {
      return this.k(elements);
    }
    if (elements.l()) {
      return false;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var unaffectedElementsCount = index >> get_LOG_MAX_BUFFER_SIZE() << get_LOG_MAX_BUFFER_SIZE();
    var buffersSize = (((this.ej7_1 - unaffectedElementsCount | 0) + elements.g() | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var endIndex = ((index + elements.g() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.dj7_1;
      var tmp1_copyInto = makeMutable(this, this.dj7_1);
      var tmp2_copyInto = endIndex + 1 | 0;
      var tmp3_copyInto = tailSize_0(this);
      arrayCopy(tmp0_copyInto, tmp1_copyInto, tmp2_copyInto, startIndex, tmp3_copyInto);
      var newTail = tmp1_copyInto;
      copyToBuffer(this, newTail, startIndex, elements.d());
      this.dj7_1 = newTail;
      this.ej7_1 = this.ej7_1 + elements.g() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.ej7_1 + elements.g() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.dj7_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.dj7_1, rightShift);
      insertIntoRoot_0(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.dj7_1;
      var tmp5_copyInto = mutableBuffer(this);
      var tmp6_copyInto = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, 0, tmp6_copyInto, tailSize_1);
      newTail_0 = tmp5_copyInto;
      var rightShift_0 = get_MAX_BUFFER_SIZE() - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.dj7_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_0(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.cj7_1;
    tmp.cj7_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.dj7_1 = newTail_0;
    this.ej7_1 = this.ej7_1 + elements.g() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).m = function (index) {
    ListImplementation_getInstance().t1(index, this.ej7_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z3 = function (index) {
    ListImplementation_getInstance().t1(index, this.ej7_1);
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt(this, this.cj7_1, rootSize, this.aj7_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.dj7_1[0]);
    var newRoot = removeFromRootAt(this, ensureNotNull(this.cj7_1), this.aj7_1, index, elementCarry);
    removeFromTailAt(this, newRoot, rootSize, this.aj7_1, 0);
    var tmp_0 = elementCarry.fj7_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).x3 = function (index, element) {
    ListImplementation_getInstance().t1(index, this.ej7_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.dj7_1);
      if (!(mutableTail === this.dj7_1)) {
        this.d4_1 = this.d4_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.dj7_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.cj7_1 = setInRoot(this, ensureNotNull(this.cj7_1), this.aj7_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.fj7_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).d = function () {
    return this.o2m();
  };
  protoOf(PersistentVectorBuilder).o2m = function () {
    return this.u1(0);
  };
  protoOf(PersistentVectorBuilder).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.ej7_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.ij7_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.jj7_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).f = function () {
    this.m2m();
    if (this.jj7_1.e()) {
      this.nj6_1 = this.nj6_1 + 1 | 0;
      return this.jj7_1.f();
    }
    var tmp3 = this.nj6_1;
    this.nj6_1 = tmp3 + 1 | 0;
    return this.ij7_1[tmp3 - this.jj7_1.oj6_1 | 0];
  };
  protoOf(PersistentVectorIterator).e2 = function () {
    this.n2m();
    if (this.nj6_1 > this.jj7_1.oj6_1) {
      this.nj6_1 = this.nj6_1 - 1 | 0;
      return this.ij7_1[this.nj6_1 - this.jj7_1.oj6_1 | 0];
    }
    this.nj6_1 = this.nj6_1 - 1 | 0;
    return this.jj7_1.e2();
  };
  function reset($this) {
    $this.oj6_1 = $this.rj7_1.ej7_1;
    $this.sj7_1 = $this.rj7_1.h2n();
    $this.uj7_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.rj7_1.cj7_1;
    if (root == null) {
      $this.tj7_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.rj7_1.ej7_1);
    var trieIndex = coerceAtMost($this.nj6_1, trieSize);
    var trieHeight = ($this.rj7_1.aj7_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.tj7_1 == null) {
      $this.tj7_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.tj7_1).x2n(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.sj7_1 === $this.rj7_1.h2n()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.uj7_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.ej7_1);
    this.rj7_1 = builder;
    this.sj7_1 = this.rj7_1.h2n();
    this.tj7_1 = null;
    this.uj7_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).e2 = function () {
    checkForComodification(this);
    this.n2m();
    this.uj7_1 = this.nj6_1 - 1 | 0;
    var tmp1_elvis_lhs = this.tj7_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.rj7_1.dj7_1;
      this.nj6_1 = this.nj6_1 - 1 | 0;
      var tmp_1 = tmp_0[this.nj6_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.nj6_1 > trieIterator.oj6_1) {
      var tmp_2 = this.rj7_1.dj7_1;
      this.nj6_1 = this.nj6_1 - 1 | 0;
      var tmp_3 = tmp_2[this.nj6_1 - trieIterator.oj6_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    this.nj6_1 = this.nj6_1 - 1 | 0;
    return trieIterator.e2();
  };
  protoOf(PersistentVectorMutableIterator).f = function () {
    checkForComodification(this);
    this.m2m();
    this.uj7_1 = this.nj6_1;
    var tmp2_elvis_lhs = this.tj7_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.rj7_1.dj7_1;
      var tmp1 = this.nj6_1;
      this.nj6_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.e()) {
      this.nj6_1 = this.nj6_1 + 1 | 0;
      return trieIterator.f();
    }
    var tmp_2 = this.rj7_1.dj7_1;
    var tmp6 = this.nj6_1;
    this.nj6_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.oj6_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).b5 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.rj7_1.z3(this.uj7_1);
    if (this.uj7_1 < this.nj6_1)
      this.nj6_1 = this.uj7_1;
    reset(this);
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.vj7_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance();
    AbstractPersistentList.call(this);
    this.wj7_1 = buffer;
    assert(this.wj7_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).g = function () {
    return this.wj7_1.length;
  };
  protoOf(SmallPersistentVector).k = function (elements) {
    if ((this.g() + elements.g() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf(this.wj7_1, this.g() + elements.g() | 0);
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
    // Inline function 'kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.z1y();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.k(elements);
    return tmp0_apply.df();
  };
  protoOf(SmallPersistentVector).z1y = function () {
    return new PersistentVectorBuilder(this, null, this.wj7_1, 0);
  };
  protoOf(SmallPersistentVector).o = function (element) {
    return indexOf(this.wj7_1, element);
  };
  protoOf(SmallPersistentVector).u1 = function (index) {
    ListImplementation_getInstance().b2(index, this.g());
    var tmp = this.wj7_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.g());
  };
  protoOf(SmallPersistentVector).m = function (index) {
    ListImplementation_getInstance().t1(index, this.g());
    var tmp = this.wj7_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.mj7_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.mj7_1) {
      var tmp = $this.nj7_1;
      var tmp_0 = i;
      var tmp_1 = $this.nj7_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.nj6_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.mj7_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.nj6_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.nj6_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.nj7_1[$this.mj7_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.mj7_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.mj7_1;
    tmp.nj7_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    this.oj7_1 = index === size;
    this.nj7_1[0] = root;
    fillPath(this, index - (this.oj7_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).x2n = function (root, index, size, height) {
    this.nj6_1 = index;
    this.oj6_1 = size;
    this.mj7_1 = height;
    if (this.nj7_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.nj7_1 = fillArrayVal(Array(height), null);
    }
    this.nj7_1[0] = root;
    this.oj7_1 = index === size;
    fillPath(this, index - (this.oj7_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).f = function () {
    if (!this.e()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    this.nj6_1 = this.nj6_1 + 1 | 0;
    if (this.nj6_1 === this.oj6_1) {
      this.oj7_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).e2 = function () {
    if (!this.c2()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.nj6_1 = this.nj6_1 - 1 | 0;
    if (this.oj7_1) {
      this.oj7_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance().vj7_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
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
    this.fj7_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
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
  function assert(condition) {
    if (!condition) {
      throw AssertionError_init_$Create$('Assertion failed');
    }
  }
  //region block: init
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = persistentListOf;
  _.$_$.b = toImmutableList;
  _.$_$.c = toPersistentList;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-Immutable-Collections-kotlinx-collections-immutable.js.map
