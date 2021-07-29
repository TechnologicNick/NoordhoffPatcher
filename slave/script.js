//alert('script' + window.name);
log('Script added! ' + window.location.hostname);

function npShowAnswers(){
    var EX_SINGLECHOICE = 1;
    var EX_MULTIPLECHOICE = 2;
    var EX_TEXTENTRY = 3;
    var EX_DRAGNDROP = 4;
    var EX_DRAGNSORT = 5;
    var EX_DRAGNSTACK = 6;
    var EX_DRAGCONTAINER = 7;
    var EX_TRUEORFALSE = 8;
    var EX_TEXTENTRYDROPLIST = 9;
    var EX_CONNECTION = 10;
    var EX_SHAPECLICK = 11;
    var EX_PAIRS = 12;
    var EX_SIMPLE = 13;
    var EX_SMARTASSET = 14;
    var EX_DRAGNDROPSTACKSENTENCE = 15;
    
    var exercise = tempExContainer[0];
    var cab = exercise.config.correctAnswerBehaviour;
    exercise.config.correctAnswerBehaviour = "SHOW_NO_GRAPHIC_TIPPS";
    exercise.showCorrectAnswer();
    exercise.config.correctAnswerBehaviour = cab;
    
    var index;
    
    log("exercise.type = " + exercise.type);
    
    switch(exercise.type){
        case EX_SINGLECHOICE: //1
            log("1");
            break;
        case EX_DRAGCONTAINER: //7
            log("7");
            break;
        default:
            log("default");
            log("test");
            for (index in exercise.items) {
                var targetText = exercise.items[index].targetText;
                exercise.items[index].correct = true;
                exercise.items[index].selected = targetText.indexOf("|") !== -1 ? targetText.split("|")[0] : targetText;
                exercise.items[index].processed = true;
            }
        /*
            try{
                for (index in exercise.items) {
                    exercise.items[index].correct = true;
                    exercise.items[index].selected = exercise.items[index].targetText.split("|")[0];
                    exercise.items[index].processed = true;
                }
                log("case: text");
            }catch(err){
                for (index in exercise.items) {
                    exercise.items[index].correct = true;
                    exercise.items[index].selected = exercise.items[index].targetText;
                    exercise.items[index].processed = true;
                }
                log("case: choice");
            }*/
            break;
    }
    
    
    
    /*
    switch(exercise.type){
        case EX_SINGLECHOICE:
        case EX_MULTIPLECHOICE:
        case EX_DRAGNDROP:
        case EX_TRUEORFALSE:
        case EX_PAIRS:
            log("case: EX_MULTIPLECHOICE");
            for (index in exercise.items) {
                exercise.items[index].correct = true;
                exercise.items[index].selected = exercise.items[index].targetText;
                exercise.items[index].processed = true;
            }
            break;
        default:
            try{
                log("case: text");
                for (index in exercise.items) {
                    exercise.items[index].correct = true;
                    exercise.items[index].selected = exercise.items[index].targetText.split("|")[0];
                    exercise.items[index].processed = true;
                }
            }catch(err){
                log("case: choice");
                for (index in exercise.items) {
                    exercise.items[index].correct = true;
                    exercise.items[index].selected = exercise.items[index].targetText;
                    exercise.items[index].processed = true;
                }
            }
            
            break;
    }*/
    
    
    
    //switch(exercise.type){
    //    case EX_TEXTENTRYDROPLIST:
    //        break;
    //}
    
    exercise.updateOkBtn();
}



function log(m){
    console.log('Slave: ' + m);
}