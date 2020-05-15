<nav id="navbar" class="main-page-navigation">
		<ul class="navigation-list">
            <li v-on:click="showPornMenu" class="navigation-element">
            	<span class="fas navbar-icon fa-camera-retro"></span>Porno
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
		<div class="sub-menu-container">
			<ul id="porn-sub-menu-list" class="sub-menu-list">
				 <li class="sub-menu-list-element">
				    <span class="fas navbar-icon fa-film"></span>Filmy
			     </li>
				<li class="sub-menu-list-element">
				   <span class="fas navbar-icon fa-star"></span>Gwiazdy porno
			    </li>
			    <li class="sub-menu-list-element">
				   <span class="fas navbar-icon fa-search"></span>Wyszukiwanie zaawansowane
			    </li>
			</ul>
		</div>
</nav>