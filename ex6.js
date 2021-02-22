/*
function every(array,test){
    for(x of array){
        console.log(test(x));
        if(!test(x)){
            return false;
        }
    }
    return true;
}*/
//console.log(every([10,342,556],n => n = 100));
function everySome(array,test){
    return !array.some(element => !test(element));
}
//some(element => !test(element)) return false if the value is correct so  that some continue to check through the array
//if it finds a value that is not true to the test() it rerurns true end stop.
//!array...... to reverse the returned value of some()
console.log(everySome([0.2,10,56],n => n < 100));
  