let numbers = [1, 3, 9, 2, 7, 6, 5];

/* Императивный стиль */

function sortListImp(numbers) {
    let temp = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

console.log(sortListImp(numbers));

/* Декларативный стиль */

function sortListDec(numbers) {
    return numbers.sort().reverse();
}

console.log(sortListDec(numbers));
