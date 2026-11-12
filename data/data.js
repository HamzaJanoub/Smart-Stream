const apiUrl = "https://6af23f4642c6561ced392449.mockapi.io/channels/hamza"

export async function fetchChanels() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok){
            if(response.status === 404){
            throw new Error('Channels not found (404)')
        }
        if(response.status >= 500){
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

}
}
