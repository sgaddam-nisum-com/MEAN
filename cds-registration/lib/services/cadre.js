/** 
 * Citizen Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = restService.urls,
    cdsConfig = require('cds-config'),
    header = cdsConfig.restUrl.contentType,
    requireUtil = require("util"),
    log = require('cds-logger').logger("cadre-service");

exports.save = function(params, token, callback) {
    log.debug("save : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    //build url path    
    var url = {
        path: requireUtil.format(restUrls.cadre.save.path, params.userId),
        method: restUrls.cadre.save.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.edit = function(params, token, callback) {
    log.debug("edit : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.edit.path, params.userId),
        method: restUrls.cadre.edit.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.get = function(params, token, callback) {
    log.debug("get : " + (JSON.stringify(params)));
    var headers = header;
    headers[cdsConfig.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.cadre.get.path, params.userId),
        method: restUrls.cadre.get.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
