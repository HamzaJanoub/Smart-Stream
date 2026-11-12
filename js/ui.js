const sidebarre = document.getElementById('favorite-col')
const btn = document.getElementById('menu')
const back = document.getElementById('back')
const select = document.getElementById("select-categorie")


export function barreToggle(){
    btn.addEventListener('click',()=>{
        sidebarre.classList.remove('hidden')
        back.classList.remove('hidden')
    })
    
    back.addEventListener('click',(e)=>{
        if(e.target === back)
        sidebarre.classList.add('hidden')
        back.classList.add('hidden')

        })
    sidebarre.addEventListener('click',(e)=>{
    e.stopPropagation()
    })
    select.addEventListener('change',()=>{
          sidebarre.classList.add('hidden')
        back.classList.add('hidden')  
    })

    }



