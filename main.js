//document.body.style.display = 'none';

var diapo = 1;
sessionStorage.setItem("diapo", diapo);
var diapo = sessionStorage.getItem("diapo");

window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowRight") {
      
        var diapo = parseInt(sessionStorage.getItem("diapo")) + 1;
        sessionStorage.setItem("diapo", diapo);

        if (diapo == 3){
            alert("cc");
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
        
        if (diapo == 3){
            alert("cc");
        }

    }

  });
