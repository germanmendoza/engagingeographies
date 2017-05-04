// JavaScript Document "map_2"

// Modal when load page

// $('#myModal13').modal('show');

// POPOVER

var SC = [];
var currGroup;
var areasdrawn = 0;
var name_groups;
var number = 0;
var spatialyes = 0;

function startAll() {
    /*buttonDelete.prop('disabled', true);
    buttonDraw.prop('disabled', true);
    $('#button-freguesia').prop('disabled', true);*/


    $("#name_actual_group").select2({
        tags: [],
        tokenSeparators: [","]
    });

    $('#submit_name_group').click(function () {
        name_groups = $('#name_actual_group').val();
        if (name_groups.length > 0) {
            $("#specifications").toggleClass("hidden show");
            $("#groups_done").toggleClass("hidden show");
            namegroup();

            $("#group_name_nature").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);


            currGroup = {
                name: name_groups[number],
                areas: [],
                nature: 0
            };
            $("#pepe").toggleClass("hidden show");
            $("#pepa").toggleClass("hidden show");
            startMapComponents();
        }
        else {
            // alert("Please, insert at least a group name");
            alert("Por favor, insira pelo menos um nome de grupo.");
        }


    });


    function namegroup() {
        $("#group_name_nature").html('Grupo' + '<b style="font-size: 18px">' + ' hola ' + '</b>');
        var replaced = $("#group_name_nature").html().replace('hola', name_groups[number]);
        $("#group_name_nature").html(replaced);
        $("#textchange").html('Agora, pense no grupo' + '<b style="font-size: 18px">' + ' X ' + '</b>' + 'de que faz parte.');
        $("#textchange_nature").html('Por favor selecione a natureza deste grupo social' + '<b style="font-size: 18px">' + ' X' + '</b>' + '.');
        var replaced1 = $("#textchange").html().replace('X', name_groups[number]);
        var replaced2 = $("#textchange_nature").html().replace('X', name_groups[number]);
        $("#textchange").html(replaced1);
        $("#textchange_nature").html(replaced2);
    };


    $('#spatial_dimension').click(function () {

        $("#other_name").removeClass().addClass("hidden");


        if ($("#nature").val() == "0") {
            // alert("Please, choose a kind of group");
            alert("Por favor, escolha um tipo de grupo.");
        }


        if ($("#nature").val() != "19") {
            currGroup.nature = $('#nature').val();
            drawAreas();
        }
        else {
            if (!$("#other").val()) {
                // alert("Please, introduce the nature of the group.")
                alert("Por favor, introduza a natureza do grupo.");
            }
            else {
                currGroup.nature = $('#other').val();
                $("#SC_group").removeClass().addClass("show");
                drawAreas();
            }
        }

        function drawAreas() {

            $("#nature").val("0");
            $('#other').val("");

            if ($("input[name=spatial]:checked").val() == "true") {

                $("#title_let_draw").html('Vamos desenhar o grupo X!');
                var replacetitle = $("#title_let_draw").html().replace('X', name_groups[number]);
                $("#title_let_draw").html(replacetitle);
                $("#let_draw").html('Desenhe, por favor, todas as áreas que definem o grupo' + '<b style="font-size: 18px">' + ' X ' + '</b>' + 'clicando o botão <button class="btn btn-default btn-xs" disabled><span class="glyphicon glyphicon-pencil" aria-hidden="true"style="margin-right: 5px"></span> Comece a desenhar </button><br><br>Pode apagar a área clicando no botão <button class="btn btn-default btn-xs" disabled> <span class="glyphicon glyphicon-trash" aria-hidden="true"style="margin-right: 5px"></span> Apagar áreas </button> por cima do mapa.');
                var replaceddraw = $("#let_draw").html().replace('X', name_groups[number]);
                $("#let_draw").html(replaceddraw);
                $("#draw").toggleClass("hidden show");
                buttonDraw.prop('disabled', false);
                $('#button-freguesia').prop('disabled', false);
                $('#button-freguesiaxs').prop('disabled', false);
                //buttonDelete.prop('disabled', false);


                $("#SC_group").toggleClass("hidden show");
                $("#specifications").toggleClass("hidden show");
                spatialyes = spatialyes + 1;
            }
            else {

                SC.push(currGroup);

                if (number == name_groups.length - 1) {
                    if (spatialyes != 0) {
                        showAllGroups();
                        $("#select_group").toggleClass("hidden show");
                        $("#SC_group").toggleClass("hidden show");
                    }
                    else {

                        var id = util.getFromLocalStorage(util.interPageDataKey);

                        var data2 = {
                            type: "sc",
                            id: id,
                            groups: SC
                        };

                        app.setSC(data2, function (response) {
                            if (response === false) {
                                // alert("There is a connection problem; please, try again later");
                                alert("Há um problema de conexão; por favor, tente novamente mais tarde.");
                            }
                            else {
                                util.redirectToPage({
                                    url: "map3.html",
                                    payload: response.id
                                });
                            }
                        });


                    }
                }
                else if (name_groups.length == 1) {

                    var id = util.getFromLocalStorage(util.interPageDataKey);

                    var data2 = {
                        type: "sc",
                        id: id,
                        groups: SC
                    };

                    app.setSC(data2, function (response) {
                        if (response === false) {
                            // alert("There is a connection problem; please, try again later");
                            alert("Há um problema de conexão; por favor, tente novamente mais tarde.");
                        }
                        else {
                            util.redirectToPage({
                                url: "map3.html",
                                payload: response.id
                            });
                        }
                    });
                }
                else {
                    number = number + 1;
                    namegroup();
                    currGroup = {
                        name: name_groups[number],
                        areas: [],
                        nature: 0
                    };
                    $("#specifications").removeClass().addClass("show");
                    $("#another_draw").removeClass().addClass("hidden");
                    $("#SC_group").removeClass().addClass("hidden");
                    $("#group_name_nature").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
                    $("input[name=spatial][value=true]").prop('checked', true);


                }

            }
        };


    });

    $('#nature').change(function () {
        if ($("#nature").val() == "19") {
            if (anterior != "19") {
                $("#SC_group").removeClass().addClass("hidden");
            }
            $("#other_name").removeClass().addClass("show");
            var anterior = $('#nature').val();
        }
        else {


            $("#other_name").removeClass().addClass("hidden");
            $("#SC_group").removeClass().addClass("show");
            var anterior = $('#nature').val();
        }
    });

    $('#nature_write').click(function () {

        if ($("#nature").val() == "19") {
            if (!$("#other").val()) {
                // alert("Please, introduce the nature of the group.")
                alert("Por favor, introduza a natureza do grupo.");
            }
            else {
                $("#SC_group").removeClass().addClass("show");
            }
        }
    });


    /*$('#specifications_done').click(function () {
     if ($("#nature").val() != "0") {

     $("#draw").toggleClass("hidden show");
     $("#specifications").toggleClass("hidden show");
     buttonDraw.prop('disabled', false);
     buttonDelete.prop('disabled', false);
     $("#nature").val("0");

     }
     else {
     alert("Please, choose a kind of group");
     }
     });*/


    $('#bonding_bridging_done').click(function () {


        var scvalidationbondingbridging = $('[name=bosc1]:checked,[name=bosc2]:checked,[name=brsc1]:checked,[name=brsc2]:checked');
        if (scvalidationbondingbridging.length < 4) {
            // alert("Please, answer all the questions");
            alert("Por favor, responda todas as perguntas.");
            return;
        }

        $("#another_draw").toggleClass("hidden show");
        $("#questions_bonding_bridging").toggleClass("hidden show");
        areasdrawn = areasdrawn + 1;
        counterAreasName();
        buttonDraw.prop('disabled', false);
        buttonDelete.prop('disabled', true);
        $('#button-freguesia').prop('disabled', false);
        $('#button-freguesiaxs').prop('disabled', false);
        $("#finish_button").removeClass().addClass("show");
        map.setZoom(zoommap);


        var polygonData = {
            type: "sca",
            layer: L.geoJson(drawnItems.toGeoJSON()),
            livingIn: ($("input[name=live]:checked").val()) === 'true',
            socialCapital: {
                bosc1: parseInt($("input[name=bosc1]:checked").val()),
                bosc2: parseInt($("input[name=bosc2]:checked").val()),
                brsc1: parseInt($("input[name=brsc1]:checked").val()),
                brsc2: parseInt($("input[name=brsc2]:checked").val())
            }
        };

        $("input[name=bosc1]").prop('checked', false);
        $("input[name=bosc2]").prop('checked', false);
        $("input[name=brsc1]").prop('checked', false);
        $("input[name=brsc2]").prop('checked', false);


        currGroup.areas.push(polygonData);

        map.removeLayer(drawnItems);
        drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        map.addLayer(polygonData.layer);

    });


    var group = new L.featureGroup();

    $('#button_more_areas').click(function () {
        areasdrawn = 0;
        $("#finish_button").removeClass().addClass("hidden");
        map.removeLayer(drawnItems);
        //L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {}).addTo(map);

        currGroup.position = number;
        SC.push(currGroup);

        for (var j = 0; j < currGroup.areas.length; j++) {
            map.removeLayer(currGroup.areas[j].layer);
        }

        if (number == name_groups.length - 1) {
            showAllGroups();
            $("#select_group").toggleClass("hidden show");
            $("#another_draw").toggleClass("hidden show");
        }
        else {
            number = number + 1;
            namegroup();
            currGroup = {
                name: name_groups[number],
                areas: [],
                nature: 0
            };
            drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);

            $("#specifications").removeClass().addClass("show");
            $("#another_draw").removeClass().addClass("hidden");
            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', true);
        }
    });

    var highlightedGroup = null;

    function showAllGroups() {
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);
        $('#button-freguesia').prop('disabled', true);
        $('#button-freguesiaxs').prop('disabled', true);
        $("#specifications").removeClass().addClass("hidden");


        var group = new L.featureGroup();
        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer.setStyle({color: '#6000ff'});
                group.addLayer(cGroup.areas[j].layer);
                map.addLayer(cGroup.areas[j].layer);
            }
            // Add to radio

            if (cGroup.areas.length != 0) {
                $('#radios').append('<div class="radio"><label><input type="radio" name="sc_groups" value="' + i + '"/>Grupo ' + cGroup.name + '</label></div>');
            }
        }

        $("input[name='sc_groups']").change(function () {
            if (highlightedGroup != null) {
                for (var j = 0; j < highlightedGroup.areas.length; j++) {
                    highlightedGroup.areas[j].layer.setStyle({color: '#6000ff'});
                }
            }
            var index = parseInt($("input[name=sc_groups]:checked").val());
            highlightedGroup = SC[index];
            for (var j = 0; j < highlightedGroup.areas.length; j++) {
                highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
            }
        });

        map.fitBounds(group.getBounds(), null);

        $('#choose_group').click(function () {

            if ($('input[name=sc_groups]:checked').length) {


                buttonDraw.prop('disabled', true);
                buttonDelete.prop('disabled', true);
                $('#button-freguesia').prop('disabled', true);
                $('#button-freguesiaxs').prop('disabled', true);
                $("#sc_done").toggleClass("hidden show");
                $("#select_group").toggleClass("hidden show");

                for (var i = 0; i < SC.length; i++) {
                    for (var j = 0; j < SC[i].areas.length; j++) {
                        map.removeLayer(SC[i].areas[j].layer);
                    }
                }

                var group = new L.featureGroup();

                for (var j = 0; j < highlightedGroup.areas.length; j++) {
                    highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
                    group.addLayer(highlightedGroup.areas[j].layer);
                    map.addLayer(highlightedGroup.areas[j].layer);
                }
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
                map.fitBounds(group.getBounds(), null);


                var title = $("#change").html().replace('X', highlightedGroup.name);
                $("#change").html(title);
                var soc1re = $("#soc1").html().replace('Y', highlightedGroup.name);
                $("#soc1").html(soc1re);
                var soc2re = $("#soc2").html().replace('Y', highlightedGroup.name);
                $("#soc2").html(soc2re);
                var soc3re = $("#soc3").html().replace('Y', highlightedGroup.name);
                $("#soc3").html(soc3re);
                var n1re = $("#n1").html().replace('Y', highlightedGroup.name);
                $("#n1").html(n1re);
                var n2re = $("#n2").html().replace('Y', highlightedGroup.name);
                $("#n2").html(n2re);
                var n3re = $("#n3").html().replace('Y', highlightedGroup.name);
                $("#n3").html(n3re);
                var cee1re = $("#cee1").html().replace('Y', highlightedGroup.name);
                $("#cee1").html(cee1re);
                var cee2re = $("#cee2").html().replace('Y', highlightedGroup.name);
                $("#cee2").html(cee2re);
                var cee3re = $("#cee3").html().replace('Y', highlightedGroup.name);
                $("#cee3").html(cee3re);
                var cp1re = $("#cp1").html().replace('Y', highlightedGroup.name);
                $("#cp1").html(cp1re);
                var cp2re = $("#cp2").html().replace('Y', highlightedGroup.name);
                $("#cp2").html(cp2re);
                var cp3re = $("#cp3").html().replace('Y', highlightedGroup.name);
                $("#cp3").html(cp3re);
            }
            else {
                // alert("Please choose one group");
                alert("Por favor, escolha um grupo");
            }

        });
    }


    $('#questions-sc').click(function () {


        var scvalidation = $('[name=soc1]:checked,[name=soc2]:checked,[name=soc3]:checked,[name=n1]:checked,[name=n2]:checked,[name=n3]:checked,[name=cee1]:checked,[name=cee2]:checked,[name=cee3]:checked,[name=cp1]:checked,[name=cp2]:checked,[name=cp3]:checked');
        if (scvalidation.length < 12) {
            // alert("Please, answer all the questions");
            alert("Por favor, responda todas as perguntas.");
            return;
        }


        highlightedGroup.dimensions = {
            sc1: parseInt($("input[name=soc1]:checked").val()),
            sc2: parseInt($("input[name=soc2]:checked").val()),
            sc3: parseInt($("input[name=soc3]:checked").val()),
            n1: parseInt($("input[name=n1]:checked").val()),
            n2: parseInt($("input[name=n2]:checked").val()),
            n3: parseInt($("input[name=n3]:checked").val()),
            cee1: parseInt($("input[name=cee1]:checked").val()),
            cee2: parseInt($("input[name=cee2]:checked").val()),
            cee3: parseInt($("input[name=cee3]:checked").val()),
            cp1: parseInt($("input[name=cp1]:checked").val()),
            cp2: parseInt($("input[name=cp2]:checked").val()),
            cp3: parseInt($("input[name=cp3]:checked").val())
        };

        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer = JSON.stringify(cGroup.areas[j].layer.toGeoJSON());
            }
        }

        var id = util.getFromLocalStorage(util.interPageDataKey);

        var data2 = {
            type: "sc",
            id: id,
            groups: SC
        };


        app.setSC(data2, function (response) {
            if (response === false) {
                // alert("There is a connection problem; please, try again later");
                alert("Há um problema de conexão; por favor, tente novamente mais tarde.");
            }
            else {
                util.redirectToPage({
                    url: "map3.html",
                    payload: response.id
                });
            }
        });
    });

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


//Freguesia buttons XS
    $('#d-ajuda-xs').click(function () {
        map.setView([38.711402, -9.199039], 14);
    });

    $('#d-alcantara-xs').click(function () {
        map.setView([38.710676, -9.182990], 14);
    });

    $('#d-alvalade-xs').click(function () {
        map.setView([38.753182, -9.151691], 14);
    });

    $('#d-areeiro-xs').click(function () {
        map.setView([38.742261, -9.133480], 14);
    });

    $('#d-arroios-xs').click(function () {
        map.setView([38.727819, -9.140717], 14);
    });

    $('#d-avenidas-xs').click(function () {
        map.setView([38.739568, -9.149152], 14);
    });

    $('#d-beato-xs').click(function () {
        map.setView([38.733268, -9.113798], 14);
    });

    $('#d-belem-xs').click(function () {
        map.setView([38.702305, -9.215116], 14);
    });

    $('#d-benfica-xs').click(function () {
        map.setView([38.737770, -9.196060], 14);
    });


    $('#d-campo-xs').click(function () {
        map.setView([38.719247, -9.166428], 14);
    });

    $('#d-campolide-xs').click(function () {
        map.setView([38.731470, -9.165880], 14);
    });

    $('#d-carnide-xs').click(function () {
        map.setView([38.763229, -9.188106], 14);
    });
    $('#d-estrela-xs').click(function () {
        map.setView([38.710837, -9.153887], 14);
    });

    $('#d-lumiar-xs').click(function () {
        map.setView([38.770204, -9.160321], 14);
    });

    $('#d-marvila-xs').click(function () {
        map.setView([38.750852, -9.116730], 14);
    });

    $('#d-misericordia-xs').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais-xs').click(function () {
        map.setView([38.772473, -9.126950], 14);
    });

    $('#d-parque-xs').click(function () {
        map.setView([38.765502, -9.099971], 14);
    });

    $('#d-penha-xs').click(function () {
        map.setView([38.725873, -9.124024], 14);
    });

    $('#d-santa-xs').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria-xs').click(function () {
        map.setView([38.711168, -9.137130], 14);
    });

    $('#d-santo-xs').click(function () {
        map.setView([38.718769, -9.149313], 14);
    });

    $('#d-sao-xs').click(function () {
        map.setView([38.752111, -9.177416], 14);
    });

    $('#d-saovicente-xs').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });

    translator.applyPreviousLanguage(function () {
        // Nothing yet to do
    });
}


function deleteareas() {
    if (currGroup.areas.length > 0) {
        counterAreasName();
        $("#another_draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
    else {
        $("#draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
    $("input[name=bosc1]").prop('checked', false);
    $("input[name=bosc2]").prop('checked', false);
    $("input[name=brsc1]").prop('checked', false);
    $("input[name=brsc2]").prop('checked', false);

}

function counterAreasName() {


    $("#counting_areas").html("Já definiu: L áreas.");
    var replaced2 = $("#counting_areas").html().replace('L', areasdrawn);
    $("#counting_areas").html(replaced2);


    $("#change_name_group").html('Pode agora desenhar outra área para o grupo' + '<b style="font-size: 18px">' + ' G ' + '</b>' + 'ou, clicar <button type="button" class="btn btn-primary btn-next" href="#" disabled>Próximo</button> sobre o mapa para definir o próximo grupo');
    var replaced3 = $("#change_name_group").html().replace('G', name_groups[number]);
    $("#change_name_group").html(replaced3);

}