
function calculate() {
    let tasso_alcolemico = parseFloat(document.getElementById("tasso-alcolemico-input").value);
    let stato = "Sobrio"; // Stato di default

    // Usa le condizioni if...else per gestire gli intervalli
    if (tasso_alcolemico >= 0.2 && tasso_alcolemico < 0.5) {
        stato = "Minimo rallentamento - Effetti non molto marcati";

    } else if (tasso_alcolemico >= 0.5 && tasso_alcolemico < 0.8) {
        stato = "Percezione ridotta - Aumenti dei tempi di risposta";

    } else if (tasso_alcolemico >= 0.8 && tasso_alcolemico < 1) {
        stato = "Rallentamento evidente - Limite di tasso alcolemico in molti paesi.";

    } else if (tasso_alcolemico >= 1 && tasso_alcolemico < 1.5) {
        stato = "Gravi difficoltà di reazione - Coordinazione motoria gravemente compromessa.";

    } else if (tasso_alcolemico >=1.5) {
        stato = "Reazione molto compromessa";
    }

   
    document.getElementById("stato-attuale").innerHTML = "Stato attuale: " + stato;

}



