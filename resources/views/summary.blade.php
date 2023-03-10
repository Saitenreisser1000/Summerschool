@extends('layouts.app')

@section('content')
<div class="container">
    <lesson-component></lesson-component>
    <v-btn onclick="location.href='{{ url('lessontable') }}'">Zur Anmeldung</v-btn>
</div>
@endsection