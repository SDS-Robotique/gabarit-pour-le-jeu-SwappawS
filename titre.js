

class Titre extends Phaser.Scene {
    constructor(){
        super({key : 'titre_scene'})
    }

    init(data){
        var bg;
        var keya;
    }
    
    preload(){
        this.load.image('forest', 'assets/images/titlescreen.png');
  var bg;
    }
    
    create(data){
     
        bg = this.add.image(480, 270, 'forest');
             bg.setOrigin(480,270);
             keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }
    
    update(time, delta){
        if(KeyA.isDown){
            this.scene.switch('game_scene');
        }
        
    }
    
}

export default Titre