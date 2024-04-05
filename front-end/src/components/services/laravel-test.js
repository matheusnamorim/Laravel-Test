import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`;

function listAuthors() {
    const promise = axios.get(`${BASE_URL}/autores`);
    return promise;
}

function registerAuthors(body) {
    const promise = axios.get(`${BASE_URL}/autores`, body);
    return promise;
}

function listAuthorById(id) {
    const promise = axios.get(`${BASE_URL}/autores/${id}`);
    return promise;
}

function updateAuthorById(body, id) {
    const promise = axios.put(`${BASE_URL}/autores/${id}`, body);
    return promise;
}

function deleteAuthorById(id) {
    const promise = axios.delete(`${BASE_URL}/autores/${id}`);
    return promise;
}

export { listAuthors, deleteAuthorById, listAuthorById, updateAuthorById, registerAuthors };