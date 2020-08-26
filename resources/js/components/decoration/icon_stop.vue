<template>
  <div class="icon-container icon-incorrect-value">
    <div  class="white-bar">
      
    </div>
 </div>
</template>

<script>
	export default {
        name: 'icon-stop'
    }
</script>

<style lang="scss">

.icon-container{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index:2;
}

.icon-incorrect-value
{
    background: red;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display:flex;
}

.white-bar
{
    width: 80%;
    height: 30%;
    background:white;
}

</style>