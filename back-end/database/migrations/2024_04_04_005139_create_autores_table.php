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
        Schema::create('autores', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'nome')->nullable(false);
            $table->string(column: 'sobrenome')->nullable(false);
            $table->date(column: 'dtnascimento')->nullable(false);
            $table->string(column: 'pais')->nullable(false);
            $table->string(column: 'biografia')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autores');
    }
};
