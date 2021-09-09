import Web3 from 'web3'

let givenWeb3

export const getWeb3 = ({ provider, networkType } = {}) => {
    if (networkType) {
        return web3ByNetworkType[networkType]
    }

    if (provider) {
        givenWeb3 = null
        givenWeb3 = new Web3(provider)
        return givenWeb3
    }

    if (givenWeb3) return givenWeb3
}

export const bsc_testnet = new Web3(CONFIG.web3.bscTestnetProvider)
export const main = new Web3(CONFIG.web3.ethereumProvider)
export const bsc = new Web3(CONFIG.web3.bscProvider)

const web3ByNetworkType = {
    97: bsc_testnet,
    56: bsc,
    1: main
}

export default givenWeb3