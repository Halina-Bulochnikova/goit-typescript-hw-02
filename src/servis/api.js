import axios from "axios";

const ACCESS_KEY = "MH5nMDsKMx575nnwA8p1FeKChrTHHmhgENkd23kCa1s";

const fetchResults = async (query, page = 1) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        ACCESS_KEY,
        per_page: 12,
      },
    }
  );

  return response.data.results;
};

export default fetchResults;
