<template>
<section class="description">
  <div class="decoration-container">
    <info-circle-icon class="decoration"></info-circle-icon>
  </div>
{{translations['policy_description']}} <a v-bind:href="routesConfig.contact" v-text="translations['clicking_here']" class="contact-form-link"></a>
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
  

</style>
    