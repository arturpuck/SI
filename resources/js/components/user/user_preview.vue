<template>
   <div class="user-preview">
      <img v-bind:src="avatarFilePath" alt="" v-if="avatarFileIsAvailable" class="user-image">
      <span v-if="defaultUserImageShouldBeDisplayed" class="fas fa-user unregistered-user-icon"></span>
      <span v-text="userLabel" class="user-nickname"></span>
   </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator';
  
@Component
  export default class UserPreview extends Vue {

    @Prop({
            type: String,
            required: true,
    }) readonly userNickname: string;

    @Prop({
            type: Boolean,
            required: false,
            default:false
    }) readonly authenticatedUser: boolean;

    @Prop({
            type: String,
            required: false,
            default:''
    }) readonly avatarFilePath: string;

    private translations = Translator;

    get avatarFileIsAvailable():boolean{
        return this.avatarFilePath && this.authenticatedUser;
    }

    get defaultUserImageShouldBeDisplayed(): boolean{
        return !this.authenticatedUser || !this.avatarFilePath;
    }

    get userLabel():string{
        return this.authenticatedUser ? this.userNickname : 
        `${this.translations.translate('unregistered_user')} - ${this.userNickname}`;
    }


}
</script>

<style lang="scss" scoped>

@import '~sass/fonts';

.unregistered-user-icon{
    margin: 0 7px;
    color: crimson;
    @include responsive-font(1.3vw, 16px, "");
}

.user-preview{
    display:inline-flex;
    align-items: center;
    padding:4px;
}

.user-nickname{
    @include responsive-font();
    color:white;
}

.user-image{
    display:inline-block;
    min-width:30px;
    min-height: 30px;
    margin: 0 6px;
    width:2vw;
    height:2vw;
    border-radius:6px;
}
  
</style>