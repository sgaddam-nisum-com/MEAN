/** 
 * Office Service
 * Module dependencies.
 */

var restService = require('cds-rest-services'),
    restUrls = restService.urls,
    cdsConfig = require('cds-config'),
    requireUtil = require("util"),
    header = cdsConfig.restUrl.contentType,
    log = require('cds-logger').logger("office-service");

exports.VnCVerificationList = function(params, token, callback) {
    log.debug("VnCVerificationList : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.office.vnCVerificationList, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.verifyCadre = function(params, token, callback) {
    log.debug("verifyCadre : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    //build url path
    var url = {
        path: requireUtil.format(restUrls.office.verifyVnC.path, params.userId),
        method: restUrls.office.verifyVnC.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.rejectVnC = function(params, token, callback) {
    log.debug("rejectVnC : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    var url = {
        path: requireUtil.format(restUrls.office.rejectVnC.path, params.userId),
        method: restUrls.office.rejectVnC.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.holdVnC = function(params, token, callback) {
    log.debug("holdVnC : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    var url = {
        path: requireUtil.format(restUrls.office.holdVnC.path, params.userId),
        method: restUrls.office.holdVnC.method
    };

    restService.builbArgs(restUrls.office.holdVnC, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.assignCadreForApproval = function(token, callback) {
    log.debug("assignCadreForApproval : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[cdsConfig.token] = token;

    restService.builbArgs(restUrls.office.assignCadreForApproval, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
