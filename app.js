window.addEventListener('load', async () => {
    if('ServiceWorker' in navigator) {
        try {
            const reg= await navigator.ServiceWorker.register('/serviceworker.js')
            console.log('Service worker register success', reg)
        } catch (e) {
            console.log('Service worker register fail')
        }

    }
})
