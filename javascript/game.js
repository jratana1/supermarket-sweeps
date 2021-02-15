let Game = {};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

const stepCycleLoop = [0, 1, 2, 3, 4 ,5];
let currentStepLoopIndex = 0;
let frameCount = 0;

let startTime = null,
    gameLength = 30000,
    isRunning = false;

Game.tick = function (elapsed) {
    
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!startTime) startTime = elapsed;

    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this._previousElapsed) / 1000;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;
    
    let timeElapsed = gameLength - (elapsed - startTime)

    this.update(delta);
    this._drawLayer(0, this.tileAtlas)
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc3");
    this._drawLayer(1, this.interiorsAtlas)
    this._drawLayer(2, this.itemAtlas)
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"hero");
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc1");
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc2");
    // this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"bill7");
    // this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"bill6");
    // this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"bill2");

    Speech.drawBubble(106, 400, 425, 70, 20, text["greeting"]);
    
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Shopping List", 660, 25);
    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "right";
    this.ctx.fillText((timeElapsed*0.001).toFixed(0), 740, 525);
    this.ctx.textAlign = "left";

  
    frameCount++
    if (frameCount > 15) {
        currentStepLoopIndex++;
        frameCount = 0;
    }
    if (currentStepLoopIndex >= stepCycleLoop.length) {
        currentStepLoopIndex = 0;
    }

    if( timeElapsed > 20 || true){
        window.requestAnimationFrame(this.tick);
    }
    }.bind(Game);

// start up function
//

window.onload = function () {
    let context = document.getElementById('demo').getContext('2d');
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    Game.run(context);
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', './images/tiles2.png'),
        Loader.loadImage('items', './images/items.png'),
        Loader.loadImage('bob', './images/bob.png'),
        Loader.loadImage('alex', './images/alex.png'),
        Loader.loadImage('amelia', './images/amelia.png'),
        Loader.loadImage('adam', './images/adam.png'),
        Loader.loadImage('interiors', './images/interiors.png')
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.A, Keyboard.S, Keyboard.ENTER]);
    this.tileAtlas = Loader.getImage('tiles')
    this.itemAtlas = Loader.getImage('items')
    this.interiorsAtlas = Loader.getImage('interiors')
    this.chars = new Characters()
    this.hero = this.chars.newCharacter(map, 300, 250, 3, 'bob', this.chars, "hero")
    this.npc1= this.chars.newCharacter(map, 200, 350, 3, 'alex', this.chars, "npc")
    this.npc2= this.chars.newCharacter(map, 300, 350, 3, 'amelia', this.chars, "npc")
    this.npc3= this.chars.newCharacter(map, 520, 100, 3, 'adam', this.chars, "npc")
    // this.bill5= this.chars.newCharacter(map, 300, 50, 3, 'bob', this.chars, "npc")
    // this.bill6= this.chars.newCharacter(map, 200, 200, 3, 'bob', this.chars, "npc")
    // this.bill7= this.chars.newCharacter(map, 250, 450, 3, 'bob', this.chars, "npc")

};

Game.update = function (delta) {
    let dirx = 0;
    let diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { this.hero.facing = 2, dirx = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { this.hero.facing = 0, dirx = 1; }
    else if (Keyboard.isDown(Keyboard.UP)) { this.hero.facing = 1, diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { this.hero.facing = 3, diry = 1; }
    
    if (Keyboard.isDown(Keyboard.ENTER)) {speech_flag = false}
    
    this.hero.move(delta, dirx, diry);
    if (Keyboard.singleFire(Keyboard.S)) { this.hero.pickUp(), Keyboard._singleFire[Keyboard.S]= false;}

    this.npc1.aiMove(delta)
    this.npc2.aiMove(delta)
    // this.bill5.aiMove(delta)
    // this.bill6.aiMove(delta)
    // this.bill7.aiMove(delta)
    // this.bill2.aiMove(delta)
};

Game._drawLayer = function (layer, atlas) {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r, layer);
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    atlas, // image
                    (tile["x"] - 1) * map.tsize, // source x
                    (tile["y"] - 1) * map.tsize, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize,  // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game._drawHeroWalkFrame = function (frameX, char) {   
        this.ctx.drawImage(
                this[`${char}`]["image"],
                (frameX+(this[`${char}`]["facing"]*6)) * (map.tsize/2),
                2 * (map.tsize),
                map.tsize/2,
                map.tsize,
                this[`${char}`]["x"] - this[`${char}`]["width"] ,
                this[`${char}`]["y"] - this[`${char}`]["height"], 
                this[`${char}`]["width"]*2,
                this[`${char}`]["height"]*2);
}