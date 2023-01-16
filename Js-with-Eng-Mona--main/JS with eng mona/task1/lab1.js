// 1-	Create a function that takes two numbers as arguments and returns their sum.


function sum (num1,num2){
    return num1+num2

}

console.log(sum (10,5))

//2-	Write a function that takes the base and height of a triangle and return its area.
//•	The area of a triangle is: (base * height) / 2


function area (base,height){
    
    let area = (base*height)/2
    return area;

}
console.log(area(7,4));


//3- 3-	Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSmth(str){
    return "Something"+ " "+str
    
}
console.log(giveMeSmth(" is wrong with You ?"));
