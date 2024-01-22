function najdiMinMax(seznam) {
  if (seznam.length === 0) {
      return "Seznam je prázdný.";
  }

  let nejmensi = seznam[0];
  let nejvetsi = seznam[0];

  for (let i = 1; i < seznam.length; i++) {
      if (seznam[i] < nejmensi) {
          nejmensi = seznam[i];
      }
      if (seznam[i] > nejvetsi) {
          nejvetsi = seznam[i];
      }
  }

  return {
      nejmensi: nejmensi,
      nejvetsi: nejvetsi
  };
}

function zpracujInput() {
  const inputElement = document.getElementById("input1");
  const inputValue = inputElement.value;

  if (inputValue.trim() === "") {
      alert("Zadejte prosím čísla do pole.");
      return;
  }

  const seznamCisel = inputValue.split(",").map(Number);

  const vysledek = najdiMinMax(seznamCisel);

  const vysledekElement = document.getElementById("vysledek");
  vysledekElement.innerHTML = `Nejmenší číslo: ${vysledek.nejmensi}, Největší číslo: ${vysledek.nejvetsi}`;
}

document.getElementById("input1").addEventListener("change", zpracujInput);

function vypocetFaktorialu(n) {
  if (n < 0) {
      return "Faktoriál nelze spočítat pro záporná čísla.";
  }

  if (n === 0 || n === 1) {
      return 1;
  }

  return n * vypocetFaktorialu(n - 1);
}

function vypocetAFaktorial() {
  const inputFaktorialElement = document.getElementById("inputFaktorial");
  const inputFaktorialValue = parseInt(inputFaktorialElement.value);

  if (isNaN(inputFaktorialValue)) {
      alert("Zadejte prosím platné číslo pro výpočet faktoriálu.");
      return;
  }

  const faktorialVysledek = vypocetFaktorialu(inputFaktorialValue);

  const vysledekFaktorialElement = document.getElementById("vysledekFaktorial");
  vysledekFaktorialElement.innerHTML = `Faktoriál čísla ${inputFaktorialValue}: ${faktorialVysledek}`;
}

document.getElementById("inputFaktorial").addEventListener("change", vypocetAFaktorial);

console.log(vypocetFaktorialu(5));
console.log(vypocetFaktorialu(0));
console.log(vypocetFaktorialu(1));
console.log(vypocetFaktorialu(-3));