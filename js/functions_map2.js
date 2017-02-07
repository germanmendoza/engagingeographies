 // JavaScript Document "map_2"

// Modal when load page

// $('#myModal13').modal('show');

// POPOVER

 function startAll() {

     var number_groups;
     $('#submit_number_group').click(function () {
         number_groups=$('#number_group').val();
         //$('#submit_number_group').attr('disabled', true);
         if ($.isNumeric(number_groups)) {
             $("#second_part_SC").toggleClass("hidden show");
             $("#draw_poly").prop('disabled', false);
         }
         else {
             /*namearea = $("#text_area").val();
             $("#area_done").toggleClass("hidden show");
             $("#questions_done").toggleClass("hidden show");
             var replaced = $("#change").html().replace('X', namearea);
             $("#change").html(replaced);*/
             alert("please insert a number");
         }
     });



     var SC = [];

     function showsliders1() {

         $("#questions_done").toggleClass("show hidden");
         $("#title2_done").toggleClass("hidden show");
     }

     $('#bonding_done').click(function () {
         buttonDraw.prop('disabled', false);
         $(".finish-map").attr('disabled', false);

         var polygondata = {
             type:"sc",
             layer: drawnItems,
             socialCapital: {
                 bosc1: parseInt($("input[name=bosc1]:checked").val()),
                 bosc2: parseInt($("input[name=bosc2]:checked").val()),
                 bosc3: parseInt($("input[name=bosc3]:checked").val()),
                 brsc1: parseInt($("input[name=brsc1]:checked").val()),
                 brsc2: parseInt($("input[name=brsc2]:checked").val()),
                 brsc3: parseInt($("input[name=brsc3]:checked").val())
             }
         };

         SC.push(polygondata);
         map.removeLayer(drawnItems);

         numbergroup = parseInt($("#number_group").val());
         var replaced = $("#title2_done").html().replace('X', SC.length);
         replaced = replaced.replace('L', numbergroup);
         replaced = replaced.replace('Z', numbergroup - SC.length);
         $("#title2_done").html(replaced);
         showsliders1();

         drawnItems = new L.FeatureGroup();
         map.addLayer(drawnItems);
     });


     var AreaSelected;
     var group = new L.featureGroup();

     $('.finish-map').click(function () {
         map.removeLayer(drawnItems);
         //mapxs.removeLayer(drawnItemsxs);
         $(".finish-map").attr('disabled', true);

         buttonDraw.prop('disabled', true);
         buttonDelete.prop('disabled', true);
         for (i = 0; i < SC.length; i++) {
             group.addLayer(SC[i].layer);
             map.addLayer(SC[i].layer);
             var sci = SC[i];
             SC[i].layer.on('click', function (e) {
                 $('.popover').remove();
                 map.fitBounds(e.layer.getBounds(), null);
                 $("#title2_done").toggleClass("hidden show");
                 $("#area_done").toggleClass("hidden show");
                 $("input:radio[name=live]:first").attr('checked', true);
                 $('#name_area').attr('disabled', false);
                 AreaSelected = sci;
             });
         }
         map.fitBounds(group.getBounds(), null);
     });


     $('#name_area').click(function () {
         if (!$("#text_area").val()) {
             alert("tonto");
         }
         else {
             namearea = $("#text_area").val();
             $("#area_done").toggleClass("hidden show");
             $("#sc_done").toggleClass("hidden show");
             var replaced = $("#change").html().replace('X', namearea);
             $("#change").html(replaced);
         }
     });


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
         AreaSelected.dimensions = {
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

         for (i = 0; i < SC.length; i++) {
             SC[i].layer = JSON.stringify(SC[i].layer.toGeoJSON());
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
                     url:"map3.html",
                     payload:response.id
                 });
             }
         });
     });










/*
----------------------------------------*/

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
     $('#ex1').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex2').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex3').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex4').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex5').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex6').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex7').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });
     $('#ex8').slider({
         formatter: function (value) {
             return 'Current value: ' + value;
         }
     });


// Only for the mockups.  Show&hidden map image. Delete after.
     /*function toggler(divId) {
         //$("#" + divId).toggle();
         $("#secondimage").addClass('show');
         $("#firstimage").addClass('hidden');
     };

     $('.display_communities').click(function () {
         $(communities_done).toggleClass('hidden');
         $(communities_done).toggleClass('show');
     });

     $('.display_title').click(function () {
         $(title_done).toggleClass('hidden');
         $(title_done).toggleClass('show');
     });

     $('.display_area').click(function () {
         $(area_done).toggleClass('hidden');
         $(area_done).toggleClass('show');
     });


     $('.display_sc').click(function () {
         $(sc_done).toggleClass('hidden');
         $(sc_done).toggleClass('show');
     });

     $('.display_questions').click(function () {
         $(questions_done).toggleClass('hidden');
         $(question_done).toggleClass('show');
     });

     $('.showhide').click(function () {
         $(sliders_done).toggleClass('hidden');
         $(sliders_done).toggleClass('show');
     });*/


// Finish Show&hidden map image


 }



 function showsliders() {

     $("#questions_done").toggleClass("show hidden");
     $("#communities_done").toggleClass("hidden show");
     $("#second_part_SC").toggleClass("hidden show");
 }