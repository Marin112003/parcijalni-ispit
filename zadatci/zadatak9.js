/*
1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
2. Dodajte svoje ime na kraj niza.
3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
*/

var names = ["John", "Jane", "Bob", , "Mike"];

for (let i = 0; i < names.length; i++) {
console.log(names[i]);
}

names.push("Marin");


for(let i = 0;i < names.length; i++){
    console.log(names[i]);
    if(names[i] === "Jane") {
        break;
    }
}

names = names.filter(function(value) {
    return value !== undefined;
});

console.log(names);




