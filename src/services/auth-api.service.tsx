import {AsyncStorage} from 'react-native';
import jwt from 'react-native-pure-jwt';
import api from "./api.service";

/**
 * Requête HTTP d'authentification et stockage du token dans le storage et sur Axios
 * @param username string
 * @param password string
 */
function authenticate(username: string|undefined, password: string|undefined ) {
    if(username && password) {
        return api
            .post("login_check", {username, password})
            .then(response => response.data.token)
            .then(token => {

                // Je stocké le token dans mon localStorage
                AsyncStorage.setItem("authToken", token);
                // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
                setAxiosToken(token);
            });
    }else{
        return false
    }
}

/**
 * Positionne le token JWT sur Axios
 * @param {string} token Le token JWT
 */
function setAxiosToken(token: string) {
    api.defaults.headers["Authorization"] = "Bearer " + token;
}

/**
 * Mise en place lors du chargement de l'application
 */
function setup() {
    // 1. Voir si on a un token ?
    AsyncStorage.getItem("authToken")
        .then(token => {
            // 2. Si le token est encore valide
            if (token) {
                const { exp: expiration } = jwt.decode(token);
                if (expiration * 1000 > new Date().getTime()) {
                    setAxiosToken(token);
                }
            }
        })
}

function isAuthenticated() {
    let result = false
    // 1. Voir si on a un token ?
    AsyncStorage.getItem("authToken")
        .then(token => {
            // 2. Si le token est encore valide
            if (token) {
                const { exp: expiration } = jwt.decode(token);
                if (expiration * 1000 > new Date().getTime()) {
                    result = true;
                }
            }
        })
    return result;
}

function logout () {
    AsyncStorage.removeItem("authToken");
    delete api.defaults.headers["Authorization"];
}
export default {
    authenticate,
    setup,
    isAuthenticated,
    logout,
};
