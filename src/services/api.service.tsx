import axios from "axios"

const ENTRYPOINT = 'https://association-manager.go.yj.fr/api';

export default axios.create({
    baseURL: ENTRYPOINT
});
