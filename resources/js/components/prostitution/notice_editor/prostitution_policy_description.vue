<template>
<section class="description">
  <div class="decoration-container">
    <info-circle-icon class="decoration"></info-circle-icon>
  </div>
  <span v-text="translations['announcements_are_free']"></span>
  <strong class="important-info" v-text="translations['dont_spam_with_announcements']"></strong>
  <span v-text="translations['announcement_will_not_be_added_immidiatelly']"></span>
  <strong class="important-info" v-text="translations['everyone_can_comment_a_prostitute']"></strong>
  <span v-text="translations['in_case_of_a_problem_please_contact_us_using_the_contact_form']"></span>
  <a v-bind:href="routesConfig.contact" v-text="translations['clicking_here']" class="contact-form-link"></a>
</section>
</template>
    
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitution_offer_policy_description";
import InfoCircleIcon from "@svgicon/info_circle_icon.vue";
import RoutesConfig from "@config/paths/routes";

  
export default {
    name: "prostitution-policy-description",

    emits : ['validated'],
  
    components: {
      InfoCircleIcon
    },
  
    data() {
      return {
        translations: Translations,
        routesConfig : RoutesConfig,
      };
    },

    mounted() {
      this.emitter.on('prostitutionPolicyDescriptionValidator', () => this.$emit('validated'));
    }
  
};
</script>
    
<style lang="scss" scoped>
  @import "~sass/fonts";

  .description {
    @include responsive-font(1.4vw, 19px);
    color: white;
    background: rgba(0, 0, 0, 0.85);
    padding:7px;
  }

  .decoration-container {
    display: flex;
    justify-content: center;
    padding:4px;
  }

  .decoration {
    fill:rgba(29, 224, 12, 0.884);
    height: 1.4em;
  }

  .contact-form-link{
    color:inherit;
  }

  .important-info {
    color:red;
  }
  

</style>
    