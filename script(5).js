// console.log(document.body); //доступ до тегів
// console.log(document.documentElement);   // доступ до всього HTML
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('current').parentNode.parentNode); //доступ от ребенка к родителю

// console.log(document.querySelector('[data-current= "3"]').nextSibling);
// console.log(document.querySelector('[data-current= "3"]').previouSibling);
// console.log(document.querySelector('[data-current= "3"]').nextElementSibling);

// доступ до всіх елементів body
// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

// -------------------------Рекурсия----------------

// пиклад 1

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//         console.log(result);
//     }
//     return result;
// }
// console.log(pow(2, 9));

// приклад 2         ------------РЕКУРСИЯ----

// function powTwo(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * powTwo(x, n - 1);
//     }
// }
// console.log(powTwo(2, 9));

// --------------------------

// ЗАДАЧА

// let students = {
//   js: [
//     { name: 'John', progres: 100 },
//     { name: 'Ivan', progres: 60 },
//   ],
//   html: {
//     basik: [
//       { name: 'Peter', progres: 20 },
//       { name: 'Ann', progres: 18 },
//     ],
//     pro: [{ name: 'Sam', progres: 10 }],
//   },
// }

// //  Приклад 1

// function getTotalProgressByIteration(data) {
//   let total = 0
//   let students = 0

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progres
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progres
//         }
//       }
//     }
//   }
//   return total / students
// }
// console.log(getTotalProgressByIteration(students))

// // Приклад 2

// function getTotalProgressByRecursion(data) {
//   if (Array.isArray(data)) {
//     let total = 0

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progres
//     }
//     return [total, data.length]
//   } else {
//     let total = [0, 0]

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecursion(subData)
//       total[0] += subDataArr[0]
//       total[1] += subDataArr[1]
//     }
//     return total
//   }
// }
// const result = getTotalProgressByRecursion(students)

// console.log(result[0] / result[1])

// ----------- FOR OF ----  FOR IN -------------

// function a (data) {
//  let num = [5,6,9,8,8];

// for (let i of num) {
//     console.log(i)
// }
// }
// a()

// function a (data) {
//  let num = [5,6,9,8,8];

// for (let i in num) {
//     console.log(i)
// }
// }
// a()

// -------------------------------

// let c = [1, 2, 3]

// function a(data) {
//   if (Array.isArray(data)) {
//     let total = 0

//     for (let i = 0; i < data.length; i++) {
//       total += data[i]
//     }
//     return [total, data.length]
//   }
// }

// console.log(a(c))

// ЗАДАЧА
function factorial(n) {
    if (n) {
        result += n * (n - 1)
        return n
    } else {
        return n * factorial()
    }
}

console.log(factorial(5))

function pow(n) {
    let result = 0
    for (let i = n; i >= 1; i--) {

        result += n * (n - 1)

        console.log(result)
    }
    return result
}
console.log(pow(5))


function factorial(n) {
    var result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}

console.log(factorial(5))

const factInt = (n) => {
    let res = 1; // итоговый результат

    for (let i = 1; i <= n; i++) {
        res = res * i;
        console.log(res)
    }
    return res;
}

console.log(factInt(5))