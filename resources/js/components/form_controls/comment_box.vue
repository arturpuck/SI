<template>
<div class="comment-container">
    <label v-if="!authenticatedUser" class="unauthenticated-user-nickname-label">
        <span class="fas fa-user-tag nickname-decoration"></span>
        <span v-text="unauthenticatedUserNicknameDescription" class="unauthenticated-user-nickname-description"></span>
        <input v-on:input="emitUserNickName" v-on:blur="emitUserNickName" v-model="unauthenticatedUserNickName" type="text" class="unauthenticated-user-nickname">
    </label>
    <div class="comment-background">
       <label class="blank-label">
         <span v-text="placeholderText" class="comment-description"></span>
         <textarea v-bind:style="{'height' : commentHeight}" v-bind:placeholder="placeholderText" ref="comment_textarea" v-on:input="processUserComment" v-on:blur="emitCommentText" v-model="userComment" class="comment-body" rows="1"></textarea>
       </label>
       
    </div>
</div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';

 @Component
  export default class CommentBox extends Vue {

    @Prop({
            type: Boolean,
            required: true,
    }) readonly authenticatedUser: Boolean;


    private translator = null;
    private unauthenticatedUserNickName:string = '';
    private userComment:string = '';
    private commentHeight = null;

    emitUserNickName(){
      this.$emit('nicknameInput', this.unauthenticatedUserNickName);
    }

    processUserComment(){
      this.$emit('commentInput', this.userComment);
      const commentTextarea = this.$refs.comment_textarea;
      console.log((<HTMLTextAreaElement>commentTextarea).scrollHeight);
      this.commentHeight = `${(<HTMLTextAreaElement>commentTextarea).scrollHeight + 2}px`;
    }

    emitCommentText(){
      this.$emit('commentInput', this.userComment);
    }

    get unauthenticatedUserNicknameDescription() : string{
      return `${this.translator.translate('nickname')} :`;
    }

    get placeholderText() : string{
      return this.translator.translate('comment_text');
    }

    created(){
        this.translator = Translator;
    }

    mounted(){
       const commentTextarea = this.$refs.comment_textarea;
       this.commentHeight = 'calc(1.4em +2px)';
    }
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';

   .blank-label{
     border:none;
     outline:none;
     background:transparent;
     padding:0;
     margin:0;
   }

   .comment-description{
     position:absolute;
     top:-9999px;
     left:0;
     font-size:2px;
   }

   .comment-background{
      padding:1vw;
      background: black;
      border-radius: 0 0 1vw 1vw;
   }


   .unauthenticated-user-nickname{
      @include responsive-font(1.3vw,16px);
      background: #212120;
      border-radius: 0.5vw;
      border:1px solid transparent;
      color: white;
      flex-grow: 100;
      outline: none;
      min-width: 0;
      &:focus{
        border:1px solid #cb425f;
      }
   }

   .unauthenticated-user-nickname-description{
     @include responsive-font(1.3vw,16px);
     line-height: 1.5em;
     padding-right: 7px;
     white-space: nowrap;
   }

   .comment-container{
      font-size:0;
      width: 40vw;
      min-width: 320px;
   }

   .unauthenticated-user-nickname-label{
       display:flex;
       flex-wrap:nowrap;
       align-items: center;
       background: black;
       color: white;
       border-radius: 1vw 1vw 0 0;
       padding: 1vw 1vw 0;
   }

   .nickname-decoration{
     @include responsive-font(1.4vw,18px, "");
     color:rgb(203 66 95);
     margin: 0 5px;
   }

   .comment-body{
      width: 100%;
      background: #212120;
      border-radius: 0.5vw;
      line-height: 1.4em;
      border:1px solid transparent;
      outline:none;
      resize:none;
      overflow: hidden;
      color:white;
      @include responsive-font(1.3vw,16px);
      &:focus{
        border:1px solid #cb425f;
      }
   }

</style>