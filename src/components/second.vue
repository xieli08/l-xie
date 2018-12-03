<template>
  <div id="second">
    22222
     <cube-button  @click="secondTo()">Button</cube-button >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "second",
  data() {
    return {
      
    }
  },
  methods: {
    secondTo: function () {
      this.$router.push ({
        name:'toolbar'
      })
    }
  }
};
</script>

<style lang="scss">
 #second{
  width:100%;
  
}
</style>