document.getElementById("consultarBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var inputId = document.getElementById("id").value;
    var dataConsultada = localStorage.getItem(inputId);
    var lista = dataConsultada.split(",");
    console.log(lista, dataConsultada)
    if (dataConsultada == "") {
        alert("No exite regítro")

    } else {
        var pElement = document.getElementById("data");

        pElement.innerHTML = lista[0] + "<br>"
        var nota = 0
        var nNotas = 0
        for (var i = 1; i < lista.length; i++) {
            pElement.innerHTML += "Nota " + i + ": " + lista[i] + "<br>";
            nota += parseFloat(lista[i]);
            nNotas += 1
        }
        var promedio = nota / nNotas;
        var observaciones = "";
        if (promedio >= 3) {

            observaciones = "Aprobado"

        } else {
            observaciones = "No aprobado"
        }
        pElement.innerHTML = pElement.innerHTML + "Promedio :" + promedio + "<br>";
        pElement.innerHTML += "Estado: " + observaciones;




    }

})