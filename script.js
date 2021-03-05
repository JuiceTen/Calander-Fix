var CurrentDateTime = $('#currentDay')
var saveBtn = $('.saveBtn')
var timeBlock = $('.hour')
var calander = $('.textarea')
console.log(timeBlock)
var textArr = [];

saveBtn.on("click", function(event){
    event.preventDefault();
    var btn = event.target
    var userInput = calander.map(function(){
        return $(this).val()
    }).get();
   
    if (btn) {
        localStorage.setItem('calander', JSON.stringify(userInput))
    }
})

function render() {
    textArr = JSON.parse(localStorage.getItem('calander'))
    console.log(textArr)

    if (textArr === null){
        return
    } else {
        for (var i = 0; i < calander.length; i++) {
            $(calander[i]).text(textArr[i])
        }   
    }
}
render();

function displayCurrentTime() {
    var time = moment().format('ddd MMM do')
    console.log(time)
    CurrentDateTime.text(time)
}

function calanderTime() {
    var timeData = $('.hour').map(function(){
        return $(this).data('time')
    }).get();

    var time = moment().format('kA')
    var timeParse = parseInt(timeData)
    var currentTimeP = parseInt(time)

    console.log(timeParse)
    console.log(currentTimeP)
    for (var i = 0; i < timeData.length; i++) {
        if (timeData[i] === currentTimeP) {
           $(timeBlock[i]).siblings('textarea').addClass('present')

        } else if (timeData[i]> currentTimeP) {
            $(timeBlock[i]).siblings('textarea').addClass('future')
        } else if (timeData[i] < currentTimeP) {
            $(timeBlock[i]).siblings('textarea').addClass('past')
        }
    }


}
// timer = setInterval(calanderTime, 1000 * 30)
calanderTime();
displayCurrentTime();