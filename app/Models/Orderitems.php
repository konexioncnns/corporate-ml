<?php

namespace App\Models;

use App\Models\Order;
use App\Models\Formation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Orderitems extends Model
{
    use HasFactory;
    protected $fillable= [
        'order_number',
        'formation_id',
        'qty',
        'price',
    ];
    protected $with =['order','formation'];
    public function order(){
        return $this->belongsTo(Order::class,'order_number','order_number');
    }

    public function formation(){
        return $this->hasOne(Formation::class,'id','formation_id');
    }

   
}
