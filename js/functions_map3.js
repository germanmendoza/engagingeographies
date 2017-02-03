 // JavaScript Document "map_3"

// Modal when load page




 function startall() {


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