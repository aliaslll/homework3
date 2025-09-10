 //1 
function getSum (numbers) {
  let sum = 0;
  for (let item of numbers) {
   sum += item;
    
  } 
  
  return sum;

}

let numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9 ];

 console.log(getSum(numbers));
 


//2

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    isloggedin: true 
}

 function userComeback () {
    if (user.isloggedin === true) {
        return user.firstname + ' ' + user.lastname;
        
    } else  {
        return false;
    }
 }

 console.log(userComeback());
 


//3
function getMaxOfnumbers(arr) {
    return Math.max(...arr);
}

let numbers2 = [10, 50, 6, 7, 8, 11, 6, 3, 9 ];
console.log(getMaxOfnumbers(numbers2));


//4
function numberType (num) {
    if (num % 2 === 0) {
        return 'this is even number';
    } else {
        return 'this is odd number';
    }
}

console.log(numberType(7));
console.log(numberType(10))
