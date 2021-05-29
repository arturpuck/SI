<x-base title="{{$title}}" description="{{$description}}">
  <h1 class="category-header category--{{$categoryIdentifier}}">
    <span class="category-header__text">
      {{$displayedCategoryName}}
      <oh-icon class="category-header__icon"></oh-icon>
    </span>
  </h1>
  <x-movies-set :movies="$movies" />
</x-base>