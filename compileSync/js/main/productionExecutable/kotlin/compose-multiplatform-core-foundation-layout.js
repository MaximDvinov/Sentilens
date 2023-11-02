(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-unit.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-unit.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    root['compose-multiplatform-core-foundation-layout'] = factory(typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var VOID = kotlin_kotlin.$_$.il;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var equals = kotlin_kotlin.$_$.oc;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var toString = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.qj;
  var hashCode = kotlin_kotlin.$_$.xc;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.h7;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var classMeta = kotlin_kotlin.$_$.kc;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var coerceIn = kotlin_kotlin.$_$.af;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var HorizontalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.r5;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var interfaceMeta = kotlin_kotlin.$_$.zc;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.z8;
  var roundToInt = kotlin_kotlin.$_$.ie;
  var get_lastIndex = kotlin_kotlin.$_$.z8;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var getNumberHashCode = kotlin_kotlin.$_$.tc;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var isSatisfiedBy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.v8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var isInterface = kotlin_kotlin.$_$.id;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var isObject = kotlin_kotlin.$_$.kd;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var fillArrayVal = kotlin_kotlin.$_$.qc;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var numberToInt = kotlin_kotlin.$_$.td;
  var getOrNull = kotlin_kotlin.$_$.n8;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var getOrNull_0 = kotlin_kotlin.$_$.m8;
  var sum = kotlin_kotlin.$_$.ma;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var compareTo = kotlin_kotlin.$_$.lc;
  var isArray = kotlin_kotlin.$_$.ad;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sk;
  var Enum = kotlin_kotlin.$_$.dj;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var toLong = kotlin_kotlin.$_$.ae;
  var Long = kotlin_kotlin.$_$.jj;
  var numberToLong = kotlin_kotlin.$_$.ud;
  var coerceAtLeast = kotlin_kotlin.$_$.re;
  var until = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var get_sign = kotlin_kotlin.$_$.ke;
  var coerceIn_0 = kotlin_kotlin.$_$.bf;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.se;
  var coerceAtMost = kotlin_kotlin.$_$.xe;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AlignmentLineOffsetDpElement, 'AlignmentLineOffsetDpElement', classMeta, ModifierNodeElement);
  setMetadataFor(AlignmentLineOffsetDpNode, 'AlignmentLineOffsetDpNode', classMeta, Node, [LayoutModifierNode, Node]);
  function get_spacing() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  function get_spacing_0() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(AspectRatioElement, 'AspectRatioElement', classMeta, ModifierNodeElement);
  setMetadataFor(AspectRatioNode, 'AspectRatioNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(BoxChildDataNode, 'BoxChildDataNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(BoxChildDataElement, 'BoxChildDataElement', classMeta, ModifierNodeElement);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.d96(_this__u8e3s4, weight, fill) : $super.d96.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.d96(_this__u8e3s4, weight, fill) : $super.d96.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta);
  setMetadataFor(FlowRowScopeInstance, 'FlowRowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(FlowResult, 'FlowResult', classMeta);
  setMetadataFor(flowMeasurePolicy$1, VOID, classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(IntrinsicSize, 'IntrinsicSize', classMeta, Enum);
  function get_enforceIncoming() {
    return true;
  }
  function measure(_this__u8e3s4, measurable, constraints) {
    var contentConstraints = this.v97(_this__u8e3s4, measurable, constraints);
    var placeable = measurable.w5h(this.w97() ? constrain(constraints, contentConstraints) : contentConstraints);
    var tmp = placeable.x5h_1;
    var tmp_0 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp, tmp_0, VOID, IntrinsicSizeModifier$measure$lambda(placeable));
  }
  function minIntrinsicWidth_1(_this__u8e3s4, measurable, height) {
    return measurable.q5n(height);
  }
  function minIntrinsicHeight_1(_this__u8e3s4, measurable, width) {
    return measurable.s5n(width);
  }
  function maxIntrinsicWidth_1(_this__u8e3s4, measurable, height) {
    return measurable.r5n(height);
  }
  function maxIntrinsicHeight_1(_this__u8e3s4, measurable, width) {
    return measurable.t5n(width);
  }
  setMetadataFor(IntrinsicSizeModifier, 'IntrinsicSizeModifier', interfaceMeta, VOID, [LayoutModifier]);
  setMetadataFor(MinIntrinsicWidthModifier, 'MinIntrinsicWidthModifier', objectMeta, VOID, [IntrinsicSizeModifier]);
  setMetadataFor(MaxIntrinsicWidthModifier, 'MaxIntrinsicWidthModifier', objectMeta, VOID, [IntrinsicSizeModifier]);
  setMetadataFor(PaddingElement, 'PaddingElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta);
  setMetadataFor(PaddingNode, 'PaddingNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingValuesElement, 'PaddingValuesElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingValuesModifier, 'PaddingValuesModifier', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks', objectMeta);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(LayoutWeightElement, 'LayoutWeightElement', classMeta, ModifierNodeElement);
  setMetadataFor(HorizontalAlignElement, 'HorizontalAlignElement', classMeta, ModifierNodeElement);
  setMetadataFor(LayoutWeightNode, 'LayoutWeightNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(HorizontalAlignNode, 'HorizontalAlignNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(rowColumnMeasurePolicy$1, VOID, classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(RowColumnMeasurementHelper, 'RowColumnMeasurementHelper', classMeta);
  setMetadataFor(RowColumnMeasureHelperResult, 'RowColumnMeasureHelperResult', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(FillElement, 'FillElement', classMeta, ModifierNodeElement);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WrapContentElement, 'WrapContentElement', classMeta, ModifierNodeElement);
  setMetadataFor(FillNode, 'FillNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(WrapContentNode, 'WrapContentNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(SizeElement, 'SizeElement', classMeta, ModifierNodeElement);
  setMetadataFor(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', classMeta, ModifierNodeElement);
  setMetadataFor(SizeNode, 'SizeNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(SpacerMeasurePolicy, 'SpacerMeasurePolicy', objectMeta, VOID, [MeasurePolicy]);
  //endregion
  function paddingFromBaseline(_this__u8e3s4, top, bottom) {
    top = top === VOID ? Companion_getInstance().i36_1 : top;
    bottom = bottom === VOID ? Companion_getInstance().i36_1 : bottom;
    var tmp;
    if (!equals(top, Companion_getInstance().i36_1)) {
      tmp = paddingFrom(Companion_getInstance_0(), get_FirstBaseline(), top);
    } else {
      tmp = Companion_getInstance_0();
    }
    var tmp_0 = _this__u8e3s4.n5f(tmp);
    var tmp_1;
    if (!equals(bottom, Companion_getInstance().i36_1)) {
      tmp_1 = paddingFrom(Companion_getInstance_0(), get_LastBaseline(), VOID, bottom);
    } else {
      tmp_1 = Companion_getInstance_0();
    }
    return tmp_0.n5f(tmp_1);
  }
  function paddingFrom(_this__u8e3s4, alignmentLine, before, after) {
    before = before === VOID ? Companion_getInstance().i36_1 : before;
    after = after === VOID ? Companion_getInstance().i36_1 : after;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = paddingFrom$lambda(alignmentLine, before, after);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new AlignmentLineOffsetDpElement(alignmentLine, before, after, tmp$ret$0));
  }
  function AlignmentLineOffsetDpElement(alignmentLine, before, after, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.k92_1 = alignmentLine;
    this.l92_1 = before;
    this.m92_1 = after;
    this.n92_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((_Dp___get_value__impl__geb1vb(this.l92_1) >= 0.0 ? true : equals(this.l92_1, Companion_getInstance().i36_1)) ? _Dp___get_value__impl__geb1vb(this.m92_1) >= 0.0 ? true : equals(this.m92_1, Companion_getInstance().i36_1) : false)) {
      // Inline function 'androidx.compose.foundation.layout.AlignmentLineOffsetDpElement.<anonymous>' call
      var message = 'Padding from alignment line must be a non-negative number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AlignmentLineOffsetDpElement).x29 = function () {
    return new AlignmentLineOffsetDpNode(this.k92_1, this.l92_1, this.m92_1);
  };
  protoOf(AlignmentLineOffsetDpElement).o92 = function (node) {
    node.d93_1 = this.k92_1;
    node.e93_1 = this.l92_1;
    node.f93_1 = this.m92_1;
  };
  protoOf(AlignmentLineOffsetDpElement).s5h = function (node) {
    return this.o92(node instanceof AlignmentLineOffsetDpNode ? node : THROW_CCE());
  };
  protoOf(AlignmentLineOffsetDpElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AlignmentLineOffsetDpElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return (equals(this.k92_1, otherModifier.k92_1) ? equals(this.l92_1, otherModifier.l92_1) : false) ? equals(this.m92_1, otherModifier.m92_1) : false;
  };
  protoOf(AlignmentLineOffsetDpElement).hashCode = function () {
    var result = hashCode(this.k92_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.l92_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.m92_1) | 0;
    return result;
  };
  function AlignmentLineOffsetDpNode(alignmentLine, before, after) {
    Node.call(this);
    this.d93_1 = alignmentLine;
    this.e93_1 = before;
    this.f93_1 = after;
  }
  protoOf(AlignmentLineOffsetDpNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    return alignmentLineOffsetMeasure(_this__u8e3s4, this.d93_1, this.e93_1, this.f93_1, measurable, constraints);
  };
  function alignmentLineOffsetMeasure(_this__u8e3s4, alignmentLine, before, after, measurable, constraints) {
    var placeable = measurable.w5h(get_horizontal(alignmentLine) ? Constraints__copy$default_impl_f452rp(constraints, VOID, VOID, 0) : Constraints__copy$default_impl_f452rp(constraints, 0));
    // Inline function 'kotlin.let' call
    var tmp0_let = placeable.s6r(alignmentLine);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.alignmentLineOffsetMeasure.<anonymous>' call
    var tmp;
    Companion_getInstance_1();
    if (!(tmp0_let === -2147483648)) {
      tmp = tmp0_let;
    } else {
      tmp = 0;
    }
    var linePosition = tmp;
    var axis = get_horizontal(alignmentLine) ? placeable.y5h_1 : placeable.x5h_1;
    var axisMax = get_horizontal(alignmentLine) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var paddingBefore = coerceIn((!equals(before, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(before) : 0) - linePosition | 0, 0, axisMax - axis | 0);
    var paddingAfter = coerceIn(((!equals(after, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(after) : 0) - axis | 0) + linePosition | 0, 0, (axisMax - axis | 0) - paddingBefore | 0);
    var tmp_0;
    if (get_horizontal(alignmentLine)) {
      tmp_0 = placeable.x5h_1;
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp1_max = (paddingBefore + placeable.x5h_1 | 0) + paddingAfter | 0;
      var tmp2_max = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp_0 = Math.max(tmp1_max, tmp2_max);
    }
    var width = tmp_0;
    var tmp_1;
    if (get_horizontal(alignmentLine)) {
      // Inline function 'kotlin.math.max' call
      var tmp3_max = (paddingBefore + placeable.y5h_1 | 0) + paddingAfter | 0;
      var tmp4_max = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp_1 = Math.max(tmp3_max, tmp4_max);
    } else {
      tmp_1 = placeable.y5h_1;
    }
    var height = tmp_1;
    return _this__u8e3s4.d5i(width, height, VOID, alignmentLineOffsetMeasure$lambda(alignmentLine, before, paddingBefore, width, paddingAfter, placeable, height));
  }
  function get_horizontal(_this__u8e3s4) {
    return _this__u8e3s4 instanceof HorizontalAlignmentLine;
  }
  function paddingFrom$lambda($alignmentLine, $before, $after) {
    return function ($this$null) {
      $this$null.u5n_1 = 'paddingFrom';
      $this$null.w5n_1.a5o('alignmentLine', $alignmentLine);
      $this$null.w5n_1.a5o('before', new Dp($before));
      $this$null.w5n_1.a5o('after', new Dp($after));
      return Unit_getInstance();
    };
  }
  function alignmentLineOffsetMeasure$lambda($alignmentLine, $before, $paddingBefore, $width, $paddingAfter, $placeable, $height) {
    return function ($this$layout) {
      var x = get_horizontal($alignmentLine) ? 0 : !equals($before, Companion_getInstance().i36_1) ? $paddingBefore : ($width - $paddingAfter | 0) - $placeable.x5h_1 | 0;
      var y = !get_horizontal($alignmentLine) ? 0 : !equals($before, Companion_getInstance().i36_1) ? $paddingBefore : ($height - $paddingAfter | 0) - $placeable.y5h_1 | 0;
      $this$layout.p5n($placeable, x, y);
      return Unit_getInstance();
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.j93_1 = space;
    this.k93_1 = rtlMirror;
    this.l93_1 = alignment;
    this.m93_1 = this.j93_1;
  }
  protoOf(SpacedAligned).g93 = function () {
    return this.m93_1;
  };
  protoOf(SpacedAligned).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.t35(this.j93_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.k93_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = occupied;
        var tmp1_min = totalSize - item | 0;
        outPositions[tmp1] = Math.min(tmp0_min, tmp1_min);
        // Inline function 'kotlin.math.min' call
        var tmp2_min = (totalSize - outPositions[tmp1] | 0) - item | 0;
        lastSpace = Math.min(spacePx, tmp2_min);
        occupied = (outPositions[tmp1] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var tmp2_anonymous = sizes[i];
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = occupied;
          var tmp1_min_0 = totalSize - tmp2_anonymous | 0;
          outPositions[i] = Math.min(tmp0_min_0, tmp1_min_0);
          // Inline function 'kotlin.math.min' call
          var tmp2_min_0 = (totalSize - outPositions[i] | 0) - tmp2_anonymous | 0;
          lastSpace = Math.min(spacePx, tmp2_min_0);
          occupied = (outPositions[i] + tmp2_anonymous | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.l93_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.l93_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.h93(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.k93_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.j93_1) + ', ' + this.l93_1 + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.j93_1);
    result = imul(result, 31) + (this.k93_1 | 0) | 0;
    result = imul(result, 31) + (this.l93_1 == null ? 0 : hashCode(this.l93_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.j93_1, tmp0_other_with_cast.j93_1))
      return false;
    if (!(this.k93_1 === tmp0_other_with_cast.k93_1))
      return false;
    if (!equals(this.l93_1, tmp0_other_with_cast.l93_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().x93(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().w93(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().w93(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().x93(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().x93(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().w93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.y93_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).g93 = function () {
    return this.y93_1;
  };
  protoOf(Arrangement$Center$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().z93(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().z93(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().z93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.a94_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).g93 = function () {
    return this.a94_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().b94(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().b94(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().b94(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.c94_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).g93 = function () {
    return this.c94_1;
  };
  protoOf(Arrangement$SpaceBetween$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().d94(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().d94(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().d94(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.e94_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).g93 = function () {
    return this.e94_1;
  };
  protoOf(Arrangement$SpaceAround$1).h93 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().f94(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().f94(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).i93 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().f94(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance_2().a5f_1.f5f(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.i5f(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.n93_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.o93_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.p93_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.q93_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.r93_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.s93_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.t93_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.u93_1 = new Arrangement$SpaceAround$1();
    this.v93_1 = 0;
  }
  protoOf(Arrangement).g94 = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).h94 = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).w93 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var tmp2_anonymous = size[i];
          outPosition[i] = current;
          current = current + tmp2_anonymous | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).x93 = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var tmp1_anonymous = size[i];
          outPosition[i] = current;
          current = current + tmp1_anonymous | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).z93 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + tmp2_anonymous;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).b94 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp2_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).d94 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp1_maxOf = get_lastIndex(size);
    var noOfGaps = Math.max(tmp1_maxOf, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput ? size.length === 1 : false) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var tmp3_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp3_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).f94 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp2_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function aspectRatio(_this__u8e3s4, ratio, matchHeightConstraintsFirst) {
    matchHeightConstraintsFirst = matchHeightConstraintsFirst === VOID ? false : matchHeightConstraintsFirst;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = aspectRatio$lambda(ratio, matchHeightConstraintsFirst);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new AspectRatioElement(ratio, matchHeightConstraintsFirst, tmp$ret$0));
  }
  function AspectRatioElement(aspectRatio, matchHeightConstraintsFirst, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.k94_1 = aspectRatio;
    this.l94_1 = matchHeightConstraintsFirst;
    this.m94_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.k94_1 > 0)) {
      // Inline function 'androidx.compose.foundation.layout.AspectRatioElement.<anonymous>' call
      var message = 'aspectRatio ' + this.k94_1 + ' must be > 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AspectRatioElement).x29 = function () {
    return new AspectRatioNode(this.k94_1, this.l94_1);
  };
  protoOf(AspectRatioElement).n94 = function (node) {
    node.c95_1 = this.k94_1;
    node.d95_1 = this.l94_1;
  };
  protoOf(AspectRatioElement).s5h = function (node) {
    return this.n94(node instanceof AspectRatioNode ? node : THROW_CCE());
  };
  protoOf(AspectRatioElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AspectRatioElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.k94_1 === otherModifier.k94_1 ? this.l94_1 === other.l94_1 : false;
  };
  protoOf(AspectRatioElement).hashCode = function () {
    return imul(getNumberHashCode(this.k94_1), 31) + (this.l94_1 | 0) | 0;
  };
  function findSize(_this__u8e3s4, $this) {
    if (!$this.d95_1) {
      // Inline function 'kotlin.also' call
      var tmp0_also = tryMaxWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp0_also, Companion_getInstance_3().z36_1))
        return tmp0_also;
      // Inline function 'kotlin.also' call
      var tmp1_also = tryMaxHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp1_also, Companion_getInstance_3().z36_1))
        return tmp1_also;
      // Inline function 'kotlin.also' call
      var tmp2_also = tryMinWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp2_also, Companion_getInstance_3().z36_1))
        return tmp2_also;
      // Inline function 'kotlin.also' call
      var tmp3_also = tryMinHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp3_also, Companion_getInstance_3().z36_1))
        return tmp3_also;
      // Inline function 'kotlin.also' call
      var tmp4_also = tryMaxWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp4_also, Companion_getInstance_3().z36_1))
        return tmp4_also;
      // Inline function 'kotlin.also' call
      var tmp5_also = tryMaxHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp5_also, Companion_getInstance_3().z36_1))
        return tmp5_also;
      // Inline function 'kotlin.also' call
      var tmp6_also = tryMinWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp6_also, Companion_getInstance_3().z36_1))
        return tmp6_also;
      // Inline function 'kotlin.also' call
      var tmp7_also = tryMinHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp7_also, Companion_getInstance_3().z36_1))
        return tmp7_also;
    } else {
      // Inline function 'kotlin.also' call
      var tmp8_also = tryMaxHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp8_also, Companion_getInstance_3().z36_1))
        return tmp8_also;
      // Inline function 'kotlin.also' call
      var tmp9_also = tryMaxWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp9_also, Companion_getInstance_3().z36_1))
        return tmp9_also;
      // Inline function 'kotlin.also' call
      var tmp10_also = tryMinHeight$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp10_also, Companion_getInstance_3().z36_1))
        return tmp10_also;
      // Inline function 'kotlin.also' call
      var tmp11_also = tryMinWidth$default(_this__u8e3s4, $this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp11_also, Companion_getInstance_3().z36_1))
        return tmp11_also;
      // Inline function 'kotlin.also' call
      var tmp12_also = tryMaxHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp12_also, Companion_getInstance_3().z36_1))
        return tmp12_also;
      // Inline function 'kotlin.also' call
      var tmp13_also = tryMaxWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp13_also, Companion_getInstance_3().z36_1))
        return tmp13_also;
      // Inline function 'kotlin.also' call
      var tmp14_also = tryMinHeight(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp14_also, Companion_getInstance_3().z36_1))
        return tmp14_also;
      // Inline function 'kotlin.also' call
      var tmp15_also = tryMinWidth(_this__u8e3s4, $this, false);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      if (!equals(tmp15_also, Companion_getInstance_3().z36_1))
        return tmp15_also;
    }
    return Companion_getInstance_3().z36_1;
  }
  function tryMaxWidth(_this__u8e3s4, $this, enforceConstraints) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    Companion_getInstance_4();
    if (!(maxWidth === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = maxWidth / $this.c95_1;
      var height = roundToInt(tmp0_roundToInt);
      if (height > 0) {
        var size = IntSize(maxWidth, height);
        if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_3().z36_1;
  }
  function tryMaxWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMaxHeight(_this__u8e3s4, $this, enforceConstraints) {
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    Companion_getInstance_4();
    if (!(maxHeight === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = maxHeight * $this.c95_1;
      var width = roundToInt(tmp0_roundToInt);
      if (width > 0) {
        var size = IntSize(width, maxHeight);
        if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_3().z36_1;
  }
  function tryMaxHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinWidth(_this__u8e3s4, $this, enforceConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = minWidth / $this.c95_1;
    var height = roundToInt(tmp0_roundToInt);
    if (height > 0) {
      var size = IntSize(minWidth, height);
      if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_3().z36_1;
  }
  function tryMinWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinHeight(_this__u8e3s4, $this, enforceConstraints) {
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = minHeight * $this.c95_1;
    var width = roundToInt(tmp0_roundToInt);
    if (width > 0) {
      var size = IntSize(width, minHeight);
      if (!enforceConstraints ? true : isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_3().z36_1;
  }
  function tryMinHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function AspectRatioNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.p5n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function AspectRatioNode(aspectRatio, matchHeightConstraintsFirst) {
    Node.call(this);
    this.c95_1 = aspectRatio;
    this.d95_1 = matchHeightConstraintsFirst;
  }
  protoOf(AspectRatioNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    var size = findSize(constraints, this);
    var tmp;
    if (!equals(size, Companion_getInstance_3().z36_1)) {
      tmp = Companion_getInstance_4().n35(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
    } else {
      tmp = constraints;
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.w5h(wrappedConstraints);
    var tmp_0 = placeable.x5h_1;
    var tmp_1 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp_0, tmp_1, VOID, AspectRatioNode$measure$lambda(placeable));
  };
  protoOf(AspectRatioNode).e5i = function (_this__u8e3s4, measurable, height) {
    var tmp;
    Companion_getInstance_4();
    if (!(height === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = height * this.c95_1;
      tmp = roundToInt(tmp0_roundToInt);
    } else {
      tmp = measurable.q5n(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).g5i = function (_this__u8e3s4, measurable, height) {
    var tmp;
    Companion_getInstance_4();
    if (!(height === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = height * this.c95_1;
      tmp = roundToInt(tmp0_roundToInt);
    } else {
      tmp = measurable.r5n(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).f5i = function (_this__u8e3s4, measurable, width) {
    var tmp;
    Companion_getInstance_4();
    if (!(width === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = width / this.c95_1;
      tmp = roundToInt(tmp0_roundToInt);
    } else {
      tmp = measurable.s5n(width);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).h5i = function (_this__u8e3s4, measurable, width) {
    var tmp;
    Companion_getInstance_4();
    if (!(width === 2147483647)) {
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = width / this.c95_1;
      tmp = roundToInt(tmp0_roundToInt);
    } else {
      tmp = measurable.t5n(width);
    }
    return tmp;
  };
  function aspectRatio$lambda($ratio, $matchHeightConstraintsFirst) {
    return function ($this$null) {
      $this$null.u5n_1 = 'aspectRatio';
      $this$null.w5n_1.a5o('ratio', $ratio);
      $this$null.w5n_1.a5o('matchHeightConstraintsFirst', $matchHeightConstraintsFirst);
      return Unit_getInstance();
    };
  }
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t95_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s95_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.m5f(IntSize(placeable.x5h_1, placeable.y5h_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.g6y(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.s95_1 = alignment;
    this.t95_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).b6u = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.r6r();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box$composable(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h1t(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)199@7940L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1t(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.b1t()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:198)');
      }
      var tmp0_measurePolicy = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = $composer_0;
      var tmp1_Layout$composable = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_1 = tmp0_Layout$composable;
      $composer_1.m1r(1725976829);
      sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
      var localMap = $composer_1.f1u();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_5().s6s_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
      var $composer_2 = $composer_1;
      var tmp = $composer_2.z1s();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.p1t();
      if ($composer_2.a1t()) {
        $composer_2.q1t(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_2.r1t();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp0_measurePolicy, Companion_getInstance_5().x6s_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_5().w6s_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_5().a6t_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
        tmp0_with.x1t(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_2.m1r(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1851532291, 'C:Box.kt#2w3rfo');
      sourceInformationMarkerEnd($composer_3);
      $composer_2.o1r();
      $composer_2.s1t();
      $composer_1.o1r();
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
      tmp0_safe_receiver.z28(Box$composable$lambda(modifier, $changed));
    }
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.m1r(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)85@3660L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:79)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance_2().o5e_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.y1t(alignment) | $composer_1.y1t(propagateMinConstraints));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_6().y1s_1) {
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        var value = boxMeasurePolicy(alignment, propagateMinConstraints);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.u5n_1 = 'align';
      $this$null.v5n_1 = $alignment;
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).u95 = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.x95_1 = alignment;
    this.y95_1 = matchParentSize;
    this.z95_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).x29 = function () {
    return new BoxChildDataNode(this.x95_1, this.y95_1);
  };
  protoOf(BoxChildDataElement).a96 = function (node) {
    node.s95_1 = this.x95_1;
    node.t95_1 = this.y95_1;
  };
  protoOf(BoxChildDataElement).s5h = function (node) {
    return this.a96(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.x95_1);
    result = imul(31, result) + (this.y95_1 | 0) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.x95_1, otherModifier.x95_1) ? this.y95_1 === otherModifier.y95_1 : false;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.b96_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).e6w = function (_this__u8e3s4, measurables, constraints) {
    return this.b96_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.c96_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).e6w = function (_this__u8e3s4, measurables, constraints) {
    return this.c96_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1);
    return $this$MeasurePolicy.d5i(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.f4b(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0_anonymous = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.m(tmp0_anonymous);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.f4b(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.l()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1);
        return $this$MeasurePolicy.d5i(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.l35_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.l35_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.g() === 1) {
        var measurable = measurables.m(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.w5h(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1);
          var tmp1_max = placeable.x5h_1;
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1);
          var tmp3_max = placeable.y5h_1;
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1);
          placeable = measurable.w5h(Companion_getInstance_4().n35(_Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1)));
        }
        return $this$MeasurePolicy.d5i(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.g();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.l35_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.l35_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.g() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.w5h(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.x5h_1;
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.y5h_1;
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_getInstance();
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp_6;
        var tmp_7 = boxWidth_0._v;
        Companion_getInstance_4();
        if (!(tmp_7 === 2147483647)) {
          tmp_6 = boxWidth_0._v;
        } else {
          tmp_6 = 0;
        }
        var tmp0_minWidth = tmp_6;
        var tmp_8;
        var tmp_9 = boxHeight_0._v;
        Companion_getInstance_4();
        if (!(tmp_9 === 2147483647)) {
          tmp_8 = boxHeight_0._v;
        } else {
          tmp_8 = 0;
        }
        var tmp1_minHeight = tmp_8;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.g() - 1 | 0;
        var tmp_10;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.m(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.w5h(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_10 = Unit_getInstance();
        }
        tmp_5 = tmp_10;
      }
      var tmp_11 = boxWidth_0._v;
      var tmp_12 = boxHeight_0._v;
      return $this$MeasurePolicy.d5i(tmp_11, tmp_12, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  function Box$composable$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance_2().o5e_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function ColumnScope() {
  }
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    $composer_0.m1r(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)103@4799L562:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:97)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().p93_1) ? equals(horizontalAlignment, Companion_getInstance_2().a5f_1) : false) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.y1t(verticalArrangement) | $composer_1.y1t(horizontalAlignment));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_6().y1s_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.g93();
        var tmp2_crossAxisAlignment = Companion_getInstance_8().j96(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  protoOf(ColumnScopeInstance).d96 = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.n5f(new LayoutWeightElement(weight, fill));
  };
  protoOf(ColumnScopeInstance).f96 = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.n5f(new HorizontalAlignElement(alignment));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    _init_properties_Column_kt__s1zb92();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().p93_1.i93(density, totalSize, size, outPosition);
    return Unit_getInstance();
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.i93(density, totalSize, size, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().p93_1.g93();
      var tmp2_crossAxisAlignment = Companion_getInstance_8().j96(Companion_getInstance_2().a5f_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  var CROSS_AXIS_ALIGNMENT_START;
  function rowMeasurementHelper$composable(horizontalArrangement, verticalArrangement, maxItemsInMainAxis, $composer, $changed) {
    _init_properties_FlowLayout_kt__ftkyso();
    var $composer_0 = $composer;
    $composer_0.m1r(-425994897);
    sourceInformation($composer_0, 'C(rowMeasurementHelper$composable)P(!1,2)168@6017L633:FlowLayout.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-425994897, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurementHelper$composable (FlowLayout.kt:163)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.m1r(-1058148781);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!(!!($composer_1.y1t(horizontalArrangement) | $composer_1.y1t(verticalArrangement)) | $composer_1.y1t(maxItemsInMainAxis));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.w1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_6().y1s_1) {
      // Inline function 'androidx.compose.foundation.layout.rowMeasurementHelper$composable.<anonymous>' call
      var value = flowMeasurePolicy(LayoutOrientation_Horizontal_getInstance(), getHorizontalArrangement(horizontalArrangement), horizontalArrangement.g93(), SizeMode_Wrap_getInstance(), get_CROSS_AXIS_ALIGNMENT_TOP(), getVerticalArrangement(verticalArrangement), verticalArrangement.g93(), maxItemsInMainAxis);
      $composer_1.x1t(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0;
  }
  function FlowRowScopeInstance() {
    FlowRowScopeInstance_instance = this;
    this.k96_1 = RowScopeInstance_getInstance();
  }
  protoOf(FlowRowScopeInstance).d96 = function (_this__u8e3s4, weight, fill) {
    return this.k96_1.d96(_this__u8e3s4, weight, fill);
  };
  var FlowRowScopeInstance_instance;
  function FlowRowScopeInstance_getInstance() {
    if (FlowRowScopeInstance_instance == null)
      new FlowRowScopeInstance();
    return FlowRowScopeInstance_instance;
  }
  function flowMeasurePolicy(orientation, mainAxisArrangement, mainAxisArrangementSpacing, crossAxisSize, crossAxisAlignment, crossAxisArrangement, crossAxisArrangementSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    return new flowMeasurePolicy$1(orientation, mainAxisArrangement, mainAxisArrangementSpacing, crossAxisSize, crossAxisAlignment, maxItemsInMainAxis, crossAxisArrangementSpacing, crossAxisArrangement);
  }
  function getHorizontalArrangement(horizontalArrangement) {
    _init_properties_FlowLayout_kt__ftkyso();
    return getHorizontalArrangement$lambda(horizontalArrangement);
  }
  function getVerticalArrangement(verticalArrangement) {
    _init_properties_FlowLayout_kt__ftkyso();
    return getVerticalArrangement$lambda(verticalArrangement);
  }
  function FlowResult(mainAxisTotalSize, crossAxisTotalSize, items) {
    this.m96_1 = mainAxisTotalSize;
    this.n96_1 = crossAxisTotalSize;
    this.o96_1 = items;
  }
  function breakDownItems(_this__u8e3s4, measureHelper, orientation, constraints, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    var items = new MutableVector(tmp$ret$0, 0);
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
    var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var mainAxisMin = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    var crossAxisMax = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints));
    var measurables = measureHelper.u96_1;
    var placeables = measureHelper.v96_1;
    var tmp$ret$6;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = _this__u8e3s4.s35(measureHelper.r96_1);
    tmp$ret$6 = Math.ceil(tmp0_ceil);
    var spacing = numberToInt(tmp$ret$6);
    var subsetConstraints = _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, 0, crossAxisMax);
    var tmp0_safe_receiver = getOrNull(measurables, 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = measureAndCache(tmp0_safe_receiver, subsetConstraints, orientation, breakDownItems$lambda(placeables));
    }
    var nextSize = tmp;
    var startBreakLineIndex = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp1_arrayOfNulls = measurables.g();
    var endBreakLineList = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var endBreakLineIndex = 0;
    var leftOver = mainAxisMax;
    var mainAxisTotalSize = mainAxisMin;
    var currentLineMainAxisSize = 0;
    var inductionVariable = 0;
    var last = measurables.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var itemMainAxisSize = ensureNotNull(nextSize);
        currentLineMainAxisSize = currentLineMainAxisSize + itemMainAxisSize | 0;
        leftOver = leftOver - itemMainAxisSize | 0;
        var tmp2_safe_receiver = getOrNull(measurables, index + 1 | 0);
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = measureAndCache(tmp2_safe_receiver, subsetConstraints, orientation, breakDownItems$lambda_0(placeables, index));
        }
        var tmp3_safe_receiver = tmp_0;
        nextSize = tmp3_safe_receiver == null ? null : tmp3_safe_receiver + spacing | 0;
        var tmp_1;
        if ((index + 1 | 0) >= measurables.g() ? true : ((index + 1 | 0) - startBreakLineIndex | 0) >= maxItemsInMainAxis) {
          tmp_1 = true;
        } else {
          var tmp_2 = leftOver;
          var tmp4_elvis_lhs = nextSize;
          tmp_1 = (tmp_2 - (tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs) | 0) < 0;
        }
        if (tmp_1) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var tmp2_maxOf = mainAxisTotalSize;
          var tmp3_maxOf = currentLineMainAxisSize;
          mainAxisTotalSize = Math.max(tmp2_maxOf, tmp3_maxOf);
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp4_minOf = mainAxisTotalSize;
          mainAxisTotalSize = Math.min(tmp4_minOf, mainAxisMax);
          currentLineMainAxisSize = 0;
          leftOver = mainAxisMax;
          startBreakLineIndex = index + 1 | 0;
          endBreakLineList[endBreakLineIndex] = index + 1 | 0;
          endBreakLineIndex = endBreakLineIndex + 1 | 0;
          var tmp6_safe_receiver = nextSize;
          nextSize = tmp6_safe_receiver == null ? null : tmp6_safe_receiver - spacing | 0;
        }
      }
       while (inductionVariable <= last);
    var subsetBoxConstraints = OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(subsetConstraints, mainAxisTotalSize), orientation);
    startBreakLineIndex = 0;
    var crossAxisTotalSize = 0;
    endBreakLineIndex = 0;
    var endIndex = getOrNull_0(endBreakLineList, endBreakLineIndex);
    while (!(endIndex == null)) {
      var result = measureHelper.x96(_this__u8e3s4, subsetBoxConstraints, startBreakLineIndex, endIndex);
      crossAxisTotalSize = crossAxisTotalSize + result.y96_1 | 0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp5_maxOf = mainAxisTotalSize;
      var tmp6_maxOf = result.z96_1;
      mainAxisTotalSize = Math.max(tmp5_maxOf, tmp6_maxOf);
      items.g23(result);
      startBreakLineIndex = endIndex;
      endBreakLineIndex = endBreakLineIndex + 1 | 0;
      endIndex = getOrNull_0(endBreakLineList, endBreakLineIndex);
    }
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp7_maxOf = crossAxisTotalSize;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
    var tmp8_maxOf = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40(constraints));
    crossAxisTotalSize = Math.max(tmp7_maxOf, tmp8_maxOf);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp9_maxOf = mainAxisTotalSize;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp10_maxOf = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints));
    mainAxisTotalSize = Math.max(tmp9_maxOf, tmp10_maxOf);
    return new FlowResult(mainAxisTotalSize, crossAxisTotalSize, items);
  }
  function minIntrinsicMainAxisSize(children, mainAxisSize, crossAxisSize, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp = 0;
    var tmp_0 = children.g();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var mainAxisSizes = tmp_1;
    var tmp_2 = 0;
    var tmp_3 = children.g();
    var tmp_4 = new Int32Array(tmp_3);
    while (tmp_2 < tmp_3) {
      tmp_4[tmp_2] = 0;
      tmp_2 = tmp_2 + 1 | 0;
    }
    var crossAxisSizes = tmp_4;
    var inductionVariable = 0;
    var last = children.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = children.m(index);
        var mainAxisItemSize = mainAxisSize(child, index, crossAxisAvailable);
        mainAxisSizes[index] = mainAxisItemSize;
        crossAxisSizes[index] = crossAxisSize(child, index, mainAxisItemSize);
      }
       while (inductionVariable <= last);
    var maxMainAxisSize = sum(mainAxisSizes);
    var mainAxisUsed = maxMainAxisSize;
    // Inline function 'kotlin.collections.maxOf' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (crossAxisSizes.length === 0)
      throw NoSuchElementException_init_$Create$();
    // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
    var maxValue = crossAxisSizes[0];
    var inductionVariable_0 = 1;
    var last_0 = get_lastIndex(crossAxisSizes);
    if (inductionVariable_0 <= last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
        var v = crossAxisSizes[i];
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
       while (!(i === last_0));
    var crossAxisUsed = maxValue;
    // Inline function 'kotlin.collections.maxOf' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (mainAxisSizes.length === 0)
      throw NoSuchElementException_init_$Create$();
    // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
    var maxValue_0 = mainAxisSizes[0];
    var inductionVariable_1 = 1;
    var last_1 = get_lastIndex(mainAxisSizes);
    if (inductionVariable_1 <= last_1)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.minIntrinsicMainAxisSize.<anonymous>' call
        var v_0 = mainAxisSizes[i_0];
        if (compareTo(maxValue_0, v_0) < 0) {
          maxValue_0 = v_0;
        }
      }
       while (!(i_0 === last_1));
    var minimumItemSize = maxValue_0;
    var low = minimumItemSize;
    var high = maxMainAxisSize;
    while (low < high) {
      if (crossAxisUsed === crossAxisAvailable) {
        return mainAxisUsed;
      }
      var mid = (low + high | 0) / 2 | 0;
      mainAxisUsed = mid;
      crossAxisUsed = intrinsicCrossAxisSize_0(children, mainAxisSizes, crossAxisSizes, mainAxisUsed, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis);
      if (crossAxisUsed === crossAxisAvailable) {
        return mainAxisUsed;
      } else if (crossAxisUsed > crossAxisAvailable) {
        low = mid + 1 | 0;
      } else {
        high = mid - 1 | 0;
      }
    }
    return mainAxisUsed;
  }
  function maxIntrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    var fixedSpace = 0;
    var currentFixedSpace = 0;
    var lastBreak = 0;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.m(index);
        // Inline function 'androidx.compose.foundation.layout.maxIntrinsicMainAxisSize.<anonymous>' call
        var size = mainAxisSize(item, index, crossAxisAvailable) + mainAxisSpacing | 0;
        if (((index + 1 | 0) - lastBreak | 0) === maxItemsInMainAxis ? true : (index + 1 | 0) === children.g()) {
          lastBreak = index;
          currentFixedSpace = currentFixedSpace + size | 0;
          currentFixedSpace = currentFixedSpace - mainAxisSpacing | 0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = fixedSpace;
          var tmp1_max = currentFixedSpace;
          fixedSpace = Math.max(tmp0_max, tmp1_max);
          currentFixedSpace = 0;
        } else {
          currentFixedSpace = currentFixedSpace + size | 0;
        }
      }
       while (inductionVariable <= last);
    return fixedSpace;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    if (children.l()) {
      return 0;
    }
    var nextChild = getOrNull(children, 0);
    var tmp0_safe_receiver = nextChild;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : crossAxisSize(tmp0_safe_receiver, 0, mainAxisAvailable);
    var nextCrossAxisSize = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = nextChild;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : mainAxisSize(tmp2_safe_receiver, 0, nextCrossAxisSize);
    var nextMainAxisSize = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var remaining = mainAxisAvailable;
    var currentCrossAxisSize = 0;
    var totalCrossAxisSize = 0;
    var lastBreak = 0;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.m(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        ensureNotNull(nextChild);
        var childCrossAxisSize = nextCrossAxisSize;
        var childMainAxisSize = nextMainAxisSize;
        remaining = remaining - childMainAxisSize | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = currentCrossAxisSize;
        currentCrossAxisSize = Math.max(tmp0_maxOf, childCrossAxisSize);
        nextChild = getOrNull(children, index + 1 | 0);
        var tmp0_safe_receiver_0 = nextChild;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : crossAxisSize(tmp0_safe_receiver_0, index + 1 | 0, mainAxisAvailable);
        nextCrossAxisSize = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        var tmp2_safe_receiver_0 = nextChild;
        var tmp3_safe_receiver = tmp2_safe_receiver_0 == null ? null : mainAxisSize(tmp2_safe_receiver_0, index + 1 | 0, nextCrossAxisSize);
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver + mainAxisSpacing | 0;
        nextMainAxisSize = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
        if (((remaining < 0 ? true : (index + 1 | 0) === children.g()) ? true : ((index + 1 | 0) - lastBreak | 0) === maxItemsInMainAxis) ? true : (remaining - nextMainAxisSize | 0) < 0) {
          totalCrossAxisSize = totalCrossAxisSize + (currentCrossAxisSize + crossAxisSpacing | 0) | 0;
          currentCrossAxisSize = 0;
          remaining = mainAxisAvailable;
          lastBreak = index + 1 | 0;
          nextMainAxisSize = nextMainAxisSize - mainAxisSpacing | 0;
        }
      }
       while (inductionVariable <= last);
    totalCrossAxisSize = totalCrossAxisSize - crossAxisSpacing | 0;
    return totalCrossAxisSize;
  }
  function measureAndCache(_this__u8e3s4, constraints, orientation, storePlaceable) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    if (get_weight(get_rowColumnParentData(_this__u8e3s4)) === 0.0) {
      // Inline function 'kotlin.also' call
      var tmp0_also = _this__u8e3s4.w5h(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(constraints, 0), orientation));
      // Inline function 'kotlin.contracts.contract' call
      storePlaceable(tmp0_also);
      var placeable = tmp0_also;
      tmp = mainAxisSize(placeable, orientation);
    } else {
      Companion_getInstance_4();
      tmp = mainAxisMin(_this__u8e3s4, orientation, 2147483647);
    }
    var itemSize = tmp;
    return itemSize;
  }
  function intrinsicCrossAxisSize_0(children, mainAxisSizes, crossAxisSizes, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp = intrinsicCrossAxisSize$lambda(mainAxisSizes);
    return intrinsicCrossAxisSize(children, tmp, intrinsicCrossAxisSize$lambda_0(crossAxisSizes), mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, maxItemsInMainAxis);
  }
  function mainAxisSize(_this__u8e3s4, orientation) {
    _init_properties_FlowLayout_kt__ftkyso();
    return orientation.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.x5h_1 : _this__u8e3s4.y5h_1;
  }
  function mainAxisMin(_this__u8e3s4, orientation, crossAxisSize) {
    _init_properties_FlowLayout_kt__ftkyso();
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = _this__u8e3s4.q5n(crossAxisSize);
    } else {
      tmp = _this__u8e3s4.s5n(crossAxisSize);
    }
    return tmp;
  }
  function flowMeasurePolicy$o$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function flowMeasurePolicy$o$measure$lambda_0($flowResult, $measureHelper, $outPosition, $this_measure) {
    return function ($this$layout) {
      var tmp0_forEachIndexed = $flowResult.o96_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEachIndexed.e23_1;
      var tmp;
      if (size > 0) {
        var i = 0;
        var tmp_0 = tmp0_forEachIndexed.c23_1;
        var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.foundation.layout.<no name provided>.measure.<anonymous>.<anonymous>' call
          var tmp1_anonymous = i;
          var tmp2_anonymous = content[i];
          $measureHelper.e97($this$layout, tmp2_anonymous, $outPosition[tmp1_anonymous], $this_measure.f4b());
          var tmp0 = i;
          i = tmp0 + 1 | 0;
        }
         while (i < size);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function flowMeasurePolicy$o$maxMainAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.r5n(h);
  }
  function flowMeasurePolicy$o$maxMainAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.t5n(w);
  }
  function flowMeasurePolicy$o$maxCrossAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.t5n(w);
  }
  function flowMeasurePolicy$o$maxCrossAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.r5n(h);
  }
  function flowMeasurePolicy$o$minCrossAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.s5n(w);
  }
  function flowMeasurePolicy$o$minCrossAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.q5n(h);
  }
  function flowMeasurePolicy$o$minMainAxisIntrinsicItemSize$lambda($this$null, _anonymous_parameter_0__qggqh8, h) {
    return $this$null.q5n(h);
  }
  function flowMeasurePolicy$o$minMainAxisIntrinsicItemSize$lambda_0($this$null, _anonymous_parameter_0__qggqh8, w) {
    return $this$null.s5n(w);
  }
  function flowMeasurePolicy$1($orientation, $mainAxisArrangement, $mainAxisArrangementSpacing, $crossAxisSize, $crossAxisAlignment, $maxItemsInMainAxis, $crossAxisArrangementSpacing, $crossAxisArrangement) {
    this.j97_1 = $orientation;
    this.k97_1 = $mainAxisArrangement;
    this.l97_1 = $mainAxisArrangementSpacing;
    this.m97_1 = $crossAxisSize;
    this.n97_1 = $crossAxisAlignment;
    this.o97_1 = $maxItemsInMainAxis;
    this.p97_1 = $crossAxisArrangementSpacing;
    this.q97_1 = $crossAxisArrangement;
    var tmp = this;
    var tmp_0;
    if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = flowMeasurePolicy$o$maxMainAxisIntrinsicItemSize$lambda;
    } else {
      tmp_0 = flowMeasurePolicy$o$maxMainAxisIntrinsicItemSize$lambda_0;
    }
    tmp.f97_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_2 = flowMeasurePolicy$o$maxCrossAxisIntrinsicItemSize$lambda;
    } else {
      tmp_2 = flowMeasurePolicy$o$maxCrossAxisIntrinsicItemSize$lambda_0;
    }
    tmp_1.g97_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4;
    if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_4 = flowMeasurePolicy$o$minCrossAxisIntrinsicItemSize$lambda;
    } else {
      tmp_4 = flowMeasurePolicy$o$minCrossAxisIntrinsicItemSize$lambda_0;
    }
    tmp_3.h97_1 = tmp_4;
    var tmp_5 = this;
    var tmp_6;
    if ($orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_6 = flowMeasurePolicy$o$minMainAxisIntrinsicItemSize$lambda;
    } else {
      tmp_6 = flowMeasurePolicy$o$minMainAxisIntrinsicItemSize$lambda_0;
    }
    tmp_5.i97_1 = tmp_6;
  }
  protoOf(flowMeasurePolicy$1).e6w = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.l()) {
      return _this__u8e3s4.d5i(0, 0, VOID, flowMeasurePolicy$o$measure$lambda);
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.g();
    var placeables = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var measureHelper = new RowColumnMeasurementHelper(this.j97_1, this.k97_1, this.l97_1, this.m97_1, this.n97_1, measurables, placeables);
    var orientationIndependentConstraints = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, this.j97_1);
    var flowResult = breakDownItems(_this__u8e3s4, measureHelper, this.j97_1, orientationIndependentConstraints, this.o97_1);
    var items = flowResult.o96_1;
    var tmp = 0;
    var tmp_0 = items.e23_1;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
      var tmp_3 = items.c23_1[tmp_2];
      tmp_1[tmp_2] = ((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE()).y96_1;
      tmp = tmp + 1 | 0;
    }
    var crossAxisSizes = tmp_1;
    var outPosition = new Int32Array(crossAxisSizes.length);
    var totalCrossAxisSize = flowResult.n96_1;
    var totalCrossAxisSpacing = imul(_this__u8e3s4.t35(this.p97_1), items.e23_1 - 1 | 0);
    totalCrossAxisSize = totalCrossAxisSize + totalCrossAxisSpacing | 0;
    this.q97_1(totalCrossAxisSize, crossAxisSizes, _this__u8e3s4.f4b(), _this__u8e3s4, outPosition);
    var layoutWidth;
    var layoutHeight;
    if (this.j97_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = flowResult.m96_1;
      layoutHeight = totalCrossAxisSize;
    } else {
      layoutWidth = totalCrossAxisSize;
      layoutHeight = flowResult.m96_1;
    }
    layoutWidth = constrainWidth(constraints, layoutWidth);
    layoutHeight = constrainHeight(constraints, layoutHeight);
    var tmp_4 = layoutWidth;
    var tmp_5 = layoutHeight;
    return _this__u8e3s4.d5i(tmp_4, tmp_5, VOID, flowMeasurePolicy$o$measure$lambda_0(flowResult, measureHelper, outPosition, _this__u8e3s4));
  };
  protoOf(flowMeasurePolicy$1).f6w = function (_this__u8e3s4, measurables, height) {
    var tmp;
    if (this.j97_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = this.s97(measurables, height, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    } else {
      tmp = this.r97(measurables, height, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    }
    return tmp;
  };
  protoOf(flowMeasurePolicy$1).g6w = function (_this__u8e3s4, measurables, width) {
    var tmp;
    if (this.j97_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = this.r97(measurables, width, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    } else {
      tmp = this.s97(measurables, width, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    }
    return tmp;
  };
  protoOf(flowMeasurePolicy$1).i6w = function (_this__u8e3s4, measurables, width) {
    var tmp;
    if (this.j97_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = this.r97(measurables, width, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    } else {
      tmp = this.t97(measurables, width, _this__u8e3s4.t35(this.l97_1));
    }
    return tmp;
  };
  protoOf(flowMeasurePolicy$1).h6w = function (_this__u8e3s4, measurables, height) {
    var tmp;
    if (this.j97_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = this.t97(measurables, height, _this__u8e3s4.t35(this.l97_1));
    } else {
      tmp = this.r97(measurables, height, _this__u8e3s4.t35(this.l97_1), _this__u8e3s4.t35(this.p97_1));
    }
    return tmp;
  };
  protoOf(flowMeasurePolicy$1).s97 = function (measurables, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing) {
    return minIntrinsicMainAxisSize(measurables, this.i97_1, this.h97_1, crossAxisAvailable, mainAxisSpacing, crossAxisSpacing, this.o97_1);
  };
  protoOf(flowMeasurePolicy$1).t97 = function (measurables, height, arrangementSpacing) {
    return maxIntrinsicMainAxisSize(measurables, this.f97_1, height, arrangementSpacing, this.o97_1);
  };
  protoOf(flowMeasurePolicy$1).r97 = function (measurables, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing) {
    return intrinsicCrossAxisSize(measurables, this.i97_1, this.h97_1, mainAxisAvailable, mainAxisSpacing, crossAxisSpacing, this.o97_1);
  };
  function getHorizontalArrangement$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.h93(density, totalSize, size, layoutDirection, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function getVerticalArrangement$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.i93(density, totalSize, size, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function breakDownItems$lambda($placeables) {
    return function (placeable) {
      $placeables[0] = placeable;
      return Unit_getInstance();
    };
  }
  function breakDownItems$lambda_0($placeables, $index) {
    return function (placeable) {
      $placeables[$index + 1 | 0] = placeable;
      return Unit_getInstance();
    };
  }
  function intrinsicCrossAxisSize$lambda($mainAxisSizes) {
    return function ($this$intrinsicCrossAxisSize, index, _anonymous_parameter_1__qggqgd) {
      return $mainAxisSizes[index];
    };
  }
  function intrinsicCrossAxisSize$lambda_0($crossAxisSizes) {
    return function ($this$intrinsicCrossAxisSize, index, _anonymous_parameter_1__qggqgd) {
      return $crossAxisSizes[index];
    };
  }
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_8().u97(Companion_getInstance_2().x5e_1);
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_8().j96(Companion_getInstance_2().a5f_1);
    }
  }
  function width(_this__u8e3s4, intrinsicSize) {
    var tmp;
    switch (intrinsicSize.h7_1) {
      case 0:
        tmp = _this__u8e3s4.n5f(MinIntrinsicWidthModifier_getInstance());
        break;
      case 1:
        tmp = _this__u8e3s4.n5f(MaxIntrinsicWidthModifier_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var IntrinsicSize_Min_instance;
  var IntrinsicSize_Max_instance;
  var IntrinsicSize_entriesInitialized;
  function IntrinsicSize_initEntries() {
    if (IntrinsicSize_entriesInitialized)
      return Unit_getInstance();
    IntrinsicSize_entriesInitialized = true;
    IntrinsicSize_Min_instance = new IntrinsicSize('Min', 0);
    IntrinsicSize_Max_instance = new IntrinsicSize('Max', 1);
  }
  function IntrinsicSize(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MinIntrinsicWidthModifier() {
    MinIntrinsicWidthModifier_instance = this;
  }
  protoOf(MinIntrinsicWidthModifier).v97 = function (_this__u8e3s4, measurable, constraints) {
    var width = measurable.q5n(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return Companion_getInstance_4().o35(width);
  };
  protoOf(MinIntrinsicWidthModifier).g5i = function (_this__u8e3s4, measurable, height) {
    return measurable.q5n(height);
  };
  var MinIntrinsicWidthModifier_instance;
  function MinIntrinsicWidthModifier_getInstance() {
    if (MinIntrinsicWidthModifier_instance == null)
      new MinIntrinsicWidthModifier();
    return MinIntrinsicWidthModifier_instance;
  }
  function MaxIntrinsicWidthModifier() {
    MaxIntrinsicWidthModifier_instance = this;
  }
  protoOf(MaxIntrinsicWidthModifier).v97 = function (_this__u8e3s4, measurable, constraints) {
    var width = measurable.r5n(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return Companion_getInstance_4().o35(width);
  };
  protoOf(MaxIntrinsicWidthModifier).e5i = function (_this__u8e3s4, measurable, height) {
    return measurable.r5n(height);
  };
  var MaxIntrinsicWidthModifier_instance;
  function MaxIntrinsicWidthModifier_getInstance() {
    if (MaxIntrinsicWidthModifier_instance == null)
      new MaxIntrinsicWidthModifier();
    return MaxIntrinsicWidthModifier_instance;
  }
  function IntrinsicSizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.d6y($placeable, Companion_getInstance_7().q36_1);
      return Unit_getInstance();
    };
  }
  function IntrinsicSizeModifier() {
  }
  function IntrinsicSize_Max_getInstance() {
    IntrinsicSize_initEntries();
    return IntrinsicSize_Max_instance;
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.n5f(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function padding_0(_this__u8e3s4, all) {
    return _this__u8e3s4.n5f(new PaddingElement(all, all, all, all, true, padding$lambda_0(all)));
  }
  function padding_1(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.n5f(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_1(horizontal, vertical)));
  }
  function PaddingValues(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_1(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.z97_1 = start;
    this.a98_1 = top;
    this.b98_1 = end;
    this.c98_1 = bottom;
    this.d98_1 = rtlAware;
    this.e98_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((((_Dp___get_value__impl__geb1vb(this.z97_1) >= 0.0 ? true : equals(this.z97_1, Companion_getInstance().i36_1)) ? _Dp___get_value__impl__geb1vb(this.a98_1) >= 0.0 ? true : equals(this.a98_1, Companion_getInstance().i36_1) : false) ? _Dp___get_value__impl__geb1vb(this.b98_1) >= 0.0 ? true : equals(this.b98_1, Companion_getInstance().i36_1) : false) ? _Dp___get_value__impl__geb1vb(this.c98_1) >= 0.0 ? true : equals(this.c98_1, Companion_getInstance().i36_1) : false)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).x29 = function () {
    return new PaddingNode(this.z97_1, this.a98_1, this.b98_1, this.c98_1, this.d98_1);
  };
  protoOf(PaddingElement).f98 = function (node) {
    node.u98_1 = this.z97_1;
    node.v98_1 = this.a98_1;
    node.w98_1 = this.b98_1;
    node.x98_1 = this.c98_1;
    node.y98_1 = this.d98_1;
  };
  protoOf(PaddingElement).s5h = function (node) {
    return this.f98(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.z97_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.a98_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.b98_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.c98_1) | 0;
    result = imul(31, result) + (this.d98_1 | 0) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return (((equals(this.z97_1, otherModifierElement.z97_1) ? equals(this.a98_1, otherModifierElement.a98_1) : false) ? equals(this.b98_1, otherModifierElement.b98_1) : false) ? equals(this.c98_1, otherModifierElement.c98_1) : false) ? this.d98_1 === otherModifierElement.d98_1 : false;
  };
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.z98_1 = start;
    this.a99_1 = top;
    this.b99_1 = end;
    this.c99_1 = bottom;
  }
  protoOf(PaddingValuesImpl).d99 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.z98_1 : this.b99_1;
  };
  protoOf(PaddingValuesImpl).e99 = function () {
    return this.a99_1;
  };
  protoOf(PaddingValuesImpl).f99 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.b99_1 : this.z98_1;
  };
  protoOf(PaddingValuesImpl).g99 = function () {
    return this.c99_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.z98_1, other.z98_1) ? equals(this.a99_1, other.a99_1) : false) ? equals(this.b99_1, other.b99_1) : false) ? equals(this.c99_1, other.c99_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.z98_1), 31) + Dp__hashCode_impl_sxkrra(this.a99_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.b99_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.c99_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.z98_1) + ', top=' + new Dp(this.a99_1) + ', end=' + new Dp(this.b99_1) + ', bottom=' + new Dp(this.c99_1) + ')';
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.y98_1) {
        $this$layout.p5n($placeable, $this_measure.t35(this$0.u98_1), $this_measure.t35(this$0.v98_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.f6y($placeable, $this_measure.t35(this$0.u98_1), $this_measure.t35(this$0.v98_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.u98_1 = start;
    this.v98_1 = top;
    this.w98_1 = end;
    this.x98_1 = bottom;
    this.y98_1 = rtlAware;
  }
  protoOf(PaddingNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.t35(this.u98_1) + _this__u8e3s4.t35(this.w98_1) | 0;
    var vertical = _this__u8e3s4.t35(this.v98_1) + _this__u8e3s4.t35(this.x98_1) | 0;
    var placeable = measurable.w5h(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.x5h_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.y5h_1 + vertical | 0);
    return _this__u8e3s4.d5i(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.f99(layoutDirection);
    } else {
      tmp = _this__u8e3s4.d99(layoutDirection);
    }
    return tmp;
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.d99(layoutDirection);
    } else {
      tmp = _this__u8e3s4.f99(layoutDirection);
    }
    return tmp;
  }
  function padding_2(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.n5f(new PaddingValuesElement(paddingValues, padding$lambda_2(paddingValues)));
  }
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.j99_1 = paddingValues;
    this.k99_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).x29 = function () {
    return new PaddingValuesModifier(this.j99_1);
  };
  protoOf(PaddingValuesElement).l99 = function (node) {
    node.a9a_1 = this.j99_1;
  };
  protoOf(PaddingValuesElement).s5h = function (node) {
    return this.l99(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.j99_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.j99_1, otherElement.j99_1);
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.f6y($placeable, $this_measure.t35(this$0.a9a_1.d99($this_measure.f4b())), $this_measure.t35(this$0.a9a_1.e99()));
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.a9a_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).v5h = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.a9a_1.d99(_this__u8e3s4.f4b());
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.a9a_1.e99();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.a9a_1.f99(_this__u8e3s4.f4b());
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.a9a_1.g99();
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.t35(this.a9a_1.d99(_this__u8e3s4.f4b())) + _this__u8e3s4.t35(this.a9a_1.f99(_this__u8e3s4.f4b())) | 0;
    var vertical = _this__u8e3s4.t35(this.a9a_1.e99()) + _this__u8e3s4.t35(this.a9a_1.g99()) | 0;
    var placeable = measurable.w5h(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.x5h_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.y5h_1 + vertical | 0);
    return _this__u8e3s4.d5i(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.u5n_1 = 'padding';
      $this$$receiver.w5n_1.a5o('start', new Dp($start));
      $this$$receiver.w5n_1.a5o('top', new Dp($top));
      $this$$receiver.w5n_1.a5o('end', new Dp($end));
      $this$$receiver.w5n_1.a5o('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$$receiver) {
      $this$$receiver.u5n_1 = 'padding';
      $this$$receiver.v5n_1 = new Dp($all);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.u5n_1 = 'padding';
      $this$$receiver.w5n_1.a5o('horizontal', new Dp($horizontal));
      $this$$receiver.w5n_1.a5o('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.u5n_1 = 'padding';
      $this$$receiver.w5n_1.a5o('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function RowScope() {
  }
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    $composer_0.m1r(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)107@4916L639:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:101)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().n93_1) ? equals(verticalAlignment, Companion_getInstance_2().x5e_1) : false) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.m1r(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.y1t(horizontalArrangement) | $composer_1.y1t(verticalAlignment));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.w1t();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_6().y1s_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.g93();
        var tmp2_crossAxisAlignment = Companion_getInstance_8().u97(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.x1t(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.o1r();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
    return tmp0_0;
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  protoOf(RowScopeInstance).d96 = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.n5f(new LayoutWeightElement(weight, fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    _init_properties_Row_kt__jenljs();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().n93_1.h93(density, totalSize, size, layoutDirection, outPosition);
    return Unit_getInstance();
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.h93(density, totalSize, size, layoutDirection, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().n93_1.g93();
      var tmp2_crossAxisAlignment = Companion_getInstance_8().u97(Companion_getInstance_2().x5e_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    this.g96_1 = CenterCrossAxisAlignment_getInstance();
    this.h96_1 = StartCrossAxisAlignment_getInstance();
    this.i96_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).u97 = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).j96 = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).b9a = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).b9a = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).b9a = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.e9a_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).b9a = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.e9a_1.i5f(0, size);
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.f9a_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).b9a = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.f9a_1.f5f(0, size, layoutDirection);
  };
  function CrossAxisAlignment() {
    Companion_getInstance_8();
  }
  protoOf(CrossAxisAlignment).c9a = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).d9a = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment);
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().g9a_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().h9a_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().i9a_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().j9a_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().k9a_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().l9a_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().m9a_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().n9a_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.q5n(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.q5n(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.s5n(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.s5n(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.t5n(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.r5n(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.g9a_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.h9a_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.i9a_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.j9a_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.k9a_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.l9a_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.m9a_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.n9a_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize_1(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.m(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = weightUnitSpace;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = size / weight;
          var tmp2_max = roundToInt(tmp0_roundToInt);
          weightUnitSpace = Math.max(tmp1_max, tmp2_max);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt_0 = weightUnitSpace * totalWeight;
    return (roundToInt(tmp0_roundToInt_0) + fixedSpace | 0) + imul(children.g() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize_1(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    // Inline function 'kotlin.math.min' call
    var tmp0_min = imul(children.g() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(tmp0_min, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.g() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.m(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        if (weight === 0.0) {
          // Inline function 'kotlin.math.min' call
          Companion_getInstance_4();
          var tmp0_min_0 = mainAxisSize(item, 2147483647);
          var tmp1_min = mainAxisAvailable - fixedSpace | 0;
          var mainAxisSpace = Math.min(tmp0_min_0, tmp1_min);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisMax;
          var tmp3_max = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(tmp2_max, tmp3_max);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else {
      Companion_getInstance_4();
      if (mainAxisAvailable === 2147483647) {
        Companion_getInstance_4();
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        // Inline function 'kotlin.math.max' call
        var tmp1_max = mainAxisAvailable - fixedSpace | 0;
        var tmp2_roundToInt = Math.max(tmp1_max, 0) / totalWeight;
        tmp = roundToInt(tmp2_roundToInt);
      }
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.g() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.m(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData(item_0));
        if (weight_0 > 0.0) {
          // Inline function 'kotlin.math.max' call
          var tmp1_max_0 = crossAxisMax;
          var tmp_0;
          Companion_getInstance_4();
          if (!(weightUnitSpace === 2147483647)) {
            // Inline function 'kotlin.math.roundToInt' call
            var tmp0_roundToInt = weightUnitSpace * weight_0;
            tmp_0 = roundToInt(tmp0_roundToInt);
          } else {
            Companion_getInstance_4();
            tmp_0 = 2147483647;
          }
          var tmp2_max_0 = crossAxisSize(item_0, tmp_0);
          crossAxisMax = Math.max(tmp1_max_0, tmp2_max_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.o9a_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.o9a_1 = weight;
    this.p9a_1 = fill;
    this.q9a_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.o9a_1 + ', fill=' + this.p9a_1 + ', crossAxisAlignment=' + this.q9a_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.o9a_1);
    result = imul(result, 31) + (this.p9a_1 | 0) | 0;
    result = imul(result, 31) + (this.q9a_1 == null ? 0 : hashCode(this.q9a_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.o9a_1, tmp0_other_with_cast.o9a_1))
      return false;
    if (!(this.p9a_1 === tmp0_other_with_cast.p9a_1))
      return false;
    if (!equals(this.q9a_1, tmp0_other_with_cast.q9a_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.r6r();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf(Constraints_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_1(c, orientation) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
  }
  function OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      var tmp$ret$3;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp_4 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      var tmp$ret$7;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp$ret$7 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_3, tmp_4, tmp_5, tmp$ret$7);
    }
    return tmp;
  }
  function OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  }
  function OrientationIndependentConstraints__copy$default_impl_4x4eq9($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    var tmp;
    if (mainAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      tmp = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
    } else {
      tmp = mainAxisMin;
    }
    mainAxisMin = tmp;
    var tmp_0;
    if (mainAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    } else {
      tmp_0 = mainAxisMax;
    }
    mainAxisMax = tmp_0;
    var tmp_1;
    if (crossAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
    } else {
      tmp_1 = crossAxisMin;
    }
    crossAxisMin = tmp_1;
    var tmp_2;
    if (crossAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      tmp_2 = crossAxisMax;
    }
    crossAxisMax = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      tmp_3 = OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      var tmp_4 = new OrientationIndependentConstraints($this);
      var tmp_5 = $super;
      tmp_3 = (tmp_5 == null ? null : new OrientationIndependentConstraints(tmp_5)).s9a.call(tmp_4, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax).r9a_1;
    }
    return tmp_3;
  }
  function OrientationIndependentConstraints__toString_impl_h1z0yz($this) {
    return 'OrientationIndependentConstraints(value=' + new Constraints($this) + ')';
  }
  function OrientationIndependentConstraints__hashCode_impl_w7z47a($this) {
    return Constraints__hashCode_impl_ij7484($this);
  }
  function OrientationIndependentConstraints__equals_impl_b6og0u($this, other) {
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other.r9a_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function OrientationIndependentConstraints(value) {
    this.r9a_1 = value;
  }
  protoOf(OrientationIndependentConstraints).toString = function () {
    return OrientationIndependentConstraints__toString_impl_h1z0yz(this.r9a_1);
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    return OrientationIndependentConstraints__hashCode_impl_w7z47a(this.r9a_1);
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    return OrientationIndependentConstraints__equals_impl_b6og0u(this.r9a_1, other);
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c9a();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.p9a_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.q9a_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.v9a_1 = weight;
    this.w9a_1 = fill;
  }
  protoOf(LayoutWeightElement).x29 = function () {
    return new LayoutWeightNode(this.v9a_1, this.w9a_1);
  };
  protoOf(LayoutWeightElement).x9a = function (node) {
    node.m9b_1 = this.v9a_1;
    node.n9b_1 = this.w9a_1;
  };
  protoOf(LayoutWeightElement).s5h = function (node) {
    return this.x9a(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.v9a_1);
    result = imul(31, result) + (this.w9a_1 | 0) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.v9a_1 === otherModifier.v9a_1 ? this.w9a_1 === otherModifier.w9a_1 : false;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.q9b_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).x29 = function () {
    return new HorizontalAlignNode(this.q9b_1);
  };
  protoOf(HorizontalAlignElement).r9b = function (node) {
    node.g9c_1 = this.q9b_1;
  };
  protoOf(HorizontalAlignElement).s5h = function (node) {
    return this.r9b(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.q9b_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.q9b_1, otherModifier.q9b_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.m9b_1 = weight;
    this.n9b_1 = fill;
  }
  protoOf(LayoutWeightNode).b6u = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    tmp0_also.o9a_1 = this.m9b_1;
    tmp0_also.p9a_1 = this.n9b_1;
    return tmp0_also;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.g9c_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).b6u = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    tmp0_also.q9a_1 = Companion_getInstance_8().j96(this.g9c_1);
    return tmp0_also;
  };
  function rowColumnMeasurePolicy$o$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.e97($this$layout, $measureResult, 0, $this_measure.f4b());
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangement, $arrangementSpacing, $crossAxisSize, $crossAxisAlignment) {
    this.h9c_1 = $orientation;
    this.i9c_1 = $arrangement;
    this.j9c_1 = $arrangementSpacing;
    this.k9c_1 = $crossAxisSize;
    this.l9c_1 = $crossAxisAlignment;
  }
  protoOf(rowColumnMeasurePolicy$1).e6w = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.g();
    var placeables = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.h9c_1, this.i9c_1, this.j9c_1, this.k9c_1, this.l9c_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.x96(_this__u8e3s4, constraints, 0, measurables.g());
    var layoutWidth;
    var layoutHeight;
    if (this.h9c_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.z96_1;
      layoutHeight = measureResult.y96_1;
    } else {
      layoutWidth = measureResult.y96_1;
      layoutHeight = measureResult.z96_1;
    }
    return _this__u8e3s4.d5i(layoutWidth, layoutHeight, VOID, rowColumnMeasurePolicy$o$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  protoOf(rowColumnMeasurePolicy$1).f6w = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.h9c_1)(measurables, height, _this__u8e3s4.t35(this.j9c_1));
  };
  protoOf(rowColumnMeasurePolicy$1).g6w = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.h9c_1)(measurables, width, _this__u8e3s4.t35(this.j9c_1));
  };
  protoOf(rowColumnMeasurePolicy$1).h6w = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.h9c_1)(measurables, height, _this__u8e3s4.t35(this.j9c_1));
  };
  protoOf(rowColumnMeasurePolicy$1).i6w = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.h9c_1)(measurables, width, _this__u8e3s4.t35(this.j9c_1));
  };
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    $this.q96_1(mainAxisLayoutSize, childrenMainAxisSize, measureScope.f4b(), measureScope, mainAxisPositions);
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp1_elvis_lhs = parentData == null ? null : parentData.q9a_1;
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.t96_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.m9c(placeable) | 0;
    var tmp_0;
    if ($this.p96_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.b9a(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.p96_1 = orientation;
    this.q96_1 = arrangement;
    this.r96_1 = arrangementSpacing;
    this.s96_1 = crossAxisSize;
    this.t96_1 = crossAxisAlignment;
    this.u96_1 = measurables;
    this.v96_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.u96_1.g();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = get_rowColumnParentData(this.u96_1.m(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w96_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).n9c = function (_this__u8e3s4) {
    return this.p96_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.x5h_1 : _this__u8e3s4.y5h_1;
  };
  protoOf(RowColumnMeasurementHelper).m9c = function (_this__u8e3s4) {
    return this.p96_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.y5h_1 : _this__u8e3s4.x5h_1;
  };
  protoOf(RowColumnMeasurementHelper).x96 = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, this.p96_1);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    var arrangementSpacingPx = toLong(measureScope.t35(this.r96_1));
    var totalWeight = 0.0;
    var fixedSpace = new Long(0, 0);
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = this.u96_1.m(i);
        var parentData = this.w96_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
          var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
          var tmp1_elvis_lhs = this.v96_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            Companion_getInstance_4();
            if (mainAxisMax === 2147483647) {
              Companion_getInstance_4();
              tmp_0 = 2147483647;
            } else {
              tmp_0 = coerceAtLeast(numberToLong(mainAxisMax).m9(fixedSpace), new Long(0, 0)).f1();
            }
            tmp = child.w5h(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(constraints_0, 0, tmp_0, 0), this.p96_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          // Inline function 'kotlin.math.min' call
          var tmp2_min = arrangementSpacingPx.f1();
          var tmp$ret$3;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = numberToLong(mainAxisMax).m9(fixedSpace);
          var tmp1_minus = this.n9c(placeable);
          tmp$ret$3 = tmp0_minus.m9(toLong(tmp1_minus));
          var tmp3_min = coerceAtLeast(tmp$ret$3, new Long(0, 0)).f1();
          spaceAfterLastNoWeight = Math.min(tmp2_min, tmp3_min);
          // Inline function 'kotlin.Long.plus' call
          var tmp4_plus = fixedSpace;
          var tmp5_plus = this.n9c(placeable) + spaceAfterLastNoWeight | 0;
          fixedSpace = tmp4_plus.r7(toLong(tmp5_plus));
          // Inline function 'kotlin.math.max' call
          var tmp6_max = crossAxisSpace;
          var tmp7_max = this.m9c(placeable);
          crossAxisSpace = Math.max(tmp6_max, tmp7_max);
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.v96_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      // Inline function 'kotlin.Long.minus' call
      var tmp8_minus = fixedSpace;
      var tmp9_minus = spaceAfterLastNoWeight;
      fixedSpace = tmp8_minus.m9(toLong(tmp9_minus));
    } else {
      var tmp_1;
      var tmp_2;
      if (totalWeight > 0.0) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        var tmp_3 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
        Companion_getInstance_4();
        tmp_2 = !(tmp_3 === 2147483647);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      } else {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
        tmp_1 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
      }
      var targetSpace = tmp_1;
      // Inline function 'kotlin.Long.times' call
      var tmp10_times = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.l9(toLong(tmp10_times));
      var remainingToTarget = coerceAtLeast(numberToLong(targetSpace).m9(fixedSpace).m9(arrangementSpacingTotal), new Long(0, 0));
      var tmp_4;
      if (totalWeight > 0) {
        // Inline function 'kotlin.Long.div' call
        var tmp11_div = totalWeight;
        tmp_4 = remainingToTarget.vk() / tmp11_div;
      } else {
        tmp_4 = 0.0;
      }
      var weightUnitSpace = tmp_4;
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.collections.sumOf' call
      var tmp12_sumOf = until(startIndex, endIndex);
      var sum = 0;
      var inductionVariable_0 = tmp12_sumOf.y_1;
      var last = tmp12_sumOf.z_1;
      if (inductionVariable_0 <= last)
        do {
          var element = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_5 = sum;
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = weightUnitSpace * get_weight(this.w96_1[element]);
          sum = tmp_5 + roundToInt(tmp0_roundToInt) | 0;
        }
         while (!(element === last));
      var tmp13_minus = sum;
      var remainder = remainingToTarget.m9(toLong(tmp13_minus));
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (this.v96_1[i_0] == null) {
            var child_0 = this.u96_1.m(i_0);
            var parentData_0 = this.w96_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.m9(toLong(remainderUnit));
            // Inline function 'kotlin.math.max' call
            // Inline function 'kotlin.math.roundToInt' call
            var tmp16_roundToInt = weightUnitSpace * weight_0;
            var tmp17_max = roundToInt(tmp16_roundToInt) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, tmp17_max);
            var tmp_6;
            var tmp_7;
            if (get_fill(parentData_0)) {
              Companion_getInstance_4();
              tmp_7 = !(childMainAxisSize === 2147483647);
            } else {
              tmp_7 = false;
            }
            if (tmp_7) {
              tmp_6 = childMainAxisSize;
            } else {
              tmp_6 = 0;
            }
            var tmp_8 = tmp_6;
            var tmp$ret$21;
            // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
            tmp$ret$21 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
            var placeable_0 = child_0.w5h(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(_OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp_8, childMainAxisSize, 0, tmp$ret$21), this.p96_1));
            weightedSpace = weightedSpace + this.n9c(placeable_0) | 0;
            // Inline function 'kotlin.math.max' call
            var tmp18_max = crossAxisSpace;
            var tmp19_max = this.m9c(placeable_0);
            crossAxisSpace = Math.max(tmp18_max, tmp19_max);
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.v96_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp_9 = numberToLong(weightedSpace).r7(arrangementSpacingTotal);
      var tmp_10 = new Long(0, 0);
      var tmp$ret$23;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp$ret$23 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      weightedSpace = coerceIn_0(tmp_9, tmp_10, numberToLong(tmp$ret$23).m9(fixedSpace)).f1();
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(this.v96_1[i_1]);
          var parentData_1 = this.w96_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.d9a(placeable_1);
          if (!(alignmentLinePosition == null)) {
            // Inline function 'kotlin.math.max' call
            var tmp20_max = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_11;
            Companion_getInstance_1();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = 0;
            }
            var tmp21_max = tmp_11;
            beforeCrossAxisAlignmentLine = Math.max(tmp20_max, tmp21_max);
            // Inline function 'kotlin.math.max' call
            var tmp22_max = afterCrossAxisAlignmentLine;
            var tmp_12 = this.m9c(placeable_1);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_13;
            Companion_getInstance_1();
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_13 = alignmentLinePosition;
            } else {
              tmp_13 = this.m9c(placeable_1);
            }
            var tmp23_max = tmp_12 - tmp_13 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp22_max, tmp23_max);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var tmp$ret$30;
    // Inline function 'kotlin.Long.plus' call
    var tmp24_plus = fixedSpace;
    var tmp25_plus = weightedSpace;
    tmp$ret$30 = tmp24_plus.r7(toLong(tmp25_plus));
    var tmp26_max = coerceAtLeast(tmp$ret$30, new Long(0, 0)).f1();
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp27_max = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
    var mainAxisLayoutSize = Math.max(tmp26_max, tmp27_max);
    var tmp_14;
    var tmp_15;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    var tmp_16 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    Companion_getInstance_4();
    if (!(tmp_16 === 2147483647)) {
      tmp_15 = this.s96_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_14 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp30_max = crossAxisSpace;
      // Inline function 'kotlin.math.max' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp28_max = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40(constraints_0));
      var tmp29_max = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      var tmp31_max = Math.max(tmp28_max, tmp29_max);
      tmp_14 = Math.max(tmp30_max, tmp31_max);
    }
    var crossAxisLayoutSize = tmp_14;
    var tmp_17 = 0;
    var tmp_18 = new Int32Array(subSize);
    while (tmp_17 < subSize) {
      tmp_18[tmp_17] = 0;
      tmp_17 = tmp_17 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_18;
    var tmp_19 = 0;
    var tmp_20 = new Int32Array(subSize);
    while (tmp_19 < subSize) {
      var tmp_21 = tmp_19;
      tmp_20[tmp_21] = this.n9c(ensureNotNull(this.v96_1[tmp_21 + startIndex | 0]));
      tmp_19 = tmp_19 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_20;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).e97 = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.a97_1;
    var last = measureResult.b97_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.v96_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.d97_1;
        var tmp_0 = this.u96_1.m(i).r6r();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.y96_1, layoutDirection, measureResult.c97_1) + crossAxisOffset | 0;
        if (this.p96_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.f6y(placeable, mainAxisPositions[i - measureResult.a97_1 | 0], crossAxisPosition);
        } else {
          placeableScope.f6y(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.a97_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_getInstance();
    }
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.y96_1 = crossAxisSize;
    this.z96_1 = mainAxisSize;
    this.a97_1 = startIndex;
    this.b97_1 = endIndex;
    this.c97_1 = beforeCrossAxisAlignmentLine;
    this.d97_1 = mainAxisPositions;
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).o9c = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).p9c = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).q9c = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_9();
    ModifierNodeElement.call(this);
    this.t9c_1 = direction;
    this.u9c_1 = fraction;
    this.v9c_1 = inspectorName;
  }
  protoOf(FillElement).x29 = function () {
    return new FillNode(this.t9c_1, this.u9c_1);
  };
  protoOf(FillElement).w9c = function (node) {
    node.l9d_1 = this.t9c_1;
    node.m9d_1 = this.u9c_1;
  };
  protoOf(FillElement).s5h = function (node) {
    return this.w9c(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.t9c_1.equals(other.t9c_1))
      return false;
    if (!(this.u9c_1 === other.u9c_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.t9c_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.u9c_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.f5f(0, _IntSize___get_width__impl__d9yl4o(size.a37_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.i5f(0, _IntSize___get_height__impl__prv63b(size.a37_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.m5f(Companion_getInstance_3().z36_1, size.a37_1, layoutDirection));
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).n9d = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).o9d = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).p9d = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_10();
    ModifierNodeElement.call(this);
    this.s9d_1 = direction;
    this.t9d_1 = unbounded;
    this.u9d_1 = alignmentCallback;
    this.v9d_1 = align;
    this.w9d_1 = inspectorName;
  }
  protoOf(WrapContentElement).x29 = function () {
    return new WrapContentNode(this.s9d_1, this.t9d_1, this.u9d_1);
  };
  protoOf(WrapContentElement).x9d = function (node) {
    node.m9e_1 = this.s9d_1;
    node.n9e_1 = this.t9d_1;
    node.o9e_1 = this.u9d_1;
  };
  protoOf(WrapContentElement).s5h = function (node) {
    return this.x9d(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.s9d_1.equals(other.s9d_1))
      return false;
    if (!(this.t9d_1 === other.t9d_1))
      return false;
    if (!equals(this.v9d_1, other.v9d_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.s9d_1.hashCode();
    result = imul(31, result) + (this.t9d_1 | 0) | 0;
    result = imul(31, result) + hashCode(this.v9d_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.p5n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.l9d_1 = direction;
    this.m9d_1 = fraction;
  }
  protoOf(FillNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.l9d_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.m9d_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.l9d_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.m9d_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.w5h(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.x5h_1;
    var tmp_0 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.o9e_1(new IntSize_0(IntSize($wrapperWidth - $placeable.x5h_1 | 0, $wrapperHeight - $placeable.y5h_1 | 0)), $this_measure.f4b()).o36_1;
      $this$layout.g6y($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.m9e_1 = direction;
    this.n9e_1 = unbounded;
    this.o9e_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.m9e_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.m9e_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.m9e_1.equals(Direction_Vertical_getInstance()) ? this.n9e_1 : false) {
      Companion_getInstance_4();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.m9e_1.equals(Direction_Horizontal_getInstance()) ? this.n9e_1 : false) {
      Companion_getInstance_4();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.w5h(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.x5h_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.y5h_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.d5i(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function width_0(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.n5f(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_getInstance_9().p9c(fraction));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.n5f(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance().i36_1 : min;
    max = max === VOID ? Companion_getInstance().i36_1 : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance().i36_1 : min;
    max = max === VOID ? Companion_getInstance().i36_1 : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new SizeElement(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.n5f(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.n5f(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_getInstance_9().q9c(fraction));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.n5f(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_getInstance_9().o9c(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_2().y5e_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_2().y5e_1) ? !unbounded : false) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance_2().x5e_1) ? !unbounded : false) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_getInstance_10().o9d(align, unbounded);
    }
    return _this__u8e3s4.n5f(tmp);
  }
  function wrapContentSize(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_2().s5e_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_2().s5e_1) ? !unbounded : false) {
      tmp = get_WrapContentSizeCenter();
    } else if (equals(align, Companion_getInstance_2().o5e_1) ? !unbounded : false) {
      tmp = get_WrapContentSizeTopStart();
    } else {
      tmp = Companion_getInstance_10().p9d(align, unbounded);
    }
    return _this__u8e3s4.n5f(tmp);
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance().i36_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance().i36_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.r9e_1 = minWidth;
    this.s9e_1 = minHeight;
    this.t9e_1 = maxWidth;
    this.u9e_1 = maxHeight;
    this.v9e_1 = enforceIncoming;
    this.w9e_1 = inspectorInfo;
  }
  protoOf(SizeElement).x29 = function () {
    return new SizeNode(this.r9e_1, this.s9e_1, this.t9e_1, this.u9e_1, this.v9e_1);
  };
  protoOf(SizeElement).x9e = function (node) {
    node.m9f_1 = this.r9e_1;
    node.n9f_1 = this.s9e_1;
    node.o9f_1 = this.t9e_1;
    node.p9f_1 = this.u9e_1;
    node.q9f_1 = this.v9e_1;
  };
  protoOf(SizeElement).s5h = function (node) {
    return this.x9e(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.r9e_1, other.r9e_1))
      return false;
    if (!equals(this.s9e_1, other.s9e_1))
      return false;
    if (!equals(this.t9e_1, other.t9e_1))
      return false;
    if (!equals(this.u9e_1, other.u9e_1))
      return false;
    if (!(this.v9e_1 === other.v9e_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.r9e_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.s9e_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.t9e_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.u9e_1) | 0;
    result = imul(31, result) + (this.v9e_1 | 0) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    ModifierNodeElement.call(this);
    this.t9f_1 = minWidth;
    this.u9f_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).x29 = function () {
    return new UnspecifiedConstraintsNode(this.t9f_1, this.u9f_1);
  };
  protoOf(UnspecifiedConstraintsElement).v9f = function (node) {
    node.k9g_1 = this.t9f_1;
    node.l9g_1 = this.u9f_1;
  };
  protoOf(UnspecifiedConstraintsElement).s5h = function (node) {
    return this.v9f(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.t9f_1, other.t9f_1) ? equals(this.u9f_1, other.u9f_1) : false;
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.t9f_1), 31) + Dp__hashCode_impl_sxkrra(this.u9f_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.o9f_1, Companion_getInstance().i36_1)) {
      tmp = coerceAtLeast_0(_this__u8e3s4.t35($this.o9f_1), 0);
    } else {
      Companion_getInstance_4();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.p9f_1, Companion_getInstance().i36_1)) {
      tmp_0 = coerceAtLeast_0(_this__u8e3s4.t35($this.p9f_1), 0);
    } else {
      Companion_getInstance_4();
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.m9f_1, Companion_getInstance().i36_1)) {
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.t35($this.m9f_1), maxWidth), 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var tmp_2;
      Companion_getInstance_4();
      if (!(tmp0_let === 2147483647)) {
        tmp_2 = tmp0_let;
      } else {
        tmp_2 = 0;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_3;
    if (!equals($this.n9f_1, Companion_getInstance().i36_1)) {
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.t35($this.n9f_1), maxHeight), 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var tmp_4;
      Companion_getInstance_4();
      if (!(tmp1_let === 2147483647)) {
        tmp_4 = tmp1_let;
      } else {
        tmp_4 = 0;
      }
      tmp_3 = tmp_4;
    } else {
      tmp_3 = 0;
    }
    var minHeight = tmp_3;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.p5n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance().i36_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance().i36_1 : maxHeight;
    Node.call(this);
    this.m9f_1 = minWidth;
    this.n9f_1 = minHeight;
    this.o9f_1 = maxWidth;
    this.p9f_1 = maxHeight;
    this.q9f_1 = enforceIncoming;
  }
  protoOf(SizeNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var tmp;
    if (this.q9f_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.m9f_1, Companion_getInstance().i36_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.o9f_1, Companion_getInstance().i36_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.n9f_1, Companion_getInstance().i36_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.p9f_1, Companion_getInstance().i36_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(tmp0_let));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.w5h(wrappedConstraints);
    var tmp_4 = placeable.x5h_1;
    var tmp_5 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).e5i = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.q5n(height));
    }
    return tmp;
  };
  protoOf(SizeNode).f5i = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.s5n(width));
    }
    return tmp;
  };
  protoOf(SizeNode).g5i = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.r5n(height));
    }
    return tmp;
  };
  protoOf(SizeNode).h5i = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.t5n(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.p5n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    Node.call(this);
    this.k9g_1 = minWidth;
    this.l9g_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).v5h = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.k9g_1, Companion_getInstance().i36_1) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.t35(this.k9g_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.l9g_1, Companion_getInstance().i36_1) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.t35(this.l9g_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.w5h(wrappedConstraints);
    var tmp_3 = placeable.x5h_1;
    var tmp_4 = placeable.y5h_1;
    return _this__u8e3s4.d5i(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).e5i = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.q5n(height), !equals(this.k9g_1, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(this.k9g_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).g5i = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.r5n(height), !equals(this.k9g_1, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(this.k9g_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).f5i = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.s5n(width), !equals(this.l9g_1, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(this.l9g_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).h5i = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.t5n(width), !equals(this.l9g_1, Companion_getInstance().i36_1) ? _this__u8e3s4.t35(this.l9g_1) : 0);
  };
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.n5f(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function sizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().i36_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().i36_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance().i36_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance().i36_1 : maxHeight;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = sizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.n5f(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, true, tmp$ret$0));
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.u5n_1 = 'width';
      $this$null.v5n_1 = new Dp($width);
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.u5n_1 = 'size';
      $this$null.v5n_1 = new Dp($size);
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.u5n_1 = 'heightIn';
      $this$null.w5n_1.a5o('min', new Dp($min));
      $this$null.w5n_1.a5o('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.u5n_1 = 'widthIn';
      $this$null.w5n_1.a5o('min', new Dp($min));
      $this$null.w5n_1.a5o('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.u5n_1 = 'height';
      $this$null.v5n_1 = new Dp($height);
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.u5n_1 = 'size';
      $this$null.w5n_1.a5o('width', new Dp($width));
      $this$null.w5n_1.a5o('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function sizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function ($this$null) {
      $this$null.u5n_1 = 'sizeIn';
      $this$null.w5n_1.a5o('minWidth', new Dp($minWidth));
      $this$null.w5n_1.a5o('minHeight', new Dp($minHeight));
      $this$null.w5n_1.a5o('maxWidth', new Dp($maxWidth));
      $this$null.w5n_1.a5o('maxHeight', new Dp($maxHeight));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_9().o9c(1.0);
      FillWholeMaxHeight = Companion_getInstance_9().p9c(1.0);
      FillWholeMaxSize = Companion_getInstance_9().q9c(1.0);
      WrapContentWidthCenter = Companion_getInstance_10().n9d(Companion_getInstance_2().b5f_1, false);
      WrapContentWidthStart = Companion_getInstance_10().n9d(Companion_getInstance_2().a5f_1, false);
      WrapContentHeightCenter = Companion_getInstance_10().o9d(Companion_getInstance_2().y5e_1, false);
      WrapContentHeightTop = Companion_getInstance_10().o9d(Companion_getInstance_2().x5e_1, false);
      WrapContentSizeCenter = Companion_getInstance_10().p9d(Companion_getInstance_2().s5e_1, false);
      WrapContentSizeTopStart = Companion_getInstance_10().p9d(Companion_getInstance_2().o5e_1, false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1r(344887062);
    sourceInformation($composer_0, 'C(Spacer$composable)39@1433L68:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(344887062, $changed, -1, 'androidx.compose.foundation.layout.Spacer$composable (Spacer.kt:38)');
    }
    var tmp0_measurePolicy = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp1_Layout$composable = 384 | 112 & $changed << 3;
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    $composer_1.m1r(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_0 = Companion_getInstance_0();
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.f1u();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp0_ReusableComposeNode$composable = Companion_getInstance_5().s6s_1;
    var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
    var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.z1s();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.p1t();
    if ($composer_2.a1t()) {
      $composer_2.q1t(tmp0_ReusableComposeNode$composable);
    } else {
      $composer_2.r1t();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss(tmp4_anonymous, tmp0_measurePolicy, Companion_getInstance_5().x6s_1);
    Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_5().w6s_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var tmp0_set = Companion_getInstance_5().a6t_1;
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp0_with.a1t() ? true : !equals(tmp0_with.w1t(), compositeKeyHash)) {
      tmp0_with.x1t(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av(tmp4_anonymous).v1t(compositeKeyHash, tmp0_set);
      tmp_0 = Unit_getInstance();
    }
    tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
    $composer_2.m1r(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, 918629639, 'C:Spacer.kt#2w3rfo');
    sourceInformationMarkerEnd($composer_3);
    $composer_2.o1r();
    $composer_2.s1t();
    $composer_1.o1r();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.o1r();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  protoOf(SpacerMeasurePolicy).e6w = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.d5i(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  //region block: post-declaration
  protoOf(AlignmentLineOffsetDpElement).s5f = foldIn;
  protoOf(AlignmentLineOffsetDpElement).t5f = all;
  protoOf(AlignmentLineOffsetDpElement).n5f = then;
  protoOf(AlignmentLineOffsetDpNode).e5i = minIntrinsicWidth;
  protoOf(AlignmentLineOffsetDpNode).f5i = minIntrinsicHeight;
  protoOf(AlignmentLineOffsetDpNode).g5i = maxIntrinsicWidth;
  protoOf(AlignmentLineOffsetDpNode).h5i = maxIntrinsicHeight;
  protoOf(Arrangement$Start$1).g93 = get_spacing;
  protoOf(Arrangement$End$1).g93 = get_spacing;
  protoOf(Arrangement$Top$1).g93 = get_spacing_0;
  protoOf(Arrangement$Bottom$1).g93 = get_spacing_0;
  protoOf(AspectRatioElement).s5f = foldIn;
  protoOf(AspectRatioElement).t5f = all;
  protoOf(AspectRatioElement).n5f = then;
  protoOf(BoxChildDataElement).s5f = foldIn;
  protoOf(BoxChildDataElement).t5f = all;
  protoOf(BoxChildDataElement).n5f = then;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).f6w = minIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g6w = minIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h6w = maxIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i6w = maxIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).f6w = minIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).g6w = minIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).h6w = maxIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).i6w = maxIntrinsicHeight_0;
  protoOf(ColumnScopeInstance).e96 = weight$default;
  protoOf(FlowRowScopeInstance).l96 = weight$default_0;
  protoOf(MinIntrinsicWidthModifier).w97 = get_enforceIncoming;
  protoOf(MinIntrinsicWidthModifier).v5h = measure;
  protoOf(MinIntrinsicWidthModifier).e5i = minIntrinsicWidth_1;
  protoOf(MinIntrinsicWidthModifier).f5i = minIntrinsicHeight_1;
  protoOf(MinIntrinsicWidthModifier).h5i = maxIntrinsicHeight_1;
  protoOf(MinIntrinsicWidthModifier).s5f = foldIn;
  protoOf(MinIntrinsicWidthModifier).t5f = all;
  protoOf(MinIntrinsicWidthModifier).n5f = then;
  protoOf(MaxIntrinsicWidthModifier).w97 = get_enforceIncoming;
  protoOf(MaxIntrinsicWidthModifier).v5h = measure;
  protoOf(MaxIntrinsicWidthModifier).f5i = minIntrinsicHeight_1;
  protoOf(MaxIntrinsicWidthModifier).g5i = maxIntrinsicWidth_1;
  protoOf(MaxIntrinsicWidthModifier).h5i = maxIntrinsicHeight_1;
  protoOf(MaxIntrinsicWidthModifier).s5f = foldIn;
  protoOf(MaxIntrinsicWidthModifier).t5f = all;
  protoOf(MaxIntrinsicWidthModifier).n5f = then;
  protoOf(PaddingElement).s5f = foldIn;
  protoOf(PaddingElement).t5f = all;
  protoOf(PaddingElement).n5f = then;
  protoOf(PaddingNode).e5i = minIntrinsicWidth;
  protoOf(PaddingNode).f5i = minIntrinsicHeight;
  protoOf(PaddingNode).g5i = maxIntrinsicWidth;
  protoOf(PaddingNode).h5i = maxIntrinsicHeight;
  protoOf(PaddingValuesElement).s5f = foldIn;
  protoOf(PaddingValuesElement).t5f = all;
  protoOf(PaddingValuesElement).n5f = then;
  protoOf(PaddingValuesModifier).e5i = minIntrinsicWidth;
  protoOf(PaddingValuesModifier).f5i = minIntrinsicHeight;
  protoOf(PaddingValuesModifier).g5i = maxIntrinsicWidth;
  protoOf(PaddingValuesModifier).h5i = maxIntrinsicHeight;
  protoOf(RowScopeInstance).l96 = weight$default_0;
  protoOf(LayoutWeightElement).s5f = foldIn;
  protoOf(LayoutWeightElement).t5f = all;
  protoOf(LayoutWeightElement).n5f = then;
  protoOf(HorizontalAlignElement).s5f = foldIn;
  protoOf(HorizontalAlignElement).t5f = all;
  protoOf(HorizontalAlignElement).n5f = then;
  protoOf(FillElement).s5f = foldIn;
  protoOf(FillElement).t5f = all;
  protoOf(FillElement).n5f = then;
  protoOf(WrapContentElement).s5f = foldIn;
  protoOf(WrapContentElement).t5f = all;
  protoOf(WrapContentElement).n5f = then;
  protoOf(FillNode).e5i = minIntrinsicWidth;
  protoOf(FillNode).f5i = minIntrinsicHeight;
  protoOf(FillNode).g5i = maxIntrinsicWidth;
  protoOf(FillNode).h5i = maxIntrinsicHeight;
  protoOf(WrapContentNode).e5i = minIntrinsicWidth;
  protoOf(WrapContentNode).f5i = minIntrinsicHeight;
  protoOf(WrapContentNode).g5i = maxIntrinsicWidth;
  protoOf(WrapContentNode).h5i = maxIntrinsicHeight;
  protoOf(SizeElement).s5f = foldIn;
  protoOf(SizeElement).t5f = all;
  protoOf(SizeElement).n5f = then;
  protoOf(UnspecifiedConstraintsElement).s5f = foldIn;
  protoOf(UnspecifiedConstraintsElement).t5f = all;
  protoOf(UnspecifiedConstraintsElement).n5f = then;
  protoOf(SpacerMeasurePolicy).f6w = minIntrinsicWidth_0;
  protoOf(SpacerMeasurePolicy).g6w = minIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).h6w = maxIntrinsicWidth_0;
  protoOf(SpacerMeasurePolicy).i6w = maxIntrinsicHeight_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = PaddingValues_1;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = PaddingValues;
  _.$_$.e = Spacer$composable;
  _.$_$.f = aspectRatio;
  _.$_$.g = calculateEndPadding;
  _.$_$.h = calculateStartPadding;
  _.$_$.i = columnMeasurePolicy$composable;
  _.$_$.j = defaultMinSize;
  _.$_$.k = fillMaxHeight;
  _.$_$.l = fillMaxSize;
  _.$_$.m = fillMaxWidth;
  _.$_$.n = heightIn;
  _.$_$.o = height;
  _.$_$.p = paddingFromBaseline;
  _.$_$.q = padding_0;
  _.$_$.r = padding_2;
  _.$_$.s = padding;
  _.$_$.t = padding_1;
  _.$_$.u = rememberBoxMeasurePolicy$composable;
  _.$_$.v = rowMeasurePolicy$composable;
  _.$_$.w = rowMeasurementHelper$composable;
  _.$_$.x = sizeIn;
  _.$_$.y = size_0;
  _.$_$.z = size;
  _.$_$.a1 = widthIn;
  _.$_$.b1 = width;
  _.$_$.c1 = width_0;
  _.$_$.d1 = wrapContentHeight;
  _.$_$.e1 = wrapContentSize;
  _.$_$.f1 = IntrinsicSize_Max_getInstance;
  _.$_$.g1 = Arrangement_getInstance;
  _.$_$.h1 = BoxScopeInstance_getInstance;
  _.$_$.i1 = ColumnScopeInstance_getInstance;
  _.$_$.j1 = FlowRowScopeInstance_getInstance;
  _.$_$.k1 = RowScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-foundation-layout.js.map
