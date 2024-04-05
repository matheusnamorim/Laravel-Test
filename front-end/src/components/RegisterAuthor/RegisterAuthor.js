import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerAuthors } from "../services/laravel-test";
import { toast, ToastContainer } from 'react-toastify';

export default function RegisterAuthor() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dtBirth, setDtBirth] = useState('');
    const [country, setCountry] = useState('');
    const [biography, setBiography] = useState('');

    function register(event){
        event.preventDefault();

        if(name === '' || lastName === '' || dtBirth === '' || country === '' || biography === '') {
            return toast('Necessário preencher todos os campos!');
        }

        registerAuthors({
            "nome": name,
            "sobrenome": lastName, 
            "dtnascimento": dtBirth, 
            "pais": country, 
            "biografia": biography
            }).then((data) => {
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
                        <h1>Incluindo Autor</h1>
                    </Header>
                    <Form onSubmit={register} >
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
                        <button>Incluir</button>
                    </span>
                    </Form>
                </Wrapp>
                <ToastContainer/>
            </Container>
        </>
    );
}