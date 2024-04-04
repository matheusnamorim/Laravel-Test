<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('livros', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'titulo')->nullable(false);
            $table->unsignedBigInteger('autor_id')->nullable(false);
            $table->foreign('autor_id')->on('autores')->references('id');
            $table->string(column: 'genero')->nullable(false);
            $table->string(column: 'sinopse')->nullable(false);
            $table->string(column: 'capa')->nullable(false);
            $table->year(column: 'ano_publicacao')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livros');
    }
};
