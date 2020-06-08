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
                            v-model="formInfoLogin">
                                <el-form-item label="账号" props="username">
                                    <el-input v-model="formInfoLogin.username" clearable prefix-icon="iconfont icon-yonghu"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" props="psd">
                                      <el-input v-model="formInfoLogin.psd" show-password prefix-icon="iconfont icon-password"></el-input>
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
      formInfoLogin: {
        username: '',
        psd: ''
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
    async postlogin () {
      const { data: res } = await this.$http.post('/login',
        { username: this.formInfoLogin.username, password: this.formInfoLogin.psd })
      if (res.meta.code !== 200) {
        this.$message({ type: 'error', message: res.meta.msg })
      } else {
        window.sessionStorage.setItem('token', 'Bearer' + ' ' + res.meta.token)
        // 后期更改API返回用户名
        window.sessionStorage.setItem('username', res.meta.msg)
        console.log(res.meta.token)
        console.log(res)
        this.$message({ type: 'success', message: res.meta.msg })
        this.$router.push('/Home')
      }

      console.log(res)
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
