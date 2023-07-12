//Program menghitung rata-rata angka
// const rataAngka = (nilai) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//         if(!Array.isArray(nilai)){
//           reject(new Error('Ini bukan array'))
//         } else if(nilai.length === 0){
//           reject(new Error("Nilai yang dimasukkan tidak ada"));
//         } else {
//           //nilaiAwal adalah index pertama array
//           //nilaiSetelah adalah index kedua dan seterusnya dalam array
//           let sum = nilai.reduce((nilaiAwal, nilaiSetelah) => nilaiAwal + nilaiSetelah);
//           let average = sum / nilai.length;
//           resolve(average);
//       }
//     }, 1000)
//   })
// }

// rataAngka([80,70,50,90])
// .then((average) => {
//   console.log(`Rata-rata angka: ${average}`);
// })
// .catch((err) => {
//   console.log(err.message);
// })

//Program check barang yang tersedia di gudang berdasarkan kode
const dataBarang = [
  {
      code: 'Sepatu',
      nama: 'Sepatu Adidas',
      qty: 20,
      price: 1500000
  },
  {
      code: 'Tas',
      nama: 'Tas Supreme',
      qty: 15,
      price: 5000000
  },
  {
      code: 'Sepatu',
      nama: 'Sepatu Nike',
      qty: 17,
      price: 1200000
  },
  {
      code: 'Sepatu',
      nama: 'Sepatu Balance',
      qty: 25,
      price: 320000
  },
  {
      code: 'Tas',
      nama: 'Tas Channel',
      qty: 13,
      price: 150000000
  },
  {
      code: 'Sepatu',
      nama: 'Sepatu Pierro',
      qty: 19,
      price: 550000
  },
  {
      code: 'Baju',
      nama: 'Kaos Erigo',
      qty: 100,
      price: 150000
  }
];

let penampungSearch

const checkBarang = (searchName) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          penampungSearch = dataBarang.filter((item) => item.code.toLowerCase() === searchName.toLowerCase());
          if (penampungSearch.length > 0) {
              resolve(penampungSearch);
          } else {
              reject(new Error('Ada error, data tidak ditemukan'));
          }
      }, 4000);
  });
};
setTimeout(()=>{
  console.log('Wait connecting to server...')
},2000)

checkBarang('sepatu')
  .then((result) => {
      console.log('========= Show data =========')
      result.forEach((item) =>{
          console.log(`Code: ${item.code}`)
          console.log(`Nama: ${item.nama}`)
          console.log(`Qty: ${item.qty}`)
          console.log(`Price: ${item.price}`)
          console.log('=============================')
      })
  })
  .catch((err) => {
      console.log(err.message);
  })
  .finally(()=>{
      const dataDitemukan = penampungSearch.length;
      console.log(`Data ditemukan ${dataDitemukan} jumlah`)
  })