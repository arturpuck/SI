<template>
<div ref="container" class="icon-error-cross-container">
    <div class="icon-error-close"></div>
</div>
</template>

<script>
	export default {
        name: 'icon-error-close',

        props : {
            aditionalClasses : {
                required : false,
                type : Object,
                default : undefined 
             }
        },

         mounted(){
            if(this.aditionalClasses){
                Object.keys(this.aditionalClasses).forEach((key) => this.$refs[key].classList.add(this.aditionalClasses[key]));
            }
        }
    }
</script>

<style lang="scss">
.icon-error-close{
    display: inline-block;
    background:white;
    width: 65%;
    height: 65%;
    position: absolute;
    font-size: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.icon-error-cross-container{
    position:relative;
    background:#ef0244;
    border-radius:50%;
    border:3px solid #ef0244;
    font-size: 0;
    min-width: 30px;
    min-height: 30px;
    width: 2.3vw;
    height: 2.3vw;
    display: inline-block;
}
</style>