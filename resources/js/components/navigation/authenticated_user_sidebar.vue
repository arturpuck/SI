<template>
  <nav class="user-sidebar">
       <ul class="user-sidebar-list">
		   <li v-on:click="hideSideBar" v-bind:title="hideSideBarTitle" class="user-sidebar-element">
			   <phantom-button>
                 <span class="fas fa-angle-up sidebar-icon"></span>
			     <span v-text="hideCaption" class="sidebar-item-description"></span>
			   </phantom-button>
		   </li>
		   <li v-bind:title="profileTitle" class="user-sidebar-element">
			  <a v-bind:href="userSettingsRoute" class="sub-menu-link">
				<span class="fas fa-cogs sidebar-icon"></span>
				<span v-text="profileCaption" class="sidebar-item-description"></span>
			  </a>
		   </li>
		   <li class="user-sidebar-element">
			   <span class="fas fa-envelope sidebar-icon"></span>
			   <span v-text="mailBoxCaption" class="sidebar-item-description"></span>
		   </li>
		   <li v-bind:title="favouritesTitle" class="user-sidebar-element">
			   <span class="fas fa-thumbs-up sidebar-icon"></span>
			   <span v-text="favouritesCaption" class="sidebar-item-description"></span>
		   </li>
		   <li class="user-sidebar-element">
			   <span class="fas fa-user-friends sidebar-icon"></span>
			   <span v-text="friendsCaption" class="sidebar-item-description"></span>
		   </li>
		   <li v-on:click="logout" class="user-sidebar-element">
			   <phantom-button>
                 <span class="fas fa-sign-out-alt sidebar-icon"></span>
			     <span v-text="logoutCaption" class="sidebar-item-description"></span>
			   </phantom-button>
			   <form aria-hidden="true" id="logoutForm" class="logout-form" method="POST" v-bind:action="logoutRoute">
				  <input type="hidden" v-bind:value="csrfToken" name="_token">
			   </form>
		   </li>
	   </ul>
	</nav>
</template>

<script lang="ts">
  import {Vue, Component, Emit, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';

@Component
    export default class AuthenticatedUserSidebar extends Vue {

		@Prop({
            type: String,
            required: false,
            default: '/profil/ustawienia'
		}) readonly userSettingsRoute: String;
		
		@Prop({
            type: String,
            required: false,
            default: '/wyloguj'
		}) readonly logoutRoute: String;
		
		@Prop({
            type: String,
            required: true,
        }) readonly csrfToken: String;

		private translator = Translator;

           logout(){
			 (<HTMLFormElement>document.getElementById('logoutForm')).submit()
		   }

		   hideSideBar(){
			   this.$root.$emit('hide-side-bar');
		   }

		   get hideSideBarTitle(){
			   return this.translator.translate('hide_side_bar');
		   }

		   get hideCaption(){
			  return this.translator.translate('hide'); 
		   }

		   get profileCaption(){
			  return this.translator.translate('profile'); 
		   }

		   get profileTitle(){
			   return this.translator.translate('user_settings');
		   }

		    get mailBoxCaption(){
			  return this.translator.translate('messages'); 
		   }

		   get favouritesCaption(){
			  return this.translator.translate('favourites'); 
		   }

		   get favouritesTitle(){
			   return this.translator.translate('your_favourite_movies_etc');
		   }

		   get friendsCaption(){
			  return this.translator.translate('friends'); 
		   }

		   get logoutCaption(){
			   return this.translator.translate('logout');
		   }

    }
    
        
</script>

<style lang="scss" scoped>
  @import '~sass/fonts';
  @import '~sass/components/side_bar';
</style>