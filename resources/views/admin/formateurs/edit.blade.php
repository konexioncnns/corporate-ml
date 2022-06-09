@extends('layouts.master')
@section('content')
<div class="col-md-8">
    <div class="card card-danger">
        <div class="card-header">
            <h3 class="card-title justify-content-center">Remplissez le formulaire</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
        <div class="card-body">
            <form action="{{route('formateur.update')}}" method="post" enctype="multipart/form-data">
            @csrf
                    <input type="hidden" name="id" value="{{$formateur->id}}"/>
                <div class="row d-flex justify-content-between">
                    <div class="form-group">
                        <label for="title">Nom</label>
                        <input type="text" class="form-control"  value="{{$formateur->firstname}}" name="firstname" placeholder="Nom formateur">
                    </div>
                    <div class="form-group">
                        <label for="title">Prénom</label>
                        <input type="text" class="form-control" value="{{$formateur->lastname}}" name="lastname" placeholder="Prénom formateur">
                    </div>
                </div>
                
                <div class="form-group">
                        <label for="title">Telephone</label>
                        <input type="text" class="form-control" value="{{$formateur->phone}}" name="phone" placeholder="Prénom formateur">
                    </div>
                    <div class="form-group">
                        <label for="title">Email adresse</label>
                        <input type="text" class="form-control" value="{{$formateur->email}}" name="email" placeholder="Adresse Email ">
                    </div>
               
                    <div class="row d-flex justify-content-between">
                <div class="form-group justify-content-center>
               <label for=" genre">Genre</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Homme" name="gender" />
                        <label class="form-check-label">Homme</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Femme" name="gender">
                        <label class="form-check-label">Femme</label>
                    </div>
                </div>
                <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control" value={{$formateur->image}} name="image" >
                    </div>

                </div>

                <div class="form-group">
                    <label for="inputProjectLeader">Date de naissance</label>
                    <input type="date" value="{{$formateur->dateofbirth}}" name="dateofbirth" class="form-control">
                </div>
                 
                <div class="row d-flex justify-content-between">
                    <div class="form-group">
                        <label for="inputStatus">Spécialité</label>
                        @foreach($specialites as $specialite)
                        <select name="specialite_id" value="{{$formateur->specialite_id}}"  class="form-control custom-select">
                            <option>Selectionner une specialite</option>

                            <option value="{{$specialite->id}}">{{$specialite->title}}</option>

                        </select>
                        @endforeach
                    </div>
                    
                    <div class="form-group">
                        <label for="inputClientCompany">Status</label>
                        <select id="status" class="form-control custom-select">
                            <option selected disabled>Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputProjectLeader">Adresse</label>
                    <input type="text" value="{{$formateur->adresse}}" name="adresse" class="form-control">
                </div>
                <div class="form-group">
                    <label for="inputDescription">Biographie</label>
                    <textarea name="biography"  value="{{$formateur->biography}}" class="form-control" rows="4"></textarea>
                </div>

              <!--   <div class="form-group">
                    <label for="inputDescription">Biography</label>
                    <textarea name="biography_en" class="form-control" rows="4">
                   
                    </textarea>
                </div> -->


                <div class="row  d-flex justify-content-around">

                    <a href="#" class="btn btn-danger">Cancel</a>
                    <input type="submit" value="Enregistrer" class="btn btn-success float-right">

                </div>
            </form>
        </div>
        <script>
        ClassicEditor
            .create(document.querySelector('#detail'))
            .catch(error => {
                console.error(error);
            });
        </script>
        @endsection