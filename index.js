// Add your functions here
function map(sourceArray, funct) {
    // include repeated code
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        // make a call to function, input sourceArray element as arg
        newArray.push(funct(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, funct, start) {
    // copy as much repeated code
    let total
    let i 
    if (!!start) {
        // if a start num is present
        total = start
        i = 0
    }
    else {
        // if start is not present
        total = sourceArray[0]
        i = 1
    }
    for (i; i < sourceArray.length; i++) {
        total = funct(sourceArray[i], total)
    }
    return total
}