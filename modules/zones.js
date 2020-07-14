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

Zones.prototype.createNewDomain = function (serverId, args, bodyObj, callback) {
  var query = {};
  var body = {}
  query = extend(query, args);
  body = bodyObj;
  
  var createOptions = {
    command: 'servers' + '/' + serverId + '/zones',
    method: 'POST',
    client: this,
    query: query,
    body: body
  };

  utils.modem(createOptions, callback);
};

Zones.prototype.getZone = function (serverId, zoneId, callback) {
  
  var createOptions = {
    command: 'servers' + '/' + serverId + '/zones/' + zoneId,
    method: 'GET',
    client: this
  };

  utils.modem(createOptions, callback);
};

Zones.prototype.deleteZone = function (serverId, zoneId, callback) {
  
  var createOptions = {
    command: 'servers' + '/' + serverId + '/zones/' + zoneId,
    method: 'DELETE',
    client: this
  };

  utils.modem(createOptions, callback);
};

Zones.prototype.changeZoneRecord = function (serverId, zoneId, bodyObj, callback) {
  var body = {}
  body = bodyObj;

  var createOptions = {
    command: 'servers' + '/' + serverId + '/zones/' + zoneId,
    method: 'PATCH',
    client: this,
    body: body
  };

  utils.modem(createOptions, callback);
};

module.exports = Zones;