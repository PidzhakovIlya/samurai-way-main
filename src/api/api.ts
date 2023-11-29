import axios from "axios";
import {ResponseUsers} from "../redux/usersReducer";

type ResponseFollowType = {
    resultCode: number
    messages: ['Something wrong'],
    data: {}
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "23d212d6-5705-4d11-bb70-b9858302554f"
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseUsers>(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post<ResponseFollowType>(`follow/${id}`, {userId: id})
    },
    unFollow(id: number) {
        return instance.delete<ResponseFollowType>(`follow/${id}`)
    },
}


