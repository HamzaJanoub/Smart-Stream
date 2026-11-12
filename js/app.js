import { affichage } from './search.js'
import { barreToggle } from './ui.js'
import {showLoading,hideLoading,showError,hideError} from './loading.js'
import { fetchChanels } from '../data/data.js'


barreToggle()

async function init() {
    hideError()
    showLoading()

    try {
        const channels = await fetchChanels()
        hideError()
        affichage(channels)
    } catch (error) {
        console.error(error)
        showError()
    } finally {
        hideLoading()
    }
}

init()
