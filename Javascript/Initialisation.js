function initialiseGame(){
	clear();
	gameMode = 0;
	if(typeof(Storage) !== "undefined"){
		if(localStorage.colArcBest){
			arcadeBest = Number(localStorage.colArcBest);
		}
		if(localStorage.colTimBest){
			timedBest = Number(localStorage.colTimBest);
		}
		if(localStorage.colArcCnt){
			arcadeTimes = Number(localStorage.colArcCnt);
		}
		if(localStorage.colTimCnt){
			timedTimes = Number(localStorage.colTimCnt);
		}
		if(localStorage.colArcAvg){
			arcadeAvg = Number(localStorage.colArcAvg);
		}
		if(localStorage.colTimAvg){
			timedAvg = Number(localStorage.colTimAvg);
		}
		if(localStorage.colMusic){
			musicOn = Number(localStorage.colMusic) == 1;
		}
        if(localStorage.plnArcBest){
			arcadeBestNoAssist = Number(localStorage.plnArcBest);
		}
		if(localStorage.plnTimBest){
			timedBestNoAssist = Number(localStorage.plnTimBest);
		}
		if(localStorage.plnArcCnt){
			arcadeTimesNoAssist = Number(localStorage.plnArcCnt);
		}
		if(localStorage.plnTimCnt){
			timedTimesNoAssist = Number(localStorage.plnTimCnt);
		}
		if(localStorage.plnArcAvg){
			arcadeAvgNoAssist = Number(localStorage.plnArcAvg);
		}
		if(localStorage.plnTimAvg){
			timedAvgNoAssist = Number(localStorage.plnTimAvg);
		}
		if(localStorage.colAssist){
			colour_assist = Number(localStorage.colAssist) == 1;
		}
	}
	//arcadeBest = getCookieInt("colArcBest");
	//timedBest = getCookieInt("colTimBest");
	//arcadeTimes = getCookieInt("colArcCnt");
	//timedTimes = getCookieInt("colTimCnt");
	//arcadeAvg = getCookieInt("colArcAvg");
	//timedAvg = getCookieInt("colTimAvg");
	//musicOn = getCookie("colMusic") == "" ? true : getCookieBoolean("colMusic");
    //arcadeBestNoAssist = getCookieInt("plnArcBest");
	//timedBestNoAssist = getCookieInt("plnTimBest");
	//arcadeTimesNoAssist = getCookieInt("plnArcCnt");
	//timedTimesNoAssist = getCookieInt("plnTimCnt");
	//arcadeAvgNoAssist = getCookieInt("plnArcAvg");
	//timedAvgNoAssist = getCookieInt("plnTimAvg");
	//colour_assist = getCookie("colAssist") == "" ? false : getCookieBoolean("colAssist");
	
	$("body").attr("class", "unselectable");
	if (document.body.requestFullscreen){
		document.body.requestFullscreen();
	}else if(document.body.webkitRequestFullscreen){
		document.body.webkitRequestFullscreen();
	}else if(document.body.mozRequestFullScreen){
		document.body.mozRequestFullScreen();
	}else if(document.body.msRequestFullscreen){
		document.body.msRequestFullscreen();
	}
	$("body").click(function(){
		if (document.body.requestFullscreen){
			document.body.requestFullscreen();
		}else if(document.body.webkitRequestFullscreen){
			document.body.webkitRequestFullscreen();
		}else if(document.body.mozRequestFullScreen){
			document.body.mozRequestFullScreen();
		}else if(document.body.msRequestFullscreen){
			document.body.msRequestFullscreen();
		}
	});
	$("head").append('<link rel="stylesheet" type="text/css" href="CSS/CustomCursors.css">');
	insertGameTitle(document.body);
	gameModeButtons(document.body);
	versionLines(document.body);
}

function displayMusicPage(){
	clear();
	gameMode = 0;
	$("body").css("overflow", "auto");
	insertGameTitle(document.body);
	musicCreditsText(document.body);
	versionLines(document.body);
}

function setUpMusic(){
	if(musicOn) pickRandomMusic();
	document.getElementById("BGMusic").onended = function(){
		pickRandomMusic();
	};
}

function pickRandomMusic(){
	var x = document.getElementById("BGMusic");
	var music = [
		"Meditation Impromptu 01",
		"Meditation Impromptu 02",
		"Meditation Impromptu 03",
		"Deliberate Thought"
	];
	var rng = Math.floor(Math.random() * music.length);
	if (x.canPlayType("audio/mpeg")){
		x.setAttribute("src","Resources/Music/" + music[rng] + ".mp3");
	}else{
		x.setAttribute("src","Resources/Music/" + music[rng] + ".ogg");
	}
}

function displayOptionsPage(){
	clear();
	gameMode = 0;
	$("body").css("overflow", "auto");
	insertGameTitle(document.body);
	optionsText(document.body);
	versionLines(document.body);
}

function displayConfirmResetPage(){
	clear();
	gameMode = 0;
	$("body").css("overflow", "auto");
	insertGameTitle(document.body);
	confirmResetText(document.body);
	versionLines(document.body);
}

function resetData(){
	localStorage.removeItem("colArcBest");
	localStorage.removeItem("colTimBest");
	localStorage.removeItem("colArcCnt");
	localStorage.removeItem("colTimCnt");
	localStorage.removeItem("colArcAvg");
	localStorage.removeItem("colTimAvg");
	localStorage.removeItem("colMusic");
	localStorage.removeItem("plnArcBest");
	localStorage.removeItem("plnTimBest");
	localStorage.removeItem("plnArcCnt");
	localStorage.removeItem("plnTimCnt");
	localStorage.removeItem("plnArcAvg");
	localStorage.removeItem("plnTimAvg");
	localStorage.removeItem("colAssist");
	/*deleteCookie("colArcBest");
	deleteCookie("colTimBest");
	deleteCookie("colArcCnt");
	deleteCookie("colTimCnt");
	deleteCookie("colArcAvg");
	deleteCookie("colTimAvg");
	deleteCookie("colMusic");
    deleteCookie("plnArcBest");
	deleteCookie("plnTimBest");
	deleteCookie("plnArcCnt");
	deleteCookie("plnTimCnt");
	deleteCookie("plnArcAvg");
	deleteCookie("plnTimAvg");
	deleteCookie("colAssist");*/
}