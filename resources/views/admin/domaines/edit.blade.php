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
                <div  class="card-body">
                    <form action="/domaine/update" method="post">
                    
                   @csrf 
                    <input type="hidden" name="id" value="{{$domaine['id']}}"/>
                        <div class="form-group">
                            <label for="title">Titre du domaine</label>
                            <input type="text"  value="{{   $domaine['title']['fr']  }}" class="form-control" name="title" placeholder="Titre du domaine">
                        </div>
                       
                        <div class="form-group">
                            <label for="inputDescription">Description du domaine</label>
                            <textarea name="description"  class="form-control" rows="4">
                            {{  $domaine['description']['fr'] }}
                            </textarea>
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
                        <input type="text" class="form-control" value="{{ $domaine['title']['en'] }}" name="title_en" placeholder="Titre du domaine">
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Description du domaine</label>
                        <textarea name="description_en" class="form-control" rows="4">
                        {{  $domaine['description']['en'] }}
                        </textarea>
                    </div>

                   <div class="row">
                        <div class="col-md-6">
                          
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

@endsection