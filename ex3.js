function arrayToList(array) {
    let list = {};
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
      console.log(list);
    }
    return list;
  }
console.log(arrayToList([0,1,3,4,6,6]));