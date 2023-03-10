@extends('layouts.app')

@section('content')
<v-container style="display: flex;
flex-direction: column;
justify-content: center;
align-items: center;">
    <v-btn onclick="location.href='{{ url('lessontable') }}'">Zur Anmeldung</v-btn>
    <lesson-component></lesson-component>
</v-container>
@endsection