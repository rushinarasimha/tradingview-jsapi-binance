const pm2 = require('pm2');
var http = require('http');
var visits = 0;
var exec = require('child_process').exec;
/*
pm2.start({
    script: 'npm run tunnel137', //https://vedic137.loca.lt
    autorestart : true 
  }, (err, apps) => {
    pm2.disconnect()
    if (err) { throw err }
  })

  pm2.start({
    script: 'npm run tunnel1137', //https://vedic137two.loca.lt
    autorestart : true 
  }, (err, apps) => {
    pm2.disconnect()
    if (err) { throw err }
  })*/

  function main() {
    SpawnNPXServe('node binance-proxy.js save')    
    SpawnNPXServe('node binance-proxy.js binance')     
    SpawnNPXServe('node binance-proxy.js testnet')
  
    SpawnNPXServe('node binance-proxy.js receiveTestNet')
    SpawnNPXServe('node binance-proxy.js receiveTestNetBackTesting')
    SpawnNPXServe('node binance-proxy.js receiveBinance')
    SpawnNPXServe('npm run tunnel1137')
    SpawnNPXServe('npm run tunnel137')
   // SpawnNPXServe('')

  }


main()

function SpawnNPXServe(cmd) {
  setTimeout(function () {

    exec(cmd, function (error, stdout, stderr) {
      console.log('stdout: ', stdout);
      console.log('stderr: ', stderr);
      if (error !== null) {

        console.log('RUSHI - You SUCCESSFULLY CAUGHT THIS EXIT ERROR !exec error: ', error);

        setTimeout(function () {
          SpawnNPXServe(cmd)
          console.log('RESPAWNED THE SERVER AGAIN !!!! ')
        }, 1000)

      }
    })
  }, 1000)
}


/*////////////////////////////////////

1. List al processes  
    pm2 list

2. Stop a server
    pm2 stop 1

    All Docs: https://www.npmjs.com/package/pm2

/*///////////////////////////////////
