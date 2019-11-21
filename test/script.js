//pengelolaan penumpang
var penumpang = [];
//Penumpang naik 
//tambahPenumpang()
// 2 parameter :
//namaPenumpang dan arrPenumpang

var tambahPenumpang = function(namaPenumpang, penumpang) {
        // jika angkot kosong
        if (penumpang.length == 0) {
            //tambah penumpang di awal array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
        }
        // else
        else {
            //telusuri seluruh kursi dari awal
            for (var i = 0; i < penumpang.length; i++) {
                //jika ada kursi kosong
                if (penumpang[i] == undefined) {
                    //tambah penumpang di kursi tersebut
                    penumpang[i] = namaPenumpang;
                    //kembalikan isi array & keluar dari function
                    return penumpang;
                }
                //jika sudah ada nama yang sama
                else if (penumpang[i] == namaPenumpang) {
                    // tampilkan pesan kesalahanya
                    console.log(namaPenumpang + ' sudah ada di dalam angkot.')
                        // kembalikan isi array & keluar dari function
                    return penumpang;
                }
                //jika seluruh kursi terisi
                else if (i == penumpang.length - 1) {
                    // tambah penumpang di akhir array
                    penumpang.push(namaPenumpang);
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                }
            }
        }
    }
    //Penumpang turun
    //hapusPenumpang()
    //2 parameter :
    // namaPenumpang
    // arrPenumpang
var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        //tampilkan pesan bahwa angkot kosong
        console.log('Angkot masih kosong.');
        //tidak mungkin ada penumpang turun
        //kembalikan isi array & keluar dari function
        return penumpang;
    }
    //else
    else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                //hapus penumpang dengan mengubah namanya
                penumpang[i] = undefined;
                //menjadi undefined
                //kembalikan isi array & kembali ke function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                //jika tidak ada nama yang sesuai
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' tidak ada di dalam Angkot ');
                //kembalikan isi array
            }
        }
    }
    return penumpang;
}