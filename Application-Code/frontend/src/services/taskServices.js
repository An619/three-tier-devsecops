import axios from "axios";

// During Docker build, REACT_APP_BACKEND_URL will be set to "/api/tasks"
// For local npm start, it falls back to localhost:3500
const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3500/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}