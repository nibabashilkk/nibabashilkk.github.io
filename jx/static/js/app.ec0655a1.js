﻿(function(e){function t(t){for(var r,s,l=t[0],o=t[1],u=t[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1837:function(e,t,n){},"45db":function(e,t,n){"use strict";n("1837")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),i=n.n(a),s={},l=i.a.create(s);l.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},r["default"].use(Plugin);var o=Plugin,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("index")],1)},c=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"demo-basic--circle"},[n("div",{staticClass:"block"},[n("el-avatar",{attrs:{size:150,src:e.avatar}})],1)]),n("h1",[e._v("抖音短视频/图集在线去水印解析")]),n("div",{staticClass:"typo"},[n("p",[n("strong",[e._v("目前支持 ")]),e._v("抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue Vlog/小咖秀/西瓜视频")]),n("p",[n("strong",[e._v("温馨提示 ")]),e._v("粘贴视频地址时"),n("u",[e._v("无需删除文案")]),n("small",[e._v(" 但如果视频链接正确但解析失败请删掉文案后重试")])])]),n("hr"),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main"},[n("div",{staticClass:"grid-content"},[n("el-input",{attrs:{placeholder:"请粘贴需要去水印的链接",id:"url",lass:"input-with-select"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"视频"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{attrs:{label:"视频",value:"1"}}),n("el-option",{attrs:{label:"图集",value:"2"}})],1),n("el-button",{attrs:{slot:"append"},on:{click:e.onSubmit},slot:"append"},[e._v("解析")])],1)],1),e.seen?n("div",{staticClass:"download"},[n("h4",[e._v(e._s(e.info.title))]),n("a",{attrs:{href:e.info.cover,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载封面")])],1),n("a",{attrs:{href:e.info.url,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载视频")])],1),e.music?n("a",{attrs:{href:e.info.url,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载音乐")])],1):e._e()]):e._e(),e.iseen?n("div",{staticClass:"waterfall"},e._l(e.images_url,(function(t){return n("div",{key:t,staticClass:"item"},[n("el-image",{attrs:{src:t,"preview-src-list":e.images_url}})],1)})),0):e._e()])])],1)},f=[],d=(n("ac1f"),{data:function(){return{info:{},input:"",select:"",music:!1,seen:!1,iseen:!1,loading:!1,avatar:"static/dy.jpg",images_url:{}}},methods:{onSubmit:function(){var e=this;this.loading=!0;var t=/http[s]?:\/\/[\w.]+[\w/]*[\w.]*\??[\w=&:\-+%]*[/]*/.exec(this.input);"1"==this.select||""==this.select?this.axios.get("https://tenapi.cn/video/?url="+t).then((function(t){null!=t.data.url?(null!=t.data.music&&(e.music=!0),e.seen=!0,e.info=t.data,e.loading=!1,e.$notify.success({title:"解析成功",message:"请及时下载音视频"})):(e.seen=!1,e.loading=!1,e.$notify.error({title:"解析失败",message:"视频不存在或接口失效"}))})):(this.seen=!1,this.axios.get("https://tenapi.cn/images/?url="+t).then((function(t){200==t.data.code?(e.iseen=!0,e.loading=!1,e.images_url=t.data.images,e.$notify.success({title:"解析成功",message:"图集暂不支持批量下载，请长按下载或右键另存为"})):(e.iseen=!1,e.loading=!1,e.$notify.error({title:"解析失败",message:"图集不存在或接口失效"})),console.log(e.images_url)})))}}}),v=d,g=(n("45db"),n("2877")),h=Object(g["a"])(v,p,f,!1,null,null,null),b=h.exports,m={name:"app",components:{index:b}},_=m,w=(n("034f"),Object(g["a"])(_,u,c,!1,null,null,null)),y=w.exports,x=n("5c96"),j=n.n(x);n("0fae");r["default"].use(j.a),r["default"].use(o),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){}});