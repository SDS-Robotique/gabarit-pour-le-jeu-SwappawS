

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
        var bg
    }
    
    preload(){
        this.load.image('forest', 'assets/images/titlescreen.png');

    }
    
    create(data){
        bg = this.add.image(480, 270, 'forest');
             bg.setOrigin(480,270);
    }
    
    update(time, delta){
    }
    
}

export default Titre