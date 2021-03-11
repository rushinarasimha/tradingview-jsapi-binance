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
    SpawnCmd(`ls`)
    SpawnCmd(`cd /Users/rushi/Documents/charting_library && node runforever.js`)
    
  
    SpawnCmd('node binance-proxy.js save', true)    
    SpawnCmd('node binance-proxy.js binance', true)     
    //SpawnCmd('node  --max-old-space-size=8192 binance-proxy.js testnet', true)
  
    SpawnCmd('node binance-proxy.js receiveTestNet', true)
    SpawnCmd('node binance-proxy.js receiveTestNetBackTesting', true)
    SpawnCmd('node binance-proxy.js receiveBinance', true)
   // SpawnCmd('npm run tunnel1137', true)
   // SpawnCmd('npm run tunnel137', true)
    SpawnCmd('"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --args --profile-directory="/Users/rushi/Library/Application Support/Google/Chrome/Profile 5"')

  }


main()

function SpawnCmd(cmd, forever) {
  setTimeout(function () {

    exec(cmd, function (error, stdout, stderr) {
      console.log('stdout: ', stdout);
      console.log('stderr: ', stderr);
      if (error !== null) {

        console.log('RUSHI - You SUCCESSFULLY CAUGHT THIS EXIT ERROR !exec error: ', error);

        if(forever) {
        setTimeout(function () {
          SpawnCmd(cmd)
          console.log('RESPAWNED THE SERVER AGAIN !!!! ')
        }, 1000)

      }
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
