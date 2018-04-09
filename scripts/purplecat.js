/*
* Purplecat class for Purplecat challenge.
*
*
* Jon H
*
* April 2018

* */

class Purplecat{


    constructor(displayManager){
        this.displayManager = displayManager;
        this.speechBubble = this.displayManager.getSpeechBubble;
    }

     catWelcomeMessage(){
        this.setupSpeechMessage("Welcome to Purplecat");

    }
     setupSpeechMessage(message){
        this.speechBubble.innerHTML = message;
        this.displayManager.showMessage();
    }
}