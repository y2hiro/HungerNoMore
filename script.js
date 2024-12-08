// hunger statistics
const peopleStarvingPerSecond = 1.9; // people starving per second
const childDeathsPerMinute = 7; // children deaths per min
const foodInsecurityPercentage = 9; // 9% of population

let currentCount = 0;
let childDeaths = 0;

// Function
function updateStatistics() {
    currentCount += peopleStarvingPerSecond;
    childDeaths += childDeathsPerMinute / 60;

    // statistic updates 
    document.getElementById("counter").textContent = Math.round(currentCount);
    document.getElementById("childDeaths").textContent = Math.round(childDeaths);
    document.getElementById("foodInsecurity").textContent = foodInsecurityPercentage + "%";
}

// Update the counter every second
setInterval(updateStatistics, 1000);
