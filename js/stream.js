export function loadVideoStreaming(data){
    const video = document.getElementById('streaming')
    video.src = data
    video.addEventListener('loadedmetadata',()=>{
        video.play()
    })
}
