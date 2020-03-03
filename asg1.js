//helllllo

//initialize the audio context and also warn the viewer about the audio
var init = confirm("Click OK to if you want audio. Please be aware that a Shepard tone clip I made will play. Shepard tones are supposed to be intentionally unsettling.")
console.log(init);
if (init == true){
  context = new(window.AudioContext || window.webkitAudioContext)();
  const audioElement = document.querySelector('audio');
  const track = context.createMediaElementSource(audioElement);
  var gainNode = context.createGain();
  var filt = context.createBiquadFilter();
  var out = context.destination;
  var now = context.currentTime;

  //routing
  // track.connect(filt);
  // console.log("the track is connected to the filter");
  // filt.connect(gainNode);
  // console.log("the filter is connected to the gain node");
  // gainNode.connect(out);
  // console.log("the gain node is connected to the output");
  // console.log("now shake dem skeleton bones (initialized)");

  track.connect(out);

  track.loop = true;
  audioElement.autoplay = true;
  audioElement.play();
}
else {
  alert("audio muted.")
};

// //add in a filter because the noise is kinda harsh
// var filtFreqInput = document.getElementById('filtFreq');
// filtFreqInput.addEventListener('change', function e(){
//   console.log(filtFreqInput.value);
//   filt.type = document.getElementById('filtType').value;
//   filt.frequency.setValueAtTime(filtFreqInput.value, now);
// });
//
// //add in volume control for the same reason
// var gainInput = document.getElementById('gain');
// gainInput.addEventListener('change',function e (){
//   var gainLvl = gainInput.value/100;
//   gainNode.gain.setValueAtTime(gainLvl, now);
//   console.log(gainNode.gain.value);
// });
