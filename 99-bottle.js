function generateSingleStanza(number) {
  if (number % 10 === 1 && number !== 1 && number !== 11) {
    return `${number} бутылка пива на стене, ${number} бутылка пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылок пива на стене!\n`;
  } else if (
    number % 10 === 0 ||
    number % 10 === 9 ||
    number % 10 === 8 ||
    number % 10 === 7 ||
    number % 10 === 6
  ) {
    return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылок пива на стене!\n`;
  } else if (number % 10 === 5 && number !== 15) {
    return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылки пива на стене!\n`;
  } else if (
    (number % 10 === 4 || number % 10 === 3) &&
    number !== 14 &&
    number !== 13 &&
    number !== 4 &&
    number !== 3
  ) {
    return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылки пива на стене!\n`;
  } else if (number % 10 === 2 && number !== 12) {
    return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылка пива на стене!\n`;
  } else if (
    number === 15 ||
    number === 14 ||
    number === 13 ||
    number === 12 ||
    number === 11
  ) {
    return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылок пива на стене!\n`;
  } else if (number === 4 || number === 3) {
    return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${
      number - 1
    } бутылки пива на стене!\n`;
  } else {
    return `${number} бутылка пива на стене, ${number} бутылка пива! Возьми одну, пусти по кругу, нет бутылок пива на стене!`;
  }
}

function generateSongText() {
  let accumulator = "";
  for (let i = 99; i > 0; i--) {
    accumulator += generateSingleStanza(i);
  }
  console.log(accumulator);
}

generateSongText();
