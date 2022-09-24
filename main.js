
var diapo = 1;
sessionStorage.setItem("diapo", diapo);
var diapo = sessionStorage.getItem("diapo");

function q1() {
    
    var q1 = document.getElementById("q1").value;

    if(q1 == "1"){
        alert("Réponse incorrecte.")
    }
    if(q1 == "2"){
        alert("Bonne réponse.")
    }
    if(q1 == "3"){
        alert("Réponse incorrecte.")
    }

}

function q2() {
    
    var q2 = document.getElementById("q2").value;

    if(q2 == "1"){
        alert("Réponse incorrecte.")
    }
    if(q2 == "2"){
        alert("Réponse incorrect.")
    }
    if(q2 == "3"){
        alert("Bonne réponse.")
    }

}

function q3() {
    
    var q3 = document.getElementById("q3").value;

    if(q3 == "1"){
        alert("Réponse incorrecte.")
    }
    if(q3 == "2"){
        alert("Bonne réponse.")
    }
    if(q3 == "3"){
        alert("Réponse incorrecte.")
    }

}

function q4() {
    
    var q4 = document.getElementById("q4").value;

    if(q4 == "1"){
        alert("Réponse incorrecte.")
    }
    if(q4 == "2"){
        alert("Bonne réponse.")
    }
    if(q4 == "3"){
        alert("Réponse incorrecte.")
    }

}

window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowRight") {
      
        var diapo = parseInt(sessionStorage.getItem("diapo")) + 1;

        if (diapo > 6){
            alert("Pas de page après");
            var diapo =- 1;
        }

        sessionStorage.setItem("diapo", diapo);

        if (parseInt(sessionStorage.getItem("diapo")) == 1){
            document.getElementById("diapo1").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 2){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 3){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 4){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 5){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "none";
            document.getElementById("diapo5").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 6){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "none";
            document.getElementById("diapo5").style.display = "none";
            document.getElementById("diapo6").style.display = "block";
        }

    }
    if (event.key == "ArrowLeft"){
        
        var diapo = parseInt(sessionStorage.getItem("diapo"));
        var diapo = diapo - 1;
        if (diapo < 1){
            alert("Pas de page avant");
            var diapo =+ 1;
        }
        sessionStorage.setItem("diapo", diapo);
        
        if (parseInt(sessionStorage.getItem("diapo")) == 1){
            document.getElementById("diapo1").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 2){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 3){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 4){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 5){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "none";
            document.getElementById("diapo5").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 6){
            document.getElementById("diapo1").style.display = "none";
            document.getElementById("diapo2").style.display = "none";
            document.getElementById("diapo3").style.display = "none";
            document.getElementById("diapo4").style.display = "none";
            document.getElementById("diapo5").style.display = "none";
            document.getElementById("diapo6").style.display = "block";
        }

    }

  });