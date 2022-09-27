<template>
  <ul
    v-bind:aria-hidden="!pornSubMenuIsVisible"
    v-bind:class="{
      'visible-sub-menu': pornSubMenuIsVisible,
      'hidden-sub-menu': !pornSubMenuIsVisible,
    }"
    class="sub-menu-list porn-sub-menu-list"
  >
    <li class="sub-menu-list-element intendation-first-level">
      <div v-on:click="toggleMoviesSubMenu" class="sub-menu-level-one-item">
        <movie-media-player-icon
          v-show="!moviesSubMenuIsVisible"
          class="navbar-icon navbar-icon-outer"
        >
        </movie-media-player-icon>

        <arrow-up-icon
          v-show="moviesSubMenuIsVisible"
          class="navbar-icon navbar-icon-outer"
        ></arrow-up-icon>
        <phantom-button> {{ translations["movies"] }} </phantom-button>
      </div>
    </li>
    <li>
      <ul
        v-bind:aria-hidden="!moviesSubMenuIsVisible"
        class="sub-menu-list-nested-level-two"
        v-bind:class="{
          'visible-movies-sub-menu': moviesSubMenuIsVisible,
          'hidden-movies-sub-menu': !moviesSubMenuIsVisible,
        }"
      >
        <li
          v-on:click="showCategoriesList"
          class="sub-menu-list-element-intendation-second-level"
        >
          <folder-icon
            class="navbar-icon navbar-icon-second-level"
          ></folder-icon>
          {{ translations["categories"] }}
        </li>
        <li class="sub-menu-list-element-intendation-second-level">
          <a class="navbar-link-main-manu" href="/filmy/najnowsze/strona/1">
            <expand-all-icon
              class="navbar-icon navbar-icon-second-level--colored"
            ></expand-all-icon>
            {{ translations["the_latest"] }}
          </a>
        </li>
        <li class="sub-menu-list-element-intendation-second-level">
          <a
            class="navbar-link-main-manu"
            href="/filmy/najpopularniejsze/strona/1"
          >
            <happy-tongue-icon
              class="navbar-icon navbar-icon-second-level--colored"
            ></happy-tongue-icon>
            {{ translations["the_most_popular"] }}
          </a>
        </li>
        <li class="sub-menu-list-element-intendation-second-level">
          <a
            class="navbar-link-main-manu"
            href="/filmy/wyszukiwanie-zaawansowane"
          >
            <magnifier-icon
              class="navbar-icon navbar-icon-second-level--colored"
            ></magnifier-icon>
            {{ translations["advanced_search"] }}
          </a>
        </li>
      </ul>
    </li>
    <li class="sub-menu-list-element intendation-first-level">
      <div class="sub-menu-level-one-item">
        <a class="navbar-link-main-manu" href="/gwiazdy-porno/lista">
          <star-full-icon
            class="navbar-icon navbar-icon-outer"
          ></star-full-icon>
          {{ translations["pornstars_navbar_caption"] }}
        </a>
      </div>
    </li>
    <li class="sub-menu-list-element intendation-first-level">
      <div class="sub-menu-level-one-item">
        <a class="navbar-link-main-manu" href="/porno-słownik">
          <dictionary-icon
            class="navbar-icon navbar-icon-outer"
          ></dictionary-icon>
          {{ translations["dictionary"] }}
        </a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '~sass/fonts';
$border-color: black;

@mixin navbar-icon-basic{
	width:1em;
	height: auto;
}

.navbar-icon-second-level{
	@include navbar-icon-basic();
	&--colored{
		fill:yellow;
		@include navbar-icon-basic();
	}
	
}

.hidden-sub-menu{
	max-height:0;
	transition:none;
}

.visible-sub-menu{
	transition: max-height 1.5s;
	max-height:1500px;
	box-shadow: 2px 2px 4px 3px black;
}

.porn-sub-menu-list{
	left:13vw;
}

.sub-menu-list{
	position:absolute;
	overflow:hidden;
	display:inline-block;
	top:100%;
	max-height:0;
	padding: 0;
    list-style-type: none;
    margin: 0;
	@include responsive-font(1.5vw, 18px, 'Aldrich');
	color:white;
	min-width:140px;
	z-index:1;
    border-radius: 0 0 8px 8px;
}


.sub-menu-list-element
{
  background:linear-gradient(to right,#0a0a0a, #2e2e2d);
  border-bottom: 1px solid $border-color;
  cursor:pointer;
}

.navbar-icon{
	margin:0 5px;
	
}

.navbar-icon-outer{
	fill:#eb091c;
	@include navbar-icon-basic();
}

.sub-menu-list-nested-level-two{
	list-style-type: none;
	overflow:hidden;
	padding:0;
	transition: max-height 0.7s;
}


</style>
        
<script lang="ts">
import MovieMediaPlayerIcon from "@svgicon/movie_media_player_icon";
import ArrowUpIcon from "@svgicon/arrow_up_icon";
import FolderIcon from "@svgicon/folder_icon";
import HappyTongueIcon from "@svgicon/happy_tongue_icon";
import DictionaryIcon from "@svgicon/dictionary_icon";
import ExpandAllIcon from "@svgicon/expand_all_icon";
import MagnifierIcon from "@svgicon/magnifier_icon";
import Translations from "@jsmodules/translations/components/navbar";

export default {
  name: "porn-sub-menu",

  data() {
    return { 
        moviesSubMenuIsVisible : false
    }
  },

  components : {
    MovieMediaPlayerIcon,
    ArrowUpIcon,
    FolderIcon,
    HappyTongueIcon,
    DictionaryIcon,
    ExpandAllIcon,
    MagnifierIcon,
  },

  props : {
    visible : {
        type : Boolean,
        required : true,
        default : false
    }
  },

  methods : {
    toggleMoviesSubMenu() {
      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
    },
  }
};
</script>
        