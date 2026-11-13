const apiUrl = "https://6af23f4642c6561ced392449.mockapi.io/channels/hamza"
const erreur = document.getElementById('error')
export async function fetchChanels() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok){
            if(response.status === 404){
                erreur.classList.remove('hidden')
            throw new Error('Channels not found (404)')
        }

        if(response.status >= 500){
        erreur.classList.remove('hidden')
            throw new Error ("Server error (500)")
        }
        throw new Error('HTTP Error: ${response.status}')
    }
        const data = await response.json()  
        console.log(data)
        return data

    }catch (error) {
    console.error("fetch channels failed", error)
    throw error
}finally{
    setTimeout(()=>{

        const loading = document.getElementById('loading-screen')
        loading.classList.add('hidden')

    },3000)
}
}
