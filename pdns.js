var fs = require('fs');
var libPath = __dirname + '/modules';

var PDNS = function (options) {
    var _this = this;

    this.utils = require('./lib/utils');

    ['apiKey', 'host'].forEach(function (required) {
        if (!options[required]) {
            throw new Error('options.' + required + ' is a required argument.');
        }
    });

    this.config = options;
    this.authorized = false;

    // Add all the modules
    var files = fs.readdirSync(libPath);
    var i = 0;
    var len = files.length;
    while (i < len) {
        var name = files[i].replace('.js', '');
        var Item = require(libPath + '/' + name);
        _this[name] = new Item(this.config);
        i++;
    }
};

module.exports = PDNS;