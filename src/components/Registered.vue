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
                            label-width="70px"
                            v-model="formInfoRegist"
                            ref="formInfoRegistRef"
                            :rules="formInfoRegistRules">
                                <el-form-item label="账号" props="username">
                                    <el-input v-model="formInfoRegist.username" clearable id="username"
                                    maxlength="12" minlength="3"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" props="psd">
                                      <el-input v-model="formInfoRegist.psd" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" props="againpsd">
                                      <el-input v-model="formInfoRegist.psdverification" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" props="eamil">
                                  <el-input v-model="formInfoRegist.eamil"></el-input>
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
    return {
      formInfoRegist: {
        username: '',
        psd: '',
        psdverification: '',
        eamil: ''
      },
      formInfoRegistRules: {
        username: [
          {
            require: true
          },
          {}
        ],
        psd: [
          {
            require: true
          },
          {}
        ],
        againpsd: [
          {
            require: true
          },
          {}
        ],
        eamil: [
          {
            require: true
          },
          {}
        ]
      }
    }
  },
  created () {
  },
  methods: {
    async registBtn () {
      const { data: res } = await this.$http.post('/regist', {
        username: this.formInfoRegist.username,
        password: this.formInfoRegist.psd,
        email: this.formInfoRegist.eamil
      })
      console.log(res)
      if (res.meta.code !== 200) {
        this.$message.error(res.meta.msg)
      } else {
        this.$message.success(res.meta.msg)
        this.$router.push('/Home')
      }
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
