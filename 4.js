const panggilUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        data.forEach((pick) => {
            console.log(`Nama: ${pick.name}`)
        })
    } catch (err) {
        console.log(`Error: ${err.message}, tidak dapat mengambil isi data`);
    }
}

panggilUser()