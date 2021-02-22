var get =  document.getElementsByClassName("clock");
var session = document.getElementById("AMPM");

setInterval(clock,1000);
function display(order,out){
    get[order].innerHTML = out;
}
function setAMPM(hour){
    if(hour > 12)
    hour = hour - 12;
    return hour;
}
function addZero(digit){
    if(digit<10)
    {digit = "0" + digit;}
    return digit;
}
function clock(){
    var t = new Date();
    display(0,addZero(setAMPM(t.getHours())));
    display(1,addZero(t.getMinutes())); 
    display(2,addZero(t.getSeconds()));
    if(t.getHours()>12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }
}