// today displayed
var now = moment().format('dddd, MMMM Do YYYY');
$("#now").text(now);

function colorCodedTime() {
    // getting the current hour
    var timeNow = new Date();
    var currentTime = timeNow.getHours();
    setInterval(currentTime, 1000)
    // defines each hour box in HTML
    var nine = document.getElementById('nine');
    var ten = document.getElementById('ten');
    var eleven = document.getElementById('eleven');
    var twelve = document.getElementById('twelve');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    // change hour box color based on time
    // really bulky, but it works.
    // we'll shorten it down later
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
            three.currentTime.add('present')
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
        }
};

console.log(colorCodedTime())