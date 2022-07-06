@extends('layouts.master')
@section('content')
<div class="col-md-12 d-flex justify-content-between">
    <Button type="button" class="btn btn-success mb-2" data-toggle="modal" data-target="#modal-default">
        Ajouter un partenaire</Button>

</div>




<table id="example2" class="table table-bordered table-hover">


    <thead>
        <tr>
            <th>N</th>
            <th>Logo</th>
            <th>Nom du partenaire</th>
            <th>description du partenaire</th>
            <th>Status</th>

            
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      @foreach($partners as $partner)
      <tr>
        <td>{{$partner->id}}</td>
        <td> <img src=" {{asset('img/partners/'.$partner->logo)}}" alt="logo-partner" style="width:60px ;height:60px;"
                                        class="img-circle img-fluid"></td>
      <td>{{$partner->name}}</td>
      <td>Description {{$partner->name}}</td>
      <td>{{$partner->status}}</td>
      <td>
      <div class="text-right">
                                <a href="/admin/partner/edit/{{$partner->id}}" class="btn btn-sm bg-teal">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye"></i> 
                                </a> 
                                <a  class="btn btn-sm btn-danger" href='/admin/partner/delete/{{$partner->id}}'>
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
@endsection