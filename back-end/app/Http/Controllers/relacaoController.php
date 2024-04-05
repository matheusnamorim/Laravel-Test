<?php

namespace App\Http\Controllers;

use App\Models\Autores;
use App\Models\Livros;

class relacaoController extends Controller
{
    public function indexAutores(Autores $autores)
    {
        return $autores->livros;
    }

    public function indexLivros(Livros $livros)
    {
        return $livros->autores;
    }
}
