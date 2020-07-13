var utils = require('../lib/utils');
var extend = utils.extend;

var Zones = function (config) {
  this.config = config;
};

Zones.prototype.listAllZonesInServer = function (serverId, args, callback) {
  var query = {};

  query = extend(query, args);
  
  var createOptions = {
    command: 'servers' + '/' + serverId + '/zones',
    method: 'GET',
    client: this,
    query: query
  };

  utils.modem(createOptions, callback);
};

module.exports = Zones;