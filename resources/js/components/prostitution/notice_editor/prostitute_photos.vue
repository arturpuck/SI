<template>
  <section class="photos-section">
    <div class="photos-policy">
      <strong class="important-notice" v-text="Translations.maximum_photos_and_outdate_risk"></strong> 
      <span v-text="Translations.what_happens_when_photos_are_outdated"></span>
      <strong class="important-notice" v-text="Translations.anti_photoshop_warning"></strong>
      <strong class="important-notice" v-text="Translations.photos_token_info"></strong>
      <span v-text="Translations.prostitute_photos_end_of_description"></span>
    </div>
    <div class="token-info">
      <span v-text="Translations.your_photo_token"></span> :
      <strong class="token" v-text="token"></strong>
    </div>
    <multifile-image-upload 
      v-on:number-of-images-limit-exceeded="notifyUserAboutToManyPhotos" 
      v-on:added-photos="assignPhotos"
      v-on:removed-photo="assignPhotos"
      v-bind:number-of-maximum-photos=10
      class="added-images"></multifile-image-upload>
  </section>
</template>
        
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitution_offer_photos";
import MultifileImageUpload from '@jscomponents/form_controls/multifile_image_upload.vue';
import NotificationFunction from '@jsmodules/notification_function';
import { mapWritableState } from 'pinia';
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";

export default {
  name: "prostitute-photos",

  props : {
    token : {
      type : String,
      default : '',
      required : true
    },

  },

  emits: ["validated"],

  components: {MultifileImageUpload},

  data() {
    return {
      Translations,
      showNotification : NotificationFunction,
    };
  },

  mounted() {
    this.emitter.on(
      "prostitutePhotosValidator",
      this.validatePhotos
    );
  },

  methods : {
    notifyUserAboutToManyPhotos() : void {
      this.showNotification('you_have_exceeded_photos_limit', 'error');
    },

    assignPhotos(photos : []) : void {
      this.photos = [...photos];
    },

    validatePhotos() : void {
      if(this.numberOfAddedPhotos > 10 || this.numberOfAddedPhotos < 1) {
        this.showNotification('the_number_of_photos_must_be_between_1_and_10', 'error');
      } else {
        this.$emit('validated');
      }
    }
  },

  computed : {
    numberOfAddedPhotos() : number {
      return this.photos.length;
    },

    ...mapWritableState(announcementDetails, ['photos'])
  }
};
</script>
        
<style lang="scss" scoped>
@import "~sass/fonts";

.important-notice {
  color:red;
}

.photos-policy {
  padding: 5px;
  text-align: center;
}

.photos-section {
  background: rgba(0, 0, 0, 0.87);
  color:white;
  @include responsive-font();
  border: 1px solid transparent;
  width: 70%;
}

.token-info {
  text-align: center;
  padding: 5px;
  @include responsive-font(1.5vw, 20px);
  background: #0d9312;
}

.added-images {
  width:90%;
  margin:5px auto;
}

.token {
  letter-spacing:0.3em;
}
</style>
        