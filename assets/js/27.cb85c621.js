(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(s,i,e){},284:function(s,i,e){"use strict";var t=e(167);e.n(t).a},316:function(s,i,e){"use strict";e.r(i);var t={data:function(){return{isVisible:!1,html_data:"html source"}},props:["source"],methods:{openside:function(){if(this.isVisible)this.closeside();else{void 0!=this.$page.sides&&this.$page.sides(),this.$page.sides=this.singleclose,this.isVisible=!0;var s=this,i=new XMLHttpRequest;i.onload=function(){var i=this.responseXML.body.getElementsByClassName("content");console.log(i),s.html_data=i[0].innerHTML},i.open("GET",this.source),i.responseType="document",i.send()}},singleclose:function(){this.isVisible=!1},closeside:function(){this.singleclose(),this.$page.sides=null}}},n=(e(284),e(0)),o=Object(n.a)(t,function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("div",{staticClass:"sidepanel"},[e("span",{staticClass:"badge warn top badge-code",on:{click:function(i){return i.stopPropagation(),s.openside(i)}}},[s._v("?")]),e("div",{class:[s.isVisible?"container":"container-off"],on:{click:function(s){s.stopPropagation()}}},[e("div",{staticClass:"part__header"},[e("span",{staticClass:"back",on:{click:function(i){return i.stopPropagation(),s.closeside(i)}}},[s._v("↶")]),e("h3",{staticStyle:{display:"inline"}},[s._v(s._s(s.title))])]),e("hr"),e("div",{domProps:{innerHTML:s._s(s.html_data)}})])])},[],!1,null,"519900ac",null);i.default=o.exports}}]);