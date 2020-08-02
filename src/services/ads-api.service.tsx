import api from "./api.service";
import { AdsItem } from 'src/models/ads-item.model';

/**
 * 
 */
const getAnnonces = async () => await api.get("annonces/lister")
    .then((list: any) => {
        const result: AdsItem[] = list.data["hydra:member"];
        return result;
    })

export default {getAnnonces}
