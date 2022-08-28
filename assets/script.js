// today displayed
var now = moment().format('dddd, MMMM Do YYYY');
$("#now").text(now);

function colorCodedTime() {
    // getting the current hour
    var timeNow = new Date();
    var currentTime = timeNow.getHours();
    // defines each hour box in HTML
    var nine = document.getElementById('#nine');
    var ten = document.getElementById('#ten');
    var eleven = document.getElementById('#eleven');
    var twelve = document.getElementById('#twelve');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    // change hour box color based on time
    console.log(currentTime);
        if (currentTime === 9){
            document.getElementById('nine').classList.add('present')
        } else {
            nine.classList.add('past');
        }
};

console.log(colorCodedTime())