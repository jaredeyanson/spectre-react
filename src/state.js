import {proxy, useSnapshot} from 'valtio'

const state = proxy({
    globalId: 0,
    list: [
        
    ]
})

const addWpnId = 0

export { state }