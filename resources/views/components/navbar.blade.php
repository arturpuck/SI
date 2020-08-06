<nav id="navbar" class="main-page-navigation">
		<ul class="navigation-list">
            <li v-on:click="togglePornSubMenu" class="navigation-element">
            	<span v-show="!pornSubMenuIsVisible" class="fas navbar-icon fa-camera-retro"></span>
            	<span v-show="pornSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-arrow-up"></span>
            	Porno
            </li>
            <li class="navigation-element">
                <span class="fas navbar-icon fa-users"></span>Spotkania
            </li>
            @if(Auth::check())

            @else
              <li class="navigation-element register-selection">
                 <span class="fas navbar-icon fa-user-plus"></span>Rejestruj
              </li>
              <li class="navigation-element">
                 <span class="fas navbar-icon fa-sign-in-alt"></span>Loguj
              </li>
            @endif
		</ul>
		<ul :class="pornSubMenuIsVisible ? 'visible-porn-sub-menu' : 'hidden-porn-sub-menu'" id="porn-sub-menu-list" class="sub-menu-list">
			<li v-on:click="toggleMoviesSubMenu" class="sub-menu-list-element intendation-first-level">
				 <div class="sub-menu-level-one-item">
				 	<span v-show="!moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-film"></span>
				 	<span v-show="moviesSubMenuIsVisible" class="fas navbar-icon navbar-icon-sub-menu fa-arrow-up"></span>
				     Filmy
				 </div>
				 <ul class="sub-menu-list-nested-level-two" :class="moviesSubMenuIsVisible && pornSubMenuIsVisible ? 'visible-movies-sub-menu' : 'hidden-movies-sub-menu'">
				       	<li class="sub-menu-list-element-intendation-second-level">
				           <span class="fas navbar-icon navbar-icon-sub-menu fa-search"></span>Wyszukiwanie zaawansowane
			            </li>
			            <li class="sub-menu-list-element-intendation-second-level">
				           <span class="fas navbar-icon navbar-icon-sub-menu fa-images"></span>Kategorie
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