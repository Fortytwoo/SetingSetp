<template>
    <div class=''>
        <el-card id="loginCard">
                </el-card>
                <el-card id="gs">
                    <el-row>
                        <el-col :push="10" id="titleLogin">
                            登录
                        </el-col>
                        <el-col>
                            <el-form
                            label-width="60px"
                            :model="loginFormInfo"
                            ref="loginFormRef"
                            :rules="loginFormRules">
                                <el-form-item label="账号" prop="username">
                                    <el-input v-model="loginFormInfo.username" clearable prefix-icon="iconfont icon-yonghu"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="psd">
                                      <el-input v-model="loginFormInfo.psd" show-password prefix-icon="iconfont icon-password"></el-input>
                                </el-form-item>
                                  <el-form-item>
                                      <el-row>
                                        <el-col  :span="24" :push="16">
                                          <el-link @click="jumpRegist">没有账号？点击注册</el-link>
                                        </el-col>
                                          <el-col :span="24" id="loginBtn">
                                            <el-button type="primary" id="loginBtn" @click="postlogin">登录</el-button>
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
      waitingTime: 30,
      getvildCodetime: false,
      loginFormInfo: {
        username: '',
        psd: ''
      },
      loginFormRules: {
      //   验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        psd: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    getvildCode () {
      this.getvildCodetime = true
      //   启动计时器
      var time1 = setInterval(() => {
        // 每运行一次就将秒数减一
        if (this.waitingTime <= 0) {
          // 清除定时器
          window.clearTimeout(time1)
          console.log('计时器已清除')
          //   重置倒计时
          this.waitingTime = 30
          //   打开按钮
          this.getvildCodetime = false
        }
        this.waitingTime = this.waitingTime - 1
      }, 1000)
    },
    // 登录
    postlogin () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.post('/login',
          { username: this.loginFormInfo.username, password: this.loginFormInfo.psd })
        console.log(res)

        if (res.meta.code !== 200) {
          this.$message({ type: 'error', message: res.meta.msg })
        } else {
          window.sessionStorage.setItem('token', 'Bearer' + ' ' + res.meta.token)
          window.sessionStorage.setItem('username', res.data.username)
          this.$message({ type: 'success', message: res.meta.msg })
          this.$router.push('/Home')
        }
      })
    },
    jumpRegist () {
      this.$router.push('/registered')
    }
  },
  comments: {
  }
}
</script>

<style lang='less' scoped>
#loginCard{
    height: 48vh;
    width: 30vw;
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
#gs{
    height: 48vh;
    width: 30vw;
    position: absolute;
    top: 22vh;
    left: 37vw;
    background-color: rgba(255, 255, 255,.3);
    border: 0;
    border-radius: 10px;
}
#titleLogin{
    margin: 30px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 32px;
}
#loginBtn{
    width: 300px;
    height: 60px!important;
    margin-top: 5px;
    margin-left: 0px;
}
</style>
