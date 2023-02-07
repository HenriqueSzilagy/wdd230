/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
     
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


    function add(number1, number2){
        const sum = number1 + number2
        return sum
    }

    function addNumbers(){
        const firstNumber = parseFloat(document.querySelector("#addend1").value);
        const secondNumber = parseFloat(document.querySelector("#addend2").value);
         
        const sum = add(firstNumber,secondNumber)
         document.querySelector("#sum").value = sum
        
        
       
             
    }
    document.querySelector("#addNumbers").addEventListener('click', addNumbers)



    
    let subtract = function(number1, number2) {
        const sub = number1 - number2
        return sub;
    };
    let subtractNumbers = function() {
        const firstNumber = parseFloat(document.querySelector("#minuend").value);
        const secondNumber = parseFloat(document.querySelector("#subtrahend").value);
        
        const sub = subtract(firstNumber,secondNumber);
         document.querySelector("#difference").value = sub
    }
    document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers)


    const multiply = (number1, number2) => {
       
       const mult = number1 * number2;
       return mult
    }

    
    const multiplyNumbers = () => {
        
       
        const firstNumber = parseFloat(document.querySelector("#factor1").value);
        const secondNumber = parseFloat(document.querySelector("#factor2").value);
        const mult = multiply(firstNumber,secondNumber);
        document.querySelector("#product").value = mult
    }
    document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)

    const divide = (number1, number2) => {
       
    const div = number1 / number2;
    return div
    } 

    const divideNumbers = () => {
        
       
    const firstNumber = parseFloat(document.querySelector("#dividend").value);
    const secondNumber = parseFloat(document.querySelector("#divisor").value);
    const div = divide(firstNumber,secondNumber);
    document.querySelector("#quotient").value = div
    }
    document.querySelector("#divideNumbers").addEventListener('click', divideNumbers)

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
    let currentDate = new Date(); 
// Step 2: Declare a variable to hold the current year
    let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
    currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
    document.getElementById('year').innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
    document.getElementById('array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
    const odds = numbers.filter(checkOdds);

    function checkOdds(odd) {
    if (odd % 2 === 1){
        return odd
    }
    else{
        
    }
    }
    document.getElementById('odds').innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = numbers.filter(checkEvens);

    function checkEvens(even) {
    if (even % 2 === 0){
        return even
    }
    else{
        
    }
    }
    document.getElementById('evens').innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
    let sum = numbers.reduce((total, current) => total + current);
    document.getElementById('sumOfArray').innerHTML = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
    let double = numbers.map(z => z * 2 );
    document.getElementById('multiplied').innerHTML = double;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let sumOfMultiplied = double.reduce((total, current) => total + current);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;