//Задание 1

let password = '123456';
let test = prompt('Введите пароль');

if (password === test) {alert('Пароль введен верно');
    
} else {
    alert('Пароль введен неправильно');
}

//Задание 2

let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {alert('Верно');
    
} else {
    alert('Не верно');
}

//Задание 3

let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите число ещё одно число'));

if (d > 100 || e > 100) {alert('Верно');
    
} else {
    alert('Не верно');
}

//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case '1':
        console.log('Это зима');
        break;
    case '2':
        console.log('Это зима');
        break;
    case '3':
        console.log('Это весна');
        break;
    case '4':
        console.log('Это весна');
        break;
    case '5':
        console.log('Это весна');
        break;
    case '6':
        console.log('Это лето');
        break;
    case '7':
        console.log('Это лето');
        break;
    case '8':
        console.log('Это лето');
        break;
    case '9':
        console.log('Это осень');
        break;
    case '10':
        console.log('Это осень');
        break;
    case '11':
        console.log('Это осень');
        break;
    case '12':
        console.log('Это зима');
        break;
                                                                                                                
    default:
        console.log('Такого месяца не существует');
        break;
}



