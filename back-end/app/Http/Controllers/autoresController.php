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

    public function show(int $autores)
    {
        $autoresModel = Autores::find($autores);
        if ($autoresModel === null) {
            return response()->json(['error' => true, 'message' => 'Autor não encontrado'], status: 404);
        }
        return $autoresModel;
    }

    public function update(Request $request, int $autores)
    {
        Autores::where('id', $autores)->update($request->all());

        return Autores::find($autores);
    }

    public function destroy(int $autores)
    {
        Autores::destroy($autores);
        return response()->noContent();
    }
}
