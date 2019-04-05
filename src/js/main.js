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

test();

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
document.write(ex);*/
console.log('Hello World');

//Простые типы

var myNumber = 2525,
    myString = 'Some string',
    myBool = true,
    myNull = null,
    myUndef = undefined;

    console.log(typeof myNumber);
    console.log(typeof myString);
    console.log(typeof myBool);
    console.log(typeof myNull);
    console.log(typeof myUndef);


// Объектные типы

var obj = {name: 'sorax'}, //Объекты
    array = [1,2,3], //Массивы
    regexp = /w+/g, //Регулярные выражения
    func = function(){}; //Функции
    //выводим типы этих переменных
    console.log(''); //пустая строка для разделения
    console.log(typeof obj);
    console.log(typeof array);
    console.log(typeof regexp);
    console.log(typeof func);

    //в объекте свойство можно изменить на другое
    obj.name = 'passive star';
    console.log(obj);
    //Можно изменить наш массив
    array[1] = 325523;
    console.log(array);
    //Строка не меняется
    console.log(myString.toUpperCase());//toUpperCase() выводит строку в верхнем регистре
    console.log(myString);//исходная строка не меняется

//Оператор присваивания
var a,b,c,d;
a = b = c = d = 5;//Читает справа на лево 



