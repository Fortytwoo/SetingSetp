<template>
    <div class=''>
      <el-card id="loginCard">
                </el-card>
          <el-card id="gs">
            <el-form label-width="80px" v-model="fromInfoPutSprot">
            <el-row>
              <el-col>
                修改配置
              </el-col>
              <el-col :push="3">
            <el-alert
                  title="谨慎修改以下信息，token有大约48小时的有效期，如果提示无权访问请及时更新token"
                  type="warning"
                  center>
                </el-alert>
              </el-col>
           </el-row>
            <el-form-item label="UserId" prop="UserId">
          <el-input v-model="fromInfoPutSprot.UserId" learable clearable></el-input>
        </el-form-item>
        <el-form-item label="Url" prop="Url">
          <el-input v-model="fromInfoPutSprot.Url" learable clearable></el-input>
        </el-form-item>
            <el-form-item label="Cookie" prop="Cookie">
          <el-input  v-model="fromInfoPutSprot.Cookie" learable clearable></el-input>
        </el-form-item>
        <el-form-item label="步数" prop="putSprot">
          <el-input-number v-model="fromInfoPutSprot.putSprot" learable :min="1" :max="60000"></el-input-number>
        </el-form-item>
        <el-row>
          <el-col :span="24" :push="2">
            <el-button class="btomBtn" type="primary" @click="postFrom">提交</el-button>
          </el-col>
          <el-col :span="24" :push="2">
            <el-button class="btomBtn" type="danger" @click="putPwd">修改密码</el-button>
          </el-col>
          <el-col :span="24" :push="2">
            <el-button class="btomBtn" type="danger" @click="exitlogin">退出登录</el-button>
          </el-col>
        </el-row>
      </el-form>
        </el-card>
    </div>
</template>
<script>

export default {
  data () {
    return {
      fromInfoPutSprot: {
        UserId: '',
        Url: '',
        Cookie: '',
        putSprot: 520
      }
    }
  },
  created () {
  },
  methods: {
    // 退出登录
    exitlogin () {
      this.$router.push('/Login')
    },
    // 提交表单
    postFrom () {

    },
    // 修改密码
    putPwd () {
      this.$router.push('/putPwd')
    }
  },
  comments: {
  }
}
</script>

<style lang='less' scoped>
#loginCard{
    height: 60vh;
    width: 50vw;
    position: relative;
    top: 20vh;
    left: 24vw;
    background-color: rgba(255, 255, 255,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    filter: blur(20px)
}
#gs{
    height: 60vh;
    width: 50vw;
    position: absolute;
    top: 22vh;
    left: 25vw;
    background-color: rgba(255, 255, 255,.3);
    border: 0;
    border-radius: 10px;
}
#titleLogin{
    margin: 30px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 32px;
}
#vailimg{
    margin-top: 10px;
    height: 30px;
    width: 80px;
}
#loginBtn{
    width: 300px;
    height: 60px!important;
}
.el-image{
    width: 100px;
}
.btomBtn{
  margin-top: 15px;
  width: 90%;
}
.el-alert{
  width: 80%;
  margin-bottom: 8px;
}
</style>
