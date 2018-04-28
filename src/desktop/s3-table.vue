<template>
	<div>
		<el-table :v-loading="loading" :data="data" :thead="thead" style="width: 100%" max-height="500" @selection-change="handleSelectionChange">
		    <!-- checkbox -->
		    <el-table-column type="selection" width="55" v-if="checkbox"></el-table-column>

		    <el-table-column v-for="(item,index) in thead" :prop="item.key" :label="item.name" vsortable width="150" :fixed="item.fixed" :show-summary="item.summary">
		    	<template scope="scope">
		    		<el-input v-if="item.type=='input'" v-model="scope.row[item.key]" type="text" @change="handleInputChange(scope.row,scope.$index)"></el-input>
		    		<span v-if="!item.type||item.type=='text'">{{scope.row[item.key]}}</span>
		    	</template>
		    </el-table-column>

			<el-table-column fixed="right" label="操作" v-if="oprations.length>0">
				<template slot-scope="scope">
		    		<el-button v-for="op in oprations" @click="op.fun(scope.row,scope.$index)" type="text" size="small">{{op.name}}</el-button>
		    	</template>
			</el-table-column>
				    
		</el-table>	   
	 </div>
</template>
<script>
export default {
	name: 's3-table',
  	props: {
	    data:{
	      type: Array,
	      default: []
	    },
	    thead:{
	      type: Array,
	      default: []
	    },
	    oprations:{
	      type: Array,
	      default: () => []
	    },
	    checkbox: {
	    	type: Boolean,
	    	default: false
	    },
	    loading: {
	    	type: Boolean,
	    	default: false
	    }
	},
	methods: {
		handleSelectionChange (selection) {
			this.$emit("checkRow",selection)
		},
		handleInputChange (row,index) {
			this.$emit("inputChange",index)
		}
    }
}
</script>
