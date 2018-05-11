<template>
	<el-main>
			<p class="title">筛选</p>
			<el-row :gutter="20">
				<el-col :span="8">
			    <el-date-picker
			    	style="width:100%"
			      v-model="value6"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
				</el-col>

				<el-col :span="8">
					<el-input placeholder="物料名称" v-model="input"></el-input>
				</el-col>

				<el-col :span="8">
					<el-input placeholder="物料编号" v-model="input"></el-input>
				</el-col>
  		</el-row>

  		<el-row :gutter="20">
				<el-col :span="8">
			    <el-date-picker
			    	style="width:100%"
			      v-model="value6"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
				</el-col>

				<el-col :span="8">
					<el-input placeholder="物料名称" v-model="input"></el-input>
				</el-col>

				<el-col :span="8">
					<el-input placeholder="物料编号" v-model="input"></el-input>
				</el-col>
  		</el-row>

			<el-row :gutter="20">
				<el-col :span="24">
					<el-button size="small" type="primary" icon="el-icon-search">搜索</el-button>
					<el-button size="small" type="info" plain>重置</el-button>
				</el-col>
			</el-row>

		</el-main>
</template>

<script>

	export default {
	  name:'s3-search',
		data(){
			return {
				value6: '',
				input:''
			}
		}
	}

</script>

<style scoped>
	.title{line-height:30px;font-size:16px;margin-top:-20px;margin-bottom:20px;}
	.el-row{margin-bottom:20px;}
</style>
