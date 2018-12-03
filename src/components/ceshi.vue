<template>
  <div class="ceshi">
    <div>
      <div class="container" >
        <div class="item item-1">{{$store.state.user_id}}</div>
        <div class="item item-2">表单内容</div>
        <div class="item item-3">办证</div>
      </div>
      <cube-button  @click="salary()">Button</cube-button >
      <!-- <cube-loading></cube-loading> -->
    </div>
    
    <router-view ></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'ceshi',
  data: function () {
    return {
    list: [],
    user_id: 'PY1611',
    month: '2018-11',
    direction: '',
    tipStyle: '',
   
    }
  },
  created: function () {
    this.hide = true
  },
  computed: {

  },
  methods: {
   salary: function () {

     this.$router.push({
      name: 'salarytip',
      params: {
        user_id: this.user_id,
        month: this.month,
        }
     })
   },
    showTip(direction) {
      this.direction = direction
      this.$refs.tip2.show()

      switch (direction) {
        case 'top':
          this.tipStyle = 'left: 100px; top: 30px;'
          break
        case 'bottom':
          this.tipStyle = 'left: 100px; top: -50px;'
          break
        case 'left':
          this.tipStyle = 'left: 200px; top: -10px;'
          break
        case 'right':
          this.tipStyle = 'left: 2px; top: -10px;'
          break
      }
    },
    close() {
      console.log('click close button')
    },
    clickHandler() {
      console.log('click tip area')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.ceshi{
    z-index: 2;
    background-color: #fff;
    // overflow: hidden;
  .container{
    display:flex;
    width:100%;
    height:40px;
    .item-1{
      flex: 2;
      background-color: blue;
    }
     .item-2{
      flex: 6;
      background-color: red;
    }
     .item-3{
      flex: 2;
      background-color: green;
    }
  }
}

</style>