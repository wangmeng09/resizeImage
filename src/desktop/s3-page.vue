<template>
  <div>
	 <el-pagination class="page-align"
	    	background
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page.sync="currentPage"
	      :page-size="pagesize"
	      layout="total, prev, pager, next"
	      :total="total">
	    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'s3-page',
  data () {
    return {
      currentPage: 0
    }
  },
  props:{
    total:{
      type:Number,
      required:true
    },
    pagesize:{
      type:Number,
      default:10
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.$emit('page-change')
    }
  }
}
</script>
<style scoped>
  .page-align{
    float:right;
    padding:1rem;
  }
</style>