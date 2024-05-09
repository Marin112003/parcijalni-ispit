/*
1. Kreirajte 
varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena. 
2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
var x = z === 2? y : 5;
3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").  
*/

//1
let firstName = "Marin";
let lastName = "Prša";

let fullName = firstName + " " + lastName;

console.log(fullName);

//2

function paranBroj() {
  for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
      console.log("Broj " + i + " je paran");
    } else {
      console.log("Broj " + i + " je neparan");
    }
  }
}
paranBroj()