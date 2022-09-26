// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Template  Red --> Green --> Refactor : 
// describe("funcName", () => {
//     it("", () => {
//       expect(input).toEqual(output)
//       expect(funcName(input)).toEqual(output)
//     })
//   })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.



describe(fibIndex, () => { 
   it("takes in a number (greater  than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
         const fibLength1 = 6
           // Expected output: [1, 1, 2, 3, 5, 8]
         const fibLength2 = 10
           // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
     expect(fibIndex(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect(fibIndex(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
   })
 })
  
//   //GOOD FAIL! YAY! :) 
//   //ReferenceError: fibIndex is not defined

// // b) Create the function that makes the test pass.

// //PsudoCode:
// //1. create a function (fibIndex)
// //2. that takes in a input (1 paramiter = index)
//   //3.  if grater than 2 (if i >2)
//     //4. estbalish variable to hold first number (a)
//     //5. establish variable to hold second number (b)
//     //6. add numbers together (a +b) and push to a 
//     //7. repeat (index) times
// //5. else opps (pick number greater than 2)


const fibIndex = (num) => {
  let fib = [1,1]
  for (i=2 ; i<num ; i++) {
    console.log([...fib, (fib[i-1] + fib[i-2]) ])  
  }
}




// // --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// // a) Create a test with expect statements for each of the variables provided.

describe("studySorter", () => {
    it("takes in an object and returns an array of the numbers sorted from least to greatest", () => {
      const studyMinutesWeek1 = {
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60
      }
      // Expected output: [15, 15, 20, 30, 30, 60, 90]
      
      const studyMinutesWeek2 = {
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65 
      }
      // Expected output: [10, 15, 20, 45, 60, 65, 100]
      expect(studySorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(studySorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  }) 
    
//   //GOOD FAIL! YAY! :) 
//   //ReferenceError: studySorter is not defined


// // b) Create the function that makes the test pass.

// //PsudoCode:
//   //1. create a function (studySorter)
//   //2. iterate over function to get values (objects.values)
//   //3.sort by number from least to greatest (.sort(function(a,b){return a-b}))
  



  const studySorter = (value) => {
    return Object.values(value).sort(function(a,b) {return a-b})
  }

// //Yay! It workes! 
// //Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("sumArray", () => {
  it(" takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
      expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect(sumArray(accountTransactions3)).toEqual([])
    })
  }) 

  //GOOD FAIL! YAY! :) 
  //ReferenceError: studySorter is not defined

// b) Create the function that makes the test pass

//PsudoCode:
  //1. create a function (sumArray)
    //2. create conditional for empty array
      //3. return empty array 
    //4. create conditional for numbers in array
      //5. create temp array
      //6. take first number (arr[0]) and add to second, push to temp
      //7. take temp number (temp[0]) and add to second number (arr[1]), push to temp
      //8. continue looping through (.map?)
      //9. return temp array

  const sumArray = (arr) => {
    let tempArr= [arr[0]]
    if (arr.length === 0) {
        return []
    } else {
      for (i=1, i <arr.length; i++;) {
        tempArr[i] = tempArr[i-1] + arr[i]
      }
    } return tempArr
  } 

  