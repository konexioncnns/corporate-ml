@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
    <Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
        Ajouter une formation</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


    <thead>
        <tr>
            <th>Titre du domaine</th>
            <th>Description</th>
            <th>Title of domaine</th>
            <th>Description of domaine</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($domaine as $key => $value )
        <tr>
            <td>{{$value['title']['fr'] }}
            <td>{{$value['description']['fr'] }}
            <td>{{$value['title']['en'] }}</td>
            <td>{{$value['description']['en'] }}</td>

            <td> {{ $value['status']}} </td>
            <td>

                <div class="text-center">
                    <a href="/domaine/edit/{{$value['id']}}" class="btn btn-sm bg-teal">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-primary">
                        <i class="fas fa-eye"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
            </td>

        </tr>

        @endforeach

    </tbody>
    <tfoot>
        <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
        </tr>
    </tfoot>
</table>



<div class="modal fade" id="modal-default">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Ajouter une formation</h4>
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
                            <form action="{{ route('domaine.store') }}" method="post">
                        @csrf

                        <div class="form-group">
                            <label for="title">Titre du domaine</label>
                            <input type="text" class="form-control" name="title" placeholder="Titre du domaine">
                        </div>
                        <div class="form-group">
                            <label for="inputDescription">Description du domaine</label>
                            <textarea name="description" class="form-control" rows="4"></textarea>
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
                        <label for="title">Titre du domaine</label>
                        <input type="text" class="form-control" name="title_en" placeholder="Titre du domaine">
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Description du domaine</label>
                        <textarea name="description_en" class="form-control" rows="4"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="inputClientCompany">Status</label>
                        <select id="status" class="form-control custom-select">
                            <option selected disabled>Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                   <div class="row">
                        <div class="col-md-6">
                          
                            <input type="submit" value="Enregistrer la formation" class="btn btn-success float-right">
                        </div>
                    </div>
                    </form>
                            </div>



                            @endsection