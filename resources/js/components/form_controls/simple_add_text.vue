<template>
    <div class="add-text-container">
        <label class="text-label" v-text="label" v-bind:for="uid"></label>
        <textarea v-bind:id="uid" v-bind:rows="rows" v-model="text" class="text-content"></textarea>
        <div class="button-container">
            <add-button v-on:click="emitAddEvent" class="add-text-button">{{buttonCaption}}</add-button>
        </div>
    </div>
</template>

<script lang="ts">
import Translator from "@jsmodules/translator.js";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import { v4 as uuidv4 } from 'uuid';

export default {
    name : "simple-add-text",

    emits : ['add-text'],
    
    components : {
        AddButton
    },

    props : {
        buttonCaption : {
            required: false,
            type: String,
            default: Translator.translate('add_comment')
        },

        label : {
            required: false,
            type: String,
            default: Translator.translate('comment_body')
        },

        rows : {
            required: false,
            type: Number,
            default : 15
        }
    },

    data() {
        return { 
          Translator,
          text: '',
          content : '',
          uid : uuidv4()
        }
    },

    methods : {
        emitAddEvent() {
            this.$emit('add-text', this.text);
        }
    }
    


}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.add-button {
    margin:0 auto;
}

.button-container {
    display:flex;
    justify-content:center;
    padding:5px 0;
}

.text-content {
    width:100%;
    min-width:200px;
    border-radius: 5px;
    border: 1px solid transparent; 
    background: #212121;
    color: white;
    outline: none !important;
    &:focus {
        border: 1px solid rgb(100, 8, 8);
    }
    &:focus-visible {
        border: 1px solid rgb(100, 8, 8);
    }
}

.text-label {
    display:block;
    text-align:center;
    color:inherit;
    font-size:inherit;
    padding:4px 0;
}

</style>