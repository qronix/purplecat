class DisplayManager{

    constructor(){
        this.speechBubble    = document.getElementById("speechBubble");
        this.nextBtns        = document.querySelectorAll(".nextBtn");
        this.outputBlocks    = document.getElementsByClassName("fakeBlock");
        this.catFace         = document.getElementById("catFace");
        this.maxInputLength  = 9;
        this.welcomeCont     = document.getElementById("welcomeMsgContainer");
        this.descAreaOne     = document.getElementById("descriptionAreaOne");
        this.descAreaTwo     = document.getElementById("descriptionAreaTwo");
        this.descAreaThree   = document.getElementById("descriptionAreaThree");
        this.descAreaFour    = document.getElementById("descriptionAreaFour");
        this.fakeGameArea    = document.getElementById("fakeGameArea");
        this.fakeBlockArea   = document.getElementById("fakeBlockArea");
        this.fakeInputArea   = document.getElementById("fakeInputArea");
        this.gameArea        = document.getElementById("gameArea");
        this.gameDescArea    = document.getElementById("gameDescriptionArea");
        this.welcomeMsgArea  = document.getElementById("welcomeMsgArea");
        this.gameDemoMessage = "Purplecat";
        this.gameStrChars    = this.gameDemoMessage.split('');
        this.outputLetterEls = document.getElementsByClassName("outputLetter");
        this.gameManager     = new GameManager(this);

        console.log("Display manager setup");
    }

     setupButtons(){
        var outerClass = this;
        this.nextBtns.forEach(function (btn) {
            btn.addEventListener("click",function (event) {
                outerClass.btnAction(this.getAttribute("id"));
                event.preventDefault();
            });
        });
    }

     setupGameManager(gameManager){
        this.gameManager = gameManager;
        console.log("GM set");
        console.dir(this.gameManager);
    }

    get getSpeechBubble(){
        return this.speechBubble;
    }

     async btnAction(btnId){

        if(btnId==="nextOne"){
            this.fadeOut(this.welcomeCont,this.descAreaOne);
            await sleep(1000);
            this.fadeIn(this.fakeGameArea,false);
            await sleep(1000);
            this.fadeIn(this.fakeInputArea,true);
        }
        if(btnId==="nextTwo"){
            this.fadeOut(this.descAreaOne,this.descAreaTwo);
            this.fadeOut(this.fakeInputArea,null);
            await sleep(2000);
            this.fadeIn(this.fakeBlockArea,false);
            this.animateBlocks();
        }
        if(btnId==="nextThree"){
            this.fadeOut(this.descAreaTwo,this.descAreaThree);
            await sleep(1000);
            this.writeDemoBlocks();

        }
        if(btnId==="nextFour"){
            this.fadeOut(this.fakeBlockArea,null);
            this.fadeOut(this.descAreaThree,this.descAreaFour);

        }
        if(btnId==="nextFive"){
            this.fadeOut(this.fakeGameArea,null);
            this.fadeOut(this.welcomeMsgArea,null);
            this.fadeOut(this.gameDescArea,null);
            this.fadeOut(this.descAreaFour,null);
            await sleep(1000);
            this.fadeIn(this.gameArea,false);
            this.catFace.classList.remove("hidden");
            this.gameManager.gameInit();
        }
    }


    async fadeOut(elementOut, elementIn){
        elementOut.classList.add("transSetup");
        elementOut.classList.remove("fadeIn");
        elementOut.classList.add("fadeOut");
        await sleep(1000);
        elementOut.parentElement.removeChild(elementOut);
        if(elementIn!==null){
            this.fadeIn(elementIn,true);
        }
    }

    async fadeIn(element,inline){
        element.classList.add("fadeInSetup");
        element.classList.add("transSetup");
        element.classList.add("fadeIn");

        if(inline){
            element.classList.replace("hidden","inline");
        }else{
            element.classList.replace("hidden","block");
        }

        element.classList.remove("transSetup");

    }
    async  animateBlocks(){
        for(var i=0; i<this.outputBlocks.length; i++){
            this.outputBlocks[i].classList.add("wavyBlock");
            await sleep(300);
        }
    }
      async writeDemoBlocks(){

        if(this.gameStrChars.length<=9){
            for(var i=0; i<this.outputBlocks.length; i++){
                this.outputBlocks[i].innerHTML = "<p class=\"outputLetter\">"+this.gameDemoMessage[i]+"</p>";
                await sleep(200);
            }
        }else{
            console.log("Error: Demo string is less than block output space. (9)");
        }

    }
     setupOutputBlocks(){
        this.outputLetterEls = document.getElementsByClassName("outputLetter");
    }
     setupInputBox(){

        var inputBox = document.getElementById("inputBox");
        var outerClass = this;

        inputBox.addEventListener("keyup",function(event){
            if(inputBox.value.length>9){
                inputBox.value = inputBox.value.substr(0,outerClass.maxInputLength);
            }
            var trimmedInput = inputBox.value.substr(0,outerClass.maxInputLength);
            if(event.keyCode!==8){ //backspace
                 console.dir(outerClass.gameManager);
            }
            if(inputBox.value.length>0){
                outerClass.handleInput(trimmedInput,outerClass.gameManager.keyMap);
            }
            if(inputBox.value.length===0){
                outerClass.cleanOutputBlocks();
            }
        });
    }

     handleInput(input,keyMap){
        this.cleanOutputBlocks();
        var inputVals = input.split('');
        var outPutString = "";
        inputVals.forEach(function(inputChar){
            var inputKeyCode = inputChar.charCodeAt();
            outPutString += keyMap[inputKeyCode-32];
        });
        var output = outPutString.split('');
        for(var i=0; i<outPutString.length;i++){
            this.outputLetterEls[i].innerText = output[i];
        }

        this.gameManager.checkWin(outPutString);
    }
     cleanOutputBlocks(){
        [].forEach.call(this.outputLetterEls,function(letter){
            letter.innerText='?';
        });
    }
    async showMessage(){
        this.showSpeechBubble();
        await sleep(3000);
        this.fadeSpeechBubble();
    }
     fadeSpeechBubble(){
        this.speechBubble.classList.add("fadeOut");
    }
     showSpeechBubble(){
        this.speechBubble.classList.remove("hidden");
        this.speechBubble.style.display = "flex";
        this.speechBubble.classList.replace("fadeOut","fadeIn");
    }

}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}