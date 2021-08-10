import axios from "axios";
import {UsersInterface} from "../redux/types";
import Configs from "../variables/Configs";

const API = axios.create({
    baseURL: Configs.baseURL,
    headers: {'app-id': Configs.appId}
});

const userService = {
    fetchUser
};

async function fetchUser(page = 0): Promise<UsersInterface> {
    return new Promise<UsersInterface>((resolve, reject) => {
        API.get(`/user?page=${page}&limit=${Configs.pageSize}`)
            .then(res => {
                const data = res?.data;
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default userService
