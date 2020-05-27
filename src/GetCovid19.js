const readline = require('readline');
const axios = require("axios");
const { covid19Key } = require("../config/Keys");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    console.log("Welcome to the Covid-19 status app!");
    while (true) {
        console.log("Select from the below options:")
        console.log("[1] Confirmed Cases");
        console.log("[2] Recovered Cases");
        console.log("[3] Death Count");
        console.log("[4] Exit");
        let userInput = await askQuestion("Select an option from above: ");
        console.log()
        switch (userInput) {
            case "1":
                let country = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed`);
                console.log(response);
                break;
            // case "2":
            //     let country = await askQuestion("Which country do you want the stats for Covid-19: ");
            //     let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/recovered`);
            //     console.log(response);
            //     break;
            // case "3":
            //     let country = await askQuestion("Which country do you want the stats for Covid-19: ");
            //     let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/deaths`);
            //     console.log(response);
            //     break;
            default:
                console.log();
                console.log("ERROR: Input Invalid. Please entere a number between 1 to 4.");
                console.log();
        }
    }
}

//     let country = await askQuestion("Which country do you want the stats for Covid-19: ");

//     let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed`)
//     // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/recovered`)
//     // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/deaths`)

//     console.log(response);

// }

Program().then(() => {
    process.exit(0);
});