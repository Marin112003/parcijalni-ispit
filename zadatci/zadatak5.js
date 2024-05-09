/*
Koristeći metode rada nad stringovima iz zadanog stringa:
  1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12
*/

let text = ' Lorem ipsum dolor sit amet';

//1
let duljinaTeksta = text.length;
console.log("Ovo je duljina teksta: " + duljinaTeksta);

//2
let pozicijaTeksta = text.substring(text.indexOf("sit"), text.indexOf("sit") + 3);
console.log("izdvojena riječ: "+ pozicijaTeksta);

//3
let zamjena = text.replace("amet", "elit");
console.log(zamjena);

//4
let konkatenaciju = text + ', consectetur adipiscing elit.';
console.log(konkatenaciju);

//5
let velikaSlova = text.toUpperCase();
console.log(velikaSlova);

//6
let početnaPraznina = text.trim();
console.log(početnaPraznina);

//7
console.log('Znak na poziciji 11 je: ', text.charAt(11));