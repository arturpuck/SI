<nav class="page-navigation">
		<ul class="navigation-list">
          @foreach($navigationItems as $navigationItem)
            <li class="navigation-element"><a class="navigation-link" href="/{{$navigationItem[1]}}">{{$navigationItem[0]}}</a></li>
          @endforeach
		</ul>
</nav>