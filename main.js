var diapo = 0;
sessionStorage.setItem("diapo", diapo);
var guitare = document.getElementById('g');

window.addEventListener("keydown", function (event) {

    if (event.key == "ArrowRight") {
      
        var diapo = this.sessionStorage.getItem("diapo");
        var ndiapo = parseInt(diapo) + 1;
        this.sessionStorage.setItem("diapo", ndiapo);
        var diapo = this.sessionStorage.getItem("diapo");

        if (parseInt(sessionStorage.getItem("diapo")) == 1){
            guitare.scrollIntoView({behavior: "smooth"});        }

    }
    if (event.key == "ArrowLeft"){
        
        var diapo = this.sessionStorage.getItem("diapo");
        var ndiapo = parseInt(diapo) - 1;
        this.sessionStorage.setItem("diapo", ndiapo);
        var diapo = this.sessionStorage.getItem("diapo");
        


    }

  });