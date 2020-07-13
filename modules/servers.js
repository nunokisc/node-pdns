var utils = require('../lib/utils');
var extend = utils.extend;

var Servers = function (config) {
  this.config = config;
};

Servers.prototype.listAllServers = function (callback) {

  var createOptions = {
    command: 'servers',
    method: 'GET',
    client: this
  };

  utils.modem(createOptions, callback);
};

Servers.prototype.listOneServer = function (serverId, callback) {

  var createOptions = {
    command: 'servers' + '/' + serverId,
    method: 'GET',
    client: this
  };

  utils.modem(createOptions, callback);
};

Servers.prototype.flushCacheByDomain = function (serverId, args, callback) {
  var query = {};

  query = extend(query, args);
  
  var createOptions = {
    command: 'servers' + '/' + serverId + '/cache/flush',
    method: 'PUT',
    client: this,
    query: query
  };

  utils.modem(createOptions, callback);
};

module.exports = Servers;