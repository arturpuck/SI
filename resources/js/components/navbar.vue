<template>
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
			<a class="navbar-link-main-manu" :href="loginRoute">
			  <span class="fas navbar-icon navbar-icon-outer fa-sign-in-alt"></span>
			  Loguj
			</a> 
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
</template>

<script>
	export default {
        name: 'navbar',
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
        	},

        	loginRoute : {
        		required: false,
        		type: String
        	}
        },
         data() {
		 	return {
		 		pornSubMenuIsVisible : false,
		 		moviesSubMenuIsVisible : false,
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
		   }
    
        }
    }
</script>

<style lang="scss">

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