
//Q1 ans
function is_array(inp){
    if(Array.isArray(inp))
        return true
    return false
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Q2 ans
function array_Clone(arr){
    return [...arr]
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Q3 ans
function first(arr, num = 1){
    return arr.slice(0, num)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Q4 ans
myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","))
console.log(myColor.join(","))
console.log(myColor.join("+"))

//Q5 ans
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3,'a', 2, 4, 9, 3]
function getMostFrequentElement(arr){
    temp = {}
    max = 0
    arr.forEach(el => {
        if(el in temp){
            temp[el] += 1
        } else {
            temp[el] = 1
        }
        if(max < temp[el]){
            max = el
        }
    })
    return `${max} ( ${temp[max]} times )`
}
console.log(getMostFrequentElement(arr1))
