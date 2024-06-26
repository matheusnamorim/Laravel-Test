import Container from "../../styles/Container";
import ListAuthors from "../ListAuthors/ListAuthors";
import { Wrapp, Header, FakeDiv, BtnEdit } from "../../styles/styles";
import { Link } from "react-router-dom";
import ListBooks from "../ListBooks/ListBooks";

export default function HomePage() {

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Lista de Autores</h1>
                    </Header>
                    <ListAuthors />
                    <FakeDiv>
                        <BtnEdit>
                            <Link to={`/registerAuthor`} style={{ textDecoration: 'none' }}>
                                Incluir
                            </Link>
                        </BtnEdit>
                    </FakeDiv>
                    <Header>
                        <h1>Lista de Livros</h1>
                    </Header>
                    <ListBooks />
                    <FakeDiv>
                        <BtnEdit>
                            <Link to={`/registerBook`} style={{ textDecoration: 'none' }}>
                                Incluir
                            </Link>
                        </BtnEdit>
                    </FakeDiv>
                </Wrapp>
            </Container>
        </>
    );
}
