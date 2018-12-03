<template>
  <div id="third">
    3333333
   <cube-button  @click="thirdTo()">Button</cube-button >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "third",
  data() {
    return {
      
    }
  },
  props:['user_id'],
  methods: {
    thirdTo: function () {
    console.log(this.props[0])  
      this.$router.push({
        name:'ceshi'
      })
    }
  }
};
</script>

<style lang="scss">
 #third{
  width:100%;
  
}
</style>