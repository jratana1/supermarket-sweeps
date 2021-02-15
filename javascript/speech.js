let speech_flag = true
let text = {greeting: "Hello, username input.  Use the arrow keys to move, ' S ' to interact.  You have 30 seconds to get all the items on your shopping list.  Press ' Enter ' to start.  Go!!!"};

class Speech {  
    static getLines = function (text) {
            let maxWidth = 385
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];
        
            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = this.ctx.measureText(currentLine + " " + word).width;
                if (width < maxWidth) {
                    currentLine += " " + word;
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
            lines.push(currentLine);
            return lines;
        }.bind(Game)

    static drawBubble= function (x, y, w, h, radius, text) {
               if (speech_flag) {
                var r = x + w;
               var b = y + h;
            
               this.ctx.beginPath();
               this.ctx.fillStyle = "white";
               this.ctx.fill();
               this.ctx.strokeStyle = "black";
               this.ctx.lineWidth = "2";
               this.ctx.moveTo(x + radius, y);
            
               this.ctx.lineTo(r - radius, y);
               this.ctx.quadraticCurveTo(r, y, r, y + radius);
               this.ctx.lineTo(r, y + h-radius);
               this.ctx.quadraticCurveTo(r, b, r - radius, b);
               this.ctx.lineTo(x + radius, b);
               this.ctx.quadraticCurveTo(x, b, x, b - radius);
               this.ctx.lineTo(x, y + radius);
               this.ctx.quadraticCurveTo(x, y, x + radius, y);
               this.ctx.fill();
               this.ctx.stroke();
               this.ctx.fillStyle = "#000";
               this.ctx.font = "15px Helvetica";
               
               Speech.getLines(text).forEach(function (line,index) {
                    this.ctx.fillText(line, x + 20, y + 20 + (index*20))
               }.bind(Game))
               }
            }.bind(Game)
}