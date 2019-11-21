//contoh untuk array

var binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

//atau

var binatang = [];
binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

console.log(binatang[4]);
//untuk mengecek berapa banyak array
console.log(binatang.length);

//Elemen pada array boleh berbeda2 tipe

var hari = ['Senin', 'Selasa', 'Rabu'];
var mhs = ['Sandhika', 'Galih', 'Nofa'];
var angka = [10, 123, 2004];
var myArr = ['teks', 2, false];
var myFunc = function() {
    alert('Hello World!');
};
var myArr2 = ['teks', 2, false, myFunc];
var myArr3 = ['teks', 2, false, myFunc, [4, 5, 6]];