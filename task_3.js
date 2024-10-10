function primeNumbers(min, max) {
  const numbers = [];
  if (min > max) return "Минимальное число больше максимального.";
  for (let i = min; i <= max; i++) {
    if (i === 2) numbers.push(i);
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      } else if (i - j === 1) {
        numbers.push(i);
      }
    }
  }
  return numbers;
}

console.log(primeNumbers(11, 20));
