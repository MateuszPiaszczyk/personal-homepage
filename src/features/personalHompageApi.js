import axios from "axios";

const githubAPIbaseURL = "https://api.github.com";

export const getRepositories = username =>
 axios.get(`${githubAPIbaseURL}/users/${username}/repos`)
    .then(response => response.data);