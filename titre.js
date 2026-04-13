

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
    }
    
    preload(){
        this.load.image('forest', 'assets/images/forest_background.png');
    }
    
    create(data){
    }
    
    update(time, delta){
    }
    
}

export default Titre