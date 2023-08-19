import { createStore } from 'vuex'

const slugs = {
  bch: 'BCH',
  bnb: 'BNB',
  btc: 'BTC',
  doge: 'DOGE',
  eth: 'ETH',
  ltc: 'LTC',
  xrp: 'XRP',
  sol: 'SOL',
  trx: 'TRX'
}

export default createStore({
  state: {
    top: [
      'BTC',
      'ETH',
      'SOL'
    ],
    pairs: [
      'btcusdt',
      'ethusdt',
      'ltcusdt',
      'bnbusdt',
      'xrpusdt',
      'solusdt',
      'bchusdt',
      'dogeusdt',
      'trxusdt'
    ],
    tickers: {},
    infos: {},
    metas: {
      BCH: {
        name: 'Bitcoin Cash',
        slug: 'bch',
        symbol: 'bch',
        urls: {
          website: 'https://www.bitcoincash.org'
        },
        about: 'Bitcoin Cash (BCH) is a cryptocurrency that was created and launched to bring decentralization back to cryptocurrency. It is the result of a 2017 Bitcoin "hard fork," which occurs when an existing blockchain splits into two. Bitcoin Cash allows a greater number of transactions in a single block than Bitcoin, which should lower fees and transaction times.',
        logo: require('../assets/img/bch.png')
      },
      LTC: {
        name: 'Litecoin',
        slug: 'ltc',
        symbol: 'LTC',
        urls: {
          website: 'https://litecoin.org/'
        },
        about: 'Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used and its max supply. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins. There will be 84 million Litecoins that can ever be mined, which is 4 times more than Bitcoins max supply.',
        logo: require('../assets/img/ltc.png')
      },
      BNB: {
        name: 'Binance Coin',
        slug: 'bnb',
        symbol: 'BNB',
        urls: {
          website: 'https://binance.com'
        },
        about: 'Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally.',
        logo: require('../assets/img/bnb.png')
      },
      BTC: {
        name: 'Bitcoin',
        slug: 'btc',
        symbol: 'BTC',
        urls: {
          website: 'https://bitcoin.org'
        },
        about: 'Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after in January 2009, and the rest is history.',
        logo: require('../assets/img/btc.png')
      },
      DOGE: {
        name: 'Dogecoin',
        slug: 'doge',
        symbol: 'DOGE',
        urls: {
          website: 'https://dogecoin.com/'
        },
        about: 'Dogecoin is a cryptocurrency that was created on December 6th, 2013 based on the popular "Doge" Internet meme and features a Shiba Inu on its logo. The codebase of the project was a fork of Litecoin, in which most of the same features such hash hashing algorithm were inherited, with the only difference of branding and large inflationary supply.',
        logo: require('../assets/img/doge.png')
      },
      ETH: {
        name: 'Ethereum',
        slug: 'eth',
        symbol: 'ETH',
        urls: {
          website: 'https://www.ethereum.org'
        },
        about: 'Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.',
        logo: require('../assets/img/eth.png')
      },
      SOL: {
        name: 'Solana',
        slug: 'sol',
        symbol: 'SOL',
        urls: {
          website: 'https://solana.com'
        },
        about: 'Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains. ',
        logo: require('../assets/img/sol.png')
      },
      TRX: {
        name: 'Tron',
        slug: 'trx',
        symbol: 'TRX',
        urls: {
          website: 'https://tron.network'
        },
        about: 'TRON (TRX) is a decentralized blockchain-based operating system developed by the Tron Foundation and launched in 2017. Originally TRX tokens were ERC-20-based tokens deployed on Ethereum, but a year later they were moved to their own network.',
        logo: require('../assets/img/trx.png')
      },
      XRP: {
        name: 'Ripple',
        slug: 'xrp',
        symbol: 'XRP',
        urls: {
          website: 'https://xrpl.org'
        },
        about: 'Ripple is a currency that runs on a digital payment platform called RippleNet, which is layered on a distributed ledger database called XRP Ledger.',
        logo: require('../assets/img/xrp.png')
      }
    },
    units: {
      USDT: {
        label: 'Tether',
        symbol: 'usdt',
        logo: require('../assets/img/usdt.png')
      }
    },
    baseUnits: 'usdt',
    graphOptions: {
      interval: '15m'
    },
    graphStats: {
      min: 0,
      max: 0
    }
  },
  getters: {
    topCurrencies: state => {
      return state.top.map(short => (({ about, logo, name, slug, symbol }) => ({ about, logo, name, slug, symbol }))(state.metas[short]))
    },
    getCurrencyBySlug: (state) => (slug) => {
      return state.metas[slugs[slug]] || {}
    },
    getTickerBySlug: (state) => (slug) => {
      const pair = slugs[slug].toLowerCase() + '' + state.baseUnits
      return state.tickers[pair] || {}
    },
    getInfoBySlug: (state) => (slug) => {
      const pair = slugs[slug].toLowerCase() + '' + state.baseUnits
      return state.infos[pair] || {}
    },
    getGraphStats: (state) => () => {
      return state.graphStats || {}
    }
  },
  mutations: {
    UPDATE_INFO: (state, payload) => {
      state.infos[payload.pair] = {
        ...state.infos[payload.pair],
        ...payload
      }
    },
    UPDATE_TICKER: (state, payload) => {
      state.tickers[payload.pair] = {
        ...state.tickers[payload.pair],
        ...payload
      }
    },
    UPDATE_GRAPH_OPTIONS: (state, payload) => {
      state.graphOptions = {
        ...state.graphOptions,
        ...payload
      }
    },
    UPDATE_GRAPH_STATS: (state, payload) => {
      state.graphStats = {
        ...state.graphStats,
        ...payload
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
