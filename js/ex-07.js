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

for (let i = 0; i <= 100; i++) {
    arr.push(generateRandomLetter(1, 4));
}

console.log(arr);