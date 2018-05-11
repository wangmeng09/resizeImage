<template>
    <el-footer>
      {{company}}copyright@{{fullyear}}
      <img class="logo" :src="logo" alt="" width="80" height="30">
    </el-footer>
</template>

<script>
export default {
    name: "s3-footer",
    props:{
      company: {
        type: String,
        default:'ABC有限公司电子供应链平台'
      },
      logo:{
        type: String,
        default:'http://file.gongyinju.com/group1/M00/00/5B/bQYdm1mH6MCARxkxAABfhUPd7bM324.jpg'
      }
    },
    created(){
      this.fullyear = new Date().getFullYear();
    }
}
</script>

<style scoped>
  .el-footer {
    font-size: 12px;
    background-color: #303030;
    color: #fff;
    text-align: center;
    height: 80px!important;
    line-height: 80px;
    width: 100%;
  }
  .logo{
    vertical-align: middle;
    padding-left: 10px;
  }
</style>
