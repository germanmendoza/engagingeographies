/**
 * Created by Germán on 16/03/2017.
 *
 * based on https://github.com/dakk/jquery-multilang
 * and on   https://github.com/recurser/jquery-i18n
 */

// var languages = ['en', 'es'];

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
        $("[langkey]").each(function (){
            var strTr = langDefData [$(this).attr ('langkey')];
            if(strTr) {
                if (typeof ($(this).attr("text")) !== typeof undefined && $(this).attr("text") !== false) {
                    $(this).text(strTr);
                }
                else if (typeof ($(this).attr("value")) !== typeof undefined && $(this).attr("value") !== false) {
                    $(this).val(strTr);
                }
                else {
                    $(this).html(strTr);
                }
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
    }
};
