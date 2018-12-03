<template>
  <div id="first">
    1111111
    <cube-button  @click="firstTo()">Button</cube-button >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "first",
  data() {
    return {
      
    }
  },
  methods: {
   firstTo: function () {
     this.$router.push({
       name: 'tip'
     })
   }
  }
};
</script>

<style lang="scss">
 #first{
  width:100%;
  
}
</style>
