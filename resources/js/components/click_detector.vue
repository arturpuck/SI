<template>
  <div v-on:click="handleClick" class="click-detector-container">
    <slot></slot>
 </div>
</template>

<script>
	export default {
        name: 'click-detector',

        methods : {
            handleClick(){
                this.$root.$emit('clickOutsideNavbar');
            }
        }
    }
        
</script>

<style lang="scss" scoped>

 .click-detector-container{
    min-height: calc(100vh - 40px);
	border-top: 1px solid transparent;
	border-bottom: 1px solid transparent;
 }

</style>