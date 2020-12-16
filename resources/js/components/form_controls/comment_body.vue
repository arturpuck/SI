<template>
<li class="comment-container">
    <div class="user-data">
        <user-preview
          v-bind:user-nickname="userNickname"
          v-bind:authenticated-user="authenticatedUser"
          v-bind:avatar-file-path="avatarFilePath">
        </user-preview>
        <div>
            <span class="fas fa-calendar-check date-icon"></span>
            <span v-text="addedAgo" class="added-ago"></span>
        </div>
        
    </div>
    <div v-text="commentBody" class="comment-text"></div>
</li>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';
  import UserPreview from '@jscomponents/user/user_preview.vue'

 @Component({components : {UserPreview}})
  export default class CommentBody extends Vue {


    @Prop({
            type: Boolean,
            required: false,
            default:false
    }) readonly authenticatedUser: boolean;
    
    @Prop({
            type: String,
            required: false,
            default: ''
    }) readonly avatarFilePath : string;

    @Prop({
            type: String,
            required: true
    }) readonly userNickname : string;

    @Prop({
            type: String,
            required: true
    }) readonly commentBody : string;

    @Prop({
            type: String,
            required: true
    }) readonly addedAgo : string;

    private translations = Translator;

    
  }
</script>

<style lang="scss" scoped>
   @import '~sass/fonts';

   .added-ago{
       @include responsive-font();
       color:white;
   }

   .date-icon{
       margin:0 4px;
       color:white;
       @include responsive-font(1.3vw, 16px, "");
   }

   .user-data{
      padding:0.5vw;
      display:flex;
      align-items: center;
      background: linear-gradient(#6d6b6b, #151313);
      justify-content: space-between;
   }

   .comment-text{
       @include responsive-font();
       padding:1vw;
       background: black;
       color:white;
   }

   .comment-container{
       min-width:300px;
       width:40vw;
       box-shadow: 2px 2px 2px 2px black;
       border-radius: 1vw;
       overflow: hidden;
       margin: 20px auto;
       border: 1px solid gray;
   }

  
</style>