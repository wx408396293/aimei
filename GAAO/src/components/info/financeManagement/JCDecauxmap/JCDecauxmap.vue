<template>
	<el-row>
		<el-col :span="24">
				<div class="amap-page-container">
					<el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
					<el-amap vid="amapDemo" :center="mapCenter" :zoom="zoom" :plugin="plugin" class="amap-demo" :events="events">
						<el-amap-marker v-for="marker in markers" key="marker" :position="marker.position"  :events="marker.events" :draggable="marker.draggable"></el-amap-marker>
						<el-amap-info-window v-for="window in windows" key="window" :position="window.position" :visible="window.visible" ></el-amap-info-window>
  					</el-amap>
				</div>
				<!-- <div class="toolbar">
			        position: [{{lng}}]address: {{ address }}
			     </div> -->
			<el-dialog
				title="提示" :visible.sync="dialogVisible1" size="tiny" :modal="false">
					<span> 确认选择： {{ address }}</span>
				 	<span slot="footer" class="dialog-footer">
					    <el-button @click="dialogVisible1 = false">取 消</el-button>
					    <el-button type="primary" @click="handleClose">确 定</el-button>
				 	</span>
			</el-dialog>
		</el-col>
	</el-row>
</template>
<script>
	import Vue from 'vue'
	//引入三级菜单
	//引入高德地图
	//只能引入一次不能多次引入
	// import VueAMap  from 'vue-amap';
	// Vue.use(VueAMap );
	// VueAMap .initAMapApiLoader({
	// 	//高德官网申请的Key
	//   key: '1d01b9d0eb92533c11679faa12762fcc',
	//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',"AMap.Geocoder"]
	// });
	export default{
		name:"JCDecauxmap",
		props:["dialogVisible"],
		data(){
			let self = this;
			return{
				//弹窗设置
		        dialogVisible1:false,
		        //时间
	            zoom: 12,
	            //地图中心点坐标
	            mapCenter: [121.59996, 31.197646],
	            windows:[{
	            	//地图位置
	            	position: [121.59996, 31.197646],
	            	// content: `${self.address}`,
	            	//点位是否可见
	            	visible: true,
	            }],
	            markers: [{ 
	                //点位搜索的位置
	                position: [121.59996, 31.197646],
	                events: {
	                    click(e) {

		                    let { lng, lat } = e.lnglat;
		                    self.lng = lng;
		                	self.lat = lat;
			                // 这里通过高德 SDK 完成。
			                // 地址设置
			                var geocoder = new AMap.Geocoder({
				                radius: 1000,
				                extensions: "all"
			                });        
		                	geocoder.getAddress([lng ,lat], function(status, result) {
		                		if (status === 'complete' && result.info === 'OK') {
		                    		if (result && result.regeocode) {
		                    			self.address = result.regeocode.formattedAddress;
		                    			self.$nextTick();
		                  			}
		                		}
		              		}); 
		              		self.windows.forEach(window => {
			                  window.visible = false;
			                });
		              		self.$nextTick(() => {
		              			self.windows[0].position = [lng, lat ]
			                    self.windows[0].visible = true   
			                    self.mapCenter=[lng, lat]
	              				self.markers[0].position=[lng, lat] 
			                }); 
			                self.dialogVisible1=true	  
		            	},
                	},
	            //点位是否可见
	            visible: true,
	            }],
	            //事件
                events: {
                    click(e) {
	                    let { lng, lat } = e.lnglat;
	                    self.lng = lng;
	                	self.lat = lat;
		                // 这里通过高德 SDK 完成。
		                // 地址设置
		                var geocoder = new AMap.Geocoder({
			                radius: 1000,
			                extensions: "all"
		                });        
	                	geocoder.getAddress([lng ,lat], function(status, result) {
	                		if (status === 'complete' && result.info === 'OK') {
	                    		if (result && result.regeocode) {
	                    			self.address = result.regeocode.formattedAddress;
	                    			self.$nextTick();
	                  			}
	                		}
	              		}); 
	              		self.windows.forEach(window => {
		                  window.visible = false;
		                });
	              		self.$nextTick(() => {
	              			self.windows[0].position = [lng, lat ] 
	              			self.mapCenter=[lng, lat]
	              			self.markers[0].position=[lng, lat]
		                    self.windows[0].visible = true    
		                });   

	            	}
                },
	            //地址
	            address: '',
	            //坐标
	            lng: 0,
          		lat: 0,
	            //设置地图左边菜单
	            plugin: ['ToolBar', {
		            pName: 'MapType',
		            defaultType: 0,
		            
		          }],
	            //点标记是否可拖动
	            draggable: false,
	            //搜索条件
	            searchOption: {
		            city: '上海',
		            citylimit: true
		        },
			}
		},
		methods:{
	        //地图搜索结果处理
	        onSearchResult(pois) {
	            let latSum = 0;
	            let lngSum = 0;
	            let markers = [];
        		let windows = [];
        		let self = this;
	            this.markers=[]
	            console.log(pois)
	            if (pois.length > 0) {
		            pois.forEach( (poi, index) => {
		            	console.log(index)
		                let {lng, lat} = poi;
		                lngSum += lng;
		                latSum += lat;
		                this.markers.push({
		              		position:[poi.lng, poi.lat],
		              		events: {
				                click() {
					                self.windows.forEach(window => {
					                  window.visible = false;
					                });
					                self.$nextTick(() => {
					                  self.windows[index].visible = true;
					                });
				                    self.lng = poi.lng;
				                	self.lat = poi.lat;
					                // 这里通过高德 SDK 完成。
					                // 地址设置
					                var geocoder = new AMap.Geocoder({
						                radius: 1000,
						                extensions: "all"
					                });        
				                	geocoder.getAddress([lng ,lat], function(status, result) {
				                		if (status === 'complete' && result.info === 'OK') {
				                    		if (result && result.regeocode) {
				                    			self.address = result.regeocode.formattedAddress;
				                    			self.$nextTick();
				                  			}
				                		}
				              		}); 
				              		self.dialogVisible1=true   
				                },
				            }
			            });
			            windows.push({
			            	position: [poi.lng, poi.lat],
				            visible: false
			          	});
		            });
		            let center = {
		                lng: lngSum / pois.length,
		                lat: latSum / pois.length
		            };
		            this.mapCenter = [center.lng, center.lat];
		            this.windows = windows
		        }
	        },
        	handleClose(){
				this.dialogVisible1 = false
				this.$emit("PopController",{
					dialogVisible:!this.dialogVisible,
					//坐标
					lng:this.lng,
					lat:this.lat,
					address:this.address
				})
				
			}
        	
		}
	}
</script>
<style>
	
</style>