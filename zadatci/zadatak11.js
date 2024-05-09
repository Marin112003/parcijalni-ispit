/*
1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
4. Pretvori svoj objekt u JSON string.
*/
const myCar = {
  type: "Nissan",
  model: "GTR",
  color: "Red",
  power: 1000,
  ubrzanje: 100,
  kočenje: 50,
  speed: 0,
  features: {
    autopilot: true,
    entertainmentSystem: true,
  },
  ubrzaj: function (time) {
    let ubrzanje = this.ubrzanje * time;
    this.speed += ubrzanje;
    return this.speed;
  },
  uspori: function (time) {
    let usporavanje = this.kočenje * time;
    this.speed -= usporavanje;
    return this.speed;
  },
  zakoči: function () {
    this.speed = 0;
    return "Automobil je potpuno zaustavljen.";
  },
};

console.log(myCar.speed);
console.log(myCar.ubrzaj(2));
console.log(myCar.speed);
console.log(myCar.uspori(2));
console.log(myCar.speed);
console.log(myCar.zakoči());
console.log(myCar.speed);

for (let key in myCar) {
  if (typeof myCar[key] !== "function") {
    console.log(`${key}: ${myCar[key]}`);
  }
}

console.log(
  `Moj automobil je ${myCar.color} ${myCar.type} ${myCar.model} koji posjeduje funkciju autopilota i zabavnog sistema.`
);

const myCarJSON = JSON.stringify(myCar);
console.log(myCarJSON);
