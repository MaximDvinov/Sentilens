(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Napier-napier-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Napier-napier-js-ir'.");
    }
    root['Napier-napier-js-ir'] = factory(typeof this['Napier-napier-js-ir'] === 'undefined' ? {} : this['Napier-napier-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.dj;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Collection = kotlin_kotlin.$_$.b6;
  var isInterface = kotlin_kotlin.$_$.id;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var emptyList = kotlin_kotlin.$_$.z7;
  var objectCreate = kotlin_kotlin.$_$.vd;
  var AbstractList = kotlin_kotlin.$_$.t5;
  var isObject = kotlin_kotlin.$_$.kd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  //endregion
  //region block: pre-declaration
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(Napier, 'Napier', objectMeta);
  setMetadataFor(AtomicMutableList, 'AtomicMutableList', classMeta, AbstractList);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta);
  //endregion
  var LogLevel_VERBOSE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARNING_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_ASSERT_instance;
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_VERBOSE_instance = new LogLevel('VERBOSE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARNING_instance = new LogLevel('WARNING', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_ASSERT_instance = new LogLevel('ASSERT', 5);
  }
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_ASSERT_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ASSERT_instance;
  }
  function Napier() {
    Napier_instance = this;
    this.ij8_1 = AtomicMutableList_init_$Create$();
  }
  protoOf(Napier).jj8 = function (priority, tag) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.ij8_1;
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
        // Inline function 'io.github.aakira.napier.Napier.isEnable.<anonymous>' call
        if (element.jj8(priority, tag)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(Napier).kj8 = function (priority, tag, throwable, message) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.ij8_1.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.github.aakira.napier.Napier.rawLog.<anonymous>' call
      element.kj8(priority, tag, throwable, message);
    }
  };
  protoOf(Napier).lj8 = function (throwable, tag, message) {
    this.mj8(LogLevel_ASSERT_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).nj8 = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.lj8(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lj8.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).mj8 = function (priority, tag, throwable, message) {
    if (this.jj8(priority, tag)) {
      this.kj8(priority, tag, throwable, message);
    }
  };
  var Napier_instance;
  function Napier_getInstance() {
    if (Napier_instance == null)
      new Napier();
    return Napier_instance;
  }
  function AtomicMutableList_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    AtomicMutableList.call($this, tmp$ret$0);
    return $this;
  }
  function AtomicMutableList_init_$Create$() {
    return AtomicMutableList_init_$Init$(objectCreate(protoOf(AtomicMutableList)));
  }
  function AtomicMutableList(value) {
    AbstractList.call(this);
    this.oj8_1 = new AtomicRef(value);
  }
  protoOf(AtomicMutableList).g = function () {
    return this.oj8_1.pj8_1.g();
  };
  protoOf(AtomicMutableList).l = function () {
    return this.oj8_1.pj8_1.l();
  };
  protoOf(AtomicMutableList).e1 = function (element) {
    return this.oj8_1.pj8_1.n(element);
  };
  protoOf(AtomicMutableList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.e1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AtomicMutableList).m = function (index) {
    return this.oj8_1.pj8_1.m(index);
  };
  protoOf(AtomicMutableList).o2l = function (element) {
    return this.oj8_1.pj8_1.o(element);
  };
  protoOf(AtomicMutableList).o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.o2l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AtomicMutableList).d = function () {
    return this.oj8_1.pj8_1.d();
  };
  function AtomicRef(value) {
    this.pj8_1 = value;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Napier_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Napier-napier-js-ir.js.map
