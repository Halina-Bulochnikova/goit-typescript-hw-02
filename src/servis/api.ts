import axios from "axios";
import { ImageType } from "../components/App/App";

const ACCESS_KEY = "MH5nMDsKMx575nnwA8p1FeKChrTHHmhgENkd23kCa1s";

type ApiType = {
  results: ImageType[];
  total: number;
  total_pages: number;
};

const fetchResults = async (
  query: string,
  page: number = 1
): Promise<ImageType[]> => {
  const response = await axios.get<ApiType>(
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
