import axios from "axios"
import {API_URL} from "../common/env"

export function getAllVideos() {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/videos`)
             .then((res) => {
                 resolve(res.data.payload)
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}

export function getVideo(uuid) {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/videos/${uuid}`)
             .then((res) => {
                 resolve(res.data.payload)
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}

export function postVideo(payload) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/videos`, payload)
             .then((res) => {
                 resolve(res.data.payload)
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}

export function patchVideo(id, payload) {
    return new Promise((resolve, reject) => {
        axios.patch(`${API_URL}/videos/${id}`, payload)
             .then((res) => {
                 resolve(res.data.payload)
             })
             .catch((err) => {
                 reject(err.data.error)
             })
    })
}