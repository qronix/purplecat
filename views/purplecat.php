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
            "Purplecat"</p>
        <a href="#" class="nextBtn inline" id="nextFour">Next ></a>
    </div>
    <div class="container hidden descContainer" id="descriptionAreaFour">
        <p class="gameDescription" id="gameDescriptionFour">This will be much harder than it seems, but do not give up! You can do this!</p>
        <a href="#" class="nextBtn inline" id="nextFive">Play !</a>
    </div>
</div>
<div class="container hidden" id="fakeGameArea">
    <div class="container hidden" id="fakeBlockArea">
        <div class="container outputBlock">
            <p class="outputLetter">P</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">u</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">r</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">p</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">l</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">e</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">c</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">a</p>
        </div>
        <div class="container outputBlock">
            <p class="outputLetter">t</p>
        </div>
    </div>
    <div class="container hidden" id="fakeInputArea">
        <input type="text" placeholder="Type purplecat">
    </div>
</div>
<div class="container hidden" id="gameArea">
    <div class="container outputBlock">
        <p class="outputLetter">P</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">u</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">r</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">p</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">l</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">e</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">c</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">a</p>
    </div>
    <div class="container outputBlock">
        <p class="outputLetter">t</p>
    </div>
    <div class="container" id="inputArea">
        <input type="text" placeholder="Type purplecat">
    </div>
</div>

<script type="text/javascript" src="../scripts/purplecat.js"></script>
</body>
</html>
