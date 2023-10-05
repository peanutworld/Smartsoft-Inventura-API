var Service = require('node-windows').Service;
var svc = new Service({
 name: 'Inventura API Service',
 description: 'Service for Inventura API (Node.js + Express)',
 script: 'C:\\Users\\Administrator\\Desktop\\InventuraApp\\api\\app.js'
});

svc.on('install',function(){
 svc.start();
});

svc.install();