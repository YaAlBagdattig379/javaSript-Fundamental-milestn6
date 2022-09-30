// example: 1
const firstName = `rabiul`;
const secondName = `miah`;
//console.log(`this is ${firstName}  ${secondName}`);

// example: 2 >>>>>>>>>>>> with problems with multiple line string;
// const address = "name : rabiul Miah , po-ashokgram ,
//   ps-gangarampur , pin-733141;";

//  example : 3 >>>>>>>>>> with tactic multiple line string
 const address =  `name : rabiul Miah , po-ashokgram ,
 ps-gangarampur , pin-733141;`;
//  console.log(address);


//  example : 4 >>>>>>>>>> old multiple line string technique by double invirate comma ""

const vil = 'vill-DomuthatFaridPur,po-Ashokgarm,ps-GangaramPur ,\n' + 
'pin-733141,\n'; +
'dist-DakhsinDinajPUr,\n' +
'state-west bengal,\n' +
'region- India' ; 
// console.log(vil);



// exaple : 5  with "template literals by dynamic system"
const first = "rabiul";
const second = "miah";
console.log(`${first}${   second  + 22 * 22}`);