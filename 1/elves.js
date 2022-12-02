
var fs = require('fs')
var array = fs.readFileSync('notes.txt').toString().split("\n")

console.log("Array: ", array)

let summedUp = []
let sum = 0

for (let i = 0; i < array.length; i++) {

	if (array[i] === "") {
		summedUp.push(sum)
		sum = 0
	} else {
		sum += parseInt(array[i])
	}

}

const filteredSums = summedUp.sort((a, b) => b - a)

sum = 0
for (let i = 0; i < 3; i++) {
	sum += filteredSums[i]
}

console.log("Sums: ", filteredSums)
console.log("highest num: ", filteredSums[0])

console.log("Top3: ", sum)

