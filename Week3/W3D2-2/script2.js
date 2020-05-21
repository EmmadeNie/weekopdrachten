const huiswerkMaken = (vak, callback) => {
    setTimeout(function () {
        console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback();
    }, 3000)
}

const klaarMetHuiswerk = () => {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

huiswerkMaken("wiskunde", klaarMetHuiswerk)