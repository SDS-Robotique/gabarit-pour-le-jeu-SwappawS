import { LOG_VERSION } from "phaser";


class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
         
    }


    init(data){
        var logo; 
    }
    
    preload(){
       logo = this.load.image('logo', 'asstes/images/goofycatstudio.png');
   
    }
    
    create(data){
    logo = this.add.image(0,0 , 'logo');
    logo.setOrigin(0 , 0);
    
    }
    
    update(time, delta){
   
    }
    
}

export default Intro