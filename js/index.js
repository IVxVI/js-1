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