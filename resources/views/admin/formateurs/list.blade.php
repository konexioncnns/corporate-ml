@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Liste des formateurs</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Formateurs</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>
<section class="content d-flex">
    <div class="card card-solid">
        <div class="card-body pb-0">
            <div class="row">
                @foreach($formateurs as $formateur)
                <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">

                        <div class="card-header text-muted border-bottom-0">
                            Digital Strategist
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="lead"><b>{{$formateur->firstname}} {{$formateur->lastname}}</b></h2>
                                    <p class="text-muted text-sm"><b>About: </b> {{$formateur->biography}} </p>
                                    <ul class="ml-4 mb-0 fa-ul text-muted">
                                        <li class="small"><span class="fa-li"><i
                                                    class="fas fa-lg fa-building"></i></span> Address:
                                            {{$formateur->adresse}}</li>
                                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                            Phone #: {{$formateur->phone}}</li>
                                    </ul>
                                </div>
                                <div class="col-5 text-center">
            <img src=" {{asset('img/'.$formateur->image)}}" alt="user-avatar" class="img-circle img-fluid">

                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="text-right">
                                <a href="/admin/formateur/edit/{{$formateur->id}}" class="btn btn-sm bg-teal">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye"></i> 
                                </a> 
                                <a  class="btn btn-sm btn-danger" href='/admin/formateur/delete/{{$formateur->id}}'>
                                <i class="fas fa-trash"></i> 
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                @endforeach
            </div>
        </div>
    </div>
</section>
@endsection