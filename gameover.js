let score ;
let scoreText;
var bg;

class GameOver extends Phaser.Scene {
    constructor(){
        super({key : 'gameover_scene'})
    }

    init(data){
    }
    
    preload(){
        this.load.image('about', 'assets/images/blackbackground.png');
    }
    
    create(data){
    bg = this.add.image(0, 0, 'blackbackground');
    bg.setOrigin(0,0);
    scoreText = this.add.text(480, 280, 'Score', { 
    fontSize: '12px', 
    fill: '#hhhhhh' 
});
    }
    
    update(time, delta){
    }
    
}

export default GameOver