
import httpClient from "../http-common";

const getAll = (url) =>{
    return httpClient.get(`/api/${url}`)
}

const create = (url,data) => {
    return httpClient.post(`/api/${url}`,data);
}

const get = (url,id) => {
    return httpClient.put(`/api/${url}/${id}`);
}

const update = (url,data,id) => {
    return httpClient.get(`/api/${url}/${id}`,data);
}

const remove = (url,id) => {
    return httpClient.delete(`/api/${url}/${id}`);
}

export default { getAll, create, get, update, remove};