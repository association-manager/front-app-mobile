import AsyncStorage from '@react-native-community/async-storage';
import JwtDecode from 'jwt-decode';
import api from "./api.service";

/**
 * Requête HTTP d'authentification et stockage du token dans le storage et sur Axios
 * @param username string
 * @param password string
 */
const authenticate = (username: string|undefined, password: string|undefined ): Promise<boolean> | boolean  => {
    if(username && password) {
        return api
            .post("login_check", {username, password})
            .then(response => response.data.token)
            .then(token => {
             // Je stocké le token dans mon localStorage
                const {username: email}= JwtDecode(token)
                AsyncStorage.multiSet([["authToken", token],["email" , email]]);
                // On prévient Axios qu'on a maintenant un header par défaut sur toutes nos futures requetes HTTP
                setAxiosToken(token);
                return true
            }).catch(()=> false);
    }else{
        return false
    }
}

/**
 * Positionne le token JWT sur Axios
 * @param {string} token Le token JWT
 */
const setAxiosToken = (token: string): void => {
    api.defaults.headers["Authorization"] = "Bearer " + token;
}

/**
 * Mise en place lors du chargement de l'application
 */
const setup = (): void  => {
    // 1. Voir si on a un token ?
    AsyncStorage.getItem("authToken")
        .then(token => {
            // 2. Si le token est encore valide
            if(token && isAuthenticated()) setAxiosToken(token)       
        })
}

const isAuthenticated = (): boolean =>{
    let result = false
    // 1. Voir si on a un token ?
    AsyncStorage.getItem("authToken")
        .then(token => {
            // 2. Si le token est encore valide
            if (token) {
                const {exp: expiration} =JwtDecode(token)
                if (expiration * 1000 > new Date().getTime())
                    result = true;
            }
        })
    return result;
}
const getUserEmail = (): Promise<string|undefined> =>{
    return AsyncStorage.getItem("email")
        .then(email => {if(isAuthenticated()&&email) return email})
}

const logout = (): void => {
    AsyncStorage.removeItem("authToken");
    delete api.defaults.headers["Authorization"];
}

export default {
    authenticate,
    setup,
    isAuthenticated,
    getUserEmail,
    logout,
};
