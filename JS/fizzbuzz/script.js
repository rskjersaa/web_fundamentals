// console.log ("im connected")



// function logAllNumbers () 
    // for (i=1; i<=100; i++) 
    //  console.log (i);



// function sumAllNums() {
//     var sum = 0;
//     for (var num = 1;num <= 100; num++) {
        
    // }
    // console.log(sum)
    // return sum
// }
// console.log(sumAllNums()) 
// sumAllNums()

// function numMultiples() {
//     for(var num =1; num<=100; num++){
//         // console.log(num)
//         if(num %15==0){
//             console.log("fizzbuzz")
//         }
//         else if(num % 3 == 0){
//             console.log("fizz");
//         }
//         else if(num % 5==0){
//             console.log("buzz");
//         }
//         else { (console.log(num))
//         }
//             }
//     }

// numMultiples();

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + taco1.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}
    
// we can now get all the delicious taco facts by
taco1.tacoInfo(); // note we call this like a function because it is a function

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function
