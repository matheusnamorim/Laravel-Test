<?php

namespace App\Http\Controllers;

use App\Models\Autores;
use Illuminate\Http\Request;

class autoresController extends Controller
{
    public function index() 
    {
        return Autores::all();
    }

    public function store(Request $request) 
    {
        return response()->json(Autores::create($request->all()), status: 201);
    }
}
