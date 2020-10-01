<template>
  <nav class="links-box">
    <div class="scrollable-controls">
        <button v-bind:title="previousLinksDescription" class="scroll-links-button">
            <span v-text="previousLinksDescription"  class="links-button-description"></span>
            <span class="scroll-previous-links-button-decoration"></span>
        </button>
        <div class="links-container-outer">
            <ul class="content-container-slider">
               <slot name="pages-list"></slot>
            </ul>
        </div>
        <button v-bind:title="nextLinksDescription" class="scroll-links-button">
            <span v-text="nextLinksDescription" class="links-button-description"></span>
        </button>
    </div>
    <ul class="next-previous-links">
         <li>
           <slot name="previous-page"></slot>
         </li>
         <li>
           <slot name="next-page"></slot>
         </li>
    </ul>
 </nav>
</template>

<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
import Translator from '@jsmodules/translator.js'

@Component
	export default class LinksBox extends Vue{

        previousLinksDescription :string = Translator.translate('scroll_previous_links');
        nextLinksDescription :string = Translator.translate('scroll_next_links');

    }
        
</script>

<style lang="scss">

@import '~sass/fonts';

.scroll-previous-links-button-decoration{
    clip-path: polygon(40% 10%, 40% 34%, 100% 34%, 100% 67%, 40% 66%, 40% 90%, 0% 50%);
    background:white;
    width:100%
}

.links-button-description{
    position: absolute;
    left:0;
    top:-9999px;
}

.links-box{
    min-width:300px;
    width:20vw;
    display:block;
    margin:10px auto;
}

.links-container-outer{
    flex-grow:100;
    overflow:hidden;
    margin: 0 5px;
}

.content-container-slider{
    position: relative;
    left:0;
    top:0;
    padding:0;
    margin:0;
    display:flex;
    flex-wrap:nowrap;
    list-style-type: none;
}

.next-previous-links{
    margin:0;
    padding:0;
    display:flex;
    flex-wrap:nowrap;
}

.scrollable-controls{
    width:100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    @include responsive-font(1.5vw,20px);
    color:white;
}

.pagination-link{
    color:white;
    text-decoration: none;
}

.pagination-link-list-element{
  margin:0 5px;
  display: inline-block;
  border-radius:5px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 10%;
  background:linear-gradient(to bottom, #e60f0f, #540505);
}

.scroll-links-button{
    cursor: pointer;
    background: black;
    border:none;
    outline:none;
    border-radius: 5px;
    @include responsive-font(1.7vw,22px);
    color:white;
    display:flex;
    align-items:stretch;
}

</style>