<template>
  <prostitute-photos v-on:prostitute-photos-validated="emitSuccessFullValidation" class="photos-all">
    <div class="explanation-container">
      <strong
        class="important-notice"
        v-text="Translations.maximum_photos_and_outdate_risk"
      ></strong>
      <span v-text="Translations.what_happens_when_photos_are_outdated"></span>
      <strong
        class="important-notice"
        v-text="Translations.anti_photoshop_warning"
      ></strong>
      <strong
        class="important-notice"
        v-text="Translations.photos_token_info"
      ></strong>
      <span v-text="Translations.prostitute_photos_end_of_description"></span>
    </div>
    <div class="token-info">
      <span v-text="Translations.your_photo_token"></span> :
      <strong class="token" v-text="token"></strong>
    </div>
  </prostitute-photos>
</template>
          
  <script lang="ts">
  import Translations from "@js/modules/translations/components/prostitution/prostitution_offer_photos";
  import ProstitutePhotos from "@js/components/prostitution/notice_editor/photos/prostitute_photos.vue";
  
  export default {
    name: "prostitute-photos-for-creator",

    emits : ['validated'],

    data() {
        return {
            Translations,
            token : undefined
        }
    },

    methods : {
      addEventListeners() : void {
        this.emitter.on('setProstitutePhotoToken', token => this.token = token);
        this.emitter.on('prostitutePhotosForCreatorValidator', () => this.emitter.emit('prostitutePhotosValidator'));
      },

      emitSuccessFullValidation() : void {
        this.$emit('validated')
      },
    },

    components : {
        ProstitutePhotos
    },

    mounted() {
      this.addEventListeners();
    }
  
  
  }
  </script>
          
  <style lang="scss" scoped>
  @import "~sass/fonts";
.important-notice {
  color: red;
}

.token-info {
  text-align: center;
  padding: 5px;
  @include responsive-font(1.5vw, 20px);
  background: #0d9312;
}

.token {
  letter-spacing:0.3em;
}

.explanation-container {
  padding:5px;
}

.photos-all {
  background: rgba(0, 0, 0, 0.87);
}
</style>
          