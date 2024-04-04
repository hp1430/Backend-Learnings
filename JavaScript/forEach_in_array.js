// forEach
let players=["Virat", "Rohit", "Jadeja", "Hardik"]
players.forEach(player=>console.log(player))

// map
arr=[1,2,3,4,5,6]
cube=arr.map(num=>num**3)
console.log(cube)
console.log(arr)

//filter
arr1=[1,2,3,4,5,6,7,8,9,10]
even=arr1.filter(num=>num%2==0)
console.log(even)
console.log(arr1)

//reduce
sum=[1,2,3,4,5,6,7,8,9].reduce((curr, next)=>curr+next)
console.log(sum)