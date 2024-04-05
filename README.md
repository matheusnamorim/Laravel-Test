# TesteLaravel
Para conseguir executar o projeto será necessário realizar algumas alterações.

Primeiramente no back-end será necessário configurar as variáveis de ambiente para conectar com o banco de dados. O projeto foi desenvolvido utilizando MySQL e segue um exemplo de configuração:

* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel-test
* DB_USERNAME=root
* DB_PASSWORD=root

### Necessário rodar 'php artisan migrate' para gerar as tabelas no banco de dados e também gerar alguns dados iniciais de teste: 'php artisan db:seed'.

Por fim, é necessário rodar a api: 'php artisan serve'.

Se tudo estiver correto, poderá acessar o back-end via 'localhost/' na porta escolhida.

<div/>

Para rodar o Front-end será necessário rodar o comando 'npm i' dentro da pasta /Laravel-Test/front-end para baixar todo o necessário
do projeto React e ao finalizar rodar 'npm start' para iniciar o projeto.

## Com o front-end rodando o projeto será este:
![image](https://github.com/matheusnamorim/Laravel-Test/assets/107131039/f09cda37-de75-43ba-a3e6-34dbfc54b9bf)


