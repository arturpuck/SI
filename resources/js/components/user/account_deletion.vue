<template>
  <fixed-shadow-container>
    <dialog class="dialog-box" open>
        <exclamation-icon class="exclamation-icon"></exclamation-icon>
      <div
        v-text="translations['accountDeletionWarning']"
        class="warning"
      ></div>
      <form action="/delete/account" method="POST" class="delete-account-form">
         <input type="hidden" name="_method" value="DELETE">
         <input type="hidden" name="_token" v-bind:value="csrfToken">
        <menu class="button-container"> 
            <button type="submit" v-text="translations['delete']" class="delete-account-button button"></button>
            <button type="button" v-text="translations['cancel']" v-on:click="closeDialogBox" class="cancel-button button"></button>
            <simple-labeled-input class="user-password" input-type="password" name="password">{{translations['password']}} : </simple-labeled-input>
        </menu>
      </form>
    </dialog>
  </fixed-shadow-container>
</template>

<script>
import FixedShadowContainer from "@jscomponents/decoration/fixed_shadow_container.vue";
import translations from "@jsmodules/translations/components/account_deletion";
import ExclamationIcon from "@svgicon/exclamation_icon.vue";
import SimpleLabeledInput from "@jscomponents/form_controls/simple_labeled_input.vue";


export default {
  components: { FixedShadowContainer, ExclamationIcon, SimpleLabeledInput },

  emits: ["close"],

  methods : {
    closeDialogBox(){
        this.$emit("close");
    }
  },

  data() {
    return {
      translations,
      csrfToken : ''
    };
  },

  mounted() {
      this.csrfToken = document.getElementById("csrf-token").content;
  }
};
</script>

<style lang="scss" scoped>
@import '~sass/fonts';
@import '~sass/responsive_icon';

.user-password{
    flex-basis:94%;
    margin-top:10px;
}

.exclamation-icon{
    display:block;
    @include responsive-icon(5px auto, 3vw, 30px);
    fill:red;
    height:auto;
}

.button-container{
    display:flex;
    justify-content:space-evenly;
    padding:0;
    flex-wrap: wrap;
    margin:10px 0 0;
}

.button{
    flex-basis:45%;
    color:white;
    @include responsive-font(1.4vw, 20px);
    text-align:center;
    padding:5px;
    border-radius:4px;
    border:none;
    font-weight:bold;
    cursor:pointer;
}

.dialog-box{
    width: 50%;
    min-width: 300px;
    border-radius: 5px;
    border: 1px solid red;
    background: black;
    padding:0.8em;
}

.warning{
    color:white;
    @include responsive-font();
    text-align:center;
}

.delete-account-button{
    background: linear-gradient(to bottom, #e61a1a, #9e1010);
    &:hover{
        filter:drop-shadow(0 0 9px red);
    }
}

.cancel-button{
    background:linear-gradient(#0fe00b, #054004);
}
</style>