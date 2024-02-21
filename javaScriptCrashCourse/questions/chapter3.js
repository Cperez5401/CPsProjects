//1.

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayFilter(arr) {
let newArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    continue;
    }
    newArray.push(arr[i]);
}
return newArray;
}

let filteredArray = arrayFilter(integers);
console.log(filteredArray);

//2.
const nameAndAges = [
{ name: "chris", age: 22 },
{ name: "James", age: 27 },
{ name: "kobe", age: 24 },
];

function findOldestPerson(arr) {
let oldestPerson = arr[0];

for (let i = 1; i < arr.length; i++) {
    let newPerson = arr[i];
    if (newPerson["age"] > oldestPerson.age) {
    oldestPerson = newPerson;
    }
}
return oldestPerson;
}

let foundOldestPerson = findOldestPerson(nameAndAges);
console.log(foundOldestPerson);

// 3.
let arrOfStrings = ["2", "4", "5", "6", "9", 3]
let newArrOfNumbers = []

for (let i = 0; i < arrOfStrings.length; i++){
    let convertedStringValue = parseInt(arrOfStrings[i])
    newArrOfNumbers.push(convertedStringValue)
}
console.log(newArrOfNumbers)

// 4.
let arrOfObjects = [
    {price:4.2},
    {price:9.3},
    {price:7.5}
]

arrOfObjects.sort(function(a,b) {
    
})

//5.

let demoArr = [1,2,3,4,5]
function trimArray(arr) {
    let arrLength = arr.length
    const trimmedArr = arr.slice(1, arrLength - 1)
    return trimmedArr
}
console.log(trimArray(demoArr))

//6.
let shoppingCart = {
    'cheese':{
        quantity: 10,
        price:4
    },
    'milk':{
        quantity: 10,
        price:4
    }
}

function totalPrice(obj) {
    let objectKeys = Object.keys(obj)
    let sum =0
    for (let i = 0; i < objectKeys.length; i++) {
        let currentKey = objectKeys[i]
        const keyData = shoppingCart[currentKey]
        let productTotal = keyData.quantity * keyData.price
        sum = sum + productTotal
    }
    return(sum)
}

console.log(totalPrice(shoppingCart))

//7. 
let friend = {
    'rupert':{
        hobbies:['gym', 'reading', 'coding']
    }
    
}

function deepClone(obj){
    let newObj = {}
    let objectKeys = Object.keys(obj)
    for(let i = 0; i < objectKeys.length; i++){
        let currentKey = objectKeys[i]
        newObj = obj[currentKey]
    }
    return newObj
}
let newFriends = deepClone(friend)

console.log(newFriends)

//8. 
let student = {
    chem:{
        grade:9
    },
    math:{
        grade:8
    },
    history:{
        grade:100
    }
}

function findAvgGrade(obj) {
    let sum = 0 
    let numberOfSub = 0

    let listOfSub = Object.keys(obj)

    for(let i = 0; i < listOfSub.length; i++){
        let currentKey = listOfSub[i]
        let subjectGrade = student[currentKey].grade

        sum = sum + subjectGrade
        numberOfSub ++
    }

    let avgGrade = sum / numberOfSub
    return avgGrade

}

console.log(findAvgGrade(student))

//9.
function inception() {
    let numOfInvocations = 0

    return function name() {
        numOfInvocations ++
        console.log(numOfInvocations)
    }
}

const incrementer = inception()

incrementer()
incrementer()
incrementer()
incrementer()
incrementer()
incrementer()


//10.
let gradesArr = [
    {subject: 'Math', grade:10},
    {subject: 'spanish', grade:8},
    {subject: 'science', grade:4},
]

function sortByGrade(arr){
    let sortedArr = arr.sort(function (a, b) {
        return b.grade - a.grade
    })

    return sortedArr
}

console.log(sortByGrade(gradesArr))

//11.

let arrayOfStrings = ['what', 'the', 'what', 'chris perez', 'Victra verizon']

function shortenWords(arr) {
    let arrayOfLongStrings = []
    for (let i = 0; i < arr.length; i++) {
        let currentKey = arr[i]
        if (currentKey.length > 5) {
            arrayOfLongStrings.push(currentKey)
        }
    }
    return arrayOfLongStrings
}
console.log(shortenWords(arrayOfStrings))


//12. 
