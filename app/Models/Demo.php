<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    use HasFactory;

    protected $fillable = ['firstname','lastname','email','phone','country','entreprise','country','solution_id','description','status'];
}
