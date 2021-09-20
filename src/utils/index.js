import { SingleRewardProgram, MultiRewardProgram } from '../earn-sdk'
import { networkIds } from '@/utils/network'
import { REWARDS_PLATFORMS } from '@/constants'
import { COINGECKO_ID_MAP } from '../constants'

const getPairPath = (pairs) => {
    return String(pairs).split(',').join('/')
}

const getPlatformBaseUrl = (networkId) => {
    switch (networkId) {
        // case networkIds.MAINNET:
        //     return 'https://app.uniswap.org'
        // case networkIds.BSC_TESTNET:
        //     return 'https://pancake.kiemtienonline360.com'
        case networkIds.BSC:
            return 'https://exchange.pancakeswap.finance'
    }
}

export const getAddLiquidityLink = (pairs, networkId) => {
    return getPlatformBaseUrl(networkId) + '/#/add/' + getPairPath(pairs)
}

export const getPlatformName = (networkId) => {
    switch (networkId) {
        // case networkIds.MAINNET:
        //     return REWARDS_PLATFORMS.UNISWAP
        // case networkIds.BSC_TESTNET:
        //     return REWARDS_PLATFORMS.PANCAKESWAP // TODO: may be change to PANCAKESWAP_TESTNET
        case networkIds.BSC:
            return REWARDS_PLATFORMS.PANCAKESWAP
    }
}

export const getRewardTokenName = (networkId) => {
    return networkId === networkIds.BSC ?
        'HI' :
        'WFUSE'
}

export const getPlatformPairName = (networkId) => {
    switch (networkId) {
        case networkIds.MAINNET:
            return 'UNI'
        case networkIds.BSC_TESTNET:
            return 'CAKE'
        case networkIds.BSC:
            return 'CAKE'
    }
}

const getHelpLinkFromNetworkId = (networkId) => {
    switch (networkId) {

        case networkIds.BSC:
            return 'https://docs.fuse.io/tutorials/adding-liquidity-on-pcs'
    }
}

const getHelpLinkFromPairName = (pairName) => {
    if (pairName === 'DEXT/FUSE') {
        return 'https://medium.com/fusenet/introducing-the-dext-fuse-liquidity-rewards-program-on-fuseswap-53bc6affd8bc'
    }
}

export const getAddLiquidityHelpLink = (networkId, pairName) => {
    const helpLinkFromPair = getHelpLinkFromPairName(pairName)
    if (helpLinkFromPair) {
        return helpLinkFromPair
    }

    return getHelpLinkFromNetworkId(networkId)
}

export const getCoingeckoId = (tokenAddress) => {
    return COINGECKO_ID_MAP[tokenAddress]
}

export const getReward = (rewardType) => {
    if (rewardType === 'single') {
        return SingleRewardProgram
    } else if (rewardType === 'multi') {
        return MultiRewardProgram
    }
}

export const getContractRewardType = (address) => {
    const contracts = {...CONFIG.contracts.bsc }
    return contracts[address].type
}

export const getRewards = (address) => {
    const contracts = {...CONFIG.contracts.bsc }
    return contracts[address].rewards
}