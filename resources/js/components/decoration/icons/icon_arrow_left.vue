<template>
   <div aria-hidden="true" class="icon-arrow-left"></div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  
  
@Component
  export default class IconArrowLeft extends Vue {


}
</script>

<style lang="scss" scoped>

.icon-arrow-left{
    display:inline-block;
    width:1.1vw;
    height:1.1vw;
    min-width:10px;
    min-height:10px;
    background:white;
    clip-path: polygon(100% 0, 55% 50%, 100% 100%, 45% 100%, 0% 50%, 45% 0);
}
  
</style>