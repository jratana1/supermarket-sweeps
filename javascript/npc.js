class Npc extends Hero {
    constructor(map, x, y, facing, image, npcs) {
        super(map);
        this.x = x
        this.y = y
        this.width = map.tsize;
        this.height = map.tsize;
        this.npcs = npcs
        // facing = R=0 U=1 L=2 D=3
        this.facing = facing
        this.image = Loader.getImage(image)
        this.canMove = true;
        this.waiting = false;
        this.moveTimer = 0;
      }
      npcHitBox(){
        return {
        left: this.x - this.width/2,
        right: this.x + this.width/2 -1,
        top: this.y - this.height/2,
        bottom: this.y + this.height -1
        }
    };

    // npcMove(delta){
    //     let dirx = -1
    //     if (dirx < 0){
    //         this.facing = 2
    //     }
    //     this.move(delta, dirx, 0)
    // };

    aiMove(delta) {
            let dx, dy; 
            switch(this.facing){
                case 0:
                    dx= 1
                    dy= 0
                    break;
                case 1:
                    dx= 0
                    dy= -1 
                    break;
                case 2:
                    dx= -1
                    dy= 0
                    break;
                case 3:
                    dx= 0
                    dy= 1
                    break;
            }


            if (!this.waiting && this.moveTimer < 1) {
              //Random direction
              this.facing = Math.floor(Math.random() * Math.floor(4))
              //random time
              this.restStepTimer();
            } else if (!this.waiting && this.moveTimer > 0) {
              //Move to preset direction
              this.move(delta, dx, dy)
              //subtract timer
              this.moveTimer--;
              //if timer is empty, switch to waiting and reset timer.
              if (this.moveTimer <= 0) {
                this.waiting = true;
                this.restStepTimer();
              }
            } else if (this.waiting && this.moveTimer > 0) {
              //while waiting, we lower the timer.
              this.moveTimer--;
              //when the timer runs out, we flip the flag back to not waiting and start again.
              if (this.moveTimer <= 0) {
                this.waiting = false;
              }
            }
        };
      

    restStepTimer() {
        this.moveTimer = Math.floor(Math.random() * 50 + 20);
    }; 
};

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
// function aiMove(obj) {
//     // measures distance and direction between player and object.
//     var disX = Player.x - obj.x;
//     var disY = Player.y - obj.y;
//     switch (obj.type) {
//       //follow
//       case 1:
//         if (disX < range * -1) {
//           obj.nx -= 1;
//         } else if (disX > range) {
//           obj.nx += 1;
//         }
  
//         if (disY < range * -1) {
//           obj.ny -= 1;
//         } else if (disY > range) {
//           obj.ny += 1;
//         }
//         break;
//       //flee
//       case 2:
//         if (
//           disX > range * -1 &&
//           disX < range &&
//           disY > range * -1 &&
//           disY < range
//         ) {
//           if (disX > 0) {
//             obj.nx -= 1;
//           } else if (disX < 0) {
//             obj.nx += 1;
//           }
  
//           if (disY > 0) {
//             obj.ny -= 1;
//           } else if (disY < 0) {
//             obj.ny += 1;
//           }
//         }
//         break;
//       case 3:
//         if (!obj.waiting && obj.moveTimer < 1) {
//           //Random direction
//           obj.dirX = Math.floor(Math.random() * 3 - 1);
//           obj.dirY = Math.floor(Math.random() * 3 - 1);
//           //random time
//           restStepTimer(obj);
//         } else if (!obj.waiting && obj.moveTimer > 0) {
//           //Move to preset direction
//           obj.nx = obj.x + obj.dirX;
//           obj.ny = obj.y + obj.dirY;
//           //subtract timer
//           obj.moveTimer--;
//           //if timer is empty, switch to waiting and reset timer.
//           if (obj.moveTimer <= 0) {
//             obj.waiting = true;
//             restStepTimer(obj);
//           }
//         } else if (obj.waiting && obj.moveTimer > 0) {
//           //while waiting, we lower the timer.
//           obj.moveTimer--;
//           //when the timer runs out, we flip the flag back to not waiting and start again.
//           if (obj.moveTimer <= 0) {
//             obj.waiting = false;
//           }
//         }
//         break;
//       default:
//         console.log("still");
//     }
//   }
//   function restStepTimer(obj) {
//     obj.moveTimer = Math.floor(Math.random() * 50 + 20);
//   }