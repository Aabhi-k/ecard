import axios from 'axios';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
            email,
            password
        });
        return response.data;

    }catch(e) {
        console.error(e);
        throw e;
    }
}

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post("http://localhost:8080/api/users/register", {
            name,
            email,
            password
        });
        return response.data;
    }catch (e) {
        console.error(e);
        throw e;
    }
}