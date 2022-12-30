import axios, { AxiosRequestConfig } from 'axios';

export const searchImages = async (q: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
      q,
      pageNumber: 1,
      pageSize: 10,
      autoCorrect: true,
      safeSearch: true,
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST,
    },
  };

  const response = await axios.request<{ totalCount: number; value: Image[] }>(options);
  return response.data.value;
};
