<template>
  <section class="prostitute-photos-container">
    <div class="aditional-features">
      <slot></slot>
    </div>
    <div class="photos-restrictions-information">
      <strong v-text="Translations.prostitute_photos_allowed_size"></strong>
    </div>
      <div class="example-photo-description" v-text="Translations.example_of_valid_prostitute_photo"></div>
      <img src="/images/prostitution/photo_example.jpg" class="example-photo" v-bind:alt="Translations.example_of_valid_prostitute_photo">
    <multifile-image-upload
      v-on:number-of-images-limit-exceeded="notifyUserAboutToManyPhotos"
      v-on:added-photos="assignPhotos"
      v-on:removed-photo="assignPhotos"
      v-on:file-size-has-been-exceeded="notifyUserThatFileSizeHasBeenExceeded"
      v-bind:maximum-file-size-in-bytes="1024000"
      v-bind:number-of-maximum-photos="10"
      class="added-images"
    ></multifile-image-upload>
  </section>
</template>

<script lang="ts">
import Translations from "@js/modules/translations/components/prostitution/prostitution_offer_photos";
import MultifileImageUpload from "@jscomponents/form_controls/multifile_image_upload.vue";
import NotificationFunction from "@jsmodules/notification_function";
import { mapWritableState } from "pinia";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";

export default {
  name: "prostitute-photos",

  emits: ["validated"],

  components: { MultifileImageUpload },

  data() {
    return {
      Translations,
      showNotification: NotificationFunction,
    };
  },

  mounted() {
    this.addEventListeners();
  },

  methods: {
    notifyUserAboutToManyPhotos(): void {
      this.showNotification("you_have_exceeded_photos_limit", "error");
    },

    notifyUserThatFileSizeHasBeenExceeded(listOfFilesThatAreToBig: string[]): void {
      let filesListString = listOfFilesThatAreToBig.join(", ");
      let errorMessage = `${Translations.file_size_has_been_exceeded_for_following_files} : ${filesListString}`;
      this.showNotification(errorMessage, "error");
    },

    assignPhotos(photos: []): void {
      this.photos = [...photos];
    },

    validatePhotos(): void {
      if (this.numberOfAddedPhotos > 10 || this.numberOfAddedPhotos < 1) {
        this.showNotification("the_number_of_photos_must_be_between_1_and_10", "error");
      } else {
        this.emitter.emit("prostitutePhotosValidated");
      }
    },

    addEventListeners(): void {
      this.emitter.on("prostitutePhotosValidator", this.validatePhotos);
    },
  },

  computed: {
    numberOfAddedPhotos(): number {
      return this.photos.length;
    },

    ...mapWritableState(announcementDetails, ["photos", "modifiedFields"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.example-photo-description {
  text-align:center;
  padding: 5px;
  @include responsive-font(1.4vw, 19px);
  text-align: center;
  color:white;
  background:#1275b5;
}

.example-photo {
  border-radius: 5px;
  width: 200px;
  border: 2px solid #dfca1b;
  display: block;
  margin: 7px auto;
}

.photos-restrictions-information {
  background: #ddd713;
  color: #0e0e0e;
  padding: 5px;
  @include responsive-font(1.4vw, 19px);
  text-align: center;
}

.important-notice {
  color: red;
}

.aditional-features {
  text-align: center;
}

.prostitute-photos-container {
  color: white;
  @include responsive-font();
  border: 1px solid transparent;
}

.added-images {
  width: 90%;
  margin: 5px auto;
}
</style>
