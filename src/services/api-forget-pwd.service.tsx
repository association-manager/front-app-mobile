import axios from "axios"


const FP_ENTRYPOINT = 'https://back-end-node-store.herokuapp.com/';

export default axios.create({
    baseURL: FP_ENTRYPOINT
});

  
  