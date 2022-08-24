var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("voice_input").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("voice_input").innerHTML = Content;
    console.log(Content);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

Webcam.attach("#camera");