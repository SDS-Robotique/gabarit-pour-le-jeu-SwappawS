import Titre from "/titre.js";

class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
         var logo; 
    }


    init(data){
    
    }
    
    preload(){
    this.load.image('logo', 'assets/images/goofycatstudio.png');
   
    }
    
    create(data){
       var logo; 
    logo = this.add.image(480,270 ,'logo');
    logo.setOrigin( 480, 270);
    logo.setScale(5);
    
    }
    
    update(time, delta){
        if(time>10000){
            this.scene.switch('titre_scene');
        }
   
    }
    
}

export default Intro