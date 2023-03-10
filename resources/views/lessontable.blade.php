@extends('layouts.app')

@section('content')
<v-container style="display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;">
    <v-btn onclick="location.href='{{ url('/') }}'">zur Kursübersicht</v-btn>
</v-container>
<div class="container">
    <lessontable-component></lessontable-component>
    <br>
    <formular-component></formular-component>
</div>
@endsection
