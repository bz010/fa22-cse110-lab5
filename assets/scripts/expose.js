// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    var hornSelect = "";
    var volume = 50;
    let selectElement = document.getElementById("horn-select");
    selectElement.addEventListener('change', (event) => {
      let hornimg = document.querySelector('img');
      hornSelect = event.target.value;
      if(hornSelect == "air-horn"){
        hornimg.src = "assets/images/air-horn.svg";
      }
      else if(hornSelect == "car-horn"){
        hornimg.src = "assets/images/car-horn.svg";
      }
      else if(hornSelect == "party-horn"){
        hornimg.src = "assets/images/party-horn.svg";
      }
      else{
        // Do nothing as it is not a option(error)
      }
  });

  // Set 
  document.getElementById("volume").oninput = function(){
    let volimg = document.getElementById("volume-controls").getElementsByTagName("img")[0];
    let valIn = parseInt(document.getElementById("volume").value);
    volume = valIn;
    if(volume == 0){
      volimg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume < 33){
      volimg.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume < 67){
      volimg.src = "assets/icons/volume-level-2.svg";
    }
    // for volume > 67
    else{
      volimg.src = "assets/icons/volume-level-3.svg";
    }
  }

  let butt = document.querySelector("button")
  butt.addEventListener('click', (event) => {
      let playVol = document.querySelector("audio");
      if(hornSelect == "air-horn"){
        playVol.src = "assets/audio/air-horn.mp3"
        playVol.volume = volume / 100;
        playVol.play()
        
      }
      else if(hornSelect == "car-horn"){
        playVol.src = "assets/audio/car-horn.mp3";
        playVol.volume = volume / 100;
        playVol.play();
      }
      else if(hornSelect == "party-horn"){
        playVol.src = "assets/audio/party-horn.mp3";
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        playVol.volume = volume / 100;
        playVol.play();
      }
      else{
        // Do nothing as no horn was selected
      }
  });
}
