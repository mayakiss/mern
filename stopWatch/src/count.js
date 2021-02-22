var digit = document.getElementsByClassName("digit");
var count;
var ms = s = m = 00;
constru
function displayDigit(num,value){
digit[num].innerHTML = value;
};

function reset() {
    ms = m = s = 00;
    for (let index = 0; index < 3; index++) {
         displayDigit(index,0);
         clearInterval(count);
    }
}
function startWatch() {
    clearInterval(count);
    count = setInterval(start,10);
};
function start(){
    displayDigit(2,ms);
    ms++;
  if(ms>98){
    ms=0;
    s++;
    displayDigit(1,s);
    }
  if(s>58){
    s=0;
    m++
    displayDigit(0,m);
  }
};
function stopWatch() {
    clearInterval(count);
};