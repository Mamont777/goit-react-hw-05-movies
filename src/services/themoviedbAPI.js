import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `a06c90b50d50fe78eda7fc28090f9f2b`,
};

const getTrendingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(`trending/movie/day`, {
      params: { page },
    });

    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

const getMovieByName = async (page = 1, query = '') => {
  try {
    const { data } = await axios.get(`search/movie`, {
      params: {
        page,
        query,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

export { getTrendingMovies, getMovieByName };
