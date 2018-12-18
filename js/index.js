console.log('你好啊朋友，即然你能看到这句话，就说明咱们是同行了，咱们可以加上微信一起讨论如何更好的码代码，一起进步向前吧！ 如有意愿请邮件联系：641334373@qq.com')
//=======================jQuery 过渡效果easing 定制效果swing============================
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});




//==================================数字滚动插件 countto=================================
//----APPEAR---//
!function(e){function r(){n=!1;for(var r=0;r<i.length;r++){var a=e(i[r]).filter(function(){return e(this).is(":appeared")});if(a.trigger("appear",[a]),t){var o=t.not(a);o.trigger("disappear",[o])}t=a}}var t,i=[],a=!1,n=!1,o={interval:250,force_process:!1},f=e(window);e.expr[":"].appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var i=f.scrollLeft(),a=f.scrollTop(),n=t.offset(),o=n.left,p=n.top;return p+t.height()>=a&&p-(t.data("appear-top-offset")||0)<=a+f.height()&&o+t.width()>=i&&o-(t.data("appear-left-offset")||0)<=i+f.width()?!0:!1},e.fn.extend({appear:function(t){var f=e.extend({},o,t||{}),p=this.selector||this;if(!a){var s=function(){n||(n=!0,setTimeout(r,f.interval))};e(window).scroll(s).resize(s),a=!0}return f.force_process&&setTimeout(r,f.interval),i.push(p),e(p)}}),e.extend({force_appear:function(){return a?(r(),!0):!1}})}(jQuery);



(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // 开始数字 
		to: 0,                 // 结束数字
		speed: 1000,           // 到达目标数字所花时间
		refreshInterval: 100,  // 更新元素时间
		decimals: 0,           // 要显示的小数位数
		formatter: formatter,  // 显示前的格式化处理
		onUpdate: null,        // 每次更新元素的回调函数方法
		onComplete: null       // 元素完成更新时的回调函数方法
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));



//counters init on scroll
	if (jQuery().appear) {
		jQuery('.counter').appear();
		jQuery('body').on('appear', '.counter', function(e, $affected ) {
			jQuery($affected).each(function(index){
				if (jQuery(this).hasClass('counted')) {
					return;
				} else {
					jQuery(this).countTo().addClass('counted');
				}
				
			});
		});
	}


//===============================视着部分  parallax===================================
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it	
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;
			});
	
			if (outerHeight) {
				getHeight = function(jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function(jqo) {
					return jqo.height();
				};
			}
				
			// setup defaults if arguments aren't specified
			if (arguments.length < 1 || xpos === null) xpos = "30%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;
			
			// function to be called whenever the window is scrolled or resized
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);
	
					// Check if totally above or totally below viewport
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}
					
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
					
				});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);


// =============================================
// Parallax Init
// =============================================
	
	jQuery(window).bind('load', function () {
	parallaxInit();						  
	});
	function parallaxInit() {
		jQuery('.parallax').each(function(){
			jQuery(this).parallax("30%", 0.5);
		});
	}


//=================================公用调用部分 common================================
//
// SmoothScroll for websites v1.3.8 (Balazs Galambosi)
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction would be not to publish any  
// extension for browsers or native application
// without getting a written permission first.
//
!function(){function e(){M.keyboardSupport&&m("keydown",a)}function t(){if(!z&&document.body){z=!0;var t=document.body,o=document.documentElement;window.innerHeight,t.scrollHeight;H=document.compatMode.indexOf("CSS")>=0?o:t,S=t,e(),top!=self&&(C=!0),M.fixedBackground||T||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o){if(w(t,o),1!=M.accelerationMax){var n=Date.now(),a=n-L;if(a<M.accelerationDelta){var r=(1+50/a)/2;r>1&&(r=Math.min(r,M.accelerationMax),t*=r,o*=r)}L=Date.now()}if(A.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:Date.now()}),!K){var l=e===document.body,i=function(n){for(var a=Date.now(),r=0,c=0,u=0;u<A.length;u++){var d=A[u],s=a-d.start,m=s>=M.animationTime,f=m?1:s/M.animationTime;M.pulseAlgorithm&&(f=g(f));var w=d.x*f-d.lastX>>0,p=d.y*f-d.lastY>>0;r+=w,c+=p,d.lastX+=w,d.lastY+=p,m&&(A.splice(u,1),u--)}l?window.scrollBy(r,c):(r&&(e.scrollLeft+=r),c&&(e.scrollTop+=c)),t||o||(A=[]),A.length?R(i,e,1e3/M.frameRate+1):K=!1};R(i,e,0),K=!0}}function n(e){z||t();var n=e.target,a=c(n);if(!a||e.defaultPrevented||e.ctrlKey)return!0;if(f(S,"embed")||f(n,"embed")&&/\.pdf/i.test(n.src)||f(S,"object"))return!0;var r=-e.wheelDeltaX||e.deltaX||0,i=-e.wheelDeltaY||e.deltaY||0;return Y&&(e.wheelDeltaX&&h(e.wheelDeltaX,120)&&(r=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&h(e.wheelDeltaY,120)&&(i=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),r||i||(i=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,i*=40),!M.touchpadSupport&&p(i)?!0:(Math.abs(r)>1.2&&(r*=M.stepSize/120),Math.abs(i)>1.2&&(i*=M.stepSize/120),o(a,r,i),e.preventDefault(),void l())}function a(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==B.spacebar;document.contains(S)||(S=document.activeElement);var a=/^(textarea|select|embed|object)$/i,r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(a.test(t.nodeName)||f(t,"input")&&!r.test(t.type)||f(S,"video")||v(e)||t.isContentEditable||e.defaultPrevented||n)return!0;if((f(t,"button")||f(t,"input")&&r.test(t.type))&&e.keyCode===B.spacebar)return!0;var i,u=0,d=0,s=c(S),m=s.clientHeight;switch(s==document.body&&(m=window.innerHeight),e.keyCode){case B.up:d=-M.arrowScroll;break;case B.down:d=M.arrowScroll;break;case B.spacebar:i=e.shiftKey?1:-1,d=-i*m*.9;break;case B.pageup:d=.9*-m;break;case B.pagedown:d=.9*m;break;case B.home:d=-s.scrollTop;break;case B.end:var w=s.scrollHeight-s.scrollTop-m;d=w>0?w+10:0;break;case B.left:u=-M.arrowScroll;break;case B.right:u=M.arrowScroll;break;default:return!0}o(s,u,d),e.preventDefault(),l()}function r(e){S=e.target}function l(){clearTimeout(k),k=setInterval(function(){q={}},1e3)}function i(e,t){for(var o=e.length;o--;)q[N(e[o])]=t;return t}function c(e){var t=[],o=document.body,n=H.scrollHeight;do{var a=q[N(e)];if(a)return i(t,a);if(t.push(e),n===e.scrollHeight){var r=d(H)&&d(o),l=r||s(H);if(C&&u(H)||!C&&l)return i(t,P())}else if(u(e)&&s(e))return i(t,e)}while(e=e.parentElement)}function u(e){return e.clientHeight+10<e.scrollHeight}function d(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function f(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function w(e,t){e=e>0?1:-1,t=t>0?1:-1,(E.x!==e||E.y!==t)&&(E.x=e,E.y=t,A=[],L=0)}function p(e){return e?(X.length||(X=[e,e,e]),e=Math.abs(e),X.push(e),X.shift(),clearTimeout(D),D=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=X.join(","))},1e3),!b(120)&&!b(100)):void 0}function h(e,t){return Math.floor(e/t)==e/t}function b(e){return h(X[0],e)&&h(X[1],e)&&h(X[2],e)}function v(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function y(e){var t,o,n;return e*=M.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*M.pulseNormalize}function g(e){return e>=1?1:0>=e?0:(1==M.pulseNormalize&&(M.pulseNormalize/=y(1)),y(e))}var S,k,D,x={frameRate:150,animationTime:600,stepSize:150,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},M=x,T=!1,C=!1,E={x:0,y:0},z=!1,H=document.documentElement,X=[120,120,120],Y=/^Mac/.test(navigator.platform),B={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},M=x,A=[],K=!1,L=Date.now(),N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),q={};window.localStorage&&localStorage.SS_deltaBuffer&&(X=localStorage.SS_deltaBuffer.split(","));var O,R=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),P=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(t)}return e}}());"onwheel"in document.createElement("div")?O="wheel":"onmousewheel"in document.createElement("div")&&(O="mousewheel"),O&&(m(O,n),m("mousedown",r),m("load",t))}();



/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),
f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),
a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);


//调用easing 动画效果
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });



    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
//======================================WOW.JS===================================
    // 调用为WOW.js插件 依赖animate插件生成
    new WOW().init();



/* Carousel
*/
(function( $ ) {

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

})(jQuery);


// =============================================
// ======================================自适应高度配置Match Height===============================
// =============================================

$('.equal-heights .col-md-4').matchHeight();


})(jQuery); // End of use strict




//=================================表单部分 contact ajax (未启用)================================
//var submits= document.getElementById('submit')
//submits.onclick=function(){
//	
//}
////联接数据库
//jQuery(document).ready(function ($) {
//////	
//////	//点击提交
//	$('#submit').click(function () {	
////		console.log(1111)
////		
//		document.getElementById('Linkqq').setAttribute('src','http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-MrIzc-PyM-Lz7yNjdKfk5E')
		
//	window.location.href='http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-MrIzc-PyM-Lz7yNjdKfk5E;



//		//获取提交数据
//		var name = $('input[name=name]');
//		var email = $('input[name=email]');
//		var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
//		var comment = $('textarea[name=comment]');
//		var returnError = false;
//		
//		//Simple validation to make sure user entered something
//		//Add your own error checking here with JS, but also do some error checking with PHP.
//		//If error found, add hightlight class to the text field
//		if (name.val()=='') {
//			name.addClass('error');
//			returnError = true;
//		} else name.removeClass('error');
//		
//		if (email.val()=='') {
//			email.addClass('error');
//			returnError = true;
//		} else email.removeClass('error');		
//		
//		if(!regx.test(email.val())){
//        email.addClass('error');
//        returnError = true;
//		} else email.removeClass('error');
//		
//		
//		if (comment.val()=='') {
//			comment.addClass('error');
//			returnError = true;
//		} else comment.removeClass('error');
//		
//		// Highlight all error fields, then quit.
//		if(returnError == true){
//			return false;	
//		}
////		
////		//organize the data
////		
//		var data = 'name=' + name.val() + '&email=' + email.val() + '&comment='  + encodeURIComponent(comment.val());
//
////		//disabled all the text fields
//		$('.text').attr('disabled','true');
//		
//		//show the loading sign
//		$('.loading').show();
//		

//      document.getElementById("contactform").setAttribute("action", 'mailto:641334373@qq.com');
		
		
//		
//		//start the ajax
//		$.ajax({
//			//this is the php file that processes the data and sends email
//			url: "contact.php",	
//			
//			//GET method is used
//			type: "GET",
//
//			//pass the data			
//			data: data,		
//			
//			//Do not cache the page
//			cache: false,
//			
//			//success
//			success: function (html) {				
//				//if contact.php returned 1/true (send mail success)
//				if (html==1) {
//				
//					//show the success message
//					$('.done').fadeIn('slow');
//					
//					$(".form").find('input[type=text], textarea').val("");
//					
//				//if contact.php returned 0/false (send mail failed)
//				} else alert('对不起, 数据错误. 请在试一遍.');				
//			}		
//		});
//		
//		//cancel the submit button default behaviours
////		return false;
//	});	
//});	
