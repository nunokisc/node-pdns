var PDNS = require('../pdns');
var config = {
  apiKey: process.env.PDNS_APIKEY || 'apikey',
  host: process.env.PDNS_HOST || '1.2.3.4',
  apiPath: process.env.PDNS_APIPATH || '/api/v1/',
  port: process.env.PDNS_PORT || '8081'
};
var pdnsexample = new PDNS(config);

/* pdnsexample.servers.listAllServers(function (err, data) {
  if (err) {
    console.log('ERROR');
    console.log(err);
  } else {
    console.log(data);
  }
}); */

pdnsexample.servers.listOneServer('localhost', function (err, data) {
  if (err) {
    console.log('ERROR');
    console.log(err);
  } else {
    console.log(data);
  }
});