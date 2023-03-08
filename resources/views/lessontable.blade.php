@extends('layouts.app')

@section('content')
<div class="container">
    <automated-component></automated-component>
    <v-btn onclick="location.href='{{ url('/') }}'">zur Kursübersicht</v-btn>
</div>
@endsection
