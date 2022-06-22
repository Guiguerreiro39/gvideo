import axios from "axios"
import {API_URL} from "../common/env"

export function getUser(payload) {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/users/`, {params: payload})
             .then((res) => {
                 resolve(res.data.payload[0])
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}

export function postUser(payload) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/users`, payload)
             .then((res) => {
                 resolve(res.data.payload)
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}