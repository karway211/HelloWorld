function test() {
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