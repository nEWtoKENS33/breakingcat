!function(e){if(void 0===window.paCheckSafari){window.paCheckSafari=function(){if(/iP(hone|ad|od)/i.test(navigator.userAgent)&&!window.MSStream){var e=/(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);if(!e){var r=""===navigator.vendor;e=e||r}var a=/WebKit/i.test(navigator.userAgent)&&!e}else a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(a)return!0;return!1}()}e(window).on("elementor/frontend/init",function(){var r=elementorModules.frontend.handlers.Base.extend({onInit:function(){if(elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.$element.hasClass("premium-floating-effects-yes")){if(this.$element.hasClass("premium-disable-fe-yes")&&window.paCheckSafari)return;this.run()}},run:function(){var e=this,r=this.getEffectSettings();if(-1===Object.values(r.effectSettings).findIndex(function(e){return void 0!==e}))return!1;elementorFrontend.waypoint(e.$element,function(){e.applyEffects(r)})},getEffectSettings:function(){var e=this.getElementSettings(),r="steps"===e.premium_fe_easing?"steps("+e.premium_fe_ease_step+")":e.premium_fe_easing,a="yes"===e.premium_fe_translate_switcher,t="yes"===e.premium_fe_rotate_switcher,i="yes"===e.premium_fe_scale_switcher,_="yes"===e.premium_fe_skew_switcher,o="yes"===e.premium_fe_opacity_switcher,m="yes"===e.premium_fe_bg_color_switcher,s="yes"===e.premium_fe_blur_switcher,n="yes"===e.premium_fe_contrast_switcher,u="yes"===e.premium_fe_gScale_switcher,f="yes"===e.premium_fe_hue_switcher,l="yes"===e.premium_fe_brightness_switcher,d="yes"===e.premium_fe_saturate_switcher,p={general:{direction:e.premium_fe_direction,loop:"default"===e.premium_fe_loop||e.premium_fe_loop_number,easing:r,target:""!==e.premium_fe_target?e.premium_fe_target:""},effectSettings:{}};return a&&(p.effectSettings.translate={x_param_from:e.premium_fe_Xtranslate.sizes.from,x_param_to:e.premium_fe_Xtranslate.sizes.to,y_param_from:e.premium_fe_Ytranslate.sizes.from,y_param_to:e.premium_fe_Ytranslate.sizes.to,duration:e.premium_fe_trans_duration.size,delay:e.premium_fe_trans_delay.size}),t&&(p.effectSettings.rotate={x_param_from:e.premium_fe_Xrotate.sizes.from,x_param_to:e.premium_fe_Xrotate.sizes.to,y_param_from:e.premium_fe_Yrotate.sizes.from,y_param_to:e.premium_fe_Yrotate.sizes.to,z_param_from:e.premium_fe_Zrotate.sizes.from,z_param_to:e.premium_fe_Zrotate.sizes.to,duration:e.premium_fe_rotate_duration.size,delay:e.premium_fe_rotate_delay.size}),i&&(p.effectSettings.scale={x_param_from:e.premium_fe_Xscale.sizes.from,x_param_to:e.premium_fe_Xscale.sizes.to,y_param_from:e.premium_fe_Yscale.sizes.from,y_param_to:e.premium_fe_Yscale.sizes.to,duration:e.premium_fe_scale_duration.size,delay:e.premium_fe_scale_delay.size}),_&&(p.effectSettings.skew={x_param_from:e.premium_fe_Xskew.sizes.from,x_param_to:e.premium_fe_Xskew.sizes.to,y_param_from:e.premium_fe_Yskew.sizes.from,y_param_to:e.premium_fe_Yskew.sizes.to,duration:e.premium_fe_skew_duration.size,delay:e.premium_fe_skew_delay.size}),PremiumFESettings.papro_installed&&(o&&(p.effectSettings.opacity={from:e.premium_fe_opacity.sizes.from/100,to:e.premium_fe_opacity.sizes.to/100,duration:e.premium_fe_opacity_duration.size,delay:e.premium_fe_opacity_delay.size}),m&&(p.effectSettings.bgColor={from:e.premium_fe_bg_color_from,to:e.premium_fe_bg_color_to,duration:e.premium_fe_bg_color_duration.size,delay:e.premium_fe_bg_color_delay.size}),s&&(p.effectSettings.blur={from:"blur("+e.premium_fe_blur_val.sizes.from+"px)",to:"blur("+e.premium_fe_blur_val.sizes.to+"px)",duration:e.premium_fe_blur_duration.size,delay:e.premium_fe_blur_delay.size}),n&&(p.effectSettings.contrast={from:"contrast("+e.premium_fe_contrast_val.sizes.from+"%)",to:"contrast("+e.premium_fe_contrast_val.sizes.to+"%)",duration:e.premium_fe_contrast_duration.size,delay:e.premium_fe_contrast_delay.size}),u&&(p.effectSettings.gScale={from:"grayscale("+e.premium_fe_gScale_val.sizes.from+"%)",to:"grayscale("+e.premium_fe_gScale_val.sizes.to+"%)",duration:e.premium_fe_gScale_duration.size,delay:e.premium_fe_gScale_delay.size}),f&&(p.effectSettings.hue={from:"hue-rotate("+e.premium_fe_hue_val.sizes.from+"deg)",to:"hue-rotate("+e.premium_fe_hue_val.sizes.to+"deg)",duration:e.premium_fe_hue_duration.size,delay:e.premium_fe_hue_delay.size}),l&&(p.effectSettings.bright={from:"brightness("+e.premium_fe_brightness_val.sizes.from+"%)",to:"brightness("+e.premium_fe_brightness_val.sizes.to+"%)",duration:e.premium_fe_brightness_duration.size,delay:e.premium_fe_brightness_delay.size}),d&&(p.effectSettings.sat={from:"saturate("+e.premium_fe_saturate_val.sizes.from+"%)",to:"saturate("+e.premium_fe_saturate_val.sizes.to+"%)",duration:e.premium_fe_saturate_duration.size,delay:e.premium_fe_saturate_delay.size})),p},applyEffects:function(e){var r=e,a=r.effectSettings,t=this.$element.find(".elementor-widget-container")[0],i=[];if(r.general.target){var _=r.general.target;t=0<this.$element.find(_).length?".elementor-element-"+this.$element.data("id")+" "+_:_}var o={targets:t,loop:r.general.loop,direction:r.general.direction,easing:r.general.easing};if(a.translate){var m=a.translate,s={value:[m.x_param_from||0,m.x_param_to||0],duration:m.duration,delay:m.delay||0},n={value:[m.y_param_from||0,m.y_param_to||0],duration:m.duration,delay:m.delay||0};o.translateX=s,o.translateY=n}if(a.rotate){var u=a.rotate,f={duration:u.duration,delay:u.delay||0,value:[u.x_param_from||0,u.x_param_to||0]},l={duration:u.duration,delay:u.delay||0,value:[u.y_param_from||0,u.y_param_to||0]},d={duration:u.duration,delay:u.delay||0,value:[u.z_param_from||0,u.z_param_to||0]};o.rotateX=f,o.rotateY=l,o.rotateZ=d}if(a.scale){var p=a.scale,y={value:[p.x_param_from||0,p.x_param_to||0],duration:p.duration,delay:p.delay||0},c={value:[p.y_param_from||0,p.y_param_to||0],duration:p.duration,delay:p.delay||0};o.scaleX=y,o.scaleY=c}if(a.skew){var g=a.skew,h={value:[g.x_param_from||0,g.x_param_to||0],duration:g.duration,delay:g.delay||0},z={value:[g.y_param_from||0,g.y_param_to||0],duration:g.duration,delay:g.delay||0};o.skewX=h,o.skewY=z}if(a.opacity){var v=a.opacity;o.opacity={value:[v.from||0,v.to||0],duration:v.duration,delay:v.delay||0}}if(a.bgColor){var w=a.bgColor;o.backgroundColor={value:[w.from||0,w.to||0],duration:w.duration,delay:w.delay||0}}if(a.blur){var S=a.blur,b={value:[S.from||0,S.to||0],duration:S.duration,delay:S.delay||0};i.push(b)}if(a.hue){var x=a.hue,k={value:[x.from||0,x.to||0],duration:x.duration,delay:x.delay||0};i.push(k)}if(a.gScale){var X=a.gScale,Y={value:[X.from||0,X.to||0],duration:X.duration,delay:X.delay||0};i.push(Y)}if(a.contrast){var C=a.contrast,$={value:[C.from||0,C.to||0],duration:C.duration,delay:C.delay||0};i.push($)}if(a.bright){var E=a.bright,A={value:[E.from||0,E.to||0],duration:E.duration,delay:E.delay||0};i.push(A)}if(a.sat){var F=a.sat,O={value:[F.from||0,F.to||0],duration:F.duration,delay:F.delay||0};i.push(O)}0!==i.length&&(o.filter=i),anime(o)}});elementorFrontend.hooks.addAction("frontend/element_ready/widget",function(e){elementorFrontend.elementsHandler.addHandler(r,{$element:e})})})}(jQuery);