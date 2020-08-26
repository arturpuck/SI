<template>
   <div class="labeled-checkbox-container">
     <input type="checkbox" class="labeled-checkbox" v-bind:name="name" v-bind:id="name">
        <label v-bind:for="name" class="labeled-checkbox-description"><slot></slot></label>	
    </div>
</template>

<script>
	export default {
        name: 'labeled-checkbox',
        props: {
        	name : {
        		type: String,
                required: false,
                default: "labeled-checkbox"
        	}
        }   
    }
</script>

<style lang="scss">

.labeled-checkbox
{
   opacity:0;
}

.labeled-checkbox-description{
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
    border:1px solid #5a5555;
    border-radius: 2px;
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

.labeled-checkbox-container
{
    display:table;
}


.labeled-checkbox:hover + .labeled-checkbox-description:before
{
  background:#e80e53;
}

.labeled-checkbox:checked + .labeled-checkbox-description:before
{
  background:#e80e53;
}

.labeled-checkbox:checked + .labeled-checkbox-description:after
{
  opacity:1;
}

</style>