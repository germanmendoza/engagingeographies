// JavaScript Document "map1"

// Modal when load page


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

    /*
     $('.display_sliders').click(function () {
     $(sliders_done).toggleClass('hidden');
     $(sliders_done).toggleClass('show');
     });

     $('.display_title').click(function () {
     $(title_done).toggleClass('hidden');
     $(title_done).toggleClass('show');
     });

     $('.display_title2').click(function () {
     $(title2_done).toggleClass('hidden');
     $(title2_done).toggleClass('show');
     });


     $('.display_area').click(function () {
     $(area_done).toggleClass('hidden');
     $(area_done).toggleClass('show');
     });

     $('.display_questions').click(function () {
     $(questions_done).toggleClass('hidden');
     $(question_done).toggleClass('show');
     });

     $('.showhide').click(function () {
     $(sliders_done).toggleClass('hidden');
     $(sliders_done).toggleClass('show');
     });*/


    function showsliders1() {

        $("#sliders_done").toggleClass("show hidden");
        $("#title2_done").toggleClass("hidden show");
    }

    var SOP = [];

    $('#sliders_done_button').click(function () {
        showsliders1();
        map.setZoom(zoommap);
        buttonDraw.prop('disabled', false);
        //$("#draw_polyxs").prop('disabled', false);
        $(".finish-map").attr('disabled', false);
        var area = "";
        for (i = 1; i <= 7; i++) {
            $('input[id=ex' + i + ']').slider('setValue', 0);
            $('span[id=ex' + i + 'SliderVal]').text(0);
        }
        ;
        /*if (drawnItems.getLayers().length != 0) {
         area = drawnItems; //.toGeoJSON();
         realmap = map;
         AreasShow.push(drawnItems);

         }
         else {
         area = drawnItemsxs;//.toGeoJSON();
         realmap = mapxs;
         AreasShowxs.push(drawnItemsxs);

         }*/
        var polygondata = {
            type: "sop",
            layer: drawnItems,
            liveArea: ($("input[name=live]:checked").val()) === 'true',
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
        SOP.push(polygondata);
        map.removeLayer(drawnItems);
        //mapxs.removeLayer(drawnItemsxs);
        drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        //drawnItemsxs = new L.FeatureGroup();
        //map.addLayer(drawnItemsxs);

    });

    var AreaSelected;
    var group = new L.featureGroup();

    $('.finish-map').click(function () {
        map.removeLayer(drawnItems);
        //mapxs.removeLayer(drawnItemsxs);
        L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {}).addTo(map);
        $(".finish-map").attr('disabled', true);


        //bounding total zoom
        /*if (AreasShow.length != 0) {
         buttonDraw.prop('disabled', true);
         buttonDelete.prop('disabled', true);
         for (i=0;i<AreasShow.length; i++) {
         group.addLayer(AreasShow[i]);
         map.addLayer(AreasShow[i]);
         AreasShow[i].on('click', function(e) {
         $('.popover').remove();
         map.fitBounds(e.layer.getBounds(), null);
         $("#title2_done").toggleClass("hidden show");
         $("#questions_done").toggleClass("hidden show");

         });
         }
         map.fitBounds(group.getBounds(), null);
         }
         else {
         buttonDelete.prop('disabled', true);
         //$("#delete_polyxs").prop('disabled', true);
         for (i=0;i<AreasShowxs.length; i++) {
         group.addLayer(AreasShowxs[i]);
         map.addLayer(AreasShowxs[i]);
         AreasShowxs[i].on('click', function(e) {
         map.fitBounds(e.layer.getBounds(), null);
         $("#title2_done").toggleClass("hidden show");
         $("#questions_done").toggleClass("hidden show");
         });
         }
         map.fitBounds(group.getBounds(), null);
         }*/
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


    uiCoreAPI.instanceUrl = "http://localhost:8080/";

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
            alert("Please, answer all the questions");
            return;
        }

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
            id: id,
            factors: SOP
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

function showsliders() {

    $("#sliders_done").toggleClass("show hidden");
    $("#title_done").toggleClass("hidden show");
}


