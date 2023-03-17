const calculoClico2 = (cifra: number) => {
  const teclado: number[] = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4];

  const convertCifraArray: number[] = Array.from(String(cifra), Number);

  let indexProcesador: number[] = [];

  for (let i = 0; i < convertCifraArray.length; i++) {
    for (let j = 0; j < teclado.length; j++) {
      if (convertCifraArray[i] === teclado[j]) {
        indexProcesador.push(teclado.indexOf(teclado[j]));
      }
    }
  }
  let suma: number = 0;

  indexProcesador.forEach((index) => {
    if (suma < index) {
      suma = index;
    }
  });
  let tiempoProcesador: number = 0;

  tiempoProcesador = suma;
  return "El tiempo del procesador es: " + tiempoProcesador + "ms";
};

console.log(calculoClico2(1297));
