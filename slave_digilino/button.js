function addButton(){
    console.log("Slave: Adding Button!");
    
    addCSS();
    
    var buttonsDivs = document.getElementsByClassName("page-buttons");
    
    for(var i = 0; i < buttonsDivs.length; i++){
        var npSA = document.createElement("div");
        npSA.className = "action-button";
        npSA.setAttribute("id", "npShowAnswers");
        npSA.setAttribute("onclick", "npShowAnswers()");
        npSA.setAttribute("title", "Vult alle antwoorden in om over te schrijven of te controleren!");
        //npSA.setAttribute("style", "background-color: #FFCC00; color: #333333; border: solid 1px #FFFFFF;");
        npSA.innerHTML = "Vul antwoorden in";
        
        buttonsDivs[i].appendChild(npSA);
    }
}

function addCSS(){
    var styles = document.createElement('style');
    styles.type = 'text/css';
    styles.innerHTML = '#npShowAnswers{background-color: #FFCC00; color: #333333; border: solid 1px #FFFFFF;} #npShowAnswers:hover{background-color: rgba(255,204,0,0.5);}';
    document.getElementsByTagName('head')[0].appendChild(styles);
}

addButton();