 // JavaScript Document "map_2"

// Modal when load page

// $('#myModal13').modal('show');

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

$('.display_communities').click(function() {
  $(communities_done).toggleClass('hidden');
  $(communities_done).toggleClass('show');
});

$('.display_title').click(function() {
  $(title_done).toggleClass('hidden');
  $(title_done).toggleClass('show');
});

$('.display_sliders').click(function() {
    $(sliders_done).toggleClass('hidden');
    $(sliders_done).toggleClass('show');
});


$('.display_area').click(function() {
    $(area_done).toggleClass('hidden');
    $(area_done).toggleClass('show');
});

$('.display_questions').click(function() {
    $(questions_done).toggleClass('hidden');
    $(question_done).toggleClass('show');
});

$('.showhide').click(function() {
    $(sliders_done).toggleClass('hidden');
    $(sliders_done).toggleClass('show');
});


// Finish Show&hidden map image