import axios from 'axios';

export default {
    saveBook: (data) => {
        return axios.post("/api/books", data)
    }
}