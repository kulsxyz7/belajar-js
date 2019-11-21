/*function tambah(a, b) {
    return a + b;
}

function perkalian(a, b) {
    return a * b;
}

var a = parseInt(prompt('Masukan Nilai 1 = '));
var b = parseInt(prompt('Masukan Nilai 2 = '));
var hasil = perkalian(a, b);
console.log(hasil); */
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3);
console.log(coba);