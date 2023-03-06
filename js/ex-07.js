console.clear();

// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomLetter() {
    const alphabet = "ABCD"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const arr = [];

for (let i = 0; i <= 99; i++) {
    arr.push(generateRandomLetter(1, 4));
}

console.log(arr);

let a = 0;
let b = 0;
let c = 0;
let d = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
        a++;
    } else if (arr[i] === "B") {
        b++;
    } else if (arr[i] === "C") {
        c++;
    } else if (arr[i] === "D") {
        d++;
    }
}

console.log('A raidziu yra: ' + a + ', ' + 'B raidziu yra: ' + b + ', ' + 'C raidziu yra: ' + c + ', ' + 'D raidziu yra: ' + d + '. ');