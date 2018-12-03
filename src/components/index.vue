<template>
  <div class="index">
    <!-- 内容信息 -->
    <div class="content" :style="{'transform': 'translateX(-'+distance+'px)', '-webkit-transform': 'translate3d(-' + distance + 'px, 0, 0)', 'width': 3 * windowWidth + 'px', 'height': (windowHeight - 55) + 'px'}" >
        <div class="content_info">
          <first></first>
        </div>
        <div class="content_info">
          <second></second>
        </div>
        <div class="content_info">
          <third :user_id = "user_id" ></third>
        </div>
    </div>
    <!-- 底部信息 -->
    <div class="bottom">
      <div @click="ceshi('first')" :class="{'activeClass' : nameToll == 'first'}">
          <i class="cubeic-person"></i>
        <span>
          第一页
        </span>
      
      </div>
      <div @click="ceshi('second')" :class="{'activeClass' : nameToll == 'second'}">
          <i class="cubeic-person"></i>
        <span>
          第二页
        </span>
      
      </div>
      <div @click="ceshi('third')" :class="{'activeClass' : nameToll == 'third'}">
          <i class="cubeic-person"></i>
        <span>
          第三页
        </span>
      
      </div>
    </div>
    <router-view ></router-view>
  </div>
  
</template>

<script>
import first from './first'
import second from './second'
import third from './third'
export default {
  name: 'index',
  data: function () {
    return {
    nameToll:'first',
    distance : 0,
    user_id: this.$store.state.user_id,
    month: this.$store.state.month, 
    }
  },
  beforeRouterLeave(to, form,next) {
    let position = window.scrollX
    if(positionn == null) position =0
     
    this.$store.commit('changepositionX',position)
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'ceshi') {//跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
        let changeposition = this.$store.state.changeposition
        window.scroll(0, recruitScrollY)
      }
    }
  },

  components: {
    first,
    second,
    third
  },
  created: function () {
    this.hide = true
  },
  computed: {
    windowWidth: function () {
      return window.innerWidth
      console.log(window.innerWidth)
    },
    windowHeight: function () {
      return window.innerHeight
    },
  },
  
  methods: {
   ceshi: function (data) {
     if(data == 'first') {
      this.nameToll = 'first'
      this.distance = 0
     
     }else if(data == 'second'){
      this.nameToll = 'second'
      this.distance = this.windowWidth *1
     }else{
      this.nameToll = 'third'
      this.distance = this.windowWidth *2
     }
    
   },
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.index{
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  .content {
    height: 100%;
    display: flex;
    transition: all .3s ease-in-out;
    .content_info {
      height: 100%;
      position: relative;
      flex: 1;
    }
  }
  .bottom {
    position:absolute;
    left:0;
    bottom: 0;
    display:flex;
    height:40px;
    width:100%;
    div {
      flex:1;
       text-align: center;
      span {
        display:block
      }
    }
    .activeClass {
      color: #666;
    }
  }
 
}

</style>