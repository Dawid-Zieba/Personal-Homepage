import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getApiCode = () => 
axios.get(`${githubAPIBaseURL}/users/Dawid-Zieba/repos`)
.then(response => response.data);