import axios from "axios"
import { FP_ENTRYPOINT } from "../config/entrypoint";

export default axios.create({
    baseURL: FP_ENTRYPOINT
});

  
  