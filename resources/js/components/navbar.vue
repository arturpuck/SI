<template>
<div>
<nav class="page-navigation">
	<ul class="navigation-list">
		<li class="navigation-element-main">
			<a title="Strona główna" href="/" class="logo-link">
			   <span class="fas navbar-icon navbar-icon-outer fa-heartbeat"></span>
			   <span class="logo-description"></span>
			</a>
		</li>
		<li v-on:click="togglePornSubMenu" v-on:mouseenter="showPornSubMenu"  class="navigation-element-main">
			<span v-show="!pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-camera-retro"></span>
			<span v-show="pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-arrow-up"></span>
            	Porno
		</li>
		<li v-if="!userIsAuthenticated" class="navigation-element-main register-selection ">
			<a class="navbar-link-main-manu" v-bind:href="registerRoute">
			  <span class="fas navbar-icon navbar-icon-outer fa-user-plus"></span> 
			  Rejestruj
			</a> 
		</li>
		<li v-if="!userIsAuthenticated" class="navigation-element-main">
			<div v-on:click="toggleLoginPanel" class="login-button-container">
              <span class="fas navbar-icon navbar-icon-outer fa-sign-in-alt"></span>
			  Loguj
			</div>
		</li>
		<li v-if="userIsAuthenticated" v-on:click="showSideBar" class="navigation-element-main navbar-element-user">
			<span class="fas navbar-icon navbar-icon-outer fa-user"></span>
            <span v-text="userName" class="user-nick"></span>
			<button title="rozwiń menu użytkownika" v-bind:class="{'visible-sidebar-button' : !userSideBarIsVisible}" class="show-sidebar-button">
				<span class="fas fa-angle-down show-sidebar-button-decoration show-sidebar-button-element"></span>
			</button>
		</li>
	</ul>
	<ul v-bind:class="{'visible-sub-menu' : pornSubMenuIsVisible , 'hidden-sub-menu' : !pornSubMenuIsVisible}" class="sub-menu-list porn-sub-menu-list">
		<li class="sub-menu-list-element intendation-first-level">
			<div v-on:click="toggleMoviesSubMenu" class="sub-menu-level-one-item">
				<span v-show="!moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-film"></span>
				<span v-show="moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-arrow-up"></span>
				     Filmy
			</div>
		</li>
		<li>
			<ul class="sub-menu-list-nested-level-two" :class="moviesSubMenuIsVisible && pornSubMenuIsVisible ? 'visible-movies-sub-menu' : 'hidden-movies-sub-menu'">
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-second-level fa-images"></span>
						Kategorie
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-second-level fa-folder-plus"></span>
						Najnowsze
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-second-level fa-grin"></span>
						Najpopularniejsze
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-second-level fa-search"></span>
						Szukanie zaawansowane
					</li>
			  </ul>
			  </li>
			  <li class="sub-menu-list-element intendation-first-level">
					<div class="sub-menu-level-one-item">
						<span class="fas navbar-icon navbar-icon-outer fa-star"></span>
					 Gwiazdy porno
					</div>
			    </li>
		</ul>
	</nav>
	<nav v-if="userIsAuthenticated" v-bind:class="{'visible-sidebar' : userSideBarIsVisible, 'hidden-sidebar' : !userSideBarIsVisible}" class="user-sidebar">
       <ul class="user-sidebar-list">
		   <li v-on:click="hideSideBar" title="schowaj boczny pasek" class="user-sidebar-element">
			   <span class="fas fa-angle-up sidebar-icon"></span>
			   <span class="sidebar-item-description">schowaj</span>
		   </li>
		   <li title="ustawienia profilu" class="user-sidebar-element">
			  <a v-bind:href="userSettingsRoute" class="sub-menu-link">
				<span class="fas fa-cogs sidebar-icon"></span>
				<span class="sidebar-item-description">profil</span>
			  </a>
		   </li>
		   <li title="twoje wiadomości" class="user-sidebar-element">
			   <span class="fas fa-envelope sidebar-icon"></span>
			   <span class="sidebar-item-description">skrzynka</span>
		   </li>
		   <li title="ulubione filmy itp." class="user-sidebar-element">
			   <span class="fas fa-thumbs-up sidebar-icon"></span>
			   <span class="sidebar-item-description">ulubione</span>
		   </li>
		   <li class="user-sidebar-element">
			   <span class="fas fa-user-friends sidebar-icon"></span>
			   <span class="sidebar-item-description">znajomi</span>
		   </li>
		   <li v-on:click="logout" class="user-sidebar-element">
			   <span class="fas fa-sign-out-alt sidebar-icon"></span>
			   <span class="sidebar-item-description">wyloguj</span>
			   <form ref="logoutForm" class="logout-form" method="POST" v-bind:action="logoutRoute">
				  <input type="hidden" v-bind:value="csrfToken" name="_token">
			   </form>
		   </li>
	   </ul>
	</nav>
	<div v-if="!userIsAuthenticated" v-show="loginPanelIsVisible" class="login-form-container">
	            <form v-bind:action="loginRoute" method="POST" id="login-form" v-bind:class="{'visible-login-form' : animatePanel}" class="login-form">
					<header class="login-panel-toolbar">
						<span class="login-info">Zaloguj się do Sex-Imperium</span>
						<icon-close v-on:click.native="toggleLoginPanel" title="Zamknij okno logowania" aria-label="Zamknij okno logowania"></icon-close> 
					</header>
					<input v-bind:value="csrfToken" type="hidden" name="_token">
					<label for="login" class="main-panel-label">Email lub login</label>
					<text-input-combo
						v-bind:input-is-required="true"
						input-id="login"
						inputType="text"
						name="login-or-email">
					</text-input-combo>
					<label for="password" class="main-panel-label">Hasło</label>
					<text-input-combo
						v-bind:input-is-required="true"
						input-id="password"
						inputType="password"
						name="password">
					</text-input-combo>
					<labeled-checkbox
					  name="remember"
					  v-bind:aditional-classes="{label: 'remember-me-description'}">
						Zapamiętaj mnie
					</labeled-checkbox>
					<submit-button>Zaloguj</submit-button>
					<a v-bind:href="forgotPasswordRoute" class="forgot-password-link">Zapomniałem hasła</a>
				</form>
    </div>
</div>	
</template>

<script>
import LabeledCheckbox from "./form_controls/labeled_checkbox.vue";
import SubmitButton from "./form_controls/submit_button.vue";
import TextInputCombo from "./form_controls/text_input_combo.vue";
import IconClose from "./form_controls/icon_close.vue";

	export default {
		name: 'navbar',
		
		components :{
		  LabeledCheckbox,
		  SubmitButton,
		  TextInputCombo,
		  IconClose
		},
        props: {

        	userId : {
        		type: Number,
        		required: false,
				default: undefined
			},
			
			userName : {
              required: false,
        	  type: String,
			  default : ""
			},

        	registerRoute : {
        		required: false,
        		type: String,
				default : ""
			},

			forgotPasswordRoute : {
				required: false,
				type: String,
				default : ""
			},

			loginRoute : {
				required : false,
				type: String,
				default : ""
			},

			logoutRoute : {
				required : false,
				type: String,
				default : ""
			},

			userSettingsRoute : {
				required : false,
				type: String,
				default : ""
			}

        },
         data() {
		 	return {
		 		pornSubMenuIsVisible : false,
				moviesSubMenuIsVisible : false,
				loginPanelIsVisible : false,
				csrfToken : "",
				animatePanel : false,
				userIsAuthenticated : undefined,
				userSideBarIsVisible : true
		 	};
 		},

        methods: {
        	hideAllSecondLevelSubMenus(){
		      this.moviesSubMenuIsVisible = false;
		   },

		   togglePornSubMenu(){
			  this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
			  this.hideAllSubMenusExcept("pornSubMenuIsVisible");
		      this.hideAllSecondLevelSubMenus();
		   },

		   toggleMoviesSubMenu(){
		      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
		   },

		   showPornSubMenu(event){
			   this.pornSubMenuIsVisible = true;
			   this.hideAllSubMenusExcept("pornSubMenuIsVisible");
		   },

		   resetNavbar(){
				this.hideAllSubMenusExcept();
				this.hideAllSecondLevelSubMenus();  
		   },

		   toggleLoginPanel(){
			   this.loginPanelIsVisible = !this.loginPanelIsVisible;
			   setTimeout(()=> this.animatePanel = !this.animatePanel,300);
		   },

		   hideAllSubMenusExcept(except = ""){
			   const subMenusControlVariableNames = [
				   "pornSubMenuIsVisible"
			   ];

			   for(const variableName of subMenusControlVariableNames){
				   if(variableName != except){
                      this[variableName] = false;
				   }
			   }
		   },

		   logout(){
			   this.$refs.logoutForm.submit();
		   },

		   hideSideBar(){
			   this.userSideBarIsVisible = false;
			   this.storeSideBarInformation('hidden');
		   },

		   showSideBar(){
			   this.userSideBarIsVisible = true;
			   this.storeSideBarInformation('visible');
			   
		   },

		   storeSideBarInformation(visible){
                localStorage.setItem('sideBar',visible);
		   },

		   handleClickoutsideNavbar(){

               if(this.anySubMenuIsVisible){
				   this.resetNavbar();
			   }
		   }
    
		},

		computed : {

            anySubMenuIsVisible(){
				return this.pornSubMenuIsVisible;
			}
		},

		created(){
			this.userIsAuthenticated = Boolean(this.userId);

			if(this.userIsAuthenticated){
			   const sideBarInfo = localStorage.getItem('sideBar');
               this.userSideBarIsVisible = (sideBarInfo == 'hidden') ? false : true;
			}
		},
		
		mounted(){
		   this.csrfToken = document.getElementById("csrf-token").content;
		   this.$root.$on('clickOutsideNavbar',this.handleClickoutsideNavbar);
		}
    }
</script>

<style lang="scss">

@import '../../sass/fonts';
@import '../../sass/components/login_panel';
@import '../../sass/components/side_bar';

@mixin navbar-link{
	color:white;
	text-decoration: none;
	display:flex;
	align-items: baseline;
}

.logo-link{
	@include navbar-link();
}

.sub-menu-link{
	text-decoration: none;
	color:inherit;
	display: block;
}

.logo-description::after{
	content: "Sex-Imperium";
}

.user-panel-sub-menu-list{
	right:1vw;
}

.navbar-element-user{
	margin-left: auto;
	position:relative;
}

.remember-me-description{
	color: white;
	@include responsive-font();
}

.labeled-checkbox-container{
	display: block;
    width: 95%;
    margin: 4px auto 1px auto;
}

.labeled-checkbox-description{
	color:white;
}

.main-panel-label
{
	display:block;
	text-align:center;
	padding:4px;
	@include responsive-font(1.3vw, 18px);
	color:white;
}

.forgot-password-link
{
	display:block;
	padding:4px;
	text-align:center;
	color:white;
	text-decoration:none;
	@include responsive-font(1.2vw, 17px);
	&:hover
	{
	  text-decoration: underline;
	}
	border-radius: 0 0 7px 7px;
	background:#242229;
}

.login-button-container{
    height: 100%;
}

.navigation-list{
	list-style-type: none;
	padding:0;
	margin:0;
	display:flex;
	background: #0d0c0d;
	align-items: stretch;
	position:relative;
	z-index:3;
	box-shadow: 2px 2px 2px 2px black;
}

.register-selection{
	margin-left: auto;
}

.navigation-element-main{
	transition: background 2s;
	&:hover{
		background: #2d2d30;
	}
	&:hover{
      cursor:pointer;
	}
	color:white;
	display: inline-block;
	line-height: 100%;
	@include responsive-font(1.5vw, 18px, 'Aldrich');
	display: flex;
    flex-direction: row;
	align-items: baseline;
	padding:6px;
}

.page-navigation{
    position: fixed;
    width: 100%;
    top:0;
    z-index:10;
    font-size:0;
    &:focus{
    	outline:none;
    };
}

$border-color: black;

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

.porn-sub-menu-list{
	left:13vw;
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

.sub-menu-list-element
{
  background:linear-gradient(to right,#0a0a0a, #2e2e2d);
  border-bottom: 1px solid $border-color;
  cursor:pointer;
}

.sub-menu-list-nested-level-two{
	list-style-type: none;
	overflow:hidden;
	padding:0;
	transition: max-height 0.7s;
}

.navbar-icon-second-level{
	color: #bbb606;
}

.sub-menu-list-element-intendation-second-level{
	padding:5px 2px 5px 2vw;
	border-bottom:1px solid black;
	white-space: nowrap;
	background:linear-gradient(to right,#0a0a0a, #2e2e2d);
	&:hover{
		background:black;
		cursor:pointer;
	}
}

.visible-movies-sub-menu{
	max-height: 500px;
}

.hidden-movies-sub-menu{
	max-height:0;
}

.sub-menu-level-one-item{
	&:hover{
		background:black;
	}
	padding: 5px 2px 5px 1vw;
}

.sum-menu-list-element:last-child{
	border-radius: 0 0 8px 8px;
}

.navbar-icon{
	margin:0 5px;
	
}

.navbar-icon-outer{
	color:#eb091c
}

.navbar-link-main-manu{
	@include navbar-link();
}

@media(max-width: 400px){
	.navigation-element-main{
		padding:3px 1px;
		font-size:16px;
	}

	.sub-menu-list{
		font-size:16px;
	}

	.navbar-icon{
		margin:0 3px;
	}
}

@media(min-width:520px) and (max-width: 1200px){
	.porn-sub-menu-list{
       left:150px;
	}
}

@media(max-width: 520px){
	.logo-description::after{
		content: "SI";
	}

	.porn-sub-menu-list{
       left:50px;
	}

}

</style>