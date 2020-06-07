<template>
<nav id="navbar" v-on:mouseleave="resetAll" class="main-page-navigation">
	<ul class="navigation-list">
		<li v-on:click="togglePornSubMenu" v-on:mouseover="showPornSubMenu" class="navigation-element">
			<span v-show="!pornSubMenuIsVisible" class="fas navbar-icon fa-camera-retro"></span>
			<span v-show="pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-arrow-up"></span>
            	Porno
            
		</li>
		<li class="navigation-element">
			<span class="fas navbar-icon fa-users"></span>Spotkania
            
		</li>
		<li class="navigation-element register-selection">
			<span class="fas navbar-icon fa-user-plus"></span>Rejestruj
              
		</li>
		<li class="navigation-element">
			<span class="fas navbar-icon fa-sign-in-alt"></span>Loguj
              
		</li>
	</ul>
	<ul :class="[pornSubMenuIsVisible ? 'visible-porn-sub-menu' : 'hidden-porn-sub-menu',  pornSubMenuHasShadow ?  'sub-menu-with-shadow' : 'sub-menu-no-shadow']" id="porn-sub-menu-list" class="sub-menu-list porn-sub-menu-list">
		<li class="sub-menu-list-element intendation-first-level">
			<div v-on:click="toggleMoviesSubMenu" class="sub-menu-level-one-item">
				<span v-show="!moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-film"></span>
				<span v-show="moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-arrow-up"></span>
				     Filmy
			</div>
		</li>
		<li>
			<ul class="sub-menu-list-nested-level-two" :class="moviesSubMenuIsVisible && pornSubMenuIsVisible ? 'visible-movies-sub-menu' : 'hidden-movies-sub-menu'">
					
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-sub-menu fa-images"></span>
						Kategorie
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-sub-menu fa-folder-plus"></span>
						Najnowsze
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-sub-menu fa-grin"></span>
						Najpopularniejsze
					</li>
					<li class="sub-menu-list-element-intendation-second-level">
						<span class="fas navbar-icon navbar-icon-sub-menu fa-search"></span>
						Wyszukiwanie zaawansowane
					</li>
			  </ul>
			  </li>
			  <li class="sub-menu-list-element intendation-first-level">
					<div class="sub-menu-level-one-item">
						<span class="fas navbar-icon navbar-icon-sub-menu fa-star"></span>
					 Gwiazdy porno
			     
					</div>
			    </li>
		</ul>
	</nav>	
</template>

<script>
	export default {
        name: 'navbar',
        props: [ 'userIsLogedIn', 'userID'],
         data() {
		 	return {
		 		pornSubMenuIsVisible : false,
		 		moviesSubMenuIsVisible : false,
		 		pornSubMenuHasShadow : false
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
		      this.hideAllSecondLevelSubMenus();

		      if(this.pornSubMenuIsVisible)
		      {
		      	 this.pornSubMenuHasShadow = true;
		      }
		      else
		      {
		      	setTimeout(() => this.pornSubMenuHasShadow = false,1400);
		      }
		   },

		   toggleMoviesSubMenu()
		   {
		      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
		   },

		   showPornSubMenu()
		   {
		   	 this.pornSubMenuIsVisible = true;
		   	 this.pornSubMenuHasShadow = true;
		   },

		   resetAll()
		   {
		   	  this.pornSubMenuIsVisible = false;
		   	  this.hideAllSecondLevelSubMenus();
		   	  setTimeout(() => {
                this.pornSubMenuHasShadow = false;
		      },1400);
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

.register-selection{
	margin-left: auto;
}

.navigation-element{
	transition: background 2s;
	&:hover
	{
		background: #2d2d30;
	}
	cursor:pointer;
	color:white;
	display: inline-block;
    line-height: 100%;
    padding:6px;
	font:{
	  family: 'Oxanium';  
	  size:1.5vw;
	}
}

.main-page-navigation{
    position: fixed;
    width: 100%;
    top:0;
    z-index:1;
    font-size:0;
}

$border-color: black;

.sub-menu-list{
	position:relative;
	overflow:hidden;
	display:inline-block;
	top:1px;
	max-height:0;
	transition: max-height 1.5s;
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
}

.visible-porn-sub-menu{
	max-height:1500px;
}

.sub-menu-no-shadow{
	box-shadow:none;
}

.sub-menu-with-shadow{
   box-shadow: 2px 2px 4px 3px black;
}

.sub-menu-list-element
{
  background: #202120;
  background:linear-gradient(to right,#0a0a0a, #2e2e2d);
  border-bottom: 1px solid $border-color;
  cursor:pointer;
}

.sub-menu-list-nested-level-two{
	list-style-type: none;
	overflow:hidden;
	padding:0;
	transition: max-height 1.5s;
}

.sub-menu-list-element-intendation-second-level{
	padding:5px 2px 5px 2vw;
	border-bottom:1px solid black;
	background: linear-gradient(to right, #2b2a2a, #4c4c52);
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
	color:#eb091c
}

.navbar-icon-sub-menu{
	transition: color 1s;
}

.sub-menu-level-one-item:hover .navbar-icon-sub-menu, .sub-menu-list-element-intendation-second-level:hover .navbar-icon-sub-menu
{
	color: #27ba11;
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