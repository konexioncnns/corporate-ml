@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Mettre a jour un service</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Mettre a jour un service</li>
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
                    <form action="{{ route('service.update') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$service->id}}"/>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control"value="{{$serv['title']['fr']}}" name="title">
                            </div>


                        </div>
                        <div class="form-group">
                            <label for="extrait">Extrait</label>
                            <input type="text" class="form-control"  value="{{$serv['extrait']['fr']}}" name="extrait">
                        </div>
                        <div class="form-group">
                            <label for="title">Description de la solution</label>
                            <textarea id="description" name="description"   class="form-control" rows="8" cols="5">
                            {{$serv['description']['fr']}}

                      </textarea>
                        </div>
                        <div class="form-group">
                        <label for="title">Vos Besoins</label>
                        <textarea id="needs" name="needs" class="form-control" rows="8" cols="5">
                        {{$serv['needs']['fr']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Valeur ajoutées</label>
                        <textarea id="add_values" name="add_values" class="form-control" rows="8" cols="5">
                        {{$serv['add_values']['fr']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Notre solution</label>
                        <textarea id="our_service" name="our_service" class="form-control" rows="8" cols="5">
                        {{$serv['our_service']['fr']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Experiences client</label>
                        <textarea id="customer_experiences" name="customer_experiences" class="form-control" rows="8" cols="5">
                        {{$serv['customer_experiences']['fr']}}
                      </textarea>
                    </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image1">Image 1</label>
                                <input type="file" class="form-control" name="image1">
                                <img style="width:60px ;height:60px;" src=" {{asset('img/services/'.$service->image1)}}" alt="user-avatar"
                                        class="img-circle img-fluid">
                            </div>
                            <div class="form-group">
                                <label for="image2">Image 2</label>
                                <input type="file" class="form-control" name="image2">
                                <img style="width:60px ;height:60px;" src=" {{asset('img/services/'.$service->image2)}}" alt="user-avatar"
                                        class="img-circle img-fluid">
                            </div>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image3">Image 3</label>
                                <input type="file" class="form-control" name="image3">
                                <img style="width:60px ;height:60px;" src=" {{asset('img/services/'.$service->image3)}}" alt="user-avatar"
                                        class="img-circle img-fluid">
                            </div>
                            <div class="form-group">
                                <label for="image4">Image 4</label>
                                <input type="file" class="form-control" name="image4">
                                <img style="width:60px ;height:60px;" src=" {{asset('img/services/'.$service->image4)}}" alt="user-avatar"
                                        class="img-circle img-fluid">
                            </div>
                            <div class="form-group">
                                <label for="image5">Image 5</label>
                                <input type="file" class="form-control" name="image5">
                                <img style="width:60px ;height:60px;" src=" {{asset('img/services/'.$service->image5)}}" alt="user-avatar"
                                        class="img-circle img-fluid">
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
                            <input type="text" class="form-control" name="title_en" value="{{$serv['title']['en']}}">
                        </div>


                    </div>
                    <div class="form-group">
                        <label for="extrait">Extrait</label>
                        <input type="text" class="form-control" name="extrait_en" value="{{$serv['extrait']['en']}}">
                    </div>
                    <div class="form-group">
                        <label for="title">Description de la solution</label>
                        <textarea id="description_en" name="description_en" class="form-control" rows="8" cols="5">
                        {{$serv['description']['en']}}
                      </textarea>
                    </div>

                    <div class="form-group">
                        <label for="title">Needs of services</label>
                        <textarea id="needs_en" name="needs_en" class="form-control" rows="8" cols="5">
                        {{$serv['needs']['en']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Add values</label>
                        <textarea id="add_values_en" name="add_values_en" class="form-control" rows="8" cols="5">
                        {{$serv['add_values']['en']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Our solution</label>
                        <textarea id="our_service_en" name="our_service_en" class="form-control" rows="8" cols="5">
                        {{$serv['our_service']['en']}}
                      </textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Customer experiences</label>
                        <textarea id="customer_experiences_en" name="customer_experiences_en" class="form-control" rows="8" cols="5">
                        {{$serv['customer_experiences']['en']}}
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
        .create(document.querySelector('#our_service'))
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
        .create(document.querySelector('#our_service_en'))
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