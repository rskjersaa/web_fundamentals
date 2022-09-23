// console.log("working");

// function alwaysHungry(arr) {
//     var food = 0;
//         for(var i=0; i,arr.length; i++){
//             if(arr[i]=="food"){
//             console.log("yummy");
//             }
//     }
//     if (food ==0) {
//         console.log("i'm hungry");
//     }

// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);

function alwaysHungry(arr) {
    var foodCount = 0;
        for(var i=0; i<arr.length; i++){
            if(arr[i]=="food"){
            console.log("yummy");
            }
    }
    if(foodCount == 0) {   
    console.log("i'm hungry");
    }
}

alwaysHungry([3, 5, 9, 7, 4]);

// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr,cutoff){
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff)
        filteredArr.push(arr[i]);
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
        for(var i=0; i<arr.length; i++){
        sum += arr[i];
        }
        var avg = sum / arr.length;
    // calculate the average
    console.log(avg)
    var count = 0
        for(var i =0; i<arr.length; i++){
        if(arr[i]>avg){
        count ++;
        }
    }// count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    // your code here
    var left = 0;
    var right = arr.length - 1;
    while(left<right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr [right] = temp;
        left++;
        right--;
    }
    
    return arr;
}
    
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// // Write a function that will return an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    while(fibArr.length<n) {
        var back1 = fibArr[fibArr.length - 1];
        var back2 = fibArr[fibArr.length - 2];
    fibArr.push (back1 + back2);
    }
    return fibArr;
}
    
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
