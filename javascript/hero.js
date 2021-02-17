function Hero(map, x, y, facing, image, chars, type) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;
    this.chars = chars
    // facing = R=0 U=1 L=2 D=3
    this.facing = facing
    this.image = Loader.getImage(image)
    this.type = type
    this.inventory = []
    this.shoppingList = [{x:6,y:8}]
}
Hero.prototype.hitBox = function(type){
    if (this.type === "hero"){
        return {
            left: this.x - this.width/2,
            right: this.x + this.width/2 -1,
            top: this.y + this.height/2,
            bottom: this.y + this.height -1
        }
    } else if (this.type === "npc") {
        return {
            left: this.x - this.width/2,
            right: this.x + this.width/2 -1,
            top: this.y - this.height/2,
            bottom: this.y + this.height -1
        }
    }
};

Hero.SPEED = 160; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {

    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;
    
    // clamp values
    var maxX = (this.map.cols-2) * this.map.tsize;
    var maxY = (this.map.rows-4) * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));

    // check if we walked into a non-walkable tile
    this._collide(delta, dirx, diry);
};

Hero.prototype.objCollision = function (obj){ 
    let objHitBox = obj.hitBox()
    let heroHitBox = this.hitBox()

    if (objHitBox.left < heroHitBox.right&&
        objHitBox.right > heroHitBox.left &&
        objHitBox.top < heroHitBox.bottom &&
        objHitBox.bottom > heroHitBox.top) {
            return true
    } else {
            return false
    }
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
     
    let objCollision = this.chars.all.reduce(function (res, obj) {
                            let tmp;
                            if (obj !== this) {
                                    tmp = this.objCollision(obj)       
                                    }
                            else {
                                    return false
                            }
                            return res || tmp;
                        }.bind(this), false)
                         
    
    if (!collision && !objCollision) { return; }

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
    let rowAdjust = 10
    switch (this.facing) {
        case 0:
            col = this.map.getCol(this.hitBox()["right"]+buffer);
            row = this.map.getRow(this.y + rowAdjust);
            break;
        case 1:
            col = this.map.getCol(this.x);
            row = this.map.getRow(this.hitBox()["top"]-buffer);
            break;
        case 2:
            col = this.map.getCol(this.hitBox()["left"]-buffer);
            row = this.map.getRow(this.y + rowAdjust);
            break;
        case 3:
            col = this.map.getCol(this.x);
            row = this.map.getRow(this.hitBox()["bottom"]+buffer);
            break;
        }

     let tile = this.map.getTile(col, row, 2);
     if (tile["x"]){
        this.inventory.push(map.tiles[2][row * map.cols + col]) 
        map.tiles[2][row * map.cols + col]= {}
        clickSound.play()
     }
     console.log("picking up")
};