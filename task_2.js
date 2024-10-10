function commonDivisor(arr) {
  arr.sort((a, b) => a - b);
  let counter = 0;
  const divisors = [];
  for (let i = 2; i <= arr[0]; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (isNaN(arr[j])) {
        console.error(`Значение ${arr[j]} в массиве не является числом.`);
        return "Вы ввели неверные данные.";
      } else {
        if (arr[j] % i === 0) {
          counter++;
          if (counter === arr.length) {
            divisors.push(i);
            counter = 0;
          }
        } else {
          counter = 0;
          break;
        }
      }
    }
  }
  return divisors;
}

console.log(commonDivisor([42, 12, 18]));
