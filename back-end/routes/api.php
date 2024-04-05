<?php

use App\Http\Controllers\autoresController;
use App\Http\Controllers\livrosController;
use App\Http\Controllers\relacaoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('autores', autoresController::class);
Route::apiResource('livros', livrosController::class);
Route::get('autores/{autores}/livros', [relacaoController::class, 'indexAutores']);
Route::get('livros/{livros}/autores', [relacaoController::class, 'indexLivros']);