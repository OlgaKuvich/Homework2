// Задание 1

let i = 0;

while (i < 3) {
    console.log('Привет');
    i++
}

// Задание 2

let a = 1;

do {
    console.log(a);
    a++;
}
    while (a <= 5);

// Задание 3

let b = 7;

do {
    console.log(b);
    b++
}
    while (b <= 22);

// Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};
for (let name in obj) {
        console.log(`${name} - зарплата ${obj[name]} долларов`)
    }

// Задание 5

let num = 0;
let n = 1000;

for (; n >= 50; n /= 2, num++); {
    console.log(n, num)
}

// Задание 6

let friday = 1;

do { 
    console.log(`Сегодня пятница, ${friday} число. Необходимо подготовить отчет`);
    friday += 7; 
} while (friday <= 31);