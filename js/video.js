
var video

window.addEventListener("load", function() {
	video=document.querySelector(".video");
	console.log("Good job opening the window");
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	let volumeOut = document.querySelector("#volume").innerHTML = (video.volume*100) + "%"

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate*=.9;
	console.log("Video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate*=1.1;
	console.log("Video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime+=10;
	if (video.currentTime>59){
		video.currentTime = 0;
		video.play()
	}
	console.log("Skipped ahead video is at time: " + video.currentTime + " seconds");
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
		video.muted = false;}
	else{
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
		video.muted = true;}
});

document.querySelector("#slider").addEventListener("click", ()=> {
	var slider = document.querySelector("#slider").value;
	video.volume = slider/100;

	let volumeOut = document.querySelector("#volume");
	volumeOut.innerText = (video.volume * 100) + "%";
	console.log("Used slider to change volume");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Added oldschool layer");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed oldschool layer");
});

