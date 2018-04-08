<?php

?>

<html>
<head>
    <title>PurpleCat Challenge</title>
    <link type="text/css" rel="stylesheet" href="../vendor/css/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Chicle" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="../resources/style.css">
</head>
<body>
<div class="container">
    <h1>Purplecat</h1>
    <h3>Can you beat the challenge?</h3>
</div>
<p class="container hidden" id="speechBubble">
    Meow! Feed me! I am hunnngry!
</p>
<div class="container hidden" id="catFace">
    <img src="../resources/img/purpleCat.png">
</div>
<div class="container" id="welcomeMsgArea">
    <div class="container" id="welcomeMsgContainer">
        <p id="welcomeMsg">Welcome to the Purplecat challenge!</p>
        <a href="#" class="nextBtn inline" id="nextOne">Next ></a>
    </div>
</div>
<div class="container" id="gameDescriptionArea">
    <div class="container hidden descContainer" id="descriptionAreaOne">
        <p class="gameDescription" id="gameDescriptionOne">The challenge:</br> You will be presented with an input area, like the one below.</p>
        <a href="#" class="nextBtn inline" id="nextTwo">Next ></a>
    </div>
    <div class="container hidden descContainer" id="descriptionAreaTwo">
        <p class="gameDescription" id="gameDescriptionTwo">You will also be presented with a set of boxes like these:</p>
        <a href="#" class="nextBtn inline" id="nextThree">Next ></a>
    </div>
    <div class="container hidden descContainer" id="descriptionAreaThree">
        <p class="gameDescription" id="gameDescriptionThree">Your goal is to type into the input area so that the boxes display
            "Purplecat".</br>The content of these boxes will change as you type.</p>
        <a href="#" class="nextBtn inline" id="nextFour">Next ></a>
    </div>
    <div class="container hidden descContainer" id="descriptionAreaFour">
        <p class="gameDescription" id="gameDescriptionFour">This will be much harder than it seems, but do not give up! You can do this!</p>
        <a href="#" class="nextBtn inline wiggle" id="nextFive">Play !</a>
    </div>
</div>
<div class="container hidden" id="fakeGameArea">
    <div class="container hidden" id="fakeBlockArea">
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
        <div class="container outputBlock fakeBlock">
            <p class="outputLetter">?</p>
        </div>
    </div>
    <div class="container hidden" id="fakeInputArea">
        <input type="text" disabled>
    </div>
</div>
<div class="container hidden" id="gameArea">
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">?</p>
    </div>
    <div class="container" id="inputArea">
        <input id="inputBox" type="text">
    </div>
</div>

<script type="text/javascript" src="../scripts/displayManager.js"></script>
<script type="text/javascript" src="../scripts/gameManager.js"></script>
<script type="text/javascript" src="../scripts/purplecat.js"></script>

<script type="text/javascript">

    var displayManager = new DisplayManager();
    var gameManager = new GameManager(displayManager);


    window.onload=function(){
        displayManager.setupButtons();
    };
</script>

</body>
</html>
