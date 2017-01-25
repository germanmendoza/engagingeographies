// JavaScript Document "map1"

// Modal when load page

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

function showsliders() {

    $("#sliders_done").toggleClass("show hidden");
    $("#title_done").toggleClass("hidden show");
}

function showsliders1() {

    $("#sliders_done").toggleClass("show hidden");
    $("#title2_done").toggleClass("hidden show");
}

var AreasShow = [];
var AreasShowxs = [];

$('#sliders_done_button').click(function () {
    showsliders1();
    $("#draw_poly").prop('disabled', false);
    $("#draw_polyxs").prop('disabled', false);
    $(".finish-map").attr('disabled', false);
    var area = "";
    for (i=1;i<=7;i++) {
        $('input[id=ex' + i +']').slider('setValue', 0);
        $('span[id=ex' + i +'SliderVal]').text(0);
    };
    if (drawnItems.getLayers().length != 0) {
        area =     drawnItems.toGeoJSON();
        AreasShow.push(drawnItems);
    }
    else {
        area =     drawnItemsxs.toGeoJSON();
        AreasShowxs.push(drawnItemsxs);
    }

    map.removeLayer(drawnItems);
    mapxs.removeLayer(drawnItemsxs);
    drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    drawnItemsxs = new L.FeatureGroup();
    map.addLayer(drawnItemsxs);

});

var AreaSelected;
var group = new L.featureGroup();

$('.finish-map').click(function () {
    map.removeLayer(drawnItems);
    mapxs.removeLayer(drawnItemsxs);
    $(".finish-map").attr('disabled', true);


    //bounding total zoom
    if (AreasShow.length != 0) {
        $("#draw_poly").prop('disabled', true);
        $("#delete_poly").prop('disabled', true);
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
        $("#draw_polyxs").prop('disabled', true);
        $("#delete_polyxs").prop('disabled', true);
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
    }
});







