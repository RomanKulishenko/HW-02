// Задание 2

// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Ответ

function numbers(a) {
  if (a === 1 || a === 0) {
    return "Числа 1 или 0 не являются простыми или составными";
  } else if (a > 1000) {
    return "Данные неверны";
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return "Составное число";
      }
      return "Простое число";
    }
  }
}

console.log(100, numbers(100));
// не пойму почему при проверке 2 возвращает undefined
console.log(2, numbers(2));
console.log(1, numbers(1));
console.log(17, numbers(17));
console.log(24, numbers(24));
console.log(53, numbers(53));
console.log(1001, numbers(1001));
console.log(0, numbers(0));
