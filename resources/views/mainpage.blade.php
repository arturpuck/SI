@extends('layouts.base')

@section('title')
  Sex-Imperium strona główna
@endsection

@section('file-with-styles')
 {{asset('css/mainpage.css')}}
@endsection

@section('scripts')
<script src="{{asset('js/mainpage.js')}}"></script> 
@endsection