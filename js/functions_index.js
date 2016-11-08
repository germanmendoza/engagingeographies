 // JavaScript Document "index"

// Modal when load page
$('#myModal9').modal('show');


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
$('#ex1').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$("#ex1").on("slide", function(slideEvt) {
  $("#ex1SliderVal").text(slideEvt.value);
});

$('#ex2').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$("#ex2").on("slide", function(slideEvt) {
  $("#ex2SliderVal").text(slideEvt.value);
});

$('#ex3').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$("#ex3").on("slide", function(slideEvt) {
  $("#ex3SliderVal").text(slideEvt.value);
});
