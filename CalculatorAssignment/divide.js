// Requirements:
// function isEvenOrOdd(val:number){
//     const ramainder = val % 2;
//     console.log(`${val} / 2 = ${ramainder}`);
//     if(ramainder % 2){
//         return "Your number is Even"
//     }else{
//         return "You number is Oddd"
//     }
// }
// let result = isEvenOrOdd(10)
// console.log(result);
function isEvenOrOdd(num1, num2) {
    let ramainder = num1 / num2;
    console.log(`${num1} / ${num2} = ${ramainder}`);
    return ramainder;
}
export { isEvenOrOdd };
