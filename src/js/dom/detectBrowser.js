var window = require('window');
var $ = require('jquery');

/**
 * @param {String} code - source code
 * @param {HTMLElement} node - parent node which append script tag, default is document.body
 * @param {String} path - a file name which display in source tab of chrome developer tool
 */
module.export = function detectBrowser() {
    var html = $('html');
    var ua = window.navigator.userAgent;
    if (ua.match(/Chrome\/.*/)) {
        html.addClass('chrome');
    } else if (ua.match(/Chrome\/.*Mobile.*/)) {
        html.addClass('chrome mobile');
    } else if (ua.match(/Firefox\/.*/)) {
        html.addClass('firefox');
    } else if (ua.match(/Mozilla\/.*Fennec.*/)) {
        html.addClass('firefox mobile');
    } else if (ua.match(/Safari\/.*/)) {
        html.addClass('safari');
    } else if (ua.match(/.*iPhone\/.*/)) {
        html.addClass('safari mobile iphone');
    } else if (ua.match(/iPad\/.*/)) {
        html.addClass('safari mobile ipad');
    } else if (ua.match(/MSIE 11\.0.*/)) {
        html.addClass('ie ie11');
    } else if (ua.match(/MSIE 10\.0.*/)) {
        html.addClass('ie ie10');
    } else if (ua.match(/MSIE 9\.0.*/)) {
        html.addClass('ie ie9');
    } else if (ua.match(/MSIE 8\.0.*/)) {
        html.addClass('ie ie8');
    } else if (ua.match(/MSIE 7\.0.*/)) {
        html.addClass('ie ie7');
    }
};
