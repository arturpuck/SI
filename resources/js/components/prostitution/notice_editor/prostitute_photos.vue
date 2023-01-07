<template>
  <section class="photos-section">
    <div v-text="Translations.photos_policy" class="photos-policy"></div>
  </section>
</template>
        
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitution_offer_photos";

export default {
  name: "prostitute-photos",

  emits: ["validated"],

  components: {},

  data() {
    return {
      Translations,
    };
  },

  mounted() {},
};
</script>
        
<style lang="scss" scoped>
@import "~sass/fonts";

.photos-policy {
  padding: 5px;
  text-align: center;
}

.photos-section {
  background: rgba(0, 0, 0, 0.75);
  color:white;
  @include responsive-font();
}
</style>
        