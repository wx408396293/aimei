webpackJsonp([34],{581:function(t,e,a){function i(t){a(848)}var l=a(92)(a(680),a(929),i,"data-v-90fd5702",null);t.exports=l.exports},680:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(137),l=a.n(i),n=a(93);a(217);e.default={name:"audioMaterial",created:function(){this.GETAUDIOMATERIALIST()},data:function(){return{queryCriteria:{type:"",typeValue:"",typeName:"",sharedState:""},currentPage:1,dialogVisible:!1,reason:"",id:""}},computed:l()({},a.i(n.b)("audiomaterialist",["pageSize","totalElements","audioList"])),methods:l()({},a.i(n.d)("audiomaterialist",["GETAUDIOMATERIALIST","DELETEAUDIOMATERIAL"]),a.i(n.c)("audiomaterialist",["getPageSize"]),{handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e)},handleCurrentChange:function(t){this.getPageSize(t),this.GETAUDIOMATERIALIST()},deleteButton:function(t){this.dialogVisible=!0,this.id=t.id},getbutton:function(){this.reason="",this.dialogVisible=!1},DELETEBUTTON:function(){if(""===this.reason)return void this.$message({showClose:!0,message:"请输入删除原因",type:"warning"});this.DELETEAUDIOMATERIAL({id:this.id,reason:this.reason}),this.dialogVisible=!1,this.reason=""},QueryCriteria:function(){console.log(this.queryCriteria)},reset:function(){var t={type:"",typeValue:"",typeName:"",sharedState:""};this.queryCriteria=t}})}},782:function(t,e,a){e=t.exports=a(565)(!0),e.push([t.i,".type[data-v-90fd5702]{display:inline-block}.type>label[data-v-90fd5702]{padding-left:20px}.button[data-v-90fd5702]{margin-left:20px}.table[data-v-90fd5702]{padding-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.label[data-v-90fd5702]{margin-top:20px}.labels[data-v-90fd5702]{padding-top:20px}.jisp[data-v-90fd5702]{margin:0;height:70px;color:#353535;font-size:20px;line-height:70px;background-color:#f2f2f2;padding-left:30px}.div[data-v-90fd5702]{padding:0 30px}.nav[data-v-90fd5702]{-ms-flex-wrap:wrap;flex-wrap:wrap}.nav[data-v-90fd5702],.navs[data-v-90fd5702]{display:-webkit-box;display:-ms-flexbox;display:flex}.navs[data-v-90fd5702]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:20px;margin-top:20px}.navs label[data-v-90fd5702]{font-size:16px;margin-bottom:15px}.nav_s[data-v-90fd5702]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:30px;margin-top:20px}.nav_s button[data-v-90fd5702]{margin-left:20px}","",{version:3,sources:["C:/Users/Administrator/Desktop/GAAO/src/components/info/audioMaterial/audioMaterial.vue"],names:[],mappings:"AACA,uBACC,oBAAsB,CACtB,AACD,6BACC,iBAAmB,CACnB,AACD,yBACC,gBAAkB,CAClB,AACD,wBACC,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,kBAAmB,AACf,wBAA0B,CAClC,AACD,wBACC,eAAgB,CAChB,AACD,yBACC,gBAAkB,CAClB,AACD,uBACC,SAAU,AACV,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,yBAA0B,AAC1B,iBAAmB,CACnB,AACD,sBACC,cAAe,CACf,AACD,sBAIC,mBAAoB,AAChB,cAAgB,CACpB,AACD,6CANC,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAcd,AAVD,uBAIC,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,eAAiB,CACjB,AACD,6BACC,eAAgB,AAChB,kBAAoB,CACpB,AACD,wBACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,kBAAmB,AACf,yBAA0B,AAClC,kBAAmB,AACnB,eAAiB,CACjB,AACD,+BACC,gBAAkB,CAClB",file:"audioMaterial.vue",sourcesContent:["\n.type[data-v-90fd5702]{\n\tdisplay: inline-block;\n}\n.type > label[data-v-90fd5702]{\n\tpadding-left: 20px;\n}\n.button[data-v-90fd5702]{\n\tmargin-left: 20px;\n}\n.table[data-v-90fd5702]{\n\tpadding-top: 20px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end;\n}\n.label[data-v-90fd5702]{\n\tmargin-top: 20px\n}\n.labels[data-v-90fd5702]{\n\tpadding-top: 20px;\n}\n.jisp[data-v-90fd5702]{\n\tmargin: 0;\n\theight: 70px;\n\tcolor: #353535;\n\tfont-size: 20px;\n\tline-height: 70px;\n\tbackground-color: #f2f2f2;\n\tpadding-left: 30px;\n}\n.div[data-v-90fd5702]{\n\tpadding:0 30px;\n}\n.nav[data-v-90fd5702]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n}\n.navs[data-v-90fd5702]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmargin-right: 20px;\n\tmargin-top: 20px;\n}\n.navs label[data-v-90fd5702]{\n\tfont-size: 16px;\n\tmargin-bottom: 15px;\n}\n.nav_s[data-v-90fd5702]{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end; \n\tmargin-right: 30px;\n\tmargin-top: 20px;\n}\n.nav_s button[data-v-90fd5702]{\n\tmargin-left: 20px;\n}\n"],sourceRoot:""}])},848:function(t,e,a){var i=a(782);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(566)("4de26e44",i,!0)},929:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"jisp"},[t._v("音频素材列表")]),t._v(" "),a("div",{staticClass:"div"},[a("el-row",[a("el-col",{attrs:{span:22}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"navs"},[a("label",[t._v("查询类型")]),t._v(" "),a("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:"请输入内容"},model:{value:t.queryCriteria.type,callback:function(e){t.queryCriteria.type=e},expression:"queryCriteria.type"}},[a("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"查询类型"},slot:"prepend",model:{value:t.queryCriteria.typeValue,callback:function(e){t.queryCriteria.typeValue=e},expression:"queryCriteria.typeValue"}},[a("el-option",{attrs:{label:"素材ID",value:"素材ID"}}),t._v(" "),a("el-option",{attrs:{label:"素材名",value:"素材名"}}),t._v(" "),a("el-option",{attrs:{label:"发布用户",value:"发布用户"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"navs"},[a("label",[t._v("类型")]),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"类型"},slot:"prepend",model:{value:t.queryCriteria.typeName,callback:function(e){t.queryCriteria.typeName=e},expression:"queryCriteria.typeName"}},[a("el-option",{attrs:{label:"minik",value:"minik"}}),t._v(" "),a("el-option",{attrs:{label:"原创",value:"原创"}})],1)],1),t._v(" "),a("div",{staticClass:"navs"},[a("label",[t._v("共享状态")]),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"类型"},slot:"prepend",model:{value:t.queryCriteria.sharedState,callback:function(e){t.queryCriteria.sharedState=e},expression:"queryCriteria.sharedState "}},[a("el-option",{attrs:{label:"开启",value:"开启"}}),t._v(" "),a("el-option",{attrs:{label:"关闭",value:"关闭"}})],1)],1)]),t._v(" "),a("div",{staticClass:"nav_s"},[a("el-button",{staticClass:"button",staticStyle:{width:"140px","font-size":"16px"},attrs:{type:"success",size:"small"},on:{click:t.QueryCriteria}},[t._v("查询")]),t._v(" "),a("el-button",{staticStyle:{width:"70px","font-size":"16px"},attrs:{type:"danger",size:"small"},on:{click:t.reset}},[t._v("清除")])],1)]),t._v(" "),a("el-col",{staticClass:"table",attrs:{span:22}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:t.audioList}},[a("el-table-column",{attrs:{prop:"id",label:"素材ID",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"audioName",label:"素材名",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sourceType",label:"类型(minik/原创)",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"发布用户",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"uploadTime",label:"发布时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"canUse",label:"共享状态",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"worksCount",label:"公开作品数",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cityCode",label:"地理位置",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dataState",label:"状态",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"170",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("相关作品")]),t._v(" "),"已删除"!==e.row.dataState?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.deleteButton(e.row)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"label",attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalElements},on:{"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"删除提示",visible:t.dialogVisible,"before-close":t.getbutton,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("label",[t._v("删除原因：")]),t._v(" "),a("el-input",{staticClass:"label",attrs:{type:"reason",rows:2,placeholder:"请输入原因"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}}),t._v(" "),a("span",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:t.getbutton}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.DELETEBUTTON}},[t._v("确 定")])],1)],1)],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=34.8669e3a7773120c4fa5e.js.map