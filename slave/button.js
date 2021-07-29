function addButton(){
    log("Adding Button!");
    
    addCSS();
    var buttonsDiv = document.getElementById(tempExContainer[0].htmlElementId);
    
    var npSA = document.createElement("div");
    npSA.setAttribute("id", "npShowAnswers");
    $(npSA).addClass("BTN");
    $(npSA).addClass("npBtn");
    npSA.setAttribute("onclick", "npShowAnswers()");
    npSA.setAttribute("title", "Vult alle antwoorden in om over te schrijven of te controleren!");
    var tButton = document.createElement("div");
    $(tButton).addClass("tButton");
    var t = document.createTextNode("Vul antwoorden in");
    tButton.appendChild(t);
    npSA.appendChild(tButton);
    
    buttonsDiv.appendChild(npSA);
    
    $(".BTN").mouseenter(function(){
        $(this).addClass("over");
	});
	$(".BTN").mouseleave(function(){
		$(this).removeClass("over");
	});
}

function addCSS(){
    var styles = document.createElement('style');
    styles.type = 'text/css';
    styles.innerHTML = '.npBtn { float: left; width: 150px; height: 32px; bottom: 8px; position: absolute; z-index: 9001; cursor: pointer; background: #ffcf01 !important; } .npBtn.over { background: #f9a501 !important; } .npBtn .tButton { color: #999999; top: 8px; position: relative; font-family: Helvetica; font-weight: normal; font-size: 16px; text-align: center; }';
    document.getElementsByTagName('head')[0].appendChild(styles);
}

addButton();