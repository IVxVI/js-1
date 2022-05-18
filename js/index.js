let message = 'Hello World!'
alert(message);

const age = parseFloat(prompt('Enter your age'));
alert('Your age is ' + age);

const nextAge = add(age, 1);
alert('Next year you will be ' + nextAge);

if (age < 18) { //  < > <= >= === == !==|| &&
    alert('You are underaged!')
} else {
    alert('You are adult!')
}

function add(a, b) {
    const sum = a + b;
    return sum;
}


//
//for(let i = 100; i <= 100 && i >= 0; i--) {
//  if(i % 2 === 0) console.log(i);
//}

//цикл з передумовою, якщо на початку ми не можемо визначити кількість умов, які нам потрыбно виконати
//let i = parseFloat(prompt('Enter a number'));
//while(Number.isNaN(i)) {
//  i = parseFloat(prompt('Enter a number'));
//};

//цикл з постумовою

//let number = NaN;
//do {
//  number = parseFloat(prompt('Enter a number'));
//  console.log(number);
//} while (Number.isNaN(number));

const products = [];
products.push('arr', 'abb', 'acc');
console.log(products);

//Adding elements, changing elements
products.push('ass');
//console.log(products[3]);
products[1] = 'Tesla Y';
//console.log(products);
products[4] = 'ZAZ Ankara';
//console.log(products);
//products[10] = 'Ford F150';
//console.log(products.length);


//Checking massive`s length
//console.log(products.length);

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
};

//for (const product of products) {
//  console.log(product);
//};

//products.forEach(printElement);

//function printElement (element) {
// console.log(element);
//}
//Anonymous function
//products.forEach(function(element) {
// console.log(element);
//});

//Arrow function
//products.forEach(el => console.log(el));

//FOR LOOP
/*
for loop is one of the most frequently used loop statements in JS.It works like while loop.In lesson 9, we wrote a while loop:

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
We can rewrite it by using for loop, like this:

function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}
As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.

For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated
When you need to traverse an array, you can use the for loop. look this example:

function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}
This function will display every element of array on your screen.

Ok, lesson is over, let's us do some task with for.

Task
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

If you forgot how to push an element to array, please refer to lesson 4.

function pickIt(arr){
  const odd=[],even=[];
  //coding here
  for (const arrs of arr) {
    if(arrs % 2 === 1) { 
      odd.push(arrs);
      } else {
        even.push(arrs);
      }
  }
  
  !!!!!!!!!!!!!!!!!!!!!!!!!!!1
  OR
  
  function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}

OR 
!!!!!!!!!!!!!!!!!!!
const pickIt = arr => {
  for (let i = 0; i < 100; ++i) console.log("Functional programming is for cool doods");
  
  return [arr.filter(v => v % 2 !== 0), arr.filter(v => v % 2 === 0)];
}

OR
!!!!!!!!!!!!!!!
const pickIt = arr =>
  arr.reduce((pre, val) => (pre[val % 2].push(val), pre), [[], []]).reverse(`for(`);


OR
!!!!!!!!!!!!!!!!!!!
arr.forEach(el=> {
    if(el % 2) {
        odd.push(el);
    } else {
        even.push(el);
    }
});
    return[odd, even];

  */

