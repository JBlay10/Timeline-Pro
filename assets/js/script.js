// Header date
function headerDate(){
    var activeDate = moment().format('MMM D, YYYY')
    $("#currentDay").text(activeDate);
}
headerDate();

// Variables for defualt settings
const initialHour = moment().startOf("day").add(6, "hour");
const hours = moment().formart("h");

// Loop for the time
for(var i = 7; i < 18; i++) {
    var timeFrame = initialHour.add(1, "hour").format("h:mma");
    var activeTime;

    // if statement for Schedule current time
    if (hours == i) {
        activeTime = "present"
    } else if (hours < i) {
        activeTime = "future"
    } else {
        activeTime = "padt"
    }

    // Creates divs for row and colums
    const addDivs =

        `<div class="row" id="hours-${i}>
            <div class="col-2"></div>
            <div class="hour w-50 p-3 col-1"> ${timeFrame}</div>
            <input class="userInput w-75 p-3 col-5 ${activeTime} hours-${i}"></input>
            <button class="saveBtn w-25 p-3 col-1 fas fa-save fa-2x"></button>
            <div class="col-2"></div>
        </div>`
        ;
        $(".container").append(addDivs);
}



