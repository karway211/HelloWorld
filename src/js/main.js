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

var element = document.querySelector('h1');
element.innerText = 'Привет мир';
console.log('hell');


/*создаем элемент */
var ourElement;
ourElement = document.createElement('div');
ourElement.style.backgroundColor = 'red';
ourElement.style.height = '100px';
ourElement.style.outline = '1px solid green';
ourElement.innerHTML = '<div><h1>Мы создали элемент</h1>';
ourElement.className = 'test';


/*добавляем элемент в HTML */
var main = document.querySelector('body');
main.appendChild(ourElement); /*appendChild добавляет к выбранной ноде ребенка */
/*main.removeChild(ourElement); removeChild удаляет в выбранной ноде ребенка*/




