

class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
    var pdv;
    var player;
    var score;
    var enemy;
    }

    
    preload(){
        this.load.image('forest', 'assets/images/forest_background.png');
        this.load.sprite('slimeV', ' assets/sprites/slime1.png');
    }
    
    create(data){
        var bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    this.score = 0;

    }
    
    update(time, delta){
     if(pdv>2){
        player = this.add.sprite(100, 400, 'slimeV')
     }
     if(pdv<1){
        player.destroy();
     }
     
     array.forEach(element => {enemy
        this.score += 5 
        
     });
     

    }
    
}

export default Game
