// print de getallen tussen 0 en 100
/*for( var i = 0; i< 101; i++){
    console.log("number" + i);
}*/

// grootste getal uit een lijst
/* var numbers = [1,3,2,5,7];
var grootste = 0;
for (var i = 0; i <= grootste; i++){
    if(numbers[i]>grootste){
        var grootste=numbers[i];
    }

    let lijst = [-12,-3,-2-1];
    function grootsteGetal(lijst){
        let g = lijst[0]

        for(i = 1; i <lijst.length; i++){
            
        }
    }
}
 console.log(grootste); */


// langste string uit lijst
/*const namen = ["alex","tom","sander","anne","mathieu"];
var grootste = 0;
var langste;

for (var i = 0; i < namen.length; i++){
    if(namen[i].length > grootste){
    grootste = namen[i].length;
    langste = namen[i];}
}
console.log(langste);*/


// gemiddelde van een lijst getallen
/*var numbers = [1,3,2,5,7];
var som =0 ;
var gemiddelde ;
for(i = 0; i < numbers.length;i++){
 som += numbers[i];
}
gemiddelde = som / numbers.length;

console.log(gemiddelde)*/

// check of een string een palindroom is
let mystring = "madam";

let checkPalindrome = mystring.split('').reverse().join('');

if(mystring === checkPalindrome){
    console.log("is palindrome");
}
else{
    console.log("is not a palindrome");
}