@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
    <Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
        Ajouter un slider</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


    <thead>
        <tr>
            <th>Image</th>
            <th>Titre du slider</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($sliders as $slider )
        <tr>
            <td>
                <img src=" {{asset('img/sliders/'.$slider->image)}}" alt="user-avatar" width="120" height="80">
            </td>
            <td>{{$slider->title }}</td>

            <td>{{$slider->description}}</td>

            <td> {{$slider->status}} </td>
            <td>

                <div class="text-center">
                    <a href="/admin/slider/edit/{{$slider->id}}" class="btn btn-sm bg-teal">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-primary">
                        <i class="fas fa-eye"></i>
                    </a>
                    <a href="/admin/slider/delete/{{$slider->id}}" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
            </td>

        </tr>

        @endforeach

    </tbody>
    <tfoot>

    </tfoot>
</table>




<div class="modal fade" id="modal-default">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Ajouter un slider</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <section class="modal-body">
                <!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col">
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">Français</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"
                                        title="Collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                            <form action="{{ route('slider.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="title">Titre du slider</label>
                            <input type="text" class="form-control" name="title" placeholder="Slide title">
                        </div>
                        <div class="form-group">
                            <label for="inputDescription">Description du slider</label>
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



                            @endsection