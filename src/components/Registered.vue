<template>
    <div class=''>
      <el-card id="registCard">
                </el-card>
                <el-card id="bg">
                  <btn-exit id="exit"></btn-exit>
                    <el-row>
                        <el-col :push="10" id="titleRegist">
                            注册
                        </el-col>
                        <el-col>
                            <el-form
                            label-width="80px"
                            :model="formInfoRegist"
                            :rules="rules"
                            ref="formInfoRegist">
                                <el-form-item label="账号" prop="username">
                                    <el-input v-model="formInfoRegist.username" clearable id="username"
                                    maxlength="12" minlength="3"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="psd">
                                      <el-input v-model="formInfoRegist.psd" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="psdverification">
                                      <el-input v-model="formInfoRegist.psdverification" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" prop="email">
                                  <el-input v-model="formInfoRegist.email"></el-input>
                                </el-form-item>
                                  <el-form-item>
                                      <el-row>
                                          <el-col :span="24" id="loginBtn">
                                            <el-button type="primary" id="registBtn" @click="registBtn">注册</el-button>
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
    var username = (rules, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入您的用户名'))
      }
      // if(value.length <)
      callback()
    }
    var psd = (rules, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入您的密码'))
      }
      callback()
    }
    var psdverification = (rules, value, callback) => {
      if (value === '') {
        return callback(new Error('请您再次输入密码以便确认'))
      } else if (value !== this.formInfoRegist.psd) {
        return callback(new Error('两次输入密码不同'))
      }
      callback()
    }
    var email = (rules, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入您的电子邮箱'))
      } else {
        var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
        var str = this.formInfoRegist.email
        if (pattern.test(str)) {
          return callback()
        } else {
          return callback(new Error('请输入合法邮箱'))
        }
      }
    }
    return {
      formInfoRegist: {
        username: '',
        psd: '',
        psdverification: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入您的用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
          { validator: username, trigger: 'blur' }
        ],
        psd: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: psd, trigger: 'blur' }
        ],
        psdverification: [
          { required: true, message: '请您再次输入密码以便确认', trigger: 'blur' },
          { validator: psdverification, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入您的电子邮箱', trigger: 'blur' },
          { validator: email, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    // 注册
    async registBtn () {
      this.$refs.formInfoRegist.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post('/regist', {
          username: this.formInfoRegist.username,
          password: this.formInfoRegist.psd,
          email: this.formInfoRegist.email
        })
        console.log(res.meta.msg)

        if (res.meta.code !== 200) {
          this.$message({
            type: 'error',
            message: res.meta.msg
          })
        } else {
          this.$message({
            type: 'success',
            message: res.meta.msg
          })
          this.$router.push('/Login')
        }
      })
    }

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
#registBtn{
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
