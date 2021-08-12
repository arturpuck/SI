<template>
  <button type="button">Test button</button>
</template>

<script>

export default {

  options : {
    inheritAttrs: true
  },

  name : "test-button",
  
  mounted(){
       alert('test');
        console.log(this.$options);
  }
  
}
</script>

<style>

</style>