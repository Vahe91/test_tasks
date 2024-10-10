function multiplicationTable(n) {
  function numberLength(num) {
    return num.toString().length;
  }

  let output = "";
  if (isNaN(n)) {
    console.log(`${n} не является числом.`);
    return;
  }
  if (n < 1) {
    console.log("Введите положительное число");
    return;
  }
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      output += " ".repeat(numberLength(n) + 2);
    } else {
      output += " ".repeat(numberLength(n * 10) - numberLength(i) + 1) + i;
    }
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        output += " ".repeat(numberLength(n * 10) - numberLength(j) + 1) + j;
      } else {
        output +=
          " ".repeat(numberLength(n * 10) - numberLength(i * j) + 1) + i * j;
      }
    }
    console.log(output);
    output = "";
  }
}

multiplicationTable(5);
