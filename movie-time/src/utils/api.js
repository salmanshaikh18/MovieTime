import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;

// Log the TMDB token to verify it's being read correctly
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

if (!TMDB_TOKEN) {
  throw new Error('Missing TMDB_TOKEN environment variable');
}

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.error(`Error from fetchDataFromApi: ${error}`);
    throw error;
  }
};

fetchDataFromApi()