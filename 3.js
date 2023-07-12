//Program menghitung rata-rata angka
const rataAngka = (nilai) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(!Array.isArray(nilai)){
          reject(new Error('Ini bukan array'))
        } else if(nilai.length === 0){
          reject(new Error("Nilai yang dimasukkan tidak ada"));
        } else {
          //nilaiAwal adalah index pertama array
          //nilaiSetelah adalah index kedua dan seterusnya dalam array
          let sum = nilai.reduce((nilaiAwal, nilaiSetelah) => nilaiAwal + nilaiSetelah);
          let average = sum / nilai.length;
          resolve(average);
      }
    }, 3000)
  })
}

rataAngka([70,80,90,50])
.then((average) => {
  console.log(`Rata-rata angka: ${average}`);
})
.catch((err) => {
  console.log(err.message);
})



//Program menghitung luas lingkaran
const luasLingkaran = (phi, jari) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      try {
        if(typeof phi !== 'number' || typeof jari !== 'number'){
          throw new Error('Input bukan number')
        } else if(phi === 0 || jari === 0){
          throw new Error('Input harus lebih dari 0')
        } else {
          resolve(`Luas lingkaran: ${phi*jari*jari}`)
        }
      } catch (error) {
        reject(`Ada error: ${error.message}`)
      }
      }, 2000)
  })
}

luasLingkaran(3.14, 10).then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});
