(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1001:function(e,t,a){"use strict";a.r(t);var i={data:function(){return{x1:.2,x2:.3,x3:.8,w1:.2,w2:.3,w3:.5,bb:.1}},computed:{summ:function(){return Math.round(1e3*(this.x1*this.w1+this.x2*this.w2+this.x3*this.w3+parseFloat(this.bb)))/1e3},activ:function(){return Math.round(1/(1+Math.exp(-this.summ))*1e3)/1e3}},methods:{round:function(e){return Math.round(1e3*e)/1e3}}},s=(a(928),a(1)),n=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sigmoid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.x1,expression:"x1"}],staticClass:"x1 red",attrs:{placeholder:"x1",size:"mini"},domProps:{value:e.x1},on:{input:function(t){t.target.composing||(e.x1=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.x2,expression:"x2"}],staticClass:"x2 green",attrs:{placeholder:"x2",size:"mini"},domProps:{value:e.x2},on:{input:function(t){t.target.composing||(e.x2=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.x3,expression:"x3"}],staticClass:"x3 blue",attrs:{placeholder:"x3",size:"mini"},domProps:{value:e.x3},on:{input:function(t){t.target.composing||(e.x3=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w1,expression:"w1"}],staticClass:"w1 red",attrs:{placeholder:"w1",size:"mini"},domProps:{value:e.w1},on:{input:function(t){t.target.composing||(e.w1=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w2,expression:"w2"}],staticClass:"w2 green",attrs:{placeholder:"w2",size:"mini"},domProps:{value:e.w2},on:{input:function(t){t.target.composing||(e.w2=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w3,expression:"w3"}],staticClass:"w3 blue",attrs:{placeholder:"w3",size:"mini"},domProps:{value:e.w3},on:{input:function(t){t.target.composing||(e.w3=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.bb,expression:"bb"}],staticClass:"b",attrs:{placeholder:"b",size:"mini"},domProps:{value:e.bb},on:{input:function(t){t.target.composing||(e.bb=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w1,expression:"w1"}],staticClass:"w1a red",attrs:{placeholder:"w1",size:"mini"},domProps:{value:e.w1},on:{input:function(t){t.target.composing||(e.w1=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w2,expression:"w2"}],staticClass:"w2a green",attrs:{placeholder:"w2",size:"mini"},domProps:{value:e.w2},on:{input:function(t){t.target.composing||(e.w2=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.w3,expression:"w3"}],staticClass:"w3a blue",attrs:{placeholder:"w3",size:"mini"},domProps:{value:e.w3},on:{input:function(t){t.target.composing||(e.w3=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.x1,expression:"x1"}],staticClass:"x1a red",attrs:{placeholder:"x1",size:"mini"},domProps:{value:e.x1},on:{input:function(t){t.target.composing||(e.x1=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.x2,expression:"x2"}],staticClass:"x2a green",attrs:{placeholder:"x2",size:"mini"},domProps:{value:e.x2},on:{input:function(t){t.target.composing||(e.x2=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.x3,expression:"x3"}],staticClass:"x3a blue",attrs:{placeholder:"x3",size:"mini"},domProps:{value:e.x3},on:{input:function(t){t.target.composing||(e.x3=t.target.value)}}}),a("input",{staticClass:"m1 red",attrs:{readonly:"",size:"mini"},domProps:{value:e.round(this.x1*this.w1)}}),a("input",{staticClass:"m2 green",attrs:{readonly:"",size:"mini"},domProps:{value:e.round(this.x2*this.w2)}}),a("input",{staticClass:"m3 blue",attrs:{readonly:"",size:"mini"},domProps:{value:e.round(this.x3*this.w3)}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.bb,expression:"bb"}],staticClass:"mb",attrs:{placeholder:"b",size:"mini"},domProps:{value:e.bb},on:{input:function(t){t.target.composing||(e.bb=t.target.value)}}}),a("input",{staticClass:"msum",style:{color:e.summ>0?"green":"red"},attrs:{readonly:"",size:"mini"},domProps:{value:e.summ}}),a("img",{staticClass:"image",attrs:{src:e.$withBase("/deepnn/sigmoid.png"),alt:"Card image cap",width:"740",height:"578"}}),a("span",{staticClass:"answer"},[e._v("σ = "+e._s(e.activ)+" ")])])},[],!1,null,null,null);t.default=n.exports},227:function(e,t,a){},928:function(e,t,a){"use strict";var i=a(227);a.n(i).a}}]);