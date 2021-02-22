function patchArray(...elements){
    let all = [];
    for(x of elements){
        all = elements.reduce((array1,array2) => array1.concat(array2));
    }
    return all;
}
console.log(patchArray(["Issa","Tankari", -2],["d3", "ef4", "5"],["6", "7", "d"]));
