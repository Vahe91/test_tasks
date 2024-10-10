function numberOfComputers(n) {
  const number = Math.abs(n) % 100;
  const numEnding = number % 10;

  if (!isNaN(n)) {
    if (number > 10 && number < 20) {
      console.log(`${n} компьютеров.`);
    } else if (numEnding > 1 && numEnding < 5) {
      console.log(`${n} компьютера.`);
    } else if (numEnding == 1) {
      console.log(`${n} компьютер.`);
    } else {
      console.log(`${n} компьютеров.`);
    }
  } else {
    console.log(`${n} не является числом.`);
  }
}

numberOfComputers(1048);
