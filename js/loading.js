export function showLoading(){
    const loading = document.getElementById('loading')
    loading.classList.remove('hidden')
    loading.classList.add('flex')
}
export function hideLoading(){
    const loading = document.getElementById('loading')
    loading.classList.add('hidden')
    loading.classList.remove('flex')
}

export function showError() {
    const error = document.getElementById('error')
    error.classList.remove('hidden')
}

export function hideError() {
    const error = document.getElementById('error')
    error.classList.add('hidden')
}


