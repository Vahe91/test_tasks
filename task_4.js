function multiplicationTable(n) {
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
      output += " ".repeat(n.toString().length + 2);
    } else {
      output +=
        " ".repeat((n * 10).toString().length - i.toString().length + 1) + i;
    }
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        output +=
          " ".repeat((n * 10).toString().length - j.toString().length + 1) + j;
      } else {
        output +=
          " ".repeat(
            (n * 10).toString().length - (i * j).toString().length + 1
          ) +
          i * j;
      }
    }
    console.log(output);
    output = "";
  }
}

multiplicationTable(5);
