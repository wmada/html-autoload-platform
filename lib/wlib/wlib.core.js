/**
 * 库核心方法集合
 * @author Will.Ma
 * @date 2015-05-12
 * @version 0.1
 */

var wLib = (function () {

    var requestParams = null;

    function getParamsArray(paramsStr) {
        var params = {};
        var pairs = paramsStr.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos === -1) {
                continue;
            }
            params[pairs[i].substring(0, pos)] = decodeURIComponent(pairs[i].substring(pos + 1));
        }
        return params;
    }

    var _innerObj = {
        extend: function (source) {
            for (var property in source)
                _innerObj[property] = source[property];
        },
        getUrlParam: function (paramName) {
            if (requestParams === null) {
                requestParams = getParamsArray(location.search.substring(1));
            }
            return requestParams[paramName];
        }
    };

    return _innerObj;

})();

/**
 * Log
 */
wLib.extend((function () {

    var _innerObj = {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        DEBUG: 'debug',
        LOG: 'log',
        log: function (message, level) {
            var consoleMessage = Date().toString() + ': ' + message;
            switch (level) {
                case this.ERROR:
                    console.error(consoleMessage);
                    break;
                case this.WARNING:
                    console.warn(consoleMessage);
                    break;
                case this.INFO:
                    console.info(consoleMessage);
                    break;
                case this.DEBUG:
                    console.debug(consoleMessage);
                    break;
                case this.LOG:
                    console.log(consoleMessage);
                    break;
                default :
                    console.log(consoleMessage);
            }
        }
    };

    return {
        Log: _innerObj
    };

})());

/**
 * useful functions
 */
wLib.extend({
    isNumber: function (str) {
        return /^(-?)([0-9]+)(.([0-9]*))?$/.test(str);
    },
    isInteger: function (str) {
        return /^(-?)([0-9]+)$/.test(str);
    },
    getRegexFirstMatch: function (str, reg) {
        var match = typeof(str) == "string" ? str.match(reg) : [];
        if (match && match.length == 2) {
            return match[1];
        } else {
            return "";
        }
    },
    getCurrentSeconds: function (timestamp) {
        var date = timestamp ? new Date(timestamp) : new Date();
        return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    },
    getCurrentMilliseconds: function (timestamp) {
        var date = timestamp ? new Date(timestamp) : new Date();
        return date.getHours() * 3600000 + date.getMinutes() * 60000 + date.getSeconds() * 1000 + date.getMilliseconds();
    },
    getTimeUtilNow: function (former) {
        var range = Math.floor(((new Date()).getTime() - former.getTime()) / 1000);
        if (range < 60) {
            return range + '秒';
        } else if (range < 3600) {
            return Math.floor(range / 60) + '分钟';
        } else if (range < 86400) {
            return Math.floor(range / 3600) + '小时';
        } else {
            return Math.floor(range / 86400) + '天';
        }
    },
    getDate: function (date) {
        date = date == undefined ? new Date() : date;
        var year = date.getYear() + 1900;
        var month = date.getMonth() + 1;
        var dayOfMonth = date.getDate();
        return year + '-' + (month > 10 ? month : '0' + month) + '-' + (dayOfMonth > 10 ? dayOfMonth : '0' + dayOfMonth);
    },
    fullScreen: function () {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    }
});