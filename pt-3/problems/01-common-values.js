/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {
  // Your code here
  //Turn both obj to arrays
    const obj1Values = Object.values(obj1);
    const obj2Values = Object.values(obj2);

    // console.log(obj1Values, obj2Values)
    //Array that will hold all the commmon values btw two obj
    let commonValueArr = [];
    //Use a nesteed
    for (let obj1Ele of obj1Values){
        for(let ob2Ele of obj2Values){
            if(obj1Ele == ob2Ele){
                commonValueArr.push(obj1Ele)
            }
        }
    }
return commonValueArr;
};

const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
const bunny = {color: 'white', favoriteFood: 'carrots'};
const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
const vehicle = { wheels: 4, color: 'red'};

console.log(commonValues(cat, bunny)); // prints ['white']
console.log(commonValues(cat, human)); // prints [4, 'sushi']
console.log(commonValues(human, vehicle)); // prints [4]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
