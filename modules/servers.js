var utils = require('../lib/utils');
var extend = utils.extend;

var Servers = function (config) {
  this.config = config;
};

Servers.prototype.listAllServers = function (callback) {
    var options = {};
  
    var createOptions = {
      command: 'servers',
      method: 'GET',
      client: this,
      body: options
    };
  
    utils.modem(createOptions, callback);
  };


Servers.prototype.listOneServer = function (serverId, callback) {
    var options = {};
  
    var createOptions = {
      command: 'servers' + '/' + serverId,
      method: 'POST',
      client: this,
      body: options
    };
  
    utils.modem(createOptions, callback);
};

module.exports = Servers;