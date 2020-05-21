//script.js
const workWithData = async function () {
    const data = await getData();
    console.log("here is your data to do something:", data);
};

workWithData();