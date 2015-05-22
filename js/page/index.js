/**
 * Created by Will.Ma on 2015/5/11.
 */

var ApplicationIndex = Class.create((function () {

    function _setVars() {
        _innerObj._abc = '_abc';
    };

    function _bindEvent() {
        //_innerObj.btnSubmit.click(_innerObj.addUser);
    };

    var _innerObj = {
        construct: function () {
            _setVars();
            _bindEvent();
        }
    };
    return _innerObj;
})());

$(document).ready(function () {
    window.index = new ApplicationIndex();
});