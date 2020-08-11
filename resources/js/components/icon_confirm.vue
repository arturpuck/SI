<template>
  <div class="icon-container icon-correct-value">
    <div class="confirmation-icon-bird"></div>
  </div>
</template>

<script>
	export default {
        name: 'icon-ok'
    }
</script>

<style lang="scss">

.icon-correct-value{
   background:green;
   display:block;
}

.confirmation-icon-bird{
    width:30%;
    height:50%;
    position: relative;
    left: 35%;
    top: 15%;
    border-right:2px solid white;
    border-bottom:2px solid white;
    transform:rotate(45deg);
}

.icon-container{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index:2;
}

</style>