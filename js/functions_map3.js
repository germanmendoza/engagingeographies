 // JavaScript Document "map_3"

// Modal when load page

 function startAll() {
     var CE = [];

     buttonDraw.prop('disabled', true);
     buttonDelete.prop('disabled', true);



     $('#ce_done').click(function () {


         /*var cevalidationbondingbridging = $('[name=ce1]:checked,[name=ce2]:checked,[name=ce3]:checked');
         if (cevalidationbondingbridging.length < 3) {
             alert("Please, answer all the questions");
             return;
         }*/
         buttonDraw.prop('disabled', false);
         buttonDelete.prop('disabled', false);
         //$(".finish-map").attr('disabled', false);

         $("#questions_done").toggleClass("hidden show");
         $("#draw_ce").toggleClass("hidden show");


         drawnItems = new L.FeatureGroup();
         map.addLayer(drawnItems);
     });

     uiCoreAPI.instanceUrl = "http://localhost:8080/";

     app = {
         setCE: function (data, callback) {
             uiCoreAPI._postRequest(
                 uiCoreAPI.instanceUrl + uiCoreWS.CE,
                 data,
                 callback
             );
         }
     };

     $('#questions-ce').click(function () {


         var polygondata = {
             type:"cea",
             layer: drawnItems
             //,livingIn = input...
         };

         CE.push(polygondata);
         map.removeLayer(drawnItems);

         for (i = 0; i < CE.length; i++) {
             CE[i].layer = JSON.stringify(CE[i].layer.toGeoJSON());
         }

         var id = util.getFromLocalStorage(util.interPageDataKey);

         var data = {
             type:"ce",
             civicEngagement: {
                 ce1: parseInt($("input[name=ce1]:checked").val()),
                 ce2: parseInt($("input[name=ce2]:checked").val()),
                 ce3: parseInt($("input[name=ce3]:checked").val())
             },
             id: id,
             areas: CE
         };


         app.setCE(data, function (response) {
             if (response === false) {
                 alert("PROBLEMS");
             }
             else {
                 util.redirectToPage({
                     url:"finish.html",
                     payload:response.id
                 });
             }
         });
     });













     //$("#draw_poly").prop('disabled', true);

   $('#myModal15').modal('show');

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


// Only for the mockups.  Show&hidden map image. Delete after.
   function toggler(divId) {
     //$("#" + divId).toggle();
     $("#secondimage").addClass('show');
     $("#firstimage").addClass('hidden');
   }

// Finish Show&hidden map image
 }

 function showsliders() {
     $("#questions_done").toggleClass("show hidden");
     $("#communities_done").toggleClass("hidden show");
     $("#second_part_SC").toggleClass("hidden show");
 }

 function showsliders1() {

     $("#questions_done").toggleClass("show hidden");
     $("#title2_done").toggleClass("hidden show");
 }