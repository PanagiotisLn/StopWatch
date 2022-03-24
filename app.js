let start = document.getElementById('start');
let stoop = document.getElementById('stop');
let reset = document.getElementById('reset');
let seconds = 0;
let tenths = 0;
let sec = document.getElementById('seconds');
let tns = document.getElementById('tenths');
let intervalId;




function incrementTenths(){
    if (tenths < 100){
        tenths +=1 ;
    }else {
        tenths = 0;
        seconds += 1;
    }
    if (tenths <10){
        tns.innerHTML = '0' + tenths;
    }else{
        tns.innerHTML = tenths;
    }
    
    if (seconds <10){
        sec.innerHTML = "0" + seconds;
    }else{
        sec.innerHTML = seconds;
    }
    
}
function startTimer() {
    intervalId = setInterval(incrementTenths, 10);
    start.removeEventListener('click',startTimer);
}
function stopTimer(){
    clearInterval(intervalId);
    start.addEventListener('click',startTimer);

}
function resetTimer(){
    clearInterval(intervalId);
    seconds = 0
    tenths = 0;
    sec.innerHTML = "00";
    tns.innerHTML = "00";
    start.addEventListener('click',startTimer);
}

start.addEventListener('click', startTimer);
stoop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);



    

