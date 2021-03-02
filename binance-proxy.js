const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('tiny'))

const proxy = require('express-http-proxy')
//app.use('/', proxy('https://api.binance.com'))

if(process.argv[2] == 'testnet')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(9090, () => {
        console.log('Testnet Listening on 9090')
    })
     
}
else if (process.argv[2] == "save"){
    app.use('/', proxy('http://saveload.tradingview.com'))
    app.listen(9089, () => {
        console.log('Real Binance.com Listening on 9089')
    })
}
else if (process.argv[2] == "receiveTestNet"){
    app.use('/', proxy('http://localhost:3003'))
    app.listen(3137, () => {
        console.log('receive data Listening on 3137')
    })
}
else if (process.argv[2] == "receiveBinance"){
    app.use('/', proxy('http://localhost:3013'))
    app.listen(1137, () => {
        console.log('receive data Listening on 1137')
    })
}
else if(process.argv[2] == 'binance')
{

    app.use('/', proxy('https://fapi.binance.com'))
    
    app.listen(9091, () => {
        console.log('Real Binance.com Listening on 9091')
    })

}