(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1015:function(t,n,i){"use strict";var r=i(236);i.n(r).a},1082:function(t,n,i){"use strict";i.r(n);var r=i(192),s={data:function(){return{dn:r.a}},mounted:function(){},methods:{}},e=(i(1015),i(1)),a=Object(e.a)(s,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"deepnn-05"},[i("div",{staticClass:"ma1"},t._l(3,function(n){return i("div",{staticClass:"mx-row"},t._l(4,function(r){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.dn.A1[n-1][r-1],expression:"dn.A1[i-1][j-1]"}],staticClass:"mb",attrs:{title:t.dn.A1[n-1][r-1],size:"mini"},domProps:{value:t.dn.A1[n-1][r-1]},on:{input:[function(i){i.target.composing||t.$set(t.dn.A1[n-1],r-1,i.target.value)},t.dn.change]}})}))})),i("div",{staticClass:"mda1"},t._l(3,function(n){return i("div",{staticClass:"mx-row"},t._l(4,function(r){return i("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.dn.dA1[n-1][r-1],expression:"dn.dA1[i-1][j-1]"}],key:t.dn.dA1[n-1][r-1],staticClass:"mb",attrs:{readonly:"",title:t.dn.dA1[n-1][r-1],size:"mini"},domProps:{value:t.dn.dA1[n-1][r-1]},on:{input:[function(i){i.target.composing||t.$set(t.dn.dA1[n-1],r-1,i.target.value)},t.dn.change]}})])}))})),i("div",{staticClass:"mdz1s"},t._l(3,function(n){return i("div",{staticClass:"mx-row"},t._l(4,function(r){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.dn.dZ1s[n-1][r-1],expression:"dn.dZ1s[i-1][j-1]"}],staticClass:"mb",attrs:{readonly:"",title:t.dn.dZ1s[n-1][r-1],size:"mini"},domProps:{value:t.dn.dZ1s[n-1][r-1]},on:{input:[function(i){i.target.composing||t.$set(t.dn.dZ1s[n-1],r-1,i.target.value)},t.dn.change]}})}))})),i("div",{staticClass:"mdz1"},t._l(3,function(n){return i("div",{staticClass:"mx-row"},t._l(4,function(r){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.dn.dZ1[n-1][r-1],expression:"dn.dZ1[i-1][j-1]"}],staticClass:"mb",attrs:{readonly:"",title:t.dn.dZ1[n-1][r-1],size:"mini"},domProps:{value:t.dn.dZ1[n-1][r-1]},on:{input:[function(i){i.target.composing||t.$set(t.dn.dZ1[n-1],r-1,i.target.value)},t.dn.change]}})}))})),i("img",{staticClass:"image",attrs:{src:t.$withBase("/deepnn/deepn05.png"),alt:"Deepn Network",width:"641",height:"660"}})])},[],!1,null,null,null);n.default=a.exports},190:function(t,n,i){var r=i(24),s=i(23),e=i(50),a=i(49);t.exports=function(t,n,i,o,d){r(n);var u=s(t),h=e(u),c=a(u.length),f=d?c-1:0,l=d?-1:1;if(i<2)for(;;){if(f in h){o=h[f],f+=l;break}if(f+=l,d?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;d?f>=0:c>f;f+=l)f in h&&(o=n(o,h[f],f,u));return o}},191:function(t,n,i){"use strict";var r=i(4),s=i(190);r(r.P+r.F*!i(17)([].reduce,!0),"Array",{reduce:function(t){return s(this,t,arguments.length,arguments[1],!1)}})},192:function(t,n,i){"use strict";i.d(n,"a",function(){return g});i(191),i(22);function r(t,n){for(var i=Array(t),r=0;r<t;r++){i[r]=Array(n);for(var s=0;s<n;s++)i[r][s]=0}return i}function s(t,n){return t.map(function(t,i){return e(n).map(function(n,i){return function(t,n){return t.map(function(i,r){return t[r]*n[r]}).reduce(function(t,n){return t+n})}(t,n)})})}function e(t){return t[0].map(function(n,i){return t.map(function(t,n){return t[i]})})}function a(t,n,i){for(var r=s(n,i),e=0;e<r.length;e++)for(var a=0;a<r[e].length;a++)t[e][a]=r[e][a]}function o(t){return 1/(1+Math.pow(Math.E,-t))}function d(t,n){for(var i=0;i<n.length;i++)for(var r=0;r<n[i].length;r++)t[i][r]=o(n[i][r])}function u(t,n){return-n*Math.log(t)-(1-n)*Math.log(1-t)}function h(t,n,i){for(var r=0;r<4;r++)t[0][r]=u(n[0][r],i[0][r])}function c(t,n){return-(n/t-(1-n)/(1-t))}function f(t){return t*(1-t)}function l(t,n){for(var i=e(n),r=0;r<i.length;r++)for(var s=0;s<i[r].length;s++)t[r][s]=i[r][s]}function v(t){for(var n=0,i=0;i<t.length;i++)n+=t[i];return n/t.length}function p(t,n,i){for(var r=0;r<i.length;r++)for(var s=0;s<i[r].length;s++)t[r][s]=n*i[r][s]}function m(t,n,i){for(var r=0;r<n.length;r++)for(var s=0;s<n[r].length;s++)t[r][s]=n[r][s]-i[r][s]}var g=new(i(0).a)({data:function(){return{X:[[.1,.2,.3,.4],[.5,.6,.7,.8]],W1:[[.5,.5],[.6,.7],[.6,.7]],W2:[[.1,.2,.3]],Z1:r(3,4),A1:r(3,4),Z2:r(1,4),A2:r(1,4),L1:r(1,4),dL:r(1,4),dA2:r(1,4),dZ2:r(1,4),A1T:r(4,3),dW2:r(1,3),W2T:r(3,1),dA1:r(3,4),dZ1s:r(3,4),dZ1:r(3,4),XT:r(4,2),dW1:r(3,2),Y:r(1,4),J:0,alpha:.1,adW1:r(3,2),W1p:r(3,2),adW2:r(1,3),W2p:r(1,3),Lp:r(1,4),Jp:0,times:1}},created:function(){this.change()},methods:{update:function(){for(var t=0;t<this.times;t++){for(var n=0;n<this.W1.length;n++)for(var i=0;i<this.W1[n].length;i++)this.W1[n][i]=this.W1p[n][i];for(var r=0;r<this.W2.length;r++)for(var s=0;s<this.W2[r].length;s++)this.W2[r][s]=this.W2p[r][s];this.change()}},change:function(){a(this.Z1,this.W1,this.X),d(this.A1,this.Z1),a(this.Z2,this.W2,this.A1),d(this.A2,this.Z2),function(t,n){for(var i=0;i<4;i++)t[0][i]=parseFloat(3*n[0][i]*n[1][i]-2*n[0][i]>0?1:0)}(this.Y,this.X),h(this.L1,this.A2,this.Y),this.J=v(this.L1[0]),function(t,n,i){for(var r=0;r<4;r++)t[0][r]=c(n[0][r],i[0][r])}(this.dL,this.A2,this.Y),function(t,n){for(var i=0;i<4;i++)t[0][i]=f(n[0][i])}(this.dA2,this.A2),function(t,n,i){for(var r=0;r<4;r++)t[0][r]=n[0][r]*i[0][r]}(this.dZ2,this.dL,this.dA2),l(this.A1T,this.A1),a(this.dW2,this.dZ2,this.A1T),l(this.W2T,this.W2),a(this.dA1,this.W2T,this.dZ2),function(t,n){for(var i=0;i<3;i++)for(var r=0;r<4;r++)t[i][r]=n[i][r]*(1-n[i][r])}(this.dZ1s,this.A1),function(t,n,i){for(var r=0;r<n.length;r++)for(var s=0;s<n[r].length;s++)t[r][s]=n[r][s]*i[r][s]}(this.dZ1,this.dA1,this.dZ1s),l(this.XT,this.X),a(this.dW1,this.dZ1,this.XT),p(this.adW1,this.alpha,this.dW1),m(this.W1p,this.W1,this.adW1),p(this.adW2,this.alpha,this.dW2),m(this.W2p,this.W2,this.adW2);var t=r(3,4),n=r(3,4);a(t,this.W1p,this.X),d(n,t);var i=r(1,4),s=r(1,4);a(i,this.W2p,n),d(s,i),h(this.Lp,s,this.Y),this.Jp=v(this.Lp[0])}}})},236:function(t,n,i){}}]);