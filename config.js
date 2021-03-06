module.exports = {
    // network selected by default if user's active network wasn't saved
    network: {
        defaultNodeKey: 'Mainnet_Infura'
    },

    // defines which elements will be loaded from storage
    storage: {
        nodeList: true,
        activeNode: true,
        contractList: true,
        activeContract: true
    },

    stub: {
        contracts: {
            path: '../stubs/contractListStub.js', //TO DO
            use: false
        }
    },

    donations: {
        eth: '0xF01Acbaf3e5d2403015ac6E8C2518EfEDdaBC699',
        btc: '1JMpxB35CQvhxGmrhqbh5dbe9LwJT8tU3q'
    },

    contacts: {
        github: 'https://github.com/stoll/interact'
    },

    server: {
        //url: 'https://justsmartcontracts.dev/jscapi'
        url: 'http://localhost:3000'
    }
}
