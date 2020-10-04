<template>
  <nav class="links-box">
    <div class="scrollable-controls">
        <button v-on:click="scrollLinks(leftScrollDirection)" v-on:mousedown="scrollLinksByMouseDown(leftScrollDirection)" v-on:mouseup="stopScrollingFromMouseDown" v-bind:title="previousLinksDescription" class="scroll-links-button scroll-previous-links-button-decoration">
            <span v-text="previousLinksDescription"  class="links-button-description"></span>
        </button>
        <div class="links-container-outer">
            <ul v-bind:style="{ left : leftOffsetStyle}" ref="slider_container" class="content-container-slider">
               <slot name="pages-list"></slot>
            </ul>
        </div>
        <button v-on:click="scrollLinks(rightScrollDirection)" v-on:mousedown="scrollLinksByMouseDown(rightScrollDirection)" v-on:mouseup="stopScrollingFromMouseDown" v-bind:title="nextLinksDescription" class="scroll-links-button scroll-next-links-button-decoration">
            <span v-text="nextLinksDescription" class="links-button-description"></span>
        </button>
    </div>
    <ul class="next-previous-links">
        <slot name="previous-page"></slot>
        <slot name="next-page"></slot>
    </ul>
 </nav>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';
import Translator from '@jsmodules/translator.js';
import {LinkListScrollDirection}  from '@js/enum/movies/scroll_types';

@Component
	export default class LinksBox extends Vue{
        @Prop({
            type: Number,
            required: true,
        }) readonly linksAmount: number;

        previousLinksDescription :string = Translator.translate('scroll_previous_links');
        nextLinksDescription :string = Translator.translate('scroll_next_links');
        scrollOffset : number = 0;
        leftScrollDirection = LinkListScrollDirection.Left;
        rightScrollDirection = LinkListScrollDirection.Right;
        mouseDown : boolean = false;
        interval = null;

        get leftOffsetStyle(): string {
            const linksInBox = this.getAmmountOfVisibleLinksInBox();
            const unit = (linksInBox === 5) ? "px" : "vw";
            const offsetBase = (linksInBox === 5) ? 48 : 5;
            return `calc(${-1*this.scrollOffset*offsetBase}${unit})`;
        }

        getAmmountOfVisibleLinksInBox(): number {
            return (window.innerWidth <= 830) ? 5 : 10;
        }

        scrollLinks(direction:LinkListScrollDirection){

            switch(direction){
                case LinkListScrollDirection.Left:
                   this.scrollOffset = (this.scrollOffset <= 0) ? 0 : (this.scrollOffset - 1);
                break;

                case LinkListScrollDirection.Right:
                   const maxOffset = this.linksAmount - this.getAmmountOfVisibleLinksInBox();
                   this.scrollOffset = (this.scrollOffset >= maxOffset) ? maxOffset : (this.scrollOffset + 1);
                break;
            }
        }

        scrollLinksByMouseDown(direction:LinkListScrollDirection){
            this.interval = setInterval(() => this.scrollLinks(direction),300)
        }

        stopScrollingFromMouseDown(){
            if(this.interval){
              clearInterval(this.interval);
              this.interval = null;
            }
            
        }

    }
        
</script>

<style lang="scss">

@import '~sass/fonts';

.scroll-previous-links-button-decoration{
    clip-path: polygon(40% 0%, 40% 25%, 100% 25%, 100% 75%, 40% 75%, 40% 100%, 0% 50%);
}

.scroll-next-links-button-decoration{
    clip-path: polygon(0% 25%, 60% 25%, 60% 0%, 100% 50%, 60% 100%, 60% 75%, 0% 75%);
}

.next-previous-list-element{
    margin:0 4px;
    background: linear-gradient(to bottom, #1d1c1c, #0e0e0e);
    border-radius: 3px;
    border: 1px solid black;
    padding:0 4px;
    &:hover:not(.disabled-list-element){
        box-shadow: 1px 1px 3px 1px black;
    }
}

.disabled-previous-next-link{
    cursor: not-allowed;
}

.disabled-list-element{
    &:hover{
        background:red;
    }
}

.links-button-description{
    position: absolute;
    left:0;
    top:-9999px;
    display: inline-block;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.links-box{
    display:block;
    margin:10px auto;
}

.links-container-outer{
    overflow:hidden;
    margin: 0 5px;
}

.content-container-slider{
    position: relative;
    left:0;
    top:0;
    transition: left 0.3s;
    padding:0;
    margin:0;
    display:flex;
    flex-wrap:nowrap;
    list-style-type: none;
    width:50vw;
    @media(max-width:830px){
        width:240px;
    }
}

.next-previous-links{
    margin: 5px 0;
    padding:0;
    display:flex;
    flex-wrap:nowrap;
    list-style-type: none;
    @include responsive-font();
    color:white;
    justify-content: center;
}

.previous-next-link{
    color:white;
    text-decoration: none;
    padding: 4px;
    display: inline-block;
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
    display: inline-block;
    width: 100%;
    line-height:3.5vw;
    background:linear-gradient(to bottom, #e60f0f, #540505);
    &:hover{
       background: linear-gradient(#17f117, #09501b); 
    }
    border-radius:5px;
    @media(max-width:830px){
        line-height: 40px;
    }
}

.current-page-link{
   background: linear-gradient(#17f117, #09501b); 
}

.pagination-link-list-element{
  flex-basis: 3.5vw;
  height: 3.5vw;
  display: inline-block;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0.75vw;
  @media(max-width:830px){
        flex-basis:40px;
        margin:0 4px;
        height:40px;
        line-height: 40px;
  }
}

.scroll-links-button{
    cursor: pointer;
    border:none;
    outline:none;
    border-radius: 5px;
    flex-basis: 4%;
    min-width: 35px;
    background: linear-gradient(#17f117, #09501b);
    &:active{
        transform: scale(1.2);
    }
}

</style>