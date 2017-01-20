/**
 * Created by albertacedosanchez on 18/1/17.
 */


// JavaScript Document "index1"

// Modal when load page
$('#myModal9').modal('show');
$('#home_button').click(function () {
    alert("rr");
    $("#myModalx").show();
    //$("#myModal9").hide();
    });

/*
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
});*/
