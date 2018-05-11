<template>
  <div>
    <el-col :span="24" v-show="navList.length>0">
      <el-menu :default-active="activeIndex2" class="el-menu-vertical-demo" @select="handleSelect" router>
            <el-menu-item  v-for="(item,index) in navList"  :index="item.menuUrl" :key="item.menuId">
                <i class="el-icon-menu"></i><span class="title">{{item.menuName}}</span>
            </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>


<script>
  export default {
    name:'s3-leftMenu',
    data () {
      return {
        activeIndex2: ''
      }
    },
    props:{
      navList: {
        type:Array,
        default:[]
      }
    },
    computed:{
    },
    methods:{
      handleSelect (key,path) {
        console.log(key)
      }
    },
    watch:{
      navList (){
        this.activeIndex2 = this.$route.path
      }
    }
  }
</script>

<style scope>
  .el-menu{border:none;}
  .el-aside{border-right:1px solid #d3d4d6;}
</style>
