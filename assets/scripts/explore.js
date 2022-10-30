// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var press = document.querySelector("button");
  var img = document.querySelector("img");
  var text = document.getElementById("text-to-speak");
  // Defult not speaking
  var utterance = new SpeechSynthesisUtterance(" ");

  //check input of text box
  if (text.addEventListener) {
    text.addEventListener('input', (event) =>{
      // Speach event handler for browser
      utterance = new SpeechSynthesisUtterance(text.value);
    }, false);
  }
  //check if property different 
  else if (text.attachEvent) {
    // IE browser event handler
    text.attachEvent('onpropertychange', function() {
    });
  }

  // codes for speech implementation by using exmaple code from given tutorial
  const synth = window.speechSynthesis;
  const inputTxt = document.querySelector('.txt');
  const voiceSelect = document.querySelector('select');

  let voices = [];
  // get voices for dropdown
  function populateVoiceList() {
    voices = synth.getVoices();
    // set voices to dropdown recursive through loop
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      // if voice is the defult
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      // Set voice name and language
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  // from example, check voice if changed
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  // once text to speak pressed
  press.addEventListener('click', (event) => {
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    // find the voice option selected
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    // speak here
    synth.speak(utterance);
    // change the image show as speaking
    img.src = "assets/images/smiling-open.png"
    // if speaking ends, change back to smile picture
    utterance.addEventListener('end', function(event) {
      img.src = "assets/images/smiling.png"
    });
  });
}