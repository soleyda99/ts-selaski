const calculoClico1 = (cifra: number) => {
  let teclado: number[] = [9, 7, 0, 1, 2, 3, 4, 5, 6, 8];
  let suma: number = 0;
  let indexAnterior: number = 0;

  const tecladoReverse = [...teclado].reverse();
  const convertCifraArray: number[] = Array.from(String(cifra), Number);

  for (let i = 0; i < convertCifraArray.length; i++) {
    const tecladoIndexOf = teclado.indexOf(convertCifraArray[i]);
    if (i === 0) {
      suma = suma + tecladoIndexOf;
      indexAnterior = tecladoIndexOf;
    } else {
      if (esAntes({teclado:teclado,num:convertCifraArray[i],indexAnterior:indexAnterior})) {
        let newSuma = teclado.length - indexAnterior - 1 + (teclado.length - tecladoIndexOf - 1);
        suma = suma + newSuma;
        indexAnterior = tecladoIndexOf;

        teclado = [...tecladoReverse];
        indexAnterior = teclado.length - indexAnterior - 1;
      } else {
        let newSuma = tecladoIndexOf - indexAnterior;
        suma = suma + newSuma;
        indexAnterior = tecladoIndexOf;
        teclado = [...teclado];
      }
    }
  }
 return "el tiempo del procesador es : "+ suma + " ms"
};

const esAntes = ({teclado, indexAnterior, num}:Antes) => {
  const indexNum = teclado.indexOf(num);
  let res: boolean = false;
  if (indexNum < indexAnterior) {
    res = true;
  }
  return res;
};
console.log(calculoClico1(1297));

interface Antes {
  teclado:number[],
  indexAnterior:number,
  num:number
}