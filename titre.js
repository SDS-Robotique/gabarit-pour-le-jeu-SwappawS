

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
        var bg
    }
    
    preload(){
        this.load.image('forest', 'assets/images/forest_background.png');

    }
    
    create(data){
        bg = this.add.image(0, 0, 'forest');
             bg.setOrigin(0,0);
    }
    
    update(time, delta){
    }
    
}

export default Titre