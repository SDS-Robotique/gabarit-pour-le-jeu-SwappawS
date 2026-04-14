import Titre from "./titre";

class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
         
    }


    init(data){
        var logo; 
    }
    
    preload(){
    this.load.image('logo', 'assets/images/goofycatstudio.png');
   
    }
    
    create(data){
    logo = this.add.image(300,250 , 'logo');
    logo.setOrigin( 300, 400);
    
    }
    
    update(time, delta){
        if(time<5000){
            this.scene.switch('titre_scene');
        }
   
    }
    
}

export default Intro