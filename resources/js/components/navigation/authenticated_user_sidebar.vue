<template>
  <nav class="fixed-sidebar authenticated-user-side-bar">
       <ul class="user-sidebar-list">
		   <li v-on:click="hideSideBar" v-bind:title="translations['hide_side_bar_title']" class="authenticated-user-sidebar-list-element">
			   <phantom-button>
                 <span class="fas fa-angle-up authenticated-user-sidebar-icon"></span>
			     <span v-text="translations['hide_authenticated_user_sidebar_caption']" class="sidebar-item-description"></span>
			   </phantom-button>
		   </li>
		   <li v-bind:title="translations['show_user_profile_settings_title']" class="authenticated-user-sidebar-list-element">
			  <a v-bind:href="userSettingsRoute" class="sub-menu-link">
				<span class="fas fa-cogs authenticated-user-sidebar-icon"></span>
				<span v-text="translations['show_user_profile_settings_caption']" class="sidebar-item-description"></span>
			  </a>
		   </li>
		   <li class="authenticated-user-sidebar-list-element">
			   <span class="fas fa-envelope authenticated-user-sidebar-icon"></span>
			   <span v-text="translations['mailbox_caption']" class="sidebar-item-description"></span>
		   </li>
		   <li v-bind:title="translations['favourites_title']" class="authenticated-user-sidebar-list-element">
			   <span class="fas fa-thumbs-up authenticated-user-sidebar-icon"></span>
			   <span v-text="translations['favourites_caption']" class="sidebar-item-description"></span>
		   </li>
		   <li class="authenticated-user-sidebar-list-element">
			   <span class="fas fa-user-friends authenticated-user-sidebar-icon"></span>
			   <span v-text="translations['friends_caption']" class="sidebar-item-description"></span>
		   </li>
		   <li v-on:click="logout" class="authenticated-user-sidebar-list-element">
			   <phantom-button>
                 <span class="fas fa-sign-out-alt authenticated-user-sidebar-icon"></span>
			     <span v-text="translations['logout_caption']" class="sidebar-item-description"></span>
			   </phantom-button>
			   <form aria-hidden="true" id="logoutForm" class="logout-form" method="POST" v-bind:action="logoutRoute">
				  <input type="hidden" v-bind:value="csrfToken" name="_token">
			   </form>
		   </li>
	   </ul>
	</nav>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
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

		private translations = Translator.getPackage('authenticated_user_sidebar');

           logout(){
			 (<HTMLFormElement>document.getElementById('logoutForm')).submit()
		   }

		   hideSideBar(){
			   this.$root.$emit('hide-side-bar');
		   }

    }
    
        
</script>

<style lang="scss" scoped>
  @import '~sass/fonts';
  @import '~sass/components/side_bar';

  .authenticated-user-side-bar{
	right:0;
	box-shadow: -1px -1px 2px 2px black;
	min-width:65px;
}

.authenticated-user-sidebar-list-element{
	@include sidebar-list-element();
	padding: 4px 0;
	&:hover{
        background:#211e1e;
    }
}

.authenticated-user-sidebar-icon{
	@include responsive-font(1.4vw,16px, initial);
	color:red;
}
</style>