(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["timer"],{"69a5":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("time spend on the page: "+e._s(e.timeOnPageFormatted))])},r=[],a={name:"timer",data:function(){return{currentTimeDifference:null,timerInterval:null}},created:function(){this.updateTime(),this.timerInterval=setInterval(this.updateTime,1e3)},destroyed:function(){clearInterval(this.timerInterval)},computed:{timeOnPageFormatted:function(){return"".concat(this.currentTimeDifference/1e3," sec")}},methods:{getTimeDifference:function(){var e=(new Date).getTime();return 1e3*Math.round((e-this.$store.state.openingTimestamp)/1e3)},updateTime:function(){this.currentTimeDifference?this.currentTimeDifference+=1e3:this.currentTimeDifference=this.getTimeDifference()}}},c=a,u=n("2877"),m=Object(u["a"])(c,i,r,!1,null,"74e4f189",null);t["default"]=m.exports}}]);
//# sourceMappingURL=timer.a631a7e5.js.map