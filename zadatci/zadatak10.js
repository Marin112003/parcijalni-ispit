/*
1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
2. Vratite tu riječ iz funkcije i spremite u varijablu.
3. Ispišite varijablu u konzoli.
*/




var rečenice = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function nalaziNiz(rečenice){
    let najdužaRiječ = "";
    let maxriječ = 0;

    for(let i = 0; i < rečenice.length; i++){
        if(rečenice[i].length > maxriječ){

            najdužaRiječ = rečenice[i];
            maxriječ = rečenice[i].length;
        }
    }
    return najdužaRiječ;
}
console.log("Najduža riječ u nizu: ", nalaziNiz(rečenice));


