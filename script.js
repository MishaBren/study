// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');
// btn.onclick = function () {// простий клік
//     alert('click')
// };

// btn.onclick = function () {// такий запис відміняє перший клік
//     alert('second click')
// }
// -------------------------------------- правильний клік-----

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('second click');
// });

// ------------------------------Миша----------------

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // alert('click');
// });
// ---------------------------
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target, i);
//     i++
//     if (i == 5) {
//         btn.removeEventListener('click', deleteElement);
//     }
// }
// btn.addEventListener('click', deleteElement);

// ------------------------

// // let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     // console.log(e.type);
// }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


// const link = document.querySelector('a');

// link.addEventListener('click', function (event) {
//     event.preventDefault();    //----------------стоп працюємо по іншому
//     console.log(event.target);
// })

// const btnS = document.querySelectorAll('button');

// btnS.forEach(element => {
//     // element.addEventListener('click', deleteElement); //для всіх Button
//     element.addEventListener('click', deleteElement, { once: true }); //спрацьовує тільки один раз

// });
