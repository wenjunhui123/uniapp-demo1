(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"2e09":function(t,n,e){"use strict";var a=e("9e7f"),i=e.n(a);i.a},"5a0c":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={newsbos:function(){return e.e("components/newsbos/newsbos").then(e.bind(null,"43b8"))}},i=function(){var t=this.$createElement,n=(this._self._c,this.listArr.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},r=[]},"9e7f":function(t,n,e){},a3b6:function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("23b7");a(e("66fd"));var i=a(e("b818"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},aa0e:function(t,n,e){"use strict";e.r(n);var a=e("c920"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},b818:function(t,n,e){"use strict";e.r(n);var a=e("5a0c"),i=e("aa0e");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("2e09");var c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"217cf44e",null,!1,a["a"],void 0);n["default"]=o.exports},c920:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{listArr:[]}},onShow:function(){this.getData()},methods:{goDetail:function(n){t.navigateTo({url:"/pages/detail/detail?cid=".concat(n.classid,"&id=").concat(n.id)})},getData:function(){var n=t.getStorageSync("historyArr")||[];this.listArr=n,console.log(5555,this.listArr)}}};n.default=e}).call(this,e("543d")["default"])}},[["a3b6","common/runtime","common/vendor"]]]);