import { LOG_VERSION } from "phaser";


class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
        
    }
    
    init(data){
    }
    
    preload(){
        this.load.image('logo', 'assets/images/goofycatstudio.png');

   
    }
    
    create(data){
      this.add.image(440,330,'logo');
    
    }
    
    update(time, delta){
   
    }
    
}

export default Intro