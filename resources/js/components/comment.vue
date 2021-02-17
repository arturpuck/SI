<template>
   <div></div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator';
  
@Component
  export default class Class extends Vue {

    private translations = Translator.getPackage('comment_component');

    @Prop({
            type: String,
            required: false,
            default:undefined
    }) readonly authenticatedUserNickname: string;

    @Prop({
            type: String,
            required: false,
            default:undefined
    }) readonly unauthenticatedUserNickname: string;

    @Prop({
            type: String,
            required: true,
    }) readonly comment: string;

}
</script>

<style lang="scss">

@import '~sass/fonts';
  
</style>