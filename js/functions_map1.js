 // JavaScript Document "map1"

// Modal when load page

$('#myModal3').modal('show');

// POPOVER

$(function () {
  $('[data-toggle="popover"]').popover()
})

// MODAL prev and next

$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});

// SLIDER
$("#ex1").slider();
$("#ex1").on("slide", function(slideEvt) {
  $("#ex1SliderVal").text(slideEvt.value);
});
$("#ex2").slider();
$("#ex2").on("slide", function(slideEvt) {
  $("#ex2SliderVal").text(slideEvt.value);
});
$("#ex3").slider();
$("#ex3").on("slide", function(slideEvt) {
  $("#ex3SliderVal").text(slideEvt.value);
});
$("#ex4").slider();
$("#ex4").on("slide", function(slideEvt) {
  $("#ex4SliderVal").text(slideEvt.value);
});
$("#ex5").slider();
$("#ex5").on("slide", function(slideEvt) {
  $("#ex5SliderVal").text(slideEvt.value);
});
$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
  $("#ex6SliderVal").text(slideEvt.value);
});
$("#ex7").slider();
$("#ex7").on("slide", function(slideEvt) {
  $("#ex7SliderVal").text(slideEvt.value);
});
$("#ex8").slider();
$("#ex8").on("slide", function(slideEvt) {
  $("#ex8SliderVal").text(slideEvt.value);
});


 // Only for the mockups.  Show&hidden map image. Delete after.
function toggler(divId) {
    //$("#" + divId).toggle();
    $("#secondimage").addClass('show');
    $("#firstimage").addClass('hidden');
}
// Finish Show&hidden map image


$('.display_sliders').click(function() {
    $(sliders_done).toggleClass('hidden');
    $(sliders_done).toggleClass('show');
});

$('.display_questions').click(function() {
    $(questions_done).toggleClass('hidden');
    $(questions_done).toggleClass('show');
});


$('.showhide').click(function() {
    $(sliders_done).toggleClass('hidden');
    $(sliders_done).toggleClass('show');
});



