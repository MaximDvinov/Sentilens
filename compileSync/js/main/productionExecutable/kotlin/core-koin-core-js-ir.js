(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'core-koin-core-js-ir'.");
    }
    root['core-koin-core-js-ir'] = factory(typeof this['core-koin-core-js-ir'] === 'undefined' ? {} : this['core-koin-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.xd;
  var classMeta = kotlin_kotlin.$_$.kc;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var toList = kotlin_kotlin.$_$.va;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var Pair = kotlin_kotlin.$_$.nj;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var emptyList = kotlin_kotlin.$_$.z7;
  var equals = kotlin_kotlin.$_$.oc;
  var joinToString = kotlin_kotlin.$_$.w8;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var hashCode = kotlin_kotlin.$_$.xc;
  var Enum = kotlin_kotlin.$_$.dj;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.ec;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var emptySet = kotlin_kotlin.$_$.b8;
  var first = kotlin_kotlin.$_$.i8;
  var plus = kotlin_kotlin.$_$.v9;
  var plus_0 = kotlin_kotlin.$_$.t9;
  var isObject = kotlin_kotlin.$_$.kd;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var toList_0 = kotlin_kotlin.$_$.ua;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var isArray = kotlin_kotlin.$_$.ad;
  var roundToLong = kotlin_kotlin.$_$.je;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.r1;
  var split = kotlin_kotlin.$_$.qh;
  var Default_getInstance = kotlin_kotlin.$_$.g5;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Koin, 'Koin', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KoinApplication, 'KoinApplication', classMeta);
  function getKoin() {
    return KoinPlatformTools_getInstance().rj9().sv();
  }
  setMetadataFor(KoinComponent, 'KoinComponent', interfaceMeta);
  setMetadataFor(KoinScopeComponent, 'KoinScopeComponent', interfaceMeta, VOID, [KoinComponent]);
  setMetadataFor(BeanDefinition, 'BeanDefinition', classMeta);
  setMetadataFor(Kind, 'Kind', classMeta, Enum);
  setMetadataFor(Callbacks, 'Callbacks', classMeta);
  setMetadataFor(KoinDefinition, 'KoinDefinition', classMeta);
  setMetadataFor(ClosedScopeException, 'ClosedScopeException', classMeta, Exception);
  setMetadataFor(DefinitionOverrideException, 'DefinitionOverrideException', classMeta, Exception);
  setMetadataFor(InstanceCreationException, 'InstanceCreationException', classMeta, Exception);
  setMetadataFor(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', classMeta, Exception);
  setMetadataFor(NoBeanDefFoundException, 'NoBeanDefFoundException', classMeta, Exception);
  setMetadataFor(ExtensionManager, 'ExtensionManager', classMeta);
  setMetadataFor(InstanceContext, 'InstanceContext', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(InstanceFactory, 'InstanceFactory', classMeta);
  setMetadataFor(SingleInstanceFactory, 'SingleInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(Logger, 'Logger', classMeta);
  setMetadataFor(EmptyLogger, 'EmptyLogger', classMeta, Logger);
  setMetadataFor(Level, 'Level', classMeta, Enum);
  setMetadataFor(Module, 'Module', classMeta);
  setMetadataFor(ParametersHolder, 'ParametersHolder', classMeta);
  setMetadataFor(StringQualifier, 'StringQualifier', classMeta);
  setMetadataFor(InstanceRegistry, 'InstanceRegistry', classMeta);
  setMetadataFor(PropertyRegistry, 'PropertyRegistry', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ScopeRegistry, 'ScopeRegistry', classMeta);
  setMetadataFor(Scope, 'Scope', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(GlobalContext, 'GlobalContext', objectMeta);
  setMetadataFor(NodeJsHrTimeSource, 'NodeJsHrTimeSource', classMeta);
  setMetadataFor(PerformanceNowTimeSource, 'PerformanceNowTimeSource', classMeta);
  setMetadataFor(DateNowTimeSource, 'DateNowTimeSource', classMeta);
  setMetadataFor(KoinPlatformTimeTools, 'KoinPlatformTimeTools', objectMeta);
  setMetadataFor(KoinPlatformTools, 'KoinPlatformTools', objectMeta);
  //endregion
  function Koin() {
    this.rj8_1 = new ScopeRegistry(this);
    this.sj8_1 = new InstanceRegistry(this);
    this.tj8_1 = new PropertyRegistry(this);
    this.uj8_1 = new ExtensionManager(this);
    this.vj8_1 = new EmptyLogger();
  }
  protoOf(Koin).wj8 = function (modules, allowOverride) {
    var flattedModules = flatten(modules);
    this.sj8_1.aj9(flattedModules, allowOverride);
    this.rj8_1.fj9(flattedModules);
  };
  function loadModules($this, modules) {
    $this.gj9_1.wj8(modules, $this.hj9_1);
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).ij9 = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KoinApplication() {
    Companion_getInstance();
    this.gj9_1 = new Koin();
    this.hj9_1 = true;
  }
  protoOf(KoinApplication).jj9 = function (modules) {
    return this.kj9(toList(modules));
  };
  protoOf(KoinApplication).kj9 = function (modules) {
    if (this.gj9_1.vj8_1.pj9(Level_INFO_getInstance())) {
      // Inline function 'org.koin.core.time.measureDuration' call
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_getInstance().lj9();
      loadModules(this, modules);
      var value = Unit_getInstance();
      var stop = KoinPlatformTimeTools_getInstance().lj9();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = stop.m9(start);
      Companion_getInstance_2();
      tmp$ret$0 = tmp0_div.pd() / 1000000.0;
      var duration = (new Pair(Unit_getInstance(), tmp$ret$0)).x4_1;
      var count = this.gj9_1.sj8_1.mj9();
      this.gj9_1.vj8_1.oj9(Level_INFO_getInstance(), 'loaded ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  function KoinComponent() {
  }
  function KoinScopeComponent() {
  }
  function startKoin(appDeclaration) {
    return KoinPlatformTools_getInstance().rj9().tj9(appDeclaration);
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    this.uj9_1 = scopeQualifier;
    this.vj9_1 = primaryType;
    this.wj9_1 = qualifier;
    this.xj9_1 = definition;
    this.yj9_1 = kind;
    this.zj9_1 = secondaryTypes;
    this.aja_1 = new Callbacks();
    this.bja_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.yj9_1.toString();
    var defType = "'" + getFullName(this.vj9_1) + "'";
    var tmp;
    if (this.wj9_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp = ',qualifier:' + this.wj9_1;
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.uj9_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    var defScope = equals(tmp0_let, Companion_getInstance_1().dja_1) ? '' : ',scope:' + this.uj9_1;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.zj9_1.l()) {
      var tmp_1 = this.zj9_1;
      var typesAsString = joinToString(tmp_1, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
      tmp_0 = ',binds:' + typesAsString;
    } else {
      tmp_0 = '';
    }
    var defOtherTypes = tmp_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.vj9_1.equals(other.vj9_1))
      return false;
    if (!equals(this.wj9_1, other.wj9_1))
      return false;
    if (!equals(this.uj9_1, other.uj9_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.wj9_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.vj9_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.uj9_1) | 0;
    return result;
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.s();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_getInstance();
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.eja_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + this.eja_1 + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.eja_1 == null ? 0 : hashCode(this.eja_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.eja_1, tmp0_other_with_cast.eja_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.fja_1 = module_0;
    this.gja_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + this.fja_1 + ', factory=' + this.gja_1 + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.fja_1.hashCode();
    result = imul(result, 31) + this.gja_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.fja_1.equals(tmp0_other_with_cast.fja_1))
      return false;
    if (!this.gja_1.equals(tmp0_other_with_cast.gja_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function ExtensionManager(_koin) {
    this.hja_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.ija_1 = HashMap_init_$Create$();
  }
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.jja_1 = logger;
    this.kja_1 = scope;
    this.lja_1 = parameters;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.mja_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    Companion_getInstance_0();
    this.nja_1 = beanDefinition;
  }
  protoOf(InstanceFactory).pja = function (context) {
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp0_debug = context.jja_1;
    var tmp1_debug = "| (+) '" + this.nja_1 + "'";
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log = Level_DEBUG_getInstance();
    if (tmp0_debug.pj9(tmp0_log)) {
      tmp0_debug.oj9(tmp0_log, tmp1_debug);
    }
    try {
      var tmp0_elvis_lhs = context.lja_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.nja_1.xj9_1(context.kja_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_getInstance().qja(e);
        // Inline function 'org.koin.core.logger.Logger.error' call
        var tmp2_error = context.jja_1;
        var tmp3_error = "* Instance creation error : could not create instance for '" + this.nja_1 + "': " + stack;
        // Inline function 'org.koin.core.logger.Logger.log' call
        var tmp0_log_0 = Level_ERROR_getInstance();
        if (tmp2_error.pj9(tmp0_log_0)) {
          tmp2_error.oj9(tmp0_log_0, tmp3_error);
        }
        throw new InstanceCreationException("Could not create instance for '" + this.nja_1 + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nja_1;
    return this.nja_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.nja_1.hashCode();
  };
  function getValue($this) {
    var tmp0_elvis_lhs = $this.sja_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Single instance created couldn't return value");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.tja($context)) {
        this$0.sja_1 = this$0.pja($context);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.sja_1 = null;
  }
  protoOf(SingleInstanceFactory).tja = function (context) {
    return !(this.sja_1 == null);
  };
  protoOf(SingleInstanceFactory).pja = function (context) {
    var tmp;
    if (this.sja_1 == null) {
      tmp = protoOf(InstanceFactory).pja.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).oja = function (context) {
    var tmp = KoinPlatformTools_getInstance();
    tmp.uja(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).oj9 = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.nj9_1 = level;
  }
  protoOf(Logger).pj9 = function (lvl) {
    return this.nj9_1.i7(lvl) <= 0;
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this.wja_1 = _createdAtStart;
    this.xja_1 = KoinPlatformTools_getInstance().cjb();
    var tmp = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp.yja_1 = HashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.zja_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp_1.ajb_1 = HashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.bjb_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).djb = function (instanceFactory) {
    var def = instanceFactory.nja_1;
    var mapping = indexKey(def.vj9_1, def.wj9_1, def.uj9_1);
    this.ejb(mapping, instanceFactory);
  };
  protoOf(Module).fjb = function (instanceFactory) {
    this.yja_1.a(instanceFactory);
  };
  protoOf(Module).ejb = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.zja_1.a5(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!(this.xja_1 === other.xja_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.xja_1);
  };
  function flatten(modules, newModules) {
    newModules = newModules === VOID ? emptySet() : newModules;
    var modules_0 = modules;
    var newModules_0 = newModules;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (modules_0.l()) {
          tmp = newModules_0;
        } else {
          var tmp0_elvis_lhs = first(modules_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Flatten - No head element in list');
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var head = tmp_0;
          var tail = modules_0.v1(1, modules_0.g());
          var tmp_1;
          if (head.bjb_1.l()) {
            modules_0 = tail;
            newModules_0 = plus_0(newModules_0, head);
            continue $l$0;
          } else {
            modules_0 = plus(head.bjb_1, tail);
            newModules_0 = plus_0(newModules_0, head);
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.nja_1 + ' at ' + mapping);
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.gjb_1.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.nh(element)) {
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
      // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
      tmp = (tmp0_safe_receiver == null ? true : isObject(tmp0_safe_receiver)) ? tmp0_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function getIndexedValue($this, clazz) {
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = $this.gjb_1.m($this.ijb_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.nh(tmp0_takeIf)) {
      tmp = tmp0_takeIf;
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
      // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
      tmp_0 = (tmp0_safe_receiver == null ? true : isObject(tmp0_safe_receiver)) ? tmp0_safe_receiver : THROW_CCE();
    }
    var currentValue = tmp_0;
    if (!(currentValue == null)) {
      $this.jjb();
    }
    return currentValue;
  }
  function ParametersHolder(_values, useIndexedValues) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    this.gjb_1 = _values;
    this.hjb_1 = useIndexedValues;
    this.ijb_1 = 0;
  }
  protoOf(ParametersHolder).kjb = function (clazz) {
    var tmp;
    if (this.gjb_1.l()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.hjb_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ParametersHolder).jjb = function () {
    if (this.ijb_1 < get_lastIndex(this.gjb_1)) {
      this.ijb_1 = this.ijb_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toList_0(this.gjb_1);
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.ljb_1 = value;
  }
  protoOf(StringQualifier).s = function () {
    return this.ljb_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.ljb_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.ljb_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.ljb_1 === tmp0_other_with_cast.ljb_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.yja_1.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.zj8_1;
      var tmp1_set = element.hashCode();
      tmp0_set.a5(tmp1_set, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.zja_1.q().d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.r();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.s();
      $this.mjb(allowOverride, mapping, factory);
    }
  }
  function InstanceRegistry(_koin) {
    this.xj8_1 = _koin;
    this.yj8_1 = KoinPlatformTools_getInstance().njb();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.zj8_1 = HashMap_init_$Create$();
  }
  protoOf(InstanceRegistry).aj9 = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).ojb = function (allowOverride, mapping, factory, logWarning) {
    if (this.yj8_1.t2(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          // Inline function 'org.koin.core.logger.Logger.warn' call
          var tmp0_warn = this.xj8_1.vj8_1;
          var tmp1_warn = "(+) override index '" + mapping + "' -> '" + factory.nja_1 + "'";
          // Inline function 'org.koin.core.logger.Logger.log' call
          var tmp0_log = Level_WARNING_getInstance();
          if (tmp0_warn.pj9(tmp0_log)) {
            tmp0_warn.oj9(tmp0_log, tmp1_warn);
          }
        }
      }
    }
    // Inline function 'org.koin.core.logger.Logger.debug' call
    var tmp2_debug = this.xj8_1.vj8_1;
    var tmp3_debug = "(+) index '" + mapping + "' -> '" + factory.nja_1 + "'";
    // Inline function 'org.koin.core.logger.Logger.log' call
    var tmp0_log_0 = Level_DEBUG_getInstance();
    if (tmp2_debug.pj9(tmp0_log_0)) {
      tmp2_debug.oj9(tmp0_log_0, tmp3_debug);
    }
    // Inline function 'kotlin.collections.set' call
    this.yj8_1.a5(mapping, factory);
  };
  protoOf(InstanceRegistry).mjb = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.ojb(allowOverride, mapping, factory, logWarning);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ojb.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).pjb = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this.yj8_1.z2(indexKey_0);
  };
  protoOf(InstanceRegistry).qjb = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.pjb(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oja(instanceContext);
    return (tmp == null ? true : isObject(tmp)) ? tmp : null;
  };
  protoOf(InstanceRegistry).mj9 = function () {
    return this.yj8_1.g();
  };
  function PropertyRegistry(_koin) {
    this.rjb_1 = _koin;
    this.sjb_1 = KoinPlatformTools_getInstance().njb();
  }
  function loadModule_0($this, module_0) {
    $this.cj9_1.k(module_0.ajb_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.cja_1 = '_root_';
    this.dja_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_1();
    this.bj9_1 = _koin;
    this.cj9_1 = HashSet_init_$Create$();
    this.dj9_1 = KoinPlatformTools_getInstance().njb();
    var tmp = this;
    var tmp_0 = Companion_getInstance_1().dja_1;
    Companion_getInstance_1();
    tmp.ej9_1 = new Scope(tmp_0, '_root_', true, this.bj9_1);
    this.cj9_1.a(this.ej9_1.tjb_1);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.dj9_1;
    var tmp1_set = this.ej9_1.ujb_1;
    var tmp2_set = this.ej9_1;
    tmp0_set.a5(tmp1_set, tmp2_set);
  }
  protoOf(ScopeRegistry).fj9 = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this.bjc_1) {
      throw new ClosedScopeException("Scope '" + $this.ujb_1 + "' is closed");
    }
    var parameters = parameterDef == null ? null : parameterDef();
    if (!(parameters == null)) {
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log = $this.wjb_1.vj8_1;
      var tmp1_log = Level_DEBUG_getInstance();
      if (tmp0_log.pj9(tmp1_log)) {
        var tmp$ret$0;
        // Inline function 'org.koin.core.scope.Scope.resolveInstance.<anonymous>' call
        tmp$ret$0 = '| >> parameters ' + parameters + ' ';
        tmp0_log.oj9(tmp1_log, tmp$ret$0);
      }
      var tmp = KoinPlatformTools_getInstance();
      tmp.uja($this, Scope$resolveInstance$lambda($this, parameters));
    }
    var instanceContext = new InstanceContext($this.wjb_1.vj8_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(parameters == null)) {
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp2_debug = $this.wjb_1.vj8_1;
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_0 = Level_DEBUG_getInstance();
      if (tmp2_debug.pj9(tmp0_log_0)) {
        tmp2_debug.oj9(tmp0_log_0, '| << parameters');
      }
      var tmp_0 = KoinPlatformTools_getInstance();
      tmp_0.uja($this, Scope$resolveInstance$lambda_0($this));
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this.wjb_1.sj8_1.qjb(qualifier, clazz, $this.tjb_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp0_debug = $this.wjb_1.vj8_1;
      var tmp1_debug = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in injected parameters";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log = Level_DEBUG_getInstance();
      if (tmp0_debug.pj9(tmp0_log)) {
        tmp0_debug.oj9(tmp0_log, tmp1_debug);
      }
      var tmp0_safe_receiver = $this.ajc_1.n3();
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kjb(clazz);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp0_debug_0 = $this.wjb_1.vj8_1;
      var tmp1_debug_0 = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look at scope source";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_0 = Level_DEBUG_getInstance();
      if (tmp0_debug_0.pj9(tmp0_log_0)) {
        tmp0_debug_0.oj9(tmp0_log_0, tmp1_debug_0);
      }
      var tmp0_safe_receiver_0 = $this.yjb_1;
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
        var tmp_2;
        if (getKClassFromExpression(tmp0_safe_receiver_0).equals(clazz) ? qualifier == null : false) {
          var tmp_3 = $this.yjb_1;
          tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : null;
        } else {
          tmp_2 = null;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_4;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      // Inline function 'org.koin.core.logger.Logger.debug' call
      var tmp0_debug_1 = $this.wjb_1.vj8_1;
      var tmp1_debug_1 = "|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in other scopes";
      // Inline function 'org.koin.core.logger.Logger.log' call
      var tmp0_log_1 = Level_DEBUG_getInstance();
      if (tmp0_debug_1.pj9(tmp0_log_1)) {
        tmp0_debug_1.oj9(tmp0_log_1, tmp1_debug_1);
      }
      tmp_4 = findInOtherScope($this, clazz, qualifier, parameterDef);
    } else {
      tmp_4 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_4;
    var tmp_5;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      if (!(parameterDef == null)) {
        var tmp_6 = KoinPlatformTools_getInstance();
        tmp_6.uja($this, Scope$resolveValue$lambda($this));
        // Inline function 'org.koin.core.logger.Logger.debug' call
        var tmp0_debug_2 = $this.wjb_1.vj8_1;
        // Inline function 'org.koin.core.logger.Logger.log' call
        var tmp0_log_2 = Level_DEBUG_getInstance();
        if (tmp0_debug_2.pj9(tmp0_log_2)) {
          tmp0_debug_2.oj9(tmp0_log_2, '|- << parameters');
        }
      }
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp_5 = tmp$ret$8;
    } else {
      tmp_5 = tmp3_elvis_lhs;
    }
    return tmp_5;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.xjb_1.d();
    $l$loop: while (tmp0_iterator.e()) {
      var scope = tmp0_iterator.f();
      instance = scope.cjc(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp;
    if (qualifier == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
      tmp = " & qualifier:'" + qualifier + "'";
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("No definition found for class:'" + getFullName(clazz) + "' q:'" + qualifierString + "'. Check your definitions!");
  }
  function Scope$resolveInstance$lambda(this$0, $parameters) {
    return function () {
      this$0.ajc_1.q3($parameters);
      return Unit_getInstance();
    };
  }
  function Scope$resolveInstance$lambda_0(this$0) {
    return function () {
      return this$0.ajc_1.t3();
    };
  }
  function Scope$resolveValue$lambda(this$0) {
    return function () {
      return this$0.ajc_1.t3();
    };
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.tjb_1 = scopeQualifier;
    this.ujb_1 = id;
    this.vjb_1 = isRoot;
    this.wjb_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.xjb_1 = ArrayList_init_$Create$();
    this.yjb_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0.zjb_1 = ArrayList_init_$Create$();
    this.ajc_1 = ArrayDeque_init_$Create$();
    this.bjc_1 = false;
  }
  protoOf(Scope).cjc = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.djc(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        // Inline function 'org.koin.core.logger.Logger.debug' call
        var tmp0_debug = this.wjb_1.vj8_1;
        var tmp1_debug = '* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString();
        // Inline function 'org.koin.core.logger.Logger.log' call
        var tmp0_log = Level_DEBUG_getInstance();
        if (tmp0_debug.pj9(tmp0_log)) {
          tmp0_debug.oj9(tmp0_log, tmp1_debug);
        }
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          // Inline function 'org.koin.core.logger.Logger.debug' call
          var tmp2_debug = this.wjb_1.vj8_1;
          var tmp3_debug = '* No instance found for ' + getFullName(clazz) + ' on scope ' + this.toString();
          // Inline function 'org.koin.core.logger.Logger.log' call
          var tmp0_log_0 = Level_DEBUG_getInstance();
          if (tmp2_debug.pj9(tmp0_log_0)) {
            tmp2_debug.oj9(tmp0_log_0, tmp3_debug);
          }
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).djc = function (clazz, qualifier, parameters) {
    var tmp;
    if (this.wjb_1.vj8_1.pj9(Level_DEBUG_getInstance())) {
      var tmp_0;
      if (qualifier == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.core.scope.Scope.get.<anonymous>' call
        tmp_0 = " with qualifier '" + qualifier + "'";
      }
      var tmp1_elvis_lhs = tmp_0;
      var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      this.wjb_1.vj8_1.oj9(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ...');
      var start = KoinPlatformTimeTools_getInstance().lj9();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_getInstance().lj9();
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = stop.m9(start);
      Companion_getInstance_2();
      var duration = tmp0_div.pd() / 1000000.0;
      this.wjb_1.vj8_1.oj9(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).toString = function () {
    return "['" + this.ujb_1 + "']";
  };
  protoOf(Scope).hashCode = function () {
    var result = hashCode(this.tjb_1);
    result = imul(result, 31) + getStringHashCode(this.ujb_1) | 0;
    result = imul(result, 31) + (this.vjb_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.wjb_1) | 0;
    return result;
  };
  protoOf(Scope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scope))
      return false;
    var tmp0_other_with_cast = other instanceof Scope ? other : THROW_CCE();
    if (!equals(this.tjb_1, tmp0_other_with_cast.tjb_1))
      return false;
    if (!(this.ujb_1 === tmp0_other_with_cast.ujb_1))
      return false;
    if (!(this.vjb_1 === tmp0_other_with_cast.vjb_1))
      return false;
    if (!equals(this.wjb_1, tmp0_other_with_cast.wjb_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.ejc_1 = 1000000.0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().z2(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_getInstance().fjc(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().a5(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_getInstance().njb();
    }
  }
  function register($this, koinApplication) {
    if (!($this.gjc_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this.gjc_1 = koinApplication.gj9_1;
  }
  function GlobalContext() {
    GlobalContext_instance = this;
    this.gjc_1 = null;
  }
  protoOf(GlobalContext).sv = function () {
    var tmp0_elvis_lhs = this.gjc_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('KoinApplication has not been started');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).tj9 = function (appDeclaration) {
    var koinApplication = Companion_getInstance().ij9();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    if (GlobalContext_instance == null)
      new GlobalContext();
    return GlobalContext_instance;
  }
  function getTimeSource() {
    var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (isNode) {
      tmp_0 = new NodeJsHrTimeSource();
    } else {
      var tmp_1 = self.performance && !!self.performance.now;
      var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2;
      if (isPerformanceNowSupported) {
        tmp_2 = new PerformanceNowTimeSource();
      } else {
        tmp_2 = new DateNowTimeSource();
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function NodeJsHrTimeSource() {
  }
  protoOf(NodeJsHrTimeSource).hjc = function () {
    var tmp = process.hrtime();
    var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.component1' call
    var seconds = tmp0_container[0];
    // Inline function 'kotlin.collections.component2' call
    var nanos = tmp0_container[1];
    return roundToLong(seconds * 1000000000 + nanos);
  };
  function PerformanceNowTimeSource() {
  }
  protoOf(PerformanceNowTimeSource).hjc = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  function DateNowTimeSource() {
  }
  protoOf(DateNowTimeSource).hjc = function () {
    return roundToLong(Date.now() * 1000000);
  };
  function KoinPlatformTimeTools() {
    KoinPlatformTimeTools_instance = this;
  }
  protoOf(KoinPlatformTimeTools).lj9 = function () {
    return getTimeSource().hjc();
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    if (KoinPlatformTimeTools_instance == null)
      new KoinPlatformTimeTools();
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  protoOf(KoinPlatformTools).qja = function (e) {
    return e.toString() + split(Exception_init_$Create$().toString(), ['\n']);
  };
  protoOf(KoinPlatformTools).fjc = function (kClass) {
    var tmp0_elvis_lhs = kClass.mh();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).cjb = function () {
    return getNumberHashCode(Default_getInstance().m7()).toString();
  };
  protoOf(KoinPlatformTools).ijc = function () {
    return LazyThreadSafetyMode_NONE_getInstance();
  };
  protoOf(KoinPlatformTools).rj9 = function () {
    return GlobalContext_getInstance();
  };
  protoOf(KoinPlatformTools).uja = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).njb = function () {
    return HashMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance == null)
      new KoinPlatformTools();
    return KoinPlatformTools_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Singleton_getInstance;
  _.$_$.b = Companion_getInstance_1;
  _.$_$.c = KoinPlatformTools_getInstance;
  _.$_$.d = getKoin;
  _.$_$.e = KoinComponent;
  _.$_$.f = KoinScopeComponent;
  _.$_$.g = startKoin;
  _.$_$.h = BeanDefinition;
  _.$_$.i = KoinDefinition;
  _.$_$.j = SingleInstanceFactory;
  _.$_$.k = module_0;
  //endregion
  return _;
}));

//# sourceMappingURL=core-koin-core-js-ir.js.map
