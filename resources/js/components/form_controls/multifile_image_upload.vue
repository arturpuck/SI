<template>
 <div v-on:drop="addFilesByDrop"  v-on:dragover="allowDrop" class="container">
    <div v-text="Translations['user_info']" class="info"></div>
    <image-photography-icon v-if="nothingHasBeenAdded" class="blank-image"></image-photography-icon>
    <ul class="images-list">
      <li v-for="(file, index) in files" v-bind:key="index" class="image-list-element">
        <button-close 
        v-on:click="removeFileFromListAndEmitEvent(index)"
        v-bind:label="Translations['remove']"
        v-bind:title="Translations['remove']"
        class="close-button"></button-close>
        <img  v-bind:src="createURL(file)" class="added-image">
      </li>
    </ul>
    <div class="centering-container">
      <add-button v-on:click="showImagesDialogBox">{{Translations['add_button_caption']}}</add-button>
    </div>
    <input class="files-input" accept="image/*" v-on:input="addFilesToList" ref="fileInput" type="file" multiple v-bind:name="name">
 </div>   
</template>
          
<script lang="ts">
import AddButton from "@jscomponents-form-controls/add_button.vue";
import ImagePhotographyIcon from "@svgicon/image_photography_icon.vue";
import ButtonClose from "@jscomponents/form_controls/button_close.vue";
import Translations from "@jsmodules/translations/components/multifile_image_upload";
  
  export default {

    emits : ['numberOfImagesLimitExceeded', 'fileSizeHasBeenExceeded', 'addedPhotos', 'removedPhoto'],

    name: "multifile-image-upload",

    components : {
        AddButton,
        ImagePhotographyIcon,
        ButtonClose
    },

    methods : {

      allowDrop(event) {
        event.preventDefault();
        event.stopPropagation();
      },

      addFilesByDrop(event) {
        this.allowDrop(event);
        if(this.fileNumberLimitIsNotExceeded(event) && this.filesDoNotExceedSizeLimit(event)) {
          this.pushFilesAndEmitEvent(event.dataTransfer.files);
        }
      },

      showImagesDialogBox() : void {
        this.$refs.fileInput.click();
      },

      addFilesToList() : void {
        if(this.fileNumberLimitIsNotExceeded() && this.filesDoNotExceedSizeLimit()) {
          this.pushFilesAndEmitEvent(this.$refs.fileInput.files);
        }
      },

      pushFilesAndEmitEvent(files : []) : void {
        this.files.push(...files);
        this.$emit('addedPhotos', this.files);
      },

      fileNumberLimitIsNotExceeded(event = undefined) : boolean {
        if(this.numberOfMaximumPhotos !== undefined) {
          const numberOfFilesUserWantsToAdd = event === undefined ? this.$refs.fileInput.files.length : event.dataTransfer.files.length;
          const totalNumberOfPhotosIncludingCurentlyAdded = this.files.length + numberOfFilesUserWantsToAdd;
          if(totalNumberOfPhotosIncludingCurentlyAdded > this.numberOfMaximumPhotos) {
            this.$emit('numberOfImagesLimitExceeded', totalNumberOfPhotosIncludingCurentlyAdded);
            return false;
          }
        }
        return true;
      },

      filesDoNotExceedSizeLimit(event = undefined) : boolean {
        if(this.maximumFileSizeInBytes === undefined) {
          return true;
        }

        let invalidFilesNames = [];
        let files = event === undefined ? this.$refs.fileInput.files : event.dataTransfer.files;
        let allFilesAreValid = true;
        
        for(let file of files) {
          if(file.size > this.maximumFileSizeInBytes) {
            invalidFilesNames.push(file.name);
            allFilesAreValid = false;
          }
        }

         if(allFilesAreValid) {
          return true;
         }
         this.$emit('fileSizeHasBeenExceeded', invalidFilesNames);
         return false;
      },

      createURL(file : File) : string {
        return URL.createObjectURL(file);
      },

      removeFileFromListAndEmitEvent(indexOfFileThatShouldBeRemoved : number) : void {
        this.files = this.files.filter((file, fileIndex) => fileIndex != indexOfFileThatShouldBeRemoved);
        this.$emit('removedPhoto', this.files);
      }
    },

    props : {
        name : {
            required : false,
            type : String,
            default: "multimage-upload-files"
        },

        numberOfMaximumPhotos : {
          required : false,
          type : Number,
          default : undefined
        },

        maximumFileSizeInBytes : {
          required : false,
          type : Number,
          default : undefined
        }
    },

  
    data() {
      return {
        files : [],
        Translations
      };
    },
  
    mounted() {

    },

    computed : {
      nothingHasBeenAdded() : boolean {
        return this.files.length === 0;
      }
    }

  };
</script>
          
  <style lang="scss" scoped>
  @import "~sass/fonts";

  .close-button {
    position: absolute;
    top: 1px;
    right: 1px
  }

  .files-input {
    display: none;
  }

  .centering-container {
    text-align: center;
    padding:5px;
  }

  .container {
    border-radius: 4px;
    background:black;
    border:1px solid silver;
    min-width: 230px;
  } 

  .info {
    text-align: center;
    padding:5px;
  }

  .blank-image {
    width:20%;
    min-width:120px;
    height:auto;
    display:block;
    margin:0 auto;
    fill: #11b337;
  }

  .images-list {
    list-style-type: none;
    padding:0;
    margin:0;
    display:flex;
    flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .added-image {
    width:100%;
  }

  .image-list-element {
    min-width:100px;
    flex-basis:20%;
    border: 1px solid #810c0c;
    margin: 5px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
  }
 
  </style>