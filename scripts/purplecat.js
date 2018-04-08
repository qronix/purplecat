class Purplecat{


    constructor(displayManager){
        this.displayManager = displayManager;
        this.speechBubble = this.displayManager.getSpeechBubble;
    }

     catWelcomeMessage(){
        this.speechBubble.innerHTML = "Welcome to Purplecat!";
        this.displayManager.showMessage();

    }
     setupSpeechMessage(message){
        this.speechBubble.innerText = message;
        this.displayManager.showMessage();
    }
}