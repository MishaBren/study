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

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
        console.log(result);
    }
    return result;
}
console.log(pow(2, 9));

function powTwo(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powTwo(x, n - 1);
    }
}
console.log(powTwo(2, 9));