(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],_=0,f=[];_<o.length;_++)r=o[_],a[r]&&f.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06de":function(t,e,n){},"075a":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("55dd"),core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__),C_PUBLIC_PROJECTS_FINAL_TensorTraffic_tensorjs_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("3040"),C_PUBLIC_PROJECTS_FINAL_TensorTraffic_tensorjs_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("6bde"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__),Genetic=Genetic||function(){var Serialization={stringify:function(t){return JSON.stringify(t,function(t,e){return e instanceof Function||"function"==typeof e?"__func__:"+e.toString():e instanceof RegExp?"__regex__:"+e:e})},parse:function parse(str){return JSON.parse(str,function(key,value){return"string"!=typeof value?value:0===value.lastIndexOf("__func__:",0)?eval("("+value.slice(9)+")"):0===value.lastIndexOf("__regex__:",0)?eval("("+value.slice(10)+")"):value})}},Clone=function(t){return null==t||"object"!=Object(C_PUBLIC_PROJECTS_FINAL_TensorTraffic_tensorjs_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_3__["a"])(t)?t:JSON.parse(JSON.stringify(t))},Optimize={Maximize:function(t,e){return t>=e},Minimize:function(t,e){return t<e}},Select1={Tournament2:function(t){var e=t.length,n=t[Math.floor(Math.random()*e)],i=t[Math.floor(Math.random()*e)];return this.optimize(n.fitness,i.fitness)?n.entity:i.entity},Tournament3:function(t){var e=t.length,n=t[Math.floor(Math.random()*e)],i=t[Math.floor(Math.random()*e)],a=t[Math.floor(Math.random()*e)],s=this.optimize(n.fitness,i.fitness)?n:i;return s=this.optimize(s.fitness,a.fitness)?s:a,s.entity},Fittest:function(t){return t[0].entity},Random:function(t){return t[Math.floor(Math.random()*t.length)].entity},RandomLinearRank:function(t){return this.internalGenState["rlr"]=this.internalGenState["rlr"]||0,t[Math.floor(Math.random()*Math.min(t.length,this.internalGenState["rlr"]++))].entity},Sequential:function(t){return this.internalGenState["seq"]=this.internalGenState["seq"]||0,t[this.internalGenState["seq"]++%t.length].entity}},Select2={Tournament2:function(t){return[Select1.Tournament2.call(this,t),Select1.Tournament2.call(this,t)]},Tournament3:function(t){return[Select1.Tournament3.call(this,t),Select1.Tournament3.call(this,t)]},Random:function(t){return[Select1.Random.call(this,t),Select1.Random.call(this,t)]},RandomLinearRank:function(t){return[Select1.RandomLinearRank.call(this,t),Select1.RandomLinearRank.call(this,t)]},Sequential:function(t){return[Select1.Sequential.call(this,t),Select1.Sequential.call(this,t)]},FittestRandom:function(t){return[Select1.Fittest.call(this,t),Select1.Random.call(this,t)]}};function Genetic(){this.fitness=null,this.seed=null,this.mutate=null,this.model=null,this.crossover=null,this.select1=null,this.select2=null,this.optimize=null,this.generation=null,this.notification=null,this.configuration={size:250,crossover:.9,mutation:.2,iterations:100,fittestAlwaysSurvives:!0,maxResults:100,webWorkers:!0,skip:0},this.userData={},this.internalGenState={},this.entities=[],this.usingWebWorker=!1,this.start=Object(C_PUBLIC_PROJECTS_FINAL_TensorTraffic_tensorjs_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,s,r,o,c,u,l,_,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(i=function(t){return Math.random()<=n.configuration.mutation&&n.mutate?n.mutate(Clone(t)):t},n=this,e=0;e<this.configuration.size;++e)this.entities.push(Clone(this.seed()));e=0;case 4:if(!(e<this.configuration.iterations)){t.next=23;break}if(void 0!=n.notify&&n.notify(e,this.configuration.iterations),this.internalGenState={},a=this.entities.map(function(t){return{fitness:n.fitness(t),entity:t}}).sort(function(t,e){return n.optimize(t.fitness,e.fitness)?-1:1}),s=a.reduce(function(t,e){return t+e.fitness},0)/a.length,r=Math.sqrt(a.map(function(t){return(t.fitness-s)*(t.fitness-s)}).reduce(function(t,e){return t+e},0)/a.length),o={maximum:a[0].fitness,minimum:a[a.length-1].fitness,mean:s,stdev:r},c=!this.generation||this.generation(a,e,o),u="undefined"!=typeof c&&!c||e==this.configuration.iterations-1,this.notification&&(u||0==this.configuration["skip"]||e%this.configuration["skip"]==0)&&this.sendNotification(a.slice(0,this.maxResults),e,o,u),!u){t.next=16;break}return t.abrupt("break",23);case 16:l=[],this.configuration.fittestAlwaysSurvives&&l.push(a[0].entity);while(l.length<n.configuration.size)this.crossover&&Math.random()<=this.configuration.crossover&&l.length+1<n.configuration.size?(_=this.select2(a),f=this.crossover(Clone(_[0]),Clone(_[1])).map(i),l.push(f[0],f[1])):l.push(i(n.select1(a)));this.entities=l;case 20:++e,t.next=4;break;case 23:case"end":return t.stop()}},t,this)})),this.sendNotification=function(t,e,n,i){var a={pop:t.map(Serialization.stringify),generation:e,stats:n,isFinished:i};this.usingWebWorker?postMessage(a):this.notification(a.pop.map(Serialization.parse),a.generation,a.stats,a.isFinished)}}return Genetic.prototype.evolve=function(){var t=Object(C_PUBLIC_PROJECTS_FINAL_TensorTraffic_tensorjs_node_modules_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark(function t(e,n){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(i in e)this.configuration[i]=e[i];for(i in n)this.userData[i]=n[i];return this.usingWebWorker=!1,a=this,t.next=6,a.start();case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),{create:function(){return new Genetic},Select1:Select1,Select2:Select2,Optimize:Optimize,Clone:Clone}}();__webpack_exports__["a"]=Genetic},"09db":function(t,e,n){},"106f":function(t,e,n){},2:function(t,e){},"2e89":function(t,e,n){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mymap",{attrs:{id:"mapObject"}})],1)},s=[],r=(n("455d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-view",attrs:{id:"map"}},[t.isLoading?n("span",{staticClass:"loading-screen"},[n("h1",[t._v("Running... "+t._s(t.isLoading_text))]),n("div",{staticClass:"loader"})]):t._e(),n("el-dialog",{staticClass:"traffic_dialog",attrs:{id:"traffic_dialog_id",title:"Update Offset for traffic sign",visible:t.traffic_visible,width:"40%",center:""},on:{"update:visible":function(e){t.traffic_visible=e}}},[n("span",[t._v(" The signal start from time 0 and is calculated by the offset of the value")]),n("el-input",{staticClass:"mt-2",attrs:{placeholder:"Please input"},model:{value:t.traffic_time,callback:function(e){t.traffic_time=e},expression:"traffic_time"}}),n("div",{staticClass:"line"},[n("div",{staticClass:"first-empty"}),n("span",{staticClass:"text",style:{width:t.traffic_time1+"%"}},[t._v(t._s(t.traffic_time1)+"s")]),n("span",{staticClass:"text",style:{width:t.traffic_time2/60*100+"%"}},[t._v(t._s(t.traffic_time2)+"s")]),n("span",{staticClass:"text",style:{width:t.traffic_time3/60*100+"%"}},[t._v(t._s(t.traffic_time3)+"s")])]),t._l(t.traffic_signs,function(e){return n("div",{key:e.id},[n("span",{staticClass:"quote"},[t._v("Position: "+t._s(e.position)+" ")]),n("div",{staticClass:"line"},[n("img",{staticClass:"first",attrs:{src:"signal.png",alt:""}}),n("div",{staticClass:"color123 first_el",style:{width:(e.isGreen?t.traffic_time1:t.traffic_time1+2)/60*100+"%","background-color":e.isGreen?"#67c23a":"#f56c6c"}},[t._v(" "+t._s(e.isGreen?t.traffic_time1:t.traffic_time1+2))]),n("div",{staticClass:"color123",style:{width:(e.isGreen?t.traffic_time2+2:t.traffic_time2-2)/60*100+"%","background-color":e.isGreen?"#f56c6c":"#67c23a"}},[t._v(" "+t._s(e.isGreen?t.traffic_time2+2:t.traffic_time2-2))]),n("div",{staticClass:"color123 last",style:{width:t.traffic_time3/60*100+"%","background-color":e.isGreen?"#67c23a":"#f56c6c"}},[t._v(" "+t._s(e.isGreen?t.traffic_time3-2:t.traffic_time3)+" ")]),n("div")]),n("div")])}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.traffic_dialog_off}},[t._v("Cancel")]),n("el-button",{attrs:{type:"primary"},on:{click:t.traffic_dialog_confirm}},[t._v("Update Offset")])],1)],2),t.isShowGenetic?n("MessageBox",{attrs:{title:"Genetic Parameters",ok:"Run Genetic Algorithm"},on:{cancel:function(e){t.isShowGenetic=!1},run:function(e){t.genetic_calculate()}}},[n("el-form",{ref:"form",attrs:{model:t.genetic_config,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Iterations"}},[n("el-input",{model:{value:t.genetic_config.iterations,callback:function(e){t.$set(t.genetic_config,"iterations",e)},expression:"genetic_config.iterations"}})],1),n("el-form-item",{attrs:{label:"Size"}},[n("el-input",{model:{value:t.genetic_config.size,callback:function(e){t.$set(t.genetic_config,"size",e)},expression:"genetic_config.size"}})],1),n("el-form-item",{attrs:{label:"Cross Over"}},[n("el-input",{model:{value:t.genetic_config.crossover,callback:function(e){t.$set(t.genetic_config,"crossover",e)},expression:"genetic_config.crossover"}})],1),n("el-form-item",{attrs:{label:"Mutation"}},[n("el-input",{model:{value:t.genetic_config.mutation,callback:function(e){t.$set(t.genetic_config,"mutation",e)},expression:"genetic_config.mutation"}})],1)],1)],1):t._e(),n("div",{attrs:{id:"mapid"}}),n("div",{staticClass:"panel-info"},[n("el-button",{attrs:{type:"success",plain:""},on:{click:t.showCalculation}},[n("i",{staticClass:"fas fa-traffic-light"}),t._v(" Traffic Lights")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.showSimulation}},[n("i",{staticClass:"fas fa-car"}),t._v(" Simulation")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"cal"==t.panelType,expression:"panelType=='cal'"}],staticClass:"panel-show"},[n("span",[t._v("\n      Result:\n      "),n("span",{staticClass:"text-result"},[t._v(t._s(Math.round(t.time))+" ms")])]),n("hr"),n("el-button",{staticClass:"calculation",attrs:{type:"warning",plain:""},on:{click:function(e){t.isShowGenetic=!0}}},[n("i",{staticClass:"fas fa-calculator"}),t._v(" Find Best Solution")]),n("span"),n("el-button",{staticClass:"calculation",attrs:{type:"success",plain:""},on:{click:function(e){t.traffic_load(t.best_solution)}}},[n("i",{staticClass:"fas fa-upload"}),t._v(" Load Best Solution ("+t._s(Math.round(t.best_solution_result))+" ms)")]),t._l(t.sign_groups,function(e){return n("div",{key:e.id,staticClass:"light",on:{click:function(n){t.traffic_dialog_update(e.sign_marker)},mouseover:function(n){t.calOnOver(e)},mouseout:function(n){t.calOffOver(e)}}},[n("i",{staticClass:"fas fa-traffic-light"}),n("span",{staticClass:"text"},[t._v(t._s(e.id))]),n("el-input",{staticClass:"time",attrs:{value:e.time,size:"mini",type:"number "},on:{input:function(n){t.traffic_set_group(e,n,!0)}}})],1)})],2),n("div",{directives:[{name:"show",rawName:"v-show",value:"sim"==t.panelType,expression:"panelType=='sim'"}],staticClass:"panel-show"},[n("div"),n("el-button",{staticClass:"calculation",attrs:{type:"primary",plain:""},on:{click:t.simulation_load}},[t._v("Load Simulation")]),n("el-slider",{attrs:{min:0,max:600},model:{value:t.simulation_time,callback:function(e){t.simulation_time=e},expression:"simulation_time"}}),n("el-button",{attrs:{type:"success",round:"",icon:"el-icon-caret-right"},on:{click:t.simulation_play}},[t._v("Start Simulation")])],1)],1)}),o=[],c=(n("96cf"),n("3040")),u=(n("ac4d"),n("8a81"),n("ac6a"),n("e11e")),l=n.n(u);n("a8b7");l.a.interpolatePosition=function(t,e,n,i){var a=i/n;return a=a>0?a:0,a=a>1?1:a,l.a.latLng(t.lat+a*(e.lat-t.lat),t.lng+a*(e.lng-t.lng))},l.a.Marker.MovingMarker=l.a.Marker.extend({statics:{notStartedState:0,endedState:1,pausedState:2,runState:3},options:{autostart:!1,loop:!1},initialize:function(t,e,n){l.a.Marker.prototype.initialize.call(this,t[0],n),this._latlngs=t.map(function(t,e){return l.a.latLng(t)}),e instanceof Array?this._durations=e:this._durations=this._createDurations(this._latlngs,e),this._currentDuration=0,this._currentIndex=0,this._state=l.a.Marker.MovingMarker.notStartedState,this._startTime=0,this._startTimeStamp=0,this._pauseStartTime=0,this._animId=0,this._animRequested=!1,this._currentLine=[],this._stations={}},isRunning:function(){return this._state===l.a.Marker.MovingMarker.runState},isEnded:function(){return this._state===l.a.Marker.MovingMarker.endedState},isStarted:function(){return this._state!==l.a.Marker.MovingMarker.notStartedState},isPaused:function(){return this._state===l.a.Marker.MovingMarker.pausedState},start:function(){this.isRunning()||(this.isPaused()?this.resume():(this._loadLine(0),this._startAnimation(),this.fire("start")))},resume:function(){this.isPaused()&&(this._currentLine[0]=this.getLatLng(),this._currentDuration-=this._pauseStartTime-this._startTime,this._startAnimation())},pause:function(){this.isRunning()&&(this._pauseStartTime=Date.now(),this._state=l.a.Marker.MovingMarker.pausedState,this._stopAnimation(),this._updatePosition())},stop:function(t){this.isEnded()||(this._stopAnimation(),"undefined"===typeof t&&(t=0,this._updatePosition()),this._state=l.a.Marker.MovingMarker.endedState,this.fire("end",{elapsedTime:t}))},addLatLng:function(t,e){this._latlngs.push(l.a.latLng(t)),this._durations.push(e)},moveTo:function(t,e){this._stopAnimation(),this._latlngs=[this.getLatLng(),l.a.latLng(t)],this._durations=[e],this._state=l.a.Marker.MovingMarker.notStartedState,this.start(),this.options.loop=!1},addStation:function(t,e){t>this._latlngs.length-2||t<1||(this._stations[t]=e)},onAdd:function(t){l.a.Marker.prototype.onAdd.call(this,t),!this.options.autostart||this.isStarted()?this.isRunning()&&this._resumeAnimation():this.start()},onRemove:function(t){l.a.Marker.prototype.onRemove.call(this,t),this._stopAnimation()},_createDurations:function(t,e){for(var n=t.length-1,i=[],a=0,s=0,r=0;r<n;r++)s=t[r+1].distanceTo(t[r]),i.push(s),a+=s;var o=e/a,c=[];for(r=0;r<i.length;r++)c.push(i[r]*o);return c},_startAnimation:function(){this._state=l.a.Marker.MovingMarker.runState,this._animId=l.a.Util.requestAnimFrame(function(t){this._startTime=Date.now(),this._startTimeStamp=t,this._animate(t)},this,!0),this._animRequested=!0},_resumeAnimation:function(){this._animRequested||(this._animRequested=!0,this._animId=l.a.Util.requestAnimFrame(function(t){this._animate(t)},this,!0))},_stopAnimation:function(){this._animRequested&&(l.a.Util.cancelAnimFrame(this._animId),this._animRequested=!1)},_updatePosition:function(){var t=Date.now()-this._startTime;this._animate(this._startTimeStamp+t,!0)},_loadLine:function(t){this._currentIndex=t,this._currentDuration=this._durations[t],this._currentLine=this._latlngs.slice(t,t+2)},_updateLine:function(t){var e=t-this._startTimeStamp;if(e<=this._currentDuration)return e;var n,i=this._currentIndex,a=this._currentDuration;while(e>a){if(e-=a,n=this._stations[i+1],void 0!==n){if(e<n)return this.setLatLng(this._latlngs[i+1]),null;e-=n}if(i++,i>=this._latlngs.length-1){if(!this.options.loop)return this.setLatLng(this._latlngs[this._latlngs.length-1]),this.stop(e),null;i=0,this.fire("loop",{elapsedTime:e})}a=this._durations[i]}return this._loadLine(i),this._startTimeStamp=t-e,this._startTime=Date.now()-e,e},_animate:function(t,e){this._animRequested=!1;var n=this._updateLine(t);if(!this.isEnded()){if(null!=n){var i=l.a.interpolatePosition(this._currentLine[0],this._currentLine[1],this._currentDuration,n);this.setLatLng(i)}e||(this._animId=l.a.Util.requestAnimFrame(this._animate,this,!1),this._animRequested=!0)}}}),l.a.Marker.movingMarker=function(t,e,n){return new l.a.Marker.MovingMarker(t,e,n)};var _=l.a,f=(n("6cc5"),n("075a")),h=n("c665"),m=n("aa9a"),p=n("0b53"),d=function(){function t(){Object(h["a"])(this,t),this.cars=[],this.x_scale=[.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336,.00840336],this.y_scale=3251.8414074,this.y_mean=48924.98394408,this.on_load=null}return Object(m["a"])(t,[{key:"load",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"]("./model/model.json");case 2:this.model=t.sent,void 0!=this.on_load&&this.on_load(this);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"predict",value:function(t){for(var e=t.slice(0),n=0;n<e.length;n++)e[n]=t[n]*this.x_scale[n];var i=[];i[0]=e;var a=p["b"](i),s=this.model.predict(a);return s.dataSync()[0]*this.y_scale+this.y_mean}}]),t}(),g=new d;g.load(),window.Simulation=g;var v=g,b=f["a"].create();b.optimize=f["a"].Optimize.Minimize,b.select1=f["a"].Select1.Tournament2,b.select2=f["a"].Select2.Tournament2,b.get_val=function(){return Math.floor(120*Math.random())},b.model=v,b.seed=function(){var t=this;function e(e){for(var n=[],i=0;i<e;i++)n.push(t.get_val());return n}var n=e(21);return n},b.mutate=function(t){function e(t,e,n){var i=t.slice(0);return i[e]=n,i}var n=Math.floor(Math.random()*t.length);return e(t,n,this.get_val())},b.crossover=function(t,e){var n=t.length,i=Math.floor(Math.random()*n),a=Math.floor(Math.random()*n);if(i>a){var s=a;a=i,i=s}var r=e.slice(0,i).concat(t.slice(i,i+a-i)).concat(e.slice(a)),o=t.slice(0,i).concat(e.slice(i,i+a-i)).concat(t.slice(a));return[r,o]},b.fitness=function(t){return this.model.predict(t)},b.generation=function(t,e,n){return!0},b.run=function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n,i){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return b.notify=i,b.notification=function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(n,i,a,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e(s,n[0].entity,n[0].fitness,n,i,a);case 2:case"end":return t.stop()}},t,this)}));return function(e,n,i,a){return t.apply(this,arguments)}}(),a={length:21,max_val:120},t.next=5,b.evolve(n,a);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,i){return t.apply(this,arguments)}}();var w=b,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-message-box__wrapper",staticStyle:{"z-index":"2001"},attrs:{tabindex:"-1",role:"dialog","aria-modal":"true","aria-label":"Tip"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("run")}}},[n("div",{staticClass:"el-message-box",staticStyle:{"z-index":"3001"}},[n("div",{staticClass:"el-message-box__header"},[n("div",{staticClass:"el-message-box__title"},[n("span",[t._v(t._s(t.title))])]),n("button",{staticClass:"el-message-box__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.$emit("cancel")}}},[n("i",{staticClass:"el-message-box__close el-icon-close"})])]),n("div",{staticClass:"el-message-box__content"},[t._t("default")],2),n("div",{staticClass:"el-message-box__btns"},[n("button",{staticClass:"el-button el-button--default el-button--small",attrs:{type:"button"},on:{click:function(e){t.$emit("cancel")}}},[n("span",[t._v("\n          Cancel\n        ")])]),n("button",{staticClass:"el-button el-button--default el-button--small el-button--primary ",attrs:{type:"button"},on:{click:function(e){t.$emit("run")}}},[n("span",[t._v("\n          "+t._s(t.ok)+"\n        ")])])])]),n("div",{staticClass:"v-modal",staticStyle:{"z-index":"-2000"},attrs:{tabindex:"0"}})])},M=[],k={beforeMount:function(){window.addEventListener("keyup",this.onEscapeKeyUp)},beforeDestroy:function(){window.removeEventListener("keyup",this.onEscapeKeyUp)},props:{title:String,ok:{type:String,default:"OK"}},methods:{onEscapeKeyUp:function(t){27===t.which&&this.$emit("cancel")}}},S=k,x=(n("6121"),n("2877")),C=Object(x["a"])(S,y,M,!1,null,null,null);C.options.__file="MessageBox.vue";var O=C.exports,T=function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",e._g({staticClass:"number-input",class:(t={"number-input--inline":e.inline,"number-input--center":e.center,"number-input--controls":e.controls},t["number-input--"+e.size]=e.size,t)},e.listeners),[e.controls?i("button",{staticClass:"number-input__button number-input__button--minus",attrs:{type:"button",disabled:e.disabled||e.readonly||!e.decreasable},on:{click:e.decrease}}):e._e(),i("input",{ref:"input",staticClass:"number-input__input",attrs:{type:"number",name:e.name,min:e.min,max:e.max,step:e.step,readonly:e.readonly||!e.inputtable,disabled:e.disabled||!e.decreasable&&!e.increasable,placeholder:e.placeholder,autocomplete:"off"},domProps:{value:e.currentValue},on:{change:e.change,paste:e.paste}}),e.controls?i("button",{staticClass:"number-input__button number-input__button--plus",attrs:{type:"button",disabled:e.disabled||e.readonly||!e.increasable},on:{click:e.increase}}):e._e()])},L=[],E=n("c93e"),R=(n("c5f6"),n("ee1d"),Number.isNaN||window.isNaN),P=/^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/,D=function(t){return parseFloat(t.toFixed(10))},A={name:"number-input",data:function(){return{currentValue:NaN}},model:{event:"change"},props:{center:Boolean,controls:Boolean,disabled:Boolean,inputtable:{type:Boolean,default:!0},inline:Boolean,max:{type:Number,default:1/0},min:{type:Number,default:-1/0},name:String,placeholder:String,readonly:Boolean,rounded:Boolean,size:String,step:{type:Number,default:1},value:Number},computed:{increasable:function(){var t=this.currentValue;return R(t)||t<this.max},decreasable:function(){var t=this.currentValue;return R(t)||t>this.min},listeners:function(){var t=Object(E["a"])({},this.$listeners);return delete t.change,t}},methods:{change:function(t){this.setValue(Math.min(this.max,Math.max(this.min,t.target.value)))},paste:function(t){P.test(t.clipboardData.getData("text"))||t.preventDefault()},decrease:function(){if(this.decreasable){var t=this.currentValue;R(t)&&(t=0),this.setValue(Math.min(this.max,Math.max(this.min,D(t-this.step))))}},increase:function(){if(this.increasable){var t=this.currentValue;R(t)&&(t=0),this.setValue(Math.min(this.max,Math.max(this.min,D(t+this.step))))}},setValue:function(t){var e=this,n=this.currentValue,i=this.rounded?Math.round(t):t;this.min<=this.max&&(i=Math.min(this.max,Math.max(this.min,i))),this.currentValue=i,this.$emit("change",i,n),this.$nextTick(function(){e.$el&&(e.$refs.input.value=i)})}},watch:{value:function(t){this.setValue(t)}},created:function(){this.setValue(this.value)}},j=A,z=(n("5741"),Object(x["a"])(j,T,L,!1,null,"6c7308e8",null));z.options.__file="number-input.vue";var I=z.exports,B=function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(h["a"])(this,t),this.group_id=e,this.position=n,this.isGreen=i,this.show=a},U=function t(e,n,i,a){Object(h["a"])(this,t),this.id=e,this.group=n,this.time=i,this.signs=a},G={28:new U(0,"28",93,[new B("28",[52.2107465,20.9807139],!1,!0),new B("28",[52.2105183,20.9803437],!1,!1),new B("28",[52.2105183,20.9803437],!1,!1)]),64:new U(1,"64",43,[new B("64",[52.2143666,20.979524],!1,!0),new B("64",[52.2144409,20.9792988],!1,!1)]),98:new U(2,"98",99,[new B("98",[52.218917,20.9830513],!1,!0),new B("98",[52.218917,20.9830513],!0,!1)]),99:new U(3,"99",47,[new B("99",[52.2194494,20.9851343],!0,!0),new B("99",[52.2194494,20.9851343],!1,!1)]),100:new U(4,"100",53,[new B("100",[52.2199519,20.9709217],!1,!0),new B("100",[52.2197153,20.9712994],!0,!1)]),101:new U(5,"101",46,[new B("101",[52.2159554,20.9626047],!1,!0)]),102:new U(6,"102",86,[new B("102",[52.2176205,20.9600354],!1,!0)]),103:new U(7,"103",26,[new B("103",[52.2168126,20.9614718],!0,!0)]),104:new U(8,"104",69,[new B("104",[52.2157853,20.9603045],!0,!0)]),131:new U(9,"131",84,[new B("131",[52.2251573,20.9893067],!0,!0),new B("131",[52.2250183,20.9886315],!1,!1),new B("131",[52.2246683,20.9895899],!1,!1),new B("131",[52.2245,20.9889462],!0,!1)]),132:new U(10,"132",80,[new B("132",[52.2211765,20.9854959],!0,!0),new B("132",[52.2211765,20.9854959],!1,!1),new B("132",[52.2212135,20.9851842],!1,!1),new B("132",[52.2212135,20.9851842],!0,!1)]),133:new U(11,"133",115,[new B("133",[52.2161535,20.9880646],!0,!0),new B("133",[52.2164161,20.9880658],!0,!1),new B("133",[52.2164161,20.9880658],!1,!1)]),134:new U(12,"134",76,[new B("134",[52.216484,20.990223],!1,!0),new B("134",[52.216484,20.990223],!0,!1),new B("134",[52.2161807,20.9902419],!0,!1),new B("134",[52.2161807,20.9902419],!1,!1)]),135:new U(13,"135",25,[new B("135",[52.2163183,20.9813502],!1,!0),new B("135",[52.2161868,20.9812472],!0,!1),new B("135",[52.2164287,20.981024],!0,!1),new B("135",[52.2163078,20.9809468],!1,!1)]),136:new U(14,"136",43,[new B("136",[52.2176855,20.9773419],!1,!0),new B("136",[52.2176855,20.9773419],!0,!1),new B("136",[52.2175646,20.9772389],!0,!1),new B("136",[52.2175646,20.9772389],!1,!1)]),137:new U(15,"137",69,[new B("137",[52.2189896,20.9734108],!1,!0),new B("137",[52.2189896,20.9734108],!0,!1),new B("137",[52.2188634,20.9732649],!0,!1),new B("137",[52.2188634,20.9732649],!1,!1)]),180:new U(16,"180",80,[new B("180",[52.2109278,20.9766552],!0,!0),new B("180",[52.2112644,20.9764578],!0,!1),new B("180",[52.2111539,20.9768355],!1,!1),new B("180",[52.2110751,20.9762604],!1,!1)]),182:new U(17,"182",65,[new B("182",[52.2101862,20.9880707],!0,!0),new B("182",[52.2105428,20.9878242],!0,!1),new B("182",[52.2102178,20.9877016],!1,!1)]),283:new U(18,"283",5,[new B("283",[52.2192124,20.9901071],!0,!0),new B("283",[52.2192124,20.9901071],!1,!1),new B("283",[52.2192513,20.9893353],!0,!1),new B("283",[52.2192513,20.9893353],!1,!1)]),288:new U(19,"288",35,[new B("288",[52.2125079,20.9727936],!1,!0),new B("288",[52.2125079,20.9727936],!0,!1),new B("288",[52.212337,20.9726596],!1,!1),new B("288",[52.212337,20.9726596],!0,!1)]),289:new U(20,"289",72,[new B("289",[52.2140019,20.9685449],!1,!0),new B("289",[52.2140019,20.9685449],!0,!1),new B("289",[52.2138224,20.9683579],!1,!1),new B("289",[52.2138224,20.9683579],!0,!1)])},q=(_.Control.extend({options:{position:"topleft"}}),{components:{MessageBox:O,"number-input":I},data:function(){return{genetic_config:{iterations:50,size:20,crossover:.4,mutation:.3},isLoading:!1,isLoading_text:"...",isShowGenetic:!1,traffic_dialog:{visible:!0},traffic_visible:!1,traffic_time:30,traffic_group:G["28"],traffic_signs:G["28"].signs[0],traffic_times:G["28"].times,panelType:"",icon:"",car_icon:"",map:"",zoom:15,mapMarkers:[],center:[52.2187,20.9864],car:[],car_position:[52.2211,20.9849],time:32.433,best_solution:[43,16,64,69,6,21,83,119,81,91,37,47,42,30,54,48,29,24,35,36,6],best_solution_result:0,sign_times:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],sign_groups:G,simulation_time:0}},computed:{traffic_time1:function(){return this.traffic_time%60},traffic_time2:function(){return 60},traffic_time3:function(){return 60-this.traffic_time%60}},mounted:function(){this.icon=_.icon({iconUrl:"https://image.flaticon.com/icons/png/128/803/803227.png",iconSize:[30,25],iconAnchor:[0,0],popupAnchor:[0,0]}),this.car_icon=_.icon({iconUrl:"http://icons.iconarchive.com/icons/icons-land/transporter/256/Car-Top-Red-icon.png",iconSize:[40,40],iconAnchor:[20,15],popupAnchor:[14,230]});var t=_.map("mapid").setView(this.center,this.zoom);this.map=t,_.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.map),this.refreshMarks();var e=this;w.model.on_load=function(){e.best_solution_result=w.model.predict(e.best_solution),e.traffic_set_time()}},methods:{refreshMarks:function(){for(var t=0;t<this.mapMarkers.length;t++)this.map.removeLayer(this.mapMarkers[t]);for(var e in this.sign_groups){var n=this.sign_groups[e],i=!0,a=!1,s=void 0;try{for(var r,o=n.signs[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var c=r.value;n.signs[c];this.addSign(c,n)}}catch(t){a=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(a)throw s}}}this.uploadCars()},addSign:function(t,e){t.group=e,t.show&&(e.sign_marker=t);var n=new _.marker(t.position,{icon:this.icon});t.show&&n.bindTooltip(String(e.time),{permanent:!0,className:"my-label",opacity:.8,offset:[15,5]}),n.addTo(this.map),this.mapMarkers.push(n),n.sign=t,t.marker=n;var i=this;n.on("click",function(t){i.traffic_dialog_update(t.target.sign)})},calOnOver:function(t){t.sign_marker.marker.unbindTooltip(),t.sign_marker.marker.bindTooltip(String(t.time),{permanent:!0,className:"my-label-show",opacity:.9,offset:[15,5]})},calOffOver:function(t){t.sign_marker.marker.unbindTooltip(),t.sign_marker.marker.bindTooltip(String(t.time),{permanent:!0,className:"my-label",opacity:.8,offset:[15,5]})},traffic_load:function(t){for(var e in this.sign_groups){var n=this.sign_groups[e];this.traffic_set_group(n,t[n.id])}this.traffic_set_time()},traffic_set_group:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.time=parseInt(e),this.sign_times[t.id]=t.time,t.sign_marker.marker.setTooltipContent(String(e)),n&&this.traffic_set_time()},traffic_set_time:function(){this.time=w.model.predict(this.sign_times),this.$message({type:"warning",message:"New Traffic result: "+Math.round(this.time)})},traffic_dialog_off:function(){this.calOffOver(this.traffic_group),this.traffic_visible=!1},traffic_dialog_update:function(t){var e=this.map.getBounds();e=Math.abs(e.getWest()-e.getEast()),this.map.panTo([t.position[0],t.position[1]+.4*e]),this.calOnOver(t.group),this.traffic_signs=t.group.signs,this.traffic_group=t.group,this.traffic_visible=!0,this.traffic_time=t.group.time},traffic_dialog_confirm:function(){this.traffic_set_group(this.traffic_group,this.traffic_time),this.traffic_dialog_off()},uploadCars:function(){},showCalculation:function(){this.panelType="cal"==this.panelType?"":"cal"},genetic_calculate:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isShowGenetic=!1,e=function(t){return new Promise(function(e){setTimeout(e,t)})},this.isLoading=!0,this.isLoading_text="...",n=this,[],t.next=8,e(500);case 8:try{w.run(function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,i,a,s,r,o){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,n.traffic_load(i);case 3:n.$message({type:"success",message:"Find result is: "+i+"\n\n\n\n\t with score: "+a});case 4:n.isLoading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(e,n,i,a,s,r){return t.apply(this,arguments)}}(),this.genetic_config,function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,i){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n.isLoading_text=e+"/"+i,t.next=3,n.$forceUpdate();case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())}catch(t){console.log(t)}case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),showSimulation:function(){this.panelType="sim"==this.panelType?"":"sim"},simulation_load:function(){this.simulation_time=0},simulation_play:function(){this.map.removeLayer(this.car);var t=_.Marker.movingMarker([[52.221,20.9853],[52.2163,20.9811]],[5e3],{icon:this.car_icon,rotationAngle:-58}).addTo(this.map),e=this;t.addEventListener("end",function(n){e.map.removeLayer(t),e.uploadCars()}),t.start()},playCars:function(){this.map.removeLayer(this.car);var t=_.Marker.movingMarker([[52.221,20.9853],[52.2163,20.9811]],[5e3],{icon:this.car_icon,rotationAngle:-58}).addTo(this.map),e=this;t.addEventListener("end",function(n){e.map.removeLayer(t),e.uploadCars()}),t.start()}}}),N=q,W=(n("bb97"),Object(x["a"])(N,r,o,!1,null,null,null));W.options.__file="mymap.vue";var $=W.exports,K={data:function(){return{map:null}},name:"app",components:{mymap:$}},F=K,V=(n("5c0b"),n("b0a0"),Object(x["a"])(F,a,s,!1,null,null,null));V.options.__file="App.vue";var J=V.exports,H=n("5c96"),Q=n.n(H),X=(n("0fae"),n("b2d6")),Y=n.n(X);i["default"].use(Q.a,{locale:Y.a}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(J)}}).$mount("#app")},5741:function(t,e,n){"use strict";var i=n("06de"),a=n.n(i);a.a},"5c0b":function(t,e,n){"use strict";var i=n("106f"),a=n.n(i);a.a},6121:function(t,e,n){"use strict";var i=n("bb87"),a=n.n(i);a.a},b0a0:function(t,e,n){"use strict";var i=n("2e89"),a=n.n(i);a.a},bb87:function(t,e,n){},bb97:function(t,e,n){"use strict";var i=n("09db"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1f4b3e22.js.map