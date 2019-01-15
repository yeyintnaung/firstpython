/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Section/Menubar",["exports","jquery","Component"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Component"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Component),global.SectionMenubar=mod.exports}}(this,function(exports,_jquery,_Component2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Component3=babelHelpers.interopRequireDefault(_Component2),$BODY=(0,_jquery2.default)("body"),$HTML=(0,_jquery2.default)("html"),Scrollable=function(){function Scrollable($el){babelHelpers.classCallCheck(this,Scrollable),this.$el=$el,this.native=!1,this.api=null,this.init()}return babelHelpers.createClass(Scrollable,[{key:"init",value:function(){$BODY.is(".site-menubar-native")?this.native=!0:this.api=this.$el.asScrollable({namespace:"scrollable",skin:"scrollable-inverse",direction:"vertical",contentSelector:">",containerSelector:">"}).data("asScrollable")}},{key:"update",value:function(){this.api&&this.api.update()}},{key:"enable",value:function(){this.native||(this.api||this.init(),this.api&&this.api.enable())}},{key:"disable",value:function(){this.api&&this.api.disable()}}]),Scrollable}(),_class=function(_Component){function _class(){var _ref;babelHelpers.classCallCheck(this,_class);for(var _len=arguments.length,props=Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];var _this=babelHelpers.possibleConstructorReturn(this,(_ref=_class.__proto__||Object.getPrototypeOf(_class)).call.apply(_ref,[this].concat(props)));return _this.$menuBody=_this.$el.children(".site-menubar-body"),_this.$menu=_this.$el.find("[data-plugin=menu]"),_this.$menuBody.length>0?(_this.initialized=!0,_this.scrollable=new Scrollable(_this.$menuBody),$BODY.hasClass("site-menubar-fold")?_this.isFold=!0:_this.isFold=!1,_this.isFold||_this.bindHover(),$HTML.removeClass("css-menubar").addClass("js-menubar"),_this.type="hide",_this.change(_this.type),_this):(_this.initialized=!1,babelHelpers.possibleConstructorReturn(_this))}return babelHelpers.inherits(_class,_Component),babelHelpers.createClass(_class,[{key:"process",value:function(){babelHelpers.get(_class.prototype.__proto__||Object.getPrototypeOf(_class.prototype),"process",this).call(this),this.isFold||this.bindHover()}},{key:"bindHover",value:function(){var _this2=this;this.$el.on("mouseenter",function(){$BODY.hasClass("site-menubar-fixed")||$BODY.hasClass("site-menubar-disable-hover")||$BODY.hasClass("site-menubar-changing")||_this2.change("open")}).on("mouseleave",function(){$BODY.hasClass("site-menubar-fixed")||$BODY.hasClass("site-menubar-disable-hover")||_this2.change("hide")})}},{key:"setMenuData",value:function(){var api=this.getMenuApi();api.folded=!("open"===this.type)&&this.isFold,api.foldAlt=!1,api.outerHeight=this.$el.outerHeight()}},{key:"getMenuApi",value:function(){return this.$menu.data("menuApi")}},{key:"update",value:function(){this.scrollable.update()}},{key:"change",value:function(type){this.initialized&&(this.reset(),this[type](),this.setMenuData()),this.type=type}},{key:"animate",value:function(doing){var _this3=this,callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};$BODY.addClass("site-menubar-changing"),setTimeout(function(){doing.call(_this3),_this3.$el.trigger("changing.site.menubar");var menuApi=_this3.getMenuApi();menuApi&&menuApi.refresh()},10),setTimeout(function(){callback.call(_this3),$BODY.removeClass("site-menubar-changing"),_this3.update(),_this3.$el.trigger("changed.site.menubar")},250)}},{key:"reset",value:function(){$BODY.removeClass("site-menubar-hide site-menubar-open")}},{key:"open",value:function(){this.animate(function(){$BODY.addClass("site-menubar-open")},function(){this.scrollable.enable(),this.triggerResize()}),this.type="open"}},{key:"hide",value:function(){this.scrollable.disable(),this.animate(function(){$BODY.addClass("site-menubar-hide")},function(){this.triggerResize()})}},{key:"update",value:function(){this.scrollable.update()}}]),_class}(_Component3.default);exports.default=_class});