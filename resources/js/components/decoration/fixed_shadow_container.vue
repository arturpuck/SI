<template>
  <div  class="fixed-shadow-container">
    <slot></slot>
  </div>
</template>

<script>
	export default {
        name: 'fixed-shadow-container'
    }
</script>

<style lang="scss">

.fixed-shadow-container{
    position:fixed;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.7);
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 0;
    left: 0;
}

</style>