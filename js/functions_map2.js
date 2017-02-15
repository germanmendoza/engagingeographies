// JavaScript Document "map_2"

// Modal when load page

// $('#myModal13').modal('show');

// POPOVER

var SC = [];
var currGroup;
var areasdrawn = 0;
var name_groups;
var number = 0;

function startAll() {
    buttonDelete.prop('disabled', true);
    buttonDraw.prop('disabled', true);

    $("#name_actual_group").select2({
        tags: [],
        tokenSeparators: [",", " "]
    });

    $('#submit_name_group').click(function () {
        name_groups = $('#name_actual_group').val();
        if (name_groups.length > 0) {
            $("#SC_group").toggleClass("hidden show");
            $("#groups_done").toggleClass("hidden show");
            namegroup();
            currGroup = {
                name: name_groups[number],
                areas: [],
                layergroup: new L.featureGroup()
            };
        }
        else {
            alert("Please, insert at least a group name");
        }
    });


    function namegroup() {
        $("#group_name").html("Group hola");
        var replaced = $("#group_name").html().replace('hola', name_groups[number]);
        $("#group_name").html(replaced);
        $("#textchange").html("Now, think about the Group X that you have.");
        var replaced1 = $("#textchange").html().replace('X', name_groups[number]);
        $("#textchange").html(replaced1);
    };


    $('#spatial_dimension').click(function () {
        if ($("input[name=spatial]:checked").val() == "true") {
            $("#SC_group").toggleClass("hidden show");
            $("#specifications").toggleClass("hidden show");
        }
        else {
            if (number == name_groups.length - 1) {
                alert("Ok, let's go for the next group");
                showAllGroups();
                $("#select_group").toggleClass("hidden show");
                $("#SC_group").toggleClass("hidden show");
            }
            else {
                number = number + 1;
                namegroup();
                $("#SC_group").removeClass().addClass("show");
                $("#another_draw").removeClass().addClass("hidden");
            }

        }
    });


    $('#specifications_done').click(function () {
        if ($("#nature").val() != "0") {

            $("#draw").toggleClass("hidden show");
            $("#specifications").toggleClass("hidden show");
            buttonDraw.prop('disabled', false);
            buttonDelete.prop('disabled', false);
            $("#nature").val("0");

        }
        else {
            alert("Please, choose a kind of group");
        }
    });


    $('#bonding_bridging_done').click(function () {

        $("#another_draw").toggleClass("hidden show");
        $("#questions_bonding_bridging").toggleClass("hidden show");
        areasdrawn = areasdrawn + 1;
        counterAreasName();
        buttonDraw.prop('disabled', false);
        $(".finish-map").attr('disabled', false);
        map.setZoom(zoommap);

        var polygonData = {
            type: "sc",
            layer: L.geoJson(drawnItems.toGeoJSON()),
            socialCapital: {
                bosc1: parseInt($("input[name=bosc1]:checked").val()),
                bosc2: parseInt($("input[name=bosc2]:checked").val()),
                bosc3: parseInt($("input[name=bosc3]:checked").val()),
                brsc1: parseInt($("input[name=brsc1]:checked").val()),
                brsc2: parseInt($("input[name=brsc2]:checked").val()),
                brsc3: parseInt($("input[name=brsc3]:checked").val())
            }
        };
        currGroup.areas.push(polygonData);

        map.removeLayer(drawnItems);
        drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        map.addLayer(polygonData.layer);
    });


    var AreaSelected;
    var group = new L.featureGroup();

    $('.finish-map').click(function () {
        map.removeLayer(drawnItems);

        currGroup.position = number;
        SC.push(currGroup);

        for (var j = 0; j < currGroup.areas.length; j++) {
            map.removeLayer(currGroup.areas[j].layer);
        }

        if (number == name_groups.length - 1) {
            showAllGroups();
            $("#select_group").toggleClass("hidden show");
            $("#another_draw").toggleClass("hidden show");
        }
        else {
            number = number + 1;
            namegroup();
            currGroup = {
                name: name_groups[number],
                areas: []
            };
            drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);

            $("#SC_group").removeClass().addClass("show");
            $("#another_draw").removeClass().addClass("hidden");
            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', true);
        }
    });

    var highlightedGroup = null;

    function showAllGroups() {
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);

        var group = new L.featureGroup();
        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer.setStyle({color: '#6000ff'});
                group.addLayer(cGroup.areas[j].layer);
                map.addLayer(cGroup.areas[j].layer);
            }
            // Add to radio
            $('#radios').append('<div class="radio"><label><input type="radio" name="sc_groups" value="' + i + '"/>' + cGroup.name + '</label></div>');
        }

        $("input[name='sc_groups']").change(function(){
            if (highlightedGroup != null){
                for (var j = 0; j < highlightedGroup.areas.length; j++) {
                    highlightedGroup.areas[j].layer.setStyle({color: '#6000ff'});
                }
            }
            var index = parseInt($("input[name=sc_groups]:checked").val());
            highlightedGroup = SC[index];
            for (var j = 0; j < highlightedGroup.areas.length; j++) {
                highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
            }
        });

        map.fitBounds(group.getBounds(), null);

        $('#choose_group').click(function () {
            buttonDraw.prop('disabled', true);
            buttonDelete.prop('disabled', true);
            $("#sc_done").toggleClass("hidden show");
            $("#select_group").toggleClass("hidden show");

            for (var i = 0; i < SC.length; i++) {
                for (var j = 0; j < SC[i].areas.length; j++) {
                    map.removeLayer(SC[i].areas[j].layer);
                }
            }

            var group = new L.featureGroup();

            for (var j = 0; j < highlightedGroup.areas.length; j++) {
                highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
                group.addLayer(highlightedGroup.areas[j].layer);
                map.addLayer(highlightedGroup.areas[j].layer);
            }

            map.fitBounds(group.getBounds(), null);
        });
    }


    uiCoreAPI.instanceUrl = "http://localhost:8080/";

    app = {
        setSC: function (data2, callback) {
            uiCoreAPI._postRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.SC,
                data2,
                callback
            );
        }
    };


    $('#questions-sc').click(function () {
        highlightedGroup.dimensions = {
            liveArea: ($("input[name=live]:checked").val()) === 'true',
            sc1: parseInt($("input[name=sc1]:checked").val()),
            sc2: parseInt($("input[name=sc2]:checked").val()),
            sc3: parseInt($("input[name=sc3]:checked").val()),
            n1: parseInt($("input[name=n1]:checked").val()),
            n2: parseInt($("input[name=n2]:checked").val()),
            n3: parseInt($("input[name=n3]:checked").val()),
            cee1: parseInt($("input[name=cee1]:checked").val()),
            cee2: parseInt($("input[name=cee2]:checked").val()),
            cee3: parseInt($("input[name=cee3]:checked").val()),
            cp1: parseInt($("input[name=cp1]:checked").val()),
            cp2: parseInt($("input[name=cp2]:checked").val()),
            cp3: parseInt($("input[name=cp3]:checked").val())
        };

        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer = JSON.stringify(cGroup.areas[j].layer.toGeoJSON());
            }
        }

        var id = util.getFromLocalStorage(util.interPageDataKey);

        var data2 = {
            id: id,
            factors: SC
        };


        app.setSC(data2, function (response) {
            if (response === false) {
                alert("PROBLEMS");
            }
            else {
                util.redirectToPage({
                    url: "map3.html",
                    payload: response.id
                });
            }
        });
    });

}


function deleteareas() {
    if (currGroup.areas.length > 0) {
        counterAreasName();
        $("#another_draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
    else {
        $("#draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
}

function counterAreasName() {


    $("#counting_areas").html("You have already defined: L areas.");
    var replaced2 = $("#counting_areas").html().replace('L', areasdrawn);
    $("#counting_areas").html(replaced2);


    $("#change_name_group").html('Now you can draw another area that define the G group, or click the <button type="button" class="btn btn-primary btn-next" href="#" disabled>Next</button> on th map to define the next group.');
    var replaced3 = $("#change_name_group").html().replace('G', name_groups[number]);
    $("#change_name_group").html(replaced3);

}