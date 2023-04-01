  //     Get the set time in minutes
      // Get total time in seconds
     //  Create a variable that contains the DOM element from html. In this case , 'demo'
    //   Create a function that runs DOWN every seconds
  //     inside the funx=ction . minutes = time/60 in whole numbers. No d.p
  //     let seconds = time mod 60
//       make a static time. Later edit it to be easily changed on the website
const timerSetTime = 10;
let time = timerSetTime * 60;
const countDown = document.getElementById("demo");

setInterval(everySeconds, 1000)
function everySeconds () {
    const minutes = Math.floor(time/60)
    let seconds = (time % 60)
    //conditionals.something i dont understand
    seconds = seconds < 10 ? '0' + seconds:seconds;
    countDown.innerHTML= `${minutes}:${seconds}`
    time--;
}




//time gotten now is equalt o 600 seconds

// conditional= if FUNCTION > 0 {return '0' + seconds}
//
// create a function that countsdown the time