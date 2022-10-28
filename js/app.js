// get elements
const screen_01 = document.getElementById('s1');
const screen_02 = document.getElementById('s2');
const cambtn = document.getElementById('cambtn');
const camaudiobtn = document.getElementById('camaudiobtn');
const sharebtn = document.getElementById('sharebtn');
const screen_two = document.getElementById('screen_two');


// global variable declare
let camStream;
let screenStream;

const shareCam = () => {
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        camStream = stream;
        screen_01.srcObject = stream;
    });

}

shareCam();

let getVideoStream = true;
cambtn.onclick = () => {
    getVideoStream = !getVideoStream;
    camStream.getVideoTracks()[0].enabled = getVideoStream;
    cambtn.classList.toggle('active');
}

let getAudioStream = true;
camaudiobtn.onclick = (e) => {
    getAudioStream = !getAudioStream;
    camStream.getAudioTracks()[0].enabled = getAudioStream;
    camaudiobtn.classList.toggle('active');
}

const shareScreen = () => {

    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
    .then(stream => {
        screenStream = stream;
        screen_01.srcObject = stream;
        screen_02.srcObject = camStream;
    });

}

// sharee pc screen
let shareStatus = false;
sharebtn.onclick = () => {
    shareStatus = !shareStatus;

    if(shareStatus){
        screen_two.style.display = "block";
        shareScreen();
    }else {
        screen_two.style.display = "none";
        screenStream.getVideoTracks()[0].enabled = shareStatus;
        screen_01.srcObject = camStream;
    }

    

}


