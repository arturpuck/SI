<template>
  <button ref="button" class="phantom-button">
    <slot></slot>
    <span v-if="label" v-text="label" class="phantom-button-description"></span>
 </button>
</template>

<script>
	export default {
        name: 'phantom-button',

        props : {
            label : {
                required : false,
                type : String,
                default: undefined
            },

            title : {
                required : false,
                type : String,
                default: undefined
            }
        },

        mounted(){
            if(this.title){
                this.$refs.button.setAttribute('title', this.title);
            }
        }
    }
</script>

<style lang="scss">

.phantom-button{
    background:transparent;
    border:none;
    margin:0;
    padding:0;
    outline:none;
    display:inline-block;
    cursor:pointer;
    font: inherit;
    color: inherit;
    &:active{
        border:none;
        outline:none;
    }
}

.phantom-button-description{
    position:absolute;
    top:-9999px;
    left:0;
}

</style>