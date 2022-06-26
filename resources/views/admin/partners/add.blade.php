@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Ajouter un partenaire</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Ajouter un partenaire</li>
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
                    <form action="{{ route('partner.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="name">Nom du partenaire</label>
                                <input type="text" class="form-control" name="name" placeholder="partenaire name">
                            </div>


                        </div>
                            <div class="form-group">
                                <label for="image">Logo </label>
                                <input type="file" class="form-control" name="logo">
                            </div>
                            
                            <div class="form-group">
                        <label for="inputClientCompany">Status</label>
                        <select id="status" name="status" class="form-control custom-select">
                            <option selected disabled>Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
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
    

    
</script>
@endsection