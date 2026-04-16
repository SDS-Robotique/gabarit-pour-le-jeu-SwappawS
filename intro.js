import Titre from "/titre.js";

var logo; 

class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
        
    }


    init(data){
    
    }
    
    preload(){
    this.load.image('logo','assets/images/goofycatstudio.png');
    }
    
    create(data){
    logo = this.add.image(350, 150,'logo');
    logo.setOrigin( 0, 0);
    logo.setScale(1);
    
    }
    
    update(time, delta){
        if(time>5000){
            this.scene.switch('titre_scene');
        
        }
        
    }
    
}

export default Intro