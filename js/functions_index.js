// JavaScript Document "index"


function startall() {

    //Ajax
    uiCoreAPI.instanceUrl = "http://localhost:8080/";

    app = {
        setHome: function (data, callback) {
            uiCoreAPI._postRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.home,
                data,
                callback
            );
        },
        getHome: function () {
            uiCoreAPI._getRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.home2,
                function (response) {
                    alert(response);
                }
            );
        }
    };
    // End Ajax

    //Show modals NExt and Prev

    $('#myModal9').modal({backdrop: 'static', keyboard: false});


    $('#freguesia_button').click(function () {
        $('#myModal11').modal({backdrop: 'static', keyboard: false});
    });


    $('#freguesia_button_prev').click(function () {
        $('#myModal9').modal({backdrop: 'static', keyboard: false});
        $('#myModal10').modal('hide');

    });

    $('#how_long_pre').click(function () {
        $('#myModal10').modal({backdrop: 'static', keyboard: false});
        $('#myModal11').modal('hide');

    });

    $('#done1_pre').click(function () {
        $('#myModal11').modal({backdrop: 'static', keyboard: false});
        $('#myModal12').modal('hide');

    });


    //End show modals


    // validate


    $('#home_button').click(function () {


        if ($('input[name=lisbon_home]:checked').val() == "true") {
            $('#myModal10').modal({backdrop: 'static', keyboard: false});
        }
        else {
            window.location.replace("map1.html");
        }


    });




    $('input:radio[name=freguesia]').click(function () {
        $('#freguesia_button').prop('disabled', false);
    });


    $('#how_long').click(function () {
        var zip = $('#zip').val();

        var zipRegex = /(^\d{4}-\d{3}$)/;

        if (!zipRegex.test(zip)) {
            alert("Please, check the zip code");
        }
        else {

            $('#myModal12').modal({backdrop: 'static', keyboard: false});
        }
    });


    var limit = 3;
    $("input:checkbox[name='problem']").on('change', function (evt) {
        $('#done1').attr('disabled', false);
        var num_problem = ($("input:checkbox[name='problem']:checked").length);
        if (num_problem > limit) {
            this.checked = false;
        }
    });

    // end validate

    // preapare data to send

    $('#done1').click(function () {
        var home = ($("input[name=lisbon_home]:checked").val()) === 'true';
        var freguesia = parseInt($("input[name=freguesia]:checked").val());
        var howlong = parseInt($("input[name=howlong]:checked").val());
        var zip = $("#zip").val();
        var problem = [];
        $("input[name=problem]:checked").each(function () {
            problem.push(parseInt($(this).val()));
        });
        var data = {
            home: home,
            freguesia: freguesia,
            howlong: howlong,
            zip: zip,
            problem: problem
        };
        app.setHome(data, function (response) {
            if (response === false) {
                alert("PROBLEMS");
            }
            else {
                util.redirectToPage({
                    url: "map1.html",
                    payload: response.id
                });
            }
        });
    });

    // End prepare data to send
}


/*$('#myModal9').modal('show');
 $('#home_button').click(function () {
 alert("rr");
 $("#myModalx").show();
 //$("#myModal9").hide();
 });



 function showsliders(bool) {
 if (bool) {
 $("#sliders_done").addClass("show");
 $("#sliders_done").toggleClass("hidden");
 $("#title_done").toggleClass("show");
 $("#title_done").addClass("hidden");
 }else {
 $("#sliders_done").addClass("hidden");
 $("#sliders_done").toggleClass("show");
 $("#title_done").addClass("show");
 $("#title_done").toggleClass("hidden");
 }
 }
 */


// MODAL prev and next
/*
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
 */
