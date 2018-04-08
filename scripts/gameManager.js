/*
* Purplecat script for Purplecat challenge.
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
    }

     gameInit() {
        this.purpleCat.catWelcomeMessage();
        this.generateKeymap();
        this.displayManager.setupOutputBlocks();
        this.displayManager.setupInputBox();
    }

     checkWin(outputTest){
        if(outputTest==="Purplecat"){
            this.purpleCat.setupSpeechMessage("You did it! Congratulations!");
        }
    }

     generateKeymap(){
        var keyMap = [];
        var shiftAmt = Math.floor(Math.random()*94);

        for(var i=0; i<93; i++){
            if(32+shiftAmt>126){
                shiftAmt = 0;
            }
            var shiftedChar = String.fromCharCode(32+shiftAmt);
            shiftAmt++;
            keyMap[i] = shiftedChar;
        }

        return keyMap;
    }
}

