function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'minutes': minutes,
   
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
 
  var minutesSpan = clock.querySelector('.minutes');

  function updateClock() {
    var t = getTimeRemaining(endtime);

  
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2021 00:00:00 GMT+0300"; 
var deadline = new Date(Date.parse(new Date()) +  30 * 60 * 1000); 
initializeClock('countdown', deadline);