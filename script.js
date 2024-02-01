var dati = {
    "Selezionare_Regione": {}, //caso placeholder vuoto
    "Emiliaromagna": {
        "Parma": ["Parma", "Fidenza", "Langhirano"],
        "Reggio Emilia": ["Reggio Emilia", "Correggio", "Scandiano"]
    },
    "Lombardia": {
        "Milano": ["Milano", "Legnano", "Rho"],
        "Brescia": ["Brescia", "Desenzano", "Gardone"]
    },
    "Sicilia": {
        "Palermo": ["Palermo", "Cippi", "Villabate"],
        "Trapani": ["Trapani", "Quartana", "Porticalazzo"]
    }
};

var regioneSelect = document.getElementById("regione");
var provinciaSelect = document.getElementById("provincia");
var comuneSelect = document.getElementById("comune");

function popolaProvince() {
    var regioneSelezionata = regioneSelect.value;
    provinciaSelect.innerHTML = "<option value='' disabled selected>Scegli provincia</option>"; //elimina ("") il placeholder quando viene richiamata la funzione

    for (var provincia in dati[regioneSelezionata]) { //foreach, scorro l'oggetto
        var option = document.createElement("option");
        option.value = provincia;
        option.textContent = provincia;
        provinciaSelect.appendChild(option);
    }
}


// Funzione per popolare i comuni in base alla provincia selezionata
function popolaComuni() {
    var regioneSelezionata = regioneSelect.value;
    var provinciaSelezionata = provinciaSelect.value;
    comuneSelect.innerHTML = "<option value='' disabled selected>Scegli comune</option>";

    if (dati[regioneSelezionata] && dati[regioneSelezionata][provinciaSelezionata]) {
        dati[regioneSelezionata][provinciaSelezionata].forEach(function (comune) {
            var option = document.createElement("option");
            option.value = comune;
            option.textContent = comune;
            comuneSelect.appendChild(option);
        });
    }
}

// Inizializza la selezione delle province all'avvio
popolaProvince();
