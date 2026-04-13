

class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
    
    }
    
    preload(){
        this.load.image('forest', 'assets/images/forest_background.png');
        
    }
    
    create(data){
        var bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    

    }
    
    update(time, delta){
     
    }
    
}

export default Game
