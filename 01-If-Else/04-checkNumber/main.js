// let input = Number(prompt("fuck"))
// if(typeof(input) === "Number")


//     if (input > 0) {
//         "Positive number"
//     }else if (input = 0) {
//         "Zero"
//     }else if (input < 0) {
//         "Negative"
// }else {
//     "Invalid number"
// }



let num = prompt('Enter number 1');
// Input : null, '', '           ', "qseqwd" , "12"
// null === null [ok]
// '', '        ', => str.trim() == ''
// "qwerqwre" => isNaN

// console.log(num);

// IF-ELSE

// Guard-Clause
// null || '       ' || "asdadada"
if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (+num > 0) {
    alert('Positive Number');
} else if (+num == 0) {
    alert('Zero');
} else if (+num < 0) {
    alert('Negative Number');
}

// null || '       ' || "asdadada"
// if (num.trim() === '' || num === null || isNaN(num)) {
//     alert('Invalid Number');
// }
