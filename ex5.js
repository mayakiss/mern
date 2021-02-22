
loop = (value,condition,increment,output) => {
    while(condition(value)){
        output(value);
        value = increment(value);
    }return null;
};
loop(0, n => n < 10 , n => n + 1 , console.log);
/*
function condition(valuex,test){
    return test(valuex);
}
console.log(condition(3,(n) => n<10));*/