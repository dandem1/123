// let num = +prompt("Введіть число: ");

// let i = 1;

// while(i <= num){
//     let rnd = Math.floor (Math.random() * 100);
//     console.log("Random number_" +i, ":", rnd);
// i++
// }

// let max = 0;
// let num;

// do{
// num = +prompt("Введіть число: ");
// if(max < num){
// max = num;
// }
// } while(num != 0);

// alert("Max number of enter: " + max)

// let i = 0;
// for (let i = 0; i < 100; i++) {

// console.log (i);
// }

// let num = +prompt("Enter number: ");

//     let sum = 0;

//         console.log (`Number n: ${num}`);

//             for (let i = num; i > 0; i--){
//                 if (num % i == 0 ) {
//                     sum += i;
//                 }
//             }

//             console.log (`Sum : ${sum} `);

let a = +prompt("Enter number a: ");
let b = +prompt("Enter number b: ");
    let count = 0;
        console.log(`Number a: ${a}`)
        console.log(`Number b: ${b}`)
            for(let i = a; i<= b; i++){
                if ((i**3 % 10) == 4 || (i ** 3 % 10) == 9) {
                    count ++;
                }
            }

            console.log (`Count: ${count}`)