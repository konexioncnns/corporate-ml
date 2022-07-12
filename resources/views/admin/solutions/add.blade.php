@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Ajouter un solution</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Ajouter un solution</li>
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
                    <form action="{{ route('solution.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" name="title" placeholder="title de la solution">
                            </div>


                        </div>
                        <div class="form-group">
                            <label for="extrait">Extrait</label>
                            <input type="text" class="form-control" name="extrait" placeholder="title de la solution">
                        </div>
                        <div class="form-group">
                            <label for="title">Description de la solution</label>
                            <textarea id="description" name="description" class="form-control" rows="8" cols="5">

                      </textarea>
                        </div>
                        <div class="form-group">
                        <label for="title">Vos Besoins</label>
                        <textarea id="needs" name="needs" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Valeur ajoutées</label>
                        <textarea id="add_values" name="add_values" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Notre solution</label>
                        <textarea id="our_solution" name="our_solution" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Experiences client</label>
                        <textarea id="customer_experiences" name="customer_experiences" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image1">Image 1</label>
                                <input type="file" class="form-control" name="image1">
                            </div>
                            <div class="form-group">
                                <label for="image2">Image 2</label>
                                <input type="file" class="form-control" name="image2">
                            </div>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image3">Image 3</label>
                                <input type="file" class="form-control" name="image3">
                            </div>
                            <div class="form-group">
                                <label for="image4">Image 4</label>
                                <input type="file" class="form-control" name="image4">
                            </div>
                            <div class="form-group">
                                <label for="image5">Image 5</label>
                                <input type="file" class="form-control" name="image5">
                            </div>
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

                    <div class="row d-flex justify-content-between">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" name="title_en" placeholder="title of solution">
                        </div>


                    </div>
                    <div class="form-group">
                        <label for="extrait">Extrait</label>
                        <input type="text" class="form-control" name="extrait_en" placeholder="extrait of solution">
                    </div>
                    <div class="form-group">
                        <label for="title">Description de la solution</label>
                        <textarea id="description_en" name="description_en" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>

                    <div class="form-group">
                        <label for="title">Needs of solutions</label>
                        <textarea id="needs_en" name="needs_en" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Add values</label>
                        <textarea id="add_values_en" name="add_values_en" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Our solution</label>
                        <textarea id="our_solution_en" name="our_solution_en" class="form-control" rows="8" cols="5">

                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Customer experiences</label>
                        <textarea id="customer_experiences_en" name="customer_experiences_en" class="form-control" rows="8" cols="5">

                      </textarea>
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

<script>
    ClassicEditor
        .create(document.querySelector('#description'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#needs'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#add_values'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#our_solution'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#customer_experiences'))
            .catch(error => {
                console.error(error);
            });

    ClassicEditor
        .create(document.querySelector('#description_en'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#needs_en'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#add_values_en'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#our_solution_en'))
            .catch(error => {
                console.error(error);
            });
            ClassicEditor
        .create(document.querySelector('#customer_experiences_en'))
            .catch(error => {
                console.error(error);
            });
</script>
@endsection