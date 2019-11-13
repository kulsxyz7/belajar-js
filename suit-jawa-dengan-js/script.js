var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();


    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    var hasil = '';
    // menentukan rules
    //if ( p == comp ) {
    //    hasil = 'SERI!';
    //} else if ( p == 'gajah' ) {
    //    if ( comp == 'orang' ) {
    //        hasil = 'MENANG !';
    //    }
    //    else {
    //        hasil = 'KALAH !';
    //    }
    //} else if ( p == 'orang' ) {
    //    if ( comp == 'gajah' ) {
    //       hasil = 'kalah';
    //    } else {
    //        hasil = 'menang !'
    //    }
    //} else if ( p == 'semut' ) {
    //    if ( comp == 'orang' ) {
    //        hasil = 'kalah';
    //    } else {
    //        hasil = 'menang';
    //    }
    //}

    if (p == comp) {
        hasil = 'Seri !';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan Pilihan yang Salah!';
    }

    // tampilkan hasilnya

    alert('Kamu Memilih : ' + p + ' dan Komputer memilih : ' + comp + '\n Maka Hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('Terima kasih Telah bermain');