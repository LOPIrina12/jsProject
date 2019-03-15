//task 2.1
function sum (a,b)
{
 let otvet = a +b;
 return otvet;
}
var ot = sum (5,5);
console.log (ot);


//task 2.2 Output the list of js's types

//create an empty object "TYPES"
var types = {};

//create properties with value " "
types.number = " ";
types.object = " ";
types.null = " ";
types.undefined = " ";
types.boolean = " ";

function showType(a){
let typeVariable = typeof(a);
return typeVariable;
}
//create a variable to call the function showType
var result = showType (5);
console.log(result)

for (var i in types)
{
    console.log(i);
    console.log(types[i]);
}

for (var i in types)
{
    if (i == result)
    {
        types[i]= "*";
        console.log('it is true');
    }
    console.log(i + types[i]);
}

//task 2.3 create an array and fill it with random figures from 0 to 100

//the example a default param
function createArray (sizeOfArray = 10){
    //create an array
    var arr = [];
    //fill it with random
    while (arr.length < sizeOfArray){
        var randomNumber = Math.floor(Math.random()*100)+1;
       // if (arr.indexOf(randomNumber) >-1 ) continue;
        arr[arr.length] = randomNumber;
    }
    //function getRandomInRange(min, max) {
     //return Math.floor(Math.random() * (max - min + 1)) + min;}
     //math.random - random from 0 to 100
     //math.floor - round off to lover case

    return arr;
}

var finalArr = [];
    finalArr = createArray (6);

for (var i = 0; i<finalArr.length; ++i)
{
console.log(finalArr[i]);
}

//task 2.4  remove figures below 6 from the finalArray (task 2.3)

//var testArr = [10,5,8,15,20,35,45];

//a variable for the amount of array's elements
//var numElements = testArr.length;
var numElements = finalArr.length;

for (var i = 0; i<finalArr.length; ++i)
{
    if (finalArr[i] < 6)
    { 
       //delete finalArr[i];
       var removed = finalArr.splice(i,1);
    }
}

for (var i = 0; i < finalArr.length; ++i)
{
    console.log(finalArr[i]);
}
//a variable for the amount of array's elements after removing
var numberOfElements = finalArr.length;

//a variable for a percent
var percentArr = (numberOfElements/numElements)*100;

console.log ((percentArr.toFixed()) + '% of the elements left.');

//task 2.5 lines

function findName (str)
{   
    //create an array
    var names = ["Миша","Денис","Надя","Саша"];
   
    //declare the array
    var arrNames = [];
    var pos = 0;

    for (var i = 0; i < names.length; ++i ){
        if (str.indexOf(names[i]) != -1){
            arrNames.push(names[i]);
        }
    } 
    return arrNames;
}

var arrNameFin = [];
arrNameFin = findName ('Хорошо было бы найти имя Миша. Надя тоже надо найти.');
console.log(arrNameFin)

//task 2.6 date
function countDays (today){

}

var today = new Date();
var amountDays = countDays (today);
console.log(amountDays);



