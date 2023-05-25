//fungsi untuk menghitung luas dan menampilkan hasilnya
function hitungLuas(){
    //menyimpan nilai yang ada pada elemen dengan id sisi-luas (menyimpan nilai input user berupa sisi luas ke dalam variabel sisi_luas)
    var sisi_luas = document.getElementById('sisi-luas').value;
    if(validation(sisi_luas, true)){
        //menghitung luas dan menyimpan hasil perkalian nilai sisi pada variabel luas
        var luas = sisi_luas * sisi_luas;
        //mengisi elemen dengan id output_rumus_luas dengan rumus yang nilai sisinya sudah diganti dengan nilai yang disimpan pada variabel sisi_luas
        //terdapat concatenation operator untuk menggabungkan teks dengan variabel sisi_luas 
        document.getElementById('output_rumus_luas').innerHTML = "L =  " + sisi_luas + " x " + sisi_luas;
        //mengisi elemen dengan id output_luas dengan hasil perhitungan luas yang disimpan pada variabel luas
        //terdapat concatenation operator untuk menggabungkan teks dengan variabel luas 
        document.getElementById('output_luas').innerHTML = "L = " + luas;
        //mengambil nilai elemen dengan id tempat-output-luas dan menyimpannya pada variabel divTempatOutputLuas
        //variabel ini yang berfungsi untuk menampilkan hasil perhitungan luas yang tersimpan pada div dengan id tempat-output-luas
        var divTempatOutputLuas = document.getElementById('tempat-output-luas');
        //menampilkan hasil perhitungan luas dengan mengubah display div dari none menjadi bentuk default atau blok sehingga hasil yang awalnya hide bisa terlihat
        divTempatOutputLuas.style.display = 'block';
    }
}

//fungsi untuk menghitung keliling dan menampilkan hasilnya
function hitungKeliling(){
    //menyimpan nilai yang ada pada elemen dengan id sisi-keliling (menyimpan nilai input user berupa sisi keliling ke dalam variabel sisi_keliling)
    var sisi_keliling = document.getElementById('sisi-keliling').value;
    if(validation(sisi_keliling, false)){
        //menghitung keliling dan menyimpan hasil perkalian nilai sisi_keliling pada variabel keliling
        var keliling = 4 * sisi_keliling;
        //mengisi elemen dengan id output_rumus_keliling dengan rumus yang nilai sisinya sudah diganti dengan nilai yang disimpan pada variabel sisi_keliling
        //terdapat concatenation operator untuk menggabungkan teks dengan variabel sisi_keliling
        document.getElementById('output_rumus_keliling').innerHTML = "K = 4 x " + sisi_keliling;
        //mengisi elemen dengan id output_keliling dengan hasil perhitungan keliling yang disimpan pada variabel keliling
        //terdapat concatenation operator untuk menggabungkan teks dengan variabel keliling
        document.getElementById('output_keliling').innerHTML = "K = " + keliling;
        //mengambil nilai elemen dengan id tempat-output-keliling dan menyimpannya pada variabel divTempatOutputKeliling
        //variabel ini yang berfungsi untuk menampilkan hasil perhitungan keliling yang tersimpan pada div dengan id tempat-output-keliling
        var divTempatOutputKeliling = document.getElementById('tempat-output-keliling');
        //menampilkan hasil perhitungan keliling dengan mengubah display div dari none menjadi bentuk default atau blok sehingga hasil yang awalnya hide bisa terlihat
        divTempatOutputKeliling.style.display = 'block';
        var sisi_keliling = document.getElementById('sisi-keliling').value;
    }
}

//fungsi untuk melakukan reset tampilan hasil perhitungan luas
function hideLuas(){
    //mengambil nilai pada id tempat-output-luas dimana id ini merujuk pada elemen div tempat menampilkan hasil luas
    //variabel yang digunakan untuk menampung adalah divTempatOutputLuas
    var divTempatOutputLuas = document.getElementById('tempat-output-luas');
    //untuk menghilangkan hasil perhitungan yaitu dengan hide kembali div tempat menampilkan luas
    //adapun dilakukan dengan mengubah style menjadi none
    divTempatOutputLuas.style.display = 'none';
    //menghilangkan pesan eror untuk input sisi luas
    document.getElementById("numberText_1").innerHTML ="";
    //melakukan reset pada form input untuk sisi luas
    document.getElementById("sisi-luas").value ="";
}

//fungsi untuk melakukan reset tampilan hasil perhitungan keliling
function hideKeliling(){
    //mengambil nilai pada id tempat-output-keliling dimana id ini merujuk pada elemen div tempat menampilkan hasil keliling
    //variabel yang digunakan untuk menampung adalah divTempatOutputKeliling
    var divTempatOutputKeliling = document.getElementById('tempat-output-keliling');
    //untuk menghilangkan hasil perhitungan yaitu dengan hide kembali div tempat menampilkan keliling
    //adapun dilakukan dengan mengubah style menjadi none
    divTempatOutputKeliling.style.display = 'none';
    //menghilangkan pesan eror untuk input sisi keliling
    document.getElementById("numberText_2").innerHTML ="";
    //melakukan reset pada form input untuk sisi keliling
    document.getElementById("sisi-keliling").value ="";
}

//fungsi untuk melakukan validasi saat tombol hitung di klik
//terdapat dua parameter yaitu value dan type, value adalah nilai yang didapat dari form input dan type adalah jenis pesan eror mana yang mau ditampilkan
//pesan eror terdapat pada dua jenis span masing-masing untuk eror luas dan eror keliling
//type true untuk span pesan eror luas dan type false untuk span pesan eror keliling
function validation(value, type){
    //pertama dilakukan pengecekan apakah form input diisi oleh user atau tidak jika terisi maka akan masuk ke else dan dicetak "please enter a value"
    //apabila type true maka akan keluar pesan eror untuk input luas, jika type false maka akan keluar pesan untuk input keliling
    if(value){
        //jika input dari user ada, maka akan di cek apakah inputan user adalah angka atau bukan, jika angka maka pesan eror tidak akan dimunculkan
        //jika bukan angka maka akan dicetak Please enter Numeric value!!! sesuai jenis type
        if (isNaN(value)) {
            if(type){
                //pesan eror untuk input luas karna inputan bukan angka
                document.getElementById("numberText_1").innerHTML ="Please enter Numeric value!!!";
            }
            else {
                //pesan eror untuk input keliling karna inputan bukan angka
                document.getElementById("numberText_2").innerHTML ="Please enter Numeric value!!!";
            }
            return false;
        } else {
            if(type){
                document.getElementById("numberText_1").innerHTML ="";
            }
            else {
                document.getElementById("numberText_2").innerHTML ="";
            }
            return true;
        }
    } else {
        if(type){
            //pesan eror untuk input luas karna tidak ada inputan
            document.getElementById("numberText_1").innerHTML ="Please enter a value!!!";
        }
        else {
            //pesan eror untuk input keliling karna tidak ada inputan
            document.getElementById("numberText_2").innerHTML ="Please enter a value!!!";
        }
    }
}