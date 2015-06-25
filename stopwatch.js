var time = 0;
var running = 0;


function startPause(){
    //alert("hi");
    if(running == 0){
        running =1;
        increment();
        document.getElementById("startPause"). innerHTML = "Pause";
    }else{
        running = 0;
        document.getElementById("startPause"). innerHTML = "Resume";
    }
}
function reset(){
    running = 0;
    time = 0;
    document.getElementById("startPause"). innerHTML = "start";
    document.getElementById("output").innerHTML = "00:00:00";

}

function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var sece = Math.floor(time/10) % 60;
            var tenths = time % 10 ;

            if (mins < 10){
                mins = "0" +mins;
            }
            if(sece < 10){
                sece = "0" + sece;
            }
            document.getElementById("output").innerHTML = mins + ":" + sece + ":" + "0" + tenths;
            increment();
        }, 100);
    }

}