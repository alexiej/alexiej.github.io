(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(t,e,n){},296:function(t,e,n){"use strict";var r=n(163);n.n(r).a},297:function(t,e){!function(e){"use strict";var n,r=Object.prototype,s=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=y;var h="suspendedStart",_="suspendedYield",v="executing",d="completed",p={},f={};f[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(A([])));m&&m!==r&&s.call(m,a)&&(f=m);var b=L.prototype=x.prototype=Object.create(f);F.prototype=b.constructor=L,L.constructor=F,L[l]=F.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===F||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},C(R.prototype),R.prototype[o]=function(){return this},u.AsyncIterator=R,u.async=function(t,e,n,r){var s=new R(y(t,e,n,r));return u.isGeneratorFunction(e)?s:s.next().then(function(t){return t.done?t.value:s.next()})},C(b),b[l]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=A,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,s){return o.type="throw",o.arg=t,e.next=r,s&&(e.method="next",e.arg=n),!!s}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=s.call(a,"catchLoc"),c=s.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var s=r.arg;E(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function y(t,e,n,r){var s=e&&e.prototype instanceof x?e:x,i=Object.create(s.prototype),a=new W(r||[]);return i._invoke=function(t,e,n){var r=h;return function(s,i){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===s)throw i;return N()}for(n.method=s,n.arg=i;;){var a=n.delegate;if(a){var o=S(a,n);if(o){if(o===p)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var l=w(t,e,n);if("normal"===l.type){if(r=n.done?d:_,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function F(){}function L(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function R(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var o=w(t[n],t,r);if("throw"!==o.type){var l=o.arg,c=l.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){l.value=t,i(l)},a)}a(o.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var s=w(r,t.iterator,e.arg);if("throw"===s.type)return e.method="throw",e.arg=s.arg,e.delegate=null,p;var i=s.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(s.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},338:function(t,e,n){"use strict";n.r(e);n(10),n(21);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,s=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){s=!0,i=t}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(297);function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,s){var i=t.apply(e,n);function a(t,e){try{var n=i[t](e),a=n.value}catch(t){return void s(t)}n.done?r(a):Promise.resolve(a).then(o,l)}function o(t){a("next",t)}function l(t){a("throw",t)}o()})}}var i={data:function(){return{isRun:!1,value:0,isLoading:!1,start:100,bet:1,runs:1e3,run_i:1,roll_i:1,rolls:50,options:{1:{count:1.1,win:.9},2:{count:1.32,win:.75},3:{count:1.5,win:.66},4:{count:1.98,win:.5},5:{count:2,win:.495},6:{count:3,win:.33},7:{count:4,win:.2475}},auto_result:[],isLossReturn:!1,onLossIncrease:100,isWinReturn:!0,onWinIncrease:50,selected:{count:1.98,win:.5},table_algorithm:[],table_result:[],table_last:1,win_last:1,loss_last:1}},created:function(){this.table_algorithm=[];for(var t=1;t<=100;t++)this.table_algorithm.push({number:t,isLossReturn:!0,onLossIncrease:0,isWinReturn:!0,onWinIncrease:0,selected_loss:{count:1.98,win:.5},selected_win:{count:1.98,win:.5}})},methods:{run_single:function(t,e){return Math.random()<=e.win?t*e.count-t:-t},run_auto_mehod:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.run(this.auto_method);case 2:this.auto_result=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),auto_method:function(t,e,n,r,s){var i,a=!1;return n>0&&(this.isWinReturn?(i=this.bet,a=!0):i=e+e*(this.onWinIncrease/100)),n<=0&&(this.isLossReturn?(i=this.bet,a=!0):i=e+e*(this.onLossIncrease/100)),[i,this.selected,a,a]},run_table_method:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.run(this.table_method);case 2:this.table_result=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),table_method:function(t,e,n,r,s){if(s>=this.table_algorithm.length)return[this.bet,this.selected,!0,!0];var i=this.table_algorithm[s-1];return r?i.isLossReturn?[e+e*parseFloat(i.onWinIncrease)/100,i.selected_win,!1,!1]:[this.bet,this.selected,!0,!0]:i.isLossReturn?[this.bet,this.selected,!0,!0]:[e+e*parseFloat(i.onLossIncrease)/100,i.selected_loss,!1,!1]},run:function(){var t=s(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t){return new Promise(function(e){setTimeout(e,t)})},this.isLoading=!0,r=[],t.next=5,n(500);case 5:try{r=this.calculate(e)}catch(t){console.log(t)}return this.isLoading=!1,t.abrupt("return",r);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),run_auto:function(t,e,n,s,i){var a=t,o=0,l=0,c=!1,u=0,h=0,_=[],v=0;this.roll_i=1;for(var d=0;d<s;d++){this.roll_i+=1;var p=e;if(e<a)_.push({run:d,cnt:h,bancrupt:1,worst_lost_cnt:l,cash_before:p,cash:e,bet:v,result:0,highest_bet:o});else{v=a;var f,g,m=this.run_single(a,n);e+=m,v>o&&(o=v),m>0?c?(h++,u++):(c=!0,u=1,h=1):c?(c=!1,u=1,h=1):(h++,u++),!c&&l<h&&(l=h),_.push({run:d,cnt:h,bancrupt:0,worst_lost_cnt:l,cash_before:p,cash:e,bet:v,result:m,highest_bet:o});var b=r(i(_,v,m,c,u),4);a=b[0],n=b[1],f=b[2],g=b[3],f&&!c&&(u=0),g&&c&&(u=0)}}return _},table_get_bet_sum:function(t,e,n){for(var r=parseFloat(this.bet),s=0;s<t.number-1;s++)r+=r*parseFloat(this.table_algorithm[s][e])/100;return r.toFixed(2)},table_get_loss_win_sum:function(t,e,n){var r=this.table_get_bet_sum(t,e),s=this.table_get_loss_sum(t),i=t.number<=1?r*this.selected.count:r*this.table_algorithm[t.number-2][n].count;return i.toFixed(2)+": "+(i-s).toFixed(2)},table_get_win_win_sum:function(t,e,n){var r=this.table_get_bet_sum(t,e);return(t.number<=1?r*this.selected.count:r*this.table_algorithm[t.number-2][n].count).toFixed(2)},table_get_loss_sum:function(t){for(var e=parseFloat(this.bet),n=e,r=0;r<t.number-1;r++)n+=e+=e*parseFloat(this.table_algorithm[r].onLossIncrease)/100;return n.toFixed(2)},table_get_total_win_sum:function(t){var e=parseFloat(this.bet),n=e,r=0;r=n*this.selected.count;for(var s=1;s<t.number;s++)r+=n*this.table_algorithm[s-1].selected_win.count,n+=n*parseFloat(this.table_algorithm[s-1].onWinIncrease)/100;return parseFloat(r-e).toFixed(2)},table_set_last:function(){for(var t=!1,e=!1,n=0;n<this.table_algorithm.length;n++)if(this.table_algorithm[n].isLossReturn&&!t&&(t=!0,this.loss_last=n+1),this.table_algorithm[n].isWinReturn&&!e&&(e=!0,this.win_last=n+1),t&e)return void(this.table_last=n+1);this.table_last=n+1},table_set_loss:function(t,e){if(1==e){for(var n=0;n<t.number;n++)this.table_algorithm[n].isLossReturn=!1;t.isLossReturn=!0;for(n=t.number;n<this.table_algorithm.length;n++)this.table_algorithm[n].isLossReturn=!0}else{for(n=0;n<t.number;n++)this.table_algorithm[n].isLossReturn=!1;t.isLossReturn=!1;for(n=t.number;n<this.table_algorithm.length;n++)this.table_algorithm[n].isLossReturn=!0}this.table_set_last()},table_set_win:function(t,e){if(1==e){for(var n=0;n<t.number;n++)this.table_algorithm[n].isWinReturn=!1;t.isWinReturn=!0;for(n=t.number;n<this.table_algorithm.length;n++)this.table_algorithm[n].isWinReturn=!0}else{for(n=0;n<t.number;n++)this.table_algorithm[n].isWinReturn=!1;t.isWinReturn=!1;for(n=t.number;n<this.table_algorithm.length;n++)this.table_algorithm[n].isWinReturn=!0}this.table_set_last()},get_max:function(t,e,n){var r=0;return t.forEach(function(t){void 0!=t[e]&&t[e][n]>r&&(r=t[e][n])}),r},get_avarage:function(t,e,n){var r=0,s=0;return t.forEach(function(t){void 0!=t[e]&&(s+=t[e][n],r+=1)}),r>0?s/r:0},get_avarage_win_loss:function(t,e){var n=this,r=0,s=0,i=0,a=0;return t.forEach(function(t){if(void 0!=t[e]){var o=t[e].cash;o>n.start&&(r+=o-n.start,s+=1),o<=n.start&&(i+=o-n.start,a+=1)}}),[s>0?r/s:0,s,a>0?i/a:0,a]},get_sum:function(t,e,n){var r=0;return t.forEach(function(t){void 0!=t[e]&&(r+=t[e][n])}),r},calculate:function(){var t=s(regeneratorRuntime.mark(function t(e){var n,s,i,a,o,l,c,u,h,_,v,d,p,f,g,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],s=parseFloat(this.start),i=this.runs,this.run_i=1,a=0;a<parseFloat(this.runs);a++)this.run_i+=1,o=this.run_auto(parseFloat(this.bet),s,this.selected,parseFloat(this.rolls),e),n.push(o);for(l=[],c=0,u=0;u<parseFloat(this.rolls);u++)c=this.get_sum(n,u,"bancrupt"),h=this.get_avarage(n,u,"cash"),_=this.get_avarage(n,u,"result"),v=this.get_avarage_win_loss(n,u),d=r(v,4),p=d[0],f=d[1],g=d[2],m=d[3],l.push({avg_win:p,avg_win_cnt:100*(f+m>0?f/(f+m):0),avg_loss:g,avg_loss_cnt:100*(f+m>0?m/(f+m):0),run:u,cash:h,profit:_,profit_from_start:h-s,avg_bet:this.get_avarage(n,u,"bet"),highest_bet:this.get_max(n,u,"highest_bet"),worst_lost_cnt:this.get_max(n,u,"worst_lost_cnt"),bancrupt:c/i*100});return t.abrupt("return",l);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},a=(n(296),n(0)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"game-vue"}},[n("div",{staticClass:"game-tab"},[n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("Start Cash:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.start,expression:"start"}],attrs:{type:"text"},domProps:{value:t.start},on:{input:function(e){e.target.composing||(t.start=e.target.value)}}})]),n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("START BET AMOUNT:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bet,expression:"bet"}],attrs:{type:"text"},domProps:{value:t.bet},on:{input:function(e){e.target.composing||(t.bet=e.target.value)}}})]),n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("Number of runs:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.runs,expression:"runs"}],attrs:{type:"text"},domProps:{value:t.runs},on:{input:function(e){e.target.composing||(t.runs=e.target.value)}}})])]),n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("GAME:")]),n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,function(e){return n("option",{domProps:{value:e}},[t._v("multiply: "+t._s(e.count.toFixed(2))+"x, win chance: "+t._s((100*e.win).toFixed(2))+"%")])}))])]),n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("Number of rolls:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rolls,expression:"rolls"}],attrs:{type:"text"},domProps:{value:t.rolls},on:{input:function(e){e.target.composing||(t.rolls=e.target.value)}}})])])]),t.isLoading?n("span",{staticClass:"loading-screen"},[n("h1",[t._v("Running... ")]),n("div",{staticClass:"loader"})]):t._e(),n("tabs",[n("tab",{staticClass:"game-tab",attrs:{id:"auto",name:"AUTOMATED BETTING",selected:!0}},[n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("On loss:")]),n("div",{staticClass:"win-loss"},[n("span",{staticClass:"button",class:{"is-danger":t.isLossReturn},on:{click:function(e){t.isLossReturn=!0}}},[t._v("Reset to base")]),n("span",{staticClass:"button",class:{"is-danger":!t.isLossReturn},on:{click:function(e){t.isLossReturn=!1}}},[t._v("Increase by %:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.onLossIncrease,expression:"onLossIncrease"}],attrs:{type:"text"},domProps:{value:t.onLossIncrease},on:{input:function(e){e.target.composing||(t.onLossIncrease=e.target.value)}}})])]),n("div",{staticClass:"info"},[n("span",{staticClass:"title"},[t._v("On win:")]),n("div",{staticClass:"win-loss"},[n("span",{staticClass:"button",class:{"is-success":t.isWinReturn},on:{click:function(e){t.isWinReturn=!0}}},[t._v("Reset to base")]),n("span",{staticClass:"button",class:{"is-success":!t.isWinReturn},on:{click:function(e){t.isWinReturn=!1}}},[t._v("Increase by %:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.onWinIncrease,expression:"onWinIncrease"}],attrs:{type:"text"},domProps:{value:t.onWinIncrease},on:{input:function(e){e.target.composing||(t.onWinIncrease=e.target.value)}}})])])]),n("a",{staticClass:"button is-primary",on:{click:t.run_auto_mehod}},[t._v("RUN")]),n("table",{staticStyle:{"max-height":"400px"}},[n("thead",[n("tr",[n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Run")]),n("th",[t._v("Avg Cash")]),n("th",{staticStyle:{width:"1%"}},[t._v("Avg Profit from start")]),n("th",[t._v("Avg win")]),n("th",[t._v("Avg loss")]),n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Avg Single Profit")]),n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Avg Highest Bet")]),n("th",{staticStyle:{width:"1%",padding:"0.5rem"}},[t._v("Avg Highest Losses Cnt")]),n("th",{staticStyle:{width:"1%",padding:"0.5rem"}},[t._v("Bancrupt %")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"1"}},[t._v("0")]),n("td",{attrs:{colspan:"8"}},[t._v(t._s(this.start))])]),t._l(this.auto_result,function(e){return n("tr",{staticStyle:{"text-align":"right"}},[n("td",[t._v(t._s(e.run+1))]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit_from_start>0?"green":"red"}},[t._v(t._s(parseFloat(e.cash).toFixed(2))+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit_from_start>0?"green":"red"}},[t._v(t._s(parseFloat(e.profit_from_start).toFixed(2))+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:"green"}},[t._v(t._s(parseFloat(e.avg_win).toFixed(2)+" "+parseFloat(e.avg_win_cnt).toFixed(2)+"%")+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:"red"}},[t._v(t._s(parseFloat(e.avg_loss).toFixed(2)+" "+parseFloat(e.avg_loss_cnt).toFixed(2)+"%")+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit>0?"green":"red"}},[t._v(t._s(parseFloat(e.profit).toFixed(2))+" ")]),n("td",{staticStyle:{width:"1%","text-align":"right"}},[t._v(t._s(parseFloat(e.highest_bet).toFixed(2)))]),n("td",{staticStyle:{width:"1%"}},[t._v(t._s(parseFloat(e.worst_lost_cnt))+" ")]),n("td",{staticStyle:{width:"1%"}},[t._v(t._s(parseFloat(e.bancrupt).toFixed(2))+" %")])])})],2)])]),n("tab",{staticClass:"game-tab",attrs:{name:"LABOUCHERE"}},[n("h1",[t._v("How much we do it for")])]),n("tab",{staticClass:"game-tab",attrs:{id:"table",name:"TABLE SYSTEM"}},[n("div",{staticClass:"header-table"},t._l(t.table_algorithm,function(e){return e.number<=t.table_last?n("div",{staticClass:"table_line"},[n("div",{staticClass:"loss_line",style:{visibility:e.number<=t.loss_last?"visible":"hidden"}},[1==e.number?n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("span",{staticClass:"title",staticStyle:{"margin-right":"8rem"}},[t._v("On Loss #:")])])]):t._e(),e.number>1?n("div",{staticClass:"bet-win",staticStyle:{"margin-bottom":"0.5rem"}},[n("red",[t._v("BET: ")]),t._v(t._s(t.table_get_bet_sum(e,"onLossIncrease"))+"\n              "),n("span",{staticStyle:{color:"#00d1b2"}},[t._v("TO WIN:")]),t._v(" "+t._s(t.table_get_loss_win_sum(e,"onLossIncrease","selected_loss"))+"\n            ")],1):t._e(),n("div",{staticClass:"header"},[n("div",{staticClass:"number"},[t._v("\n                "+t._s(e.number)+"\n              ")]),n("span",[n("red",[t._v("LOSS: ")]),t._v(t._s(t.table_get_loss_sum(e,"onLossIncrease"))+"\n              ")],1)]),n("div",{staticClass:"win-loss"},[n("span",{staticClass:"button",class:{"is-danger":e.isLossReturn},on:{click:function(n){t.table_set_loss(e,!0)}}},[t._v("Reset to base")]),n("span",{staticClass:"button",class:{"is-danger":!e.isLossReturn},on:{click:function(n){t.table_set_loss(e,!1)}}},[t._v("Increase by %:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.onLossIncrease,expression:"auto.onLossIncrease"}],attrs:{type:"text"},domProps:{value:e.onLossIncrease},on:{input:function(n){n.target.composing||t.$set(e,"onLossIncrease",n.target.value)}}})]),e.number<t.loss_last?n("div",{staticClass:"header"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_loss,expression:"auto.selected_loss"}],on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"selected_loss",n.target.multiple?r:r[0])}}},t._l(t.options,function(e){return n("option",{domProps:{value:e}},[t._v("multiply: "+t._s(e.count.toFixed(2))+"x, win chance: "+t._s((100*e.win).toFixed(2))+"%")])}))])]):t._e()]),n("div",{staticClass:"win_line",style:{visibility:e.number<=t.win_last?"visible":"hidden"}},[1==e.number?n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("span",{staticClass:"title",staticStyle:{"margin-right":"1rem"}},[t._v("On Win #:")])])]):t._e(),e.number>1?n("div",{staticClass:"bet-win",staticStyle:{"margin-bottom":"0.5rem"}},[n("red",[t._v("BET: ")]),t._v(t._s(t.table_get_bet_sum(e,"onWinIncrease"))+"\n              "),n("span",{staticStyle:{color:"#00d1b2"}},[t._v("TO WIN:")]),t._v(" "+t._s(t.table_get_win_win_sum(e,"onWinIncrease","selected_win"))+"\n            ")],1):t._e(),n("div",{staticClass:"header"},[n("div",{staticClass:"number"},[t._v("\n                "+t._s(e.number)+"\n              ")]),n("span",[n("span",{staticStyle:{color:"#00d1b2"}},[t._v("WIN: ")]),t._v(t._s(t.table_get_total_win_sum(e))+"\n              ")])]),n("div",{staticClass:"win-loss"},[n("span",{staticClass:"button",class:{"is-success":e.isWinReturn},on:{click:function(n){t.table_set_win(e,!0)}}},[t._v("Reset to base")]),n("span",{staticClass:"button",class:{"is-success":!e.isWinReturn},on:{click:function(n){t.table_set_win(e,!1)}}},[t._v("Increase by %:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.onWinIncrease,expression:"auto.onWinIncrease"}],attrs:{type:"text"},domProps:{value:e.onWinIncrease},on:{input:function(n){n.target.composing||t.$set(e,"onWinIncrease",n.target.value)}}})]),e.number<t.win_last?n("div",{staticClass:"header"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_win,expression:"auto.selected_win"}],on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"selected_win",n.target.multiple?r:r[0])}}},t._l(t.options,function(e){return n("option",{domProps:{value:e}},[t._v("multiply: "+t._s(e.count.toFixed(2))+"x, win chance: "+t._s((100*e.win).toFixed(2))+"%")])}))])]):t._e()])]):t._e()})),n("a",{staticClass:"button is-primary",on:{click:t.run_table_method}},[t._v("RUN")]),n("table",{staticStyle:{"max-height":"400px"}},[n("thead",[n("tr",[n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Run")]),n("th",[t._v("Avg Cash")]),n("th",{staticStyle:{width:"1%"}},[t._v("Avg Profit from start")]),n("th",[t._v("Avg win")]),n("th",[t._v("Avg loss")]),n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Avg Single Profit")]),n("th",{staticStyle:{width:"1%",padding:"0"}},[t._v("Avg Highest Bet")]),n("th",{staticStyle:{width:"1%",padding:"0.5rem"}},[t._v("Avg Highest Losses Cnt")]),n("th",{staticStyle:{width:"1%",padding:"0.5rem"}},[t._v("Bancrupt %")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"1"}},[t._v("0")]),n("td",{attrs:{colspan:"8"}},[t._v(t._s(this.start))])]),t._l(this.table_result,function(e){return n("tr",{staticStyle:{"text-align":"right"}},[n("td",[t._v(t._s(e.run+1))]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit_from_start>0?"green":"red"}},[t._v(t._s(parseFloat(e.cash).toFixed(2))+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit_from_start>0?"green":"red"}},[t._v(t._s(parseFloat(e.profit_from_start).toFixed(2))+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:"green"}},[t._v(t._s(parseFloat(e.avg_win).toFixed(2)+" "+parseFloat(e.avg_win_cnt).toFixed(2)+"%")+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:"red"}},[t._v(t._s(parseFloat(e.avg_loss).toFixed(2)+" "+parseFloat(e.avg_loss_cnt).toFixed(2)+"%")+" ")]),n("td",{staticStyle:{"text-align":"right"},style:{color:e.profit>0?"green":"red"}},[t._v(t._s(parseFloat(e.profit).toFixed(2))+" ("+t._s(parseFloat(e.avg_bet).toFixed(2))+")")]),n("td",{staticStyle:{width:"1%","text-align":"right"}},[t._v(t._s(parseFloat(e.highest_bet).toFixed(2)))]),n("td",{staticStyle:{width:"1%"}},[t._v(t._s(parseFloat(e.worst_lost_cnt))+" ")]),n("td",{staticStyle:{width:"1%"}},[t._v(t._s(parseFloat(e.bancrupt).toFixed(2))+" %")])])})],2)])])],1)],1)},[],!1,null,null,null);e.default=o.exports}}]);