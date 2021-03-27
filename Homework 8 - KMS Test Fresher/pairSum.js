
const arr = []

const add = (num) => arr.push(num);

const findAll = (sum) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < arr.length; k++) {
            if (arr[i] + arr[k] === sum) {
                console.log(`[${arr[i]},${arr[k]}]`)
                count++;
           }
        }
    }
    !count ? count = null : count;
    return count;
}

add(3);
add(1);
add(7);
add(5);

let result = findAll(8);
console.log(result);