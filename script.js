
/* 
let fruits = ['Mango','Pearl','Grape','Strawberry','Cashew'];

fruits.splice(2,2);// starts at index 2 and removes two elements
fruits.pop();
fruits.push('Guava');// Add an element to the end of the array
fruits.unshift('Apple');// Add an element to the beginning of the array


  console.log(fruits);
 

for( let i = 0; i <= fruits.length-1; i++){
    document.write(
      "This fruit is " +
        fruits[i] +
        '<h2>'
    );

};
 */

let result = document.getElementById('result');
let generateBtn = document.getElementById("generate");
let container = document.getElementById('container')


generateBtn.addEventListener('click', () =>{
    let color = Math.random().toString(16).slice(2, 8);
    color = "#" + color;
    result.innerText = color;
    //result.style.color = color;
    result.style.fontWeight = "800";
    container.style.backgroundColor = color;  
})

console.log(Math.random())

