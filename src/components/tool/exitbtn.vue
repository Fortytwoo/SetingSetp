<template>
    <div class=''>
      <div id="bg">
        <i class="el-icon-close" id="btnIcon" @click="exit"></i>
      </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    exit () {
      this.$router.push('/Home')
    }
  },
  comments: {
  }
}
</script>

<style lang='less' scoped>
#bg{
  right: -10px;
  top: -20px;
  position: relative;
  height: 91.5px;
  width: 183.8478px;
  background-color: rgba(255, 255, 255,.3);
  z-index: 1;
  transform: rotate(45deg);

  #btnIcon{
    display: flex;
      transform: rotate(-45deg);
      position: relative;
      font-size: 70px;
      top: -20px;
      left: 40px;
      color:  rgba(0, 0, 0, 0.3);
  }
}
#bg:hover{
    background-color: rgba(0, 0, 0, 0.3);
}
#bg:active{
    background-color: #C20C0C;
  }
</style>
