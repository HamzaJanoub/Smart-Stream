import {fetchChanels} from '../data/data.js'
import { loadVideoStreaming } from './stream.js'

export async function affichage (){

    const chanellsdata = await fetchChanels()
    const chanel = document.getElementById('chanels')
    const select = document.getElementById("select-categorie")
    const search = document.getElementById('search')
    const timeEl = document.getElementById('time')


    function render (){
        let fiterByCa = filterbyCategorie(chanellsdata, select.value)
            fiterByCa = filterByName(fiterByCa,search.value)
        chanel.innerHTML=``
        timeEl.innerHTML = ``
    fiterByCa.forEach(value => {
        const chain = document.createElement('div')
        chain.innerHTML=`
                            <div class="flex items-center gap-3 bg-slate-800 p-3 m-1 rounded-xl border border-slate-700 hover:border-orange-500 hover:bg-slate-700 transition duration-300 cursor-pointer">

                                <div class="w-12 h-12 bg-slate-800 border border-slate-700 text-orange-500 font-extrabold flex items-center justify-center rounded-xl text-sm shadow-inner">
                                    ${value.logo}
                                </div>                                <div>
                                    <h1 class="text-white font-semibold text-base">${value.name} </h1>
                                    <p class="text-slate-400 text-sm">channel ${value.channelNumber} </p>
                                </div>
                                <span class="ml-auto text-orange-500 text-xs font-bold">LIVE</span>
                            </div>
                               `

    chain.addEventListener('click',()=>{
        console.log(value.streamUrl)
        loadVideoStreaming(value.streamUrl)
            
        timeEl.innerHTML = ``
        
        const infos = document.createElement('div')
            infos.innerHTML = `
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 m-2">
                <div class="flex justify-between items-center mb-3">
                <h2 class="text-white font-bold text-lg">${value.name}</h2>
                <span class="bg-orange-800 text-orange-400 text-xs px-3 py-1 rounded-full">NOW</span>
                
                </div>
                <h3 class="text-orange-500 text-xl font-bold mb-2">${value.epg.currentProgram}</h3>
                <p class="text-slate-400 text-sm">${value.epg.startTime} - ${value.epg.endTime}</p>
            </div>
        `


        timeEl.appendChild(infos)
        })
        chanel.appendChild(chain)
    });
}

function filterbyCategorie(chanellsdata, categorie) {
  return chanellsdata.filter((data) => {
    return categorie === "tous" || data.category === categorie;
  });
}

select.addEventListener("change", render )
render();


function filterByName(chanellsdata,search){
return chanellsdata.filter((data) => {
return data.name.toLowerCase().includes(search.toLowerCase())
});
}
search.addEventListener("input",render)
render()

}
