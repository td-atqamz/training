// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

function cmToM(cm){
    var m = cm * 0.01;
    return `${cm} cm is ${m} meter `
}

function cmToKm(cm){
    var km = cm * 0.00001;
    return `${cm} cm is ${km} kilometer `
}
function cmToMm(cm){
    var mm = cm * 10;
    return `${cm} cm is ${mm} millimeter `
}
        
console.log(cmToM(100))
console.log(cmToKm(100000))
console.log(cmToMm(100))