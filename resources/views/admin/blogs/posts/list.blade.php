@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
<Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
    Ajouter un article</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


                  <thead>
                  <tr> 
                    <th>Titre de article</th>
                    <th>Description</th> 
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    @foreach($posts  as $key => $value )
                  <tr>
                  <td>{{$value['title']['fr'] }}
                  <td>{{$value['description']['fr'] }}
                   
                    <td> {{ $value['status']}}  </td>
                    <td> 
                    

                      <div class="text-right">
                                <a href="/admin/post/edit/{{$value['id']}}" class="btn btn-sm bg-teal">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye"></i> 
                                </a> 
                                <a  class="btn btn-sm btn-danger" href="/admin/post/delete/{{$value['id']}}">
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
              <h4 class="modal-title">Ajouter une formation</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> 
            
<section  class="modal-body">
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
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <form>
            <div class="form-group">
                    <label for="title">Titre de la formation</label>
                    <input type="text" class="form-control" id="title" placeholder="Titre de la formation">
                  </div>
              <div class="form-group">
                <label for="inputDescription">Description de la formation</label>
                <textarea id="inputDescription" class="form-control" rows="4"></textarea>
              </div>
              
              <div class="form-group">
                <label for="inputStatus">Categorie</label>
                <select id="inputStatus" class="form-control custom-select">
                  <option selected disabled>Selectionner une categorie</option>
                  <option>Securite de l'information</option>
                  <option>Gouvernance et gestion ti</option>
                  <option>Gestion de projet</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputClientCompany">Formateur</label>
                <select id="inputStatus" class="form-control custom-select">
                  <option selected disabled>Selectionner une categorie</option>
                  <option>Tiémoko sidibé</option>
                  <option>Lassine keita</option>
                  <option>Kais</option>
                </select>
              </div>
              <div class="row d-flex justify-content-around">
              <div class="form-group">
                <label for="inputProjectLeader">Prix en cfa</label>
                <input type="number" id="inputProjectLeader" class="form-control">
              </div>
              <div class="form-group ml-2">
                <label for="inputProjectLeader">Prix en dollar</label>
                <input type="number" id="dollar_price" class="form-control">
              </div>
</div>
<div class="row  d-flex justify-content-around">
        
          <a href="#" class="btn btn-secondary">Cancel</a>
          <input type="submit" value="Create new Project" class="btn btn-success float-right">
       
      </div>
</form>
</div> 
 

                
                @endsection