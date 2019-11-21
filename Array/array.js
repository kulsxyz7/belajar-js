// // //Manipulasi Array

// // //1. Menambah isi array

// // // var arr = ["a", 1, true];
// // // console.log(arr);

// // //2 . Mengahpus isi Array
// // // var arr = ["Untung", "Dwi", "Prayoga"];
// // // arr[1] = undefined;
// // // console.log(arr);

// // //3. Menampilkan isi Array

// // // var arr = ["Untung", "Dwi", "Prayoga"];

// // // for (var i = 0; i < arr.length; i++) {
// // //     console.log('Mahasiswa ke-' + (i + 1) + ':' + arr[i]);
// // // }

// // // Method pada Array 
// // //1. Join

// // // console.log(arr.join());

// // //2. push & pop
// // //push dan pop elemen terakhir
// // // arr.push('Doddy','Dodi');
// // // arr.pop();
// // // arr.pop();

// // // 3. unshift & shift
// // //shift dan unshift elemen pertama
// // // arr.unshift('Doddy');
// // // arr.shift();
// // // console.log(arr.join(' - '))



// // //4. Splice 
// // // splice (indexAwal, mauDihapusBerapa, elemenBaru1,elemenBaru2, ...)
// // // arr.splice(1, 2, 'Doddy', 'Fitri');
// // // console.log(arr.join(' - '));

// // //5. Slice
// // // slice(awal,akhir);
// // // var arr = ['Untung', 'Dwi', 'Prayoga', 'Nofa', 'Fitri'];
// // // var arr2 = arr.slice(1, 3);
// // // console.log(arr2.join(' - '));

// // //6 . foreach
// // // var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// // // var nama = ['Untung', 'Dwi', 'Prayoga']
// // //     // for (var i = 0; i < angka.length; i++) {
// // //     //     console.log(angka[i]);
// // //     // }

// // // // angka.forEach(function(e) {
// // // //     console.log(e);
// // // // })

// // // nama.forEach(function(e, i) {
// // //     console.log('Mahasiswa ke-' + (i + 1) + 'adalah : ' + e);
// // // })

// // //7. map
// // // var angka = [1, 2, 5, 3, 6, 8, 4];
// // // var angka2 = angka.map(function(e) {
// // //     return e * 2;
// // // });
// // // console.log(angka2.join(' - '));

// // //8. sort
// // var angka = [1, 2, 10, 20, 5, 3, 6, 8, 4];
// // angka.sort(function(a, b) {
// //     return a - b;
// // });
// // console.log(angka.join(' - '));

// // 9. Filter
// var angka = [1, 2, 10, 20, 5, 3, 6, 8, 4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

// // 10. Find 
// var angka = [1, 2, 10, 20, 5, 3, 6, 8, 4];
// var angka2 = angka.find(function(x) {
//     return x > 5;
// });
// console.log(angka2);