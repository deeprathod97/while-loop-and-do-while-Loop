const numberToCheck = 17; 
let divisor = 2;
let isPrime = true;

while (divisor < numberToCheck) {
    if (numberToCheck % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
}

if (isPrime) {
    console.log(numberToCheck + " is a prime number.");
} else {
    console.log(numberToCheck + " is not a prime number.");
}
