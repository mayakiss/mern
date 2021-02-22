function reverseArray(array){
    let length = array.length;
    let inverseArray = [];
    let i = length-1;
    for(let x of array){
        console.log(x);
        inverseArray[i]=array[x];
        i--;
    }
    return inverseArray;
}
function reverseInitialArray(array){
    let tmp = [];
    let length = array.length;
    for(var i = 0; i<length; i++){
        let index = array.length - 1;
        tmp.push(array[index]);
        array.pop();
    }
    return array.concat(tmp);
}
function remove(array,tmp,index){
    return array.slice(index).concat(tmp).slice(index-1);
}
console.log(reverseInitialArray([1,25,43,34,15,45,67,89,00,87,54,3357,898,65,77]));