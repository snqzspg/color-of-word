function clear(){
	optButtons = [];
	while(document.body.childNodes[2]){
		document.body.removeChild(document.body.childNodes[2]);
	}
}

function insertGameTitle(parent){
	var h = document.createElement("h1");
	h.className = "floatUp";
	var hT = document.createTextNode(gameTitle);
	h.appendChild(hT);
	parent.appendChild(h);
}

function gameModeButtons(parent){
	var p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(selectDesc));
	parent.appendChild(p);
	var p1 = document.createElement("p");
	p1.className = "floatUp largerFont";
	var p1A = document.createElement("a");
	p1A.href = "javascript: void(0);";
	p1A.className = "button coral";
	var p1T = document.createTextNode(arcadeMode + bestScoreMode + (colour_assist ? arcadeBest : arcadeBestNoAssist) + bestScoreMode2 + (colour_assist ? arcadeAvg.toPrecision(3) : arcadeAvgNoAssist.toPrecision(3)) + bestScoreMode3);
	p1A.appendChild(p1T);
	p1.appendChild(p1A);
	$(p1A).click(function(){
		standardMode();
	});
	if($(window).width() < 500){
        parent.appendChild(p1);
        p1 = document.createElement("p");
        p1.className = "floatUp largerFont";
    }else{
        p1.appendChild(document.createTextNode(String.fromCharCode(160)));
    }
	p1A = document.createElement("a");
	p1A.href = "javascript: void(0);";
	p1A.className = "button blueViolet";
	p1T = document.createTextNode(timedMode + bestScoreMode + (colour_assist ? timedBest : timedBestNoAssist) + bestScoreMode2 + (colour_assist ? timedAvg.toPrecision(3) : timedAvgNoAssist.toPrecision(3)) + bestScoreMode3);
	p1A.appendChild(p1T);
	p1.appendChild(p1A);
	$(p1A).click(function(){
		timedModeSetup();
	});
	parent.appendChild(p1);
	
	p1 = document.createElement("p");
	p1.className = "floatUp largerFont";
	p1A = document.createElement("a");
	p1A.href = "javascript: void(0);";
	p1A.className = "button plum";
	p1T = document.createTextNode(musicPage);
	p1A.appendChild(p1T);
	p1.appendChild(p1A);
	$(p1A).click(function(){
		displayMusicPage();
	});
	
	if($(window).width() < 500){
        parent.appendChild(p1);
        p1 = document.createElement("p");
        p1.className = "floatUp largerFont";
    }else{
        p1.appendChild(document.createTextNode(String.fromCharCode(160)));
    }
	
    p1A = document.createElement("a");
	p1A.href = "javascript: void(0);";
	p1A.className = "button esther_citius_shatsu_iro";
	p1T = document.createTextNode(optionsButton);
	p1A.appendChild(p1T);
	p1.appendChild(p1A);
	$(p1A).click(function(){
		displayOptionsPage();
	});
	
	if($(window).width() < 500){
        parent.appendChild(p1);
        p1 = document.createElement("p");
        p1.className = "floatUp largerFont";
    }else{
        p1.appendChild(document.createTextNode(String.fromCharCode(160)));
    }
	
	p1A = document.createElement("a");
	p1A.href = "javascript: window.close();";
	p1A.className = "button cwl_akaishatsu_iro";
	p1T = document.createTextNode(leaveGame);
	p1A.appendChild(p1T);
	p1.appendChild(p1A);
	parent.appendChild(p1);
}

function musicCreditsText(parent){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(musicCreditsTitle);
	h.appendChild(hT);
	parent.appendChild(h);
	var p = document.createElement("p");
	p.className = "floatUp";
	var a = document.createElement("a");
	a.className = "button tomato";
	a.href = "http://incompetech.com/music/royalty-free/index.html?collection=17&Search=Search";
	a.target = "_blank";
	var img = document.createElement("img");
	img.src = "Resources/Music/Light.jpg";
	img.alt = "Light Album Art";
	img.width = "120";
	img.height = "120";
	a.appendChild(img);
	a.appendChild(document.createElement("br"));
	a.appendChild(document.createTextNode(musicCollection1));
	p.appendChild(a);
	p.appendChild(document.createTextNode(String.fromCharCode(160)));
	a = document.createElement("a");
	a.className = "button steelBlue";
	a.href = "http://incompetech.com/music/royalty-free/index.html?collection=27&Search=Search";
	a.target = "_blank";
	img = document.createElement("img");
	img.src = "Resources/Music/Serenity.jpg";
	img.alt = "Serenity Album Art";
	img.width = "120";
	img.height = "120";
	a.appendChild(img);
	a.appendChild(document.createElement("br"));
	a.appendChild(document.createTextNode(musicCollection2));
	p.appendChild(a);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
	a = document.createElement("a");
	a.className = "button aquamarine";
	a.href = "http://incompetech.com/music/";
	a.target = "_blank";
	a.appendChild(document.createTextNode(musicCollection3));
	p.appendChild(a);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(musicCreditLine1));
	p.appendChild(document.createElement("br"));
	p.appendChild(document.createTextNode(musicCreditLine2));
	p.appendChild(document.createElement("br"));
	a = document.createElement("a");
    a.className = "dont-break-out";
	a.href = "http://creativecommons.org/licenses/by/3.0/";
	a.target = "_blank";
	a.appendChild(document.createTextNode(musicCreditLine3));
	p.appendChild(a);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
	a = document.createElement("a");
	a.className = "button lightPink";
	a.href = "javascript: void(0);";
	a.appendChild(document.createTextNode(backToMainScreen));
	p.appendChild(a);
	$(a).click(function(){
		//$("body").css("overflow", "hidden");
		initialiseGame();
	});
	parent.appendChild(p);
}

function optionsText(parent){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(optionsPageTitle);
	h.appendChild(hT);
	parent.appendChild(h);
    
	var p = document.createElement("p");
	p.className = "floatUp";
    
    var a = document.createElement("a");
	a.href = "javascript: void(0);";
	a.className = "button cwl_sukaato_iro";
	var txt = document.createTextNode(musicOn ? musicOnTxt : musicOffTxt);
	a.appendChild(txt);
	p.appendChild(a);
	$(a).click(function(){
		toggleMusic($(this));
	});
    parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
    a = document.createElement("a");
	a.href = "javascript: void(0);";
	a.className = "button deepPink";
	txt = document.createTextNode(colour_assist ? colourAssistOnTxt : colourAssistOffTxt);
	a.appendChild(txt);
	p.appendChild(a);
	parent.appendChild(p);
	$(a).click(function(){
		toggleColourAssist($(this));
	});
	
	p = document.createElement("p");
	a = document.createElement("a");
	a.href = "javascript: void(0);";
	a.className = "button altius_shatsu_iro";
	txt = document.createTextNode(clrData);
	a.appendChild(txt);
	p.appendChild(a);
	$(a).click(function(){
		displayConfirmResetPage();
	});
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
	a = document.createElement("a");
	a.className = "button xinqie_someta_kami_iro";
	a.href = "javascript: void(0);";
	a.appendChild(document.createTextNode(backToMainScreen));
	p.appendChild(a);
	$(a).click(function(){
		//$("body").css("overflow", "hidden");
		initialiseGame();
	});
	parent.appendChild(p);
}

function confirmResetText(parent){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(confirmResetTitle);
	h.appendChild(hT);
	parent.appendChild(h);
    
	var p = document.createElement("p");
	p.className = "floatUp";
    var text = document.createTextNode(confirmResetDesc);
    p.appendChild(text);
    parent.appendChild(p);
	
	p = document.createElement("p");
	p.className = "floatUp";
	a = document.createElement("a");
	a.className = "button hotPink";
	a.href = "javascript: void(0);";
	a.appendChild(document.createTextNode(confirmResetYes));
	p.appendChild(a);
	$(a).click(function(){
		resetData();
		location.reload();
	});
    
    p.appendChild(document.createTextNode(String.fromCharCode(160)));
    
	a = document.createElement("a");
	a.className = "button turquoise";
	a.href = "javascript: void(0);";
	a.appendChild(document.createTextNode(confirmResetNo));
	p.appendChild(a);
	$(a).click(function(){
		displayOptionsPage();
	});
	parent.appendChild(p);
}

function versionLines(parent){
	var p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(verLine1));
	p.appendChild(document.createElement("br"));
	p.appendChild(document.createTextNode(verLine2));
	parent.appendChild(p);
}

function standardModeTitle(parent){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(arcadeMode);
	h.appendChild(hT);
	parent.appendChild(h);
}

function timedModeTitle(parent){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(timedMode);
	h.appendChild(hT);
	parent.appendChild(h);
}

function standardModeHowTo(parent){
	keyboardInput = true;
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(arcadeModeHowTo);
	h.appendChild(hT);
	parent.appendChild(h);
	var p = document.createElement("p");
	p.className = "floatUp wordDisplay";
	var correctCol = Math.floor(Math.random() * colourCodes.length);
	p.style.color = colourCodes[correctCol];
	var pT = document.createTextNode(demoWords[Math.floor(Math.random() * demoWords.length)]);
	p.appendChild(pT);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.id = "options";
	p.className = "floatUp";
	var a = [$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"})
	];
	var n = [0, 0, 0, 0];
	correctAnswer = Math.floor(Math.random() * 4);
	do{
		n[0] = Math.floor(Math.random() * colourNames.length);
	}while(n[0] == correctCol);
	do{
		n[1] = Math.floor(Math.random() * colourNames.length);
	}while(n[1] == correctCol || n[1] == n[0]);
	do{
		n[2] = Math.floor(Math.random() * colourNames.length);
	}while(n[2] == correctCol || n[2] == n[1] || n[2] == n[0]);
	do{
		n[3] = Math.floor(Math.random() * colourNames.length);
	}while(n[3] == correctCol || n[3] == n[2] || n[3] == n[1] || n[3] == n[0]);
	n[correctAnswer] = correctCol;
	for(var i = 0; i < a.length; i++){
		a[i].html((i + 1) + ". " + colourNames[n[i]] + " (" + keyDisplay[i] + ")");
		a[i].attr("class", "button " + (colour_assist ? ("gameColour" + (n[i] + 1)) : "xinqie_karada_no_iro_1"));
		a[i].click(function(){
			inputAns($("#options a.button").index(this), true);
		});
	}
	optButtons[i] = [a[0], a[1], a[2], a[3]];
	$(p).append(a[0]);
	$(p).append(" ");
	$(p).append(a[1]);
	if($(window).width() < 500){
        $(p).append(document.createElement("br"));
        $(p).append(document.createElement("br"));
    }else{
        for(var i = 0; i < optionsSpaceWidth; i++) $(p).append(String.fromCharCode(160));
    }
	$(p).append(a[2]);
	$(p).append(" ");
	$(p).append(a[3]);
	$(parent).append(p);
	p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(arcadeModeHowTo1 + (correctAnswer + 1) + arcadeModeHowTo2 + keyDisplay[correctAnswer] + arcadeModeHowTo3 + (correctAnswer + 1) + arcadeModeHowTo4));
	parent.appendChild(p);
}

function writeGameElements(parent){
	var p = document.createElement("p");
	p.id = "Display";
	p.className = "wordDisplay";
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.id = "options";
	$(parent).append(p);
}

function scoreProgress(parent){
	var p = document.createElement("p");
	p.className = "floatUp scoreLine";
	var pT = document.createTextNode(yourScore);
	p.appendChild(pT);
	var s = document.createElement("span");
	s.id = "scoreProgress";
	s.innerHTML = "0";
	p.appendChild(s);
	parent.appendChild(p);
}

function recordScore(){
	if(document.getElementById("scoreProgress")){
		document.getElementById("scoreProgress").innerHTML = score;
	}
}

function gameOverTitle(parent, type){
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(gameOver);
	h.appendChild(hT);
	parent.appendChild(h);
	var p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(gameOverMsg[type]));
	parent.appendChild(p);
}

function scoreLine(parent, type, newBest){
	var p = document.createElement("p");
	p.id = "scoreDisplay";
	p.className = "floatUp wordDisplay";
	var pT = document.createTextNode(yourScore + score);
	p.appendChild(pT);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.id = "bestScoreDisplay";
	p.className = "floatUp bestScore";
	if(newBest){
		p.style.color = "#00ff7f";
	}else{
		p.style.color = "black";
	}
    if(colour_assist){
        p.appendChild(document.createTextNode(yourBestScore + (type == 2 ? timedBest : arcadeBest) + yourAverageScore + (type == 2 ? timedAvg.toPrecision(3) : arcadeAvg.toPrecision(3))));
    }else{
        p.appendChild(document.createTextNode(yourBestScore + (type == 2 ? timedBestNoAssist : arcadeBestNoAssist) + yourAverageScore + (type == 2 ? timedAvgNoAssist.toPrecision(3) : arcadeAvgNoAssist.toPrecision(3))));
    }
	parent.appendChild(p);
}

function gameOverButtons(parent){
	var p = document.createElement("p");
	p.className = "floatUp";
	var a1 = document.createElement("a");
	a1.href = "javascript: void(0);";
	a1.className = "button deepPink";
	a1.innerHTML = playAgain + " (" + restartKeyDisplay + ")";
	p.appendChild(a1);
	p.appendChild(document.createTextNode(" "));
	$(a1).click(function(){
		if(gameMode == 2){
			timedModeSetup();
		}else{
			standardMode();
		}
	});
	a1 = document.createElement("a");
	a1.href = "javascript: void(0);";
	a1.className = "button fireBrick";
	a1.innerHTML = backToMainScreen + " (" + backKeyDisplay + ")";
	p.appendChild(a1);
	$(a1).click(function(){
		initialiseGame();
	});
	parent.appendChild(p);
}

function restartCSSAni(e){
	var ne = e.cloneNode(true);
	e.parentNode.replaceChild(ne, e);
}

function timedModeHowTo(parent){
	keyboardInput = true;
	var h = document.createElement("h2");
	h.className = "floatUp";
	var hT = document.createTextNode(arcadeModeHowTo);
	h.appendChild(hT);
	parent.appendChild(h);
	var p = document.createElement("p");
	p.className = "floatUp wordDisplay";
	var correctCol = Math.floor(Math.random() * colourCodes.length);
	p.style.color = colourCodes[correctCol];
	var pT = document.createTextNode(demoWords[Math.floor(Math.random() * demoWords.length)]);
	p.appendChild(pT);
	parent.appendChild(p);
	
	p = document.createElement("p");
	p.id = "options";
	p.className = "floatUp";
	var a = [$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"})
	];
	var n = [0, 0, 0, 0];
	correctAnswer = Math.floor(Math.random() * 4);
	do{
		n[0] = Math.floor(Math.random() * colourNames.length);
	}while(n[0] == correctCol);
	do{
		n[1] = Math.floor(Math.random() * colourNames.length);
	}while(n[1] == correctCol || n[1] == n[0]);
	do{
		n[2] = Math.floor(Math.random() * colourNames.length);
	}while(n[2] == correctCol || n[2] == n[1] || n[2] == n[0]);
	do{
		n[3] = Math.floor(Math.random() * colourNames.length);
	}while(n[3] == correctCol || n[3] == n[2] || n[3] == n[1] || n[3] == n[0]);
	n[correctAnswer] = correctCol;
	for(var i = 0; i < a.length; i++){
		a[i].html((i + 1) + ". " + colourNames[n[i]] + " (" + keyDisplay[i] + ")");
		a[i].attr("class", "button " + (colour_assist ? ("gameColour" + (n[i] + 1)) : "xinqie_karada_no_iro_1"));
		a[i].click(function(){
			inputAns($("#options a.button").index(this), true);
		});
	}
	optButtons[i] = [a[0], a[1], a[2], a[3]];
	$(p).append(a[0]);
	$(p).append(" ");
	$(p).append(a[1]);
	if($(window).width() < 500){
        $(p).append(document.createElement("br"));
        $(p).append(document.createElement("br"));
    }else{
        for(var i = 0; i < optionsSpaceWidth; i++) $(p).append(String.fromCharCode(160));
    }
	$(p).append(a[2]);
	$(p).append(" ");
	$(p).append(a[3]);
	$(parent).append(p);
	p = document.createElement("p");
	p.className = "floatUp";
	p.appendChild(document.createTextNode(arcadeModeHowTo1 + (correctAnswer + 1) + arcadeModeHowTo2 + keyDisplay[correctAnswer] + arcadeModeHowTo3 + (correctAnswer + 1) + arcadeModeHowTo4));
	parent.appendChild(p);
}

function toggleMusic(theSwitch){
	if(theSwitch.length){
		if(musicOn){
			document.getElementById("BGMusic").pause();
			$("#BGMusic").empty();
			musicOn = false;
			//if(typeof(Storage) !== "undefined"){
				//localStorage.colMusic = musicOn ? 1 : 0;
			//}
			setCookieBoolean("colMusic", musicOn);
		}else{
			document.getElementById("BGMusic").play();
			pickRandomMusic();
			musicOn = true;
			//if(typeof(Storage) !== "undefined"){
				//localStorage.colMusic = musicOn ? 1 : 0;
			//}
			setCookieBoolean("colMusic", musicOn);
		}
		theSwitch.html(musicOn ? musicOnTxt : musicOffTxt);
	}
}

function toggleColourAssist(theSwitch){
	if(theSwitch.length){
		if(colour_assist){
			colour_assist = false;
			//if(typeof(Storage) !== "undefined"){
				//localStorage.colAssist = colour_assist ? 1 : 0;
			//}
			setCookieBoolean("colAssist", colour_assist);
		}else{
			colour_assist = true;
			//if(typeof(Storage) !== "undefined"){
				//localStorage.colAssist = colour_assist ? 1 : 0;
			//}
			setCookieBoolean("colAssist", colour_assist);
		}
		theSwitch.html(colour_assist ? colourAssistOnTxt : colourAssistOffTxt);
	}
}