/**
 * Created by albertacedosanchez on 17/1/17.
 */



$.uiCoreAPI.instanceUrl = "http://localhost:8080/";

$.app={
    setHome:function (data) {
        $.uiCoreAPI._postRequest(
            $.uiCoreAPI.instanceUrl + $.uiCoreWS.home,
            data,
            function (response) {
                alert(response);
            }
        );
    },
    getHome:function () {
        $.uiCoreAPI._getRequest(
            $.uiCoreAPI.instanceUrl + $.uiCoreWS.home2,
            function (response) {
                alert(response);
            }
        );
    }
};