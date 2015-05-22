/**
 * Created by Will.Ma on 2015/5/11.
 */

var ApplicationTest = Class.create((function () {

    function _setVars() {
        //_innerObj.btnSubmit = $("#btn_submit");
        _innerObj._abc = '_abc';
    };

    function _bindEvent() {
        //_innerObj.btnSubmit.click(_innerObj.addUser);
    };

    var _innerObj = {
        construct: function () {
            _setVars();
            _bindEvent();
        },
        say: function () {
            wLib.Log.log(_innerObj._abc);
        },
        setAbc: function (message) {
            _innerObj._abc = message;
        }
    };
    return _innerObj;
})());

$(document).ready(function () {
    window.test = new ApplicationTest();
});