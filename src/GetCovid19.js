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
    console.log("Welcome to the Covid-19 Status APP!");
    while (true) {
        console.log("Select from the below options:")
        console.log("[1] Confirmed Cases");
        console.log("[2] Recovered Cases");
        console.log("[3] Death Count");
        console.log("[4] Countries Total Stats");
        console.log("[5] Exit");
        let userInput = await askQuestion("Select an option from above: ");
        console.log()
        switch (userInput) {
            case "1":
                let country = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed`);
                let dateResults = response.data
                let mostRecentResult = dateResults[dateResults.length -1];
               // console.log(mostRecentResult)
               console.log(`Confirmed Cases For ${country}:`);
            
                console.log(mostRecentResult.Confirmed);
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`);
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`)
                 //console.table(dateResults,["Date","Recovered","Confirmed","Deaths"],dateResults.shift());
                break;
            case "2":
                let country2 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response2 = await axios.get(`https://api.covid19api.com/live/country/${country2}/status/recovered`);
                let dateResults2 = response2.data
                let mostRecentResult2 = dateResults2[dateResults2.length -1];
               // console.log(mostRecentResult)
              console.log(`Recovered Cases For ${country2}:`);
                console.log(mostRecentResult2.Recovered)
              //  console.log(response2);
                break;
            case "3":
                let country3 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response3 = await axios.get(`https://api.covid19api.com/live/country/${country3}/status/deaths`);
                
                let dateResults3 = response3.data
                let mostRecentResult3 = dateResults3[dateResults3.length -1];
               // console.log(mostRecentResult)
                console.log(`Death Count For ${country3}:`);
                console.log(mostRecentResult3.Deaths)
                break;
            case "4":
                let country4 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response4 = await axios.get(`https://api.covid19api.com/live/country/${country4}/status/confirmed`);
                let dateResults4 = response4.data
                let mostRecentResult4 = dateResults4[dateResults4.length -1];
               // console.log(mostRecentResult)
              // console.log("confirmd case");
                //console.log(mostRecentResult.Confirmed)
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`);
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`)
                console.log(`${country4} Stats`);
                console.table(dateResults4,["Date","Confirmed","Recovered","Deaths"]);
                break;
            case "5":
                console.log("Thank you for using the Covid-19 Status APP.");
                console.log();
                process.exit(0);
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