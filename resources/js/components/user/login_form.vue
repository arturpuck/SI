<template>
   <div
      class="login-form-container"
    >
      <form
        action="/login"
        method="POST"
        id="login-form"
        class="login-form"
      >
        <header class="login-panel-toolbar">
          <span v-text="translations['loginFormCaption']" class="login-info"></span>
          <button-close
            v-on:click="hide"
            title="Zamknij okno logowania"
            aria-label="Zamknij okno logowania"
          ></button-close>
        </header>
        <input v-bind:value="csrfToken" type="hidden" name="_token" />
        <label for="login" v-text="translations['loginDataCaption']" class="main-panel-label"></label>
        <text-input-combo
          v-bind:input-is-required="true"
          input-id="login"
          inputType="text"
          name="login-or-email"
        >
        </text-input-combo>
        <label for="password" v-text="translations['password']" class="main-panel-label"></label>
        <text-input-combo
          v-bind:input-is-required="true"
          input-id="password"
          inputType="password"
          name="password"
        >
        </text-input-combo>
        <labeled-checkbox class="remember-me-checkbox" name="remember">
          {{translations['rememberMe']}}
        </labeled-checkbox>
        <submit-button>{{translations['logIn']}}</submit-button>
        <a href="/haslo/resetuj/wyslij-link" v-text="translations['iForgotPassword']" class="forgot-password-link"></a>
      </form>
    </div>
</template>

<script>
  
  import Translations from '@jsmodules/translations/components/login_form';

  export default {
      name : 'login-form',

      emits : ['hide'],

      data()
      {
        return {
          csrfToken : '',
          translations : Translations
        }
      },

      created(){
        this.csrfToken = document.getElementById("csrf-token").content;
      },

      methods : {
        hide(){
          this.$emit('hide')
        }
      }
  }
  

</script>

<style lang="scss" scoped>
@import "~sass/components/login_panel";
  
</style>