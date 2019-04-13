/*var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'navi-blue', 'purple']

for (var i=0; i<=6; i++) {
    alert(arr[i]);
}
for (var i=6; i>=0; i--) {
    alert(arr[i]);
}  в обратном порядке

for (var i=0; i<=6; i+=2) {
    alert(arr[i]); 
}  четные
for (var i=1; i<=6; i+=2) {
    alert(arr[i]); 
} нечет
for (var i=0; i<=6; i+=2) {
    break;
    alert(arr[i]); 
} выход из цикла
for (var i=6; i>=0; i--) {
    if(i == 4){
        continue;
    }
    if(i == 1){
        break;
    }
    alert(arr[i]);
} пропустить 4-й и закончить на первом*/
                    /*заполнение анкеты*/
//var questions = ['First name','Last nane', 'Gender', 'Age'];
//var answers = [];

//for (var i = 0; i < questions.length/*длина массива*/; i++){
//    answers[i] = prompt('Введите ' + questions[i]);
//}
//alert(answers);  

function Fuctorial(num) {
    if (num > 1) {
        return num * Fuctorial(num - 1);
    } else {
        return 1;
    }
}
console.log(Fuctorial(3)) /*расчет факториала(рекурсия)*/



var result = 1;
for (var i = 1; i >= 3; i++) {
    result = result * 3;
}

console.log(result);/*расчет факториала(рекурсия)*/