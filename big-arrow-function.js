// 1 normal single paramer  by arrow function 
const fourthTimes = (num) => num * 4;
const calc = fourthTimes(4);
console.log(calc);  


// 2 how to write single paratmer in arrow function 
// 2 how to write single paratmer in arrow function 

const fiveTimes = num => num * 5;
const calc2 = fiveTimes(5);
console.log(calc2)



// 3 how to write without paramter in  arrow function 
// 3 how to write without paramter in  arrow function
 const getName = () => "Brandon Sam"
 const name = getName();
 console.log(name);





// 4 how to write multiple arrow function line 
// 4 how to write multiple arrow function line 
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x + y;
    return sum * diff;
} 
const  total = doMath(3,5);
console.log(total);