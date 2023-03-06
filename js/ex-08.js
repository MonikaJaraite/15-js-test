console.clear();

// Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma (a, b) {
    let sum = 0;

    if (typeof a === 'number' && typeof b === 'number') {
        sum = a + b;
        if ((a + b) % 2 != 0); {
            return "Suma yra nelyginė."        
        }
    } else if (Array.isArray(a) && Array.isArray(b)) {
        sum = a.length + b.length;
    } else {
        return "Suma yra nelyginė."
    }
}

console.log(lygineSuma(5, 3));
console.log(lygineSuma([4, 3, 1], [3, 5, 2]));
console.log(lygineSuma(5, [3, 4, 8]));