//! Task1 -------------------------

// function getSumOfNum (num1, num2) {
//     console.log(num1 + num2);
// }

// getSumOfNum(5, 10)

//! Task2 -------------------------

// const returnGlobalWord = (str) => {
// const result = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(result);
// } 

// returnGlobalWord('dima')

//! Task3 -------------------------

// function getNewMass (arr) {

//    for (let i = 0; i < arr.length; i++) {
//           arr[i] += 1
//     }
//     console.log(arr ); 
// }
// const arr = [1, 2, 3, 4, 5]
// getNewMass(arr)

//! Task4 -------------------------

// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
 
//   console.log(countChar('Dmitrii', 'i')); 

//! Task5 -------------------------

// function getSumOfElem (arr) {

//     let sum = 0

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) {
//              sum += arr[i]
             
//         }
//     }
//     return sum
// }

// const arr = [1, 2, 3, 4, 5, 6, 18]
 
// console.log (getSumOfElem(arr));

//! Task6 -------------------------

// function getDuplicateLetter (str) {
//     let duplicatedLetter = ''

//     for(let i = 0; i < str.length; i ++) {
//         duplicatedLetter += str[i] + str[i]
//     } 
//     return duplicatedLetter
// }

// let str = 'Dima Aidar Ylyk Kalys'
// let result = getDuplicateLetter(str)
// console.log(result);

//! Task7 -------------------------

// function replaceNegativeNumtoZero (arr) {
//     let newArr = [] 
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr

// }

// const arr = [1, -5, 6, -10, 7, - 3, 17] 
// console.log(replaceNegativeNumtoZero(arr))

//! Task8 -------------------------

// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(isPrime(17));
//   console.log(isPrime(1));

//! Task9 -------------------------

    // function getPerfecSqareofArray (arr) {
    //     let newArr = []
    //     for(let i = 0; i < arr.length; i++) {
    //         newArr.push(arr[i] * arr[i])
    //     }
    //     return newArr
    // }
    // const arr = [1, 2, 3, 4, 5]
    // let result = getPerfecSqareofArray(arr)
    // console.log(result);

    //! Task10 -------------------------

    // function filterCompleted(arr) {
    //     let completedArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //       if (arr[i].completed === true) {
    //         completedArr.push(arr[i]);
    //       }
    //     }
    //     return completedArr;
    //   }

    //   let tasks = [
    //     { title: "Изучить JavaScript", completed: true },
    //     { title: "Сделать проект на JavaScript", completed: false },
    //     { title: "Изучить React", completed: false },
    //     { title: "Написать статью про JavaScript", completed: true },
    //   ];

    //   console.log(filterCompleted(tasks));

        //TODO Task11 -------------------------
        
        // function isAnagram(str1, str2) {
        //     let newStr1 = str1.replace(/\s/g, "").toLowerCase();
        //     let newStr2 = str2.replace(/\s/g, "").toLowerCase();
          
        //     let sortedStr1 = newStr1.split("").sort().join("");
        //     let sortedStr2 = newStr2.split("").sort().join("");
    
        //     return sortedStr1 === sortedStr2;
        //   }
          
       
        //   console.log(isAnagram("rail safety", "fairy tales")); 
        //   console.log(isAnagram("hello", "world")); 
    
           //TODO Task12 -------------------------

        //    function getCommonElements(arr1, arr2) {
        
        //     let commonElements = [];
          
       
        //     for (let i = 0; i < arr1.length; i++) {
        //       let currentElement = arr1[i];
          
        
        //       if (commonElements.includes(currentElement)) {
        //         continue;
        //       }
          
        // 
        //       if (arr2.includes(currentElement)) {
        //         commonElements.push(currentElement);
        //       }
        //     }
          
        //     return commonElements;
        //   }
          

        //   let arr1 = [1, 2, 3, 4];
        //   let arr2 = [3, 4, 5, 6];
        //   console.log(getCommonElements(arr1, arr2)); 

           //! Task13 -------------------------

         //   function reverseStrings(arr) {
         //    let reversedArr = [];
          
         //    for (let i = 0; i < arr.length; i++) {
         //      let str = arr[i];
         //      let reversedStr = '';
          
         //      for (let n = str.length - 1; n >= 0; n--) {
         //        reversedStr += str[n];
         //      }
          
         //      reversedArr.push(reversedStr);
         //    }
          
         //    return reversedArr;
         //  }

         //  let arr = ['hello', 'Dima', 'javascript'];
         // console.log(reverseStrings(arr));

         //! Task14  -------------------------

         // function reverseStrOfArr (arr) {
         //    let newArr = []
         //    for(let i = 0; i < arr.length; i++) {
         //       let str = arr[i];
         //       let reversedStr = '';

         //       for (let n = str.length - 1; n >= 0; n--) {
         //          reversedStr += str[n];
         //        }

         //        newArr.push(reversedStr);

         //    }
         //    return newArr
         // }

         // const arr = ['Dima', 'Aidar', 'Ylyk', 'Nadira', 'Kalys', 'kcuf']

         // console.log(reverseStrOfArr(arr));




  


