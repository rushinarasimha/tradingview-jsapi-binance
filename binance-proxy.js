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
else if(process.argv[2] == 'binance9091')
{

    app.use('/', proxy('https://fapi.binance.com'))
    
    app.listen(9091, () => {
        console.log('Real Binance.com Listening on 9091')
    })

}
else if(process.argv[2] == 'proxy')
{


   let proxyUrl = `https://${process.argv[3]}.loca.lt`
   let proxyPort = process.argv[4]
    app.use('/', proxy(proxyUrl))
    
    app.listen(proxyPort, () => {
        console.log(`Running Proxy for CORS Redirection on port ${proxyPort} for url ${proxyUrl}`)
    })

}
else if(process.argv[2] == 'testnet8089')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8089, () => {
        console.log('Testnet Listening on 8089')
    })
     
}

else if(process.argv[2] == 'testnet8189')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8189, () => {
        console.log('Testnet Listening on 8189')
    })
     
}

else if(process.argv[2] == 'testnet8289')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8289, () => {
        console.log('Testnet Listening on 8289')
    })
     
}

else if(process.argv[2] == 'testnet8389')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8389, () => {
        console.log('Testnet Listening on 8389')
    })
     
}

else if(process.argv[2] == 'testnet8489')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8489, () => {
        console.log('Testnet Listening on 8489')
    })
     
}

else if(process.argv[2] == 'testnet8589')
{
    app.use('/',proxy('https://testnet.binancefuture.com'))
    app.listen(8589, () => {
        console.log('Testnet Listening on 8589')
    })
     
}
else if (process.argv[2] == "save"){
    app.use('/', proxy('http://saveload.tradingview.com'))
    app.listen(9089, () => {
        console.log('Real Binance.com Listening on 9089')
    })
}
else if (process.argv[2] == "receiveTestNet"){
    app.use('/', proxy('http://localhost:3333'))
    app.listen(4137, () => {
        console.log('receive TestNet  4137')
    })
}
else if (process.argv[2] == "receiveTestNetBackTesting"){
    app.use('/', proxy('http://localhost:3337'))
    app.listen(5137, () => {
        console.log('receiveTestNetBackTesting TestNet on 5137')
    })
}
else if (process.argv[2] == "receiveBinance"){
    app.use('/', proxy('http://localhost:3013'))
    app.listen(1137, () => {
        console.log('receive Binance on 1137')
    })
}
else if (process.argv[2] == "receiveBinanceBackTesting"){
    app.use('/', proxy('http://localhost:3037'))
    app.listen(5037, () => {
        console.log('receive Binance on 5037')
    })
}
