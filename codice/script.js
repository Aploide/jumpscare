var password=document.getElementById("password");
function love() {
    var audio = new Audio('./codice/song.mp3');
    var gif = document.getElementById("video")
    gif.setAttribute("style", "opacity: 100%;")
    audio.play();
    audio.loop=true;

}