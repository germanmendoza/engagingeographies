 // JavaScript Document "map1"

// Modal when load page

$('#myModal2').modal('show');

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
$('#ex1').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex2').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex3').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex4').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex5').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex6').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex7').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
$('#ex8').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});

 // Only for the mockups.  Show&hidden map image. Delete after.
function toggler(divId) {
    //$("#" + divId).toggle();
    $("#secondimage").addClass('show');
    $("#firstimage").addClass('hidden');
}
// Finish Show&hidden map image