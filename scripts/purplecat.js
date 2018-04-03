var nextBtns = document.querySelectorAll(".nextBtn");

nextBtns.forEach(function (btn) {
    btn.addEventListener("click",function (event) {
        btnAction(this.getAttribute("id"));
        event.preventDefault();
    });
});

async function btnAction(btnId){
    var welcomeArea     = document.getElementById("welcomeMsgContainer");
    var descAreaOne     = document.getElementById("descriptionAreaOne");
    var descAreaTwo     = document.getElementById("descriptionAreaTwo");
    var descAreaThree   = document.getElementById("descriptionAreaThree");
    var descAreaFour    = document.getElementById("descriptionAreaFour");
    var fakeGameArea    = document.getElementById("fakeGameArea");
    var fakeBlockArea   = document.getElementById("fakeBlockArea");
    var fakeInputArea   = document.getElementById("fakeInputArea");
    var gameArea        = document.getElementById("gameArea");

    if(btnId==="nextOne"){
        fadeOut(welcomeArea,descAreaOne);
        await sleep(1000);
        fadeIn(fakeGameArea,false);
        await sleep(1000);
        fadeIn(fakeInputArea,true);
    }
    if(btnId==="nextTwo"){
        fadeOut(descAreaOne,descAreaTwo);
    }
    if(btnId==="nextThree"){
        fadeOut(descAreaTwo,descAreaThree);
    }
    if(btnId==="nextFour"){
        fadeOut(descAreaThree,descAreaFour);
    }
    if(btnId==="nextFive"){
        fadeOut(descAreaFour,gameArea);
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
    fadeIn(elementIn,true);
    // document.removeChild(element);
}

async function fadeIn(element,inline){
    element.classList.add("fadeInSetup");
    element.classList.add("transSetup");
    if(inline){
        element.classList.replace("hidden","inline");
    }else{
        element.classList.replace("hidden","block");
    }

    // await sleep(500);
    element.classList.add("fadeIn");
    element.classList.remove("transSetup");

}