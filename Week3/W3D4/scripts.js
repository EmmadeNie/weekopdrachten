const buttons = document.querySelectorAll('button')

//Subopdracht: landenlijst
let regionList = (function () {
    let list = randomPersonData.map(element => element.region);
    let arr = list.sort();
    var i,
        len = arr.length,
        output = [],
        obj = {};
    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        output.push(i);
    }
    return output;
})();

addRegionToDOM = () => {
    removeFromDOM();
    let ul = document.createElement('ul');
    const parent = document.getElementsByTagName('main')[0];
    const regionHeader = document.createElement('h1');
    parent.appendChild(regionHeader);
    regionHeader.innerHTML = "Region List";
    parent.appendChild(ul);
    regionList.forEach(element => {
        let regionItem = document.createElement('li');
        ul.appendChild(regionItem);
        regionItem.innerHTML = element;
    })
}

//Subopdracht: steenbokvrouwen
validateSteenbokVrouwen = (person) => {
    let geboorteDatum = new Date(person.birthday.mdy);
    let steenbok = (geboorteDatum.getMonth() === 11 && geboorteDatum.getDate() >= 22) || (geboorteDatum.getMonth() === 0 && geboorteDatum.getDate() <= 19);
    return person.gender === "female" && person.age > 30 && steenbok;
}

let females = randomPersonData.filter((person) => {
    return validateSteenbokVrouwen(person)
})

addSteenboekVrouwenToDOM = (array) => {
    removeFromDOM();
    let ul = document.createElement('ul');
    const parent = document.getElementsByTagName('main')[0];
    const header = document.createElement('h1');
    parent.appendChild(header);
    header.innerHTML = "SteenbokVrouwen";
    parent.appendChild(ul);
    females.forEach(element => {
        let Item = document.createElement('a');
        ul.appendChild(Item);
        Item.innerHTML = `${element.name} ${element.surname} <br>`;
        Item.href = element.photo;
    })
}

//opdracht credit-card
const convertExpirationDate = (person) => {
    let expiration = person.credit_card.expiration.split("/");
    let year = parseInt("20" + expiration[1]);
    let month = parseInt(expiration[0]) - 1;
    let day = 1;
    expireDate = new Date(year, month, day);
    //console.log(expireDate, month);
}

const necessaryDetailsOnly = person => ({
    name: person.name,
    surname: person.surname,
    phone: person.phone,
    number: person.credit_card.number,
    expiration: person.credit_card.expiration,
    expiration_date: person.credit_card.expiration_date,
});

const isAdult = person => (
    console.log(person.age >= 18)
)

let persons = randomPersonData.filter(person => {
    //convertExpirationDate(person);
    isAdult(person);

})


const removeFromDOM = () => {
    const main = document.getElementsByTagName('main')[0];
    main.innerText = '';
}

const handleOnChangeEvent = () => {
    let vinked = event.target.id;
    switch (vinked) {
        case "landenlijst":
            addRegionToDOM();
            break;
        case "steenbokvrouwen":
            addSteenboekVrouwenToDOM(females);
            break;
        case "ouwe creditcards":
            console.log("gemiddelde leeftijd")
            break;
        case "meeste mensen":
            console.log("gemiddelde leeftijd")
            break;
        case "gemiddelde leeftijd":
            console.log("gemiddelde leeftijd")
    }
}
const addEventListener = () => {
    buttons.forEach(button => button.addEventListener('click', handleOnChangeEvent))
}


addEventListener()
