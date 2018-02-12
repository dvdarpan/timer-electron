"use strict";

const {session} = require("electron")
const LocalStorage = require('./LocalStorage.js');





// Set the date we're counting down to
var countDown = 0;
var timerHandle


/*if (!getCookie("start_time")) {
    document.cookie="start_time="+Date.now();
}*/
// Update the count down every 1 second
var demo = document.getElementById("demo");

function start() {
    let _localStorage = new LocalStorage();
    _localStorage.setCookie("test","value");
    _localStorage.getCookie("test",(ck) => {console.log(ck)});   
    timerHandle = setInterval(function() {
        var start_time; //= getCookie("start_time");
        //console.log(start_time);
        countDown = Math.floor((Date.now() - start_time) / 1000);
        demo.style.setProperty('--level-color', countDown / 1500);
        var mins = ~~(countDown / 60);
        var sec = countDown % 60;
        demo.innerHTML = mins + " : " + sec;
        // If the count down is finished, write some text 
    }, 1000);
}

start();
function handleStart(event) {
    countDown = 0;
    
    start();
   
}

function handleStop(event) {
    
    clearInterval(timerHandle);
}



