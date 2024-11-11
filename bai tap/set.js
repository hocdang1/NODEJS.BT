const mySet = new Set([1,2,3,4,5]);

// Thêm các giá trị vào Set
mySet.add(5);
mySet.add(5);
mySet.add(5); 
mySet.add(5);

console.log(mySet.size); // Output: 3

// Kiểm tra xem Set có chứa giá trị hay không
console.log(mySet.has(2)); 
console.log(mySet.has(5)); 

// Xóa một phần tử
// mySet.delete(2);
// console.log(mySet); 



let myArray = [...mySet];


let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];


let sum = firstElement + lastElement;


console.log(`The sum of the first and last elements is: ${sum}`);