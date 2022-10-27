// get elements
const screen_01 = document.getElementById('s1');
const screen_02 = document.getElementById('s2');
const cambtn = document.getElementById('cambtn');
const camaudiobtn = document.getElementById('camaudiobtn');


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
cambtn.onclick = (e) => {
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



