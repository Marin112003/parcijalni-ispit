/*
1. Ispravite sve greške u:
     - imenovanju
     - deklaraciji
     - inicijalizaciji varijabli
     - komentarima u kodu.
2. console.log izjave moraju ispisati postojeće varijable i ne rezultirati sa undefined tipom.
3. Pročitajte poglavlja JavaScript Patterns: Essentials - Writing Maintainable Code, Coding Conventions, Naming Conventions, Writing Comments
*/


var rows = prompt('How many rows for your multiplication table?');
var cols = prompt('How many columns for your multiplication table?');
if (rows === '' || rows === null) rows = 10;
if (cols === '' || cols === null) cols = 2;
createTable(rows, cols);


let author = "John Doe";
 
function createTable(ROWS, Cols) {
  var j = 1;
  var result = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
  for (var i = 1; i <= ROWS; i++) {
    result += '<tr>';
    while (j <= Cols) {
      result += '<td>' + i * j + '</td>';
      j++;
    }
    result += '</tr>';
    j = 1;
  }
  result += '</table>';
  document.write(result);
}
