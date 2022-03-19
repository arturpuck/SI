<template>
   <div class="authenticated-user-preview">
      <span v-text="userNickname" class="user-nickname"></span>
      <img v-bind:src="avatarFilePath" alt="" v-if="avatarFileName" class="authenticated-user-image">
      <span class="fas fa-user authenticated-user-image"></span>
   </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator';
  
@Component
  export default class Class extends Vue {

    @Prop({
            type: String,
            required: true,
    }) readonly userNickname: string;

    @Prop({
            type: String,
            required: false,
            default:undefined
    }) readonly avatarFileName: string;

    get avatarFilePath():string{
        return `/images/decoration/users/avatars/${this.avatarFileName}`;
    }

}
</script>

<style lang="scss">

@import '~sass/fonts';

.authenticated-user-preview{
    display:inline-flex;
    align-items: center;
    padding:4px;
}

.user-nickname{
    @include responsive-font();
    color:white;
}

.authenticated-user-image{
    display:inline-block;
    min-width:40px;
    min-height: 40px;
    width:2vw;
    height:2vw;
    border-radius:6px;
}
  
</style>