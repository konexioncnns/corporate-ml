@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
    <Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
        Ajouter une formation</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


    <thead>
        <tr>
            <th>N</th>
            <th>image</th>
            <th>Nom complet</th>
            <th>Poste</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      @foreach($teams as $team)
      <tr>
      <td>1</td>
        <td><img src=" {{asset('img/teams/'.$team->image)}}" alt="logo-partner" style="width:60px ;height:60px;"
                                        class="img-circle img-fluid"></td>
        <td>{{$team->fullname}}</td>
        <td>{{$team->poste}}</td>
        <td>{{$team->status}}</td>
        <td>
        <div class="text-right">
                                <a href="/admin/team/edit/{{$team->id}}" class="btn btn-sm bg-teal">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye"></i> 
                                </a> 
                                <a  class="btn btn-sm btn-danger" href='/admin/partner/delete/{{$team->id}}'>
                                <i class="fas fa-trash"></i> 
                                </a>
                            </div>
        </td>
        <td>

        </td>
      </tr>


      @endforeach

    </tbody>
    <tfoot>
        
    </tfoot>
</table>
@endsection