webpackJsonp([46],{568:function(t,e,a){function l(t){a(844)}var n=a(92)(a(665),a(925),l,"data-v-81af1c2a",null);t.exports=n.exports},665:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(137),n=a.n(l),i=a(93);a(208);e.default={name:"reporlist",created:function(){this.REOPRTLIST()},data:function(){return{dialogVisible:!1,queryCriteria:{type:"",typeValue:"",typeName:"",sharedState:""},currentPage:1,textarea:""}},computed:n()({},a.i(i.b)("report_and_feedback",["reportSize","reportElements","reportIndex","reportList"])),methods:n()({},a.i(i.c)("report_and_feedback",["getReportSize"]),a.i(i.d)("report_and_feedback",["REOPRTLIST"]),{toExamine:function(t){this.dialogVisible=!0},handleCurrentChange:function(t){this.getReportSize(t),this.currentPage=this.reportIndex,this.REOPRTLIST()},QueryCriteria:function(){console.log(this.queryCriteria)},reset:function(){var t={type:"",typeValue:"",typeName:"",sharedState:""};this.queryCriteria=t},confirmButton:function(){this.dialogVisible=!1}})}},778:function(t,e,a){e=t.exports=a(565)(!0),e.push([t.i,".type[data-v-81af1c2a]{display:inline-block}.type>label[data-v-81af1c2a]{padding-left:20px}.button[data-v-81af1c2a]{margin-left:20px}.table[data-v-81af1c2a]{padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.label[data-v-81af1c2a]{margin-top:20px}.labels[data-v-81af1c2a]{padding-top:20px}.jisp[data-v-81af1c2a]{margin:0;height:70px;color:#353535;font-size:20px;line-height:70px;background-color:#f2f2f2;padding-left:30px}.div[data-v-81af1c2a]{padding:0 30px}.nav[data-v-81af1c2a]{-ms-flex-wrap:wrap;flex-wrap:wrap}.nav[data-v-81af1c2a],.navs[data-v-81af1c2a]{display:-webkit-box;display:-ms-flexbox;display:flex}.navs[data-v-81af1c2a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px;margin-top:20px}.navs label[data-v-81af1c2a]{font-size:16px;margin-bottom:15px}.nav_s[data-v-81af1c2a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:30px;margin-top:20px}.nav_s button[data-v-81af1c2a]{margin-left:20px}","",{version:3,sources:["C:/Users/Administrator/Desktop/GAAO/src/components/info/Reportandfeedback/reporlist.vue"],names:[],mappings:"AACA,uBACC,oBAAsB,CACtB,AACD,6BACC,iBAAmB,CACnB,AACD,yBACC,gBAAkB,CAClB,AACD,wBACC,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,kBAAmB,AACf,wBAA0B,CAClC,AACD,wBACC,eAAgB,CAChB,AACD,yBACC,gBAAkB,CAClB,AACD,uBACC,SAAU,AACV,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACnB,AACD,sBACC,cAAe,CACf,AACD,sBAIC,mBAAoB,AAChB,cAAgB,CACpB,AACD,6CANC,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAcd,AAVD,uBAIC,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,eAAiB,CACjB,AACD,6BACC,eAAgB,AAChB,kBAAoB,CACpB,AACD,wBACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,kBAAmB,AACf,yBAA0B,AAClC,kBAAmB,AACnB,eAAiB,CACjB,AACD,+BACC,gBAAkB,CAClB",file:"reporlist.vue",sourcesContent:["\n.type[data-v-81af1c2a]{\n\tdisplay: inline-block;\n}\n.type > label[data-v-81af1c2a]{\n\tpadding-left: 20px;\n}\n.button[data-v-81af1c2a]{\n\tmargin-left: 20px;\n}\n.table[data-v-81af1c2a]{\n\tpadding-top: 20px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end;\n}\n.label[data-v-81af1c2a]{\n\tmargin-top: 20px\n}\n.labels[data-v-81af1c2a]{\n\tpadding-top: 20px;\n}\n.jisp[data-v-81af1c2a]{\n\tmargin: 0;\n\theight: 70px;\n\tcolor: #353535;\n\tfont-size: 20px;\n\tline-height: 70px;\n\tbackground-color: #f2f2f2;\n\tpadding-left: 30px;\n}\n.div[data-v-81af1c2a]{\n\tpadding:0 30px;\n}\n.nav[data-v-81af1c2a]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n.navs[data-v-81af1c2a]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navs label[data-v-81af1c2a]{\n\tfont-size: 16px;\n\tmargin-bottom: 15px;\n}\n.nav_s[data-v-81af1c2a]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end; \n\tmargin-right: 30px;\n\tmargin-top: 20px;\n}\n.nav_s button[data-v-81af1c2a]{\n\tmargin-left: 20px;\n}\n"],sourceRoot:""}])},844:function(t,e,a){var l=a(778);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(566)("c56660ee",l,!0)},925:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"jisp"},[t._v("举报列表")]),t._v(" "),a("div",{staticClass:"div"},[a("el-row",[a("el-col",{attrs:{span:23}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"navs"},[a("label",[t._v("查询类型")]),t._v(" "),a("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:"请输入内容"},model:{value:t.queryCriteria.type,callback:function(e){t.queryCriteria.type=e},expression:"queryCriteria.type"}},[a("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"查询类型"},slot:"prepend",model:{value:t.queryCriteria.typeValue,callback:function(e){t.queryCriteria.typeValue=e},expression:"queryCriteria.typeValue"}},[a("el-option",{attrs:{label:"举报内容ID",value:"举报内容ID"}}),t._v(" "),a("el-option",{attrs:{label:"被举报内容名称",value:"被举报内容名称"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"navs"},[a("label",[t._v("被举报内容类型")]),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"类型"},slot:"prepend",model:{value:t.queryCriteria.typeName,callback:function(e){t.queryCriteria.typeName=e},expression:"queryCriteria.typeName"}},[a("el-option",{attrs:{label:"用户",value:"用户"}}),t._v(" "),a("el-option",{attrs:{label:"作品",value:"作品"}}),t._v(" "),a("el-option",{attrs:{label:"专题",value:"专题"}})],1)],1),t._v(" "),a("div",{staticClass:"navs"},[a("label",[t._v("处理状态")]),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"类型"},slot:"prepend",model:{value:t.queryCriteria.sharedState,callback:function(e){t.queryCriteria.sharedState=e},expression:"queryCriteria.sharedState "}},[a("el-option",{attrs:{label:"已处理",value:"已处理"}}),t._v(" "),a("el-option",{attrs:{label:"未处理",value:"未处理"}})],1)],1)]),t._v(" "),a("div",{staticClass:"nav_s"},[a("el-button",{staticClass:"button",staticStyle:{width:"140px","font-size":"16px"},attrs:{type:"success",size:"small"},on:{click:t.QueryCriteria}},[t._v("查询")]),t._v(" "),a("el-button",{staticStyle:{width:"70px","font-size":"16px"},attrs:{type:"danger",size:"small"},on:{click:t.reset}},[t._v("清除")])],1)]),t._v(" "),a("el-col",{staticClass:"table",attrs:{span:23}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:t.reportList}},[a("el-table-column",{attrs:{prop:"type",label:"被举报内容类型",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"targetId",label:"被举报内容ID",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"targetName",label:"被举报内容名称",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reasonType",label:"举报理由",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"举报时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createuserName",label:"举报用户",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dealState",label:"处理状态",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"position",label:"处理时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"information",label:"处理人",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["未处理"===e.row.dealState?a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){t.toExamine(e.row)}}},[t._v("执行处理")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"label",attrs:{"current-page":t.currentPage,"page-size":t.reportSize,layout:"prev, pager, next, jumper",total:t.reportElements},on:{"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"删除提示",visible:t.dialogVisible,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v("\n\t\t\t\t\t确认是否删除\n\t\t\t\t\t"),a("span",{slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmButton}},[t._v("确 定")])],1)])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=46.bd019070dc4f6cd4f6b3.js.map