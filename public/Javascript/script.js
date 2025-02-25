function test(){
	var x;
	x = document.getElementById('background_audio').paused;
	document.write(x);
}


function mute(){
	var audio = document.getElementById('background_audio')
	var playbutton = document.getElementById('play_button')

 	if(audio.paused == true){
 		audio.play();
 		playbutton.src="Ressources/speaker.svg";
 	} else {
 		audio.pause();
 		playbutton.src="Ressources/speakermute.svg";
 	}
}

