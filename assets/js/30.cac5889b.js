(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{177:function(s,i,t){},571:function(s,i,t){"use strict";var e=t(177);t.n(e).a},606:function(s,i,t){"use strict";t.r(i);var e={data:function(){return{isVisible:!1,html_data:"html source"}},props:["title","source"],methods:{openside:function(){if(this.isVisible)this.closeside();else{void 0!=this.$page.sides&&this.$page.sides(),this.$page.sides=this.singleclose,this.isVisible=!0;var s=this,i=new XMLHttpRequest;i.onload=function(){var i=this.responseXML.body.getElementsByClassName("content");console.log(i),s.html_data=i[0].innerHTML},i.open("GET",this.source),i.responseType="document",i.send()}},singleclose:function(){this.isVisible=!1},closeside:function(){this.singleclose(),this.$page.sides=null}}},n=(t(571),t(0)),o=Object(n.a)(e,function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"sidepanel"},[t("span",{staticClass:"text",on:{click:function(i){return i.stopPropagation(),s.openside(i)}}},[s._v(s._s(s.title))]),t("div",{class:[s.isVisible?"container":"container-off"],on:{click:function(s){s.stopPropagation()}}},[t("div",{staticClass:"part__header"},[t("span",{staticClass:"back",on:{click:function(i){return i.stopPropagation(),s.closeside(i)}}},[s._v("↶")]),t("h3",{staticStyle:{display:"inline"}},[s._v(s._s(s.title))])]),t("hr"),t("div",{domProps:{innerHTML:s._s(s.html_data)}})])])},[],!1,null,null,null);i.default=o.exports}}]);