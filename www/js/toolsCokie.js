/**
 * Created by ROQUE on 11/08/2016.
 */
function modulo(_idModulo,_idSubModulo,_calificacion) {
    this.idModulo=_idModulo
    this.idSubModulo=_idSubModulo
    this.calificacion=_calificacion
}

/****COOKIE*****/
var $toolsCokie = {
    createCookie: function(name, value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    },

    readCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },

    eraseCookie: function(name) {
        $toolsCokie.createCookie(name,"",-1);
    }
};
/****COOKIE*****/

//-------------------------funciones para mandar resultados------------------------------------
function creaCokieCalificacion(idSubModulo,idModulo,calificacion) {
    //var _fecha= new Date();
    //var _expiresDate= new Date(_fecha.getFullYear(),_fecha.getUTCMonth(),_fecha.getUTCDate(),_fecha.getHours()+5,_fecha.getMinutes());
    var _modulo= new modulo(idModulo,idSubModulo,calificacion);
    var _moduloString=JSON.stringify(_modulo);
    $toolsCokie.createCookie("calificacionSubModulo",_moduloString,1);
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//-------------------------funciones para mandar resultados------------------------------------