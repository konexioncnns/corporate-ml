@extends('layouts.master')
@section('content')
  <!-- Content Wrapper. Contains page content -->
  
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Ajouter une formation</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Blank Page</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Title</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          
         
        <form>
                <div class="card-body col-md-6">
                  

                <div class="form-group">
                    <label for="title">Titre de la formation</label>
                    <input type="text" class="form-control" id="title" placeholder="Titre de la formation">
                  </div>

            
                  <div class="form-group">
                  <label for="title">Description de la formation</label>
                        <textarea id="objectif" rows="4" cols="50">
                         Place <em>some</em> <u>text</u> <strong>here</strong>
                      </textarea>
                 </div>
                 
                 <div class="form-group">
                  <label for="title">Programme de la formation</label>
                        <textarea id="programme" rows="4" cols="50">
                        
                      </textarea>
                 </div>
                 <div class="form-group">
                  <label for="title">Prérequis de la formation</label>
                        <textarea id="public" rows="4" cols="50">
                        
                      </textarea>
                 </div>
                 
                   
                  <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
       


        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          Footer
        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
 
  <!-- /.content-wrapper -->
  <script>
  $(function () {
    // Summernote
    $('#summernote').summernote()

    // CodeMirror
    CodeMirror.fromTextArea(document.getElementById("codeMirrorDemo"), {
      mode: "htmlmixed",
      theme: "monokai"
    });
  })
</script>
<script>
        ClassicEditor
            .create( document.querySelector( '#objectif' ) )
            .catch( error => {
                console.error( error );
            } );
            ClassicEditor
            .create( document.querySelector( '#programme' ) )
            .catch( error => {
                console.error( error );
            } );
            ClassicEditor
            .create( document.querySelector( '#public' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>
@endsection