(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ad493fc"],{"0b42":function(e,t,c){var a=c("861d"),r=c("e8b5"),n=c("b622"),o=n("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)?a(t)&&(t=t[o],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1dde":function(e,t,c){var a=c("d039"),r=c("b622"),n=c("2d00"),o=r("species");e.exports=function(e){return n>=51||!a((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4385:function(e,t,c){"use strict";c.r(t);c("ac1f"),c("841c");var a=c("7a23"),r={class:"mainPageStyle main-bg-color pt-8"},n={class:"container innerHeight"},o={class:"row"},s={class:"col-md-4 col-lg-5"},i={class:"list-group choose mb-4"},l=["onClick","checked"],u={class:"col-md-8 col-lg-7"},d=Object(a["e"])("option",{selected:"",value:"",disabled:""},"瀏覽紀錄",-1),b=["value"];function f(e,t,c,f,j,p){var O=Object(a["u"])("ChooseView"),h=Object(a["u"])("Footer");return Object(a["p"])(),Object(a["d"])("div",r,[Object(a["e"])("div",n,[Object(a["e"])("div",o,[Object(a["e"])("div",s,[Object(a["C"])(Object(a["e"])("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":t[0]||(t[0]=function(e){return j.search=e}),placeholder:"search"},null,512),[[a["z"],j.search]]),Object(a["e"])("div",i,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(p.filterData,(function(e){return Object(a["p"])(),Object(a["d"])("label",{key:e.Id,class:"list-group-item main-text-color"},[Object(a["e"])("input",{type:"radio",class:"form-check-input me-1",onClick:function(t){return j.area=e},checked:j.area.Name===e.Name},null,8,l),Object(a["f"])(Object(a["w"])(e.Name),1)])})),128))])]),Object(a["e"])("div",u,[Object(a["C"])(Object(a["e"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.area=e}),id:"area",class:"form-select w-md-50 mb-3","aria-label":"select example"},[d,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(j.browseLog,(function(e,t){return Object(a["p"])(),Object(a["d"])("option",{key:t,value:e,class:"main-text-color"},Object(a["w"])(t+1)+"."+Object(a["w"])(e.Name),9,b)})),128))],512),[[a["y"],j.area]]),Object(a["g"])(O,{"send-data":j.data,area:j.area},null,8,["send-data","area"])])])]),Object(a["g"])(h,{class:"footer"})])}c("4de4"),c("466d");var j={key:0},p=["src","alt"],O={class:"card-body"},h={class:"card-title"},m=Object(a["e"])("span",{class:"text-danger pe-2"},[Object(a["e"])("i",{class:"fas fa-map-marker-alt"})],-1),v=Object(a["e"])("span",{class:"text-danger pe-2"},[Object(a["e"])("i",{class:"far fa-clock"})],-1),w={class:"card-text"},g={key:1,class:"card main-text-color w-md-50"},x=Object(a["e"])("div",{class:"card-body"},[Object(a["e"])("h5",null,"請選擇景點")],-1),y=[x];function k(e,t,c,r,n,o){return c.area.Name?(Object(a["p"])(),Object(a["d"])("div",j,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(o.filterArea,(function(e){return Object(a["p"])(),Object(a["d"])("div",{class:"card main-text-color mb-3",key:e.Id},[Object(a["e"])("img",{src:e.Picture1,class:"card-img-top",alt:e.Name},null,8,p),Object(a["e"])("div",O,[Object(a["e"])("h5",h,Object(a["w"])(e.Name),1),Object(a["e"])("h6",null,[m,Object(a["f"])(" "+Object(a["w"])(e.Add),1)]),Object(a["e"])("h6",null,[v,Object(a["f"])(" 開放時間："+Object(a["w"])(e.Opentime),1)]),Object(a["e"])("p",w,Object(a["w"])(e.Description),1)])])})),128))])):(Object(a["p"])(),Object(a["d"])("div",g,y))}var N={props:["sendData","area"],data:function(){return{tempArea:{}}},computed:{filterArea:function(){var e=this;return this.sendData.filter((function(t){return e.area.Name===t.Name}))}}};N.render=k;var A=N,C=c("fd2d"),D={components:{ChooseView:A,Footer:C["a"]},data:function(){return{api:"https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json",data:[],search:"",area:"",browseLog:[]}},methods:{getData:function(){var e=this;this.$http.get("".concat(this.api)).then((function(t){e.data=t.data.result.records}))}},computed:{filterData:function(){var e=this;return this.data.filter((function(t){if(t.Name.match(e.search))return t.Name}))}},watch:{area:function(){this.browseLog.length<10||this.browseLog.shift(),this.browseLog.push(this.area)}},mounted:function(){this.getData()}};c("ebbb");D.render=f;t["default"]=D},"4de4":function(e,t,c){"use strict";var a=c("23e7"),r=c("b727").filter,n=c("1dde"),o=n("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,c){var a=c("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},"841c":function(e,t,c){"use strict";var a=c("d784"),r=c("825a"),n=c("1d80"),o=c("129f"),s=c("577e"),i=c("14c3");a("search",(function(e,t,c){return[function(t){var c=n(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c):new RegExp(t)[e](s(c))},function(e){var a=r(this),n=s(e),l=c(t,a,n);if(l.done)return l.value;var u=a.lastIndex;o(u,0)||(a.lastIndex=0);var d=i(a,n);return o(a.lastIndex,u)||(a.lastIndex=u),null===d?-1:d.index}]}))},"857e":function(e,t,c){},b727:function(e,t,c){var a=c("0366"),r=c("44ad"),n=c("7b0b"),o=c("50c4"),s=c("65f0"),i=[].push,l=function(e){var t=1==e,c=2==e,l=3==e,u=4==e,d=6==e,b=7==e,f=5==e||d;return function(j,p,O,h){for(var m,v,w=n(j),g=r(w),x=a(p,O,3),y=o(g.length),k=0,N=h||s,A=t?N(j,y):c||b?N(j,0):void 0;y>k;k++)if((f||k in g)&&(m=g[k],v=x(m,k,w),e))if(t)A[k]=v;else if(v)switch(e){case 3:return!0;case 5:return m;case 6:return k;case 2:i.call(A,m)}else switch(e){case 4:return!1;case 7:i.call(A,m)}return d?-1:l||u?u:A}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},e8b5:function(e,t,c){var a=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},ebbb:function(e,t,c){"use strict";c("857e")},fd2d:function(e,t,c){"use strict";var a=c("7a23"),r={class:"d-flex flex-column flex-sm-row justify-content-sm-center align-items-center\n      text-white bg-navy py-3"},n=Object(a["e"])("div",{class:"pt-2"},[Object(a["e"])("h5",{class:"mb-0"},"僅作業練習，無任何商業用途")],-1),o=[n];function s(e,t){return Object(a["p"])(),Object(a["d"])("footer",r,o)}const i={};i.render=s;t["a"]=i}}]);
//# sourceMappingURL=chunk-9ad493fc.a4e267de.js.map