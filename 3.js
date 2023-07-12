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