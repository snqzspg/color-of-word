function gameSetupArcade(){
	clear();
	insertGameTitle(document.body);
	standardModeTitle(document.body);
	scoreProgress(document.body);
	writeGameElements(document.body);
	$("body").append($("<div></div>").attr({id: "timerBar", "class": "timeBar"}));
	displayQuestion();
}

function gameSetupTimed(){
	clear();
	insertGameTitle(document.body);
	timedModeTitle(document.body);
	scoreProgress(document.body);
	writeGameElements(document.body);
	$("body").append($("<div></div>").attr({id: "timerBar", "class": "timeBar timerBarDecrease60s"}));
	displayQuestion();
	timeOut = setTimeout(function(){gameOverArcade(2);}, 60000);
}

function displayQuestion(){
	var displayCol = Math.floor(Math.random() * colourCodes.length);
	var correctCol = Math.floor(Math.random() * colourCodes.length);
	//document.getElementById("Display").className = "wordDisplay fadeOutGame" + (getCode() + 1);
	//restartCSSAni(document.getElementById("Display"));
	document.getElementById("Display").style.color = colourCodes[correctCol];
	$("html, body").css("background-color", gameBG[getCode()]);
	document.getElementById("Display").innerHTML = colourNames[displayCol];
	
	if(gameMode == 1){
		$("#timerBar").attr("class", "timeBar timerBarDecrease" + (getCode() + 1));
		restartCSSAni(document.getElementById("timerBar"));
	}
	recordScore();
	
	var a = [$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"}),
		$("<a></a>").attr({"class": "button turquoise", href: "javascript: void(0);"})
	];
	var n = [0, 0, 0, 0];
	correctAnswer = Math.floor(Math.random() * 4);
	do{
		displayAnswer = Math.floor(Math.random() * 4);
	}while(displayAnswer == correctAnswer);
	
	do{
		n[0] = Math.floor(Math.random() * colourNames.length);
	}while(n[0] == correctCol || n[0] == displayCol);
	do{
		n[1] = Math.floor(Math.random() * colourNames.length);
	}while(n[1] == correctCol || n[1] == displayCol || n[1] == n[0]);
	do{
		n[2] = Math.floor(Math.random() * colourNames.length);
	}while(n[2] == correctCol || n[2] == displayCol || n[2] == n[1] || n[2] == n[0]);
	do{
		n[3] = Math.floor(Math.random() * colourNames.length);
	}while(n[3] == correctCol || n[3] == displayCol || n[3] == n[2] || n[3] == n[1] || n[3] == n[0]);
	n[correctAnswer] = correctCol;
	if(correctCol != displayCol) n[displayAnswer] = displayCol;
	
	for(var i = 0; i < a.length; i++){
		a[i].html((i + 1) + ". " + colourNames[n[i]] + " (" + keyDisplay[i] + ")");
		a[i].attr("class", "button " + (colour_assist ? ("gameColour" + (n[i] + 1)) : "xinqie_karada_no_iro_1"));
		a[i].click(function(){
			inputAns($("#options a.button").index(this));
		});
	}
	optButtons[i] = [a[0], a[1], a[2], a[3]];
	$("#options").empty();
	$("#options").append(a[0]);
	$("#options").append(" ");
	$("#options").append(a[1]);
	if($(window).width() < 500){
        $("#options").append(document.createElement("br"));
        $("#options").append(document.createElement("br"));
    }else{
        for(var i = 0; i < optionsSpaceWidth; i++) $("#options").append(String.fromCharCode(160));
    }
	$("#options").append(a[2]);
	$("#options").append(" ");
	$("#options").append(a[3]);
	
	if(gameMode == 1){
		clearTimeout(timeOut);
		timeOut = setTimeout(function(){gameOverArcade(1);}, getTiming());
	}
}

function getCode(){
	if(score > 300){
		return 7;
	}else if(score > 250){
		return 6;
	}else if(score > 200){
		return 5;
	}else if(score > 150){
		return 4;
	}else if(score > 100){
		return 3;
	}else if(score > 50){
		return 2;
	}else if(score > 20){
		return 1;
	}else{
		return 0;
	}
}

function getTiming(){
	if(score > 300){
		return 500;
	}else if(score > 250){
		return 1000;
	}else if(score > 200){
		return 1500;
	}else if(score > 150){
		return 2000;
	}else if(score > 100){
		return 2500;
	}else if(score > 50){
		return 3000;
	}else if(score > 20){
		return 4000;
	}else{
		return 5000;
	}
}

function inputAns(ans, demo){
	if(gameStarted){
		if(ans == correctAnswer){
			if(demo || !document.getElementById("Display")){
				if(gameMode == 2){
					gameSetupTimed();
				}else{
					gameSetupArcade();
				}
			}else{
				score++;
			}
			displayQuestion();
		}else{
			gameOverArcade(0);
		}
	}
}

function gameOverArcade(type){
	gameStarted = false;
	clearTimeout(timeOut);
	$("html, body").css("background-color", gameBG[0]);
	var newBest = false;
	if(gameMode == 1){
        if(colour_assist && score > arcadeBest){
            newBest = true;
			arcadeBest = score;
			if(typeof(Storage) !== "undefined"){
				localStorage.colArcBest = arcadeBest;
			}
			//setCookie("colArcBest", arcadeBest);
		}else if(!colour_assist && score > arcadeBestNoAssist){
			newBest = true;
			arcadeBestNoAssist = score;
			if(typeof(Storage) !== "undefined"){
				localStorage.plnArcBest = arcadeBestNoAssist;
			}
			//setCookie("plnArcBest", arcadeBestNoAssist);
		}
	}else if(gameMode == 2){
        if(colour_assist && score > timedBest){
            newBest = true;
			timedBest = score;
			if(typeof(Storage) !== "undefined"){
				localStorage.colTimBest = timedBest;
			}
			//setCookie("colTimBest", timedBest);
        }else if(!colour_assist && score > timedBestNoAssist){
            newBest = true;
			timedBestNoAssist = score;
			if(typeof(Storage) !== "undefined"){
				localStorage.plnTimBest = timedBestNoAssist;
			}
			//setCookie("plnTimBest", timedBestNoAssist);
        }
	}
	if(gameMode == 1){
        if(colour_assist){
            arcadeAvg = (arcadeAvg * arcadeTimes + score) / (arcadeTimes + 1);
            arcadeTimes++;
            if(typeof(Storage) !== "undefined"){
                localStorage.colArcAvg = arcadeAvg;
                localStorage.colArcCnt = arcadeTimes;
            }
            //setCookie("colArcAvg", arcadeAvg);
            //setCookie("colArcCnt", arcadeTimes);
        }else{
            arcadeAvgNoAssist = (arcadeAvgNoAssist * arcadeTimesNoAssist + score) / (arcadeTimesNoAssist + 1);
            arcadeTimesNoAssist++;
            if(typeof(Storage) !== "undefined"){
                localStorage.plnArcAvg = arcadeAvgNoAssist;
                localStorage.plnArcCnt = arcadeTimesNoAssist;
            }
            //setCookie("plnArcAvg", arcadeAvgNoAssist);
            //setCookie("plnArcCnt", arcadeTimesNoAssist);
        }
	}else if(gameMode == 2){
        if(colour_assist){
            timedAvg = (timedAvg * timedTimes + score) / (timedTimes + 1);
            timedTimes++;
            if(typeof(Storage) !== "undefined"){
                localStorage.colTimAvg = timedAvg;
                localStorage.colTimCnt = timedTimes;
            }
            //setCookie("colTimAvg", timedAvg);
            //setCookie("colTimCnt", timedTimes);
        }else{
            timedAvgNoAssist = (timedAvgNoAssist * timedTimesNoAssist + score) / (timedTimesNoAssist + 1);
            timedTimesNoAssist++;
            if(typeof(Storage) !== "undefined"){
                localStorage.plnTimAvg = timedAvgNoAssist;
                localStorage.plnTimCnt = timedTimesNoAssist;
            }
            //setCookie("plnTimAvg", timedAvgNoAssist);
            //setCookie("plnTimCnt", timedTimesNoAssist);
        }
	}
	clear();
	insertGameTitle(document.body);
	gameOverTitle(document.body, type);
	scoreLine(document.body, gameMode, newBest);
	gameOverButtons(document.body);
}