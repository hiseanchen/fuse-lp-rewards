const networks = {
    56: {
        chainId: '0x38',
        chainName: 'Smart Chain',
        nativeCurrency: {
            name: 'Binance',
            symbol: 'BNB',
            decimals: 18
        },
        rpc: 'https://bsc-dataseed.binance.org',
        explorer: 'https://bscscan.com'
    },
}

const blockExplorers = {
    1: 'https://etherscan.io',
    56: 'https://bscscan.com',
}

const networkNames = {
    1: 'Mainnet',
    56: 'Binance Smart Chain',
}

export const networkIds = {
    MAINNET: 1,
    BSC: 56,
}

export const getBlockExplorerUrl = (networkId) => blockExplorers[networkId]

export const getNetwork = (networkId) => networks[networkId]

export const getNetworkName = (networkId) => networkNames[networkId]