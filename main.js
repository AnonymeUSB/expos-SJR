
var diapo = 1;
sessionStorage.setItem("diapo", diapo);
var diapo = sessionStorage.getItem("diapo");

window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowRight") {
      
        var diapo = parseInt(sessionStorage.getItem("diapo")) + 1;
        sessionStorage.setItem("diapo", diapo);

        if (parseInt(sessionStorage.getItem("diapo")) == 1){
            document.getElementById("diapo1").style.display = "block";
        }
        if (parseInt(sessionStorage.getItem("diapo")) == 2){
            document.getElementById("diapo1").style.display = "none";
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
        }

    }

  });
