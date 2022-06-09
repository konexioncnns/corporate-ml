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
@endsection