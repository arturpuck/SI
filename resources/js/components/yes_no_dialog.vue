<template>
    <dialog class="dialog">
      <question-mark-icon-round class="icon"></question-mark-icon-round>
      <div v-text="question" class="question"></div>
      <div class="buttons-container">
        <button v-on:click="emitConfirmed" class="yes-button" v-text="translations.yes"></button>
        <button v-on:click="emitDenied" class="no-button" v-text="translations.no"></button>
      </div>
    </dialog>
</template>
  
<script lang="ts">
import Translations from "@jsmodules/translations/components/yes_no_dialog";
import QuestionMarkIconRound from "@svgicon/question_mark_icon_round.vue";

  export default {
      name: 'yes-no-dialog',

      emits : ['confirmed', 'denied'],

      components : {
        QuestionMarkIconRound
      },

      props : {
        question : {
          required : false,
          type : String,
          default : Translations.areYouSure
        }
      },

      methods : {
        emitConfirmed() : void {
          this.$emit('confirmed');
        },

        emitDenied() : void {
          this.$emit('denied');
        }


      },

      data() {
        return {
           translations : Translations
        }
      }
   }
</script>
  
  <style lang="scss" scoped>
  @import "~sass/fonts";
  @mixin action-button {
    border:none;
    border-radius:4px;
    padding:5px;
    color: white;
    cursor:pointer;
    &:active {
      transform:scale(1.1);
    }
    @include responsive-font(1.4vw, 18px);
  }
  .yes-button {
    @include action-button();
    background: linear-gradient(#0fe00b, #054004);
    &:hover {
      filter: drop-shadow(0 0 3px #34ef0c);
    }
  } 
  
  .no-button {
    @include action-button();
    background: linear-gradient(to bottom, #e61a1a, #9e1010);
    &:hover {
      filter: drop-shadow(0 0 3px #e61a1a);
    }
  }
  
  .dialog {
    position:fixed;
    top:50%;
    left:50%;
    margin: 0;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    padding:10px;
    display:block;
    @include responsive-font();
    z-index:100;
  }

  .question {
    color:white;
    padding:5px;
    text-align: center;
  }

  .icon {
    display:block;
    margin:0 auto;
    fill:#0ebe0b;
    width: 2em;
    height: 2em;
  }

  .buttons-container {
    display:flex;
    justify-content: space-between;
  }
  </style>