import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate, useParams } from "react-router-dom";
import { listAuthorById, updateAuthorById } from "../services/laravel-test";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

export default function EditAuthor() {

    const navigate = useNavigate();

    const params = useParams();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dtBirth, setDtBirth] = useState('');
    const [country, setCountry] = useState('');
    const [biography, setBiography] = useState('');

    useEffect(() => {
        listAuthorById(params.idAuthor)
            .then((data) => {
                const author = data.data;
                setName(author.nome);
                setLastName(author.sobrenome);
                setDtBirth(author.dtnascimento);
                setCountry(author.pais);
                setBiography(author.biografia);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    function edit(event){
        event.preventDefault();

        if(name === '' || lastName === '' || dtBirth === '' || country === '' || biography === '') {
            return toast('Necessário preencher todos os campos!');
        }

        updateAuthorById({
            "nome": name,
            "sobrenome": lastName, 
            "dtnascimento": dtBirth, 
            "pais": country, 
            "biografia": biography
            }, params.idAuthor).then((data) => {
                navigate('/');
        }).catch((err) => {
              console.log(err);
        });
    }

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Editando Autor {params.idAuthor}</h1>
                    </Header>
                    <Form onSubmit={edit} >
                        <div>
                            <p>Nome:</p>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <p>Sobrenome:</p>
                            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div>
                            <p>Dt Nascimento:</p>
                            <input type="date" name="dtBirth" value={dtBirth} onChange={(e) => setDtBirth(e.target.value)}/>
                        </div>
                        <div>
                            <p>País:</p>
                            <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                        </div>
                        <div>
                            <p>Biografia:</p>
                            <input type="text" name="biography" value={biography} onChange={(e) => setBiography(e.target.value)}/>
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