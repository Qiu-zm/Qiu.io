(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7b3d9b"],{1276:function(t,s,e){"use strict";var i=e("d784"),n=e("44e7"),a=e("825a"),o=e("1d80"),r=e("4840"),c=e("8aa5"),l=e("50c4"),d=e("14c3"),u=e("9263"),h=e("d039"),p=[].push,f=Math.min,v=4294967295,m=!h((function(){return!RegExp(v,"y")}));i("split",2,(function(t,s,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(o(this)),a=void 0===e?v:e>>>0;if(0===a)return[];if(void 0===t)return[i];if(!n(t))return s.call(i,t,a);var r,c,l,d=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,h+"g");while(r=u.call(m,i)){if(c=m.lastIndex,c>f&&(d.push(i.slice(f,r.index)),r.length>1&&r.index<i.length&&p.apply(d,r.slice(1)),l=r[0].length,f=c,d.length>=a))break;m.lastIndex===r.index&&m.lastIndex++}return f===i.length?!l&&m.test("")||d.push(""):d.push(i.slice(f)),d.length>a?d.slice(0,a):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,e){var n=o(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,n,e):i.call(String(n),s,e)},function(t,n){var o=e(i,t,this,n,i!==s);if(o.done)return o.value;var u=a(t),h=String(this),p=r(u,RegExp),g=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),y=new p(m?u:"^(?:"+u.source+")",b),w=void 0===n?v:n>>>0;if(0===w)return[];if(0===h.length)return null===d(y,h)?[h]:[];var x=0,C=0,k=[];while(C<h.length){y.lastIndex=m?C:0;var A,_=d(y,m?h:h.slice(C));if(null===_||(A=f(l(y.lastIndex+(m?0:C)),h.length))===x)C=c(h,C,g);else{if(k.push(h.slice(x,C)),k.length===w)return k;for(var S=1;S<=_.length-1;S++)if(k.push(_[S]),k.length===w)return k;C=x=A}}return k.push(h.slice(x)),k}]}),!m)},"2f14":function(t,s,e){"use strict";e.d(s,"a",(function(){return o}));e("99af"),e("fb6a");var i=e("d4ec"),n=e("bee2"),a=function(){function t(){Object(i["a"])(this,t)}return Object(n["a"])(t,[{key:"queryString",value:function(t){console.log(t);var s="";for(var e in t)s+="".concat(e,"=").concat(t[e],"&");return s.slice(0,-1)}}]),t}(),o=new a},3174:function(t,s,e){},"76a1":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pay"},[e("van-nav-bar",{attrs:{title:"提交订单","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),e("div",{staticClass:"bgcolor"}),e("div",{staticClass:"pay-siteBox"},[e("van-cell",{attrs:{"is-link":""},on:{click:t.showPopup}},[t._v("选择收货地址")]),e("van-popup",{style:{height:"70%"},attrs:{position:"bottom"},model:{value:t.isressshow,callback:function(s){t.isressshow=s},expression:"isressshow"}},[0!=t.list.lenght?e("div",[e("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.newAddress,select:t.selectAddress,edit:t.goaddress},model:{value:t.chosenAddressId,callback:function(s){t.chosenAddressId=s},expression:"chosenAddressId"}})],1):e("div",[e("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.newAddress,select:t.selectAddress,edit:t.goaddress},model:{value:t.chosenAddressId,callback:function(s){t.chosenAddressId=s},expression:"chosenAddressId"}}),e("van-empty",{attrs:{description:"地址空空如也,快去添加吧"}})],1)]),e("div",{staticClass:"siteBox-text"},[e("div",{staticClass:"clearfix site-box"},[e("div",{staticClass:"fl site-name"},[t._v(t._s(t.currentAddress.name))]),e("div",{staticClass:"fl site-phone"},[t._v(t._s(t.currentAddress.tel))])]),e("div",{staticClass:"sites"},[t._v(t._s(t.currentAddress.address))])]),e("div",{staticClass:"delivery"},[e("van-cell",{staticClass:"clearfix",attrs:{"is-link":""},on:{click:t.nowshowPopup}},[e("div",{staticClass:"fl delivery-title"},[t._v("立即送出")]),""==t.currentTime?e("div",{staticClass:"fr delivery-time"},[t._v("请选择配送时间")]):e("div",{staticClass:"fr delivery-time"},[t._v("大约 "+t._s(t.currentTime)+" 送达")])]),e("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.istimeshow,callback:function(s){t.istimeshow=s},expression:"istimeshow"}},[e("van-datetime-picker",{attrs:{type:"time",title:"选择时间","min-hour":0,"max-hour":23},on:{confirm:t.nowshowPopup},model:{value:t.currentTime,callback:function(s){t.currentTime=s},expression:"currentTime"}})],1)],1)],1),e("div",{staticClass:"shopbag"},[t._l(t.shopbagData,(function(s,i){return e("div",{key:i,staticClass:"shopItem clearfix"},[e("div",{staticClass:"shopbag-img fl"},[e("img",{staticClass:"auto-img",attrs:{src:s.small_img,alt:""}})]),e("div",{staticClass:"fl shopbag-right"},[e("div",{staticClass:"shopbag-name"},[t._v(" "+t._s(s.name)+" "),e("span",[t._v(t._s(s.rule))])]),e("div",{staticClass:"shopbag-enname"},[t._v(t._s(s.enname))]),e("div",{staticClass:"clearfix shopbag-foot"},[e("div",{staticClass:"fl shopbag-price"},[t._v("¥"+t._s(s.price))]),e("div",{staticClass:"fr shopbag-count"},[t._v("X"+t._s(s.count))])])])])})),e("div",{staticClass:"dispatching"},[e("div",{staticClass:"clearfix dispatching-box"},[e("div",{staticClass:"dispatching-title"},[t._v("配送费")]),e("div",[e("div",{staticClass:"fl dispatching-text"},[t._v("满35元免配送费")]),e("div",{staticClass:"fr dispatching-price"},[t._v("¥"+t._s(t.shippingFee))])])])]),e("div",{staticClass:"shopElse"},[e("div",{staticClass:"shopElse-top"},[e("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(s){t.showList=!0}}}),e("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(s){t.showList=s},expression:"showList"}},[e("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1),e("div",{staticClass:"delivery"},[e("van-cell",{staticClass:"clearfix",attrs:{"is-link":""},on:{click:t.onPayment}},[e("div",{staticClass:"fl delivery-title"},[t._v("支付方式")]),e("div",{staticClass:"fr delivery-time"},[t._v(t._s(t.Payment))])]),e("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.Paymentshow,callback:function(s){t.Paymentshow=s},expression:"Paymentshow"}},[e("van-radio-group",{model:{value:t.Payment,callback:function(s){t.Payment=s},expression:"Payment"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(s){t.Payment="微信支付"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:"微信支付"}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"支付宝支付",clickable:""},on:{click:function(s){t.Payment="支付宝支付"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:"支付宝支付"}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"银行卡支付",clickable:""},on:{click:function(s){t.Payment="银行卡支付"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-radio",{attrs:{name:"银行卡支付"}})]},proxy:!0}])})],1)],1)],1)],1),e("div",[e("van-field",{attrs:{rows:"2",autosize:"",label:"备注",type:"textarea",maxlength:"50",placeholder:"还有什么需要交代吗","show-word-limit":""},model:{value:t.message,callback:function(s){t.message=s},expression:"message"}})],1)])],2),e("div",[e("van-submit-bar",{attrs:{price:100*t.product.total,"button-text":"立即结算"},on:{submit:t.onSubmit}})],1)],1)},n=[],a=(e("d81d"),e("b0c0"),e("ac1f"),e("1276"),e("3174"),e("2f14")),o={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},r={data:function(){return{price:0,currentTime:"",Payment:"支付方式",Paymentshow:!1,shippingFee:7,message:"",isressshow:!1,istimeshow:!1,showList:!1,chosenCoupon:-1,coupons:[o],disabledCoupons:[o],currentAddress:{name:"",tel:"",address:""},chosenAddressId:"1",list:[],shopbagData:[],product:{count:0,total:0},sids:[]}},created:function(){this.sids=this.$route.query.sids.split("-"),this.getShopbagDataBySids(),this.getReceiveAddress(),this.grossAmount()},methods:{grossAmount:function(){this.shopbagData.map((function(t){}))},back:function(){this.$router.go(-1)},goaddress:function(){this.$router.push({name:"Address"})},selectAddress:function(t,s){for(var e in this.isressshow=!1,this.currentAddress)this.currentAddress[e]=t[e]},newAddress:function(t){this.$router.push({name:"NewAddress"})},getReceiveAddress:function(){var t=this,s=localStorage.getItem("CSTK");s&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:s}}).then((function(s){t.$toast.clear(),2e4===s.data.code&&s.data.result.map((function(s){var e=s.province+s.city+s.county+s.addressDetail;t.list.push({id:s.aid,name:s.name,tel:s.tel,address:e,isDefault:Boolean(s.isDefault)}),Boolean(s.isDefault)&&(t.chosenAddressId=s.aid,t.currentAddress.name=s.name,t.currentAddress.tel=s.tel,t.currentAddress.address=e)}))})).catch((function(s){t.$toast.clear()})))},getShopbagDataBySids:function(){var t=this,s=localStorage.getItem("CSTK");s&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:s,sids:JSON.stringify(this.sids)}}).then((function(s){t.$toast.clear(),5e4==s.data.code&&(s.data.result.map((function(s){t.product.count+=s.count,t.product.total+=s.count*s.price})),t.shopbagData=s.data.result)})).catch((function(s){t.$toast.clear()})))},onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(t){this.coupons.push(o)},showPopup:function(){this.isressshow=!this.isressshow},nowshowPopup:function(){this.istimeshow=!this.istimeshow},onPayment:function(){this.Paymentshow=!this.Paymentshow},onSubmit:function(){var t=this;if(""!=this.chosenAddressId)if(""!=this.currentTime)if("支付方式"!=this.Payment){var s=localStorage.getItem("CSTK");if(s){var e=a["a"].queryString({appkey:this.appkey,tokenString:s,sids:JSON.stringify(this.sids),phone:this.currentAddress.tel,address:this.currentAddress.address,receiver:this.currentAddress.name,Payment:this.Payment,currentTime:this.currentTime,shippingFee:this.shippingFee,message:this.message});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/pay",data:e}).then((function(s){t.$toast.clear(),t.$toast(s.data.msg),6e4==s.data.code&&t.$router.push({name:"Order"})})).catch((function(s){t.$toast.clear()}))}}else this.$toast("请选择支付方式");else this.$toast("请选择收货时间");else this.$toast("请选择收货地址")}}},c=r,l=e("2877"),d=Object(l["a"])(c,i,n,!1,null,null,null);s["default"]=d.exports},"99af":function(t,s,e){"use strict";var i=e("23e7"),n=e("d039"),a=e("e8b5"),o=e("861d"),r=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),h=e("b622"),p=e("2d00"),f=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=u("concat"),y=function(t){if(!o(t))return!1;var s=t[f];return void 0!==s?!!s:a(t)},w=!g||!b;i({target:"Array",proto:!0,forced:w},{concat:function(t){var s,e,i,n,a,o=r(this),u=d(o,0),h=0;for(s=-1,i=arguments.length;s<i;s++)if(a=-1===s?o:arguments[s],y(a)){if(n=c(a.length),h+n>v)throw TypeError(m);for(e=0;e<n;e++,h++)e in a&&l(u,h,a[e])}else{if(h>=v)throw TypeError(m);l(u,h++,a)}return u.length=h,u}})},b0c0:function(t,s,e){var i=e("83ab"),n=e("9bf2").f,a=Function.prototype,o=a.toString,r=/^\s*function ([^ (]*)/,c="name";i&&!(c in a)&&n(a,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},bee2:function(t,s,e){"use strict";function i(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,s,e){return s&&i(t.prototype,s),e&&i(t,e),t}e.d(s,"a",(function(){return n}))},d4ec:function(t,s,e){"use strict";function i(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}e.d(s,"a",(function(){return i}))},d81d:function(t,s,e){"use strict";var i=e("23e7"),n=e("b727").map,a=e("1dde"),o=e("ae40"),r=a("map"),c=o("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2e7b3d9b.27e2e206.js.map