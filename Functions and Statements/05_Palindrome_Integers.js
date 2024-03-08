function solve(numbers) {
    isPalindrome(numbers)
}
    
function isPalindrome(numbers) {
    numbers.forEach(number => number.toString() === number.toString().split("").reverse().join("") ? console.log(true) : console.log(false));
}

solve([123,323,421,121]);