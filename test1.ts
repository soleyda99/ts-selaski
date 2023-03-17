const calculoClico1 = (cifra: number) => {
  const teclado: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const convertCifraArray: number[] = Array.from(String(cifra), Number);

  let indexProcesador: number[] = [];

  for (let i = 0; i < convertCifraArray.length; i++) {
    for (let j = 0; j < teclado.length; j++) {
      if (convertCifraArray[i] === teclado[j]) {
        //si el numero de la cifra coincide con el numero del teclado se guarda el index
        indexProcesador.push(teclado.indexOf(teclado[j]));
      }
    }
  }
  let suma: number = 0;
  let resta: number = 0;
  indexProcesador.forEach((index) => {
    suma < index ? (suma = index) : (resta = index);
  });
  let tiempoProcesador: number = 0;

  if (resta === 0) {
    tiempoProcesador = suma;
  } else {
    tiempoProcesador = suma + (suma - resta);
  }

  return "El tiempo del procesador es: " + tiempoProcesador + "ms";
};
console.log(calculoClico1(1297), "prueba");
