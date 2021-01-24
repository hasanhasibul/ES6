function add(num1,num2){
    // console.log([...arguments])
    let sum = 0;
    // for (let index = 0; index < arguments.length; index++) {
    //     const element = arguments[index];
    //     sum = sum + element ;
    // }
    const numbers = [...arguments]
    numbers.map((x) =>{
        sum = sum + x ;
    });
    return sum;
}
const result = add(4,5,4,6,8,9,10);
console.log(result);