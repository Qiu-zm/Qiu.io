(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbc5ea88"],{a821:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-address"},[s("van-nav-bar",{attrs:{title:"地址管理","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.newAddress,edit:t.editAddress},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},a=[],d=(s("d81d"),s("b0c0"),s("ce26"),{data:function(){return{chosenAddressId:"",list:[]}},created:function(){this.getReceiveAddress()},methods:{back:function(){this.$router.go(-1)},newAddress:function(){this.$router.push({name:"NewAddress"})},editAddress:function(t){this.$router.push({name:"NewAddress",query:{aid:t.id}})},getReceiveAddress:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),2e4==e.data.code&&e.data.result.map((function(e){var s=e.province+e.city+e.county+e.addressDetail;t.list.push({id:e.aid,name:e.name,tel:e.tel,address:s,isDefault:Boolean(e.isDefault)})}))})).catch((function(e){t.$toast.clear()})))}}}),i=d,r=s("2877"),o=Object(r["a"])(i,n,a,!1,null,null,null);e["default"]=o.exports},b0c0:function(t,e,s){var n=s("83ab"),a=s("9bf2").f,d=Function.prototype,i=d.toString,r=/^\s*function ([^ (]*)/,o="name";n&&!(o in d)&&a(d,o,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},ce26:function(t,e,s){},d81d:function(t,e,s){"use strict";var n=s("23e7"),a=s("b727").map,d=s("1dde"),i=s("ae40"),r=d("map"),o=i("map");n({target:"Array",proto:!0,forced:!r||!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-fbc5ea88.5a5d0945.js.map