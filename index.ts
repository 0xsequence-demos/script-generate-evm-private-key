import {ethers} from 'ethers'

(() => {
    const wallet = ethers.Wallet.createRandom()
    const privateKey = wallet.privateKey
    console.log(privateKey)
})()