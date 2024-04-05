import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { listAuthors, listBookById, updateBookById } from "../services/laravel-test";
import OptionAuthor from "./OptionAuthor";

export default function EditBook() {

    const navigate = useNavigate();
    const params = useParams();
    const [listAuthorEdit, setListAuthorEdit] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [cover, setCover] = useState('');
    const [yearOfPubli, setYearOfPubli] = useState('');

    useEffect(() => {
        listAuthors()
            .then((data) => {
                setListAuthorEdit(data.data);
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });

        listBookById(params.idBook)
            .then((data) => {
                const book = data.data;
                setTitle(book.titulo);
                setAuthor(book.author_id);
                setGender(book.genero);
                setSynopsis(book.sinopse);
                setCover(book.capa);
                setYearOfPubli(book.ano_publicacao);
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }, []);

    function edit(event){
        event.preventDefault();

        if(title === '' || author === '' || gender === '' || synopsis === '' || cover === '' || yearOfPubli === '') {
            return toast('Necessário preencher todos os campos!');
        }

        updateBookById({
            "titulo": title,
            "autor_id": author, 
            "genero": gender, 
            "sinopse": synopsis, 
            "capa": cover,
            "ano_publicacao": yearOfPubli
            }, params.idBook).then((data) => {
                navigate('/');
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Editando Livro {params.idBook}</h1>
                    </Header>
                    <Form onSubmit={edit} >
                        <div>
                            <p>Título:</p>
                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <p>Autores:</p>
                            <select name="authors" value={author} onChange={(e) => setAuthor(e.target.value)}>
                                <option value=""></option>
                                {listAuthorEdit.length !== 0 ? listAuthorEdit.map((value, index) => <OptionAuthor value={value} index={index} id={params.idBook} setAuthor={setAuthor} />) : <></>}
                            </select>
                        </div>
                        <div>
                            <p>Gênero:</p>
                            <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                        </div>
                        <div>
                            <p>Sinopse:</p>
                            <input type="text" name="synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)}/>
                        </div>
                        <div>
                            <p>Capa:</p>
                            <input type="text" name="cover" value={cover} onChange={(e) => setCover(e.target.value)}/>
                        </div>
                        <div>
                            <p>Ano Publicação:</p>
                            <input type="text" name="yearOfPubli" value={yearOfPubli} onChange={(e) => setYearOfPubli(e.target.value)}/>
                        </div>
                        <span>
                        <button>Atualizar</button>
                    </span>
                    </Form>
                </Wrapp>
                <ToastContainer/>
            </Container>
        </>
    );
}