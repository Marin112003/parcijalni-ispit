/*
U ovoj vježbi koristit ćemo se lodash bibliotekom. Prvi korak je da instalirate lodash paket na lokalno računalo.
Korisnik na našoj stranici kreira password. Želimo osigurati da:
    1. Je svaki znak u passwordu različit od drugih / jedinstven
    2. Su svi znakovi brojke
    3. Password nema više od 10 znakova
Vaš je zadatak:
    1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
    2. Napisati funkciju koja provjerava da li su svi znakovi brojke
    3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
*/

// 1.
var dobro = "1234567890";
var lose = "1123456";

let jedinstvena = _.uniq;

var jedinstveniZnakovi = function (password) {
  let lozinka = jedinstvena(password);
  let moja = lozinka.length === password.length;

  console.log(moja);
};

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);


//2
var dobro = 2;
var lose = "efeaf";

let brojke = function (password) {
  return !isNaN(password);
};

console.log(brojke(dobro));
console.log(brojke(lose));


//3
var dobro = "1234567890";
var lose = "1123456";

let skratiZnak = function(password){
    return password.slice(0, 10)
   }

console.log(skratiZnak(dobro));
console.log(skratiZnak(lose));