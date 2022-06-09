@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Ajouter un slider</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Ajouter un slider</li>
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
                    <form action="{{ route('slider.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="title">Titre du domaine</label>
                            <input type="text" class="form-control" name="title" placeholder="Slide title">
                        </div>
                        <div class="form-group">
                            <label for="inputDescription">Description du domaine</label>
                            <textarea name="description" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="inputStatus">Categorie slider</label>

                            <select name="type" class="form-control custom-select">
                                <option>Selectionner une categorie</option>

                                <option value="homepage">Principal</option>
                                <option value="formationpage">Slider pour la formation</option>

                            </select>

                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control" name="image">
                        </div>
                        <div class="row  d-flex justify-content-around">

                            <a href="#" class="btn btn-danger">Cancel</a>
                            <input type="submit" value="Enregistrer" class="btn btn-success float-right">

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

@endsection