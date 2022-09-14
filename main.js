//document.body.style.display = 'none';

var diapo = 1;
sessionStorage.setItem("diapo", diapo);
var diapo = sessionStorage.getItem("diapo");

window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
      
        var diapo = parseInt(sessionStorage.getItem("diapo")) + 1;
        sessionStorage.setItem("diapo", diapo);
        alert(diapo);

    }
    if (event.key == "ArrowLeft"){
        
        var diapo = parseInt(sessionStorage.getItem("diapo")) + -1;
        alert(diapo);

    }
  });