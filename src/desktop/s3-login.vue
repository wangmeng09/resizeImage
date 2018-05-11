<template>
  <div class="main">

    <div class="loginTitle">
      <p>用户登录</p>
    </div>

    <div class="login">
      <el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <div class="handle">
          <el-checkbox v-model="checked">记住用户名</el-checkbox>
          <span class="resetPassword">忘记密码</span>
        </div>
        <div class="btn">
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name:'s3-login',
    props:{
      success: {
        type: String,
        default: '/'
      },
      loginPic: {
        type: String,
        default: 'http://file.gongyinju.com/group1/M00/00/4A/bQYdm1lteQuAAJcUABH3R1Izexo169.jpg'
      }
    },
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
        },
        checked: false,
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
      appid () {
        return this.$store.state.appid
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {
          let self = this;

          var getPublicKey = function() {
            return new Promise((resolve,reject) => {
              let param = {
                appid: self.appid
              }
              //s3.ajax('/user/publicKey',param,'usermanage').then(result => {
                s3.ajax('/publicKey',param,'usermanage').then(result => {
                console.log("key",result);
                if(result.retCode == '200') {
                  resolve(result)
                } else {
                  reject(result)
                }
              })
            })
          }

          getPublicKey()
            .then(data => {
              let pwd = s3.RSAEncrypt(data.modulus,data.exponent,self.ruleForm.password);
              let param = {
                loginName: self.ruleForm.name,
                password: pwd,
                appid: self.appid
              }
              //return s3.ajax('/user/login',param,'usermanage');
              return s3.ajax('/login',param,'usermanage');
            })
            .then(result => {
              if (result.retCode === '200'){
                self.$store.commit('USER_LOG_IN')
                if (result.isFirstLogin === false) {
                  let firstLoginFlag = true;
                  self.$store.commit('USER_FIRST_LOGIN',firstLoginFlag)
                } else {
                  self.$store.dispatch('getUserState')
                  self.$router.push(self.success)
                }
              } else {
                this.$alert(result.retMsg ||result.retmsg,'warning')
              }
            })
            .catch(error => {
              this.$alert(error,'warning')
              throw new Error(error)
            })
          }
        });
      }
    }
  }
</script>

<style scoped>
  .main{width:450px;position: fixed;top:17%;right:11%;background-color:#fff;overflow: hidden;border-radius: 5px}
  .login{padding:0 30px 30px 30px;}
  .loginTitle{width:100%;line-height:60px;margin-bottom:10px;}
  .loginTitle>p{padding-left:30px;}
  .btn{width:100%;margin:0 auto;overflow: hidden;margin-top:40px;padding:0;}
  .btn button{width:100%}
  .handle{width:100%;overflow: hidden;}
</style>
