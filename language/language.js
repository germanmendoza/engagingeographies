/**
 * Depend on languages of web pages, show the text in one or other languages
 * @param lang Languages of web pages
 * @param text Text of return
 * @returns {*} Text for show in web pages
 */
function languages(lang, text) {
    //English
    var en = {
        'noLocation': 'we cannot obtain your location!',
        'editedSchool': 'You drawn or edited you school!',
        'pointsMapAndImage': 'It shortage some points in MAP and IMAGE',
        'pointsMap': 'It shortage some points in MAP',
        'pointsImage': 'It shortage some points in IMAGE',
        'mistake': 'There was an error, please try again',
        'imageDelete': 'Image Deleted',
        'imageDeleteMistake': 'This image does not exist in the image server.',
        'nameSchoolNoExist': 'Register new school',
        'noIntersectLines': 'Can&#39;t intersect the line with other polygons',
        'noContainPoints': 'Can&#39;t add points within the polygons',
        'uploadingImage': 'Successfully uploaded. We are transforming the image. It can take up to 2 -3 min before this changes take effect.',
        'dashSaved': 'Saved!',
        'dashSaveChanges': 'Save Changes',
        'on': 'On',
        'off': 'Off',
        'done': 'Done',
        'missing': 'Missing',
        'errorConfiguration': 'Could not load configuration. Try again later.',
        'percentDone': ' % done',
        'dashTrPlanted': 'Treasures Planted \n Total: ',
        'dashTrFound': 'Treasures Found \n Total: ',
        'dashFiCaptured': 'Locations captured \n Total: ',
        'totalStudents' : 'Total Students: ',
        'errorNoBoundary' : 'Before realise this step, you have to do the first step, visit him',
        'checkFp' : 'Sorry, you only can activate this phase when the phase 1 has at least 80%'
    };
    //Spanish
    var es = {
        'noLocation': 'no se ha podido obtener tu localización',
        'editedSchool': 'Tu has dibujado o editaste tu colegio!',
        'pointsMapAndImage': 'Faltan puntos en el MAPA y en la IMAGEN',
        'pointsMap': 'Faltan puntos en el MAPA',
        'pointsImage': 'Faltan puntos en la IMAGEN',
        'mistake': 'Se ha producido un error, porfavor intentelo de nuevo',
        'imageDelete': 'Imagen Borrada',
        'imageDeleteMistake': 'Esta imagen no existe en el servidor.',
        'nameSchoolNoExist': 'Registrar nuevo colegio',
        'noIntersectLines': 'No puede intersectar la linea con otros poligonos',
        'noContainPoints': 'No puedes añadir puntos dentro de los poligonos',
        'uploadingImage': 'Cargada con éxito. Estamos transformando la imagen. Se puede tomar hasta 2 -3 minutos antes de que tenga efecto el cambio.',
        'dashSaved': 'Guardado!',
        'dashSaveChanges': 'Guardar Cambios',
        'on': 'Activada',
        'off': 'Desactivada',
        'done': 'Hecho',
        'missing': 'Faltan',
        'errorConfiguration': 'No se ha podido cargar la configuración. Prueba de nuevo más tarde.',
        'percentDone': ' % hecho',
        'dashTrPlanted': 'Tesoros escondidos \n Total: ',
        'dashTrFound': 'Tesoros encontrados \n Total: ',
        'dashFiCaptured': 'Localizaciones capturadas \n Total: ',
        'totalStudents' : 'Total de Estudiantes: ',
        'errorNoBoundary' : 'Antes de hacer este paso, tienes que realizar el primero paso, ves a él',
        'checkFp' : 'Lo siento, solo puedes activar esta fase cuando la fase 1 tenga al menos un 80%'

    };
    //Catala
    var ca = {
        'noLocation': 'No s&#39;ha pogut obtindre la teua localització',
        'editedSchool': 'Has dibuixat o editat la teua escola!',
        'pointsMapAndImage': 'Manquen punts al MAPA i a la IMATGE',
        'pointsMap': 'Manquen punts al MAPA',
        'pointsImage': 'Manquen punts a la IMATGE',
        'mistake': 'S&#39;ha produit un error, per favor intenta-ho de nou',
        'imageDelete': 'Imatge Esborrada',
        'imageDeleteMistake': 'Aquesta imatge no apareix al servidor.',
        'nameSchoolNoExist': 'Registrar nova escola',
        'noIntersectLines': 'No es pot intersectar la línia amb altres polígons',
        'noContainPoints': 'No pots afegir punts dins dels polígons',
        'uploadingImage': 'S&#39;ha pujat correctament. Estem transformant la imatge. Es pot prendre fins a 2 -3 minuts abans que tingui efecte el canvi.',
        'dashSaved': 'Guardat!',
        'dashSaveChanges': 'Guardar Canvis',
        'on': 'Activada',
        'off': 'Desactivada',
        'done': 'Done',
        'missing': 'Missing',
        'errorConfiguration': 'No s&#39;ha pogut carregar la configuració. Prova de nou més tard',
        'percentDone': ' % fet',
        'dashTrPlanted': 'Tresors amagats \n Total: ',
        'dashTrFound': 'Tresors trobats \n Total: ',
        'dashFiCaptured': 'Localitzacions capturades \n Total: ',
        'totalStudents' : 'Total d&#39;Estudiants: ',
        'errorNoBoundary' : 'Avançs de fer aquest pas, has de fer el primer pas, veus a él',
        'checkFp' : 'Hu sent, sols pots accedir aquesta fase quan la primera fase tinga al menys un 80%'
    };
    //Portuguese
    var pt = {
        'noLocation': 'Não é possível obter localização',
        'editedSchool': 'Escola editada!',
        'pointsMapAndImage': 'Faltam alguns pontos no mapa/imagem',
        'pointsMap': 'Faltam alguns pontos no mapa',
        'pointsImage': 'Faltam alguns pontos na imagem',
        'mistake': 'Houve um erro, por favor tente novamente',
        'imageDelete': 'Remover imagem',
        'imageDeleteMistake': 'Esta imagem não existe no servidor.',
        'nameSchoolNoExist': 'Registar nova escola',
        'noIntersectLines': 'Não se podem cruzar linhas com outros polígonos',
        'noContainPoints': 'Não é possível adicionar pontos dentro dos polígonos',
        'uploadingImage': 'Enviada com sucesso. Estamos a transformar a imagem. Pode demorar 2 a 3 minutos até que as alterações tenham efeito.',
        'dashSaved': 'Gravado!',
        'dashSaveChanges': 'Guardar alterações',
        'on': 'Ativo',
        'off': 'Desativado',
        'done': 'Concluído',
        'missing': 'Não concluído',
        'errorConfiguration': 'Não foi possível carregar a configuração. Tente mais tarde.',
        'percentDone': ' % feito',
        'dashTrPlanted': 'Tesouros escondidos \n Total: ',
        'dashTrFound': 'Tesouros encontrados \n Total: ',
        'dashFiCaptured': 'Localizações capturadas \n Total: ',
        'totalStudents' : 'Total de alunos: ',
        'errorNoBoundary' : 'Antes de realizar este passo, você tem que fazer o primeiro passo, visitá-lo',
        'checkFp' : 'Desculpe, você só pode ativar esta fase quando a fase 1 tiver pelo menos 80%'
    };
    //German
    var de = {
        'noLocation': 'Position kann nicht bestimmt werden',
        'editedSchool': 'Deine Schule wurde bearbeitet!',
        'pointsMapAndImage': 'Es mangelt an einigen Punkten in MAP und BILD',
        'pointsMap': 'Es mangelt an einigen Punkten in MAP',
        'pointsImage': 'Es mangelt an einigen Punkten in BILD',
        'mistake': 'Ein Fehler ist aufgetreten, bitte versuche es erneut',
        'imageDelete': 'Bild löschen',
        'imageDeleteMistake': 'Dieses Bild existiert nicht im Bildserver.',
        'nameSchoolNoExist': 'Registriere neue Schule',
        'noIntersectLines': 'Linie darf sich nicht mit anderen Polygonen schneiden',
        'noContainPoints': 'Punkte können nicht Punkte innerhalb der Polygone hinzugefügt werden',
        'uploadingImage': 'Erfolgreich hochgeladen. Das Bild wird geändert. Es kann bis zu 2 -3 Minuten dauern, bis die Änderungen übernommen werden.',
        'dashSaved': 'Gespeichert!',
        'dashSaveChanges': 'Änderungen speichern',
        'on': 'Aktiviert',
        'off': 'Deaktiviert',
        'done': 'Erledigt',
        'missing': 'Fehlend',
        'errorConfiguration': 'Konfiguration konnte nicht geladen werden. Versuche es später noch einmal.',
        'percentDone': ' % erledigt',
        'dashTrPlanted': 'Schätze versteckt \n Gesamt: ',
        'dashTrFound': 'Schätze gefunden \n Gesamt: ',
        'dashFiCaptured': 'Standorte erfasst \n Gesamt: ',
        'totalStudents' : 'Anzahl aller Studenten: ',
        'errorNoBoundary' : 'Bevor Sie diesen Schritt zu realisieren, müssen Sie den ersten Schritt tun, besuchen Sie ihn',
        'checkFp' : 'Leider können Sie diese Phase nur aktivieren, wenn die Phase 1 mindestens 80%'
    };

    if (lang == 'es') {
        return es[text];
    } else if (lang == 'pt') {
        return pt[text];
    } else if (lang == 'de') {
        return de[text];
    } else if (lang == 'ca') {
        return ca[text];
    } else {
        return en[text];
    }
}