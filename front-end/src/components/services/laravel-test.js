import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function listAuthors() {
    const promise = axios.get(`${BASE_URL}/api/autores`);
    return promise;
}

export { listAuthors };