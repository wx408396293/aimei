webpackJsonp([40],{575:function(t,a,i){function n(t){i(851)}var e=i(92)(i(674),i(932),n,"data-v-9c46f138",null);t.exports=e.exports},674:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(137),e=i.n(n),s=i(93),A=i(31);a.default={name:"auditedBasic",created:function(){this.id=this.audite_A.id,void 0===this.audite_A.id&&A.a.push("/info/artistManagement/auditedList")},data:function(){return{reason:"",id:""}},computed:e()({},i.i(s.b)("pendingList",["audite_A","jumphomepage"]),{RevokWhy:{get:function(){return this.$store.state.pendingList.RevokWhy},set:function(){}}}),methods:e()({},i.i(s.d)("pendingList",["REVOKAUDITED"]),i.i(s.c)("pendingList",["pending_details","getadopt","getRevokWhy"]),{RevokeButon:function(){this.getRevokWhy()},RevokWhyList:function(){this.REVOKAUDITED({id:this.id,reason:this.reason})},temporaryBUtton:function(){A.a.push("/info/artistManagement/auditedList")}})}},785:function(t,a,i){a=t.exports=i(565)(!0),a.push([t.i,".cantent[data-v-9c46f138]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.button[data-v-9c46f138],.namens[data-v-9c46f138],.names_maix[data-v-9c46f138]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.namens[data-v-9c46f138]{margin-bottom:20px}.names_maix[data-v-9c46f138]{margin-right:40px}.names_maix>span[data-v-9c46f138]{border-bottom:1px solid #333}.names_maix>label[data-v-9c46f138]{margin-right:6px}.namens>p[data-v-9c46f138],.p>p[data-v-9c46f138],.textarea>p[data-v-9c46f138]{padding:0;margin:0;margin-bottom:10px}.names_maix>img[data-v-9c46f138]{height:140px;width:220px;margin-right:20px}.textarea[data-v-9c46f138]{height:60px;width:460px}.textarea>p[data-v-9c46f138]{word-wrap:break-word;line-height:1.2em}.button>[data-v-9c46f138]{margin-right:20px}.pp[data-v-9c46f138]{width:100%;text-align:center;font-size:20px}.jisp[data-v-9c46f138]{margin:0;height:70px;color:#353535;font-size:20px;line-height:70px;background-color:#f2f2f2;padding-left:30px;margin-bottom:25px}.div[data-v-9c46f138]{padding:0 30px}","",{version:3,sources:["C:/Users/Administrator/Desktop/GAAO/src/components/info/artistManagement/basicData/auditedBasic.vue"],names:[],mappings:"AACA,0BACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACvC,AACD,+EACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAwB,AACpB,qBAAqB,AACjB,sBAAuB,CAC/B,AACD,yBACC,kBAAoB,CACpB,AACD,6BACC,iBAAmB,CACnB,AACD,kCACC,4BAA8B,CAC9B,AACD,mCACC,gBAAkB,CAClB,AACD,8EACC,UAAa,AACb,SAAU,AACV,kBAAoB,CACpB,AACD,iCACC,aAAc,AACd,YAAa,AACb,iBAAmB,CACnB,AACD,2BACC,YAAa,WAAa,CAC1B,AACD,6BACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,0BACC,iBAAmB,CACnB,AACD,qBACC,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CAChB,AACD,uBACC,SAAU,AACV,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,kBAAmB,AACnB,kBAAoB,CACpB,AACD,sBACC,cAAe,CACf",file:"auditedBasic.vue",sourcesContent:["\n.cantent[data-v-9c46f138]{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\n}\n.namens[data-v-9c46f138],.button[data-v-9c46f138],.names_maix[data-v-9c46f138]{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align:start;\r\n\t    -ms-flex-align:start;\r\n\t        align-items:flex-start;\n}\n.namens[data-v-9c46f138]{\r\n\tmargin-bottom: 20px;\n}\n.names_maix[data-v-9c46f138]{\r\n\tmargin-right: 40px;\n}\n.names_maix > span[data-v-9c46f138]{\r\n\tborder-bottom: 1px solid #333;\n}\n.names_maix > label[data-v-9c46f138]{\r\n\tmargin-right: 6px;\n}\n.p> p[data-v-9c46f138],.namens >p[data-v-9c46f138],.textarea >p[data-v-9c46f138]{\r\n\tpadding: 0px;\r\n\tmargin: 0;\r\n\tmargin-bottom: 10px;\n}\n.names_maix >img[data-v-9c46f138]{\r\n\theight: 140px;\r\n\twidth: 220px;\r\n\tmargin-right: 20px;\n}\n.textarea[data-v-9c46f138]{\r\n\theight: 60px;width: 460px;\n}\n.textarea >p[data-v-9c46f138]{\r\n\t word-wrap: break-word;\r\n\t line-height: 1.2em;\n}\n.button >*[data-v-9c46f138]{\r\n\tmargin-right: 20px;\n}\n.pp[data-v-9c46f138]{\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tfont-size: 20px;\n}\n.jisp[data-v-9c46f138]{\r\n\tmargin: 0;\r\n\theight: 70px;\r\n\tcolor: #353535;\r\n\tfont-size: 20px;\r\n\tline-height: 70px;\r\n\tbackground-color: #f2f2f2;\r\n\tpadding-left: 30px;\r\n\tmargin-bottom: 25px;\n}\n.div[data-v-9c46f138]{\r\n\tpadding:0 30px;\n}\r\n"],sourceRoot:""}])},851:function(t,a,i){var n=i(785);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(566)("af449e96",n,!0)},932:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("p",{staticClass:"jisp"},[t._v("艺人审核-基本资料")]),t._v(" "),i("div",{staticClass:"div"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"cantent"},[i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("真实姓名")]),t._v(" "),i("span",[t._v(t._s(t.audite_A.name))])]),t._v(" "),i("div",{staticClass:"names_maix"},[i("label",[t._v("申请身份")]),t._v(" "),i("span",[t._v(t._s(t.audite_A.typeName))])]),t._v(" "),i("div",{staticClass:"names_maix"},[i("label",[t._v("申请时间")]),t._v(" "),i("span",[t._v(t._s(t.audite_A.createTime))])])]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("证件号码")]),t._v(" "),i("span",[t._v(t._s(t.audite_A.certificateNo))])])]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("证件照片")]),t._v(" "),i("img",{attrs:{src:t.audite_A.frontPicture}}),t._v(" "),i("img",{attrs:{src:t.audite_A.oppositePicture}}),t._v(" "),i("img",{attrs:{src:t.audite_A.holdPicture}})])]),t._v(" "),i("div",{staticClass:"namens"},[i("p",[t._v("艺人审核-附加资料")])]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("作品链接")]),t._v(" "),i("div",{staticClass:"p"},t._l(t.audite_A.worksLink,function(a,n){return i("p",{key:"index"},[t._v(t._s(a.worksLink))])}))])]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("附加照片")]),t._v(" "),t._l(t.audite_A.pictureUrl,function(t,a){return i("img",{key:"index",attrs:{src:t.pictureUrl}})})],2)]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("大赛奖项")]),t._v(" "),i("div",{staticClass:"textarea"},[i("p",[t._v(t._s(t.audite_A.awards))])])])]),t._v(" "),i("div",{staticClass:"namens"},[i("div",{staticClass:"names_maix"},[i("label",[t._v("附加描述")]),t._v(" "),i("div",{staticClass:"textarea"},[i("p",[t._v(t._s(t.audite_A.description))])])])])]),t._v(" "),i("div",{staticClass:"button"},["审核通过"===t.audite_A.auditStatus?i("el-button",{attrs:{size:"small"},on:{click:t.RevokeButon}},[t._v("撤销")]):t._e(),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.temporaryBUtton}},[t._v("返回")])],1),t._v(" "),i("el-dialog",{attrs:{title:"撤销提示",visible:t.RevokWhy,"before-close":t.RevokeButon,size:"tiny"},on:{"update:visible":function(a){t.RevokWhy=a}}},[i("el-input",{staticClass:"label",attrs:{type:"revokwhy",rows:2,placeholder:"请输入原因"},model:{value:t.reason,callback:function(a){t.reason=a},expression:"reason"}}),t._v(" "),i("span",{slot:"footer"},[i("el-button",{on:{click:t.RevokeButon}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.RevokWhyList}},[t._v("确 定")])],1)],1)],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=40.1d02b9b6d4687f3f9af6.js.map