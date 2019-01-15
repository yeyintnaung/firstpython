/*!
 * Remark Material (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/donut",["exports","Plugin","Config"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"),require("Config"));else{var mod={exports:{}};factory(mod.exports,global.Plugin,global.Config),global.PluginDonut=mod.exports}}(this,function(exports,_Plugin2,_Config){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),Config=babelHelpers.interopRequireWildcard(_Config),DonutPlugin=function(_Plugin){function DonutPlugin(){return babelHelpers.classCallCheck(this,DonutPlugin),babelHelpers.possibleConstructorReturn(this,(DonutPlugin.__proto__||Object.getPrototypeOf(DonutPlugin)).apply(this,arguments))}return babelHelpers.inherits(DonutPlugin,_Plugin),babelHelpers.createClass(DonutPlugin,[{key:"getName",value:function(){return"donut"}},{key:"render",value:function(){if(Gauge){var $el=this.$el,$canvas=$el.find("canvas"),$text=$el.find(".donut-label");if(0!==$canvas.length){var donut=new Donut($canvas[0]).setOptions(this.options);$el.data("donut",donut),donut.animationSpeed=50,donut.maxValue=$el.data("max-value"),donut.set($el.data("value")),$text.length>0&&donut.setTextField($text[0])}}}}],[{key:"getDefaults",value:function(){return{lines:12,angle:.3,lineWidth:.08,pointer:{length:.9,strokeWidth:.035,color:Config.colors("grey",400)},limitMax:!1,colorStart:Config.colors("grey",200),colorStop:Config.colors("grey",200),strokeColor:Config.colors("primary",500),generateGradient:!0}}}]),DonutPlugin}(_Plugin3.default);_Plugin3.default.register("donut",DonutPlugin),exports.default=DonutPlugin});