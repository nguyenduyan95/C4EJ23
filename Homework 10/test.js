const arr = [];
const add = (num) => arr.push(num);

function findAll(total) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                console.log(`[${arr[i]},${arr[j]}]`)
            }
        }
    }
    return null
}

add(1);
add(3);
add(5);
add(7);
let temp = findAll(8)
console.log(temp)

console.log(arr.includes(3))
console.log(arr.indexOf(3))
console.log(arr[arr.indexOf(3)])
