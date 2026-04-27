var bg;
var keyS;

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
    }
    
    preload(){
        this.load.image('titlescreen', 'assets/images/titlescreen.png');
    }
    
    create(data){
        bg = this.add.image(0, 0, 'titlescreen');
        bg.setOrigin(0,0);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    
    update(time, delta){
        if(keyS.isDown){
            this.scene.switch('game_scene');
        }
        
    }
    
}

export default Titre