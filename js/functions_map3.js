 // JavaScript Document "map_3"

// Modal when load page
 var CE = [];

 function startAll() {

     //buttonDraw.prop('disabled', true);
     //buttonDelete.prop('disabled', true);

 //Freguesia buttons
    $('#d-ajuda').click(function () {
        map.setView([38.711402, -9.199039], 14);
    });

    $('#d-alcantara').click(function () {
        map.setView([38.710676, -9.182990], 14);
    });

    $('#d-alvalade').click(function () {
        map.setView([38.753182, -9.151691], 14);
    });

    $('#d-areeiro').click(function () {
        map.setView([38.742261, -9.133480], 14);
    });

    $('#d-arroios').click(function () {
        map.setView([38.727819, -9.140717], 14);
    });

    $('#d-avenidas').click(function () {
        map.setView([38.739568, -9.149152], 14);
    });

    $('#d-beato').click(function () {
        map.setView([38.733268, -9.113798], 14);
    });

    $('#d-belem').click(function () {
        map.setView([38.702305, -9.215116], 14);
    });

    $('#d-benfica').click(function () {
        map.setView([38.737770, -9.196060], 14);
    });


    $('#d-campo').click(function () {
        map.setView([38.719247, -9.166428], 14);
    });

    $('#d-campolide').click(function () {
        map.setView([38.731470, -9.165880], 14);
    });

    $('#d-carnide').click(function () {
        map.setView([38.763229, -9.188106], 14);
    });
    $('#d-estrela').click(function () {
        map.setView([38.710837, -9.153887], 14);
    });

    $('#d-lumiar').click(function () {
        map.setView([38.770204, -9.160321], 14);
    });

    $('#d-marvila').click(function () {
        map.setView([38.750852, -9.116730], 14);
    });

    $('#d-misericordia').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais').click(function () {
        map.setView([38.772473, -9.126950], 14);
    });

    $('#d-parque').click(function () {
        map.setView([38.765502, -9.099971], 14);
    });

    $('#d-penha').click(function () {
        map.setView([38.725873, -9.124024], 14);
    });

    $('#d-santa').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria').click(function () {
        map.setView([38.711168, -9.137130], 14);
    });

    $('#d-santo').click(function () {
        map.setView([38.718769, -9.149313], 14);
    });

    $('#d-sao').click(function () {
        map.setView([38.752111, -9.177416], 14);
    });

    $('#d-saovicente').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });
 // End freguesia button



     $('#ce_done').click(function () {

         var cevalidation = $('[name=ce1]:checked,[name=ce2]:checked,[name=ce3]:checked');
         if (cevalidation.length < 3) {
             alert("Please, answer all the questions");
             return;
         }
         /*var cevalidationbondingbridging = $('[name=ce1]:checked,[name=ce2]:checked,[name=ce3]:checked');
         if (cevalidationbondingbridging.length < 3) {
             alert("Please, answer all the questions");
             return;
         }*/
         $("#pepe").toggleClass("hidden show");
         $("#pepa").toggleClass("hidden show");
         startMapComponents();
         buttonDraw.prop('disabled', false);
         //buttonDelete.prop('disabled', false);
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

         // var polygondata = {
         //     type:"cea",
         //     layer: drawnItems
         //     //,livingIn = input...
         // };
         //
         // CE.push(polygondata);
         // map.removeLayer(drawnItems);

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
                 alert("There is a connection problem; please try again later");
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