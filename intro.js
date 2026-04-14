import Titre from "/titre.js";

class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
         
    }


    init(data){
        var logo; 
    }
    
    preload(){
    this.load.image('rigby', 'assets/images/goofycatstudio.png');
   
    }
    
    create(data){
    logo = this.add.image(400,250 ,'rigby');
    logo.setOrigin( 400, 250);
    logo.setScale(5);
    
    }
    
    update(time, delta){
        if(time<5000){
            this.scene.switch('titre_scene');
        }
   
    }
    
}

export default Intro