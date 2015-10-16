var window = require('window');
var $ = require('jquery');

// os: windows, linux, mac, iphone, ipad, android, windowsphone
// pc/mobile: pc, mobile
// browser: chrome, firefox, safari, msie8-11, msedge

// http://www.useragentstring.com/pages/useragentstring.php
module.export = function detect() {
    var ua = window.navigator.userAgent.toLowerCase();

    var env = {};

    // os
    if (ua.indexOf('windows nt') !== -1) {
        env.windows = true;
    } else if (ua.indexOf('mac os x') !== -1) {
        env.mac = true;
    } else if (ua.indexOf('linux') !== -1 && ua.indexOf('x11;') !== -1) {
        env.linux = true;
    } else if (ua.indexOf('iphone') !== -1) {
        env.iphone = true;
    } else if (ua.indexOf('ipad') !== -1) {
        env.ipad = true;
    } else if (ua.indexOf('android') !== -1) {
        env.android = true;
    } else if (ua.indexOf('windows phone') !== -1) {
        env.windowsphone = true;
    }
    
    // pc or mobile
    if (env.windows || env.mac || env.linux) {
        env.pc = true;
    } else if (env.iphone || env.ipad || env.android || env.windowsphone) {
        env.mobile = true;
    }
    
    // browser
    if (ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1) {
        env.chrome = true;
    } else if (ua.indexOf('firefox') !== -1) {
        env.firefox = true;
    } else if (ua.indexOf('msie') !== -1) {
        env.msie = true;
    } else if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
        env.safari = true;
    } else if (ua.indexOf('edge') !== -1) {
        env.msedge = true;
    }
    
    // msie version
    if (env.msie) {
        if (ua.indexOf('msie 7.0') !== -1) {
            env.msie7 = true;
        } else if (ua.indexOf('msie 8.0') !== -1) {
            env.msie8 = true;
        } else if (ua.indexOf('msie 9.0') !== -1) {
            env.msie9 = true;
        } else if (ua.indexOf('msie 10.0') !== -1) {
            env.msie10 = true;
        } else if (ua.indexOf('msie 11.0') !== -1) {
            env.msie11 = true;
        }
    }
    
    // add css class
    var classList = Object.keys(env).join(' ');
    $('html').addClass(classList);
    
    // exports
    return env;
};
