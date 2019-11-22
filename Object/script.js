// //contoh anatomi Object

// var Orang = { // variabel yang ada di dalam objek ada properti
//     nama: 'Untung Dwi Prayoga',
//     umur: 20,
//     pekerjaan: 'Mahasiswa',
//     sapa: function() {
//         return 'Hi, Nama Saya ' + this.nama +
//             ' usia saya ' + this.umur + 'tahun ,dan saya adalah seoarang' + pekerjaan;
//     }




// }

// contoh Object Anatomi

// var mhs = {
//     nama: 'Untung Dwi Prayoga',
//     umur: 20,
//     ips: [3.00, 2.50, 3.20],
//     alamat: {
//         jalan: 'Jl. Mercedes Benz',
//         kota: 'Bogor',
//         provinsi: 'Jawa Barat'
//     }
// };

// Membuat Object 
// Object Literal

// var mhs = {
//     nama: "Untung Dwi Prayoga",
//     nrp: "41518320040",
//     email: 'kulsxyz7@gmail.com',
//     jurusan: 'Teknik Informatika'
// }


// // Function Declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan  = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Untung Dwi Prayoga', '41518320040','kulsxyz7@gmail.com','Teknik Informatika')



// Constructor
// function Mahasiswa(nama, nrp, email, jurusan) {
//     // var this = {};
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//     //return this; 
// }

// var mhs4 = new Mahasiswa('Untung Dwi Prayoga', '41518320040', 'kulsxyz7@gmail.com', 'Teknik Informatika');


// membuat object 
// cara 1 - function declaration

// function halo() {
//     console.log('halo');
// }
// halo();

// cara 2 - object literal
// var obj = {};
// obj.halo = function() {
//     console.log('halo');
// }
// obj.halo();

// cara 3 - constructor

// function Halo() {
//     console.log('Halo');
// }
// new Halo();

// konsep this

// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();

// // this mengembalikan object Global

// var obj = {}; // properti di dalam kurung kurawal
// obj.halo = function() { // bagian sini adalah method
//     console.log(this); 
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang bersangkutan

function Halo() {
    console.log(this);
    console.log('Halo');
}
new Halo();

//this mengembalika object yang baru dibuat