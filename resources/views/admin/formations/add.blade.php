@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Ajouter une formation</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Ajouter une formation</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-md-6">
            <div class="card card-danger">
                <div class="card-header">
                    <h3 class="card-title">Français</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="title">Titre de la formation</label>
                            <input type="text" class="form-control" name="title" placeholder="Titre de la formation">
                        </div>
                        <div class="form-group">
                            <label for="inputDescription">Description de la formation</label>
                            <textarea name="description" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="title">Objectif de la formation</label>
                            <textarea id="objectif" name="objectif" class="form-control" rows="20" cols="5">

                      </textarea>
                        </div>
                        <div class="row d-flex justify-content-around">
                            <div class="form-group">
                                <label for="domaine">Domaine</label>

                                <select name="domaine_id" class="form-control custom-select">
                                    <option>Selectionner un domaine</option>
                                    @foreach($domaines as $domaine)
                                    <option value="{{$domaine->id}}">{{$domaine->title}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <div class="form-group">
                                <label for="inputClientCompany">Formateur</label>

                                <select name="formateur_id" class="form-control custom-select">
                                    <option>Selectionner un formateur</option>
                                    @foreach($formateurs as $formateur)

                                    <option value="{{$formateur->id}}">{{$formateur->firstname}}
                                        {{$formateur->lastname}}</option>
                                    @endforeach
                                </select>

                            </div>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="inputProjectLeader">Prix en cfa</label>
                                <input type="number" name="price" class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="inputEstimatedBudget">Dure</label>
                                <input type="text" id="time" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="inputEstimatedDuration">Langue</label>
                                <select class="form-control">
                                    <option>Français</option>
                                    <option>Anglais</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="title">Programme de la formation</label>
                            <textarea id="programme" name="programme" class="form-control" rows="20" cols="5">

                      </textarea>
                        </div>
                        <div class="form-group">
                            <label for="inputEstimatedDuration">public(pour qui)</label>
                            <textarea id="public" id="public" class="form-control" rows="2">

                         </textarea>
                        </div>
                        <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control" name="image" >
                    </div>


                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <div class="col-md-6">
            <div class="card card-danger">
                <div class="card-header">
                    <h3 class="card-title">Anglais</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">

                    <div class="form-group">
                        <label for="title">Titre de la formation</label>
                        <input type="text" class="form-control" name="title_en" placeholder="Titre de la formation">
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Description de la formation</label>
                        <textarea name="description_en" class="form-control" rows="4"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Objectif de la formation</label>
                        <textarea id="objectif_en" name="objectif_en" class="form-control" rows="20" cols="5">

                      </textarea>
                    </div>



                    <div class="form-group">
                        <label for="title">Programme de la formation</label>
                        <textarea id="programme_en" name="programme_en" class="form-control" rows="20" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputEstimatedDuration">public(pour qui)</label>
                        <textarea id="public_en" name="public_en" class="form-control" rows="2">

                         </textarea>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <a href="#" class="btn btn-secondary">Cancel</a>
                            <input type="submit" value="Enregistrer la formation" class="btn btn-success float-right">
                        </div>
                    </div>
                    </form>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>

</section>
<!-- /.content -->
<script>
ClassicEditor
    .create(document.querySelector('#objectif'))
    .catch(error => {
        console.error(error);
    });
ClassicEditor
    .create(document.querySelector('#programme'))
    .catch(error => {
        console.error(error);
    });
ClassicEditor
    .create(document.querySelector('#public'))
    .catch(error => {
        console.error(error);
    });






ClassicEditor
    .create(document.querySelector('#objectif_en'))
    .catch(error => {
        console.error(error);
    });
ClassicEditor
    .create(document.querySelector('#programme_en'))
    .catch(error => {
        console.error(error);
    });
ClassicEditor
    .create(document.querySelector('#public_en'))
    .catch(error => {
        console.error(error);
    });
</script>
@endsection