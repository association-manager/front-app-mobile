import axios from "axios"
import { ENTRYPOINT } from '../config/entrypoint';

export default axios.create({
    baseURL: ENTRYPOINT
});
