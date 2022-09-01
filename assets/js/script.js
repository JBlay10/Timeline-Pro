// Header date
function headerDate(){
    var activeDate = moment().format('LLLL')
    $("#currentDay").text(activeDate);
}
headerDate();

// Variables for defualt settings
const initialHour = moment().startOf("day").add(7, "hour");
const hours = moment().format("h");

// Loop for the time
for(var i = 8; i < 18; i++) {
    var timeFrame = initialHour.add(1, "hour").format("ha");
    var activeTime;

    // if statement for Schedule current time
    if (hours == i) {
        activeTime = "present"
    } else if (hours < i) {
        activeTime = "future"
    } else {
        activeTime = "past"
    }

    // Creates divs for row and colums
    const addDivs =

        //if id has a closing(") or change it to class body breaks 
        `<container class="row" id="hour-${i}>
            <div class="col-2"></div>
            <div class="hour w-50 p-3 col-1"> ${timeFrame}</div>
            <textarea class="description w-50 p-3 col-9 ${activeTime} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2"></div>
        </container>
        <p class="description"></p>`
        ;

    $(".container").append(addDivs);
}


// creates an event to save user input to local storage
$(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, userInput)
})

for(var i = 8; i < 18; i++) {
    $(`hour-${i}`).val(localStorage.getItem(`hour-${i}`))
}