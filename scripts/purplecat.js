var nextBtns        = document.querySelectorAll(".nextBtn");
var outputBlocks    = document.getElementsByClassName("fakeBlock");
var catFace         = document.getElementById("catFace");
var firstMsgSeen    = false;

nextBtns.forEach(function (btn) {
    btn.addEventListener("click",function (event) {
        btnAction(this.getAttribute("id"));
        event.preventDefault();
    });
});

async function btnAction(btnId){
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
    // document.removeChild(element);
}

async function fadeIn(element,inline){
    element.classList.add("fadeInSetup");
    element.classList.add("transSetup");
    // await sleep(200);
    element.classList.add("fadeIn");
    if(inline){
        element.classList.replace("hidden","inline");
    }else{
        element.classList.replace("hidden","block");
    }

    // await sleep(500);

    element.classList.remove("transSetup");

}

async function animateBlocks(){
    for(var i=0; i<outputBlocks.length; i++){
        outputBlocks[i].classList.add("wavyBlock");
        await sleep(300);
    }
}

async function writeDemoBlocks(){
    var gameStr = "Purplecat";
    var gameStrChars = gameStr.split('');
    console.log("Writing to blocks");
    if(gameStrChars.length<=9){
        for(var i=0; i<outputBlocks.length; i++){
            outputBlocks[i].innerHTML = "<p class=\"outputLetter\">"+gameStr[i]+"</p>";
            await sleep(200);
        }
    }else{
        console.log("Error: Demo string is less than block output space. (9)");
    }

}

function gameInit() {
    var keyMap = generateKeymap();
    var inputBox = document.getElementById("inputBox");
    var maxInputLength = 9;
    speechGenerator();


    inputBox.addEventListener("keyup",function(event){
      if(inputBox.value.length>9){
          inputBox.value = inputBox.value.substr(0,maxInputLength);
      }
      var trimmedInput = inputBox.value.substr(0,maxInputLength);
      if(event.keyCode!==8){
          keyMap = generateKeymap();
      }else{
          console.log("Backspace was pressed");
      }
      if(inputBox.value.length>0){
          handleInput(trimmedInput,keyMap,(trimmedInput.length-1));
      }
      if(inputBox.value.length===0){
          cleanOutputBlocks();
      }
    });
}

function handleInput(input,keyMap,index){

    cleanOutputBlocks();
    var outputLetterEls = document.getElementsByClassName("outputLetter");
    var inputVals = input.split('');
    var outPutString = "";

    // console.log(keyMap);
    // outPutString = "a";
    inputVals.forEach(function(inputChar){
        var inputKeyCode = inputChar.charCodeAt();
        // console.log("KeyMap length is: "+keyMap.length);
        console.log("Index of keyMap is : " + inputKeyCode);
        outPutString += keyMap[inputKeyCode-32];
        console.log("Adjusted keyCode index is: " + (inputKeyCode-32));
        console.log("Changing to: " + keyMap[inputKeyCode-32]);
    });
    // outPutString = outPutString.trim();
    // console.log("Output string is: "+ outPutString);
     var output = outPutString.split('');
    // console.log("Output is: " + outPutString);

    // console.log("Doing it");
    for(var i=0; i<outPutString.length;i++){
        outputLetterEls[i].innerText = output[i];
    }

    checkWin(outPutString);
}

function cleanOutputBlocks(){
    var outputLetterEls = document.getElementsByClassName("outputLetter");
    [].forEach.call(outputLetterEls,function(letter){
        letter.innerText='?';
    });
}

function checkWin(outputTest){
    if(outputTest==="Purplecat"){
        // console.log("We have a winner!");
        speechGenerator("You did it! Congratulations!");
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

async function speechGenerator(msg){
    var speechBubble = document.getElementById("speechBubble");
    if(!firstMsgSeen){
        speechBubble.innerText = "Welcome to Purplecat!";
        speechBubble.classList.remove("hidden");
        firstMsgSeen = true;
    }else{
        speechBubble.innerText = msg;
    }
    showSpeechBubble(speechBubble);
    await sleep(3000);
    fadeSpeechBubble(speechBubble);
}

function fadeSpeechBubble(speechBubble){
    speechBubble.classList.add("fadeOut");
}
function showSpeechBubble(speechBubble){
    speechBubble.classList.replace("fadeOut","fadeIn");
}