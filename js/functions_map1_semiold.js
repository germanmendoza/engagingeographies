// JavaScript Document "map1"

// Modal when load page


var number = 0;
var name_places;


function startAll() {
    $('#myModal3').modal('show');
    $("#draw_poly").prop('disabled', false);

// POPOVER

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

// MODAL prev and next

    $("div[id^='myModal']").each(function () {

        var currentModal = $(this);

        //click next
        currentModal.find('.btn-next').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
        });

        //click prev
        currentModal.find('.btn-prev').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
        });

    });

    // NAMES PLACES


    $("#name_actual_place").select2({
        tags: [],
        tokenSeparators: [",", " "]
    });

    //


    $('#submit_name_places').click(function () {
        name_places = $('#name_actual_place').val();
        if (name_places.length > 0) {
            $("#let_draw").toggleClass("hidden show");
            $("#title_done").toggleClass("hidden show");
            nameplace();

            $("#group_name_nature").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);


            currPlace = {
                name: name_places[number],
                areas: []
            };

        }
        else {
            // alert("Please, insert at least a group name");
            alert("Por favor, insira pelo menos um nome de grupo.");
        }
    });



    function nameplace() {
        $("#group_name_place").html("Group hola");
        var replaced = $("#group_name_place").html().replace('hola', name_places[number]);
        $("#group_name_place").html(replaced);
    };





// SLIDER
    $("#ex1").slider();
    $("#ex1").on("slide", function (slideEvt) {
        $("#ex1SliderVal").text(slideEvt.value);
    });
    $("#ex2").slider();
    $("#ex2").on("slide", function (slideEvt) {
        $("#ex2SliderVal").text(slideEvt.value);
    });
    $("#ex3").slider();
    $("#ex3").on("slide", function (slideEvt) {
        $("#ex3SliderVal").text(slideEvt.value);
    });
    $("#ex4").slider();
    $("#ex4").on("slide", function (slideEvt) {
        $("#ex4SliderVal").text(slideEvt.value);
    });
    $("#ex5").slider();
    $("#ex5").on("slide", function (slideEvt) {
        $("#ex5SliderVal").text(slideEvt.value);
    });
    $("#ex6").slider();
    $("#ex6").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });
    $("#ex7").slider();
    $("#ex7").on("slide", function (slideEvt) {
        $("#ex7SliderVal").text(slideEvt.value);
    });
    $("#ex8").slider();
    $("#ex8").on("slide", function (slideEvt) {
        $("#ex8SliderVal").text(slideEvt.value);
    });
    $("#ex9").slider();
    $("#ex9").on("slide", function (slideEvt) {
        $("#ex9SliderVal").text(slideEvt.value);
    });


    var namearea;

    $('#name_area').click(function () {
        if (!$("#text_area").val()) {
            alert("tonto")
        }
        else {
            namearea = $("#text_area").val();
            $("#area_done").toggleClass("hidden show");
            $("#questions_done").toggleClass("hidden show");
            var replaced = $("#change").html().replace('X', namearea);
            $("#change").html(replaced);
        }
    });

    var SOP = [];

    $('#sliders_done_button').click(function () {
        map.setZoom(zoommap);
        buttonDraw.prop('disabled', false);
        //$("#draw_polyxs").prop('disabled', false);
        $(".finish-map").attr('disabled', false);

        $("#sliders_done").toggleClass("hidden show");
        $("#title2_done").toggleClass("hidden show");


        var polygonData = {
            type: "sopa",
            layer: L.geoJson(drawnItems.toGeoJSON()),
            livingIn: ($("input[name=live]:checked").val()) === 'true',
            predictors: {
                ex1: $("#ex1").slider('getValue'),
                ex2: $("#ex2").slider('getValue'),
                ex3: $("#ex3").slider('getValue'),
                ex4: $("#ex4").slider('getValue'),
                ex5: $("#ex5").slider('getValue'),
                ex6: $("#ex6").slider('getValue'),
                ex7: $("#ex7").slider('getValue')
            }
        };

        for (i = 1; i <= 7; i++) {
            $('input[id=ex' + i + ']').slider('setValue', 0);
            $('span[id=ex' + i + 'SliderVal]').text(0);
        };


        SOP.push(polygonData);
        map.removeLayer(drawnItems);
        drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        map.addLayer(polygonData.layer);
    });

    var AreaSelected;
    var group = new L.featureGroup();

    $('.finish-map').click(function () {
        map.removeLayer(drawnItems);
        L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {}).addTo(map);
        $(".finish-map").attr('disabled', true);
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);
        for (i = 0; i < SOP.length; i++) {
            group.addLayer(SOP[i].layer);
            map.addLayer(SOP[i].layer);
            var sopi = SOP[i];
            SOP[i].layer.on('click', function (e) {
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
                $('.popover').remove();
                map.fitBounds(e.layer.getBounds(), null);
                $("#title2_done").toggleClass("hidden show");
                $("#area_done").toggleClass("hidden show");
                $("input:radio[name=live]:first").attr('checked', true);
                $('#name_area').attr('disabled', false);
                AreaSelected = sopi;
            });
        }
        map.fitBounds(group.getBounds(), null);
    });

    app = {
        setSOP: function (data2, callback) {
            uiCoreAPI._postRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.SOP,
                data2,
                callback
            );
        }
    };


    $('#questions-sop').click(function () {

        // validate


        var sopvalidation = $('[name=PI1]:checked,[name=PI2]:checked,[name=PI3]:checked,[name=PA1]:checked,[name=PA2]:checked,[name=PA3]:checked,[name=PD1]:checked,[name=PD2]:checked,[name=PD3]:checked');
        if (sopvalidation.length < 9) {
            // alert("Please, answer all the questions");
            alert("Por favor, responda todas as perguntas.");
            return;
        }

        // finish validate

        AreaSelected.dimensions = {
            pi1: parseInt($("input[name=PI1]:checked").val()),
            pi2: parseInt($("input[name=PI2]:checked").val()),
            pi3: parseInt($("input[name=PI3]:checked").val()),
            pa1: parseInt($("input[name=PA1]:checked").val()),
            pa2: parseInt($("input[name=PA2]:checked").val()),
            pa3: parseInt($("input[name=PA3]:checked").val()),
            pd1: parseInt($("input[name=PD1]:checked").val()),
            pd2: parseInt($("input[name=PD2]:checked").val()),
            pd3: parseInt($("input[name=PD3]:checked").val())
        }

        for (i = 0; i < SOP.length; i++) {
            SOP[i].layer = JSON.stringify(SOP[i].layer.toGeoJSON());
        }

        var id = util.getFromLocalStorage(util.interPageDataKey);

        var data2 = {
            type: "sop",
            id: id,
            areas: SOP
        };


        app.setSOP(data2, function (response) {
            if (response === false) {
                alert("PROBLEMS");
            }
            else {
                util.redirectToPage({
                    url: "map2.html",
                    payload: response.id
                });
            }
        });


    });

}



/**
 * Created by albertacedosanchez on 8/3/17.
 */
