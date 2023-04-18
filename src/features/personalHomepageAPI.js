import axios from "axios";

const githubAPI_URL = "https://api.github.com";

export const getRepositories = (username) =>
  axios.get(`${githubAPI_URL}/users/${username}/repos`).then((response) => {
    const repositories = response.data;
    return repositories.filter((repo) => repo.has_pages);
  });
