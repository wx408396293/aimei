webpackJsonp([26],{592:function(t,e,a){function n(t){a(837)}var l=a(92)(a(691),a(918),n,"data-v-698fad5c",null);t.exports=l.exports},691:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"integralQuery",data:function(){return{queryCriteria:{type:"",typeValue:"",typeName:""},currentPage:1,userList:[{headPortrait:"1",id:"1",userName:"用户1",gender:"男",number:"12345678901",autograph:"用户1",registerDate:"1234556",loginDate:"1234556",identity:"普通用户",userLevel:"4"}]}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},QueryCriteria:function(){console.log(this.queryCriteria)},reset:function(){var t={type:"",typeValue:"",typeName:""};this.queryCriteria=t}}}},771:function(t,e,a){e=t.exports=a(565)(!0),e.push([t.i,".type[data-v-698fad5c]{display:inline-block}.type>label[data-v-698fad5c]{padding-left:20px}.button[data-v-698fad5c]{margin-left:20px}.table[data-v-698fad5c]{padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.label[data-v-698fad5c]{margin-top:20px}.jisp[data-v-698fad5c]{margin:0;height:70px;color:#353535;font-size:20px;line-height:70px;background-color:#f2f2f2;padding-left:30px}.div[data-v-698fad5c]{padding:0 30px}.nav[data-v-698fad5c]{-ms-flex-wrap:wrap;flex-wrap:wrap}.nav[data-v-698fad5c],.navs[data-v-698fad5c]{display:-webkit-box;display:-ms-flexbox;display:flex}.navs[data-v-698fad5c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px;margin-top:20px}.navs label[data-v-698fad5c]{font-size:16px;margin-bottom:15px}.nav_s[data-v-698fad5c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:30px;margin-top:20px}.nav_s button[data-v-698fad5c]{margin-left:20px}","",{version:3,sources:["C:/Users/Administrator/Desktop/GAAO/src/components/info/giftManagement/integralQuery.vue"],names:[],mappings:"AACA,uBACC,oBAAsB,CACtB,AACD,6BACC,iBAAmB,CACnB,AACD,yBACC,gBAAkB,CAClB,AACD,wBACC,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,kBAAmB,AACf,wBAA0B,CAClC,AACD,wBACC,eAAgB,CAChB,AACD,uBACC,SAAU,AACV,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACnB,AACD,sBACC,cAAe,CACf,AACD,sBAIC,mBAAoB,AAChB,cAAgB,CACpB,AACD,6CANC,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAcd,AAVD,uBAIC,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,eAAiB,CACjB,AACD,6BACC,eAAgB,AAChB,kBAAoB,CACpB,AACD,wBACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,kBAAmB,AACf,yBAA0B,AAClC,kBAAmB,AACnB,eAAiB,CACjB,AACD,+BACC,gBAAkB,CAClB",file:"integralQuery.vue",sourcesContent:["\n.type[data-v-698fad5c]{\n\tdisplay: inline-block;\n}\n.type > label[data-v-698fad5c]{\n\tpadding-left: 20px;\n}\n.button[data-v-698fad5c]{\n\tmargin-left: 20px;\n}\n.table[data-v-698fad5c]{\n\tpadding-top: 20px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end;\n}\n.label[data-v-698fad5c]{\n\tmargin-top: 20px\n}\n.jisp[data-v-698fad5c]{\n\tmargin: 0;\n\theight: 70px;\n\tcolor: #353535;\n\tfont-size: 20px;\n\tline-height: 70px;\n\tbackground-color: #f2f2f2;\n\tpadding-left: 30px;\n}\n.div[data-v-698fad5c]{\n\tpadding:0 30px;\n}\n.nav[data-v-698fad5c]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n.navs[data-v-698fad5c]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navs label[data-v-698fad5c]{\n\tfont-size: 16px;\n\tmargin-bottom: 15px;\n}\n.nav_s[data-v-698fad5c]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end; \n\tmargin-right: 30px;\n\tmargin-top: 20px;\n}\n.nav_s button[data-v-698fad5c]{\n\tmargin-left: 20px;\n}\n"],sourceRoot:""}])},837:function(t,e,a){var n=a(771);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(566)("049f2e2e",n,!0)},918:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"jisp"},[t._v("积分查询列表")]),t._v(" "),a("div",{staticClass:"div"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:14}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"navs"},[a("label",[t._v("查询类型")]),t._v(" "),a("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:"请输入内容"},model:{value:t.queryCriteria.type,callback:function(e){t.queryCriteria.type=e},expression:"queryCriteria.type"}},[a("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"查询类型"},slot:"prepend",model:{value:t.queryCriteria.typeValue,callback:function(e){t.queryCriteria.typeValue=e},expression:"queryCriteria.typeValue"}},[a("el-option",{attrs:{label:"用户ID",value:"用户ID"}}),t._v(" "),a("el-option",{attrs:{label:"用户名",value:"用户名"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"navs"},[a("label",[t._v("增减")]),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"类型"},slot:"prepend",model:{value:t.queryCriteria.typeName,callback:function(e){t.queryCriteria.typeName=e},expression:"queryCriteria.typeName"}},[a("el-option",{attrs:{label:"增加",value:"增加"}}),t._v(" "),a("el-option",{attrs:{label:"减少",value:"减少"}})],1)],1)]),t._v(" "),a("div",{staticClass:"nav_s"},[a("el-button",{staticClass:"button",staticStyle:{width:"140px","font-size":"16px"},attrs:{type:"success",size:"small"},on:{click:t.QueryCriteria}},[t._v("查询")]),t._v(" "),a("el-button",{staticStyle:{width:"70px","font-size":"16px"},attrs:{type:"danger",size:"small"},on:{click:t.reset}},[t._v("清除")])],1)])],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"table",attrs:{span:14}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:t.userList}},[a("el-table-column",{attrs:{prop:"headPortrait",label:"用户ID",width:"100%"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"用户名",width:"100%"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"增减",width:"100%"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"积分数量",width:"138"}}),t._v(" "),a("el-table-column",{attrs:{prop:"number",label:"变更时间",width:"200%"}}),t._v(" "),a("el-table-column",{attrs:{prop:"autograph",label:"变更原因",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{prop:"registerDate",label:"当前积分",width:"130"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"table",attrs:{span:14}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:100},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=26.2b868e18cb0923977432.js.map