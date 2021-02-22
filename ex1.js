function range(start,end,jump){
    let num_range = [];
if(start < end ){
  	while(start<=end){
    num_range.push(start);
    start += jump;
}
}else{
    while(start>=end){
    num_range.push(start);
    start += jump;
        if(start<end){
            return num_range;
        }
    }
}
    return num_range;
}
function rangeSum(...numbers){
    let array = numbers[0].slice();
    let sum = 0;
    for (let number of array) {
          sum = sum + number;
    }
    return sum;
}
console.log(rangeSum(range(1,10,1)));
//console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55