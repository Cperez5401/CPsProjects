let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayFilter(arr) {
    let newArray = []

    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] % 2 === 0){
            continue 
        }
        newArray.push(arr[i])
    }
    return newArray
}

let filteredArray  = arrayFilter(integers)
console.log(filteredArray)