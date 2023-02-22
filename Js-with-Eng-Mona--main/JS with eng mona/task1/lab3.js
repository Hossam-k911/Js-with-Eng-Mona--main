// Problem 1
// - Create a function that takes an array of numbers and return both the
// minimum and maximum numbers, in that order.

Numbers = [1];
console.log(Math.min(...Numbers), Math.max(...Numbers));

/////////////////////////

//Problem 2
// - Write a regular expression that matches a string if it contains at least
// one digit.

let exp = (RegExp = /\d/.test("M0na"));
console.log(exp);

////////////////////////

//problem 3
// - Create a function that takes two numbers as arguments ( num , length )
// and returns an array of multiples of num until the array length
// reaches length


function multiplifier(num, length) {
  let Array = [];

  for (let i=0;i<length;i++ ){
    if (Array.length !== length) {
        Array[i]=(i+1)*num
      }
  }
  return Array;
}


console.log(multiplifier(17,6))


/////////////////////////////////

//problem 4
// Create a function that squares every digit of a number

var array=["1","2","3","4"]
array.split('');
array.map((num)=>{
    return num*num;
})
console.log(array)