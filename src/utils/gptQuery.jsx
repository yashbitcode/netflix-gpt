const gptQuery = (moviesList) => {
    const moviesData = moviesList.map(async (el) => {
        if(!el) return;
        
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${el}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await response.json();

        return data;
    });

    return moviesData;
};

export default gptQuery;