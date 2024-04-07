/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.

    The keys of the object are names of each toy, and the corresponding value is its price.\

    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy.
    You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

// LOGIC TO SOLVE PROBLEM

//   Thinking I would need two loop to obtain the highest price and lowest price
//  need to keep track of the name of the key of the highest and lowest price to be push it to the array

function leastAndMostExpensive(catalog) {
  // Your code here
//   let toys = [];

  let expensiveToyPrice = -Infinity;
  let expensiveToyName = '';

  let leastExpensiveToyPrice = Infinity;
  let leastExpensiveToyName = '';

    for (let toy in catalog){
        const priceValue = catalog[toy];

        if(priceValue > expensiveToyPrice){
            expensiveToyPrice = priceValue;
            expensiveToyName = toy;
        }

        if(priceValue < leastExpensiveToyPrice){
            leastExpensiveToyPrice = priceValue;
            leastExpensiveToyName = toy;
        }
    }
return [leastExpensiveToyName, expensiveToyName]
// console.log('EXPPrice', expensiveToyPrice)
// console.log('EXP Name Toy', expensiveToyName)
// console.log('less', leastExpensiveToyPrice)
// console.log(toys)
};

const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
