<template>
  <div class="toolbar">
    <cube-toolbar
    :actions="actions"
    :more-actions="moreActions"
    @click="clickHandler">
    
    </cube-toolbar>
  </div>
</template>
<script>
export default {
  name: 'toolbar',
  data: function () {
    return{
      money: 10,
       actions: [
        {
          text: '完成订单',
          action: 'showText'
        },
        {
          text: '打车来接',
          checked: false,
          type: 'checkbox'
        },
        {
          text: '一口价<span class="orange">10元</span>',
          action: 'moreMoney'
        }
      ],
      moreActions: [
        {
          text: '操作a',
          action: 'showText'
        },
        {
          text: '操作b',
          action: 'showText'
        },
        {
          text: '操作c',
          icon: 'cubeic-right',
          action: 'showText'
        }
      ]
    }    
  },
  methods: {
     showText(item) {
      this.$createToast({
        type: 'correct',
        txt: 'clicked ' + item.text,
        time: 1000
      }).show()
    },
    moreMoney(item) {
      this.money += 10
      item.text = '一口价<span class="orange">' + this.money + '元</span>'
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
}
</script>
<style  scoped lang='scss'>
.toolbar{
  z-index: 5;
    background-color: #fff;
    overflow: hidden;
    .orange{
      color: #fc9153
    }
}
 
 
</style>

