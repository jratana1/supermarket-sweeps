let sounds = []
let clickSound = new sound("./sounds/boop2.ogg");
let backgroundMusic = new sound("./sounds/Radiohead.ogg");
backgroundMusic.sound.loop = true
backgroundMusic.sound.volume = 0.2


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
    sounds.push(this)
  }

function mute(){
  sounds.forEach(function(element) {
    if (element.sound.muted == false) {
      element.sound.muted = true;
      }
    else {
          element.sound.muted = false
      }
  }) 
};
