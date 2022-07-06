@extends('layouts.master')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Modifier un membre de l'equipe</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Modifier un membre de l'equipe</li>
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
                    <form action="{{ route('team.update') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$team->id}}"/>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="title">Nom complet</label>
                                <input type="text" class="form-control" name="fullname" value="{{$team->fullname}}">
                            </div>


                        </div>
                        <div class="form-group">
                            <label for="extrait">Poste</label>
                            <input type="text" class="form-control" name="poste"  value="{{$teamm['poste']['fr']}}">
                        </div>
                        <div class="form-group">
                            <label for="extrait">Email</label>
                            <input type="email" class="form-control" name="email"  value="{{$team->email}}">
                        </div>
                        <div class="form-group">
                            <label for="extrait">Phone</label>
                            <input type="text" class="form-control" name="phone"  value="{{$team->phone}}">
                        </div>
                        <div class="form-group">
                            <label for="extrait">Bio</label>
                            <input type="text" class="form-control" name="bio" value="{{$team->bio}}">
                        </div>
                      
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image">Image </label>
                                <input type="file" class="form-control" name="image">
                            </div>
                            <img src=" {{asset('img/teams/'.$team->image)}}" alt="logo-partner" style="width:60px ;height:60px;"
                                        class="img-circle img-fluid">
                            
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group">
                                <label for="image3">Social 1</label>
                                <input type="text" class="form-control" name="social1" value="{{$team->social1}}">
                            </div>
                            <div class="form-group">
                                <label for="image4">Social 2</label>
                                <input type="text" class="form-control" name="social2" value="{{$team->social2}}">
                            </div>
                            <div class="form-group">
                                <label for="image5">Social 3</label>
                                <input type="text" class="form-control" name="social3" value="{{$team->social3}}">
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

                    
                        <div class="form-group">
                            <label for="title">Occupation</label>
                            <input type="text" class="form-control" name="poste_en"  value="{{$teamm['poste']['en']}}">
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