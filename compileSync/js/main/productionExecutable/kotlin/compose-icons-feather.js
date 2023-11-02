(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-graphics.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-icons-feather'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-icons-feather'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-icons-feather'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-icons-feather'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-icons-feather'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-icons-feather'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-icons-feather'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-icons-feather'.");
    }
    root['compose-icons-feather'] = factory(typeof this['compose-icons-feather'] === 'undefined' ? {} : this['compose-icons-feather'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-graphics']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.xd;
  var objectMeta = kotlin_kotlin.$_$.wd;
  var VOID = kotlin_kotlin.$_$.il;
  var setMetadataFor = kotlin_kotlin.$_$.yd;
  var ensureNotNull = kotlin_kotlin.$_$.jk;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Long = kotlin_kotlin.$_$.jj;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var get_DefaultPathName = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(FeatherIcons, 'FeatherIcons', objectMeta);
  //endregion
  var __AllIcons;
  function FeatherIcons() {
    FeatherIcons_instance = this;
    this.qj8_1 = 0;
  }
  var FeatherIcons_instance;
  function FeatherIcons_getInstance() {
    if (FeatherIcons_instance == null)
      new FeatherIcons();
    return FeatherIcons_instance;
  }
  var _activity;
  var _airplay;
  var _alertCircle;
  var _alertOctagon;
  var _alertTriangle;
  var _alignCenter;
  var _alignJustify;
  var _alignLeft;
  var _alignRight;
  var _anchor;
  var _aperture;
  var _archive;
  var _arrowDown;
  var _arrowDownCircle;
  var _arrowDownLeft;
  var _arrowDownRight;
  var _arrowLeft;
  var _arrowLeftCircle;
  var _arrowRight;
  var _arrowRightCircle;
  var _arrowUp;
  var _arrowUpCircle;
  var _arrowUpLeft;
  var _arrowUpRight;
  var _atSign;
  var _award;
  var _barChart;
  var _barChart2;
  var _battery;
  var _batteryCharging;
  var _bell;
  var _bellOff;
  var _bluetooth;
  var _bold;
  var _book;
  var _bookOpen;
  var _bookmark;
  var _box;
  var _briefcase;
  var _calendar;
  var _camera;
  var _cameraOff;
  var _cast;
  var _check;
  var _checkCircle;
  var _checkSquare;
  var _chevronDown;
  var _chevronLeft;
  var _chevronRight;
  var _chevronUp;
  var _chevronsDown;
  var _chevronsLeft;
  var _chevronsRight;
  var _chevronsUp;
  var _chrome;
  var _circle;
  var _clipboard;
  var _clock;
  var _cloud;
  var _cloudDrizzle;
  var _cloudLightning;
  var _cloudOff;
  function get_CloudOff(_this__u8e3s4) {
    if (!(_cloudOff == null)) {
      return ensureNotNull(_cloudOff);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('CloudOff', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-CloudOff>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-CloudOff>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(22.61, 16.95);
    tmp0_with.z4d(5.0, 5.0, 0.0, false, false, 18.0, 10.0);
    tmp0_with.s4d(-1.26);
    tmp0_with.a4e(8.0, 8.0, 0.0, false, false, -7.05, -6.0);
    tmp0_with.n3h(5.0, 5.0);
    tmp0_with.a4e(8.0, 8.0, 0.0, false, false, 4.0, 15.0);
    tmp0_with.s4d(9.0);
    tmp0_with.a4e(5.0, 5.0, 0.0, false, false, 1.7, -0.3);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-CloudOff>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(1.0, 1.0);
    tmp0_with_0.p3h(23.0, 23.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _cloudOff = tmp0_apply.df();
    return ensureNotNull(_cloudOff);
  }
  var _cloudRain;
  var _cloudSnow;
  var _code;
  var _codepen;
  var _codesandbox;
  var _coffee;
  var _columns;
  var _command;
  var _compass;
  var _copy;
  var _cornerDownLeft;
  var _cornerDownRight;
  var _cornerLeftDown;
  var _cornerLeftUp;
  var _cornerRightDown;
  var _cornerRightUp;
  var _cornerUpLeft;
  var _cornerUpRight;
  var _cpu;
  var _creditCard;
  var _crop;
  var _crosshair;
  var _database;
  var _delete;
  var _disc;
  var _divide;
  var _divideCircle;
  var _divideSquare;
  var _dollarSign;
  var _download;
  var _downloadCloud;
  var _dribbble;
  var _droplet;
  var _edit;
  var _edit2;
  var _edit3;
  var _externalLink;
  var _eye;
  function get_Eye(_this__u8e3s4) {
    if (!(_eye == null)) {
      return ensureNotNull(_eye);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Eye', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Eye>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Eye>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(1.0, 12.0);
    tmp0_with.y4d(4.0, -8.0, 11.0, -8.0);
    tmp0_with.y4d(11.0, 8.0, 11.0, 8.0);
    tmp0_with.y4d(-4.0, 8.0, -11.0, 8.0);
    tmp0_with.y4d(-11.0, -8.0, -11.0, -8.0);
    tmp0_with.o4d();
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Eye>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(12.0, 12.0);
    tmp0_with_0.p4d(-3.0, 0.0);
    tmp0_with_0.a4e(3.0, 3.0, 0.0, true, true, 6.0, 0.0);
    tmp0_with_0.a4e(3.0, 3.0, 0.0, true, true, -6.0, 0.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _eye = tmp0_apply.df();
    return ensureNotNull(_eye);
  }
  var _eyeOff;
  function get_EyeOff(_this__u8e3s4) {
    if (!(_eyeOff == null)) {
      return ensureNotNull(_eyeOff);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('EyeOff', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-EyeOff>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-EyeOff>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(17.94, 17.94);
    tmp0_with.z4d(10.07, 10.07, 0.0, false, true, 12.0, 20.0);
    tmp0_with.w4d(-7.0, 0.0, -11.0, -8.0, -11.0, -8.0);
    tmp0_with.a4e(18.45, 18.45, 0.0, false, true, 5.06, -5.94);
    tmp0_with.n3h(9.9, 4.24);
    tmp0_with.z4d(9.12, 9.12, 0.0, false, true, 12.0, 4.0);
    tmp0_with.w4d(7.0, 0.0, 11.0, 8.0, 11.0, 8.0);
    tmp0_with.a4e(18.5, 18.5, 0.0, false, true, -2.16, 3.19);
    tmp0_with.p4d(-6.72, -1.07);
    tmp0_with.a4e(3.0, 3.0, 0.0, true, true, -4.24, -4.24);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-EyeOff>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(1.0, 1.0);
    tmp0_with_0.p3h(23.0, 23.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _eyeOff = tmp0_apply.df();
    return ensureNotNull(_eyeOff);
  }
  var _facebook;
  var _fastForward;
  var _feather;
  var _figma;
  var _file;
  var _fileMinus;
  var _filePlus;
  var _fileText;
  var _film;
  var _filter;
  var _flag;
  var _folder;
  var _folderMinus;
  var _folderPlus;
  var _framer;
  var _frown;
  var _gift;
  var _gitBranch;
  var _gitCommit;
  var _gitMerge;
  var _gitPullRequest;
  var _github;
  var _gitlab;
  var _globe;
  var _grid;
  var _hardDrive;
  var _hash;
  var _headphones;
  var _heart;
  var _helpCircle;
  var _hexagon;
  var _home;
  var _image;
  var _inbox;
  var _info;
  var _instagram;
  var _italic;
  var _key;
  var _layers;
  var _layout;
  var _lifeBuoy;
  var _link;
  var _link2;
  var _linkedin;
  var _list;
  var _loader;
  var _lock;
  var _logIn;
  var _logOut;
  var _mail;
  var _map;
  var _mapPin;
  var _maximize;
  var _maximize2;
  var _meh;
  var _menu;
  var _messageCircle;
  var _messageSquare;
  var _mic;
  var _micOff;
  var _minimize;
  var _minimize2;
  var _minus;
  var _minusCircle;
  var _minusSquare;
  var _monitor;
  var _moon;
  function get_Moon(_this__u8e3s4) {
    if (!(_moon == null)) {
      return ensureNotNull(_moon);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Moon', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Moon>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Moon>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(21.0, 12.79);
    tmp0_with.z4d(9.0, 9.0, 0.0, true, true, 11.21, 3.0);
    tmp0_with.z4d(7.0, 7.0, 0.0, false, false, 21.0, 12.79);
    tmp0_with.o4d();
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    _moon = tmp0_apply.df();
    return ensureNotNull(_moon);
  }
  var _moreHorizontal;
  var _moreVertical;
  var _mousePointer;
  var _move;
  var _music;
  var _navigation;
  var _navigation2;
  var _octagon;
  var _package;
  var _paperclip;
  var _pause;
  var _pauseCircle;
  var _penTool;
  var _percent;
  var _phone;
  var _phoneCall;
  var _phoneForwarded;
  var _phoneIncoming;
  var _phoneMissed;
  var _phoneOff;
  var _phoneOutgoing;
  var _pieChart;
  var _play;
  var _playCircle;
  var _plus;
  var _plusCircle;
  var _plusSquare;
  var _pocket;
  var _power;
  var _printer;
  var _radio;
  var _refreshCcw;
  var _refreshCw;
  var _repeat;
  var _rewind;
  var _rotateCcw;
  function get_RotateCcw(_this__u8e3s4) {
    if (!(_rotateCcw == null)) {
      return ensureNotNull(_rotateCcw);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('RotateCcw', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-RotateCcw>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-RotateCcw>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(1.0, 4.0);
    tmp0_with.q4d(0.0, 6.0);
    tmp0_with.q4d(6.0, 0.0);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-RotateCcw>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(3.51, 15.0);
    tmp0_with_0.a4e(9.0, 9.0, 0.0, true, false, 2.13, -9.36);
    tmp0_with_0.p3h(1.0, 10.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _rotateCcw = tmp0_apply.df();
    return ensureNotNull(_rotateCcw);
  }
  var _rotateCw;
  var _rss;
  var _save;
  function get_Save(_this__u8e3s4) {
    if (!(_save == null)) {
      return ensureNotNull(_save);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Save', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Save>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Save>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(19.0, 21.0);
    tmp0_with.r4d(5.0);
    tmp0_with.a4e(2.0, 2.0, 0.0, false, true, -2.0, -2.0);
    tmp0_with.t4d(5.0);
    tmp0_with.a4e(2.0, 2.0, 0.0, false, true, 2.0, -2.0);
    tmp0_with.s4d(11.0);
    tmp0_with.q4d(5.0, 5.0);
    tmp0_with.u4d(11.0);
    tmp0_with.a4e(2.0, 2.0, 0.0, false, true, -2.0, 2.0);
    tmp0_with.o4d();
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Save>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(17.0, 21.0);
    tmp0_with_0.q4d(0.0, -8.0);
    tmp0_with_0.q4d(-10.0, 0.0);
    tmp0_with_0.q4d(0.0, 8.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp12_path = new SolidColor(Color(0));
    var tmp13_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp14_path = Companion_getInstance().n46_1;
    var tmp15_path = Companion_getInstance_0().r46_1;
    var tmp16_path = Companion_getInstance_1().z45_1;
    var tmp17_path = get_DefaultPathName();
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_1 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Save>.<anonymous>.<anonymous>' call
    tmp0_with_1.n3h(7.0, 3.0);
    tmp0_with_1.q4d(0.0, 5.0);
    tmp0_with_1.q4d(8.0, 0.0);
    tmp$ret$12 = tmp0_with_1.n4d();
    tmp0_apply.h63(tmp$ret$12, tmp16_path, tmp17_path, tmp12_path, 1.0, tmp13_path, 1.0, 2.0, tmp14_path, tmp15_path, 4.0);
    _save = tmp0_apply.df();
    return ensureNotNull(_save);
  }
  var _scissors;
  var _search;
  var _send;
  var _server;
  var _settings;
  function get_Settings(_this__u8e3s4) {
    if (!(_settings == null)) {
      return ensureNotNull(_settings);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Settings', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Settings>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Settings>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(12.0, 12.0);
    tmp0_with.p4d(-3.0, 0.0);
    tmp0_with.a4e(3.0, 3.0, 0.0, true, true, 6.0, 0.0);
    tmp0_with.a4e(3.0, 3.0, 0.0, true, true, -6.0, 0.0);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Settings>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(19.4, 15.0);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 0.33, 1.82);
    tmp0_with_0.q4d(0.06, 0.06);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 0.0, 2.83);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.83, 0.0);
    tmp0_with_0.q4d(-0.06, -0.06);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -1.82, -0.33);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -1.0, 1.51);
    tmp0_with_0.t4d(21.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.0, 2.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.0, -2.0);
    tmp0_with_0.u4d(-0.09);
    tmp0_with_0.z4d(1.65, 1.65, 0.0, false, false, 9.0, 19.4);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -1.82, 0.33);
    tmp0_with_0.q4d(-0.06, 0.06);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.83, 0.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 0.0, -2.83);
    tmp0_with_0.q4d(0.06, -0.06);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 0.33, -1.82);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -1.51, -1.0);
    tmp0_with_0.r4d(3.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.0, -2.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.0, -2.0);
    tmp0_with_0.s4d(0.09);
    tmp0_with_0.z4d(1.65, 1.65, 0.0, false, false, 4.6, 9.0);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -0.33, -1.82);
    tmp0_with_0.q4d(-0.06, -0.06);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 0.0, -2.83);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.83, 0.0);
    tmp0_with_0.q4d(0.06, 0.06);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 1.82, 0.33);
    tmp0_with_0.r4d(9.0);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 1.0, -1.51);
    tmp0_with_0.t4d(3.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.0, -2.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.0, 2.0);
    tmp0_with_0.u4d(0.09);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 1.0, 1.51);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 1.82, -0.33);
    tmp0_with_0.q4d(0.06, -0.06);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.83, 0.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 0.0, 2.83);
    tmp0_with_0.q4d(-0.06, 0.06);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -0.33, 1.82);
    tmp0_with_0.t4d(9.0);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, 1.51, 1.0);
    tmp0_with_0.r4d(21.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, 2.0, 2.0);
    tmp0_with_0.a4e(2.0, 2.0, 0.0, false, true, -2.0, 2.0);
    tmp0_with_0.s4d(-0.09);
    tmp0_with_0.a4e(1.65, 1.65, 0.0, false, false, -1.51, 1.0);
    tmp0_with_0.o4d();
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _settings = tmp0_apply.df();
    return ensureNotNull(_settings);
  }
  var _share;
  var _share2;
  var _shield;
  var _shieldOff;
  var _shoppingBag;
  var _shoppingCart;
  var _shuffle;
  var _sidebar;
  var _skipBack;
  var _skipForward;
  var _slack;
  var _slash;
  var _sliders;
  var _smartphone;
  var _smile;
  var _speaker;
  var _square;
  var _star;
  var _stopCircle;
  var _sun;
  function get_Sun(_this__u8e3s4) {
    if (!(_sun == null)) {
      return ensureNotNull(_sun);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Sun', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(12.0, 12.0);
    tmp0_with.p4d(-5.0, 0.0);
    tmp0_with.a4e(5.0, 5.0, 0.0, true, true, 10.0, 0.0);
    tmp0_with.a4e(5.0, 5.0, 0.0, true, true, -10.0, 0.0);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(12.0, 1.0);
    tmp0_with_0.p3h(12.0, 3.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp12_path = new SolidColor(Color(0));
    var tmp13_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp14_path = Companion_getInstance().n46_1;
    var tmp15_path = Companion_getInstance_0().r46_1;
    var tmp16_path = Companion_getInstance_1().z45_1;
    var tmp17_path = get_DefaultPathName();
    var tmp$ret$12;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_1 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_1.n3h(12.0, 21.0);
    tmp0_with_1.p3h(12.0, 23.0);
    tmp$ret$12 = tmp0_with_1.n4d();
    tmp0_apply.h63(tmp$ret$12, tmp16_path, tmp17_path, tmp12_path, 1.0, tmp13_path, 1.0, 2.0, tmp14_path, tmp15_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp18_path = new SolidColor(Color(0));
    var tmp19_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp20_path = Companion_getInstance().n46_1;
    var tmp21_path = Companion_getInstance_0().r46_1;
    var tmp22_path = Companion_getInstance_1().z45_1;
    var tmp23_path = get_DefaultPathName();
    var tmp$ret$16;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_2 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_2.n3h(4.22, 4.22);
    tmp0_with_2.p3h(5.64, 5.64);
    tmp$ret$16 = tmp0_with_2.n4d();
    tmp0_apply.h63(tmp$ret$16, tmp22_path, tmp23_path, tmp18_path, 1.0, tmp19_path, 1.0, 2.0, tmp20_path, tmp21_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp24_path = new SolidColor(Color(0));
    var tmp25_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp26_path = Companion_getInstance().n46_1;
    var tmp27_path = Companion_getInstance_0().r46_1;
    var tmp28_path = Companion_getInstance_1().z45_1;
    var tmp29_path = get_DefaultPathName();
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_3 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_3.n3h(18.36, 18.36);
    tmp0_with_3.p3h(19.78, 19.78);
    tmp$ret$20 = tmp0_with_3.n4d();
    tmp0_apply.h63(tmp$ret$20, tmp28_path, tmp29_path, tmp24_path, 1.0, tmp25_path, 1.0, 2.0, tmp26_path, tmp27_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp30_path = new SolidColor(Color(0));
    var tmp31_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp32_path = Companion_getInstance().n46_1;
    var tmp33_path = Companion_getInstance_0().r46_1;
    var tmp34_path = Companion_getInstance_1().z45_1;
    var tmp35_path = get_DefaultPathName();
    var tmp$ret$24;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_4 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_4.n3h(1.0, 12.0);
    tmp0_with_4.p3h(3.0, 12.0);
    tmp$ret$24 = tmp0_with_4.n4d();
    tmp0_apply.h63(tmp$ret$24, tmp34_path, tmp35_path, tmp30_path, 1.0, tmp31_path, 1.0, 2.0, tmp32_path, tmp33_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp36_path = new SolidColor(Color(0));
    var tmp37_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp38_path = Companion_getInstance().n46_1;
    var tmp39_path = Companion_getInstance_0().r46_1;
    var tmp40_path = Companion_getInstance_1().z45_1;
    var tmp41_path = get_DefaultPathName();
    var tmp$ret$28;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_5 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_5.n3h(21.0, 12.0);
    tmp0_with_5.p3h(23.0, 12.0);
    tmp$ret$28 = tmp0_with_5.n4d();
    tmp0_apply.h63(tmp$ret$28, tmp40_path, tmp41_path, tmp36_path, 1.0, tmp37_path, 1.0, 2.0, tmp38_path, tmp39_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp42_path = new SolidColor(Color(0));
    var tmp43_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp44_path = Companion_getInstance().n46_1;
    var tmp45_path = Companion_getInstance_0().r46_1;
    var tmp46_path = Companion_getInstance_1().z45_1;
    var tmp47_path = get_DefaultPathName();
    var tmp$ret$32;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_6 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_6.n3h(4.22, 19.78);
    tmp0_with_6.p3h(5.64, 18.36);
    tmp$ret$32 = tmp0_with_6.n4d();
    tmp0_apply.h63(tmp$ret$32, tmp46_path, tmp47_path, tmp42_path, 1.0, tmp43_path, 1.0, 2.0, tmp44_path, tmp45_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp48_path = new SolidColor(Color(0));
    var tmp49_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp50_path = Companion_getInstance().n46_1;
    var tmp51_path = Companion_getInstance_0().r46_1;
    var tmp52_path = Companion_getInstance_1().z45_1;
    var tmp53_path = get_DefaultPathName();
    var tmp$ret$36;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_7 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Sun>.<anonymous>.<anonymous>' call
    tmp0_with_7.n3h(18.36, 5.64);
    tmp0_with_7.p3h(19.78, 4.22);
    tmp$ret$36 = tmp0_with_7.n4d();
    tmp0_apply.h63(tmp$ret$36, tmp52_path, tmp53_path, tmp48_path, 1.0, tmp49_path, 1.0, 2.0, tmp50_path, tmp51_path, 4.0);
    _sun = tmp0_apply.df();
    return ensureNotNull(_sun);
  }
  var _sunrise;
  var _sunset;
  var _tablet;
  function get_Tablet(_this__u8e3s4) {
    if (!(_tablet == null)) {
      return ensureNotNull(_tablet);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Tablet', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Tablet>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Tablet>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(6.0, 2.0);
    tmp0_with.p3h(18.0, 2.0);
    tmp0_with.z4d(2.0, 2.0, 0.0, false, true, 20.0, 4.0);
    tmp0_with.p3h(20.0, 20.0);
    tmp0_with.z4d(2.0, 2.0, 0.0, false, true, 18.0, 22.0);
    tmp0_with.p3h(6.0, 22.0);
    tmp0_with.z4d(2.0, 2.0, 0.0, false, true, 4.0, 20.0);
    tmp0_with.p3h(4.0, 4.0);
    tmp0_with.z4d(2.0, 2.0, 0.0, false, true, 6.0, 2.0);
    tmp0_with.o4d();
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Tablet>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(12.0, 18.0);
    tmp0_with_0.p3h(12.01, 18.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _tablet = tmp0_apply.df();
    return ensureNotNull(_tablet);
  }
  var _tag;
  function get_Tag(_this__u8e3s4) {
    if (!(_tag == null)) {
      return ensureNotNull(_tag);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('Tag', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-Tag>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Tag>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(20.59, 13.41);
    tmp0_with.q4d(-7.17, 7.17);
    tmp0_with.a4e(2.0, 2.0, 0.0, false, true, -2.83, 0.0);
    tmp0_with.p3h(2.0, 12.0);
    tmp0_with.t4d(2.0);
    tmp0_with.s4d(10.0);
    tmp0_with.q4d(8.59, 8.59);
    tmp0_with.a4e(2.0, 2.0, 0.0, false, true, 0.0, 2.82);
    tmp0_with.o4d();
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-Tag>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(7.0, 7.0);
    tmp0_with_0.p3h(7.01, 7.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _tag = tmp0_apply.df();
    return ensureNotNull(_tag);
  }
  var _target;
  var _terminal;
  var _thermometer;
  var _thumbsDown;
  var _thumbsUp;
  var _toggleLeft;
  var _toggleRight;
  var _tool;
  var _trash;
  var _trash2;
  var _trello;
  var _trendingDown;
  var _trendingUp;
  var _triangle;
  var _truck;
  var _tv;
  var _twitch;
  var _twitter;
  var _type;
  var _umbrella;
  var _underline;
  var _unlock;
  var _upload;
  var _uploadCloud;
  var _user;
  var _userCheck;
  var _userMinus;
  var _userPlus;
  var _userX;
  var _users;
  var _video;
  var _videoOff;
  var _voicemail;
  var _volume;
  var _volume1;
  var _volume2;
  var _volumeX;
  var _watch;
  var _wifi;
  var _wifiOff;
  var _wind;
  var _x;
  function get_X(_this__u8e3s4) {
    if (!(_x == null)) {
      return ensureNotNull(_x);
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp0_apply = new Builder('X', tmp, tmp$ret$1, 24.0, 24.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'compose.icons.feathericons.<get-X>.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp0_path = new SolidColor(Color(0));
    var tmp1_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp2_path = Companion_getInstance().n46_1;
    var tmp3_path = Companion_getInstance_0().r46_1;
    var tmp4_path = Companion_getInstance_1().z45_1;
    var tmp5_path = get_DefaultPathName();
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-X>.<anonymous>.<anonymous>' call
    tmp0_with.n3h(18.0, 6.0);
    tmp0_with.p3h(6.0, 18.0);
    tmp$ret$4 = tmp0_with.n4d();
    tmp0_apply.h63(tmp$ret$4, tmp4_path, tmp5_path, tmp0_path, 1.0, tmp1_path, 1.0, 2.0, tmp2_path, tmp3_path, 4.0);
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var tmp6_path = new SolidColor(Color(0));
    var tmp7_path = new SolidColor(Color_0(new Long(-16777216, 0)));
    var tmp8_path = Companion_getInstance().n46_1;
    var tmp9_path = Companion_getInstance_0().r46_1;
    var tmp10_path = Companion_getInstance_1().z45_1;
    var tmp11_path = get_DefaultPathName();
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var tmp0_with_0 = new PathBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    // Inline function 'compose.icons.feathericons.<get-X>.<anonymous>.<anonymous>' call
    tmp0_with_0.n3h(6.0, 6.0);
    tmp0_with_0.p3h(18.0, 18.0);
    tmp$ret$8 = tmp0_with_0.n4d();
    tmp0_apply.h63(tmp$ret$8, tmp10_path, tmp11_path, tmp6_path, 1.0, tmp7_path, 1.0, 2.0, tmp8_path, tmp9_path, 4.0);
    _x = tmp0_apply.df();
    return ensureNotNull(_x);
  }
  var _xCircle;
  var _xOctagon;
  var _xSquare;
  var _youtube;
  var _zap;
  var _zapOff;
  var _zoomIn;
  var _zoomOut;
  //region block: init
  __AllIcons = null;
  _activity = null;
  _airplay = null;
  _alertCircle = null;
  _alertOctagon = null;
  _alertTriangle = null;
  _alignCenter = null;
  _alignJustify = null;
  _alignLeft = null;
  _alignRight = null;
  _anchor = null;
  _aperture = null;
  _archive = null;
  _arrowDown = null;
  _arrowDownCircle = null;
  _arrowDownLeft = null;
  _arrowDownRight = null;
  _arrowLeft = null;
  _arrowLeftCircle = null;
  _arrowRight = null;
  _arrowRightCircle = null;
  _arrowUp = null;
  _arrowUpCircle = null;
  _arrowUpLeft = null;
  _arrowUpRight = null;
  _atSign = null;
  _award = null;
  _barChart = null;
  _barChart2 = null;
  _battery = null;
  _batteryCharging = null;
  _bell = null;
  _bellOff = null;
  _bluetooth = null;
  _bold = null;
  _book = null;
  _bookOpen = null;
  _bookmark = null;
  _box = null;
  _briefcase = null;
  _calendar = null;
  _camera = null;
  _cameraOff = null;
  _cast = null;
  _check = null;
  _checkCircle = null;
  _checkSquare = null;
  _chevronDown = null;
  _chevronLeft = null;
  _chevronRight = null;
  _chevronUp = null;
  _chevronsDown = null;
  _chevronsLeft = null;
  _chevronsRight = null;
  _chevronsUp = null;
  _chrome = null;
  _circle = null;
  _clipboard = null;
  _clock = null;
  _cloud = null;
  _cloudDrizzle = null;
  _cloudLightning = null;
  _cloudOff = null;
  _cloudRain = null;
  _cloudSnow = null;
  _code = null;
  _codepen = null;
  _codesandbox = null;
  _coffee = null;
  _columns = null;
  _command = null;
  _compass = null;
  _copy = null;
  _cornerDownLeft = null;
  _cornerDownRight = null;
  _cornerLeftDown = null;
  _cornerLeftUp = null;
  _cornerRightDown = null;
  _cornerRightUp = null;
  _cornerUpLeft = null;
  _cornerUpRight = null;
  _cpu = null;
  _creditCard = null;
  _crop = null;
  _crosshair = null;
  _database = null;
  _delete = null;
  _disc = null;
  _divide = null;
  _divideCircle = null;
  _divideSquare = null;
  _dollarSign = null;
  _download = null;
  _downloadCloud = null;
  _dribbble = null;
  _droplet = null;
  _edit = null;
  _edit2 = null;
  _edit3 = null;
  _externalLink = null;
  _eye = null;
  _eyeOff = null;
  _facebook = null;
  _fastForward = null;
  _feather = null;
  _figma = null;
  _file = null;
  _fileMinus = null;
  _filePlus = null;
  _fileText = null;
  _film = null;
  _filter = null;
  _flag = null;
  _folder = null;
  _folderMinus = null;
  _folderPlus = null;
  _framer = null;
  _frown = null;
  _gift = null;
  _gitBranch = null;
  _gitCommit = null;
  _gitMerge = null;
  _gitPullRequest = null;
  _github = null;
  _gitlab = null;
  _globe = null;
  _grid = null;
  _hardDrive = null;
  _hash = null;
  _headphones = null;
  _heart = null;
  _helpCircle = null;
  _hexagon = null;
  _home = null;
  _image = null;
  _inbox = null;
  _info = null;
  _instagram = null;
  _italic = null;
  _key = null;
  _layers = null;
  _layout = null;
  _lifeBuoy = null;
  _link = null;
  _link2 = null;
  _linkedin = null;
  _list = null;
  _loader = null;
  _lock = null;
  _logIn = null;
  _logOut = null;
  _mail = null;
  _map = null;
  _mapPin = null;
  _maximize = null;
  _maximize2 = null;
  _meh = null;
  _menu = null;
  _messageCircle = null;
  _messageSquare = null;
  _mic = null;
  _micOff = null;
  _minimize = null;
  _minimize2 = null;
  _minus = null;
  _minusCircle = null;
  _minusSquare = null;
  _monitor = null;
  _moon = null;
  _moreHorizontal = null;
  _moreVertical = null;
  _mousePointer = null;
  _move = null;
  _music = null;
  _navigation = null;
  _navigation2 = null;
  _octagon = null;
  _package = null;
  _paperclip = null;
  _pause = null;
  _pauseCircle = null;
  _penTool = null;
  _percent = null;
  _phone = null;
  _phoneCall = null;
  _phoneForwarded = null;
  _phoneIncoming = null;
  _phoneMissed = null;
  _phoneOff = null;
  _phoneOutgoing = null;
  _pieChart = null;
  _play = null;
  _playCircle = null;
  _plus = null;
  _plusCircle = null;
  _plusSquare = null;
  _pocket = null;
  _power = null;
  _printer = null;
  _radio = null;
  _refreshCcw = null;
  _refreshCw = null;
  _repeat = null;
  _rewind = null;
  _rotateCcw = null;
  _rotateCw = null;
  _rss = null;
  _save = null;
  _scissors = null;
  _search = null;
  _send = null;
  _server = null;
  _settings = null;
  _share = null;
  _share2 = null;
  _shield = null;
  _shieldOff = null;
  _shoppingBag = null;
  _shoppingCart = null;
  _shuffle = null;
  _sidebar = null;
  _skipBack = null;
  _skipForward = null;
  _slack = null;
  _slash = null;
  _sliders = null;
  _smartphone = null;
  _smile = null;
  _speaker = null;
  _square = null;
  _star = null;
  _stopCircle = null;
  _sun = null;
  _sunrise = null;
  _sunset = null;
  _tablet = null;
  _tag = null;
  _target = null;
  _terminal = null;
  _thermometer = null;
  _thumbsDown = null;
  _thumbsUp = null;
  _toggleLeft = null;
  _toggleRight = null;
  _tool = null;
  _trash = null;
  _trash2 = null;
  _trello = null;
  _trendingDown = null;
  _trendingUp = null;
  _triangle = null;
  _truck = null;
  _tv = null;
  _twitch = null;
  _twitter = null;
  _type = null;
  _umbrella = null;
  _underline = null;
  _unlock = null;
  _upload = null;
  _uploadCloud = null;
  _user = null;
  _userCheck = null;
  _userMinus = null;
  _userPlus = null;
  _userX = null;
  _users = null;
  _video = null;
  _videoOff = null;
  _voicemail = null;
  _volume = null;
  _volume1 = null;
  _volume2 = null;
  _volumeX = null;
  _watch = null;
  _wifi = null;
  _wifiOff = null;
  _wind = null;
  _x = null;
  _xCircle = null;
  _xOctagon = null;
  _xSquare = null;
  _youtube = null;
  _zap = null;
  _zapOff = null;
  _zoomIn = null;
  _zoomOut = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_CloudOff;
  _.$_$.b = get_Eye;
  _.$_$.c = get_EyeOff;
  _.$_$.d = get_Moon;
  _.$_$.e = get_RotateCcw;
  _.$_$.f = get_Save;
  _.$_$.g = get_Settings;
  _.$_$.h = get_Sun;
  _.$_$.i = get_Tablet;
  _.$_$.j = get_Tag;
  _.$_$.k = get_X;
  _.$_$.l = FeatherIcons_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-icons-feather.js.map
