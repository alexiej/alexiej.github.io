(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{12:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},1221:function(t,n,r){"use strict";r.r(n);var i=r(50),o={data:function(){return{dn:i.a}}},e=r(1),u=Object(e.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Hello world\n\n  "+this._s(this.dn.X[0])+"\n")])},[],!1,null,null,null);n.default=u.exports},13:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},14:function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},15:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},16:function(t,n,r){var i=r(26),o=r(34);t.exports=r(14)?function(t,n,r){return i.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},17:function(t,n,r){var i=r(23)("wks"),o=r(22),e=r(12).Symbol,u="function"==typeof e;(t.exports=function(t){return i[t]||(i[t]=u&&e[t]||(u?e:o)("Symbol."+t))}).store=i},18:function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},19:function(t,n,r){var i=r(12),o=r(18),e=r(16),u=r(28),c=r(25),f=function(t,n,r){var s,a,h,p,l=t&f.F,v=t&f.G,d=t&f.S,y=t&f.P,g=t&f.B,W=v?i:d?i[n]||(i[n]={}):(i[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),m=x.prototype||(x.prototype={});for(s in v&&(r=n),r)h=((a=!l&&W&&void 0!==W[s])?W:r)[s],p=g&&a?c(h,i):y&&"function"==typeof h?c(Function.call,h):h,W&&u(W,s,h,t&f.U),x[s]!=h&&e(x,s,p),y&&m[s]!=h&&(m[s]=h)};i.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},20:function(t,n,r){var i=r(31),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},21:function(t,n,r){var i=r(13);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},22:function(t,n){var r=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+i).toString(36))}},23:function(t,n,r){var i=r(18),o=r(12),e=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:i.version,mode:r(35)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},24:function(t,n,r){var i=r(32);t.exports=function(t){return Object(i(t))}},25:function(t,n,r){var i=r(30);t.exports=function(t,n,r){if(i(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,i){return t.call(n,r,i)};case 3:return function(r,i,o){return t.call(n,r,i,o)}}return function(){return t.apply(n,arguments)}}},26:function(t,n,r){var i=r(21),o=r(38),e=r(37),u=Object.defineProperty;n.f=r(14)?Object.defineProperty:function(t,n,r){if(i(t),n=e(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},27:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},28:function(t,n,r){var i=r(12),o=r(16),e=r(29),u=r(22)("src"),c=r(40),f=(""+c).split("toString");r(18).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var s="function"==typeof r;s&&(e(r,"name")||o(r,"name",n)),t[n]!==r&&(s&&(e(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===i?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},29:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},30:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},31:function(t,n){var r=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:r)(t)}},32:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},33:function(t,n,r){"use strict";var i=r(15);t.exports=function(t,n){return!!t&&i(function(){n?t.call(null,function(){},1):t.call(null)})}},34:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},35:function(t,n){t.exports=!1},36:function(t,n,r){var i=r(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},37:function(t,n,r){var i=r(13);t.exports=function(t,n){if(!i(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!i(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!i(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!i(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},38:function(t,n,r){t.exports=!r(14)&&!r(15)(function(){return 7!=Object.defineProperty(r(39)("div"),"a",{get:function(){return 7}}).a})},39:function(t,n,r){var i=r(13),o=r(12).document,e=i(o)&&i(o.createElement);t.exports=function(t){return e?o.createElement(t):{}}},40:function(t,n,r){t.exports=r(23)("native-function-to-string",Function.toString)},41:function(t,n,r){var i=r(25),o=r(36),e=r(24),u=r(20),c=r(44);t.exports=function(t,n){var r=1==t,f=2==t,s=3==t,a=4==t,h=6==t,p=5==t||h,l=n||c;return function(n,c,v){for(var d,y,g=e(n),W=o(g),x=i(c,v,3),m=u(W.length),A=0,w=r?l(n,m):f?l(n,0):void 0;m>A;A++)if((p||A in W)&&(y=x(d=W[A],A,g),t))if(r)w[A]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return A;case 2:w.push(d)}else if(a)return!1;return h?-1:s||a?a:w}}},42:function(t,n,r){"use strict";var i=r(19),o=r(41)(1);i(i.P+i.F*!r(33)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},43:function(t,n,r){var i=r(27);t.exports=Array.isArray||function(t){return"Array"==i(t)}},44:function(t,n,r){var i=r(45);t.exports=function(t,n){return new(i(t))(n)}},45:function(t,n,r){var i=r(13),o=r(43),e=r(17)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),i(n)&&null===(n=n[e])&&(n=void 0)),void 0===n?Array:n}},50:function(t,n,r){"use strict";r.d(n,"a",function(){return y});r(51),r(42);function i(t,n){for(var r=Array(t),i=0;i<t;i++){r[i]=Array(n);for(var o=0;o<n;o++)r[i][o]=0}return r}function o(t,n){return t.map(function(t,r){return e(n).map(function(n,r){return function(t,n){return t.map(function(r,i){return t[i]*n[i]}).reduce(function(t,n){return t+n})}(t,n)})})}function e(t){return t[0].map(function(n,r){return t.map(function(t,n){return t[r]})})}function u(t,n,r){for(var i=o(n,r),e=0;e<i.length;e++)for(var u=0;u<i[e].length;u++)t[e][u]=i[e][u]}function c(t,n){for(var r=0;r<n.length;r++)for(var i=0;i<n[r].length;i++)t[r][i]=(o=n[r][i],1/(1+Math.pow(Math.E,-o)));var o}function f(t,n){return-n*Math.log(t)-(1-n)*Math.log(1-t)}function s(t,n,r){for(var i=0;i<4;i++)t[0][i]=f(n[0][i],r[0][i])}function a(t,n){return-(n/t-(1-n)/(1-t))}function h(t){return t*(1-t)}function p(t,n){for(var r=e(n),i=0;i<r.length;i++)for(var o=0;o<r[i].length;o++)t[i][o]=r[i][o]}function l(t){for(var n=0,r=0;r<t.length;r++)n+=t[r];return n/t.length}function v(t,n,r){for(var i=0;i<r.length;i++)for(var o=0;o<r[i].length;o++)t[i][o]=n*r[i][o]}function d(t,n,r){for(var i=0;i<n.length;i++)for(var o=0;o<n[i].length;o++)t[i][o]=n[i][o]-r[i][o]}var y=new(r(0).a)({data:function(){return{X:[[.1,.2,.3,.4],[.5,.6,.7,.8]],W1:[[.5,.5],[.6,.7],[.6,.7]],W2:[[.1,.2,.3]],Z1:i(3,4),A1:i(3,4),Z2:i(1,4),A2:i(1,4),L1:i(1,4),dL:i(1,4),dA2:i(1,4),dZ2:i(1,4),A1T:i(4,3),dW2:i(1,3),W2T:i(3,1),dA1:i(3,4),dZ1s:i(3,4),dZ1:i(3,4),XT:i(4,2),dW1:i(3,2),Y:i(1,4),J:0,alpha:.1,adW1:i(3,2),W1p:i(3,2),adW2:i(1,3),W2p:i(1,3),Lp:i(1,4),Jp:0,times:1}},created:function(){this.change()},methods:{update:function(){for(var t=0;t<this.times;t++){for(var n=0;n<this.W1.length;n++)for(var r=0;r<this.W1[n].length;r++)this.W1[n][r]=this.W1p[n][r];for(var i=0;i<this.W2.length;i++)for(var o=0;o<this.W2[i].length;o++)this.W2[i][o]=this.W2p[i][o];this.change()}},change:function(){u(this.Z1,this.W1,this.X),c(this.A1,this.Z1),u(this.Z2,this.W2,this.A1),c(this.A2,this.Z2),function(t,n){for(var r=0;r<4;r++)t[0][r]=parseFloat(3*n[0][r]*n[1][r]-2*n[0][r]>0?1:0)}(this.Y,this.X),s(this.L1,this.A2,this.Y),this.J=l(this.L1[0]),function(t,n,r){for(var i=0;i<4;i++)t[0][i]=a(n[0][i],r[0][i])}(this.dL,this.A2,this.Y),function(t,n){for(var r=0;r<4;r++)t[0][r]=h(n[0][r])}(this.dA2,this.A2),function(t,n,r){for(var i=0;i<4;i++)t[0][i]=n[0][i]*r[0][i]}(this.dZ2,this.dL,this.dA2),p(this.A1T,this.A1),u(this.dW2,this.dZ2,this.A1T),p(this.W2T,this.W2),u(this.dA1,this.W2T,this.dZ2),function(t,n){for(var r=0;r<3;r++)for(var i=0;i<4;i++)t[r][i]=n[r][i]*(1-n[r][i])}(this.dZ1s,this.A1),function(t,n,r){for(var i=0;i<n.length;i++)for(var o=0;o<n[i].length;o++)t[i][o]=n[i][o]*r[i][o]}(this.dZ1,this.dA1,this.dZ1s),p(this.XT,this.X),u(this.dW1,this.dZ1,this.XT),v(this.adW1,this.alpha,this.dW1),d(this.W1p,this.W1,this.adW1),v(this.adW2,this.alpha,this.dW2),d(this.W2p,this.W2,this.adW2);var t=i(3,4),n=i(3,4);u(t,this.W1p,this.X),c(n,t);var r=i(1,4),o=i(1,4);u(r,this.W2p,n),c(o,r),s(this.Lp,o,this.Y),this.Jp=l(this.Lp[0])}}})},51:function(t,n,r){"use strict";var i=r(19),o=r(52);i(i.P+i.F*!r(33)([].reduce,!0),"Array",{reduce:function(t){return o(this,t,arguments.length,arguments[1],!1)}})},52:function(t,n,r){var i=r(30),o=r(24),e=r(36),u=r(20);t.exports=function(t,n,r,c,f){i(n);var s=o(t),a=e(s),h=u(s.length),p=f?h-1:0,l=f?-1:1;if(r<2)for(;;){if(p in a){c=a[p],p+=l;break}if(p+=l,f?p<0:h<=p)throw TypeError("Reduce of empty array with no initial value")}for(;f?p>=0:h>p;p+=l)p in a&&(c=n(c,a[p],p,s));return c}}}]);