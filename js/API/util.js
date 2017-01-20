/**
 * Created by albertacedosanchez on 17/1/17.
 */


$.util = {
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
