// today displayed
var now = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(now);
// getting the current hour
var timeNow = new Date();
var currentTime = timeNow.getHours();
setInterval(currentTime, 1000);

let timeArray = ['nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five'];
// recieved help from a tutor for the following code. I was struggling simplifying into a for loop. used that knowledge and worked it into local storage
function saveHourByButton() {
    for (i = 0; i < timeArray.length; i++) {
        const save = 'save-';
        const buttonId = save + timeArray[i]; // turns it into 'save-[i]' which corresponds to button ids in HTML
        const buttonEl = document.getElementById(buttonId);
        buttonEl.addEventListener('click', buttonLocalStorage)
    }
    function buttonLocalStorage(event) {
        const clickedButton = event.target.id;
        const targetInput = clickedButton.replace('save-',''); // this is so cool, replaces 'save-' in button ids with nothing, which just turns it into the input ids in timeArray
        const input = document.getElementById(targetInput); 
        input.value;
        localStorage.setItem(targetInput, input.value);
    }
}
saveHourByButton();

function loadLocalStorage() {
    for (i = 0; i < timeArray.length; i++) {
        const htmlId = timeArray[i];
        const inputEl = document.getElementById(htmlId);
        inputEl.value = localStorage.getItem(htmlId);
    }
}
loadLocalStorage();

function colorCodedTime() {
for (i = 0; i < timeArray.length; i++) {
    let htmlId = timeArray[i]; 
    hourColor(i + 9, currentTime, htmlId) // i + 9 so that way we match the 24hr set up of time
}
    function hourColor(hour, currentTime, htmlId) { // hour = i + 9, defined in parameter of hourColor called in the for loop
        let currentEl = document.getElementById(htmlId)
        if (hour < currentTime) {
            currentEl.classList.add('past') // changes less than current time to past
        } else if (hour === currentTime) {
            currentEl.classList.add('present') // changes current time to present
        } else {
            currentEl.classList.add('future') // changes more than current time to future
        }
    }

    // change hour box color based on time
    // really bulky, but it works.
    // we'll shorten it down later
    /*
    // defines each hour box in HTML
    const nine = document.getElementById('nine');
    const ten = document.getElementById('ten');
    const eleven = document.getElementById('eleven');
    const twelve = document.getElementById('twelve');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');

    console.log(currentTime);
        if (currentTime === 9){
            nine.classList.add('present')
            ten.classList.add('future')
            eleven.classList.add('future')
            twelve.classList.add('future')
            one.classList.add('future')
            two.classList.add('future')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 10){
            nine.classList.add('past')
            ten.classList.add('present')
            eleven.classList.add('future')
            twelve.classList.add('future')
            one.classList.add('future')
            two.classList.add('future')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 11){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('present')
            twelve.classList.add('future')
            one.classList.add('future')
            two.classList.add('future')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 12){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('present')
            one.classList.add('future')
            two.classList.add('future')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 13){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('past')
            one.classList.add('present')
            two.classList.add('future')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 14){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('past')
            one.classList.add('past')
            two.classList.add('present')
            three.classList.add('future')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 15){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('past')
            one.classList.add('past')
            two.classList.add('past')
            three.classList.add('present')
            four.classList.add('future')
            five.classList.add('future')
        } else if (currentTime === 16){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('past')
            one.classList.add('past')
            two.classList.add('past')
            three.classList.add('past')
            four.classList.add('present')
            five.classList.add('future')
        } else if(currentTime === 17){
            nine.classList.add('past')
            ten.classList.add('past')
            eleven.classList.add('past')
            twelve.classList.add('past')
            one.classList.add('past')
            two.classList.add('past')
            three.classList.add('past')
            four.classList.add('past')
            five.classList.add('present')
        }*/
};

colorCodedTime()