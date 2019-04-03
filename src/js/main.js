/*function test() {
    var eng = ['green', 'yellow', 'red', 'black'];
    var rus = ['зеленый', 'желтый', 'красный', 'черный'];

    do {
        var index = Math.floor(Math.random() * (eng.length - 1));
        var answer = prompt(eng[index]);
        if(rus[index] == answer) {
            alert('You are cool guy!')
        } else {
            alert('Go to scoll!')
        }
    } while (confirm('continue?'));
}

test();*/

//Запишем число 4 в переменную ex1
var ex1=4;
//Запишем число 5 в переменную ex2
var ex2=5;
//Выведем содержимое переменной ex1 на страницу
document.write(ex1+'<br />');
//Выведем содержимое переменной ex2
document.write(ex2+'<br />');
//Изменим содержимое переменной ex2
ex2=200;
//Выведем новое содержимое переменной ex2
document.write(ex2);


//Запишем в переменную ex строку 'Привет всем!'
var ex='Привет всем!';
//Выведем значение переменной ex на страницу
document.write(ex);
