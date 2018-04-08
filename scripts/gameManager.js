/*
* Purplecat script for Purplecat challenge.
*
*
* Jon H
*
* April 2018
*
*
*
* */


/*
*
* Var declarations
* */

var nextBtns        = document.querySelectorAll(".nextBtn");
var outputBlocks    = document.getElementsByClassName("fakeBlock");
var catFace         = document.getElementById("catFace");
var firstMsgSeen    = false;
var speechBubble    = document.getElementById("speechBubble");
var keyMap          = generateKeymap();
var inputBox        = document.getElementById("inputBox");
var maxInputLength  = 9;
var welcomeCont     = document.getElementById("welcomeMsgContainer");
var descAreaOne     = document.getElementById("descriptionAreaOne");
var descAreaTwo     = document.getElementById("descriptionAreaTwo");
var descAreaThree   = document.getElementById("descriptionAreaThree");
var descAreaFour    = document.getElementById("descriptionAreaFour");
var fakeGameArea    = document.getElementById("fakeGameArea");
var fakeBlockArea   = document.getElementById("fakeBlockArea");
var fakeInputArea   = document.getElementById("fakeInputArea");
var gameArea        = document.getElementById("gameArea");
var gameDescArea    = document.getElementById("gameDescriptionArea");
var welcomeMsgArea  = document.getElementById("welcomeMsgArea");
var gameDemoMessage = "Purplecat";
var gameStrChars    = gameDemoMessage.split('');
var outputLetterEls = document.getElementsByClassName("outputLetter");

var purpleCat = new Purplecat();




window.onload=function(){
   setupButtons();
};


function setupButtons(){
    nextBtns.forEach(function (btn) {
        btn.addEventListener("click",function (event) {
            btnAction(this.getAttribute("id"));
            event.preventDefault();
        });
    });
}

async function btnAction(btnId){

    if(btnId==="nextOne"){
        fadeOut(welcomeCont,descAreaOne);
        await sleep(1000);
        fadeIn(fakeGameArea,false);
        await sleep(1000);
        fadeIn(fakeInputArea,true);
    }
    if(btnId==="nextTwo"){
        fadeOut(descAreaOne,descAreaTwo);
        fadeOut(fakeInputArea,null);
        await sleep(2000);
        fadeIn(fakeBlockArea,false);
        animateBlocks();
    }
    if(btnId==="nextThree"){
        fadeOut(descAreaTwo,descAreaThree);
        await sleep(1000);
        writeDemoBlocks();

    }
    if(btnId==="nextFour"){
        fadeOut(fakeBlockArea,null);
        fadeOut(descAreaThree,descAreaFour);

    }
    if(btnId==="nextFive"){
        fadeOut(fakeGameArea,null);
        fadeOut(welcomeMsgArea,null);
        fadeOut(gameDescArea,null);
        fadeOut(descAreaFour,null);
        await sleep(1000);
        fadeIn(gameArea,false);
        catFace.classList.remove("hidden");
        gameInit();
    }
}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function fadeOut(elementOut, elementIn){
    elementOut.classList.add("transSetup");
    elementOut.classList.remove("fadeIn");
    elementOut.classList.add("fadeOut");
    await sleep(1000);
    elementOut.parentElement.removeChild(elementOut);
    if(elementIn!==null){
        fadeIn(elementIn,true);
    }
}

async function fadeIn(element,inline){
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

async function animateBlocks(){
    for(var i=0; i<outputBlocks.length; i++){
        outputBlocks[i].classList.add("wavyBlock");
        await sleep(300);
    }
}

async function writeDemoBlocks(){

    if(gameStrChars.length<=9){
        for(var i=0; i<outputBlocks.length; i++){
            outputBlocks[i].innerHTML = "<p class=\"outputLetter\">"+gameDemoMessage[i]+"</p>";
            await sleep(200);
        }
    }else{
        console.log("Error: Demo string is less than block output space. (9)");
    }

}

function setupOutputBlocks(){
    outputLetterEls = document.getElementsByClassName("outputLetter");
}

function setupInputBox(){

    inputBox.addEventListener("keyup",function(event){
        if(inputBox.value.length>9){
            inputBox.value = inputBox.value.substr(0,maxInputLength);
        }
        var trimmedInput = inputBox.value.substr(0,maxInputLength);
        if(event.keyCode!==8){ //backspace
            keyMap = generateKeymap();
        }
        if(inputBox.value.length>0){
            handleInput(trimmedInput,keyMap);
        }
        if(inputBox.value.length===0){
            cleanOutputBlocks();
        }
    });
}

function gameInit() {

    catWelcomeMessage();
    setupOutputBlocks();
    setupInputBox();

    purpleCat.sayHi();

}

function handleInput(input,keyMap){
    cleanOutputBlocks();
    var inputVals = input.split('');
    var outPutString = "";
    inputVals.forEach(function(inputChar){
        var inputKeyCode = inputChar.charCodeAt();
        outPutString += keyMap[inputKeyCode-32];
    });
    var output = outPutString.split('');
    for(var i=0; i<outPutString.length;i++){
        outputLetterEls[i].innerText = output[i];
    }

    checkWin(outPutString);
}

function cleanOutputBlocks(){
    [].forEach.call(outputLetterEls,function(letter){
        letter.innerText='?';
    });
}

function checkWin(outputTest){
    if(outputTest==="Purplecat"){
        setupSpeechMessage("You did it! Congratulations!");
    }
}

function generateKeymap(){
    var keymap = [];
    var shiftAmt = Math.floor(Math.random()*94);

    for(var i=0; i<93; i++){
        if(32+shiftAmt>126){
            shiftAmt = 0;
        }
        var shiftedChar = String.fromCharCode(32+shiftAmt);
        shiftAmt++;
        keymap[i] = shiftedChar;
    }

    return keymap;
}

function catWelcomeMessage(){
    speechBubble.innerHTML = "Welcome to Purplecat!";
    showMessage();
    firstMsgSeen = true;

}

function setupSpeechMessage(message){
    speechBubble.innerText = message;
    showMessage();
}

async function showMessage(){
    showSpeechBubble();
    await sleep(3000);
    fadeSpeechBubble();
}


function fadeSpeechBubble(){
    speechBubble.classList.add("fadeOut");
}
function showSpeechBubble(){
    speechBubble.classList.remove("hidden");
    speechBubble.style.display = "flex";
    speechBubble.classList.replace("fadeOut","fadeIn");
}