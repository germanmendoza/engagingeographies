/**
 * Created by albertacedosanchez on 18/1/17.
 * Updated by Germán Mendoza many several times :D
 */

//------------------------------------------------------

util = {
    interPageDataKey : "interPageDataKey",
    interPageLangKey : "interPageLangKey",

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

//------------------------------------------------------

uiCoreAPI = {
    //instanceUrl: "http://localhost:8080/",
    instanceUrl: "/enggeowstest/",
    // instanceUrl: "http://ec2-34-242-113-148.eu-west-1.compute.amazonaws.com:8080/enggeows/",

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

//------------------------------------------------------

uiCoreWS = {
    home : 'esri/lisbon_citizen/',
    home2 : 'esri/',
    SOP: 'esri/SOP_data/',
    SC: 'esri/SC_data/',
    CE: 'esri/CE_data/',
    finish: 'esri/finish/',
    globalEnd: 'esri/final_details/',
    comments: 'esri/comments/'
};

//------------------------------------------------------

/**
 * Language translations
 * based on https://github.com/dakk/jquery-multilang
 * and on   https://github.com/recurser/jquery-i18n
 */
var translator = {
    _languages: ['en', 'pt', 'es'],
    _currLangData: null,

    /**
     *  Verifies if target is among the registered languages
     * @param target - the language identifier, e.g., 'en'
     * @returns {boolean} - true if target is a registered language, false otherwise
     */
    _checkInLanguage: function (target){
        var found = false;
        for(var i = 0; i < this._languages.length; i++){
            if (target === this._languages[i]){
                found = true;
                break;
            }
        }
        return found;
    },

    /**
     * Applies a language definition data to all html elements that have defined a 'langkey' attribute.
     * @param langDefData - the language definition data
     */
    _translateAll: function (langDefData){
        $("[langkey]").each (function (){

            var strTr = langDefData [$(this).attr ('langkey')];
            if (!($(this).attr ('tagName'))){
                $(this).text(strTr);
            }else {
                var tagName = ($(this).attr('tagName')).toLowerCase();
                if (tagName === "div") {
                    $(this).text(strTr);
                }
                else if (tagName === "a") {
                    $(this).text(strTr);
                }
                else if (tagName === "span") {
                    $(this).text(strTr);
                }
                else if (tagName === "p") {
                    $(this).text(strTr);
                }
                else if (tagName === "textarea") {
                    $(this).text(strTr);
                }
                else if (tagName === "option") {
                    $(this).text(strTr);
                }
                else if (tagName === "input") {
                    $(this).val(strTr);
                }
                else {
                    $(this).text(strTr);
                }

                /*if(typeof ($(this).attr("text")) !== typeof undefined && $(this).attr("text") !== false){
                 $(this).text(strTr);
                 }
                 else if(typeof ($(this).attr("value")) !== typeof undefined && $(this).attr("value") !== false){
                 $(this).val(strTr);
                 }
                 else{
                 $(this).html(strTr);
                 }*/
            }
        });
    },

    /**
     * Determines the current language of the browser, sets it as current language, and applies it to all html elements that have defined a 'langkey' attribute.
     * @param doneFn - callback function called when the translation is done
     */
    applyBrowserLanguage: function (doneFn){
        var langCode = navigator.language.substr (0, 2);
        this.applyLanguage(langCode, doneFn);
    },

    /**
     * Loads a the requested language definition data, sets the requested language as current language, and applies it to all html elements that have defined a 'langkey' attribute.
     * @param langCode - the language identifier, e.g., 'en'
     * @param doneFn - callback function called when the translation is done
     */
    applyLanguage: function (langCode, doneFn){
        var curObject = this;
        var applyLng = function (jsonData){
            curObject._currLangData = jsonData;
            curObject._translateAll(jsonData);
            if(doneFn){
                doneFn(langCode);
            }
        };
        if (this._checkInLanguage(langCode))
            $.getJSON('data/langs/'+langCode+'.json', null, applyLng);
        else
            $.getJSON('data/langs/en.json', null, applyLng);
    },

    /**
     * Applies the current language to element with a specific 'langkey' attribute value
     * @param keyStr - the 'langkey' attribute value
     */
    applyLanguageToKey: function (keyStr){
        var curObject = this;
        var args = Array.prototype.slice.call(arguments);
        $("[langkey=" + keyStr + "]").each (function (){
            var strTr = curObject._currLangData [$(this).attr ('langkey')];
            args.shift();
            $(this).html(curObject.formatPrint(strTr, args));
        });
    },

    /**
     * Obtain the string from the current language that corresponds to specific 'langkey' attribute value
     * @param langKeyValue - the 'langkey' attribute value
     */
    getKeyLanguageValue: function (langKeyValue){
        return this._currLangData [langKeyValue];
    },

    /**
     * Resembles the printf behaviour
     * @param strTr - The string to be formatted with the placeholders, e.g., 'The $ to be $'
     * @param args - The values for the placeholders, e.g., ['string', 'formatted']
     * @returns {string} the formatted string
     */
    formatPrint: function (strTr, args) {
        if (!args) return strTr;
        for(var i = 0; i < args.length; i++){
            strTr = strTr.replace("$", args[i]);
        }
        return strTr;
    },

    /**
     * Applies the language used in the previous page
     * @param donFn The callback function called when the translation has been done. It receive the language code as a parameter.
     */
    applyPreviousLanguage: function(donFn){
        var langCode = util.getFromLocalStorage(util.interPageLangKey);
        if (langCode){
            this.applyLanguage(langCode, donFn);
        }
        else{
            donFn(langCode);
        }
    },

    /**
     * Saves the language code to indicate following pages the current language.
     * @param langCode - The language code
     */
    saveChosenLanguage: function (langCode) {
        util.putInLocalStorage(util.interPageLangKey, langCode);
    }
};

//------------------------------------------------------

app = {
    setHome: function (data, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.home,
            data,
            callback
        );
    },
    getHome: function () {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.home2,
            function (response) {
                alert(response);
            }
        );
    },
    setSOP: function (id, data2, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SOP + id,
            data2,
            callback
        );
    },
    setSC: function (id, data2, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SC + id,
            data2,
            callback
        );
    },
    setCE: function (id, data, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.CE + id,
            data,
            callback
        );
    },
    getSOP: function (id, callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SOP + id,
            callback
        );
    },
    getSC: function (id, callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SC + id,
            callback
        );
    },
    getCE: function (id, callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.CE + id,
            callback
        );
    },
    finish: function (id, data, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.finish + id,
            data,
            callback
        );
    },
    finishA: function (id, data, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.globalEnd + id,
            data,
            callback
        );
    },
    comments: function (id, data, callback) {
        uiCoreAPI._postRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.comments + id,
            data,
            callback
        );
    },
    getSOPA: function (callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SOP,
            callback
        );
    },
    getSCA: function (callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.SC,
            callback
        );
    },
    getCEA: function (callback) {
        uiCoreAPI._getRequest(
            uiCoreAPI.instanceUrl + uiCoreWS.CE,
            callback
        );
    }
};