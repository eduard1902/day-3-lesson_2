
let money = 10;  //“Доход за месяц”
let income = 20; //с дополнительными доходом (например: фриланс), 
let addExpenses = 'интернет, такси, коммуналка';//перечисление дополнительных расходов через запятую (например: интернет, такси, коммуналка), 
let deposit = (10 > 9); //любое булево значение,
let mission = 10000; //любое число (Какую сумму хотите накопить)
let period = 12;//число от 1 до 12 (месяцев)


//- Вывести в консоль тип данных значений переменных money, income, deposit;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// Вывести в консоль длину строки addExpenses
console.log(addExpenses);
console.log(addExpenses.length);

// Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль

console.log(addExpenses.toLowerCase());
addExpenses = ['интернет', 'такси', 'коммуналка'];
console.log(addExpenses);

//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)

let budgetDay = 1000;
console.log('доход за месяц / '  + budgetDay * 30);

//Вывести в консоль budgetDay
console.log(budgetDay);