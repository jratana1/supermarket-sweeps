class Npc extends Hero {
    constructor(map, x, y, facing, image, chars, type) {
        super(map);
        this.x = x
        this.y = y
        this.width = map.tsize;
        this.height = map.tsize;
        this.chars = chars
        // facing = R=0 U=1 L=2 D=3
        this.facing = facing
        this.image = Loader.getImage(image)
        this.canMove = true;
        this.waiting = false;
        this.moveTimer = 0;
        this.type = type
      };

    aiMove(delta) {
            switch(this.facing){
                case 0:
                    this.dirx= 1
                    this.diry= 0
                    break;
                case 1:
                    this.dirx= 0
                    this.diry= -1 
                    break;
                case 2:
                    this.dirx= -1
                    this.diry= 0
                    break;
                case 3:
                    this.dirx= 0
                    this.diry= 1
                    break;
            }


            if (!this.waiting && this.moveTimer < 1) {
              //Random direction
              this.facing = Math.floor(Math.random() * Math.floor(4))
              //random time
              this.restStepTimer();
            } else if (!this.waiting && this.moveTimer > 0) {
              //Move to preset direction
 
                this.move(delta, this.dirx, this.diry)
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

class Characters{
    constructor() {
        this.all = [];
      }
    
    newCharacter(map, x, y, facing, sprite, chars, type){
        let p = new Npc(map, x, y, facing, sprite, chars, type)
        this.all.push(p)
        return p
    }

    get allCharacters(){
        return this.all
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