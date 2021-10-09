document.getElementById("saveDataBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var studentID = document.getElementById("id").value;
    var studentName = document.getElementById("nombre").value;
    var studentnota1 = document.getElementById("nota1").value;
    var studentnota2 = document.getElementById("nota2").value;
    var studentnota3 = document.getElementById("nota3").value;

    console.log(studentID, studentName)

    if (studentID == "" || studentName == "" || studentnota1 == "" || studentnota2 == "" || studentnota3 == "") {
        alert("Debe llenar los campos ");

    } else {
        localStorage.setItem(studentID, [studentName, studentnota1, studentnota2, studentnota3]);
        alert("¡Todo se guardó con exito!")

    }


})