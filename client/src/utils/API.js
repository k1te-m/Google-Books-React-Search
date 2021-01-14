import axios from 'axios';

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    saveBook: (data) => {
        return axios.post("/api/books", data);
    },
    deleteBook: (id) => {
        return axios.delete('/api/books/' + id);
    }
}