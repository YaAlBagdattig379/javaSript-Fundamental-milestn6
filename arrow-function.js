// exm : 1 normal function declaration
function bankAccount(first,second){
    return first + second;
}
const number = bankAccount(10,20);
console.log(number);   //  30



// exm : 2 too normal  function declaration
const calculation = function calculation(first,second){
    return first + second;
}
const calc = bankAccount(20,30);
console.log(calc); // 50


// exm : 3  anonymous function declaration
const calculation3 = function(first,second){
    return first + second;
}
const calc3 = calculation3(30,30);
console.log(calc3);   // 60


// exm : 4  <<<<<<  arrow  function declaration >>>>>>>>
const calculation4 = (first,second) => first + second;
const calc4 = calculation4(40,45);
console.log(calc4);   // 60