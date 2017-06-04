// JavaScript Document "index"


function startall() {

    //Show modals NExt and Prev

    $('#myModal9').modal({backdrop: 'static', keyboard: false});


    /*$('#freguesia_button').click(function () {
        $('#myModal11').modal({backdrop: 'static', keyboard: false});
    });*/


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
            $('#myModalA').modal({backdrop: 'static', keyboard: false});


        }


    });


   /* $('#home_button_out').click(function () {


        if ($('input[name=portugal_home]:checked').val() == "true") {
            $("#information_home").removeClass().addClass("show");

        }
        else {
            var data = {
                home: false
            };
            app.setHome(data, function (response) {
                if (response === false) {
                    // alert("There is a connection problem; please, try again later");
                    alert(translator.getKeyLanguageValue("general1"));
                }
                else {
                    util.redirectToPage({
                        url: "map1.html",
                        payload: response.id
                    });
                }
            });
        }


    });*/



    $("input[name='portugal_home']").change(function () {

        if ($('input[name=portugal_home]:checked').val() == "false") {
            $("#information_home").removeClass().addClass("hidden");
        }
        else    {
            $("#information_home").removeClass().addClass("show");
        }
    });


    $('input:radio[name=freguesia]').click(function () {
        $('#freguesia_button').prop('disabled', false);
    });


    $('#freguesia_button').click(function () {
        if ($('input[name=freguesia]:checked').val() == "25") {
            $('#myModalA').modal({backdrop: 'static', keyboard: false});
        }
        else{
            $('#myModal11').modal({backdrop: 'static', keyboard: false});
        }
    });


    $('#how_long').click(function () {
        var zip = $('#zip').val();

        var zipRegex = /(^\d{4}-\d{3}$)/;
        if (!zipRegex.test(zip)) {
            if ($("input:checkbox[name='no_zip']").is(':checked')) {
                $('#myModal12').modal({backdrop: 'static', keyboard: false});
            }
            else{
                // alert("Please, write the zip code");
                alert(translator.getKeyLanguageValue("general2"));
            }
        }
        else {
            var found = false;
            for(var i = 1; i < zipCodes.length; i++){
                if (zip === zipCodes[i]){ 
                    found = true;
                    break;
                }
            }
            if(found){
                $('#myModal12').modal({backdrop: 'static', keyboard: false});
            }
            else{
                alert(translator.getKeyLanguageValue("general3"));
            }
        }
    });



    $('#how_long_no').click(function () {


        if ($('input[name=portugal_home]:checked').val() == "true") {
            var zip_no = $('#zip_no').val();

            var zipRegex = /(^\d{4}-\d{3}$)/;
            if (!zipRegex.test(zip_no)) {

                alert(translator.getKeyLanguageValue("general2"));
            }
            else {
                var home = ($("input[name=lisbon_home]:checked").val()) === 'false';
                var portugal = ($("input[name=portugal_home]:checked").val());
                var howlong = parseInt($("input[name=howlong_no]:checked").val());
                var zip = $("#zip_no").val();

                var data = {
                    home: home,
                    portugal: portugal,
                    howlong: howlong,
                    zip: zip,
                };
                app.setHome(data, function (response) {
                    if (response === false) {
                        // alert("There is a connection problem; please, try again later");
                        alert(translator.getKeyLanguageValue("general1"));
                    }
                    else {
                        util.redirectToPage({
                            url: "map1.html",
                            payload: response.id
                        });
                    }
                });


            }
        }
        else{
            var data = {
                home: false
            };
            app.setHome(data, function (response) {
                if (response === false) {
                    // alert("There is a connection problem; please, try again later");
                    alert(translator.getKeyLanguageValue("general1"));
                }
                else {
                    util.redirectToPage({
                        url: "map1.html",
                        payload: response.id
                    });
                }
            });

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
                // alert("There is a connection problem; please, try again later");
                alert(translator.getKeyLanguageValue("general1"));
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

    translator.applyBrowserLanguage(function(langCode){
        translator.saveChosenLanguage(langCode);

        $("#mipruebaborrar").html(translator.getKeyLanguageValue("index1" + "index2"));

        $('input:radio[name="language"]').filter('[value="' + langCode + '"]').attr("checked",true);

        $('input[name=language]').change(function(){
            translator.saveChosenLanguage(this.value);
            translator.applyLanguage(this.value, function () {


                //$("#mipruebaborrar").html(translator.getKeyLanguageValue("index1"));
            });
        });
    });



    var boa = "loco"
    var title = $("#change").html().replace('X', "<b>" + boa + "</b>");
    $("#change").html(title);

    $("#draw_places").html(translator.getKeyLanguageValue("map1-12"));
    var replaced1 = $("#draw_places").html().replace('hola', '<b>' + boa + '</b>');
    $("#draw_places").html(replaced1);

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
