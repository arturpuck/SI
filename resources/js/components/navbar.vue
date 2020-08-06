<template>
<div>
<nav tabindex="0" v-on:focusout="resetNavbar" id="navbar" v-on:mouseenter="setElementToFocusState"  class="main-page-navigation">
	<ul class="navigation-list">
		<li v-on:click="togglePornSubMenu" v-on:mouseenter="showPornSubMenu"  class="navigation-element-main navigation-element-padding">
			<span v-show="!pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-camera-retro"></span>
			<span v-show="pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-outer fa-arrow-up"></span>
            	Porno
		</li>
		<li class="navigation-element-main navigation-element-padding">
			<span class="fas navbar-icon navbar-icon-outer fa-users"></span>
			Spotkania
		</li>
		<li class="navigation-element-main register-selection ">
			<a class="navbar-link-main-manu" :href="registerRoute">
			  <span class="fas navbar-icon navbar-icon-outer fa-user-plus"></span> 
			  Rejestruj
			</a> 
		</li>
		<li class="navigation-element-main">
			<div v-on:click="toggleLoginPanel" class="login-button-container">
              <span class="fas navbar-icon navbar-icon-outer fa-sign-in-alt"></span>
			  Loguj
			</div>
		</li>
	</ul>
	<div v-on:click="resetNavbar" class="click-detector"></div>
	<ul ref="pornSubMenu" :class="pornSubMenuIsVisible ? 'visible-porn-sub-menu' : 'hidden-porn-sub-menu'"  id="porn-sub-menu-list" class="sub-menu-list porn-sub-menu-list">
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
	<div v-show="loginPanelIsVisible" class="login-form-container">
	            <form action="/login" method="POST" id="login-form" class="main-panel-form login-form">
					<header class="login-panel-toolbar">
						<span class="login-info">Zaloguj się do Sex-Imperium</span> 
						<span v-on:click="toggleLoginPanel" title="zamknij okno logowania" aria-label="zamknij okno logowania" class="close-button"></span>
					</header>
					<input v-bind:value="csrfToken" type="hidden" name="_token">
					<label for="login" class="main-panel-label">Email lub nick</label>
					<input type="text" class="main-panel-input" id="login" name="login">
					<label for="password" class="main-panel-label">Hasło</label>
					<input type="password" class="main-panel-input" id="password" name="login">
					<labeled-checkbox>Zapamiętaj mnie</labeled-checkbox>
					<submit-button>Zaloguj</submit-button>
					<a href="/password/reset" class="forgot-password-link">Zapomniałem hasła</a>
				</form>
    </div>
</div>	
</template>

<script>
import LabeledCheckbox from "./labeled_checkbox.vue";
import SubmitButton from "./submit_button.vue";

	export default {
		name: 'navbar',
		components :{
		  LabeledCheckbox,
		  SubmitButton
		},
        props: {
        	authenticatedUser : {
        		type: Boolean,
        		required: true
        	},

        	userID : {
        		type: Number,
        		required: false
        	},

        	registerRoute : {
        		required: false,
        		type: String
			}
        },
         data() {
		 	return {
		 		pornSubMenuIsVisible : false,
				moviesSubMenuIsVisible : false,
				loginPanelIsVisible : false,
				csrfToken : ""
		 	};
 		},

        methods: {
        	hideAllSecondLevelSubMenus()
		   {
		      this.moviesSubMenuIsVisible = false;
		   },

		   togglePornSubMenu()
		   {
		      this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
		      this.anySubMenuIsVisible = !this.anySubMenuIsVisible;
		      this.hideAllSecondLevelSubMenus();
		   },

		   toggleMoviesSubMenu()
		   {
		      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
		   },

		   showPornSubMenu(event)
		   {
		   	 this.pornSubMenuIsVisible = true;
		   	 this.anySubMenuIsVisible = true;
		   	 this.$refs.pornSubMenu.focus();
		   },

		   setElementToFocusState(event)
		   {
               event.target.focus();
		   },

		   resetNavbar()
		   {
		   	  	this.pornSubMenuIsVisible = false;
		   	    this.hideAllSecondLevelSubMenus();
		   },

		   toggleLoginPanel()
		   {
			   this.loginPanelIsVisible = !this.loginPanelIsVisible;
		   }
    
		},
		
		mounted()
		{
           this.csrfToken = document.getElementById("csrf-token").content;
		}
    }
</script>

<style lang="scss">

.submit-button:hover{
	background: #a00e30;
}

.labeled-checkbox-container{
	display: block;
    width: 95%;
    margin: 4px auto 1px auto;
}

.labeled-checkbox-description{
	color:black;
}

.login-info{
	font:{
      size:19px;
	  family:Play;
	  weight:bold;
	}
	color:white;
}

.login-form-container{
	position: fixed;
	background: rgba(0,0,0,0.95);
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	z-index: 999;
}

.login-panel-toolbar{
	border-radius: 5px 5px 0 0;
	background:linear-gradient(to bottom, #464843, #000000);
	padding: 5px;
	display:flex;
	justify-content: space-between;
	align-items: center;
	font-size: 19px;
}

.close-button{
	width: 28px;
    height: 28px;
	display:inline-block;
	cursor:pointer;
	background-image: url("../../../public/images/decoration/icons/navbar/close.svg");	
}

.main-panel-label
{
	display:block;
	text-align:center;
	padding:4px;
	font:{
	  family: "Exo 2", sans-serif;
	  size: 18px;
	}
	color:black;
}

.forgot-password-link
{
	display:block;
	padding:4px;
	text-align:center;
	color:black;
	text-decoration:none;
	font: {
		family:"Exo 2", sans-serif;
		size: 17px;
	}

	&:hover
	{
	  text-decoration: underline;
	}
}

.main-panel-input
{
    background: #302e2e;
    display: block;
    width: 95%;
    background: white;
    margin: 0 auto;
    border-radius: 4px;
    border: 1px solid #5a5555;
    outline: none;
    font-size:18px;
	padding:2px;
    &:focus
    {
    	border: 1px solid #078a07;
    }
}

.login-button-container{
	padding: 6px;
    height: 100%;
}

.login-form{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	background:white;
    border-radius: 5px;
    box-shadow: 3px 3px 3px 3px black;
	min-width:320px;
	font-family: "Exo 2", sans-serif;
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

.click-detector{
	position:absolute;
	z-index:0;
	top:1px;
	width:100%;
	height:100%;
}

.register-selection{
	margin-left: auto;
}

.navigation-element-main{
	transition: background 2s;
	&:hover
	{
		background: #2d2d30;
	}
	cursor:pointer;
	color:white;
	display: inline-block;
    line-height: 100%;
	font:{
	  family: 'Oxanium';  
	  size:1.5vw;
	}
}

.navigation-element-padding{
   padding:6px;
}

.main-page-navigation{
    position: fixed;
    width: 100%;
    top:0;
    z-index:1;
    font-size:0;
    &:focus{
    	outline:none;
    };
}

$border-color: black;

.sub-menu-list{
	position:relative;
	overflow:hidden;
	display:inline-block;
	top:1px;
	max-height:0;
	padding: 0;
    list-style-type: none;
    margin: 0;
    font:{
	  family: 'Oxanium';  
	  size:1.5vw;
	}
	color:white;
	max-width: 30%;
	min-width:150px;
	z-index:1;
    border-radius: 0 0 8px 8px;
}

.porn-sub-menu-list{
	left:1vw;
}

.hidden-porn-sub-menu{
	max-height:0;
	transition:none;
}

.visible-porn-sub-menu{
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
	color:inherit;
	text-decoration:none;
	padding:6px;
	height: 100%;
    display: inline-block;
}


@media (min-width:620px) and (max-width: 1000px)
{
	.navigation-element{
		font-size:2.2vw;
	}
}

@media (max-width: 619px)
{
	.navigation-element{
		font-size:3.9vw;
	}
}
	

</style>