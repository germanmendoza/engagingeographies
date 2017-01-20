/**
 * Created by albertacedosanchez on 17/1/17.
 */



$.uiCoreAPI = {
    instanceUrl: "",

    // ------------------------------------------------

    _getRequest: function (url, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            cache:false,
            method:'GET',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _postRequest: function (url, data, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            data: data,
            cache:false,
            method:'POST',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _deleteRequest: function (url, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            cache:false,
            method:'DELETE',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    },
    _updateRequest: function (url, data, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            data: data,
            cache:false,
            method:'PUT',
            success:function (response) {
                callback(response);
            }.bind(this),
            error:function (response) {
                callback(false);
                return false;
            }.bind(this)
        });
    }
};
