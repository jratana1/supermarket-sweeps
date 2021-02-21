//global vars
const stepCycleLoop = [0, 1, 2, 3, 4 ,5];
let currentStepLoopIndex = 0;
let frameCount = 0;
let musicFlag= false;
let firstTap= false;
let startTime = null,
    gameLength = 2000,
    startTimer = false
let Game = {};
timeElapsed =30000
let muteButton = document.getElementById("mute")
let session = {}
let highScore = {}

// start up function

window.onload = function () {
    let context = document.getElementById('demo').getContext('2d');
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    highScores()
    Game.run(context);
};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.tick = function (elapsed) {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this._previousElapsed) / 1000;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    if (startTimer) {
        if (!startTime) startTime = elapsed;
        timeElapsed = gameLength - (elapsed - startTime)
    }

    this.update(delta);
    this._drawLayer(0, this.tileAtlas)
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc3");
    this._drawLayer(1, this.interiorsAtlas)
    this._drawLayer(2, this.itemAtlas)
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"hero");
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc1");
    this._drawHeroWalkFrame(stepCycleLoop[currentStepLoopIndex],"npc2");

    Speech.drawBubble(106, 400, 425, 70, 20, text);
    
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Shopping List", 660, 25);
    this.ctx.fillText("Score: " + this.score(), 35, 30);
    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "right";
    this.ctx.fillText((timeElapsed*0.001).toFixed(0), 740, 525);
    this.ctx.textAlign = "left";
    // this.ctx.fillText('X', 675, 96);
  
    frameCount++
    if (frameCount > 15) {
        currentStepLoopIndex++;
        frameCount = 0;
    }
    if (currentStepLoopIndex >= stepCycleLoop.length) {
        currentStepLoopIndex = 0;
    }
    // window.requestAnimationFrame(this.tick);
    if( timeElapsed > 20){
        window.requestAnimationFrame(this.tick);
    } else {
        this.over()
        if (Keyboard.isDown(Keyboard.ENTER)) {postScore(), this.reset(), displayScores(), Keyboard._keys[Keyboard.ENTER] = false}
        window.requestAnimationFrame(this.tick);
    }
    }.bind(Game);

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
    this.hero = this.chars.newCharacter(map, 225, 58, 3, 'bob', this.chars, "hero")
    this.npc1= this.chars.newCharacter(map, 200, 350, 3, 'alex', this.chars, "npc")
    this.npc2= this.chars.newCharacter(map, 300, 350, 3, 'amelia', this.chars, "npc")
    this.npc3= this.chars.newCharacter(map, 520, 105, 3, 'adam', this.chars, "npc")
    text = textCatalogue["greeting"]
    
};

Game.update = function (delta) {
    let dirx = 0;
    let diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { this.hero.facing = 2, dirx = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { this.hero.facing = 0, dirx = 1; }
    else if (Keyboard.isDown(Keyboard.UP)) { this.hero.facing = 1, diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { this.hero.facing = 3, diry = 1; }
    
    if (Keyboard.isDown(Keyboard.ENTER)) {
        speech_flag = false;
        startTimer =true;
        if (!musicFlag  && !firstTap) {
            musicFlag=true
            firstTap=true
        }
    }
    
    if (musicFlag) {   
        backgroundMusic.play();
        musicFlag =false 
    }

    this.hero.move(delta, dirx, diry);
    if (startTimer) {
        if (Keyboard.singleFire(Keyboard.S)) {this.hero.pickUp(), Keyboard._singleFire[Keyboard.S]= false;}
    }
    
    this.npc1.aiMove(delta)
    this.npc2.aiMove(delta)
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

Game.over = function() {
    text = "Game over.  Press 'enter' to play again?"
    startTimer = false
    speech_flag = true
    timeElapsed = 0
}

Game.reset = function() {
    startTimer = false
    speech_flag = true;
    startTime= null
    text = textCatalogue["greeting"]
    timeElapsed = 30000
    map.tiles[2]= [
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:1,y:6},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:9,y:1}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:10,y:4}, {x:10,y:6}, {x:12,y:6}, {x:7,y:9}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:8}, {x:0,y:0}, {x:7,y:5}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:2,y:8}, {x:3,y:2}, {x:0,y:0}, {x:0,y:0}, {x:9,y:11}, {x:6,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:6,y:1}, {x:0,y:0}, {x:11,y:12}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:7,y:2}, {x:11,y:11}, {x:0,y:0}, {x:0,y:0}, {x:11, y:1}, {x:3,y:10}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:13,y:1}, {x:5,y:6}, {x:0,y:0}, {x:0,y:0}, {x:12,y:9}, {x:11,y:2}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:3,y:7}, {x:0,y:0}, {x:3,y:1}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:1,y:7}, {x:11,y:3}, {x:0,y:0}, {x:0,y:0}, {x:5,y:2}, {x:12,y:2}, {x:0,y:0}, {x:0,y:0}, {x:2,y:2}, {x:8,y:2}, {x:0,y:0}, {x:0,y:0}, {x:3,y:4}, {x:11,y:12}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:5,y:7}, {x:5,y:10}, {x:0,y:0}, {x:0,y:0}, {x:2,y:7}, {x:12,y:5}, {x:0,y:0}, {x:0,y:0}, {x:5,y:11}, {x:3,y:8}, {x:0,y:0}, {x:0,y:0}, {x:5,y:4}, {x:3,y:1}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:5,y:12}, {x:0,y:0}, {x:10,y:6}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:4,y:7}, {x:4,y:10}, {x:0,y:0}, {x:0,y:0}, {x:11,y:10}, {x:7,y:3}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:3,y:7}, {x:7,y:8}, {x:0,y:0}, {x:0,y:0}, {x:10,y:10}, {x:10,y:7}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:3,y:4}, {x:0,y:0}, {x:11,y:10}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {}, {x:0,y:0}, {x:3, y:12}, {x:6,y:8}, {x:0,y:0}, {x:0,y:0}, {x:9,y:10}, {x:2,y:6}, {x:0,y:0}, {x:0,y:0}, {x:7,y:7}, {x:6,y:1}, {x:0,y:0}, {x:0,y:0}, {x:9,y:5}, {x:7,y:5}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {}, {x:3,y:11}, {x:5,y:8}, {x:0,y:0}, {x:0,y:0}, {x:8,y:10}, {x:11,y:4}, {x:0,y:0}, {x:0,y:0}, {x:5,y:12}, {x:6,y:12}, {x:0,y:0}, {}, {x:1,y:9}, {x:11,y:8}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:11, y:1}, {x:0,y:0}, {x:11,y:4}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},
        {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0},{x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0}
    ]
    this.chars = new Characters()
    this.hero = this.chars.newCharacter(map, 225, 58, 3, 'bob', this.chars, "hero")
    this.npc1= this.chars.newCharacter(map, 200, 350, 3, 'alex', this.chars, "npc")
    this.npc2= this.chars.newCharacter(map, 300, 350, 3, 'amelia', this.chars, "npc")
    this.npc3= this.chars.newCharacter(map, 520, 105, 3, 'adam', this.chars, "npc")
}

Game.score = function() {
    return this.hero.inventory.reduce(function(accumulator, currentValue) {
        if (this.hero.shoppingList.find(item => item.x === currentValue.x && item.y === currentValue.y)){
            return accumulator += 1
        } else {
            return accumulator -= 1
        }
        
    }.bind(Game), 0);
}.bind(Game)