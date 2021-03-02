const pm2 = require('pm2');

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
  })

/*////////////////////////////////////

1. List al processes  
    pm2 list

2. Stop a server
    pm2 stop 1

    All Docs: https://www.npmjs.com/package/pm2

/*///////////////////////////////////
