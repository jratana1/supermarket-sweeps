let start = true;     // flags that you want the countdown to start
let stopIn = 3000;    // how long the timer should run
let stopTime = 0;     // used to hold the stop time
let stop = false;     // flag to indicate that stop time has been reached
let timeTillStop = 0; // holds the display time

// main update function
function update(timer){

    if(start){  // do we need to start the timer
        stopTime = timer + stopIn; // yes the set the stoptime
        start = false;             // clear the start flag
    }else{                         // waiting for stop
        if(timer >= stopTime){     // has stop time been reached?
            stop = true;           // yes the flag to stop
        }
    }

    timeTillStop = stopTime - timer;      // for display of time till stop
    // log() should be whatever you use to display the time.
    console.log(Math.floor(timeTillStop / 10) );  // to display in 1/100th seconds

    if(!stop){
        requestAnimationFrame(update); // continue animation until stop 
    }
}