/**
 * Created by albertacedosanchez on 18/1/17.
 */

util = {
    interPageDataKey : "interPageDataKey",
    redirectToPage: function (pageData) {
        this.putInLocalStorage(this.interPageDataKey, pageData.payload);
        window.location.href = pageData.url;
    },

    putInLocalStorage: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getFromLocalStorage: function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    },
    removeFromLocalStorage: function(key){
        sessionStorage.removeItem(key);
    }
};

uiCoreAPI = {
    //instanceUrl: "http://localhost:8080/",
    instanceUrl: "/enggeows/",

    _getRequest: function (url, callback) {
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            url: url,
            dataType: "json",
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
            dataType: "json",
            data: JSON.stringify(data),
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
            dataType: "json",
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
            dataType: "json",
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


uiCoreWS = {
    home : 'home/lisbon_citizen',
    home2 : 'home',
    SOP: 'home/SOP_data',
    SC: 'home/SC_data',
    CE: 'home/CE_data',
    finish: 'home/finish',
    globalEnd: 'home/final_details'
};

