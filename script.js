'use strict';

document.addEventListener('DOMContentLoaded', () => {   //загрузка скрипта після DOM дерева


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const
        adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        comedy = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]'); //звертання через тип
    addForm.addEventListener('submit', (event) => {      //submit відправка форми, event-подія
        event.preventDefault();                          //скидання стандартної поведінки браузера
        let newFilm = addInput.value;                  //прийняти введені значення користувача
        const favorit = checkBox.checked;                //провірка чекбокса на буль

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorit) {                //перевірка на буль
                console.log('Додати Улюблений фільм');
            }

            movieDB.movies.push(newFilm);                    //запушити значення
            sortArr(movieDB.movies);                         //сортувати
            createMovieList(movieDB.movies, movieList);      // створити ліст з нуля
        }
        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();           //перебор. видалення реклами
        });

    };

    const makeChange = () => {
        comedy.textContent = 'драма';      //заміна тексту
        poster.style.backgroundImage = 'url("./img/bg.jpg")';  //заміна бекграунда
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    // console.log(poster.innerHTML); // отримуємо html

    function createMovieList(film, parent) { // заміна і створення list
        sortArr(film)
        parent.innerHTML = "";
        film.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class= "delete" ></div>
            </li > `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();                         // звертання для батька
                movieDB.movies.splice(i, 1);                        //видалення з масиву(значення, кількість)
                createMovieList(movieDB.movies, movieList);      // створити ліст з нуля

            });
        });

    }


    deleteAdv(adv);
    makeChange();
    createMovieList(movieDB.movies, movieList);

});

