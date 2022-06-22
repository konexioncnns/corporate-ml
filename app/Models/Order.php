<?php

namespace App\Models;

use App\Models\Orderitems;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    protected $fillable=[
            'user_id',
            'order_number',  
             'payment_id',
             'price',
            'payment_methode',
            'status',
    ];


    public function userOrders(){
        return $this->belongsTo(User::class);
    }

    public function orders()
  {
   return $this->hasMany(Orderitems::class);
   }
}