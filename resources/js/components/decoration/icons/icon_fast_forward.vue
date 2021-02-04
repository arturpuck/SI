<template>
  <svg class="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 96.93"
    v-on="$listeners">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M107.61 0h15.27v90.62h-15.27V54.67L52.7 96.93V56.37L0 96.93v-92l52.7 39.94V4.93l54.91 41.62V0z"
    ></path>
  </svg>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  
  
@Component
  export default class IconFastForward extends Vue {


}
</script>

<style lang="scss" scoped>

.icon{
    display:inline-block;
    width:1.1vw;
    height:1.1vw;
    min-width:10px;
    min-height:10px;
    color:white;
}
  
</style>