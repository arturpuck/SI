<template>
   <input type="submit" class="submit-button" v-bind:value="description">
</template>

<script>
	export default {
        name: 'submit-button',
        data() {
		 	return {
		 		description : "Zaloguj"
             };
             
         },

        mounted()
        {
            this.description = this.$slots.default[0].text;
        }
    }
</script>

<style lang="scss">

@import'../../../sass/fonts';

.submit-button
{
	background: linear-gradient(#0fe00b, #054004);
	padding:5px;
	color:white;
	display:block;
	width:95%;
	margin:7px auto;
	border-radius: 5px;
    font-weight:bold;
    border: none;
    cursor:pointer;
    @include responsive-font(1.5vw, 19px);
}
</style>