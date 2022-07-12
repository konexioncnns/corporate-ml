<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title'); 
            $table->text('description');
            $table->text('extrait');
            $table->text('add_values')->nullable();
            $table->text('needs')->nullable();
            $table->text('our_service')->nullable();
            $table->text('customer_experiences')->nullable(); 
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();  
            $table->string('image3')->nullable(); 
            $table->string('image4')->nullable();
            $table->string('image5')->nullable();  
            $table->string('status')->default("active"); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
};
