<template>
   <div class="checkbox-container">
     <input type="checkbox" class="nice-checkbox" v-bind:name="name" v-bind:id="name">
        <label v-bind:for="name" class="checkbox-description"><slot></slot></label>	
    </div>
</template>

<script>
	export default {
        name: 'nice-checkbox',
        props: {
        	name : {
        		type: String,
                required: false,
                default: "nice-checkbox"
        	}
        }   
    }
</script>

<style lang="scss">

.nice-checkbox
{
   opacity:0;
}

.checkbox-description{
  position:relative;
  padding: 0 8px; 
  &:before{
    content: "";
    display: inline-block;
    position: absolute;
    top: 2px;
    left: -22px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background: white;
    border-radius: 3px;
    z-index: 1;
  }
  &:after
  {
    content: "";
    display: inline-block;
    position: absolute;
    top: 2px;
    left: -17px;
    width: 4px;
    height: 11px;
    cursor: pointer;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    z-index: 2;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0;
  }
}

.checkbox-container
{
    display:table;
}


.nice-checkbox:hover + .checkbox-description:before
{
  background:#e80e53;
}

.nice-checkbox:checked + .checkbox-description:before
{
  background:#e80e53;
}

.nice-checkbox:checked + .checkbox-description:after
{
  opacity:1;
}

</style>