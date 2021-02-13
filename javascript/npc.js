class Npc extends Hero {
    npcHitBox(){
        return {
        left: this.x - this.width/2,
        right: this.x + this.width/2 -1,
        top: this.y - this.height/2,
        bottom: this.y + this.height -1
        }
    };

    npcMove(delta){
        let dirx = -1
        if (dirx < 0){
            this.facing = 2
        }
        this.move(delta, dirx, 0)
    }

    
  
}

class Npcs{
    constructor() {
        this.all = [];
      }
    
    newNpc(map, x, y, facing, sprite, npcs){
        let p = new Npc(map, x, y, facing, sprite, npcs)
        this.all.push(p)
        return p
    }

    get allNpcs(){
        return this.all
      }

    get numberOfNpcs(){
      return this.npcs.length
    }
}

//hitbox collision
// var rect1 = {x: 5, y: 5, width: 50, height: 50} {left = x, right = x+width, top = y, bottom = y+height}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y) {
//     // collision detected!
// }
