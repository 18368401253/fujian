webpackJsonp([1],{"+1S/":function(t,i){},0:function(t,i){},"79Et":function(t,i){},"7kEc":function(t,i){},F5I7:function(t,i){},HxAD:function(t,i){},JEhT:function(t,i){},MpZI:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},s,!1,function(t){e("cp38")},null,null).exports,c=e("/ocq"),o={data:function(){return{activeIndex:"1"}},components:{},computed:{},watch:{$route:function(){"/Home"==this.$route.path?this.activeIndex="1":"/childmain2/child1"==this.$route.path?this.activeIndex="2":"/childmain3/child1"==this.$route.path?this.activeIndex="3":this.activeIndex="1"}},mounted:function(){console.log(this.$route),"/Home"==this.$route.path?this.activeIndex="1":"/childmain2/child1"==this.$route.path?this.activeIndex="2":"/childmain3/child1"==this.$route.path&&(this.activeIndex="3")},methods:{handleSelect:function(t,i){console.log(t),console.log(i),1==t?this.$router.push({path:"/Home"}):2==t?this.$router.push({path:"/childmain2/child1"}):3==t&&this.$router.push({path:"/childmain3/child1"})}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Home"},[t.$route.meta.notopbar?t._e():e("div",{staticClass:"maintop"},[t._v("\n    top\n  ")]),t._v(" "),e("router-view"),t._v(" "),t.$route.meta.nodownbar?t._e():e("div",{staticClass:"maindown"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#eee","active-text-color":"#409eff"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[t._v("智慧宗教")]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[t._v("语音导游")]),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[t._v("智慧公园")])],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(o,l,!1,function(t){e("79Et")},null,null).exports,d=e("Dd8w"),m=e.n(d),h=e("NYxO"),u={data:function(){return{PicArr:[{ID:"1",Name:"景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3399.1543380471.jpg?v=6075"},{ID:"2",Name:"景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3401.1543380472.jpg?v=6075"},{ID:"3",Name:"景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3400.1543380471.jpg?v=6075"},{ID:"4",Name:"景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/3400.1543380471.jpg?v=6075"}]}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child1_goback:function(){history.go(-1)},child1_go_pic:function(t){console.log(t),this.$router.push({path:"/childmain/child2",query:{ID:t.ID,Name:t.Name}})}})},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"child1"},[e("div",{staticClass:"child1_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child1_goback}}),t._v(" "),e("div",{staticClass:"child1_top_text"},[t._v("\n      "+t._s(t.$route.query.Name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"child1_main"},t._l(t.PicArr,function(i,a){return e("div",{staticClass:"adress_list",on:{click:function(e){t.child1_go_pic(i)}}},[e("div",{staticClass:"adress_list_img"},[e("img",{attrs:{src:i.ImgUrl}})]),t._v(" "),e("div",{staticClass:"adress_list_text",domProps:{textContent:t._s(i.Name)}})])}))])},staticRenderFns:[]};var p=e("VU/8")(u,_,!1,function(t){e("r7J+")},null,null).exports,v={data:function(){return{img:"https://data.ehometd.com/files/1/17/554/3372.1543367817.jpg?v=51125"}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child2_goback:function(){history.go(-1)},gojindian:function(){this.$router.push({path:"/childmain/child3",query:{ID:this.$route.query.ID,Name:this.$route.query.Name}})},gojianjie:function(){this.$router.push({path:"/childmain/child5",query:{ID:this.$route.query.ID,Name:this.$route.query.Name}})},govr:function(){this.$router.push({path:"/childmain/child4",query:{ID:this.$route.query.ID,Name:this.$route.query.Name}})},gowei:function(){this.$router.push({path:"/childmain4/child1",query:{ID:this.$route.query.ID,Name:this.$route.query.Name}})}})},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"child2"},[e("div",{staticClass:"child2_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child2_goback}}),t._v(" "),e("div",{staticClass:"child2_top_text"},[t._v("\n      "+t._s(t.$route.query.Name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"child2_main"},[e("div",{staticClass:"childmain_child2_img"},[e("img",{attrs:{src:t.img}})]),t._v(" "),e("div",{staticClass:"childmain_child2_btn"},[e("div",{staticClass:"childmain_child2_btn_list btn_list1",on:{click:t.gojindian}},[t._m(0),t._v(" "),e("div",[t._v("\n          景点图片\n        ")])]),t._v(" "),e("div",{staticClass:"childmain_child2_btn_list btn_list3",on:{click:t.govr}},[t._m(1),t._v(" "),e("div",[t._v("\n          VR全景\n        ")])]),t._v(" "),e("div",{staticClass:"childmain_child2_btn_list btn_list2",on:{click:t.gojianjie}},[t._m(2),t._v(" "),e("div",[t._v("\n          简介\n        ")])]),t._v(" "),e("div",{staticClass:"childmain_child2_btn_list btn_list4",on:{click:t.gowei}},[t._m(3),t._v(" "),e("div",[t._v("\n          微官网\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3379.1543370629.png?v=84821"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3376.1543370629.png?v=84821"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3378.1543370629.png?v=84821"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3377.1543370629.png?v=84821"}})])}]};var g=e("VU/8")(v,f,!1,function(t){e("eFEc")},null,null).exports,b={data:function(){return{PicArr:[{ID:"1",Name:"景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3398.1543375329.jpg?v=20019"},{ID:"2",Name:"景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3397.1543375329.jpg?v=20019"},{ID:"3",Name:"景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3396.1543375329.jpg?v=20019"},{ID:"4",Name:"景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/3395.1543375328.jpg?v=20019"}]}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child3_goback:function(){history.go(-1)},child3_go_pic:function(t){console.log(t)}})},C={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain_child3"},[e("div",{staticClass:"child3_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child3_goback}}),t._v(" "),e("div",{staticClass:"child3_top_text"},[t._v("\n      "+t._s(t.$route.query.Name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"child3_main"},t._l(t.PicArr,function(i,a){return e("div",{staticClass:"adress_list",on:{click:function(e){t.child3_go_pic(i)}}},[e("div",{staticClass:"adress_list_img"},[e("img",{attrs:{src:i.ImgUrl}})])])}))])},staticRenderFns:[]};var I=e("VU/8")(b,C,!1,function(t){e("HxAD")},null,null).exports,w={data:function(){return{pana:"https://720yun.com/t/fb2ze0it26s?scene_id=125997"}},computed:m()({},Object(h.b)([])),mounted:function(){document.getElementById("Iframe").style.height=window.screen.height-40+"px"},methods:m()({},Object(h.a)([]),{child3_goback:function(){history.go(-1)}})},x={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child4"},[i("div",{staticClass:"child3_top"},[i("i",{staticClass:"el-icon-arrow-left",on:{click:this.child3_goback}}),this._v(" "),i("div",{staticClass:"child3_top_text"},[this._v("\n      VR全景\n    ")])]),this._v(" "),i("div",{staticClass:"child3_main"},[i("iframe",{attrs:{id:"Iframe",src:this.pana,width:"100%",height:"474",scrolling:"no",frameborder:"0",marginheight:"0",marginwidth:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}})])])},staticRenderFns:[]};var $=e("VU/8")(w,x,!1,function(t){e("myxJ")},null,null).exports,j={data:function(){return{song:"https://data.ehometd.com/files/1/17/554/3369.1543284741.mp3?v=30731",TextArr:[{ID:"1",Name:"中文简介",Text:"奥迪好似的厚爱哈搜地好四大行爱活动哦你按时到都安分类考试的和管理卡换购跟花生豆if还是撒旦啊搜地哈好似回答搜喜欢带欧式按时接电话"},{ID:"2",Name:"英文简介",Text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget."}],textin:""}},computed:m()({},Object(h.b)([])),mounted:function(){this.textin=this.TextArr[0].Text},methods:m()({},Object(h.a)([]),{child5_goback:function(){history.go(-1)}})},U={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain_child5"},[e("div",{staticClass:"child5_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child5_goback}}),t._v(" "),e("div",{staticClass:"child5_top_text"},[t._v("\n      简介\n    ")])]),t._v(" "),e("div",{staticClass:"child5_main"},[t._m(0),t._v(" "),e("div",{staticClass:"child5_main_video"},[e("audio",{attrs:{src:t.song,controls:"controls"}})]),t._v(" "),e("div",{staticClass:"child5_main_text",domProps:{textContent:t._s(t.textin)}})])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"child5_main_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3375.1543369292.jpg?v=40004",alt:""}})])}]};var y=e("VU/8")(j,U,!1,function(t){e("vpRM")},null,null).exports;e("mtWM"),e("mw3O");if(-1!=window.location.href.indexOf("www.ehometd.com"));else;var D=e("7QTg"),k=e.n(D),N={data:function(){return{swiperOption_main:{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}},swiperOption_main2:{slidesPerView:4},ImgUrlArr:[{text:"景点1",Img:"https://data.ehometd.com/files/1/17/554/3406.1543384478.jpg?v=56969",ID:"0",Url:""},{text:"景点2",Img:"https://data.ehometd.com/files/1/17/554/3407.1543384478.jpg?v=56969",ID:"1",Url:""},{text:"景点3",Img:"https://data.ehometd.com/files/1/17/554/3408.1543384479.jpg?v=56969",ID:"2",Url:""},{text:"景点4",Img:"https://data.ehometd.com/files/1/17/554/3409.1543384479.jpg?v=56969",ID:"3",Url:"www.baidu.com"}],PicArr:[{ID:"1",Name:"景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3406.1543384478.jpg?v=56969"},{ID:"2",Name:"景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3407.1543384478.jpg?v=56969"},{ID:"3",Name:"景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3408.1543384479.jpg?v=56969"},{ID:"4",Name:"景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/3409.1543384479.jpg?v=56969"}],PicArrpush:[{ID:"1",Name:"对应景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"2",Name:"对应景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"3",Name:"对应景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"4",Name:"对应景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"5",Name:"对应景点五",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"6",Name:"对应景点六",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"}]}},components:{swiper:D.swiper,swiperSlide:D.swiperSlide},computed:{},mounted:function(){},methods:{home_go_swiper:function(t){console.log(t),""!=t.Url&&(console.log(11),this.$router.push({path:"/advice"}))},childmain2_go_address:function(t,i){console.log(i);var e=document.getElementsByClassName("childmain2_swiper");console.log(e);for(var a=0;a<e.length;a++)e[a].style.border=" 1px solid #ddd",e[a].style.color="#2c3e50";e[i].style.border=" 1px solid #409eff",e[i].style.color="#409eff",this.PicArr=[],this.PicArr=this.PicArrpush},home_go_address:function(t){console.log(t),this.$router.push({path:"/childmain/child1",query:{ID:t.ID,Name:t.Name}})}}},F={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain2_child1"},[e("div",{staticClass:"main"},[e("div",{staticClass:"swipermain"},[e("swiper",{staticClass:"swiper2",attrs:{options:t.swiperOption_main}},[t._l(t.ImgUrlArr,function(i,a){return e("swiper-slide",[e("div",{staticClass:"homeswiper_div",on:{click:function(e){t.home_go_swiper(i)}}},[e("img",{attrs:{src:i.Img}}),t._v(" "),e("div",{staticClass:"homeswiper_bg"},[t._v("\n              "+t._s(i.text)+"\n            ")])])])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),e("div",{staticClass:"address_tab"},[e("swiper",{staticStyle:{"margin-bottom":"10px"},attrs:{options:t.swiperOption_main2}},t._l(8,function(i,a){return e("swiper-slide",[e("div",{staticClass:"childmain2_swiper",style:0==a?"border: 1px solid #409eff;color:#409eff":"border: 1px solid #ddd;color:#2c3e50",on:{click:function(e){t.childmain2_go_address(i,a)}}},[t._v("\n            XX镇\n          ")])])}))],1),t._v(" "),e("div",{staticClass:"adressmain_main2"},t._l(t.PicArr,function(i,a){return e("div",{staticClass:"adress_list_main2",on:{click:function(e){t.home_go_address(i)}}},[e("div",{staticClass:"adress_list_main2_img"},[e("img",{attrs:{src:i.ImgUrl}})]),t._v(" "),e("div",{staticClass:"adress_list_main2_text",domProps:{textContent:t._s(i.Name)}})])}))])])},staticRenderFns:[]};var E=e("VU/8")(N,F,!1,function(t){e("cpVz")},null,null).exports,O={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child2_goback:function(){history.go(-1)},child2_go_pic:function(t){console.log(t)}})},q={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"child2"},[i("div",{staticClass:"child2_top"},[i("i",{staticClass:"el-icon-arrow-left",on:{click:this.child2_goback}}),this._v(" "),i("div",{staticClass:"child2_top_text"},[this._v("\n      "+this._s(this.$route.query.Name)+"\n    ")])]),this._v(" "),i("div",{staticClass:"child2_main"})])},staticRenderFns:[]};var A=e("VU/8")(O,q,!1,function(t){e("ygmI")},null,null).exports,P={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]))},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"child3"},[i("div",{staticClass:"main"},[this._v("\n    child3\n  ")])])}]};var V=e("VU/8")(P,R,!1,function(t){e("MpZI")},null,null).exports,M={data:function(){return{swiperOption_main:{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}},swiperOption_main2:{slidesPerView:4},ImgUrlArr:[{text:"景点1",Img:"https://data.ehometd.com/files/1/17/554/3406.1543384478.jpg?v=56969",ID:"0",Url:""},{text:"景点2",Img:"https://data.ehometd.com/files/1/17/554/3407.1543384478.jpg?v=56969",ID:"1",Url:""},{text:"景点3",Img:"https://data.ehometd.com/files/1/17/554/3408.1543384479.jpg?v=56969",ID:"2",Url:""},{text:"景点4",Img:"https://data.ehometd.com/files/1/17/554/3409.1543384479.jpg?v=56969",ID:"3",Url:"www.baidu.com"}],PicArr:[{ID:"1",Name:"景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/557/3410.1543385839.jpg?v=43677"},{ID:"2",Name:"景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/557/3411.1543385840.jpg?v=43677"},{ID:"3",Name:"景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/557/3412.1543385840.jpg?v=43677"},{ID:"4",Name:"景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/557/3413.1543385840.jpg?v=43677"}],PicArrpush:[{ID:"1",Name:"对应景点一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"2",Name:"对应景点二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"3",Name:"对应景点三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"4",Name:"对应景点四",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"5",Name:"对应景点五",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"},{ID:"6",Name:"对应景点六",ImgUrl:"https://data.ehometd.com/files/1/17/554/3367.1543219578.png?v=37640"}]}},components:{swiper:D.swiper,swiperSlide:D.swiperSlide},computed:{},mounted:function(){},methods:{home_go_swiper:function(t){console.log(t),""!=t.Url&&(console.log(11),this.$router.push({path:"/advice"}))},home_go_address:function(t){console.log(t),this.$router.push({path:"/childmain/child5",query:{ID:t.ID,Name:t.Name}})}}},B={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain3_child1"},[e("div",{staticClass:"main"},[e("div",{staticClass:"swipermain"},[e("swiper",{staticClass:"swiper2",attrs:{options:t.swiperOption_main}},[t._l(t.ImgUrlArr,function(i,a){return e("swiper-slide",[e("div",{staticClass:"homeswiper_div",on:{click:function(e){t.home_go_swiper(i)}}},[e("img",{attrs:{src:i.Img}}),t._v(" "),e("div",{staticClass:"homeswiper_bg"},[t._v("\n              "+t._s(i.text)+"\n            ")])])])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),e("div",{staticClass:"adressmain_main2"},t._l(t.PicArr,function(i,a){return e("div",{staticClass:"adress_list_main2",on:{click:function(e){t.home_go_address(i)}}},[e("div",{staticClass:"adress_list_main2_img"},[e("img",{attrs:{src:i.ImgUrl}})]),t._v(" "),e("div",{staticClass:"adress_list_main2_text",domProps:{textContent:t._s(i.Name)}})])}))])])},staticRenderFns:[]};var H=e("VU/8")(M,B,!1,function(t){e("bpfL")},null,null).exports,S={data:function(){return{song:"https://data.ehometd.com/files/1/17/554/3369.1543284741.mp3?v=30731",isPlaying:!1}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child2_goback:function(){history.go(-1)},play_song:function(t){var i=document.getElementById("xqt");this.isPlaying?(i.pause(),this.isPlaying=!1):(i.play(),this.isPlaying=!0)}})},T={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain3_child2"},[e("div",{staticClass:"child2_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child2_goback}}),t._v(" "),e("div",{staticClass:"child2_top_text"},[t._v("\n      "+t._s(t.$route.query.Name)+"\n    ")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"child2_main"},[e("audio",{attrs:{id:"xqt",src:t.song}}),t._v(" "),e("div",{staticClass:"childmain3_child2_btn",on:{click:t.play_song}},[t.isPlaying?e("span",[t._v("暂停")]):e("span",[t._v("播放音频")])]),t._v(" "),e("div",{staticClass:"childmain3_child2_text"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis \n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain3_child2_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/409/2728.1535011598jpg?v=96158"}})])}]};var L=e("VU/8")(S,T,!1,function(t){e("F5I7")},null,null).exports,z={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]))},J={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"child3"},[i("div",{staticClass:"main"},[this._v("\n    child3\n  ")])])}]};var X=e("VU/8")(z,J,!1,function(t){e("JEhT")},null,null).exports,Z={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{child1_goback:function(){history.go(-1)},gojindian_4:function(){console.log(123123),this.$router.push({path:"/childmain4/child2",query:{ID:this.$route.query.ID}})},gojianjie_4:function(){this.$router.push({path:"/childmain4/child3",query:{ID:this.$route.query.ID}})},gowei_4:function(){this.$router.push({path:"/childmain4/child4",query:{ID:this.$route.query.ID}})},govr_4:function(){this.$router.push({path:"/childmain/child4",query:{ID:this.$route.query.ID}})}})},Q={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmain4_child1"},[e("div",{staticClass:"child1_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.child1_goback}}),t._v(" "),e("div",{staticClass:"child1_top_text"},[t._v("\n      微官网\n    ")])]),t._v(" "),e("div",{staticClass:"child1_main"},[t._m(0),t._v(" "),e("div",{staticClass:"childmai4_child1_btn"},[e("div",{staticClass:"childmai4_child1_btn_list btn_list1",on:{click:t.gojindian_4}},[t._m(1),t._v(" "),e("div",[t._v("\n          景点分布\n        ")])]),t._v(" "),e("div",{staticClass:"childmai4_child1_btn_list btn_list2",on:{click:t.gojianjie_4}},[t._m(2),t._v(" "),e("div",[t._v("\n          新闻发布\n        ")])]),t._v(" "),e("div",{staticClass:"childmai4_child1_btn_list btn_list3",on:{click:t.gowei_4}},[t._m(3),t._v(" "),e("div",[t._v("\n          联系我们\n        ")])]),t._v(" "),e("div",{staticClass:"childmai4_child1_btn_list btn_list4",on:{click:t.govr_4}},[t._m(4),t._v(" "),e("div",[t._v("\n          VR展示\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmai4_child1_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3372.1543367817.jpg?v=51125",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3391.1543375028.png?v=71124"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3392.1543375028.png?v=71124"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3393.1543375028.png?v=71124"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain_child2_btn_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3394.1543375029.png?v=71124"}})])}]};var W=e("VU/8")(Z,Q,!1,function(t){e("bQMC")},null,null).exports,Y={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{childmai4_child2_goback:function(){history.go(-1)}})},G={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmai4_child2"},[i("div",{staticClass:"childmai4_child2_top"},[i("i",{staticClass:"el-icon-arrow-left",on:{click:this.childmai4_child2_goback}}),this._v(" "),i("div",{staticClass:"childmai4_child2_top_text"},[this._v("\n      景点分布\n    ")])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmai4_child2_main"},[i("div",{staticClass:"childmai4_child2_main_tit"},[this._v("\n      标题\n    ")]),this._v(" "),i("div",{staticClass:"childmai4_child2_main_text"},[this._v("\n      这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文这是正文\n    ")])])}]};var K=e("VU/8")(Y,G,!1,function(t){e("nIeK")},null,null).exports,tt={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]),{childmai4_child3_goback:function(){history.go(-1)},go_newpape:function(t){console.log(t),this.$router.push({path:"/childmain4/child3_1",query:{ID:t.ID}})}})},it={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmai4_child3"},[e("div",{staticClass:"childmai4_child3_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.childmai4_child3_goback}}),t._v(" "),e("div",{staticClass:"childmai4_child3_top_text"},[t._v("\n      新闻动态\n    ")])]),t._v(" "),e("div",{staticClass:"childmai4_child3_main"},t._l(5,function(i,a){return e("div",{staticClass:"childmai4_child3_main_list",on:{click:function(e){t.go_newpape(i)}}},[t._m(0,!0),t._v(" "),e("div",{staticClass:"childmai4_child3_main_list_line"})])}))])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmai4_child3_main_list_main"},[i("div",{staticClass:"childmai4_child3_main_list_tit"},[this._v("\n          新闻标题\n        ")]),this._v(" "),i("div",{staticClass:"childmai4_child3_main_list_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3405.1543381635.jpg?v=53093",alt:""}})])])}]};var et=e("VU/8")(tt,it,!1,function(t){e("hVcX")},null,null).exports,at={data:function(){return{html:""}},computed:m()({},Object(h.b)([])),mounted:function(){var t=this;this.$http.get("https://www.ehometd.com/temporary/api/org/all.php",{params:{fc:"selarticle",ID:302,Type:2,Num:0}}).then(function(i){console.log(i.data.Info),t.html=i.data.Info}).catch(function(t){console.log(t)})},methods:m()({},Object(h.a)([]),{childmai4_child3_1_goback:function(){history.go(-1)},go_newpape:function(t){console.log(t)}})},st={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"childmai4_child3_1"},[e("div",{staticClass:"childmai4_child3_1_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.childmai4_child3_1_goback}}),t._v(" "),e("div",{staticClass:"childmai4_child3_1_top_text"},[t._v("\n      新闻\n    ")])]),t._v(" "),e("div",{staticClass:"childmai4_child3_1_main"},[t._m(0),t._v(" "),e("div",{staticClass:"childmai4_child3_1_main_text",domProps:{innerHTML:t._s(t.html)}})])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmai4_child3_1_main_tit"},[this._v("\n      新闻标题\n      "),i("p",[this._v("2018-11-28")])])}]};var nt=e("VU/8")(at,st,!1,function(t){e("d0q+")},null,null).exports,ct={data:function(){return{addressimg:"https://data.ehometd.com/files/1/17/554/3381.1543371828.jpg?v=90262",lng:121.57900597,lat:29.88525897}},computed:m()({},Object(h.b)([])),mounted:function(){this.map()},methods:m()({},Object(h.a)([]),{map:function(){var t=new BMap.Map(this.$refs.allmap);t.centerAndZoom(new BMap.Point(this.lng,this.lat),11),t.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),t.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT})),t.addControl(new BMap.NavigationControl);var i=new BMap.Geocoder,e=new BMap.Point(this.lng,this.lat),a=new BMap.Marker(e);t.addOverlay(a);var s=this;a.addEventListener("click",function(){i.getLocation(new BMap.Point(s.lng,s.lat),function(t){console.log(t),t&&alert(t.address)})}),t.setCurrentCity("北京"),t.enableScrollWheelZoom(!0)},child4_goback:function(){history.go(-1)}})},ot={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"childmain4_child4"},[i("div",{staticClass:"child4_top"},[i("i",{staticClass:"el-icon-arrow-left",on:{click:this.child4_goback}}),this._v(" "),i("div",{staticClass:"child4_top_text"},[this._v("\n      联系我们\n    ")])]),this._v(" "),i("div",{staticClass:"child4_main"},[i("div",{ref:"allmap",attrs:{id:"allmap"}})])])},staticRenderFns:[]};var lt=e("VU/8")(ct,ot,!1,function(t){e("k3g/")},null,null).exports,rt={data:function(){return{}},computed:m()({},Object(h.b)([])),mounted:function(){},methods:m()({},Object(h.a)([]))},dt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Child2"},[i("div",{staticClass:"main"},[this._v("\n    是的噶一傻傻的\n  ")])])}]};var mt=e("VU/8")(rt,dt,!1,function(t){e("7kEc")},null,null).exports,ht={data:function(){return{swiperOption_main:{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}},ImgUrlArr:[{text:"景点1",Img:"https://data.ehometd.com/files/1/17/554/3406.1543384478.jpg?v=56969",ID:"0",Url:""},{text:"景点2",Img:"https://data.ehometd.com/files/1/17/554/3407.1543384478.jpg?v=56969",ID:"1",Url:""},{text:"景点3",Img:"https://data.ehometd.com/files/1/17/554/3408.1543384479.jpg?v=56969",ID:"2",Url:""},{text:"景点4",Img:"https://data.ehometd.com/files/1/17/554/3409.1543384479.jpg?v=56969",ID:"3",Url:"www.baidu.com"}],AddressArr:[{ID:"1",Name:"地区一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3404.1543381429.jpg?v=70979"},{ID:"2",Name:"地区二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3403.1543381428.jpg?v=70979"},{ID:"3",Name:"地区三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3402.1543381428.jpg?v=70979"},{ID:"1",Name:"地区一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3404.1543381429.jpg?v=70979"},{ID:"2",Name:"地区二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3403.1543381428.jpg?v=70979"},{ID:"3",Name:"地区三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3402.1543381428.jpg?v=70979"},{ID:"1",Name:"地区一",ImgUrl:"https://data.ehometd.com/files/1/17/554/3404.1543381429.jpg?v=70979"},{ID:"2",Name:"地区二",ImgUrl:"https://data.ehometd.com/files/1/17/554/3403.1543381428.jpg?v=70979"},{ID:"3",Name:"地区三",ImgUrl:"https://data.ehometd.com/files/1/17/554/3402.1543381428.jpg?v=70979"}]}},components:{swiper:D.swiper,swiperSlide:D.swiperSlide},computed:{},mounted:function(){},methods:{home_go_swiper:function(t){console.log(t),""!=t.Url&&(console.log(11),this.$router.push({path:"/advice"}))},home_go_address:function(t){console.log(t),this.$router.push({path:"/childmain/child1",query:{ID:t.ID,Name:t.Name}})}}},ut={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Homemain"},[e("div",{staticClass:"main"},[e("div",{staticClass:"swipermain"},[e("swiper",{staticClass:"swiper2",attrs:{options:t.swiperOption_main}},[t._l(t.ImgUrlArr,function(i,a){return e("swiper-slide",[e("div",{staticClass:"homeswiper_div",on:{click:function(e){t.home_go_swiper(i)}}},[e("img",{attrs:{src:i.Img}}),t._v(" "),e("div",{staticClass:"homeswiper_bg"},[t._v("\n              "+t._s(i.text)+"\n            ")])])])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),e("div",{staticClass:"adressmain"},t._l(t.AddressArr,function(i,a){return e("div",{staticClass:"adress_list",on:{click:function(e){t.home_go_address(i)}}},[e("div",{staticClass:"adress_list_img"},[e("img",{attrs:{src:i.ImgUrl}})]),t._v(" "),e("div",{staticClass:"adress_list_text",domProps:{textContent:t._s(i.Name)}})])}))])])},staticRenderFns:[]};var _t=e("VU/8")(ht,ut,!1,function(t){e("ff+X")},null,null).exports,pt={data:function(){return{inputtel:"",inputadd:"",ruleForm:{name:"",tel:"",email:"",choose:"",desc:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],tel:[{required:!0,message:"请输入手机号",trigger:"blur"}]}}},components:{},computed:{},mounted:function(){},methods:{advice_goback:function(){history.go(-1)},submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(t){this.$refs[t].resetFields(),history.go(-1)}}},vt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"advice"},[e("div",{staticClass:"advice_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:t.advice_goback}}),t._v(" "),e("div",{staticClass:"advice_top_text"},[t._v("\n      投诉建议\n    ")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"advice_main"},[e("div",{staticClass:"advice_main_div"},[e("el-input",{attrs:{placeholder:"投诉电话"},model:{value:t.inputtel,callback:function(i){t.inputtel=i},expression:"inputtel"}})],1),t._v(" "),e("div",{staticClass:"advice_main_div",staticStyle:{"margin-bottom":"20px"}},[e("el-input",{attrs:{placeholder:"旅游局地址"},model:{value:t.inputadd,callback:function(i){t.inputadd=i},expression:"inputadd"}})],1),t._v(" "),e("div",{staticClass:"advice_main_form"},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"60px","label-position":"left"}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{model:{value:t.ruleForm.name,callback:function(i){t.$set(t.ruleForm,"name",i)},expression:"ruleForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"手机",prop:"tel"}},[e("el-input",{model:{value:t.ruleForm.tel,callback:function(i){t.$set(t.ruleForm,"tel",i)},expression:"ruleForm.tel"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"邮箱"}},[e("el-input",{model:{value:t.ruleForm.email,callback:function(i){t.$set(t.ruleForm,"email",i)},expression:"ruleForm.email"}})],1),t._v(" "),e("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"类型"}},[e("el-radio-group",{model:{value:t.ruleForm.choose,callback:function(i){t.$set(t.ruleForm,"choose",i)},expression:"ruleForm.choose"}},[e("el-radio",{attrs:{label:"投诉"}}),t._v(" "),e("el-radio",{attrs:{label:"建议"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"内容"}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4}},model:{value:t.ruleForm.desc,callback:function(i){t.$set(t.ruleForm,"desc",i)},expression:"ruleForm.desc"}})],1),t._v(" "),e("el-form-item",{staticStyle:{"text-align":"right"}},[e("el-button",{on:{click:function(i){t.resetForm("ruleForm")}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"advice_main_img"},[i("img",{attrs:{src:"https://data.ehometd.com/files/1/17/554/3382.1543372754.jpg?v=66373",alt:""}})])}]};var ft=e("VU/8")(pt,vt,!1,function(t){e("+1S/")},null,null).exports;a.default.use(c.a);var gt=new c.a({routes:[{path:"/",name:"Home",component:r,redirect:"/Home",children:[{path:"Home",component:_t,meta:{notopbar:!0,nodownbar:!1}}]},{path:"/",name:"建议",component:r,redirect:"/advice",children:[{path:"advice",component:ft,meta:{notopbar:!0,nodownbar:!0}}]},{path:"/child",name:"Home",component:r,redirect:"/child",children:[{path:"/child",component:mt,meta:{notopbar:!1,nodownbar:!1}}]},{path:"/childmain",name:"childmain",component:r,redirect:"/childmain/child1",children:[{path:"child1",component:p,meta:{notopbar:!0,nodownbar:!0}},{path:"child2",component:g,meta:{notopbar:!0,nodownbar:!0}},{path:"child3",component:I,meta:{notopbar:!0,nodownbar:!0}},{path:"child4",component:$,meta:{notopbar:!0,nodownbar:!0}},{path:"child5",component:y,meta:{notopbar:!0,nodownbar:!0}}]},{path:"/childmain2",name:"childmain",component:r,redirect:"/childmain2/child1",children:[{path:"child1",component:E,meta:{notopbar:!0,nodownbar:!1}},{path:"child2",component:A,meta:{notopbar:!0,nodownbar:!0}},{path:"child3",component:V,meta:{notopbar:!0,nodownbar:!0}}]},{path:"/childmain3",name:"childmain",component:r,redirect:"/childmain3/child1",children:[{path:"child1",component:H,meta:{notopbar:!0,nodownbar:!1}},{path:"child2",component:L,meta:{notopbar:!0,nodownbar:!0}},{path:"child3",component:X,meta:{notopbar:!0,nodownbar:!0}}]},{path:"/childmain4",name:"childmain",component:r,redirect:"/childmain4/child1",children:[{path:"child1",component:W,meta:{notopbar:!0,nodownbar:!0}},{path:"child2",component:K,meta:{notopbar:!0,nodownbar:!0}},{path:"child3",component:et,meta:{notopbar:!0,nodownbar:!0}},{path:"child3_1",component:nt,meta:{notopbar:!0,nodownbar:!0}},{path:"child4",component:lt,meta:{notopbar:!0,nodownbar:!0}}]}]}),bt=e("8+8L"),Ct=(e("v2ns"),e("zL8q")),It=e.n(Ct),wt=(e("tvR6"),e("dAEq")),xt=e.n(wt);a.default.use(xt.a,{ak:"PfjVmj5U8aFG0p7IH4nNlFOeXmUZpL5Y"}),a.default.use(It.a),a.default.use(bt.a),a.default.use(k.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:gt,components:{App:n},template:"<App/>"})},bQMC:function(t,i){},bpfL:function(t,i){},cp38:function(t,i){},cpVz:function(t,i){},"d0q+":function(t,i){},eFEc:function(t,i){},"ff+X":function(t,i){},hVcX:function(t,i){},"k3g/":function(t,i){},myxJ:function(t,i){},nIeK:function(t,i){},"r7J+":function(t,i){},tvR6:function(t,i){},v2ns:function(t,i){},vpRM:function(t,i){},ygmI:function(t,i){}},["NHnr"]);