<template>
    <div class=''>
      <el-card id="registCard">
                </el-card>
                <el-card id="bg">
                  <btn-exit id="exit"></btn-exit>
                    <el-row>
                        <el-col :push="10" id="titleRegist">
                            修改密码
                        </el-col>
                        <el-col>
                            <el-form
                            label-width="70px"
                            :model="formInfoRegist"
                            ref="formInfoRegistRef"
                            :rules="formInfoRegistRules">
                                <el-form-item label="账号" prop="username">
                                    <el-input v-model="formInfoRegist.username" id="username" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="旧密码" prop="password">
                                      <el-input v-model="formInfoRegist.password" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="新密码" prop="newpassword">
                                      <el-input v-model="formInfoRegist.newpassword" show-password></el-input>
                                </el-form-item>
                                  <el-form-item>
                                      <el-row>
                                          <el-col :span="24" id="loginBtn">
                                            <el-button type="primary" id="putPwdBtn" @click="putPwdBtn">提交</el-button>
                                          </el-col>
                                          <el-col :span="12">
                                          </el-col>
                                      </el-row>
                                 </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-card>
    </div>
</template>
<script>

export default {
  data () {
    return {
      formInfoRegist: {
        username: '',
        password: '',
        newpassword: ''
      },
      formInfoRegistRules: {
        password: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newpassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getusername()
  },
  methods: {
    getusername () {
      this.formInfoRegist.username = window.sessionStorage.getItem('username')
    },
    // 修改密码： 旧密码为password 新密码为 newpassword
    putPwdBtn () {
      this.$refs.formInfoRegistRef.validate(async (valid) => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.put('/putuserpwd', this.formInfoRegist)
        console.log(this.formInfoRegist)
        if (res.meta.code !== 200) {
          this.$message({
            type: 'error',
            message: res.meta.msg
          })
        } else {
          window.sessionStorage.clear('token')
          window.sessionStorage.clear('username')
          window.sessionStorage.clear('activePath')
          this.$router.push('/Login')
          this.$message({
            type: 'success',
            message: res.meta.msg + '请重新登陆！'
          })
        }
      })
    }
  },
  comments: {
  }
}
</script>

<style lang='less' scoped>
#registCard{
    height: 55vh;
    width: 32vw;
    position: relative;
    top: 20vh;
    left: 35vw;
    background-color: rgba(255, 255, 255,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    filter: blur(20px)
}
#bg{
    height: 55vh;
    width: 31vw;
    position: absolute;
    top: 22vh;
    left: 37vw;
    background-color: rgba(255, 255, 255,.3);
    border: 0;
    border-radius: 10px;
}
#titleRegist{
    margin: 30px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 32px;
}
#putPwdBtn{
  width: 300px;
  height: 60px;
  margin-left: 20px;
}
.el-input{
  width: 350px;
}
.el-input{
  z-index: 2!important;
}
#exit{
  margin-top: -20px;
  margin-left: 370px;
  margin-bottom: -50px;
}
</style>
