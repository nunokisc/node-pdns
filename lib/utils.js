var request = require('request');

module.exports = {
  modem: function (options, callback) {
    var requestBody, client, apiKey, apiPath, command, method, query;

    client = options.client;
    apiKey = client.config.apiKey;
    apiPath = client.config.apiPath;
    requestBody = options.body;
    requestQuery = options.query;
    command = options.command;
    method = options.method;

    if (requestQuery) {
      query = '?' + require('querystring').stringify(requestQuery)
    }
    else {
      query = '';
    }

    var serverOptions = {
      uri: 'http://' + client.config.host + ':' + client.config.port + apiPath + command + query,
      method: method,
      headers: {},
      servername: client.config.host
    };
    console.log('http://' + client.config.host + ':' + client.config.port + apiPath + command + query)

    serverOptions.headers['X-API-Key'] = apiKey;
    serverOptions.headers['accept'] = 'application/json';
    if (requestBody)
      serverOptions.body = requestBody;

    if (typeof client.config.userAgent !== 'undefined') {
      serverOptions.headers['User-Agent'] = client.config.userAgent;
    }

    function send(statusCode, data, callback) {
      if (data) {
        return callback(null, data);
      }
      else {
        return callback(statusCode);
      }
    }

    request(serverOptions, function (err, res, body) {
      if (err) {
        return callback(err);
      }
      var statusCode = res.statusCode.toString();
      send(statusCode, body, callback);
    });
  },
	/**
	 * Extend properties of one object with one or more Objects
	 * Copied from Underscore - http://underscorejs.org/
	 * @param obj Object
	 * @returns Object
	 */
  extend: function (obj) {
    if (typeof obj !== 'object') return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};