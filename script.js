(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //recursos
    var background = new Image();
    background.src = "scene.png";

    var monster = new Image();
    monster.src = "monster.png";


    //objetos
    var sprites = [];
    var gameWorld = {
        img: background,
        x: 0,
        y: 0,
        width: 800,
        height: 600
    };
    sprites.push(gameWorld);

    var char = {
        img: monster,
        x: 0,
        y: 0,
        width: 64,
        height: 64
    };
    sprites.push(char);

    //centralizar char
    char.x = (gameWorld.width - char.width)/2;
    char.x = (gameWorld.width - char.height)/2;

    var cam = {
        x: 0,
        y: 0,
        width: cnv.width,
        height: cnv.height,
        leftEdge: function(){
            return this.x + (this.width * 0.25);
        },
        rightEdge: function(){
            return this.x + (this.width * 0.75);
        },
        topEdge: function(){
            return this.x + (this.width * 0.25);
        },
        bottomEdge: function(){
            return this.x + (this.width * 0.75);
        }
    }

    //centralizar cam
    cam.x = (gameWorld.width - cam.width)/2;
    cam.x = (gameWorld.width - cam.height)/2;

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

    }
      
    
    function render(){
        ctx.save();
        ctx.translate(-cam.x, -cam.y);
        for(var i in sprites){
            var spr = sprites[i];
            ctx.drawImage(spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height);
        }
    }

    loop();
    
}());
