const API_KEY = '5b003b5ab9bbf43c0b4cc5165fca7a51';

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

console.log(getData())