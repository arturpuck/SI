<template>
<div ref="icon" class="icon-polish-flag">
    
</div>
</template>

<script>
	export default {
        name: 'icon-polish-flag',

        props : {
            title : {
                required : false,
                default : "",
                type : String
            }
        },

        mounted(){
            if(this.title){
                this.$refs.icon.setAttribute('title', this.title);
            }
        }
    }
</script>

<style lang="scss">
.icon-polish-flag{
    width:2rem;
    height:1rem;
    z-index: 1;
    display: inline-block;
    background:linear-gradient(to bottom, white 0%, white 50%, red 50%, red 100%);
}
</style>