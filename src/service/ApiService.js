import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },

});


class ApiService {
    get(endpoint, config) {
        return new Promise ((resolve, reject) => {
            api.get(endpoint, config)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        }); 
    }
}

export default new ApiService();
