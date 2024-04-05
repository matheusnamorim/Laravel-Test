import Container from "../../styles/Container";
import ListAuthors from "../ListAuthors/ListAuthors";
import { Wrapp, Header } from "../../styles/styles";

export default function HomePage() {

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Lista de Autores</h1>
                    </Header>
                    <ListAuthors />
                    <Header>
                        <h1>Lista de Livros</h1>
                    </Header>
                </Wrapp>
            </Container>
        </>
    );
}

