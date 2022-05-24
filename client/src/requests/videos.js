import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : `${window.location.hostname}/api`

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