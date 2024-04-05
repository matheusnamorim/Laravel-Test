<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autores extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'sobrenome', 'dtnascimento', 'pais', 'biografia'];

    public function livros()
    {
        return $this->hasMany(related: Livros::class, foreignKey: 'autor_id');
    }

}
