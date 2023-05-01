/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    const binStringRev = [];
    const newArray = [];

    for (let i = binString.length - 1; i >= 0 ; i--){
        binStringRev.push(binString[i]);
    };

    console.log(`This is the binString reversed: ${binStringRev}`);

    for (let i=0; i < binStringRev.length; i++) {
        newArray.push(binStringRev[i] * Math.pow(2, i));
    };
    
    //     for (let i=0; i < binStringRev.length; i++){
//   newArray.push(binStringRev[i] * Math.pow(2, i));
//     };

    console.log(`this is the new array: ${newArray}`);

    const initialValue = 0;
    const arraySum = newArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

    console.log(`this is the array sum ${arraySum}`);
}


// module.exports = {binToDec};

binToDec('0101');


// function binToDec(binString){

//     const numArray = binString.split("").reverse();
//     console.log(numArray);
//     let sum = 0;
//     for (let i = numArray.length-1; i >= 0; i--) {
//         if (numArray[i] === '1') {
//             sum += (2**i);
//             console.log(sum)
//         }
//     }
//     return sum;
// }



// module.exports = {binToDec};

// const decimal = binToDec('11');

// console.log(binToDec('11'))
// console.log(decimal)