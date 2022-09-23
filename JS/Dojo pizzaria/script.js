function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven ("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);

console.log (p1);

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log (p2);

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p3 = pizzaOven ("thin crust", "pesto", "parmesean", ["artichoke hearts", "tomatoes"]);

console.log (p3);
