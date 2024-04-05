<?php

namespace Database\Seeders;

use App\Models\Autores;
use App\Models\Livros;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class filldata extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $autores = [
            [
                'nome' => 'Matheus',
                'sobrenome' => 'Amorim',
                'dtnascimento' => '2000-01-01',
                'pais' => 'Brasil',
                'biografia' => 'Sem biografia'
            ],
            [
                'nome' => 'Keyla',
                'sobrenome' => 'Patricia',
                'dtnascimento' => '1970-05-11',
                'pais' => 'Argentina',
                'biografia' => 'Sem biografia'
            ],
            [
                'nome' => 'Patrick',
                'sobrenome' => 'Peter',
                'dtnascimento' => '1987-11-05',
                'pais' => 'Estados Unidos',
                'biografia' => 'Sem biografia'
            ]
        ];

        foreach ($autores as $autor) {
            Autores::create($autor);
        }

        $livros = [
            [
                'titulo' => 'As Crônicas',
                'autor_id' => 1,
                'genero' => 'Drama',
                'sinopse' => 'Livro bom pra ler',
                'capa' => 'Sem capa',
                'ano_publicacao' => '2023'
            ],
            [
                'titulo' => 'As Fábulas',
                'autor_id' => 1,
                'genero' => 'Teror',
                'sinopse' => 'Livro bom demais pra ler',
                'capa' => 'Sem capa',
                'ano_publicacao' => '2021'
            ],
            [
                'titulo' => 'As Histórias',
                'autor_id' => 2,
                'genero' => 'Romance',
                'sinopse' => 'Livro apaixonante',
                'capa' => 'Sem capa',
                'ano_publicacao' => '2003'
            ],
            [
                'titulo' => 'Os Poemas',
                'autor_id' => 2,
                'genero' => 'Ficção Científica',
                'sinopse' => 'Livro bom',
                'capa' => 'Sem capa',
                'ano_publicacao' => '2005'
            ],
            [
                'titulo' => 'As Lembranças',
                'autor_id' => 3,
                'genero' => 'Biografia',
                'sinopse' => 'Um pouco sobre mim',
                'capa' => 'Sem capa',
                'ano_publicacao' => '2013'
            ]
        ];

        foreach ($livros as $livro) {
            Livros::create($livro);
        }
    }
}
