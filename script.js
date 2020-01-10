(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //recursos
    var background = new Image();
    background.src = "scene.png";



    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

    }
    
    function render(){
        ctx.drawImage(background, 0, 0, 800, 600, 0, 0, 800, 600);
    }

    loop();
    
}());