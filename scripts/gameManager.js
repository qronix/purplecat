/*
* Game Management script for Purplecat challenge.
*
*
* Jon H
*
* April 2018

* */

class GameManager{

    constructor(displayManager){
        this.purpleCat = new Purplecat(displayManager);
        this.keyMap = this.generateKeymap();
        this.displayManager = displayManager;
        this.correctString = "Purplecat";
        this.correctStringIndex = 0;
        this.correctLetter = this.correctString[this.correctStringIndex];
    }

     gameInit() {
        this.purpleCat.catWelcomeMessage();
        this.generateKeymap();
        this.generateHint();
        this.displayManager.setupOutputBlocks();
        this.displayManager.setupInputBox();
    }

     checkWin(outputTest){
        if(outputTest==="Purplecat"){
            this.purpleCat.setupSpeechMessage("You did it! Congratulations!");
            return true;
        }
        return false;
    }

     generateKeymap(){
        var keyMap = [];
        var shiftAmt = Math.floor(Math.random()*94);

        for(var i=0; i<93; i++) {
            if (32 + shiftAmt > 126) {
                shiftAmt = 0;
            }
            var shiftedChar = String.fromCharCode(32 + shiftAmt);
            shiftAmt++;
            keyMap[i] = shiftedChar;
        }

      this.keyMap = keyMap;
    }

    setCorrectLetter(){
        this.correctLetter = this.correctString[this.correctStringIndex];
    }

    generateHint() {
        var borderStyles = ["solid", "dashed", "inset"];
        var borderSelection = Math.floor(Math.random()*3);
        var rgb = [111,222,333];
        var colorOne = Math.floor(Math.random()*255);
        var colorTwo = Math.floor(Math.random()*255);
        rgb[borderSelection] = this.keyMap.indexOf(this.correctLetter);
        var colorOneSet = false;

        for(var i=0; i<rgb.length; i++){
            if(i!==borderSelection){
                if(!colorOneSet){
                    rgb[i]=colorOne;
                    colorOneSet = true;
                }else{
                    rgb[i] = colorTwo;
                }
            }
        }
        this.displayManager.createBorder(rgb[0],rgb[1],rgb[2],borderStyles[borderSelection]);
    }
}

