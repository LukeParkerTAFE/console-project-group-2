const moment = require("moment");
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
        console.log("[2] Active Cases");
        console.log("[3] Recovered Cases");
        console.log("[4] Death Count");
        console.log("[5] Countries Total Stats");
        console.log("[6] Exit");
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
                    let response2 = await axios.get(`https://api.covid19api.com/live/country/${country2}/status/confirmed`);
                    let dateResults2 = response2.data
                    let mostRecentResult2 = dateResults2[dateResults2.length -1];
                   // console.log(mostRecentResult)
                   console.log(`Active Cases For ${country2}:`);
                
                    console.log(mostRecentResult2.Active);
                    // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`);
                    // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`)
                     //console.table(dateResults,["Date","Recovered","Confirmed","Deaths"],dateResults.shift());
                    break;
            case "3":
                let country3 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response3 = await axios.get(`https://api.covid19api.com/live/country/${country3}/status/recovered`);
                let dateResults3 = response3.data
                let mostRecentResult3 = dateResults2[dateResults3.length -1];
               // console.log(mostRecentResult)
                console.log(`Recovered Cases For ${country3}:`);
                console.log(mostRecentResult3.Recovered)
              //  console.log(response2);
                break;
            case "4":
                let country4 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response4 = await axios.get(`https://api.covid19api.com/live/country/${country4}/status/deaths`);
                
                let dateResults4 = response4.data
                let mostRecentResult4 = dateResults4[dateResults4.length -1];
               // console.log(mostRecentResult)
                console.log(`Death Count For ${country4}:`);
                console.log(mostRecentResult4.Deaths)
                break;
            case "5":
                let country5 = await askQuestion("Which country do you want the stats for Covid-19: ");
                let response5 = await axios.get(`https://api.covid19api.com/live/country/${country5}/status/confirmed`);
                let dateResults5 = response5.data
                let mostRecentResult5 = dateResults5[dateResults5.length -1];
               // console.log(mostRecentResult)
              // console.log("confirmd case");
                //console.log(mostRecentResult.Confirmed)
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`);
                // let response = await axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-03-21T13:13:30Z`)
                console.log(`${country5} Stats`);
              // const currentdate = "2020-04-13T00:00:00Z";
                // let currentdates = dateResults4.Date;
                // let newdate = moment(currentdates);
                // let  finalDate = newdate.format("dddd,mm,yyyy");
                // console.log(finalDate);

                // dateResults4.Date = moment(dateResults4.Date);
                // console.log(dateResults4.Date.format("dddd,mm,yyyy"));
                for (let i = 0; i< dateResults5.length; i++) {
                        dateResults5[i].Date = moment(dateResults5[i].Date);
                        dateResults5[i].Date =  dateResults5[i].Date.format("DD MMM YYYY");
                       
                      //  console.log(dateResults4[i].Date);
                }
                // console.table(dateResults4,["Date"]);
                console.table(dateResults5,["Date","Confirmed","Active","Recovered","Deaths"]);
                break;
            case "6":
                console.log("Thank you for using the Covid-19 Status APP.");
                console.log();
                process.exit(0);
            default:
                console.log();
                console.log("ERROR: Input Invalid. Please enter a number between 1 to 6.");
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