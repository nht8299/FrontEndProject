import httpClient from "../http-common";

const getAll = (urlName) =>{
    return httpClient.get(`/api/${urlName}`)
}

const create = (urlName,data) => {
    return httpClient.post(`/api/${urlName}`,data);
}

const get = (urlName,id) => {
    return httpClient.put(`/api/${urlName}/${id}`);
}

const update = (urlName,data,id) => {
    return httpClient.get(`/api/${urlName}/${id}`,data);
}

const remove = (urlName,id) => {
    return httpClient.delete(`/api/${urlName}/${id}`);
}

export default { getAll, create, get, update, remove};