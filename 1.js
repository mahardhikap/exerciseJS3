//Penggunaan then catch

const cekHariKerja = (day) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
      let cek = dataDay.find((whichDay) => whichDay.toLowerCase() === day.toLowerCase());//find untuk mengembalikan nilai pertama yang sesuai kondisi
      if (cek) {
          resolve(`Sekarang adalah hari ${cek}, maka kerja`);
      } else {
          reject(new Error(`Bukan hari kerja`));
      }
    }, 3000)
  })
}

cekHariKerja('Senin').then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err.message)
});

// then dan catch digunakan dalam pemrograman berbasis Promise untuk menangani hasil yang berhasil (resolve) dan penolakan (reject) dari operasi asinkron. Memungkinkan penanganan yang terstruktur terhadap hasil dan kesalahan yang terjadi.


//Penggunaan try catch

const cekHariKerja2 = async (day) => {
  try {
      const result = await cekHariKerja(day)
      console.log(result)
  } catch (error) {
      console.log(error.message)
  }
};

cekHariKerja2('Minggu')

// try dan catch digunakan dalam pemrograman JavaScript untuk menangani kesalahan yang terjadi dalam bagian kode yang bersifat synchronous (sinkron). Memungkinkan penanganan kesalahan dalam blok kode yang dapat menimbulkan exception (pengecualian).