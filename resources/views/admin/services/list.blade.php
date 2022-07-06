@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
    <Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
        Ajouter une formation</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


    <thead>
        <tr>
        <th>N°</th>
        <th>Image </th>
            <th>Titre de service</th>
            <th>Description</th>
            <th>Title of domaine</th>
            <th>Description of service</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      
        @foreach($services as $service)
        <tr>
            <td>{{$service->id}}</td>
            <td> <img src=" {{asset('img/services/'.$service->image1)}}" alt="logo-partner" style="width:60px ;height:60px;"
                                        class="img-circle img-fluid"></td>
            <td>{{$service->title}}</td>
            <td>{{$service->extrait}}</td>
            <td>{{$service->description}}</td>
            <td>{{$service->status}}</td>
           
            <td>

                <div class="text-center">
                    <a href="/admin/service/edit/{{$service->id}}" class="btn btn-sm bg-teal">
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
 @endsection