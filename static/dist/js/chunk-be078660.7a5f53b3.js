(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be078660"],{"0148":function(t,e,r){"use strict";function n(t,e,r,n){var a=t.length,i=r+(n?1:-1);while(n?i--:++i<a)if(e(t[i],i,t))return i;return-1}var a=n;function i(t){return t!==t}var l=i;function o(t,e,r){var n=r-1,a=t.length;while(++n<a)if(t[n]===e)return n;return-1}var c=o;function u(t,e,r){return e===e?c(t,e,r):a(t,l,r)}e["a"]=u},7543:function(t,e,r){"use strict";var n=r("b38b"),a=r.n(n);a.a},"8a9c":function(t,e,r){},"8cbb":function(t,e,r){"use strict";var n=r("9ac7"),a=r("0148");function i(t,e){var r=null==t?0:t.length;return!!r&&Object(a["a"])(t,e,0)>-1}var l=i;function o(t,e,r){var n=-1,a=null==t?0:t.length;while(++n<a)if(r(e,t[n]))return!0;return!1}var c=o,u=r("6568"),s=r("a55c");function f(){}var h=f,b=r("1989"),p=1/0,v=s["a"]&&1/Object(b["a"])(new s["a"]([,-0]))[1]==p?function(t){return new s["a"](t)}:h,d=v,m=200;function y(t,e,r){var a=-1,i=l,o=t.length,s=!0,f=[],h=f;if(r)s=!1,i=c;else if(o>=m){var p=e?null:d(t);if(p)return Object(b["a"])(p);s=!1,i=u["a"],h=new n["a"]}else h=e?[]:f;t:while(++a<o){var v=t[a],y=e?e(v):v;if(v=r||0!==v?v:0,s&&y===y){var w=h.length;while(w--)if(h[w]===y)continue t;e&&h.push(y),f.push(v)}else i(h,y,r)||(h!==f&&h.push(y),f.push(v))}return f}e["a"]=y},"8d70":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"settings"},[r("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"tables"]}}),r("section",[r("table-metric"),r("replication-table"),r("zk-table")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"zkTable"},[r("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[r("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Zookeeper Status")))]),r("time-filter",{attrs:{refreshDuration:t.refresh},on:{"update:refreshDuration":function(e){t.refresh=e},"update:refresh-duration":function(e){t.refresh=e},input:t.timeFilterChange,"on-refresh":t.timeFilterRefresh},model:{value:t.timeFilter,callback:function(e){t.timeFilter=e},expression:"timeFilter"}})],1),r("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},t._l(t.cols,(function(e,n){return r("el-table-column",{key:n,attrs:{label:e,align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.column;return[r("span",[t._v(t._s(n.label))])]}},{key:"default",fn:function(e){var a=e.row,i=e.column;return[r("span",0===n?[t._v(t._s(Object.keys(a)[0]))]:[t._v(t._s(Object.values(a)[0][i.label]))])]}}],null,!0)})})),1)],1)},l=[],o=r("a34a"),c=r.n(o),u=r("f976");function s(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var f=s,h=Math.max;function b(t,e,r){return e=h(void 0===e?t.length-1:e,0),function(){var n=arguments,a=-1,i=h(n.length-e,0),l=Array(i);while(++a<i)l[a]=n[e+a];a=-1;var o=Array(e+1);while(++a<e)o[a]=n[a];return o[e]=r(l),f(t,this,o)}}var p=b;function v(t){return function(){return t}}var d=v,m=r("0305"),y=m["a"]?function(t,e){return Object(m["a"])(t,"toString",{configurable:!0,enumerable:!1,value:d(e),writable:!0})}:u["a"],w=y,g=800,D=16,_=Date.now;function j(t){var e=0,r=0;return function(){var n=_(),a=D-(n-r);if(r=n,a>0){if(++e>=g)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var k=j,x=k(w),O=x;function C(t,e){return O(p(t,e,u["a"]),t+"")}var S=C,$=r("b703"),F=r("0148");function A(t,e,r,n){var a=r-1,i=t.length;while(++a<i)if(n(t[a],e))return a;return-1}var E=A,T=r("a2fb"),I=r("7804"),P=Array.prototype,Q=P.splice;function R(t,e,r,n){var a=n?E:F["a"],i=-1,l=e.length,o=t;t===e&&(e=Object(I["a"])(e)),r&&(o=Object($["a"])(t,Object(T["a"])(r)));while(++i<l){var c=0,u=e[i],s=r?r(u):u;while((c=a(o,s,c,n))>-1)o!==t&&Q.call(o,c,1),Q.call(t,c,1)}return t}var M=R;function N(t,e){return t&&t.length&&e&&e.length?M(t,e):t}var q=N,z=S(q),H=z,J=r("8cbb");function U(t){return t&&t.length?Object(J["a"])(t):[]}var Z=U,L=r("c949");function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t,e,r,n,a,i,l){try{var o=t[i](l),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function K(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function l(t){G(i,n,a,l,o,"next",t)}function o(t){G(i,n,a,l,o,"throw",t)}l(void 0)}))}}var V={data:function(){return{cols:[""],keys:[""],tableData:[],timeFilter:null,refresh:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return K(c.a.mark((function e(){var r,n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L["g"].zkStatus(t.$route.params.id);case 2:r=e.sent,n=r.data.entity,t.cols=[""],t.keys=[""],t.tableData=[],n.forEach((function(e){t.cols.push(e.host),t.keys=H(Object.keys(e),"host")})),t.keys.forEach((function(e){var r=B({},e,{});n.forEach((function(n){r[e][n["host"]]=n[e],t.tableData.push(r)})),t.tableData=Z(t.tableData)}));case 9:case"end":return e.stop()}}),e)})))()},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()}}},W=V,X=r("2877"),Y=Object(X["a"])(W,i,l,!1,null,"73ca2ec6",null),tt=Y.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"replication-status pb-20"},[r("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[r("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Table Replication Status")))]),r("time-filter",{attrs:{refreshDuration:t.refresh},on:{"update:refreshDuration":function(e){t.refresh=e},"update:refresh-duration":function(e){t.refresh=e},input:t.timeFilterChange,"on-refresh":t.timeFilterRefresh},model:{value:t.timeFilter,callback:function(e){t.timeFilter=e},expression:"timeFilter"}})],1),r("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":t.mergeTableHeader,border:""}},t._l(t.cols,(function(e,n){return r("el-table-column",{key:n,ref:"tableColumn",refInFor:!0,attrs:{label:e.label,prop:e.prop,width:"auto",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.column;return[r("span",[t._v(t._s(n.label))])]}},{key:"default",fn:function(e){var a=e.row,i=e.column;return[r("span",0===n?[t._v(t._s("Table Name"===Object.keys(a)[0]?t.$t("common."+Object.keys(a)[0]):Object.keys(a)[0]))]:[t._v(t._s(Object.values(a)[0][i.property]))])]}}],null,!0)})})),1)],1)},rt=[],nt=r("5c8a");function at(t,e){return e="function"==typeof e?e:void 0,t&&t.length?Object(J["a"])(t,void 0,e):[]}var it=at,lt=r("12a1");function ot(t,e){return Object(lt["a"])(t,e)}var ct=ot;function ut(t,e){return pt(t)||bt(t,e)||ft(t,e)||st()}function st(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ft(t,e){if(t){if("string"===typeof t)return ht(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ht(t,e):void 0}}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function bt(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,i=[],l=!0,o=!1;try{for(r=r.call(t);!(l=(n=r.next()).done);l=!0)if(i.push(n.value),e&&i.length===e)break}catch(c){o=!0,a=c}finally{try{l||null==r["return"]||r["return"]()}finally{if(o)throw a}}return i}}function pt(t){if(Array.isArray(t))return t}function vt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function dt(t,e,r,n,a,i,l){try{var o=t[i](l),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function mt(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function l(t){dt(i,n,a,l,o,"next",t)}function o(t){dt(i,n,a,l,o,"throw",t)}l(void 0)}))}}var yt={data:function(){return{cols:[],tableData:[],headerData:[],timeFilter:null,refresh:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return mt(c.a.mark((function e(){var r,n,a,i,l,o,u;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L["g"].replicationStatus(t.$route.params.id);case 2:r=e.sent,n=r.data.entity,a=n.header,i=void 0===a?[]:a,l=n.tables,o=void 0===l?[]:l,t.cols=[{prop:"",label:""}],t.headerData=Object(nt["a"])(i),t.tableData=[],u={},i.forEach((function(e,r){var n="shard".concat(r+1);e.forEach((function(e,r){u["".concat(n,"_").concat(r)]=e,t.cols.push({prop:"".concat(n,"_").concat(r),label:n})}))})),t.tableData.push(vt({},"Table Name",u)),o.forEach((function(e){var r=e.name,n=e.values,a={};n.forEach((function(t,e){var r="shard".concat(e+1);t.forEach((function(t,e){a["".concat(r,"_").concat(e)]=t}))})),t.tableData.push(vt({},r,a)),t.tableData=it(t.tableData,ct)}));case 15:case"end":return e.stop()}}),e)})))()},mergeTableHeader:function(t){t.row,t.column;var e=t.rowIndex,r=t.columnIndex,n=new Set(this.headerData.map((function(t){return t.length}))),a=ut(n,1),i=a[0];if(0===e&&0!=r){if(r%i===0)return{display:"none"};this.$nextTick((function(){var t=document.querySelector(".replication-status thead>tr").children;t[r]&&(t[r].colSpan=2)}))}},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()}}},wt=yt,gt=(r("f8c1"),Object(X["a"])(wt,et,rt,!1,null,"5ae01ab3",null)),Dt=gt.exports,_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-metric pb-20"},[r("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[r("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Table Metrics")))])]),r("el-table",{attrs:{data:t.tableData,cneter:"",border:""}},[t._l(t.columns,(function(t){var e=t.prop,n=t.label;return[r("el-table-column",{key:e,attrs:{prop:e,label:n,"show-overflow-tooltip":""}})]}))],2)],1)},jt=[];function kt(t,e){return $t(t)||St(t,e)||Ot(t,e)||xt()}function xt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ot(t,e){if(t){if("string"===typeof t)return Ct(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ct(t,e):void 0}}function Ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function St(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,i=[],l=!0,o=!1;try{for(r=r.call(t);!(l=(n=r.next()).done);l=!0)if(i.push(n.value),e&&i.length===e)break}catch(c){o=!0,a=c}finally{try{l||null==r["return"]||r["return"]()}finally{if(o)throw a}}return i}}function $t(t){if(Array.isArray(t))return t}function Ft(t,e,r,n,a,i,l){try{var o=t[i](l),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function At(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function l(t){Ft(i,n,a,l,o,"next",t)}function o(t){Ft(i,n,a,l,o,"throw",t)}l(void 0)}))}}var Et={data:function(){return{tableData:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return At(c.a.mark((function e(){var r,n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L["g"].tableMetrics(t.$route.params.id);case 2:r=e.sent,n=r.data.entity,Object.entries(n).forEach((function(e){var r=kt(e,2),n=r[0],a=r[1],i=a.columns,l=a.rows,o=a.space,c=a.completedQueries,u=a.failedQueries,s=a.parts,f=a.queryCost;t.tableData.push({tableName:n,columns:i,rows:l,space:o,completedQueries:c,failedQueries:u,parts:s,queryCost:Object.values(f).map((function(t){return"".concat(t/1e3,"s")})).join(",")})}));case 5:case"end":return e.stop()}}),e)})))()}},computed:{columns:function(){var t=[{prop:"tableName",label:this.$t("tables.Table Name")},{prop:"columns",label:this.$t("tables.Columns")},{prop:"rows",label:this.$t("tables.Rows")},{prop:"parts",label:this.$t("tables.Parts")},{prop:"space",label:this.$t("tables.Disk Space")},{prop:"completedQueries",label:this.$t("tables.Completed Queries in last 24h")},{prop:"failedQueries",label:this.$t("tables.Failed Queries in last 24h")},{prop:"queryCost",label:this.$t("tables.Last 7 days info")}];return t}}},Tt=Et,It=(r("7543"),Object(X["a"])(Tt,_t,jt,!1,null,"520eee2d",null)),Pt=It.exports,Qt={data:function(){return{}},mounted:function(){},methods:{},components:{ZkTable:tt,ReplicationTable:Dt,TableMetric:Pt}},Rt=Qt,Mt=Object(X["a"])(Rt,n,a,!1,null,"11456861",null);e["default"]=Mt.exports},b38b:function(t,e,r){},f8c1:function(t,e,r){"use strict";var n=r("8a9c"),a=r.n(n);a.a}}]);