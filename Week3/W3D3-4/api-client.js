

const API_KEY = '';

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        console.log("The response from the API in getData function ", res);
        const data = await res.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getLionKing = async function () {
    const apiUrl = "https://api.themoviedb.org/3/find/tt6105098?api_key=&language=en-US&external_source=imdb_id&external_id= tt1979376";
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        console.log("respons getLionKing: ", res);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


const getTopRated = async function () {
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1";
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        console.log("respons getLionKing: ", res);
        const data = await res.json();
        console.log("data topRated ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

getTopRated()
