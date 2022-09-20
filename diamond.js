console.log("Hello World!");

let x= 5;
console.log(x);
isEvenOrOdd(x);

function isEvenOrOdd(numberToCheck) {
  const isEven = numberToCheck % 2 == 0;
  
if (isEven)
  return console.log(`The input number ${numberToCheck} is even`);
  
else x = x + 1;
  console.log('Input changed to ' + x)

//upper
for (let a = 1;a <= x;a++){
  
  for (let s = (x - a); s <= x - a; s++){
    str= ' ';
    console.log(str.repeat(s),"* ".repeat(a))
  }
}
//lower
for (let a = 1, z = (x - a); a <= x - 1; a++, z--) {
  console.log(str.repeat(a),"* ".repeat(z));
  }
}


