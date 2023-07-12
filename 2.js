const getMonth = (callback) => {
  setTimeout(()=>{
      let error = false
      let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      if(!error){
          callback(null, month)
      } else {
          callback(new Error('Sorry Data Not Found'), [])
      }
  }, 3000)
}


getMonth((error,result)=>{
  if(error){
      console.log(error.message)
  } else {
      result.map((eachMonth, index)=>{
          console.log(`Bulan ke ${index+1} adalah ${eachMonth}`)
    })
  }
})
