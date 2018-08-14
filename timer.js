"use strict";

const {session} = require("electron")





// Set the date we're counting down to
var countDown = 0;
var timerHandle;
var pauseFlag= false;



/*if (!getCookie("start_time")) {
    document.cookie="start_time="+Date.now();
}*/
// Update the count down every 1 second
var demo = document.getElementById("demo");

function start() {
   
    
    
    timerHandle = setInterval(function() {
        var start_time =localStorage.getItem('start_time');
         //countDown = Math.floor((Date.now() - start_time) / 1000);
        demo.style.setProperty('--level-color', countDown / 1500);
        var mins = ~~(countDown / 60);
        var sec = countDown % 60;
        demo.innerHTML = mins + " : " + sec;
        // If the count down is finished, write some text 
        countDown++;
    }, 1000);
}

//start();
function handleStart(event) {
    countDown = 0;
     //localStorage.setItem('start_time',0 );
    start();
   
}
function handlePause(event) {
    if(!pauseFlag){
    clearInterval(timerHandle);
    pauseFlag=true;
}else {pauseFlag=false;
    start();

}
}

function handleStop(event) {
     // countDown = 0;
    // localStorage.setItem('start_time',0 );
  clearInterval(timerHandle);
  countDown = 0;
    
   

}



