/**
 * Created by albertacedosanchez on 17/2/17.
 */



function startAll () {


    uiCoreAPI.instanceUrl = "http://localhost:8080/";

    app = {
        getSOP: function (callback) {
            uiCoreAPI._getRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.SOP,
                callback
            );
        },
        getSC: function (callback) {
            uiCoreAPI._getRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.SC,
                callback
            );
        },
        getCE: function (callback) {
            uiCoreAPI._getRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.CE,
                callback
            );
        },
        finish: function (data, callback) {
            uiCoreAPI._postRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.globalEnd,
                data,
                callback
            );
        }
    };

    startMapComponents();
    areasLoading();

    $('#finishBtn').click(function () {
        var data = {
            id : util.getFromLocalStorage(util.interPageDataKey),
            mailUser : parseInt($( "#mail_user" ).val()),
            twitterName : $( "#twitter_name" ).val()
        };
        app.finish(data,function (response) {
            if (response === false) {
                alert("PROBLEMS");
            }
            else {
                alert("You are the fucking master");
            }
        })
    });

}

function startMapComponents(){

    function createAll(rmap){
        map = rmap;
        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    function isElementInViewport (el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return !((rect.top==0)&&(rect.left==0)&&(rect.bottom==0)&&(rect.right==0));
    }

    var map1 = L.map('map', {
        scrollWheelZoom: false,
    });
    map1.on('load', function (e) {
        if(isElementInViewport($('#map'))){
            createAll(map1);
        }
    });
    map1.setView([38.7500, -9.1500], 12);

    var mapxs = L.map('map2');
    mapxs.on('load', function (e) {
        if(isElementInViewport($('#map2'))){
            createAll(mapxs);
        }
    });
    mapxs.setView([38.7500, -9.1500], 12);
}



function areasLoading() {

    uiCoreAPI.instanceUrl = "http://localhost:8080/";

    //var id = util.getFromLocalStorage(util.interPageDataKey);
    //var id = "589888c01c0856701818e512";
    var SOPLayers, SCLayers, CELayers;

    var count = 0;
    var SOPStyle = function(feature){return {color: "#ff0000"}; };
    var SCStyle = function(feature){
        if (count++ >=   2){
            return {color: "#6000ff"};
        }
        else{
            return {color: "#4080ff"};
        }
    };
    var CEStyle = function(feature){return {color: "#00ff00"}; };

    app.getSOP(function (SOPLayersGeoJson) {
        var geoJson = JSON.parse(SOPLayersGeoJson.geoJson);
        SOPLayers = L.geoJson(geoJson, {style: SOPStyle}).addTo(map);

        app.getSC(function (SCLayersGeoJson) {
            var geoJson = JSON.parse(SCLayersGeoJson.geoJson);
            SCLayers = L.geoJson(geoJson, {style: SCStyle}).addTo(map);

            app.getCE(function (CELayersGeoJson) {
                var geoJson = JSON.parse(CELayersGeoJson.geoJson);
                CELayers = L.geoJson(geoJson, {style: CEStyle}).addTo(map);
            });
        });
    });
}
