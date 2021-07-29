console.log('Script added! ' + window.location.hostname);

function npShowAnswers(){
    
    
    
    var interactions = eLS.Navigation.currentPage.getCorregibleChildren();
    //console.log(interactions);
    
    var getAnswerElement = function(j){
        for (var i = 0; i < interactions.length; i++) {
            
        }
    }
    
    var interactionContainers = document.getElementsByClassName("pl-interactionContainer");
    //console.log(interactionContainers.length);
    var i;
    for(i = 0; i < interactionContainers.length; i++){
        //var interactionContainer = interactionContainers[i];
        //console.log(window.getComputedStyle(interactionContainer).getPropertyValue('display') + "    a" + i);
        if(window.getComputedStyle(interactionContainers[i]).getPropertyValue('display') === 'block'){
            //console.log(window.getComputedStyle(interactionContainer).getPropertyValue('display') + "    b" + i);
            break;
        }
    }
    
    var interaction = interactions[i];
    console.log("Slave: Vraag " + 'abcdefghijklmnopqrstuvwxyz'.charAt(i) + " (" + interaction.type + ")");
    
    if (interaction.type === "dragAndDropInteraction"){
        var dropAreas = interactionContainers[i].getElementsByClassName("drop-area");
        for(var j = 0; j < dropAreas.length; j++){
            var dropItem = dropAreas[j].getElementsByClassName("drop-item")[0];
            
            
            var answers = dropAreas[j].getElementsByClassName("ui-droppable-correct");
            console.log(answers.length);
            for(var k = 0; k < answers.length; k++){
                var answerTitle = answers[k].children[0].getAttribute("title");
                console.log("Answer: " + answerTitle);
                
                //answers[k].setAttribute("answerid", "henk");
                
                var dragItem = document.getElementById(answers[k].getAttribute("answerid"));
                
                console.log(dragItem);
                var dragItemTitle = dragItem.getElementsByClassName("text-item")[0].getAttribute("title");
                
                if(answerTitle === dragItemTitle){
                    var isAlreadyCorrect = false;
                    for(var l = 0; l < dropItem.children.length; l++){
                        console.log(dropItem.children[l]);
                        console.log(dragItem.getElementsByClassName("drag-item")[0]);
                        console.log(dropItem.children[l].getAttribute("id") === dragItem.getAttribute("id"));
                        if(dropItem.children[l].getAttribute("id") === dragItem.getAttribute("id")){
                            var isAlreadyCorrect = true;
                            
                        }
                    }
                    if(isAlreadyCorrect) continue;
                    dropItem.appendChild(dragItem.getElementsByClassName("drag-item")[0]);
                    console.log(dragItemTitle);
                }
                
            }
            
            
            
            
            
        }
        
        /*
        var dropAreas = interactionContainers[i].getElementsByClassName("drop-area");
        for(var j = 0; j < dropAreas.length; j++){
            var dropItem = dropAreas[j].getElementsByClassName("drop-item")[0];
            var answerTitle = dropAreas[j].getElementsByClassName("ui-droppable-correct")[0].children[0].getAttribute("title");
            console.log("Answer: " + answerTitle);
            
            var dragItems = interactionContainers[i].getElementsByClassName("drag-item");
            for(var k = 0; k < dragItems.length; k++){
                var dragItemTitle = dragItems[k].getElementsByClassName("text-item")[0].getAttribute("title");
                
                if(answerTitle === dragItemTitle){
                    dropItem.appendChild(dragItems[k]);
                    console.log(dragItemTitle);
                    break;
                }
            }
        }
        */
    
    
    
    
    }else if (interaction.type === "multipleChoiceContainer"){
        //var choices = document.getElementsByClassName("answer")[i].children;
        var choices = interactionContainers[i].getElementsByClassName('mcItem');
        console.log(interactionContainers[i].getElementsByClassName('mcItem'));
        for(var j = 0; j < choices.length; j++){
            var choice = choices[j];
            if(choice.className.indexOf("active") !== -1) choice.click();
            if(choice.getAttribute("data-correct") === "true"){
                console.log("Answer: " + choice.children[0].innerHTML);
                choice.click();
            }
        }
    
    
    
    
    
    }else if (interaction.type === "dropdownInteraction"){
        /*
        var iterList = $(interaction.$node[0]).find("li").children().children();
        //console.log(interaction.$node);
        iterList.each(function () {
            if ($(this).hasClass("dropdown-box")) {
                console.log(Digilino.Mijnklas.Utilities.decryptString($(this).next().find(".dropOption").text()));
                console.log($(this).next().find(".dropOption"));
            }
        });*/
        
        var dropdownboxes = interactionContainers[i].getElementsByClassName('dropdown-box');
        for(var j = 0; j < dropdownboxes.length; j++){
            var choices = dropdownboxes[j].getElementsByClassName('drop-box')[0].children;
            //console.log(dropdownboxes[j].getElementsByClassName('drop-box'));
            for(var k = 0; k < choices.length; k++){
                var choice = choices[k];
                //console.log(choice.getAttribute("data-correct"));
                if(choice.getAttribute("data-correct") === "true"){
                    console.log("Answer: " + choice.innerHTML);
                    dropdownboxes[j].click();
                    choice.click();
                    break;
                }
            }
        }
    
    
    
    
    
    
    
    }else if (interaction.type === "openQuestionInteraction"){
        var textarea = interactionContainers[i].getElementsByClassName("openQuestionArea")[0];
        textarea.value = "";
    
        var answers = interactionContainers[i].getElementsByClassName("answer");
        for (var j = 0; j < answers.length; j++){
            var answerText = answers[j].innerHTML.toString();
            try{
                answerText = atob(answerText);
            }catch(err){
                //console.log("Answer is not base64 encoded")
            }
            answerText = answerText.replace(/<(.*?)>/g, "").replace(/&nbsp;/g, " ").trim();
            
            console.log("Answer: " + answerText);
            
            textarea.value += answerText;
            if(j+1 < answers.length) textarea.value += "\n";
        }
    
    
    
    }else if (interaction.type === "multipleToggleInteraction"){
        console.log(interactionContainers[i]);
        var answers = interactionContainers[i].getElementsByClassName("toggleAnswer");
        for (var j = 0; j < answers.length; j++){
            if(answers[j].getAttribute("data-correct") === "true"){
                answers[j].click();
                console.log("Answer: " + answers[j].children[0].innerHTML);
                //console.log(answers[j]);
            }
        }
    
    }else if (interaction.type === "textEntryInteraction"){
        console.log(interactionContainers[i]);
        var answers = interactionContainers[i].getElementsByClassName("correctAnswer");
        for (var j = 0; j < answers.length; j++){
            console.log(answers[j])
            answers[j].parentElement.getElementsByClassName("answerInput")[0].value = answers[j].innerHTML;
        }
    
    
    
    }else{
        console.log("Slave: Unsupported interaction type: " + interaction.type);
    }
    
}