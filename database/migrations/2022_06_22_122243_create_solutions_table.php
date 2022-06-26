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
        Schema::create('solutions', function (Blueprint $table) {
            $table->id();
            $table->string('title'); 
            $table->string('extrait'); 
            $table->text('description');
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();  
            $table->string('image3')->nullable(); 
            $table->string('image4')->nullable();
            $table->string('image5')->nullable();  
            $table->string('status')->default("Active"); 
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
        Schema::dropIfExists('solutions');
    }
};
