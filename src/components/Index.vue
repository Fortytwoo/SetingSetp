<template>
    <div id="LoginView">
        <el-container>
            <el-main :style="{ backgroundImage: 'url(' + imageUrl+ ')'}" >
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>

export default {
  data () {
    return {
      imageUrl: 'http://fig.lujingru42.top/images/2020/06/02/cars-1284000_960_720.jpg',
      imagesUrl: [
        'http://fig.lujingru42.top/images/2020/06/02/cars-1284000_960_720.jpg',
        'http://fig.lujingru42.top/images/2020/06/02/transport-2262256_960_720.jpg',
        'http://fig.lujingru42.top/images/2020/06/02/night-1846734_960_720.jpg',
        'http://fig.lujingru42.top/images/2020/06/02/complex-664440_960_720.jpg',
        'http://fig.lujingru42.top/images/2020/06/02/action-1867014_960_720.jpg',
        'http://fig.lujingru42.top/images/2020/06/02/carnival-rides-2648047_960_720.jpg'
      ]
    }
  },
  created () {
    //   启动定时器
    this.swirpimg()
  },
  methods: {
    swirpimg () {
      // 定时任务，10秒切换一次
      setInterval(this.changeimg, 15000)
    },
    // 随机设置背景片
    changeimg () {
      this.imageUrl = this.imagesUrl[this.randnum(0, this.imagesUrl.length - 1)]
    },
    // 随机生成一个中间数，用于切换图片
    randnum (minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default:
          return 0
      }
    }
  },
  comments: {
  }
}
</script>

<style lang='less' scoped>
.el-main{
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
}
</style>
