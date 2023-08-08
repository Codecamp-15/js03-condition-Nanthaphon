let num = prompt('Enter1');
let num2 = prompt('Enter2');


if(num === null || num.trim() === '' || isNaN(num) || num2 === null || num2.trim() === '' || isNaN(num2)) {
    alert("SON OF THE BITCHH");
}else {
    alert (Number(num) + Number (num2))
}