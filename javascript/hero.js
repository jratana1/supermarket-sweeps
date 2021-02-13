function Hero(map, x, y, facing, image, npcs) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;
    this.npcs = npcs
    // facing = R=0 U=1 L=2 D=3
    this.facing = facing
    this.image = Loader.getImage(image)
}
Hero.prototype.hitBox = function(){
    return {
    left: this.x - this.width/2,
    right: this.x + this.width/2 -1,
    top: this.y + this.height/2,
    bottom: this.y + this.height -1
    }
};

Hero.SPEED = 256; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {

    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;
    
    // clamp values
    var maxX = (this.map.cols-2) * this.map.tsize;
    var maxY = (this.map.rows-2) * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));

    // check if we walked into a non-walkable tile
    this._collide(delta, dirx, diry);
};

Hero.prototype.npcCollision = function (npc){ 
    let npcHitBox = npc.npcHitBox()
    let heroHitBox = this.hitBox()

    if (npcHitBox.left < heroHitBox.right&&
           npcHitBox.right > heroHitBox.left &&
           npcHitBox.top < heroHitBox.bottom &&
           npcHitBox.bottom > heroHitBox.top) {
            return true
        }
            return false
}

Hero.prototype._collide = function (delta, dirx, diry) {
    let row, col;

    // check for collisions on sprite sides
    let collision =
        this.map.isSolidTileAtXY(this.hitBox()["left"], this.hitBox()["top"]) ||
        this.map.isSolidTileAtXY(this.hitBox()["right"], this.hitBox()["top"]) ||
        this.map.isSolidTileAtXY(this.hitBox()["right"], this.hitBox()["bottom"]) ||
        this.map.isSolidTileAtXY(this.hitBox()["left"], this.hitBox()["bottom"])
        //loop through all hexes with NPCs
        
    let npcCollision = this.npcs.all.reduce(function (res, npc) {
                            let npcCollision = this.npcCollision(npc)
                                return npcCollision || res
                            }.bind(this), false);
    
    if (!collision && !npcCollision) { return; }
    
        if (diry > 0) {
            row = this.map.getRow(this.hitBox()["bottom"]);
            this.y = -Hero.SPEED*delta + this.y
        }
        else if (diry < 0) {
            row = this.map.getRow(this.hitBox()["top"]);
            this.y = Hero.SPEED*delta + this.y
        }
        else if (dirx > 0) {
            col = this.map.getCol(this.hitBox()["right"]);
            this.x = -Hero.SPEED*delta+ this.x;
        }
        else if (dirx < 0) {
            col = this.map.getCol(this.hitBox()["left"]);
            this.x = Hero.SPEED*delta + this.x;
        }
};

Hero.prototype.pickUp = function () {
    let row, col;
    let buffer = 5

    switch (this.facing) {
        case 0:
            col = this.map.getCol(this.hitBox()["right"]+buffer);
            row = this.map.getRow(this.y);
            break;
        case 1:
            col = this.map.getCol(this.x);
            row = this.map.getRow(this.hitBox()["top"]-buffer);
            break;
        case 2:
            col = this.map.getCol(this.hitBox()["left"]-buffer);
            row = this.map.getRow(this.y);
            break;
        case 3:
            col = this.map.getCol(this.x);
            row = this.map.getRow(this.hitBox()["bottom"]+buffer);
            break;
        }

     let tile = this.map.getTile(col, row, 2);
     if (tile){
         map.tiles[2][row * map.cols + col]= {}
     }
};